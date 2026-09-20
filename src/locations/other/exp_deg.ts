import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === '') {
    // TODO-QSP: exit
  }
  if (Number((s as any).locArgs?.[2] ?? 0) <= 0  &&  Number((s as any).locArgs?.[2] ?? 0) !== 'reset') {
    // TODO-QSP: exit
  }
  ((s as any).expdegVars = (s as any).expdegVars ?? {})['deg_loss_mult'] = qspFunc(s, '_difficulty', 'get_deg_loss');
  if (((String(';vball_block;vball_rec;vball_serve;vball_set;vball_spike;').indexOf(String(';' + Number((s as any).locArgs?.[0] ?? 0) + ';'))) + 1) > 0) {
    ((s as any).expdegVars = (s as any).expdegVars ?? {})['statName'] = 'vball';
    ((s as any).expdegVars = (s as any).expdegVars ?? {})['attrArray'] = ((s as any).locArgs?.[0] ?? 0);
    ((s as any).expdegVars = (s as any).expdegVars ?? {})['deg_loss_mult'] = 75 * (((s as any).expdegVars ?? {})?.['deg_loss_mult'] ?? 0) / 100;
  } else {
    if ((Array.isArray((s as any).skl_name) ? ((s as any).skl_name as any[]).indexOf(Number((s as any).locArgs?.[0] ?? 0)) : -1) >= 0) {
      ((s as any).expdegVars = (s as any).expdegVars ?? {})['statName'] = ((s as any).locArgs?.[0] ?? 0);
      ((s as any).expdegVars = (s as any).expdegVars ?? {})['attrArray'] = ((s as any).locArgs?.[0] ?? 0);
      ((s as any).expdegVars = (s as any).expdegVars ?? {})['deg_loss_mult'] = 75 * (((s as any).expdegVars ?? {})?.['deg_loss_mult'] ?? 0) / 100;
    } else {
      if ((Array.isArray((s as any).att_name) ? ((s as any).att_name as any[]).indexOf(Number((s as any).locArgs?.[0] ?? 0)) : -1) >= 0) {
        ((s as any).expdegVars = (s as any).expdegVars ?? {})['statName'] = ((s as any).locArgs?.[0] ?? 0);
        ((s as any).expdegVars = (s as any).expdegVars ?? {})['attrArray'] = '';
      } else {
        scene.text(`Error in gs 'exp_deg': ${((s as any).locArgs?.[0] ?? '')} is neither a skill nor an attribute`);
        return;
      }
    }
  }
  if (Number((s as any).locArgs?.[1] ?? 0) === 'reset') {
    // TODO-QSP: dynamic "
    // TODO-QSP: <<$expdegVars['statName']>>_deg = max(200, (102 - min(100, <<$expdegVars['statName']>>_lvl) + <<$exp...
    // TODO-QSP: "
    return;
  }
  ((s as any).temp_sklattrib = (s as any).temp_sklattrib ?? {})['trait_index'] = 0;
  // TODO-QSP: :traitdegloop
  ((s as any).temp_sklattrib = (s as any).temp_sklattrib ?? {})['trait'] = qspUntranslated(s, "traitattskl[temp_sklattrib['trait_index']]", { location: "exp_deg" });
  if (((s as any).temp_sklattrib ?? 0)?.['trait'] !== '') {
    ((s as any).expdegVars = (s as any).expdegVars ?? {})['deg_loss_mult'] = ((s as any).expdegVars['deg_loss_mult'] ?? 0) + (((s as any).trait_vars ?? 0)?.[((s as any).temp_sklattrib ?? 0)?.['trait'] + '-' + ((s as any).expdegVars ?? 0)?.['statName'] + '-deg_loss']);
    ((s as any).expdegVars = (s as any).expdegVars ?? {})['deg_loss_mult'] = ((s as any).expdegVars['deg_loss_mult'] ?? 0) + (((s as any).trait_vars ?? 0)?.['all-' + ((s as any).expdegVars ?? 0)?.['statName'] + '-deg_loss']);
  }
  (s as any).tl = ((s as any).tl ?? 0) + (1);
  if (((s as any).tl ?? 0) < Object.keys((s as any).traitattskl ?? {}).length) {
    // TODO-QSP: jump 'traitdegloop'
  }
  // TODO-QSP: dynamic "
  // TODO-QSP: <<$expdegVars['statName']>>_deg -= expdegVars['deg_loss_mult']
  // TODO-QSP: "
  scene.build();
}

export const exp_deg: LocationDef = {
  name: 'exp_deg',
  title: 'Error in gs \'exp_deg\':  is neither a skill nor an attribute',
  region: 'other',
  enter: enter,
};
