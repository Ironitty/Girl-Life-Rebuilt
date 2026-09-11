import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterHome(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  (s as any).popolaini = 0;
  (s as any).saunaYouRoom = 0;
  (s as any).boycherdaksex = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.img('images/locations/pavlovsk/resident/vitekhome/kotov_home.jpg');
  scene.text('You walk to Vitek\'s house. You approach a rather decrepit house, there is some junk piled up in front of it. The paint is peeling off it, there is an old Lada parked next to the house.');
  if (((s as any).hour ?? 0) >= 24) {
    scene.text('It would be rude to even knock on the door at this time of night, Vitek is probably asleep. You decide against it, and lower your hand.');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  } else {
    if (((s as any).hour ?? 0) < 8) {
      scene.text('It would be rude to even knock on the door at this time of morning, Vitek is probably asleep. You decide against it, and lower your hand.');
      scene.actions([
        { label: 'Leave', goto: ['pav_residential', ''] },
      ]);
    } else {
      qspCall(s, 'stat', '');
      if ((((s as any).week ?? 0) <= 14  &&  ((s as any).hour ?? 0) > 16  &&  ((s as any).hour ?? 0) < 5)  ||  (((s as any).week ?? 0) > 5  &&  ((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) < 16)) {
        if (((s as any).kotovLoveQW ?? 0) === -1) {
          scene.img('images/characters/shared/headshots_main/big9.jpg');
          scene.text('You stand outside the Kotov home, knocking on the door.');
          scene.text('Vitek opens the door but as soon as he sees you, his nostrils flare and his eyes harden. "Fuck off, bitch!" he screams, before slamming the door in your face.');
          scene.actions([
            { label: 'Leave', goto: ['pav_residential', ''] },
          ]);
        } else {
          scene.img('images/characters/shared/headshots_main/big9.jpg');
          scene.text('You stand outside the Kotov home, knocking on the door.');
          scene.text('Vitek opens the door and lets you into his house. It\'s in rather poor shape, and there are lots of empty bottles littered on the floor of pretty much every room you can see. The room he guides you to has clothes lying in crumpled heaps on the floor as well.');
          scene.actions([
            { label: 'Follow him', goto: ['kotovdom', 'kotovkom'] },
          ]);
        }
      } else {
        scene.text('You stand outside the Kotov home, knocking on the door. You wait for a bit but it appears that nobody is home.');
        scene.actions([
          { label: 'Leave', goto: ['pav_residential', ''] },
        ]);
      }
    }
  }
  scene.build();
}

function enterKor(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Hallway</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/home/korr.jpg');
  scene.actions([
    { label: 'Go to Vitek\'s bedroom', goto: ['kotovdom', 'kotovkom'] },
    { label: 'Go to the bathroom', goto: ['kotovdom', 'vann'] },
    { label: 'Go to the kitchen', goto: ['kotovdom', 'kuh'] },
    { label: 'Leave', goto: ['pav_residential', ''] },
  ]);
  scene.build();
}

function enterVann(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Bathroom</b></center>');
  scene.img('images/locations/pavlovsk/resident/vitekhome/vann.jpg');
  scene.text('Vitek\'s old bathroom. It doesn\'t look like much, but the shower works just fine.');
  if (((s as any).pain ?? 0)?.['asshole'] + (((s as any).agape ?? 0) * 10) > 40) {
    qspCall(s, 'dinsex', 'after_anal', 'no_plug');
  } else {
    qspCall(s, 'dinsex', 'after_anal', 'pc');
  }
  scene.actions([
    { label: 'Wash in the shower (0:15)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (1);
    (s as any).pcs_hairbsh = 0;
    (s as any).pcs_makeup = 1;
    (s as any).noshampoo = 1;
    qspCall(s, 'din_van', 'showerdin');
    if (((s as any).frost ?? 0) > 0) {
      (s as any).frost = 0;
    }
    scene.img('images/shared/home/bathroom/dush.mp4');
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the shower.');
    }
    scene.actions([
      { label: 'Dry off and get dressed again', goto: ['kotovdom', 'vann'] },
    ]);
  } },
    { label: 'Go to the hallway', goto: ['kotovdom', 'kor'] },
  ]);
  scene.build();
}

function enterKotovkom(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Vitek\'s bedroom</b></center>');
  scene.img('images/locations/pavlovsk/resident/vitekhome/kotovkom.jpg');
  scene.text('His bedroom doesn\'t look like it has been cleaned in weeks or maybe ever; dirty clothes lie on the floor, cleaner looking clothes are scattered around. Several empty beer bottles and other alcohol bottles are scattered around, a full ashtray rests on a wooden box he is using as a night stand next to the bed. The only thing in decent shape in the whole room is a newer looking TV.');
  scene.text('<a href="exec:gt \'kotovdom\', \'vitek_chat\'">Vitek</a> is lying on his bed, relaxing and watching TV.');
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    // TODO-QSP: act 'Dress yourself': gs 'shortgs', 'dress'
    scene.actions([{ label: 'Continue', goto: ['kotovdom', 'kotovkom'] }]);
  }
  scene.actions([
    { label: 'Go to the hallway', goto: ['kotovdom', 'kor'] },
  ]);
  scene.build();
}

function enterKuh(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Kitchen</b></center>');
  scene.img('images/locations/pavlovsk/resident/vitekhome/kuh.jpg');
  qspCall(s, 'kit_din', 'fill_bottle');
  qspCall(s, 'kit_din', 'driwater');
  scene.actions([
    { label: 'Go to the hallway', goto: ['kotovdom', 'kor'] },
    { label: 'Look in the fridge', goto: ['kotovdom', 'fridge'] },
  ]);
  scene.build();
}

function enterFridge(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  if (((s as any).kotovfood_day ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).kotovsup_count = 1;
    (s as any).kotovlefto_count = 1;
    (s as any).kotovwater_count = 1;
    (s as any).kotovsanw_count = 1;
  }
  qspCall(s, 'stat', '');
  if (((s as any).kotovlefto_count ?? 0) >= 1) {
  }
  if (((s as any).kotovsup_count ?? 0) >= 1) {
  }
  if (((s as any).kotovwater_count ?? 0) >= 1) {
  }
  if (((s as any).kotovsanw_count ?? 0) >= 1) {
  }
  scene.img('images/shared/home/kitchen/fridge.jpg');
  // TODO-QSP: dynamic text: You open the fridge and see:<<$artem_tea>><<$artem_water>><<$artem_sup>><<$artem...
  scene.text(`You open the fridge and see:${((s as any).artem_tea ?? 0)}${((s as any).artem_water ?? 0)}${((s as any).artem_sup ?? 0)}${((s as any).artem_lefto ?? 0)}${((s as any).artem_sanw ?? 0)}`);
  if (((s as any).kotovlefto_count ?? 0) > 0) {
    scene.actions([
      { label: 'Eat some left overs', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).kotovfood_day = ((s as any).daystart ?? 0);
    (s as any).kotovlefto_count = ((s as any).kotovlefto_count ?? 0) - (1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/food/leftovers.jpg');
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
    qspCall(s, 'mood', 'raise', 'small');
    (s as any).fat = ((s as any).fat ?? 0) + (2);
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (50);
    if (((s as any).pcs_hydra ?? 0) >= 100) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (20);
    } else {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (40);
    }
    (s as any).cumspclnt = 2;
    qspCall(s, 'cum_cleanup', '');
    (s as any).pcs_breath = 0;
    scene.text('It seems to be leftovers from a last night\'s dinner, it isn\'t very good, even for left overs. You doubt it was much better when it was fresh.');
    scene.actions([
      { label: 'Continue', goto: ['kotovdom', 'kuh'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).kotovwater_count ?? 0) >= 0) {
      scene.actions([
        { label: 'Have some water', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).kotovfood_day = ((s as any).daystart ?? 0);
    (s as any).kotovwater_count = ((s as any).kotovwater_count ?? 0) - (1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/food/waterbottle1.jpg');
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
    qspCall(s, 'mood', 'raise', 'small');
    (s as any).fat = ((s as any).fat ?? 0) + (2);
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (50);
    if (((s as any).pcs_hydra ?? 0) >= 100) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (20);
    } else {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (40);
    }
    (s as any).cumspclnt = 2;
    qspCall(s, 'cum_cleanup', '');
    (s as any).pcs_breath = 0;
    scene.text('You drink some bottled water.');
    scene.actions([
      { label: 'Continue', goto: ['kotovdom', 'kuh'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).kotovsup_count ?? 0) >= 0) {
        scene.actions([
          { label: 'Have some soup', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).kotovfood_day = ((s as any).daystart ?? 0);
    (s as any).kotovsup_count = ((s as any).kotovsup_count ?? 0) - (1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/food/soup.jpg');
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
    qspCall(s, 'mood', 'raise', 'small');
    (s as any).fat = ((s as any).fat ?? 0) + (2);
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (50);
    if (((s as any).pcs_hydra ?? 0) >= 100) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (20);
    } else {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (40);
    }
    (s as any).cumspclnt = 2;
    qspCall(s, 'cum_cleanup', '');
    (s as any).pcs_breath = 0;
    scene.text('You find some soup in the fridge. You spoon out a bowlful to eat. It isn\'t very good and you have a feeling that it was sitting in there for way too long.');
    scene.actions([
      { label: 'Continue', goto: ['kotovdom', 'kuh'] },
    ]);
  } },
        ]);
      } else {
        if (((s as any).kotovsanw_count ?? 0) >= 0) {
          scene.actions([
            { label: 'Make a sandwich', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).kotovfood_day = ((s as any).daystart ?? 0);
    (s as any).kotovsanw_count = ((s as any).kotovsanw_count ?? 0) - (1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/food/reuben.jpg');
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
    qspCall(s, 'mood', 'raise', 'small');
    (s as any).fat = ((s as any).fat ?? 0) + (2);
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (50);
    if (((s as any).pcs_hydra ?? 0) >= 100) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (20);
    } else {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (40);
    }
    (s as any).cumspclnt = 2;
    qspCall(s, 'cum_cleanup', '');
    (s as any).pcs_breath = 0;
    scene.text('You get all the stuff you need from the fridge then get some bread out of the cabinet and make yourself a sandwich.');
    scene.actions([
      { label: 'Continue', goto: ['kotovdom', 'kuh'] },
    ]);
  } },
          ]);
        }
      }
    }
  }
  scene.actions([
    { label: 'Close the refrigerator', goto: ['kotovdom', 'kuh'] },
  ]);
  scene.build();
}

function enterVitekChat(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big9.jpg');
  scene.text('You sit on the bed and try to talk to Vitek, but it\'s obvious he\'s paying more attention to the TV.');
  if (((s as any).kotovLoveQW ?? 0) > 0) {
    scene.actions([
      { label: 'Break up with him', handler: (st: GameState) => {
    (s as any).kotovLoveQW = (-1);
    qspCall(s, 'npc_relationship', 'set', 'A9', 0);
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) - (50);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big9.jpg');
    scene.text('You sit down without saying a word. Vitek barely acknowledges you.');
    scene.text('You look at him, frowning. "We should talk."');
    scene.text('He lets out a loud sigh before finally turning to you. "Okay, about what?"');
    scene.text('"I think we should break up."');
    scene.text('He jumps up from the bed and walks around to you. "What?" he yells, enraged. "I don\'t think so! I saw when we break up!"');
    scene.text('You get up to try and put a little space between you. "I just don\'t feel the same way about you anymore."');
    scene.text('He raises his hand like he\'s going to hit you, but stops himself. "Fuck you then, bitch!"');
    scene.text('Vitek grabs you by the hair and starts dragging you through his house, yelling obscenities at you the whole time.');
    scene.text('When he reaches the front door, he pulls it open and shoves you outside. You stumble as your feet touch the pavement, but you manage to stay upright.');
    scene.text('"Ungrateful whore!" he screams before slamming the door shut.');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Stop talking', goto: ['kotovdom', 'kotovkom'] },
    { label: 'Make small talk', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A9', 'like');
    scene.img('images/characters/shared/headshots_main/big9.jpg');
    scene.text('You talk with Vitek about a variety of things, mostly about his friends and the other Gopniks. He doesn\'t ask about your life at all.');
    scene.actions([
      { label: 'Keep talking', goto: ['kotovdom', 'vitek_chat'] },
      { label: 'Stop talking', goto: ['kotovdom', 'kotovkom'] },
    ]);
  } },
    { label: 'Ask about the future', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A9', 'like');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/shared/headshots_main/big9.jpg');
    scene.text('"What do you plan to do after school?" you ask.');
    scene.text('He looks at you then laughs, "Fuck, I don\'t know. Who cares? I\'ll figure it out when it happens."');
    scene.text('Before you can say anything else, he turns his attention to the TV.');
    scene.actions([
      { label: 'Stop talking', goto: ['kotovdom', 'kotovkom'] },
      { label: 'Keep talking', goto: ['kotovdom', 'vitek_chat'] },
    ]);
  } },
    { label: 'Ask what he\'s been up to', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A9', 'like');
    scene.img('images/characters/shared/headshots_main/big9.jpg');
    scene.text('You ask him, "So what have you been up to lately?"');
    scene.text('He gives you a slightly puzzled look. "Up to?"');
    scene.text('You smile at him. "You know, what have you been doing in your free time."');
    scene.text('"Oh, you know, the usual. Drinking, busting heads, making a little money on the side." He eyes you, looking a bit annoyed. "Why you asking?"');
    scene.text('"I was just curious," you tell him.');
    scene.text('He shakes his head like you just asked a stupid question. "Whatever."');
    scene.actions([
      { label: 'Stop talking', goto: ['kotovdom', 'kotovkom'] },
      { label: 'Keep talking', goto: ['kotovdom', 'vitek_chat'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAfterSex(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'arousal', 'end');
  scene.text('<center><b>Vitek\'s bedroom</b></center>');
  scene.img('images/locations/pavlovsk/resident/vitekhome/kotovkom.jpg');
  if (((s as any).pain ?? 0)?.['asshole'] + (((s as any).agape ?? 0) * 10) > 40) {
    qspCall(s, 'dinsex', 'after_anal', 'no_plug\' else gs \'dinsex', 'after_anal', 'boy', ((s as any).boydesc ?? 0));
  }
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    // TODO-QSP: act 'Dress yourself': gs 'shortgs', 'dress'
    scene.actions([{ label: 'Continue', goto: ['kotovdom', 'after_sex'] }]);
  }
  if (((s as any).npc_rel ?? 0)?.[String((s as any).boy ?? 0)] > 50  &&  ((s as any).clothingworntype ?? 0) !== 'nude') {
    scene.text('"Are you ready to go?" he asks while looking up at you from the bed.');
    scene.text('When he sees that you are, he gets up and throws on some clothes. "Come on, I\'ll walk you home."');
    scene.actions([
      { label: 'Walk home with Vitek', goto: ['kotovdom', 'walk'] },
    ]);
  }
  if (((s as any).npc_rel ?? 0)?.[String((s as any).boy ?? 0)] <= 50  &&  ((s as any).clothingworntype ?? 0) !== 'nude') {
    // TODO-QSP: dynamic text: "Thanks for the fuck, <<$pcs_nickname>>," he says with a satisfied grin while lo...
    scene.text(`"Thanks for the fuck, ${((s as any).pcs_nickname ?? 0)}," he says with a satisfied grin while looking up at you from the bed. "Take care, you are more than welcome here."`);
    scene.actions([
      { label: 'Say goodbye and leave', goto: ['pav_residential', ''] },
    ]);
  }
  scene.build();
}

function enterWalk(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  (s as any).kotov_bj_times = 0;
  (s as any).anal_no = 0;
  scene.img('images/characters/pavlovsk/school/boy/vitek/vitekkiss.jpg');
  scene.text('You smile and occasionally glance at Vitek while he walks you home, neither of you saying much on the way there.');
  scene.text('When you climb to the second floor of your apartment building and reach the door, Vitek hugs you tightly in his powerful arms. He kisses you passionately, and his hands grope your butt roughly.');
  scene.text('For a moment you wonder if he\'s going to want to have sex with you right here in the stairwell, but as soon as you think that he lets you go. "I\'ll see you soon, kitten. Don\'t miss me too much!" he says with a grin before turning around and walking down the stairs.');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Say goodbye', goto: ['pod_ezd', 'etaj_2'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'home':
      enterHome(s, scene);
      break;
    case 'kor':
      enterKor(s, scene);
      break;
    case 'vann':
      enterVann(s, scene);
      break;
    case 'kotovkom':
      enterKotovkom(s, scene);
      break;
    case 'kuh':
      enterKuh(s, scene);
      break;
    case 'fridge':
      enterFridge(s, scene);
      break;
    case 'vitek_chat':
      enterVitekChat(s, scene);
      break;
    case 'after_sex':
      enterAfterSex(s, scene);
      break;
    case 'walk':
      enterWalk(s, scene);
      break;
    default:
      enterHome(s, scene);
      break;
  }
}

export const kotovdom: LocationDef = {
  name: 'kotovdom',
  title: 'Hallway',
  region: 'other',
  locationType: 'event',
  locclass: 'bedr',
  description: ['You walk to Vitek\'s house. You approach a rather decrepit house, there is some junk piled up in front of it. The paint is peeling off it, there is an old Lada parked next to the house.'],
  enter: enter,
};
