import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.img('images/pc/activities/exercises/gym/fit1.jpg');
  scene.text('You\'re stretching and warming up before your practice run. You can see your coach, Igor Yurisovich, talking to the other athletes.');
  if (((s as any).runnerQW ?? 0)?.['joined_team'] > 0) {
    scene.actions([
      { label: 'Go to your coach', handler: (st: GameState) => {
    scene.text('Igor Yurisovich is your coach, a man with a rough voice who never seems to gets tired of motivational one-liners.');
    scene.text('"The only one who can keep you from winning is you" is his current favorite.');
    if (((s as any).pcs_run ?? 0) < 50) {
      scene.text('Despite looking occupied with the other trainees, Igor not only watched your practice runs, but timed them as well. He doesn\'t look too happy, though - not that he ever does.');
      scene.text('"You have to train harder, girl. With a time like this, you would come in dead last. Hell, you wouldn\'t even qualify for the main race! If you want to be better, you have to watch your diet, maybe go to the banya after training, but most importantly: Practice, practice, practice!"');
      scene.actions([
        { label: 'Leave', goto: ['havana_running', 'start'] },
      ]);
    } else {
      scene.text('Despite looking occupied with the other trainees, Igor not only watched your practice runs, but timed them as well. While you\'re pretty sure he\'s physically incapable of looking excited or even content, you think that he looks a little less grim than usual as he looks at you.');
      scene.text('"You\'re doing fine, girl. Better than fine; you could have a great future in athletics if you play your cards right. If you keep working hard, you might even have it in you to become European champion, perhaps more. But remember, the key to victory is your spirit: If you have the right mindset, you can do anything."');
      scene.text('Igor eagerly watches your practice runs and times them as well. Despite his grim demeanour, he nods approvingly at your times and even gives you a hug when you set a personal best.');
      // TODO-QSP: dynamic text: "You're doing great, <<$pcs_nickname>>. I really can't give you much more advice...
      scene.text(`"You're doing great, ${((s as any).pcs_nickname ?? 0)}. I really can't give you much more advice except to tell you to keep pushing and making us proud."`);
      scene.actions([
        { label: 'Leave', goto: ['havana_running', 'start'] },
        { label: 'Leave', goto: ['havana_running', 'start'] },
      ]);
    }
  } },
    ]);
  }
  scene.actions([
    { label: 'Do a few practice races', handler: (st: GameState) => {
    (s as any).abonement = ((s as any).abonement ?? 0) - (1);
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'exercise', 'tier2', 30, 'run');
    scene.img('images/pc/activities/exercises/gym/fit5.jpg');
    scene.text('You spend half an hour practicing 100 meter dashes to improve your speed, as well as doing several rounds around the stadium to work on your stamina.');
    scene.text('You\'re sweaty all over by the end of it, but also feel that you\'re a little better than before.');
    scene.actions([
      { label: 'Go to the dressing room', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterRaceStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  (s as any).runnerQW['comp_day'] = ((s as any).daystart ?? 0);
  (s as any).runnerQW['races_ran'] = ((s as any).runnerQW['races_ran'] ?? 0) + (1);
  (s as any).runnerQW['bmi_penalty'] = 0;
  qspCall(s, 'stat', '');
  if (((s as any).runnerQW ?? 0)?.['prof_stage'] === 0) {
    scene.text('You\'re registered for an amateur\'s race. The results will determine if you join the club\'s junior squad and enter the semi-professional runner circuit.');
    scene.actions([
      { label: 'Go to the track field', goto: ['havana_running', 'br'] },
    ]);
  } else {
    scene.text('As a member of your club\'s junior squad, you\'re registered for a semi-professional\'s race. The results will determine if you join the veteran squad.');
    if (((s as any).runnerQW ?? 0)?.['prof_stage'] === 2) {
      scene.text('As a member of your club\'s veteran squad, you\'re registered for a semi-professional\'s race. The results will determine your entry in the professional runner circuit.');
      scene.actions([
        { label: 'Go to the track field', goto: ['havana_running', 'ross'] },
      ]);
    } else {
      scene.text('As one of your club\'s best athletes, you can take part in a series of qualifying races in the professional circuit. Winning 9 out of 11 would qualify you for the St. Petersburg Track Championship.');
      // TODO-QSP: nl
      // TODO-QSP: dynamic text: Qualifying Races Attended: <<runnerQW['prof_stage'] - 3>>
      scene.text(`Qualifying Races Attended: ${((s as any).runnerQW ?? 0)?.['prof_stage'] - 3}`);
      // TODO-QSP: dynamic text: Top 3 finishes in Qualifying Races: <<runnerQW['qualifiers']>>
      scene.text(`Top 3 finishes in Qualifying Races: ${((s as any).runnerQW ?? 0)?.['qualifiers']}`);
      if (((s as any).runnerQW ?? 0)?.['prof_stage'] === 14  &&  ((s as any).runnerQW ?? 0)?.['qualifiers'] < 9) {
        (s as any).runnerQW['qualifiers'] = 0;
        (s as any).runnerQW['prof_stage'] = 3;
        scene.text('You were unable to qualify for the St. Petersburg Track Championship.');
        scene.actions([
          { label: 'Go back to the dressing room', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
        ]);
      } else {
        (s as any).runnerQW['qualifiers'] = 0;
        (s as any).runnerQW['prof_stage'] = 3;
        // TODO-QSP: dynamic text: You qualified for the <<year>> St. Petersburg Track Championship, taking place t...
        scene.text(`You qualified for the ${((s as any).year ?? 0)} St. Petersburg Track Championship, taking place this season in the Petrovsky Stadium.`);
        scene.actions([
          { label: 'Go to the stadium', goto: ['havana_running', 'evro'] },
        ]);
      }
      scene.actions([
        { label: 'Go to the stadium', goto: ['havana_running', 'kval'] },
      ]);
    }
    scene.actions([
      { label: 'Go to the track field', goto: ['havana_running', 'kms'] },
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
    case 'race_start':
      enterRaceStart(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const havana_running: LocationDef = {
  name: 'havana_running',
  title: 'You\'re stretching and warming up before your practice run. Y',
  region: 'other',
  description: ['You\'re stretching and warming up before your practice run. You can see your coach, Igor Yurisovich, talking to the other athletes.'],
  enter: enter,
};
