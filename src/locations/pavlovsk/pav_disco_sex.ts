import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterPcCondomFunc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0  &&  (!((s as any).preziktype ?? 0))) {
    ((s as any).mc_inventory ?? {})['equipped_condoms'] = (((s as any).mc_inventory ?? {})['equipped_condoms'] ?? 0) - (1);
  } else {
    if (((s as any).mc_inventory ?? 0)?.['normal_condoms'] > 0) {
      ((s as any).mc_inventory ?? {})['normal_condoms'] = (((s as any).mc_inventory ?? {})['normal_condoms'] ?? 0) - (1);
    }
  }
  qspCall(s, 'npcStat', '', ((s as any).npcID ?? 0), 0, 'normal');
  scene.build();
}

function enterDiscoSexFame(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'prostitute') {
    if (((s as any).temp ?? 0)?.['prostitution_offer'] === 0) {
      ((s as any).temp ?? {})['prostitution_offer'] = 100;
    }
    ((s as any).temp ?? {})['prostitution_paid'] = ((s as any).temp ?? 0)?.['prostitution_offer'];
    // TODO-QSP: gs 'money', 'earn', temp['prostitution_offer']
    if (((s as any).npc_indiscreet ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      qspCall(s, 'fame', 'pav', 'prostitute', 'small');
    } else {
      qspCall(s, 'fame', 'pav', 'prostitute', 'medium');
    }
  } else {
    if (((s as any).npc_indiscreet ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      qspCall(s, 'fame', 'pav', 'sex', 'small');
    } else {
      qspCall(s, 'fame', 'pav', 'sex', 'medium');
    }
  }
  qspCall(s, 'stat', '');
  scene.build();
}

function enterOutside(s: GameState, scene: SceneBuilder): void {
  (s as any).music_loop = 0;
  if (((s as any).locArgs?.[1] ?? 0) === 'aggressiv') {
    (s as any).gdk_nice_guy = 0;
  } else {
    (s as any).gdk_nice_guy = 1;
  }
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/dk_night.jpg');
  // TODO-QSP: dynamic text: You leave the disco with <<$npcdesc>> and walk into a quiet garden area.
  scene.text(`You leave the disco with ${((s as any).npcdesc ?? 0)} and walk into a quiet garden area.`);
  if ((((s as any).gdk_nice_guy ?? 0) === 1  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 70)  ||  (((s as any).gdk_nice_guy ?? 0) === 0  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 30)) {
    scene.text('He pulls out a six pack and offers you a beer as you both sit down on a fallen tree.');
    qspCall(s, 'willpower', 'drink', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Don\'t drink the beer [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Don\'t drink the beer [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/outside_talk.jpg');
    if (((s as any).alko ?? 0) < 6) {
      scene.text('You smile at him as you shake your head. "No thanks, I\'m not really in the mood for a beer right now."');
    } else {
      scene.text('"No, I don\'t thi-*hic* think I should... *hic*" you manage to drunkenly mumble.');
    }
    // TODO-QSP: dynamic text: <<$npcdesc>> offers you a disarming smile. "Alright, no problem! We can just cha...
    scene.text(`${((s as any).npcdesc ?? 0)} offers you a disarming smile. "Alright, no problem! We can just chat!"`);
    scene.actions([
      { label: 'Chat with him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.img('images/locations/pavlovsk/community/disco/outside_talk.jpg');
    // TODO-QSP: dynamic text: You spend some time getting to know <<$npcdesc>> a bit better before he checks h...
    scene.text(`You spend some time getting to know ${((s as any).npcdesc ?? 0)} a bit better before he checks his watch. "I have to get going, but I really enjoyed chatting with you!"`);
    if ((Math.floor(Math.random() * 3) + 0) === 0  &&  ((s as any).pcs_apprnc ?? 0) >= (Math.floor(Math.random() * 81) + 40)) {
      scene.text('"I would love to see you again! How about you give me your number, so we can go on a date some time?" he adds.');
      scene.actions([
        { label: 'Decline and go back to the disco', goto: ['pav_disco', ''] },
        { label: 'Give him your number', handler: (st: GameState) => {
    qspCall(s, 'mood', 'raise', 'tiny');
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'lover', 'add_dating', ((s as any).npcID ?? 0));
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/outside_talk.jpg');
    scene.text('You smile and give him your phone number, which he diligently adds to his phone.');
    // TODO-QSP: dynamic text: "I hope I'll see you again soon, <<$pcs_firstname>>. I'll call you!" he says as ...
    scene.text(`"I hope I'll see you again soon, ${((s as any).pcs_firstname ?? 0)}. I'll call you!" he says as he packs up his things. You get up and chat with him as you head back to the disco.`);
    scene.actions([
      { label: 'Return to the disco', goto: ['pav_disco', ''] },
    ]);
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> scoots over until he's right next to you and kisses you.
      scene.text(`${((s as any).npcdesc ?? 0)} scoots over until he's right next to you and kisses you.`);
      qspCall(s, 'pav_disco_sex', 'kissing');
      scene.actions([
        { label: 'Go back to the disco', goto: ['pav_disco', ''] },
      ]);
    }
  } },
      { label: 'Go back to the disco', goto: ['pav_disco', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Have a beer', handler: (st: GameState) => {
    qspCall(s, 'drugs', 'alcohol', 'beer');
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/drink_beer.jpg');
    // TODO-QSP: dynamic text: You accept the beer and chat with <<$npcdesc>> as you drink it. He's amusing and...
    scene.text(`You accept the beer and chat with ${((s as any).npcdesc ?? 0)} as you drink it. He's amusing and tells you some hilarious stories.`);
    if (((s as any).alko ?? 0) >= 6) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (20);
      // TODO-QSP: dynamic text: <<$npcdesc>> scoots over until he's right next to you and closes his arms around...
      scene.text(`${((s as any).npcdesc ?? 0)} scoots over until he's right next to you and closes his arms around you. He pulls you in and kisses your lips passionately, making your heart flutter. Wow, he's a good kisser!`);
      scene.text('You then feel his hands on your chest...');
      if (((s as any).fame ?? 0)?.['pav_slut'] < 50) {
        qspCall(s, 'willpower', 'sex', 'resist');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Ask him to stop [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Ask him to stop [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'willpower', 'sex', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    if ((Math.floor(Math.random() * 2) + 1) === 1) {
      scene.img('images/locations/pavlovsk/community/disco/sex/grab_tit.jpg');
      scene.text('He\'s too drunk to notice your objections and slides a hand underneath your clothes, squeezing your breasts.');
      scene.actions([
        { label: 'Squat down before him', handler: (st: GameState) => {
    // TODO-QSP: gt 'pav_disco_sex', 'blowjob', 'unpaid'
  } },
        { label: 'Don\'t say anything', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    if (((s as any).gdk_nice_guy ?? 0) === 1) {
      qspCall(s, 'fame', 'pav', 'sex', Math.floor(Math.random() * 3) + 0);
    } else {
      if ((!((s as any).gdk_nice_guy ?? 0))) {
        qspCall(s, 'fame', 'pav', 'sex', Math.floor(Math.random() * 3) + 2);
      }
    }
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/vag/miss/vag.jpg');
    // TODO-QSP: dynamic text: He roughly undresses you, too horny and drunk to care about your feelings. Then,...
    scene.text(`He roughly undresses you, too horny and drunk to care about your feelings. Then, before you know it, you're naked on the ground before him as he stands over you with his ${((s as any).dick_girth ?? 0)} cock hanging out of his pants.`);
    qspCall(s, 'dinSex', 'wear_condom');
    qspCall(s, 'dinsex', 'vaginal_sex', 10);
    qspCall(s, 'dinsex', 'sexcum');
    scene.actions([
      { label: 'Leave', goto: ['pav_commcenter', ''] },
    ]);
  } },
      ]);
    } else {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/community/disco/sex/tits.jpg');
      // TODO-QSP: dynamic text: <<$npcdesc>>'s head slumps for a moment, and his movements slow down, but he's u...
      scene.text(`${((s as any).npcdesc ?? 0)}'s head slumps for a moment, and his movements slow down, but he's unwilling to let go of your breasts.`);
      if (((s as any).fame ?? 0)?.['pav_slut'] < 150) {
        qspCall(s, 'willpower', 'bj', 'resist');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Go back to the disco [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Go back to the disco', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'bj', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['pav_disco', ''] },
          ]);
        }
      }
      scene.text('You\'re feeling rather horny yourself, and don\'t object to his actions. You moan softly when he exposes your breasts, licking and sucking on your nipples.');
      scene.actions([
        { label: 'Squat down before him', handler: (st: GameState) => {
    // TODO-QSP: gt 'pav_disco_sex', 'blowjob', 'unpaid'
  } },
      ]);
    }
  }, goto: ['pav_disco_sex', 'handjob'] },
          ]);
        }
      }
      scene.actions([
        { label: 'Don\'t say anything', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    if (((s as any).gdk_nice_guy ?? 0) === 1) {
      qspCall(s, 'fame', 'pav', 'sex', Math.floor(Math.random() * 3) + 0);
    } else {
      if ((!((s as any).gdk_nice_guy ?? 0))) {
        qspCall(s, 'fame', 'pav', 'sex', Math.floor(Math.random() * 3) + 2);
      }
    }
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/vag/miss/vag.jpg');
    // TODO-QSP: dynamic text: He roughly undresses you, too horny and drunk to care about your feelings. Then,...
    scene.text(`He roughly undresses you, too horny and drunk to care about your feelings. Then, before you know it, you're naked on the ground before him as he stands over you with his ${((s as any).dick_girth ?? 0)} cock hanging out of his pants.`);
    qspCall(s, 'dinSex', 'wear_condom');
    qspCall(s, 'dinsex', 'vaginal_sex', 10);
    qspCall(s, 'dinsex', 'sexcum');
    scene.actions([
      { label: 'Leave', goto: ['pav_commcenter', ''] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).alko ?? 0) < 6) {
        if ((Math.floor(Math.random() * 2) + 1) === 1) {
          if ((Math.floor(Math.random() * 2) + 0) === 0  &&  ((s as any).pcs_apprnc ?? 0) >= (Math.floor(Math.random() * 81) + 40)) {
            scene.text('He checks his watch and frowns. "I have to get going, but I would love to see you again! How about you give me your number, so we can go on a date sometime?"');
            scene.actions([
              { label: 'Decline and go back to the disco', goto: ['pav_disco', ''] },
              { label: 'Give him your number', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'npcgeneratec', '', 0, '', 'like');
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    ((s as any).bmFrend ?? {})[String((s as any).Tboynum ?? 0)] = 1;
    qspCall(s, 'lover', 'add_dating', ((s as any).npcID ?? 0));
    qspCall(s, 'stat', '');
    scene.text('You smile and give him your number, which he diligently adds to his phone.');
    // TODO-QSP: dynamic text: "I hope I'll see you again soon, <<$pcs_firstname>>. I'll call you!" he says as ...
    scene.text(`"I hope I'll see you again soon, ${((s as any).pcs_firstname ?? 0)}. I'll call you!" he says as he packs up his things. You get up as well, and chat with him as you head back to the disco.`);
    scene.actions([
      { label: 'Go back to the disco', goto: ['pav_disco', ''] },
    ]);
  } },
            ]);
          } else {
            // TODO-QSP: dynamic text: <<$npcdesc>> scoots over until he's right next to you and kisses you.
            scene.text(`${((s as any).npcdesc ?? 0)} scoots over until he's right next to you and kisses you.`);
            if (((s as any).fame ?? 0)?.['pav_slut'] < 50) {
              qspCall(s, 'willpower', 'mast', 'resist');
              if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                scene.actions([
                  { label: 'Go back to the disco [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                ]);
              } else {
                scene.actions([
                  { label: 'Go back to the disco [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'mast', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['pav_disco', ''] },
                ]);
              }
            }
            qspCall(s, 'pav_disco_sex', 'kissing');
          }
        } else {
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
          qspCall(s, 'stat', '');
          // TODO-QSP: dynamic text: <<$npcdesc>> scoots over until he's right next to you and kisses you.
          scene.text(`${((s as any).npcdesc ?? 0)} scoots over until he's right next to you and kisses you.`);
          if (((s as any).fame ?? 0)?.['pav_slut'] < 50) {
            qspCall(s, 'willpower', 'mast', 'resist');
            if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
              scene.actions([
                { label: 'Go back to the disco [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
              ]);
            } else {
              scene.actions([
                { label: 'Go back to the disco [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'mast', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['pav_disco', ''] },
              ]);
            }
          }
          qspCall(s, 'pav_disco_sex', 'kissing');
        }
      }
    }
  } },
    ]);
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('He pulls out a six-pack and offers you a beer as you sit down on a fallen tree.');
    scene.actions([
      { label: 'Have a beer', handler: (st: GameState) => {
    qspCall(s, 'drugs', 'alcohol', 'beer');
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/drink_beer.jpg');
    // TODO-QSP: dynamic text: You accept the beer and chat with <<$npcdesc>> as you drink it. He's amusing and...
    scene.text(`You accept the beer and chat with ${((s as any).npcdesc ?? 0)} as you drink it. He's amusing and tells you some hilarious stories.`);
    scene.text('He then scoots next to you and kisses you on the lips.');
    qspCall(s, 'pav_disco_sex', 'decline', 70);
    qspCall(s, 'pav_disco_sex', 'kissing');
  } },
      { label: 'Reject the beer', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/outside_talk.jpg');
    // TODO-QSP: dynamic text: You reject the beer and chat with <<$npcdesc>> as he drink's his. He's amusing a...
    scene.text(`You reject the beer and chat with ${((s as any).npcdesc ?? 0)} as he drink's his. He's amusing and tells you some hilarious stories.`);
    scene.text('He then scoots next to you and kisses you on the lips.');
    qspCall(s, 'pav_disco_sex', 'decline', 70);
    qspCall(s, 'pav_disco_sex', 'kissing');
  } },
    ]);
  }
  scene.build();
}

function enterDecline(s: GameState, scene: SceneBuilder): void {
  if (((s as any).fame ?? 0)?.['pav_slut'] < ((s as any).locArgs?.[1] ?? 0)) {
    qspCall(s, 'willpower', 'sex', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Decline and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Decline and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'willpower', 'sex', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/sex/walkoff.jpg');
    scene.text('You just laugh at him. "Put that away because I\'m going anywhere near it!"');
    scene.text('You then leave without saying another word, ignoring his pleas.');
    scene.actions([
      { label: 'Go back to the disco', goto: ['pav_disco', ''] },
    ]);
  } },
      ]);
    }
  }
  scene.build();
}

function enterKissing(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Kiss him back', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    ((s as any).bmKISS ?? {})[String((s as any).Tboynum ?? 0)] = (((s as any).bmKISS ?? {})[String((s as any).Tboynum ?? 0)] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/outside_kiss.jpg');
    scene.text('You lean in and reciprocate the kiss before you feel his hands on your chest.');
    if (((s as any).fame ?? 0)?.['pav_slut'] < 100) {
      qspCall(s, 'willpower', 'mast', 'resist');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Go back to the disco [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Go back to the disco [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'mast', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['pav_disco', ''] },
        ]);
      }
    }
    scene.actions([
      { label: 'Let him', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 3, 'no_orgasm_msg');
    ((s as any).bmTITS ?? {})[String((s as any).Tboynum ?? 0)] = (((s as any).bmTITS ?? {})[String((s as any).Tboynum ?? 0)] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/sex/tits.jpg');
    // TODO-QSP: dynamic text: You ignore <<$npcdesc>>'s hands and kiss him, letting him pull your clothes asid...
    scene.text(`You ignore ${((s as any).npcdesc ?? 0)}'s hands and kiss him, letting him pull your clothes aside, so your ${((s as any).titsize ?? 0)} breasts fall out. He kneads them eagerly and continues to kiss and lick them, making your nipples poke out fiercely in the evening air.`);
    scene.text('You moan under his touch, letting your leg slide between his. You can feel his cock brushing up against your thigh, stiff as a rock.');
    if ((Math.floor(Math.random() * 3) + 0) === 1  &&  ((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 'pav_residential') {
      scene.text('"Hey," he breathes between kisses. "I was wondering... Do you want to come back to my place for some coffee?"');
      // TODO-QSP: act'Only if "coffee" means "sex"':
      scene.img('images/locations/pavlovsk/community/disco/sex/tits.jpg');
      scene.text('"That sounds great! If by \'coffee\' you mean \'sex.\'" You grin at him. There\'s a moment of surprise by your forwardness, but he quickly helps you get your clothes back in place and starts pulling you away towards his apartment.');
      scene.actions([
        { label: 'No thanks', handler: (st: GameState) => {
    scene.text('"Thanks, but no thanks. Not interested."');
    scene.actions([
      { label: 'Go back to the disco', goto: ['pav_disco', ''] },
    ]);
  } },
        { label: 'Sure', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/sex/tits.jpg');
    scene.text('"That sounds nice," you smile at him. After sprucing yourself up a bit, you follow him back to his apartment.');
    scene.actions([
      { label: 'Go to his place', handler: (st: GameState) => {
    // TODO-QSP: gt 'date_hangout', 'start', 'disco'
  } },
    ]);
  } },
        { label: 'Go to his place', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_start', 'npc_home_start', 'hookup'
  } },
      ]);
    }
    if ((Math.floor(Math.random() * 2) + 0) === 1) {
      if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 'pav_residential') {
        scene.text('"Hey," he breathes between kisses. "Why don\'t we take this back to my place?"');
        qspCall(s, 'family_schedule', '');
        if (((s as any).locat ?? 0)?.['Fam_inGad'] === 1) {
          scene.actions([
            { label: 'Invite him home (hookup)', handler: (st: GameState) => {
    qspCall(s, 'fame', 'pav', 'sex', 1);
    scene.img('images/locations/pavlovsk/community/disco/outside_kiss.jpg');
    // TODO-QSP: dynamic text: "How about mine instead?" you ask. With a sultry smirk, you lean in to whisper i...
    scene.text(`"How about mine instead?" you ask. With a sultry smirk, you lean in to whisper in ${((s as any).npcdesc ?? 0)}'s ear.`);
    scene.text('"<i>My parents aren\'t home tonight...</i>"');
    scene.text('The look in his eyes is all you need to know and the two of you rush back to the estate together.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_start', 'pc_home_start', 'hookup'
  } },
    ]);
  } },
          ]);
        }
        if (((s as any).home ?? 0)?.['current'] === 'mey_home') {
          scene.actions([
            { label: 'Invite him home (hookup)', handler: (st: GameState) => {
    qspCall(s, 'fame', 'pav', 'sex', 1);
    scene.img('images/locations/pavlovsk/community/disco/outside_kiss.jpg');
    scene.text('"How about you come back to my place instead?" you ask. "My housemates won\'t mind."');
    scene.text('The look in his eyes is all you need to know and the two of you rush back to the Meynold\'s house together.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_start', 'pc_home_start', 'hookup'
  } },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Pull out his cock', handler: (st: GameState) => {
    scene.img('images/shared/sex/handjob/hj.jpg');
    scene.text('You reach down his pants, grab hold of his erection and pull it out.');
    scene.text('"Why wait?" you grin, steadily stroking him.');
  }, goto: ['pav_disco_sex', 'handjob'] },
          { label: 'Sure', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/sex/tits.jpg');
    scene.text('You pull your clothes back into place before letting him drag you away.');
    scene.actions([
      { label: 'Go to his place', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_start', 'npc_home_start', 'hookup'
  } },
    ]);
  } },
        ]);
      } else {
        scene.text('"Hey," he breathes between kisses. "Do you want to come back to my place in the city?"');
        qspCall(s, 'family_schedule', '');
        if (((s as any).locat ?? 0)?.['Fam_inGad'] === 1) {
          scene.actions([
            { label: 'Invite him home (hookup)', handler: (st: GameState) => {
    qspCall(s, 'fame', 'pav', 'sex', 1);
    scene.img('images/locations/pavlovsk/community/disco/outside_kiss.jpg');
    // TODO-QSP: dynamic text: "How about mine instead?" you ask. With a sultry smirk, you lean in to whisper i...
    scene.text(`"How about mine instead?" you ask. With a sultry smirk, you lean in to whisper in ${((s as any).npcdesc ?? 0)}'s ear.`);
    scene.text('"<i>My parents aren\'t home tonight...</i>"');
    scene.text('The look in his eyes is all you need to know and the two of you rush back to the estate together.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_start', 'pc_home_start', 'hookup'
  } },
    ]);
  } },
          ]);
        }
        if (((s as any).home ?? 0)?.['current'] === 'mey_home') {
          scene.actions([
            { label: 'Invite him home (hookup)', handler: (st: GameState) => {
    qspCall(s, 'fame', 'pav', 'sex', 1);
    scene.img('images/locations/pavlovsk/community/disco/outside_kiss.jpg');
    scene.text('"How about you come back to my place instead?" you ask. "My housemates won\'t mind."');
    scene.text('The look in his eyes is all you need to know and the two of you rush back to the Meynold\'s house together.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_start', 'pc_home_start', 'hookup'
  } },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Pull out his cock', handler: (st: GameState) => {
    scene.img('images/shared/sex/handjob/hj.jpg');
    scene.text('You reach down his pants, grab hold of his erection and pull it out.');
    scene.text('"That\'s way too far," you grin, steadily stroking him.');
  }, goto: ['pav_disco_sex', 'handjob'] },
          { label: 'Sure', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/sex/tits.jpg');
    if (((s as any).npc_car ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.text('You pull your clothes back into place as he leads you back to his car.');
    } else {
      scene.text('You pull your clothes back into place as you let him drag you away to catch a cab.');
    }
    scene.actions([
      { label: 'Go to his place', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_start', 'npc_home_start', 'hookup'
  } },
    ]);
  } },
        ]);
      }
    } else {
      if (((s as any).fame ?? 0)?.['pav_slut'] < 150) {
        qspCall(s, 'willpower', 'mast', 'resist');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Go back to the disco [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Go back to the disco [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'mast', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['pav_disco', ''] },
          ]);
        }
      }
      if (((s as any).fame ?? 0)?.['pav_slut'] < 250) {
        scene.actions([
          { label: 'Let him finger you', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal_finger', 3, 'no_orgasm_msg');
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/pet/petting.jpg');
    // TODO-QSP: dynamic text: As soon as you pull your hand away from his groin, <<$npcdesc>> slips his hand u...
    scene.text(`As soon as you pull your hand away from his groin, ${((s as any).npcdesc ?? 0)} slips his hand underneath your clothes, rubbing two fingers against your pussy. You were already somewhat turned on and softly moaned when he slid his finger back and forth over your wet lips.`);
    if (((s as any).fame ?? 0)?.['pav_slut'] < 200) {
      qspCall(s, 'willpower', 'mast', 'resist', 'hard');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Remove his hands and walk away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Remove his hands and walk away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'mast', 'resist', 'hard');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['pav_disco', ''] },
        ]);
      }
    }
    scene.actions([
      { label: 'Let him continue', handler: (st: GameState) => {
    scene.text('He has an expert touch and quickly brings you to an intense orgasm. You bite your lip hard, trying your best not to cry out in ecstasy.');
    qspCall(s, 'arousal', 'vaginal_finger', 5, 'no_orgasm_msg');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Moan and catch your breath', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cock/cock3.jpg');
    // TODO-QSP: dynamic text: Once the most intense part of your orgasm is over, you relax and moan softly wit...
    scene.text(`Once the most intense part of your orgasm is over, you relax and moan softly with pleasure. In your daze, your legs can't support your weight, and you drop to your knees in front of ${((s as any).npcdesc ?? 0)}.`);
    // TODO-QSP: dynamic text: When you catch your breath, you see <<$npcdesc>>'s erect cock directly in front ...
    scene.text(`When you catch your breath, you see ${((s as any).npcdesc ?? 0)}'s erect cock directly in front of your face!`);
    qspCall(s, 'willpower', 'hj', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Stare at it [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Stare at it [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'hj', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    // TODO-QSP: gs 'cum_call', 'face', $npcID, temp['known_cumID']
    qspCall(s, 'arousal', 'foreplay', 5, 'no_orgasm_msg');
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/pavlovsk/community/disco/sex/facial.jpg');
    // TODO-QSP: dynamic text: You remain kneeling in front of <<$npcdesc>> as you stare at his erection, still...
    scene.text(`You remain kneeling in front of ${((s as any).npcdesc ?? 0)} as you stare at his erection, still softly panting as you recover from your orgasm. He then begins to jerk off in front of you.`);
    // TODO-QSP: dynamic text: In no time at all, his cock erupts, and a thick glob of his cum lands on your no...
    scene.text(`In no time at all, his cock erupts, and a thick glob of his cum lands on your nose. ${((s as any).npcdesc ?? 0)} groans loudly as he shoots several more jets of his cum onto your face. You flinch, close your eyes, and don't dare open them again until you're sure he's finished.`);
    scene.actions([
      { label: 'Leave', goto: ['pav_commcenter', ''] },
    ]);
  } },
      ]);
    }
    qspCall(s, 'willpower', 'bj', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Jerk him off [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Jerk him off [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    ((s as any).bmHJ ?? {})[String((s as any).Tboynum ?? 0)] = (((s as any).bmHJ ?? {})[String((s as any).Tboynum ?? 0)] ?? 0) + (1);
    qspCall(s, 'willpower', 'bj', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    // TODO-QSP: gs 'cum_call', 'face', $npcID, temp['known_cumID']
    qspCall(s, 'arousal', 'hj', 5, 'no_orgasm_msg');
    qspCall(s, 'arousal', 'end');
    scene.img('images/shared/sex/handjob/hj.jpg');
    scene.text('You stand up confidently and smile at him. "That was great! Now, I believe I owe you something."');
    scene.text('Wrapping your fingers around his cock, you jerk him off while kissing him again. You let him grab your breasts while you stroke his length, and in no time at all, he lets out a muffled groan as thick gobs of cum land on the ground.');
    scene.actions([
      { label: 'Go back to the disco', goto: ['pav_disco', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Suck it', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 5, 'no_orgasm_msg');
    ((s as any).bmBJ ?? {})[String((s as any).Tboynum ?? 0)] = (((s as any).bmBJ ?? {})[String((s as any).Tboynum ?? 0)] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/blowjob/cocksuck.jpg');
    scene.text('Without even realizing it, you move in. Then, after a few kisses and licks, you let it slide into your mouth and diligently suck him off.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    if (((s as any).gdk_nice_guy ?? 0) === 1) {
      qspCall(s, 'fame', 'pav', 'sex', 'small');
    } else {
      if ((!((s as any).gdk_nice_guy ?? 0))) {
        qspCall(s, 'fame', 'pav', 'sex', 'medium');
      }
    }
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/mouth/cocksuck2.jpg');
    scene.text('Without warning, a jet of warm cum shoots into your mouth. You almost gag in surprise but suppress it and continue to suck his dick. You can\'t stop him from pulling his cock out of your mouth and shooting the last few drops of his load over your face.');
    scene.text('Some of his cum drips down onto your clothes as he tucks his cock back into his pants with a satisfied grin.');
    scene.actions([
      { label: 'Look at him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/cocksuck3.jpg');
    // TODO-QSP: dynamic text: <<$npcdesc>> still has his hand on your head. "Look at me." he grunts.
    scene.text(`${((s as any).npcdesc ?? 0)} still has his hand on your head. "Look at me." he grunts.`);
    scene.text('You look him in the eye, your mouth half open. His load is still on your tongue, and you\'re unsure whether you should spit it out.');
    // TODO-QSP: dynamic text: He gives you a blissful smile. "You're an amazing cocksucker, <<$pcs_nickname>>!...
    scene.text(`He gives you a blissful smile. "You're an amazing cocksucker, ${((s as any).pcs_nickname ?? 0)}! That was great."`);
    qspCall(s, 'willpower', 'swallow', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Spit [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Spit [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    // TODO-QSP: gs 'cum_call', 'mouth', $npcID, temp['known_cumID']
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'willpower', 'swallow', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'arousal', 'end');
    scene.text('Realizing he doesn\'t care, you discreetly spit his load out and stand up. Hopefully, he won\'t tell anyone about what you just did...');
    scene.actions([
      { label: 'Leave', goto: ['pav_commcenter', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Swallow', handler: (st: GameState) => {
    // TODO-QSP: gs 'cum_call', 'mouth_swallow', $npcID, temp['known_cumID']
    qspCall(s, 'arousal', 'end');
    scene.text('Realizing he doesn\'t care, you gulp down his load and stand up. Hopefully, he won\'t tell anyone about what you just did...');
    scene.actions([
      { label: 'Leave', goto: ['pav_commcenter', ''] },
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
  } },
        ]);
      }
      scene.actions([
        { label: 'Caress his cock through his pants', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 3, 'no_orgasm_msg');
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/grab/cock.jpg');
    // TODO-QSP: dynamic text: You kiss <<$npcdesc>> again while you begin to stroke his cock through his pants...
    scene.text(`You kiss ${((s as any).npcdesc ?? 0)} again while you begin to stroke his cock through his pants, feeling the outline of it very clearly through the fabric.`);
    scene.text('"Mmmm... do you have something for me?" you ask him sweetly, and he lets out a needy groan.');
    if (((s as any).fame ?? 0)?.['pav_slut'] < 150) {
      qspCall(s, 'willpower', 'mast', 'resist');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Go back to the disco [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Go back to the disco [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'mast', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['pav_disco', ''] },
        ]);
      }
    }
    scene.actions([
      { label: 'Stick your hand down his pants', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'hj', 3, 'no_orgasm_msg');
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/grab/cock2.jpg');
    scene.text('You slide your hand into his pants and caress his hard cock. Then, after a few teasing moments, you pull his pants down and let his cock spring free.');
    if (((s as any).fame ?? 0)?.['pav_slut'] < 150) {
      qspCall(s, 'willpower', 'mast', 'resist');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Go back to the disco [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Go back to the disco [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'mast', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['pav_disco', ''] },
        ]);
      }
    }
  }, goto: ['pav_disco_sex', 'handjob'] },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterHandjob(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Jerk him off', handler: (st: GameState) => {
    ((s as any).bmHJ ?? {})[String((s as any).Tboynum ?? 0)] = (((s as any).bmHJ ?? {})[String((s as any).Tboynum ?? 0)] ?? 0) + (1);
    qspCall(s, 'arousal', 'hj', 5, 'no_orgasm_msg');
    qspCall(s, 'stat', '');
    if (((s as any).npc_dirty_lover ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.img('images/shared/sex/handjob/hj.jpg');
      scene.text('You move your hand up and down his shaft, slowly picking up the pace.');
      // TODO-QSP: dynamic text: <<$npcdesc>> wants more and suddenly places his hands on your shoulder. Then, he...
      scene.text(`${((s as any).npcdesc ?? 0)} wants more and suddenly places his hands on your shoulder. Then, he firmly pushes downwards trying to force you to squat before him.`);
      qspCall(s, 'willpower', 'bj', 'resist');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Make him cum [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Make him cum [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'arousal', 'hj', 3, 'no_orgasm_msg');
    // TODO-QSP: gs 'cum_call', 'hands', $npcID, temp['known_cumID']
    qspCall(s, 'stat', '');
    scene.text('With a wry smirk, you stand your ground instead, gripping his length harder and jerking faster. He may want a blowjob, but with your cock in his hand, you\'re the one in control. It\'s only a matter of time before he groans and releases a hot load that dribbles down your fingers.');
    qspCall(s, 'pav_disco_sex', 'handjob_end');
  } },
        ]);
      }
    } else {
      qspCall(s, 'arousal', 'hj', 3, 'no_orgasm_msg');
      qspCall(s, 'arousal', 'kiss', (-3), 'no_orgasm_msg');
      scene.img('images/shared/sex/handjob/hj.jpg');
      scene.text('You move your hand up and down his shaft, slowly picking up the pace while shoving your tongue down his throat.');
      scene.actions([
        { label: 'Make him cum', handler: (st: GameState) => {
    // TODO-QSP: gs 'cum_call', 'hands', $npcID, temp['known_cumID']
    scene.text('You soon feel his breaths getting shorter, and you feel his body start to stiffen up. Pointing his cock away from you, you pull back from the kiss and keep working his shaft off until you see him cum, his load splattering on the ground. You keep jerking him until you\'ve released everything he has, the remains dribbling down your fingers still wrapped around his cock.');
    qspCall(s, 'pav_disco_sex', 'handjob_end');
  } },
      ]);
    }
    scene.actions([
      { label: 'Squat down and blow him', handler: (st: GameState) => {
    // TODO-QSP: gt 'pav_disco_sex', 'blowjob', 'unpaid'
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterHandjobEnd(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/community/dk_night.jpg');
  // TODO-QSP: dynamic text: Releasing <<$npcdesc>>'s cock, you pull away from him.
  scene.text(`Releasing ${((s as any).npcdesc ?? 0)}'s cock, you pull away from him.`);
  scene.text('"That was fun," you grin, eyeing the cum webbing your fingers.');
  scene.text('"Fuck..." he breathes, still coming down from your handjob.');
  // TODO-QSP: end !}
  scene.actions([
    { label: 'Leave him and go back to the disco', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/pavlovsk/community/dk_night.jpg');
    scene.text('You release him and quickly begin walking away, ');
    scene.text('"See you later!" you grin while waggling your cum covered fingers at him, leaving him with his cock hanging out and covered in his own cum.');
    if (((s as any).trait_vars ?? 0)?.['cumeater'] === 1) {
      scene.actions([
        { label: 'Lick your hand clean on the way', handler: (st: GameState) => {
    // TODO-QSP: gs 'cum_call', 'mouth_swallow', $npcID, temp['known_cumID']
    (s as any).cumspclnt = 9;
    qspCall(s, 'cum_cleanup', '');
    scene.img('images/locations/pavlovsk/community/dk_night.jpg');
    scene.text('On your way back inside, you run your tongue along your hand, licking up the cum that webs across your fingers. You swallow every last drop just before getting to the door and head back inside.');
    scene.actions([
      { label: 'Continue', goto: ['pav_disco', ''] },
    ]);
  } },
      ]);
    }
    if (((s as any).mc_inventory ?? 0)?.['makeup_wipes'] > 0) {
      scene.actions([
        { label: 'Wipe your hand off and head in', handler: (st: GameState) => {
    ((s as any).mc_inventory ?? {})['makeup_wipes'] = (((s as any).mc_inventory ?? {})['makeup_wipes'] ?? 0) - (1);
    (s as any).cumspclnt = 9;
    qspCall(s, 'cum_cleanup', '');
    scene.img('images/locations/pavlovsk/community/dk_night.jpg');
    scene.text('On your way back inside, you pull some wipes from your bag and clean your hands, tossing the cum covered wipe before you step through the doors.');
    scene.actions([
      { label: 'Continue', goto: ['pav_disco', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Head back inside', goto: ['pav_disco', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterBlowjob(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'paid') {
    qspCall(s, 'arousal', 'bj', Math.floor(Math.random() * 5) + 3, 'prostitution');
    qspCall(s, 'pav_disco_sex', 'disco_sex_fame', 'prostitute');
  } else {
    qspCall(s, 'arousal', 'bj', Math.floor(Math.random() * 5) + 3);
  }
  if (((s as any).npc_indiscreet ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
    qspCall(s, 'fame', 'pav', 'sex', 'small');
  } else {
    qspCall(s, 'fame', 'pav', 'sex', 'medium');
  }
  ((s as any).pav_disco_bj ?? {})[String((s as any).npcID ?? 0)] = ((s as any).totminut ?? 0);
  ((s as any).bmBJ ?? {})[String((s as any).Tboynum ?? 0)] = (((s as any).bmBJ ?? {})[String((s as any).Tboynum ?? 0)] ?? 0) + (1);
  ((s as any).gdk ?? {})['bj'] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/public/outdoor/bj1.mp4');
  // TODO-QSP: dynamic text: Knees to the ground, you take <<$npcdesc>>'s <<$npc_dick_noun[$npcID]>> in your ...
  scene.text(`Knees to the ground, you take ${((s as any).npcdesc ?? 0)}'s ${((s as any).npc_dick_noun ?? 0)?.[String((s as any).npcID ?? 0)]} in your hand and guide it into your mouth to start sucking. He groans under your touch, and you see him tilting his head back in pleasure above you.`);
  if ((Math.floor(Math.random() * 2) + 0) === 0  &&  ((s as any).gdk ?? 0)?.['fuck'] !== 2) {
    scene.actions([{ label: 'Continue', goto: ['pav_disco_sex', 'fuck_pre1'] }]);
  } else {
    if ((Math.floor(Math.random() * 10) + 1) >= ((s as any).npc_sex_stamina ?? 0)?.[String((s as any).npcID ?? 0)]  ||  ((s as any).npc_two_pump ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] > 1) {
        // TODO-QSP: dynamic text: After several minutes, you feel <<$npcdesc>> begin to stiffen up.
        scene.text(`After several minutes, you feel ${((s as any).npcdesc ?? 0)} begin to stiffen up.`);
        scene.text('"I\'m-! Gonna cum-!" he grunts.');
        scene.actions([
          { label: 'Keep sucking', goto: ['pav_disco_sex', 'disco_cum_mouth'] },
          { label: 'Let him cum on your face', goto: ['pav_disco_sex', 'disco_cum_facial'] },
        ]);
      } else {
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    ((s as any).gdk ?? {})['cum'] = 'mouth';
    scene.img('images/shared/sex/cum/mouth/cum1,3.mp4');
    // TODO-QSP: dynamic text: You continue working his cock for several minutes until <<$npcdesc>> grunts, and...
    scene.text(`You continue working his cock for several minutes until ${((s as any).npcdesc ?? 0)} grunts, and a thick salty liquid pours into your mouth without warning.`);
    scene.actions([
      { label: 'Cough', handler: (st: GameState) => {
    // TODO-QSP: gs 'cum_call', 'mouth', $npcID, temp['known_cumID']
    scene.img('images/locations/pavlovsk/community/dk_night.jpg');
    scene.text('You retch, coughing up the cum that suddenly appeared in your mouth and looking back at him with tears in your eyes.');
  }, goto: ['pav_disco_sex', 'disco_mouth_react1'] },
      { label: 'Swallow', handler: (st: GameState) => {
    // TODO-QSP: gs 'cum_call', 'mouth_swallow', $npcID, temp['known_cumID']
    // TODO-QSP: dynamic text: Not knowing what else to do, you reflexively swallow, gulping down the cum spurt...
    scene.text(`Not knowing what else to do, you reflexively swallow, gulping down the cum spurting from ${((s as any).npcdesc ?? 0)}'s cock. Soon enough, nothing else comes out, and you pull back, looking up at him.`);
  }, goto: ['pav_disco_sex', 'disco_mouth_react2'] },
    ]);
  } },
        ]);
      }
    } else {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gs 'cum_call', 'face', $npcID, temp['known_cumID']
    ((s as any).gdk ?? {})['cum'] = 'facial';
    scene.img('images/shared/sex/public/outdoor/cum_facial1.mp4');
    // TODO-QSP: dynamic text: You continue working his cock for several minutes until <<$npcdesc>> pushes you ...
    scene.text(`You continue working his cock for several minutes until ${((s as any).npcdesc ?? 0)} pushes you off him and begins rapidly jerking himself above your face. You close your eyes, and cum splatters across your face moments later.`);
    scene.actions([
      { label: 'Smile', handler: (st: GameState) => {
    scene.img('images/shared/sex/public/outdoor/facial_after1.mp4');
    // TODO-QSP: dynamic text: "Well, that was fun." You smile at <<$npcdesc>> as he tucks his cock inside his ...
    scene.text(`"Well, that was fun." You smile at ${((s as any).npcdesc ?? 0)} as he tucks his cock inside his pants.`);
    scene.text('"Yeah, you\'ve got a great mouth."');
    scene.actions([
      { label: 'Continue', goto: ['pav_disco_sex', 'disco_sex_end'] },
    ]);
  } },
      { label: 'Clean him with your mouth', handler: (st: GameState) => {
    scene.img('images/shared/sex/public/outdoor/bj2.mp4');
    scene.text('"Here, let me get that for you," you say, leaning forward and running your mouth up and down his cock, making sure he\'s well and truly sucked dry before standing up again.');
    scene.actions([
      { label: 'Continue', goto: ['pav_disco_sex', 'disco_sex_end'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  }
  scene.build();
}

function enterInsert(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'compliance') {
    scene.img('images/shared/sex/public/outdoor/stand_insert1.mp4');
    if (((s as any).PCloSkirt ?? 0) > 0) {
      if (((s as any).pantyworntype ?? 0) === 'none') {
        // TODO-QSP: dynamic text: Too shocked by what he's doing and not knowing how to say no, you just let it ha...
        scene.text(`Too shocked by what he's doing and not knowing how to say no, you just let it happen as ${((s as any).npcdesc ?? 0)} flips up your skirt.`);
        if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'perverted') {
          scene.text('"No panties. I knew it," he snickers.');
        } else {
          scene.text('"I thought I saw something missing down there when we were dancing," he snickers.');
        }
      } else {
        // TODO-QSP: dynamic text: Too shocked by what he's doing and not knowing how to say no, you just let it ha...
        scene.text(`Too shocked by what he's doing and not knowing how to say no, you just let it happen as ${((s as any).npcdesc ?? 0)} flips up your skirt and pulls your panties down to your knees.`);
      }
    } else {
      if (((s as any).pantyworntype ?? 0) === 'none') {
        // TODO-QSP: dynamic text: Too shocked by what he's doing and not knowing how to say no, you just let it ha...
        scene.text(`Too shocked by what he's doing and not knowing how to say no, you just let it happen as ${((s as any).npcdesc ?? 0)} tugs down your pants and exposes your bare ass.`);
        if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'perverted') {
          scene.text('"No panties. I knew it," he snickers.');
        } else {
          scene.text('"Looks like somebody came ready," he snickers.');
        }
      } else {
        // TODO-QSP: dynamic text: Too shocked by what he's doing and not knowing how to say no, you just let it ha...
        scene.text(`Too shocked by what he's doing and not knowing how to say no, you just let it happen as ${((s as any).npcdesc ?? 0)} tugs down your pants and your panties with them, exposing your bare ass.`);
      }
    }
    scene.text('And then he thrusts his cock inside you.');
    scene.actions([
      { label: 'Get fucked', goto: ['pav_disco_sex', 'fuck1'] },
    ]);
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'condom_request'  &&  ((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] < 1  &&  (((s as any).npc_no_condoms ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_risktaker ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] > 0)) {
      qspCall(s, 'pav_disco_outside', 'outside_img');
      scene.text('"Hang on. Use a condom."');
      scene.text('"Fuck no. I don\'t use that rubber shit."');
      qspCall(s, 'willpower', 'misc', 'force');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Insist [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Insist [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    ((s as any).gdk ?? {})['condom'] = 1;
    if (((s as any).npc_no_condoms ?? 0)?.[String((s as any).npcID ?? 0)] < 1) {
      // TODO-QSP: gs 'npcStat', $npcID, 0, $npc_condom_type[$npcID]
      scene.img('images/shared/sex/public/outdoor/stand_insert1.mp4');
      scene.text('"Come on! Please!"');
      scene.text('He grumbles, but you hear him putting on a condom anyways, and you breathe a sigh of relief.');
      scene.actions([
        { label: 'Get fucked', goto: ['pav_disco_sex', 'fuck1'] },
      ]);
    } else {
      scene.img('images/locations/pavlovsk/community/dk_night.jpg');
      scene.text('"Come on! Please!"');
      scene.text('"I told you, I don\'t use them," he growls. "Why the fuck would I have any if I don\'t use them!"');
      if (((s as any).mc_inventory ?? 0)?.['normal_condoms'] + ((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0  &&  (!((s as any).preziktype ?? 0))) {
        scene.actions([
          { label: 'Get a condom from your purse', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/dk_night.jpg');
    scene.text('"Then use this," you say, reaching into your bag and pulling out a condom. He looks at it with disgust but puts it on anyways.');
    ((s as any).gdk ?? {})['condom'] = 1;
    qspCall(s, 'pav_disco_sex', 'pc_condom_func');
    scene.actions([
      { label: 'Get fucked', goto: ['pav_disco_sex', 'fuck1'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Maybe it\'ll be okay...', handler: (st: GameState) => {
    ((s as any).gdk ?? {})['condom'] = 2;
    scene.text('<i>Maybe it\'ll be okay...</i> you think to yourself.');
    scene.actions([
      { label: 'Just go with it', handler: (st: GameState) => {
    scene.img('images/shared/sex/public/outdoor/stand_insert1.mp4');
    scene.text('After a moment\'s hesitation, you let out a deep sigh.');
    scene.text('"Whatever. Just do it I guess."');
    scene.text('And then he thrusts his cock inside you.');
    scene.actions([
      { label: 'Get fucked', goto: ['pav_disco_sex', 'fuck1'] },
    ]);
  } },
      { label: 'Ask him not to cum inside', handler: (st: GameState) => {
    scene.img('images/shared/sex/public/outdoor/stand_insert1.mp4');
    scene.text('"Just don\'t cum inside me, okay?"');
    scene.text('And then he thrusts his cock inside you.');
    scene.actions([
      { label: 'Get fucked', goto: ['pav_disco_sex', 'fuck1'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
        ]);
      }
      if (((s as any).mc_inventory ?? 0)?.['normal_condoms'] + ((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0  &&  (!((s as any).preziktype ?? 0))) {
        scene.actions([
          { label: 'Get a condom from your purse', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/dk_night.jpg');
    // TODO-QSP: dynamic text: "Hang on," you pause, reaching into your bag and pulling out a condom. You tear ...
    scene.text(`"Hang on," you pause, reaching into your bag and pulling out a condom. You tear the package open and gently roll it onto ${((s as any).npcdesc ?? 0)}'s cock, giving him a few gentle tugs when you're finished. "Safety first."`);
    qspCall(s, 'pav_disco_sex', 'pc_condom_func');
    scene.actions([
      { label: 'Bend over', handler: (st: GameState) => {
    scene.img('images/shared/sex/public/outdoor/stand_insert1.mp4');
    scene.text('With his cock safely wrapped up, you present your pussy for him, and he wastes no time thrusting himself inside you.');
    scene.actions([
      { label: 'Get fucked', goto: ['pav_disco_sex', 'fuck1'] },
    ]);
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Maybe it\'ll be okay...', handler: (st: GameState) => {
    ((s as any).gdk ?? {})['condom'] = 2;
    scene.text('<i>Maybe it\'ll be okay...</i> you think to yourself.');
    scene.actions([
      { label: 'Just go with it', handler: (st: GameState) => {
    scene.img('images/shared/sex/public/outdoor/stand_insert1.mp4');
    scene.text('After a moment\'s hesitation, you let out a deep sigh.');
    scene.text('"Whatever. Just do it I guess."');
    scene.text('And then he thrusts his cock inside you.');
    scene.actions([
      { label: 'Get fucked', goto: ['pav_disco_sex', 'fuck1'] },
    ]);
  } },
      { label: 'Ask him not to cum inside', handler: (st: GameState) => {
    scene.img('images/shared/sex/public/outdoor/stand_insert1.mp4');
    scene.text('"Just don\'t cum inside me, okay?"');
    scene.text('And then he thrusts his cock inside you.');
    scene.actions([
      { label: 'Get fucked', goto: ['pav_disco_sex', 'fuck1'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.img('images/shared/sex/public/outdoor/stand_insert1.mp4');
      if (((s as any).locArgs?.[1] ?? 0) === 'condom_request') {
        if (((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
          // TODO-QSP: gs 'npcStat', $npcID, 0, $npc_condom_type[$npcID]
          scene.text('"Hang on. Use a-" You start to turn around to ask him to put on a condom but see he\'s already pulling one out. "Oh. Way ahead of me, I guess."');
        } else {
          if (((s as any).npc_no_condoms ?? 0)?.[String((s as any).npcID ?? 0)] < 1) {
            // TODO-QSP: gs 'npcStat', $npcID, 0, $npc_condom_type[$npcID]
            // TODO-QSP: dynamic text: "Hang on. Use a condom?" <<$npcdesc>> nods and pulls one out of his pocket, tear...
            scene.text(`"Hang on. Use a condom?" ${((s as any).npcdesc ?? 0)} nods and pulls one out of his pocket, tearing it open and rolling it onto his cock, leaving you to breathe a sigh of relief.`);
          }
        }
      }
      if (((s as any).PCloSkirt ?? 0) > 0) {
        if (((s as any).pantyworntype ?? 0) === 'none') {
          // TODO-QSP: dynamic text: You grin back at him and flip your skirt up, showing <<$npcdesc>> your bare ass.
          scene.text(`You grin back at him and flip your skirt up, showing ${((s as any).npcdesc ?? 0)} your bare ass.`);
          if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'perverted') {
            scene.text('"No panties. I knew it," he snickers.');
          } else {
            scene.text('"I thought I saw something missing down there when we were dancing," he snickers.');
          }
        } else {
          scene.text('You smile eagerly, quickly bending over and pulling your panties from under your skirt to your knees.');
        }
      } else {
        if (((s as any).pantyworntype ?? 0) === 'none') {
          scene.text('You grin back at him, yanking your pants down to your knees to expose your bare ass.');
          scene.text('"Looks like somebody came ready," he snickers.');
        } else {
          scene.text('You grin back at him, yanking your pants and panties down to your knees in one tug.');
        }
      }
      if (((s as any).locArgs?.[1] ?? 0) === 'not_inside') {
        ((s as any).temp ?? {})['not_inside_req'] = 1;
        scene.text('"Just don\'t cum inside me," you tell him over your shoulder.');
      }
      scene.text('And then he thrusts his cock inside you.');
      scene.actions([
        { label: 'Get fucked', goto: ['pav_disco_sex', 'fuck1'] },
      ]);
    }
  }
  scene.build();
}

function enterVirginFuck(s: GameState, scene: SceneBuilder): void {
  ((s as any).gdk ?? {})['virgin'] = 1;
  qspCall(s, 'arousal', 'vaginal', Math.floor(Math.random() * 5) + 3, 'no_orgasm_msg');
  scene.img('images/shared/sex/public/outdoor/stand_fuck1.mp4');
  // TODO-QSP: dynamic text: <<$npcdesc>> thrusts into your pussy, and you gasp in pain as his cock pierces y...
  scene.text(`${((s as any).npcdesc ?? 0)} thrusts into your pussy, and you gasp in pain as his cock pierces your hymen. You're not sure exactly what you expected sex to feel like, but you did hope it would feel better than this.`);
  scene.actions([
    { label: 'This hurts!', handler: (st: GameState) => {
    if (((s as any).pcs_horny ?? 0) > 50) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (50);
    }
    scene.text('You grunt your way through the discomfort of the next few minutes. You try to focus on the sensations, hoping they will start feeling good, but it never does. It just feels like being stabbed repeatedly. <i>In your pussy.</i> It\'s awful and painful, and you can\'t wait for it to stop. The only other sensation you can feel is the blood of your virginity running down your leg.');
  }, goto: ['pav_disco_sex', 'disco_cum'] },
    { label: 'Don\'t feel much', handler: (st: GameState) => {
    if (((s as any).pcs_horny ?? 0) > 50) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (40);
    }
    scene.text('Within a minute, the initial pain fades. After that, you hope it\'ll start to feel good, but... it doesn\'t actually feel like anything. Just a sort of "pressure" moving in and out of you. It doesn\'t feel good, it doesn\'t feel bad, it just sort of... feels. The only thing you can feel is the blood of your virginity running down your leg.');
  }, goto: ['pav_disco_sex', 'disco_cum'] },
    { label: 'Start to feel good', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: Within a minute, the initial pain fades. And after that, you start to feel <i>re...
    scene.text(`Within a minute, the initial pain fades. And after that, you start to feel <i>really good</i>. ${((s as any).npcdesc ?? 0)}'s cock just "fills" you in a way you've never experienced before. Soon, you're thrusting your hips back to meet his, chasing after this brand-new pleasure.`);
    scene.text('<i>Why did I wait this long to have sex?!</i> You think to yourself.');
  }, goto: ['pav_disco_sex', 'disco_cum'] },
  ]);
  scene.build();
}

function enterFuckPre1(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: After a few minutes, <<$npcdesc>> pushes your head away and pulls you to your fe...
  scene.text(`After a few minutes, ${((s as any).npcdesc ?? 0)} pushes your head away and pulls you to your feet, facing you towards the wall. "I want to fuck your pussy."`);
  qspCall(s, 'family_schedule', '');
  if (((s as any).locat ?? 0)?.['Fam_inGad'] === 1) {
    scene.actions([
      { label: 'Take him home', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/dk_night.jpg');
    // TODO-QSP: dynamic text: With a sultry smirk, you lean in to whisper in <<$npcdesc>>'s ear.
    scene.text(`With a sultry smirk, you lean in to whisper in ${((s as any).npcdesc ?? 0)}'s ear.`);
    scene.text('"<i>My parents aren\'t home tonight...</i>"');
    scene.text('The look in his eyes is all you need to know and the two of you rush back to the estate together.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_start', 'pc_home_start', 'hookup'
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Refuse', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/dk_night.jpg');
    scene.text('"Hey!" You quickly turn back around, pushing him back. "What do you think you\'re doing?"');
    scene.text('"I just want to fuck you," he says as if that\'s all you needed to know.');
    scene.text('"Well, <i>I</i> don\'t you want to!"');
    if (((s as any).pav_disco_bj ?? 0)?.[String((s as any).npcID ?? 0)] >= ((s as any).totminut ?? 0) - 20) {
      scene.text('"Why not? You were fine sucking my dick a second ago!"');
    } else {
      scene.text('"Why not?"');
    }
    scene.actions([
      { label: 'I don\'t want to have sex', handler: (st: GameState) => {
    ((s as any).gdk ?? {})['fuck'] = 2;
    scene.img('images/locations/pavlovsk/community/dk_night.jpg');
    scene.text('"I just don\'t want to!"');
    if (((s as any).pav_disco_bj ?? 0)?.[String((s as any).npcID ?? 0)] >= ((s as any).totminut ?? 0) - 20) {
      // TODO-QSP: dynamic text: "Ugh, fine." <<$npcdesc>> grabs you by the shoulder and pushes you back down to ...
      scene.text(`"Ugh, fine." ${((s as any).npcdesc ?? 0)} grabs you by the shoulder and pushes you back down to your knees. "At least finish me off then."`);
    } else {
      // TODO-QSP: dynamic text: "Ugh, fine." <<$npcdesc>> grabs you by the shoulder and pushes you down to your ...
      scene.text(`"Ugh, fine." ${((s as any).npcdesc ?? 0)} grabs you by the shoulder and pushes you down to your knees. "At least finish me off then."`);
    }
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/pavlovsk/community/dk_night.jpg');
    scene.text('"What?? You think I\'m going to just get down there after the way you\'re acting?"');
    scene.text('"But you said you didn\'t want to fuck!" he snarls.');
    // TODO-QSP: dynamic text: "Ugh, I don't want to deal with you." You quickly back away from <<$npcdesc>> an...
    scene.text(`"Ugh, I don't want to deal with you." You quickly back away from ${((s as any).npcdesc ?? 0)} and blueball him as you head back to the disco.`);
    scene.actions([
      { label: 'Go back to the disco', goto: ['pav_disco', ''] },
    ]);
  } },
      { label: 'Finish sucking him off', goto: ['pav_disco_sex', 'blowjob'] },
    ]);
  } },
      { label: 'This is too public', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/dk_night.jpg');
    scene.text('"This is too public!" you hiss. "You think I\'ll fuck you where anybody could see?"');
    if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.text('"You were just sucking my dick!" he almost shouts again. "Why is it too public to fuck, but it isn\'t to suck my dick?!"');
      scene.text('"It just is!" you huff back. "You know what? This whole thing was a mistake. You can sort that out yourself," you say, gesturing at his cock before you hurry away from him and back towards the disco.');
      scene.actions([
        { label: 'Go back to the disco', goto: ['pav_disco', ''] },
      ]);
    } else {
      // TODO-QSP: dynamic text: "Well..." <<$npcdesc>> scratches his head for a moment in confusion. "We don't h...
      scene.text(`"Well..." ${((s as any).npcdesc ?? 0)} scratches his head for a moment in confusion. "We don't have to do it in public. We could take this back to my place if you want..."`);
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    scene.text('"Nuh-uh. I\'m not up for that."');
    // TODO-QSP: dynamic text: "Oh. Well..." <<$npcdesc>> looks down at his still-hard cock. "Well, could you f...
    scene.text(`"Oh. Well..." ${((s as any).npcdesc ?? 0)} looks down at his still-hard cock. "Well, could you finish me off at least?"`);
    scene.text('"Sure, we can do that, at least."');
    scene.actions([
      { label: 'Kneel down', goto: ['pav_disco_sex', 'blowjob'] },
    ]);
  } },
        { label: 'Go with him', handler: (st: GameState) => {
    scene.text('"Well... a bed <i>does</i> sound nice," you smile. Taking that as acceptance, he pulls up his pants and grabs you by the arm, leading you back to a nearby apartment complex.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_start', 'npc_home_start', 'hookup'
  } },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } },
    { label: 'Bend over (sex)', goto: ['pav_disco_sex', 'insert'] },
    { label: 'Let it happen (sex)', handler: (st: GameState) => {
    // TODO-QSP: gt 'pav_disco_sex', 'insert', 'compliance'
  } },
    { label: 'Ask him to use a condom', handler: (st: GameState) => {
    // TODO-QSP: gt 'pav_disco_sex', 'insert', 'condom_request'
  } },
    { label: 'Not here (suggest his place)', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/dk_night.jpg');
    scene.text('"Wait!" you cry, looking around. "Not here. Maybe we could... go back to your place?"');
    scene.text('"That works for me," he grins. Then, pulling his pants back up, he rushes you to a nearby apartment complex, and you head inside.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_start', 'npc_home_start', 'hookup'
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterFuckPre2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
    scene.actions([
      { label: 'Let him fuck you', handler: (st: GameState) => {
    scene.img('images/shared/sex/public/outdoor/stand_insert1.mp4');
    scene.text('"I\'ve got a better idea," you grin.');
    scene.actions([
      { label: 'Bend over', handler: (st: GameState) => {
    // TODO-QSP: xgt 'pav_disco_sex', 'insert'
  } },
    ]);
  } },
      { label: 'Let him fuck you (with a condom)', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/dk_night.jpg');
    scene.text('"I\'ve got a better idea... Got a condom?" you ask suggestively.');
    if (((s as any).npc_no_condoms ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      // TODO-QSP: dynamic text: "No," <<$npcdesc>> grins back.
      scene.text(`"No," ${((s as any).npcdesc ?? 0)} grins back.`);
      if (((s as any).mc_inventory ?? 0)?.['normal_condoms'] > 0  ||  (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0  &&  ((s as any).preziktype ?? 0) === 0)) {
        scene.actions([
          { label: 'Use one of yours', handler: (st: GameState) => {
    qspCall(s, 'pav_disco_sex', 'pc_condom_func');
    // TODO-QSP: dynamic text: "Good thing I do," you smile, reaching into your bag and pulling out a condom. Y...
    scene.text(`"Good thing I do," you smile, reaching into your bag and pulling out a condom. You tear the package open and gently roll it onto ${((s as any).npcdesc ?? 0)}'s cock, giving him a few gentle tugs when you're finished. "Safety first."`);
    scene.text('He seems pretty disappointed.');
    scene.actions([
      { label: 'Fuck him', goto: ['pav_disco_sex', 'fuck1'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Oh well', handler: (st: GameState) => {
    scene.img('images/shared/sex/public/outdoor/stand_insert1.mp4');
    scene.text('"Well that\'s a shame," you say. And then you shrug. "Oh well."');
    scene.actions([
      { label: 'Bend over', handler: (st: GameState) => {
    // TODO-QSP: xgt 'pav_disco_sex', 'insert'
  } },
    ]);
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: "Oh hell yes," <<$npcdesc>> grins back and pulls a wrapper out of his pocket.
      scene.text(`"Oh hell yes," ${((s as any).npcdesc ?? 0)} grins back and pulls a wrapper out of his pocket.`);
      // TODO-QSP: gs 'npcStat', $npcID, 0, $npc_condom_type[$npcID]
      ((s as any).gdk ?? {})['condom'] = 1;
      scene.actions([
        { label: 'Bend over', handler: (st: GameState) => {
    scene.img('images/shared/sex/public/outdoor/stand_insert1.mp4');
    scene.text('With his cock safely wrapped up, you present your pussy for him, and he wastes no time thrusting himself inside you.');
    scene.actions([
      { label: 'Fuck him', goto: ['pav_disco_sex', 'fuck1'] },
    ]);
  } },
      ]);
    }
  } },
    ]);
  }
  scene.build();
}

function enterFuck1(s: GameState, scene: SceneBuilder): void {
  ((s as any).gdk ?? {})['fuck'] = 1;
  ((s as any).gdk ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
  if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
    scene.actions([{ label: 'Continue', goto: ['pav_disco_sex', 'virgin_fuck'] }]);
  }
  qspCall(s, 'arousal', 'vaginal', Math.floor(Math.random() * 5) + 3, 'no_orgasm_msg');
  scene.img('images/shared/sex/public/outdoor/stand_fuck1.mp4');
  if (((s as any).mesec ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$npcdesc>> slips inside you easily, your pussy already slick from your period,...
    scene.text(`${((s as any).npcdesc ?? 0)} slips inside you easily, your pussy already slick from your period, and quickly builds up to a steady pace, pummeling your pussy. The rhythmic fucking pounds your insides just the right way, and you soon find yourself moaning in pleasure.`);
  } else {
    // TODO-QSP: dynamic text: <<$npcdesc>> quickly builds up to a steady pace, pummeling your pussy from behin...
    scene.text(`${((s as any).npcdesc ?? 0)} quickly builds up to a steady pace, pummeling your pussy from behind, pumping his cock in and out of you. The rhythmic fucking pounds your insides just the right way, and you soon find yourself moaning in pleasure.`);
  }
  scene.actions([{ label: 'Continue', goto: ['pav_disco_sex', 'disco_cum'] }]);
  scene.build();
}

function enterDiscoCum(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]) {
    ((s as any).temp ?? {})['known_cumID'] = 1;
  } else {
    ((s as any).temp ?? {})['known_cumID'] = 0;
  }
  if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'mouth') {
    ((s as any).gdk ?? {})['cum_num'] = 2;
  } else {
    if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'facial') {
      ((s as any).gdk ?? {})['cum_num'] = 3;
    } else {
      if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie') {
        if (((s as any).temp ?? 0)?.['not_inside_req'] === 0) {
          ((s as any).gdk ?? {})['cum_num'] = 4;
        } else {
          if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] + ((s as any).npc_misogynist ?? 0)?.[String((s as any).npcID ?? 0)] + ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
            ((s as any).gdk ?? {})['cum_num'] = 4;
          } else {
            ((s as any).gdk ?? {})['cum_num'] = Math.floor(Math.random() * 3) + 1;
          }
        }
      } else {
        ((s as any).gdk ?? {})['cum_num'] = Math.floor(Math.random() * 4) + 1;
      }
    }
  }
  if (((s as any).gdk ?? 0)?.['cum_num'] === 1) {
    scene.text('"I\'m gonna cum!"');
    if (((s as any).npcCondom ?? 0) !== '') {
      scene.actions([
        { label: 'Speed up', goto: ['pav_disco_sex', 'disco_condom2'] },
      ]);
    } else {
      scene.actions([
        { label: 'Speed up', goto: ['pav_disco_sex', 'disco_creampie'] },
      ]);
    }
    scene.actions([
      { label: 'Squat down', goto: ['pav_disco_sex', 'disco_cum_facial'] },
      { label: 'Finish him with your mouth', goto: ['pav_disco_sex', 'disco_cum_mouth'] },
    ]);
  } else {
    if (((s as any).gdk ?? 0)?.['cum_num'] === 2) {
      // TODO-QSP: dynamic text: "Hey," <<$npcdesc>> grunts. "Let me cum in your mouth."
      scene.text(`"Hey," ${((s as any).npcdesc ?? 0)} grunts. "Let me cum in your mouth."`);
      scene.actions([
        { label: 'Let him cum on your face instead', goto: ['pav_disco_sex', 'disco_cum_facial'] },
        { label: 'Suck him off', goto: ['pav_disco_sex', 'disco_cum_mouth'] },
      ]);
    } else {
      if (((s as any).gdk ?? 0)?.['cum_num'] === 3) {
        // TODO-QSP: dynamic text: "Hey," <<$npcdesc>> grunts. "Let me cum on your face."
        scene.text(`"Hey," ${((s as any).npcdesc ?? 0)} grunts. "Let me cum on your face."`);
        scene.actions([
          { label: 'Let him cum on your face', goto: ['pav_disco_sex', 'disco_cum_facial'] },
          { label: 'Finish him in your mouth instead', goto: ['pav_disco_sex', 'disco_cum_mouth'] },
        ]);
      } else {
        if (((s as any).gdk ?? 0)?.['cum_num'] === 4) {
          if (((s as any).npcCondom ?? 0) !== '') {
            ((s as any).gdk ?? {})['cum'] = 'condom';
            scene.actions([
              { label: 'Continue', goto: ['pav_disco_sex', 'disco_condom1'] },
            ]);
          } else {
            if (((s as any).temp ?? 0)?.['not_inside_req'] > 0) {
              ((s as any).gdk ?? {})['cum'] = 'creampie';
              if (((s as any).gdk ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
                // TODO-QSP: dynamic text: You feel pressure building with every thrust of <<$npcdesc>>'s cock inside you, ...
                scene.text(`You feel pressure building with every thrust of ${((s as any).npcdesc ?? 0)}'s cock inside you, and soon, it explodes in a climactic orgasm. Every muscle in your body clenches, your pussy clamping down on the cock inside it so hard, it almost hurts. Then, as your breathing winds down, you feel ${((s as any).npcdesc ?? 0)} slip out from inside you.`);
                scene.text('You start to smile in pleasure when you suddenly feel something oozing from your pussy, and your eyes go wide.');
              } else {
                scene.text('Your eyes go wide when you feel something spurt inside of your pussy.');
              }
              scene.actions([
                { label: 'WHAT THE FUCK!', goto: ['pav_disco_sex', 'creampie_surprise2'] },
              ]);
            } else {
              // TODO-QSP: gs 'cum_call', '', $npcID, temp['known_cumID']
              ((s as any).gdk ?? {})['cum'] = 'creampie';
              if (((s as any).pcs_horny ?? 0) >= 90) {
                // TODO-QSP: dynamic text: You feel pressure building with every thrust of <<$npcdesc>>'s cock inside you, ...
                scene.text(`You feel pressure building with every thrust of ${((s as any).npcdesc ?? 0)}'s cock inside you, and soon, it explodes in a climactic orgasm. Every muscle in your body clenches, your pussy clamping down on the cock inside it so hard, it almost hurts. Finally, your breathing slowly winds down, and you feel ${((s as any).npcdesc ?? 0)} slip his cock out from inside you.`);
                scene.text('As he does, you feel something oozing out of your pussy after it.');
                scene.actions([{ label: 'Continue', goto: ['pav_disco_sex', 'creampie_surprise1'] }]);
              } else {
                scene.text('Your eyes go wide when you feel something spurt inside of your pussy.');
                scene.actions([{ label: 'Continue', goto: ['pav_disco_sex', 'creampie_surprise1'] }]);
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterDiscoCumFacial(s: GameState, scene: SceneBuilder): void {
  ((s as any).gdk ?? {})['cum'] = 'facial';
  // TODO-QSP: gs 'cum_call', 'face', $npcID, temp['known_cumID']
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/public/outdoor/cum_facial1.mp4');
  if (((s as any).gdk ?? 0)?.['cum_num'] === 1) {
    if (((s as any).gdk ?? 0)?.['condom'] === 1) {
      // TODO-QSP: dynamic text: You quickly jump off his cock and squat down in front of him. <<$npcdesc>> takes...
      scene.text(`You quickly jump off his cock and squat down in front of him. ${((s as any).npcdesc ?? 0)} takes the hint and rips off the condom, jerking himself off over your face. Within seconds, cum erupts from the tip of his cock, spattering across your forehead and running down your cheeks. Seconds after that, it seems ${((s as any).npcdesc ?? 0)} is out of juice and pulls back to admire his handiwork.`);
    } else {
      // TODO-QSP: dynamic text: You quickly jump off his cock and squat down in front of him. <<$npcdesc>> takes...
      scene.text(`You quickly jump off his cock and squat down in front of him. ${((s as any).npcdesc ?? 0)} takes the hint and begins jerking himself off over your face. Within seconds, cum erupts from the tip of his cock, spattering across your forehead and running down your cheeks. Seconds after that, it seems ${((s as any).npcdesc ?? 0)} is out of juice and pulls back to admire his handiwork.`);
    }
  } else {
    if (((s as any).gdk ?? 0)?.['cum_num'] === 3) {
      // TODO-QSP: dynamic text: "Okay," you smile and slip yourself off of <<$npcdesc>>'s cock.
      scene.text(`"Okay," you smile and slip yourself off of ${((s as any).npcdesc ?? 0)}'s cock.`);
    } else {
      scene.text('"No thanks," smirk. "But you can still cum on my face."');
    }
    if (((s as any).gdk ?? 0)?.['condom'] === 1) {
      scene.text('As you squat down before him, he tears off the condom and starts rapidly jerking himself off. Seconds later, cum blasts from his tip, spattering across your forehead and running down your cheeks. He loses power after the first shot, but continues jerking himself to let the remainder dribble down onto your face.');
    } else {
      scene.text('You squat down before him and he starts rapidly jerking himself off. Seconds later, cum blasts from his tip, spattering across your forehead and running down your cheeks. He loses power after the first shot, but continues jerking himself to let the remainder dribble down onto your face.');
    }
  }
  scene.actions([
    { label: 'Smile', handler: (st: GameState) => {
    scene.img('images/shared/sex/public/outdoor/facial_after1.mp4');
    // TODO-QSP: dynamic text: "Well, that was fun." You smile at <<$npcdesc>> as he tucks his cock inside his ...
    scene.text(`"Well, that was fun." You smile at ${((s as any).npcdesc ?? 0)} as he tucks his cock inside his pants.`);
    if (((s as any).gdk ?? 0)?.['fuck'] === 1) {
      scene.text('"Yeah, you\'ve got a great pussy."');
    } else {
      scene.text('"Yeah, you\'ve got a great mouth."');
    }
    scene.actions([
      { label: 'Continue', goto: ['pav_disco_sex', 'disco_sex_end'] },
    ]);
  } },
    { label: 'Clean him with your mouth', handler: (st: GameState) => {
    scene.img('images/shared/sex/public/outdoor/bj2.mp4');
    scene.text('"Here, let me get that for you," you say, leaning forward and running your mouth up and down his cock, making sure he\'s well and truly sucked dry before standing up again.');
    scene.actions([
      { label: 'Continue', goto: ['pav_disco_sex', 'disco_sex_end'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterDiscoMouthReact1(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'A little warning?', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/dk_night.jpg');
    scene.text('"Jesus!" you sputter, still wheezing. "Give a girl some warning!"');
    scene.text('"Sorry. Maybe next time," he grins. Clearly, he isn\'t too bothered by what happened.');
    scene.actions([
      { label: 'Continue', goto: ['pav_disco_sex', 'disco_sex_end'] },
    ]);
  } },
    { label: 'I almost choked!', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/dk_night.jpg');
    scene.text('"Ack!" you sputter, still wheezing. "I almost choked!"');
    scene.text('"This happens to you a lot?" he asks, eyebrow raised.');
    scene.text('"No..." you say, blushing and turning your head away.');
    scene.actions([
      { label: 'Continue', goto: ['pav_disco_sex', 'disco_sex_end'] },
    ]);
  } },
    { label: 'That tastes awful!', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/dk_night.jpg');
    scene.text('"Ugh!" you sputter, still wheezing. "That tastes <i>awful</i>!"');
    scene.text('"Wait, is this your first time swallowing?" he asks, eyebrow raised.');
    if (((s as any).stat ?? 0)?.['swallow'] === 0) {
      scene.actions([
        { label: 'Yes...', handler: (st: GameState) => {
    scene.text('"Yes..." you admit, blushing and turning your head away. "Got a problem?');
    // TODO-QSP: dynamic text: "No, but it explains a lot," <<$npcdesc>> grins. Your blush deepens.
    scene.text(`"No, but it explains a lot," ${((s as any).npcdesc ?? 0)} grins. Your blush deepens.`);
    scene.actions([
      { label: 'Continue', goto: ['pav_disco_sex', 'disco_sex_end'] },
    ]);
  } },
        { label: 'No... (lie)', handler: (st: GameState) => {
    scene.text('"No..." you say, blushing and turning your head away. "You just... don\'t taste how I expected."');
    // TODO-QSP: dynamic text: "Uh-huh..." <<$npcdesc>> eyes you knowingly, and your blush deepens, but you ref...
    scene.text(`"Uh-huh..." ${((s as any).npcdesc ?? 0)} eyes you knowingly, and your blush deepens, but you refuse to look him in the eye.`);
    scene.actions([
      { label: 'Continue', goto: ['pav_disco_sex', 'disco_sex_end'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Yes... (lie)', handler: (st: GameState) => {
    scene.text('"Yes..." you lie, blushing and turning your head away, hoping to claim inexperience to save him some hurt feelings. "Got a problem?');
    // TODO-QSP: dynamic text: "No, but it explains a lot," <<$npcdesc>> grins. Your blush deepens. Maybe you s...
    scene.text(`"No, but it explains a lot," ${((s as any).npcdesc ?? 0)} grins. Your blush deepens. Maybe you should have just told him his cum is disgusting after all...`);
    scene.actions([
      { label: 'Continue', goto: ['pav_disco_sex', 'disco_sex_end'] },
    ]);
  } },
        { label: 'No! You just taste awful!', handler: (st: GameState) => {
    scene.text('"No!" you spit. "You just taste awful! You need to eat more fruit or something!"');
    // TODO-QSP: dynamic text: <<$npcdesc>> recoils, looking somewhat offended, but doesn't say anything more.
    scene.text(`${((s as any).npcdesc ?? 0)} recoils, looking somewhat offended, but doesn't say anything more.`);
    scene.actions([
      { label: 'Continue', goto: ['pav_disco_sex', 'disco_sex_end'] },
    ]);
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterDiscoMouthReact2(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'A little warning?', handler: (st: GameState) => {
    scene.img('images/shared/sex/public/outdoor/facial_after1.mp4');
    scene.text('"A little warning next time?" you smile at him. "It\'s hard to swallow on command."');
    scene.text('"Well, you seemed to have managed just fine," he grins.');
    scene.actions([
      { label: 'Continue', goto: ['pav_disco_sex', 'disco_sex_end'] },
    ]);
  } },
    { label: 'Lick your lips', handler: (st: GameState) => {
    scene.img('images/shared/sex/public/outdoor/facial_after1.mp4');
    scene.text('"You taste good," you smile, licking your lips and standing back up.');
    scene.actions([
      { label: 'Continue', goto: ['pav_disco_sex', 'disco_sex_end'] },
    ]);
  } },
    { label: 'Clean him off', handler: (st: GameState) => {
    scene.img('images/shared/sex/public/outdoor/bj2.mp4');
    scene.text('"Here, let me get that for you," you say, leaning forward and running your mouth up and down his cock, making sure he\'s well and truly sucked dry before standing up again.');
    scene.actions([
      { label: 'Continue', goto: ['pav_disco_sex', 'disco_sex_end'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterDiscoCumMouth(s: GameState, scene: SceneBuilder): void {
  ((s as any).gdk ?? {})['cum'] = 'mouth';
  scene.img('images/shared/sex/cum/mouth/cum1,3.mp4');
  if (((s as any).gdk ?? 0)?.['cum_num'] !== 3) {
    if (((s as any).gdk ?? 0)?.['condom'] === 1) {
      scene.text('You quickly jump off his cock and squat in front of him, pulling off the condom and replacing your pussy with your mouth. You bob your head up and down precisely twice before thick salty cum spurts out onto your tongue. Then, using your hand, you draw out every last drop before pulling back.');
    } else {
      scene.text('You quickly jump off his cock, squat in front of him, and replace your pussy with your mouth. You bob your head up and down precisely twice before thick salty cum spurts out onto your tongue. Then, using your hand, you draw out every last drop before pulling back.');
    }
  } else {
    scene.text('"Ew, no." You wrinkle your nose in disgust. "Way too much cleanup. Let\'s do <i>this</i> instead..."');
    if (((s as any).gdk ?? 0)?.['condom'] === 1) {
      scene.text('You quickly jump off his cock and squat in front of him, pulling off the condom and replacing your pussy with your mouth. You bob your head up and down precisely twice before thick salty cum spurts out onto your tongue. Then, using your hand, you draw out every last drop before pulling back.');
    } else {
      scene.text('You quickly jump off his cock, squat in front of him, and replace your pussy with your mouth. You bob your head up and down precisely twice before thick salty cum spurts out onto your tongue. Then, using your hand, you draw out every last drop before pulling back.');
    }
  }
  scene.actions([
    { label: 'Spit', handler: (st: GameState) => {
    // TODO-QSP: gs 'cum_call', 'mouth', $npcID, temp['known_cumID']
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/dk_night.jpg');
    // TODO-QSP: dynamic text: Opening your mouth, you stick your tongue out and let <<$npcdesc>>'s cum dribble...
    scene.text(`Opening your mouth, you stick your tongue out and let ${((s as any).npcdesc ?? 0)}'s cum dribble out onto the pavement.`);
    scene.actions([
      { label: 'Continue', goto: ['pav_disco_sex', 'disco_sex_end'] },
    ]);
  } },
    { label: 'Swallow', handler: (st: GameState) => {
    // TODO-QSP: gs 'cum_call', 'mouth_swallow', $npcID, temp['known_cumID']
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/dk_night.jpg');
    scene.text('Gathering his cum in your mouth, you push it to the back of your throat and swallow the entire load in one big gulp.');
    scene.actions([
      { label: 'Continue', goto: ['pav_disco_sex', 'disco_sex_end'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterDiscoCondom1(s: GameState, scene: SceneBuilder): void {
  ((s as any).gdk ?? {})['cum'] = 'condom';
  // TODO-QSP: gs 'cum_call', '', $npcID, temp['known_cumID'], 3
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/public/outdoor/stand_fuck1.mp4');
  if (((s as any).npcCondom ?? 0) !== 'broken_condom') {
    if (((s as any).gdk ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
      // TODO-QSP: dynamic text: You gasp in surprise when <<$npcdesc>> pulls you tight against him, shoving his ...
      scene.text(`You gasp in surprise when ${((s as any).npcdesc ?? 0)} pulls you tight against him, shoving his entire length inside you to the base. Seconds later, you hear him groan and feel him pulse inside the condom. The sensation sends you over the edge, and your body goes taut, leaving you on tiptoes while the orgasm rolls through your body.`);
      // TODO-QSP: dynamic text: When the quivering finally stops, you lean forward. Letting <<$npcdesc>>'s cock ...
      scene.text(`When the quivering finally stops, you lean forward. Letting ${((s as any).npcdesc ?? 0)}'s cock slip from inside you and looking over your shoulder, you can see white liquid filling the rubber sleeve.`);
      scene.text('<i>Guess we came together</i> you smile to yourself.');
    } else {
      // TODO-QSP: dynamic text: You gasp in surprise when <<$npcdesc>> pulls you tight against him, shoving his ...
      scene.text(`You gasp in surprise when ${((s as any).npcdesc ?? 0)} pulls you tight against him, shoving his entire length inside you to the base. Seconds later, you hear him groan and feel him cum inside the condom.`);
      // TODO-QSP: dynamic text: Clenching your pussy, you milk him for all he's worth until you feel him stop pu...
      scene.text(`Clenching your pussy, you milk him for all he's worth until you feel him stop pulsing inside you. Then, leaning forward, you let ${((s as any).npcdesc ?? 0)}'s cock slip from your pussy.`);
    }
    scene.actions([
      { label: 'Continue', goto: ['pav_disco_sex', 'disco_sex_end'] },
    ]);
  } else {
    if (((s as any).gdk ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
      // TODO-QSP: dynamic text: You gasp in surprise when <<$npcdesc>> pulls you tight against him, shoving his ...
      scene.text(`You gasp in surprise when ${((s as any).npcdesc ?? 0)} pulls you tight against him, shoving his entire length inside you to the base. Seconds later, you hear him groan and feel him pulse inside the condom. The sensation sends you over the edge, and your body goes taut, leaving you on tiptoes while the orgasm rolls through your body.`);
      // TODO-QSP: dynamic text: When the quivering finally stops, you lean forward to let <<$npcdesc>>'s cock sl...
      scene.text(`When the quivering finally stops, you lean forward to let ${((s as any).npcdesc ?? 0)}'s cock slip from inside you and suddenly freeze.`);
    } else {
      // TODO-QSP: dynamic text: You gasp in surprise when <<$npcdesc>> pulls you tight against him, shoving his ...
      scene.text(`You gasp in surprise when ${((s as any).npcdesc ?? 0)} pulls you tight against him, shoving his entire length inside you to the base. Seconds later, you hear him groan and feel him pulse inside the condom.`);
      // TODO-QSP: dynamic text: Clenching your pussy, you milk him for all he's worth until you feel him stop pu...
      scene.text(`Clenching your pussy, you milk him for all he's worth until you feel him stop pulsing inside you. Then, leaning forward, you let ${((s as any).npcdesc ?? 0)}'s cock slip from your pussy and then suddenly freeze.`);
    }
    scene.text('<i>Something just <b>dribbled</b> down your thigh.</i>');
    scene.actions([
      { label: 'Continue', goto: ['pav_disco_sex', 'disco_condom_break'] },
    ]);
  }
  scene.build();
}

function enterDiscoCondom2(s: GameState, scene: SceneBuilder): void {
  ((s as any).gdk ?? {})['cum'] = 'condom';
  // TODO-QSP: gs 'cum_call', '', $npcID, temp['known_cumID'], 3
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/public/outdoor/stand_fuck1.mp4');
  if (((s as any).gdk ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
    // TODO-QSP: dynamic text: You don't say a word, instead throwing your hips back onto <<$npcdesc>>'s cock a...
    scene.text(`You don't say a word, instead throwing your hips back onto ${((s as any).npcdesc ?? 0)}'s cock as hard as you can. Seconds later, you hear him groan and feel him cum inside the condom. The sensation sends you over the edge, and your body goes taut, leaving you on tiptoes while the orgasm rolls through your body.`);
    // TODO-QSP: 'When the quivering finally stops, you lean forward, letting <<$npcdesc>>''s cock slip from your pus...
  } else {
    // TODO-QSP: dynamic text: You don't say a word, instead throwing your hips back onto <<$npcdesc>>'s cock a...
    scene.text(`You don't say a word, instead throwing your hips back onto ${((s as any).npcdesc ?? 0)}'s cock as hard as you can. Seconds later, you hear him groan and feel him cumming inside the condom.`);
    // TODO-QSP: 'Clenching your pussy, you milk him for all he''s worth until you feel him stop pulsing inside you. ...
  }
  if (((s as any).npcCondom ?? 0) !== 'broken_condom') {
    scene.actions([
      { label: 'Continue', goto: ['pav_disco_sex', 'disco_sex_end'] },
    ]);
  } else {
    scene.text('<i>Something just <b>dribbled</b> down your thigh.</i>');
    scene.actions([
      { label: 'Continue', goto: ['pav_disco_sex', 'disco_condom_break'] },
    ]);
  }
  scene.build();
}

function enterDiscoCondomBreak(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/public/outdoor/creampie1.jpg');
  // TODO-QSP: dynamic text: With mounting horror, you turn over your shoulder to see the tattered remains of...
  scene.text(`With mounting horror, you turn over your shoulder to see the tattered remains of the condom on ${((s as any).npcdesc ?? 0)}'s cock and the realization comes to a head.`);
  scene.text('The condom broke.');
  // TODO-QSP: dynamic text: Seeing the look in your eyes, <<$npcdesc>> decides to make a quick escape and ru...
  scene.text(`Seeing the look in your eyes, ${((s as any).npcdesc ?? 0)} decides to make a quick escape and runs off before you can even fix your clothing, leaving you with his load dripping from your twat in the darkness.`);
  scene.actions([
    { label: 'Continue', goto: ['pav_commcenter', ''] },
  ]);
  scene.build();
}

function enterDiscoCreampie(s: GameState, scene: SceneBuilder): void {
  if (((s as any).gdk ?? 0)?.['condom'] === 1) {
    scene.actions([{ label: 'Continue', goto: ['pav_disco_sex', 'disco_condom2'] }]);
  }
  // TODO-QSP: gs 'cum_call', '', $npcID, temp['known_cumID']
  ((s as any).gdk ?? {})['cum'] = 'creampie';
  scene.img('images/shared/sex/public/outdoor/creampie1.jpg');
  if (((s as any).pcs_horny ?? 0) >= 90) {
    // TODO-QSP: dynamic text: You don't say a word, instead throwing your hips back onto <<$npcdesc>>'s cock a...
    scene.text(`You don't say a word, instead throwing your hips back onto ${((s as any).npcdesc ?? 0)}'s cock as hard as you can. Seconds later, you hear him groan and feel his load spill out inside you. The sensation sends you over the edge, and your body goes taut, leaving you on tiptoes while the orgasm rolls through your body.`);
    // TODO-QSP: dynamic text: When the quivering finally stops, you lean forward, letting <<$npcdesc>>'s cock ...
    scene.text(`When the quivering finally stops, you lean forward, letting ${((s as any).npcdesc ?? 0)}'s cock slip from your pussy, his cum trickling out after it.`);
  } else {
    // TODO-QSP: dynamic text: You don't say a word, instead throwing your hips back onto <<$npcdesc>>'s cock a...
    scene.text(`You don't say a word, instead throwing your hips back onto ${((s as any).npcdesc ?? 0)}'s cock as hard as you can. Seconds later, you hear him groan and feel his load spill out inside you.`);
    // TODO-QSP: dynamic text: Clenching your pussy, you milk him for all he's worth until you feel him stop pu...
    scene.text(`Clenching your pussy, you milk him for all he's worth until you feel him stop pulsing inside you. Then, leaning forward, you let ${((s as any).npcdesc ?? 0)}'s cock slip from your pussy, and his cum slowly trickles out.`);
  }
  if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
    scene.actions([
      { label: 'I\'m on birth control', handler: (st: GameState) => {
    scene.img('images/shared/sex/public/outdoor/creampie1.jpg');
    scene.text('"Don\'t worry," you wink. "I\'m on birth control."');
    scene.actions([
      { label: 'Continue', goto: ['pav_disco_sex', 'disco_sex_end'] },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'I\'m on birth control (lie)', handler: (st: GameState) => {
    scene.img('images/shared/sex/public/outdoor/creampie1.jpg');
    scene.text('"Don\'t worry," you lie, winking at him. "I\'m on birth control."');
    scene.actions([
      { label: 'Continue', goto: ['pav_disco_sex', 'disco_sex_end'] },
    ]);
  } },
    ]);
  }
  if (((s as any).stat ?? 0)?.['total_creampies'] > 0) {
    scene.actions([
      { label: 'I love getting creampied', handler: (st: GameState) => {
    scene.img('images/shared/sex/public/outdoor/creampie1.jpg');
    // TODO-QSP: dynamic text: "I love getting creampied," you grin, closing your eyes and savouring the feelin...
    scene.text(`"I love getting creampied," you grin, closing your eyes and savouring the feeling of ${((s as any).npcdesc ?? 0)}'s load oozing from your pussy.`);
    scene.actions([
      { label: 'Continue', goto: ['pav_disco_sex', 'disco_sex_end'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Felt too good', handler: (st: GameState) => {
    scene.img('images/shared/sex/public/outdoor/creampie1.jpg');
    scene.text('"Sorry, it felt so good," you grin.');
    scene.text('"Apology accepted," he pants back. "Your pussy was great too."');
    scene.actions([
      { label: 'Continue', goto: ['pav_disco_sex', 'disco_sex_end'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterCreampieSurprise1(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Did you just cum inside me?', handler: (st: GameState) => {
    scene.img('images/shared/sex/public/outdoor/creampie1.jpg');
    scene.text('You pull away, shocked by what just occurred.');
    scene.text('"Did you just cum inside me?"');
    if ((Math.floor(Math.random() * 2) + 0) === 1  ||  ((s as any).gdk ?? 0)?.['condom'] === 2) {
      scene.text('"Shit! I didn\'t mean to! I was just-"');
    } else {
      scene.text('"Yeah, your pussy was just so tight. I just couldn\'t help it."');
    }
    if (((s as any).gdk ?? 0)?.['orgasm'] === ((s as any).orgasm ?? 0)) {
      scene.actions([
        { label: 'Already?', handler: (st: GameState) => {
    scene.img('images/shared/sex/public/outdoor/creampie1.jpg');
    scene.text('"Seriously?! Already?!" You look down at the cum seeping from your pussy with heavy disappointment. "Fuck! Why do guys like you never manage to hold it in until I get off?"');
    // TODO-QSP: dynamic text: "What the fuck is your problem?" <<$npcdesc>> growls angrily.
    scene.text(`"What the fuck is your problem?" ${((s as any).npcdesc ?? 0)} growls angrily.`);
    scene.text('"Apparently, my problem is that you\'re a two-pump chump who can\'t wait to nut inside a girl before she\'s gotten off!"');
    scene.text('"Fuck you, bitch!"');
    if (((s as any).gdk ?? 0)?.['virgin'] === 1  ||  ((s as any).mesec ?? 0) > 0) {
      // TODO-QSP: dynamic text: <<$npcdesc>> storms away from you, pulling up his pants as he goes. Before you k...
      scene.text(`${((s as any).npcdesc ?? 0)} storms away from you, pulling up his pants as he goes. Before you know it, you're alone in the dark, a stranger's cum and blood dripping from your pussy, and feeling severely blue-balled.`);
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> storms away from you, pulling up his pants as he goes. Before you k...
      scene.text(`${((s as any).npcdesc ?? 0)} storms away from you, pulling up his pants as he goes. Before you know it, you're alone in the dark, a stranger's cum dripping from your pussy, and feeling severely blue-balled.`);
    }
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', goto: ['pav_commcenter', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'What the fuck!', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/pavlovsk/community/dk_night.jpg');
    // TODO-QSP: dynamic text: "What the fuck!" you shout, causing <<$npcdesc>> to recoil backwards. "What made...
    scene.text(`"What the fuck!" you shout, causing ${((s as any).npcdesc ?? 0)} to recoil backwards. "What made you think that was fucking okay?!"`);
    if (((s as any).gdk ?? 0)?.['virgin'] === 1  ||  ((s as any).mesec ?? 0) > 0) {
      // TODO-QSP: dynamic text: You stare at your pussy, horrified by the white liquid oozing inside. Before you...
      scene.text(`You stare at your pussy, horrified by the white liquid oozing inside. Before you can do anything else, ${((s as any).npcdesc ?? 0)} hurries away from you, pulling up his pants and escaping back into the disco, leaving you alone in the dark with cum and blood dripping from your pussy.`);
    } else {
      // TODO-QSP: dynamic text: You stare at your pussy, horrified by the white liquid oozing inside. Before you...
      scene.text(`You stare at your pussy, horrified by the white liquid oozing inside. Before you can do anything else, ${((s as any).npcdesc ?? 0)} hurries away from you, pulling up his pants and escaping back into the disco, leaving you alone in the dark with his cum still dripping from your pussy.`);
    }
    scene.actions([
      { label: 'Continue', goto: ['pav_commcenter', ''] },
    ]);
  } },
      { label: 'Forgive the mistake', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/dk_night.jpg');
    // TODO-QSP: dynamic text: "You look down at the white liquid dripping from your pussy. It fills you with s...
    scene.text(`"You look down at the white liquid dripping from your pussy. It fills you with stress, but you know it wouldn't be right to blame ${((s as any).npcdesc ?? 0)}.`);
    scene.text('You bite your lip for a moment considering the situation.');
    if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
      scene.actions([
        { label: 'I\'m on birth control', handler: (st: GameState) => {
    scene.text('"It\'s fine," you sigh. "I should\'ve told you not to. Or insisted on a condom. But it\'s not your fault. I\'m on birth control anyways. You\'re clean, right?"');
    scene.text('"Yeah, of course!" he responds immediately.');
    scene.text('<i>Not that you\'d tell me if you weren\'t...</i> you think to yourself.');
    scene.actions([
      { label: 'Continue', goto: ['pav_disco_sex', 'disco_sex_end'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'I\'m on birth control (lie)', handler: (st: GameState) => {
    scene.text('"It\'s fine," you sigh. "I\'m on birth control anyways."');
    scene.text('You see relief wash through his face at your lie, either because he thinks he isn\'t going to be a father any time soon or because it means you aren\'t going to be mad at him.');
    scene.actions([
      { label: 'Continue', goto: ['pav_disco_sex', 'disco_sex_end'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'I\'ll be fine', handler: (st: GameState) => {
    scene.text('You decide it isn\'t a big deal.');
    scene.text('"It\'s fine," you sigh. "I should\'ve told you not to. Or insisted on a condom. But it\'s not your fault. One accidental creampie won\'t kill me, will it?"');
    scene.actions([
      { label: 'Continue', goto: ['pav_disco_sex', 'disco_sex_end'] },
    ]);
  } },
      { label: 'I\'ll buy a morning-after pill', handler: (st: GameState) => {
    scene.text('"It\'s fine," you sigh. "I should\'ve told you not to. Or insisted on a condom. Either way, it\'s my fault for not saying anything. I\'ll buy a morning-after pill tomorrow. I\'ll be alright."');
    scene.actions([
      { label: 'Continue', goto: ['pav_disco_sex', 'disco_sex_end'] },
    ]);
  } },
    ]);
  } },
      { label: 'Hot', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (15);
    scene.img('images/shared/sex/public/outdoor/creampie1.jpg');
    // TODO-QSP: dynamic text: A shiver of pleasure washes over your body. Knowing that <<$npcdesc>> blew his l...
    scene.text(`A shiver of pleasure washes over your body. Knowing that ${((s as any).npcdesc ?? 0)} blew his load inside you is enough to send heat coursing through your hips, and you can feel your nipples stiffen up again.`);
    scene.actions([
      { label: 'It felt so good', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "That felt so good," you smile tiredly. <<$npcdesc>> blinks at you, a look of su...
    scene.text(`"That felt so good," you smile tiredly. ${((s as any).npcdesc ?? 0)} blinks at you, a look of surprise on his face as if he expected you to be mad about it.`);
    scene.actions([
      { label: 'Continue', goto: ['pav_disco_sex', 'disco_sex_end'] },
    ]);
  } },
      { label: 'Premature ejaculation is hot', handler: (st: GameState) => {
    scene.text('"Fuck, it\'s so hot when guys can\'t hold their load," you grin.');
    // TODO-QSP: dynamic text: "What?" <<$npcdesc>> says, seemingly taken aback by your statement.
    scene.text(`"What?" ${((s as any).npcdesc ?? 0)} says, seemingly taken aback by your statement.`);
    scene.text('"Premature ejaculation?" you say, your smile growing wider. "It\'s hot."');
    if (((s as any).npc_insecure ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspCall(s, 'arousal', 'end');
      scene.text('"What the fuck did you just say?!" he growls.');
      scene.text('"What??" you protest in turn. "I don\'t see what the problem is! I think it\'s sexy that you can\'t help but nut inside me! It\'s not your fault, but I liked it!"');
      scene.text('"I didn\'t prematurely ejaculate! I don\'t do that!"');
      scene.text('"Well, there wasn\'t any warning. Seemed like you didn\'t mean to cum when-"');
      scene.text('"I SAID I DON\'T DO THAT!"');
      // TODO-QSP: dynamic text: <<$npcdesc>> shouts at you one last time before storming back towards the disco,...
      scene.text(`${((s as any).npcdesc ?? 0)} shouts at you one last time before storming back towards the disco, grumbling the whole time. Suddenly, you're alone in the dark with the load of a stranger inside your pussy.`);
      scene.actions([
        { label: 'Continue', goto: ['pav_commcenter', ''] },
      ]);
    } else {
      scene.text('A blush spreads across his face and he mutters a but doesn\'t say anything else.');
      scene.actions([
        { label: 'Continue', goto: ['pav_disco_sex', 'disco_sex_end'] },
      ]);
    }
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterCreampieSurprise2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'cum_call', '', $npcID, temp['known_cumID']
  qspCall(s, 'stat', '');
  qspCall(s, 'arousal', 'end');
  scene.img('images/shared/sex/public/outdoor/creampie1.jpg');
  // TODO-QSP: dynamic text: "WHAT THE FUCK!" you shout, causing <<$npcdesc>> to recoil backwards. "I fucking...
  scene.text(`"WHAT THE FUCK!" you shout, causing ${((s as any).npcdesc ?? 0)} to recoil backwards. "I fucking <i>told you</i> not to cum inside me!"`);
  if (((s as any).gdk ?? 0)?.['virgin'] === 1  ||  ((s as any).mesec ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$npcdesc>> hurries away from you, escaping back into the disco as you stare at...
    scene.text(`${((s as any).npcdesc ?? 0)} hurries away from you, escaping back into the disco as you stare at your pussy, horrified by the white liquid oozing from inside it. Before you know it, you're alone in the dark, a stranger's cum and blood dripping from your pussy.`);
  } else {
    // TODO-QSP: dynamic text: <<$npcdesc>> hurries away from you, escaping back into the disco as you stare at...
    scene.text(`${((s as any).npcdesc ?? 0)} hurries away from you, escaping back into the disco as you stare at your pussy, horrified by the white liquid oozing from inside it. Before you know it, you're alone in the dark, a stranger's cum inside your pussy.`);
  }
  scene.actions([
    { label: 'Continue', goto: ['pav_commcenter', ''] },
  ]);
  scene.build();
}

function enterDiscoSexEnd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'stat', '');
  if (((s as any).PCloSkirt ?? 0) > 0) {
    if (((s as any).pantyworntype ?? 0) !== 'none'  ||  ((s as any).gdk ?? 0)?.['fuck'] !== 1) {
      if (((s as any).gdk ?? 0)?.['cum'] === 'facial') {
        scene.img('images/locations/pavlovsk/community/dk_night.jpg');
        // TODO-QSP: dynamic text: <<$npcdesc>> pulls his pants back up and heads back inside, leaving you alone in...
        scene.text(`${((s as any).npcdesc ?? 0)} pulls his pants back up and heads back inside, leaving you alone in the dark with cum on your face.`);
      } else {
        if (((s as any).gdk ?? 0)?.['cum'] === 'mouth') {
          // TODO-QSP: dynamic text: <<$npcdesc>> pulls his pants back up and heads back inside, leaving you alone in...
          scene.text(`${((s as any).npcdesc ?? 0)} pulls his pants back up and heads back inside, leaving you alone in the dark, the taste of his cum still on your lips.`);
        } else {
          if (((s as any).gdk ?? 0)?.['cum'] === 'creampie'  &&  (((s as any).mesec ?? 0) > 0  ||  ((s as any).gdk ?? 0)?.['virgin'] === 1)) {
            // TODO-QSP: dynamic text: <<$npcdesc>> pulls his pants back up and heads back inside, leaving you alone in...
            scene.text(`${((s as any).npcdesc ?? 0)} pulls his pants back up and heads back inside, leaving you alone in the dark, cum and blood running down your legs.`);
          } else {
            if (((s as any).gdk ?? 0)?.['cum'] === 'creampie') {
              // TODO-QSP: dynamic text: <<$npcdesc>> pulls his pants back up and heads back inside, leaving you alone in...
              scene.text(`${((s as any).npcdesc ?? 0)} pulls his pants back up and heads back inside, leaving you alone in the dark, cum running down your legs.`);
            } else {
              if (((s as any).gdk ?? 0)?.['cum'] === 'condom') {
                // TODO-QSP: dynamic text: <<$npcdesc>> pulls off the condom and tosses it aside, zipping his pants back up...
                scene.text(`${((s as any).npcdesc ?? 0)} pulls off the condom and tosses it aside, zipping his pants back up to head back inside and leaving you alone in the dark, pussy juices running down your legs.`);
              }
            }
          }
        }
      }
    } else {
      if (((s as any).gdk ?? 0)?.['cum'] === 'facial') {
        scene.img('images/locations/pavlovsk/community/dk_night.jpg');
        // TODO-QSP: dynamic text: You pull up your panties while <<$npcdesc>> zips up his pants before heading bac...
        scene.text(`You pull up your panties while ${((s as any).npcdesc ?? 0)} zips up his pants before heading back inside, leaving you alone in the dark with cum on your face.`);
      } else {
        if (((s as any).gdk ?? 0)?.['cum'] === 'mouth') {
          // TODO-QSP: dynamic text: You pull up your panties while <<$npcdesc>> zips up his pants before heading bac...
          scene.text(`You pull up your panties while ${((s as any).npcdesc ?? 0)} zips up his pants before heading back inside, leaving you alone in the dark, the taste of his cum still on your lips.`);
        } else {
          if (((s as any).gdk ?? 0)?.['cum'] === 'creampie'  &&  (((s as any).mesec ?? 0) > 0  ||  ((s as any).gdk ?? 0)?.['virgin'] === 1)) {
            // TODO-QSP: dynamic text: You pull up your panties while <<$npcdesc>> zips up his pants before heading bac...
            scene.text(`You pull up your panties while ${((s as any).npcdesc ?? 0)} zips up his pants before heading back inside, leaving you alone in the dark, cum and blood soaking into your underwear.`);
          } else {
            if (((s as any).gdk ?? 0)?.['cum'] === 'creampie') {
              // TODO-QSP: dynamic text: You pull up your panties while <<$npcdesc>> zips up his pants before heading bac...
              scene.text(`You pull up your panties while ${((s as any).npcdesc ?? 0)} zips up his pants before heading back inside, leaving you alone in the dark, cum soaking into your underwear.`);
            } else {
              if (((s as any).gdk ?? 0)?.['cum'] === 'creampie_wipe') {
                // TODO-QSP: dynamic text: You pull out some wipes and begin to clean up the mess leaking out of your pussy...
                scene.text(`You pull out some wipes and begin to clean up the mess leaking out of your pussy while ${((s as any).npcdesc ?? 0)} zips up his pants and heads back inside. By the time you're done, you're alone, pulling up your panties in the dark.`);
              } else {
                if (((s as any).gdk ?? 0)?.['cum'] === 'condom') {
                  // TODO-QSP: dynamic text: <<$npcdesc>> pulls off the condom and tosses it aside while you pull up your pan...
                  scene.text(`${((s as any).npcdesc ?? 0)} pulls off the condom and tosses it aside while you pull up your panties. Afterwards, he zips his pants back up and heads inside, leaving you alone in the dark.`);
                }
              }
            }
          }
        }
      }
    }
  } else {
    if (((s as any).gdk ?? 0)?.['fuck'] !== 1) {
      if (((s as any).gdk ?? 0)?.['cum'] === 'facial') {
        scene.img('images/locations/pavlovsk/community/dk_night.jpg');
        // TODO-QSP: dynamic text: <<$npcdesc>> pulls his pants back up and heads back inside, leaving you alone in...
        scene.text(`${((s as any).npcdesc ?? 0)} pulls his pants back up and heads back inside, leaving you alone in the dark with cum on your face.`);
      } else {
        if (((s as any).gdk ?? 0)?.['cum'] === 'mouth') {
          // TODO-QSP: dynamic text: <<$npcdesc>> pulls his pants back up and heads back inside, leaving you alone in...
          scene.text(`${((s as any).npcdesc ?? 0)} pulls his pants back up and heads back inside, leaving you alone in the dark, the taste of his cum still on your lips.`);
        }
      }
    } else {
      if (((s as any).gdk ?? 0)?.['cum'] === 'facial') {
        scene.img('images/locations/pavlovsk/community/dk_night.jpg');
        // TODO-QSP: dynamic text: The two of you pull your pants back up, and <<$npcdesc>> heads back inside, leav...
        scene.text(`The two of you pull your pants back up, and ${((s as any).npcdesc ?? 0)} heads back inside, leaving you alone in the dark with cum on your face.`);
      } else {
        if (((s as any).gdk ?? 0)?.['cum'] === 'mouth') {
          // TODO-QSP: dynamic text: The two of you pull your pants back up, and <<$npcdesc>> heads back inside, leav...
          scene.text(`The two of you pull your pants back up, and ${((s as any).npcdesc ?? 0)} heads back inside, leaving you alone in the dark, the taste of his cum still on your lips.`);
        } else {
          if (((s as any).gdk ?? 0)?.['cum'] === 'creampie'  &&  (((s as any).mesec ?? 0) > 0  ||  ((s as any).gdk ?? 0)?.['virgin'] === 1)) {
            if (((s as any).pantyworntype ?? 0) === 'none') {
              // TODO-QSP: dynamic text: The two of you pull your pants back up, and <<$npcdesc>> heads back inside, leav...
              scene.text(`The two of you pull your pants back up, and ${((s as any).npcdesc ?? 0)} heads back inside, leaving you alone in the dark, cum and blood seeping into the crotch of your pants.`);
            } else {
              // TODO-QSP: dynamic text: The two of you pull your pants back up, and <<$npcdesc>> heads back inside, leav...
              scene.text(`The two of you pull your pants back up, and ${((s as any).npcdesc ?? 0)} heads back inside, leaving you alone in the dark, cum and blood seeping into your panties.`);
            }
          } else {
            if (((s as any).gdk ?? 0)?.['cum'] === 'creampie') {
              if (((s as any).pantyworntype ?? 0) === 'none') {
                // TODO-QSP: dynamic text: The two of you pull your pants back up, and <<$npcdesc>> heads back inside, leav...
                scene.text(`The two of you pull your pants back up, and ${((s as any).npcdesc ?? 0)} heads back inside, leaving you alone in the dark, cum seeping into the crotch of your pants.`);
              } else {
                // TODO-QSP: dynamic text: The two of you pull your pants back up, and <<$npcdesc>> heads back inside, leav...
                scene.text(`The two of you pull your pants back up, and ${((s as any).npcdesc ?? 0)} heads back inside, leaving you alone in the dark, cum seeping into your panties.`);
              }
            } else {
              if (((s as any).gdk ?? 0)?.['cum'] === 'condom') {
                // TODO-QSP: dynamic text: <<$npcdesc>> pulls off the condom and tosses it aside while you pull up your pan...
                scene.text(`${((s as any).npcdesc ?? 0)} pulls off the condom and tosses it aside while you pull up your pants. Afterwards, he zips his pants back up and heads inside, leaving you alone in the dark.`);
              }
            }
          }
        }
      }
    }
  }
  scene.actions([
    { label: 'Continue', goto: ['pav_commcenter', ''] },
  ]);
  scene.build();
}

function enterHotelPre(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $npc_usedname[$npcID] = $npc_nickname[$npcID]
  qspCall(s, 'npcStat', '', ((s as any).npcID ?? 0));
  if (((s as any).temp ?? 0)?.['drunk_guy'] === 0) {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/outside_talk.jpg');
    // TODO-QSP: dynamic text: You go outside with the man. As you walk, he put his arm around your waist. "I'm...
    scene.text(`You go outside with the man. As you walk, he put his arm around your waist. "I'm ${((s as any).npcdesc ?? 0)}. What's your name?" he asks.`);
    // TODO-QSP: dynamic text: "<<$pcs_firstname>>, but people call me <<$pcs_nickname>>," you answer and the m...
    scene.text(`"${((s as any).pcs_firstname ?? 0)}, but people call me ${((s as any).pcs_nickname ?? 0)}," you answer and the man continues.`);
    scene.text('"That\'s a nice name. I\'m in town on a business trip and I\'m staying at a nearby hotel. There\'s virtually nothing to do in this town, so why don\'t you come back to my hotel with me? We can drink some whiskey and chat."');
    if (((s as any).alko ?? 0) < 6  ||  ((s as any).pcs_horny ?? 0) <= 75  ||  ((s as any).fame ?? 0)?.['pav_slut'] <= 50) {
      qspCall(s, 'willpower', 'drink', 'resist');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'drink', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    if (((s as any).pcs_sprt ?? 0) <= 30) {
      qspCall(s, 'exp_gain', 'sprt', Math.floor(Math.random() * 2) + 0);
    }
    qspCall(s, 'stat', '');
  }, goto: ['pav_disco', ''] },
        ]);
      }
    }
    scene.actions([
      { label: 'Go to the hotel', handler: (st: GameState) => {
    // TODO-QSP: sex_ev['pav_hotel'] = 1
  }, goto: ['pav_disco_sex', 'hotel'] },
    ]);
  } else {
    if (((s as any).temp ?? 0)?.['drunk_guy'] === 1) {
      scene.text('The drunk man molests you for the entire dance.');
      // TODO-QSP: dynamic text: When the song finally ends, he whispers in your ear. "My name is <<$npcdesc>>. W...
      scene.text(`When the song finally ends, he whispers in your ear. "My name is ${((s as any).npcdesc ?? 0)}. What's yours?"`);
      // TODO-QSP: dynamic text: "<<$pcs_firstname>>, but people call me <<$pcs_nickname>>," you answer, feeling ...
      scene.text(`"${((s as any).pcs_firstname ?? 0)}, but people call me ${((s as any).pcs_nickname ?? 0)}," you answer, feeling somewhat disgusted.`);
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>... I'm not... Local. I'm staying in a... Nearby... Hotel, so ...
      scene.text(`"${((s as any).pcs_nickname ?? 0)}... I'm not... Local. I'm staying in a... Nearby... Hotel, so let's... Take a taxi and go to... To my room..." he drunkenly stutters.`);
      qspCall(s, 'arousal', 'foreplay', 5);
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Go to the hotel', goto: ['pav_disco_sex', 'hotel'] },
      ]);
    }
  }
  scene.build();
}

function enterHotel(s: GameState, scene: SceneBuilder): void {
  (s as any).music_loop = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/disco/sex/hotel/coupletaxi.jpg');
  // TODO-QSP: dynamic text: When you get outside, <<$npcdesc>> quickly hails a taxi and has a short chat wit...
  scene.text(`When you get outside, ${((s as any).npcdesc ?? 0)} quickly hails a taxi and has a short chat with the driver. "Come on, ${((s as any).pcs_nickname ?? 0)}. Let's go!"`);
  // TODO-QSP: dynamic text: You get into the back seat of the taxi with him and spend the next five minutes ...
  scene.text(`You get into the back seat of the taxi with him and spend the next five minutes driving, mostly in silence. You notice ${((s as any).npcdesc ?? 0)} giving the taxi driver an impressive tip when you arrive at the hotel... is he trying to impress you or is he just very generous...?`);
  scene.actions([
    { label: 'Go to <<$npcdesc>>\'s room', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_start', 'hotel_start', 'hookup'
  } },
    { label: 'Go to <<$npcdesc>>\'s room (old content)', handler: (st: GameState) => {
    if (((s as any).DPtipe ?? 0) !== 1) {
      qspCall(s, 'stat', '');
      scene.img('images/shared/sex/kiss/kiss.jpg');
      // TODO-QSP: dynamic text: As soon as you enter his hotel room, <<$npcdesc>> puts his hands on your hips an...
      scene.text(`As soon as you enter his hotel room, ${((s as any).npcdesc ?? 0)} puts his hands on your hips and pulls you closer for a deep kiss. He slides his hands up and down your body, trying to find a way to get underneath your clothes.`);
      qspCall(s, 'arousal', 'kiss', 5);
      qspCall(s, 'stat', '');
      qspCall(s, 'pav_disco_sex', 'heating_up');
    } else {
      if ((!(Math.floor(Math.random() * 5) + 0))) {
        scene.actions([{ label: 'Continue', goto: ['pav_disco_sex', 'drug_user'] }]);
      }
      (s as any).BeInOtel = ((s as any).BeInOtel ?? 0) + (1);
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/community/disco/sex/hotel/otel.jpg');
      // TODO-QSP: dynamic text: You follow along behind <<$npcdesc>> until the two of you reach his door and ent...
      scene.text(`You follow along behind ${((s as any).npcdesc ?? 0)} until the two of you reach his door and enter his room. You are pretty surprised. The room is much nicer than you thought it would be. He must have counted on bringing someone back to the room with him, as a bottle of whiskey and a fruit platter are already waiting on the table.`);
      scene.text('He gestures to a comfortable-looking chair, inviting you to sit down. He sits across from you and pours two glasses of whiskey, offering you one.');
      // TODO-QSP: dynamic text: "Let's have a drink and toast to making new acquaintances! I'm very fortunate to...
      scene.text(`"Let's have a drink and toast to making new acquaintances! I'm very fortunate to have met a beautiful and wonderful girl such as yourself, ${((s as any).pcs_nickname ?? 0)}", he toasts cheerfully.`);
      scene.actions([
        { label: 'Have a drink with him', handler: (st: GameState) => {
    qspCall(s, 'drugs', 'alcohol', 'whiskey');
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/kiss/kiss.jpg');
    scene.text('You can tell he didn\'t cheap out on the whiskey at all. This is good stuff!');
    // TODO-QSP: dynamic text: The two of you enjoy the drink and chat about small things, relaxing in each oth...
    scene.text(`The two of you enjoy the drink and chat about small things, relaxing in each other's company. ${((s as any).npcdesc ?? 0)} then stands up and walks up to you, places his hands on your shoulders and brings his lips to yours, giving you a warm kiss while slowly and confidently starting to take your clothes off.`);
    qspCall(s, 'arousal', 'kiss', 5);
    qspCall(s, 'stat', '');
    qspCall(s, 'pav_disco_sex', 'heating_up');
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterHeatingUp(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
    scene.actions([
      { label: 'Tell him you\'re still a virgin', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).tiprandeom = Math.floor(Math.random() * 3) + 0;
    if (((s as any).tiprandeom ?? 0) < 2) {
      scene.img('images/locations/pavlovsk/community/disco/sex/hotel/otel.jpg');
      scene.text('"No, wait!" you interrupt him. "Look... I like men, and I like you, but I\'m not losing my virginity to someone I just met!"');
      // TODO-QSP: dynamic text: <<$npcdesc>> smiles reassuringly. "Oh wow, a virgin, huh? That's okay... we can ...
      scene.text(`${((s as any).npcdesc ?? 0)} smiles reassuringly. "Oh wow, a virgin, huh? That's okay... we can still have fun without you losing your virginity! Maybe you could use your mouth?"`);
      // TODO-QSP: dynamic text: <<$npcdesc>> unbuttons his pants, letting his cock spring free.
      scene.text(`${((s as any).npcdesc ?? 0)} unbuttons his pants, letting his cock spring free.`);
      qspCall(s, 'willpower', 'bj', 'resist');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Tell him it\'s not going to happen [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Tell him it\'s not going to happen [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'bj', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/pc/reactions/no.mp4');
    scene.text('You laugh at his confidence. It doesn\'t look like anyone has said no to him before, and he obviously expected you to follow his lead, but you set him straight. "I don\'t think so..."');
    // TODO-QSP: dynamic text: <<$npcdesc>> gives his head a scratch, pondering the situation for a moment. "Ho...
    scene.text(`${((s as any).npcdesc ?? 0)} gives his head a scratch, pondering the situation for a moment. "How about I pay you? I'll give you ${qspFunc(s, 'money', 'string_profit', 400)} for a blowjob?"`);
    scene.text('He\'s already counting the money out while he says it.');
    qspCall(s, 'willpower', 'prostitution', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Leave the hotel [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Leave the hotel [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'prostitution', 'resist', 'hard');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['pav_market', ''] },
      ]);
    }
    scene.actions([
      { label: 'Suck him off for money', handler: (st: GameState) => {
    qspCall(s, 'money', 'earn', 400);
    qspCall(s, 'fame', 'pav', 'prostitute', Math.floor(Math.random() * 3) + 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/sex/hotel/money.jpg');
    // TODO-QSP: dynamic text: You give him a nod and wordlessly extend your hand. <<$npcdesc>> readily gives y...
    scene.text(`You give him a nod and wordlessly extend your hand. ${((s as any).npcdesc ?? 0)} readily gives you the money.`);
    // TODO-QSP: gt 'pav_disco_sex', 'hotelsex', 'paid'
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Suck his cock', handler: (st: GameState) => {
    // TODO-QSP: gt 'pav_disco_sex', 'hotelsex', 'unpaid'
  } },
      ]);
    } else {
      scene.img('images/locations/pavlovsk/community/disco/sex/hotel/money.jpg');
      // TODO-QSP: dynamic text: <<$npcdesc>>'s eyes grow a bit wider when you say the word "virgin".
      scene.text(`${((s as any).npcdesc ?? 0)}'s eyes grow a bit wider when you say the word "virgin".`);
      // TODO-QSP: dynamic text: "Wow, you're a virgin? Really?" he asks, obviously very intrigued. "Can I see yo...
      scene.text(`"Wow, you're a virgin? Really?" he asks, obviously very intrigued. "Can I see your pussy? Please? I haven't seen a virgin pussy in forever... I'll give you ${qspFunc(s, 'money', 'string_profit', 200)}! I just want to look at it. I promise not to touch!"`);
      qspCall(s, 'willpower', 'exhib', 'resist', 'easy');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Leave the hotel [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Leave the hotel [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'resist', 'easy');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['pav_market', ''] },
        ]);
      }
      qspCall(s, 'willpower', 'exhib', 'resist', 'easy');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Tell him it\'s not going to happen [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Tell him it\'s not going to happen [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/pc/reactions/no.mp4');
    scene.text('You laugh at his confidence. It doesn\'t look like anyone has said no to him before, and he obviously expected you to follow his lead, but you set him straight. ');
    // TODO-QSP: dynamic text: <<$npcdesc>> gives his head a scratch, pondering the situation for a moment. "We...
    scene.text(`${((s as any).npcdesc ?? 0)} gives his head a scratch, pondering the situation for a moment. "Well, in that case, how about a blowjob then? I'll give you ${qspFunc(s, 'money', 'string_profit', 400)}."`);
    scene.text('He\'s already counting the money out as he says it.');
    qspCall(s, 'willpower', 'prostitution', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Leave the hotel [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Leave the hotel [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'prostitution', 'resist', 'hard');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['pav_market', ''] },
      ]);
    }
    scene.actions([
      { label: 'Suck him off for money', handler: (st: GameState) => {
    qspCall(s, 'money', 'earn', 400);
    qspCall(s, 'fame', 'pav', 'prostitute', Math.floor(Math.random() * 3) + 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/sex/hotel/money.jpg');
    // TODO-QSP: dynamic text: You give him a nod and wordlessly extend your hand. <<$npcdesc>> readily gives y...
    scene.text(`You give him a nod and wordlessly extend your hand. ${((s as any).npcdesc ?? 0)} readily gives you the money.`);
    // TODO-QSP: gt 'pav_disco_sex', 'hotelsex', 'paid'
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Show him', handler: (st: GameState) => {
    qspCall(s, 'money', 'earn', 200);
    qspCall(s, 'fame', 'pav', 'prostitute', Math.floor(Math.random() * 3) + 0);
    qspCall(s, 'arousal', 'foreplay', 5, 'prostitution');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/sex/hotel/kiska.jpg');
    scene.text('You slowly take off your clothes and get down on his bed, spreading your legs widely. You can\'t help but laugh a little when he comes back with a large flashlight.');
    scene.text('"So I can see it better!" he grins at you, almost giddy with anticipation.');
    scene.text('He examines your pussy for a few minutes, shining the flashlight inside you to try and catch glimpses of your hymen. "Wow, that\'s so hot!" he mutters.');
    // TODO-QSP: dynamic text: He then looks at you with a serious expression. "Listen, I really want to be you...
    scene.text(`He then looks at you with a serious expression. "Listen, I really want to be your first. I'll give you... ${qspFunc(s, 'money', 'string_profit', 5000)}. That's right, ${qspFunc(s, 'money', 'string_profit', 5000)}! What do you say?"`);
    qspCall(s, 'willpower', 'prostitution', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Say you\'re saving yourself for marriage [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Say you\'re saving yourself for marriage [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'prostitution', 'resist', 'hard');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/pc/reactions/no.mp4');
    scene.text('You laugh at his confidence. It doesn\'t look like anyone has said no to him before, and he obviously expected you to follow his lead, but you set him straight. "Sorry, but... no. I\'m saving myself for marriage, and no amount of money is going to change that!"');
    // TODO-QSP: dynamic text: <<$npcdesc>> scratches his head, pondering for a moment. He looks somewhat disap...
    scene.text(`${((s as any).npcdesc ?? 0)} scratches his head, pondering for a moment. He looks somewhat disappointed. "Fair enough, I can respect that. I still want you, though, so how about a blowjob, then? I'll give you ${qspFunc(s, 'money', 'string_profit', 400)}?"`);
    scene.text('He\'s already counting the money out as he says it.');
    qspCall(s, 'willpower', 'prostitution', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Leave the hotel [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Leave the hotel [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'prostitution', 'resist', 'hard');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['pav_market', ''] },
      ]);
    }
    scene.actions([
      { label: 'Suck him off for money', handler: (st: GameState) => {
    qspCall(s, 'money', 'earn', 400);
    qspCall(s, 'fame', 'pav', 'prostitute', Math.floor(Math.random() * 3) + 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/sex/hotel/money.jpg');
    // TODO-QSP: dynamic text: You wordlessly nod and extend your hand. <<$npcdesc>> readily gives you the mone...
    scene.text(`You wordlessly nod and extend your hand. ${((s as any).npcdesc ?? 0)} readily gives you the money.`);
    qspCall(s, 'arousal', 'bj', 5, 'prostitution');
    qspCall(s, 'dinSex', 'std_trigger_oral');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt 'pav_disco_sex', 'hotelsex', 'paid'
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Lose your virginity for money', handler: (st: GameState) => {
    (s as any).lose_virginity_event = 1;
    ((s as any).bmSEX ?? {})[String((s as any).Tboynum ?? 0)] = (((s as any).bmSEX ?? {})[String((s as any).Tboynum ?? 0)] ?? 0) + (1);
    qspCall(s, 'money', 'earn', 5000);
    qspCall(s, 'fame', 'pav', 'prostitute', Math.floor(Math.random() * 5) + 2);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/sex/hotel/money.jpg');
    scene.text('"Well... alright," you say softly as you extend your hand. He gives you a hearty handshake. "Deal!" he happily exclaims.');
    // TODO-QSP: dynamic text: He puts a large pile of money in your hand, and you quickly count it. It's all t...
    scene.text(`He puts a large pile of money in your hand, and you quickly count it. It's all there, as promised. When you put the money away, ${((s as any).npcdesc ?? 0)} eagerly pushes you down on the bed and starts taking off your top.`);
    qspCall(s, 'arousal', 'foreplay', 5, 'prostitution');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt 'pav_disco_sex', 'hotelsex', 'paid'
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
    ]);
  }
  qspCall(s, 'willpower', 'prostitution', 'self');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Suggest you want money [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Suggest you want money [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'willpower', 'prostitution', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/sex/hotel/otel.jpg');
    // TODO-QSP: dynamic text: You look at the clock and fake a yawn. "Oh wow, is it that late already? It's be...
    scene.text(`You look at the clock and fake a yawn. "Oh wow, is it that late already? It's been fun spending time with you, ${((s as any).npcdesc ?? 0)}, but I should get going."`);
    // TODO-QSP: dynamic text: <<$npcdesc>> frowns and protests. "Already? But we were having such a nice time!...
    scene.text(`${((s as any).npcdesc ?? 0)} frowns and protests. "Already? But we were having such a nice time!"`);
    scene.text('"I know," you smile at him, letting the words linger in the air for a moment, "but maybe I can stay a little longer... if you make it worth it..."');
    // TODO-QSP: dynamic text: He decides to play along. "Oh, I see. Would <<$func('money', 'string_profit', 20...
    scene.text(`He decides to play along. "Oh, I see. Would ${qspFunc(s, 'money', 'string_profit', 2000)} help?" From the greedy look in his eyes and the massive bulge in his pants, it's evident that he expects to fuck you if you say yes.`);
    qspCall(s, 'willpower', 'sex', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Offer a blowjob for money instead [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Offer a blowjob for money instead [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'fame', 'pav', 'prostitute', Math.floor(Math.random() * 3) + 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/sex/hotel/otel.jpg');
    scene.text('You laugh and say, "That\'s very kind of you, but that\'s too much! I don\'t think I could thank you enough..."');
    // TODO-QSP: dynamic text: Before he can say anything, you get to the point. "I really do need to leave soo...
    scene.text(`Before he can say anything, you get to the point. "I really do need to leave soon. But... how about I give you a blowjob for ${qspFunc(s, 'money', 'string_profit', 400)}?"`);
    // TODO-QSP: dynamic text: <<$npcdesc>> looks disappointed at first but chooses not to reject your offer.
    scene.text(`${((s as any).npcdesc ?? 0)} looks disappointed at first but chooses not to reject your offer.`);
    scene.actions([
      { label: 'Blow him for money', handler: (st: GameState) => {
    qspCall(s, 'money', 'earn', 400);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/sex/hotel/money.jpg');
    // TODO-QSP: dynamic text: You wordlessly extend your hand, and <<$npcdesc>> readily gives you the money.
    scene.text(`You wordlessly extend your hand, and ${((s as any).npcdesc ?? 0)} readily gives you the money.`);
    qspCall(s, 'arousal', 'bj', 5, 'prostitution');
    qspCall(s, 'dinSex', 'std_trigger_oral');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt 'pav_disco_sex', 'hotelsex', 'paid'
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Agree to have sex for money', handler: (st: GameState) => {
    (s as any).hotel_sex = 1;
    (s as any).guy = ((s as any).guy ?? 0) + (1);
    ((s as any).bmSEX ?? {})[String((s as any).Tboynum ?? 0)] = (((s as any).bmSEX ?? {})[String((s as any).Tboynum ?? 0)] ?? 0) + (1);
    qspCall(s, 'money', 'earn', 2000);
    qspCall(s, 'fame', 'pav', 'prostitute', Math.floor(Math.random() * 5) + 2);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/sex/hotel/money.jpg');
    // TODO-QSP: dynamic text: You smile at him and quickly put away the money he counted out for you. You bare...
    scene.text(`You smile at him and quickly put away the money he counted out for you. You barely finish the sentence before ${((s as any).npcdesc ?? 0)} pushes you down on the bed and starts taking off your top.`);
    scene.text('"Finally! I\'ve been dying to fuck you since I saw you!" he grunts in your ear.');
    qspCall(s, 'arousal', 'foreplay', 5, 'prostitution');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt 'pav_disco_sex', 'hotelsex', 'paid'
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Give him a blowjob', handler: (st: GameState) => {
    // TODO-QSP: gt 'pav_disco_sex', 'hotelsex', 'unpaid'
  } },
    { label: 'Have sex with him', handler: (st: GameState) => {
    if ((!((s as any).boynumBlock ?? 0))) {
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    if (((s as any).boynumBlock ?? 0) > 0  &&  ((s as any).bmTOTSEX ?? 0)?.[String((s as any).Tboynum ?? 0)] === 0) {
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    (s as any).hotel_sex = 1;
    ((s as any).bmSEX ?? {})[String((s as any).Tboynum ?? 0)] = (((s as any).bmSEX ?? {})[String((s as any).Tboynum ?? 0)] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/sex/hotel/foreplay.jpg');
    // TODO-QSP: dynamic text: <<$npcdesc>> pushes you down on the bed and starts taking off your top.
    scene.text(`${((s as any).npcdesc ?? 0)} pushes you down on the bed and starts taking off your top.`);
    scene.text('"Finally! I\'ve been dying to fuck you since the moment I saw you!" he says.');
    qspCall(s, 'arousal', 'foreplay', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt 'pav_disco_sex', 'hotelsex', 'unpaid'
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterHotelsex(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).boynumBlock ?? 0))) {
    (s as any).guy = ((s as any).guy ?? 0) + (1);
  }
  if (((s as any).boynumBlock ?? 0) > 0  &&  ((s as any).bmTOTSEX ?? 0)?.[String((s as any).Tboynum ?? 0)] === 0) {
    (s as any).guy = ((s as any).guy ?? 0) + (1);
  }
  ((s as any).bmBJ ?? {})[String((s as any).Tboynum ?? 0)] = (((s as any).bmBJ ?? {})[String((s as any).Tboynum ?? 0)] ?? 0) + (1);
  scene.img('images/locations/pavlovsk/community/disco/sex/hotel/foreplay.jpg');
  scene.text('He pulls your top aside to expose your breasts. He fondles them, followed by a few kisses and caresses before he undresses you more. Unable to wait anymore, he pulls his dick out of his pants and pushes you down to your knees.');
  if (((s as any).locArgs?.[1] ?? 0) === 'paid') {
    (s as any).temp_paid = 1;
    qspCall(s, 'arousal', 'foreplay', 10, 'prostitution');
  } else {
    (s as any).temp_paid = 0;
    qspCall(s, 'arousal', 'foreplay', 10);
  }
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Suck his dick', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/sex/hotel/bj1.jpg');
    // TODO-QSP: dynamic text: You get down on your knees and slowly start stroking his cock. As it grows stiff...
    scene.text(`You get down on your knees and slowly start stroking his cock. As it grows stiffer, you lick your lips in anticipation before carefully clasping your ${((s as any).pc_desc ?? 0)?.['lips']} lips around the tip.`);
    scene.text('You stroke your hand along his shaft in rhythm with your head bobbing up and down on his cock, and as he becomes more aroused, he starts moaning and thrusting into your mouth, going deeper every time.');
    if (((s as any).temp_paid ?? 0) === 1) {
      qspCall(s, 'arousal', 'bj', 5, 'prostitution');
    } else {
      qspCall(s, 'arousal', 'bj', 5);
    }
    qspCall(s, 'dinSex', 'std_trigger_oral');
    qspCall(s, 'stat', '');
    if (((s as any).lose_virginity_event ?? 0) === 0  &&  (!((s as any).hotel_sex ?? 0))) {
      scene.actions([
        { label: 'Keep sucking', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/sex/hotel/bj2.jpg');
    scene.text('You slide his dick as deeply down your throat as you can without gagging as your free hand slides between your legs and your fingers slip inside your pussy. You suck harder as your arousal builds, flicking your clit every time he thrusts his cock down your throat.');
    if (((s as any).temp_paid ?? 0) === 1) {
      qspCall(s, 'arousal', 'bj', 10, 'prostitution');
      qspCall(s, 'arousal', 'masturbate', (-10), 'prostitution');
    } else {
      qspCall(s, 'arousal', 'bj', 10);
      qspCall(s, 'arousal', 'masturbate', (-10));
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Swallow his load', handler: (st: GameState) => {
    (s as any).spafinloc = 12;
    qspCall(s, 'cum_manage', '');
    scene.img('images/locations/pavlovsk/community/disco/sex/hotel/bj2.jpg');
    scene.text('You keep sucking his dick for a while longer before his breathing quickens, and you hear him making soft grunts. Looking up at him with your lips clasped around his member, you can see his eyes are closed in pleasure. You keep watching him, sucking harder and speeding up, making him twitch and moan before suddenly feeling a hot jet of liquid coat your tongue and sliding down your throat. Spurt after spurt keeps filling your mouth.');
    scene.text('He cums so much that you feel like your mouth is about to overflow with it all, but swallowing as fast as you can, you manage to get it all down. As he pulls his dick from your mouth, a strand of cum stretches from the tip of his cock back down to your lips. Then, smirking, he wipes his cock against your lips before tucking it back in his pants.');
    if (((s as any).temp_paid ?? 0) === 1) {
      qspCall(s, 'arousal', 'bj', 10, 'prostitution');
      qspCall(s, 'arousal', 'masturbate', (-10), 'prostitution');
    } else {
      qspCall(s, 'arousal', 'bj', 10);
      qspCall(s, 'arousal', 'masturbate', (-10));
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get cleaned up', goto: ['pav_disco_sex', 'End'] },
    ]);
  } },
      { label: 'Let him cum on your face', handler: (st: GameState) => {
    (s as any).spafinloc = 11;
    qspCall(s, 'cum_manage', '');
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/facial/facial37.jpg');
    scene.text('You keep sucking his dick for a while longer before his breathing quickens, and you hear him making soft grunts. Looking up at him with your lips clasped around his member, you can see his eyes are closed in pleasure. You watch him closely, sucking harder and speeding up, making him twitch and moan before suddenly feeling a hot jet of liquid coat your tongue.');
    // TODO-QSP: dynamic text: You quickly pull back, letting his member pop out of your mouth and smile up at ...
    scene.text(`You quickly pull back, letting his member pop out of your mouth and smile up at him happily when you feel another jet of sperm immediately land on your forehead. You close your eyes in pleasure and let him cover the rest of your face with his load, which ${((s as any).npcdesc ?? 0)} does with great enthusiasm.`);
    if (((s as any).temp_paid ?? 0) === 1) {
      qspCall(s, 'arousal', 'bj', 10, 'prostitution');
      qspCall(s, 'arousal', 'masturbate', (-10), 'prostitution');
    } else {
      qspCall(s, 'arousal', 'bj', 10);
      qspCall(s, 'arousal', 'masturbate', (-10));
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get cleaned up', goto: ['pav_disco_sex', 'End'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    if ((!((s as any).lose_virginity_event ?? 0))) {
      scene.actions([
        { label: 'Suggest he fucks your ass', handler: (st: GameState) => {
    (s as any).hotel_sex = 0;
    ((s as any).bmANAL ?? {})[String((s as any).Tboynum ?? 0)] = (((s as any).bmANAL ?? {})[String((s as any).Tboynum ?? 0)] ?? 0) + (1);
    scene.img('images/locations/pavlovsk/community/disco/sex/hotel/anal1.jpg');
    scene.text('You pull yourself away from his cock, your lips making a loud pop as it leaves your mouth. You quickly jump up on the bed, lay yourself down on your back and lift your knees all the way up to your breasts before reaching down with one hand to pull one of your ass cheeks aside.');
    qspCall(s, 'arousal', 'auto_lube', 'anal');
    // TODO-QSP: dynamic text: <<$npcdesc>> takes the hint and starts pushing the head of his dick against your...
    scene.text(`${((s as any).npcdesc ?? 0)} takes the hint and starts pushing the head of his dick against your asshole. Moving slowly but insistently, the head of his dick pops into your ass. He pauses for a moment to let you adjust before he slowly starts thrusting in and out, fucking you carefully and stretching your hole. He slowly but steadily works his dick deeper into your ass, all while picking up speed.`);
    if (((s as any).temp_paid ?? 0) === 1) {
      qspCall(s, 'arousal', 'anal', 10, 'prostitution');
    } else {
      qspCall(s, 'arousal', 'anal', 10);
    }
    qspCall(s, 'dinSex', 'std_trigger');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish him off', handler: (st: GameState) => {
    (s as any).spafinloc = 11;
    qspCall(s, 'cum_manage', '');
    scene.img('images/shared/sex/cum/facial/facial37.jpg');
    // TODO-QSP: dynamic text: After he fucks your ass for a while, you look him in the eyes and say, "I want y...
    scene.text(`After he fucks your ass for a while, you look him in the eyes and say, "I want you to cum on my face." He grins and pulls his dick out of your hole before you slide off the bed and onto your knees. Not wasting any time, you start jerking him off and within seconds, his load bursts out. You smile up at him. Then, happily, eyes closed as the first jet of sperm lands on your forehead. It takes a surprisingly long time for him to cover your face with his load, which ${((s as any).npcdesc ?? 0)} does with great enthusiasm.`);
    if (((s as any).temp_paid ?? 0) === 1) {
      qspCall(s, 'arousal', 'hj', 10, 'prostitution');
    } else {
      qspCall(s, 'arousal', 'hj', 10);
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get cleaned up', goto: ['pav_disco_sex', 'End'] },
    ]);
  } },
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).spafinloc = 3;
    qspCall(s, 'cum_manage', '');
    ((s as any).bmANAL ?? {})[String((s as any).Tboynum ?? 0)] = (((s as any).bmANAL ?? {})[String((s as any).Tboynum ?? 0)] ?? 0) + (1);
    scene.img('images/locations/pavlovsk/community/disco/sex/hotel/anal2.jpg');
    // TODO-QSP: dynamic text: Since you are on your back, you are a bit lower than ideal. <<$npcdesc>> is havi...
    scene.text(`Since you are on your back, you are a bit lower than ideal. ${((s as any).npcdesc ?? 0)} is having trouble getting enough leverage to fuck your ass with as much force as he'd like, so he pulls his cock out of your hole and flips you over. You get yourself up on your hands and knees, and he pulls your hips back towards him, and within seconds, you feel him thrust his cock balls deep back up your ass. He grabs your hips and starts pounding your asshole as hard as he can, his balls slapping against your clit with every thrust, the sound of hitting flesh getting louder as his hips join in, smacking against your ass. You feel him begin to cum in your ass, but he's not done with you yet.`);
    if (((s as any).temp_paid ?? 0) === 1) {
      qspCall(s, 'arousal', 'anal', 10, 'prostitution');
    } else {
      qspCall(s, 'arousal', 'anal', 10);
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish him off', handler: (st: GameState) => {
    (s as any).spafinloc = 11;
    qspCall(s, 'cum_manage', '');
    scene.img('images/shared/sex/cum/facial/facial37.jpg');
    // TODO-QSP: dynamic text: After he fucks your ass for a while, you look him in the eyes and say, "I want y...
    scene.text(`After he fucks your ass for a while, you look him in the eyes and say, "I want you to cum on my face." He grins and pulls his dick out of your hole before you slide off the bed and onto your knees. Not wasting any time, you start jerking him off and within seconds, his load bursts out. You smile up at him. Happily, eyes closed as the first jet of sperm lands on your forehead. It takes a surprisingly long time for him to cover your face with his load, which ${((s as any).npcdesc ?? 0)} does with great enthusiasm.`);
    if (((s as any).temp_paid ?? 0) === 1) {
      qspCall(s, 'arousal', 'hj', 10, 'prostitution');
    } else {
      qspCall(s, 'arousal', 'hj', 10);
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get cleaned up', goto: ['pav_disco_sex', 'End'] },
    ]);
  } },
      { label: 'Let him fuck your pussy too', handler: (st: GameState) => {
    ((s as any).bmSEX ?? {})[String((s as any).Tboynum ?? 0)] = (((s as any).bmSEX ?? {})[String((s as any).Tboynum ?? 0)] ?? 0) + (1);
    scene.img('images/locations/pavlovsk/community/disco/sex/hotel/fuck2.jpg');
    scene.text('After some time, he pulls out of you. Before you can even ask why he turns you on your side and slides his dick into your wet pussy. He slides himself balls-deep into you and starts fucking you, his thighs pounding against your ass cheeks.');
    scene.text('He is really getting into it. His movements are almost frenzied in their pace.');
    if (((s as any).temp_paid ?? 0) === 1) {
      qspCall(s, 'arousal', 'vaginal', 10, 'prostitution');
    } else {
      qspCall(s, 'arousal', 'vaginal', 10);
    }
    qspCall(s, 'dinSex', 'std_trigger');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck him off', handler: (st: GameState) => {
    (s as any).lose_virginity_event = 0;
    scene.img('images/locations/pavlovsk/community/disco/sex/hotel/bj2.jpg');
    scene.text('"Let me suck you off. I want to taste myself on you," you tell him, not wanting him to cum inside you. He grins and pulls out of you, letting you slide off the bed onto your knees. You slide his dick as deeply down your throat as you can without gagging. Sucking up every drop of pussy juice clinging to his cock and licking the occasional stray drop from his balls. You slip your free hand down between your legs, and your fingers slide into your well fucked pussy. You suck harder as your arousal builds, flicking your clit every time he thrusts his cock down your throat.');
    if (((s as any).temp_paid ?? 0) === 1) {
      qspCall(s, 'arousal', 'bj', 10, 'prostitution');
      qspCall(s, 'arousal', 'masturbate', (-10), 'prostitution');
    } else {
      qspCall(s, 'arousal', 'bj', 10);
      qspCall(s, 'arousal', 'masturbate', (-10));
    }
    qspCall(s, 'dinSex', 'std_trigger_oral');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Swallow his load', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/sex/hotel/bj2.jpg');
    scene.text('You keep sucking his dick for a while longer before his breathing quickens, and you hear him making soft grunts. Looking up at him with your lips clasped around his member, you can see his eyes are closed in pleasure. You keep watching him, sucking harder and speeding up, making him twitch and moan before suddenly feeling a hot jet of liquid coat your tongue and sliding down your throat. Spurt after spurt keeps filling your mouth.');
    scene.text('He cums so much that you feel like your mouth is about to overflow with it all, but swallowing as fast as you can, you manage to get it all down. As he pulls his dick from your mouth, a strand of cum stretches from the tip of his cock back down to your lips. Then, smirking, he wipes his cock against your lips before tucking it back in his pants.');
    if (((s as any).temp_paid ?? 0) === 1) {
      qspCall(s, 'arousal', 'bj', 10, 'prostitution');
      qspCall(s, 'arousal', 'masturbate', (-10), 'prostitution');
    } else {
      qspCall(s, 'arousal', 'bj', 10);
      qspCall(s, 'arousal', 'masturbate', (-10));
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get cleaned up', goto: ['pav_disco_sex', 'End'] },
    ]);
  } },
      { label: 'Let him cum on your face', handler: (st: GameState) => {
    (s as any).spafinloc = 11;
    qspCall(s, 'cum_manage', '');
    scene.img('images/shared/sex/cum/facial/facial37.jpg');
    scene.text('You keep sucking his dick for a while longer before his breathing quickens, and you hear him making soft grunts. Looking up at him with your lips clasped around his member, you can see his eyes are closed in pleasure. You watch him closely, sucking harder and speeding up, making him twitch and moan before suddenly feeling a hot jet of liquid coat your tongue.');
    // TODO-QSP: dynamic text: You quickly pull back, letting his member pop out of your mouth and smile up at ...
    scene.text(`You quickly pull back, letting his member pop out of your mouth and smile up at him happily when you feel another jet of sperm immediately land on your forehead. You close your eyes in pleasure and let him cover the rest of your face with his load, which ${((s as any).npcdesc ?? 0)} does with great enthusiasm.`);
    if (((s as any).temp_paid ?? 0) === 1) {
      qspCall(s, 'arousal', 'bj', 10, 'prostitution');
      qspCall(s, 'arousal', 'masturbate', (-10), 'prostitution');
    } else {
      qspCall(s, 'arousal', 'bj', 10);
      qspCall(s, 'arousal', 'masturbate', (-10));
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get cleaned up', goto: ['pav_disco_sex', 'End'] },
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
    }
    scene.actions([
      { label: 'Lie down on his bed', handler: (st: GameState) => {
    ((s as any).bmSEX ?? {})[String((s as any).Tboynum ?? 0)] = (((s as any).bmSEX ?? {})[String((s as any).Tboynum ?? 0)] ?? 0) + (1);
    (s as any).hotel_sex = 0;
    scene.img('images/locations/pavlovsk/community/disco/sex/hotel/fuck1.jpg');
    // TODO-QSP: dynamic text: After sucking his dick, you stop, lie on the bed and spread your legs. <<$npcdes...
    scene.text(`After sucking his dick, you stop, lie on the bed and spread your legs. ${((s as any).npcdesc ?? 0)} watches you the whole time, taking his clothes off like a hawk. You barely have your legs spread before he's between them, already rubbing his slick cock along your pussy lips. He pushes forward gently, sliding his dick inside of your soaking pussy. He goes slow but quickly picks up the pace, soon pounding your balls deep.`);
    if (((s as any).temp_paid ?? 0) === 1) {
      qspCall(s, 'arousal', 'vaginal', 10, 'prostitution');
    } else {
      qspCall(s, 'arousal', 'vaginal', 10);
    }
    qspCall(s, 'dinSex', 'std_trigger');
    qspCall(s, 'stat', '');
    if ((!((s as any).lose_virginity_event ?? 0))) {
      scene.actions([
        { label: 'Suck him off', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/sex/hotel/bj2.jpg');
    scene.text('"Let me suck you off. I want to taste myself on you," you tell him, not wanting him to cum inside you. He grins and pulls out of you, letting you slide off the bed onto your knees. You slide his dick as deeply down your throat as you can without gagging, sucking up every drop of pussy juice clinging to his cock and licking the occasional stray drop from his balls. You slip your free hand down between your legs, and your fingers slide into your well fucked pussy. You suck harder as your arousal builds, flicking your clit every time he thrusts his cock down your throat.');
    if (((s as any).temp_paid ?? 0) === 1) {
      qspCall(s, 'arousal', 'bj', 10, 'prostitution');
      qspCall(s, 'arousal', 'masturbate', (-10), 'prostitution');
    } else {
      qspCall(s, 'arousal', 'bj', 10);
      qspCall(s, 'arousal', 'masturbate', (-10));
    }
    qspCall(s, 'dinSex', 'std_trigger_oral');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Swallow his load', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/sex/hotel/bj2.jpg');
    scene.text('You keep sucking his dick for a while longer before his breathing quickens, and you hear him making soft grunts. Looking up at him with your lips clasped around his member, you can see his eyes are closed in pleasure. You keep watching him, sucking harder and speeding up, making him twitch and moan before suddenly feeling a hot jet of liquid coat your tongue and sliding down your throat. Spurt after spurt keeps filling your mouth.');
    scene.text('He cums so much that you feel like your mouth is about to overflow with it all, but swallowing as fast as you can, you manage to get it all down. As he pulls his dick from your mouth, a strand of cum stretches from the tip of his cock back down to your lips. Then, smirking, he wipes his cock against your lips before tucking it back in his pants.');
    if (((s as any).temp_paid ?? 0) === 1) {
      qspCall(s, 'arousal', 'bj', 10, 'prostitution');
      qspCall(s, 'arousal', 'masturbate', (-10), 'prostitution');
    } else {
      qspCall(s, 'arousal', 'bj', 10);
      qspCall(s, 'arousal', 'masturbate', (-10));
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get cleaned up', goto: ['pav_disco_sex', 'End'] },
    ]);
  } },
      { label: 'Let him cum on your face', handler: (st: GameState) => {
    (s as any).spafinloc = 11;
    qspCall(s, 'cum_manage', '');
    scene.img('images/shared/sex/cum/facial/facial37.jpg');
    scene.text('You keep sucking his dick for a while longer before his breathing quickens, and you hear him making soft grunts. Then, looking up at him with your lips clasped around his member, you can see his eyes are closed in pleasure. You watch him closely, sucking harder and speeding up, making him twitch and moan before suddenly feeling a hot jet of liquid coat your tongue.');
    // TODO-QSP: dynamic text: You quickly pull back, letting his member pop out of your mouth and smile up at ...
    scene.text(`You quickly pull back, letting his member pop out of your mouth and smile up at him happily when you feel another jet of sperm immediately land on your forehead. You close your eyes in pleasure and let him cover the rest of your face with his load, which ${((s as any).npcdesc ?? 0)} does with great enthusiasm.`);
    if (((s as any).temp_paid ?? 0) === 1) {
      qspCall(s, 'arousal', 'bj', 10, 'prostitution');
      qspCall(s, 'arousal', 'masturbate', (-10), 'prostitution');
    } else {
      qspCall(s, 'arousal', 'bj', 10);
      qspCall(s, 'arousal', 'masturbate', (-10));
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get cleaned up', goto: ['pav_disco_sex', 'End'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    ((s as any).bmSEX ?? {})[String((s as any).Tboynum ?? 0)] = (((s as any).bmSEX ?? {})[String((s as any).Tboynum ?? 0)] ?? 0) + (1);
    scene.img('images/locations/pavlovsk/community/disco/sex/hotel/fuck2.jpg');
    scene.text('After some time, he pulls out of you, and before you can even ask why, he turns you on your side and slides his dick back into your wet pussy. Then, he slides himself balls deep in you again and starts fucking you, his thighs pounding against your ass cheeks.');
    scene.text('He seems to be really getting into it. His movements are almost frenzied in their pace as he leans forward towards you and says, "I want to fuck your ass."');
    if (((s as any).temp_paid ?? 0) === 1) {
      qspCall(s, 'arousal', 'vaginal', 10, 'prostitution');
    } else {
      qspCall(s, 'arousal', 'vaginal', 10);
    }
    qspCall(s, 'dinSex', 'std_trigger');
    qspCall(s, 'stat', '');
    if ((!((s as any).lose_virginity_event ?? 0))) {
      scene.actions([
        { label: 'Let him fuck your ass', handler: (st: GameState) => {
    ((s as any).bmANAL ?? {})[String((s as any).Tboynum ?? 0)] = (((s as any).bmANAL ?? {})[String((s as any).Tboynum ?? 0)] ?? 0) + (1);
    scene.img('images/locations/pavlovsk/community/disco/sex/hotel/anal1.jpg');
    scene.text('You nod and roll over onto your back before pulling your knees up to your breasts. You reach down with one hand and pull one of your ass cheeks aside.');
    qspCall(s, 'arousal', 'auto_lube', 'anal');
    scene.text('He takes the hint and pushes the head of his dick against your asshole. It soon pops into your ass, and he pauses to let you adjust before slowly fucking you. Then, he slowly but steadily works his dick deeper in your ass while slowly picking up speed.');
    if (((s as any).temp_paid ?? 0) === 1) {
      qspCall(s, 'arousal', 'anal', 10, 'prostitution');
    } else {
      qspCall(s, 'arousal', 'anal', 10);
    }
    qspCall(s, 'dinSex', 'std_trigger');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish him off', handler: (st: GameState) => {
    (s as any).spafinloc = 11;
    qspCall(s, 'cum_manage', '');
    scene.img('images/shared/sex/cum/facial/facial37.jpg');
    // TODO-QSP: dynamic text: After he fucks your ass for a while, you look him in the eyes and say, "I want y...
    scene.text(`After he fucks your ass for a while, you look him in the eyes and say, "I want you to cum on my face." He grins and pulls his dick out of your hole before you slide off the bed and onto your knees. Not wasting any time, you start jerking him off and within seconds, his load bursts out. You smile up at him. Then, happily, eyes closed as the first jet of sperm lands on your forehead. It takes a surprisingly long time for him to cover your face with his load, which ${((s as any).npcdesc ?? 0)} does with great enthusiasm.`);
    if (((s as any).temp_paid ?? 0) === 1) {
      qspCall(s, 'arousal', 'hj', 10, 'prostitution');
    } else {
      qspCall(s, 'arousal', 'hj', 10);
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get cleaned up', goto: ['pav_disco_sex', 'End'] },
    ]);
  } },
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).spafinloc = 3;
    qspCall(s, 'cum_manage', '');
    ((s as any).bmANAL ?? {})[String((s as any).Tboynum ?? 0)] = (((s as any).bmANAL ?? {})[String((s as any).Tboynum ?? 0)] ?? 0) + (1);
    scene.img('images/locations/pavlovsk/community/disco/sex/hotel/anal2.jpg');
    // TODO-QSP: dynamic text: Since you are on your back, you are a bit lower than ideal. <<$npcdesc>> is havi...
    scene.text(`Since you are on your back, you are a bit lower than ideal. ${((s as any).npcdesc ?? 0)} is having trouble getting enough leverage to fuck your ass with as much force as he'd like, so he pulls his cock out of your hole and flips you over. You get yourself up on your hands and knees as he pulls your hips back towards him, and within seconds, you feel him thrust his cock balls deep back up your ass. He grabs your hips and starts pounding your asshole as hard as he can, his balls slapping against your clit with every thrust, the sound of hitting flesh getting louder as his hips join in, smacking against your ass. You feel him begin to cum in your ass, but he's not done with you yet.`);
    if (((s as any).temp_paid ?? 0) === 1) {
      qspCall(s, 'arousal', 'anal', 10, 'prostitution');
    } else {
      qspCall(s, 'arousal', 'anal', 10);
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish him off', handler: (st: GameState) => {
    (s as any).spafinloc = 11;
    qspCall(s, 'cum_manage', '');
    scene.img('images/shared/sex/cum/facial/facial37.jpg');
    // TODO-QSP: dynamic text: After he fucks your ass for a while, you turn to look over your shoulder and say...
    scene.text(`After he fucks your ass for a while, you turn to look over your shoulder and say, "I want you to cum on my face." He grins and pulls his dick out of your hole before you slide off the bed and onto your knees. Not wasting any time, you start jerking him off and within seconds, his load bursts out. You smile up at him. Then, happily, eyes closed as the first jet of sperm lands on your forehead. It takes a surprisingly long time for him to cover your face with his load, which ${((s as any).npcdesc ?? 0)} does with great enthusiasm.`);
    if (((s as any).temp_paid ?? 0) === 1) {
      qspCall(s, 'arousal', 'hj', 10, 'prostitution');
    } else {
      qspCall(s, 'arousal', 'hj', 10);
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get cleaned up', goto: ['pav_disco_sex', 'End'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Suck him off', handler: (st: GameState) => {
    (s as any).lose_virginity_event = 0;
    scene.img('images/locations/pavlovsk/community/disco/sex/hotel/bj2.jpg');
    scene.text('"Let me suck you off. I want to taste myself on you," you tell him, not wanting him to cum inside you. He grins and pulls out of you, letting you slide off the bed onto your knees. You slide his dick as deeply down your throat as you can without gagging, sucking up every drop of pussy juice clinging to his cock and licking the occasional stray drop from his balls. You slip your free hand down between your legs, and your fingers slide into your well fucked pussy. You suck harder as your arousal builds, flicking your clit every time he thrusts his cock down your throat.');
    if (((s as any).temp_paid ?? 0) === 1) {
      qspCall(s, 'arousal', 'bj', 10, 'prostitution');
      qspCall(s, 'arousal', 'masturbate', (-10), 'prostitution');
    } else {
      qspCall(s, 'arousal', 'bj', 10);
      qspCall(s, 'arousal', 'masturbate', (-10));
    }
    qspCall(s, 'dinSex', 'std_trigger_oral');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Swallow his load', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/sex/hotel/bj2.jpg');
    scene.text('You keep sucking his dick for a while longer before his breathing quickens, and you hear him making soft grunts. Looking up at him with your lips clasped around his member, you can see his eyes are closed in pleasure. You keep watching him, sucking harder and speeding up, making him twitch and moan before suddenly feeling a hot jet of liquid coat your tongue and sliding down your throat. Spray after spray keeps filling your mouth.');
    scene.text('He cums so much that you feel like your mouth is about to overflow with it all, but swallowing as fast as you can, you manage to get it all down. As he pulls his dick from your mouth, a strand of cum stretches from the tip of his cock back down to your lips. Then, smirking, he wipes his cock against your lips before tucking it back in his pants.');
    if (((s as any).temp_paid ?? 0) === 1) {
      qspCall(s, 'arousal', 'bj', 10, 'prostitution');
      qspCall(s, 'arousal', 'masturbate', (-10), 'prostitution');
    } else {
      qspCall(s, 'arousal', 'bj', 10);
      qspCall(s, 'arousal', 'masturbate', (-10));
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get cleaned up', goto: ['pav_disco_sex', 'End'] },
    ]);
  } },
      { label: 'Let him cum on your face', handler: (st: GameState) => {
    (s as any).spafinloc = 11;
    qspCall(s, 'cum_manage', '');
    scene.img('images/shared/sex/cum/facial/facial37.jpg');
    scene.text('You keep sucking his dick for a while longer before his breathing quickens, and you hear him making soft grunts. Then, looking up at him with your lips clasped around his member, you can see his eyes are closed in pleasure. You watch him closely, sucking harder and speeding up, making him twitch and moan before suddenly feeling a hot jet of liquid coat your tongue.');
    // TODO-QSP: dynamic text: You quickly pull back, letting his member pop out of your mouth and smile up at ...
    scene.text(`You quickly pull back, letting his member pop out of your mouth and smile up at him happily when you feel another jet of sperm immediately land on your forehead. You close your eyes in pleasure and let him cover the rest of your face with his load, which ${((s as any).npcdesc ?? 0)} does with great enthusiasm.`);
    if (((s as any).temp_paid ?? 0) === 1) {
      qspCall(s, 'arousal', 'bj', 10, 'prostitution');
      qspCall(s, 'arousal', 'masturbate', (-10), 'prostitution');
    } else {
      qspCall(s, 'arousal', 'bj', 10);
      qspCall(s, 'arousal', 'masturbate', (-10));
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get cleaned up', goto: ['pav_disco_sex', 'End'] },
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
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/pc/activities/misc/dress_2.mp4');
  // TODO-QSP: dynamic text: After you relax, you smile at <<$npcdesc>> and say, "That was fun, but I really ...
  scene.text(`After you relax, you smile at ${((s as any).npcdesc ?? 0)} and say, "That was fun, but I really should get going..."`);
  // TODO-QSP: dynamic text: <<$npcdesc>> stretches lazily on the bed, not bothering to get up. "You were gre...
  scene.text(`${((s as any).npcdesc ?? 0)} stretches lazily on the bed, not bothering to get up. "You were great, ${((s as any).pcs_nickname ?? 0)}! I hope I'll run into you again next time I'm in Pavlovsk!"`);
  if (((s as any).cumloc ?? 0)[11] > 0) {
    (s as any).cumspclnt = 12;
    qspCall(s, 'cum_cleanup', '');
    scene.text('You look around the room and find a packet of wipes. You take one and quickly wipe the sperm off your face to make yourself presentable enough to go outside.');
  }
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Leave the hotel', goto: ['pav_market', ''] },
  ]);
  scene.build();
}

function enterDrugUser(s: GameState, scene: SceneBuilder): void {
  (s as any).BeInOtel = ((s as any).BeInOtel ?? 0) + (1);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/disco/sex/hotel/otel.jpg');
  // TODO-QSP: dynamic text: <<$npcdesc>> has a nice room. He tells you to sit on the bed while he searches f...
  scene.text(`${((s as any).npcdesc ?? 0)} has a nice room. He tells you to sit on the bed while he searches for something. "Where did I put it?"`);
  scene.text('His face lights up when he finds what he\'s looking for. Then, he quickly sits by the table and gestures for you to come over.');
  // TODO-QSP: dynamic text: You get up and curiously walk over to the table. <<$npcdesc>>'s spread some powd...
  scene.text(`You get up and curiously walk over to the table. ${((s as any).npcdesc ?? 0)}'s spread some powder on the table, working hard to split it into equal lines. "It's your lucky day ${((s as any).pcs_nickname ?? 0)}. You'll have the time of your life with this stuff. Everything you do becomes much better when you add this to the mix."`);
  scene.text('You hesitantly back up a little. "I-I don\'t know... I mean, I don\'t even know you, and who knows what might be in that bag."');
  scene.text('He turns to you and smirks. "You followed me back here, right? But believe me when I tell you this stuff is the best you\'ll ever get your hands on. A friend of mine hooked me up - he gets it from this guy in the city who knows his stuff."');
  qspCall(s, 'willpower', 'drugs', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'drugs', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['pav_disco_sex', 'no drugs'] },
    ]);
  }
  scene.actions([
    { label: 'Try some', goto: ['pav_disco_sex', 'drugs'] },
  ]);
  scene.build();
}

function enterDrugs(s: GameState, scene: SceneBuilder): void {
  if (((s as any).drugVars ?? 0)?.['city_drugden'] === 0) {
    ((s as any).drugVars ?? {})['city_drugden'] = 1;
  }
  qspCall(s, 'drugs', 'cocaine', 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/disco/sex/hotel/snort1.jpg');
  scene.text('He\'s planted a tiny nagging seed in your thoughts, and now you\'re too curious to refuse. You give him a nod and walk closer.');
  scene.text('He cuts up a line and tells you to close one of your nostrils with a finger while you snort it in with the other, using a rolled-up Ruble.');
  scene.text('You hunch over the powder, line yourself and snort it. The tingling and dry itching sensation is almost too much, and you suddenly feel like your nostril is on fire.');
  scene.text('You don\'t really feel anything different for a while. "I think you got scammed with this stuff. I don\'t feel a thing... " you complain, slightly disappointed. Then, suddenly, you feel your heartbeat speeding up, your nipples getting hard, and your pussy getting wet. In fact, it feels like your pussy is soaked more than ever, and you\'re feeling extremely horny. You desperately want, no... you need to fuck something as soon as you can.');
  // TODO-QSP: dynamic text: <<$npcdesc>> looks at you and smirks as he notices the powder kicking in. "Feels...
  scene.text(`${((s as any).npcdesc ?? 0)} looks at you and smirks as he notices the powder kicking in. "Feels great, right? Ready for some real fun?"`);
  qspCall(s, 'willpower', 'anal', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'anal', 'resist', 'hard');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/sex/hotel/leave.jpg');
    scene.text('Even though you\'ve never felt this aroused, you feel that you made a mistake and need to leave before it\'s too late for you to resist him.');
    scene.text('You try to excuse yourself, saying it wasn\'t your intention to lead him on...');
    // TODO-QSP: dynamic text: <<$npcdesc>> stops for a moment, and you notice that he's clearly affected by th...
    scene.text(`${((s as any).npcdesc ?? 0)} stops for a moment, and you notice that he's clearly affected by the drugs. His eyes flare up as he leaps from the chair, shouting that you're just some whore that was after his drugs.`);
    // TODO-QSP: dynamic text: He grabs you and shoves you to the door, throwing you outside. You stand in shoc...
    scene.text(`He grabs you and shoves you to the door, throwing you outside. You stand in shock as the drugs take hold of you, and you feel yourself becoming incredibly aroused. You knock on the door, but ${((s as any).npcdesc ?? 0)} refuses to open it. Finally, you decide to leave... maybe you'll get lucky somewhere else.`);
    scene.actions([
      { label: 'Leave the hotel', goto: ['pav_market', ''] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Nod', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/sex/hotel/hotel1.jpg');
    scene.text('You can barely contain your eagerness and get more excited by the second. By now, you can feel the wet spot in your panties forming, and you\'re longing after his cock as your pussy just screams to be filled.');
    // TODO-QSP: dynamic text: <<$npcdesc>> gets up from the chair and stands behind you. He starts roughly paw...
    scene.text(`${((s as any).npcdesc ?? 0)} gets up from the chair and stands behind you. He starts roughly pawing at your breasts through the fabric - even his hamfisted groping is turning you on.`);
    // TODO-QSP: dynamic text: The two of you start making out, and you let out a little moan when <<$npcdesc>>...
    scene.text(`The two of you start making out, and you let out a little moan when ${((s as any).npcdesc ?? 0)} starts stroking your thighs.`);
    // TODO-QSP: dynamic text: Before you know it, you've been stripped down to your underwear while <<$npcdesc...
    scene.text(`Before you know it, you've been stripped down to your underwear while ${((s as any).npcdesc ?? 0)} squeezes your breasts. He gives you a few more kisses and hooks one finger into your panties before looking at you. "Time for some pleasure."`);
    qspCall(s, 'arousal', 'foreplay', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Follow him', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/sex/hotel/hotel2.jpg');
    // TODO-QSP: dynamic text: Giddy with excitement, you eagerly remove your underwear and let <<$npcdesc>> le...
    scene.text(`Giddy with excitement, you eagerly remove your underwear and let ${((s as any).npcdesc ?? 0)} lead you to a grand mirror, where he drops down to his knees, spreads your legs wide and shoves his face into your crotch, wildly licking your sopping wet pussy.`);
    scene.text('You can feel your pussy pulsing as he eats you out, your rampant arousal overwhelming you.');
    scene.text('Before long, you start shuddering in pleasure, and within seconds, you begin rolling your hips as the satisfaction is too much for you to handle. Finally, you let out a loud sigh, grab him by the hair and clench his head between your thighs as you orgasm wildly, your knees turning to jelly from the sweet satisfaction.');
    qspCall(s, 'arousal', 'cuni', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Not done yet', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (50);
    scene.img('images/locations/pavlovsk/community/disco/sex/hotel/hotel3.jpg');
    // TODO-QSP: dynamic text: Just as you're about to drift away and savour the fantastic orgasm you just had,...
    scene.text(`Just as you're about to drift away and savour the fantastic orgasm you just had, ${((s as any).npcdesc ?? 0)} grabs and tugs you over to the couch. Your legs are weak, and you barely manage to walk.`);
    // TODO-QSP: dynamic text: <<$npcdesc>> lays you down and smiles. "It's your lucky day. That was so hot tha...
    scene.text(`${((s as any).npcdesc ?? 0)} lays you down and smiles. "It's your lucky day. That was so hot that there's no way I can fuck you right now. I'm way too horny, and if I do, I'll cum as soon as I stick my dick in you. So you just spread your beautiful legs again and let me have another taste."`);
    // TODO-QSP: dynamic text: <<$npcdesc>> lowers his head and begins sucking on your super-sensitive clit. Wh...
    scene.text(`${((s as any).npcdesc ?? 0)} lowers his head and begins sucking on your super-sensitive clit. While doing that, he moves his hand between your ass cheeks and starts playing with your asshole, rubbing and massaging it lightly. You try to push his hand away, but he just tells you to relax.`);
    scene.text('He starts sucking your clit harder, his tongue flicking over it as he continues massaging your ass with his thumb. Then, just as you\'re about to cum again, he stops, making you sigh in frustrated disappointment.');
    qspCall(s, 'arousal', 'cuni', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Lick his cock', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/sex/hotel/hotel4.jpg');
    // TODO-QSP: dynamic text: "Now, don't be like that, <<$pcs_firstname>>. It's time for you to return the fa...
    scene.text(`"Now, don't be like that, ${((s as any).pcs_firstname ?? 0)}. It's time for you to return the favor," he says as he places himself in front of you with his cock hanging out freely.`);
    scene.text('You excitedly switch positions with him and grab his cock with your hand. "Go on, you can play with it," he says with a smirk.');
    scene.text('You eagerly stick out your tongue and start licking his cock, rolling your tongue around the head. You can feel it growing bigger and harder in your hands as you continue teasing him.');
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck his cock', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/sex/hotel/hotel5.jpg');
    scene.text('You take his cock into your mouth, wrapping your lips around it as you put one hand around the base and the other softly cupping his balls in your palm.');
    // TODO-QSP: dynamic text: You immediately start sucking his dick, bobbing your head up and down his shaft ...
    scene.text(`You immediately start sucking his dick, bobbing your head up and down his shaft roughly as your arousal takes over your actions. ${((s as any).npcdesc ?? 0)}'s breathing starts getting faster and heavier. Finally, he tries to stop you, telling you to slow down and lick his shaft instead.`);
    scene.text('You ignore him and start playing with his balls as well. Finally, after teasing him for a while, he makes you stop and says he wants to fuck your ass.');
    scene.text('You\'re hesitant at the suggestion, even feeling as horny as you are. Still, he quickly reassures you that having anal sex while high is a fantastic feeling.');
    scene.text('You nod and take his cock back in your mouth, taking it deep and lubing it up as much as possible.');
    (s as any).anal_slip = ((s as any).anal_slip ?? 0) + (4);
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'dinSex', 'std_trigger_oral');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Doggy', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/sex/hotel/hotel6.jpg');
    // TODO-QSP: dynamic text: <<$npcdesc>> makes you turn around with your ass towards him and gets into posit...
    scene.text(`${((s as any).npcdesc ?? 0)} makes you turn around with your ass towards him and gets into position behind you. He lines his cock up with your asshole, and then with one smooth and steady motion, he slowly eases his cock into your back door. You panic as he begins to work his way into you, stretching you wider than you thought possible.`);
    // TODO-QSP: dynamic text: You calm down a little, loosening your hole and allowing <<$npcdesc>> to move fa...
    scene.text(`You calm down a little, loosening your hole and allowing ${((s as any).npcdesc ?? 0)} to move faster. Seeing his chance, he grabs you by the hips and pushes himself deep into your ass. He slowly starts building up speed, and you feel your arousal building as you let yourself go and enjoy the feeling. You start pushing back against him, meeting him thrust for thrust and moaning loudly. "Harder, harder!" you moan, and he grabs your shoulders, letting you slam yourself back onto his cock.`);
    scene.text('You feel another orgasm building, but this one is different. It feels like it\'s coming from deeper inside you. "Harder! I\'m almost there. Make me cum again!" you scream as his thrusting becomes more frantic.');
    // TODO-QSP: dynamic text: <<$npcdesc>> speeds up his movements as you start shaking and shivering as your ...
    scene.text(`${((s as any).npcdesc ?? 0)} speeds up his movements as you start shaking and shivering as your orgasm hits, spraying girl-cum all over the bed cover as you pant.`);
    qspCall(s, 'arousal', 'anal', 5);
    qspCall(s, 'dinSex', 'std_trigger');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/sex/hotel/hotel7.jpg');
    // TODO-QSP: dynamic text: You barely know what's happening as <<$npcdesc>> pulls out of you, pulls you up ...
    scene.text(`You barely know what's happening as ${((s as any).npcdesc ?? 0)} pulls out of you, pulls you up onto your knees and starts jerking off in front of you, your head still fuzzy from your orgasm. It doesn't take long before he shoots his load over your face and breasts.`);
    scene.text('You try to swallow some as it hits your mouth, but you\'re still so dazed by your orgasm that you don\'t know what you\'re doing. "I told you sex is so much better with drugs." you faintly hear him saying.');
    scene.text('Even after that fantastic sex and multiple orgasms, you still feel unsatisfied and need more. You think about it for a moment and decide to ask. "If I wanted to get some of those drugs myself, who would I talk to?" He smiles and tells you that the dealer lives in a run-down area of the city residential area and gives you his name. You thank him for the information and get cleaned before heading out the door. As you walk down the hall, the urgent need to be filled by a cock returns, and you feel incredibly horny again already.');
    qspCall(s, 'arousal', 'foreplay', 5);
    qspCall(s, 'arousal', 'end');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (100);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave the room', goto: ['pav_market', ''] },
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
  } },
  ]);
  scene.build();
}

function enterNoDrugs(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/community/disco/sex/hotel/leave.jpg');
  scene.text('"There\'s no way I\'m doing that! Who knows what that powder is? I don\'t want to get raped. Have fun, loser."');
  // TODO-QSP: dynamic text: <<$npcdesc>> snorts deeply and looks over at you. "Too bad. You'll be missing ou...
  scene.text(`${((s as any).npcdesc ?? 0)} snorts deeply and looks over at you. "Too bad. You'll be missing out on a great party. This is some quality stuff..."`);
  // TODO-QSP: dynamic text: "I think I'll be fine, thanks." you retort as you leave the room. <<$npcdesc>> j...
  scene.text(`"I think I'll be fine, thanks." you retort as you leave the room. ${((s as any).npcdesc ?? 0)} just shrugs his shoulders and jumps straight back into what he started.`);
  scene.actions([
    { label: 'Leave the room', goto: ['pav_market', ''] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'pc_condom_func':
      enterPcCondomFunc(s, scene);
      break;
    case 'disco_sex_fame':
      enterDiscoSexFame(s, scene);
      break;
    case 'outside':
      enterOutside(s, scene);
      break;
    case 'decline':
      enterDecline(s, scene);
      break;
    case 'kissing':
      enterKissing(s, scene);
      break;
    case 'handjob':
      enterHandjob(s, scene);
      break;
    case 'handjob_end':
      enterHandjobEnd(s, scene);
      break;
    case 'blowjob':
      enterBlowjob(s, scene);
      break;
    case 'insert':
      enterInsert(s, scene);
      break;
    case 'virgin_fuck':
      enterVirginFuck(s, scene);
      break;
    case 'fuck_pre1':
      enterFuckPre1(s, scene);
      break;
    case 'fuck_pre2':
      enterFuckPre2(s, scene);
      break;
    case 'fuck1':
      enterFuck1(s, scene);
      break;
    case 'disco_cum':
      enterDiscoCum(s, scene);
      break;
    case 'disco_cum_facial':
      enterDiscoCumFacial(s, scene);
      break;
    case 'disco_mouth_react1':
      enterDiscoMouthReact1(s, scene);
      break;
    case 'disco_mouth_react2':
      enterDiscoMouthReact2(s, scene);
      break;
    case 'disco_cum_mouth':
      enterDiscoCumMouth(s, scene);
      break;
    case 'disco_condom1':
      enterDiscoCondom1(s, scene);
      break;
    case 'disco_condom2':
      enterDiscoCondom2(s, scene);
      break;
    case 'disco_condom_break':
      enterDiscoCondomBreak(s, scene);
      break;
    case 'disco_creampie':
      enterDiscoCreampie(s, scene);
      break;
    case 'creampie_surprise1':
      enterCreampieSurprise1(s, scene);
      break;
    case 'creampie_surprise2':
      enterCreampieSurprise2(s, scene);
      break;
    case 'disco_sex_end':
      enterDiscoSexEnd(s, scene);
      break;
    case 'hotel_pre':
      enterHotelPre(s, scene);
      break;
    case 'hotel':
      enterHotel(s, scene);
      break;
    case 'heating_up':
      enterHeatingUp(s, scene);
      break;
    case 'hotelsex':
      enterHotelsex(s, scene);
      break;
    case 'End':
      enterEnd(s, scene);
      break;
    case 'drug_user':
      enterDrugUser(s, scene);
      break;
    case 'drugs':
      enterDrugs(s, scene);
      break;
    case 'no drugs':
      enterNoDrugs(s, scene);
      break;
    default:
      enterPcCondomFunc(s, scene);
      break;
  }
}

export const pav_disco_sex: LocationDef = {
  name: 'pav_disco_sex',
  title: 'He pulls out a six pack and offers you a beer as you both si',
  region: 'pavlovsk',
  locationType: 'event',
  enter: enter,
};
