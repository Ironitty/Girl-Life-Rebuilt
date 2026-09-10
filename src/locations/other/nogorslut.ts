import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).fame ?? 0)?.['pav_slut'] < 250) {
    if (((s as any).pcs_apprnc ?? 0)/8 === 0) {
      qspCall(s, 'npc_relationship', 'modify', 'A<<numnpc>>', 1);
    } else {
      // TODO-QSP: gs 'npc_relationship', 'modify_exact', 'A<<numnpc>>', pcs_apprnc/8
    }
    if (((s as any).npc_rel ?? 0)?.['A' + String(((s as any).numnpc ?? 0))] < 20) {
      // TODO-QSP: dynamic text: You talk about some random things that happened to you, and <<$npc_firstname['A<...
      scene.text(`You talk about some random things that happened to you, and ${qspUntranslated(s, "npc_firstname['A<<numnpc", { location: "nogorslut" })}']>> listens with a moderate amount of interest.`);
    } else {
      // TODO-QSP: dynamic text: You chat about random topics, and <<$npc_firstname['A<<numnpc>>']>> happily list...
      scene.text(`You chat about random topics, and ${qspUntranslated(s, "npc_firstname['A<<numnpc", { location: "nogorslut" })}']>> happily listens to you and shares some thoughts on them.`);
      if (((s as any).npc_rel ?? 0)?.['A' + String(((s as any).numnpc ?? 0))] >= 80) {
        // TODO-QSP: dynamic text: You chat about random topics and <<$npc_firstname['A<<numnpc>>']>> happily liste...
        scene.text(`You chat about random topics and ${qspUntranslated(s, "npc_firstname['A<<numnpc", { location: "nogorslut" })}']>> happily listens to your stories, sharing several new stories and anecdotes as well.`);
        if (((s as any).numnpc ?? 0) === 1) {
          qspCall(s, 'mood', 'raise', 'small');
          if (((s as any).DimaLoveIgor ?? 0) === 1  &&  (!((s as any).meetDiana ?? 0))) {
            (s as any).meetDiana = 1;
            // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, can you set up a meeting with Diana and me? I'd really l...
            scene.text(`"Hey ${((s as any).pcs_nickname ?? 0)}, can you set up a meeting with Diana and me? I'd really liked that."`);
            scene.text('OMG, this is so awesome. You barely contain yourself as you respond. "I\'ll try, but she can be a bit shy."');
          }
          if (((s as any).meetDianahelp ?? 0) > 0) {
            (s as any).meetDianahelp = ((s as any).meetDianahelp ?? 0) + (1);
            scene.text('"I talked to Diana and she didn\'t seem too keen. I think she finds you a bit intimidating."');
            scene.text('"What? Is this because my family are so rich? Is there some way you could help? What if you two were out on a walk and I could bump into you, then you could tell her how down to earth I am."');
            scene.text('Struggling to not laugh at his pomposity you agree to his plan.');
          }
          if (((s as any).DimaRudeQW ?? 0) > 0  &&  (!((s as any).DimaRudeBlock ?? 0))) {
            if ((!((s as any).kanikuli ?? 0))) {
              scene.text('Dimka looks into your eyes with a disinterested look and after a while says, "Whatever. When the holidays are over, we\'ll go to my place. I\'ll be waiting for you by the school entrance."');
            } else {
              scene.text('Dimka looks into your eyes with a disinterested look and after a while says, "Whatever. After school, we\'re going to my place. I\'ll wait for you by the entrance."');
            }
          }
        } else {
          scene.text('');
          if (((s as any).numnpc ?? 0) === 3) {
            qspCall(s, 'mood', 'raise', 'small');
            if (((s as any).IvanShowerQW ?? 0) === 1) {
              (s as any).IvanShowerQW = 11;
              // TODO-QSP: dynamic text: Ivan thinks for a moment, before he says: "<<$pcs_nickname>>, I would like to ta...
              scene.text(`Ivan thinks for a moment, before he says: "${((s as any).pcs_nickname ?? 0)}, I would like to talk to you about what happened in the shower. You're a great girl, and I had a great time, but I'm not ready for a relationship. I need to put all my energy into my athletics, I think I have a good shot at getting to the Russian National Championships this year. I really cannot afford to be distracted by girls, even girls as attractive as you. So how about we just stick to fooling around a little?"`);
              scene.actions([
                { label: 'Discuss', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img(`images/characters/shared/headshots_main/big${((s as any).numnpc ?? 0)}.jpg`);
    scene.text('You nod at what Ivan says. "Sure Ivan I understand, I am ok with just being friends, really close friends who sometimes fool around in the shower." You say in your best sexy voice with a wink.');
    // TODO-QSP: dynamic text: He gives you a one armed hug. "<<$pcs_nickname>> your the best, not only are you...
    scene.text(`He gives you a one armed hug. "${((s as any).pcs_nickname ?? 0)} your the best, not only are you smoking hot but you are a super cool chick too. If you want to hang out some time you can stop by my place." He pauses a moment and then looks around and leans in close. "Or if you get a little bored during lunch break, you can let me know too." He says with a suggestive tone and waggled eyebrows.`);
    scene.text('You laugh at his silly antics, it is nice to have found a fun guy to hang out with, perhaps you will stop by his place, or maybe even take him up on his offer to make lunch break less boring. "Sure Ivan, I\'ll think about it."');
    if (((s as any).loc ?? 0) !== 'pav_disco') {
      // TODO-QSP: act 'Move away': gt 'gschool_lessons', 'short_break'
    }
    if (((s as any).loc ?? 0) === 'pav_disco') {
      // TODO-QSP: act 'Move away': gt $loc, $loc_arg
    }
    if (((s as any).loc ?? 0) !== 'pav_disco') {
      // TODO-QSP: act 'Tell him you''re bored': gt 'IvanEv', 'Ivan_bored'
    }
  } },
              ]);
            } else {
              // TODO-QSP: dynamic text: You chat about random topics and <<$npc_firstname['A<<numnpc>>']>> happily liste...
              scene.text(`You chat about random topics and ${qspUntranslated(s, "npc_firstname['A<<numnpc", { location: "nogorslut" })}']>> happily listens to your stories, sharing several new stories and anecdotes as well.`);
              if (((s as any).IvanShowerQW ?? 0) === 11  &&  ((s as any).loc ?? 0) !== 'pav_disco') {
                if ((!(Math.floor(Math.random() * 5) + 0))) {
                  // TODO-QSP: dynamic text: You start to talk to Ivan when he leans in closes and whispers in your ear. "Tel...
                  scene.text(`You start to talk to Ivan when he leans in closes and whispers in your ear. "Tell me you're bored ${((s as any).pcs_nickname ?? 0)}."`);
                  scene.actions([
                    { label: 'Leave', goto: ['gschool_lessons', 'short_break'] },
                    { label: 'Go with him', goto: ['IvanEv', 'Ivan_bored'] },
                  ]);
                } else {
                  scene.actions([
                    { label: 'Tell him you\'re bored', goto: ['IvanEv', 'Ivan_bored'] },
                  ]);
                }
              }
            }
          } else {
            scene.text('');
            if (((s as any).numnpc ?? 0) === 5) {
              scene.text('');
            } else {
              scene.text('');
              if (((s as any).numnpc ?? 0) === 7) {
                scene.text('');
              } else {
                scene.text('');
                if (((s as any).numnpc ?? 0) === 9) {
                  scene.text('');
                } else {
                  scene.text('');
                  if (((s as any).numnpc ?? 0) === 11) {
                    scene.text('');
                  } else {
                    scene.text('');
                    if (((s as any).numnpc ?? 0) === 13) {
                      scene.text('');
                    } else {
                      scene.text('');
                      if (((s as any).katjaQW ?? 0)?.['QWstage'] > 2) {
                        (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (10);
                        scene.text('Katja blushes slightly and tries to avoid your gaze, looking away every time you look at her.');
                      }
                      if (((s as any).numnpc ?? 0) === 15) {
                        scene.text('');
                      } else {
                        scene.text('');
                        if (((s as any).numnpc ?? 0) === 17) {
                          scene.text('');
                        } else {
                          scene.text('');
                          if (((s as any).numnpc ?? 0) === 19) {
                            scene.text('');
                          } else {
                            scene.text('');
                            if (((s as any).numnpc ?? 0) === 21) {
                              scene.text('');
                            } else {
                              scene.text('');
                              if (((s as any).numnpc ?? 0) === 23) {
                                scene.text('');
                              } else {
                                scene.text('');
                                if (((s as any).numnpc ?? 0) === 25) {
                                  scene.text('');
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

export const nogorslut: LocationDef = {
  name: 'nogorslut',
  region: 'other',
  enter: enter,
};
