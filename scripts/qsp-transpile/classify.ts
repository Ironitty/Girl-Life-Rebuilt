import type { QspLocation } from './ast';

export type ComplexityClass = 'A' | 'B' | 'C' | 'D';

export interface Classification {
  cls: ComplexityClass;
  reasons: string[];
  sceneCount: number;
  actionCount: number;
  ifCount: number;
  gsCount: number;
  assignCount: number;
  dynamicTextCount: number;
  unknownCount: number;
}

export interface GenMetrics {
  todoCount: number;
  unsupportedConstructs: string[];
  actionCount: number;
  targetCount: number;
  stateWrites: string[];
  stateReads: string[];
  gsCalls: string[];
}

export interface ConfidenceReport {
  score: number;
  status: 'AUTO-ACCEPT' | 'AI REVIEW' | 'MANUAL';
  unsupportedConstructs: number;
  dynamicAccess: number;
  invokes: number;
  unresolvedTargets: number;
  penalties: string[];
}

const SYSTEM_MODULES = new Set([
  'shop_utils', 'combat', 'transport_functions', 'calendar_events',
  'street_events', 'library_functions', 'dialogue', 'npc_dialogue',
  'daily_routine', 'post_events', 'court', 'housing', 'taxi',
  'food', 'state', 'DNA', 'setup_dynamics', 'AppearanceSystem',
]);

const NOOP_GS = new Set([
  "stat", "themes", "core_library", "sweat", "drugs", "willpower",
  "exp_gain", "jobs", "mood", "arousal", "dinsex", "din_van",
  "selfplay", "home_events", "boyStat", "cum_manage", "washer",
  "money", "time", "boydesc", "pcs_nickname", "pc_desc",
]);

export function classify(loc: QspLocation): Classification {
  const reasons: string[] = [];
  let sceneCount = 0;
  let actionCount = 0;
  let ifCount = 0;
  let gsCount = 0;
  let assignCount = 0;
  let dynamicTextCount = 0;
  let unknownCount = 0;
  let systemDep = false;

  const count = (nodes: any[]) => {
    for (const n of nodes) {
      switch (n.kind) {
        case 'scene': sceneCount++; count(n.body); break;
        case 'act': actionCount++; count(n.body); break;
        case 'if': ifCount++; count(n.thenBody); count(n.elseBody); break;
        case 'gs':
          gsCount++;
          if (SYSTEM_MODULES.has(n.module)) systemDep = true;
          break;
        case 'assign': assignCount++; break;
        case 'text': if (n.dynamic) dynamicTextCount++; break;
        case 'unknown': unknownCount++; break;
      }
    }
  };

  sceneCount = loc.scenes.length;
  for (const s of loc.scenes) count(s.body);
  count(loc.topLevel);

  for (const u of loc.unsupported) {
    if (u.includes('dyneval') || u.includes('dynvar')) { unknownCount++; }
  }

  if (systemDep) {
    reasons.push('depends on system module');
  }
  if (loc.lineCount > 300) reasons.push(`${loc.lineCount} lines`);
  if (ifCount > 5) reasons.push(`${ifCount} if-blocks`);
  if (dynamicTextCount > 3) reasons.push(`${dynamicTextCount} dynamic texts`);
  if (unknownCount > 3) reasons.push(`${unknownCount} unknown constructs`);
  if (actionCount > 15) reasons.push(`${actionCount} actions`);

  let cls: ComplexityClass;
  if (systemDep || loc.lineCount > 500 || ifCount > 15 || dynamicTextCount > 8) {
    cls = 'D';
  } else if (loc.lineCount > 200 || ifCount > 8 || dynamicTextCount > 4 || unknownCount > 5) {
    cls = 'C';
  } else if (ifCount > 0 || assignCount > 0 || gsCount > 2 || loc.lineCount > 60) {
    cls = 'B';
  } else {
    cls = 'A';
  }

  return { cls, reasons, sceneCount, actionCount, ifCount, gsCount, assignCount, dynamicTextCount, unknownCount };
}

export function confidence(loc: QspLocation, cls: Classification): number {
  let score = 100;
  score -= cls.unknownCount * 8;
  score -= cls.dynamicTextCount * 5;
  if (cls.cls === 'D') score -= 30;
  if (cls.cls === 'C') score -= 15;
  if (cls.cls === 'B') score -= 5;
  return Math.max(0, Math.min(100, score));
}

export function detailedConfidence(
  loc: QspLocation,
  cls: Classification,
  gen: GenMetrics,
  knownLocations: Set<string>,
): ConfidenceReport {
  let score = 100;
  const penalties: string[] = [];

  const unsupported = gen.todoCount;
  if (unsupported > 0) {
    const pen = unsupported * 5;
    score -= pen;
    penalties.push(`unsupported constructs: ${unsupported} (-${pen})`);
  }

  const dynamicAccess = cls.dynamicTextCount + cls.unknownCount;
  if (dynamicAccess > 0) {
    const pen = dynamicAccess * 4;
    score -= pen;
    penalties.push(`dynamic variable access: ${dynamicAccess} (-${pen})`);
  }

  let systemInvokes = 0;
  let otherInvokes = 0;
  for (const call of gen.gsCalls) {
    const mod = call.split(' ')[0]?.replace(/['"]/g, '') ?? '';
    if (SYSTEM_MODULES.has(mod)) systemInvokes++;
    else if (!NOOP_GS.has(mod)) otherInvokes++;
  }
  const invokes = systemInvokes + otherInvokes;
  if (invokes > 0) {
    const pen = systemInvokes * 4 + otherInvokes * 2;
    score -= pen;
    penalties.push(`invokes: ${invokes} (system: ${systemInvokes}, other: ${otherInvokes}) (-${pen})`);
  }

  let unresolved = 0;
  for (const t of gen.stateReads) {
    if (t.startsWith('gt_') && !knownLocations.has(t.replace('gt_', ''))) unresolved++;
  }
  if (unresolved > 0) {
    const pen = unresolved * 6;
    score -= pen;
    penalties.push(`unresolved targets: ${unresolved} (-${pen})`);
  }

  if (cls.cls === 'D') { const pen = 15; score -= pen; penalties.push(`class D (-${pen})`); }
  else if (cls.cls === 'C') { const pen = 8; score -= pen; penalties.push(`class C (-${pen})`); }
  else if (cls.cls === 'B') { const pen = 3; score -= pen; penalties.push(`class B (-${pen})`); }

  if (loc.lineCount > 300) { const pen = 8; score -= pen; penalties.push(`${loc.lineCount} lines (-${pen})`); }
  else if (loc.lineCount > 100) { const pen = 4; score -= pen; penalties.push(`${loc.lineCount} lines (-${pen})`); }

  score = Math.max(0, Math.min(100, score));

  let status: ConfidenceReport['status'];
  if (score >= 85 && cls.cls === 'A' && unsupported === 0) {
    status = 'AUTO-ACCEPT';
  } else if (score >= 55) {
    status = 'AI REVIEW';
  } else {
    status = 'MANUAL';
  }

  return {
    score,
    status,
    unsupportedConstructs: unsupported,
    dynamicAccess,
    invokes,
    unresolvedTargets: unresolved,
    penalties,
  };
}
