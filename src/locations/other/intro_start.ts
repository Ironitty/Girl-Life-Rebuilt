import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'themes', 'indoors');
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
    if (((s as any).start_type ?? 0)?.['magic'] === 'magic') {
      scene.actions([{ label: 'Continue', goto: ['intro_start', 'magic_shared'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['intro_start', 'sg_shared'] }]);
      scene.actions([{ label: 'Continue', goto: ['intro_start', 'sg_tg'] }]);
    }
  } else {
    if (((s as any).start_type ?? 0)?.['magic'] === 'magic') {
      scene.actions([{ label: 'Continue', goto: ['intro_start', 'magic_shared'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['intro_start', 'uni_shared'] }]);
      scene.actions([{ label: 'Continue', goto: ['intro_start', 'tg_adult_shared'] }]);
    }
    if (((s as any).start_type ?? 0)?.['magic'] === 'magic') {
      scene.actions([{ label: 'Continue', goto: ['intro_start', 'magic_shared'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['intro_start', 'city_shared'] }]);
      scene.actions([{ label: 'Continue', goto: ['intro_start', 'tg_adult_shared'] }]);
    }
  }
  scene.build();
}

function enterQuickStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).start_type ?? 0)?.['magic'] === 'tg') {
    qspCall(s, 'intro_functions', 'set_default', 'name');
  }
  scene.actions([{ label: 'Continue', goto: ['intro_character_creation', 'quick_start'] }]);
  scene.build();
}

function enterUniShared(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/island/university/uni_day.jpg');
  scene.text('The big day has finally arrived! Your family piled into your stepfather\'s Gazelle pickup and you all traveled from your hometown, Pavlovsk, to St. Petersburg. Today is the day you move into the university dorms to start this new phase of your life.');
  scene.text('As you approach the city, you think back to your school days and recall what type of student you were...');
  return;
  scene.actions([
    { label: 'Continue', goto: ['intro_character_creation', 'start'] },
  ]);
  scene.build();
}

function enterCityShared(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/street.jpg');
  scene.text('The big day has finally arrived! Your family piled into your stepfather\'s Gazelle pickup and you all traveled from your hometown, Pavlovsk, to St. Petersburg. Today is the day you move into your own apartment and start this new phase of your life.');
  scene.text('You think back to your school days and what kind of student you were…');
  return;
  scene.actions([
    { label: 'Continue', goto: ['intro_character_creation', 'start'] },
  ]);
  scene.build();
}

function enterSgShared(s: GameState, scene: SceneBuilder): void {
  scene.img('images/system/1_openings/shared/pre_5.jpg');
  scene.text('You were born in the small town of Pavlovsk, near the city of St Petersburg.');
  scene.text('Your mother is Natasha, but you don\'t know much about your biological father since your mother never wants to talk about him, or why he left you and your older sister, Anya.');
  scene.text('Your mother met another man, Vladimir, not long after she and your biological father got divorced. Together, they had your little brother, Kolka. Even though he\'s not your real father, Vladimir has always treated you and Anya as if you were his own children.');
  return;
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/pre_6.jpg');
    scene.text('You had a pleasant, undisturbed childhood when you were young. Although you don\'t remember much from kindergarten, you do remember going to elementary school when you were 6 years old.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/pre_7.jpg');
    scene.text('Like it does for most girls, you reached the milestone of puberty when you were 13 years old. You had your first period, which sucked, but that was just the start of your changes.');
    scene.text('Your chest felt strange and you discovered your breasts were growing! This excited you: how big will they be when you grow up? Hair also began to grow in your armpits and pubic area, and at the same time you felt things… intimate things. Over time, you learned to appreciate these feelings, and how to manage your developing body. Your troublesome skin complexion remains an issue though.');
    scene.text('When you finished ninth grade, you decided to continue with your secondary education. You completed the first one and only have one more year of school to go, but first: What type of student are you?');
    scene.actions([
      { label: 'Continue', goto: ['intro_character_creation', 'start'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMagicShared(s: GameState, scene: SceneBuilder): void {
  if (((s as any).ARGS ?? 0)[1] === 0) {
    scene.img('images/system/1_openings/shared/site_gadukino.jpg');
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
      scene.text('Having completed your second to last year of school, you went on summer break.');
    } else {
      scene.text('After your last year of school, your grades were good enough for you to get into university.');
      scene.text('After your last year of school, you had saved up enough money to get your own apartment in the city.');
    }
    scene.text('Your mother convinced you to spend the day at your grandparents\' farm in the village of Gadukino, but there\'s nothing to do here but watch animals graze and help your grandparents, which does earn you some extra cash, even if it\'s very tedious.');
    scene.actions([
      { label: 'Take a walk', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/site_woods.jpg');
    scene.text('After several hours, you grow bored and decide to go for a walk through the forest, spending most of the time on your phone.');
    scene.text('Your phone signal then drops, meaning you\'ve strayed too far from the village. Looking up, you don\'t recognise anything and suddenly realize that you\'re lost.');
    scene.actions([
      { label: 'Find a way back', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/site_ruin.jpg');
    scene.text('You try to find your way back, but the only thing you manage to do is get even more lost. After hours of wandering around, you come across an old ruin.');
    scene.actions([
      { label: 'Take a break', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/site_tunnel_1.jpg');
    scene.text('You take a seat on a large stone in the ruins and take a breath. You\'re starting to get hungry, and stomp your foot in frustration. The floor suddenly gives way and you desperately try to hold on to something, but everything in reach comes loose and falls down the hole with you. You feel slightly dazed, but after a quick check you seem to be uninjured. You seem to be in an underground chamber of some sort and looking up, you see that climbing out is not an option.');
    scene.text('You spot an old gate, but it\'s either locked or rusted shut. The only way out seems to be the tunnel on the other side of the chamber. You pull out your phone and turn on the flashlight before heading into the tunnel.');
    scene.actions([
      { label: 'Follow the tunnel', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_start', 'magic_shared', 1
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    scene.img('images/system/1_openings/shared/site_tunnel_2.jpg');
    scene.text('The tunnel goes on for what feels like miles. You start to worry that your phone battery will die.');
    if (((s as any).ARGS ?? 0)[1] === 2) {
      scene.img('images/system/1_openings/shared/site_working.jpg');
      scene.text('You follow the passage and find yourself in a construction site. There are several <b>KEEP OUT</b> signs visible from here. Shit.');
      scene.actions([
        { label: 'Sneak out', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/site_road.jpg');
    scene.text('The workers shift has long since finished, so sneaking out isn\'t too hard. The site is on the highway, so hopefully you can make it back before your mother starts freaking out. As you start walking back, you feel a sudden rush of heat and find yourself falling…');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/npc_tatiana.jpg');
    scene.text('You wake up in an unfamiliar room. Standing near you is a red-haired girl.');
    scene.text('"Ah, you\'re awake!" she chirps. "We found you half-dead, you know. You almost didn\'t make it. You shouldn\'t be fondling ancient amulets you know nothing about."');
    scene.text('"I did some research on what happened to you. Turns out the Amulet of Power passed to you, which should only happen if touched by a male mage. Unfortunately, I\'ve got some bad news for you. Reinhold, a really powerful mage, has been tracking down this amulet for a while now and if he realizes that the amulet\'s power has passed to you, he might think you pose a risk."');
    scene.actions([
      { label: 'What\'s going on?', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_start', 'magic_shared', 3
  } },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.img('images/system/1_openings/shared/npc_tatiana.jpg');
      scene.text('"What the hell is going on?" you respond. You try to move your hands, but you\'re tied to the bed.');
      scene.text('"I\'ll start from the beginning," the girl says. "Magic exists and is real. Millennia ago, the world was not the same. The fae creatures who possess natural magic lived in balance, but the succubus were free to breed with whomever they wished."');
      scene.text('"They bred with humans and so human magicians were born. The Sidhe, as the most powerful of the fae, feared the increasing number of human magicians and cast a very powerful spell to bind the succubus to them. This prevented one from being able to reproduce without the other."');
      scene.text('"All magicians have some of that original fae blood in their bodies and it is through that that they are able to connect with the world of magic."');
      scene.text('The redhead adjusts her glasses. "Most of the world simply ignores magic or are protected from it by magic\'s natural desire to remain hidden, but last night there was a powerful burst of magical energy, strong enough to be clearly seen by any with magical connections. Can you guess where this surge came from? Yeah, that cave you found. Apparently the surge occurred when you opened the seal to the archive. Anyway, that was when we started to search. That source of power is desired by many, but it is extremely dangerous and in the wrong hands could do untold horrors."');
      scene.text('She stops for a few seconds for you to process the information. It seems really far fetched.');
      scene.text('"Reinhold wants to prevent the amulet being misused. He is tasked with maintaining order and will search for you."');
      if (((s as any).ARGS ?? 0)[1] === 4) {
        scene.img('images/system/1_openings/shared/npc_tatiana.jpg');
        scene.text('"What do you want from me?" you ask.');
        scene.text('"Well, the amulet, obviously," Tatiana replies. "When I looked for you, I was hoping to get that object of power to study, but the power transferred to you first. The amulet will now be pretty much useless."');
        scene.text('"But this is not good for you. You may think that since you have the amulet\'s power, you can do anything. But in reality, you\'re helpless without the skill to use it. Its power already knocked you out and I had to use magic to stabilize you."');
        scene.actions([
          { label: 'What is this amulet?', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/npc_tatiana.jpg');
    scene.text('"And what is this amulet? Where did it come from?" you ask.');
    scene.text('Tatiana thinks about it for a few seconds. "It was made by the trickster Rikudo, one of the most powerful ancient magicians before he died. He taunted the only living mage who could control its immense power by cursing him to be stuck in a female form and making it only activate for a male mage."');
    scene.text('"Great. So I\'ve been thrown into this mess by the dead owner of that ancient tomb. Hang on! I\'m not male or a mage, how could the power be transferred to me?"');
    scene.text('"It seems that its long time underground caused it to malfunction and its power has entered your body."');
    scene.text('"You\'re lucky to be a woman," Tatiana adds. "Rikudo\'s power seems to only work if it is in a man\'s body. Since you can\'t harness its power, you shouldn\'t arouse any suspicion."');
    scene.actions([
      { label: 'So what should I do?', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/npc_tatiana.jpg');
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
      scene.text('"Lay low for now. Get on with your life. We\'ll contact you if anything comes up. Gustav here will drop you off with your family."');
    } else {
      scene.text('"Lay low for now. Get on with your life. We\'ll contact you if anything comes up. Gustav here will drop you off at your apartment. Don\'t worry, I already let your parents and grandparents know you decided to head back to your apartment in Pavlovsk."');
    }
    scene.actions([
      { label: 'Follow Gustav', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_start', 'magic_shared', 5
  } },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        if (((s as any).start_type ?? 0)?.['loc'] === 'uni'  ||  ((s as any).start_type ?? 0)?.['loc'] === 'city'  ||  ((s as any).start_location ?? 0) === 0) {
          scene.img('images/system/1_openings/shared/site_pavlovsk.jpg');
          if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
            scene.text('You give Gustav directions to your family\'s apartment building. Half an hour later, he drops you off in front of your apartment complex in Pavlovsk.');
          } else {
            scene.text('You give Gustav directions to your apartment building. Half an hour later, he drops you off in front of your apartment building in Pavlovsk.');
          }
        } else {
          scene.img('images/system/1_openings/shared/site_gadukino.jpg');
          scene.text('You give Gustav directions to your grandparent\'s house. Half an hour later, he drops you off at your grandparent\'s yard in Gadukino.');
        }
        scene.text('You head inside and, feeling exhausted after the days events, you go to your room and collapse on the bed, quickly falling asleep.');
        scene.actions([
          { label: 'Done', handler: (st: GameState) => {
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
      scene.actions([{ label: 'Continue', goto: ['intro_start', 'sg_shared'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['intro_start', 'uni_shared'] }]);
      scene.actions([{ label: 'Continue', goto: ['intro_start', 'city_shared'] }]);
    }
  } },
        ]);
      }
      return;
      scene.actions([
        { label: 'So the whole world is just an illusion?', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/npc_tatiana.jpg');
    scene.text('"So magic exists and is used by all these people and creatures, but the rest of us just don\'t see it, or convince ourselves it didn\'t happen?"');
    scene.text('The girl nods. "Yes. You\'re a quick student. Machines, apartments, television and the Internet. All this really does exist and is in the form in which people see it. But if I say, hurl a fireball, then people might see that I threw a grenade or shot from a flamethrower. The human mind can\'t process magic, so it blocks it as a way to protect the person from going crazy."');
    scene.text('"Hence such things as little green men, UFOs, poltergeists and spontaneous combustion are when people encounter a difficult to hide phenomenon and the conclusion is flawed. In some cases, if someone\'s mind can\'t cope with the spell they witness, they can be driven insane."');
    scene.actions([
      { label: 'And who are you?', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/npc_tatiana.jpg');
    scene.text('"And who are you?" you ask.');
    scene.text('The girl smiles. "Me? I\'m Tatiana, a young mage with a keen interest in magical phenomenon. I specialize in the treatment of mutations, and magic relating to the body. I have little combat skill, so I rely on the services of Gustav to provide some muscle. He\'s a Mutant due to magical exposure. It gives him unmatched physical strength and he is a great tracker."');
    scene.text('"The two of us run a detective agency for cover and money, but our real objective is studying magic and its effects."');
    scene.actions([
      { label: 'What do you want from me?', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_start', 'magic_shared', 4
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/site_cave_altar.jpg');
    scene.text('Reaching the end of the tunnel, you find a dead end. Or at least it seems so. You can see light coming through the cracks in the wall, so you do your best to knock it down. The wall crumbles and you find yourself in another chamber filled with old pottery and baubles. Opposite you is another tunnel, which hopefully leads outside. In the center of the room is an altar and on it is what seems to be the centerpiece of the room; a strange amulet.');
    scene.actions([
      { label: 'Examine the amulet', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/item_amulet.jpg');
    scene.text('You take the amulet in your hands and notice it\'s much lighter than it looks and is unusually warm for a piece of metal. It\'s shaped like an antique oil lamp and… is that a penis?');
    scene.text('As you\'re about to pocket it, the amulet grows even hotter and zaps you, forcing you to drop it. You decide that it\'s best to try and find a way out.');
    scene.actions([
      { label: 'Find a way out', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_start', 'magic_shared', 2
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'quick_start':
      enterQuickStart(s, scene);
      break;
    case 'uni_shared':
      enterUniShared(s, scene);
      break;
    case 'city_shared':
      enterCityShared(s, scene);
      break;
    case 'sg_shared':
      enterSgShared(s, scene);
      break;
    case 'magic_shared':
      enterMagicShared(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const intro_start: LocationDef = {
  name: 'intro_start',
  title: 'Apartment',
  region: 'other',
  enter: enter,
};
