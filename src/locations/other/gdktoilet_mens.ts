import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).temp = Math.floor(Math.random() * 100) + 1;
  if (((s as any).temp ?? 0) >= 80) {
    scene.text('<center><b>Community Center - Men\'s Restroom</b></center>');
    scene.img('images/locations/pavlovsk/community/bathroom/mens/bathroom_mens.jpg');
    scene.text('It\'s unusually empty, but you see someone near the urinals.');
    scene.actions([
      { label: 'Look closer', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Community Center - Men\'s Restroom</b></center>');
    scene.img('images/locations/pavlovsk/community/bathroom/mens/sex/ghmanstand.jpg');
    scene.text('You decide to take a closer look, to your surprise, there is a naked man standing with his face to the wall. His body is pressed up close against the wall.');
    if (qspFunc(s, 'pcs_has_attr', 'sex_virgin') === 0) {
      if (((s as any).pcs_horny ?? 0) < 40) {
        qspCall(s, 'stat', '');
        scene.text('You look at his naked body and you wonder who\'s on the other side. You feel a little turned on by the man\'s naked body. You decide to leave.');
        qspCall(s, 'arousal', 'voyeur', 10);
        qspCall(s, 'arousal', 'end');
        scene.actions([
          { label: 'Leave', goto: ['gdktoilet', 'start'] },
        ]);
      } else {
        qspCall(s, 'willpower', 'mast', 'self');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Masturbate [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Masturbate', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'mast', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).pcs_mood = ((s as any).pcs_mood ?? 0) + (15);
    qspCall(s, 'arousal', 'clit_finger', 25);
    qspCall(s, 'stat', '');
    if (((s as any).pcs_hotcat ?? 0) < 4) {
      scene.text('<center><b>Community Center - Men\'s Restroom</b></center>');
      scene.img('images/locations/pavlovsk/community/bathroom/mens/sex/masturbate.jpg');
      scene.text('You decide to masturbate in front of him. You rub your clit while exposing your bare ass. He smile and nods appreciating your body. You start to feel warm as you keep rubbing your clit. Your body gets tense as you approach orgasm.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['gdktoilet', 'start'] },
      ]);
    } else {
      scene.text('<center><b>Community Center - Men\'s Restroom</b></center>');
      scene.img('images/locations/pavlovsk/community/bathroom/mens/sex/masturbate.jpg');
      scene.text('You decide to masturbate in front of him. You rub your clit while exposing your bare ass. He smile and nods appreciating your body. You start to feel warm as you keep rubbing your clit. Your body gets tense as you approach orgasm.');
      scene.text('The man backs away from the wall and says, "Why don\'t you come over here and we can have some fun."');
      qspCall(s, 'willpower', 'sex', 'resist');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Leave', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'sex', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'arousal', 'end');
    scene.img('images/pc/reactions/fuckoff2.jpg');
    scene.text('Not wanting to fuck this guy, you quickly get dressed before telling him to fuck off!');
  }, goto: ['gdktoilet', 'start'] },
        ]);
      }
      scene.text('<center><b>Community Center - Men\'s Restroom</b></center>');
      scene.img('images/locations/pavlovsk/community/bathroom/mens/sex/1kissing.jpg');
      scene.text('Unable to resist the man pushes you against the wall kissing you.');
      qspCall(s, 'arousal', 'kiss', 5);
      qspCall(s, 'stat', '');
      qspCall(s, 'willpower', 'sex', 'resist');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Leave', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'sex', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'arousal', 'end');
    scene.img('images/pc/reactions/fuckoff2.jpg');
    scene.text('Not wanting to fuck this guy, you push him off you and quickly get dressed before telling him to fuck off!');
  }, goto: ['gdktoilet', 'start'] },
        ]);
      }
      scene.actions([
        { label: 'Give In', goto: ['gdktoilet_mens', 'mensglory'] },
        { label: 'Give In', goto: ['gdktoilet_mens', 'mensglory'] },
      ]);
    }
  } },
          ]);
        }
        qspCall(s, 'willpower', 'sex', 'force');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Seduce him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Seduce him', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'sex', 'force');
    qspCall(s, 'willpower', 'pay', 'force');
    qspCall(s, 'stat', '');
    if (((s as any).pcs_cupsize ?? 0) >= 20) {
      qspCall(s, 'stat', '');
      scene.text('<center><b>Community Center - Men\'s Restroom</b></center>');
      scene.img('images/locations/pavlovsk/community/bathroom/mens/sex/grabbig.jpg');
      // TODO-QSP: dynamic text: You look over his naked body and you wonder who's on the other side. You bite yo...
      scene.text(`You look over his naked body and you wonder who's on the other side. You bite your finger in appreciation of his naked body while grabbing your ${((s as any).titsize ?? 0)}. You walk over to him trying to seduce him. He succumbs to your charms. No longer able to resist he takes all your clothes off and pushes you against the wall. Kissing you passionately.`);
      qspCall(s, 'arousal', 'foreplay', 1);
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Kiss him', goto: ['gdktoilet_mens', 'mensglory'] },
      ]);
    } else {
      qspCall(s, 'stat', '');
      scene.text('<center><b>Community Center - Men\'s Restroom</b></center>');
      scene.img('images/locations/pavlovsk/community/bathroom/mens/sex/seducesmall.jpg');
      // TODO-QSP: dynamic text: You look over his naked body and you wonder who's on the other side. Your small ...
      scene.text(`You look over his naked body and you wonder who's on the other side. Your small ${((s as any).titsize ?? 0)} are not enough to coax the man so you take off your clothes revealing your underwear and breasts. You walk over to him trying to seduce him. He succumbs to your charms. No longer able to resist he takes the rest of your clothes off and pushes you against the wall. Kissing you passionately.`);
      qspCall(s, 'arousal', 'foreplay', 5);
      qspCall(s, 'stat', '');
      qspCall(s, 'stat', '');
      scene.text('<center><b>Community Center - Men\'s Restroom</b></center>');
      scene.img('images/locations/pavlovsk/community/bathroom/mens/sex/nakedsmall.jpg');
      // TODO-QSP: dynamic text: You look over his naked body and you wonder who's on the other side. Your small ...
      scene.text(`You look over his naked body and you wonder who's on the other side. Your small ${((s as any).titsize ?? 0)} are not enough to coax the man so you take off your clothes revealing your breasts and pussy. You walk over to him trying to seduce him. He succumbs to your charms. No longer able to resist he takes the rest of your clothes off and pushes you against the wall. Kissing you passionately.`);
      qspCall(s, 'arousal', 'foreplay', 1);
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Kiss him', goto: ['gdktoilet_mens', 'mensglory'] },
        { label: 'Kiss him', goto: ['gdktoilet_mens', 'mensglory'] },
      ]);
    }
  } },
          ]);
        }
        scene.actions([
          { label: 'Leave', goto: ['gdktoilet', 'start'] },
        ]);
      }
    } else {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
      qspCall(s, 'stat', '');
      scene.text('You look at his naked body and you\'re not sure what\'s going on. You decide to leave before things get too awkward.');
      scene.actions([
        { label: 'Leave', goto: ['gdktoilet', 'start'] },
      ]);
    }
  } },
    ]);
  } else {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Community Center - Men\'s Restroom</b></center>');
    scene.img('images/locations/pavlovsk/community/bathroom/mens/sex/gangbangbath.jpg');
    scene.text('You look inside the men\'s restroom and see Sonia getting pounded by a bunch of guys. You can tell she is enjoying every second of it as she gets fucked in both holes.');
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      qspCall(s, 'stat', '');
      scene.text('You feel excited as you watch Sonia. You decide to leave before you are noticed.');
      qspCall(s, 'arousal', 'voyeur_sex', 5);
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Leave', goto: ['gdktoilet', 'start'] },
      ]);
    } else {
      scene.text('You decide to leave before you are noticed.');
      scene.actions([
        { label: 'Leave', goto: ['gdktoilet', 'start'] },
      ]);
    }
    if (((s as any).temp ?? 0) >= 40  &&  ((s as any).temp ?? 0) <= 45  &&  ((s as any).hour ?? 0) >= 20  &&  ((s as any).hour ?? 0) <=23) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'stat', '');
      scene.text('<center><b>Community Center - Men\'s Restroom</b></center>');
      scene.img('images/locations/pavlovsk/community/bathroom/mens/bathroom_mens.jpg');
      scene.text('You look inside the men\'s restroom and hear a couple having sex in one of the stalls. You wonder who\'s inside and then decide to leave. While you turn away you hear them stop and the stall slams open moments later hearing giggling from some women. While you\'re outside you see Vanya and Vicky leave the men\'s restroom and walk out into the crowd.');
      qspCall(s, 'arousal', 'voyeur_sex', 10);
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Leave', goto: ['gdktoilet', 'start'] },
      ]);
    } else {
      qspCall(s, 'stat', '');
      scene.text('<center><b>Community Center - Men\'s Restroom</b></center>');
      scene.img('images/locations/pavlovsk/community/bathroom/mens/sex/gangbangbath.jpg');
      scene.text('You look inside the men\'s restroom and see Vitek, Dan, Vasily, and one other you don\'t recognize and someone else under some woman getting pounded.');
      if (((s as any).stat ?? 0)?.['think_virgin'] === 0  &&  ((s as any).pcs_ass ?? 0) > 0) {
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (30);
        scene.text('Your pussy starts to itch. You wish you were that woman in between all those horny men taking it in all your holes. The feeling of excitement is enough to make you want to masturbate in the hallway but you decide to leave before your feelings become too much.');
      }
      qspCall(s, 'arousal', 'voyeur_sex', 5);
      qspCall(s, 'arousal', 'end');
      if (((s as any).temp ?? 0) >= 20  &&  ((s as any).temp ?? 0) <= 29  &&  ((s as any).hour ?? 0) >= 20  &&  ((s as any).hour ?? 0) <=23) {
        (s as any).minut = ((s as any).minut ?? 0) + 5;
        qspCall(s, 'stat', '');
        scene.text('<center><b>Community Center - Men\'s Restroom</b></center>');
        scene.img('images/locations/pavlovsk/community/bathroom/mens/sex/mensrape3.mp4');
        scene.text('You look inside the men\'s restroom and see Dimka grabbing some chick by the hair and forcing her down onto his 16cm penis.');
        if ((!((s as any).DimaRudeQW ?? 0))) {
          qspCall(s, 'willpower', 'bj', 'self');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Interrupt [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Interrupt', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    qspCall(s, 'willpower', 'bj', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    scene.text('<center><b>Community Center - Men\'s Restroom</b></center>');
    scene.img('images/locations/shared/gloryhole/action/smiling.jpg');
    scene.text('You decide to interrupt them and get in on the action. Dimka looks at you smiling and says "What the fuck are you interrupting me, get the fuck out." That\'s when Dimka slaps you across the face. Your face now all red you quickly leave the restroom and leave.');
    scene.actions([
      { label: 'Leave', goto: ['gdktoilet', 'start'] },
    ]);
  } },
            ]);
          }
          scene.actions([
            { label: 'Leave', goto: ['gdktoilet', 'start'] },
          ]);
        } else {
          qspCall(s, 'willpower', 'bj', 'resist', 'hard');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Leave', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'bj', 'resist', 'hard');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['gdktoilet', 'start'] },
            ]);
          }
          scene.actions([
            { label: 'Interrupt', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).dimkaWarn = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Community Center - Men\'s Restroom</b></center>');
    scene.img('images/locations/shared/gloryhole/action/smiling.jpg');
    scene.text('Wanting some attention from your boyfriend you decide to interrupt them. Dimka sees you and says, "Look what we have here, one more of my bitches to join us." He turns to the girl on the ground and says to her "Get on the ground and lay down."');
    scene.actions([
      { label: 'Climb on top', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Community Center - Men\'s Restroom</b></center>');
    scene.img('images/locations/pavlovsk/community/bathroom/mens/sex/threesomeanal.mp4');
    scene.text('You take your clothes off and climb on top of her. She starts to lick your pussy while Dimka fucks your ass without any lubrication. With her licking your pussy and Dimka fucking your ass you start to orgasm.');
    qspCall(s, 'arousal', 'cuni', 10, 'lesbian', 'dom');
    qspCall(s, 'arousal', 'anal', (-10), 'sub', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).pcs_mood = ((s as any).pcs_mood ?? 0) + (15);
    (s as any).npc_had_sex['A1'] = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'cum_call', 'anus', 'A1', 1);
    qspCall(s, 'stat', '');
    scene.text('<center><b>Community Center - Men\'s Restroom</b></center>');
    scene.img('images/locations/pavlovsk/community/bathroom/mens/sex/threesomeanalcum.jpg');
    scene.text('Starting to pound your ass harder, Dimka starts to grunt as he shoots his load in your ass. Pulling out his warm liquid flows out your ass spilling onto the girls face. He takes his dick and puts it in her mouth saying, "Clean the rest of this up slut and don\'t forget to clean my bitch too." The girl starts to lick your ass clean. She is really good at it and you begin to have another orgasm. You finish and decide to get up and get dressed. Dimka pleased with your behaviour tells you, "You should come by my house more often, slave."');
    (s as any).cumspclnt = 15;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['gdktoilet', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
          ]);
        }
      } else {
        (s as any).minut = ((s as any).minut ?? 0) + 1;
        (s as any).temp = Math.floor(Math.random() * 2) + 1;
        scene.actions([{ label: 'Continue', goto: ['gdktoilet_mens', 'mens'] }]);
      }
      scene.actions([
        { label: 'Leave', goto: ['gdktoilet', 'start'] },
      ]);
    }
  }
  scene.build();
}

export const gdktoilet_mens: LocationDef = {
  name: 'gdktoilet_mens',
  title: 'Community Center - Men\'s Restroom',
  region: 'other',
  locationType: 'public_indoors',
  description: ['It\'s unusually empty, but you see someone near the urinals.'],
  enter: enter,
};
