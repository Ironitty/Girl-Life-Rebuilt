import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''}`);
  // TODO-QSP: dynamic text: <<$npcdesc>> stops at the entrance of your building.
  scene.text(`${((s as any).npcdesc || '')} stops at the entrance of your building.`);
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    // TODO-QSP: dynamic text: "Good night, <<$pcs_nickname>>. I cannot wait until our next date; I miss you al...
    scene.text(`"Good night, ${((s as any).pcs_nickname || '')}. I cannot wait until our next date; I miss you already."`);
  } else {
    if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      scene.text('"Let me kiss you, love."');
    } else {
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>, can I come in for a cup of coffee?"
      scene.text(`"${((s as any).pcs_nickname || '')}, can I come in for a cup of coffee?"`);
    }
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
      if (((s as any).week ?? 0) > 5  ||  ((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) > 16) {
        scene.actions([
          { label: 'Tell him that your husband is home and you can\'t invite him in', handler: (st: GameState) => {
    if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspCall(s, 'lover', 'remove_boyfriend', ((s as any).npcID ?? 0));
      scene.text('"What, you are married! You didn\'t think to say anything earlier? I thought I loved you, you bitch!" he shouts and then runs away in tears.');
      scene.actions([
        { label: 'Go to your apartment', goto: ['homes_properties', 'go_straight_home'] },
      ]);
    } else {
      if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        scene.text('"Well then, see you, I\'ll call you," he says quietly and leaves.');
        scene.actions([
          { label: 'Go to your apartment', goto: ['homes_properties', 'go_straight_home'] },
        ]);
      } else {
        scene.text('"If your husband is in the apartment, maybe you can climb a little higher, perhaps up to the attic?" he says with a sly grin.');
        scene.actions([
          { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
  }, goto: ['homes_properties', 'go_straight_home'] },
          { label: 'Agree', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
    (s as any).boycherdaksex = 1;
  }, goto: ['sexm', 'room'] },
        ]);
      }
    }
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Kiss him goodnight', handler: (st: GameState) => {
    if (((s as any).npc_vaginal_count ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] < 20) {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 1);
          // TODO-QSP: dynamic text: <<$npcdesc>> kisses you goodbye on the lips and gently hugs your waist.
          scene.text(`${((s as any).npcdesc || '')} kisses you goodbye on the lips and gently hugs your waist.`);
        } else {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
          // TODO-QSP: dynamic text: <<$npcdesc>> kisses you goodbye on the lips and breaks away from the kiss lookin...
          scene.text(`${((s as any).npcdesc || '')} kisses you goodbye on the lips and breaks away from the kiss looking at you with sad eyes.`);
        }
      } else {
        if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
          if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] < 10) {
            qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
            // TODO-QSP: dynamic text: <<$npcdesc>> kisses you goodbye on the lips, hugging your waist.
            scene.text(`${((s as any).npcdesc || '')} kisses you goodbye on the lips, hugging your waist.`);
          } else {
            qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (-1));
            // TODO-QSP: dynamic text: <<$npcdesc>> kisses you goodbye on the lips and asks, "Maybe it's time we took t...
            scene.text(`${((s as any).npcdesc || '')} kisses you goodbye on the lips and asks, "Maybe it's time we took things to the next level?"`);
          }
        } else {
          if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] < 3) {
            qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
            // TODO-QSP: dynamic text: <<$npcdesc>> kisses you on the lips, while his hand squeezes your ass.
            scene.text(`${((s as any).npcdesc || '')} kisses you on the lips, while his hand squeezes your ass.`);
          } else {
            qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (-1));
            // TODO-QSP: dynamic text: <<$npcdesc>> kisses you on the lips and then pulls away mumbling irritably, "Not...
            scene.text(`${((s as any).npcdesc || '')} kisses you on the lips and then pulls away mumbling irritably, "Not much happening, so far."`);
          }
        }
      }
    } else {
      if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] < 20) {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
          // TODO-QSP: dynamic text: <<$npcdesc>> kisses you goodbye on the lips and gently hugs your waist.
          scene.text(`${((s as any).npcdesc || '')} kisses you goodbye on the lips and gently hugs your waist.`);
        } else {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
          // TODO-QSP: dynamic text: <<$npcdesc>> kisses you goodbye on the lips and breaks away from the kiss lookin...
          scene.text(`${((s as any).npcdesc || '')} kisses you goodbye on the lips and breaks away from the kiss looking at you with sad eyes.`);
        }
      } else {
        if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
          if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] < 10) {
            qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
            // TODO-QSP: dynamic text: <<$npcdesc>> kisses you goodbye on the lips, hugging your waist.
            scene.text(`${((s as any).npcdesc || '')} kisses you goodbye on the lips, hugging your waist.`);
          } else {
            qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (-1));
            // TODO-QSP: dynamic text: <<$npcdesc>> kisses you goodbye on the lips and says, "Okay, I can live one day ...
            scene.text(`${((s as any).npcdesc || '')} kisses you goodbye on the lips and says, "Okay, I can live one day without sex.".`);
          }
        } else {
          if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] < 3) {
            qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (-1));
            // TODO-QSP: dynamic text: <<$npcdesc>> kisses you goodbye on the lips while squeezing your ass with both h...
            scene.text(`${((s as any).npcdesc || '')} kisses you goodbye on the lips while squeezing your ass with both hands.`);
          } else {
            qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * ((-1) - (-2) + 1)) + ((-2))));
            // TODO-QSP: dynamic text: <<$npcdesc>> kisses you on the lips, then pulls away from the kiss muttering in ...
            scene.text(`${((s as any).npcdesc || '')} kisses you on the lips, then pulls away from the kiss muttering in exasperation, "No sex today, huh?"`);
          }
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
          scene.text(`${((s as any).npcdesc || '')} waves goodbye with a smile.`);
        } else {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
          // TODO-QSP: dynamic text: <<$npcdesc>> waves goodbye, looking a bit sad.
          scene.text(`${((s as any).npcdesc || '')} waves goodbye, looking a bit sad.`);
        }
      } else {
        if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
          if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] < 10) {
            qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
            // TODO-QSP: dynamic text: <<$npcdesc>> waves and leaves for the night.
            scene.text(`${((s as any).npcdesc || '')} waves and leaves for the night.`);
          } else {
            qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (-1));
            // TODO-QSP: dynamic text: <<$npcdesc>> waves goodbye irritably and walks away briskly.
            scene.text(`${((s as any).npcdesc || '')} waves goodbye irritably and walks away briskly.`);
          }
        } else {
          if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] < 3) {
            qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
            // TODO-QSP: dynamic text: <<$npcdesc>> seems slightly annoyed. "What are you, a holy virgin?"
            scene.text(`${((s as any).npcdesc || '')} seems slightly annoyed. "What are you, a holy virgin?"`);
          } else {
            qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * ((-1) - (-2) + 1)) + ((-2))));
            // TODO-QSP: dynamic text: <<$npcdesc>> seems irritated. "So you do not even want to kiss? Oh well."
            scene.text(`${((s as any).npcdesc || '')} seems irritated. "So you do not even want to kiss? Oh well."`);
          }
        }
      }
    } else {
      if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] < 20) {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
          // TODO-QSP: dynamic text: <<$npcdesc>> waves you goodbye and smiles at you.
          scene.text(`${((s as any).npcdesc || '')} waves you goodbye and smiles at you.`);
        } else {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (-1));
          // TODO-QSP: dynamic text: <<$npcdesc>> waves you goodbye and looks at you with big sad eyes.
          scene.text(`${((s as any).npcdesc || '')} waves you goodbye and looks at you with big sad eyes.`);
        }
      } else {
        if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
          if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] < 10) {
            qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
            // TODO-QSP: dynamic text: <<$npcdesc>> waves and walks out of the house.
            scene.text(`${((s as any).npcdesc || '')} waves and walks out of the house.`);
          } else {
            qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * ((-1) - (-2) + 1)) + ((-2))));
            // TODO-QSP: dynamic text: <<$npcdesc>> irritably waves goodbye and walks quickly out of the house.
            scene.text(`${((s as any).npcdesc || '')} irritably waves goodbye and walks quickly out of the house.`);
          }
        } else {
          if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] < 3) {
            qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (-1));
            // TODO-QSP: dynamic text: <<$npcdesc>> is annoyed and tells you to go fuck yourself.
            scene.text(`${((s as any).npcdesc || '')} is annoyed and tells you to go fuck yourself.`);
          } else {
            qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (-2));
            // TODO-QSP: dynamic text: <<$npcdesc>> is disappointed and asks, "What are you afraid of?"
            scene.text(`${((s as any).npcdesc || '')} is disappointed and asks, "What are you afraid of?"`);
          }
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
    if ((!((s as any).boycherdaksex ?? 0))) {
      scene.text('<center><b>Bedroom</b></center>');
      if ((!((s as any).rembedr ?? 0))) {
        // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/city/residential/apartment/bedr...
        scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/city/residential/apartment/bedr.jpg"></center>`);
      }
      if (((s as any).rembedr ?? 0) === 1) {
        // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/city/residential/apartment/bedr...
        scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/city/residential/apartment/bedr2.jpg"></center>`);
      }
      scene.text('You take off your shoes and lead your lover to your bedroom.');
    }
  }
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    // TODO-QSP: dynamic text: <<$npcdesc>> is shy and does not know what to do.
    scene.text(`${((s as any).npcdesc || '')} is shy and does not know what to do.`);
    scene.actions([
      { label: 'Propose options', goto: ['sexm', 'variant'] },
    ]);
  } else {
    if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      // TODO-QSP: dynamic text: <<$npcdesc>> gently hugs you and starts to cuddle.
      scene.text(`${((s as any).npcdesc || '')} gently hugs you and starts to cuddle.`);
      // TODO-QSP: dynamic text: You undress, and smoothly, <<$npcdesc>> asks you, "How do you want it, darling?"
      scene.text(`You undress, and smoothly, ${((s as any).npcdesc || '')} asks you, "How do you want it, darling?"`);
      scene.actions([
        { label: 'I want whatever you want sweetie', handler: (st: GameState) => {
    if (((s as any).npc_vaginal_count ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      // TODO-QSP: dynamic text: <<$npcdesc>> throws you on the bed and starts sucking on your breasts.
      scene.text(`${((s as any).npcdesc || '')} throws you on the bed and starts sucking on your breasts.`);
      qspCall(s, 'arousal', 'breasts', 1);
      scene.actions([
        { label: 'Sex', goto: ['sexm', 'miss'] },
      ]);
    } else {
      (s as any).sexrand = Math.floor(Math.random() * 4) + 0;
      if ((!((s as any).sexrand ?? 0))) {
        // TODO-QSP: dynamic text: "<<$pcs_firstname>>, I want you to suck my cock."
        scene.text(`"${((s as any).pcs_firstname || '')}, I want you to suck my cock."`);
        scene.actions([
          { label: 'Give him a blowjob', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
  }, goto: ['sexm', 'minet'] },
        ]);
      } else {
        if (((s as any).sexrand ?? 0) === 1) {
          // TODO-QSP: dynamic text: "<<$pcs_firstname>>, I want to take you in the ass."
          scene.text(`"${((s as any).pcs_firstname || '')}, I want to take you in the ass."`);
          scene.actions([
            { label: 'Anal', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 2);
  }, goto: ['sexm', 'anal'] },
          ]);
        } else {
          if (((s as any).sexrand ?? 0) === 2) {
            // TODO-QSP: dynamic text: "<<$pcs_firstname>>, I want you."
            scene.text(`"${((s as any).pcs_firstname || '')}, I want you."`);
            scene.actions([
              { label: 'Spread her legs ', goto: ['sexm', 'miss'] },
            ]);
          } else {
            if (((s as any).sexrand ?? 0) === 3) {
              // TODO-QSP: dynamic text: "<<$pcs_firstname>>, I want to take you from behind."
              scene.text(`"${((s as any).pcs_firstname || '')}, I want to take you from behind."`);
              scene.actions([
                { label: 'Doggy-Style', goto: ['sexm', 'dog'] },
              ]);
            }
          }
        }
      }
    }
    scene.actions([
      { label: 'I don\'t want to do this, let\'s try something else', goto: ['sexm', 'variant'] },
    ]);
  } },
        { label: 'Propose options', goto: ['sexm', 'variant'] },
      ]);
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> grabs you and rudely pushes you on your back. He starts to kiss you...
      scene.text(`${((s as any).npcdesc || '')} grabs you and rudely pushes you on your back. He starts to kiss you passionately and tries to take off your clothes.`);
      // TODO-QSP: dynamic text: Finally, <<$npcdesc>> won the difficult battle with your bra straps.
      scene.text(`Finally, ${((s as any).npcdesc || '')} won the difficult battle with your bra straps.`);
      qspCall(s, 'arousal', 'kiss', 5, 'sub');
      qspCall(s, 'stat', '');
      if (((s as any).npc_vaginal_count ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        // TODO-QSP: dynamic text: <<$npcdesc>> throws you on the bed and starts sucking on your breasts.
        scene.text(`${((s as any).npcdesc || '')} throws you on the bed and starts sucking on your breasts.`);
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
          if (((s as any).sexrand ?? 0) === 1) {
            // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I want your ass."
            scene.text(`"${((s as any).pcs_nickname || '')}, I want your ass."`);
            scene.actions([
              { label: 'Anal', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 2);
  }, goto: ['sexm', 'anal'] },
            ]);
          } else {
            if (((s as any).sexrand ?? 0) === 2) {
              // TODO-QSP: dynamic text: "Lie down and spread those gorgeous long legs, <<$pcs_nickname>>."
              scene.text(`"Lie down and spread those gorgeous long legs, ${((s as any).pcs_nickname || '')}."`);
              scene.actions([
                { label: 'Spread her legs ', goto: ['sexm', 'miss'] },
              ]);
            } else {
              if (((s as any).sexrand ?? 0) === 3) {
                scene.text('"Get on your hands and knees, I want to fuck you like a bitch in heat."');
                scene.actions([
                  { label: 'Doggy-Style', goto: ['sexm', 'dog'] },
                ]);
              }
            }
          }
        }
      }
      scene.actions([
        { label: 'I don\'t want to do this, let\'s try something else', goto: ['sexm', 'variant'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterVariant(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
  }
  if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
  }
  scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''}`);
  // TODO-QSP: dynamic text: <<$npcdesc>> looks at you and waits for you to say something.
  scene.text(`${((s as any).npcdesc || '')} looks at you and waits for you to say something.`);
  if (((s as any).kunday ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Have him lick you out', goto: ['sexm', 'kuni'] },
    ]);
  }
  if (((s as any).npc_vaginal_count ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).npc_pervert ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).mc_inventory ?? 0)?.['strapon'] > 0) {
    qspCall(s, 'willpower', 'sex', 'force', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Fuck him with your strapon', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Fuck him with your strapon', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'force');
    qspCall(s, 'stat', '');
  }, goto: ['sexm', 'strapon'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Lie down and spread your legs', goto: ['sexm', 'miss'] },
    { label: 'Doggy-Style', goto: ['sexm', 'dog'] },
    { label: 'Anal', goto: ['sexm', 'anal'] },
    { label: 'Give him a blowjob', goto: ['sexm', 'minet'] },
    { label: 'Wank him off', goto: ['sexm', 'hand'] },
  ]);
  scene.build();
}

function enterMinet(s: GameState, scene: SceneBuilder): void {
  (s as any).popolaini = 1;
  qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
  (s as any).bja = ((s as any).bja ?? 0) + (1);
  qspCall(s, 'npcStat', '', ((s as any).npcID ?? 0));
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/blowjob/bj24.jpg');
  // TODO-QSP: dynamic text: You wrap your lips around <<$npcdesc>> 's dick.
  scene.text(`You wrap your lips around ${((s as any).npcdesc || '')} 's dick.`);
  if (((s as any).stat ?? 0)?.['bj'] === 1) {
    scene.text('You think, "Damn, now I am just sitting here sucking his dick."');
  }
  qspCall(s, 'arousal', 'bj', 15, 'sub');
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'swallow', 'resist', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Remove his cock before he cums', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Remove his cock before he cums', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      (s as any).spafinloc = 13;
      qspCall(s, 'cum_manage', '');
      scene.img('images/shared/sex/handjob/hand.jpg');
      // TODO-QSP: dynamic text: You remove his dick from your mouth and finish off <<$npcdesc>> with your hand.
      scene.text(`You remove his dick from your mouth and finish off ${((s as any).npcdesc || '')} with your hand.`);
    } else {
      if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        (s as any).tiprand = Math.floor(Math.random() * 4) + 0;
        if (((s as any).tiprand ?? 0) < 3) {
          (s as any).spafinloc = 13;
          qspCall(s, 'cum_manage', '');
          scene.img('images/shared/sex/handjob/hand.jpg');
          // TODO-QSP: dynamic text: You remove his dick from your mouth and finish off <<$npcdesc>> with your hand.
          scene.text(`You remove his dick from your mouth and finish off ${((s as any).npcdesc || '')} with your hand.`);
        } else {
          (s as any).spafinloc = 11;
          qspCall(s, 'cum_manage', '');
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
          scene.img('images/shared/sex/cum/facial/facial16.jpg');
          // TODO-QSP: dynamic text: You take his dick out of your mouth and point it right at your face. You are now...
          scene.text(`You take his dick out of your mouth and point it right at your face. You are now covered with ${((s as any).npcdesc || '')}'s warm and sticky cum.`);
        }
      } else {
        (s as any).spafinloc = 11;
        qspCall(s, 'cum_manage', '');
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
        scene.img('images/shared/sex/cum/facial/facial16.jpg');
        // TODO-QSP: dynamic text: <<$npcdesc>> holds you by your hair. He takes his dick out of your mouth and cum...
        scene.text(`${((s as any).npcdesc || '')} holds you by your hair. He takes his dick out of your mouth and cums on your face, covering it with warm and sticky cum.`);
      }
    }
    scene.actions([
      { label: 'Leave', goto: ['sexm', 'endsex'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue to suck', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0));
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 1);
    scene.img('images/shared/sex/cum/mouth/cum30.jpg');
    // TODO-QSP: dynamic text: A hot jet of sperm hits you in the mouth. You start to swallow his cum while <<$...
    scene.text(`A hot jet of sperm hits you in the mouth. You start to swallow his cum while ${((s as any).npcdesc || '')} continues to cum in your mouth. Finally, the flow of hot liquid with a pungent taste stops.`);
    scene.actions([
      { label: 'Leave', goto: ['sexm', 'endsex'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterHand(s: GameState, scene: SceneBuilder): void {
  (s as any).popolaini = 1;
  (s as any).hja = ((s as any).hja ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/cum/handjob/hand1.jpg');
  // TODO-QSP: dynamic text: You take his <<$dick_desc>> penis and begin to caress it gently, moving the skin...
  scene.text(`You take his ${((s as any).dick_desc || '')} penis and begin to caress it gently, moving the skin on the purple head back and forth.`);
  scene.text('Soon, your skillful movements make the guy cum in your hands, covering them with warm and sticky sperm.');
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
  } else {
    if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * ((-2) - (-3) + 1)) + ((-3))));
    } else {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (-5));
    }
  }
  qspCall(s, 'arousal', 'hj', 30, 'dom');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Wipe your hands and walk him to the door', goto: ['sexm', 'endsex'] },
  ]);
  scene.build();
}

function enterKuni(s: GameState, scene: SceneBuilder): void {
  (s as any).kunday = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/kuni/kuni.jpg');
  scene.text('You undress and go lie down on the bed. You ask him to use his tongue to pleasure you.');
  // TODO-QSP: dynamic text: <<$npcdesc>> lies down between your legs and begins to work his tongue on your p...
  scene.text(`${((s as any).npcdesc || '')} lies down between your legs and begins to work his tongue on your pussy.`);
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
  } else {
    if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * ((-2) - (-3) + 1)) + ((-3))));
    } else {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (-5));
    }
  }
  qspCall(s, 'arousal', 'cuni', 30, 'dom');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Further', handler: (st: GameState) => {
    if (((s as any).husID ?? 0) !== ''  &&  ((s as any).hour ?? 0) < 17  &&  ((s as any).hour ?? 0) > 7  &&  (!((s as any).boycherdaksex ?? 0))) {
      (s as any).popolaini = 2;
      scene.actions([{ label: 'Continue', goto: ['sexm', 'popala'] }]);
    }
  }, goto: ['sexm', 'variant'] },
  ]);
  scene.build();
}

function enterStrapon(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 2);
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/dom/pegging.mp4');
  // TODO-QSP: dynamic text: You go to the drawer and put on your strapon. <<$npcdesc>> gets ready on all fou...
  scene.text(`You go to the drawer and put on your strapon. ${((s as any).npcdesc || '')} gets ready on all fours on the bed.`);
  scene.text('You use some lubrication on the guy\'s anus and stick the strapon in. While you fuck his ass, he groans a lot and finally finishes. You remove the strapon from his ass and go to the bathroom.');
  qspCall(s, 'arousal', 'anal_strap_give', 30, 'dom');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Wipe your hands and walk him to the door', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
  }, goto: ['homes_properties', 'go_straight_home'] },
  ]);
  scene.build();
}

function enterAnal(s: GameState, scene: SceneBuilder): void {
  (s as any).popolaini = 3;
  qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
  (s as any).anala = ((s as any).anala ?? 0) + (1);
  if (((s as any).dick_length ?? 0) < ((s as any).pcs_ass ?? 0)) {
    qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
  }
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/anal/doggy/anal29.jpg');
  if (((s as any).analPlugIn ?? 0) === 1) {
    (s as any).analPlugInbonus = 10;
    (s as any).analPlugIn = 0;
    (s as any).analPlugOut = 1;
    if (((s as any).pcs_ass ?? 0) < 16) {
      // TODO-QSP: dynamic text:  <<$npcdesc>> pulls the butt plug out of your narrow and tight ass, 
      scene.text(` ${((s as any).npcdesc || '')} pulls the butt plug out of your narrow and tight ass, `);
    } else {
      if (((s as any).pcs_ass ?? 0) >= 16) {
        // TODO-QSP: dynamic text:  <<$npcdesc>>pulls out your butt plug, 
        scene.text(` ${((s as any).npcdesc || '')}pulls out your butt plug, `);
      }
    }
    scene.text('and you feel his hard cock resting on your ass.');
    qspCall(s, 'arousal', 'anal', 30, 'dom');
    qspCall(s, 'stat', '');
    if (((s as any).pcs_ass ?? 0) + ((s as any).analPlugInbonus ?? 0) < ((s as any).dick ?? 0)) {
      // TODO-QSP: dynamic text: You scream and bite your lip from the sharp pain you suddenly feel when his <<$d...
      scene.text(`You scream and bite your lip from the sharp pain you suddenly feel when his ${((s as any).dick_desc || '')} penis rips apart your ass when it enters.`);
    } else {
      if (((s as any).pcs_ass ?? 0) + ((s as any).analPlugInbonus ?? 0) >= ((s as any).dick ?? 0)) {
        // TODO-QSP: dynamic text: You groan slightly when you feel his <<$dick_desc>> dick enter your ass.
        scene.text(`You groan slightly when you feel his ${((s as any).dick_desc || '')} dick enter your ass.`);
      }
    }
    // TODO-QSP: dynamic text: Finally, <<$npcdesc>> grabs your tight ass and starts slamming inside you fierce...
    scene.text(`Finally, ${((s as any).npcdesc || '')} grabs your tight ass and starts slamming inside you fiercely. With one final thrust, he finishes balls deep inside you.`);
    (s as any).spafinloc = 4;
    qspCall(s, 'cum_manage', '');
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    (s as any).spafinloc = 3;
    qspCall(s, 'cum_manage', '');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Show him out', goto: ['sexm', 'endsex'] },
    ]);
  } else {
    if (((s as any).mc_inventory ?? 0)?.['lubricant'] === 0) {
      (s as any).lubonus = 2;
      // TODO-QSP: dynamic text: You do not have any lubricant, so <<$npcdesc>> spits on his fingers to lubricate...
      scene.text(`You do not have any lubricant, so ${((s as any).npcdesc || '')} spits on his fingers to lubricate your ass.`);
    } else {
      if (((s as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
        if (!(s as any).mc_inventory) (s as any).mc_inventory = {}; (s as any).mc_inventory['lubricant'] = ((s as any).mc_inventory['lubricant'] ?? 0) - (1);
        (s as any).lubonus = 10;
        scene.text('You take out a tube of lubricant and hand it to the guy. He squeezes a little on the palm of his hand and rubs your anus.');
      }
    }
    // TODO-QSP: dynamic text: <<$npcdesc>> puts you on your stomach on the bed and begins to massage your butt...
    scene.text(`${((s as any).npcdesc || '')} puts you on your stomach on the bed and begins to massage your buttocks and your anus with his fingers. First one, then two.`);
    qspCall(s, 'arousal', 'anal_finger', 10, 'dom');
    qspCall(s, 'stat', '');
    if (((s as any).pcs_ass ?? 0) < 10) {
      scene.text('When he adds a third finger, you involuntarily groan in pain.');
    }
    if (((s as any).pcs_ass ?? 0) >= 10) {
      scene.text('When he adds a third finger, you can feel your anus getting stretched out.');
    }
    // TODO-QSP: dynamic text: <<$npcdesc>> pulls his fingers out of your buttocks, and you feel his hard cock ...
    scene.text(`${((s as any).npcdesc || '')} pulls his fingers out of your buttocks, and you feel his hard cock resting on your ass.`);
    qspCall(s, 'arousal', 'anal', 15, 'dom');
    qspCall(s, 'stat', '');
    if (((s as any).pcs_ass ?? 0) + ((s as any).lubonus ?? 0) < ((s as any).dick_length ?? 0)) {
      scene.text('You scream and bite your lip from the sharp pain you suddenly feel as his cock stretches your ass while he enters.');
    } else {
      if (((s as any).pcs_ass ?? 0) + ((s as any).lubonus ?? 0) >= ((s as any).dick_length ?? 0)) {
        scene.text('You groan slightly when you feel his cock entering your ass.');
      }
    }
    // TODO-QSP: dynamic text: <<$npcdesc>> stops for a moment to give your ass some time to adapt to the big d...
    scene.text(`${((s as any).npcdesc || '')} stops for a moment to give your ass some time to adapt to the big dick inside. Then he starts moving again with a lot more force than before.`);
    if (((s as any).pcs_ass ?? 0) + ((s as any).lubonus ?? 0) + 2 < ((s as any).dick_length ?? 0)) {
      if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
        (s as any).pcs_makeup = 0;
      }
      // TODO-QSP: dynamic text: You cry and bite into the pillow when his <<$dick_desc>> cock begins to fuck you...
      scene.text(`You cry and bite into the pillow when his ${((s as any).dick_desc || '')} cock begins to fuck your ass in full force.`);
    } else {
      if (((s as any).pcs_ass ?? 0) + ((s as any).lubonus ?? 0) + 2 >= ((s as any).dick_length ?? 0)) {
        scene.text('You start to moan rhythmically following the pace of the movements of the dick inside you.');
      }
    }
    // TODO-QSP: dynamic text: Finally, <<$npcdesc>> grabs your tight ass and starts slamming inside you with a...
    scene.text(`Finally, ${((s as any).npcdesc || '')} grabs your tight ass and starts slamming inside you with all his might. With one final thrust, he finishes balls deep inside you.`);
    qspCall(s, 'arousal', 'anal', 10, 'dom', 'rough');
    qspCall(s, 'stat', '');
    if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)) {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (-4));
      // TODO-QSP: dynamic text: <<$npcdesc>> takes his dick out of your ass and sees some traces of excrement. H...
      scene.text(`${((s as any).npcdesc || '')} takes his dick out of your ass and sees some traces of excrement. He says, "Baby, I did not come here to watch Charlie and the Chocolate Factory. You should use an enema before we start."`);
    } else {
      if (((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 2);
        (s as any).spafinloc = 3;
        qspCall(s, 'cum_manage', '');
        // TODO-QSP: dynamic text: <<$npcdesc>> takes his dick out of you and gives you a kiss. You get up and use ...
        scene.text(`${((s as any).npcdesc || '')} takes his dick out of you and gives you a kiss. You get up and use the bathroom.`);
      }
    }
    if (((s as any).pcs_ass ?? 0) < ((s as any).dick ?? 0)) {
      qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Show him out', handler: (st: GameState) => {
    (st as any).lubonus = 0;
  }, goto: ['sexm', 'endsex'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterMiss(s: GameState, scene: SceneBuilder): void {
  (s as any).popolaini = 3;
  qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
  (s as any).sexa = ((s as any).sexa ?? 0) + (1);
  (s as any).pose = 0;
  qspCall(s, 'npcStat', '', ((s as any).npcID ?? 0));
  qspCall(s, 'cum_manage', '');
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/vag/miss/vag.jpg');
  // TODO-QSP: dynamic text: <<$npcdesc>> spreads your legs and begins to fondle your pussy with his fingers....
  scene.text(`${((s as any).npcdesc || '')} spreads your legs and begins to fondle your pussy with his fingers. Once he is satisfied that you are ready, he takes you vigorously.`);
  qspCall(s, 'arousal', 'vaginal_finger', 5);
  qspCall(s, 'arousal', 'vaginal', 25);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Show him out', goto: ['sexm', 'endsex'] },
  ]);
  scene.build();
}

function enterDog(s: GameState, scene: SceneBuilder): void {
  (s as any).popolaini = 3;
  qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
  (s as any).sexa = ((s as any).sexa ?? 0) + (1);
  (s as any).pose = 1;
  qspCall(s, 'npcStat', '', ((s as any).npcID ?? 0));
  qspCall(s, 'cum_manage', '');
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/vag/doggy/dog1.jpg');
  // TODO-QSP: dynamic text: <<$npcdesc>> makes you get on all fours and spread your pussy before he enters.
  scene.text(`${((s as any).npcdesc || '')} makes you get on all fours and spread your pussy before he enters.`);
  qspCall(s, 'arousal', 'vaginal', 30, 'dom');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Show him out', goto: ['sexm', 'endsex'] },
  ]);
  scene.build();
}

function enterStartPod(s: GameState, scene: SceneBuilder): void {
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    // TODO-QSP: dynamic text: <<$npcdesc>> whispers to you, "Take it in your mouth."
    scene.text(`${((s as any).npcdesc || '')} whispers to you, "Take it in your mouth."`);
    qspCall(s, 'willpower', 'bj', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Fuck off!', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Fuck off!', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    qspCall(s, 'lover', 'remove_boyfriend', ((s as any).npcID ?? 0));
  }, goto: ['homes_properties', 'go_straight_home'] },
      ]);
    }
    scene.actions([
      { label: 'Use your mouth', goto: ['sexm', 'blow'] },
    ]);
  } else {
    // TODO-QSP: dynamic text: <<$npcdesc>> begins to strip off your clothes.
    scene.text(`${((s as any).npcdesc || '')} begins to strip off your clothes.`);
    qspCall(s, 'willpower', 'sex', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Fuck off!', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Fuck off!', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    qspCall(s, 'lover', 'remove_boyfriend', ((s as any).npcID ?? 0));
  }, goto: ['homes_properties', 'go_straight_home'] },
      ]);
    }
    scene.actions([
      { label: 'Doggy-Style', goto: ['sexm', 'doggy'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterDoggy(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
  (s as any).sexa = ((s as any).sexa ?? 0) + (1);
  (s as any).pose = 1;
  qspCall(s, 'cum_manage', '');
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/vag/doggy/dog.jpg');
  // TODO-QSP: dynamic text: <<$npcdesc>> makes you get on all fours and spread your pussy before he enters.
  scene.text(`${((s as any).npcdesc || '')} makes you get on all fours and spread your pussy before he enters.`);
  qspCall(s, 'arousal', 'vaginal', 30, 'dom');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Collect clothes and leave', goto: ['homes_properties', 'go_straight_home'] },
  ]);
  scene.build();
}

function enterBlow(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: You squat, and <<$npcdesc>> pulls out his penis.
  scene.text(`You squat, and ${((s as any).npcdesc || '')} pulls out his penis.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Take by mouth', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
    (s as any).bja = ((s as any).bja ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/blowjob/bj24.jpg');
    // TODO-QSP: dynamic text: You wrap your lips around <<$npcdesc>>'s dick.
    scene.text(`You wrap your lips around ${((s as any).npcdesc || '')}'s dick.`);
    if (((s as any).stat ?? 0)?.['bj'] === 1) {
      scene.text('You thought, "Damn, now I am just sitting here sucking his dick."');
    }
    qspCall(s, 'arousal', 'bj', 30, 'dom');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'swallow', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Remove from mouth', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Remove from mouth', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      (s as any).spafinloc = 13;
      qspCall(s, 'cum_manage', '');
      scene.img('images/shared/sex/handjob/hand.jpg');
      // TODO-QSP: dynamic text: You remove his dick from your mouth and finish off <<$npcdesc>> with your hand.
      scene.text(`You remove his dick from your mouth and finish off ${((s as any).npcdesc || '')} with your hand.`);
    } else {
      if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        (s as any).tiprand = Math.floor(Math.random() * 4) + 0;
        if (((s as any).tiprand ?? 0) < 3) {
          (s as any).spafinloc = 13;
          qspCall(s, 'cum_manage', '');
          scene.img('images/shared/sex/handjob/hand.jpg');
          // TODO-QSP: dynamic text: You remove his dick from your mouth and finish off <<$npcdesc>> with your hand.
          scene.text(`You remove his dick from your mouth and finish off ${((s as any).npcdesc || '')} with your hand.`);
        } else {
          (s as any).spafinloc = 11;
          qspCall(s, 'cum_manage', '');
          scene.img('images/shared/sex/cum/facial/facial16.jpg');
          // TODO-QSP: dynamic text: You take his dick out of your mouth and point it right at your face. You are now...
          scene.text(`You take his dick out of your mouth and point it right at your face. You are now covered with ${((s as any).npcdesc || '')}'s warm and sticky cum.`);
        }
      } else {
        (s as any).spafinloc = 11;
        qspCall(s, 'cum_manage', '');
        scene.img('images/shared/sex/cum/facial/facial16.jpg');
        // TODO-QSP: dynamic text: <<$npcdesc>> holds you by your hair. He takes his dick out of your mouth and cum...
        scene.text(`${((s as any).npcdesc || '')} holds you by your hair. He takes his dick out of your mouth and cums on your face, covering it with warm and sticky cum.`);
      }
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
  }, goto: ['homes_properties', 'go_straight_home'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Continue to suck', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0));
    scene.img('images/shared/sex/cum/mouth/cum30.jpg');
    // TODO-QSP: dynamic text: A hot jet of sperm hits you in the mouth. You start to swallow his cum while <<$...
    scene.text(`A hot jet of sperm hits you in the mouth. You start to swallow his cum while ${((s as any).npcdesc || '')} continues to cum in your mouth. Finally, the flow of hot liquid with a pungent taste stops.`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
  }, goto: ['homes_properties', 'go_straight_home'] },
    ]);
  } },
    ]);
  } },
    { label: 'Masturbate him', handler: (st: GameState) => {
    (s as any).hja = ((s as any).hja ?? 0) + (1);
    (s as any).spafinloc = 13;
    qspCall(s, 'cum_manage', '');
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/handjob/hand1.jpg');
    // TODO-QSP: dynamic text: You take his <<$dick_desc>> penis in your hands and begin to caress it gently.
    scene.text(`You take his ${((s as any).dick_desc || '')} penis in your hands and begin to caress it gently.`);
    scene.text('Soon, your skillful movements make the guy cum in your hands, covering them with warm and sticky sperm.');
    if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
    } else {
      if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * ((-2) - (-3) + 1)) + ((-3))));
      } else {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (-5));
      }
    }
    qspCall(s, 'arousal', 'hj', 30, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wipe your hands and walk away', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
  }, goto: ['homes_properties', 'go_straight_home'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterGangrape(s: GameState, scene: SceneBuilder): void {
  scene.text('You begin to struggle, and one of the guys hits you with his hand on your cheek, saying, "Shut up slut! Now spread your legs! We will fuck you up now!"');
  qspCall(s, 'npcgeneratec', '', 0, 'Stranger', Math.floor(Math.random() * 28) + 18);
  qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0), 'a');
  // TODO-QSP: end
  scene.actions([
    { label: 'Obey', goto: ['sexm', 'gangbang'] },
    { label: 'Start a fight', handler: (st: GameState) => {
    qspCall(s, 'fight', 'initFight');
    qspCall(s, 'fight_npcdata', 'stranger');
  }, goto: ['fight', 'start'] },
  ]);
  scene.build();
}

function enterGangbang(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_pervert ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 2);
  } else {
    qspCall(s, 'lover', 'remove_boyfriend', ((s as any).npcID ?? 0));
  }
  if (!(s as any).stat) (s as any).stat = {}; (s as any).stat['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (1);
  (s as any).guy = ((s as any).guy ?? 0) + (4);
  (s as any).cumprecheck = 1;
  qspCall(s, 'cum_manage', '', '', ((s as any).boy1 ?? 0));
  (s as any).spafinloc = 11;
  qspCall(s, 'cum_manage', '', '', ((s as any).boy1 ?? 0));
  (s as any).spafinloc = 12;
  qspCall(s, 'cum_manage', '', '', ((s as any).boy1 ?? 0));
  qspCall(s, 'npcgeneratec', '', 0, 'Stranger', Math.floor(Math.random() * 28) + 18);
  qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0), 'b');
  (s as any).spafinloc = 11;
  qspCall(s, 'cum_manage', '', '', ((s as any).boy2 ?? 0));
  (s as any).spafinloc = 12;
  qspCall(s, 'cum_manage', '', '', ((s as any).boy2 ?? 0));
  qspCall(s, 'npcgeneratec', '', 0, 'Stranger', Math.floor(Math.random() * 28) + 18);
  qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0), 'b');
  (s as any).spafinloc = 11;
  qspCall(s, 'cum_manage', '', '', ((s as any).boy2 ?? 0));
  (s as any).spafinloc = 12;
  qspCall(s, 'cum_manage', '', '', ((s as any).boy2 ?? 0));
  qspCall(s, 'npcgeneratec', '', 0, 'Stranger', Math.floor(Math.random() * 28) + 18);
  qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0), 'b');
  (s as any).spafinloc = 11;
  qspCall(s, 'cum_manage', '', '', ((s as any).boy2 ?? 0));
  (s as any).spafinloc = 12;
  qspCall(s, 'cum_manage', '', '', ((s as any).boy2 ?? 0));
  qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
  qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
  qspCall(s, 'arousal_funcs', 'stretch', 'oral', 1);
  if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
    (s as any).pcs_makeup = 0;
  }
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/group/gangbang.jpg');
  scene.text('One of the guys lives nearby, and he drags you into his apartment. There, he starts tearing off your clothes.');
  scene.text('Once you are completely naked, they put you on your knees. One of them shoves his dick inside your mouth. They give you a cock in each hand and instruct you to start jerking them off. They make you feel like a real whore.');
  scene.text('Suddenly, one of the boys pushes you on the couch and grabs you by the waist. He thrusts his cock deep inside your pussy. You do not have time to react to this because you get two cocks shoved into your mouth at once immediately after.');
  scene.text('You feel a cold sensation on your ass. It looks like they are rubbing some lubrication there. Then you feel something big and solid at your rear entrance.');
  qspCall(s, 'arousal', 'bj', 10, 'gangbang', 'sub');
  qspCall(s, 'arousal', 'hj', (-10), 'gangbang', 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Moan', handler: (st: GameState) => {
    scene.img('images/shared/sex/group/gangbang1.jpg');
    scene.text('You moan when you feel a fat cock entering your ass. Now you are filled up in every hole.');
    qspCall(s, 'arousal', 'bj', 10, 'gangbang', 'sub');
    qspCall(s, 'arousal', 'vaginal', 10, 'gangbang', 'sub');
    qspCall(s, 'arousal', 'anal', (-10), 'gangbang', 'sub');
    qspCall(s, 'stat', '');
    if (((s as any).pcs_ass ?? 0) >= 10) {
      scene.text('Two cocks are hammering you from behind. You can feel them rubbing through the thin barriers between the anus and the vaginal wall. You start to get wet while the two cocks enthusiastically continue to pound.');
    } else {
      if (((s as any).pcs_ass ?? 0) < 10) {
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + ((10 - ((s as any).pcs_ass ?? 0)));
        scene.text('You cry very hard from the severe pain you feel from the hard cock ramming your ass while another cock is fucking you in your pussy.');
      }
    }
    if (((s as any).pcs_horny ?? 0) >= 90) {
    }
    scene.text('It seems the guys have played enough with you, and they have decided to cum on your face. They remove their dicks from your holes and point them at you.');
    scene.actions([
      { label: 'Get on your knees', handler: (st: GameState) => {
    scene.img('images/shared/sex/group/gangbang2.jpg');
    scene.text('You humbly kneel before the guys. They quickly surround you, and they all start to cum on your face, covering it with sticky, warm and fragrant sperm.');
    scene.text('After the boys spend their load, they lose interest in you and begin to leave.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
  }, goto: ['homes_properties', 'go_straight_home'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterPopala(s: GameState, scene: SceneBuilder): void {
  (s as any).sexpartkno = 1;
  qspCall(s, 'npcStat', '', ((s as any).npcID ?? 0), 'a');
  qspCall(s, 'npcStat', '', ((s as any).husID ?? 0));
  if (((s as any).popolaini ?? 0) === 1) {
    scene.img('images/characters/city/husband/sex/p0.jpg');
    scene.text('Just as you are about to go to the bathroom to wash up, you husband walks in and catches you kneeling in front of a naked man while you are covered in semen.');
  } else {
    if (((s as any).popolaini ?? 0) === 2) {
      scene.img('images/characters/city/husband/sex/p5.jpg');
      scene.text('Just as you change position, your husband enters the room.');
    }
  }
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    // TODO-QSP: dynamic text: "Honey what's happening here? why are you cheating on me?" stammers <<$npcdesc>>...
    scene.text(`"Honey what's happening here? why are you cheating on me?" stammers ${((s as any).npcdesc || '')} while looking at you.`);
    // TODO-QSP: dynamic text: "<<$npcdesc>> it's not what you think. It's just sex, no feelings, I only love y...
    scene.text(`"${((s as any).npcdesc || '')} it's not what you think. It's just sex, no feelings, I only love you. He does not mean anything. Come to me, I'll show you how much I love you. " you answer him. You know you are caught red-handed, so you make up some excuse on the spot, but you don't really think he will believe this.`);
    if (((s as any).npc_pervert ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      scene.text('"No, I\'m going, you betrayed our love." he falters and runs out of the room almost sobbing.');
      qspCall(s, 'lover_love', 'divorce');
      if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID1 ?? 0)] === 1) {
        scene.text('"Wait, you\'re married! You deceived me even though I loved you. Goodbye!" your guy shouts at you and runs after your husband.');
        qspCall(s, 'lover', 'remove_boyfriend', ((s as any).npcID ?? 0));
        scene.actions([
          { label: 'Leave', goto: ['homes_properties', 'go_straight_home'] },
        ]);
      } else {
        if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID1 ?? 0)] === 0) {
          // TODO-QSP: dynamic text: "Well, I see you are not only for me, so perhaps I'll go, but if you want, I can...
          scene.text(`"Well, I see you are not only for me, so perhaps I'll go, but if you want, I can stay and comfort you " says ${((s as any).npcdesc1 || '')}.`);
          scene.actions([
            { label: 'Let him go', goto: ['homes_properties', 'go_straight_home'] },
            { label: 'Let him stay', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
    (s as any).picrand = 83;
    if (((s as any).popolaini ?? 0) === 3) {
      (s as any).picrand = 84;
    }
  }, goto: ['sex', 'var'] },
          ]);
        } else {
          // TODO-QSP: dynamic text: "This is a surprise, but oh well that clown ran away, and I am once again ready....
          scene.text(`"This is a surprise, but oh well that clown ran away, and I am once again ready. Let's continue and let this wimp go" says ${((s as any).npcdesc1 || '')}, clearly intending to continue the evening.`);
          scene.actions([
            { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
  }, goto: ['homes_properties', 'go_straight_home'] },
            { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
    (s as any).picrand = 83;
    if (((s as any).popolaini ?? 0) === 3) {
      (s as any).picrand = 84;
    }
  }, goto: ['sex', 'var'] },
          ]);
        }
      }
    } else {
      // TODO-QSP: dynamic text: "You really only love me?" asks <<$npcdesc>>.
      scene.text(`"You really only love me?" asks ${((s as any).npcdesc || '')}.`);
      // TODO-QSP: dynamic text: "Yes, I will do everything with you I did with him, but it will be with love, an...
      scene.text(`"Yes, I will do everything with you I did with him, but it will be with love, and you will understand the difference," you reply. You are amazed he believes this nonsense. ${((s as any).npcdesc || '')} comes up to you, and you unbutton his pants to reveal his dick.`);
      if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID1 ?? 0)] === 1) {
        scene.text('"So you\'re married! You deceived me even though I loved you. You are a despicable liar. Goodbye!" your guy shouted and ran out of the room.');
        scene.text('"He\'s right, you\'re a liar, and you do not deserve me, you\'re a fallen woman, I don\'t want to see you again." You husband bursts into tears and runs out to follow the guy.');
        qspCall(s, 'lover_love', 'divorce');
        qspCall(s, 'lover', 'remove_boyfriend', ((s as any).npcID1 ?? 0));
        scene.actions([
          { label: 'Leave', goto: ['homes_properties', 'go_straight_home'] },
        ]);
      } else {
        if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID1 ?? 0)] === 0) {
          // TODO-QSP: dynamic text: <<$npcdesc1>> stands by you and watches as you fuck your husband. "Wow, you seem...
          scene.text(`${((s as any).npcdesc1 || '')} stands by you and watches as you fuck your husband. "Wow, you seem to really enjoy sex with your husband. This really can't compare to what we did. Well maybe you can use your mouth, and I can still be useful," he says.`);
          // TODO-QSP: dynamic text: "Sure, come on," pipes up <<$npcdesc>>. "Dear lie down on the bed."
          scene.text(`"Sure, come on," pipes up ${((s as any).npcdesc || '')}. "Dear lie down on the bed."`);
          scene.actions([
            { label: 'Lie down', handler: (st: GameState) => {
    if (!(s as any).spouseVars) (s as any).spouseVars = {}; (s as any).spouseVars['houseslut'] = ((s as any).spouseVars['houseslut'] ?? 0) + (1);
    scene.img('images/characters/city/husband/sex/p1.jpg');
    // TODO-QSP: dynamic text: You lie down on the bed, and <<$npcdesc>> enters your pussy while <<$npcdesc1>> ...
    scene.text(`You lie down on the bed, and ${((s as any).npcdesc || '')} enters your pussy while ${((s as any).npcdesc1 || '')} lies before you and moves his cock to your mouth. You diligently work your husband's cock while not forgetting your lover's cock in your mouth.`);
    // TODO-QSP: dynamic text: "Mmm <<$pcs_nickname>>, I have never seen you so enthusiastic when we were toget...
    scene.text(`"Mmm ${((s as any).pcs_nickname || '')}, I have never seen you so enthusiastic when we were together. Maybe we should try some other positions," proposes ${((s as any).npcdesc1 || '')}, and your husband agreed.`);
    qspCall(s, 'arousal', 'vaginal', 10);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
    if (((s as any).popolaini ?? 0) === 1) {
      (s as any).picrand = 40;
    } else {
      if (((s as any).popolaini ?? 0) === 2) {
        (s as any).picrand = 41;
      } else {
        if (((s as any).popolaini ?? 0) === 3) {
          (s as any).picrand = 42;
        }
      }
    }
  }, goto: ['sexdvoe', 'var'] },
    ]);
  } },
          ]);
        } else {
          // TODO-QSP: dynamic text: "That's right, her mouth is great, but her ass is even better. You fuck her ass,...
          scene.text(`"That's right, her mouth is great, but her ass is even better. You fuck her ass, and I'll fuck her mouth. With her ass, she can show you if she really loves you or not," says ${((s as any).npcdesc1 || '')}, explicitly directed at your husband.`);
          // TODO-QSP: dynamic text: "Yeah, come to bed, see how I am going to love your ass," says <<$npcdesc>>.
          scene.text(`"Yeah, come to bed, see how I am going to love your ass," says ${((s as any).npcdesc || '')}.`);
          scene.actions([
            { label: 'Lie down', handler: (st: GameState) => {
    if (!(s as any).spouseVars) (s as any).spouseVars = {}; (s as any).spouseVars['houseslut'] = ((s as any).spouseVars['houseslut'] ?? 0) + (1);
    scene.img('images/characters/city/husband/sex/p2.jpg');
    // TODO-QSP: dynamic text: You lie down on the bed, and <<$npcdesc>> enters you in the anus, while <<$npcde...
    scene.text(`You lie down on the bed, and ${((s as any).npcdesc || '')} enters you in the anus, while ${((s as any).npcdesc1 || '')} lies before you, presenting his cock to your mouth. You diligently work your husband's cock in your ass while not forgetting your lover's cock in your mouth.`);
    // TODO-QSP: dynamic text: "If you remove your dick from her ass now, then she can really show you how much...
    scene.text(`"If you remove your dick from her ass now, then she can really show you how much she loves you," proposes ${((s as any).npcdesc1 || '')}, and your husband agreed.`);
    qspCall(s, 'arousal', 'anal', 10);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
    if (((s as any).popolaini ?? 0) === 1) {
      (s as any).picrand = 40;
    } else {
      if (((s as any).popolaini ?? 0) === 2) {
        (s as any).picrand = 41;
      } else {
        if (((s as any).popolaini ?? 0) === 3) {
          (s as any).picrand = 42;
        }
      }
    }
  }, goto: ['sexdvoe', 'var'] },
    ]);
  } },
          ]);
        }
      }
    }
  } else {
    if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      (s as any).fingal = ((s as any).fingal ?? 0) + (1);
      scene.text('"Oh damn," is the last thing you hear before you are thrown to the wall by a powerful blow to the face.');
      if (((s as any).npc_pervert ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        (s as any).pcs_makeup = 0;
        (s as any).minut = ((s as any).minut ?? 0) + 120;
        (s as any).stolmoney = 0;
        qspCall(s, 'money', 'set', 0);
        if (!(s as any).mc_inventory) (s as any).mc_inventory = {}; (s as any).mc_inventory['tech_computer'] = 0;
        // TODO-QSP: dynamic text: While getting up, you can see in the corner of the room your husband giving blow...
        scene.text(`While getting up, you can see in the corner of the room your husband giving blow after blow to ${((s as any).npcdesc1 || '')} as he tries hard to escape out the door. Finally, your lover succeeds, and he runs out of the apartment at a breakneck pace.`);
        // TODO-QSP: dynamic text: <<$npcdesc>> looks at you. "Here… you… whore… cock… and pussy… and ass… and in y...
        scene.text(`${((s as any).npcdesc || '')} looks at you. "Here… you… whore… cock… and pussy… and ass… and in your mouth," he says putting a strong emphasis on every word. At the end of the last word, he kicks you in the face, rendering you unconscious. You wake up two hours later. Your husband is gone and so is all of his stuff. Some of your stuff is missing too.`);
        qspCall(s, 'lover_love', 'divorce');
        qspCall(s, 'lover', 'remove_boyfriend', ((s as any).npcID1 ?? 0));
        scene.actions([
          { label: 'Leave', goto: ['homes_properties', 'go_straight_home'] },
        ]);
      } else {
        qspCall(s, 'lover', 'remove_boyfriend', ((s as any).npcID1 ?? 0));
        if (!(s as any).spouseVars) (s as any).spouseVars = {}; (s as any).spouseVars['houseslut'] = ((s as any).spouseVars['houseslut'] ?? 0) + (1);
        // TODO-QSP: dynamic text: "Oh damn, she allowed you inside of her?" asks <<$npcdesc>>. "So now you will ne...
        scene.text(`"Oh damn, she allowed you inside of her?" asks ${((s as any).npcdesc || '')}. "So now you will need to pay me for the pleasure of using her. This is my slut!" he adds, referring to you. "Once that is settled, we will fuck her together," he continues, lifting you off the floor and throwing you on the bed.`);
        if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID1 ?? 0)] === 1) {
          // TODO-QSP: dynamic text: <<$npcdesc1>> tries to protest, but after seeing your husband's face contorted w...
          scene.text(`${((s as any).npcdesc1 || '')} tries to protest, but after seeing your husband's face contorted with rage, he agrees`);
        } else {
          if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID1 ?? 0)] === 0) {
            // TODO-QSP: dynamic text: <<$npcdesc1>> silently complies with your husband's request.
            scene.text(`${((s as any).npcdesc1 || '')} silently complies with your husband's request.`);
          } else {
            // TODO-QSP: dynamic text: <<$npcdesc1>> gladly accepts
            scene.text(`${((s as any).npcdesc1 || '')} gladly accepts`);
          }
        }
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    if (((s as any).popolaini ?? 0) === 1) {
      (s as any).picrand = 40;
    } else {
      if (((s as any).popolaini ?? 0) === 2) {
        (s as any).picrand = 41;
      } else {
        if (((s as any).popolaini ?? 0) === 3) {
          (s as any).picrand = 42;
        }
      }
    }
  }, goto: ['sexdvoe', 'var'] },
        ]);
      }
    } else {
      // TODO-QSP: dynamic text: "What the hell is going on here? " says <<$npcdesc>> while looking at you.
      scene.text(`"What the hell is going on here? " says ${((s as any).npcdesc || '')} while looking at you.`);
      // TODO-QSP: dynamic text: "<<$npcdesc>> it's not what you think. It's just sex, no feelings, I only love y...
      scene.text(`"${((s as any).npcdesc || '')} it's not what you think. It's just sex, no feelings, I only love you. He does not mean anything. Come to me, I'll show you how much I love you," you answer him. You know you are caught red-handed, so you make up some excuse on the spot, but you don't really think he will believe this.`);
      qspCall(s, 'lover_love', 'divorce');
      if (((s as any).npc_pervert ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        scene.text('"You filthy slut. What love? You fuck everyone. Let\'s see if you will still like it in the forest you whore," he says and leaves the room, slamming the door.');
        if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID1 ?? 0)] === 1) {
          qspCall(s, 'lover', 'remove_boyfriend', ((s as any).npcID1 ?? 0));
          scene.text('"Wait, you\'re married! You deceived me even though I loved you. Goodbye!" your guy shouts and runs out of the room.');
          scene.actions([
            { label: 'Leave', goto: ['homes_properties', 'go_straight_home'] },
          ]);
        } else {
          if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID1 ?? 0)] === 0) {
            // TODO-QSP: dynamic text: "Well, I see I am not the only one for you, so perhaps I'll go, but if you want,...
            scene.text(`"Well, I see I am not the only one for you, so perhaps I'll go, but if you want, I can stay and comfort you" says ${((s as any).npcdesc1 || '')}.`);
            scene.actions([
              { label: 'Let him go', goto: ['homes_properties', 'go_straight_home'] },
              { label: 'Let him stay', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
    (s as any).picrand = 83;
    if (((s as any).popolaini ?? 0) === 3) {
      (s as any).picrand = 84;
    }
  }, goto: ['sex', 'var'] },
            ]);
          } else {
            // TODO-QSP: dynamic text: "Well this is a surprise, but oh well it looks like your hubby dumped you, and I...
            scene.text(`"Well this is a surprise, but oh well it looks like your hubby dumped you, and I am once again ready, let's continue. Let this cuckold run away like a little bitch," says ${((s as any).npcdesc1 || '')}, clearly intending to continue the evening.`);
            scene.actions([
              { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
  }, goto: ['homes_properties', 'go_straight_home'] },
              { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
    (s as any).picrand = 83;
    if (((s as any).popolaini ?? 0) === 3) {
      (s as any).picrand = 84;
    }
  }, goto: ['sex', 'var'] },
            ]);
          }
        }
      } else {
        qspCall(s, 'lover', 'remove_boyfriend', ((s as any).npcID ?? 0));
        // TODO-QSP: dynamic text: "Can you even hear yourself while you are talking nonsense?" asks <<$npcdesc>>.
        scene.text(`"Can you even hear yourself while you are talking nonsense?" asks ${((s as any).npcdesc || '')}.`);
        scene.text('"I\'m sorry," you mutter while looking at the floor.');
        // TODO-QSP: dynamic text: <<$npcdesc>> comes up to you. "I'll leave today and will file for divorce, but f...
        scene.text(`${((s as any).npcdesc || '')} comes up to you. "I'll leave today and will file for divorce, but first, I will punish you," he says while unzipping his pants and pulling out his penis. "Well, what are you waiting for? Suck, whore!"`);
        if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID1 ?? 0)] === 1) {
          scene.actions([
            { label: 'Take by mouth', handler: (st: GameState) => {
    (s as any).spafinloc = 12;
    qspCall(s, 'cum_manage', '');
    scene.img('images/characters/city/husband/sex/p3.jpg');
    scene.text('"So you\'re married? You cheated on me even though I loved you. You despicable liar! goodbye!" your guy shouts and runs out of the room.');
    // TODO-QSP: dynamic text: <<$npcdesc>> does not pay any attention to him. He puts his dick in your mouth a...
    scene.text(`${((s as any).npcdesc || '')} does not pay any attention to him. He puts his dick in your mouth and grabs your head. He literally starts to fuck you in the mouth with each thrust pushing it deeper. You frantically gasp, trying to breathe, desperately trying not to choke as he continues. Suddenly, he makes an abrupt movement, and his cock pops into your throat. You try to pull away, but he sternly tells you to take it. He gives you a couple of seconds to get used to the dick in your throat and begins to thrust. You are still not getting enough air, and you frantically begin to beat him to get free, but this only makes ${((s as any).npcdesc || '')} tighten his grip on your head. When you're starting to lose consciousness, he finally finishes. You feel his sperm go down your throat. After a couple of strong aftershocks, he lets you go. You collapse on the floor, coughing up sperm mixed with your saliva and wheezing air. ${((s as any).npcdesc || '')} looks at you as you writhe on the floor. He spits on the floor next to you and leaves the room.`);
    qspCall(s, 'arousal', 'bj', 10, 'sub', 'deepthroat');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
  }, goto: ['homes_properties', 'go_straight_home'] },
    ]);
  } },
          ]);
        } else {
          if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID1 ?? 0)] === 0) {
            // TODO-QSP: dynamic text: <<$npcdesc1>> stands and watches as you get fucked by your husband. "Well, I sho...
            scene.text(`${((s as any).npcdesc1 || '')} stands and watches as you get fucked by your husband. "Well, I should probably go," he says.`);
            // TODO-QSP: dynamic text: "Wait! This whore can handle two cocks. You can join us if you want," offers <<$...
            scene.text(`"Wait! This whore can handle two cocks. You can join us if you want," offers ${((s as any).npcdesc || '')}.`);
            // TODO-QSP: dynamic text: "Thanks for the offer, I do believe she will be able to handle me," replies <<$n...
            scene.text(`"Thanks for the offer, I do believe she will be able to handle me," replies ${((s as any).npcdesc1 || '')}.`);
            scene.actions([
              { label: 'Lie on the bed', handler: (st: GameState) => {
    scene.img('images/characters/city/husband/sex/p1.jpg');
    // TODO-QSP: dynamic text: You lie down on the bed, and <<$npcdesc>> enters your pussy while <<$npcdesc1>> ...
    scene.text(`You lie down on the bed, and ${((s as any).npcdesc || '')} enters your pussy while ${((s as any).npcdesc1 || '')} lies before you and moves his cock to your mouth. You diligently work your husband's cock while not forgetting your lover's cock in your mouth.`);
    scene.text('"She is still a great fuck, " says your husband.');
    // TODO-QSP: dynamic text: "I could not agree more," replies <<$npcdesc1>>.
    scene.text(`"I could not agree more," replies ${((s as any).npcdesc1 || '')}.`);
    qspCall(s, 'arousal', 'bj', 10, ((s as any).npcID ?? 0), 'sub', 'group');
    qspCall(s, 'arousal', 'vaginal', (-10), ((s as any).npcID ?? 0), 'sub', 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((s as any).popolaini ?? 0) === 1) {
      (s as any).picrand = 40;
    } else {
      if (((s as any).popolaini ?? 0) === 2) {
        (s as any).picrand = 41;
      } else {
        if (((s as any).popolaini ?? 0) === 3) {
          (s as any).picrand = 42;
        }
      }
    }
  }, goto: ['sexdvoe', 'var'] },
    ]);
  } },
            ]);
          } else {
            // TODO-QSP: dynamic text: "That's right, this whore should be punished. If you want to let me help, we can...
            scene.text(`"That's right, this whore should be punished. If you want to let me help, we can do it together, and she will not be able to sit down for a week," says ${((s as any).npcdesc1 || '')}, explicitly riling up your husband.`);
            // TODO-QSP: dynamic text: "Yes, let's punish the bitch, and then I can go to the authorities to initiate m...
            scene.text(`"Yes, let's punish the bitch, and then I can go to the authorities to initiate my divorce and remove this whore from my life," says ${((s as any).npcdesc || '')}.`);
            scene.actions([
              { label: 'Lie on the bed', handler: (st: GameState) => {
    scene.img('images/characters/city/husband/sex/p2.jpg');
    // TODO-QSP: dynamic text: You lie down on the bed, and <<$npcdesc>> enters your anus while <<$npcdesc1>> l...
    scene.text(`You lie down on the bed, and ${((s as any).npcdesc || '')} enters your anus while ${((s as any).npcdesc1 || '')} lies before you, presenting his cock to your mouth. You diligently work your husband's cock in your ass while not forgetting your lover's cock in your mouth.`);
    // TODO-QSP: dynamic text: "Wow, even now she knows how to work that ass," says <<$npcdesc>>.
    scene.text(`"Wow, even now she knows how to work that ass," says ${((s as any).npcdesc || '')}.`);
    // TODO-QSP: dynamic text: "Yeah, please leave some for me," replies <<$npcdesc1>>.
    scene.text(`"Yeah, please leave some for me," replies ${((s as any).npcdesc1 || '')}.`);
    qspCall(s, 'arousal', 'bj', 10, ((s as any).npcID1 ?? 0), 'sub', 'group');
    qspCall(s, 'arousal', 'anal', (-10), ((s as any).npcID ?? 0), 'sub', 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((s as any).popolaini ?? 0) === 1) {
      (s as any).picrand = 40;
    } else {
      if (((s as any).popolaini ?? 0) === 2) {
        (s as any).picrand = 41;
      } else {
        if (((s as any).popolaini ?? 0) === 3) {
          (s as any).picrand = 42;
        }
      }
    }
  }, goto: ['sexdvoe', 'var'] },
    ]);
  } },
            ]);
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterEndsex(s: GameState, scene: SceneBuilder): void {
  if (((s as any).husID ?? 0) !== ''  &&  ((s as any).hour ?? 0) < 17  &&  ((s as any).hour ?? 0) > 7  &&  (!((s as any).boycherdaksex ?? 0))) {
    scene.actions([{ label: 'Continue', goto: ['sexm', 'popala'] }]);
  }
  (s as any).boycherdaksex = 0;
  qspCall(s, 'arousal', 'end');
  scene.actions([{ label: 'Continue', goto: ['homes_properties', 'go_straight_home'] }]);
  // TODO-QSP: end
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
    case 'variant':
      enterVariant(s, scene);
      break;
    case 'minet':
      enterMinet(s, scene);
      break;
    case 'hand':
      enterHand(s, scene);
      break;
    case 'kuni':
      enterKuni(s, scene);
      break;
    case 'strapon':
      enterStrapon(s, scene);
      break;
    case 'anal':
      enterAnal(s, scene);
      break;
    case 'miss':
      enterMiss(s, scene);
      break;
    case 'dog':
      enterDog(s, scene);
      break;
    case 'startPod':
      enterStartPod(s, scene);
      break;
    case 'doggy':
      enterDoggy(s, scene);
      break;
    case 'blow':
      enterBlow(s, scene);
      break;
    case 'gangrape':
      enterGangrape(s, scene);
      break;
    case 'gangbang':
      enterGangbang(s, scene);
      break;
    case 'popala':
      enterPopala(s, scene);
      break;
    case 'endsex':
      enterEndsex(s, scene);
      break;
    default:
      enterDefault(s, scene);
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
