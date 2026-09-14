import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).music_loop = 0;
  if (((s as any).pavhome_enter ?? 0) === 1) {
    if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    }
    (s as any).pavhome_enter = 0;
  }
  qspCall(s, 'core_library', 'setloc', 'korrPar', ((s as any).locArgs?.[0] ?? 0));
  (s as any).popolaini = 0;
  (s as any).saunaYouRoom = 0;
  (s as any).boycherdaksex = 0;
  (s as any).display_bb = 0;
  qspCall(s, 'family_schedule', '');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Corridor</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/home/korrpar.jpg');
  scene.text('The corridor of your parent\'s apartment. There are several doors which lead to the other rooms of the apartment, as well as the front door which leads outside to the stairwell.');
  scene.text('A <a href="exec:gt \'mirror\', \'start\'">mirror</a> hangs on the wall near the front door.');
  if (((s as any).locat ?? 0)?.['Fam_inGad'] === 1) {
    scene.text('With your parents away visiting your grandparents, the apartment seems quiet and empty.');
  }
  qspCall(s, 'home_events', 'entry');
  if ((((s as any).hour ?? 0) !== 16  &&  ((s as any).hour ?? 0) !== 17)  &&  ((s as any).blockBedrPar ?? 0) === 1) {
    (s as any).blockBedrPar = 0;
  }
  if (((s as any).locat ?? 0)?.['Mother'] === 1  &&  ((s as any).hour ?? 0) === 22  &&  ((s as any).minut ?? 0) < 30  &&  ((s as any).motherQW ?? 0)?.['con_steal_talk'] + 4 < ((s as any).daystart ?? 0)  &&  ((s as any).prezikday ?? 0) + 4 > ((s as any).daystart ?? 0)  &&  (Math.floor(Math.random() * 5) + 1) === 1) {
    // TODO-QSP: gt 'mother', 'condom_steal', iif(locat['Stepdad'] = 1, 'talk', 'hear')
  }
  if ((!((s as any).GspravkaAmbush ?? 0))) {
    (s as any).GspravkaTalked = ((s as any).daystart ?? 0);
    (s as any).GspravkaAmbush = Math.floor(Math.random() * 6) + 5;
  }
  if (((s as any).locat ?? 0)?.['Mom_athome'] === 1  &&  (((s as any).GspravkaTalked ?? 0) <= ((s as any).daystart ?? 0) - ((s as any).GspravkaAmbush ?? 0))  &&  (!((s as any).motherKnowRaped ?? 0))) {
    if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).motherKnowSpravka ?? 0) === 0  &&  ((s as any).GspravkaT ?? 0) !== 1  &&  ((((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) <= 21)  ||  (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) <= 21))) {
      (s as any).GspravkaAmbush = Math.floor(Math.random() * 5) + 3;
      scene.actions([{ label: 'Continue', goto: ['mother', 'referral'] }]);
    } else {
      if (((s as any).Gspassed ?? 0) === 1  &&  (((s as any).clothingworntype ?? 0) !== 'nude'  ||  ((s as any).clothingworntype ?? 0) !== '')  &&  ((((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) <= 21)  ||  (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) <= 21))) {
        (s as any).GspravkaAmbush = Math.floor(Math.random() * 6) + 5;
        scene.actions([{ label: 'Continue', goto: ['mother', 'ambush_referral_pass'] }]);
      } else {
        if (((s as any).GspravkaT ?? 0) === 2  &&  ((s as any).motherKnowSpravka ?? 0) === 0  &&  (((s as any).clothingworntype ?? 0) !== 'nude'  ||  ((s as any).clothingworntype ?? 0) !== '')  &&  ((((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) <= 21)  ||  (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) <= 21))) {
          (s as any).GspravkaAmbush = Math.floor(Math.random() * 4) + 2;
          scene.actions([{ label: 'Continue', goto: ['mother', 'ambush_referral_fail'] }]);
        }
      }
    }
  }
  qspCall(s, 'daily_routine', 'offer_here');
  if ((!((s as any).blockBedrPar ?? 0))) {
    if (((s as any).locat ?? 0)?.['Anya'] === 11  &&  ((s as any).sisboytrioQW ?? 0) === 1  &&  ((s as any).sisThank ?? 0) !== 1) {
      scene.actions([
        { label: 'Go to your room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['sisterQW', 'sisboytrioQW_bedroom'] },
      ]);
    } else {
      if (((s as any).locat ?? 0)?.['Anya'] === 11  &&  ((s as any).sisboytrioQW ?? 0) !== 1  &&  (((s as any).npc_QW ?? 0)?.['A33'] === 3  ||  ((s as any).npc_QW ?? 0)?.['A33'] === 5  ||  ((s as any).npc_QW ?? 0)?.['A33'] === 7  ||  ((s as any).npc_QW ?? 0)?.['A33'] >= 9)) {
        scene.actions([
          { label: 'Go to your room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['sisterQW', 'sisboyQW_bedroom'] },
        ]);
      } else {
        scene.actions([
          { label: 'Go to your room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['bedrPar', ''] },
        ]);
      }
    }
  }
  if (((s as any).locat ?? 0)?.['Mother'] === 3) {
    scene.actions([
      { label: 'Knock on your parents\' door', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.img('images/pc/activities/spy/peep3.jpg');
    // TODO-QSP: dynamic text: You knock on the door and your <<$npc_nickname['A29']>> opens it, looking like s...
    scene.text(`You knock on the door and your ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} opens it, looking like she just got out of the shower.`);
    scene.text('"I don\'t have time right now. Go wake up your brother."');
    scene.text('She then closes the door in your face.');
    scene.actions([
      { label: 'Leave', goto: ['korrPar', ''] },
      { label: 'Wake up Kolka', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/kolka/sleeping.jpg');
    scene.text('You walk down the hall and into the living room, where you find Kolka still sound asleep on the couch.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['sitrPar', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).locat ?? 0)?.['Mother'] === 1) {
      if (((s as any).hour ?? 0) === 22  &&  ((s as any).parsexrand ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).parentsexday ?? 0) !== ((s as any).daystart ?? 0)) {
        (s as any).parsexrand = ((s as any).daystart ?? 0);
        if ((!(Math.floor(Math.random() * 6) + 0))) {
          scene.actions([
            { label: 'Go to your parents\' room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['bedrPar2', 'peek'] },
          ]);
        } else {
          scene.actions([
            { label: 'Go to your parents\' room', handler: (st: GameState) => {
    // TODO-QSP: msg 'Your parents are probably asleep. You shouldn''t go in ...
  } },
          ]);
        }
      } else {
        scene.actions([
          { label: 'Go to your parents\' room', handler: (st: GameState) => {
    // TODO-QSP: msg 'Your parents are probably asleep. You shouldn''t go in ...
  } },
        ]);
      }
    } else {
      scene.actions([
        { label: 'Go to your parents\' room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['bedrPar2', ''] },
      ]);
    }
  }
  if (((s as any).locat ?? 0)?.['Mother'] === 2) {
    if (((s as any).vanrPar_suction_dildo ?? 0) > 0) {
      if (!(s as any).motherQW) (s as any).motherQW = {}; (s as any).motherQW['dildo_shower_discovery'] = 1;
      scene.actions([{ label: 'Continue', goto: ['mother_sextalk', 'bathroom_dildo_shriek1'] }]);
    }
    scene.actions([
      { label: 'Go to the bathroom', handler: (st: GameState) => {
    // TODO-QSP: msg 'You try to open the bathroom door, but it immediately b...
  } },
    ]);
  } else {
    if (((s as any).locat ?? 0)?.['Stepdad'] === 5  ||  ((s as any).locat ?? 0)?.['Stepdad'] === 11) {
      if (((s as any).locat ?? 0)?.['Stepdad'] === 5) {
        scene.actions([
          { label: 'Go to the bathroom', handler: (st: GameState) => {
    // TODO-QSP: msg 'You try to open the bathroom door, but it immediately b...
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Go to the bathroom', handler: (st: GameState) => {
    // TODO-QSP: msg 'You try to open the bathroom door, but it immediately b...
  } },
        ]);
      }
    } else {
      if (((s as any).locat ?? 0)?.['Kolka'] === 10) {
        scene.actions([
          { label: 'Go to the bathroom', handler: (st: GameState) => {
    // TODO-QSP: msg 'You try to open the bathroom door, but it immediately b...
  } },
        ]);
      } else {
        if (((s as any).locat ?? 0)?.['Anya'] === 5) {
          scene.actions([
            { label: 'Go to the bathroom', handler: (st: GameState) => {
    // TODO-QSP: msg 'You try to open the bathroom door, but it immediately b...
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Go to the bathroom', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['vanrPar', ''] },
          ]);
        }
      }
    }
  }
  if (((s as any).motherQW ?? 0)?.['bathroom_dildos'] > 0  &&  ((s as any).locat ?? 0)?.['Mom_athome'] === 1) {
    scene.actions([{ label: 'Continue', goto: ['mother_sextalk', 'bathroom_dildos1'] }]);
  }
  if (((s as any).nodimkaK ?? 0) >= (Math.floor(Math.random() * 4) + 7)  &&  ((s as any).DimkaWarnedToday ?? 0) === 0  &&  (!((s as any).DimaRudeBlock ?? 0))) {
    (s as any).nodimkaK = 0;
    if (((s as any).hour ?? 0) >= 14  &&  ((s as any).hour ?? 0) < 24  &&  ((s as any).week ?? 0) <=5  &&  (!((s as any).DimkaWarnedToday ?? 0))) {
      scene.actions([{ label: 'Continue', goto: ['dimaEv', 'Dimka_warning'] }]);
    }
    if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 24  &&  ((s as any).week ?? 0) >=6  &&  (!((s as any).DimkaWarnedToday ?? 0))) {
      scene.actions([{ label: 'Continue', goto: ['dimaEv', 'Dimka_warning'] }]);
    }
  }
  if (((s as any).NatbelQW ?? 0)?.['QWstage'] >= 4  &&  ((s as any).week ?? 0) < 6  &&  (((s as any).hour ?? 0) === 6  ||  ((s as any).hour ?? 0) === 7)  &&  ((s as any).kanikuli ?? 0) === 0  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0  &&  (((s as any).PSchool ?? 0) === 1  ||  ((s as any).cheatVars ?? 0)?.['school_clothing'] === 1)) {
    scene.text('You could go to Natasha\'s apartment and get her to carry your books to school.');
    scene.actions([
      { label: 'Go to Natasha\'s apartment', goto: ['natbel_cp_1', 'carrybooks'] },
    ]);
  }
  if (qspFunc(s, 'homes_properties', 'is_current_home') === 0) {
    scene.actions([
      { label: 'Set this apartment as your main home', handler: (st: GameState) => {
    if (qspFunc(s, 'homes_properties', 'can_live_here') === 0) {
      qspCall(s, 'homes_properties', 'give_access');
    }
    qspCall(s, 'homes_properties', 'set_home');
  }, goto: ['korrPar', ''] },
    ]);
  } else {
    if (((s as any).status ?? 0)?.['dog'] !== 'blocked'  &&  ((s as any).menu_off ?? 0) === 0  &&  ((s as any).rex ?? 0)?.['owned'] === 1) {
      if (((s as any).rex ?? 0)?.['status'] === 0) {
        scene.actions([{ label: 'Continue', goto: ['pet_dog', 'name'] }]);
      } else {
        if (((s as any).hour ?? 0) > 5) {
          // TODO-QSP: dynamic text: <br>Your dog <a href="exec: gt 'pet_dog', 'start'"><<$rex['name']>></a> is lying...
          scene.text(`<br>Your dog <a href="exec: gt 'pet_dog', 'start'">${((s as any).rex ?? 0)?.['name'] ?? ''}</a> is lying on the floor.<br>`);
        } else {
          if (((s as any).hour ?? 0) < 6) {
            // TODO-QSP: dynamic text: <br><<$rex['name']>> is sleeping in his dog basket.<br>
            scene.text(`<br>${((s as any).rex ?? 0)?.['name'] ?? ''} is sleeping in his dog basket.<br>`);
          }
        }
      }
    }
  }
  if (((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) <= 20  &&  ((s as any).locat ?? 0)?.['Fam_inGad'] === 0) {
    if (((s as any).artemvbrosvid ?? 0) === 1  &&  ((s as any).artemhakday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).npc_QW ?? 0)?.['A29'] < 2  &&  ((s as any).mothervideotalk ?? 0) === 0  ||  ((s as any).brotherQW ?? 0)?.['refused_seeporn_bj'] === 1  &&  ((s as any).brotherQW ?? 0)?.['refused_seeporn_bj_day'] !== ((s as any).daystart ?? 0)  &&  (!((s as any).BJvideoPublic ?? 0))) {
      (s as any).BJvideoPublic = 1;
      if (!(s as any).brotherQW) (s as any).brotherQW = {}; (s as any).brotherQW['refused_seeporn_bj'] = 0;
      if (!(s as any).brotherQW) (s as any).brotherQW = {}; (s as any).brotherQW['refused_seeporn_bj_day'] = ((s as any).daystart ?? 0);
      qspCall(s, 'mood', 'lower', 'min');
      qspCall(s, 'npc_relationship', 'modify', 'A29', (-40));
      qspCall(s, 'stat', '');
      scene.text('Your mother stands in the hallway waiting for you, clearly angry. As soon as she sees you, she grabs your ear and pinches it hard, making you wince in pain.');
      scene.text('"I just saw this video of you sucking some guy\'s dick! What the hell were you thinking?! Your stepfather and I worked so hard to raise you properly, and then you do <i>this</i>! Do you realize that this video was sent to others too? What will the people in town think of us now? What do you have to say for yourself?! Speak up!"');
      if (((s as any).momslut ?? 0) >= 2) {
        scene.actions([
          { label: 'Threaten her', handler: (st: GameState) => {
    (s as any).mothervideotalk = 1;
    qspCall(s, 'npc_relationship', 'modify', 'A29', (-10));
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You slap away her hand with a defiant look in your eyes. "Oh really? Well you're...
    scene.text(`You slap away her hand with a defiant look in your eyes. "Oh really? Well you're no angel yourself, ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''}! Does Vladimir know what YOU have been up to lately? Why don't we go and ask him?"`);
    scene.text('Your mother looks at you furiously, but is at a loss for words. After a few seconds of awkward silence, she storms off, slamming the door behind her as she goes.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
        ]);
      }
      return;
      scene.actions([
        { label: 'Beg her to do nothing', handler: (st: GameState) => {
    (s as any).mothervideotalk = 2;
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You burst into tears. "<<$npc_nickname['A29']>>, please forgive me! It will neve...
    scene.text(`You burst into tears. "${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''}, please forgive me! It will never happen again! I made a stupid mistake, I'm sorry… I didn't mean to… Please… I don't… I'm sorry…"`);
    scene.text('You fall to your knees sobbing uncontrollably, hoping she will have mercy on you.');
    scene.text('Your mother looks down at you, still angry but not quite sure what to do. She just lets out an exasperated gasp, shakes her head and walks away.');
    scene.actions([
      { label: 'Get back on your feet', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
        { label: 'Be silent', handler: (st: GameState) => {
    (s as any).mothervideotalk = 3;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).spank = ((s as any).spank ?? 0) + (1);
    qspCall(s, 'pain', '', 5, 'asscheeks', 'spank');
    qspCall(s, 'stat', '');
    scene.text(`<center><b>${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''}</b></center>`);
    scene.img('images/characters/pavlovsk/resident/mom/spank.jpg');
    scene.text('You stand in the hallway staring at the floor, too embarrassed to say anything before your mother suddenly grabs you by the arm and drags you into the living room. "Take off your pants and bend over!"');
    scene.text('You shake your head and refuse to budge, not liking where this is going at all.');
    scene.text('"Vladimir, come and hold her down!" she shouts, clearly angered by your refusal.');
    scene.text('A few seconds later, your stepfather enters the living room and immediately pulls you down, holding you in place while your mother pulls away your clothing. She then grabs a belt and starts to flog your bare ass with it, not holding back at all.');
    scene.text('You take your punishment as good as you can, but towards the end you\'re in tears and your cries are heard throughout the apartment. When it\'s finally over, you raise your head just in time to catch the startled faces of your brother and sister in the doorway.');
    scene.actions([
      { label: 'Stand up and straighten your clothes', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
      ]);
    }
    if (((s as any).artemvbrosvid ?? 0)===1  &&  ((s as any).artemhakday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).npc_QW ?? 0)?.['A29'] >= 2  &&  ((s as any).mothervideotalk ?? 0) === 0  &&  (!((s as any).BJvideoPublic ?? 0))) {
      (s as any).BJvideoPublic = 1;
      qspCall(s, 'mood', 'lower', 'min');
      qspCall(s, 'stat', '');
      // TODO-QSP: dynamic text: When you enter the hallway, you find your mother waiting for you. "What's all th...
      scene.text(`When you enter the hallway, you find your mother waiting for you. "What's all this I hear about a video of you sucking some guy's dick? How could you be so careless, ${((s as any).pcs_nickname || '')}? You do realize this makes our whole family look bad?"`);
      return;
      scene.actions([
        { label: 'Apologize', handler: (st: GameState) => {
    (s as any).mothervideotalk = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'npc_relationship', 'modify', 'A29', (-40));
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: "I don't know what to say, <<$npc_nickname['A29']>>… I'm really sorry."
    scene.text(`"I don't know what to say, ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''}… I'm really sorry."`);
    scene.text('Your mother is clearly very upset with you. After a short discussion, she walks away.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
      ]);
    }
    if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  (((s as any).abductionReturned ?? 0) > 0  ||  (((s as any).gschoolVars ?? 0)?.['absence_count'] > 2  &&  ((s as any).gschoolVars ?? 0)?.['expell_stage'] < 3))) {
      qspCall(s, 'stat', '');
      if (((s as any).abductionReturned ?? 0) > 0) {
        if (!(s as any).gschoolVars) (s as any).gschoolVars = {}; (s as any).gschoolVars['absence_count'] = 0;
        (s as any).GspravkaT = 2;
        (s as any).motherKnowSpravka = 1;
        qspCall(s, 'stat', '');
        if (((s as any).abductionReturned ?? 0) === 2) {
          // TODO-QSP: dynamic text: "Oh <<$pcs_nickname>>! Thank god, where have you been? I've been worried sick!"
          scene.text(`"Oh ${((s as any).pcs_nickname || '')}! Thank god, where have you been? I've been worried sick!"`);
          scene.text('You tell her you went to stay with a friend for a few days and lost track of time, and apologize for not calling. She looks relieved, if annoyed you did not at least send a message.');
          scene.text('"Next time, you call me. Do you understand? I do not care how old you think you are, you scared me half to death." She pulls you into a tight hug anyway, holding on a little longer than usual.');
        } else {
          scene.text('"Oh my darling, where have you been? We\'ve been so worried!"');
          // TODO-QSP: dynamic text: You walk into the kitchen with your <<$npc_nickname['A29']>> and spend some time...
          scene.text(`You walk into the kitchen with your ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} and spend some time explaining what happened to you. Many of the details are difficult to talk about, and you cry and hug her as you tell your story.`);
          // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> tells you she'll sort out everything with the scho...
          scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} tells you she'll sort out everything with the school and makes you a bowl of chicken soup.`);
          qspCall(s, 'food', 'family_meals');
          qspCall(s, 'food', 'aftermeal');
          // TODO-QSP: dynamic text: You eat the chicken soup, and<<$mtxt>>
          scene.text(`You eat the chicken soup, and${((s as any).mtxt || '')}`);
        }
        (s as any).abductionReturned = 0;
        return;
        scene.actions([
          { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['kuhrPar', ''] },
        ]);
      } else {
        if (((s as any).gschoolVars ?? 0)?.['expell_stage'] === 0) {
          if (!(s as any).gschoolVars) (s as any).gschoolVars = {}; (s as any).gschoolVars['expell_stage'] = 1;
          if (!(s as any).gschoolVars) (s as any).gschoolVars = {}; (s as any).gschoolVars['absence_count'] = 0;
          qspCall(s, 'npc_relationship', 'set', 'A29', 0);
          qspCall(s, 'grades', 'grade_award', 'school', 'math', (-20));
          qspCall(s, 'grades', 'grade_award', 'school', 'rus', (-20));
          qspCall(s, 'grades', 'grade_award', 'school', 'lit', (-20));
          qspCall(s, 'grades', 'grade_award', 'school', 'art', (-20));
          qspCall(s, 'grades', 'grade_award', 'school', 'bio', (-20));
          qspCall(s, 'grades', 'grade_award', 'school', 'pe', (-20));
          qspCall(s, 'grades', 'grade_award', 'school', 'eng', (-20));
          qspCall(s, 'grades', 'grade_award', 'school', 'geo', (-20));
          qspCall(s, 'grades', 'grade_award', 'school', 'sci', (-20));
          qspCall(s, 'grades', 'grade_award', 'school', 'shop', (-20));
          qspCall(s, 'grades', 'grade_award', 'school', 'comp', (-20));
          qspCall(s, 'grades', 'grade_award', 'school', 'mus', (-20));
          qspCall(s, 'grades', 'grade_award', 'school', 'his', (-20));
          if (((s as any).npc_rel ?? 0)?.['A29'] >= 40) {
            // TODO-QSP: dynamic text: You find your mother waiting for you when you enter the hallway. "<<$pcs_nicknam...
            scene.text(`You find your mother waiting for you when you enter the hallway. "${((s as any).pcs_nickname || '')}? The school called saying you weren't at school today. You know they're very unforgiving when it comes to absenteeism. They said they would expel you if it happens again. What are you doing with your life? Get it together!"`);
            scene.text('She angrily leaves the room, leaving you to your thoughts.');
          } else {
            // TODO-QSP: dynamic text: You find your mother waiting for you when you enter the hallway. "<<$pcs_nicknam...
            scene.text(`You find your mother waiting for you when you enter the hallway. "${((s as any).pcs_nickname || '')}? The school called saying you weren't at school today. You know they're very unforgiving when it comes to absenteeism. They said they would expel you if it happens again. What are you doing with your life? Get it together!"`);
            scene.text('She angrily leaves the room, leaving you to your thoughts.');
          }
        } else {
          if (((s as any).gschoolVars ?? 0)?.['expell_stage'] === 1) {
            if (!(s as any).gschoolVars) (s as any).gschoolVars = {}; (s as any).gschoolVars['expell_stage'] = 2;
            if (!(s as any).gschoolVars) (s as any).gschoolVars = {}; (s as any).gschoolVars['absence_count'] = 0;
            qspCall(s, 'npc_relationship', 'set', 'A29', 0);
            qspCall(s, 'grades', 'grade_award', 'school', 'math', (-40));
            qspCall(s, 'grades', 'grade_award', 'school', 'rus', (-40));
            qspCall(s, 'grades', 'grade_award', 'school', 'lit', (-40));
            qspCall(s, 'grades', 'grade_award', 'school', 'art', (-40));
            qspCall(s, 'grades', 'grade_award', 'school', 'bio', (-40));
            qspCall(s, 'grades', 'grade_award', 'school', 'pe', (-40));
            qspCall(s, 'grades', 'grade_award', 'school', 'eng', (-40));
            qspCall(s, 'grades', 'grade_award', 'school', 'geo', (-40));
            qspCall(s, 'grades', 'grade_award', 'school', 'sci', (-40));
            qspCall(s, 'grades', 'grade_award', 'school', 'shop', (-40));
            qspCall(s, 'grades', 'grade_award', 'school', 'comp', (-40));
            qspCall(s, 'grades', 'grade_award', 'school', 'mus', (-40));
            qspCall(s, 'grades', 'grade_award', 'school', 'his', (-40));
            if (((s as any).npc_rel ?? 0)?.['A29'] >= 40) {
              scene.text('You find your mother waiting for you when you enter the hallway. She seems very angry with you. "The school called saying you didn\'t show up for class again. They wanted to expel you! I had to go over there and beg the principal to give you one last chance. I\'ve never felt so humiliated!"');
              // TODO-QSP: dynamic text: She rubs the bridge of her nose, seemingly to calm herself down. "This is your l...
              scene.text(`She rubs the bridge of her nose, seemingly to calm herself down. "This is your last chance, ${((s as any).pcs_nickname || '')}. You will <i>not</i> embarrass me any further! If you miss one more day of school, they will kick you out. And if you get kicked out of school, life is going to get a lot tougher for you, especially around here!"`);
              scene.text('Having said her piece, she turns around and leaves.');
            } else {
              scene.text('You find your mother waiting for you when you enter the hallway. She seems very angry with you. "The school called saying you didn\'t show up for class again. They wanted to expel you! I had to go over there and beg the principal to give you one last chance. I\'ve never felt so humiliated!"');
              // TODO-QSP: dynamic text: She rubs the bridge of her nose, seemingly to calm herself down. "This is your l...
              scene.text(`She rubs the bridge of her nose, seemingly to calm herself down. "This is your last chance, ${((s as any).pcs_nickname || '')}. You will <i>not</i> embarrass me any further! If you miss one more day of school, they will kick you out. And if you get kicked out of school, I will personally kick you out of the house. If you cannot be responsible and behave like a normal person, then get out! No one is forcing you to stay."`);
              scene.text('Having said her piece, she turns around and leaves.');
            }
          } else {
            if (((s as any).gschoolVars ?? 0)?.['expell_stage'] === 2) {
              if (!(s as any).gschoolVars) (s as any).gschoolVars = {}; (s as any).gschoolVars['expell_stage'] = 3;
              if (!(s as any).gschoolVars) (s as any).gschoolVars = {}; (s as any).gschoolVars['absence_count'] = 0;
              qspCall(s, 'npc_relationship', 'set', 'A29', 0);
              if (!(s as any).gschoolVars) (s as any).gschoolVars = {}; (s as any).gschoolVars['block'] = 1;
              qspCall(s, 'archetypes', 'gain', 'punk', 'large', 'Expelled from school');
              qspCall(s, 'grades', 'grade_award', 'school', 'math', (-100));
              qspCall(s, 'grades', 'grade_award', 'school', 'rus', (-100));
              qspCall(s, 'grades', 'grade_award', 'school', 'lit', (-100));
              qspCall(s, 'grades', 'grade_award', 'school', 'art', (-100));
              qspCall(s, 'grades', 'grade_award', 'school', 'bio', (-100));
              qspCall(s, 'grades', 'grade_award', 'school', 'pe', (-100));
              qspCall(s, 'grades', 'grade_award', 'school', 'eng', (-100));
              qspCall(s, 'grades', 'grade_award', 'school', 'geo', (-100));
              qspCall(s, 'grades', 'grade_award', 'school', 'sci', (-100));
              qspCall(s, 'grades', 'grade_award', 'school', 'shop', (-100));
              qspCall(s, 'grades', 'grade_award', 'school', 'comp', (-100));
              qspCall(s, 'grades', 'grade_award', 'school', 'mus', (-100));
              qspCall(s, 'grades', 'grade_award', 'school', 'his', (-100));
              qspCall(s, 'calendar', 'pack', 'remove', 'school');
              if (((s as any).npc_rel ?? 0)?.['A29'] >= 40) {
                // TODO-QSP: dynamic text: You find your mother waiting for you when you enter the hallway. You have never ...
                scene.text(`You find your mother waiting for you when you enter the hallway. You have never seen her this furious before. "${((s as any).pcs_nickname || '')}? I just got off the phone with the school. They told me you didn't show up yet again and expelled you. I'm extremely disappointed with you! I've warned you so many times! If you want to keep sleeping under this roof, then you better start pulling your weight around here! Right now, I want you to go out and find a job!"`);
                scene.text('She pushes you out the door and slams it shut in your face.');
              } else {
                qspCall(s, 'homes_properties', 'block_access', 'parents_home');
                // TODO-QSP: dynamic text: You find your mother waiting for you when you enter the hallway. You have never ...
                scene.text(`You find your mother waiting for you when you enter the hallway. You have never seen her this furious before. "${((s as any).pcs_nickname || '')}? I just got off the phone with the school, they told me you didn't show up yet again and expelled you. I've had it with you! I've warned you so many times! Go ahead, live your irresponsible life the way you want. You're no longer welcome here."`);
                scene.text('She has already packed up your things and roughly shoves the bag into your hands before she pushes you out the door and slams it shut in your face.');
              }
              return;
              scene.actions([
                { label: 'Leave', goto: ['pav_residential', ''] },
              ]);
            }
          }
        }
      }
      return;
      scene.actions([
        { label: 'Continue', goto: ['korrPar', ''] },
      ]);
    }
  }
  if (((s as any).hour ?? 0) >= 15  &&  ((s as any).hour ?? 0) < 20) {
    if ((!((s as any).Gcall ?? 0))) {
      (s as any).numnpcboy = 0;
      // TODO-QSP: :markboyfrendcall
      (s as any).numnpcboy = ((s as any).numnpcboy ?? 0) + (1);
      if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpcboy ?? 0)] >= 20  &&  ((s as any).boyinday ?? 0)?.[String((s as any).numnpcboy ?? 0)]!((s as any).daystart ?? 0)) {
        (s as any).Gcall = 1;
        scene.text('You hear the <a href="exec:gt \'gtelefon\'">phone</a> ringing in the hallway.');
      } else {
        if ((Object.keys((s as any).otnBoyFrend ?? {}).length-1) > ((s as any).numnpcboy ?? 0)) {
          // TODO-QSP: jump 'markboyfrendcall'
        }
      }
    }
  } else {
    if (((s as any).Gcall ?? 0) > 0) {
      (s as any).Gcall = 0;
    }
  }
  if (((s as any).motherworry ?? 0) === 1) {
    if (((s as any).locat ?? 0)?.['Fam_inGad'] > 0  ||  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 1) {
      (s as any).motherworry = 0;
    } else {
      scene.actions([{ label: 'Continue', goto: ['mother', ''] }]);
    }
  }
  if (((s as any).sleepVars ?? 0)?.['notathomesleep'] > 7  &&  ((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) < 21  &&  ((s as any).locat ?? 0)?.['Mom_athome'] === 1) {
    if (!(s as any).sleepVars) (s as any).sleepVars = {}; (s as any).sleepVars['notathomesleep'] = 0;
    if (((s as any).npc_rel ?? 0)?.['A29'] < 40) {
      scene.text('You run into your mother in the hallway. "Well well, look who decided to come home for once."');
      scene.actions([
        { label: 'Continue', goto: ['korrPar', ''] },
      ]);
    }
    if (((s as any).npc_rel ?? 0)?.['A29'] >= 40) {
      scene.text('You run into your mother in the hallway. She looks happy to see you. "What a surprise! Welcome home, honey! I\'ve missed you."');
      scene.actions([
        { label: 'Continue', goto: ['korrPar', ''] },
      ]);
    }
  }
  if (((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) <= 23  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 250  &&  ((s as any).podwhoreQW ?? 0) >= 3) {
    (s as any).pod_client = Math.floor(Math.random() * 101) + 0;
    if (((s as any).pod_whore_countQW ?? 0) <= 15  &&  ((s as any).pod_client ?? 0) <= 5) {
      scene.text('Someone is at the door: <a href="exec: gt \'pod_whore\', \'client_talk\'">Answer</a>');
    } else {
      if (((s as any).pod_whore_countQW ?? 0) > 15  &&  ((s as any).pod_client ?? 0) <= 20) {
        scene.text('Someone is at the door: <a href="exec: gt \'pod_whore\', \'client_talk\'">Answer</a>');
      }
    }
  }
  scene.actions([
    { label: '<b>Leave and go to the stairwell</b>', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) !== 'nude') {
      (s as any).minut = ((s as any).minut ?? 0) + (1);
      scene.actions([{ label: 'Continue', goto: ['pod_ezd', 'etaj_2'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['korrPar', ''] }]);
    }
  } },
    { label: '<b>Leave and go to the courtyard</b>', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) !== 'nude') {
      if (((s as any).hour ?? 0) < 5  &&  ((s as any).motherworry ?? 0) === 0  &&  ((s as any).age ?? 0) < 18  &&  ((s as any).locat ?? 0)?.['Fam_inGad'] === 0) {
        scene.text('<font color=red>Are you sure? Your mother will worry.</b></font>');
        scene.actions([
          { label: '<font color=red><b>Go outside</b></font>', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
  }, goto: ['pav_complex', 'start'] },
          { label: 'Stay inside', goto: ['korrPar', ''] },
        ]);
      } else {
        (s as any).minut = ((s as any).minut ?? 0) + 5;
        scene.actions([{ label: 'Continue', goto: ['pav_complex', 'start'] }]);
      }
    } else {
      scene.actions([{ label: 'Continue', goto: ['korrPar', ''] }]);
    }
  } },
    { label: 'Go to the living room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['sitrPar', ''] },
    { label: 'Go to the kitchen', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['kuhrPar', ''] },
  ]);
  scene.build();
}

export const korrPar: LocationDef = {
  name: 'korrPar',
  title: 'Corridor',
  region: 'other',
  locationType: 'private',
  description: ['The corridor of your parent\'s apartment. There are several doors which lead to the other rooms of the apartment, as well as the front door which leads outside to the stairwell.'],
  enter: enter,
};
