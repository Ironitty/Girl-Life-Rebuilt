import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'boystat', 'A34');
  (s as any).dick = ((s as any).npc_dick ?? 0)?.['A' + String(34)];
  scene.text('<center><b>Kolka</b></center>');
  scene.img('images/characters/shared/headshots_main/big34.jpg');
  // TODO-QSP: dynamic text: Kolka is your <<brotherQW[''Age'']>> year old brother. While you share the same ...
  scene.text(`Kolka is your ${((s as any).brotherQW ?? 0)?.['Age'] ?? ''} year old brother. While you share the same mother, Kolka's dad is your and Anya's stepfather.`);
  if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
    scene.text('He\'s a student at the same school as you. You can usually find him at home playing video games or playing football with his friends.');
  } else {
    if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 1  ||  ((s as any).gschoolVars ?? 0)?.['block'] === 1) {
      scene.text('He\'s a student at the school you used to attend. You can usually find him at home playing video games or playing football with his friends.');
    }
  }
  if (((s as any).brotherQW ?? 0)?.['Sex'] >= 10  &&  ((s as any).npc_rel ?? 0)?.['A34'] >= 80) {
    scene.text('You and your brother are lovers.');
  } else {
    if (((s as any).brotherQW ?? 0)?.['Sex'] >= 10  &&  ((s as any).npc_rel ?? 0)?.['A34'] >= 60  &&  ((s as any).npc_rel ?? 0)?.['A34'] < 80) {
      scene.text('You and your brother are good friends with benefits.');
    } else {
      if (((s as any).brotherQW ?? 0)?.['Sex'] > 5  &&  ((s as any).npc_rel ?? 0)?.['A34'] >= 40  &&  ((s as any).npc_rel ?? 0)?.['A34'] < 60) {
        scene.text('You are siblings with benefits.');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A34'] < 20) {
          scene.text('You and your brother argue all the time.');
        } else {
          if (((s as any).npc_rel ?? 0)?.['A34'] >= 20  &&  ((s as any).npc_rel ?? 0)?.['A34'] < 40) {
            scene.text('You and your brother bicker sometimes.');
          } else {
            if (((s as any).npc_rel ?? 0)?.['A34'] >= 40  &&  ((s as any).npc_rel ?? 0)?.['A34'] < 60) {
              scene.text('You and your brother have a normal relationship.');
            } else {
              if (((s as any).npc_rel ?? 0)?.['A34'] >= 60  &&  ((s as any).npc_rel ?? 0)?.['A34'] < 80) {
                scene.text('You have a good relationship with your brother.');
              } else {
                if (((s as any).npc_rel ?? 0)?.['A34'] >= 80) {
                  scene.text('Your brother is practically one of your closest friends.');
                }
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).locat ?? 0)?.['Kolka'] === 7  ||  ((s as any).locat ?? 0)?.['Kolka'] === 11) {
    if ((((s as any).cumloc ?? 0)[1] > 0  ||  ((s as any).cumloc ?? 0)[4] > 0  ||  ((s as any).cumloc ?? 0)[8] > 0  ||  ((s as any).cumloc ?? 0)[9] > 0  ||  ((s as any).cumloc ?? 0)[10] > 0  ||  ((s as any).cumloc ?? 0)[14] > 0  ||  ((s as any).cumloc ?? 0)[15] > 0)  &&  ((s as any).clothingworntype ?? 0) === 'nude') {
      if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).cumloc ?? 0)[1] === 1) {
        if (((s as any).brotherQW ?? 0)?.['know_slut'] < 1) {
          ((s as any).brotherQW = (s as any).brotherQW ?? {})['know_slut'] = 1;
        }
        scene.text('Your brother points at your crotch, "Eww, there\'s… <i>something</i> on your pussy. You should go wash that off."');
        if (((s as any).brotherQW ?? 0)?.['Sex'] === 0) {
          qspCall(s, 'npc_relationship', 'modify', 'A34', (-1));
          return;
        }
      } else {
        if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).cumloc ?? 0)[4] === 1) {
          if (((s as any).brotherQW ?? 0)?.['know_slut'] < 1) {
            ((s as any).brotherQW = (s as any).brotherQW ?? {})['know_slut'] = 1;
          }
          scene.text('Kolka calls out to you, "You\'ve got… <i>something</i> on your butt, go wash yourself."');
          if (((s as any).brotherQW ?? 0)?.['Sex'] === 0) {
            qspCall(s, 'npc_relationship', 'modify', 'A34', (-1));
            return;
          }
        } else {
          if (((s as any).brotherQW ?? 0)?.['know_slut'] < 1) {
            ((s as any).brotherQW = (s as any).brotherQW ?? {})['know_slut'] = 1;
          }
          scene.text('Kolka recoils at your appearance, "Gross! You\'ve got cum all over yourself, you whore!"');
          if (((s as any).brotherQW ?? 0)?.['Sex'] === 0) {
            qspCall(s, 'npc_relationship', 'modify', 'A34', (-1));
            return;
          }
        }
      }
    }
    if (((s as any).cumloc ?? 0)[11] === 1  &&  ((s as any).evgenQW ?? 0) <= 3) {
      if (((s as any).brotherQW ?? 0)?.['know_slut'] < 1) {
        ((s as any).brotherQW = (s as any).brotherQW ?? {})['know_slut'] = 1;
      }
      if (((s as any).cumloc ?? 0)[11] === 1) {
        // TODO-QSP: dynamic text: Kolka nearly gags and points at your face, "Gross, <<$pcs_nickname>>! Why do you...
        scene.text(`Kolka nearly gags and points at your face, "Gross, ${((s as any).pcs_nickname || '')}! Why do you have cum on your face?"`);
      } else {
        scene.text('Your brother moves back when he sees the cum on your face, "Go wash your face before someone else sees you! That\'s disgusting!"');
      }
      if (((s as any).brotherQW ?? 0)?.['Sex'] === 0) {
        qspCall(s, 'npc_relationship', 'modify', 'A34', (-1));
        return;
      }
    }
    if ((((s as any).cumloc ?? 0)[6] === 1  ||  ((s as any).cumloc ?? 0)[7] === 1)  &&  ((s as any).clothingworntype ?? 0) !== 'nude') {
      // TODO-QSP: dynamic text: Kolka looks at your clothes, "You''re dirty. Go change your clothes or at least ...
      scene.text(`Kolka looks at your clothes, "You're dirty. Go change your clothes or at least get ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} to wash them."`);
    }
    if (((s as any).spanked ?? 0) > 1  &&  ((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).pantyworntype ?? 0) === 'none') {
      scene.text('Your brother grins and stares at your backside, "Got a sore bum? Did someone punish you? You bad girl."');
    }
    if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).towel ?? 0) === 1  &&  ((s as any).pantyworntype ?? 0) === 'none') {
      if (((s as any).brotherQW ?? 0)?.['Sex'] < 1) {
        // TODO-QSP: dynamic text: Your brother sarcastically comments on the small towel you are wearing, "<<$pcs_...
        scene.text(`Your brother sarcastically comments on the small towel you are wearing, "${((s as any).pcs_nickname || '')}, are you sure that is not a hand towel?"`);
      } else {
        if (((s as any).brotherQW ?? 0)?.['Sex'] >= 2) {
          scene.text('Your brother sarcastically comments on the small towel you are wearing, "Are you wearing that for me, sis?"');
        }
      }
    } else {
      if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).pcs_pubes ?? 0) > 10  &&  ((s as any).pantyworntype ?? 0) === 'none') {
        scene.text('Kolka eyes linger on your hairy pussy. "You should have shaved," he comments. "It looks like you\'re growing a forest down there."');
        if (((s as any).brotherQW ?? 0)?.['Sex'] < 2) {
          ((s as any).brotherQW = (s as any).brotherQW ?? {})['Sex'] = 2;
        }
      } else {
        if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).braworntype ?? 0) === 'none') {
          if (((s as any).brotherQW ?? 0)?.['Sex'] >= 7) {
            // TODO-QSP: dynamic text: Kolka looks you over, his eyes quickly glancing back and forth between your <<$t...
            scene.text(`Kolka looks you over, his eyes quickly glancing back and forth between your ${((s as any).titsize || '')} breasts and ${((s as any).pc_desc ?? 0)?.['pubes'] ?? ''} pussy, "Wow, ${((s as any).pcs_nickname || '')}, you have an amazing body."`);
          } else {
            scene.text('Kolka\'s eyes go wide at your brazen display, "What a view! Have you decided to become a nudist?"');
            if (((s as any).brotherQW ?? 0)?.['Sex'] < 2) {
              ((s as any).brotherQW = (s as any).brotherQW ?? {})['Sex'] = 2;
            }
            if (((s as any).npc_rel ?? 0)?.['A34'] < 50) {
              qspCall(s, 'npc_relationship', 'modify', 'A34', 1);
            }
          }
        }
      }
    }
  }
  if (((s as any).loc ?? 0) === 'gschool_grounds') {
    if (((s as any).npc_rel ?? 0)?.['A34'] < 20) {
      // TODO-QSP: dynamic text: Your brother groans in frustration, "Ugh, go away, <<$pcs_nickname>>! Go bother ...
      scene.text(`Your brother groans in frustration, "Ugh, go away, ${((s as any).pcs_nickname || '')}! Go bother someone else!"`);
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
        if (((s as any).evgenQW ?? 0) >= 4  &&  ((s as any).kolkaseepornday ?? 0) !== ((s as any).daystart ?? 0)) {
          scene.text('The guys gather around you. Kolka speaks up, "We just finished playing, so let\'s go watch some porn."');
          scene.actions([
            { label: 'Go watch porn', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['seeporn', ''] },
          ]);
        } else {
          if (((s as any).evgenQW ?? 0) < 4  ||  ((s as any).kolkaseepornday ?? 0) === ((s as any).daystart ?? 0)) {
            // TODO-QSP: dynamic text: Your brother grins, "Hi, <<$pcs_nickname>>. Fancy a game of football?"
            scene.text(`Your brother grins, "Hi, ${((s as any).pcs_nickname || '')}. Fancy a game of football?"`);
            if ((!((s as any).PSport ?? 0))) {
              scene.text('Kolka points at your outfit, "Oh, you can\'t play dressed like that! Go put on some sportswear, or just watch us play if you want."');
            } else {
              scene.text('He adds, "Or you could just watch us."');
              if (((s as any).pcs_stam ?? 0) >= (5 * ((s as any).mult ?? 0) * (10 - ((s as any).sport_clothes_exercise_bonus ?? 0))) / 2) {
                scene.actions([
                  { label: 'Play football', handler: (st: GameState) => {
    (st as any).playfootball = 1;
    qspGoto(st, 'brother', 'playfootball');
  } },
                ]);
              } else {
                scene.text('You are too tired to play.');
              }
            }
            scene.actions([
              { label: 'Watch as they play', handler: (st: GameState) => {
    (st as any).playfootball = 0;
    qspGoto(st, 'brother', 'playfootball');
  } },
            ]);
          }
        }
      }
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
          if (((s as any).brotherkisstalk ?? 0) === 1  ||  ((s as any).brotherQW ?? 0)?.['Sex'] > 4  &&  ((s as any).locat ?? 0)?.['Mother'] !== 19) {
            scene.actions([
              { label: 'Make out with your brother', goto: ['brother2', 'kiss'] },
            ]);
          }
        }
        if (((s as any).NatbelQW ?? 0)?.['KolkaTease'] === 1) {
          scene.actions([
            { label: 'Ask if he liked the show', goto: ['brother2', 'nattalk'] },
          ]);
        }
        if (((s as any).brotherQW ?? 0)?.['Sex'] > 6  &&  ((s as any).brotherQW ?? 0)?.['Sex'] < 9  &&  (!((s as any).brother_DTR ?? 0))) {
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
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBrotherSexCount(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).locat ?? 0)?.['Fam_inGad'] === 0  &&  ((s as any).brotherQW ?? 0)?.['piercing_nipples'] === 0  &&  ((s as any).pcs_piercings ?? 0)?.['nipples'] > 0) {
      if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).locat ?? 0)?.['Stepdad'] !== 10  &&  ((s as any).npc_rel ?? 0)?.['A34'] > 85  &&  ((s as any).hour ?? 0) >= 18  &&  ((s as any).hour ?? 0) < 23) {
        scene.actions([
          { label: 'Show off your nipple piercings', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (3);
    ((st as any).brotherQW = (st as any).brotherQW ?? {})['piercing_nipples'] = 1;
    qspCall(st, 'npc_relationship', 'modify', 'A34', 3);
    scene.img('images/characters/pavlovsk/school/boy/kolka/9vh2v.jpg');
    scene.text('"Look what I have," you walk up to Kolka, your chest bare, showing off your nipple piercings. "Don\'t be shy, you can touch them."');
    scene.text('Your brother, dumbfounded by your suggestion, hesitantly touches the piercing on one of your nipples, causing you to moan softly.');
    if (((st as any).brotherQW ?? 0)?.['Sex'] === 0) {
      scene.text('He abruptly withdraws his hand and apologizes for his rudeness. You have no choice but to apologize back; that wasn\'t fair. You cover your chest.');
      qspCall(st, 'arousal', 'foreplay', 1, 'incest');
      qspCall(st, 'stat', '');
    } else {
      scene.text('Seeing the pleasure playing with your nipples brings you, he begins to play harder with your piercings, sometimes squeezing your exposed breasts.');
      // TODO-QSP: dynamic text: After a minute, he releases your <<$titsize>> boobs, saying, "I really like your...
      scene.text(`After a minute, he releases your ${((st as any).titsize || '')} boobs, saying, "I really like your new additions."`);
      qspCall(st, 'arousal', 'foreplay', 1, 'incest');
      qspCall(st, 'stat', '');
    }
    qspCall(st, 'arousal', 'end');
    scene.actions([
{ label: 'Leave', goto: ['sitrPar', ''] },
]);
    return;
  } },
        ]);
      } else {
        if (((s as any).clothingworntype ?? 0) === 'nude') {
          if (((s as any).brotherQW ?? 0)?.['Sex'] < 4) {
            ((s as any).brotherQW = (s as any).brotherQW ?? {})['piercing_nipples'] = 1;
            if (((s as any).npc_rel ?? 0)?.['A34'] >= 70) {
              scene.text('"Looks good on you," your brother winks, and points toward your pierced nipples.');
            } else {
              scene.text('"I don\'t get it, why would you do that to yourself?" Kolka asks, noticing your pierced nipples.');
              if (((s as any).npc_rel ?? 0)?.['A34'] < 50) {
                qspCall(s, 'npc_relationship', 'modify', 'A34', 1);
              }
            }
            // TODO-QSP: delact 'Leave'
            scene.actions([
{ label: 'Leave', goto: ['sitrPar', ''] },
]);
            return;
          } else {
            if (((s as any).hour ?? 0) >= 18  &&  ((s as any).hour ?? 0) < 23) {
              qspCall(s, 'npc_relationship', 'modify', 'A34', 3);
              ((s as any).brotherQW = (s as any).brotherQW ?? {})['piercing_nipples'] = 1;
              (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
              if (((s as any).locat ?? 0)?.['Stepdad'] !== 10) {
                scene.text('"How lovely," Kolka says as he plays with your pierced nipples.');
              } else {
                scene.text('"Beautiful," Kolka whispers while gently cupping your breasts and stroking your pierced nipples.');
                qspCall(s, 'arousal', 'foreplay', 1, 'incest');
                qspCall(s, 'stat', '');
              }
              // TODO-QSP: delact 'Leave'
              scene.actions([
{ label: 'Leave', goto: ['sitrPar', ''] },
]);
              return;
            }
          }
        }
      }
    }
    if (((s as any).locat ?? 0)?.['Fam_inGad'] === 0  &&  ((s as any).brotherQW ?? 0)?.['sex_count_today'] > 0  &&  ((s as any).brotherQW ?? 0)?.['last_sex_day'] === ((s as any).daystart ?? 0)) {
      (s as any).brotherrand = (Math.floor(Math.random() * 11) + 0);
      if (((s as any).hour ?? 0) < 6  ||  ((s as any).hour ?? 0) === 23) {
        scene.text('You look at your brother sleeping peacefully on the couch.');
      } else {
        if (((s as any).hour ?? 0) < 7  &&  ((s as any).brotherQW ?? 0)?.['last_sex_day_morning'] !== ((s as any).daystart ?? 0)) {
          scene.text('You look at your brother sleeping peacefully on the couch.');
          if (((s as any).brotherrand ?? 0) < 5) {
            scene.text('As you look, you can clearly see the outline of his morning wood pitching a tent under the blanket.');
          }
          if (((s as any).week ?? 0) < 6  &&  (!((s as any).kanikuli ?? 0))) {
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
        } else {
          if (((s as any).hour ?? 0) < 7  &&  ((s as any).brotherQW ?? 0)?.['last_sex_day_morning'] === ((s as any).daystart ?? 0)) {
            scene.text('Your brother is busy getting ready for school.');
          } else {
            if (((s as any).hour ?? 0) < 23  &&  ((s as any).locat ?? 0)?.['Stepdad'] !== 10) {
              if (((s as any).locat ?? 0)?.['Kolka'] === 7) {
                scene.text('Your brother is sitting at the table doing his homework.');
              } else {
                scene.text('Your brother is playing video games.');
              }
            }
          }
        }
      }
      if (((s as any).hour ?? 0) > 0  &&  ((s as any).hour ?? 0) < 4  &&  ((s as any).brotherQW ?? 0)?.['Sex'] > 4  &&  ((s as any).brotherQW ?? 0)?.['last_sex_day_night'] !== ((s as any).daystart ?? 0)  &&  ((s as any).locat ?? 0)?.['Mother'] !== 19) {
        scene.text('As you approach your sleeping brother, he suddenly opens his eyes and looks at you.');
        scene.text('He points to the mound under his blanket, "Sis, I can\'t get any sleep, can you help?"');
        scene.actions([
          { label: 'Help him out', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A34');
    scene.text('"Yes, I know what to do," you say with a smile while he pulls down his pants, showing you his hard cock.');
    ((st as any).brotherQW = (st as any).brotherQW ?? {})['sex_count_today'] = ((st as any).brotherQW['sex_count_today'] ?? 0) - (1);
    ((st as any).brotherQW = (st as any).brotherQW ?? {})['last_sex_day_night'] = ((st as any).daystart ?? 0);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBrotherSexStart(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
          { label: 'He\'s on his own there', handler: (st: GameState) => {
    scene.text('"You\'ve got two perfectly good hands for that," you reply with a smile as you turn around to leave.');
    scene.actions([
{ label: 'Leave', goto: ['sitrPar', ''] },
]);
    return;
  } },
        ]);
      } else {
        if (((s as any).locat ?? 0)?.['Stepdad'] !== 10  &&  ((s as any).hour ?? 0) >= 18  &&  ((s as any).hour ?? 0) < 23  &&  ((s as any).brotherQW ?? 0)?.['Sex'] > 4  &&  ((s as any).brotherQW ?? 0)?.['last_sex_day_evening'] !== ((s as any).daystart ?? 0)  &&  ((s as any).locat ?? 0)?.['Mother'] !== 19) {
          scene.text('When you get close, Kolka turns to you.');
          scene.text('"Sis, I\'ve got a problem," he points to the lump in his pants. "Can you help me solve it?"');
          scene.actions([
            { label: 'Help him out', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A34');
    scene.text('A huge smile crosses your face, "I know what will solve this problem. Take off your pants, but be quiet."');
    // TODO-QSP: dynamic text: Kolka starts to take off his pants, his erect <<npc_dick[''A34'']>> cm cock quic...
    scene.text(`Kolka starts to take off his pants, his erect ${((st as any).npc_dick ?? 0)?.['A34'] ?? ''} cm cock quickly popping out.`);
    ((st as any).brotherQW = (st as any).brotherQW ?? {})['sex_count_today'] = ((st as any).brotherQW['sex_count_today'] ?? 0) - (1);
    ((st as any).brotherQW = (st as any).brotherQW ?? {})['last_sex_day_evening'] = ((st as any).daystart ?? 0);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBrotherSexStart(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
            { label: 'That is so his problem', handler: (st: GameState) => {
    scene.text('"Poor little Kolka, they sell porn in the local shops. I\'m sure you can work out the rest," you chuckle quietly as you leave.');
    scene.actions([
{ label: 'Leave', goto: ['sitrPar', ''] },
]);
    return;
  } },
          ]);
        }
      }
    }
  }
  if ((((s as any).week ?? 0) === 6  &&  ((s as any).brotherQW ?? 0)?.['last_day_homework'] === ((s as any).daystart ?? 0) - 1)  ||  (((s as any).week ?? 0) === 7  &&  ((s as any).brotherQW ?? 0)?.['last_day_homework'] === ((s as any).daystart ?? 0) - 2)) {
    ((s as any).brotherQW = (s as any).brotherQW ?? {})['last_day_homework'] = ((s as any).daystart ?? 0);
  }
  if (((s as any).loc ?? 0) === 'sitrPar'  &&  ((s as any).brotherQW ?? 0)?.['Age'] < 18  &&  ((s as any).kanikuli ?? 0) === 0  &&  ((s as any).npc_rel ?? 0)?.['A34'] >= 20  &&  ((s as any).brotherQW ?? 0)?.['last_day_homework'] !== ((s as any).daystart ?? 0)  &&  ((s as any).locat ?? 0)?.['Kolka'] === 7) {
    if ((Math.floor(Math.random() * 3) + 1) === 1) {
      qspCall(s, 'stat', '');
      scene.text('<center><b>Kolka</b></center>');
      scene.img('images/characters/shared/headshots_main/big34.jpg');
      // TODO-QSP: dynamic text: Kolka, your brother, is <<brotherQW[''Age'']>> years old. While you share the sa...
      scene.text(`Kolka, your brother, is ${((s as any).brotherQW ?? 0)?.['Age'] ?? ''} years old. While you share the same mother, Kolka's dad is your and Anya's stepfather. He is a student at the same school as you. When not in school, he is either at home playing video games or out playing football with his friends.`);
      // TODO-QSP: dynamic text: Kolka turns to you and asks, "<<$pcs_nickname>>, can you help me with my homewor...
      scene.text(`Kolka turns to you and asks, "${((s as any).pcs_nickname || '')}, can you help me with my homework?"`);
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterBroSchoolField(s: GameState, scene: SceneBuilder): void {
  if (((s as any).loc ?? 0) === 'gschool_grounds') {
    if (((s as any).week ?? 0) === 5  &&  ((s as any).locat ?? 0)?.['Kolka'] === 6) {
      scene.text('You wonder if your <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027brother/u0027, /u0027start/u0027); return false;">brother</a> is one of the kids yelling.');
    } else {
      if ((((s as any).week ?? 0) < 6  &&  ((s as any).locat ?? 0)?.['Kolka'] === 6)  ||  ((((s as any).week ?? 0) >= 6  ||  ((s as any).kanikuli ?? 0) > 0)  &&  ((s as any).locat ?? 0)?.['Kolka'] === 9)) {
        scene.text('You see your <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027brother/u0027, /u0027start/u0027); return false;">brother</a> play football by the field near the school.');
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPlayfootball(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).playfootball ?? 0))) {
    (s as any).picrand = (Math.floor(Math.random() * 2) + 1);
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'stat', '');
    if (((s as any).npc_rel ?? 0)?.['A34'] < 50) {
      qspCall(s, 'npc_relationship', 'modify', 'A34', (Math.floor(Math.random() * 2) + 1));
    }
    scene.text('<center><b>School - football field</b></center>');
    if (((s as any).month ?? 0) === 1  ||  ((s as any).month ?? 0) === 2  ||  ((s as any).month ?? 0) === 12) {
      scene.img('images/locations/pavlovsk/school/grounds/football4.jpg');
    } else {
      scene.img(`images/locations/pavlovsk/school/grounds/football${((s as any).picrand || '')}.jpg`);
    }
    scene.text('You spend an hour sitting on the bench, watching the guys play football.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    if (((st as any).marisha_day ?? 0) !== ((st as any).daystart ?? 0)  &&  ((st as any).MarishaQW ?? 0)?.['Event'] < 3  &&  (!(Math.floor(Math.random() * 3) + 0))) {
      qspGoto(st, 'marisha_ev', 'marisha_event');
    } else {
      dynamicGoto(st, 'prevLoc', 'prevArg');
    }
  } },
    ]);
  } else {
    if (((s as any).npc_rel ?? 0)?.['A34'] < 50) {
      qspCall(s, 'npc_relationship', 'modify', 'A34', (Math.floor(Math.random() * 2) + 1));
    }
    qspCall(s, 'exercise', 'tier1', 60, 'agil', 'vital');
    qspCall(s, 'exp_gain', 'run', (Math.floor(Math.random() * 3) + 0));
    if (((s as any).ftbll_lvl ?? 0) < 50) {
      qspCall(s, 'exp_gain', 'ftbll', (Math.floor(Math.random() * 3) + 0));
    }
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/grounds/football3.jpg');
    scene.text('You spend an hour running around, chasing the ball across the field with Kolka and his friends Mishan and Zhendos.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    if (((st as any).marisha_day ?? 0) !== ((st as any).daystart ?? 0)  &&  ((st as any).MarishaQW ?? 0)?.['Event'] < 3  &&  (!(Math.floor(Math.random() * 3) + 0))) {
      qspGoto(st, 'marisha_ev', 'marisha_event');
    } else {
      dynamicGoto(st, 'prevLoc', 'prevArg');
    }
  } },
    ]);
  }
  if ((Math.floor(Math.random() * 2) + 0) === 0  &&  (!((s as any).seepornofut ?? 0))) {
    scene.text('The three boys gather together and begin whispering between themselves while giving you conspiratorial looks.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
      { label: 'Ask what they\'re talking about', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('<center><b>Kolka</b></center>');
    scene.img('images/characters/shared/headshots_main/big34.jpg');
    scene.text('The boys hesitate before one of them responds, "Err… nothing."');
    if (((st as any).kolkaseepornday ?? 0) === ((st as any).daystart ?? 0)) {
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
      ]);
    } else {
      if (((st as any).npc_QW ?? 0)?.['A34'] < 3) {
        scene.actions([
          { label: 'Pursue the matter', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/kolka/tease.jpg');
    scene.text('You can tell they\'re lying, so you decide to tease them, "I know, you\'re talking about which boys in school you want to kiss, aren\'t you?"');
    scene.text('They glare at you and shout, "No!"');
    scene.text('"We wanted to—" Mishan starts before getting cut off when your brother elbows him in the side.');
    scene.text('"Shut up! Don\'t tell her," Kolka says sharply. Next thing you know, Kolka and Mishan are arguing, while Zhendos stands there watching them with an annoyed look.');
    scene.text('"Hey, it\'s not a big deal. I was just kidding," you say.');
    scene.text('"Porn!" Zhendos blurts out, causing your brother and his friend to stop arguing and fall silent. "We wanted to go watch some porn but you\'re here."');
    scene.text('You see Kolka\'s face flush red with embarrassment while Mishan laughs and Zhendos rolls his eyes.');
    scene.text('"A girl like you would just get grossed out," Mishan says proudly. "All girls are like that."');
    qspCall(st, 'willpower', 'misc', 'force');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Prove them wrong', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Prove them wrong', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'force');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/kolka/insist.jpg');
    scene.text('You tell them if they\'re going to watch porn, they\'ll need a babysitter. The boys don\'t look very pleased, but you don\'t give them a choice.');
    scene.text('They have found a spare key for an AV lounge in the school that is not used at this time of day and you all sneak in.');
    scene.actions([
      { label: 'Go watch porn', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['seeporn', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
        ]);
      } else {
        // TODO-QSP: dynamic text: Kolka hesitates for a moment before giving you a funny look, "Actually, <<$pcs_n...
        scene.text(`Kolka hesitates for a moment before giving you a funny look, "Actually, ${((st as any).pcs_nickname || '')}, we want to go watch some porn but we weren't sure with having you around… But I think a girl like you could handle it."`);
        scene.actions([
          { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
          { label: 'Show interest', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('You let them know that you would like to join them. Mishan and Zhendos don\'t look pleased, but Kolka persuades them.');
    scene.text('They have found a spare key for an AV lounge in the school that is not used at this time of day and you all sneak in.');
    scene.actions([
      { label: 'Go watch porn', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['seeporn', ''] },
    ]);
  } },
        ]);
      }
    }
  } },
    ]);
  }
  if (((s as any).seepornofut ?? 0) >= 1  &&  ((s as any).kolkaseepornday ?? 0) !== ((s as any).daystart ?? 0)) {
    // TODO-QSP: dynamic text: The guys gather together and ask you, "<<$pcs_nickname>>, want to watch some por...
    scene.text(`The guys gather together and ask you, "${((s as any).pcs_nickname || '')}, want to watch some porn?"`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
      { label: 'Go watch porn', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['seeporn', ''] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterKissTalk(s: GameState, scene: SceneBuilder): void {
  (s as any).brotherkisstalk = 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Kolka</b></center>');
  scene.img('images/characters/shared/headshots_main/big34.jpg');
  scene.text('"Hey…" you say awkwardly. "Can we talk? About… you know…" you blush and look away awkwardly, the memory of your brother\'s lips pressing at your mind.');
  scene.text('Kolka immediately blushes back and swallows, "Uh… yeah. We can talk… about… you know…"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Sit down', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    scene.text('<center><b>Kolka</b></center>');
    scene.img('images/characters/shared/headshots_main/big34.jpg');
    scene.text('You sit down next to him and continue to sit there awkwardly not saying anything for several minutes, trying to think of what you\'re going to say.');
    scene.actions([
      { label: 'Try to explain', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    scene.text('<center><b>Kolka</b></center>');
    scene.img('images/characters/shared/headshots_main/big34.jpg');
    scene.text('Preparing what you think is the best thing to say, you take a deep breath before finally speaking.');
    scene.text('"Look Kolka, it was just a kiss. There wasn\'t any more meaning behind it than wanting to give you one. There\'s nothing wrong with a sister wanting to show her brother some affection, right?" you rationalize, almost more to yourself than to your brother.');
    scene.text('He stammers, "Uh… R-right. Nothing wrong with that, I guess…"');
    scene.text('"I just don\'t want you getting any ideas," you say, looking away. "It\'s not like we\'re going to start dating or do… other stuff… It\'s not like we could anyways. We\'re blood family. You\'re my brother and that\'s it."');
    scene.text('"R-right…" he says. You look back towards him and find yourself shocked by his expression. Even though all this is wrong and taboo, you can\'t help but feel bad about the wounded look on his face. His hurt hurts you too.');
    scene.text('You look away again, mulling over what you should say next…');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    scene.text('<center><b>Kolka</b></center>');
    scene.img('images/characters/shared/headshots_main/big34.jpg');
    scene.text('"You\'re my brother," you finally say again. "You\'re my brother and I love you and nothing will change that."');
    scene.text('"Right… I love you too…" he mumbles back.');
    scene.text('"So…" With a fast beating heart and feeling the heat flush to your face, you force out your next words. "So… if I want to show you how much I love you in the future, there\'s nothing wrong with that."');
    scene.text('You turn back towards your brother to see him looking at you with wide eyes.');
    scene.text('"If I want to kiss my brother to show him that I love him, then I\'m allowed to do that," you say firmly. Before you can convince yourself to change your mind, you lean forward towards him.');
    scene.actions([
      { label: 'Kiss him', handler: (st: GameState) => {
    ((st as any).brotherQW = (st as any).brotherQW ?? {})['kiss'] = ((st as any).brotherQW['kiss'] ?? 0) + (1);
    qspCall(st, 'npc_relationship', 'modify', 'A34', 10);
    scene.img('images/shared/sex/kiss/kiss.mp4');
    scene.text('You gently press your lips against his and can\'t help but melt into the kiss. The hot flush of your face is unbearably pleasant when combined with the soft massaging of his lips against yours. After a long moment you pull back to meet his eyes.');
    scene.text('"I love you… brother…" you whisper, purposefully reminding yourself to add the last word after a beat of silence.');
    scene.text('"I love you too, sis…" he murmurs back.');
    scene.text('Looking into his eyes one more time, you quickly pull back and stand up to walk out of the room. You pause at the door to look back at him.');
    scene.text('"I\'ll, uh… see you later," you say awkwardly before hurrying out into the hallway.');
    qspCall(st, 'arousal', 'kiss', 3, 'incest');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['korrPar', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Apologize', handler: (st: GameState) => {
    scene.text('<center><b>Kolka</b></center>');
    scene.img('images/characters/shared/headshots_main/big34.jpg');
    scene.text('"I don\'t know what came over me!" you suddenly blurt out, startling Kolka from your previous silence. "I\'m sorry, Kolka! I didn\'t mean to! It\'s just, your hand was on my leg and everything felt so warm and I just saw that look in your eyes and the next thing I knew…"');
    scene.text('You trail off, looking down at your knees in shame, not knowing what else to say. Everything sounds like an excuse to your own ears. You know what you did was wrong and you\'re afraid of how it might have hurt your brother.');
    // TODO-QSP: dynamic text: Kolka breaks the silence, "It''s okay, <<$pcs_nickname>>."
    scene.text(`Kolka breaks the silence, "It's okay, ${((st as any).pcs_nickname || '')}."`);
    scene.text('You turn back towards him with wide eyes, "Really?"');
    scene.text('"Yeah," he mumbles, blushing and looking away bashfully. "It was… kind of nice. I\'ve never kissed a girl before."');
    scene.text('"But I\'m your sister!" you say, tears held back behind your eyes. "It wasn\'t right of me to do that. I shouldn\'t have…"');
    // TODO-QSP: dynamic text: "It''s okay, <<$pcs_nickname>>," he repeats as he turns back towards you. "Reall...
    scene.text(`"It's okay, ${((st as any).pcs_nickname || '')}," he repeats as he turns back towards you. "Really, it is. You're a beautiful girl," he says, causing you to blush even harder. "Anyone would be made happy if you kissed them like that. Even your brother. And if that's wrong…"`);
    scene.text('He starts to lean forward towards you. Your breath hitches because you know what he\'s about to do but you\'re frozen in place, unable bring yourself to move away, "If that\'s wrong, then I don\'t want to be right…"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    ((st as any).brotherQW = (st as any).brotherQW ?? {})['kiss'] = ((st as any).brotherQW['kiss'] ?? 0) + (1);
    qspCall(st, 'npc_relationship', 'modify', 'A34', 5);
    scene.img('images/shared/sex/kiss/kiss.mp4');
    scene.text('Any protest you might have had died in your throat when he presses his lips against yours. Your whole body melts into it, letting him mash his soft mouth against you. You subconsciously notice your hand grabbing his shirt and pulling him closer, but other than that you can\'t think about anything except this kiss.');
    scene.text('When he finally pulls away, you find yourself breathless. He smiles back at you, "See? No harm done."');
    scene.text('Chewing on your lip to suppress a larger smile, you sheepishly simper back at him. "I guess you\'re right…" you say. "No harm done."');
    scene.text('You get up to leave, looking back at him before you do. "Thanks, Kolka. For… you know," you say, before escaping into the hallway.');
    qspCall(st, 'arousal', 'kiss', 3, 'incest');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['korrPar', ''] },
    ]);
  } },
    ]);
  } },
      { label: 'Tell him you liked it', handler: (st: GameState) => {
    scene.text('<center><b>Kolka</b></center>');
    scene.img('images/characters/shared/headshots_main/big34.jpg');
    scene.text('You sheepishly smile at him, "It felt pretty good, didn\'t it?"');
    scene.text('Kolka perks up, "Yeah, it did, didn\'t it?"');
    scene.text('"Maybe, it\'s not so bad to have a little fun now and then…" you say, casually inching towards him. "I mean, it\'s not like we\'re doing anything that wrong are we?"');
    scene.text('"No…" he says, mimicking your casual posture and motion. "We\'re teenagers with raging hormones or something right? We need to enjoy ourselves now and then or we\'ll go crazy, right?"');
    scene.text('"Right…" you say, leaning in towards his face.');
    scene.actions([
      { label: 'Kiss him', handler: (st: GameState) => {
    ((st as any).brotherQW = (st as any).brotherQW ?? {})['kiss'] = ((st as any).brotherQW['kiss'] ?? 0) + (1);
    qspCall(st, 'npc_relationship', 'modify', 'A34', 5);
    scene.img('images/shared/sex/kiss/kiss_lips.mp4');
    scene.text('You press your lips hard against his, letting yourself be consumed by the kiss for a moment. Just as eager, he presses back and you suddenly find yourself surprised by the intrusion of his tongue in your mouth. You find yourself particularly surprised by how welcome it is. You pull back briefly for gasps of breath and single words between kisses, "Maybe-! It isn\'t-! So-! Mmmrph! Bad-! If we-! Cut-! Loose-! Now and-! Mmmmmmm! Again-!"');
    scene.text('"Mmm mmm!" Your brother doesn\'t say anything back except to hum in agreement and keep kissing you. The two of you continue making out for several more minutes before you finally break apart and you get up to leave. As you stand by the door, you look back towards your brother.');
    scene.text('"I\'m glad we had this talk," you say, licking your lips and departing.');
    qspCall(st, 'arousal', 'kiss', 3, 'incest');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['korrPar', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSleepsexcum(s: GameState, scene: SceneBuilder): void {
  ((s as any).brotherQW = (s as any).brotherQW ?? {})['fuck'] = ((s as any).brotherQW['fuck'] ?? 0) + (1);
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  if (((s as any).protect ?? 0) !== 1) {
    if ((Math.floor(Math.random() * 101) + 0) < ((s as any).pcs_horny ?? 0)) {
      qspCall(s, 'cum_call', '', '', 'A34', 1);
      // TODO-QSP: dynamic text: <<$boydesc>> groans and you feel a jet of sperm fill your pussy.
      scene.text(`${((s as any).boydesc || '')} groans and you feel a jet of sperm fill your pussy.`);
      qspCall(s, 'mood', 'lower', 'medium');
      qspCall(s, 'cuminsidereact', 'your own brother');
    } else {
      if ((!((s as any).pose ?? 0))) {
        if ((!(Math.floor(Math.random() * 2) + 0))) {
          qspCall(s, 'cum_call', 'stomach', 'A34', 1);
          // TODO-QSP: dynamic text: <<$boydesc>> groans and you quickly pull yourself off of his dick. His hot sperm...
          scene.text(`${((s as any).boydesc || '')} groans and you quickly pull yourself off of his dick. His hot sperm squirts on your stomach.`);
        } else {
          qspCall(s, 'cum_call', 'labia', 'A34', 1);
          // TODO-QSP: dynamic text: <<$boydesc>> groans and you quickly pull yourself off of his dick. His hot sperm...
          scene.text(`${((s as any).boydesc || '')} groans and you quickly pull yourself off of his dick. His hot sperm squirts on your exposed pussy.`);
        }
      } else {
        if (((s as any).pose ?? 0) === 1) {
          if ((!(Math.floor(Math.random() * 2) + 0))) {
            qspCall(s, 'cum_call', 'back', 'A34', 1);
            // TODO-QSP: dynamic text: <<$boydesc>> groans and you quickly pull yourself off of his dick. His hot sperm...
            scene.text(`${((s as any).boydesc || '')} groans and you quickly pull yourself off of his dick. His hot sperm squirts on your back.`);
          } else {
            qspCall(s, 'cum_call', 'butt', 'A34', 1);
            // TODO-QSP: dynamic text: <<$boydesc>> groans and you quickly pull yourself off of his dick. His hot sperm...
            scene.text(`${((s as any).boydesc || '')} groans and you quickly pull yourself off of his dick. His hot sperm squirts on your ass.`);
          }
        }
      }
    }
  } else {
    if (((s as any).protect ?? 0) === 1) {
      (s as any).protect = 0;
      if ((!(Math.floor(Math.random() * 90) + 0))) {
        (s as any).sexcontra = 4;
      }
      qspCall(s, 'cum_call', '', '', 'A34', 1);
      if (((s as any).sexcontra ?? 0) === 4) {
        // TODO-QSP: dynamic text: You pull off of <<$boydesc>>, look at his dick and think, <i>Oh shit! The condom...
        scene.text(`You pull off of ${((s as any).boydesc || '')}, look at his dick and think, <i>Oh shit! The condom ripped.</i>`);
      } else {
        if (((s as any).sexcontra ?? 0) === 5) {
          // TODO-QSP: dynamic text: You pull off of <<$boydesc>>, look at his dick and think, <i>Oh shit! The condom...
          scene.text(`You pull off of ${((s as any).boydesc || '')}, look at his dick and think, <i>Oh shit! The condom is missing!</i>.`);
        } else {
          // TODO-QSP: dynamic text: <<$boydesc>> groans and you realize that he came in the condom.
          scene.text(`${((s as any).boydesc || '')} groans and you realize that he came in the condom.`);
        }
      }
      qspCall(s, 'cuminsidereact', 'your own brother');
    }
  }
  (s as any).pose = 0;
  if (((s as any).sexcontra ?? 0) > 0) {
    (s as any).sexcontra = 0;
  }
  qspCall(s, 'stat', '');
  scene.text('You catch your breath then carefully climb off your still sleeping, though smiling, brother. You gently replace the blanket and quietly step away.');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterShowbody(s: GameState, scene: SceneBuilder): void {
  scene.text('If you can read this text, please contact a developer with the following information: showbody is deprecated in brother.qsrc');
  qspGoto(s, 'brother_lessons', 'showbody');
  // TODO-QSP: end
  scene.build();
}

function enterHomework(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  scene.text('<center><b>Kolka</b></center>');
  scene.img('images/characters/shared/headshots_main/big34.jpg');
  // TODO-QSP: dynamic text: Kolka, your brother, is <<brotherQW[''Age'']>> years old. While you share the sa...
  scene.text(`Kolka, your brother, is ${((s as any).brotherQW ?? 0)?.['Age'] ?? ''} years old. While you share the same mother, Kolka's dad is your and Anya's stepfather. He is a student at the same school as you. When not in school, he is either at home playing video games or out playing football with his friends.`);
  (s as any).textrand = (Math.floor(Math.random() * 8) + 1);
  if (((s as any).textrand ?? 0) === 1) {
    scene.text('You ask your brother, "Kolka, would you like help with your homework?"');
    scene.text('He replies, "Yeah, that would be great."');
  } else {
    if (((s as any).textrand ?? 0) === 2) {
      scene.text('You approach your brother, "Kolka, how are your classes going? Do you need any help?"');
      scene.text('"I could use some help," he says.');
    } else {
      if (((s as any).textrand ?? 0) === 3) {
        scene.text('"Kolka, looks like you\'re having trouble." You sweetly ask him, "Need any help?"');
        // TODO-QSP: dynamic text: You brother looks up at you appreciatively, "Yes, <<$pcs_nickname>>! Please help...
        scene.text(`You brother looks up at you appreciatively, "Yes, ${((s as any).pcs_nickname || '')}! Please help."`);
      } else {
        if (((s as any).textrand ?? 0) === 4) {
          scene.text('You say to your brother, "Kolka, do you need any assistance with your homework?"');
          scene.text('He responds, "Sure, that would be really helpful."');
        } else {
          if (((s as any).textrand ?? 0) === 5) {
            scene.text('You inquire, "Kolka, do you want some help with your homework?"');
            scene.text('He answers, "Absolutely, I would appreciate that."');
          } else {
            if (((s as any).textrand ?? 0) === 6) {
              scene.text('You approach your brother and ask, "Kolka, would you like some assistance with your assignments?"');
              scene.text('He replies, "Definitely, that sounds awesome."');
            } else {
              if (((s as any).textrand ?? 0) === 7) {
                scene.text('You ask your sibling, "Kolka, are you looking for help with your homework?"');
                // TODO-QSP: dynamic text: He says, "Yes <<$pcs_nickname>>, that would be fantastic."
                scene.text(`He says, "Yes ${((s as any).pcs_nickname || '')}, that would be fantastic."`);
              } else {
                if (((s as any).textrand ?? 0) === 8) {
                  scene.text('You turn to your brother and ask: "Kolka, do you want me to help you with your homework?"');
                  scene.text('He replies, "Yes, that would really help me out."');
                }
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['brother_lessons', 'homework'] },
  ]);
  scene.build();
}

function enterBrotherSexStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A34');
  if (((s as any).brotherQW ?? 0)?.['Sex'] >= 5) {
    scene.actions([
      { label: 'Suck your brother off', handler: (st: GameState) => {
    ((st as any).brotherQW = (st as any).brotherQW ?? {})['bj'] = ((st as any).brotherQW['bj'] ?? 0) + (1);
    qspCall(st, 'npc_relationship', 'modify', 'A34', 5);
    if (((st as any).brotherQW ?? 0)?.['Sex'] < 6) {
      ((st as any).brotherQW = (st as any).brotherQW ?? {})['Sex'] = 6;
    }
    qspCall(st, 'stat', '');
    scene.img(`images/characters/pavlovsk/school/boy/kolka/sex/blow0,${(Math.floor(Math.random() * 7) + 0)}.mp4`);
    scene.text('You drop to your knees in front of your brother and move your face towards his waiting member. Kolka takes a deep breath in anticipation.');
    qspCall(st, 'arousal', 'bj', 5, 'incest');
    qspCall(st, 'stat', '');
    qspCall(st, 'dinsex', 'bj_random');
    // TODO-QSP: dynamic text: It isn''t long before you hear your brother moan, "I''m gonna cum, <<$pcs_nickna...
    scene.text(`It isn't long before you hear your brother moan, "I'm gonna cum, ${((st as any).pcs_nickname || '')}!"`);
    if (((st as any).brotherQW ?? 0)?.['Sex'] >= 6) {
      scene.actions([
        { label: 'Fuck your brother (Vaginal)', goto: ['brother', 'fuckvaginal'] },
      ]);
    }
    if (((st as any).brotherQW ?? 0)?.['Sex'] >= 6) {
      scene.actions([
        { label: 'Fuck your brother (Anal)', goto: ['brother', 'fuckanal'] },
      ]);
    }
    scene.actions([
      { label: 'Keep sucking', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A34');
    qspCall(st, 'cum_call', 'mouth_swallow', 'A34', 1);
    qspCall(st, 'stat', '');
    scene.img(`images/shared/sex/cum/mouth/cum1,${(Math.floor(Math.random() * 12) + 0)}.mp4`);
    qspCall(st, 'arousal', 'bj', 5, 'incest');
    qspCall(st, 'stat', '');
    qspCall(st, 'dinsex', 'bj_swallow_random');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBrotherSexEnd(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Take his cock out of your mouth', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
    qspCall(st, 'npc_relationship', 'modify', 'A34', 5);
    qspCall(st, 'boyStat', 'A34');
    qspCall(st, 'cum_call', 'face', 'A34', 1);
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/cum/facial/facial21.jpg');
    scene.text('Just as you take his dick out of your mouth, you\'re hit with a hot blast of cum across your face, followed by several more spurts. Your face is covered in your brother\'s jism when he is finally finished with his orgasm.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBrotherSexEnd(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).brotherQW ?? 0)?.['Sex'] >= 6) {
    scene.actions([
      { label: 'Fuck your brother (Vaginal)', goto: ['brother', 'fuckvaginal'] },
    ]);
  }
  if (((s as any).brotherQW ?? 0)?.['Sex'] >= 7) {
    scene.actions([
      { label: 'Fuck your brother (Anal)', goto: ['brother', 'fuckanal'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Jerk your brother off', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A34', 2);
    qspCall(st, 'cum_call', 'hands', 'A34', 1);
    if (((st as any).brotherQW ?? 0)?.['Sex'] < 5) {
      ((st as any).brotherQW = (st as any).brotherQW ?? {})['Sex'] = 5;
    }
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/handjob/hj1.jpg');
    // TODO-QSP: dynamic text: You take his hard <<npc_dick[''A34'']>> cm cock in your hand and begin masturbat...
    scene.text(`You take his hard ${((st as any).npc_dick ?? 0)?.['A34'] ?? ''} cm cock in your hand and begin masturbating him. It only takes a few minutes of gliding your hand up and down his shaft for him to cum. Kolka quietly groans as jets of hot cum erupt from his throbbing member all over your hand.`);
    qspCall(st, 'arousal', 'hj', 5, 'incest');
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBrotherSexEnd(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterFuckvaginal(s: GameState, scene: SceneBuilder): void {
  if (((s as any).brotherQW ?? 0)?.['Sex'] < 7) {
    ((s as any).brotherQW = (s as any).brotherQW ?? {})['Sex'] = 7;
  }
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  ((s as any).brotherQW = (s as any).brotherQW ?? {})['fuck'] = ((s as any).brotherQW['fuck'] ?? 0) + (1);
  qspCall(s, 'npc_relationship', 'modify', 'A34', 5);
  qspCall(s, 'boyStat', 'A34');
  qspCall(s, 'arousal', 'vaginal', 5, 'incest');
  qspCall(s, 'arousal', 'end');
  scene.img(`images/characters/pavlovsk/school/boy/kolka/sex/sex,${(Math.floor(Math.random() * 12) + 0)}.mp4`);
  scene.text('You lie back on the sofa and spread your legs. You slip a finger inside yourself and smile seductively at Kolka. You push your digit in and out a few times before adding a second, your brother staring at you hypnotically. You remove your slickened fingers and use them to beckon Kolka closer, before licking them clean. You embrace your sibling as his cock penetrates deep inside of you.');
  (s as any).risk_boy = 'your own brother';
  qspCall(s, 'dinsex', 'boy_puts_condom');
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  qspCall(s, 'dinsex', 'sexcum');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBrotherSexEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterFuckanal(s: GameState, scene: SceneBuilder): void {
  ((s as any).brotherQW = (s as any).brotherQW ?? {})['anal'] = ((s as any).brotherQW['anal'] ?? 0) + (1);
  qspCall(s, 'npc_relationship', 'modify', 'A34', 5);
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  if (((s as any).brotherQW ?? 0)?.['Sex'] < 8) {
    ((s as any).brotherQW = (s as any).brotherQW ?? {})['Sex'] = 8;
  }
  qspCall(s, 'boyStat', 'A34');
  qspCall(s, 'arousal', 'anal', 5, 'incest');
  qspCall(s, 'arousal', 'end');
  scene.img(`images/characters/pavlovsk/school/boy/kolka/sex/anal,${(Math.floor(Math.random() * 5) + 0)}.mp4`);
  // TODO-QSP: dynamic text: You lie back on the sofa, pulling your knees up to your chest and expose your <<...
  scene.text(`You lie back on the sofa, pulling your knees up to your chest and expose your ${((s as any).pc_desc ?? 0)?.['anus'] ?? ''} asshole to your sibling. "I want you to fuck my ass, Kolka," you tell him. Your brother practically pounces you, not needing more encouragement from you.`);
  qspCall(s, 'dinSex', 'boy_wants_anal', 'Kolka', 'lubri\' & gs \'dinsex', 'analsex');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBrotherSexEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterBrotherSexEnd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'end');
  if (((s as any).loc ?? 0) === 'sitrPar'  &&  ((s as any).locat ?? 0)?.['Stepdad'] !== 10  &&  ((s as any).locat ?? 0)?.['Kolka'] === 11) {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: With a wide grin on his face, Kolka tells you, "Many thanks, <<$pcs_nickname>>, ...
    scene.text(`With a wide grin on his face, Kolka tells you, "Many thanks, ${((s as any).pcs_nickname || '')}, you've helped me a lot." He resumes his prior business.`);
    scene.actions([
      { label: 'Leave', goto: ['sitrPar', ''] },
    ]);
  } else {
    if (((s as any).loc ?? 0) === 'sitrPar'  &&  ((s as any).npc_rel ?? 0)?.['A34'] >= 80) {
      (s as any).minut = ((s as any).minut ?? 0) + 15;
      qspCall(s, 'stat', '');
      // TODO-QSP: dynamic text: Completely sated, Kolka mumbles to you, "Thanks <<$pcs_nickname>>, you''re the b...
      scene.text(`Completely sated, Kolka mumbles to you, "Thanks ${((s as any).pcs_nickname || '')}, you're the best…" In just a few seconds, he's already dozing off into a blissfull sleep.`);
      scene.actions([
        { label: 'Leave', goto: ['sitrPar', ''] },
      ]);
    } else {
      if (((s as any).loc ?? 0) === 'sitrPar') {
        (s as any).minut = ((s as any).minut ?? 0) + 15;
        qspCall(s, 'stat', '');
        // TODO-QSP: dynamic text: Kolka gives his deflating member a quick shake, "Thanks, <<$pcs_nickname>>, you ...
        scene.text(`Kolka gives his deflating member a quick shake, "Thanks, ${((s as any).pcs_nickname || '')}, you saved me. Now I can finally sleep…" He slides under his covers and promptly falls asleep.`);
        scene.actions([
          { label: 'Leave', goto: ['sitrPar', ''] },
        ]);
      } else {
        qspCall(s, 'stat', '');
        // TODO-QSP: dynamic text: Kolka lets out a very satisfied sigh, "Ah, thanks so much for that, <<$pcs_nickn...
        scene.text(`Kolka lets out a very satisfied sigh, "Ah, thanks so much for that, ${((s as any).pcs_nickname || '')}. I gotta go." He puts his drained cock back into his pants and leaves.`);
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBrotherSexCount(s: GameState, scene: SceneBuilder): void {
  if (((s as any).brotherQW ?? 0)?.['last_sex_day'] <= ((s as any).daystart ?? 0) - 1  &&  ((s as any).brotherQW ?? 0)?.['sex_count_today'] > 0) {
    ((s as any).brotherQW = (s as any).brotherQW ?? {})['sex_count_today'] = 5;
  }
  if (((s as any).brotherQW ?? 0)?.['last_sex_day_morning'] !== ((s as any).daystart ?? 0)) {
    ((s as any).brotherQW = (s as any).brotherQW ?? {})['last_sex_day_morning'] = ((s as any).daystart ?? 0) - 1;
  }
  if (((s as any).brotherQW ?? 0)?.['last_sex_day_evening'] !== ((s as any).daystart ?? 0)) {
    ((s as any).brotherQW = (s as any).brotherQW ?? {})['last_sex_day_evening'] = ((s as any).daystart ?? 0) - 1;
  }
  if (((s as any).brotherQW ?? 0)?.['last_sex_day_night'] !== ((s as any).daystart ?? 0)) {
    ((s as any).brotherQW = (s as any).brotherQW ?? {})['last_sex_day_night'] = ((s as any).daystart ?? 0) - 1;
  }
  if (((s as any).brotherQW ?? 0)?.['sex_count_today'] < 1) {
    ((s as any).brotherQW = (s as any).brotherQW ?? {})['last_sex_day'] = ((s as any).daystart ?? 0) + 1;
    ((s as any).brotherQW = (s as any).brotherQW ?? {})['sex_count_today'] = 5;
  } else {
    ((s as any).brotherQW = (s as any).brotherQW ?? {})['last_sex_day'] = ((s as any).daystart ?? 0);
  }
  if (((s as any).brotherQW ?? 0)?.['last_sex_day'] === 0) {
    ((s as any).brotherQW = (s as any).brotherQW ?? {})['last_sex_day'] = 1;
  }
  // TODO-QSP: end
  scene.build();
}

function enterBrotherGoAway(s: GameState, scene: SceneBuilder): void {
  scene.text('If you can read this text, please contact a developer with the following information: brother_go_away is deprecated in brother.qsrc');
  // TODO-QSP: end
  scene.actions([
    { label: 'OK', goto: ['brother_voyeur', 'brother_go_away'] },
  ]);
  scene.build();
}

function enterBrotherGoAway2(s: GameState, scene: SceneBuilder): void {
  scene.text('If you can read this text, please contact a developer with the following information: brother_go_away2 is deprecated in brother.qsrc');
  // TODO-QSP: end
  scene.actions([
    { label: 'OK', goto: ['brother_voyeur', 'brother_go_away2'] },
  ]);
  scene.build();
}

function enterBrotherVoyeurEnd(s: GameState, scene: SceneBuilder): void {
  scene.text('If you can read this text, please contact a developer with the following information: brother_voyeur_end is deprecated in brother.qsrc');
  // TODO-QSP: end
  scene.actions([
    { label: 'OK', goto: ['brother_voyeur', 'brother_voyeur_end'] },
  ]);
  scene.build();
}

function enterBrotherVoyeurEv1(s: GameState, scene: SceneBuilder): void {
  scene.text('If you can read this text, please contact a developer with the following information: brother_voyeur_ev1 is deprecated in brother.qsrc');
  // TODO-QSP: end
  scene.actions([
    { label: 'OK', goto: ['brother_voyeur', 'brother_voyeur_ev1'] },
  ]);
  scene.build();
}

function enterBrotherVoyeurEv2(s: GameState, scene: SceneBuilder): void {
  scene.text('If you can read this text, please contact a developer with the following information: brother_voyeur_ev2 is deprecated in brother.qsrc');
  // TODO-QSP: end
  scene.actions([
    { label: 'OK', goto: ['brother_voyeur', 'brother_voyeur_ev2'] },
  ]);
  scene.build();
}

function enterBrotherVoyeurEv3(s: GameState, scene: SceneBuilder): void {
  scene.text('If you can read this text, please contact a developer with the following information: brother_voyeur_ev3 is deprecated in brother.qsrc');
  // TODO-QSP: end
  scene.actions([
    { label: 'OK', goto: ['brother_voyeur', 'brother_voyeur_ev3'] },
  ]);
  scene.build();
}

function enterBrotherVoyeurEv3_2(s: GameState, scene: SceneBuilder): void {
  scene.text('If you can read this text, please contact a developer with the following information: brother_voyeur_ev3 is deprecated in brother.qsrc');
  // TODO-QSP: end
  scene.actions([
    { label: 'OK', goto: ['brother_voyeur', 'brother_voyeur_ev3_2'] },
  ]);
  scene.build();
}

function enterBrotherSexEnd2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).minut = ((s as any).minut ?? 0) + ((Math.floor(Math.random() * 4) + 2));
  scene.img('images/characters/pavlovsk/resident/kolka/event/shower/shower.mp4');
  scene.text('You stand under the water for a moment and close your eyes. You wrap your hands around yourself, the memory of Kolka\'s cock inside you just minutes ago still fresh in your mind.');
  if (((s as any).brotherQW ?? 0)?.['Sex'] >= 9) {
    scene.text('You might not say it out loud, but you loved fucking Kolka and cannot wait for the chance to do it again.');
  } else {
    if (((s as any).brotherQW ?? 0)?.['Sex'] > 0) {
      scene.text('Despite the taboo nature of it, you can\'t help but admit that you enjoyed fucking your brother.');
    } else {
      scene.text('It\'s hard to believe, but you just had sex with your little brother. You\'re somewhat shocked but also wonder how something so <i>wrong</i> can feel so <i>right</i>.');
    }
  }
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'brother_shower_sex', 'brother_shower_finish');
  // TODO-QSP: end
  scene.build();
}

function enterBrotherVoyeurEv4(s: GameState, scene: SceneBuilder): void {
  scene.text('If you can read this text, please contact a developer with the following information: brother_voyeur_ev4 is deprecated in brother.qsrc');
  // TODO-QSP: end
  scene.actions([
    { label: 'OK', goto: ['brother_lessons', 'anatomylesson2_1'] },
  ]);
  scene.build();
}

function enterBrotherVoyeurEv5(s: GameState, scene: SceneBuilder): void {
  scene.text('If you can read this text, please contact a developer with the following information: brother_voyeur_ev5 is deprecated in brother.qsrc');
  // TODO-QSP: end
  scene.actions([
    { label: 'OK', goto: ['brother_lessons', 'anatomylesson2_2'] },
  ]);
  scene.build();
}

function enterVirginitydialog(s: GameState, scene: SceneBuilder): void {
  scene.text('You chastise him, "Hey, you little creep, are you ready to learn or are you just going to stare?"');
  scene.text('"N-no, no, I want to… learn," he stutters out.');
  scene.text('You begin to explain to your brother all the differences between the male and female body, why a woman has breasts, etc., simultaneously struggling with excitement and shame knowing that you are naked in front of your brother.');
  scene.text('Kolka suddenly interrupts you. "Does it hurt?" he asks.');
  scene.text('You blink in confusion, "Does what hurt?"');
  scene.text('He sits for a moment, silently, before asking slowly, "When a boy puts <i>it</i> in?"');
  if (((s as any).stat ?? 0)?.['think_virgin']) {
    scene.text('You shrug, "I don\'t know, I haven\'t tried it."');
    scene.text('Kolka blushes, "Oh…"');
  } else {
    ((s as any).brotherQW = (s as any).brotherQW ?? {})['know_not_virgin'] = 1;
    scene.text('"Only the first time or two," you respond.');
    scene.text('Kolka inquires, "Have you tried?"');
    if (((s as any).stat ?? 0)?.['vaginal'] === 0) {
      scene.text('You really don\'t want to have this conversation. You try to brush it off, "Never mind…"');
      scene.text('"Well, tell me!" Kolka implores you.');
      scene.text('You look at the floor, "No, I\'m still a virgin."');
    } else {
      if (((s as any).stat ?? 0)?.['vaginal'] < 10) {
        scene.text('You\'re not sure you want to have this conversation with your brother, "Never mind…"');
        scene.text('"Well, tell me!" Kolka implores you.');
        scene.text('You blush lightly thinking of the number of times you\'ve had sex, "I have a few times."');
      } else {
        if (((s as any).stat ?? 0)?.['vaginal'] < 20) {
          scene.text('This isn\'t a conversation you want to have with your brother, "Never mind…"');
          scene.text('"Well, tell me!" Kolka implores you.');
          scene.text('"Yes, I\'ve had sex," you answer.');
          scene.text('Kolka keeps prodding. "How many times?" he asks.');
          scene.text('You stop this line of questioning, "Enough times to know what I\'m talking about, okay?"');
        } else {
          scene.text('You don\'t want to talk about this with Kolka, "Never mind…"');
          scene.text('"Well, tell me!" Kolka implores you.');
          scene.text('You sigh, somewhat loudly, "Yes, I\'ve had sex, okay?"');
          scene.text('"How many times?" he asks.');
          scene.text('Fed up, you reply, "A lot, alright. Enough about my sex life. That won\'t be on your exams!"');
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAnusCheck(s: GameState, scene: SceneBuilder): void {
  if (((s as any).analPlugIn ?? 0) === 1) {
    if (((s as any).brotherQW ?? 0)?.['saw_analplug'] === 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['saw_analplug'] = 1;
      scene.text('"What is that thing?" Kolka asks, perplexed, about your buttplug.');
      scene.text('"Oh, that," you reply. "It\'s a buttplug. It, uh, it feels good and I like it."');
      scene.text('Your brother responds somewhat excitedly, "Wow! Really?"');
      scene.text('You\'re a bit embarrassed, "Um, yeah…"');
      scene.text('Shamelessly, he asks, "What does it feel like?"');
      scene.text('Amused, you ask him, "Why do you want to know? Do you want to try it?"');
      // TODO-QSP: dynamic text: His voice drops a bit, "Er… No, thank you." He clears his throat, "<<$pcs_nickna...
      scene.text(`His voice drops a bit, "Er… No, thank you." He clears his throat, "${((s as any).pcs_nickname || '')}, do all girls like it?"`);
      scene.text('"I don\'t know… I haven\'t asked them," you blush as the conversation continues.');
    } else {
      if (((s as any).brotherQW ?? 0)?.['saw_analplug'] === 1) {
        scene.text('"Again?! That <i>thing</i> in your ass?" asked Kolka, obviously referring to your buttplug.');
        scene.text('Somewhat flirty, you answer, "Mmhmm."');
        if (((s as any).brotherQW ?? 0)?.['Sex'] > 4) {
          scene.text('Kolka flirts back, "Maybe you could take it out and put it back in? Show me how it works?"');
          scene.text('You stick your tongue out at him, "Maybe next time, little brother…"');
        } else {
          // TODO-QSP: dynamic text: Your brother jokes, "<<$pcs_nickname>>, you''re such a pervert!"
          scene.text(`Your brother jokes, "${((s as any).pcs_nickname || '')}, you're such a pervert!"`);
        }
      }
    }
  } else {
    if (((s as any).brother_anus_mem ?? 0) < ((s as any).anpic ?? 0)) {
      // TODO-QSP: dynamic text: Kolka spends a moment looking at your ass, "<<$pcs_nickname>>, I think your butt...
      scene.text(`Kolka spends a moment looking at your ass, "${((s as any).pcs_nickname || '')}, I think your butthole is larger?"`);
      scene.text('You look at him wide-eyed, "What?"');
      scene.text('"I\'m serious," he nods. "It\'s… wider than before!"');
      scene.text('"Don\'t lie," you huff. "Nothing there has changed, and it\'s not necessary for you to stare at it!" You\'re pretty embarrassed now.');
      // TODO-QSP: dynamic text: "It has changed!" he responds. "Before it was smaller! <<$pcs_nickname>>, did yo...
      scene.text(`"It has changed!" he responds. "Before it was smaller! ${((s as any).pcs_nickname || '')}, did you let a guy fuck you in the ass?"`);
      scene.text('"What!? No, of course not!" you blush.');
      scene.text('He pleads, "C\'mon! You can tell me!"');
      scene.text('"Kolka, fuck off!" you say angrily.');
      scene.text('He backs off, "Okay, okay, I\'ll be quiet…"');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBrotherVoyeurEv6(s: GameState, scene: SceneBuilder): void {
  scene.text('If you can read this text, please contact a developer with the following information: brother_voyeur_ev6 is deprecated in brother.qsrc');
  // TODO-QSP: end
  scene.actions([
    { label: 'OK', goto: ['brother_lessons', 'anatomylesson2_3'] },
  ]);
  scene.build();
}

function enterBrotherVoyeurEv7(s: GameState, scene: SceneBuilder): void {
  scene.text('If you can read this text, please contact a developer with the following information: brother_voyeur_ev7 is deprecated in brother.qsrc');
  // TODO-QSP: end
  scene.actions([
    { label: 'OK', goto: ['brother_lessons', 'anatomylesson2_4'] },
  ]);
  scene.build();
}

function enterBrotherVoyeurEv8(s: GameState, scene: SceneBuilder): void {
  scene.text('If you can read this text, please contact a developer with the following information: brother_voyeur_ev8 is deprecated in brother.qsrc');
  // TODO-QSP: end
  scene.actions([
    { label: 'OK', goto: ['brother_lessons', 'anatomylesson2_5'] },
  ]);
  scene.build();
}

function enterPregreact(s: GameState, scene: SceneBuilder): void {
  if (((s as any).loc ?? 0) === 'sitrPar') {
    if (((s as any).hour ?? 0) < 6) {
      // TODO-QSP: exit
    }
    if (((s as any).hour ?? 0) < 7  &&  ((s as any).brotherQW ?? 0)?.['last_sex_day_morning'] !== ((s as any).daystart ?? 0)) {
      // TODO-QSP: exit
    }
    if (((s as any).hour ?? 0) >= 23) {
      // TODO-QSP: exit
    }
  }
  (s as any).brother_pregreact = 1;
  scene.text('<center><b>Kolka</b></center>');
  scene.img('images/characters/shared/headshots_main/big34.jpg');
  if (((s as any).knowpreg ?? 0) === 1  &&  ((s as any).kid ?? 0) === 0  &&  qspFunc(s, 'body_din', 'pregnancyVisibility') === 1) {
    if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).brotherQW ?? 0)?.['Sex'] < 7) {
      // TODO-QSP: dynamic text: Surprised, your brother looks at your stomach. "<<$pcs_nickname>>, are you pregn...
      scene.text(`Surprised, your brother looks at your stomach. "${((s as any).pcs_nickname || '')}, are you pregnant? ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} and dad are going to be pissed!" After a moments pause he adds, "You do still look good, though."`);
      ((s as any).npc_pregtalk = (s as any).npc_pregtalk ?? {})['A34'] = 1;
      scene.actions([
{ label: 'Continue', goto: ['sitrPar', ''] },
]);
      return;
    } else {
      if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).brotherQW ?? 0)?.['Sex'] < 7) {
        // TODO-QSP: dynamic text: Surprised, your brother looks at your stomach, "<<$pcs_nickname>>, why didn''t y...
        scene.text(`Surprised, your brother looks at your stomach, "${((s as any).pcs_nickname || '')}, why didn't you tell me I'm going to be an uncle?"`);
        ((s as any).npc_pregtalk = (s as any).npc_pregtalk ?? {})['A34'] = 1;
        scene.actions([
{ label: 'Continue', goto: ['sitrPar', ''] },
]);
        return;
      } else {
        if (((s as any).brotherQW ?? 0)?.['Sex'] >= 7  &&  ((s as any).npc_pregtalk ?? 0)?.['A29'] === 0) {
          scene.text('Surprised, your brother looks at your stomach, "Are you really pregnant? It… it\'s not mine, is it?"');
          if (((s as any).wombthfathID ?? 0) === 'A34'  &&  ((s as any).npc_rel ?? 0)?.['A34'] > 50) {
            scene.actions([
              { label: 'Yes (Happy)', handler: (st: GameState) => {
    qspCall(st, 'brother', 'brotherknows1');
  } },
              { label: 'Yes (Angry)', handler: (st: GameState) => {
    qspCall(st, 'brother', 'brotherknows2');
  } },
            ]);
          } else {
            if ((Array.isArray((s as any).wombpotfath) ? ((s as any).wombpotfath as any[]).indexOf('A34') : -1) >= 0) {
              scene.actions([
                { label: 'Maybe (Happy)', handler: (st: GameState) => {
    qspCall(st, 'brother', 'brotherknows3');
  } },
                { label: 'Maybe (Angry)', handler: (st: GameState) => {
    qspCall(st, 'brother', 'brotherknows4');
  } },
              ]);
            } else {
              scene.actions([
                { label: 'No', handler: (st: GameState) => {
    qspCall(st, 'brother', 'brotherknows5');
  } },
              ]);
            }
          }
          return;
        }
      }
    }
  } else {
    if (((s as any).brotherQW ?? 0)?.['Sex'] < 7  &&  ((s as any).kid ?? 0) > 0  &&  qspFunc(s, 'body_din', 'pregnancyVisibility') === 1) {
      scene.text('"You\'re already pregnant again? This is starting to look like a new hobby," he laughs.');
      scene.text('"You know what? Maybe it is," you joke back. "Some girls play sports, I get serially impregnated."');
      scene.text('Kolka pokes his tongue out at you, "Well, congratulations on taking home the gold in getting knocked up."');
      scene.text('"Thanks, I\'m glad someone is proud of me," you reply.');
      // TODO-QSP: dynamic text: Kolka takes a serious tone, "<<$pcs_nickname>>, I am always proud of you. You''r...
      scene.text(`Kolka takes a serious tone, "${((s as any).pcs_nickname || '')}, I am always proud of you. You're my sister and I'll love you no matter what."`);
      scene.text('You\'re briefly taken aback by his uncharacteristic sincerity, "Thanks, really. I love you, too."');
      scene.text('You leave your brother to what he was doing before, glad that the two of you have the relationship that you do.');
      scene.actions([
{ label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: npc_pregtalk['A34'] = 1
  }, goto: ['sitrPar', ''] },
]);
      return;
    } else {
      if (((s as any).brotherQW ?? 0)?.['Sex'] >= 7  &&  ((s as any).kid ?? 0) > 0  &&  ((s as any).npc_pregtalk ?? 0)?.['A29'] === 0  &&  qspFunc(s, 'body_din', 'pregnancyVisibility') === 1) {
        scene.text('Kolka looks at your stomach for moment before asking, "Wow, you\'re pregnant again? Is it mine?"');
        if ((Array.isArray((s as any).wombpotfath) ? ((s as any).wombpotfath as any[]).indexOf('A34') : -1) >= 0) {
          if (((s as any).wombthfathID ?? 0) === 'A34'  &&  ((s as any).npc_rel ?? 0)?.['A34'] > 50) {
            scene.actions([
              { label: 'Yes', handler: (st: GameState) => {
    qspCall(st, 'brother', 'brotherknows6');
  } },
            ]);
          }
          scene.actions([
            { label: 'Maybe', handler: (st: GameState) => {
    qspCall(st, 'brother', 'brotherknows7');
  } },
          ]);
        } else {
          scene.actions([
            { label: 'No', handler: (st: GameState) => {
    qspCall(st, 'brother', 'brotherknows8');
  } },
          ]);
        }
        return;
      }
    }
  }
  (s as any).brother_pregreact = 0;
  // TODO-QSP: end
  scene.build();
}

function enterBrotherknows1(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_pregtalk = (s as any).npc_pregtalk ?? {})['A34'] = 1;
  scene.text('"Yeah, this baby is yours," you say, rubbing your belly. "And after it\'s born, I might let you help me make another one," you add before giving your brother a kiss. You look down at him and notice a lump starting to form in his pants.');
  // TODO-QSP: dynamic text: Kolka''s eyes suddenly go wide, "Wait! You''re not going to tell <<$npc_nickname...
  scene.text(`Kolka's eyes suddenly go wide, "Wait! You're not going to tell ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} I got you pregnant, are you?"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'No', handler: (st: GameState) => {
    scene.text('"Don\'t worry, I\'ll think of something to tell her. I\'ll probably just say I was raped on the way home from the disco. This\'ll just be our little secret," you wink and blow a kiss to your brother before finally walking away.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).brotherSecret = 1;
  }, goto: ['sitrPar', ''] },
    ]);
  } },
    { label: 'No (Blackmail him)', handler: (st: GameState) => {
    scene.text('"I don\'t know. I might need some… incentive to keep this secret. I\'ll let you know what I think of later." Your brother is clearly nervous as you walk away.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).brotherSecret = 1;
    (st as any).brotherBlackmail = 1;
  }, goto: ['sitrPar', ''] },
    ]);
  } },
    { label: 'Yes', handler: (st: GameState) => {
    scene.text('"Oh, I definitely am. She has a right to know and just thinking about the look on her face when I tell her turns me on so much. I want everyone to know my own brother put this baby in me." Your brother is clearly dealing with a mixture of panic and arousal as you leave.');
    scene.actions([
      { label: 'Continue', goto: ['sitrPar', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterBrotherknows2(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_pregtalk = (s as any).npc_pregtalk ?? {})['A34'] = 1;
  scene.text('"Yes, it is and you\'re going to take responsibility. I am not going to be a single mother raising this child on my own."');
  scene.text('Kolka stares at you in shock, "But I don\'t know anything about raising a kid!"');
  scene.text('"Well, you should have thought of that before knocking me up! You\'re going to have to figure it out," your brother is clearly crestfallen as you walk away.');
  // TODO-QSP: dynamic text: "Wait!" Kolka yells after you. "You''re not going to tell <<$npc_nickname[''A29'...
  scene.text(`"Wait!" Kolka yells after you. "You're not going to tell ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} I got you pregnant, right?"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'No (Blackmail him)', handler: (st: GameState) => {
    scene.text('You glare at Kolka, "Fuck you! I told you that you got me pregnant, and you\'re still worried about yourself? Okay, I\'ll keep it a secret, but you\'d better fall in line! If you don\'t do everything I say, I\'ll end you!"');
    scene.text('You storm away from Kolka, leaving him to squirm in discomfort.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).brotherSecret = 1;
    (st as any).brotherBlackmail = 1;
  }, goto: ['sitrPar', ''] },
    ]);
  } },
    { label: 'Yes', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You glare at Kolka, "Fuck off! Can you think about anything other than yourself ...
    scene.text(`You glare at Kolka, "Fuck off! Can you think about anything other than yourself for one second? I'm not protecting you. ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''} is going to find out, and you'll just have to deal with that!"`);
    scene.text('You storm away from Kolka, leaving him to squirm in discomfort.');
    scene.actions([
      { label: 'Continue', goto: ['sitrPar', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterBrotherknows3(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_pregtalk = (s as any).npc_pregtalk ?? {})['A34'] = 1;
  scene.text('"It could be, I\'m still not sure yet. I just wanted to give you a heads up." You then add with a wink, "Honestly, I kind of hope it is."');
  scene.text('"Me too," he states just a little too eagerly. He then quickly moves his lips to yours and you share a passionate kiss.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['sitrPar', ''] },
  ]);
  scene.build();
}

function enterBrotherknows4(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_pregtalk = (s as any).npc_pregtalk ?? {})['A34'] = 1;
  scene.text('"I\'m still not sure," you say. "But if it is, you had better take responsibility."');
  scene.text('Your brother rolls his eyes, "Then I really hope it\'s someone else\'s problem."');
  scene.text('"Fuck off! If it\'s yours then I\'ll make sure you take responsibility!" You then storm away, leaving Kolka to stew.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['sitrPar', ''] },
  ]);
  scene.build();
}

function enterBrotherknows5(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_pregtalk = (s as any).npc_pregtalk ?? {})['A34'] = 1;
  // TODO-QSP: dynamic text: "No, you got lucky this time. It''s actually <<$wombthfath>>''s," you tell him. ...
  scene.text(`"No, you got lucky this time. It's actually ${((s as any).wombthfath || '')}'s," you tell him. "I just wanted to share the news with my little brother."`);
  scene.text('"Oh, well congratulations!" He tries to sound happy, but you detect a note of disappointment in his voice.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['sitrPar', ''] },
  ]);
  scene.build();
}

function enterBrotherknows6(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_pregtalk = (s as any).npc_pregtalk ?? {})['A34'] = 1;
  if ((Array.isArray((s as any).ChildThFath) ? ((s as any).ChildThFath as any[]).indexOf('A34') : -1) >= 0  &&  ((s as any).BrotherHappy ?? 0) === 1) {
    scene.text('"Yeah, you knocked me up again," you smile at him. "I think you\'re doing this on purpose." You walk closer to your brother and straddle his lap. You affectionately wrap your arms around his neck and lean your face close to his, "You like knocking up your sister, don\'t you? You just love that this belly shows the whole world that I let my own brother fuck me, huh?"');
    // TODO-QSP: dynamic text: Kolka stares into your <<$pcs_eyecolor>> eyes, his face bright red and a bulge g...
    scene.text(`Kolka stares into your ${((s as any).pcs_eyecolor || '')} eyes, his face bright red and a bulge growing in his pants.`);
    scene.text('"Well?" you inquire. His face grows brighter as he realizes that those weren\'t rhetorical questions and that you actually expect an answer. Sweat runs down his face as he considers what to say and you find that you enjoy watching your little brother squirm. ');
    scene.text('He finally gathers his courage and says, "Yes, I love getting you pregnant. Every time we fuck, I have to fight the urge to just unload inside you, and every time I give in is the best moment of my life. Knowing that every rope I shoot into your wonderful pussy could knock you up turns me on more than anything else. Even before we had sex for the first time, I would fantasize about knocking you up every time I masturbated. I love knowing that I put that baby in you and that your body will tell everyone else. I want to impregnate you over and over, keeping you pregnant for as long as I can."');
    scene.text('As he finishes, you stare in silence. You were hoping for a confession, but that was way beyond what you were expecting. Unable to bear the silence any longer, Kolka breaks the tension by gripping your ass and kissing you as passionately as he can. This snaps you back to reality and you return the kiss.');
    scene.text('After several minutes, you pull back and lick your lips. Still sitting in Kolka\'s lap, you say, "Every moment that we’re together is fantastic, and I love that this baby is yours, but I don\'t know if I want any more children after this. So, when we have sex after this baby is born, please try to control yourself." He nods.');
    if (((s as any).momKnowsKolka ?? 0) === 1  &&  qspFunc(s, 'homes_properties', 'has_access', 'parents_home')) {
      // TODO-QSP: dynamic text: Kolka chuckles, "Since <<$npc_nickname[''A29'']>> already knows I''ve gotten you...
      scene.text(`Kolka chuckles, "Since ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} already knows I've gotten you pregnant before, we probably don't need to keep this one secret, do we?"`);
      scene.text('"No, I don\'t think we do. Even though she freaked she fuck out the first time, I\'m actually looking forward to her reaction this time. She\'s had plenty of time to come to terms with our…" You stop for a moment and grind into Kolka\'s lap, "special relationship."');
      scene.text('"God, I hope you\'re right. I don\'t think I could handle that again. I didn\'t know she could be so scary." You both laugh.');
      scene.text('You never dreamed that you would be building a family with your own brother, but now you wouldn\'t want it any other way.');
      scene.text('You kiss your brother one more time before getting up from his lap. Now that you\'ve told him the news, it\'s time to tell your mother. You really hope your right about her reaction…');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['KatjaHomeTalk', ''] },
      ]);
    } else {
      if (((s as any).momKnowsKolka ?? 0) === 1  &&  qspFunc(s, 'homes_properties', 'has_access', 'parents_home') === 0) {
        // TODO-QSP: dynamic text: "Since <<$npc_nickname[''A29'']>> already knows I''ve gotten you pregnant before...
        scene.text(`"Since ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} already knows I've gotten you pregnant before, we probably don't need to keep this one secret, do we?"`);
        // TODO-QSP: dynamic text: You scowl, "I don''t give a fuck what <<$npc_nickname[''A29'']>> knows. She''s n...
        scene.text(`You scowl, "I don't give a fuck what ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} knows. She's not speaking to me and I really don't care to say anything to her!"`);
        scene.text('Kolka softly caresses your cheek, "Sorry, I shouldn\'t have brought her up. I wasn\'t thinking."');
        scene.text('You smile, "It\'s alright. The only thing that matters right now is us and our baby."');
        // TODO-QSP: dynamic text: Once you''re finished speaking, your brother covers your <<$pc_desc[''lips'']>> ...
        scene.text(`Once you're finished speaking, your brother covers your ${((s as any).pc_desc ?? 0)?.['lips'] ?? ''} lips with his own and you joyfully reciprocate his kiss.`);
        scene.text('You never dreamed that you would be building a family with your own brother, but now you wouldn\'t want it any other way.');
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['sitrPar', ''] },
        ]);
      } else {
        if (((s as any).momKnowsKolka ?? 0) === 0  &&  (!((s as any).brotherBlackmail ?? 0))) {
          // TODO-QSP: dynamic text: Kolka looks at you, somewhat uneasily, "Since <<$npc_nickname[''A29'']>> still d...
          scene.text(`Kolka looks at you, somewhat uneasily, "Since ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} still doesn't know I’ve gotten you pregnant before, we're going to keep it a secret still, right?"`);
          scene.text('You lay your hands on his, "Don\'t worry, I\'m not going to tell her the truth. I don\'t want my little brother to face any consequences for something that we both enjoyed. I don\'t think the same lie will work more than once, but I\'ll think of something."');
          scene.text('Kolka sighs in relief. "Thanks, sis, you\'re the best."');
          scene.text('"I know." You smile and kiss your brother one more time before getting up from his lap. Now you just need to decide what to tell your mother.');
          scene.actions([
            { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['sitrPar', ''] },
          ]);
        } else {
          if (((s as any).momKnowsKolka ?? 0) === 0  &&  ((s as any).brotherBlackmail ?? 0) === 1) {
            scene.text('"Don’t worry, I won\'t tell her." You pause for a moment, "Assuming, of course, that you keep up your end of the bargain. I just need to figure out what to tell her. I don\'t think the same lie will work more than once, but I\'ll think of something."');
            scene.text('Kolka sighs in relief. "Thanks, sis, you\'re the best."');
            scene.text('"I know." You smile and kiss your brother one more time before getting up from his lap. Now you just need to decide what to tell your mother.');
            scene.actions([
              { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['sitrPar', ''] },
            ]);
          }
        }
      }
    }
  } else {
    if ((Array.isArray((s as any).ChildThFath) ? ((s as any).ChildThFath as any[]).indexOf('A34') : -1) >= 0  &&  ((s as any).BrotherAngry ?? 0) === 1) {
      scene.text('"Yeah, it\'s yours. I can\'t believe you got me pregnant again." You shake your head, "I don\'t know why the hell I thought you\'d be more careful after the first time."');
      scene.text('"You thought I\'d be more careful? It takes two, sweetheart." He chuckles, "And besides, I didn\'t hear you complaining while we were fucking."');
      scene.text('You snap at him, "You shut your goddamn mouth. You don\'t have to walk around with a baby inside you. I do. So yeah, I have every right to be pissed and you’re just going to sit back and deal with it."');
      if (((s as any).momKnowsKolka ?? 0) === 1  &&  qspFunc(s, 'homes_properties', 'has_access', 'parents_home')) {
        // TODO-QSP: dynamic text: "<<$npc_nickname[''A29'']>> already knows you got me pregnant before." You breat...
        scene.text(`"${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} already knows you got me pregnant before." You breath a deep sigh, "I am <i>not</i> looking forward to telling her about this."`);
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['KatjaHomeTalk', ''] },
        ]);
      } else {
        if (((s as any).momKnowsKolka ?? 0) === 1  &&  qspFunc(s, 'homes_properties', 'has_access', 'parents_home') === 0) {
          scene.text('"God, I was already kicked out, thanks to you." You drop your head, "I should\'ve known you\'d only make my life worse"');
          scene.actions([
            { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['sitrPar', ''] },
          ]);
        } else {
          if (((s as any).momKnowsKolka ?? 0) === 0  &&  ((s as any).brotherBlackmail ?? 0) === 1) {
            scene.text('You place your hand on his shoulder, "Now I\'m going to keep it a secret that you\'re the father, but you\'d better work extra hard if you want it to stay a secret."');
            scene.actions([
              { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['sitrPar', ''] },
            ]);
          }
        }
      }
    } else {
      if (((s as any).wombthfathID ?? 0) === 'A34'  &&  ((s as any).BrotherHappy ?? 0) === 1) {
        scene.actions([
          { label: 'Happy', goto: ['brother', 'brotherknows1'] },
          { label: 'Angry', goto: ['brother', 'brotherknows2'] },
        ]);
      } else {
        scene.text('If you see this text, report it please as a bug and remember a few variables:');
        // TODO-QSP: dynamic text: arrposkolka = <<arrpos(''$ChildThFath'',''A34'')>>
        scene.text(`arrposkolka = ${qspUntranslated(s, "arrpos('ChildThFath','A34')", { location: "brother" })}`);
        // TODO-QSP: dynamic text: arrsizeChild = <<arrsize(''$ChildThFath'')-1>>
        scene.text(`arrsizeChild = ${0}`);
        // TODO-QSP: dynamic text: momKnowsKolka = <<momKnowsKolka>>
        scene.text(`momKnowsKolka = ${((s as any).momKnowsKolka || '')}`);
        // TODO-QSP: dynamic text: brotherBlackmail = <<brotherBlackmail>>
        scene.text(`brotherBlackmail = ${((s as any).brotherBlackmail || '')}`);
        // TODO-QSP: dynamic text: BrotherHappy = <<BrotherHappy>>
        scene.text(`BrotherHappy = ${((s as any).BrotherHappy || '')}`);
        scene.actions([
          { label: 'Happy', goto: ['brother', 'brotherknows1'] },
          { label: 'Angry', goto: ['brother', 'brotherknows2'] },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBrotherknows7(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_pregtalk = (s as any).npc_pregtalk ?? {})['A34'] = 1;
  if ((Array.isArray((s as any).ChildThFath) ? ((s as any).ChildThFath as any[]).indexOf('A34') : -1) >= 0  &&  ((s as any).BrotherHappy ?? 0) === 1) {
    scene.text('"It could be, I\'m still not sure yet. I just wanted to give you a heads up." You then add with a wink, "Honestly, I\'m kind of hoping it is. I would love to be carrying another one of my brother\'s children."');
    scene.text('"I hope so, too," he states just a little too eagerly. He then quickly moves his lips to yours and you share a passionate kiss.');
    scene.actions([
      { label: 'Continue', goto: ['sitrPar', ''] },
    ]);
  } else {
    if ((Array.isArray((s as any).ChildThFath) ? ((s as any).ChildThFath as any[]).indexOf('A34') : -1) >= 0  &&  ((s as any).BrotherAngry ?? 0) === 1) {
      scene.text('"I\'m still not sure," you say. "But if it is, you had better take responsibility."');
      scene.text('Your brother rolls his eyes, "Then I really hope it\'s someone else\'s problem."');
      scene.text('"Fuck off! If it\'s yours then I\'ll make sure you take responsibility!" You then storm away, leaving Kolka to stew.');
      scene.actions([
        { label: 'Continue', goto: ['sitrPar', ''] },
      ]);
    } else {
      scene.actions([
        { label: 'Happy', goto: ['brother', 'brotherknows3'] },
        { label: 'Angry', goto: ['brother', 'brotherknows4'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBrotherknows8(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_pregtalk = (s as any).npc_pregtalk ?? {})['A34'] = 1;
  if (((s as any).wombthfathID ?? 0) !== 'A34'  &&  (Array.isArray((s as any).ChildThFath) ? ((s as any).ChildThFath as any[]).indexOf('A34') : -1) >= 0  &&  ((s as any).wombthfathID ?? 0) !== 'unknown'  &&  ((s as any).wombthfathID ?? 0) !== '') {
    // TODO-QSP: dynamic text: "Not this time. It''s actually <<$wombthfath>>''s. Why, were you hoping you''d g...
    scene.text(`"Not this time. It's actually ${((s as any).wombthfath || '')}'s. Why, were you hoping you'd give me more children? Sorry, but this body is just too good to limit myself to one man, even if that man is my cute younger brother," you giggle.`);
    scene.text('Kolka licks his lips, "Well, you do have a great body, so I\'ll concede that point."');
    scene.text('"You know I love you, but please don\'t take this as an invitation to try to get me pregnant again. I don\'t know if I\'m ready for more kids." Your brother nods, clearly disappointed. "Hey, you can still fuck me, you just have to be careful."');
    scene.actions([
      { label: 'Continue', goto: ['sitrPar', ''] },
    ]);
  } else {
    if (((s as any).wombthfathID ?? 0) !== 'A34'  &&  (Array.isArray((s as any).ChildThFath) ? ((s as any).ChildThFath as any[]).indexOf('A34') : -1) < 0  &&  ((s as any).wombthfathID ?? 0) !== 'unknown'  &&  ((s as any).wombthfathID ?? 0) !== '') {
      // TODO-QSP: dynamic text: You shake your head, "No, not this time either. It''s actually <<$wombthfath>>''...
      scene.text(`You shake your head, "No, not this time either. It's actually ${((s as any).wombthfath || '')}'s."`);
      scene.text('"Oh, congratulations again, then." You still catch disappointment in his voice.');
      scene.text('You question him, "You weren\'t trying to get me pregnant, were you?"');
      scene.text('"Wh-what? No, of course not. I\'m really happy for you." You\'re pretty sure he\'s lying, but you\'re not going to push the subject. He\'s lucky he\'s cute.');
      scene.text('"Hey, you\'re my brother and I\'ll love you no matter what happens. But don\'t try to get me pregnant after I give birth this time. I am really not ready for more children." He nods in agreement.');
      scene.actions([
        { label: 'Continue', goto: ['sitrPar', ''] },
      ]);
    } else {
      scene.text('No, it is not.');
      if (((s as any).wombthfathID ?? 0) === 'unknown'  ||  ((s as any).wombthfathID ?? 0) === '') {
        scene.text('I actually have no idea whose this one is.');
      }
      scene.actions([
        { label: 'Continue', goto: ['sitrPar', ''] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  ((s as any).brotherQW = (s as any).brotherQW ?? {})['Age'] = ((s as any).year ?? 0) - (((((s as any).npc_dob ?? {})?.['A34'] ?? 0) - ((((s as any).npc_dob ?? {})?.['A34'] ?? 0) % 10000)) / 10000);
  (s as any).BrotherHappy = 1;
  qspCall(s, 'family_schedule', '');
  if ((((s as any).npc_dob ?? 0)?.['A34'] % 10000) / 100 > ((s as any).month ?? 0)) {
    ((s as any).brotherQW = (s as any).brotherQW ?? {})['Age'] = ((s as any).brotherQW['Age'] ?? 0) - (1);
  }
  if ((((s as any).npc_dob ?? 0)?.['A34'] % 10000) / 100 === ((s as any).month ?? 0)  &&  (((s as any).npc_dob ?? 0)?.['A34'] % 100) > ((s as any).day ?? 0)) {
    ((s as any).brotherQW = (s as any).brotherQW ?? {})['Age'] = ((s as any).brotherQW['Age'] ?? 0) - (1);
  }
  if (((s as any).npc_QW ?? 0)?.['A34'] > 20  &&  ((s as any).npc_QW ?? 0)?.['A34'] < 25) {
    ((s as any).npc_QW = (s as any).npc_QW ?? {})['A34'] = 20;
  }
  if (((s as any).npc_pregtalk ?? 0)?.['A34'] === 0  &&  ((s as any).brother_pregreact ?? 0) !== 1  &&  (Number((s as any).locArgs?.[0] ?? 0) === 'start'  ||  Number((s as any).locArgs?.[0] ?? 0) === 'showbody'  ||  Number((s as any).locArgs?.[0] ?? 0) === 'kiss_talk'  ||  Number((s as any).locArgs?.[0] ?? 0) === 'homework')) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPregreact(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).brother_pregreact ?? 0) === 1) {
      // TODO-QSP: exit
    }
  }
  if (((s as any).npc_pregtalk ?? 0)?.['A34'] === 1) {
    // TODO-QSP: killvar 'brother_pregreact'
  }
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'bro_school_field':
      enterBroSchoolField(s, scene);
      break;
    case 'playfootball':
      enterPlayfootball(s, scene);
      break;
    case 'kiss_talk':
      enterKissTalk(s, scene);
      break;
    case 'sleepsexcum':
      enterSleepsexcum(s, scene);
      break;
    case 'showbody':
      enterShowbody(s, scene);
      break;
    case 'homework':
      enterHomework(s, scene);
      break;
    case 'brotherSexStart':
      enterBrotherSexStart(s, scene);
      break;
    case 'fuckvaginal':
      enterFuckvaginal(s, scene);
      break;
    case 'fuckanal':
      enterFuckanal(s, scene);
      break;
    case 'brotherSexEnd':
      enterBrotherSexEnd(s, scene);
      break;
    case 'brotherSexCount':
      enterBrotherSexCount(s, scene);
      break;
    case 'brother_go_away':
      enterBrotherGoAway(s, scene);
      break;
    case 'brother_go_away2':
      enterBrotherGoAway2(s, scene);
      break;
    case 'brother_voyeur_end':
      enterBrotherVoyeurEnd(s, scene);
      break;
    case 'brother_voyeur_ev1':
      enterBrotherVoyeurEv1(s, scene);
      break;
    case 'brother_voyeur_ev2':
      enterBrotherVoyeurEv2(s, scene);
      break;
    case 'brother_voyeur_ev3':
      enterBrotherVoyeurEv3(s, scene);
      break;
    case 'brother_voyeur_ev3_2':
      enterBrotherVoyeurEv3_2(s, scene);
      break;
    case 'brother_sex_end':
      enterBrotherSexEnd2(s, scene);
      break;
    case 'brother_voyeur_ev4':
      enterBrotherVoyeurEv4(s, scene);
      break;
    case 'brother_voyeur_ev5':
      enterBrotherVoyeurEv5(s, scene);
      break;
    case 'virginitydialog':
      enterVirginitydialog(s, scene);
      break;
    case 'anus_check':
      enterAnusCheck(s, scene);
      break;
    case 'brother_voyeur_ev6':
      enterBrotherVoyeurEv6(s, scene);
      break;
    case 'brother_voyeur_ev7':
      enterBrotherVoyeurEv7(s, scene);
      break;
    case 'brother_voyeur_ev8':
      enterBrotherVoyeurEv8(s, scene);
      break;
    case 'pregreact':
      enterPregreact(s, scene);
      break;
    case 'brotherknows1':
      enterBrotherknows1(s, scene);
      break;
    case 'brotherknows2':
      enterBrotherknows2(s, scene);
      break;
    case 'brotherknows3':
      enterBrotherknows3(s, scene);
      break;
    case 'brotherknows4':
      enterBrotherknows4(s, scene);
      break;
    case 'brotherknows5':
      enterBrotherknows5(s, scene);
      break;
    case 'brotherknows6':
      enterBrotherknows6(s, scene);
      break;
    case 'brotherknows7':
      enterBrotherknows7(s, scene);
      break;
    case 'brotherknows8':
      enterBrotherknows8(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const brother: LocationDef = {
  name: 'brother',
  title: 'Kolka',
  region: 'other',
  enter: enter,
};
