import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    if (((s as any).week ?? 0) === 7) {
      if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 12) {
      }
      if (((s as any).hour ?? 0) >= 13  &&  ((s as any).hour ?? 0) <= 7) {
      }
    } else {
      if (((s as any).week ?? 0) === 6) {
        if (((s as any).hour ?? 0) >= 19  &&  ((s as any).hour ?? 0) <= 23) {
        }
        if (((s as any).hour ?? 0) >= 13  &&  ((s as any).hour ?? 0) <= 7) {
        }
      } else {
        if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 23) {
        }
        if (((s as any).hour ?? 0) >= 0  &&  ((s as any).hour ?? 0) <= 7) {
        }
      }
    }
  }
  (s as any).loc = 'pav_church';
  (s as any).loc_arg = 'start';
  (s as any).menu_loc = 'pav_church';
  (s as any).menu_arg = 'start';
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'themes', 'outdoors');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Church of Saint Nikolas</b></center>');
  scene.img('images/locations/pavlovsk/church/st-nikolas.jpg');
  scene.text('The church of Saint Nikolas is the only church in Pavlovsk and the tallest building in town. It\'s very old, but is well maintained by the worshipers of the parish.');
  scene.text('');
  // TODO-QSP: dynamic text: You can attend confession every weekday between '+func('time', 'get_time_string'...
  scene.text('You can attend confession every weekday between 7:00 and 9:00 or 16:00 and 18:00, and on the weekend between 16:00 and 18:00.');
  // TODO-QSP: dynamic text: Vigil is held on Saturdays at '+func('time', 'get_time_string', 19, 0)+'.
  scene.text('Vigil is held on Saturdays at 19:00.');
  // TODO-QSP: dynamic text: The Divine Liturgy is on Sundays between '+func('time', 'get_time_string', 9, 0)...
  scene.text('The Divine Liturgy is on Sundays between 9:00 and 12:00.');
  if (((s as any).week ?? 0) === 6  &&  ((s as any).hour ?? 0) >=19  &&  ((s as any).hour ?? 0) <= 22  &&  ((s as any).churchday ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Attend vigil', goto: ['pav_church', 'vigil'] },
    ]);
  } else {
    if (((s as any).week ?? 0) === 7  &&  ((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 12  &&  ((s as any).churchday ?? 0) !== ((s as any).daystart ?? 0)) {
      scene.actions([
        { label: 'Attend Divine Liturgy', goto: ['pav_church', 'liturgy'] },
      ]);
    } else {
      if (((s as any).Churchbad ?? 0) === 3  &&  ((s as any).Churchbadtime ?? 0) > ((s as any).daystart ?? 0)) {
        scene.text('The priest is probably still mad at you. You decide to avoid him for now.');
        scene.actions([
          { label: 'Go to the residential area', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
          { label: 'Go to the commercial area', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['pav_commercial', ''] },
        ]);
      } else {
        if (((s as any).Churchbad ?? 0) === 3  &&  ((s as any).Churchbadtime ?? 0) <= ((s as any).daystart ?? 0)) {
          (s as any).Churchbad = 2;
          scene.text('"You figure that the priest has probably calmed down enough for you to try talking to him."');
          scene.actions([
            { label: 'Enter the church', goto: ['pav_church', 'Narthex'] },
          ]);
        } else {
          scene.actions([
            { label: 'Enter the church', goto: ['pav_church', 'Narthex'] },
          ]);
        }
      }
    }
  }
  qspCall(s, 'camera', 'check_location');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the residential area', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
    { label: 'Go to the commercial area', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['pav_commercial', ''] },
  ]);
  scene.build();
}

function enterMom(s: GameState, scene: SceneBuilder): void {
  (s as any).mom_church = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: <center><b><h4><font color=#CB00A2>"Natasha <<$pcs_lastname>>"</font></h4></b></...
  scene.text(`<center><b><h4><font color=#CB00A2>"Natasha ${((s as any).pcs_lastname || '')}"</font></h4></b></center>`);
  if (((s as any).VKChurchNo ?? 0) === 4  ||  ((s as any).VKChurchNo ?? 0) === 5) {
    scene.img('images/characters/pavlovsk/resident/mom/prost10.jpg');
  } else {
    scene.img('images/characters/pavlovsk/resident/mom/prost9.jpg');
  }
  if (((s as any).motherKnowWhore ?? 0) === 0  &&  (!((s as any).VKChurchIntro ?? 0))) {
    // TODO-QSP: dynamic text: You suddenly hear someone calling you out. "<<$pcs_firstname>>? I never expected...
    scene.text(`You suddenly hear someone calling you out. "${((s as any).pcs_firstname || '')}? I never expected you to come here without me dragging you."`);
    scene.text('You turn to see your mother sitting in the middle row, who motions for you to sit next to her.');
  } else {
    if (((s as any).motherKnowWhore ?? 0) === 0  &&  ((s as any).VKChurchNo ?? 0) < 4) {
      // TODO-QSP: dynamic text: You see your mother sitting in the middle row, who turns and notices you. "<<$pc...
      scene.text(`You see your mother sitting in the middle row, who turns and notices you. "${((s as any).pcs_firstname || '')}, you're here! Come and take a seat." She motions for you to sit next to her.`);
    } else {
      if (((s as any).motherKnowWhore ?? 0) === 0  &&  ((s as any).VKChurchNo ?? 0) === 4) {
        scene.text('You see your mother sitting in the middle row. She quickly notices you, gets up and walks over to you.');
        // TODO-QSP: dynamic text: "<<$pcs_firstname>>, we need to talk," she says sternly as she drags you out of ...
        scene.text(`"${((s as any).pcs_firstname || '')}, we need to talk," she says sternly as she drags you out of the church.`);
      } else {
        if (((s as any).motherKnowWhore ?? 0) > 0  ||  ((s as any).VKChurchNo ?? 0) === 5) {
          scene.text('You see your mother sitting in the middle row. She peeks over in your direction before turning away from you, as if you\'re not there.');
        } else {
          scene.text('You see your mother sitting in the middle row. She doesn\'t seem to notice you.');
        }
      }
    }
  }
  if (((s as any).motherKnowWhore ?? 0) === 0  &&  ((s as any).VKChurchNo ?? 0) === 4) {
    scene.actions([
      { label: 'Make excuses and leave', goto: ['pav_church', 'Excuses'] },
    ]);
  } else {
    if ((!((s as any).motherKnowWhore ?? 0))) {
      scene.actions([
        { label: 'Sit down', handler: (st: GameState) => {
    (s as any).VKChurchIntro = 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/church/enterchurch.jpg');
    if ((!((s as any).VKChurch ?? 0))) {
      scene.text('You try to make yourself comfortable on the hard wooden pew while waiting for the sermon to start.');
      scene.text('Your mother turns to you. "It\'s been a long time since you were last here. I should show you how to follow the sermon."');
      scene.text('You give your mother a nod as everyone takes a seat around you. The room then slowly falls into silence as the sermon begins.');
    } else {
      if (((s as any).VKChurch ?? 0) === 1) {
        scene.text('You try to make yourself comfortable on the hard wooden pew while waiting for the sermon to start. Your mother turns to you and says "It\'s good to see you back here. There is so much of our soul that can only be revealed through prayer." You give her a puzzled look and she smiles. "You might not understand what I mean now, but you will."');
        scene.text('Everyone in the church begin taking their seats as the room slowly silences. The sermon is about to begin.');
      } else {
        if (((s as any).VKChurch ?? 0) === 2) {
          scene.text('You do your best to make yourself comfortable as the priests prepare for the sermon. Your mother places her hand on your shoulder and says "Since you\'ve been such a good Christian, I\'ll take you out to eat after this and we can catch up on what\'s new with you."');
          scene.text('You give her a smile and nod. "I\'d like that."');
          scene.text('Everyone else takes a seat around you and the room slowly silences as the sermon begins.');
        } else {
          if (((s as any).VKChurch ?? 0) === 3) {
            scene.text('You gaze around the room and see the now familiar faces of your church. Some of the them notice you and give you a warm smile while others are preoccupied looking through their bibles.');
            scene.text('Your mother rubs your shoulder. "You\'ve become a regular here. We\'re all children of the lord, so that\'s why we all take time out of our day to spend it with each other in this holy place."');
            scene.text('You give her a nod as you contemplate her words while taking another look around. Many are preparing their bibles as the sermon begins.');
          } else {
            if (((s as any).VKChurch ?? 0) === 4) {
              scene.text('You try to make yourself comfortable on the hard wooden pew while waiting for the sermon to start.');
              scene.text('Your mother turns to you. "It\'s been a long time since you\'ve been here, so I should show you how to follow the sermon."');
              scene.text('You give her a nod while everyone takes a seat around you. The room slowly silences as the sermon is about to begin.');
            } else {
              scene.text('You casually lean back in your seat, looking forward to the sermon. You start reading the bible your mother gave you, studying the psalms while occasionally looking and chatting with the other churchgoers. Your mother joins in and you discuss the word of god until the priest finally enters the room. You close your book and place it on your lap as the sermon begins.');
            }
          }
        }
      }
    }
    scene.actions([
      { label: 'Begin sermon', goto: ['pav_church', 'Sermon'] },
    ]);
  } },
        { label: 'Make excuses and leave', goto: ['pav_church', 'Excuses'] },
      ]);
    } else {
      scene.actions([
        { label: 'Leave', goto: ['pav_church', 'start'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSermon(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'fame', 'church_reduction', 'pav', 2);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/church/church\'+ rand(1, 5) +\'.jpg');
  scene.text('The candles dim as the sermon begins. You and your mother listen intently to the priest as he preaches the word of god. You study his teachings, feeling enlightened until you reach the end of the sermon. You turn to your mother and she gives you an approving smile before you both stand up.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Stand up', goto: ['pav_church', 'Narthex'] },
  ]);
  scene.build();
}

function enterExcuses(s: GameState, scene: SceneBuilder): void {
  (s as any).VKChurchEvents = 0;
  (s as any).mom_church = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  if ((!((s as any).VKChurchNo ?? 0))) {
    (s as any).VKChurchNo = ((s as any).VKChurchNo ?? 0) + (1);
    scene.img('images/characters/pavlovsk/resident/mom/prost1.jpg');
    scene.text('"I\'d love to stay but I… need to get back to the clinic. I\'m doing volunteer work there," you say and your mother approvingly nods her head.');
    scene.text('"You\'re volunteering at the clinic? I\'m very proud of you. Go on, I\'ll see you back at home."');
    scene.text('You wave to your mother as you walk away.');
    scene.actions([
      { label: 'Go to the residential area', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
      { label: 'Go to the commercial area', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['pav_commercial', ''] },
    ]);
  } else {
    if (((s as any).VKChurchNo ?? 0) === 1) {
      (s as any).VKChurchNo = ((s as any).VKChurchNo ?? 0) + (1);
      scene.img('images/characters/pavlovsk/resident/mom/prost1.jpg');
      scene.text('"I need to get back to the clinic. I just came to pick someone up."');
      scene.text('Your mother nods understandingly, but looks a little disappointed. "Okay… I was hoping that you could stay for a bit, but I won\'t stop you from doing god\'s work."');
      scene.text('You return the nod before walking away.');
      scene.actions([
        { label: 'Go to the residential area', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
        { label: 'Go to the commercial area', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['pav_commercial', ''] },
      ]);
    } else {
      if (((s as any).VKChurchNo ?? 0) === 2) {
        (s as any).VKChurchNo = ((s as any).VKChurchNo ?? 0) + (1);
        scene.img('images/characters/pavlovsk/resident/mom/prost1.jpg');
        scene.text('"I would stay, bu…"');
        scene.text('Your mother finishes your sentence. "You need to get back to the clinic, I understand." She then waves at you while looking away.');
        scene.actions([
          { label: 'Go to the residential area', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
          { label: 'Go to the commercial area', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['pav_commercial', ''] },
        ]);
      } else {
        if (((s as any).VKChurchNo ?? 0) === 3) {
          (s as any).VKChurchNo = ((s as any).VKChurchNo ?? 0) + (1);
          scene.img('images/characters/pavlovsk/resident/mom/prost1.jpg');
          scene.text('"Can you not stay for at least a little bit? God blesses his devout children," your mother pouts.');
          scene.text('You lower your posture before replying. "I know he does, but I really need to go. I\'ll see you at home."');
          scene.text('Your mother sighs as she turns away. "Yeah… I\'ll see you at home."');
          scene.actions([
            { label: 'Go to the residential area', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
            { label: 'Go to the commercial area', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['pav_commercial', ''] },
          ]);
        } else {
          if (((s as any).VKChurchNo ?? 0) === 4) {
            (s as any).VKChurchNo = ((s as any).VKChurchNo ?? 0) + (1);
            scene.img('images/characters/pavlovsk/resident/mom/prost1.jpg');
            scene.text('Your mother drags you out the door to the side of the church before angrily glaring at you. "I went to the clinic the other day to ask if you could have time off and the receptionist told me that you haven\'t been working there at all. YOU\'VE BEEN LYING TO ME IN THE LORD\'S HOUSE OF ALL PLACES!!! If you don\'t want to stay with me or pay respect to our creator then at least be honest about it. Telling lies is what sinners do when they\'re too afraid to face their problems."');
            scene.text('You lower your head as your mother continues chewing you out. "I\'m going to go back in there and doing my part as a child of Christ. You can go back to whatever you were planning on doing. I won\'t force you to stay." She then shakes her head at you before walking back into the church. Tears roll down your face as you take a few seconds to collect yourself before walking away, feeling guilty and ashamed.');
            scene.actions([
              { label: 'Go to the residential area', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
              { label: 'Go to the commercial area', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['pav_commercial', ''] },
            ]);
          } else {
            if (((s as any).VKChurchNo ?? 0) === 5) {
              (s as any).VKChurchNo = ((s as any).VKChurchNo ?? 0) + (1);
              scene.img('images/characters/pavlovsk/resident/mom/prost1.jpg');
              scene.text('You approach your mother. "What are you doing here?" she asks without turning to face you.');
              // TODO-QSP: dynamic text: You can't look her in the eyes as you reply and just look at the floor. "I'm sor...
              scene.text(`You can't look her in the eyes as you reply and just look at the floor. "I'm sorry for lying to you, ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''}. I know I screwed up and I'm here to ask for your forgiveness."`);
              scene.text('Your mother\'s eyebrow raises in disbelief. "Do you really mean that?"');
              scene.text('You slowly nod. "Yes. I\'d like to join the sermon."');
              scene.text('"Of course you can. Sit down and let\'s listen to the word of god together."');
              scene.text('She taps the seat next to her, beckoning you to sit down.');
              if ((!((s as any).VKChurchIntro ?? 0))) {
                (s as any).VKChurchIntro = 1;
              }
              scene.actions([
                { label: 'Sit down', goto: ['pav_church', 'Sermon'] },
              ]);
            } else {
              scene.img('images/characters/pavlovsk/resident/mom/prost11.jpg');
              scene.text('You turn to walk out of the church and see your mother sigh as she turns back toward the front.');
              scene.actions([
                { label: 'Go to the residential area', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
                { label: 'Go to the commercial area', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['pav_commercial', ''] },
              ]);
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterVigil(s: GameState, scene: SceneBuilder): void {
  (s as any).churchday = ((s as any).daystart ?? 0);
  qspCall(s, 'mood', 'raise', 'tiny');
  (s as any).temprand = Math.floor(Math.random() * 6) + 0;
  if ((Math.floor(Math.random() * 2) + 0) === 1) {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (((s as any).temprand ?? 0));
  } else {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (((s as any).temprand ?? 0));
  }
  (s as any).church_moral = ((s as any).church_moral ?? 0) + (1);
  (s as any).Churchbad = ((s as any).Churchbad ?? 0) - (1);
  qspCall(s, 'archetypes', 'gain', 'prude', 'small', 'Church vigil', 1);
  qspCall(s, 'archetypes', 'faith_gain', 'vigil', 40);
  if (((s as any).arch_vars ?? 0)?.['main_active'] === 'prude') {
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'fame', 'church_reduction', 'pav', 1);
  }
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'themes', 'indoors');
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  scene.img('images/locations/pavlovsk/church/church\'+ rand(1, 5) +\'.jpg');
  scene.text('You attend the vigil and reflect on the recent events in your life. The harmonies as the hymns and psalms are sung sweep aside some of the worries in your heart, although you know they will return once you leave this holy place.');
  // TODO-QSP: dynamic text: The sweet scent of incense tickles your nose and reminds you of the scent of' + ...
  scene.text('The sweet scent of incense tickles your nose and reminds you of the scent of\' + iif(rex_love = 1, \'Rex\', \'your step-father\') + \'s cologne.');
  if (((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
    scene.text('Most of the parishioners seem upset that you\'re here. You notice that parents are making sure their children don\'t go near you and even a few of the acolytes glare at you angrily.');
  } else {
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 200) {
      scene.text('A number of people give you dirty looks and intentionally turn away from you whenever you make eye contact.');
    } else {
      if (((s as any).fame ?? 0)?.['pav_slut'] >= 150) {
        scene.text('You notice some of the old women looking at you with disapproval and one or two of the old men looking at you with interest.');
      }
    }
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to Narthex', goto: ['pav_church', 'Narthex'] },
    { label: 'Stay for the Rite of Mutual Forgiveness', handler: (st: GameState) => {
    qspCall(s, 'mood', 'raise', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
    (s as any).church_moral = ((s as any).church_moral ?? 0) + (1);
    (s as any).Churchbad = ((s as any).Churchbad ?? 0) - (1);
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    qspCall(s, 'fame', 'church_reduction', 'pav', 2);
    scene.img('images/locations/pavlovsk/church/church\'+ rand(9, 10) +\'.jpg');
    scene.text('You decide to stay for the Rite of Mutual Forgiveness and feel much better afterwards.');
    if (((s as any).args ?? 0)[1] === 'mom') {
      scene.actions([
        { label: 'Return to Narthex', goto: ['pav_church', 'Narthex_mom'] },
      ]);
    } else {
      scene.actions([
        { label: 'Return to Narthex', goto: ['pav_church', 'Narthex'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterLiturgy(s: GameState, scene: SceneBuilder): void {
  (s as any).churchday = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'exp_gain', 'vokal', Math.floor(Math.random() * 4) + 0);
  qspCall(s, 'stat', '');
  (s as any).Churchbad = ((s as any).Churchbad ?? 0) - (1);
  qspCall(s, 'archetypes', 'gain', 'prude', 'small', 'Divine Liturgy', 1);
  qspCall(s, 'archetypes', 'faith_gain', 'liturgy', 60);
  if (((s as any).arch_vars ?? 0)?.['main_active'] === 'prude') {
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'fame', 'church_reduction', 'pav', 1);
  }
  qspCall(s, 'themes', 'indoors');
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  scene.img('images/locations/pavlovsk/church/church\'+ rand(1, 8) +\'.jpg');
  if (((s as any).fame ?? 0)?.['pav_slut'] < 150  &&  ((s as any).Conf_Kirill ?? 0) <= 1) {
    qspCall(s, 'mood', 'raise', 'small');
    (s as any).church_moral = ((s as any).church_moral ?? 0) + (2);
    scene.text('You join the congregation for the Divine Liturgy. You see mostly older people around, but there are some people around your age present as well. You participate in the singing, but that\'s about it. Your presence seems to go largely unnoticed and you have the chance to rest. You feel a lot better.');
    scene.actions([
      { label: 'Leave the church', goto: ['pav_church', 'service_end'] },
    ]);
  } else {
    if (((s as any).fame ?? 0)?.['pav_slut'] < 150  &&  ((s as any).Conf_Kirill ?? 0) >= 2) {
      (s as any).Kirill = ((s as any).Kirill ?? 0) + (1);
      qspCall(s, 'mood', 'raise', 'small');
      (s as any).church_moral = ((s as any).church_moral ?? 0) + (2);
      scene.text('You participate fully in the Divine Liturgy, listening to the preaching and singing along. When going to communion and receiving the ceremonial bread, you lock eyes with Father Kirill. He seems happy to see you participating in the service.');
      scene.actions([
        { label: 'Leave the church', goto: ['pav_church', 'service_end'] },
      ]);
    } else {
      qspCall(s, 'fame', 'church_reduction', 'pav', 2);
      scene.text('Your presence at the Divine Liturgy does not go unnoticed. People start whispering and pointing fingers at you.');
      scene.text('<i>"… little whore must be…"</i>');
      scene.text('<i>"Who does she think she\'s fooling…"</i>');
      scene.text('<i>"… no doubt here to corrupt…"</i>');
      scene.text('<i>"… have no shame?"</i>');
      scene.text('<i>"… defiling this place with…"</i>');
      if ((Math.floor(Math.random() * 3) + 1) === 1) {
        (s as any).Kirill = ((s as any).Kirill ?? 0) + (1);
        qspCall(s, 'mood', 'raise', 'tiny');
        (s as any).church_moral = ((s as any).church_moral ?? 0) + (2);
        scene.text('Father Kirill seems confused about where the fuss is coming from before he notices you. You see that even he has heard about your little adventures around town, but at the same time his face doesn’t seem to condemn you. It looks a bit like pity.');
        scene.text('"The church is place for everyone, my beloved children. Even if we sometimes forget, we must try to condemn no one. Think about John 8:10 - Jesus once met a woman who had slept with a man who betrayed her trust. She was dragged away by his friends and thrown naked before Jesus. The people had ripped her clothes and humiliated her. He spoke to her: \'Woman\', he said. Not \'slut\', or \'whore\', but woman. He threw His coat over her near-naked body and gave her the sense of dignity she had been promised by the man who betrayed her trust. Jesus did not condemn her, so let us try to not condemn others."');
        scene.text('The people in the congregation seem a bit uncomfortable hearing these words. Some look towards you and seem to have trouble looking you in the eye, and those that do do so with guilt. You feel better and it seems the townsfolk might see you in a slightly better light.');
        scene.actions([
          { label: 'Leave the church', goto: ['pav_church', 'service_end'] },
        ]);
      } else {
        scene.actions([
          { label: 'Actively participate', handler: (st: GameState) => {
    qspCall(s, 'mood', 'raise', 'tiny');
    (s as any).pcs_faith = Math.min(100, ((s as any).pcs_faith ?? 0) + 20);
    scene.text('You ignore the buzz of slurs and insults and focus entirely on the service. Sometimes you catch women glaring at you out of the corner of your eye as you sing hymns. Other times, you notice men glancing at you curiously and shifting uncomfortably in their seats. But you do nothing except act exactly as you\'re supposed to, listening intently and actively participating in every part of the service. By the end, your heart is light and your conscience unburdened, and you exit the hall feeling better than you did when you came in.');
    scene.actions([
      { label: 'Leave the church', goto: ['pav_church', 'service_end'] },
    ]);
  } },
          { label: 'Feel ashamed', handler: (st: GameState) => {
    qspCall(s, 'mood', 'lower', 'medium');
    qspCall(s, 'archetypes', 'lose', 'bimbo', 'tiny', 'Feeling ashamed at Divine Liturgy');
    scene.text('The buzz of slurs and insults fills you with deep pain and you sink further into your seat. As the service begins, the whispers die down but you can still feel their silent judgment. You participate as best you can, but by the end, you feel worse than when you first came.');
    scene.actions([
      { label: 'Leave the church', goto: ['pav_church', 'service_end'] },
    ]);
  } },
          { label: 'Lean into it', handler: (st: GameState) => {
    qspCall(s, 'fame', 'pav', 'sex', Math.floor(Math.random() * 3) + 3);
    qspCall(s, 'mood', 'raise', 'small');
    qspCall(s, 'archetypes', 'gain', 'bimbo', 'tiny', 'Flaunting at Divine Liturgy', 1);
    (s as any).pcs_faith = Math.max(0, ((s as any).pcs_faith ?? 0) - 20);
    scene.text('As you listen to the buzz of slurs, barbs and insults, a haughty smirk comes over your face. You turn and make direct eye contact with an elderly woman, one of your detractors. With a lick of your lips, you let your smirk expand into a lascivious grin. She gasps in shock and you turn towards a man sitting with a woman who appears to be his wife and wink suggestively at him. The woman glares daggers at you and the man shifts in his seat uncomfortably.');
    if (((s as any).braworntype ?? 0) === 'none'  &&  ((s as any).PCloThinness ?? 0) >= 4) {
      if (((s as any).pcs_hairlng ?? 0) <= 260  ||  ((s as any).hscrunchw ?? 0) === 1  ||  ((s as any).hbraids ?? 0) > 0) {
        // TODO-QSP: 'As the service begins, the whispers die down but you can still feel their silent judgment. In respo...
      } else {
        // TODO-QSP: 'As the service begins, the whispers die down but you can still feel their silent judgment. In respo...
      }
    } else {
      scene.text('As the service begins, the whispers die down but you can still feel their silent judgment. You ignore the stares and participate without care, singing the hymns and repeating the scripture with perfect obedience. Every time you catch someone glancing at you, you turn straight towards them and give them a sly smile that makes them turn back in disgust.');
    }
    scene.text('You think people are going to go home talking more about you than the service…');
    scene.actions([
      { label: 'Leave the church', goto: ['pav_church', 'service_end'] },
    ]);
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterServiceEnd(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/church/enterchurch.jpg');
  if (((s as any).fame ?? 0)?.['pav_prostitute'] > (Math.floor(Math.random() * 1000) + 1)) {
    ((s as any).temp = (s as any).temp ?? {})['approach_type'] = 'prostitute';
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexApproach1(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).fame ?? 0)?.['pav_slut'] > (Math.floor(Math.random() * 1000) + 1)) {
      ((s as any).temp = (s as any).temp ?? {})['approach_type'] = 'slut';
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexApproach1(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      qspGoto(s, 'pav_church', 'start');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSexApproachRun(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Hurry away', handler: (st: GameState) => {
    if (((s as any).fame ?? 0)?.['pav_prostitute'] >= 150  ||  ((s as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('Keenly aware of other people\'s eyes on you and your reputation, you don\'t answer, and hurry away from the man instead.');
    } else {
      scene.text('You look around, keenly aware of all the people who might see you with this man. Instead of answering, you hurry away from him, lest rumors about you spread.');
    }
    scene.actions([
      { label: 'Leave', goto: ['pav_church', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSexApproach1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcgeneratec', '', 0, 'stranger', Math.floor(Math.random() * 28) + 18, 1, 1);
  scene.text('The service ends and you stand up to leave. As you near the entrance, a man approaches while gazing lecherously at you.');
  // TODO-QSP: dynamic text: "You're <<$pcs_nickname>>, aren't you?"
  scene.text(`"You're ${((s as any).pcs_nickname || '')}, aren't you?"`);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexApproachRun(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Answer (shy)', handler: (st: GameState) => {
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    ((s as any).temp = (s as any).temp ?? {})['prost_response'] = 'shy';
    scene.text('"Yes, that\'s me," you mumble meekly.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexOffer(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Answer (normal)', handler: (st: GameState) => {
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    ((s as any).temp = (s as any).temp ?? {})['prost_response'] = 'normal';
    scene.text('"Yes, that\'s me," you answer naturally, meeting his eyes like any other conversation.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexOffer(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Answer (slutty)', handler: (st: GameState) => {
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    ((s as any).temp = (s as any).temp ?? {})['prost_response'] = 'slutty';
    scene.text('"Sure am," you answer, stepping closer and returning his gaze with a lascivious smirk of your own.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexOffer(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterSexOffer(s: GameState, scene: SceneBuilder): void {
  if (((s as any).temp ?? 0)?.['approach_type'] === 'prostitute') {
    if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).boy ?? 0)] === 'blowjob') {
      ((s as any).temp = (s as any).temp ?? {})['offer_type'] = 'blowjob';
      ((s as any).temp = (s as any).temp ?? {})['prost_money'] = 400;
      // TODO-QSP: dynamic text: "I'll give you ' + $func('money', 'string_profit', 400) + ' for a blowjob," he w...
      scene.text('"I\'ll give you \' + $func(\'money\', \'string_profit\', 400) + \' for a blowjob," he whispers.');
    } else {
      if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).boy ?? 0)] === 'miss'  ||  ((s as any).npc_fav_pos ?? 0)?.[String((s as any).boy ?? 0)] === 'doggy'  ||  ((s as any).npc_fav_pos ?? 0)?.[String((s as any).boy ?? 0)] === 'cowgirl') {
        ((s as any).temp = (s as any).temp ?? {})['offer_type'] = 'fuck';
        ((s as any).temp = (s as any).temp ?? {})['prost_money'] = 1000;
        // TODO-QSP: dynamic text: "I'll give you ' + $func('money', 'string_profit', 1000) + ' to fuck your pussy,...
        scene.text('"I\'ll give you \' + $func(\'money\', \'string_profit\', 1000) + \' to fuck your pussy," he whispers.');
      } else {
        ((s as any).temp = (s as any).temp ?? {})['offer_type'] = 'handjob';
        ((s as any).temp = (s as any).temp ?? {})['prost_money'] = 200;
        // TODO-QSP: dynamic text: "I'll give you ' + $func('money', 'string_profit', 200) + ' for a handjob," he w...
        scene.text('"I\'ll give you \' + $func(\'money\', \'string_profit\', 200) + \' for a handjob," he whispers.');
      }
    }
  } else {
    if (((s as any).temp ?? 0)?.['approach_type'] === 'slut') {
      if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).boy ?? 0)] === 'blowjob') {
        ((s as any).temp = (s as any).temp ?? {})['offer_type'] = 'blowjob';
        scene.text('"How about you and I find somewhere private so you can suck my cock?" he whispers.');
      } else {
        if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).boy ?? 0)] === 'miss'  ||  ((s as any).npc_fav_pos ?? 0)?.[String((s as any).boy ?? 0)] === 'doggy'  ||  ((s as any).npc_fav_pos ?? 0)?.[String((s as any).boy ?? 0)] === 'cowgirl') {
          ((s as any).temp = (s as any).temp ?? {})['offer_type'] = 'fuck';
          scene.text('"How about you and I find somewhere private so I can fuck you silly?" he whispers.');
        } else {
          ((s as any).temp = (s as any).temp ?? {})['offer_type'] = 'handjob';
          scene.text('"How about you and I find somewhere private so you can jerk me off?" he whispers.');
        }
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexApproachRun(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Accept', handler: (st: GameState) => {
    qspCall(s, 'fame', 'pav', 'sex', Math.floor(Math.random() * 3) + 1);
    if (((s as any).temp ?? 0)?.['approach_type'] === 'prostitute') {
      qspCall(s, 'fame', 'pav', 'prostitute', Math.floor(Math.random() * 3) + 1);
    }
    scene.img('images/locations/pavlovsk/church/enterchurch.jpg');
    if (((s as any).temp ?? 0)?.['prost_response'] === 'shy') {
      scene.text('You nod, gulping as you do, and let the man pull you towards the church restrooms.');
    } else {
      if (((s as any).temp ?? 0)?.['prost_response'] === 'normal') {
        scene.text('You nod and begin casually strolling towards the church restrooms with the man.');
      } else {
        if (((s as any).temp ?? 0)?.['prost_response'] === 'slutty') {
          scene.text('You grin eagerly and nod, grabbing the man\'s hand and pulling him into the church restrooms with you.');
        }
      }
    }
    if ((Math.floor(Math.random() * 2) + 1) === 1) {
      qspCall(s, 'fame', 'pav', 'sex', Math.floor(Math.random() * 3) + 2);
      if (((s as any).temp ?? 0)?.['approach_type'] === 'prostitute') {
        qspCall(s, 'fame', 'pav', 'prostitute', Math.floor(Math.random() * 3) + 2);
      }
      scene.text('Other attenders watch you go with him. You can hear them buzz in hushed tones before the door closes behind you.');
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'pav_church', 'restroom_<<$temp[', 'offer_type\']>>');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterRestroomHandjob(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/public/restroom/hj_cum1.mp4');
  qspCall(s, 'arousal', 'hj', Math.floor(Math.random() * 6) + 5, 'prostitution', 'no_orgasm_msg');
  qspCall(s, 'cum_call', 'hands', 'man at church');
  qspCall(s, 'stat', '');
  // TODO-QSP: 'Inside the restroom, it only takes you a few minutes of working his cock before the man orgasms, gr...
  if (((s as any).temp ?? 0)?.['approach_type'] === 'prostitute') {
    // TODO-QSP: gs 'money', 'earn', temp['prost_money']
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'pav_church', 'restroom_sex_end');
  } },
  ]);
  scene.build();
}

function enterRestroomBlowjob(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/public/restroom/bj1.mp4');
  qspCall(s, 'arousal', 'bj', Math.floor(Math.random() * 6) + 5, 'prostitution', 'no_orgasm_msg');
  qspCall(s, 'stat', '');
  if ((Math.floor(Math.random() * 3) + 1) === 1) {
    scene.text('Inside the restroom, you kneel down and unzip the man\'s pants, tugging them down to reveal his already hard cock and immediately put it between your lips. It only takes a few minutes of working his shaft with your mouth before he starts grunting. "I\'m gonna cum!"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRestroomCumHand(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRestroomCumMouth(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRestroomCumFace(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if ((Math.floor(Math.random() * 2) + 1) === 1) {
      scene.text('Inside the restroom, you kneel down and unzip the man\'s pants, tugging them down to reveal his already hard cock and immediately put it between your lips. It only takes a few minutes of working his shaft with your mouth before he grunts.');
      if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).boy ?? 0)] === 'facial') {
        scene.text('"I\'m gonna cum on your face!"');
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRestroomCumFace(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).boy ?? 0)] === 'mouth') {
          scene.text('"I\'m gonna cum! Swallow it!"');
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRestroomCumMouth(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          scene.text('"I\'m gonna cum!" he says and pushes you gently off his cock.');
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRestroomCumHand(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      }
    } else {
      scene.text('Inside the restroom, you kneel down and unzip the man\'s pants, tugging them down to reveal his already hard cock and immediately put it between your lips. It only takes a few minutes of working his shaft before he grunts and a thick salty liquid suddenly squirts into your mouth.');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRestroomCumMouth(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterRestroomFuck(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp = (s as any).temp ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
  scene.img('images/locations/pavlovsk/church/supplycloset.jpg');
  if (((s as any).npc_condom_conscious ?? 0)?.[String((s as any).boy ?? 0)] > 0) {
    // TODO-QSP: 'Inside the restroom, the man pulls down his pants and wraps his cock in a condom as you ' + iif(PCl...
    scene.actions([
      { label: 'Fuck the man', handler: (st: GameState) => {
    qspCall(st, 'pav_church', 'restroom_fuck_condom');
  } },
    ]);
  } else {
    scene.text('Inside the restroom, the man pulls down his pants to reveal his already erect cock.');
    if (((s as any).mc_inventory ?? 0)?.['normal_condoms'] > 0) {
      scene.actions([
        { label: 'Put a condom on him', handler: (st: GameState) => {
    // TODO-QSP: 'Before doing anything else, you pull a condom from your purse and roll it onto the man''s shaft. On...
    scene.actions([
      { label: 'Fuck the man', handler: (st: GameState) => {
    qspCall(st, 'pav_church', 'restroom_fuck_condom');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Fuck him bareback', handler: (st: GameState) => {
    qspCall(st, 'pav_church', 'restroom_fuck_bareback');
  } },
      { label: 'Ask him to put on a condom', handler: (st: GameState) => {
    scene.text('"Got a condom?" you ask.');
    if (((s as any).npc_no_condoms ?? 0)?.[String((s as any).boy ?? 0)] > 0) {
      scene.text('"No," he replies.');
      if (((s as any).mc_inventory ?? 0)?.['normal_condoms'] > 0) {
        scene.actions([
          { label: 'Put a condom on him', handler: (st: GameState) => {
    // TODO-QSP: 'With a sigh, you pull a condom from your own stash and roll it onto the man''s shaft before ' + iif...
    scene.actions([
      { label: 'Fuck the man', handler: (st: GameState) => {
    qspCall(st, 'pav_church', 'restroom_fuck_condom');
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Oh well', handler: (st: GameState) => {
    // TODO-QSP: '"Oh well," you shrug and ' + iif(PCloSkirt > 0, 'flip up your skirt ', 'drop your pants ') + iif($p...
    scene.actions([
      { label: 'Fuck him bareback', handler: (st: GameState) => {
    qspCall(st, 'pav_church', 'restroom_fuck_bareback');
  } },
    ]);
  } },
      ]);
    } else {
      // TODO-QSP: 'He nods and pulls one out, wrapping his cock in it as you ' + iif(PCloSkirt > 0, 'flip up your skir...
      scene.actions([
        { label: 'Fuck the man', handler: (st: GameState) => {
    qspCall(st, 'pav_church', 'restroom_fuck_condom');
  } },
      ]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterRestroomFuckBareback(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp = (s as any).temp ?? {})['condom_use'] = 0;
  scene.img('images/shared/sex/public/restroom/fuck_stand1.mp4');
  scene.text('Once in a stall, the man pushes you up against the wall and roughly fucks your pussy.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRestroomFuckThoughts(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterRestroomFuckCondom(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp = (s as any).temp ?? {})['condom_use'] = 1;
  scene.img('images/shared/sex/public/restroom/fuck_stand1.mp4');
  scene.text('Once in a stall, the man pushes you up against the wall and roughly fucks your pussy.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRestroomFuckThoughts(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterRestroomFuckThoughts(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait patiently', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', Math.floor(Math.random() * 6) + 5, 'prostitution', 'no_orgasm_msg');
    if (((s as any).temp ?? 0)?.['orgasm'] === ((s as any).orgasm ?? 0)) {
      scene.text('You press your leg up on the opposing wall and let the man enjoy himself with you. He grunts, roughly shoving his cock into your pussy as you wait patiently for him to finish.');
    } else {
      scene.text('You press your leg up on the opposing wall and let the man enjoy himself with you. He grunts, roughly shoving his cock into your pussy as you wait patiently for him to finish, even managing to have an orgasm yourself before he does.');
    }
    if (((s as any).temp ?? 0)?.['condom_use'] === 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRestroomFuckBarebackCum(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRestroomFuckCondomCum(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  } },
    { label: 'Enjoy yourself', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', Math.floor(Math.random() * 6) + 5, 'prostitution', 'no_orgasm_msg');
    if (((s as any).temp ?? 0)?.['orgasm'] === ((s as any).orgasm ?? 0)) {
      scene.text('You press your leg up on the opposing wall and thrust back at him, smiling as warmth and wetness spread from between your legs. You don\'t manage to cum, but your pussy gets a nice dicking.');
    } else {
      scene.text('You press your leg up on the opposing wall and thrust back at him, smiling as warmth and wetness spread from between your legs. Your breathing picks up in time with his and before you know it, you\'re shuddering in orgasm yourself before he\'s done.');
    }
    if (((s as any).temp ?? 0)?.['condom_use'] === 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRestroomFuckBarebackCum(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRestroomFuckCondomCum(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  } },
    { label: 'Boring', handler: (st: GameState) => {
    (s as any).orgasm_or = 'no';
    qspCall(s, 'arousal', 'vaginal', Math.floor(Math.random() * 6) + 5, 'prostitution', 'no_orgasm_msg');
    scene.text('<i>Ugh, how boring…</i> you sigh silently as the man keeps grunting, shoving his cock into your pussy as you mechanically thrust back in time. This is taking forever and you stifle another sigh waiting for him to finish.');
    if (((s as any).temp ?? 0)?.['condom_use'] === 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRestroomFuckBarebackCum(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRestroomFuckCondomCum(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  } },
    { label: 'Think happy thoughts', handler: (st: GameState) => {
    (s as any).orgasm_or = 'no';
    qspCall(s, 'arousal', 'vaginal', Math.floor(Math.random() * 6) + 5, 'prostitution', 'no_orgasm_msg');
    scene.text('As the man keeps grunting, uncomfortably shoving his cock into your pussy, you close your eyes and try to disassociate from the experience, thinking of the happiest thoughts you can muster.');
    if (((s as any).temp ?? 0)?.['condom_use'] === 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRestroomFuckBarebackCum(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRestroomFuckCondomCum(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  } },
  ]);
  scene.build();
}

function enterRestroomFuckCondomCum(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'cum_call', '', '', 'man at church', 0, 3);
  if ((!((s as any).condom_break ?? 0))) {
    scene.img('images/locations/pavlovsk/church/supplycloset.jpg');
    // TODO-QSP: 'After a few minutes, he groans softly and you feel his cock pulse within the condom inside you. You...
  } else {
    scene.img('images/shared/sex/public/restroom/creampie1.jpg');
    scene.text('After a few minutes, he groans softly and you feel his cock pulse within the condom inside you. You wait for him to finish before pulling away. The man then pulls the condom off and throws it in the toilet before wiping his shaft and throwing the tissue inside with it. He yanks up his pants when you feel something suddenly <i>spurt</i> out of your pussy.');
    scene.text('Your eyes go wide. "Wait, did the condom-"');
    // TODO-QSP: 'Before you can even finish the man departs, leaving you ' + iif($temp['approach_type'] = 'prostitut...
  }
  if (((s as any).temp ?? 0)?.['approach_type'] === 'prostitute') {
    // TODO-QSP: gs 'money', 'earn', temp['prost_money']
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'pav_church', 'restroom_sex_end');
  } },
  ]);
  scene.build();
}

function enterRestroomFuckBarebackCum(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).boy ?? 0)] === 'creampie'  &&  ((s as any).npc_childfree ?? 0)?.[String((s as any).boy ?? 0)] < 1) {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'cum_call', '', '', 'man at church');
    scene.text('A few minutes later, he groans softly and something warm suddenly shoots into your womb.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/pc/body/cum/creampie/cumpussy1.jpg');
    // TODO-QSP: 'You gasp in surprise as the man empties his balls into you before pulling away, leaving a sticky wh...
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'pav_church', 'restroom_sex_end');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    scene.text('A few minutes later, he groans softly. "I\'m gonna cum!"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRestroomCumHand(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRestroomCumMouth(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRestroomCumFace(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Let him cum inside you', handler: (st: GameState) => {
    qspCall(s, 'cum_call', '', '', 'man at church');
    scene.text('"It\'s okay," you murmur in his ear. "You can cum inside me."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/pc/body/cum/creampie/cumpussy1.jpg');
    // TODO-QSP: 'With a soft groan, you feel him orgasm and his thick spunk fills your pussy. It pulses within you f...
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'pav_church', 'restroom_sex_end');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterRestroomCumHand(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish him with your hand', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'hands', 'man at church');
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/public/restroom/hj_cum1.mp4');
    // TODO-QSP: 'Hopping off the man''s cock, you take it in your hand and start jerking. Cum immediately spurts fro...
    if (((s as any).temp ?? 0)?.['approach_type'] === 'prostitute') {
      // TODO-QSP: gs 'money', 'earn', temp['prost_money']
    }
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'pav_church', 'restroom_sex_end');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterRestroomCumFace(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Take his cum on your face', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', 'man at church');
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/facial/facial0,3.mp4');
    // TODO-QSP: 'He cums on your face. Once finished, he pulls up his pants and departs, leaving you ' + iif($temp['...
    if (((s as any).temp ?? 0)?.['approach_type'] === 'prostitute') {
      // TODO-QSP: gs 'money', 'earn', temp['prost_money']
    }
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'pav_church', 'restroom_sex_end');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterRestroomCumMouth(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Take his cum in your mouth', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/mouth/cum11.mp4');
    scene.text('He cums in your mouth.');
    if (((s as any).temp ?? 0)?.['approach_type'] === 'prostitute') {
      // TODO-QSP: gs 'money', 'earn', temp['prost_money']
    }
    scene.actions([
      { label: 'Swallow it', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth_swallow', 'man at church');
    scene.img('images/shared/sex/cum/mouth/swallow3.mp4');
    scene.text('You wait until the man finishes his orgasm before pulling away, gathering his cum in your mouth and swallowing it in one big gulp.');
    // TODO-QSP: 'Once finished, he pulls up his pants and departs, leaving you ' + iif($temp['approach_type'] = 'pro...
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'pav_church', 'restroom_sex_end');
  } },
    ]);
  } },
      { label: 'Spit', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth', 'man at church');
    qspCall(s, 'cum_call', 'hands', 'man at church');
    scene.img('images/shared/sex/cum/mouth/swallow3.mp4');
    scene.text('You wait until the man finishes his orgasm before pulling away, gathering his cum in your mouth and spitting it into the palm of your hand.');
    // TODO-QSP: iif($npc_cum_pref[$boy] = 'mouth', 'The man seems annoyed by that. ', '') + 'With nothing more to do...
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'pav_church', 'restroom_sex_end');
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterRestroomSexEnd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'end');
  qspGoto(s, 'pav_church', 'Narthex');
  // TODO-QSP: end
  scene.build();
}

function enterNarthex(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'pav_church';
  (s as any).menu_arg = 'Narthex';
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'family_schedule', '');
  if (((s as any).locat ?? 0)?.['Mother'] === 16  &&  ((s as any).mom_church ?? 0) !== ((s as any).daystart ?? 0)) {
    qspGoto(s, 'pav_church', 'Mom');
  }
  qspCall(s, 'stat', '');
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  scene.img('images/locations/pavlovsk/church/enterchurch.jpg');
  scene.text('You enter the church and the scent of incense and beeswax fills your lungs. Your eyes are drawn past the Narthex into the Nave with its walls covered in lovingly painted icons while a thousand points of light dance in joy throughout God\'s house from the magnificent chandelier that hangs from the ceiling.');
  scene.text('To your left is a counter where a deacon sells candles, icons and prayer books. He smiles and nods at you absently, acknowledging your presence without really seeing you.');
  if (((((s as any).week ?? 0) <= 5  &&  ((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) < 9)  ||  (((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) < 18))  &&  ((s as any).confessday ?? 0) !== ((s as any).daystart ?? 0)) {
    qspGoto(s, 'pav_church2', 'confession');
    scene.actions([
      { label: 'Go to confession', handler: (st: GameState) => {
    (st as any).confessday = ((st as any).daystart ?? 0);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the church', goto: ['pav_church', 'start'] },
    { label: 'Light a candle', goto: ['pav_church', 'candle'] },
    { label: 'Pray', goto: ['pav_church', 'pray'] },
    { label: 'Talk to the Priest', goto: ['pav_church', 'talk_priest'] },
  ]);
  scene.build();
}

function enterNarthexMom(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'pav_church';
  (s as any).menu_arg = 'Narthex_mom';
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'stat', '');
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  scene.img('images/locations/pavlovsk/church/enterchurch.jpg');
  scene.text('You enter the church and the scent of incense and beeswax fills your lungs. Your eyes are drawn past the Narthex into the Nave with its walls covered in lovingly painted icons while a thousand points of light dance in joy throughout God\'s house from the magnificent chandelier that hangs from the ceiling.');
  scene.text('To your left as you enter is a counter where a deacon sells candles, icons and prayer books. He smiles and nods at you absently, acknowledging your presence without really seeing you.');
  if (((s as any).VKChurchEvents ?? 0) < 2  &&  ((s as any).hour ?? 0) < 14) {
    if (((s as any).VKChurch ?? 0) === 0  ||  ((s as any).VKChurch ?? 0) === 4) {
      if (((s as any).VKChurch ?? 0) < 4  &&  ((s as any).week ?? 0) === 6  &&  ((s as any).hour ?? 0) >=19  &&  ((s as any).hour ?? 0) <= 22) {
        (s as any).VKChurch = ((s as any).VKChurch ?? 0) + (1);
      }
      scene.actions([
        { label: 'Attend the Vigil', handler: (st: GameState) => {
    (st as any).VKChurchEvents = ((st as any).VKChurchEvents ?? 0) + (1);
  }, goto: ['pav_church', 'vigil', 'mom'] },
      ]);
    } else {
      if (((s as any).VKChurch ?? 0) === 1  ||  ((s as any).VKChurch ?? 0) === 4) {
        if (((s as any).VKChurch ?? 0) < 4  &&  ((s as any).week ?? 0) === 7  &&  ((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 12) {
          (s as any).VKChurch = ((s as any).VKChurch ?? 0) + (1);
        }
        scene.actions([
          { label: 'Join the Liturgy', handler: (st: GameState) => {
    (st as any).VKChurchEvents = ((st as any).VKChurchEvents ?? 0) + (1);
  }, goto: ['pav_church', 'liturgy', 'mom'] },
        ]);
      } else {
        if (((s as any).VKChurch ?? 0) === 2  ||  ((s as any).VKChurch ?? 0) === 4) {
          if (((s as any).VKChurch ?? 0) < 4) {
            (s as any).VKChurch = ((s as any).VKChurch ?? 0) + (1);
          }
          if (((s as any).VKChurch ?? 0) < 4) {
            (s as any).VKChurch = ((s as any).VKChurch ?? 0) + (1);
          }
          scene.actions([
            { label: 'Light a candle', handler: (st: GameState) => {
    (st as any).VKChurchEvents = ((st as any).VKChurchEvents ?? 0) + (1);
  }, goto: ['pav_church', 'candle', 'mom'] },
          ]);
        } else {
          if (((s as any).VKChurch ?? 0) === 3  ||  ((s as any).VKChurch ?? 0) === 4) {
            if (((s as any).VKChurch ?? 0) < 4) {
              (s as any).VKChurch = 4;
            }
            scene.actions([
              { label: 'Pray', handler: (st: GameState) => {
    (st as any).VKChurchEvents = ((st as any).VKChurchEvents ?? 0) + (1);
  }, goto: ['pav_church', 'pray', 'mom'] },
            ]);
          } else {
            if (((s as any).week ?? 0) === 6  &&  ((s as any).hour ?? 0) >=19  &&  ((s as any).hour ?? 0) <= 22  &&  ((s as any).churchday ?? 0) !== ((s as any).daystart ?? 0)) {
              scene.actions([
                { label: 'Attend vigil', goto: ['pav_church', 'vigil', 'mom'] },
              ]);
            } else {
              if (((s as any).week ?? 0) === 7  &&  ((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 12  &&  ((s as any).churchday ?? 0) !== ((s as any).daystart ?? 0)) {
                scene.actions([
                  { label: 'Attend Divine Liturgy', goto: ['pav_church', 'liturgy', 'mom'] },
                ]);
              }
            }
            scene.actions([
              { label: 'Light a candle', goto: ['pav_church', 'candle', 'mom'] },
              { label: 'Pray', goto: ['pav_church', 'pray', 'mom'] },
            ]);
          }
        }
      }
    }
    scene.actions([
      { label: 'Leave early', goto: ['pav_church', 'Leave Early'] },
    ]);
  } else {
    if (((s as any).VKChurchQW ?? 0) < 6) {
      (s as any).VKChurchQW = ((s as any).VKChurchQW ?? 0) + (1);
    }
    scene.actions([
      { label: 'Finish', goto: ['pav_church', 'Leave'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterLeaveEarly(s: GameState, scene: SceneBuilder): void {
  (s as any).VKChurchEvents = 0;
  (s as any).mom_church = ((s as any).daystart ?? 0);
  scene.img('images/characters/pavlovsk/resident/mom/prost9.jpg');
  // TODO-QSP: dynamic text: You approach your mother. "I had a great time <<$npc_nickname['A29']>>, but I sh...
  scene.text(`You approach your mother. "I had a great time ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''}, but I should be heading home now."`);
  scene.text('"Alright. Thank you for stopping by. I hope you learned something about yourself today," she replies and lightly pats your arm before going back to praying.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the residential area', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
    { label: 'Go to the commercial area', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['pav_commercial', ''] },
  ]);
  scene.build();
}

function enterLeave(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'money', 'earn', 300);
  if (((s as any).hour ?? 0) === 12) {
    (s as any).minut = ((s as any).minut ?? 0) + (120 - ((s as any).minut ?? 0));
  } else {
    if (((s as any).hour ?? 0) === 13) {
      (s as any).minut = ((s as any).minut ?? 0) + (60 - ((s as any).minut ?? 0));
    } else {
      (s as any).hour = 14;
    }
  }
  (s as any).mom_church = ((s as any).daystart ?? 0);
  (s as any).VKChurchEvents = 0;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/mom/walking.jpg');
  if (((s as any).VKChurchQW ?? 0) === 1) {
    scene.text('As the church ceremonies ends, you and your mother get up and collect your things before walking out of the church, where she places her hand on your shoulder.');
    // TODO-QSP: dynamic text: "I'm really happy that you decided to join me today, <<$pcs_nickname>>. You came...
    scene.text(`"I'm really happy that you decided to join me today, ${((s as any).pcs_nickname || '')}. You came here by your own choice and I'm proud of you. Now take this and get yourself some lunch."`);
    // TODO-QSP: dynamic text: She hands you ' + $func('money', 'string_profit', 300) + ' and gently pats your ...
    scene.text('She hands you \' + $func(\'money\', \'string_profit\', 300) + \' and gently pats your shoulder before walking away.');
  } else {
    if (((s as any).VKChurchQW ?? 0) === 2) {
      scene.text('As the church ceremonies ends, you and your mother get up and collect your things before walking out of the church, where she places her hand on your shoulder.');
      scene.text('"Another enlightening Sunday. I hope you\'ve been learning as much as you can from our time here. Life can be hard on us sometimes, but we just remember that we can always find the light at the end of the path. We just need to keep our hearts open and remain focused on our goals."');
      // TODO-QSP: dynamic text: She then pats you on the shoulder before giving you ' + $func('money', 'string_p...
      scene.text('She then pats you on the shoulder before giving you \' + $func(\'money\', \'string_profit\', 300) + \' and turning to walk away.');
    } else {
      if (((s as any).VKChurchQW ?? 0) === 3) {
        scene.text('As the church ceremonies end, you and your mother get up and collect your things before walking out of the church. You notice that your mother has fallen behind, so you wait for her and take the time to stretch your stiff back and legs. You finish stretching as you see your mother approaching.');
        scene.text('"I have to go to the store to pick up a few things. Thank you for keeping me company and for being such a good Christian girl."');
        // TODO-QSP: dynamic text: She then hands you ' + $func('money', 'string_profit', 300) + ' before turning a...
        scene.text('She then hands you \' + $func(\'money\', \'string_profit\', 300) + \' before turning away while waving at you.');
      } else {
        if (((s as any).VKChurchQW ?? 0) === 4) {
          scene.text('As the church ceremonies end, you and your mother get up and collect your things before walking out of the church. "How are you enjoying your time in church? I know it\'s not exactly exciting for someone your age, but I hope that you find it enlightening."');
          scene.text('"I really enjoy spending time here, but I\'m still getting used to the ceremonies," you reply and your mother smiles.');
          scene.text('"It does take some getting used to, but everything eventually becomes second nature. Now go on and get yourself something to eat."');
          // TODO-QSP: dynamic text: She gently pats you on the shoulder before handing you ' + $func('money', 'strin...
          scene.text('She gently pats you on the shoulder before handing you \' + $func(\'money\', \'string_profit\', 300) + \' and walking away.');
        } else {
          if (((s as any).VKChurchQW ?? 0) === 5) {
            qspCall(s, 'money', 'earn', 200);
            scene.text('You take a deep breath as the church ceremonies end. You and your mother then collect your belongings before getting up and leaving the church.');
            scene.text('"How do you feel about these ceremonies? Be honest," your mother asks.');
            scene.text('You give her a smile. "I\'ve learned a lot since coming here and there\'s still more to learn. I\'ve been enjoying learning of our lord and savior."');
            // TODO-QSP: dynamic text: Your mother gives you a warm hug as she whispers in your ear. "I'm so proud of y...
            scene.text(`Your mother gives you a warm hug as she whispers in your ear. "I'm so proud of you, ${((s as any).pcs_firstname || '')}. Your brother and sister can learn so much from you."`);
            // TODO-QSP: dynamic text: She thens squeezes slightly tighter before releasing you and placing ' + $func('...
            scene.text('She thens squeezes slightly tighter before releasing you and placing \' + $func(\'money\', \'string_profit\', 500) + \' in your pocket. "A small reward for my loving daughter."');
            scene.text('She then waves with a big smile on her face as she walks away.');
          } else {
            scene.text('As the church ceremonies end, you and your mother get up and collect your things before walking out of the church.');
            scene.text('"I had a great time today. I always enjoy spending time with my loving daughter. Hopefully I\'l see you here again next week."');
            // TODO-QSP: dynamic text: She then kisses your cheek and hands you ' + $func('money', 'string_profit', 300...
            scene.text('She then kisses your cheek and hands you \' + $func(\'money\', \'string_profit\', 300) + \' before walking away.');
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the residential area', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
    { label: 'Go to the commercial area', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['pav_commercial', ''] },
  ]);
  scene.build();
}

function enterCandle(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  (s as any).Churchbad = ((s as any).Churchbad ?? 0) - (1);
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'fame', 'church_reduction', 'pav', 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/church/ch_candle.jpg');
  if (qspFunc(s, 'money', 'can_afford', 10, 'cash') === 1  &&  (!((s as any).owechurch ?? 0))) {
    qspCall(s, 'money', 'pay', 10, 'cash');
    // TODO-QSP: dynamic text: You approach the deacon and hand over the ' + $func('money', 'string_price', 10)...
    scene.text('You approach the deacon and hand over the 10₽ for a candle.');
  } else {
    if (qspFunc(s, 'money', 'can_afford', 10, 'cash') === 1  &&  qspFunc(s, 'money', 'can_afford', 20, 'cash') === 0  &&  ((s as any).owechurch ?? 0) === 1) {
      (s as any).owechurch = 0;
      qspCall(s, 'money', 'pay', 10, 'cash');
      qspCall(s, 'mood', 'lower', 'small');
      // TODO-QSP: dynamic text: You approach the deacon and hope that he doesn't recognize you since you couldn'...
      scene.text('You approach the deacon and hope that he doesn\'t recognize you since you couldn\'t pay for your last candle. You give him 10₽ and he hands you a candle. You hustle away from the counter while guilt gnaws at you.');
    } else {
      if (qspFunc(s, 'money', 'can_afford', 20, 'cash') === 1  &&  ((s as any).owechurch ?? 0) === 1) {
        (s as any).owechurch = 0;
        qspCall(s, 'money', 'pay', 20, 'cash');
        qspCall(s, 'mood', 'raise', 'tiny');
        // TODO-QSP: dynamic text: You approach the deacon. He is confused when you hand him ' + $func('money', 'st...
        scene.text('You approach the deacon. He is confused when you hand him 20₽ before smiling in understanding. You feel relieved that the debt is paid.');
      } else {
        if (qspFunc(s, 'money', 'can_afford', 10, 'cash') === 0) {
          (s as any).owechurch = 1;
          scene.text('You approach the deacon and indicate that you would like a candle, but when you look in your purse to pay, you realize that you have no money. The deacon sighs and hands you the candle anyway. You promise yourself to pay double next time.');
        }
      }
    }
  }
  if (((s as any).hour ?? 0) > 6  &&  ((s as any).hour ?? 0) < 20) {
    qspCall(s, 'mood', 'raise', 'tiny');
    (s as any).church_moral = ((s as any).church_moral ?? 0) + (1);
    scene.text('You approach the iconostasis and light your candle. It gives you a nice feeling and you say a prayer while looking at the image of Christ the Savior.');
  } else {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    qspCall(s, 'mood', 'raise', 'tiny');
    scene.text('You approach the iconostasis and light your candle in the dark church and start praying. The darkness, combined with the pleasant sight of fire, makes you feel warm inside.');
  }
  if (((s as any).args ?? 0)[1] === 'mom') {
    scene.actions([
      { label: 'Return to Narthex', goto: ['pav_church', 'Narthex_mom'] },
    ]);
  } else {
    scene.actions([
      { label: 'Return to Narthex', goto: ['pav_church', 'Narthex'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPray(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/church/ch_praying.jpg');
  scene.text('You approach the prayer bench and kneel down to pray.');
  if (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 0  &&  ((s as any).args ?? 0)[1] !== 'mom') {
    scene.actions([
      { label: 'Be naughty', handler: (st: GameState) => {
    (s as any).Churchbad = ((s as any).Churchbad ?? 0) + (2);
    qspCall(s, 'fame', 'pav', 'sex', 2);
    qspCall(s, 'archetypes', 'gain', 'bimbo', 'tiny', 'Flashing in church', 1);
    (s as any).pcs_faith = Math.max(0, ((s as any).pcs_faith ?? 0) - 15);
    (s as any).flash_image = 'images/locations/pavlovsk/church/ch_prayingflash.jpg';
    // TODO-QSP: $flash_text[0] = 'As you''re praying, you get a devious idea. With a sly smile, you expose your ass,...
    qspCall(s, 'flash', 'butt', 'indoors', 2, 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Return to Narthex', goto: ['pav_church', 'Narthex'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Pray', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    (s as any).Churchbad = ((s as any).Churchbad ?? 0) - (1);
    qspCall(s, 'fame', 'church_reduction', 'pav', 1);
    qspCall(s, 'archetypes', 'faith_gain', 'pray', 10);
    if (((s as any).arch_vars ?? 0)?.['main_active'] === 'prude') {
      qspCall(s, 'mood', 'raise', 'tiny');
      qspCall(s, 'fame', 'church_reduction', 'pav', 1);
    }
    scene.img('images/locations/pavlovsk/church/ch_praying.jpg');
    if (((s as any).hour ?? 0) > 6  &&  ((s as any).hour ?? 0) < 20  &&  ((s as any).church_moral ?? 0) < 30) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (10);
      qspCall(s, 'mood', 'raise', 'tiny');
      (s as any).church_moral = ((s as any).church_moral ?? 0) + (1);
      scene.text('You decide to pray for a while. You\'re not overly religious, but the peace and quiet gives you the time to think.');
    } else {
      if (((s as any).hour ?? 0) > 6  &&  ((s as any).hour ?? 0) < 20  &&  ((s as any).church_moral ?? 0) >= 30  &&  ((s as any).church_moral ?? 0) < 60) {
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
        qspCall(s, 'mood', 'raise', 'small');
        (s as any).church_moral = ((s as any).church_moral ?? 0) + (1);
        (s as any).minut = ((s as any).minut ?? 0) + 15;
        scene.text('You decide to pray for a while. While you don\'t consider yourself to be deeply religious, you do feel a strong connection to God when you look at the icons around you. You allow yourself to look deeply into your soul as you contemplate the direction your life is going.');
      } else {
        if (((s as any).hour ?? 0) >6  &&  ((s as any).hour ?? 0) < 20  &&  ((s as any).church_moral ?? 0) >= 60) {
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (30);
          qspCall(s, 'mood', 'raise', 'medium');
          (s as any).church_moral = ((s as any).church_moral ?? 0) + (1);
          (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 31) + 30);
          scene.text('You decide to pray. The beauty and glory of being in the body of God overwhelms you and you lose yourself in prayer. You\'re unsure how much time has passed when you finally become aware of your surroundings again, but it doesn\'t matter as you are at peace with God and the world.');
        } else {
          if ((((s as any).hour ?? 0) >= 20  ||  ((s as any).hour ?? 0) <= 6)  &&  ((s as any).church_moral ?? 0) < 30) {
            (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (40);
            qspCall(s, 'mood', 'raise', 'medium');
            (s as any).church_moral = ((s as any).church_moral ?? 0) + (1);
            (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 31) + 30);
            scene.text('The Nave is lit only with small candles, leaving your surroundings in darkness. You start to get a strange vibe, one you can\'t quite shake. You suddenly get the urge to pray very intensely and before you know it, an hour has passed and you feel reborn.');
          } else {
            if ((((s as any).hour ?? 0) >= 20  ||  ((s as any).hour ?? 0) <= 6)  &&  ((s as any).church_moral ?? 0) >= 30  &&  ((s as any).church_moral ?? 0) < 60) {
              (s as any).pcs_horny = 0;
              qspCall(s, 'mood', 'raise', 'medium');
              (s as any).church_moral = ((s as any).church_moral ?? 0) + (1);
              (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 31) + 30);
              if (((s as any).drugVars ?? 0)?.['cocaine_system'] > 1) {
                ((s as any).drugVars = (s as any).drugVars ?? {})['cocaine_system'] = 3 * (((s as any).drugVars ?? {})?.['cocaine_system'] ?? 0) / 4;
              }
              scene.text('The Nave is lit only with small candles, leaving your surroundings in darkness, but you find it comforting. You get the urge to pray very intensely and before you know it, an hour has passed and you feel cleansed.');
            } else {
              if ((((s as any).hour ?? 0) >= 20  ||  ((s as any).hour ?? 0) <= 6)  &&  ((s as any).church_moral ?? 0) >= 60  &&  (Math.floor(Math.random() * 100) + 1) > 90) {
                (s as any).pcs_mood = 100;
                (s as any).church_moral = ((s as any).church_moral ?? 0) + (1);
                (s as any).Godslut = 1;
                scene.text('The Nave is lit only with small candles, leaving your surroundings in darkness, but it\'s comforting, like being in the womb of God. You get the urge to pray very intensely and lose yourself in the presence of God, overcome by religious ecstasy.');
                scene.text('You fight back a sob as your body trembles with an uncontrollable orgasm. You wipe the tears from your eyes and gaze with adoration at the face of Christ, your newest lover.');
                (s as any).orgasm_or = 'yes';
                qspCall(s, 'arousal', 'erotic', (-10));
                qspCall(s, 'arousal', 'end');
              } else {
                (s as any).pcs_horny = 0;
                qspCall(s, 'mood', 'raise', 'large');
                (s as any).church_moral = ((s as any).church_moral ?? 0) + (1);
                (s as any).minut = ((s as any).minut ?? 0) + 60;
                if (((s as any).drugVars ?? 0)?.['cocaine_system'] > 1) {
                  ((s as any).drugVars = (s as any).drugVars ?? {})['cocaine_system'] = 3 * (((s as any).drugVars ?? {})?.['cocaine_system'] ?? 0) / 4;
                }
                scene.text('The Nave is lit only with candles and small presence lights and the darkness feels very comforting, like being in the womb. You get the urge to pray very intensely and before you know it, more than an hour has passed and you feel reborn and cleansed.');
              }
            }
          }
        }
      }
    }
    qspCall(s, 'stat', '');
    if (((s as any).args ?? 0)[1] === 'mom') {
      scene.actions([
        { label: 'Return to Narthex', goto: ['pav_church', 'Narthex_mom'] },
      ]);
    } else {
      scene.actions([
        { label: 'Return to Narthex', goto: ['pav_church', 'Narthex'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterTalkPriest(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/church/ch_talk.jpg');
  scene.text('As you approach the priest, you recall your previous behavior, your sins, your transgressions, and the daily temptations you face.');
  scene.text('Going up to the priest, you bow down and touch the floor with your right hand before placing it over your left hand with your palms upward and say "Bless me, Father."');
  scene.text('"May the Lord bless you," the priest answers and blesses you with the Sign of the Cross before placing his right hand in your hands.');
  scene.text('You kiss his hand and then straighten up, taking a deep breath.');
  if (((s as any).Churchbad ?? 0) > 0  &&  ((s as any).amends_day ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Make amends', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).church_moral = ((s as any).church_moral ?? 0) + (1);
    (s as any).Kirill = ((s as any).Kirill ?? 0) + (1);
    (s as any).Churchbad = ((s as any).Churchbad ?? 0) - (1);
    (s as any).amends_day = ((s as any).daystart ?? 0);
    scene.img('images/locations/pavlovsk/church/ch_talk.jpg');
    scene.text('"Father, I want to apologize for the way I acted the last time I was here," you say, hoping he can hear the sincerity in your voice. "It was inexcusable."');
    scene.text('"Your behavior was indeed… ill-fitting of a young lady," the priest replies gravely. "However, God asks us to forgive… If you truly wish to make amends, there is something you could do."');
    scene.text('"Of course, father," you reply, eager for forgiveness.');
    scene.actions([
      { label: 'What do you need me to do', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    if (((s as any).Churchbad ?? 0) <= 2) {
      scene.img('images/locations/pavlovsk/church/supplycloset.jpg');
      scene.text('The priest leads you back to the Narthex and opens a door on the side opposite of the counter where you buy candles. Inside you see cleaning supplies.');
      scene.text('Taking out a broom, the priest smiles at you. "The Narthex and the Sanctuary could use a good sweeping and mopping," he says.');
      scene.actions([
        { label: 'Start cleaning', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    (s as any).Churchbad = ((s as any).Churchbad ?? 0) - (1);
    (s as any).church_moral = ((s as any).church_moral ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/church/churchclean.jpg');
    scene.text('You take the broom and begin your task, thankful that the church isn\'t a very large one. You diligently sweep the floor, making sure to get into all the corners. Once the sweeping is done, you mop the floor and then put everything away. You feel a sense of satisfaction and wellbeing at a job well done.');
    scene.text('As you close the closet door, you turn around to find the priest looking at you with a pleased expression.');
    // TODO-QSP: dynamic text: "Thank you, <<$pcs_firstname>>. You did a fine job." he says. Surprisingly, you ...
    scene.text(`"Thank you, ${((s as any).pcs_firstname || '')}. You did a fine job." he says. Surprisingly, you feel a flush of pleasure at the praise. You finish putting things away and leave.`);
    scene.actions([
      { label: 'Leave the church', goto: ['pav_church', 'start'] },
    ]);
  } },
        { label: 'Tell him you\'re not a maid', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).Churchbad = ((s as any).Churchbad ?? 0) + (2);
    (s as any).Kirill = ((s as any).Kirill ?? 0) - (5);
    (s as any).church_moral = ((s as any).church_moral ?? 0) - (2);
    qspCall(s, 'stat', '');
    scene.img('images/pc/reactions/bukli_angry.jpg');
    scene.text('"As if!" you state flatly, looking at the priest coldly. "You\'re the one that took an oath to work for God, not me. I\'m out of here."');
    scene.text('The priest looks as if he is going to say something before changing his mind. He shakes his head in disappointment as you walk away.');
    scene.actions([
      { label: 'Leave the church', goto: ['pav_church', 'start'] },
    ]);
  } },
      ]);
    } else {
      scene.text('The priest leads you to a bench in the Narthex and has you sit down with him.');
      // TODO-QSP: dynamic text: "I feel that you have lost your way <<$pcs_firstname>>," he begins softly. "Such...
      scene.text(`"I feel that you have lost your way ${((s as any).pcs_firstname || '')}," he begins softly. "Such behavior can only lead to a life of misery and sin."`);
      scene.text('"I know father," you reply with a sigh. "But I just can\'t seem to help it sometimes."');
      scene.actions([
        { label: 'Tease him', goto: ['pav_church', 'tease'] },
      ]);
    }
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).Churchbad ?? 0) > 0  &&  ((s as any).amends_day ?? 0) === ((s as any).daystart ?? 0)) {
      scene.text('<br>You already made amends today.');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Talk to the priest', handler: (st: GameState) => {
    (s as any).church_moral = ((s as any).church_moral ?? 0) + (Math.floor(Math.random() * 4) + 0);
    (s as any).Kirill = ((s as any).Kirill ?? 0) + (Math.floor(Math.random() * 3) + 0);
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    scene.img('images/locations/pavlovsk/church/ch_talk.jpg');
    scene.text('You sit and talk with the priest about morality and how Russian society has changed since the fall of the Soviet Union. You get the impression that although the priest was happy to see the church gain wider acceptance and freedom from the government, he doesn\'t seem to approve of how today\'s youth behave.');
    scene.actions([
      { label: 'Leave the church', goto: ['pav_church', 'start'] },
      { label: 'Stay in the Narthex', goto: ['pav_church', 'Narthex'] },
      { label: 'Keep talking', handler: (st: GameState) => {
    (s as any).church_moral = ((s as any).church_moral ?? 0) + (Math.floor(Math.random() * 3) + 0);
    (s as any).Kirill = ((s as any).Kirill ?? 0) + (Math.floor(Math.random() * 3) + 0);
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    scene.img('images/locations/pavlovsk/church/ch_talk.jpg');
    scene.text('You\'re thoroughly enjoying your discussion with him and turn to talking about Pavlovsk and how so many residents seem obsessed with sex, especially the boys. He agrees with you that people seem overly lustful around this area, and you soon start discussing how society has brought about these looser morals in people.');
    scene.text('You see an old woman you vaguely remember as living in the apartment block opposite your own. She seems anxious to talk to the priest.');
    if (((s as any).Kirill ?? 0) > 60) {
      scene.text('"It looks like Mrs. Seldipi needs to regal me with the latest of her neighbors\' multitude of sins," the priest confides with a wry smile. "We can continue our discussion another day."');
      scene.actions([
        { label: 'Leave the church', goto: ['pav_church', 'start'] },
      ]);
    } else {
      // TODO-QSP: dynamic text: "I'm sorry <<$pcs_firstname>>. It seems that I'm needed by Mrs. Seldipi," he say...
      scene.text(`"I'm sorry ${((s as any).pcs_firstname || '')}. It seems that I'm needed by Mrs. Seldipi," he says with obvious regret. "I've enjoyed our chat. Please think on what we've discussed and we'll talk another time."`);
      scene.actions([
        { label: 'Leave the church', goto: ['pav_church', 'start'] },
      ]);
    }
  } },
      { label: 'Tease him', goto: ['pav_church', 'tease'] },
    ]);
  } },
    { label: 'Chicken out', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/enterchurch.jpg');
    scene.text('You cannot bring yourself to talk to the priest yet. You are torn between stalling or simply leaving.');
    scene.actions([
      { label: 'Leave the church', goto: ['pav_church', 'start'] },
      { label: 'Stay in the Narthex', goto: ['pav_church', 'Narthex'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterTease(s: GameState, scene: SceneBuilder): void {
  (s as any).Kirill_Crpt = ((s as any).Kirill_Crpt ?? 0) + (1);
  (s as any).church_moral = ((s as any).church_moral ?? 0) - (1);
  (s as any).Churchbad = ((s as any).Churchbad ?? 0) + (1);
  scene.img('images/locations/pavlovsk/church/ch_tease.jpg');
  scene.text('Feeling naughty, you decide to try and tease the priest. While he isn\'t looking, you undo most of the buttons on your blouse, hoping he will notice.');
  if (((s as any).Kirill_Crpt ?? 0) >= 30) {
    (s as any).Kirill = ((s as any).Kirill ?? 0) + (1);
    (s as any).Kirill_Crpt = ((s as any).Kirill_Crpt ?? 0) + (1);
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    scene.text('You look the priest right in the eyes when his attention is on you, slowly leaning forward and allowing your breasts to be exposed. To your delight, you see his eyes dart to your breasts and stay there.');
    if (((s as any).kirillsex ?? 0) !== 0) {
      // TODO-QSP: dynamic text: "Very nice, <<$pcs_firstname>>." Father Kirill whispers as he reaches out and ca...
      scene.text(`"Very nice, ${((s as any).pcs_firstname || '')}." Father Kirill whispers as he reaches out and caresses your breasts before pulling your top back into place, covering you once again. "Follow me."`);
      qspCall(s, 'willpower', 'sex', 'resist');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Leave the church', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Leave the church', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    qspGoto(s, 'pav_church', 'start');
  } },
        ]);
      }
      scene.actions([
        { label: 'Follow him', goto: ['pav_church2', 'sex'] },
      ]);
    } else {
      // TODO-QSP: dynamic text: "Very nice, <<$pcs_firstname>>." Father Kirill whispers with a smile as he reach...
      scene.text(`"Very nice, ${((s as any).pcs_firstname || '')}." Father Kirill whispers with a smile as he reaches out and softly caresses your breasts before pulling your top back into place, covering you up once again.`);
      scene.text('"No temptation has overtaken you except what is common to mankind. And God is faithful; he will not let you be tempted beyond what you can bear. But when you are tempted, he will also provide a way out so that you can endure it," he murmurs as he fastens your buttons and sighs.');
      scene.text('"Thus it is written, and thus it behooved Christ to suffer, and to rise from the dead the third day," you reply looking at the telltale lump in Father Kirill\'s crotch, "It seems that Jesus is not the only one to rise from the dead," you add with a playful giggle.');
      scene.text('Father Kirill looks at you and opens his mouth to speak but no words come out. With a laugh, you jump up and skip out of the church with a final glance back at the dumbfounded cleric.');
      scene.actions([
        { label: 'Leave the church', goto: ['pav_church', 'start'] },
      ]);
    }
  } else {
    (s as any).Kirill = ((s as any).Kirill ?? 0) - (2);
    scene.text('You look the priest right in the eyes when his attention is on you, slowly leaning forward and allowing your breasts to be exposed. To your delight, you see his eyes dart to your breasts then snap back up to your face. His face flushes red.');
    if (((s as any).Churchbad ?? 0) >= 5) {
      scene.text('"You whore!" he roars in fury. "I\'ll teach you what happens to those who desecrate the House of God!"');
      scene.text('Stunned by his unexpected fury, you are unable to react before the furious priest grabs you by the arm and drags you into his office.');
      scene.actions([
        { label: 'Continue', goto: ['pav_church', 'spank'] },
      ]);
    } else {
      if (((s as any).Churchbad ?? 0) <= 4  &&  ((s as any).Kirill ?? 0) <= 20) {
        // TODO-QSP: dynamic text: "<<$pcs_firstname>> <<$pcs_lastname>>!" the priest hisses, his face twisted in r...
        scene.text(`"${((s as any).pcs_firstname || '')} ${((s as any).pcs_lastname || '')}!" the priest hisses, his face twisted in rage. "How dare you behave like this in the House of God! Get out now!"`);
        scene.text('Stunned by his unexpected fury, you hastily cover yourself up and flee from the church.');
        scene.actions([
          { label: 'Leave the church', goto: ['pav_church', 'start'] },
        ]);
      } else {
        // TODO-QSP: dynamic text: "<<$pcs_firstname>> <<$pcs_lastname>>!" the priest hisses, his face flushed with...
        scene.text(`"${((s as any).pcs_firstname || '')} ${((s as any).pcs_lastname || '')}!" the priest hisses, his face flushed with embarrassment. "How could you behave like this in the House of God! Cover yourself up, now!"`);
        scene.text('Although it isn\'t the reaction you were expecting, it is a reaction. Looking up at the priest, you can tell that his embarrassment is changing to anger. You decide that it might be best if you leave.');
        scene.actions([
          { label: 'Leave the church', goto: ['pav_church', 'start'] },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSpank(s: GameState, scene: SceneBuilder): void {
  (s as any).Kirill_Crpt = ((s as any).Kirill_Crpt ?? 0) + (1);
  (s as any).Churchbad = ((s as any).Churchbad ?? 0) - (1);
  scene.img('images/locations/pavlovsk/church/event/spank1.jpg');
  scene.text('Once in his office, he drags you over to his desk. "Bend over and expose your bottom. You obviously need to be disciplined more, else you wouldn\'t be such a sinful girl!" You stare straight at him. You know he would never force you, so why should you obey? He seems to read your thoughts as he adds "Or I can call your mother and explain to her why her daughter is excommunicated from the church."');
  scene.text('You pale slightly. You don\'t know what your mother would do, but it would be a lot worse than getting spanked by a priest, so you do as he says and expose your ass before bending over his desk. He then grabs a shoe from inside his desk.');
  qspCall(s, 'arousal', 'foreplay', 3, 'exhibitionism');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Bear it', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/event/spank2.jpg');
    scene.text('You yelp as he spanks your ass with the sole of the shoe. He isn\'t putting much strength into it - it stings, but you\'ve had far worse. After a few minutes of this, he stops and leans forward. "Have you learned your lesson?"');
    qspCall(s, 'pain', '', 1, 'asscheeks', 'spank');
    qspCall(s, 'arousal', 'foreplay', 5, 'unknown');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Yes', handler: (st: GameState) => {
    (s as any).Churchbad = ((s as any).Churchbad ?? 0) - (1);
    scene.img('images/locations/pavlovsk/church/event/spank5.jpg');
    scene.text('Your ass is stinging as you nod your head. "Yes, I\'m sorry father. I don\'t know what came over me. Please forgive me."');
    scene.text('He relaxes and sighs. "I forgive you. I\'m sorry I had to do that, but sometimes stern measures are needed."');
    scene.text('You cover yourself back up and walk out.');
    qspCall(s, 'arousal', 'foreplay', 1, 'unknown');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave the church', goto: ['pav_church', 'start'] },
    ]);
  } },
      { label: 'Not yet', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/event/spank3.jpg');
    scene.text('You shake your head and smile. "No, not when you hit like a girl." you say teasingly.');
    scene.text('You see his eyes flare in anger and he starts spanking you again. This time he puts a lot of force into the blows and your ass is really starting to sting. After a few minutes of this, he stops and leans forward and asks again. "Have you learned your lesson yet?"');
    qspCall(s, 'pain', '', 2, 'asscheeks', 'spank');
    qspCall(s, 'arousal', 'foreplay', 5, 'maso');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Yes', handler: (st: GameState) => {
    (s as any).Churchbad = ((s as any).Churchbad ?? 0) - (1);
    scene.img('images/locations/pavlovsk/church/event/spank5.jpg');
    scene.text('You nod your head. "Yes, I\'m sorry father. I have seen the errors of my way. Please forgive me."');
    scene.text('He relaxes and sighs. "I forgive you. I\'m sorry I had to do that and I\'m sorry it took you so long to learn your lesson, but sometimes stern measures are needed."');
    scene.text('You cover yourself back up and walk out a bit gingerly as you rub your stinging ass.');
    qspCall(s, 'arousal', 'foreplay', 1, 'unknown');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave the church', goto: ['pav_church', 'start'] },
    ]);
  } },
      { label: 'More!', handler: (st: GameState) => {
    (s as any).Kirill_Crpt = ((s as any).Kirill_Crpt ?? 0) + (1);
    (s as any).Churchbad = ((s as any).Churchbad ?? 0) + (1);
    scene.img('images/locations/pavlovsk/church/event/spank3.jpg');
    scene.text('"Yes, yes! Spank me harder! Please!" you cry out while sticking your ass out more.');
    scene.text('You see his eyes widen and his cheeks blushing. He again puts a lot more force into his blows and your ass is soon bright red and stinging as tears start rolling down your cheeks. After a few more minutes of this, he stops and leans forward again. "Now have you learned your lesson?"');
    qspCall(s, 'pain', '', 2, 'asscheeks', 'spank');
    qspCall(s, 'arousal', 'foreplay', 5, 'maso');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Yes', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/event/spank5.jpg');
    scene.text('You nod your head and sniffle. "Yes, I\'m sorry father. The pain has purified me of my wickedness. Please forgive me."');
    scene.text('He relaxes and sighs. "I forgive you. I\'m sorry I had to do that, but I don\'t believe you are over your wicked ways. I would like you to start attending church on a regular basis and coming to confession."');
    scene.text('You cover yourself back up. "I will father, I promise." You walk out rather stiffly, barely able to stand as your ass pulses in sharp stinging pain.');
    qspCall(s, 'arousal', 'foreplay', 1, 'unknown');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave the church', goto: ['pav_church', 'start'] },
    ]);
  } },
      { label: 'No!', handler: (st: GameState) => {
    (s as any).Churchbad = ((s as any).Churchbad ?? 0) + (1);
    scene.img('images/locations/pavlovsk/church/event/spank5.jpg');
    scene.text('You shake your head and try not to sniffle. "You\'ll need to do more than that to beat the wickedness out of me!"');
    scene.text('He sighs and drops the shoe on the desk. "I believe you. I will pray for you and pray for guidance on how to help you. You may go, but I would like you to start attending church on a regular bases and coming to confession."');
    scene.text('You cover yourself back up and smirk at him. "We\'ll see…" You walk out rather stiffly, barely able to stand as your ass pulses in sharp stinging pain. Despite this, you feel a little aroused by what happened.');
    qspCall(s, 'arousal', 'foreplay', 1, 'unknown');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave the church', goto: ['pav_church', 'start'] },
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

function enterFillers(s: GameState, scene: SceneBuilder): void {
  (s as any).randtext = Math.floor(Math.random() * 10) + 0;
  if (((s as any).randtext ?? 0) === 0  &&  ((s as any).gsAboDance ?? 0) > 0  &&  ((s as any).AlbinaQW ?? 0)?.['StarletsJoined'] === 0) {
    (s as any).safesub = 'your dance lessons';
  } else {
    if (((s as any).randtext ?? 0) === 0  &&  ((s as any).AlbinaQW ?? 0)?.['StarletsJoined'] > 0  &&  ((s as any).AlbinaQW ?? 0)?.['StarletsShutDown'] === 0) {
      (s as any).safesub = 'dancing with the Starlets';
    } else {
      if (((s as any).randtext ?? 0) === 0  &&  ((s as any).gsAboBeg ?? 0) > 0) {
        (s as any).safesub = 'your race training';
      } else {
        if (((s as any).randtext ?? 0) === 0  &&  ((s as any).vballVars ?? 0)?.['lessons_remaining'] > 0  &&  ((s as any).vballVars ?? 0)?.['on_team'] === 0) {
          (s as any).safesub = 'playing intramural volleyball';
        } else {
          if (((s as any).randtext ?? 0) === 0  &&  ((s as any).vballVars ?? 0)?.['on_team'] === 1) {
            (s as any).safesub = 'playing competitive volleyball';
          } else {
            if (((s as any).randtext ?? 0) === 0  &&  ((s as any).month ?? 0) >= 9  &&  ((s as any).month ?? 0) < 6  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
              (s as any).safesub = 'your schoolwork';
            } else {
              if (((s as any).randtext ?? 0) === 1) {
                (s as any).safesub = 'your mother';
              } else {
                if (((s as any).randtext ?? 0) === 2) {
                  (s as any).safesub = 'your stepfather';
                } else {
                  if (((s as any).randtext ?? 0) === 3) {
                    (s as any).safesub = 'your brother';
                  } else {
                    if (((s as any).randtext ?? 0) === 4) {
                      (s as any).safesub = 'your sister';
                    } else {
                      if (((s as any).randtext ?? 0) === 5) {
                        (s as any).safesub = 'your childhood friend Vasily';
                      } else {
                        if (((s as any).randtext ?? 0) === 6) {
                          (s as any).safesub = 'trying to earn money';
                        } else {
                          if (((s as any).randtext ?? 0) === 7) {
                            (s as any).Kirill = ((s as any).Kirill ?? 0) + (1);
                            (s as any).safesub = 'the Russian Orthodox Church';
                          } else {
                            if (((s as any).randtext ?? 0) === 8  &&  ((s as any).soniaQW ?? 0)?.['slut'] !== 0) {
                              (s as any).Kirill_Crpt = ((s as any).Kirill_Crpt ?? 0) + (1);
                              (s as any).safesub = 'what Sonia has been doing';
                            } else {
                              if (((s as any).randtext ?? 0) === 8  &&  ((s as any).soniaQW ?? 0)?.['slut'] === 0) {
                                (s as any).safesub = 'your curfew on weekends';
                              } else {
                                if (((s as any).randtext ?? 0) === 9) {
                                  (s as any).safesub = 'your grandparents';
                                } else {
                                  if ((!((s as any).randtext ?? 0))) {
                                    (s as any).church_moral = ((s as any).church_moral ?? 0) + (1);
                                    (s as any).safesub = 'God and Jesus';
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
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'Mom':
      enterMom(s, scene);
      break;
    case 'Sermon':
      enterSermon(s, scene);
      break;
    case 'Excuses':
      enterExcuses(s, scene);
      break;
    case 'vigil':
      enterVigil(s, scene);
      break;
    case 'liturgy':
      enterLiturgy(s, scene);
      break;
    case 'service_end':
      enterServiceEnd(s, scene);
      break;
    case 'sex_approach_run':
      enterSexApproachRun(s, scene);
      break;
    case 'sex_approach1':
      enterSexApproach1(s, scene);
      break;
    case 'sex_offer':
      enterSexOffer(s, scene);
      break;
    case 'restroom_handjob':
      enterRestroomHandjob(s, scene);
      break;
    case 'restroom_blowjob':
      enterRestroomBlowjob(s, scene);
      break;
    case 'restroom_fuck':
      enterRestroomFuck(s, scene);
      break;
    case 'restroom_fuck_bareback':
      enterRestroomFuckBareback(s, scene);
      break;
    case 'restroom_fuck_condom':
      enterRestroomFuckCondom(s, scene);
      break;
    case 'restroom_fuck_thoughts':
      enterRestroomFuckThoughts(s, scene);
      break;
    case 'restroom_fuck_condom_cum':
      enterRestroomFuckCondomCum(s, scene);
      break;
    case 'restroom_fuck_bareback_cum':
      enterRestroomFuckBarebackCum(s, scene);
      break;
    case 'restroom_cum_hand':
      enterRestroomCumHand(s, scene);
      break;
    case 'restroom_cum_face':
      enterRestroomCumFace(s, scene);
      break;
    case 'restroom_cum_mouth':
      enterRestroomCumMouth(s, scene);
      break;
    case 'restroom_sex_end':
      enterRestroomSexEnd(s, scene);
      break;
    case 'Narthex':
      enterNarthex(s, scene);
      break;
    case 'Narthex_mom':
      enterNarthexMom(s, scene);
      break;
    case 'Leave Early':
      enterLeaveEarly(s, scene);
      break;
    case 'Leave':
      enterLeave(s, scene);
      break;
    case 'candle':
      enterCandle(s, scene);
      break;
    case 'pray':
      enterPray(s, scene);
      break;
    case 'talk_priest':
      enterTalkPriest(s, scene);
      break;
    case 'tease':
      enterTease(s, scene);
      break;
    case 'spank':
      enterSpank(s, scene);
      break;
    case 'fillers':
      enterFillers(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pav_church: LocationDef = {
  name: 'pav_church',
  title: 'Church of Saint Nikolas',
  region: 'pavlovsk',
  locationType: 'public_indoors',
  enter: enter,
};
