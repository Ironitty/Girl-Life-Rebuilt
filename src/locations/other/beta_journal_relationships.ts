import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterInit(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'beta_journal', 'nav_construct');
  scene.text('<center>');
  if (((s as any).panel_show ?? 0) !== 1  ||  (!((s as any).panel_show ?? 0))) {
    // TODO-QSP: dynamic text: <a href="exec:panel_show = 1 & gs '<<$loc_id>>', 'init'">Show Family</a>
    scene.text(`<a href="exec:panel_show = 1 & gs '${((s as any).loc_id ?? 0)}', 'init'">Show Family</a>`);
  } else {
    if (((s as any).panel_show ?? 0) === 1) {
      scene.text('<i>Show Family</i>');
      // TODO-QSP: gs $loc_id, 'rel_family'
    }
  }
  if (((s as any).panel_show ?? 0) !== 2) {
    // TODO-QSP: dynamic text: <a href="exec:panel_show = 2 & gs '<<$loc_id>>', 'init'">Show Pavlovsk NPCs</a>
    scene.text(`<a href="exec:panel_show = 2 & gs '${((s as any).loc_id ?? 0)}', 'init'">Show Pavlovsk NPCs</a>`);
  } else {
    if (((s as any).panel_show ?? 0) === 2) {
      scene.text('<i>Show Pavlovsk NPCs</i>');
      // TODO-QSP: gs $loc_id, 'rel_pavlovsk'
    }
  }
  if (((s as any).panel_show ?? 0) !== 3) {
    // TODO-QSP: dynamic text: <a href="exec:panel_show = 3 & gs '<<$loc_id>>', 'init'">Show Gadukino NPCs</a>
    scene.text(`<a href="exec:panel_show = 3 & gs '${((s as any).loc_id ?? 0)}', 'init'">Show Gadukino NPCs</a>`);
  } else {
    if (((s as any).panel_show ?? 0) === 3) {
      scene.text('<i>Show Gadukino NPCs</i>');
      // TODO-QSP: gs $loc_id, 'rel_gudukino'
    }
  }
  if (((s as any).panel_show ?? 0) !== 4) {
    // TODO-QSP: dynamic text: <a href="exec:panel_show = 4 & gs '<<$loc_id>>', 'init'">Show St Petersburg NPCs...
    scene.text(`<a href="exec:panel_show = 4 & gs '${((s as any).loc_id ?? 0)}', 'init'">Show St Petersburg NPCs</a>`);
  } else {
    if (((s as any).panel_show ?? 0) === 4) {
      scene.text('<i>Show St Petersburg NPCs</i>');
      // TODO-QSP: gs $loc_id, 'rel_city'
    }
  }
  if (((s as any).panel_show ?? 0) !== 5) {
    // TODO-QSP: dynamic text: <a href="exec:panel_show = 5 & gs '<<$loc_id>>', 'init'">Show Pushkin NPCs</a>
    scene.text(`<a href="exec:panel_show = 5 & gs '${((s as any).loc_id ?? 0)}', 'init'">Show Pushkin NPCs</a>`);
  } else {
    if (((s as any).panel_show ?? 0) === 5) {
      scene.text('<i>Show Pushkin NPCs</i>');
      // TODO-QSP: gs $loc_id, 'rel_pushkin'
    }
  }
  if (((s as any).panel_show ?? 0) !== 6) {
    // TODO-QSP: dynamic text: <a href="exec:panel_show = 6 & gs '<<$loc_id>>', 'init'">Show School NPCs</a>
    scene.text(`<a href="exec:panel_show = 6 & gs '${((s as any).loc_id ?? 0)}', 'init'">Show School NPCs</a>`);
  } else {
    if (((s as any).panel_show ?? 0) === 6) {
      scene.text('<i>Show Gadukino NPCs</i>');
      // TODO-QSP: gs $loc_id, 'rel_school'
    }
  }
  scene.text('</center>');
  scene.build();
}

function enterRelFamily(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><table width="90%" cellspacing="0" cellpadding="0" valign="top">');
  if (((s as any).kid ?? 0) > 0  ||  Object.keys((s as any).lover ?? {}).length > 0) {
    // TODO-QSP: gs $loc_id, 'rel_spouse_kids'
  }
  (s as any).rel_id = 29;
  // TODO-QSP: gs $loc_id, 'npc_preview'
  (s as any).rel_id = 28;
  // TODO-QSP: gs $loc_id, 'npc_preview'
  (s as any).rel_id = 33;
  // TODO-QSP: gs $loc_id, 'npc_preview'
  (s as any).rel_id = 34;
  // TODO-QSP: gs $loc_id, 'npc_preview'
  (s as any).rel_id = 30;
  // TODO-QSP: gs $loc_id, 'npc_preview'
  if (((s as any).npc_known ?? 0)?.['A55'] === 1) {
    (s as any).rel_id = 55;
    // TODO-QSP: gs $loc_id, 'npc_preview'
  }
  scene.text('</table></center>');
  scene.build();
}

function enterRelSpouseKids(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><h2>Lovers & Children</h2></center>');
  if (((s as any).kid ?? 0) > 0) {
    (s as any).i = 0;
    if (((s as any).kid ?? 0) === 1) {
      // TODO-QSP: dynamic text: <th>You have a child, a <<$polreb[0]>> named <<$kidname[0]>>. Born <<daykid[0]>>...
      scene.text(`<th>You have a child, a ${qspUntranslated(s, "polreb[0]", { location: "beta_journal_relationships" })} named ${qspUntranslated(s, "kidname[0]", { location: "beta_journal_relationships" })}. Born ${qspUntranslated(s, "daykid[0]", { location: "beta_journal_relationships" })}-${qspUntranslated(s, "monthkid[0]", { location: "beta_journal_relationships" })}-${qspUntranslated(s, "yearkid[0]", { location: "beta_journal_relationships" })}. Aged ${qspUntranslated(s, "kidage[0]", { location: "beta_journal_relationships" })}.</th>`);
    } else {
      scene.text('You have children:');
      // TODO-QSP: :LoopKidCounter
      if (((s as any).i ?? 0) < ((s as any).kid ?? 0)) {
        // TODO-QSP: dynamic text: <th> a <<$polreb[i]>> named <<$kidname[i]>>. Born <<daykid[i]>>-<<monthkid[i]>>-...
        scene.text(`<th> a ${((s as any).polreb ?? 0)?.[String((s as any).i ?? 0)]} named ${((s as any).kidname ?? 0)?.[String((s as any).i ?? 0)]}. Born ${((s as any).daykid ?? 0)?.[String((s as any).i ?? 0)]}-${((s as any).monthkid ?? 0)?.[String((s as any).i ?? 0)]}-${((s as any).yearkid ?? 0)?.[String((s as any).i ?? 0)]}. Aged ${((s as any).kidage ?? 0)?.[String((s as any).i ?? 0)]}.</th>`);
        (s as any).i = ((s as any).i ?? 0) + (1);
        // TODO-QSP: jump 'LoopKidCounter'
      }
    }
  }
  (s as any).jnl_i = 0;
  (s as any).jnl_max_i = 0;
  // TODO-QSP: :loverjournalloop
  if (((s as any).jnl_i ?? 0) < ((s as any).jnl_max_i ?? 0)) {
    // TODO-QSP: gs 'npcStat', $lover[jnl_i], 'i'
    if (((((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID9 ?? 0)]).slice((1)-1, ((1)-1)+(2))) === 'ex') {
      (s as any).jnl_i = ((s as any).jnl_i ?? 0) + (1);
      // TODO-QSP: jump 'loverjournalloop'
    }
    if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID9 ?? 0)] === 'husband') {
      // TODO-QSP: dynamic text: You have been married for <<daystart - spouseVars['marry_day']>> days. Your husb...
      scene.text(`You have been married for ${((s as any).daystart ?? 0) - ((s as any).spouseVars ?? {})?.['marry_day']} days. Your husband ${((s as any).npcdesc9 ?? 0)} is ${((s as any).npcheight9 ?? 0)} and ${((s as any).npcbuild9 ?? 0)} with ${((s as any).npchair9 ?? 0)} hair. ${((s as any).npcdesc9 ?? 0)} is usually wearing ${((s as any).npcClo9 ?? 0)}. Member ${((s as any).dick_desc9 ?? 0)} cock and ${((s as any).dick_girth9 ?? 0)}. Relationship ${((s as any).npc_rel ?? 0)?.[String((s as any).npcID9 ?? 0)]}.`);
    } else {
      // TODO-QSP: dynamic text: Your <<$npcrelat9>> <<$npcdesc9>> is <<$npcheight9>> and <<$npcbuild9>> with <<$...
      scene.text(`Your ${((s as any).npcrelat9 ?? 0)} ${((s as any).npcdesc9 ?? 0)} is ${((s as any).npcheight9 ?? 0)} and ${((s as any).npcbuild9 ?? 0)} with ${((s as any).npchair9 ?? 0)} hair. ${((s as any).npcdesc9 ?? 0)} is usually wearing ${((s as any).npcClo9 ?? 0)}. Your relationship is ${((s as any).npc_rel ?? 0)?.[String((s as any).npcID9 ?? 0)]} after ${((s as any).npc_dates ?? 0)?.[String((s as any).npcID9 ?? 0)]} dates and ${((s as any).daystart ?? 0) - ((s as any).npc_daygenerated ?? 0)?.[String((s as any).npcID9 ?? 0)]} days dating.`);
    }
    if (((s as any).npc_rel ?? 0)?.[String((s as any).npcID9 ?? 0)] > 1) {
      if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID9 ?? 0)] === 1) {
        // TODO-QSP: dynamic text: <<$Xec9>> is timid and lacks confidence.
        scene.text(`${((s as any).Xec9 ?? 0)} is timid and lacks confidence.`);
      } else {
        if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID9 ?? 0)] === 0) {
          // TODO-QSP: dynamic text: <<$Xec9>> has a cheerful and sociable personality.
          scene.text(`${((s as any).Xec9 ?? 0)} has a cheerful and sociable personality.`);
        } else {
          // TODO-QSP: dynamic text: <<$Xec9>> is short-tempered and strict.
          scene.text(`${((s as any).Xec9 ?? 0)} is short-tempered and strict.`);
        }
      }
    }
    (s as any).jnl_i = ((s as any).jnl_i ?? 0) + (1);
    // TODO-QSP: jump 'loverjournalloop'
  }
  scene.build();
}

function enterRelPavlovsk(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><table width="90%" cellspacing="0" cellpadding="0" valign="top">');
  if (((s as any).npc_known ?? 0)?.['A27'] === 1) {
    (s as any).rel_id = 27;
    // TODO-QSP: gs $loc_id, 'npc_preview'
  }
  if (((s as any).npc_known ?? 0)?.['A54'] === 1) {
    (s as any).rel_id = 54;
    // TODO-QSP: gs $loc_id, 'npc_preview'
  }
  if (((s as any).npc_known ?? 0)?.['A57'] === 1) {
    (s as any).rel_id = 57;
    // TODO-QSP: gs $loc_id, 'npc_preview'
  }
  if (((s as any).npc_known ?? 0)?.['A217'] === 1) {
    (s as any).rel_id = 217;
    // TODO-QSP: gs $loc_id, 'npc_preview'
  }
  if (((s as any).npc_known ?? 0)?.['A112'] === 1) {
    (s as any).rel_id = 112;
    // TODO-QSP: gs $loc_id, 'npc_preview'
  }
  if (((s as any).npc_known ?? 0)?.['A119'] === 1) {
    (s as any).rel_id = 119;
    // TODO-QSP: gs $loc_id, 'npc_preview'
  }
  scene.text('</table></center>');
  scene.build();
}

function enterRelSchool(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterRelCity(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><table width="90%" cellspacing="0" cellpadding="0" valign="top">');
  if (((s as any).npc_QW ?? 0)?.['A192'] > 0) {
    (s as any).rel_id = 192;
    // TODO-QSP: gs $loc_id, 'npc_preview'
  }
  if (((s as any).npc_known ?? 0)?.['A218'] === 1) {
    (s as any).rel_id = 218;
    // TODO-QSP: gs $loc_id, 'npc_preview'
  }
  if (((s as any).npc_known ?? 0)?.['A219'] === 1) {
    (s as any).rel_id = 219;
    // TODO-QSP: gs $loc_id, 'npc_preview'
  }
  if (((s as any).npc_known ?? 0)?.['A220'] === 1) {
    (s as any).rel_id = 220;
    // TODO-QSP: gs $loc_id, 'npc_preview'
  }
  if (((s as any).npc_known ?? 0)?.['A93'] === 1) {
    (s as any).rel_id = 93;
    // TODO-QSP: gs $loc_id, 'npc_preview'
  }
  if (((s as any).npc_known ?? 0)?.['A43'] === 1) {
    (s as any).rel_id = 43;
    // TODO-QSP: gs $loc_id, 'npc_preview'
  }
  if (((s as any).npc_known ?? 0)?.['A35'] === 1) {
    (s as any).rel_id = 35;
    // TODO-QSP: gs $loc_id, 'npc_preview'
  }
  if (((s as any).npc_known ?? 0)?.['A169'] === 1) {
    (s as any).rel_id = 169;
    // TODO-QSP: gs $loc_id, 'npc_preview'
  }
  if (((s as any).npc_known ?? 0)?.['A89'] === 1) {
    (s as any).rel_id = 89;
    // TODO-QSP: gs $loc_id, 'npc_preview'
  }
  if (((s as any).npc_known ?? 0)?.['A216'] === 1) {
    (s as any).rel_id = 216;
    // TODO-QSP: gs $loc_id, 'npc_preview'
  }
  scene.text('</table></center>');
  scene.build();
}

function enterRelGadukino(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><h3>Gadukino</h3></center>');
  if (((s as any).npc_known ?? 0)?.['A31'] === 1  ||  ((s as any).npc_known ?? 0)?.['A32'] === 1) {
    scene.text('<center><h3>Great Grandparents</h3></center>');
    scene.text('<table width="90%" align="center" width="90%" cellspacing="0" cellpadding="0" valign="top">');
    (s as any).rel_id = 31;
    // TODO-QSP: gs $loc_id, 'npc_preview'
    (s as any).rel_id = 32;
    // TODO-QSP: gs $loc_id, 'npc_preview'
    scene.text('</table>');
  }
  scene.text('</table>');
  if (((s as any).npc_known ?? 0)?.['A31'] === 1) {
    scene.text('Friendship with Elena (your great-grandmother):');
    qspCall(s, 'journal', 'relindex', 'A31');
  }
  if (((s as any).npc_known ?? 0)?.['A32'] === 1) {
    scene.text('Friendship with Zlatek (your great-grandfather):');
    qspCall(s, 'journal', 'relindex', 'A32');
  }
  if (((s as any).npc_known ?? 0)?.['A60'] === 1) {
    scene.text('Friendship with Mira:');
    qspCall(s, 'journal', 'relindex', 'A60');
  }
  if (((s as any).npc_known ?? 0)?.['A61'] === 1) {
    scene.text('Friendship with Kolyamba:');
    qspCall(s, 'journal', 'relindex', 'A61');
  }
  if (((s as any).npc_known ?? 0)?.['A62'] === 1) {
    scene.text('Friendship with Vasyan:');
    qspCall(s, 'journal', 'relindex', 'A62');
  }
  if (((s as any).npc_known ?? 0)?.['A63'] === 1) {
    scene.text('Friendship with Mitka:');
    qspCall(s, 'journal', 'relindex', 'A63');
  }
  if (((s as any).npc_known ?? 0)?.['A64'] === 1) {
    scene.text('Friendship with Afanasiy:');
    qspCall(s, 'journal', 'relindex', 'A64');
  }
  if (((s as any).npc_known ?? 0)?.['A65'] === 1) {
    scene.text('Friendship with Vtialiy:');
    qspCall(s, 'journal', 'relindex', 'A65');
  }
  if (((s as any).npc_known ?? 0)?.['A221'] === 1) {
    scene.text('Friendship with Grigory:');
    qspCall(s, 'journal', 'relindex', 'A221');
  }
  if (((s as any).npc_known ?? 0)?.['A172'] === 1) {
    scene.text('Friendship with Andrei (hunter):');
    qspCall(s, 'journal', 'relindex', 'A172');
  }
  if (((s as any).npc_known ?? 0)?.['A173'] === 1) {
    scene.text('Friendship with Igor (hunter):');
    qspCall(s, 'journal', 'relindex', 'A173');
  }
  if (((s as any).npc_known ?? 0)?.['A174'] === 1) {
    scene.text('Friendship with Sergei (hunter):');
    qspCall(s, 'journal', 'relindex', 'A174');
  }
  // TODO-QSP: dynamic text: <a href="exec:pavlovsk_show = 0 & gs '<<$loc_id>>', 'init'">Hide Gadukino NPCs</...
  scene.text(`<a href="exec:pavlovsk_show = 0 & gs '${((s as any).loc_id ?? 0)}', 'init'">Hide Gadukino NPCs</a>`);
  scene.build();
}

function enterRelPushkin(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterRelationstab(s: GameState, scene: SceneBuilder): void {
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0) {
    scene.text('<center><h2>Standings by Social Group</h2></center>');
    if (((s as any).grupTipe ?? 0) < 5  &&  ((s as any).grupvalue ?? 0)?.[String((s as any).grupTipe ?? 0)] > 700) {
    } else {
      if (((s as any).grupTipe ?? 0) < 5  &&  ((s as any).grupvalue ?? 0)?.[String((s as any).grupTipe ?? 0)] > 300) {
      } else {
        if (((s as any).grupTipe ?? 0) < 5) {
        }
      }
    }
    if ((!((s as any).grupTipe ?? 0))) {
      // TODO-QSP: 'You are not a member of any particular school social group.' + $journal_school_standing
    } else {
      if (((s as any).grupTipe ?? 0) === 1) {
        // TODO-QSP: 'Your school social group consists of the popular, cool and beautiful.' + $journal_school_standing
      } else {
        if (((s as any).grupTipe ?? 0) === 2) {
          // TODO-QSP: 'Your school social group consists of jocks and natural athletes.' + $journal_school_standing
        } else {
          if (((s as any).grupTipe ?? 0) === 3) {
            // TODO-QSP: 'Your school social group consists of nerds, geeks and good students.' + $journal_school_standing
            if (((s as any).nerd_game ?? 0)?.['game_day'] > ((s as any).daystart ?? 0)) {
              // TODO-QSP: dynamic text: You have been invited to a games night on <<$weekName[(week + (nerd_game['game_d...
              scene.text(`You have been invited to a games night on ${((s as any).weekName ?? 0)?.[(((s as any).week ?? 0) + (((s as any).nerd_game ?? {})?.['game_day'] - ((s as any).daystart ?? 0)))]} at '+func('time', 'get_time_string', 20, 0)+' in the community center library.`);
            }
            if (((s as any).nerd_game ?? 0)?.['game_day'] === ((s as any).daystart ?? 0)) {
              // TODO-QSP: dynamic text: You have been invited to a games night tonight at '+func('time', 'get_time_strin...
              scene.text('You have been invited to a games night tonight at \'+func(\'time\', \'get_time_string\', 20, 0)+\' in the community center library.');
            }
          } else {
            if (((s as any).grupTipe ?? 0) === 4) {
              // TODO-QSP: 'Your school social group consists of gopniks, rebels, punks or troublemakers.' + $journal_school_st...
            } else {
              if (((s as any).grupTipe ?? 0) === 5) {
                scene.text('Your school social group consists of losers, teacher\'s pets, sluts and the ugly.');
              }
            }
          }
        }
      }
    }
    scene.text('Cool Kids');
    scene.text('Jocks');
    scene.text('Nerds');
    scene.text('Gopnik');
    scene.text('<center><h2>Popular Kids Relations</h2></center>');
    if (((s as any).npc_known ?? 0)?.['A1'] === 1) {
      scene.text('Friendship with Dimka:');
      qspCall(s, 'journal', 'relindex', 'A1');
    }
    if (((s as any).npc_known ?? 0)?.['A4'] === 1) {
      scene.text('Friendship with Igor:');
      qspCall(s, 'journal', 'relindex', 'A4');
    }
    if (((s as any).npc_known ?? 0)?.['A14'] === 1) {
      scene.text('Friendship with Katja:');
      qspCall(s, 'journal', 'relindex', 'A14');
    }
    if (((s as any).npc_known ?? 0)?.['A15'] === 1) {
      scene.text('Friendship with Vicky:');
      qspCall(s, 'journal', 'relindex', 'A15');
    }
    if (((s as any).npc_known ?? 0)?.['A17'] === 1) {
      scene.text('Friendship with Irina:');
      qspCall(s, 'journal', 'relindex', 'A17');
    }
    if (((s as any).npc_known ?? 0)?.['A22'] === 1) {
      scene.text('Friendship with Bella:');
      qspCall(s, 'journal', 'relindex', 'A22');
    }
    if (((s as any).npc_known ?? 0)?.['A146'] === 1) {
      scene.text('Friendship with Marcus:');
      qspCall(s, 'journal', 'relindex', 'A146');
    }
    if (((s as any).npc_known ?? 0)?.['A147'] === 1) {
      scene.text('Friendship with Andrey:');
      qspCall(s, 'journal', 'relindex', 'A147');
    }
    if (((s as any).npc_known ?? 0)?.['A148'] === 1) {
      scene.text('Friendship with Mefodiy:');
      qspCall(s, 'journal', 'relindex', 'A148');
    }
    if (((s as any).soniaQW ?? 0)?.['slut'] === 0  &&  ((s as any).npc_known ?? 0)?.['A25'] === 1) {
      scene.text('Friendship with Sonia:');
      qspCall(s, 'journal', 'relindex', 'A25');
    }
    if (((s as any).npc_known ?? 0)?.['A139'] === 1) {
      scene.text('Friendship with Stasya:');
      qspCall(s, 'journal', 'relindex', 'A139');
    }
    if (((s as any).npc_known ?? 0)?.['A140'] === 1) {
      scene.text('Friendship with Lizaveta:');
      qspCall(s, 'journal', 'relindex', 'A140');
    }
    scene.text('<center><h2>Jocks Relations</h2></center>');
    if (((s as any).npc_known ?? 0)?.['A3'] === 1) {
      scene.text('Friendship with Ivan:');
      qspCall(s, 'journal', 'relindex', 'A3');
    }
    if (((s as any).fedormasha ?? 0) === 0  &&  ((s as any).npc_known ?? 0)?.['A5'] === 1) {
      scene.text('Friendship with Fedor:');
      qspCall(s, 'journal', 'relindex', 'A5');
    }
    if (((s as any).npc_known ?? 0)?.['A8'] === 1) {
      scene.text('Friendship with Svyatoslav:');
      qspCall(s, 'journal', 'relindex', 'A8');
    }
    if (((s as any).npc_known ?? 0)?.['A13'] === 1) {
      scene.text('Friendship with Lariska:');
      qspCall(s, 'journal', 'relindex', 'A13');
    }
    if (((s as any).npc_known ?? 0)?.['A18'] === 1) {
      scene.text('Friendship with Christina:');
      qspCall(s, 'journal', 'relindex', 'A18');
    }
    if (((s as any).npc_known ?? 0)?.['A19'] === 1) {
      scene.text('Friendship with Lina:');
      qspCall(s, 'journal', 'relindex', 'A19');
    }
    if (((s as any).npc_known ?? 0)?.['A23'] === 1) {
      scene.text('Friendship with Albina:');
      qspCall(s, 'journal', 'relindex', 'A23');
    }
    if (((s as any).npc_known ?? 0)?.['A149'] === 1) {
      scene.text('Friendship with Lazar:');
      qspCall(s, 'journal', 'relindex', 'A149');
    }
    if (((s as any).npc_known ?? 0)?.['A150'] === 1) {
      scene.text('Friendship with Erast:');
      qspCall(s, 'journal', 'relindex', 'A150');
    }
    if (((s as any).npc_known ?? 0)?.['A141'] === 1) {
      scene.text('Friendship with Veronika:');
      qspCall(s, 'journal', 'relindex', 'A141');
    }
    if (((s as any).npc_known ?? 0)?.['A165'] === 1) {
      scene.text('Friendship with Vanya:');
      qspCall(s, 'journal', 'relindex', 'A165');
    }
    scene.text('<center><h2>Nerds Relations</h2></center>');
    if (((s as any).npc_known ?? 0)?.['A2'] === 1) {
      scene.text('Friendship with Artem:');
      qspCall(s, 'journal', 'relindex', 'A2');
    }
    if (((s as any).npc_known ?? 0)?.['A6'] === 1) {
      scene.text('Friendship with Petka:');
      qspCall(s, 'journal', 'relindex', 'A6');
    }
    if (((s as any).npc_known ?? 0)?.['A12'] === 1) {
      scene.text('Friendship with Julia:');
      qspCall(s, 'journal', 'relindex', 'A12');
    }
    if (((s as any).npc_known ?? 0)?.['A16'] === 1) {
      scene.text('Friendship with Natasha:');
      qspCall(s, 'journal', 'relindex', 'A16');
    }
    if (((s as any).npc_known ?? 0)?.['A151'] === 1) {
      scene.text('Friendship with Evgeny:');
      qspCall(s, 'journal', 'relindex', 'A151');
    }
    if (((s as any).npc_known ?? 0)?.['A152'] === 1) {
      scene.text('Friendship with Feofan:');
      qspCall(s, 'journal', 'relindex', 'A152');
    }
    if (((s as any).npc_known ?? 0)?.['A153'] === 1) {
      scene.text('Friendship with Gerasim:');
      qspCall(s, 'journal', 'relindex', 'A153');
    }
    if (((s as any).npc_known ?? 0)?.['A142'] === 1) {
      scene.text('Friendship with Zinaida:');
      qspCall(s, 'journal', 'relindex', 'A142');
    }
    if (((s as any).npc_known ?? 0)?.['A240'] === 1) {
      scene.text('Friendship with Natalia:');
      qspCall(s, 'journal', 'relindex', 'A240');
    }
    scene.text('<center><h2>Gopnik Relations</h2></center>');
    if (((s as any).npc_known ?? 0)?.['A9'] === 1) {
      scene.text('Friendship with Vitek:');
      qspCall(s, 'journal', 'relindex', 'A9');
    }
    if (((s as any).npc_known ?? 0)?.['A10'] === 1) {
      scene.text('Friendship with Dan:');
      qspCall(s, 'journal', 'relindex', 'A10');
    }
    if (((s as any).npc_known ?? 0)?.['A11'] === 1) {
      scene.text('Friendship with Vasily:');
      qspCall(s, 'journal', 'relindex', 'A11');
    }
    if (((s as any).npc_known ?? 0)?.['A20'] === 1) {
      scene.text('Friendship with Lena:');
      qspCall(s, 'journal', 'relindex', 'A20');
    }
    if (((s as any).npc_known ?? 0)?.['A21'] === 1) {
      scene.text('Friendship with Lera:');
      qspCall(s, 'journal', 'relindex', 'A21');
    }
    if (((s as any).npc_known ?? 0)?.['A24'] === 1) {
      scene.text('Friendship with Pauline:');
      qspCall(s, 'journal', 'relindex', 'A24');
    }
    if (((s as any).npc_known ?? 0)?.['A154'] === 1) {
      scene.text('Friendship with Radomir:');
      qspCall(s, 'journal', 'relindex', 'A154');
    }
    if (((s as any).npc_known ?? 0)?.['A155'] === 1) {
      scene.text('Friendship with Lavrenti:');
      qspCall(s, 'journal', 'relindex', 'A155');
    }
    if (((s as any).npc_known ?? 0)?.['A156'] === 1) {
      scene.text('Friendship with Arkadi:');
      qspCall(s, 'journal', 'relindex', 'A156');
    }
    if (((s as any).npc_known ?? 0)?.['A157'] === 1) {
      scene.text('Friendship with Roman:');
      qspCall(s, 'journal', 'relindex', 'A157');
    }
    if (((s as any).npc_known ?? 0)?.['A158'] === 1) {
      scene.text('Friendship with Valentin:');
      qspCall(s, 'journal', 'relindex', 'A158');
    }
    if (((s as any).npc_known ?? 0)?.['A143'] === 1) {
      scene.text('Friendship with Alyona:');
      qspCall(s, 'journal', 'relindex', 'A143');
    }
    if (((s as any).npc_known ?? 0)?.['A144'] === 1) {
      scene.text('Friendship with Anushka:');
      qspCall(s, 'journal', 'relindex', 'A144');
    }
    if (((s as any).npc_known ?? 0)?.['A145'] === 1) {
      scene.text('Friendship with Katyusha:');
      qspCall(s, 'journal', 'relindex', 'A145');
    }
    if (((s as any).npc_known ?? 0)?.['A189'] === 1) {
      scene.text('Friendship with Niko:');
      qspCall(s, 'journal', 'relindex', 'A189');
    }
    scene.text('<center><h2>Outcast/Loner Relations</h2></center>');
    if (((s as any).npc_known ?? 0)?.['A7'] === 1) {
      scene.text('Friendship with Lesco:');
      qspCall(s, 'journal', 'relindex', 'A7');
    }
    if (((s as any).npc_known ?? 0)?.['A159'] === 1) {
      scene.text('Friendship with Petia:');
      qspCall(s, 'journal', 'relindex', 'A159');
    }
    if (((s as any).soniaQW ?? 0)?.['slut'] > 0  &&  ((s as any).npc_known ?? 0)?.['A25'] === 1) {
      scene.text('Friendship with Sonia:');
      qspCall(s, 'journal', 'relindex', 'A25');
    }
    if (((s as any).fedormasha ?? 0) === 1  &&  ((s as any).npc_known ?? 0)?.['A5'] === 1) {
      scene.text('Friendship with Fedor:');
      qspCall(s, 'journal', 'relindex', 'A5');
    }
    scene.text('<center><h2>Teachers/Coaches/School Staff Relations</h2></center>');
    if (((s as any).npc_known ?? 0)?.['A26'] === 1) {
      scene.text('Friendship with Anatoly Tsarev (Math Teacher):');
      qspCall(s, 'journal', 'relindex', 'A26');
    }
    if (((s as any).npc_known ?? 0)?.['A69'] === 1) {
      scene.text('Friendship with Mikhail Nikolaevich (Volleyball Coach):');
      qspCall(s, 'journal', 'relindex', 'A69');
    }
    if (((s as any).npc_known ?? 0)?.['A128'] === 1) {
      scene.text('Friendship with Makar Vasilyev (Art Teacher):');
      qspCall(s, 'journal', 'relindex', 'A128');
    }
    if (((s as any).npc_known ?? 0)?.['A129'] === 1) {
      scene.text('Friendship with Serafim Ivanov (Computer Science Teacher):');
      qspCall(s, 'journal', 'relindex', 'A129');
    }
    if (((s as any).npc_known ?? 0)?.['A130'] === 1) {
      scene.text('Friendship with Ilya Yenotin (Literature Teacher):');
      qspCall(s, 'journal', 'relindex', 'A130');
    }
    if (((s as any).npc_known ?? 0)?.['A131'] === 1) {
      scene.text('Friendship with Viktor Pavlovich (P.E. Teacher):');
      qspCall(s, 'journal', 'relindex', 'A131');
    }
    if (((s as any).npc_known ?? 0)?.['A132'] === 1) {
      scene.text('Friendship with Ruslan Kuznetsov (Shop Teacher):');
      qspCall(s, 'journal', 'relindex', 'A132');
    }
    if (((s as any).npc_known ?? 0)?.['A133'] === 1) {
      scene.text('Friendship with Rolan Metveev (Janitor):');
      qspCall(s, 'journal', 'relindex', 'A133');
    }
    if (((s as any).npc_known ?? 0)?.['A134'] === 1) {
      scene.text('Friendship with Aleksandrina Volkov (Headmistress):');
      qspCall(s, 'journal', 'relindex', 'A134');
    }
    if (((s as any).npc_known ?? 0)?.['A135'] === 1) {
      scene.text('Friendship with Yeva Sokoloff (Geography Teacher):');
      qspCall(s, 'journal', 'relindex', 'A135');
    }
    if (((s as any).npc_known ?? 0)?.['A136'] === 1) {
      scene.text('Friendship with Olga Aleksandrov (School Nurse):');
      qspCall(s, 'journal', 'relindex', 'A136');
    }
    if (((s as any).npc_known ?? 0)?.['A137'] === 1) {
      scene.text('Friendship with Raven Braakman (English Teacher):');
      qspCall(s, 'journal', 'relindex', 'A137');
    }
    if (((s as any).npc_known ?? 0)?.['A138'] === 1) {
      scene.text('Friendship with Arina Orlov (Biology Teacher):');
      qspCall(s, 'journal', 'relindex', 'A138');
    }
    if (((s as any).npc_known ?? 0)?.['A93'] === 1  ||  ((s as any).npc_rel ?? 0)?.['A41'] > 0  ||  ((s as any).npc_rel ?? 0)?.['A42'] > 0  ||  ((s as any).npc_known ?? 0)?.['A43'] === 1  ||  ((s as any).gosh ?? 0) > 0  ||  ((s as any).npc_known ?? 0)?.['A220'] === 1  ||  ((s as any).npc_known ?? 0)?.['A219'] === 1  ||  ((s as any).npc_QW ?? 0)?.['A192'] > 0  ||  ((s as any).npc_known ?? 0)?.['A218'] === 1) {
    }
  }
  scene.build();
}

function enterNpcPreview(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/characters/shared/headshots_main/${((s as any).rel_id ?? 0)}.jpg`);
  // TODO-QSP: dynamic text: <th width="30%"><<$npc_firstname['A<<rel_id>>']>> <<$npc_lastname['A<<rel_id>>']...
  scene.text(`<th width="30%">${qspUntranslated(s, "npc_firstname['A<<rel_id", { location: "beta_journal_relationships" })}']>> ${qspUntranslated(s, "npc_lastname['A<<rel_id", { location: "beta_journal_relationships" })}']>> (${qspUntranslated(s, "npc_nickname['A<<rel_id", { location: "beta_journal_relationships" })}']>>):`);
  qspCall(s, 'journal', 'relindex', 'A' + qspUntranslated(s, "rel_id>", { location: "beta_journal_relationships" }) + '');
  scene.text('</th><th align left>Events</th></tr>');
  scene.build();
}

function enterVcard(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).locArgs?.[1] ?? 0))) {
    // TODO-QSP: gt $loc_id, 'failure', 'id'
  }
  if (((s as any).npc_quest ?? 0)?.['q_next'] === '') {
    (s as any).qstage = 1;
  }
  qspCall(s, 'quest_data_<<$quest_id>>', 'init');
  if (((s as any).npc_quest ?? 0)?.['body'] ==='') {
    // TODO-QSP: gt $loc_id, 'failure', 'quest_body'
  }
  if (((s as any).npc_quest ?? 0)?.['q_next'] === '') {
    // TODO-QSP: gt $loc_id, 'failure', 'nav_forward'
  }
  if (((s as any).npc_quest ?? 0)?.['q_back'] === '') {
    // TODO-QSP: gt $loc_id, 'failure', 'nav_back'
  }
  // TODO-QSP: $vcard += '<center><h3>Ballet Quests - Characters</h3></center>'
  // TODO-QSP: $vcard += '<br>'
  // TODO-QSP: $vcard += '<div width="80%">'
  // TODO-QSP: $vcard += '<div style="width: 120px; padding: 0; float:left"><img style="height:100px;" src="<<$npc_...
  // TODO-QSP: $vcard += '<div style="padding: 0;">'
  // TODO-QSP: $vcard += '<p><ul style="margin:0; padding:0;">Name: <<$npc_firstname[''<<$quest_id>>'']>> "<<$npc_n...
  // TODO-QSP: $vcard += '<ul style="margin:0; padding:0;">Date of Birth: ' + func('shortgs', 'convert_dob', ARGS[1...
  // TODO-QSP: $vcard += '<ul style="margin:0; padding:0;">Home: ' + iif($npc_home['$quest_id'] = '', 'Not known', ...
  // TODO-QSP: $vcard += '<ul style="margin:0; padding:0;">Location: Unknown</ul>'
  if (((s as any).debug ?? 0)?.['code'] === 1) {
    qspCall(s, 'quest_data_a<<ARGS[1]>>', 'debug');
    // TODO-QSP: $vcard += '<ul style="margin:0; padding:0;">Debug Vars:<a href="exec:msg <<$npc_quest[''debug_data''...
  }
  // TODO-QSP: $vcard += '</p></div>'
  // TODO-QSP: $vcard += '</div>'
  // TODO-QSP: $vcard += '<br>'
  // TODO-QSP: $vcard
  // TODO-QSP: $qsteps +=  '<div width = "80%">'
  // TODO-QSP: $qsteps +=  '<div style="padding: 10px;">'
  // TODO-QSP: $qsteps +=  '<h4>🔎 Quest hints:</h4>'
  if ((!((s as any).journal_hints ?? 0))) {
    // TODO-QSP: $qsteps +=  '<a href="exec: journal_hints = 1 & gt ''<<$loc_id>>'', ''vcard'', <<ARGS[1]>>" >Enable ...
  } else {
    // TODO-QSP: $qsteps +=  $npc_quest['hints']
    // TODO-QSP: $qsteps += '<br> <br>'
    // TODO-QSP: $qsteps +=  '<a href="exec: journal_hints = 0 & gt ''<<$loc_id>>'', ''vcard'', <<ARGS[1]>>">Disable ...
  }
  // TODO-QSP: $qsteps +=  '<br>'
  // TODO-QSP: $qsteps +=  '<h4>🧭 Quest requisites:</h4>'
  // TODO-QSP: $qsteps +=  '<p><<$npc_quest[''body'']>></p>'
  // TODO-QSP: $qsteps +=  '<br>'
  // TODO-QSP: $qsteps +=  '</div>'
  // TODO-QSP: $qsteps +=  '<div style="padding:5px; align: center;">'
  // TODO-QSP: $qsteps +=  '<center><h5>Quest History</h5></center>'
  if (((s as any).npc_quest ?? 0)?.['q_next'] === 'null') {
  }
  if (((s as any).npc_quest ?? 0)?.['q_back'] === 'null') {
  }
  // TODO-QSP: $qsteps +=  '<center><<$back_nav>> | <<$next_nav>></center>'
  // TODO-QSP: $qsteps +=  '</div>'
  // TODO-QSP: $qsteps +=  '</div>'
  // TODO-QSP: $qsteps +=  '<br>'
  // TODO-QSP: $qsteps +=  '<br>'
  // TODO-QSP: $qsteps
  scene.build();
}

function enterNavigation(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) !== ''  &&  ((s as any).qstage ?? 0) === 1) {
    (s as any).npc_quest['q_back'] = 'null';
  } else {
    if (((s as any).qstage ?? 0) > 1  &&  ((s as any).nav_click ?? 0) === 'next') {
      (s as any).qstage = ((s as any).qstage ?? 0) + (1);
    } else {
      if (((s as any).qstage ?? 0) >= 2  &&  ((s as any).nav_click ?? 0) ==='back') {
        (s as any).qstage = ((s as any).qstage ?? 0) - (1);
      } else {
        (s as any).debug['journal'] = 'Navigation failed to be set.';
      }
    }
  }
  qspCall(s, 'quest_data_<<$quest_id>>', 'init');
  qspCall(s, 'beta_journal_quests', 'init');
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'init':
      enterInit(s, scene);
      break;
    case 'rel_family':
      enterRelFamily(s, scene);
      break;
    case 'rel_spouse_kids':
      enterRelSpouseKids(s, scene);
      break;
    case 'rel_pavlovsk':
      enterRelPavlovsk(s, scene);
      break;
    case 'rel_school':
      enterRelSchool(s, scene);
      break;
    case 'rel_city':
      enterRelCity(s, scene);
      break;
    case 'rel_gadukino':
      enterRelGadukino(s, scene);
      break;
    case 'rel_pushkin':
      enterRelPushkin(s, scene);
      break;
    case 'relationstab':
      enterRelationstab(s, scene);
      break;
    case 'npc_preview':
      enterNpcPreview(s, scene);
      break;
    case 'vcard':
      enterVcard(s, scene);
      break;
    case 'navigation':
      enterNavigation(s, scene);
      break;
    default:
      enterInit(s, scene);
      break;
  }
}

export const beta_journal_relationships: LocationDef = {
  name: 'beta_journal_relationships',
  title: ' You have to work on your clique standing. You\'re in danger of being cast out.',
  region: 'other',
  enter: enter,
};
