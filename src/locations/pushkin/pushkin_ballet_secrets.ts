import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).setloc) (s as any).setloc = {}; (s as any).setloc['imagepath'] = 'images/' + 'locations/pushkin/ballet_secrets';
  scene.build();
}

function enterInit(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pushkin_ballet_secrets', 'init');
  if (!(s as any).setloc) (s as any).setloc = {}; (s as any).setloc['StageTitle'] = 'Ballet Secrets';
  scene.img(((s as any).setloc ?? {})?.['imagepath'] + '/ballet-shop-window.jpg');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'core_library', 'stage_title');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  if (((s as any).week ?? 0) < 7  &&  ((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 17) {
    scene.text('You enter the shop getting greeted by a riot of displays showcasing ballet and other dance equipment. A woman is sewing something in the corner and glances at you before continuing.');
    if (((s as any).balletqw ?? 0)?.['ballet_secrets'] === 1) {
      scene.actions([
        { label: 'Approach the woman', goto: ['pushkin_ballet_secrets', 'first_visit'] },
      ]);
    } else {
      scene.actions([
        { label: 'Leave the shop', goto: ['pushkin_sq', ''] },
        { label: 'Enter the fitness studio', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pushkin_ballet_secrets', 'reception'] },
      ]);
    }
  } else {
    scene.text('You look at the shop window and realize it\'s closed, there is a security door to the left of you that allows you access the studio areas if you are a member.');
    if (((s as any).balletqw ?? 0)?.['membership'] >= ((s as any).daystart ?? 0)) {
      scene.actions([
        { label: 'Swipe membership card', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pushkin_ballet_secrets', 'reception'] },
      ]);
    }
    scene.actions([
      { label: 'Return to Okhlopkov Square', goto: ['pushkin_sq', ''] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterExit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'shop') {
    scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc'); } }]);
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'pushkin') {
      scene.actions([{ label: 'Continue', goto: ['pushkin_sq', ''] }]);
    } else {
      // TODO-QSP: gt $ARGS[1], $ARGS[2]
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterFirstVisit(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).balletqw) (s as any).balletqw = {}; (s as any).balletqw['ballet_secrets_visit'] = 1;
  if (!(s as any).balletqw) (s as any).balletqw = {}; (s as any).balletqw['shoe_order'] = ((s as any).daystart ?? 0) + 14;
  scene.img(((s as any).setloc ?? {})?.['imagepath'] + '/ballet_secrets_fitting_1.jpg');
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'core_library', 'stage_title');
  qspCall(s, 'stat', '');
  scene.text('You are greeted by a middle aged woman. "Hello, how may I help you?" She asks politely.');
  // TODO-QSP: dynamic text: "Hello, I am <<$pcs_firstname>> <<$pcs_lastname>>. I am part of the ballet schoo...
  scene.text(`"Hello, I am ${((s as any).pcs_firstname ?? 0)} ${((s as any).pcs_lastname ?? 0)}. I am part of the ballet school intake." you give her a smile and hand over the school's letter as proof.`);
  scene.text('The woman smiles warmly, "Ah you are the new students for this year?" she claps her hands and then takes yours, "Come, come we must measure your feet and order your shoes"');
  scene.text('Before you say anything she\'s dragging you through the shop towards the back we are greeted by a wall of shoes and there are pictures on the wall signed by dancers with shoes next to them. You look at the woman.');
  scene.text('"Yes, they are all dancers who are or have been clients of our establishment", she noticed your gaze and explained with pride."We will only provide the best for the school."');
  scene.text('"But where are my manners I am Darya Pushkina, I am the owner of this shop and facilies" she exclaims, "now to your fitting grabbing a tape measure and fitting tools for your feet"');
  scene.text('For the next hour, Madam Pushkina bombards you with questions of whether you want leather or cotton fabric, how many satin shoes and a myriad other questions before she finally relents.');
  scene.text('"Of course, as you are aware the school is sponsoring these costs, but only for the first year she says and you will need to manage your own equipment after this.", Madame Pushkina advises.');
  // TODO-QSP: dynamic text: "Is there anything else you need? No? Good, I will see you again in two weeks fo...
  scene.text(`"Is there anything else you need? No? Good, I will see you again in two weeks for your final shoe fitting. I would like to extend my congratulations and wish you a successful career Ms. ${((s as any).pcs_lastname ?? 0)}."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['pushkin_sq', ''] },
    { label: 'Return to shop', goto: ['pushkin_ballet_secrets', 'init'] },
  ]);
  scene.build();
}

function enterReception(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pushkin_ballet_secrets', 'reception');
  if (!(s as any).setloc) (s as any).setloc = {}; (s as any).setloc['StageTitle'] = 'Ballet Secrets - Reception';
  scene.img(((s as any).setloc ?? {})?.['imagepath'] + '/reception.jpg');
  qspCall(s, 'core_library', 'stage_title');
  qspCall(s, 'shortgs', 'clothing_status');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('As you enter you are greeted warmly by the gym staff. The gym has an industrial feel reflecting the building being converted from an old factory.');
  scene.text('There is a <a href="exec: gt \'beverage\', \'watercooler\'">drinking fountain</a> near the doors to the gym hall to refill your water bottle.');
  if (((s as any).apparel ?? 0)?.['status'] !== 'nude') {
    scene.actions([
      { label: 'Leave the studio', goto: ['pushkin_ballet_secrets', 'exit', '\'pushkin\''] },
      { label: 'Return to shop', goto: ['pushkin_ballet_secrets', 'exit', '\'shop\''] },
    ]);
  }
  if (((s as any).balletqw ?? 0)?.['membership'] === 0  ||  ((s as any).balletqw ?? 0)?.['membership'] < ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Discuss membership', goto: ['pushkin_ballet_secrets', 'enrol'] },
    ]);
  } else {
    if (((s as any).hour ?? 0) <= 15  &&  (((s as any).apparel ?? 0)?.['status'] === 'sport'  ||  ((s as any).apparel ?? 0)?.['status'] === 'dance')) {
      if (((s as any).pcs_stam ?? 0) < ((s as any).stammax ?? 0) / 5) {
        scene.text('You feel too tired to participate in a class.');
      } else {
        if (((s as any).pcs_energy ?? 0) < 20) {
          scene.text('You are too hungry to participate in a class.');
        } else {
          if (((s as any).pcs_hydra ?? 0) < 20) {
            scene.text('You are too thirsty to participate in a class.');
          } else {
            scene.actions([
              { label: 'Attend a ballet class (2 hr)', goto: ['pushkin_ballet_secrets', 'ballet_courses'] },
              { label: 'Attend a yoga class (1 hr)', goto: ['pushkin_ballet_secrets', 'yoga_courses'] },
            ]);
          }
        }
      }
    } else {
      if (((s as any).hour ?? 0) >= 16) {
        // TODO-QSP: dynamic text: All the evening classes have started today, you need to be here before '+func('t...
        scene.text('All the evening classes have started today, you need to be here before \'+func(\'time\', \'get_time_string\', 16, 0)+\' to ensure you can attend.');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Changing rooms', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pushkin_ballet_secrets', 'changing_room'] },
    { label: 'Visit the café', goto: ['pushkin_ballet_secrets', 'cafe'] },
  ]);
  scene.build();
}

function enterEnrol(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'stage_title');
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  if (((s as any).balletqw ?? 0)?.['membership'] === 0) {
    scene.text('You approach the reception to discuss membership to the gym.');
  } else {
    if (((s as any).balletqw ?? 0)?.['membership'] <= ((s as any).daystart ?? 0)) {
      scene.text('You approach the reception to renew your membership.');
    }
  }
  // TODO-QSP: dynamic text: The gym offers a weekly or monthly subscription for ' + $func('money', 'string_p...
  scene.text('The gym offers a weekly or monthly subscription for \' + $func(\'money\', \'string_price\', 1500) + \' or \' + $func(\'money\', \'string_price\', 4500) + \' to use the facilities with some courses included. Physio appointments and personal trainers are charged separately.');
  scene.text('The subscriptions include classes in gymnastics, yoga and introductory ballet. For advanced classes, there is an additional instructor fee. A personal trainer is on hand to assist at all times if you so need one.');
  scene.text('We also have a small café which attracts a members discount and your membership card can purchase items directly from the vending machine which will be billed to your account.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the studio entrance', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pushkin_ballet_secrets', 'reception'] },
    { label: 'Purchase a weekly subscription [+$func(\'money\', \'get_cost_string\', 1500)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 1500) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 1500);
      if (!(s as any).balletqw) (s as any).balletqw = {}; (s as any).balletqw['membership'] = ((s as any).daystart ?? 0) + 7;
      // TODO-QSP: dynamic text: You purchase a weeks subscription for ' + $func('money', 'string_price', 1500) +...
      scene.text('You purchase a weeks subscription for \' + $func(\'money\', \'string_price\', 1500) + \'.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pushkin_ballet_secrets', 'reception'] },
      ]);
    }
  } },
    { label: 'Purchase a monthly subscription [+$func(\'money\', \'get_cost_string\', 4500)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 4500) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 4500);
      if (!(s as any).balletqw) (s as any).balletqw = {}; (s as any).balletqw['membership'] = ((s as any).daystart ?? 0) + 28;
      // TODO-QSP: dynamic text: You purchase a monthly subscription for ' + $func('money', 'string_price', 4500)...
      scene.text('You purchase a monthly subscription for \' + $func(\'money\', \'string_price\', 4500) + \' and got a week free.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pushkin_ballet_secrets', 'reception'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterChangingRoom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pushkin_ballet_secrets', 'changing_room');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><h2>Changing Room</h2></center>');
  scene.img('images/locations/city/citycenter/gym/locker.jpg');
  qspCall(s, 'wardrobe', 'default_clothing_options');
  if (((s as any).mc_inventory ?? 0)?.['deodorant'] > 0  &&  (!((s as any).deodorant_on ?? 0))) {
    // TODO-QSP: 'Your deodorant will last you for <b><<mc_inventory[''deodorant'']>></b> more '+iif(mc_inventory['de...
    scene.actions([
      { label: 'Apply deodorant (0:01)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).mc_inventory) (s as any).mc_inventory = {}; (s as any).mc_inventory['deodorant'] = ((s as any).mc_inventory['deodorant'] ?? 0) - (1);
    qspCall(s, 'sweat', 'deo');
    // TODO-QSP: iif(func('body_din', 'pregnancyVisibility') = 1, '<center><img <<$set_imgh>> src="images/shared/home...
    scene.text('You apply deodorant to your armpits. It will keep you feeling fresh and clean for longer.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pushkin_ballet_secrets', 'changing_room'] },
    ]);
  } },
    ]);
  }
  qspCall(s, 'core_library', 'bathroom');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the studio reception', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pushkin_ballet_secrets', 'reception'] },
    { label: 'Use mirror', goto: ['mirror', 'start'] },
    { label: 'Change outfit', goto: ['wardrobe', 'start'] },
  ]);
  scene.build();
}

function enterPhysio(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pushkin_ballet_secrets', 'physio');
  if (!(s as any).setloc) (s as any).setloc = {}; (s as any).setloc['StageTitle'] = 'Ballet Secrets - Physio';
  scene.img(((s as any).setloc ?? {})?.['imagepath'] + '/physio.jpg');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'core_library', 'stage_title');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['pushkin_sq', ''] },
  ]);
  scene.build();
}

function enterGymnasticsCourses(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pushkin_ballet_secrets', 'gymnastics_courses');
  if (!(s as any).setloc) (s as any).setloc = {}; (s as any).setloc['StageTitle'] = 'Ballet Secrets - Gymnastics Class';
  scene.img(((s as any).setloc ?? {})?.['imagepath'] + '/gymnastics.jpg');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'core_library', 'stage_title');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['pushkin_sq', ''] },
  ]);
  scene.build();
}

function enterBalletCourses(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pushkin_ballet_secrets', 'ballet_courses');
  if (!(s as any).setloc) (s as any).setloc = {}; (s as any).setloc['StageTitle'] = 'Ballet Secrets - Courses';
  if (((s as any).pcs_danc ?? 0) < 50) {
    scene.img(((s as any).setloc ?? {})?.['imagepath'] + '/basic_class.jpg');
  } else {
    if (((s as any).pcs_danc ?? 0) < 75) {
      scene.img(((s as any).setloc ?? {})?.['imagepath'] + '/intermediate_class.jpg');
    } else {
      scene.img(((s as any).setloc ?? {})?.['imagepath'] + '/advanced_class.jpg');
    }
  }
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'core_library', 'stage_title');
  if (((s as any).balletqw ?? 0)?.['ballet_session'] === ((s as any).daystart ?? 0)) {
    scene.text('There is another fitness class in progress and no more ballet sessions today.');
  } else {
    if (!(s as any).balletqw) (s as any).balletqw = {}; (s as any).balletqw['ballet_session'] = ((s as any).daystart ?? 0);
    if (((s as any).pcs_danc ?? 0) < 50) {
      qspCall(s, 'pain', '', 2, 'legL', 'stretch');
      qspCall(s, 'pain', '', 2, 'legR', 'stretch');
      qspCall(s, 'pain', '', 2, 'shoulders', 'stretch');
      qspCall(s, 'pain', '', 2, 'armL', 'stretch');
      qspCall(s, 'pain', '', 2, 'armR', 'stretch');
      qspCall(s, 'pain', '', 2, 'back', 'stretch');
      qspCall(s, 'pain', '', 2, 'chest', 'stretch');
      qspCall(s, 'exercise', 'tier2', 120, 'agil', 'stren', 'danc');
      scene.text('You enter the classroom and the practice barres are already set up for the class.. You start to perform your stretch exercises and warm ups before your introductory ballet lesson starts along your fellow students.');
    } else {
      if (((s as any).pcs_danc ?? 0) < 75) {
        qspCall(s, 'pain', '', 4, 'legL', 'stretch');
        qspCall(s, 'pain', '', 4, 'legR', 'stretch');
        qspCall(s, 'pain', '', 3, 'shoulders', 'stretch');
        qspCall(s, 'pain', '', 3, 'armL', 'stretch');
        qspCall(s, 'pain', '', 3, 'armR', 'stretch');
        qspCall(s, 'pain', '', 4, 'back', 'stretch');
        qspCall(s, 'pain', '', 3, 'chest', 'stretch');
        qspCall(s, 'exercise', 'tier3', 120, 'agil', 'stren', 'danc');
        scene.text('You enter the classroom and the practice barres are already set up for the class. You start to perform your stretch exercises and warm ups before your intermediate lesson starts along your fellow students.');
      } else {
        qspCall(s, 'pain', '', 4, 'legL', 'stretch');
        qspCall(s, 'pain', '', 4, 'legR', 'stretch');
        qspCall(s, 'pain', '', 3, 'shoulders', 'stretch');
        qspCall(s, 'pain', '', 3, 'armL', 'stretch');
        qspCall(s, 'pain', '', 3, 'armR', 'stretch');
        qspCall(s, 'pain', '', 4, 'back', 'stretch');
        qspCall(s, 'pain', '', 3, 'chest', 'stretch');
        qspCall(s, 'exercise', 'tier4', 120, 'agil', 'stren', 'danc');
        scene.text('You enter the classroom and the practice barres are already set up for the class. You start to perform your stretch exercises and warm ups before your advanced lesson starts along your fellow students.');
      }
    }
    qspCall(s, 'gdksport', 'jocks_acceptance');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Return to the studio reception', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pushkin_ballet_secrets', 'reception'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the studio reception', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pushkin_ballet_secrets', 'reception'] },
  ]);
  scene.build();
}

function enterYogaCourses(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pushkin_ballet_secrets', 'yoga_courses');
  if (!(s as any).setloc) (s as any).setloc = {}; (s as any).setloc['StageTitle'] = 'Ballet Secrets - Yoga Class';
  scene.img(((s as any).setloc ?? {})?.['imagepath'] + '/yoga_class.jpg');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'gdksport', 'jocks_acceptance');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  if (((s as any).balletqw ?? 0)?.['yoga_session'] === ((s as any).daystart ?? 0)) {
    scene.text('There is another fitness class in progress and no more yoga sessions today.');
    scene.actions([
      { label: 'Return to the studio reception', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pushkin_ballet_secrets', 'reception'] },
    ]);
  } else {
    (s as any).scene_sel = Math.floor(Math.random() * 61) + 0;
    if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  ((s as any).scene_sel ?? 0) >= 55) {
      (s as any).img_sel = Math.floor(Math.random() * 3) + 1;
      if (!(s as any).balletqw) (s as any).balletqw = {}; (s as any).balletqw['yoga_session'] = ((s as any).daystart ?? 0);
      scene.img(((s as any).setloc ?? {})?.['imagepath'] + '/awakened_yoga_' + ((s as any).img_sel ?? 0) + '.jpg');
      qspCall(s, 'core_library', 'stage_title');
      scene.text('You enter the yoga studio, but instead of your usual instructor there is a group of naked woman in the class. It takes a moment to realise that they are Fae.');
      if (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 1) {
        scene.actions([
          { label: 'Join the Fae', handler: (st: GameState) => {
    qspCall(s, 'exercise', 'tier4', 60, 'sprt', 'agil');
    qspCall(s, 'exp_gain', 'magik', Math.floor(Math.random() * 3) + 1);
    qspCall(s, 'exp_gain', 'prcptn', Math.floor(Math.random() * 4) + 2);
    qspCall(s, 'stat', '');
    scene.text('You are about to leave when one of the Fae spots you and waves you over. "Come join us." she says with a smile and a soft voice. You are not sure what to do but one of the Fae indicates a spot for you and for the next hour is aa surreal experience of guided deep meditative yoga and magic that helps you refocus your powers.');
    scene.actions([
      { label: 'Return to the studio reception', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pushkin_ballet_secrets', 'reception'] },
    ]);
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Leave the class', handler: (st: GameState) => {
    scene.text('You blush at seeing the naked Fae, and quickly make your excuses and leave the studio. You are left with more questions than answers about what was going on.');
    scene.actions([
      { label: 'Return to the studio reception', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pushkin_ballet_secrets', 'reception'] },
    ]);
  } },
        ]);
      }
    } else {
      qspCall(s, 'core_library', 'stage_title');
      if (!(s as any).balletqw) (s as any).balletqw = {}; (s as any).balletqw['yoga_session'] = ((s as any).daystart ?? 0);
      (s as any).lesson_tier = Math.floor(Math.random() * 3) + 1;
      if (((s as any).lesson_tier ?? 0) === 1) {
        qspCall(s, 'exercise', 'tier2', 60, 'sprt', 'agil');
        scene.text('You spend sixty minutes in an easy going class today, leaving you feeling refreshed and ready to face the world again.');
      } else {
        if (((s as any).lesson_tier ?? 0) === 2) {
          scene.text('You spend sixty minutes with your instructor today correcting your poses and providing advice on how you can improve, leaving you feeling tired and some muscle aches from the exercises.');
          qspCall(s, 'exercise', 'tier3', 60, 'sprt', 'agil');
        } else {
          qspCall(s, 'exercise', 'tier4', 60, 'sprt', 'agil', 'stren');
          scene.text('Today\'s sixty minutes was challenging with the instructor taking the class through some of the more demanding positions. Leaving many of your yoga buddies look more than a little bit ragged after today\'s session.');
        }
      }
      (s as any).pcs_willpwr = ((s as any).pcs_willpwr ?? 0) + (0);
      qspCall(s, 'pain', '', 2, 'legL', 'stretch');
      qspCall(s, 'pain', '', 2, 'legR', 'stretch');
      qspCall(s, 'pain', '', 2, 'shoulders', 'stretch');
      qspCall(s, 'pain', '', 2, 'armL', 'stretch');
      qspCall(s, 'pain', '', 2, 'armR', 'stretch');
      qspCall(s, 'pain', '', 2, 'back', 'stretch');
      qspCall(s, 'pain', '', 2, 'chest', 'stretch');
      scene.actions([
        { label: 'Return to the studio reception', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pushkin_ballet_secrets', 'reception'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterJobs(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterClothing(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pushkin_ballet_secrets', 'clothing');
  if (!(s as any).setloc) (s as any).setloc = {}; (s as any).setloc['StageTitle'] = 'Ballet Secrets - Dancewear';
  scene.img(((s as any).setloc ?? {})?.['imagepath'] + '/sports_shop.jpg');
  qspCall(s, 'core_library', 'stage_title');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['pushkin_sq', ''] },
  ]);
  scene.build();
}

function enterQuest(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pushkin_ballet_secrets', 'quest');
  if (!(s as any).setloc) (s as any).setloc = {}; (s as any).setloc['StageTitle'] = 'Ballet Secrets';
  scene.img(((s as any).setloc ?? {})?.['imagepath'] + '/quest.jpg');
  qspCall(s, 'core_library', 'stage_title');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['pushkin_sq', ''] },
  ]);
  scene.build();
}

function enterCafe(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pushkin_ballet_secrets', 'cafe');
  if (!(s as any).setloc) (s as any).setloc = {}; (s as any).setloc['StageTitle'] = 'Food Court';
  scene.img(((s as any).setloc ?? {})?.['imagepath'] + '/food_court.jpg');
  qspCall(s, 'core_library', 'stage_title');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('There\'s a small café next to the reception, but there is no-one at the counter. A notice on the counter is claims they are presently short staffed. Luckily there is an vending machine to provide drinks and food to help you relax and gain some energy back after your sessions. It also has some knick knacks in case you forgot to bring items for your class. Annoyingly the vending machine only accepts debit cards.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pushkin_ballet_secrets', 'reception'] },
    { label: 'Buy an energy bar [+$func(\'money\', \'get_cost_string\', 150, \'...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 150, 'bank') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      scene.actions([{ label: 'Continue', goto: ['pushkin_ballet_secrets', 'energy_bar'] }]);
    }
  } },
    { label: 'Buy an energy drink [+$func(\'money\', \'get_cost_string\', 200, \'...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 200, 'bank') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      scene.actions([{ label: 'Continue', goto: ['pushkin_ballet_secrets', 'energy_drink'] }]);
    }
  } },
  ]);
  scene.build();
}

function enterEnergyBar(s: GameState, scene: SceneBuilder): void {
  scene.img(((s as any).setloc ?? {})?.['imagepath'] + '/protein_bar.jpg');
  qspCall(s, 'core_library', 'stage_title');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'money', 'pay', 150, 'bank');
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
  qspCall(s, 'mood', 'raise', 'tiny');
  (s as any).fat = ((s as any).fat ?? 0) + (6);
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (30);
  (s as any).cumspclnt = 2;
  qspCall(s, 'cum_cleanup', '');
  (s as any).pcs_breath = 0;
  qspCall(s, 'stat', '');
  scene.text('You purchase and eat an over-priced energy bar with your cash card from the vending machine. It tastes like cardboard but it does the job and gives you a small energy boost.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Back', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pushkin_ballet_secrets', 'reception'] },
  ]);
  scene.build();
}

function enterEnergyDrink(s: GameState, scene: SceneBuilder): void {
  scene.img(((s as any).setloc ?? {})?.['imagepath'] + '/energy_drink.jpg');
  qspCall(s, 'core_library', 'stage_title');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'money', 'pay', 200, 'bank');
  qspCall(s, 'beverage', 'energy_drink_stats');
  qspCall(s, 'stat', '');
  scene.text('You purchase and drink your energy drink with your cash card from the vending machine. It\'s overly sweet, but after a few moments it gives you a much needed boost');
  // TODO-QSP: end
  scene.actions([
    { label: 'Back', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pushkin_ballet_secrets', 'reception'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'init':
      enterInit(s, scene);
      break;
    case 'exit':
      enterExit(s, scene);
      break;
    case 'first_visit':
      enterFirstVisit(s, scene);
      break;
    case 'reception':
      enterReception(s, scene);
      break;
    case 'enrol':
      enterEnrol(s, scene);
      break;
    case 'changing_room':
      enterChangingRoom(s, scene);
      break;
    case 'physio':
      enterPhysio(s, scene);
      break;
    case 'gymnastics_courses':
      enterGymnasticsCourses(s, scene);
      break;
    case 'ballet_courses':
      enterBalletCourses(s, scene);
      break;
    case 'yoga_courses':
      enterYogaCourses(s, scene);
      break;
    case 'jobs':
      enterJobs(s, scene);
      break;
    case 'clothing':
      enterClothing(s, scene);
      break;
    case 'quest':
      enterQuest(s, scene);
      break;
    case 'cafe':
      enterCafe(s, scene);
      break;
    case 'energy_bar':
      enterEnergyBar(s, scene);
      break;
    case 'energy_drink':
      enterEnergyDrink(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pushkin_ballet_secrets: LocationDef = {
  name: 'pushkin_ballet_secrets',
  title: 'You enter the shop getting greeted by a riot of displays sho',
  region: 'pushkin',
  locationType: 'public_indoors',
  locclass: 'changingroom',
  enter: enter,
};
