import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterMensEntranceEvents(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'public_indoors';
  (s as any).menu_loc = 'gdktoilet_mens';
  (s as any).menu_arg = 'mens_entrance_events';
  qspCall(s, 'stat', '');
  (s as any).temp = (Math.floor(Math.random() * 100) + 1);
  if (((s as any).temp ?? 0) >= 80) {
    scene.text('<center><b>Community Center - Men\'s Restroom</b></center>');
    scene.img('images/locations/pavlovsk/community/bathroom/mens/bathroom_mens.jpg');
    scene.text('It\'s unusually empty, but you see someone near the urinals.');
    scene.actions([
      { label: 'Look closer', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.text('<center><b>Community Center - Men\'s Restroom</b></center>');
    scene.img('images/locations/pavlovsk/community/bathroom/mens/sex/ghmanstand.jpg');
    scene.text('You decide to take a closer look, to your surprise, there is a naked man standing with his face to the wall. His body is pressed up close against the wall.');
    if (qspFunc(s, 'pcs_has_attr', 'sex_virgin') === 0) {
      if (((st as any).pcs_horny ?? 0) < 40) {
        qspCall(st, 'stat', '');
        scene.text('You look at his naked body and you wonder who\'s on the other side. You feel a little turned on by the man\'s naked body. You decide to leave.');
        qspCall(st, 'arousal', 'voyeur', 10);
        qspCall(st, 'arousal', 'end');
        scene.actions([
          { label: 'Leave', goto: ['gdktoilet', 'start'] },
        ]);
      } else {
        if (((st as any).pcs_horny ?? 0) < 80) {
          qspCall(st, 'willpower', 'mast', 'self');
          if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Masturbate', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Masturbate', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'mast', 'self');
    qspCall(st, 'willpower', 'pay', 'self');
    (st as any).pcs_mood = ((st as any).pcs_mood ?? 0) + (15);
    (st as any).orgasm_or = 'no';
    qspCall(st, 'arousal', 'clit_finger', 25);
    qspCall(st, 'stat', '');
    if (((st as any).pcs_hotcat ?? 0) < 4) {
      scene.text('<center><b>Community Center - Men\'s Restroom</b></center>');
      scene.img('images/locations/pavlovsk/community/bathroom/mens/sex/masturbate.jpg');
      scene.text('You decide to masturbate in front of him. You rub your clit while exposing your bare ass. He smile and nods appreciating your body. You start to feel warm as you keep rubbing your clit. Your body gets tense as you approach orgasm.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['gdktoilet', 'start'] },
      ]);
    } else {
      if (((st as any).pcs_hotcat ?? 0) < 6) {
        scene.text('<center><b>Community Center - Men\'s Restroom</b></center>');
        scene.img('images/locations/pavlovsk/community/bathroom/mens/sex/masturbate.jpg');
        scene.text('You decide to masturbate in front of him. You rub your clit while exposing your bare ass. He smile and nods appreciating your body. You start to feel warm as you keep rubbing your clit. Your body gets tense as you approach orgasm.');
        scene.text('The man backs away from the wall and says, "Why don\'t you come over here and we can have some fun."');
        qspCall(st, 'willpower', 'sex', 'resist');
        if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'sex', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'arousal', 'end');
    scene.img('images/pc/reactions/fuckoff2.jpg');
    scene.text('Not wanting to fuck this guy, you quickly get dressed before telling him to fuck off!');
    qspGoto(st, 'gdktoilet', 'start');
  } },
          ]);
        }
        scene.actions([
          { label: 'Give In', goto: ['gdktoilet_mens', 'mensglory'] },
        ]);
      } else {
        scene.text('<center><b>Community Center - Men\'s Restroom</b></center>');
        scene.img('images/locations/pavlovsk/community/bathroom/mens/sex/1kissing.jpg');
        scene.text('Unable to resist the man pushes you against the wall kissing you.');
        qspCall(st, 'arousal', 'kiss', 5);
        qspCall(st, 'stat', '');
        qspCall(st, 'willpower', 'sex', 'resist');
        if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'sex', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'arousal', 'end');
    scene.img('images/pc/reactions/fuckoff2.jpg');
    scene.text('Not wanting to fuck this guy, you push him off you and quickly get dressed before telling him to fuck off!');
    qspGoto(st, 'gdktoilet', 'start');
  } },
          ]);
        }
        scene.actions([
          { label: 'Give In', goto: ['gdktoilet_mens', 'mensglory'] },
        ]);
      }
    }
  } },
            ]);
          }
        } else {
          qspCall(st, 'willpower', 'sex', 'force');
          if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Seduce him', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Seduce him', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'sex', 'force');
    qspCall(st, 'willpower', 'pay', 'force');
    qspCall(st, 'stat', '');
    if (((st as any).pcs_cupsize ?? 0) >= 20) {
      qspCall(st, 'stat', '');
      scene.text('<center><b>Community Center - Men\'s Restroom</b></center>');
      scene.img('images/locations/pavlovsk/community/bathroom/mens/sex/grabbig.jpg');
      // TODO-QSP: dynamic text: You look over his naked body and you wonder who''s on the other side. You bite y...
      scene.text(`You look over his naked body and you wonder who's on the other side. You bite your finger in appreciation of his naked body while grabbing your ${((st as any).titsize ?? '')}. You walk over to him trying to seduce him. He succumbs to your charms. No longer able to resist he takes all your clothes off and pushes you against the wall. Kissing you passionately.`);
      qspCall(st, 'arousal', 'foreplay', 1);
      qspCall(st, 'stat', '');
      scene.actions([
        { label: 'Kiss him', goto: ['gdktoilet_mens', 'mensglory'] },
      ]);
    } else {
      if (((st as any).pantyworntype ?? 0) !== 'none') {
        qspCall(st, 'stat', '');
        scene.text('<center><b>Community Center - Men\'s Restroom</b></center>');
        scene.img('images/locations/pavlovsk/community/bathroom/mens/sex/seducesmall.jpg');
        // TODO-QSP: dynamic text: You look over his naked body and you wonder who''s on the other side. Your small...
        scene.text(`You look over his naked body and you wonder who's on the other side. Your small ${((st as any).titsize ?? '')} are not enough to coax the man so you take off your clothes revealing your underwear and breasts. You walk over to him trying to seduce him. He succumbs to your charms. No longer able to resist he takes the rest of your clothes off and pushes you against the wall. Kissing you passionately.`);
        qspCall(st, 'arousal', 'foreplay', 5);
        qspCall(st, 'stat', '');
        scene.actions([
          { label: 'Kiss him', goto: ['gdktoilet_mens', 'mensglory'] },
        ]);
      } else {
        qspCall(st, 'stat', '');
        scene.text('<center><b>Community Center - Men\'s Restroom</b></center>');
        scene.img('images/locations/pavlovsk/community/bathroom/mens/sex/nakedsmall.jpg');
        // TODO-QSP: dynamic text: You look over his naked body and you wonder who''s on the other side. Your small...
        scene.text(`You look over his naked body and you wonder who's on the other side. Your small ${((st as any).titsize ?? '')} are not enough to coax the man so you take off your clothes revealing your breasts and pussy. You walk over to him trying to seduce him. He succumbs to your charms. No longer able to resist he takes the rest of your clothes off and pushes you against the wall. Kissing you passionately.`);
        qspCall(st, 'arousal', 'foreplay', 1);
        qspCall(st, 'stat', '');
        scene.actions([
          { label: 'Kiss him', goto: ['gdktoilet_mens', 'mensglory'] },
        ]);
      }
    }
  } },
            ]);
          }
          scene.actions([
            { label: 'Leave', goto: ['gdktoilet', 'start'] },
          ]);
        }
      }
    } else {
      (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
      qspCall(st, 'stat', '');
      scene.text('You look at his naked body and you\'re not sure what\'s going on. You decide to leave before things get too awkward.');
      scene.actions([
        { label: 'Leave', goto: ['gdktoilet', 'start'] },
      ]);
    }
  } },
    ]);
  } else {
    if (((s as any).temp ?? 0) >= 50  &&  ((s as any).temp ?? 0) <=79  &&  ((s as any).soniaQW ?? 0)?.['slut'] >= 1  &&  ((s as any).hour ?? 0) >= 20  &&  ((s as any).hour ?? 0) <=23) {
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
    } else {
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
        if (((s as any).temp ?? 0) >= 30  &&  ((s as any).temp ?? 0) <= 39  &&  ((s as any).hour ?? 0) >= 20  &&  ((s as any).hour ?? 0) <=23) {
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
          scene.actions([
            { label: 'Leave', goto: ['gdktoilet', 'start'] },
          ]);
        } else {
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
                  { label: 'Interrupt', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                ]);
              } else {
                scene.actions([
                  { label: 'Interrupt', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
    qspCall(st, 'willpower', 'bj', 'self');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
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
                  { label: 'Leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                ]);
              } else {
                scene.actions([
                  { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'bj', 'resist', 'hard');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspGoto(st, 'gdktoilet', 'start');
  } },
                ]);
              }
              scene.actions([
                { label: 'Interrupt', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).dimkaWarn = 0;
    qspCall(st, 'stat', '');
    scene.text('<center><b>Community Center - Men\'s Restroom</b></center>');
    scene.img('images/locations/shared/gloryhole/action/smiling.jpg');
    scene.text('Wanting some attention from your boyfriend you decide to interrupt them. Dimka sees you and says, "Look what we have here, one more of my bitches to join us." He turns to the girl on the ground and says to her "Get on the ground and lay down."');
    scene.actions([
      { label: 'Climb on top', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('<center><b>Community Center - Men\'s Restroom</b></center>');
    scene.img('images/locations/pavlovsk/community/bathroom/mens/sex/threesomeanal.mp4');
    scene.text('You take your clothes off and climb on top of her. She starts to lick your pussy while Dimka fucks your ass without any lubrication. With her licking your pussy and Dimka fucking your ass you start to orgasm.');
    qspCall(st, 'arousal', 'cuni', 10, 'lesbian', 'dom');
    qspCall(st, 'arousal', 'anal', (-10), 'sub', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).pcs_mood = ((st as any).pcs_mood ?? 0) + (15);
    ((st as any).npc_had_sex = (st as any).npc_had_sex ?? {})['A1'] = 1;
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'cum_call', 'anus', 'A1', 1);
    qspCall(st, 'stat', '');
    scene.text('<center><b>Community Center - Men\'s Restroom</b></center>');
    scene.img('images/locations/pavlovsk/community/bathroom/mens/sex/threesomeanalcum.jpg');
    scene.text('Starting to pound your ass harder, Dimka starts to grunt as he shoots his load in your ass. Pulling out his warm liquid flows out your ass spilling onto the girls face. He takes his dick and puts it in her mouth saying, "Clean the rest of this up slut and don\'t forget to clean my bitch too." The girl starts to lick your ass clean. She is really good at it and you begin to have another orgasm. You finish and decide to get up and get dressed. Dimka pleased with your behaviour tells you, "You should come by my house more often, slave."');
    (st as any).orgasm_or = 'yes';
    (st as any).cumspclnt = 15;
    qspCall(st, 'cum_cleanup', '');
    qspCall(st, 'arousal', 'end');
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
            (s as any).temp = (Math.floor(Math.random() * 2) + 1);
            qspGoto(s, 'gdktoilet_mens', 'mens');
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMens(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'public_indoors';
  (s as any).loc_arg = 'mens';
  (s as any).loc = 'gdktoilet_mens';
  (s as any).menu_loc = 'gdktoilet_mens';
  (s as any).menu_arg = 'mens';
  (s as any).locM = 'gdktoilet_mens';
  (s as any).locM_arg = 'mens';
  qspCall(s, 'stat', '');
  if (((s as any).hour ?? 0) >=20  &&  ((s as any).hour ?? 0) <=23) {
    if (((s as any).sound_settings ?? 0)?.['music_off'] === 0) {
      (s as any).track_loop = 'sound/komb.mp3';
      (s as any).volume = 50;
      (s as any).music_loop = 1;
    }
  }
  scene.text('<center><b>Community Center - Men\'s Restroom</b></center>');
  scene.img('images/locations/pavlovsk/community/bathroom/mens/bathroom_mens.jpg');
  scene.text('You peek around the corner. Inside this room, stalls line the right side, with urinals on the far wall and rows of sinks and <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">mirrors</a> to the left. The room has a smell of disinfectant and stale piss. As you look around you notice a hole in the wall.');
  qspCall(s, 'din_van', 'tampon');
  qspCall(s, 'din_van', 'quickwash');
  qspCall(s, 'din_van', 'basin');
  qspCall(s, 'din_van', 'publicpan');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['gdktoilet', 'start'] },
    { label: 'Look at the hole', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('<center><b>Community Center - Men\'s Restroom</b></center>');
    scene.img('images/locations/pavlovsk/community/bathroom/mens/sex/menghpeek.mp4');
    scene.text('You look at the hole and see a girl fingering her pussy. You feel your pussy moisten and start to itch.');
    qspCall(st, 'arousal', 'voyeur_sex', 5);
    qspCall(st, 'stat', '');
    if (((st as any).pcs_horny ?? 0) >= 50) {
      qspCall(st, 'willpower', 'mast', 'self');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Masturbate', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Masturbate', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'mast', 'self');
    qspCall(st, 'willpower', 'pay', 'self');
    (st as any).orgasm_or = 'no';
    qspCall(st, 'arousal', 'clit_finger', 5, 'masturbate');
    qspCall(st, 'stat', '');
    scene.text('You walk into one of the men\'s stalls.');
    scene.actions([
      { label: 'start', goto: ['gdktoilet_mens', 'mensmast'] },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gdktoilet_mens', 'mens'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterMensmast(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
  (s as any).pcs_mood = ((s as any).pcs_mood ?? 0) + (5);
  qspCall(s, 'stat', '');
  if (((s as any).picrand ?? 0) === 1) {
    scene.img('images/locations/shared/gloryhole/sex/caress1.mp4');
  } else {
    scene.img('images/shared/sex/mast/mastr.jpg');
  }
  if (((s as any).pcs_horny ?? 0) <= 60) {
    scene.text('You are starting to feel warm and you insert your finger in your pussy.');
    (s as any).orgasm_or = 'no';
    qspCall(s, 'arousal', 'clit_finger', 2, 'masturbate');
    qspCall(s, 'stat', '');
  } else {
    scene.text('You are starting to feel warm and you insert your finger in your pussy. You keep fingering your pussy and before long you are breathing heavily and start to moan.');
    (s as any).orgasm_or = 'no';
    qspCall(s, 'arousal', 'clit_finger', 2, 'masturbate');
    qspCall(s, 'stat', '');
  }
  if (((s as any).pcs_horny ?? 0) >= 90) {
    scene.actions([
      { label: 'Climax', handler: (st: GameState) => {
    (st as any).pcs_mood = ((st as any).pcs_mood ?? 0) + (15);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    if (((st as any).pcs_inhib ?? 0) < 30) {
      (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 3) + 1));
    }
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/community/bathroom/mens/sex/mensmast1.jpg');
    (st as any).orgasm_or = 'custom';
    (st as any).orgasm_txt = 'As your pussy gets wet you start to rub your clit vigorously. You start to feel more intense pleasure with every second. Within a few moments a powerful orgasm takes control of your body. You can hear your moans echo through the restroom, your orgasm finally stops. Leaving you gasping and trembling as you recover.';
    qspCall(st, 'arousal', 'clit_finger', 2, 'masturbate');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Clean yourself', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/community/bathroom/mens/sex/mensmast2.jpg');
    scene.text('You grab some toilet paper and clean off your now wet clit. You think to yourself, "I hope nobody heard that."');
    if ((Math.floor(Math.random() * 100) + 1) >= 75) {
      qspCall(st, 'npcgeneratec', '', 0, 'guy from the men\'s bathroom', (Math.floor(Math.random() * 27) + 19));
      ((st as any).npc_dick = (st as any).npc_dick ?? {})[String((st as any).npclastgenerated ?? 0)] = (Math.floor(Math.random() * 15) + 10);
      qspCall(st, 'boyStat', '', ((st as any).npclastgenerated ?? 0));
      // TODO-QSP: dynamic text: You look up and notice the stall door opens. Right then a man in an orange jumps...
      scene.text(`You look up and notice the stall door opens. Right then a man in an orange jumpsuit walks in. He tells you, "Do you know where you are?" Unable to respond after your intense orgasm the man unzips his jumpsuit and takes out his ${((st as any).npc_dick ?? 0)?.[String((st as any).npclastgenerated ?? 0)] ?? ''}cm dick and places it near your mouth.`);
      qspCall(st, 'willpower', 'bj', 'resist', 'hard');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Run away', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Run away', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'bj', 'resist', 'hard');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'arousal', 'end');
    if (((st as any).pantyworntype ?? 0) !== 'none'  ||  ((st as any).braworntype ?? 0) !== 'none') {
      qspCall(st, 'underwear', 'dispose');
      (st as any).minut = ((st as any).minut ?? 0) + 2;
      qspCall(st, 'stat', '');
      scene.text('You slip past the man and run out of the bathroom so quickly you leave your underwear behind.');
      scene.actions([
        { label: 'Leave', goto: ['gdktoilet', 'start'] },
      ]);
    } else {
      (st as any).minut = ((st as any).minut ?? 0) + 2;
      qspCall(st, 'stat', '');
      scene.text('You slip past the man and run out of the bathroom.');
      scene.actions([
        { label: 'Leave', goto: ['gdktoilet', 'start'] },
      ]);
    }
  } },
        ]);
      }
      scene.actions([
        { label: 'Suck', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/community/bathroom/mens/sex/mensmast3.jpg');
    scene.text('You open your mouth and begin to suck his dick. You can feel your pussy getting itchy again so you start to rub it. You continue to rub your clit until the man is about to cum.');
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'unknown');
    qspCall(st, 'arousal', 'clit_finger', (-5));
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Climax again', handler: (st: GameState) => {
    (st as any).pcs_mood = ((st as any).pcs_mood ?? 0) + (15);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'cum_call', 'face', ((st as any).boy ?? 0));
    scene.img('images/locations/pavlovsk/community/bathroom/mens/sex/mensmast4.jpg');
    (st as any).orgasm_or = 'custom';
    (st as any).orgasm_txt = 'You continue to rub your clit more and more when all of a sudden you explode into another orgasm. The man tells you he\'s about to cum and you stop sucking his dick. The second you stop sucking he cums around your mouth.';
    qspCall(st, 'arousal', 'clit_finger', 2);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Rest', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/community/bathroom/mens/sex/mensmast5.jpg');
    scene.text('The man leaves the stall, he mumbles something but you are too far gone and woozy. You stay crouched on the floor with cum all over your mouth as you try to recover.');
    scene.actions([
      { label: 'Leave the stall', goto: ['gdktoilet_mens', 'mens'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Leave Stall', goto: ['gdktoilet_mens', 'mens'] },
      ]);
    }
  } },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Continue', goto: ['gdktoilet_mens', 'mensmast'] },
    ]);
  }
  qspCall(s, 'willpower', 'mast', 'self');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Stop', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Stop', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'mast', 'self');
    qspCall(st, 'willpower', 'pay', 'self');
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'stat', '');
    scene.text('You decide that you shouldn\'t continue in fear of being discovered.');
    scene.actions([
      { label: 'Leave Stall', goto: ['gdktoilet_mens', 'mens'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterMensglory(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcgeneratec', '', 0, 'guy from the men\'s bathroom', (Math.floor(Math.random() * 27) + 19));
  // TODO-QSP: $npc_thdick[$npclastgenerated] = 'massive'
  ((s as any).npc_dick = (s as any).npc_dick ?? {})[String((s as any).npclastgenerated ?? 0)] = 20;
  qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/bathroom/mens/sex/1kissing.jpg');
  // TODO-QSP: end
  scene.actions([
    { label: 'Submit', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/community/bathroom/mens/sex/2turning.mp4');
    scene.text('He turns you around against the wall. He presses your face and breasts to the wall, while pulling your hips back away from the wall. Despite his aggressive behavior you rather enjoy his rough behavior.');
    qspCall(st, 'arousal', 'foreplay', 5, 'sub', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Spread your ass cheeks', handler: (st: GameState) => {
    (st as any).guy = ((st as any).guy ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/community/bathroom/mens/sex/3doggy.mp4');
    // TODO-QSP: dynamic text: He licks his fingers and coats the tip of his dick with his saliva. He then take...
    scene.text(`He licks his fingers and coats the tip of his dick with his saliva. He then takes his ${((st as any).npc_dick ?? 0)?.[String((st as any).npclastgenerated ?? 0)] ?? ''}cm dick and guides it into your wet pussy. Grabbing your hips he begins to thrust, into you hard and fast. You are so overwhelmed and turned on, that you fail to notice other men that just walked in and are now watching.`);
    qspCall(st, 'arousal', 'vaginal_finger', 5, 'sub', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Turn Around', handler: (st: GameState) => {
    (st as any).pcs_mood = ((st as any).pcs_mood ?? 0) + (15);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/community/bathroom/mens/sex/4standmiss.mp4');
    // TODO-QSP: dynamic text: He suddenly pulls out of you and roughly turns you back around, and picks you up...
    scene.text(`He suddenly pulls out of you and roughly turns you back around, and picks you up. You spread your legs and he lowers you back down, till you feel his ${((st as any).dick_girth ?? '')} dick slide back inside of your pussy. He carries you, fucking you the whole time, you are impressed by his strength, as he manages to not only carry you, but fuck you at the same time. He slams your back roughly but not painfully onto an open stall door and presses your body against it, then he starts fucking you in harder. It seems he is nowhere near ready to cum.`);
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'vaginal', 5, 'sub', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Suck', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/community/bathroom/mens/sex/5blowjob.mp4');
    // TODO-QSP: dynamic text: After some time, he pulls out of you and lets you down, you think he is getting ...
    scene.text(`After some time, he pulls out of you and lets you down, you think he is getting a bit tired from holding you up. He leans back on the counter as you bend over and start to suck his dick. He puts his hand on your head and grabs and handful of hair, he pushes your head down while you suck his ${((st as any).npc_dick ?? 0)?.[String((st as any).npclastgenerated ?? 0)] ?? ''}cm dick. His hands hold onto your hair, keeping your from pulling away. Not that you would, you are excited and love sucking his dick.`);
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'rough', 'deepthroat');
    qspCall(st, 'stat', '');
    if ((Math.floor(Math.random() * 2) + 1) === 1) {
      scene.actions([
        { label: 'Pull away', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'cum_call', 'mouth', 'guy from the men\'s bathroom');
    qspCall(st, 'arousal', 'end');
    scene.img('images/shared/sex/cum/mouth/cum1,1.mp4');
    scene.text('You pull away right before he cums. You start to stroke his dick and you open your mouth. His hot load fills your mouth, it tastes salty and warm.');
    qspCall(st, 'willpower', 'swallow', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Spit', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Spit', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'swallow', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/community/bathroom/mens/sex/cumspit.mp4');
    scene.text('You spit out his cum which. The man says, "You don\'t like the taste of cum?" You don\'t respond and get up to get dressed and leave.');
    scene.actions([
      { label: 'Leave', goto: ['gdktoilet', 'start'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Swallow', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'cum_call', 'mouth_swallow', 'guy from the men\'s bathroom');
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/cum/mouth/cum1,1.mp4');
    scene.text('You decide to swallow his cum. The man says, "You are much better than that hole in the wall." You smile and nod to him and get dressed. You leave the bathroom feeling satisfied and relaxed.');
    scene.actions([
      { label: 'Leave', goto: ['gdktoilet', 'start'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      qspCall(st, 'willpower', 'sex', 'resist');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Keep sucking', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Keep sucking', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'sex', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'cum_call', 'mouth_swallow', 'guy from the men\'s bathroom');
    qspCall(st, 'arousal', 'end');
    if (((st as any).pcs_throat ?? 0) <= 25) {
      scene.img('images/shared/sex/blowjob/kotovbj91.mp4');
      scene.text('You keep sucking taking in his entire dick. You stop when you feel his hard penis throbbing as a warm liquid fills your throat. You pull out his penis from your mouth making sure to not let any get spilled. The man says, "You are much better than that hole in the wall." You smile and nod to him and get dressed. You leave the bathroom feeling satisfied and relaxed.');
      scene.actions([
        { label: 'Leave', goto: ['gdktoilet', 'start'] },
      ]);
    } else {
      scene.img('images/shared/sex/blowjob/kotovbj26.mp4');
      scene.text('Unable to continue to fit his entire penis inside your mouth you keep sucking the tip of his dick until you feel his hard penis throbbing as a warm liquid fills the back of your mouth. You pull out his penis from your mouth making sure to not let any get spilled. The man says, "You are much better than that hole in the wall." You smile and nod to him and get dressed. You leave the bathroom feeling satisfied and relaxed.');
      scene.actions([
        { label: 'Leave', goto: ['gdktoilet', 'start'] },
      ]);
    }
  } },
        ]);
      }
      scene.actions([
        { label: 'Ride', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/bathroom/mens/sex/6cowgirl.mp4');
    scene.text('He yanks your head away, as he turns and lays down on the floor, on his back. He pulls you down on top of him, you straddle him and take his dick back into your pussy and you start to ride him. With out warning you feel him thrusting hard as he groaned. You feel warmth deep inside your pussy.');
    qspCall(st, 'arousal', 'vaginal', 5, 'sub', 'rough');
    qspCall(st, 'arousal', 'end');
    if (((st as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0) {
      if (((st as any).sexcontra ?? 0) === 4) {
        scene.actions([
          { label: 'Get up', handler: (st: GameState) => {
    qspCall(st, 'fame', 'pav', 'sex', 5);
    qspCall(st, 'cum_call', '', '', 'guy from the men\'s bathroom');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/community/bathroom/mens/sex/misscream.mp4');
    scene.text('You pull off him, getting up and looking down at him. That is when you noticed your pussy dripping cum all over his penis. The man unable to move breathing heavily. The man replies, "I thought it felt better than it should\'ve been." ');
    qspCall(st, 'cuminsidereact', '');
    scene.text('He continues to breath heavily and says, "You were great though, perhaps we\'ll meet again." He gets up and gets dressed, that is when you finally notice the other men watching. You quickly get dressed and feel embarrassed you didn\'t notice them before, leaving while your blushing.');
    scene.actions([
      { label: 'Leave', goto: ['gdktoilet', 'start'] },
    ]);
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Get up', handler: (st: GameState) => {
    qspCall(st, 'fame', 'pav', 'sex', 5);
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/cum/cum61.jpg');
    scene.text('You pull off him, getting up and looking down at him. The man unable to move breathing heavily. He continues to breath heavily and says, "You were great, perhaps we\'ll meet again." He gets up and gets dressed, that is when you finally notice the other men watching. You quickly get dressed and feel embarrassed you didn\'t notice them before, leaving while your blushing.');
    scene.actions([
      { label: 'Leave', goto: ['gdktoilet', 'start'] },
    ]);
  } },
        ]);
      }
    } else {
      if (((st as any).sexcontra ?? 0) === 2) {
        scene.actions([
          { label: 'Complain', handler: (st: GameState) => {
    qspCall(st, 'fame', 'pav', 'sex', 5);
    qspCall(st, 'cum_call', '', '', 'guy from the men\'s bathroom');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/community/bathroom/mens/sex/misscream.mp4');
    scene.text('You pull off him, getting up and looking down at him and say, "Why didn\'t you tell me you were going to cum?" The man replies, "Sorry I was trying to hold back and thought I could, didn\'t you say you were on the pill?" You reply, "Yeah, but still you could\'ve told me. Now I will have to clean up." He continues to breath heavily and says, "Was it really that bad?" He smirks at you, "You were great, perhaps we\'ll meet again and next time use no condoms again." He gets up and gets dressed, that is when you finally notice the other men watching. You stop trying to clean yourself and quickly get dressed. You feel embarrassed you didn\'t notice them before, leaving while you\'re blushing.');
    scene.actions([
      { label: 'Leave', goto: ['gdktoilet', 'start'] },
    ]);
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Complain', handler: (st: GameState) => {
    qspCall(st, 'fame', 'pav', 'sex', 5);
    qspCall(st, 'cum_call', '', '', 'guy from the men\'s bathroom');
    scene.img('images/locations/pavlovsk/community/bathroom/mens/sex/misscream.mp4');
    scene.text('You pull off him, getting up and looking down at him and say, "Why didn\'t you tell me you were going to cum?" The man replies, "Sorry I was trying to hold back and thought I could, didn\'t you say you were on the pill?" You reply, "No. What am I going to do if I get pregnent?" He continues to breath heavily and says, "Don\'t worry, I\'m sure you won\'t get pregnant from just this one time. You were great, perhaps we\'ll meet again and maybe use some protection." He gets up and gets dressed, that is when you finally notice the other men watching. You quickly get dressed and feel embarrassed you didn\'t notice them before, leaving while you\'re blushing.');
    scene.actions([
      { label: 'Leave', goto: ['gdktoilet', 'start'] },
    ]);
  } },
        ]);
      }
    }
  } },
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

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'mens_entrance_events':
      enterMensEntranceEvents(s, scene);
      break;
    case 'mens':
      enterMens(s, scene);
      break;
    case 'mensmast':
      enterMensmast(s, scene);
      break;
    case 'mensglory':
      enterMensglory(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gdktoilet_mens: LocationDef = {
  name: 'gdktoilet_mens',
  title: 'Community Center - Men\'s Restroom',
  region: 'other',
  locationType: 'public_indoors',
  enter: enter,
};
