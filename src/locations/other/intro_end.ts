import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_hairbsh = 0;
  qspCall(s, 'themes', 'indoors');
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
    if (((s as any).start_type ?? 0)?.['magic'] === 'tg') {
      scene.actions([{ label: 'Continue', goto: ['intro_end', 'sg_tg'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['intro_end', 'sg_shared'] }]);
    }
  } else {
    if (((s as any).start_type ?? 0)?.['magic'] === 'tg') {
      scene.actions([{ label: 'Continue', goto: ['intro_end', 'uni_tg'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['intro_end', 'uni_shared'] }]);
    }
    if (((s as any).start_type ?? 0)?.['magic'] === 'tg') {
      scene.actions([{ label: 'Continue', goto: ['intro_end', 'city_tg'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['intro_end', 'city_shared'] }]);
    }
  }
  scene.build();
}

function enterQuickStart(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_hairbsh = 0;
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
  } else {
    qspCall(s, 'intro_end', 'set_random_uni_course');
    qspCall(s, 'intro_end', 'set_random_uni_electives');
    // TODO-QSP: gs 'npc_relationship', 'set', 'A29', 30 + 20 * rand(0, 2)
    // TODO-QSP: gs 'npc_relationship', 'set', 'A29', 30 + 20 * rand(0, 2)
  }
  scene.actions([{ label: 'Continue', goto: ['intro_game_start', 'quick_start'] }]);
  scene.build();
}

function enterSetRandomUniCourse(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_rand = Math.floor(Math.random() * 2) + 0;
  if (((s as any).temp_rand ?? 0) === 0) {
    qspCall(s, 'uni_admin', 'courses', 'enroll_teaching', 1);
  } else {
    qspCall(s, 'uni_admin', 'courses', 'enroll_nursing', 1);
  }
  return;
  scene.build();
}

function enterSetRandomUniElectives(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_rand = Math.floor(Math.random() * 6) + 0;
  if (((s as any).temp_rand ?? 0) < 2) {
    qspCall(s, 'uni_admin', 'courses', 'enroll_elective_asian', 1);
  } else {
    qspCall(s, 'uni_admin', 'courses', 'enroll_elective_computer', 1);
  }
  (s as any).temp_rand = Math.floor(Math.random() * 4) + 0;
  if (((s as any).temp_rand ?? 0) < 2) {
    qspCall(s, 'uni_admin', 'courses', 'enroll_elective_art', 1);
  }
  (s as any).temp_rand = Math.floor(Math.random() * 6) + 0;
  if (((s as any).temp_rand ?? 0) < 2) {
    qspCall(s, 'uni_admin', 'courses', 'enroll_elective_african', 1);
  } else {
    qspCall(s, 'uni_admin', 'courses', 'enroll_elective_psychology', 1);
  }
  return;
  scene.build();
}

function enterSgTg(s: GameState, scene: SceneBuilder): void {
  if (((s as any).ARGS ?? 0)[1] === 0) {
    scene.img(`${qspFunc(s, '\'$face_image\'', '')}`);
    scene.text('You couldn\'t tell from her photo, but although shorter than you, she is rather tall for a girl.');
    scene.text('She looks like she\'s spent some time in front of the mirror trying to pretty herself up, and her clothes are very clean. Nevertheless, she still looks blurry in the mirror. Like she is the type of girl that would be a background character in another person\'s life.');
    scene.actions([
      { label: 'Go for a walk', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/site_gadukino.jpg');
    // TODO-QSP: dynamic text: You both walk along a dirt road heading through grain fields towards a forest. <...
    scene.text(`You both walk along a dirt road heading through grain fields towards a forest. ${((s as any).pcs_nickname ?? 0)} holds your hand and keeps babbling on, asking you question after question.`);
    scene.actions([
      { label: 'Keep walking', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/site_ruin.jpg');
    scene.text('You end up being dragged into her pace, getting lost in the conversation. Before long, you look up and realize that, while you were talking, you\'ve ended up somewhere in the forest. Just ahead of you is an old ruin.');
    scene.actions([
      { label: 'Take a rest and make a move', handler: (st: GameState) => {
    scene.img('images/system/1_openings/4_csb/9.jpg');
    // TODO-QSP: dynamic text: You see a large stone at the ruins where you and <<$pcs_nickname>> decide to sit...
    scene.text(`You see a large stone at the ruins where you and ${((s as any).pcs_nickname ?? 0)} decide to sit down. Being this close to a girl has given you a hardon, so you pull out your shirt and do your best to hide it. She turns and looks at you and you feel this is your moment, so you lean in to kiss her when…`);
    scene.actions([
      { label: 'What\'s that sound?', handler: (st: GameState) => {
    (s as any).fcolor = 0;
    (s as any).bcolor = 0;
    (s as any).lcolor = 0;
    scene.img('images/system/1_openings/shared/site_tunnel_1.jpg');
    scene.text('A loud crack runs through the ruins and the ground gives way beneath you, sending you both tumbling down into the dark. Miraculously, you both manage to land with only minor scrapes and bruises. You curse and look around at your surroundings.');
    scene.text('You seem to be in an underground chamber of some sort. Looking up, you see that climbing out is not an option. There is also an old gate on one side of the chamber, but it\'s either locked or rusted shut. Looks like the only way out is the tunnel on the other side of the chamber.');
    // TODO-QSP: dynamic text: Thoughts of getting a kissing picture have been thoroughly broken. You have more...
    scene.text(`Thoughts of getting a kissing picture have been thoroughly broken. You have more immediate concerns, so you pull your backpack back onto your shoulders, turn on the flashlight on your phone, and lead ${((s as any).pcs_nickname ?? 0)} out the only way you can.`);
    scene.actions([
      { label: 'Follow the tunnel', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/site_tunnel_2.jpg');
    scene.text('The tunnel goes on for what feels like miles. You start to worry about your phone\'s battery dying.');
    scene.actions([
      { label: 'Keep going', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/site_cave_altar.jpg');
    // TODO-QSP: dynamic text: Reaching the end of the tunnel, you find a dead end. Or at least it seems to be....
    scene.text(`Reaching the end of the tunnel, you find a dead end. Or at least it seems to be. ${((s as any).pcs_nickname ?? 0)} notices light coming through the cracks in the wall. You do your best to knock it down.`);
    scene.text('After a few good hits, the wall crumbles and you find yourself in another chamber filled with old pottery and baubles. Opposite you is another tunnel that hopefully leads out. In the center of the room is an altar and on it is what seems to be the centerpiece of this room; a strange amulet.');
    scene.actions([
      { label: 'Examine the amulet', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/item_amulet.jpg');
    scene.text('You pick up the strange amulet and examine it. You notice it\'s much lighter than it looks, and unusually warm for a piece of metal. It\'s shaped like an antique oil lamp and… is that a penis? This is clearly very old.');
    scene.text('While holding the amulet, you realize that it\'s getting warmer, to the point of being almost hot. You suddenly feel heat coursing through your entire body and feel a surge of strength inside you. It\'s like you just finished a long jog, but without the fatigue.');
    // TODO-QSP: dynamic text: <<$pcs_nickname>> touches your arm, asking what you found. "Just some old junk,"...
    scene.text(`${((s as any).pcs_nickname ?? 0)} touches your arm, asking what you found. "Just some old junk," you reply as you pocket the amulet. "Come on, let's get going."`);
    scene.actions([
      { label: 'Find a way out', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/site_working.jpg');
    scene.text('You follow the next tunnel and find yourself in a construction site. There are several <b>KEEP OUT</b> signs visible from here. Shit.');
    scene.actions([
      { label: 'Sneak out', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/site_road.jpg');
    // TODO-QSP: dynamic text: The workers' shift has long since finished, so sneaking out isn't too hard. The ...
    scene.text(`The workers' shift has long since finished, so sneaking out isn't too hard. The site is on the highway, so hopefully you can make it back before ${((s as any).pcs_nickname ?? 0)}'s family starts worrying. As you start walking back with her, you feel a sudden rush of heat and find yourself falling…`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_end', 'sg_tg', 1
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
    if (((s as any).ARGS ?? 0)[1] === 2) {
      scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
      // TODO-QSP: dynamic text: Shortly after Tatiana left, <<$pcs_nickname>>'s new mother showed up to take her...
      scene.text(`Shortly after Tatiana left, ${((s as any).pcs_nickname ?? 0)}'s new mother showed up to take her to her new home. ${((s as any).pcs_nickname ?? 0)} met her new family and did the best she could to fit in, afraid of them figuring out that she isn't really ${((s as any).pcs_firstname ?? 0)}. They seem to have bought Tatiana's explanation of amnesia and mental trauma, going out of their way to reintroduce her to her new life.`);
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/system/1_openings/4_csb/15.jpg');
    // TODO-QSP: dynamic text: Over the next week, <<$pcs_nickname>> slowly became accustomed to her new life. ...
    scene.text(`Over the next week, ${((s as any).pcs_nickname ?? 0)} slowly became accustomed to her new life. She isn't used to being a girl just yet, but she's come to think of herself as ${((s as any).pcs_nickname ?? 0)} instead of Mikhail, and ${((s as any).pcs_nickname ?? 0)}'s family as her own.`);
    scene.text('There were a few incidents where she acted in some decidedly non-feminine ways. Luckily Tatiana\'s alibi has proved helpful here as well, covering her mistakes.');
    // TODO-QSP: dynamic text: Some other mental changes have emerged apart from just thinking of herself as <<...
    scene.text(`Some other mental changes have emerged apart from just thinking of herself as ${((s as any).pcs_firstname ?? 0)}. Perhaps it's a result of her new gender, but with her new body has come an attraction towards men. She's a little unsettled by these changes, but she can't feel repulsed by these new desires any more than she could have been repulsed for finding girls attractive before.`);
    scene.text('The first time she saw a man\'s penis was a mind-opening experience, awakening unfamiliar feelings. Luckily it seems that she\'s retained her attraction towards women, making her changing sexuality easier to deal with. So far, she hasn\'t had the time to really explore a woman\'s pleasure.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((s as any).start_location ?? 0) === 0) {
      scene.img('images/locations/pavlovsk/resident/apartment/home/bedrpar.jpg');
    } else {
      scene.img('images/system/1_openings/shared/site_gadukino.jpg');
    }
    // TODO-QSP: dynamic text: It will take some more time for <<$pcs_nickname>> to get completely used to her ...
    scene.text(`It will take some more time for ${((s as any).pcs_nickname ?? 0)} to get completely used to her new body and life as ${((s as any).pcs_firstname ?? 0)}. For now, she should just focus on getting out of bed.`);
    scene.actions([
      { label: 'Continue', goto: ['intro_end', 'sg_shared'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    return;
    scene.actions([
      { label: 'Wake up', handler: (st: GameState) => {
    if (((s as any).sound_settings ?? 0)?.['music_off'] === 0) {
    }
    (s as any).bcolor = 0;
    (s as any).lcolor = 0;
    (s as any).fcolor = 0;
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
    // TODO-QSP: dynamic text: Startled, you reach up to your face, tracing out the features. You didn't get a ...
    scene.text(`Startled, you reach up to your face, tracing out the features. You didn't get a chance to become familiar with her face, but it feels about right. This whole time, ${((s as any).pcs_nickname ?? 0)}'s death didn't feel real, like she was still around somehow. Maybe it's because you now <i>are</i> ${((s as any).pcs_nickname ?? 0)}, but even now you don't feel a sense of loss or guilt.`);
    scene.text('"Having a template to work off of really helped. Not even a geneticist could tell you two apart; you are identical from your fingerprints down to your DNA. Of course, that means your new \'equipment\' down there is fully functional as well, so if you don\'t want to be a mommy, you should start thinking about contraceptives. You should probably also stay away from any male relatives if you don\'t want to end up with a kid with eleven toes or something."');
    scene.text('You angrily glare at Tatiana. "So you think I\'m a girl now? On the outside maybe, but guess what? I\'m still a boy on the inside!"');
    // TODO-QSP: dynamic text: "Well, yes. I won't argue about that." Tatiana agrees. "You can decide what you ...
    scene.text(`"Well, yes. I won't argue about that." Tatiana agrees. "You can decide what you want to do with your life, but you might want to play the part of ${((s as any).pcs_firstname ?? 0)} until graduation at least. On a side note, I already took care of an alibi. Yesterday, '${((s as any).pcs_firstname ?? 0)}' was found half-dead on the edge of the woods while the leftovers of Mikhail's body were found deeper in. It's in the news." She tosses a newspaper onto the bed with an article circled out.`);
    scene.actions([
      { label: 'Read the newspaper', handler: (st: GameState) => {
    scene.img('images/system/1_openings/4_csb/13.jpg');
    scene.text('There is a news report about a teenage boy whose remains were found by a group of hunters half-eaten by wolves.');
    // TODO-QSP: dynamic text: You give Tatiana a bewildered stare. She has an enigmatic smile on her face. "We...
    scene.text(`You give Tatiana a bewildered stare. She has an enigmatic smile on her face. "Well, I am a magician. That's something I can do. Reinhold has definitely lost the trail; there's no reason he should suspect the power been passed to a girl. You took ${((s as any).pcs_firstname ?? 0)}'s place, and she took yours. The body in the woods was a perfect copy of your old self, from your absorbed amulet energy down to the placement of every single hair."`);
    scene.text('"Anyway, your \'mother\' will be by in a few hours to pick you up; she thinks that you\'ve got some amnesia from a head injury and mental trauma from seeing your \'boyfriend\' get eaten alive by wolves, so you should probably be covered for any slip-ups. Just play the part of the traumatized little schoolgirl and it should be all good. Have fun."');
    scene.text('She gets up and heads to the door, opening it up to reveal a tall man with red hair and face tattoos. "Come on, Gustav, let\'s go." The pair disappear into the hall, leaving you with your thoughts.');
    scene.actions([
      { label: 'Think about your situation', handler: (st: GameState) => {
    scene.img('images/system/1_openings/4_csb/14.jpg');
    scene.text('You aren\'t sure what to think. On the one hand, you\'ve lost your manhood forever. You\'ll have to deal with skirts and periods and makeup and babies and all other sorts of girly things. On the other, you\'ve been granted a clean slate. No more beatings, no threats of becoming homeless, and you\'re gaining the family you never had. Plus, you\'re going to be able to spy on girls in the locker room without them screaming this time.');
    // TODO-QSP: dynamic text: Whining about the situation isn't going to change it, so you resolve to deal wit...
    scene.text(`Whining about the situation isn't going to change it, so you resolve to deal with it one day at a time, living your new life as ${((s as any).pcs_firstname ?? 0)} "${((s as any).pcs_nickname ?? 0)}" ${((s as any).pcs_lastname ?? 0)}.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_end', 'sg_tg', 2
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
    case 'set_random_uni_course':
      enterSetRandomUniCourse(s, scene);
      break;
    case 'set_random_uni_electives':
      enterSetRandomUniElectives(s, scene);
      break;
    case 'sg_tg':
      enterSgTg(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const intro_end: LocationDef = {
  name: 'intro_end',
  title: 'Enrollment Office',
  region: 'other',
  enter: enter,
};
