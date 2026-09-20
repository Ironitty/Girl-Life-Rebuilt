import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterDreams(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'npcStat', 'A144');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Anushka\'s Dream</b></center>');
  scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
  scene.text('As the two of you sit on her bed and talk about a variety of topics, she suddenly stops, her eyes widen and you can tell she just remembered something she thought was important. She grabs your thigh with her hand. "Oh my god, I totally forgot I hadn\'t told you about this dream I had the other night."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask to hear about the dream', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('A little surprised by her reaction, it makes you curious. "What was the dream about?"');
    scene.text('She shrugs a bit. "It was weird, I have been having a lot of weird dreams lately." Then she pauses a moment as if to consider why she might be having a lot of weird dreams.');
    if (((st as any).anushkaQW ?? 0)?.['dreams'] === 0) {
      scene.actions([
        { label: 'Listen to her dream', goto: ['anushka_dreams', 'dream1'] },
      ]);
    } else {
      if (((st as any).anushkaQW ?? 0)?.['dreams'] === 1) {
        scene.actions([
          { label: 'Listen to her next dream', goto: ['anushka_dreams', 'dream2'] },
        ]);
      } else {
        if (((st as any).anushkaQW ?? 0)?.['dreams'] === 2) {
          scene.actions([
            { label: 'Listen to her third dream', goto: ['anushka_dreams', 'dream3'] },
          ]);
        }
      }
    }
  } },
    { label: 'Ignore her dream', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('Even though she seems kinda excited about her dream, you really don\'t care and have no real desire to know what other people dream about. "Oh, yeah I get weird dreams sometimes too." Then you change the subject to something you saw online, she either wasn\'t that interested in talking about her dream or she gets that you have no interest and doesn\'t mention it again.');
    if (((st as any).region ?? 0) === 'pav') {
      scene.actions([
        { label: 'Keep talking', goto: ['anushkachat', 'chat'] },
        { label: 'Stop talking', goto: ['anush_bedroom', 'anushroom'] },
      ]);
    } else {
      scene.actions([
        { label: 'Keep talking', goto: ['anushkachat_city', 'chat'] },
        { label: 'Stop talking', goto: ['anush_bedroom_city', 'anushroom'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterDream1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A144');
  ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['dreams'] = 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Anushka\'s Dream</b></center>');
  scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_one/1_hike.jpg');
  scene.text('"Anyways, you came over and wanted me to go to the village your grandparents live in and go for a hike in some woods near there." Then she talks about how you guys packed up, took the train up to Gadukino, stopped by to see your grandparents for a bit. Then set off into the woods on a hike together. "After a couple of hours we stopped, I asked you why and you said you didn\'t remember this area. So I asked if we was lost and you said maybe then I started to get annoyed with you because you said you knew the area really well."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Listen', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_one/2_lost.jpg');
    scene.text('"So I pulled out my phone to pull up a map and maybe see if we could find out where we was but I had no signal and then you tired and the same thing. After a bit of a discussion we decided to try and turn around and head back, only to end up right back where we was when we got lost. We walked for hours and started to hear noises in the woods around us but we could never see what was making the noise." She tells you, but you can tell by how animated she is, there is a lot more to the story than just getting lost.');
    scene.actions([
      { label: 'Then what?', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_one/3_night.jpg');
    scene.text('"Then what?" You ask her, as you start to get into the story a bit.');
    scene.text('She smiles, maybe appreciating that you seem to actually be interested. "After awhile the noises got worse and even worse than that the sun started to set. By that point we was both getting a bit scared, especially once you said you heard from your Grandma there there is wolves in these woods."');
    scene.actions([
      { label: 'What happened next?', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_one/4_shelter.jpg');
    scene.text('"What happened next?" you ask her.');
    scene.text('"We decided to build a shelter for the night until morning so we didn\'t end up trying to wander around in the middle of the dark. We found a fallen try and used it with it limbs as a base for our shelter. Breaking off other branches to make a tree limb tent thingy, anyways once we finished we was exhausted. We crawled inside of our shelter, ate the last of our snacks and drank the last of our water we had, before going to bed.');
    scene.actions([
      { label: 'What happened the next morning?', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_one/5_alone.jpg');
    scene.text('"What happened the next morning?" you ask her.');
    scene.text('She shakes her head. "Nothing, well nothing yet." You give her a confused look. "You are jumping ahead in my dream?"');
    scene.text('Still confused you tell her. "What?"');
    scene.text('She laughs a bit. "Something happened in the night silly."');
    scene.text('You nod a bit, now getting it. "Oh…"');
    scene.text('She shakes her head a bit. "Anyways I suddenly woke up, my heart pounding like something had woke me up. I turned to ask you if you heard something, except you wasn\'t there. So I crawled out of our shelter figuring you just went to pee. But then I couldn\'t see you anywhere, I even called your name and nothing."');
    scene.actions([
      { label: 'What did you do?', goto: ['anushka_dreams', 'dream1_two'] },
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

function enterDream1Two(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Anushka\'s Dream</b></center>');
  scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_one/6_sneak.jpg');
  scene.text('"Did you go find me?" you ask her.');
  scene.text('She rolls her eyes slightly as you ask her. "Stop rushing the story about my dream, anyways. I went out looking for you, but I kept hearing noise of something moving around so I started sneaking to try and stay hidden from what ever it was while I looked for you. At one point I had to stop as the sounds around me grew and grew and I was sure what ever it was, was about to attack me. But then it suddenly stopped, just as I started to move again, I finally found you."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Listen', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_one/7_found.jpg');
    scene.text('Not wanting to interrupt her this time you just stay silent as she tells you about her dream. "I found you tied to a try naked, gagged with rope and one leg tied to another tree keeping it off the ground with your legs spread."');
    scene.text('Not what you was expecting her to say. "Wait! Is this a weird sex dream?"');
    scene.text('She looks at you a little annoyed. "Shut up… maybe, but shut up."');
    scene.text('You close your mouth and let her go back to tell you about her weird sex dream.');
    scene.actions([
      { label: 'Stop talking and let her keep going', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_one/8_man.jpg');
    scene.text('You decide not to ask more questions or comments but can\'t help but grin a bit in amusement as she continues.');
    scene.text('"I was stunned, I mean of all the things that was not what I was expecting to find. I was thinking something had killed you or the wolves got you or something. Just as I was about to come out of the bushes and free you, I hear the noise again. So I waited to see if I could find out what it was. Just then a man walked out of the woods right up to you, you struggled but was unable to do much. The big man came up behind you at first and started to fondle you, then he pulled out his dick and started to fuck you. I must have gasped or something, because he suddenly stopped and looked right at me. He started towards me, I freaked out." She tells you.');
    scene.actions([
      { label: 'Listen', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_one/9_run.jpg');
    scene.text('"So I started running away, I mean he was twice my size. No way I would be able to fight him, plus something about him was just scary, I don\'t know why but I was scared of him. So I ran away as fast as I could. I could hear him right behind me, I kept stumbling and unable to run flat out as he kept getting closer." You have had dreams like that, where the scary thing chases you but you can\'t outrun it, as something always happens to slow you down, but you keep listening to her talk.');
    scene.actions([
      { label: 'Keep listening', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_one/10_caught.jpg');
    scene.text('"Suddenly he grabbed me from behind and threw me down on the ground hard, hard enough it knocked the air out of me and hurt a lot. I was dazed laying there trying to catch my breath, before he grabbed me rolling me onto my back. I tried to push him away, but he grabbed both my hands, putting them over my head and easily pinned them to the ground with one hand. With his other he started to choke me, I couldn\'t breath and no matter what how much I struggled I couldn\'t get free, slowly I started to pass out, unable to breath." Now her dream sounds more like a scary dream than a sex dream, maybe you misjudged her dream, as you start to get into it again. Her telling making it sound scary and all to real.');
    scene.actions([
      { label: 'Say nothing as she continues', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_one/11_stripped.jpg');
    scene.text('"He stops suddenly just before I pass out. I am fading on the edge of consciousness, when I realize he is stripping my clothes off like he did to you. He had also let go of my hands, maybe he though I was out, so I started fighting against him. He just laughs as I struggle to push him off, and keep him from stripping me. Then he roughly shoves his fingers in my pussy, I scream. He covers my mouth and nose with one hand while his other one keeps fingering me. I struggle but again I am unable to breath and slowly things get dark as I pass out."');
    qspCall(st, 'arousal', 'erotic', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'What did you do?', goto: ['anushka_dreams', 'dream1_three'] },
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

function enterDream1Three(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Anushka\'s Dream</b></center>');
  scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_one/12_naked.jpg');
  scene.text('"When I finally come too, it is still night. But now I am completely naked, laying on my back spread eagle. I try to move but realize my hands and feet are tied to stakes in the ground, making it impossible for me to really move. Then I hear something, it sounds like faint moans and a mans laugh. Then for some reason I knew he had returned to you to finish what he started and at least for the moment I was alone, so I started to struggle and get free. It felt like hours I struggled, finally it felt like one of the stakes started to work a little free. But that\'s when I realized I no longer heard you guys, moments later I heard the sounds of someone walking through the woods and getting closer to me."');
  qspCall(s, 'arousal', 'erotic', 1);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Listen some more', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_one/13_approached.jpg');
    scene.text('"I started struggling really hard then, knowing he was on his way back to me. Before I could get free walks up above my head, stopped with one foot on each side of my head. I look up at him and then notice his face is all messed up kinda like a monster. I scream and try once more to pull the stakes free, he only laughs then walks over and stomps on the only one I had got a little free driving it deeper into the ground. He circles around me stomping on each of the stakes driving them deep into the ground, I know way to deep now for me to ever get them free."');
    qspCall(st, 'arousal', 'erotic', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Weird but ok', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_one/14_violated.jpg');
    scene.text('"Once he stomps the last one deep into the ground, he circles around me to my side, putting one knee down between my legs. Suddenly he plunges his fingers back in me, I scream and he covers my mouth again. Then he calls me a slut and comments how wet I am, he pulls out his dick and then fucks me… which oddly felt good… in a fucked up scary way." She just shrugs at the look you give her.');
    qspCall(st, 'arousal', 'erotic', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'What happened next?', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_one/15_choked.jpg');
    scene.text('"After he finishes fucking me he puts one kneed on my chest, reaching up with both hands and starts choking me. I struggle for all I am worth as I am unable to breath until the world slowly fades to black, the last thing I see his his monstrous face staring at me, laughing." She shakes her head a bit. "I really felt like I was dying at that moment, anyways."');
    qspCall(st, 'arousal', 'erotic', 1);
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Keep listening', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_one/16_wakeup.jpg');
    scene.text('"I so thought I was dying, but suddenly I wakeup. I am laying on my back in the woods fully dressed again and it is morning. I raise my head up to look around and see nothing and hear nothing. Suddenly I hear the sounds of someone running in the woods, I start to get up, as I glance in the direction of the sound, I see him running at me again."');
    scene.actions([
      { label: 'What happened next?', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/wakeup1.jpg');
    scene.text('"Then I woke up, this time in this bed, my heart was racing. I turned on the light and looked around. I was all alone and there was no sounds from the apartment. I have to say it really kinda freaked me out, well most of it anyways, so what do you think?"');
    scene.text('You shake your head a bit, I mean what can you say to something like that. "What do I think? I think you have some pretty fucked up dreams, maybe lay off the drugs." You tell her with a laugh.');
    scene.text('She shoves you. "Fuck you bitch!"');
    scene.text('You both laugh about that and then talk about a dream you head for a bit.');
    scene.actions([
      { label: 'Keep talking', goto: ['anushkachat', 'chat'] },
      { label: 'Stop talking', goto: ['anush_bedroom', 'anushroom'] },
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

function enterDream2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A144');
  ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['dreams'] = 2;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Anushka\'s Dream</b></center>');
  scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_two/darkness1.jpg');
  scene.text('"I suddenly found myself in complete darkness, or near enough, wearing a black nighties, with matching black panties, and some high heeled shoes for some reason. I could see myself but everything around me was pitch black and I couldn\'t tell where the light was coming from. I walked around a bit, then called out into the dark and heard nothing. It seemed like I was all alone forever." She tells you are she recites her dream describing the darkness as thick and overbearing almost like it had substance to it.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Listen', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_two/darkness2.jpg');
    scene.text('"Until I suddenly heard something soft and muffled, it sounded like someone walking. I looked around and couldn\'t see anything, it would get louder and then softer like someone was coming near me and then going away. After a bit I could hear breathing really close to me, I started to run but I couldn\'t see where I was going and there seemed to be nothing and no where to run. I couldn\'t even tell if I was moving at all." She tells you painting a vivid image in your mind by her descriptions.');
    scene.actions([
      { label: 'Then what?', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_two/darkness3.jpg');
    scene.text('This one sounds maybe scarier than the last one, but then you remember what the last one turned into, but you hold your tongue and let her tell you about her dream. "Suddenly I hear breathing right next to me and I turn to see this scary clown right beside me, he wasn\'t there a moment ago. I screamed and he made this deep dark unsettle growling like sound. I quickly back away and then I see a faint outline of a doorway and I run towards it."');
    scene.actions([
      { label: 'What happened next?', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_two/darkness_run1.jpg');
    scene.text('"I run into the doorway and then there is faint light all around, it seems to be some old building or something. I don\'t know where it was, but it had a long hallway with doors and archways, I paused for a moment trying to decided where to go, then I looked back and there he was standing at the end of the hall where I entered holding a bunch of balloons." She tells you.');
    scene.actions([
      { label: 'What did you do?', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_two/darkness_run2.jpg');
    scene.text('"I screamed and then took off running, I was running so fast I ran into the walls when they would suddenly turn. I ran until I started to run out of breath. I looked back and didn\'t see him, so I stopped to catch my breath, when I noticed there was a hole in the roof above me that seems to just lead to the abyss or something." She provides a surprising amount of details about how the placed look, that you can easily picture it in your mind.');
    scene.actions([
      { label: 'Did you escape?', goto: ['anushka_dreams', 'dream2_two'] },
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

function enterDream2Two(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Anushka\'s Dream</b></center>');
  scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_two/darkness_run3.jpg');
  scene.text('"Once I caught my breath and calmed down a bit, so I could hear something other than my own breathing and beating heart. I could hear faint foot steps, I know it was the clown and that he was looking for me, but I also knew this was some kind of maze. So I calmed myself down and start to crouch as I quietly made my way forward, pausing to listen for him to avoid him. After a bit his foot steps got further and further away, finally I come to a doorway and snuck up to it and peer around the doorway." She says in dramatic tones.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Listen more', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_two/darkness_run4.jpg');
    scene.text('"There he was standing right around the edge of the door. He stares at me and starts laughing this dark and evil sound hysterical laugh, I can\'t move. I was frozen in place with fear. Every time I blinked it seemed he got closer and closer to me until he was right in front of me and I was able to suddenly move again." She describes him in detail.');
    scene.actions([
      { label: 'Then what?', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_two/darkness_run5.jpg');
    scene.text('"I turn and run down the hall, suddenly I hear him laughing behind me and I screamed. I see a door I hadn\'t seen before, a red door. I run to it and jerk it open, before me is a grey room, with a red table thing in it, with graffiti all over, but no clown so I went inside and close the door. I noticed the room is well lite as well." She tells you in great detail.');
    scene.actions([
      { label: 'What happened next?', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_two/darkness_run6.jpg');
    scene.text('"I catch my breath again and calm down once more and that\'s when I realize there is no doors or hallways leaving this room, when I turn to look where I came, from there was nothing by a solid wall. Not knowing what else to do, I slowly walked over to the long narrow table with padding on top, it reminded me a bit a massage table, in red leather." She says with a shrug as if to say she has no clue why the table would be there.');
    scene.actions([
      { label: 'What did he do?', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_two/darkness_run7.jpg');
    scene.text('"It was then I noticed the clown once more standing just behind me near the wall, but somehow he looked a bit less scary in the light than he has looked in the darkness or the dim light hallways. Creepy and unsettling yes but not as scary. He didn\'t seem to like that I didn\'t scream or run this time." She explains how he looks to you in so much detail you can picture him in your mind.');
    scene.actions([
      { label: 'What did you do?', goto: ['anushka_dreams', 'dream2_three'] },
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

function enterDream2Three(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Anushka\'s Dream</b></center>');
  scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_two/darkness_run8.jpg');
  scene.text('"Sudden he starts laughing louder and louder, honking a little horn at me louder and louder. It starts freaking me out but I have no where to run so I just shrink back from him and try covering my ears to block out the sound, not knowing what else to do. That seems to make him happy the more I got scared the happier he seemed to get." Describing it to you, you can picture it in your mind.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep listening', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_two/darkness_run9.jpg');
    scene.text('"Then suddenly I stopped being scared of him, I don\'t know if it was because I noticed he got more happy when I was scared or if because I realized he was just a clown with a little horn. So I started to laugh as well, he stopped laughing and I kept laughing. He asked me what was so funning and I pointed at his little horn and told him I hopped he wasn\'t using that to over compensate for a little dick. He really didn\'t like that and asked me if I thought that was funny and I told him yes and kept laughing at him." You can actually picture her doing just that to someone, turning the tables and mocking them.');
    scene.actions([
      { label: 'That\'s weird', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_two/darkness_run10.jpg');
    scene.text('"He growled in a lot tone trying to sound scary again, but I couldn\'t stop laughing. So you want to play do you? Then he snapped his fingers and suddenly I was laying on the table in my shoes and just panties, otherwise I was naked, with him leering at me in a different way. I was mostly confused how I was suddenly almost completely naked to be worried." She explains.');
    qspCall(st, 'arousal', 'erotic', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'What happened next?', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_two/clown_bj1.jpg');
    scene.text('"Then he pushes me over until I am laying on my stomach, he walks around up to my head and pulls me partially off the table. While I am still coming to grips with how I moved and lost my clothes without actually taking them off, he pulls out his dick and shoves it in my mouth. Then he starts sounding like a typical guy, saying oh you think it is small now, blah blah blah. For some reason, I don\'t know why I start sucking his dick while he goes on and on." She explains.');
    scene.text('You smirks. "Maybe cause you like sucking dicks?"');
    scene.text('She flips you off as she continues telling you about her dream.');
    qspCall(st, 'arousal', 'erotic', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'What did you do?', goto: ['anushka_dreams', 'dream2_four'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDream2Four(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Anushka\'s Dream</b></center>');
  scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_two/clown_bj2.jpg');
  scene.text('"I start stroking his dick with my head as I stuck, mostly tuning out what he is saying, but he just won\'t shut up." She says as if she found him annoying and frustrating. "Anyways then he places his hand on the back of my head and starts shoving his dick deeper and deeper into my mouth, as I suck him off."');
  qspCall(s, 'arousal', 'erotic', 1);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Listen', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_two/clown_bj3.jpg');
    scene.text('"Like every guy he holds my head and starts shoving his dick down my throat making me gag, even guys in my dreams like to do that." She tells you, you can\'t tell if she is annoyed or amused by that or likely a bit of both.');
    if (((st as any).spellKnown ?? 0)?.['penisenvy'] === 1) {
      scene.text('You smile a knowing smile. "Because it feels fucking amazing."');
      scene.text('She gives you a puzzled look. "How would you know how it feels to shove a dick down some girls throat?"');
      scene.text('You start to respond then snap your mouth shut as you realize she doesn\'t know that you can gives yourself a dick with magic. "Oh… well that is what the guys all say and I have read about it, supposedly it really feels amazing…" You awkwardly trail off, hoping she just accepts it.');
      scene.text('She shakes her head slightly. "Anyways."');
    } else {
      scene.text('You nod in agreement, it certainly seems they all are that way. "I am use to it so it\'s didn\'t really bother me, just you know…"');
    }
    qspCall(st, 'arousal', 'erotic', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Listen to her tell you about her porn dream', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_two/clown_strip.jpg');
    scene.text('"After a bit he pulls his dick out of my mouth and walks to my side, taking his clown clothes off. He then takes off my shoes, followed by sliding my panties down my legs, as he slowly slips them off. He rolls me over and pulls my butt to the edge of the table and steps up between my legs." You know where this is going, you wonder briefly if she ever has any dreams that doesn\'t eventually turn into a sex dream.');
    qspCall(st, 'arousal', 'erotic', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'You know what comes next', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_two/clown_fuck1.jpg');
    scene.text('"He steps between my legs and slips his dick into my soaking wet pussy. He starts acting like this is unpleasant for me, like he is punishing me, but the more he fucks me the harder I moan." She explains.');
    qspCall(st, 'arousal', 'erotic', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'What happened next?', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_two/clown_fuck2.jpg');
    scene.text('"Then he starts getting mad again and looks at me and tells me, stop enjoying this. You arn\'t suppose to enjoy this, as he keeps fucking me. I just smile at him and tell him to fuck me harder." She says with a giggle.');
    qspCall(st, 'arousal', 'erotic', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'What happened next?', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_two/clown_fuck3.jpg');
    scene.text('"Then he snarls as he pulls out and flips me over and drives his dick in my pussy and starts trying to pound me as hard and fast as he can. I start screaming for him to fuck me harder and he just gets madder and madder at the situation." She seems pleased and amused about her dream clown was getting mad.');
    qspCall(st, 'arousal', 'erotic', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'What did he do next?', goto: ['anushka_dreams', 'dream2_five'] },
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

function enterDream2Five(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Anushka\'s Dream</b></center>');
  scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_two/clown_anal1.jpg');
  scene.text('"Suddenly he yells at me, you think your funny? Lets see how funny you find this. He said as he pulled his dick out of my pussy and shoved it up my ass. It kinda hurt at first and I hissed in pain a bit and tensed. Then he started getting happy again, saying all kinds of stuff, but I was already starting to like it, but he didn\'t notice yet." She says with a slight laugh.');
  qspCall(s, 'arousal', 'erotic', 1);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Listen', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_two/clown_anal2.jpg');
    scene.text('"Then I looked back at him over my shoulder and tell him. Yes fuck my ass, pound it like a pussy. He just gives me this look of disbelief, like he is just shocked, I have to start rocking back into him to keep him fucking me. Then he says. Are you fucking kidding me? Which I respond with, yes fuck my little ass harder, please."');
    qspCall(st, 'arousal', 'erotic', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Then what?', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_two/clown_anal3.jpg');
    scene.text('"Then he just gets this look of annoyance on his face as he says. Fine what ever, I give up. So he fucks my ass for me until I have a orgasm that rocks my whole body. As I shakily drop to the ground before my legs give out, as I sit on the ground he comes over and starts jerking off over my face." She says shaking her head.');
    qspCall(st, 'arousal', 'erotic', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'What happened next?', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_two/clown_cum.jpg');
    scene.text('"He tells me to open my mouth and he starts cumming in my mouth, on my tongue and on my face. His cum is sweet like candy. I swallow it all down and lick it off my face. I tell him I want more, then he starts getting dressed and complaining, saying. Fuck this, I\'m done with this shit. Why isn\'t anyone scared anymore and he went on and on about how messed up the world is now." She says shaking her head.');
    qspCall(st, 'arousal', 'erotic', 1);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'So he just left?', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_two/wakeup_balloon.jpg');
    scene.text('"Then I suddenly wakeup in bed, right here. I sit up and look around and that is when I realized it was a dream, but then suddenly I realize I am holding the red balloon he was holding in my dream. So I called out to see if he was around to fuck me again." She says with a giggle.');
    scene.actions([
      { label: 'What happened next?', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/wakeup1.jpg');
    scene.text('"Then I woke up again in bed. It took me a bit to realize I really was awake then and not just dreaming inside of a dream like Inception or what ever that movie was called. Anyways I was so turned on, my panties was soaked. I had to rub one out before I could go back to sleep." She says as she finishes her story.');
    scene.text('You shake your head slightly. "There is something wrong with you, you know that." That gets a laugh from both of you, as you now share one of the sex dreams you last had with her.');
    scene.actions([
      { label: 'Keep talking', goto: ['anushkachat', 'chat'] },
      { label: 'Stop talking', goto: ['anush_bedroom', 'anushroom'] },
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

function enterDream3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A144');
  ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['dreams'] = 3;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Anushka\'s Dream</b></center>');
  scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_three/candy1.jpg');
  scene.text('"I got a golden ticket in a candy bar and got invited to the factory where they make them, with a bunch of other people, when we got there this guy, the owner. He was in this a kinda burgundy suit with a black top hat." She starts telling you.');
  scene.text('You interrupt her as this sounds a lot like Willy Wonka. "You mean like in Willy Wonka?"');
  scene.text('She pauses a moment and then nods. "Yeah, I had recently watched the really old one, anyways he started the whole thing about not touching things, opening doors etc. It was at this point I noticed I was wearing some silly childish red dress, knee socks, and a fur jacket. The same kind of shit my mom use to make me wear when I was little."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Listen', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_three/candy2.jpg');
    scene.text('"After a long boring introduction and list of rules, which I admit I don\'t think I really paid much attention to, he finally started leading us single file down a hallway to the factory. As we did we passed this door and it sounded like there was laughing on the other side and I couldn\'t help myself. I just had to open it."');
    scene.actions([
      { label: 'Why?', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_three/candy3.jpg');
    scene.text('"As soon as the door opened this blue ball shot out and hit me right in the face. It didn\'t really hurt actually and it smelled like candy, it bounced off my face and started bouncing around, the owner came up to try and catch it."');
    scene.actions([
      { label: 'What happened next?', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_three/candy4.jpg');
    scene.text('"But just as he was about to grab it, the blue candy ball thingy shot right back into the room, which once I looked was blindingly white inside and now I know I heard laughter at that point. It sounded like who ever it was, was having a lot of fun, but then the owner grabbed the door and closed it quickly. He admonished me for opening it and told me next time there would be a punishment. But he said it in a funny way, like the punishment would be more fun than bad, you know."');
    scene.actions([
      { label: 'Then what?', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_three/candy5.jpg');
    scene.text('"Anyways then we walked and he talked and he pointed out a lot of stuff, occasionally opening a door to show something, but most of them he left closed and honestly I started to get really bored and was thinking about leaving. Until he came to a door and then pointed out the rainbow sign that said top secret. One of the others asked if we could see inside and he said no, that it wasn\'t safe to even look inside. Then he lead the group on, but I paused to look at the door. I so badly wanted to open it, so I hung back and waited for the rest to walk around the next corner.');
    scene.actions([
      { label: 'Just listen to her dream', goto: ['anushka_dreams', 'dream3_two'] },
      { label: 'Interrupt her with you opened it right', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('You interrupt her. "You just got warned and hit in the face with a candy blue ball. Why would you want to open it?"');
    scene.text('She shrugs. "I don\'t know, I just did. This was a dream, and a weird one… anyways you want to hear about it or not?"');
    scene.actions([
      { label: 'Yes', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('You nod your head slightly apologetically. "Sorry please continue."');
    scene.text('She smirks a bit letting you know she wasn\'t really that upset. "Ok then."');
    scene.actions([
      { label: 'Listen to her dream', goto: ['anushka_dreams', 'dream3_two'] },
    ]);
  } },
      { label: 'Not really', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A144', 'loathe');
    qspCall(st, 'stat', '');
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('You shake your head no. "No not really, I can tell this is just going to be another sex dream."');
    scene.text('She frowns and you can tell you just really annoyed her. "Fine… whatever."');
    scene.actions([
      { label: 'Keep talking', goto: ['anushkachat', 'chat'] },
      { label: 'Stop talking', goto: ['anush_bedroom', 'anushroom'] },
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
  scene.build();
}

function enterDream3Two(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Anushka\'s Dream</b></center>');
  scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_three/candy6.jpg');
  scene.text('"Just as I was about to open the door, one of the older guys says from behind me. He said not to open it. I nearly jumped out of my skin, I didn\'t know he was there or how he got there. I turn around and shushed him and told me to be quiet. We argue for a bit and I finally tell him to fuck off and mind his own business, then he finally left in a huff."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Listen more', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_three/cand7.jpg');
    scene.text('"I opened the door and a bunch of bubbles came out and they smelled sweet. I caught one with my mouth and it was the best tasting sweet I ever had. I wasn\'t sure what they was or where they came from, the room looks like it was empty beyond the door."');
    scene.actions([
      { label: 'Then what?', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_three/candy8.jpg');
    scene.text('"The room was bare and solid white, then I noticed a huge lollipop in the room. I stepped in and picked it up and started licking it at once, it was so sweet and tasted amazing." She pauses a moment and shakes her head. "I really don\'t know why, I mean normally I don\'t eat many sweets but for some reason in my dream I was obsessed with them."');
    scene.actions([
      { label: 'What happened next?', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_three/candy9.jpg');
    scene.text('"As I licked the lollipop other giant candies and other sweets started to appear in the room. I stopped and looked around, as I was overwhelmed with a desire to try them all, but I couldn\'t decide which one I wanted to try next."');
    scene.actions([
      { label: 'What did he do?', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_three/candy10.jpg');
    scene.text('"I had just picked up a giant candy ball, when the door opened. In walked the owner and several other guys dressed in white and orange all with green hair. Then he looked at me and with a grin on his face and happy tone, he said. I told you not to come in here, you disrupted my workers, now you have to get them to relax so they can go back to work and then I will have to punish you. He said in some weird happy sing song voice that made it sound like it was going to be great. It was at this point I noticed my fur jacket was gone as well, I don\'t know what happened to it or when I removed it."');
    scene.actions([
      { label: 'What did you do?', goto: ['anushka_dreams', 'dream3_three'] },
      { label: 'Interrupt her again about her sex dream', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('You interrupt her. "This is another sex dream, do you ever have dreams about anything else?"');
    scene.text('She frowns. "Who said anything about sex?"');
    scene.text('You snort. "Is the next part you have sex with all of them?"');
    scene.text('She gets flustered for a moment. "I… it\'s… what ever, yes. Do you want to hear about it or not?"');
    scene.actions([
      { label: 'Yes', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('You sigh slightly, you hate to admit it, but you do. "Yes, Sorry please continue with your sex dream."');
    scene.text('She shoves you playfully at your response. "Fuck you."');
    scene.actions([
      { label: 'Listen to her sex dream', goto: ['anushka_dreams', 'dream3_three'] },
    ]);
  } },
      { label: 'Not really', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A144', 'loathe');
    qspCall(st, 'stat', '');
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('You shake your head no. "No not really, I\'m just not that interested in hearing about sex dreams."');
    scene.text('She frowns and you can tell you just really annoyed her. "Fine… whatever."');
    scene.actions([
      { label: 'Keep talking', goto: ['anushkachat', 'chat'] },
      { label: 'Stop talking', goto: ['anush_bedroom', 'anushroom'] },
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
  scene.build();
}

function enterDream3Three(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Anushka\'s Dream</b></center>');
  scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_three/candy_fuck1.jpg');
  scene.text('"Next the owner tells me. Now get down on your knees. So I do, then he says. Now close your eyes and open your mouth, we have a sweet treat for you."');
  scene.text('You roll your eyes slightly, you just can\'t help it, you know the sweet treat is going to be a dick. "The treat was a dick, wasn\'t it?" You comment.');
  scene.text('She gives you a mildly playfully annoyed look and shoves you slightly. "Shut up bitch, and let me tell you the story." Then she continues. "Next thing I know one of the minions shoves his dick in my mouth. It tastes sweet like candy, then he grabs the back of my head and just starts throat fucking me. While the rest have crowded around me."');
  qspCall(s, 'arousal', 'erotic', 1);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Listen', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_three/candy_fuck2.jpg');
    scene.text('"Next another one of the minions grabs my head and pulls my mouth away from the first one and then shoves his dick in my mouth, while the first one pulls up my hand to jerk him off. The rest all pull out their cocks as well. The more I suck dick the sweeter the dicks start to taste. Each of the minion eventually shoves their cocks in my mouth and make me suck them."');
    qspCall(st, 'arousal', 'erotic', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Listen to her tell you about her porn dream', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_three/candy_fuck3.jpg');
    scene.text('"Then the owner says. Stop. The minions who\'s dick is in my mouth suddenly pulls his dick out of my mouth. I turn and look around at that point and see the owners cock hanging out of his pants, when he see\'s me look he says. That\'s right, now suck my dick little girl. The minions start shoving my head towards his dick, I have no choice but to obey and soon his dick is in my mouth as I jerk off the minions. His cock taste different, more… well like every other guys dick normally tastes."');
    qspCall(st, 'arousal', 'erotic', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Just listen', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_three/candy_fuck4.jpg');
    scene.text('"After a couple of minutes of sucking the owners dick, he pulls his cock out of my mouth. Then pulls me up until I am standing again, as he starts pushing my head back down just as quick. This time the minions are holding my legs and hips, so I can\'t squat back down, so the owner forces me to bend over all the way until my hands are touching the ground as I stand. The minions let go of me, as he owner pulled my red dress up, as one of the minions grabbed my panties and slipped them off. The owner kneeled down next to me as he said. Lets see if that tight little pussy of yours can calm them down. Just as he said that, I felt one of the minions slip is fat cock in my pussy as he started to fuck me."');
    qspCall(st, 'arousal', 'erotic', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Listen to the Willy Wonka porn parody dream', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_three/candy_fuck5.jpg');
    scene.text('"As the minion fucked me, the owner got up. The other three minions crowded around me, one of them stuck his dick in my mouth with the other two grabbed my hands and made me jerk them off. After a couple of minutes they all stopped and switched positions until all four of them got a turn fucking me."');
    qspCall(st, 'arousal', 'erotic', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'What happened next?', goto: ['anushka_dreams', 'dream3_four'] },
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

function enterDream3Four(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Anushka\'s Dream</b></center>');
  scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_three/candy_fuck6.jpg');
  scene.text('"As the last one was fucking me the owner finally spoke up again. Move aside. As he said that, I felt the dick of the minion that was fucking me, slip out of my pussy. Moments later another cock was violently shoved in my pussy, making me moan around the dick in my mouth. The owner grabbed my hips and started pounding me hard and fast, as he said. Is this all you was hoping for, you little sneak? Hmmm? You enjoying seeing behind the scenes, going in the back door of our secret lab? Then he giggled suddenly, which turned into a high pitched laugh, which made the minions all join in, as he kept pounding me. Then he pulled almost completely out of my and slammed his cock balls deep into my pussy with each of his next words. Back… door… that… gives… me… a… wonderful… idea…"');
  qspCall(s, 'arousal', 'erotic', 1);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Listen', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_three/candy_fuck7.jpg');
    scene.text('"He suddenly pulls his dick out of my pussy and pulls me up. Making the minions dick slip out of my mouth as he stands me up again. Before I can even react he grabs my dress and pulls it up over my head and tosses it aside. Leaving me completely naked now other than my knee socks." She says like the thought of wearing little white knee socks just annoys her. "He grabs me and shoves me over the top of a over sized donut."');
    scene.text('"My hips are on the center of the donut as he forces me over until my face is against the ground. He takes off his clothes as he walks around and puts his foot on the side of my head to pin my head against the floor, I feel my legs get kicked apart as he says to his minions. Go on my Oompa-Loompas explore her chocolate factory uninvited like she explored ours. Then he laughed that high pitched maniacal laugh. As he did I felt the first dick slide between my butt checks and into my butthole, as the first of the Oompa-Loompa starts fucking my ass."');
    qspCall(st, 'arousal', 'erotic', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Listen to her anal fantasies', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_three/candy_fuck8.jpg');
    scene.text('"After a few minutes of this the first Oompa-Loompa pulls his dick out of my butt, as the owner removes his foot from the side of my head. They lift me back to standing as the first Oompa-Loompa sits down on a couch that wasn\'t there, they bend me over in front of him as he shoves his dick in my mouth." She looks like the thought of sucking a dick that was just in her ass is going to make her vomit. "But it doesn\'t taste nasty like you would think, it taste just like actually chocolate." She notices your look to this. "Yeah yeah I know, disgusting but like I said at the start it was a weird fucking up dream. Anyways as I am sucking his dick that taste like chocolate, the next Oompa-Loompa shoves his dick up my ass and starts fucking me."');
    qspCall(st, 'arousal', 'erotic', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'You know what comes next', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_three/candy_fuck9.jpg');
    scene.text('"After each of the Oompa-Loompas have taken a turn fucking my ass, the make me straddle the one sitting on the couch and ride his dick with my pussy, while another shoves hid dick in my mouth, a third starts fucking my ass again, while I jerk off the fourth one. All the while the owner is laughing in his high pitched maniacal laugh. Yes yes! Fuck all her holes my Oompa-Loompas, just like she deserves. Again after a bit they rotate until each one has taken a turn fucking each of my holes."');
    qspCall(st, 'arousal', 'erotic', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Keep listening', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_three/candy_fuck10.jpg');
    scene.text('"After I don\'t know how long the owner sits down naked on the couch as well, the two Oompa-Loompas by my head move away. Once my mouth is free of cock the owner grabs me by the hair and makes me start sucking his dick, while two of the Oompa-Loompas double penetrate me. The Oompa-Loompas take turns, one fucking my pussy while the other my ass, then they switch till each of the four has fucked both my holes again. The whole time the owner is making me suck his dick while he laughs tell me stuff like. That\'s it get it nice and wet with your slobber your going to need it."');
    qspCall(st, 'arousal', 'erotic', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'What happened next?', goto: ['anushka_dreams', 'dream3_five'] },
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

function enterDream3Five(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Anushka\'s Dream</b></center>');
  scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_three/candy_fuck11.jpg');
  scene.text('"He pulls his dick out of my mouth by pulling my hair back until my head goes far enough back as he says. Everyone out now! The Oompa-Loompas all quickly pull out of me the two that was fucking me at the time, the one under me lifting me to my feet, and all four of them quickly get dressed and rush out. I turn and look at the owner wondering what is going to happen next. As I wonder he stands up, grabs me by the hair and pulls me over to the wall. He shoves me face first against the wall. Lift your right leg with your hand, he tells me. I feel compelled to obey, so I reach down and pull my leg up. He uses one hand to smash the side of my face against the wall, while he uses the other to line up his dick and shove it up my ass, by this point my ass, hell all my holes are sore."');
  scene.text('"I whimper a bit as he starts to fuck my ass as I said. Please I learned my lesson, please stop fucking my ass, I say to him. He just laughs that same laugh as he says. Not yet but you will learn your lesson, oh you will. As he says it his voices changes from the happy high pitched voice to a very dark demonic sounding voice. I glance back and his voice distorts into some monstrous demonic looking face, followed by his body distorting into some demonic monster looking thing, as he grows in size and puts on lots of muscles. I feel his dick growing just like his body, as he keeps fucking my ass."');
  qspCall(s, 'arousal', 'erotic', 1);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'What happened next?', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_three/candy_cum.jpg');
    scene.text('"I couldn\'t take it anymore and just then he pulls his dick out of my ass. He steps away from me. Turn around, he says in that deep demonic voice. As I do I see this demon or maybe the devil standing there with this huge cock swinging between his legs, I mean like horse dick sized cock. Now kneel and open your mouth, he says. So I kneel and open my mouth in front of him. He starts to laugh as he says. Maybe next time you will be a good little girl and do as you are told, unless you like being fucked like a slut. As he does his voice changes back to the high pitched happy voice as his body changes back to the owner. He walks up and starts jerking off, just as he does he starts cumming, he cums on my tits, on my face and fills my mouth completely up, like a impossible amount of cum. It is not sweet though, it is dark and bitter tasting."');
    qspCall(st, 'arousal', 'erotic', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Keep listening', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/dream_three/candy_cum_hat.jpg');
    scene.text('"Swallow it like a good little girl. He says. So I swallow down the bitter cum, as I close my eyes to force it down. When I open my eyes he is gone, everything is gone. No owner, no Oompa-Loompas, no couch, no candy, hell my clothes where all gone other than my stupid knee socks. Just me and the empty white room I saw when I first opened the door. For a moment I was unsure if any of it was real or not, but then I realized I was wearing the owners hat, still covered in his cum, followed by hearing his faint high pitched maniacal laughter."');
    qspCall(st, 'arousal', 'erotic', 1);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'So he just left?', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/wakeup1.jpg');
    scene.text('"Then suddenly I woke up in my bed right here. I was soaking wet, I was so turned on." Then she shakes her head as if unsure what to think of her own dream. "So what do you make of it? What do you think it means or was it just a weird sex dream?" She asks you. You think about it for a bit It could be her subconscious warning her she is becoming a slut and you could tell her this, you don\'t think she would take it well. Maybe she is just really horny for some cock, maybe she hasn\'t gotten enough lately, you could tell her that. Or… or you don\'t really know. I mean what do dreams really mean if anything? You could tell her that.');
    scene.actions([
      { label: 'Tell her you have no clue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('You shrug your shoulder, you really have no clue why she has such crazy sex dreams. "I don\'t know, maybe you are eating something that is messing with you?" She gives you a doubtful look and you shrug again. "I really have no clue, I suppose you could maybe look it up on the internet or something and see what you can find if you are really curious." You tell her.');
    scene.text('She shakes her head slightly. "Nay, I was just curious what you thought." The two of you talk about dreams and what they might mean in general for a couple of more minutes, before you both run out of thoughts about dreams.');
    scene.actions([
      { label: 'Keep talking', goto: ['anushkachat', 'chat'] },
      { label: 'Stop talking', goto: ['anush_bedroom', 'anushroom'] },
    ]);
  } },
      { label: 'Tell her it is a warning', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A144', 'loathe');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('You think for a moment and notice all of her sex dreams are also partially scary dreams or partial nightmares. "Well considering they are at least partially nightmares or about being punished. I think it is your subconscious telling you, that you are going to far with all the sex and you need to cut back on it."');
    scene.text('She just rolls her eyes at you and gives you a annoyed look. "Yeah whatever, sorry I asked." Before you can respond more she changes the topic quickly about school, you can feel the conversation is a little forced, it is obvious she just doesn\'t want to talk about dreams anymore now, after a few minutes the conversation ends leaving you to carry the conversation more if you want, of maybe a break to look around is a good idea.');
    scene.actions([
      { label: 'Keep talking', goto: ['anushkachat', 'chat'] },
      { label: 'Stop talking', goto: ['anush_bedroom', 'anushroom'] },
    ]);
  } },
      { label: 'Tell her she is just horny for cock', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A144', 'like');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('You giggle slightly as you say. "I think you just love cock and want your holes fucked by cock twenty four seven."');
    scene.text('She gives a amused snort and shakes her head slightly. "Yeah maybe, I do love cock in my holes." She says in a tongue and cheek tone of voice.');
    if (((st as any).mc_inventory ?? 0)?.['strapon'] === 1  &&  ((st as any).strapNumber ?? 0) > 0  &&  ((st as any).strapNumber ?? 0) < 6  &&  ((st as any).npc_had_sex ?? 0)?.['A144'] > 0  &&  ((st as any).spellKnown ?? 0)?.['penisenvy'] === 1) {
      scene.text('You have your strapon in your pack, you know the spell to make it real. If she is so horny maybe you can fuck her with your magical dick. You are sure she would love it.');
      scene.actions([
        { label: 'Keep talking', goto: ['anushkachat', 'chat'] },
        { label: 'Stop talking', goto: ['anush_bedroom', 'anushroom'] },
        { label: 'Tell her you will be right back', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'castSpell', 'penisenvy');
    qspCall(st, 'stat', '');
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('You get up off the bed telling her. "I\'ll be right back, need to use the bathroom real quick."');
    scene.text('She nods slightly. "Alright, don\'t get lost." She says with a smirk.');
    scene.text('You take your pack with you and go into the bathroom, you put the strapon on under your clothes and then focus your mind and begin casting the spell to make the strapon into a real dick for you.');
    if ((!((st as any).penisEnvyVariable ?? 0))) {
      scene.text('You focus the magic, you feel it pouring through you and into the dildo and strapon harness. You feel the harness melding into your skin, moments later you feel the dildo start to twitch. Slowly you can feel the weight of the balls and cock hanging from you, as they become real. You look down and grin at your magically real dick, before putting it away and heading back to Anushka\'s room, so you can fuck her.');
      scene.actions([
        { label: 'Go show her your surprise', goto: ['anushka_dreams', 'dream3_fuck'] },
      ]);
    } else {
      scene.text('You feel the magic around you, you try and focus it into the dildo but, you lose focus. You feel the magic fade away. In frustration you take the harness back off and put it away. You spend a few moments checking your makeup and then you go back to her room and rejoin her on the bed. The two of you talk about dreams, cocks and boys for a bit longer before the conversation finally draws to a close.');
      scene.actions([
        { label: 'Keep talking', goto: ['anushkachat', 'chat'] },
        { label: 'Stop talking', goto: ['anush_bedroom', 'anushroom'] },
      ]);
    }
  } },
      ]);
    } else {
      scene.text('The two of you talk about cocks and boys for a bit longer before the conversation finally draws to a close.');
      scene.actions([
        { label: 'Keep talking', goto: ['anushkachat', 'chat'] },
        { label: 'Stop talking', goto: ['anush_bedroom', 'anushroom'] },
      ]);
    }
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

function enterDream3Fuck(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Anushka\'s Room</b></center>');
  if (((s as any).PCloSkirt ?? 0) > 0) {
    scene.img('images/pc/magic/penis_envy/reveal_skirt1.jpg');
  } else {
    if (((s as any).PCloPantsShortness ?? 0) > 2) {
      scene.img('images/pc/magic/penis_envy/reveal_shorts1.jpg');
    } else {
      scene.img('images/pc/magic/penis_envy/reveal_pants1.jpg');
    }
  }
  scene.text('You walk back into Anushka bedroom and find her scrolling on her phone, laying on her bed waiting for you. "Hey I got a big surprise for you." You tell her.');
  scene.text('She turns her head to look at you arching one of her slender brows in a questioning look. "Oh yeah? What\'s that?" She asks in return.');
  if (((s as any).PCloSkirt ?? 0) > 0) {
    if (((s as any).PCloSkirt ?? 0) >= 4) {
      scene.text('You simply shift your hips slightly and your dick pops out from under your micro-skirt, already visible.');
    } else {
      if (((s as any).PCloSkirt ?? 0) === 3) {
        scene.text('You lift up your skirt until your dick is hanging below the hemline.');
      } else {
        scene.text('You hike up your long skirt, bunching the fabric at your waist until your dick is fully exposed.');
      }
    }
  } else {
    if (((s as any).PCloPantsShortness ?? 0) > 0) {
      // TODO-QSP: dynamic text: You pull your top down a bit to show off your tits. "Um whats up?" She asks, but...
      scene.text(`You pull your top down a bit to show off your tits. "Um whats up?" She asks, but you ignore her comment and start to undo your ${((((s as any).PCloPantsShortness ?? 0) >= 3) ? ('shorts') : ('pants'))} until you pull your magical dick free, letting it dangle out the front.`);
    } else {
      if (((s as any).PCloDress ?? 0) === 1) {
        if (((s as any).PCloSkirt ?? 0) >= 4) {
          scene.text('You simply shift your hips and your dick pops out from under your micro-dress.');
        } else {
          scene.text('You lift up your dress until your dick hangs below the hemline.');
        }
      } else {
        scene.text('You pull your top open to show off your tits. "Um whats up?" She asks, but you ignore her comment as you work your outfit down enough to pull your magical dick free.');
      }
    }
  }
  if (((s as any).anushkaQW ?? 0)?.['magic_dick'] === 0) {
    scene.text('She sits up and looks directly at your dick. "What the fuck? Dude? What the fuck, when did you grow a dick?" You can tell she is confused but you can already feel the magic working on her mind clouding her thoughts.');
    scene.text('You giggle slightly. "Oh it\'s not real. It is just one of those ultra real looking dildo\'s that detects pressure and causes a vibrate in the harness to vibrate against my clit… so basically the faster and deeper I stick it in, the more it vibrates." You explain to her.');
    scene.text('She looks very confused at first. "What?" You see her facial expression change as the magic takes hold and she starts rationalizing what she is seeing. "OH! Yeah… I remember reading about them… wow it looks so real. How does it feel?"');
    scene.text('You giggle to her. "For me or you?" She rolls her eyes slightly so you answer both. "For me it feels like a amazing vibrator and the closest we will know what is it like to be a guy, for you. Well you won\'t be able tell it from the real thing. So what do you say? Want to get your holes fucked by a cock?"');
    scene.text('She laughs slightly and shakes her head a bit, as she is still having trouble believing her eyes. "Sure why not."');
    scene.text('You grin in anticipation at what is about to happen. "Then get off the bed." You tell her.');
  } else {
    scene.text('Her eyes drift down to your dangling cock and she shakes her head slightly. "I will never get over just how real looking… and feeling that thing is." She says as she bites her lower lip, obviously already getting a little worked up, just staring at your dangling cock.');
    scene.text('You smirk a bit to her. "Well if you want to get fucked, why don\'t you do something for me and get off that bed."');
  }
  (s as any).orgasm_or = 'no';
  qspCall(s, 'arousal', 'flash', 1);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Watch her get off the bed', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/sex/d3_penis_envy/penis_envy1.jpg');
    scene.text('She puts her phone on her nightstand and slides off her bed onto her feet. She starts to walk towards you but you put up a hand and she stops. "Not yet, you got to earn it. I need you to tease me, get me aroused first before I am ready to go." She rolls her eyes at your comment likely thinking you are taking the roll playing a bit to far, but little does she knows. Now just like a guy you got to get aroused enough first for your dick to get hard. "Why don\'t you take off that top and show me those firm little titties." You tell her.');
    qspCall(st, 'arousal', 'flash', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Watch her take off her top', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/sex/d3_penis_envy/penis_envy2.jpg');
    scene.text('She shakes her head and rolls her eyes even more, but does as you ask. You undoes her top, until her firm little titties are hanging free, she slowly removes her top in a seductive way, until she is naked from the waste up. You can feel your dick stirring a bit, but it needs more. "Nice, now how about you lose those little shorts of yours." You tell her.');
    qspCall(st, 'arousal', 'flash', 1);
    qspCall(st, 'arousal', 'voyeur', (-1));
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Watch her remove her shorts', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/sex/d3_penis_envy/penis_envy3.jpg');
    scene.text('She really makes a show of taking her shorts off, slowly undoing one button after the other, then turning around to pull them slowly down her legs bending all the way over, showing off her pert little ass to you, her pink little thong panties not hiding much from your view. Once her shorts are around her ankles she steps out of them and turns back to you, playing with the strap of her panties, pulling them this way and that, almost… almost showing off her pussy as she does. "Like what you see?" She asks in a slightly husky, seductive tone.');
    scene.text('Your magical dick certainly liked it, you can feel it twitching to live and starting to get hard, right now it is still only semi hard but it is getting there. "Yeah very nice, cute pink panties." You say in a slightly teasing tone about the color, not something she typically wears.');
    scene.text('She flips you the bird as she says. "Fuck you bitch."');
    scene.text('You grin to her. "That\'s the plan, but I\'m not the bitch that\'s going to get fucked. Now lose the panties." You tell her.');
    qspCall(st, 'arousal', 'flash', 1);
    qspCall(st, 'arousal', 'voyeur', (-1));
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Watch her slip off her panties', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/sex/d3_penis_envy/penis_envy4.jpg');
    scene.text('Again she makes a big show of slowly seductively removing her panties, stopping with them about half way down her thighs to play with her own clit for a bit, watching as your magically dick slowly gets hard, rising up slowly, just as her panties go down slowly. Once your dick is fully hard she lets her panties drop all the way to the floor stepping out of them after she does. "Now get over here and suck my dick!" You command her.');
    qspCall(st, 'arousal', 'flash', 1);
    qspCall(st, 'arousal', 'voyeur', (-1));
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Watch her suck your dick', goto: ['anushka_dreams', 'dream3_fuck1'] },
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

function enterDream3Fuck1(s: GameState, scene: SceneBuilder): void {
  ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['magic_dick'] = ((s as any).anushkaQW['magic_dick'] ?? 0) + (1);
  scene.text('<center><b>Anushka\'s Room</b></center>');
  scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/sex/d3_penis_envy/penis_envy5.jpg');
  scene.text('She bites her lower lip as you tell her what to do, then slowly walks over to you. Standing so close her face is just in front of yours. You can feel the tip of your dick brush against her thigh, then she slowly lowers down to her knees in front of you. Once she is down all the way, your dick is right in front of her face, she opens her mouth and takes your cock into her mouth. She looks up at you, meeting your eyes as she starts to suck your dick.');
  qspCall(s, 'arousal', 'magicd_bj', 1);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get your dick sucked', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/sex/d3_penis_envy/penis_envy6.jpg');
    scene.text('You can\'t help but moan as she keeps sucking on your dick, each time you look down she is staring up at you as she sucks your cock. "Fuck you are such a good little cock sucker, you know that." You tell her as she keeps sucking your dick.');
    qspCall(st, 'arousal', 'magicd_bj', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Let her keep sucking', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/sex/d3_penis_envy/penis_envy7.jpg');
    scene.text('After a bit she closes her eyes and really starts getting into bobbing her head in rhythm as she sucks your cock. The heat and wetness of her mouth feels so amazing, her lips gripped tightly along your shaft as she bobs her head back and forth, you think about just letting her suck you off, but you did promise her cock. So you suppose you really should fuck her, you could fuck her pussy first or maybe you can just go straight to her ass. Either way she needs to move, you pull your dick out of her mouth, as you do she looks back up at you. "Get up and get on the bed on all fours, so I can fuck you." You tell her, she grins in response and moves over to the bed to get on all fours, with her ass facing towards you.');
    qspCall(st, 'arousal', 'magicd_bj', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Fuck her pussy', goto: ['anushka_dreams', 'dream3_fuck2'] },
      { label: 'Fuck her ass', goto: ['anushka_dreams', 'dream3_fuck3'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDream3Fuck2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Anushka\'s Room</b></center>');
  scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/sex/d3_penis_envy/penis_envy8.jpg');
  scene.text('You get on the bed behind her and rub the tip of your dick against the slit of her pussy. Which causes her to moan as you do, her pussy is already soaking wet');
  qspCall(s, 'npcStat', 'D' + ((s as any).strapNumber ?? 0) + '');
  if (((s as any).strapNumber ?? 0) > 3) {
    // TODO-QSP: dynamic text: You push your hips forward, there is a little resistance from her pussy. As your...
    scene.text(`You push your hips forward, there is a little resistance from her pussy. As your ${((s as any).dick ?? '')}cm ${((s as any).dick_girth ?? '')} magical cock forces it's way into her wet pussy stretching it out, she gasps which quickly turns into a moan of pleasure. Her pussy tightly grips the shaft of your dick as you slide it further into her, "OH FUCK! You cock is so big." She cries out.`);
    scene.text('You moan yourself as her tight little snatch milks your dick. "Just the way you like it." You respond to her as you start fucking her slowly, she tries to pull away a little, but your hands hold her hips firmly. You go slow letting her get use to your huge cock.');
  } else {
    if (((s as any).strapNumber ?? 0) < 3) {
      // TODO-QSP: dynamic text: You push your hips forward, your small <<dick>>cm <<$dick_girth>> magical cock s...
      scene.text(`You push your hips forward, your small ${((s as any).dick ?? '')}cm ${((s as any).dick_girth ?? '')} magical cock slides into her pussy fairly easily. She moans slightly as you slide it deeper inside of her, "OH! Yes… that feels good, but maybe next time bring a bigger dick." She says with a giggle.`);
      scene.text('You moan yourself as her tight little snatch milks your dick. "Fuck you slut, what are you a size queen?" You respond to her as you start fucking her, she doesn\'t respond to your question but rocks back against your hips as you fuck her.');
    } else {
      // TODO-QSP: dynamic text: You push your hips forward, your <<dick>>cm <<$dick_girth>> magical cock slides ...
      scene.text(`You push your hips forward, your ${((s as any).dick ?? '')}cm ${((s as any).dick_girth ?? '')} magical cock slides into her snug little pussy. She moans as you slide it deeper inside of her, "OH fuck! Oh um… yes… that feels so good." She says between moans of pleasure.`);
      scene.text('You moan yourself as her tight little snatch milks your dick. "Yeah you like my fat cock in your pussy, don\'t you slut?" You respond to her as you start fucking her, she doesn\'t respond to your question. She just stays in her doggy style position hot and ready to be fucked by you.');
    }
  }
  qspCall(s, 'npcStat', 'A144');
  qspCall(s, 'arousal', 'magicd_vaginal', 2);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep fucking her', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/sex/d3_penis_envy/penis_envy9.jpg');
    if (((st as any).strapNumber ?? 0) > 3) {
      scene.text('As she gets use to your huge cock, she stops trying to pull away and settles into enjoying the doggy style fucking you are giving her. "Oh fuck… your cock is so big… it\'s stretching me out… but it feels so good!" She says between moans of pleasure.');
      scene.text('You give her ass a slap as you thrust deeper into her pussy, feeling it tightly grip your cock, the sensation is amazing. "Tell me you love my huge cock." You tell her.');
      scene.text('She gasps then moans, before looking back at you. "I love… your huge cock… I love it… when you… tear up… my pussy." She says between moans, each moan getting louder and longer than the last.');
    } else {
      scene.text('She settles into enjoying the doggy style fucking you are giving her. "Oh fuck… your cock feels so good!" She says between moans of pleasure.');
      scene.text('You give her ass a slap as you thrust deeper into her pussy, feeling it tightly grip your cock, the sensation is amazing. "Tell me you love taking my cock." You tell her.');
      scene.text('She gasps then moans, before looking back at you. "I love… taking your… cock in… my pussy." She says between moans, each moan getting louder and longer than the last.');
    }
    qspCall(st, 'arousal', 'magicd_vaginal', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Fuck her a little harder', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/sex/d3_penis_envy/penis_envy10.jpg');
    scene.text('Her pussy starts feeling amazing around your dick, you start fucking her even harder now, slapping your balls against her clit with each full stroke. She moans louder and louder until she suddenly pulls forward, your dick slipping out of her, as she starts shaking uncontrollably as she has a orgasm. You stroke your dick, you could likely go a bit more if you wanted. Maybe fucking her ass next, but you really feel like busting a nut.');
    qspCall(st, 'arousal', 'magicd_vaginal', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Fuck her ass', goto: ['anushka_dreams', 'dream3_fuck3'] },
      { label: 'Cum in her mouth', goto: ['anushka_dreams', 'dream3_fuck4'] },
      { label: 'Stick your dick back in her mouth', goto: ['anushka_dreams', 'dream3_fuck5'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDream3Fuck3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Anushka\'s Room</b></center>');
  scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/sex/d3_penis_envy/penis_envy11.jpg');
  scene.text('She gets on all fours on the bed, as she does. You grab the lube out of her nightstand and pour a generous amount on her asshole, using your fingers to work it inside of her, she moans slight as you do. You pull your hand away and then rub the tip of your dick against her asshole.');
  qspCall(s, 'npcStat', 'D' + ((s as any).strapNumber ?? 0) + '');
  if (((s as any).strapNumber ?? 0) > 3) {
    // TODO-QSP: dynamic text: You push your hips forward, feel a lot of resistance from her asshole as she say...
    scene.text(`You push your hips forward, feel a lot of resistance from her asshole as she says. "Owe, fuck… you're to big." You know some of the guys she lets fuck her butt, you know you are not to big for her. Grabbing her hips with both hands and thrusting your hips forward. You pop the head of your ${((s as any).dick ?? '')}cm ${((s as any).dick_girth ?? '')} magical cock into her ass, you feel her try and pull away as she hisses in pain, as she cries out. "NO… fuck… your to big… fuck… stop…"`);
    scene.text('You moan in pleasure as her tight little asshole grips you shaft. "Oh fuck your ass is tight, this feels amazing." You respond to her as you start pushing your dick deeper up her butt, she tries to pull away a little, but your hands hold her hips firmly. You go slow letting her get use to your huge cock.');
  } else {
    if (((s as any).strapNumber ?? 0) < 3) {
      // TODO-QSP: dynamic text: You push your hips forward, your small <<dick>>cm <<$dick_girth>> magical cock s...
      scene.text(`You push your hips forward, your small ${((s as any).dick ?? '')}cm ${((s as any).dick_girth ?? '')} magical cock slides fairly easily into her lubed asshole. She moans slightly as you pop first the head of your dick and then slide it deeper inside of her butt, "OH! Yes… that feels good, but maybe next time bring a bigger dick." She says with a giggle.`);
      scene.text('You moan yourself as her tight little asshole milks your dick. "You are such a slut." You respond to her as you start fucking her butt, she doesn\'t respond to your question but rocks back against your hips as you fuck her.');
    } else {
      // TODO-QSP: dynamic text: You push your hips forward, the head of your <<dick>>cm <<$dick_girth>> magical ...
      scene.text(`You push your hips forward, the head of your ${((s as any).dick ?? '')}cm ${((s as any).dick_girth ?? '')} magical cock pops into her tight little lubed up asshole, causing her to gasp in pain for a moment. She moans as you slide it deeper inside of her, "OH fuck! Oh um… yes… that feels so good." She says between moans of pleasure.`);
      scene.text('You moan yourself as her tight little asshole milks your dick. "Yeah you like taking cock in the ass, don\'t you slut?" You respond to her as you start fucking her, she doesn\'t respond to your question. She just stays in her doggy style position hot and ready to be butt fucked by you.');
    }
  }
  qspCall(s, 'npcStat', 'A144');
  qspCall(s, 'arousal', 'magicd_anal', 2);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go a little deeper', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/sex/d3_penis_envy/penis_envy12.jpg');
    if (((st as any).strapNumber ?? 0) > 3) {
      scene.text('As she gets use to your huge cock stretching out her ass, she stops trying to pull away as much, you can hear her taking deep breaths to relax, in between grunts and little squeals. "Oh fuck… your cock is so big!" She says between groans of pain and moans of pleasure.');
      scene.text('You give her ass a slap as you thrust deeper into her butt, feeling it tightly grip your cock, the sensation is amazing. "Tell me you love my huge cock in your ass." You tell her.');
      scene.text('She groans in pain a bit but it turns into a moan of pleasure. "It\'s… to big… for… my ass."');
      scene.text('You give her ass cheek another hard slap. "I said tell me how much you love taking huge cock in your ass, like the butt slut you are."');
      scene.text('She gasps then moans, before looking back at you. "I love… your huge cock… in my… ass." She says between moans and groans, each moan getting louder and longer than the last. You can feel her starting to relax as she starts enjoying it, as she is finally getting use to how big your dick is.');
    } else {
      scene.text('She settles into enjoying the butt fucking you are giving her. "Oh fuck… your cock feels so good in my ass!" She says between moans of pleasure.');
      scene.text('You give her ass a slap as you thrust a little deeper into her in her ass, her butthole grips your cock tightly, milking it as you fuck her. You slowly thrust deeper up her butt, making it just half way down the length of your dick, the sensation is amazing. "Your ass feels amazing, it\'s so tight." You tell her. She doesn\'t respond and just moans as you fuck her, each moan getting louder and longer than the last.');
    }
    qspCall(st, 'arousal', 'magicd_anal', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Go balls deep', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/sex/d3_penis_envy/penis_envy13.jpg');
    scene.text('You work your way balls deep in her butt and starting pounding her tight little ass, feeling your balls slap against her wet slit.');
    if (((st as any).strapNumber ?? 0) > 3) {
      scene.text('Now that she is use to how big your dick is, she is just moaning, with the occasionally squeal. "OH FUCK!… OH FUCK!… Your dick… is so… BIG!… OH YES!… Fuck my ass…!"');
      scene.text('You give her ass a slap as you thrust balls deep in her butt, feeling her tight little asshole grip your cock, milking it with each stroke, the sensation is amazing. "Tell me how much you love taking my huge cock in your ass." You tell her.');
      scene.text('She gasps then moans, before looking back at you. "I love… taking your… huge cock… up my… ass." She says between moans and groans, each moan getting louder and longer than the last. Until she falls forward shaking uncontrollably as she has a orgasm, as she falls forward your dick slips out of her butt.');
    } else {
      scene.text('She is really getting into the anal fuck you are giving her. "OH YES!… YES!… Pound my… tight little… ass… balls deep… YES!" She says between cries of pleasure.');
      scene.text('You give her ass a slap as you thrust balls deeper into her in her ass, her butthole grips your cock tightly, milking your cock as you fuck her. You pick up the pace and start really pounding her ass balls deep, the sensation is amazing. "You are such a butt slut." You tell her. She doesn\'t respond and just moans as you fuck her, each moan getting louder and longer than the last. Until she falls forward shaking uncontrollably as she has a orgasm, as she falls forward your dick slips out of her butt.');
    }
    qspCall(st, 'arousal', 'magicd_anal', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Cum in her mouth', goto: ['anushka_dreams', 'dream3_fuck6'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDream3Fuck4(s: GameState, scene: SceneBuilder): void {
  ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['magic_dick_cum_mouth'] = ((s as any).anushkaQW['magic_dick_cum_mouth'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.text('<center><b>Anushka\'s Room</b></center>');
  scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/sex/d3_penis_envy/penis_envy14.jpg');
  scene.text('With her shaking orgasm passing, while she lays on her side. You roll her over onto her back and straddle her chest with your dick directly over her face. "Open your mouth." You tell her.');
  scene.text('She does as you tell her and opens her mouth, you start stroking your cock while pointing the tip of it right into her mouth.');
  (s as any).tempOrgasm = ((s as any).orgasm ?? 0);
  (s as any).orgasm_txt = 'It only takes a few strokes before you feel your balls tighten and the pressure build up and then the sudden release, as you start shotting cum into Anushka\'s waiting open mouth. It takes several strokes to fully empty your balls and fill her mouth up.';
  (s as any).orgasm_or = 'yes';
  qspCall(s, 'arousal', 'magicd_bj', 1);
  scene.text('Once you stop cumming you look down at her face, your dick hanging just over it. Her mouth is completely full of your cum until it looks like it is overflowing, a bit runs down her cheeks. Either you missed her mouth with a couple of spurts of cum or you really did overfill her mouth. "Be a good little cum slut and swallow my sweet cum." You tell her.');
  scene.text('She swallows the mouthful of cum and then grins to you. "Fuck that feels and tastes so real, well other than your cum is way sweeter than any guys."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Climb off her', goto: ['anushka_dreams', 'dream3_fuck7'] },
    { label: 'Stick your dick back in her mouth', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/sex/d3_penis_envy/penis_envy15.jpg');
    scene.text('As she finishes talking and before she closes her mouth, you use your hand to point your dick back at her mouth. Pushing forward with your hips you slide your magical dick back in her mouth. "You like the way my cum taste? Then suck every drop of cum out of my dick and while you at it, suck my dick clean of cum and your pussy juices." You moan as she starts sucking your dick again, milking the last few drops of cum out of your cock into her mouth, and sucking her own pussy juices off your dick. Once you feel your dick start to twitch again, you decide to call it a end.');
    qspCall(st, 'arousal', 'magicd_bj', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Climb off her', goto: ['anushka_dreams', 'dream3_fuck7'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterDream3Fuck5(s: GameState, scene: SceneBuilder): void {
  ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['magic_dick_cum_mouth'] = ((s as any).anushkaQW['magic_dick_cum_mouth'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.text('<center><b>Anushka\'s Room</b></center>');
  scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/sex/d3_penis_envy/penis_envy15.jpg');
  scene.text('With her shaking orgasm passing, while she lays on her side. You roll her over onto her back and straddle her chest with your dick directly over her face. "Open your mouth." You tell her as you slap the tip of your dick against her lips.');
  scene.text('She does as you tell her and opens her mouth, as soon as her mouth is open you shove you dick inside her mouth and starting fucking her mouth. She clamps her lips around the shaft of your cock and just lets you fuck her mouth.');
  (s as any).tempOrgasm = ((s as any).orgasm ?? 0);
  (s as any).orgasm_txt = 'It doesn\'t take long until you start moaning loudly yourself, you feel your balls tighten up and the pressure building up. Until the sudden release as you start cumming in her mouth. You hear her surprised gag as you start filling her mouth with you cum, "That\'s it take my cum." You say to her as you groan as the last few spurts of cum fill her mouth. Finally you use her mouth to milk every last drop of cum out of you. A part of you wants to keep fucking her mouth, but you know you should stop.';
  qspCall(s, 'arousal', 'magicd_bj', 2);
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Pull your dick out of her mouth', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/sex/d3_penis_envy/penis_envy14.jpg');
    scene.text('Once you stop cumming in her mouth, you pull your dick out of her mouth. "Open your mouth and show me, how full of my cum it is." You tell her.');
    scene.text('She does as you tell her and opens her mouth. Her mouth is completely full of your cum until it looks like it is overflowing, a bit runs down her cheeks. "Be a good little cum slut and swallow my sweet cum." You tell her.');
    scene.text('She swallows the mouthful of cum and then grins to you. "Fuck that feels and tastes so real, well other than your cum is way sweeter than any guys."');
    scene.actions([
      { label: 'Climb off her', goto: ['anushka_dreams', 'dream3_fuck7'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterDream3Fuck6(s: GameState, scene: SceneBuilder): void {
  ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['magic_dick_cum_mouth'] = ((s as any).anushkaQW['magic_dick_cum_mouth'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.text('<center><b>Anushka\'s Room</b></center>');
  scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/sex/d3_penis_envy/penis_envy15.jpg');
  scene.text('With her shaking orgasm passing, while she lays on her side. You roll her over onto her back and straddle her chest with your dick directly over her face. "Open your mouth." You tell her.');
  scene.text('She does as you tell her and opens her mouth, you start stroking your cock while pointing the tip of it right into her mouth.');
  (s as any).tempOrgasm = ((s as any).orgasm ?? 0);
  (s as any).orgasm_txt = 'It only takes a few strokes before you feel your balls tighten and the pressure build up and then the sudden release, as you start shotting cum into Anushka\'s waiting open mouth. It takes several strokes to fully empty your balls and fill her mouth up.';
  scene.text('Once you stop cumming you look down at her face, your dick hanging just over it. Her mouth is completely full of your cum until it looks like it is overflowing, a bit runs down her cheeks. Either you missed her mouth with a couple of spurts of cum or you really did overfill her mouth. "Be a good little cum slut and swallow my sweet cum." You tell her.');
  scene.text('She swallows the mouthful of cum and then grins to you. "Fuck that feels and tastes so real, well other than your cum is way sweeter than any guys."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Climb off her', goto: ['anushka_dreams', 'dream3_fuck7'] },
  ]);
  scene.build();
}

function enterDream3Fuck7(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Anushka\'s Room</b></center>');
  scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
  scene.text('You climb off her, grabbing a tissue to clean off your dick with. Once you are done you discount the straps of the harness, as soon as you do, you can feel the magic dissipate. Causing you to lose connection to your magical dick, now you are back to just having a pussy. A little side of you is a little sad by this, having a dick is kinda addictive. You put your harness away, as you do Anushka cleans up her face and gets dressed again. Once you are both sitting back on the bed once more you talk a bit about what just happened, she seems to really love it when you fuck her with your magic cock and loves how your cum tastes, but the magic is of clouding her mind is already working as she only remembers it be a real looking dildo.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep talking', goto: ['anushkachat', 'chat'] },
    { label: 'Stop talking', goto: ['anush_bedroom', 'anushroom'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'dreams':
      enterDreams(s, scene);
      break;
    case 'dream1':
      enterDream1(s, scene);
      break;
    case 'dream1_two':
      enterDream1Two(s, scene);
      break;
    case 'dream1_three':
      enterDream1Three(s, scene);
      break;
    case 'dream2':
      enterDream2(s, scene);
      break;
    case 'dream2_two':
      enterDream2Two(s, scene);
      break;
    case 'dream2_three':
      enterDream2Three(s, scene);
      break;
    case 'dream2_four':
      enterDream2Four(s, scene);
      break;
    case 'dream2_five':
      enterDream2Five(s, scene);
      break;
    case 'dream3':
      enterDream3(s, scene);
      break;
    case 'dream3_two':
      enterDream3Two(s, scene);
      break;
    case 'dream3_three':
      enterDream3Three(s, scene);
      break;
    case 'dream3_four':
      enterDream3Four(s, scene);
      break;
    case 'dream3_five':
      enterDream3Five(s, scene);
      break;
    case 'dream3_fuck':
      enterDream3Fuck(s, scene);
      break;
    case 'dream3_fuck1':
      enterDream3Fuck1(s, scene);
      break;
    case 'dream3_fuck2':
      enterDream3Fuck2(s, scene);
      break;
    case 'dream3_fuck3':
      enterDream3Fuck3(s, scene);
      break;
    case 'dream3_fuck4':
      enterDream3Fuck4(s, scene);
      break;
    case 'dream3_fuck5':
      enterDream3Fuck5(s, scene);
      break;
    case 'dream3_fuck6':
      enterDream3Fuck6(s, scene);
      break;
    case 'dream3_fuck7':
      enterDream3Fuck7(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const anushka_dreams: LocationDef = {
  name: 'anushka_dreams',
  title: 'Anushka\'s Dream',
  region: 'other',
  enter: enter,
};
