import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + (60 - ((s as any).minut ?? 0));
  qspCall(s, 'stat', '');
  (s as any).detention_set = 0;
  (s as any).i = Math.floor(Math.random() * 100) + 1;
  if (((((s as any).grupTipe ?? 0) === 3  &&  ((s as any).i ?? 0) <= 20)  ||  (((s as any).grupTipe ?? 0) === 5  &&  ((s as any).i ?? 0) <= 30)  ||  ((s as any).i ?? 0) <= 10)  &&  ((s as any).pantyworntype ?? 0) !== 'none') {
    // TODO-QSP: killvar 'i'
    scene.actions([{ label: 'Continue', goto: ['gschool_detention', 'wedgie'] }]);
  } else {
    if (((s as any).i ?? 0) <= 20  &&  ((s as any).npc_rel ?? 0)?.['A144'] > 50  &&  ((s as any).pantyworntype ?? 0) !== 'none') {
      // TODO-QSP: killvar 'i'
      scene.actions([{ label: 'Continue', goto: ['gschool_detention', 'anushka_wedgie'] }]);
    } else {
      (s as any).demerit = ((s as any).demerit ?? 0) - (20);
      ((s as any).grupvalue ?? {})[3] = (((s as any).grupvalue ?? {})[3] ?? 0) - (2);
      ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (2);
      qspCall(s, 'archetypes', 'gain', 'punk', 'small', 'Served detention', 7);
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/school/detention/detention.jpg');
      scene.text('You arrive back at school on a Saturday - it sucks. Considering you spent all week here already, what could be worse than wasting part of a Saturday in school too? You walk into the library and take a seat at one of the tables.');
      scene.text('A few of the other students are here and by the time the bell rings, a couple more have trickled in. The teacher is the last to come. He sits behind his desk and, one by one, calls out the names on his list to make sure everyone who\'s supposed to be here is present.');
      scene.text('You confirm your presence, cursing the fact that you\'re stuck here. Once he finishes, he tells everyone to study quietly and use their time to "do homework or whatever"; it would appear he doesn\'t want to be here anymore than the rest of you.');
      scene.text('After giving somebody who was talking a deathly stare that quietens the room, the teacher pulls out a laptop and starts typing away, ignoring you and probably counting the minutes until he can go home, just like you.');
      (s as any).i = Math.floor(Math.random() * 100) + 1;
      if (((s as any).i ?? 0) <= 10) {
        scene.actions([{ label: 'Continue', goto: ['gschool_detention', 'Chat with <<$rand_girl>>'] }]);
      } else {
        if (((s as any).i ?? 0) <= 20) {
          scene.actions([{ label: 'Continue', goto: ['gschool_detention', 'Chat with <<$rand_boy>>'] }]);
        } else {
          if (((s as any).i ?? 0) <= 25) {
            scene.actions([{ label: 'Continue', goto: ['gschool_detention', 'Help friends in need'] }]);
          } else {
            if (((s as any).i ?? 0) <= 30) {
              scene.actions([{ label: 'Continue', goto: ['gschool_detention', 'strange'] }]);
            } else {
              if (((s as any).i ?? 0) <= 40) {
                scene.actions([{ label: 'Continue', goto: ['gschool_detention', 'company'] }]);
              } else {
                if (((s as any).i ?? 0) <= 45) {
                  if (((s as any).Ivanov_toilet ?? 0) === 1) {
                    scene.actions([{ label: 'Continue', goto: ['gschool_detention', 'Ivanov'] }]);
                  } else {
                    scene.actions([
                      { label: 'Look around', goto: ['gschool_detention', 'sitting'] },
                    ]);
                  }
                } else {
                  if (((s as any).i ?? 0) <= 50) {
                    if ((((s as any).anushkaQW ?? 0)?.['toilet'] === 1  ||  ((s as any).npc_rel ?? 0)?.['A144'] > 50)) {
                      scene.actions([{ label: 'Continue', goto: ['anushka', 'plan'] }]);
                    } else {
                      scene.actions([
                        { label: 'Look around', goto: ['gschool_detention', 'sitting'] },
                      ]);
                    }
                  } else {
                    if (((s as any).i ?? 0) <= 60  &&  ((s as any).npc_rel ?? 0)?.['A144'] > 50) {
                      scene.actions([{ label: 'Continue', goto: ['anushka', 'temptation'] }]);
                    } else {
                      scene.actions([
                        { label: 'Look around', goto: ['gschool_detention', 'sitting'] },
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

function enterWedgie(s: GameState, scene: SceneBuilder): void {
  (s as any).wedgie_counter = 0;
  // TODO-QSP: :wedgie_girl
  qspCall(s, 'gschool_events', 'rand_girl_arg', 1, 1, 0, 1, 1, 0);
  if (((s as any).grupTipe ?? 0) === 4  &&  ((s as any).wedgie_counter ?? 0) < 1000) {
    if (((s as any).rand_girl ?? 0) !== 'Pauline'  &&  ((s as any).rand_girl ?? 0) !== 'Lena'  &&  ((s as any).rand_girl ?? 0) !== 'Lera'  &&  ((s as any).rand_girl ?? 0) !== 'Alyona') {
      (s as any).wedgie_counter = ((s as any).wedgie_counter ?? 0) + (1);
      // TODO-QSP: jump 'wedgie_girl'
    }
  } else {
    if (((s as any).grupTipe ?? 0) === 2  &&  ((s as any).wedgie_counter ?? 0) < 1000) {
      if (((s as any).rand_girl ?? 0) !== 'Pauline'  &&  ((s as any).rand_girl ?? 0) !== 'Lena'  &&  ((s as any).rand_girl ?? 0) !== 'Lera'  &&  ((s as any).rand_girl ?? 0) !== 'Alyona'  &&  ((s as any).rand_girl ?? 0) !== 'Christina') {
        (s as any).wedgie_counter = ((s as any).wedgie_counter ?? 0) + (1);
        // TODO-QSP: jump 'wedgie_girl'
      }
    } else {
      if (((s as any).wedgie_counter ?? 0) < 1000) {
        if (((s as any).rand_girl ?? 0) !== 'Pauline'  &&  ((s as any).rand_girl ?? 0) !== 'Lena'  &&  ((s as any).rand_girl ?? 0) !== 'Lera'  &&  ((s as any).rand_girl ?? 0) !== 'Alyona'  &&  ((s as any).rand_girl ?? 0) !== 'Christina'  &&  ((s as any).rand_girl ?? 0) !== 'Lina'  &&  ((s as any).rand_girl ?? 0) !== 'Lariska'  &&  ((s as any).rand_girl ?? 0) !== 'Stasya') {
          (s as any).wedgie_counter = ((s as any).wedgie_counter ?? 0) + (1);
          // TODO-QSP: jump 'wedgie_girl'
        }
      }
    }
  }
  scene.img('images/locations/pavlovsk/school/detention/wedgie.jpg');
  scene.text('You arrive back at school on a Saturday - it sucks. Considering you spent all week here already, what could be worse than wasting part of a Saturday in school too?');
  scene.text('You head to the library where a few of the other students have already arrived. As you make your way over to one of the tables, you suddenly feel a hand grab the top of your panties.');
  scene.text('Before you can react or even object, the person yanks up on them hard. They jerk them up hard enough that they almost lift you off your feet, leaving you with a massive wedgie.');
  // TODO-QSP: dynamic text: Once they let go, you spin around as you hear the rest of the students laughing ...
  scene.text(`Once they let go, you spin around as you hear the rest of the students laughing at you and see ${((s as any).rand_girl ?? 0)} standing there, amused by her handiwork.`);
  qspCall(s, 'gschool_detention', 'back_down');
  qspCall(s, 'gschool_detention', 'return_favor', 'random');
  qspCall(s, 'willpower', 'misc', 'self', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Smack her [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Smack her [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (1);
    scene.img('images/locations/pavlovsk/school/slap.jpg');
    scene.text('Seeing the smug look on her face is too much and you slap her hard across her face. She\'s surprised by your move as several of the other students start yelling.');
    scene.text('"Fight, fight, fight!"');
    scene.text('Before anything can happen, the teacher walks in. "Enough! What the hell is going on in here?!"');
    scene.text('You open your mouth to explain, but he cuts you off. "Come here right <i>now</i>!"');
    scene.text('You do as you\'re told and walk up to him. "I\'m going to give you a choice. Take my punishment right now or we can go and see the principal. Your choice."');
    scene.actions([
      { label: 'Go to the principal', goto: ['gschool_office', 'detPunishment1'] },
      { label: 'Take the offer', goto: ['gschool_detention', 'offer'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Promise revenge', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/detention/detention.jpg');
    scene.text('You glare at her. "Just you wait… You\'ll pay for this!"');
    scene.text('She snorts at your threat. "I\'m right here, bitch! Do it now, you fucking pussy!"');
    qspCall(s, 'gschool_detention', 'back_down');
    qspCall(s, 'gschool_detention', 'return_favor', 'random');
  } },
  ]);
  scene.build();
}

function enterAnushkaWedgie(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/school/detention/wedgie.jpg');
  scene.text('You arrive back at school on a Saturday - it sucks. Considering you spent all week here already, what could be worse than wasting part of a Saturday in school too?');
  scene.text('You head to the library where a few of the other students have already arrived. As you make your way over to one of the tables, you suddenly feel a hand grab the top of your panties.');
  scene.text('Before you can react or even object, the person yanks up on them hard. They jerk them up hard enough that they almost lift you off your feet, leaving you with a massive wedgie.');
  scene.text('Once they let go, you spin around as you hear the rest of the students laughing at you and see Anushka standing there, amused by her handiwork.');
  qspCall(s, 'gschool_detention', 'back_down');
  qspCall(s, 'gschool_detention', 'return_favor', 'anushka');
  scene.actions([
    { label: 'Promise revenge', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/detention/detention.jpg');
    scene.text('You glare at her. "Just you wait… You\'ll pay for this!"');
    scene.text('She snorts at you in amusement. "Calm down, it was just a joke."');
    qspCall(s, 'gschool_detention', 'back_down');
    qspCall(s, 'gschool_detention', 'return_favor', 'anushka');
  } },
  ]);
  scene.build();
}

function enterBackDown(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Back down', handler: (st: GameState) => {
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) - (2);
    scene.img('images/locations/pavlovsk/school/detention/detention.jpg');
    scene.text('You\'re about to say something, but realize it will only make matters worse, so you meekly ignore her and all the laughing. You barely even notice the teacher raising his voice as he comes in late, ordering everyone to calm down.');
    scene.text('You take a seat at one of the tables and the teacher sits down, calling out names to make sure that everyone who should be here is present.');
    scene.text('You confirm your presence, cursing the fact that you\'re stuck here. Once he finishes, he tells everyone to study quietly and use their time to "do homework or whatever"; it would appear he doesn\'t want to be here anymore than the rest of you.');
    scene.text('After giving somebody who was talking to his neighbor a deathly stare that quietens the room, the teacher pulls out a laptop and starts typing away, ignoring you and probably counting the minutes until he can go home, just like you.');
    scene.actions([
      { label: 'Study', handler: (st: GameState) => {
    qspCall(s, 'grades', 'homework', 'school', 'no', 0, 0, 0, 0);
    scene.text('<center><b>Detention</b></center>');
    scene.img('images/locations/pavlovsk/school/detention/detention.jpg');
    scene.text('You spend the next three hours studying and doing your homework. Once the bell rings, you gather up your books and head home.');
    scene.actions([
      { label: 'Go home', goto: ['gschool_detention', 'end'] },
    ]);
  } },
      { label: 'Play on your phone', handler: (st: GameState) => {
    qspCall(s, 'mood', 'raise', 'tiny');
    scene.text('<center><b>Detention</b></center>');
    scene.img('images/locations/pavlovsk/school/detention/detention.jpg');
    scene.text('You briefly consider doing your homework, but the thought alone is enough to bore you, so you pull our your phone and browse the web, play a few games and text a few friends.');
    scene.text('It seems to take forever but eventually, the time is up and the bell rings, allowing you to go home.');
    scene.actions([
      { label: 'Go home', goto: ['gschool_detention', 'end'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterReturnFavor(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'random'  ||  ((s as any).locArgs?.[1] ?? 0) === '') {
    if (((s as any).grupTipe ?? 0) === 2  ||  ((s as any).grupTipe ?? 0) === 4) {
      scene.actions([
        { label: 'Return the favor', handler: (st: GameState) => {
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (1);
    scene.img('images/locations/pavlovsk/school/detention/wedgierev.jpg');
    scene.text('You quickly step forward and snake your arms around her. Reaching into the back of her pants, you grab her panties. She realizes what you\'re going to do a moment too late as she reaches back to stop you, but by then you already have a good hold of her panties. You yank up on them and lean back, lifting her off her feet.');
    scene.text('She grabs your panties again and starts yanking at them as well. The two of you give each other wedgies, trying to force the other to relent first as the other students hoot and encourage the two of you.');
    scene.text('Before a victor can be determined, one of the other students yells that the teacher is coming and you share a look with each other, then both let go and quickly find your seats. Both of you give each other amused looks for the rest of detention while trying to discreetly pull your panties out of your ass crack.');
    scene.actions([
      { label: 'Go home', goto: ['gschool_detention', 'end'] },
    ]);
  } },
      ]);
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'anushka') {
      scene.actions([
        { label: 'Return the favor', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A144', 1);
    scene.img('images/locations/pavlovsk/school/detention/wedgierev.jpg');
    scene.text('You quickly step forward and snake your arms around Anushka. Reaching into the back of her pants, you grab her panties. She realizes what you\'re going to do a moment too late as she reaches back to stop you, but by then you already have a good hold of her panties. You yank up on them and lean back, lifting her off her feet.');
    scene.text('She grabs your panties again and starts yanking at them as well, the two of you giving each other wedgies while trying to force the other to relent first.');
    scene.text('You can hear the other students hooting and encouraging the two of you, but before a victor can be determined, one of the other students yells that the teacher is coming. Anushka, however, doesn\'t relent.');
    scene.text('"You let go first, then I\'ll let go," she says with a smirk, but you\'re not sure if you should trust her or not.');
    scene.actions([
      { label: 'Refuse to let go', goto: ['anushka', 'wedgie fight'] },
      { label: 'Let go first', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/atomicwed.jpg');
    scene.text('When you let go and put your hands up, she yanks you forward and trips you. Once you\'re on the ground, she holds onto your panties and starts dragging you across the floor. You struggle to get up as she keeps pulling you along before you can get your balance.');
    scene.text('Fortunately for you, the teacher walks in. "What\'s the meaning of this, Miss Konstantinov?! Let go of her at <i>once/i>!"');
    scene.text('Anushka lets go, but not without a final yank that causes you to squeal a little.');
    // TODO-QSP: dynamic text: The teacher speaks again. "Miss <<$pcs_lastname>>, please take your seat. That g...
    scene.text(`The teacher speaks again. "Miss ${((s as any).pcs_lastname ?? 0)}, please take your seat. That goes for all of you. Except for you, Miss Konstantinov. You're coming with me."`);
    scene.text('He grabs Anushka roughly by the arm and drags her out of the library as you take your seat and try to pluck your underwear out of your ass crack. It\'s all stretched out of shape and might even be ruined.');
    scene.text('About fifteen minutes later, the teacher returns alone and takes a seat. He keeps a watchful eye on everyone for the rest of detention.');
    qspCall(s, 'gschool_detention', 'sitting_events');
  } },
    ]);
  } },
      ]);
    }
  }
  scene.build();
}

function enterSitting(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/school/detention/detention.jpg');
  scene.text('Once the teacher is busy ignoring you, you look around, but don\'t see anything interesting going on. It looks like you\'ll have to entertain yourself.');
  qspCall(s, 'gschool_detention', 'incidental_events');
  qspCall(s, 'gschool_detention', 'sitting_events');
  scene.build();
}

function enterSittingEvents(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Study', handler: (st: GameState) => {
    qspCall(s, 'grades', 'homework', 'school', 0, 0, 0, 0);
    scene.img('images/locations/pavlovsk/school/detention/detention.jpg');
    scene.text('You spend the next three hours studying and doing your homework. Once the bell rings, you gather up your books and head home.');
    scene.actions([
      { label: 'Go home', goto: ['gschool_detention', 'end'] },
    ]);
  } },
    { label: 'Play on your phone', handler: (st: GameState) => {
    qspCall(s, 'mood', 'raise', 'tiny');
    scene.img('images/locations/pavlovsk/school/detention/detention.jpg');
    scene.text('You briefly consider doing your homework, but the thought alone is enough to bore you, so you pull our your phone and browse the web, play a few games and text a few friends.');
    scene.text('It seems to take forever but eventually, the time is up and the bell rings, allowing you to go home.');
    scene.actions([
      { label: 'Go home', goto: ['gschool_detention', 'end'] },
    ]);
  } },
    { label: 'Roam around', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/detention/detention.jpg');
    scene.text('You briefly consider doing your homework, but the thought alone is enough to bore you.');
    scene.text('You look around and see no one is looking, so you get up and sneak back into the rows of bookshelves.');
    scene.actions([
      { label: 'Look around', goto: ['gschool_detention', 'roam_around'] },
    ]);
  } },
    { label: 'Sit around bored', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/detention/detention.jpg');
    scene.text('You briefly consider doing your homework, but the thought alone is enough to bore you. You try playing on your phone, but after a while even that gets boring.');
    scene.text('You sigh and look around the room. Most of the others are just as bored as you and no one is really paying any attention. You notice one of the boys occasionally looking around and the idea of flashing him pops into your head.');
    qspCall(s, 'willpower', 'exhib', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Do it [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Do it [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'fame', 'pav', 'sex', 1);
    qspCall(s, 'flash', 'tits', 'indoors', 1, 1);
    qspCall(s, 'stat', '');
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
    scene.img('images/locations/pavlovsk/school/detention/detsitflash.mp4');
    scene.text('You look around once more to make sure no one else is looking, then wait for him to look back. When he does, you pull open your shirt and flash your breasts him.');
    scene.text('His eyes grow wide in surprise and you giggle as you quickly cover up.');
    scene.text('You catch him watching you for the rest of detention, but you mostly just ignore him and play on your phone.');
    scene.actions([
      { label: 'Go home', goto: ['gschool_detention', 'end'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Don\'t do it', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/detention/detention.jpg');
    scene.text('As tempting as it is, you decided against it. After a while, you give up and start playing on your phone again.');
    scene.actions([
      { label: 'Go home', goto: ['gschool_detention', 'end'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterIncidentalEvents(s: GameState, scene: SceneBuilder): void {
  (s as any).i = Math.floor(Math.random() * 100) + 1;
  if (((s as any).i ?? 0) <= 10) {
    scene.actions([{ label: 'Continue', goto: ['gschool_detention', 'upskirt1'] }]);
  } else {
    if (((s as any).i ?? 0) <= 20) {
      scene.actions([{ label: 'Continue', goto: ['gschool_detention', 'upskirt2'] }]);
    } else {
      if (((s as any).i ?? 0) <= 30) {
        scene.actions([{ label: 'Continue', goto: ['gschool_detention', 'flashing girl'] }]);
      } else {
        if (((s as any).i ?? 0) <= 40) {
          scene.actions([{ label: 'Continue', goto: ['gschool_detention', 'teasing girl'] }]);
        } else {
          if (((s as any).i ?? 0) <= 50) {
            scene.actions([{ label: 'Continue', goto: ['gschool_detention', 'handjob'] }]);
          }
        }
      }
    }
  }
  scene.build();
}

function enterUpskirt1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  // TODO-QSP: :newupskirtgirl1
  qspCall(s, 'gschool_events', 'rand_girl_arg', 1, 1, 0, 1, 1, 0);
  if ((((s as any).rand_girl ?? 0) === 'Veronika'  ||  ((s as any).rand_girl ?? 0) === 'Katyusha'  ||  ((s as any).rand_girl ?? 0) === 'Anushka')  &&  ((s as any).jump_counter ?? 0) < 1000) {
    (s as any).jump_counter = ((s as any).jump_counter ?? 0) + (1);
    // TODO-QSP: jump 'newupskirtgirl1'
  }
  (s as any).jump_counter = 0;
  scene.img('images/locations/pavlovsk/school/detention/spreadg.jpg');
  // TODO-QSP: dynamic text: You're sitting at a table, bored out of your mind and waiting for detention to e...
  scene.text(`You're sitting at a table, bored out of your mind and waiting for detention to end when you notice ${((s as any).rand_girl ?? 0)} sitting at a table across from you.`);
  scene.text('She leans back in her chair and relaxes, spreading her legs slightly as she does. The movement draws your eyes and you\'re given an eyeful. She seems to have forgotten her panties today, her pussy on full display for anyone to see.');
  qspCall(s, 'arousal', 'erotic', 5);
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Ignore it', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/detention/spreadg.jpg');
    scene.text('You decide that it\'s none of your business and do your best to ignore it. After a few minutes, one of the boys takes notice and walks over to the table before holding his phone under it.');
    scene.text('She quickly realizes what\'s going on and closes her legs together and blushes. The two of them are soon in a heated whisper argument, which draws the teacher\'s attention. When both feign ignorance and go back to their seats, the teacher keeps an eye on them for a few seconds before losing interest.');
    scene.text('The rest of detention passes much more quietly, with nothing else interesting happening.');
    scene.actions([
      { label: 'Go home', goto: ['gschool_detention', 'end'] },
    ]);
  } },
    { label: 'Get her attention and let her know', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A' + qspUntranslated(s, "r>", { location: "gschool_detention" }) + '', 1);
    scene.img('images/locations/pavlovsk/school/detention/spreadg.jpg');
    scene.text('You have to let her know. It takes a few seconds before you finally get her attention and mimic closing your hands together as if they were legs.');
    scene.text('It takes her a moment to realize what you mean before she blushes slightly and closes her legs, followed by her mouthing thank you to you.');
    scene.text('You smile and nod back at her. Feeling pretty good about helping a fellow girl out, the rest of detention doesn\'t seem as bad.');
    scene.actions([
      { label: 'Go home', goto: ['gschool_detention', 'end'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterUpskirt2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  // TODO-QSP: :newupskirtgirl2
  qspCall(s, 'gschool_events', 'rand_girl_arg', 1, 1, 0, 1, 1, 0);
  if ((((s as any).rand_girl ?? 0) === 'Veronika'  ||  ((s as any).rand_girl ?? 0) === 'Anushka')  &&  ((s as any).jump_counter ?? 0) < 1000) {
    (s as any).jump_counter = ((s as any).jump_counter ?? 0) + (1);
    // TODO-QSP: jump 'newupskirtgirl2'
  }
  (s as any).jump_counter = 0;
  scene.img('images/locations/pavlovsk/school/detention/upskirt.jpg');
  // TODO-QSP: dynamic text: You're sitting at a table, bored out of your mind waiting for detention to end w...
  scene.text(`You're sitting at a table, bored out of your mind waiting for detention to end when you notice ${((s as any).rand_girl ?? 0)} climbing up the small ladder used to get to the top shelves of books.`);
  scene.text('As you watch her climb, you quickly realize she\'s not wearing any panties and is giving everyone watching a clear view of her pussy.');
  scene.text('Before you can say anything, someone whistles, which causes the teacher to start asking who did it. During the distraction, she quickly climbs back down and returns to her seat, blushing slightly, but also smiling.');
  qspCall(s, 'arousal', 'voyeur', 5);
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Go home', goto: ['gschool_detention', 'end'] },
  ]);
  scene.build();
}

function enterFlashingGirl(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  // TODO-QSP: :newflashinggirl
  qspCall(s, 'gschool_events', 'rand_girl_arg', 1, 1, 0, 1, 1, 0);
  if ((((s as any).rand_girl ?? 0) === 'Veronika'  ||  ((s as any).rand_girl ?? 0) === 'Katyusha')  &&  ((s as any).jump_counter ?? 0) < 1000) {
    (s as any).jump_counter = ((s as any).jump_counter ?? 0) + (1);
    // TODO-QSP: jump 'newflashinggirl'
  }
  (s as any).jump_counter = 0;
  scene.img('images/locations/pavlovsk/school/detention/detflash1.mp4');
  // TODO-QSP: dynamic text: You're sitting at a table, bored out of your mind waiting for detention to end w...
  scene.text(`You're sitting at a table, bored out of your mind waiting for detention to end when you notice ${((s as any).rand_girl ?? 0)} sitting in a spot that blocks almost everybody's view of her. She has her phone held in front of her, seemingly having a video conversation with someone.`);
  scene.text('To your surprise, she lifts her shirt and flashes whoever it is on the phone. She laughs at their reaction, which grabs the teacher\'s attention and he clears his throat. She quickly ends the call and spends the rest of the time playing on her phone.');
  scene.text('After watching her a for a few more seconds, you realize she\'s not going to do anything more, so you just play on your phone as well. At least there was a little excitement today.');
  qspCall(s, 'arousal', 'voyeur', 5);
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Go home', goto: ['gschool_detention', 'end'] },
  ]);
  scene.build();
}

function enterTeasingGirl(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  // TODO-QSP: :newteasinggirl
  qspCall(s, 'gschool_events', 'rand_girl_arg', 1, 1, 0, 1, 1, 0);
  if ((((s as any).rand_girl ?? 0) === 'Veronika'  ||  ((s as any).rand_girl ?? 0) === 'Katyusha')  &&  ((s as any).jump_counter ?? 0) < 1000) {
    (s as any).jump_counter = ((s as any).jump_counter ?? 0) + (1);
    // TODO-QSP: jump 'newteasinggirl'
  }
  (s as any).jump_counter = 0;
  scene.img('images/locations/pavlovsk/school/detention/tease.jpg');
  // TODO-QSP: dynamic text: You're sitting at a table, bored out of your mind waiting for detention to end w...
  scene.text(`You're sitting at a table, bored out of your mind waiting for detention to end when you notice ${((s as any).rand_girl ?? 0)} has snuck off into the book stacks with some boys.`);
  scene.text('She pulls down her pants and is about to pull down her panties, but stops just before she shows anything and grins as she pulls her clothes back up. After doing this a few times, the boys hopeful that she will show them something, she gets bored teasing them and wanders off.');
  scene.text('The show over, you start playing on your phone again. At least there was a little excitement today.');
  qspCall(s, 'arousal', 'voyeur', 5);
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Go home', goto: ['gschool_detention', 'end'] },
  ]);
  scene.build();
}

function enterHandjob(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  // TODO-QSP: :boy_jump
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    qspCall(s, 'gschool_events', 'rand_boy_arg', 0, 0, 0, 1, 0, 0);
    if (((s as any).rand_boy ?? 0) === 'Niko'  &&  ((s as any).jump_counter ?? 0) < 1000) {
      (s as any).jump_counter = ((s as any).jump_counter ?? 0) + (1);
      // TODO-QSP: jump 'boy_jump'
    }
  } else {
    qspCall(s, 'gschool_events', 'rand_boy_arg', 1, 1, 0, 0, 0, 0);
    if (((s as any).rand_boy ?? 0) !== 'Dimka'  &&  ((s as any).rand_boy ?? 0) !== 'Andrey'  &&  ((s as any).rand_boy ?? 0) !== 'Ivan'  &&  ((s as any).rand_boy ?? 0) !== 'Lazar'  &&  ((s as any).rand_boy ?? 0) !== 'Svyatoslav'  &&  ((s as any).jump_counter ?? 0) < 1000) {
      (s as any).jump_counter = ((s as any).jump_counter ?? 0) + (1);
      // TODO-QSP: jump 'boy_jump'
    }
  }
  (s as any).jump_counter = 0;
  scene.img('images/locations/pavlovsk/school/detention/sex/handjob.jpg');
  // TODO-QSP: dynamic text: You're sitting at a table, bored out of your mind waiting for detention to end w...
  scene.text(`You're sitting at a table, bored out of your mind waiting for detention to end when you notice a girl from another class. You can't recall her name, but she's sitting next to ${((s as any).rand_boy ?? 0)}, who has his shorts pulled down.`);
  scene.text('She\'s jerking him off under the desk, both of them do a fairly good job of acting like nothing\'s going on, but from your seat, you have a perfect view of the action.');
  scene.text('Sometime later, she switches hands, but he finally leans back and closes his eyes. Sensing he\'s close, she tilts his dick down as she keeps jerking him off and cups her other hand under the head of his dick.');
  scene.text('Moments later, he shoots his load into her hand. Once he finishes, she brings her hands up to her face and licks his cum up as he tucks his dick away. Not long after, they sit side by side playing on their phones, pretending nothing happened.');
  qspCall(s, 'arousal', 'voyeur_sex', 10);
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Go home', goto: ['gschool_detention', 'end'] },
  ]);
  scene.build();
}

function enterChatWith___randGirl__(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: :rand_girlrel_jump
  qspCall(s, 'gschool_events', 'rand_girl_arg', 1, 1, 1, 1, 1, 0);
  if (((s as any).npc_rel ?? 0)['A' + ((s as any).r ?? 0)] < 50  &&  ((s as any).counter_girl ?? 0) < 1000) {
    (s as any).counter_girl = ((s as any).counter_girl ?? 0) + (1);
    // TODO-QSP: jump 'rand_girlrel_jump'
  }
  (s as any).counter_girl = 0;
  qspCall(s, 'npc_relationship', 'modify', 'A' + qspUntranslated(s, "r>", { location: "gschool_detention" }) + '', 3);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/detention/detgchat.jpg');
  // TODO-QSP: dynamic text: You decide to move to an empty seat next to <<$rand_girl>>. The teacher watches ...
  scene.text(`You decide to move to an empty seat next to ${((s as any).rand_girl ?? 0)}. The teacher watches you to see what you're up to, but soon loses interest and returns his attention to his laptop, following the example of half the students in the room.`);
  // TODO-QSP: dynamic text: You turn to <<$rand_girl>> and the two of you start chatting away about school, ...
  scene.text(`You turn to ${((s as any).rand_girl ?? 0)} and the two of you start chatting away about school, boys, clothes, makeup and anything else that strikes your fancy. Occasionally, the two of you get a little noisy and have a fit of giggles, causing the teacher to look up and clear his throat until you quieten back down, but he always returns his attention to his laptop after a few seconds and you begin your chatter once again.`);
  scene.text('Before you know it, the class bell rings. You both stop in surprise, but quickly gather your things before parting with a smile and heading home.');
  scene.actions([
    { label: 'Go home', goto: ['gschool_detention', 'end'] },
  ]);
  scene.build();
}

function enterChatWith___randBoy__(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: :rand_boyrel_jump
  qspCall(s, 'gschool_events', 'rand_boy_arg', 1, 1, 1, 1, 1, 0);
  if (((s as any).npc_rel ?? 0)['A' + ((s as any).r ?? 0)] < 50  &&  ((s as any).counter_boy ?? 0) < 1000) {
    (s as any).counter_boy = ((s as any).counter_boy ?? 0) + (1);
    // TODO-QSP: jump 'rand_boyrel_jump'
  }
  (s as any).counter_boy = 0;
  qspCall(s, 'npc_relationship', 'modify', 'A' + qspUntranslated(s, "r>", { location: "gschool_detention" }) + '', 3);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/detention/detbchat.jpg');
  // TODO-QSP: dynamic text: You decide to move to an empty seat next to <<$rand_boy>>. The teacher watches y...
  scene.text(`You decide to move to an empty seat next to ${((s as any).rand_boy ?? 0)}. The teacher watches you to see what you're up to, but soon loses interest in you and starts playing something on his phone, following the example of half the students in the room.`);
  // TODO-QSP: dynamic text: You turn to <<$rand_boy>> and the two of you start chatting away about school, t...
  scene.text(`You turn to ${((s as any).rand_boy ?? 0)} and the two of you start chatting away about school, teachers, girls he likes, boys you like and anything else that strikes your fancy. Occasionally, the two of you get a little noisy and raise your voices a little too much in excitement, causing the teacher to look up and clear his throat until you quieten back down, but he always returns his attention to his phone after a few seconds and you begin your chatter once again.`);
  scene.text('Before you know it, the class bell rings. You both stop in surprise, but quickly gather your things before parting with a smile and heading home.');
  scene.actions([
    { label: 'Go home', goto: ['gschool_detention', 'end'] },
  ]);
  scene.build();
}

function enterHelpFriendsInNeed(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'gschool_randperson', 'couple_generator');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/detention/detflirt.jpg');
  // TODO-QSP: dynamic text: You share a table with <<$rand_girl>> and <<$rand_boy>>. Before long, he's flirt...
  scene.text(`You share a table with ${((s as any).rand_girl ?? 0)} and ${((s as any).rand_boy ?? 0)}. Before long, he's flirting for all he's worth with her and going by her giggles, he's striking the right tone.`);
  // TODO-QSP: dynamic text: The teacher shushes them a few times, but doesn't really make much of an effort ...
  scene.text(`The teacher shushes them a few times, but doesn't really make much of an effort to silence them. ${((s as any).rand_boy ?? 0)} leans in and whisper something to her that earns him a half hearted smack on the shoulder and you overhear her calling him "bad" - her smile and the way she plays with her hair suggests that she likes "bad."`);
  // TODO-QSP: dynamic text: They have a whispered argument or discussion - you're not sure which - but when ...
  scene.text(`They have a whispered argument or discussion - you're not sure which - but when they're done, they both look around and you can tell they're up to something as ${((s as any).rand_girl ?? 0)} leans over.`);
  // TODO-QSP: dynamic text: "Can you distract Mr <<$rand_teacher>> for us so we can slip away?" she whispers...
  scene.text(`"Can you distract Mr ${((s as any).rand_teacher ?? 0)} for us so we can slip away?" she whispers and both of them give you pleading looks.`);
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
    scene.img('images/locations/pavlovsk/school/detention/detflirt.jpg');
    qspCall(s, 'npc_relationship', 'modify', 'A' + qspUntranslated(s, "r>", { location: "gschool_detention" }) + '', (-2));
    scene.text('You shake your head, not wanting to risk getting in more trouble by helping them. "Sorry, but I can\'t."');
    scene.text('They give you an annoyed look and move off to look for someone else to help them. You think you hear her call you a bitch.');
    scene.actions([
      { label: 'Go home', goto: ['gschool_detention', 'end'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Agree', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/detention/detflirt.jpg');
    qspCall(s, 'npc_relationship', 'modify', 'A' + qspUntranslated(s, "r>", { location: "gschool_detention" }) + '', 1);
    scene.text('You nod and smile. "Of coure I\'ll help you guys out."');
    scene.text('You get up and approach the teacher, asking him some questions about his last lesson. He\'s a bit reluctant at first, but you manage to make the right inquiries and he can\'t resist engaging you in a discussion on his subject.');
    scene.text('You see the two lovebirds slip away successfully and after a while, you thank the teacher and head back to your table. You think you can faintly hear soft feminine moans of pleasure, but nobody else seems to even notice it.');
    scene.text('You don\'t see them again until detention is over and everyone is leaving the building.');
    scene.actions([
      { label: 'Go home', goto: ['gschool_detention', 'end'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterStrange(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/boy/feofan/sex/school/det.jpg');
  scene.text('You take out your phone and amuse yourself for a while. When you look up, you rather bizarrely notice Feofan sitting at the same table as you, hunched over his folder with his arms surrounding it, clearly trying to hide something.');
  scene.text('You think it\'s odd, yet amusing that one of the nerds is in detention, but he seems to be very engrossed in what he\'s doing and is acting weird. Maybe you should take a peek at what he\'s doing? Then again, not minding your own business is part of the reason why you\'re here in the first place…');
  scene.actions([
    { label: 'Ignore him', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/feofan/sex/school/det.jpg');
    scene.text('You give him one more curious look before deciding to ignore him, going back to playing on your phone without reacting to the one or two sideways glances he gives you. After a while, he raises his hand and asks to go to the bathroom. When he gets up, you notice the bulge in his pants and his flushed features.');
    scene.text('He hurries out of the library and comes back sometime later looking… relieved, with the bulge in his pants gone. He sits down at a different table and you soon forget about this little "mystery."');
    scene.text('Time passes really slowly, but the bell finally rings and you gather your stuff before heading home.');
    scene.actions([
      { label: 'Go home', goto: ['gschool_detention', 'end'] },
    ]);
  } },
    { label: 'Catch him red handed', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/feofan/sex/school/det1.jpg');
    scene.text('Your curiosity gets the better of you and you get up, quietly circle around behind him and look over his shoulder. You see that he\'s engrossed in an adult magazine, looking at a picture of a guy fucking a woman dressed up as a schoolgirl in the ass.');
    scene.text('As you stare at the porn yourself, he notices your presence, turning to look over his shoulder at you and blushing bright red as he frantically covers the image with his hands.');
    scene.text('"Please don\'t tell anyone!" he blurts out.');
    scene.actions([
      { label: 'Ignore it', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A152', 1);
    scene.img('images/characters/pavlovsk/school/boy/feofan/sex/school/det.jpg');
    scene.text('You roll your eyes at him, but decide to ignore what you\'ve seen, going back to playing on your phone without reacting to the one or two sideways glances he gives you. After a while, he raises his hand and asks to go to the bathroom. When he gets up, you notice the bulge in his pants and his flushed features.');
    scene.text('He hurries out of the library and comes back sometime later looking… relieved, with the bulge in his pants gone. He sits down at a different table and you can\'t help but snort a little in amusement, knowing what he likely went and done.');
    scene.text('Time passes really slowly, but the bell finally rings and you gather your stuff before heading home.');
    scene.actions([
      { label: 'Go home', goto: ['gschool_detention', 'end'] },
    ]);
  } },
      { label: 'Report him', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A152', (-3));
    scene.img('images/characters/pavlovsk/school/boy/feofan/sex/school/det1.jpg');
    scene.text('You call the teacher over and the color leaves Feofan\'s face. He pleads with you not to tell on him, but when the teacher arrives, you let him know what he was doing. After a bit of arguing, the teacher grabs the magazine from him, looks it over and lets him know that what got him into detention is nothing compared to the trouble he\'s in now.');
    scene.text('He has Feofan move to a seat near his desk so he can keep an eye on him, then thanks you and leads Feofan to the front of the library. As they walk away, Feofan gives you a really dirty look.');
    scene.text('You spend the rest of the time playing on your phone, occasionally getting dirty looks from him whenever the teacher isn\'t looking.');
    scene.actions([
      { label: 'Go home', goto: ['gschool_detention', 'end'] },
    ]);
  } },
      { label: '"Eat me out"', handler: (st: GameState) => {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 3);
    qspCall(s, 'fame', 'pav', 'sex', 3);
    qspCall(s, 'npc_relationship', 'modify', 'A152', 1);
    qspCall(s, 'boyStat', 'A152');
    scene.img('images/characters/pavlovsk/school/boy/feofan/sex/school/det2.jpg');
    scene.text('You bite your lower lip and pull his hands away so you can see the porn, getting greatly aroused by it. You then glance around and see no one is looking your way. Making a split-second decision, you pull him to his feet and drag him behind one of the bookshelves, out of sight of the others.');
    scene.text('He\'s thoroughly confused at first, but once he understands the look on your face, he becomes very eager to follow you.');
    scene.text('Another table, empty and hidden from view, beckons you. Bookshelves surround it, essentially hiding it from the rest of the library. You lean against it and pull your panties down, letting them drop to the floor before you sit on the table and spread your legs, showing off your glistening wet pussy to him.');
    scene.text('"I won\'t tell, but you\'ve got to do something for me in exchange; Lick my pussy!"');
    scene.text('He pauses to look around - he seems to be expecting this to be some kind of elaborate joke, but when all remains silent, he quickly kneels down and starts licking your pussy.');
    qspCall(s, 'arousal', 'cuni', 5, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Enjoy', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/feofan/sex/school/detlick.jpg');
    scene.text('As he licks your clit and slit, you get the impression that he\'s not exactly experienced, but what he lacks in skill he more than makes up for with effort - you can barely contain your moans when he slips his tongue inside.');
    scene.text('You reach down, grab him by the hair and hold his face against your crotch. You struggle to keep quiet, rotating your hips to grind your pussy against his face while you pull him against you as hard as you can.');
    scene.text('As you feel your arousal building, you wonder if you should do more with him. Your original intention was to just make him get you off with his tongue, but now you badly want more. Then again, the idea of getting off while giving nothing in return is appealing too.');
    qspCall(s, 'arousal', 'cuni', 10, 'dom');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'cuni', 'force');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Glaze his face [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Glaze his face [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'force');
    qspCall(s, 'stat', '');
    qspCall(s, 'npc_relationship', 'modify', 'A152', (-5));
    scene.img('images/characters/pavlovsk/school/boy/feofan/sex/school/detlick2.jpg');
    scene.text('While licking your pussy, he reaches up and starts fingering you, but you slap his hand, causing him to jerk it away and give you a confused look. "I said lick my pussy, not finger it. So keep licking."');
    scene.text('You notice a hint of frustration in his expression, but he obediently goes back to licking your pussy as you feel a rush of power, getting a boy to do exactly what you want, the way you want it.');
    scene.text('You start to pant and moan louder and have to bite the sleeve of your shirt to keep it down, but your arousal is more than a match for the piece of cloth.');
    qspCall(s, 'arousal', 'cuni', 10, 'dom');
    qspCall(s, 'arousal', 'end');
    scene.text('The shudders eventually pass and you feel your strength returning and your breathing returning to normal. Even though your climax couldn\'t have been more obvious, you pull his head away from your pussy so you can slide off the table.');
    scene.text('As you grab your panties and put them back on, he stands up and starts to unbutton his pants. Ignoring him completely, you straighten out your clothes and start walking back to the main area.');
    scene.text('"Hey! What about me?" he asks and you stop and lean against a bookshelf.');
    scene.text('"What about you? I said I wouldn\'t tell if you eat me, which you did. I never said anything about getting <i>you</i> off."');
    scene.text('You spin and leave him behind as you giggle. You\'re pretty sure you hear him muttering something about you being a cruel bitch, but you don\'t care, especially not after a mind-blowing orgasm like that.');
    scene.text('You return to your seat and start playing on your phone. About ten minutes later, Feofan returns and sits back down. He seems a bit confused, alternating between giving you annoyed looks and lustful looks, but the huge grin you have on your face stays there for the rest of detention.');
    scene.actions([
      { label: 'Go home', goto: ['gschool_detention', 'end'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Suck his dick', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A72');
    scene.img('images/characters/pavlovsk/school/boy/feofan/sex/school/detbj.jpg');
    scene.text('You pull his head away from your crotch and slide off the table, then squat down in front of him. He immediately start to unbutton his pants, but you slap his hands away.');
    scene.text('"I\'m in charge, so just relax and do as I say. Got it?" you tell him.');
    scene.text('He pauses for a moment, but then, unsurprisingly, nods his head - not that you actually expected him to turn down a blowjob. You finish unbuttoning his pants and pull them and his underwear down to his knees, revealing his erect dick.');
    // TODO-QSP: dynamic text: Under his expectant gaze, you take the tip of his <<dick>>cm <<$dick_girth>> coc...
    scene.text(`Under his expectant gaze, you take the tip of his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock into your mouth and start sucking, slowly and teasingly.`);
    scene.text('He starts to move his hips to fuck your mouth, or at least go a little deeper, but a quick slap gets him standing still as you reach down and masturbate while taking more of his cock into your mouth at your own leisure.');
    scene.text('He rests one of his hands on your head, but doesn\'t try to force you to deepthroat him, so you let it happen.');
    qspCall(s, 'arousal', 'bj', 5, 'dom');
    qspCall(s, 'arousal', 'clit_finger', (-5), 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Make him cum', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'clit_finger', 1, 'masturbate');
  }, goto: ['gschool_detention', 'strange_cum'] },
      { label: 'Tell him to fuck your pussy', goto: ['gschool_detention', 'pussy_fuck'] },
      { label: 'Tell him to fuck your ass', goto: ['gschool_detention', 'ass_fuck'] },
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

function enterPussyFuck(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/boy/feofan/sex/school/detvag.jpg');
  scene.text('Your pussy is soaking wet at this point and you\'re aching to have something inside it.');
  scene.text('"Come here and fuck me," you command.');
  // TODO-QSP: dynamic text: He moves over and slides his <<dick>>cm <<$dick_girth>> dick into your pussy in ...
  scene.text(`He moves over and slides his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick into your pussy in one thrust, a soft groan escaping both of your mouths as he does.`);
  scene.text('You stop and remind him with a gesture of your finger that you have to keep it down. When he nods in acknowledgment, you lean back and he starts fucking you, deep and hard.');
  scene.text('You place your hand against his chest and he slows down a little and stops going as deep, causing a soft smile to curl your lips - having a willing boytoy following your every whim is intoxicating!');
  scene.text('After a while, you feel that familiar sensation well-up within you; you grab his hips and pull him closer until he\'s balls deep inside you, then push him back and forth as fast as you can. He quickly catches on that you want him to fuck you harder and starts pounding your pussy balls deep, as hard and fast as he can.');
  scene.text('You start rubbing your clit with one hand, moaning louder before one of his hands clamps over your mouth to muffle your moans, but you don\'t even care.');
  qspCall(s, 'arousal', 'vaginal', 15, 'dom');
  qspCall(s, 'stat', '');
  scene.text('Still in your dream-like state, you pull him out. You haven\'t quite decided what you want to do with his dick yet, but you know you don\'t want him to cum inside you.');
  scene.actions([
    { label: 'Make him cum', goto: ['gschool_detention', 'strange_cum'] },
    { label: 'Tell him to fuck your ass', goto: ['gschool_detention', 'ass_fuck'] },
  ]);
  scene.build();
}

function enterAssFuck(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/boy/feofan/sex/school/detanal.jpg');
  scene.text('Feeling incredibly turned on, you want to feel him in your ass, so you touch his chest again to stop his movement.');
  scene.text('"You were thinking about fucking a schoolgirl in her tight little ass, right? So fuck my ass!" you say teasingly.');
  scene.text('It takes a moment for him to process what you just said, but when it dawns on him that he can realize his porn magazine fantasy, he wastes no time, perhaps afraid you might change your mind.');
  scene.text('He climbs up on the table next to you, spooning you as he rubs the tip of his dick against your anus. He then gently eases his dick into your ass, eliciting a moan of pleasure and pain from you as he slowly slides his way deeper, only stopping when he feels you tense up. He then starts fucking your ass, gingerly at first, savoring the feeling of being inside your other hole.');
  scene.text('He even reaches over and starts rubbing your clit as he moves in and out, and as your moans get louder, you feel yourself building up towards an orgasm, but his slow pace is driving you mad and you can\'t take it anymore. You reach back, grab his ass and pull him closer so his dick slides deeper up your ass.');
  scene.text('Perceptive as ever, he takes the hint and works his way deeper into you until he\'s balls deep. Once there, he starts fucking you faster too, slowly building up speed until he\'s hammering your ass, giving you exactly what you wanted.');
  (s as any).anal_slip = ((s as any).anal_slip ?? 0) + (4);
  qspCall(s, 'arousal', 'vaginal_finger', 10, 'dom');
  qspCall(s, 'arousal', 'anal', (-10), 'dom');
  qspCall(s, 'stat', '');
  scene.text('Once the sensation passes, you pull away causing his dick to slide out of your ass. Sliding off the table, you pull him with you before grabbing his underwear and wiping his dick with them.');
  scene.actions([
    { label: 'Make him cum', goto: ['gschool_detention', 'strange_cum'] },
  ]);
  scene.build();
}

function enterStrangeCum(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A152', 1);
  qspCall(s, 'arousal', 'hj', 5, 'dom');
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0));
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/feofan/sex/school/detcum.jpg');
  scene.text('You squat down in front of him again and start jerking him off. All things considered, you\'re surprised and very pleased with how long he\'s lasted and are just about to take Feofan\'s cock into your mouth again when he groans and suddenly shoots his load across your face.');
  scene.text('You open your mouth and some of the follow-up spurts end up coating your tongue, but most of it still manages to hit your face.');
  scene.text('You then take his dick in your mouth and suck it, swallowing the last few small spurts in your mouth, cleaning him up while relishing the taste of his cum.');
  scene.text('When his dick starts going soft, you release him and start cleaning yourself up, as does he. He even helps you wipe the cum off your face, making sure you don\'t miss a spot.');
  scene.text('Once you\'re both dressed and presentable once more, you start heading back, but after taking one or two steps, he grabs your arm and suddenly kisses you on the lips. "Thanks for not telling and well… everything. I won\'t tell anyone about this, I promise. You\'re a cool chick."');
  scene.text('He gives you a look of longing, lust and admiration, then nods his head and heads back out. You follow him a few minutes later, taking your seat opposite him again and waiting for detention to end. If detention is always like this, maybe you need to get in trouble more often!');
  scene.text('You spend the rest of the time playing on your phone and occasionally giving Feofan a conspiratorial grin, which he returns in kind.');
  // TODO-QSP: dynamic text: Once detention ends and you start to head out, Feofan catches up to you. "Hey <<...
  scene.text(`Once detention ends and you start to head out, Feofan catches up to you. "Hey ${((s as any).pcs_nickname ?? 0)}, do you think maybe sometime you might want to go out or maybe you want to come over to my place and we can study together or something?" he asks with a hopeful look in his eyes.`);
  scene.text('You stop and actually consider it for a moment. "Let me think about it."');
  scene.text('He looks a little crestfallen, but still hopeful. "Okay. Talk to you on Monday then."');
  scene.actions([
    { label: 'Go home', goto: ['gschool_detention', 'end'] },
  ]);
  scene.build();
}

function enterCompany(s: GameState, scene: SceneBuilder): void {
  if (((s as any).Marcus_sextype ?? 0) < 2  &&  ((s as any).npc_rel ?? 0)?.['A146'] > 50) {
    scene.actions([
      { label: 'Enjoy some company', goto: ['gschool_detention', 'company'] },
    ]);
  } else {
    if (((s as any).Marcus_sextype ?? 0) === 2) {
      scene.actions([
        { label: 'Enjoy some company', goto: ['gschool_detention', 'company2'] },
      ]);
    }
  }
  (s as any).minut = ((s as any).minut ?? 0) + 120;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big146.jpg');
  if ((!((s as any).Marcus_sextype ?? 0))) {
    // TODO-QSP: dynamic text: Shortly after the teacher stops paying attention to everyone, Marcus walks over ...
    scene.text(`Shortly after the teacher stops paying attention to everyone, Marcus walks over and sits next to you. "Hey ${((s as any).pcs_nickname ?? 0)}. What's up?"`);
    scene.text('You give him a friendly smile. "Doing time for my crime. At least I won\'t have to do it alone now."');
    scene.text('He laughs a little. "Is that an invitation for me to stick around and talk?"');
    scene.text('He seems a bit nervous, which is unusual for him.');
    scene.text('"Sure, I\'d like that," you reply and the two of you are soon talking.');
    scene.text('He mostly asks you about yourself; what you like, what you do, your favorite movies, books and other bits of information like that.');
    scene.text('Detention definitely isn\'t fun, but Marcus certainly makes the time fly. Before you know it, the bell rings and you pack your things before leaving.');
  } else {
    // TODO-QSP: dynamic text: Shortly after the teacher stops paying attention to everyone, Marcus walks over ...
    scene.text(`Shortly after the teacher stops paying attention to everyone, Marcus walks over and sits next to you. "Hey ${((s as any).pcs_nickname ?? 0)}. What's up?"`);
    scene.text('You give him a friendly smile. "Doing time for my crime. At least I won\'t have to do it alone."');
    scene.text('He laughs a little. "Yeah, I\'ve seen your name on the detention sheet, so I knew you had been a bad girl."');
    scene.text('His expression turns serious and he talks softly so no one can overhear him. "I\'ve been wanting to talk to you about the other day… You know, in the bathroom?"');
    scene.text('He flushes as he finishes his sentence and ou grin - it\'s funny watching him getting a little embarrassed about it.');
    scene.text('"What about it?" you ask, feigning indignance to tease him. "I had fun. Didn\'t you?"');
    scene.text('He looks slightly panicked as he reassures you. "No, no, no! It\'s not that! I had fun, it was great! I, um… Well, I was just wondering if you wanted to talk?"');
    scene.text('He seems a bit nervous, which is unusual for him.');
    scene.text('"Sure, I\'d like that," you reply and the two of you are soon talking.');
    scene.text('He mostly asks you about you; What you like, what you do, your favorite movies, books and other bits of information like that.');
    scene.text('Detention definitely isn\'t fun, but Marcus certainly makes the time fly. Before you know it, the bell rings and you pack your things before leaving.');
  }
  scene.actions([
    { label: 'After detention', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big146.jpg');
    // TODO-QSP: dynamic text: As you leave the school building, Marcus jogs to catch up to you. "Hey <<$pcs_ni...
    scene.text(`As you leave the school building, Marcus jogs to catch up to you. "Hey ${((s as any).pcs_nickname ?? 0)}, wait up!"`);
    scene.text('You stop and turn around. He looks down at you as he blushes.');
    // TODO-QSP: dynamic text: "I like you, <<$pcs_nickname>>… And… I'd like to walk you home, if that's okay?"
    scene.text(`"I like you, ${((s as any).pcs_nickname ?? 0)}… And… I'd like to walk you home, if that's okay?"`);
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A146', (-1));
    scene.text('You put your hand on his chest. "I like you too, Marcus, but I can walk home on my own. Thank you for the offer, though. See you later?"');
    scene.text('He nods, but is clearly a little disappointed. "Sure, see you later. Take care."');
    scene.text('He walks away without another look at you.');
    scene.actions([
      { label: 'Go home', goto: ['gschool_detention', 'end'] },
    ]);
  } },
      { label: 'Agree', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A146', 1);
    scene.img('images/characters/pavlovsk/school/boy/marcus/marcuswalk.jpg');
    scene.text('You smile at him. "I like you too, Marcus, and I\'d love it if you walked me home."');
    scene.text('He smiles and walks with you as the two of you continue your conversation from earlier, mostly revolving around you. It seems that he wants to know everything about you.');
    scene.text('The way home takes way longer than usual, but you\'re in no hurry in his company; at one point, he even puts his arm around your shoulder as you walk.');
    scene.text('As you approach your building, you stop and turn and smile at him. "We\'re here. Thank you for walking me home."');
    scene.text('He leans down to kiss you, and you feel a warm tingle in your belly.');
    scene.text('Way too quickly, he breaks the kiss, his eyes locked with yours. "Mind if I call you some time?"');
    qspCall(s, 'arousal', 'kiss', 2);
    qspCall(s, 'arousal', 'end');
    scene.text('"Ye- no! I mean, I would like that." you reply, still a little dazed from the kiss, and give him your number.');
    scene.text('He grins, both at your reaction and the fact he got your phone number. "Okay. I\'ll call you then. Talk to you later."');
    scene.text('He waits until you head inside before he leaves.');
    scene.actions([
      { label: 'Go home', handler: (st: GameState) => {
    if (((s as any).hour ?? 0) === 8) {
      (s as any).minut = ((s as any).minut ?? 0) + (180 - ((s as any).minut ?? 0));
    } else {
      if (((s as any).hour ?? 0) === 9) {
        (s as any).minut = ((s as any).minut ?? 0) + (120 - ((s as any).minut ?? 0));
      }
    }
    qspCall(s, 'stat', '');
  }, goto: ['pod_ezd', 'etaj_1'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterCompany2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big146.jpg');
  // TODO-QSP: dynamic text: Shortly after the teacher stops paying attention to everyone, Marcus walks over ...
  scene.text(`Shortly after the teacher stops paying attention to everyone, Marcus walks over and sits next to you. "Hey ${((s as any).pcs_nickname ?? 0)}. What's up?"`);
  scene.text('You give him a friendly smile. "Doing time for my crime. At least I won\'t have to do it alone."');
  scene.text('He laughs a little. "Yeah, I\'ve seen your name on the detention sheet, so I knew you had been a bad girl."');
  scene.text('His expression turns serious and he talks softly so no one can overhear him. "I\'ve been wanting to talk to you about the other day… You know, in the bathroom?"');
  scene.text('He flushes as he finishes his sentence and ou grin - it\'s funny watching him getting a little embarrassed about it.');
  scene.text('"What about it?" you ask, feigning indignance to tease him. "I had fun. Didn\'t you?"');
  scene.text('He looks slightly panicked as he reassures you. "No, no, no! It\'s not that! I had fun, it was great! I, um… Well, I was just wondering if you wanted to meet me after detention?"');
  qspCall(s, 'willpower', 'sex', 'resist');
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
    scene.img('images/characters/pavlovsk/school/boy/marcus/marcusflirt.jpg');
    scene.text('You shake your head. "Sorry, but I don\'t have time today."');
    scene.text('He accepts it gracefully. "It\'s cool. Just forget I asked, okay?"');
    scene.text('He starts to get up, but you stop him. "Maybe some other time? Either way, we can still talk. It beats sitting around doing homework or something, right?"');
    scene.text('He smiles and nods. "Sure, works for me. So, did you hear about what happened in gym class yesterday?"');
    scene.text('The two of you talk for the rest of detention about a variety of things. Once detention is over, he walks you out of the school and bids you farewell.');
    scene.actions([
      { label: 'Go home', goto: ['gschool_detention', 'end'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Agree', handler: (st: GameState) => {
    ((s as any).npc_had_sex ?? {})['A146'] = 1;
    qspCall(s, 'npc_relationship', 'modify', 'A146', 1);
    scene.img('images/locations/pavlovsk/school/detention/detention.jpg');
    scene.text('You grin and leave him waiting, pretending you\'re not sure how to answer him. You know exactly what meeting him would be about and you would like that very much.');
    scene.text('You reach over and grab his crotch, leaving no doubt in his mind as you lean over and whisper in his ear. "Sure, we can hang out after detention. We can do… <i>anything you want</i>."');
    scene.text('You lean back, letting go of him and biting your lower lip at the thought of what\'s waiting for you. A grin spreads on his face and he takes a moment to adjust his pants before he looks up at the clock and a frown dampens his excitement.');
    scene.text('"Fuck me, this is going to be the longest detention of my life!"');
    scene.text('You can\'t help but laugh at his expression when he says that.');
    scene.text('"Well, we would talk… You know, to kill the time?" you suggest.');
    scene.text('He nods and the two of you are soon talking, mostly about what he likes about Russia before he tells what it\'s like living in America.');
    scene.actions([
      { label: 'After detention', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'A146');
    scene.img('images/characters/pavlovsk/school/boy/marcus/sex/school/detmbj.jpg');
    scene.text('When the bell rings, you both get up and head out of the library, but instead of heading out of the school, you duck into a side hall. Marcus opens one of the classroom doors and pulls you in with him before closing the door behind you.');
    scene.text('He grins. "You said you would do anything I want, right? So, if I tell you to do something, you will?"');
    scene.text('You roll your eyes slightly, but also smile at the little game before nodding.');
    scene.text('He grins and pulls his dick out of his pants. "Alright. I want you to suck my dick."');
    // TODO-QSP: dynamic text: You squat down in front of him without delay, take his <<dick>>cm <<$dick_girth>...
    scene.text(`You squat down in front of him without delay, take his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock into your mouth and start sucking it, your tongue swirling around the tip as you bob your head up and down.`);
    scene.text('He cedes complete control of the action to you, content with having his cock in your mouth.');
    qspCall(s, 'arousal', 'bj', 5);
    scene.text('After a few minutes, he touches your chin. "Stop. Get up and get naked, then bend over the desk."');
    scene.text('You do as he tells you, finding this oddly arousing.');
    scene.actions([
      { label: 'Anal', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/marcus/sex/school/detmanal.jpg');
    scene.text('You strip from your clothes and bend over the desk. You look back and see him pull a small bottle of lube out of his pocket and lubing his dick up really well, then spreading some of it on your anus as well.');
    scene.text('"Reach back and spread your ass cheeks. Don\'t worry, I used lots of lube and I\'ll be gentle."');
    // TODO-QSP: dynamic text: You follow his command and reach back to spread your cheeks. You feel him rub th...
    scene.text(`You follow his command and reach back to spread your cheeks. You feel him rub the head of his dick against your asshole for a moment before easing the tip inside. He stops almost at once, giving you a moment to adjust, but thanks to the lube, his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock slides surprisingly easily into your ass.`);
    scene.text('Marcus gently starts fucking your ass, carefully working his way deeper into you and giving you plenty of time to get used to the size of his cock.');
    scene.text('Before long, you find yourself moaning in pleasure and feel that familiar sensation building in your groin.');
    (s as any).anal_slip = ((s as any).anal_slip ?? 0) + (10);
    qspCall(s, 'arousal', 'anal', 15);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/marcus/sex/school/detmanal1.jpg');
    scene.text('He fucks your ass doggy style for a while before pulling out and rolling you over on the desk. With your legs spread, he pushes his cock back into your ass. This time, it slides right in with no pain at all. The only thing you seem to be capable of feeling right now is lust.');
    scene.text('"Play with your pussy, fingerbang yourself." he tells you as he picks up the pace.');
    scene.text('You start playing with your clit and feel an intense orgasm building up inside you.');
    qspCall(s, 'arousal', 'anal', 10);
    qspCall(s, 'arousal', 'vaginal_finger', 10);
    scene.text('During your climax, you don\'t even notice or feel him shooting his load into your ass, filling you with his hot sticky cum as you cum together.');
    qspCall(s, 'cum_call', 'anus', ((s as any).boy ?? 0));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/marcus/sex/school/detmcum.jpg');
    scene.text('When you regain your senses, you feel your ass gaping wide as cum dribbles out of it and drips down on the desk underneath you. Marcus then pulls you up and gives you a long, passionate kiss.');
    scene.text('He breaks the kiss and steps away to give you room, but when you try to get off the desk, he has to hold you for a moment - your legs feel like jelly after this orgasm and you giggle into his chest until you feel strong enough to stand on your own.');
    scene.text('He gets dressed and helps you gather your own clothes, waiting patiently until you get yourself cleaned up and dressed as well before he leads you out of the school.');
    // TODO-QSP: dynamic text: Once outside, he stops and turns to you. "I like you, <<$pcs_nickname>>. Can I w...
    scene.text(`Once outside, he stops and turns to you. "I like you, ${((s as any).pcs_nickname ?? 0)}. Can I walk you home?"`);
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A146', (-1));
    scene.text('You put your hand on his chest. "I like you too, Marcus, but I can walk home on my own. Thank you for the offer, though. See you later?"');
    scene.text('He nods, but is clearly a little disappointed. "Sure, see you later. Take care."');
    scene.text('He walks away without another look at you.');
    scene.actions([
      { label: 'Go home', goto: ['gschool_detention', 'end'] },
    ]);
  } },
      { label: 'Yes', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A146', 1);
    scene.img('images/characters/pavlovsk/school/boy/marcus/marcuswalk.jpg');
    scene.text('You smile at him. "I like you too, Marcus, and I\'d love it if you walked me home."');
    scene.text('He smiles and walks with you as the two of you continue your conversation from earlier, mostly revolving around you. It seems that he wants to know everything about you.');
    scene.text('The way home takes way longer than usual, but you\'re in no hurry in his company; at one point, he even puts his arm around your shoulder as you walk.');
    scene.text('As you approach your building, you stop and turn and smile at him. "We\'re here. Thank you for walking me home."');
    scene.text('He leans down to kiss you, and you feel a warm tingle in your belly.');
    scene.text('Way too quickly, he breaks the kiss, his eyes locked with yours. "Mind if I call you some time?"');
    qspCall(s, 'arousal', 'kiss', 2);
    qspCall(s, 'arousal', 'end');
    scene.text('"Ye- no! I mean, I would like that." you reply, still a little dazed from the kiss, and give him your number.');
    scene.text('He grins, both at your reaction and the fact he got your phone number. "Okay. I\'ll call you then. Talk to you later."');
    scene.text('He waits until you head inside before he leaves.');
    scene.actions([
      { label: 'Go home', handler: (st: GameState) => {
    if (((s as any).hour ?? 0) === 8) {
      (s as any).minut = ((s as any).minut ?? 0) + (180 - ((s as any).minut ?? 0));
    } else {
      if (((s as any).hour ?? 0) === 9) {
        (s as any).minut = ((s as any).minut ?? 0) + (120 - ((s as any).minut ?? 0));
      }
    }
    qspCall(s, 'stat', '');
  }, goto: ['pod_ezd', 'etaj_1'] },
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

function enterIvanov(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/teacher/serafim/sex/school/teacher.jpg');
  // TODO-QSP: dynamic text: Thirty minutes or so into detention, Mr. Ivanov calls your name. "Miss <<$pcs_la...
  scene.text(`Thirty minutes or so into detention, Mr. Ivanov calls your name. "Miss ${((s as any).pcs_lastname ?? 0)}, please come with me. I need your help with something."`);
  scene.text('He stands up and waits for you to walk up to him, then leads you out of the library and down the hall to the teachers\' lounge.');
  scene.text('"Please take a seat over there," he says once you\'re inside.');
  scene.text('You walk over and sit down in the offered chair, more than a little confused. He seems to ignore you as he walks out of your view, but when you\'re about to ask why he brought you here, you hear him walk up behind you and stop.');
  scene.text('"It\'s time that you repay me for keeping your little secret about cutting class…"');
  scene.text('Turning in your chair, you see his dick hnaging out of his pants; the bastard already had sex with you for his silence and now he expects you to continue getting him off?!');
  scene.text('The wheels are turning in your head: On one hand, you\'ve already let him have his way with you, so your reluctance at the thought probably isn\'t as strong as it should be, but that doesn\'t change the fact that he\'s blackmailing you. Who\'s to say where that leads or when he\'ll be satisfied?');
  qspCall(s, 'willpower', 'sex', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Tell him to fuck off [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Tell him to fuck off [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/fuckoff.jpg');
    scene.text('You flip him off and stand up. "Fuck you! I already gave you what you wanted to be silent."');
    scene.text('You take a few steps towards the door, but stop dead in your tracks when you hear your own voice, offering yourself to Mr. Ivanov so he doesn\'t tell on you. The bastard recorded you in the bathroom?!');
    scene.text('You turn around to see him holding his phone, a hard, triumphant grin meeting your eyes as he answers the silent question: "That\'s right, I recorded our little chat. I knew you were going to offer sex - right from the first time you entered my class, I knew you were a little whore, and I was right, wasn\'t I?"');
    scene.text('He starts walking towards you. "So now you\'re going to be my little whore any time I want, or else I\'ll get you expelled for trying to have sex with one of your teachers. I\'ll make sure your parents hear about it, too. Just imagine how disappointed they\'ll be at how their daughter turned out…"');
    scene.text('You\'re completely stunned, shock and fear burning in your chest like fire. Telling your parents? Getting you expelled from school? You knew he was a twisted motherfucker, but <i>this</i>? You had no idea he was the kind of scum who would threaten to destroy your life so he could own you.');
    scene.text('A part of you tries to stay rational and thinks that he would get in as much trouble as you, if not more, if the school found out. Problem is, you can\'t <b>prove</b> that you had sex, that he took you up on your offer, that he fucked a student. The only recording of the event is his and he\'s probably smart enough to cut it so it only has you soliciting him. Would they really expel you?');
    qspCall(s, 'willpower', 'sex', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: '"Fuck you, asshole!" [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: '"Fuck you, asshole!" [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/fuckoff.jpg');
    scene.text('You gather all of your courage in one defiant smirk and flip him off again. "Fuck you, asshole. You hear me? FUCK YOU!!! Do what you want, but I\'ll make sure they know you fucked me and tried to blackmail me, and then we\'ll see if they let you keep your job."');
    scene.text('You storm out of the room and head back towards the library, your heart pounding in your chest. Several minutes later, Mr. Ivanov returns as well and sits back down behind his desk. He doesn\'t say anything to you for the rest of the detention, leaving you to contemplate in silence whether your decision was the right one or not.');
    scene.text('When the bell rings, you quickly gather your things and head home.');
    scene.actions([
      { label: 'Go home', goto: ['gschool_detention', 'end'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Suck his dick', goto: ['gschool_detention', 'Ivanov_suck'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Suck his dick', goto: ['gschool_detention', 'Ivanov_suck'] },
  ]);
  scene.build();
}

function enterIvanovSuck(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A129');
  scene.img('images/characters/pavlovsk/school/teacher/serafim/sex/school/teacherbj.jpg');
  scene.text('You give in. You don\'t know if this will save you from greater damage or destroy your life in the long run, but as you get on your knees in front of Mr. Ivanov, all you feel is defeat. You reach out for his dick and start stroking it before you wrap your lips tightly around his shaft.');
  scene.text('Your hand moves up and down in perfect sync with the bobs of your head, sucking him as well as you can in an attempt to get this over with as quickly as possible. He\'s not showing any signs of getting close to cumming though, even after ten minutes of intense sucking.');
  scene.text('Instead of the premature ejaculation you were hoping for, he merely pulls his dick out of your mouth and pulls you to your feet. "Alright, enough of that, girl. Bend over the table."');
  qspCall(s, 'arousal', 'bj', 5);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Bend over', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/serafim/sex/school/teacherlick.jpg');
    scene.text('You turn and bend over the table, silently preparing yourself for whatever he has in mind as he pulls your skirt up and your panties down.');
    scene.text('His hands pull your ass cheeks apart and you feel his tongue against your asshole, wet and warm, utterly disgusting you. He licks your anus before he uses his fingers to work his saliva in, then goes back to licking it some more.');
    scene.text('He does this several times, preparing you for penetration no doubt, and all you can do is wait in fearful anticipation. Eventually, you hear him rummaging and then something bigger than a finger rubs against your anus.');
    qspCall(s, 'arousal', 'rimming', 5);
    (s as any).anal_slip = ((s as any).anal_slip ?? 0) + (4);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Take his dick up the ass', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/serafim/sex/school/teacheranal.jpg');
    // TODO-QSP: dynamic text: You were bracing for the push and the feeling of him entering. What you didn't p...
    scene.text(`You were bracing for the push and the feeling of him entering. What you didn't prepare for was his hard spank on your ass just before he shoves his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock into you, causing you to tense up in surprise.`);
    scene.text('He doesn\'t let up, though; he grabs hold of your hips and drives himself balls deep inside you.');
    scene.text('All you can do is cry out in pain, but that\'s nothing compared to the agony that comes next as he starts hammering into your ass in violent thrusts, your thighs banging hard against the edge of the table. Any residual doubt that he does this deliberately to hurt you are eliminated by his words.');
    scene.text('"That\'s right whore, scream for me! Your pain is music to my ears."');
    scene.text('Your hands grasp the edge of the table tightly and you try to relax to endure his pounding. It\'s kind of working, but you\'re apparently not making enough noises of pain for his liking. He pulls nearly all the way out of you and slams back all the way in, banging your thighs so hard against the table that the pain shoots up your spine and down to your toes.');
    scene.text('You cry out again and he returns to jackhammering your ass, but you grit your teeth and bear it as well as you can; you muffle every sound he wants to hear and swallow your tears so he doesn\'t get the satisfaction of seeing you cry.');
    qspCall(s, 'arousal', 'anal', 20, 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Facial', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/serafim/sex/school/teachercum.jpg');
    scene.text('You can\'t tell how long he violates your ass, other than through the fact that your thighs have been thrust against the edge of the table so many times that you\'re sure your legs are badly bruised.');
    scene.text('It lasts so long that the pain doesn\'t seem to let up, but only becomes greater, filling you up like a liquid. You\'re close to the point where you don\'t think you can take it anymore when he finally stops and pulls out.');
    scene.text('He jerks you back and forces you down on your knees, or at least that\'s how he acts - in truth, your legs just give away as soon as you no longer have the table to support yourself on.');
    scene.text('"Jerk me off on your face!" he barks.');
    scene.text('For a moment, you consider ignoring him and his dick hanging over you, but you\'re almost through this and so decide to tilt your head back and start jerking him off, keeping your eyes closed not only to protect them, but also because of your utter exhaustion.');
    scene.text('Not long after, you feel a spurt of warm cum land on your face, quickly followed by several more. Once finished, he moves over, grabs some tissues off the table and cleans his dick.');
    scene.text('"Now you know your place, whore. I\'ll have you properly trained before long," he says before he breaks into a cruel smile. "We\'ll be seeing a lot more of each other in the future. Now get your ass back to detention, where whores like you belong!"');
    qspCall(s, 'arousal', 'hj', 5);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Back to detention', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/detention/detention.jpg');
    scene.text('You clean yourself up, every movement a new world of agony, then head back to the library. You feel empty inside, walking slowly to keep yourself from limping and sitting down with care - you still almost cry out in pain when you sit down on your abused ass.');
    scene.text('Several minutes later, Mr. Ivanov returns as well and sits back at the front. He doesn\'t say anything to you for the rest of the detention, leaving you to quietly nurse your injuries.');
    scene.text('When the bell rings, you quickly gather your things and head home.');
    scene.actions([
      { label: 'Go home', goto: ['gschool_detention', 'end'] },
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

function enterRoamAround(s: GameState, scene: SceneBuilder): void {
  (s as any).i = Math.floor(Math.random() * 100) + 1;
  if (((s as any).i ?? 0) <= 10) {
    // TODO-QSP: killvar 'i'
    scene.actions([{ label: 'Continue', goto: ['gschool_detention', 'eatout'] }]);
  } else {
    if (((s as any).i ?? 0) <= 20) {
      // TODO-QSP: killvar 'i'
      scene.actions([{ label: 'Continue', goto: ['gschool_detention', 'finger'] }]);
    } else {
      if (((s as any).i ?? 0) <= 30) {
        // TODO-QSP: killvar 'i'
        scene.actions([{ label: 'Continue', goto: ['gschool_detention', 'doggy'] }]);
      } else {
        if (((s as any).i ?? 0) <= 40) {
          // TODO-QSP: killvar 'i'
          scene.actions([{ label: 'Continue', goto: ['gschool_detention', 'couple'] }]);
        } else {
          if (((s as any).i ?? 0) <= 50) {
            // TODO-QSP: killvar 'i'
            scene.actions([{ label: 'Continue', goto: ['gschool_detention', 'lesbian'] }]);
          } else {
            if (((s as any).i ?? 0) <= 60) {
              // TODO-QSP: killvar 'i'
              scene.actions([{ label: 'Continue', goto: ['gschool_detention', 'anal'] }]);
            } else {
              // TODO-QSP: killvar 'i'
              scene.actions([{ label: 'Continue', goto: ['gschool_detention', 'nothing'] }]);
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterNothing(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + (60 - ((s as any).minut ?? 0));
  qspCall(s, 'stat', '');
  qspCall(s, 'gschool_events', 'rand_teacher_arg');
  scene.img('images/locations/pavlovsk/school/detention/shelves.jpg');
  scene.text('As you walk around, you look at several books, but find nothing of interest and quickly get bored.');
  scene.text('You debate between going back to the front of the library or maybe doing something naughty.');
  scene.actions([
    { label: 'Go back to the front', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/detention/detention.jpg');
    scene.text('You decide to just go back to the front of the library and wait it out at one of the tables.');
    qspCall(s, 'gschool_detention', 'sitting_events');
  } },
    { label: 'Masturbate', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/detention/sex/mast.mp4');
    scene.text('Bored out of your mind and feeling a little sexually frustrated, you remove enough of your clothes to expose your pussy. Then, sitting down with your back to a shelf and your legs spread wide, you start to masturbate.');
    scene.text('You end up having to use your panties as something to bite down on to stop yourself from crying out. You\'re not sure how long it takes, but no one wanders by and you orgasm hard. It rocks your whole body, leaving you shaking in its aftermath.');
    scene.text('After a few minutes, you recover and get dressed again, peeking around the corner to make sure no one heard you. Once it\'s clear, you decide to head back to the tables at the front and wait out the rest of detention there.');
    qspCall(s, 'arousal', 'masturbate', 15);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go home', goto: ['gschool_detention', 'end'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterEatout(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + (60 - ((s as any).minut ?? 0));
  qspCall(s, 'stat', '');
  qspCall(s, 'gschool_events', 'rand_teacher_arg');
  scene.img('images/locations/pavlovsk/school/detention/sex/eatout.mp4');
  scene.text('As you walk around, you hear some soft moaning coming from further back and quietly move forward to peek around one of the bookshelves.');
  scene.text('You see Christina sitting in a chair, her legs spread as Svyatoslav kneels between them, vigorously eating her out and fingerbanging her pussy.');
  scene.text('You bite your lip as you watch, feeling your own arousal mounting.');
  qspCall(s, 'arousal', 'voyeur_sex', 20);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/detention/sex/eatout.mp4');
    scene.text('You decide to watch them. He seems to really know what he\'s doing as she\'s fighting to stop herself from screaming out.');
    scene.text('Many minutes go by before she starts to spasm, clearly having an orgasm. Once it\'s over, she stands and pulls up her panties as he starts to unbutton his pants.');
    scene.text('She says something that leads to a bit of a heated discussion that you can\'t quite hear, but you think you know what it\'s about. He eventually gives up and buttons his pants up before they both head back to the front of the library.');
    qspCall(s, 'arousal', 'voyeur_sex', 20);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Masturbate', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/detention/sex/mast.mp4');
    scene.text('After they leave, you\'re unable to take it anymore - you remove enough of your clothes to expose your pussy and sit down with your back to a shelf. Your legs spread wide, you start to masturbate.');
    scene.text('You end up having to use your panties as something to bite down on to stop yourself from crying out. You\'re not sure how long it takes, but no one wanders by and you orgasm hard. It rocks your whole body, leaving you shaking in its aftermath.');
    scene.text('After a few minutes, you recover and get dressed again before heading back to the tables at the front to wait out the rest of detention there.');
    qspCall(s, 'arousal', 'masturbate', 15);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go home', goto: ['gschool_detention', 'end'] },
    ]);
  } },
    ]);
  } },
    { label: 'Masturbate', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/detention/sex/mast.mp4');
    scene.text('Unable to take it anymore, you remove enough of your clothes to expose your pussy. Then, sitting down with your back to a shelf and your legs spreading wide, you start to masturbate. You can just barely hear the two of them, which only enhances your own arousal.');
    scene.text('You end up having to use your panties as something to bite down on to stop yourself from crying out. You\'re not sure how long it takes, but no one wanders by and you orgasm hard. It rocks your whole body, leaving you shaking in its aftermath.');
    scene.text('After a few minutes, you recover and get dressed again, peeking around the corner to see that the couple are gone. You decide to head back to the tables at the front and wait out the rest of detention there.');
    qspCall(s, 'arousal', 'masturbate', 15);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go home', goto: ['gschool_detention', 'end'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterFinger(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + (60 - ((s as any).minut ?? 0));
  qspCall(s, 'stat', '');
  qspCall(s, 'gschool_events', 'rand_teacher_arg');
  scene.img('images/locations/pavlovsk/school/detention/sex/finger.mp4');
  scene.text('As you walk around, you hear some soft moaning coming from further back and quietly move forward to peek around one of the bookshelves.');
  scene.text('You see Lizaveta leaning back against a book shelf, her shirt open and skirt pulled up as Andrey sucks on her exposed nipple and slides his hand inside her panties.');
  scene.text('You bite your lip as you watch, feeling your own arousal mounting. You smirk in amusement at the idea of the queen of rumors fucking her best friend\'s boyfriend. She would be terrified if anyone found out.');
  qspCall(s, 'arousal', 'voyeur_sex', 20);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/detention/sex/blowjob.mp4');
    scene.text('You decide to watch them. He seems to really know what he\'s doing as she\'s fighting to stop herself from screaming out.');
    scene.text('Many minutes go by before she pulls her shirt and bra and, after a bit more finger banging from him, she starts to spasm as she has an orgasm.');
    scene.text('He keeps it up through her whole orgasm, and once it\'s finally over, she drops down to her knees as he pulls his dick out of his pants.');
    scene.text('She immediately starts sucking his cock, bobbing her head up and down along the shaft before he grunts and she slows and uses her hand to help milk his cock into her mouth.');
    scene.text('Only once he\'s finished does she stop. Having swallowed his whole load, they both get dressed and head back to the front of the library.');
    qspCall(s, 'arousal', 'voyeur_sex', 20);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Masturbate', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/detention/sex/mast.mp4');
    scene.text('After they leave, you\'re unable to take it anymore - you remove enough of your clothes to expose your pussy and sit down with your back to a shelf. Your legs spread wide, you start to masturbate.');
    scene.text('You end up having to use your panties as something to bite down on to stop yourself from crying out. You\'re not sure how long it takes, but no one wanders by and you orgasm hard. It rocks your whole body, leaving you shaking in its aftermath.');
    scene.text('After a few minutes, you recover and get dressed again before heading back to the tables at the front to wait out the rest of detention there.');
    qspCall(s, 'arousal', 'masturbate', 15);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go home', goto: ['gschool_detention', 'end'] },
    ]);
  } },
    ]);
  } },
    { label: 'Masturbate', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/detention/sex/mast.mp4');
    scene.text('Unable to take it anymore, you remove enough of your clothes to expose your pussy. Then, sitting down with your back to a shelf and your legs spreading wide, you start to masturbate. You can just barely hear the two of them, which only enhances your own arousal.');
    scene.text('You end up having to use your panties as something to bite down on to stop yourself from crying out. You\'re not sure how long it takes, but no one wanders by and you orgasm hard. It rocks your whole body, leaving you shaking in its aftermath.');
    scene.text('After a few minutes, you recover and get dressed again, peeking around the corner to see that the couple are gone. You decide to head back to the tables at the front and wait out the rest of detention there.');
    qspCall(s, 'arousal', 'masturbate', 15);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go home', goto: ['gschool_detention', 'end'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterDoggy(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + (60 - ((s as any).minut ?? 0));
  qspCall(s, 'stat', '');
  qspCall(s, 'gschool_events', 'rand_teacher_arg');
  scene.img('images/locations/pavlovsk/school/detention/sex/doggy\'+rand(1, 2)+\'.mp4');
  scene.text('As you walk around, you hear some soft moaning coming from further back and quietly move forward to peek around one of the bookshelves.');
  scene.text('In the middle of a pair of shelves is Lena, down on all fours with Lavrenti kneeling behind her, pounding her hard. By the look on her face, she seems to be enjoying every second of it and you briefly wonder if Vitek knows Lavrenti is screwing his sister.');
  scene.text('You bite your lip as you watch, feeling your own arousal mounting.');
  qspCall(s, 'arousal', 'voyeur_sex', 20);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/detention/sex/doggy\'+rand(1, 2)+\'.mp4');
    scene.text('You watch them as they go at it for some time. She\'s fighting to stop herself from screaming out as she starts to spasm.');
    scene.text('He keeps it up through her whole orgasm and hammers away at her for a few more minutes before pulling out and shooting his load all over her ass.');
    scene.text('Afterwards, they get cleaned up and dressed before exchanging a few quiet words and heading back to the front of the library.');
    qspCall(s, 'arousal', 'voyeur_sex', 20);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Masturbate', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/detention/sex/mast.mp4');
    scene.text('After they leave, you\'re unable to take it anymore - you remove enough of your clothes to expose your pussy and sit down with your back to a shelf. Your legs spread wide, you start to masturbate.');
    scene.text('You end up having to use your panties as something to bite down on to stop yourself from crying out. You\'re not sure how long it takes, but no one wanders by and you orgasm hard. It rocks your whole body, leaving you shaking in its aftermath.');
    scene.text('After a few minutes, you recover and get dressed again before heading back to the tables at the front to wait out the rest of detention there.');
    qspCall(s, 'arousal', 'masturbate', 15);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go home', goto: ['gschool_detention', 'end'] },
    ]);
  } },
    ]);
  } },
    { label: 'Masturbate', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/detention/sex/mast.mp4');
    scene.text('Unable to take it anymore, you remove enough of your clothes to expose your pussy. Then, sitting down with your back to a shelf and your legs spreading wide, you start to masturbate. You can just barely hear the two of them, which only enhances your own arousal.');
    scene.text('You end up having to use your panties as something to bite down on to stop yourself from crying out. You\'re not sure how long it takes, but no one wanders by and you orgasm hard. It rocks your whole body, leaving you shaking in its aftermath.');
    scene.text('After a few minutes, you recover and get dressed again, peeking around the corner to see that the couple are gone. You decide to head back to the tables at the front and wait out the rest of detention there.');
    qspCall(s, 'arousal', 'masturbate', 15);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go home', goto: ['gschool_detention', 'end'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterCouple(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + (60 - ((s as any).minut ?? 0));
  qspCall(s, 'stat', '');
  qspCall(s, 'gschool_events', 'rand_teacher_arg');
  scene.img('images/locations/pavlovsk/school/detention/sex/couple.mp4');
  scene.text('As you walk around, you hear some soft moaning coming from further back and quietly move forward to peek around one of the bookshelves.');
  scene.text('You see Stasya standing on one leg with her skirt pulled up and Andrey with his pants pulled down, vigorously fucking as they kiss and hold each other. It\'s almost touching, if they weren\'t fucking in a library with other people nearby.');
  scene.text('You bite your lip as you watch, feeling your own arousal mounting.');
  qspCall(s, 'arousal', 'voyeur_sex', 20);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/detention/sex/couple.mp4');
    scene.text('You decide to watch them. They\'re very passionate and surprisingly tender in their lovemaking and that is what this is. They\'re making love instead of fucking.');
    scene.text('Many minutes go by before she starts to spasm. He keeps it up through her whole orgasm and once it\'s finally over, they quickly get dressed and straighten up their clothes. They have one more final passionate kiss before heading back to the front of the library.');
    qspCall(s, 'arousal', 'voyeur_sex', 20);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Masturbate', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/detention/sex/mast.mp4');
    scene.text('After they leave, you\'re unable to take it anymore - you remove enough of your clothes to expose your pussy and sit down with your back to a shelf. Your legs spread wide, you start to masturbate.');
    scene.text('You end up having to use your panties as something to bite down on to stop yourself from crying out. You\'re not sure how long it takes, but no one wanders by and you orgasm hard. It rocks your whole body, leaving you shaking in its aftermath.');
    scene.text('After a few minutes, you recover and get dressed again before heading back to the tables at the front to wait out the rest of detention there.');
    qspCall(s, 'arousal', 'masturbate', 15);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go home', goto: ['gschool_detention', 'end'] },
    ]);
  } },
    ]);
  } },
    { label: 'Masturbate', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/detention/sex/mast.mp4');
    scene.text('Unable to take it anymore, you remove enough of your clothes to expose your pussy. Then, sitting down with your back to a shelf and your legs spreading wide, you start to masturbate. You can just barely hear the two of them, which only enhances your own arousal.');
    scene.text('You end up having to use your panties as something to bite down on to stop yourself from crying out. You\'re not sure how long it takes, but no one wanders by and you orgasm hard. It rocks your whole body, leaving you shaking in its aftermath.');
    scene.text('After a few minutes, you recover and get dressed again, peeking around the corner to see that the couple are gone. You decide to head back to the tables at the front and wait out the rest of detention there.');
    qspCall(s, 'arousal', 'masturbate', 15);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go home', goto: ['gschool_detention', 'end'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterLesbian(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + (60 - ((s as any).minut ?? 0));
  qspCall(s, 'stat', '');
  qspCall(s, 'gschool_events', 'rand_teacher_arg');
  scene.img('images/locations/pavlovsk/school/detention/sex/udesklick.mp4');
  scene.text('As you walk around, you hear some soft moaning coming from further back and quietly move forward and peek around one of the bookshelves.');
  scene.text('You see Lena sitting in a chair with her legs spread, Lera under the table on all fours with her face firmly planted between Lena\'s legs, vigorously eating out Lena while she masturbates herself at the same time.');
  scene.text('You bite your lip as you watch, feeling your own arousal mounting.');
  qspCall(s, 'arousal', 'voyeur_sex', 20);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/detention/sex/udesklick.mp4');
    scene.text('You decide to watch them. Lera seems to really know how to eat pussy, most likely having had a lot of practice at it.');
    scene.text('After a while, Lena finally has an orgasm and pushes Lera\'s away before getting dressed. Lera continues to masturbate herself for some time before she finally has an orgasm as well.');
    scene.text('Once she does, she moves up and takes a seat next to Lena and the two of them start talking. They seem intent on staying there for the rest of detention.');
    qspCall(s, 'arousal', 'voyeur_sex', 20);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Masturbate', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/detention/sex/mast.mp4');
    scene.text('After they leave, you\'re unable to take it anymore - you remove enough of your clothes to expose your pussy and sit down with your back to a shelf. Your legs spread wide, you start to masturbate.');
    scene.text('You end up having to use your panties as something to bite down on to stop yourself from crying out. You\'re not sure how long it takes, but no one wanders by and you orgasm hard. It rocks your whole body, leaving you shaking in its aftermath.');
    scene.text('After a few minutes, you recover and get dressed again before heading back to the tables at the front to wait out the rest of detention there.');
    qspCall(s, 'arousal', 'masturbate', 15);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go home', goto: ['gschool_detention', 'end'] },
    ]);
  } },
    ]);
  } },
    { label: 'Masturbate', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/detention/sex/mast.mp4');
    scene.text('Unable to take it anymore, you remove enough of your clothes to expose your pussy. Then, sitting down with your back to a shelf and your legs spreading wide, you start to masturbate. You can just barely hear the two of them, which only enhances your own arousal.');
    scene.text('You end up having to use your panties as something to bite down on to stop yourself from crying out. You\'re not sure how long it takes, but no one wanders by and you orgasm hard. It rocks your whole body, leaving you shaking in its aftermath.');
    scene.text('After a few minutes, you recover and get dressed again, peeking around the corner to see that the couple are gone. You decide to head back to the tables at the front and wait out the rest of detention there.');
    qspCall(s, 'arousal', 'masturbate', 15);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go home', goto: ['gschool_detention', 'end'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAnal(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + (60 - ((s as any).minut ?? 0));
  qspCall(s, 'stat', '');
  qspCall(s, 'gschool_events', 'rand_teacher_arg');
  scene.img('images/locations/pavlovsk/school/detention/sex/anal.mp4');
  scene.text('As you walk around, you hear some soft moaning coming from further back and quietly move forward and peek around one of the bookshelves.');
  scene.text('You see Lina down on all fours on the floor with her panties pulled down just enough to expose her ass. Ivan stands behind and above her, his large cock deep in her ass.');
  scene.text('As you watch, he hammers away at her ass balls deep, her moans sounding like they\'re a mix of pain and pleasure as she reaches up and starts rubbing her pussy as Ivan pounds her ass.');
  scene.text('You bite your lip as you watch, feeling your own arousal mounting.');
  qspCall(s, 'arousal', 'voyeur_sex', 20);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/detention/sex/anal.mp4');
    scene.text('You decide to watch them. He has massive amounts of endurance and it seems like he\'s never going to relent. A great deal of time passes before he finally grunts and stops with his dick buried balls deep in her ass.');
    scene.text('A few seconds later, he pulls out of her ass and pulls his pants up. Lina is a little slower to get up, but once they\'re both standing, Ivan gives her a quick kiss and she smiles.');
    scene.text('The two of them then head back to the front of the library.');
    qspCall(s, 'arousal', 'voyeur_sex', 20);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Masturbate', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/detention/sex/mast.mp4');
    scene.text('After they leave, you\'re unable to take it anymore - you remove enough of your clothes to expose your pussy and sit down with your back to a shelf. Your legs spread wide, you start to masturbate.');
    scene.text('You end up having to use your panties as something to bite down on to stop yourself from crying out. You\'re not sure how long it takes, but no one wanders by and you orgasm hard. It rocks your whole body, leaving you shaking in its aftermath.');
    scene.text('After a few minutes, you recover and get dressed again before heading back to the tables at the front to wait out the rest of detention there.');
    qspCall(s, 'arousal', 'masturbate', 15);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go home', goto: ['gschool_detention', 'end'] },
    ]);
  } },
    ]);
  } },
    { label: 'Masturbate', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/detention/sex/mast.mp4');
    scene.text('Unable to take it anymore, you remove enough of your clothes to expose your pussy. Then, sitting down with your back to a shelf and your legs spreading wide, you start to masturbate. You can just barely hear the two of them, which only enhances your own arousal.');
    scene.text('You end up having to use your panties as something to bite down on to stop yourself from crying out. You\'re not sure how long it takes, but no one wanders by and you orgasm hard. It rocks your whole body, leaving you shaking in its aftermath.');
    scene.text('After a few minutes, you recover and get dressed again, peeking around the corner to see that the couple are gone. You decide to head back to the tables at the front and wait out the rest of detention there.');
    qspCall(s, 'arousal', 'masturbate', 15);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go home', goto: ['gschool_detention', 'end'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterEnd(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) === 8) {
    (s as any).minut = ((s as any).minut ?? 0) + (180 - ((s as any).minut ?? 0));
  } else {
    if (((s as any).hour ?? 0) === 9) {
      (s as any).minut = ((s as any).minut ?? 0) + (120 - ((s as any).minut ?? 0));
    }
  }
  qspCall(s, 'stat', '');
  scene.actions([{ label: 'Continue', goto: ['gschool_grounds', 'main'] }]);
  scene.build();
}

function enterInappropriateClothes(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'gschool_events', '');
  scene.img('images/locations/pavlovsk/school/detention/detention.jpg');
  scene.text('You arrive back at school on a Saturday - it sucks. Considering you spent all week here already, what could be worse than wasting part of a Saturday in school too? You head to the library and take a seat at one of the tables. A few of the other students are there and by the time the bell rings, a couple more have trickled in.');
  scene.text('The teacher is the last to come. He sits behind his desk and, one by one, calls out the names on his list to make sure everyone who is supposed to be here is present.');
  scene.text('You confirm your presence when he calls your name, cursing the fact that you\'re stuck here.');
  // TODO-QSP: dynamic text: "Miss <<$pcs_lastname>>, just what do you think you are wearing?" he asks in a s...
  scene.text(`"Miss ${((s as any).pcs_lastname ?? 0)}, just what do you think you are wearing?" he asks in a stern, disapproving voice.`);
  scene.actions([
    { label: 'Is something wrong?', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/angryteacher.jpg');
    scene.text('You look down at your clothes before you gaze back up at him. "Is something wrong?"');
    scene.text('He seems flabbergasted that you would even ask that. "Is there something… Yes there <i>is</i> something wrong! Those clothes are completely inappropriate for school and you know it! Don\'t pretend you don\'t."');
    scene.text('You think you can talk your way out of this before you get more detention. "I didn\'t…"');
    // TODO-QSP: dynamic text: Before you can say more, he cuts you off and gets up. "I don't want to hear it, ...
    scene.text(`Before you can say more, he cuts you off and gets up. "I don't want to hear it, Miss ${((s as any).pcs_lastname ?? 0)}!" He pauses a moment before continuing. "You can come up here and accept your punishment from me or we can go and see the principal. Your choice."`);
    scene.actions([
      { label: 'Go to the principal', goto: ['gschool_office', 'detPunishment'] },
      { label: 'Take the offer', goto: ['gschool_detention', 'offer'] },
    ]);
  } },
    { label: 'Be a smart ass', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/angryteacher.jpg');
    scene.text('You pause and look him over. "I know you might not understand style with your utter lack of fashion sense, but surely even you must realize these are clothes," you smirk, which gets several of the other students snickering.');
    scene.text('He gets up and strides over rapidly, grabbing you by the arm and jerking you out of your chair.');
    scene.text('"You think this is a joke?! Let\'s see how funny you think it is when the principal sees you!" he says as he painfully grips your arm and drags you to the door. "Quietly study until I get back!" he barks at the others.');
    scene.text('With that, he drags you out of the library to the office.');
    scene.actions([
      { label: 'Punishment', goto: ['gschool_office', 'detPunishment'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterOffer(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'pain', '', 5, 'asscheeks', 'spank');
  scene.img('images/locations/pavlovsk/school/detention/detspank.mp4');
  scene.text('You get up and walk up to him. "I would rather just take my punishment here."');
  scene.text('He nods and pulls a large wooden paddle out of the desk. "Alright, bend over the desk."');
  scene.text('You do as you\'re told and the first swat stings more than you expected. He puts a lot of force into his swings, each one hurting more than the last. ou\'re on the verge of crying before he finally stops.');
  scene.text('"Return to your seat and behave yourself. That goes for the rest of you too!" he says while pointing the paddle at the rest of the students.');
  scene.text('You gingerly return to your seat and slowly sit down. It hurts to sit, but you have no choice. The rest of detention passes very quietly with everyone unusually well behaved.');
  scene.actions([
    { label: 'Go home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['gschool_detention', 'end'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'wedgie':
      enterWedgie(s, scene);
      break;
    case 'anushka_wedgie':
      enterAnushkaWedgie(s, scene);
      break;
    case 'back_down':
      enterBackDown(s, scene);
      break;
    case 'return_favor':
      enterReturnFavor(s, scene);
      break;
    case 'sitting':
      enterSitting(s, scene);
      break;
    case 'sitting_events':
      enterSittingEvents(s, scene);
      break;
    case 'incidental_events':
      enterIncidentalEvents(s, scene);
      break;
    case 'upskirt1':
      enterUpskirt1(s, scene);
      break;
    case 'upskirt2':
      enterUpskirt2(s, scene);
      break;
    case 'flashing girl':
      enterFlashingGirl(s, scene);
      break;
    case 'teasing girl':
      enterTeasingGirl(s, scene);
      break;
    case 'handjob':
      enterHandjob(s, scene);
      break;
    case 'Chat with <<$rand_girl>>':
      enterChatWith___randGirl__(s, scene);
      break;
    case 'Chat with <<$rand_boy>>':
      enterChatWith___randBoy__(s, scene);
      break;
    case 'Help friends in need':
      enterHelpFriendsInNeed(s, scene);
      break;
    case 'strange':
      enterStrange(s, scene);
      break;
    case 'pussy_fuck':
      enterPussyFuck(s, scene);
      break;
    case 'ass_fuck':
      enterAssFuck(s, scene);
      break;
    case 'strange_cum':
      enterStrangeCum(s, scene);
      break;
    case 'company':
      enterCompany(s, scene);
      break;
    case 'company2':
      enterCompany2(s, scene);
      break;
    case 'Ivanov':
      enterIvanov(s, scene);
      break;
    case 'Ivanov_suck':
      enterIvanovSuck(s, scene);
      break;
    case 'roam_around':
      enterRoamAround(s, scene);
      break;
    case 'nothing':
      enterNothing(s, scene);
      break;
    case 'eatout':
      enterEatout(s, scene);
      break;
    case 'finger':
      enterFinger(s, scene);
      break;
    case 'doggy':
      enterDoggy(s, scene);
      break;
    case 'couple':
      enterCouple(s, scene);
      break;
    case 'lesbian':
      enterLesbian(s, scene);
      break;
    case 'anal':
      enterAnal(s, scene);
      break;
    case 'end':
      enterEnd(s, scene);
      break;
    case 'inappropriate_clothes':
      enterInappropriateClothes(s, scene);
      break;
    case 'offer':
      enterOffer(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gschool_detention: LocationDef = {
  name: 'gschool_detention',
  title: 'Detention',
  region: 'other',
  enter: enter,
};
