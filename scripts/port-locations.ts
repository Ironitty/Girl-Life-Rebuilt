import { readFileSync, readdirSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const LOCATIONS_DIR = join(__dirname, '../GL QSP/locations');
const OUTPUT_DIR = join(__dirname, '../src/locations');

interface LocationInfo {
  name: string;
  title: string;
  region: string;
  locationType: string;
  locclass: string;
  images: string[];
  actions: { label: string; target: string; arg: string }[];
  textLines: string[];
  complexity: 'simple' | 'medium' | 'complex';
  lineCount: number;
}

function extractLocationInfo(filePath: string, fileName: string): LocationInfo {
  const content = readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const name = fileName.replace('.qsps', '');

  let title = '';
  let region = '';
  let locationType = '';
  let locclass = '';
  const images: string[] = [];
  const actions: { label: string; target: string; arg: string }[] = [];
  const textLines: string[] = [];

  for (const line of lines) {
    const trimmed = line.trim();

    const titleMatch = trimmed.match(/<h[234]>([^<]+)<\/h[234]>/);
    if (titleMatch && !title) title = titleMatch[1];

    const regionMatch = trimmed.match(/\$region\s*=\s*'([^']+)'/);
    if (regionMatch) region = regionMatch[1];

    const typeMatch = trimmed.match(/\$location_type\s*=\s*'([^']+)'/);
    if (typeMatch) locationType = typeMatch[1];

    const classMatch = trimmed.match(/\$locclass\s*=\s*'([^']+)'/);
    if (classMatch) locclass = classMatch[1];

    const imgMatch = trimmed.match(/src="([^"]+\.(?:jpg|png|jpeg|gif))"/);
    if (imgMatch && !images.includes(imgMatch[1])) images.push(imgMatch[1]);

    const actMatch = trimmed.match(/act\s+'([^']+)'\s*:\s*(?:gt|gs)\s+'([^']+)'(?:\s*,\s*'([^']*)')?/);
    if (actMatch) {
      actions.push({ label: actMatch[1], target: actMatch[2], arg: actMatch[3] || '' });
    }

    const textMatch = trimmed.match(/^'([^']{20,})'$/);
    if (textMatch) textLines.push(textMatch[1]);
  }

  let complexity: 'simple' | 'medium' | 'complex' = 'simple';
  if (lines.length > 300 || actions.length > 15 || textLines.length > 20) complexity = 'complex';
  else if (lines.length > 100 || actions.length > 5) complexity = 'medium';

  return { name, title, region, locationType, locclass, images, actions, textLines, complexity, lineCount: lines.length };
}

function getRegion(name: string): string {
  if (name.startsWith('pav_') || name.includes('pavlovsk')) return 'pavlovsk';
  if (name.startsWith('pushkin_') || name.includes('pushkin')) return 'pushkin';
  if (name.startsWith('city_') || name.includes('spb') || name.includes('st_petersburg')) return 'city';
  if (name.startsWith('gad_') || name.includes('gadukino')) return 'gadukino';
  if (name.startsWith('eto_')) return 'eto';
  if (name.startsWith('kg') || name.startsWith('KG')) return 'kgd';
  return 'other';
}

function generateStub(info: LocationInfo): string {
  const { name, title, region, locationType, locclass, images, actions, textLines } = info;

  const primaryImage = images.find(i => !i.includes('.night.')) || images[0] || '';
  const uniqueActions = actions.filter((a, i) => actions.findIndex(b => b.label === a.label && b.target === a.target) === i);
  const actionsCode = uniqueActions.length > 0
    ? uniqueActions.map(a => `  { label: ${JSON.stringify(a.label)}, goto: [${JSON.stringify(a.target)}, ${JSON.stringify(a.arg)}] },`).join('\n')
    : '  // TODO: add actions';

  const cleanTexts = textLines.filter(t => !t.includes('<center>') && !t.includes('<img') && !t.includes('<h')).slice(0, 5);
  const textCode = cleanTexts.length > 0
    ? cleanTexts.map(t => `  ${JSON.stringify(t)},`).join('\n')
    : '  // TODO: add description text';

  return `// Auto-generated stub for '${name}'
// Source: ${name}.qsps (${info.lineCount} lines, ${info.complexity})

import type { LocationDef } from '../../core/types';

export const ${name}: LocationDef = {
  name: ${JSON.stringify(name)},
  title: ${JSON.stringify(title || name)},
  background: ${JSON.stringify(primaryImage)},
  region: ${JSON.stringify(region || getRegion(name))},
  locationType: ${JSON.stringify(locationType || 'unknown')},
  locclass: ${JSON.stringify(locclass)},
  description: [
${textCode}
  ],
  actions: [
${actionsCode}
  ],
};
`;
}

function main() {
  const files = readdirSync(LOCATIONS_DIR).filter(f => f.endsWith('.qsps'));
  console.log(`Found ${files.length} .qsps files`);

  const byRegion: Record<string, LocationInfo[]> = {};
  const allInfo: LocationInfo[] = [];

  for (const file of files) {
    const info = extractLocationInfo(join(LOCATIONS_DIR, file), file);
    allInfo.push(info);
    const region = getRegion(info.name);
    if (!byRegion[region]) byRegion[region] = [];
    byRegion[region].push(info);
  }

  // Generate stubs
  for (const [region, locations] of Object.entries(byRegion)) {
    const dir = join(OUTPUT_DIR, region);
    mkdirSync(dir, { recursive: true });
    for (const info of locations) {
      const stub = generateStub(info);
      writeFileSync(join(dir, `${info.name}.ts`), stub);
    }
    console.log(`  ${region}: ${locations.length} locations`);
  }

  // Generate migration report
  const reportLines = [
    '# Location Migration Report',
    '',
    `Total: ${allInfo.length} locations`,
    '',
    '| Region | Total | Simple | Medium | Complex |',
    '|--------|-------|--------|--------|---------|',
  ];

  for (const [region, locations] of Object.entries(byRegion).sort()) {
    const simple = locations.filter(l => l.complexity === 'simple').length;
    const medium = locations.filter(l => l.complexity === 'medium').length;
    const complex = locations.filter(l => l.complexity === 'complex').length;
    reportLines.push(`| ${region} | ${locations.length} | ${simple} | ${medium} | ${complex} |`);
  }

  reportLines.push('');
  reportLines.push('## Complex locations (need custom components)');
  reportLines.push('');
  for (const info of allInfo.filter(l => l.complexity === 'complex').sort((a, b) => a.region.localeCompare(b.region))) {
    reportLines.push(`- \`${info.name}\` (${info.lineCount} lines, ${info.actions.length} actions, ${getRegion(info.name)})`);
  }

  writeFileSync(join(__dirname, '../MIGRATION_REPORT.md'), reportLines.join('\n'));
  console.log('\nReport written to MIGRATION_REPORT.md');
}

main();
