import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)]}`);
  // TODO-QSP: dynamic text: <<$npcdesc>> stops at the entrance of your building.
  scene.text(`${((s as any).npcdesc ?? 0)} stops at the entrance of your building.`);
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    // TODO-QSP: dynamic text: "Good night, <<$pcs_nickname>>. I cannot wait until our next date; I miss you al...
    scene.text(`"Good night, ${((s as any).pcs_nickname ?? 0)}. I cannot wait until our next date; I miss you already."`);
  } else {
    scene.text('"Let me kiss you, love."');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, can I come in for a cup of coffee?"
    scene.text(`"${((s as any).pcs_nickname ?? 0)}, can I come in for a cup of coffee?"`);
  }
  if (((s as any).npc_love ?? 0)?.[String((s as any).npcID ?? 0)] === 0  &&  ((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] >= 100  &&  ((s as any).daystart ?? 0) - ((s as any).npc_daygenerated ?? 0)?.[String((s as any).npcID ?? 0)] >= 180  &&  ((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] >= 30  &&  ((s as any).husID ?? 0) === ''  &&  ((s as any).wifID ?? 0) === '') {
    scene.actions([
      { label: 'Talk about cohabitation', goto: ['love', 'start'] },
    ]);
  }
  if (((s as any).husID ?? 0) === '') {
    scene.actions([
      { label: 'Invite him in', goto: ['sexm', 'room'] },
    ]);
  } else {
    if (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) < 17  &&  ((s as any).hour ?? 0) > 7) {
      scene.actions([
        { label: 'Invite him in', goto: ['sexm', 'room'] },
      ]);
    } else {
      scene.actions([
        { label: 'Tell him that your husband is home and you can\'t invite him in', handler: (st: GameState) => {
    if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspCall(s, 'lover', 'remove_boyfriend', ((s as any).npcID ?? 0));
      scene.text('"What, you are married! You didn\'t think to say anything earlier? I thought I loved you, you bitch!" he shouts and then runs away in tears.');
      scene.actions([
        { label: 'Go to your apartment', goto: ['homes_properties', 'go_straight_home'] },
      ]);
    } else {
      scene.text('"Well then, see you, I\'ll call you," he says quietly and leaves.');
      scene.text('"If your husband is in the apartment, maybe you can climb a little higher, perhaps up to the attic?" he says with a sly grin.');
      scene.actions([
        { label: 'Go to your apartment', goto: ['homes_properties', 'go_straight_home'] },
        { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), ((s as any).rand ?? 0)(-1, 0));
  }, goto: ['homes_properties', 'go_straight_home'] },
        { label: 'Agree', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
    (s as any).boycherdaksex = 1;
  }, goto: ['sexm', 'room'] },
      ]);
    }
  } },
      ]);
    }
  }
  scene.actions([
    { label: 'Kiss him goodnight', handler: (st: GameState) => {
    if (((s as any).npc_vaginal_count ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] < 20) {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 1);
          // TODO-QSP: dynamic text: <<$npcdesc>> kisses you goodbye on the lips and gently hugs your waist.
          scene.text(`${((s as any).npcdesc ?? 0)} kisses you goodbye on the lips and gently hugs your waist.`);
        } else {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), ((s as any).rand ?? 0)(-1, 0));
          // TODO-QSP: dynamic text: <<$npcdesc>> kisses you goodbye on the lips and breaks away from the kiss lookin...
          scene.text(`${((s as any).npcdesc ?? 0)} kisses you goodbye on the lips and breaks away from the kiss looking at you with sad eyes.`);
        }
      } else {
        if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] < 10) {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
          // TODO-QSP: dynamic text: <<$npcdesc>> kisses you goodbye on the lips, hugging your waist.
          scene.text(`${((s as any).npcdesc ?? 0)} kisses you goodbye on the lips, hugging your waist.`);
        } else {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (-1));
          // TODO-QSP: dynamic text: <<$npcdesc>> kisses you goodbye on the lips and asks, "Maybe it's time we took t...
          scene.text(`${((s as any).npcdesc ?? 0)} kisses you goodbye on the lips and asks, "Maybe it's time we took things to the next level?"`);
        }
        if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] < 3) {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
          // TODO-QSP: dynamic text: <<$npcdesc>> kisses you on the lips, while his hand squeezes your ass.
          scene.text(`${((s as any).npcdesc ?? 0)} kisses you on the lips, while his hand squeezes your ass.`);
        } else {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (-1));
          // TODO-QSP: dynamic text: <<$npcdesc>> kisses you on the lips and then pulls away mumbling irritably, "Not...
          scene.text(`${((s as any).npcdesc ?? 0)} kisses you on the lips and then pulls away mumbling irritably, "Not much happening, so far."`);
        }
      }
    } else {
      if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] < 20) {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
          // TODO-QSP: dynamic text: <<$npcdesc>> kisses you goodbye on the lips and gently hugs your waist.
          scene.text(`${((s as any).npcdesc ?? 0)} kisses you goodbye on the lips and gently hugs your waist.`);
        } else {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), ((s as any).rand ?? 0)(-1, 0));
          // TODO-QSP: dynamic text: <<$npcdesc>> kisses you goodbye on the lips and breaks away from the kiss lookin...
          scene.text(`${((s as any).npcdesc ?? 0)} kisses you goodbye on the lips and breaks away from the kiss looking at you with sad eyes.`);
        }
      } else {
        if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] < 10) {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), ((s as any).rand ?? 0)(-1, 0));
          // TODO-QSP: dynamic text: <<$npcdesc>> kisses you goodbye on the lips, hugging your waist.
          scene.text(`${((s as any).npcdesc ?? 0)} kisses you goodbye on the lips, hugging your waist.`);
        } else {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (-1));
          // TODO-QSP: dynamic text: <<$npcdesc>> kisses you goodbye on the lips and says, "Okay, I can live one day ...
          scene.text(`${((s as any).npcdesc ?? 0)} kisses you goodbye on the lips and says, "Okay, I can live one day without sex.".`);
        }
        if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] < 3) {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (-1));
          // TODO-QSP: dynamic text: <<$npcdesc>> kisses you goodbye on the lips while squeezing your ass with both h...
          scene.text(`${((s as any).npcdesc ?? 0)} kisses you goodbye on the lips while squeezing your ass with both hands.`);
        } else {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), ((s as any).rand ?? 0)(-2, -1));
          // TODO-QSP: dynamic text: <<$npcdesc>> kisses you on the lips, then pulls away from the kiss muttering in ...
          scene.text(`${((s as any).npcdesc ?? 0)} kisses you on the lips, then pulls away from the kiss muttering in exasperation, "No sex today, huh?"`);
        }
      }
    }
    qspCall(s, 'arousal', 'kiss', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Close the door', goto: ['homes_properties', 'go_home'] },
    ]);
  } },
    { label: 'Say goodnight', handler: (st: GameState) => {
    if (((s as any).npc_vaginal_count ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] < 20) {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
          // TODO-QSP: dynamic text: <<$npcdesc>> waves goodbye with a smile.
          scene.text(`${((s as any).npcdesc ?? 0)} waves goodbye with a smile.`);
        } else {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), ((s as any).rand ?? 0)(-1, 0));
          // TODO-QSP: dynamic text: <<$npcdesc>> waves goodbye, looking a bit sad.
          scene.text(`${((s as any).npcdesc ?? 0)} waves goodbye, looking a bit sad.`);
        }
      } else {
        if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] < 10) {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
          // TODO-QSP: dynamic text: <<$npcdesc>> waves and leaves for the night.
          scene.text(`${((s as any).npcdesc ?? 0)} waves and leaves for the night.`);
        } else {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (-1));
          // TODO-QSP: dynamic text: <<$npcdesc>> waves goodbye irritably and walks away briskly.
          scene.text(`${((s as any).npcdesc ?? 0)} waves goodbye irritably and walks away briskly.`);
        }
        if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] < 3) {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), ((s as any).rand ?? 0)(-1, 0));
          // TODO-QSP: dynamic text: <<$npcdesc>> seems slightly annoyed. "What are you, a holy virgin?"
          scene.text(`${((s as any).npcdesc ?? 0)} seems slightly annoyed. "What are you, a holy virgin?"`);
        } else {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), ((s as any).rand ?? 0)(-2, -1));
          // TODO-QSP: dynamic text: <<$npcdesc>> seems irritated. "So you do not even want to kiss? Oh well."
          scene.text(`${((s as any).npcdesc ?? 0)} seems irritated. "So you do not even want to kiss? Oh well."`);
        }
      }
    } else {
      if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] < 20) {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
          // TODO-QSP: dynamic text: <<$npcdesc>> waves you goodbye and smiles at you.
          scene.text(`${((s as any).npcdesc ?? 0)} waves you goodbye and smiles at you.`);
        } else {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (-1));
          // TODO-QSP: dynamic text: <<$npcdesc>> waves you goodbye and looks at you with big sad eyes.
          scene.text(`${((s as any).npcdesc ?? 0)} waves you goodbye and looks at you with big sad eyes.`);
        }
      } else {
        if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] < 10) {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), ((s as any).rand ?? 0)(-1, 0));
          // TODO-QSP: dynamic text: <<$npcdesc>> waves and walks out of the house.
          scene.text(`${((s as any).npcdesc ?? 0)} waves and walks out of the house.`);
        } else {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), ((s as any).rand ?? 0)(-2, -1));
          // TODO-QSP: dynamic text: <<$npcdesc>> irritably waves goodbye and walks quickly out of the house.
          scene.text(`${((s as any).npcdesc ?? 0)} irritably waves goodbye and walks quickly out of the house.`);
        }
        if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] < 3) {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (-1));
          // TODO-QSP: dynamic text: <<$npcdesc>> is annoyed and tells you to go fuck yourself.
          scene.text(`${((s as any).npcdesc ?? 0)} is annoyed and tells you to go fuck yourself.`);
        } else {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (-2));
          // TODO-QSP: dynamic text: <<$npcdesc>> is disappointed and asks, "What are you afraid of?"
          scene.text(`${((s as any).npcdesc ?? 0)} is disappointed and asks, "What are you afraid of?"`);
        }
      }
    }
    scene.actions([
      { label: 'Close the door', goto: ['homes_properties', 'go_home'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterRoom(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  if (((s as any).boycherdaksex ?? 0) === 1) {
    scene.img('images/locations/city/residential/apartment/cherdak.jpg');
    scene.text('You climb up into the attic with your boyfriend.');
  } else {
    scene.text('<center><b>Bedroom</b></center>');
    if ((!((s as any).rembedr ?? 0))) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/city/residential/apartment/bedr...
      scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/city/residential/apartment/bedr.jpg"></center>`);
    }
    if (((s as any).rembedr ?? 0) === 1) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/city/residential/apartment/bedr...
      scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/city/residential/apartment/bedr2.jpg"></center>`);
    }
    scene.text('You take off your shoes and lead your lover to your bedroom.');
  }
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    // TODO-QSP: dynamic text: <<$npcdesc>> is shy and does not know what to do.
    scene.text(`${((s as any).npcdesc ?? 0)} is shy and does not know what to do.`);
    scene.actions([
      { label: 'Propose options', goto: ['sexm', 'variant'] },
    ]);
  } else {
    // TODO-QSP: dynamic text: <<$npcdesc>> gently hugs you and starts to cuddle.
    scene.text(`${((s as any).npcdesc ?? 0)} gently hugs you and starts to cuddle.`);
    // TODO-QSP: dynamic text: You undress, and smoothly, <<$npcdesc>> asks you, "How do you want it, darling?"
    scene.text(`You undress, and smoothly, ${((s as any).npcdesc ?? 0)} asks you, "How do you want it, darling?"`);
    scene.actions([
      { label: 'I want whatever you want sweetie', handler: (st: GameState) => {
    if (((s as any).npc_vaginal_count ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      // TODO-QSP: dynamic text: <<$npcdesc>> throws you on the bed and starts sucking on your breasts.
      scene.text(`${((s as any).npcdesc ?? 0)} throws you on the bed and starts sucking on your breasts.`);
      qspCall(s, 'arousal', 'breasts', 1);
      scene.actions([
        { label: 'Sex', goto: ['sexm', 'miss'] },
      ]);
    } else {
      (s as any).sexrand = Math.floor(Math.random() * 4) + 0;
      if ((!((s as any).sexrand ?? 0))) {
        // TODO-QSP: dynamic text: "<<$pcs_firstname>>, I want you to suck my cock."
        scene.text(`"${((s as any).pcs_firstname ?? 0)}, I want you to suck my cock."`);
        scene.actions([
          { label: 'Give him a blowjob', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
  }, goto: ['sexm', 'minet'] },
        ]);
      } else {
        // TODO-QSP: dynamic text: "<<$pcs_firstname>>, I want to take you in the ass."
        scene.text(`"${((s as any).pcs_firstname ?? 0)}, I want to take you in the ass."`);
        if (((s as any).sexrand ?? 0) === 2) {
          // TODO-QSP: dynamic text: "<<$pcs_firstname>>, I want you."
          scene.text(`"${((s as any).pcs_firstname ?? 0)}, I want you."`);
          scene.actions([
            { label: 'Spread her legs ', goto: ['sexm', 'miss'] },
          ]);
        } else {
          // TODO-QSP: dynamic text: "<<$pcs_firstname>>, I want to take you from behind."
          scene.text(`"${((s as any).pcs_firstname ?? 0)}, I want to take you from behind."`);
          scene.actions([
            { label: 'Doggy-Style', goto: ['sexm', 'dog'] },
          ]);
        }
        scene.actions([
          { label: 'Anal', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 2);
  }, goto: ['sexm', 'anal'] },
        ]);
      }
      scene.actions([
        { label: 'I don\'t want to do this, let\'s try something else', goto: ['sexm', 'variant'] },
      ]);
    }
    // TODO-QSP: dynamic text: <<$npcdesc>> grabs you and rudely pushes you on your back. He starts to kiss you...
    scene.text(`${((s as any).npcdesc ?? 0)} grabs you and rudely pushes you on your back. He starts to kiss you passionately and tries to take off your clothes.`);
    // TODO-QSP: dynamic text: Finally, <<$npcdesc>> won the difficult battle with your bra straps.
    scene.text(`Finally, ${((s as any).npcdesc ?? 0)} won the difficult battle with your bra straps.`);
    qspCall(s, 'arousal', 'kiss', 5, 'sub');
    qspCall(s, 'stat', '');
    if (((s as any).npc_vaginal_count ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      // TODO-QSP: dynamic text: <<$npcdesc>> throws you on the bed and starts sucking on your breasts.
      scene.text(`${((s as any).npcdesc ?? 0)} throws you on the bed and starts sucking on your breasts.`);
      qspCall(s, 'arousal', 'breasts', 1);
      scene.actions([
        { label: 'Sex', goto: ['sexm', 'miss'] },
      ]);
    } else {
      (s as any).sexrand = Math.floor(Math.random() * 4) + 0;
      if ((!((s as any).sexrand ?? 0))) {
        scene.text('"Suck my big, fat dick."');
        scene.actions([
          { label: 'Give blowjob', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 1);
  }, goto: ['sexm', 'minet'] },
        ]);
      } else {
        // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I want your ass."
        scene.text(`"${((s as any).pcs_nickname ?? 0)}, I want your ass."`);
        if (((s as any).sexrand ?? 0) === 2) {
          // TODO-QSP: dynamic text: "Lie down and spread those gorgeous long legs, <<$pcs_nickname>>."
          scene.text(`"Lie down and spread those gorgeous long legs, ${((s as any).pcs_nickname ?? 0)}."`);
          scene.actions([
            { label: 'Spread her legs ', goto: ['sexm', 'miss'] },
          ]);
        } else {
          scene.text('"Get on your hands and knees, I want to fuck you like a bitch in heat."');
          scene.actions([
            { label: 'Doggy-Style', goto: ['sexm', 'dog'] },
          ]);
        }
        scene.actions([
          { label: 'Anal', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 2);
  }, goto: ['sexm', 'anal'] },
        ]);
      }
      scene.actions([
        { label: 'I don\'t want to do this, let\'s try something else', goto: ['sexm', 'variant'] },
      ]);
    }
    scene.actions([
      { label: 'Propose options', goto: ['sexm', 'variant'] },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'room':
      enterRoom(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const sexm: LocationDef = {
  name: 'sexm',
  title: 'Bedroom',
  region: 'other',
  locationType: 'event',
  enter: enter,
};
