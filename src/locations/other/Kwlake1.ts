import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (15);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/lake/sex/kwlake1/kwlake1.jpg');
  scene.text('While you and Kat walk along the beach, you notice a rock shaped like a dildo.');
  scene.text('"Hah, look at that!" you interrupt her, while you point at the rock. It really does look exactly like a stone cock!');
  scene.text('Kat picks it up and laughs, looking at it from all angles. Then she brings it to her mouth and pretends to give it a blowjob, with a wicked grin on her face.');
  scene.text('Despite the silly face she\'s making, you can\'t help but get a little more aroused.');
  scene.actions([
    { label: 'Laugh at her silliness', goto: ['Kwlake1', 'end'] },
    { label: 'Fondle her', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'A219');
    qspCall(s, 'npc_relationship', 'modify', 'A219', 5);
    scene.img('images/locations/city/residential/lake/sex/kwlake1/kwlake2.jpg');
    scene.text('Kat still has her lips wrapped around the stone dildo when you approach her and begin to rub her pussy, out of the blue. How could you not?');
    scene.text('She smiles at you but doesn\'t stop you, grinding her hips against your hand eagerly. Then you drop to your hands and knees and lick her pussy eagerly, while she keeps pretending to suck the stone cock.');
    qspCall(s, 'arousal', 'cuni_give', 5, 'lesbian');
    qspCall(s, 'arousal', 'vaginal_finger', (-5), 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Lie down', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/lake/sex/kwlake1/kwlake3.jpg');
    scene.text('You lie down on the sand and Kat gives you the rock, giving you a lewd wink: "Your turn! And my turn… yummy!"');
    scene.text('She then lowers her head to your groin and really digs in, eagerly licking your wet slit. Without even realizing it, you bring the stone cock to your mouth and begin to suck on it like she had before, while Kat licks you enthusiastically.');
    scene.text('You don\'t even notice the man approaching you until he\'s very close to you, awkwardly rubbing his cock. You\'re fairly sure you\'ve never seen him before, but he\'s obviously very aroused from the show you and Kat put up!');
    qspCall(s, 'arousal', 'cuni', 5, 'lesbian');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'sex', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Break it off [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Break it off [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['Nudelake', ''] },
      ]);
    }
    scene.actions([
      { label: 'Beckon him to join you', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A219', 5);
    scene.img('images/locations/city/residential/lake/sex/kwlake1/kwlake4.jpg');
    scene.text('You give the man a \'come hither\' sign with your hand while Kat keeps licking you, and you can see the indecisiveness in his eyes. Should he approach you, or Kat?');
    scene.text('Kat answers the question for him, eagerly grabbing his cock and taking it into her mouth. Now that she\'s ignoring you, you quickly decide to do the next best thing - and thrust the stone cock deep inside your welcoming snatch.');
    qspCall(s, 'arousal', 'cuni', 5, 'lesbian');
    qspCall(s, 'arousal', 'vaginal_dildo', (-5));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get closer to Kat', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/lake/sex/kwlake1/kwlake5.jpg');
    scene.text('After you masturbate yourself to an orgasm, you can\'t help but get very aroused again by watching Kat get pounded by this total stranger. You pull the stone cock out of your wet cunt and order Kat: "Lick my juices off it!"');
    scene.text('Kat doesn\'t need any more encouragement and closes her lips around the rock, moaning: "Mmmm… delicious!"');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/lake/sex/kwlake1/kwlake6.jpg');
    scene.text('Then the guy groans for Kat to get on all fours, which she does without a doubt. Your eyes bulge when you see her take his cock in her ass without a complaint.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>!" Katja says intently.
    scene.text(`"${((s as any).pcs_nickname ?? 0)}!" Katja says intently.`);
    scene.text('"Wa… what?" you mutter, lost in your own thoughts for a moment.');
    scene.text('"Get your ass over here and give me that piece of rock already!" Kat orders you, between moans. "I want you to feel what I feel…"');
    scene.text('You hand her the rock without a second thought, and wince slightly when she spits onto your anus and begins to rub the stone cock against your anus forcefully.');
    qspCall(s, 'arousal', 'anal_dildo', 5, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/lake/sex/kwlake1/kwlake7.jpg');
    scene.text('Once Kat is fully satisfied, the guy pulls his cock out of her ass and cums in her mouth. Kat swallows it automatically, and smiles apologetically: "Sorry! Next time I\'ll try to leave you some…"');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', goto: ['Nudelake', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterEnd(s: GameState, scene: SceneBuilder): void {
  scene.text('"You\'re such a pervert!" you grin, watching Kat close her lips around the stone cock.');
  scene.text('Kat laughs with you, and says: "Hey! I know how to make a man want me, so I can then make him do whatever I want…"');
  scene.text('She tosses the rock to the side carelessly, and you continue on your walk.');
  scene.actions([
    { label: 'Continue', goto: ['Nudelake', ''] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'end':
      enterEnd(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const Kwlake1: LocationDef = {
  name: 'Kwlake1',
  title: 'While you and Kat walk along the beach, you notice a rock sh',
  region: 'other',
  description: ['While you and Kat walk along the beach, you notice a rock shaped like a dildo.'],
  enter: enter,
};
