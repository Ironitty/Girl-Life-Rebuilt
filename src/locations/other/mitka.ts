import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).GadBoy) (s as any).GadBoy = {}; (s as any).GadBoy['mitka_day'] = ((s as any).daystart ?? 0);
  if (((s as any).GadBoy ?? 0)?.['first_drink'] === 0) {
    if (!(s as any).GadBoy) (s as any).GadBoy = {}; (s as any).GadBoy['first_drink'] = 1;
  }
  qspCall(s, 'stat', '');
  scene.text('<center><b>Mitka Shkvoryen</b></center>');
  scene.img('images/characters/shared/headshots_main/big63.jpg');
  if (((s as any).npc_rel ?? 0)?.['A63'] < 20) {
    scene.text('You and Mitka are strangers.');
  } else {
    if (((s as any).npc_rel ?? 0)?.['A63'] < 40) {
      scene.text('You and Mitka are acquaintances.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A63'] < 60) {
        scene.text('You and Mitka are friends.');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A63'] < 80) {
          scene.text('You and Mitka are good friends.');
        } else {
          scene.text('You and Mitka are best friends.');
        }
      }
    }
  }
  scene.text('He is barely older than you, you remember him from your childhood. You both used to swim in the local river together.');
  if (((s as any).npc_QW ?? 0)?.['A63'] === 0) {
    scene.text('You blush as you recall that you used to swim naked together when you were little.');
    if (((s as any).pcs_horny ?? 0) >= 50) {
      scene.text('You bite your lip and glance down at his crotch and can\'t help but wonder how much he has grown since then.');
    }
  }
  // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, how are you doing?"
  scene.text(`"Hey ${((s as any).pcs_nickname || '')}, how are you doing?"`);
  if ((((s as any).npc_rel ?? 0)?.['A63'] >= 60  ||  ((s as any).npc_QW ?? 0)?.['A63'] > 0)  &&  ((s as any).GadBoy ?? 0)?.['river_gang'] < 3) {
    scene.actions([
      { label: '"I\'m doing fine, thanks."', handler: (st: GameState) => {
    // TODO-QSP: xgt 'mitka', 'sex_chat'
  } },
    ]);
  } else {
    scene.actions([
      { label: '"I\'m doing fine, thanks."', handler: (st: GameState) => {
    // TODO-QSP: xgt 'mitka', 'normal_chat'
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterFirstChat(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'npc_relationship', 'set', 'A63', 10);
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: You introduce yourself, "I'm <<$pcs_nickname>>."
  scene.text(`You introduce yourself, "I'm ${((s as any).pcs_nickname || '')}."`);
  scene.text('"I couldn\'t help but notice, Are you new around here? I have lived my whole life in Gadukino but have never seen you before."');
  // TODO-QSP: dynamic text: If you want I could show you around the village, then he offers, "<<$mitkaInvita...
  scene.text(`If you want I could show you around the village, then he offers, "${((s as any).mitkaInvitation || '')}"`);
  qspCall(s, 'calendar', 'remove', 'mitka_drinking_invite');
  qspCall(s, 'calendar', 'add', 'mitka_drinking_invite');
  // TODO-QSP: end
  scene.actions([
    { label: 'Say goodbye', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterNormalChat(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A63', 1);
  qspCall(s, 'stat', '');
  scene.text('You greet him, "I\'m doing fine, thanks."');
  // TODO-QSP: dynamic text: Mitka smiles, "That's great to hear, <<$pcs_nickname>>.", then he offers, "<<$mi...
  scene.text(`Mitka smiles, "That's great to hear, ${((s as any).pcs_nickname || '')}.", then he offers, "${((s as any).mitkaInvitation || '')}"`);
  qspCall(s, 'calendar', 'remove', 'mitka_drinking_invite');
  qspCall(s, 'calendar', 'add', 'mitka_drinking_invite');
  // TODO-QSP: end
  scene.actions([
    { label: 'Say goodbye', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterSexChat(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A63', 2);
  qspCall(s, 'stat', '');
  scene.text('You greet him, "I\'m doing fine, thanks."');
  // TODO-QSP: dynamic text: Mitka smiles, "That's great to hear, <<$pcs_nickname>>.", then he offers, "<<$mi...
  scene.text(`Mitka smiles, "That's great to hear, ${((s as any).pcs_nickname || '')}.", then he offers, "${((s as any).mitkaInvitation || '')}"`);
  qspCall(s, 'calendar', 'remove', 'mitka_drinking_invite');
  qspCall(s, 'calendar', 'add', 'mitka_drinking_invite');
  if (((s as any).npc_QW ?? 0)?.['A63'] === 0) {
    // TODO-QSP: dynamic text: Mitka scratches his balls and adds with a grin: "Hey <<$pcs_nickname>>, do you w...
    scene.text(`Mitka scratches his balls and adds with a grin: "Hey ${((s as any).pcs_nickname || '')}, do you want to have some fun?"`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      qspCall(s, 'willpower', 'bj', 'resist');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'I don\'t know. My mother is obsessed with me staying a virgin.', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'I don\'t know. My mother is obsessed with me staying a virgin.', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A63', (-1));
    qspCall(s, 'willpower', 'bj', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('You turn around and walk away from Mitka. You know it would be fun, but you promised your mother…');
    scene.actions([
      { label: 'Walk away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
        ]);
      }
    }
    qspCall(s, 'willpower', 'bj', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'No thanks.', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'No thanks', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A63', (-1));
    qspCall(s, 'willpower', 'bj', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('You turn around and walk away from Mitka. You know it would be fun, but maybe another time…');
    scene.actions([
      { label: 'Walk away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Sounds tempting, but only a blowjob.', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/sex/mitka/mitkabjhome.jpg');
    // TODO-QSP: dynamic text: Mitka takes you to '+iif(GadBoy['first_drink'] > 1, 'the familiar old trailer', ...
    scene.text('Mitka takes you to \'+iif(GadBoy[\'first_drink\'] > 1, \'the familiar old trailer\', \'an old trailer\')+\' in the woods.');
    scene.text('Mitka sits down on a couch as you kneel in front of him. You take his cock out of his pants and start to suck…');
    qspCall(s, 'npc_relationship', 'modify', 'A63', 5);
    if (!(s as any).npc_QW) (s as any).npc_QW = {}; (s as any).npc_QW['A63'] = 1;
    qspCall(s, 'boyStat', 'A63');
    if (!(s as any).npc_had_sex) (s as any).npc_had_sex = {}; (s as any).npc_had_sex['A63'] = 1;
    qspCall(s, 'arousal', 'bj', 10, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Swallow', handler: (st: GameState) => {
    (s as any).temp_rand = Math.floor(Math.random() * 6) + 0;
    if ((!((s as any).temp_rand ?? 0))) {
      scene.img('images/locations/gadukino/sex/mitka/mitkabjhomecum2.jpg');
      scene.text('Mitka stands up and begins to furiously stroke his cock right in your face.');
      scene.text('Within a minute Mitka is panting hard and suddenly you feel hot cum splattering onto your face and in your mouth.');
      scene.text('You smile up at him and lick your lips, pleased with your efforts.');
      qspCall(s, 'cum_call', 'face', 'A63', 1);
    } else {
      if (((s as any).temp_rand ?? 0) <= 2) {
        scene.img('images/locations/gadukino/sex/mitka/mitkabjhomecum3.jpg');
        scene.text('You bob your head up and down on his cock, trying to cram as much of his cock deep into your mouth. Sometimes you gag as it enters your throat.');
        scene.text('Eventually, you feel Mitka\'s cock pulse and a few seconds later your mouth is filled with his salty sperm. You quickly swallow it all down.');
        qspCall(s, 'arousal', 'bj', 5, 'sub', 'deepthroat');
        qspCall(s, 'cum_call', 'mouth_swallow', 'A63', 1);
      } else {
        scene.img('images/locations/gadukino/sex/mitka/mitkabjhomecum1.jpg');
        scene.text('Mitka stands, places his hands on the back of your head and roughly forces you to take his cock deep into your throat.');
        scene.text('Slowly he builds up a rhythm and finally finishes in your mouth. He makes you swallow and lick him clean before removing his cock from your mouth.');
        qspCall(s, 'arousal', 'bj', 5, 'sub', 'deepthroat', 'rough');
        qspCall(s, 'cum_call', 'mouth_swallow', 'A63', 1);
      }
    }
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if ((((s as any).npc_QW ?? 0)?.['A63'] > 0  &&  ((s as any).npc_QW ?? 0)?.['A63'] < 11)  &&  (((s as any).MiraVars ?? 0)?.['QW'] < 2  ||  ((s as any).MiraVars ?? 0)?.['QW'] >= 11)) {
      // TODO-QSP: dynamic text: Mitka scratches his balls and adds with a grin: "Hey <<$pcs_nickname>>, do you w...
      scene.text(`Mitka scratches his balls and adds with a grin: "Hey ${((s as any).pcs_nickname || '')}, do you want to have some fun?"`);
      (s as any).temp_rand = Math.floor(Math.random() * 10) + 1;
      if ((((s as any).temp_rand ?? 0) === 1  ||  (((s as any).temp_rand ?? 0) < 5  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0))  &&  (!((s as any).mesec ?? 0))) {
        scene.text('"How about you let me fuck you today?" Mitka asks.');
        if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
          qspCall(s, 'willpower', 'sex', 'resist');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'No, I\'m still a virgin.', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'No, I\'m still a virgin.', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A63', (-2));
    qspCall(s, 'willpower', 'sex', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('You tell Mitka you are not ready to lose your virginity yet. You know it would be fun, but maybe another time…');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
            ]);
          }
        }
        qspCall(s, 'willpower', 'sex', 'resist');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'No thanks, not today.', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'No thanks, not today.', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A63', (-2));
    qspCall(s, 'willpower', 'sex', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('You turn around and walk away from Mitka. You know it would be fun, but maybe another time…');
    scene.actions([
      { label: 'Walk away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Sure, sounds like fun', handler: (st: GameState) => {
    if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
      scene.img('images/locations/gadukino/sex/mitka/mitkafirst.jpg');
    } else {
      scene.img('images/locations/gadukino/sex/mitka/mitka2.jpg');
    }
    // TODO-QSP: dynamic text: Mitka takes you to ' + iif(GadBoy['first_drink'] > 1, 'the familiar old trailer'...
    scene.text('Mitka takes you to \' + iif(GadBoy[\'first_drink\'] > 1, \'the familiar old trailer\', \'an old trailer\') + \' in the woods.');
    scene.text('He has you lie down on the bed and begins removing your clothes.');
    if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
      scene.text('You feel your hymen break as Mitka penetrates you. Mitka looks down at you and says, "Wow, how were you still a virgin? I should have savoured this moment longer!"');
    } else {
      scene.text('Mitka is clearly enjoying fucking you. He has a huge smile on his face as he holds you in place beneath him.');
    }
    scene.text('Mitka doesn\'t bother to pull out and cums deep inside you. Breathing heavily, he gets off of you and says, "You\'re a good fuck! We should do it again sometime."');
    qspCall(s, 'npc_relationship', 'modify', 'A63', 1);
    if (((s as any).npc_QW ?? 0)?.['A63'] < 10) {
      if (!(s as any).npc_QW) (s as any).npc_QW = {}; (s as any).npc_QW['A63'] = ((s as any).npc_QW['A63'] ?? 0) + (1);
    }
    qspCall(s, 'boyStat', 'A63');
    if (!(s as any).npc_had_sex) (s as any).npc_had_sex = {}; (s as any).npc_had_sex['A63'] = 1;
    qspCall(s, 'cum_call', '', '', 'A63', 1);
    qspCall(s, 'arousal', 'vaginal', 10, 'sub');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
        ]);
      } else {
        if (((s as any).temp_rand ?? 0) < 9) {
          scene.text('Can you give me a blowjob today?" Mitka asks.');
          qspCall(s, 'willpower', 'bj', 'resist');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'No thanks, not today.', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'No thanks, not today.', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A63', (-2));
    qspCall(s, 'willpower', 'bj', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('You turn around and walk away from Mitka. You know it would be fun, but maybe another time…');
    scene.actions([
      { label: 'Walk away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
            ]);
          }
          scene.actions([
            { label: 'Sure, sounds like fun', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/sex/mitka/mitkabjhome.jpg');
    // TODO-QSP: dynamic text: Mitka takes you to ' + iif(GadBoy['first_drink'] > 1, 'the familiar old trailer'...
    scene.text('Mitka takes you to \' + iif(GadBoy[\'first_drink\'] > 1, \'the familiar old trailer\', \'an old trailer\') + \' in the woods.');
    scene.text('Mitka sits down on a couch as you kneel in front of him. You take his cock out of his pants and start to suck…');
    qspCall(s, 'npc_relationship', 'modify', 'A63', 1);
    if (((s as any).npc_QW ?? 0)?.['A63'] < 10) {
      if (!(s as any).npc_QW) (s as any).npc_QW = {}; (s as any).npc_QW['A63'] = ((s as any).npc_QW['A63'] ?? 0) + (1);
    }
    qspCall(s, 'boyStat', 'A63');
    if (!(s as any).npc_had_sex) (s as any).npc_had_sex = {}; (s as any).npc_had_sex['A63'] = 1;
    qspCall(s, 'arousal', 'bj', 10, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Make him cum', handler: (st: GameState) => {
    (s as any).temp_randB = Math.floor(Math.random() * 6) + 0;
    if (((s as any).Mtemp_rand ?? 0) === 5) {
      scene.img('images/locations/gadukino/sex/mitka/mitkabjhomecum2.jpg');
      scene.text('Mitka stands up and begins to furiously stroke his cock right in your face.');
      scene.text('Within a minute Mitka is panting hard and suddenly you feel hot cum splattering onto your face and in your mouth.');
      scene.text('You smile up at him and lick your lips, pleased with your efforts.');
      qspCall(s, 'cum_call', 'face', 'A63', 1);
      qspCall(s, 'cum_call', 'mouth', 'A63', 1);
    } else {
      if (((s as any).temp_randB ?? 0) >= 3) {
        scene.img('images/locations/gadukino/sex/mitka/mitkabjhomecum3.jpg');
        scene.text('You bob your head up and down on his cock, trying to cram as much of his cock deep into your mouth. Sometimes you gag as it enters your throat.');
        scene.text('Eventually, you feel Mitka\'s cock pulse and a few seconds later your mouth is filled with his salty sperm. You quickly swallow it all down.');
        qspCall(s, 'arousal', 'bj', 5, 'sub', 'deepthroat');
        qspCall(s, 'cum_call', 'mouth_swallow', 'A63', 1);
      } else {
        scene.img('images/locations/gadukino/sex/mitka/mitkabjhomecum1.jpg');
        scene.text('Mitka stands, places his hands on the back of your head and roughly forces you to take his cock deep into your throat.');
        scene.text('Slowly he builds up a rhythm and finally finishes in your mouth. He makes you swallow and lick him clean before removing his cock from your mouth.');
        qspCall(s, 'arousal', 'bj', 5, 'sub', 'deepthroat', 'rough');
        qspCall(s, 'cum_call', 'mouth_swallow', 'A63', 1);
      }
    }
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  } },
          ]);
        } else {
          scene.text('"I want to do anal today. What do you think?" Mitka asks.');
          if ((!((s as any).pcs_ass ?? 0))) {
            qspCall(s, 'willpower', 'anal', 'resist');
            if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
              scene.actions([
                { label: 'No, I\'ve never done anal before', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
              ]);
            } else {
              scene.actions([
                { label: 'No, I\'ve never done anal before', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A63', (-2));
    qspCall(s, 'willpower', 'anal', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('You tell Mitka you are not ready to lose your anal virginity yet. You know it would be fun, but maybe another time…');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
              ]);
            }
          }
          qspCall(s, 'willpower', 'anal', 'resist');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'No thanks, not today.', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'No thanks, not today.', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A63', (-2));
    qspCall(s, 'willpower', 'anal', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('You turn around and walk away from Mitka. You know it would be fun, but maybe another time…');
    scene.actions([
      { label: 'Walk away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
            ]);
          }
          scene.actions([
            { label: 'Sure, sounds like fun', handler: (st: GameState) => {
    if (((s as any).pcs_ass ?? 0) < 10) {
      scene.img('images/locations/gadukino/sex/mitka/mitkaanalhome.jpg');
    } else {
      if (((s as any).pcs_ass ?? 0) >= 10  &&  ((s as any).pcs_ass ?? 0) < 25) {
        scene.img('images/locations/gadukino/sex/mitka/mitkaanalhome3.jpg');
      } else {
        if (((s as any).pcs_ass ?? 0) >= 25) {
          scene.img('images/locations/gadukino/sex/mitka/mitkaanalhome2.jpg');
        }
      }
    }
    // TODO-QSP: dynamic text: Mitka takes you to ' + iif(GadBoy['first_drink'] > 1, 'the familiar old trailer'...
    scene.text('Mitka takes you to \' + iif(GadBoy[\'first_drink\'] > 1, \'the familiar old trailer\', \'an old trailer\') + \' in the woods.');
    scene.text('He has you lie down on the bed and begins removing your clothes. Once undressed, he bends you over prepares to penetrate your ass.');
    if ((!((s as any).pcs_ass ?? 0))) {
      scene.text('"An anal virgin, huh? Well your ass will never be the same after this!" Mitka says as he pushes his cock inside your ass.');
    } else {
      scene.text('Mitka is clearly enjoying fucking your ass. He has a huge smile on his face as he holds you in place beneath him.');
    }
    scene.text('Mitka doesn\'t bother to pull out and cums deep inside your ass. Breathing heavily, he gets off of you and says, "Still a good fuck, but I would prefer your pussy instead."');
    qspCall(s, 'npc_relationship', 'modify', 'A63', 1);
    if (((s as any).npc_QW ?? 0)?.['A63'] < 10) {
      if (!(s as any).npc_QW) (s as any).npc_QW = {}; (s as any).npc_QW['A63'] = ((s as any).npc_QW['A63'] ?? 0) + (1);
    }
    qspCall(s, 'boyStat', 'A63');
    if (!(s as any).npc_had_sex) (s as any).npc_had_sex = {}; (s as any).npc_had_sex['A63'] = 1;
    qspCall(s, 'cum_call', 'anus', 'A63', 1);
    qspCall(s, 'arousal', 'anal', 15, 'sub', 'rough');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['gadukino', ''] },
    ]);
  } },
          ]);
        }
      }
    } else {
      if (((s as any).npc_QW ?? 0)?.['A63'] > 0  &&  ((s as any).npc_QW ?? 0)?.['A63'] < 11  &&  ((s as any).MiraVars ?? 0)?.['QW'] >= 2  &&  ((s as any).MiraVars ?? 0)?.['QW'] < 11) {
        // TODO-QSP: dynamic text: Mitka scratches his balls and adds with a grin: "Hey <<$pcs_nickname>>, do you w...
        scene.text(`Mitka scratches his balls and adds with a grin: "Hey ${((s as any).pcs_nickname || '')}, do you want to have some fun?"`);
        scene.text('You hesitate for a moment then look at him sternly.');
        scene.text('"What about Mira? Aren\'t you going out with her?"');
        scene.text('Mitka smiles sheepishly and has the decency to blush. He looks around to make sure Mira isn\'t nearby then tries to explain.');
        scene.text('"Well, I just figured since, you know, we already did stuff…" he trails off as he notices that you aren\'t going for it.');
        scene.text('"You thought wrong." you tell him coldly, "Unlike boys, girls don\'t fool around with their best friend\'s boyfriend."');
        scene.text('You turn around and walk away and Mitka kicks at the ground in frustration. You decide not to mention this to Mira.');
        scene.actions([
          { label: 'Walk away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Walk away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
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
    case 'first_chat':
      enterFirstChat(s, scene);
      break;
    case 'normal_chat':
      enterNormalChat(s, scene);
      break;
    case 'sex_chat':
      enterSexChat(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const mitka: LocationDef = {
  name: 'mitka',
  title: 'Mitka Shkvoryen',
  region: 'other',
  description: ['You and Mitka are strangers.'],
  enter: enter,
};
