import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterSuck(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'event';
  (s as any).aftgopbjrand = (Math.floor(Math.random() * 3) + 0);
  if (((s as any).aftgopbjrand ?? 0) !== 0) {
    (s as any).afterschoolday = ((s as any).daystart ?? 0);
    qspGoto(s, 'gschool_grounds', 'main');
  } else {
    if (((s as any).grupTipe ?? 0) !== 4) {
      // TODO-QSP: dynamic text: Vitek and some of the other gopniks are waiting for you outside the school. "Hol...
      scene.text(`Vitek and some of the other gopniks are waiting for you outside the school. "Hold up ${((s as any).pcs_nickname ?? '')}. Everyone says you're a great cocksucker and I want you to prove it. Come with us and have some fun."`);
    } else {
      // TODO-QSP: dynamic text: Vitek and some of the other gopniks are waiting for you outside the school. "Hol...
      scene.text(`Vitek and some of the other gopniks are waiting for you outside the school. "Hold up ${((s as any).pcs_nickname ?? '')}. Let's have a little fun before we go home."`);
    }
    if (((s as any).grupTipe ?? 0) === 4) {
      scene.actions([
        { label: 'Not today boys', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/afterschool/teasefo.mp4');
    scene.text('You shake your head. "Sorry boys, but I\'ve got stuff I have to do. You\'ll just have to suck each other off today," you tell them as you walk away, but you do lift up your skirt to give them a nice view of your ass and put some extra hip sway into your walk. You hear Dan call you "a fucking tease" and turn around and stop, like you might be changing your mind and suck on two of your fingers. The boys watch intently and you can tell they are getting excited at the idea you\'re going to change your mind, but as you pull your fingers out of your mouth you flip them off with a smile, then giggle and walk away.');
    scene.text('Seeing you do that, you\'re sure they\'re returning the favor as they call you a variety of names, but you don\'t care. It was too funny to see the expression on their faces.');
  } },
      ]);
    }
    qspCall(s, 'willpower', 'bj', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Make an excuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Make an excuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'bj', 'resist', 'hard');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    // TODO-QSP: :ReCheck
    (st as any).lpp = (Math.floor(Math.random() * 7) + 0);
    if (((st as any).lastlpp ?? 0) === ((st as any).lpp ?? 0)) {
      // TODO-QSP: jump 'ReCheck'
    }
    if ((!((st as any).lpp ?? 0))) {
      scene.text('"Sorry, but I\'ve got a dentist appointment, my tooth hurts a lot!" you say as you rub your jaw, feigning pain.');
    } else {
      if (((st as any).lpp ?? 0) === 1) {
        scene.text('"I can\'t, I have some sores in my mouth."');
      } else {
        if (((st as any).lpp ?? 0) === 2) {
          scene.text('You hold your stomach. "I can\'t. I\'m feeling really sick, like I might throw up at any moment."');
        } else {
          if (((st as any).lpp ?? 0) === 3) {
            scene.text('"I think I might have tonsillitis… Throat hurts," you say, feigning a hoarse voice.');
          } else {
            if (((st as any).lpp ?? 0) === 4) {
              qspCall(st, 'gschool_events', 'rand_girl_arg');
              // TODO-QSP: dynamic text: "I told <<$rand_girl>> that I would go home with her and study."
              scene.text(`"I told ${((st as any).rand_girl ?? '')} that I would go home with her and study."`);
            } else {
              if (((st as any).lpp ?? 0) === 5) {
                qspCall(st, 'gschool_events', 'rand_boy_arg', 1, 1, 1, 0, 0, 0);
                // TODO-QSP: dynamic text: "I told <<$rand_boy>> that I would go home with him and study."
                scene.text(`"I told ${((st as any).rand_boy ?? '')} that I would go home with him and study."`);
              } else {
                if (((st as any).lpp ?? 0) === 6) {
                  scene.text('"I can\'t. I have to go to work."');
                }
              }
            }
          }
        }
      }
    }
    scene.text('They mutter unhappily, but let it go. "Fine, get the fuck out of here then."');
    (st as any).lastlpp = ((st as any).lpp ?? 0);
    (st as any).afterschoolday = ((st as any).daystart ?? 0);
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Return to school', handler: (st: GameState) => {
    (st as any).afterschoolday = ((st as any).daystart ?? 0);
    (st as any).SchoolGossip = ((st as any).SchoolGossip ?? 0) + (1);
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/bathroom/boysbathroom.jpg');
    scene.text('You return to school with the guys, a hand groping your ass as you walk through the hallway. You pretend to ignore it and just keep walking, but your heart is racing as they pull you into the men\'s room. "Get on your knees slut!" Vitek snarls as he pulls his dick out of his pants.');
    scene.actions([
      { label: 'Suck his dick', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    ((st as any).stat = (st as any).stat ?? {})['bj'] = ((st as any).stat['bj'] ?? 0) + (3);
    qspCall(st, 'npcStat', 'A11');
    qspCall(st, 'npcStat', 'A10', 'a');
    qspCall(st, 'npcStat', 'A9', 'b');
    ((st as any).npc_had_sex = (st as any).npc_had_sex ?? {})['A9'] = 1;
    ((st as any).npc_had_sex = (st as any).npc_had_sex ?? {})['A10'] = 1;
    ((st as any).npc_had_sex = (st as any).npc_had_sex ?? {})['A11'] = 1;
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/group/toiletbjtreesome.jpg');
    // TODO-QSP: dynamic text: You obediently squat and start stroking Vitek''s dick with your hand, getting it...
    scene.text(`You obediently squat and start stroking Vitek's dick with your hand, getting it rock-hard. You rub his hard cock against your ${(((st as any).pc_desc ?? 0)?.['lips'] ?? '')} lips, then open your mouth and start sucking his ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} cock. After making sure no one is coming, Dan and Vasily also approach you and take out their dicks, pointing them at you expectantly. Now sucking the dicks of all three boys in turn, you do your best to please the ones you're not sucking by jerking them off.`);
    qspCall(st, 'arousal', 'bj', 4, ((st as any).npcID ?? 0), 'group', 'sub');
    qspCall(st, 'arousal', 'bj', 3, ((st as any).npcID1 ?? 0), 'group', 'sub');
    qspCall(st, 'arousal', 'bj', 3, ((st as any).npcID2 ?? 0), 'group', 'sub');
    scene.actions([
      { label: 'Let them cum on your face', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    ((st as any).stat = (st as any).stat ?? {})['bj'] = ((st as any).stat['bj'] ?? 0) + (3);
    scene.img('images/shared/sex/group/toiletbjcum.jpg');
    if (((st as any).grupTipe ?? 0) !== 4) {
      scene.text('You close your eyes to fully focus on what you\'re doing, and a few minutes later you feel the dick that\'s currently in your mouth spasm. Several ropes of cum hit your tongue; it tastes rather bitter. Carefully opening one eye, you see that it\'s Vitek\'s. The other two tell you to keep your eyes closed, and Dan shoots his load across your face before you can even comply. Luckily, he didn\'t hit the eye that was open. You obediently close them, and a few seconds later you feel Vasily\'s cum splattering against your eye lids and cheek.');
      scene.text('You hear the click of a camera and open your eyes after wiping the cum off your face. They pull up their pants and leave, laughing at how much of a slut you are and how they had never thought you would actually come with them.');
    } else {
      scene.text('You close your eyes to fully focus on what you\'re doing, and a few minutes later you feel the dick that\'s currently in your mouth spasm. Several ropes of cum hit your tongue; it tastes rather bitter. Carefully opening one eye, you see that it\'s Vitek\'s. As soon as you open your eye, Dan tells you to "keep your eyes closed" as he shoots his load on your face before you can even comply. Luckily, he didn\'t hit the eye that was open. You obediently close them, and a few seconds later you feel Vasily\'s cum splattering against your eye lids and cheek. You open your eyes after wiping the cum off your face.');
      // TODO-QSP: dynamic text: They wait for you to get cleaned up and walk you out as they laugh and talk. "Da...
      scene.text(`They wait for you to get cleaned up and walk you out as they laugh and talk. "Damn ${((st as any).pcs_nickname ?? '')}, you're the best slut around! Maybe next time we can fuck you as well," Dan says as the four of you walk out of the school.`);
      // TODO-QSP: dynamic text: Once outside the boys peel off, but Vasily lags behind and turns back to you. "H...
      scene.text(`Once outside the boys peel off, but Vasily lags behind and turns back to you. "Hey ${((st as any).pcs_nickname ?? '')}, come by my place later and we can study," he says with a laugh, then turns and catches back up with the others.`);
    }
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).npcID ?? 0), 1);
    qspCall(st, 'cum_call', 'face', ((st as any).npcID1 ?? 0), 1);
    qspCall(st, 'cum_call', 'clothes', ((st as any).npcID2 ?? 0), 1);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave the school building', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterAfterschool(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A3');
  qspCall(s, 'npcStat', 'A14', 'a');
  (s as any).ivan_afterschool = 0;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/afterschool/sex/katja_ivan0.jpg');
  scene.text('As school ends, you go and find Katja and the two of you head to the English classroom you told Ivan to meet you in. Once inside, you close the door and take seats at the some of the desks and the two you start talking as you wait for Ivan to show up. As you wait, Katja pulls out a small bottle of lube from her purse, which makes you both giggle.');
  scene.text('It doesn\'t take to long until the door opens and Ivan walks in. He sees the two of you and grins as he closes the door and strides over to the two of you. You can already see the bulge of his cock straining against his pants as he looks at you both hungrily.');
  scene.text('"Well, what took you? We\'ve been waiting!" Katja says to him.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    if (((st as any).dick ?? 0) > ((st as any).npc_throat ?? 0)?.['A14']) {
      ((st as any).npc_throat = (st as any).npc_throat ?? {})['A14'] = ((st as any).npc_throat['A14'] ?? 0) + (1);
    }
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/afterschool/sex/katja_ivan1.jpg');
    // TODO-QSP: dynamic text: Katja gets out of the desk as Ivan stops next to the two of you, drops down to h...
    scene.text(`Katja gets out of the desk as Ivan stops next to the two of you, drops down to her knees and starts unzipping his pants. You quickly join her, just in time to see his ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} cock spring free, Katja starts stroking it as he looks down at the two of you.`);
    scene.text('Katja takes his cock into her mouth. He moans as she starts sucking him off, quickly offering you a turn. Licking your lips, you take Ivan\'s cock into your mouth and start trading his cock back and forth between you.');
    qspCall(st, 'arousal', 'bj', 3, ((st as any).npcID ?? 0), 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Ivan fucks you', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/afterschool/sex/katja_ivan2.jpg');
    scene.text('Pulling away from Ivan, Katja lays down on her back on the teachers desk with her legs spread wide. Ivan gets the idea and pulls you up, shoving your face in her pussy. Your tongue immediately begins to lap at her pussy and you feel her getting wet.');
    // TODO-QSP: dynamic text: Ivan grabs the bottle of lube, lubing up his dick and rubbing some of it on your...
    scene.text(`Ivan grabs the bottle of lube, lubing up his dick and rubbing some of it on your asshole as you keep eating Katja out. He rubs the tip of his lubed dick against your asshole before he slides his ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} dick into your ass and starts fucking you. Ivan isn't too rough, adjusting his speed and depth based on your moans, making it feel good the whole time. You and Katja are both moaning in pleasure as she looks into his eyes and says "I want you to fuck me now."`);
    qspCall(st, 'arousal', 'cuni_give', 3, ((st as any).npcID1 ?? 0), 'group', 'lesbian');
    qspCall(st, 'arousal', 'anal', (-3), ((st as any).npcID ?? 0), 'group', 'lube');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Ivan fucks Katja', handler: (st: GameState) => {
    if (((st as any).npc_ass ?? 0)?.['A14'] < ((st as any).dick ?? 0)) {
      ((st as any).npc_ass = (st as any).npc_ass ?? {})['A14'] = ((st as any).npc_ass['A14'] ?? 0) + (1);
    }
    if (((st as any).npc_ass ?? 0)?.['A14']*2 < ((st as any).dick ?? 0)) {
      ((st as any).npc_ass = (st as any).npc_ass ?? {})['A14'] = ((st as any).npc_ass['A14'] ?? 0) + (1);
    }
    if (((st as any).katjaQW ?? 0)?.['anal_quest'] === 2) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['anal_quest'] = 3;
    }
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/afterschool/sex/katja_ivan3.jpg');
    scene.text('Ivan pulls out of you and pulls you away from Katja before he slides her off the desk and effortlessly flips her over. You kneel down next to them and hold Katja\'s ass cheeks apart as Ivan lubes up her ass sliding his dick into her ass. She hisses before moaning deeply in pleasure. He fucks her for several minutes before he pulls out. "Both of you on the desk on your backs."');
    qspCall(st, 'arousal', 'voyeur_sex', 3, 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get on the desk', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/afterschool/sex/katja_ivan4.jpg');
    // TODO-QSP: dynamic text: You both climb on the desk and get on your backs side by side with your legs spr...
    scene.text(`You both climb on the desk and get on your backs side by side with your legs spread wide for Ivan. He walks up and you feel his ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} cock slide back into your ass; he starts fucking you a little harder and faster this time. You glance over and see Katja staring at him as he fucks your ass while rubbing her clit. Ivan keeps looking at her as she plays with herself.`);
    (st as any).anal_slip = ((st as any).anal_slip ?? 0) + (4);
    qspCall(st, 'arousal', 'anal', 3, ((st as any).npcID ?? 0), 'group', 'lube');
    scene.actions([
      { label: 'Happy ending', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/afterschool/sex/katja_ivan5.jpg');
    scene.text('He suddenly pulls out of you, leaving your ass feeling empty. Within seconds, Ivan shoves his cock back inside Katja\'s gaping asshole and she moans loudly as he starts fucking her again. You reach over and start rubbing her clit, her body suddenly convulsing as she has an orgasm.');
    scene.text('Hearing her cum, Ivan picks up the pace and starts to pant. It sounds like he\'s getting close himself. Katja reaches up with both her hands and grabs your ass, pulling your cheeks as far apart as she can. Grunting as he fucks you, Ivan understands the invitation.');
    qspCall(st, 'arousal', 'voyeur_sex', 3, 'group');
    qspCall(st, 'arousal', 'vaginal_finger_give', (-3), ((st as any).npcID1 ?? 0), 'group', 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Happy ending', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (2);
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['Horny'] = 0;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/afterschool/sex/katja_ivan6.jpg');
    scene.text('Ivan redoubles his efforts and within minutes, he pulls out of her ass. Katja slides off the desk and you follow suit as he starts jerking off. You both kneel in front of him as he shoots spurts of cum all over both of you.');
    scene.text('Once he finishes cumming, Ivan sits in the teachers chair, sweating as he catches his breath and watches the two of you. He only says one word. "Damn!"');
    scene.text('You all start getting dressed and Ivan looks at the two of you. "Girls, we\'ve got to do this again sometime! What do you say?"');
    scene.text('You look at each other and start giggling before Katja turns to look at him. "If you\'re a good boy." You both give him a look that promises, right or wrong, you want another go as badly as he does.');
    scene.text('"I\'m always good," he says with a laugh. He quickly finishes dressing and leaves, likely late for practice. Once he\'s gone, you and Katja look at each other and giggle, then leave as well.');
    qspCall(st, 'cum_call', 'breasts', 'A3', 1);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
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

function enterAnushPrivate(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A144');
  qspCall(s, 'npc_relationship', 'modify', 'A144', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/anushka/sex/school/anules1.jpg');
  scene.text('She leads you out of the school and across the grounds to the old school building. The two of you, hand in hand, quickly make your way through the old building to one of the more intact rooms where the gopniks have left a few comfort items, including a blanket waded up on one of the wooden boxes. Taking the blanket, the two of you spread it out on the floor and come together, meeting in the middle.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/school/anules2.jpg');
    scene.text('Anushka reaches up and grabs you by the back of the neck and pulls you into a kiss. One of your hands fondles her breasts while her other hand slides under your skirt.');
    if (((st as any).pantyworntype ?? 0) !== 'none') {
      scene.text('She pulls your panties down to your knees and lets them slide the rest of the way off your legs. You step out of them as they settle around your ankles.');
    }
    scene.text('You spread your legs as the two of you kiss. Your legs are barely even apart when you feel two of her fingers slip inside your wet pussy. As she passionately kisses you, she starts finger banging you.');
    qspCall(st, 'arousal', 'vaginal_finger', 3, 'lesbian');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/school/anules3.jpg');
    scene.text('Just as you start to lose yourself in her finger banging, she stops and takes all of your clothes off before removing her own top and panties. Once you\'re fully naked, she lays you down on your back and squats down over your face, pulling her skirt up out of the way. You don\'t need any prompting. As soon as her pussy is just over your face, you start licking her. It\'s already soaking wet and you can feel the juices rolling down your tongue as you eat her out.');
    qspCall(st, 'arousal', 'cuni_give', 3, 'lesbian');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/school/anules4.jpg');
    scene.text('Just as she starts to grind on your face, she stops and slides down to your feet. She lays down between your legs and puts her face directly over your crotch. She gently starts to lick your clit before sliding her tongue down into your pussy, where she starts fucking you with her tongue while rubbing your clit with her hand.');
    qspCall(st, 'arousal', 'cuni', 3, 'lesbian');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/school/anules5.jpg');
    scene.text('Just as you\'re getting into it, she stops and crawls up to lay on her back beside you. She spreads her legs wide as she reaches over and grabs you by the hair. She pulls by your hair down to her crotch and rubs your face against her pussy. You go to work at once, licking and sucking on her clit, lapping up her juices and tongue fucking her pussy.');
    scene.text('Several minutes later, she starts moaning loudly and grinding her crotch against your face, completely glazing your face in her pussy juices. Her cries of ecstasy reach a crescendo as her body tenses up and she nearly crushes your head by squeezing her legs together as she has an orgasm. After several shuddering moments, her orgasm passes. "Fuuuucccck! You eat pussy good."');
    qspCall(st, 'arousal', 'cuni_give', 10, 'lesbian');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (30);
    qspCall(st, 'boyStat', 'D3');
    ((st as any).npc_had_sex = (st as any).npc_had_sex ?? {})['A144'] = 1;
    ((st as any).anushkaQW = (st as any).anushkaQW ?? {})['sex'] = ((st as any).anushkaQW['sex'] ?? 0) + (1);
    qspCall(st, 'npc_relationship', 'modify', 'A144', 3);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/school/anules6.jpg');
    scene.text('She pushes you back over onto your back and pulls your legs wide apart. She reaches over and grabs her pack, rummaging around in it before she pulls out a large purple dildo.');
    // TODO-QSP: dynamic text: She turns to look at you, brandishing the purple dildo with a huge grin on her f...
    scene.text(`She turns to look at you, brandishing the purple dildo with a huge grin on her face. Before you can say anything, she shoves the ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} dildo into your soaking wet pussy. You cry out in ecstasy as you feel it completely fill you. She starts fucking you with the dildo and the louder you moan, the faster and deeper she goes.`);
    qspCall(st, 'arousal', 'vaginal_dildo', 10, 'lesbian');
    qspCall(st, 'arousal', 'end');
    scene.text('Just then, your smartphone buzzes, letting you know the bell signifying that lunch is over has rung. Anushka pulls the dildo out of you and puts it in her mouth, sucking on it before offering it to you. The two of you suck the dildo clean of your juices and quickly get dressed, doing your best to tidy up as you run back to school. You know you\'ll be at least a little late, but you really don\'t care.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
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

function enterAnushPrivate2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A144');
  qspCall(s, 'arousal', 'foreplay', 2, 'lesbian');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/lunch/hall.jpg');
  scene.text('You\'re in the mood, but instead of saying anything, you lean in closer and kiss her on the lips. "Sure, I\'m up for some fun."');
  scene.text('She grins at you and gives your ass a squeeze. "That\'s my girl." She motions for you to follow as she starts off to the lesser-used wing of the school. You fall in behind her and the two of you weave through the maze of other students heading for lunch.');
  // TODO-QSP: dynamic text: She leads you into a classroom and closes the door. Arkadi and Valentin are alre...
  scene.text(`She leads you into a classroom and closes the door. Arkadi and Valentin are already waiting, passing a bottle of vodka back and forth. They grin as the two of you enter and wave you over. You notice the boys have apparently found two of those large exercise balls and filled them up, leaving them nearby. As you get closer, Valentin speaks up. "Glad you could make it ${((s as any).pcs_nickname ?? '')}. Here, have a drink." He passes you the bottle of vodka.`);
  qspCall(s, 'willpower', 'drink', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Don\'t drink', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Don\'t drink', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'npc_relationship', 'modify', 'A156', 'dislike');
    qspCall(st, 'npc_relationship', 'modify', 'A158', 'dislike');
    scene.img('images/locations/pavlovsk/school/lunch/nodrink.jpg');
    scene.text('You shake your head as you take the bottle and pass it to Anushka. "Thanks, but I\'ve got a test later and I need a clear head." The guys frown but don\'t say anything while Anushka grabs the bottle out of your hand.');
    scene.text('"More for me then," she says with a laugh and takes a long swig of the bottle before passing it back to the boys.');
    scene.text('The four of your talk for a while about the band, school and some of the other students. As they get a buzz, Anushka leans over and starts feeling you up and kissing you.');
    qspCall(st, 'arousal', 'foreplay', 2, 'lesbian');
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'willpower', 'sex', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Push her away', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Push her away', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'npc_relationship', 'modify', 'A144', 'hate');
    qspCall(st, 'npc_relationship', 'modify', 'A156', 'hate');
    qspCall(st, 'npc_relationship', 'modify', 'A158', 'hate');
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('You pull away and put your hands up to gently push her away. "Stop, I don\'t want to right now."');
    // TODO-QSP: dynamic text: The boys snort and mutter while Anushka is a bit more vocal. "What the fuck, <<$...
    scene.text(`The boys snort and mutter while Anushka is a bit more vocal. "What the fuck, ${((st as any).pcs_nickname ?? '')}? I thought you wanted to have some fun? Fuck it, get out if you don't want to party with us." She gets up and leads you to the door, slamming it loudly once you're outside. You can hear them talking and are pretty sure you hear your name being mentioned.`);
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Return the kiss', goto: ['gschool_sex', 'Anush_kiss'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Take a drink', handler: (st: GameState) => {
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (1);
    qspCall(st, 'drugs', 'alcohol', 'vodka', 1);
    scene.img('images/locations/pavlovsk/school/lunch/sex/adrink.jpg');
    scene.text('You take a swig of the vodka and feel it burn your throat. It\'s the cheap stuff. The others offer encouragement and Anushka even tips the bottle back up when you start lowering it to make you drink a little more. Afterwards, you pass the bottle to Anushka, who takes a much bigger swig before passing it back to the boys. "Hell yeah, this beats lunch or anything else about school any day!"');
    scene.text('Valentin holds up the bottle. "I\'ll drink to that, especially when we get to hang out with some fine-ass bitches like the two of you." He then takes an even bigger swig than Anushka, so much so that Arkadi elbows him in the side. "Stop hogging it all and pass it over!"');
    scene.text('Valentin coughs and passes the bottle to Arkadi, who promptly takes a big swig while Valentin berates him. "Fucking asshole! You almost made me choke on that." After his drink, Arkadi passes the bottle back to you.');
    qspCall(st, 'willpower', 'drink', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Don\'t drink again', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Don\'t drink again', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'arousal', 'foreplay', 2, 'lesbian');
    qspCall(st, 'arousal', 'end');
    scene.img('images/locations/pavlovsk/school/lunch/nodrink.jpg');
    scene.text('You take the bottle and shake your head before passing it to Anushka. "No thanks I\'m good, I can already feel it hitting me."');
    scene.text('They laugh and Arkadi says "Fucking lightweight pussy! You need to learn how to drink. Don\'t worry, hang around us and we\'ll get you trained up in no time."');
    scene.text('As Anushka takes a swig, Valentin adds in. "Fuck yeah, you will! Soon you\'ll be putting them away like this bitch. Now this bitch knows how to party!" he says as he gropes Anushka\'s breast as she drinks and wraps another arm around her, giving her a quick hug. Afterwards, she passes the bottle back to the boys, who start to take a drink while she turns towards you and leans in close. She kisses you softly but passionately on the lips.');
    qspCall(st, 'willpower', 'sex', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Push her away', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Push her away', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'npc_relationship', 'modify', 'A144', 'hate');
    qspCall(st, 'npc_relationship', 'modify', 'A156', 'hate');
    qspCall(st, 'npc_relationship', 'modify', 'A158', 'hate');
    scene.img('images/locations/pavlovsk/school/lunch/sex/3some.jpg');
    scene.text('You pull away and put your hands up to gently push her away. "Stop, I don\'t want to right now."');
    // TODO-QSP: dynamic text: The boys snort and mutter while Anushka is a bit more vocal. "What the fuck <<$p...
    scene.text(`The boys snort and mutter while Anushka is a bit more vocal. "What the fuck ${((st as any).pcs_nickname ?? '')}? I thought you wanted to have some fun?" She turns and starts kissing Valentin and all three of them are soon making out.`);
    scene.text('It doesn\'t take long until she\'s on her knees sucking them both off, shortly followed by the boys fucking her. It\'s pretty clear you\'re not invited to take part. Unsure what else to do, you simply sit there waiting until they finish, wondering how badly you fucked up. Once they finish, the three of them head out, talking to each other and ignoring you. You know you\'ve got some work to do to repair your relationship with them. That is, if you even want to.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Return the kiss', goto: ['gschool_sex', 'Anush_kiss'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Take another drink', handler: (st: GameState) => {
    qspCall(st, 'drugs', 'alcohol', 'vodka', 1);
    qspCall(st, 'arousal', 'foreplay', 2, 'lesbian');
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'npc_relationship', 'modify', 'A144', 'like');
    qspCall(st, 'npc_relationship', 'modify', 'A156', 'like');
    qspCall(st, 'npc_relationship', 'modify', 'A158', 'like');
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (1);
    scene.img('images/locations/pavlovsk/school/lunch/sex/adrink1.jpg');
    scene.text('You take the bottle again and take another drink. Anushka again tilts the bottle up and holds it up for longer, forcing you to drink even more to the hoots and calls of encouragement from the boys. Just when you can\'t take it anymore, she tilts the bottle down and takes it away from you, leaving you coughing to the boys laughter. She takes a big swig herself as you cough and feel your throat burning and your eyes watering slightly.');
    scene.text('Once she passes the bottle back to the boys, she leans in close and starts to feel you up and kiss you. You can hear one of the guys giving his encouragement to what he\'s seeing.');
    qspCall(st, 'willpower', 'sex', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Push her away', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Push her away', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'npc_relationship', 'modify', 'A144', 'hate');
    qspCall(st, 'npc_relationship', 'modify', 'A156', 'hate');
    qspCall(st, 'npc_relationship', 'modify', 'A158', 'hate');
    scene.img('images/locations/pavlovsk/school/lunch/sex/3some.jpg');
    scene.text('You pull away and put your hands up to gently push her away. "Stop, I don\'t want to right now." The boys snort and mutter while Anushka is a bit more vocal.');
    // TODO-QSP: dynamic text: "What the fuck, <<$pcs_nickname>>? I thought you wanted to have some fun?" She t...
    scene.text(`"What the fuck, ${((st as any).pcs_nickname ?? '')}? I thought you wanted to have some fun?" She turns and starts kissing Valentin and all three of them are soon making out.`);
    scene.text('It doesn\'t take long until she\'s on her knees sucking them both off, shortly followed by the boys fucking her. It\'s pretty clear you\'re not invited to take part. Unsure what else to do, you simply sit there waiting until they finish, wondering how badly you fucked up. Once they finish, the three of them head out, talking to each other and ignoring you. You know you\'ve got some work to do to repair your relationship with them. That is, if you even want to.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Return the kiss', goto: ['gschool_sex', 'Anush_kiss'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterAnushKiss(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A144', 'like');
  qspCall(s, 'npc_relationship', 'modify', 'A156', 'like');
  qspCall(s, 'npc_relationship', 'modify', 'A158', 'like');
  scene.img('images/locations/pavlovsk/school/lunch/sex/l4kiss.jpg');
  scene.text('You return the kiss with just as much passion. After a few seconds, she pulls you over to the two large balls and pushes you down on one while she sits on the other. She continues to kiss and fondle you while the guys keep cheering the two of you on, passing the bottle back and forth to each other.');
  qspCall(s, 'arousal', 'kiss', 3, 'lesbian');
  qspCall(s, 'stat', '');
  if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'npcStat', 'A156');
    qspCall(st, 'npcStat', 'A158', 'a');
    qspCall(st, 'npcStat', 'A144', 'b');
    scene.img('images/locations/pavlovsk/school/lunch/sex/l4undress.jpg');
    scene.text('After a while, the boys finally come over. Anushka breaks the kiss with you and turns and starts taking off Valentin\'s clothes, while you follow her lead and start to do the same to Arkadi.');
    qspCall(st, 'arousal', 'kiss', 2, ((st as any).npcID2 ?? 0), 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/lunch/sex/l4bj.jpg');
    scene.text('Once their clothes are removed, their dicks are already rock-hard and waiting. The two of you kneel down and start sucking, occasionally switching guys.');
    ((st as any).npc_had_sex = (st as any).npc_had_sex ?? {})['A144'] = 1;
    ((st as any).npc_had_sex = (st as any).npc_had_sex ?? {})['A158'] = 1;
    ((st as any).npc_had_sex = (st as any).npc_had_sex ?? {})['A156'] = 1;
    qspCall(st, 'arousal', 'bj', 3, ((st as any).npcID1 ?? 0), 'group');
    qspCall(st, 'arousal', 'bj', (-3), ((st as any).npcID ?? 0), 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/lunch/sex/l4lick.jpg');
    scene.text('Anushka stops and pulls you up with her. "Okay boys, it\'s our turn." The boys waste no time in taking off your clothes as you and Anushka start making out again. Once you\'re both naked, the guys kneel down and start eating you out. They even return the favor of switching which pussy they\'re licking.');
    qspCall(st, 'arousal', 'kiss', (-3), ((st as any).npcID2 ?? 0), 'lesbian');
    qspCall(st, 'arousal', 'cuni', 2, ((st as any).npcID ?? 0), 'group');
    qspCall(st, 'arousal', 'cuni', 1, ((st as any).npcID1 ?? 0), 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/lunch/sex/l4vag.jpg');
    scene.text('Several minutes go by before they stop and stand up. As you and Anushka keep making out, you hear Arkadi say "Bend them over the balls." Soon you find yourself pulled away from Anushka and man handled roughly until you\'re on your knees, bent over the exercise ball. Anushka slides a bit closer so the two of you can keep kissing.');
    // TODO-QSP: dynamic text: You feel the tip of Arkadi''s dick rubbing against your wet slit. Once he''s sur...
    scene.text(`You feel the tip of Arkadi's dick rubbing against your wet slit. Once he's sure you're good and wet, he slips his ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} cock into you. Pushing balls deep in you, you feel Anushka moaning into your mouth as you moan into her's, so you know Valentin is doing the same to her as Arkadi is to you. As the two of you keep kissing, Arkadi starts thrusting himself into you. He pounds into you, his hips slapping up against your ass with each thrust.`);
    scene.text('Some time passes before you feel Arkadi pull out of you. He gets up and walks around you while Valentin does the same, giving each other a high five as they pass. As you see Arkadi kneel down behind Anushka, you can feel Valentin doing the same. Within seconds, you feel Valentin\'s cock thrust deeply into you. He takes a firm hold of your hips and starts pounding you as hard and fast as he can.');
    qspCall(st, 'arousal', 'vaginal', 3, ((st as any).npcID ?? 0), 'group');
    qspCall(st, 'arousal', 'vaginal', (-2), ((st as any).npcID1 ?? 0), 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'boystat', 'A158');
    scene.img('images/locations/pavlovsk/school/lunch/sex/l4anal.jpg');
    scene.text('You and Anushka continue to make out as the boys fuck you both senseless before you hear Arkadi say "Fuck that\'s good, but I\'m going to fuck this bitch\'s ass." Moments later, Anushka cries out slightly as you feel Valentin spit between your ass cheeks and rub the saliva around your asshole. "Hell yea, this bitch looks like she has a tight little ass." he laughs before adding "It won\'t be tight when I finish with it." He pulls his dick out of your pussy and slides it into your ass.');
    // TODO-QSP: dynamic text: He''s slow at first, letting you get used to his <<dick>>cm <<$dick_girth>> cock...
    scene.text(`He's slow at first, letting you get used to his ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} cock stretching out your ass. As you start to relax, he slides himself most of the way in and picks up the pace a little. It doesn't hurt as much as you thought it would since Valentin is pretty good about taking his time. Meanwhile, Anushka is encouraging Arkadi to fuck her ass harder as she quickly orgasms from the anal pounding she's getting.`);
    scene.text('After she orgasms, Akardi stands up as Valentin pulls out of your ass and the boys switch positions again. Arkadi kneels down behind you and shoves his cock balls deep in your ass and starts pounding you as hard and fast as he can. Anushka is encouraging Valentin to pound her ass harder and within a few minutes, she has another screaming orgasm.');
    (st as any).orgasm_txt = 'You feel the sensations building up as you get roughly fucked. Watching Anushka getting fucked at the same time somehow makes it even hotter. You feel yourself starting to pant as you become overwhelmed with pleasure. You cry out, maybe even scream. You don\'t recall. It\'s a long slow drop back to reality, leaving your body trembling.';
    (st as any).anal_slip = ((st as any).anal_slip ?? 0) + (4);
    qspCall(st, 'arousal', 'anal', 3, ((st as any).npcID1 ?? 0), 'group', 'lube');
    qspCall(st, 'arousal', 'anal', 2, ((st as any).npcID ?? 0), 'group', 'lube');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    ((st as any).anushkaQW = (st as any).anushkaQW ?? {})['sex'] = ((st as any).anushkaQW['sex'] ?? 0) + (1);
    scene.img('images/locations/pavlovsk/school/lunch/sex/l4cum.jpg');
    scene.text('Before long both guys stop, Arkadi telling you both "Get up on your knees, bitches." Once you do, the boys start jerking off and they\'re both soon shooting streams of hot cum all over you and Anushka\'s breasts. Once the last drop has landed, they boys start to get dressed as Anushka uses some cloth she apparently found in the room to clean up before passing it to you, letting you get cleaned up as well.');
    scene.text('Once you\'re cleaned up and dressed, the two of you join the boys sitting on the floor leaning against the wall. The boys light up two more cigarettes and pass one of them to each of you. They don\'t seem to really care if you smoke it. Valentin speaks up "Fuck that was great. We need to do this more often." Arkadi merely grunts in agreement as Anushka laughs.');
    scene.text('"Well, you boys keep bringing us something to drink and maybe we will." The guys laugh in response and soon the four of you are laughing and joking about things that have happened lately. Before long, the bell rings, indicating the end of lunch, and the four of you get up and head out.');
    (st as any).orgasm_txt = '';
    qspCall(st, 'cum_call', 'breasts', ((st as any).npcID ?? 0), 1);
    qspCall(st, 'cum_call', 'breasts', ((st as any).npcID1 ?? 0), 1);
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'cum_cleanup', '4');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
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
  // TODO-QSP: end
  scene.actions([
    { label: 'I can\'t', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    qspCall(st, 'npc_relationship', 'modify', 'A144', 'hate');
    qspCall(st, 'npc_relationship', 'modify', 'A156', 'hate');
    qspCall(st, 'npc_relationship', 'modify', 'A158', 'hate');
    scene.img('images/locations/pavlovsk/school/lunch/sex/3some.jpg');
    scene.text('You pull away and put your hands up to gently push her away. "Stop, I don\'t want to right now."');
    // TODO-QSP: dynamic text: The boys snort and mutter while Anushka is a bit more vocal. "What the fuck, <<$...
    scene.text(`The boys snort and mutter while Anushka is a bit more vocal. "What the fuck, ${((st as any).pcs_nickname ?? '')}? I thought you wanted to have some fun?"`);
    scene.text('You blush and decide to tell them the truth. "I do… it\'s… just… I\'m still a… virgin."');
    scene.text('Both the guys laugh as Anushka shoots them a dirty look and sighs. "Okay, then you really shouldn\'t be coming with us and making us think you\'re down for this when you\'re not."');
    scene.text('You nod slightly. "Sorry."');
    scene.text('She shakes her head slightly. "Yeah, whatever. Maybe you should get back to class or something…"');
    scene.text('Then Arkadi chimes in. "Yeah, get lost prude. You\'re killing the mood." Valentin laughs while Anushka turns and starts kissing Valentin, then Arkadi and all three of them are soon making out.');
    scene.text('It doesn\'t take long until she\'s on her knees sucking them both off, shortly followed by the boys fucking her. It\'s pretty clear you\'re not invited to take part. Unsure what else to do, you simply sit there waiting until they finish, wondering how badly you fucked up. Once they finish, the three of them head out, talking to each other and ignoring you. You know you\'ve got some work to do to repair your relationship with them. That is, if you even want to.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterRandBj(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/building/sex/boysex_tualet2.jpg');
  scene.text('You impatiently undo the button on his pants and dig your hand in, finding a hard dick waiting for you. You scoot his pants down a bit and pull it out, giving it a little kiss as you drop to your knees.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Suck his cock', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/building/sex/boysex_tualet3.jpg');
    // TODO-QSP: dynamic text: You start licking the head of his dick, ignoring the excited whispers of your cl...
    scene.text(`You start licking the head of his dick, ignoring the excited whispers of your classmates as you wrap your ${(((st as any).pc_desc ?? 0)?.['lips'] ?? '')} lips around it and start sucking, taking him in deeper and deeper with every thrust. Your hand darts down, eagerly fingering your soaking wet pussy. This is not fair! If you keep this up, he will shoot his load in your mouth and you will be left horny as hell!`);
    qspCall(st, 'arousal', 'bj', 3);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Bend over the toilet', handler: (st: GameState) => {
    (st as any).pose = 0;
    scene.img('images/locations/pavlovsk/school/building/sex/boysex_tualet5.jpg');
    scene.text('You pull away from his dick and get up. Leaning over a toilet and resting your hands on the wall, you invitingly shake your ass. "Come on baby, I need you to fuck me right now! I\'m so horny right now, please fuck me!"');
    scene.text('Your classmates have totally quietened down now, no longer making any brash remarks. Now they all want to be him.');
    if (((st as any).pantyworntype ?? 0) !== 'none') {
      scene.actions([
        { label: 'Remove panties', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/building/sex/boysex_tualet4.jpg');
    qspCall(st, 'underwear', 'remove');
    qspCall(st, 'dinSex', 'wear_condom');
    scene.text('You don\'t want your panties to get in the way, so you quickly slide them down your legs and stuff them in your pocket.');
    scene.text('He doesn\'t need any more encouragement and rubs his cock against your sopping fuckhole, slamming it in all the way on the first thrust. He then starts fucking you in short, furious thrusts and soon the room is filled with the sloppy sound of his balls slapping against your clit.');
    qspCall(st, 'arousal', 'vaginal', 3);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Mount him', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/building/sex/boysex_tualet6.jpg');
    qspCall(st, 'dinsex', 'vaginal_sex', 3);
    qspCall(st, 'dinsex', 'sexcum');
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'underwear', 'wear');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      qspCall(st, 'dinSex', 'wear_condom');
      scene.img('images/locations/pavlovsk/school/building/sex/boysex_tualet4.jpg');
      scene.text('He doesn\'t need any more encouragement and rubs his cock against your sopping fuckhole, slamming it in all the way on the first thrust. He then starts fucking you in short, furious thrusts and soon the room is filled with the sloppy sound of his balls slapping against your clit.');
      qspCall(st, 'arousal', 'vaginal', 3);
      qspCall(st, 'stat', '');
      scene.actions([
        { label: 'Mount him', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/building/sex/boysex_tualet6.jpg');
    qspCall(st, 'dinsex', 'vaginal_sex', 3);
    qspCall(st, 'dinsex', 'sexcum');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterRandSex(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/school/building/sex/boysex_scool1.jpg');
  scene.text('You take him to the old abandoned school, away from the curious eyes of his friends so you can have some alone time. Your pussy is soaking wet as you bend over, inviting him to ram his dick into you and fuck you good.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Spread your legs', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/building/sex/boysex_scool2.jpg');
    scene.text('He, being the gentleman that he is, isn\'t just looking for a quick fuck. He lays you down on your back and puts his face between your legs, rubbing his fingers over your dripping pussy lips before he starts to kiss your lips, teasingly running his tongue over them between kisses. After he finds your clitoris a few times, your moans grow louder and you arch your back. He backs down just enough for you to not orgasm. For the next few minutes, he keeps edging you with an evil grin on his face, ignoring your begging.');
    qspCall(st, 'arousal', 'cuni', 3);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'He fucks your pussy', handler: (st: GameState) => {
    (st as any).cumprecheck = 1;
    qspCall(st, 'cum_call', '', ((st as any).boy ?? 0), 1);
    scene.img('images/locations/pavlovsk/school/building/sex/boysex_scool3.jpg');
    (st as any).orgasm_or = 'yes';
    (st as any).orgasm_txt = 'Taking you upstairs to a window sill, he tells you to lay down on your back on the ledge. Once you oblige, he spreads your legs and slowly slides his cock into your dripping pussy, fucking you in low, long thrusts. Every thrust puts him in a little deeper and when he bottoms out in you, he starts fucking you in earnest. You\'ve given into your pleasure a long time ago; you are nothing but putty in his hands, letting him fuck you however he wants as long as you get off on it. Before too long you reach your orgasm and grasp your arms tightly around his neck to keep yourself from falling out the window. Your spasming pussy is milking his cock and you can tell he\'s getting close.';
    qspCall(st, 'dinsex', 'vaginal_sex', 10);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Take his load in your mouth', handler: (st: GameState) => {
    ((st as any).stat = (st as any).stat ?? {})['bj'] = ((st as any).stat['bj'] ?? 0) + (1);
    qspCall(st, 'cum_call', 'mouth', ((st as any).boy ?? 0), 1);
    qspCall(st, 'cum_call', 'breasts', ((st as any).boy ?? 0), 1);
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/building/sex/boysex_scool7.jpg');
    scene.text('He pulls you up from the window sill and tells you to get down on your knees before him. "Open your mouth," he says and you happily oblige. He shoves his dick inside your mouth and you enthusiastically suck him off, wanting to feel him squirt his load. Unable to withstand your sweet torture any longer, he growls and you feel the squirts of his cum land on your tongue. It was too much for you and some of it dribbles down your chin and onto your chest, despite your best efforts to swallow it all.');
    scene.text('After he admires his handiwork for a second, he notices the time. "Oh crap! We\'re going to be late for class!"');
    scene.text('You both quickly get dressed and run as fast as you can to make it to class on time.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_events', 'leave_break_events2'] },
    ]);
  } },
    ]);
  } },
      { label: 'He fucks your ass', handler: (st: GameState) => {
    if (((st as any).analPlugIn ?? 0) === 1) {
      (st as any).analPlugIn = 0;
      (st as any).analPlugOut = 1;
      scene.text('He plays with your butt plug for a moment before pulling it out. Your anus gapes slightly from being filled for so long. "Don\'t worry babe, I\'ll be filling that soon enough," he reassures you.');
    }
    scene.img('images/locations/pavlovsk/school/building/sex/boysex_scool4.jpg');
    scene.text('He wants something a little different today and carefully rubs the head of his dick against your anus. The head of his cock is quite large, and it\'s quite difficult to get in.');
    scene.text('You whine from pain when his cock enters you and you ask him to take it slow so you can get used to his size. He\'s happy to oblige and rubs your pussy slowly in the meantime, occasionally darting a finger in. With him massaging you like this, you feel the pain quickly subsiding.');
    qspCall(st, 'arousal', 'anal', 3, 'lube');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/building/sex/boysex_scool5.jpg');
    scene.text('After a few minutes of gentle ass fucking, he pulls you off the window ledge and gets on his back. You don\'t need any invitation and straddle him before he\'s even fully on the ground, guiding his cock back to your asshole. You control the pace now and spit in your hand and rub it on his dick before you slowly slide down onto it. It\'s still not completely pain-free, but he\'s definitely encouraged by your eagerness to put his cock back in your asshole.');
    scene.text('Even though you thought you could control the pace, he proves you wrong and starts to piston his hips against your stretched hole. You squirm, but the pleasant feelings start to take over again when he thrusts a few fingers into your pussy. He can feel his cock through the thin partition, rubbing it when his cock enters you once more.');
    qspCall(st, 'arousal', 'anal', 3, 'lube');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).orgasm_or = 'yes';
    scene.img('images/locations/pavlovsk/school/building/sex/boysex_scool6.jpg');
    scene.text('After a few minutes, he tells you to get up and squat over his hips. Without ever taking his dick out of your ass, you turn around and lean back for a second, your buttocks resting on his lower abdomen even though you\'re carrying most of your weight on your arms. You can tell he\'s impressed, not knowing what to do before he starts to pound your asshole furiously, driving his full length into your ass again and again.');
    scene.text('Not able to take any more you collapse in orgasm, falling back against him. You moan loudly as he wraps his arms around your chest and keeps pounding your ass until he shoots his load. When he finally pulls out, a slow trail of cum leaks from your well-stretched hole.');
    scene.text('After he admires his handiwork for a second, he notices the time. "Oh crap! We\'re going to be late for class!"');
    scene.text('You both quickly get dressed and run as fast as you can to make it to class on time.');
    qspCall(st, 'cum_call', 'anus', ((st as any).boy ?? 0), 1);
    qspCall(st, 'arousal', 'anal', 3, 'lube');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', goto: ['gschool_events', 'leave_break_events2'] },
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

function enterLunchBj(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcgeneratec', '0', 'a schoolboy you don\'t know', (Math.floor(Math.random() * 3) + 15));
  qspCall(s, 'boyStat', '$npclastgenerated');
  scene.img('images/locations/pavlovsk/school/lunch/sex/lunchbrbj.jpg');
  // TODO-QSP: dynamic text: You lead him into the restroom, where you get down on your knees and pull down h...
  scene.text(`You lead him into the restroom, where you get down on your knees and pull down his pants, revealing his stiff erection. You flash him a smile and close your ${(((s as any).pc_desc ?? 0)?.['lips'] ?? '')} lips around his ${((s as any).dick ?? '')}cm ${((s as any).dick_girth ?? '')} cock. You don't plan on taking long and quickly use all your tricks to get him to cum as quick as you can: swirling your tongue over the head, licking the shaft and sucking for all you're worth.`);
  qspCall(s, 'arousal', 'bj', 5);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth');
    scene.img('images/locations/pavlovsk/school/lunch/sex/lunchbrcum.jpg');
    scene.text('He doesn\'t last long; within a few minutes, you feel his cum squirting into your mouth. When he finishes, you let his cock pop out of your mouth before looking up at him and swallowing his cum. "Oh my god, you really know how to suck cock! Don\'t worry, I won\'t tell anyone," he says with a wink as he pulls his pants up before hurrying out of the bathroom. After he leaves, you take a moment to check yourself out in the mirror, making sure your hair and makeup is good before you leave.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', goto: ['gschool_events', 'leave_break_events2'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterLunchSex(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcgeneratec', '0', 'a schoolboy you don\'t know', (Math.floor(Math.random() * 3) + 15));
  qspCall(s, 'boyStat', '$npclastgenerated');
  scene.img('images/locations/pavlovsk/school/lunch/sex/roofbj.jpg');
  // TODO-QSP: dynamic text: Once you''re on the roof, you see several blankets and other stuff in a corner i...
  scene.text(`Once you're on the roof, you see several blankets and other stuff in a corner in a safe spot. You grab one and the boy helps you lay it out. Once it's down, you both undress and he lays on his back. Dropping down next to him, you close your ${(((s as any).pc_desc ?? 0)?.['lips'] ?? '')} lips around his ${((s as any).dick ?? '')}cm ${((s as any).dick_girth ?? '')} cock and start flicking your tongue over the head, licking the shaft and sucking for all you're worth while one of your hands plays with his balls.`);
  qspCall(s, 'arousal', 'bj', 5);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/lunch/sex/roofvag.jpg');
    scene.text('It doesn\'t take long before he wants more. He gets up on his knees and pushes you over onto your hands and knees. He rubs his fingers over your pussy, making sure it\'s nice and wet, then slides two of them in and fingerbangs you for a few minutes.');
    // TODO-QSP: dynamic text: With your pussy good and wet, he pulls his fingers out and rubs his dick against...
    scene.text(`With your pussy good and wet, he pulls his fingers out and rubs his dick against your pussy lips. Once the head of his dick is lubed up, he gently slides his ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} cock into your pussy before he slowly starts fucking you, taking it pretty easy with you. The more you moan and buck back against his hips, the harder he fucks you.`);
    scene.text('Holding your hips tight with his hands as he fucks you, he leans forward. "Can I fuck you in the ass?"');
    qspCall(st, 'arousal', 'vaginal', 5);
    qspCall(st, 'stat', '');
    qspCall(st, 'willpower', 'anal', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'No', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'No', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    scene.img('images/locations/pavlovsk/school/lunch/sex/roofvag.jpg');
    scene.text('You shake your head. "No, just keep fucking my pussy."');
    scene.text('"Okay…" He sounds a little disappointed, but you don\'t care. A few minutes later, he pulls out and stands up.');
    qspCall(st, 'arousal', 'vaginal', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Swallow', goto: ['gschool_sex', 'lunch_sex2'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Yes', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/lunch/sex/roofanal.jpg');
    scene.text('You nod your head. "Sure, you can fuck my ass if you want. Just go slow, okay?"');
    scene.text('"Sweet! Yeah, yeah totally. I\'ll be gentle. This is so great." You feel him pull out of your pussy and feel the head press against your anus. You feel the pressure building up until his dick painfully pops into your ass.');
    qspCall(st, 'arousal', 'auto_lube', 'anal');
    // TODO-QSP: dynamic text: You gasp slightly in pain and he stops for a second before he starts sliding his...
    scene.text(`You gasp slightly in pain and he stops for a second before he starts sliding his ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} cock deeper into your ass. True to his word, he slowly and gently fucks your ass but you can tell from the sounds he's making that, even at such a slow pace, he isn't going to last long. Sure enough, only a minute or two later, you feel him pull out of your ass and stand up.`);
    qspCall(st, 'arousal', 'anal', 5, 'lube');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Swallow', goto: ['gschool_sex', 'lunch_sex2'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterLunchSex2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'cum_call', 'mouth');
  scene.img('images/locations/pavlovsk/school/lunch/sex/roofcum.jpg');
  scene.text('He stands up and starts jerking his dick as you kneel in front of him and open your mouth. Within a few minutes, you feel his cum squirting into your mouth, which you quickly swallow. "Oh my god, you really know how to fuck! Don\'t worry I won\'t tell anyone," he says with a wink before he quickly gets dressed and hurries off the roof. After getting dressed, you make sure your hair and makeup is good before you leave.');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['gschool_events', 'leave_break_events2'] },
  ]);
  scene.build();
}

function enterStoragesex(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/teacher/victor/sex/storage1.jpg');
  scene.text('He stands behind you and starts undressing you. He soon has you completely naked and suddenly jerks you around to face him before pushing you roughly down on your knees.');
  qspCall(s, 'arousal', 'foreplay', 2, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Kneel', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/victor/sex/storage4.jpg');
    scene.text('What awaits you is his hard dick already out in your face. He rubs the tip of his dick against your lips and you can feel his sticky pre-cum. "Lick my dick like a lollipop," he tells you.');
    qspCall(st, 'arousal', 'bj', 3, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Lick his dick', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/victor/sex/storage3.jpg');
    scene.text('You start licking the length of his shaft, swirling your tongue around the head of his dick each time you reach the top. "Enough! Stop teasing me and suck it already!"');
    qspCall(st, 'arousal', 'bj', 3, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Suck his dick', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/victor/sex/storage2.jpg');
    scene.text('You open your mouth and wrap your lips around his shaft. You start bobbing your head and sucking his dick for a few minutes before he says "Stand up so I can fuck you."');
    qspCall(st, 'arousal', 'bj', 3, 'sub', 'deepthroat');
    qspCall(st, 'stat', '');
    if (((st as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.actions([
        { label: 'Let him', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/victor/sex/storage6.jpg');
    scene.text('He pulls you up off your knees and sits down on the bench before pulling you into his lap. You straddle him and feel his dick slide into you. You slowly start riding him and after a few minutes, he slaps your ass hard. "Turn around."');
    qspCall(st, 'arousal', 'vaginal', 3, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Turn around', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/victor/sex/storage7.jpg');
    scene.text('You get up and turn around. He grabs your hips and pulls you back down onto his dick. You start fucking him again, and he keeps his hands on your hips to control the pace, keeping it as hard and fast as possible. Once you\'re going hard and fast enough on your own, he lets go and leans back, letting you do all the work. Several minutes go by before he says "Get up and lay on the bench."');
    qspCall(st, 'arousal', 'vaginal', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Lay down', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A131');
    scene.img('images/characters/pavlovsk/school/teacher/victor/sex/storage8.jpg');
    scene.text('You lay down on the bench and he pulls you towards him, causing your legs to hang off the edge. He pulls your legs apart and kneels down between them. He slides his cock back into your pussy. You can feel him filling you nicely as he slowly pushes himself all the way inside you and starts fucking you. After several minutes, he starts groaning and you can tell he\'s about to cum when he suddenly pulls out of you.');
    qspCall(st, 'arousal', 'vaginal', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Cum', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/victor/sex/storage9.jpg');
    scene.text('Just as his dick pulls out of your pussy, you feel hot jets of cum splattering against your stomach. A few spurts hit your breasts as well as he loudly moans. Once the last spurt has landed, he rubs the tip of his dick against your stomach, wiping off the last bit of cum. Satisfied, he pulls up his pants and smiles at you. "Your reputation is well earned. We\'ll have to do this again some time. Now get cleaned up and get out of here." He walks out of the storage room, leaving you naked on your knees with his cum all over you.');
    qspCall(st, 'arousal', 'foreplay', 2, 'sub');
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'cum_call', 'breasts', 'A131');
    qspCall(st, 'cum_call', 'stomach', 'A131');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['gschool_lessons', 'short_break'] },
      { label: 'Go take a shower', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'mood', 'raise', 'small');
    (st as any).shower_shave = 0;
    (st as any).noshampoo = 0;
    scene.img('images/locations/pavlovsk/school/gym/shower/watch.jpg');
    scene.text('By the time you arrive in the girls locker room, you realize all the other girls have left. You quickly get undressed and head to the showers, where you enjoy the sensation of the hot water on your skin as the steam filling the room gives it an almost sauna-like feel, making you feel very relaxed.');
    qspCall(st, 'din_van', 'showerdin');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Go to the locker room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/gym/locker/change.jpg');
    scene.text('You take your clothes out of your locker and start putting them on. With no one else here to distract you, it doesn\'t take you too long to get dressed.');
    scene.text('You can choose another outfit while you\'re here.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons4', 'post_dress'] },
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
    qspCall(st, 'willpower', 'sex', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Just suck him off', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Just suck him off', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    scene.img('images/characters/pavlovsk/school/teacher/victor/sex/storage4.jpg');
    scene.text('You really don\'t want to fuck him, but you have an idea on how to convince him to just let you suck him off. Once he lets go of the back of your head, you pull his dick out of your mouth so you can respond as he tries to pull you up. "I can\'t, I\'m still a virgin. Why don\'t I just suck you off instead?"');
    scene.text('He gives you a slightly disbelieving look. You don\'t think he believes you, but then he nods. "Fine, but strip off so I can see your naked body." You nod and start sucking his dick again as you start taking off your clothes. He puts his hand on the back of your head and forces his dick all the way down your throat again as you strip. He starts to moan loudly, taking his hand from the back of your head. You pull your head back just in time as he grabs hold of his dick and starts to stroke it.');
    qspCall(st, 'arousal', 'bj', 3, 'sub', 'deepthroat');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Cum', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/victor/sex/locker9.jpg');
    scene.text('You soon feel hot jets of cum splattering against your cheek. A few more spurts hit your face as well as he loudly moans. Once the last spurt has landed, he rubs the tip of his dick against your lips, wiping off the last bit of cum. Satisfied, he pulls up his pants and smiles at you. "Your reputation is well earned. We\'ll have to do this again some time. Now get cleaned up and get out of here." He walks out of the storage room, leaving you naked on your knees with his cum running down your face.');
    qspCall(st, 'arousal', 'foreplay', 2, 'sub');
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'cum_call', 'face', 'A131');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['gschool_lessons', 'short_break'] },
      { label: 'Go take a shower', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'mood', 'raise', 'small');
    (st as any).shower_shave = 0;
    (st as any).noshampoo = 0;
    scene.img('images/locations/pavlovsk/school/gym/shower/watch.jpg');
    scene.text('By the time you arrive in the girls locker room, you realize all the other girls have left. You quickly get undressed and head to the showers, where you enjoy the sensation of the hot water on your skin as the steam filling the room gives it an almost sauna-like feel, making you feel very relaxed.');
    qspCall(st, 'din_van', 'showerdin');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Go to the locker room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/gym/locker/change.jpg');
    scene.text('You take your clothes out of your locker and start putting them on. With no one else here to distract you, it doesn\'t take you too long to get dressed.');
    scene.text('You can choose another outfit while you\'re here.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons4', 'post_dress'] },
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
    scene.actions([
      { label: 'Just my ass', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A131');
    scene.img('images/characters/pavlovsk/school/teacher/victor/sex/locker5.jpg');
    scene.text('You really don\'t want him to fuck your pussy, but surely he won\'t mind just fucking your ass instead. You turn around with your back facing him and get down on all fours on the bench instead, wiggling your ass at him. "Why don\'t you fuck my tight little asshole instead?" you say teasingly.');
    scene.text('He gives you a look of slight surprise and smiles. "I don\'t mind if I do." He grabs a bottle off one of the shelves and rubs some of the contents onto both his dick and your asshole. You can feel it\'s slickness, so it\'s obviously something he uses for lube.');
    // TODO-QSP: dynamic text: With his dick and your asshole lubed up, he moves up behind you. You feel the ti...
    scene.text(`With his dick and your asshole lubed up, he moves up behind you. You feel the tip of his dick press against your asshole until it suddenly pops into you. It hurts a little at first, but he doesn't move, giving you a second to relax and adjust to the feeling of his ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} cock in your ass. He then starts slowly fucking your ass, but not too deeply, letting you get comfortable with the sensation.`);
    (st as any).anal_slip = ((st as any).anal_slip ?? 0) + (10);
    qspCall(st, 'arousal', 'anal', 3, 'sub', 'lube');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Take it up the ass', goto: ['gschool_sex', 'storagesex_anal'] },
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

function enterStoragesexAnal(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/teacher/victor/sex/locker6.jpg');
  scene.text('He steadily works his dick as deep into your asshole as you can comfortably take and starts fucking you harder and faster. Each time you tense up or cry out, he eases up until he finds just the right spot where he can go as deep and as hard as you can handle and keeps that rhythm, pumping your ass in a fairly pleasant fucking. It starts feeling surprisingly good after a few minutes and you find yourself moaning and getting into it almost as much as he is. Just then, he pulls his dick out of your asshole. "Get on your knees," he says and you turn around and just barely get down on your knees in time.');
  qspCall(s, 'arousal', 'anal', 3, 'sub', 'lube');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Cum', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/victor/sex/locker9.jpg');
    scene.text('You soon feel hot jets of cum splattering against your cheek. A few more spurts hit your face as well as he loudly moans. Once the last spurt has landed, he rubs the tip of his dick against your lips, wiping off the last bit of cum. Satisfied, he pulls up his pants and smiles to you. "Your reputation is well earned. We will have to do this again. Now get cleaned up and get home." He walks out of the storage room, leaving you naked on your knees with his cum running down your cheek.');
    qspCall(st, 'arousal', 'foreplay', 2, 'sub');
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'cum_call', 'face', 'A131');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['gschool_lessons', 'short_break'] },
      { label: 'Go take a shower', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'mood', 'raise', 'small');
    (st as any).shower_shave = 0;
    (st as any).noshampoo = 0;
    scene.img('images/locations/pavlovsk/school/gym/shower/watch.jpg');
    scene.text('By the time you arrive in the girls locker room, you realize all the other girls have left. You quickly get undressed and head to the showers. You enjoy the sensation of the hot water on your skin. The steam filling the room gives it an almost sauna-like feel and makes you feel very relaxed.');
    qspCall(st, 'din_van', 'showerdin');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Go to the locker room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/gym/locker/change.jpg');
    scene.text('You take your clothes out of your locker and start putting them on. With no one else here to distract you, it doesn\'t take you too long to get dressed.');
    scene.text('You can choose another outfit while you\'re here.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons4', 'post_dress'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterLazarLockerroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A149', 'like');
  scene.img('images/characters/pavlovsk/school/boy/lazar/sex/school/shower/lazar3.jpg');
  scene.text('You can\'t help yourself; you want to suck his dick and drop to your knees as he gets close. You take hold of his dick with your hand and open your mouth up, taking it into your mouth as you wrap your lips around the shaft and start sucking his dick. As you suck his dick, you pull his pants down to his ankles.');
  qspCall(s, 'arousal', 'bj', 3);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep sucking', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/lazar/sex/school/shower/lazar4.jpg');
    // TODO-QSP: dynamic text: You keep sucking his dick, alternating between just using your mouth or using yo...
    scene.text(`You keep sucking his dick, alternating between just using your mouth or using your hand and mouth. Sometimes, you play with his balls with one of your hands as well. He lets you completely control the action, content to just stand there and let you suck his dick. He moans loudly as he says "Damn, you're a cock sucking rockstar ${((st as any).pcs_nickname ?? '')}." A few seconds later, he adds "Come on, let me fuck that fine pussy of yours."`);
    qspCall(st, 'arousal', 'bj', 3);
    qspCall(st, 'stat', '');
    if (((st as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.actions([
        { label: 'Mount him', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A149');
    scene.img('images/characters/pavlovsk/school/boy/lazar/sex/school/shower/lazar6.jpg');
    scene.text('You pull his dick out of your mouth so you can respond. "Okay, get down on your back."');
    // TODO-QSP: dynamic text: He grins and quickly gets down on his back before you straddle and mount him rev...
    scene.text(`He grins and quickly gets down on his back before you straddle and mount him reverse cowgirl style. You slowly lower yourself down, guiding his cock with your hand. You feel the tip make contact with your slit and gently ease yourself down, slowly impaling yourself on his ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} dick. You only slide about halfway down his dick and already feel full, so you start riding him. You can feel his desire to buck up and drive himself deeper inside you, but you place your hands on his hips to control the action.`);
    qspCall(st, 'arousal', 'vaginal', 3, 'dom');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Ride him', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/lazar/sex/school/shower/lazar7.jpg');
    scene.text('After a few minutes, you turn around so you\'re facing him in the cowgirl position. As you start riding him, you slowly lower yourself down more and more until you\'re taking his full length inside you. He starts moaning loudly, telling you he\'s about to cum.');
    qspCall(st, 'arousal', 'vaginal', 3, 'dom');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['gschool_sex', 'lazar_lockerroom_cum'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Just keep sucking', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/lazar/sex/school/shower/lazar5.jpg');
    scene.text('You don\'t reply to his request and keep sucking his dick. You think he got the hint as he doesn\'t ask again. Regardless, you keep sucking his dick and he moans a bit louder and starts to move. At one point, he nearly slips and falls on the slick floor. Instead, you ease him down onto his back and you keep sucking his dick that way.');
    qspCall(st, 'arousal', 'bj', 3);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['gschool_sex', 'lazar_lockerroom_cum'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterLazarLockerroomCum(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/boy/lazar/sex/school/shower/lazar8.jpg');
  scene.text('You climb off him, get on your knees and start sucking his cock again, tasting your own juices and stroking it with your hand. When you feel his dick start to twitch, you stop sucking and barely pull your mouth off his dick when his cum spurts out, hitting the side of your face. You stroke him several more times, milking every last drop of cum out of him.');
  scene.text('"Fuck I needed that! That was amazing," he says as he stands up and pulls his pants back up.');
  if (((s as any).grupTipe ?? 0) === 2) {
    scene.text('"Hey, you going to the game on Saturday?" he asks as he starts getting cleaned up.');
    scene.text('You smile at him. "Maybe. Depends on what\'s going on, Why?" you ask.');
    scene.text('He grins. "I thought we might hook up after the game. I am sure I could use another release by then. So what do you think?" he asks.');
    scene.text('You grin yourself in reply. "Maybe, maybe not…" you say in a teasing tone, which makes him laugh.');
    scene.text('"Okay, got it. Well I hope to see you at the game then. I think you got a little something there." he says, indicating the right side of your face.');
    scene.text('You roll your eyes, knowing full well his cum is still all over your right cheek. "Ha ha, very funny."');
    // TODO-QSP: dynamic text: He laughs. "See you later <<$pcs_nickname>>." He walks out of the girls shower a...
    scene.text(`He laughs. "See you later ${((s as any).pcs_nickname ?? '')}." He walks out of the girls shower and you go into the girls locker room to get dressed.`);
  } else {
    scene.text('"Hey, you want to hook up sometime?" he asks as he starts getting cleaned up.');
    scene.text('You smile at him. "Maybe. Depends on what\'s going on."');
    scene.text('He grins. "Cool. Give me your number." After you give him your number, he adds "Maybe I\'ll call you this weekend and we can hook up or something?"');
    scene.text('You smile in reply. "Sounds like fun."');
    scene.text('"I think you got a little something there," he says, indicating the right side of your face.');
    scene.text('You roll your eyes, knowing full well his cum is still all over your right cheek. "Ha ha, very funny."');
    // TODO-QSP: dynamic text: He laughs. "See you later, <<$pcs_nickname>>." He walks out of the shower and yo...
    scene.text(`He laughs. "See you later, ${((s as any).pcs_nickname ?? '')}." He walks out of the shower and you go into the locker room to get dressed.`);
  }
  qspCall(s, 'arousal', 'hj', 1);
  qspCall(s, 'arousal', 'bj', 1);
  qspCall(s, 'cum_call', 'face', 'A149');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish dressing', goto: ['gschool_lessons4', 'post_dress'] },
  ]);
  scene.build();
}

function enterVdLockerroom(s: GameState, scene: SceneBuilder): void {
  if (((s as any).grupTipe ?? 0) === 4) {
    qspCall(s, 'fame', 'pav', 'sex', 3);
  } else {
    qspCall(s, 'fame', 'pav', 'sex', 10);
  }
  ((s as any).grupvalue = (s as any).grupvalue ?? {})[1] = ((s as any).grupvalue[1] ?? 0) - (3);
  ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = ((s as any).grupvalue[2] ?? 0) - (3);
  ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = ((s as any).grupvalue[3] ?? 0) - (5);
  scene.img('images/locations/pavlovsk/school/gym/sex/vd3.jpg');
  scene.text('You drop to your knees in the shower with the water still pouring down on your head. The two boys walk up, one on each side of you and you take hold of both their dicks and start stroking them. One of them reaches up and turns off the water as you turn your head and start sucking on Dan\'s cock as you stroke Vitek\'s.');
  qspCall(s, 'arousal', 'hj', 3);
  qspCall(s, 'arousal', 'bj', (-3));
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Switch dicks', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/gym/sex/vd4.jpg');
    scene.text('You turn your head and start sucking on Vitek\'s cock instead while stroking Dan\'s with your right hand. Vitek reaches around the back of your hand and starts pulling your head closer while he thrusts his dick into your mouth, fucking your throat as you feel his balls bounce against your chin. Dan, apparently not happy with just a handjob, reaches down and starts pulling you up by the hips while Vitek makes sure his dick stays in your mouth.');
    qspCall(st, 'arousal', 'hj', 3);
    qspCall(st, 'arousal', 'bj', (-3), 'deepthroat');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Stand up', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A10');
    scene.img('images/locations/pavlovsk/school/gym/sex/vd5.jpg');
    // TODO-QSP: dynamic text: You end up bent over with your head facing Vitek and your ass facing Dan. Dan wa...
    scene.text(`You end up bent over with your head facing Vitek and your ass facing Dan. Dan wastes no time and slides his ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} dick into your pussy before he starts fucking you. After a few minutes, Dan grabs your right leg and lifts it off the ground as he keeps fucking you. You find it difficult to keep your balance standing on one leg while Dan pounds your pussy and Vitek fucks your throat, so you place a hand on the wall to help keep your balance. "Turn her around, I want to fuck that pussy," Vitek commands.`);
    qspCall(st, 'arousal', 'vaginal', 3);
    qspCall(st, 'arousal', 'bj', (-3), 'deepthroat');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Spin around', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A9');
    scene.img('images/locations/pavlovsk/school/gym/sex/vd6.jpg');
    // TODO-QSP: dynamic text: As both cocks leave your body, you find yourself suddenly spun around. You nearl...
    scene.text(`As both cocks leave your body, you find yourself suddenly spun around. You nearly lose your balance from the sudden motion and would have fallen if Dan and Vitek didn't have a firm grip on you. Before you fully regain your balance, Dan shoves his dick in your mouth as Vitek slides his ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} dick into your pussy and starts fucking you, pounding you even harder than Dan did. Vitek holds your hip with one hand and lifts your leg up with his other, just like Dan had done. A few minutes later, they're both grunting before they both pull out of you. "On your knees, slut! Jerk us off on your face," Vitek says.`);
    qspCall(st, 'arousal', 'vaginal', 3);
    qspCall(st, 'arousal', 'bj', (-3), 'deepthroat');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Back on your knees', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/gym/sex/vd7.jpg');
    scene.text('You get back down on your knees between the boys and take one dick in each hand and start jerking them off. After a few minutes, you find yourself taking streams of cum from both directions. Most of it hits you in the face, your cheeks and lips and some ends up on your chin. They cum so much some of it starts dripping down onto your breasts as the last few streams, lacking the velocity of the first ones, end up falling on your breasts as well. When they finish, your face and breasts are covered in their cum. You look up at both of them, having done everything they asked and Dan smirks. "You\'re a fucking cum slut."');
    scene.text('Vitek laughs at the comment. "No shit! You\'re such a dirty little whore!"');
    scene.text('Vitek walks away as Dan reaches over and turns the shower back on. "You better take a shower, you nasty slut!"');
    scene.text('You can hear the two of them walking out, talking and laughing as they do. The water runs over you, slowly washing their cum away. You get up and clean up, then walk into the locker room to dry off and get dressed.');
    (st as any).noshampoo = 1;
    qspCall(st, 'din_van', 'showerdin');
    qspCall(st, 'arousal', 'hj', 3);
    qspCall(st, 'arousal', 'hj', (-3));
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Finish dressing', goto: ['gschool_lessons4', 'post_dress'] },
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

function enterPetkaLockerroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A6');
  scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/petka3.jpg');
  scene.text('When you pull the locker open, you see Petka inside, naked and stroking an erection as you stare at him in surprise. "Please don\'t report me! I\'ll do anything you want!" he squeals.');
  scene.text('You pause for a second, deciding what to do. "Anything? Anything I desire, no matter what?" you ask.');
  scene.text('He visibly swallows and nods. "Yes. Please?"');
  qspCall(s, 'arousal', 'erotic_nudity', 3);
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'misc', 'force', 'easy');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Tell him to do your homework from now on', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Tell him to do your homework from now on', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'misc', 'force', 'easy');
    qspCall(st, 'willpower', 'pay', 'force');
    qspCall(st, 'stat', '');
    qspGoto(st, 'gschool_sex', 'petka_homework');
  } },
    ]);
  }
  qspCall(s, 'willpower', 'misc', 'force', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Take his clothes', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Take his clothes', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'misc', 'force', 'medium');
    qspCall(st, 'willpower', 'pay', 'force');
    scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/petka4.jpg');
    scene.text('You see his clothes at the bottom of the locker and reach down and quickly snatch them up. He grabs for them, but one look from you and he lets go and stands meekly in place.');
    qspCall(st, 'arousal', 'erotic_nudity', 3, 'dom');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Tell him to get lost', goto: ['gschool_sex', 'petka_homenaked'] },
    ]);
  } },
    ]);
  }
  qspCall(s, 'willpower', 'misc', 'force', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Make him lick you', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Make him lick you', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'misc', 'force', 'medium');
    qspCall(st, 'willpower', 'pay', 'force');
    scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/petka7.jpg');
    scene.text('You put one foot on the side of the locker, spreading your legs wide and showing off your pussy. His eyes are glued to your pussy. "Get on your knees and lick my pussy, pervert!" you command.');
    scene.text('He drops to his knees without a word and starts licking your pussy. He isn\'t very skilled, but he seems eager to please. You grab his head and grind your crotch against his face, covering him in your wetness.');
    qspCall(st, 'arousal', 'cuni', 3, 'dom');
    qspCall(st, 'stat', '');
    if (((st as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.actions([
        { label: 'Ride him', goto: ['gschool_sex', 'petka_ride'] },
        { label: 'Tell him to fuck you', goto: ['gschool_sex', 'petka_fuck'] },
      ]);
    }
    if (((st as any).strapNumber ?? 0) > 0) {
      scene.actions([
        { label: 'I have a strapon', handler: (st: GameState) => {
    ((st as any).petkaQW = (st as any).petkaQW ?? {})['blackmail'] = 1;
    scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/femdomlocker1.jpg');
    scene.text('You step away from him and he stays on his knees, watching you. You walk over to your locker, pull out your strapon and show it to him. "I\'m going to fuck you with this."');
    scene.text('His eyes grow wide. "No!" he blurts out.');
    scene.text('You cock your head slightly. "You said I could do <i>anything</i>." He starts to open his mouth, but just sighs and nods in reluctance. You sit down on the bench and spread your legs. "Now get back to work." He crawls over to you and starts licking your pussy again.');
    qspCall(st, 'arousal', 'cuni', 3, 'dom');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Enjoy your slave', handler: (st: GameState) => {
    (st as any).petkalocker = (Math.floor(Math.random() * 5) + 1);
    if (((st as any).petkalocker ?? 0) === 1) {
      qspCall(st, 'npc_relationship', 'modify', 'A6', 'like');
      scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/femdomlocker2.jpg');
      scene.text('As you sit on the bench letting Petka lick your pussy, Albina suddenly walks in and stops, stunned at what she sees before her. "What the fuck?"');
      scene.text('He stops licking you and whips his head around to look at Albina and turns bright red. You grab his head and pull it back to your crotch and he starts licking you again. "I didn\'t say you could stop, pervert."');
      scene.text('Albina gives you a confused look as you hold up your strapon and show it to her. "This little perv was hiding in one of the lockers, jerking off while watching us get dressed. So I thought I would… teach him a lesson," you tell her while indicating the strapon.');
      scene.text('Albina gives Petka a dirty look, not that he can see it with his face buried in your pussy. "Is that so? And he agreed?" she asks.');
      scene.text('You giggle. "I told him it was that or I would go get the coach and bring it up with the principal, who would likely call his parents in. He decided against that."');
      scene.text('Albina can\'t help but laugh. "Mind if I \'help\'?"');
      scene.text('You smile at her. "No… not at all."');
      qspCall(st, 'arousal', 'cuni', 2, 'dom', 'group');
      qspCall(st, 'stat', '');
      scene.actions([
        { label: 'Against the locker', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/femdomlocker3.jpg');
    scene.text('You push him away. "Stand against the locker and watch." He does as you say and he watches, his eyes wide as you start strapping the harness on and making sure the dildo is firmly attached. Albina helps you get the harness nice and firm.');
    scene.text('"Ha! His dick is rock-hard knowing he\'s about to get fucked! I think he might be gay…" Albina says with a giggle.');
    scene.text('Petka blushes. "I\'m not gay, I can\'t help it." he stammers. You don\'t know how or why he\'s sporting an erection, but it doesn\'t really matter.');
    qspCall(st, 'arousal', 'erotic', 1, 'dom', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Turn around', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A6', 'dislike');
    ((st as any).petkaQW = (st as any).petkaQW ?? {})['sub'] = ((st as any).petkaQW['sub'] ?? 0) + (1);
    ((st as any).petkaQW = (st as any).petkaQW ?? {})['pegged'] = ((st as any).petkaQW['pegged'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/femdomlocker4.jpg');
    scene.text('You grab him and turn him around. With your manhandling, he quickly turns around so he\'s facing the lockers. When you start to reach for your bag, Albina seems to know you are going for the lube. "He doesn\'t need it. This is a punishment after all. If you lube it up, he might enjoy it too much," she says and spits on your dildo. You follow suit and spit on it as well, rubbing the saliva onto the dildo while she spits on his ass and lets it run down his crack. You step up behind him and slide the dildo between his ass cheeks.');
    scene.text('Albina helps out by spreading his ass so you can get a better look. You rub the tip of the dildo against his asshole rubbing the spit in and push forward. There\'s a lot of resistance before the dildo suddenly pops into his ass, causing him to cry out and Albina to giggle.');
    qspCall(st, 'arousal', 'anal_strap_give', 3, 'dom', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Albina wants some', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/femdomlocker5.jpg');
    scene.text('You work the dildo deeper into his ass and he grunts loudly in pain. "Oh my god, he\'s still rock-hard! He\'s loving you fucking his ass!" Albina laughs while pointing. You look around and sure enough, his dick is rock-hard. Albina undresses, sits on a bench and leans back against the lockers. "Come over here and eat me, bitch boy."');
    scene.text('You grab him by the hair, turn him towards her and shove him forward, which causes your dildo to slip out of his ass. "You heard her! Go over there and eat her pussy!" you tell him. He scrambles over and kneels down to eat her pussy as you slowly walk over behind him, grab his hips and pull them up. Now standing bent over, he licks Albina\'s pussy while presenting his ass to you.');
    qspCall(st, 'arousal', 'anal_strap_give', 2, 'dom', 'group');
    qspCall(st, 'arousal', 'voyeur_sex', 3, 'dom', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'A little more spit', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/femdomlocker6.jpg');
    scene.text('You spit on both the dildo and his ass crack again, watching the spit slowly run down to his slightly gaping asshole. You rub the tip of your dildo against the glob of your spit and then slide it back in his ass. You start fucking his ass again while he eats out Albina, who is moaning loudly in pleasure and seems to really be enjoying herself. Eventually, Albina gets up and walks over to her bag as you keep fucking him. She pulls out a large black strapon of her own and starts sliding it on. Once she has it in place, she walks back over. "Okay, my turn."');
    qspCall(st, 'arousal', 'anal_strap_give', 3, 'dom', 'group');
    qspCall(st, 'arousal', 'voyeur_sex', (-3), 'dom', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Albina\'s turn', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/femdomlocker7.jpg');
    scene.text('You nod, pull out and step aside. She turns him until he\'s facing you, then spits on his ass and then on her dildo. She steps closer and then he groans loudly from her forcefully shoving her dildo up his ass. "Yeah, you love that don\'t you, you little fucking butt slut whore?! Tell me you love getting fucked by my huge dick!"');
    scene.text('Petka groans loudly but answers her. "Yes, I love it! I love you fucking my ass!" You don\'t know if he really does or if he\'s just saying what he thinks she wants to hear.');
    qspCall(st, 'arousal', 'voyeur_sex', 3, 'dom', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'No mercy', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/femdomlocker8.jpg');
    scene.text('"That\'s right, you fucking slut!" Albina says as she grabs hold of Petka\'s hips tightly with both hands and starts just hammering away at his ass as fast and hard as she can as he starts crying out. "I\'m going to keep fucking your ass until you cum for me like the little slutty whore that you are!" Albina growls. Apparently taking her at her word, Petka starts jerking off as hard and fast as he can, trying to cum while Albina rips up his ass.');
    qspCall(st, 'arousal', 'voyeur_sex', 3, 'dom', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'About to cum', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/femdomcum1.jpg');
    scene.text('"I\'m about to cum!" Petka grunts out.');
    scene.text('"You better cum! If you don\'t, then I\'m going to fuck you so hard you\'ll wish you had!" Albina threatens.');
    scene.text('"I swear!" Petka cries out. Albina gives him a few more hard full-length thrusts before pulling out of him.');
    // TODO-QSP: dynamic text: "Put your shoe on the bench, <<$pcs_nickname>>." When you do as she asks, she gr...
    scene.text(`"Put your shoe on the bench, ${((st as any).pcs_nickname ?? '')}." When you do as she asks, she grabs Petka by the throat and forces him to sit on the bench right in front of your shoe. "Now cum on her shoe." You're about to say something, but she gives you a wink, so you decide to just wait and see. Petka, true to his word, doesn't take long and starts cumming, coating your shoe in his cum.`);
    qspCall(st, 'arousal', 'voyeur_sex', 3, 'dom', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Petka cleans up', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/femdomcum1.jpg');
    scene.text('Once he stops cumming, Albina pulls him off the bench and down onto his knees, then forces his head down to your shoe. "Now lick your nasty cum off her shoe! Lick it clean!" she commands him and puts her foot on his back as her hands force his head to your shoe. He starts quickly licking his cum off your shoe, doing a pretty good job of licking it completely clean.');
    scene.text('Once your shoe is good and clean, she lets go of him and steps away. "Now get the fuck out here before we decide to have another go with you!" she commands. Terrified, he grabs his clothes and bolts out of the locker room, still naked. Albina laughs loudly and you can\'t help but join in. The two of you then take your strapons off and clean them up. "Well that was fun…" Albina says as she gently rubs her soaking wet pussy, her juices trickling down her leg. "Good thing I forgot something."');
    scene.text('"We might have to track him down and do that again sometime. Or maybe he\'ll be stupid enough to spy on us again?" she adds. Before you can make sense of what she said, she has already got dressed and walked out, leaving you to finish up.');
    qspCall(st, 'arousal', 'voyeur_sex', 3, 'dom', 'group');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Finish dressing', goto: ['gschool_lessons4', 'post_dress'] },
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
      if (((st as any).spellKnown ?? 0)?.['penisenvy'] === 1) {
        scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/pegging0.jpg');
        scene.text('Once you\'re done with him eating you out, you push him aside and then get up and get dressed. Once you\'re dressed, you slip on your strapon harness and tighten it into place.');
        if ((!((st as any).penisEnvyVariable ?? 0))) {
          scene.actions([
            { label: 'Cast Penis Envy spell', handler: (st: GameState) => {
    qspCall(st, 'castSpell', 'penisenvy');
    if (((st as any).spellSuccess ?? 0) > 0) {
      scene.actions([
        { label: 'Get your dick sucked', goto: ['gschool_sex', 'petka_magic_dick'] },
      ]);
    } else {
      scene.actions([
        { label: 'Just use the strapon as is', goto: ['gschool_sex', 'petka_strapon_bj'] },
      ]);
    }
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Get your dick sucked', goto: ['gschool_sex', 'petka_magic_dick'] },
          ]);
        }
        scene.actions([
          { label: 'Just use the strapon as is', goto: ['gschool_sex', 'petka_strapon_bj'] },
        ]);
      } else {
        scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/pegging1.jpg');
        scene.text('Once you\'re done with him eating you out, you push him aside and then get up and get dressed. Once you\'re dressed, you slip on your strapon harness and tighten it into place.');
        scene.text('You look at Petka where he waits meekly, already cowed by you. Seeing him so submissive sends a thrill down your spin as you point at the ground in front of you. "Come over here and suck my dick, bitch!"');
        scene.text('He eyes you with fear and then slowly starts to crawl over. "Now!" you shout. "Or this will only get worse for you. Maybe I should call the coach in here?"');
        scene.text('That did the trick. He scrambles over quickly and starts sucking on your strapon. You grab the back of his head with your hand and start forcing him to deepthroat your dildo.');
        qspCall(st, 'arousal', 'foreplay', 2, 'dom');
        qspCall(st, 'stat', '');
        scene.actions([
          { label: 'Get it nice and wet', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/pegging2.jpg');
    scene.text('You moan like guys do when they\'re getting a blowjob and force your dildo deeper down his throat, making him gag several times. "That\'s it, suck my dick. You better get it nice and wet because this is all the lube you\'re going to get." He looks up at you with worry in his eyes as he surprisingly sucks your dildo skillfully like a pro.');
    scene.text('You pull his head off your dildo. "Now turn around." He hesitates for only a moment before he stands up and turns around.');
    qspCall(st, 'arousal', 'foreplay', 2, 'dom');
    qspCall(st, 'stat', '');
    if (((st as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
      scene.actions([
        { label: 'Use lube', handler: (st: GameState) => {
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['lubricant'] = ((st as any).mc_inventory['lubricant'] ?? 0) - (1);
    scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/pegging3.jpg');
    scene.text('You push him forward until he\'s bent over. "You\'re such a good little cock sucker! I\'m going to reward you and use some lube." You get some of your lube and lube up the dildo, then squirt some on his ass and lube it up. With his asshole and your dildo lubed up, you step up behind him and line the dildo up until it pushes against his asshole. You keep pushing against it as he tenses up before your dildo suddenly pops into his ass and he cries out in pain.');
    qspCall(st, 'arousal', 'anal_strap_give', 3, 'dom');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Keep fucking his ass', goto: ['gschool_sex', 'femdom_petka_doggy'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Use spit', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A6', 'dislike');
    scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/pegging3.jpg');
    scene.text('You push him forward until he\'s bent over. "Spread your cheeks," you command and he grabs his ass cheeks and spreads them as you spit in the crack of his ass a few times and watch your saliva run down to his asshole. You rub the tip of your dildo against your spit on his ass and work it in, along with his saliva on your dildo. You feel him tense up and eventually hiss a little in pain as you keep pushing against his asshole with your dildo. The pressure builds up until your dildo suddenly pops into his ass and he cries out in pain and tries to pull away. You were ready for that, however, and grab his hips and pull him back as you start fucking his ass.');
    qspCall(st, 'arousal', 'anal_strap_give', 3, 'dom');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Keep fucking his ass', goto: ['gschool_sex', 'femdom_petka_doggy'] },
    ]);
  } },
    ]);
  } },
        ]);
      }
    }
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Make him lick your ass', goto: ['gschool_sex', 'petka_eatpussy'] },
      { label: 'Tell him to fuck your ass', goto: ['gschool_sex', 'petka_anal'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell him to get lost', goto: ['gschool_sex', 'petka_home'] },
    { label: 'Suck his dick', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A6', 'like');
    scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/petka5.jpg');
    scene.text('You\'re so turned on by a naked boy spying on you and seeing his rock-hard cock that you can\'t help yourself. You drop down to your knees and start stroking his dick, his look of shock at your actions amusing you. You take his cock into your mouth and start sucking it as he moans loudly.');
    qspCall(st, 'arousal', 'bj', 3);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Make him lick you', goto: ['gschool_sex', 'petka_eatpussy'] },
      { label: 'Keep sucking his dick', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/petka6.jpg');
    scene.text('You stroke his shaft as you keep sucking his dick, your other hand occasionally playing with his balls. He starts moaning louder and louder and you can tell he won\'t last much longer.');
    qspCall(st, 'arousal', 'bj', 3);
    qspCall(st, 'stat', '');
    if (((st as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.actions([
        { label: 'Ride him', goto: ['gschool_sex', 'petka_ride'] },
      ]);
    }
    scene.actions([
      { label: 'Make him lick you', goto: ['gschool_sex', 'petka_eatpussy'] },
      { label: 'Suck him off', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/petka6.jpg');
    scene.text('You just want to suck him until he cums. His moans grow louder and louder and you start to wonder if someone might hear him and if you should shut him up when you feel his dick start to twitch.');
    qspCall(st, 'arousal', 'bj', 3);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Cum', goto: ['gschool_sex', 'petka_titcum'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterPetkaStraponBj(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/pegging1.jpg');
  scene.text('You look at Petka where he waits meekly, already cowed by you. Seeing him so submissive sends a thrill down your spine as you point at the ground in front of you. "Come over here and suck my dick, bitch!"');
  scene.text('He eyes you with fear and then slowly starts to crawl over. "Now!" you shout. "Or this will only get worse for you. Maybe I should call the coach in here?"');
  scene.text('That did the trick. He scrambles over quickly and starts sucking on your strapon. You grab the back of his head with your hand and start forcing him to deepthroat your dildo.');
  qspCall(s, 'arousal', 'foreplay', 2, 'dom');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get it nice and wet', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/pegging2.jpg');
    scene.text('You moan like guys do when they\'re getting a blowjob and force your dildo deeper down his throat, making him gag several times. "That\'s it, suck my dick. You better get it nice and wet because this is all the lube you\'re going to get." He looks up at you with worry in his eyes as he surprisingly sucks your dildo skillfully like a pro.');
    scene.text('You pull his head off your dildo. "Now turn around." He hesitates for only a moment before he stands up and turns around.');
    qspCall(st, 'arousal', 'foreplay', 2, 'dom');
    qspCall(st, 'stat', '');
    if (((st as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
      scene.actions([
        { label: 'Use lube', handler: (st: GameState) => {
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['lubricant'] = ((st as any).mc_inventory['lubricant'] ?? 0) - (1);
    scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/pegging3.jpg');
    scene.text('You push him forward until he\'s bent over. "You\'re such a good little cock sucker! I\'m going to reward you and use some lube." You get some of your lube and lube up the dildo, then squirt some on his ass and lube it up. With his asshole and your dildo lubed up, you step up behind him and line the dildo up until it pushes against his asshole. You keep pushing against it as he tenses up before your dildo suddenly pops into his ass and he cries out in pain.');
    qspCall(st, 'arousal', 'anal_strap_give', 3, 'dom');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Keep fucking his ass', goto: ['gschool_sex', 'femdom_petka_doggy'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Use spit', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A6', 'dislike');
    scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/pegging3.jpg');
    scene.text('You push him forward until he\'s bent over. "Spread your cheeks," you command and he grabs his ass cheeks and spreads them as you spit in the crack of his ass a few times and watch your saliva run down to his asshole. You rub the tip of your dildo against your spit on his ass and work it in, along with his saliva on your dildo. You feel him tense up and eventually hiss a little in pain as you keep pushing against his asshole with your dildo. The pressure builds up until your dildo suddenly pops into his ass and he cries out in pain and tries to pull away. You were ready for that, however, and grab his hips and pull him back as you start fucking his ass.');
    qspCall(st, 'arousal', 'anal_strap_give', 3, 'dom');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Keep fucking his ass', goto: ['gschool_sex', 'femdom_petka_doggy'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterFemdomPetkaDoggy(s: GameState, scene: SceneBuilder): void {
  (s as any).petkasub = ((s as any).petkasub ?? 0) + (1);
  ((s as any).petkaQW = (s as any).petkaQW ?? {})['pegged'] = ((s as any).petkaQW['pegged'] ?? 0) + (1);
  scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/pegging4.jpg');
  scene.text('As you fuck his ass with your strapon, his groans of pain slowly start giving way to moans of pleasure. You notice him reach between his legs and starts jerking off as you fuck his ass.');
  scene.text('You grin. "Tell me you like taking my cock up your ass."');
  scene.text('He moans in pleasure. "Yes, it feels so good."');
  scene.text('You slap his ass and stop moving. "Beg me to fuck your ass."');
  scene.text('He glances back at you. "Please fuck my ass!" he begs. Since he\'s begging, you start really fucking his ass hard and fast. He both groans in pain and moans in pleasure, but it sounds like the moans are louder.');
  qspCall(s, 'arousal', 'anal_strap_give', 2, 'dom');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Fuck your buttslut', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A6', 'like');
    scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/pegging5.jpg');
    scene.text('You pound his ass and he\'s soon moaning in pleasure. "You really love getting fucked in the ass, don\'t you? You\'re such a dirty little slut."');
    scene.text('He moans. "Yes! I\'ll be your slut."');
    scene.text('His words send a thrill of excitement through your body. A boy letting you completely dominate him to the point of letting you fuck his ass with a strapon is arousing you greatly.');
    qspCall(st, 'arousal', 'anal_strap_give', 3, 'dom');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Lay down', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/pegging6.jpg');
    scene.text('You pull out of him and he glances back at you as you say "Lie on your back." He does as you say and lies down on the bench. You push his legs up and apart then step over the bench, straddling it as you slide your strapon back in his ass, making him moan loudly in pleasure as you do. He grabs hold of his dick with one hand and jerks off as you keep fucking him.');
    qspCall(st, 'arousal', 'anal_strap_give', 2, 'dom');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Keep fucking him', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/pegging7.jpg');
    scene.text('After a while, you are balls deep in his ass, taking long hard strokes and he seems to be loving it. Several minutes go by and you\'re starting to feel a little tired from all the thrusting when he starts moaning louder and louder. "I\'m about to cum!"');
    qspCall(st, 'arousal', 'anal_strap_give', 3, 'dom');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Let him cum on you', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/peggingfacial.jpg');
    scene.text('You pull your dildo out of his ass and squat down next to the bench. "Stand up," you tell him and he does as you ask. You take his dick in your hand and start jerking him off. It doesn\'t take long until he starts cumming, his cum splattering all over your chin and breasts. He just keeps cumming, more than you\'ve ever seen anyone cum. Once he finally stops, he\'s coated you pretty well. You let go of him and stand up.');
    qspCall(st, 'arousal', 'foreplay', 1, 'dom');
    qspCall(st, 'cum_call', 'face', 'A6');
    qspCall(st, 'cum_call', 'breasts', 'A6');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Tell him to get lost', goto: ['gschool_sex', 'petka_home'] },
      { label: 'Tell him to do your homework', goto: ['gschool_sex', 'petka_homework'] },
      { label: 'Take his clothes', goto: ['gschool_sex', 'petka_homenaked'] },
    ]);
  } },
      { label: 'Cum on my shoe', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/peggingshoecum.jpg');
    scene.text('You pull your dildo out of his ass and place one of your shoes on the bench. "Cum on my shoe." Petka gives you a puzzled look before placing his dick on your shoe and jerking off. He quickly starts cumming and coats your shoe in his cum. "Now lick your nasty cum off my shoe. Lick it clean."');
    scene.text('He starts quickly licking his cum off your shoe and does a pretty good job of licking it completely clean. "Now stand there and wait for me while I put this away," you say, indicating your strapon. You take the harness off, clean it up and put it away.');
    qspCall(st, 'arousal', 'foreplay', 1, 'dom');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Tell him to get lost', goto: ['gschool_sex', 'petka_home'] },
      { label: 'Tell him to do your homework', goto: ['gschool_sex', 'petka_homework'] },
      { label: 'Take his clothes', goto: ['gschool_sex', 'petka_homenaked'] },
    ]);
  } },
      { label: 'No cumming', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A6', 'dislike');
    scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/pegging8.jpg');
    scene.text('You reach down and pull his hand away from his dick and keep him from grabbing it again. "No cumming for you. You don\'t deserve it." He groans in frustration, which makes you laugh. You fuck him a little bit more and when you\'re sure he\'s about to cum, you stop and pull your dildo out of him. "Now get up. Don\'t you dare jerk off and cum!"');
    scene.text('He nods at you, slightly fearful and gets up as you clean your strapon and put it away.');
    qspCall(st, 'arousal', 'anal_strap_give', 1, 'dom');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Tell him to get lost', goto: ['gschool_sex', 'petka_home'] },
      { label: 'Tell him to do your homework', goto: ['gschool_sex', 'petka_homework'] },
      { label: 'Take his clothes', goto: ['gschool_sex', 'petka_homenaked'] },
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

function enterPetkaMagicDick(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/pegging1.jpg');
  scene.text('You feel the magic coursing from the dildo through the harness and into your body. You give the dildo a test stroke and feel your hand grabbing the dildo as it slides up and down the shaft. You have to admit that it feels pretty wonderful as you notice Petka watching you.');
  scene.text('He waits meekly, already cowed by you. Seeing him so submissive sends a thrill down your spine as you point at the ground in front of you. "Come over here and suck my dick, bitch!"');
  scene.text('He eyes you with fear and then slowly starts to crawl over. "Now!" you shout. "Or this will only get worse for you. Maybe I should call the coach in here?"');
  scene.text('That did the trick. He scrambles over quickly and you feel his lips wrap around the shaft as he starts sucking the dildo. You grab the back of his head with your hand and start forcing him to deepthroat you.');
  qspCall(s, 'arousal', 'magicd_bj', 2, 'dom');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get it nice and wet', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/pegging2.jpg');
    scene.text('You moan at the wonderful sensation as you force your dildo deeper down his throat. "That\'s it, suck my dick. You better get it nice and wet because this is all the lube you\'re going to get."');
    scene.text('He looks up at you with worry in his eyes as he surprisingly sucks your dick skillfully like a pro.');
    scene.text('You pull his head off your dick. "Turn around."');
    scene.text('He hesitates for only a moment before he stands up and turns around.');
    qspCall(st, 'arousal', 'magicd_bj', 2, 'dom');
    qspCall(st, 'stat', '');
    if (((st as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
      scene.actions([
        { label: 'Use lube', handler: (st: GameState) => {
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['lubricant'] = ((st as any).mc_inventory['lubricant'] ?? 0) - (1);
    scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/pegging3.jpg');
    scene.text('You push him forward until he\'s bent over. "You\'re such a good little cock sucker! I\'m going to reward you and use some lube."');
    scene.text('You get some of your lube and lube up the dildo, then squirt some on his ass and lube it up. With his asshole and your dildo lubed up, you step up behind him and line the dildo up until it pushes against his asshole.');
    scene.text('You keep pushing against it as he tenses up before your dildo suddenly pops into his ass and he cries out in pain while you moan deeply as his asshole tightly grips your dick. Grabbing his hips to hold him in place, you start fucking his ass.');
    qspCall(st, 'arousal', 'magicd_anal', 3, 'dom');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Keep fucking his ass', goto: ['gschool_sex', 'petka_magic_dick_anal'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Use spit', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A6', 'dislike');
    scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/pegging3.jpg');
    scene.text('You push him forward until he\'s bent over. "Spread your cheeks," you command and he grabs his ass cheeks and spreads them as you spit in the crack of his ass a few times and watch your saliva run down to his asshole. You rub the tip of your dildo against your spit on his ass and work it in, along with his saliva on your dildo. You feel him tense up and eventually hiss a little in pain as you keep pushing against his asshole with your dildo.');
    scene.text('The pressure builds up until your dildo suddenly pops into his ass and he cries out in pain while you moan deeply as his asshole tightly grips your dick. He tries to pull away, but you\'re ready for it. You grab his hips and pull him back as you start fucking his ass.');
    qspCall(st, 'arousal', 'magicd_anal', 1, 'dom');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Keep fucking his ass', goto: ['gschool_sex', 'petka_magic_dick_anal'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterPetkaMagicDickAnal(s: GameState, scene: SceneBuilder): void {
  ((s as any).petkaQW = (s as any).petkaQW ?? {})['pegged'] = ((s as any).petkaQW['pegged'] ?? 0) + (1);
  (s as any).petkasub = ((s as any).petkasub ?? 0) + (1);
  scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/pegging4.jpg');
  scene.text('As you fuck his ass, his groans of pain slowly start giving way to moans of pleasure. You notice him reach between his legs and start jerking off as you fuck his ass.');
  scene.text('You grin as you feel his asshole squeeze the shaft of your dick. "Tell me you like taking my cock up your ass."');
  scene.text('He moans in pleasure. "Yes, it feels so good."');
  scene.text('You slap his ass and stop moving. "Beg me to fuck your ass."');
  scene.text('He glances back at you. "Yes, please! Please fuck my ass!" he begs.');
  scene.text('In response, you start really fucking his ass hard and fast, moaning loudly in pleasure as you go balls deep into his ass.');
  qspCall(s, 'arousal', 'magicd_anal', 3, 'dom');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Fuck your buttslut', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A6', 'like');
    scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/pegging5.jpg');
    scene.text('You pound his ass, slamming yourself balls deep into him as you moan loudly in pleasure, the sensation of fucking him with your animated dick feeling strange, yet amazing.');
    scene.text('"You really love getting fucked in the ass, don\'t you? You\'re such a dirty little slut!" you laugh.');
    scene.text('He moans in response. "Yes! I\'ll be your slut."');
    scene.text('His words send a thrill of excitement through your body. Being able to feel the tightness of his asshole as you fuck his ass is just divine and you feel the build up in your fake balls. You\'re about to cum!');
    qspCall(st, 'arousal', 'magicd_anal', 3, 'dom');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Pull out', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/pc/magic/penis_envy/guy_butt_cum' + rand...
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/pc/magic/penis_envy/guy_butt_cum` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
    qspCall(st, 'arousal', 'magicd_anal', 3, 'dom');
    (st as any).orgasm_or = 'yes';
    (st as any).orgasm_txt = 'You pull out and feel the sudden release as cum starts shooting out of the dildo. You moan loudly as you shoot several loads of your cum all over his ass, stroking your dick as you milk every last drop out of it. You find yourself panting as the feeling of release makes for such an amazing afterglow.';
    scene.text('Once you finish he looks back at you. "What was that?" he asks as he reaches back to feel your wet cum on his ass.');
    scene.text('"Don\'t worry about it, it\'s just fake cum. A lot of these dildos have them nowadays," you quickly reply.');
    scene.text('As he stands up, he looks at you in confusion but seems to accept it. "Oh…"');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Tell him to get lost', goto: ['gschool_sex', 'petka_home'] },
      { label: 'Tell him to do your homework', goto: ['gschool_sex', 'petka_homework_magic'] },
      { label: 'Take his clothes', goto: ['gschool_sex', 'petka_homenaked_magic'] },
    ]);
  } },
      { label: 'Cum inside him', handler: (st: GameState) => {
    scene.img('images/pc/magic/penis_envy/guy_internal_butt_cum1.jpg');
    qspCall(st, 'arousal', 'magicd_anal', 3, 'dom');
    (st as any).orgasm_or = 'yes';
    (st as any).orgasm_txt = 'You keep fucking his ass before you bury your dick balls deep into his ass. You moan loudly and feel your dick twitching as you fill his ass with your cum. You milk the last drop of cum out of you as you feel some of it leaking out of him.';
    scene.text('Once you pull your dick out and step back, you can see the cum now leaking out of his gaping asshole. You find yourself panting as the feeling of release makes for such an amazing afterglow.');
    scene.text('Once you finish, he looks back at you. "What was that?" he asks as he reaches back to feel your cum leaking out of him.');
    scene.text('"Don\'t worry about it, it\'s just fake cum. A lot of these dildos have them nowadays," you quickly reply.');
    scene.text('As he stands up, he looks at you in confusion, but seems to accept it. "Oh…"');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Tell him to get lost', goto: ['gschool_sex', 'petka_home'] },
      { label: 'Tell him to do your homework', goto: ['gschool_sex', 'petka_homework_magic'] },
      { label: 'Take his clothes', goto: ['gschool_sex', 'petka_homenaked_magic'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterPetkaEatpussy(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/petka7.jpg');
  scene.text('You get off your knees and put one foot on the side of the locker, spreading your legs wide and showing off your pussy. His eyes are glued to your pussy. "Get on your knees and lick my pussy, pervert!" you command.');
  scene.text('He drops to his knees without a word and starts licking your pussy. He isn\'t very skilled, but he seems eager to please. You grab his head and grind your crotch against his face, covering him in your wetness.');
  qspCall(s, 'arousal', 'cuni', 3, 'dom');
  qspCall(s, 'stat', '');
  if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
    scene.actions([
      { label: 'Ride him', goto: ['gschool_sex', 'petka_ride'] },
      { label: 'Tell him to fuck you', goto: ['gschool_sex', 'petka_fuck'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Make him lick your ass', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/petka8.jpg');
    scene.text('You put your foot down and step away from him. Turning away from him, you put one foot on the bench and bend over slightly. You look back at him expectantly as he crawls over and starts licking your pussy from behind. "No, lick my asshole," you command.');
    scene.text('He doesn\'t even hesitate and immediately starts lapping away at your asshole. You feel empowered and very turned on, making a boy do what you want.');
    qspCall(st, 'arousal', 'rimming', 2, 'dom');
    qspCall(st, 'stat', '');
    if (((st as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.actions([
        { label: 'Ride him', goto: ['gschool_sex', 'petka_ride'] },
        { label: 'Tell him to fuck you', goto: ['gschool_sex', 'petka_fuck'] },
      ]);
    }
    scene.actions([
      { label: 'Tell him to fuck your ass', goto: ['gschool_sex', 'petka_anal'] },
    ]);
  } },
    { label: 'Tell him to fuck your ass', goto: ['gschool_sex', 'petka_anal'] },
  ]);
  scene.build();
}

function enterPetkaRide(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A6', 'like');
  qspCall(s, 'boyStat', 'A6');
  scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/petkaride1.jpg');
  scene.text('"Lie down on the bench," you tell him. At your command, he lies down on his back as you walk over and straddle him. You reach down to take hold of his cock as you lower yourself down, guiding it to your entrance. Once you feel the tip of his dick against your slit, you lower yourself and it slides into your wet pussy, causing you both to moan in pleasure.');
  // TODO-QSP: dynamic text: You let go of his dick and slowly lower yourself further, taking all of his <<di...
  scene.text(`You let go of his dick and slowly lower yourself further, taking all of his ${((s as any).dick ?? '')}cm ${((s as any).dick_girth ?? '')} dick inside you as you start riding him cowgirl style, enjoying the control and sensation.`);
  qspCall(s, 'arousal', 'vaginal', 3, 'dom');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Reverse cowgirl', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/petkaride2.jpg');
    scene.text('You lift one leg and spin yourself around, with his dick still inside of you, until you\'re facing the other way. Putting your foot back down, you start riding him in reverse cowgirl style, completely controlling the rhythm and depth. You ride him a bit more before you hear him grunting, telling you he\'s about to cum.');
    scene.text('You quickly get off him and drop down to your knees. You grab him by the dick, pull him toward you and start stroking it.');
    qspCall(st, 'arousal', 'vaginal', 3, 'dom');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Cum', goto: ['gschool_sex', 'petka_titcum'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterPetkaFuck(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A6', 'like');
  qspCall(s, 'boyStat', 'A6');
  scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/petkafuck1.jpg');
  scene.text('You lie back on the bench and spread your legs wide. "Come over here and fuck me, bitch."');
  // TODO-QSP: dynamic text: He eagerly walks over, nearly tripping over his own feet in his haste. He lines ...
  scene.text(`He eagerly walks over, nearly tripping over his own feet in his haste. He lines his dick up and slides it into your wet hole. He eagerly thrusts his ${((s as any).dick ?? '')}cm ${((s as any).dick_girth ?? '')} dick balls deep inside you. You can tell he doesn't have much experience and isn't very good, but he is eager.`);
  qspCall(s, 'arousal', 'vaginal', 3, 'dom');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Not so fast', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/petkafuck2.jpg');
    scene.text('You grab his head and pull him close until he\'s looking in your eyes. "Slow down, this isn\'t a race!"');
    scene.text('He looks a little sheepish and slows down a little, but it doesn\'t take long before he starts grunting anyway.');
    qspCall(st, 'arousal', 'vaginal', 3, 'dom');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Cum', goto: ['gschool_sex', 'petka_titcum'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterPetkaAnal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A6', 'like');
  qspCall(s, 'boyStat', 'A6');
  scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/petkaanal1.jpg');
  scene.text('You walk over to the bench and get down on your hands and knees. Looking over your shoulder at him, you can see him eagerly watching you. "Don\'t just stand there. Come over here and fuck my ass!"');
  // TODO-QSP: dynamic text: He looks momentarily surprised but then quickly rushes over, nearly tripping ove...
  scene.text(`He looks momentarily surprised but then quickly rushes over, nearly tripping over his own feet in his haste. It takes him a few seconds to line his dick up with your anus, but once he's sure he has it lined up, he pushes forward until the head of his dick pops into you and slowly starts pumping his ${((s as any).dick ?? '')}cm ${((s as any).dick_girth ?? '')} dick into your ass.`);
  qspCall(s, 'arousal', 'anal', 2, 'dom', 'lube');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Reverse cowgirl', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/petkaanal2.jpg');
    scene.text('The mixture of pleasure and pain is intoxicating. Pain soon starts to give way to just pleasure as he reams your asshole with his cock. He starts moaning loudly and hammering away faster and faster and you can tell he\'s on the verge of cumming.');
    scene.text('You pull away and he tries to follow, but you pull away fast enough that his dick slides out of your hole and you get down on your knees and start stroking him with your hand.');
    qspCall(st, 'arousal', 'anal', 2, 'dom', 'lube');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Cum', goto: ['gschool_sex', 'petka_titcum'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterPetkaTitcum(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/petka4.jpg');
  scene.text('You start stroking his cock faster and faster and cum is soon squirting out. The hot streams of cum splatter against your breasts, coating them.');
  // TODO-QSP: dynamic text: Once the last spurt hits your chest, he sighs. "Wow! You''re amazing, <<$pcs_nic...
  scene.text(`Once the last spurt hits your chest, he sighs. "Wow! You're amazing, ${((s as any).pcs_nickname ?? '')}!"`);
  scene.text('You get up. "I know. Now what am I going to do with you now?"');
  scene.text('He visibly swallows, obviously having thought you were going to just let him go.');
  qspCall(s, 'arousal', 'hj', 2);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell him to get lost', goto: ['gschool_sex', 'petka_home'] },
    { label: 'Tell him to do your homework', goto: ['gschool_sex', 'petka_homework'] },
    { label: 'Take his clothes', goto: ['gschool_sex', 'petka_homenaked'] },
  ]);
  scene.build();
}

function enterPetkaHomework(s: GameState, scene: SceneBuilder): void {
  ((s as any).petkaQW = (s as any).petkaQW ?? {})['homework'] = 1;
  scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/petka4.jpg');
  scene.text('You smile at him. "You\'re going to do my homework for <i>all</i> my classes from now on. You can drop it off in my locker every morning before school."');
  scene.text('He looks crestfallen. "All of it? Every day?" he says in a whiny voice.');
  scene.text('You give him a hard stare. "It\'s either that or I get the coach right now."');
  scene.text('He pales and nods. "Okay, okay. I\'ll do all of your homework. Can I leave now?"');
  scene.text('You make him squirm before nodding. "Yeah. Now get out of here, you little pervert!"');
  scene.text('He quickly gets dressed and runs out of the locker room. With that taken care of, you go back to getting dressed.');
  qspCall(s, 'arousal', 'voyeur', 3);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish dressing', goto: ['gschool_lessons4', 'post_dress'] },
  ]);
  scene.build();
}

function enterPetkaHome(s: GameState, scene: SceneBuilder): void {
  ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = ((s as any).grupvalue[3] ?? 0) + (1);
  scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/petka3.jpg');
  scene.text('You cover up. "Get out of here before I shout the coach!"');
  scene.text('He nods and quickly starts getting dressed. "Thank you! And I\'m sorry I spied on you."');
  scene.text('You shake your head. "Get the fuck out of here before I change my mind!"');
  scene.text('He turns and takes off towards the door, half-dressed. Just before he makes it out, you call out to him. "Consider this a lesson to not sneak into the girls locker room!"');
  scene.text('He doesn\'t reply and just runs out.');
  qspCall(s, 'arousal', 'voyeur', 3);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish dressing', goto: ['gschool_lessons4', 'post_dress'] },
  ]);
  scene.build();
}

function enterPetkaHomenaked(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A6', 'dislike');
  scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/petka4.jpg');
  scene.text('You walk away from him with his clothes. "Well, what are you waiting for? Fuck off!"');
  scene.text('He turns pale. "You want me to go home naked?"');
  scene.text('You nod. "It\'s either that or I get the coach and tell him what you were doing, you dirty pervert."');
  scene.text('He just nods and takes off naked towards the door. Just before he makes it out, you call out to him. "Consider this a lesson! I better not see you in here again!"');
  scene.text('He doesn\'t reply and just runs out naked. You throw his clothes in the trash and go back to getting dressed.');
  qspCall(s, 'arousal', 'voyeur', 3);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish dressing', goto: ['gschool_lessons4', 'post_dress'] },
  ]);
  scene.build();
}

function enterPetkaHomeworkMagic(s: GameState, scene: SceneBuilder): void {
  ((s as any).petkaQW = (s as any).petkaQW ?? {})['homework'] = 1;
  scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/petka4.jpg');
  scene.text('You smile at him. "You\'re going to do my homework for <i>all</i> my classes from now on. You can drop it off in my locker every morning before school."');
  scene.text('He looks crestfallen. "All of it? Every day? But I just let you fuck me in the ass." he says in a whiny voice.');
  scene.text('You give him a hard stare. "Let me? You loved it! You were moaning like a slut as I fucked your ass! How about I just tell everyone that?"');
  scene.text('He pales and nods. "Okay, okay. I\'ll do all of your homework. Can I leave now?"');
  scene.text('You make him squirm before nodding. "Yeah. Now get out of here, you little pervert!"');
  scene.text('He quickly gets dressed and runs out of the locker room. With that taken care of, you go back to getting dressed.');
  qspCall(s, 'arousal', 'voyeur', 3);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish dressing', goto: ['gschool_lessons4', 'post_dress'] },
  ]);
  scene.build();
}

function enterPetkaHomenakedMagic(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A6', 'dislike');
  scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/locker/petka4.jpg');
  scene.text('You walk away from him with his clothes. "Well, what are you waiting for? Fuck off!"');
  scene.text('He turns pale. "You want me to go home naked? But I let you fuck me in the ass already."');
  scene.text('You give him a hard stare. "Let me? You loved it! You were moaning like a slut as I fucked your ass! How about I just tell everyone that?"');
  scene.text('He pales and nods. "Okay, okay. I\'ll run home like this."');
  scene.text('He turns bright red and takes off naked towards the door. Just before he makes it out, you call out to him. "Consider this a lesson! I better not see you in here again!"');
  scene.text('He doesn\'t reply and just runs out naked. You throw his clothes in the trash and go back to getting dressed.');
  qspCall(s, 'arousal', 'voyeur', 3);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish dressing', goto: ['gschool_lessons4', 'post_dress'] },
  ]);
  scene.build();
}

function enterAlbinaLockerroom(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/albina/sex/school/lockerroom/fingered.jpg');
  scene.text('You part your legs slightly to allow her hand between your thighs. She softly rubs your clit before you feel one of her fingers slide inside you. She starts fingerbanging you while squeezing your breast with her other hand and occasionally nuzzling your neck before she pulls her finger out of you and drags you over to the bench. She sits on the bench and spreads her legs wide. "Eat my pussy," she commands. You can tell by her tone of voice that she isn\'t asking.');
  qspCall(s, 'arousal', 'foreplay', 2, 'sub');
  qspCall(s, 'arousal', 'vaginal_finger', (-2), 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Eat her out', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/school/lockerroom/lockerles1.jpg');
    scene.text('You get down on your hands and knees, place your head between her legs and start licking her already wet pussy. You can taste her juices as you lick her labia and clit. She reaches over and places a hand on the back of your head, pulling your face harder into her crotch as she starts grinding her pussy against you. Her moans of pleasure echo into the empty locker room as your face gets smeared in her wetness. Eventually, she pulls your head away from her and stands up.');
    qspCall(st, 'arousal', 'cuni_give', 3, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Lie down', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/school/lockerroom/lockerles2.jpg');
    scene.text('She pushes you down and spreads your legs before getting on all fours. She starts licking your labia and clit, getting you nice and wet before she starts plunging her tongue as deep as it will go into your pussy.');
    qspCall(st, 'arousal', 'cuni', 3);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'More pleasure', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/school/lockerroom/lockerles3.jpg');
    scene.text('You spread your legs further apart, giving her even better access as you feel your arousal mounting. She pulls her tongue out, only to plunge it back inside your pussy as far as it will go, tongue fucking you for all she\'s worth before she pulls away and stands up.');
    qspCall(st, 'arousal', 'cuni', 3);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Return the favor', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/school/lockerroom/lockerles4.jpg');
    scene.text('She straddles the bench and bends all the way over, presenting her pussy to you. You sit on the bench behind her, lean forward and start licking her pussy again, which is now so wet that her juices are flowing down her inner thighs. "Eat my ass!" she moans out as she reaches back and tries to pull your head up enough to lick her asshole.');
    qspCall(st, 'arousal', 'cuni_give', 3);
    qspCall(st, 'stat', '');
    qspCall(st, 'willpower', 'sex', 'resist', 'hard');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Keep eating her pussy', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Keep eating her pussy', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A23', 'loathe');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/school/lockerroom/lockerles4.jpg');
    scene.text('You pull her hand loose from your hair and go back to licking her pussy. She doesn\'t say anything, but you can tell that she isn\'t happy about your refusal. A few minutes later, she pulls away and turns to you. "Get on your back. I want to sit on your face."');
    qspCall(st, 'arousal', 'cuni_give', 3);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Lie back', goto: ['gschool_sex', 'albina_lockerroom69'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Eat her ass', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A23', 'like');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/school/lockerroom/lockerles5.jpg');
    scene.text('You spread her ass cheeks and start licking her twitching asshole, getting it nice and wet as you listen to her moaning loudly. She seems to really be enjoying this and her hand forces your face between her cheeks. "Oh fuck! Stick your tongue in my ass!" she blurts out between her moans of pleasure.');
    scene.text('You stiffen your tongue and push it against her asshole. It soon slides in and you start tongue fucking her back door as she rocks back against your face, trying to take your tongue deeper. A few minutes later, she pulls away and turns around, making out with you before she smiles. "Get on your back. I want to sit on your face."');
    qspCall(st, 'arousal', 'rimming', 3);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Lie back', goto: ['gschool_sex', 'albina_lockerroom69'] },
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

function enterAlbinaLockerroom69(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/albina/sex/school/lockerroom/lockerles6.jpg');
  scene.text('You lie on your back and she straddles your face and lowers herself down until her pussy is grinding against your face. You start licking and sucking her engorged clit and she leans forward and returns the favor by licking your pussy. Several minutes of heaven pass as you both eat each other out when her body is rocked by an orgasm that completely coats your mouth and chin in her juices.');
  scene.text('She almost collapses on top of you, barely holding herself up before finally climbing off you on shaking legs. As you stand up, she embraces you in a passionate kiss as she reaches round and gives you a firm smack on the ass. She makes out with you for a few seconds before breaking the kiss and getting dressed.');
  qspCall(s, 'arousal', 'cuni_give', 3);
  qspCall(s, 'arousal', 'cuni', (-3));
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get dressed', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/school/lockerroom/getdressed.jpg');
    scene.text('"It\'s nice being with another girl," she says as you both get dressed.');
    scene.text('You nod in agreement and she giggles. "Don\'t get me wrong, it\'s great being fucked hard by a nice big cock, but sometimes it\'s nice feeling another girl\'s touch. It\'s so much softer and gentler than a guy\'s."');
    scene.text('"Yeah…" you softly reply.');
    // TODO-QSP: dynamic text: Once you''re both dressed, she heads out of the locker room. "See you later, <<$...
    scene.text(`Once you're both dressed, she heads out of the locker room. "See you later, ${((st as any).pcs_nickname ?? '')}."`);
    scene.actions([
      { label: 'Finish dressing', goto: ['gschool_lessons4', 'post_dress'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterVictorLockerroom(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/teacher/victor/sex/locker2.jpg');
  scene.text('You just can\'t resist. You reach down and rub your hand against the bulge in his shorts. He has a decent-sized dick and it only grows larger as you rub it. It soon becomes rock-hard to your touch and you partially wrap your fingers around it as much as you can, stroking it slightly. Your thoughts are then interrupted by him. "Go on. Pull it out and feel it."');
  qspCall(s, 'arousal', 'foreplay', 2);
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'sex', 'resist', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse and tell him to leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse and tell him to leave', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/teacher/victor/sex/locker1.jpg');
    scene.text('You pull your hand away at his words. You might have been curious or even interested in playing with it, but you don\'t want to go that far. "No, I shouldn\'t have touched it! Please, you need to leave now."');
    scene.text('He pauses for a second before throwing his hands up in frustration. "Fine!" he exclaims as he turns and leaves.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Finish dressing', goto: ['gschool_lessons4', 'post_dress'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Pull down his shorts', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/victor/sex/locker3.jpg');
    scene.text('You feel yourself getting aroused at the idea of playing with his dick some more. You give in to your temptation and drop down to your knees, pull his shorts down and watch his hard cock spring free directly in front of your face. It\'s a little longer than most, but is also a bit thicker. You reach up and take it in your hand. You can\'t wrap your fingers all the way around it, but start stroking it a little as he lets out a little moan. "Yeah that\'s it. Now open your mouth and suck it at the same time."');
    qspCall(st, 'arousal', 'hj', 2);
    qspCall(st, 'stat', '');
    qspCall(st, 'willpower', 'sex', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse and tell him to leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse and tell him to leave', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/teacher/victor/sex/locker1.jpg');
    scene.text('You pull your hand away at his words. You might have been curious or even interested in playing with it, but you don\'t want to go that far. "No, I shouldn\'t have touched it, let alone pulled your shorts down. Please, you need to leave now," you tell him as you stand up and take a step away from him.');
    scene.text('He pauses for a second before pulling his shorts up. "Fine!" he exclaims as he turns and leaves.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Finish dressing', goto: ['gschool_lessons4', 'post_dress'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Suck his dick', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/victor/sex/locker4.jpg');
    scene.text('As you keep stroking his dick, you lean forward and open your mouth, letting the head pass your lips. You wrap your lips around his shaft and start sucking his dick, bobbing your head back and forth in rhythm with the stroking of your hand. You do this for a few minutes until you feel his hand on the back of your head and he starts forcing you to take more and more of his dick into your mouth. You eventually have to move your hand away as he forces you to deepthroat him. After a minute or so of this, he says "Take your clothes off."');
    qspCall(st, 'arousal', 'bj', 3, 'deepthroat');
    qspCall(st, 'stat', '');
    qspCall(st, 'willpower', 'sex', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'I just want to suck you off', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'I just want to suck you off', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/teacher/victor/sex/locker4.jpg');
    scene.text('You pull your head back until his dick pops out of your mouth so you can talk. "I just want to suck you off."');
    scene.text('He looks down at you. "Is that so?"');
    scene.text('You\'re about to reply, but as soon as your mouth starts to open, he shoves his dick back in your mouth as one of his hands wraps around the back of your head so he can force himself balls deep down your throat.');
    scene.text('He lets you alternate between using your hand to stroke him at the same time and deepthroating you. Several more minutes of this pass by before he says "I\'m about to cum. Take off your shirt."');
    qspCall(st, 'arousal', 'bj', 3, 'deepthroat');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Cum', goto: ['gschool_sex', 'victor_lockerroom_cum'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Strip', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/victor/sex/locker8.jpg');
    scene.text('You start to strip down, removing most of your clothes before he pushes you up against the lockers and lifts one of your legs up. You feel his dick slide into your wet pussy and he starts fucking you before he abruptly stops and drags you over to the bench, where he pushes you forward.');
    qspCall(st, 'arousal', 'vaginal', 3);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Bend over', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A131');
    scene.img('images/characters/pavlovsk/school/teacher/victor/sex/locker5.jpg');
    // TODO-QSP: dynamic text: With him manhandling you, you quickly find yourself bent over the bench with you...
    scene.text(`With him manhandling you, you quickly find yourself bent over the bench with your ass presented to him. He quickly strips his clothes off before he straddles the bench and moves up behind you. You feel the tip of his dick rub against your slit before he eases his ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} cock about halfway inside you and starts fucking you. He's slow and gentle at first, but as you start moaning more, he starts going balls deep and fucking you harder.`);
    qspCall(st, 'arousal', 'vaginal', 3);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get hammered', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/victor/sex/locker6.jpg');
    scene.text('He grabs your hip with his hand as he starts pounding your wet pussy hard and fast, the sounds of moans and slapping flesh echoing into the locker room. On one of his thrusts, he pulls all the way out of you, but when he goes to put it back in, he aims high and you feel his dick slide into your ass. You don\'t know if it was an accident or if he did it on purpose.');
    qspCall(st, 'arousal', 'vaginal', 3);
    (st as any).anal_slip = ((st as any).anal_slip ?? 0) + (4);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wrong hole!', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/victor/sex/locker6.jpg');
    scene.text('You cry out and try to pull away, but his hand holds you firm. "Wrong hole!" you cry out.');
    scene.text('He doesn\'t slow down as he fucks your ass. You think he\'s ignoring you at first before you look back at him over your shoulder and he gives you a confused look. "What?"');
    scene.text('You grit your teeth as he keeps fucking your ass. "I said wrong hole! You\'re fucking my ass! Please stop!" you whine.');
    scene.text('He looks down, but doesn\'t stop fucking you. "Are you sure?"');
    scene.text('Exacerbated, you shout "Yes, I\'m fucking sure! You\'re in my ass!"');
    scene.text('He looks down again and finally notices. "Oh sorry! Well, I\'m almost done." True to his word, a few seconds later he starts moaning loudly and pulls out of your ass. "Get on your knees, I\'m going to cum." You turn around and drop to your knees.');
    qspCall(st, 'arousal', 'anal', 3, 'lube');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Cum', goto: ['gschool_sex', 'victor_lockerroom_cum'] },
    ]);
  } },
      { label: 'Say nothing', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/victor/sex/locker6.jpg');
    scene.text('You moan and groan loudly, gripping the bench tightly as he pounds your ass hard and fast. Part of you is really enjoying it, but you\'re still unsure if he did it on purpose until he moans out "Fuck, you have a tight little ass!" He keeps pounding away at your ass for a few more minutes before he starts moaning loudly and pulls out of you. "Get on your knees, I\'m going to cum." You turn around and drop to your knees.');
    qspCall(st, 'arousal', 'anal', 3, 'lube');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Cum', goto: ['gschool_sex', 'victor_lockerroom_cum'] },
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

function enterVictorLockerroomCum(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'grades', 'grade_award', 'school', 'pe', 90);
  scene.img('images/characters/pavlovsk/school/teacher/victor/sex/locker9.jpg');
  scene.text('He grabs you by the hair with one hand while he jerks off with the other. It doesn\'t take long before he starts moaning loudly and hot sperm comes streaming out. Most of it lands on your face, but a little ends up in your open mouth. He keeps stroking his dick until he stops cumming and you lick the tip of his dick, licking up the last couple of drops of cum.');
  scene.text('He pulls up his shorts, tucking his dick away as he looks around, apparently making sure no one is coming to find out what the noise was. He then looks down at you and smiles. "Congratulations, you just passed P.E. Now you better get cleaned up." Satisfied, he turns and walks out of the locker room, leaving you on your knees with his cum all over your face.');
  qspCall(s, 'arousal', 'foreplay', 1);
  qspCall(s, 'cum_call', 'face', 'A131');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish dressing', goto: ['gschool_lessons4', 'post_dress'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'suck':
      enterSuck(s, scene);
      break;
    case 'afterschool':
      enterAfterschool(s, scene);
      break;
    case 'Anush_private':
      enterAnushPrivate(s, scene);
      break;
    case 'Anush_private2':
      enterAnushPrivate2(s, scene);
      break;
    case 'Anush_kiss':
      enterAnushKiss(s, scene);
      break;
    case 'rand_bj':
      enterRandBj(s, scene);
      break;
    case 'rand_sex':
      enterRandSex(s, scene);
      break;
    case 'lunch_bj':
      enterLunchBj(s, scene);
      break;
    case 'lunch_sex':
      enterLunchSex(s, scene);
      break;
    case 'lunch_sex2':
      enterLunchSex2(s, scene);
      break;
    case 'storagesex':
      enterStoragesex(s, scene);
      break;
    case 'storagesex_anal':
      enterStoragesexAnal(s, scene);
      break;
    case 'lazar_lockerroom':
      enterLazarLockerroom(s, scene);
      break;
    case 'lazar_lockerroom_cum':
      enterLazarLockerroomCum(s, scene);
      break;
    case 'vd_lockerroom':
      enterVdLockerroom(s, scene);
      break;
    case 'petka_lockerroom':
      enterPetkaLockerroom(s, scene);
      break;
    case 'petka_strapon_bj':
      enterPetkaStraponBj(s, scene);
      break;
    case 'femdom_petka_doggy':
      enterFemdomPetkaDoggy(s, scene);
      break;
    case 'petka_magic_dick':
      enterPetkaMagicDick(s, scene);
      break;
    case 'petka_magic_dick_anal':
      enterPetkaMagicDickAnal(s, scene);
      break;
    case 'petka_eatpussy':
      enterPetkaEatpussy(s, scene);
      break;
    case 'petka_ride':
      enterPetkaRide(s, scene);
      break;
    case 'petka_fuck':
      enterPetkaFuck(s, scene);
      break;
    case 'petka_anal':
      enterPetkaAnal(s, scene);
      break;
    case 'petka_titcum':
      enterPetkaTitcum(s, scene);
      break;
    case 'petka_homework':
      enterPetkaHomework(s, scene);
      break;
    case 'petka_home':
      enterPetkaHome(s, scene);
      break;
    case 'petka_homenaked':
      enterPetkaHomenaked(s, scene);
      break;
    case 'petka_homework_magic':
      enterPetkaHomeworkMagic(s, scene);
      break;
    case 'petka_homenaked_magic':
      enterPetkaHomenakedMagic(s, scene);
      break;
    case 'albina_lockerroom':
      enterAlbinaLockerroom(s, scene);
      break;
    case 'albina_lockerroom69':
      enterAlbinaLockerroom69(s, scene);
      break;
    case 'victor_lockerroom':
      enterVictorLockerroom(s, scene);
      break;
    case 'victor_lockerroom_cum':
      enterVictorLockerroomCum(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gschool_sex: LocationDef = {
  name: 'gschool_sex',
  title: 'As school ends, you go and find Katja and the two of you hea',
  region: 'other',
  locationType: 'event',
  enter: enter,
};
