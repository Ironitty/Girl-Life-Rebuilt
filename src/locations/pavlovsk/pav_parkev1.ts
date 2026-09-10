import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A20', 1);
  qspCall(s, 'npc_relationship', 'modify', 'A21', 1);
  qspCall(s, 'npc_relationship', 'modify', 'A143', 1);
  qspCall(s, 'npc_relationship', 'modify', 'A144', 1);
  (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'drugs', 'alcohol', 'beer');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/events/drinkbeerg\' + rand(1, 2) + \'.jpg');
  scene.text('You take the offered beer and take a swig of it as you listen to the girls talking about their latest ventures, ranging from vandalism, beating some girls up, bullying some of the nerds and outcasts, or what boys they find cute. You occasionally comment, but mostly just listen to them.');
  qspCall(s, 'willpower', 'drink', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Stop drinking and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Stop drinking and leave', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
  }, goto: ['pav_park', 'deeper_park'] },
    ]);
  }
  scene.actions([
    { label: 'Drink more', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'drugs', 'alcohol', 'beer');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/events/beer\' + rand(1, 2) + \'.jpg');
    scene.text('You grab another beer from the collection the girls have. They don\'t seem to mind, so you keep drinking as you continue listening to them.');
    qspCall(s, 'willpower', 'drink', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Stop drinking and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Stop drinking and leave', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
  }, goto: ['pav_park', 'deeper_park'] },
      ]);
    }
    scene.actions([
      { label: 'Drink even more', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'drugs', 'alcohol', 'beer');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/events/beer\' + rand(1, 2) + \'.jpg');
    scene.text('You\'re starting to feel the effects of the beers, but are having too much fun, so you grab another beer from the collection the girls have. They don\'t seem to mind, so you keep drinking as you continue listening to them.');
    qspCall(s, 'willpower', 'drink', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Stop drinking and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Stop drinking and leave', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
  }, goto: ['pav_park', 'deeper_park'] },
      ]);
    }
    scene.actions([
      { label: 'Grab another beer', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'drugs', 'alcohol', 'beer');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/events/beer\' + rand(1, 2) + \'.jpg');
    // TODO-QSP: dynamic text: You're feeling pretty drunk by now, and the girls seem to be amused by just how ...
    scene.text(`You're feeling pretty drunk by now, and the girls seem to be amused by just how drunk you are. They exchange a few words that you can't quite make out before Lena speaks up. "Hey ${((s as any).pcs_nickname ?? 0)}, you really know how to drink."`);
    scene.text('You nod at the compliment because it\'s coming from them. "Yeah, I do okay."');
    scene.text('This seems to amuse them even more. "Yeah, I bet you could down a beer faster than Alyona can, couldn\'t you?"');
    scene.text('You give her a look, wondering what she\'s up to, but right now, you feel like you could out-drink anyone, so you nod. "Yeah, I think I could."');
    scene.text('Lena grins widely. "Great, then how about we make a bet? If you can down one faster than Alyona, Lera will get naked, but if you lose, you need to get naked. What do you say?"');
    scene.text('Lera gives Lena a look of surprise, but Lena just nods and Lera doesn\'t say anything.');
    qspCall(s, 'willpower', 'exhib', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse bet [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse bet', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    scene.img('images/locations/pavlovsk/resident/apartment/events/eatmelera.jpg');
    if (((s as any).park ?? 0)?.['girl_eatlera'] === 1) {
      scene.text('You shake your head. "Like I said last time, I wouldn\'t win, so there\'s no reason for me to make that bet."');
      // TODO-QSP: dynamic text: You reach for another beer, but Lera pulls it away before you can grab it before...
      scene.text(`You reach for another beer, but Lera pulls it away before you can grab it before she stands up and pulls her pants down enough to show off her clit. "If you want another beer, you have to eat me again, ${((s as any).pcs_nickname ?? 0)}," she says with a smirk.`);
      // TODO-QSP: dynamic text: Before you can react or say anything, Lena speaks up. "I don't think so Lera." Y...
      scene.text(`Before you can react or say anything, Lena speaks up. "I don't think so Lera." You and everyone else look at her as she continues. "Since ${((s as any).pcs_nickname ?? 0)} loves eating pussy so much, she has to eat all our pussies."`);
      // TODO-QSP: dynamic text: Alyona and Lera smile, seemingly amused, while Anushka speaks up. "I love that i...
      scene.text(`Alyona and Lera smile, seemingly amused, while Anushka speaks up. "I love that idea. Come on ${((s as any).pcs_nickname ?? 0)}, you know you want to. We all know you love eating pussy."`);
      qspCall(s, 'arousal', 'erotic_nudity', 1);
      qspCall(s, 'stat', '');
      qspCall(s, 'willpower', 'cuni', 'resist');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'cuni', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    scene.img('images/pc/reactions/no.jpg');
    scene.text('You shake your head. "I\'m not licking everyone\'s pussy for a beer."');
    scene.text('Lena smirks. "You ate Lera for one last time. This is no different, just a little more pussy which we all know you love, just like Nush said."');
    scene.text('You look around, and all four encourage you to go down on them. You can\'t deny a tiny part of you is tempted and aroused at the idea of eating them all out. You\'re not sure you even care about the beer anymore, but can you let them boss you around like this?');
    qspCall(s, 'arousal', 'erotic_nudity', 1);
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'cuni', 'resist', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'cuni', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    scene.img('images/pc/reactions/no.jpg');
    scene.text('You shake your head. "No! I\'m not licking everyone\'s pussy for a beer!"');
    scene.text('Lera laughs. "Then you\'re not getting another beer." She starts drinking the beer you were trying to drink while still standing with her pussy on full display in front of you. Knowing you won\'t win this, you sigh and leave.');
    qspCall(s, 'arousal', 'erotic_nudity', 1);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Move away', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A20', 2);
    qspCall(s, 'npc_relationship', 'modify', 'A21', 2);
    qspCall(s, 'npc_relationship', 'modify', 'A143', 2);
    qspCall(s, 'npc_relationship', 'modify', 'A144', 2);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    (s as any).park['girl_eatlera'] = 2;
    scene.img('images/locations/pavlovsk/park/event/gopnik/gopnik_girls.jpg');
    scene.text('You sigh and give in to the peer pressure. "Okay fine, but I don\'t know why I\'m always the one on her knees."');
    scene.text('The girls are all excited. With her pussy already out, Lera is apparently going to be first while the rest eagerly wait their turn.');
    scene.text('"Shut up and put that tongue to good use for a change!" she snarls.');
    qspCall(s, 'arousal', 'erotic_nudity', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'On your knees', goto: ['pav_park_sex', 'eatlera'] },
    ]);
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Agree to eat everyone out', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A20', 2);
    qspCall(s, 'npc_relationship', 'modify', 'A21', 2);
    qspCall(s, 'npc_relationship', 'modify', 'A143', 2);
    qspCall(s, 'npc_relationship', 'modify', 'A144', 2);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    (s as any).park['girl_eatlera'] = 2;
    scene.img('images/locations/pavlovsk/park/event/gopnik/gopnik_girls.jpg');
    scene.text('You sigh and give in to the peer pressure. "Okay fine, but I don\'t know why I\'m always the one on her knees."');
    scene.text('The girls are all excited. With her pussy already out, Lera is apparently going to be first while the rest eagerly wait their turn.');
    scene.text('"Shut up and put that tongue to good use for a change!" she snarls.');
    qspCall(s, 'arousal', 'erotic_nudity', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'On your knees', goto: ['pav_park_sex', 'eatlera'] },
    ]);
  } },
      ]);
    } else {
      scene.text('You shake your head. "No, not going to make that bet." You reach for another beer, but Lera pulls it away before you can grab it. You sigh, knowing they will likely want you to go down on them again.');
      // TODO-QSP: dynamic text: She stands up and pulls her pants down enough to show off her clit. "If you want...
      scene.text(`She stands up and pulls her pants down enough to show off her clit. "If you want another, you know what you've got to do, ${((s as any).pcs_nickname ?? 0)}. We all know how much you love licking pussies after all," she says with a smirk.`);
      scene.text('You look around at the other girls. They seem to be in agreement. Anushka is already sitting on the picnic table with her legs spread, waiting for her turn. "I\'m starting to think you guys only want to drink with me so I\'ll eat you all out."');
      scene.text('They all exchange knowing glances, which answers your question.');
      // TODO-QSP: dynamic text: Anushka speaks up. "Come on <<$pcs_nickname>>, you know you want to. Everyone he...
      scene.text(`Anushka speaks up. "Come on ${((s as any).pcs_nickname ?? 0)}, you know you want to. Everyone here knows you loved eating our pussies last time."`);
      qspCall(s, 'arousal', 'erotic_nudity', 1);
      qspCall(s, 'stat', '');
      qspCall(s, 'willpower', 'cuni', 'resist');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'cuni', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    scene.img('images/pc/reactions/no.jpg');
    scene.text('You shake your head. "I\'m not licking everyone\'s pussy for a beer again! You\'re all just using me."');
    scene.text('Lena smirks. "You ate all our pussies last time. This is no different, just a little more pussy which we all know you love, just like Nush said."');
    scene.text('You look around, and all four encourage you to go down on them. You can\'t deny a tiny part of you is tempted and aroused at the idea of eating them all out. You\'re not sure you even care about the beer anymore, but can you let them boss you around like this?');
    qspCall(s, 'arousal', 'erotic_nudity', 1);
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'cuni', 'resist', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'cuni', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    scene.img('images/pc/reactions/no.jpg');
    scene.text('You shake your head. "No! I\'m not licking everyone\'s pussy for a beer again!"');
    scene.text('Lera laughs. "Then you\'re not getting another beer." She starts drinking the beer you were trying to drink while still standing with her pussy on full display in front of you. Knowing you won\'t win this, you sigh and leave them.');
    qspCall(s, 'arousal', 'erotic_nudity', 1);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Move away', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A20', 2);
    qspCall(s, 'npc_relationship', 'modify', 'A21', 2);
    qspCall(s, 'npc_relationship', 'modify', 'A143', 2);
    qspCall(s, 'npc_relationship', 'modify', 'A144', 2);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    (s as any).park['girl_eatlera'] = ((s as any).park['girl_eatlera'] ?? 0) + (1);
    scene.img('images/locations/pavlovsk/park/event/gopnik/gopnik_girls.jpg');
    scene.text('You sigh and give in to the peer pressure. "Okay fine, but I don\'t know why I\'m always the one on her knees."');
    scene.text('The girls are all excited. Lera, with her pussy already out, is apparently going to be first while the rest eagerly wait their turn. "Shut up and put that tongue to good use for a change," she snarls.');
    qspCall(s, 'arousal', 'erotic_nudity', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'On your knees', goto: ['pav_park_sex', 'eatlera'] },
    ]);
  } },
    ]);
  } },
        ]);
      }
      scene.text('You shake your head. "No, I don\'t think so. I wouldn\'t win, so there\'s no reason for me to make that bet."');
      // TODO-QSP: dynamic text: You reach for another beer, but Lera pulls it away before you can grab it before...
      scene.text(`You reach for another beer, but Lera pulls it away before you can grab it before she stands up and pulls her pants down enough to show off her clit. "If you want another beer, you have to eat me, ${((s as any).pcs_nickname ?? 0)}," she says with a smirk.`);
      scene.text('The other girls perk up at this and seem interested in what you\'re going to do.');
      qspCall(s, 'arousal', 'erotic_nudity', 1);
      qspCall(s, 'stat', '');
      qspCall(s, 'willpower', 'cuni', 'resist');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'cuni', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    scene.img('images/pc/reactions/no.jpg');
    scene.text('You shake your head. "I\'m not licking your pussy for a beer."');
    scene.text('She laughs. "Then you\'re not getting another beer." Lera starts drinking the beer you were trying to drink while still standing with her pussy on full display. You can\'t deny a tiny part of you is tempted and aroused at the idea of eating Lera out.');
    scene.text('You\'re not sure you even care about the beer anymore, but can you let them boss you around like this?');
    qspCall(s, 'arousal', 'erotic_nudity', 1);
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'cuni', 'resist', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'cuni', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    scene.img('images/pc/reactions/no.jpg');
    scene.text('You shake your head. "I\'m not licking your pussy for a beer."');
    scene.text('She laughs. "Then you\'re not getting another beer." Lera starts drinking the beer you were trying to drink while standing with her pussy on full display in front of you. Knowing you won\'t win this, you sigh and leave them.');
    qspCall(s, 'arousal', 'erotic_nudity', 1);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Move away', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A20', 2);
    qspCall(s, 'npc_relationship', 'modify', 'A21', 2);
    qspCall(s, 'npc_relationship', 'modify', 'A143', 2);
    qspCall(s, 'npc_relationship', 'modify', 'A144', 2);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    (s as any).park['girl_eatlera'] = 1;
    scene.img('images/locations/pavlovsk/park/event/gopnik/gopnik_girls.jpg');
    scene.text('You sigh and give in to the peer pressure. "Okay fine, I\'ll eat you out for a beer."');
    scene.text('The girls are all excited. "Well, hurry up and eat me then," Lera replies.');
    scene.text('Lena snorts. "Well, that didn\'t take much to convince the carpet muncher."');
    qspCall(s, 'arousal', 'erotic_nudity', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'On your knees', goto: ['pav_park_sex', 'eatlera'] },
    ]);
  } },
    ]);
  } },
        ]);
      }
      if (((s as any).grupTipe ?? 0) === 4) {
        qspCall(s, 'willpower', 'drink', 'force', 'hard');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Threaten Lera [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Threaten Lera', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A21', (-2));
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'drugs', 'alcohol', 'beer');
    qspCall(s, 'willpower', 'drink', 'force', 'hard');
    qspCall(s, 'willpower', 'pay', 'force');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/events/eatmelera.jpg');
    // TODO-QSP: dynamic text: You smile at Lera and reach over to pinch her clit between your index finger and...
    scene.text(`You smile at Lera and reach over to pinch her clit between your index finger and thumb, which makes her squeal in pain. She grabs your arm and tries to pull your hand away, which only makes it hurt more. "Fuck, ${((s as any).pcs_nickname ?? 0)}, let go before you rip my clit off!"`);
    scene.text('The other girls howl in laughter as you give her a sadistic smirk. "Give me a beer, and I\'ll let go."');
    scene.text('She gives you a dirty look, but winces as you dig your nails in even harder. With that, she quickly hands you another beer. You take your time taking another drink before releasing her.');
    scene.text('She pulls her pants back up and spends the next several minutes complaining about how much her clit hurts. Finally, with the last of the beers drank, the girls get up, and each says their farewells before they each go their own way.');
    scene.actions([
      { label: 'Move away', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
          ]);
        }
      }
      scene.actions([
        { label: 'Agree to eat everyone out', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A20', 2);
    qspCall(s, 'npc_relationship', 'modify', 'A21', 2);
    qspCall(s, 'npc_relationship', 'modify', 'A143', 2);
    qspCall(s, 'npc_relationship', 'modify', 'A144', 2);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    (s as any).park['girl_eatlera'] = ((s as any).park['girl_eatlera'] ?? 0) + (1);
    scene.img('images/locations/pavlovsk/park/event/gopnik/gopnik_girls.jpg');
    scene.text('You sigh and give in to the peer pressure. "Okay fine, but I don\'t know why I\'m always the one on her knees."');
    scene.text('The girls are all excited. Lera, with her pussy already out, is apparently going to be first while the rest eagerly wait their turn.');
    scene.text('"Shut up and stop acting like you don\'t love being our little pussy eating bitch!" she snarls.');
    qspCall(s, 'arousal', 'erotic_nudity', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'On your knees', goto: ['pav_park_sex', 'eatlera'] },
    ]);
  } },
        { label: 'Agree to eat Lera', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A20', 1);
    qspCall(s, 'npc_relationship', 'modify', 'A21', 2);
    qspCall(s, 'npc_relationship', 'modify', 'A143', 1);
    qspCall(s, 'npc_relationship', 'modify', 'A144', 1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    (s as any).park['girl_eatlera'] = 1;
    scene.img('images/locations/pavlovsk/park/event/gopnik/gopnik_girls.jpg');
    scene.text('You sigh and give in to the peer pressure. "Okay fine, I\'ll eat you out for a beer."');
    scene.text('The girls are all excited. "Well, hurry up and eat me then," Lera replies.');
    scene.text('Lena snorts. "Well, that didn\'t take much to convince the carpet muncher."');
    qspCall(s, 'arousal', 'erotic_nudity', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'On your knees', goto: ['pav_park_sex', 'eatlera'] },
    ]);
  } },
      ]);
    }
  } },
      ]);
    }
    if (((s as any).park ?? 0)?.['girl_bet'] >= 1) {
      scene.actions([
        { label: 'Last time you cheated', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/gopnik/gopnik_girls.jpg');
    scene.text('You shake your head. "Last time you cheated."');
    scene.text('Lera rolls her eyes and Lena snorts. "No, you lost. No one said you couldn\'t try to make the other fail," Lena says smugly.');
    scene.text('You sigh and shake your head. "Yeah, but you guys have got nothing to lose, so you can just make sure whoever you want to win wins."');
    scene.text('Anushka chimes in. "She has a point."');
    scene.text('Lena starts to say something, then stops, apparently seeing your point.');
    scene.text('Everyone is quiet for a moment before Alyona speaks up. "We could all drink and the losers get naked."');
    scene.text('The girls all exchange looks before Lena shrugs. "Fine, so what do you say? Or are you too much of a pussy?" she asks mockingly.');
    qspCall(s, 'willpower', 'exhib', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'npc_relationship', 'modify', 'A20', (-5));
    qspCall(s, 'npc_relationship', 'modify', 'A21', (-5));
    qspCall(s, 'npc_relationship', 'modify', 'A143', (-5));
    qspCall(s, 'npc_relationship', 'modify', 'A144', (-3));
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (5);
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/pc/reactions/no.jpg');
    scene.text('You shake your head. "No, I don\'t want to make a bet."');
    scene.text('Lera gives you a slight shove. "Then get the fuck out of here and don\'t come back."');
    scene.text('You know they will get over it eventually, but also know there\'s no point arguing with them, so you leave them to grumble.');
    scene.actions([
      { label: 'Move away', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    (s as any).park['girl_bet'] = ((s as any).park['girl_bet'] ?? 0) + (1);
    scene.img('images/locations/pavlovsk/park/event/gopnik/gopnik_girls.jpg');
    scene.text('You\'re feeling confident. "Fine, you got a bet."');
    scene.text('The girls laugh while Lena hands out beers. "Okay, start drinking when I say."');
    scene.text('When everyone nods, Lena smiles. "Drink!"');
    scene.actions([
      { label: 'Drink', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'drugs', 'alcohol', 'beer');
    qspCall(s, 'npc_relationship', 'modify', 'A20', 1);
    qspCall(s, 'npc_relationship', 'modify', 'A21', 1);
    qspCall(s, 'npc_relationship', 'modify', 'A143', 1);
    qspCall(s, 'npc_relationship', 'modify', 'A144', 1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (2);
    qspCall(s, 'stat', '');
    scene.img(`images/locations/pavlovsk/park/event/gopnik/gop_girls_naked${Math.floor(Math.random() * 2) + 1}.jpg`);
    scene.text('You start guzzling the beer, as do the other girls. You\'re all trying to poke each other in the stomach as you drink while trying not to laugh. It turns out to be more challenging than you thought with all the horse-playing.');
    if (((s as any).drink_winner ?? 0) === 'lena') {
      qspCall(s, 'fame', 'pav', 'sex', 1);
      scene.text('You try the best you can, but Lena throws her bottle down and howls before you can finish. "Yeah, take that bitches!"');
      scene.text('Alyona and Lera grumble a little, though Alyona finishes her beer anyway. Lena looks around at all of you. "Well? Strip bitches!"');
      scene.text('Alyona and Lera reluctantly start to strip. Anushka is the first one naked and doesn\'t seem to care in the slightest. Alyona and Lera, on the other hand, seem a bit embarrassed. You sigh and strip as well and everyone except Lena, who has a massive grin on her face, is soon naked.');
      scene.text('They eventually get a little more comfortable and go back to discussing various topics again. After some time, everyone finally goes quiet before they call it a night and everyone starts to redress before heading off on their own.');
      qspCall(s, 'arousal', 'flash', 10);
      qspCall(s, 'arousal', 'end');
    } else {
      qspCall(s, 'fame', 'pav', 'sex', 1);
      scene.text('You try your best, but Lera empties her bottle and tosses it aside before you finish. "Fuck yeah! Suck it, bitches!"');
      scene.text('Alyona and Lena grumble a little, though Alyona finishes her beer anyway. Lera looks around at all of you. "Come on, get on with it. Give me a little show," she says as she starts trying to hum a stripping song.');
      scene.text('Alyona and Lena reluctantly start to strip. Anushka is the first one naked and doesn\'t seem to care in the slightest. Alyona and Lena, on the other hand, seem a bit embarrassed. You sigh and strip as well and everyone except Lera, who makes catcalls and whistles, is soon naked.');
      scene.text('They eventually get a little more comfortable and go back to discussing various topics again. After some time, everyone finally goes quiet before they call it a night and everyone starts to redress before heading off on their own.');
      qspCall(s, 'arousal', 'flash', 10);
      qspCall(s, 'arousal', 'end');
      if (((s as any).drink_winner ?? 0) === 'alyona') {
        qspCall(s, 'fame', 'pav', 'sex', 1);
        scene.text('You try your best, but Alyona empties her bottle and belches loudly before you finish. "Alright losers, let\'s see some tits and ass!"');
        scene.text('Lena and Lera grumble a little and reluctantly start to strip. You sigh and strip as well while Anushka starts stripping when Alyona says "Come on Nush, give us a little show." Alyona pulls out her phone and starts playing music. Anushka laughs, but plays along as she starts to slowly strip. The rest of you are naked long before Anushka is, but she does a little strip tease for all of you while she gets naked.');
        scene.text('The girls all clap when Anushka finishes her little strip tease. That seemed to have relaxed everyone. The girls go back to discussing various topics again, like nothing was wrong, despite most of you being naked. After some time, everyone finally goes quiet before they call it a night and everyone starts to redress before heading off on their own.');
        qspCall(s, 'arousal', 'flash', 10);
        qspCall(s, 'arousal', 'end');
      } else {
        qspCall(s, 'fame', 'pav', 'sex', 1);
        scene.text('You try the best you can, but Anushka finishes first. As she does, she seems surprised to have won, looking at the rest of you still drinking and then back to her bottle before she slowly grins. "Alright girls, show me some skin."');
        scene.text('Lena, Lera and Alyona grumble and reluctantly start to strip. You sigh and strip as well. Anushka grabs Lera as she strips and pulls her close to her. "Come on baby, give me a lap dance."');
        scene.text('Lera blushes, but starts to get into it and gives Anushka a lap dance as she strips, which causes the rest to relax and laugh.');
        scene.text('With everyone but Anushka ironically naked, everyone gets a little more relaxed and goes back to discussing various topics again. After some time, everyone finally goes quiet before they call it a night and everyone starts to redress before heading off independently.');
        qspCall(s, 'arousal', 'flash', 10);
        qspCall(s, 'arousal', 'end');
        scene.text('You manage to finish before the rest. With a massive grin, you turn the bottle upside down. "Alright, pay up."');
        scene.text('Lena, Lera and Alyona grumble and reluctantly start to strip. Anushka just starts stripping and is the first one naked, seemingly not caring in the slightest. The other three, on the other hand, seem a bit embarrassed.');
        scene.text('Most of the girls are quiet and seem uncomfortable sitting naked, their eyes looking around. Then, Anushka, the only one who seems perfectly comfortable nude, starts talking like before. As Anushka keeps talking and you join in, the rest becomes more relaxed. After some time, everyone goes quiet before they call it a night and everyone starts to redress before heading off on their own.');
        qspCall(s, 'arousal', 'erotic_nudity', 10);
        qspCall(s, 'arousal', 'end');
      }
      scene.actions([
        { label: 'Go home', goto: ['pav_park', 'deeper_park'] },
      ]);
    }
  } },
    ]);
  } },
      { label: 'Make bet', handler: (st: GameState) => {
    (s as any).park['girl_bet'] = ((s as any).park['girl_bet'] ?? 0) + (1);
    scene.img('images/locations/pavlovsk/resident/apartment/events/beer\' + rand(1, 2) + \'.jpg');
    scene.text('You\'re feeling confident. "Fine, you got a bet."');
    scene.text('The girls laugh while Lena hands you and Alyona a beer. "Okay, start drinking when I say."');
    scene.text('When both you and Alyona nod, Lena smirks. "Drink!"');
    scene.text('You start guzzling the beer and are keeping up with Alyona, maybe even winning, when Lera suddenly pokes you in the stomach, which causes you to sputter out some beer and slow you down. Before you can recover, Alyona finishes.');
    // TODO-QSP: dynamic text: They all laugh while Lera taunts you. "Okay, strip and pay up, <<$pcs_nickname>>...
    scene.text(`They all laugh while Lera taunts you. "Okay, strip and pay up, ${((s as any).pcs_nickname ?? 0)}."`);
    scene.text('You give her a slight glare. "You cheated."');
    scene.text('She holds up her hands. "We never said you couldn\'t do something to make the other lose, so stop whining and pay up."');
    qspCall(s, 'willpower', 'exhib', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'npc_relationship', 'modify', 'A20', (-5));
    qspCall(s, 'npc_relationship', 'modify', 'A21', (-5));
    qspCall(s, 'npc_relationship', 'modify', 'A143', (-5));
    qspCall(s, 'npc_relationship', 'modify', 'A144', (-3));
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (5);
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/pc/reactions/no.jpg');
    scene.text('You shake your head. "No, you cheated."');
    scene.text('Lera gives you a slight shove. "Then get the fuck out of here and don\'t come back."');
    scene.text('You know they will get over it eventually, but also know there is no point arguing with them, so you leave them to grumble.');
    scene.actions([
      { label: 'Move away', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Pay up', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A20', 1);
    qspCall(s, 'npc_relationship', 'modify', 'A21', 1);
    qspCall(s, 'npc_relationship', 'modify', 'A143', 1);
    qspCall(s, 'npc_relationship', 'modify', 'A144', 1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    qspCall(s, 'fame', 'pav', 'sex', 2);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'arousal', 'flash', 5);
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/pavlovsk/resident/apartment/events/nudewalkg.jpg');
    scene.text('You strip off your clothes while the girls hoot and whistle. Once you\'re entirely naked, Lena points towards the park entrance. "Come on, let\'s go."');
    scene.text('You nod as Lera stops to grab your purse and clothes. They then follow behind you, laughing and talking while enjoying the view. A person occasionally walks by; some ogle your naked body while others shake their head in disgust, but none of them approaches or says anything.');
    scene.text('Just as you get near the entrance, it starts getting bright from the street and theatre lights. You stop and Lera tosses your clothes at you while the other girls walk away, laughing as you get dressed.');
    scene.actions([
      { label: 'Continue', goto: ['pav_park', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
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

export const pav_parkev1: LocationDef = {
  name: 'pav_parkev1',
  title: 'You take the offered beer and take a swig of it as you liste',
  region: 'pavlovsk',
  description: ['You take the offered beer and take a swig of it as you listen to the girls talking about their latest ventures, ranging from vandalism, beating some girls up, bullying some of the nerds and outcasts, or what boys they find cute. You occasionally comment, but mostly just listen to them.'],
  enter: enter,
};
