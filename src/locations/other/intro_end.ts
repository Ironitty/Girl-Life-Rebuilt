import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_hairbsh = 0;
  qspCall(s, 'themes', 'indoors');
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
    if (((s as any).start_type ?? 0)?.['magic'] === 'tg') {
      qspGoto(s, 'intro_end', 'sg_tg');
    } else {
      qspGoto(s, 'intro_end', 'sg_shared');
    }
  } else {
    if (((s as any).start_type ?? 0)?.['loc'] === 'uni') {
      if (((s as any).start_type ?? 0)?.['magic'] === 'tg') {
        qspGoto(s, 'intro_end', 'uni_tg');
      } else {
        qspGoto(s, 'intro_end', 'uni_shared');
      }
    } else {
      if (((s as any).start_type ?? 0)?.['magic'] === 'tg') {
        qspGoto(s, 'intro_end', 'city_tg');
      } else {
        qspGoto(s, 'intro_end', 'city_shared');
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterQuickStart(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_hairbsh = 0;
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
  } else {
    if (((s as any).start_type ?? 0)?.['loc'] === 'uni') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetRandomUniCourse(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetRandomUniElectives(s, scene); (s as any).locArgs = __savedLocArgs; }
      // TODO-QSP: gs 'npc_relationship', 'set', 'A29', 30 + 20 * rand(0, 2)
    } else {
      // TODO-QSP: gs 'npc_relationship', 'set', 'A29', 30 + 20 * rand(0, 2)
    }
  }
  qspGoto(s, 'intro_game_start', 'quick_start');
  // TODO-QSP: end
  scene.build();
}

function enterSetRandomUniCourse(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_rand = (Math.floor(Math.random() * 2) + 0);
  if ((!((s as any).temp_rand ?? 0))) {
    qspCall(s, 'uni_admin', 'courses', 'enroll_teaching', 1);
  } else {
    qspCall(s, 'uni_admin', 'courses', 'enroll_nursing', 1);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSetRandomUniElectives(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_rand = (Math.floor(Math.random() * 6) + 0);
  if (((s as any).temp_rand ?? 0) < 2) {
    qspCall(s, 'uni_admin', 'courses', 'enroll_elective_asian', 1);
  } else {
    if (((s as any).temp_rand ?? 0) < 4) {
      qspCall(s, 'uni_admin', 'courses', 'enroll_elective_computer', 1);
    }
  }
  (s as any).temp_rand = (Math.floor(Math.random() * 4) + 0);
  if (((s as any).temp_rand ?? 0) < 2) {
    qspCall(s, 'uni_admin', 'courses', 'enroll_elective_art', 1);
  }
  (s as any).temp_rand = (Math.floor(Math.random() * 6) + 0);
  if (((s as any).temp_rand ?? 0) < 2) {
    qspCall(s, 'uni_admin', 'courses', 'enroll_elective_african', 1);
  } else {
    if (((s as any).temp_rand ?? 0) < 4) {
      qspCall(s, 'uni_admin', 'courses', 'enroll_elective_psychology', 1);
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSgTg(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 0) {
    scene.img(`${qspFunc(s, '$face_image', '')}`);
    scene.text('You couldn\'t tell from her photo, but although shorter than you, she is rather tall for a girl.');
    scene.text('She looks like she\'s spent some time in front of the mirror trying to pretty herself up, and her clothes are very clean. Nevertheless, she still looks blurry in the mirror. Like she is the type of girl that would be a background character in another person\'s life.');
    scene.actions([
      { label: 'Go for a walk', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/site_gadukino.jpg');
    // TODO-QSP: dynamic text: You both walk along a dirt road heading through grain fields towards a forest. <...
    scene.text(`You both walk along a dirt road heading through grain fields towards a forest. ${((st as any).pcs_nickname ?? '')} holds your hand and keeps babbling on, asking you question after question.`);
    scene.actions([
      { label: 'Keep walking', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/site_ruin.jpg');
    scene.text('You end up being dragged into her pace, getting lost in the conversation. Before long, you look up and realize that, while you were talking, you\'ve ended up somewhere in the forest. Just ahead of you is an old ruin.');
    scene.actions([
      { label: 'Take a rest and make a move', handler: (st: GameState) => {
    scene.img('images/system/1_openings/4_csb/9.jpg');
    // TODO-QSP: dynamic text: You see a large stone at the ruins where you and <<$pcs_nickname>> decide to sit...
    scene.text(`You see a large stone at the ruins where you and ${((st as any).pcs_nickname ?? '')} decide to sit down. Being this close to a girl has given you a hardon, so you pull out your shirt and do your best to hide it. She turns and looks at you and you feel this is your moment, so you lean in to kiss her when…`);
    scene.actions([
      { label: 'What\'s that sound?', handler: (st: GameState) => {
    (st as any).fcolor = 0;
    (st as any).bcolor = 0;
    (st as any).lcolor = 0;
    scene.img('images/system/1_openings/shared/site_tunnel_1.jpg');
    scene.text('A loud crack runs through the ruins and the ground gives way beneath you, sending you both tumbling down into the dark. Miraculously, you both manage to land with only minor scrapes and bruises. You curse and look around at your surroundings.');
    scene.text('You seem to be in an underground chamber of some sort. Looking up, you see that climbing out is not an option. There is also an old gate on one side of the chamber, but it\'s either locked or rusted shut. Looks like the only way out is the tunnel on the other side of the chamber.');
    // TODO-QSP: dynamic text: Thoughts of getting a kissing picture have been thoroughly broken. You have more...
    scene.text(`Thoughts of getting a kissing picture have been thoroughly broken. You have more immediate concerns, so you pull your backpack back onto your shoulders, turn on the flashlight on your phone, and lead ${((st as any).pcs_nickname ?? '')} out the only way you can.`);
    scene.actions([
      { label: 'Follow the tunnel', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/site_tunnel_2.jpg');
    scene.text('The tunnel goes on for what feels like miles. You start to worry about your phone\'s battery dying.');
    scene.actions([
      { label: 'Keep going', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/site_cave_altar.jpg');
    // TODO-QSP: dynamic text: Reaching the end of the tunnel, you find a dead end. Or at least it seems to be....
    scene.text(`Reaching the end of the tunnel, you find a dead end. Or at least it seems to be. ${((st as any).pcs_nickname ?? '')} notices light coming through the cracks in the wall. You do your best to knock it down.`);
    scene.text('After a few good hits, the wall crumbles and you find yourself in another chamber filled with old pottery and baubles. Opposite you is another tunnel that hopefully leads out. In the center of the room is an altar and on it is what seems to be the centerpiece of this room; a strange amulet.');
    scene.actions([
      { label: 'Examine the amulet', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/item_amulet.jpg');
    scene.text('You pick up the strange amulet and examine it. You notice it\'s much lighter than it looks, and unusually warm for a piece of metal. It\'s shaped like an antique oil lamp and… is that a penis? This is clearly very old.');
    scene.text('While holding the amulet, you realize that it\'s getting warmer, to the point of being almost hot. You suddenly feel heat coursing through your entire body and feel a surge of strength inside you. It\'s like you just finished a long jog, but without the fatigue.');
    // TODO-QSP: dynamic text: <<$pcs_nickname>> touches your arm, asking what you found. "Just some old junk,"...
    scene.text(`${((st as any).pcs_nickname ?? '')} touches your arm, asking what you found. "Just some old junk," you reply as you pocket the amulet. "Come on, let's get going."`);
    scene.actions([
      { label: 'Find a way out', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/site_working.jpg');
    scene.text('You follow the next tunnel and find yourself in a construction site. There are several <b>KEEP OUT</b> signs visible from here. Shit.');
    scene.actions([
      { label: 'Sneak out', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/site_road.jpg');
    // TODO-QSP: dynamic text: The workers'' shift has long since finished, so sneaking out isn''t too hard. Th...
    scene.text(`The workers' shift has long since finished, so sneaking out isn't too hard. The site is on the highway, so hopefully you can make it back before ${((st as any).pcs_nickname ?? '')}'s family starts worrying. As you start walking back with her, you feel a sudden rush of heat and find yourself falling…`);
    scene.actions([
      { label: 'Continue', goto: ['intro_end', 'sg_tg', '1'] },
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
    if (String((s as any).locArgs?.[1] ?? '') === 1) {
      (s as any).music_loop = 0;
      (s as any).bcolor = 0;
      (s as any).lcolor = 0;
      (s as any).fcolor = 0;
      scene.img('images/system/1_openings/4_csb/11.jpg');
      scene.text('<center>…</center>');
      scene.text('<center>…</center>');
      scene.text('<center>…</center>');
      scene.text('<center>…</center>');
      scene.text('Darkness consumes your thoughts for some time. Eventually, images begin to form in your mind and you soon find yourself in the middle of a dream. The strange amulet stands before you and out of it comes a ghost of some sort. Before you even realize what you are doing, you find yourself staring deep into the ghost\'s eyes, which turn into two Earths.');
      scene.text('"Most who look at the world see only the mundane, but there is more to it. Much more. Now you see that too. You have the potential to shape it all, but first, you have company."');
      scene.actions([
        { label: 'Wake up', handler: (st: GameState) => {
    if (((st as any).sound_settings ?? 0)?.['music_off'] === 0) {
    }
    (st as any).bcolor = 0;
    (st as any).lcolor = 0;
    (st as any).fcolor = 0;
    scene.img('images/system/1_openings/shared/npc_tatiana.jpg');
    scene.text('You open your eyes to see you are in a hospital room. Next to you is an unfamiliar red-haired girl.');
    scene.text('"Ah, you woke up," she chirps. "We found you half-dead, you know. You almost didn\'t make it. There was nothing I could do for the girl though, poor thing was ripped to pieces before I could get to you. Running half-exhausted through the forest made you a pretty tempting target for that pack. Then again, given how you picked up that amulet, you probably wouldn\'t have lasted much longer, even if you had managed to get away."');
    scene.actions([
      { label: 'What? Who? Where?', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/npc_tatiana.jpg');
    scene.text('You try to ask her all the questions running through your mind right now. Unfortunately all that comes out of your mouth is a croaking groan. Your tongue feels half-numb, as does the rest of your body. Your head is too fuzzy to think straight.');
    scene.text('"I\'d take it easy right now. I managed to save you, but your body still needs to get used to the change."');
    scene.actions([
      { label: 'What change?', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/npc_tatiana.jpg');
    scene.text('"What change?" You manage to get those words out, though your voice sounds a lot higher than normal.');
    scene.text('The girl points at your chest. "Take a look for yourself."');
    scene.actions([
      { label: 'Look down', handler: (st: GameState) => {
    scene.img('images/system/1_openings/4_csb/12.jpg');
    scene.text('You look down, hair longer than it was yesterday shifting in front of your eyes. The covers of the hospital bed lie flat over your body, but they cover a far different shape than you are used to.');
    scene.text('You whip back the covers and the front-open hospital gown to discover a pair of naked breasts and the smooth curves of a teenage girl. An empty feeling between your legs informs you that your old friend has gone missing.');
    scene.text('You hastily recover your body in a panic, turning to the girl at your bedside.');
    scene.actions([
      { label: 'What did you do to me?!', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/npc_tatiana.jpg');
    scene.text('The girl frowns at your tone. "<i>I</i> saved your life. Twice, even. You shouldn\'t run off into the woods at night, let alone be fondling ancient amulets you know nothing about. Especially something like the Amulet of Power. Turns out that it passed to you. Must have happened when you touched it."');
    scene.actions([
      { label: 'What\'s going on?', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/npc_tatiana.jpg');
    scene.text('"What the hell is going on?" you respond. "What does that have to do with turning me into a girl?!"');
    scene.text('"Hold on, I\'ll get to that. Let me start from the beginning," the girl says. "Magic exists and is real. Millennia ago, the world was not the same. The fae creatures who possess natural magic lived in balance, but the succubus were free to breed with whomever they wished."');
    scene.text('"They bred with humans, and with that human magicians were born. The Sidhe, the most powerful of the fae, feared the increasing number of human magicians and cast a very powerful spell to bind the succubus to them, preventing either from being able to reproduce without the other."');
    scene.text('"All magicians have some of that original fae blood in their bodies. It is through that that they are able to connect with the world of magic."');
    scene.text('She adjusts her glasses. "Most of the world simply ignores magic, or are protected from it by magic\'s natural desire to remain hidden."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/npc_tatiana.jpg');
    scene.text('"But last night there was a powerful burst of magical energy, strong enough to be clearly felt by any with magical connections. Can you guess where this surge came from? Yeah, that cave you found. Apparently the surge occurred when you opened the seal to the archive. Anyway, that was when we started to search. That source of power is desired by many, but it is extremely dangerous and in the wrong hands could cause untold horrors."');
    scene.text('She stops for a few seconds for you to process the information. It seems really far fetched.');
    scene.text('"A man named Reinhold wanted to prevent the amulet being misused, so he went out to find it. Of course, the moment you saw him, you dropped the amulet and bolted into the woods. He picked it up but didn\'t bother to check you over. Unfortunately, he\'s probably realized by now that the amulet no longer has the power and now he\'ll be out to hunt you down."');
    scene.actions([
      { label: 'So, the whole world is just an illusion?', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/npc_tatiana.jpg');
    scene.text('"So magic exists and is used by all these people and creatures, but the rest of us just don\'t see it, or we convince ourselves it didn\'t happen?"');
    scene.text('The girl nods. "Yes. You\'re a quick study. Machines, apartments, television and the Internet. All of these really does exist and is in the form in which people see it. But if I say, hurl a fireball, then people might see that I threw a grenade or shot a flamethrower. The average human mind can\'t process magic, so it blocks it out as a way to protect the person from going crazy."');
    scene.text('"Hence such things as little green men, UFOs, poltergeists and spontaneous combustion are from when people encounter a difficult-to-hide phenomenon and their minds come to a flawed conclusion. In some cases, a person\'s mind can\'t cope with the spell they witness and they are driven insane."');
    scene.actions([
      { label: 'And who are you?', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/npc_tatiana.jpg');
    scene.text('"And who are you?" you ask.');
    scene.text('The girl smiles. "Me? I\'m Tatiana, a young mage with a keen interest in magical phenomenon. I specialize in the treatment of mutations, and magic relating to the body. I have little combat skill, so I rely on the services of Gustav to provide some muscle. He\'s a Mutant due to magical exposure. It gives him unmatched physical strength, plus he\'s a great tracker."');
    scene.text('"The two of us run a detective agency for cover and money, but our real objective is studying magic and its effects."');
    scene.actions([
      { label: 'What do you want from me?', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/npc_tatiana.jpg');
    scene.text('"And what is this amulet? Where did it come from?" you ask.');
    scene.text('Tatiana thinks about it for a few seconds. "It was made by the trickster Rikudo, one of the most powerful ancient magicians. He taunted the only living mage who could control its immense power by cursing him to be stuck in a female form, yet making it only activate for a male mage."');
    scene.text('"I\'m not a mage though. How could the power be transferred to me? And what does that have to do with turning me into a girl?"');
    scene.text('"Well as for how the power was transferred, it seems that its long time underground caused it to malfunction and its power to enter your body. It was far too powerful for your body and would have ended up killing you and who knows how many others. Which is where the \'turning you into a girl\' part comes in."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/npc_tatiana.jpg');
    scene.text('"See, when I found you I could feel the aura of power emanating from you. That made it easy to put things together. I knew enough about the Amulet to know that the power would have destroyed you. So I drew from that aura to transform you into someone who was protected from the masculine alignment of the power."');
    scene.text('Tatiana runs a hand through her hair and giggles. "So I made you into a pretty teenage girl. Now the power is going to lie dormant, saving you from blowing up a city or something."');
    scene.text('"Wasn\'t there any other way? Taking away my manhood is a pretty drastic move!"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/npc_tatiana.jpg');
    scene.text('"Of course there was another way. I could have just stopped your heart and let your power dissolve into nature. You would have died though. Reinhold might be the kind of person to kill you to save others, but I didn\'t want to kill you right after saving you. Plus, with my magic, I was able to take this risk. Sure, maybe with more time doing research I could have worked out another solution, but I didn\'t have a lot of time."');
    scene.text('"Of course I couldn\'t just leave a newly created teenage girl without parents or a home, so I decided to kill two birds with one stone. Instead of just turning you into any old girl, I turned you into the girl you were with."');
    scene.actions([
      { label: 'What?', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/npc_tatiana.jpg');
    // TODO-QSP: dynamic text: Startled, you reach up to your face, tracing out the features. You didn''t get a...
    scene.text(`Startled, you reach up to your face, tracing out the features. You didn't get a chance to become familiar with her face, but it feels about right. This whole time, ${((st as any).pcs_nickname ?? '')}'s death didn't feel real, like she was still around somehow. Maybe it's because you now <i>are</i> ${((st as any).pcs_nickname ?? '')}, but even now you don't feel a sense of loss or guilt.`);
    scene.text('"Having a template to work off of really helped. Not even a geneticist could tell you two apart; you are identical from your fingerprints down to your DNA. Of course, that means your new \'equipment\' down there is fully functional as well, so if you don\'t want to be a mommy, you should start thinking about contraceptives. You should probably also stay away from any male relatives if you don\'t want to end up with a kid with eleven toes or something."');
    scene.text('You angrily glare at Tatiana. "So you think I\'m a girl now? On the outside maybe, but guess what? I\'m still a boy on the inside!"');
    // TODO-QSP: dynamic text: "Well, yes. I won''t argue about that." Tatiana agrees. "You can decide what you...
    scene.text(`"Well, yes. I won't argue about that." Tatiana agrees. "You can decide what you want to do with your life, but you might want to play the part of ${((st as any).pcs_firstname ?? '')} until graduation at least. On a side note, I already took care of an alibi. Yesterday, '${((st as any).pcs_firstname ?? '')}' was found half-dead on the edge of the woods while the leftovers of Mikhail's body were found deeper in. It's in the news." She tosses a newspaper onto the bed with an article circled out.`);
    scene.actions([
      { label: 'Read the newspaper', handler: (st: GameState) => {
    scene.img('images/system/1_openings/4_csb/13.jpg');
    scene.text('There is a news report about a teenage boy whose remains were found by a group of hunters half-eaten by wolves.');
    // TODO-QSP: dynamic text: You give Tatiana a bewildered stare. She has an enigmatic smile on her face. "We...
    scene.text(`You give Tatiana a bewildered stare. She has an enigmatic smile on her face. "Well, I am a magician. That's something I can do. Reinhold has definitely lost the trail; there's no reason he should suspect the power been passed to a girl. You took ${((st as any).pcs_firstname ?? '')}'s place, and she took yours. The body in the woods was a perfect copy of your old self, from your absorbed amulet energy down to the placement of every single hair."`);
    scene.text('"Anyway, your \'mother\' will be by in a few hours to pick you up; she thinks that you\'ve got some amnesia from a head injury and mental trauma from seeing your \'boyfriend\' get eaten alive by wolves, so you should probably be covered for any slip-ups. Just play the part of the traumatized little schoolgirl and it should be all good. Have fun."');
    scene.text('She gets up and heads to the door, opening it up to reveal a tall man with red hair and face tattoos. "Come on, Gustav, let\'s go." The pair disappear into the hall, leaving you with your thoughts.');
    scene.actions([
      { label: 'Think about your situation', handler: (st: GameState) => {
    scene.img('images/system/1_openings/4_csb/14.jpg');
    scene.text('You aren\'t sure what to think. On the one hand, you\'ve lost your manhood forever. You\'ll have to deal with skirts and periods and makeup and babies and all other sorts of girly things. On the other, you\'ve been granted a clean slate. No more beatings, no threats of becoming homeless, and you\'re gaining the family you never had. Plus, you\'re going to be able to spy on girls in the locker room without them screaming this time.');
    // TODO-QSP: dynamic text: Whining about the situation isn''t going to change it, so you resolve to deal wi...
    scene.text(`Whining about the situation isn't going to change it, so you resolve to deal with it one day at a time, living your new life as ${((st as any).pcs_firstname ?? '')} "${((st as any).pcs_nickname ?? '')}" ${((st as any).pcs_lastname ?? '')}.`);
    scene.actions([
      { label: 'Continue', goto: ['intro_end', 'sg_tg', '2'] },
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
        scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
        // TODO-QSP: dynamic text: Shortly after Tatiana left, <<$pcs_nickname>>''s new mother showed up to take he...
        scene.text(`Shortly after Tatiana left, ${((s as any).pcs_nickname ?? '')}'s new mother showed up to take her to her new home. ${((s as any).pcs_nickname ?? '')} met her new family and did the best she could to fit in, afraid of them figuring out that she isn't really ${((s as any).pcs_firstname ?? '')}. They seem to have bought Tatiana's explanation of amnesia and mental trauma, going out of their way to reintroduce her to her new life.`);
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/system/1_openings/4_csb/15.jpg');
    // TODO-QSP: dynamic text: Over the next week, <<$pcs_nickname>> slowly became accustomed to her new life. ...
    scene.text(`Over the next week, ${((st as any).pcs_nickname ?? '')} slowly became accustomed to her new life. She isn't used to being a girl just yet, but she's come to think of herself as ${((st as any).pcs_nickname ?? '')} instead of Mikhail, and ${((st as any).pcs_nickname ?? '')}'s family as her own.`);
    scene.text('There were a few incidents where she acted in some decidedly non-feminine ways. Luckily Tatiana\'s alibi has proved helpful here as well, covering her mistakes.');
    // TODO-QSP: dynamic text: Some other mental changes have emerged apart from just thinking of herself as <<...
    scene.text(`Some other mental changes have emerged apart from just thinking of herself as ${((st as any).pcs_firstname ?? '')}. Perhaps it's a result of her new gender, but with her new body has come an attraction towards men. She's a little unsettled by these changes, but she can't feel repulsed by these new desires any more than she could have been repulsed for finding girls attractive before.`);
    scene.text('The first time she saw a man\'s penis was a mind-opening experience, awakening unfamiliar feelings. Luckily it seems that she\'s retained her attraction towards women, making her changing sexuality easier to deal with. So far, she hasn\'t had the time to really explore a woman\'s pleasure.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if ((!((st as any).start_location ?? 0))) {
      scene.img('images/locations/pavlovsk/resident/apartment/home/bedrpar.jpg');
    } else {
      scene.img('images/system/1_openings/shared/site_gadukino.jpg');
    }
    // TODO-QSP: dynamic text: It will take some more time for <<$pcs_nickname>> to get completely used to her ...
    scene.text(`It will take some more time for ${((st as any).pcs_nickname ?? '')} to get completely used to her new body and life as ${((st as any).pcs_firstname ?? '')}. For now, she should just focus on getting out of bed.`);
    scene.actions([
      { label: 'Continue', goto: ['intro_end', 'sg_shared'] },
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

function enterSgShared(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_game_start', 'start');
  // TODO-QSP: end
  scene.build();
}

function enterUniTg(s: GameState, scene: SceneBuilder): void {
  scene.img('images/system/1_openings/shared/npc_tatiana.jpg');
  scene.text('"You\'re awake!" Tatiana says while looking into your eyes.');
  scene.actions([
{ label: 'Look at yourself', handler: (st: GameState) => {
    scene.img('images/system/1_openings/1_tf/8.jpg');
    scene.text('"Fuck," you say and immediately shut your mouth again. Your voice… It\'s so feminine! Tatiana giggles.');
    scene.text('"This is the first time I\'ve changed the gender of a person, therefore I just <i>had</i> to see your reaction. Totally worth it. But you turned out exactly like her."');
    scene.text('"Like who?" you ask.');
    // TODO-QSP: dynamic text: "<<$pcs_firstname>> <<$pcs_lastname>>, of course. I found her in the morgue, era...
    scene.text(`"${((st as any).pcs_firstname ?? '')} ${((st as any).pcs_lastname ?? '')}, of course. I found her in the morgue, erased evidence of her death, made her look like you, and you like her. You needed an alibi, and I needed to throw Reinhold off your trail. Today, Mikhail crashed his car into the pit and died, it's on the news." She picks up the remote and turns the TV on.`);
    scene.actions([
      { label: 'Watch TV', handler: (st: GameState) => {
    scene.img('images/system/1_openings/1_tf/9.jpg');
    scene.text('There is a news report about a businessman who drove his car into a hole at a construction site. He died in hospital without regaining consciousness.');
    scene.text('You look at Tatiana, bewildered. She has an enigmatic smile on her face. "I\'m a magician and that\'s something I can do. Reinhold has definitely lost the trail. The body in that car was a perfect copy of your old self, from your absorbed amulet energy down to the placement of every single hair."');
    // TODO-QSP: dynamic text: "Anyway, here are your new legal documents, including a new passport and student...
    scene.text(`"Anyway, here are your new legal documents, including a new passport and student ID. Starting today, you are ${((st as any).pcs_firstname ?? '')} ${((st as any).pcs_lastname ?? '')}, an 18 year old girl who is attending the Saint Petersburg University. She grew up in Pavlovsk with her mother, stepfather, sister and half brother, who are helping her move to the dorms tomorrow."`);
    scene.text('She hands you a notebook. "Luckily for us, she kept a journal about her life, notes about her family and friends, as well as many other things. I suggest you study and memorize it, but to help you out, I\'ve fabricated a story that she was admitted to the hospital with a head injury and has some memory issues. This should help with you fitting in and acting different than she did, but learn to act like her as quickly as you can so you don\'t bring unwanted attention to yourself."');
    // TODO-QSP: dynamic text: This is a lot for you to take in and it takes a moment for you to grasp it all. ...
    scene.text(`This is a lot for you to take in and it takes a moment for you to grasp it all. "Wait, what about the real ${((st as any).pcs_firstname ?? '')}?"`);
    scene.text('She gives you a sad smile. "She was killed. No one knows she died, and nobody will know, giving you a new life to hide in. I know it\'s not ideal and whenever we can fix this and change you back, we can let her rest. Just think of it this way; you\'re giving her family extra time with her."');
    scene.text('You sigh and shake your head. You don\'t even know what to say. "Here are the keys to her apartment. Study her journal and memorize it like your life depends on it, because in a way it does. Now get up, you\'ve got to go to your new home and start a new life."');
    scene.text('Gustav enters the room and looks at you. "Come on, I\'ll take you."');
    scene.actions([
      { label: 'Go with Gustav', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/npc_gustav.jpg');
    scene.text('Gustav silently takes you to the garage and you enter his black jeep. Gustav gets behind the wheel and drives you into the city as you silently speculate about what to do now.');
    scene.text('After a few minutes, while keeping his eyes on the road, Gustav speaks. "I\'m sorry I beat you up. I have trouble controlling myself during a fight. You had a large build and for a second I thought you might be dangerous, so I ended up hitting you with my full force."');
    scene.text('You look at him. "Forget about it. What do I do now?"');
    scene.text('Gustav nods. "Well, I would advise you to buy what you\'ll need and see about getting a part time job to help out with the expenses. Her family is fairly poor, so I\'m not sure how much they\'ll be able to help you. Also your mind is very weak. If you don\'t take care of yourself, you\'ll go crazy. You need to eat well, sleep regularly and have fun. Don\'t become depressed or else you\'ll end up in a madhouse. Don\'t go looking for Tatiana; you won\'t find her. Lastly, if we need to contact you, we will find you."');
    scene.text('You arrive at some old Soviet era buildings. Gustav stops the car and points a finger at the entrance. "You\'re in apartment 7 on the second floor. Tatiana already gave you the key, so go. Don\'t give up. Not everyone gets an entirely new chance at life."');
    scene.text('"Also study that journal and try to fit in and make the best of your new life." You just nod, not knowing what to say as you open the car door and get out.');
    scene.actions([
      { label: 'Go to the apartment', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/uni_day.jpg');
    scene.text('You\'re exhausted and are still struggling to take in all the strange things you\'ve learnt, so decide to get an early night\'s sleep.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/uni_day.jpg');
    scene.text('The big day has finally arrived! Your family piled into your stepfather\'s Gazelle pickup and you all traveled from your hometown, Pavlovsk, to St. Petersburg. Today is the day you move into the university dorms to start this new phase of your life.');
    scene.actions([
      { label: 'Continue', goto: ['intro_end', 'uni_shared'] },
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
  return;
  // TODO-QSP: end
  scene.build();
}

function enterUniShared(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 0) {
    scene.img('images/characters/shared/headshots_main/big28.jpg');
    scene.text('Having spent almost an hour in the cramped truck, you jump out as soon as you arrive. Vladimir gets out and stretches before telling you to take your sister and find out where you\'re staying while the rest of the family unloads your stuff.');
    scene.text('Looking around, you see many people doing the same.');
    scene.actions([
      { label: 'Check Kolka', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big34.jpg');
    scene.text('Your brother, caught up in the excitement of opening day, tries to slide past Vlad unnoticed but is called back to help unload. He sighs and shuffles his feet before turning around to help. You feel bad for him, but he\'ll be able to get a better look around next year when he graduates secondary school and starts here.');
    scene.actions([
      { label: 'Head inside', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big33.jpg');
    // TODO-QSP: dynamic text: Your sister comes up to you, links her arm with yours, and pulls you forward. "C...
    scene.text(`Your sister comes up to you, links her arm with yours, and pulls you forward. "Come on, ${((st as any).pcs_nickname ?? '')}! I want to see this place."`);
    scene.text('Already knowing the answer, you ask anyway. "Why aren\'t you enrolled then?"');
    scene.text('"I\'m comfortable where I am right now. When I\'m ready, maybe I will."');
    scene.text('Rolling your eyes, you let her keep pulling on your arm.');
    scene.actions([
      { label: 'Enter the university', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big253.jpg');
    scene.text('Joining the crowd heading inside, you head into the main courtyard where the new students are being greeted by the older students.');
    scene.text('A (color undecided)-haired girl comes up and introduces herself. "Welcome, I\'m Diane Borisyuk… Anya?!"');
    // TODO-QSP: dynamic text: Anya squeals with joy before running to her and giving her a hug. "Diane! I have...
    scene.text(`Anya squeals with joy before running to her and giving her a hug. "Diane! I haven't seen you in a long time. ${((st as any).pcs_nickname ?? '')}, this is Diane, Rex's sister. She used to buy us booze for our parties when we were younger."`);
    scene.text('Diane laughs. "That <b>was</b> a long time ago. So this is your sister? Nice to meet you. You\'re going to have a lot of fun here. Let\'s get you your dorm keys and get you set up!"');
    scene.text('"By the way, what are you studying?"');
    scene.actions([
      { label: 'Get your key', goto: ['intro_end', 'uni_shared', '1'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 1) {
      qspCall(s, 'homes_properties', 'give_access', 'parents_home');
      ((s as any).gschoolVars = (s as any).gschoolVars ?? {})['school_diploma'] = 1;
      qspCall(s, 'homes_properties', 'set_home', 'university_dorm');
      qspCall(s, 'npc_relationship', 'default_family_friends');
      scene.img('images/system/1_openings/6_uni/degree_choice.jpg');
      scene.text('This is where you decide what degree you wish to study. For now, Teaching and Nursing are the only options, but more will be added in the future.');
      scene.actions([
        { label: 'Teaching', handler: (st: GameState) => {
    qspCall(st, 'uni_admin', 'courses', 'enroll_teaching', 1);
    qspGoto(st, 'intro_end', 'uni_shared', '2');
  } },
        { label: 'Nursing', handler: (st: GameState) => {
    qspCall(st, 'uni_admin', 'courses', 'enroll_nursing', 1);
    qspGoto(st, 'intro_end', 'uni_shared', '2');
  } },
      ]);
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 2) {
        scene.img('images/system/1_openings/6_uni/degree_choice.jpg');
        scene.text('It\'s possible to enroll in up to 3 elective classes, which have to be chosen now.');
        scene.text('Computer Class and Asian Studies are in the same timeslot Monday afternoon, Art class on Tuesday afternoon, Psychology and African Studies in the same timeslot Thursday afternoon.');
        if (((s as any).university ?? 0)?.['elective_semester_1_1'] === '') {
          scene.actions([
            { label: 'Read about the computer class', handler: (st: GameState) => {
    scene.text('<center><b>Enrollment Office</b></center>');
    scene.img('images/locations/city/island/university/admin/enrollment2.jpg');
    scene.text('You read about the computer class, which seems to be a basic class that teaches you how to use a computer, the functions of some of the more basic programs and how to troubleshoot the OS if something goes wrong. It seems like a fairly useful class.');
    scene.actions([
      { label: 'Enroll in the computer class', handler: (st: GameState) => {
    qspCall(st, 'uni_admin', 'courses', 'enroll_elective_computer', 1);
    scene.text('You decide to enroll in the computer class for the first and second semester of this year.');
    scene.actions([
      { label: 'Consider other elective classes', goto: ['intro_end', 'uni_shared', '2'] },
    ]);
  } },
      { label: 'Don\'t enroll in the computer class', goto: ['intro_end', 'uni_shared', '2'] },
    ]);
  } },
          ]);
        }
        if (((s as any).university ?? 0)?.['elective_semester_1_2'] === '') {
          scene.actions([
            { label: 'Read about the art class', handler: (st: GameState) => {
    scene.text('<center><b>Enrollment Office</b></center>');
    scene.img('images/locations/city/island/university/admin/enrollment2.jpg');
    scene.text('This class is about learning how to draw. It will start off with the basics before moving onto the more advanced art studies by the end of the second semester. It might be fun to take part in such a relaxed class.');
    scene.actions([
      { label: 'Enroll in the art class', handler: (st: GameState) => {
    qspCall(st, 'uni_admin', 'courses', 'enroll_elective_art', 1);
    scene.text('You decide to enroll in the art class for the first and second semester of this year.');
    scene.actions([
      { label: 'Consider other elective classes', goto: ['intro_end', 'uni_shared', '2'] },
    ]);
  } },
      { label: 'Don\'t enroll in the art class', goto: ['intro_end', 'uni_shared', '2'] },
    ]);
  } },
          ]);
        }
        if (((s as any).university ?? 0)?.['elective_semester_1_3'] === '') {
          scene.actions([
            { label: 'Read about the psychology class', handler: (st: GameState) => {
    scene.text('<center><b>Enrollment Office</b></center>');
    scene.img('images/locations/city/island/university/admin/enrollment2.jpg');
    scene.text('This class is about learning psychology to better understand how and why people think they way they do. It will start off with the basics before moving onto the more advanced behavior studies by the end of the second semester. It might be fun to take part in such a relaxed class.');
    scene.actions([
      { label: 'Enroll in the psychology class', handler: (st: GameState) => {
    qspCall(st, 'uni_admin', 'courses', 'enroll_elective_psychology', 1);
    scene.text('You decide to enroll in the psychology class for the first and second semester of this year.');
    scene.actions([
      { label: 'Consider other elective classes', goto: ['intro_end', 'uni_shared', '2'] },
    ]);
  } },
      { label: 'Don\'t enroll in the psychology class', goto: ['intro_end', 'uni_shared', '2'] },
    ]);
  } },
          ]);
        }
        if (((s as any).university ?? 0)?.['elective_semester_1_3'] === '') {
          scene.actions([
            { label: 'Read about the African studies class', handler: (st: GameState) => {
    scene.text('<center><b>Enrollment Office</b></center>');
    scene.img('images/locations/city/island/university/admin/enrollment2.jpg');
    scene.text('This class is about learning the history and culture of Africa and its people. It will start off with the history of the continent before moving on to modern day Africa by the end of the second semester. It might be fun to take part in such a relaxed class.');
    scene.actions([
      { label: 'Enroll in the African studies class', handler: (st: GameState) => {
    qspCall(st, 'uni_admin', 'courses', 'enroll_elective_african', 1);
    scene.text('You decide to enroll in the African studies class for the first and second semester of this year.');
    scene.actions([
      { label: 'Consider other elective classes', goto: ['intro_end', 'uni_shared', '2'] },
    ]);
  } },
      { label: 'Don\'t enroll in the African studies class', goto: ['intro_end', 'uni_shared', '2'] },
    ]);
  } },
          ]);
        }
        if (((s as any).university ?? 0)?.['elective_semester_1_1'] === '') {
          scene.actions([
            { label: 'Read about the Asian studies class', handler: (st: GameState) => {
    scene.text('<center><b>Enrollment Office</b></center>');
    scene.img('images/locations/city/island/university/admin/enrollment2.jpg');
    scene.text('This class is about learning the history and culture of Asia and its people. It will start off with the history of the continent before moving on to modern day Asia by the end of the second semester. It might be fun to take part in such a relaxed class.');
    scene.actions([
      { label: 'Enroll in the Asian studies class', handler: (st: GameState) => {
    qspCall(st, 'uni_admin', 'courses', 'enroll_elective_asian', 1);
    scene.text('You decide to enroll in the Asian studies class for the first and second semester of this year.');
    scene.actions([
      { label: 'Consider other elective classes', goto: ['intro_end', 'uni_shared', '2'] },
    ]);
  } },
      { label: 'Don\'t enroll in the Asian studies class', goto: ['intro_end', 'uni_shared', '2'] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Don\'t enroll in any more elective classes', goto: ['intro_end', 'uni_shared', '3'] },
        ]);
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 3) {
          scene.img('images/locations/city/island/university/dorm/dorm.jpg');
          scene.text('You follow Diane into the dorm building where an older woman with a very unpleasant and judgmental look on her face sits in a room just off the main hallway.');
          // TODO-QSP: dynamic text: Diane walks up to her. "I need <<$pcs_firstname>> <<$pcs_lastname>>''s room key,...
          scene.text(`Diane walks up to her. "I need ${((s as any).pcs_firstname ?? '')} ${((s as any).pcs_lastname ?? '')}'s room key, please."`);
          scene.text('The woman looks your name up on her computer before finding your dorm key and handing it to you.');
          // TODO-QSP: dynamic text: "Come on <<$pcs_nickname>>, I want to see your room." Anya drags you towards the...
          scene.text(`"Come on ${((s as any).pcs_nickname ?? '')}, I want to see your room." Anya drags you towards the elevators, with a smiling Diane following you.`);
          scene.actions([
            { label: 'Check out your room', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big220.jpg');
    scene.text('Arriving on the tenth floor, you check the number on your key and approach the matching door. You find a blonde haired girl inside sitting on one of the two beds in the room. Looking around, you see there is a desk for each of you and a large wardrobe for your clothes.');
    scene.text('The girl gets up and comes to greet you. "Hi, I\'m Vika. I guess one of you is my new roommate?" She looks between you and Anya, not sure who it is.');
    // TODO-QSP: dynamic text: "That would be me," you reply. "I''m <<$pcs_firstname>>, but you can call just c...
    scene.text(`"That would be me," you reply. "I'm ${((st as any).pcs_firstname ?? '')}, but you can call just call me ${((st as any).pcs_nickname ?? '')}. This is my sister, Anya."`);
    scene.text('Anya gives her a smile, but is mostly occupied with checking out your room.');
    scene.text('Diane stays in the doorway, though you do notice the strange look she gives Vika. "We should let your parents know which room you\'re in so they can drop your stuff off while I show you around the campus."');
    scene.text('Once you get back out into the hallway, you ask why she doesn\'t like your roommate. "There are a lot of nasty rumors about her. I\'m not exactly a prude or anything, but if even <i>one</i> of those rumors is true, then she makes me look like a virgin that\'s been living under a rock my whole life."');
    (st as any).temp = window.prompt("<center>What name do you address your mother by?<br>Mother (default), Mum, Mom, Mama, etc.</center>") ?? '';
    if (((st as any).temp ?? 0) !== '') {
      ((st as any).npc_nickname = (st as any).npc_nickname ?? {})['A29'] = '' + ((st as any).temp ?? 0) + '';
    }
    scene.actions([
      { label: 'Find your parents', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big29.jpg');
    // TODO-QSP: dynamic text: Once you get back outside, you find your family standing around the piles of box...
    scene.text(`Once you get back outside, you find your family standing around the piles of boxes with your stuff, surrounded by people coming and going. You tell your father which room you're in and give him the key before your ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''} pulls you to one side. Anya and Diane step away to catch up and give you some privacy.`);
    scene.text('"Big day! Are you excited? I know I am." She gives you a proud look.');
    // TODO-QSP: dynamic text: "Yeah, <<$npc_nickname[''A29'']>>! There''s so much to do and see here."
    scene.text(`"Yeah, ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''}! There's so much to do and see here."`);
    scene.text('"Well don\'t forget to stay focused on your studies, and stay away from boys for now. There will be plenty of time after you\'ve finished studying to think about that stuff."');
    if (((st as any).start_type ?? 0)?.['magic'] !== 'tg') {
      scene.actions([
        { label: 'Tell her what she wants to hear', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'set', 'A29', 50);
    scene.img('images/characters/shared/headshots_main/big29.jpg');
    // TODO-QSP: dynamic text: "Everything will be fine, <<$npc_nickname[''A29'']>>. You got me here, but I''ll...
    scene.text(`"Everything will be fine, ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''}. You got me here, but I'll do the rest."`);
    scene.text('She gives you a hug before going to stand over at your pile of stuff to keep an eye on it.');
    scene.actions([
      { label: 'Go on tour', goto: ['intro_end', 'uni_shared', '4'] },
    ]);
  } },
        { label: 'Snap at her', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'set', 'A29', 30);
    scene.img('images/characters/shared/headshots_main/big29.jpg');
    // TODO-QSP: dynamic text: "Just stop, <<$npc_nickname[''A29'']>>! I''m an adult now, and I''ll do whatever...
    scene.text(`"Just stop, ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''}! I'm an adult now, and I'll do whatever I want with whoever I want!"`);
    scene.text('Her eyes flash in anger, but she doesn\'t say anything. She goes and stands next to your pile to keep an eye on it.');
    scene.actions([
      { label: 'Go on tour', goto: ['intro_end', 'uni_shared', '4'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Appreciate her concern', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'set', 'A29', 70);
    scene.img('images/characters/shared/headshots_main/big29.jpg');
    // TODO-QSP: dynamic text: "I know, I know. Don''t worry so much, <<$npc_nickname[''A29'']>>! You got me he...
    scene.text(`"I know, I know. Don't worry so much, ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''}! You got me here. I'll do the rest."`);
    scene.text('She gives you a hug before going to stand over your pile of stuff to keep an eye on it.');
    scene.actions([
      { label: 'Go on a tour', goto: ['intro_end', 'uni_shared', '4'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
          ]);
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 4) {
            scene.img('images/locations/city/island/university/uni_day.jpg');
            scene.text('You rejoin Anya and Diane, who begins to point out the main areas of the university.');
            scene.text('"Right now you\'re in the main courtyard. It\'s basically the main hub of the university. You already know where the dorms are, and I imagine you\'ve been to the admin building already. It has all the main offices, so any paperwork or trouble you get into will be handled there."');
            scene.text('She takes you to the front of what must be the largest building on campus. "This is the main building, where most of your classes will be held. Finding your way around inside is pretty easy despite its size. It\'s signposted like crazy in there."');
            scene.text('She takes you up to another large building. "This is the library. Most students without a computer come here to study. You can find me here almost all the time and I\'m always willing to help if you need it. I\'m studying to be a teacher, so offering you assistance would help me as much as it helps you."');
            scene.text('"Well, that\'s the basic tour. The rest you will learn as you go."');
            scene.actions([
              { label: 'End the tour', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big253.jpg');
    scene.text('The three of you walk back to the dorms. You take in the sights while Anya and Diane chat about Rex and the old days.');
    scene.text('Once you get there, Diane reminds you to look for her in the library if you need anything before hugging Anya goodbye and heading back into the crowd of new students.');
    // TODO-QSP: dynamic text: Not seeing your <<$npc_nickname[''A29'']>> or your pile of stuff, you head up to...
    scene.text(`Not seeing your ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''} or your pile of stuff, you head up to your room.`);
    scene.actions([
      { label: 'Say goodbye to your family', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/dorm/dorm_room/room.jpg');
    // TODO-QSP: dynamic text: Returning to your room, you find your stuff piled on your bed and your <<$npc_ni...
    scene.text(`Returning to your room, you find your stuff piled on your bed and your ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''} putting the last of your clothes into the wardrobe. You don't see Vika, and assume she left to give you privacy or to avoid meeting your family.`);
    scene.text('Anya gives a hug and congratulates you on starting university while your brother gives you an awkward hug and whispers to text him what it\'s like.');
    scene.text('Vladimir comes over and hugs you too, telling you how proud he is to be your stepfather and to call if you need anything.');
    if (((st as any).npc_rel ?? 0)?.['A29'] >= 60) {
      // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> finishes what she''s doing and comes over, tears...
      scene.text(`Your ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''} finishes what she's doing and comes over, tears in her eyes. Wrapping you in a tight hug, she tells you how proud she is of you for enrolling in university and again reminds you to stay away from boys before joining the rest of the family by the door.`);
    } else {
      if (((st as any).npc_rel ?? 0)?.['A29'] <= 30) {
        // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> finishes what she''s doing and gives you an awkw...
        scene.text(`Your ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''} finishes what she's doing and gives you an awkward hug, apologising for fighting with you on your big day before joining the rest of the family by the door.`);
      } else {
        // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> finishes what she''s doing and comes over and gi...
        scene.text(`Your ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''} finishes what she's doing and comes over and gives you a hug, telling how happy she is that you enrolled before joining the rest of the family by the door.`);
      }
    }
    scene.text('They all wave at you before leaving. You spend some time putting the rest of your stuff away or stashing it under your bed before deciding to explore the grounds.');
    scene.actions([
      { label: 'Head outside', goto: ['intro_game_start', 'start'] },
    ]);
  } },
    ]);
  } },
            ]);
          }
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCityTg(s: GameState, scene: SceneBuilder): void {
  scene.img('images/system/1_openings/shared/npc_tatiana.jpg');
  scene.text('"You\'re awake!" Tatiana says while looking into your eyes.');
  scene.actions([
{ label: 'Look at yourself', handler: (st: GameState) => {
    scene.img('images/system/1_openings/1_tf/8.jpg');
    scene.text('"Fuck," you say and immediately shut your mouth again. Your voice… It\'s so feminine! Tatiana giggles.');
    scene.text('"This is the first time I\'ve changed someone\'s gender, therefore I just <i>had</i> to see your reaction. Totally worth it, but you turned out beautiful. For a first try anyway. I should tell you that your body will change much faster than one of a natural born woman for a while until it regulates itself to your new reality. That means it will be easier to gain and lose weight, muscle, stuff like that. All in all, you turned out quite well. You look pretty much exactly like her."');
    scene.text('"By the way, your new… \'equipment\' down there is fully functional, so if you don\'t want to be a mother, you should think about using contraceptives."');
    scene.text('You glare at Tatiana. "So that makes me a woman now?! On the outside maybe, but guess what? I\'m still a 34 year old man on the inside!"');
    scene.text('"Well, yes. I won\'t argue about that," she agrees. "It\'s your life and you decide what you do with it, but for the time being, you can\'t go back to your old life, so deal with it. On a side note, I already took care of an alibi. Mikhail crashed his car into the pit and died, it\'s on the news." She picks up a remote and turns the TV on.');
    scene.actions([
      { label: 'Watch TV', handler: (st: GameState) => {
    scene.img('images/system/1_openings/1_tf/9.jpg');
    scene.text('There is a news report about a businessman who drove his car into a hole at a construction site. He died in hospital without regaining consciousness.');
    scene.text('You look at Tatiana, bewildered. She has an enigmatic smile on her face. "I\'m a magician and that\'s something I can do. Reinhold has definitely lost the trail. The body in that car was a perfect copy of your old self, from your absorbed amulet energy down to the placement of every single hair."');
    // TODO-QSP: dynamic text: "Anyway, here are your new legal documents, including a new passport. Starting t...
    scene.text(`"Anyway, here are your new legal documents, including a new passport. Starting today, you are ${((st as any).pcs_firstname ?? '')} ${((st as any).pcs_lastname ?? '')}, an 18 year old girl who lives in the city. She grew up in Pavlovsk with her mother, stepfather, sister and half brother. She just recently rented an apartment in the city after graduating from school and tomorrow is moving day."`);
    scene.text('She hands you a notebook. "Luckily for us, she kept a journal about her life, notes about her family and friends, as well as many other things. I suggest you study and memorize it, but to help you out, I\'ve fabricated a story that she was admitted to the hospital with a head injury and has some memory issues. This should help with you fitting in and acting different than she did, but learn to act like her as quickly as you can so you don\'t bring unwanted attention to yourself."');
    // TODO-QSP: dynamic text: This is a lot for you to take in and it takes a moment for you to grasp it all. ...
    scene.text(`This is a lot for you to take in and it takes a moment for you to grasp it all. "Wait, what about the real ${((st as any).pcs_firstname ?? '')}?"`);
    scene.text('She gives you a sad smile. "She was killed. No one knows she died, and nobody will know, giving you a new life to hide in. I know it\'s not ideal and whenever we can fix this and change you back, we can let her rest. Just think of it this way; you\'re giving her family extra time with her."');
    scene.text('You sigh and shake your head. You don\'t even know what to say. "Here are the keys to her apartment. Study her journal and memorize it like your life depends on it, because in a way it does. Now get up, you\'ve got to go to your new home and start a new life."');
    scene.text('Gustav enters the room and looks at you. "Come on, I\'ll take you."');
    scene.actions([
      { label: 'Go with Gustav', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/npc_gustav.jpg');
    scene.text('Gustav silently takes you to the garage and you enter his black jeep. Gustav gets behind the wheel and drives you into the city as you silently speculate about what to do now.');
    scene.text('After a few minutes, while keeping his eyes on the road, Gustav speaks. "I\'m sorry I beat you up. I have trouble controlling myself during a fight. You had a large build and for a second I thought you might be dangerous, so I ended up hitting you with my full force."');
    scene.text('You look at him. "Forget about it. What do I do now?"');
    scene.text('Gustav nods. "Well, I would advise you to start by buying food, all sorts of washing powders, laundry detergent and dishes. There are a few supplies already in the apartment, but they\'ll only last you a day or two, so get a job. If I remember correctly, there was a vacant waitress position at a nearby cafe not too long ago."');
    scene.text('"Also, your mind is very weak. If you don\'t take care of yourself, you\'ll go crazy. You need to eat well, sleep regularly and have fun. Don\'t become depressed or else you\'ll end up in a madhouse. Don\'t go looking for Tatiana; you won\'t find her. Secondly, if we need to contact you, we will find you."');
    scene.text('You arrive at some old Soviet era buildings. Gustav stops the car and points a finger at the entrance. "You\'re in apartment 7 on the second floor. Tatiana already gave you the key, so go. Don\'t give up. Not everyone gets an entirely new chance at life."');
    scene.text('"Also study that journal and try to fit in and make the best of your new life." You just nod, not knowing what to say as you open the car door and get out.');
    scene.actions([
      { label: 'Get out of the car', handler: (st: GameState) => {
    scene.img('images/system/1_openings/1_tf/start_tf.jpg');
    scene.text('You\'re exhausted and are still struggling to take in all the strange things you\'ve learnt, so decide to get an early night\'s sleep.');
    scene.actions([
      { label: 'Sleep', goto: ['intro_end', 'city_shared'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCityShared(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 0) {
    scene.img('images/characters/shared/headshots_main/big28.jpg');
    scene.text('Having spent almost an hour in the cramped truck, you jump out as soon as you arrive. Vladimir gets out and stretches before heading to the back of the Gazelle to start unloading your stuff.');
    scene.actions([
      { label: 'Check Kolka', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big34.jpg');
    scene.text('Your brother, caught up in the excitement of seeing the city, tries to slide past Vladimir unnoticed, but is called back to help unload. He sighs and shuffles his feet before turning around to help.');
    scene.text('Giving him an encouraging smile, you thank him for helping. Your effort pays off, his chest puffing out as he starts to help his father.');
    scene.actions([
      { label: 'Head inside', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big33.jpg');
    // TODO-QSP: dynamic text: Your sister comes up to you, links her arm with yours, and pulls you forward. "C...
    scene.text(`Your sister comes up to you, links her arm with yours, and pulls you forward. "Come on, ${((st as any).pcs_nickname ?? '')}! I want to see this place."`);
    scene.text('Already knowing the answer, you ask anyway. "Why don\'t you have your own apartment then?"');
    scene.text('"I\'m comfortable where I am right now. When I\'m ready, maybe I will."');
    scene.text('Rolling your eyes, you let her keep pulling on your arm.');
    (st as any).temp = window.prompt("<center>What name do you address your mother by?<br>Mother (default), Mum, Mom, Mama, etc.</center>") ?? '';
    if (((st as any).temp ?? 0) !== '') {
      ((st as any).npc_nickname = (st as any).npc_nickname ?? {})['A29'] = '' + ((st as any).temp ?? 0) + '';
    }
    scene.actions([
      { label: 'Enter the apartment', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/apartment/home/korr.jpg');
    scene.text('Once inside you look around, already trying to decide where things should go. Anya sees this, and laughing, drags you through each room to check them out.');
    // TODO-QSP: dynamic text: By the time you''re done, Kolka and Vladimir have started bringing boxes in. "Yo...
    scene.text(`By the time you're done, Kolka and Vladimir have started bringing boxes in. "Your ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''} is staying outside to keep an eye on your stuff. I don't think she likes the neighborhood much," he says with a shrug.`);
    scene.text('You and Anya pick up the boxes they set down and take them to the rooms they were labeled for while your brother and stepfather bring it all inside.');
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Greet your ' + String(((st as any).npc_nickname ?? 0)?.['A29'] ?? '' ?? ''), goto: ['intro_end', 'city_shared', '1'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 1) {
      scene.img('images/characters/shared/headshots_main/big29.jpg');
      // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> finally comes inside, carrying food she made ahe...
      scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} finally comes inside, carrying food she made ahead of time for everyone.`);
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>, this is a pretty rough neighborhood. You need to be really c...
      scene.text(`"${((s as any).pcs_nickname ?? '')}, this is a pretty rough neighborhood. You need to be really careful of those boys outside. The sooner university starts and you can get out of here, the better. I don't know why you couldn't just wait until summer ended to move to the city."`);
      scene.actions([
        { label: 'Tell her what she wants to hear', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'set', 'A29', 50);
    scene.img('images/characters/shared/headshots_main/big29.jpg');
    // TODO-QSP: dynamic text: "Everything will be fine, <<$npc_nickname[''A29'']>>. I''ll look into university...
    scene.text(`"Everything will be fine, ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''}. I'll look into university prices and decide then."`);
    scene.text('She gives you a hug before going to the kitchen to start preparing lunch.');
    scene.actions([
      { label: 'Have lunch', goto: ['intro_end', 'city_shared', '2'] },
    ]);
  } },
        { label: 'Snap at her', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'set', 'A29', 30);
    scene.img('images/characters/shared/headshots_main/big29.jpg');
    // TODO-QSP: dynamic text: "Just stop, <<$npc_nickname[''A29'']>>! I''m an adult now, and I''ll do whatever...
    scene.text(`"Just stop, ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''}! I'm an adult now, and I'll do whatever I want with whoever I want!"`);
    scene.text('Her eyes flash in anger, but she doesn\'t say anything. She then heads into the kitchen to prepare lunch.');
    scene.actions([
      { label: 'Have lunch', goto: ['intro_end', 'city_shared', '2'] },
    ]);
  } },
        { label: 'Appreciate her concern', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'set', 'A29', 70);
    scene.img('images/characters/shared/headshots_main/big29.jpg');
    // TODO-QSP: dynamic text: "I know, but don''t worry so much, <<$npc_nickname[''A29'']>>. I''ll be very car...
    scene.text(`"I know, but don't worry so much, ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''}. I'll be very careful, I promise. It's only for a few months."`);
    scene.text('She gives you a hug before going to the kitchen to prepare lunch.');
    scene.actions([
      { label: 'Have lunch', goto: ['intro_end', 'city_shared', '2'] },
    ]);
  } },
      ]);
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 2) {
        scene.img('images/locations/pavlovsk/resident/apartment/home/dinnerhome.jpg');
        if (((s as any).npc_rel ?? 0)?.['A29'] >= 60) {
          // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> hands you a plate with a big smile as you all si...
          scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} hands you a plate with a big smile as you all sit down at your kitchen table.`);
        } else {
          if (((s as any).npc_rel ?? 0)?.['A29'] <= 30) {
            // TODO-QSP: dynamic text: Lunch is a little tense at first, but everyone is used to you and your <<$npc_ni...
            scene.text(`Lunch is a little tense at first, but everyone is used to you and your ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} fighting.`);
          } else {
            // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> hands out plates of food as you all sit down at ...
            scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} hands out plates of food as you all sit down at your kitchen table.`);
          }
        }
        scene.text('Before long, you\'re all laughing and joking with each other as you eat. You\'re still looking forward to being on your own, but you know times like this will become pretty rare once they head home.');
        // TODO-QSP: dynamic text: Once everyone is finished and your <<$npc_nickname[''A29'']>> has cleared up, th...
        scene.text(`Once everyone is finished and your ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} has cleared up, they all prepare to say goodbye.`);
        scene.actions([
          { label: 'Say goodbye to your family', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/apartment/home/korr.jpg');
    scene.text('Anya gives a hug and congratulates you on getting your own place. Your brother gives you an awkward hug and whispers to text him what it\'s like living on your own.');
    scene.text('Vladimir then comes over and hugs you too, telling you how proud he is to be your stepfather and to call if you need anything.');
    if (((st as any).npc_rel ?? 0)?.['A29'] >= 60) {
      // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> finishes what she''s doing and comes over, tears...
      scene.text(`Your ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''} finishes what she's doing and comes over, tears in her eyes. Wrapping you in a hug, she again reminds you to stay away from the boys outside before joining the rest of the family by the door.`);
    } else {
      if (((st as any).npc_rel ?? 0)?.['A29'] <= 30) {
        // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> finishes what she''s doing and gives you an awkw...
        scene.text(`Your ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''} finishes what she's doing and gives you an awkward hug, apologising for fighting with you before joining the rest of the family by the door.`);
      } else {
        // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> finishes what she''s doing and comes over and gi...
        scene.text(`Your ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''} finishes what she's doing and comes over and gives you a hug, again reminding you to stay away from the boys outside before joining the rest of the family by the door.`);
      }
    }
    scene.text('They all wave and head out, leaving you alone for the first time. You spend some time unpacking your stuff before you stop and stretch, deciding you can finish later.');
    scene.actions([
      { label: 'Continue', goto: ['intro_game_start', 'start'] },
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
    case 'set_random_uni_course':
      enterSetRandomUniCourse(s, scene);
      break;
    case 'set_random_uni_electives':
      enterSetRandomUniElectives(s, scene);
      break;
    case 'sg_tg':
      enterSgTg(s, scene);
      break;
    case 'sg_shared':
      enterSgShared(s, scene);
      break;
    case 'uni_tg':
      enterUniTg(s, scene);
      break;
    case 'uni_shared':
      enterUniShared(s, scene);
      break;
    case 'city_tg':
      enterCityTg(s, scene);
      break;
    case 'city_shared':
      enterCityShared(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const intro_end: LocationDef = {
  name: 'intro_end',
  title: 'Enrollment Office',
  region: 'other',
  enter: enter,
};
