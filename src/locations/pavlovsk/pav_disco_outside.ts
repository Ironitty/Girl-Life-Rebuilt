import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterRoutingMatrix(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] >= 2) {
    scene.actions([{ label: 'Continue', goto: ['pav_disco_sex', 'hotel_pre'] }]);
  } else {
    if ((Math.floor(Math.random() * 1000) + 0) < ((s as any).fame ?? 0)?.['pav_slut']) {
      scene.actions([{ label: 'Continue', goto: ['pav_disco_outside', 'slut_invite'] }]);
    } else {
      if (((s as any).temp ?? 0)?.['drunk_guy'] === 1) {
        scene.actions([{ label: 'Continue', goto: ['pav_disco_outside', 'invite_beer'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['pav_disco_outside', 'invite_chat'] }]);
      }
    }
  }
  scene.build();
}

function enterOutsideImg(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/community/dk_night.jpg');
  scene.build();
}

function enterTalkImg(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/community/dk_night.jpg');
  scene.build();
}

function enterExitOptions(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Go back to the street', goto: ['pav_residential', ''] },
    { label: 'Return to the disco', goto: ['pav_disco', ''] },
  ]);
  scene.build();
}

function enterInviteBeer(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/community/dk_night.jpg');
  if (((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)] !== ((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]) {
    scene.text('You leave the disco with the guy and walk into a quiet garden area.');
  } else {
    // TODO-QSP: dynamic text: You leave the disco with <<$npcdesc>> and walk into a quiet garden area.
    scene.text(`You leave the disco with ${((s as any).npcdesc ?? 0)} and walk into a quiet garden area.`);
  }
  scene.text('"You want a beer?" he asks, drunkenly smiling at you and holding up a six pack.');
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
  }, goto: ['pav_disco_outside', 'chat_menu'] },
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
    if ((Math.floor(Math.random() * 10) + 1) <= ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]  ||  (Math.floor(Math.random() * 1000) + 1) < ((s as any).fame ?? 0)?.['pav_slut']) {
      scene.actions([{ label: 'Continue', goto: ['pav_disco_outside', 'boysex_options'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['pav_disco_outside', 'chat_menu'] }]);
    }
  } },
  ]);
  scene.build();
}

function enterInviteChat(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/community/dk_night.jpg');
  if (((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)] !== ((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]) {
    // TODO-QSP: $npc_usedname[$npcID] = $npc_nickname[$npcID]
    qspCall(s, 'npcStat', '', ((s as any).npcID ?? 0));
    scene.text('You leave the disco with the guy and walk into a quiet garden area.');
    // TODO-QSP: dynamic text: "I thought maybe we could just talk for a bit," he smiles at you. "I'm <<$npcdes...
    scene.text(`"I thought maybe we could just talk for a bit," he smiles at you. "I'm ${((s as any).npcdesc ?? 0)}. What's your name?"`);
    scene.actions([
      { label: 'I\'m <<$pcs_firstname>>', handler: (st: GameState) => {
    // TODO-QSP: $pcs_usedname[$npcID] = $pcs_firstname
    // TODO-QSP: dynamic text: "I'm <<$pcs_firstname>>," you smile back.
    scene.text(`"I'm ${((s as any).pcs_firstname ?? 0)}," you smile back.`);
  }, goto: ['pav_disco_outside', 'chat_menu'] },
      { label: 'I\'m <<$pcs_nickname>>', handler: (st: GameState) => {
    // TODO-QSP: $pcs_usedname[$npcID] = $pcs_nickname
    // TODO-QSP: dynamic text: "I'm <<$pcs_nickname>>," you smile back.
    scene.text(`"I'm ${((s as any).pcs_nickname ?? 0)}," you smile back.`);
  }, goto: ['pav_disco_outside', 'chat_menu'] },
    ]);
  } else {
    // TODO-QSP: dynamic text: You leave the disco with <<$npcdesc>> and walk into a quiet garden area.
    scene.text(`You leave the disco with ${((s as any).npcdesc ?? 0)} and walk into a quiet garden area.`);
    if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'fuckbuddy') {
      if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
        if (((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
          scene.text('"Let\'s skip the bullshit," he grins. "I\'ll get us hotel room and we can fuck each other\'s brains out."');
        } else {
          scene.text('"Let\'s skip the bullshit," he grins. "Come back with me to my place and let\'s fuck each other\'s brains out."');
        }
        scene.actions([
          { label: '"Lead the way"', handler: (st: GameState) => {
    scene.text('"Lead the way," you smile and let him drag you off.');
    if (((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
      scene.actions([
        { label: 'Go back to <<$npcdesc>>\'s', goto: ['sex_ev_start', 'hotel_start'] },
      ]);
    } else {
      scene.actions([
        { label: 'Go back to <<$npcdesc>>\'s', goto: ['sex_ev_start', 'npc_home_start'] },
      ]);
    }
  } },
        ]);
      } else {
        if (((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
          scene.text('"So, did you want to talk for a while or did you just want to get a hotel room?" he says, smiling meaningfully at you.');
        } else {
          scene.text('"So, did you want to talk for a while or just go back to my place for a good time?" he says, smiling meaningfully at you.');
        }
      }
    } else {
      // TODO-QSP: dynamic text: "It's good to see you again," <<$npcdesc>> says, giving you a small smile.
      scene.text(`"It's good to see you again," ${((s as any).npcdesc ?? 0)} says, giving you a small smile.`);
      scene.actions([{ label: 'Continue', goto: ['pav_disco_outside', 'chat_menu'] }]);
    }
  }
  scene.build();
}

function enterChatMenu(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 10) + 1) < ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]) {
    scene.actions([{ label: 'Continue', goto: ['pav_disco_outside', 'boysex_options'] }]);
  }
  if (((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)] !== ((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]) {
    scene.actions([
      { label: 'Ask his name', handler: (st: GameState) => {
    qspCall(s, 'pav_disco_outside', 'outside_img');
    // TODO-QSP: $npc_usedname[$npcID] = $npc_nickname[$npcID]
    scene.text('"What\'s your name by the way?"');
    // TODO-QSP: dynamic text: "I'm <<$npc_firstname>>," he tells you.
    scene.text(`"I'm ${((s as any).npc_firstname ?? 0)}," he tells you.`);
  }, goto: ['pav_disco_outside', 'chat_menu'] },
    ]);
  }
  scene.actions([
    { label: 'Say goodbye', goto: ['pav_disco_outside', 'chat_end'] },
    { label: 'You go to the disco a lot?', handler: (st: GameState) => {
    qspCall(s, 'pav_disco_outside', 'outside_img');
    scene.text('"So, do you come out here a lot? To the disco I mean."');
    if ((('I').indexOf((((s as any).npc_perstype ?? 0)?.[String((s as any).npcID ?? 0)]))) + 1 > 0) {
      if (((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'sex') {
        if (((s as any).npc_misogynist ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
          scene.text('"More often than I\'d like to," he says with a wry smile. "But it\'s the best way to find sluts to fuck."');
        } else {
          scene.text('"More often than I\'d like to," he says with a wry smile. "But it\'s the only way to meet girls."');
        }
      } else {
        if (((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'casual') {
          scene.text('"I like a good disco now and then," he smiles at you. "And it\'s always a good way to meet pretty girls like you."');
        } else {
          if (((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'serious') {
            scene.text('"Now and again," he smiles at you, looking slightly rueful. "It\'s not like I\'m here every week but it adds some variety."');
          } else {
            scene.text('"Sometimes," he smiles at you, looking slightly rueful. "It can be pretty tiring, so it depends a lot on how I feel."');
          }
        }
      }
    } else {
      if (((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'sex') {
        if (((s as any).npc_misogynist ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
          scene.text('"All the time!" he grins. "There\'s no better place in town to find sluts!"');
        } else {
          scene.text('"I try to come every week," he grins. "It\'s a great place to meet pretty girls."');
        }
      } else {
        if (((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'casual') {
          scene.text('"Yeah, I\'d say pretty often," he smiles at you. "Maybe about as often as you are pretty."');
        } else {
          if (((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'serious') {
            scene.text('"Now and again," he smiles at you, looking slightly rueful. "It\'s not like I\'m here every week but there aren\'t a lot of places to meet people."');
          } else {
            scene.text('"Whenever I feel like it," he smiles at you.');
          }
        }
      }
    }
  }, goto: ['pav_disco_outside', 'chat_menu'] },
    { label: 'Make a move', handler: (st: GameState) => {
    // TODO-QSP: xgt 'pav_disco_outside', 'move_menu'
  } },
  ]);
  scene.build();
}

function enterChatEnd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'pav_disco_outside', 'outside_img');
  if (((s as any).temp ?? 0)?.['disco_mood'] === 'bore_md') {
    scene.text('"Well, this has been nice and all," you start, a fake smile plastered on your face. "But I really should go."');
  } else {
    // TODO-QSP: dynamic text: "I had a really good time with you tonight," you smile at <<$npcdesc>>. "But I s...
    scene.text(`"I had a really good time with you tonight," you smile at ${((s as any).npcdesc ?? 0)}. "But I should probably get going."`);
  }
  if ((Array.isArray((s as any).lover) ? ((s as any).lover as any[]).indexOf(((s as any).npcID ?? 0)) : -1) < 0) {
    if (((s as any).npc_assertive ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      if (((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'sex'  &&  ((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 'pav_residential') {
        scene.text('"Wait!" he says, as you start to get up. "Why end things here? You want to come back to my place for some coffee?');
        scene.actions([
          { label: 'Refuse', handler: (st: GameState) => {
    scene.text('"Sorry," you shake your head. "I think that would be a mistake."');
    // TODO-QSP: dynamic text: You leave <<$npcdesc>> in the dark and head back inside.
    scene.text(`You leave ${((s as any).npcdesc ?? 0)} in the dark and head back inside.`);
    scene.actions([
      { label: 'Go back to the disco', goto: ['pav_disco', ''] },
    ]);
  } },
          { label: 'Accept', handler: (st: GameState) => {
    scene.text('"That sounds nice," you smile at him. After sprucing yourself up a bit, you follow him back to his apartment.');
    scene.actions([
      { label: 'Go to his place', handler: (st: GameState) => {
    // TODO-QSP: gt 'date_hangout', 'start', 'disco'
  } },
    ]);
  } },
        ]);
      } else {
        scene.text('"Before you go," he says, as you start to get up. "Let me get your number. I\'d like to call you sometime."');
        scene.actions([
          { label: 'Refuse', handler: (st: GameState) => {
    scene.text('"I just don\'t see this turning into anything like that," you shake your head. "Sorry."');
    scene.text('With that, you leave him alone.');
  }, goto: ['pav_disco_outside', 'exit_options'] },
          { label: 'Give him your number', handler: (st: GameState) => {
    scene.text('"Sure," you smile back. "I\'d like that."');
    qspCall(s, 'lover', 'add_dating', ((s as any).npcID ?? 0));
    qspCall(s, 'stat', '');
    scene.text('Taking his phone, you input your contact information into it before waving goodbye and parting ways.');
  }, goto: ['pav_disco_outside', 'exit_options'] },
        ]);
      }
    } else {
      scene.actions([
        { label: 'Just leave', handler: (st: GameState) => {
    // TODO-QSP: xgt 'pav_disco_outside', 'exit_options'
  } },
        { label: 'Give him your number', handler: (st: GameState) => {
    qspCall(s, 'pav_disco_outside', 'outside_img');
    // TODO-QSP: dynamic text: "I wouldn't mind seeing you again, if you want my number?" you offer <<$npcdesc>...
    scene.text(`"I wouldn't mind seeing you again, if you want my number?" you offer ${((s as any).npcdesc ?? 0)}.`);
    scene.text('He smiles back at you.');
    scene.text('"Sure."');
    qspCall(s, 'lover', 'add_dating', ((s as any).npcID ?? 0));
    qspCall(s, 'stat', '');
    scene.text('Taking his phone, you input your contact information into it before waving goodbye and parting ways.');
  }, goto: ['pav_disco_outside', 'exit_options'] },
      ]);
    }
  }
  scene.build();
}

function enterMoveMenu(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 10) + 1) < ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]) {
    scene.actions([{ label: 'Continue', goto: ['pav_disco_outside', 'boysex_options'] }]);
  }
  scene.actions([
    { label: 'Kiss him', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/outside_kiss.jpg');
    if (((s as any).temp ?? 0)?.['curr_action'] !== 'kissing') {
      ((s as any).temp ?? {})['curr_action'] = 'kissing';
      scene.text('<i>Fuck it,</i> you think and surge forward to press your lips against his.');
      if (((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'sex') {
        // TODO-QSP: dynamic text: <<$npc_usedname[$npcID]>> matches your energy instantly, immediately responding ...
        scene.text(`${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} matches your energy instantly, immediately responding by pushing his tongue between your lips`);
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>> stiffens beneath you in momentary surprise but quickly recovers, re...
        scene.text(`${((s as any).npcdesc ?? 0)} stiffens beneath you in momentary surprise but quickly recovers, responding to your kiss with equal enthusiasm.`);
      }
    } else {
      // TODO-QSP: dynamic text: You keep making out with <<$npcdesc>>.
      scene.text(`You keep making out with ${((s as any).npcdesc ?? 0)}.`);
    }
  }, goto: ['pav_disco_outside', 'move_menu'] },
    { label: 'Reach for his cock', handler: (st: GameState) => {
    if (((s as any).temp ?? 0)?.['curr_action'] === 'kissing') {
      // TODO-QSP: dynamic text: Reach down into <<$npcdesc>>'s pants, you feel a stiff, <<$npc_dick_desc[$npcID]...
      scene.text(`Reach down into ${((s as any).npcdesc ?? 0)}'s pants, you feel a stiff, ${((s as any).npc_dick_desc ?? 0)?.[String((s as any).npcID ?? 0)]} shaft inside. You pull, releasing it from its confines and stroking it to diamond hardness without ever breaking the kiss.`);
    } else {
      // TODO-QSP: dynamic text: You reach down into <<$npcdesc>>'s pants, feeling a stiff, <<$npc_dick_desc[$npc...
      scene.text(`You reach down into ${((s as any).npcdesc ?? 0)}'s pants, feeling a stiff, ${((s as any).npc_dick_desc ?? 0)?.[String((s as any).npcID ?? 0)]} shaft inside. You pull, releasing it from its confines and stroking it to diamond hardness`);
    }
  }, goto: ['pav_disco_sex', 'handjob'] },
    { label: 'Squat down (and blow him)', handler: (st: GameState) => {
    // TODO-QSP: xgt 'pav_disco_sex', 'blowjob'
  } },
  ]);
  scene.build();
}

function enterToomuchExit(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'pav_disco_outside', 'outside_img');
  if (((s as any).locArgs?.[1] ?? 0) === 'handjob_stop') {
    if (((s as any).temp ?? 0)?.['curr_action'] === 'kissing') {
      // TODO-QSP: dynamic text: With a panicked gasp, you break the kiss and snap your hand away from <<$npcdesc...
      scene.text(`With a panicked gasp, you break the kiss and snap your hand away from ${((s as any).npcdesc ?? 0)}'s cock in the same motion.`);
    } else {
      // TODO-QSP: dynamic text: With a panicked gasp, snap your hand away from <<$npcdesc>>'s cock.
      scene.text(`With a panicked gasp, snap your hand away from ${((s as any).npcdesc ?? 0)}'s cock.`);
    }
  } else {
    // TODO-QSP: dynamic text: With a panicked gasp, you break away from <<$npcdesc>>.
    scene.text(`With a panicked gasp, you break away from ${((s as any).npcdesc ?? 0)}.`);
  }
  scene.text('"This is too much for me," you say, voice on the verge of trembling.');
  if (((s as any).npc_shy ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    if (((s as any).temp ?? 0)?.['curr_action'] === 'handjob'  ||  ((s as any).temp ?? 0)?.['curr_action'] === 'blowjob') {
      // TODO-QSP: dynamic text: "Oh, shit-" he stammers, suddenly looking bashful and embarrassed all at once an...
      scene.text(`"Oh, shit-" he stammers, suddenly looking bashful and embarrassed all at once and starts trying to stuff his ${((s as any).npc_dick_desc ?? 0)?.[String((s as any).npcID ?? 0)]} back inside so it isn't just hanging out in front of you. "Sorry, you're just so pretty, and I got caught up, and-"`);
    } else {
      scene.text('"Oh, shit-" he stammers, suddenly looking bashful and embarrassed all at once. "Sorry, you\'re just so pretty, and I got caught up, and-"');
    }
    scene.text('He cuts off suddenly, hurrying to zip his pants up.');
    scene.actions([
      { label: 'Need to go', handler: (st: GameState) => {
    scene.text('"I need to get out of here," you say, hurrying away.');
  }, goto: ['pav_disco_outside', 'exit_options'] },
      { label: 'It\'s okay', handler: (st: GameState) => {
    qspCall(s, 'pav_disco_outside', 'outside_img');
    scene.text('"It\'s okay," you say, taking a deep breath and calming down. "It was just... too fast, y\'know?"');
    // TODO-QSP: dynamic text: "Yeah," <<$npcdesc>> nods emphatically.
    scene.text(`"Yeah," ${((s as any).npcdesc ?? 0)} nods emphatically.`);
    scene.actions([
      { label: 'Call it a night', handler: (st: GameState) => {
    // TODO-QSP: xgt 'pav_disco_outside', 'callitanight'
  } },
      { label: 'Ask for his number', handler: (st: GameState) => {
    // TODO-QSP: xgt 'pav_disco_outside', 'pc_asknumber'
  } },
      { label: 'Ask to come over for coffee', handler: (st: GameState) => {
    // TODO-QSP: xgt 'pav_disco_outside', 'pc_askcoffee'
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).npc_pushy ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 'pav_residential') {
        // TODO-QSP: dynamic text: "Come on, don't be like that," <<$npcdesc>> says insistently, still shoving his ...
        scene.text(`"Come on, don't be like that," ${((s as any).npcdesc ?? 0)} says insistently, still shoving his his erection up against your thigh. "We don't have to do it here. Come back to my place and we can do it there."`);
      } else {
        // TODO-QSP: dynamic text: "Come on, don't be like that," <<$npcdesc>> says insistently, still shoving his ...
        scene.text(`"Come on, don't be like that," ${((s as any).npcdesc ?? 0)} says insistently, still shoving his his erection up against your thigh. "We don't have to do it here. We can get a hotel room and we can do it there."`);
      }
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'pav_disco_outside', 'outside_img');
    // TODO-QSP: dynamic text: "Fucking typical cocktease," <<$npcdesc>> grumbles as he pulls his pants up. "Bl...
    scene.text(`"Fucking typical cocktease," ${((s as any).npcdesc ?? 0)} grumbles as he pulls his pants up. "Blueball bitch. Get the fuck out of here."`);
    scene.text('Blushing with everything he\'s called you, you do as he says and leave.');
    qspCall(s, 'pav_disco_outside', 'exit_options');
  } },
        { label: 'Accept', handler: (st: GameState) => {
    qspCall(s, 'pav_disco_outside', 'outside_img');
    scene.text('Taking a deep breath, you calm down and consider the offer.');
    // TODO-QSP: dynamic text: "That might be better," you say and <<$npcdesc>> grins back at you.
    scene.text(`"That might be better," you say and ${((s as any).npcdesc ?? 0)} grins back at you.`);
    scene.text('"Come on then. Let\'s go."');
    if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 'pav_residential') {
      scene.actions([
        { label: 'Go back to <<$npcdesc>>\'s place', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_start', 'npc_home_start', iif($npc_rel_type[$npcI...
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Go back to the hotel', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_start', 'hotel_start', iif($npc_rel_type[$npcID] ...
  } },
      ]);
    }
  } },
      ]);
    } else {
      if (((s as any).temp ?? 0)?.['curr_action'] === 'handjob'  ||  ((s as any).temp ?? 0)?.['curr_action'] === 'blowjob') {
        // TODO-QSP: dynamic text: "Oh, fuck- Sorry," he stammers, literally caught with his pants down and starts ...
        scene.text(`"Oh, fuck- Sorry," he stammers, literally caught with his pants down and starts to stuff his ${((s as any).npc_dick_desc ?? 0)?.[String((s as any).npcID ?? 0)]} back inside so it isn't just hanging out in front of you.`);
      } else {
        scene.text('"Oh, fuck- Sorry," he stammers, looking confused and unsure of what to do.');
      }
      scene.actions([
        { label: 'Need to go', handler: (st: GameState) => {
    scene.text('"I need to get out of here," you say, hurrying away.');
    qspCall(s, 'pav_disco_outside', 'exit_options');
  } },
        { label: 'It\'s okay', handler: (st: GameState) => {
    qspCall(s, 'pav_disco_outside', 'outside_img');
    scene.text('"It\'s okay," you say, taking a deep breath and calming down. "It was just... too fast, y\'know?"');
    // TODO-QSP: dynamic text: "Yeah," <<$npcdesc>> nods emphatically.
    scene.text(`"Yeah," ${((s as any).npcdesc ?? 0)} nods emphatically.`);
    scene.actions([
      { label: 'Call it a night', handler: (st: GameState) => {
    // TODO-QSP: xgt 'pav_disco_outside', 'callitanight'
  } },
      { label: 'Ask for his number', handler: (st: GameState) => {
    // TODO-QSP: xgt 'pav_disco_outside', 'pc_asknumber'
  } },
      { label: 'Ask to come over for coffee', handler: (st: GameState) => {
    // TODO-QSP: xgt 'pav_disco_outside', 'pc_askcoffee'
  } },
    ]);
  } },
      ]);
    }
  }
  scene.build();
}

function enterCallitanight(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'pav_disco_outside', 'outside_img');
  scene.text('"I think maybe we should just call it a night," you say awkwardly.');
  if ((Math.floor(Math.random() * 3) + 1) + ((s as any).npc_assertive ?? 0)?.[String((s as any).npcID ?? 0)] > 1) {
    // TODO-QSP: dynamic text: <<$npcdesc>> nods but just as you're turning away, he calls out to you.
    scene.text(`${((s as any).npcdesc ?? 0)} nods but just as you're turning away, he calls out to you.`);
    if ((Math.floor(Math.random() * 2) + 1) === 1  &&  ((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 'pav_residential') {
      scene.text('"Wait! Maybe we can still just scale things back a little. Maybe we start slow. You could... come over for coffee?"');
      scene.actions([
        { label: 'No', handler: (st: GameState) => {
    scene.text('"Sorry," you shake your head. "I think that would be a mistake."');
    // TODO-QSP: dynamic text: You leave <<$npcdesc>> in the dark and head back inside.
    scene.text(`You leave ${((s as any).npcdesc ?? 0)} in the dark and head back inside.`);
    scene.actions([
      { label: 'Go back to the disco', goto: ['pav_disco', ''] },
    ]);
  } },
        { label: 'Sure', handler: (st: GameState) => {
    scene.text('"That sounds nice," you smile at him. After sprucing yourself up a bit, you follow him back to his apartment.');
    scene.actions([
      { label: 'Go to his place', handler: (st: GameState) => {
    // TODO-QSP: gt 'date_hangout', 'start', 'disco'
  } },
    ]);
  } },
      ]);
    } else {
      scene.text('"Wait! Do you think... maybe I could get your number...?"');
      scene.actions([
        { label: 'No', handler: (st: GameState) => {
    scene.text('"Sorry," you shake your head. "I think that would be a mistake."');
    // TODO-QSP: dynamic text: You leave <<$npcdesc>> in the dark and head back inside.
    scene.text(`You leave ${((s as any).npcdesc ?? 0)} in the dark and head back inside.`);
    scene.actions([
      { label: 'Go back to the disco', goto: ['pav_disco', ''] },
    ]);
  } },
        { label: 'Give him your number', handler: (st: GameState) => {
    qspCall(s, 'mood', 'raise', 'tiny');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'lover', 'add_dating', ((s as any).npcID ?? 0));
    qspCall(s, 'stat', '');
    scene.text('"Sure," you smile, taking his phone so you can input your number into it.');
    // TODO-QSP: dynamic text: "I hope I'll see you again soon, <<$pcs_firstname>>," he smiles back as you head...
    scene.text(`"I hope I'll see you again soon, ${((s as any).pcs_firstname ?? 0)}," he smiles back as you head back to the disco.`);
    qspCall(s, 'pav_disco_outside', 'exit_options');
  } },
      ]);
    }
  } else {
    // TODO-QSP: dynamic text: "Um, yeah, I guess... Probably should..." <<$npcdesc>> nods back in with equal a...
    scene.text(`"Um, yeah, I guess... Probably should..." ${((s as any).npcdesc ?? 0)} nods back in with equal awkward as you retreat back into the disco.`);
    qspCall(s, 'pav_disco_outside', 'exit_options');
  }
  scene.build();
}

function enterPcAsknumber(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'pav_disco_outside', 'outside_img');
  scene.text('"Maybe we could do something else? Not here?" you suggest hesitantly. "I could give you my number...?"');
  if (((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'sex') {
    scene.text('"Only if I can call you to fuck," he says openly, not even slightly ashamed. "I\'m not interested in relationships other than ones I\'m getting pussy out of."');
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "No...?" you reply, bewildered. <<$npcdesc>> shrugs.
    scene.text(`"No...?" you reply, bewildered. ${((s as any).npcdesc ?? 0)} shrugs.`);
    scene.text('"Whatever then. Fuck off, I need to find a girl who will actually put out," he says, shoving past you back into the disco.');
    qspCall(s, 'pav_disco_outside', 'exit_options');
  } },
      { label: 'Okay (add fuckbuddy)', handler: (st: GameState) => {
    qspCall(s, 'lover', 'add_fuckbuddy', ((s as any).npcID ?? 0));
    scene.text('"Okay, I guess," you say, taking his phone and adding your number.');
    scene.text('"Nice," he says, looking you up and down as he takes the phone back, as if he\'s staring through your clothes. "I\'ll text you when I want to bust a nut."');
    qspCall(s, 'pav_disco_outside', 'exit_options');
  } },
    ]);
  } else {
    // TODO-QSP: dynamic text: "Yeah," <<$npcdesc>> smiles. "That would be good."
    scene.text(`"Yeah," ${((s as any).npcdesc ?? 0)} smiles. "That would be good."`);
    scene.text('Handing you his phone, he waits patiently while you input your number and hand it back to him.');
    scene.text('"I\'ll call you," he says, looking very pleased.');
    qspCall(s, 'pav_disco_outside', 'exit_options');
  }
  scene.build();
}

function enterPcAskcoffee(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'pav_disco_outside', 'outside_img');
  scene.text('"Maybe if we could just slow down a bit and... I could come over for some coffee? We can just talk for a little while?"');
  if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 'pav_residential') {
    if (((s as any).npc_manipulative ?? 0)?.[String((s as any).npcID ?? 0)] + ((s as any).npc_womanizer ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'casual'  ||  ((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'serious') {
      // TODO-QSP: dynamic text: "That could be nice," <<$npcdesc>> smiles and leads you back to his apartment.
      scene.text(`"That could be nice," ${((s as any).npcdesc ?? 0)} smiles and leads you back to his apartment.`);
      scene.actions([
        { label: 'Go to <<$npcdesc>>\'s apartment', handler: (st: GameState) => {
    // TODO-QSP: gt 'date_hangout', 'start', 'disco'
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: "Only if we get to fuck after," <<$npcdesc>> grins, leering openly at you.
      scene.text(`"Only if we get to fuck after," ${((s as any).npcdesc ?? 0)} grins, leering openly at you.`);
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    scene.text('"No!" you frown. "I said I <i>don\'t</i> want to do that!"');
    scene.text('"Then fuck off. I need to find some real pussy," he says, shoving past you back into the disco.');
    qspCall(s, 'pav_disco_outside', 'exit_options');
  } },
        { label: 'We\'ll see', handler: (st: GameState) => {
    scene.text('"I\'m not saying no, but we\'ll have to see about it first," you reply, a wry smirk on your face.');
    scene.text('"I\'ll take those odds," he continues to grin and leads you back to his place.');
    // TODO-QSP: gt 'date_hangout', 'start', 'disco'
  } },
      ]);
    }
  } else {
    scene.text('"I don\'t really live around here," he admits.');
    scene.text('"Oh."');
    scene.text('You awkwardly shuffle around each other in silence for a moment before he just calls it quits and hurries back into the disco.');
    qspCall(s, 'pav_disco_outside', 'exit_options');
  }
  scene.build();
}

function enterBoysexOptions(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    if (((s as any).npc_gentle_lover ?? 0)?.[String((s as any).npcID ?? 0)] + ((s as any).npc_sensual_lover ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.actions([{ label: 'Continue', goto: ['pav_disco_outside', 'boysex_titslip'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['pav_disco_outside', 'boysex_handjob'] }]);
    }
  } },
  ]);
  scene.build();
}

function enterBoysexTitslip(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/grab/titslip1.mp4');
  if (((s as any).braworntype ?? 0) === 'none') {
    if (((s as any).PCloDress ?? 0) === 1) {
      // TODO-QSP: dynamic text: You gasp as <<$npcdesc>> slips a finger inside your dress and tugs, and one of y...
      scene.text(`You gasp as ${((s as any).npcdesc ?? 0)} slips a finger inside your dress and tugs, and one of your breasts falls out.`);
    } else {
      // TODO-QSP: dynamic text: You gasp as <<$npcdesc>> slips a finger inside your top and tugs, and one of you...
      scene.text(`You gasp as ${((s as any).npcdesc ?? 0)} slips a finger inside your top and tugs, and one of your breasts falls out.`);
    }
    if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'perverted') {
      scene.text('"I fucking knew you weren\'t wearing a bra," he grins, cupping your exposed boob with his hand as he bends his head towards your nipple.');
    } else {
      scene.text('"No bra. Nice," he grins, cupping your exposed boob with his hand as he bends his head towards your nipple.');
    }
  } else {
    if (((s as any).PCloDress ?? 0) === 1) {
      // TODO-QSP: dynamic text: You gasp as <<$npcdesc>> slips a finger inside your bra and tugs, resulting one ...
      scene.text(`You gasp as ${((s as any).npcdesc ?? 0)} slips a finger inside your bra and tugs, resulting one of your breasts falling out of your dress. For his part, he doesn't miss a beat and immediately cups your breast with the same hand that exposed it as he bends his head towards your nipple.`);
    } else {
      // TODO-QSP: dynamic text: You gasp as <<$npcdesc>> slips a finger inside your bra and tugs, resulting one ...
      scene.text(`You gasp as ${((s as any).npcdesc ?? 0)} slips a finger inside your bra and tugs, resulting one of your breasts falling out of your top. For his part, he doesn't miss a beat and immediately cups your breast with the same hand that exposed it as he bends his head towards your nipple.`);
    }
  }
  scene.actions([
    { label: 'Continue', goto: ['pav_disco_outside', 'boysex_titsuck'] },
  ]);
  scene.build();
}

function enterBoysexTitsuck(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp ?? {})['curr_action'] = 'titsuck';
  scene.img('images/locations/pavlovsk/community/tits.jpg');
  // TODO-QSP: dynamic text: <<$npcdesc>> pops your nipple into his mouth and starts sucking, rolling his ton...
  scene.text(`${((s as any).npcdesc ?? 0)} pops your nipple into his mouth and starts sucking, rolling his tongue across the tip and around your areola. His free hand releases your other breast from ' + iif(PCloDress > 0, 'your dress ', 'your top ') + 'to palm it, gently squeezing it in a pulsing pattern while he sucks on your other tit.`);
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt 'pav_disco_outside', 'sex_route', 'tit_suck'
  } },
  ]);
  scene.build();
}

function enterBoysexHandjob(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp ?? {})['curr_action'] = 'handjob';
  if (((s as any).npc_dirty_lover ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    scene.img('images/shared/sex/handjob/hj.jpg');
    // TODO-QSP: dynamic text: "Feel how hard I am for you," <<$npcdesc>> growls in your ear, taking your hand ...
    scene.text(`"Feel how hard I am for you," ${((s as any).npcdesc ?? 0)} growls in your ear, taking your hand and shoving it down his pants, forcing you to wrap your fingers around his <b>${((s as any).npc_dick_desc ?? 0)?.[String((s as any).npcID ?? 0)]} cock</b> and pull it free.`);
    scene.actions([
      { label: 'This is too much', handler: (st: GameState) => {
    // TODO-QSP: xgt 'pav_disco_outside', 'toomuch_exit', 'handjob_stop'
  } },
    ]);
  } else {
    scene.img('images/locations/pavlovsk/community/disco/outside_kiss.jpg');
    // TODO-QSP: dynamic text: "Fuck, you're so hot," <<$npcdesc>> breathes in your ear. "I need your hand on m...
    scene.text(`"Fuck, you're so hot," ${((s as any).npcdesc ?? 0)} breathes in your ear. "I need your hand on my cock so bad right now."`);
    scene.actions([
      { label: 'This is too much', handler: (st: GameState) => {
    // TODO-QSP: xgt 'pav_disco_outside', 'toomuch_exit'
  } },
    ]);
  }
  qspCall(s, 'pav_disco_sex', 'handjob');
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'routing_matrix':
      enterRoutingMatrix(s, scene);
      break;
    case 'outside_img':
      enterOutsideImg(s, scene);
      break;
    case 'talk_img':
      enterTalkImg(s, scene);
      break;
    case 'exit_options':
      enterExitOptions(s, scene);
      break;
    case 'invite_beer':
      enterInviteBeer(s, scene);
      break;
    case 'invite_chat':
      enterInviteChat(s, scene);
      break;
    case 'chat_menu':
      enterChatMenu(s, scene);
      break;
    case 'chat_end':
      enterChatEnd(s, scene);
      break;
    case 'move_menu':
      enterMoveMenu(s, scene);
      break;
    case 'toomuch_exit':
      enterToomuchExit(s, scene);
      break;
    case 'callitanight':
      enterCallitanight(s, scene);
      break;
    case 'pc_asknumber':
      enterPcAsknumber(s, scene);
      break;
    case 'pc_askcoffee':
      enterPcAskcoffee(s, scene);
      break;
    case 'boysex_options':
      enterBoysexOptions(s, scene);
      break;
    case 'boysex_titslip':
      enterBoysexTitslip(s, scene);
      break;
    case 'boysex_titsuck':
      enterBoysexTitsuck(s, scene);
      break;
    case 'boysex_handjob':
      enterBoysexHandjob(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pav_disco_outside: LocationDef = {
  name: 'pav_disco_outside',
  title: 'You leave the disco with the guy and walk into a quiet garde',
  region: 'pavlovsk',
  enter: enter,
};
