import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $tpLocations[0] = 'CentralPark'
  // TODO-QSP: $tpLocations[1] = 'PavlovskPark'
  // TODO-QSP: $tpLocations[2] = 'gad_forest'
  // TODO-QSP: $tpLocations[3] = 'PushkinPark'
  // TODO-QSP: $tpLocations[4] = 'Village'
  ((s as any).treeCircName ?? {})['CentralPark'] = 'Central Park';
  ((s as any).treeCircLoc ?? {})['CentralPark'] = 'city_park';
  ((s as any).treeCircArg ?? {})['CentralPark'] = 'start';
  ((s as any).treeCircName ?? {})['PavlovskPark'] = 'Pavlovsk Park';
  ((s as any).treeCircLoc ?? {})['PavlovskPark'] = 'pav_parkev';
  ((s as any).treeCircArg ?? {})['PavlovskPark'] = 'go_for_walk2';
  ((s as any).treeCircName ?? {})['gad_forest'] = 'Gadukino Forest';
  ((s as any).treeCircLoc ?? {})['gad_forest'] = 'gad_forest';
  ((s as any).treeCircArg ?? {})['gad_forest'] = 'forest_edge';
  ((s as any).treeCircName ?? {})['PushkinPark'] = 'Pushkin Park';
  ((s as any).treeCircLoc ?? {})['PushkinPark'] = 'pushkin_parks';
  ((s as any).treeCircArg ?? {})['PushkinPark'] = 'prut2';
  ((s as any).treeCircName ?? {})['Village'] = 'Communal Village Spring';
  ((s as any).treeCircLoc ?? {})['Village'] = 'ETO_village';
  ((s as any).treeCircArg ?? {})['Village'] = 'spring_water';
  scene.text('<center><h2>Mysterious Circle of Trees</h2></center>');
  scene.img('images/locations/shared/park/tree_circle.jpg');
  scene.text('The small clearing in the center of the tree circle is two body lengths wide. The ground is covered with a soft, spongy moss. Everything is surprisingly visible considering you can barely see the sky through the overhead cover of leaves and branches.As you look to the outside of the circle, everything seems to be vague and indistinct. This makes it hard to comprehend what lies outside the ring.');
  (s as any).canTeleport = 0;
  if (((s as any).spellKnown ?? 0)?.['teleport'] === 1) {
    if (((s as any).tpKnown ?? 0)?.[String((s as any).EntryPoint ?? 0)] === 0) {
      scene.text('You take the fairy\'s advice and get to know this circle.');
      (s as any).minut = ((s as any).minut ?? 0) + 15;
      ((s as any).tpKnown ?? {})[String((s as any).EntryPoint ?? 0)] = 1;
    }
    if (((s as any).pcs_mana ?? 0) > ((s as any).spellMana ?? 0)?.['teleport']) {
      (s as any).canTeleport = 1;
    } else {
      scene.text('You feel too tired to pull off a shift right now.');
    }
  } else {
    scene.text('You can feel something strange and powerful in this place, but you can\'t quite put your finger on it. It is intriguing though, so you take your time and look the place over to try to understand it.');
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    ((s as any).tpKnown ?? {})[String((s as any).EntryPoint ?? 0)] = 1;
  }
  qspCall(s, 'treeCircActs', '', ((s as any).EntryPoint ?? 0));
  (s as any).i = 0;
  // TODO-QSP: :LocLoop
  if (((s as any).i ?? 0) < Object.keys((s as any).tpLocations ?? {}).length) {
    if (((s as any).EntryPoint ?? 0) !== ((s as any).tpLocations ?? 0)?.[String((s as any).i ?? 0)]) {
      // TODO-QSP: gs 'treeCircActs', $tpLocations[i]
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    // TODO-QSP: jump 'LocLoop'
  }
  if (((s as any).pcs_inhib ?? 0) >= 30  &&  ((s as any).pcs_horny ?? 0) > 60) {
    scene.actions([
      { label: 'Masturbate to clear your head', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/locations/shared/park/tree_masturb.mp4');
    scene.text('It feels like it takes an age to masturbate out in the cold of the tree circle but the magical wards here keep you safe even when you would otherwise being putting on such a lewd show.');
    scene.text('About 5 minutes later your climax hits and you feel instantly connected the trees seeing glimpses of hundreds of years of history in this place.');
    scene.text('Just as suddenly you snap back to reality.');
    qspCall(s, 'arousal', 'clit_finger', 5, 'masturbate');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Head cleared', handler: (st: GameState) => {
    // TODO-QSP: gt 'treeCircle', $EntryPoint
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

export const treeCircle: LocationDef = {
  name: 'treeCircle',
  title: '<center><h2>Mysterious Circle of Trees</h2></center>',
  region: 'other',
  description: ['The small clearing in the center of the tree circle is two body lengths wide. The ground is covered with a soft, spongy moss. Everything is surprisingly visible considering you can barely see the sky through the overhead cover of leaves and branches.As you look to the outside of the circle, everything seems to be vague and indistinct. This makes it hard to comprehend what lies outside the ring.'],
  enter: enter,
};
