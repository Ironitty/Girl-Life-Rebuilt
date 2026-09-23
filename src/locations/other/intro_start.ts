import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'themes', 'indoors');
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
    if (((s as any).start_type ?? 0)?.['magic'] === 'magic') {
      qspGoto(s, 'intro_start', 'magic_shared');
    } else {
      if (((s as any).start_type ?? 0)?.['magic'] === 'nomagic') {
        qspGoto(s, 'intro_start', 'sg_shared');
      } else {
        qspGoto(s, 'intro_start', 'sg_tg');
      }
    }
  } else {
    if (((s as any).start_type ?? 0)?.['loc'] === 'uni') {
      if (((s as any).start_type ?? 0)?.['magic'] === 'magic') {
        qspGoto(s, 'intro_start', 'magic_shared');
      } else {
        if (((s as any).start_type ?? 0)?.['magic'] === 'nomagic') {
          qspGoto(s, 'intro_start', 'uni_shared');
        } else {
          qspGoto(s, 'intro_start', 'tg_adult_shared');
        }
      }
    } else {
      if (((s as any).start_type ?? 0)?.['magic'] === 'magic') {
        qspGoto(s, 'intro_start', 'magic_shared');
      } else {
        if (((s as any).start_type ?? 0)?.['magic'] === 'nomagic') {
          qspGoto(s, 'intro_start', 'city_shared');
        } else {
          qspGoto(s, 'intro_start', 'tg_adult_shared');
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterQuickStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).start_type ?? 0)?.['magic'] === 'tg') {
    qspCall(s, 'intro_functions', 'set_default', 'name');
  }
  qspGoto(s, 'intro_character_creation', 'quick_start');
  // TODO-QSP: end
  scene.build();
}

function enterUniShared(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/island/university/uni_day.jpg');
  scene.text('The big day has finally arrived! Your family piled into your stepfather\'s Gazelle pickup and you all traveled from your hometown, Pavlovsk, to St. Petersburg. Today is the day you move into the university dorms to start this new phase of your life.');
  scene.text('As you approach the city, you think back to your school days and recall what type of student you were...');
  scene.actions([
{ label: 'Continue', goto: ['intro_character_creation', 'start'] },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCityShared(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/street.jpg');
  scene.text('The big day has finally arrived! Your family piled into your stepfather\'s Gazelle pickup and you all traveled from your hometown, Pavlovsk, to St. Petersburg. Today is the day you move into your own apartment and start this new phase of your life.');
  scene.text('You think back to your school days and what kind of student you were…');
  scene.actions([
{ label: 'Continue', goto: ['intro_character_creation', 'start'] },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSgShared(s: GameState, scene: SceneBuilder): void {
  scene.img('images/system/1_openings/shared/pre_5.jpg');
  scene.text('You were born in the small town of Pavlovsk, near the city of St Petersburg.');
  scene.text('Your mother is Natasha, but you don\'t know much about your biological father since your mother never wants to talk about him, or why he left you and your older sister, Anya.');
  scene.text('Your mother met another man, Vladimir, not long after she and your biological father got divorced. Together, they had your little brother, Kolka. Even though he\'s not your real father, Vladimir has always treated you and Anya as if you were his own children.');
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
  return;
  // TODO-QSP: end
  scene.build();
}

function enterMagicShared(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 0) {
    scene.img('images/system/1_openings/shared/site_gadukino.jpg');
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
      scene.text('Having completed your second to last year of school, you went on summer break.');
    } else {
      if (((s as any).start_type ?? 0)?.['loc'] === 'uni') {
        scene.text('After your last year of school, your grades were good enough for you to get into university.');
      } else {
        scene.text('After your last year of school, you had saved up enough money to get your own apartment in the city.');
      }
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
      { label: 'Follow the tunnel', goto: ['intro_start', 'magic_shared', '1'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 1) {
      scene.img('images/system/1_openings/shared/site_tunnel_2.jpg');
      scene.text('The tunnel goes on for what feels like miles. You start to worry that your phone battery will die.');
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
      { label: 'Find a way out', goto: ['intro_start', 'magic_shared', '2'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 2) {
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
      { label: 'What\'s going on?', goto: ['intro_start', 'magic_shared', '3'] },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 3) {
          scene.img('images/system/1_openings/shared/npc_tatiana.jpg');
          scene.text('"What the hell is going on?" you respond. You try to move your hands, but you\'re tied to the bed.');
          scene.text('"I\'ll start from the beginning," the girl says. "Magic exists and is real. Millennia ago, the world was not the same. The fae creatures who possess natural magic lived in balance, but the succubus were free to breed with whomever they wished."');
          scene.text('"They bred with humans and so human magicians were born. The Sidhe, as the most powerful of the fae, feared the increasing number of human magicians and cast a very powerful spell to bind the succubus to them. This prevented one from being able to reproduce without the other."');
          scene.text('"All magicians have some of that original fae blood in their bodies and it is through that that they are able to connect with the world of magic."');
          scene.text('The redhead adjusts her glasses. "Most of the world simply ignores magic or are protected from it by magic\'s natural desire to remain hidden, but last night there was a powerful burst of magical energy, strong enough to be clearly seen by any with magical connections. Can you guess where this surge came from? Yeah, that cave you found. Apparently the surge occurred when you opened the seal to the archive. Anyway, that was when we started to search. That source of power is desired by many, but it is extremely dangerous and in the wrong hands could do untold horrors."');
          scene.text('She stops for a few seconds for you to process the information. It seems really far fetched.');
          scene.text('"Reinhold wants to prevent the amulet being misused. He is tasked with maintaining order and will search for you."');
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
      { label: 'What do you want from me?', goto: ['intro_start', 'magic_shared', '4'] },
    ]);
  } },
    ]);
  } },
          ]);
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 4) {
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
    if (((st as any).start_type ?? 0)?.['loc'] === 'sg') {
      scene.text('"Lay low for now. Get on with your life. We\'ll contact you if anything comes up. Gustav here will drop you off with your family."');
    } else {
      scene.text('"Lay low for now. Get on with your life. We\'ll contact you if anything comes up. Gustav here will drop you off at your apartment. Don\'t worry, I already let your parents and grandparents know you decided to head back to your apartment in Pavlovsk."');
    }
    scene.actions([
      { label: 'Follow Gustav', goto: ['intro_start', 'magic_shared', '5'] },
    ]);
  } },
    ]);
  } },
            ]);
          } else {
            if (String((s as any).locArgs?.[1] ?? '') === 5) {
              if (((s as any).start_type ?? 0)?.['loc'] === 'uni'  ||  ((s as any).start_type ?? 0)?.['loc'] === 'city'  ||  (!((s as any).start_location ?? 0))) {
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
    if (((st as any).start_type ?? 0)?.['loc'] === 'sg') {
      qspGoto(st, 'intro_start', 'sg_shared');
    } else {
      if (((st as any).start_type ?? 0)?.['loc'] === 'uni') {
        qspGoto(st, 'intro_start', 'uni_shared');
      } else {
        qspGoto(st, 'intro_start', 'city_shared');
      }
    }
  } },
              ]);
            }
          }
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterTgAdultShared(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 0) {
    scene.text('<center><b>Apartment</b></center>');
    scene.img('images/system/1_openings/1_tf/1.jpg');
    scene.text('You wake up to the sound of your alarm clock and hear Luda, your wife, mumbling next to you. "Don\'t want to, it\'s too early." She pulls her blanket up and rolls over. You reach over and turn the clock off.');
    scene.text('<i>There are days when I just want to keep sleeping,</i> you think to yourself. <i>But I can\'t, not today.</i>');
    scene.actions([
      { label: 'Go to the bathroom', handler: (st: GameState) => {
    scene.img('images/system/1_openings/1_tf/mikhail_2.jpg');
    scene.text('Taking care not to wake up your daughter, you quietly head to the bathroom and take care of your morning routine.');
    scene.actions([
      { label: 'Leave the apartment', handler: (st: GameState) => {
    scene.img('images/system/1_openings/1_tf/3.jpg');
    scene.text('Your car sits in a parking lot near your house. You unlock it with the remote key and climb in.');
    scene.actions([
      { label: 'Go to work', handler: (st: GameState) => {
    scene.img('images/system/1_openings/1_tf/4.jpg');
    scene.text('You turn the key and the engine roars to life. You drive for what feels like an eternity through the morning rush hour, but you eventually reach the office. At least the music on the radio was pleasant.');
    scene.actions([
      { label: 'Park at the office', handler: (st: GameState) => {
    scene.img('images/system/1_openings/1_tf/5.jpg');
    scene.text('You pull into a parking lot near the building and manage to find a good spot. You greet the security guard on your way into the building, then go upstairs to your office. Shortly after you sit down at your desk and boot up your computer, your boss\'s secretary comes in and hands you a folder with several travel documents.');
    scene.text('"Am I going on a business trip or something?" you ask.');
    scene.text('"Yes, the director said it had something to do with a construction project out in the middle of nowhere, but that\'s pretty much all I know," she says.');
    scene.text('After she leaves, you read over the travel documents and fill them out before heading to the director\'s office.');
    scene.actions([
      { label: 'Go and see your boss', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/npc_roman.jpg');
    scene.text('You head into the directors\' office, greet him and hand him the papers to sign. The director scans through the text before signing off on it with a broad, sweeping stroke.');
    scene.text('"Ms. Glavbukh is in her office. Get some travel money while I make a few calls. We\'ll discuss your trip when you get back."');
    scene.actions([
      { label: 'Go to the chief accountant', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/npc_marina.jpg');
    scene.text('The accountant is already in her office. After filing your signed travel documents, she grumbles about antiquated systems as she counts out the money.');
    scene.actions([
      { label: 'Return to the director', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/npc_roman.jpg');
    scene.text('The director is busy talking on the phone when you re-enter his office and he gestures for you to sit on one of the chairs across from him.');
    scene.text('"Yes, I understand… Yes. I\'ll send Mikhail over ASAP to represent me… Yes… Tell your men to work on some other parts of the project in the meantime. Have Igor guard the pit and make sure nobody gets wind of this… Okay, we\'ll keep in touch."');
    scene.text('He hangs up and turns to you. "The workers stumbled upon something last night; one of the excavators dug into a hollow space of some sort. It\'s not clear exactly what it is, but if there are any more chambers under the foundation, we might not be able to build on the land. I want you to go to the construction site, figure out exactly what the problem is and solve this whole mess as quickly as possible."');
    scene.actions([
      { label: 'Remind him of the correct procedures', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/npc_roman.jpg');
    scene.text('"Firstly we need to talk to…" you start to say, but are quickly interrupted by your boss.');
    scene.text('"Mikhail, do you realize what\'s at stake here? We\'re near the end of our credit line, we still have unfinalized agreements on the project\'s contract, and we already have guys digging the pit. If we can\'t build on the site, that could bankrupt the company. This mysterious structure must be addressed immediately and I have to hold the fort here and keep a lid on things."');
    scene.actions([
      { label: 'Doesn\'t look like you have a choice', goto: ['intro_start', 'tg_adult_shared', '1'] },
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
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 1) {
      (s as any).music_loop = 0;
      scene.img('images/system/1_openings/1_tf/4.jpg');
      scene.text('You leave the office and phone your wife in the car. You explain the situation to her and drive off to the construction site as soon as you hang up.');
      scene.actions([
        { label: 'Drive', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/site_working.jpg');
    scene.text('You\'ve been on the highway for hours when you arrive at the town near the site. Before you can check into a hotel and get some sleep, you need to get an understanding of the magnitude of the problem you\'re dealing with, so you follow the directions to the site. Igor calls on the way and tells you that you won\'t have to go through a security check.');
    scene.text('You soon arrive and park your car at the site. You see Igor waving at you from a distance and walk up to him.');
    scene.actions([
      { label: 'Greet Igor', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/npc_igor.jpg');
    scene.text('Igor is clearly concerned about the situation and quickly leads you to the pit\'s fenced-off entrance. "The ladder\'s over there," he informs you while pointing to your left.');
    scene.text('You reach the hole in the ground and peek inside using the small flashlight from your keychain. "There seems to be a floor about 5 meters down."');
    scene.text('"Well, what do you think? Shall we go down?" Igor asks with a faint glimmer of adventure in his eyes.');
    scene.actions([
      { label: 'Descend', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/site_cave_1.jpg');
    scene.text('Igor hands you a powerful flashlight and tells the guard to bring the ladder over. Igor heads down first and you quickly follow him.');
    scene.text('The cave smells musty, but you can breathe freely and the light from your flashlight illuminates the walls. You shoot a beam of light into the corridor and see something that resembles a door in the distance.');
    scene.text('"Damn. If any historians hear about this, they\'ll be all over this construction site…" Igor mutters.');
    scene.text('You walk up to the door and see drawings on it. Most of them resemble people, but with other stick figures as well.');
    scene.actions([
      { label: 'Open the door', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/site_cave_3.jpg');
    scene.text('You lean against the door. It\'s stiff, but you manage to push it open.');
    scene.text('"Oh shit! Take a look over there!" Igor exclaims nervously.');
    scene.text('You take a look at what Igor is pointing at and see a pile of human bones with a skull on top.');
    scene.text('"A tomb, I suppose…" he mutters while looking apprehensive.');
    scene.text('"Probably," you nod. "We can\'t rule anything out just yet."');
    scene.actions([
      { label: 'Go further', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/site_cave_5.jpg');
    scene.text('Further into the cave, you reach a room that resembles some kind of archive, filled with dozens of old, dusty scrolls inside racks built into the walls.');
    scene.text('Igor takes one of the scrolls and carefully unrolls it. "What the hell? Look at this, it must be some kind of ancient language," he says. "I\'ll take one with me and see what I can find out about these. Maybe I can get it deciphered so we know what we\'re dealing with."');
    scene.text('Looking around, you notice another door on the other side of the chamber and walk over and open it.');
    scene.actions([
      { label: 'Enter the room', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/site_cave_altar.jpg');
    scene.text('There\'s an altar in the center of the room with various pots, several gold amulets and even some stone figures sitting on it. You continue looking around the room curiously, trying to figure out what its purpose was.');
    scene.text('Looking closely at the altar, you notice a strange little amulet placed at the very top.');
    scene.actions([
      { label: 'Examine the amulet', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/item_amulet.jpg');
    scene.text('You pick up the strange amulet and examine it. <i>This is clearly very old</i>, you think to yourself.');
    scene.text('While holding the amulet, you realize that it\'s getting warm, almost hot, as you suddenly feel heat coursing through your entire body. You feel a surge of strength inside you. It\'s like you just finished a long jog, but without the fatigue.');
    scene.text('Igor enters the room with one of the scrolls in his hands. "Huh. Interesting little room," he says while glancing over the altar. "Well, we have to make a decision: either we fill these catacombs up with cement or we let someone into these rooms. Who knows what all this stuff is. Maybe it\'s worth more than it looks?"');
    scene.actions([
      { label: 'Consult your boss', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/site_cave_altar.jpg');
    scene.text('"I\'ve got to think about it and consult the director before we do anything," you reply and put the small amulet in your pocket without a second thought.');
    scene.text('"Well, one thing\'s for sure. You won\'t get reception down here. Let\'s head back outside," Igor tells you.');
    scene.actions([
      { label: 'Go back to the surface', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/site_working.jpg');
    scene.text('You walk out of the chambers and climb back up the ladder to the surface.');
    scene.text('"We must have been down there longer than I thought," Igor says. "There\'s nothing we can do here until the morning. You should go to the hotel."');
    scene.text('With a hasty goodbye to Igor, you make your way back to your car. <i>Damn</i>, you think. <i>Tomorrow\'s going to be a stressful day.</i>');
    scene.actions([
      { label: 'Go to the hotel', goto: ['intro_start', 'tg_adult_shared', '2'] },
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
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 2) {
        scene.img('images/system/1_openings/1_tf/6.jpg');
        scene.text('Your trip to the hotel is quite uneventful compared to your tomb raiding adventure.');
        scene.text('You park your car and go to the receptionist to get a room. You swipe your company card and take your room key.');
        scene.actions([
          { label: 'Head upstairs to your room', handler: (st: GameState) => {
    scene.img('images/system/1_openings/1_tf/7.jpg');
    scene.text('Lying on one of the beds, you start wondering about who built that crypt and what its purpose was. Your thoughts drift to that amulet you found. The way that thing you touched half an hour ago is still making you feel wonderful, baffling you.');
    scene.actions([
      { label: 'Call the director', handler: (st: GameState) => {
    scene.img('images/system/1_openings/1_tf/7.jpg');
    scene.text('You dial the director\'s number and after a few rings, he picks up. You fill him in on the details of what you found at the site with Igor: an ancient tomb, human bones, scrolls in a mysterious language and the altar.');
    scene.text('The director stays silent while you give your report. A few moments later, he decides that it would be best to stop the construction. He tells you to stay and keep watch over the site until further notice.');
    scene.text('You put the phone away. <i>Looks like this trip is going to last longer than expected</i>, you think to yourself.');
    scene.actions([
      { label: 'Go to bed', handler: (st: GameState) => {
    scene.img('images/system/1_openings/1_tf/7.jpg');
    scene.text('It doesn\'t take you long to drift off to sleep. Images begin to form in your mind and you soon find yourself in a middle of a dream. The amulet stands before you and out of it comes a ghost of some sort. Before you even realize what you\'re doing, you find yourself staring deep into the ghost\'s eyes, which turn into two Earths.');
    scene.text('"Looking at the world, most just see the mundane, but there\'s more to it, much more. Now you see that too. You have the potential to shape it all, but first, you have company."');
    scene.text('Your senses suddenly return and you\'re aware of the hotel room around you, but you can tell you\'re not alone.');
    scene.actions([
      { label: 'Open your eyes', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/npc_reinhold.jpg');
    scene.text('As you open your eyes, you see a man standing in your room. He\'s wearing a long black coat and his unshaven face looks weary; he reminds you of a scruffy police detective from a Hollywood film.');
    scene.text('"Where is the amulet?" he demands as he approaches you.');
    scene.actions([
      { label: 'Ask who he is', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/npc_reinhold.jpg');
    scene.text('"Who are you?" you ask. The man\'s sudden appearance and a sense you never knew you had tell you something about him; that he is not of this world.');
    scene.text('"Give me the amulet, close the construction site, and all will be fine. After all, that place belongs to us," he says in a firm voice.');
    scene.text('<i>Belongs to us?</i> His response leaves you bewildered, wondering who he is and what this is all about.');
    scene.text('"How about I give you a small taste of my power?" the man asks, and out of nowhere comes a burning desire to give him the amulet.');
    scene.actions([
      { label: 'Give him the amulet', handler: (st: GameState) => {
    scene.img('images/system/1_openings/1_tf/7.jpg');
    scene.text('You get out of the bed and give him the stone figure you put in your pocket earlier. The man takes it, steps back, and without warning, something in his eyes begins to spin like a whirlwind, causing your own eyes to blur. A few seconds later, your vision clears with the man having somehow disappeared into thin air.');
    scene.text('You rub your eyes. "What the hell is going on here? Was that a dream? No, it can\'t be. I wouldn\'t walk around in a dream. I think," you say to no one in particular then check your pocket, the amulet is indeed gone. You sit down on the bed trying to make sense of what just happened.');
    scene.text('While lost in thought, you hear a knock on the door. You get up to open the door, not even thinking why you would have visitors this late at night.');
    scene.text('"…Who\'s there?" you ask, still confused.');
    scene.text('A woman\'s voice responds that she\'s the hotel receptionist and that she needs to talk to you about an urgent matter.');
    scene.actions([
      { label: 'Answer the door', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/npc_tatiana.jpg');
    scene.text('You open the door, but don\'t recall the woman in front of you being at the reception desk; the woman from earlier didn\'t have red hair and glasses. After entering the room, she quickly examines the place before locking her eyes on you.');
    scene.text('"Mikhail, right?" she asks and you nod. "You went to a certain place last night and took something very valuable and <i>very</i> powerful."');
    scene.actions([
      { label: 'Another one?', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/npc_tatiana.jpg');
    scene.text('You sigh, irritated that not only have you been disturbed in the middle of the night, but these idiots apparently cannot even agree among themselves which one of them should disturb you.');
    scene.text('"Listen, you\'re starting to bother me. That other guy already showed up asking for the damn amulet."');
    scene.text('She looks at you with surprise. "What? Someone already came here? Who was it?"');
    scene.actions([
      { label: 'Tell her', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/npc_tatiana.jpg');
    scene.text('"It was some man in a navy cloak with ginger hair and a light beard. He didn\'t tell me his name. He already took the amulet," you answer.');
    scene.text('The girl\'s face drops. "Damn it!" She looks into your eyes. "Okay, we have to go somewhere else. There are too many people that might get hurt here. Gustav, come in here!" she calls out to the corridor and a tall man enters the room.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTgAdultSharedSetMikaelStats(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Prepare to fight', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/npc_gustav.jpg');
    scene.text('The man has a large tattoo across the left side of his face and also has red hair.');
    (st as any).boy = 'Gustav';
    qspCall(st, 'fight', 'initFight', 1);
    qspCall(st, 'fight_npcdata', 'gustav');
    (st as any).fightEnding = 1;
    (st as any).no_exp_gain = 1;
    scene.actions([
      { label: 'Fight', goto: ['fight', 'start'] },
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
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 3) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTgAdultSharedResetMikaelStats(s, scene); (s as any).locArgs = __savedLocArgs; }
          scene.img('images/system/1_openings/shared/npc_tatiana.jpg');
          scene.text('You wake up in an unfamiliar room. Standing near you is the same red-haired girl that entered your hotel room.');
          scene.text('"Ah, you\'re awake!" she chirps. "I told this jerk Gustav that he should have treated you more carefully, but he\'s bad at listening. As a result, I had to use some magic to stabilize you. He almost knocked you out permanently."');
          scene.text('"While you were unconscious, I did some research on you. Turns out the Amulet of Power passed to you. Must have happened when you touched it. Unfortunately, Reinhold, the guy in your room, has probably realized by now that the amulet no longer has the power and now he\'s out to hunt you down."');
          scene.actions([
            { label: 'What\'s going on?', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/npc_tatiana.jpg');
    scene.text('"What the hell is going on?" you respond. You try to move your hands, but you\'re tied to the bed.');
    scene.text('"I\'ll start from the beginning," the girl says. "Magic exists and is real. Millennia ago, the world was not the same. The fae creatures who possess natural magic lived in balance, but the succubus were free to breed with whomever they wished."');
    scene.text('"They bred with humans, and with that human magicians were born. The Sidhe, as the most powerful of the fae, feared the increasing number of human magicians and cast a very powerful spell to bind the succubus to them. This prevented either from being able to reproduce without the other."');
    scene.text('"All magicians have some of that original fae blood in their bodies and it is through that that they are able to connect with the world of magic." The redhead adjusts her glasses. "Most of the world simply ignores magic or are protected from it by magic\'s natural desire to remain hidden."');
    scene.text('"But last night, there was a powerful burst of magical energy, strong enough to be clearly seen by any with magical connections. Can you guess where this surge came from? Yeah, that cave you found. Apparently the surge occurred when you opened the seal to the archive. Anyway, that was when we started to search. That source of power is desired by many, but it is extremely dangerous and in the wrong hands could do untold horrors."');
    scene.text('She stops for a few seconds for you to process the information. It seems really far fetched.');
    scene.text('"As you can figure out, Reinhold wanted to prevent the amulet being misused, but he was not very thorough and didn\'t check you over."');
    scene.actions([
      { label: 'So the whole world is just an illusion?', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/npc_tatiana.jpg');
    scene.text('"So magic exists and is used by all these people and creatures, but the rest of us just don\'t see it, or convince ourselves it didn\'t happen?"');
    scene.text('The girl nods. "Yes. You\'re a quick study. Machines, apartments, television and the Internet. All this really does exist and is in the form in which people see it. But if I say, hurl a fireball, then people might see that I threw a grenade or shot from a flamethrower. The human mind can\'t process magic, so it blocks it as a way to protect the person from going crazy."');
    scene.text('"Hence such things as little green men, UFOs, poltergeists and spontaneous combustion are when people encounter a difficult to hide phenomenon and the conclusion is flawed. In some cases, if someone\'s mind can\'t cope with the spell they witness, they can be driven insane."');
    scene.actions([
      { label: 'And who are you?', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/npc_tatiana.jpg');
    scene.text('"And who are you?" you ask.');
    scene.text('The girl smiles. "Me? I\'m Tatiana, a young mage with a keen interest in magical phenomenon. I specialize in the treatment of mutations, and magic relating to the body. I have little combat skill, so I rely on the services of Gustav to provide some muscle. He\'s a Mutant due to magical exposure. It gives him unmatched physical strength, plus he\'s a great tracker."');
    scene.text('"The two of us run a detective agency for cover and money, but our real objective is studying magic and its effects."');
    scene.actions([
      { label: 'What do you want from me?', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/npc_tatiana.jpg');
    scene.text('"What do you want from me?" you ask.');
    scene.text('"Well, the amulet obviously," Tatiana replies. "When I looked for you, I was hoping to get that object of power to study, but Reinhold got to you first. The amulet will now be pretty much useless anyway, as its power passed on to you."');
    scene.text('"But this is not good for you. You may think that since you have the amulet\'s power, you can do anything, but in reality, you\'re helpless without the skill to use it. Reinhold easily overpowered your will and forced you to obey, and Gustav beat you like a puppy."');
    scene.actions([
      { label: 'What is this amulet?', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/npc_tatiana.jpg');
    scene.text('"And what is this amulet? Where did it come from?" you ask.');
    scene.text('Tatiana thinks about it for a few seconds. "It was made by the trickster Rikudo, one of the most powerful ancient magicians. Before he died, he taunted the only living mage who could control its immense power by cursing him to be stuck in a female form and making it only activate for a male mage."');
    scene.text('"Great. So I\'ve been thrown into this mess by the dead owner of that ancient tomb. Hang on! I\'m not a mage, so how could the power be transferred to me?"');
    scene.text('"It seems that its long time underground caused it to malfunction and its power has entered your body. The bad news is it is far too powerful and will kill you." Her words fill you with fear and you start to struggle against your bindings.');
    scene.text('"You\'re lucky Reinhold didn\'t realize this. He would have stopped you from accidentally wielding the power and killing yourself and who knows how many others by killing you in that hotel room. I have another way to save you, but you\'re not going to like it."');
    scene.text('You don\'t say anything, so she continues. "I can feel the aura of power emanating from you. By drawing from that, I can perform a powerful magic spell that will transform you into someone who is protected from the masculine alignment of the power."');
    scene.actions([
      { label: 'I don\'t understand', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/npc_tatiana.jpg');
    scene.text('"I don\'t understand. What are you suggesting?"');
    scene.text('Tatiana runs a hand through her hair and giggles. "I\'ll make you a pretty, young girl and the power will lie dormant, saving you from blowing up a city or something."');
    scene.text('"There is another option: I can just stop your heart and let your power dissolve into nature, but you\'ll die. Maybe with more time doing research, I can work out another solution, but I can\'t leave you like this."');
    scene.actions([
      { label: 'What about my family?', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/npc_tatiana.jpg');
    scene.text('"Hey, I don\'t want to be a woman! I have a family; a wife and a daughter," you tell her.');
    scene.text('Tatiana smiles. "Well, the choice is simple. Either you die or live without a penis for the time being."');
    scene.text('"As for your family, not to worry. I\'ll arrange everything. We\'ll fabricate your death to get Reinhold off your back. To make your transition easier, I\'ll cover your memory of your family. They will only be ghostly memories, you won\'t even remember where you lived. Don\'t worry, I won\'t erase your entire memory and leave you a useless vegetable."');
    scene.actions([
      { label: 'There must be another way!', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/npc_tatiana.jpg');
    scene.text('"There must be another way!" you panic while tugging at the restraints on the bed.');
    scene.text('Tatiana\'s face turns serious. "Do not argue. It\'s the only way available to me. You\'ll need to use a new name, so think it over in your dreams and tell me when you wake up, otherwise I\'ll give you a pretty name. Now go to sleep." She puts her hand on your chest and your vision immediately fades. You dream about a girl you never knew and what she did at school…');
    scene.actions([
      { label: 'Dream', goto: ['intro_character_creation', 'start'] },
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
  } },
    ]);
  } },
    ]);
  } },
          ]);
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterTgAdultSharedSetMikaelStats(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_firstname = 'Mikhail\'    & $pcs_lastname = \'Ivanov';
  (s as any).age = qspUntranslated(s, "iif (start_type['loc'] = 'uni', 33, 35)", { location: "intro_start" });
  (s as any).vidage = ((s as any).age ?? 0);
  (s as any).year = 2016;
  (s as any).month = 5;
  (s as any).day = 25;
  (s as any).week = 1;
  (s as any).hour = 7;
  (s as any).minut = 0;
  (s as any).pcs_hgt = 186;
  (s as any).pcs_energy = 60;
  (s as any).pcs_hydra = 60;
  (s as any).pcs_sleep = 70;
  (s as any).dick = 12;
  (s as any).pcs_stren = 160;
  (s as any).pcs_intel = 50;
  (s as any).pcs_chrsm = 50;
  (s as any).pcs_agil = 50;
  (s as any).pcs_react = 50;
  (s as any).pcs_prcptn = 50;
  (s as any).pcs_vital = 160;
  (s as any).pcs_sprt = 100;
  (s as any).pcs_magik = 0;
  (s as any).pcs_jab = 20;
  (s as any).pcs_punch = 20;
  (s as any).pcs_kick = 20;
  (s as any).pcs_def = 20;
  (s as any).healthmax = ((s as any).pcs_vital ?? 0) * 10 + ((s as any).pcs_stren ?? 0) * 5;
  (s as any).willpowermax = 80;
  (s as any).manamax = 0;
  (s as any).pcs_health = ((s as any).healthmax ?? 0) * 3 / 4;
  (s as any).pcs_willpwr = ((s as any).willpowermax ?? 0) * 3 / 4;
  (s as any).pcs_mana = 0;
  (s as any).birthyear = 1983;
  (s as any).birthmonth = 4;
  (s as any).birthday = 1;
  (s as any).pcs_dob = 19830401;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterTgAdultSharedResetMikaelStats(s: GameState, scene: SceneBuilder): void {
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSgTg(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 0) {
    scene.img('images/system/1_openings/shared/npc_ivan.jpg');
    scene.text('You are Mikhail Ivanov.');
    scene.text('Your parents died shortly after you were born and your only remaining relative, your great uncle Ivan (pictured), took you in. Your uncle has always made it clear that he took you in as a courtesy to your parents, not to become one himself. You never became close, resulting in a lonely childhood.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/system/1_openings/4_csb/1.jpg');
    scene.text('You had a pleasant, undisturbed childhood when you were young. Although you don\'t remember much from kindergarten, you do remember going to elementary school when you were 6 years old. While you wanted your uncle to act like the fathers of the other kids at school, you were never allowed to call him anything other than "sir."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/system/1_openings/4_csb/2.jpg');
    scene.text('Your teenage years were beset by the same changes as other boys your age: You got taller and gained some muscle, your shoulders widened, your voice deepened and hair sprouted from everywhere on your body.');
    scene.text('You spent most of the last few years in a near-constant state of arousal, set off by as little as a suggestively shaped vegetable. Thankfully, the awkward changes and acne have started to subside, leaving you looking like the young man you will become.');
    scene.text('But you are lonely. Lonely and extremely horny. Unfortunately, your overflowing sex drive is not getting cared for by a loving girlfriend and you walk around with an erection almost every day, non stop.');
    scene.text('You need a girlfriend, someone to talk to, to flirt with, to slowly but surely lure out of her various layers of clothing. You would settle for a friend with benefits; it sounded hot in the TV show you saw. Or even just some casual sex, but the girls in your class won\'t give you any attention, at least the ones that aren\'t utterly ugly. Most ignore you, or when they do acknowledge you, don\'t take pity on you and instead mock your awkwardness. You never learned how to talk to girls and because your mother died, you\'ve never had a female to help you understand girls. Now that is making your life, among other things, very hard.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/system/1_openings/4_csb/3.jpg');
    scene.text('Only recently your loneliness and natural tendency for peeping resulted in calamity - You peeked into the girls locker room at school. They were so beautiful, well most of them anyways. You got so horny watching them get undressed and then showering you couldn\'t help yourself, you don\'t know what came over you. You pulled out your dick and started to masturbate, trying to stay out of sight, but apparently made too much noise. When two girls came over to investigate, they caught you and started screaming. You tried to run, but were caught and taken the Headmaster, who called your uncle and told him what you had done. Since then, girls haven\'t stopped making cruel jokes about you being a pervert, or how small your cock supposedly is.');
    scene.text('Everyone you knew quickly turned on you and nothing you could say worked to change their minds. You became an outcast and received regular beatings from the other guys.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/system/1_openings/4_csb/4.jpg');
    scene.text('Your reputation was in tatters and no girl would give you the time of day, let alone agree to sleep with you. Out of horny desperation and loneliness, you turn to the Internet to make friends. While on a forum for a mobile game, you happened to meet a girl from the nearby town of Pavlovsk. You both liked the game and quickly hit it off, talking almost every day.');
    scene.actions([
      { label: 'Her name was…', goto: ['intro_start', 'sg_tg', '1'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 1) {
      if (((s as any).pcs_firstname ?? 0) === '') {
        qspCall(s, 'intro_functions', 'set_default', 'name');
      }
      (s as any).temp = window.prompt("What is the girl's first name? (Leave blank for <<$pcs_firstname>>)") ?? '';
      if (((s as any).temp ?? 0) !== '') {
        (s as any).pcs_firstname = ((s as any).temp ?? 0);
      }
      (s as any).temp = window.prompt("What is the girl's family name? (Leave blank for <<$pcs_lastname>>)") ?? '';
      if (((s as any).temp ?? 0) !== '') {
        (s as any).pcs_lastname = ((s as any).temp ?? 0);
      }
      (s as any).temp = window.prompt("What is the girl's nickname? (Leave blank for <<$pcs_nickname>>)") ?? '';
      if (((s as any).temp ?? 0) !== '') {
        (s as any).pcs_nickname = ((s as any).temp ?? 0);
      }
      scene.img('images/system/1_openings/4_csb/17.jpg');
      // TODO-QSP: dynamic text: Her name was <<$pcs_firstname>> <<$pcs_lastname>>, or <<$pcs_nickname>> for shor...
      scene.text(`Her name was ${((s as any).pcs_firstname ?? '')} ${((s as any).pcs_lastname ?? '')}, or ${((s as any).pcs_nickname ?? '')} for short. You don't know why, but she seemed to liked you. Maybe she was as lonely as you were. You couldn't believe your luck.`);
      // TODO-QSP: dynamic text: You spent the next few weeks messaging back and forth. <<$pcs_nickname>> told yo...
      scene.text(`You spent the next few weeks messaging back and forth. ${((s as any).pcs_nickname ?? '')} told you all about her life, as well as her likes and dislikes.`);
      scene.actions([
        { label: 'Continue', goto: ['intro_start', 'sg_tg', '2'] },
        { label: 'Re-enter her name(s)', goto: ['intro_start', 'sg_tg', '1'] },
      ]);
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 2) {
        scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
        scene.text('You found out about her mother Natasha, and how her biological father left when she was a baby. Her mother remarried shortly afterwards to a man called Vladimir.');
        scene.text('She had a sister named Anya who was a few years older than her. Anya chose to live at home instead of going to college, working at the local grocery during the day and partying at night.');
        scene.text('She also had a half-brother Kolka, who was a year younger than her and really into football.');
        // TODO-QSP: dynamic text: Her mother''s sister, Aunt Luda, lives on the top floor of the same building as ...
        scene.text(`Her mother's sister, Aunt Luda, lives on the top floor of the same building as her. Her stepfather's best friend is called Uncle Misha, who lives across the hall. Her mother's old friend Sergey Shulgin lives on the floor above them, and ${((s as any).pcs_nickname ?? '')}'s old childhood friend Vasily is his son.`);
        scene.text('Her great grandparents live in a nearby village, where she occasionally spent a weekend. Apparently, her mother\'s parents are both dead.');
        scene.text('You listened to her complaining about her extended family and about how she and Vasily drifted apart, comforting her as best you could. Yet you can\'t help but feel a little jealous at how many caring relatives she has, given that your only relation is a great uncle who is about to kick you onto the streets for the sake of his own reputation.');
        // TODO-QSP: dynamic text: You did the best you could to repress any resentment towards <<$pcs_nickname>> a...
        scene.text(`You did the best you could to repress any resentment towards ${((s as any).pcs_nickname ?? '')} about how little she appreciated what she had.`);
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/system/1_openings/4_csb/6.jpg');
    // TODO-QSP: dynamic text: A few months passed. You and <<$pcs_nickname>> continued to talk, and you learne...
    scene.text(`A few months passed. You and ${((st as any).pcs_nickname ?? '')} continued to talk, and you learned even more about her life. As summer break approaches, you bring up the idea of meeting up. ${((st as any).pcs_nickname ?? '')} was excited at the prospect and you agreed to meet at the café where her mother works.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/system/1_openings/4_csb/7.jpg');
    scene.text('Things at home haven\'t been going so well during this time.');
    scene.text('Instead of the rumors dying, they kept escalating. You\'ve had to plan your routes home from school to avoid spots where you\'ll be cornered and beaten. You spend quite some time chatting with her, and when the summer break comes and you finally get out of school, you wonder whether you can finally meet your chat buddy - and maybe make her your girl…');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/system/1_openings/4_csb/8.jpg');
    scene.text('The morning you agreed to meet her, you pack condoms and some spare cash into a backpack before heading off to the train station in the hopes of getting a girlfriend, or at least getting laid.');
    // TODO-QSP: dynamic text: On the train ride to Pavlovsk, you get a message from <<$pcs_nickname>>. Her par...
    scene.text(`On the train ride to Pavlovsk, you get a message from ${((st as any).pcs_nickname ?? '')}. Her parents have taken her to spend time with her grandparents in Gadukino. She was unable to get out of the trip, since her mother has been upset at how she has been spending so much time on her phone and not with her family.`);
    scene.text('With no other choice, you buy a second ticket to meet her at Gadukino.');
    scene.actions([
      { label: 'Travel to Gadukino', handler: (st: GameState) => {
    scene.img('images/locations/shared/train/gadplat.jpg');
    // TODO-QSP: dynamic text: You get off the train next to a small road in the middle of nowhere. A dirt road...
    scene.text(`You get off the train next to a small road in the middle of nowhere. A dirt road leads to a small village made up of rickety wooden houses and even more ruined ones. Unsure which house belongs to ${((st as any).pcs_nickname ?? '')}'s family, you pull out your phone to text her.`);
    // TODO-QSP: dynamic text: A few minutes later, an excited teenage girl comes rushing down one of the dirt ...
    scene.text(`A few minutes later, an excited teenage girl comes rushing down one of the dirt roads. You double-check a picture of ${((st as any).pcs_nickname ?? '')} on your phone, as this is the first time you've seen her with your own eyes.`);
    scene.actions([
      { label: 'Take a look at her picture (skip customization)', goto: ['intro_character_creation', 'start', 'appearance_hub'] },
      { label: '', labelFn: (s: GameState) => 'Customise ' + String(((st as any).pcs_firstname ?? '') ?? ''), goto: ['intro_character_creation', 'start'] },
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
    }
  }
  return;
  // TODO-QSP: end
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
    case 'tg_adult_shared':
      enterTgAdultShared(s, scene);
      break;
    case 'tg_adult_shared_set_mikael_stats':
      enterTgAdultSharedSetMikaelStats(s, scene);
      break;
    case 'tg_adult_shared_reset_mikael_stats':
      enterTgAdultSharedResetMikaelStats(s, scene);
      break;
    case 'sg_tg':
      enterSgTg(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const intro_start: LocationDef = {
  name: 'intro_start',
  title: 'Apartment',
  region: 'other',
  enter: enter,
};
