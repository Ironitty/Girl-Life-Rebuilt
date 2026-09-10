import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).phone_off = 0;
  qspCall(s, 'core_library', 'setloc', 'city_sauna', '');
  (s as any).sauna = ((s as any).sauna ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.text('<center><b>Sauna</b></center>');
  scene.img('images/locations/city/residential/sauna/sauna.jpg');
  scene.text('A luxurious high quality public sauna built a long time ago. The sauna houses separate changing rooms and shower facilities for men and women.');
  if (((s as any).saunaWhore ?? 0) >= 1) {
    // TODO-QSP: act 'Go to work': gt 'city_saunawhore', 'saunawork'
  }
  if (((s as any).week ?? 0) === 5  &&  ((s as any).workDisk ?? 0) === 2) {
    scene.text('There\'s a security guard waiting at the entrance for you to arrive.');
    scene.actions([
      { label: 'Hand over the disk', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    (s as any).workDisk = 3;
    (s as any).konvert = 1;
    qspCall(s, 'stat', '');
    scene.text('You hand over the disk and are given a thick envelope in return.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  }
  if (((s as any).hour ?? 0) >= 8) {
    // TODO-QSP: act 'Head to the sauna': gt 'city_sauna', 'sauna2'
  }
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enterSauna2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_sauna', 'sauna2');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Sauna</b></center>');
  scene.img('images/locations/city/residential/sauna/sauna1.jpg');
  // TODO-QSP: dynamic text: A one hour session costs ' + $func('money', 'string_price', 2000) + '.
  scene.text('A one hour session costs \' + $func(\'money\', \'string_price\', 2000) + \'.');
  if (((s as any).saunaday ?? 0) !== ((s as any).daystart ?? 0)) {
    if (qspFunc(s, 'money', 'can_afford', 2000) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney ?? ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 2000);
      (s as any).minut = ((s as any).minut ?? 0) + 60;
      (s as any).fat = ((s as any).fat ?? 0) - (10);
      (s as any).pcs_sweat = Math.floor(Math.random() * 6) + 0;
      qspCall(s, 'din_van', 'showerdin');
      (s as any).saunaday = ((s as any).daystart ?? 0);
      qspCall(s, 'mood', 'raise', 'medium');
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (50);
      if (((s as any).pcs_horny ?? 0) < 0) {
        (s as any).pcs_horny = 0;
      }
      (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (((s as any).healthmax ?? 0)/5);
      (s as any).pcs_stam = ((s as any).stammax ?? 0);
      if (((s as any).sauna_daystart ?? 0) !== ((s as any).daystart ?? 0)) {
        (s as any).sauna_daystart = ((s as any).daystart ?? 0);
        (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) + (Math.floor(Math.random() * 3) + 2);
        (s as any).pcs_willpwr = ((s as any).pcs_willpwr ?? 0) + (5);
      }
      (s as any).pcs_mana = (((s as any).pcs_intel ?? 0)*((s as any).pcs_magik ?? 0)) + ((s as any).pcs_magik ?? 0)*100 + ((s as any).pcs_vital ?? 0)*10 + ((s as any).rikudo ?? 0);
      qspCall(s, 'stat', '');
      scene.img('images/locations/city/shared/sauna/sau.jpg');
      scene.text('You spend an hour relaxing in the heat of the sauna before having a cool shower and dressing. You feel revitalised.');
      scene.actions([
        { label: 'Leave', goto: ['city_sauna', ''] },
      ]);
    }
    scene.actions([
      { label: 'Stay [+$func(\'money\', \'get_cost_string\', 2000)]' }, // TODO-QSP: empty action body
    ]);
  }
  scene.actions([
    { label: 'Leave', goto: ['city_sauna', ''] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'sauna2':
      enterSauna2(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const city_sauna: LocationDef = {
  name: 'city_sauna',
  title: 'Sauna',
  region: 'city',
  locationType: 'private',
  description: ['A luxurious high quality public sauna built a long time ago. The sauna houses separate changing rooms and shower facilities for men and women.'],
  enter: enter,
};
