import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterTaxi(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bdsm_mansion', 'taxi');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/suburb/bdsm_club/club.jpg');
  if (((s as any).hour ?? 0) < 16  &&  ((s as any).hour ?? 0) > 2) {
    ((s as any).bdsmclub ?? {})['unlocked'] = 1;
    // TODO-QSP: dynamic text: The taxi brings you in a gated community outside of town and drops you off at th...
    scene.text('The taxi brings you in a gated community outside of town and drops you off at the closed wrought iron gate. You attempt to enter the secret club but the guard tells you it is closed. You show your card and he tells you to come back after \'+func(\'time\', \'get_time_string\', 16, 0)+\'.');
    scene.actions([
      { label: 'Leave', goto: ['city_suburbs', 'start'] },
    ]);
  } else {
    scene.text('The taxi brings you in a gated community outside of town and drops you off at the closed wrought iron gate. From the booth comes a guard, you show him the business card. Without saying anything, he opens the gate and points you towards the door. You walk alone a marble tiled walkway past the neatly clipped shrubs and flower beds. An other guard meets you, and leads you into the mansion through the main door.');
    if (((s as any).bdsmclub ?? 0)?.['unlocked'] === 1) {
      scene.actions([
        { label: 'Enter club', goto: ['bdsm_mansion', 'start'] },
      ]);
    } else {
      scene.actions([
        { label: 'Enter club', goto: ['bdsm_mansion', 'intro'] },
      ]);
    }
  }
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bdsm_mansion', 'start');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/suburb/bdsm_club/club.jpg');
  scene.text('You are standing in front of a large mansion in the suburbs of St Petersberg.');
  if (((s as any).bdsmclub ?? 0)?.['unlocked'] === 0) {
    return;
    scene.actions([
      { label: 'Go to the elite settlement', goto: ['city_suburbs', 'start'] },
    ]);
  }
  scene.text('You know this to be a BDSM club for rich people and you have access.');
  if (((s as any).hour ?? 0) < 16  &&  ((s as any).hour ?? 0) > 2) {
    // TODO-QSP: dynamic text: The club is closed until ' + $func('time', 'get_time_string', 16, 0) + '.
    scene.text('The club is closed until \' + $func(\'time\', \'get_time_string\', 16, 0) + \'.');
    scene.actions([
      { label: 'Leave', goto: ['city_suburbs', 'start'] },
    ]);
  } else {
    if (((s as any).bdsmclub ?? 0)?.['training_daystart'] !== ((s as any).daystart ?? 0)) {
      if (((s as any).bdsmclub ?? 0)?.['subtraining'] < 3) {
        scene.actions([
          { label: 'Get submissive training', goto: ['bdsm_training', 'sub'] },
        ]);
      }
      if (((s as any).bdsmclub ?? 0)?.['domtraining'] < 1) {
        if (((s as any).daystart ?? 0) < ((s as any).bdsmclub ?? 0)?.['payday'] + 30) {
          scene.actions([
            { label: 'Get Dominant training', goto: ['bdsm_training', 'dom'] },
          ]);
        } else {
          scene.actions([
            { label: 'Get Dominant training  [+$func(\'wrap\', \'neg\', \'(unavailable until...]', handler: (st: GameState) => {
    // TODO-QSP: *pl $func('wrap', 'neg', '<br>You need to pay the subscripti...
  } },
          ]);
        }
      }
      scene.actions([
        { label: 'Enter the club', goto: ['bdsm_hallway', 'foyer'] },
      ]);
    }
  }
  qspCall(s, 'taxi', '');
  scene.actions([
    { label: 'Go to the elite settlement', goto: ['city_suburbs', 'start'] },
  ]);
  scene.build();
}

function enterIntro(s: GameState, scene: SceneBuilder): void {
  ((s as any).bdsmclub ?? {})['intro'] = 1;
  ((s as any).bdsmclub ?? {})['training_daystart'] = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/suburb/bdsm_club/1_1.jpg');
  scene.text('You\'re standing in an office, at a table in front of you sits a woman in a strict business suit. Her strict gaze as looks right through you. You show her the card, she briefly says.');
  scene.text('"Candidate? Passport."');
  scene.text('Your hand trembles as you reach out your passport.');
  scene.text('The woman points you to a chair, turns to the computer and starts clicking on the keys. She nods a few times, but says nothing. Then takes the phone and speaks to someone called Vladimir Viktorovich, discussing you. "There\'s candidacy, but a bit young, can you check and sort the paperwork? She hangs up, after a few minutes from the office comes a strapping man in a perfectly fitting suit and glasses with gold rim. He says, "Hello." And sits down next to you.');
  // TODO-QSP: dynamic text: "What's your name? <<$pcs_nickname>>? Fine. How old are you?"
  scene.text(`"What's your name? ${((s as any).pcs_nickname ?? 0)}? Fine. How old are you?"`);
  scene.text('You answer the questions.');
  scene.text('"Tell me, are you sure you want this?"');
  scene.text('You understand, all of the questions he is asking and why.');
  scene.text('"Sure!" You tell him firmly.');
  scene.text('"Well… everything here seems to be in order, there are no issues. Let\'s sign some papers. A mere formality, to formally record, that you have grasped everything.');
  scene.text('The man puts a sheet of paper on the table.');
  scene.text('"Read aloud and sign."');
  scene.text('You take the sheet and read "The application for voluntary informed consent" a long, binding document filled with legal terms, confirming your consent to voluntarily participate in actions of a sexual nature, which may be humiliating or degrading in nature and be accompanied by mild corporal punishment. You are not a lawyer, but you understand, this covers them if something goes wrong and takes every step to prevent that.');
  scene.text('"I agree."');
  scene.text('"Well," the woman puts her hands together and looks at you. Due to the nature of this club I have to carry out a visual inspection to confirm physical suitability.');
  scene.text('"I do not know," you shrug. "What does that mean?"');
  scene.text('"Simple you remove all your clothing and I have a good look, its a perk of the job. Besides we record this interview and it helps discourage talk about the club reaching people it should not."');
  scene.actions([
    { label: 'Hesitate', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    ((s as any).bdsmclub ?? {})['intro'] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/suburb/bdsm_club/r1_2.jpg');
    scene.text('The woman\'s eyes light up. She stands up behind the desk and orders you.');
    scene.text('"Stand up!"');
    scene.text('You jump, than understand, why you did. The imperious voice of this Lady holds you in awe.');
    scene.text('"Undress!"');
    scene.text('"But…"');
    scene.text('"Undress, now! Or I\'ll have security do it for you!" She has her hand on the table, her finger hovering over a small red button which you have to assume will summon the security guard.');
    scene.text('You look to Vladimir you were just talking to, but he just stands there, expressionless. You undress.');
    scene.text('"Sign!"');
    scene.text('You sign the document. The man places the paper in a folder and leaves.');
    scene.text('"Listen carefully…"');
    scene.actions([
      { label: 'Listen', handler: (st: GameState) => {
    scene.img('images/locations/city/suburb/bdsm_club/1_1.jpg');
    // TODO-QSP: dynamic text: She explains that there are two ways to visit the club, either as a submissive w...
    scene.text('She explains that there are two ways to visit the club, either as a submissive where you will be subject to sexualization and humiliation, but its free. Or you can pay a monthly fee of \' + $func(\'money\', \'string_price\', 10000) + \' and visit as a Dominant, in this case you will be able to sexualize and humiliate the submissives.');
    scene.text('For each role there is something of a dress code in that subs must dress either in submissive fetishwear, as a maid or be naked. A dominant simply has to be dressed in expensive quality clothing.');
    scene.text('There is also a required training aspect.');
    if (((s as any).bdsmclub ?? 0)?.['annatraining'] === 1) {
      scene.text('You tell Mistress Elektra that you have been training with Anna');
      scene.text('"OMG! She told me to look out for you and I clean forgot. I\'m so sorry, I\'ll mark your training for both roles as complete."');
      scene.text('Due to some contract law you can\'t use the club today but you will be able to from tomorrow.');
    } else {
      scene.text('Before you can use the club you must either have paid your monthly subscription and I will run you through the rules for Dominants.');
      scene.text('Or You can do my complimentary submissive training over 4 days of your choice (not Tuesdays or Thursdays) and then you can enjoy the free submissive experience.');
    }
    scene.text('"When you arrive at the club you must go to the dressing room and change into suitable clothing for your role, that role remains while in the club but for those wanting to experience all that we have to offer you can switch my changing into the appropriate clothing in the dressing room, but remember you cannot enter as a Dom unless your subscription is paid in advance."');
    scene.text('"We are do here, you may leave."');
    scene.actions([
      { label: 'Leave', goto: ['bdsm_mansion', 'start'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterOffice(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bdsm_mansion', 'office');
  qspCall(s, 'stat', '');
  if (((s as any).week ?? 0) === 2  ||  ((s as any).week ?? 0) === 4) {
    scene.img('images/locations/city/suburb/bdsm_club/anna.jpg');
    scene.text('You enter the club and Anna is sitting at her desk overseeing admissions.');
  } else {
    scene.img('images/locations/city/suburb/bdsm_club/1_1.jpg');
    scene.text('You enter the club and Mistress Elektra is sitting at her desk overseeing admissions.');
  }
  scene.actions([
    { label: 'Return to dressing room', goto: ['bdsm_dressing', ''] },
    { label: 'Pay to extend your membership and return to the dressing room [+$func(\'money\', \'get_cost_string\', 10000)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 10000) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      ((s as any).bdsmclub ?? {})['payday'] = ((s as any).daystart ?? 0);
      ((s as any).bdsmclub ?? {})['training_daystart'] = ((s as any).daystart ?? 0);
      qspCall(s, 'money', 'pay', 10000);
      scene.actions([{ label: 'Continue', goto: ['bdsm_dressing', ''] }]);
    }
  } },
  ]);
  scene.build();
}

function enterReception(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bdsm_mansion', 'reception');
  qspCall(s, 'stat', '');
  if (((s as any).week ?? 0) === 2  ||  ((s as any).week ?? 0) === 4) {
    scene.img('images/locations/city/suburb/bdsm_club/anna.jpg');
    scene.text('You go to the reception, Anna is sitting at her desk filling paperwork.');
  } else {
    scene.img('images/locations/city/suburb/bdsm_club/1_1.jpg');
    scene.text('You go to the reception, Mistress Elektra is sitting at her desk looking a little bored.');
  }
  scene.actions([
    { label: 'Go to the Foyer', goto: ['bdsm_hallway', 'foyer'] },
    { label: 'Go to the garage', goto: ['bdsm_garden', 'garage'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'taxi':
      enterTaxi(s, scene);
      break;
    case 'start':
      enterStart(s, scene);
      break;
    case 'intro':
      enterIntro(s, scene);
      break;
    case 'office':
      enterOffice(s, scene);
      break;
    case 'reception':
      enterReception(s, scene);
      break;
    default:
      enterTaxi(s, scene);
      break;
  }
}

export const bdsm_mansion: LocationDef = {
  name: 'bdsm_mansion',
  title: '(unavailable until subscription is paid)',
  region: 'other',
  locationType: 'public_outdoors',
  enter: enter,
};
