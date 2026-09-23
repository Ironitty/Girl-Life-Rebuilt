import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterFedorIntro(s: GameState, scene: SceneBuilder): void {
  (s as any).FedorIntro = 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Men/Gang/fight.jpg');
  scene.text('As you walk out of the cafeteria, you see a crowd of students gathered around; what appears to be a fight. You move closer to get a better look when one of the boys in the fight gets knocked back into you. You recoil as one of the boys throws a punch that misses the other, but is rushing toward your face. Suddenly you feel someone\'s arm press against your chest, pushing you away from the fight, and saving you from getting hit. The one who saved you says, "That was a close one. Are you alright?');
  // TODO-QSP: end
  scene.actions([
    { label: 'Turn around', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A5', 5);
    qspCall(st, 'stat', '');
    scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
    scene.img('images/characters/shared/headshots_main/big5.jpg');
    scene.text('You turn to see Fedor Kozlov smiling at you. You return the smile and say, "I am now, thanks to you." Fedor responds, "Well I couldn\'t let such a pretty girl like you get hurt." you lower your head; trying to hide your flushing cheeks, as you reply, "I bet you say that to all the girls." Fedor chuckles, "I not going to lie, if all the girls looked like you then I would." a few members of the school faculty begin breaking up the fight, as Fedor says, "It seems that everything has been taken care of. If you would like to chat then feel free to stop by the hallway, and you can usually catch me at the sports center, after school. Hopefully I will see you again soon." Fedor then walks away while waving at you.');
    scene.actions([
      { label: 'Wave back', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterFedorChat(s: GameState, scene: SceneBuilder): void {
  (s as any).loc_arg = 'Fedor Chat';
  (s as any).loc = 'FedorMisc';
  (s as any).numnpc = 5;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  if (((s as any).fedorKozlovQW ?? 0) === -10) {
    // TODO-QSP: dynamic text: <center><b><h4><font color=#FF00FF><<"Fyodor [Masha] Kozlov">></font></h4></b></...
    scene.text(`<center><b><h4><font color=#FF00FF>${'Fyodor [Masha] Kozlov'}</font></h4></b></center>`);
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/Outcast/outcast1.jpg');
  } else {
    if (((s as any).fedorKozlovQW ?? 0) < -10) {
      scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
      scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/Outcast/outcast2.jpg');
    } else {
      scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
      scene.img('images/characters/shared/headshots_main/big5.jpg');
    }
  }
  if (((s as any).fedorKozlovQW ?? 0) === -10) {
    scene.text('Ever since Fedor gave Vasily a blowjob in the school courtyard, everyone calls him Masha.');
  } else {
    if (((s as any).fedorKozlovQW ?? 0) < -10) {
      scene.text('Ever since Fedor gave Vasily a blowjob in the school courtyard, everyone calls him Masha but to you, he will always be Fedor.');
    } else {
      scene.text('Fedor is a decent athlete. He often trains with his good friend Ivan, but lacks the level of talent that Ivan does have.');
    }
  }
  if (((s as any).pcs_hairbsh ?? 0) < 1) {
    // TODO-QSP: dynamic text: Fedor notices your messy hair and pulls out his <a href="exec:gt ''FedorMisc'', ...
    scene.text(`Fedor notices your messy hair and pulls out his <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027FedorMisc/u0027, /u0027Comb/u0027); return false;">comb</a>.`);
  }
  if (((s as any).npc_grupTipe ?? 0)?.['A5'] === 5) {
    scene.text('Fedor is an outcast in school, and doesn\'t have anyone to sit with during lunch.');
  }
  if (((s as any).npc_grupTipe ?? 0)?.['A5'] === 6) {
    scene.text('Fedor is a Super Hero, Pssst you shouldn\'t be seeing this. please report this bug.');
  }
  if (((s as any).npc_grupTipe ?? 0)?.['A5'] === 3) {
    scene.text('Fedor is a nerd, and usually spends lunch time with them.');
  }
  if (((s as any).npc_grupTipe ?? 0)?.['A5'] === 2) {
    scene.text('Fedor is part of the athletic clique in your school.');
  }
  if (((s as any).npc_grupTipe ?? 0)?.['A5'] === 1) {
    scene.text('Fedor is popular, and spends time with the other popular kids usually.');
  }
  if (((s as any).npc_grupTipe ?? 0)?.['A5'] === 4) {
    scene.text('Fedor is a Gopnik, and spends a lot of time doing what Gopniks usually do: be loud, and drink beer.');
  }
  if (((s as any).npc_rel ?? 0)?.['A5'] < 20) {
    scene.text('You and Fedor don\'t get along at all.');
  }
  if (((s as any).npc_rel ?? 0)?.['A5'] >= 20  &&  ((s as any).npc_rel ?? 0)?.['A5'] < 40) {
    scene.text('You and Fedor don\'t get along very well.');
  }
  if (((s as any).npc_rel ?? 0)?.['A5'] >= 40  &&  ((s as any).npc_rel ?? 0)?.['A5'] < 60) {
    scene.text('You and Fedor have a normal relationship.');
  }
  if (((s as any).npc_rel ?? 0)?.['A5'] >= 60  &&  ((s as any).npc_rel ?? 0)?.['A5'] < 80) {
    scene.text('You and Fedor have a good relationship.');
  }
  if (((s as any).npc_rel ?? 0)?.['A5'] >= 80) {
    scene.text('You and Fedor have a great relationship.');
  }
  if (String((s as any).locArgs?.[1] ?? '') !== 1) {
    scene.actions([
      { label: 'Leave', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } else {
    scene.actions([
      { label: 'Move away', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  }
  if (String((s as any).locArgs?.[1] ?? '') !== 1) {
    if (((s as any).numnpc ?? 0) === 5  &&  ((s as any).fedorKozlovQW ?? 0) >= 20) {
      scene.actions([
        { label: 'Let\'s go somewhere private', goto: ['FedorMisc', 'Fedor Chat 2'] },
      ]);
    }
    if ((((s as any).fedorKozlovQW ?? 0) > 1  ||  ((s as any).fedorKozlovQW ?? 0) < -10)  &&  ((s as any).NikoPayback ?? 0) === 2  &&  ((s as any).FyodorVsNiko ?? 0) === 0  &&  (!((s as any).FedorVsNiko ?? 0))) {
      scene.actions([
        { label: 'Ask for help with Niko', goto: ['NikoPayback', 'Fedor Help'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Chat', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A5', (Math.floor(Math.random() * 6) + 5));
    (st as any).numnpc = 5;
    if (((st as any).loc ?? 0) === 'pav_disco') {
      (st as any).minut = ((st as any).minut ?? 0) + (5);
    }
    qspCall(st, 'stat', '');
    if (((st as any).fedorKozlovQW ?? 0) === -10) {
      // TODO-QSP: dynamic text: <center><b><h4><font color=#FF00FF><<"Fyodor [Masha] Kozlov">></font></h4></b></...
      scene.text(`<center><b><h4><font color=#FF00FF>${'Fyodor [Masha] Kozlov'}</font></h4></b></center>`);
      scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/Outcast/outcast1.jpg');
    } else {
      if (((st as any).fedorKozlovQW ?? 0) < -10) {
        scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
        scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/Outcast/outcast2.jpg');
      } else {
        scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
        scene.img('images/characters/shared/headshots_main/big5.jpg');
      }
    }
    if (((st as any).npc_rel ?? 0)?.['A5'] < 20) {
      scene.text('You speak to Fedor about a number of random experiences you had. Fedor listens to you with a moderate amount of interest.');
    } else {
      if (((st as any).npc_rel ?? 0)?.['A5'] < 80  &&  ((st as any).npc_rel ?? 0)?.['A5'] >= 20) {
        scene.text('You chat with Fedor, sharing multiple stories as Fedor happily listens and shares some thoughts on a number of them.');
      } else {
        if (((st as any).npc_rel ?? 0)?.['A5'] >= 80) {
          scene.text('You chat with Fedor, sharing multiple stories as Fedor happily listens while sharing several new stories of his own.');
        }
      }
    }
    if (String((st as any).locArgs?.[1] ?? '') !== 1) {
      scene.actions([
        { label: 'Leave', goto: ['gschool_lessons', 'short_break'] },
      ]);
    } else {
      scene.actions([
        { label: 'Move away', goto: ['pav_disco_classmates', 'classmates'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterFedorChat2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/fedor/school/Hall/fedor.jpg');
  scene.text('You approach Fedor and ask "How about we spend some alone time together?" Fedor gives you a playful smile as he wraps his arm around your neck, he then leads you to the hallway near the back of the school. Fedor rests against a nearby window and asks "So, what would you like to do today?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Wanna fool around in the locker room?', goto: ['FedorMisc', 'Locker Room'] },
    { label: 'Begin caressing Fedor', goto: ['FedorMisc', 'Hall'] },
    { label: 'I could really use a smoke', goto: ['FedorMisc', 'Smoke'] },
  ]);
  scene.build();
}

function enterFedorHate(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: <center><b><h4><font color=#FF00FF><<"Fyodor [Masha] Kozlov">></font></h4></b></...
  scene.text(`<center><b><h4><font color=#FF00FF>${'Fyodor [Masha] Kozlov'}</font></h4></b></center>`);
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/fedorangry.jpg');
  scene.text('Fedor looks at you with hatred as he says, "I have nothing to say to you. Go away!"');
  if (String((s as any).locArgs?.[1] ?? '') !== 1) {
    scene.actions([
      { label: 'Leave', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } else {
    scene.actions([
      { label: 'Move away', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterComb(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_hairbsh = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
  if (((s as any).fedorKozlovQW ?? 0) === -15) {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/Outcast/outcast2.jpg');
  } else {
    scene.img('images/characters/shared/headshots_main/big5.jpg');
  }
  scene.text('Fedor combs your hair for you as you watch him, admiring how handsome he is. After Fedor finishes combing your hair, he says, "There is my beautiful girlfriend. Your hair is too pretty to be all knotted up like that." you give Fedor a kiss on the cheek as he puts his comb away.');
  // TODO-QSP: dynamic text: <center><b><h4><font color=#ff00cc><<"<<$pcs_firstname>> [<<$pcs_nickname>>] <<$...
  scene.text(`<center><b><h4><font color=#ff00cc>${qspUntranslated(s, "\"<<pcs_firstname", { location: "FedorMisc" })} [${((s as any).pcs_nickname ?? '')}] ${((s as any).pcs_lastname ?? '')}">></font></h4></b></center>`);
  scene.img('' + qspFunc(s, '$$face_image') + '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg', 'ARGS[1]');
  } },
  ]);
  scene.build();
}

function enterLockerRoom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A5', 10);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
  scene.img('images/characters/shared/headshots_main/big5.jpg');
  scene.text('Fedor grabs your hand then leads you through the hallways, to the locker room. Fedor then releases your hand and carefully scopes out the area, both inside the locker room and out, checking if it\'s empty and as soon as he realizes that the coast is clear, he grabs your ass and kisses your lips as he pulls you in the locker room.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue.', handler: (st: GameState) => {
    (st as any).VK = (Math.floor(Math.random() * 3) + 1);
    if (((st as any).VK ?? 0) <= 1) {
      qspGoto(st, 'FedorMisc', 'Locker Room 1');
    } else {
      if (((st as any).VK ?? 0) <= 2) {
        qspGoto(st, 'FedorMisc', 'Locker Room 2');
      } else {
        qspGoto(st, 'FedorMisc', 'Locker Room 3');
      }
    }
  } },
  ]);
  scene.build();
}

function enterLockerRoom1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A5');
  scene.img('images/characters/pavlovsk/school/boy/fedor/school/lockerroom/lr1.jpg');
  scene.text('As you both enter the locker room, you begin rubbing on Fedor\'s crotch to warm him up as he begins kissing you gently. You can feel his hands start to wander over your curves, lightly caressing you as you begin pulling down his pants. You begin stroking Fedor\'s hard cock which fills you with excitement, feeling his long hard warm penis in your hands as you stroke it gently.');
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  qspCall(s, 'arousal', 'foreplay_give', (-5), 'dom');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'On your knees', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/school/lockerroom/lr2.jpg');
    scene.text('Fedor places his hands on your shoulders then begins lightly pushing you down to your knees which you submit to eagerly. When you get down on your knees, Fedor presses his dick against your lips but doesn\'t force it in, he instead looks down at you with a pleased smile on his face which notifies you that he want you to do it. You eagerly wrap your lips around his dick and begins sucking on his cock while stroking it with your tongue, doing your best to please him while staring into his eyes as he looks down at you in adoration of what you are doing for him.');
    qspCall(st, 'arousal', 'bj', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Vaginal', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/school/lockerroom/lr3.jpg');
    scene.text('After a few more seconds, Fedor lifts you up by your shoulders then lightly pushes you onto the bench then climbs up in front of you. You look down at Fedor\'s penis as it slowly enters your vagina, giving you a jolt of pleasure which emits a moan from you. Fedor begins fucking you slowly while gradually increasing his pace. Fedor lifts one of your legs up, giving himself easier access to your vagina as he continues ramming his penis inside you. After a few minutes, Fedor looks down to you and says, "I\'m ready to cum for you."');
    qspCall(st, 'arousal', 'vaginal', 5, 'sub');
    qspCall(st, 'stat', '');
    if (((st as any).FedorLoveTalk ?? 0) === 1) {
      scene.actions([
        { label: 'Inside me', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/school/lockerroom/lr4.jpg');
    scene.text('You reply, "Please cum inside me." Fedor flashes you a sweet smile then increases his pace. After a few seconds, Fedor groans and you feel his penis throbbing as he begins filling your womb with his warm seed. You let out a soft moan as the warmth of his cum fills you. After a few seconds Fedor looks down to you. "I always feel so lucky having the hottest girl in school as my girlfriend." Your face grows a little flushed as you respond, "You really are the sweetest boyfriend ever." Fedor gives you a passionate kiss before getting dressed and leaving the locker room.');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/cum/cum5.mp4');
    qspCall(st, 'cum_call', '', '', 'A5');
    qspCall(st, 'arousal', 'vaginal', 5);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Visit the restroom', goto: ['FedorMisc', 'Restroom'] },
      { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Pull out', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/school/lockerroom/lr4.jpg');
    // TODO-QSP: dynamic text: Fedor nods as he greatly increases the pace of his thrusts and then pulls out of...
    scene.text(`Fedor nods as he greatly increases the pace of his thrusts and then pulls out of you and begins covering both your chest and stomach with his seed. The warmth of his cum covers your body, making you feel both sexy and dirty. Fedor looks down at you and says, "I can think of no better way to spend my lunchtime then here with you ${((st as any).pcs_firstname ?? '')}." To which you reply, "Lunchtime is always more fun with you Fyodor." Fedor gives you a kiss on the cheek as he gets dressed and walks out of the locker room.`);
    scene.img('images/shared/sex/cum/stomach/cumbelly2.mp4');
    qspCall(st, 'cum_call', 'stomach', 'A5');
    qspCall(st, 'arousal', 'vaginal', 5);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Visit the restroom', goto: ['FedorMisc', 'Restroom'] },
      { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterLockerRoom2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'boyStat', 'A5');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/fedor/school/lockerroom/lr5.jpg');
  scene.text('As you enter the locker room, Fedor begins pawing at your breasts as you reach down to rub on his crotch. Fedor\'s hands lower down to your stomach then slide under your shirt as he begins rubbing on your breast before taking off you shirt then licking your nipples. The feeling of Fedor\'s soft tongue in your nipples, brings you a great sensation, making you feel a gradual wetness forming between your legs.');
  qspCall(s, 'arousal', 'foreplay', 5, 'dom');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Unbutton his pants', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/school/lockerroom/lr6.jpg');
    scene.text('You reach down to Fedor\'s waist then unbutton his pants then slide them down revealing his hard cock which you take into your hand and begin gently stroking. After a few seconds, Fedor grabs you by your shoulders then lightly pushes you down to your knees. You tilt your head forward and gently lick Fedor\'s penis which evokes a low moan from Fedor. After giving Fedor\'s dick a few licks you decide to stop teasing him and take his hard cock into your mouth and begins sucking. Feeling his warm dick in your mouth gives you a feeling of excitement as you look up to see Fedor with a loving look on his face, obviously happy seeing what you are doing for him. ');
    qspCall(st, 'arousal', 'bj', 5, 'dom');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/school/lockerroom/lr7.jpg');
    scene.text('You continue sucking Fedor\'s dick for a few more seconds before he lifts you onto your feet then quickly undresses you. Fedor walks around behind you then grabs onto your waist then bends you over. You wait for a second in anticipation for what he will do next when you feel his penis enter your vagina, giving you a jolt of pleasure. Fedor begins fucking you slowly but firmly, pushing deep inside you while gradually picking up the pace. You grab onto the bench with both hands and close your eyes focusing on nothing but Fedor\'s hard cock in your pussy and the gradual pleasure building up inside you. After a few minutes, Fedor tells you "I\'m about ready to cum. How does my girl want it?"');
    qspCall(st, 'arousal', 'vaginal', 5, 'sub');
    qspCall(st, 'stat', '');
    if (((st as any).FedorLoveTalk ?? 0) === 1) {
      scene.actions([
        { label: 'Inside me', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/school/lockerroom/lr8.jpg');
    // TODO-QSP: dynamic text: You turn to Fedor and say, "Fill me with your seed, my love." Fedor gives you a ...
    scene.text(`You turn to Fedor and say, "Fill me with your seed, my love." Fedor gives you a pleased smile as he increases the pace of his thrusts. You can feel his penis pushing deeper inside you then it begins throbbing and you feel a warmth growing inside you. You let out a moan as Fedor drains his cock inside your vagina and you do your best to milk his penis. Fedor gives your ass a firm smack as he says, "You are so beautiful ${((st as any).pcs_firstname ?? '')} and so damn sexy too." You turn to Fedor and reply, "Well I'm all yours, my love and I always will be." Fedor leans forward and gives you a soft kiss before getting dressed then leaving the locker room.`);
    scene.img('images/shared/sex/cum/vagcreampie/creampie2.mp4');
    qspCall(st, 'cum_call', '', '', 'A5');
    qspCall(st, 'arousal', 'vaginal', 5, 'dom');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Visit the restroom', goto: ['FedorMisc', 'Restroom'] },
      { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Pull out', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/school/lockerroom/lr8.jpg');
    // TODO-QSP: dynamic text: Fedor gives your ass a quick smack before pulling out of you then rubbing his pe...
    scene.text(`Fedor gives your ass a quick smack before pulling out of you then rubbing his penis in between your ass cheeks until he groans and begins spraying his load on your lower back. You move your hips up and down, trying to milk Fedor with your ass cheeks while enjoying the warmth of his cum covering your back. After Fedor finishes, he looks down at you and says, "You have a great ass ${((st as any).pcs_firstname ?? '')}. So soft and plump." You look back at him and reply, "Well maybe next time you can give it a good fucking." Fedor gives your ass a playful smack as he responds, "I might just do that sometime." Fedor then gets dressed and walks out of the locker room.`);
    scene.img('images/shared/sex/cum/cum3.mp4');
    qspCall(st, 'cum_call', 'butt', 'A5');
    qspCall(st, 'arousal', 'vaginal', 5, 'dom');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Visit the restroom', goto: ['FedorMisc', 'Restroom'] },
      { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterLockerRoom3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'boyStat', 'A5');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/fedor/school/lockerroom/lr9.jpg');
  scene.text('As you and Fedor enter the locker room, Fedor approaches you from behind and begins pawing at your breasts through your clothes. You lilt your head back, letting Fedor caress your body while undressing you. Fedor removes your shirt then begins lightly squeezing your breasts and kissing your neck as he undresses himself.');
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/school/lockerroom/lr10.jpg');
    scene.text('Fedor grabs you by your hips then guides you toward the lockers then lifts up one of your legs, causing you to lean sideways to maintain your balance. You soon feel Fedor\'s hard cock enter your vagina which evokes a moan from you as he thrusts his penis deeper inside you. Fedor continues fucking you against the lockers as you begin rubbing your clitoris while looking Fedor in the eyes, enjoying the look of pleasure on his face.');
    qspCall(st, 'arousal', 'vaginal', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Ride Fedor', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/school/lockerroom/lr11.jpg');
    scene.text('After a few minutes, Fedor begins lowering your leg as he continues fucking you. A few moments later, you decide to change things up a bit and begin push your hips firmly against Fedor, pushing him onto the bench. Fedor was a little surprised at first but immediately realized what you were doing as you begin riding his hard cock, pushing it deeper inside you, feeling your vagina expanding for his cock. Fedor leans forward and kisses your neck before telling you "I\'m going to cum soon."');
    qspCall(st, 'arousal', 'vaginal', 5, 'dom');
    qspCall(st, 'stat', '');
    if (((st as any).FedorLoveTalk ?? 0) === 1) {
      scene.actions([
        { label: 'Inside me', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/school/lockerroom/lr12.jpg');
    // TODO-QSP: dynamic text: You turn to Fedor and say, "I want your cum inside me." as you continue riding h...
    scene.text(`You turn to Fedor and say, "I want your cum inside me." as you continue riding his hard cock, pushing it deeper inside you. Fedor groans and you feel a stream of cum filling your womb with its warmth as Fedor's penis begins throbbing, pumping you with his seed. When Fedor finishes filling you up, he leans over your shoulder then says, "${((st as any).pcs_firstname ?? '')} you are the sexiest, most beautiful girl I've ever met. I'm so lucky to have you." You turn to Fedor then respond, "You and I are perfect for each other. You make my life complete Fyodor." Fedor gives you a long passionate kiss before getting dressed then leaving the locker room.`);
    scene.img('images/shared/sex/cum/cum81.mp4');
    qspCall(st, 'cum_call', '', '', 'A5');
    qspCall(st, 'arousal', 'vaginal', 5, 'dom');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Visit the restroom', goto: ['FedorMisc', 'Restroom'] },
      { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Pull out', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/school/lockerroom/lr12.jpg');
    scene.text('Fedor gives you a few more thrusts then pulls out of you. Fedor leans forward and you say, "Cum on my back." Fedor begins stroking his penis as you rub your ass against his balls. You hear Fedor groan as he begins spraying your back with his seed, covering your back in his warm cum as you continue rubbing your clitoris to give yourself some more satisfaction. Fedor catches his breath then looks down to you. "You fuck like a bunny. A really sexy bunny." You turn back to face Fedor as you respond, "How would you know how a bunny fucks? Is there something you are not telling me?" Fedor gives you a goofy smirk as he replies, "Well there is this bunny that hangs around in front of my house who\'s been giving me looks." You give Fedor a playful punch in the arm as he gets dressed then leaves the locker room.');
    scene.img('images/shared/sex/cum/cum5.mp4');
    qspCall(st, 'cum_call', 'back', 'A5');
    qspCall(st, 'arousal', 'vaginal', 5, 'dom');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Visit the restroom', goto: ['FedorMisc', 'Restroom'] },
      { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterHall(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A5', 10);
  qspCall(s, 'boyStat', 'A5');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/kiss2.mp4');
  scene.text('You approach Fedor with a mischievous smile on your face as you begin rubbing on his crotch. Fedor gives you a pleased look as he begins gently kissing your lips. While rubbing your ass with both his hands and pushing you toward the windowsill.');
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  qspCall(s, 'arousal', 'foreplay_give', (-5), 'dom');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Pull down his pants', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/school/Hall/Sex/hall1.mp4');
    scene.text('You pull down Fedor\'s pants, revealing his rock-hard penis which you wrap your fingers around and begin stroking as he caresses your cheek, admiring your beauty. You continue stroking his penis as you look into his eyes to see a very lustful look in them, turning you on, knowing how badly he wants you.');
    qspCall(st, 'arousal', 'hj', 5, 'dom');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get down on your knees', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/blowjob/blowjob1.mp4');
    scene.text('Wanting to please Fedor you drop to your knees in front of him then begin licking his hard cock, Licking from the shaft to the tip. After licking him for a few seconds you wrap your lips around his shaft, taking it into your mouth before licking and sucking it vigorously, wanting to please Fedor as best you could.');
    qspCall(st, 'arousal', 'bj', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/school/Hall/Sex/hall2.mp4');
    scene.text('As you are sucking him off, Fedor grabs you by your shoulders then lifts you to your feet as he begins undressing you before lifting you off the ground and onto his penis which slides smoothly into your vagina, giving you a jolt of pleasure. You wrap your arms around Fedor\'s neck to give yourself leverage to assist Fedor by thrusting your own body onto his hard cock. After a few minutes, Fedor whispers in your ear "I\'m gonna cum real soon."');
    qspCall(st, 'arousal', 'vaginal', 5, 'sub');
    qspCall(st, 'stat', '');
    if (((st as any).FedorLoveTalk ?? 0) === 1) {
      scene.actions([
        { label: 'Inside me', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/school/Hall/Sex/hall2.mp4');
    // TODO-QSP: dynamic text: You look Fedor in the eyes and say, "Please fill me with your cum." Fedor gives ...
    scene.text(`You look Fedor in the eyes and say, "Please fill me with your cum." Fedor gives you a pleased smile as he picks up his pace, thrusting his penis deeper inside you. Fedor groans and begins filling your womb with his seed which his penis throbs as it fills your womb. You push against Fedor's pelvis driving his dick further inside you. Fedor lowers you to the ground then gives you a kiss before saying "${((st as any).pcs_firstname ?? '')} You are a shining light in my life and I will always love you." Your face becomes a bit flushed at his sweet words as you respond, "I love you with all my heart Fyodor and will always be by your side when you need me." Fedor smiles at you for a few seconds in silence before grabbing your neck and bringing your lips to his as he gives you a long passionate kiss. After a full minute of kissing, Fedor pulls up his pants then walks away with an almost blissful look on his face.`);
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/cum/cum3.mp4');
    qspCall(st, 'cum_call', '', '', 'A5');
    qspCall(st, 'arousal', 'vaginal', 5, 'dom');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Visit the restroom', goto: ['FedorMisc', 'Restroom'] },
      { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'On my face', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/school/Hall/Sex/hall2.mp4');
    scene.text('You tell Fedor "Cum on my face." Fedor lowers you to your feet as he begins stroking his penis. You drop to your knees and look up at him with a sweet smile on your face, waiting for him to paint your face with his seed. After a few seconds, Fedor groans and begins spraying his load on your face, covering your face in his hot cum. After Fedor finishes, he looks down to you and says, "That\'s my girl. Always doing dirty things for me." you blow Fedor a kiss as he pulls up his pants and begins walking back to class while saying "Don\'t forget to clean up before going back to class."');
    scene.img('images/locations/shared/carwash/sex/cummouth1.mp4');
    qspCall(st, 'cum_call', 'face', 'A5');
    qspCall(st, 'arousal', 'vaginal', 5);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Visit the restroom', goto: ['FedorMisc', 'Restroom'] },
      { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
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

function enterRestroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'FedorMisc', 'Restroom');
  (s as any).location_type = 'bathroom';
  (s as any).locclass = 'school_bathroom';
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><h4><font color=#00ffe4>Girl\'s Restroom</font></h4></center>');
  scene.img('images/characters/pavlovsk/school/boy/fedor/school/Restroom/girlsrestroom.jpg');
  scene.text('The girls restroom is fairly clean and has 6 <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027fedormisc/u0027, /u0027Quick Wash/u0027); return false;">sinks</a>, 6 <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">mirrors</a> and 5 stalls arranged symmetrically.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave restroom', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterQuickWash(s: GameState, scene: SceneBuilder): void {
  (s as any).EndMovie = 0;
  (s as any).WithFedor = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  (s as any).cumspclnt = 1;
  qspCall(s, 'cum_cleanup', '');
  if (((s as any).pcs_sweat ?? 0) < 30) {
    (s as any).pcs_sweat = 15 + (Math.floor(Math.random() * 5) + 0);
  } else {
    (s as any).pcs_sweat = ((s as any).pcs_sweat ?? 0) - (10 + (Math.floor(Math.random() * 5) + 0));
  }
  qspCall(s, 'stat', '');
  scene.text('<center><h4><font color=#00ffe4>Girl\'s Restroom</font></h4></center>');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/facecleanse.jpg');
  scene.text('You grab a few paper towels then approach the sink to clean yourself as thoroughly as possible while taking a few seconds to enjoy a splash of warm water on your face, leaving you feeling refreshed as you finish up then walk out of the restroom.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Dry off', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterSmoke(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A5', 5);
  qspCall(s, 'drugs', 'smoke', 1);
  (s as any).cumspclnt = 2;
  qspCall(s, 'cum_cleanup', '');
  (s as any).pcs_breath = 0;
  qspCall(s, 'mood', 'raise', 'small');
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
  scene.img('images/characters/pavlovsk/school/boy/fedor/school/Hall/smoke.jpg');
  scene.text('"I was just thinking the same thing." Fedor hands you a cigarette then puts one in his mouth as he collects his lighter from his pocket then lights both cigarettes. You both spend the rest of the lunch period smoking while discussing current events.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish smoking', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterSmoke2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A5', 5);
  qspCall(s, 'drugs', 'smoke', 1);
  scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
  scene.img('images/characters/pavlovsk/school/boy/fedor/school/Hall/smoke.jpg');
  scene.text('"Sure thing." Fedor hands you a cigarette then puts one in his mouth as he collects his lighter from his pocket then lights both cigarettes. You both spend the next few minute gossiping about your classmates.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish smoking', goto: ['FedorMisc', 'Outcast'] },
  ]);
  scene.build();
}

function enterFedorWorkout(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/gym/fedor.jpg');
  if (String((s as any).locArgs?.[1] ?? '') === 'workout_date') {
    scene.text('Fedor gives you a warm smile after he has finished his warm up. "What do you want to do?."');
  } else {
    // TODO-QSP: dynamic text: You can see Fedor on his phone by some of the punching bags and as you approach,...
    scene.text(`You can see Fedor on his phone by some of the punching bags and as you approach, he lowers his phone then he flashes you a warm smile. "${((s as any).pcs_firstname ?? '')} It's always good to see you. Are you here to workout? or are you waiting for someone?" You reply, "I'm just keeping fit. I wanna look good for my handsome boyfriend." Fedor gives you a warm smile as he responds, "I've just been doing some warm ups. You can join me for some workouts, if you like."`);
    scene.actions([
      { label: 'I can\'t right now but maybe later', goto: ['gdksport', 'start'] },
    ]);
  }
  if (((s as any).VKwip ?? 0) === 100) {
    scene.actions([
      { label: 'Work on agility', handler: (st: GameState) => {
    (st as any).FedorWorkout = 2;
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'stat', '');
    scene.text('VKwip');
    scene.actions([
      { label: 'Take a break', handler: (st: GameState) => {
    (st as any).VK = (Math.floor(Math.random() * 3) + 1);
    if (((st as any).VK ?? 0) === 1  &&  ((st as any).strelaQW ?? 0) === -1) {
      qspGoto(st, 'FedorMisc', 'Vitek Event');
    } else {
      qspGoto(st, 'FedorMisc', 'Fedor Workout 2');
    }
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Build strength', handler: (st: GameState) => {
    (st as any).FedorWorkout = 1;
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: Fedor begins doing push ups as you do a few yourself until you look up and see h...
    scene.text(`Fedor begins doing push ups as you do a few yourself until you look up and see him grinning at you as he says, "Would you like to see me do 45 push ups in 2 minutes?" You respond, "Only if I can ride your back as you do it." Fedor tilts his head as his grin widens. "Challenge accepted." you then climb on his back and he lift you both in repeated cycles. You can feel his muscles tighten as he lifts and his heartbeat gradually increase as he lifts you on his back. Fedor finally reaches 45 push ups then lowers his body to the ground where he lays with you still on his back. "So ${((st as any).pcs_nickname ?? '')}… impressed?" You reply "Yes very, I'm a lucky girl to have such a strong man to myself." Fedor winks then gets up and walks toward his bag.`);
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/gym/strength1.jpg');
    scene.actions([
      { label: 'Take a break', handler: (st: GameState) => {
    (st as any).VK = (Math.floor(Math.random() * 3) + 1);
    if (((st as any).VK ?? 0) === 1  &&  ((st as any).strelaQW ?? 0) === -1) {
      qspGoto(st, 'FedorMisc', 'Vitek Event');
    } else {
      qspGoto(st, 'FedorMisc', 'Fedor Workout 2');
    }
  } },
    ]);
  } },
    { label: 'Increase endurance', handler: (st: GameState) => {
    (st as any).FedorWorkout = 3;
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/gym/endurance1.jpg');
    scene.text('Fedor walks up to you and grabs your hands then wraps his fingers around yours before gently pushing you backwards while holding you up with his fingers. Fedor begin lifting you like a weight as you lean forward and give him repeated kisses every time you reach the top. After a few minutes of lifting Fedor backs up, lifting you back to your feet where he releases your fingers then turns around and heads toward his bag.');
    scene.actions([
      { label: 'Take a break', handler: (st: GameState) => {
    (st as any).VK = (Math.floor(Math.random() * 3) + 1);
    if (((st as any).VK ?? 0) === 1  &&  ((st as any).kotovLoveQW ?? 0) > 0  &&  ((st as any).strelaQW ?? 0) === -1) {
      qspGoto(st, 'FedorMisc', 'Vitek Event');
    } else {
      qspGoto(st, 'FedorMisc', 'Fedor Workout 2');
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterFedorWorkout2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  (s as any).VK = (Math.floor(Math.random() * 2) + 1);
  if (((s as any).VK ?? 0) === 1) {
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/characters/pavlovsk/school/boy/fedor/fed...
    scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/characters/pavlovsk/school/boy/fedor/fedormisc/gym/chat` + (Math.floor(Math.random() * 3) + 1) + '.jpg"></center>');
    scene.text('Fedor pulls 2 water bottle out of his bag and hands you one then guides you to a nearby seat where you both spend a few minutes discussing different workouts you both use to stay in shape.');
  } else {
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/characters/pavlovsk/school/boy/fedor/fed...
    scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/characters/pavlovsk/school/boy/fedor/fedormisc/gym/selfie` + (Math.floor(Math.random() * 3) + 1) + '.jpg"></center>');
    scene.text('Fedor pulls 2 water bottle out of his bag and hands you one then begins checking out his muscles in the mirror. You slowly approach him and stand beside him as you say, "You look really great." Fedor grins then pulls out his phone to take a picture of both of you using the mirror. You both pose for the camera before getting ready to continue your workout.');
  }
  if (((s as any).FedorWorkout ?? 0) === 1) {
    scene.actions([
      { label: 'Workout together', goto: ['FedorMisc', 'Strength'] },
    ]);
  } else {
    if (((s as any).FedorWorkout ?? 0) === 2) {
      scene.actions([
        { label: 'Workout together', goto: ['FedorMisc', 'Agility'] },
      ]);
    } else {
      scene.actions([
        { label: 'Workout together', goto: ['FedorMisc', 'Endurance'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterStrength(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'exp_gain', 'stren', (Math.floor(Math.random() * 4) + 1));
  (s as any).fat = ((s as any).fat ?? 0) - (1);
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'sweat', 'add', 30);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/gym/strength2.jpg');
  scene.text('You and Fedor begin doing push ups together for a few minutes while Fedor cheers you on, pushing you further in your exercise to help maximize your workout. When you finish your work out, you watch Fedor continue to workout. You decide to crawl under him as he finishes his push ups then kiss his lips which stops him in his tracks as he returns the long passionate kiss. After a minute, you both get up and Fedor gives you a firm smack on the ass before walking out of the Sports center.');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/gym/strength3.jpg');
  if (((s as any).FedorDW ?? 0) === 1) {
    scene.actions([
      { label: 'Finish workout', handler: (st: GameState) => {
    (st as any).FedorDW = 0;
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
    scene.img('images/characters/shared/headshots_main/big5.jpg');
    // TODO-QSP: dynamic text: You take a well needed stretch before turning back to see Fedor collecting his t...
    scene.text(`You take a well needed stretch before turning back to see Fedor collecting his things, and placing them in his gym bag before he looks to you and says, "Hey ${((st as any).pcs_nickname ?? '')} would you like to come back to my place to hang out, maybe watch some tv?"`);
    scene.actions([
      { label: 'Sure, I would love to', handler: (st: GameState) => {
    qspCall(st, 'mood', 'raise', 'tiny');
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'mood', 'raise', 'medium');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/hold.jpg');
    scene.text('You wrap your arm around Fedor\'s shoulder then follow him to his home where you both sit in front of the TV, and Fedor picks a channel for you both to watch. You both get comfortable and watch tv while chatting about various topics.');
    scene.actions([
      { label: 'Relax', goto: ['FedorEv4', 'TV'] },
    ]);
  } },
      { label: 'I really need to get going', goto: ['gdksport', 'start'] },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Finish workout', goto: ['gdksport', 'start'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterAgility(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'exp_gain', 'react', (Math.floor(Math.random() * 3) + 1));
  qspCall(s, 'exp_gain', 'agil', (Math.floor(Math.random() * 3) + 1));
  (s as any).fat = ((s as any).fat ?? 0) - (1);
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'sweat', 'add', 30);
  qspCall(s, 'stat', '');
  scene.text('VKwip');
  if (((s as any).FedorDW ?? 0) === 1) {
    scene.actions([
      { label: 'Finish workout', handler: (st: GameState) => {
    (st as any).FedorDW = 0;
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
    scene.img('images/characters/shared/headshots_main/big5.jpg');
    // TODO-QSP: dynamic text: You take a well needed stretch before turning back to see Fedor collecting his t...
    scene.text(`You take a well needed stretch before turning back to see Fedor collecting his things, and placing them in his gym bag before he looks to you and says, "Hey ${((st as any).pcs_nickname ?? '')} would you like to come back to my place to hang out, maybe watch some tv?"`);
    scene.actions([
      { label: 'Sure, I would love to', handler: (st: GameState) => {
    qspCall(st, 'mood', 'raise', 'tiny');
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'mood', 'raise', 'medium');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/hold.jpg');
    scene.text('You wrap your arm around Fedor\'s shoulder then follow him to his home where you both sit in front of the TV, and Fedor picks a channel for you both to watch. You both get comfortable and watch tv while chatting about various topics.');
    scene.actions([
      { label: 'Relax', goto: ['FedorEv4', 'TV'] },
    ]);
  } },
      { label: 'I really need to get going', goto: ['gdksport', 'start'] },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Finish workout', goto: ['gdksport', 'start'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterEndurance(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'exp_gain', 'vital', (Math.floor(Math.random() * 4) + 1));
  (s as any).fat = ((s as any).fat ?? 0) - (1);
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'sweat', 'add', 30);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/gym/endurance2.jpg');
  scene.text('Fedor walks up to you and lifts you up by your hips then holds onto your legs and says, "Let\'s see how many pull ups you can do in 15 minutes." you give him a wink before pulling yourself up and making sure to kiss Fedor every time you reach the top. You continue the workout for 15 minutes before Fedor lowers you and asks "How did you like your workout?" You reply, "Wow that was the one of the best workouts I\'ve had in a long time." Fedor gives you a wink as he climbs up some nearby bars and begins doing some pull ups of his own. You remain in front of him, cheering him on for 15 minutes before giving him a very passionate kiss and walking away.');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/gym/endurance3.jpg');
  if (((s as any).FedorDW ?? 0) === 1) {
    scene.actions([
      { label: 'Finish workout', handler: (st: GameState) => {
    (st as any).FedorDW = 0;
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
    scene.img('images/characters/shared/headshots_main/big5.jpg');
    // TODO-QSP: dynamic text: You take a well needed stretch before turning back to see Fedor collecting his t...
    scene.text(`You take a well needed stretch before turning back to see Fedor collecting his things, and placing them in his gym bag before he looks to you and says, "Hey ${((st as any).pcs_nickname ?? '')} would you like to come back to my place to hang out, maybe watch some tv?"`);
    scene.actions([
      { label: 'Sure, I would love to', handler: (st: GameState) => {
    qspCall(st, 'mood', 'raise', 'tiny');
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'mood', 'raise', 'medium');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/hold.jpg');
    scene.text('You wrap your arm around Fedor\'s shoulder then follow him to his home where you both sit in front of the TV, and Fedor picks a channel for you both to watch. You both get comfortable and watch tv while chatting about various topics.');
    scene.actions([
      { label: 'Relax', goto: ['FedorEv4', 'TV'] },
    ]);
  } },
      { label: 'I really need to get going', goto: ['gdksport', 'start'] },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Finish workout', goto: ['gdksport', 'start'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterVitekEvent(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${'Viktor [Vitek] Kotov'}</b></center>`);
  scene.img('images/characters/shared/headshots_main/big9.jpg');
  // TODO-QSP: dynamic text: As you and Fedor begin your warm ups, you hear someone shout "YOU FUCKING PUNK!"...
  scene.text(`As you and Fedor begin your warm ups, you hear someone shout "YOU FUCKING PUNK!" you both turn to see Vitek walking very quickly toward you. Fedor quickly begins running as Vitek gives chase, quickly catching up to Fedor. Vitek grabs Fedor's arm then pulls him onto the ground then climbs on top of him lifting his fist but before he could get a punch off he is grabbed from behind by Ivan who has wrapped his arms around Vitek's shoulders, dragging him back by his arms. Fedor quickly rises to his feet then runs off as Vitek bellows, "YOU WORTHLESS SACK OF SHIT! ${((s as any).pcs_firstname ?? '')} IS MINE! YOU HEAR ME FUCKER!? ${((s as any).pcs_firstname ?? '')} IS MIIIIIIINE!" as others rush in to help Ivan restrain Vitek.`);
  scene.text(`<center><b>${'Ivan Prokhorov'}</b></center>`);
  scene.img('images/characters/pavlovsk/school/boy/ivan/angry1.jpg');
  // TODO-QSP: end
  scene.actions([
    { label: 'Walk away', goto: ['gdksport', 'start'] },
  ]);
  scene.build();
}

function enterOutcastIntro(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: <center><b><h4><font color=#FF00FF><<"Fyodor [Masha] Kozlov">></font></h4></b></...
  scene.text(`<center><b><h4><font color=#FF00FF>${'Fyodor [Masha] Kozlov'}</font></h4></b></center>`);
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/Outcast/parkalone1.jpg');
  scene.text('You walk toward the tracks and see Fedor by himself. Ever since that day with Vadim bely, Fedor has been avoiding all the other students and has no friends. As you continue watching him, you think to yourself "I wonder if he blames me for what happened."');
  if ((!((s as any).FedorLove ?? 0))) {
    scene.actions([
      { label: 'Approach Fedor', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: <center><b><h4><font color=#FF00FF><<"Fyodor [Masha] Kozlov">></font></h4></b></...
    scene.text(`<center><b><h4><font color=#FF00FF>${'Fyodor [Masha] Kozlov'}</font></h4></b></center>`);
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/fedorangry.jpg');
    scene.text('As you approach Fedor he looks at you with an angry stare as he asks "What are you doing here? Are you here to mock me or gloat on how Viktor is stronger than me?"');
    scene.actions([
      { label: 'Apologize', handler: (st: GameState) => {
    (st as any).FedorOutcast = (-1);
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: <center><b><h4><font color=#FF00FF><<"Fyodor [Masha] Kozlov">></font></h4></b></...
    scene.text(`<center><b><h4><font color=#FF00FF>${'Fyodor [Masha] Kozlov'}</font></h4></b></center>`);
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/fedorangry.jpg');
    // TODO-QSP: dynamic text: You slowly step toward Fedor and say, "Look Fedor… I never meant for any of this...
    scene.text(`You slowly step toward Fedor and say, "Look Fedor… I never meant for any of this to happen." Fedor shouts "YOU AGREED TO GO OUT WITH VIKTOR WHILE DATING ME! How can you expect me to believe that you cared for me at all… Just go away ${((st as any).pcs_firstname ?? '')}. I have nothing for you." you step away from Fedor knowing that nothing you say will console him while thinking to yourself "If only he trusted me more, then maybe he would believe that my apology is sincere."`);
    scene.actions([
      { label: 'Walk away', goto: ['pav_park', 'start'] },
    ]);
  } },
      { label: 'Mock', handler: (st: GameState) => {
    (st as any).FedorOutcast = (-2);
    qspCall(st, 'npc_relationship', 'set', 'A5', 0);
    (st as any).FedorLove = (-1);
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: <center><b><h4><font color=#FF00FF><<"Fyodor [Masha] Kozlov">></font></h4></b></...
    scene.text(`<center><b><h4><font color=#FF00FF>${'Fyodor [Masha] Kozlov'}</font></h4></b></center>`);
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/fedorangry.jpg');
    // TODO-QSP: dynamic text: You grin as you reply, "Well yes. I do so love having a real man as my boyfriend...
    scene.text(`You grin as you reply, "Well yes. I do so love having a real man as my boyfriend and not a little cocksucker like you." Fedor immediately charges at you and pushes you on the ground. "The only thing Viktor sees in you is right between your legs." You are too shaken to speak as Fedor takes a few seconds to calm himself then walks away from you while saying "Just go ${((st as any).pcs_firstname ?? '')}. You've already taken everything from me. There is nothing left for you here."`);
    scene.actions([
      { label: 'Walk away', goto: ['pav_park', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).FedorLove ?? 0) === 1) {
      scene.actions([
        { label: 'Approach Fedor', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A5', 10);
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: <center><b><h4><font color=#FF00FF><<"Fyodor [Masha] Kozlov">></font></h4></b></...
    scene.text(`<center><b><h4><font color=#FF00FF>${'Fyodor [Masha] Kozlov'}</font></h4></b></center>`);
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/Outcast/outcast1.jpg');
    // TODO-QSP: dynamic text: As you approach Fedor, he turns to you with a distraught look on his face. "<<$p...
    scene.text(`As you approach Fedor, he turns to you with a distraught look on his face. "${((st as any).pcs_firstname ?? '')}… What are you doing here. I bet Viktor will be upset with us both if he sees you with me." You reply, "Viktor doesn't own me. I came here to check on you." Fedor responds, "How did you know to find me here." You give Fedor a sweet smile as you reply, "On our first date since hooking up, you told me that this is where you go when you are feeling down." Fedor returns the smile. "You remembered? I always knew you were one of the good ones."`);
    scene.actions([
      { label: 'Cheer him up', handler: (st: GameState) => {
    (st as any).fedorKozlovQW = (-12);
    qspCall(st, 'npc_relationship', 'modify', 'A5', 10);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).FedorOutcast = 1;
    (st as any).fedormasha = 0;
    qspCall(st, 'stat', '');
    scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/Outcast/outcast2.jpg');
    // TODO-QSP: dynamic text: You walk up to Fedor then place your hand on his shoulder. "You may be an outcas...
    scene.text(`You walk up to Fedor then place your hand on his shoulder. "You may be an outcast for some but you will always be a friend to me." Fedor downcasts his eyes as a tear escapes them. "${((st as any).pcs_firstname ?? '')} you truly are an angel. I'm so lucky to have a friend like you. Thank you." You give Fedor a hug as you say, "I know things are really hard for you but I need you to stay strong. Can you do that for me?" Fedor returns the hug. "I won't let what happened keep me down. I promise." You respond, "I expected nothing less from you." you then give him a kiss on the cheek.`);
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/Outcast/kiss.jpg');
    scene.actions([
      { label: 'Continue', goto: ['FedorMisc', 'Outcast'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Walk away', goto: ['pav_park', 'start'] },
  ]);
  scene.build();
}

function enterOutcast(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  (s as any).VK = (Math.floor(Math.random() * 2) + 1);
  if (((s as any).VK ?? 0) === 1) {
    scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/characters/pavlovsk/school/boy/fedor/fed...
    scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/characters/pavlovsk/school/boy/fedor/fedormisc/Outcast/parkalone` + (Math.floor(Math.random() * 3) + 1) + '.jpg"></center>');
    scene.text('You walk toward the train tracks to see Fedor, he seems to be lost in thought.');
  } else {
    scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/characters/pavlovsk/school/boy/fedor/fed...
    scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/characters/pavlovsk/school/boy/fedor/fedormisc/Outcast/parkalone` + (Math.floor(Math.random() * 2) + 4) + '.jpg"></center>');
    scene.text('You walk toward the train tracks to see Fedor, he seems to be sitting in the grass, reading a book.');
  }
  if (((s as any).fedorKozlovQW ?? 0) === -12) {
    scene.actions([
      { label: 'Let\'s talk about us', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/Outcast/outcast1.jpg');
    // TODO-QSP: dynamic text: You walk up to Fedor and he immediately turns to face you with a very welcoming ...
    scene.text(`You walk up to Fedor and he immediately turns to face you with a very welcoming smile on his face. "Hello ${((st as any).pcs_firstname ?? '')}, I've been reflecting on what we spoke about last time and I really need to thank you for cheering me up. I really needed that." You place your hand on his shoulder. "It was the least I can do Fedor." Fedor rubs your hand on his shoulder while still keeping his welcoming smile intact as he asks "So, is there anything I can do for you?" You wrap your fingers around his as you reply, "Fedor I… I just… I can't stop thinking of you Fyodor. I need you in my life. Will you please take me back." Fedor replies with a shocked look on his face "If we hooked up again then Viktor will tear me apart. I'm just not strong enough to deal with him. I'm sorry."`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: <center><b><h4><font color=#FF00FF><<"<<$pcs_firstname>> [<<$pcs_nickname>>] <<$...
    scene.text(`<center><b><h4><font color=#FF00FF>${qspUntranslated(s, "\"<<pcs_firstname", { location: "FedorMisc" })} [${((st as any).pcs_nickname ?? '')}] ${((st as any).pcs_lastname ?? '')}">></font></h4></b></center>`);
    scene.img(`${qspFunc(s, '$face_image', '')}`);
    // TODO-QSP: dynamic text: You reply, "I''ve been thinking about it and maybe we can go out in secret, no o...
    scene.text(`You reply, "I've been thinking about it and maybe we can go out in secret, no one ever needs to know." Fedor responds, "I don't know ${((st as any).pcs_firstname ?? '')}. This has trouble written all over it and I thought that you might be in love with Viktor." You place your hand on Fedor's cheek. "I don't care for Viktor. I just can't find a way to break it off with him. I'm as afraid of him as you are so please come back to me Fyodor. I can't live without you." Fedor tilts his head then asks "Are you sure you want to do this. I can't lose you for a second time. I won't be able to handle it, so make sure you are truly ready to commit."`);
    scene.actions([
      { label: 'I\'m sure', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A5', 20);
    (st as any).FedorKozHome = 1;
    (st as any).fedorKozlovQW = (-15);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/Outcast/outcast2.jpg');
    // TODO-QSP: dynamic text: You move your face closer to Fedor''s. "I''ve never been more sure of anything i...
    scene.text(`You move your face closer to Fedor's. "I've never been more sure of anything in my life. Please Fedor, kiss me now." Fedor stares into your eyes for a second before grabbing you shoulders then pulling you to him, kissing you very passionately for five minutes straight. After you both finish kissing, Fedor says, "Ok ${((st as any).pcs_firstname ?? '')} here is how it works. I will remain here after school, so whenever you would like to go out, just ask me here and we could sneak through town but know that I won't be able to speak with you at school but we can go on anywhere that Viktor and his friends don't hang out. Do you understand?" you nod your head and Fedor gives you a smile followed by a kiss.`);
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/kiss2.mp4');
    scene.actions([
      { label: 'Remain here', goto: ['FedorMisc', 'Outcast'] },
      { label: 'Return to park', goto: ['pav_park', 'start'] },
    ]);
  } },
      { label: 'I need some time to think about it', goto: ['pav_park', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).fedorKozlovQW ?? 0) === -15) {
      scene.actions([
        { label: 'Ask out on a date', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A5', 10);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/Outcast/outcast2.jpg');
    // TODO-QSP: dynamic text: You approach Fedor and his eyes light up as he asks "<<$pcs_nickname>> would you...
    scene.text(`You approach Fedor and his eyes light up as he asks "${((st as any).pcs_nickname ?? '')} would you like to spend some time together or is there something else you want?"`);
    scene.actions([
      { label: 'Let\'s go to the movies', goto: ['FedorEv', 'Cinema 2'] },
      { label: 'Let\'s go back to your place', goto: ['FedorEv', 'Home 2'] },
      { label: 'Ask for a smoke', goto: ['FedorMisc', 'Smoke 2'] },
      { label: 'Just wanted to say hi', goto: ['pav_park', 'start'] },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask for a smoke', goto: ['FedorMisc', 'Smoke 2'] },
    { label: 'Walk away', goto: ['pav_park', 'start'] },
  ]);
  scene.build();
}

function enterFedorVsDimka(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
  if (((s as any).fedorKozlovQW ?? 0) === -15) {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/Outcast/outcast2.jpg');
  } else {
    scene.img('images/characters/shared/headshots_main/big5.jpg');
  }
  scene.text('Fedor walks up to you then gives you a kiss on your cheek then whispers in your ear. "Are you ready to deal with that punk Dimka?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Yes I am', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
    if (((st as any).fedorKozlovQW ?? 0) === -15) {
      scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/Outcast/outcast2.jpg');
    } else {
      scene.img('images/characters/shared/headshots_main/big5.jpg');
    }
    scene.text('Fedor nods then tells you "You lure him to the other side of school and I will wait for you there." you give Fedor a kiss before responding "I will… and thank you again Fedor. This means a great deal to me." Fedor gives you a wink as he walks off.');
    scene.actions([
      { label: 'Lure Dimka', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.text(`<center><b>${'Dmitriy [Dimka] Nosov'}</b></center>`);
    scene.img('images/characters/shared/headshots_main/big1.jpg');
    scene.text('You can feel you body shaking as you approach Dimka. When Dimka notices you, he waves you over and says, "Good, you\'re here. Now let\'s head back to my place." You walk up to him and whisper in his ear. "Actually I was thinking that maybe you and I could have some fun behind the school." Dimka looks at you with a puzzled look. "Why should we fuck around behind the school? Stop wasting time and come back to my place already!" You quickly add. "You can record it on your phone to watch later." Dimka eyes widen as he stares at you with a wolfish grin. "I always though that you were camera shy but I see that you are a dirty little cam whore, aren\'t you?" You give him a nod with a seductive grin on your face. Dimka responds, "What are we waiting for? Let\'s get moving." He then grabs your wrist roughly as he leads you behind the school.');
    scene.actions([
      { label: 'Follow his lead', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'boyStat', 'A5');
    scene.text(`<center><b>${'Dmitriy [Dimka] Nosov'}</b></center>`);
    scene.img('images/characters/shared/headshots_main/big1.jpg');
    scene.text('When you reach a secluded area behind the school Dimka barks "<b>TAKE OFF YOUR CLOTHES WHORE!</b>" as he pulls out his phone and begins recording. You look around to find Fedor but he isn\'t in sight. Dimka grabs you by your hair as he shouts. "I said take off your clothes and stop fucking around whore!" you feel your heart pounding and decide to do as he says. You completely strip down in front of Dimka as he touches your body and shoves his fingers roughly inside your holes. You begin to feel tears forming in your eyes as you wonder why Fedor is not here. Dimka shoves you against the wall then begins roughly smacking you between your legs then grabs onto your clitoris and pulls on it, causing you to shriek in pain.');
    scene.img('images/characters/pavlovsk/school/boy/fedor/school/Events/Dimka/nude.jpg');
    qspCall(st, 'outfit', 'strip_all');
    qspCall(st, 'arousal', 'vaginal_finger', 5, 'sub', 'rough');
    qspCall(st, 'arousal', 'anal_finger', 5, 'sub', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    ((st as any).pain = (st as any).pain ?? {})['asshole'] = ((st as any).pain['asshole'] ?? 0) + (10);
    (st as any).pcs_health = ((st as any).pcs_health ?? 0) - (10);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/school/Events/Dimka/anal.mp4');
    // TODO-QSP: dynamic text: You feel Dimka''s hands on your ass cheeks, spreading them open. You suddenly fe...
    scene.text(`You feel Dimka's hands on your ass cheeks, spreading them open. You suddenly feel a sharp pain as Dimka shoves his dick inside your asshole, causing you to shriek in searing pain before hearing some thumping behind you. You turn around to see Fedor sprinting at the both of you. Dimka quickly pulls off of you as he begins zipping his pants, he then angrily shouts "What the fu…" Fedor punches him in his face, knocking Dimka a meter away. Dimka quickly looks up at Fedor. "What the fuck is wrong with you!?" Fedor begins kicking him in his ribs while shouting "<b>How dare you fuck with ${((st as any).pcs_firstname ?? '')}! She is my girl and no one fucks with my girl!</b>" Fedor continues kicking Dimka in his ribs.`);
    scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
    if (((st as any).fedorKozlovQW ?? 0) === -15) {
      scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/Outcast/outcast2.jpg');
    } else {
      scene.img('images/characters/shared/headshots_main/big5.jpg');
    }
    qspCall(st, 'arousal', 'anal', 5, 'sub', 'rough');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Break it up', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
    if (((st as any).fedorKozlovQW ?? 0) === -15) {
      scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/Outcast/outcast2.jpg');
    } else {
      scene.img('images/characters/shared/headshots_main/big5.jpg');
    }
    // TODO-QSP: dynamic text: You quickly rush to Fedor''s side then wrap your hands around his waist. You beg...
    scene.text(`You quickly rush to Fedor's side then wrap your hands around his waist. You begin pulling Fedor off of Dimka. Fedor looks to you then his rage turns to sorrow as he sees you naked, realizing that he was too late. "${((st as any).pcs_firstname ?? '')} I am so sorry. I thought that you were heading to the other side of the school." You give Fedor a firm hug as you reply, "It's ok Fedor. The important thing is that you came for me." You flash Fedor an innocent smile as you continue hugging him. Dimka, still squirming in pain, looks toward Fedor then says, "I didn't know ${((st as any).pcs_firstname ?? '')} was yours but there is something you should know about her." He then pulls his phone out of his pocket.`);
    scene.actions([
      { label: 'Snatch the phone', handler: (st: GameState) => {
    (st as any).dimaFilm = 0;
    (st as any).DimaRudeBlock = 1;
    (st as any).FedorvsDimka = 2;
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
    if (((st as any).fedorKozlovQW ?? 0) === -15) {
      scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/Outcast/outcast2.jpg');
    } else {
      scene.img('images/characters/shared/headshots_main/big5.jpg');
    }
    scene.text('You run up to Dimka then snatch the phone from his hand and begin deleting the video. Dimka gets up to snatch it back when Fedor drives his fist into Dimka\'s throat causing him to begin couching erratically while squirming on the ground in pain. Fedor then checks Dimka\'s pockets and takes his house keys as he says, "I\'m gonna check his computer to make sure that he isn\'t keeping any other copies of your video there. In the meantime get somewhere safe and please try to avoid making anymore "Videos"." Fedor gives you a smirk as he hands you your clothes then walks away.');
    scene.actions([
      { label: 'Get dressed then leave', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'wear_last_worn');
    qspGoto(st, 'pav_residential', '');
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
    { label: 'I\'m not ready yet', goto: ['gschool_grounds', 'main'] },
  ]);
  scene.build();
}

function enterDimkaParty(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${'Dimka Nosov'}</b></center>`);
  scene.img('images/characters/shared/headshots_main/big1.jpg');
  scene.text('You push Dimka away from you while shouting "Hey! Beat it! Are you crazy or something?" suddenly Fedor comes stumbling into the room, obviously a little drunk then quickly approaches Dimka. Dimka quickly released you then backs away, saying "Whoa, take it easy, I was just helping her to the door." Fedor gently grabs you by the arm and walks you out of the house while keeping his eyes trained on Dimka.');
  scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
  scene.img('images/characters/pavlovsk/school/boy/fedor/school/Events/Dimka/fedor.jpg');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['pav_residential', ''] },
  ]);
  scene.build();
}

function enterDimkaParty2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${'Dimka Nosov'}</b></center>`);
  scene.img('images/characters/shared/headshots_main/big1.jpg');
  // TODO-QSP: dynamic text: You push Dimka away from you while shouting "hey! Beat it! Are you crazy or some...
  scene.text(`You push Dimka away from you while shouting "hey! Beat it! Are you crazy or something?" but he doesn't let go and begins dragging you into the next room when you both hear "Take your hands off her!" You both turn to the corner of the room to see Fedor in the shadows. Dimka laughs as he says, "Well look who it is… the cocksucker Masha. If you want to suck my dick then you better get lost because I have ${((s as any).pcs_firstname ?? '')} for that." after 2 seconds of silence Fedor charges Dimka and begins punching him repeatedly.`);
  scene.text('You rush over to Fedor to pull him away and he looks back at you and asks "Are you alright? He didn\'t hurt you, did he?" You give him a warm smile as you reply, "It\'s alright. I\'m fine. We should get going." you and Fedor then leave the house together.');
  scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
  scene.img('images/characters/pavlovsk/school/boy/fedor/school/Events/Dimka/outcast.jpg');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['pav_residential', ''] },
  ]);
  scene.build();
}

function enterVKwip(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/fedor/school/lockerroom/lr.jpg');
  scene.text('');
  // TODO-QSP: end
  scene.actions([
    { label: '', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/school/lockerroom/lr.jpg');
    scene.text('');
    scene.actions([
      { label: '', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/school/lockerroom/lr.jpg');
    scene.text('');
    if (((st as any).FedorLoveTalk ?? 0) === 1) {
      scene.actions([
        { label: 'Inside me', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/school/lockerroom/lr.jpg');
    scene.text('');
    scene.actions([
      { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: '', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/school/lockerroom/lr.jpg');
    scene.text('');
    scene.actions([
      { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterWorkoutTime(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
  scene.img('images/characters/shared/headshots_main/big5.jpg');
  // TODO-QSP: dynamic text: As you are walking around, Fedor approaches you then says, "Hey <<$pcs_nickname>...
  scene.text(`As you are walking around, Fedor approaches you then says, "Hey ${((s as any).pcs_nickname ?? '')}, I'm heading to the sports center to do some workouts. Would you like to join me, or would you prefer that I take you home?"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'I could use a good workout', handler: (st: GameState) => {
    (st as any).FedorDW = 1;
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/hold.jpg');
    scene.text('Fedor gives you a warm smile as he responds, "Great, I love a girl that keeps herself in shape." you give him a grin as you respond, "Well I already know that, duhh." Fedor chuckles as he fetches your coat then walks you out of the house, toward the sports center then says, "Let me just warm up a sec." Fedor then begins punching a punching bag.');
    scene.actions([
      { label: 'Work out with him', goto: ['FedorMisc', 'Fedor Workout', 'workout_date'] },
    ]);
  } },
    { label: 'I need to head home', goto: ['FedorEv4', 'End Date 2'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'Fedor Intro':
      enterFedorIntro(s, scene);
      break;
    case 'Fedor Chat':
      enterFedorChat(s, scene);
      break;
    case 'Fedor Chat 2':
      enterFedorChat2(s, scene);
      break;
    case 'Fedor Hate':
      enterFedorHate(s, scene);
      break;
    case 'Comb':
      enterComb(s, scene);
      break;
    case 'Locker Room':
      enterLockerRoom(s, scene);
      break;
    case 'Locker Room 1':
      enterLockerRoom1(s, scene);
      break;
    case 'Locker Room 2':
      enterLockerRoom2(s, scene);
      break;
    case 'Locker Room 3':
      enterLockerRoom3(s, scene);
      break;
    case 'Hall':
      enterHall(s, scene);
      break;
    case 'Restroom':
      enterRestroom(s, scene);
      break;
    case 'Quick Wash':
      enterQuickWash(s, scene);
      break;
    case 'Smoke':
      enterSmoke(s, scene);
      break;
    case 'Smoke 2':
      enterSmoke2(s, scene);
      break;
    case 'Fedor Workout':
      enterFedorWorkout(s, scene);
      break;
    case 'Fedor Workout 2':
      enterFedorWorkout2(s, scene);
      break;
    case 'Strength':
      enterStrength(s, scene);
      break;
    case 'Agility':
      enterAgility(s, scene);
      break;
    case 'Endurance':
      enterEndurance(s, scene);
      break;
    case 'Vitek Event':
      enterVitekEvent(s, scene);
      break;
    case 'Outcast Intro':
      enterOutcastIntro(s, scene);
      break;
    case 'Outcast':
      enterOutcast(s, scene);
      break;
    case 'Fedor Vs Dimka':
      enterFedorVsDimka(s, scene);
      break;
    case 'Dimka Party':
      enterDimkaParty(s, scene);
      break;
    case 'Dimka Party 2':
      enterDimkaParty2(s, scene);
      break;
    case 'VKwip':
      enterVKwip(s, scene);
      break;
    case 'Workout Time':
      enterWorkoutTime(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const FedorMisc: LocationDef = {
  name: 'FedorMisc',
  region: 'other',
  locationType: 'bathroom',
  locclass: 'school_bathroom',
  enter: enter,
};
