import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  ((s as any).BurgerQW ?? {})['IlyQWBlackmailPhoto'] = '';
  if (((s as any).film ?? 0) > 0) {
    ((s as any).BurgerQW ?? {})['IlyQWBlackmailPhoto'] = 'The photo is a screenshot from one of your porn movies.';
  } else {
    if (((s as any).fotoyousuck ?? 0) === 1) {
      ((s as any).BurgerQW ?? {})['IlyQWBlackmailPhoto'] = 'The picture shows you sucking two cocks at the same time.';
    } else {
      if (((s as any).fotoCFNMsex ?? 0) > 0) {
        ((s as any).BurgerQW ?? {})['IlyQWBlackmailPhoto'] = 'In the photo you see yourself getting fucked from behind by a random guy. This must have been taken in the stripclub.';
      } else {
        if (((s as any).fotoCFNMblowjobCum ?? 0) > 0) {
          ((s as any).BurgerQW ?? {})['IlyQWBlackmailPhoto'] = 'In the photo you are sitting in front of a guy, kissing his cock. There seems to be cum on your face. This photo must have been taken in the stripclub.';
        } else {
          if (((s as any).fotoCFNMblowjob ?? 0) > 0) {
            ((s as any).BurgerQW ?? {})['IlyQWBlackmailPhoto'] = 'In the photo you are giving a guy a blowjob. You can spot a group of women in the background and it seems like this photo was taken in the stripclub.';
          } else {
            if (((s as any).strip_club ?? 0)?.['total_stripshows'] > 0) {
              ((s as any).BurgerQW ?? {})['IlyQWBlackmailPhoto'] = 'In the photo you are dancing on a pole. Obviously someone photographed you, while you were on stage at the stripclub.';
            } else {
              if (((s as any).modelfoto ?? 0)?.['erotic'] > 0) {
                ((s as any).BurgerQW ?? {})['IlyQWBlackmailPhoto'] = 'The photo shows you naked, it is very well taken and must be from a shoot at the modeling agency.';
              }
            }
          }
        }
      }
    }
  }
  (s as any).bossassrand = Math.floor(Math.random() * 4) + 0;
  if ((!((s as any).bossassrand ?? 0))) {
    scene.text('When you bend over to pick up the papers from the table, Anatoly gives you a slap on the ass.');
  }
  scene.build();
}

function enterWork(s: GameState, scene: SceneBuilder): void {
  (s as any).burand = Math.floor(Math.random() * 7) + 0;
  if ((!((s as any).burand ?? 0))) {
    scene.text('The intercom on your desk light up. Anatoly Borisovich wants to see you in his office.');
    return;
    scene.actions([
      { label: 'Go to the boss\'s office', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/diner/work2.jpg');
    (s as any).bossrand = Math.floor(Math.random() * 4) + 0;
    if ((!((s as any).bossrand ?? 0))) {
      // TODO-QSP: dynamic text: When you enter Anatoly's office he glances up and says, "<<$pcs_nickname>>, brin...
      scene.text(`When you enter Anatoly's office he glances up and says, "${((s as any).pcs_nickname ?? 0)}, bring me a cup of coffee."`);
      scene.actions([
        { label: 'Fetch him a coffee', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/diner/work3.jpg');
    scene.text('You deliver him a coffee on a little tray, with cream and sugar on the side. He doesn\'t comment on your extra effort.');
    if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 1) {
      scene.actions([
        { label: 'Have your lunch', goto: ['burgerWork', 'work'] },
      ]);
    } else {
      if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 2) {
        scene.actions([
          { label: 'Leave work', handler: (st: GameState) => {
    qspCall(st, 'burgerWork', 'work2');
  } },
        ]);
      }
    }
  } },
      ]);
    } else {
      if (((s as any).bossrand ?? 0) === 1) {
        // TODO-QSP: dynamic text: When you enter his office, Anatoly tells you: "<<$pcs_nickname>>, I need these d...
        scene.text(`When you enter his office, Anatoly tells you: "${((s as any).pcs_nickname ?? 0)}, I need these documents signed by the accountant. Take them to her, and see that she signs them. When she does, return them to me."`);
        scene.actions([
          { label: 'Go to the chief accountant', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/diner/work9.jpg');
    scene.text('You hand the papers over to the accountant. Lena mutters something under her breath, before reading through them and signing. "OK, back to Anatoly, girl," she says, handing you the documents.');
    scene.actions([
      { label: 'Back to Anatoly', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/diner/work2.jpg');
    scene.text('You deliver the papers to the boss, and he sends you on your way.');
    if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 1) {
      scene.actions([
        { label: 'Have your lunch', goto: ['burgerWork', 'work'] },
      ]);
    } else {
      if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 2) {
        scene.actions([
          { label: 'Leave work', handler: (st: GameState) => {
    qspCall(st, 'burgerWork', 'work2');
  } },
        ]);
      }
    }
  } },
    ]);
  } },
        ]);
      } else {
        if (((s as any).bossrand ?? 0) === 2) {
          // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I need Ilyushkin working on these documents in a hurry", Ana...
          scene.text(`"${((s as any).pcs_nickname ?? 0)}, I need Ilyushkin working on these documents in a hurry", Anatoly says. You grab the papers, and scamper out of the office`);
          scene.actions([
            { label: 'Take the papers to Ilyushkin', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/diner/work7.jpg');
    scene.text('You hand the papers to Ilyushkin, telling him that Anatoly wants them done immediately.');
    scene.text('Ilyushkin takes the folder from you. He opens the folder, and flips though the papers. With a little nod, he sends you on your way.');
    scene.actions([
      { label: 'Back to your desk', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/diner/work.jpg');
    scene.text('With your mission accomplished, you get back to work.');
    if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 1) {
      scene.actions([
        { label: 'Have your lunch', goto: ['burgerWork', 'work'] },
      ]);
    } else {
      if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 2) {
        scene.actions([
          { label: 'Leave work', handler: (st: GameState) => {
    qspCall(st, 'burgerWork', 'work2');
  } },
        ]);
      }
    }
  } },
    ]);
  } },
          ]);
        } else {
          if (((s as any).bossrand ?? 0) === 3) {
            (s as any).bossexrand = Math.floor(Math.random() * 4) + 0;
            (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
            qspCall(s, 'stat', '');
            scene.img(`images/characters/city/anatoly/sex/boss${((s as any).bossexrand ?? 0)}.jpg`);
            scene.text('When you enter Anatoly\'s office, he approaches you with a hungry look in his eye.');
            if ((!((s as any).bossexrand ?? 0))) {
              scene.text('He passionately presses you against the wall, and covers you with kisses.');
            }
            if (((s as any).bossexrand ?? 0) === 1) {
              scene.text('His hand slides down your stomach, and crawls under your skirt. You moan softly when his hand begins to caress your pussy.');
            }
            if (((s as any).bossexrand ?? 0) === 2) {
              scene.text('He grabs your ass, and lifting up your skirt begins to knead your ass like dough.');
            }
            if (((s as any).bossexrand ?? 0) === 3) {
              scene.text('He puts his hands on your hips, and slowly raises your skirt.');
            }
            qspCall(s, 'boyStat', 'A74');
            scene.actions([
              { label: 'Kiss him', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/anatoly/sex/bossex.jpg');
    scene.text('While you kiss him, Anatoly leads you to the couch. He soon has his face planted between your breasts, and a hand fondling your ass.');
    qspCall(s, 'arousal', 'kiss', 5, 'sub');
    qspCall(s, 'arousal', 'foreplay', (-5), 'sub');
    qspCall(s, 'stat', '');
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0  ||  ((s as any).pcs_ass ?? 0) > 0) {
      scene.actions([
        { label: 'Have sex', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/anatoly/sex/bossex2.jpg');
    scene.text('Anatoly puts you on your back, and begins to undress you. His kisses and his hands run all over your body, soon his hand finds its way between your legs.');
    (s as any).bosstipsexrand = Math.floor(Math.random() * 10) + 1;
    qspCall(s, 'arousal', 'vaginal_finger', 5, 'sub');
    qspCall(s, 'stat', '');
    if (((s as any).bosstipsexrand ?? 0) >= 3) {
      scene.actions([
        { label: 'Moan', goto: ['BurgerTip', 'sex2'] },
      ]);
    } else {
      if (((s as any).bosstipsexrand ?? 0) < 3) {
        scene.text('His hand goes further finding your sphincter with one of his fingers. The probing of his finger leaves no doubt about what he wants.');
        qspCall(s, 'arousal', 'anal_finger', 5, 'sub');
        qspCall(s, 'stat', '');
        scene.actions([
          { label: 'Take it in the ass', goto: ['BurgerTip', 'anal2'] },
        ]);
      }
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Suck his dick', goto: ['BurgerTip', 'bj'] },
    ]);
  } },
              { label: 'Kneel', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/anatoly/sex/bossex1.jpg');
    scene.text('Kneeling before Anatoly, you begin to deftly undo his pants. He stares down at you silently, as work to get access to the bulge in his briefs.');
    scene.actions([
      { label: 'Caress his cock through his briefs', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/anatoly/sex/bossbj.jpg');
    scene.text('When his pants are around his ankles, you kiss and rub your hands along the fabric covering his bulge. Eventually you see the tip of his penis poking out his briefs, and can\'t take it anymore. Playfully, you remove his underwear with your teeth.');
    qspCall(s, 'arousal', 'foreplay', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck his dick', goto: ['BurgerTip', 'bj'] },
    ]);
  } },
      { label: 'Suck his dick', goto: ['BurgerTip', 'bj'] },
    ]);
  } },
            ]);
          }
        }
      }
    }
  } },
    ]);
  } else {
    if (((s as any).burand ?? 0) === 1) {
      qspCall(s, 'stat', '');
      scene.img('images/locations/city/citycenter/diner/work5.jpg');
      if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 1) {
        (s as any).bosstiprand = Math.floor(Math.random() * 4) + 0;
        if ((!((s as any).bosstiprand ?? 0))) {
          ((s as any).BurgerQW ?? {})['TerminalTask'] = 1;
          ((s as any).BurgerQW ?? {})['TerminalTaskDay'] = ((s as any).daystart ?? 0);
          // TODO-QSP: dynamic text: Anatoly comes out of the office, and asks, "<<$pcs_nickname>>, I know it's lunch...
          scene.text(`Anatoly comes out of the office, and asks, "${((s as any).pcs_nickname ?? 0)}, I know it's lunch time, but I really need these documents taken to the storage terminal in the city industrial area to be signed. I'll give you the rest of the day off if you take care of it for me," he finishes, with a smile.`);
          scene.actions([
            { label: 'Deliver the papers', goto: ['city_center', ''] },
          ]);
        } else {
          if (((s as any).bosstiprand ?? 0) === 1) {
            // TODO-QSP: dynamic text: Anatoly comes out of the office, and says: "<<$pcs_nickname>>, before lunch I ne...
            scene.text(`Anatoly comes out of the office, and says: "${((s as any).pcs_nickname ?? 0)}, before lunch I need you to head down to the loading dock, and sign for a shipment of food that's due to arrive. There's a gold star in it for you if you take care of this for me."`);
            scene.actions([
              { label: 'Go sign for the shipment', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('Eventually you find the proper truck, and sign for the shipment. You keep an eye on them as they unload the shipment, just to be sure nothing gets lost on the way to the restaurant\'s space in the warehouse.');
    if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 1) {
      scene.actions([
        { label: 'Have your lunch', goto: ['burgerWork', 'work'] },
      ]);
    } else {
      if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 2) {
        scene.actions([
          { label: 'Leave work', handler: (st: GameState) => {
    qspCall(st, 'burgerWork', 'work2');
  } },
        ]);
      }
    }
  } },
            ]);
          } else {
            if (((s as any).bosstiprand ?? 0) === 2) {
              ((s as any).BurgerQW ?? {})['BankTask'] = 1;
              ((s as any).BurgerQW ?? {})['BankTaskDay'] = ((s as any).daystart ?? 0);
              // TODO-QSP: dynamic text: Anatoly comes out of the office, and says, "<<$pcs_nickname>>, please run these ...
              scene.text(`Anatoly comes out of the office, and says, "${((s as any).pcs_nickname ?? 0)}, please run these documents to the bank for me. I'll give you the rest of the day off if you take care of it for me," he finishes, with a smile.`);
              scene.actions([
                { label: 'Go to the bank', goto: ['city_center', ''] },
              ]);
            } else {
              if (((s as any).bosstiprand ?? 0) === 3) {
                // TODO-QSP: dynamic text: Anatoly comes out of the office, and says, "<<$pcs_nickname>>, call that guy we ...
                scene.text(`Anatoly comes out of the office, and says, "${((s as any).pcs_nickname ?? 0)}, call that guy we had set up our computers. The on button of my PC seems to be broken."`);
                scene.actions([
                  { label: 'Call the programmer', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    if (((s as any).neighborQW ?? 0)?.['stage'] === 0) {
      scene.text('A tall young man shows up, with a big bag of gear. He asks you what\'s broken, and you show him the boss\'s computer. He soon gets it working again, after fiddling around its insides.');
    } else {
      if (((s as any).neighborQW ?? 0)?.['stage'] > 0  &&  ((s as any).neighborQW ?? 0)?.['knows_work'] > 0) {
        ((s as any).neighborQW ?? {})['knows_work'] = 1;
        scene.text('Your neighbor Timofei shows up to repair the computer. You give him a friendly hello, and show his to the boss\'s PC. It doesn\'t take him long to figure out that it was just unplugged.');
      } else {
        if (((s as any).neighborQW ?? 0)?.['stage'] > 0  &&  ((s as any).neighborQW ?? 0)?.['knows_work'] === 0) {
          ((s as any).neighborQW ?? {})['knows_work'] = 1;
          scene.text('Your neighbor Timofei shows up to repair the computer. He is pleasantly surprised to see you. You chat cheerfully, while Timofei works on the boss\'s PC. He soon fixes whatever was wrong with it, and you send him on his way with a hug.');
        }
      }
    }
    if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 1) {
      scene.actions([
        { label: 'Have your lunch', goto: ['burgerWork', 'work'] },
      ]);
    } else {
      if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 2) {
        scene.actions([
          { label: 'Leave work', handler: (st: GameState) => {
    qspCall(st, 'burgerWork', 'work2');
  } },
        ]);
      }
    }
  } },
                ]);
              }
            }
          }
        }
      } else {
        if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 2) {
          (s as any).bosstiprand = Math.floor(Math.random() * 4) + 0;
          if ((!((s as any).bosstiprand ?? 0))) {
            // TODO-QSP: dynamic text: Anatoly comes out of the office and says, "<<$pcs_nickname>>, I have to leave ea...
            scene.text(`Anatoly comes out of the office and says, "${((s as any).pcs_nickname ?? 0)}, I have to leave early today. Here's a few papers for you to file," He hands you a folder on his way out of the office.`);
            (s as any).bburand = Math.floor(Math.random() * 11) + 0;
            if ((!((s as any).bburand ?? 0))) {
              scene.text('The senior manager Ilyushkin shows up in your office.');
              if (((s as any).BurgerQW ?? 0)?.['IlyQWBlackmailPhoto'] === ''  ||  ((s as any).BurgerQW ?? 0)?.['IlyQWBlackmail'] > 1) {
                scene.text('Ilyushkin grins, "Honey, I need you to put your stamp on these papers." You give Ilyushkin a skeptical look, as you find your company stamp. Then you put your stamp on the papers, and hand the back to Ilyushkin.');
                if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 1) {
                  scene.actions([
                    { label: 'Have your lunch', goto: ['burgerWork', 'work'] },
                  ]);
                } else {
                  if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 2) {
                    scene.actions([
                      { label: 'Leave work', handler: (st: GameState) => {
    qspCall(st, 'burgerWork', 'work2');
  } },
                    ]);
                  }
                }
              } else {
                qspCall(s, 'BurgerTip', 'ily_work');
              }
            } else {
              if (((s as any).bburand ?? 0) === 1) {
                scene.text('The assistant manager Sergei shows up in your office.');
                scene.text('Sergei looks at you with carnivorous eyes, "Is Anatoly around?"');
                scene.text('"No, he just he just left." you tell him.');
                if (((s as any).BurgerQW ?? 0)?.['sergeyQW'] === 1) {
                  // TODO-QSP: dynamic text: The pimply young man chuckles, and sits on the edge of your desk. "<<$pcs_nickna...
                  scene.text(`The pimply young man chuckles, and sits on the edge of your desk. "${((s as any).pcs_nickname ?? 0)}, you're dynamite. We are very lucky to have a girl like you around," he says, leering at you.`);
                } else {
                  if (((s as any).BurgerQW ?? 0)?.['sergeyQW'] === 0) {
                    // TODO-QSP: dynamic text: The pimply young man chuckles, and sits on the edge of your desk. "<<$pcs_nickna...
                    scene.text(`The pimply young man chuckles, and sits on the edge of your desk. "${((s as any).pcs_nickname ?? 0)} you seem like such a cool girl, do you think… I mean would you like, to go out with me after work?"`);
                    return;
                    scene.actions([
                      { label: 'Eww, no way!', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('After you reject this rookie, he jumps up and scampers out of your office. What a scrub!');
    if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 1) {
      scene.actions([
        { label: 'Have your lunch', goto: ['burgerWork', 'work'] },
      ]);
    } else {
      if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 2) {
        scene.actions([
          { label: 'Leave work', handler: (st: GameState) => {
    qspCall(st, 'burgerWork', 'work2');
  } },
        ]);
      }
    }
  } },
                      { label: 'Oh, I suppose', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/diner/work7.jpg');
    scene.text('Sergei is delighted when you meet up with him after work');
    // TODO-QSP: dynamic text: "Come on <<$pcs_nickname>>, let's go hit the town," he says, as he takes your ha...
    scene.text(`"Come on ${((s as any).pcs_nickname ?? 0)}, let's go hit the town," he says, as he takes your hand and leads you outside.`);
    scene.actions([
      { label: 'Follow him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (15);
    (s as any).pcs_hydra = 100;
    (s as any).pcs_energy = 100;
    (s as any).fat = ((s as any).fat ?? 0) + (4);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/diner/kafe.jpg');
    scene.text('Sergei takes you to a local restaurant not far from work. He orders food and drinks for both of you, after you find a table. Soon you are chatting, eating and drinking wine with Sergei. Before you realize it, you start feeling a little tipsy, but the conversation is still pleasant enough. When you are finished Sergei pays for everything, and invites you back to his place.');
    scene.actions([
      { label: 'Let him down easy', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    ((s as any).BurgerQW ?? {})['sergeyQW'] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/diner/kafe2.jpg');
    scene.text('You tell him that you have to be getting home, and the little brat takes that as an opportunity to grope you, before you leave.');
    scene.actions([
      { label: 'Leave.', goto: ['city_center', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
                    ]);
                  }
                }
                if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 1) {
                  scene.actions([
                    { label: 'Have your lunch', goto: ['burgerWork', 'work'] },
                  ]);
                } else {
                  if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 2) {
                    scene.actions([
                      { label: 'Leave work', handler: (st: GameState) => {
    qspCall(st, 'burgerWork', 'work2');
  } },
                    ]);
                  }
                }
              } else {
                if (((s as any).bburand ?? 0) === 2) {
                  scene.text('Lena comes up to your desk and asks, "Is the boss around?"');
                  scene.text('"No, he stepped out," you reply.');
                  scene.text('She purses her lips looking at you with disapproval, before she turns to go.');
                  if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 1) {
                    scene.actions([
                      { label: 'Have your lunch', goto: ['burgerWork', 'work'] },
                    ]);
                  } else {
                    if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 2) {
                      scene.actions([
                        { label: 'Leave work', handler: (st: GameState) => {
    qspCall(st, 'burgerWork', 'work2');
  } },
                      ]);
                    }
                  }
                } else {
                  if (((s as any).bburand ?? 0) === 3) {
                    scene.text('The personnel manager Vick comes into the office looking for the boss. When you tell her he is gone, she mutters something about personnel, and walks out');
                    if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 1) {
                      scene.actions([
                        { label: 'Have your lunch', goto: ['burgerWork', 'work'] },
                      ]);
                    } else {
                      if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 2) {
                        scene.actions([
                          { label: 'Leave work', handler: (st: GameState) => {
    qspCall(st, 'burgerWork', 'work2');
  } },
                        ]);
                      }
                    }
                  } else {
                    if (((s as any).bburand ?? 0) > 3) {
                      scene.text('With some free time at in the office alone, you screw around on the computer. The first thing you do is check for any updates on TFgamessite, disappointed you play solitaire instead.');
                      if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 1) {
                        scene.actions([
                          { label: 'Have your lunch', goto: ['burgerWork', 'work'] },
                        ]);
                      } else {
                        if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 2) {
                          scene.actions([
                            { label: 'Leave work', handler: (st: GameState) => {
    qspCall(st, 'burgerWork', 'work2');
  } },
                          ]);
                        }
                      }
                    }
                  }
                }
              }
            }
          } else {
            if (((s as any).bosstiprand ?? 0) === 1) {
              // TODO-QSP: dynamic text: Anatoly comes out of the office and says, "<<$pcs_nickname>>, let's get out of h...
              scene.text(`Anatoly comes out of the office and says, "${((s as any).pcs_nickname ?? 0)}, let's get out of here and go have some fun."`);
              return;
              scene.actions([
                { label: 'Go with Anatoly', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/shared/car.jpg');
    (s as any).BurMestoRand = Math.floor(Math.random() * 2) + 0;
    if ((!((s as any).BurMestoRand ?? 0))) {
      scene.text('You get in the car with Anatoly, and soon arrive at the sauna in the residential area. Your boss gives you a wicked little grin and says, "I made reservations to get us a private room."');
      scene.actions([
        { label: 'Go to the sauna', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    if (((s as any).saunaWhore ?? 0) >= 1) {
      ((s as any).BurgerQW ?? {})['SaunaWhoreKnown'] = 1;
      // TODO-QSP: dynamic text: When you enter the sauna you stop dead in your tracks when you see the madam. "<...
      scene.text(`When you enter the sauna you stop dead in your tracks when you see the madam. "${((s as any).pcs_nickname ?? 0)}, what a surprise, are you coming back to work for us?"`);
      scene.text('Anatoly says, "What\'s going on here?"');
      // TODO-QSP: dynamic text: "Oh, you don't know? Little <<$pcs_nickname>> is one of the best little cocksuck...
      scene.text(`"Oh, you don't know? Little ${((s as any).pcs_nickname ?? 0)} is one of the best little cocksuckers I've ever had work for me, and her pussy is a goldmine," she laughs.`);
      // TODO-QSP: dynamic text: Anatoly is furious: "How? <<$pcs_nickname>>? You're just a common whore?" If tha...
      scene.text(`Anatoly is furious: "How? ${((s as any).pcs_nickname ?? 0)}? You're just a common whore?" If that's the case you can stay here, and ply your trade. I guess I was wrong about you." He storms off, and moments later you hear the screech of his car tires as he drives away.`);
      // TODO-QSP: dynamic text: The madam continues: "<<$pcs_nickname>>, you're a whore. You will always be a wh...
      scene.text(`The madam continues: "${((s as any).pcs_nickname ?? 0)}, you're a whore. You will always be a whore. If you do manage to trick some nice man your past will eventually catch up with you. Consider this a free lesson."`);
      scene.actions([
        { label: 'Leave', goto: ['city_residential', ''] },
      ]);
    } else {
      scene.text('You head into the sauna, and up to your luxury room. Anatoly doesn\'t waste anytime undressing, and motions for you to do the same. When you are both naked, he motions for you to come to him. You know just what to do.');
      scene.actions([
        { label: 'Drop to your knees', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/anatoly/sex/bossbjs.jpg');
    scene.text('You kneel before your Anatoly, and shower his groin with gentle kisses and little licks. He is rock-hard and ready in no time. You tease him a little by sucking on just the tip of his cock, for a while. When it looks like he can\'t take it anymore, you slide his entire cock into your mouth. You bob your head up and down vigorously, savoring the taste of the boss\'s cock. Before you can finish him, he pulls himself from your mouth, and motions for you to follow him to the bench.');
    qspCall(s, 'arousal', 'bj', 5, 'sub');
    qspCall(s, 'stat', '');
    if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
      scene.text('Wait! You\'ve never had sex before!');
      scene.text('Anatoly grins and says, "It\'s not that big of a deal just lay down on this bench and relax. All secretaries do it for their bosses from time to time."');
      scene.text('He continues, "Now just spread your legs a little. I promise you\'ll enjoy this, just maybe not as much as me."');
    }
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'boyStat', 'A74');
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/anatoly/sex/bosssexs.jpg');
    (s as any).protect = 1;
    if (((s as any).preziktype ?? 0) === 2) {
      (s as any).sexcontra = 7;
      scene.text('Anatoly reaches for a condom, but you stop him. "Please, allow me," you say.');
      scene.text('You fish out one of the sabotaged condoms from your purse, and put it on him using your mouth. He then lies back on the bench. You straddle him ready to fuck his brains out, and maybe more you think with a wicked little thrill.');
    } else {
      (s as any).sexcontra = 3;
      scene.text('Anatoly puts a condom on saying, "You can never be too careful. My wife would kill me if I knocked up some sweet young thing." He then grabs you by the hand pulling you on top of him. You throw a leg over and sit on top of him, ready for action.');
    }
    if (((s as any).sexcontra ?? 0) === 3) {
      scene.text('Anatoly groans and twitches a few times, then he pulled out of you. You see that his condom is filled with sperm.');
      qspCall(s, 'cum_call', '', '', 'A74', 1, 3);
    } else {
      if (((s as any).sexcontra ?? 0) === 7) {
        scene.text('Anatoly groaned and twitches a few times, then he pulled out of you. You smile when you see that his condom wasn\'t quite as full as it should be.');
        qspCall(s, 'cum_call', '', '', 'A74', 1, 7);
      } else {
        if (((s as any).sexcontra ?? 0) === 4) {
          scene.text('Anatoly groans and twitches a few times, then he pulls out of you. You see that his condom is torn.');
          scene.text('"If you get pregnant, it\'s not mine. Take this money and make sure of it." He says to you.');
          qspCall(s, 'cum_call', '', '', 'A74', 1, 4);
          qspCall(s, 'money', 'earn', 500);
        } else {
          if (((s as any).sexcontra ?? 0) === 5) {
            scene.text('Anatoly groans and twitches a few times, then he pulls out of you. You see that his condom is missing. OMG, it must be inside you!');
            scene.text('"If you get pregnant, it\'s not mine. Take this money and make sure of it." He says to you.');
            qspCall(s, 'cum_call', '', '', 'A74', 1, 5);
            qspCall(s, 'money', 'earn', 500);
          }
        }
      }
    }
    (s as any).protect = 0;
    (s as any).sexcontra = 0;
    qspCall(s, 'din_van', 'showerdin');
    // TODO-QSP: dynamic text: You head to the shower to wash up. When you return, you see that he is already d...
    scene.text(`You head to the shower to wash up. When you return, you see that he is already dressed."${((s as any).pcs_nickname ?? 0)}, I've got to run, but you were great baby," he says, giving you a kiss before he leaves.`);
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the shower.');
    }
    qspCall(s, 'arousal', 'vaginal', 15, 'sub');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
      ]);
    } else {
      if (((s as any).BurMestoRand ?? 0) === 1) {
        scene.text('You get in the car, but before you can go anywhere Anatoly\'s phone rings. He frowns before answering, "Yes dear, I will soon." He hangs up and says to you, "I\'ve got to get home. Could you do your boss a favor, before I have to head home to the old battle axe?"');
        scene.actions([
          { label: 'You\'re great at giving favors', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A74');
    qspCall(s, 'cum_call', 'mouth_swallow', 'A74', 1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/anatoly/sex/bossbjcar.jpg');
    // TODO-QSP: dynamic text: Determined to send Anatoly home with a smile, you lean over and unzip his pants....
    scene.text(`Determined to send Anatoly home with a smile, you lean over and unzip his pants. You wrap your ${((s as any).pc_desc ?? 0)?.['lips']} lips around his flaccid penis, and start working your magic. Soon your mouth is full of hard throbbing cock. You make an effort to get him home quickly, and suck like a woman possessed with the need for seed. He does finish quickly, and you slurp it all down with a smile. Anatoly gets himself back in his pants, and sends you on your way saying, "Thanks babe, you're the best."`);
    qspCall(s, 'arousal', 'bj', 5, 'sub');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
    ]);
  } },
        ]);
      }
    }
  } },
              ]);
            } else {
              if (((s as any).bosstiprand ?? 0) === 2) {
                // TODO-QSP: dynamic text: Anatoly comes out of the office, and says, "<<$pcs_nickname>>, call the that guy...
                scene.text(`Anatoly comes out of the office, and says, "${((s as any).pcs_nickname ?? 0)}, call the that guy we had set up our computers. The on button of my PC seems to be broken."`);
                scene.actions([
                  { label: 'Call the computer guy', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    if (((s as any).neighborQW ?? 0)?.['stage'] === 0) {
      scene.text('A tall young man shows up, with a big bag of gear. He asks you whats broken, and you show him the boss\'s computer. He soon gets it working again, after fiddling around it\'s insides.');
    } else {
      if (((s as any).neighborQW ?? 0)?.['stage'] > 0  &&  ((s as any).neighborQW ?? 0)?.['knows_work'] > 0) {
        ((s as any).neighborQW ?? {})['knows_work'] = 1;
        scene.text('Your neighbor Timofei shows up to repair the computer. You give him a friendly hello, and show his to the boss\'s PC. It doesn\'t take him long to figure out that it was just unplugged.');
      } else {
        if (((s as any).neighborQW ?? 0)?.['stage'] > 0  &&  ((s as any).neighborQW ?? 0)?.['knows_work'] === 0) {
          ((s as any).neighborQW ?? {})['knows_work'] = 1;
          scene.text('Your neighbor Timofei shows up to repair the computer. He is pleasantly surprised to see you. You chat cheerfully, while Timofei works on the boss\'s PC. He soon fixes whatever was wrong with it, and you send him on his way with hug');
        }
      }
    }
    if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 1) {
      scene.actions([
        { label: 'Have your lunch', goto: ['burgerWork', 'work'] },
      ]);
    } else {
      if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 2) {
        scene.actions([
          { label: 'Leave work', handler: (st: GameState) => {
    qspCall(st, 'burgerWork', 'work2');
  } },
        ]);
      }
    }
  } },
                ]);
              } else {
                if (((s as any).bosstiprand ?? 0) === 3) {
                  // TODO-QSP: dynamic text: Anatoly comes out of the office, and says, "<<$pcs_nickname>>, I need you to sta...
                  scene.text(`Anatoly comes out of the office, and says, "${((s as any).pcs_nickname ?? 0)}, I need you to stay late today. I have some men coming in for a meeting, and I might need an extra set of hand around.`);
                  scene.actions([
                    { label: 'Sure thing boss', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'stat', '');
    scene.text('Two men join Anatoly in his office for the meeting. You are tasked with bringing coffee and taking notes. An hour later, the men are gone and Anatoly sends you on your way.');
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
    ]);
  } },
                  ]);
                }
              }
            }
          }
        }
      }
      return;
    } else {
      if (((s as any).burand ?? 0) === 2) {
        if (((s as any).BurgerQW ?? 0)?.['IlyQWBlackmailPhoto'] !== ''  &&  ((s as any).BurgerQW ?? 0)?.['IlyQWBlackmail'] === 0) {
          scene.actions([{ label: 'Continue', goto: ['BurgerTip', 'ily_work'] }]);
        } else {
          if (((s as any).BurgerQW ?? 0)?.['IlyQWBlackmailPhoto'] === ''  &&  ((s as any).BurgerQW ?? 0)?.['IlyQWBlackmail'] > 1) {
            scene.img('images/locations/city/citycenter/diner/work.jpg');
            scene.text('The senior manager Ilyushkin shows up in your office.');
            scene.text('Ilyushkin grins, "Honey, I need you to put your stamp on these papers." You give Ilyushkin a skeptical look, as you find your company stamp. Then you put your stamp on the papers, and hand the back to Ilyushkin.');
            if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 1) {
              scene.actions([
                { label: 'Have your lunch', goto: ['burgerWork', 'work'] },
              ]);
            } else {
              if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 2) {
                scene.actions([
                  { label: 'Leave work', handler: (st: GameState) => {
    qspCall(st, 'burgerWork', 'work2');
  } },
                ]);
              }
            }
          } else {
            scene.img('images/locations/city/citycenter/diner/work.jpg');
            scene.text('Nothing interesting happens.');
            if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 1) {
              scene.actions([
                { label: 'Have your lunch', goto: ['burgerWork', 'work'] },
              ]);
            } else {
              if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 2) {
                scene.actions([
                  { label: 'Leave work', handler: (st: GameState) => {
    qspCall(st, 'burgerWork', 'work2');
  } },
                ]);
              }
            }
          }
        }
        return;
      } else {
        if (((s as any).burand ?? 0) === 3) {
          scene.text('The assistant manager Sergei shows up in your office.');
          scene.text('Sergei looks at you with carnivorous eyes, "Is Anatoly around?"');
          scene.text('"No, he just he just left." you tell him.');
          if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 1) {
            scene.actions([
              { label: 'Have your lunch', goto: ['burgerWork', 'work'] },
            ]);
          } else {
            if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 2) {
              scene.actions([
                { label: 'Leave work', handler: (st: GameState) => {
    qspCall(st, 'burgerWork', 'work2');
  } },
              ]);
            }
          }
          return;
        } else {
          if (((s as any).burand ?? 0) === 4) {
            scene.text('Lena comes up to your desk and asks, "Is the boss around?"');
            scene.text('"No, he stepped out," you reply.');
            scene.text('She purses her lips looking at you with disapproval, before she turns to go.');
            if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 1) {
              scene.actions([
                { label: 'Have your lunch', goto: ['burgerWork', 'work'] },
              ]);
            } else {
              if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 2) {
                scene.actions([
                  { label: 'Leave work', handler: (st: GameState) => {
    qspCall(st, 'burgerWork', 'work2');
  } },
                ]);
              }
            }
            return;
          } else {
            if (((s as any).burand ?? 0) === 5) {
              scene.text('The personnel manager Vic comes into the office looking for the boss. When you tell her he is gone, she mutters something about personnel, and walks out');
              if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 1) {
                scene.actions([
                  { label: 'Have your lunch', goto: ['burgerWork', 'work'] },
                ]);
              } else {
                if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 2) {
                  scene.actions([
                    { label: 'Leave work', handler: (st: GameState) => {
    qspCall(st, 'burgerWork', 'work2');
  } },
                  ]);
                }
              }
              return;
            } else {
              if (((s as any).burand ?? 0) === 6) {
                scene.text('An elegantly dressed woman shows up at the office.');
                if (((s as any).BurgerQW ?? 0)?.['SlutReputation'] < 10) {
                  scene.text('The lady looks at you scornfully and asks, "Is he in there?" You nod your head meekly. Without knocking she marches into Anatoly\'s office. A short time later they both come back out. "Yes dear, I\'ll see you at your mother\'s house later, I promise," he says, as he ushers her out the door. After she is gone, he chuckles, "My wife is a rare bitch."');
                  if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 1) {
                    scene.actions([
                      { label: 'Have your lunch', goto: ['burgerWork', 'work'] },
                    ]);
                  } else {
                    if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 2) {
                      scene.actions([
                        { label: 'Leave work', handler: (st: GameState) => {
    qspCall(st, 'burgerWork', 'work2');
  } },
                      ]);
                    }
                  }
                }
                if (((s as any).BurgerQW ?? 0)?.['SlutReputation'] >= 10) {
                  scene.text('She looks at you with contempt, and storms into Anatoly\'s office. You can here her screaming through the door: "I know all about your adventures with that slut out there. If you don\'t send your whore packing immediately I\'m leaving you, and taking you for everything you\'re worth." With that she storms out of the office, and spits on you on her way out the door.');
                  // TODO-QSP: dynamic text: A few minutes later Anatoly comes out, and says, "<<$pcs_nickname>>, I'm sorry, ...
                  scene.text(`A few minutes later Anatoly comes out, and says, "${((s as any).pcs_nickname ?? 0)}, I'm sorry, I can't afford to lose my marriage over you. I'm going to have to insist on your resignation."`);
                  scene.actions([
                    { label: 'Write a letter of resignation', handler: (st: GameState) => {
    (s as any).pay = qspFunc(s, 'jobs', 'paycheck', 'city_diner_secretary');
    qspCall(s, 'jobs', 'set_fired', 'city_diner_secretary');
    qspCall(s, 'stat', '');
    scene.text('You quickly write out something that effectively says "I quit!" with some fancy words thrown in.');
    // TODO-QSP: dynamic text: Anatoly pays you the <<$func('money', 'string_profit', pay)>> you are owed, and ...
    scene.text(`Anatoly pays you the ${qspFunc(s, 'money', 'string_profit', ((s as any).pay ?? 0))} you are owed, and says, "It's over ${((s as any).pcs_nickname ?? 0)}, get out of here."`);
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
    ]);
  } },
                  ]);
                }
                return;
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterBj(s: GameState, scene: SceneBuilder): void {
  (s as any).numbjrand = Math.floor(Math.random() * 15) + 0;
  (s as any).wantrand = Math.floor(Math.random() * 4) + 0;
  qspCall(s, 'stat', '');
  scene.img(`images/characters/city/anatoly/sex/bossbj${((s as any).numbjrand ?? 0)}.jpg`);
  // TODO-QSP: dynamic text: You greedily wrap your <<$pc_desc['lips']>> lips around the head of his cock. Sm...
  scene.text(`You greedily wrap your ${((s as any).pc_desc ?? 0)?.['lips']} lips around the head of his cock. Smiling up at Anatoly, you give your lips a playfully little pop, before you begin to suck in earnest.`);
  qspCall(s, 'arousal', 'bj', 5, 'sub');
  qspCall(s, 'stat', '');
  if (((s as any).wantrand ?? 0) === 3) {
    // TODO-QSP: dynamic text: After a short time, Anatoly takes his cock from your mouth and says, "<<$pcs_nic...
    scene.text(`After a short time, Anatoly takes his cock from your mouth and says, "${((s as any).pcs_nickname ?? 0)}, I want all of you."`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0  ||  ((s as any).pcs_ass ?? 0) > 0) {
      scene.actions([
        { label: 'Bend over the desk', goto: ['BurgerTip', 'bend'] },
      ]);
    } else {
      scene.text('Wait! You\'ve never had sex before!');
      scene.text('Anatoly grins and says, "It\'s not that big of a deal just turn around for me. All secretaries do it for their bosses from time to time."');
      scene.text('He continues, "Now just spread your legs a little. I promise you\'ll enjoy this, just maybe not as much as me."');
      scene.actions([
        { label: 'Bend over the desk', goto: ['BurgerTip', 'bend'] },
      ]);
    }
  } else {
    if (((s as any).wantrand ?? 0) === 2) {
      // TODO-QSP: dynamic text: After a short time, Anatoly groans, "<<$pcs_nickname>> if you keep sucking, I'm ...
      scene.text(`After a short time, Anatoly groans, "${((s as any).pcs_nickname ?? 0)} if you keep sucking, I'm going to finish"`);
      if (((s as any).stat ?? 0)?.['think_virgin'] === 0  ||  ((s as any).pcs_ass ?? 0) > 0) {
        // TODO-QSP: act 'Bend over the desk': gt 'BurgerTip', 'bend'
      }
      scene.actions([
        { label: 'Finish him by hand', goto: ['BurgerTip', 'bj_cum'] },
        { label: 'Continue to suck', goto: ['BurgerTip', 'bj2'] },
      ]);
    } else {
      if (((s as any).wantrand ?? 0) < 2) {
        scene.text('After a short time, Anatoly groans loudly. He is obviously about to finish.');
        scene.actions([
          { label: 'Finish him by hand', goto: ['BurgerTip', 'bj_cum'] },
          { label: 'Continue to suck', goto: ['BurgerTip', 'bj2'] },
        ]);
      }
    }
  }
  scene.build();
}

function enterToilet(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).bosstoirand = Math.floor(Math.random() * 11) + 0;
  if (((s as any).bosstoirand ?? 0) === 10) {
    ((s as any).BurgerQW ?? {})['SlutReputation'] = (((s as any).BurgerQW ?? {})['SlutReputation'] ?? 0) + (1);
    scene.text('On your way to the toilet, you accidentally collide with Ilyushkin. He looks at you with a knowing little grin, before going about his business.');
    qspCall(s, 'BurgerTip', 'toilet_wash');
  } else {
    if (((s as any).bosstoirand ?? 0) === 9) {
      ((s as any).BurgerQW ?? {})['SlutReputation'] = (((s as any).BurgerQW ?? {})['SlutReputation'] ?? 0) + (1);
      scene.text('On your way to the toilet, you encounter Lena. The accountant notices the stain on your blouse and mutters "whore", before walking away.');
      qspCall(s, 'BurgerTip', 'toilet_wash');
    } else {
      if (((s as any).bosstoirand ?? 0) === 8) {
        ((s as any).BurgerQW ?? {})['SlutReputation'] = (((s as any).BurgerQW ?? {})['SlutReputation'] ?? 0) + (1);
        scene.text('On your way to the toilet, you accidentally collided with the personnel manager. Vic notices the cum stain, and her eyes widen in surprise. She wrinkles her nose in disgust, and walks away.');
        qspCall(s, 'BurgerTip', 'toilet_wash');
      } else {
        if (((s as any).bosstoirand ?? 0) === 7) {
          ((s as any).BurgerQW ?? {})['SlutReputation'] = (((s as any).BurgerQW ?? {})['SlutReputation'] ?? 0) + (1);
          scene.text('On your way to the toilet, you encounter Sergei. The pimply deputy manager notices the cum stain and laughs. "I thought you always swallowed everything, cocksucker", he says, as he walks away.');
          qspCall(s, 'BurgerTip', 'toilet_wash');
        } else {
          if (((s as any).bosstoirand ?? 0) < 7) {
            (s as any).bosstoirandin = Math.floor(Math.random() * 11) + 0;
            if (((s as any).bosstoirandin ?? 0) === 10) {
              ((s as any).BurgerQW ?? {})['SlutReputation'] = (((s as any).BurgerQW ?? {})['SlutReputation'] ?? 0) + (1);
              scene.text('You quietly slipped into the toilet, but come face to face with Lena. She notices the stain on your top and muttered "whore" before walking away.');
              qspCall(s, 'BurgerTip', 'toilet_wash2');
            } else {
              if (((s as any).bosstoirandin ?? 0) === 9) {
                ((s as any).BurgerQW ?? {})['SlutReputation'] = (((s as any).BurgerQW ?? {})['SlutReputation'] ?? 0) + (1);
                scene.text('In the bathroom you come face to face with toilet faced nose to nose with Vik. The personnel manager notices what you are doing, and shakes her head with disdain, as she walks out.');
                qspCall(s, 'BurgerTip', 'toilet_wash2');
              } else {
                if (((s as any).bosstoirandin ?? 0) < 9) {
                  if ((((s as any).cumloc ?? 0)[6] === 1  ||  ((s as any).cumloc ?? 0)[7] === 1)) {
                  }
                  if (((s as any).cumloc ?? 0)[11] === 1) {
                  }
                  (s as any).cumspclnt = 12;
                  qspCall(s, 'cum_cleanup', '');
                  (s as any).cumspclnt = 9;
                  qspCall(s, 'cum_cleanup', '');
                  (s as any).cumspclnt = 6;
                  qspCall(s, 'cum_cleanup', '');
                  // TODO-QSP: dynamic text: You go into the bathroom, and turn the water on in the sink. <<$deytoibur>><<$de...
                  scene.text(`You go into the bathroom, and turn the water on in the sink. ${((s as any).deytoibur ?? 0)}${((s as any).deytoibur2 ?? 0)}`);
                  if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 1) {
                    scene.actions([
                      { label: 'Have your lunch', goto: ['burgerWork', 'work'] },
                    ]);
                  } else {
                    if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 2) {
                      scene.actions([
                        { label: 'Leave work', handler: (st: GameState) => {
    qspCall(st, 'burgerWork', 'work2');
  } },
                      ]);
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

function enterToiletWash(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).cumloc ?? 0)[6] === 1  ||  ((s as any).cumloc ?? 0)[7] === 1)) {
  }
  if (((s as any).cumloc ?? 0)[11] === 1) {
  }
  (s as any).cumspclnt = 12;
  qspCall(s, 'cum_cleanup', '');
  (s as any).cumspclnt = 9;
  qspCall(s, 'cum_cleanup', '');
  (s as any).cumspclnt = 6;
  qspCall(s, 'cum_cleanup', '');
  // TODO-QSP: dynamic text: You go into the bathroom, and turn the water on in the sink. <<$deytoibur>><<$de...
  scene.text(`You go into the bathroom, and turn the water on in the sink. ${((s as any).deytoibur ?? 0)}${((s as any).deytoibur2 ?? 0)}`);
  if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 1) {
    scene.actions([
      { label: 'Have your lunch', goto: ['burgerWork', 'work'] },
    ]);
  } else {
    if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 2) {
      scene.actions([
        { label: 'Leave work', handler: (st: GameState) => {
    qspCall(st, 'burgerWork', 'work2');
  } },
      ]);
    }
  }
  scene.build();
}

function enterToiletWash2(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).cumloc ?? 0)[6] === 1  ||  ((s as any).cumloc ?? 0)[7] === 1)) {
  }
  if (((s as any).cumloc ?? 0)[11] === 1) {
  }
  (s as any).cumspclnt = 12;
  qspCall(s, 'cum_cleanup', '');
  (s as any).cumspclnt = 9;
  qspCall(s, 'cum_cleanup', '');
  (s as any).cumspclnt = 6;
  qspCall(s, 'cum_cleanup', '');
  // TODO-QSP: dynamic text: You go into the bathroom, and turn the water on in the sink. <<$deytoibur>><<$de...
  scene.text(`You go into the bathroom, and turn the water on in the sink. ${((s as any).deytoibur ?? 0)}${((s as any).deytoibur2 ?? 0)}`);
  if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 1) {
    scene.actions([
      { label: 'Have your lunch', goto: ['burgerWork', 'work'] },
    ]);
  } else {
    if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 2) {
      scene.actions([
        { label: 'Leave work', handler: (st: GameState) => {
    qspCall(st, 'burgerWork', 'work2');
  } },
      ]);
    }
  }
  scene.build();
}

function enterBjCum(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).reaktrand = Math.floor(Math.random() * 11) + 0;
  if (((s as any).reaktrand ?? 0) <= 5) {
    scene.img('images/shared/sex/handjob/bossbjcum.jpg');
    scene.text('Not wanting a mouth full of cum, you decide to jerk Anatoly to completion. His semen pours out all over your hand. Exhausted, Anatoly lies back breathing heavily. You better head to the bathroom to wash your hands off.');
    qspCall(s, 'arousal', 'hj', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go to the toilet', goto: ['BurgerTip', 'toilet'] },
    ]);
  } else {
    if (((s as any).reaktrand ?? 0) > 5  &&  ((s as any).reaktrand ?? 0) < 9) {
      qspCall(s, 'cum_call', 'clothes', 'A74', 1);
      scene.img('images/pc/body/cum/cumclothes/cumclothes2.jpg');
      scene.text('Not wanting a mouth full of cum, you decide to jerk Anatoly to completion. Oh dear, it looks like your clever plan backfired. Anatoly managed to shoot his load all over your pretty outfit. It looks sexy, but you better head to the bathroom before it stains.');
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Go to the toilet', goto: ['BurgerTip', 'toilet'] },
      ]);
    } else {
      if (((s as any).reaktrand ?? 0) >= 9) {
        qspCall(s, 'cum_call', 'face', 'A74', 1);
        qspCall(s, 'cum_call', 'clothes', 'A74', 1);
        scene.img('images/characters/city/anatoly/sex/bossbjcum3.jpg');
        scene.text('Not wanting a mouth full of cum, you decide to jerk Anatoly to completion. You realize your error when jets of semen splatter against your face and clothes. You manage to get most of it off your face with a tissue, but you better get to the little girls room before it stains your top.');
        qspCall(s, 'arousal', 'end');
        scene.actions([
          { label: 'Go to the toilet', goto: ['BurgerTip', 'toilet'] },
        ]);
      }
    }
  }
  qspCall(s, 'stat', '');
  scene.build();
}

function enterBj2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'cum_call', 'mouth', 'A74', 1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/anatoly/sex/bossbjcum4.jpg');
  scene.text('Wanting to get a taste, you pick up the pace to finish him. Soon, his salty semen pours into your mouth. It tastes delicious.');
  qspCall(s, 'arousal', 'bj', 5, 'sub');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Show him how full your mouth is', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/anatoly/sex/bossbjcum5.jpg');
    scene.text('When his sperm ceases to flow into your mouth, you open to show Anatoly. You let his load slowly run from your mouth.');
    (s as any).boburand = Math.floor(Math.random() * 11) + 0;
    if (((s as any).boburand ?? 0) > 2) {
      if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 1) {
        scene.actions([
          { label: 'Have your lunch', goto: ['burgerWork', 'work'] },
        ]);
      } else {
        if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 2) {
          scene.actions([
            { label: 'Leave work', handler: (st: GameState) => {
    qspCall(st, 'burgerWork', 'work2');
  } },
          ]);
        }
      }
    } else {
      if (((s as any).boburand ?? 0) <= 2) {
        qspCall(s, 'cum_call', 'clothes', 'A74', 1);
        qspCall(s, 'stat', '');
        scene.text('Afterward, you notice you got some of his semen on your blouse.');
        qspCall(s, 'arousal', 'end');
        scene.actions([
          { label: 'Go to the toilet', goto: ['BurgerTip', 'toilet'] },
        ]);
      }
    }
  } },
    { label: 'Swallow it down', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth_swallow', 'A74', 1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/anatoly/sex/bossbjcum6.jpg');
    scene.text('You swallow his cum down as fast as you can. You are left with the a strange, but not altogether unpleasant aftertaste in your mouth.');
    (s as any).boburand = Math.floor(Math.random() * 11) + 0;
    if (((s as any).boburand ?? 0) > 2) {
      if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 1) {
        scene.actions([
          { label: 'Have your lunch', goto: ['burgerWork', 'work'] },
        ]);
      } else {
        if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 2) {
          scene.actions([
            { label: 'Leave work', handler: (st: GameState) => {
    qspCall(st, 'burgerWork', 'work2');
  } },
          ]);
        }
      }
    } else {
      if (((s as any).boburand ?? 0) <= 2) {
        qspCall(s, 'cum_call', 'clothes', 'A74', 1);
        qspCall(s, 'stat', '');
        scene.text('You notice that you didn\'t get it all. A few drops of semen are staining your blouse.');
        scene.actions([
          { label: 'Go to the toilet', goto: ['BurgerTip', 'toilet'] },
        ]);
      }
    }
  } },
  ]);
  scene.build();
}

function enterBend(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/anatoly/sex/bossbendover.jpg');
  scene.text('You bend over the desk, spreading your cheeks to give Anatoly access to whatever he wants.');
  (s as any).bosstipsex = Math.floor(Math.random() * 11) + 0;
  if (((s as any).bosstipsex ?? 0) <= 8) {
    scene.text('He starts rubbing the head of his cock against your little pussy.');
    scene.actions([
      { label: 'Moan', goto: ['BurgerTip', 'sex'] },
    ]);
  } else {
    if (((s as any).bosstipsex ?? 0) > 8) {
      scene.text('He bends down and spits into your ass. Then you feel his finger start working its way into your backdoor.');
      scene.actions([
        { label: 'Give it to him', goto: ['BurgerTip', 'anal'] },
      ]);
    }
  }
  scene.build();
}

function enterSex(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A74');
  (s as any).pose = 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/anatoly/sex/bossfuck.jpg');
  scene.text('You urge him on with your moans, and a little wiggle of your hips.');
  (s as any).bosswantrand = Math.floor(Math.random() * 11) + 0;
  qspCall(s, 'arousal', 'vaginal', 10, 'sub');
  qspCall(s, 'cum_call', 'precum', 'A74', 1);
  qspCall(s, 'stat', '');
  if (((s as any).bosswantrand ?? 0) >= 3) {
    qspCall(s, 'cum_call', 'butt', 'A74', 1);
    // TODO-QSP: dynamic text: <<$boydesc>> withdraws his cock, and shoots hot streams of semen all over your n...
    scene.text(`${((s as any).boydesc ?? 0)} withdraws his cock, and shoots hot streams of semen all over your naked ass.`);
    qspCall(s, 'arousal', 'end');
    if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 1) {
      scene.actions([
        { label: 'Have your lunch', goto: ['burgerWork', 'work'] },
      ]);
    } else {
      if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 2) {
        scene.actions([
          { label: 'Leave work', handler: (st: GameState) => {
    qspCall(st, 'burgerWork', 'work2');
  } },
        ]);
      }
    }
  } else {
    if (((s as any).bosswantrand ?? 0) < 3) {
      scene.text('Without warning, Anatoly takes his cock from pussy, and pushes it against your sphincter.');
      scene.actions([
        { label: 'Give it to him', goto: ['BurgerTip', 'anal'] },
      ]);
    }
  }
  scene.build();
}

function enterAnal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A74');
  (s as any).pose = 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/anatoly/sex/bossanal.jpg');
  scene.text('You push your hips back presenting your ass for Anatoly.');
  qspCall(s, 'arousal', 'auto_lube', 'anal');
  qspCall(s, 'cum_call', 'butt', 'A74', 1);
  scene.text('He finishes by giving you a little smack on the ass and a "good girl".');
  qspCall(s, 'arousal', 'anal', 10, 'sub');
  qspCall(s, 'arousal', 'end');
  if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 1) {
    scene.actions([
      { label: 'Have your lunch', goto: ['burgerWork', 'work'] },
    ]);
  } else {
    if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 2) {
      scene.actions([
        { label: 'Leave work', handler: (st: GameState) => {
    qspCall(st, 'burgerWork', 'work2');
  } },
      ]);
    }
  }
  scene.build();
}

function enterSex2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A74');
  (s as any).pose = 0;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/anatoly/sex/bossfuck2.jpg');
  scene.text('You urge him on with your moans, and a little wiggle of your hips.');
  (s as any).bosswantrand = Math.floor(Math.random() * 11) + 0;
  qspCall(s, 'arousal', 'vaginal', 10, 'sub');
  qspCall(s, 'cum_call', 'precum', 'A74', 1);
  qspCall(s, 'stat', '');
  if (((s as any).bosswantrand ?? 0) >= 3) {
    qspCall(s, 'cum_call', 'stomach', 'A74', 1);
    // TODO-QSP: dynamic text: <<$boydesc>> withdraws his cock, and shoots hot streams of semen all over your n...
    scene.text(`${((s as any).boydesc ?? 0)} withdraws his cock, and shoots hot streams of semen all over your naked ass.`);
    qspCall(s, 'arousal', 'end');
    if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 1) {
      scene.actions([
        { label: 'Have your lunch', goto: ['burgerWork', 'work'] },
      ]);
    } else {
      if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 2) {
        scene.actions([
          { label: 'Leave work', handler: (st: GameState) => {
    qspCall(st, 'burgerWork', 'work2');
  } },
        ]);
      }
    }
  } else {
    if (((s as any).bosswantrand ?? 0) < 3) {
      scene.text('Without warning, Anatoly takes his cock from pussy, and pushes it against your tight little ass.');
      scene.actions([
        { label: 'Take it in the ass', goto: ['BurgerTip', 'anal2'] },
      ]);
    }
  }
  scene.build();
}

function enterAnal2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A74');
  (s as any).pose = 0;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/anatoly/sex/bossanal2.jpg');
  scene.text('You brace yourself, as he pushes his rock-hard cock against your tight little sphincter.');
  qspCall(s, 'arousal', 'auto_lube', 'anal');
  qspCall(s, 'cum_call', 'anus', 'A74', 1);
  scene.text('He finishes by giving you a little smack on the ass and a "good girl".');
  qspCall(s, 'arousal', 'anal', 10, 'sub');
  qspCall(s, 'arousal', 'end');
  if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 1) {
    scene.actions([
      { label: 'Have your lunch', goto: ['burgerWork', 'work'] },
    ]);
  } else {
    if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 2) {
      scene.actions([
        { label: 'Leave work', handler: (st: GameState) => {
    qspCall(st, 'burgerWork', 'work2');
  } },
      ]);
    }
  }
  scene.actions([
    { label: 'Take it in the ass', goto: ['BurgerTip', 'anal2'] },
  ]);
  scene.build();
}

function enterIlyWork(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/diner/work.jpg');
  scene.text('The senior manager Ilyushkin shows up in your office.');
  // TODO-QSP: dynamic text: Ilyushkin grins, "<<$pcs_nickname>>, <<$pcs_nickname>>, I would have never imagi...
  scene.text(`Ilyushkin grins, "${((s as any).pcs_nickname ?? 0)}, ${((s as any).pcs_nickname ?? 0)}, I would have never imagined this from a sweet young thing like you." He puts a photo on your desk. You pick it up, and take a look. ${((s as any).BurgerQW ?? 0)?.['IlyQWBlackmailPhoto']}. Ilyushkin is looking at you like a cat about to catch a mouse: "${((s as any).pcs_nickname ?? 0)}, we can't have this our boss has aims at a career in politics. If something like this were to get out it would… well we can't let that happen. I'm afraid you are just going to have to quit. Anatoly can't be known as a man who keeps a slutty secretary."`);
  scene.actions([
    { label: 'Plead with him not to show the pictures', goto: ['BurgerTip', 'ily_work2'] },
    { label: 'Keep silent', handler: (st: GameState) => {
    ((s as any).BurgerQW ?? {})['IlyQWBlackmail'] = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/diner/work5.jpg');
    scene.text('Ilyushkin frowns slightly when you don\'t say anything. "OK baby, I will keep quiet for now, but this isn\'t the end of this." Irritated, he puts the photo in his pocket.');
    if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 1) {
      scene.actions([
        { label: 'Have your lunch', goto: ['burgerWork', 'work'] },
      ]);
    } else {
      if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 2) {
        scene.actions([
          { label: 'Leave work', handler: (st: GameState) => {
    qspCall(st, 'burgerWork', 'work2');
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Plead with him not to show the pictures', goto: ['BurgerTip', 'ily_work2'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterIlyWork2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/diner/work5.jpg');
  scene.text('"Please Ilyushkin, I need this job. What will it take to keep you quiet?" you ask.');
  scene.text('Ilyushkin chuckled, "I see you are ready to cooperate. Let\'s go to my office to discuss it."');
  qspCall(s, 'willpower', 'misc', 'resist', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['BurgerTip', 'ily_work3'] },
    ]);
  }
  scene.actions([
    { label: 'Go with Ilyushkin', handler: (st: GameState) => {
    ((s as any).BurgerQW ?? {})['IlyQWBlackmail'] = 2;
    qspCall(s, 'stat', '');
    scene.text('When you enter his office, Ilyushkin locks the door. "Well baby, you can start by getting those clothes off," he orders.');
    qspCall(s, 'willpower', 'exhib', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['BurgerTip', 'ily_work3'] },
      ]);
    }
    scene.actions([
      { label: 'Undress', handler: (st: GameState) => {
    ((s as any).BurgerQW ?? {})['IlyQWBlackmail'] = 2;
    qspCall(s, 'stat', '');
    scene.text('As you undress you feel Ilyushkin\'s gaze all over your body. When you are naked, he slowly walks across the room, staring at you. He reaches out with a hand and tweaks one of you nipples, saying, "Not bad, not bad, I think you and I will get along just fine. Now on your knees bitch, and open that cute fucking mouth of yours wide."');
    scene.actions([
      { label: 'Get on your knees and open your mouth', handler: (st: GameState) => {
    ((s as any).BurgerQW ?? {})['IlyQWBlackmail'] = 2;
    qspCall(s, 'cum_call', 'face', 'A76', 1);
    (s as any).guy = ((s as any).guy ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/ilyushkin/sex/ilyfacial.jpg');
    scene.text('You kneel with mouth open waiting for what comes next. Ilyushkin gets his dick out, and starts to masturbate in front of your face, coldly staring down at you. He shouts, "I knew you\'d be my whore!" as sperm flies out of his cock and splatters against your face. After he is finished coating your face, he puts his dick back in his pants saying, "OK, get out of my office slut, and don\'t forget unless you want the boss finding out about those pictures I own your ass."');
    qspCall(s, 'arousal', 'bj', 10, 'sub');
    qspCall(s, 'arousal', 'end');
    if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 1) {
      scene.actions([
        { label: 'Have your lunch', goto: ['burgerWork', 'work'] },
      ]);
    } else {
      if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 2) {
        scene.actions([
          { label: 'Leave work', handler: (st: GameState) => {
    qspCall(st, 'burgerWork', 'work2');
  } },
        ]);
      }
    }
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterIlyWork3(s: GameState, scene: SceneBuilder): void {
  ((s as any).BurgerQW ?? {})['IlyQWBlackmail'] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/diner/work7.jpg');
  scene.text('When you refuse to undress, Ilyushkin says, "I\'m tired of messing with you anyway, you stupid cunt. It\'s easier just to get rid of you once and for all." With that, he opens the door and orders you to exit.');
  if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 1) {
    scene.actions([
      { label: 'Have your lunch', goto: ['burgerWork', 'work'] },
    ]);
  } else {
    if (((s as any).BurgerQW ?? 0)?.['WorkShift'] === 2) {
      scene.actions([
        { label: 'Leave work', handler: (st: GameState) => {
    qspCall(st, 'burgerWork', 'work2');
  } },
      ]);
    }
  }
  scene.build();
}

function enterWork4(s: GameState, scene: SceneBuilder): void {
  ((s as any).BurgerQW ?? {})['IlyQWBlackmail'] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/diner/work7.jpg');
  scene.text('When you refuse, Ilyushkin says, "I\'m tired of messing with you anyway, you stupid cunt. It\'s easier just to get rid of you once and for all." With that, he turns and walks away.');
  scene.actions([
    { label: 'Leave', goto: ['city_center', ''] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'work':
      enterWork(s, scene);
      break;
    case 'bj':
      enterBj(s, scene);
      break;
    case 'toilet':
      enterToilet(s, scene);
      break;
    case 'toilet_wash':
      enterToiletWash(s, scene);
      break;
    case 'toilet_wash2':
      enterToiletWash2(s, scene);
      break;
    case 'bj_cum':
      enterBjCum(s, scene);
      break;
    case 'bj2':
      enterBj2(s, scene);
      break;
    case 'bend':
      enterBend(s, scene);
      break;
    case 'sex':
      enterSex(s, scene);
      break;
    case 'anal':
      enterAnal(s, scene);
      break;
    case 'sex2':
      enterSex2(s, scene);
      break;
    case 'anal2':
      enterAnal2(s, scene);
      break;
    case 'ily_work':
      enterIlyWork(s, scene);
      break;
    case 'ily_work2':
      enterIlyWork2(s, scene);
      break;
    case 'ily_work3':
      enterIlyWork3(s, scene);
      break;
    case 'work4':
      enterWork4(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const BurgerTip: LocationDef = {
  name: 'BurgerTip',
  title: 'The intercom on your desk light up. Anatoly Borisovich wants',
  region: 'other',
  description: ['When you bend over to pick up the papers from the table, Anatoly gives you a slap on the ass.'],
  enter: enter,
};
