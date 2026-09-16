import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterLiterature(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'grades', 'attend_class', 'school', 'lit');
  qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 2) + 0, 'no_bonus');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/classroom/literature/classlit.jpg');
  scene.text('"I want everyone quiet and in a seat!" Ms. Braakman demands as she finishes writing today\'s lesson plan on the chalkboard. The room lets out a collective groan as they see the mountain of work they have to do today.');
  scene.text('"She\'s always piling on the work and expects everyone to have it finished by the end of class!" you overhear a girl complain with a heavy sigh.');
  scene.text('Clearing her throat, Ms. Braakman raises her voice to speak over the noise. "The sooner everyone takes out their textbooks, the quicker we can get started. Who knows, maybe we\'ll finish early and you\'ll have some free time."');
  scene.text('Hearing this, the room settles down and the lesson begins.');
  qspCall(s, 'willpower', 'chore', 'self', ((((s as any).grupTipe ?? 0) === 4  &&  ((s as any).trait_vars ?? 0)?.['academic'] === 0) ? ('hard') : (((((s as any).trait_vars ?? 0)?.['academic'] > 0) ? ('easy') : ('medium')))));
  if (((s as any).trait_vars ?? 0)?.['academic'] === 2) {
    (s as any).will_cost = ((s as any).will_cost ?? 0) / 2;
  } else {
    if (((s as any).trait_vars ?? 0)?.['academic'] >= 3) {
      (s as any).will_cost = 0;
    }
  }
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Listen attentively', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Listen attentively', handler: (st: GameState) => {
    if (((s as any).will_cost ?? 0) > 0) {
      qspCall(s, 'willpower', 'pay', 'self', 'chore');
    }
    ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = ((s as any).grupvalue[3] ?? 0) + (1);
    qspCall(s, 'grades', 'class_activity_attributes', 'school', 'lit', ((s as any).pcs_intel ?? 0));
    qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 2) + 0, 'no_bonus');
    ((s as any).trait_vars = (s as any).trait_vars ?? {})['academic_lessons'] = ((s as any).trait_vars['academic_lessons'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/literature/work2.jpg');
    scene.text('You obediently open your textbook and start following along, even taking notes where needed. Eventually, Ms. Braakman stops reading the passages herself and asks for a volunteer to start reading.');
    scene.actions([
      { label: 'Volunteer to read', goto: ['gschool_lessonsev3', 'reading'] },
      { label: 'Avoid being chosen', handler: (st: GameState) => {
    if ((!(Math.floor(Math.random() * 4) + 0))) {
      scene.img('images/locations/pavlovsk/school/classroom/literature/work.jpg');
      scene.text('Nobody raises their hand and you keep your head down and pretend to be deep in thought as Ms. Braakman starts scanning the room. Unfortunately, she stops and points at you. "Please read the next passage."');
      if (((s as any).grupTipe ?? 0) === 4) {
        qspCall(s, 'willpower', 'misc', 'self', 'medium');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'misc', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    scene.text('"Fuck that!" you scoff. "Get someone who actually gives a shit about your boring class to do it!"');
    // TODO-QSP: dynamic text: You get a few laughs as Ms. Braakman shoots you an icy glare. "Miss <<$pcs_lastn...
    scene.text(`You get a few laughs as Ms. Braakman shoots you an icy glare. "Miss ${((s as any).pcs_lastname || '')}, dont't use that language in my class! Now read the passage! I won't ask you again."`);
    scene.text('"Then you\'re going to waiting a <i>looong</i> time, because I\'m not reading shit!"');
    if ((!(Math.floor(Math.random() * 2) + 0))) {
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
    scene.text(`"Thank you, but read a little slower and with more enthusiasm next time, Miss ${((s as any).pcs_lastname || '')}," Ms. Braakman says before continuing the lesson.`);
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      ]);
    } else {
      (s as any).boy = 'A' + String(parseFloat((String(' 4 6 23 140 144 145 152 156 157 159').slice((4 * (Math.floor(Math.random() * 9) + 0) + 2)-1, ((4 * (Math.floor(Math.random() * 9) + 0) + 2)-1)+(3)))));
      scene.img('images/locations/pavlovsk/school/classroom/literature/work.jpg');
      scene.text('Nobody raises their hand and you keep your head down and pretend to be deep in thought as Ms. Braakman starts scanning the room. Luckily, she stops and points at someone else. "Please read the next passage."');
      if (((s as any).boy ?? 0) === 'A4') {
        scene.text('You watch Igor sink lower into his seat; it seems he was also trying to hide. He reluctantly and quietly starts to read the passage, but Ms. Braakman interrupts and asks him to speak clearly.');
        scene.text('Some other students start snickering and whispering at each other, causing Igor to awkwardly clear his throat before continuing.');
        scene.text('By the time he\'s finished reading, his cheeks are bright red and he refuses to look up from his desk for the rest of the class.');
      } else {
        if (((s as any).boy ?? 0) === 'A6') {
          scene.text('Petka obediently reads the passage and does so without any mistakes.');
          scene.text('"It\'s always a pleasure to hear you read, Petka," Ms. Braakman smiles. "If only your fellow students took their studies as seriously as you do."');
          scene.text('Petka smiles slightly, but you can tell that he doesn\'t like being openly complimented by the teacher, especially when the others giggle and call him a teacher\'s pet.');
        } else {
          if (((s as any).boy ?? 0) === 'A23') {
            scene.text('Albina rolls her eyes before dryly reading out the passage as instructed.');
            scene.text('"Read with a little more enthusiasm next time please, Miss Barlovskaya," Ms. Braakman says before continuing the lesson.');
            scene.text('Albina sarcastically mimics her under her breath behind her back in response.');
          } else {
            if (((s as any).boy ?? 0) === 'A140') {
              scene.text('Upon being called on, Lizaveta quickly hides her phone under her desk, an innocent smile gracing her face as Ms. Braakman glares at her.');
              scene.text('"Uh… What page are we on?" she asks with a nervous chuckle.');
              scene.text('There\'s a few scattered laughs, but Ms. Braakman quickly silences the room as a nearby girl points out the right page and paragraph.');
              scene.text('Lizaveta smiles before she starts reading as if nothing happened.');
            } else {
              if (((s as any).boy ?? 0) === 'A144') {
                scene.text('Anushka throws her head back and sighs dramatically.');
                scene.text('"The quicker you read, the sooner this will be over," Ms. Braakman insists.');
                scene.text('Hearing this, Anushka straightens up and starts reading, taking Ms. Braakman\'s comment literally and speaking so fast that you can barely understand her.');
              } else {
                if (((s as any).boy ?? 0) === 'A145') {
                  scene.text('You look over and notice that Katyusha has her head down, presumably asleep. Ms. Braakman asks her again, but the gopnik doesn\'t respond.');
                  scene.text('"We can always continue the lesson during detention…" she threatens.');
                  scene.text('After a few seconds, Katyusha slowly sits up and lazily stretches before asking a nearby student for the page number and reading as instructed.');
                } else {
                  if (((s as any).boy ?? 0) === 'A152') {
                    scene.text('You watch Feofan frantically hide the comic book he was secretly reading before trying to find the right passage.');
                    scene.text('"Save the cartoons for <i>after</i> class, Mr. Krupin..." Ms. Braakman states dryly.');
                    scene.text('Feofan starts to correct her, but the laughter from the other students silences him and he starts reading.');
                  } else {
                    if (((s as any).boy ?? 0) === 'A156') {
                      scene.text('"Give me a fucking break…" Arkadi mutters under his breath.');
                      scene.text('Either Ms. Braakman didn\'t hear him, or she\'s choosing to avoid confrontation since she continues to wait in silence.');
                      scene.text('Realizing there\'s no avoiding it, Arkadi clears his throat and starts reading; his voice is flat and at times he pretends not to be able to pronounce a word just to annoy Ms. Braakman.');
                      scene.text('Fed up with his antics, she cuts him off, sarcastically thanks him and quickly chooses a more competent student. With a triumphant smile, Arkadi closes his book and relaxes into his seat.');
                    } else {
                      if (((s as any).boy ?? 0) === 'A157') {
                        scene.text('"Fuck that!" Roman scoffs as he leans back in his seat. His textbook isn\'t even open.');
                        scene.text('You can feel the tension growing as Ms. Braakman narrows her eyes and tells him again to read, only to be met with a taunting smile and silent defiance from the gopnik.');
                        scene.text('After what feels like an eternity, Ms. Braakman chooses a different student and continues with the lesson like nothing happened.');
                      } else {
                        if (((s as any).boy ?? 0) === 'A159') {
                          scene.text('"Can\'t you pick someone else?" Petia whines as he slumps back into his seat. "I don\'t even know what page we\'re on!"');
                          scene.text('He garners a few laughs, but Ms. Braakman is quick to reprimand him, reminding him that if he keeps it up, he\'ll end up in detention and fail her class.');
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
      scene.actions([
        { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
      ]);
    }
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Daydream', handler: (st: GameState) => {
    (s as any).daydream = Math.floor(Math.random() * 4) + 1;
    if (((s as any).daydream ?? 0) === 1) {
      scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
      scene.text('Unable to pay attention, you retreat into your own thoughts. You distract yourself with a number of things, from doodling in your notebook to just staring blankly out the window.');
      // TODO-QSP: dynamic text: "<<$pcs_lastname>>!!"
      scene.text(`"${((s as any).pcs_lastname || '')}!!"`);
      scene.text('Hearing your name called, you snap back to reality to see Ms. Braakman staring daggers at you from the front of the class. The scattered laughter from students causes you to squirm slightly in your seat.');
      scene.text('"I\'ve called your name three times now! If you want to sleep, you can do it during detention," she warns while pointing to the door.');
      qspCall(s, 'willpower', 'misc', 'self', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Be a smart ass', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Be a smart ass', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    (s as any).demerit = ((s as any).demerit ?? 0) + (5);
    ((s as any).grupvalue = (s as any).grupvalue ?? {})[1] = ((s as any).grupvalue[1] ?? 0) + (1);
    ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = ((s as any).grupvalue[3] ?? 0) - (1);
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
    ((s as any).grupvalue = (s as any).grupvalue ?? {})[1] = ((s as any).grupvalue[1] ?? 0) - (1);
    ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = ((s as any).grupvalue[3] ?? 0) + (1);
    scene.img('images/characters/shared/headshots_main/big137.jpg');
    scene.text('"Sorry, Ms. Braakman…" you mumble quietly as you sit up straight and refocus on the lesson. Satisfied, Ms. Braakman returns to teaching with a small smile.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).daydream ?? 0) === 2) {
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
        scene.actions([
          { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'literature');
  } },
        ]);
      } else {
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
        { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
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
    scene.text(`"What is it, ${((s as any).pcs_lastname || '')}?" she asks.`);
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
      }
    }
  } },
    { label: 'Play with your phone', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/phone.jpg');
    scene.text('You take out your phone and start playing a game, hoping the boring lesson will be over soon.');
    if ((Math.floor(Math.random() * 2) + 0) > 0) {
      scene.text('You play on your phone for the duration of class. You play a few games and text a few friends, all under Ms. Braakman\'s oblivious nose.');
      scene.actions([
        { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'literature');
  } },
      ]);
    } else {
      scene.img('images/locations/pavlovsk/school/classroom/phone.jpg');
      // TODO-QSP: dynamic text: "Miss <<$pcs_lastname>>, are you playing on your phone?" Ms. Braakman asks as sh...
      scene.text(`"Miss ${((s as any).pcs_lastname || '')}, are you playing on your phone?" Ms. Braakman asks as she makes her way towards you.`);
      qspCall(s, 'willpower', 'misc', 'resist', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Keep using your phone', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Keep using your phone', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    (s as any).demerit = ((s as any).demerit ?? 0) + (5);
    scene.img('images/characters/pavlovsk/school/teacher/raven/angry.jpg');
    scene.text('You shrug your shoulders dismissively, which only serves to anger her more.');
    scene.text('"So that\'s how it\'s going to be, is it?" she laughs dryly.');
    qspCall(s, 'willpower', 'exhib', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Take photos under your skirt', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
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
      scene.text(`"I don't want to see you doing such things in my class again, Miss ${((s as any).pcs_lastname || '')}! You can have this back after class," she says sharply, but the way she licks her lips afterwards speaks of something else. Without another word, she turns the screen off and returns to the front of the class to resume the lesson.`);
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
          { label: 'Hide the phone in your bra', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
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
    scene.text(`You deftly shove the phone in your bra, and smile fiendishly as you see the momentary hesitation from your teacher as they stop at your desk. "You think this is a joke, Miss ${((s as any).pcs_lastname || '')}?" Ms. Braakman asks, her eyes narrowing.`);
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
    ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = ((s as any).grupvalue[3] ?? 0) + (1);
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
    ((s as any).grupvalue = (s as any).grupvalue ?? {})[1] = ((s as any).grupvalue[1] ?? 0) - (1);
    ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = ((s as any).grupvalue[3] ?? 0) + (1);
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
  scene.build();
}

function enterLiteratureLate(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).lit_late_counter = ((s as any).lit_late_counter ?? 0) + (1);
  scene.img('images/locations/pavlovsk/school/classroom/late/late.jpg');
  scene.text('You walk down the completely empty halls of the school, passing by several classes already underway as you make your way to your own class. You finally arrive at the door to your class and can hear Ms. Braakman already starting today\'s lesson inside.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Head into class', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/late/latel1.jpg');
    if (((s as any).lit_late_counter ?? 0) > 15) {
      scene.text('When you open the door and walk in, Ms. Braakman stops talking and everyone turns their eyes towards you as she addresses you with a cold tone.');
      // TODO-QSP: dynamic text: "Late again, Miss <<$pcs_lastname>>? Obviously, you're not listening to me, so m...
      scene.text(`"Late again, Miss ${((s as any).pcs_lastname || '')}? Obviously, you're not listening to me, so maybe the principal can help you understand good timekeeping. Go to her office now, young lady!" she says as she points to the door behind you.`);
      qspCall(s, 'willpower', 'misc', 'resist', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).demerit = ((s as any).demerit ?? 0) + (10);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/late/sleeppun2.jpg');
    scene.text('You just roll your eyes at her and take your seat at your desk instead. Her eyes flicker fiery red when you disobey her and she walks over, slams her wooden pointer down on your desk and twists your ear.');
    scene.text('"Your disobedience is <i>this</i> close to getting you expelled, young lady! Now go to the principal!" she barks as she motions for you to leave the class.');
    scene.actions([
      { label: 'Go to principal\'s office', goto: ['gschool_office', 'principal'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Do as she says', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/late/latel2.jpg');
    scene.text('Knowing she\'ll force you to go anyway, you choose to avoid embarrassing yourself again and avert her fiery gaze as you begrudgingly turn and leave the room. The door slams behind you once you step out.');
    qspCall(s, 'gschool_office', 'principal');
  } },
      ]);
    } else {
      if (((s as any).lit_late_counter ?? 0) > 10) {
        scene.text('When you open the door and walk in, Ms. Braakman stops talking and everyone turns their eyes towards you as she addresses you in a cold tone.');
        // TODO-QSP: dynamic text: "You're late again, Miss <<$pcs_lastname>>. You obviously haven't learned your l...
        scene.text(`"You're late again, Miss ${((s as any).pcs_lastname || '')}. You obviously haven't learned your lesson. Come here now, young lady!" she says as she points in front of her desk.`);
        qspCall(s, 'willpower', 'misc', 'resist', 'medium');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).demerit = ((s as any).demerit ?? 0) + (10);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/late/sleeppun2.jpg');
    // TODO-QSP: dynamic text: You shake your head and take your seat at your desk instead. Her eyes flicker wi...
    scene.text(`You shake your head and take your seat at your desk instead. Her eyes flicker with fury when you disobey her and she walks over and twists your ear. "You will learn your place in my classroom, ${((s as any).pcs_lastname || '')}! Now get out and go to the principal!" she yells while pointing at the door.`);
    scene.actions([
      { label: 'Go to principal\'s office', goto: ['gschool_office', 'principal'] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Do as she says', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/late/latel2.jpg');
    scene.text('You walk up as she drags a desk and chair to her desk and turns them so they\'re facing the class. "Sit!" she orders while tapping the desk. You sheepishly sit down and your classmates start snickering at you.');
    scene.text('"Since you can never be on time and keep rudely interrupting my class, you\'ll now suffer the consqeuences. From now on, every time you\'re even <i>one</i> minute late to my class, you\'ll sit right here in front of your classmates. Maybe their stares will convince you to be here on the double," she says smugly before resuming her lesson.');
    scene.text('You\'re forced to sit through the lesson while your classmates look at you with their mocking gazes.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons3', 'literature'] },
    ]);
  } },
        ]);
      } else {
        if (((s as any).lit_late_counter ?? 0) > 5) {
          scene.text('When you open the door and walk in, Ms. Braakman stops talking and everyone turns their eyes towards you as she addresses you in a cold tone.');
          // TODO-QSP: dynamic text: "Late again, Miss <<$pcs_lastname>>? I warned you I would not tolerate this. Now...
          scene.text(`"Late again, Miss ${((s as any).pcs_lastname || '')}? I warned you I would not tolerate this. Now come up here right now, young lady!" she says as she points in front of her desk.`);
          qspCall(s, 'willpower', 'misc', 'resist', 'pay');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).demerit = ((s as any).demerit ?? 0) + (10);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/late/sleeppun2.jpg');
    scene.text('You shake your head and take your seat at your desk instead. She walks over to your desk, her eyes filled with rage as she slams her wooden pointer down on your desk.');
    // TODO-QSP: dynamic text: "I won't ask you again, Miss <<$pcs_lastname>>! Now go to the principal!" she ba...
    scene.text(`"I won't ask you again, Miss ${((s as any).pcs_lastname || '')}! Now go to the principal!" she barks.`);
    scene.actions([
      { label: 'Go to principal\'s office', goto: ['gschool_office', 'principal'] },
    ]);
  } },
            ]);
          }
          scene.actions([
            { label: 'Do as she says', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/late/latel2.jpg');
    // TODO-QSP: dynamic text: As you walk up, she grabs a chair and puts it in front of her desk, right in fro...
    scene.text(`As you walk up, she grabs a chair and puts it in front of her desk, right in front of the whole class. She motions for you to sit. "Take a seat, young ${((s as any).pcs_lastname || '')}. You can sit here until you apologize to the class for disrupting the lesson."`);
    scene.text('"What? This is outrageous! It\'s unfair!" you protest, but Ms. Braakman isn\'t interested. She again points to the seat and you begrudgingly sit down and face the stares and snickers of your classmates for several seconds.');
    scene.text('"What do you have to say?" Ms. Braakman asks.');
    scene.text('"Sorry for being late and interrupting you…" you begrudgingly reply.');
    scene.text('"Good. Now get to your desk and pay attention!" she snarls. You sheepishly stand and walk to your desk as your classmates continue to snicker at you. Ms. Braakman then resumes her lesson.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons3', 'literature'] },
    ]);
  } },
          ]);
        } else {
          scene.text('When you open the door and walk in, Ms. Braakman stops talking and everyone turns their eyes towards you as she addresses you in a cold tone.');
          // TODO-QSP: dynamic text: "You're late, Miss <<$pcs_lastname>>. I will not tolerate students being late to...
          scene.text(`"You're late, Miss ${((s as any).pcs_lastname || '')}. I will not tolerate students being late to my class."`);
          scene.text('Several of your classmates smirk while a few look annoyed that you interrupted class.');
          scene.actions([
            { label: 'Apologize', handler: (st: GameState) => {
    (s as any).demerit = ((s as any).demerit ?? 0) + (5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/late/latel1.jpg');
    scene.text('You look down. "Sorry, I was running late and time just got away from me."');
    // TODO-QSP: dynamic text: She shakes her head slightly and frowns. "I'll have to report this, Miss <<$pcs_...
    scene.text(`She shakes her head slightly and frowns. "I'll have to report this, Miss ${((s as any).pcs_lastname || '')}. Now take your seat."`);
    scene.actions([
      { label: 'Take your seat', goto: ['gschool_lessons3', 'literature'] },
    ]);
  } },
            { label: 'Say nothing', handler: (st: GameState) => {
    (s as any).demerit = ((s as any).demerit ?? 0) + (5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/late/latel1.jpg');
    scene.text('You roll your eyes, but say nothing in response.');
    // TODO-QSP: dynamic text: She narrows her eyes at you and frowns. "I'll have to report this, Miss <<$pcs_l...
    scene.text(`She narrows her eyes at you and frowns. "I'll have to report this, Miss ${((s as any).pcs_lastname || '')}. Now take your seat. You've interrupted class enough."`);
    scene.actions([
      { label: 'Take your seat', goto: ['gschool_lessons3', 'literature'] },
    ]);
  } },
          ]);
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterArt(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'grades', 'attend_class', 'school', 'art');
  qspCall(s, 'exp_gain', 'artskls', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'exp_gain', 'agil', Math.floor(Math.random() * 2) + 0);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/classroom/classart.jpg');
  scene.text('You sit in the classroom and listen to Mr. Vasilyev go on about how great art is. He\'s always upbeat and positive about teaching and encourages all of his students to take part.');
  qspCall(s, 'willpower', 'chore', 'self', ((((s as any).grupTipe ?? 0) === 4  &&  ((s as any).trait_vars ?? 0)?.['academic'] === 0) ? ('hard') : (((((s as any).trait_vars ?? 0)?.['academic'] > 0) ? ('easy') : ('medium')))));
  if (((s as any).trait_vars ?? 0)?.['academic'] === 2) {
    (s as any).will_cost = ((s as any).will_cost ?? 0) / 2;
  } else {
    if (((s as any).trait_vars ?? 0)?.['academic'] >= 3) {
      (s as any).will_cost = 0;
    }
  }
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Listen attentively to Mr. Vasilyev', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Listen attentively to Mr. Vasilyev', handler: (st: GameState) => {
    if (((s as any).will_cost ?? 0) > 0) {
      qspCall(s, 'willpower', 'pay', 'self', 'chore');
    }
    ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = ((s as any).grupvalue[3] ?? 0) + (1);
    qspCall(s, 'grades', 'class_activity_attributes', 'school', 'art', ((s as any).pcs_intel ?? 0));
    qspCall(s, 'exp_gain', 'artskls', Math.floor(Math.random() * 2) + 1);
    qspCall(s, 'exp_gain', 'agil', Math.floor(Math.random() * 2) + 0);
    ((s as any).trait_vars = (s as any).trait_vars ?? {})['academic_lessons'] = ((s as any).trait_vars['academic_lessons'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/attention.jpg');
    scene.text('You listen attentively to Mr. Vasilyev for the duration of the class. Today\'s lesson was interesting and informative and you feel you learned a lot.');
    scene.actions([
      { label: 'Ask a question about the lesson', handler: (st: GameState) => {
    qspCall(s, 'exp_gain', 'artskls', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'exp_gain', 'agil', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'grades', 'class_activity_skill', 'school', 'art', ((s as any).pcs_artskls ?? 0));
    scene.img('images/locations/pavlovsk/school/classroom/ask.jpg');
    scene.text('Mr. Vasilyev smiles, always happy to see his students engaged in his class. He happily spends some extra time explaining the topic again and answers any extra questions you might have. You feel smarter, thoroughly understanding today\'s lessons now.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'art');
  } },
    ]);
  } },
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'art');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Don\'t pay attention in class', handler: (st: GameState) => {
    (s as any).bored = Math.floor(Math.random() * 4) + 1;
    if (((s as any).bored ?? 0) === 1) {
      scene.img('images/locations/pavlovsk/school/classroom/bored.jpg');
      scene.text('Mr. Vasilyev has gone on one of his exhaustively long and in-depth explanations about one of the art styles, how it influenced society in all sorts of ways and in return was influenced by current events. You thought this class was about art, not history. That comes to an abrupt end when a loud crash in the room nearly startles you out of your chair.');
      scene.text('Everyone in the room turns to see Svyatoslav on the floor, his desk overturned as his cellphone slides across the floor before clattering against the wall. Silence is soon replaced by laughter. The eyes of the entire class on him, Svyatoslav struggles to act nonchalant as he works to quickly return his desk to an upright position and gather the items that had fallen to the floor. Just as he reaches for his phone, Anushka snatches it off the floor and starts looking at it.');
      scene.text('"Ooooh, what\'s this? Whose panties are these, Svyatoslav?"');
      scene.text('He grabs hold of her, attempting to wrestle his phone away from her as she keeps talking. Her voice is strained as Svyatoslav easily overpowers her, but she doesn\'t make it easy on him, holding onto the phone for as long as she can.');
      (s as any).temp = Math.floor(Math.random() * 6) + 0;
      if ((!((s as any).temp ?? 0))) {
        scene.text('"White cotton panties by the looks of it. Must be Julia\'s."');
        scene.text('Mr. Vasilyev is desperately trying to get the class to calm down. Julia\'s face turns bright red as you wonder how Anushka knows her panties.');
      } else {
        if (((s as any).temp ?? 0) === 1) {
          scene.text('"Some expensive looking white lacy panties. Are they yours, Katja?"');
          scene.text('Mr. Vasilyev is desperately trying to get the class to calm down. Katja blushes deeply as you wonder how Anushka knows her panties.');
        } else {
          if (((s as any).temp ?? 0) === 2) {
            scene.text('"Oooooh. Albina\'s leopard print g-string! At least you have good taste!"');
            scene.text('Mr. Vasilyev is desperately trying to get the class to calm down. Albina snaps her knees together and glares at Svyatoslav as you wonder how Anushka knows her panties.');
          } else {
            if (((s as any).temp ?? 0) === 3) {
              scene.text('Mr. Vasilyev is desperately trying to get the class to calm down as Anushka laughs.');
              scene.text('"Black and yellow \'Slippery when wet\' panties? Those are mine!" She grins at Svyatoslav, places a hand on his chest and looks him right in the eyes. "If you wanted to see, then all you had to do was ask," she teases before she hikes up her skirt to show off her panties. Mr. Vasilyev quickly opens his jacket wide to try and block the view.');
            } else {
              if (((s as any).temp ?? 0) === 4) {
                scene.text('"Natasha\'s rather stylish red cotton panties by the looks of it."');
                scene.text('Mr. Vasilyev is desperately trying to get the class to calm down. You notice Natasha blushing as you wonder how Anushka knows her panties.');
              } else {
                if (((s as any).temp ?? 0) === 5) {
                  scene.text('"What\'s this? Comic book character panties? They can only be Zinaida\'s!"');
                  scene.text('Mr. Vasilyev is desperately trying to get the class to calm down. You see the mortified look on Zinaida\'s face before she buries her head on her desk as you wonder how Anushka knows her panties.');
                }
              }
            }
          }
        }
      }
      scene.text('Once Svyatoslav has his phone back and Mr. Vasilyev has the class calmed down, he calls both of them up to his desk, looks at the phone and talks quietly to both of them, reprimanding Svyatoslav about taking panty shots and Anushka about disrespecting people\'s privacy. Svyatoslav looks slightly abashed, while Anushka just looks bored.');
      scene.actions([
        { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'art');
  } },
      ]);
    } else {
      if (((s as any).bored ?? 0) === 2  &&  ((s as any).npc_rel ?? 0)?.['A144'] >= 50  &&  ((s as any).pcs_hotcat ?? 0) >= 6  &&  ((s as any).pantyworntype ?? 0) !== 'none') {
        scene.img('images/characters/pavlovsk/school/girl/anushka/sex/school/classroom1.jpg');
        scene.text('');
        scene.actions([
          { label: 'Bored', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/school/classroom2.jpg');
    scene.text('You\'re bored out of your mind and can barely pretend to be paying attention. You notice Anushka watching you out of the corner of your eye for a few minutes before she stops and starts writing something on a piece of paper.');
    scene.actions([
      { label: 'Read the note', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/school/classroom3.jpg');
    scene.text('After a few seconds Anushka stops writing, tears the paper out of her notebook, folds it up and then passes it over to you. You take a look around to make sure no one is looking before taking the note from her.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/school/classroom4.jpg');
    scene.text('Her answer to your question is to put her fingers in a V shape on her mouth and stick her tongue between them, making the universal sign for eating pussy. You\'re surprised for a moment, but then you remember that this is Anushka. If anyone would ask someone to leave in the middle of class for sex, it would be her.');
    qspCall(s, 'willpower', 'cuni', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
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
    qspCall(st, 'gschool_lessonsev3', 'art');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Ask to go to the restroom', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/school/classroom5.jpg');
    scene.text('You can\'t help be grin at her antics. You raise your hand until Mr. Vasilyev sees you.');
    // TODO-QSP: dynamic text: "Yes, Miss <<$pcs_lastname>>?" he asks.
    scene.text(`"Yes, Miss ${((s as any).pcs_lastname || '')}?" he asks.`);
    scene.text('"I need to use the restroom, sir," you reply.');
    scene.text('"You should have done that during your break," he says in a slightly exacerbated tone.');
    scene.text('"I really need to go! It\'s girl stuff."');
    scene.text('He sighs and looks at you suspiciously, but then waves towards the door. "Very well, but come back quickly please."');
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
        scene.img('images/locations/pavlovsk/school/classroom/bored.jpg');
        scene.text('Mr. Vasilyev has gone on one of his exhaustively long and in-depth explanations about one of the art styles, how it influenced society in all sorts of ways and in return was influenced by current events. You thought this class was about art, not history.');
        qspCall(s, 'willpower', 'exhib', 'self', 'medium');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Flash your breasts at Feofan', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Flash your breasts at Feofan', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A152', 'like');
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'flash', 'tits', 'indoors', 2, 1);
    qspCall(s, 'fame', 'pav', 'sex', 5);
    scene.img('images/locations/pavlovsk/school/classroom/flashboobs1.jpg');
    // TODO-QSP: dynamic text: You notice Feofan glancing over at you a few times and decide to play with him. ...
    scene.text(`You notice Feofan glancing over at you a few times and decide to play with him. The next time he looks over at you while Mr. Vasilyev's back is turned, you pull your shirt open and his mouth drops open in shock as he stares at your exposed ${((s as any).titsize || '')} breasts.`);
    scene.text('A few of the other students notice what you\'re doing; Anushka grins, Zinaida gives you a slightly disgusted look before turning away and Katja smiles at you. Svyatoslav tries to take a picture, but you close your shirt before he gets his phone up.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'art');
  } },
    ]);
  } },
          ]);
        }
        if (((s as any).pantyworntype ?? 0) === 'none') {
          qspCall(s, 'willpower', 'exhib', 'self', 'medium');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Flash ass', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Flash ass', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'flash', 'butt', 'indoors', 2, 1);
    qspCall(s, 'fame', 'pav', 'sex', 5);
    scene.img('images/locations/pavlovsk/school/classroom/flashbutt1.jpg');
    scene.text('Near the end of class, you get up and act like you\'re checking one of the books near Mr. Vasilyev\'s desk. After making sure Mr. Vasilyev isn\'t looking, you pull up the back of your skirt and expose your naked ass to anyone looking.');
    scene.text('Feofan\'s mouth drops open and he just stares at your naked ass, Anushka grins, Zinaida gives you a slightly disgusted look before turning away and Katja smiles at you. Svyatoslav tries to take a picture, but you drop your skirt back in place before he gets his phone up.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'art');
  } },
    ]);
  } },
            ]);
          }
        } else {
          qspCall(s, 'willpower', 'exhib', 'self', 'medium');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Get up and flash panty-clad ass', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Get up and flash panty-clad ass', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'flash', 'panties', 'indoors', 1);
    qspCall(s, 'fame', 'pav', 'sex', 3);
    scene.img('images/locations/pavlovsk/school/classroom/flashpantiesb\' + rand(1, 3) + \'.jpg');
    scene.text('Near the end of class, you get up and act like you\'re checking one of the books near Mr. Vasilyev\'s desk. After making sure Mr. Vasilyev isn\'t looking, you pull up the back of your skirt and expose your panty clad ass to anyone looking.');
    scene.text('Feofan\'s mouth drops open and he just stares at you, Anushka grins, Zinaida gives you a slightly disgusted look before turning away and Katja smiles at you. Svyatoslav tries to take a picture, but you drop your skirt back in place before he gets his phone up.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'art');
  } },
    ]);
  } },
            ]);
          }
          qspCall(s, 'willpower', 'exhib', 'self', 'medium');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Flash panties at desk', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Flash panties at desk', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'flash', 'panties', 'indoors', 1, 1);
    qspCall(s, 'fame', 'pav', 'sex', 2);
    scene.img('images/locations/pavlovsk/school/classroom/flashpantiesd\' + rand(1, 5) + \'.jpg');
    scene.text('While Mr. Vasilyev\'s back is turned, you spread your legs wide and pull up the front of your skirt while sitting at your desk, which shows off your panties to anyone that looks your way.');
    scene.text('A few of the other students notice what you\'re doing; Feofan\'s mouth drops open and he just stares at your panties, Anushka grins, Zinaida gives you a slightly disgusted look before turning away and Katja smiles at you. Svyatoslav tries to take a picture, but you close your legs before he gets his phone up.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'art');
  } },
    ]);
  } },
            ]);
          }
          qspCall(s, 'willpower', 'exhib', 'self', 'medium');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Get up and flash panties', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Get up and flash panties', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'flash', 'panties', 'indoors', 1, 1);
    qspCall(s, 'fame', 'pav', 'sex', 3);
    scene.img('images/locations/pavlovsk/school/classroom/flashpantiesf\' + rand(1, 3) + \'.jpg');
    scene.text('Near the end of class, you get up and act like you\'re checking one of the books near Mr. Vasilyev\'s desk. After making sure Mr. Vasilyev isn\'t looking, you turn like you\'re about to walk back to your seat, but instead pull up your skirt and expose your panties to anyone looking.');
    scene.text('Feofan\'s mouth drops open and he just stares at you, Anushka grins, Zinaida gives you a slightly disgusted look before turning away and Katja smiles at you. Svyatoslav tries to take a picture, but you drop your skirt back in place before he gets his phone up.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'art');
  } },
    ]);
  } },
            ]);
          }
        }
        if (((s as any).pantyworntype ?? 0) !== 'none') {
          qspCall(s, 'willpower', 'exhib', 'self', 'medium');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Remove panties', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Remove panties', handler: (st: GameState) => {
    (s as any).pantyworntype = 'none';
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'fame', 'pav', 'sex', 5);
    scene.img('images/locations/pavlovsk/school/classroom/removepanties.jpg');
    scene.text('While sitting at your desk feeling bored, you notice no one is looking at you, so you decide to take your panties off. You reach under your skirt and pull them down slowly. Once they get past your knees you open your legs slightly and them fall down around your ankles, but as you\'re bending down to pick them up, you realize that a few people have noticed. You quickly pick up your panties, stuff them in your purse and ignore the stares.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'art');
  } },
    ]);
  } },
            ]);
          }
        }
        scene.actions([
          { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'art');
  } },
          { label: 'Draw dick in margin', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/drawdick.jpg');
    scene.text('You grow bored and start doodling, which turns into you just drawing dicks, complete with balls, on the margin. You even share your handiwork with the girl sitting next to you when she glances over.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'art');
  } },
    ]);
  } },
          { label: 'Take selfie', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/takeselfie.jpg');
    scene.text('While looking at your phone you decide now would be a good time to take a selfie, but what kind of selfie should you take?');
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Take bare breasts selfie', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        { label: 'Take bare pussy selfie', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Take bare breasts selfie', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'arousal', 'flash', 5, 'exhibitionism');
    qspCall(s, 'fame', 'pav', 'sex', 3);
    qspCall(s, 'stat', '');
    (s as any).temp_phone_img = qspFunc(s, 'phone_selfies', 'selfie_image', 'school_classroom', 'tits');
    scene.img(`${((s as any).temp_phone_img || '')}`);
    scene.text('You think that taking a selfie of your bare bare breasts in the middle of class is a great idea. Maybe you\'ll share it, maybe not, but either way it should be fun and could be fun to send to someone and tease them with it. You glance around and when everyone is busy, you pull open your shirt and expose your breasts.');
    // TODO-QSP: dynamic text: You take a few quick selfies of your exposed breasts until you get one you reall...
    scene.text('You take a few quick selfies of your exposed breasts until you get one you really like. \' + iif(func(\'pcs_has_attr\', \'body_tits_at_least_F_cup\'), \'You fight with your blouse to cover yourself back up. Once it\'s finally back in place, you take a look around and see a few grinning faces among your classmates. \', \') + \'You save that one to your phone and delete the rest.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'art');
  } },
    ]);
  } },
        { label: 'Take bare pussy selfie', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'arousal', 'flash', 5, 'exhibitionism');
    qspCall(s, 'fame', 'pav', 'sex', 3);
    qspCall(s, 'stat', '');
    (s as any).temp_phone_img = qspFunc(s, 'phone_selfies', 'selfie_image', 'school_classroom', 'pussy');
    scene.img(`${((s as any).temp_phone_img || '')}`);
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.text('You feel the excitement growing inside you at the idea. Maybe you\'ll share it, maybe not, but either way it should be fun and could be fun to send to someone and tease them with it. You glance around and when everyone is busy, you pull open up your skirt and pull your panties aside until your pussy is exposed.');
      scene.text('You take a few quick selfies of your exposed pussy until you get one you really like. You save that one to your phone and delete the rest.');
    } else {
      scene.text('You can feel yourself getting wet as you imagine taking a selfie of yourself while not wearing your panties. Maybe you\'ll share it, maybe not, but either way it could be fun. You glance around and when everyone looks busy, you pull open up your skirt, exposing your already bare pussy.');
      scene.text('You take a few quick selfies of your pussy until you get one you really like. You save that one to your phone and delete the rest.');
    }
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'art');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Regular selfie', handler: (st: GameState) => {
    (s as any).temp_phone_img = qspFunc(s, 'phone_selfies', 'selfie_image', 'school_classroom');
    scene.img(`${((s as any).temp_phone_img || '')}`);
    scene.text('Just a cute selfie. Nothing too daring, yet it gives you something to do. You take several selfies of yourself until you find one you like, which you keep before deleting the rest. You manage to take them without Mr. Vasilyev even noticing.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'art');
  } },
    ]);
  } },
    ]);
  } },
          { label: 'Tease Svyatoslav', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/tease.jpg');
    scene.text('You get Svyatoslav\'s attention by smiling at him when he looks in your direction before you lean back in your chair and stretch your arms back over your head, causing your breasts to thrust out as you do. As he watches you, you bite your lower lip, looking all coy and seductive to him. Once you finish your stretch, you act innocent, like you didn\'t do anything.');
    // TODO-QSP: dynamic text: Svyatoslav glances around before leaning over. "Come on, don't be like that, <<$...
    scene.text(`Svyatoslav glances around before leaning over. "Come on, don't be like that, ${((s as any).pcs_nickname || '')}. Show me a little more."`);
    scene.text('Before you can decide what to do, Anushka, who watched it all, gets your attention.');
    scene.actions([
      { label: 'Anushka\'s suggestion', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/teaseb1.jpg');
    scene.text('Anushka leans over and whispers in your ear. "Flash him your tits," she says with a giggle.');
    scene.text('You\'re taken aback by her words. "Why would I do that?!"');
    scene.text('She grins. "To tease him of course, just like your stretch. Go on, do it! Or flash him your panties."');
    qspCall(s, 'willpower', 'exhib', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse to flash', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse to flash', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    scene.img('images/locations/pavlovsk/school/classroom/teaseb3.jpg');
    scene.text('You shake your head and Svyatoslav frowns, having heard or guessed what Anushka had tried to get you to do. After a few minutes, the class goes back to normal and you find yourself once more bored and waiting for the lesson to be over.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'art');
  } },
    ]);
  } },
      ]);
    }
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.actions([
        { label: 'Flash your panties', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A8', 'like');
    qspCall(s, 'flash', 'panties', 'indoors', 2, 1);
    qspCall(s, 'fame', 'pav', 'sex', 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/teasep1.jpg');
    scene.text('You turn towards Svyatoslav so you\'re sitting sideways while facing him. You pull your skirt up a little, showing off a glimpse of your panties, which makes him grin wide. He motions for you to pull your skirt up higher to give him a better view.');
    qspCall(s, 'willpower', 'exhib', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    scene.img('images/locations/pavlovsk/school/classroom/teaseb3.jpg');
    scene.text('You shake your head and Svyatoslav frowns as you pull your skirt back down and turn back to face the front of the class. After a few minutes, the class goes back to normal and you find yourself once more bored and waiting for class to be over.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'art');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Raise your skirt more', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A8', 'like');
    qspCall(s, 'flash', 'panties', 'indoors', 2, 1);
    qspCall(s, 'fame', 'pav', 'sex', 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/teasep2.jpg');
    scene.text('You pull your skirt up more so your panties are exposed to Svyatoslav, who grins wide as he stares at your panty covered pussy. You can tell he\'s hoping to see more by the way he\'s looking at you.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/teasep3.jpg');
    scene.text('Just then, he reaches over, grabs the front of your panties and tries to pull them down to get a look at your pussy. You grab his hand just in time to stop him from doing it.');
    // TODO-QSP: dynamic text: "Come on, <<$pcs_nickname>>, show me your pussy." he whispers as he keeps trying...
    scene.text(`"Come on, ${((s as any).pcs_nickname || '')}, show me your pussy." he whispers as he keeps trying to tug your panties down.`);
    qspCall(s, 'willpower', 'exhib', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    scene.img('images/locations/pavlovsk/school/classroom/teasep5.jpg');
    scene.text('You forcefully pull his hand away and Svyatoslav frowns as you pull your skirt back down and turn back to face the front of the class. After a few minutes, the class goes back to normal and you find yourself once more bored and waiting for the lesson to be over.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'art');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Show him your pussy', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A8', 'like');
    qspCall(s, 'fame', 'pav', 'sex', 5);
    qspCall(s, 'flash', 'pussy', 'indoors', 3, 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/teasep4.jpg');
    scene.text('"Well let go and I\'ll show you," you tell him with a sly smile. He pauses, but then lets go and keeps watching. You lean back and lift one leg as you reach down and pull your panties aside to reveal your pussy to Svyatoslav and anyone else who happens to look this way. Anushka tries to sneak a peek as well as you see the bulge growing in Svyatoslav\'s pants.');
    scene.actions([
      { label: 'Put your pussy away', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/teasep5.jpg');
    scene.text('After a few minutes, you pull your panties back in place, pull your skirt back down and turn to face the front of the class again. Svyatoslav looks crestfallen, obviously hoping for it to have lasted longer, but you ignore his pleading looks and look to the front of the class. The thrill of what you just did keeps the rest of class from being boring.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'art');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Flash your breasts', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A8', 'like');
    qspCall(s, 'flash', 'tits', 'indoors', 2, 1);
    qspCall(s, 'fame', 'pav', 'sex', 5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/teaseb2.jpg');
    scene.text('You glance around and wait until no one but the two of them are looking before you lean back and pull up your shirt to expose your bare breasts. Your nipples get hard from the excitement as Svyatoslav stares at your bare breasts, looking almost entranced by them.');
    scene.actions([
      { label: 'Put them away', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/teaseb3.jpg');
    scene.text('You pull your shirt down quickly when another student looks over, which causes Anushka to giggle and Svyatoslav to shake his head. Several other students look over, as if they\'ve just realized that they\'ve missed something. You ignore their looks, Svyatoslav\'s stare and Anushka\'s giggles and wait for class to end.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'art');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
        ]);
      }
    }
  } },
    { label: 'Daydream', handler: (st: GameState) => {
    (s as any).daydream = Math.floor(Math.random() * 4) + 1;
    if (((s as any).daydream ?? 0) === 1) {
      scene.img('images/locations/pavlovsk/school/classroom/caughtsleeping.jpg');
      scene.text('Today\'s lesson doesn\'t particularly interest you and you find yourself drifting off constantly. After a while, you notice Mr. Vasilyev has stopped talking and is looking at you intently, asking you to pay attention. This is apparently the third time he\'s asked; you missed the first two while you were lost in your own thoughts. The whole class is looking at you.');
      scene.text('Mr. Vasilyev tries to convince you of the importance of today\'s lesson. "Please pay attention because this is very important. Today\'s topic is going to be on the exam."');
      qspCall(s, 'willpower', 'misc', 'self', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Be a smart ass', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Be a smart ass', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    (s as any).demerit = ((s as any).demerit ?? 0) + (1);
    ((s as any).grupvalue = (s as any).grupvalue ?? {})[1] = ((s as any).grupvalue[1] ?? 0) + (1);
    ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = ((s as any).grupvalue[3] ?? 0) - (1);
    scene.img('images/locations/pavlovsk/school/classroom/payattention.jpg');
    scene.text('"Oh please, if you go on and on about the history of art again, I might actually fall asleep!" you answer boldly.');
    scene.text('The whole class is stunned into silence at you insulting Mr. Vasilyev, who just stares at you unimpressed with his arms folded.');
    // TODO-QSP: dynamic text: "I won't tolerate such disrespectful behavior in my class, Miss <<$pcs_lastname>...
    scene.text(`"I won't tolerate such disrespectful behavior in my class, Miss ${((s as any).pcs_lastname || '')}! Now get out and report to the principal now!"`);
    qspCall(s, 'willpower', 'misc', 'self', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Don\'t leave the classroom', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Don\'t leave the classroom', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    (s as any).demerit = ((s as any).demerit ?? 0) + (1);
    ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = ((s as any).grupvalue[3] ?? 0) - (1);
    scene.img('images/locations/pavlovsk/school/classroom/payattention.jpg');
    scene.text('"What good would that do? I\'m not interrupting your class. Go back to your boring lecture and leave me alone!" you answer brashly, having no intention of getting up.');
    // TODO-QSP: dynamic text: "Miss <<$pcs_lastname>>, you will get out of my class NOW!" he demands while poi...
    scene.text(`"Miss ${((s as any).pcs_lastname || '')}, you will get out of my class NOW!" he demands while pointing at the door.`);
    scene.text('You scoff and begrudgingly leave the class.');
    scene.actions([
      { label: 'Go to the principal\'s office', goto: ['gschool_office', 'principal'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Go to principal\'s office', handler: (st: GameState) => {
    (st as any).demerit = ((st as any).demerit ?? 0) + (10 + ((st as any).school_bunk ?? 0) * 5);
  }, goto: ['gschool_office', 'principal'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Reluctantly pay attention', handler: (st: GameState) => {
    qspCall(s, 'exp_gain', 'artskls', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'exp_gain', 'agil', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'grades', 'class_activity_attributes', 'school', 'art', ((s as any).pcs_intel ?? 0));
    scene.img('images/locations/pavlovsk/school/bathroom/angryteacher.jpg');
    scene.text('You roll your eyes at him when he turns his back and you sit through the rest of the lesson in silence. Despite your best efforts, you struggle to pay attention and don\'t learn anything.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'art');
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).daydream ?? 0) === 2) {
        (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) + (Math.floor(Math.random() * 3) + 1);
        if (((s as any).class ?? 0)?.['school_art_grade'] >= 80) {
          scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
          scene.text('You\'re far too tired to pay attention in class today. You don\'t even know what the lesson is about as you keep dozing off.');
          scene.text('You\'re snapped back to consciousness when you hear Mr. Vasilyev call your name. Everyone looks at you expectantly, and you realize that you were just asked a question about the topic.');
          scene.text('Taking your best guess at what the teacher might be asking, the entire class is shocked as you somehow manage to produce the correct answer, since it must\'ve been obvious to everyone that you were sleeping.');
          scene.text('"Very good, but try and keep your head up during class if you don\'t mind," Mr. Vasilyev replies.');
        } else {
          scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
          scene.text('You\'re far too tired to pay attention in class today. You don\'t even know what the lesson is about as you keep dozing off.');
          scene.text('You\'re snapped back to consciousness when you hear Mr. Vasilyev call your name. Everyone is looking at you expectantly, and you realize that you were just asked a question about the topic.');
          scene.text('You take your best guess at what they might be asking and some of the other students snicker when you say something that\'s obviously wrong. Mr. Vasilyev chides you for sleeping in class and asks for someone else to inform you of the correct answer.');
          scene.text('It was an embarrassing experience, but the sudden adrenaline surge helps you to stay awake for the rest of the period.');
        }
        scene.actions([
          { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'art');
  } },
        ]);
      } else {
        (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) + (Math.floor(Math.random() * 4) + 2);
        scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
        scene.text('You fell asleep and the bell wakes you up.');
        scene.actions([
          { label: 'Leave class', goto: ['gschool_lessons', 'short_break'] },
        ]);
      }
    }
  } },
    { label: 'Play with your phone', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/phone.jpg');
    scene.text('You take out your phone and start playing a game, hoping the boring lesson will be over soon.');
    if ((Math.floor(Math.random() * 2) + 0) > 0) {
      scene.text('You play on your phone for the duration of class. You play a few games and text a few friends, all under Mr. Vasilyev\'s oblivious nose.');
      scene.actions([
        { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'art');
  } },
      ]);
    } else {
      scene.img('images/locations/pavlovsk/school/classroom/caughtonphone.jpg');
      scene.text('You hear Mr. Vasilyev clear his throat and glance up to see him looking at you sternly.');
      qspCall(s, 'willpower', 'misc', 'self', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Keep using your phone', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Keep using your phone', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    ((s as any).grupvalue = (s as any).grupvalue ?? {})[1] = ((s as any).grupvalue[1] ?? 0) + (1);
    ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = ((s as any).grupvalue[3] ?? 0) - (1);
    (s as any).demerit = ((s as any).demerit ?? 0) + (5);
    scene.img('images/locations/pavlovsk/school/classroom/caughtonphone.jpg');
    scene.text('You ignore him and keep using your phone as he walks over to your desk.');
    qspCall(s, 'willpower', 'exhib', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Take photos under your skirt', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
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
    } else {
      qspCall(s, 'flash', 'pussy', 'indoors', 2, 1);
      scene.img('images/locations/pavlovsk/school/classroom/literature/nopanties_upskirt.jpg');
    }
    scene.text('You decide to have some fun. You quickly slide the phone between your legs and snap some photos under your skirt.');
    scene.text('Mr. Vasilyev arrives at your desk. "Unless you\'re listening to some music, then what is more important than paying attention in my class? Hand it over."');
    scene.text('"Wouldn\'t you like to know!" you tease. You hand over your phone with the last picture you took still on the screen.');
    scene.text('You hold in a laugh when you see the wide eyed and shocked look on his face when he sees what\'s on the screen. He blushes a bright red as he hastily turns the screen off and returns to the front of the class, where he composes himself and gets ready to continue the lesson.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      ]);
    }
    if (((s as any).braworntype ?? 0) !== 'none') {
      qspCall(s, 'willpower', 'misc', 'self', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Hide the phone in your bra', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Hide the phone in your bra', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'misc', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).demerit = ((s as any).demerit ?? 0) + (5);
    scene.img('images/locations/pavlovsk/school/classroom/nophone.jpg');
    scene.text('You deftly shove the phone in your bra, and smile fiendishly as you see the flabbergasted look on your teacher\'s face.');
    scene.text('You pretend it\'s a perfectly normal place to store your phone and mock him in a cute voice. "Is there a problem, Mr. Vasilyev? Go ahead, take my phone if it\'s not allowed." You thrust your chest forward, the outline of your phone visible through the fabric.');
    // TODO-QSP: dynamic text: Mr. Vasilyev is stunned by your move. "You know that this isn't appropriate, Mis...
    scene.text(`Mr. Vasilyev is stunned by your move. "You know that this isn't appropriate, Miss ${((s as any).pcs_lastname || '')}. Please hand it over." You have no intention of doing so and wiggle your chest a bit. He soon admits defeat and returns to his lesson as you pull your phone back out and return to your game.`);
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Hand over the phone', handler: (st: GameState) => {
    ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = ((s as any).grupvalue[3] ?? 0) + (1);
    scene.img('images/locations/pavlovsk/school/classroom/takephone.jpg');
    scene.text('You decide it\'s not worth it and silently hand your phone to Mr. Vasilyev.');
    scene.text('He tuts and shakes his head before walking back to the front of the class. "You can have it back after class. Now pay attention please."');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'art');
  } },
    ]);
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Put your phone away', handler: (st: GameState) => {
    ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = ((s as any).grupvalue[3] ?? 0) + (1);
    scene.img('images/locations/pavlovsk/school/classroom/bored.jpg');
    scene.text('You decide not to aggravate the situation and put your phone away. Mr. Vasilyev looks at you gratefully before continuing the lesson.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev3', 'art');
  } },
    ]);
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterShop(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'hndiwrk', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'exp_gain', 'agil', Math.floor(Math.random() * 2) + 0);
  qspCall(s, 'grades', 'attend_class', 'school', 'shop');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/classroom/classshop.jpg');
  scene.text('You sit in the classroom and listen to Mr. Kuznetsov\'s monotonous droning, doing your best not to fall asleep.');
  qspCall(s, 'willpower', 'chore', 'self', ((((s as any).grupTipe ?? 0) === 4  &&  ((s as any).trait_vars ?? 0)?.['academic'] === 0) ? ('hard') : (((((s as any).trait_vars ?? 0)?.['academic'] > 0) ? ('easy') : ('medium')))));
  if (((s as any).trait_vars ?? 0)?.['academic'] === 2) {
    (s as any).will_cost = ((s as any).will_cost ?? 0) / 2;
  } else {
    if (((s as any).trait_vars ?? 0)?.['academic'] >= 3) {
      (s as any).will_cost = 0;
    }
  }
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Listen attentively to Mr. Kuznetsov', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Listen attentively to Mr. Kuznetsov', handler: (st: GameState) => {
    if (((s as any).will_cost ?? 0) > 0) {
      qspCall(s, 'willpower', 'pay', 'self', 'chore');
    }
    ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = ((s as any).grupvalue[3] ?? 0) + (1);
    qspCall(s, 'grades', 'class_activity_attributes', 'school', 'shop', ((s as any).pcs_intel ?? 0));
    qspCall(s, 'exp_gain', 'hndiwrk', Math.floor(Math.random() * 2) + 1);
    qspCall(s, 'exp_gain', 'agil', Math.floor(Math.random() * 2) + 0);
    ((s as any).trait_vars = (s as any).trait_vars ?? {})['academic_lessons'] = ((s as any).trait_vars['academic_lessons'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/attention.jpg');
    scene.text('You listen attentively to Mr. Kuznetsov for the duration of the class. Today\'s lesson was interesting and informative, and you feel you learned something from taking part.');
    scene.actions([
      { label: 'Ask a question about the lesson', handler: (st: GameState) => {
    qspCall(s, 'grades', 'class_activity_skill', 'school', 'shop', ((s as any).pcs_hndiwrk ?? 0));
    qspCall(s, 'exp_gain', 'hndiwrk', Math.floor(Math.random() * 2) + 1);
    qspCall(s, 'exp_gain', 'agil', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/class1.jpg');
    scene.text('Mr. Kuznetsov nods approvingly, always happy to see his students engaged in his class. He happily spends some extra time explaining the topic again, and answers any extra questions you might have. You feel smarter, thoroughly understanding today\'s lessons now.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', 'shop');
  } },
    ]);
  } },
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', 'shop');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Don\'t pay attention in class', handler: (st: GameState) => {
    (s as any).bored = Math.floor(Math.random() * 4) + 1;
    if (((s as any).bored ?? 0) === 1  &&  ((s as any).npc_rel ?? 0)?.['A155'] >= 50  &&  ((s as any).pcs_hotcat ?? 0) >= 6  &&  ((s as any).pantyworntype ?? 0) !== 'none') {
      scene.img('images/characters/pavlovsk/school/girl/anushka/sex/school/classroom1.jpg');
      scene.text('You\'re bored out of your mind and can barely pretend to be paying attention. You notice Anushka watching you out of the corner of your eyes for a few minutes before she stops and starts writing something on a piece of paper.');
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
    scene.text('Her answer to your question is to put her fingers in a V shape on her mouth and stick her tongue between them, making the universal sign for eating pussy. You\'re surprised for a moment, but then you remember that this is Anushka. If anyone would ask someone to leave in the middle of class for sex, it would be her.');
    qspCall(s, 'willpower', 'cuni', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
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
    qspCall(st, 'gschool_lessonsev2', 'shop');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Ask to go to the restroom', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/school/classroom5.jpg');
    scene.text('You can\'t help be grin at her antics. You raise your hand until Mr. Kuznetsov sees you.');
    // TODO-QSP: dynamic text: "What is it, <<$pcs_lastname>>?" he asks.
    scene.text(`"What is it, ${((s as any).pcs_lastname || '')}?" he asks.`);
    scene.text('"I need to use the restroom, sir," you reply.');
    scene.text('"You should have done that during your break," he says in a slightly exacerbated tone.');
    scene.text('"I really need to go! It\'s girl stuff."');
    scene.text('He sighs and looks at you suspiciously, but then waves towards the door. "Very well, but come back quickly please."');
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
      scene.img('images/locations/pavlovsk/school/classroom/bored.jpg');
      scene.text('Mr. Kuznetsov is lecturing on safety, but it keeps getting more and more boring. You look around for some kind of distraction.');
      scene.text('You soon settle on messing around with a few of the tools when his back is turned, an idea that a few of your classmates have also resorted to doing to pass the time.');
      qspCall(s, 'willpower', 'exhib', 'self', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Flash your breasts at Fedor', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Flash your breasts at Fedor', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A5', 'like');
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'flash', 'tits', 'indoors', 2, 1);
    qspCall(s, 'fame', 'pav', 'sex', 5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/flashboobs1.jpg');
    // TODO-QSP: dynamic text: You notice Fedor glancing over at you a few times and decide to play with him. T...
    scene.text(`You notice Fedor glancing over at you a few times and decide to play with him. The next time he looks over at you while Mr. Kuznetsov's back is turned, you pull your shirt open and his mouth drops open in shock as he stares at your exposed ${((s as any).titsize || '')} breasts.`);
    scene.text('A few of the other students notice what you\'re doing; Anushka grins, Viktoria gives you a slightly disgusted look before turning away, Vitek and Pauline smile about it and Dimka starts texting on his phone, likely telling everyone in school what you just did. Dan tries to take a picture, but you close your shirt before he gets his phone up.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', 'shop');
  } },
    ]);
  } },
        ]);
      }
      if (((s as any).pantyworntype ?? 0) === 'none') {
        qspCall(s, 'willpower', 'exhib', 'self', 'medium');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Flash ass', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Flash ass', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'flash', 'butt', 'indoors', 2, 1);
    qspCall(s, 'fame', 'pav', 'sex', 5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/flashbutt1.jpg');
    scene.text('Near the end of class, you get up and act like you\'re checking one of the books near Mr. Kuznetsov\'s desk. After making sure Mr. Kuznetsov isn\'t looking, you pull up the back of your skirt and expose your naked ass to anyone looking.');
    scene.text('Fedor\'s mouth drops open and he just stares at your naked ass, Anushka grins, Viktoria gives you a slightly disgusted look before turning away, Vitek and Pauline smile about it and Dimka starts texting on his phone, likely telling everyone in school what you just did. Dan tries to take a picture, but you drop your skirt back in place before he gets his phone up.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', 'shop');
  } },
    ]);
  } },
          ]);
        }
      } else {
        qspCall(s, 'willpower', 'exhib', 'self', 'medium');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Get up and flash panty-clad ass', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Get up and flash panty-clad ass', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'flash', 'panties', 'indoors', 1, 1);
    qspCall(s, 'fame', 'pav', 'sex', 3);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/flashpantiesb\' + rand(1, 3) + \'.jpg');
    scene.text('Near the end of class, you get up and act like you\'re checking one of the books near Mr. Kuznetsov\'s desk. After making sure Mr. Kuznetsov isn\'t looking, you pull up the back of your skirt and expose your panty-clad ass to anyone looking.');
    scene.text('Fedor\'s mouth drops open and he just stares at you, Anushka grins, Viktoria gives you a slightly disgusted look before turning away, Vitek and Pauline smile about it and Dimka starts texting on his phone, likely telling everyone in school what you just did. Dan tries to take a picture, but you drop your skirt back in place before he gets his phone up.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', 'shop');
  } },
    ]);
  } },
          ]);
        }
        qspCall(s, 'willpower', 'exhib', 'self', 'medium');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Flash panties at desk', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Flash panties at desk', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'flash', 'panties', 'indoors', 1, 1);
    qspCall(s, 'fame', 'pav', 'sex', 2);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/flashpantiesd\' + rand(1, 5) + \'.jpg');
    scene.text('While Mr. Kuznetsov\'s back is turned, you spread your legs wide and pull up the front of your skirt while sitting at your desk, which shows off your panties to anyone that looks your way.');
    scene.text('Fedor\'s mouth drops open and he just stares at your panties, Anushka grins, Viktoria gives you a slightly disgusted look before turning away, Vitek and Pauline smile about it and Dimka starts texting on his phone, likely telling everyone in school what you just did. A couple of the other students notice what you are doing. Dan tries to take a picture, but you close your legs before he gets his phone up.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', 'shop');
  } },
    ]);
  } },
          ]);
        }
        qspCall(s, 'willpower', 'exhib', 'self', 'medium');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Get up and flash panties', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Get up and flash panties', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'flash', 'panties', 'indoors', 1, 1);
    qspCall(s, 'fame', 'pav', 'sex', 3);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/flashpantiesf\' + rand(1, 3) + \'.jpg');
    scene.text('Near the end of class, you get up and act like you\'re checking one of the books near Mr. Kuznetsov\'s desk. After making sure Mr. Kuznetsov isn\'t looking, you turn like you\'re about to walk back to your seat, but instead pull up your skirt and expose your panties to anyone looking.');
    scene.text('Fedor\'s mouth drops open and he just stares at you, Anushka grins, Viktoria gives you a slightly disgusted look before turning away, Vitek and Pauline smile about it and Dimka starts texting on his phone, likely telling everyone in school what you just did. Dan tries to take a picture, but your drop you skirt back in place before he gets his phone up.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', 'shop');
  } },
    ]);
  } },
          ]);
        }
      }
      if (((s as any).pantyworntype ?? 0) !== 'none') {
        qspCall(s, 'willpower', 'exhib', 'self', 'medium');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Remove panties', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Remove panties', handler: (st: GameState) => {
    (s as any).pantyworntype = 'none';
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'fame', 'pav', 'sex', 5);
    scene.img('images/locations/pavlovsk/school/classroom/removepanties.jpg');
    scene.text('While sitting at your desk feeling bored, you notice no one is looking at you, so you decide to take your panties off. You reach under your skirt and pull them down slowly. Once they get past your knees, you open your legs slightly and your panties fall down around your ankles.');
    scene.text('You step out of them, but as you\'re bending over to pick them up, you realize that people have noticed. You quickly pick up your panties, stuff them in your purse and ignore the stares.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', 'shop');
  } },
    ]);
  } },
          ]);
        }
      }
      scene.actions([
        { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', 'shop');
  } },
        { label: 'Draw dick in margin', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/drawdick.jpg');
    scene.text('You get bored start doodling to pass the time, which turns into you drawing dicks, complete with balls, on the margins of your notebook. You even share your handiwork with the girl sitting next to you when she glances over.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', 'shop');
  } },
    ]);
  } },
        { label: 'Take selfie', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/takeselfie.jpg');
    scene.text('While looking at your phone you decide now would be a good time to take a selfie, but what kind of selfie should you take?');
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Take bare breasts selfie', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        { label: 'Take bare pussy selfie', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Take bare breasts selfie', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'arousal', 'flash', (-5), 'exhibitionism');
    qspCall(s, 'fame', 'pav', 'sex', 3);
    qspCall(s, 'stat', '');
    (s as any).temp_phone_img = qspFunc(s, 'phone_selfies', 'selfie_image', 'school_classroom', 'tits');
    scene.img(`${((s as any).temp_phone_img || '')}`);
    scene.text('Feeling particularly brash, you decide taking a selfie of your bare breasts in the middle of class is a great idea. Maybe you\'ll share it, maybe not, but either way it should be fun and could be fun to send to someone and tease them with it. You glance around and when everyone is busy, you pull open your shirt and expose your breasts.');
    // TODO-QSP: dynamic text: You take a few quick selfies of your exposed breasts until you get one you reall...
    scene.text('You take a few quick selfies of your exposed breasts until you get one you really like. \' + iif(func(\'pcs_has_attr\', \'body_tits_at_least_F_cup\'), \'You fight with your blouse to cover yourself back up. Once it\'s finally back in place, you take a look around and see a few grinning faces among your classmates. \', \') + \'You save that one to your phone and delete the rest.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', 'shop');
  } },
    ]);
  } },
        { label: 'Take bare pussy selfie', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'arousal', 'flash', (-5), 'exhibitionism');
    qspCall(s, 'fame', 'pav', 'sex', 3);
    qspCall(s, 'stat', '');
    (s as any).temp_phone_img = qspFunc(s, 'phone_selfies', 'selfie_image', 'school_classroom', 'pussy');
    scene.img(`${((s as any).temp_phone_img || '')}`);
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.text('You can feel the excitement in your pussy as you imagine yourself baring it in class to take a selfie of it. Maybe you\'ll share it, maybe not, but either way it should be fun and could be fun to send to someone and tease them with it. You glance around and when everyone is busy, you pull open up your skirt and pull your panties aside until your pussy is exposed.');
      scene.text('You take a few quick selfies of your exposed pussy until you get one you really like. You save that one to your phone and delete the rest.');
    } else {
      scene.text('You can feel yourself getting wet as you imagine taking a selfie of yourself while not wearing your panties. Maybe you\'ll share it, maybe not, but either way it could be fun. You glance around and when everyone looks busy, you pull open up your skirt, exposing your already bare pussy.');
      scene.text('You take a few quick selfies of your pussy until you get one you really like. You save that one to your phone and delete the rest.');
    }
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', 'shop');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Regular selfie', handler: (st: GameState) => {
    (s as any).temp_phone_img = qspFunc(s, 'phone_selfies', 'selfie_image', 'school_classroom');
    scene.img(`${((s as any).temp_phone_img || '')}`);
    scene.text('Just a cute selfie. Nothing too daring, yet it gives you something to do. You take several selfies of yourself until you find one you like, which you keep and delete the rest. You manage to take them without Mr. Kuznetsov even noticing.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', 'shop');
  } },
    ]);
  } },
    ]);
  } },
        { label: 'Tease Dan', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/tease.jpg');
    scene.text('You get Dan\'s attention by smiling at him when he looks in your direction before you lean back in your chair and stretch your arms back over your head, causing your breasts to thrust out as you do. As he watches you, you bite your lower lip, looking all coy and seductive to him. Once you finish your stretch, you act innocent, like you didn\'t do anything.');
    // TODO-QSP: dynamic text: Dan glances around before leaning over. "Come on, don't be like that, <<$pcs_nic...
    scene.text(`Dan glances around before leaning over. "Come on, don't be like that, ${((s as any).pcs_nickname || '')}. Show me a little more."`);
    scene.text('Before you can decide what to do, Anushka, who watched it all, gets your attention.');
    scene.actions([
      { label: 'Anushka\'s suggestion.', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/teaseb1.jpg');
    scene.text('Anushka leans over and whispers in your ear. "Flash him your tits," she says with a giggle.');
    scene.text('You\'re taken aback by her words. "Why would I do that?!"');
    scene.text('She grins. "To tease him of course, just like your stretch. Go on, do it! Or flash him your panties."');
    qspCall(s, 'willpower', 'exhib', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse to flash', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse to flash', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    scene.img('images/locations/pavlovsk/school/classroom/teaseb3.jpg');
    scene.text('You shake your head and Dan frowns, having heard or guessed what Anushka had tried to get you to do. After a few minutes, the class goes back to normal and you find yourself once more bored and waiting for the lesson to be over.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', 'shop');
  } },
    ]);
  } },
      ]);
    }
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.actions([
        { label: 'Flash your panties', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A10', 'like');
    qspCall(s, 'flash', 'panties', 'indoors', 2, 1);
    qspCall(s, 'fame', 'pav', 'sex', 1);
    scene.img('images/locations/pavlovsk/school/classroom/teasep1.jpg');
    scene.text('You turn towards Dan so you\'re sitting sideways while facing him and pull your skirt up a little, showing off a glimpse of your panties, which makes him grin wide. He motions for you to pull your skirt up higher to give him a better view.');
    qspCall(s, 'willpower', 'exhib', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    scene.img('images/locations/pavlovsk/school/classroom/teaseb3.jpg');
    scene.text('You shake your head and Dan frowns as you pull your skirt back down and turn back to face the front of the class. After a few minutes, the class goes back to normal and you find yourself once more bored and waiting for the lesson to be over.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', 'shop');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Raise your skirt more', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A10', 'like');
    qspCall(s, 'fame', 'pav', 'sex', 1);
    scene.img('images/locations/pavlovsk/school/classroom/teasep2.jpg');
    scene.text('You pull your skirt up more so your panties are exposed to Dan, who grins wide as he stares at your panty covered pussy. You can tell he\'s hoping to see more by the way he\'s looking at you.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/teasep3.jpg');
    scene.text('Just then, he reaches over, grabs the front of your panties and tries to pull them down to get a look at your pussy. You grab his hand just in time to stop him from doing it.');
    // TODO-QSP: dynamic text: "Come on, <<$pcs_nickname>>, show me your pussy," he whispers as he keeps trying...
    scene.text(`"Come on, ${((s as any).pcs_nickname || '')}, show me your pussy," he whispers as he keeps trying to tug your panties down.`);
    qspCall(s, 'willpower', 'exhib', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    scene.img('images/locations/pavlovsk/school/classroom/teasep5.jpg');
    scene.text('You forcefully pull his hand away and Dan frowns as you pull your skirt back down and turn back to face the front of the class. After a few minutes, the class goes back to normal and you find yourself once more bored and waiting for the lesson to be over.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', 'shop');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Show him your pussy', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A10', 'like');
    qspCall(s, 'fame', 'pav', 'sex', 5);
    qspCall(s, 'flash', 'pussy', 'indoors', 3, 1);
    scene.img('images/locations/pavlovsk/school/classroom/teasep4.jpg');
    scene.text('"Well let go and I\'ll show you," you tell him with a sly smile. He pauses, but then lets go and keeps watching. You lean back and lift one leg as you reach down and pull your panties aside to reveal your pussy to Dan and anyone else who happens to look this way. Anushka tries to sneak a peek as well. You can see the bulge growing in Dan\'s pants from here.');
    scene.actions([
      { label: 'Put your pussy away', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/teasep5.jpg');
    scene.text('After a few minutes, you pull your panties back in place, pull your skirt back down and turn to face the front of the class again. Dan looks crestfallen, obviously hoping for it to have lasted longer, but you ignore his pleading looks and look to the front of the class. The thrill of what you just did keeps the rest of class from being boring.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', 'shop');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Flash your breasts', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A10', 'like');
    qspCall(s, 'flash', 'tits', 'indoors', 2, 1);
    qspCall(s, 'fame', 'pav', 'sex', 5);
    scene.img('images/locations/pavlovsk/school/classroom/teaseb2.jpg');
    scene.text('You glance around and wait until no one but the two of them are looking before you lean back and pull up your shirt to expose your bare breasts. Your nipples get hard from the excitement as Dan stares at your bare breasts, looking almost entranced by them.');
    scene.actions([
      { label: 'Put them away', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/teaseb3.jpg');
    scene.text('You pull your shirt down quickly when another student looks over, which causes Anushka to giggle and Dan to shake his head. Several other students look over, as if they\'ve realized they\'ve missed something. You ignore their looks, Dan\'s stare and Anushka\'s giggles and wait for class to end.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', 'shop');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
    { label: 'Daydream', handler: (st: GameState) => {
    (s as any).daydream = Math.floor(Math.random() * 4) + 1;
    if (((s as any).daydream ?? 0) === 1) {
      scene.img('images/locations/pavlovsk/school/classroom/caughtsleeping.jpg');
      scene.text('Today\'s lesson doesn\'t particularly interest you and you find yourself drifting off constantly. After a while, you notice Mr. Kuznetsov has stopped talking and is looking at you intently, asking you to pay attention. This is apparently the third time he\'s asked; you missed the first two while you were lost in your own thoughts. The whole class is looking at you.');
      // TODO-QSP: dynamic text: Mr. Kuznetsov tries to convince you of the importance of today's lesson. "Pay at...
      scene.text(`Mr. Kuznetsov tries to convince you of the importance of today's lesson. "Pay attention, Miss ${((s as any).pcs_lastname || '')}, this is very important. Today's topic is going to be on the exam."`);
      qspCall(s, 'willpower', 'misc', 'self', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Be a smart ass', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Be a smart ass', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    (s as any).demerit = ((s as any).demerit ?? 0) + (1);
    ((s as any).grupvalue = (s as any).grupvalue ?? {})[1] = ((s as any).grupvalue[1] ?? 0) + (1);
    ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = ((s as any).grupvalue[3] ?? 0) - (1);
    scene.img('images/locations/pavlovsk/school/classroom/bored.jpg');
    scene.text('"Do I really have to sit here and listen to you drone on and on about tools?" you answer boldly.');
    scene.text('The whole class bursts into loud laughter and Mr. Kuznetsov has a rough time getting everyone to quieten down.');
    // TODO-QSP: dynamic text: "Miss <<$pcs_lastname>>, you will see me after class!" he says in a stern voice....
    scene.text(`"Miss ${((s as any).pcs_lastname || '')}, you will see me after class!" he says in a stern voice. Maybe you shouldn't have mouthed off to him. He is the assistant Headmaster after all.`);
    scene.actions([
      { label: 'Wait for the end of class', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/ruslan/sex/pshop1.jpg');
    scene.text('At the end of class, you walk up to Mr. Kuznetsov\'s desk. "You wanted to see me?"');
    scene.text('He glares up at you. "Come to my office after school so we can talk about this. If not, I\'ll be calling your mother to school tomorrow."');
    scene.text('He then dismisses you without another word.');
    (s as any).Kuznetsov_punishment = 1;
    scene.actions([
      { label: 'Go to next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Reluctantly pay attention', handler: (st: GameState) => {
    ((s as any).grupvalue = (s as any).grupvalue ?? {})[1] = ((s as any).grupvalue[1] ?? 0) - (1);
    ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = ((s as any).grupvalue[3] ?? 0) + (1);
    qspCall(s, 'grades', 'class_activity_attributes', 'school', 'shop', ((s as any).pcs_intel ?? 0));
    qspCall(s, 'exp_gain', 'hndiwrk', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'exp_gain', 'agil', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/bathroom/angryteacher.jpg');
    scene.text('You roll your eyes at him when he turns his back and sit through the rest of the lesson in silence. Despite your best efforts, you struggle to pay attention and don\'t learn anything.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', 'shop');
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).daydream ?? 0) === 2) {
        (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) + (Math.floor(Math.random() * 3) + 1);
        if (((s as any).class ?? 0)?.['school_shop_grade'] >= 80) {
          scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
          scene.text('You\'re far too tired to pay attention in class today. You don\'t even know what the lesson is about as you keep dozing off.');
          scene.text('You\'re snapped back to consciousness when you hear Mr. Kuznetsov call your name. Everyone looks at you expectantly, and you realize that you were just asked a question about the topic.');
          scene.text('Taking your best guess at what the teacher might be asking, the entire class is shocked as you somehow manage to produce the correct answer, since it must\'ve been obvious to everyone that you were sleeping.');
          scene.text('"Correct answer, but keep your head up and pay attention," Mr. Kuznetsov replies.');
        } else {
          qspCall(s, 'mood', 'lower', 'tiny');
          qspCall(s, 'stat', '');
          scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
          scene.text('You\'re far too tired to pay attention in class today. You don\'t even know what the lesson is about as you keep dozing off.');
          scene.text('You\'re snapped back to consciousness when you hear Mr. Kuznetsov call your name. Everyone is looking at you expectantly, and you realize that you were just asked a question about the topic.');
          scene.text('You take your best guess at what they might be asking and some of the other students snicker when you say something that\'s obviously wrong. Mr. Kuznetsov chides you for sleeping in class and asks for someone else to inform you of the correct answer.');
          scene.text('It was an embarrassing experience, but the sudden adrenaline surge helps you to stay awake for the rest of the period.');
        }
        scene.actions([
          { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', 'shop');
  } },
        ]);
      } else {
        (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) + (Math.floor(Math.random() * 4) + 2);
        scene.img('images/locations/pavlovsk/school/classroom/sleeping.jpg');
        scene.text('You fell asleep and the bell wakes you up.');
        scene.actions([
          { label: 'Leave class', goto: ['gschool_lessons', 'short_break'] },
        ]);
      }
    }
  } },
    { label: 'Play with your phone', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/phone.jpg');
    scene.text('You take out your phone and start playing a game, hoping the boring lesson will be over soon.');
    if ((Math.floor(Math.random() * 2) + 0) > 0) {
      scene.text('You play on your phone for the duration of class. You play a few games and text a few friends, all under Mr. Kuznetsov\'s oblivious nose.');
      scene.actions([
        { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', 'shop');
  } },
      ]);
    } else {
      scene.img('images/locations/pavlovsk/school/classroom/caughtonphone.jpg');
      scene.text('You hear Mr. Kuznetsov clear his throat and glance up to see him looking at you sternly.');
      qspCall(s, 'willpower', 'misc', 'self', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Keep using your phone', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Keep using your phone', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    ((s as any).grupvalue = (s as any).grupvalue ?? {})[1] = ((s as any).grupvalue[1] ?? 0) + (1);
    ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = ((s as any).grupvalue[3] ?? 0) - (1);
    (s as any).demerit = ((s as any).demerit ?? 0) + (5);
    scene.img('images/locations/pavlovsk/school/classroom/caughtonphone.jpg');
    scene.text('You ignore him and keep using your phone as he walks over to your desk.');
    qspCall(s, 'willpower', 'exhib', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Take photos under your skirt', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
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
    } else {
      qspCall(s, 'flash', 'pussy', 'indoors', 2, 1);
      scene.img('images/locations/pavlovsk/school/classroom/literature/nopanties_upskirt.jpg');
    }
    scene.text('You decide to have some fun. You quickly slide the phone between your legs and snap some photos under your skirt.');
    scene.text('Mr. Kuznetsov arrives at your desk. "What is more important than paying attention in my class? Hand it over."');
    scene.text('"Wouldn\'t you like to know!" you tease. You hand over your phone with the last picture you took still on the screen.');
    scene.text('You hold in a laugh when you see the wide eyed and shocked look on his face when he sees what\'s on the screen. He blushes a bright red as he hastily turns the screen off and returns to the front of the class, where he composes himself and gets ready to continue the lesson.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', 'shop');
  } },
    ]);
  } },
      ]);
    }
    if (((s as any).braworntype ?? 0) !== 'none') {
      qspCall(s, 'willpower', 'misc', 'self', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Hide the phone in your bra', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Hide the phone in your bra', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'misc', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).demerit = ((s as any).demerit ?? 0) + (5);
    scene.img('images/locations/pavlovsk/school/classroom/nophone.jpg');
    scene.text('You deftly shove the phone in your bra, and smile fiendishly as you see the indecisiveness on your teacher\'s face.');
    scene.text('You pretend it\'s a perfectly normal place to store your phone and mock him in a cute voice. "Is there a problem, Mr. Kuznetsov? Go ahead, take my phone if it\'s not allowed." You thrust your chest forward, the outline of your phone visible through the fabric.');
    scene.text('He narrows his eyes. "Is it how you want to play it? Very well, come see me after class. Or we can just call your mother into the school…" He notes the change in your expression and smirks, knowing you\'ll be seeing him after class now.');
    scene.actions([
      { label: 'Wait for the end of class', handler: (st: GameState) => {
    (s as any).Kuznetsov_punishment = 1;
    scene.img('images/characters/pavlovsk/school/teacher/ruslan/sex/pshop1.jpg');
    scene.text('At the end of class, you walk up to Mr. Kuznetsov\'s desk. "You wanted to see me?"');
    scene.text('He glares up at you. "Come to my office after school so we can talk about this. If not, I\'ll be calling your mother to school tomorrow."');
    scene.text('He then dismisses you without another word.');
    scene.actions([
      { label: 'Go to next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Hand over the phone', handler: (st: GameState) => {
    ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = ((s as any).grupvalue[3] ?? 0) + (1);
    scene.img('images/locations/pavlovsk/school/classroom/takephone.jpg');
    scene.text('You decide it\'s not worth it and silently hand your phone to Mr. Kuznetsov.');
    scene.text('He tuts and shakes his head before walking back to the front of the class. "You can have it back after class. Now pay attention please."');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', 'shop');
  } },
    ]);
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Put your phone away', handler: (st: GameState) => {
    ((s as any).grupvalue = (s as any).grupvalue ?? {})[1] = ((s as any).grupvalue[1] ?? 0) - (1);
    ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = ((s as any).grupvalue[3] ?? 0) + (1);
    scene.img('images/locations/pavlovsk/school/classroom/bored.jpg');
    scene.text('You decide not to aggravate the situation and put your phone away. Mr. Kuznetsov gives you a disapproving look before continuing the lesson.');
    scene.actions([
      { label: 'Wait for the end of the lesson', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessonsev2', 'shop');
  } },
    ]);
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterMeetAnushka(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A144');
  scene.img('images/characters/pavlovsk/school/girl/anushka/sex/school/classroom6.jpg');
  scene.text('You go to the girls restroom and wait inside for Anushka to show up. A few minutes later, you hear the door open and Anushka walks in. She walks up to you and places her hand on your hip and leans in close.');
  scene.text('"I want to fuck you so bad," she whispers.');
  scene.text('Before you can respond, she starts kissing you.');
  qspCall(s, 'arousal', 'foreplay', 2, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go with it', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/school/classroom7.jpg');
    scene.text('She starts undressing you as you kiss and you return the favor. After both of your shirts are removed, she pushes your skirt up before pulling up her own. She reaches over and slides one hand inside of your panties and starts rubbing your clit.');
    scene.text('Her other hand reaches inside of her own panties and she starts masturbating. After a few minutes, she moans out. "I want you to eat my pussy."');
    (s as any).orgasm_or = 'no';
    qspCall(s, 'arousal', 'foreplay', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Lick her pussy', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/school/classroom8.jpg');
    scene.text('The two of you stumble into one of the empty stalls. You get down on your knees and stick your face between her legs. You pull her panties aside and start licking and sucking on her clit, before licking her soaking wet slit. She moans loudly as you lick and suckle her pussy.');
    qspCall(s, 'arousal', 'cuni_give', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Make her lick you', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/school/classroom9.jpg');
    scene.text('You don\'t want her to cum too quickly, so you get off your knees. Once you\'re standing up, you put your hand on her head and push down, letting her know you want her to go down on you. She grins as she drops down to her knees in front of you. She pulls your panties down just enough so that she can kiss, then suck on your clit. After that, she moves down and starts licking your slit, sliding her tongue between your pussy lips and sliding her tongue inside you while her fingers also play with your pussy. She soon stops and you feel both her hands grab you and pull you down.');
    qspCall(s, 'arousal', 'cuni', 3, 'lesbian');
    qspCall(s, 'arousal', 'vaginal_finger', (-3), 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go down', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/school/classroom10.jpg');
    scene.text('As you go down, she stands back up and spreads her legs. She grabs you by the hair and pulls your face over to her crotch. You start licking her pussy once more. She moans loudly as you do and grinds against your face. It doesn\'t take too long before she starts muttering "Yes! Yes! Oh god yes!"');
    qspCall(s, 'arousal', 'cuni_give', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get her off', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/school/classroom11.jpg');
    scene.text('She starts to tremble and with one hand on the wall to steady herself, the other pulls her panties aside as you start licking her again. It doesn\'t take long until she has an orgasm, her wetness covering your lips, cheeks and chin as more of it runs down her inner thighs. She trembles for several seconds until her orgasm finally passes.');
    qspCall(s, 'arousal', 'cuni_give', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'On your knees bitch', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/school/classroom12.jpg');
    scene.text('You stand up as she holds her balance against the wall, still trembling. You place your hand on her shoulder and push her down. "On your knees bitch. You got yours, now give me mine."');
    scene.text('Without a word she squats down with her legs wide, pulling your panties down. They fall around your ankles and you step out of them, placing one foot on the wall and spreading your legs wide. She starts licking your pussy and slipping her tongue inside you, tongue fucking you. As she does, she rubs and fingers herself with one hand.');
    qspCall(s, 'arousal', 'cuni', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Another one?', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/school/classroom13.jpg');
    scene.text('She alternates between licking your slit and stiffing her tongue and plunging it into your pussy over and over. She keeps masturbating as she pleasures you, then she moans loudly into your crotch as another orgasm rocks her body, but she continues to lick you through her orgasm until it passes.');
    qspCall(s, 'arousal', 'cuni', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finger bang', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/school/classroom14.jpg');
    scene.text('Once her second orgasm has passed, she stands back up, walks behind you and wraps her arms around you. She slides one hand down to your pussy and starts rubbing your clit vigorously before she slides one finger into you and starts fingerbanging you. As you get wetter, she slips a second finger in and finally a third. You can feel your wetness dripping out of you.');
    scene.text('"Get on the floor and lie back so you can drink my juices," you tell her.');
    qspCall(s, 'arousal', 'vaginal_finger', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Drink my juices', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/school/classroom15.jpg');
    scene.text('She sits on the floor, leans back and tilts her head back. You straddle her face and lower yourself onto her mouth. She keeps her mouth open as wide as it will go while her tongue darts into your wet slit. You feel yourself getting wetter and wetter.');
    (s as any).orgasm_or = 'Your body suddenly spasms as it\'s rocked by a very intensive orgasm. Your stomach muscles tighten and it feels like someone just turned a faucet on inside your pussy. You must be filling her mouth with your juices.';
    qspCall(s, 'arousal', 'vaginal_finger', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Swap spit', handler: (st: GameState) => {
    ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['sex'] = ((s as any).anushkaQW['sex'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/school/classroom14.jpg');
    scene.text('You climb off her and see her face is completely soaked in your juices as she makes an audible swallowing sound. You don\'t know if you filled her mouth up that much she needed to swallow it or if she was just messing around. She gets up and makes out with you, allowing you to taste your wetness on her tongue.');
    scene.text('As you kiss you suddenly hear someone shout "Oh my god!"');
    scene.text('As you stop kissing and turn to look, whoever it was has already rushed back out. You both have a good laugh before you get cleaned up and dressed.');
    scene.text('"Thanks, I really needed that. I was about to pop in class I was so fucking horny," she says.');
    scene.text('You giggle. "Any time. It was my pleasure."');
    scene.text('You both laugh as the bell rings and you both hurry back to class.');
    qspCall(s, 'arousal', 'foreplay', 3, 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'literature':
      enterLiterature(s, scene);
      break;
    case 'literature_late':
      enterLiteratureLate(s, scene);
      break;
    case 'art':
      enterArt(s, scene);
      break;
    case 'shop':
      enterShop(s, scene);
      break;
    case 'meet_anushka':
      enterMeetAnushka(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gschool_lessons3: LocationDef = {
  name: 'gschool_lessons3',
  title: '"I want everyone quiet and in a seat!" Ms. Braakman demands ',
  region: 'other',
  enter: enter,
};
