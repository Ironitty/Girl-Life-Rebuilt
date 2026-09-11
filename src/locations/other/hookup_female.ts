import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterQuickie(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/romance/lovers/hookups/gf/gf1.jpg');
  // TODO-QSP: dynamic text: <<$npcdesc>> opens the door to her apartment and you both immediately begin care...
  scene.text(`${((s as any).npcdesc ?? 0)} opens the door to her apartment and you both immediately begin caressing each other and kissing passionately.`);
  // TODO-QSP: 'Slowly '+iif(PCloSkirt = 0, 'you inch her dress upwards as she pulls your pants down', 'both your d...
  qspCall(s, 'arousal', 'foreplay', 2);
  qspCall(s, 'arousal', 'foreplay_give', (-2));
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'You can not resist that ass!', handler: (st: GameState) => {
    scene.img('images/shared/romance/lovers/hookups/gf/gf2.jpg');
    scene.text('As she turns to head towards the bedroom, you stop her, drop to your knees and begin to slowly massage and kiss her buttocks. Pulling her panties to one side, you start to kiss and lick around her most private entrance before flicking your tongue in and out of it. As her excitement builds, she starts to moan softly at first before slowly getting louder and louder.');
    qspCall(s, 'arousal', 'rimming_give', 5);
    scene.actions([
      { label: 'Stand back up', handler: (st: GameState) => {
    scene.img('images/shared/romance/lovers/hookups/gf/gf3.jpg');
    // TODO-QSP: 'You continue to caress her as you slowly rise. She turns to you with lust in her eyes and pushes yo...
    qspCall(s, 'arousal', 'kiss', (-5));
    qspCall(s, 'arousal', 'clit_finger', 5);
    scene.actions([
      { label: 'Your legs are getting weak', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'backup', 'hookup');
    qspCall(s, 'outfit', 'strip');
    scene.img('images/shared/romance/lovers/hookups/gf/gf4.jpg');
    scene.text('Growing a bit tired, she starts to pull you by the hand through the living room towards her bedroom.');
    // TODO-QSP: dynamic text: Unable to contain your lust anymore, you don't even make it to the bedroom but c...
    scene.text(`Unable to contain your lust anymore, you don't even make it to the bedroom but collapse on the couch. You lay on your back and hold your legs open for ${((s as any).npcdesc ?? 0)}. She wastes no time and starts kissing and licking your clit, while gently fingering you.`);
    qspCall(s, 'arousal', 'vaginal_finger', (-10));
    qspCall(s, 'arousal', 'cuni', 10);
    scene.text('Not that you care, but if the neighbours are home, they\'ve surely heard you by now as you can\'t hold back your moans and shouts.');
    scene.actions([
      { label: 'Her turn', handler: (st: GameState) => {
    scene.img('images/shared/romance/lovers/hookups/gf/gf5.jpg');
    // TODO-QSP: dynamic text: <<$npcdesc>> smiles at you and lays back on the couch. You move between her legs...
    scene.text(`${((s as any).npcdesc ?? 0)} smiles at you and lays back on the couch. You move between her legs and happily work her private parts until she cums for you, squirting her juices into your mouth as you lap them up.`);
    qspCall(s, 'arousal', 'cuni_give', 10);
    scene.text('"Yum! You taste good," you mutter, smiling at her.');
    scene.actions([
      { label: 'Afterglow', handler: (st: GameState) => {
    scene.img('images/shared/romance/lovers/hookups/gf/gf6.jpg');
    scene.text('Both exhausted and in a state of bliss, she slowly closes her eyes while remaining on the couch.');
    scene.text('You climb on top of her and cuddle up to her, and you both fall asleep in each other\'s arms.');
    // TODO-QSP: dynamic text: A short while later, you both wake up, still embracing one another. <<$npcdesc>>...
    scene.text(`A short while later, you both wake up, still embracing one another. ${((s as any).npcdesc ?? 0)} turns and gives you a long passionate kiss.`);
    // TODO-QSP: dynamic text: "You know, <<$pcs_nickname>>," she says. "That was so unexpected! Just spending ...
    scene.text(`"You know, ${((s as any).pcs_nickname ?? 0)}," she says. "That was so unexpected! Just spending this short time with you made me happy. Do you want to swap phone numbers? Maybe we can go on a date and see where this goes?"`);
    qspCall(s, 'arousal', 'kiss', 2);
    scene.actions([
      { label: 'Yes', handler: (st: GameState) => {
    scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)]}`);
    scene.text('"Umm, very unexpected but wow! Yeah, that would be great, I\'ll look forward to our date. Don\'t make me wait too long!');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(s, 'lover', 'add_girlfriend', ((s as any).npcID ?? 0));
  }, goto: ['hookup_after', 'exit'] },
    ]);
  } },
      { label: 'No', handler: (st: GameState) => {
    scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)]}`);
    scene.text('"I really enjoyed it too, but it\'s probably best to leave it here. You never know, we might bump into each other again."');
    scene.actions([
      { label: 'Leave', goto: ['hookup_after', 'exit'] },
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

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'quickie':
      enterQuickie(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const hookup_female: LocationDef = {
  name: 'hookup_female',
  region: 'other',
  locationType: 'public_indoors',
  enter: enter,
};
