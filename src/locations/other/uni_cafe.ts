import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'uni_cafe', '');
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'stat', '');
  qspCall(s, 'katja_meynold_schedule', '');
  qspCall(s, 'schedule', 'A23');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>University Cafe</b></center>');
  scene.img('images/locations/city/island/university/uni_cafe.jpg');
  scene.text('The university cafe is a popular spot for students preparing for their exams or just unwinding from their busy schedule.');
  scene.text('It offers a rich variation of reasonably priced food and beverages. You can often overhear students complaining about the free, yet somewhat sub-par quality wi-fi.');
  if (((s as any).locat ?? 0)?.['katja'] === 28) {
    // TODO-QSP: dynamic text: 'You see '+iif(katjaQW['know_katja_uni'] = 0 and ($start_type['loc'] ! 'sg' and ...
    scene.text('You see ' + ((((s as any).katjaQW ?? 0)?.['know_katja_uni'] === 0  &&  (((s as any).start_type ?? 0)?.['loc'] !== 'sg'  &&  ((s as any).start_type ?? 0)?.['magic'] === 'tg')) ? ('a cute redheaded girl') : ('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027katja_chat/u0027, /u0027uni_cafe/u0027); return false;">Katja</a>')) + ' sitting at a table eating her lunch.');
  }
  if ((((s as any).start_type ?? 0)?.['loc'] === 'sg'  ||  ((s as any).start_type ?? 0)?.['magic'] !== 'tg'  ||  ((s as any).artemQW ?? 0)?.['knows_dorm_room_number'] === 1)  &&  ((s as any).locat ?? 0)?.['A2'] === 'uni_cafe_lunch') {
    scene.text('You see a familiar face sitting at one of the tables having lunch, your former classmate <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027uni_cafe/u0027, /u0027artem/u0027); return false;">Artem.</a>');
  }
  if (((s as any).locat ?? 0)?.['A23'] === 14) {
    // TODO-QSP: dynamic text: 'You see '+iif(AlbinaQW['know_albina_uni'] = 0 and ($start_type['loc'] ! 'sg' an...
    scene.text('You see ' + ((((s as any).AlbinaQW ?? 0)?.['know_albina_uni'] === 0  &&  (((s as any).start_type ?? 0)?.['loc'] !== 'sg'  &&  ((s as any).start_type ?? 0)?.['magic'] === 'tg')) ? ('an attractive looking brunette') : ('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027albina_events/u0027, /u0027uni_cafe/u0027); return false;">Albina</a>')) + ' sitting at one of the tables, eating her lunch while texting on her phone.');
  }
  if (((s as any).week ?? 0) < 5  &&  ((s as any).hour ?? 0) === 12  &&  ((s as any).minut ?? 0) >= 30) {
    (s as any).temp_rand = (Math.floor(Math.random() * 10) + 1);
    if ((((s as any).start_type ?? 0)?.['loc'] === 'sg'  ||  ((s as any).start_type ?? 0)?.['magic'] !== 'tg')  &&  ((s as any).yearstart ?? 0) > 1) {
      if (((s as any).temp_rand ?? 0) === 1) {
        scene.text('You see a familiar face sitting at one of the tables having lunch, your former classmate <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027uni_cafe/u0027, /u0027lazar/u0027); return false;">Lazar.</a>');
      } else {
        if (((s as any).temp_rand ?? 0) === 2) {
          scene.text('You see a familiar face sitting at one of the tables having lunch, your former classmate <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027uni_cafe/u0027, /u0027dimka/u0027); return false;">Dimka.</a>');
        } else {
          if (((s as any).temp_rand ?? 0) === 3) {
            scene.text('You see a familiar face sitting at one of the tables having lunch, your former classmate <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027uni_cafe/u0027, /u0027marcus/u0027); return false;">Marcus.</a>');
          }
        }
      }
    }
    if (((s as any).temp_rand ?? 0) === 5) {
      if (((s as any).meet_kendra ?? 0) === 1) {
        scene.text('You see <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027uni_cafe/u0027, /u0027kendra/u0027); return false;">Kendra</a> sitting at one of the tables having lunch.');
      } else {
        if (((s as any).kendraslave ?? 0) >= 1) {
          scene.text('You see a familiar face sitting at one of the tables having lunch, your mistress <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027uni_cafe/u0027, /u0027kendra/u0027); return false;">Kendra.</a>');
        } else {
          if (((s as any).pcs_hotcat ?? 0) >= 5) {
            scene.text('As you look around, you see a pretty young <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027uni_cafe/u0027, /u0027kendra/u0027); return false;">black woman</a> sitting at one of the tables having lunch. She notices you and gives you a quick once-over before smiling and leaning back. She seems to be watching you with an inviting smile to join her.');
          } else {
            scene.text('As you look around, you see a pretty young black woman sitting at one of the tables. She notices you and gives you a quick once-over before returning to what she was doing. After a few minutes, she finishes her drink before getting up and leaving.');
          }
        }
      }
    } else {
      if (((s as any).temp_rand ?? 0) === 6) {
        if (((s as any).DjibrilQW ?? 0)?.['meet'] === 1) {
          scene.text('You see a familiar face sitting at one of the tables having lunch, Olu\'s nephew <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027uni_cafe/u0027, /u0027djibril/u0027); return false;">Djibril.</a>');
        } else {
          if (((s as any).pcs_hotcat ?? 0) >= 5) {
            scene.text('As you look around, you see an attractive young <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027uni_cafe/u0027, /u0027djibril/u0027); return false;">black man</a> sitting at one of the tables having lunch. When he notices you looking at him, he gives you a friendly smile and a wave. It seems he is the friendly sort and seems to be interested in you.');
          } else {
            scene.text('As you look around, you see an attractive young black man sitting at one of the tables having lunch. He notices you and gives you a quick once-over before returning to what he is doing. After a few minutes, he finishes his drink before getting up and leaving.');
          }
        }
      } else {
        scene.text('As you look around, you don\'t see anyone you recognize hanging out today.');
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMenu(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).university ?? 0)?.['semester_week'] > 0  &&  ((s as any).university ?? 0)?.['enrolled_in_semester'] > ((s as any).university ?? 0)?.['semester_passed']) {
    qspCall(s, 'uni_lessons', 'schedule');
  }
  if (((s as any).university ?? 0)?.['exam_week'] > 0  &&  ((s as any).university ?? 0)?.['enrolled_in_semester'] > ((s as any).university ?? 0)?.['semester_passed']) {
    qspCall(s, 'uni_lessons', 'exam_schedule');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['uni_grounds', ''] },
  ]);
  scene.build();
}

function enterMenu(s: GameState, scene: SceneBuilder): void {
  if (((s as any).week ?? 0) < 5  &&  (((s as any).university ?? 0)?.['semester_week'] > 0  ||  ((s as any).university ?? 0)?.['exam_week'] > 0)  &&  ((s as any).university ?? 0)?.['enrolled_in_semester'] > ((s as any).university ?? 0)?.['semester_passed']  &&  ((((s as any).hour ?? 0) === 10  &&  ((s as any).minut ?? 0) > 30)  ||  (((s as any).hour ?? 0) === 12  &&  ((s as any).minut ?? 0) > 45)  ||  (((s as any).hour ?? 0) === 13  &&  ((s as any).minut ?? 0) < 15))) {
    scene.text('You might not have time to eat before your next class.');
    scene.actions([
      { label: 'Order from the menu anyway', handler: (st: GameState) => {
    (st as any).loc = 'uni_cafe';
    (st as any).loc_arg = '';
    qspCall(st, 'food_menu', '');
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Order from the menu', handler: (st: GameState) => {
    (st as any).loc = 'uni_cafe';
    (st as any).loc_arg = '';
    qspCall(st, 'food_menu', '');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSittingChoice(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locat ?? 0)?.['katja'] === 28  &&  ((s as any).npc_rel ?? 0)?.['A14'] > 40  &&  ((s as any).katjaQW ?? 0)?.['know_katja_uni'] === 1) {
    (s as any).loc = 'uni_cafe';
    (s as any).loc_arg = '';
    scene.actions([
      { label: 'Eat your lunch with Katja', goto: ['katja_chat', 'uni_cafe'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Eat your lunch alone', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    (st as any).uni_lunch_bought = 0;
    scene.text('<center><b>University Cafe</b></center>');
    scene.img('images/locations/city/island/university/uni_cafe.jpg');
    // TODO-QSP: dynamic text: You sit down and eat your lunch alone and<<$mtxt>>
    scene.text(`You sit down and eat your lunch alone and${((st as any).mtxt ?? '')}`);
    qspCall(st, 'stat', '');
    if (((st as any).university ?? 0)?.['semester_week'] > 0  &&  ((st as any).university ?? 0)?.['enrolled_in_semester'] > ((st as any).university ?? 0)?.['semester_passed']) {
      qspCall(st, 'uni_lessons', 'schedule');
    }
    if (((st as any).university ?? 0)?.['exam_week'] > 0  &&  ((st as any).university ?? 0)?.['enrolled_in_semester'] > ((st as any).university ?? 0)?.['semester_passed']) {
      qspCall(st, 'uni_lessons', 'exam_schedule');
    }
    scene.actions([
      { label: 'Leave', goto: ['uni_grounds', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterLazar(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'uni_cafe';
  (s as any).menu_arg = 'lazar';
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A149', 'like', 1);
  qspCall(s, 'stat', '');
  scene.text('<center><b>University Cafeteria</b></center>');
  scene.img('images/characters/shared/headshots_main/big149.jpg');
  if (((s as any).fame ?? 0)?.['pav_slut'] > 300) {
    scene.text('You notice Lazar sitting at a table having lunch.');
    scene.text('"Well, look who it is; The Queen of Cocks," he grins as you approach.');
    scene.text('You sit and talk to him for a few minutes, but all he does is talk about how easy you were back in school. "Sorry, I need to go, but Marcus, Andrey and I are renting a place together. You should come sometime and hang out so we can have some… fun."');
    scene.text('How he says it leaves no doubt about what he means. Even moving to a new city won\'t let get away from your reputation as a slut.');
    scene.text('He tells you where they live before he heads outside and walks away.');
  } else {
    if (((s as any).npc_rel ?? 0)?.['A149'] >= 60) {
      ((s as any).lazarQW = (s as any).lazarQW ?? {})['city_invite'] = 1;
      if (((s as any).pcs_hotcat ?? 0) >= 6) {
        scene.text('You notice Lazar sitting at a table having lunch.');
        scene.text('"What\'s up, hottie? You enjoying the city?" he asks as you approach.');
        scene.text('You sit and talk to him for a few minutes before his phone buzzes. He looks at it and then finishes his drink.');
        scene.text('"Sorry, I need to go, but Marcus, Andrey and I are renting a place together. You should really come by sometime. We\'d love to have you over."');
        scene.text('He tells you where they live before he heads outside and walks away.');
      } else {
        scene.text('You notice Lazar sitting at a table having lunch.');
        // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, how have you been?" he asks as you approach.
        scene.text(`"Hey ${((s as any).pcs_nickname ?? '')}, how have you been?" he asks as you approach.`);
        scene.text('You sit and talk to him for a few minutes before his phone buzzes. He looks at it and then finishes his drink.');
        scene.text('"Sorry, I need to go, but Marcus, Andrey and I are renting a place together. You should really come by sometime and hang out."');
        scene.text('He tells you where they live before he heads outside and walks away.');
      }
    } else {
      if (((s as any).npc_rel ?? 0)?.['A149'] <= 20) {
        scene.text('You notice Lazar sitting at a table having lunch.');
        scene.text('"Hey," he says as you approach.');
        scene.text('You sit and talk to him for a few minutes, but he doesn\'t say much to you before he checks his phone and finishes his drink.');
        scene.text('"Sorry, but I need to go," he says before he heads outside and walks away.');
      } else {
        if (((s as any).pcs_hotcat ?? 0) >= 6) {
          scene.text('You notice Lazar sitting at a table having lunch.');
          scene.text('"Hey, good looking. What have you been up to?" he asks as you approach.');
          scene.text('You sit and talk to him for a few minutes before his phone buzzes. He looks at it and then finishes his drink.');
          scene.text('"I need to get going. Give me your number and I\'ll give you a call sometime. We can go out and have some fun or something sometime."');
          scene.text('You exchange phone numbers with him before he heads outside and walks away.');
        } else {
          scene.text('You notice Lazar sitting at a table having lunch.');
          // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, how have you been?" he asks as you approach.
          scene.text(`"Hey ${((s as any).pcs_nickname ?? '')}, how have you been?" he asks as you approach.`);
          scene.text('You sit and talk to him for a few minutes before his phone buzzes. He looks at it and then finishes his drink.');
          scene.text('"I need to get going, but it was nice catching up. Maybe I\'ll see you around sometime?" he says before heading outside and walking away.');
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['uni_grounds', ''] },
  ]);
  scene.build();
}

function enterDimka(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'uni_cafe';
  (s as any).menu_arg = 'dimka';
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A1', 'like', 1);
  qspCall(s, 'stat', '');
  scene.text('<center><b>University Cafeteria</b></center>');
  scene.img('images/characters/shared/headshots_main/big1.jpg');
  if (((s as any).fame ?? 0)?.['pav_slut'] > 225) {
    scene.text('You notice Dimka sitting at a table.');
    scene.text('"Get away from me, you disgusting slut! I don\'t want any of the diseases you have," he says as you approach.');
    scene.text('He starts ignoring you, so you turn and walk away.');
  } else {
    if (((s as any).npc_rel ?? 0)?.['A1'] >= 60) {
      if (((s as any).grupTipe ?? 0) === 1) {
        scene.text('You notice Dimka sitting at a table having lunch.');
        scene.text('He smiles as you approach. "Well well, look who it is. It seems spending some time around me did you good. I always thought you had it in you to make it out of Pavlovsk before you got knocked up and married to some loser. Seems my judgment was as correct as always."');
        scene.text('You sit and talk to him for a few minutes and he\'s relatively nice to you, even asking about what you\'ve been up to until he finishes his drink.');
        scene.text('"I know you love thinking this is like the old days when we could hang out all the time, but now things are different. Maybe I\'ll see you around, and if you\'re good, I\'ll introduce you to the cool crowd at the uni," he says in a haughty tone, as if he\'s already the King of the university. He then stands and walks away.');
      } else {
        scene.text('You notice Dimka sitting at a table having lunch.');
        scene.text('He smiles as you approach. "Well well, look who it is. I always thought you had it in you to make it out of Pavlovsk before you got knocked up and married to some loser. Seems my judgment was as correct as usual." You sit and talk to him for a few minutes, but all he does is give you back-handed compliments until he finishes his drink.');
        scene.text('"I know you love being seen with me, but I have better things to do. Maybe I\'ll see you around?" he says before getting up and walking away.');
      }
    } else {
      if (((s as any).npc_rel ?? 0)?.['A1'] <= 20) {
        scene.text('You notice Dimka sitting at a table having lunch.');
        scene.text('He scowls as you approach. "What the fuck do you want, loser? Never mind, I don\'t want to know. Just go away."');
        scene.text('He starts ignoring you, so you turn and walk away.');
      } else {
        if (((s as any).grupTipe ?? 0) === 1) {
          scene.text('You notice Dimka sitting at a table having lunch.');
          scene.text('He smiles as you approach. "Well well, look who it is. It seems spending some time around on me did you good. You managed to make it out of Pavlovsk before you got knocked up by some loser."');
          scene.text('You sit and talk to him for a few minutes, but all he does is make snide remarks until he finishes his drink.');
          scene.text('"I know you love being seen with me, but we\'re not in Pavlovsk anymore and no longer run in the same social circles." He gets up and walks away, leaving you alone in the cafe.');
        } else {
          scene.text('You notice Dimka sitting at a table having lunch.');
          scene.text('He smiles as you approach. "Well well, look who it is. I honestly never thought you would make it out of Pavlovsk. I figured you would be knocked up and married to some loser by now."');
          scene.text('You sit and talk to him for a few minutes, but all he does is berate you until he finishes his drink.');
          scene.text('"I know you love being seen with me, but I have better things to do," he says before getting up and walking away.');
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['uni_grounds', ''] },
  ]);
  scene.build();
}

function enterMarcus(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'uni_cafe';
  (s as any).menu_arg = 'marcus';
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A146', 'like', 1);
  qspCall(s, 'stat', '');
  scene.text('<center><b>University Cafeteria</b></center>');
  scene.img('images/characters/shared/headshots_main/big146.jpg');
  if (((s as any).fame ?? 0)?.['pav_slut'] > 250) {
    ((s as any).marcusQW = (s as any).marcusQW ?? {})['city_invite'] = 1;
    scene.text('You notice Marcus sitting at a table having lunch.');
    scene.text('"Hey you," he says as you approach.');
    scene.text('You sit and talk to him for a few minutes before his phone buzzes. He looks at it and then finishes his drink.');
    scene.text('"Sorry, I need to go, but Lazar, Andrey and I are renting a place together. You should come by sometime and hang out so we can have some… fun."');
    scene.text('How he says it leaves no doubt about what he means. Seems that even moving to a new city can\'t get you away from your reputation as a slut.');
    scene.text('He tells you where they live before he heads outside and walks away.');
  } else {
    if (((s as any).npc_rel ?? 0)?.['A146'] >= 50) {
      ((s as any).marcusQW = (s as any).marcusQW ?? {})['city_invite'] = 1;
      scene.text('You notice Marcus sitting at a table having lunch.');
      // TODO-QSP: dynamic text: He smiles as you approach. "Hey <<$pcs_nickname>>, how have you been?"
      scene.text(`He smiles as you approach. "Hey ${((s as any).pcs_nickname ?? '')}, how have you been?"`);
      scene.text('You sit and talk to him for a few minutes before his phone buzzes. He looks at it and finishes his drink.');
      scene.text('"Sorry, I need to go, but Lazar, Andrey and I are renting a place together. You should really come by sometime and hang out."');
      scene.text('He tells you where they live before he heads outside and walks away.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A146'] <= 20) {
        scene.text('You notice Marcus sitting at a table having lunch.');
        scene.text('"Hey," is all he says as you approach.');
        scene.text('You sit and talk to him for a few minutes, but he doesn\'t say much to you before he checks his phone and finishes his drink. "Sorry, but I need to go."');
        scene.text('After that, he walks outside and walks away.');
      } else {
        scene.text('You notice Marcus sitting at a table having lunch.');
        // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, how have you been?" he asks as you approach.
        scene.text(`"Hey ${((s as any).pcs_nickname ?? '')}, how have you been?" he asks as you approach.`);
        scene.text('You sit and talk to him for a few minutes before his phone buzzes. He looks at it and finishes his drink.');
        scene.text('"Sorry, I need to go, but it was nice catching up. Maybe I\'ll see you around?" he asks before he heads outside and walks away.');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['uni_grounds', ''] },
  ]);
  scene.build();
}

function enterArtem(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'uni_cafe';
  (s as any).menu_arg = 'artem';
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A2', 'like', 1);
  qspCall(s, 'stat', '');
  scene.text('<center><b>University Cafeteria</b></center>');
  scene.img('images/characters/shared/headshots_main/big2.jpg');
  if (((s as any).fame ?? 0)?.['pav_slut'] > 250) {
    scene.text('You notice Artem sitting at a table having lunch.');
    scene.text('"Hey you," he says as you approach.');
    scene.text('You sit and talk to him for a few minutes, but he just mutters some responses you can\'t understand as he quickly finishes his lunch before he says he has to go and gets up and quickly moves away.');
    scene.text('Seems that even moving to a new city can\'t get you away from your reputation as a slut…');
  } else {
    if (((s as any).npc_rel ?? 0)?.['A146'] >= 50) {
      ((s as any).artemQW = (s as any).artemQW ?? {})['knows_dorm_room_number'] = 1;
      scene.text('You notice Artem sitting at a table having lunch.');
      // TODO-QSP: dynamic text: He smiles as you approach. "Hey <<$pcs_nickname>>, how have you been?"
      scene.text(`He smiles as you approach. "Hey ${((s as any).pcs_nickname ?? '')}, how have you been?"`);
      scene.text('You sit and talk to him for a few minutes before his phone buzzes. He looks at it and finishes his drink.');
      scene.text('"Sorry, but I need to go to class. You should stop by sometime and hang out. I\'m in room 209," He tells you before he heads outside and walks away.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A146'] <= 20) {
        scene.text('You notice Artem sitting at a table having lunch.');
        scene.text('"Hey," is all he says as you approach.');
        scene.text('You sit and talk to him for a few minutes, but he doesn\'t say much to you before he checks his phone and finishes his drink. "Sorry, but I need to go."');
        scene.text('After that, he walks outside and walks away.');
      } else {
        scene.text('You notice Artem sitting at a table having lunch.');
        // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, how have you been?" he asks as you approach.
        scene.text(`"Hey ${((s as any).pcs_nickname ?? '')}, how have you been?" he asks as you approach.`);
        scene.text('You sit and talk to him for a few minutes before his phone buzzes. He looks at it and finishes his drink.');
        scene.text('"Sorry, I need to go, but it was nice catching up. Maybe I\'ll see you around?" he asks before he heads outside and walks away.');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['uni_grounds', ''] },
  ]);
  scene.build();
}

function enterKendra(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'uni_cafe';
  (s as any).menu_arg = 'kendra';
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>University Cafeteria</b></center>');
  scene.img('images/characters/shared/headshots_main/big84.jpg');
  if (((s as any).kendraslave ?? 0) >= 1) {
    qspCall(s, 'npc_relationship', 'modify', 'A84', 'like', 1);
    scene.text('As you walk over to her, she invites you to sit down. "Who do we have here? My favorite little white slave bitch. Come to service me? I wish I had time for a training session, but unfortunately, I have things to do. Come by my dorm room as soon as you can."');
    scene.text('With that, she finishes her drink and leaves.');
  } else {
    if (((s as any).meet_kendra ?? 0) === 1) {
      scene.text('As you walk over to her, she invites you to sit down. You talk for a few minutes before she seems to get bored of the idle chit-chat.');
      scene.text('"You change your mind about serving me?" she asks bluntly.');
      scene.actions([
        { label: 'No', handler: (st: GameState) => {
    (st as any).kendrano = 1;
    qspCall(st, 'npc_relationship', 'modify', 'A84', 'dislike', 1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big84.jpg');
    scene.text('You smile at her. "Sorry, no. I still don\'t belong to anyone."');
    scene.text('She sighs softly. "Such a waste. Oh well, there are plenty of pretty little white Russian bitches that love being owned by an ebony Mistress. Perhaps we\'ll meet again, and you\'ll change your mind. If you change your mind, stop by my dorm room." She gives you directions to her dorm room before she finishes her lunch and leaves.');
    scene.actions([
      { label: 'Leave', goto: ['uni_grounds', ''] },
    ]);
  } },
        { label: 'Yes', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A84', 'like', 1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big84.jpg');
    scene.text('You look down a little to show your submission to her. "Yes, Mistress Kendra…"');
    scene.text('She smiles widely. "I think you\'re going to make a great little slave. We\'re going to have a lot of fun together. I wish I had time to start your training now, but I have things I need to do. Come by my dorm room as soon as you can."');
    scene.text('With that, she finishes her drink and leaves.');
    scene.actions([
      { label: 'Leave', goto: ['uni_grounds', ''] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).pcs_hotcat ?? 0) >= 5) {
        scene.text('As you walk over to her, she invites you to sit down and you take a seat opposite her.');
        scene.text('"You\'re a pretty little thing. What\'s your name?" she asks.');
        // TODO-QSP: dynamic text: "<<$pcs_firstname>>, but most people call me <<$pcs_nickname>>. What''s your nam...
        scene.text(`"${((s as any).pcs_firstname ?? '')}, but most people call me ${((s as any).pcs_nickname ?? '')}. What's your name?" you reply.`);
        // TODO-QSP: dynamic text: She smiles. "<<$pcs_nickname>>, what a pretty name… I''m Kendra, but you can cal...
        scene.text(`She smiles. "${((s as any).pcs_nickname ?? '')}, what a pretty name… I'm Kendra, but you can call me Mistress Kendra," she says confidently.`);
        scene.text('"Oh…" you reply. She\'s one of those people.');
        scene.actions([
          { label: 'Leave', goto: ['uni_grounds', ''] },
          { label: 'Talk to her', handler: (st: GameState) => {
    (st as any).meet_kendra = 1;
    qspCall(st, 'npc_relationship', 'set', 'A84', 45);
    scene.img('images/characters/shared/headshots_main/big84.jpg');
    // TODO-QSP: dynamic text: You start talking with her and tell her a bit about yourself, and she replies by...
    scene.text(`You start talking with her and tell her a bit about yourself, and she replies by saying that she's a student from the Republic of Congo attending the university on a student visa. You talk about a wide range of subjects for a while before she eventually says, "You're beautiful. I love making pretty little Russian bitches my slaves. Call me Mistress Kendra, ${((st as any).pcs_nickname ?? '')}, and become mine." Should you call her mistress? You have no doubt where that will lead.`);
    scene.actions([
      { label: 'Call her Kendra', handler: (st: GameState) => {
    (st as any).kendrano = 1;
    qspCall(st, 'npc_relationship', 'modify', 'A84', 'dislike', 1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/redlight/erotomaniac/sex/shkend.jpg');
    scene.text('You smile at her. "Sorry, but I don\'t belong to anyone."');
    scene.text('She sighs softly. "Such a waste. Oh well, there are plenty of pretty little white Russian bitches that love being owned by an ebony Mistress. Perhaps we will meet again, and you will change your mind?"');
    scene.text('She gives you directions to her dorm room before she finishes her drink and leaves.');
    scene.actions([
      { label: 'Leave', goto: ['uni_grounds', ''] },
    ]);
  } },
      { label: 'Call her Mistress Kendra', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A84', 'like', 1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/redlight/erotomaniac/sex/shkend.jpg');
    scene.text('You look down a little to show your submission to her. "Yes, Mistress Kendra."');
    scene.text('She smiles widely. "I think you\'re going to make a great little slave. We\'re going to have a lot of fun together. I wish I had time to start your training now, but I have things I need to do. Do come by my dorm room as soon as you can."');
    scene.text('With that, she finishes her drink and leaves.');
    scene.actions([
      { label: 'Leave', goto: ['uni_grounds', ''] },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        if (((s as any).npc_rel ?? 0)?.['A84'] < 40) {
          qspCall(s, 'npc_relationship', 'modify', 'A84', 'like', 1);
        }
        scene.text('You walk over to her table and stand next to it.');
        scene.text('"Hi," you smile as you greet her.');
        scene.text('She looks up at you with an annoyed glare. "I don\'t have time for games, and I\'m tired of yours. Now get lost."');
        scene.text('She proceeds to ignore you, so you turn and leave.');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['uni_grounds', ''] },
  ]);
  scene.build();
}

function enterDjibril(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'uni_cafe';
  (s as any).menu_arg = 'djibril';
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).DjibrilQW = (s as any).DjibrilQW ?? {})['invite'] = 1;
  ((s as any).DjibrilQW = (s as any).DjibrilQW ?? {})['meet'] = 1;
  qspCall(s, 'npc_relationship', 'modify', 'A82', 'like', 1);
  qspCall(s, 'stat', '');
  scene.text('<center><b>University Cafeteria</b></center>');
  scene.img('images/characters/shared/headshots_main/big82.jpg');
  if (((s as any).DjibrilQW ?? 0)?.['invite'] === 1) {
    scene.text('You notice Djibril sitting at a table.');
    // TODO-QSP: dynamic text: He smiles as you approach. "Hello again, <<$pcs_nickname>>."
    scene.text(`He smiles as you approach. "Hello again, ${((s as any).pcs_nickname ?? '')}."`);
    scene.text('You sit and talk to him for a few minutes before his phone buzzes. He looks at it and then finishes his drink. "Sorry, but I need to go. You should really stop by my dorm room. We could hang out and have some fun."');
    scene.text('He reminds you which dorm room is his before he heads outside and walks away.');
  } else {
    if (((s as any).DjibrilQW ?? 0)?.['meet'] === 1  &&  ((s as any).DjibrilQW ?? 0)?.['invite'] === 0) {
      scene.img('images/locations/city/centralpark/cafe/djibril_talk.jpg');
      scene.text('You notice Djibril sitting at a table.');
      // TODO-QSP: dynamic text: He smiles as you approach. "Hello again, <<$pcs_nickname>>."
      scene.text(`He smiles as you approach. "Hello again, ${((s as any).pcs_nickname ?? '')}."`);
      scene.text('You sit and talk to him for a few minutes before his phone buzzes.');
      scene.text('He looks at it and then finishes his drink. "Sorry, but I need to go. If you like, you should stop by my dorm room sometime and we can hang out and talk more."');
      scene.text('He tells you which room is his before he heads outside and walks away.');
    } else {
      if (((s as any).pcs_hotcat ?? 0) >= 5) {
        ((s as any).DjibrilQW = (s as any).DjibrilQW ?? {})['meet'] = 1;
        scene.text('As you approach him, the young African man sitting at the table introduces himself. "I am Djibril Maina. What\'s your name?"');
        // TODO-QSP: dynamic text: You smile at him. "<<$pcs_firstname>> <<$pcs_lastname>>, but most people just ca...
        scene.text(`You smile at him. "${((s as any).pcs_firstname ?? '')} ${((s as any).pcs_lastname ?? '')}, but most people just call me ${((s as any).pcs_nickname ?? '')}."`);
        scene.text('He looks surprised for a second. "Are you from Pavlovsk?" When you nod your head, he looks even more surprised. "Do you have an Aunt Luda dating a man named Olu?"');
        scene.text('Now it\'s your turn to look surprised. "Yes, how did you know that?"');
        scene.text('He shakes his head with a slight laugh. "He is my uncle. They\'ve told me about you. Small world, huh?"');
        scene.text('You giggle. "Yeah, it really is."');
        scene.text('You sit and talk to him for a few minutes before his phone buzzes. He looks at it and then finishes his drink.');
        scene.text('"Sorry, but I need to go. If you like, you should stop by my dorm room sometime and we can hang out and talk more."');
        scene.text('He tells you which room is his before he heads outside and walks away.');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['uni_grounds', ''] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'menu':
      enterMenu(s, scene);
      break;
    case 'sitting_choice':
      enterSittingChoice(s, scene);
      break;
    case 'lazar':
      enterLazar(s, scene);
      break;
    case 'dimka':
      enterDimka(s, scene);
      break;
    case 'marcus':
      enterMarcus(s, scene);
      break;
    case 'artem':
      enterArtem(s, scene);
      break;
    case 'kendra':
      enterKendra(s, scene);
      break;
    case 'djibril':
      enterDjibril(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const uni_cafe: LocationDef = {
  name: 'uni_cafe',
  title: 'University Cafe',
  region: 'other',
  locationType: 'public_indoors',
  description: ['The university cafe is a popular spot for students preparing for their exams or just unwinding from their busy schedule.'],
  enter: enter,
};
