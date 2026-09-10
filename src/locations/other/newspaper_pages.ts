import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterInit(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'newspaper_pages', 'add_event_pages');
  qspCall(s, 'newspaper_pages', 'fill_arrays');
  qspCall(s, 'newspaper_pages', 'add_advert_pages');
  scene.build();
}

function enterAddEventPages(s: GameState, scene: SceneBuilder): void {
  if (((s as any).daystart ?? 0) >= 276  &&  ((s as any).daystart ?? 0) < 290) {
    // TODO-QSP: $np_pages[] = "gs 'newspaper_pages', 'cheerleading_tryouts'"
  }
  if (((s as any).daystart ?? 0) >= 324  &&  ((s as any).daystart ?? 0) < 373) {
    if (((s as any).daystart ?? 0) < 338) {
      // TODO-QSP: $np_front_pages[] = "gs 'newspaper_pages', 'boris_arrested'"
    } else {
      // TODO-QSP: $np_front_pages[] = "gs 'newspaper_pages', 'starlets_report_0'"
      if (((s as any).daystart ?? 0) < 352) {
        // TODO-QSP: $np_front_pages[] = "gs 'newspaper_pages', 'starlets_report_1'"
      } else {
        // TODO-QSP: $np_front_pages[] = "gs 'newspaper_pages', 'starlets_report_2'"
        if (((s as any).daystart ?? 0) < 366) {
          // TODO-QSP: $np_front_pages[] = "gs 'newspaper_pages', 'starlets_report_3'"
        } else {
          // TODO-QSP: $np_front_pages[] = "gs 'newspaper_pages', 'starlets_report_4'"
        }
      }
      if (((s as any).balletqw ?? 0)?.['letter'] === 1) {
        if (((s as any).daystart ?? 0) >= 196  &&  ((s as any).daystart ?? 0) < 203) {
          // TODO-QSP: $np_pages[] = "gs 'newspaper_pages', 'ballet_pass'"
        } else {
          // TODO-QSP: $np_pages[] = "gs 'newspaper_pages', 'ballet_first'"
        }
      }
      if ((Math.floor(Math.random() * 10) + 0) === 0  &&  ((s as any).NewspaperVars ?? 0)?.['gad_missing_day'] < ((s as any).daystart ?? 0)) {
        if ((Math.floor(Math.random() * 10) + 0) < 4) {
        }
        // TODO-QSP: $randname += ' ' + $func('npcrnamefile', 'rusSur')
        (s as any).NewspaperVars['gad_missing_name'] = ((s as any).randname ?? 0);
        (s as any).NewspaperVars['gad_missing_age'] = Math.floor(Math.random() * 61) + 9;
        if (((s as any).NewspaperVars ?? 0)?.['gad_missing_counter'] === 0) {
          (s as any).NewspaperVars['gad_missing_counter'] = Math.floor(Math.random() * 5) + 12;
          (s as any).NewspaperVars['gad_missing_counter'] = ((s as any).daystart ?? 0) / 35;
        }
        (s as any).NewspaperVars['gad_missing_counter'] = ((s as any).NewspaperVars['gad_missing_counter'] ?? 0) + (1);
        (s as any).NewspaperVars['gad_missing_day'] = ((s as any).daystart ?? 0) + 15 + ((s as any).rand ?? 0)(0, ((s as any).NewspaperVars ?? 0)?.['gad_missing_counter'] / 2);
        // TODO-QSP: $np_pages[] = "gs 'newspaper_pages', 'gad_missing'"
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'init':
      enterInit(s, scene);
      break;
    case 'add_event_pages':
      enterAddEventPages(s, scene);
      break;
    default:
      enterInit(s, scene);
      break;
  }
}

export const newspaper_pages: LocationDef = {
  name: 'newspaper_pages',
  title: '<center><b>Another Dead Body At The M11</b></center>',
  region: 'other',
  enter: enter,
};
