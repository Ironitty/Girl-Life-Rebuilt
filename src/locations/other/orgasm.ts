import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).orgasm_buildup = Math.max(0, ((s as any).orgasm_buildup ?? 0) - 70);
  if (((s as any).trait_vars ?? 0)?.['sensitivity'] <= -2  &&  ((s as any).trait_vars ?? 0)?.['sensitivity_override'] === 0) {
    if (((s as any).orgasm_or ?? 0) !== 'custom'  &&  ((s as any).locArgs?.[0] ?? 0) !== 'hypno'  &&  (Math.floor(Math.random() * 9) + 1) > 2) {
      (s as any).orgasm_rand = Math.floor(Math.random() * 4) + 0;
      if ((!((s as any).orgasm_rand ?? 0))) {
        (s as any).orgasm_txt = 'You feel an orgasm building up, the warmth in your abdomen, the tell tale tingles but it just stops and you feel calm again.';
      } else {
        if (((s as any).orgasm_rand ?? 0) === 1) {
          (s as any).orgasm_txt = 'You feel an orgasm building up, but then nothing. Your pussy is still hungry and needy but you feel like you are no closer to release than when you started.';
        } else {
          if (((s as any).orgasm_rand ?? 0) === 2) {
            (s as any).orgasm_txt = 'Gradually the pleasurable sensations spread throughout, you are close, so close, but nothing except even hornier than before.';
          } else {
            (s as any).orgasm_txt = 'You moan with pleasure, riding the edge of an orgasm… but instead of being hit by bliss you just feel an emptiness like your prize was stolen. Why? You need this.';
          }
        }
      }
      // TODO-QSP: jump 'textGoto'
    }
  }
  if (((s as any).orgasm_flag ?? 0)?.['masturbate'] === 1) {
    (s as any).orgasm_masturbate = ((s as any).orgasm_masturbate ?? 0) + (1);
  } else {
    if (((s as any).locArgs?.[1] ?? 0) !== '') {
      if (((s as any).npc_gender ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 0) {
        (s as any).arousal_feed_orgasm_flag = 1;
      }
    }
  }
  if (((s as any).orgasm_flag ?? 0)?.['clit'] === 1) {
    (s as any).orgasm_clit = ((s as any).orgasm_clit ?? 0) + (1);
  } else {
    if (((s as any).orgasm_flag ?? 0)?.['vaginal'] === 1) {
      (s as any).orgasm_vaginal = ((s as any).orgasm_vaginal ?? 0) + (1);
    } else {
      if (((s as any).orgasm_flag ?? 0)?.['anal'] === 1) {
        (s as any).orgasm_anal = ((s as any).orgasm_anal ?? 0) + (1);
      } else {
        if (((s as any).locArgs?.[0] ?? 0) === 'hypno') {
          (s as any).orgasm_hypno = ((s as any).orgasm_hypno ?? 0) + (1);
        }
      }
    }
  }
  (s as any).orgasm = ((s as any).orgasm ?? 0) + (1);
  if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
    ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['orgasm'] = 1;
  }
  if (Object.keys((s as any).stim ?? {}).length > 0) {
    (s as any).orgasm_i = 0;
    // TODO-QSP: :fetish_loop
    (s as any).temp_fetish_name = ((s as any).fetish_name ?? 0)?.[String((s as any).orgasm_i ?? 0)];
    if (((s as any).temp_fetish_name ?? 0) !== 'creampie') {
      if (((s as any).stim ?? 0)?.[String((s as any).temp_fetish_name ?? 0)] === 1) {
        qspCall(s, 'fetish', 'add_pref', ((s as any).temp_fetish_name ?? 0), 2);
      }
    }
    (s as any).orgasm_i = ((s as any).orgasm_i ?? 0) + (1);
    if (((s as any).orgasm_i ?? 0) < Object.keys((s as any).fetish_name ?? {}).length) {
      // TODO-QSP: jump 'fetish_loop'
    }
  }
  if (((s as any).orgasm_or ?? 0) === 'custom'  ||  ((s as any).orgasm_txt ?? 0) !== '') {
  } else {
    if (((s as any).pcs_horny ?? 0) <= 10) {
      (s as any).orgasm_rand = Math.floor(Math.random() * 4) + 0;
      if ((!((s as any).orgasm_rand ?? 0))) {
        (s as any).orgasm_txt = 'You are caught off guard by your arousal and have a surprising, but pleasing orgasm.';
      } else {
        if (((s as any).orgasm_rand ?? 0) === 1) {
          (s as any).orgasm_txt = 'You don\'t realize how aroused you have gotten until you moan in orgasm.';
        } else {
          if (((s as any).orgasm_rand ?? 0) === 2) {
            (s as any).orgasm_txt = 'Gradually the pleasurable sensations spread throughout the body and you orgasm.';
          } else {
            (s as any).orgasm_txt = 'Suddenly, you orgasm and moan with pleasure.';
          }
        }
      }
    } else {
      if (((s as any).pcs_horny ?? 0) <= 20) {
        (s as any).orgasm_buildup = ((s as any).orgasm_buildup ?? 0) - (10);
        (s as any).orgasm_rand = Math.floor(Math.random() * 4) + 0;
        if ((!((s as any).orgasm_rand ?? 0))) {
          (s as any).orgasm_txt = 'The combination of sensations is enough to take you past your peak and you orgasm.';
        } else {
          if (((s as any).orgasm_rand ?? 0) === 1) {
            (s as any).orgasm_txt = 'Your breath catches several times as you feel the waves of an orgasm wash over you.';
          } else {
            if (((s as any).orgasm_rand ?? 0) === 2) {
              (s as any).orgasm_txt = 'Your breath shudders as your body tingles.';
            } else {
              (s as any).orgasm_txt = 'Once the sensations pass you can\'t help but grin in the afterglow.';
            }
          }
        }
      } else {
        if (((s as any).pcs_horny ?? 0) <= 30) {
          (s as any).orgasm_buildup = ((s as any).orgasm_buildup ?? 0) - (20);
          (s as any).orgasm_rand = Math.floor(Math.random() * 4) + 0;
          if ((!((s as any).orgasm_rand ?? 0))) {
            (s as any).orgasm_txt = 'A long slow sigh escapes your lips as you ride the wave to its finish.';
          } else {
            if (((s as any).orgasm_rand ?? 0) === 1) {
              (s as any).orgasm_txt = 'Your mouth opens in a silent cry as the sensation courses through your body.';
            } else {
              if (((s as any).orgasm_rand ?? 0) === 2) {
                (s as any).orgasm_txt = 'You bit your lower lip, feeling satisfied, yet wanting more at the same time.';
              } else {
                (s as any).orgasm_txt = 'A feeling of intense concentration followed by a sharp releases shudders you body.';
              }
            }
          }
        } else {
          if (((s as any).pcs_horny ?? 0) <= 40) {
            (s as any).orgasm_buildup = ((s as any).orgasm_buildup ?? 0) - (30);
            (s as any).orgasm_rand = Math.floor(Math.random() * 4) + 0;
            if ((!((s as any).orgasm_rand ?? 0))) {
              (s as any).orgasm_txt = 'That was intense! You can still feel the tingles.';
            } else {
              if (((s as any).orgasm_rand ?? 0) === 1) {
                (s as any).orgasm_txt = 'You excitedly breathed and as you have a shuddering orgasm.';
              } else {
                if (((s as any).orgasm_rand ?? 0) === 2) {
                  (s as any).orgasm_txt = 'Long drawn out moans escape your lips as a long pleasant orgasm hits you.';
                } else {
                  (s as any).orgasm_txt = 'You have an orgasm, leaving you with an incredible pleasurable sensation.';
                }
              }
            }
          } else {
            if (((s as any).pcs_horny ?? 0) <= 50) {
              (s as any).orgasm_buildup = ((s as any).orgasm_buildup ?? 0) - (40);
              (s as any).orgasm_rand = Math.floor(Math.random() * 4) + 0;
              if ((!((s as any).orgasm_rand ?? 0))) {
                (s as any).orgasm_txt = 'An intense orgasm rocks your body and you momentarily forget where you are and what\'s going on.';
              } else {
                if (((s as any).orgasm_rand ?? 0) === 1) {
                  (s as any).orgasm_txt = 'You huddle in convulsions and pant as you wait for them to finish.';
                } else {
                  if (((s as any).orgasm_rand ?? 0) === 2) {
                    (s as any).orgasm_txt = 'You moaned loudly and orgasm from the skillful stimulation.';
                  } else {
                    (s as any).orgasm_txt = 'The abundance of surging emotions, causes you to moan loudly as you orgasm.';
                  }
                }
              }
            } else {
              if (((s as any).pcs_horny ?? 0) <= 60) {
                (s as any).orgasm_buildup = ((s as any).orgasm_buildup ?? 0) - (50);
                (s as any).orgasm_rand = Math.floor(Math.random() * 4) + 0;
                if ((!((s as any).orgasm_rand ?? 0))) {
                  (s as any).orgasm_txt = 'The feelings nearly overwhelm you, as you violently orgasm.';
                } else {
                  if (((s as any).orgasm_rand ?? 0) === 1) {
                    (s as any).orgasm_txt = 'You managed to have a strong orgasm and your whole body shakes for a couple of minutes.';
                  } else {
                    if (((s as any).orgasm_rand ?? 0) === 2) {
                      (s as any).orgasm_txt = 'Gradually a pleasant warmth and pulsation increases in the lower abdomen, that descends to your entire body as you orgasm';
                    } else {
                      (s as any).orgasm_txt = 'Suddenly a sumptuous jolt hits your body and you delight in a powerful orgasm.';
                    }
                  }
                }
              } else {
                if (((s as any).pcs_horny ?? 0) <= 70) {
                  (s as any).orgasm_buildup = ((s as any).orgasm_buildup ?? 0) - (60);
                  if ((Math.floor(Math.random() * 100) + 0) < 1) {
                    (s as any).orgasmic = ((s as any).totminut ?? 0);
                  }
                  (s as any).orgasm_rand = Math.floor(Math.random() * 4) + 0;
                  if ((!((s as any).orgasm_rand ?? 0))) {
                    (s as any).orgasm_txt = 'Shock waves of orgasms roll over you, leaving you a quivering heap.';
                  } else {
                    if (((s as any).orgasm_rand ?? 0) === 1) {
                      (s as any).orgasm_txt = 'Suddenly your muscles tighten and you cum powerfully, while you stifle your moans so no one hears you. Afterwards, you have goosebumps all over your skin. That was just what you needed!';
                    } else {
                      if (((s as any).orgasm_rand ?? 0) === 2) {
                        (s as any).orgasm_txt = 'You can\'t take any more and you explode in a powerful orgasm. Your legs give way.';
                      } else {
                        (s as any).orgasm_txt = 'You bite your lips to keep yourself from screaming while you have an orgasm, like a wanton whore.';
                      }
                    }
                  }
                } else {
                  if (((s as any).pcs_horny ?? 0) <= 80) {
                    (s as any).orgasm_buildup = ((s as any).orgasm_buildup ?? 0) - (70);
                    if ((Math.floor(Math.random() * 100) + 0) < 5) {
                      (s as any).orgasmic = ((s as any).totminut ?? 0);
                    }
                    (s as any).orgasm_rand = Math.floor(Math.random() * 4) + 0;
                    if ((!((s as any).orgasm_rand ?? 0))) {
                      (s as any).orgasm_txt = 'Suddenly, you hit just the right spot and your whole body starts to shiver in orgasm. The intensity of the orgasm nearly makes you scream, but you bite down on your lip and do your best to stifle down the moans so no one hears you.';
                    } else {
                      if (((s as any).orgasm_rand ?? 0) === 1) {
                        (s as any).orgasm_txt = 'Muscles of the vagina began to clinch sharply, your entire abdomen feels as if covered in hot waves of pleasure, you scream from a powerful orgasm.';
                      } else {
                        if (((s as any).orgasm_rand ?? 0) === 2) {
                          (s as any).orgasm_txt = 'The passion rolls, like the waves on the shore, raising you to an all new level of bliss.';
                        } else {
                          (s as any).orgasm_txt = 'Suddenly as if hit by an electric shock and abdomen began pleasant spasms, you squirm biting your lip, to keep from screaming with pleasure.';
                        }
                      }
                    }
                  } else {
                    if (((s as any).pcs_horny ?? 0) <= 90) {
                      (s as any).orgasm_buildup = ((s as any).orgasm_buildup ?? 0) - (80);
                      if ((Math.floor(Math.random() * 100) + 0) < 10) {
                        (s as any).orgasmic = ((s as any).totminut ?? 0);
                      }
                      (s as any).orgasm_rand = Math.floor(Math.random() * 4) + 0;
                      if ((!((s as any).orgasm_rand ?? 0))) {
                        (s as any).orgasm_txt = 'A blazing fire builds inside of you, burning its way out in waves of pleasure. As it sweeps through your body, you moan in a deep orgasm.';
                      } else {
                        if (((s as any).orgasm_rand ?? 0) === 1) {
                          (s as any).orgasm_txt = 'From your groin a pleasant warmth ripples in your lower abdomen and then the feeling intensifies and your whole body tenses as the hot waves of orgasm rush over you. You can not help screaming in pleasure as you writhe under the sensation.';
                        } else {
                          if (((s as any).orgasm_rand ?? 0) === 2) {
                            (s as any).orgasm_txt = 'Gradually your entire body is overcome with hot waves of orgasm, you involuntarily scream and writhing with pleasure.';
                          } else {
                            (s as any).orgasm_txt = 'Gradually a pleasant warmth and pulsating feeling starts in your lower abdomen, the feeling then descends along your entire body as you orgasm.';
                          }
                        }
                      }
                    } else {
                      (s as any).orgasm_buildup = ((s as any).orgasm_buildup ?? 0) - (90);
                      if ((Math.floor(Math.random() * 100) + 0) < 25) {
                        (s as any).orgasmic = ((s as any).totminut ?? 0);
                      }
                      (s as any).orgasm_rand = Math.floor(Math.random() * 4) + 0;
                      if ((!((s as any).orgasm_rand ?? 0))) {
                        (s as any).orgasm_txt = 'An intense erotic sensation builds inside your body, getting stronger and stronger. Then it suddenly bursts, like a dam bursting, with gushing water, you are overwhelmed in a sudden surge of hypersensitivity in every nerve in your body.';
                      } else {
                        if (((s as any).orgasm_rand ?? 0) === 1) {
                          (s as any).orgasm_txt = 'You feel a fire building inside your body and then like an erupting volcano, your whole body starts to shake, pulse, and become hypersensitive for several moments. Leaving you feeling light headed and unable to move for a few seconds.';
                        } else {
                          if (((s as any).orgasm_rand ?? 0) === 2) {
                            (s as any).orgasm_txt = 'Every muscle in your body begins to tighten tighter and tighter, then they begin to quiver and pulsate. Your pussy gets so wet it feels like someone turned a faucet on inside of you as your vagina pulses uncontrollably.';
                          } else {
                            (s as any).orgasm_txt = 'You feel an intense almost primal feeling building up inside of you, leaving you unable to focus on anything, but wanting more. Then the crashing waves of pleasure soar through your whole body, your vision goes blurry and you feel light headed for several moments.';
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
  if (((s as any).orgasmic ?? 0) > 0) {
    (s as any).orgasmic = ((s as any).totminut ?? 0);
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (10);
    if (((s as any).pcs_horny ?? 0) > 90) {
      (s as any).pcs_horny = 90;
    }
    (s as any).orgasm_or = 'yes';
  } else {
    (s as any).pcs_horny = 0;
  }
  if (((s as any).orgasm_buildup ?? 0) < 0) {
    (s as any).orgasm_buildup = 0;
  }
  // TODO-QSP: :textGoto
  if (((s as any).arousalVars ?? 0)?.['text'] === 0) {
  }
  (s as any).orgasm_last_txt = ((s as any).orgasm_txt ?? 0);
  scene.build();
}

export const orgasm: LocationDef = {
  name: 'orgasm',
  region: 'other',
  enter: enter,
};
