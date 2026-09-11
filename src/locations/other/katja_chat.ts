import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A14', 'like', 1, 'chat');
  if (((s as any).locat ?? 0)?.['katja'] === 25) {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/campus_grounds.jpg');
    scene.text('You approach Katja while she\'s talking on the phone. She finishes her call just before you reach her.');
  } else {
    if (((s as any).locat ?? 0)?.['katja'] === 24) {
      scene.img('images/characters/shared/headshots_main/big14.jpg');
      scene.text('Katja is in her room getting her things ready for class. She looks out the window to check if the weather has improved.');
    } else {
      if (((s as any).locat ?? 0)?.['katja'] === 44) {
        scene.text('Katja is standing in front of the store, looking through the windows. She notices you approaching before you reach her.');
      } else {
        scene.img('images/characters/shared/headshots_main/big14.jpg');
      }
    }
  }
  if (((s as any).npc_had_sex ?? 0)?.['A14']) {
    if (((s as any).katjaQW ?? 0)?.['slut'] >= 100  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] < 2) {
      // TODO-QSP: dynamic text: Katja embraces you and gives you a quick kiss on the lips. "How are you, <<$pcs_...
      scene.text(`Katja embraces you and gives you a quick kiss on the lips. "How are you, ${((s as any).pcs_nickname ?? 0)}? It's great to see you," she says after letting you go.`);
      scene.text('"I\'m good," you answer. "How about you?"');
      scene.text('"I\'m doing fine. In fact, even better now that you\'re here," she replies.');
    } else {
      if (((s as any).katjaQW ?? 0)?.['slut'] >= 50) {
        // TODO-QSP: dynamic text: Katja hugs you and asks, "How are you, <<$pcs_nickname>>? It's great to see you!...
        scene.text(`Katja hugs you and asks, "How are you, ${((s as any).pcs_nickname ?? 0)}? It's great to see you!"`);
        scene.text('"I\'m good," you answer. "How about you?"');
        scene.text('"I\'m doing fine. In fact, even better now that you\'re here," she replies.');
      } else {
        // TODO-QSP: dynamic text: Katja smiles at you and asks, "How are you, <<$pcs_nickname>>? It's good to see ...
        scene.text(`Katja smiles at you and asks, "How are you, ${((s as any).pcs_nickname ?? 0)}? It's good to see you!"`);
        scene.text('"I\'m good," you answer. "How about you?"');
        scene.text('"I\'m doing fine. In fact, even better now that you\'re here," she replies.');
      }
    }
    scene.actions([
      { label: 'Continue chatting with Katja', goto: ['katja_chat', 'chat'] },
      { label: 'Say you can\'t stay to chat', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } else {
    if (((s as any).fame ?? 0)?.['city_slut'] > 200) {
      scene.text('"This is not the place to attract boys," she says mockingly. "Take your antics somewhere else!"');
      scene.text('"Maybe I\'m not hunting for boys this time," you reply in jest.');
      scene.text('"Stop it! I\'m not interested," she says in a tone less harsh than you expected.');
      scene.text('"Maybe you should be," you say with a smirk. "I could definitely teach you a thing or two about how to have fun."');
      scene.text('Katja\'s face grows red and her breath hitches, defying the stern look on her face.');
      if (((s as any).npc_rel ?? 0)?.['A14'] > 40) {
        scene.actions([
          { label: 'Continue chatting with Katja', goto: ['katja_chat', 'chat'] },
          { label: 'Say you can\'t stay to chat', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
        ]);
      }
    } else {
      if (((s as any).npc_rel ?? 0)?.['A14'] > 60) {
        // TODO-QSP: dynamic text: "Hi, <<$pcs_nickname>>. Great to see you. How is it going?" she asks.
        scene.text(`"Hi, ${((s as any).pcs_nickname ?? 0)}. Great to see you. How is it going?" she asks.`);
        scene.text('"It\'s going good," you reply. "How about you?"');
        scene.text('"I\'m good," she says.');
        scene.actions([
          { label: 'Continue chatting with Katja', goto: ['katja_chat', 'chat'] },
          { label: 'Say you don\'t have time to chat', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
        ]);
      } else {
        if (((s as any).npc_rel ?? 0)?.['A14'] < 25) {
          scene.text('"What are you doing here?" she asks. "I don\'t have time for bullies like you." She then turns around and ignores you.');
          scene.actions([
            { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
          ]);
        } else {
          // TODO-QSP: dynamic text: "Hi <<$pcs_nickname>>," she says while looking at you awkwardly as if she's tryi...
          scene.text(`"Hi ${((s as any).pcs_nickname ?? 0)}," she says while looking at you awkwardly as if she's trying to determine why you approached her.`);
          scene.text('"Hi Katja," you say. "How are you?"');
          scene.text('"I\'m good," she replies, and her composure loosens a little.');
          scene.actions([
            { label: 'Continue chatting with Katja', goto: ['katja_chat', 'chat'] },
            { label: 'Say you don\'t have time to chat', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
          ]);
        }
      }
    }
  }
  scene.build();
}

function enterUniCafe(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'npc_relationship', 'modify', 'A14', 'like', 1, 'chat');
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  scene.text('Katja looks up from her lunch as you try to sit down opposite her.');
  if (((s as any).npc_had_sex ?? 0)?.['A14']) {
    if (((s as any).katjaQW ?? 0)?.['slut'] >= 100  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] < 2) {
      // TODO-QSP: dynamic text: Katja gets up and gives you a quick kiss on the lips. "How are you, <<$pcs_nickn...
      scene.text(`Katja gets up and gives you a quick kiss on the lips. "How are you, ${((s as any).pcs_nickname ?? 0)}? It's great to see you," she says after sitting down again.`);
      scene.text('"I\'m good," you answer. "How about you?"');
      scene.text('"I\'m doing fine. In fact, even better now that you\'re here," she replies.');
    } else {
      // TODO-QSP: dynamic text: Katja smiles at you and asks, "How are you, <<$pcs_nickname>>? It's good to see ...
      scene.text(`Katja smiles at you and asks, "How are you, ${((s as any).pcs_nickname ?? 0)}? It's good to see you!"`);
      scene.text('"I\'m good," you answer. "How about you?"');
      scene.text('"I\'m doing fine. In fact, even better now that you\'re here," she replies.');
    }
    if (((s as any).uni_lunch_bought ?? 0) === 1) {
      scene.text('You sit down and start eating your lunch with Katja while you are talking.');
      scene.actions([
        { label: 'Chat with Katja while you are eating', handler: (st: GameState) => {
    (st as any).uni_lunch_bought = 0;
  }, goto: ['katja_chat', 'chat'] },
      ]);
    } else {
      scene.actions([
        { label: 'Continue chatting with Katja', goto: ['katja_chat', 'chat'] },
        { label: 'Say you can\'t stay to chat', goto: ['uni_cafe', ''] },
      ]);
    }
  } else {
    if (((s as any).fame ?? 0)?.['city_slut'] > 200) {
      scene.text('"This isn\'t the place to attract boys," she says mockingly. "Take your antics somewhere else!"');
      scene.text('"Maybe I\'m not hunting for boys this time," you reply in jest.');
      scene.text('"Stop it! I\'m not interested," she says in a tone less harsh than you expected.');
      scene.text('"Maybe you should be," you say with a smirk. "I could definitely teach you a thing or two about how to have fun."');
      scene.text('Katja\'s face grows red and her breath hitches, defying the stern look on her face.');
      if (((s as any).npc_rel ?? 0)?.['A14'] > 40) {
        if (((s as any).uni_lunch_bought ?? 0) === 1) {
          scene.text('You sit down and start eating your lunch while chatting with Katja.');
          scene.actions([
            { label: 'Chat with Katja while you are eating', handler: (st: GameState) => {
    (st as any).uni_lunch_bought = 0;
  }, goto: ['katja_chat', 'chat'] },
          ]);
        } else {
          scene.actions([
            { label: 'Continue chatting with Katja', goto: ['katja_chat', 'chat'] },
            { label: 'Say you can\'t stay to chat', goto: ['uni_cafe', ''] },
          ]);
        }
      } else {
        scene.actions([
          { label: 'Leave', goto: ['uni_cafe', ''] },
        ]);
      }
    } else {
      if (((s as any).npc_rel ?? 0)?.['A14'] > 60) {
        // TODO-QSP: dynamic text: "Hi <<$pcs_nickname>>, great to see you. How's it going?" she asks.
        scene.text(`"Hi ${((s as any).pcs_nickname ?? 0)}, great to see you. How's it going?" she asks.`);
        scene.text('"It\'s going good," you reply. "How about you?"');
        scene.text('"I\'m good," she says.');
        if (((s as any).uni_lunch_bought ?? 0) === 1) {
          scene.text('You sit down and start eating your lunch while chatting with Katja.');
          scene.actions([
            { label: 'Chat with Katja while you are eating', handler: (st: GameState) => {
    (st as any).uni_lunch_bought = 0;
  }, goto: ['katja_chat', 'chat'] },
          ]);
        } else {
          scene.actions([
            { label: 'Continue chatting with Katja', goto: ['katja_chat', 'chat'] },
            { label: 'Say you can\'t stay to chat', goto: ['uni_cafe', ''] },
          ]);
        }
      } else {
        if (((s as any).npc_rel ?? 0)?.['A14'] < 25) {
          scene.text('"What are you doing here?" she asks. "I don\'t have time for bullies like you." She then turns around and ignores you.');
          scene.actions([
            { label: 'Leave', goto: ['uni_cafe', ''] },
          ]);
        } else {
          // TODO-QSP: dynamic text: "Hi <<$pcs_nickname>>," she says while looking at you awkwardly as if she's tryi...
          scene.text(`"Hi ${((s as any).pcs_nickname ?? 0)}," she says while looking at you awkwardly as if she's trying to determine why you approached her.`);
          scene.text('"Hi Katja," you say. "How are you?"');
          scene.text('"I\'m good," she says, and her composure loosens a little.');
          if (((s as any).uni_lunch_bought ?? 0) === 1) {
            scene.text('You sit down and start eating your lunch while chatting with Katja.');
            scene.actions([
              { label: 'Chat with Katja while you are eating', handler: (st: GameState) => {
    (st as any).uni_lunch_bought = 0;
  }, goto: ['katja_chat', 'chat'] },
            ]);
          } else {
            scene.actions([
              { label: 'Continue chatting with Katja', goto: ['katja_chat', 'chat'] },
              { label: 'Say you can\'t stay to chat', goto: ['uni_cafe', ''] },
            ]);
          }
        }
      }
    }
  }
  scene.build();
}

function enterChat(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'katja_meynold_schedule', '');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  if (((s as any).locat ?? 0)?.['katja'] === 26) {
    if (((s as any).university ?? 0)?.['enrolled_in'] === 'teaching_studies') {
      scene.text('Katja says you need to leave for class now so you aren\'t late.');
      (s as any).hour = ((s as any).hour ?? 0) - (1);
      if (((s as any).university ?? 0)?.['semester_week'] > 0  &&  ((s as any).university ?? 0)?.['enrolled_in_semester'] > ((s as any).university ?? 0)?.['semester_passed']) {
        qspCall(s, 'uni_lessons', 'schedule');
      }
      scene.actions([
        { label: 'Say you aren\'t going to class and leave', handler: (st: GameState) => {
    (st as any).hour = ((st as any).hour ?? 0) + (1);
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    } else {
      scene.text('"I have to go before I\'m late for class," she says before leaving.');
      (s as any).hour = ((s as any).hour ?? 0) - (1);
      if (((s as any).university ?? 0)?.['semester_week'] > 0  &&  ((s as any).university ?? 0)?.['enrolled_in_semester'] > ((s as any).university ?? 0)?.['semester_passed']) {
        qspCall(s, 'uni_lessons', 'schedule');
      }
      scene.actions([
        { label: 'Say goodbye', handler: (st: GameState) => {
    (st as any).hour = ((st as any).hour ?? 0) + (1);
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    }
  } else {
    if (((s as any).locat ?? 0)?.['katja'] === 50) {
      if (((s as any).university ?? 0)?.['enrolled_in'] === 'teaching_studies') {
        scene.text('Katja says that you need to leave for class now so you aren\'t late for the exam.');
        (s as any).hour = ((s as any).hour ?? 0) - (1);
        if (((s as any).university ?? 0)?.['exam_week'] > 0  &&  ((s as any).university ?? 0)?.['enrolled_in_semester'] > ((s as any).university ?? 0)?.['semester_passed']) {
          qspCall(s, 'uni_lessons', 'exam_schedule');
        }
        scene.actions([
          { label: 'Say you aren\'t going to the exam and leave', handler: (st: GameState) => {
    (st as any).hour = ((st as any).hour ?? 0) + (1);
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
        ]);
      } else {
        scene.text('"I have to go before I\'m late for my exam," she says before leaving.');
        (s as any).hour = ((s as any).hour ?? 0) - (1);
        if (((s as any).university ?? 0)?.['exam_week'] > 0  &&  ((s as any).university ?? 0)?.['enrolled_in_semester'] > ((s as any).university ?? 0)?.['semester_passed']) {
          qspCall(s, 'uni_lessons', 'exam_schedule');
        }
        scene.actions([
          { label: 'Say goodbye', handler: (st: GameState) => {
    (st as any).hour = ((st as any).hour ?? 0) + (1);
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
        ]);
      }
    } else {
      if (((s as any).locat ?? 0)?.['katja'] === 28) {
        if ((Math.floor(Math.random() * 6) + 0) === 0  &&  ((s as any).pcs_hotcat ?? 0) > 6  &&  ((s as any).katjaQW ?? 0)?.['slut'] > 30  &&  ((s as any).katjaQW ?? 0)?.['lazar_uni_meet'] === 0) {
          scene.actions([{ label: 'Continue', goto: ['katja_uni', 'katja_lazar_cafe'] }]);
        } else {
          qspCall(s, 'katja_procedural', 'face_color');
          if (((s as any).katjaQW ?? 0)?.['QWstage'] >= 2  &&  ((s as any).pcs_makeup ?? 0) < 2) {
            qspCall(s, 'katja_procedural', 'makeup', 'katja_chat', 'chat1');
          } else {
            scene.actions([{ label: 'Continue', goto: ['katja_chat', 'chat1'] }]);
          }
        }
      } else {
        if (((s as any).locat ?? 0)?.['katja'] === 24  ||  ((s as any).locat ?? 0)?.['katja'] === 25  ||  ((s as any).locat ?? 0)?.['katja'] === 44  ||  ((s as any).locat ?? 0)?.['katja'] === 28) {
          qspCall(s, 'katja_procedural', 'face_color');
          if (((s as any).katjaQW ?? 0)?.['QWstage'] >= 2  &&  ((s as any).pcs_makeup ?? 0) < 2) {
            qspCall(s, 'katja_procedural', 'makeup', 'katja_chat', 'chat1');
          } else {
            scene.actions([{ label: 'Continue', goto: ['katja_chat', 'chat1'] }]);
          }
        } else {
          scene.text('Katja says that she has to leave.');
          scene.actions([
            { label: 'Say goodbye', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
          ]);
        }
      }
    }
  }
  scene.build();
}

function enterChat1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  if (((s as any).katjaQW ?? 0)?.['first_time_in_nightclub'] > 0  &&  ((s as any).npc_had_sex ?? 0)?.['A14'] === 0) {
    scene.actions([{ label: 'Continue', goto: ['katja_chat', 'nightclub_sex_follow_up'] }]);
  }
  if (((s as any).sofiaQW ?? 0)?.['know'] === 1  &&  ((s as any).sofiaQW ?? 0)?.['QWstage'] === 0) {
    scene.actions([{ label: 'Continue', goto: ['katja_chat', 'sofia1'] }]);
  }
  if (((s as any).katjaQW ?? 0)?.['know_katja_uni'] === 0) {
    scene.actions([{ label: 'Continue', goto: ['katja_chat', 'first_meet'] }]);
  }
  if (((s as any).katjaQW ?? 0)?.['QWstage'] >= 2  &&  ((s as any).katjaQW ?? 0)?.['knows_dorm_room_number'] === 0) {
    ((s as any).katjaQW ?? {})['knows_dorm_room_number'] = 1;
    scene.text('Katja tells you where her dorm room is.');
  }
  qspCall(s, 'katja_procedural', 'face_color');
  // TODO-QSP: $func('npc_reactions', 'general', 'A14')
  if (((s as any).locat ?? 0)?.['katja'] === 24) {
    // TODO-QSP: dynamic text: Katja grabs a magazine from the table, opens it, and hands it to you. "Look at t...
    scene.text(`Katja grabs a magazine from the table, opens it, and hands it to you. "Look at that dress, ${((s as any).pcs_nickname ?? 0)}. I think it would look perfect on you," she says. It is a lovely dress, but before you can respond, she's already flipping through the pages to another dress.`);
    scene.text('Katja spends the next few minutes showing you clothes that she thinks would suit you or that she simply likes.');
    if (((s as any).university ?? 0)?.['semester_week'] > 0  &&  ((s as any).university ?? 0)?.['enrolled_in_semester'] > ((s as any).university ?? 0)?.['semester_passed']) {
      qspCall(s, 'uni_lessons', 'schedule');
    }
    if (((s as any).university ?? 0)?.['exam_week'] > 0  &&  ((s as any).university ?? 0)?.['enrolled_in_semester'] > ((s as any).university ?? 0)?.['semester_passed']) {
      qspCall(s, 'uni_lessons', 'exam_schedule');
    }
  } else {
    if (((s as any).locat ?? 0)?.['katja'] === 25) {
      scene.text('Katja suddenly points to a tall brunette in a long dress walking by. "Look at her! She looks so pretty in that dress. I wish I had that," she says longingly. You\'re not sure if she means she wants the dress or if she admires the girl.');
      scene.text('You spend the next several minutes discussing the clothes and makeup of the girls passing by.');
      if (((s as any).university ?? 0)?.['semester_week'] > 0  &&  ((s as any).university ?? 0)?.['enrolled_in_semester'] > ((s as any).university ?? 0)?.['semester_passed']) {
        qspCall(s, 'uni_lessons', 'schedule');
      }
      if (((s as any).university ?? 0)?.['exam_week'] > 0  &&  ((s as any).university ?? 0)?.['enrolled_in_semester'] > ((s as any).university ?? 0)?.['semester_passed']) {
        qspCall(s, 'uni_lessons', 'exam_schedule');
      }
    } else {
      if (((s as any).locat ?? 0)?.['katja'] === 44) {
        scene.text('This is where Katja truly comes alive. She guides you from window to window, commenting on clothes, shoes, jewelry, makeup, and more. It\'s like trying to keep up with a whirlwind; you barely have time to notice what\'s in the store window before she rushes you to the next.');
        scene.text('This goes on for a while, but she eventually starts to slow down and pays attention to your thoughts on the things she comments on.');
        if (((s as any).katjaQW ?? 0)?.['QWstage'] >= 2  &&  ((s as any).katjaQW ?? 0)?.['shopping_day'] !== ((s as any).daystart ?? 0)) {
          scene.actions([
            { label: 'Suggest trying on some clothes', goto: ['katja_city', 'clothes_start1'] },
          ]);
        }
      }
    }
  }
  scene.actions([
    { label: 'Say goodbye and leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (((s as any).katjaQW ?? 0)?.['QWstage'] >= 2  &&  ((s as any).locat ?? 0)?.['katja'] === 44  &&  (Math.floor(Math.random() * 4) + 0) === 0  &&  ((s as any).katjaQW ?? 0)?.['shopping_day'] !== ((s as any).daystart ?? 0)) {
      scene.actions([{ label: 'Continue', goto: ['katja_city', 'clothes_start2'] }]);
    } else {
      scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc', 'loc_arg'); } }]);
    }
  } },
  ]);
  scene.build();
}

function enterFirstMeet(s: GameState, scene: SceneBuilder): void {
  ((s as any).katjaQW ?? {})['know_katja_uni'] = 1;
  if (((s as any).university ?? 0)?.['enrolled_in'] === 'teaching_studies') {
    ((s as any).katjaQW ?? {})['know_going_to_teaching_degree'] = 1;
  }
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  scene.text('"Are you studying at uni?" you ask.');
  // TODO-QSP: dynamic text: "Yes, I'm '+iif(year = 2017 and month < 9, 'going to study', 'studying')+' to be...
  scene.text('"Yes, I\'m \'+iif(year = 2017 and month < 9, \'going to study\', \'studying\')+\' to become a teacher," she says. "What about you. Are you also studying here?"');
  // TODO-QSP: dynamic text: "I'm'+iif( $university['enrolled_in'] = 'teaching_studies', ' also going to stud...
  scene.text('"I\'m\'+iif( $university[\'enrolled_in\'] = \'teaching_studies\', \' also going to study to become a teacher,\', \' \'+iif(university[\'student\'] = 1, \'in the \' + $func(\'uni_programs\', \'get_program_name\') + \' program\', \'not studying at the university,\')+\',\')+\'" you reply.');
  scene.actions([
    { label: 'Talk about something else', goto: ['katja_chat', 'chat1'] },
  ]);
  scene.build();
}

function enterSofia1(s: GameState, scene: SceneBuilder): void {
  ((s as any).sofiaQW ?? {})['QWstage'] = 1;
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  scene.text('"So, what do you think about my roommate?" Katja asks with a curious look on her face.');
  scene.text('"She seems nice," you answer. "But she sure does talk a lot."');
  scene.text('"She never shuts up! It\'s like she has nobody else to talk to except me!" Katja complains.');
  scene.text('"Is that true?" you ask.');
  scene.text('"Maybe. I don\'t think she\'s made any friends since she moved here, so she probably only has her boyfriend and me," Katja says. "If she just had something interesting to say, it might be a bit more bearable."');
  scene.text('"She never says anything interesting?" you ask.');
  scene.text('"Well, sometimes she talks about her classes, which isn\'t too boring, or she\'ll tell me about something she saw or experienced that day," Katja says. "But she mostly just tells me the same stories from her stupid hometown in the fucking middle of nowhere, or even worse, just fawns over her boyfriend." She looks at you and smiles slightly. "At least she knows you now, so maybe she\'ll start bothering you instead so I can get a little bit of peace."');
  scene.text('"Hopefully she can make some more friends soon," you laughingly.');
  scene.text('"I doubt it," Katja says. "She\'s constantly hanging out with her boyfriend, and I don\'t think he wants her to meet other girls. She also returns to her hometown on Thursday nights and stays until Sunday, so she doesn\'t have much time to meet anyone."');
  scene.text('"You\'re not too fond of her boyfriend?" you ask.');
  scene.text('"I don\'t know," she says. "There\'s something about him that feels a little bit off, but I shouldn\'t speak ill of people you don\'t even know, so let\'s wait until after you meet him."');
  scene.actions([
    { label: 'Talk about something else', goto: ['katja_chat', 'chat1'] },
  ]);
  scene.build();
}

function enterCoffeeHole(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A14', 'like', 1, 'coffee_hole1');
  if (((s as any).npc_rel ?? 0)?.['A14'] < 20) {
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('You approach Katja, who seems to be studying while drinking coffee and having brunch.');
    scene.text('"What are you doing here?" she says when she notices you. "Go bother somebody else!"');
    scene.text('You understand that staying won\'t achieve anything, so you leave her in peace.');
    scene.actions([
      { label: 'Leave', goto: ['city_coffee_hole', 'inner'] },
    ]);
  } else {
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    if (((s as any).katjaQW ?? 0)?.['know_going_to_teaching_degree'] === 0) {
      ((s as any).katjaQW ?? {})['know_going_to_teaching_degree'] = 1;
      scene.text('You approach Katja, who seems to be studying while drinking coffee and having brunch.');
      // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>," she waves when she notices you. "So you've also discove...
      scene.text(`"Hey ${((s as any).pcs_nickname ?? 0)}," she waves when she notices you. "So you've also discovered this breathing hole. Have a seat," she says and starts making space for you by removing her backpack from the chair and packing away some papers from the table.`);
      scene.text('"Are you studying at the university?" you ask.');
      // TODO-QSP: dynamic text: "Yes, I'm '+iif(year = 2017 and month < 10, 'going to study', 'studying')+' to b...
      scene.text('"Yes, I\'m \'+iif(year = 2017 and month < 10, \'going to study\', \'studying\')+\' to become a teacher," Katja says. "What about you?"');
      // TODO-QSP: dynamic text: "I'm '+iif( $university['enrolled_in'] = 'teaching_studies', ' also going to stu...
      scene.text('"I\'m \'+iif( $university[\'enrolled_in\'] = \'teaching_studies\', \' also going to study to become a teacher,\', \' \' + iif(university[\'student\'] = 1, \'in the \' + $func(\'uni_programs\', \'get_program_name\') + \' program\', \'not studying at the university\') + \',\') + \'" you reply.');
      // TODO-QSP: dynamic text: "That's cool'+iif( $university['enrolled_in'] = 'teaching_studies', ' that we ar...
      scene.text('"That\'s cool\'+iif( $university[\'enrolled_in\'] = \'teaching_studies\', \' that we are going to study together,\', \',\')+\'" Katja says.');
      scene.actions([
        { label: 'Sit down', goto: ['katja_chat', 'brunch'] },
        { label: 'Say goodbye and leave', goto: ['city_coffee_hole', 'inner'] },
      ]);
    } else {
      scene.text('You approach Katja, who seems to be studying while drinking coffee and having brunch.');
      // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>," she waves when she notices you. "Have a seat," she says...
      scene.text(`"Hey ${((s as any).pcs_nickname ?? 0)}," she waves when she notices you. "Have a seat," she says and starts making space for you by removing her backpack from the chair and packing away some papers from the table.`);
      scene.actions([
        { label: 'Sit down', goto: ['katja_chat', 'brunch'] },
        { label: 'Say goodbye and leave', goto: ['city_coffee_hole', 'inner'] },
      ]);
    }
  }
  scene.build();
}

function enterBrunch(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/Coffe_hole2.jpg');
  qspCall(s, 'npc_relationship', 'modify', 'A14', 'like', 3, 'coffee_hole2');
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  if (((s as any).katjaQW ?? 0)?.['QWstage'] >= 2  &&  ((s as any).pcs_makeup ?? 0) < 2) {
    qspCall(s, 'katja_procedural', 'makeup', 'katja_chat', 'brunch');
  }
  // TODO-QSP: dynamic text: You sit down and start chatting with Katja.'+iif(npc_rel['A14'] < 40 and katjaQW...
  scene.text('You sit down and start chatting with Katja.\'+iif(npc_rel[\'A14\'] < 40 and katjaQW[\'QWstage\'] = 0, \' Your talk is a little awkward since you don\'t know each other that well, but it\'s a nice conversation anyway\', \' You have so much fun talking that Katja seems to forget that she was studying\')+\'.');
  qspCall(s, 'anushka_konstantinov_schedule', '');
  if (((s as any).anushkaQW ?? 0)?.['coffee_hole'] === 1  &&  ((s as any).locat ?? 0)?.['A144'] === 9) {
    if (((s as any).npc_rel ?? 0)?.['A144'] >= 60) {
      scene.text('After a while, Anushka comes over and gives you a friendly smile. "Welcome to the Coffee Hole. Need your hole filled with something hot and black again? We also have <i>freshly glazed</i> pastries if that\'s more your thing," she says with a wink, even making ordering coffee sound dirty.');
      scene.text('You smile at her. "You are so bad."');
      scene.text('She shrugs. "And you love it. It\'s why you love hanging out with me." She turns her full attention to Katja and gives her an innocent smile while you start looking at the menu on the wall to see if you want to order something.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A144'] <= 20) {
        scene.text('After a while, Anushka comes over and gives Katja a friendly smile while ignoring you completely. "Welcome to the Coffee Hole. Need your hole filled with something hot and black? Or would you prefer a <i>freshly glazed</i> pastry?" she says with a wink, even making ordering coffee sound dirty.');
        scene.text('You smile at her. "So, do you like the job?"');
        scene.text('She glances at you and audibly sighs while rolling her eyes. She doesn\'t return your smile. "It\'s a job. Do you want something or not? I\'ve got work to do and can\'t stand around chatting." You sigh. It seems she still doesn\'t like you. You look up at the menu on the wall to see if you might want to order something.');
      } else {
        scene.text('After a while, Anushka comes over and gives you a friendly smile. "Welcome to the Coffee Hole. What can I get you guys? Maybe something big, hot and black? Or maybe you girls are more interested in something with a glaze?" she says with a wink.');
        scene.text('You smile at her. "You are so bad."');
        scene.text('She gives you an amused scoff to go along with her smirk. "So what will it be?" She turns her full attention to Katja and gives her an innocent smile while you start looking at the menu on the wall to see if you want to order something.');
      }
    }
    if (((s as any).katjaQW ?? 0)?.['slut'] >= 100) {
      scene.text('"Only if the coffee is <i>very</i> big and <i>very</i> black," Katja replies, immediately turning red in the face and giggling.');
    } else {
      if (((s as any).katjaQW ?? 0)?.['slut'] >= 75) {
        scene.text('"Just the usual please," Katja replies, trying to ignore Anushka\'s innuendo, but getting very red in the face.');
      } else {
        if (((s as any).katjaQW ?? 0)?.['slut'] >= 50) {
          scene.text('Katja blushes at Anushka\'s comments before ordering a cup of coffee.');
        } else {
          scene.text('"Well, I would like a…" Katja starts to reply, only to stop and turn completely red in the face when she finally gets the innuendo.');
          scene.text('Anushka turns and half sits on the table next to her before leaning forward and crowding Katja ever so slightly. "You would like a…" She pauses dramatically before continuing. "Let me guess, the usual. One… hot… black… coffee coming up. I know you like getting the cream yourself," She adds with a wink before getting up to get the order. It didn\'t seem possible, but after that last comment Katja manages to turn even more red.');
        }
      }
    }
  } else {
    scene.text('After a while, a heavily tattooed waitress with short blond hair shaved on one side comes over to your table. "Welcome to the Coffee Hole, what can I get you?" she asks in a bored and monotone voice.');
  }
  scene.actions([
    { label: 'Order from the menu (0:05)', handler: (st: GameState) => {
    // TODO-QSP: katjaQW['brunch_bought'] = 1
    // TODO-QSP: gs 'food_menu'
  } },
    { label: 'Say you don\'t need anything', goto: ['katja_chat', 'coffee_hole_event'] },
  ]);
  scene.build();
}

function enterCoffeeHoleEvent(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  if (((s as any).anushkaQW ?? 0)?.['coffee_hole'] === 1  &&  ((s as any).locat ?? 0)?.['A144'] === 9  &&  ((s as any).katjaQW ?? 0)?.['brunch_bought'] === 1  &&  ((s as any).katjaQW ?? 0)?.['nush_coffee_hole_talk_day'] !== ((s as any).daystart ?? 0)) {
    ((s as any).katjaQW ?? {})['brunch_bought'] = 0;
    ((s as any).katjaQW ?? {})['nush_coffee_hole_talk_day'] = ((s as any).daystart ?? 0);
    scene.text('You and Katja spend a few minutes chatting about school, what you\'ve both been up to and gossiping about your old schoolmates while waiting for Anushka to return with the order. Minutes later, Anushka comes back with a tray carrying the order.');
    if (((s as any).npc_rel ?? 0)?.['A144'] >= 60) {
      scene.text('She sets the tray on a nearby empty table before sitting down next to you. "What\'s up, bitches?"');
      scene.text('You shake your head at her. "Just hanging out, talking about stuff and catching up on the past."');
      scene.text('Before anyone else can say something, a young man a few tables over turns to look in your direction. "Uh, excuse me miss, can I get…"');
      scene.text('Before he can finish, Anushka abruptly turns and interrupts him. "Oh my god, do you mind?! I\'m having a conversation with my friends here. Do you think I only exist to wait on you? Don\'t I deserve a short break now and then?" Her exaggerated tone and body language amplify her frustration.');
      scene.text('She just stares at him from that point on, and you can tell he\'s getting flustered and nervous about what to say or do. "No… I mean… Yes, you\'re entitled to that. I didn\'t mean to imply… I mean… You know what, I can wait. It\'s okay." He quickly turns back around, and Anushka glances at the two of you with an amused look on her face, obviously fighting hard not to start giggling.');
      scene.text('Katja looks shocked by Anushka\'s behavior. "You can\'t treat customers like that!" she says while looking at you for confirmation.');
      scene.actions([
        { label: 'Agree with Katja', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'like');
    qspCall(s, 'npc_relationship', 'modify', 'A144', 'dislike');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('You nod in agreement with Katja. "Yeah Nush, you really shouldn\'t treat customers like that. What if they complain or your boss see it?"');
    scene.text('Anushka rolls her eyes. "Lighten up, you two! As long as the customer leaves happy, that\'s all that matters. And they all leave happy…" she says with a smirk.');
    scene.actions([
      { label: 'Continue', goto: ['katja_chat', 'coffee_hole_katja_nush_sveta'] },
    ]);
  } },
        { label: 'Disgree with Katja', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A144', 'like');
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('You smile in amusement while looking at Katja. "She\'s just having a little fun, no harm."');
    scene.text('"How would you feel if it was you who was just ignored?" Katja asks, clearly not sharing you and Anushka\'s attitude towards this, so you let it slide. Anushka just rolls her eyes at Katja\'s comment.');
    scene.actions([
      { label: 'Continue', goto: ['katja_chat', 'coffee_hole_katja_nush_sveta'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).npc_rel ?? 0)?.['A144'] <= 20) {
        scene.text('She pretty much just ignores you and winks at Katja once she\'s finished. "Later Red," she says before moving on to her next customer, stopping at a table with a young man sitting at it. "What can I get for you?" she asks.');
        scene.text('He looks up at her and smiles. "I would like a tea, please."');
        scene.text('Anushka just keeps staring at him like she\'s expecting him to keep talking. His smile falters a bit as he looks around, obviously not sure what\'s happening. "And… a… Danish?" he asks in a slightly confused voice.');
        scene.text('Anushka smiles brightly. "One tea and two danishes coming right up."');
        scene.text('She turns and walks away, causing him to raise his hand. "I only… wanted… one… danish…" His voice drifts off as she just keeps walking like she never heard him.');
        scene.text('Once Anushka is gone, Katja leans over. "Seems like Anushka doesn\'t like you. Bad grudge from school??" You answer Katja who shows sympathy and hopes your relationship with Anushka will improve.');
        scene.actions([
          { label: 'Go back to talking with Katja', goto: ['katja_chat', 'coffee_hole_hangout'] },
        ]);
      } else {
        scene.text('She sets the tray on a nearby empty table and sits down next to Katja. "What\'s up, girls?"');
        scene.text('You shake your head at her slightly. "Just hanging out, talking about stuff and catching up on the past."');
        scene.text('Before anyone else can say something a young man a few tables over turns to look in your direction. "Uh, excuse me miss, can I get…"');
        scene.text('Before he can finish, Anushka abruptly turns and interrupts him. "Oh my god, do you mind?! I\'m having a conversation with my friends here. Do you think I only exist to wait on you? Don\'t I deserve a short break now and then?" Her exaggerated tone and body language amplify her frustration.');
        scene.text('She just stares at him from that point on, and you can tell he\'s getting flustered and nervous about what to say or do. "No… I mean… Yes, you\'re entitled to that. I didn\'t mean to imply… I mean… You know what, I can wait, it\'s okay." He quickly turns back around and Anushka glances at the two of you with an amused look on her face, obviously fighting hard to not start giggling.');
        scene.text('Katja looks shocked by Anushka\'s behavior "You can\'t treat customers like that!" she says while looking at you for confirmation.');
        scene.actions([
          { label: 'Agree with Katja', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'like');
    qspCall(s, 'npc_relationship', 'modify', 'A144', 'dislike');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('You nod in agreement with Katja. "Yeah Nush, you really shouldn\'t treat customers like that. What if they complain or your boss see it?"');
    scene.text('Anushka rolls her eyes. "Lighten up, you two! As long as the customer leaves happy, that\'s all that matters. And they all leave happy…" she says with a smirk.');
    scene.actions([
      { label: 'Continue', goto: ['katja_chat', 'coffee_hole_katja_nush_sveta'] },
    ]);
  } },
          { label: 'Disgree with Katja', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A144', 'like');
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('You smile in amusement while looking at Katja. "She\'s just having a little fun, no harm."');
    scene.text('"How would you feel if it was you who was just ignored?" Katja asks, clearly not sharing you and Anushka\'s attitude towards this, so you let it slide. Anushka just rolls her eyes at Katja\'s comment.');
    scene.actions([
      { label: 'Continue', goto: ['katja_chat', 'coffee_hole_katja_nush_sveta'] },
    ]);
  } },
        ]);
      }
    }
  } else {
    ((s as any).katjaQW ?? {})['brunch_bought'] = 0;
    if (((s as any).katjaQW ?? 0)?.['first_time_in_nightclub'] > 0  &&  ((s as any).npc_had_sex ?? 0)?.['A14'] === 0) {
      scene.actions([{ label: 'Continue', goto: ['katja_chat', 'nightclub_sex_follow_up'] }]);
    }
    ((s as any).katjaQW ?? {})['coffee_hole_rand'] = Math.floor(Math.random() * 21) + 0;
    if (((s as any).katjaQW ?? 0)?.['coffee_hole_rand'] === 1  &&  ((s as any).npc_rel ?? 0)?.['A16'] > 30  &&  ((s as any).npc_rel ?? 0)?.['A240'] > 30) {
      scene.img('images/characters/pavlovsk/school/girl/katja/uni/Coffe_hole1.jpg');
      scene.text('While you are chatting with Katja she suddenly smiles and points to the door so you turn to have a look. You notice that both Natasha and Natalia are just entering.');
      scene.text('As the pair of you are still focused on the door you see Natalia poke Natashsa in the arm and point towards your table. They both look over and give you a friendly wave.');
      scene.text('After a brief exchange of words, they head over to your table. "Hi girls, fancy seeing you here." Natasha says with a smile.');
      scene.text('Katja responds. "Well we thought we\'d come for a coffee before deciding on what to do with the rest of our day."');
      scene.text('Natasha chimes in. "Pretty much the same here, I fancy aome window shopping but Natalia wants to see a film and we can\'t decide so went for a coffee to have a chat and make up our minds."');
      scene.text('You join the conversation. "Well the cinema is in the mall so maybe you could do both then you\'ll both get to do what you want?"');
      scene.text('This brings a smile to Natalia\'s face. "Yes I\'d love to see that film and it\'s a cultural one so not likely to be on too long. Normally Natasha is happy to go with the flow except when it comes to clothes or makeup. Mention either of those and all other ideas are forgotten!"');
      // TODO-QSP: If NatbelQW['FriendLover'] < 3:
      scene.text('This causes you to have a little giggle. "Yes I know that all too well with this one." You say indicating Katja who responds with a playful pout and sticks her tongue out at you. This leads to all four of you having a small laugh.');
    } else {
      scene.text('This causes you to have a little giggle. "Well that\'s two of them Natalia!" You say indicating Katja. "Maybe we should let these two go shopping and we\'ll go and see the film?!" Katja responds with a playful pout and sticks her tongue out at you. This leads to all four of you having a small laugh.');
    }
    scene.text('Natalia looks at Natasha indicating that they should move on. "Come on you, let\'s get our coffee and leave these two to it before we end up causing an argument."');
    scene.text('After an exchange of goodbyes they find their table and order their drinks while you and Katja get back to your conversation.');
    scene.actions([
      { label: 'Continue to drink you coffee', goto: ['katja_chat', 'coffee_hole_hangout'] },
    ]);
  }
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/Coffe_hole2.jpg');
  scene.text('Katja begins telling you about the last dorm party she attended. "You know that last dorm party was pretty good, until the usual bad boys started to ruin it," she says. "There was this girl, a freshman I think, clearly not used to these parties or drinking as much as the boys do. Quite cute too," she continues. "It seems that the bad crowd targeted her, and started pushing her to drink."');
  scene.text('"I didn\'t really pay attention, I was mostly chatting with Vicky and Vanya, but I did notice her being very drunk at some point." She takes a dramatic pause. "BAM! Suddenly a door to one of the room slammed open, and one of the biggest jerks on campus burst out with vomit all over his bare chest."');
  scene.text('"He was shouting something about a \'fucking bitch\', while he rushed to the bathroom," she says. "So I went into the room, and there was the girl, half undressed and completely drunk, barely conscience and it was clear that she had puked all over him."');
  if (((s as any).katjaQW ?? 0)?.['coffee_hole_rand'] === 3  &&  ((s as any).npc_rel ?? 0)?.['A152'] >= 30) {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/cosplay_feofan_garalt6.jpg');
    scene.text('A guy you don\'t recognize at first comes into the Coffee Hole. He\'s dressed like a character from a medieval movie, wearing a white shirt and tight leather pants. His hair is long and white, though he clearly isn\'t old. Most prominently, he appears to have two long swords sheathed on his back.');
    scene.text('He looks around and when he sees you and Katja, he smiles and walks up to you. You look over at Katja, who doesn\'t seem to recognize him either. When he reaches your table, you realize that it is Feofan. He\'s grown a fair bit of stubble and dyed his hair.');
    scene.text('"Greetings, m\'ladies, you smell wonderful at this funeral."');
    if (((s as any).clothingworntype ?? 0) === 'nerdvana_cosplay'  &&  ((s as any).clothingwornnumber ?? 0) === 149) {
      scene.text('"What are you doing, Feofan?" Katja asks.');
      scene.text('"I\'m testing out my next cosplay. What do you think?" he replies.');
      scene.text('"I don\'t know, for what?" Katja asks.');
      // TODO-QSP: dynamic text: "For the next con. You two should totally come. You would make a perfect Triss M...
      scene.text(`"For the next con. You two should totally come. You would make a perfect Triss Marigold, Katja," he says. "I can help you with that. See, ${((s as any).pcs_nickname ?? 0)} is ready to go as Yennefer."`);
      scene.text('"What! Who?!" Katja says, looking completely confused.');
      scene.text('"From The Witcher. You know, the best video game series ever. Have you been living under a rock?" Feofan says, looking at Katja with mild astonishment.');
      scene.text('But before he can explain further, a voice behind him calls out. "Geralt, my friend!"');
      scene.text('Feofan turns around. "Dandelion!" he says to a boy you don\'t know, also dressed up. They start talking and Feofan completely forgets about you and Katja.');
      scene.text('You explain to Katja what was going on, making sure that she does not feel like she was supposed to know anything about the game as you continue drinking your coffee.');
      scene.actions([
        { label: 'Continue to drink your coffee', goto: ['katja_chat', 'coffee_hole_hangout'] },
      ]);
    } else {
      if (((s as any).clothingworntype ?? 0) === 'nerdvana_cosplay'  &&  ((s as any).clothingwornnumber ?? 0) === 150) {
        scene.text('"What are you doing, Feofan?" Katja asks.');
        scene.text('"I\'m testing out my next cosplay. What do you think?" he replies.');
        scene.text('"I don\'t know, for what?" Katja asks.');
        // TODO-QSP: dynamic text: "For the next con. You two should totally come. You would make a perfect Triss M...
        scene.text(`"For the next con. You two should totally come. You would make a perfect Triss Marigold, Katja," he says. "I can help you with that. See, ${((s as any).pcs_nickname ?? 0)} is ready to go as Ciri."`);
        scene.text('"What! Who?!" Katja says, looking completely confused.');
        scene.text('"From The Witcher. You know, the best video game series ever. Have you been living under a rock?" Feofan says, looking at Katja with mild astonishment.');
        scene.text('But before he can explain further, a voice behind him calls out. "Geralt, my friend!"');
        scene.text('Feofan turns around. "Dandelion!" he says to a boy you don\'t know, also dressed up. They start talking and Feofan completely forgets about you and Katja.');
        scene.text('You explain to Katja what was going on, making sure that she does not feel like she was supposed to know anything about the game as you continue drinking your coffee.');
        scene.actions([
          { label: 'Continue to drink your coffee', goto: ['katja_chat', 'coffee_hole_hangout'] },
        ]);
      } else {
        scene.text('"What are you doing, Feofan?" Katja asks.');
        scene.text('"I\'m testing out my next cosplay. What do you think?" he replies.');
        scene.text('"I don\'t know, for what?" Katja asks.');
        // TODO-QSP: dynamic text: "For the next con. You two should totally come. You would make a perfect Triss M...
        scene.text(`"For the next con. You two should totally come. You would make a perfect Triss Marigold, Katja," he says. "I can help you with that' + iif(pcs_hotcat > 4, '. You could be Yennefer, ${((s as any).pcs_nickname ?? 0)}.', '.')+'"`);
        scene.text('"What! Who?!" Katja says, looking completely confused.');
        if (((s as any).pcs_hotcat ?? 0) > 4) {
          scene.actions([
            { label: 'Cosplaying as Yennefer is cool', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A152', 'love');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/cosplay_feofan_garalt6.jpg');
    // TODO-QSP: dynamic text: "Yennefer is cool, I '+iif(nerdvana_cosplay[149] = 1 , 'actually already have a ...
    scene.text('"Yennefer is cool, I \'+iif(nerdvana_cosplay[149] = 1 , \'actually already have a cosplay outfit.\', \' but I would need to get a costume.\')+\' It would be fun dressings up as her."');
    scene.text('Feofan eyes light up. "Great, then we just need to get Katja into a Triss costume!"');
    scene.text('"What are you two talking about?" Katja says in a tone that makes it clear she does not like being out of the loop.');
    scene.text('"From The Witcher. You know, the best video game series ever. Have you been living under a rock?" Feofan says, looking at Katja with mild astonishment.');
    scene.text('But before he can explain further, a voice behind him calls out. "Geralt, my friend!"');
    scene.text('Feofan turns around. "Dandelion!" he says to a boy you don\'t know, also dressed up. They start talking and Feofan completely forgets about you and Katja.');
    scene.text('You explain to Katja what was going on, making sure that she does not feel like she was supposed to know anything about the game as you continue drinking your coffee.');
    scene.actions([
      { label: 'Continue to drink your coffee', goto: ['katja_chat', 'coffee_hole_hangout'] },
    ]);
  } },
            { label: 'I would rather be Ciri', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'dislike');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/cosplay_feofan_garalt6.jpg');
    // TODO-QSP: dynamic text: "I think that Ciri is cooler, I '+iif(nerdvana_cosplay[150] = 1 , 'actually alre...
    scene.text('"I think that Ciri is cooler, I \'+iif(nerdvana_cosplay[150] = 1 , \'actually already own a Ciri cosplay outfit.\', \' but I don\'t have a costume.\')+\' It would be more fun dressing up as her."');
    scene.text('Feofan eyes light up when you show your knowledge about the characters, but you can\'t help feel he is a little disappointed by your choice. "Cool, cool, then we just need to get Katja into a Triss costume!"');
    scene.text('"What are you two talking about?" Katja says in a tone that makes it clear she does not like being out of the loop.');
    scene.text('"From The Witcher. You know, the best video game series ever. Have you been living under a rock?" Feofan says, looking at Katja with mild astonishment.');
    scene.text('But before he can explain further, a voice behind him calls out. "Geralt, my friend!"');
    scene.text('Feofan turns around. "Dandelion!" he says to a boy you don\'t know, also dressed up. They start talking and Feofan completely forgets about you and Katja.');
    scene.text('You explain to Katja what was going on, making sure that she does not feel like she was supposed to know anything about the game as you continue drinking your coffee.');
    scene.actions([
      { label: 'Continue to drink your coffee', goto: ['katja_chat', 'coffee_hole_hangout'] },
    ]);
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Suggest you cosplay as Yennefer', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A152', 'like');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/cosplay_feofan_garalt6.jpg');
    // TODO-QSP: dynamic text: "I could dress up as Yennefer.'+iif(nerdvana_cosplay[149] = 1 , ' I actually alr...
    scene.text('"I could dress up as Yennefer.\'+iif(nerdvana_cosplay[149] = 1 , \' I actually already have her cosplay outfit.\', \' but I would need to get a costume.\')+\' It would be fun dressing up as her."');
    scene.text('Feofan eyes light up when you show your knowledge about the characters. "Great, then we just need to get Katja into a Triss costume!"');
    scene.text('"What are you two talking about?" Katja says in a tone that makes it clear she does not like being out of the loop.');
    scene.text('"From The Witcher. You know, the best video game series ever. Have you been living under a rock?" Feofan says, looking at Katja with mild astonishment.');
    scene.text('But before he can explain further, a voice behind him calls out. "Geralt, my friend!"');
    scene.text('Feofan turns around. "Dandelion!" he says to a boy you don\'t know, also dressed up. They start talking and Feofan completely forgets about you and Katja.');
    scene.text('You explain to Katja what was going on, making sure that she does not feel like she was supposed to know anything about the game as you continue drinking your coffee.');
    scene.actions([
      { label: 'Continue to drink your coffee', goto: ['katja_chat', 'coffee_hole_hangout'] },
    ]);
  } },
            { label: 'Suggest you cosplay as Ciri', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A152', 'like');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/cosplay_feofan_garalt6.jpg');
    // TODO-QSP: dynamic text: "I could dress up as Ciri,'+iif(nerdvana_cosplay[150] = 1 , ' I actually already...
    scene.text('"I could dress up as Ciri,\'+iif(nerdvana_cosplay[150] = 1 , \' I actually already have her cosplay outfit.\', \' but I would need to get a costume.\')+\' It would be more fun dressings up as her."');
    scene.text('Feofan eyes light up when you show your knowledge about the characters. "Great, then we just need to get Katja into a Triss costume!"');
    scene.text('"What are you two talking about?" Katja says in a tone that makes it clear she does not like being out of the loop.');
    scene.text('"From The Witcher. You know, the best video game series ever. Have you been living under a rock?" Feofan says, looking at Katja with mild astonishment.');
    scene.text('But before he can explain further, a voice behind him calls out. "Geralt, my friend!"');
    scene.text('Feofan turns around. "Dandelion!" he says to a boy you don\'t know, also dressed up. They start talking and Feofan completely forgets about you and Katja.');
    scene.text('You explain to Katja what was going on, making sure that she does not feel like she was supposed to know anything about the game as you continue drinking your coffee.');
    scene.actions([
      { label: 'Continue to drink your coffee', goto: ['katja_chat', 'coffee_hole_hangout'] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Look as confused as Katja', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'like');
    qspCall(s, 'npc_relationship', 'modify', 'A152', 'dislike');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/cosplay_feofan_garalt6.jpg');
    scene.text('"What are you talking about, Feofan?" you ask.');
    // TODO-QSP: dynamic text: "You know, Triss' + iif(pcs_hotcat > 4, ' and Yennefer ', ' ') + 'from the Witch...
    scene.text('"You know, Triss\' + iif(pcs_hotcat > 4, \' and Yennefer \', \' \') + \'from the Witcher." Feofan tries to explain.');
    scene.text('"The what?" Katja asks, looking no wiser.');
    // TODO-QSP: dynamic text: "The Witcher, the video game series. Help me out, <<$pcs_nickname>>! You know it...
    scene.text(`"The Witcher, the video game series. Help me out, ${((s as any).pcs_nickname ?? 0)}! You know it, don't you?" he asks.`);
    scene.text('"No, I don\'t," you answer.');
    // TODO-QSP: dynamic text: "I don't believe it. '+iif(grupTipe = 3 or nerd_game['stage'] > 0, 'You disappoi...
    scene.text(`"I don't believe it. '+iif(grupTipe = 3 or nerd_game['stage'] > 0, 'You disappoint me, ${((s as any).pcs_nickname ?? 0)}. I thought you were one of us.', 'How can you not know, do you people not notice what's happening around you?')+'" he says in an exasperated voice.`);
    scene.text('But before he can explain further, a voice behind him calls out. "Geralt, my friend!"');
    scene.text('Feofan turns around. "Dandelion!" he says to a boy you don\'t know, also dressed up. They start talking and Feofan completely forgets about you and Katja.');
    scene.actions([
      { label: 'Continue to drink your coffee', goto: ['katja_chat', 'coffee_hole_hangout'] },
    ]);
  } },
          { label: 'Explain to Katja but tell him you don\'t like to cosplay', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A152', 'dislike');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/cosplay_feofan_garalt6.jpg');
    scene.text('"He is talking about characters from a video game," you tell Katja.');
    // TODO-QSP: dynamic text: "I knew I could count on you, <<$pcs_nickname>>. So help me convince Katja so we...
    scene.text(`"I knew I could count on you, ${((s as any).pcs_nickname ?? 0)}. So help me convince Katja so we can be the most epic cosplaying team!" Feofan says enthusiastically.`);
    scene.text('"No, thanks. I\'m not really into that," you tell him, making him look completely devastated.');
    scene.text('"But… But you would be so great," he says.');
    scene.text('"Maybe, but it\'s not for me," you shrug.');
    scene.text('He stands there with his mouth open looking in disbelief, but before he says anything else, a voice behind him calls out. "Geralt, my friend!"');
    scene.text('Feofan turns around. "Dandelion!" he says to a boy you don\'t know, also dressed up. They start talking and Feofan completely forgets about you and Katja.');
    scene.actions([
      { label: 'Continue to drink your coffee', goto: ['katja_chat', 'coffee_hole_hangout'] },
    ]);
  } },
        ]);
      }
    }
  } else {
    if (((s as any).katjaQW ?? 0)?.['coffee_hole_rand'] === 4) {
      scene.img('images/characters/pavlovsk/school/girl/katja/uni/Coffe_hole2.jpg');
      if (((s as any).katjaQW ?? 0)?.['know_dandd'] === 0) {
        scene.text('"Have you heard that the nerds from our high school meet here every week?" Katja asks. But before you can answer, she continues, "They are playing some kind of game, dragons and elves or something like that. Julia tried to explain it to me, but I didn\'t really get what it was about."');
        scene.text('"Apparently, they used to play at the library in Pavlovsk, but it seems like they have gotten braver and don\'t think they need to hide themselves anymore. Which is really good, just because they\'re doing something we don\'t understand, doesn\'t mean that they should be ashamed about it. Luckily, the days, when the stupid jocks or girls like Stasya would try to act important by bullying others for doing things they don\'t understand, are over."');
        if (((s as any).nerd_game ?? 0)?.['stage'] > 0) {
          scene.actions([
            { label: 'Tell Katja that you play with them', handler: (st: GameState) => {
    ((s as any).katjaQW ?? {})['know_dandd'] = 1;
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/Coffe_hole2.jpg');
    scene.text('"It\'s called \'Dungeons and Dragons\' the game we play" you tell Katja, who looks at you a little surprised. "I\'m part of their group, it\'s a lot of fun," you says.');
    scene.text('"I didn\'t know that. How does it work, Julia told me you are taking on roles like in a fantasy movie. Do you dress up? How is that even a game?" Katja asks, and you spend time trying to explain how the game works.');
    scene.actions([
      { label: 'Continue to drink your coffee', goto: ['katja_chat', 'coffee_hole_hangout'] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Continue to drink your coffee', goto: ['katja_chat', 'coffee_hole_hangout'] },
        ]);
      } else {
        scene.text('"Did you play with the others this week?" Katja asks, refereeing your game night with the other nerds.');
        scene.actions([
          { label: 'Yes', handler: (st: GameState) => {
    scene.text('"Yes, we played the other day," you answer.');
    scene.text('"How was it? Did you slay any dragons? Save any princesses?" she asks, and you spend some time talking about what happened. Though you\'re not really sure if Katja is just humoring you to be polite or she\'s actually interested.');
    scene.actions([
      { label: 'Continue to drink your coffee', goto: ['katja_chat', 'coffee_hole_hangout'] },
    ]);
  } },
          { label: 'No', handler: (st: GameState) => {
    scene.text('"No, I didn\'t have time this week," you tell her.');
    scene.text('"Why not, what kept you busy?" she ask, and you explain what you were doing.');
    scene.actions([
      { label: 'Continue to drink your coffee', goto: ['katja_chat', 'coffee_hole_hangout'] },
    ]);
  } },
        ]);
      }
    } else {
      if (((s as any).katjaQW ?? 0)?.['coffee_hole_rand'] === 5) {
        scene.img('images/characters/pavlovsk/school/girl/katja/uni/Coffe_hole2.jpg');
        if (((s as any).university ?? 0)?.['enrolled_in'] === 'teaching_studies') {
          scene.text('"I thought the class that Professor Kovalyov gave the other day was really good," Katja says. "He really underscored the the point, and the example he used really clarified the theory. I\'m glad we have professors like him."');
          scene.text('You spend time discussing Klim\'s lectures, sharing which parts you find good.');
        } else {
          scene.text('"My classes this week have been really interesting," Katja says. "I have this one professor, Klim Kovalyov. He is really good at finding examples that clarify the theory. I\'m glad that I have a professor like him."');
          scene.text('Katja explains what she learned to you.');
        }
        scene.actions([
          { label: 'Continue to drink your coffee', goto: ['katja_chat', 'coffee_hole_hangout'] },
        ]);
      } else {
        if (((s as any).katjaQW ?? 0)?.['coffee_hole_rand'] === 6) {
          scene.img('images/characters/pavlovsk/school/girl/katja/uni/Coffe_hole2.jpg');
          if (((s as any).university ?? 0)?.['enrolled_in'] === 'teaching_studies') {
            scene.text('"I hate to say it but the lecture Professor Kovalchuk gave the other day was very boring," Katja says. "It\'s not that it was difficult, and the subject is interesting, but the way she lectures just makes you want to sleep."');
            scene.text('You spend time discussing Selena\'s lectures, coming up with a lot of ways she cloud improve her lectures, but probably wont.');
          } else {
            scene.text('"I had an extremely boring lecture this week. It was so dull that I had to start reading the book during class to not fall asleep," Katja says. "I have this one professor, Selena Kovalchuk, who has no idea how to have an engaging class. It\'s a real pity since the subject she teaches is actually interesting."');
            scene.text('Katja explains all the things she thinks the professor does wrong, and how she could improve.');
          }
          scene.actions([
            { label: 'Continue to drink your coffee', goto: ['katja_chat', 'coffee_hole_hangout'] },
          ]);
        } else {
          if (((s as any).katjaQW ?? 0)?.['coffee_hole_rand'] === 7) {
            scene.img('images/characters/pavlovsk/school/girl/katja/uni/Coffe_hole2.jpg');
            scene.text('"Do you think I\'m getting fat?" Katja suddenly asks.');
            scene.text('"No, of course not. You are still gorgeous," you quickly say.');
            scene.text('"Thanks," Katja replies with a big smile.');
            scene.text('"It\'s just that when we were at school, we would had gym class three times a week, and now I do nothing," she says.');
            scene.text('"Then why don\'t you start on some sport?" you ask her.');
            scene.text('"I don\'t know. There aren\'t really any sports that interest me that much," she continues. "I might start running. I saw an announcement of cheap yoga classes for students. That might be something as well."');
            scene.actions([
              { label: 'Continue to drink your coffee', goto: ['katja_chat', 'coffee_hole_hangout'] },
            ]);
          } else {
            scene.actions([{ label: 'Continue', goto: ['katja_chat', 'coffee_hole_hangout'] }]);
          }
        }
      }
    }
  }
  scene.actions([
    { label: 'Katja continues her story', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/Coffe_hole2.jpg');
    scene.text('"So I started to help her, got Vanya to find something to clean her with, while trying to get her to tell me which room was hers. It was clear that the jerk had gotten her so drunk she couldn\'t resist and thought that he could have his way with her. But she puked before he had gotten much further than just getting some of her clothes off."');
    scene.text('"Before I was ready to take her home, the jerk come back." Katja raises her voice and almost shouts, "\'Where is the bitch?! She owes me,\' he bellowed while making his way to the room, and I was sort of getting nervous that he might come in and start getting physical."');
    scene.text('"But Vicky just stood in the doorway and said, \'You aren\'t coming in here! You\'ve already done enough!" Katja says in a rather dramatic impersonation of her sister. "\'I\'m going fuck you bitches,\' he shouted in her face. And she just calmly told him, \'Take your small dick somewhere else, nobody here wants it!\'"');
    scene.text('"He looked like he was going to explode, but Vanya was now standing behind Vicky, which is probably why he didn\'t hit her." Katja pauses to catch her breath. "Vicky\'s last comment had been heard in the main room, and when he didn\'t come up with a quick rebuttal, everyone started to laugh at him, which clearly hurt his massive ego, and he hurried away."');
    scene.text('"I got the girl back to her room, and stayed with her until I was sure she would be okay." Katja finishes her story. "If Vicky had\'t been a hero, we would probably have been beat up or worse. Come to think about it, if the girl hadn\'t vomited then the guy would\'ve probably raped her. Guys are so terrible. I sometimes wish there weren\'t any boys, just girls."');
    scene.actions([
      { label: 'Continue to drink your coffee', goto: ['katja_chat', 'coffee_hole_hangout'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'uni_cafe':
      enterUniCafe(s, scene);
      break;
    case 'chat':
      enterChat(s, scene);
      break;
    case 'chat1':
      enterChat1(s, scene);
      break;
    case 'first_meet':
      enterFirstMeet(s, scene);
      break;
    case 'sofia1':
      enterSofia1(s, scene);
      break;
    case 'coffee_hole':
      enterCoffeeHole(s, scene);
      break;
    case 'brunch':
      enterBrunch(s, scene);
      break;
    case 'coffee_hole_event':
      enterCoffeeHoleEvent(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const katja_chat: LocationDef = {
  name: 'katja_chat',
  title: 'You approach Katja while she\'s talking on the phone. She fin',
  region: 'other',
  description: ['You approach Katja while she\'s talking on the phone. She finishes her call just before you reach her.'],
  enter: enter,
};
