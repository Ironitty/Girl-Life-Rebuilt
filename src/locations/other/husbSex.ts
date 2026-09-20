import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterRoom(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'npcStat', '', ((s as any).husID ?? 0));
  ((s as any).spouseVars = (s as any).spouseVars ?? {})['sexday'] = ((s as any).spouseVars['sexday'] ?? 0) + (1);
  (s as any).suprdolg = ((s as any).suprdolg ?? 0) + (1);
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  if (((s as any).spouseVars ?? 0)?.['husb_debt_event'] === 0) {
    qspGoto(s, 'husbSex', 'husb_debt_event');
  }
  scene.text('<center><b>Bedroom</b></center>');
  if ((!((s as any).rembedr ?? 0))) {
    scene.img('images/locations/city/residential/apartment/bedr.jpg');
  } else {
    scene.img('images/locations/city/residential/apartment/bedr2.jpg');
  }
  scene.text('You go with your husband into the bedroom.');
  // TODO-QSP: dynamic text: <<$npcdesc>> grabs you and roughly pushes you on the bed and starts to passionat...
  scene.text(`${((s as any).npcdesc ?? '')} grabs you and roughly pushes you on the bed and starts to passionately kiss you while trying to get rid of your clothes.`);
  // TODO-QSP: dynamic text: Finally, <<$npcdesc>> wins his unequal battle with the straps of your bra.
  scene.text(`Finally, ${((s as any).npcdesc ?? '')} wins his unequal battle with the straps of your bra.`);
  (s as any).sexrand = (Math.floor(Math.random() * 4) + 0);
  if ((!((s as any).sexrand ?? 0))) {
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, wrap your lips around my cock."
    scene.text(`"${((s as any).pcs_nickname ?? '')}, wrap your lips around my cock."`);
    scene.actions([
      { label: 'Give him a blowjob', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 1);
  }, goto: ['husbsex', 'minet'] },
      { label: 'Not now. Let\'s do another position.', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), (-1));
  }, goto: ['husbsex', 'variant'] },
    ]);
  } else {
    if (((s as any).sexrand ?? 0) === 1) {
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I want your ass."
      scene.text(`"${((s as any).pcs_nickname ?? '')}, I want your ass."`);
      scene.actions([
        { label: 'Anal', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 2);
  }, goto: ['husbsex', 'anal'] },
        { label: 'Fuck that. Let\'s do something else.', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), (-1));
  }, goto: ['husbsex', 'variant'] },
      ]);
    } else {
      if (((s as any).sexrand ?? 0) === 2) {
        // TODO-QSP: dynamic text: "Lie down <<$pcs_nickname>> and open your legs for me."
        scene.text(`"Lie down ${((s as any).pcs_nickname ?? '')} and open your legs for me."`);
        scene.actions([
          { label: 'Open your legs', goto: ['husbsex', 'miss'] },
          { label: 'Let\'s do another position.', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), (-1));
  }, goto: ['husbsex', 'variant'] },
        ]);
      } else {
        if (((s as any).sexrand ?? 0) === 3) {
          // TODO-QSP: dynamic text: "I want to take you from behind <<$pcs_nickname>>."
          scene.text(`"I want to take you from behind ${((s as any).pcs_nickname ?? '')}."`);
          scene.actions([
            { label: 'Doggy style', goto: ['husbsex', 'dog'] },
            { label: 'Let\'s do another position.', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), (-1));
  }, goto: ['husbsex', 'variant'] },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterHusbDebtEvent(s: GameState, scene: SceneBuilder): void {
  ((s as any).spouseVars = (s as any).spouseVars ?? {})['husb_debt_event'] = 1;
  scene.img('images/characters/city/husband/sex/d0.jpg');
  // TODO-QSP: dynamic text: <<$npcdesc>> is about to enter you as he gets pulled back and you spot two other...
  scene.text(`${((s as any).npcdesc ?? '')} is about to enter you as he gets pulled back and you spot two other men in the room. One is standing by the bed holding your husband's hair, the second one is holding a gun in his hand.`);
  scene.text('"Do you have the money, moron?" Asks the one holding your husband.');
  // TODO-QSP: dynamic text: "I told, I will pay you. I have no money now, but in a month I can give it to yo...
  scene.text(`"I told, I will pay you. I have no money now, but in a month I can give it to you" Says ${((s as any).npcdesc ?? '')}.`);
  scene.text('"You should have thought about this earlier. We need the money now!" Continues the bandit.');
  // TODO-QSP: dynamic text: "But I don''t have the money. I need more time." Pleads <<$npcdesc>>.
  scene.text(`"But I don't have the money. I need more time." Pleads ${((s as any).npcdesc ?? '')}.`);
  // TODO-QSP: dynamic text: "Stop whining. We have your fine bitch and all her holes and you already owe us ...
  scene.text(`"Stop whining. We have your fine bitch and all her holes and you already owe us ${qspFunc(s, 'money', 'string_price', 100000)}" Says the bandit.`);
  if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
    // TODO-QSP: dynamic text: "Don''t touch her! I''ll get you the money. You will have it tomorrow." Says <<$...
    scene.text(`"Don't touch her! I'll get you the money. You will have it tomorrow." Says ${((s as any).npcdesc ?? '')}.`);
    scene.text('"Maybe, but we are here today. And we will get something out of this." Addressing you, the bandit says "Yes Beauty, open your mouth as wide as you can. You will need to fit both of us in there."');
  } else {
    // TODO-QSP: dynamic text: "Alright you can have her. But this is part of my payment, Kral." Says <<$npcdes...
    scene.text(`"Alright you can have her. But this is part of my payment, Kral." Says ${((s as any).npcdesc ?? '')}.`);
    if (((s as any).pcs_apprnc ?? 0) < 60) {
      scene.text('"No! Look at her Kral. She looks like she has just washed the floors in a public toilet" Says one of the bandits.');
    } else {
      if (((s as any).pcs_apprnc ?? 0) >= 60  &&  ((s as any).pcs_apprnc ?? 0) < 120) {
        scene.text('"Well, she\'s not bad. We\'ll make use of her, but you won\'t get any discount." Says the bandit.');
      } else {
        scene.text('"Yes, she is a fine chick, but forget about a discount. Think of it as a payment for our expenses." The thug laughs.');
      }
    }
  }
  if (((s as any).pcs_apprnc ?? 0) >= 60) {
    scene.text('"You have a fine little wife. We will use her and perhaps she will even be able to make us reconsider the amount of your debt. Unless of course you want to come back with us." The thug laughs.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Suggest you pay the money', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 100000) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 100000);
      ((st as any).spouseVars = (st as any).spouseVars ?? {})['husb_debt_event'] = 2;
      scene.text('"I have the money, I will pay his debt" you say.');
      scene.text('"Good for you, but there is still the matter of our expenses. And we have a different payment in mind." Says the grinning thug.');
      scene.actions([
        { label: 'Open your mouth', goto: ['husbSex', 'dolg'] },
      ]);
    }
  } },
    { label: 'Open your mouth', goto: ['husbSex', 'dolg'] },
  ]);
  scene.build();
}

function enterDolg(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcgeneratec', '', 0, 'Husband debtor', (Math.floor(Math.random() * 11) + 30), (Math.floor(Math.random() * 2) + 3), 1);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
  qspCall(s, 'npcgeneratec', '', 0, 'Husband debtor', (Math.floor(Math.random() * 11) + 30), (Math.floor(Math.random() * 2) + 3), 1);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'a');
  scene.img('images/characters/city/husband/sex/d1.jpg');
  scene.text('The bandits take out their cocks and attempt to put them both in your mouth. You try to open your mouth as wide as possible, but you fail and eventually begin to suck them one by one. Soon they get tired and hurl you on the bed, arguing who will be the first to fuck you.');
  qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID ?? 0), 'group', 'humiliation', 'rape');
  qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID1 ?? 0), 'group', 'humiliation', 'rape');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/city/husband/sex/d2.jpg');
    scene.text('They fuck you as they please, using each of your holes several times. Periodically, you glance at your husband.');
    qspCall(st, 'arousal', 'vaginal', 10, ((st as any).npcID ?? 0), 'group', 'humiliation', 'rape');
    qspCall(st, 'arousal', 'vaginal', 10, ((st as any).npcID1 ?? 0), 'group', 'humiliation', 'rape');
    qspCall(st, 'arousal', 'anal', (-10), ((st as any).npcID1 ?? 0), 'group', 'humiliation', 'rape');
    qspCall(st, 'arousal', 'anal', (-10), ((st as any).npcID ?? 0), 'group', 'humiliation', 'rape');
    qspCall(st, 'arousal', 'end');
    if (((st as any).npc_gentle ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      if (((st as any).npc_pervert ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
        scene.text('He is huddled in a corner quietly weeping, not looking in your direction.');
      } else {
        scene.text('He is huddled in a corner quietly weeping, glancing in your direction. It seems he is a little excited.');
      }
    } else {
      if (((st as any).npc_rough ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
        if (((st as any).npc_pervert ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
          scene.text('He is standing on the sidelines, leaning against the wall looking at you.');
        } else {
          scene.text('He is standing on the sidelines, watching you. He looks very excited.');
        }
      } else {
        if (((st as any).npc_pervert ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
          scene.text('He is standing on the sidelines, not looking at you swearing loudly. He curses the bandits, then himself, then he calls you a horny slut.');
        } else {
          (st as any).picrand = 18;
          scene.text('He is standing on the sidelines, looking at you with his dick in his hand. Soon he can no longer resist and comes over to the bed, saying "Well, you both can do what you want, but she is my bitch and I\'ll fuck her too." The bandits don\'t object.');
          scene.actions([
            { label: 'Further', goto: ['paysex', 'var'] },
          ]);
        }
      }
    }
    scene.actions([
      { label: 'Finish', goto: ['husbSex', 'dolgend'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterDolgend(s: GameState, scene: SceneBuilder): void {
  (s as any).noshampoo = 1;
  qspCall(s, 'din_van', 'showerdin');
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/husband/sex/d3.jpg');
  scene.text('When it\'s over, they take you to the bathroom and tell you to clean yourself up as they go back into the bedroom.');
  if (((s as any).pcs_apprnc ?? 0) >= 60) {
    if (((s as any).spouseVars ?? 0)?.['husb_debt_event'] === 1) {
      ((s as any).spouseVars = (s as any).spouseVars ?? {})['husb_debt_event'] = 2;
      qspCall(s, 'money', 'debt_add', 'workDolg', 100000);
      scene.text('"What a beauty. You will come with us and we\'ll get your husband\'s debt sorted out." Grins one of the men.');
      scene.actions([
{ label: 'Go with them', handler: (st: GameState) => {
    (st as any).pcs_leghair = 0;
    (st as any).pcs_pubes = 0;
    (st as any).pcs_hairbsh = 1;
    (st as any).pcs_makeup = 3;
    scene.text('They take you to the sauna. The bandits drag you into a room start to explain. "You will live here and work, until the debt is paid off. Everything clear? If you try to escape we\'ll put a bullet in your head and bury you in the woods, understood?"');
    scene.text('You nod fearfully, realizing that they aren\'t kidding.');
    scene.actions([
      { label: 'Look around', goto: ['city_sauna', 'saunaroom'] },
    ]);
  } },
]);
      return;
    } else {
      if (((s as any).spouseVars ?? 0)?.['husb_debt_event'] === 2) {
        ((s as any).spouseVars = (s as any).spouseVars ?? {})['husb_debt_event'] = 3;
        (s as any).saunaWorkWhore = 1;
        scene.text('"What a beauty. You did well. If you want you can come to the sauna, we have a job for you there." One man says grinning.');
        scene.actions([
          { label: 'Finish', goto: ['bedr', ''] },
        ]);
      }
    }
  } else {
    scene.text('"She looks frightening. Like a poltergeist." Says one of the thugs, looking at you. "Okay, you bring us the money tomorrow, and then she\'s getting fucked." Says the second one to your husband.');
  }
  if (((s as any).deodorant_on ?? 0) === 1) {
    qspCall(s, 'sweat', 'remove_deo');
    scene.text('<br>Your deodorant gets washed away in the shower.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', goto: ['bedr', ''] },
  ]);
  scene.build();
}

function enterVariant(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', '', ((s as any).husID ?? 0));
  // TODO-QSP: dynamic text: <<$npcdesc>> He is looking at you and waiting for what you say
  scene.text(`${((s as any).npcdesc ?? '')} He is looking at you and waiting for what you say`);
  if (((s as any).kundayH ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Ask him to lick you', goto: ['husbsex', 'kuni'] },
    ]);
  }
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).npc_pervert ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).mc_inventory ?? 0)?.['strapon'] > 0) {
    scene.actions([
      { label: 'Use a strapon', goto: ['husbsex', 'strapon'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Open your legs', goto: ['husbsex', 'miss'] },
    { label: 'Get into doggy position', goto: ['husbsex', 'dog'] },
    { label: 'Anal', goto: ['husbsex', 'anal'] },
    { label: 'Give him a blowjob', goto: ['husbsex', 'minet'] },
    { label: 'Give him a handjob', goto: ['husbsex', 'hand'] },
  ]);
  scene.build();
}

function enterMinet(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/blowjob/bj24.jpg');
  // TODO-QSP: dynamic text: Your husband''s <<dick>> centimeter member enters your mouth.
  scene.text(`Your husband's ${((s as any).dick ?? '')} centimeter member enters your mouth.`);
  qspCall(s, 'arousal', 'bj', 10);
  qspCall(s, 'stat', '');
  if (((s as any).stat ?? 0)?.['bj'] === 1) {
    scene.text('You think "This is exciting. I am sitting in front of a man, with his dick in my mouth."');
  }
  qspCall(s, 'oral', 'start');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue to suck', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).npcID ?? 0), 1);
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 1);
    scene.img('images/shared/sex/cum/mouth/cum30.jpg');
    // TODO-QSP: dynamic text: A jet of hot sperm hits you in the mouth. You begin to swallow his sperm as <<$n...
    scene.text(`A jet of hot sperm hits you in the mouth. You begin to swallow his sperm as ${((st as any).npcdesc ?? '')} continues to cum in your mouth. Finally, the flow of hot, pungent tasting liquid stops.`);
    scene.actions([
      { label: 'Leave', goto: ['vanr', ''] },
    ]);
  } },
    { label: 'Remove his cock from your mouth', handler: (st: GameState) => {
    (st as any).tiprand = (Math.floor(Math.random() * 2) + 0);
    if ((!((st as any).tiprand ?? 0))) {
      qspCall(st, 'boyStat', '', ((st as any).husID ?? 0));
      (st as any).sexpartkno = 1;
      (st as any).spafinloc = 11;
      qspCall(st, 'cum_manage', '');
      qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 1);
      scene.img('images/shared/sex/cum/facial/facial16.jpg');
      // TODO-QSP: dynamic text: You take his member out and at this point <<$npcdesc>> discharges directly on yo...
      scene.text(`You take his member out and at this point ${((st as any).npcdesc ?? '')} discharges directly on your face, covering it with warm and sticky sperm.`);
    } else {
      qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), (-1));
      scene.img('images/shared/sex/handjob/hand.jpg');
      // TODO-QSP: dynamic text: You take his member out of your mouth and <<$npcdesc>> finishes onto the palm of...
      scene.text(`You take his member out of your mouth and ${((st as any).npcdesc ?? '')} finishes onto the palm of your hand.`);
    }
    scene.actions([
      { label: 'Leave', goto: ['vanr', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterHand(s: GameState, scene: SceneBuilder): void {
  (s as any).sexpartkno = 1;
  (s as any).spafinloc = 13;
  qspCall(s, 'cum_manage', '');
  scene.img('images/shared/sex/cum/handjob/hand1.jpg');
  // TODO-QSP: dynamic text: You take the <<$dick_desc>> cock and begin to caress it with your hands, moving ...
  scene.text(`You take the ${((s as any).dick_desc ?? '')} cock and begin to caress it with your hands, moving the skin of the purple head.`);
  scene.text('Soon your skillful movements bring your husband to orgasm and he finishes onto the palms of you hands, covering them with warm and sticky sperm.');
  qspCall(s, 'arousal', 'hj', 20);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the bathroom', goto: ['vanr', ''] },
  ]);
  scene.build();
}

function enterKuni(s: GameState, scene: SceneBuilder): void {
  (s as any).kunday = ((s as any).daystart ?? 0);
  scene.img('images/shared/sex/kuni/kuni.jpg');
  scene.text('You undres and lie down on the bed, telling your husband to caress you with his tongue.');
  // TODO-QSP: dynamic text: <<$npcdesc>> lies down between your legs and begins to lick your clit and pussy.
  scene.text(`${((s as any).npcdesc ?? '')} lies down between your legs and begins to lick your clit and pussy.`);
  qspCall(s, 'arousal', 'cuni', 20, 'dom');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_horny ?? 0) >= 90) {
    qspCall(s, 'mood', 'raise', 'small');
    (s as any).orgasm_or = 'yes';
    (s as any).orgasm_txt = 'He is very skilled and soon your whole body spasms from a powerful orgasm.';
  } else {
    scene.text('Although your husband is very skilled, you soon feel bored.');
    (s as any).orgasm_or = 'no';
  }
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Further', goto: ['husbsex', 'variant'] },
  ]);
  scene.build();
}

function enterStrapon(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/dom/pegging.mp4');
  // TODO-QSP: dynamic text: You get the strap-on from the box and put it on. <<$npcdesc>> kneels in the dogg...
  scene.text(`You get the strap-on from the box and put it on. ${((s as any).npcdesc ?? '')} kneels in the doggy position on the bed.`);
  scene.text('You lubricate his anus and enter him with the strap-on. While you fuck his ass, he groans and finally finishes. You pull the strap-on out and go to the bathroom.');
  qspCall(s, 'arousal', 'anal_strap_give', 20, 'dom');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the bathroom', goto: ['vanr', ''] },
  ]);
  scene.build();
}

function enterAnal(s: GameState, scene: SceneBuilder): void {
  if (((s as any).analPlugIn ?? 0) === 1) {
    (s as any).analPlugInbonus = 10;
    (s as any).analPlugIn = 0;
    (s as any).analPlugOut = 1;
    qspCall(s, 'boyStat', '', ((s as any).husID ?? 0));
    (s as any).sexpartkno = 1;
    (s as any).spafinloc = 3;
    qspCall(s, 'cum_manage', '');
    if (((s as any).pcs_ass ?? 0) < ((s as any).dick_length ?? 0)) {
      qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
    }
    scene.img('images/shared/sex/vag/doggy/dog2.jpg');
    if (((s as any).pcs_ass ?? 0) < 16) {
      // TODO-QSP: dynamic text: <<$npcdesc>> pulls the anal plug out of your narrow and tight ass.
      scene.text(`${((s as any).npcdesc ?? '')} pulls the anal plug out of your narrow and tight ass.`);
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> pulls out the anal plug and oozes flush out of your ass. Soon you f...
      scene.text(`${((s as any).npcdesc ?? '')} pulls out the anal plug and oozes flush out of your ass. Soon you feel his hard cock enter your hole.`);
    }
    qspCall(s, 'arousal', 'anal_dildo', 3, 'sub');
    qspCall(s, 'stat', '');
    if (((s as any).pcs_ass ?? 0) + ((s as any).analPlugInbonus ?? 0) < ((s as any).dick_length ?? 0)) {
      // TODO-QSP: dynamic text: You scream and bite your lip from the sharp pain when <<$dick_desc>> member inch...
      scene.text(`You scream and bite your lip from the sharp pain when ${((s as any).dick_desc ?? '')} member inches apart your ass as he enters you.`);
    } else {
      // TODO-QSP: dynamic text: You groan when his full <<$dick_desc>> member inches apart your ass as he enters...
      scene.text(`You groan when his full ${((s as any).dick_desc ?? '')} member inches apart your ass as he enters you.`);
    }
    // TODO-QSP: dynamic text: <<$npcdesc>> tightly grabs your buttcheeks as he drives is cock deep into your a...
    scene.text(`${((s as any).npcdesc ?? '')} tightly grabs your buttcheeks as he drives is cock deep into your aching ass one last time, releasing the contents of his balls.`);
    (s as any).orgasm_txt = 'As you press your ass against his dick, your anus feels like it is blazing with fire and waves of pleasure sweep your body.';
    qspCall(s, 'arousal', 'anal', 20, 'sub');
    (s as any).orgasm_txt = '';
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Going to the bathroom', goto: ['vanr', ''] },
    ]);
  }
  if (((s as any).dick_length ?? 0) < ((s as any).pcs_ass ?? 0)) {
    qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
  }
  scene.img('images/shared/sex/vag/doggy/dog2.jpg');
  if (((s as any).mc_inventory ?? 0)?.['lubricant'] === 0) {
    (s as any).anal_slip = ((s as any).anal_slip ?? 0) + (2);
    // TODO-QSP: dynamic text: You don''t have an lubricants, so <<$npcdesc>> spits on his fingers and uses the...
    scene.text(`You don't have an lubricants, so ${((s as any).npcdesc ?? '')} spits on his fingers and uses the saliva to lubricate your ass.`);
  } else {
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['lubricant'] = ((s as any).mc_inventory['lubricant'] ?? 0) - (1);
    (s as any).anal_slip = ((s as any).anal_slip ?? 0) + (8);
    scene.text('You get the lubricant out of a box and hand it to your husband. He puts a little on his palm and rubs your anus with it.');
  }
  qspCall(s, 'arousal', 'anal_finger', 3, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: <<$npcdesc>> puts you on you stomach and parts your buttocks, massaging your anu...
  scene.text(`${((s as any).npcdesc ?? '')} puts you on you stomach and parts your buttocks, massaging your anus with his fingers, first one, then two.`);
  if (((s as any).pcs_ass ?? 0) < 10) {
    scene.text('When he enters your ass with three fingers you involuntarily groan in pain.');
  } else {
    scene.text('He continues using three fingers and begins to stretch your anus.');
  }
  qspCall(s, 'arousal', 'anal_finger', 3, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: <<$npcdesc>> Pulls his fingers out of your ass, and you feel his hard cock slide...
  scene.text(`${((s as any).npcdesc ?? '')} Pulls his fingers out of your ass, and you feel his hard cock slide into your hole.`);
  qspCall(s, 'arousal', 'anal', 10, 'sub');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_ass ?? 0) + ((s as any).anal_slip ?? 0) < ((s as any).dick_length ?? 0)) {
    scene.text('You scream and bit your lip from the sharp pain when his member slides into your ass.');
  } else {
    scene.text('You groan at the feeling of fullness when his penis parts your ass as he enters.');
  }
  // TODO-QSP: dynamic text: <<$npcdesc>> freezes for a moment giving your ass time to adapt to his member. T...
  scene.text(`${((s as any).npcdesc ?? '')} freezes for a moment giving your ass time to adapt to his member. Then he begins to drive it in, all the more insistent.`);
  qspCall(s, 'arousal', 'anal', 10, 'sub');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_ass ?? 0) + ((s as any).anal_slip ?? 0) + 2 < ((s as any).dick_length ?? 0)) {
    if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
      (s as any).pcs_makeup = 0;
    }
    // TODO-QSP: dynamic text: You cry and sink your teeth into the pillow when his <<$dick_desc>> cock begins ...
    scene.text(`You cry and sink your teeth into the pillow when his ${((s as any).dick_desc ?? '')} cock begins to fuck your ass at full power.`);
  } else {
    scene.text('You start moaning rhythmically to the beat of the movements inside you.');
  }
  // TODO-QSP: dynamic text: <<$npcdesc>> tightly grabs your buttcheeks as he drives is cock deep into your a...
  scene.text(`${((s as any).npcdesc ?? '')} tightly grabs your buttcheeks as he drives is cock deep into your aching ass one last time, releasing the contents of his balls.`);
  qspCall(s, 'arousal', 'anal', 10, 'sub');
  qspCall(s, 'stat', '');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)) {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (-1));
    // TODO-QSP: dynamic text: <<$npcdesc>> takes his member out of your ass and seeing shit on his dick tells ...
    scene.text(`${((s as any).npcdesc ?? '')} takes his member out of your ass and seeing shit on his dick tells you, "Damn. ${((s as any).pcs_nickname ?? '')} clean your ass before sex."`);
  } else {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 5);
    // TODO-QSP: dynamic text: <<$npcdesc>> takes his member out of you, kisses you and goes to the bathroom.
    scene.text(`${((s as any).npcdesc ?? '')} takes his member out of you, kisses you and goes to the bathroom.`);
  }
  if (((s as any).pcs_ass ?? 0) < ((s as any).dick_length ?? 0)) {
    qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
  }
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the bathroom', goto: ['vanr', ''] },
  ]);
  scene.build();
}

function enterMiss(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
  (s as any).pose = 0;
  scene.img('images/shared/sex/vag/miss/vag.jpg');
  // TODO-QSP: dynamic text: <<$npcdesc>> spreads your legs and uses his fingers to caress your pussy.
  scene.text(`${((s as any).npcdesc ?? '')} spreads your legs and uses his fingers to caress your pussy.`);
  scene.text('After a few minutes you are practically begging him to take you and he is more than willing, it is slow and gentle making you feel full and satisfied.');
  qspCall(s, 'arousal', 'vaginal_finger', (-15));
  qspCall(s, 'dinsex', 'boy_puts_condom');
  qspCall(s, 'dinsex', 'vaginal_sex', 15);
  qspCall(s, 'dinsex', 'sexcum');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the bathroom', goto: ['vanr', ''] },
  ]);
  scene.build();
}

function enterDog(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
  (s as any).pose = 1;
  scene.img('images/shared/sex/vag/doggy/dog1.jpg');
  // TODO-QSP: dynamic text: <<$npcdesc>> turns you around into the doggy style position and spreads your but...
  scene.text(`${((s as any).npcdesc ?? '')} turns you around into the doggy style position and spreads your buttcheeks before he enters you.`);
  qspCall(s, 'dinsex', 'boy_puts_condom');
  qspCall(s, 'dinsex', 'vaginal_sex', 15, 'sub');
  qspCall(s, 'dinsex', 'sexcum');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the bathroom', goto: ['vanr', ''] },
  ]);
  scene.build();
}

function enterHusbMastrVtor(s: GameState, scene: SceneBuilder): void {
  if (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) < 17) {
    // TODO-QSP: exit
  }
  scene.img('images/characters/city/husband/sex/m21.jpg');
  scene.text('You kneel down and enter use a dildo on your pussy');
  qspCall(s, 'arousal', 'vaginal_dildo', 10, 'masturbate');
  qspCall(s, 'stat', '');
  if (((s as any).hour ?? 0) > 22  ||  ((s as any).hour ?? 0) < 7) {
    // TODO-QSP: dynamic text: <<$npcdesc>> looks at you, obviously a little dumbfounded.
    scene.text(`${((s as any).npcdesc ?? '')} looks at you, obviously a little dumbfounded.`);
  } else {
    // TODO-QSP: dynamic text: Just as you start getting into it, <<$npcdesc>> walks in.
    scene.text(`Just as you start getting into it, ${((s as any).npcdesc ?? '')} walks in.`);
  }
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    scene.text('"What are you doing honey?" he asks.');
    scene.text('"Sorry, honey, but I really need to release steam, and you were busy." You answer, while continuing to masturbate.');
    scene.text('"And how often do you do that?" He asks.');
    scene.text('"As often as I need to. Do you want to watch?" You reply');
    if (((s as any).npc_pervert ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (-1));
      (s as any).orgasm_or = 'yes';
      scene.text('"I\'ll wait outside the door until you\'re done" he says, as he goes away. You continue to satisfy yourself rapidly, and soon finish.');
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Finish', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
      ]);
    } else {
      scene.text('"Well, I don\'t know." He says hesitantly.');
      scene.text('"So you want to." You say smiling');
      scene.actions([
        { label: 'Give him a Show', handler: (st: GameState) => {
    scene.img('images/characters/city/husband/sex/m22.jpg');
    // TODO-QSP: dynamic text: You pull the dildo out of your pussy and, winking at your husband, insert it int...
    scene.text(`You pull the dildo out of your pussy and, winking at your husband, insert it into your anus. ${((st as any).npcdesc ?? '')} closely watches as the dildo disappears in your ass and then reappears. You see a swelling in his pants.`);
    scene.text('"Is there anything else you want, dear?" You ask with a smile.');
    scene.text('"Can I join you?" He asks a little sheepishly.');
    qspCall(st, 'arousal', 'anal_dildo', 5, 'masturbate');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Of course', handler: (st: GameState) => {
    scene.img('images/characters/city/husband/sex/m23.jpg');
    // TODO-QSP: dynamic text: <<$npcdesc>> takes out his member and begins to masturbate. This is not what you...
    scene.text(`${((st as any).npcdesc ?? '')} takes out his member and begins to masturbate. This is not what you expected and at first you even feel a little sorry that he did not enter you, but then you start to masturbate again. You look at your husband, who masturbates looking at you, as you drive the dildo in your ass. Soon you feel yourself coming and you cry out in delight as you fall on the table, orgasming, the dildo still sticking out of your ass. ${((st as any).npcdesc ?? '')} furiously masturbates looking at you stretched out on the table. You remov the dildo from your ass and start licking it in front of your husband's eyes. Clearly excited from such a spectacle he soon starts cumming, spraying his sperm on the floor. You reach out to him sticking out your lips. A moment later he passionately kisses you.`);
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'anal_dildo', 5, 'masturbate');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } else {
    if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      scene.text('"Do you not get enough with me?" He asks.');
      scene.text('"Sorry, honey, but I really need to let of steam, and you were busy" You answer, while continuing to masturbate.');
      scene.text('"Well, at least give me a show." He says.');
      scene.text('"And how do I do that? Should I put it in the ass too?" You ask');
      qspCall(s, 'arousal', 'vaginal_dildo', 10, 'masturbate');
      qspCall(s, 'stat', '');
      if (((s as any).npc_pervert ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
        ((s as any).spouseVars = (s as any).spouseVars ?? {})['pervert_add'] = ((s as any).spouseVars['pervert_add'] ?? 0) + (1);
        // TODO-QSP: dynamic text: "No, don''t. This is enough" He says, and sits down on a chair watching you. You...
        scene.text(`"No, don't. This is enough" He says, and sits down on a chair watching you. You continue to satisfy yourself rapidly, and soon finish in front of husband. ${((s as any).npcdesc ?? '')} stands up and begins to applaud. "Bravo, can I have an encore?" He says laughing.`);
        // TODO-QSP: dynamic text: "For such a wonderful audience I will do anything, but only after the intermissi...
        scene.text(`"For such a wonderful audience I will do anything, but only after the intermission," You laugh. ${((s as any).npcdesc ?? '')} helps you getting off the table.`);
        qspCall(s, 'arousal', 'end');
        scene.actions([
          { label: 'Finish', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
        ]);
      } else {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
        scene.text('"You do that too? I would love a demonstration." He says.');
        scene.text('"Whatever you want" You reply');
        scene.actions([
          { label: 'Show', handler: (st: GameState) => {
    scene.img('images/characters/city/husband/sex/m22.jpg');
    // TODO-QSP: dynamic text: You pull the dildo out of your pussy and, winking at your husband, insert it int...
    scene.text(`You pull the dildo out of your pussy and, winking at your husband, insert it into your anus. ${((st as any).npcdesc ?? '')} watches closely as the dildo disappears in your ass and then reappears. You see a swelling in his pants.`);
    scene.text('"Is there anything else you want, dear?" You ask with a smile.');
    scene.text('"I would like to join" He says, unbuttoning his pants and exposing his member to your face.');
    qspCall(st, 'arousal', 'anal_dildo', 10, 'masturbate');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Use your mouth', handler: (st: GameState) => {
    scene.img('images/characters/city/husband/sex/m24.jpg');
    // TODO-QSP: dynamic text: You take his slightly flaccid penis and start sucking, continuing to drive the d...
    scene.text(`You take his slightly flaccid penis and start sucking, continuing to drive the dildo in your anus. You quickly get him hard and ${((st as any).npcdesc ?? '')} stops you. "Wait, I think I'll take another hole."`);
    qspCall(st, 'arousal', 'bj', 10, 'sub');
    qspCall(st, 'arousal', 'anal_dildo', (-10), 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Let him fuck your ass', handler: (st: GameState) => {
    (st as any).picrand = 89;
    qspGoto(st, 'sex', 'anal');
  } },
    ]);
  } },
    ]);
  } },
        ]);
      }
    } else {
      scene.text('"After all the fucking I give you, you\'re still not satisfied? You horny bitch." He asks.');
      scene.text('"I\'m sorry dear, but I really need to let of steam, and you were busy" You answer, while continuing to masturbate.');
      qspCall(s, 'arousal', 'vaginal_dildo', 10);
      qspCall(s, 'stat', '');
      if (((s as any).npc_pervert ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
        ((s as any).spouseVars = (s as any).spouseVars ?? {})['pervert_add'] = ((s as any).spouseVars['pervert_add'] ?? 0) + (1);
        scene.text('"Well then, open your mouth." He says pulling his member out of his pants and roughly pushing it into your mouth. He grabs you by the hair and starts fucking your mouth telling you to not stop masturbating. Soon, he tires of your mouth. "Take that rubber thing out of your hole because I\'ll use it now."');
        qspCall(s, 'arousal', 'bj', 10, 'sub');
        qspCall(s, 'arousal', 'vaginal_dildo', (-10), 'sub');
        qspCall(s, 'stat', '');
        scene.actions([
          { label: 'Open your legs', handler: (st: GameState) => {
    (st as any).picrand = 89;
    qspGoto(st, 'sex', 'vag');
  } },
        ]);
      } else {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
        scene.text('"Put it in your ass and open your mouth" He says, pulling out his cock. You quickly take the dildo out of your pussy and put it in your ass as you humbly open your mouth.');
        qspCall(s, 'arousal', 'anal_dildo', 10, 'sub');
        qspCall(s, 'stat', '');
        scene.actions([
          { label: 'Use your mouth', handler: (st: GameState) => {
    scene.img('images/characters/city/husband/sex/m24.jpg');
    // TODO-QSP: dynamic text: You take his slightly flaccid penis and start sucking, continuing to drive the d...
    scene.text(`You take his slightly flaccid penis and start sucking, continuing to drive the dildo in your anus. You quickly get him hard and ${((st as any).npcdesc ?? '')} stops you. "Take the dildo out. It is time for me to fuck your ass."`);
    qspCall(st, 'arousal', 'bj', 10, 'sub');
    qspCall(st, 'arousal', 'anal_dildo', (-10), 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Let him fuck your ass', handler: (st: GameState) => {
    (st as any).picrand = 89;
    qspGoto(st, 'sex', 'anal');
  } },
    ]);
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'room':
      enterRoom(s, scene);
      break;
    case 'husb_debt_event':
      enterHusbDebtEvent(s, scene);
      break;
    case 'dolg':
      enterDolg(s, scene);
      break;
    case 'dolgend':
      enterDolgend(s, scene);
      break;
    case 'variant':
      enterVariant(s, scene);
      break;
    case 'minet':
      enterMinet(s, scene);
      break;
    case 'hand':
      enterHand(s, scene);
      break;
    case 'kuni':
      enterKuni(s, scene);
      break;
    case 'strapon':
      enterStrapon(s, scene);
      break;
    case 'anal':
      enterAnal(s, scene);
      break;
    case 'miss':
      enterMiss(s, scene);
      break;
    case 'dog':
      enterDog(s, scene);
      break;
    case 'husb_mastr_vtor':
      enterHusbMastrVtor(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const husbSex: LocationDef = {
  name: 'husbSex',
  title: 'Bedroom',
  region: 'other',
  enter: enter,
};
