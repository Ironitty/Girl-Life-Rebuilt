import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterDinPredlogDimaBj(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Get down on your knees', handler: (st: GameState) => {
    (s as any).DimaRudeQW = ((s as any).DimaRudeQW ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.text(`<center><b>${((s as any).npc_firstname ?? 0)?.['A1']} ${((s as any).npc_lastname ?? 0)?.['A1']}</b></center>`);
    scene.img('images/characters/shared/headshots_main/big1.jpg');
    scene.text('Embarrassed, blushing, but eager to please Dimka and a little intimated by him, you get on your knees before Dimka who pulls out his dick and slaps it against your face, looking at you like he owns you.');
    scene.actions([
      { label: 'Take it into your mouth', handler: (st: GameState) => {
    (s as any).bja = ((s as any).bja ?? 0) + (1);
    (s as any).dick = 16;
    ((s as any).npc_had_sex ?? {})['A1'] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/blowjob/cocksucker2.jpg');
    // TODO-QSP: dynamic text: You gently kiss the purple head of his member, hoping against hope that maybe yo...
    scene.text(`You gently kiss the purple head of his member, hoping against hope that maybe you can set the tone and pace for this. But Dimka is already impatient and grabs your hair, ignoring your pained yelp. "Stop wasting time and start sucking." Without a second thought, you take his dick into your mouth. You begin to move your ${((s as any).pc_desc ?? 0)?.['lips']} lips up and down Dimka's hard cock, taking his rod deep into your mouth. You don't go slow and move your tongue around his head all the while, trying to please him, but Dimka groans and grabs your head firmly. "Take it deeper!"`);
    qspCall(s, 'arousal', 'bj', 5, 'sub', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Deepthroat him', handler: (st: GameState) => {
    qspCall(s, 'arousal_funcs', 'stretch', 'oral', 2);
    (s as any).dick = 16;
    if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
      (s as any).pcs_makeup = 0;
    }
    (s as any).pcs_hairbsh = 0;
    (s as any).pcs_mood = 5;
    (s as any).pcs_horny = 0;
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/blowjob/cocksucker3.jpg');
    scene.text('Dimka firmly grabbed you by your hair and bucks his hips against you, causing his hard cock to go into your throat. Unprepared for his rough treatment, you choke and tears well up in your eyes but Dimka holds his member there for a few more seconds before he pulls back his member.');
    scene.text('Your throat finally clear, you cough and have to fight down a bout of nausea. He gives you short breather but that doesn\'t last long and as soon as you stop coughing, he puts his hard cock back in your mouth, now with even less regard for you, if that\'s even possible.');
    scene.text('He starts to literally fuck your mouth as hard as if it was a pussy and his cock goes deeper into your throat with every stroke. Snot flows from your nose, strands of saliva hang from your chin, tears keep streaming down your face - in short: You are a mess, and these various liquids drip and drip onto your clothes. Dimka does not let up, though, and fucks your mouth full force, treating you like his own personal sex toy. Your nose keeps hitting his crotch over and over, but then, when you hit it again, Dimka holds your face there, pressing it to his groin.');
    scene.text('You struggle to relax your throat which, after minutes of harsh treatment, feels like it\'s on fire, but the lack of air doesn\'t make it any easier.');
    scene.text('');
    scene.text('"What do pigs like you like?", Dimka asks, tightening his grip on your hair. "Do you like getting fucked rough like that? You are my pig now - You\'ll grunt and scream on my cock and take everything I have for you."');
    scene.text('Without warning, he pulls his dick out of your mouth and furiously strokes it in front of your face.');
    qspCall(s, 'arousal', 'bj', 5, 'sub', 'rough', 'deepthroat');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Catch your breath', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'boyStat', 'A1');
    qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1, '', '', 20);
    qspCall(s, 'cum_call', 'hair', ((s as any).boy ?? 0), 1, '', '', 10);
    qspCall(s, 'cum_call', 'clothes', ((s as any).boy ?? 0), 1, '', '', 10);
    (s as any).dimasexday = ((s as any).daystart ?? 0);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/cocksucker4.jpg');
    scene.text('You fall back onto your haunches, panting, your face completely covered in snot, tears and drool, all but oblivious to what Dimka is doing until a jet of sperm erupts from his cock and hits your face, then another, and another. Your whole face is covered with a layer of mucus, a bizarre mix of four body fluids, and yet all you care about is catching your breath before Dimka has any other ideas. You seem to be in luck, though, because after he wipes his cock on your hair, he tucks it back into his pants.');
    scene.text('"That wasn\'t half bad - with a bit of guidance, you can suck some good dick. We have to do that again sometime." He gives you a strange, cold smile as he turns away. "Well, see you around." You watch as he walks back to the disco, leaving you in your pitiful state.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave as well', goto: ['pav_commcenter', ''] },
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

function enterDinDimaPredlog(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'willpower', 'bj', 'self', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Who does he think you are?! - Slap him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Who does he think you are?! - Slap him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'npc_relationship', 'set', 'A1', 0);
    qspCall(s, 'stat', '');
    scene.text(`<center><b>${((s as any).npc_firstname ?? 0)?.['A1']} ${((s as any).npc_lastname ?? 0)?.['A1']}</b></center>`);
    scene.img('images/characters/shared/headshots_main/big1.jpg');
    scene.text('You give Dimka a good, hard, resounding slap that causes him to yelp like a girl as he clutched his red cheek. His immediate reaction only adds to your satisfaction, but the look he gives you is one of pure hatred - one that makes you wonder if he\'s going to hit you back now.');
    scene.text('But instead, he backs away from you, looking like an animal trapped in a corner. His voice is more of an angry hiss:');
    scene.text('"You\'ll pay for this, sooner or later. Don\'t ever come near me again, bitch! Get the hell away from me!"');
    scene.actions([
      { label: 'He doesn\'t have to tell you twice - Leave at once', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  }
  qspCall(s, 'dinnpc', 'din_predlog_dima_bj');
  // TODO-QSP: end
  scene.actions([
    { label: '… is he serious? Think about what he said for a moment', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text(`<center><b>${((s as any).npc_firstname ?? 0)?.['A1']} ${((s as any).npc_lastname ?? 0)?.['A1']}</b></center>`);
    scene.img('images/characters/shared/headshots_main/big1.jpg');
    scene.text('Your eyes widen and you flush at his proposal - surely, he didn\'t actually mean that you had to give him a blowjob right here, just so you could go out with him… right?');
    scene.text('As if to answer your question, Dimka unbuttons his pants. "Come on, are you gonna keep me waiting all night long? Which is it? Are you brave and fun? Or just another prude?"');
    qspCall(s, 'willpower', 'bj', 'self', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'That does it! - Slap him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'That does it! - Slap him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'npc_relationship', 'set', 'A1', 0);
    qspCall(s, 'stat', '');
    scene.text(`<center><b>${((s as any).npc_firstname ?? 0)?.['A1']} ${((s as any).npc_lastname ?? 0)?.['A1']}</b></center>`);
    scene.img('images/characters/shared/headshots_main/big1.jpg');
    scene.text('You give Dimka a good, hard, resounding slap that causes him to yelp like a girl as he clutched his red cheek. His immediate reaction only adds to your satisfaction, but the look he gives you is one of pure hatred - one that makes you wonder if he\'s going to hit you back now.');
    scene.text('But instead, he backs away from you, looking like an animal trapped in a corner. His voice is more of an angry hiss:');
    scene.text('"You\'ll pay for this, sooner or later. Don\'t ever come near me again, bitch! Get the hell away from me!"');
    scene.actions([
      { label: 'He doesn\'t have to tell you twice - Leave at once', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      ]);
    }
    qspCall(s, 'dinnpc', 'din_predlog_dima_bj');
    scene.actions([
      { label: '"And you promise not to tell anyone?"', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text(`<center><b>${((s as any).npc_firstname ?? 0)?.['A1']} ${((s as any).npc_lastname ?? 0)?.['A1']}</b></center>`);
    scene.img('images/characters/shared/headshots_main/big1.jpg');
    scene.text('You ask Dimka. You\'re really not sure if you want to do this but you also don\'t want him to think that you are a prude. You are fun… right? And as long as nobody finds out, as long as only he knows…');
    scene.text('');
    scene.text('Dimka gives you a gentle smile and reassuringly touches your cheek. "No, of course I wouldn\'t tell anybody. You\'ll be my girlfriend - why would I tell somebody about what we are doing when we\'re together?"');
    qspCall(s, 'dinnpc', 'din_predlog_dima_bj');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'din_predlog_dima_bj':
      enterDinPredlogDimaBj(s, scene);
      break;
    case 'din_dima_predlog':
      enterDinDimaPredlog(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const dinnpc: LocationDef = {
  name: 'dinnpc',
  title: '<<$npc_firstname[\'A1\']>> <<$npc_lastname[\'A1\']>>',
  region: 'other',
  enter: enter,
};
