import { qspCall, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterClassmates(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) < 20) {
    qspGoto(s, 'pav_disco', '');
  }
  (s as any).loc_arg = '';
  (s as any).loc = 'pav_disco';
  (s as any).location_type = 'public_indoors';
  (s as any).menu_loc = 'pav_disco_classmates';
  (s as any).menu_arg = 'classmates';
  qspCall(s, 'anushka_konstantinov_schedule', '');
  qspCall(s, 'arkadi_fyodorov_schedule', '');
  qspCall(s, 'radomir_popov_schedule', '');
  qspCall(s, 'valentin_bogdanov_schedule', '');
  qspCall(s, 'vicky_meynold_schedule', '');
  qspCall(s, 'katja_meynold_schedule', '');
  qspCall(s, 'albina_schedule', '');
  if (((s as any).sound_settings ?? 0)?.['music_off'] === 0) {
    (s as any).track_loop = 'sound/komb.mp3';
    (s as any).volume = 80;
    (s as any).music_loop = 1;
  }
  if (((s as any).atdisco ?? 0)?.['day'] !== ((s as any).daystart ?? 0)  ||  ((s as any).atdisco ?? 0)?.['hour'] !== ((s as any).hour ?? 0)) {
    ((s as any).atdisco = (s as any).atdisco ?? {})['day'] = ((s as any).daystart ?? 0);
    ((s as any).atdisco = (s as any).atdisco ?? {})['hour'] = ((s as any).hour ?? 0);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAtdisco(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  scene.text('<center><b>Disco</b></center>');
  scene.text('Most of the cool kids and jocks are gathered around some tables and couches near the dance floor while the others dance. Some of the other students are hanging around near them or are out dancing.');
  (s as any).table_disco = '<center><table>';
  (s as any).i = 1;
  (s as any).i2 = 0;
  // TODO-QSP: :discopop_loop
  if ((((s as any).npc_grupTipe ?? 0)['A' + (((s as any).i ?? 0))] === 1  ||  ((s as any).npc_nickname ?? 0)['A' + (((s as any).i ?? 0))] === 'Natasha')  &&  ((s as any).discoenable ?? 0)['A' + (((s as any).i ?? 0))] === 1  &&  ((s as any).discobloc ?? 0)['A' + (((s as any).i ?? 0))] !== ((s as any).daystart ?? 0)) {
    if ((!((s as any).i2 ?? 0))) {
      // TODO-QSP: $table_disco += '<tr>'
    }
    (s as any).i2 = ((s as any).i2 ?? 0) + (1);
    if (((s as any).theme ?? 0)?.['is_dark'] === 1) {
      // TODO-QSP: $table_disco += '<td><table bgcolor=#404040>'
    } else {
      // TODO-QSP: $table_disco += '<td><table bgcolor=#FFF8DC>'
    }
    // TODO-QSP: $table_disco += '<tr><td align=center><a href="exec: i = <<i>> & gt ''pav_disco_classmates'', ''cool...
    if (((s as any).i2 ?? 0) % 6 === 0) {
      (s as any).i2 = 0;
      // TODO-QSP: $table_disco += '</tr>'
    }
  }
  (s as any).i = ((s as any).i ?? 0) + (1);
  if (((s as any).i ?? 0) <= ((s as any).aarraynumber ?? 0)) {
    // TODO-QSP: jump 'discopop_loop'
  }
  (s as any).i = 1;
  // TODO-QSP: :discojock_loop
  if (((s as any).npc_grupTipe ?? 0)['A' + (((s as any).i ?? 0))] === 2  &&  ((s as any).discoenable ?? 0)['A' + (((s as any).i ?? 0))] === 1  &&  ((s as any).discobloc ?? 0)['A' + (((s as any).i ?? 0))] !== ((s as any).daystart ?? 0)) {
    if ((!((s as any).i2 ?? 0))) {
      // TODO-QSP: $table_disco += '<tr>'
    }
    (s as any).i2 = ((s as any).i2 ?? 0) + (1);
    if (((s as any).theme ?? 0)?.['is_dark'] === 1) {
      // TODO-QSP: $table_disco += '<td><table bgcolor=#404040>'
    } else {
      // TODO-QSP: $table_disco += '<td><table bgcolor=#FFF8DC>'
    }
    // TODO-QSP: $table_disco += '<tr><td align=center><a href="exec: i = <<i>> & gt ''pav_disco_classmates'', ''jock...
    if (((s as any).i2 ?? 0) % 6 === 0) {
      (s as any).i2 = 0;
      // TODO-QSP: $table_disco += '</tr>'
    }
  }
  (s as any).i = ((s as any).i ?? 0) + (1);
  if (((s as any).i ?? 0) <= ((s as any).aarraynumber ?? 0)) {
    // TODO-QSP: jump 'discojock_loop'
  }
  if (((s as any).i2 ?? 0) % 6 !== 0) {
    // TODO-QSP: :disco_loopi21
    (s as any).i2 = ((s as any).i2 ?? 0) + (1);
    // TODO-QSP: $table_disco += '<td></td>'
    if (((s as any).i2 ?? 0) % 6 === 0) {
      (s as any).i2 = 0;
      // TODO-QSP: $table_disco += '</tr>'
    } else {
      // TODO-QSP: jump 'disco_loopi21'
    }
  }
  // TODO-QSP: $table_disco += '</table></center>'
  // TODO-QSP: $table_disco
  if (((s as any).week ?? 0) === 6  &&  ((s as any).hour ?? 0) >= 20  &&  ((s as any).hour ?? 0) < 23  &&  ((s as any).day ?? 0) >= 15  &&  ((s as any).day ?? 0) <= 21  &&  (((s as any).kanikuli ?? 0) < 6  ||  ((s as any).gschoolVars ?? 0)?.['school_diploma'] !== 0)) {
    if (((s as any).grupTipe ?? 0) === 4) {
      scene.text('You check where the gopniks normally hang out and you don\'t see any of them. They must be at fight night tonight.');
    } else {
      scene.text('You check where the gopniks normally hang out and you don\'t see any of them. You wonder where they might be.');
    }
    (s as any).table_disco = '<center><table>';
  } else {
    scene.text('The gopniks are lounging in the darkest corner of the hall. They\'re mostly keeping to themselves, but a few of them are out dancing.');
    (s as any).table_disco = '<center><table>';
    (s as any).i = 1;
    // TODO-QSP: :discogop_loop
    if (((s as any).npc_grupTipe ?? 0)['A' + (((s as any).i ?? 0))] === 4  &&  ((s as any).discoenable ?? 0)['A' + (((s as any).i ?? 0))] === 1  &&  ((s as any).discobloc ?? 0)['A' + (((s as any).i ?? 0))] !== ((s as any).daystart ?? 0)) {
      (s as any).loopname = ((s as any).npc_nickname ?? 0)?.['A' + String(((s as any).i ?? 0))];
      (s as any).loopname = (String(((s as any).loopname ?? 0)).toLowerCase());
      if ((!((s as any).i2 ?? 0))) {
        // TODO-QSP: $table_disco += '<tr>'
      }
      (s as any).i2 = ((s as any).i2 ?? 0) + (1);
      if (((s as any).theme ?? 0)?.['is_dark'] === 1) {
        // TODO-QSP: $table_disco += '<td><table bgcolor=#404040>'
      } else {
        // TODO-QSP: $table_disco += '<td><table bgcolor=#FFF8DC>'
      }
      // TODO-QSP: $table_disco += '<tr><td align=center><a href="exec: i = <<i>> & gt ''pav_disco_classmates'', ''gop_...
      if (((s as any).i2 ?? 0) % 6 === 0) {
        (s as any).i2 = 0;
        // TODO-QSP: $table_disco += '</tr>'
      }
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= ((s as any).aarraynumber ?? 0)) {
      // TODO-QSP: jump 'discogop_loop'
    }
    if (((s as any).i2 ?? 0) % 6 !== 0) {
      // TODO-QSP: :disco_loopi23
      (s as any).i2 = ((s as any).i2 ?? 0) + (1);
      // TODO-QSP: $table_disco += '<td></td>'
      if (((s as any).i2 ?? 0) % 6 === 0) {
        (s as any).i2 = 0;
        // TODO-QSP: $table_disco += '</tr>'
      } else {
        // TODO-QSP: jump 'disco_loopi23'
      }
    }
  }
  if (((s as any).soniaQW ?? 0)?.['slut'] > 0  &&  ((s as any).discoenable ?? 0)?.['A25'] === 1  &&  ((s as any).discobloc ?? 0)?.['A25'] !== ((s as any).daystart ?? 0)  &&  ((s as any).soniaQW ?? 0)?.['hate'] < 1  &&  (((s as any).soniaQW ?? 0)?.['fallenangel'] < 1  ||  ((s as any).daystart ?? 0) > ((s as any).soniaQW ?? 0)?.['fallday'] + 7)) {
    if (((s as any).week ?? 0) === 6  &&  ((s as any).hour ?? 0) >= 20  &&  ((s as any).hour ?? 0) < 23  &&  ((s as any).day ?? 0) >= 15  &&  ((s as any).day ?? 0) <= 21  &&  (((s as any).kanikuli ?? 0) < 6  ||  ((s as any).gschoolVars ?? 0)?.['school_diploma'] !== 0)) {
      (s as any).table_disco = '<center><table>';
    }
    if (((s as any).theme ?? 0)?.['is_dark'] === 1) {
      // TODO-QSP: $table_disco += '<tr><td><table bgcolor=#404040>'
    } else {
      // TODO-QSP: $table_disco += '<tr><td><table bgcolor=#FFF8DC>'
    }
    // TODO-QSP: $table_disco += '<tr><td align=center><a href="exec:gt ''pav_disco_coolkids'', ''sonia_outcast'' "><...
  }
  // TODO-QSP: $table_disco += '</table></center>'
  // TODO-QSP: $table_disco
  if (((s as any).hour ?? 0) >= 21  &&  ((s as any).hour ?? 0) < 23  &&  ((s as any).week ?? 0)===5) {
    scene.text('Coach Mikhail Nikolayevich stands at the entrance of the hall.');
    (s as any).table_disco = '<center><table>';
    if (((s as any).theme ?? 0)?.['is_dark'] === 1) {
      // TODO-QSP: $table_disco += '<tr><td><table bgcolor=#404040>'
    } else {
      // TODO-QSP: $table_disco += '<tr><td><table bgcolor=#FFF8DC>'
    }
    // TODO-QSP: $table_disco += '<tr><td align=center><a href="exec: gt ''pav_disco_classmates'', ''coach''"><img he...
    // TODO-QSP: $table_disco += '</table></center>'
    // TODO-QSP: $table_disco
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterJocksList(s: GameState, scene: SceneBuilder): void {
  (s as any).listname = ((s as any).npc_nickname ?? 0)?.['A' + String(((s as any).i ?? 0))];
  (s as any).listname = (String(((s as any).listname ?? 0)).toLowerCase());
  qspGoto(s, 'pav_disco_jocks', ((s as any).listname ?? ''));
  // TODO-QSP: end
  scene.build();
}

function enterCoolList(s: GameState, scene: SceneBuilder): void {
  (s as any).listname = ((s as any).npc_nickname ?? 0)?.['A' + String(((s as any).i ?? 0))];
  (s as any).listname = (String(((s as any).listname ?? 0)).toLowerCase());
  qspGoto(s, 'pav_disco_coolkids', ((s as any).listname ?? ''));
  // TODO-QSP: end
  scene.build();
}

function enterGopList(s: GameState, scene: SceneBuilder): void {
  (s as any).listname = ((s as any).npc_nickname ?? 0)?.['A' + String(((s as any).i ?? 0))];
  (s as any).listname = (String(((s as any).listname ?? 0)).toLowerCase());
  qspGoto(s, 'pav_disco_gopniks', ((s as any).listname ?? ''));
  // TODO-QSP: end
  scene.build();
}

function enterAtdisco(s: GameState, scene: SceneBuilder): void {
  if (((s as any).IgorQW ?? 0)?.['DimaNos_day'] === ((s as any).daystart ?? 0)) {
    ((s as any).discoenable = (s as any).discoenable ?? {})['A1'] = 0;
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 1]; enterAtdisco10(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).IgorQW ?? 0)?.['DimaNos_day'] === ((s as any).daystart ?? 0)) {
    ((s as any).discoenable = (s as any).discoenable ?? {})['A4'] = 0;
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 4]; enterAtdisco10(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 148]; enterAtdisco4(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 146]; enterAtdisco10(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 147]; enterAtdisco10(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).locat ?? 0)?.['Katja'] === 8) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 14]; enterAtdisco10(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    ((s as any).discoenable = (s as any).discoenable ?? {})['A14'] = 0;
  }
  if (((s as any).locat ?? 0)?.['Vicky'] === 14) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 15]; enterAtdisco10(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    ((s as any).discoenable = (s as any).discoenable ?? {})['A15'] = 0;
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 17]; enterAtdisco10(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 22]; enterAtdisco10(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 140]; enterAtdisco10(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).discoenable ?? 0)?.['A147'] === 1) {
    ((s as any).discoenable = (s as any).discoenable ?? {})['A139'] = 1;
  }
  if (((s as any).soniaQW ?? 0)?.['slut'] > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 25]; enterAtdisco4i(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 25]; enterAtdisco10(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).week ?? 0) === 5) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 149]; enterAtdisco3i(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 149]; enterAtdisco10(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).week ?? 0) === 5) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 5]; enterAtdisco3i(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 5]; enterAtdisco4(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).week ?? 0) === 5) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 8]; enterAtdisco3i(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 8]; enterAtdisco10(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 165]; enterAtdisco4(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).week ?? 0) === 5) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 13]; enterAtdisco3i(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 13]; enterAtdisco4(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).locat ?? 0)?.['A23'] === 5) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 23]; enterAtdisco10(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    ((s as any).discoenable = (s as any).discoenable ?? {})['A23'] = 0;
  }
  if (((s as any).week ?? 0) === 5) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 18]; enterAtdisco3i(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 18]; enterAtdisco4(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).week ?? 0) === 5) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 19]; enterAtdisco3i(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 19]; enterAtdisco4(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).week ?? 0) === 5) {
    ((s as any).discoenable = (s as any).discoenable ?? {})['A3'] = 0;
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 3]; enterAtdisco10i(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).week ?? 0) === 5) {
    ((s as any).discoenable = (s as any).discoenable ?? {})['A150'] = 0;
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 150]; enterAtdisco5i(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 16]; enterAtdisco3i(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 9]; enterAtdisco10(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).discoenable ?? 0)?.['A9'] === 1) {
    ((s as any).discoenable = (s as any).discoenable ?? {})['A10'] = 1;
  }
  if (((s as any).discoenable ?? 0)?.['A9'] === 1) {
    ((s as any).discoenable = (s as any).discoenable ?? {})['A11'] = 1;
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 157]; enterAtdisco4(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).locat ?? 0)?.['A154'] === 25) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 154]; enterAtdisco4(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    ((s as any).discoenable = (s as any).discoenable ?? {})['A154'] = 0;
  }
  if (((s as any).locat ?? 0)?.['A158'] === 25) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 158]; enterAtdisco4(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    ((s as any).discoenable = (s as any).discoenable ?? {})['A158'] = 0;
  }
  if (((s as any).locat ?? 0)?.['A156'] === 25) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 156]; enterAtdisco4(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    ((s as any).discoenable = (s as any).discoenable ?? {})['A156'] = 0;
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 185]; enterAtdisco4(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 155]; enterAtdisco10(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 20]; enterAtdisco4(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).discoenable ?? 0)?.['A20'] === 1) {
    ((s as any).discoenable = (s as any).discoenable ?? {})['A21'] = 1;
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 24]; enterAtdisco4(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).locat ?? 0)?.['A144'] === 25) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 144]; enterAtdisco4(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    ((s as any).discoenable = (s as any).discoenable ?? {})['A144'] = 0;
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 143]; enterAtdisco2(s, scene); (s as any).locArgs = __savedLocArgs; }
  ((s as any).discoenable = (s as any).discoenable ?? {})['A141'] = 0;
  ((s as any).discoenable = (s as any).discoenable ?? {})['A145'] = 0;
  // TODO-QSP: end
  scene.build();
}

function enterAtdisco2(s: GameState, scene: SceneBuilder): void {
  (s as any).i = (((s as any).args ?? 0)?.[1] ?? 0);
  if ((Math.floor(Math.random() * 2) + 1) !== 2) {
    ((s as any).discoenable = (s as any).discoenable ?? {})['A' + String(((s as any).i ?? 0))] = 1;
  } else {
    ((s as any).discoenable = (s as any).discoenable ?? {})['A' + String(((s as any).i ?? 0))] = 0;
  }
  // TODO-QSP: end
  scene.build();
}

function enterAtdisco3i(s: GameState, scene: SceneBuilder): void {
  (s as any).i = (((s as any).args ?? 0)?.[1] ?? 0);
  if ((Math.floor(Math.random() * 3) + 1) === 1) {
    ((s as any).discoenable = (s as any).discoenable ?? {})['A' + String(((s as any).i ?? 0))] = 1;
  } else {
    ((s as any).discoenable = (s as any).discoenable ?? {})['A' + String(((s as any).i ?? 0))] = 0;
  }
  // TODO-QSP: end
  scene.build();
}

function enterAtdisco4(s: GameState, scene: SceneBuilder): void {
  (s as any).i = (((s as any).args ?? 0)?.[1] ?? 0);
  if ((Math.floor(Math.random() * 4) + 1) !== 4) {
    ((s as any).discoenable = (s as any).discoenable ?? {})['A' + String(((s as any).i ?? 0))] = 1;
  } else {
    ((s as any).discoenable = (s as any).discoenable ?? {})['A' + String(((s as any).i ?? 0))] = 0;
  }
  // TODO-QSP: end
  scene.build();
}

function enterAtdisco4i(s: GameState, scene: SceneBuilder): void {
  (s as any).i = (((s as any).args ?? 0)?.[1] ?? 0);
  if ((Math.floor(Math.random() * 4) + 1) === 1) {
    ((s as any).discoenable = (s as any).discoenable ?? {})['A' + String(((s as any).i ?? 0))] = 1;
  } else {
    ((s as any).discoenable = (s as any).discoenable ?? {})['A' + String(((s as any).i ?? 0))] = 0;
  }
  // TODO-QSP: end
  scene.build();
}

function enterAtdisco5i(s: GameState, scene: SceneBuilder): void {
  (s as any).i = (((s as any).args ?? 0)?.[1] ?? 0);
  if ((Math.floor(Math.random() * 5) + 1) === 1) {
    ((s as any).discoenable = (s as any).discoenable ?? {})['A' + String(((s as any).i ?? 0))] = 1;
  } else {
    ((s as any).discoenable = (s as any).discoenable ?? {})['A' + String(((s as any).i ?? 0))] = 0;
  }
  // TODO-QSP: end
  scene.build();
}

function enterAtdisco10(s: GameState, scene: SceneBuilder): void {
  (s as any).i = (((s as any).args ?? 0)?.[1] ?? 0);
  if ((Math.floor(Math.random() * 10) + 1) !== 10) {
    ((s as any).discoenable = (s as any).discoenable ?? {})['A' + String(((s as any).i ?? 0))] = 1;
  } else {
    ((s as any).discoenable = (s as any).discoenable ?? {})['A' + String(((s as any).i ?? 0))] = 0;
  }
  // TODO-QSP: end
  scene.build();
}

function enterAtdisco10i(s: GameState, scene: SceneBuilder): void {
  (s as any).i = (((s as any).args ?? 0)?.[1] ?? 0);
  if ((Math.floor(Math.random() * 10) + 1) === 1) {
    ((s as any).discoenable = (s as any).discoenable ?? {})['A' + String(((s as any).i ?? 0))] = 1;
  } else {
    ((s as any).discoenable = (s as any).discoenable ?? {})['A' + String(((s as any).i ?? 0))] = 0;
  }
  // TODO-QSP: end
  scene.build();
}

function enterCoach(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  if (((s as any).vballVars ?? 0)?.['on_team'] > 0) {
    if (((s as any).vballVars ?? 0)?.['coachsex'] >= 4) {
      qspGoto(s, 'pav_disco_classmates', 'coach_sex');
    } else {
      scene.img('images/characters/pavlovsk/school/teacher/mikhail/volleytrener2.jpg');
      scene.text('You go up to Mikhail Nikolayevich and politely say hello.');
      // TODO-QSP: dynamic text: "<<$pcs_lastname>>, I was told you were here... Are you really that stupid? Ther...
      scene.text(`"${((s as any).pcs_lastname ?? '')}, I was told you were here... Are you really that stupid? There's a game tomorrow!"`);
      scene.text('"I... err... was... erm... dropping off a book for a friend," you mumble.');
      if (((s as any).alko ?? 0) > 1) {
        scene.text('"You\'ve been drinking! If you can\'t even take the team seriously, then you\'re not playing tomorrow."');
        qspCall(s, 'npc_relationship', 'modify', 'A69', (-20));
        ((s as any).vballVars = (s as any).vballVars ?? {})['disco_drunk'] = ((s as any).daystart ?? 0);
      }
      scene.text('"Come on, I\'d better take you home," the coach says. Looks like you are done at the disco for tonight.');
      scene.actions([
        { label: 'Go with the coach', handler: (st: GameState) => {
    (st as any).music_loop = 0;
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/gorodok.jpg');
    scene.text('You walk through town. As you near your apartment, the coach stops.');
    scene.actions([
      { label: 'He stops near your apartment', goto: ['volley_coach', 'coach_walk_home'] },
    ]);
  } },
      ]);
    }
  } else {
    scene.img('images/characters/shared/headshots_main/big69.jpg');
    scene.text('You go up to Mikhail Nikolayevich and politely say hello.');
    if (((s as any).pcs_vball ?? 0) < 20) {
      scene.text('Mikhail turns and looks at you. "Uh... have we met?" He doesn\'t seem to recognize you. "Ah, I\'ve seen you at school. You\'re in pretty good shape — you should come to volleyball training."');
    } else {
      if (((s as any).pcs_vball ?? 0) < 35) {
        // TODO-QSP: dynamic text: The coach looks at you with mild condescension. "<<$pcs_lastname>>, well done. Y...
        scene.text(`The coach looks at you with mild condescension. "${((s as any).pcs_lastname ?? '')}, well done. You're getting a hang of the basics. You don't really belong here though... although, what do I know?"`);
      } else {
        if (((s as any).pcs_vball ?? 0) < 60) {
          // TODO-QSP: dynamic text: The coach looks at you disapprovingly. "<<$pcs_lastname>>, you were pretty good ...
          scene.text(`The coach looks at you disapprovingly. "${((s as any).pcs_lastname ?? '')}, you were pretty good in training, but places like this set back your development. You should go home."`);
        } else {
          if (((s as any).pcs_vball ?? 0) < 80) {
            scene.text('The coach looks at you with condemnation. "What are you doing here?"');
            scene.text('"What are you doing here?" You turn the question back onto him.');
            // TODO-QSP: dynamic text: "<<$pcs_lastname>>, don''t piss me off. What I do is my business, and what you a...
            scene.text(`"${((s as any).pcs_lastname ?? '')}, don't piss me off. What I do is my business, and what you are doing here is also my business."`);
            if (((s as any).pcs_horny ?? 0) > 79) {
              ((s as any).vballVars = (s as any).vballVars ?? {})['coach_lust'] = ((s as any).vballVars['coach_lust'] ?? 0) + (1);
              scene.text('"Is that the truth, Mr. Nikolayevich? Are you here because of me?" You move closer to the coach and flutter your eyes at him.');
              scene.text('"I meant as your coach, and don\'t think you can win just by fluttering your eyes. Want to impress me? Work out, and no partying."');
            } else {
              scene.text('"As your coach," he adds with a slight blush.');
            }
          } else {
            // TODO-QSP: dynamic text: The coach looks at you with condemnation. "<<$pcs_lastname>>, you here again? Th...
            scene.text(`The coach looks at you with condemnation. "${((s as any).pcs_lastname ?? '')}, you here again? This is not the place for someone who wants to be on the team."`);
            scene.text('"Mr. Nikolayevich, you never said anything about not going out on a Friday."');
            // TODO-QSP: dynamic text: "<<$pcs_lastname>>, are you thick? When does the team play?"
            scene.text(`"${((s as any).pcs_lastname ?? '')}, are you thick? When does the team play?"`);
            scene.text('"Saturday," you respond, sheepishly.');
            scene.text('"So on Friday I expect my candidates to be home getting some sleep, not hanging out here. Clear? You have some skill — sort out your attitude and you might yet make the team."');
          }
        }
      }
    }
    scene.actions([
      { label: 'Move away', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCoachSex(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/teacher/mikhail/volleytrener4.jpg');
  // TODO-QSP: dynamic text: "<<$pcs_lastname>>, let''s find somewhere a bit more private." You are about to ...
  scene.text(`"${((s as any).pcs_lastname ?? '')}, let's find somewhere a bit more private." You are about to say there is nowhere quiet when the coach smiles and says, "Follow me."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Follow him', handler: (st: GameState) => {
    if ((!(Math.floor(Math.random() * 3) + 0))) {
      if (((st as any).pcs_horny ?? 0) > 80) {
        scene.img('images/locations/pavlovsk/community/gym/volley/sex/voitrensexdisco1.mp4');
        scene.text('He takes you down a side corridor to one of the bathrooms, holding the door for you before following you inside.');
        scene.actions([
          { label: 'Pull up your skirt', handler: (st: GameState) => {
    qspCall(st, 'npcStat', 'A69');
    qspCall(st, 'npc_relationship', 'modify', 'A69', 5);
    if (((st as any).pantyworntype ?? 0) !== 'none') {
      scene.img('images/locations/pavlovsk/community/gym/volley/sex/voitrensexdisco2.mp4');
      scene.text('You sit on one of the toilets, pulling your skirt up and spreading your legs. Watching your display for a moment, he pulls you to your feet and tugs your panties down around your ankles.');
    } else {
      scene.img('images/locations/pavlovsk/community/gym/volley/sex/voitrensexdisco3.jpg');
      scene.text('You pull up your skirt, showing him your bare, wet pussy. The coach pulls out his already hard cock and begins stroking it slowly as he watches you.');
    }
    qspCall(st, 'arousal', 'foreplay', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Bend over', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay', 3);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/community/gym/volley/sex/voitrensexdisco4.mp4');
    scene.text('As you bend over and pull up your skirt, he grabs your hip and guides himself, rubbing against your pussy then slowly dragging up to your asshole, leaving a slick trail.');
    scene.text('He pushes the head of his cock gently against your ass. You wince at the stretch. He rubs your back. "Take a breath and relax. It will feel better."');
    scene.actions([
      { label: 'Let him', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/gym/volley/sex/voitrensexdisco5.mp4');
    qspCall(st, 'dinSex', 'boy_wants_anal', 'lubri');
    qspCall(st, 'arousal', 'auto_lube', 'anal');
    scene.text('You take a slow breath and do your best to relax as he begins working into your ass with short, careful strokes. In time the discomfort gives way to a warm, full sensation and you find yourself moaning softly.');
    scene.text('He picks up the pace, pounding steadily deeper.');
    qspCall(st, 'arousal', 'anal', 10);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/gym/volley/sex/voitrensexdisco6.mp4');
    scene.text('He pulls out suddenly and you feel a warm burst on your ass. With a low, satisfied exhale he tucks himself away and waits while you clean up.');
    qspCall(st, 'arousal', 'anal', 5);
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'cum_call', 'butt', ((st as any).boy ?? 0), 1);
    if (((st as any).vballVars ?? 0)?.['coachsex'] < 5) {
      ((st as any).vballVars = (st as any).vballVars ?? {})['coachsex'] = 5;
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Walk home together', handler: (st: GameState) => {
    (st as any).music_loop = 0;
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/gorodok.jpg');
    scene.text('You walk through town together in comfortable silence.');
    scene.actions([
      { label: 'He stops near your apartment', goto: ['volley_coach', 'coach_walk_home'] },
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
        scene.img('images/characters/pavlovsk/school/teacher/mikhail/volleytrener4.jpg');
        scene.text('"This isn\'t exactly secluded, Coach." You turn away. He sighs but can\'t stop himself smiling as he watches you go. "Fair enough. Let me walk you home then."');
        scene.actions([
          { label: 'Go with the coach', handler: (st: GameState) => {
    (st as any).music_loop = 0;
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/gorodok.jpg');
    scene.text('You walk home.');
    scene.actions([
      { label: 'He stops near your apartment', goto: ['volley_coach', 'coach_walk_home'] },
    ]);
  } },
        ]);
      }
    } else {
      scene.img('images/characters/pavlovsk/school/teacher/mikhail/volleytrener4.jpg');
      scene.text('Having brought you to the bathroom, the coach opens the door to find it packed with students. He looks genuinely put out. "Now that is a pity."');
      scene.text('He offers to walk you home instead. You don\'t think he\'ll take no for an answer, so you agree.');
      (st as any).music_loop = 0;
      (st as any).minut = ((st as any).minut ?? 0) + 20;
      qspCall(st, 'stat', '');
      scene.img('images/locations/pavlovsk/gorodok.jpg');
      scene.text('You walk through town. Near your apartment, the coach stops.');
      scene.actions([
        { label: 'He stops near your apartment', goto: ['volley_coach', 'coach_walk_home'] },
      ]);
    }
  } },
    { label: 'Make an excuse and leave', goto: ['pav_disco_classmates', 'classmates'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'classmates':
      enterClassmates(s, scene);
      break;
    case 'jocks_list':
      enterJocksList(s, scene);
      break;
    case 'cool_list':
      enterCoolList(s, scene);
      break;
    case 'gop_list':
      enterGopList(s, scene);
      break;
    case 'atdisco':
      enterAtdisco(s, scene);
      break;
    case 'atdisco2':
      enterAtdisco2(s, scene);
      break;
    case 'atdisco3i':
      enterAtdisco3i(s, scene);
      break;
    case 'atdisco4':
      enterAtdisco4(s, scene);
      break;
    case 'atdisco4i':
      enterAtdisco4i(s, scene);
      break;
    case 'atdisco5i':
      enterAtdisco5i(s, scene);
      break;
    case 'atdisco10':
      enterAtdisco10(s, scene);
      break;
    case 'atdisco10i':
      enterAtdisco10i(s, scene);
      break;
    case 'coach':
      enterCoach(s, scene);
      break;
    case 'coach_sex':
      enterCoachSex(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pav_disco_classmates: LocationDef = {
  name: 'pav_disco_classmates',
  title: 'Disco',
  region: 'pavlovsk',
  locationType: 'public_indoors',
  enter: enter,
};
