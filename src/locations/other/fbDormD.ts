import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterDFbdStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('In the hallway, you\'re stopped by an older lady. You can only guess she\'s the caretaker for the building.');
  // TODO-QSP: dynamic text: She halts <<$npcdesc>> and says: "What''s this… another one? That''s already the...
  scene.text(`She halts ${((s as any).npcdesc || '')} and says: "What's this… another one? That's already the third girl you brought over! You know we don't normally allow guests!"`);
  // TODO-QSP: dynamic text: <<$npcdesc>> grins at her apologetically and shrugs: "Just having some fun while...
  scene.text(`${((s as any).npcdesc || '')} grins at her apologetically and shrugs: "Just having some fun while on holiday, aunt Inga. You know how it is…"`);
  // TODO-QSP: dynamic text: You see her halt for a second, probably thinking back to her youth. Then she ref...
  scene.text(`You see her halt for a second, probably thinking back to her youth. Then she refocuses, and nods at ${((s as any).npcdesc || '')}: "Alright, yea… just don't cause any trouble!"`);
  scene.text('Then she lets you pass and shuffles down the hallway with a wistful smile on her face.');
  (s as any).tiprand = (Math.floor(Math.random() * 100) + 1);
  if (((s as any).tiprand ?? 0) < 60) {
    (s as any).fbde = 3;
  } else {
    if (((s as any).tiprand ?? 0) < 90) {
      (s as any).fbde = 2;
    } else {
      (s as any).fbde = 1;
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Enter the room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    if (((st as any).fbde ?? 0) <= 1) {
      // TODO-QSP: dynamic text: When you enter the room, you see it''s crowded with boys! It seems that some of ...
      scene.text(`When you enter the room, you see it's crowded with boys! It seems that some of ${((st as any).npcdesc || '')}'s friends were having a party in the hostel. One of them walks up to greet you and says to ${((st as any).npcdesc || '')}: "Hey man, what's up? How about you introduce us to your girlfriend?"`);
      // TODO-QSP: dynamic text: <<$npcdesc>> happily shakes his hand and introduces you to his friends one by on...
      scene.text(`${((st as any).npcdesc || '')} happily shakes his hand and introduces you to his friends one by one, after which you look for a place to sit. There aren't enough chairs in the room, so you sit down on a bed next to ${((st as any).npcdesc || '')}. One of his friends is on the other side, but you already forgot his name again. Not important, anyway. You cuddle up against ${((st as any).npcdesc || '')}, not caring much for the other guy. Without even asking, one of the guys pours some vodka in a glass and hands it to you.`);
      scene.actions([
        { label: 'Drink the booze', goto: ['fbDormD', 'd_fbd_mass'] },
      ]);
    } else {
      if (((st as any).fbde ?? 0) === 2) {
        // TODO-QSP: dynamic text: You expected there to be other people in the room, but to your surprise it''s em...
        scene.text(`You expected there to be other people in the room, but to your surprise it's empty. ${((st as any).npcdesc || '')} closes the door behind you and pulls you towards him, kissing you roughly.`);
        scene.actions([
          { label: 'Kiss him', goto: ['fbDormD', 'd_fbd_regular'] },
        ]);
      } else {
        if (((st as any).fbde ?? 0) === 3) {
          // TODO-QSP: dynamic text: When you enter the room, you see an unfamiliar guy sitting on one of the beds, r...
          scene.text(`When you enter the room, you see an unfamiliar guy sitting on one of the beds, reading a book. ${((st as any).npcdesc || '')} greets him and walks up to him, whispering something in his ear.`);
          (st as any).tiprand = (Math.floor(Math.random() * 100) + 1);
          if (((st as any).tiprand ?? 0) < 90) {
            // TODO-QSP: dynamic text: The guy quickly puts on his shoes and says goodbye as he leaves the room with hi...
            scene.text(`The guy quickly puts on his shoes and says goodbye as he leaves the room with his book, giving you and ${((st as any).npcdesc || '')} some privacy.`);
            scene.actions([
              { label: 'Kiss him', goto: ['fbDormD', 'd_fbd_regular'] },
            ]);
          } else {
            if (((st as any).tiprand ?? 0) >= 90) {
              // TODO-QSP: dynamic text: The guy grins as he puts his book away and introduces himself to you. Then he re...
              scene.text(`The guy grins as he puts his book away and introduces himself to you. Then he reaches for his bag, pulling out a bottle of vodka and some snacks. You hesitantly sit down on ${((st as any).npcdesc || '')}'s bed. ${((st as any).npcdesc || '')} immediately sits down next to you and wraps one arm around you, while his friend pours some vodka into glasses. He hands out the glasses before sitting down on your other side.`);
              scene.actions([
                { label: 'Enjoy the drink', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    qspCall(st, 'drugs', 'alcohol', 'vodka', 2);
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: While you take sips of the vodka, you chat with the guys. They''re quite interes...
    scene.text(`While you take sips of the vodka, you chat with the guys. They're quite interesting, having many stories to share about where they're from. While you drink and chat, more and more of ${((st as any).npcdesc || '')}'s friends return from what they were doing in Pavlovsk, and the room fills up slowly but surely. It's turning into quite a large group, and the room sounds like a disturbed bee hive while you continue to take sips of your drink, mostly chatting with ${((st as any).npcdesc || '')}. When your glass is almost empty, ${((st as any).npcdesc || '')} takes it from you and quickly refills it, offering it to you again.`);
    scene.actions([
      { label: 'Drink some more', handler: (st: GameState) => {
    (st as any).dormrape = 0;
    ((st as any).placerParameter = (st as any).placerParameter ?? {})['number_of_man'] = (Math.floor(Math.random() * 12) + 5);
    ((st as any).placerStringParameter = (st as any).placerStringParameter ?? {})['text_someone'] = 'guys';
    qspCall(st, 'drugs', 'alcohol', 'vodka', 4);
    qspGoto(st, 'placer_sex', 'meet');
  } },
    ]);
  } },
              ]);
            }
          }
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterDFbdRegular(s: GameState, scene: SceneBuilder): void {
  (s as any).guy = ((s as any).guy ?? 0) + (1);
  (s as any).parkfuckboy = ((s as any).parkfuckboy ?? 0) + (1);
  (s as any).fbdormtimes = ((s as any).fbdormtimes ?? 0) + (1);
  (s as any).pphj = 0;
  (s as any).ppbj = 0;
  (s as any).ppsex = 0;
  (s as any).ppanal = 0;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/sex/fbdkiss.jpg');
  // TODO-QSP: dynamic text: <<$npcdesc>> leads you to his house, and gallantly opens the door for you. He in...
  scene.text(`${((s as any).npcdesc || '')} leads you to his house, and gallantly opens the door for you. He invites you to take a seat on the couch and then sits down next to you, putting his arm around you. After you cuddle for a moment, he puts his hand on your chin as he guides your face towards his.`);
  // TODO-QSP: dynamic text: He''s cute! You open your mouth and kiss <<$npcdesc>> enthusiastically, and don'...
  scene.text(`He's cute! You open your mouth and kiss ${((s as any).npcdesc || '')} enthusiastically, and don't stop him when you feel his hands tugging at your clothes. He's slowly trying to undress you, but doesn't get very far in this position. After a while he gives up and just focuses on kissing you back, rubbing his hand over your thigh.`);
  qspCall(s, 'arousal', 'kiss', 5);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Take his cock in your mouth', goto: ['fbDormD', 'd_fbd_blowhim'] },
    { label: 'Keep kissing him', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/fbdkiss.jpg');
    (st as any).tiprand = (Math.floor(Math.random() * 100) + 1);
    qspCall(st, 'arousal', 'kiss', 5);
    qspCall(st, 'stat', '');
    if (((st as any).tiprand ?? 0) >= 80) {
      // TODO-QSP: dynamic text: <<$npcdesc>> gently but firmly puts his hand behind your neck and pushes your fa...
      scene.text(`${((st as any).npcdesc || '')} gently but firmly puts his hand behind your neck and pushes your face down towards his groin, where his already exposed and erect cock greets you.`);
      scene.actions([
        { label: 'Take his cock in your mouth', goto: ['fbDormD', 'd_fbd_blowhim'] },
      ]);
    } else {
      if (((st as any).tiprand ?? 0)<80  &&  ((st as any).tiprand ?? 0) >= 40) {
        // TODO-QSP: dynamic text: <<$npcdesc>> gets up and helps you take off your clothes, before he puts his han...
        scene.text(`${((st as any).npcdesc || '')} gets up and helps you take off your clothes, before he puts his hands on your shoulders and pushes you back against the couch, telling you to lie down on your back and spread your legs.`);
        scene.actions([
          { label: 'Get down on your back', goto: ['fbDormD', 'd_fbd_miss'] },
        ]);
      } else {
        if (((st as any).tiprand ?? 0) < 40) {
          // TODO-QSP: dynamic text: <<$npcdesc>> gets up and helps you take off your clothes, before he puts his han...
          scene.text(`${((st as any).npcdesc || '')} gets up and helps you take off your clothes, before he puts his hands on your shoulders and back. He slowly pushes you down, motioning for you to get on your hands and knees so he can fuck you from behind.`);
          scene.actions([
            { label: 'Get on your hands and knees', goto: ['fbDormD', 'd_fbd_dog'] },
          ]);
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterDFbdBlowhim(s: GameState, scene: SceneBuilder): void {
  (s as any).ppbj = ((s as any).ppbj ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/sex/fbdbj.jpg');
  qspCall(s, 'dinSex', 'bj_random');
  (s as any).tiprand = (Math.floor(Math.random() * 2) + 0);
  qspCall(s, 'arousal', 'bj', 5);
  qspCall(s, 'stat', '');
  if ((!((s as any).tiprand ?? 0))) {
    // TODO-QSP: dynamic text: <<$npcdesc>> gets up and helps you take off your clothes, before he puts his han...
    scene.text(`${((s as any).npcdesc || '')} gets up and helps you take off your clothes, before he puts his hands on your shoulders and pushes you back against the couch, telling you to lie down on your back and spread your legs.`);
    scene.actions([
      { label: 'Get down on your back', goto: ['fbDormD', 'd_fbd_miss'] },
    ]);
  } else {
    if (((s as any).tiprand ?? 0) === 1) {
      // TODO-QSP: dynamic text: <<$npcdesc>> gets up and helps you take off your clothes, before he puts his han...
      scene.text(`${((s as any).npcdesc || '')} gets up and helps you take off your clothes, before he puts his hands on your shoulders and back. He slowly pushes you down, motioning for you to get on your hands and knees so he can fuck you from behind.`);
      scene.actions([
        { label: 'Get on your hands and knees', goto: ['fbDormD', 'd_fbd_dog'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDFbdMiss(s: GameState, scene: SceneBuilder): void {
  (s as any).ppsex = ((s as any).ppsex ?? 0) + (1);
  (s as any).pose = 0;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/sex/fbdmiss.jpg');
  qspCall(s, 'dinsex', 'boy_puts_condom');
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  (s as any).tiprand = (Math.floor(Math.random() * 100) + 1);
  qspCall(s, 'arousal', 'vaginal', 5);
  qspCall(s, 'stat', '');
  if (((s as any).tiprand ?? 0) < 70) {
    qspCall(s, 'dinsex', 'sexcum');
    scene.actions([
      { label: 'Brush up', goto: ['fbDormD', 'd_fbd_end'] },
    ]);
  } else {
    if (((s as any).tiprand ?? 0) >= 50  &&  ((s as any).tiprand ?? 0) < 70) {
      // TODO-QSP: dynamic text: <<$npcdesc>> gets up and pulls you up, motioning for you to get on your hands an...
      scene.text(`${((s as any).npcdesc || '')} gets up and pulls you up, motioning for you to get on your hands and knees. He wants to fuck you from behind next.`);
      scene.actions([
        { label: 'Get on your hands and knees', goto: ['fbDormD', 'd_fbd_dog'] },
      ]);
    } else {
      if (((s as any).tiprand ?? 0) >= 70) {
        // TODO-QSP: dynamic text: <<$npcdesc>> suddenly pulls out of you and moves up towards your chest, pointing...
        scene.text(`${((s as any).npcdesc || '')} suddenly pulls out of you and moves up towards your chest, pointing his cock at your face. It's slick with your juices, and pulsates slightly.`);
        scene.actions([
          { label: 'Lie back on the bed', goto: ['fbDormD', 'd_fbd_face'] },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDFbdDog(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  (s as any).ppsex = ((s as any).ppsex ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/vag/doggy/fbhdog.jpg');
  qspCall(s, 'dinsex', 'boy_puts_condom');
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  (s as any).tiprand = (Math.floor(Math.random() * 100) + 1);
  qspCall(s, 'arousal', 'vaginal', 5);
  qspCall(s, 'stat', '');
  if (((s as any).tiprand ?? 0) < 70) {
    qspCall(s, 'dinsex', 'sexcum');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Brush up', goto: ['fbDormD', 'd_fbd_end'] },
    ]);
  } else {
    if (((s as any).tiprand ?? 0) >= 50  &&  ((s as any).tiprand ?? 0) < 70) {
      // TODO-QSP: dynamic text: <<$npcdesc>> decides to push his luck, and whispers for you to get down on your ...
      scene.text(`${((s as any).npcdesc || '')} decides to push his luck, and whispers for you to get down on your stomach. You turn to lie down as he says, and look back at him while you wonder what he's going to do next.`);
      scene.actions([
        { label: 'Lie down on your stomach', goto: ['fbDormD', 'd_fbd_anal'] },
      ]);
    } else {
      if (((s as any).tiprand ?? 0) >= 70) {
        // TODO-QSP: dynamic text: <<$npcdesc>> suddenly pulls out of you and moves up towards your chest, pointing...
        scene.text(`${((s as any).npcdesc || '')} suddenly pulls out of you and moves up towards your chest, pointing his cock at your face. It's slick with your juices, and pulsates slightly.`);
        scene.actions([
          { label: 'Lie back on the bed', goto: ['fbDormD', 'd_fbd_face'] },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDFbdFace(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  (s as any).spafinloc = 11;
  qspCall(s, 'cum_manage', '');
  (s as any).spafinloc = 12;
  qspCall(s, 'cum_manage', '');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/sex/fbdface.jpg');
  // TODO-QSP: dynamic text: <<$npcdesc>> jerks off, while his cock is pointing at your face. You instinctive...
  scene.text(`${((s as any).npcdesc || '')} jerks off, while his cock is pointing at your face. You instinctively stick out your tongue, and he rubs the head of his dick against it while he's approaching his orgasm. Suddenly a jet of sperm hits your face, covering you in cum. Several more follow, some of it getting into your mouth while the rest covers your cheeks and eye lids.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Brush up', goto: ['fbDormD', 'd_fbd_end'] },
  ]);
  scene.build();
}

function enterDFbdAnal(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  (s as any).ppanal = ((s as any).ppanal ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/sex/fbdanal.jpg');
  qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
  (s as any).tiprand = (Math.floor(Math.random() * 100) + 1);
  qspCall(s, 'arousal', 'anal', 5);
  qspCall(s, 'stat', '');
  if (((s as any).tiprand ?? 0) >= 70) {
    // TODO-QSP: dynamic text: <<$npcdesc>> suddenly pulls out of you and moves up towards your chest while you...
    scene.text(`${((s as any).npcdesc || '')} suddenly pulls out of you and moves up towards your chest while you turn around. His cock is pointing at your face.`);
    scene.actions([
      { label: 'Lie back on the bed', goto: ['fbDormD', 'd_fbd_face'] },
    ]);
  } else {
    if (((s as any).tiprand ?? 0) < 70) {
      (s as any).spafinloc = 4;
      qspCall(s, 'cum_manage', '');
      qspCall(s, 'stat', '');
      // TODO-QSP: dynamic text: <<$npcdesc>> groans, and you feel a warm liquid spreading inside your colon. He ...
      scene.text(`${((s as any).npcdesc || '')} groans, and you feel a warm liquid spreading inside your colon. He just came inside your ass.`);
      scene.actions([
        { label: 'Brush up', goto: ['fbDormD', 'd_fbd_end'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDFbdEnd(s: GameState, scene: SceneBuilder): void {
  if (((s as any).ppbj ?? 0) > 0) {
    ((s as any).stat = (s as any).stat ?? {})['bj'] = ((s as any).stat['bj'] ?? 0) + (1);
  }
  if (((s as any).pphj ?? 0) > 0) {
    ((s as any).stat = (s as any).stat ?? {})['hj'] = ((s as any).stat['hj'] ?? 0) + (1);
  }
  if (((s as any).ppsex ?? 0) > 0) {
    ((s as any).stat = (s as any).stat ?? {})['vaginal'] = ((s as any).stat['vaginal'] ?? 0) + (1);
  }
  if (((s as any).ppanal ?? 0) > 0) {
    ((s as any).stat = (s as any).stat ?? {})['anal'] = ((s as any).stat['anal'] ?? 0) + (1);
  }
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/undress/fbhend.jpg');
  // TODO-QSP: dynamic text: Once you''re finished, you quickly brush up and begin to put your clothes back o...
  scene.text(`Once you're finished, you quickly brush up and begin to put your clothes back on. ${((s as any).npcdesc || '')} grins at you smugly, already dressed again in a clean fancy dress shirt and pants. He runs his hand through your hair and says: "Thanks for that, ${((s as any).pcs_nickname || '')}. My friend was right, you Pavlovsk girls are fun! My roommates can be back at any time, though… you should probably go? Unless you want to have another go with them too?"`);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['pav_residential', ''] },
  ]);
  scene.build();
}

function enterDFbdMass(s: GameState, scene: SceneBuilder): void {
  (s as any).boy = ((s as any).boy ?? 0) + (2);
  ((s as any).stat = (s as any).stat ?? {})['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (1);
  (s as any).parkfuckboy = ((s as any).parkfuckboy ?? 0) + (1);
  (s as any).fbdormtimes = ((s as any).fbdormtimes ?? 0) + (1);
  (s as any).pphj = 0;
  (s as any).ppbj = 0;
  (s as any).ppsex = 0;
  (s as any).ppanal = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'drugs', 'alcohol', 'vodka', 2);
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (20);
  qspCall(s, 'stat', '');
  qspCall(s, 'npcgeneratec', '', 0, '' + ((s as any).npcdesc ?? 0) + '\'s friend', (Math.floor(Math.random() * 27) + 19));
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'b');
  qspCall(s, 'npcStat', '', ((s as any).npcID ?? 0), 'a');
  // TODO-QSP: dynamic text: You quietly drink the booze while you''re leaning against <<$npcdesc1>>. He begi...
  scene.text(`You quietly drink the booze while you're leaning against ${((s as any).npcdesc1 || '')}. He begins to kiss you, while his friend on the other side begins to gently stroke your ass cheeks through your clothes.`);
  // TODO-QSP: dynamic text: <<$npcdesc1>> grins at you and whispers: "Hey babe… what do you want to do next?...
  scene.text(`${((s as any).npcdesc1 || '')} grins at you and whispers: "Hey babe… what do you want to do next? We can go somewhere a little more private by ourselves, or maybe bring my friend along for a threesome? It's up to you…"`);
  // TODO-QSP: end
  scene.actions([
    { label: '"I only want you!"', handler: (st: GameState) => {
    (st as any).ppsex = ((st as any).ppsex ?? 0) + (1);
    (st as any).pose = 0;
    scene.img('images/shared/sex/mmf/fbdtsingle.jpg');
    // TODO-QSP: dynamic text: <<$npcdesc1>> begins to kiss you before he takes your hand and guides you to ano...
    scene.text(`${((st as any).npcdesc1 || '')} begins to kiss you before he takes your hand and guides you to another nearby room, where he pulls you down onto a mattress. Even though you said you wanted to be alone with ${((st as any).npcdesc1 || '')}, his friend enters the room a few seconds later.`);
    // TODO-QSP: dynamic text: <<$npcdesc1>> sees your startled look and reassures you: "Relax, babe… he''s not...
    scene.text(`${((st as any).npcdesc1 || '')} sees your startled look and reassures you: "Relax, babe… he's not going to do anything, he just likes to watch. Just focus on me, you do want to make me feel good, right?"`);
    // TODO-QSP: dynamic text: You nod meekly and close your eyes, enjoying <<$npcdesc1>>''s ministrations whil...
    scene.text(`You nod meekly and close your eyes, enjoying ${((st as any).npcdesc1 || '')}'s ministrations while he kisses you and slowly takes your clothes off. When you open your eyes again and turn your head, you see that his friend also got naked, and is slowly jerking himself off in the corner while ${((st as any).npcdesc1 || '')} moves in to fuck you. Weird… You close your eyes again, trying to forget about the friend while you focus on ${((st as any).npcdesc1 || '')} and his cock.`);
    qspCall(st, 'dinsex', 'boy_puts_condom');
    qspCall(st, 'dinsex', 'vaginal_sex', 10);
    qspCall(st, 'arousal', 'foreplay', 5);
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: While <<$npcdesc1>> fucks you, you open your mouth to moan. When you do, you sud...
    scene.text(`While ${((st as any).npcdesc1 || '')} fucks you, you open your mouth to moan. When you do, you suddenly feel something hard against your lips.`);
    qspCall(st, 'arousal', 'vaginal', 5, ((st as any).npcID1 ?? 0), 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Open your mouth', handler: (st: GameState) => {
    (st as any).ppsex = ((st as any).ppsex ?? 0) + (1);
    (st as any).pose = 0;
    (st as any).ppbj = ((st as any).ppbj ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/mmf/fbdtdouble.jpg');
    // TODO-QSP: dynamic text: You open your mouth instinctively, feeling something warm and solid pressing aga...
    scene.text(`You open your mouth instinctively, feeling something warm and solid pressing against your lips. You immediately feel it slip inside your mouth, and when you open your eyes you see little more than curly pubic hair. ${((st as any).npcdesc1 || '')}'s friend obviously decided to join you anyway, and put his erect prick in your mouth while you were not paying attention. You try to object, but can't say much with his cock still in your mouth. ${((st as any).npcdesc1 || '')} doesn't seem to mind sharing you anyway, and the guys ignore your muffled groans while they continue to fuck your pussy and your mouth at the same time.`);
    qspCall(st, 'arousal', 'vaginal', 5, ((st as any).npcID1 ?? 0), 'group');
    qspCall(st, 'arousal', 'bj', (-5), ((st as any).npcID2 ?? 0), 'group');
    qspCall(st, 'stat', '');
    qspCall(st, 'dinsex', 'sexcum');
    scene.actions([
      { label: 'Suck on the cock in your mouth', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img('images/shared/sex/cum/fbdtcum.jpg');
    scene.text('While you suck on the cock in your mouth, you suddenly feel a warm liquid in your mouth. It has quite a pungent odour, and has a bitter taste to it. The second guy just came in your mouth! You try to object again, but are too drunk to say anything coherent. The guys grin when they see you mostly just blowing cum bubbles when you try to talk.');
    qspCall(st, 'cum_call', 'mouth', ((st as any).npcID2 ?? 0));
    qspCall(st, 'cum_call', 'face', ((st as any).npcID2 ?? 0));
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Brush up', goto: ['fbDormD', 'd_fbd_end'] },
      { label: 'Just lie down for a moment', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: You don''t have the energy to do much about what the guys did… it''s over anyway...
    scene.text(`You don't have the energy to do much about what the guys did… it's over anyway, what's the point? You sigh and just relax on the mattress for a moment, to regain your focus. Then suddenly ${((st as any).npcdesc1 || '')} gently takes you by the shoulders and lifts you up, putting you down on your knees. Another erect cock is pointing straight at your face… wait, where did that come from? Whose dick is that?`);
    qspCall(st, 'cum_call', 'mouth', ((st as any).npcID1 ?? 0));
    qspCall(st, 'cum_call', 'face', ((st as any).npcID1 ?? 0));
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Open your mouth', goto: ['fbDormD', 'd_fbd_threesome'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    { label: '"Maybe…"', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
    (st as any).ppsex = ((st as any).ppsex ?? 0) + (1);
    (st as any).pose = 0;
    qspCall(st, 'stat', '');
    scene.text('You\'re too drunk to really think straight, and just mumble something.');
    // TODO-QSP: dynamic text: <<$npcdesc1>> grins at you, interpreting that as a go sign that he and his frien...
    scene.text(`${((st as any).npcdesc1 || '')} grins at you, interpreting that as a go sign that he and his friend can fuck you any way they want… it's not like you can tell them otherwise. He gently pulls you up and guides you to a nearby empty room, with his friend following the two of you. When they enter the room, his friend quickly locks the door while ${((st as any).npcdesc || '')} helps you get down on your knees. Both the guys drop their trousers, and ${((st as any).npcdesc || '')}'s friend impatiently moves his cock towards your face, spreading his precum on your lips while he waits for you to open your mouth.`);
    scene.actions([
      { label: 'Open your mouth', goto: ['fbDormD', 'd_fbd_threesome'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterDFbdThreesome(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Open your mouth', handler: (st: GameState) => {
    (st as any).ppbj = ((st as any).ppbj ?? 0) + (2);
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/mmf/fbdrbj.jpg');
    // TODO-QSP: dynamic text: You part your lips obediently without giving it any thought, knowing what''s exp...
    scene.text(`You part your lips obediently without giving it any thought, knowing what's expected of you in this position. You close your lips around his friend's cock, while ${((st as any).npcdesc1 || '')} takes your hand and rests it on his dick, expecting you to service him as well. You service both the cocks as best as you can, even though you're still not sure who this other guy even is.`);
    scene.text('One of the guys then gets up and positions himself behind you, while you continue sucking on the cock that\'s still in front of you.');
    qspCall(st, 'arousal', 'bj', 5, ((st as any).npcID2 ?? 0), 'group', 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Keep sucking on it', handler: (st: GameState) => {
    (st as any).ppsex = ((st as any).ppsex ?? 0) + (1);
    (st as any).pose = 1;
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/mmf/fbdrsex.jpg');
    // TODO-QSP: dynamic text: You keep sucking on the cock in front of you, as you figure the guys want you to...
    scene.text(`You keep sucking on the cock in front of you, as you figure the guys want you to do. You focus for a moment and realize that ${((st as any).npcdesc1 || '')} is behind you. The dick that's rubbing against your pussy lips is probably his… right? It must be.`);
    qspCall(st, 'dinsex', 'boy_puts_condom');
    qspCall(st, 'dinsex', 'vaginal_sex', 10);
    qspCall(st, 'arousal', 'bj', 5, ((st as any).npcID2 ?? 0), 'group', 'sub');
    qspCall(st, 'arousal', 'vaginal', (-5), ((st as any).npcID1 ?? 0), 'group', 'sub');
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: After a while, <<$npcdesc1>> pulls his cock out of your cunt and lightly caresse...
    scene.text(`After a while, ${((st as any).npcdesc1 || '')} pulls his cock out of your cunt and lightly caresses your puckered asshole with his fingers.`);
    qspCall(st, 'arousal', 'anal_finger', 5, ((st as any).npcID1 ?? 0), 'group', 'sub');
    qspCall(st, 'arousal', 'vaginal', (-5), ((st as any).npcID1 ?? 0), 'group', 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Try to relax and keep sucking', handler: (st: GameState) => {
    (st as any).ppsex = ((st as any).ppsex ?? 0) + (1);
    (st as any).pose = 1;
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/mmf/fbdranal.jpg');
    // TODO-QSP: dynamic text: You moan around his friend''s cock, while <<$npcdesc1>> keeps caressing your ass...
    scene.text(`You moan around his friend's cock, while ${((st as any).npcdesc1 || '')} keeps caressing your asshole and slowly pushes two fingers in. After a minute or so he decides you're ready, and pulls his hand away.`);
    qspCall(st, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
    qspCall(st, 'arousal', 'bj', 5, ((st as any).npcID2 ?? 0), 'group', 'sub');
    qspCall(st, 'arousal', 'anal_finger', (-5), ((st as any).npcID1 ?? 0), 'group', 'sub');
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: <<$npcdesc1>> then pulls his cock out of your ass, and slides down next to you o...
    scene.text(`${((st as any).npcdesc1 || '')} then pulls his cock out of your ass, and slides down next to you onto the bed. He's on his back, and motions for you to straddle him. You smile and swing your leg over his body, slowly positioning your pussy over his cock.`);
    scene.actions([
      { label: 'Slide yourself down onto his penis', handler: (st: GameState) => {
    (st as any).ppsex = ((st as any).ppsex ?? 0) + (1);
    (st as any).pose = 1;
    (st as any).dp = ((st as any).dp ?? 0) + (1);
    scene.img('images/shared/sex/mmf/fbdrdp.jpg');
    // TODO-QSP: dynamic text: Teasingly slowly you lower your body, feeling <<$npcdesc>>''s dick sinking furth...
    scene.text(`Teasingly slowly you lower your body, feeling ${((st as any).npcdesc || '')}'s dick sinking further and further into you. You lean forward and kiss him, and suddenly ${((st as any).npcdesc || '')} stops moving his hips. When you try to ask him why, you suddenly feel something warm and hard press against your sphincter. Damn, they're both going to fuck you at the same time!? You were not expecting this…`);
    qspCall(st, 'dinsex2', 'doublepenetration', 10, 'sub', 'group');
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: After a few minutes the guys are close to cumming, and <<$npcdesc>> hoarsely say...
    scene.text(`After a few minutes the guys are close to cumming, and ${((st as any).npcdesc || '')} hoarsely says he wants to see your face covered in sperm. The guys pull their cocks out of you, and ${((st as any).npcdesc || '')} tells you to get down on your knees in front of them so you can finish them off.`);
    scene.actions([
      { label: 'Kneel in front of them', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).cumface = ((st as any).cumface ?? 0) + (2);
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/group/cum/cumface15.jpg');
    scene.text('You nod and kneel down on a towel, wrapping your hands around the two cocks. They\'re still feeling slippery from your juices and the lubricant. As soon as you begin to jerk them off, a warm liquid shoots out of one of them and you close your eyes instinctively. Several warm jets of cum end up on your lips and cheeks. When you stick out your tongue testily, you wince at the strong taste. Immediately after you feel more drops coming in from the other side, the first one finding its way into your still slightly opened mouth. You quickly close your mouth again and let him shoot the rest of his cum over your tightly sealed lips. Whoever that was must have been saving up for a while, it\'s quite a large load!');
    scene.text('When you\'re certain they\'re finished, you carefully open your eyes and look at the guys. They have wide grins on their faces, and look proudly at your cum-covered face.');
    qspCall(st, 'cum_call', 'mouth', ((st as any).npcID1 ?? 0), 1, 0, 0, 5);
    qspCall(st, 'cum_call', 'face', ((st as any).npcID1 ?? 0), 1, 0, 0, 35);
    qspCall(st, 'cum_call', 'mouth', ((st as any).npcID2 ?? 0), 1, 0, 0, 5);
    qspCall(st, 'cum_call', 'face', ((st as any).npcID2 ?? 0), 1, 0, 0, 50);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Brush up', goto: ['fbDormD', 'd_fbd_end'] },
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

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'd_fbd_start':
      enterDFbdStart(s, scene);
      break;
    case 'd_fbd_regular':
      enterDFbdRegular(s, scene);
      break;
    case 'd_fbd_blowhim':
      enterDFbdBlowhim(s, scene);
      break;
    case 'd_fbd_miss':
      enterDFbdMiss(s, scene);
      break;
    case 'd_fbd_dog':
      enterDFbdDog(s, scene);
      break;
    case 'd_fbd_face':
      enterDFbdFace(s, scene);
      break;
    case 'd_fbd_anal':
      enterDFbdAnal(s, scene);
      break;
    case 'd_fbd_end':
      enterDFbdEnd(s, scene);
      break;
    case 'd_fbd_mass':
      enterDFbdMass(s, scene);
      break;
    case 'd_fbd_threesome':
      enterDFbdThreesome(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const fbDormD: LocationDef = {
  name: 'fbDormD',
  title: 'In the hallway, you\'re stopped by an older lady. You can onl',
  region: 'other',
  enter: enter,
};
