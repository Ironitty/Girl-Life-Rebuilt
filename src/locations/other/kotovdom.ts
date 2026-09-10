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
    scene.text('It would be rude to even knock on the door at this time of morning, Vitek is probably asleep. You decide against it, and lower your hand.');
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
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
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
  }
  scene.actions([
    { label: 'Close the refrigerator', goto: ['kotovdom', 'kuh'] },
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
