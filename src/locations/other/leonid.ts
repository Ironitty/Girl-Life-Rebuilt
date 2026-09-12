import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A160');
  (s as any).lustPool = 100;
  if (((s as any).leonidInFavour ?? 0) < -5) {
  } else {
    if (((s as any).leonidInFavour ?? 0) >= -5  &&  ((s as any).leonidInFavour ?? 0) <= 5) {
    } else {
      if (((s as any).leonidInFavour ?? 0) > 5) {
      }
    }
  }
  scene.build();
}

function enterFirstTime(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).leonidSlave = 1;
  (s as any).leonidInFavour = 0;
  qspCall(s, 'jobs', 'set_employed', 'pav_leonid_slave');
  // TODO-QSP: gs 'jobs', 'book_slot', 'pav_leonid_slave', daystart + 1, 0
  ((s as any).mc_inventory ?? {})['painkillers'] = ((s as any).painkiller_bak ?? 0);
  ((s as any).mc_inventory ?? {})['equipped_condoms'] = ((s as any).prezik_bak ?? 0);
  ((s as any).mc_inventory ?? {})['vitamins'] = ((s as any).vitamin_bak ?? 0);
  ((s as any).mc_inventory ?? {})['cosmetics'] = ((s as any).kosmetica_bak ?? 0);
  ((s as any).mc_inventory ?? {})['lipbalm'] = ((s as any).lipbalm_bak ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/leonid/office.jpg');
  // TODO-QSP: dynamic text: You are in the office. At the desk is a label which reads "<<$bName>> <<$bSurnam...
  scene.text(`You are in the office. At the desk is a label which reads "${((s as any).bName ?? 0)} ${((s as any).bSurname ?? 0)}, lawyer."`);
  // TODO-QSP: dynamic text: <<$bName>> orders you to kneel in front of his desk.
  scene.text(`${((s as any).bName ?? 0)} orders you to kneel in front of his desk.`);
  // TODO-QSP: dynamic text: "So <<$pcs_firstname>>, I have taken you out of that hole. Do you already see wh...
  scene.text(`"So ${((s as any).pcs_firstname ?? 0)}, I have taken you out of that hole. Do you already see why?"`);
  // TODO-QSP: dynamic text: "I'm not sure Mister <<$bSurname>>"
  scene.text(`"I'm not sure Mister ${((s as any).bSurname ?? 0)}"`);
  scene.text('"Then let me explain. I love my wife, but I have certain needs. I have neglected myself for a long time now, and things got even worse. When I got the opportunity, I got in touch with the \'Haulers\'. You know them, those are the people that abducted you and made you a what you are now."');
  scene.text('"What? What do you mean by \'what am I now?\'"');
  scene.text('"A slave. My slave."');
  scene.text('"How do you imagine this? You\'ll keep me locked in this room or what?"');
  // TODO-QSP: dynamic text: "No, of course not <<$pcs_firstname>>. I'm not a monster. I just want a tool to ...
  scene.text(`"No, of course not ${((s as any).pcs_firstname ?? 0)}. I'm not a monster. I just want a tool to ventilate my urges. That tool is you."`);
  scene.text('"What do you mean?"');
  scene.text('"As beautiful you are so slow your thinking is. I will do to you whatever I want to. And it does not matter if you agree or not, you are my slave after all."');
  scene.text('"If you won\'t keep me locked how will you prevent me from running to the police and telling them everything?"');
  scene.text('');
  scene.text('He slaps your face.');
  scene.text('');
  scene.text('"Do you think I am stupid? The authorities are under my grasp. I own them. Do it and nobody will see you ever again."');
  scene.text('You get up back to your knees.');
  // TODO-QSP: dynamic text: "All right Mister <<$bSurname>>, I've got the idea. I promise to keep quiet and ...
  scene.text(`"All right Mister ${((s as any).bSurname ?? 0)}, I've got the idea. I promise to keep quiet and be your… slave."`);
  scene.text('"Very well. I will call you if I require your presence. Until then you are free to go."');
  if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
    // TODO-QSP: dynamic text: "But Mister <<$bSurname>>, what do I tell to my <<$npc_nickname['A29']>>? How do...
    scene.text(`"But Mister ${((s as any).bSurname ?? 0)}, what do I tell to my ${((s as any).npc_nickname ?? 0)?.['A29']}? How do I explain my absence from the school and everything?"`);
    // TODO-QSP: dynamic text: "Do not care about the school. I will take care of it. As for your <<$npc_nickna...
    scene.text(`"Do not care about the school. I will take care of it. As for your ${((s as any).npc_nickname ?? 0)?.['A29']}, if she asks, tell her you ran from home to a friend but reconsidered and went back."`);
    // TODO-QSP: dynamic text: "Yes Mister <<$bSurname>>."
    scene.text(`"Yes Mister ${((s as any).bSurname ?? 0)}."`);
    ((s as any).gschoolVars ?? {})['absence_count'] = 0;
    (s as any).abductionReturned = 2;
  }
  scene.text('He throws you your clothes which he must have got when he bought you, "Get dressed and leave."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Do as he says', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'outfit', 'wear_last_worn');
    qspCall(s, 'stat', '');
    if (((s as any).bagtaken ?? 0) === 1) {
      (s as any).bag = 1;
      (s as any).bagtaken = 0;
    }
    scene.img('images/characters/pavlovsk/resident/leonid/office.jpg');
    scene.text('You quickly put your clothes on, surprised to find they are clean and fresh.');
    scene.actions([
      { label: 'Leave', goto: ['pav_commercial_offices', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterHall(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  scene.img('images/characters/pavlovsk/resident/leonid/officehall.jpg');
  // TODO-QSP: dynamic text: You are in the hallway leading to several offices. One of the doors has a doorsi...
  scene.text(`You are in the hallway leading to several offices. One of the doors has a doorsign <a href="exec:gt 'leonid', 'office'">${((s as any).bName ?? 0)} ${((s as any).bSurname ?? 0)}, lawyer.</a>`);
  qspCall(s, 'stat', '');
  (s as any).leoHorny = Math.floor(Math.random() * 21) + 0;
  (s as any).leoStress = Math.floor(Math.random() * 31) + 0;
  (s as any).leoCoffee = Math.floor(Math.random() * 21) + 80;
  (s as any).leoComfort = Math.floor(Math.random() * 31) + 0;
  (s as any).paperwork = Math.floor(Math.random() * 21) + 40;
  // TODO-QSP: end
  scene.actions([
    { label: 'Get back', goto: ['pav_commercial_offices', ''] },
  ]);
  scene.build();
}

function enterOffice(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  if ((((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 10)  &&  ((s as any).leonidSecretary ?? 0) === 1  &&  ((s as any).week ?? 0) <= 5) {
    if (((s as any).POffice ?? 0) === 1) {
      scene.img('images/characters/pavlovsk/resident/leonid/office.jpg');
      // TODO-QSP: dynamic text: You are in the office of <<$bName>> <<$bSurname>>, working as his secretary. The...
      scene.text(`You are in the office of ${((s as any).bName ?? 0)} ${((s as any).bSurname ?? 0)}, working as his secretary. There are three other doors inside the office, one leading to a small <a href="exec:gt 'leonid', 'officeKitchen'">kitchen</a>, second leading to a conference room and third leading to a <a href="exec:gt 'leonid', 'toilet'">toilet</a>.`);
      (s as any).atWork = 1;
      scene.actions([{ label: 'Continue', goto: ['leonid', 'secretaryGate'] }]);
    } else {
      scene.text('You need to be dressed as a secretary.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      qspCall(s, 'outfit', 'wear_last_worn');
    }
  }, goto: ['leonid', 'hall'] },
      ]);
    }
  } else {
    if ((((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) < 20)  &&  ((s as any).leonidSecretary ?? 0) === 1  &&  ((s as any).week ?? 0) <= 5  &&  ((s as any).atWork ?? 0) === 1) {
      scene.actions([{ label: 'Continue', goto: ['leonid', 'secretaryGate'] }]);
    } else {
      if ((((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) < 19)  &&  ((s as any).leonidVisit ?? 0) === 0  &&  ((s as any).week ?? 0) < 6) {
        scene.img('images/characters/pavlovsk/resident/leonid/office.jpg');
        // TODO-QSP: dynamic text: You are in the office of <<$bName>> <<$bSurname>>. There are three other doors i...
        scene.text(`You are in the office of ${((s as any).bName ?? 0)} ${((s as any).bSurname ?? 0)}. There are three other doors inside the office, one leading to a small <a href="exec:gt 'leonid', 'officeKitchen'">kitchen</a>, second leading to a conference room and third leading to a <a href="exec:gt 'leonid', 'toilet'">toilet</a>.`);
        // TODO-QSP: dynamic text: <a href="exec:gt 'leonid', 'officeLeonidGate'"><<$bName>> <<$bSurname>></a> is s...
        scene.text(`<a href="exec:gt 'leonid', 'officeLeonidGate'">${((s as any).bName ?? 0)} ${((s as any).bSurname ?? 0)}</a> is sitting behind his desk, working.`);
        if (((s as any).slaveEventCount ?? 0) > 0) {
          scene.text('In the middle of the bookcase, there are hidden doors to a <a href="exec:gt \'leonid\', \'secretRoom\'">bondage rooms</a>.');
        }
      } else {
        if ((((s as any).hour ?? 0) >= 19  &&  ((s as any).hour ?? 0) < 22)  &&  ((s as any).leonidVisit ?? 0) === 1) {
          scene.img('images/characters/pavlovsk/resident/leonid/office.jpg');
          // TODO-QSP: dynamic text: You are in the office of <<$bName>> <<$bSurname>>. There are three other doors i...
          scene.text(`You are in the office of ${((s as any).bName ?? 0)} ${((s as any).bSurname ?? 0)}. There are three other doors inside the office, one leading to a small <a href="exec:gt 'leonid', 'officeKitchen'">kitchen</a>, second leading to a conference room and third leading to a <a href="exec:gt 'leonid', 'toilet'">toilet</a>.`);
          // TODO-QSP: dynamic text: <a href="exec:gt 'leonid', 'officeLeonidGate'"><<$bName>> <<$bSurname>></a> is s...
          scene.text(`<a href="exec:gt 'leonid', 'officeLeonidGate'">${((s as any).bName ?? 0)} ${((s as any).bSurname ?? 0)}</a> is sitting behind his desk, waiting for you to come.`);
          if (((s as any).slaveEventCount ?? 0) > 0) {
            scene.text('In the middle of the bookcase, there are hidden doors to a <a href="exec:gt \'leonid\', \'secretRoom\'">bondage room</a>.');
          }
        } else {
          scene.img('images/characters/pavlovsk/resident/leonid/officehall.jpg');
          scene.text('The office is locked, you cannot enter. The <a href="exec:gt \'leonid\', \'toilet\'">toilet</a> is still open.');
        }
      }
    }
  }
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    scene.text('<b>You are naked.</b>');
    (s as any).mult = 3;
    scene.text('<b>You need to get dressed in order to leave.</b>');
  } else {
    scene.actions([
      { label: 'Get back', goto: ['leonid', 'hall'] },
    ]);
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterSecretaryGate(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0)  >= 19) {
    scene.actions([{ label: 'Continue', goto: ['leonid', 'secretaryEndWorkday'] }]);
  }
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    scene.text('<b>You are naked.</b>');
    scene.img('images/characters/pavlovsk/resident/leonid/secretarynaked.jpg');
    (s as any).mult = 3;
  } else {
    if (((s as any).PCloStyle2 ?? 0) !== 5) {
      scene.actions([{ label: 'Continue', goto: ['leonid', 'toilet'] }]);
    } else {
      if ((!((s as any).PCloBimbo ?? 0))) {
        scene.text('<b>You are dressed as a secretary.</b>');
        scene.img('images/characters/pavlovsk/resident/leonid/secretarynormal.jpg');
        (s as any).mult = 1;
      } else {
        scene.text('<b>You are dressed as a naughty secretary.</b>');
        scene.img('images/characters/pavlovsk/resident/leonid/secretarysexy.jpg');
        (s as any).mult = 2;
      }
    }
  }
  // TODO-QSP: dynamic text: You are in the office of <<$bName>> <<$bSurname>>. There are three other doors i...
  scene.text(`You are in the office of ${((s as any).bName ?? 0)} ${((s as any).bSurname ?? 0)}. There are three other doors inside the office, one leading to a small <a href="exec:gt 'leonid', 'officeKitchen'">kitchen</a>, second leading to a conference room and third leading to a <a href="exec:gt 'leonid', 'toilet'">toilet</a>.`);
  // TODO-QSP: dynamic text: <a href="exec:gt 'leonid', 'officeLeonidGate'"><<$bName>> <<$bSurname>></a> is s...
  scene.text(`<a href="exec:gt 'leonid', 'officeLeonidGate'">${((s as any).bName ?? 0)} ${((s as any).bSurname ?? 0)}</a> is sitting behind his desk, working.`);
  if (((s as any).leoHorny ?? 0) < 0) {
    (s as any).leoHorny = 0;
  }
  if (((s as any).leoHorny ?? 0) > 100) {
    (s as any).leoHorny = 100;
  }
  if (((s as any).leoStress ?? 0) < 0) {
    (s as any).leoStress = 0;
  }
  if (((s as any).leoStress ?? 0) > 100) {
    (s as any).leoStress = 100;
  }
  if (((s as any).leoCoffee ?? 0) < 0) {
    (s as any).leoCoffee = 0;
  }
  if (((s as any).leoCoffee ?? 0) > 100) {
    (s as any).leoCoffee = 100;
  }
  if (((s as any).leoComfort ?? 0) < 0) {
    (s as any).leoComfort = 0;
  }
  if (((s as any).leoComfort ?? 0) > 100) {
    (s as any).leoComfort = 100;
  }
  if (((s as any).paperwork ?? 0) < 0) {
    (s as any).paperwork = 0;
  }
  if (((s as any).paperwork ?? 0) > 100) {
    (s as any).paperwork = 100;
  }
  (s as any).punishBuildup = (40 * ((s as any).leoHorny ?? 0) + 40 * ((s as any).leoStress ?? 0) + 30 * ((s as any).leoCoffee ?? 0) + 30 * ((s as any).leoComfort ?? 0)) / 100;
  if (((s as any).punishBuildup ?? 0) >= 100) {
    scene.actions([
      { label: 'Be approached', goto: ['leonid', 'doPunish'] },
    ]);
  } else {
    if (((s as any).paperwork ?? 0) > 0) {
      scene.actions([
        { label: 'Do paperwork', goto: ['leonid', 'doPaperwork'] },
      ]);
    }
    scene.actions([
      { label: 'Be lazy', goto: ['leonid', 'doLazy'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSecretaryEndWorkday(s: GameState, scene: SceneBuilder): void {
  (s as any).atWork = 0;
  (s as any).workQuality = ((s as any).paperwork ?? 0) + (((s as any).punishBuildup ?? 0) / 4);
  if (((s as any).workQuality ?? 0) < 10) {
    (s as any).workPayment = 1000;
  } else {
    if (((s as any).workQuality ?? 0) < 40) {
      (s as any).workPayment = 500;
    } else {
      if (((s as any).workQuality ?? 0) < 60) {
        (s as any).workPayment = 250;
      } else {
        (s as any).workPayment = 1;
      }
    }
  }
  // TODO-QSP: dynamic text: Your workday is over. <<$bName>> is packing up his things and prepares to go hom...
  scene.text(`Your workday is over. ${((s as any).bName ?? 0)} is packing up his things and prepares to go home.`);
  // TODO-QSP: dynamic text: <<$bName>>: <<$pcs_firstname>>, my <<$slaveTitle>> secretary. Today you did a <<...
  scene.text(`${((s as any).bName ?? 0)}: ${((s as any).pcs_firstname ?? 0)}, my ${((s as any).slaveTitle ?? 0)} secretary. Today you did a ${((s as any).workQualityText ?? 0)} job.`);
  // TODO-QSP: dynamic text: He hands you '+workPayment+' RUB and leaves.
  scene.text('He hands you \'+workPayment+\' RUB and leaves.');
  scene.text('');
  // TODO-QSP: dynamic text: Today you've done your duties on '+(100 - workQuality)+' %.
  scene.text('Today you\'ve done your duties on \'+(100 - workQuality)+\' %.');
  qspCall(s, 'money', 'earn', ((s as any).workPayment ?? 0));
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['leonid', 'hall'] },
  ]);
  scene.build();
}

function enterDoPunish(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: <<$pcs_firstname>>, you are not doing your job as you should. I think it is time...
  scene.text(`${((s as any).pcs_firstname ?? 0)}, you are not doing your job as you should. I think it is time to remind you of your actual status, ${((s as any).slaveTitle ?? 0)}!`);
  (s as any).leonidInFavour = ((s as any).leonidInFavour ?? 0) - (1);
  // TODO-QSP: end
  scene.actions([
    { label: 'Yes, master <<$bSurname>>.', goto: ['leonid', 'bdsmGate'] },
  ]);
  scene.build();
}

function enterDoPaperwork(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  (s as any).leoHorny = ((s as any).leoHorny ?? 0) + ((Math.floor(Math.random() * (20 * mult - 5 * mult + 1)) + (5 * mult)));
  (s as any).leoStress = ((s as any).leoStress ?? 0) + (0);
  (s as any).leoCoffee = ((s as any).leoCoffee ?? 0) + (0);
  (s as any).leoComfort = ((s as any).leoComfort ?? 0) + (0);
  (s as any).donePaperwork = 0;
  (s as any).paperwork = ((s as any).paperwork ?? 0) - (((s as any).donePaperwork ?? 0));
  scene.img('images/characters/pavlovsk/resident/leonid/paperwork\'+rand(1, 5)+\'.jpg');
  scene.text('You manage to get part of the workload to order, copying, filing and archiving.');
  scene.text('');
  // TODO-QSP: 'Paperwork has diminished by '+donePaperwork
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['leonid', 'secretaryGate'] },
  ]);
  scene.build();
}

function enterDoLazy(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  (s as any).leoHorny = ((s as any).leoHorny ?? 0) + ((Math.floor(Math.random() * (20 * mult - 5 * mult + 1)) + (5 * mult)));
  (s as any).leoStress = ((s as any).leoStress ?? 0) + (0);
  (s as any).leoCoffee = ((s as any).leoCoffee ?? 0) + (0);
  (s as any).leoComfort = ((s as any).leoComfort ?? 0) + (0);
  scene.img('images/characters/pavlovsk/resident/leonid/lazy\'+rand(1, 5)+\'.jpg');
  scene.text('You spend your working time polishing your nails and all the stuff everyone actually thinks secretaries do.');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['leonid', 'secretaryGate'] },
  ]);
  scene.build();
}

function enterOfficeKitchen(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  scene.img('images/characters/pavlovsk/resident/leonid/kitchen.jpg');
  scene.text('Small office kitchen, equipped with all that is needed for a regular working day.');
  if (((s as any).taskCoffee ?? 0) === 1  ||  ((s as any).leonidSecretary ?? 0) === 1) {
    scene.text('You can use the coffee maker to <a href="exec:gt \'leonid\', \'officeKitchenMakeCoffe\'">prepare a coffee</a>.');
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get back to office', goto: ['leonid', 'office'] },
  ]);
  scene.build();
}

function enterOfficeKitchenMakeCoffe(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  scene.img('images/characters/pavlovsk/resident/leonid/coffeemaker.jpg');
  scene.text('You\'ve put some coffee in the maker, poured water in the tank and put it on.');
  scene.text('After few minutes the drink is ready.');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['leonid', 'officeKitchenBringCoffee'] },
  ]);
  scene.build();
}

function enterOfficeKitchenBringCoffee(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  // TODO-QSP: dynamic text: You are about to bring coffee to mister <<$bSurname>>. You decide to:
  scene.text(`You are about to bring coffee to mister ${((s as any).bSurname ?? 0)}. You decide to:`);
  (s as any).taskCoffee = 0;
  qspCall(s, 'stat', '');
  if (((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) < 18) {
    scene.actions([
      { label: 'Strip and bring it naked', goto: ['leonid', 'officeKitchenBringCoffeeNaked'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Just bring it, nothing special', goto: ['leonid', 'officeKitchenBringCoffeeNormal'] },
  ]);
  scene.build();
}

function enterOfficeKitchenBringCoffeeNaked(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'outfit', 'strip_all');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/leonid/bringcoffeenaked.jpg');
  // TODO-QSP: dynamic text: You strip down even your panties and take the coffee. Slowly you walk through th...
  scene.text(`You strip down even your panties and take the coffee. Slowly you walk through the door inside ${((s as any).bName ?? 0)}'s office, trying to look as arousing as possible.`);
  (s as any).fuckCh = (Math.floor(Math.random() * 100) + 1) + ((s as any).leoHorny ?? 0);
  if (((s as any).fuckCh ?? 0) >= 70) {
    // TODO-QSP: dynamic text: <<$bName>> looks up to you and sees that you are naked.
    scene.text(`${((s as any).bName ?? 0)} looks up to you and sees that you are naked.`);
    scene.text('There is a flash of surprise in his eyes, but you can see he is delighted by this pleasant improvement of his otherwise regular working day.');
    scene.text('You place the cup on his desk, showing him even more of your beautiful breasts, and giving him a teasing look.');
    scene.text('He reaches for your tits and starts to enjoy himself.');
    scene.actions([
      { label: 'Give in to him', goto: ['leonid', 'officeFuck'] },
    ]);
  } else {
    // TODO-QSP: dynamic text: <<$bName>> looks up to you and sees that you are naked.
    scene.text(`${((s as any).bName ?? 0)} looks up to you and sees that you are naked.`);
    scene.text('He\'s sliding his eyes all over your body but soon he gets back to his paperwork.');
    scene.text('You put the cup on his desk and trying to tease him you wait a few seconds, but he\'s still working, paying you no attention.');
    scene.actions([
      { label: 'Give up and get back', goto: ['leonid', 'office'] },
    ]);
  }
  (s as any).leoCoffee = ((s as any).leoCoffee ?? 0) - (50);
  (s as any).leonidInFavour = ((s as any).leonidInFavour ?? 0) + (1);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterOfficeKitchenBringCoffeeNormal(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.img('images/characters/pavlovsk/resident/leonid/bringcoffee.jpg');
  // TODO-QSP: dynamic text: You take the cup and bring it to his desk, putting next to the papers <<$bName>>...
  scene.text(`You take the cup and bring it to his desk, putting next to the papers ${((s as any).bName ?? 0)} is working on.`);
  scene.text('He briefly looks on the cup and frowns.');
  scene.text('You take it as a sign of approval.');
  (s as any).leoCoffee = ((s as any).leoCoffee ?? 0) - (50);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['leonid', 'office'] },
  ]);
  scene.build();
}

function enterOfficeFuck(s: GameState, scene: SceneBuilder): void {
  (s as any).sexType = Math.floor(Math.random() * 2) + 1;
  if (((s as any).sexType ?? 0) === 1) {
    scene.img('images/characters/pavlovsk/resident/leonid/sex/pussy\'+rand(1, 5)+\'.mp4');
    // TODO-QSP: dynamic text: <<$bName>> bends you over his desk, pushing the paperwork away.
    scene.text(`${((s as any).bName ?? 0)} bends you over his desk, pushing the paperwork away.`);
    // TODO-QSP: dynamic text: You angle your ass for better access, just like his true <<$slaveTitle>>.
    scene.text(`You angle your ass for better access, just like his true ${((s as any).slaveTitle ?? 0)}.`);
    // TODO-QSP: dynamic text: <<$bName>> takes his hard cock out of his pants and pushes it into your already ...
    scene.text(`${((s as any).bName ?? 0)} takes his hard cock out of his pants and pushes it into your already wet pussy.`);
    qspCall(s, 'arousal', 'vaginal', 45, 'sub');
    scene.actions([
      { label: 'Continue', goto: ['leonid', 'cumPussy'] },
    ]);
  } else {
    scene.img('images/characters/pavlovsk/resident/leonid/sex/anal\'+rand(1, 2)+\'.mp4');
    // TODO-QSP: dynamic text: <<$bName>> bends you over his desk, pushing the paperwork away.
    scene.text(`${((s as any).bName ?? 0)} bends you over his desk, pushing the paperwork away.`);
    // TODO-QSP: dynamic text: You angle your ass for better access, just like his true <<$slaveTitle>>.
    scene.text(`You angle your ass for better access, just like his true ${((s as any).slaveTitle ?? 0)}.`);
    // TODO-QSP: dynamic text: <<$bName>> takes his hard cock out of his pants, spits some of his own saliva on...
    scene.text(`${((s as any).bName ?? 0)} takes his hard cock out of his pants, spits some of his own saliva on it and pushes it into your dry anus.`);
    qspCall(s, 'arousal', 'anal', 45, 'sub');
    scene.actions([
      { label: 'Continue', goto: ['leonid', 'cumAnal'] },
    ]);
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterCumAnal(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  (s as any).leoHorny = ((s as any).leoHorny ?? 0) - (50);
  qspCall(s, 'cum_call', 'anus', 'A160', 1);
  qspCall(s, 'arousal', 'end');
  scene.img('images/characters/pavlovsk/resident/leonid/sex/cumanal\'+rand(1, 2)+\'.mp4');
  // TODO-QSP: dynamic text: <<$bName>> cums deep in your intestines.
  scene.text(`${((s as any).bName ?? 0)} cums deep in your intestines.`);
  if (qspFunc(s, 'money', 'can_afford', 2000) === 0  &&  (!((s as any).leonidSecretary ?? 0))) {
    scene.actions([
      { label: 'Mister <<$bSurname>>, may I ask you something?', goto: ['leonid', 'askForJob'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Thank him and leave', goto: ['leonid', 'office'] },
  ]);
  scene.build();
}

function enterCumPussy(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  (s as any).leoHorny = ((s as any).leoHorny ?? 0) - (50);
  qspCall(s, 'cum_call', '', '', 'A160', 1);
  qspCall(s, 'arousal', 'end');
  if (qspFunc(s, 'money', 'can_afford', 2000) === 0  &&  (!((s as any).leonidSecretary ?? 0))) {
    scene.actions([
      { label: 'Mister <<$bSurname>>, may I ask you something?', goto: ['leonid', 'askForJob'] },
    ]);
  }
  scene.img('images/characters/pavlovsk/resident/leonid/sex/cumpussy\'+rand(1, 1)+\'.mp4');
  // TODO-QSP: dynamic text: <<$bName>> cums deep in your vagina.
  scene.text(`${((s as any).bName ?? 0)} cums deep in your vagina.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Thank him and leave', goto: ['leonid', 'office'] },
  ]);
  scene.build();
}

function enterAskForJob(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  scene.text('Sir you know… I… I need money. So I thought, maybe, maybe I could work for you…');
  scene.text('You don\'t want me whoring to random men, do you?');
  scene.text('');
  // TODO-QSP: dynamic text: Hmm, <<$pcs_firstname>>, I was actually already thinking about hiring a secretar...
  scene.text(`Hmm, ${((s as any).pcs_firstname ?? 0)}, I was actually already thinking about hiring a secretary.`);
  scene.text('With you taking such place, my workdays could be much more interesting…');
  // TODO-QSP: end
  scene.actions([
    { label: 'Accept', goto: ['leonid', 'askForJobYes'] },
    { label: 'On second thought… I\'m not qualified enough.', goto: ['leonid', 'askForJobNo'] },
  ]);
  scene.build();
}

function enterAskForJobYes(s: GameState, scene: SceneBuilder): void {
  scene.text('Thank you master, I would love to be your secretary.');
  scene.text('');
  scene.text('Good.');
  scene.text('Come next working day between 9 and 10.');
  scene.text('Be sure to dress as befits to your new role.');
  // TODO-QSP: dynamic text: He takes <<$func('money', 'string_profit', 5000)>> and hands them to you. Here, ...
  scene.text(`He takes ${qspFunc(s, 'money', 'string_profit', 5000)} and hands them to you. Here, buy some office clothes, I need you to at least look the part.`);
  qspCall(s, 'money', 'earn', 5000);
  (s as any).leonidSecretary = 1;
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['leonid', 'office'] },
  ]);
  scene.build();
}

function enterAskForJobNo(s: GameState, scene: SceneBuilder): void {
  scene.text('On second thought… I\'m not qualified enough');
  scene.text('');
  // TODO-QSP: dynamic text: <<$pcs_firstname>>, don't play with me.
  scene.text(`${((s as any).pcs_firstname ?? 0)}, don't play with me.`);
  scene.text('You are still my slave and I think you need to be reminded of that!');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['leonid', 'officeLeonidPunishmentGate'] },
  ]);
  scene.build();
}

function enterSecretRoom(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).slaveEventCount ?? 0))) {
    scene.img('images/characters/pavlovsk/resident/leonid/sex/secretdoor.jpg');
    // TODO-QSP: dynamic text: <<$bName>> opens up a secret door behind a bookcase. It leads to a several other...
    scene.text(`${((s as any).bName ?? 0)} opens up a secret door behind a bookcase. It leads to a several other rooms - one has a large bed with various straps and cuffs, other contains various bondage equipment.`);
    // TODO-QSP: dynamic text: Come, <<$slaveTitle>>, come to my kingdom.
    scene.text(`Come, ${((s as any).slaveTitle ?? 0)}, come to my kingdom.`);
    scene.text('In fear you step through the secret door and look around on all the stuff that is prepared for you.');
    // TODO-QSP: dynamic text: <<$bName>> closes the door behind you and grabs you by the arm.
    scene.text(`${((s as any).bName ?? 0)} closes the door behind you and grabs you by the arm.`);
    (s as any).slaveEventCount = ((s as any).slaveEventCount ?? 0) + (1);
    (s as any).leonidVisit = 0;
    if (((s as any).leonidVisitMissed ?? 0) > 0) {
      (s as any).leonidVisitMissed = ((s as any).leonidVisitMissed ?? 0) - (1);
    }
    // TODO-QSP: gs 'jobs', 'book_slot', 'pav_leonid_slave', daystart + rand(1, 5), 0
    scene.actions([
      { label: 'Continue', goto: ['leonid', 'bdsmGate'] },
    ]);
  } else {
    if (((s as any).slaveEventCount ?? 0) > 0  &&  ((s as any).leonidVisit ?? 0) === 1  &&  ((s as any).leonidVisitMissed ?? 0) <= 3) {
      (s as any).leoHorny = 0;
      (s as any).slaveEventCount = ((s as any).slaveEventCount ?? 0) + (1);
      (s as any).leonidVisit = 0;
      if (((s as any).leonidVisitMissed ?? 0) > 0) {
        (s as any).leonidVisitMissed = ((s as any).leonidVisitMissed ?? 0) - (1);
      }
      // TODO-QSP: gs 'jobs', 'book_slot', 'pav_leonid_slave', daystart + rand(1, 5), 0
      qspCall(s, 'stat', '');
      scene.img('images/characters/pavlovsk/resident/leonid/sex/kneeling1.jpg');
      // TODO-QSP: dynamic text: You go in the secret room, strip down and equip your collar. You kneel down expe...
      scene.text(`You go in the secret room, strip down and equip your collar. You kneel down expecting ${((s as any).bName ?? 0)} to come, ready to serve him.`);
      scene.actions([
        { label: 'Continue', goto: ['leonid', 'bdsmGate'] },
      ]);
    } else {
      if (((s as any).leonidVisitMissed ?? 0) > 3) {
        qspCall(s, 'leonid', 'sold');
      } else {
        scene.img('images/characters/pavlovsk/resident/leonid/sex/secretroom.jpg');
        scene.text('You are in the secret room, full of bondage equipment.');
        scene.actions([
          { label: 'Get back', goto: ['leonid', 'office'] },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBdsmGate(s: GameState, scene: SceneBuilder): void {
  if (((s as any).leoHorny ?? 0) < 30) {
    (s as any).actionType = Math.floor(Math.random() * 2) + 1;
  } else {
    if (((s as any).leoHorny ?? 0) >= 30) {
      (s as any).actionType = Math.floor(Math.random() * 6) + 3;
    }
  }
  if (((s as any).actionType ?? 0) === 1) {
    scene.actions([{ label: 'Continue', goto: ['leonid', 'bdsmFuckVaginal'] }]);
  } else {
    if (((s as any).actionType ?? 0) === 2) {
      scene.actions([{ label: 'Continue', goto: ['leonid', 'bdsmFuckAnal'] }]);
    } else {
      if (((s as any).actionType ?? 0) === 3  &&  ((s as any).actionTypeRecent ?? 0) !== 3) {
        scene.actions([{ label: 'Continue', goto: ['leonid', 'bdsmHorse'] }]);
      } else {
        if (((s as any).actionType ?? 0) === 4  &&  ((s as any).actionTypeRecent ?? 0) !== 4) {
          scene.actions([{ label: 'Continue', goto: ['leonid', 'bdsmWhip'] }]);
        } else {
          if (((s as any).actionType ?? 0) === 5  &&  ((s as any).actionTypeRecent ?? 0) !== 5) {
            scene.actions([{ label: 'Continue', goto: ['leonid', 'bdsmDildo'] }]);
          } else {
            if (((s as any).actionType ?? 0) === 6  &&  ((s as any).actionTypeRecent ?? 0) !== 6) {
              scene.actions([{ label: 'Continue', goto: ['leonid', 'bdsmMachine'] }]);
            } else {
              if (((s as any).actionType ?? 0) === 7  &&  ((s as any).actionTypeRecent ?? 0) !== 7) {
                scene.actions([{ label: 'Continue', goto: ['leonid', 'bdsmDeepthroat'] }]);
              } else {
                if (((s as any).actionType ?? 0) === 8  &&  ((s as any).actionTypeRecent ?? 0) !== 8) {
                  scene.actions([{ label: 'Continue', goto: ['leonid', 'bdsmForcedOrgasm'] }]);
                } else {
                  scene.actions([{ label: 'Continue', goto: ['leonid', 'bdsmGate'] }]);
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

function enterBdsmFuckVaginal(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/resident/leonid/sex/pussybound\'+rand(1, 5)+\'.mp4');
  // TODO-QSP: dynamic text: <<$bName>> ties you up and positions you as he will.
  scene.text(`${((s as any).bName ?? 0)} ties you up and positions you as he will.`);
  scene.text('Then he takes his hard cock and shoves it into your unprepared pussy.');
  qspCall(s, 'arousal', 'vaginal', 60, 'sub', 'rough', 'maso', 'bound');
  qspCall(s, 'pain', '', 2, 'vaginal', 'stretch');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['leonid', 'cumPussy'] },
  ]);
  scene.build();
}

function enterBdsmFuckAnal(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/resident/leonid/sex/analbound\'+rand(1, 5)+\'.mp4');
  // TODO-QSP: dynamic text: <<$bName>> ties you up and positions you as he will.
  scene.text(`${((s as any).bName ?? 0)} ties you up and positions you as he will.`);
  scene.text('Then he takes his hard cock and shoves it into your unprepared anus.');
  qspCall(s, 'arousal', 'anal', 60, 'sub', 'rough', 'maso', 'bound');
  qspCall(s, 'pain', '', 2, 'asshole', 'stretch');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['leonid', 'cumAnal'] },
  ]);
  scene.build();
}

function enterBdsmHorse(s: GameState, scene: SceneBuilder): void {
  (s as any).actionTypeRecent = 3;
  (s as any).leoHorny = ((s as any).leoHorny ?? 0) - (Math.floor(Math.random() * 31) + 20);
  scene.img('images/characters/pavlovsk/resident/leonid/sex/horse\'+rand(1, 5)+\'.mp4');
  // TODO-QSP: dynamic text: <<$bName>> ties you up and leads you to a room with bondage devices.
  scene.text(`${((s as any).bName ?? 0)} ties you up and leads you to a room with bondage devices.`);
  scene.text('He decides to play with you on a wooden horse… this is going to hurt!');
  scene.text('With bound hands you are seaten on it. The top is dull but it hurts anyway - the wooden top is squeezing your labia against the crotch.');
  scene.text('As much as you try to twist and ease, it gets only worse.');
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'pain', '', 3, 'labia', 'hit');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['leonid', 'bdsmGate'] },
  ]);
  scene.build();
}

function enterBdsmWhip(s: GameState, scene: SceneBuilder): void {
  (s as any).actionTypeRecent = 4;
  (s as any).leoHorny = ((s as any).leoHorny ?? 0) - (Math.floor(Math.random() * 31) + 20);
  scene.img('images/characters/pavlovsk/resident/leonid/sex/whip\'+rand(1, 7)+\'.mp4');
  // TODO-QSP: dynamic text: <<$bName>> ties you up and leads you to a room with bondage devices.
  scene.text(`${((s as any).bName ?? 0)} ties you up and leads you to a room with bondage devices.`);
  scene.text('He suspends your hand to a hook on the ceiling, leaving you almost hanging by your hands.');
  scene.text('Then he takes a leather whip a gives you a hard whipping, targeting your sensitive areas.');
  scene.text('When he\'s done, your breast, belly, croctch and ass are red as a lobster, burning in pain.');
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'pain', '', 2, 'asscheeks', 'spank');
  qspCall(s, 'pain', '', 2, 'breasts', 'spank');
  qspCall(s, 'pain', '', 2, 'tummy', 'spank');
  qspCall(s, 'pain', '', 2, 'labia', 'spank');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['leonid', 'bdsmGate'] },
  ]);
  scene.build();
}

function enterBdsmDildo(s: GameState, scene: SceneBuilder): void {
  (s as any).actionTypeRecent = 5;
  (s as any).leoHorny = ((s as any).leoHorny ?? 0) - (Math.floor(Math.random() * 31) + 20);
  scene.img('images/characters/pavlovsk/resident/leonid/sex/dildo\'+rand(1, 4)+\'.mp4');
  // TODO-QSP: dynamic text: <<$bName>> ties you up and leads you to a room with bondage devices.
  scene.text(`${((s as any).bName ?? 0)} ties you up and leads you to a room with bondage devices.`);
  scene.text('He orders you to kneel down, sticking your ass high in the air and ties your hands and legs so you cannot move.');
  scene.text('Then he brings a large dildo and starts using it on your holes, fucking you with it furiously and relentlessly.');
  scene.text('He switches your ass and pussy as he likes, not caring about your feelings.');
  scene.text('It hurts since he hits your cervix or instestinal walls often - the only thing you are able to do is moan loud as every stroke makes you cry some more.');
  qspCall(s, 'arousal', 'vaginal_dildo', 30, 'sub', 'bound', 'rough');
  qspCall(s, 'arousal', 'anal_dildo', (-30), 'sub', 'bound', 'rough');
  qspCall(s, 'pain', '', 2, 'vaginal', 'stretch');
  qspCall(s, 'pain', '', 2, 'cervix', 'hit');
  qspCall(s, 'pain', '', 2, 'asshole', 'stretch');
  qspCall(s, 'pain', '', 2, 'tummy', 'hit');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['leonid', 'bdsmGate'] },
  ]);
  scene.build();
}

function enterBdsmMachine(s: GameState, scene: SceneBuilder): void {
  (s as any).actionTypeRecent = 6;
  (s as any).leoHorny = ((s as any).leoHorny ?? 0) - (Math.floor(Math.random() * 31) + 20);
  scene.img('images/characters/pavlovsk/resident/leonid/sex/machine\'+rand(1, 5)+\'.mp4');
  // TODO-QSP: dynamic text: <<$bName>> ties you up and leads you to a room with bondage devices.
  scene.text(`${((s as any).bName ?? 0)} ties you up and leads you to a room with bondage devices.`);
  scene.text('He orders you to kneel down into a strange device - the most visible part of it is a rod with a screw. What could be screwed on it, you wonder.');
  // TODO-QSP: dynamic text: Your question is answered shortly - <<$bName>> brings a large dildo and secures ...
  scene.text(`Your question is answered shortly - ${((s as any).bName ?? 0)} brings a large dildo and secures it on the rod.`);
  scene.text('He spats some lube on it - you are expecting to penetrate you any minute, wondering only if it will be your ass or pussy…');
  // TODO-QSP: dynamic text: <<$bName>> points it toward your pussy and turns it on, stepping away with a rem...
  scene.text(`${((s as any).bName ?? 0)} points it toward your pussy and turns it on, stepping away with a remote controller.`);
  scene.text('Being bound like that, he just plays with the remote, sometime making you scream and sometime lowering the speed to ease your sensations.');
  qspCall(s, 'arousal', 'vaginal_dildo', 30, 'sub', 'bound', 'rough');
  qspCall(s, 'pain', '', 2, 'vaginal', 'stretch');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['leonid', 'bdsmGate'] },
  ]);
  scene.build();
}

function enterBdsmDeepthroat(s: GameState, scene: SceneBuilder): void {
  (s as any).actionTypeRecent = 7;
  (s as any).leoHorny = ((s as any).leoHorny ?? 0) - (Math.floor(Math.random() * 31) + 20);
  scene.img('images/characters/pavlovsk/resident/leonid/sex/dildothroat\'+rand(1, 3)+\'.mp4');
  // TODO-QSP: dynamic text: <<$bName>> ties you up and leads you to a room with bondage devices.
  scene.text(`${((s as any).bName ?? 0)} ties you up and leads you to a room with bondage devices.`);
  scene.text('He orders you to kneel down, having your hands bound behind your back.');
  // TODO-QSP: dynamic text: <<$bName>> brings a large rubber dildo and orders you to open your mouth.
  scene.text(`${((s as any).bName ?? 0)} brings a large rubber dildo and orders you to open your mouth.`);
  scene.text('Like a slave you actually are, you comply without hesitance and open it as wide as possible.');
  scene.text('He stuffs the dildo inside it and slowly starts to fuck it, with every stroke going deeper and deeper.');
  scene.text('After few minutes the dildo is being pushed all the way inside your throat, with your own saliva and tears running down your face.');
  qspCall(s, 'arousal', 'bj', 30, 'sub', 'bound', 'deepthroat');
  qspCall(s, 'pain', '', 2, 'throat', 'stretch');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['leonid', 'bdsmGate'] },
  ]);
  scene.build();
}

function enterBdsmForcedOrgasm(s: GameState, scene: SceneBuilder): void {
  (s as any).actionTypeRecent = 8;
  (s as any).leoHorny = ((s as any).leoHorny ?? 0) - (Math.floor(Math.random() * 31) + 20);
  scene.img('images/characters/pavlovsk/resident/leonid/sex/forcedorgasm\'+rand(1, 4)+\'.mp4');
  // TODO-QSP: dynamic text: <<$bName>> ties you up and leads you to a room with bondage devices.
  scene.text(`${((s as any).bName ?? 0)} ties you up and leads you to a room with bondage devices.`);
  scene.text('He lies you down, securing your hands and legs so you cannot move and also exposing your crotch to his liking.');
  scene.text('He brings a large vibrator device and starts to massage your labia.');
  scene.text('First he uses low setting, but after a while he turns it on max and instead targets directly your clitoris.');
  scene.text('The sensation is so strong, you cannot differentiate if it hurts or if it\'s pleasurable.');
  qspCall(s, 'arousal', 'vaginal_vibe', 30, 'sub', 'rough', 'maso', 'bound');
  qspCall(s, 'pain', '', 3, 'clitoris', 'ache');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['leonid', 'bdsmGate'] },
  ]);
  scene.build();
}

function enterOfficeLeonidGate(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  scene.img('images/characters/pavlovsk/resident/leonid/leonid.jpg');
  if (((s as any).leonidVisit ?? 0) === 1) {
    // TODO-QSP: dynamic text: Hello <<$pcs_firstname>>, my <<$slaveTitle>>.
    scene.text(`Hello ${((s as any).pcs_firstname ?? 0)}, my ${((s as any).slaveTitle ?? 0)}.`);
    if ((!((s as any).slaveEventCount ?? 0))) {
      scene.actions([
        { label: 'Hello mister <<$bSurname>>, you called me?', goto: ['leonid', 'secretRoom'] },
      ]);
    } else {
      scene.actions([
        { label: 'Hello mister <<$bSurname>>, you called me?', goto: ['leonid', 'secretRoom'] },
      ]);
    }
  } else {
    if ((!((s as any).leonidVisit ?? 0))) {
      // TODO-QSP: dynamic text: What do you want <<$pcs_firstname>>? I'm working, can't you see?
      scene.text(`What do you want ${((s as any).pcs_firstname ?? 0)}? I'm working, can't you see?`);
      if (((s as any).leoComfort ?? 0) > 50) {
        scene.actions([
          { label: 'Offer him a massage', goto: ['leonid', 'massage'] },
        ]);
      }
      if (((s as any).leonidSecretary ?? 0) === 1) {
        scene.actions([
          { label: 'Get back', goto: ['leonid', 'secretaryGate'] },
        ]);
      } else {
        scene.actions([
          { label: 'Apologize and leave', goto: ['leonid', 'office'] },
        ]);
      }
      scene.actions([
        { label: 'I want to serve my master', goto: ['leonid', 'officeLeonidHasTime'] },
      ]);
    }
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterMassage(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  // TODO-QSP: dynamic text: You are about to give a massage to <<$bName>> <<$bSurname>>…
  scene.text(`You are about to give a massage to ${((s as any).bName ?? 0)} ${((s as any).bSurname ?? 0)}…`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Strip down and give erotic massage', goto: ['leonid', 'massageErotic'] },
  ]);
  scene.build();
}

function enterMassageErotic(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'arousal', 'foreplay', 30);
  (s as any).leoHorny = ((s as any).leoHorny ?? 0) + (0);
  (s as any).leoComfort = ((s as any).leoComfort ?? 0) - (0);
  scene.img('images/characters/pavlovsk/resident/leonid/massageerotic\'+rand(1, 2)+\'.mp4');
  // TODO-QSP: dynamic text: <<$bName>> lies down on a table. You strip down your clothes and give him erroti...
  scene.text(`${((s as any).bName ?? 0)} lies down on a table. You strip down your clothes and give him errotic massage using oil.`);
  scene.text('First his back, then you move to his front. He seems to enjoy it…');
  // TODO-QSP: end
  scene.actions([
    { label: 'End the massage end get back to work', goto: ['leonid', 'office'] },
    { label: 'Use your hands', goto: ['leonid', 'massageEroticHandjob'] },
  ]);
  scene.build();
}

function enterMassageEroticHandjob(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'arousal', 'hj', 5);
  scene.img('images/characters/pavlovsk/resident/leonid/sex/massageerotichand.mp4');
  // TODO-QSP: dynamic text: <<$bName>>'s member is already hard in the moment you reach for it.
  scene.text(`${((s as any).bName ?? 0)}'s member is already hard in the moment you reach for it.`);
  scene.text('Gently jerking it off he seems to be aroused even more.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish him with your hand', goto: ['leonid', 'massageEroticHandjobFinish'] },
    { label: 'Continue with mouth', goto: ['leonid', 'massageEroticBlowjob'] },
  ]);
  scene.build();
}

function enterMassageEroticHandjobFinish(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'arousal', 'hj', 15);
  qspCall(s, 'cum_call', 'hands', 'A160', 1);
  scene.img('images/characters/pavlovsk/resident/leonid/sex/massageerotichandfinish.mp4');
  scene.text('You bring him to an orgasm using your hand…');
  (s as any).leoHorny = ((s as any).leoHorny ?? 0) - (0);
  // TODO-QSP: end
  scene.actions([
    { label: 'Clean up and get back to work', goto: ['leonid', 'office'] },
  ]);
  scene.build();
}

function enterMassageEroticBlowjob(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'arousal', 'bj', 5);
  scene.img('images/characters/pavlovsk/resident/leonid/sex/massageeroticmouth\'+rand(1, 2)+\'.mp4');
  // TODO-QSP: dynamic text: His hard cock feels nice in your mouth and <<$bName>> seems to enjoy it even mor...
  scene.text(`His hard cock feels nice in your mouth and ${((s as any).bName ?? 0)} seems to enjoy it even more than just your hand…`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish him with your mouth', goto: ['leonid', 'massageEroticBlowjobFinish'] },
    { label: 'Bend over and offer your holes', goto: ['leonid', 'massageEroticFuck'] },
  ]);
  scene.build();
}

function enterMassageEroticBlowjobFinish(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'arousal', 'bj', 15);
  qspCall(s, 'cum_call', 'mouth', 'A160', 1);
  scene.img('images/characters/pavlovsk/resident/leonid/sex/massageeroticmouthfinish.mp4');
  scene.text('You bring him to an orgasm using your mouth…');
  (s as any).leoHorny = ((s as any).leoHorny ?? 0) - (0);
  // TODO-QSP: end
  scene.actions([
    { label: 'Clean up and get back to work', goto: ['leonid', 'office'] },
  ]);
  scene.build();
}

function enterMassageEroticFuck(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'arousal', 'vaginal', 10);
  scene.img('images/characters/pavlovsk/resident/leonid/sex/massageeroticfuck.mp4');
  // TODO-QSP: dynamic text: <<$bName>> does not take long, get up and sticks his hard cock inside your alrea...
  scene.text(`${((s as any).bName ?? 0)} does not take long, get up and sticks his hard cock inside your already wet pussy.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Let him finish', goto: ['leonid', 'massageEroticFuckFinish'] },
  ]);
  scene.build();
}

function enterMassageEroticFuckFinish(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'arousal', 'vaginal', 15);
  qspCall(s, 'cum_call', '', '', 'A160', 1);
  scene.img('images/characters/pavlovsk/resident/leonid/sex/massageeroticfuckfinish.mp4');
  scene.text('He fucks you until he cums. Inside…');
  (s as any).leoHorny = ((s as any).leoHorny ?? 0) - (0);
  // TODO-QSP: end
  scene.actions([
    { label: 'Clean up and get back to work', goto: ['leonid', 'office'] },
  ]);
  scene.build();
}

function enterOfficeLeonidHasTime(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  (s as any).serveType = (Math.floor(Math.random() * 50) + 1) + ((s as any).leoStress ?? 0);
  if (((s as any).serveType ?? 0) > 70) {
    // TODO-QSP: dynamic text: I said I'm working, <<$slaveTitle>>. Do you want to be punished for causing trou...
    scene.text(`I said I'm working, ${((s as any).slaveTitle ?? 0)}. Do you want to be punished for causing trouble?`);
    if (((s as any).leonidSecretary ?? 0) === 1) {
      scene.actions([
        { label: 'Get back', goto: ['leonid', 'secretaryGate'] },
      ]);
    } else {
      scene.actions([
        { label: 'Apologize and leave', goto: ['leonid', 'office'] },
      ]);
    }
    scene.actions([
      { label: 'I want to be punished', goto: ['leonid', 'officeLeonidPunishmentGate'] },
    ]);
  } else {
    qspCall(s, 'leonid', 'officeLeonidVoluntaryServeGate');
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterOfficeLeonidVoluntaryServeGate(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  (s as any).serveType = (Math.floor(Math.random() * 50) + 1) + ((s as any).leoHorny ?? 0);
  if (((s as any).serveType ?? 0) <= 70) {
    (s as any).taskCoffee = 1;
    scene.text('Go and make me a coffee.');
    scene.actions([
      { label: 'Go make it', goto: ['leonid', 'officeKitchen'] },
    ]);
  } else {
    scene.text('Then crawl under the desk and suck my dick.');
    scene.actions([
      { label: 'Do it', goto: ['leonid', 'officeLeonidSuckUnderTable'] },
    ]);
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterOfficeLeonidSuckUnderTable(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/resident/leonid/sex/suckundertable\'+rand(1, 4)+\'.mp4');
  qspCall(s, 'stat', '');
  qspCall(s, 'arousal', 'bj', 20, 'sub');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Let him cum in your mouth', goto: ['leonid', 'officeLeonidSuckUnderTable1'] },
    { label: 'Let him cum on your face', goto: ['leonid', 'officeLeonidSuckUnderTable2'] },
  ]);
  scene.build();
}

function enterOfficeLeonidSuckUnderTable1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  (s as any).leoHorny = ((s as any).leoHorny ?? 0) - (40);
  qspCall(s, 'cum_call', 'mouth', 'A160', 1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/leonid/sex/cummouth\'+rand(1, 4)+\'.mp4');
  // TODO-QSP: dynamic text: As <<$bName>> cums, you let the tip of his cock point into your mouth and catch ...
  scene.text(`As ${((s as any).bName ?? 0)} cums, you let the tip of his cock point into your mouth and catch all the sperm.`);
  scene.text('Then you stick your head up, show him your mouth full of his sperm and with smile you swallow it.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['leonid', 'office'] },
  ]);
  scene.build();
}

function enterOfficeLeonidSuckUnderTable2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  (s as any).leoHorny = ((s as any).leoHorny ?? 0) - (40);
  qspCall(s, 'cum_call', 'face', 'A160', 1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/leonid/sex/cumface\'+rand(1, 5)+\'.mp4');
  // TODO-QSP: dynamic text: As <<$bName>> cums, you let the tip of his cock point towards your face, letting...
  scene.text(`As ${((s as any).bName ?? 0)} cums, you let the tip of his cock point towards your face, letting him spray all over your face.`);
  scene.text('Then you stick your head up, showing him your face cowered in sperm.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['leonid', 'office'] },
  ]);
  scene.build();
}

function enterOfficeLeonidPunishmentGate(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  (s as any).leonidInFavour = ((s as any).leonidInFavour ?? 0) - (1);
  scene.actions([{ label: 'Continue', goto: ['leonid', 'officeLeonidPunishmentSpank'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterOfficeLeonidPunishmentSpank(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/resident/leonid/sex/spank\'+rand(1, 5)+\'.mp4');
  // TODO-QSP: dynamic text: <<$bName>> strips down your clothes and gives you a harsh spanking.
  scene.text(`${((s as any).bName ?? 0)} strips down your clothes and gives you a harsh spanking.`);
  (s as any).leoStress = ((s as any).leoStress ?? 0) - (50);
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  ((s as any).pain ?? {})['asscheeks'] = (((s as any).pain ?? {})['asscheeks'] ?? 0) + (10);
  qspCall(s, 'stat', '');
  qspCall(s, 'arousal', 'foreplay', 10, 'sub', 'maso', 'humiliation');
  if (((s as any).leonidSecretary ?? 0) === 1) {
    scene.actions([
      { label: 'Get back', goto: ['leonid', 'secretaryGate'] },
    ]);
  } else {
    scene.actions([
      { label: 'Thank you master', goto: ['leonid', 'office'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCall(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  // TODO-QSP: dynamic text: <<$pcs_firstname>>, be at '+func('time', 'get_time_string', 20, 0)+' at the offi...
  scene.text(`${((s as any).pcs_firstname ?? 0)}, be at '+func('time', 'get_time_string', 20, 0)+' at the office. Understood?`);
  (s as any).leonidVisit = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Yes mister <<$bSurname>>.', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterCallMissed(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  if (((s as any).leonidVisitMissed ?? 0) <= 2) {
    // TODO-QSP: dynamic text: Are you forgetting what you are, slave? Be at '+func('time', 'get_time_string', ...
    scene.text('Are you forgetting what you are, slave? Be at \'+func(\'time\', \'get_time_string\', 20, 0)+\' at the office and don\'t fail me again, or there will be consequences. Understood?');
  } else {
    if (((s as any).leonidVisitMissed ?? 0) >= 3) {
      // TODO-QSP: dynamic text: This is your last warning, slave. If you won't come to my office today at '+func...
      scene.text('This is your last warning, slave. If you won\'t come to my office today at \'+func(\'time\', \'get_time_string\', 20, 0)+\', bad things will happen. Understood?');
    }
  }
  (s as any).leonidVisit = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Yes mister <<$bSurname>>, I\'m sorry. I\'ll be there.', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterSold(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 35;
  (s as any).leonidSlave = 0;
  qspCall(s, 'jobs', 'set_terminated', 'pav_leonid_slave');
  // TODO-QSP: dynamic text: "<<$pcs_firstname>>, you stupid bitch. I thought you were already trained well, ...
  scene.text(`"${((s as any).pcs_firstname ?? 0)}, you stupid bitch. I thought you were already trained well, given the experience from the slave facility."`);
  scene.text('You try to object to his statement, but he just slaps your face shutting you up even before you were able to say a word.');
  scene.text('"I don\'t need such an unruly slave as you. I can easily buy another, more obedient one."');
  // TODO-QSP: dynamic text: "Perhaps I shall keep them locked up, next time. But not you, <<$pcs_firstname>>...
  scene.text(`"Perhaps I shall keep them locked up, next time. But not you, ${((s as any).pcs_firstname ?? 0)}. I don't want any more trouble with you."`);
  scene.text('"Everything is already arranged. You are leaving now, enjoy the countless dicks waiting for you."');
  scene.text('Your face turn pale from his words, fearing what they meant.');
  scene.text('A fat old lady comes in with cuffs and a hood. Still in surprise you are bound and the hood is put on your head.');
  scene.text('You find yourself once again in a trunk of a car, travelling somewhere else to an unknown and possibly unpleasant future…');
  scene.text('');
  scene.text('After about half an hour you are unloaded from the trunk and lead somewhere inside.');
  scene.text('The fat lady removes the hood. "You are in a brothel, bitch. I guess you know what are you going to do here."');
  scene.text('"Over there is your room where you can sleep. There is some food in the cabinet."');
  scene.text('"When whoring, I want you clean and made up. Earn me enough money and I may let you leave. Understood?"');
  qspCall(s, 'money', 'debt_add', 'workDolg', 100000);
  qspCall(s, 'money', 'pay', ((s as any).money ?? 0));
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['city_sauna', 'saunaroom'] },
  ]);
  scene.build();
}

function enterToilet(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'leonid', 'toilet');
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  scene.text('<center><h4>Office toilet</h4></center>');
  scene.img('images/characters/pavlovsk/resident/leonid/toilet.jpg');
  scene.text('You are in an office toilet.');
  if (((s as any).PCloStyle2 ?? 0) !== 5) {
    scene.text('<b style="color:#FF0000">You are at work, so you need to be dressed as a secretary!</b>');
  }
  if (((s as any).pcs_hairbsh ?? 0) < 1) {
    scene.actions([
      { label: 'Brush your hair', goto: ['mirror', 'brush'] },
    ]);
  }
  qspCall(s, 'din_van', 'tampon');
  qspCall(s, 'din_van', 'quickwash');
  qspCall(s, 'din_van', 'basin');
  qspCall(s, 'din_van', 'publicpan');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the restroom', goto: ['leonid', 'office'] },
    { label: 'Change your clothes', goto: ['wardrobe', 'start'] },
    { label: 'Look in the mirror', goto: ['mirror', 'start'] },
  ]);
  scene.build();
}

function enterOnMiss(s: GameState, scene: SceneBuilder): void {
  (s as any).leonidVisitMissed = ((s as any).leonidVisitMissed ?? 0) + (1);
  (s as any).leonidVisit = 0;
  if (((s as any).leonidVisitMissed ?? 0) > 3) {
    qspCall(s, 'leonid', 'sold');
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'firstTime':
      enterFirstTime(s, scene);
      break;
    case 'hall':
      enterHall(s, scene);
      break;
    case 'office':
      enterOffice(s, scene);
      break;
    case 'secretaryGate':
      enterSecretaryGate(s, scene);
      break;
    case 'secretaryEndWorkday':
      enterSecretaryEndWorkday(s, scene);
      break;
    case 'doPunish':
      enterDoPunish(s, scene);
      break;
    case 'doPaperwork':
      enterDoPaperwork(s, scene);
      break;
    case 'doLazy':
      enterDoLazy(s, scene);
      break;
    case 'officeKitchen':
      enterOfficeKitchen(s, scene);
      break;
    case 'officeKitchenMakeCoffe':
      enterOfficeKitchenMakeCoffe(s, scene);
      break;
    case 'officeKitchenBringCoffee':
      enterOfficeKitchenBringCoffee(s, scene);
      break;
    case 'officeKitchenBringCoffeeNaked':
      enterOfficeKitchenBringCoffeeNaked(s, scene);
      break;
    case 'officeKitchenBringCoffeeNormal':
      enterOfficeKitchenBringCoffeeNormal(s, scene);
      break;
    case 'officeFuck':
      enterOfficeFuck(s, scene);
      break;
    case 'cumAnal':
      enterCumAnal(s, scene);
      break;
    case 'cumPussy':
      enterCumPussy(s, scene);
      break;
    case 'askForJob':
      enterAskForJob(s, scene);
      break;
    case 'askForJobYes':
      enterAskForJobYes(s, scene);
      break;
    case 'askForJobNo':
      enterAskForJobNo(s, scene);
      break;
    case 'secretRoom':
      enterSecretRoom(s, scene);
      break;
    case 'bdsmGate':
      enterBdsmGate(s, scene);
      break;
    case 'bdsmFuckVaginal':
      enterBdsmFuckVaginal(s, scene);
      break;
    case 'bdsmFuckAnal':
      enterBdsmFuckAnal(s, scene);
      break;
    case 'bdsmHorse':
      enterBdsmHorse(s, scene);
      break;
    case 'bdsmWhip':
      enterBdsmWhip(s, scene);
      break;
    case 'bdsmDildo':
      enterBdsmDildo(s, scene);
      break;
    case 'bdsmMachine':
      enterBdsmMachine(s, scene);
      break;
    case 'bdsmDeepthroat':
      enterBdsmDeepthroat(s, scene);
      break;
    case 'bdsmForcedOrgasm':
      enterBdsmForcedOrgasm(s, scene);
      break;
    case 'officeLeonidGate':
      enterOfficeLeonidGate(s, scene);
      break;
    case 'massage':
      enterMassage(s, scene);
      break;
    case 'massageErotic':
      enterMassageErotic(s, scene);
      break;
    case 'massageEroticHandjob':
      enterMassageEroticHandjob(s, scene);
      break;
    case 'massageEroticHandjobFinish':
      enterMassageEroticHandjobFinish(s, scene);
      break;
    case 'massageEroticBlowjob':
      enterMassageEroticBlowjob(s, scene);
      break;
    case 'massageEroticBlowjobFinish':
      enterMassageEroticBlowjobFinish(s, scene);
      break;
    case 'massageEroticFuck':
      enterMassageEroticFuck(s, scene);
      break;
    case 'massageEroticFuckFinish':
      enterMassageEroticFuckFinish(s, scene);
      break;
    case 'officeLeonidHasTime':
      enterOfficeLeonidHasTime(s, scene);
      break;
    case 'officeLeonidVoluntaryServeGate':
      enterOfficeLeonidVoluntaryServeGate(s, scene);
      break;
    case 'officeLeonidSuckUnderTable':
      enterOfficeLeonidSuckUnderTable(s, scene);
      break;
    case 'officeLeonidSuckUnderTable1':
      enterOfficeLeonidSuckUnderTable1(s, scene);
      break;
    case 'officeLeonidSuckUnderTable2':
      enterOfficeLeonidSuckUnderTable2(s, scene);
      break;
    case 'officeLeonidPunishmentGate':
      enterOfficeLeonidPunishmentGate(s, scene);
      break;
    case 'officeLeonidPunishmentSpank':
      enterOfficeLeonidPunishmentSpank(s, scene);
      break;
    case 'call':
      enterCall(s, scene);
      break;
    case 'callMissed':
      enterCallMissed(s, scene);
      break;
    case 'sold':
      enterSold(s, scene);
      break;
    case 'toilet':
      enterToilet(s, scene);
      break;
    case 'on_miss':
      enterOnMiss(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const leonid: LocationDef = {
  name: 'leonid',
  title: '"Then let me explain. I love my wife, but I have certain nee',
  region: 'other',
  locationType: 'bathroom',
  locclass: 'kitr',
  enter: enter,
};
