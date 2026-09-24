import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterCikl(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_rel ?? 0)?.['A18'] > 20) {
    qspCall(s, 'npc_relationship', 'set', 'A18', 20);
  }
  if (((s as any).christinaQW ?? 0)?.['set_bully'] === 1) {
    if (((s as any).christinaQW ?? 0)?.['bully'] < 1) {
      ((s as any).christinaQW = (s as any).christinaQW ?? {})['bully'] = 1;
    }
    if (((s as any).christinaQW ?? 0)?.['bully'] > 99) {
      ((s as any).christinaQW = (s as any).christinaQW ?? {})['bully'] = 99;
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterChristinaBu_1(s: GameState, scene: SceneBuilder): void {
  ((s as any).gschoolVars = (s as any).gschoolVars ?? {})['attendance_count'] = ((s as any).gschoolVars['attendance_count'] ?? 0) - (1);
  ((s as any).christinaQW = (s as any).christinaQW ?? {})['set_bully'] = 1;
  ((s as any).christinaQW = (s as any).christinaQW ?? {})['bully'] = 50;
  scene.img('images/locations/pavlovsk/school/events/nastymessage.jpg');
  scene.text('It\'s your first day back to school, and Christina has decided to welcome you as only she could. As you approach your locker you find her writing graffiti on it.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Say nothing', handler: (st: GameState) => {
    qspCall(st, 'mood', 'lower', 'small');
    ((st as any).christinaQW = (st as any).christinaQW ?? {})['bully'] = ((st as any).christinaQW['bully'] ?? 0) + (1);
    scene.img('images/locations/pavlovsk/school/events/nastymessage2.jpg');
    scene.text('As much as you want to say something, you know it won\'t do any good.');
    // TODO-QSP: dynamic text: She gives you a sweet, and entirely fake, smile when she sees you coming. "Oh, h...
    scene.text(`She gives you a sweet, and entirely fake, smile when she sees you coming. "Oh, hi ${((st as any).pcs_nickname ?? '')}. Don't mind me, I was just giving your locker some much needed pop! We wouldn't want anybody to think you were supposed to be treated normal, after all." Putting her marker away, she half waves and walks away.`);
    // TODO-QSP: 'You try to rub it off, but have no luck. ' + $OpenInnerThought + 'Why does she always pick on me? I...
    scene.actions([
      { label: 'Continue', goto: ['gschool_grounds', 'building'] },
    ]);
  } },
    { label: 'Say something', handler: (st: GameState) => {
    qspCall(st, 'mood', 'raise', 'tiny');
    ((st as any).christinaQW = (st as any).christinaQW ?? {})['bully'] = ((st as any).christinaQW['bully'] ?? 0) - (1);
    scene.img('images/locations/pavlovsk/school/events/nastymessage2.jpg');
    scene.text('Though you know it won\'t stop her, you cannot resist standing up for yourself. "What the fuck, Christina! Does my locker look like a coloring book to you? Why can\'t you just leave my shit alone?"');
    // TODO-QSP: dynamic text: She gives you a sweet, and entirely fake, smile and says "Oh, hi <<$pcs_nickname...
    scene.text(`She gives you a sweet, and entirely fake, smile and says "Oh, hi ${((st as any).pcs_nickname ?? '')}. Don't mind me, I was just giving your locker some much needed pop! We wouldn't want anybody to think you were supposed to be treated normal, after all." Putting her marker away, she half waves and walks away.`);
    // TODO-QSP: 'You try to rub it off, but have no luck. ' + $OpenInnerThought + 'Fucking bitch, someday I''ll get ...
    scene.actions([
      { label: 'Continue', goto: ['gschool_grounds', 'building'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterChristinaBu_2(s: GameState, scene: SceneBuilder): void {
  scene.text('You walk through the hallways until headiing outside. As you start down the path to home, you stumble and fall flat on your face. Stunned a bit, you lay there until you hear giggling and what sounds distinctly like a phone camera taking a picture. Climbing to your feet, you realize several of your classmates watched it happen and your face starts turning a bit red. Turning around, you realize who took a picture of you like that.');
  scene.text('"Smooth move," Christina says with her phone still aimed at you. "Hold on, I gotta make sure Lizaveta gets this."');
  if (((s as any).pantyworntype ?? 0) !== 'none') {
    scene.img('images/locations/pavlovsk/school/bully/fall_panties.jpg');
    scene.actions([
      { label: 'Say nothing', handler: (st: GameState) => {
    ((st as any).christinaQW = (st as any).christinaQW ?? {})['bully'] = ((st as any).christinaQW['bully'] ?? 0) + (2);
    scene.text('Your face burns as you imagine everybody in school looking at a picture of your panties, but she will do it no matter what you say, so you just quietly gather your fallen books and walk away.');
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
      { label: 'Say something', handler: (st: GameState) => {
    ((st as any).christinaQW = (st as any).christinaQW ?? {})['bully'] = ((st as any).christinaQW['bully'] ?? 0) - (2);
    scene.text('Your face burns as you imagine everybody in school looking at a picture of your panties, and can\'t stop yourself from saying "You pervert. Do you get off looking at girls panties?"');
    (st as any).temp_txt = 'Christina just shrugs and responds with "You\'re the one showing them to the world. I bet you did it on purpose so people could see your ';
    if (((st as any).pantyworntype ?? 0) === 'gm') {
      // TODO-QSP: $temp_txt += 'ugly'
    } else {
      if (((st as any).pantyworntype ?? 0) === 'eroto'  ||  ((st as any).pantyworntype ?? 0) === 'salacious'  ||  ((st as any).pantyworntype ?? 0) === 'lusso') {
        // TODO-QSP: $temp_txt += 'slutty'
      } else {
        // TODO-QSP: $temp_txt += 'cute'
      }
    }
    // TODO-QSP: $temp_txt += ' panties, slut." She finishes sending the picture, gives you a smirk, and walks away.'
    // TODO-QSP: $temp_txt
    scene.text('All you can do at this point is gather your fallen stuff and head out.');
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
    ]);
  } else {
    qspCall(s, 'fame', 'pav', 'sex', 'tiny');
    scene.img('images/locations/pavlovsk/school/bully/fall_nopanties.jpg');
    scene.actions([
      { label: 'Say nothing', handler: (st: GameState) => {
    ((st as any).christinaQW = (st as any).christinaQW ?? {})['bully'] = ((st as any).christinaQW['bully'] ?? 0) + (3);
    scene.text('Your face burns as you imagine everybody in school looking at a picture of your pussy on display, but she will do it no matter what you say, so you just quietly gather your fallen books and walk away.');
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
      { label: 'Say something', handler: (st: GameState) => {
    ((st as any).christinaQW = (st as any).christinaQW ?? {})['bully'] = ((st as any).christinaQW['bully'] ?? 0) - (3);
    scene.text('Your face burns as you imagine everybody in school looking at a picture of your pussy on display, and can\'t stop yourself from saying "You pervert. Do you get off taking upskirt pictures?"');
    // TODO-QSP: dynamic text: Christina just shrugs and responds with "You''re the one not wearing panties. I ...
    scene.text(`Christina just shrugs and responds with "You're the one not wearing panties. I bet you did it on purpose so people could see your ${(((st as any).pc_desc ?? 0)?.['pubes'] ?? '')} pussy, slut." She finishes sending the picture, gives you a smirk, and walks away.`);
    scene.text('All you can do at this point is gather your fallen stuff and head out.');
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterChristinaDecide1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big18.jpg');
  scene.text('You can\'t ever seem to decide how to deal with Christina. No matter how you treat her, she always seems to come off as cold or fake and has been this way for as long as you can remember. She\'s such a bully to everybody except Albina, who seems to be the only person she\'s seemingly wary of. She seems to especially hate you though, and bullies you every chance she gets.');
  scene.text('You could try to fight her. She is reputedly one of the toughest girls in school though, so you better make sure you can actually do it before trying. Another option would be to find some dirt you could use against her. It would have to be something pretty embarressing to her to actually keep her from messing with you again.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave it as is', goto: ['gschool_lessons', 'short_break'] },
    { label: 'Pick a fight', handler: (st: GameState) => {
    ((st as any).christinaQW = (st as any).christinaQW ?? {})['pre_fight'] = 1;
    scene.img('images/characters/shared/headshots_main/big18.jpg');
    scene.text('You make your decision. You decide you\'re going after her when school ends, when no teachers are around to stop it but everybody else will see.');
    scene.actions([
      { label: 'Return to break', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    { label: 'Find something to blackmail her with', handler: (st: GameState) => {
    ((st as any).christinaQW = (st as any).christinaQW ?? {})['pre_bm'] = 1;
    scene.img('images/characters/shared/headshots_main/big18.jpg');
    scene.text('You make your decision. You need to keep your eyes and ears open to find something to use against her.');
    scene.actions([
      { label: 'Return to break', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterChristinaDecide2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big18.jpg');
  scene.text('You can\'t ever seem to decide how to deal with Christina. No matter how you treat her, she always seems to come off as cold or fake and has been this way for as long as you can remember. She\'s such a bully to everybody except Albina, who seems to be the only person she\'s seemingly wary of. She seems to especially hate you though, and bullies you every chance she gets.');
  scene.text('You could try and join Lina and Lariska, they both seem pretty happy to follow her orders and not having to think for themselves. The idea of being humiliated and treated as a possession strangely appeals to some dark part of you. It would be pretty easy to let her take control of your life too.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave it as is', goto: ['gschool_lessons', 'short_break'] },
    { label: 'Try and become her new pet', handler: (st: GameState) => {
    ((st as any).christinaQW = (st as any).christinaQW ?? {})['subpath'] = 1;
    scene.img('images/characters/shared/headshots_main/big18.jpg');
    scene.text('You make your decision. You should head to the beach where she trains Lina on weekday afternoons and see what happens.');
    scene.actions([
      { label: 'Return to break', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterChris_LinaPark(s: GameState, scene: SceneBuilder): void {
  ((s as any).socialchg = (s as any).socialchg ?? {})['tChris_Lina_jog'] = ((s as any).daystart ?? 0);
  qspCall(s, 'npc_relationship', 'modify', 'A19', 'like');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/christina/Chris_Lina_park.jpg');
  if (((s as any).fame ?? 0)?.['pav_slut'] < 200) {
    scene.text('You give a friendly wave to the girls as they get closer, but Christina just says something to Lina and they both laugh without slowing down.');
  } else {
    scene.text('You give a friendly wave to the girls as they get closer, but Christina just gives you a disgusted look and they continue running without slowing down.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['pav_park', 'start'] },
  ]);
  scene.build();
}

function enterKristinaFight(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'event_outdoors';
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/christina/school/fight.mp4');
  scene.text('You wait until you see Christina crossing the field heading home. Deciding you want to throw the first punch, you casually walk by like you were heading the same way. You know she cannot resist saying something nasty, and sure enough, she takes the bait. What she doesn\'t expect is as soon as she tosses out an insult you whip towards her and punch her face, hard.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Fight her', handler: (st: GameState) => {
    qspCall(st, 'fight', 'initFight');
    qspCall(st, 'fight_npcdata', 'christina');
    qspGoto(st, 'fight', 'start');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'cikl':
      enterCikl(s, scene);
      break;
    case 'christina_bu_1':
      enterChristinaBu_1(s, scene);
      break;
    case 'christina_bu_2':
      enterChristinaBu_2(s, scene);
      break;
    case 'christina_decide1':
      enterChristinaDecide1(s, scene);
      break;
    case 'christina_decide2':
      enterChristinaDecide2(s, scene);
      break;
    case 'Chris_Lina_park':
      enterChris_LinaPark(s, scene);
      break;
    case 'KristinaFight':
      enterKristinaFight(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const Zvereva_events: LocationDef = {
  name: 'Zvereva_events',
  title: 'It\'s your first day back to school, and Christina has decide',
  region: 'other',
  locationType: 'event_outdoors',
  enter: enter,
};
