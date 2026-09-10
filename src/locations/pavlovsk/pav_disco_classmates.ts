import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterClassmates(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) < 20) {
    scene.actions([{ label: 'Continue', goto: ['pav_disco', ''] }]);
  }
  qspCall(s, 'anushka_konstantinov_schedule', '');
  qspCall(s, 'arkadi_fyodorov_schedule', '');
  qspCall(s, 'radomir_popov_schedule', '');
  qspCall(s, 'valentin_bogdanov_schedule', '');
  qspCall(s, 'vicky_meynold_schedule', '');
  qspCall(s, 'katja_meynold_schedule', '');
  qspCall(s, 'albina_schedule', '');
  if (((s as any).sound_settings ?? 0)?.['music_off'] === 0) {
    (s as any).volume = 80;
    (s as any).music_loop = 1;
  }
  if (((s as any).atdisco ?? 0)?.['day'] !== ((s as any).daystart ?? 0)  ||  ((s as any).atdisco ?? 0)?.['hour'] !== ((s as any).hour ?? 0)) {
    (s as any).atdisco['day'] = ((s as any).daystart ?? 0);
    (s as any).atdisco['hour'] = ((s as any).hour ?? 0);
    qspCall(s, 'pav_disco_classmates', 'atdisco');
  }
  scene.text('<center><b>Disco</b></center>');
  scene.text('Most of the cool kids and jocks are gathered around some tables and couches near the dance floor while the others dance. Some of the other students are hanging around near them or are out dancing.');
  (s as any).i = 1;
  (s as any).i2 = 0;
  // TODO-QSP: :discopop_loop
  if ((((s as any).npc_grupTipe ?? 0)?.['A' + String(((s as any).i ?? 0))] === 1  ||  ((s as any).npc_nickname ?? 0)?.['A' + String(((s as any).i ?? 0))] === 'Natasha')  &&  ((s as any).discoenable ?? 0)?.['A' + String(((s as any).i ?? 0))] === 1  &&  ((s as any).discobloc ?? 0)?.['A' + String(((s as any).i ?? 0))] !== ((s as any).daystart ?? 0)) {
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
  if (((s as any).npc_grupTipe ?? 0)?.['A' + String(((s as any).i ?? 0))] === 2  &&  ((s as any).discoenable ?? 0)?.['A' + String(((s as any).i ?? 0))] === 1  &&  ((s as any).discobloc ?? 0)?.['A' + String(((s as any).i ?? 0))] !== ((s as any).daystart ?? 0)) {
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
  } else {
    scene.text('The gopniks are lounging in the darkest corner of the hall. They\'re mostly keeping to themselves, but a few of them are out dancing.');
    (s as any).i = 1;
    // TODO-QSP: :discogop_loop
    if (((s as any).npc_grupTipe ?? 0)?.['A' + String(((s as any).i ?? 0))] === 4  &&  ((s as any).discoenable ?? 0)?.['A' + String(((s as any).i ?? 0))] === 1  &&  ((s as any).discobloc ?? 0)?.['A' + String(((s as any).i ?? 0))] !== ((s as any).daystart ?? 0)) {
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
    if (((s as any).theme ?? 0)?.['is_dark'] === 1) {
      // TODO-QSP: $table_disco += '<tr><td><table bgcolor=#404040>'
    } else {
      // TODO-QSP: $table_disco += '<tr><td><table bgcolor=#FFF8DC>'
    }
    // TODO-QSP: $table_disco += '<tr><td align=center><a href="exec: gt ''pav_disco_classmates'', ''coach''"><img he...
    // TODO-QSP: $table_disco += '</table></center>'
    // TODO-QSP: $table_disco
  }
  scene.actions([
    { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterJocksList(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'pav_disco_jocks', $listname
  scene.build();
}

function enterCoolList(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'pav_disco_coolkids', $listname
  scene.build();
}

function enterGopList(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'pav_disco_gopniks', $listname
  scene.build();
}

function enterAtdisco(s: GameState, scene: SceneBuilder): void {
  if (((s as any).IgorQW ?? 0)?.['DimaNos_day'] === ((s as any).daystart ?? 0)) {
    (s as any).discoenable['A1'] = 0;
  } else {
    qspCall(s, 'pav_disco_classmates', 'atdisco10', 1);
  }
  if (((s as any).IgorQW ?? 0)?.['DimaNos_day'] === ((s as any).daystart ?? 0)) {
    (s as any).discoenable['A4'] = 0;
  } else {
    qspCall(s, 'pav_disco_classmates', 'atdisco10', 4);
  }
  qspCall(s, 'pav_disco_classmates', 'atdisco4', 148);
  qspCall(s, 'pav_disco_classmates', 'atdisco10', 146);
  qspCall(s, 'pav_disco_classmates', 'atdisco10', 147);
  if (((s as any).locat ?? 0)?.['Katja'] === 8) {
    qspCall(s, 'pav_disco_classmates', 'atdisco10', 14);
  } else {
    (s as any).discoenable['A14'] = 0;
  }
  if (((s as any).locat ?? 0)?.['Vicky'] === 14) {
    qspCall(s, 'pav_disco_classmates', 'atdisco10', 15);
  } else {
    (s as any).discoenable['A15'] = 0;
  }
  qspCall(s, 'pav_disco_classmates', 'atdisco10', 17);
  qspCall(s, 'pav_disco_classmates', 'atdisco10', 22);
  qspCall(s, 'pav_disco_classmates', 'atdisco10', 140);
  if (((s as any).discoenable ?? 0)?.['A147'] === 1) {
    (s as any).discoenable['A139'] = 1;
  }
  if (((s as any).soniaQW ?? 0)?.['slut'] > 0) {
    qspCall(s, 'pav_disco_classmates', 'atdisco4i', 25);
  } else {
    qspCall(s, 'pav_disco_classmates', 'atdisco10', 25);
  }
  if (((s as any).week ?? 0) === 5) {
    qspCall(s, 'pav_disco_classmates', 'atdisco3i', 149);
  } else {
    qspCall(s, 'pav_disco_classmates', 'atdisco10', 149);
  }
  if (((s as any).week ?? 0) === 5) {
    qspCall(s, 'pav_disco_classmates', 'atdisco3i', 5);
  } else {
    qspCall(s, 'pav_disco_classmates', 'atdisco4', 5);
  }
  if (((s as any).week ?? 0) === 5) {
    qspCall(s, 'pav_disco_classmates', 'atdisco3i', 8);
  } else {
    qspCall(s, 'pav_disco_classmates', 'atdisco10', 8);
  }
  qspCall(s, 'pav_disco_classmates', 'atdisco4', 165);
  if (((s as any).week ?? 0) === 5) {
    qspCall(s, 'pav_disco_classmates', 'atdisco3i', 13);
  } else {
    qspCall(s, 'pav_disco_classmates', 'atdisco4', 13);
  }
  if (((s as any).locat ?? 0)?.['A23'] === 5) {
    qspCall(s, 'pav_disco_classmates', 'atdisco10', 23);
  } else {
    (s as any).discoenable['A23'] = 0;
  }
  if (((s as any).week ?? 0) === 5) {
    qspCall(s, 'pav_disco_classmates', 'atdisco3i', 18);
  } else {
    qspCall(s, 'pav_disco_classmates', 'atdisco4', 18);
  }
  if (((s as any).week ?? 0) === 5) {
    qspCall(s, 'pav_disco_classmates', 'atdisco3i', 19);
  } else {
    qspCall(s, 'pav_disco_classmates', 'atdisco4', 19);
  }
  if (((s as any).week ?? 0) === 5) {
    (s as any).discoenable['A3'] = 0;
  } else {
    qspCall(s, 'pav_disco_classmates', 'atdisco10i', 3);
  }
  if (((s as any).week ?? 0) === 5) {
    (s as any).discoenable['A150'] = 0;
  } else {
    qspCall(s, 'pav_disco_classmates', 'atdisco5i', 150);
  }
  qspCall(s, 'pav_disco_classmates', 'atdisco3i', 16);
  qspCall(s, 'pav_disco_classmates', 'atdisco10', 9);
  if (((s as any).discoenable ?? 0)?.['A9'] === 1) {
    (s as any).discoenable['A10'] = 1;
  }
  if (((s as any).discoenable ?? 0)?.['A9'] === 1) {
    (s as any).discoenable['A11'] = 1;
  }
  qspCall(s, 'pav_disco_classmates', 'atdisco4', 157);
  if (((s as any).locat ?? 0)?.['A154'] === 25) {
    qspCall(s, 'pav_disco_classmates', 'atdisco4', 154);
  } else {
    (s as any).discoenable['A154'] = 0;
  }
  if (((s as any).locat ?? 0)?.['A158'] === 25) {
    qspCall(s, 'pav_disco_classmates', 'atdisco4', 158);
  } else {
    (s as any).discoenable['A158'] = 0;
  }
  if (((s as any).locat ?? 0)?.['A156'] === 25) {
    qspCall(s, 'pav_disco_classmates', 'atdisco4', 156);
  } else {
    (s as any).discoenable['A156'] = 0;
  }
  qspCall(s, 'pav_disco_classmates', 'atdisco4', 185);
  qspCall(s, 'pav_disco_classmates', 'atdisco10', 155);
  qspCall(s, 'pav_disco_classmates', 'atdisco4', 20);
  if (((s as any).discoenable ?? 0)?.['A20'] === 1) {
    (s as any).discoenable['A21'] = 1;
  }
  qspCall(s, 'pav_disco_classmates', 'atdisco4', 24);
  if (((s as any).locat ?? 0)?.['A144'] === 25) {
    qspCall(s, 'pav_disco_classmates', 'atdisco4', 144);
  } else {
    (s as any).discoenable['A144'] = 0;
  }
  qspCall(s, 'pav_disco_classmates', 'atdisco2', 143);
  (s as any).discoenable['A141'] = 0;
  (s as any).discoenable['A145'] = 0;
  scene.build();
}

function enterAtdisco2(s: GameState, scene: SceneBuilder): void {
  (s as any).i = qspUntranslated(s, "args[1]", { location: "pav_disco_classmates" });
  if ((Math.floor(Math.random() * 2) + 1) !== 2) {
    (s as any).discoenable['A' + String((s as any).i || '') + ''] = 1;
  } else {
    (s as any).discoenable['A' + String((s as any).i || '') + ''] = 0;
  }
  scene.build();
}

function enterAtdisco3i(s: GameState, scene: SceneBuilder): void {
  (s as any).i = qspUntranslated(s, "args[1]", { location: "pav_disco_classmates" });
  if ((Math.floor(Math.random() * 3) + 1) === 1) {
    (s as any).discoenable['A' + String((s as any).i || '') + ''] = 1;
  } else {
    (s as any).discoenable['A' + String((s as any).i || '') + ''] = 0;
  }
  scene.build();
}

function enterAtdisco4(s: GameState, scene: SceneBuilder): void {
  (s as any).i = qspUntranslated(s, "args[1]", { location: "pav_disco_classmates" });
  if ((Math.floor(Math.random() * 4) + 1) !== 4) {
    (s as any).discoenable['A' + String((s as any).i || '') + ''] = 1;
  } else {
    (s as any).discoenable['A' + String((s as any).i || '') + ''] = 0;
  }
  scene.build();
}

function enterAtdisco4i(s: GameState, scene: SceneBuilder): void {
  (s as any).i = qspUntranslated(s, "args[1]", { location: "pav_disco_classmates" });
  if ((Math.floor(Math.random() * 4) + 1) === 1) {
    (s as any).discoenable['A' + String((s as any).i || '') + ''] = 1;
  } else {
    (s as any).discoenable['A' + String((s as any).i || '') + ''] = 0;
  }
  scene.build();
}

function enterAtdisco5i(s: GameState, scene: SceneBuilder): void {
  (s as any).i = qspUntranslated(s, "args[1]", { location: "pav_disco_classmates" });
  if ((Math.floor(Math.random() * 5) + 1) === 1) {
    (s as any).discoenable['A' + String((s as any).i || '') + ''] = 1;
  } else {
    (s as any).discoenable['A' + String((s as any).i || '') + ''] = 0;
  }
  scene.build();
}

function enterAtdisco10(s: GameState, scene: SceneBuilder): void {
  (s as any).i = qspUntranslated(s, "args[1]", { location: "pav_disco_classmates" });
  if ((Math.floor(Math.random() * 10) + 1) !== 10) {
    (s as any).discoenable['A' + String((s as any).i || '') + ''] = 1;
  } else {
    (s as any).discoenable['A' + String((s as any).i || '') + ''] = 0;
  }
  scene.build();
}

function enterAtdisco10i(s: GameState, scene: SceneBuilder): void {
  (s as any).i = qspUntranslated(s, "args[1]", { location: "pav_disco_classmates" });
  if ((Math.floor(Math.random() * 10) + 1) === 1) {
    (s as any).discoenable['A' + String((s as any).i || '') + ''] = 1;
  } else {
    (s as any).discoenable['A' + String((s as any).i || '') + ''] = 0;
  }
  scene.build();
}

function enterCoach(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  if (((s as any).vballVars ?? 0)?.['on_team'] > 0) {
    if (((s as any).vballVars ?? 0)?.['coachsex'] >= 4) {
      scene.actions([{ label: 'Continue', goto: ['pav_disco_classmates', 'coach_sex'] }]);
    } else {
      scene.img('images/characters/pavlovsk/school/teacher/mikhail/volleytrener2.jpg');
      scene.text('You go up to Mikhail Nikolayevich and politely say hello.');
      // TODO-QSP: dynamic text: "<<$pcs_lastname>>, I was told you were here... Are you really that stupid? Ther...
      scene.text(`"${((s as any).pcs_lastname ?? 0)}, I was told you were here... Are you really that stupid? There's a game tomorrow!"`);
      scene.text('"I... err... was... erm... dropping off a book for a friend," you mumble.');
      if (((s as any).alko ?? 0) > 1) {
        scene.text('"You\'ve been drinking! If you can\'t even take the team seriously, then you\'re not playing tomorrow."');
        qspCall(s, 'npc_relationship', 'modify', 'A69', (-20));
        (s as any).vballVars['disco_drunk'] = ((s as any).daystart ?? 0);
      }
      scene.text('"Come on, I\'d better take you home," the coach says. Looks like you are done at the disco for tonight.');
      scene.actions([
        { label: 'Go with the coach', handler: (st: GameState) => {
    (s as any).music_loop = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    qspCall(s, 'stat', '');
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
      // TODO-QSP: dynamic text: The coach looks at you with mild condescension. "<<$pcs_lastname>>, well done. Y...
      scene.text(`The coach looks at you with mild condescension. "${((s as any).pcs_lastname ?? 0)}, well done. You're getting a hang of the basics. You don't really belong here though... although, what do I know?"`);
      if (((s as any).pcs_vball ?? 0) < 60) {
        // TODO-QSP: dynamic text: The coach looks at you disapprovingly. "<<$pcs_lastname>>, you were pretty good ...
        scene.text(`The coach looks at you disapprovingly. "${((s as any).pcs_lastname ?? 0)}, you were pretty good in training, but places like this set back your development. You should go home."`);
      } else {
        scene.text('The coach looks at you with condemnation. "What are you doing here?"');
        scene.text('"What are you doing here?" You turn the question back onto him.');
        // TODO-QSP: dynamic text: "<<$pcs_lastname>>, don't piss me off. What I do is my business, and what you ar...
        scene.text(`"${((s as any).pcs_lastname ?? 0)}, don't piss me off. What I do is my business, and what you are doing here is also my business."`);
        if (((s as any).pcs_horny ?? 0) > 79) {
          (s as any).vballVars['coach_lust'] = ((s as any).vballVars['coach_lust'] ?? 0) + (1);
          scene.text('"Is that the truth, Mr. Nikolayevich? Are you here because of me?" You move closer to the coach and flutter your eyes at him.');
          scene.text('"I meant as your coach, and don\'t think you can win just by fluttering your eyes. Want to impress me? Work out, and no partying."');
        } else {
          scene.text('"As your coach," he adds with a slight blush.');
        }
        // TODO-QSP: dynamic text: The coach looks at you with condemnation. "<<$pcs_lastname>>, you here again? Th...
        scene.text(`The coach looks at you with condemnation. "${((s as any).pcs_lastname ?? 0)}, you here again? This is not the place for someone who wants to be on the team."`);
        scene.text('"Mr. Nikolayevich, you never said anything about not going out on a Friday."');
        // TODO-QSP: dynamic text: "<<$pcs_lastname>>, are you thick? When does the team play?"
        scene.text(`"${((s as any).pcs_lastname ?? 0)}, are you thick? When does the team play?"`);
        scene.text('"Saturday," you respond, sheepishly.');
        scene.text('"So on Friday I expect my candidates to be home getting some sleep, not hanging out here. Clear? You have some skill — sort out your attitude and you might yet make the team."');
      }
      scene.actions([
        { label: 'Move away', goto: ['pav_disco_classmates', 'classmates'] },
      ]);
    }
  }
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
    default:
      enterClassmates(s, scene);
      break;
  }
}

export const pav_disco_classmates: LocationDef = {
  name: 'pav_disco_classmates',
  title: 'Disco',
  region: 'pavlovsk',
  locationType: 'public_indoors',
  description: ['Most of the cool kids and jocks are gathered around some tables and couches near the dance floor while the others dance. Some of the other students are hanging around near them or are out dancing.'],
  enter: enter,
};
