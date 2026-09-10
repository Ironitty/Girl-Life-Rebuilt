import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'grades', 'attend_class', 'school', 'lit');
  qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 2) + 0, 'no_bonus');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/classroom/literature/classlit.jpg');
  scene.text('"I want everyone quiet and in a seat!" Ms. Braakman demands as she finishes writing today\'s lesson plan on the chalkboard. The room lets out a collective groan as they see the mountain of work they have to do today.');
  scene.text('"She\'s always piling on the work and expects everyone to have it finished by the end of class!" you overhear a girl complain with a heavy sigh.');
  scene.text('Clearing her throat, Ms. Braakman raises her voice to speak over the noise. "The sooner everyone takes out their textbooks, the quicker we can get started. Who knows, maybe we\'ll finish early and you\'ll have some free time."');
  scene.text('Hearing this, the room settles down and the lesson begins.');
  qspCall(s, 'willpower', 'chore', 'self', (((s as any).grupTipe ?? 0) === 4  &&  ((s as any).trait_vars ?? 0)?.['academic'] === 0) ? ('hard') : ((((s as any).trait_vars ?? 0)?.['academic'] > 0) ? ('easy') : ('medium')));
  if (((s as any).trait_vars ?? 0)?.['academic'] === 2) {
    (s as any).will_cost = ((s as any).will_cost ?? 0) / 2;
  } else {
    (s as any).will_cost = 0;
  }
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Listen attentively [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Listen attentively', handler: (st: GameState) => {
    if (((s as any).will_cost ?? 0) > 0) {
      qspCall(s, 'willpower', 'pay', 'self', 'chore');
    }
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) + (1);
    qspCall(s, 'grades', 'class_activity_attributes', 'school', 'lit', ((s as any).pcs_intel ?? 0));
    qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 2) + 0, 'no_bonus');
    (s as any).trait_vars['academic_lessons'] = ((s as any).trait_vars['academic_lessons'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/literature/work2.jpg');
    scene.text('You obediently open your textbook and start following along, even taking notes where needed. Eventually, Ms. Braakman stops reading the passages herself and asks for a volunteer to start reading.');
    scene.actions([
      { label: 'Volunteer to read', goto: ['gschool_lessonsev3', 'reading'] },
      { label: 'Avoid being chosen', handler: (st: GameState) => {
    if (Math.floor(Math.random() * 4) + 0 === 0) {
      scene.img('images/locations/pavlovsk/school/classroom/literature/work.jpg');
      scene.text('Nobody raises their hand and you keep your head down and pretend to be deep in thought as Ms. Braakman starts scanning the room. Unfortunately, she stops and points at you. "Please read the next passage."');
      if (((s as any).grupTipe ?? 0) === 4) {
        qspCall(s, 'willpower', 'misc', 'self', 'medium');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'misc', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    scene.text('"Fuck that!" you scoff. "Get someone who actually gives a shit about your boring class to do it!"');
    // TODO-QSP: dynamic text: You get a few laughs as Ms. Braakman shoots you an icy glare. "Miss <<$pcs_lastn...
    scene.text(`You get a few laughs as Ms. Braakman shoots you an icy glare. "Miss ${((s as any).pcs_lastname ?? 0)}, dont't use that language in my class! Now read the passage! I won't ask you again."`);
    scene.text('"Then you\'re going to waiting a <i>looong</i> time, because I\'m not reading shit!"');
    if (Math.floor(Math.random() * 2) + 0 === 0) {
      scene.text('The class erupts into laughter as Ms. Braakman\'s face turns red and her expression darkens, a mix of rage and embarrassment.');
      scene.text('"Get out of my class and report to the principal\'s office right now!" she barks.');
      scene.actions([
        { label: 'Go to the principal\'s office', handler: (st: GameState) => {
    (s as any).demerit = ((s as any).demerit ?? 0) + (5);
    scene.img('images/pc/reactions/smirk.mp4');
    scene.text('"Fine by me," you say with a smirk as you get up from your seat. You saunter past your fellow students and to the front of the class, where you flash Ms. Braakman a mockingly sweet smile before exiting the classroom.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_office', 'principal'] },
    ]);
  } },
      ]);
    } else {
      scene.text('Realizing she\'s not going to get anywhere with you, Ms. Braakman gets someone else to read the passage as you smirk triumphantly.');
      scene.actions([
        { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
      ]);
    }
  } },
          ]);
        }
      }
      scene.actions([
        { label: 'Complain', handler: (st: GameState) => {
    scene.text('"Do I have to?" you whine as you slump back in your seat.');
    scene.text('Ms. Braakman shoots you an icy glare. "If you want to avoid detention and pass my class, then yes, you will."');
    scene.text('You sigh. Realizing there\'s no way of avoiding it, you sit up and clear your throat before quickly reading the passage as instructed.');
    scene.text('"Was that so hard?" Ms. Braakman says before continuing the lesson.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
        { label: 'Get it over with', handler: (st: GameState) => {
    scene.text('Realizing there\'s no way of avoiding it, you clear your throat before quickly reading the passage as instructed.');
    // TODO-QSP: dynamic text: "Thank you, but read a little slower and with more enthusiasm next time, Miss <<...
    scene.text(`"Thank you, but read a little slower and with more enthusiasm next time, Miss ${((s as any).pcs_lastname ?? 0)}," Ms. Braakman says before continuing the lesson.`);
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      ]);
    } else {
      scene.img('images/locations/pavlovsk/school/classroom/literature/work.jpg');
      scene.text('Nobody raises their hand and you keep your head down and pretend to be deep in thought as Ms. Braakman starts scanning the room. Luckily, she stops and points at someone else. "Please read the next passage."');
      if (((s as any).boy ?? 0) === 'A4') {
        scene.text('You watch Igor sink lower into his seat; it seems he was also trying to hide. He reluctantly and quietly starts to read the passage, but Ms. Braakman interrupts and asks him to speak clearly.');
        scene.text('Some other students start snickering and whispering at each other, causing Igor to awkwardly clear his throat before continuing.');
        scene.text('By the time he\'s finished reading, his cheeks are bright red and he refuses to look up from his desk for the rest of the class.');
      } else {
        scene.text('Petka obediently reads the passage and does so without any mistakes.');
        scene.text('"It\'s always a pleasure to hear you read, Petka," Ms. Braakman smiles. "If only your fellow students took their studies as seriously as you do."');
        scene.text('Petka smiles slightly, but you can tell that he doesn\'t like being openly complimented by the teacher, especially when the others giggle and call him a teacher\'s pet.');
        if (((s as any).boy ?? 0) === 'A23') {
          scene.text('Albina rolls her eyes before dryly reading out the passage as instructed.');
          scene.text('"Read with a little more enthusiasm next time please, Miss Barlovskaya," Ms. Braakman says before continuing the lesson.');
          scene.text('Albina sarcastically mimics her under her breath behind her back in response.');
        } else {
          scene.text('Upon being called on, Lizaveta quickly hides her phone under her desk, an innocent smile gracing her face as Ms. Braakman glares at her.');
          scene.text('"Uh… What page are we on?" she asks with a nervous chuckle.');
          scene.text('There\'s a few scattered laughs, but Ms. Braakman quickly silences the room as a nearby girl points out the right page and paragraph.');
          scene.text('Lizaveta smiles before she starts reading as if nothing happened.');
          if (((s as any).boy ?? 0) === 'A144') {
            scene.text('Anushka throws her head back and sighs dramatically.');
            scene.text('"The quicker you read, the sooner this will be over," Ms. Braakman insists.');
            scene.text('Hearing this, Anushka straightens up and starts reading, taking Ms. Braakman\'s comment literally and speaking so fast that you can barely understand her.');
          } else {
            scene.text('You look over and notice that Katyusha has her head down, presumably asleep. Ms. Braakman asks her again, but the gopnik doesn\'t respond.');
            scene.text('"We can always continue the lesson during detention…" she threatens.');
            scene.text('After a few seconds, Katyusha slowly sits up and lazily stretches before asking a nearby student for the page number and reading as instructed.');
            if (((s as any).boy ?? 0) === 'A152') {
              scene.text('You watch Feofan frantically hide the comic book he was secretly reading before trying to find the right passage.');
              scene.text('"Save the cartoons for <i>after</i> class, Mr. Krupin..." Ms. Braakman states dryly.');
              scene.text('Feofan starts to correct her, but the laughter from the other students silences him and he starts reading.');
            } else {
              scene.text('"Give me a fucking break…" Arkadi mutters under his breath.');
              scene.text('Either Ms. Braakman didn\'t hear him, or she\'s choosing to avoid confrontation since she continues to wait in silence.');
              scene.text('Realizing there\'s no avoiding it, Arkadi clears his throat and starts reading; his voice is flat and at times he pretends not to be able to pronounce a word just to annoy Ms. Braakman.');
              scene.text('Fed up with his antics, she cuts him off, sarcastically thanks him and quickly chooses a more competent student. With a triumphant smile, Arkadi closes his book and relaxes into his seat.');
              if (((s as any).boy ?? 0) === 'A157') {
                scene.text('"Fuck that!" Roman scoffs as he leans back in his seat. His textbook isn\'t even open.');
                scene.text('You can feel the tension growing as Ms. Braakman narrows her eyes and tells him again to read, only to be met with a taunting smile and silent defiance from the gopnik.');
                scene.text('After what feels like an eternity, Ms. Braakman chooses a different student and continues with the lesson like nothing happened.');
              } else {
                scene.text('"Can\'t you pick someone else?" Petia whines as he slumps back into his seat. "I don\'t even know what page we\'re on!"');
                scene.text('He garners a few laughs, but Ms. Braakman is quick to reprimand him, reminding him that if he keeps it up, he\'ll end up in detention and fail her class.');
              }
              scene.actions([
                { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
              ]);
            }
          }
        }
      }
      scene.actions([
        { label: 'Daydream', handler: (st: GameState) => {
    (s as any).daydream = Math.floor(Math.random() * 4) + 1;
    if (((s as any).daydream ?? 0) === 1) {
      scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
      scene.text('Unable to pay attention, you retreat into your own thoughts. You distract yourself with a number of things, from doodling in your notebook to just staring blankly out the window.');
      // TODO-QSP: dynamic text: "<<$pcs_lastname>>!!"
      scene.text(`"${((s as any).pcs_lastname ?? 0)}!!"`);
      scene.text('Hearing your name called, you snap back to reality to see Ms. Braakman staring daggers at you from the front of the class. The scattered laughter from students causes you to squirm slightly in your seat.');
      scene.text('"I\'ve called your name three times now! If you want to sleep, you can do it during detention," she warns while pointing to the door.');
      qspCall(s, 'willpower', 'misc', 'self', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Be a smart ass [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Be a smart ass', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    (s as any).demerit = ((s as any).demerit ?? 0) + (5);
    (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) + (1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) - (1);
    scene.img('images/pc/reactions/eyeroll.mp4');
    scene.text('You roll your eyes and sigh heavily. "I can\'t help it. You just keep talking and talking…" Your unexpected response causes the room to go quiet. "Everything you say is just so pointless. When am I ever going to need to know this stuff?" you ask rhetorically. "Never. Never is the answer."');
    scene.text('The whole class starts to \'ooh\' in disbelief at your bold response. Arkadi, Roman and Anushka\'s laughter can probably be heard all the way down the hall.');
    scene.text('Ms. Braakman\'s face turns red and her expression darkens, a mix of rage and embarrassment.');
    scene.text('"Get out of my class and report to the principal\'s office right now!" she barks.');
    scene.actions([
      { label: 'Go to the principal\'s office', handler: (st: GameState) => {
    (s as any).demerit = ((s as any).demerit ?? 0) + (5);
    scene.img('images/pc/reactions/smirk.mp4');
    scene.text('"Fine by me," you say with a smirk as you get up from your seat. You saunter past your fellow students and to the front of the class, where you flash Ms. Braakman a mockingly sweet smile before exiting the classroom.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_office', 'principal'] },
    ]);
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Apologize', handler: (st: GameState) => {
    (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) - (1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) + (1);
    scene.img('images/characters/shared/headshots_main/big137.jpg');
    scene.text('"Sorry, Ms. Braakman…" you mumble quietly as you sit up straight and refocus on the lesson. Satisfied, Ms. Braakman returns to teaching with a small smile.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      ]);
    } else {
      (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) + (Math.floor(Math.random() * 3) + 1);
      if (((s as any).class ?? 0)?.['school_lit_grade'] >= 80) {
        scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
        scene.text('As Ms. Braakman continues talking, you find yourself unable to stay awake. You\'re just on the edge of falling completely asleep when you\'re snapped back to reality by Ms. Braakman calling your name.');
        scene.text('"Well? What\'s the answer?" she asks with a smug smile.');
        scene.text('You didn\'t catch what the question was, so you take a quick look around the room and piece together an answer you hope is right. Ms. Braakman can barely hide her annoyance as she reluctantly admits that you\'re right.');
      } else {
        qspCall(s, 'mood', 'lower', 'tiny');
        qspCall(s, 'stat', '');
        scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
        scene.text('As Ms. Braakman continues talking, you find yourself unable to stay awake. You\'re just on the edge of falling completely asleep when you\'re snapped back to reality by Ms. Braakman calling your name.');
        scene.text('"Well? What\'s the answer?" she asks with a smug smile.');
        scene.text('You didn\'t catch what the question was, so you take a quick look around the room and piece together an answer you hope is right. Unfortunately, you answer incorrectly, which Ms. Braakman is happy to point out to the entire class.');
        scene.text('"A perfect example of how to fail my class," she smirks as the others begin to laugh at you.');
      }
      if (((s as any).daydream ?? 0) === 3  &&  ((s as any).npc_rel ?? 0)?.['A144'] >= 50  &&  ((s as any).anushkaQW ?? 0)?.['sex'] >= 15  &&  ((s as any).pcs_hotcat ?? 0) >= 6  &&  ((s as any).pantyworntype ?? 0) !== 'none') {
        scene.img('images/characters/pavlovsk/school/girl/anushka/sex/school/classroom1.jpg');
        scene.text('You\'re bored out of your mind and can barely pretend to be paying attention. You notice Anushka watching you out of the corner of your eye for a few minutes before she stops and starts writing something on a piece of paper.');
        scene.actions([
          { label: 'So bored', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/school/classroom2.jpg');
    scene.text('After a few seconds Anushka stops writing, tears the paper out of her notebook, folds it up and passes it over to you. You take a look around to make sure no one is looking before taking the note from her.');
    scene.actions([
      { label: 'Read the note', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/school/classroom3.jpg');
    scene.text('The note says "Meet me in the bathroom" with a little heart after it. You glance over at her and mouth "When?"');
    scene.text('"Now," she replies.');
    scene.text('"Why?" you ask back.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/school/classroom4.jpg');
    scene.text('Her answer to your question is to put her fingers in a V shape on her mouth and stick her tongue between them, making the universal sign for eating pussy. You\'re surprised for moment, but then you remember that this is Anushka. If anyone would ask someone to leave in the middle of class for sex, it would be her.');
    qspCall(s, 'willpower', 'cuni', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/school/classroom1.jpg');
    scene.text('You shake your head and she frowns at you, then sighs as she rolls her eyes. She stops paying attention to you and you try your best to focus on the class, no matter how boring it is.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'literature');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Ask to go to the restroom', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/school/classroom5.jpg');
    scene.text('You can\'t help be grin at her antics. You raise your hand until Ms. Braakman sees you.');
    // TODO-QSP: dynamic text: "What is it, <<$pcs_lastname>>?" she asks.
    scene.text(`"What is it, ${((s as any).pcs_lastname ?? 0)}?" she asks.`);
    scene.text('"I need to use the restroom," you reply.');
    scene.text('"You should have done that during your break," she says in a slightly exacerbated tone.');
    scene.text('"I really need to go! It\'s girl stuff."');
    scene.text('She sighs and looks at you suspiciously, but then waves towards the door. "Very well, but come back quickly please."');
    scene.actions([
      { label: 'Go to the girls restroom', goto: ['gschool_lessons3', 'meet_anushka'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) + (Math.floor(Math.random() * 4) + 2);
        scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
        scene.text('You fell asleep and the bell wakes you up. You slowly get up and stretch before heading to your next class.');
        scene.actions([
          { label: 'Leave class', goto: ['gschool_lessons', 'short_break'] },
        ]);
      }
      scene.actions([
        { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'literature');
  } },
      ]);
    }
    scene.actions([
      { label: 'Play with your phone', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/phone.jpg');
    scene.text('You take out your phone and start playing a game, hoping the boring lesson will be over soon.');
    if (Math.floor(Math.random() * 2) + 0 > 0) {
      scene.text('You play on your phone for the duration of class. You play a few games and text a few friends, all under Ms. Braakman\'s oblivious nose.');
      scene.actions([
        { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'literature');
  } },
      ]);
    } else {
      scene.img('images/locations/pavlovsk/school/classroom/phone.jpg');
      // TODO-QSP: dynamic text: "Miss <<$pcs_lastname>>, are you playing on your phone?" Ms. Braakman asks as sh...
      scene.text(`"Miss ${((s as any).pcs_lastname ?? 0)}, are you playing on your phone?" Ms. Braakman asks as she makes her way towards you.`);
      qspCall(s, 'willpower', 'misc', 'resist', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Keep using your phone [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Keep using your phone', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    (s as any).demerit = ((s as any).demerit ?? 0) + (5);
    scene.img('images/characters/pavlovsk/school/teacher/raven/angry.jpg');
    scene.text('You shrug your shoulders dismissively, which only serves to anger her more.');
    scene.text('"So that\'s how it\'s going to be, is it?" she laughs dryly.');
    qspCall(s, 'willpower', 'exhib', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Take photos under your skirt [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Take photos under your skirt', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      qspCall(s, 'flash', 'panties', 'indoors', 1, 1);
      scene.img('images/locations/pavlovsk/school/classroom/upskirtselfie.jpg');
      scene.text('With a mischievous smile, you deftly slide your phone under your skirt and spread your legs to take a picture of your panties. Ms. Braakman stops in front of your desk, her hands on her hips as she stares daggers at you.');
      scene.text('"Hand it over." she orders, one of her hands now held out in front of you. You obediently hand over your phone to her without argument.');
      scene.text('When she sees the screen is still on, she smiles smugly. "You were texting, weren\'t you? Of course you were, that\'s all you kids do these days. Well, I\'m sure you wouldn\'t mind if I shared with the class what you were--"');
      scene.text('You can barely keep a straight face as you watch her expression change from smug to confusion and then anger in a matter of seconds. You expect her to go through with her threat and show the class what you were doing, but for whatever reason she doesn\'t.');
      scene.text('"I don\'t want to see you ever doing that again, young lady! You can have this back after class," she warns you as she turns the screen off and returns to the front of the class.');
    } else {
      qspCall(s, 'flash', 'pussy', 'indoors', 2, 1);
      scene.img('images/locations/pavlovsk/school/classroom/literature/nopanties_upskirt.jpg');
      scene.text('With a mischievous smile, you deftly slide your phone under your skirt and spread your legs to take a picture of your bare pussy. Ms. Braakman stops in front of your desk, her hands on her hips as she stares daggers at you.');
      scene.text('"Hand it over." she orders, one of her hands now held out in front of you. You obediently hand over your phone to her without argument.');
      scene.text('When she sees the screen is still on, she smiles smugly. "You were texting, weren\'t you? Of course you were, that\'s all you kids do these days. Well, I\'m sure you wouldn\'t mind if I shared with the class what you were--"');
      scene.text('You can barely keep a straight face as you watch Ms. Braakman\'s expression change from smug to confusion and then anger in a matter of seconds. You silently wait for her to order you out of the class and to the principal\'s office, but she looks lost in her own thoughts as she continues to stare at the screen. When she finally snaps back to reality, you could have sworn you saw a twinkle of excitement and longing in her eyes.');
      // TODO-QSP: dynamic text: "I don't want to see you doing such things in my class again, Miss <<$pcs_lastna...
      scene.text(`"I don't want to see you doing such things in my class again, Miss ${((s as any).pcs_lastname ?? 0)}! You can have this back after class," she says sharply, but the way she licks her lips afterwards speaks of something else. Without another word, she turns the screen off and returns to the front of the class to resume the lesson.`);
    }
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'getphone');
  } },
    ]);
  } },
      ]);
    }
    if (((s as any).braworntype ?? 0) !== 'none') {
      qspCall(s, 'willpower', 'misc', 'self', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Hide the phone in your bra [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Hide the phone in your bra', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'misc', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).demerit = ((s as any).demerit ?? 0) + (5);
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (15);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/nophone.jpg');
    // TODO-QSP: dynamic text: You deftly shove the phone in your bra, and smile fiendishly as you see the mome...
    scene.text(`You deftly shove the phone in your bra, and smile fiendishly as you see the momentary hesitation from your teacher as they stop at your desk. "You think this is a joke, Miss ${((s as any).pcs_lastname ?? 0)}?" Ms. Braakman asks, her eyes narrowing.`);
    scene.text('"If you want my phone, go ahead and take it." you reply in a mockingly sweet voice as you thrust your chest out. Your teacher\'s eyes darken dangerously, and you start to think you\'ve won this fight, but your bluff is called as one of Ms. Braakman\'s hands plunges into your shirt. "Ms. Braakman, I didn\'t know today\'s lesson would be so hands on!" you tease as you feel her hand slip inside your bra. Your smile widens as you hear the class erupt with cheering and laughter.');
    scene.text('"You think you\'re clever, don\'t you?" she whispers, her voice low so only you can hear. You try to respond, but your words get caught in your throat as she starts to tease one of your nipples between her fingertips. Suddenly, she\'s no longer searching but groping, her skillful fingers carefully moving between each breast until both of your sensitive buds are hard and straining almost uncomfortably against your bra. You can\'t help but shift slightly in your seat as you feel a tightening sensation in your lower belly and an aching throb between your legs.');
    scene.text('"Don\'t make me remind you of your place, little girl!" Ms. Braakman\'s warning is punctuated painfully as she gives a sharp pinch and tug to one of your nipples, eliciting a soft whimper from you. Having gotten her point across, she fishes your phone out and removes her hand from your shirt. "You can get this back after class."');
    scene.text('Flustered and aroused, you regain your senses and remember that you\'re sitting in class right now. You look around the room, but it seems like her groping went unnoticed and was seen as her fishing out your phone like you challenged her to do.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessonsev3', 'getphone'] },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Hand over the phone', handler: (st: GameState) => {
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) + (1);
    scene.img('images/locations/pavlovsk/school/classroom/bored.jpg');
    scene.text('Realizing it isn\'t worth it, you hand over your phone without argument.');
    scene.text('"You can have this back after class," she says as she walks back to the front of the class.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessonsev3', 'getphone'] },
    ]);
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Put your phone away', handler: (st: GameState) => {
    (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) - (1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) + (1);
    scene.img('images/locations/pavlovsk/school/classroom/bored.jpg');
    scene.text('You decide not to aggravate the situation and put your phone away. You can see Ms. Braakman isn\'t happy, but she\'s willing to let it go for now and goes back to teaching the class without reprimanding you.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'literature');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

export const gschool_lessons3: LocationDef = {
  name: 'gschool_lessons3',
  title: '"I want everyone quiet and in a seat!" Ms. Braakman demands ',
  region: 'other',
  description: ['"I want everyone quiet and in a seat!" Ms. Braakman demands as she finishes writing today\'s lesson plan on the chalkboard. The room lets out a collective groan as they see the mountain of work they have to do today.'],
  enter: enter,
};
