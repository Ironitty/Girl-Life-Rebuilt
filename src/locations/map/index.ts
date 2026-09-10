import type { GameState, ActionDef, LocationDef } from '../../core/types';
import { SceneBuilder } from '../../core/scene';
import { AREAS, WORLD_IMAGE, WORLD_AREAS } from './areaData';

function resolveAreaId(arg: string): string {
  if (arg === 'world' || arg === '') return 'world';
  for (const key of Object.keys(AREAS)) {
    if (arg.startsWith(key)) return key;
  }
  return 'world';
}

function buildWorldView(_s: GameState, backLoc: string, backArg: string, scene: SceneBuilder): void {
  scene.mainText = `<div style="text-align:center"><h2>World Map</h2><img src="${WORLD_IMAGE}" style="max-width:100%;border-radius:8px;margin:12px 0"></div>`;
  const acts: ActionDef[] = WORLD_AREAS.map((a) => ({
    label: a.label,
    goto: [a.id, 'start'] as [string, string],
  }));
  acts.push({ label: '<- Back', goto: [backLoc, backArg] });
  scene.curActs = acts;
}

function buildAreaView(s: GameState, areaId: string, backLoc: string, backArg: string, scene: SceneBuilder): void {
  const area = AREAS[areaId];
  if (!area) {
    buildWorldView(s, backLoc, backArg, scene);
    return;
  }

  const navLinks = area.adjacent
    .map((a) => `<a href="#" data-goto="${a.id}:start" style="color:var(--gl-accent);margin:0 4px">${a.label}</a>`)
    .join(' | ');

  scene.mainText = `<div style="text-align:center">
    <h2>${area.title}</h2>
    <img src="${area.image}" style="max-width:100%;border-radius:8px;margin:12px 0">
    <div style="margin-top:8px">
      <b>Areas:</b> ${navLinks}
    </div>
    <div style="margin-top:8px">
      <a href="#" data-goto="map_view:world" style="color:var(--gl-accent)">&lt;- World Map</a>
      &nbsp;|&nbsp;
      <a href="#" data-goto="${areaId}:start" style="color:var(--gl-accent)">&lt;- Back</a>
    </div>
  </div>`;

  const acts: ActionDef[] = area.adjacent.map((a) => ({
    label: a.label,
    goto: [a.id, 'start'] as [string, string],
  }));
  acts.push({ label: 'World Map', goto: ['map_view', 'world'] });
  acts.push({ label: '<- Back', goto: [areaId, 'start'] });
  scene.curActs = acts;
}

function mapViewEnter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  const backLoc = s.prevLoc || 'start';
  const backArg = s.prevArg || '';

  if (arg === 'world' || arg === '') {
    buildWorldView(s, backLoc, backArg, scene);
  } else {
    const areaId = resolveAreaId(arg);
    if (areaId === 'world') {
      buildWorldView(s, backLoc, backArg, scene);
    } else {
      buildAreaView(s, areaId, backLoc, backArg, scene);
    }
  }
}

export const locations: LocationDef[] = [
  {
    name: 'map_view',
    title: 'Map',
    enter: mapViewEnter,
  },
];
