import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).aftgopbjrand = Math.floor(Math.random() * 3) + 0;
  if (((s as any).aftgopbjrand ?? 0) !== 0) {
    (s as any).afterschoolday = ((s as any).daystart ?? 0);
    scene.actions([{ label: 'Continue', goto: ['gschool_grounds', 'main'] }]);
  } else {
    if (((s as any).grupTipe ?? 0) !== 4) {
      // TODO-QSP: dynamic text: Vitek and some of the other gopniks are waiting for you outside the school. "Hol...
      scene.text(`Vitek and some of the other gopniks are waiting for you outside the school. "Hold up ${((s as any).pcs_nickname ?? 0)}. Everyone says you're a great cocksucker and I want you to prove it. Come with us and have some fun."`);
    } else {
      // TODO-QSP: dynamic text: Vitek and some of the other gopniks are waiting for you outside the school. "Hol...
      scene.text(`Vitek and some of the other gopniks are waiting for you outside the school. "Hold up ${((s as any).pcs_nickname ?? 0)}. Let's have a little fun before we go home."`);
    }
    if (((s as any).grupTipe ?? 0) === 4) {
      scene.actions([
        { label: 'Not today boys', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/afterschool/teasefo.mp4');
    scene.text('You shake your head. "Sorry boys, but I\'ve got stuff I have to do. You\'ll just have to suck each other off today," you tell them as you walk away, but you do lift up your skirt to give them a nice view of your ass and put some extra hip sway into your walk. You hear Dan call you "a fucking tease" and turn around and stop, like you might be changing your mind and suck on two of your fingers. The boys watch intently and you can tell they are getting excited at the idea you\'re going to change your mind, but as you pull your fingers out of your mouth you flip them off with a smile, then giggle and walk away.');
    scene.text('Seeing you do that, you\'re sure they\'re returning the favor as they call you a variety of names, but you don\'t care. It was too funny to see the expression on their faces.');
  } },
      ]);
    }
    qspCall(s, 'willpower', 'bj', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Make an excuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Make an excuse', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'bj', 'resist', 'hard');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    // TODO-QSP: :ReCheck
    (s as any).lpp = Math.floor(Math.random() * 7) + 0;
    if (((s as any).lastlpp ?? 0) === ((s as any).lpp ?? 0)) {
      // TODO-QSP: jump 'ReCheck'
    }
    if ((!((s as any).lpp ?? 0))) {
      scene.text('"Sorry, but I\'ve got a dentist appointment, my tooth hurts a lot!" you say as you rub your jaw, feigning pain.');
    } else {
      scene.text('"I can\'t, I have some sores in my mouth."');
      if (((s as any).lpp ?? 0) === 2) {
        scene.text('You hold your stomach. "I can\'t. I\'m feeling really sick, like I might throw up at any moment."');
      } else {
        scene.text('"I think I might have tonsillitis… Throat hurts," you say, feigning a hoarse voice.');
        if (((s as any).lpp ?? 0) === 4) {
          qspCall(s, 'gschool_events', 'rand_girl_arg');
          // TODO-QSP: dynamic text: "I told <<$rand_girl>> that I would go home with her and study."
          scene.text(`"I told ${((s as any).rand_girl ?? 0)} that I would go home with her and study."`);
        } else {
          qspCall(s, 'gschool_events', 'rand_boy_arg', 1, 1, 1, 0, 0, 0);
          // TODO-QSP: dynamic text: "I told <<$rand_boy>> that I would go home with him and study."
          scene.text(`"I told ${((s as any).rand_boy ?? 0)} that I would go home with him and study."`);
          if (((s as any).lpp ?? 0) === 6) {
            scene.text('"I can\'t. I have to go to work."');
          }
          scene.text('They mutter unhappily, but let it go. "Fine, get the fuck out of here then."');
          (s as any).lastlpp = ((s as any).lpp ?? 0);
          (s as any).afterschoolday = ((s as any).daystart ?? 0);
          scene.actions([
            { label: 'Leave', goto: ['gschool_grounds', 'main'] },
          ]);
        }
      }
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Return to school', handler: (st: GameState) => {
    (s as any).afterschoolday = ((s as any).daystart ?? 0);
    (s as any).SchoolGossip = ((s as any).SchoolGossip ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/bathroom/boysbathroom.jpg');
    scene.text('You return to school with the guys, a hand groping your ass as you walk through the hallway. You pretend to ignore it and just keep walking, but your heart is racing as they pull you into the men\'s room. "Get on your knees slut!" Vitek snarls as he pulls his dick out of his pants.');
    scene.actions([
      { label: 'Suck his dick', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).stat['bj'] = ((s as any).stat['bj'] ?? 0) + (3);
    qspCall(s, 'npcStat', 'A11');
    qspCall(s, 'npcStat', 'A10', 'a');
    qspCall(s, 'npcStat', 'A9', 'b');
    (s as any).npc_had_sex['A9'] = 1;
    (s as any).npc_had_sex['A10'] = 1;
    (s as any).npc_had_sex['A11'] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/group/toiletbjtreesome.jpg');
    // TODO-QSP: dynamic text: You obediently squat and start stroking Vitek's dick with your hand, getting it ...
    scene.text(`You obediently squat and start stroking Vitek's dick with your hand, getting it rock-hard. You rub his hard cock against your ${((s as any).pc_desc ?? 0)?.['lips']} lips, then open your mouth and start sucking his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock. After making sure no one is coming, Dan and Vasily also approach you and take out their dicks, pointing them at you expectantly. Now sucking the dicks of all three boys in turn, you do your best to please the ones you're not sucking by jerking them off.`);
    qspCall(s, 'arousal', 'bj', 4, ((s as any).npcID ?? 0), 'group', 'sub');
    qspCall(s, 'arousal', 'bj', 3, ((s as any).npcID1 ?? 0), 'group', 'sub');
    qspCall(s, 'arousal', 'bj', 3, ((s as any).npcID2 ?? 0), 'group', 'sub');
    scene.actions([
      { label: 'Let them cum on your face', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).stat['bj'] = ((s as any).stat['bj'] ?? 0) + (3);
    scene.img('images/shared/sex/group/toiletbjcum.jpg');
    if (((s as any).grupTipe ?? 0) !== 4) {
      scene.text('You close your eyes to fully focus on what you\'re doing, and a few minutes later you feel the dick that\'s currently in your mouth spasm. Several ropes of cum hit your tongue; it tastes rather bitter. Carefully opening one eye, you see that it\'s Vitek\'s. The other two tell you to keep your eyes closed, and Dan shoots his load across your face before you can even comply. Luckily, he didn\'t hit the eye that was open. You obediently close them, and a few seconds later you feel Vasily\'s cum splattering against your eye lids and cheek.');
      scene.text('You hear the click of a camera and open your eyes after wiping the cum off your face. They pull up their pants and leave, laughing at how much of a slut you are and how they had never thought you would actually come with them.');
    } else {
      scene.text('You close your eyes to fully focus on what you\'re doing, and a few minutes later you feel the dick that\'s currently in your mouth spasm. Several ropes of cum hit your tongue; it tastes rather bitter. Carefully opening one eye, you see that it\'s Vitek\'s. As soon as you open your eye, Dan tells you to "keep your eyes closed" as he shoots his load on your face before you can even comply. Luckily, he didn\'t hit the eye that was open. You obediently close them, and a few seconds later you feel Vasily\'s cum splattering against your eye lids and cheek. You open your eyes after wiping the cum off your face.');
      // TODO-QSP: dynamic text: They wait for you to get cleaned up and walk you out as they laugh and talk. "Da...
      scene.text(`They wait for you to get cleaned up and walk you out as they laugh and talk. "Damn ${((s as any).pcs_nickname ?? 0)}, you're the best slut around! Maybe next time we can fuck you as well," Dan says as the four of you walk out of the school.`);
      // TODO-QSP: dynamic text: Once outside the boys peel off, but Vasily lags behind and turns back to you. "H...
      scene.text(`Once outside the boys peel off, but Vasily lags behind and turns back to you. "Hey ${((s as any).pcs_nickname ?? 0)}, come by my place later and we can study," he says with a laugh, then turns and catches back up with the others.`);
    }
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'cum_call', 'face', ((s as any).npcID1 ?? 0), 1);
    qspCall(s, 'cum_call', 'clothes', ((s as any).npcID2 ?? 0), 1);
    qspCall(s, 'arousal', 'end');
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
  scene.build();
}

export const gschool_sex: LocationDef = {
  name: 'gschool_sex',
  region: 'other',
  locationType: 'event',
  enter: enter,
};
