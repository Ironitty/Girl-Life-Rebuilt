import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterInit(s: GameState, scene: SceneBuilder): void {
  (s as any).loc_id = 'beta_journal';
  qspCall(s, 'stat', '');
  qspCall(s, '$loc_id', 'init_array');
  (s as any).hot_link = 'default';
  qspCall(s, '$loc_id', 'nav_construct');
  if (((s as any).hot_link ?? 0) === '') {
    qspCall(s, '$loc_id', 'default');
  } else {
    qspCall(s, '$loc_id', '$hot_link');
  }
  scene.build();
}

function enterInitArray(s: GameState, scene: SceneBuilder): void {
  ((s as any).array_tab = (s as any).array_tab ?? {})[1] = 'Home';
  ((s as any).array_link = (s as any).array_link ?? {})[1] = 'beta_journal';
  ((s as any).array_tab = (s as any).array_tab ?? {})[2] = 'Housing';
  ((s as any).array_link = (s as any).array_link ?? {})[2] = 'beta_journal_home';
  ((s as any).array_tab = (s as any).array_tab ?? {})[3] = 'Work';
  ((s as any).array_link = (s as any).array_link ?? {})[3] = 'beta_journal_work';
  ((s as any).array_tab = (s as any).array_tab ?? {})[4] = 'Relations';
  ((s as any).array_link = (s as any).array_link ?? {})[4] = 'beta_journal_relationships';
  ((s as any).array_tab = (s as any).array_tab ?? {})[5] = 'Quests';
  ((s as any).array_link = (s as any).array_link ?? {})[5] = 'beta_journal_quests';
  ((s as any).array_tab = (s as any).array_tab ?? {})[6] = 'Magic';
  ((s as any).array_link = (s as any).array_link ?? {})[6] = 'beta_journal_magic';
  ((s as any).array_tab = (s as any).array_tab ?? {})[7] = 'Notifications';
  ((s as any).array_link = (s as any).array_link ?? {})[7] = 'beta_journal_notifications';
  ((s as any).array_tab = (s as any).array_tab ?? {})[8] = 'Glossary';
  ((s as any).array_link = (s as any).array_link ?? {})[8] = 'beta_journal_glossary';
  (s as any).nav_banner = '' + ((s as any).pcs_nickname ?? 0) + '\'s Quests and Relationships';
  scene.build();
}

function enterDefault2(s: GameState, scene: SceneBuilder): void {
  (s as any).hot_link = ((s as any).locArgs?.[0] ?? 0);
  qspCall(s, '$loc_id', 'nav_construct');
  scene.text('<center>');
  qspCall(s, '$loc_id', 'game_events');
  qspCall(s, '$loc_id', 'gametips');
  scene.text('</center>');
  scene.build();
}

function enterNavConstruct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).nav_banner ?? 0) === '') {
    (s as any).nav_banner = '' + ((s as any).pcs_firstname ?? 0) + '\'s Quests and Relationships';
  }
  (s as any).tablebody = undefined;
  (s as any).nav_i = 0;
  if (((s as any).start_type ?? 0)?.['magic'] === 'nomagic') {
    (s as any).nav_i = ((s as any).nav_i ?? 0) - (1);
  }
  (s as any).i = 0;
  do {
    if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  ((s as any).array_tab ?? 0)?.[String((s as any).i ?? 0)] === 'Magic') {
    } else {
      if (((s as any).hot_link ?? 0) !== ((s as any).array_link ?? 0)?.[String((s as any).i ?? 0)]) {
        (s as any).tablebody = ((s as any).tablebody ?? 0) + ('<th><a href="#" onclick="window.__gameStore.getState().doGoto((((s as any).array_link ?? 0)?.[String((s as any).i ?? 0)] ?? \u0027\u0027), \u0027init\u0027); return false;">' + (((s as any).array_tab ?? 0)?.[String((s as any).i ?? 0)] ?? 0) + '</a></th>');
      } else {
        (s as any).tablebody = ((s as any).tablebody ?? 0) + ('<th>' + (((s as any).array_tab ?? 0)?.[String((s as any).i ?? 0)] ?? 0) + '</th>');
      }
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    (s as any).i = undefined;
    (s as any).nav_i = undefined;
    scene.text(`<center><h1>${((s as any).nav_banner ?? '')}</h1>`);
    scene.text(`<table width="90%" align="center" width="90%" cellspacing="0" cellpadding="0" valign="top"><tr>${((s as any).tablebody ?? '')}</tr></table></center>`);
    qspCall(s, 'journal', 'leaveactions');
  } while (((s as any).i ?? 0) < ((s as any).nav_i ?? 0));
  scene.build();
}

function enterGameEvents(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><h3>Upcoming Events</h3></center>');
  scene.text('WIP - No events configured or happening');
  scene.build();
}

function enterGametips(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$loc_id', 'tips_init');
  (s as any).rnd_tip = (Math.floor(Math.random() * (0 - 0 + 1)) + (0));
  scene.text('<center><h3>Girl Life Random Tips</h3>');
  scene.text(String(((s as any).tip_body ?? {})[String((s as any).rnd_tip ?? '')] || ''));
  scene.text('</center>');
  (s as any).rnd_tip = undefined;
  (s as any).tip_body = undefined;
  scene.build();
}

function enterTipsInit(s: GameState, scene: SceneBuilder): void {
  ((s as any).tip_body = (s as any).tip_body ?? {})[0] = 'Be careful when drunk.';
  ((s as any).tip_body = (s as any).tip_body ?? {})[1] = 'If you have a modern dance skill of 50 or higher, and Albina likes you may get a chance to join Starlets.';
  ((s as any).tip_body = (s as any).tip_body ?? {})[2] = 'Mon Cheri is the most prestigious clothing store in St. Petersburg. With a price tag to match.';
  ((s as any).tip_body = (s as any).tip_body ?? {})[3] = 'There is some parts of the game restricted to over-18s such as doing driving lessons, gambling at the casino and other areas. There is rumours that there is studios who are less fussy about sticking to the law.';
  ((s as any).tip_body = (s as any).tip_body ?? {})[4] = 'The city park is a dangerous place at night. Be prepared to defend yourself.';
  ((s as any).tip_body = (s as any).tip_body ?? {})[5] = 'Finding well paid jobs for pocket money is tough for a teenager unless you get creative.';
  ((s as any).tip_body = (s as any).tip_body ?? {})[6] = 'The Pavlovsk community centre is not the only place you can learn dance or sports skills.';
  ((s as any).tip_body = (s as any).tip_body ?? {})[7] = 'Be wary of Fae gifts.';
  ((s as any).tip_body = (s as any).tip_body ?? {})[8] = 'Exploration can lead to interesting events or surprises.';
  ((s as any).tip_body = (s as any).tip_body ?? {})[9] = 'Look after ourself as your admirers gauge your beauty is based social interests, your looks, how well you take care of yourself and what you wear.';
  scene.build();
}

function enterTableGen(s: GameState, scene: SceneBuilder): void {
  (s as any).entry_counter_i = 1;
  (s as any).entry_counter_j = 1;
  (s as any).table_counter = 0;
  if (String((s as any).locArgs?.[1] ?? '') === 0) {
    (s as any).table_columns = 3;
  } else {
    (s as any).table_columns = ((s as any).locArgs?.[1] ?? 0);
  }
  (s as any).bjq_temp_table = '<center><table cellspacing="3" bgcolor="' + (((s as any).theme ?? 0)?.['table_bg_alt']) + '" width="80%" align="center">';
  do {
    (s as any).bjq_temp_table = ((s as any).bjq_temp_table ?? 0) + ('<tr width="100px">');
    do {
      (s as any).bjq_temp_table = ((s as any).bjq_temp_table ?? 0) + ('<td align="left">');
      (s as any).bjq_temp_table = ((s as any).bjq_temp_table ?? 0) + ('<a href="exec: gt \'' + ((s as any).loc_id ?? 0) + '\' ,\'' + (((s as any).loc_shortname ?? 0)?.[String((s as any).entry_counter_i ?? 0)] ?? 0) + '\'">');
      (s as any).bjq_temp_table = ((s as any).bjq_temp_table ?? 0) + ('<img height="100" src="' + (((s as any).loc_path ?? 0)?.[String((s as any).entry_counter_i ?? 0)] ?? 0) + '">');
      (s as any).bjq_temp_table = ((s as any).bjq_temp_table ?? 0) + ('</a>');
      (s as any).bjq_temp_table = ((s as any).bjq_temp_table ?? 0) + ('</td>');
      (s as any).entry_counter_i = ((s as any).entry_counter_i ?? 0) + (1);
      (s as any).bjq_temp_table = ((s as any).bjq_temp_table ?? 0) + ('</tr>');
      (s as any).bjq_temp_table = ((s as any).bjq_temp_table ?? 0) + ('<tr width="100px">');
      do {
        (s as any).bjq_temp_table = ((s as any).bjq_temp_table ?? 0) + ('<td align="left">');
        (s as any).bjq_temp_table = ((s as any).bjq_temp_table ?? 0) + ((((s as any).loc_name ?? 0)?.[String((s as any).entry_counter_j ?? 0)] ?? 0));
        (s as any).bjq_temp_table = ((s as any).bjq_temp_table ?? 0) + ('</td>');
        (s as any).entry_counter_j = ((s as any).entry_counter_j ?? 0) + (1);
        (s as any).bjq_temp_table = ((s as any).bjq_temp_table ?? 0) + ('</tr>');
        (s as any).table_counter = ((s as any).table_counter ?? 0) + (1);
        if (((s as any).table_counter ?? 0) === 5) {
          (s as any).bjq_temp_table = ((s as any).bjq_temp_table ?? 0) + ('<tr></tr>');
          (s as any).table_counter = 0;
        }
        (s as any).bjq_temp_table = ((s as any).bjq_temp_table ?? 0) + ('</table></center>');
        scene.text(`${((s as any).bjq_temp_table ?? '')}`);
        (s as any).bjq_temp_table = undefined;
        (s as any).entry_counter_i = undefined;
        (s as any).entry_counter_j = undefined;
        (s as any).table_columns = undefined;
        (s as any).table_counter = undefined;
        (s as any).table_gen_max = undefined;
      } while (((s as any).entry_counter_j ?? 0) <= ((s as any).table_gen_max ?? 0)  &&  (((s as any).entry_counter_j ?? 0) % ((s as any).table_columns ?? 0)) !== 0);
    } while (((s as any).entry_counter_i ?? 0) <= ((s as any).table_gen_max ?? 0)  &&  (((s as any).entry_counter_i ?? 0) % ((s as any).table_columns ?? 0)) !== 0);
  } while (((s as any).entry_counter_i ?? 0) < ((s as any).table_gen_max ?? 0));
  scene.build();
}

function enterLeaveactions(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Put your notebook down', handler: (st: GameState) => {
    (st as any).jumploc = undefined;
    (st as any).jclose = 1;
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterFailure(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'id') {
    ((s as any).debug = (s as any).debug ?? {})['journal'] = 'NPC ID not set, vcard not generated.';
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'quest_body') {
      ((s as any).debug = (s as any).debug ?? {})['journal'] = 'Quest body not set, quests details was not set.';
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'nav_forward') {
        ((s as any).debug = (s as any).debug ?? {})['journal'] = 'No forward navigation set - please ensure you have set the var in quest_data';
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 'nav_back') {
          ((s as any).debug = (s as any).debug ?? {})['journal'] = 'No back navigation set - please ensure you have set the var in quest_data';
        }
      }
    }
  }
  scene.text('vcard failed to initialise: ' + (((s as any).debug ?? 0)?.['journal'] ?? ''));
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
