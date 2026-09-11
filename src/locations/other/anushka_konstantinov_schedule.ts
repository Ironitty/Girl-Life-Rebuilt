// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterGetLocation(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locat ?? 0)?.['A144'] === 0) {
    ((s as any).npcLocation ?? {})['A144'] = 'Anushka not home Fri and Sat \'+func(\'time\', \'get_time_string\', 20, 0)+\' for rest of night';
  } else {
    if (((s as any).locat ?? 0)?.['A144'] === 1) {
      ((s as any).npcLocation ?? {})['A144'] = 'Anushka in the hallway at her city apartment';
    } else {
      if (((s as any).locat ?? 0)?.['A144'] === 2) {
        ((s as any).npcLocation ?? {})['A144'] = 'Anushka in her room at her city apartment';
      } else {
        if (((s as any).locat ?? 0)?.['A144'] === 3) {
          ((s as any).npcLocation ?? {})['A144'] = 'Anushka in Radomir\'s room at her city apartment';
        } else {
          if (((s as any).locat ?? 0)?.['A144'] === 4) {
            ((s as any).npcLocation ?? {})['A144'] = 'Anushka in the kitchen at her city apartment';
          } else {
            if (((s as any).locat ?? 0)?.['A144'] === 5) {
              ((s as any).npcLocation ?? {})['A144'] = 'Anushka in the livingroom at her city apartment';
            } else {
              if (((s as any).locat ?? 0)?.['A144'] === 6) {
                ((s as any).npcLocation ?? {})['A144'] = 'Anushka in Valentin and Arkadi\'s room';
              } else {
                if (((s as any).locat ?? 0)?.['A144'] === 7) {
                  ((s as any).npcLocation ?? {})['A144'] = 'Anushka in the bathroom';
                } else {
                  if (((s as any).locat ?? 0)?.['A144'] === 8) {
                    ((s as any).npcLocation ?? {})['A144'] = 'Anushka is in the garage with the band Wed \'+func(\'time\', \'get_time_string\', 18, 0)+\' - \'+func(\'time\', \'get_time_string\', 23, 0)+\'';
                  } else {
                    if (((s as any).locat ?? 0)?.['A144'] === 9) {
                      ((s as any).npcLocation ?? {})['A144'] = 'Anushka is at her job at the The Coffee Hole';
                    } else {
                      if (((s as any).locat ?? 0)?.['A144'] === 10) {
                        ((s as any).npcLocation ?? {})['A144'] = 'Anushka is at the University classes \'+func(\'time\', \'get_time_string\', 9, 0)+\' to \'+func(\'time\', \'get_time_string\', 15, 0)+\'';
                      } else {
                        if (((s as any).locat ?? 0)?.['A144'] === 11) {
                          ((s as any).npcLocation ?? {})['A144'] = 'Anushka is at the modeling studio First Sat of each month \'+func(\'time\', \'get_time_string\', 8, 0)+\' to \'+func(\'time\', \'get_time_string\', 16, 0)+\'';
                        } else {
                          if (((s as any).locat ?? 0)?.['A144'] === 12) {
                            ((s as any).npcLocation ?? {})['A144'] = 'Anushka is at the University Library Mon and Wed from \'+func(\'time\', \'get_time_string\', 15, 0)+\' till \'+func(\'time\', \'get_time_string\', 18, 0)+\'';
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

function enterJournal(s: GameState, scene: SceneBuilder): void {
  if (((s as any).yearstart ?? 0) > 1) {
    if (((s as any).anushkaCityQW ?? 0)?.['first_visit'] === 0) {
      scene.text('I don\'t know where she lives yet, but I know her from school.');
    } else {
      if (((s as any).anushkaCityQW ?? 0)?.['first_visit'] === 1) {
        scene.text('She told me where her apartment in the city is, but I haven\'t been there with her.');
      } else {
        if (((s as any).anushkaCityQW ?? 0)?.['first_visit'] >= 2) {
          scene.text('I\'ve visited her at her apartment. I should visit her again.');
        }
      }
    }
  } else {
    if (((s as any).anushkaQW ?? 0)?.['first_visit'] === 0) {
      scene.text('I don\'t know where Anushka lives yet.');
    } else {
      scene.text('I\'ve been to Anushka\'s apartment. I should visit her again.');
    }
  }
  if (((s as any).anushkaQW ?? 0)?.['sveta_love'] > 10) {
    scene.text('I\'ve realized I\'m in love with Anushka, even though she\'s made it pretty clear she isn\'t looking for anything romantic. Maybe I can change her mind.');
  } else {
    if (((s as any).anushkaQW ?? 0)?.['kiss'] <= 5) {
      scene.text('I think Anushka is really pretty and I would like to be more than just friends with her. Hopefully she will do more if we have done enough kissing.');
    } else {
      scene.text('Anushka is really pretty, I think I definitely want to go further than just kissing.');
    }
  }
  if (((s as any).npc_had_sex ?? 0)?.['A144'] > 0  &&  ((s as any).anushkaQW ?? 0)?.['dreams'] < 3) {
    scene.text('Anushka has started telling me about some strange dreams she\'s been having lately. I should keep talking with her at her place to hear more about them.');
  }
  if (((s as any).npc_had_sex ?? 0)?.['A144'] > 0  &&  ((s as any).mc_inventory ?? 0)?.['strapon'] > 0  &&  ((s as any).anushkaQW ?? 0)?.['strapon'] === 0) {
    scene.text('I have a strap-on. Maybe Anushka would be up for trying it next time we\'re together.');
  }
  if (((s as any).anushkaQW ?? 0)?.['valeria_introduced'] >= 1) {
    scene.text('Anushka\'s mother, Valeria, doesn\'t think much of me. I should be careful what I say around her.');
  }
  if (((s as any).anushkaQW ?? 0)?.['marspy'] === 1  ||  ((s as any).anushkaQW ?? 0)?.['radspy'] === 1  ||  ((s as any).anushkaQW ?? 0)?.['valspy'] === 1) {
    scene.text('I\'ve caught Anushka with one of the guys who live with her before, through her bedroom door. I\'m not sure who else I might run into if I show up unannounced.');
  }
  if (((s as any).yearstart ?? 0) > 1  &&  ((s as any).anushkaQW ?? 0)?.['photoshoot'] === 1  &&  ((s as any).npc_rel ?? 0)?.['A144'] >= 60) {
    scene.text('I have a camera, and Anushka works late shifts at the Coffee Hole. If I stick around until closing sometime, she might be up for an after-hours photo shoot.');
  }
  if (((s as any).gopnikbandQW ?? 0)?.['on_tour'] === 1  &&  (((s as any).npc_rel ?? 0)?.['A144'] >= 50  ||  ((s as any).anushkaQW ?? 0)?.['num_tour_SMS_send'] > 0)) {
    scene.text('Anushka\'s band is on tour for the summer. I should keep checking my phone for messages from her.');
  } else {
    if (((s as any).anushkaQW ?? 0)?.['num_tour_SMS_send'] === 0  &&  (((s as any).gopnikbandQW ?? 0)?.['on_tour'] === 1  ||  ((s as any).year ?? 0) > 2017  ||  (((s as any).year ?? 0) === 2017  &&  ((s as any).month ?? 0) > 8)  ||  (((s as any).year ?? 0) === 2017  &&  ((s as any).month ?? 0) === 8  &&  ((s as any).day ?? 0) >= 19))) {
      scene.text('Anushka\'s band went on tour over the summer, but I wasn\'t close enough with her for her to keep in touch while they were away.');
    }
  }
  if (((s as any).artemQW ?? 0)?.['nush3some'] === -1) {
    scene.text('Anushka made it clear she\'s not interested in another threesome with Artem.');
  } else {
    if (((s as any).artemQW ?? 0)?.['nush3some_again'] >= 7) {
      scene.text('Threesomes with Artem and Anushka have become a regular thing between the three of us.');
    } else {
      if (((s as any).artemQW ?? 0)?.['nush3some'] >= 2) {
        scene.text('Artem, Anushka, and I have had more than one threesome now. I get the feeling it could become a regular thing if we keep it up.');
      } else {
        if (((s as any).artemQW ?? 0)?.['nush3some'] >= 1) {
          scene.text('Artem and I have talked Anushka into a threesome. I should follow through soon.');
        } else {
          if (((s as any).artemQW ?? 0)?.['nush3some_ask'] >= 1) {
            scene.text('Artem and I have been talking about bringing Anushka into things. I should keep working on convincing her.');
          }
        }
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'getLocation':
      enterGetLocation(s, scene);
      break;
    case 'journal':
      enterJournal(s, scene);
      break;
    default:
      enterGetLocation(s, scene);
      break;
  }
}

export const anushka_konstantinov_schedule: LocationDef = {
  name: 'anushka_konstantinov_schedule',
  title: 'I don\'t know where she lives yet, but I know her from school',
  region: 'other',
  enter: enter,
};
