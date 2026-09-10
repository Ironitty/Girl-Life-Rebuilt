import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any)._hc_un ?? 0) !== '') {
  }
  if (((s as any)._hc_nn ?? 0) !== ''  &&  ((s as any)._hc_nn ?? 0) !== ((s as any)._hc_fn ?? 0)) {
    // TODO-QSP: $_hc_full  += ' ''' + $_hc_nn + ''''
  }
  if (((s as any)._hc_ln ?? 0) !== '') {
    // TODO-QSP: $_hc_full  += ' ' + $_hc_ln
  }
  if (((s as any).npc_dob ?? 0)?.[String((s as any)._hc_npcid ?? 0)] > 0) {
  }
  if (((s as any)._hc_residence ?? 0) === '') {
  }
  if (((s as any)._hc_npcid ?? 0) === 'A28') {
  } else {
    if (((s as any)._hc_npcid ?? 0) === 'A33') {
    } else {
      if (((s as any)._hc_npcid ?? 0) === 'A4') {
      } else {
        if (((s as any)._hc_npcid ?? 0) === 'A15') {
        } else {
          if (((s as any)._hc_npcid ?? 0) === 'A18') {
          } else {
            if (((s as any)._hc_npcid ?? 0) === 'A248') {
            }
            if (((s as any)._hc_locvar ?? 0) !== '') {
              qspCall(s, 'help_characters', 'loc_text');
            }
            (s as any)._hc_i = 0;
            // TODO-QSP: :_hc_relloop
            if (((s as any)._hc_rel ?? 0)?.[String((s as any)._hc_i ?? 0)] !== '') {
              (s as any)._hc_p1 = qspUntranslated(s, "instr(_hc_rel[_hc_i], '|')", { location: "help_characters" });
              (s as any)._hc_p2 = qspUntranslated(s, "instr(_hc_rest, '|')", { location: "help_characters" });
              if (((s as any)._hc_relnpc ?? 0) === 'PC') {
              }
              // TODO-QSP: $_hc_relhtml += '<li>' + $_hc_reltype + ': <a href="' + $_hc_href + '">' + $_hc_relname + '</a></li>...
              (s as any)._hc_i = ((s as any)._hc_i ?? 0) + (1);
              // TODO-QSP: jump '_hc_relloop'
            }
            // TODO-QSP: $_hc_info += '<table style="margin:4px 0 6px 0;border-collapse:collapse">'
            // TODO-QSP: $_hc_info += '<tr><td style="padding:1px 10px 1px 0;opacity:0.65"><b>Birthday</b></td><td>' + $_hc_b...
            // TODO-QSP: $_hc_info += '<tr><td style="padding:1px 10px 1px 0;opacity:0.65"><b>Residence</b></td><td>' + $_hc_...
            if (((s as any)._hc_curloc ?? 0) !== '') {
              // TODO-QSP: $_hc_info += '<tr><td style="padding:1px 10px 1px 0;opacity:0.65"><b>Location</b></td><td>' + $_hc_c...
            }
            // TODO-QSP: $_hc_info += '</table>'
            if (((s as any)._hc_relhtml ?? 0) !== '') {
              // TODO-QSP: $_hc_info += '<p style="margin:6px 0 2px 0"><b>Relations</b></p>'
              // TODO-QSP: $_hc_info += '<ul style="margin:2px 0 4px 0">' + $_hc_relhtml + '</ul>'
            }
            if (((s as any)._hc_bio ?? 0) === '') {
              if (qspFunc(s, 'npc_notes', ((s as any)._hc_npcid ?? 0)) !== '') {
              }
            }
            // TODO-QSP: $help_page_content += '<td style="width:1%;white-space:nowrap;vertical-align:top;padding-right:14px"...
            // TODO-QSP: $help_page_content += '<img src="' + $_hc_portrait + '" style="height:200px;width:auto;max-width:180...
            // TODO-QSP: $help_page_content += '</td>'
            // TODO-QSP: $help_page_content += '<td style="vertical-align:top">' + $_hc_info + '</td>'
            // TODO-QSP: $help_page_content += '</tr><tr>'
            // TODO-QSP: $help_page_content += '<td colspan="2" style="padding-top:10px;border-top:1px solid rgba(128,128,128...
            // TODO-QSP: $help_page_content += $_hc_bio
            // TODO-QSP: $help_page_content += '</td></tr></table>'
            qspCall(s, 'help', 'render', ((s as any)._hc_key ?? 0));
            return;
          }
        }
      }
    }
  }
  scene.build();
}

export const help_characters: LocationDef = {
  name: 'help_characters',
  region: 'other',
  enter: enter,
};
