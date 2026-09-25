import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterQuickStart(s: GameState, scene: SceneBuilder): void {
  (s as any).start_location = undefined;
  (s as any).music_loop = 0;
  (s as any).hour = 6;
  ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['last_month_paid'] = ((s as any).month ?? 0);
  if (String((s as any).locArgs?.[1] ?? '') === 1) {
    (s as any).loc = 'gad_gphouse';
    (s as any).loc_arg = 'main';
    qspCall(s, 'homes_properties', 'give_access', 'parents_home');
    qspCall(s, 'homes_properties', 'give_access', 'grandparents_house');
    qspCall(s, 'homes_properties', 'set_home', 'grandparents_house');
    (s as any).gadstay_day = ((s as any).daystart ?? 0);
    (s as any).gadstay = 1;
    (s as any).display_bb = 1;
    (s as any).minut = 10;
    qspCall(s, 'stat', '');
    qspGoto(s, 'gad_gphouse', 'quick_start');
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 2) {
      qspCall(s, 'homes_properties', 'give_access', 'parents_home');
      qspCall(s, 'homes_properties', 'rent_property', 'old_town_apartment');
      qspCall(s, 'homes_properties', 'set_home', 'old_town_apartment');
      (s as any).minut = 8;
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['dish_plates'] = ((s as any).mc_inventory['dish_plates'] ?? 0) + (5);
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['food_basic'] = ((s as any).mc_inventory['food_basic'] ?? 0) + (10);
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['dish_soap'] = 10;
      qspCall(s, 'stat', '');
      qspGoto(s, 'bedr2x', '');
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 3) {
        (s as any).motherKnowWhore = 1;
        (s as any).motherKnowSpravka = 2;
        qspCall(s, 'npc_relationship', 'set', 'A29', 0);
        if (((s as any).fame ?? 0)?.['pav_sex'] < 100) {
          ((s as any).fame = (s as any).fame ?? {})['pav_sex'] = ((s as any).fame['pav_sex'] ?? 0) + (200);
        } else {
          if (((s as any).fame ?? 0)?.['pav_sex'] < 300) {
            ((s as any).fame = (s as any).fame ?? {})['pav_sex'] = 300;
          }
        }
        (s as any).minut = 8;
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['dish_plates'] = ((s as any).mc_inventory['dish_plates'] ?? 0) + (2);
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['food_basic'] = ((s as any).mc_inventory['food_basic'] ?? 0) + (2);
        qspCall(s, 'stat', '');
        qspGoto(s, 'pav_shared_apt', 'quick_start');
      } else {
        qspCall(s, 'homes_properties', 'give_access', 'parents_home');
        qspCall(s, 'homes_properties', 'set_home', 'parents_home');
        (s as any).minut = 10;
        qspCall(s, 'stat', '');
        qspGoto(s, 'bedrPar', 'start');
      }
    }
  }
  return;
  (s as any).stat_explanation = undefined;
  scene.build();
}

function enterIntroPavlovsk(s: GameState, scene: SceneBuilder): void {
  (s as any).music_loop = 0;
  ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['last_month_paid'] = ((s as any).month ?? 0);
  qspCall(s, 'homes_properties', 'give_access', 'parents_home');
  qspCall(s, 'homes_properties', 'set_home', 'parents_home');
  (s as any).hour = 6;
  qspCall(s, 'stat', '');
  (s as any).music_loop = 0;
  scene.text('<center><b>Your Bedroom</b></center>');
  scene.img('images/characters/pavlovsk/resident/mom/prost4.jpg');
  scene.text(`You suddenly hear a familiar voice yelling out. "${((s as any).pcs_nickname ?? '')}, time to get up! You can't spend the whole day laying around!"`);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetMotherNickname(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.text('<center><b>Your Bedroom</b></center>');
    scene.img('images/characters/pavlovsk/resident/mom/prost5.jpg');
    scene.text(`You tiredly open your eyes and see your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} standing over you. "Fifteen more minutes…" you mumble.`);
    scene.text(`Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} lets out a loud sigh before she yanks the covers off. "No. Up, now!"`);
    scene.text(`"${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}!" you exclaim as you feel a slightly cold breeze hit your body.`);
    scene.text(`"No excuses, ${((st as any).pcs_nickname ?? '')}! The summer holidays will be over before you know it and you mustn't get used to sleeping in, otherwise you won't be able to get up early when school starts again. From now on, set your alarm to wake up at a reasonable time," your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} says as she stares at you expectantly.`);
    scene.actions([
      { label: 'Get up', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.text('<center><b>Your Bedroom</b></center>');
    scene.img('images/characters/pavlovsk/resident/mom/prost4.jpg');
    scene.text(`As soon as you get off your now coverless bed, your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} is quick to resume her nagging, repeating what you already heard from her a few seconds ago. "Summer is no excuse to laze around all day. You can't sleep in anymore, not even for another fifteen minutes."`);
    scene.text('She\'s not even looking at you while she talks, but luckily for you that means she misses you rolling your eyes.');
    scene.text('"What are you going to do when school starts, or when you get a job? You better get into the habit of setting your alarm so you can wake up bright and early."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.text('<center><b>Your Bedroom</b></center>');
    scene.img('images/characters/pavlovsk/resident/mom/prost5.jpg');
    scene.text('You let out an exasperated sigh. "Yeah yeah, you\'ve told me that already. So how early are we talking?"');
    scene.text(`'Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} shoots you a sharp look and you know to fix your attitude or else. "Well, that depends on what you plan to do in the morning. There's breakfast, showering and brushing your teeth, doing your hair and makeup, and shaving if you really need to. If I remember correctly, Anya used to wake up at 6:00 for school."'`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.text('<center><b>Your Bedroom</b></center>');
    scene.img('images/characters/pavlovsk/resident/mom/prost4.jpg');
    scene.text('\'"You want me to wake up that early?!" you huff. "Can\'t I wake up at like… 7:00?"\'');
    scene.text(`Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} shrugs. "You could, but then you might have to cut corners or even end up running late to school, and I won't be having any of that. Your teachers won't either," she warns before making her way towards the kitchen.`);
    if (((st as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.text('"Oh, don\'t forget; you need to head down to the clinic and see the gynecologist for a check up. Not just once, but every month!" she adds quickly.');
    }
    scene.actions([
      { label: 'But why do I…', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.text('<center><b>Your Bedroom</b></center>');
    scene.img('images/characters/pavlovsk/resident/mom/prost5.jpg');
    scene.text('Before you can finish, she cuts you off. "I\'m not going to have you running around town like so many of those other girls I see! Opening their legs for any boy that comes around…" She shakes her head in disgust. "I want a referral every month and it better tell me you\'re still a virgin or else, understand?" she says before she storms out of the room without giving you a chance to respond.');
    scene.actions([
      { label: 'I understand…', handler: (st: GameState) => {
    (st as any).menu_loc = 'bedrPar';
    (st as any).menu_arg = 'start';
  }, goto: ['alarmclock', 'start'] },
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

function enterIntroGadukino(s: GameState, scene: SceneBuilder): void {
  (s as any).music_loop = 0;
  ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['last_month_paid'] = ((s as any).month ?? 0);
  (s as any).loc = 'gad_gphouse';
  (s as any).loc_arg = 'main';
  qspCall(s, 'homes_properties', 'give_access', 'grandparents_house');
  qspCall(s, 'homes_properties', 'set_home', 'grandparents_house');
  (s as any).gadstay_day = ((s as any).daystart ?? 0);
  (s as any).gadstay = 1;
  (s as any).display_bb = 1;
  (s as any).hour = 6;
  qspCall(s, 'stat', '');
  (s as any).music_loop = 0;
  scene.text('<center><h4>Your Grandparents\' Cottage</h4></center>');
  scene.img('images/characters/pavlovsk/resident/mom/prost4.jpg');
  scene.text(`You suddenly hear a familiar voice yelling. "${((s as any).pcs_nickname ?? '')}, time to get up. You can't spend the whole day lying around!"`);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetMotherNickname(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.text('<center><h4>Your Grandparents\' Cottage</h4></center>');
    scene.img('images/characters/pavlovsk/resident/mom/prost5.jpg');
    scene.text(`You tiredly open your eyes, seeing your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} standing over you. "Fifteen more minutes…"`);
    scene.text(`Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} lets out a loud sigh before she yanks the covers off. "No. Up, now!"`);
    scene.text(`"${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}!" you exclaim as you feel a slight cold breeze hit your body.`);
    if (((st as any).month ?? 0) === 6) {
      scene.text(`"Listen! I'm heading back to Pavlovsk this morning, and I don't want to hear excuses, ${((st as any).pcs_nickname ?? '')}. You said you'd help out your grandparents during the summer holidays, so set your alarm so you can wake up at a reasonable time from now on," your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} says as she stares at you expectantly.`);
    } else {
      scene.text(`"Listen! I'm heading back to Pavlovsk this morning, and I don't want to hear excuses, ${((st as any).pcs_nickname ?? '')}. The summer holidays will be over soon, and you need to get used to waking up early for school. Set your alarm so you can wake up at a reasonable time from now on," your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} says as she stares at you expectantly.`);
    }
    scene.actions([
      { label: 'Get up', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.text('<center><h4>Your Grandparents\' Cottage</h4></center>');
    scene.img('images/characters/pavlovsk/resident/mom/prost4.jpg');
    if (((st as any).month ?? 0) === 6) {
      scene.text(`As soon as you get off your now coverless bed, your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} is quick to resume her nagging, telling you again what you already heard from her a few seconds ago. "The work around the farm normally gets done in the morning, so you can't sleep in anymore, not even for another fifteen minutes."`);
      scene.text('She\'s not even looking at you while she talks, but luckily for you that means she misses you rolling your eyes.');
    } else {
      scene.text(`As soon as you get off your now coverless bed, your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} is quick to resume her nagging, telling you again what you already heard from her a few seconds ago. "Summer is almost over. You can't sleep in anymore, not even for another fifteen minutes."`);
      scene.text('She\'s not even looking at you while she talks, but luckily for you that means she misses you rolling your eyes.');
    }
    scene.text('"What are you going to do when school starts, or when you get a job? You better get into the habit of setting your alarm so you can wake up bright and early."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.text('<center><h4>Your Grandparents\' Cottage</h4></center>');
    scene.img('images/characters/pavlovsk/resident/mom/prost5.jpg');
    scene.text('You release an exasperated sigh. "Yeah, I know. You told me that already. So how early are we talking?"');
    if (((st as any).month ?? 0) === 6) {
      scene.text(`'Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} shoots you a sharp look, and you know to fix your attitude or else. "Well, depends on what you plan to do in the morning. There's showering and brushing your teeth, doing your hair and makeup, and shaving if you really need to. If I remember correctly, Anya used to wake up at 6:00 when she used to sleep here. Besides, while staying at your grandparents' house, you should be up extra early helping them tend to the farm. This isn't a holiday camp!"'`);
    } else {
      scene.text(`'Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} shoots you a sharp look, and you know to fix your attitude or else. "Well, depends on what you plan to do in the morning. There's showering and brushing your teeth, doing your hair and makeup, and shaving if you really need to. If I remember correctly, Anya used to wake up at 6:00 for school. Besides, while staying at your grandparents' house, you should be up extra early helping them tend to the farm. This isn't a holiday camp!"'`);
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.text('<center><h4>Your Grandparents\' Cottage</h4></center>');
    scene.img('images/characters/pavlovsk/resident/mom/prost4.jpg');
    scene.text('\'"You want me to wake up that early?!" you huff. "Can\'t I wake up at like… 7:00?"\'');
    if (((st as any).month ?? 0) === 6) {
      scene.text(`Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} shrugs. "You could, but then you might have to cut corners, or your grandparents will have started work without you, and I won't be having any of that," she warns you before making her way outside.`);
      if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
        scene.text('"Oh, don\'t forget; when you get back to Pavlovsk, you need to head to the clinic and see the gynecologist for a check-up. Not just once, but every month," she adds quickly.');
      }
    } else {
      scene.text(`Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} shrugs. "You could, but then you might have to cut corners or even end up running late to school, and I won't be having any of that. Your teachers won't either," she warns you before making her way outside.`);
      if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
        scene.text('"Oh, don\'t forget; when you get back to Pavlovsk, you need to head to the clinic and see the gynecologist for a check-up. Not just once, but every month," she adds quickly.');
      }
    }
    scene.actions([
      { label: 'But why do I…', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.text('<center><h4>Your Grandparents\' Cottage</h4></center>');
    scene.img('images/characters/pavlovsk/resident/mom/prost5.jpg');
    scene.text('Before you can finish, she cuts you off. "I\'m not going to have you running around town like so many of those other girls I see! Opening their legs for any boy that comes around…" She shakes her head in disgust. "I want a referral every month and it better tell me you\'re still a virgin or else, understand?" she says as she storms off towards your grandparent\'s outside door. "Don\'t forget to talk to your grandparents and ask if they need help!"');
    scene.text('Without waiting for your response, she closes the door.');
    scene.actions([
      { label: 'I understand…', handler: (st: GameState) => {
    (st as any).menu_loc = 'gad_gphouse';
    (st as any).menu_arg = 'first_visit';
  }, goto: ['alarmclock', 'start'] },
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

function enterIntroPushkin(s: GameState, scene: SceneBuilder): void {
  (s as any).music_loop = 0;
  ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['last_month_paid'] = ((s as any).month ?? 0);
  (s as any).hour = 6;
  qspCall(s, 'stat', '');
  (s as any).music_loop = 0;
  scene.text('<center><b>Your Bedroom</b></center>');
  scene.img('images/characters/pavlovsk/resident/mom/prost4.jpg');
  scene.text(`You suddenly hear a familiar voice yelling out. "${((s as any).pcs_nickname ?? '')}, time to get up! I won't have you making Vladimir late for work!"`);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetMotherNickname(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.text('<center><b>Your Bedroom</b></center>');
    scene.img('images/characters/pavlovsk/resident/mom/prost5.jpg');
    scene.text(`You tiredly open your eyes and see your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} standing over you. "Fifteen more minutes…" you mumble.`);
    scene.text(`Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} lets out a loud sigh before she yanks the covers off. "No. Up, now!"`);
    scene.text(`"${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}!" you exclaim as you feel a slightly cold breeze hit your body.`);
    scene.text(`"No excuses, ${((st as any).pcs_nickname ?? '')}! Your stepfather only has this morning free to drive you and your stuff over to Pushkin. You can sleep when you get there," your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} says as she stares at you expectantly.`);
    scene.actions([
      { label: 'Get up', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.text('<center><b>Your Bedroom</b></center>');
    scene.img('images/characters/pavlovsk/resident/mom/prost4.jpg');
    scene.text(`As soon as you get off your now coverless bed, your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} is quick to resume her nagging. "I'm proud of you for being able to rent an apartment at such a young age, but you still have another year of school. They're very strict, so if you miss a few days, then they'll kick you out. I <i>won't</i> have you working in a supermarket like your sister, so you better not let that happen!"`);
    scene.text('The summer isn\'t even over yet and already she\'s already going on about school. You suddenly remember why you\'re moving out.');
    scene.text('"What are you going to do when school starts, or when you get a job? You better get into the habit of setting your alarm so you can wake up bright and early."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/system/1_openings/shared/site_road.jpg');
    scene.text('This continues all the way to your new apartment. When you get there, you finally relent and ask her what time you should get up.');
    scene.text(`'Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} shoots you a sharp look and you know to fix your attitude or else. "Well, that depends on what you plan to do in the morning. There's breakfast, showering and brushing your teeth, doing your hair and makeup, and shaving if you really need to. If I remember correctly, Anya used to wake up at 6:00 for school."'`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'homes_properties', 'rent_property', 'old_town_apartment');
    qspCall(st, 'homes_properties', 'set_home', 'old_town_apartment');
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['dish_plates'] = ((st as any).mc_inventory['dish_plates'] ?? 0) + (5);
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['food_basic'] = ((st as any).mc_inventory['food_basic'] ?? 0) + (10);
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['dish_soap'] = 10;
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.text('<center><b>Your new Bedroom</b></center>');
    scene.img('images/characters/pavlovsk/resident/mom/prost4.jpg');
    scene.text('\'"You want me to wake up that early?!" you huff. "Can\'t I wake up at like… 7:00?"\'');
    scene.text(`Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} shrugs. "You could, but then you might have to cut corners or even end up running late to school, and I won't be having any of that. Your teachers won't either," she warns before giving you a big hug and leaving with Vladimir.`);
    scene.text(`You realise you didn't even have a chance to thank him for helping, but then again your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} probably didn't give him a choice in the matter. You should set your alarm before you forget.`);
    scene.actions([
      { label: 'Set your alarm', handler: (st: GameState) => {
    (st as any).menu_loc = 'bedr2x';
    (st as any).menu_arg = '';
  }, goto: ['alarmclock', 'start'] },
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

function enterIntroSharing(s: GameState, scene: SceneBuilder): void {
  (s as any).music_loop = 0;
  ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['last_month_paid'] = ((s as any).month ?? 0);
  (s as any).motherKnowWhore = 1;
  (s as any).motherKnowSpravka = 2;
  qspCall(s, 'npc_relationship', 'set', 'A29', 0);
  if (((s as any).fame ?? 0)?.['pav_sex'] < 100) {
    ((s as any).fame = (s as any).fame ?? {})['pav_sex'] = ((s as any).fame['pav_sex'] ?? 0) + (200);
  } else {
    if (((s as any).fame ?? 0)?.['pav_sex'] < 300) {
      ((s as any).fame = (s as any).fame ?? {})['pav_sex'] = 300;
    }
  }
  (s as any).hour = 6;
  qspCall(s, 'stat', '');
  (s as any).music_loop = 0;
  scene.text('<center><b>Your Bedroom</b></center>');
  scene.img('images/characters/pavlovsk/resident/mom/prost4.jpg');
  scene.text(`You suddenly hear a familiar voice yelling. "${((s as any).pcs_firstname ?? '')} ${((s as any).pcs_lastname ?? '')}! Get out of my house!"`);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetMotherNickname(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.text('<center><b>Your Bedroom</b></center>');
    scene.img('images/characters/pavlovsk/resident/mom/prost5.jpg');
    scene.text(`You tiredly open your eyes and see your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} standing over you.`);
    scene.text('She suddenly yanks the covers off. "Up, now! The whole church is talking about how you\'re sleeping around! I told you I will not have a whore in my house!"');
    scene.text(`"${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}!" you exclaim as you feel a slightly cold breeze hit your body.`);
    scene.text(`"No excuses, ${((st as any).pcs_firstname ?? '')}! You have 5 minutes to pack up and get out before I drag you out of here, dressed or not. It's not like the whole of Pavlosk hasn't already seen you naked anyway!"`);
    scene.actions([
      { label: 'Get up', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.text('<center><b>Your Bedroom</b></center>');
    scene.img('images/characters/pavlovsk/resident/mom/prost4.jpg');
    scene.text(`As soon as you get off your now coverless bed, your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} is quick to resume her nagging. "I'll phone the school and tell them you don't live here anymore. I don't care if you get a job or keep sleeping around. You're not my problem anymore."`);
    scene.text('"But I didn\'t do anything!" you plead as you hurriedly dress and gather what you can.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.text('<center><b>Your Bedroom</b></center>');
    scene.img('images/characters/pavlovsk/resident/mom/prost5.jpg');
    scene.text('"Are you calling the whole church liars?! Not only are you a disgrace, but you\'ll go to hell if you carry on like this!"');
    scene.text(`Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} shoots you a sharp look and you know there's no reasoning with her.`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'homes_properties', 'block_access', 'parents_home');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/stairs/pod_ob1.jpg');
    scene.text('You get to the ground floor hallway with all you own in some bags and no idea what to do when you see a sign on the wall.');
    scene.text('"сдаeтся в аренду комната" (Room for rent!). Some guys are looking for a roommate. They live in an apartment in one of the other buildings in the apartment complex.');
    scene.text('You don\'t have any other options, so you hope this is a good sign.');
    scene.actions([
      { label: 'Check it out', handler: (st: GameState) => {
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['dish_plates'] = ((st as any).mc_inventory['dish_plates'] ?? 0) + (2);
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['food_basic'] = ((st as any).mc_inventory['food_basic'] ?? 0) + (2);
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/sharedapt/hallway.jpg');
    scene.text('You arrive at the apartment and gulp, knowing this is your only option of a roof over your head regardless of what they\'re like.');
    scene.text('Maybe it would be a good idea to set your alarm clack and gather your thoughts first?');
    scene.actions([
      { label: 'Set alarm', handler: (st: GameState) => {
    (st as any).menu_loc = 'pav_shared_apt';
    (st as any).menu_arg = 'intro';
  }, goto: ['alarmclock', 'start'] },
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

function enterSetMotherNickname(s: GameState, scene: SceneBuilder): void {
  (s as any).temp = window.prompt("<center>What name do you address your mother by?<br>Mother (default), Mum, Mom, Mama, etc.</center>") ?? '';
  if (((s as any).temp ?? 0) !== '') {
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A29'] = ((s as any).temp ?? 0);
  }
  (s as any).temp = undefined;
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'quick_start':
      enterQuickStart(s, scene);
      break;
    case 'intro_pavlovsk':
      enterIntroPavlovsk(s, scene);
      break;
    case 'intro_gadukino':
      enterIntroGadukino(s, scene);
      break;
    case 'intro_pushkin':
      enterIntroPushkin(s, scene);
      break;
    case 'intro_sharing':
      enterIntroSharing(s, scene);
      break;
    case 'set_mother_nickname':
      enterSetMotherNickname(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const intro_sg: LocationDef = {
  name: 'intro_sg',
  title: 'Your Bedroom',
  region: 'other',
  enter: enter,
};
