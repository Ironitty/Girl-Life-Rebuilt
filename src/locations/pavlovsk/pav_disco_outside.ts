import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterRoutingMatrix(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] >= 2) {
    qspGoto(s, 'pav_disco_sex', 'hotel_pre');
  } else {
    if ((Math.floor(Math.random() * 1000) + 0) < ((s as any).fame ?? 0)?.['pav_slut']) {
      qspGoto(s, 'pav_disco_outside', 'slut_invite');
    } else {
      if (((s as any).temp ?? 0)?.['drunk_guy'] === 1) {
        qspGoto(s, 'pav_disco_outside', 'invite_beer');
      } else {
        qspGoto(s, 'pav_disco_outside', 'invite_chat');
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterOutsideImg(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/community/dk_night.jpg');
  // TODO-QSP: end
  scene.build();
}

function enterTalkImg(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/community/dk_night.jpg');
  // TODO-QSP: end
  scene.build();
}

function enterExitOptions(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
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
    scene.text(`You leave the disco with ${((s as any).npcdesc ?? '')} and walk into a quiet garden area.`);
  }
  scene.text('"You want a beer?" he asks, drunkenly smiling at you and holding up a six pack.');
  qspCall(s, 'willpower', 'drink', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Don\'t drink the beer', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Don\'t drink the beer', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/outside_talk.jpg');
    if (((st as any).alko ?? 0) < 6) {
      scene.text('You smile at him as you shake your head. "No thanks, I\'m not really in the mood for a beer right now."');
    } else {
      scene.text('"No, I don\'t thi-*hic* think I should... *hic*" you manage to drunkenly mumble.');
    }
    // TODO-QSP: dynamic text: <<$npcdesc>> offers you a disarming smile. "Alright, no problem! We can just cha...
    scene.text(`${((st as any).npcdesc ?? '')} offers you a disarming smile. "Alright, no problem! We can just chat!"`);
    qspGoto(st, 'pav_disco_outside', 'chat_menu');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Have a beer', handler: (st: GameState) => {
    qspCall(st, 'drugs', 'alcohol', 'beer');
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/community/drink_beer.jpg');
    // TODO-QSP: dynamic text: You accept the beer and chat with <<$npcdesc>> as you drink it. He''s amusing an...
    scene.text(`You accept the beer and chat with ${((st as any).npcdesc ?? '')} as you drink it. He's amusing and tells you some hilarious stories.`);
    if ((Math.floor(Math.random() * 10) + 1) <= ((st as any).npc_sexdrive ?? 0)?.[String((st as any).npcID ?? 0)]  ||  (Math.floor(Math.random() * 1000) + 1) < ((st as any).fame ?? 0)?.['pav_slut']) {
      qspGoto(st, 'pav_disco_outside', 'boysex_options');
    } else {
      qspGoto(st, 'pav_disco_outside', 'chat_menu');
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
    // TODO-QSP: dynamic text: "I thought maybe we could just talk for a bit," he smiles at you. "I''m <<$npcde...
    scene.text(`"I thought maybe we could just talk for a bit," he smiles at you. "I'm ${((s as any).npcdesc ?? '')}. What's your name?"`);
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'I\'m ' + String(((s as any).pcs_firstname ?? '') ?? ''), handler: (st: GameState) => {
    // TODO-QSP: $pcs_usedname[$npcID] = $pcs_firstname
    // TODO-QSP: dynamic text: "I''m <<$pcs_firstname>>," you smile back.
    scene.text(`"I'm ${((st as any).pcs_firstname ?? '')}," you smile back.`);
    qspGoto(st, 'pav_disco_outside', 'chat_menu');
  } },
      { label: '', labelFn: (s: GameState) => 'I\'m ' + String(((s as any).pcs_nickname ?? '') ?? ''), handler: (st: GameState) => {
    // TODO-QSP: $pcs_usedname[$npcID] = $pcs_nickname
    // TODO-QSP: dynamic text: "I''m <<$pcs_nickname>>," you smile back.
    scene.text(`"I'm ${((st as any).pcs_nickname ?? '')}," you smile back.`);
    qspGoto(st, 'pav_disco_outside', 'chat_menu');
  } },
    ]);
  } else {
    // TODO-QSP: dynamic text: You leave the disco with <<$npcdesc>> and walk into a quiet garden area.
    scene.text(`You leave the disco with ${((s as any).npcdesc ?? '')} and walk into a quiet garden area.`);
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
    if (((st as any).npc_finance ?? 0)?.[String((st as any).npcID ?? 0)] === 2) {
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Go back to ' + String(((st as any).npcdesc ?? '') ?? '') + '\'s', goto: ['sex_ev_start', 'hotel_start'] },
      ]);
    } else {
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Go back to ' + String(((st as any).npcdesc ?? '') ?? '') + '\'s', goto: ['sex_ev_start', 'npc_home_start'] },
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
      // TODO-QSP: dynamic text: "It''s good to see you again," <<$npcdesc>> says, giving you a small smile.
      scene.text(`"It's good to see you again," ${((s as any).npcdesc ?? '')} says, giving you a small smile.`);
      qspGoto(s, 'pav_disco_outside', 'chat_menu');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterChatMenu(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 10) + 1) < ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]) {
    qspGoto(s, 'pav_disco_outside', 'boysex_options');
  }
  if (((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)] !== ((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]) {
    scene.actions([
      { label: 'Ask his name', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterOutsideImg(st, scene); (st as any).locArgs = __savedLocArgs; }
    // TODO-QSP: $npc_usedname[$npcID] = $npc_nickname[$npcID]
    scene.text('"What\'s your name by the way?"');
    // TODO-QSP: dynamic text: "I''m <<$npc_firstname>>," he tells you.
    scene.text(`"I'm ${((st as any).npc_firstname ?? '')}," he tells you.`);
    qspGoto(st, 'pav_disco_outside', 'chat_menu');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Say goodbye', goto: ['pav_disco_outside', 'chat_end'] },
    { label: 'You go to the disco a lot?', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterOutsideImg(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('"So, do you come out here a lot? To the disco I mean."');
    if (((String('I').indexOf(String(((st as any).npc_perstype ?? 0)?.[String((st as any).npcID ?? 0)]))) + 1) > 0) {
      if (((st as any).npc_rel_goal ?? 0)?.[String((st as any).npcID ?? 0)] === 'sex') {
        if (((st as any).npc_misogynist ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
          scene.text('"More often than I\'d like to," he says with a wry smile. "But it\'s the best way to find sluts to fuck."');
        } else {
          scene.text('"More often than I\'d like to," he says with a wry smile. "But it\'s the only way to meet girls."');
        }
      } else {
        if (((st as any).npc_rel_goal ?? 0)?.[String((st as any).npcID ?? 0)] === 'casual') {
          scene.text('"I like a good disco now and then," he smiles at you. "And it\'s always a good way to meet pretty girls like you."');
        } else {
          if (((st as any).npc_rel_goal ?? 0)?.[String((st as any).npcID ?? 0)] === 'serious') {
            scene.text('"Now and again," he smiles at you, looking slightly rueful. "It\'s not like I\'m here every week but it adds some variety."');
          } else {
            scene.text('"Sometimes," he smiles at you, looking slightly rueful. "It can be pretty tiring, so it depends a lot on how I feel."');
          }
        }
      }
    } else {
      if (((st as any).npc_rel_goal ?? 0)?.[String((st as any).npcID ?? 0)] === 'sex') {
        if (((st as any).npc_misogynist ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
          scene.text('"All the time!" he grins. "There\'s no better place in town to find sluts!"');
        } else {
          scene.text('"I try to come every week," he grins. "It\'s a great place to meet pretty girls."');
        }
      } else {
        if (((st as any).npc_rel_goal ?? 0)?.[String((st as any).npcID ?? 0)] === 'casual') {
          scene.text('"Yeah, I\'d say pretty often," he smiles at you. "Maybe about as often as you are pretty."');
        } else {
          if (((st as any).npc_rel_goal ?? 0)?.[String((st as any).npcID ?? 0)] === 'serious') {
            scene.text('"Now and again," he smiles at you, looking slightly rueful. "It\'s not like I\'m here every week but there aren\'t a lot of places to meet people."');
          } else {
            scene.text('"Whenever I feel like it," he smiles at you.');
          }
        }
      }
    }
    qspGoto(st, 'pav_disco_outside', 'chat_menu');
  } },
    { label: 'Make a move', handler: (st: GameState) => {
    // TODO-QSP: xgt 'pav_disco_outside', 'move_menu'
  } },
  ]);
  scene.build();
}

function enterChatEnd(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterOutsideImg(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).temp ?? 0)?.['disco_mood'] === 'bore_md') {
    scene.text('"Well, this has been nice and all," you start, a fake smile plastered on your face. "But I really should go."');
  } else {
    // TODO-QSP: dynamic text: "I had a really good time with you tonight," you smile at <<$npcdesc>>. "But I s...
    scene.text(`"I had a really good time with you tonight," you smile at ${((s as any).npcdesc ?? '')}. "But I should probably get going."`);
  }
  if ((Array.isArray((s as any).lover) ? ((s as any).lover as any[]).indexOf(((s as any).npcID ?? 0)) : -1) < 0) {
    if (((s as any).npc_assertive ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      if (((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'sex'  &&  ((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 'pav_residential') {
        scene.text('"Wait!" he says, as you start to get up. "Why end things here? You want to come back to my place for some coffee?');
        scene.actions([
          { label: 'Refuse', handler: (st: GameState) => {
    scene.text('"Sorry," you shake your head. "I think that would be a mistake."');
    // TODO-QSP: dynamic text: You leave <<$npcdesc>> in the dark and head back inside.
    scene.text(`You leave ${((st as any).npcdesc ?? '')} in the dark and head back inside.`);
    scene.actions([
      { label: 'Go back to the disco', goto: ['pav_disco', ''] },
    ]);
  } },
          { label: 'Accept', handler: (st: GameState) => {
    scene.text('"That sounds nice," you smile at him. After sprucing yourself up a bit, you follow him back to his apartment.');
    scene.actions([
      { label: 'Go to his place', goto: ['date_hangout', 'start', 'disco'] },
    ]);
  } },
        ]);
      } else {
        scene.text('"Before you go," he says, as you start to get up. "Let me get your number. I\'d like to call you sometime."');
        scene.actions([
          { label: 'Refuse', handler: (st: GameState) => {
    scene.text('"I just don\'t see this turning into anything like that," you shake your head. "Sorry."');
    scene.text('With that, you leave him alone.');
    qspGoto(st, 'pav_disco_outside', 'exit_options');
  } },
          { label: 'Give him your number', handler: (st: GameState) => {
    scene.text('"Sure," you smile back. "I\'d like that."');
    qspCall(st, 'lover', 'add_dating', ((st as any).npcID ?? 0));
    qspCall(st, 'stat', '');
    scene.text('Taking his phone, you input your contact information into it before waving goodbye and parting ways.');
    qspGoto(st, 'pav_disco_outside', 'exit_options');
  } },
        ]);
      }
    } else {
      scene.actions([
        { label: 'Just leave', handler: (st: GameState) => {
    // TODO-QSP: xgt 'pav_disco_outside', 'exit_options'
  } },
        { label: 'Give him your number', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterOutsideImg(st, scene); (st as any).locArgs = __savedLocArgs; }
    // TODO-QSP: dynamic text: "I wouldn''t mind seeing you again, if you want my number?" you offer <<$npcdesc...
    scene.text(`"I wouldn't mind seeing you again, if you want my number?" you offer ${((st as any).npcdesc ?? '')}.`);
    scene.text('He smiles back at you.');
    scene.text('"Sure."');
    qspCall(st, 'lover', 'add_dating', ((st as any).npcID ?? 0));
    qspCall(st, 'stat', '');
    scene.text('Taking his phone, you input your contact information into it before waving goodbye and parting ways.');
    qspGoto(st, 'pav_disco_outside', 'exit_options');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMoveMenu(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 10) + 1) < ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]) {
    qspGoto(s, 'pav_disco_outside', 'boysex_options');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Kiss him', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/outside_kiss.jpg');
    if (((st as any).temp ?? 0)?.['curr_action'] !== 'kissing') {
      ((st as any).temp = (st as any).temp ?? {})['curr_action'] = 'kissing';
      scene.text('<i>Fuck it,</i> you think and surge forward to press your lips against his.');
      if (((st as any).npc_rel_goal ?? 0)?.[String((st as any).npcID ?? 0)] === 'sex') {
        // TODO-QSP: dynamic text: <<$npc_usedname[$npcID]>> matches your energy instantly, immediately responding ...
        scene.text(`${((st as any).npc_usedname ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''} matches your energy instantly, immediately responding by pushing his tongue between your lips`);
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>> stiffens beneath you in momentary surprise but quickly recovers, re...
        scene.text(`${((st as any).npcdesc ?? '')} stiffens beneath you in momentary surprise but quickly recovers, responding to your kiss with equal enthusiasm.`);
      }
    } else {
      // TODO-QSP: dynamic text: You keep making out with <<$npcdesc>>.
      scene.text(`You keep making out with ${((st as any).npcdesc ?? '')}.`);
    }
    qspGoto(st, 'pav_disco_outside', 'move_menu');
  } },
    { label: 'Reach for his cock', handler: (st: GameState) => {
    if (((st as any).temp ?? 0)?.['curr_action'] === 'kissing') {
      // TODO-QSP: dynamic text: Reach down into <<$npcdesc>>''s pants, you feel a stiff, <<$npc_dick_desc[$npcID...
      scene.text(`Reach down into ${((st as any).npcdesc ?? '')}'s pants, you feel a stiff, ${((st as any).npc_dick_desc ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''} shaft inside. You pull, releasing it from its confines and stroking it to diamond hardness without ever breaking the kiss.`);
    } else {
      // TODO-QSP: dynamic text: You reach down into <<$npcdesc>>''s pants, feeling a stiff, <<$npc_dick_desc[$np...
      scene.text(`You reach down into ${((st as any).npcdesc ?? '')}'s pants, feeling a stiff, ${((st as any).npc_dick_desc ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''} shaft inside. You pull, releasing it from its confines and stroking it to diamond hardness`);
    }
    qspGoto(st, 'pav_disco_sex', 'handjob');
  } },
    { label: 'Squat down (and blow him)', handler: (st: GameState) => {
    // TODO-QSP: xgt 'pav_disco_sex', 'blowjob'
  } },
  ]);
  scene.build();
}

function enterToomuchExit(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterOutsideImg(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (String((s as any).locArgs?.[1] ?? '') === 'handjob_stop') {
    if (((s as any).temp ?? 0)?.['curr_action'] === 'kissing') {
      // TODO-QSP: dynamic text: With a panicked gasp, you break the kiss and snap your hand away from <<$npcdesc...
      scene.text(`With a panicked gasp, you break the kiss and snap your hand away from ${((s as any).npcdesc ?? '')}'s cock in the same motion.`);
    } else {
      // TODO-QSP: dynamic text: With a panicked gasp, snap your hand away from <<$npcdesc>>''s cock.
      scene.text(`With a panicked gasp, snap your hand away from ${((s as any).npcdesc ?? '')}'s cock.`);
    }
  } else {
    // TODO-QSP: dynamic text: With a panicked gasp, you break away from <<$npcdesc>>.
    scene.text(`With a panicked gasp, you break away from ${((s as any).npcdesc ?? '')}.`);
  }
  scene.text('"This is too much for me," you say, voice on the verge of trembling.');
  if (((s as any).npc_shy ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    if (((s as any).temp ?? 0)?.['curr_action'] === 'handjob'  ||  ((s as any).temp ?? 0)?.['curr_action'] === 'blowjob') {
      // TODO-QSP: dynamic text: "Oh, shit-" he stammers, suddenly looking bashful and embarrassed all at once an...
      scene.text(`"Oh, shit-" he stammers, suddenly looking bashful and embarrassed all at once and starts trying to stuff his ${((s as any).npc_dick_desc ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''} back inside so it isn't just hanging out in front of you. "Sorry, you're just so pretty, and I got caught up, and-"`);
    } else {
      scene.text('"Oh, shit-" he stammers, suddenly looking bashful and embarrassed all at once. "Sorry, you\'re just so pretty, and I got caught up, and-"');
    }
    scene.text('He cuts off suddenly, hurrying to zip his pants up.');
    scene.actions([
      { label: 'Need to go', handler: (st: GameState) => {
    scene.text('"I need to get out of here," you say, hurrying away.');
    qspGoto(st, 'pav_disco_outside', 'exit_options');
  } },
      { label: 'It\'s okay', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterOutsideImg(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('"It\'s okay," you say, taking a deep breath and calming down. "It was just... too fast, y\'know?"');
    // TODO-QSP: dynamic text: "Yeah," <<$npcdesc>> nods emphatically.
    scene.text(`"Yeah," ${((st as any).npcdesc ?? '')} nods emphatically.`);
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
        // TODO-QSP: dynamic text: "Come on, don''t be like that," <<$npcdesc>> says insistently, still shoving his...
        scene.text(`"Come on, don't be like that," ${((s as any).npcdesc ?? '')} says insistently, still shoving his his erection up against your thigh. "We don't have to do it here. Come back to my place and we can do it there."`);
      } else {
        // TODO-QSP: dynamic text: "Come on, don''t be like that," <<$npcdesc>> says insistently, still shoving his...
        scene.text(`"Come on, don't be like that," ${((s as any).npcdesc ?? '')} says insistently, still shoving his his erection up against your thigh. "We don't have to do it here. We can get a hotel room and we can do it there."`);
      }
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterOutsideImg(st, scene); (st as any).locArgs = __savedLocArgs; }
    // TODO-QSP: dynamic text: "Fucking typical cocktease," <<$npcdesc>> grumbles as he pulls his pants up. "Bl...
    scene.text(`"Fucking typical cocktease," ${((st as any).npcdesc ?? '')} grumbles as he pulls his pants up. "Blueball bitch. Get the fuck out of here."`);
    scene.text('Blushing with everything he\'s called you, you do as he says and leave.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterExitOptions(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        { label: 'Accept', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterOutsideImg(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('Taking a deep breath, you calm down and consider the offer.');
    // TODO-QSP: dynamic text: "That might be better," you say and <<$npcdesc>> grins back at you.
    scene.text(`"That might be better," you say and ${((st as any).npcdesc ?? '')} grins back at you.`);
    scene.text('"Come on then. Let\'s go."');
    if (((st as any).npc_residence ?? 0)?.[String((st as any).npcID ?? 0)] === 'pav_residential') {
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Go back to ' + String(((st as any).npcdesc ?? '') ?? '') + '\'s place', goto: ['sex_ev_start', 'npc_home_start', 'TODO', 'hookup'] },
      ]);
    } else {
      scene.actions([
        { label: 'Go back to the hotel', goto: ['sex_ev_start', 'hotel_start', 'TODO', 'hookup'] },
      ]);
    }
  } },
      ]);
    } else {
      if (((s as any).temp ?? 0)?.['curr_action'] === 'handjob'  ||  ((s as any).temp ?? 0)?.['curr_action'] === 'blowjob') {
        // TODO-QSP: dynamic text: "Oh, fuck- Sorry," he stammers, literally caught with his pants down and starts ...
        scene.text(`"Oh, fuck- Sorry," he stammers, literally caught with his pants down and starts to stuff his ${((s as any).npc_dick_desc ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''} back inside so it isn't just hanging out in front of you.`);
      } else {
        scene.text('"Oh, fuck- Sorry," he stammers, looking confused and unsure of what to do.');
      }
      scene.actions([
        { label: 'Need to go', handler: (st: GameState) => {
    scene.text('"I need to get out of here," you say, hurrying away.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterExitOptions(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        { label: 'It\'s okay', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterOutsideImg(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('"It\'s okay," you say, taking a deep breath and calming down. "It was just... too fast, y\'know?"');
    // TODO-QSP: dynamic text: "Yeah," <<$npcdesc>> nods emphatically.
    scene.text(`"Yeah," ${((st as any).npcdesc ?? '')} nods emphatically.`);
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
  // TODO-QSP: end
  scene.build();
}

function enterCallitanight(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterOutsideImg(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('"I think maybe we should just call it a night," you say awkwardly.');
  if ((Math.floor(Math.random() * 3) + 1) + ((s as any).npc_assertive ?? 0)?.[String((s as any).npcID ?? 0)] > 1) {
    // TODO-QSP: dynamic text: <<$npcdesc>> nods but just as you''re turning away, he calls out to you.
    scene.text(`${((s as any).npcdesc ?? '')} nods but just as you're turning away, he calls out to you.`);
    if ((Math.floor(Math.random() * 2) + 1) === 1  &&  ((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 'pav_residential') {
      scene.text('"Wait! Maybe we can still just scale things back a little. Maybe we start slow. You could... come over for coffee?"');
      scene.actions([
        { label: 'No', handler: (st: GameState) => {
    scene.text('"Sorry," you shake your head. "I think that would be a mistake."');
    // TODO-QSP: dynamic text: You leave <<$npcdesc>> in the dark and head back inside.
    scene.text(`You leave ${((st as any).npcdesc ?? '')} in the dark and head back inside.`);
    scene.actions([
      { label: 'Go back to the disco', goto: ['pav_disco', ''] },
    ]);
  } },
        { label: 'Sure', handler: (st: GameState) => {
    scene.text('"That sounds nice," you smile at him. After sprucing yourself up a bit, you follow him back to his apartment.');
    scene.actions([
      { label: 'Go to his place', goto: ['date_hangout', 'start', 'disco'] },
    ]);
  } },
      ]);
    } else {
      scene.text('"Wait! Do you think... maybe I could get your number...?"');
      scene.actions([
        { label: 'No', handler: (st: GameState) => {
    scene.text('"Sorry," you shake your head. "I think that would be a mistake."');
    // TODO-QSP: dynamic text: You leave <<$npcdesc>> in the dark and head back inside.
    scene.text(`You leave ${((st as any).npcdesc ?? '')} in the dark and head back inside.`);
    scene.actions([
      { label: 'Go back to the disco', goto: ['pav_disco', ''] },
    ]);
  } },
        { label: 'Give him your number', handler: (st: GameState) => {
    qspCall(st, 'mood', 'raise', 'tiny');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'lover', 'add_dating', ((st as any).npcID ?? 0));
    qspCall(st, 'stat', '');
    scene.text('"Sure," you smile, taking his phone so you can input your number into it.');
    // TODO-QSP: dynamic text: "I hope I''ll see you again soon, <<$pcs_firstname>>," he smiles back as you hea...
    scene.text(`"I hope I'll see you again soon, ${((st as any).pcs_firstname ?? '')}," he smiles back as you head back to the disco.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterExitOptions(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
  } else {
    // TODO-QSP: dynamic text: "Um, yeah, I guess... Probably should..." <<$npcdesc>> nods back in with equal a...
    scene.text(`"Um, yeah, I guess... Probably should..." ${((s as any).npcdesc ?? '')} nods back in with equal awkward as you retreat back into the disco.`);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterExitOptions(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPcAsknumber(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterOutsideImg(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('"Maybe we could do something else? Not here?" you suggest hesitantly. "I could give you my number...?"');
  if (((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'sex') {
    scene.text('"Only if I can call you to fuck," he says openly, not even slightly ashamed. "I\'m not interested in relationships other than ones I\'m getting pussy out of."');
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "No...?" you reply, bewildered. <<$npcdesc>> shrugs.
    scene.text(`"No...?" you reply, bewildered. ${((st as any).npcdesc ?? '')} shrugs.`);
    scene.text('"Whatever then. Fuck off, I need to find a girl who will actually put out," he says, shoving past you back into the disco.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterExitOptions(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Okay (add fuckbuddy)', handler: (st: GameState) => {
    qspCall(st, 'lover', 'add_fuckbuddy', ((st as any).npcID ?? 0));
    scene.text('"Okay, I guess," you say, taking his phone and adding your number.');
    scene.text('"Nice," he says, looking you up and down as he takes the phone back, as if he\'s staring through your clothes. "I\'ll text you when I want to bust a nut."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterExitOptions(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } else {
    // TODO-QSP: dynamic text: "Yeah," <<$npcdesc>> smiles. "That would be good."
    scene.text(`"Yeah," ${((s as any).npcdesc ?? '')} smiles. "That would be good."`);
    scene.text('Handing you his phone, he waits patiently while you input your number and hand it back to him.');
    scene.text('"I\'ll call you," he says, looking very pleased.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterExitOptions(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPcAskcoffee(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterOutsideImg(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('"Maybe if we could just slow down a bit and... I could come over for some coffee? We can just talk for a little while?"');
  if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 'pav_residential') {
    if (((s as any).npc_manipulative ?? 0)?.[String((s as any).npcID ?? 0)] + ((s as any).npc_womanizer ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'casual'  ||  ((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'serious') {
      // TODO-QSP: dynamic text: "That could be nice," <<$npcdesc>> smiles and leads you back to his apartment.
      scene.text(`"That could be nice," ${((s as any).npcdesc ?? '')} smiles and leads you back to his apartment.`);
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Go to ' + String(((s as any).npcdesc ?? '') ?? '') + '\'s apartment', goto: ['date_hangout', 'start', 'disco'] },
      ]);
    } else {
      // TODO-QSP: dynamic text: "Only if we get to fuck after," <<$npcdesc>> grins, leering openly at you.
      scene.text(`"Only if we get to fuck after," ${((s as any).npcdesc ?? '')} grins, leering openly at you.`);
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    scene.text('"No!" you frown. "I said I <i>don\'t</i> want to do that!"');
    scene.text('"Then fuck off. I need to find some real pussy," he says, shoving past you back into the disco.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterExitOptions(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        { label: 'We\'ll see', handler: (st: GameState) => {
    scene.text('"I\'m not saying no, but we\'ll have to see about it first," you reply, a wry smirk on your face.');
    scene.text('"I\'ll take those odds," he continues to grin and leads you back to his place.');
    qspGoto(st, 'date_hangout', 'start', 'disco');
  } },
      ]);
    }
  } else {
    scene.text('"I don\'t really live around here," he admits.');
    scene.text('"Oh."');
    scene.text('You awkwardly shuffle around each other in silence for a moment before he just calls it quits and hurries back into the disco.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterExitOptions(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBoysexOptions(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    if (((st as any).npc_gentle_lover ?? 0)?.[String((st as any).npcID ?? 0)] + ((st as any).npc_sensual_lover ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      qspGoto(st, 'pav_disco_outside', 'boysex_titslip');
    } else {
      qspGoto(st, 'pav_disco_outside', 'boysex_handjob');
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
      scene.text(`You gasp as ${((s as any).npcdesc ?? '')} slips a finger inside your dress and tugs, and one of your breasts falls out.`);
    } else {
      // TODO-QSP: dynamic text: You gasp as <<$npcdesc>> slips a finger inside your top and tugs, and one of you...
      scene.text(`You gasp as ${((s as any).npcdesc ?? '')} slips a finger inside your top and tugs, and one of your breasts falls out.`);
    }
    if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'perverted') {
      scene.text('"I fucking knew you weren\'t wearing a bra," he grins, cupping your exposed boob with his hand as he bends his head towards your nipple.');
    } else {
      scene.text('"No bra. Nice," he grins, cupping your exposed boob with his hand as he bends his head towards your nipple.');
    }
  } else {
    if (((s as any).PCloDress ?? 0) === 1) {
      // TODO-QSP: dynamic text: You gasp as <<$npcdesc>> slips a finger inside your bra and tugs, resulting one ...
      scene.text(`You gasp as ${((s as any).npcdesc ?? '')} slips a finger inside your bra and tugs, resulting one of your breasts falling out of your dress. For his part, he doesn't miss a beat and immediately cups your breast with the same hand that exposed it as he bends his head towards your nipple.`);
    } else {
      // TODO-QSP: dynamic text: You gasp as <<$npcdesc>> slips a finger inside your bra and tugs, resulting one ...
      scene.text(`You gasp as ${((s as any).npcdesc ?? '')} slips a finger inside your bra and tugs, resulting one of your breasts falling out of your top. For his part, he doesn't miss a beat and immediately cups your breast with the same hand that exposed it as he bends his head towards your nipple.`);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['pav_disco_outside', 'boysex_titsuck'] },
  ]);
  scene.build();
}

function enterBoysexTitsuck(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp = (s as any).temp ?? {})['curr_action'] = 'titsuck';
  scene.img('images/locations/pavlovsk/community/tits.jpg');
  // TODO-QSP: dynamic text: '<<$npcdesc>> pops your nipple into his mouth and starts sucking, rolling his to...
  scene.text(`${((s as any).npcdesc ?? '')} pops your nipple into his mouth and starts sucking, rolling his tongue across the tip and around your areola. His free hand releases your other breast from ` + ((((s as any).PCloDress ?? 0) > 0) ? ('your dress ') : ('your top ')) + 'to palm it, gently squeezing it in a pulsing pattern while he sucks on your other tit.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['pav_disco_outside', 'sex_route', 'tit_suck'] },
  ]);
  scene.build();
}

function enterBoysexHandjob(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp = (s as any).temp ?? {})['curr_action'] = 'handjob';
  if (((s as any).npc_dirty_lover ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    scene.img('images/shared/sex/handjob/hj.jpg');
    // TODO-QSP: dynamic text: "Feel how hard I am for you," <<$npcdesc>> growls in your ear, taking your hand ...
    scene.text(`"Feel how hard I am for you," ${((s as any).npcdesc ?? '')} growls in your ear, taking your hand and shoving it down his pants, forcing you to wrap your fingers around his <b>${((s as any).npc_dick_desc ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''} cock</b> and pull it free.`);
    scene.actions([
      { label: 'This is too much', handler: (st: GameState) => {
    // TODO-QSP: xgt 'pav_disco_outside', 'toomuch_exit', 'handjob_stop'
  } },
    ]);
  } else {
    scene.img('images/locations/pavlovsk/community/disco/outside_kiss.jpg');
    // TODO-QSP: dynamic text: "Fuck, you''re so hot," <<$npcdesc>> breathes in your ear. "I need your hand on ...
    scene.text(`"Fuck, you're so hot," ${((s as any).npcdesc ?? '')} breathes in your ear. "I need your hand on my cock so bad right now."`);
    scene.actions([
      { label: 'This is too much', handler: (st: GameState) => {
    // TODO-QSP: xgt 'pav_disco_outside', 'toomuch_exit'
  } },
    ]);
  }
  qspCall(s, 'pav_disco_sex', 'handjob');
  // TODO-QSP: end
  scene.build();
}

function enterSexRoute(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 10) + 1) <= ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]) {
    if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'blowjob') {
      if (((s as any).temp ?? 0)?.['curr_action'] === 'kissing') {
        // TODO-QSP: dynamic text: <<$npcdesc>> breaks off the kiss and you hear the sound of his buckle coming loo...
        scene.text(`${((s as any).npcdesc ?? '')} breaks off the kiss and you hear the sound of his buckle coming loose. As you glance downward to confirm it, you feel a hand on your shoulder trying to push you down to your knees.`);
      } else {
        if (((s as any).temp ?? 0)?.['curr_action'] === 'titsuck') {
          // TODO-QSP: dynamic text: <<$npcdesc>> releases your nipple from his lips and you hear the sound of his bu...
          scene.text(`${((s as any).npcdesc ?? '')} releases your nipple from his lips and you hear the sound of his buckle coming loose. As you glance downward to confirm it, you feel a hand on your shoulder trying to push you down to your knees.`);
        } else {
          // TODO-QSP: dynamic text: You hear the sound of <<$npcdesc>>''s buckle coming loose. As you glance downwar...
          scene.text(`You hear the sound of ${((s as any).npcdesc ?? '')}'s buckle coming loose. As you glance downward to confirm it, you feel a hand on your shoulder trying to push you down to your knees.`);
        }
      }
      qspGoto(s, 'pav_disco_outside', 'blowjob_pre');
    } else {
      qspGoto(s, 'pav_disco_outside', 'bend_over');
    }
  } else {
    if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 'pav_residential') {
      scene.text('"Hey-" he says, breath hitching as he comes up for air. "Why don\'t we take this back to my place?"');
      qspCall(s, 'family_schedule', '');
      if (((s as any).locat ?? 0)?.['Fam_inGad'] === 1) {
        scene.actions([
          { label: 'Invite him home (hookup)', handler: (st: GameState) => {
    qspCall(st, 'fame', 'pav', 'sex', 1);
    scene.img('images/locations/pavlovsk/community/disco/outside_kiss.jpg');
    // TODO-QSP: dynamic text: "How about mine instead?" you ask. With a sultry smirk, you lean in to whisper i...
    scene.text(`"How about mine instead?" you ask. With a sultry smirk, you lean in to whisper in ${((st as any).npcdesc ?? '')}'s ear.`);
    scene.text('"<i>My parents aren\'t home tonight...</i>"');
    scene.text('The look in his eyes is all you need to know and the two of you rush back to the estate together.');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_start', 'pc_home_start', 'hookup'] },
    ]);
  } },
        ]);
      }
      if (((s as any).home ?? 0)?.['current'] === 'mey_home') {
        scene.actions([
          { label: 'Invite him home (hookup)', handler: (st: GameState) => {
    qspCall(st, 'fame', 'pav', 'sex', 1);
    scene.img('images/locations/pavlovsk/community/disco/outside_kiss.jpg');
    scene.text('"How about you come back to my place instead?" you ask. "My housemates won\'t mind."');
    scene.text('The look in his eyes is all you need to know and the two of you rush back to the Meynold\'s house together.');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_start', 'pc_home_start', 'hookup'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Pull out his cock', handler: (st: GameState) => {
    scene.img('images/shared/sex/handjob/hj.jpg');
    scene.text('You reach down his pants, grab hold of his erection and pull it out.');
    scene.text('"Why wait?" you grin, steadily stroking him.');
    qspGoto(st, 'pav_disco_sex', 'handjob');
  } },
        { label: 'Sure', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterOutsideImg(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('You pull your clothes back into place before letting him drag you away.');
    scene.actions([
      { label: 'Go to his place', goto: ['sex_ev_start', 'npc_home_start', 'hookup'] },
    ]);
  } },
      ]);
    } else {
      scene.text('"Hey-" he says, breath hitching as he comes up for air. "Want to take this back to my place in the city?"');
      qspCall(s, 'family_schedule', '');
      if (((s as any).locat ?? 0)?.['Fam_inGad'] === 1) {
        scene.actions([
          { label: 'Invite him home (hookup)', handler: (st: GameState) => {
    qspCall(st, 'fame', 'pav', 'sex', 1);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterOutsideImg(st, scene); (st as any).locArgs = __savedLocArgs; }
    // TODO-QSP: dynamic text: "How about mine instead?" you ask. With a sultry smirk, you lean in to whisper i...
    scene.text(`"How about mine instead?" you ask. With a sultry smirk, you lean in to whisper in ${((st as any).npcdesc ?? '')}'s ear.`);
    scene.text('"<i>My parents aren\'t home tonight...</i>"');
    scene.text('The look in his eyes is all you need to know and the two of you rush back to the estate together.');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_start', 'pc_home_start', 'hookup'] },
    ]);
  } },
        ]);
      }
      if (((s as any).home ?? 0)?.['current'] === 'mey_home') {
        scene.actions([
          { label: 'Invite him home (hookup)', handler: (st: GameState) => {
    qspCall(st, 'fame', 'pav', 'sex', 1);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterOutsideImg(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('"How about you come back to my place instead?" you ask. "My housemates won\'t mind."');
    scene.text('The look in his eyes is all you need to know and the two of you rush back to the Meynold\'s house together.');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_start', 'pc_home_start', 'hookup'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Pull out his cock', handler: (st: GameState) => {
    qspCall(st, 'fame', '');
    scene.img('images/shared/sex/handjob/hj.jpg');
    scene.text('You reach down his pants, grab hold of his erection and pull it out.');
    scene.text('"That\'s way too far," you grin, steadily stroking him.');
    qspGoto(st, 'pav_disco_sex', 'handjob');
  } },
        { label: 'Sure', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterOutsideImg(st, scene); (st as any).locArgs = __savedLocArgs; }
    if (((st as any).npc_car ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      scene.text('You pull your clothes back into place as he leads you back to his car.');
    } else {
      scene.text('You pull your clothes back into place as you let him drag you away to catch a cab.');
    }
    scene.actions([
      { label: 'Go to his place', goto: ['sex_ev_start', 'npc_home_start', 'hookup'] },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBlowjobPre(s: GameState, scene: SceneBuilder): void {
  if (((s as any).home ?? 0)?.['current'] === 'mey_home') {
    scene.actions([
      { label: 'Invite him home (hookup)', handler: (st: GameState) => {
    qspCall(st, 'fame', 'pav', 'sex', 1);
    scene.img('images/locations/pavlovsk/community/disco/outside_kiss.jpg');
    scene.text('"Wait," you stop suddenly, looking around. "I don\'t want to do this here. Would you wanna come back to my place instead?" you ask. "My housemates won\'t mind."');
    scene.text('The look in his eyes is all you need to know and the two of you rush back to the Meynold\'s house together.');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_start', 'pc_home_start', 'hookup'] },
    ]);
  } },
    ]);
  } else {
    qspCall(s, 'family_schedule', '');
    if (((s as any).locat ?? 0)?.['Fam_inGad'] === 1) {
      scene.actions([
        { label: 'Take him home', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/dk_night.jpg');
    // TODO-QSP: dynamic text: "Wait," you stop suddenly, looking around. "I don''t want to do this here. Would...
    scene.text(`"Wait," you stop suddenly, looking around. "I don't want to do this here. Would you wanna come back to my place instead?" you ask. With a sultry smirk, you lean in to whisper in ${((st as any).npcdesc ?? '')}'s ear.`);
    scene.text('"<i>My parents aren\'t home tonight...</i>"');
    scene.text('The look in his eyes is all you need to know and the two of you rush back to the estate together.');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_start', 'pc_home_start', 'hookup'] },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Stop!', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterOutsideImg(st, scene); (st as any).locArgs = __savedLocArgs; }
    // TODO-QSP: dynamic text: "Woah!" you yelp, stepping back to get out from under <<$npcdesc>>''s hand. "Wha...
    scene.text(`"Woah!" you yelp, stepping back to get out from under ${((st as any).npcdesc ?? '')}'s hand. "What do you think you're doing?!"`);
    if (((st as any).npc_shy ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      scene.text('He turns beet red and struggles to say something.');
      scene.text('"I- er- well we were just kinda doing stuff and I thought- y\'know- maybe, I could like-... get a blowjob...?"');
    } else {
      if (((st as any).npc_pushy ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
        scene.text('"Getting head," he replies quizzically. "What did you think you were supposed to do down there?"');
      } else {
        // TODO-QSP: dynamic text: "Er..." <<$npcdesc>> seems a slightly embarrassed. "Sorry, I just thought things...
        scene.text(`"Er..." ${((st as any).npcdesc ?? '')} seems a slightly embarrassed. "Sorry, I just thought things were going well and that you would be fine with giving me some head...?"`);
      }
    }
    scene.actions([
      { label: 'Storm off', handler: (st: GameState) => {
    scene.text('"Well you thought wrong," you sneer and stomp away.');
    scene.actions([
      { label: 'Go back to the disco', goto: ['pav_disco', ''] },
    ]);
  } },
      { label: 'Ask first (suck him off)', handler: (st: GameState) => {
    scene.text('"Just ask first," you smile wryly, and get down on your knees to get to work.');
    scene.actions([
      { label: 'Squat down', goto: ['pav_disco_sex', 'blowjob'] },
    ]);
  } },
    ]);
  } },
    { label: 'Squat down', goto: ['pav_disco_sex', 'blowjob'] },
    { label: 'Not here (suggest his place)', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/dk_night.jpg');
    scene.text('"Wait," you stop suddenly, looking around. "Not here. Maybe we could... go back to your place?"');
    scene.text('"That works for me," he grins. Then, pulling his pants back up, he rushes you to a nearby apartment complex, and you head inside.');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_start', 'npc_home_start', 'hookup'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterBendOver(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: Suddenly, <<$npcdesc>> faces you towards the wall and starts trying to bend you ...
  scene.text(`Suddenly, ${((s as any).npcdesc ?? '')} faces you towards the wall and starts trying to bend you over.`);
  if (((s as any).home ?? 0)?.['current'] === 'mey_home') {
    scene.actions([
      { label: 'Invite him home (hookup)', handler: (st: GameState) => {
    qspCall(st, 'fame', 'pav', 'sex', 1);
    scene.img('images/locations/pavlovsk/community/disco/outside_kiss.jpg');
    scene.text('"How about you come back to my place instead?" you ask. "My housemates won\'t mind."');
    scene.text('The look in his eyes is all you need to know and the two of you rush back to the Meynold\'s house together.');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_start', 'pc_home_start', 'hookup'] },
    ]);
  } },
    ]);
  } else {
    qspCall(s, 'family_schedule', '');
    if (((s as any).locat ?? 0)?.['Fam_inGad'] === 1) {
      scene.actions([
        { label: 'Take him home', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/dk_night.jpg');
    // TODO-QSP: dynamic text: With a sultry smirk, you lean in to whisper in <<$npcdesc>>''s ear.
    scene.text(`With a sultry smirk, you lean in to whisper in ${((st as any).npcdesc ?? '')}'s ear.`);
    scene.text('"<i>My parents aren\'t home tonight...</i>"');
    scene.text('The look in his eyes is all you need to know and the two of you rush back to the estate together.');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_start', 'pc_home_start', 'hookup'] },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Stop him', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterOutsideImg(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('"Hey!" You quickly turn back around, pushing him back. "What do you think you\'re doing?"');
    scene.text('"I just want to fuck you," he says as if that\'s all you needed to know.');
    scene.text('"Well, <i>I</i> don\'t you want to!"');
    if (((st as any).pav_disco_bj ?? 0)?.[String((st as any).npcID ?? 0)] >= ((st as any).totminut ?? 0) - 20) {
      scene.text('"Why not? You were fine sucking my dick a second ago!"');
    } else {
      scene.text('"Why not?"');
    }
    scene.actions([
      { label: 'I don\'t want to have sex', handler: (st: GameState) => {
    ((st as any).gdk = (st as any).gdk ?? {})['fuck'] = 2;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterOutsideImg(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('"I just don\'t want to!"');
    if (((st as any).pav_disco_bj ?? 0)?.[String((st as any).npcID ?? 0)] >= ((st as any).totminut ?? 0) - 20) {
      // TODO-QSP: dynamic text: "Ugh, fine." <<$npcdesc>> grabs you by the shoulder and pushes you back down to ...
      scene.text(`"Ugh, fine." ${((st as any).npcdesc ?? '')} grabs you by the shoulder and pushes you back down to your knees. "At least finish me off then."`);
    } else {
      // TODO-QSP: dynamic text: "Ugh, fine." <<$npcdesc>> grabs you by the shoulder and pushes you down to your ...
      scene.text(`"Ugh, fine." ${((st as any).npcdesc ?? '')} grabs you by the shoulder and pushes you down to your knees. "At least finish me off then."`);
    }
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterOutsideImg(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('"What?? You think I\'m going to just get down there after the way you\'re acting?"');
    scene.text('"But you said you didn\'t want to fuck!" he snarls.');
    // TODO-QSP: dynamic text: "Ugh, I don''t want to deal with you." You quickly back away from <<$npcdesc>> a...
    scene.text(`"Ugh, I don't want to deal with you." You quickly back away from ${((st as any).npcdesc ?? '')} and blueball him as you head back to the disco.`);
    scene.actions([
      { label: 'Go back to the disco', goto: ['pav_disco', ''] },
    ]);
  } },
      { label: 'Finish sucking him off', goto: ['pav_disco_sex', 'blowjob'] },
    ]);
  } },
      { label: 'This is too public', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterOutsideImg(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('"This is too public!" you hiss. "You think I\'ll fuck you where anybody could see?"');
    if (((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] === 1  ||  ((st as any).pav_disco_bj ?? 0)?.[String((st as any).npcID ?? 0)] > ((st as any).totminut ?? 0) - 20) {
      scene.text('"You were just sucking my dick!" he almost shouts. "Why is it too public to fuck, but it isn\'t to suck my dick?!"');
      scene.text('"It just is!" you huff back. "You know what? This whole thing was a mistake. You can sort that out yourself," you say, gesturing at his cock before you hurry away from him and back towards the disco.');
      scene.actions([
        { label: 'Go back to the disco', goto: ['pav_disco', ''] },
      ]);
    } else {
      // TODO-QSP: dynamic text: "Well..." <<$npcdesc>> scratches his head for a moment in confusion. "We don''t ...
      scene.text(`"Well..." ${((st as any).npcdesc ?? '')} scratches his head for a moment in confusion. "We don't have to do it in public. We could take this back to my place if you want..."`);
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    scene.text('"Nuh-uh. I\'m not up for that."');
    // TODO-QSP: dynamic text: "Oh. Well..." <<$npcdesc>> looks down at his still-hard cock. "Well, could you f...
    scene.text(`"Oh. Well..." ${((st as any).npcdesc ?? '')} looks down at his still-hard cock. "Well, could you finish me off at least?"`);
    scene.text('"Sure, we can do that, at least."');
    scene.actions([
      { label: 'Kneel down', goto: ['pav_disco_sex', 'blowjob'] },
    ]);
  } },
        { label: 'Go with him', handler: (st: GameState) => {
    scene.text('"Well... a bed <i>does</i> sound nice," you smile. Taking that as acceptance, he pulls up his pants and grabs you by the arm, leading you back to a nearby apartment complex.');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_start', 'npc_home_start', 'hookup'] },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } },
    { label: 'Bend over (sex)', goto: ['pav_disco_sex', 'insert'] },
    { label: 'Let it happen (sex)', goto: ['pav_disco_sex', 'insert', 'compliance'] },
    { label: 'Ask him to use a condom', goto: ['pav_disco_sex', 'insert', 'condom_request'] },
    { label: 'Not here (suggest his place)', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/dk_night.jpg');
    scene.text('"Wait!" you cry, looking around. "Not here. Maybe we could... go back to your place?"');
    scene.text('"That works for me," he grins. Then, pulling his pants back up, he rushes you to a nearby apartment complex, and you head inside.');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_start', 'npc_home_start', 'hookup'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSlutInvite(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterOutsideImg(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).npc_prostitution_count ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    if (((s as any).npc_assertive ?? 0)?.[String((s as any).npcID ?? 0)] + ((s as any).npc_pushy ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      // TODO-QSP: dynamic text: As soon as you get outside, <<$npcdesc>> draws close to you.
      scene.text(`As soon as you get outside, ${((s as any).npcdesc ?? '')} draws close to you.`);
      if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'blowjob') {
        scene.text('"Alright, bitch, we\'ve done this before so let\'s cut the shit," he grins. "I want my dick sucked. How much?"');
      } else {
        scene.text('"Alright, bitch, we\'ve done this before so let\'s cut the shit," he grins. "I want to fuck your pussy again. How much?"');
      }
    } else {
      if (((s as any).npc_shy ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
        // TODO-QSP: dynamic text: As soon as you get outside, <<$npcdesc>> starts suddenly becomes very timid and ...
        scene.text(`As soon as you get outside, ${((s as any).npcdesc ?? '')} starts suddenly becomes very timid and sheepish as he starts to stammer.`);
        scene.text('"Hey so, uhm... I had a good time last time and I was thinking... maybe you could, er, suck my dick again...? I have money..."');
      } else {
        scene.text('"So, I\'d like to get off with you again. How much did you want for it?"');
      }
    }
  } else {
    if (((s as any).npc_assertive ?? 0)?.[String((s as any).npcID ?? 0)] + ((s as any).npc_pushy ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      // TODO-QSP: dynamic text: As soon as you get outside, <<$npcdesc>> draws close to you.
      scene.text(`As soon as you get outside, ${((s as any).npcdesc ?? '')} draws close to you.`);
      if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'blowjob') {
        scene.text('"Alright, bitch, I know who you are so let\'s cut the shit," he grins. "How much for you to suck my dick?"');
      } else {
        scene.text('"Alright, bitch, I know who you are so let\'s cut the shit," he grins. "How much to fuck your pussy?"');
      }
    } else {
      if (((s as any).npc_shy ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
        // TODO-QSP: dynamic text: As soon as you get outside, <<$npcdesc>> starts suddenly becomes very timid and ...
        scene.text(`As soon as you get outside, ${((s as any).npcdesc ?? '')} starts suddenly becomes very timid and sheepish.`);
        scene.text('"Hey so, uhm... I heard your name around and was told if I have some money that you might be willing to, er... \'show me a good time\'...?"');
      } else {
        // TODO-QSP: dynamic text: As you get outside, <<$npcdesc>> casually pulls you aside out of the way and lea...
        scene.text(`As you get outside, ${((s as any).npcdesc ?? '')} casually pulls you aside out of the way and leans in to murmur softly.`);
        scene.text('"So, I heard you\'re kind of a slut. How much do I need to pay to fuck?"');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Deny it', handler: (st: GameState) => {
    scene.img('images/shared/misc/money.jpg');
    scene.text('You recoil in shock and disgust.');
    // TODO-QSP: '"I''m not a hooker!" you hiss. ' + iif(npc_prostitution_count[$npcID] = 0, '', '"I only did that wi...
    ((st as any).temp = (st as any).temp ?? {})['prostitution_offer'] = 500;
    if (((st as any).npc_prostitution_count ?? 0)?.[String((st as any).npcID ?? 0)] >= 5) {
      if (((st as any).npc_assertive ?? 0)?.[String((st as any).npcID ?? 0)] + ((st as any).npc_pushy ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
        // TODO-QSP: dynamic text: "You let me fuck you for money a whole lot more than ''one'' time," <<$npcdesc>>...
        scene.text(`"You let me fuck you for money a whole lot more than 'one' time," ${((st as any).npcdesc ?? '')} grins, stepping closer.`);
      } else {
        if (((st as any).npc_shy ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
          // TODO-QSP: dynamic text: "Well, I''m pretty sure it was a lot more than one time," <<$npcdesc>> stammers.
          scene.text(`"Well, I'm pretty sure it was a lot more than one time," ${((st as any).npcdesc ?? '')} stammers.`);
        } else {
          // TODO-QSP: dynamic text: "Come on, who are you kidding? It''s been a lot more than ''one time'', <<$pcs_n...
          scene.text(`"Come on, who are you kidding? It's been a lot more than 'one time', ${((st as any).pcs_nickname ?? '')}."`);
        }
      }
    } else {
      if (((st as any).fame ?? 0)?.['pav_slut'] >= 200) {
        if (((st as any).npc_assertive ?? 0)?.[String((st as any).npcID ?? 0)] + ((st as any).npc_pushy ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
          // TODO-QSP: dynamic text: "Please, don''t try to pretend," <<$npcdesc>> says, stepping closer. "Your name ...
          scene.text(`"Please, don't try to pretend," ${((st as any).npcdesc ?? '')} says, stepping closer. "Your name is all over town. I have it on good authority from friends you've fucked."`);
        } else {
          if (((st as any).npc_shy ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
            // TODO-QSP: dynamic text: "Er, I kinda think you are," <<$npcdesc>> mumbles. "I mean, I know a lot of peop...
            scene.text(`"Er, I kinda think you are," ${((st as any).npcdesc ?? '')} mumbles. "I mean, I know a lot of people who told me specifically how you let them fuck you for money..."`);
          } else {
            scene.text('"Come on, who are you kidding? Everybody knows already. I have at least three friends who have fucked you."');
          }
        }
      } else {
        if (((st as any).npc_assertive ?? 0)?.[String((st as any).npcID ?? 0)] + ((st as any).npc_pushy ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
          // TODO-QSP: dynamic text: "If you say so," <<$npcdesc>> grins, stepping closer. "But we can fix that."
          scene.text(`"If you say so," ${((st as any).npcdesc ?? '')} grins, stepping closer. "But we can fix that."`);
        } else {
          if (((st as any).npc_shy ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
            // TODO-QSP: dynamic text: "Oh! Uhm..." <<$npcdesc>> turns bright red. "Well... even so I really need to, u...
            scene.text(`"Oh! Uhm..." ${((st as any).npcdesc ?? '')} turns bright red. "Well... even so I really need to, uhh, y'know. I could pay you anyways...?"`);
          } else {
            // TODO-QSP: dynamic text: "Huh," <<$npcdesc>> blinks. "Well, I have some money you could earn regardless.
            scene.text(`"Huh," ${((st as any).npcdesc ?? '')} blinks. "Well, I have some money you could earn regardless.`);
          }
        }
      }
    }
    // TODO-QSP: dynamic text: He holds out <<$func(''money'', ''string_profit'', temp[''prostitution_offer''])...
    scene.text(`He holds out ${qspFunc(s, 'money', 'string_profit', ((st as any).temp ?? 0)?.['prostitution_offer'] ?? '')} in notes.`);
    qspCall(st, 'willpower', 'prostitution', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.text('"I said I\'m not a hooker!" you snarl and stomp off.');
    qspGoto(st, 'pav_disco_outside', 'exit_options');
  } },
      ]);
    }
    scene.actions([
      { label: 'Hesitantly accept', handler: (st: GameState) => {
    scene.img('images/shared/misc/take_money.jpg');
    scene.text('A long moment goes by as you stare at the notes in his hand before temptation overcomes you and you snatch it from his fingers.');
    scene.text('"Fine," you sigh in resignation. "What do you want?"');
    qspGoto(st, 'pav_disco_outside', 'slut_accept_route', 'paid');
  } },
      { label: 'Wryly accept', handler: (st: GameState) => {
    scene.img('images/shared/misc/take_money.jpg');
    scene.text('A long moment goes by with the two of you staring at each other before a you sigh in resignation.');
    scene.text('"Fine," you smile wryly as you take the notes from him. "I thought I might be able to outrun my rep but who am I kidding? What do you want?"');
    qspGoto(st, 'pav_disco_outside', 'slut_accept_route', 'paid');
  } },
      { label: 'Do it for free', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterOutsideImg(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('"No thanks," you push the money away from yourself.');
    if (((st as any).npc_assertive ?? 0)?.[String((st as any).npcID ?? 0)] + ((st as any).npc_pushy ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      // TODO-QSP: dynamic text: "But-!" <<$npcdesc>> starts, before you suddenly step close to him.
      scene.text(`"But-!" ${((st as any).npcdesc ?? '')} starts, before you suddenly step close to him.`);
    } else {
      if (((st as any).npc_shy ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
        // TODO-QSP: dynamic text: "But-!" <<$npcdesc>> squeaks, looking extremely embarrassed before you suddenly ...
        scene.text(`"But-!" ${((st as any).npcdesc ?? '')} squeaks, looking extremely embarrassed before you suddenly step close to him.`);
      } else {
        // TODO-QSP: dynamic text: "But-" <<$npcdesc>> starts, looking confused as you suddenly step close to him.
        scene.text(`"But-" ${((st as any).npcdesc ?? '')} starts, looking confused as you suddenly step close to him.`);
      }
    }
    scene.text('"I\'m not going to do it for money," you smile wryly. "I\'m not a hooker, but that doesn\'t mean I\'m not down to have some fun. So, what do you want to do?"');
    qspGoto(st, 'pav_disco_outside', 'slut_accept_route');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSlutAcceptRoute(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'paid') {
    qspCall(s, 'pav_disco_sex', 'disco_sex_fame', 'prostitute');
  }
  if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'blowjob') {
    if (((s as any).npc_assertive ?? 0)?.[String((s as any).npcID ?? 0)] + ((s as any).npc_pushy ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      // TODO-QSP: dynamic text: "Get on your knees," <<$npcdesc>> says, shoving you down before waiting for an a...
      scene.text(`"Get on your knees," ${((s as any).npcdesc ?? '')} says, shoving you down before waiting for an answer.`);
    } else {
      if (((s as any).npc_shy ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
        // TODO-QSP: dynamic text: "Uhmm... a uhm, blowjob would be good..." <<$npcdesc>> stammers.
        scene.text(`"Uhmm... a uhm, blowjob would be good..." ${((s as any).npcdesc ?? '')} stammers.`);
      } else {
        // TODO-QSP: dynamic text: "I wouldn''t say no to a blowjob right now," <<$npcdesc>> says, unzipping his tr...
        scene.text(`"I wouldn't say no to a blowjob right now," ${((s as any).npcdesc ?? '')} says, unzipping his trousers.`);
      }
    }
    scene.actions([
      { label: 'Squat down', goto: ['pav_disco_sex', 'blowjob', 'ARGS[1]'] },
    ]);
  } else {
    if (((s as any).npc_assertive ?? 0)?.[String((s as any).npcID ?? 0)] + ((s as any).npc_pushy ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      // TODO-QSP: dynamic text: "Turn around so I can fuck you," <<$npcdesc>> says, shoving you up against a pil...
      scene.text(`"Turn around so I can fuck you," ${((s as any).npcdesc ?? '')} says, shoving you up against a pillar of the building.`);
    } else {
      if (((s as any).npc_shy ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
        // TODO-QSP: dynamic text: "Uhmm... can I uhh, fuck your pussy...?" <<$npcdesc>> stammers.
        scene.text(`"Uhmm... can I uhh, fuck your pussy...?" ${((s as any).npcdesc ?? '')} stammers.`);
      } else {
        // TODO-QSP: dynamic text: "I just want a quick fuck," <<$npcdesc>> says, unzipping his trousers and gestur...
        scene.text(`"I just want a quick fuck," ${((s as any).npcdesc ?? '')} says, unzipping his trousers and gesturing for you to turn your ass towards him.`);
      }
    }
    scene.actions([
      { label: 'Bend over', goto: ['pav_disco_sex', 'insert', 'not_inside'] },
      { label: '"Just don\'t cum inside me"', goto: ['pav_disco_sex', 'insert'] },
      { label: 'Ask him to use a condom', goto: ['pav_disco_sex', 'insert', 'condom_request'] },
    ]);
  }
  // TODO-QSP: end
  // TODO-QSP: --- pav_disco_outside ---------------------------------
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
    case 'sex_route':
      enterSexRoute(s, scene);
      break;
    case 'blowjob_pre':
      enterBlowjobPre(s, scene);
      break;
    case 'bend_over':
      enterBendOver(s, scene);
      break;
    case 'slut_invite':
      enterSlutInvite(s, scene);
      break;
    case 'slut_accept_route':
      enterSlutAcceptRoute(s, scene);
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
