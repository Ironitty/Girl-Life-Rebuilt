import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterFirsttime(s: GameState, scene: SceneBuilder): void {
  (s as any).LCEugenefirst = 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/industrial/bbq/sex/lakefirsttime.jpg');
  scene.text('You follow Eugene through the kitchen, into the pantry. The soiled mattress in the corner makes you believe that you\'re not the first girl Eugene has brought here.');
  scene.text('Eugene looks at you a bit hesitantly, and there is an awkward pause when she closes the door behind you.');
  scene.text('Then she breaks the silence and says: "Look. This may scare you a bit, but I don\'t know how else to say it, so…"');
  scene.text('She drops her skirt and you see… a cock!? It\'s semi-hard, and is gently bobbing up and down when she walks towards you. Eugene puts her hands on your chest and looks at you questioningly.');
  qspCall(s, 'willpower', 'sex', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Get out of here', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Get out of here', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A89', (-10));
    (st as any).minut = ((st as any).minut ?? 0) + 7;
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.text('No, no! You quickly squirm past Eugene and leave the pantry, and don\'t stop walking until you\'re well away from the diner.');
    (st as any).LCEugenefirst = 0;
    scene.actions([
      { label: 'Continue', goto: ['city_industrial', ''] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go with it', handler: (st: GameState) => {
    (st as any).randlcpic = (Math.floor(Math.random() * 7) + 1);
    qspCall(st, 'npc_relationship', 'modify', 'A89', 5);
    qspCall(st, 'boyStat', 'A89');
    ((st as any).npc_had_sex = (st as any).npc_had_sex ?? {})[String((st as any).boy ?? 0)] = 1;
    (st as any).pose = 1;
    scene.img(`images/locations/city/industrial/bbq/sex/${((st as any).randlcpic ?? '')}.jpg`);
    scene.text('You smile encouragingly at Eugene and tell her that she is even hotter than you imagined. Eugene, emboldened by your reaction, starts to help you undress. Finally, she descends upon your naked body like a hungry predator…');
    qspCall(st, 'dinsex', 'boy_puts_his_condom');
    qspCall(st, 'dinsex', 'vaginal_sex', 40, 'shemale');
    scene.text('Finally, a good half hour after the two of you started fucking, Eugene lets out a loud and husky moan as she orgasmed.');
    qspCall(st, 'dinsex', 'sexcum');
    // TODO-QSP: dynamic text: She kisses you and begins to get dressed while tells you: "Thanks, <<$pcs_nickna...
    scene.text(`She kisses you and begins to get dressed while tells you: "Thanks, ${((st as any).pcs_nickname ?? '')}! That was amazing… but I really need to get back to work before someone take a notice! Please do visit me again, ${((st as any).pcs_nickname ?? '')}!"`);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get dressed', goto: ['Lakecafe', 'main'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSex(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/industrial/bbq/sex/lakefirsttime.jpg');
  scene.text('Eugene leads you to the pantry again, and gives you a wink before she starts to undress.');
  // TODO-QSP: dynamic text: "So, what would you like to do today, <<$pcs_nickname>>?" she chuckles and expos...
  scene.text(`"So, what would you like to do today, ${((s as any).pcs_nickname ?? '')}?" she chuckles and exposes her semi-erect cock to you.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Fuck me, Eugene!', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A89', 5);
    qspCall(st, 'boyStat', 'A89');
    ((st as any).npc_had_sex = (st as any).npc_had_sex ?? {})[String((st as any).boy ?? 0)] = 1;
    (st as any).pose = 1;
    (st as any).randlcpic = (Math.floor(Math.random() * 7) + 1);
    scene.img(`images/locations/city/industrial/bbq/sex/${((st as any).randlcpic ?? '')}.jpg`);
    // TODO-QSP: dynamic text: Eugene grins and says: "I was hoping you''d say that. Come on, <<$pcs_nickname>>...
    scene.text(`Eugene grins and says: "I was hoping you'd say that. Come on, ${((st as any).pcs_nickname ?? '')}."`);
    scene.text('She helps you to undress, and lies down on the mattress with you. She slips her cock into your pussy and starts to fuck you. She skillfully rubs your clit while she thrusts in and out of you, to keep you nice and wet.');
    qspCall(st, 'dinsex', 'boy_puts_his_condom');
    qspCall(st, 'dinsex', 'vaginal_sex', 40, 'shemale', 'sub');
    scene.text('Finally, a good half hour after the hot sex session, Eugene lets out a loud girly moan.');
    qspCall(st, 'dinsex', 'sexcum');
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: She smiles and kisses you before she starts to get dressed. She tells you: "Than...
    scene.text(`She smiles and kisses you before she starts to get dressed. She tells you: "Thanks, ${((st as any).pcs_nickname ?? '')}! You were great… but I need to get back before someone notices my absence! Please come to see me again soon, ${((st as any).pcs_nickname ?? '')}!"`);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['Lakecafe', 'main'] },
    ]);
  } },
    { label: 'Let me pleasure you, Eugene!', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A89', 5);
    qspCall(st, 'boyStat', 'A89');
    ((st as any).npc_had_sex = (st as any).npc_had_sex ?? {})[String((st as any).boy ?? 0)] = 1;
    (st as any).randlcpic = (Math.floor(Math.random() * 7) + 10);
    scene.img(`images/locations/city/industrial/bbq/sex/${((st as any).randlcpic ?? '')}.jpg`);
    // TODO-QSP: dynamic text: You take your clothes off, give Eugene a deep kiss before drop to your knees in ...
    scene.text(`You take your clothes off, give Eugene a deep kiss before drop to your knees in front of her. "Mmmm…${((st as any).pcs_nickname ?? '')}!" she whispers and looks at you intently.`);
    scene.text('Eugene shoves her hardened cock deep into your mouth as soon as you open your lips. She holds you firmly by the hair and begins to thrust her hips back and forth, making you take her whole length repeatedly. After a while, with her cock deep down your throat, you begin to wonder how it\'s possible that she still hasn\'t reached orgasm yet… guys never last this long!');
    qspCall(st, 'arousal', 'bj', 20, 'shemale', 'sub', 'deepthroat');
    scene.text('Finally, a good half hour after you started sucking her cock, Eugene finally lets out a loud and girly moan and releases her load all over your face. Thick strands of saliva are running down your chin by now.');
    qspCall(st, 'cum_call', 'face', ((st as any).boy ?? 0), 1);
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: She licks her cum on your face and kisses you. She smiles and starts to get dres...
    scene.text(`She licks her cum on your face and kisses you. She smiles and starts to get dressed. She tells you: "Thank you, ${((st as any).pcs_nickname ?? '')}! That was great… but I should go back to work before someone realizes I am missing! We've got to do this again, ${((st as any).pcs_nickname ?? '')}!"`);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['Lakecafe', 'main'] },
    ]);
  } },
    { label: 'Use me, Eugene', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A89', 5);
    qspCall(st, 'boyStat', 'A89');
    ((st as any).npc_had_sex = (st as any).npc_had_sex ?? {})[String((st as any).boy ?? 0)] = 1;
    (st as any).randlcpic = (Math.floor(Math.random() * 4) + 1);
    scene.img(`images/locations/city/industrial/bbq/sex/anal${((st as any).randlcpic ?? '')}.jpg`);
    if (((st as any).analPlugIn ?? 0) === 1) {
      scene.text('Eugene carefully pulls the plug out of your butt.');
      (st as any).analPlugIn = 0;
      (st as any).analPlugOut = 1;
    }
    scene.text('After some intense foreplay and stimulation, Eugene grabs some cooking oil and lubes up her cock and then does the same to your ass as well. With that done she bends you over and lifts one of your legs off the ground. You put your hands against the wall to help keep your balance. Then she slides her cock inside your ass and begins to thrust away as if her life depends on it.');
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['lubricant'] = ((st as any).mc_inventory['lubricant'] ?? 0) + (1);
    qspCall(st, 'arousal', 'anal_finger', 1, 'lube');
    qspCall(st, 'arousal', 'anal', 40, 'shemale');
    scene.text('She pounds and enjoys your ass for a surprising amount of time, considering how hard and fast she is hammering it. She makes sure to reapply some of the cooking oil as needed, while greatly helps you enjoy the experience as well. Finally, a good half hour after she started fucking your ass, Eugene finally lets out a loud and girly scream and shoots her load deep inside your ass.');
    qspCall(st, 'cum_call', 'anus', ((st as any).boy ?? 0), 1);
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: She kisses you and savours the moment. She starts to get dressed and let you kno...
    scene.text(`She kisses you and savours the moment. She starts to get dressed and let you know: "Thanks, ${((st as any).pcs_nickname ?? '')}! That was amazing… I have to go now but come visit me soon, okay, ${((st as any).pcs_nickname ?? '')}? I really want us to spend more time together."`);
    qspCall(st, 'dinsex', 'after_anal', 'no_plug');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed again', goto: ['Lakecafe', 'main'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'firsttime':
      enterFirsttime(s, scene);
      break;
    case 'sex':
      enterSex(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const LCporn: LocationDef = {
  name: 'LCporn',
  title: 'You follow Eugene through the kitchen, into the pantry. The ',
  region: 'other',
  enter: enter,
};
