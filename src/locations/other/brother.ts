import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'boystat', 'A34');
  (s as any).dick = ((s as any).npc_dick ?? 0)?.['A' + String(34)];
  scene.text('<center><b>Kolka</b></center>');
  scene.img('images/characters/shared/headshots_main/big34.jpg');
  // TODO-QSP: dynamic text: Kolka is your <<brotherQW['Age']>> year old brother. While you share the same mo...
  scene.text(`Kolka is your ${((s as any).brotherQW ?? 0)?.['Age']} year old brother. While you share the same mother, Kolka's dad is your and Anya's stepfather.`);
  if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
    scene.text('He\'s a student at the same school as you. You can usually find him at home playing video games or playing football with his friends.');
  } else {
    scene.text('He\'s a student at the school you used to attend. You can usually find him at home playing video games or playing football with his friends.');
  }
  if (((s as any).brotherQW ?? 0)?.['Sex'] >= 10  &&  ((s as any).npc_rel ?? 0)?.['A34'] >= 80) {
    scene.text('You and your brother are lovers.');
  } else {
    scene.text('You and your brother are good friends with benefits.');
    if (((s as any).brotherQW ?? 0)?.['Sex'] > 5  &&  ((s as any).npc_rel ?? 0)?.['A34'] >= 40  &&  ((s as any).npc_rel ?? 0)?.['A34'] < 60) {
      scene.text('You are siblings with benefits.');
    } else {
      scene.text('You and your brother argue all the time.');
      if (((s as any).npc_rel ?? 0)?.['A34'] >= 20  &&  ((s as any).npc_rel ?? 0)?.['A34'] < 40) {
        scene.text('You and your brother bicker sometimes.');
      } else {
        scene.text('You and your brother have a normal relationship.');
        if (((s as any).npc_rel ?? 0)?.['A34'] >= 60  &&  ((s as any).npc_rel ?? 0)?.['A34'] < 80) {
          scene.text('You have a good relationship with your brother.');
        } else {
          scene.text('Your brother is practically one of your closest friends.');
        }
        if (((s as any).locat ?? 0)?.['Kolka'] === 7  ||  ((s as any).locat ?? 0)?.['Kolka'] === 11) {
          if ((((s as any).cumloc ?? 0)[1] > 0  ||  ((s as any).cumloc ?? 0)[4] > 0  ||  ((s as any).cumloc ?? 0)[8] > 0  ||  ((s as any).cumloc ?? 0)[9] > 0  ||  ((s as any).cumloc ?? 0)[10] > 0  ||  ((s as any).cumloc ?? 0)[14] > 0  ||  ((s as any).cumloc ?? 0)[15] > 0)  &&  ((s as any).clothingworntype ?? 0) === 'nude') {
            if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).cumloc ?? 0)[1] === 1) {
              if (((s as any).brotherQW ?? 0)?.['know_slut'] < 1) {
                (s as any).brotherQW['know_slut'] = 1;
              }
              scene.text('Your brother points at your crotch, "Eww, there\'s… <i>something</i> on your pussy. You should go wash that off."');
              if (((s as any).brotherQW ?? 0)?.['Sex'] === 0) {
                qspCall(s, 'npc_relationship', 'modify', 'A34', (-1));
                return;
              }
            } else {
              if (((s as any).brotherQW ?? 0)?.['know_slut'] < 1) {
                (s as any).brotherQW['know_slut'] = 1;
              }
              scene.text('Kolka calls out to you, "You\'ve got… <i>something</i> on your butt, go wash yourself."');
              if (((s as any).brotherQW ?? 0)?.['Sex'] === 0) {
                qspCall(s, 'npc_relationship', 'modify', 'A34', (-1));
                return;
              }
              if (((s as any).brotherQW ?? 0)?.['know_slut'] < 1) {
                (s as any).brotherQW['know_slut'] = 1;
              }
              scene.text('Kolka recoils at your appearance, "Gross! You\'ve got cum all over yourself, you whore!"');
              if (((s as any).brotherQW ?? 0)?.['Sex'] === 0) {
                qspCall(s, 'npc_relationship', 'modify', 'A34', (-1));
                return;
              }
            }
          }
          if (((s as any).cumloc ?? 0)[11] === 1  &&  ((s as any).evgenQW ?? 0) <= 3) {
            if (((s as any).brotherQW ?? 0)?.['know_slut'] < 1) {
              (s as any).brotherQW['know_slut'] = 1;
            }
            if (((s as any).cumloc ?? 0)[11] === 1) {
              // TODO-QSP: dynamic text: Kolka nearly gags and points at your face, "Gross, <<$pcs_nickname>>! Why do you...
              scene.text(`Kolka nearly gags and points at your face, "Gross, ${((s as any).pcs_nickname ?? 0)}! Why do you have cum on your face?"`);
            } else {
              scene.text('Your brother moves back when he sees the cum on your face, "Go wash your face before someone else sees you! That\'s disgusting!"');
            }
            if (((s as any).brotherQW ?? 0)?.['Sex'] === 0) {
              qspCall(s, 'npc_relationship', 'modify', 'A34', (-1));
              return;
            }
          }
          if ((((s as any).cumloc ?? 0)[6] === 1  ||  ((s as any).cumloc ?? 0)[7] === 1)  &&  ((s as any).clothingworntype ?? 0) !== 'nude') {
            // TODO-QSP: dynamic text: Kolka looks at your clothes, "You're dirty. Go change your clothes or at least g...
            scene.text(`Kolka looks at your clothes, "You're dirty. Go change your clothes or at least get ${((s as any).npc_nickname ?? 0)?.['A29']} to wash them."`);
          }
          if (((s as any).spanked ?? 0) > 1  &&  ((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).pantyworntype ?? 0) === 'none') {
            scene.text('Your brother grins and stares at your backside, "Got a sore bum? Did someone punish you? You bad girl."');
          }
          if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).towel ?? 0) === 1  &&  ((s as any).pantyworntype ?? 0) === 'none') {
            if (((s as any).brotherQW ?? 0)?.['Sex'] < 1) {
              // TODO-QSP: dynamic text: Your brother sarcastically comments on the small towel you are wearing, "<<$pcs_...
              scene.text(`Your brother sarcastically comments on the small towel you are wearing, "${((s as any).pcs_nickname ?? 0)}, are you sure that is not a hand towel?"`);
            } else {
              scene.text('Your brother sarcastically comments on the small towel you are wearing, "Are you wearing that for me, sis?"');
            }
          } else {
            scene.text('Kolka eyes linger on your hairy pussy. "You should have shaved," he comments. "It looks like you\'re growing a forest down there."');
            if (((s as any).brotherQW ?? 0)?.['Sex'] < 2) {
              (s as any).brotherQW['Sex'] = 2;
            }
            if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).braworntype ?? 0) === 'none') {
              if (((s as any).brotherQW ?? 0)?.['Sex'] >= 7) {
                // TODO-QSP: dynamic text: Kolka looks you over, his eyes quickly glancing back and forth between your <<$t...
                scene.text(`Kolka looks you over, his eyes quickly glancing back and forth between your ${((s as any).titsize ?? 0)} breasts and ${((s as any).pc_desc ?? 0)?.['pubes']} pussy, "Wow, ${((s as any).pcs_nickname ?? 0)}, you have an amazing body."`);
              } else {
                scene.text('Kolka\'s eyes go wide at your brazen display, "What a view! Have you decided to become a nudist?"');
                if (((s as any).brotherQW ?? 0)?.['Sex'] < 2) {
                  (s as any).brotherQW['Sex'] = 2;
                }
                if (((s as any).npc_rel ?? 0)?.['A34'] < 50) {
                  qspCall(s, 'npc_relationship', 'modify', 'A34', 1);
                }
              }
            }
          }
          if (((s as any).loc ?? 0) === 'gschool_grounds') {
            if (((s as any).npc_rel ?? 0)?.['A34'] < 20) {
              // TODO-QSP: dynamic text: Your brother groans in frustration, "Ugh, go away, <<$pcs_nickname>>! Go bother ...
              scene.text(`Your brother groans in frustration, "Ugh, go away, ${((s as any).pcs_nickname ?? 0)}! Go bother someone else!"`);
              return;
            } else {
              if (((s as any).evgenQW ?? 0) >= 4  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 150  &&  ((s as any).kolkaseepornday ?? 0) !== ((s as any).daystart ?? 0)) {
                scene.text('Your brother grins, "Hey, sis! We\'re done playing for now. Let\'s go watch some porn."');
                scene.actions([
                  { label: 'Go with the boys', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['seeporn', ''] },
                ]);
              } else {
                scene.text('The guys gather around you. Kolka speaks up, "We just finished playing, so let\'s go watch some porn."');
                if (((s as any).evgenQW ?? 0) < 4  ||  ((s as any).kolkaseepornday ?? 0) === ((s as any).daystart ?? 0)) {
                  // TODO-QSP: dynamic text: Your brother grins, "Hi, <<$pcs_nickname>>. Fancy a game of football?"
                  scene.text(`Your brother grins, "Hi, ${((s as any).pcs_nickname ?? 0)}. Fancy a game of football?"`);
                  if (((s as any).PSport ?? 0) === 0) {
                    scene.text('Kolka points at your outfit, "Oh, you can\'t play dressed like that! Go put on some sportswear, or just watch us play if you want."');
                  } else {
                    scene.text('He adds, "Or you could just watch us."');
                    if (((s as any).pcs_stam ?? 0) >= (5 * ((s as any).mult ?? 0) * (10 - ((s as any).sport_clothes_exercise_bonus ?? 0))) / 2) {
                      scene.actions([
                        { label: 'Play football', handler: (st: GameState) => {
    (s as any).playfootball = 1;
  }, goto: ['brother', 'playfootball'] },
                      ]);
                    } else {
                      scene.text('You are too tired to play.');
                    }
                  }
                  scene.actions([
                    { label: 'Watch as they play', handler: (st: GameState) => {
    (s as any).playfootball = 0;
  }, goto: ['brother', 'playfootball'] },
                  ]);
                }
                scene.actions([
                  { label: 'Go watch porn', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['seeporn', ''] },
                ]);
              }
            }
            if (((s as any).loc ?? 0) === 'sitrPar'  ||  (((s as any).loc ?? 0) === 'family'  &&  ((s as any).loc_arg ?? 0) === 'sofa')) {
              if (((s as any).locat ?? 0)?.['Kolka'] === 11  ||  ((s as any).locat ?? 0)?.['Kolka'] === 2) {
                if (((s as any).locat ?? 0)?.['Stepdad'] !== 10  &&  ((s as any).locat ?? 0)?.['Mother'] !== 19  &&  ((s as any).locat ?? 0)?.['Mother'] !== 24) {
                  if (((s as any).brotherQW ?? 0)?.['Sex'] < 5  &&  ((s as any).brotherQW ?? 0)?.['kiss'] >= 1  &&  ((s as any).brotherkisstalk ?? 0) < 1) {
                    scene.actions([
                      { label: 'Talk about the kiss', goto: ['brother', 'kiss_talk'] },
                    ]);
                  } else {
                    scene.actions([
                      { label: 'Make out with your brother', goto: ['brother2', 'kiss'] },
                    ]);
                  }
                  if (((s as any).NatbelQW ?? 0)?.['KolkaTease'] === 1) {
                    scene.actions([
                      { label: 'Ask if he liked the show', goto: ['brother2', 'nattalk'] },
                    ]);
                  }
                  if (((s as any).brotherQW ?? 0)?.['Sex'] > 6  &&  ((s as any).brotherQW ?? 0)?.['Sex'] < 9  &&  ((s as any).brother_DTR ?? 0) === 0) {
                    scene.actions([
                      { label: 'Talk about your relationship', goto: ['brother2', 'DTR'] },
                    ]);
                  }
                }
                if (((s as any).locat ?? 0)?.['Kolka_gaming'] === 1) {
                }
                scene.actions([
                  { label: 'Chat with Kolka', goto: ['brother2', 'chat'] },
                ]);
              }
            }
            if (((s as any).loc ?? 0) === 'sitrPar') {
              qspCall(s, 'brother', 'brotherSexCount');
              if (((s as any).locat ?? 0)?.['Fam_inGad'] === 0  &&  ((s as any).brotherQW ?? 0)?.['piercing_nipples'] === 0  &&  ((s as any).pcs_piercings ?? 0)?.['nipples'] > 0) {
                if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).locat ?? 0)?.['Stepdad'] !== 10  &&  ((s as any).npc_rel ?? 0)?.['A34'] > 85  &&  ((s as any).hour ?? 0) >= 18  &&  ((s as any).hour ?? 0) < 23) {
                  scene.actions([
                    { label: 'Show off your nipple piercings', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (3);
    (s as any).brotherQW['piercing_nipples'] = 1;
    qspCall(s, 'npc_relationship', 'modify', 'A34', 3);
    scene.img('images/characters/pavlovsk/school/boy/kolka/9vh2v.jpg');
    scene.text('"Look what I have," you walk up to Kolka, your chest bare, showing off your nipple piercings. "Don\'t be shy, you can touch them."');
    scene.text('Your brother, dumbfounded by your suggestion, hesitantly touches the piercing on one of your nipples, causing you to moan softly.');
    if (((s as any).brotherQW ?? 0)?.['Sex'] === 0) {
      scene.text('He abruptly withdraws his hand and apologizes for his rudeness. You have no choice but to apologize back; that wasn\'t fair. You cover your chest.');
      qspCall(s, 'arousal', 'foreplay', 1, 'incest');
      qspCall(s, 'stat', '');
    } else {
      scene.text('Seeing the pleasure playing with your nipples brings you, he begins to play harder with your piercings, sometimes squeezing your exposed breasts.');
      // TODO-QSP: dynamic text: After a minute, he releases your <<$titsize>> boobs, saying, "I really like your...
      scene.text(`After a minute, he releases your ${((s as any).titsize ?? 0)} boobs, saying, "I really like your new additions."`);
      qspCall(s, 'arousal', 'foreplay', 1, 'incest');
      qspCall(s, 'stat', '');
    }
    qspCall(s, 'arousal', 'end');
    return;
    scene.actions([
      { label: 'Leave', goto: ['sitrPar', ''] },
    ]);
  } },
                  ]);
                } else {
                  if (((s as any).brotherQW ?? 0)?.['Sex'] < 4) {
                    (s as any).brotherQW['piercing_nipples'] = 1;
                    if (((s as any).npc_rel ?? 0)?.['A34'] >= 70) {
                      scene.text('"Looks good on you," your brother winks, and points toward your pierced nipples.');
                    } else {
                      scene.text('"I don\'t get it, why would you do that to yourself?" Kolka asks, noticing your pierced nipples.');
                      if (((s as any).npc_rel ?? 0)?.['A34'] < 50) {
                        qspCall(s, 'npc_relationship', 'modify', 'A34', 1);
                      }
                    }
                    // TODO-QSP: delact 'Leave'
                    return;
                    scene.actions([
                      { label: 'Leave', goto: ['sitrPar', ''] },
                    ]);
                  } else {
                    if (((s as any).hour ?? 0) >= 18  &&  ((s as any).hour ?? 0) < 23) {
                      qspCall(s, 'npc_relationship', 'modify', 'A34', 3);
                      (s as any).brotherQW['piercing_nipples'] = 1;
                      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
                      if (((s as any).locat ?? 0)?.['Stepdad'] !== 10) {
                        scene.text('"How lovely," Kolka says as he plays with your pierced nipples.');
                      } else {
                        scene.text('"Beautiful," Kolka whispers while gently cupping your breasts and stroking your pierced nipples.');
                        qspCall(s, 'arousal', 'foreplay', 1, 'incest');
                        qspCall(s, 'stat', '');
                      }
                      // TODO-QSP: delact 'Leave'
                      return;
                      scene.actions([
                        { label: 'Leave', goto: ['sitrPar', ''] },
                      ]);
                    }
                  }
                }
              }
              if (((s as any).locat ?? 0)?.['Fam_inGad'] === 0  &&  ((s as any).brotherQW ?? 0)?.['sex_count_today'] > 0  &&  ((s as any).brotherQW ?? 0)?.['last_sex_day'] === ((s as any).daystart ?? 0)) {
                (s as any).brotherrand = Math.floor(Math.random() * 11) + 0;
                if (((s as any).hour ?? 0) < 6  ||  ((s as any).hour ?? 0) === 23) {
                  scene.text('You look at your brother sleeping peacefully on the couch.');
                } else {
                  scene.text('You look at your brother sleeping peacefully on the couch.');
                  if (((s as any).brotherrand ?? 0) < 5) {
                    scene.text('As you look, you can clearly see the outline of his morning wood pitching a tent under the blanket.');
                  }
                  if (((s as any).week ?? 0) < 6  &&  ((s as any).kanikuli ?? 0) === 0) {
                    if (((s as any).brotherwakeup ?? 0) >= 10) {
                      if (((s as any).brotherQW ?? 0)?.['Sex'] >= 5) {
                        scene.actions([
                          { label: 'Wake him up with a handjob', goto: ['brother2', 'morninghj'] },
                        ]);
                      }
                      if (((s as any).brotherQW ?? 0)?.['Sex'] >= 6) {
                        scene.actions([
                          { label: 'Wake him up with a blowjob', goto: ['brother2', 'morningbj'] },
                        ]);
                      }
                    }
                    scene.actions([
                      { label: 'Wake him up for breakfast', goto: ['brother2', 'wakeup'] },
                    ]);
                  }
                  if (((s as any).hour ?? 0) < 7  &&  ((s as any).brotherQW ?? 0)?.['last_sex_day_morning'] === ((s as any).daystart ?? 0)) {
                    scene.text('Your brother is busy getting ready for school.');
                  } else {
                    if (((s as any).locat ?? 0)?.['Kolka'] === 7) {
                      scene.text('Your brother is sitting at the table doing his homework.');
                    } else {
                      scene.text('Your brother is playing video games.');
                    }
                  }
                  if (((s as any).hour ?? 0) > 0  &&  ((s as any).hour ?? 0) < 4  &&  ((s as any).brotherQW ?? 0)?.['Sex'] > 4  &&  ((s as any).brotherQW ?? 0)?.['last_sex_day_night'] !== ((s as any).daystart ?? 0)  &&  ((s as any).locat ?? 0)?.['Mother'] !== 19) {
                    scene.text('As you approach your sleeping brother, he suddenly opens his eyes and looks at you.');
                    scene.text('He points to the mound under his blanket, "Sis, I can\'t get any sleep, can you help?"');
                    scene.actions([
                      { label: 'Help him out', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A34');
    scene.text('"Yes, I know what to do," you say with a smile while he pulls down his pants, showing you his hard cock.');
    (s as any).brotherQW['sex_count_today'] = ((s as any).brotherQW['sex_count_today'] ?? 0) - (1);
    (s as any).brotherQW['last_sex_day_night'] = ((s as any).daystart ?? 0);
    qspCall(s, 'brother', 'brotherSexStart');
  } },
                      { label: 'He\'s on his own there', handler: (st: GameState) => {
    scene.text('"You\'ve got two perfectly good hands for that," you reply with a smile as you turn around to leave.');
    return;
    scene.actions([
      { label: 'Leave', goto: ['sitrPar', ''] },
    ]);
  } },
                    ]);
                  } else {
                    scene.text('When you get close, Kolka turns to you.');
                    scene.text('"Sis, I\'ve got a problem," he points to the lump in his pants. "Can you help me solve it?"');
                    scene.actions([
                      { label: 'Help him out', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A34');
    scene.text('A huge smile crosses your face, "I know what will solve this problem. Take off your pants, but be quiet."');
    // TODO-QSP: dynamic text: Kolka starts to take off his pants, his erect <<npc_dick['A34']>> cm cock quickl...
    scene.text(`Kolka starts to take off his pants, his erect ${((s as any).npc_dick ?? 0)?.['A34']} cm cock quickly popping out.`);
    (s as any).brotherQW['sex_count_today'] = ((s as any).brotherQW['sex_count_today'] ?? 0) - (1);
    (s as any).brotherQW['last_sex_day_evening'] = ((s as any).daystart ?? 0);
    qspCall(s, 'brother', 'brotherSexStart');
  } },
                      { label: 'That is so his problem', handler: (st: GameState) => {
    scene.text('"Poor little Kolka, they sell porn in the local shops. I\'m sure you can work out the rest," you chuckle quietly as you leave.');
    return;
    scene.actions([
      { label: 'Leave', goto: ['sitrPar', ''] },
    ]);
  } },
                    ]);
                  }
                }
              }
              if ((((s as any).week ?? 0) === 6  &&  ((s as any).brotherQW ?? 0)?.['last_day_homework'] === ((s as any).daystart ?? 0) - 1)  ||  (((s as any).week ?? 0) === 7  &&  ((s as any).brotherQW ?? 0)?.['last_day_homework'] === ((s as any).daystart ?? 0) - 2)) {
                (s as any).brotherQW['last_day_homework'] = ((s as any).daystart ?? 0);
              }
              if (((s as any).loc ?? 0) === 'sitrPar'  &&  ((s as any).brotherQW ?? 0)?.['Age'] < 18  &&  ((s as any).kanikuli ?? 0) === 0  &&  ((s as any).npc_rel ?? 0)?.['A34'] >= 20  &&  ((s as any).brotherQW ?? 0)?.['last_day_homework'] !== ((s as any).daystart ?? 0)  &&  ((s as any).locat ?? 0)?.['Kolka'] === 7) {
                if (Math.floor(Math.random() * 3) + 1 === 1) {
                  qspCall(s, 'stat', '');
                  scene.text('<center><b>Kolka</b></center>');
                  scene.img('images/characters/shared/headshots_main/big34.jpg');
                  // TODO-QSP: dynamic text: Kolka, your brother, is <<brotherQW['Age']>> years old. While you share the same...
                  scene.text(`Kolka, your brother, is ${((s as any).brotherQW ?? 0)?.['Age']} years old. While you share the same mother, Kolka's dad is your and Anya's stepfather. He is a student at the same school as you. When not in school, he is either at home playing video games or out playing football with his friends.`);
                  // TODO-QSP: dynamic text: Kolka turns to you and asks, "<<$pcs_nickname>>, can you help me with my homewor...
                  scene.text(`Kolka turns to you and asks, "${((s as any).pcs_nickname ?? 0)}, can you help me with my homework?"`);
                  scene.actions([
                    { label: 'Decline', handler: (st: GameState) => {
    scene.text('You shake your head, "Sorry, little brother. I\'m busy right now."');
    scene.actions([
      { label: 'Leave', goto: ['sitrPar', ''] },
    ]);
  } },
                    { label: 'Agree to help him', goto: ['brother_lessons', 'homework'] },
                  ]);
                } else {
                  scene.actions([
                    { label: 'Offer help with homework', goto: ['brother_lessons', 'homework'] },
                  ]);
                }
              }
            }
          }
        }
        scene.actions([
          { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
        ]);
      }
    }
  }
  scene.build();
}

export const brother: LocationDef = {
  name: 'brother',
  title: 'Kolka',
  region: 'other',
  description: ['He\'s a student at the same school as you. You can usually find him at home playing video games or playing football with his friends.'],
  enter: enter,
};
