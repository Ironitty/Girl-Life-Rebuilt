import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterPcCondomFunc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0  &&  (!((s as any).preziktype ?? 0))) {
    (s as any).mc_inventory['equipped_condoms'] = ((s as any).mc_inventory['equipped_condoms'] ?? 0) - (1);
  } else {
    (s as any).mc_inventory['normal_condoms'] = ((s as any).mc_inventory['normal_condoms'] ?? 0) - (1);
  }
  qspCall(s, 'npcStat', '', ((s as any).npcID ?? 0), 0, 'normal');
  scene.build();
}

function enterDiscoSexFame(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'prostitute') {
    if (((s as any).temp ?? 0)?.['prostitution_offer'] === 0) {
      (s as any).temp['prostitution_offer'] = 100;
    }
    (s as any).temp['prostitution_paid'] = ((s as any).temp ?? 0)?.['prostitution_offer'];
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
        { label: 'Don\'t drink the beer', handler: (st: GameState) => {
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
            { label: 'Ask him to stop', handler: (st: GameState) => {
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
      qspCall(s, 'fame', 'pav', 'sex', Math.floor(Math.random() * 3) + 2);
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
    // TODO-QSP: xgt 'pav_disco_sex', 'handjob'
  } },
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
      qspCall(s, 'fame', 'pav', 'sex', Math.floor(Math.random() * 3) + 2);
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
    (s as any).bmFrend[String((s as any).Tboynum ?? 0)] = 1;
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
                { label: 'Go back to the disco', handler: (st: GameState) => {
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
              { label: 'Go back to the disco', handler: (st: GameState) => {
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
  if (((s as any).fame ?? 0)?.['pav_slut'] < ((s as any).ARGS ?? 0)[1]) {
    qspCall(s, 'willpower', 'sex', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Decline and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Decline and leave', handler: (st: GameState) => {
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
    (s as any).bmKISS[String((s as any).Tboynum ?? 0)] = ((s as any).bmKISS[String((s as any).Tboynum ?? 0)] ?? 0) + (1);
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
          { label: 'Go back to the disco', handler: (st: GameState) => {
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
    (s as any).bmTITS[String((s as any).Tboynum ?? 0)] = ((s as any).bmTITS[String((s as any).Tboynum ?? 0)] ?? 0) + (1);
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
    // TODO-QSP: xgt 'pav_disco_sex', 'handjob'
  } },
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
    // TODO-QSP: xgt 'pav_disco_sex', 'handjob'
  } },
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
            { label: 'Go back to the disco', handler: (st: GameState) => {
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
          { label: 'Remove his hands and walk away', handler: (st: GameState) => {
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
        { label: 'Stare at it', handler: (st: GameState) => {
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
        { label: 'Jerk him off', handler: (st: GameState) => {
    (s as any).bmHJ[String((s as any).Tboynum ?? 0)] = ((s as any).bmHJ[String((s as any).Tboynum ?? 0)] ?? 0) + (1);
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
    (s as any).bmBJ[String((s as any).Tboynum ?? 0)] = ((s as any).bmBJ[String((s as any).Tboynum ?? 0)] ?? 0) + (1);
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
      qspCall(s, 'fame', 'pav', 'sex', 'medium');
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
        { label: 'Spit', handler: (st: GameState) => {
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
          { label: 'Go back to the disco', handler: (st: GameState) => {
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
          { label: 'Go back to the disco', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'mast', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['pav_disco', ''] },
        ]);
      }
    }
    // TODO-QSP: xgt 'pav_disco_sex', 'handjob'
  } },
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
    (s as any).bmHJ[String((s as any).Tboynum ?? 0)] = ((s as any).bmHJ[String((s as any).Tboynum ?? 0)] ?? 0) + (1);
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
          { label: 'Make him cum', handler: (st: GameState) => {
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
    (s as any).mc_inventory['makeup_wipes'] = ((s as any).mc_inventory['makeup_wipes'] ?? 0) - (1);
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
  (s as any).pav_disco_bj[String((s as any).npcID ?? 0)] = ((s as any).totminut ?? 0);
  (s as any).bmBJ[String((s as any).Tboynum ?? 0)] = ((s as any).bmBJ[String((s as any).Tboynum ?? 0)] ?? 0) + (1);
  (s as any).gdk['bj'] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/public/outdoor/bj1.mp4');
  // TODO-QSP: dynamic text: Knees to the ground, you take <<$npcdesc>>'s <<$npc_dick_noun[$npcID]>> in your ...
  scene.text(`Knees to the ground, you take ${((s as any).npcdesc ?? 0)}'s ${((s as any).npc_dick_noun ?? 0)?.[String((s as any).npcID ?? 0)]} in your hand and guide it into your mouth to start sucking. He groans under your touch, and you see him tilting his head back in pleasure above you.`);
  if ((Math.floor(Math.random() * 2) + 0) === 0  &&  ((s as any).gdk ?? 0)?.['fuck'] !== 2) {
    // TODO-QSP: xgt 'pav_disco_sex', 'fuck_pre1'
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
    (s as any).gdk['cum'] = 'mouth';
    scene.img('images/shared/sex/cum/mouth/cum1,3.mp4');
    // TODO-QSP: dynamic text: You continue working his cock for several minutes until <<$npcdesc>> grunts, and...
    scene.text(`You continue working his cock for several minutes until ${((s as any).npcdesc ?? 0)} grunts, and a thick salty liquid pours into your mouth without warning.`);
    scene.actions([
      { label: 'Cough', handler: (st: GameState) => {
    // TODO-QSP: gs 'cum_call', 'mouth', $npcID, temp['known_cumID']
    scene.img('images/locations/pavlovsk/community/dk_night.jpg');
    scene.text('You retch, coughing up the cum that suddenly appeared in your mouth and looking back at him with tears in your eyes.');
    // TODO-QSP: xgt 'pav_disco_sex', 'disco_mouth_react1'
  } },
      { label: 'Swallow', handler: (st: GameState) => {
    // TODO-QSP: gs 'cum_call', 'mouth_swallow', $npcID, temp['known_cumID']
    // TODO-QSP: dynamic text: Not knowing what else to do, you reflexively swallow, gulping down the cum spurt...
    scene.text(`Not knowing what else to do, you reflexively swallow, gulping down the cum spurting from ${((s as any).npcdesc ?? 0)}'s cock. Soon enough, nothing else comes out, and you pull back, looking up at him.`);
    // TODO-QSP: xgt 'pav_disco_sex', 'disco_mouth_react2'
  } },
    ]);
  } },
        ]);
      }
    } else {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gs 'cum_call', 'face', $npcID, temp['known_cumID']
    (s as any).gdk['cum'] = 'facial';
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
        { label: 'Insist', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    (s as any).gdk['condom'] = 1;
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
    (s as any).gdk['condom'] = 1;
    qspCall(s, 'pav_disco_sex', 'pc_condom_func');
    scene.actions([
      { label: 'Get fucked', goto: ['pav_disco_sex', 'fuck1'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Maybe it\'ll be okay...', handler: (st: GameState) => {
    (s as any).gdk['condom'] = 2;
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
    scene.img('images/shared/sex/public/outdoor/stand_insert1.mp4');
    if (((s as any).locArgs?.[1] ?? 0) === 'condom_request') {
      if (((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
        // TODO-QSP: gs 'npcStat', $npcID, 0, $npc_condom_type[$npcID]
        scene.text('"Hang on. Use a-" You start to turn around to ask him to put on a condom but see he\'s already pulling one out. "Oh. Way ahead of me, I guess."');
      } else {
        // TODO-QSP: gs 'npcStat', $npcID, 0, $npc_condom_type[$npcID]
        // TODO-QSP: dynamic text: "Hang on. Use a condom?" <<$npcdesc>> nods and pulls one out of his pocket, tear...
        scene.text(`"Hang on. Use a condom?" ${((s as any).npcdesc ?? 0)} nods and pulls one out of his pocket, tearing it open and rolling it onto his cock, leaving you to breathe a sigh of relief.`);
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
      (s as any).temp['not_inside_req'] = 1;
      scene.text('"Just don\'t cum inside me," you tell him over your shoulder.');
    }
    scene.text('And then he thrusts his cock inside you.');
    scene.actions([
      { label: 'Maybe it\'ll be okay...', handler: (st: GameState) => {
    (s as any).gdk['condom'] = 2;
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
      { label: 'Get fucked', goto: ['pav_disco_sex', 'fuck1'] },
    ]);
  }
  scene.build();
}

function enterVirginFuck(s: GameState, scene: SceneBuilder): void {
  (s as any).gdk['virgin'] = 1;
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
    // TODO-QSP: xgt 'pav_disco_sex', 'disco_cum'
  } },
    { label: 'Don\'t feel much', handler: (st: GameState) => {
    if (((s as any).pcs_horny ?? 0) > 50) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (40);
    }
    scene.text('Within a minute, the initial pain fades. After that, you hope it\'ll start to feel good, but... it doesn\'t actually feel like anything. Just a sort of "pressure" moving in and out of you. It doesn\'t feel good, it doesn\'t feel bad, it just sort of... feels. The only thing you can feel is the blood of your virginity running down your leg.');
    // TODO-QSP: xgt 'pav_disco_sex', 'disco_cum'
  } },
    { label: 'Start to feel good', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: Within a minute, the initial pain fades. And after that, you start to feel <i>re...
    scene.text(`Within a minute, the initial pain fades. And after that, you start to feel <i>really good</i>. ${((s as any).npcdesc ?? 0)}'s cock just "fills" you in a way you've never experienced before. Soon, you're thrusting your hips back to meet his, chasing after this brand-new pleasure.`);
    scene.text('<i>Why did I wait this long to have sex?!</i> You think to yourself.');
    // TODO-QSP: xgt 'pav_disco_sex', 'disco_cum'
  } },
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
    (s as any).gdk['fuck'] = 2;
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
      (s as any).gdk['condom'] = 1;
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
  (s as any).gdk['fuck'] = 1;
  (s as any).gdk['orgasm'] = ((s as any).orgasm ?? 0);
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
  // TODO-QSP: xgt 'pav_disco_sex', 'disco_cum'
  scene.build();
}

function enterDiscoCum(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]) {
    (s as any).temp['known_cumID'] = 1;
  } else {
    (s as any).temp['known_cumID'] = 0;
  }
  if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'mouth') {
    (s as any).gdk['cum_num'] = 2;
  } else {
    (s as any).gdk['cum_num'] = 3;
    if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie') {
      if (((s as any).temp ?? 0)?.['not_inside_req'] === 0) {
        (s as any).gdk['cum_num'] = 4;
      } else {
        (s as any).gdk['cum_num'] = 4;
        (s as any).gdk['cum_num'] = Math.floor(Math.random() * 3) + 1;
      }
    } else {
      (s as any).gdk['cum_num'] = Math.floor(Math.random() * 4) + 1;
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
      // TODO-QSP: dynamic text: "Hey," <<$npcdesc>> grunts. "Let me cum in your mouth."
      scene.text(`"Hey," ${((s as any).npcdesc ?? 0)} grunts. "Let me cum in your mouth."`);
      if (((s as any).gdk ?? 0)?.['cum_num'] === 3) {
        // TODO-QSP: dynamic text: "Hey," <<$npcdesc>> grunts. "Let me cum on your face."
        scene.text(`"Hey," ${((s as any).npcdesc ?? 0)} grunts. "Let me cum on your face."`);
        scene.actions([
          { label: 'Let him cum on your face', goto: ['pav_disco_sex', 'disco_cum_facial'] },
          { label: 'Finish him in your mouth instead', goto: ['pav_disco_sex', 'disco_cum_mouth'] },
        ]);
      } else {
        if (((s as any).npcCondom ?? 0) !== '') {
          (s as any).gdk['cum'] = 'condom';
          scene.actions([
            { label: 'Continue', goto: ['pav_disco_sex', 'disco_condom1'] },
          ]);
        } else {
          (s as any).gdk['cum'] = 'creampie';
          if (((s as any).gdk ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
            // TODO-QSP: dynamic text: You feel pressure building with every thrust of <<$npcdesc>>'s cock inside you, ...
            scene.text(`You feel pressure building with every thrust of ${((s as any).npcdesc ?? 0)}'s cock inside you, and soon, it explodes in a climactic orgasm. Every muscle in your body clenches, your pussy clamping down on the cock inside it so hard, it almost hurts. Then, as your breathing winds down, you feel ${((s as any).npcdesc ?? 0)} slip out from inside you.`);
            scene.text('You start to smile in pleasure when you suddenly feel something oozing from your pussy, and your eyes go wide.');
          } else {
            scene.text('Your eyes go wide when you feel something spurt inside of your pussy.');
          }
          // TODO-QSP: gs 'cum_call', '', $npcID, temp['known_cumID']
          (s as any).gdk['cum'] = 'creampie';
          if (((s as any).pcs_horny ?? 0) >= 90) {
            // TODO-QSP: dynamic text: You feel pressure building with every thrust of <<$npcdesc>>'s cock inside you, ...
            scene.text(`You feel pressure building with every thrust of ${((s as any).npcdesc ?? 0)}'s cock inside you, and soon, it explodes in a climactic orgasm. Every muscle in your body clenches, your pussy clamping down on the cock inside it so hard, it almost hurts. Finally, your breathing slowly winds down, and you feel ${((s as any).npcdesc ?? 0)} slip his cock out from inside you.`);
            scene.text('As he does, you feel something oozing out of your pussy after it.');
            // TODO-QSP: xgt 'pav_disco_sex', 'creampie_surprise1'
          } else {
            scene.text('Your eyes go wide when you feel something spurt inside of your pussy.');
            // TODO-QSP: xgt 'pav_disco_sex', 'creampie_surprise1'
          }
          scene.actions([
            { label: 'WHAT THE FUCK!', goto: ['pav_disco_sex', 'creampie_surprise2'] },
          ]);
        }
      }
      scene.actions([
        { label: 'Let him cum on your face instead', goto: ['pav_disco_sex', 'disco_cum_facial'] },
        { label: 'Suck him off', goto: ['pav_disco_sex', 'disco_cum_mouth'] },
      ]);
    }
  }
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
