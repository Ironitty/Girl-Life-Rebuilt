import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterFemaleGopnikBeer_1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A20', 1);
  qspCall(s, 'npc_relationship', 'modify', 'A21', 1);
  qspCall(s, 'npc_relationship', 'modify', 'A143', 1);
  qspCall(s, 'npc_relationship', 'modify', 'A144', 1);
  ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).grupvalue[4] ?? 0) + (1);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'drugs', 'alcohol', 'beer');
  qspCall(s, 'stat', '');
  scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/events/drinkbeerg` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
  scene.text('You take the offered beer and take a swig of it as you listen to the girls talking about their latest ventures, ranging from vandalism, beating some girls up, bullying some of the nerds and outcasts, or what boys they find cute. You occasionally comment, but mostly just listen to them.');
  qspCall(s, 'willpower', 'drink', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Stop drinking and leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Stop drinking and leave', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspGoto(st, 'pav_park', 'deeper_park');
  } },
    ]);
  }
  scene.actions([
    { label: 'Drink more', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'drugs', 'alcohol', 'beer');
    qspCall(st, 'stat', '');
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/events/beer` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
    scene.text('You grab another beer from the collection the girls have. They don\'t seem to mind, so you keep drinking as you continue listening to them.');
    qspCall(st, 'willpower', 'drink', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Stop drinking and leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Stop drinking and leave', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspGoto(st, 'pav_park', 'deeper_park');
  } },
      ]);
    }
    scene.actions([
      { label: 'Drink even more', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'drugs', 'alcohol', 'beer');
    qspCall(st, 'stat', '');
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/events/beer` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
    scene.text('You\'re starting to feel the effects of the beers, but are having too much fun, so you grab another beer from the collection the girls have. They don\'t seem to mind, so you keep drinking as you continue listening to them.');
    qspCall(st, 'willpower', 'drink', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Stop drinking and leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Stop drinking and leave', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspGoto(st, 'pav_park', 'deeper_park');
  } },
      ]);
    }
    scene.actions([
      { label: 'Grab another beer', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'drugs', 'alcohol', 'beer');
    qspCall(st, 'stat', '');
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/events/beer` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
    scene.text(`You're feeling pretty drunk by now, and the girls seem to be amused by just how drunk you are. They exchange a few words that you can't quite make out before Lena speaks up. "Hey ${((st as any).pcs_nickname ?? '')}, you really know how to drink."`);
    scene.text('You nod at the compliment because it\'s coming from them. "Yeah, I do okay."');
    scene.text('This seems to amuse them even more. "Yeah, I bet you could down a beer faster than Alyona can, couldn\'t you?"');
    scene.text('You give her a look, wondering what she\'s up to, but right now, you feel like you could out-drink anyone, so you nod. "Yeah, I think I could."');
    scene.text('Lena grins widely. "Great, then how about we make a bet? If you can down one faster than Alyona, Lera will get naked, but if you lose, you need to get naked. What do you say?"');
    scene.text('Lera gives Lena a look of surprise, but Lena just nods and Lera doesn\'t say anything.');
    qspCall(st, 'willpower', 'exhib', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse bet', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse bet', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    scene.img('images/locations/pavlovsk/resident/apartment/events/eatmelera.jpg');
    if (((st as any).park ?? 0)?.['girl_eatlera'] === 1) {
      scene.text('You shake your head. "Like I said last time, I wouldn\'t win, so there\'s no reason for me to make that bet."');
      scene.text(`You reach for another beer, but Lera pulls it away before you can grab it before she stands up and pulls her pants down enough to show off her clit. "If you want another beer, you have to eat me again, ${((st as any).pcs_nickname ?? '')}," she says with a smirk.`);
      scene.text(`Before you can react or say anything, Lena speaks up. "I don't think so Lera." You and everyone else look at her as she continues. "Since ${((st as any).pcs_nickname ?? '')} loves eating pussy so much, she has to eat all our pussies."`);
      scene.text(`Alyona and Lera smile, seemingly amused, while Anushka speaks up. "I love that idea. Come on ${((st as any).pcs_nickname ?? '')}, you know you want to. We all know you love eating pussy."`);
      qspCall(st, 'arousal', 'erotic_nudity', 1);
      qspCall(st, 'stat', '');
      qspCall(st, 'willpower', 'cuni', 'resist');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'cuni', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    scene.img('images/pc/reactions/no.jpg');
    scene.text('You shake your head. "I\'m not licking everyone\'s pussy for a beer."');
    scene.text('Lena smirks. "You ate Lera for one last time. This is no different, just a little more pussy which we all know you love, just like Nush said."');
    scene.text('You look around, and all four encourage you to go down on them. You can\'t deny a tiny part of you is tempted and aroused at the idea of eating them all out. You\'re not sure you even care about the beer anymore, but can you let them boss you around like this?');
    qspCall(st, 'arousal', 'erotic_nudity', 1);
    qspCall(st, 'stat', '');
    qspCall(st, 'willpower', 'cuni', 'resist', 'easy');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'cuni', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    scene.img('images/pc/reactions/no.jpg');
    scene.text('You shake your head. "No! I\'m not licking everyone\'s pussy for a beer!"');
    scene.text('Lera laughs. "Then you\'re not getting another beer." She starts drinking the beer you were trying to drink while still standing with her pussy on full display in front of you. Knowing you won\'t win this, you sigh and leave.');
    qspCall(st, 'arousal', 'erotic_nudity', 1);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Move away', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A20', 2);
    qspCall(st, 'npc_relationship', 'modify', 'A21', 2);
    qspCall(st, 'npc_relationship', 'modify', 'A143', 2);
    qspCall(st, 'npc_relationship', 'modify', 'A144', 2);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (1);
    ((st as any).park = (st as any).park ?? {})['girl_eatlera'] = 2;
    scene.img('images/locations/pavlovsk/park/event/gopnik/gopnik_girls.jpg');
    scene.text('You sigh and give in to the peer pressure. "Okay fine, but I don\'t know why I\'m always the one on her knees."');
    scene.text('The girls are all excited. With her pussy already out, Lera is apparently going to be first while the rest eagerly wait their turn.');
    scene.text('"Shut up and put that tongue to good use for a change!" she snarls.');
    qspCall(st, 'arousal', 'erotic_nudity', 1);
    qspCall(st, 'stat', '');
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
    qspCall(st, 'npc_relationship', 'modify', 'A20', 2);
    qspCall(st, 'npc_relationship', 'modify', 'A21', 2);
    qspCall(st, 'npc_relationship', 'modify', 'A143', 2);
    qspCall(st, 'npc_relationship', 'modify', 'A144', 2);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (1);
    ((st as any).park = (st as any).park ?? {})['girl_eatlera'] = 2;
    scene.img('images/locations/pavlovsk/park/event/gopnik/gopnik_girls.jpg');
    scene.text('You sigh and give in to the peer pressure. "Okay fine, but I don\'t know why I\'m always the one on her knees."');
    scene.text('The girls are all excited. With her pussy already out, Lera is apparently going to be first while the rest eagerly wait their turn.');
    scene.text('"Shut up and put that tongue to good use for a change!" she snarls.');
    qspCall(st, 'arousal', 'erotic_nudity', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'On your knees', goto: ['pav_park_sex', 'eatlera'] },
    ]);
  } },
      ]);
    } else {
      if (((st as any).park ?? 0)?.['girl_eatlera'] >= 2) {
        scene.text('You shake your head. "No, not going to make that bet." You reach for another beer, but Lera pulls it away before you can grab it. You sigh, knowing they will likely want you to go down on them again.');
        scene.text(`She stands up and pulls her pants down enough to show off her clit. "If you want another, you know what you've got to do, ${((st as any).pcs_nickname ?? '')}. We all know how much you love licking pussies after all," she says with a smirk.`);
        scene.text('You look around at the other girls. They seem to be in agreement. Anushka is already sitting on the picnic table with her legs spread, waiting for her turn. "I\'m starting to think you guys only want to drink with me so I\'ll eat you all out."');
        scene.text('They all exchange knowing glances, which answers your question.');
        scene.text(`Anushka speaks up. "Come on ${((st as any).pcs_nickname ?? '')}, you know you want to. Everyone here knows you loved eating our pussies last time."`);
        qspCall(st, 'arousal', 'erotic_nudity', 1);
        qspCall(st, 'stat', '');
        qspCall(st, 'willpower', 'cuni', 'resist');
        if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'cuni', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    scene.img('images/pc/reactions/no.jpg');
    scene.text('You shake your head. "I\'m not licking everyone\'s pussy for a beer again! You\'re all just using me."');
    scene.text('Lena smirks. "You ate all our pussies last time. This is no different, just a little more pussy which we all know you love, just like Nush said."');
    scene.text('You look around, and all four encourage you to go down on them. You can\'t deny a tiny part of you is tempted and aroused at the idea of eating them all out. You\'re not sure you even care about the beer anymore, but can you let them boss you around like this?');
    qspCall(st, 'arousal', 'erotic_nudity', 1);
    qspCall(st, 'stat', '');
    qspCall(st, 'willpower', 'cuni', 'resist', 'easy');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'cuni', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    scene.img('images/pc/reactions/no.jpg');
    scene.text('You shake your head. "No! I\'m not licking everyone\'s pussy for a beer again!"');
    scene.text('Lera laughs. "Then you\'re not getting another beer." She starts drinking the beer you were trying to drink while still standing with her pussy on full display in front of you. Knowing you won\'t win this, you sigh and leave them.');
    qspCall(st, 'arousal', 'erotic_nudity', 1);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Move away', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A20', 2);
    qspCall(st, 'npc_relationship', 'modify', 'A21', 2);
    qspCall(st, 'npc_relationship', 'modify', 'A143', 2);
    qspCall(st, 'npc_relationship', 'modify', 'A144', 2);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (1);
    ((st as any).park = (st as any).park ?? {})['girl_eatlera'] = ((st as any).park['girl_eatlera'] ?? 0) + (1);
    scene.img('images/locations/pavlovsk/park/event/gopnik/gopnik_girls.jpg');
    scene.text('You sigh and give in to the peer pressure. "Okay fine, but I don\'t know why I\'m always the one on her knees."');
    scene.text('The girls are all excited. Lera, with her pussy already out, is apparently going to be first while the rest eagerly wait their turn. "Shut up and put that tongue to good use for a change," she snarls.');
    qspCall(st, 'arousal', 'erotic_nudity', 1);
    qspCall(st, 'stat', '');
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
    qspCall(st, 'npc_relationship', 'modify', 'A20', 2);
    qspCall(st, 'npc_relationship', 'modify', 'A21', 2);
    qspCall(st, 'npc_relationship', 'modify', 'A143', 2);
    qspCall(st, 'npc_relationship', 'modify', 'A144', 2);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (1);
    ((st as any).park = (st as any).park ?? {})['girl_eatlera'] = ((st as any).park['girl_eatlera'] ?? 0) + (1);
    scene.img('images/locations/pavlovsk/park/event/gopnik/gopnik_girls.jpg');
    scene.text('You sigh and give in to the peer pressure. "Okay fine, but I don\'t know why I\'m always the one on her knees."');
    scene.text('The girls are all excited. Lera, with her pussy already out, is apparently going to be first while the rest eagerly wait their turn.');
    scene.text('"Shut up and stop acting like you don\'t love being our little pussy eating bitch!" she snarls.');
    qspCall(st, 'arousal', 'erotic_nudity', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'On your knees', goto: ['pav_park_sex', 'eatlera'] },
    ]);
  } },
        ]);
      } else {
        scene.text('You shake your head. "No, I don\'t think so. I wouldn\'t win, so there\'s no reason for me to make that bet."');
        scene.text(`You reach for another beer, but Lera pulls it away before you can grab it before she stands up and pulls her pants down enough to show off her clit. "If you want another beer, you have to eat me, ${((st as any).pcs_nickname ?? '')}," she says with a smirk.`);
        scene.text('The other girls perk up at this and seem interested in what you\'re going to do.');
        qspCall(st, 'arousal', 'erotic_nudity', 1);
        qspCall(st, 'stat', '');
        qspCall(st, 'willpower', 'cuni', 'resist');
        if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'cuni', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    scene.img('images/pc/reactions/no.jpg');
    scene.text('You shake your head. "I\'m not licking your pussy for a beer."');
    scene.text('She laughs. "Then you\'re not getting another beer." Lera starts drinking the beer you were trying to drink while still standing with her pussy on full display. You can\'t deny a tiny part of you is tempted and aroused at the idea of eating Lera out.');
    scene.text('You\'re not sure you even care about the beer anymore, but can you let them boss you around like this?');
    qspCall(st, 'arousal', 'erotic_nudity', 1);
    qspCall(st, 'stat', '');
    qspCall(st, 'willpower', 'cuni', 'resist', 'easy');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'cuni', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    scene.img('images/pc/reactions/no.jpg');
    scene.text('You shake your head. "I\'m not licking your pussy for a beer."');
    scene.text('She laughs. "Then you\'re not getting another beer." Lera starts drinking the beer you were trying to drink while standing with her pussy on full display in front of you. Knowing you won\'t win this, you sigh and leave them.');
    qspCall(st, 'arousal', 'erotic_nudity', 1);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Move away', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A20', 2);
    qspCall(st, 'npc_relationship', 'modify', 'A21', 2);
    qspCall(st, 'npc_relationship', 'modify', 'A143', 2);
    qspCall(st, 'npc_relationship', 'modify', 'A144', 2);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (1);
    ((st as any).park = (st as any).park ?? {})['girl_eatlera'] = 1;
    scene.img('images/locations/pavlovsk/park/event/gopnik/gopnik_girls.jpg');
    scene.text('You sigh and give in to the peer pressure. "Okay fine, I\'ll eat you out for a beer."');
    scene.text('The girls are all excited. "Well, hurry up and eat me then," Lera replies.');
    scene.text('Lena snorts. "Well, that didn\'t take much to convince the carpet muncher."');
    qspCall(st, 'arousal', 'erotic_nudity', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'On your knees', goto: ['pav_park_sex', 'eatlera'] },
    ]);
  } },
    ]);
  } },
          ]);
        }
        if (((st as any).grupTipe ?? 0) === 4) {
          qspCall(st, 'willpower', 'drink', 'force', 'hard');
          if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Threaten Lera', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Threaten Lera', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A21', (-2));
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (1);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'drugs', 'alcohol', 'beer');
    qspCall(st, 'willpower', 'drink', 'force', 'hard');
    qspCall(st, 'willpower', 'pay', 'force');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/events/eatmelera.jpg');
    scene.text(`You smile at Lera and reach over to pinch her clit between your index finger and thumb, which makes her squeal in pain. She grabs your arm and tries to pull your hand away, which only makes it hurt more. "Fuck, ${((st as any).pcs_nickname ?? '')}, let go before you rip my clit off!"`);
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
          { label: 'Agree to eat Lera', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A20', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A21', 2);
    qspCall(st, 'npc_relationship', 'modify', 'A143', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A144', 1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (1);
    ((st as any).park = (st as any).park ?? {})['girl_eatlera'] = 1;
    scene.img('images/locations/pavlovsk/park/event/gopnik/gopnik_girls.jpg');
    scene.text('You sigh and give in to the peer pressure. "Okay fine, I\'ll eat you out for a beer."');
    scene.text('The girls are all excited. "Well, hurry up and eat me then," Lera replies.');
    scene.text('Lena snorts. "Well, that didn\'t take much to convince the carpet muncher."');
    qspCall(st, 'arousal', 'erotic_nudity', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'On your knees', goto: ['pav_park_sex', 'eatlera'] },
    ]);
  } },
        ]);
      }
    }
  } },
      ]);
    }
    if (((st as any).park ?? 0)?.['girl_bet'] >= 1) {
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
    qspCall(st, 'willpower', 'exhib', 'resist');
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
    qspCall(st, 'npc_relationship', 'modify', 'A20', (-5));
    qspCall(st, 'npc_relationship', 'modify', 'A21', (-5));
    qspCall(st, 'npc_relationship', 'modify', 'A143', (-5));
    qspCall(st, 'npc_relationship', 'modify', 'A144', (-3));
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) - (5);
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
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
    ((st as any).park = (st as any).park ?? {})['girl_bet'] = ((st as any).park['girl_bet'] ?? 0) + (1);
    scene.img('images/locations/pavlovsk/park/event/gopnik/gopnik_girls.jpg');
    scene.text('You\'re feeling confident. "Fine, you got a bet."');
    scene.text('The girls laugh while Lena hands out beers. "Okay, start drinking when I say."');
    scene.text('When everyone nods, Lena smiles. "Drink!"');
    scene.actions([
      { label: 'Drink', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'drugs', 'alcohol', 'beer');
    qspCall(st, 'npc_relationship', 'modify', 'A20', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A21', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A143', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A144', 1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (2);
    qspCall(st, 'stat', '');
    (st as any).drink_winner = qspFunc(s, 'pav_parkev1', 'drinking_game');
    scene.img(`images/locations/pavlovsk/park/event/gopnik/gop_girls_naked${(Math.floor(Math.random() * 2) + 1)}.jpg`);
    scene.text('You start guzzling the beer, as do the other girls. You\'re all trying to poke each other in the stomach as you drink while trying not to laugh. It turns out to be more challenging than you thought with all the horse-playing.');
    if (((st as any).drink_winner ?? 0) === 'lena') {
      qspCall(st, 'fame', 'pav', 'sex', 1);
      scene.text('You try the best you can, but Lena throws her bottle down and howls before you can finish. "Yeah, take that bitches!"');
      scene.text('Alyona and Lera grumble a little, though Alyona finishes her beer anyway. Lena looks around at all of you. "Well? Strip bitches!"');
      scene.text('Alyona and Lera reluctantly start to strip. Anushka is the first one naked and doesn\'t seem to care in the slightest. Alyona and Lera, on the other hand, seem a bit embarrassed. You sigh and strip as well and everyone except Lena, who has a massive grin on her face, is soon naked.');
      scene.text('They eventually get a little more comfortable and go back to discussing various topics again. After some time, everyone finally goes quiet before they call it a night and everyone starts to redress before heading off on their own.');
      qspCall(st, 'arousal', 'flash', 10);
      qspCall(st, 'arousal', 'end');
    } else {
      if (((st as any).drink_winner ?? 0) === 'lera') {
        qspCall(st, 'fame', 'pav', 'sex', 1);
        scene.text('You try your best, but Lera empties her bottle and tosses it aside before you finish. "Fuck yeah! Suck it, bitches!"');
        scene.text('Alyona and Lena grumble a little, though Alyona finishes her beer anyway. Lera looks around at all of you. "Come on, get on with it. Give me a little show," she says as she starts trying to hum a stripping song.');
        scene.text('Alyona and Lena reluctantly start to strip. Anushka is the first one naked and doesn\'t seem to care in the slightest. Alyona and Lena, on the other hand, seem a bit embarrassed. You sigh and strip as well and everyone except Lera, who makes catcalls and whistles, is soon naked.');
        scene.text('They eventually get a little more comfortable and go back to discussing various topics again. After some time, everyone finally goes quiet before they call it a night and everyone starts to redress before heading off on their own.');
        qspCall(st, 'arousal', 'flash', 10);
        qspCall(st, 'arousal', 'end');
      } else {
        if (((st as any).drink_winner ?? 0) === 'alyona') {
          qspCall(st, 'fame', 'pav', 'sex', 1);
          scene.text('You try your best, but Alyona empties her bottle and belches loudly before you finish. "Alright losers, let\'s see some tits and ass!"');
          scene.text('Lena and Lera grumble a little and reluctantly start to strip. You sigh and strip as well while Anushka starts stripping when Alyona says "Come on Nush, give us a little show." Alyona pulls out her phone and starts playing music. Anushka laughs, but plays along as she starts to slowly strip. The rest of you are naked long before Anushka is, but she does a little strip tease for all of you while she gets naked.');
          scene.text('The girls all clap when Anushka finishes her little strip tease. That seemed to have relaxed everyone. The girls go back to discussing various topics again, like nothing was wrong, despite most of you being naked. After some time, everyone finally goes quiet before they call it a night and everyone starts to redress before heading off on their own.');
          qspCall(st, 'arousal', 'flash', 10);
          qspCall(st, 'arousal', 'end');
        } else {
          if (((st as any).drink_winner ?? 0) === 'nush') {
            qspCall(st, 'fame', 'pav', 'sex', 1);
            scene.text('You try the best you can, but Anushka finishes first. As she does, she seems surprised to have won, looking at the rest of you still drinking and then back to her bottle before she slowly grins. "Alright girls, show me some skin."');
            scene.text('Lena, Lera and Alyona grumble and reluctantly start to strip. You sigh and strip as well. Anushka grabs Lera as she strips and pulls her close to her. "Come on baby, give me a lap dance."');
            scene.text('Lera blushes, but starts to get into it and gives Anushka a lap dance as she strips, which causes the rest to relax and laugh.');
            scene.text('With everyone but Anushka ironically naked, everyone gets a little more relaxed and goes back to discussing various topics again. After some time, everyone finally goes quiet before they call it a night and everyone starts to redress before heading off independently.');
            qspCall(st, 'arousal', 'flash', 10);
            qspCall(st, 'arousal', 'end');
          } else {
            scene.text('You manage to finish before the rest. With a massive grin, you turn the bottle upside down. "Alright, pay up."');
            scene.text('Lena, Lera and Alyona grumble and reluctantly start to strip. Anushka just starts stripping and is the first one naked, seemingly not caring in the slightest. The other three, on the other hand, seem a bit embarrassed.');
            scene.text('Most of the girls are quiet and seem uncomfortable sitting naked, their eyes looking around. Then, Anushka, the only one who seems perfectly comfortable nude, starts talking like before. As Anushka keeps talking and you join in, the rest becomes more relaxed. After some time, everyone goes quiet before they call it a night and everyone starts to redress before heading off on their own.');
            qspCall(st, 'arousal', 'erotic_nudity', 10);
            qspCall(st, 'arousal', 'end');
          }
        }
      }
    }
    (st as any).drink_winner = undefined;
    scene.actions([
      { label: 'Go home', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Make bet', handler: (st: GameState) => {
    ((st as any).park = (st as any).park ?? {})['girl_bet'] = ((st as any).park['girl_bet'] ?? 0) + (1);
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/events/beer` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
    scene.text('You\'re feeling confident. "Fine, you got a bet."');
    scene.text('The girls laugh while Lena hands you and Alyona a beer. "Okay, start drinking when I say."');
    scene.text('When both you and Alyona nod, Lena smirks. "Drink!"');
    scene.text('You start guzzling the beer and are keeping up with Alyona, maybe even winning, when Lera suddenly pokes you in the stomach, which causes you to sputter out some beer and slow you down. Before you can recover, Alyona finishes.');
    scene.text(`They all laugh while Lera taunts you. "Okay, strip and pay up, ${((st as any).pcs_nickname ?? '')}."`);
    scene.text('You give her a slight glare. "You cheated."');
    scene.text('She holds up her hands. "We never said you couldn\'t do something to make the other lose, so stop whining and pay up."');
    qspCall(st, 'willpower', 'exhib', 'resist');
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
    qspCall(st, 'npc_relationship', 'modify', 'A20', (-5));
    qspCall(st, 'npc_relationship', 'modify', 'A21', (-5));
    qspCall(st, 'npc_relationship', 'modify', 'A143', (-5));
    qspCall(st, 'npc_relationship', 'modify', 'A144', (-3));
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) - (5);
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
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
    qspCall(st, 'npc_relationship', 'modify', 'A20', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A21', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A143', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A144', 1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (1);
    qspCall(st, 'fame', 'pav', 'sex', 2);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'arousal', 'flash', 5);
    qspCall(st, 'arousal', 'end');
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
    }
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMaleGopnikBeer(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A9', 1);
  qspCall(s, 'npc_relationship', 'modify', 'A10', 1);
  qspCall(s, 'npc_relationship', 'modify', 'A11', 1);
  qspCall(s, 'npc_relationship', 'modify', 'A24', 1);
  qspCall(s, 'npc_relationship', 'modify', 'A155', 1);
  qspCall(s, 'npc_relationship', 'modify', 'A156', 1);
  qspCall(s, 'npc_relationship', 'modify', 'A157', 1);
  qspCall(s, 'npc_relationship', 'modify', 'A189', 1);
  ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).grupvalue[4] ?? 0) + (1);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'drugs', 'alcohol', 'beer');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/events/drinkbeer.jpg');
  scene.text('You take the offered beer and take a swig of it as you listen to the boys talking about their latest ventures, which range from vandalism and beating some guy up, to gangbanging some slut. You occasionally comment, but mostly just listen to them. On the other hand, Pauline often makes snide comments about the girls they had sex with and seems every bit as into the illegal stuff as the boys.');
  qspCall(s, 'willpower', 'drink', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Stop drinking and leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Stop drinking and leave', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspGoto(st, 'pav_park', 'deeper_park');
  } },
    ]);
  }
  scene.actions([
    { label: 'Drink more', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'drugs', 'alcohol', 'beer');
    qspCall(st, 'stat', '');
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/events/beer` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
    scene.text('You grab another beer from the boys\' collection. They don\'t seem to mind, so you keep drinking as you continue listening to them.');
    qspCall(st, 'willpower', 'drink', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Stop drinking and leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Stop drinking and leave', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspGoto(st, 'pav_park', 'deeper_park');
  } },
      ]);
    }
    scene.actions([
      { label: 'Drink even more', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'drugs', 'alcohol', 'beer');
    qspCall(st, 'stat', '');
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/events/beer` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
    if (((st as any).fame ?? 0)?.['pav_slut'] < 100  &&  ((st as any).grupTipe ?? 0) !== 4) {
      scene.text(`After you drink another beer, you're starting to feel the effects, but Vasily keeps you from grabbing another. "It's time for you to go, ${((st as any).pcs_nickname ?? '')}. Good girls don't get wasted like this."`);
      scene.text('He won\'t take no for an answer and escorts you away from them before turning and going back to join Vitek and Dan.');
      scene.actions([
        { label: 'Stop drinking and leave', goto: ['pav_park', 'deeper_park'] },
      ]);
    } else {
      if (((st as any).kotovLoveQW ?? 0) > 0) {
        scene.text(`After you drink another beer, you're starting to feel the effects, but Vitek gets up and pulls you up as well. "It's time for you to go, ${((st as any).pcs_nickname ?? '')}. You're getting drunk, so go home and I'll see you later."`);
        scene.text('He won\'t take no for an answer and escorts you away from them before turning and going back to join Vasily and Dan.');
        scene.actions([
          { label: 'Stop drinking and leave', goto: ['pav_park', 'deeper_park'] },
        ]);
      } else {
        if (((st as any).NikoVolkovQW ?? 0) >= 5  &&  ((st as any).NikoVolkovQW ?? 0)?.['park_drink'] === 0) {
          scene.text('Your head starts to feel a bit light from all the beers, but thoroughly enjoying the time you\'re having, you decide to reach out for another beer before Niko quickly snatches it.');
          scene.text('"My girl can really drink. Here, let me help you out." He opens the bottle before standing in front of you, holding the beer down to his waist as if it was his penis. "Drink up, my princess."');
        } else {
          scene.text('You\'re starting to feel the effects of the beers, but are having too much fun, so you grab another beer. They don\'t seem to mind, so you keep drinking as you continue listening to them.');
        }
        qspCall(st, 'willpower', 'drink', 'resist');
        if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Stop drinking and leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Stop drinking and leave', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspGoto(st, 'pav_park', 'deeper_park');
  } },
          ]);
        }
        if (((st as any).NikoVolkovQW ?? 0) >= 5) {
          scene.actions([
            { label: 'Drink the beer', handler: (st: GameState) => {
    ((st as any).NikoVolkovQW = (st as any).NikoVolkovQW ?? {})['park_drink'] = 1;
  }, goto: ['pav_parkev1', 'niko_beer_boys'] },
          ]);
        } else {
          scene.actions([
            { label: 'Grab another beer', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'drugs', 'alcohol', 'beer');
    qspCall(st, 'stat', '');
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/events/beer` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
    if (((st as any).NikoVolkovQW ?? 0) >= 5) {
      if (((st as any).pcs_hotcat ?? 0) >= 5) {
        scene.text('With that, everyone drinks the last of the beers, and you notice the area around you is littered with empty beer bottles. Once the final beer is gone, the talking continues, as it seems the guys are barely tipsy after the drinks they had.');
        scene.text('Feeling plastered, you try to get up to head out when you feel an arm wrapped around your waist. You turn to see Niko with a smile on his face. "It seems my princess has had a few too many. Let me get you home."');
      } else {
        scene.text('With that, everyone drinks the last of the beers, and you notice the area around you is littered with empty beer bottles. Once the final beer is gone, the talking starts to wind down, and people drift off; either alone, or in small groups.');
        scene.text('You get up and head out as well when you feel an arm wrapped around your waist and turn to see Niko with a smile on his face. "It seems my princess has had a few too many. Let me get you home."');
      }
      scene.actions([
        { label: 'I\'m fine', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big189.jpg');
    scene.text('You pull away from him and stagger away.');
    scene.text('He just watches you for a few seconds before shrugging. "Alright… I guess you\'re fine. Travel safely, my princess."');
    scene.text('He then turns around as he heads further down the park. The other gopniks seem to notice you struggling to stand up on your own.');
    if (((st as any).pcs_hotcat ?? 0) < 5) {
      scene.text('Despite your struggles, none of the other guys seem to care and they let you slowly stumble away on your own.');
      scene.actions([
        { label: 'Leave', goto: ['pav_park', 'deeper_park'] },
      ]);
    } else {
      if (((st as any).grupTipe ?? 0) === 1) {
        scene.text('With your legs too wobbly to carry your weight, you look around and notice the rest of the boys staring at you as Vasily approaches and playfully pats you on the back. "You know, being one of the stuck-up bitches, you\'re not so bad."');
        scene.text('Several of the others laugh and you see a few of them exchange smiles with a look you can\'t place in your drunken state.');
      } else {
        if (((st as any).grupTipe ?? 0) === 2) {
          scene.text('With your legs too wobbly to carry your weight, you look around and notice the rest of the boys staring at you as Vasily approaches and playfully pats you on the back. "You know, for being a brain-dead jock, you\'re not so bad."');
          scene.text('Several of the others laugh and you see a few of them exchange smiles with a look you can\'t place in your drunken state.');
        } else {
          scene.text('With your legs too wobbly to carry your weight, you look around and notice the rest of the boys staring at you as Vasily approaches and playfully pats you on the back. "You know, for being a loser nerd, you\'re not so bad."');
          scene.text('Several of the others laugh and you see a few of them exchange smiles with a look you can\'t place in your drunken state.');
        }
      }
      scene.actions([
        { label: 'Hang out some more', handler: (st: GameState) => {
    if ((!((st as any).svetafall ?? 0))) {
      if (((st as any).braworntype ?? 0) !== 'none') {
        qspGoto(st, 'pav_park_sex', 'pressured_for_bra');
      } else {
        qspGoto(st, 'pav_park_sex', 'pressured_for_tits');
      }
    } else {
      if (((st as any).svetafall ?? 0) === 1) {
        if (((st as any).pantyworntype ?? 0) !== 'none') {
          qspGoto(st, 'pav_park_sex', 'pressured_for_panties');
        } else {
          qspGoto(st, 'pav_park_sex', 'pressured_for_pussy');
        }
      } else {
        if (((st as any).svetafall ?? 0) === 2) {
          qspGoto(st, 'pav_park_sex', 'pressured_for_tits');
        } else {
          if (((st as any).svetafall ?? 0) === 3) {
            qspGoto(st, 'pav_park_sex', 'pressured_for_pussy');
          } else {
            if (((st as any).svetafall ?? 0) === 4) {
              qspGoto(st, 'pav_park_sex', 'pressured_for_blowjob');
            } else {
              if (((st as any).svetafall ?? 0) === 5) {
                qspGoto(st, 'pav_park_sex', 'pressured_for_oral_gb');
              } else {
                qspGoto(st, 'pav_park_sex', 'pressured_for_gangbang');
              }
            }
          }
        }
      }
    }
  } },
      ]);
    }
  } },
      ]);
    } else {
      if (((st as any).grupTipe ?? 0) === 4) {
        scene.text('With that, everyone drinks the last of the beers, and you notice the area around you is littered with empty beer bottles. Once the final beer is gone, the talking starts to wind down, and people drift off either alone or in small groups. You get up and head out as well.');
        scene.actions([
          { label: 'Leave', goto: ['pav_park', 'deeper_park'] },
        ]);
      } else {
        if (((st as any).grupTipe ?? 0) === 4  &&  ((st as any).fame ?? 0)?.['pav_slut'] >= 200  &&  ((st as any).pcs_hotcat ?? 0) >= 5) {
          scene.text('Everyone drinks the last of the beers and you notice the area around you is littered with empty beer bottles. Once the final beer is gone, the talking starts to wind down and people drift off, either alone or in small groups. You get up and head out as well.');
          scene.text(`"You're pretty drunk, ${((st as any).pcs_nickname ?? '')}. Let me take you home," you hear Dan say as he takes you by the arm.`);
          qspCall(st, 'willpower', 'misc', 'resist', 'medium');
          if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'I\'m fine', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'I\'m fine', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big10.jpg');
    scene.text('You pull away from him and stagger away. He just watches you for a few seconds before rejoining Vitek and Vasily.');
    scene.actions([
      { label: 'Leave', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
            ]);
          }
          scene.actions([
            { label: 'Go with Dan', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/school_kids/walkhome_dan.jpg');
    scene.text('He takes you by the arm and leads you out of the park. Walking down the street, you feel tipsy and almost fall several times, but Dan catches you each time.');
    scene.text('As he supports your weight, he tells you funny stories and anecdotes along the way, and before you know it, you\'re at your apartment building.');
    scene.text('When you open the door and enter the building, Dan walks you up to the second floor, where he suddenly and roughly shoves you into a dark corner of the stairwell. He takes your head by the chin and kisses your lips hard.');
    qspCall(st, 'willpower', 'kiss', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Push him away and go home', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Push him away and go home', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/dan/push_away.jpg');
    scene.text('You push him away from you. "No way, Dan! Leave me alone!"');
    scene.text('Dan\'s eyes look murderous, but he doesn\'t touch you. After a few seconds, he bounces back and grins. "Suit yourself, but don\'t expect me to always be so nice."');
    scene.text('He then walks away before you can get another word in.');
    scene.actions([
      { label: 'Go home', goto: ['pod_ezd', 'etaj_2'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Kiss him back', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/dan/kiss.jpg');
    scene.text('You return his kiss, unsure why he\'s kissing you; he never seemed that interested in you. Finally, you feel his hands on your shoulders, and he firmly presses down on them, trying to get you to drop to your knees.');
    scene.text(`"Don't worry, ${((st as any).pcs_nickname ?? '')}. I won't tell anyone about this. Do a good job, and your secret will stay safe with me…" he whispers reassuringly.`);
    qspCall(st, 'arousal', 'kiss', 2);
    qspCall(st, 'stat', '');
    qspCall(st, 'willpower', 'bj', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Push him away', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Push him away', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'fame', 'pav', 'sex', 5);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/dan/push_away.jpg');
    scene.text('You push him away from you. "No way, Dan! Leave me alone!"');
    scene.text('Dan\'s eyes look murderous, but he doesn\'t touch you. After a few seconds, he bounces back and grins. "Suit yourself, whore. Your reputation will be ruined when I tell everyone how you sucked me off in the stairwell."');
    scene.text('You shake your head. "But I didn\'t…"');
    scene.text('He laughs. "Your word against mine, and everyone saw how drunk you were. Let\'s see who they believe, huh?"');
    scene.text('He walks away before you can get another word in.');
    scene.actions([
      { label: 'Go home', goto: ['pod_ezd', 'etaj_2'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Squat before Dan', goto: ['pav_discoev1', 'dan'] },
    ]);
  } },
    ]);
  } },
          ]);
        } else {
          if (((st as any).pcs_hotcat ?? 0) >= 5) {
            if (((st as any).grupTipe ?? 0) === 1) {
              scene.text('With the beers almost gone, you look around and notice the rest don\'t seem to be as drunk as you feel.');
              scene.text('Vasily then slaps you on the back. "You know, being one of the stuck-up bitches, you\'re not so bad."');
              scene.text('Several of the others laugh and you see a few of them exchange smiles with a look you can\'t place in your drunken state.');
            } else {
              if (((st as any).grupTipe ?? 0) === 2) {
                scene.text('With the beers almost gone, you look around and notice the rest don\'t seem to be as drunk as you feel.');
                scene.text('Vasily then slaps you on the back. "You know, for being a brain-dead jock, you\'re not so bad."');
                scene.text('Several of the others laugh and you see a few of them exchange smiles with a look you can\'t place in your drunken state.');
              } else {
                scene.text('With the beers almost gone, you look around and notice the rest don\'t seem to be as drunk as you feel.');
                scene.text('Vasily then slaps you on the back. "You know, for being a loser nerd, you\'re not so bad."');
                scene.text('Several of the others laugh and you see a few of them exchange smiles with a look you can\'t place in your drunken state.');
              }
            }
            scene.actions([
              { label: 'Hang out some more', handler: (st: GameState) => {
    if ((!((st as any).svetafall ?? 0))) {
      if (((st as any).braworntype ?? 0) !== 'none') {
        qspGoto(st, 'pav_park_sex', 'pressured_for_bra');
      } else {
        qspGoto(st, 'pav_park_sex', 'pressured_for_tits');
      }
    } else {
      if (((st as any).svetafall ?? 0) === 1) {
        if (((st as any).pantyworntype ?? 0) !== 'none') {
          qspGoto(st, 'pav_park_sex', 'pressured_for_panties');
        } else {
          qspGoto(st, 'pav_park_sex', 'pressured_for_pussy');
        }
      } else {
        if (((st as any).svetafall ?? 0) === 2) {
          qspGoto(st, 'pav_park_sex', 'pressured_for_tits');
        } else {
          if (((st as any).svetafall ?? 0) === 3) {
            qspGoto(st, 'pav_park_sex', 'pressured_for_pussy');
          } else {
            if (((st as any).svetafall ?? 0) === 4) {
              qspGoto(st, 'pav_park_sex', 'pressured_for_blowjob');
            } else {
              if (((st as any).svetafall ?? 0) === 5) {
                qspGoto(st, 'pav_park_sex', 'pressured_for_oral_gb');
              } else {
                qspGoto(st, 'pav_park_sex', 'pressured_for_gangbang');
              }
            }
          }
        }
      }
    }
  } },
            ]);
          } else {
            if (((st as any).grupTipe ?? 0) === 1) {
              scene.text('With that, everyone drinks the last of the beers and you notice the area around you is littered with empty beer bottles. Once the final beer is gone, the talking starts to wind down.');
              scene.text('Vasily then slaps you on the back. "You know, being one of the stuck-up bitches, you\'re not so bad."');
              scene.text('Several of the others laugh, a few agree and some of the rest give disapproving looks. After that, people start to drift off alone or in small groups, so you get up and head out yourself.');
            } else {
              if (((st as any).grupTipe ?? 0) === 2) {
                scene.text('With that, everyone drinks the last of the beers and you notice the area around you is littered with empty beer bottles. Once the final beer is gone, the talking starts to wind down.');
                scene.text('Vasily then slaps you on the back. "You know, for being a brain-dead jock, you\'re not so bad."');
                scene.text('Several of the others laugh, a few agree and some of the rest give disapproving looks. After that, people start to drift off alone or in small groups, so you get up and head out yourself.');
              } else {
                scene.text('With that, everyone drinks the last of the beers and you notice the area around you is littered with empty beer bottles. Once the final beer is gone, the talking starts to wind down.');
                scene.text('Vasily then slaps you on the back. "You know, for being a loser nerd, you\'re not so bad."');
                scene.text('Several of the others laugh, a few agree and some of the rest give disapproving looks. After that, people start to drift off alone or in small groups, so you get up and head out yourself.');
              }
            }
            scene.actions([
              { label: 'Leave', goto: ['pav_park', 'deeper_park'] },
            ]);
          }
        }
      }
    }
  } },
          ]);
        }
      }
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterGopnikBeer(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A9', 1);
  qspCall(s, 'npc_relationship', 'modify', 'A10', 1);
  qspCall(s, 'npc_relationship', 'modify', 'A11', 1);
  qspCall(s, 'npc_relationship', 'modify', 'A20', 1);
  qspCall(s, 'npc_relationship', 'modify', 'A21', 1);
  qspCall(s, 'npc_relationship', 'modify', 'A24', 1);
  qspCall(s, 'npc_relationship', 'modify', 'A143', 1);
  qspCall(s, 'npc_relationship', 'modify', 'A144', 1);
  qspCall(s, 'npc_relationship', 'modify', 'A154', 1);
  qspCall(s, 'npc_relationship', 'modify', 'A155', 1);
  qspCall(s, 'npc_relationship', 'modify', 'A156', 1);
  qspCall(s, 'npc_relationship', 'modify', 'A157', 1);
  qspCall(s, 'npc_relationship', 'modify', 'A158', 1);
  qspCall(s, 'npc_relationship', 'modify', 'A189', 1);
  ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).grupvalue[4] ?? 0) + (1);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'drugs', 'alcohol', 'beer');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/events/drinkbeer.jpg');
  scene.text('You take the offered beer and take a swig of it as you listen to the boys talking about their latest ventures, which range from vandalism, beating some guy up, what girls they recently fucked and gangbanging some slut. The girls mostly talk about the same stuff, but not as much about who they\'re having sex with.');
  scene.text('The band slso brings up local gigs they\'ve done or songs they\'re working on. You sometimes comment, but mostly just listen to them.');
  qspCall(s, 'willpower', 'drink', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Stop drinking and leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Stop drinking and leave', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) - (1);
    qspGoto(st, 'pav_park', 'deeper_park');
  } },
    ]);
  }
  scene.actions([
    { label: 'Drink more', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'drugs', 'alcohol', 'beer');
    qspCall(st, 'stat', '');
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/events/beer` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
    if (((st as any).grupTipe ?? 0) === 4) {
      scene.text('You grab another beer from the collection. As you keep drinking while listening to your fellow gopniks\' wild stories, you only believe about half of them.');
    } else {
      scene.text('You grab another beer from the collection the gopniks have. They don\'t seem to mind, so you keep drinking as you continue listening to them.');
    }
    qspCall(st, 'willpower', 'drink', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Stop drinking and leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Stop drinking and leave', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspGoto(st, 'pav_park', 'deeper_park');
  } },
      ]);
    }
    scene.actions([
      { label: 'Drink even more', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'drugs', 'alcohol', 'beer');
    qspCall(st, 'stat', '');
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/events/beer` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
    if (((st as any).fame ?? 0)?.['pav_slut'] < 100  &&  ((st as any).grupTipe ?? 0) !== 4) {
      scene.text(`After you drink another beer, you're starting to feel the effects, but Vasily keeps you from grabbing another. "It's time for you to go, ${((st as any).pcs_nickname ?? '')}. Good girls don't get wasted like this."`);
      scene.text('He won\'t take no for an answer and escorts you away from them before turning and going back to join Vitek and Dan.');
      scene.actions([
        { label: 'Stop drinking and leave', goto: ['pav_park', 'deeper_park'] },
      ]);
    } else {
      if (((st as any).kotovLoveQW ?? 0) > 0) {
        scene.text(`After you drink another beer, you're starting to feel the effects, but Vitek gets up and pulls you up as well. "It's time for you to go, ${((st as any).pcs_nickname ?? '')}. You're getting drunk, so go home. I'll see you later."`);
        scene.text('He won\'t take no for an answer and escorts you away from them before turning and going back to join Vasily and Dan.');
        scene.actions([
          { label: 'Stop drinking and leave', goto: ['pav_park', 'deeper_park'] },
        ]);
      } else {
        if (((st as any).NikoVolkovQW ?? 0) >= 5  &&  ((st as any).NikoVolkovQW ?? 0)?.['park_drink'] === 0) {
          scene.text('Your head starts to feel a bit light from all the beers, but thoroughly enjoying the time you are having, you decide to reach out for another beer before Niko quickly snatches it. "My girl can really drink. Here, let me help you out."');
          scene.text('He then opens the bottle before standing in front of you, holding the beer down to his waist as if it was his penis. "Drink up, my princess."');
        } else {
          scene.text('You\'re starting to feel the effects of the beers, but are having too much fun, so you grab another beer. They don\'t seem to mind, so you keep drinking as you continue listening to them.');
        }
        qspCall(st, 'willpower', 'drink', 'resist');
        if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Stop drinking and leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Stop drinking and leave', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspGoto(st, 'pav_park', 'deeper_park');
  } },
          ]);
        }
        if (((st as any).NikoVolkovQW ?? 0) >= 5) {
          scene.actions([
            { label: 'Drink the beer', handler: (st: GameState) => {
    ((st as any).NikoVolkovQW = (st as any).NikoVolkovQW ?? {})['park_drink'] = 1;
  }, goto: ['pav_parkev1', 'niko_beer'] },
          ]);
        }
        scene.actions([
          { label: 'Grab another beer', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/events/beer` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
    scene.text('You can tell things are starting to wind down, so you start nursing your last beer to make it last. As Valentin gets up to take a piss, he bumps into Anushka\'s guitar and almost knocks it over.');
    scene.text('"Hey! Watch it, Val!" she tells him and picks it up before placing it in her lap for safety.');
    scene.text('He puts his hands up. "Sorry, it was an accident!"');
    scene.text('He then walks over to a tree facing away from the group and takes a piss as Radomir moves over to sit next to Anushka. "Play me something, Nush."');
    scene.text('You glance at him, but with the guitar already in hand, she lifts it up and starts to strum the strings.');
    scene.actions([
      { label: 'Listen to Radomir sing', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    if (((st as any).sound_settings ?? 0)?.['music_off'] === 0) {
      (st as any).track_loop = 'sound/rad_nush_park1.mp3';
      (st as any).volume = 100;
      (st as any).music_loop = 1;
    }
    qspCall(st, 'drugs', 'alcohol', 'beer');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/gopnik/nushplay1.jpg');
    scene.text('She starts to play something before Radomir prompts her. "You know what I want you to play."');
    scene.text('She looks up at him with a glare like he\'s an idiot, but he leans over and whispers in her ear. You can see her eyes roll slightly before she starts to play "Sweet Child O\' Mine" by Guns \'N\' Roses. After that, Radomir starts singing.');
    scene.text('The other gopniks, for the most part, pay attention and listen to them playing while drinking the last of the beers.');
    scene.text('Once they finish, most of the gopniks clap or give some form of approval before Dan speaks up. "Hey Nush, why don\'t you sing us something?"');
    scene.text('She looks at him suspiciously, like she\'s expecting something more. "I don\'t know…"');
    scene.text('Valentin is the first to start encouraging her before the others join in as well.');
    scene.actions([
      { label: 'Listen to Anushka', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    if (((st as any).sound_settings ?? 0)?.['music_off'] === 0) {
      (st as any).track_loop = 'sound/nushunplugged8.mp3';
      (st as any).volume = 100;
      (st as any).music_loop = 1;
    }
    ((st as any).anushkaQW = (st as any).anushkaQW ?? {})['park_music'] = 1;
    scene.img('images/locations/pavlovsk/park/event/gopnik/nushplay2.jpg');
    scene.text('She smirks. "Okay. Well, I\'ve been working on a new cover song, something to play at the graduation party for all my classmates."');
    scene.text('You can see that she\'s got a few of them curious as she strums the guitar before she starts to play and sing "Whore" by In this Moment. As the words sing in, a few of the gopniks exchange glances.');
    scene.text('You can tell a few of them are trying to decide if they should feel insulted or not as she starts. Radomir slides down behind her and reaches around to fondle her as she sings. After that, she just focuses on playing her guitar and singing.');
    scene.text('Once she finishes, she gets up and pulls away from him, but he grabs her hand and pulls her close before saying something quietly to her. It\'s obvious what he wants, but she just shakes her head and pushes him away. "It\'s just you and your hand tonight, baby."');
    scene.text('Several of the other gopniks laugh at the exchange. Dan especially seems to find it amusing.');
    scene.text('"Damn Nush, why have you got to do it this way? No need to be a bitch," Radomir says as he gets up as well.');
    scene.actions([
      { label: 'Finish the last of your beer', handler: (st: GameState) => {
    (st as any).music_loop = 0;
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img('images/locations/pavlovsk/park/event/gopnik/gopniks.jpg');
    scene.text('Anushka flips Radomir off after hearing his comment and several of the gopniks chuckle at their exchange as they break up into small groups. They give their typical farewells to each other, often snide remarks or the middle finger exchanged until you\'re the last one left.');
    if (((st as any).NikoVolkovQW ?? 0) >= 5) {
      scene.text('Feeling really tipsy, you try to get up and head out as well, but almost fall over when you feel an arm wrap around your waist and stop you from falling.');
      scene.text('You quickly turn to see Niko with a smile on his face. "It seems my princess has had a few too many. Let me get you home."');
      qspCall(st, 'willpower', 'misc', 'resist', 'medium');
      scene.actions([
        { label: 'I\'m fine', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/sad2.jpg');
    scene.text('You pull away from him and stagger away.');
    scene.text('He watches you for a few seconds before shrugging and saying, "Alright… I guess you\'re fine. Travel safely, my princess."');
    scene.text('He then turns around and joins Valentin as he heads further down the park.');
    scene.actions([
      { label: 'Leave', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
      ]);
    } else {
      if (((st as any).pcs_hotcat ?? 0) >= 7) {
        scene.text('Radomir looks at you and smiles as he walks over to you. "Hey beautiful, how about you and I go for a walk? It\'s a nice day after all."');
        scene.text('After failing to hook up with Anushka, you have no doubt what he wants, and it isn\'t a walk.');
        scene.actions([
          { label: 'Yes', goto: ['pav_park_sex', 'radomir_walk'] },
          { label: 'No', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A154', 'hate');
    scene.img('images/characters/shared/headshots_main/big154.jpg');
    if (((st as any).npc_rel ?? 0)?.['A144'] <= 60) {
      scene.text('You shake your head. "No thanks, maybe some other time."');
      scene.text('He shakes his head, obviously annoyed with you for turning him down. "Damn, what is up with you bitches today?" He then turns and starts jogging off to catch up with Lavrenti.');
      scene.text('As Lena and Lera leave, they invite Anushka and Alyona to come with them. Anushka refuses while Alyona leaves with them. Arkadi and Roman talk about finding more beer while Vitek, Dan and Vasily head off together.');
      scene.text('As you start to head off on your own, you hear Anushka behind you. "You coming or what?"');
      scene.actions([
        { label: 'Another time', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/walk/walk_day.jpg');
    scene.text('You shake your head. "Thanks, but maybe some other time. I\'ve got some stuff I need to do."');
    scene.text('She shrugs and heads off with Valentin, who suddenly grabs her from behind, wraps his arms around her waist and swings her up in the air, making her scream, then laugh. They then head out, leaving you alone.');
    scene.actions([
      { label: 'Leave', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
        { label: 'Sure', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/gopnik/walk_nush_val.jpg');
    scene.text('You smile at them. "Sure, thanks."');
    scene.text('You catch up to them and Valentin drops back to walk between you, wrapping his arms over your shoulders and pulling you both close to him. "So what are we going to do, girls?"');
    scene.text('He sounds excited as you glance over and see Anushka glancing at him with an amused look before she bursts out into a giggle. "What? What did I say?" he asks in confusion.');
    scene.actions([
      { label: 'Leave with them', goto: ['pav_park_sex', 'val_nush_walk'] },
    ]);
  } },
      ]);
    } else {
      scene.text('You shake your head. "No thanks, maybe some other time."');
      scene.text('He shakes his head, obviously annoyed with you for turning him down. "Damn, what is up with you bitches today?"');
      scene.text('He turns before jogging off to catch up with Lavrenti.');
      scene.actions([
        { label: 'Leave', goto: ['pav_park', 'deeper_park'] },
      ]);
    }
  } },
        ]);
      } else {
        if (((st as any).npc_rel ?? 0)?.['A144'] <= 60) {
          scene.text('As Lena and Lera leave, they invite Anushka and Alyona to come with them. Anushka declines while Alyona leaves with them. Arkadi and Roman talk about finding more beer while Vitek, Dan and Vasily head off together.');
          scene.text('As you start to head off on your own, you hear Anushka behind you. "You coming or what?"');
          scene.actions([
            { label: 'Another time', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/walk/walk_day.jpg');
    scene.text('You shake your head. "Thanks, but maybe some other time. I\'ve got some stuff I need to do."');
    scene.text('She shrugs and heads off with Valentin, who suddenly grabs her from behind, wraps his arms around her waist and swings her up in the air, making her scream, then laugh. They then head out, leaving you alone.');
    scene.actions([
      { label: 'Leave', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
            { label: 'Sure', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/gopnik/walk_nush_val.jpg');
    scene.text('You smile at them. "Sure, thanks." You catch up to them and Valentin drops back to walk between you and wraps his arms over your shoulders, pulling you both close to him. "So what are we going to do, girls?"');
    scene.text('He sounds excited as you glance over and see Anushka glancing at him with an amused look before she bursts out into a giggle. "What? What did I say?" he asks in confusion.');
    scene.actions([
      { label: 'Leave with them', goto: ['pav_park_sex', 'val_nush_walk'] },
    ]);
  } },
          ]);
        } else {
          scene.text('Radomir looks at you momentarily, then shakes his head and walks off alone. Anushka and Alyona head off together, with Valentin catching up to them, stepping between them with his arm over each of the girls\' shoulders. Vitek, Dan and Vasily, as always, leave together. Roman and Arkadi leave together, talking about going to find more beer, while Lena and Lera leave together, and the rest leave alone.');
          scene.actions([
            { label: 'Leave', goto: ['pav_park', 'deeper_park'] },
          ]);
        }
      }
    }
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
        ]);
      }
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterNikoBeer(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/charmer1.jpg');
  scene.text('Still craving another beer and not wanting to disappoint Niko, you nod your head before leaning forward and wrapping your lips around the bottle. You then begin drinking the beer as some of the other gopniks cheer and make lewd comments.');
  scene.text(`"Whoa, look at ${((s as any).pcs_nickname ?? '')} go!" Lena says as she watches. "Feeling a little slutty, huh?"`);
  scene.text('Lera snorts. "Oh look, she\'s blushing! She clearly likes being watched."');
  scene.text('Vitek laughs. "I see you trained her well, Niko. I need to get one of those."');
  scene.text('"Damn Niko, can I borrow her for a bit?" Dan asks.');
  scene.text(`"Depends on how much you're willing to pay," Niko replies. "${((s as any).pcs_nickname ?? '')} doesn't come cheap."`);
  if (((s as any).grupTipe ?? 0) === 4) {
    scene.text('Lena smirks. "Is she your little piggy bank, Niko? I never took you for a cuck."');
    scene.text('Niko feigns ignorance. "Of course not! I would never actually offer up my girl to anyone. I take good care of my girls."');
    scene.text('Vitek shakes his head. "Girls? As if any of them are lining up for <i>you</i>."');
    scene.text('Lera giggles. "You\'re lucky enough to find one girl that can tolerate your bullshit, let along multiple."');
    scene.actions([
      { label: 'Wait for Niko\'s reply', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    scene.img('images/characters/shared/headshots_main/big20.jpg');
    scene.text('"Oh, you wound me!" Niko replies in an exaggerated tone. "The reason I don\'t have the ladies lined up is because I\'m a one-girl guy," he smiles before gently brushing your cheek.');
    scene.text('Lera retorts, "Then why are you always hitting on Lena?" Lera retorts. "No one believes your shit, Niko."');
    scene.text('Vitek grunts, obviously not okay with Niko flirting with Lena. "Be careful sticking your nose where it doesn\'t belong, Niko. You\'re not someone I would trust with my sister."');
    scene.text('Lena rolls her eyes. "Mind your own business, Vitek."');
    scene.text('Vitek angrily grunts again. "Don\'t push me! I\'m not letting my sister fuck this clown, so deal with it."');
    scene.text('Wanting to tease Vitek further, Lena walks up to Niko before running her hand up his stomach. "But what if I want to fuck him right here? What then, huh?"');
    scene.text('You and Vitek both give her a deathly stare before Vitek quickly stands up. "Try it, and I\'ll crush every bone in his body!"');
    scene.text(`Not willing to back down, Lena turns to you. "What do you think, ${((st as any).pcs_nickname ?? '')}? You alright with sharing?"`);
    scene.text('She gives you a wink and a seductive grin as she awaits your reply. Though her demeanor seems to suggest that she\'s only teasing Vitek, her eyes tell a different story. She looks like she might be serious about her proposal.');
    scene.actions([
      { label: 'Just this once', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big9.jpg');
    scene.text('Deciding to play along, you nod your head. "Alright, but just this one time."');
    scene.text('Lena\'s eyes light up as she smugly turns back to Vitek.');
    scene.text('"It seems like she has spoken…" Niko says with a smug grin.');
    scene.text('The victory is short lived, however, as Vitek quickly lunges forward and punches Niko in the face, sending him falling back onto his seat.');
    scene.text('"You\'re not fucking my sister! You hear me, clown?!" he snarls.');
    scene.text('Niko seems completely dazed as he tightly grips his head, clearly in pain.');
    scene.text('Realizing that he got his point across, Vitek sits back in his seat. "Enough of these stupid games. Stay the fuck away from my sister."');
    scene.text('Anushka smirks. "If you had broken his nose, it might have improved his looks."');
    scene.text('Several of the other gopniks laugh at that and you shoot her a look.');
    scene.text('Feeling responsible for Niko getting hit, you quickly move over to him and gently wrapping your arms around him. "I\'m so sorry, Niko! Are you okay?"');
    scene.text('He groans in pain for a few seconds before looking up to you and trying to play it off. "I\'ve had harder hits. I\'m fine."');
    scene.actions([
      { label: 'Fuss over him', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/bench.jpg');
    scene.text('Not buying his response, you shake your head. "He hit you hard, Niko! We need to get you checked out."');
    scene.text(`Niko shakes his head. "I'm fine, ${((st as any).pcs_nickname ?? '')}. I don't need to see a doctor. I get hit all the time, it's normal."`);
    scene.text('You still feel worried. "Are you sure you\'re okay? I feel responsible for what happened. I helped Lena egg him on, but I had no idea he would snap like that."');
    scene.text(`He chuckles. "It's fine, ${((st as any).pcs_nickname ?? '')}. My princess is worth any hit. Now I need a drink, maybe two."`);
    scene.text('You eagerly nod. "I\'ll get you some." You quickly grab a few beers for both of you and take a seat next to him, gently rubbing his cheek as he drinks his beer.');
    scene.actions([
      { label: 'Finish your drinks', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/events/beer` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
    scene.text(`You both sit in silence for a few minutes as you both continue drinking. Niko then gives you a smile, along with a gentle kiss. "You're an incredible girl, ${((st as any).pcs_firstname ?? '')}, and I'm lucky to have you."`);
    scene.text('Feeling so enamored by his comment, you give Niko a wide smile. "I feel the same way, Niko. My mighty knight."');
    scene.text('You can hear one of the boys mocking your comment. "Aww, my mighty knight…"');
    scene.text('You turn to see Vasily mocking you before you roll your eyes and return your focus to Niko.');
    scene.text('Niko gently rubs your back as you both sit comfortably pressed up against each other on the bench until you both finish your beers.');
    scene.text(`Niko then releases you. "It's been a blast as always, ${((st as any).pcs_nickname ?? '')}, but I should get going."`);
    scene.text('You nod your head. "Alright, but be sure to travel home safely. You took a big hit."');
    scene.text('He chuckles, "Don\'t worry about me. I\'m invincible." He then turns around and walks away.');
    scene.actions([
      { label: 'Continue', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'No way', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'npc_relationship', 'modify', 'A20', 'dislike');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big20.jpg');
    scene.text('Disgusted by her offer, you scoff. "No way, I\'m not sharing my man with anyone!"');
    scene.text(`Lena gives you a bored stare before scoffing back. "You're no fucking fun! What about you, Niko? You're not afraid of my brother, right? I trust you're not pussy whipped by ${((st as any).pcs_nickname ?? '')}, either?"`);
    scene.text('Niko looks at Vitek, who gives him a deathly glare before shaking his head. "I… forgot something that I left back at home. It\'s been fun guys, but I\'ve got to go."');
    scene.text('Vitek grunts. "Good. Now if everyone is done fucking around, let\'s get back to drinking."');
    scene.text('Clearly upset with both rejections, Lena angrily tosses her bottle into the trash, causing it to smash inside, before she storms off. "I can\'t fucking do anything fun!"');
    scene.text('Vitek just shakes his head before returning to his beer as everyone else seems to drink their beers in silence. Seeing how much the mood has shifted, you decide to finish your beer, then leave.');
    scene.actions([
      { label: 'Continue', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    scene.text(`Lena smirks. "A slut like her can't be worth that much. I bet ${((s as any).pcs_nickname ?? '')} gives it up for free. Isn't that right, slut?"`);
    scene.text('Niko chuckles. "Of course not. I was making sure she was properly hydrated first." He then pulls the beer away from you, causing you to break out into an uncontrollable coughing fit as Niko begins unbuttoning his pants, exposing his fully erect penis before holding it in front of your face. "Can you grace me with your touch, my brave princess? It would really mean the world to me."');
    scene.text('He gives you a warm smile as he presses his cock against your lips. You look around, seeing all the other gopniks staring at you with wide grins.');
    qspCall(s, 'willpower', 'sex', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
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
    scene.text('You pull away from him and get up. "No, not in front of everyone."');
    scene.text('Niko looks wounded by your words. "You wound me to my core, my princess! Why can\'t you bestow such a simple gift upon me?"');
    scene.text('By now, everyone is watching and most of the boys are laughing as you feel your cheeks heat up. "No. I\'m going home."');
    scene.text('You then hurry away with uproarious laughter echoing behind you.');
    scene.actions([
      { label: 'Leave', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Suck Niko\'s cock', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/park/bj.mp4');
    scene.text('Remembering everything Niko told you about being more confident, you begin slowly sucking on his cock as you hear the other gopniks talking. Wanting only to please Niko, you try to ignore them as you slowly rub your tongue around his shaft while feeling his cock lightly throbbing in your mouth.');
    scene.text('"I bet she wants the boys to fuck her, right here in the park," Lera loudly states. "It\'s obvious that she loves an audience."');
    scene.text('"Don\'t worry, I\'ll make sure that she\'s very popular," Pauline replies.');
    scene.text('You slowly turn to see Pauline holding her phone in her hand, recording you sucking Niko\'s cock in front of everyone. The sudden realization of the situation then hits you, causing you to pull away from Niko, sliding his cock out of your mouth before you hear him groan. His penis begins quickly throbbing as cum shoots out, landing on your face in rapid spurts.');
    qspCall(st, 'arousal', 'bj', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/cum/facial1.mp4');
    scene.text('Niko then begins quickly stroking his dick, milking his cock over your face as Pauline continues to record it and the other gopniks holler & cheer as they speak amongst themselves.');
    scene.text(`"Whoa, ${((st as any).pcs_nickname ?? '')} can really suck, can't she?" Lena comments. "Like she's a pro at it by how fast she got Niko off."`);
    scene.text('"Niko cumming quickly sounds about right," Vasily quickly retorts.');
    scene.text('Niko shakes his head as he continues spurting cum over your face. "Only when it\'s my girl, because she is… The best!"');
    scene.text('"So you train this wannabe slut yourself or have all the boys been helping?" Lena asks.');
    scene.text('"Like I always say, just give them a little training and bitches will do whatever you want," Radomir comments.');
    scene.text('Lavrenti leans over to Radomir. "Don\'t let Nush hear you say that."');
    scene.text('"Nah, she likes a little dirty talk," he smugly replies. He then looks at Anushka sitting nearby. "Don\'t you, babe?"');
    scene.text('Anushka\'s only response is to flip him off.');
    qspCall(st, 'cum_call', 'face', 'A189');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Just wait', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/charmer1.jpg');
    scene.text('Niko chuckles. "I\'ve always been a good teacher, Lena. If you only gave me a chance then you would find out." He gives her a wolfish grin as she looks back at him with a smirk.');
    scene.text('"Is that so?" You then see Vitek suddenly shove Niko back. "Stay the fuck away from my sister! You have your slut. You\'re not tricking my sister into doing shit like that!"');
    scene.text('Niko grins, obviously not taking the situation seriously. "All girls can be trained. You just need the right teacher…"');
    scene.text('Vitek suddenly punches Niko in the face, knocking him onto the ground before standing over him. "Keep your fucking eyes off Lena or I\'ll smash every bone in your body! You understand me, clown?!"');
    scene.text('Suddenly realizing the gravity of the situation, Niko quickly responds. "Yeah, totally! I was joking, you know me…" He then grips his face as Vitek heads back to his seat.');
    scene.actions([
      { label: 'See what happens next', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big24.jpg');
    scene.text('After Vitek sits down, all attention of the crowd switches back to you as cum trickles down your face. You see the gopniks all jeering at you while Pauline continues recording you.');
    scene.text('Vasily examines your face carefully. "Look at this fine piece of art. Is this your masterpiece, Niko?" he chuckles as Niko grunts in pain.');
    if (((st as any).grupTipe ?? 0) === 1) {
      scene.text('Dan laughs. "She\'s definitely a good cock sucker. I see now why she\'s so popular. I bet she sucks Dimka\'s cock for her popularity."');
      scene.text(`Carefully walking around your front to get every angle, Pauline continues recording you. "I'll make sure that she's even more famous. Say hello to your audience, ${((st as any).pcs_nickname ?? '')}! I'm sure Dimka and Igor would love to see you again." The last bit she adds in disgust, like she finds the mere thought of it disgusting. "I bet you even suck Marcus's big black cock."`);
    } else {
      if (((st as any).grupTipe ?? 0) === 2) {
        scene.text('Dan laugs. "She\'s definitely a good cock sucker. I wonder if the other jock girls work out their tongue like she does?"');
        scene.text(`Carefully walking around your front to get every angle, Pauline continues recording you. "I bet they do, and I'll make sure that ${((st as any).pcs_nickname ?? '')} here becomes a famous jock. Say hello to your audience, ${((st as any).pcs_nickname ?? '')}! I'm sure Ivan and Fedor would love to see you again. Maybe you can suck their dicks at the game? Would make for a great half time show."`);
      } else {
        scene.text('Dan laughs. "She\'s definitely a good cock sucker. I guess we know the kind of books she studies."');
        scene.text(`Carefully walking around your front to get every angle, Pauline continues recording you. "Slutting 101? Well she sure seems to have mastered it. I'll make sure that everyone in at school sees what she can do. Say hello to your audience, ${((st as any).pcs_nickname ?? '')}! I'm sure Artem and Petka would love to see you again. Maybe you can suck their dicks while you play your little board games? You can be their little Healslut."`);
      }
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'fame', 'pav', 'sex', 25);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/cum/facial2.mp4');
    scene.text('Completely in shock, you can only stare at the ground as Dan approaches you and unbuttons his pants.');
    scene.text(`"I think ${((st as any).pcs_nickname ?? '')} has done enough for now," Vasily suddenly says. "She may be a slut, but she's Niko's slut, and she seems pretty wasted too. It's looks like she's going to puke any moment now, and I don't want my dick in her mouth when she does. Do you?"`);
    scene.text('Realizing that this might be your only way out, you pretend to hold back puke in your mouth, which seems to work as Dan buttons his pants back up. "I guess you\'re right. She looks fucked. Oh well, maybe next time."');
    scene.text('He then sits back down and grabs a beer and the boys then act like you were never there and go back to chatting among themselves while Lena and Lera snicker at you, Alyona gives you a look of disgust and Anushka just shakes her head.');
    scene.text('You slowly pick yourself up to leave, but as you\'re getting up, you notice Pauline still recording you as she waves at you with a smile on her face. Terrified as to what she might do with the video, you keep your head down as you walk away.');
    scene.text(`"Little slut, little slut, watch her go. Little slut, little slut, nothing but a filthy hoe…" you hear Lena singing. "Great show today, ${((st as any).pcs_nickname ?? '')}! I can't wait to see the encore."`);
    scene.actions([
      { label: 'Walk away', goto: ['pav_park', 'deeper_park'] },
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
  scene.build();
}

function enterNikoBeerBoys(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/charmer1.jpg');
  scene.text('Still craving another beer and not wanting to disappoint Niko, you nod your head before leaning forward and wrapping your lips around the bottle. You then begin drinking the beer as some of the other gopniks cheer and make lewd comments.');
  scene.text('"Whoa! She\'s really good at that," Dan comments.');
  scene.text('"She any good with the real thing?" Lavrenti asks.');
  scene.text(`"Depends on how much you're willing to pay," Niko jokingly replies. "${((s as any).pcs_nickname ?? '')} doesn't come cheap."`);
  scene.text('Arkadi snorts a laugh. "Pay? I don\'t need to pay for bitches. They throw themselves at us when they go to our concerts."');
  scene.text(`Niko shrugs. "But ${((s as any).pcs_nickname ?? '')} is a premium girl, not one of the groupies you're used to fucking."`);
  scene.text(`Arkadi dismissively shakes his head. "Is that so? Why don't give us a demonstration then? Let's see for ourselves how 'premium' ${((s as any).pcs_nickname ?? '')} really is."`);
  scene.text('Niko chuckles. "Why not? My girl is a professional. Check this out." He then pulls the beer away from you, causing you to break out into an uncontrollable coughing fit as he begins unbuttoning his pants, exposing his fully erect penis before holding it in front of your face. "Can you grace me with your touch, my brave princess? It would really mean the world to me."');
  scene.text('He gives you a warm smile as he presses his cock against your lips. You look around, seeing all the other gopniks staring at you with wide grins.');
  qspCall(s, 'willpower', 'sex', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse Niko request', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse Niko request', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.text('You pull away from him and get up. "No, not in front of everyone." Which causes all the other gopniks to laugh.');
    scene.text('Arkadi retorts. "Yeah she looks really well trained." He says with a laugh.');
    scene.text('He looks wounded by your words. "You wound me to my core, my princess! Why can\'t you bestow such a simple gift upon me?"');
    scene.text('By now, everyone is watching and you feel your cheeks heating up. "No. I\'m going home."');
    scene.text('You then hurry away with uproarious laughter echoing behind you.');
    scene.actions([
      { label: 'Leave', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Suck Niko\'s cock', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/park/bj.mp4');
    scene.text('Remembering everything Niko told you about being more confident, you begin slowly sucking on his cock, wanting only to please him. You slowly rub your tongue around his shaft while feeling his cock lightly throbbing in your mouth.');
    scene.text('Niko lets out a soft moan, encouraging you to continue, so you suck more firmly, and focus more on massaging his cock with your tongue, wanting only to pleasure him. Niko moans, along with the occasional throbbing of his cock in your mouth, informs you that you\'re doing a good job, so you continue sucking while licking around his shaft in a firm but gentle motion.');
    scene.text('Out of the corner of your eye, you spot Pauline recording you sucking Niko\'s cock in front of everyone with her phone.');
    qspCall(st, 'arousal', 'bj', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Make Niko cum', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/park/bj.mp4');
    scene.text('Focusing on nothing other than pleasing Niko, you eagerly suck on his cock, doing your best to please him, which quickly pays off as he begins groaning. You then feel his cock begin throbbing and filling your mouth with his cum before it shoots down your throat; you relax your throat, allowing it free passage into your stomach.');
    scene.text('After a few seconds, Niko\'s cock ceases throbbing and starts going soft in your mouth as you look up to him with a smile, a little bit of cum on your lips.');
    scene.text('Niko looks down at you with a warm smile, obviously pleased with your performance as he gently rubs your cheek. "That\'s my brave girl. My perfect princess."');
    scene.text('His words make your heart melt as you passionately rub your cheek against his hand.');
    scene.text('"Damn Niko, you really trained her well," Vitek says. "I\'m impressed."');
    scene.text('"Can you get me one of those?" Vasily quickly adds. "Preferably one of the fit girls."');
    scene.text('Niko chuckles. "Sure, just give me a few days and I\'ll get you anyone you want."');
    qspCall(st, 'cum_call', 'mouth_swallow', 'A189');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/smile2.jpg');
    scene.text('The boys then laugh as Niko pulls his dick out of your mouth and buttons his pants while you feel reality set in, realizing that you were just sucking Niko\'s dick in front of all the other gopniks.');
    scene.text('You remain kneeling with your mouth open in shock as Roman speaks up. "So are you planning on hogging her all for yourself or are you planning on sharing?"');
    scene.text(`"For ${qspFunc(s, 'money', 'string_profit', 200)}, ${((st as any).pcs_nickname ?? '')} will give you a blowjob," Niko smugly replies. "What do you say?"`);
    scene.text('Shocked that Niko would sell your sexual services out, you open your mouth to speak up, only for Roman to take the opportunity to shove his cock in your mouth.');
    scene.text('"Bitches like her aren\'t worth a single ruble. They\'re only good for one thing."');
    scene.text('He then grips your head with both hands and begins throat fucking you as you struggle to gasp for air.');
    scene.actions([
      { label: 'Try to escape', handler: (st: GameState) => {
    qspCall(st, 'fame', 'pav', 'sex', 25);
    scene.img('images/characters/pavlovsk/school/boy/niko/yurikev/sex/throat/3.mp4');
    scene.text('Unable to escape Roman\'s ironclad grip, you can only relax your throat as he roughly fucks it. As you\'re choking on Roman\'s cock, you can hear Niko talking to him.');
    scene.text('"So impatient. I\'ll tell you what. You get this one free, but I get first dibs on the next girl we get drunk."');
    scene.text('Roman just shrugs. "Sure, whatever." He then continues to fuck your throat as you feel tears streaming down your cheek, your body deprived of much needed air.');
    scene.text('After a few more seconds of torment, his grip tightens around your head before he rams his hips forward, shoving his cock as far in your throat as it will go. You then feel his cock throbbing in your mouth as it coats your mouth with his warm seed, filling your throat with a stinging sensation as his cum travels down your throat.');
    scene.text('Roman then releases you, causing you to frantically gasp for air as Niko gently rubs your back. "You did an incredible job, my princess. I\'m so proud of you, my brave warrior princess."');
    scene.text('Niko then stands up and walks away as Roman buttons his pants and goes back to drinking with the other guys. They all seem to ignore you, but Pauline is still recording you. You try and hide your face from her as you try to collect your thoughts, but your head feels so numb. You can\'t be here anymore, so you get up and walk away.');
    qspCall(st, 'cum_call', 'mouth_swallow', 'A10');
    qspCall(st, 'arousal', 'bj', 5);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Get up and walk away', goto: ['pav_park', 'deeper_park'] },
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

function enterDrinkingGame(s: GameState, scene: SceneBuilder): void {
  (s as any).nush_time = (Math.floor(Math.random() * 71) + 29);
  (s as any).lera_time = (Math.floor(Math.random() * 61) + 39);
  (s as any).lena_time = (Math.floor(Math.random() * 51) + 49);
  (s as any).alyona_time = (Math.floor(Math.random() * 41) + 59);
  if (((s as any).trait_vars ?? 0)?.['drinking'] === 1) {
    (s as any).player_time = (Math.floor(Math.random() * (99 - ((s as any).pcs_health ?? 0) / 40 + 29 + 1)) + (((s as any).pcs_health ?? 0) / 40 + 29));
  } else {
    if (((s as any).trait_vars ?? 0)?.['drinking'] === 0) {
      (s as any).player_time = (Math.floor(Math.random() * (85 - ((s as any).pcs_health ?? 0) / 40 + 1)) + (((s as any).pcs_health ?? 0) / 40));
    } else {
      (s as any).player_time = (Math.floor(Math.random() * (70 - ((s as any).pcs_health ?? 0) / 40 - 29 + 1)) + (((s as any).pcs_health ?? 0) / 40 - 29));
    }
  }
  (s as any).highest = ((s as any).player_time ?? 0);
  (s as any).result = 'player';
  if (((s as any).nush_time ?? 0) > ((s as any).highest ?? 0)) {
    (s as any).highest = ((s as any).nush_time ?? 0);
    (s as any).result = 'nush';
  }
  if (((s as any).lera_time ?? 0) > ((s as any).highest ?? 0)) {
    (s as any).highest = ((s as any).lera_time ?? 0);
    (s as any).result = 'lera';
  }
  if (((s as any).lena_time ?? 0) > ((s as any).highest ?? 0)) {
    (s as any).highest = ((s as any).lena_time ?? 0);
    (s as any).result = 'lena';
  }
  if (((s as any).alyona_time ?? 0) > ((s as any).highest ?? 0)) {
    (s as any).highest = ((s as any).alyona_time ?? 0);
    (s as any).result = 'alyona';
  }
  (s as any).highest = undefined;
  (s as any).lena_time = undefined;
  (s as any).lera_time = undefined;
  (s as any).alyona_time = undefined;
  (s as any).nush_time = undefined;
  (s as any).player_time = undefined;
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'female_gopnik_beer_1':
      enterFemaleGopnikBeer_1(s, scene);
      break;
    case 'male_gopnik_beer':
      enterMaleGopnikBeer(s, scene);
      break;
    case 'gopnik_beer':
      enterGopnikBeer(s, scene);
      break;
    case 'niko_beer':
      enterNikoBeer(s, scene);
      break;
    case 'niko_beer_boys':
      enterNikoBeerBoys(s, scene);
      break;
    case 'drinking_game':
      enterDrinkingGame(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pav_parkev1: LocationDef = {
  name: 'pav_parkev1',
  title: 'You take the offered beer and take a swig of it as you liste',
  region: 'pavlovsk',
  enter: enter,
};
