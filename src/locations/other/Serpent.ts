import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'Serpent', '');
  if (((s as any).findneck ?? 0) === 1) {
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/serpent/serpentintro.mp4');
    scene.text('You hear a whispered word coming from somewhere in the barn. "Ahhhh, I sseee the little fae mortal hasss s found my horcrux. You hold in your handsss my greatessst prizzzzze." You look around for who is talking but don\'t see anyone in the barn with you.');
    scene.text('"Let usss make a deal, you and I. You return my prizzzze, and I will teeeach you muccch about the magicssss you possssessss." You hear a scraping sound coming from above you in the shadowy rafters.');
    scene.text('"Who are you? Where are you?" you yell, looking for the owner of the strange sibilant voice.');
    scene.text('"I am Zzathrezzz, Lord of Ssserpentsss." As the voice continues from above, you see a large snake emerge out of the shadows. Outside the barn, you hear Bandit start to loudly bark. Zathrez hisses in annoyance.');
    scene.text('"That dog isss a noicccenccce!"');
    scene.img('images/locations/gadukino/serpent/serpent1_0.jpg');
    scene.text('"Now, do we have a deal?" the sibilant voice continues.');
    qspCall(s, 'willpower', 'misc', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'No, leave me alone you freaky snake [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'No, leave me alone you freaky snake [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'misc', 'self', 'hard');
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).serpent_path = 0;
  }, goto: ['gad_gpyard', 'start'] },
      ]);
    }
    qspCall(s, 'willpower', 'skill', 'magik', 'self', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Maybe, but first tell me more about what you can teach me [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Maybe, but first tell me more about what you can teach me [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'skill', 'magik', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).serpent_path = 1;
  }, goto: ['serpent', ''] },
      ]);
    }
    scene.actions([
      { label: 'You stand frozen as the snake\'s head glides down towards you', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    ]);
  }
  if (((s as any).serpent_path ?? 0) === 1) {
    qspCall(s, 'stat', '');
  }
  scene.build();
}

export const Serpent: LocationDef = {
  name: 'Serpent',
  title: 'You hear a whispered word coming from somewhere in the barn.',
  region: 'other',
  locationType: 'secluded',
  description: ['You hear a whispered word coming from somewhere in the barn. "Ahhhh, I sseee the little fae mortal hasss s found my horcrux. You hold in your handsss my greatessst prizzzzze." You look around for who is talking but don\'t see anyone in the barn with you.'],
  enter: enter,
};
