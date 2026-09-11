import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if ((!((s as any).podvalrape ?? 0))) {
    scene.text('You try to focus your view, to see where you are. It looks like a basement… there are no windows anywhere, and the room is rather dark. The guys push you down onto a dirty mattress in the room. Other than a lot of empty bottles and the mattress you\'re on, the room is empty. You guess this is where they often take girls they meet in the park.');
    // TODO-QSP: dynamic text: The <<$placerStringParameter['text_someone']>> are discussing among themselves: ...
    scene.text(`The ${((s as any).placerStringParameter ?? 0)?.['text_someone']} are discussing among themselves: "Alright guys, we got the slut here. I'm surprised she came so readily. Anyway… who gets to go first this time?"`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    ((s as any).stat ?? {})['rape_count'] = (((s as any).stat ?? {})['rape_count'] ?? 0) + (1);
    ((s as any).stat ?? {})['gangbang_count'] = (((s as any).stat ?? {})['gangbang_count'] ?? 0) + (1);
    (s as any).podvalrape = 1;
    qspCall(s, 'sweat', 'add', 10);
    (s as any).guy = ((s as any).guy ?? 0) + (((s as any).placerParameter ?? 0)?.['number_of_man']);
    (s as any).ciklkm = ((s as any).placerParameter ?? 0)?.['number_of_man'];
    if ((!((s as any).podvalrapeQW ?? 0))) {
      (s as any).podvalrapeQW = 1;
    }
    qspCall(s, 'arousal', 'bj', 10, 'group', 'sub');
    qspCall(s, 'arousal', 'vaginal', (-10), 'group', 'sub');
    qspCall(s, 'stat', '');
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } else {
    if (((s as any).podvalrape ?? 0) === 1) {
      if ((!(Math.floor(Math.random() * 2) + 0))) {
        scene.img('images/locations/pavlovsk/park/gop/sex/gop/podval.jpg');
      } else {
        scene.img('images/locations/pavlovsk/park/gop/sex/gop/gopgang2.jpg');
      }
      if (((s as any).ciklkm ?? 0) > 0) {
        scene.text('All of the guys want to fuck you at least once. You see one of them impatiently stroking his cock, keeping it erect while he is waiting for the Gopnik that is currently fucking you to finish. There might be more beyond him that you can\'t see, you\'re not quite sure.');
        scene.text('Once the Gopnik finishes, his friend quickly takes his place and offers you his dick.');
      } else {
        scene.text('There are no more guys waiting, this must be the last one. You are exhausted and have no strength left to even object any more as the last guy takes his place.');
      }
      (s as any).tiprand = Math.floor(Math.random() * 3) + 0;
      if (((s as any).tiprand ?? 0) < 2) {
        qspCall(s, 'dinsex', 'vaginal_sex', 10);
        qspCall(s, 'dinsex', 'sexcum');
        qspCall(s, 'arousal', 'bj', 15, 'group', 'sub');
        qspCall(s, 'arousal', 'vaginal', (-15), 'group', 'sub');
        qspCall(s, 'stat', '');
      } else {
        if (((s as any).tiprand ?? 0) === 2) {
          qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
          qspCall(s, 'arousal', 'bj', 15, 'group', 'sub', 'rough');
          qspCall(s, 'arousal', 'anal', (-15), 'group', 'sub', 'rough');
          qspCall(s, 'stat', '');
        }
      }
      qspCall(s, 'stat', '');
      (s as any).ciklkm = ((s as any).ciklkm ?? 0) - (1);
      if (((s as any).ciklkm ?? 0) > 0) {
        qspCall(s, 'npcgeneratec', '', 0, 'Rapist', Math.floor(Math.random() * 11) + 18);
        qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
        qspCall(s, 'arousal', 'vaginal', 15, 'group', 'sub');
        qspCall(s, 'stat', '');
        scene.actions([
          { label: 'Continue', goto: ['podval_rape', ''] },
        ]);
      } else {
        if ((!(Math.floor(Math.random() * 2) + 0))) {
          scene.actions([
            { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/gop/sex/gop/podval_end.jpg');
    // TODO-QSP: dynamic text: Finally the Gopniks are finished with you. They talk loudly about what a good fu...
    scene.text(`Finally the Gopniks are finished with you. They talk loudly about what a good fuck you were while they get dressed. When they realize you're too drunk to get dressed, they help you pull your clothes back on and sloppily button them up, before they drag you outside and put you down against the wall of the house. ${((s as any).boydesc2 ?? 0)} slaps your face and tells you: "You should be able to find your own way home, we have places to be. You were a good fuck, ${((s as any).pcs_nickname ?? 0)}. Come look us up in the park again if you want more where that came from."`);
    scene.text('You slump to a seated position holding your throbbing head in your hands. You can\'t clearly remember enough to be sure if you started things or if they raped you but you know what you need more than anything is to find your way home and to your own bed.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Find your way back to the main streets', handler: (st: GameState) => {
    (st as any).podvalrape = 0;
    (st as any).dormrape = 0;
  }, goto: ['pav_residential', ''] },
    ]);
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Open your eyes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).body_write = 5;
    (s as any).face_write = 1;
    (s as any).podvalwriterand = 0;
    qspCall(s, 'stat', '');
    scene.img(`images/locations/pavlovsk/park/gop/sex/gop/podvalwrite${((s as any).podvalwriterand ?? 0)}.jpg`);
    scene.text('When the last Gopnik has had his fun with you and tucks his cock back into his pants, they all gather around you with some markers. You realize they\'re drawing or writing things on your body and try to get up, but one of them easily pushes you back down. You still feel too drunk to stop them and decide to just let it happen, hoping it\'ll come off easily once you get a chance to wash yourself. Eventually they allow you to get up, but not before your body is fully covered in lewd comments.');
    scene.text('They guide you out of the basement and throw your belongings out the door before closing it, leaving you to get dressed in the front yard of the house. You quickly do, praying that no one will walk past and see the obscene texts on your naked body. Luckily, no one does and you manage to get dressed unseen. Then you look around, trying to figure out where those guys took you to begin with.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Find your way back to the main streets', handler: (st: GameState) => {
    (st as any).podvalrape = 0;
    (st as any).dormrape = 0;
  }, goto: ['pav_residential', ''] },
    ]);
  } },
          ]);
        }
      }
    }
  }
  scene.build();
}

export const podval_rape: LocationDef = {
  name: 'podval_rape',
  title: 'You try to focus your view, to see where you are. It looks l',
  region: 'other',
  description: ['You try to focus your view, to see where you are. It looks like a basement… there are no windows anywhere, and the room is rather dark. The guys push you down onto a dirty mattress in the room. Other than a lot of empty bottles and the mattress you\'re on, the room is empty. You guess this is where they often take girls they meet in the park.'],
  enter: enter,
};
