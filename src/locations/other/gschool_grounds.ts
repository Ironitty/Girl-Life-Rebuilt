import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gschool_grounds', 'main');
  qspCall(s, 'vicky_meynold_schedule', '');
  qspCall(s, 'katja_meynold_schedule', '');
  qspCall(s, 'igor_schedule', '');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Outside School</b></center>');
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
    scene.img('images/locations/pavlovsk/school/building/schoolwinter.jpg');
  } else {
    scene.img('images/locations/pavlovsk/school/building/gschool.jpg');
  }
  scene.text('Pavlovsk\'s only school, where all the local children go for their education. Next to the school is the athletic field and a parking lot for the teachers, with a large grove of trees just beyond them.');
  // TODO-QSP: dynamic text: Hidden behind these trees is the <a href="exec: minut += 1 & gt 'pav_old_school'...
  scene.text('Hidden behind these trees is the <a href="exec: minut += 1 & gt \'pav_old_school\', \'old_school\'">old school building</a>, which was supposed to be renovated and used for advanced classes after the new one was built, but budget cuts meant the project was cancelled and now the old building stands empty and abandoned. It\'s a popular spot for students to skip class or hang out outside of school.');
  if (((s as any).mother ?? 0)?.['kickedout_timer'] !== 0  &&  ((s as any).mother ?? 0)?.['kickedout_timer'] + 3 <= ((s as any).daystart ?? 0)  &&  (((s as any).hour ?? 0) === 6  ||  (((s as any).hour ?? 0) > 13  &&  ((s as any).hour ?? 0) <= 15))  &&  ((s as any).cumloc ?? 0)[11] === 0  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0) {
    qspCall(s, 'mother_chats', 'reconciliation_talk');
    return;
  }
  if (((((s as any).hour ?? 0) === 6  &&  ((s as any).minut ?? 0) >= 30)  ||  (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) < 18))  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).kanikuli ?? 0) === 0  &&  ((s as any).suspended ?? 0)?.['on'] !== 1) {
    // TODO-QSP: dynamic text: With the school open, you can go to the <a href="exec: minut += 1 & gt 'gschool_...
    scene.text('With the school open, you can go to the <a href="exec: minut += 1 & gt \'gschool_grounds\', \'change_room\'">changing rooms</a> by the gym and change your outfit.');
  }
  if (((s as any).day ?? 0) === ((s as any).nyp_day ?? 0)  &&  ((s as any).month ?? 0) === 12  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0) {
    if (((s as any).hour ?? 0) >= 14  &&  ((s as any).hour ?? 0) < 17) {
      scene.text('All of the boys and girls are standing near the school. Everyone did their best to look good today, wearing their nicest clothes.');
      // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, are you coming to the New Year's Eve party or not?" some...
      scene.text(`"Hey ${((s as any).pcs_nickname ?? 0)}, are you coming to the New Year's Eve party or not?" someone calls out to you. "You haven't paid the ${qspFunc(s, 'money', 'string_price', 1000)} entry fee yet!"`);
      if (qspFunc(s, 'money', 'can_afford', 1000) === 0) {
        s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
      } else {
        // TODO-QSP: gs 'money', 'pay', 1000 & gt 'nyp_school', 'start'
      }
      scene.actions([
        { label: 'Go to the party [+$func(\'money\', \'get_cost_string\', 1000)]' }, // TODO-QSP: empty action body
      ]);
    }
  }
  scene.build();
}

export const gschool_grounds: LocationDef = {
  name: 'gschool_grounds',
  title: 'Outside School',
  region: 'other',
  locationType: 'bathroom',
  locclass: 'locker',
  description: ['Pavlovsk\'s only school, where all the local children go for their education. Next to the school is the athletic field and a parking lot for the teachers, with a large grove of trees just beyond them.'],
  enter: enter,
};
