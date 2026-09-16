import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterManager(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('As you walk past the station manager\'s office, you notice a sign next to the door:');
  // TODO-QSP: dynamic text: "Cleaner wanted! 2 hours per day at any time, salary '+$func('money', 'string_pr...
  scene.text('"Cleaner wanted! 2 hours per day at any time, salary \'+$func(\'money\', \'string_profit\', 250)+\' Ask the station manager for more information."');
  // TODO-QSP: dynamic text: "Office visiting hours: '+func('time', 'get_time_string', 8, 0)+' - '+func('time...
  scene.text('"Office visiting hours: 8:00 - 17:00"');
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 16) {
    scene.actions([
      { label: 'Enter the office', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('You knock on the door and enter the station manager\'s office.');
    scene.text('An elderly man looks up from his papers on his desk. "Can I help you?"');
    qspCall(s, 'jobs', 'get_job_definition', 'pav_train_cleaner');
    if (((s as any).job_status ?? 0)?.['pav_train_cleaner'] === '') {
      scene.actions([
        { label: 'Apply for the cleaning job', handler: (st: GameState) => {
    qspCall(s, 'jobs', 'set_employed', 'pav_train_cleaner');
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.text('You give him a friendly nod. "Hello sir, I\'m here to apply for the cleaning job."');
    scene.text('He\'s delighted, and somewhat surprised that he actually has a candidate at such low wages. "Excellent, come on in! Take a seat."');
    scene.text('He explains what you have to do while he takes your details. "The job will involve mopping the waiting room floor and cleaning both restrooms. You have to clean all three areas before the end of the day, otherwise we\'ll have to hire someone else finish it. If you\'ve only cleaned part of the rooms, you do not get paid at all."');
    scene.text('He then shows you the maintenance closet where the cleaning supplies are stored. "You can come work any day you like and can skip any day you don\'t want to work."');
    scene.text('He then shakes your hand before returning to his work.');
    scene.actions([
      { label: 'Leave the office', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Apologize and leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', ''] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the train station', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', ''] },
  ]);
  scene.build();
}

function enterWallet1(s: GameState, scene: SceneBuilder): void {
  (s as any).podbros = 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/trainstation/vokzal.jpg');
  scene.text('As you reach for the wallet, a foot steps on it just before you can pick it up. You look up, straight into the eyes of a girl.');
  scene.text('She looks around quickly. "Want to share?"');
  qspCall(s, 'willpower', 'misc', 'force', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Keep it all for yourself', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Keep it all for yourself', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'force');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/trainstation/vokzal.jpg');
    scene.text('You tell the girl to get lost and quickly push her away before snatching the wallet before she can protest. As you remove the money from it and stuff it in your pocket, you feel a hand firmly grasping your shoulder. It\'s the owner of the wallet… That girl must have ratted you out!');
    scene.text('You sigh and give him the empty wallet back, hoping he won\'t check. Unfortunately for you, he does.');
    scene.text('"Young lady, you have 5 seconds to give me my money back or we\'re going to the police station!" he bellows.');
    qspCall(s, 'willpower', 'misc', 'force', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Run away', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Run away', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'force');
    qspCall(s, 'money', 'earn', 2000, 'cash');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.text('You quickly take off before the man can stop you, dashing into the crowd without looking back. You breathe a sigh of relief when it appears that you\'ve shaken him off.');
    scene.actions([
      { label: 'Continue', goto: ['pav_train_hall', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Give him the money back', goto: ['pav_train_hall_events', 'wallet2'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Let her keep it', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', ''] },
    { label: 'Share the money', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/trainstation/vokzal.jpg');
    scene.text('You pick up the wallet and drag the girl off to the side. Making sure you\'re not being watched, you quickly split the money and give her half. She quickly walks away, but you suddenly feel a hand firmly grasping your shoulder as you\'re about to pocket your share. It\'s the owner of the wallet…');
    scene.text('You sigh and give him the empty wallet back, hoping he won\'t check. Unfortunately for you, he does.');
    scene.text('"Young lady, you have 5 seconds to give me my money back or we\'re going to the police station!" he bellows.');
    qspCall(s, 'willpower', 'misc', 'force', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Run away', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Run away', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'force');
    qspCall(s, 'money', 'earn', 1000, 'cash');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.text('You quickly take off before the man can stop you, dashing into the crowd without looking back. You breathe a sigh of relief when it appears that you\'ve shaken him off.');
    scene.actions([
      { label: 'Continue', goto: ['pav_train_hall', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Give him the money back', goto: ['pav_train_hall_events', 'wallet2'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterWallet2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('You give back the money you took from his wallet, but he acts insulted.');
  scene.text('"Where\'s the rest of it? Return all of my money <i>now</i> or we\'re going to the police station! This is your last chance!"');
  qspCall(s, 'willpower', 'misc', 'force', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Run away', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Run away', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'force');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.text('You quickly take off before the man can stop you, dashing into the crowd without looking back. You breathe a sigh of relief when it appears that you\'ve shaken him off.');
    scene.actions([
      { label: 'Continue', goto: ['pav_train_hall', ''] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Give him your money', handler: (st: GameState) => {
    qspCall(s, 'money', 'set', 0);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/trainstation/vokzal.jpg');
    scene.text('Hoping to placate him, you pull out your own money and start counting some of it out.');
    scene.text('Before you can finish, he pulls the entire pile out of your hand. "There it is! You\'re lucky, girl… I\'ll leave it at this, just this once."');
    scene.text('Before you can object, he walks away with all of your money.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterVera(s: GameState, scene: SceneBuilder): void {
  (s as any).verarand = Math.floor(Math.random() * 2) + 0;
  if (((s as any).verakassir ?? 0) === 3  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 20  &&  (!((s as any).verarand ?? 0))) {
    scene.text('Vera is enjoying a cigarette during a slow moment at the ticket office. She beckons you to come over and have a chat.');
    scene.actions([
      { label: 'Chat with Vera', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/vera/verasmoke.jpg');
    if (((s as any).npc_rel ?? 0)?.['A27'] > 0) {
      qspCall(s, 'npc_relationship', 'modify', 'A27', 1);
      scene.text('You walk up to Vera and greet her before you talk for a few minutes about your day.');
      (s as any).veratalkrand = Math.floor(Math.random() * 4) + 0;
      if ((!((s as any).veratalkrand ?? 0))) {
        scene.text('"Do you think I\'m still attractive?" she suddenly asks. "Anatoly doesn\'t seem interested in me any more. I bet it\'s all those young sluts in his classes wearing those tiny skirts! Stupid tramps, stealing my husband from me…"');
        return;
        scene.actions([
          { label: 'Defend Anatoly', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A27', (-1));
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/vera/verasmoke.jpg');
    scene.text('You quickly rush to Anatoly\'s defense, saying you have several classes with him and that he\'s not like that at all.');
    scene.text('Vera looks at you suspiciously. "Really? That\'s exactly what a slut would say, defending him like that…"');
    scene.text('She shakes her head and waves you away so she can get back to work, giving you a mistrusting look as you leave.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', ''] },
    ]);
  } },
          { label: 'Suck up to Vera', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A27', 1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/vera/verasmoke.jpg');
    scene.text('You can see she needs some encouragement, and decide to placate her. "You\'re still very attractive, Vera! Anatoly doesn\'t know what he\'s missing!"');
    scene.text('She gives you an appreciative nod. After another minute of trash-talking the girls in your class, she realizes she has to get back to work.');
    scene.text('She waves you goodbye as you gather your things and get ready to leave. You\'re not quite sure whether she was just insulting you or not.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', ''] },
    ]);
  } },
        ]);
      }
      if (((s as any).npc_rel ?? 0)?.['A27'] >= 40) {
        if (((s as any).veratalkrand ?? 0) === 1) {
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
          scene.text('Vera smiles, saying she sold a lot of train tickets today before she starts talking about the guys she\'s been with before she met her husband.');
          if (((s as any).npc_rel ?? 0)?.['A27'] >= 50) {
            scene.actions([
              { label: 'Ask for details', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    qspCall(s, 'stat', '');
    if (((s as any).veraendtalker ?? 0) === 1) {
      (s as any).veraboyrand = ((s as any).veraboyrand ?? 0) + (1);
      if (((s as any).veraboyrand ?? 0) >= 9) {
        (s as any).veraendtalker = 2;
      }
    } else {
      if ((!((s as any).veraendtalker ?? 0))) {
        (s as any).veraendtalker = 1;
        (s as any).veraboyrand = 0;
      } else {
        if (((s as any).veraendtalker ?? 0) === 2) {
          (s as any).veraboyrand = Math.floor(Math.random() * 9) + 0;
        }
      }
    }
    if (((s as any).veraboyrand ?? 0) > 8) {
      scene.img('images/characters/pavlovsk/resident/vera/verasmoke.jpg');
      scene.text('Vera lets out a wistful sigh and shrugs. "I don\'t know… There\'s not much to tell. I live with Anatoly now, and I slowly feel my virginity coming back to me. We never do anything together any more."');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', ''] },
      ]);
    } else {
      if (((s as any).veraboyrand ?? 0) <0) {
        scene.img('images/characters/pavlovsk/resident/vera/verasmoke.jpg');
        // TODO-QSP: dynamic text: Vera lets out a wistful sigh and shrugs. "I don't know, <<$pcs_nickname>>. I don...
        scene.text(`Vera lets out a wistful sigh and shrugs. "I don't know, ${((s as any).pcs_nickname || '')}. I don't feel like talking about the past right now."`);
        scene.actions([
          { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', ''] },
        ]);
      }
    }
    if ((!((s as any).veraboyrand ?? 0))) {
      scene.img('images/characters/pavlovsk/resident/vera/sex/bvtalk0.jpg');
      scene.text('Vera nods. "My first time was with an adult man when I was only 14 years old. I grew up in Gadukino, where basically everyone knows one another and shares everything, so I never dated the local guys. Then one guy, a handsome older man came to the village in his expensive car. He invited me over to his place to have some martinis."');
      scene.text('She seems thoughtful, as if remembering the past. "I felt really attracted to him, so I let him take me to his place. He kept offering me more martinis until I was really drunk, then he took off his shirt and I became a bit giddy as I licked his chest. Then suddenly, bam! He threw me on my back, ripped my clothes away and stuck his cock inside me. It wasn\'t unbearable, but I had never had sex before so I was shocked!"');
      scene.text('"I was just laying there with my legs spread under his sweaty body as he pounded me. Then he pulls out and shoots his sperm all over my stomach. So there I was, on my back, all covered in semen, my pussy all bloody, and what do you think he said? He said I was like a log! He complained how he had to do all the work! That jerk didn\'t even realize he robbed me of my innocence!"');
      scene.text('"I got angry and left immediately, and never saw him again after that. At least no one in the village found out… I was so ashamed! For a month, I hid from everyone and didn\'t even go for a walk. I couldn\'t look anyone in the eye after losing my virginity like that."');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', ''] },
      ]);
    } else {
      if (((s as any).veraboyrand ?? 0) === 1) {
        scene.img('images/characters/pavlovsk/resident/vera/sex/bvtalk1.jpg');
        scene.text('Vera gets ready to continue her story. "After that first experience, I was done with guys. Until one day at college… I met Oleg while I was working towards my undergraduate degree. He was a very bulky and muscular guy, and great at cycling. I bet he could bend a bicycle if he wanted to, he was that strong. To my surprise, he invited me for a drink one day. We went to a local cafe and had a great time. He was such a nice guy!"');
        scene.text('"After a few drinks, he suggested going back to his place. We had such a nice time, I agreed. At his place we had some champagne, and soon after we were kissing on the sofa. He kept touching my boobs through my shirt… It made me feel all warm and fuzzy inside."');
        scene.text('"Before I even knew what got into me, I put my hands on his groin and was groping his cock through his pants. Then I pulled his pants down and took a dick in my mouth for the first time in my life. I sat there, on my haunches, sucking his cock while I was caressing myself between my legs. It just felt… right, you know? He was feeling good, I was feeling good, that was all that mattered."');
        scene.actions([
          { label: '"What happened next?"', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/vera/sex/bvtalk11.jpg');
    scene.text('With a dreamy look in her eyes, Vera continues. "He suddenly turned me around and made me lean over before he took off my skirt, pulled my panties to the side and entered me. Unlike my first time, it felt so good! I squealed with delight as he fingered my ass as he was fucking me. I had an orgasm that was so strong, I almost fainted! Good thing he kept me standing since my legs felt like pudding! When I finally recovered, Oleg had already came and my ass was covered with his sperm. I quickly washed up, and he took me back to the hostel like a gentleman."');
    scene.text('She looks sad when she finishes the story. "However, he didn\'t want to see me any more after that. I tried to ask him out again, but he always just waved me off saying he was busy. Later I learned from his friends that he thought I was a whore. I guess I can\'t blame him… I sucked his cock on the first day we met, and came uncontrollably hard when he fucked me…"');
    scene.actions([
      { label: 'Tell her she is indeed the one to blame', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A27', (-1));
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/vera/verasmoke.jpg');
    scene.text('You can\'t argue with that. "I guess that is kind of a slutty thing to do… I can see where he\'s coming from."');
    scene.text('Vera shakes her head in disappointment, still stuck in her own thoughts. "I don\'t know… Didn\'t he do the exact same thing, taking me home and fucking me on the very first day we met? Why is it always the girl\'s fault?"');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', ''] },
    ]);
  } },
      { label: 'Tell her he was wrong to ignore her', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A27', 1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/vera/verasmoke.jpg');
    scene.text('You notice Vera is sad and try to cheer her up. "He shouldn\'t have treated you like that! He was just as happy to take you home the first day you met!"');
    scene.text('She gives you a weak smile as she sighs. "I know, right? Why is the girl always at fault when guys do the same thing? It\'s not fair…"');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', ''] },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        if (((s as any).veraboyrand ?? 0) === 2) {
          scene.img('images/characters/pavlovsk/resident/vera/sex/bvtalk2.jpg');
          scene.text('Vera grimaces as she tells her next story. "After Oleg, I met Leszek. He was a cool guy who lived in the same dorm as me and played guitar in a band. We often walked together, but he never seemed interested in me until we came home from a concert late one night. He didn\'t even ask. Without warning, he threw me down on his bed and pulled my clothes off. He went straight for my ass, and was quite rough about it too. I knew he was too strong for me to fight off, so I just lay there, clutching the sheets while he was fucking my ass mercilessly."');
          scene.text('She seems lost in her thoughts. "It was a strange experience, mixing pain and pleasure. In a way, it felt kind of nice to just have him treat me like a piece of meat, skewering me like that. Then the bastard finished inside me and fell asleep, right on my back! After a while, I managed to struggle my way out from underneath him and quickly put my clothes on and left. I hated him after that."');
          scene.actions([
            { label: '"I thought you liked it?"', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A27', (-1));
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/vera/verasmoke.jpg');
    scene.text('"Why?" you ask. "I thought you liked being treated like a piece of meat?"');
    scene.text('Vera shakes her head wearily. "Maybe, but that doesn\'t give him the right to just fuck my ass like that with no concern for my feelings!"');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', ''] },
    ]);
  } },
            { label: '"Understandable"', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A27', 1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/vera/verasmoke.jpg');
    scene.text('You nod understandingly, saying he had no right to treat Vera like that.');
    scene.text('Vera sighs sadly. "You know, secretly I actually kind of liked him. But it was really wrong of him to take advantage of a defenseless girl like that. And besides… Who knows how many other girls he treated like that before me?"');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', ''] },
    ]);
  } },
          ]);
        } else {
          if (((s as any).veraboyrand ?? 0) === 3) {
            scene.img('images/characters/pavlovsk/resident/vera/sex/bvtalk3.jpg');
            scene.text('Vera tells another story. "For a while, I ignored Leszek after he sodomized me that night. One night soon after, I went to a night club and met another guy… I don\'t remember his name. I was trying to get drunk, to forget about Leszek, but I couldn\'t get him out of my mind. Until this guy came along."');
            scene.text('Vera smiles as she continues. "He had a cute face and he started groping and kissing me on the dance floor. Then he suggested I come with him to the restrooms and I thought… why not? So I went into a toilet stall and sucked him off while I was fondling my pussy. When he began to cum in my mouth, I orgasmed as well. It felt really good. When I opened my eyes, he had already left the stall. So there I was sitting there by myself, with his cum slowly dribbling out of my half-open mouth. Several more globs landed on my face as well, I looked like a mess! I was very ashamed when I realized what I had done."');
            scene.text('She then gives you a serious look. "What do you think? Does that make me a slut?"');
            scene.actions([
              { label: '"Of course!"', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A27', (-1));
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/vera/verasmoke.jpg');
    scene.text('"Of course it does!" you snark. "Giving some random guy you just met a blowjob in the toilet stalls, and letting him cum all over your face… If that\'s not slutty, I don\'t know what is!"');
    scene.text('Vera tries to defend herself, unhappy that you\'re calling her out. "Hey, it\'s not like I was doing it just for him! I had an orgasm as well, and I really needed that! Is that so wrong?"');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', ''] },
    ]);
  } },
              { label: '"No way, you were just having fun!"', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A27', 1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/vera/verasmoke.jpg');
    scene.text('You give her a knowing smile as you shake your head. "No way! You were both consenting adults, and you both had an orgasm…"');
    scene.text('She smiles when she notices you\'re not judging her. "Exactly! We were just having some fun and not doing anyone any harm. There\'s nothing wrong with that!"');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', ''] },
    ]);
  } },
            ]);
          } else {
            if (((s as any).veraboyrand ?? 0) === 4) {
              scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/sex/anal/dog2.jpg');
              scene.text('Vera continues her sex stories. "After the incident in the club, I didn\'t talk to Leszek for a while. I couldn\'t stay mad at him forever, though. He\'s a really good-natured and funny guy, and when it came to sex he\'s an animal. He was insatiable, and soon enough we were having sex almost every day. I could tell he had a thing for my ass since he was always fingering it while he was fucking me."');
              scene.text('"One day, I couldn\'t stop him any longer and he pinned me down on the bed before shoving his dick up my ass. It hurt at first, but soon enough that\'s all he wanted: he\'d fuck my ass every day, and I got used to it really fast. I couldn\'t get pregnant that way, which helped me relax a lot. It was also a good way to keep having sex while I was on my period. Soon enough, I was even having orgasms as he fucked my ass and I touched myself. They\'re the best orgasms a girl can have! So intense!"');
              scene.actions([
                { label: '"That\'s disgusting!"', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A27', (-1));
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/vera/verasmoke.jpg');
    scene.text('You can\'t hide your disgust. "Anal sex?" you exclaim. "Urgh! That\'s disgusting!"');
    // TODO-QSP: dynamic text: Vera just gives you a disappointed look before she grins. "Oh dear… <<$pcs_nickn...
    scene.text(`Vera just gives you a disappointed look before she grins. "Oh dear… ${((s as any).pcs_nickname || '')}, you're such a prude!"`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', ''] },
    ]);
  } },
                { label: '"Wow, that sounds hot!"', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A27', 1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/vera/verasmoke.jpg');
    scene.text('You give Vera a knowing grin. "Wow, anal every day… That sounds so hot!"');
    scene.text('She smiles at you. "After some practice, it was really easy to relax my ass enough to take his dick in without any pain. And the orgasms… Wow, they were heavenly!"');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', ''] },
    ]);
  } },
              ]);
            } else {
              if (((s as any).veraboyrand ?? 0) === 5) {
                scene.img('images/characters/pavlovsk/resident/vera/sex/bvtalk5.jpg');
                scene.text('Vera tells another story. "So, one time I was having some drinks with Leszek in his room… Except he also invited his neighbor. I was already anticipating having sex with Leszek, so I was disappointed that he invited his friend over. After about half an hour, he asked me to suck his dick, right in front of his friend! I thought he was joking, but his face was very serious. He even pulled his dick out of his pants with his friend right there in the room."');
                scene.text('She blushes slightly she continues. "I… did what I always did for Leszek. I dropped to my knees and took it in my mouth, just like he wanted. I pretended his friend wasn\'t there and just focused on making Leszek feel good. His friend watched for a moment, and then asked if he could join in. Leszek agreed, and without even asking me, his friend pulled his pants down and pushed his dick against my lips, telling me to suck him too."');
                scene.text('"I did. It felt strange having two dicks in my mouth at once, but Leszek liked it and kept encouraging me, telling me what a great little slut I was for him. Then we did all sorts of positions as they double penetrated me, and after that they both put their dicks in my ass at once! When they both ended on my face, Leszek told me to leave it there for a minute. He told me what a huge whore I was, and that I shouldn\'t fight my true nature and just embrace it."');
                // TODO-QSP: dynamic text: "They continued fucking me throughout that whole night. It was '+func('time', 'g...
                scene.text('"They continued fucking me throughout that whole night. It was 4:00 by the time they were spent. Leszek liked it so much that he kept inviting his friend over from then on. The following years Leszek would invite him more and more often, and they\'d both fuck me any way they pleased. Towards the end, they were spitroasting and double penetrating me every day."');
                scene.text('Vera almost tears up as she continues. "Then that bastard graduated! Leszek was one year ahead of me. He went to the United Kingdom without even saying goodbye when he left the country! I haven\'t seen him since. I felt so alone… Leszek was the love of my life and I couldn\'t believe he would just abandon me like that."');
                scene.actions([
                  { label: '"Two guys at once? You slut!"', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A27', (-1));
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/vera/verasmoke.jpg');
    scene.text('You shake your head in disbelief. "Two at once!? I know you liked Leszek, but wow! That\'s so slutty! And for so long too! He must\'ve just thought of you as a piece of meat the whole time."');
    scene.text('Vera doesn\'t like your tone and tries to defend herself. "Hey! Leszek was my boyfriend and I know he loved me too! I really loved him… I just pretended his friend wasn\'t really there. I only did it to make Leszek happy!"');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', ''] },
    ]);
  } },
                  { label: '"Two guys at once? Good for you!"', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A27', 1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/vera/verasmoke.jpg');
    scene.text('You grin at Vera. "Two guys at once whenever you wanted? Wow, that sounds like it could be fun! You\'re so lucky, Vera!"');
    scene.text('She nods at you, fondly remembering that time even though she won\'t admit it. "Oh yes… Two guys at once is definitely an interesting experience, but if you ask me it\'s still better to be able to devote all your attention to one person."');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', ''] },
    ]);
  } },
                ]);
              } else {
                if (((s as any).veraboyrand ?? 0) === 6) {
                  scene.img('images/characters/pavlovsk/resident/vera/sex/bvtalk6.jpg');
                  scene.text('Vera continues her story. "After Leszek left, I didn\'t know what to do. I cried myself to sleep at night and I was considering going to the UK, hoping to find him again. I\'m not even sure why, but I loved him so much. Nevertheless, I realized I had to move on. I decided to find a new guy, and I did. His name was Lesko. He was a firefighter, a good guy with a nice future ahead of him. We dated for a while, but he was taking things really slow. When we finally had sex, I begged him to fuck my ass!"');
                  scene.text('"I was so used to that, it\'s all Leszek ever did! With some reluctance, he did… and after he came, I enthusiastically licked his dick clean and sucked him off a little. Somehow, that scared him. He was expecting a cute young wallflower, not someone with the sexual experience that I had. It intimidated him a lot, and he wondered what the hell I had done to be that experienced already at that point in my life. We had a talk about it, but I could already tell he did not see a future with me in it. Without ever even getting into a fight about it, that was it really. He left and I never saw him again."');
                  scene.actions([
                    { label: '"You\'re such a whore, Vera!"', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A27', (-1));
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/vera/verasmoke.jpg');
    scene.text('You listen to her story while covering your mouth with your hand. "No way, that poor guy! He must\'ve thought you were a huge whore!" you exclaim. "I can\'t believe you did that on your first time!"');
    scene.text('Vera just shrugs, unhappy you\'re taking his side. "Hey, you don\'t know what it\'s like! When your former boyfriend fucked you together with his friend almost daily for years on end, you can\'t just go back to boring vanilla sex! Lesko wasn\'t ready for me, but I bet he regrets it now…"');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', ''] },
    ]);
  } },
                    { label: '"He just wasn\'t right for you!"', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A27', 1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/vera/verasmoke.jpg');
    scene.text('"He doesn\'t know what he\'s missing!" you exclaim. "I can understand he\'d be a bit surprised at first, but after a while a lot of men would love to have a girl who\'s a bit more experienced and open to trying other things!"');
    scene.text('Vera smiles at you as she nods. "It was a big step back from getting fucked daily by two guys for several years in all my holes! I was just used to getting satisfied like that. I wonder if he regrets walking out on me? I bet I would\'ve satisfied him in more ways than any other girl ever could!"');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', ''] },
    ]);
  } },
                  ]);
                } else {
                  if (((s as any).veraboyrand ?? 0) === 7) {
                    scene.img('images/characters/pavlovsk/resident/vera/sex/bvtalk7.jpg');
                    scene.text('Vera tells another chapter of her story. "After I screwed up my relationship with the firefighter, I decided to not make that mistake again. I took it slow with my new boyfriend, Sasha. I behaved like an innocent girl who would only have sex in the missionary position. And you know what? It worked! Sasha was so pround when he finally \'convinced\' me to give him a blowjob!"');
                    scene.text('"I honestly felt like I was acting, pretending to be a naive girl who he had to convince to swallow his semen. When I finished college, Sasha asked me to marry him, but I refused. I got so tired of pretending to be a good girl. I just wanted to get fucked! I knew he wouldn\'t be able to offer me that, so I broke it off."');
                    scene.actions([
                      { label: '"Just when you finally met a good guy!"', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A27', (-1));
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/vera/verasmoke.jpg');
    scene.text('You shake your head in disbelief. "Wow… It sounds like you finally met a good guy. I can\'t believe you let him go!"');
    // TODO-QSP: dynamic text: "Hardly!" she haughtily replies. "He never lasted long in bed. He'd get on top o...
    scene.text(`"Hardly!" she haughtily replies. "He never lasted long in bed. He'd get on top of me and finish within 30 seconds! The few times I got him to lick me, he never even got close to my asshole. He pretended it wasn't even there! There were so many times I just wanted to beg him to fuck my ass hard and make me cum! You'll see what I mean, ${((s as any).pcs_nickname || '')}. If your man doesn't want to try things, you'll remember this conversation, and you'll realize that I'm right. Life is too short to spend with a man who doesn't satisfy you."`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', ''] },
    ]);
  } },
                      { label: '"He wasn\'t right for you either!"', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A27', 1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/vera/verasmoke.jpg');
    scene.text('You nod understandingly. "That sounds awful! He sounds so boring… There are so many things you can do with your body if you\'re open to the idea of trying new things!"');
    scene.text('She grins. "Exactly! With the experience I had, getting fucked by two guys at once almost daily, there\'s no way I could see myself spend the rest of my days like that! And I knew he wouldn\'t change, so I had to let him go."');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', ''] },
    ]);
  } },
                    ]);
                  } else {
                    if (((s as any).veraboyrand ?? 0) === 8) {
                      scene.img('images/characters/pavlovsk/resident/vera/sex/bvtalk8.jpg');
                      scene.text('Vera tells you the last part of her sexual history. You can tell she\'s not proud of it, but nevertheless she begins. "After I graduated from college and broke up with Sasha, I had to make a choice: return to the village and tend to some boring cows until I die, or somehow make it in the city. I decided to do the one thing I was good at: have sex. For money. Yeah, you heard me right… I became a prostitute."');
                      // TODO-QSP: dynamic text: "I figured I would only do it for a little while, earn some money to find my own...
                      scene.text(`"I figured I would only do it for a little while, earn some money to find my own place, get a good job and stop there. That's not what happened. I ended up in an illegal brothel where the owner took my passport and wouldn't even let me out to buy cigarettes. Several people would come to fuck me every day. Saturdays were the worst. He'd rent me out to a group of criminals regularly who would fuck me all night and stick beer bottles in my pussy and anus by the end of the night, when they no longer wanted me. It was hell, ${((s as any).pcs_nickname || '')}!"`);
                      scene.text('"I don\'t know what would\'ve happened to me if the police didn\'t raid the brothel that one night, about a year after I got there. I might\'ve ended up dead in a ditch somewhere. I spent a few weeks in prison, but after that the court only gave me a fine and released me. With the money I had saved up, I moved to Pavlovsk, where I met Anatoly and settled down with him. It\'s not the life I had in mind for myself, but… It wasn\'t so bad, after all I\'d been through."');
                      scene.actions([
                        { label: '"That\'s fucked up!"', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A27', (-1));
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/vera/verasmoke.jpg');
    scene.text('You look at Vera in disbelief, never having expected this end to her story. "Prostitution!? That\'s terrible, Vera! How could you!?"');
    // TODO-QSP: dynamic text: She hangs her head in shame for a moment, but then rebounds. "I was young and na...
    scene.text(`She hangs her head in shame for a moment, but then rebounds. "I was young and naive, ${((s as any).pcs_nickname || '')}! A stupid girl who thought her pussy could conquer the world. It was foolish of me, but I've paid my dues and ended up just fine. Things could've been a lot worse."`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', ''] },
    ]);
  } },
                        { label: '"At least you ended up doing okay!"', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A27', 1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/vera/verasmoke.jpg');
    scene.text('You put your hand on her shoulder and try to cheer her up. "Hey, everyone makes mistakes! At least you ended up okay!"');
    scene.text('She gives you a bittersweet smile. "Yeah, I guess I did. Anatoly doesn\'t satisfy me in the slightest, but life with him is still better than some of the other things I\'ve seen. I guess I should be grateful for that."');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', ''] },
    ]);
  } },
                      ]);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  } },
            ]);
          }
        } else {
          if (((s as any).veratalkrand ?? 0) === 2) {
            (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
            scene.text('To your surprise, Vera tells you that she also had a lesbian experience at university.');
            if (((s as any).npc_rel ?? 0)?.['A27'] >= 50) {
              scene.actions([
                { label: '"Tell me more!"', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/vera/sex/lvtalk.jpg');
    scene.text('Vera smirks, noticing your sudden interest, but tells you the story without much enthusiasm. "There was this girl in college. We got along just fine. Then one night when we got a bit drunk, she started to kiss me! Before I knew it, her head was between my legs! She sure knew what she was doing. It felt nice, but I couldn\'t quite reach an orgasm. The thought of having a girl between my legs was just too weird. We tried a few more times, playing with each other\'s bodies, but it just wasn\'t for me. Nothing beats a hard cock to stretch all your holes out."');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', ''] },
    ]);
  } },
              ]);
            }
          } else {
            if (((s as any).veratalkrand ?? 0) === 3) {
              (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
              scene.text('Vera tells you about her sexual adventures with Anatoly.');
              if (((s as any).npc_rel ?? 0)?.['A27'] >= 50) {
                scene.actions([
                  { label: 'Ask for details', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/vera/verasmoke.jpg');
    scene.text('You\'re not sure whether you want to hear about your teacher\'s sex life, but ask anyway.');
    // TODO-QSP: dynamic text: Vera doesn't give it a second thought. "I guess it's the classic story. During t...
    scene.text(`Vera doesn't give it a second thought. "I guess it's the classic story. During the honeymoon phase, everything was great. He was always ready to go and open to try new things. We fucked a lot those first months. Every day, all night long, in my ass while I was on my period, we just never stopped. But now, he barely even notices me. I bet he's fucking one or two of those sluts in his classes… How do I compete with younger girls like that, ${((s as any).pcs_nickname || '')}?"`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', ''] },
    ]);
  } },
                ]);
              }
            }
          }
        }
      }
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', ''] },
      ]);
    } else {
      if (((s as any).npc_rel ?? 0)?.['A27'] <= 0) {
        scene.text('You approach Vera, happy to have another chat to break the monotony of the day. She\'s having none of it, though, and waves you away.');
        // TODO-QSP: dynamic text: "Leave me alone, <<$pcs_nickname>>! I don't want to talk to you."
        scene.text(`"Leave me alone, ${((s as any).pcs_nickname || '')}! I don't want to talk to you."`);
        scene.actions([
          { label: 'Apologize', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A27', 1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/vera/verasmoke.jpg');
    scene.text('You apologize to Vera, admitting that maybe she was right after all and that you were too quick to judge.');
    if (((s as any).npc_rel ?? 0)?.['A27'] <= 0) {
      scene.text('However, Vera is not interested in your apology and tells you to get lost. Maybe she\'ll be in a better mood tomorrow?');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A27'] > 0) {
        // TODO-QSP: dynamic text: Vera nods. "Thanks <<$pcs_nickname>>, I appreciate the apology. I guess I should...
        scene.text(`Vera nods. "Thanks ${((s as any).pcs_nickname || '')}, I appreciate the apology. I guess I should forgive you."`);
      }
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', ''] },
    ]);
  } },
          { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', ''] },
        ]);
      }
    }
  } },
    ]);
  } else {
    if (((s as any).verakassir ?? 0) === 2  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 20  &&  (!((s as any).verarand ?? 0))) {
      scene.text('Vera is enjoying a cigarette during a slow moment at the ticket office. You could go and have a chat.');
      scene.actions([
        { label: 'Chat with Vera', handler: (st: GameState) => {
    (s as any).verakassir = 3;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A27', 10);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/vera/verasmoke.jpg');
    scene.text('You put your cleaning supplies aside and walk over to Vera, who also seems to be having a slow day. After a while, the topic ends up being her sex life and how her husband doesn\'t satisfy her in bed anymore.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', ''] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).verakassir ?? 0) === 1  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 20  &&  (!((s as any).verarand ?? 0))) {
        scene.text('The cashier in the ticket office is having a cigarette break. You know her name is Vera.');
        scene.actions([
          { label: 'Chat with Vera', handler: (st: GameState) => {
    (s as any).verakassir = 2;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A27', 10);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/vera/verasmoke.jpg');
    scene.text('You go and chat for a few minutes with Vera while she smokes her cigarette, exchanging stories of how your days have been.');
    scene.text('During your talk, you learn that Vera is married and has a child. It turns out she\'s the mother of Valeria Tsarev, the girl in your class you know as Lera. That means her husband must be Anatoly E. Tsarev, one of the teachers at school.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', ''] },
    ]);
  } },
        ]);
      } else {
        if (((s as any).verakassir ?? 0) === 0  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 20) {
          scene.text('While you\'re on your way to clean the ladies\' restroom, you see the cashier in the ticket office look at you.');
          scene.text('She gives you a friendly nod as she smokes a cigarette, and you decide you could go for a quick break and have a chat if you feel like it.');
          scene.actions([
            { label: 'Chat with the cashier', handler: (st: GameState) => {
    (s as any).verakassir = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A27', 10);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/vera/verasmoke.jpg');
    scene.text('You approach the cashier and, not sure how to start the conversation, ask her how long she\'s been working at the Pavlovsk station.');
    scene.text('She smiles. "Oh, a few years now. What about you, girl? Why are you working as a cleaner here?"');
    scene.text('You look sad for a moment and tell her about your lack of money. "Times are tough, you know? Working here doesn\'t pay very well, but in this economy I have to take what I can get."');
    // TODO-QSP: dynamic text: She nods, fully understanding your problem before her eyes suddenly light up. "O...
    scene.text('She nods, fully understanding your problem before her eyes suddenly light up. "Oh! You know how there are long-distance trains arriving at the station at 11:00 and 18:00 every day? The station is always packed with tourists then. I bet you could make some good money selling trinkets and baubles to them!"');
    scene.text('When she notices your interest, she continues. "There\'s a warehouse in the city industrial district where you can buy items that tourists will like. You can sell them at the station for a good profit. Just make sure the police don\'t see you. They don\'t like it when you sell things without a permit."');
    // TODO-QSP: dynamic text: "Thanks for the tip, maybe I will!" you reply. "By the way, my name is <<$pcs_ni...
    scene.text(`"Thanks for the tip, maybe I will!" you reply. "By the way, my name is ${((s as any).pcs_nickname || '')}."`);
    scene.text('She smiles. "Vera Tsarev, pleased to meet you. I have to get back to work now, but I\'ll be seeing you around!"');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', ''] },
    ]);
  } },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterToiletEvent(s: GameState, scene: SceneBuilder): void {
  (s as any).startevtoirand = Math.floor(Math.random() * 2) + 0;
  if ((!((s as any).startevtoirand ?? 0))) {
    (s as any).vokmantoitipev = Math.floor(Math.random() * 4) + 0;
    if ((!((s as any).vokmantoitipev ?? 0))) {
      if (((s as any).gloryholeVokzal ?? 0) === 1) {
        (s as any).gloryholeVokzal = 2;
        scene.text('You notice a puddle of a strange white liquid on the floorv near the hole in the wall between two stalls. When you take a piece of cloth and attempt to clean it, you realize it\'s sperm. The hole in the wall suddenly makes sense to you.');
      }
      if ((!((s as any).gloryholeVokzal ?? 0))) {
        (s as any).gloryholeVokzal = 1;
        scene.text('You notice a waist height circular hole in the wall between two of the toilet stalls. You shrug and keep cleaning, not thinking anything of it.');
      }
    } else {
      if (((s as any).vokmantoitipev ?? 0) === 1) {
        scene.text('The station manager walks over to one of the urinals as you work and lowers his pants just enough to pull his dick out.');
        if (((s as any).pcs_horny ?? 0) >= 50) {
          scene.actions([
            { label: 'Try to sneak a peek', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).seepeenach = ((s as any).seepeenach ?? 0) + (1);
    (s as any).tot_seepee = ((s as any).tot_seepee ?? 0) + (1);
    if (((s as any).tot_seepee ?? 0) > 5) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    }
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/trainstation/event/seepee.jpg');
    scene.text('You try and sneak a glance at his flacid penis and succeed. When he\'s done, he washes his hands before he leaves.');
    scene.text('You then hear a man loudly empty his bowels and focus on finishing your work as fast as you can, doing your best to ignore the smell.');
    qspCall(s, 'arousal', 'voyeur', 3);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', 'work'] },
    ]);
  } },
          ]);
        }
      } else {
        if (((s as any).vokmantoitipev ?? 0) === 2) {
          scene.text('The police captain, Katalkin, walks over to one of the urinals as you work. He lowers his pants just enough to pull his dick out.');
          if (((s as any).pcs_horny ?? 0) >= 50) {
            scene.actions([
              { label: 'Try to sneak a peek', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).seepeecop = ((s as any).seepeecop ?? 0) + (1);
    (s as any).tot_seepee = ((s as any).tot_seepee ?? 0) + (1);
    if (((s as any).tot_seepee ?? 0) > 5) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    }
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/trainstation/event/seepee.jpg');
    scene.text('You try and sneak a glance at his flacid penis and succeed. He doesn\'t wash his hands before he leaves.');
    scene.text('You then hear a man loudly empty his bowels and focus on finishing your work as fast as you can, doing your best to ignore the smell.');
    qspCall(s, 'arousal', 'voyeur', 3);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', 'work'] },
    ]);
  } },
            ]);
          }
        } else {
          if (((s as any).vokmantoitipev ?? 0) === 3) {
            scene.text('A random passenger walks over to one of the urinals as you work and lowers his pants just enough to pull his dick out.');
            if (((s as any).pcs_horny ?? 0) >= 50) {
              scene.actions([
                { label: 'Try to sneak a peek', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).seepeeman = ((s as any).seepeeman ?? 0) + (1);
    (s as any).tot_seepee = ((s as any).tot_seepee ?? 0) + (1);
    if (((s as any).tot_seepee ?? 0) > 5) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    }
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/trainstation/event/seepee.jpg');
    scene.text('You try and sneak a glance at his flacid penis and succeed. He doesn\'t wash his hands before he leaves.');
    scene.text('You then hear a man loudly empty his bowels and focus on finishing your work as fast as you can, doing your best to ignore the smell.');
    qspCall(s, 'arousal', 'voyeur', 3);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', 'work'] },
    ]);
  } },
              ]);
            }
          }
        }
      }
    }
  } else {
    if (((s as any).startevtoirand ?? 0) > 0) {
      scene.text('You hear a man loudly empty his bowels and focus on finishing your work as fast as you can, doing your best to ignore the smell.');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterTrinkets(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  (s as any).prodskill = ((s as any).pcs_apprnc ?? 0)/4 + ((s as any).pcs_sprt ?? 0);
  if (((s as any).prodskill ?? 0) < 20) {
    (s as any).prodskill = 20;
  }
  if (((s as any).prodskill ?? 0) >= 150) {
    (s as any).minimumtov = 3;
  }
  if (((s as any).prodskill ?? 0) > 100  &&  ((s as any).prodskill ?? 0) <= 150) {
    (s as any).minimumtov = 2;
  }
  if (((s as any).prodskill ?? 0) < 100) {
    (s as any).minimumtov = 1;
  }
  (s as any).tovarand = (Math.floor(Math.random() * (((s as any).prodskill ?? 0) / 10 - ((s as any).minimumtov ?? 0) + 1)) + (((s as any).minimumtov ?? 0)));
  if (((s as any).tovarand ?? 0) > ((s as any).mc_inventory ?? 0)?.['trinkets_home']) {
    (s as any).tovarand = ((s as any).mc_inventory ?? 0)?.['trinkets_home'];
  }
  (s as any).tovpay = ((s as any).tovarand ?? 0) * 300;
  qspCall(s, 'money', 'earn', ((s as any).tovpay ?? 0), 'cash');
  ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['trinkets_home'] = ((s as any).mc_inventory['trinkets_home'] ?? 0) - (((s as any).tovarand ?? 0));
  qspCall(s, 'exp_gain', 'sprt', Math.floor(Math.random() * 2) + 0);
  (s as any).TorgVokzalTimes = ((s as any).TorgVokzalTimes ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/market/peron.jpg');
  // TODO-QSP: dynamic text: You manage to sell <<tovarand>> trinkets to passengers today, earning ' + $func(...
  scene.text(`You manage to sell ${((s as any).tovarand || '')} trinkets to passengers today, earning ' + $func('money', 'string_profit', tovpay) + '.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/katalkin/katalkin.jpg');
    if (((s as any).pcs_intel ?? 0) + ((s as any).pcs_prcptn ?? 0) > 80  &&  (Math.floor(Math.random() * 6) + 0) === 5) {
      scene.text('Two police officers have been keeping an eye on you while you were selling your goods. As you\'re about to leave the platform, they move to intercept you, but you quickly dash into a large group of students and hide yourself amongst them. The officers get caught up in the crowd and your route opens up.');
      return;
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', ''] },
      ]);
    } else {
      scene.text('Two police officers have been keeping an eye on you while you were selling your goods. As you\'re about to leave the platform, they approach you.');
      scene.text('"Excuse me, miss," Captain Katalkin says. "We saw you attempting to sell items to passengers. Do you have the proper permit for that? We need to see your papers."');
    }
    scene.actions([
      { label: 'Bribe them', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 500, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 500, 'cash');
      qspCall(s, 'stat', '');
      scene.img('images/characters/pavlovsk/resident/katalkin/katalkin.jpg');
      scene.text('You smile at them. "Of course! One moment…"');
      // TODO-QSP: dynamic text: You look around and, when you're sure the coast is clear, stick out your hand wi...
      scene.text('You look around and, when you\'re sure the coast is clear, stick out your hand with a 500₽ note in it.');
      scene.text('The officers smile at you. "I see everything\'s in order. Have a nice day, miss."');
      scene.text('They quickly take the bribe and walk away.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', ''] },
      ]);
    }
  } },
      { label: 'Beg him to forgive you', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/katalkin/katalkin.jpg');
    scene.text('You show him your best innocent face. "Please sir, times are tough! Please let me go, I promise it won\'t happen again!"');
    if ((!((s as any).katalkinSexOnce ?? 0))) {
      (s as any).schtraf = 500;
      scene.text('Captain Katalkin grins at you. "We\'ll see… Come with me to the police station. We\'ll have to have a little chat about this."');
      scene.actions([
        { label: 'Go to the police station', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).katalkinNoexit = 1;
  }, goto: ['katalkin', ''] },
      ]);
    } else {
      if (((s as any).katalkinSexDay ?? 0)+7 >= ((s as any).daystart ?? 0)) {
        scene.text('Captain Katalkin recognizes you and grins, remembering his recent adventures with you. "You again? Well okay, go on then. Run along."');
        scene.actions([
          { label: 'Thank him and leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', ''] },
        ]);
      } else {
        if (((s as any).katalkinSexDay ?? 0) + 7 < ((s as any).daystart ?? 0)) {
          // TODO-QSP: dynamic text: Captain Katalkin suddenly recognizes you and frowns. "<<$pcs_nickname>>? You hav...
          scene.text(`Captain Katalkin suddenly recognizes you and frowns. "${((s as any).pcs_nickname || '')}? You haven't come to see me in a long time… I thought we had an agreement. Are you avoiding me?"`);
          scene.actions([
            { label: 'No you haven\'t!', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/katalkin/katalkin.jpg');
    scene.text('You blurt out a mixture of protests and apologies. "No sir! I\'ve just been busy, that\'s all… I\'m sorry."');
    scene.text('Captain Katalkin\'s face brightens. "We can fix that. You\'re coming with me to the police station now. I think I need to perform a thorough cavity search to make sure you\'re not smuggling anything."');
    scene.text('He firmly puts his hand on your shoulder.');
    scene.actions([
      { label: 'Let him guide you', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).katalkinNoexit = 1;
  }, goto: ['katalkin', ''] },
    ]);
  } },
          ]);
        }
      }
    }
  } },
      { label: 'Admit you have no permit', handler: (st: GameState) => {
    qspCall(s, 'money', 'set', 0, 'cash');
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['trinkets_home'] = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 120;
    qspCall(s, 'mood', 'lower', 'huge');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/katalkin/katalkin.jpg');
    scene.text('You decide to come clean to them, and admit you don\'t have the required papers. They do what you expected. They take you to the police station and confiscate all of your money and items, even the money that you didn\'t earn by selling souvenirs.');
    scene.text('You try to object, but they don\'t listen and tell you you\'re lucky to not end up in jail. After two hours and a stern talking-to about the importance of permits, you\'re free to go.');
    scene.actions([
      { label: 'Leave the police station', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', ''] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'manager':
      enterManager(s, scene);
      break;
    case 'wallet1':
      enterWallet1(s, scene);
      break;
    case 'wallet2':
      enterWallet2(s, scene);
      break;
    case 'vera':
      enterVera(s, scene);
      break;
    case 'toilet_event':
      enterToiletEvent(s, scene);
      break;
    case 'trinkets':
      enterTrinkets(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pav_train_hall_events: LocationDef = {
  name: 'pav_train_hall_events',
  title: 'As you walk past the station manager\'s office, you notice a ',
  region: 'pavlovsk',
  enter: enter,
};
