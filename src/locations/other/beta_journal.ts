import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterInit(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  // TODO-QSP: gs $loc_id, 'init_array'
  // TODO-QSP: gs $loc_id, 'nav_construct'
  if (((s as any).hot_link ?? 0) === '') {
    // TODO-QSP: gs $loc_id, 'default'
  } else {
    // TODO-QSP: gs $loc_id, $hot_link
  }
  // TODO-QSP: end
  scene.build();
}

function enterInitArray(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $array_tab[1] = 'Home'
  // TODO-QSP: $array_link[1] = 'beta_journal'
  // TODO-QSP: $array_tab[2] = 'Housing'
  // TODO-QSP: $array_link[2] = 'beta_journal_home'
  // TODO-QSP: $array_tab[3] = 'Work'
  // TODO-QSP: $array_link[3] = 'beta_journal_work'
  // TODO-QSP: $array_tab[4] = 'Relations'
  // TODO-QSP: $array_link[4] = 'beta_journal_relationships'
  // TODO-QSP: $array_tab[5] = 'Quests'
  // TODO-QSP: $array_link[5] = 'beta_journal_quests'
  // TODO-QSP: $array_tab[6] = 'Magic'
  // TODO-QSP: $array_link[6] = 'beta_journal_magic'
  // TODO-QSP: $array_tab[7] = 'Notifications'
  // TODO-QSP: $array_link[7] = 'beta_journal_notifications'
  // TODO-QSP: $array_tab[8] = 'Glossary'
  // TODO-QSP: $array_link[8] = 'beta_journal_glossary'
  // TODO-QSP: end
  scene.build();
}

function enterDefault2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs $loc_id, 'nav_construct'
  scene.text('<center>');
  // TODO-QSP: gs $loc_id, 'game_events'
  // TODO-QSP: gs $loc_id, 'gametips'
  scene.text('</center>');
  // TODO-QSP: end
  scene.build();
}

function enterNavConstruct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).nav_banner ?? 0) === '') {
  }
  (s as any).nav_i = 0;
  if (((s as any).start_type ?? 0)?.['magic'] === 'nomagic') {
    (s as any).nav_i = ((s as any).nav_i ?? 0) - (1);
  }
  (s as any).i = 0;
  // TODO-QSP: :jmp_navigation_gen
  if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  ((s as any).array_tab ?? 0)?.[String((s as any).i ?? 0)] === 'Magic') {
  } else {
    if (((s as any).hot_link ?? 0) !== ((s as any).array_link ?? 0)?.[String((s as any).i ?? 0)]) {
      // TODO-QSP: $tablebody += '<th><a href="exec:gs ''<<$array_link[i]>>'', ''init''"><<$array_tab[i]>></a></th>'
    } else {
      // TODO-QSP: $tablebody += '<th><<$array_tab[i]>></th>'
    }
  }
  (s as any).i = ((s as any).i ?? 0) + (1);
  if (((s as any).i ?? 0) < ((s as any).nav_i ?? 0)) {
    // TODO-QSP: jump 'jmp_navigation_gen'
  }
  // TODO-QSP: dynamic text: <center><h1><<$nav_banner>></h1>
  scene.text(`<center><h1>${((s as any).nav_banner ?? 0)}</h1>`);
  // TODO-QSP: dynamic text: <table width="90%" align="center" width="90%" cellspacing="0" cellpadding="0" va...
  scene.text(`<table width="90%" align="center" width="90%" cellspacing="0" cellpadding="0" valign="top"><tr>${((s as any).tablebody ?? 0)}</tr></table></center>`);
  qspCall(s, 'journal', 'leaveactions');
  // TODO-QSP: end
  scene.build();
}

function enterGameEvents(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><h3>Upcoming Events</h3></center>');
  scene.text('WIP - No events configured or happening');
  // TODO-QSP: end
  scene.build();
}

function enterGametips(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs $loc_id, 'tips_init'
  (s as any).rnd_tip = ((s as any).rand ?? 0)(0, ((s as any).arrsize ?? 0)('tip_body')-1);
  scene.text('<center><h3>Girl Life Random Tips</h3>');
  // TODO-QSP: $tip_body[rnd_tip]
  scene.text('</center>');
  // TODO-QSP: end
  scene.build();
}

function enterTipsInit(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $tip_body[0] = 'Be careful when drunk.'
  // TODO-QSP: $tip_body[1] = 'If you have a modern dance skill of 50 or higher, and Albina likes you may get a cha...
  // TODO-QSP: $tip_body[2] = 'Mon Cheri is the most prestigious clothing store in St. Petersburg. With a price tag...
  // TODO-QSP: $tip_body[3] = 'There is some parts of the game restricted to over-18s such as doing driving lessons...
  // TODO-QSP: $tip_body[4] = 'The city park is a dangerous place at night. Be prepared to defend yourself.'
  // TODO-QSP: $tip_body[5] = 'Finding well paid jobs for pocket money is tough for a teenager unless you get creat...
  // TODO-QSP: $tip_body[6] = 'The Pavlovsk community centre is not the only place you can learn dance or sports sk...
  // TODO-QSP: $tip_body[7] = "Be wary of Fae gifts."
  // TODO-QSP: $tip_body[8] = 'Exploration can lead to interesting events or surprises.'
  // TODO-QSP: $tip_body[9] = 'Look after ourself as your admirers gauge your beauty is based social interests, you...
  // TODO-QSP: end
  scene.build();
}

function enterTableGen(s: GameState, scene: SceneBuilder): void {
  (s as any).entry_counter_i = 1;
  (s as any).entry_counter_j = 1;
  (s as any).table_counter = 0;
  if ((!((s as any).locArgs?.[1] ?? 0))) {
    (s as any).table_columns = 3;
  } else {
    (s as any).table_columns = qspUntranslated(s, "ARGS[1]", { location: "beta_journal" });
  }
  // TODO-QSP: :jmp_table_gen
  // TODO-QSP: $bjq_temp_table +=  '<tr width="100px">'
  // TODO-QSP: :jmp_table_gen2
  // TODO-QSP: $bjq_temp_table +=    '<td align="left">'
  // TODO-QSP: $bjq_temp_table +=      '<a href="exec: gt ''<<$loc_id>>'' ,''<<$loc_shortname[entry_counter_i]>>''"...
  // TODO-QSP: $bjq_temp_table +=        '<img height="100" src="<<$loc_path[entry_counter_i]>>">'
  // TODO-QSP: $bjq_temp_table +=      '</a>'
  // TODO-QSP: $bjq_temp_table +=    '</td>'
  (s as any).entry_counter_i = ((s as any).entry_counter_i ?? 0) + (1);
  if (((s as any).entry_counter_i ?? 0) <= ((s as any).table_gen_max ?? 0)  &&  (((s as any).entry_counter_i ?? 0) % ((s as any).table_columns ?? 0)) !== 0) {
    // TODO-QSP: jump 'jmp_table_gen2'
  }
  // TODO-QSP: $bjq_temp_table +=  '</tr>'
  // TODO-QSP: $bjq_temp_table +=  '<tr width="100px">'
  // TODO-QSP: :jmp_table_gen3
  // TODO-QSP: $bjq_temp_table +=    '<td align="left">'
  // TODO-QSP: $bjq_temp_table +=      $loc_name[entry_counter_j]
  // TODO-QSP: $bjq_temp_table +=    '</td>'
  (s as any).entry_counter_j = ((s as any).entry_counter_j ?? 0) + (1);
  if (((s as any).entry_counter_j ?? 0) <= ((s as any).table_gen_max ?? 0)  &&  (((s as any).entry_counter_j ?? 0) % ((s as any).table_columns ?? 0)) !== 0) {
    // TODO-QSP: jump 'jmp_table_gen3'
  }
  // TODO-QSP: $bjq_temp_table +=  '</tr>'
  (s as any).table_counter = ((s as any).table_counter ?? 0) + (1);
  if (((s as any).table_counter ?? 0) === 5) {
    // TODO-QSP: $bjq_temp_table += '<tr></tr>'
    (s as any).table_counter = 0;
  }
  if (((s as any).entry_counter_i ?? 0) < ((s as any).table_gen_max ?? 0)) {
    // TODO-QSP: jump 'jmp_table_gen'
  }
  // TODO-QSP: $bjq_temp_table += '</table></center>'
  // TODO-QSP: dynamic text: <<$bjq_temp_table>>
  scene.text(`${((s as any).bjq_temp_table ?? 0)}`);
  // TODO-QSP: end
  scene.build();
}

function enterLeaveactions(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Put your notebook down', handler: (st: GameState) => {
    (s as any).jclose = 1;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterFailure(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'id') {
    ((s as any).debug ?? {})['journal'] = 'NPC ID not set, vcard not generated.';
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'quest_body') {
      ((s as any).debug ?? {})['journal'] = 'Quest body not set, quests details was not set.';
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'nav_forward') {
        ((s as any).debug ?? {})['journal'] = 'No forward navigation set - please ensure you have set the var in quest_data';
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 'nav_back') {
          ((s as any).debug ?? {})['journal'] = 'No back navigation set - please ensure you have set the var in quest_data';
        }
      }
    }
  }
  // TODO-QSP: 'vcard failed to initialise: ' + $debug['journal']
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'init':
      enterInit(s, scene);
      break;
    case 'init_array':
      enterInitArray(s, scene);
      break;
    case 'default':
      enterDefault2(s, scene);
      break;
    case 'nav_construct':
      enterNavConstruct(s, scene);
      break;
    case 'game_events':
      enterGameEvents(s, scene);
      break;
    case 'gametips':
      enterGametips(s, scene);
      break;
    case 'tips_init':
      enterTipsInit(s, scene);
      break;
    case 'table_gen':
      enterTableGen(s, scene);
      break;
    case 'leaveactions':
      enterLeaveactions(s, scene);
      break;
    case 'failure':
      enterFailure(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const beta_journal: LocationDef = {
  name: 'beta_journal',
  title: '<center>',
  region: 'other',
  enter: enter,
};
