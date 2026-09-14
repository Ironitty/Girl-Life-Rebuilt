import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterFoyer(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCheckFoyerEvents(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'core_library', 'setloc', 'bdsm_hallway', 'foyer');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/suburb/bdsm_club/foyer.jpg');
  scene.text('You stand in the grand foyer, your eye is draw towards and up the dual staircases. To your left is the Dinning room, to your right the dressing room.');
  scene.text('Discreetly to the sides of the staircases are two rest rooms.');
  if (((s as any).bdsmclub ?? 0)?.['role'] === '') {
    scene.text('You have not chosen a role in the dressing room so you cannot enter the rest of the club.');
    scene.actions([
      { label: 'Go to Dressing room', goto: ['bdsm_dressing', ''] },
    ]);
  } else {
    scene.actions([
      { label: 'Go to Dressing room', goto: ['bdsm_dressing', ''] },
      { label: 'Go to Reception', goto: ['bdsm_mansion', 'reception'] },
      { label: 'Go upstairs', goto: ['bdsm_landing', ''] },
      { label: 'Go down to the basement', goto: ['bdsm_basement', 'start'] },
      { label: 'Go to the Rest room', goto: ['bdsm_bathrooms', 'restroom'] },
      { label: 'Go to the Dining room', goto: ['bdsm_dining', ''] },
      { label: 'Go to the Ball room', goto: ['bdsm_ballroom', 'ballroom'] },
      { label: 'Go to the Conservatory', goto: ['bdsm_conservatory', ''] },
      { label: 'Go to the Kitchen', goto: ['bdsm_kitchen', 'kitchen'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCheckFoyerEvents(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 100) + 0) < 85) {
    // TODO-QSP: exit
  }
  scene.actions([{ label: 'Continue', goto: ['bdsm_hallway', 'foyer_event_<<rand(1, 5)>>'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterFoyerEvent_1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/suburb/bdsm_club/sex/maid_mis2.jpg');
  scene.text('A sexy domme in her underwear is leading a sub upstairs by her leash.');
  qspCall(s, 'arousal', 'voyeur', 5);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['bdsm_hallway', 'foyer'] },
  ]);
  scene.build();
}

function enterFoyerEvent_2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/suburb/bdsm_club/sex/ponyboy.jpg');
  scene.text('A man on all fours comes crawling into the room, wearing a pair of tight latex shorts, a saddle across his back and a bit with reigns. While a woman rides on the saddle, dressed in a latex corset and shorts, in knee high boots with larges spurs that she occasionally uses on the man to make him crawl faster, as she pulls on the reigns to direct him.');
  qspCall(s, 'arousal', 'voyeur', 5);
  if (((s as any).bdsmclub ?? 0)?.['role'] === 'sub') {
    scene.text('The woman rides her ponyboy over to you and looks you over, grabbing hold of your chin as if she was inspecting you. "Well arn\'t you just a cute little filly. I\'ve been thinking about putting my boy here out to stud and I think you will do nicely. Come along." She says as she attaches a lead to your collar from the saddle, the she uses the spurs to get ponyboy going and rides him up the stairs pulling you behind them.');
  }
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['bdsm_hallway', 'foyer'] },
  ]);
  scene.build();
}

function enterFoyerEvent_3(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/suburb/bdsm_club/petgirl.jpg');
  scene.text('A man dressed in leather stands talking to a well dressed couple, at his feet rests his petgirl on her knees. She holds her own leash in her mouth, wearing nothing but her collar, bra, cat ears, and a buttplug tail. She obediently waits on her knees for her master to finish talking to the couple.');
  qspCall(s, 'arousal', 'voyeur', 5);
  if (((s as any).bdsmclub ?? 0)?.['role'] === 'sub') {
    scene.text('The man in leathers notices you and smiles, motioning you over as he keeps talking to the couple.');
    scene.text('You obediently walk over to him, as you do he simply points a finger at the floor and you kneel down next to the other girl.');
    scene.text('After several minutes the man ends his conversation with the couple. "Well it was nice seeing you again, but I need to get going. As you can see I have a couple of bitches in need of training." He says with a laugh, while the couple look at you with a knowing smile.');
    scene.text('As they leave the man in leather pulls another leash off his belt and attaches it to your collar, while he takes hold of the other girls leash. Now with both leashes firmly in hand, he pulls on them and heads up the stairs. At the pull of the leash the other girl starts crawling on all fours behind him, you follow her lead and do the same.');
  }
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['bdsm_hallway', 'foyer'] },
  ]);
  scene.build();
}

function enterFoyerEvent_4(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/suburb/bdsm_club/sex/maid_b5.mp4');
  scene.text('A submissive woman is give her dominant a blowjob while another sub watches from the stairs.');
  qspCall(s, 'arousal', 'voyeur_sex', 5);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['bdsm_hallway', 'foyer'] },
  ]);
  scene.build();
}

function enterFoyerEvent_5(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/suburb/bdsm_club/sex/maid_b3.mp4');
  scene.text('One of the maids is giving her dominant a blowjob by the small staircase.');
  qspCall(s, 'arousal', 'voyeur_sex', 5);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/suburb/bdsm_club/sex/maid_b4.mp4');
    scene.text('It looks like she has learnt to overcome her gag-reflex.');
    qspCall(s, 'arousal', 'voyeur_sex', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Return', goto: ['bdsm_hallway', 'foyer'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'foyer':
      enterFoyer(s, scene);
      break;
    case 'check_foyer_events':
      enterCheckFoyerEvents(s, scene);
      break;
    case 'foyer_event_1':
      enterFoyerEvent_1(s, scene);
      break;
    case 'foyer_event_2':
      enterFoyerEvent_2(s, scene);
      break;
    case 'foyer_event_3':
      enterFoyerEvent_3(s, scene);
      break;
    case 'foyer_event_4':
      enterFoyerEvent_4(s, scene);
      break;
    case 'foyer_event_5':
      enterFoyerEvent_5(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const bdsm_hallway: LocationDef = {
  name: 'bdsm_hallway',
  title: 'You stand in the grand foyer, your eye is draw towards and u',
  region: 'other',
  locationType: 'private',
  enter: enter,
};
