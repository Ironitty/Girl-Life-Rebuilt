import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterAbdCustomerGate(s: GameState, scene: SceneBuilder): void {
  scene.text('Your master approaches you. "Hello, slave."');
  scene.text('"I have a customer here who came to rent you for a while. Do whatever he asks of you."');
  (s as any).buyout = 0;
  scene.actions([
    { label: 'Yes, Master', goto: ['abductionCustomer', 'abdCustomerGo'] },
  ]);
  scene.build();
}

function enterAbdCustomerGateBuyout(s: GameState, scene: SceneBuilder): void {
  scene.text('Your master approaches you. "Hello, slave."');
  scene.text('"I have a customer here that came to rent you for a while. Do whatever he asks of you."');
  (s as any).buyout = 1;
  scene.actions([
    { label: 'Yes, Master', goto: ['abductionCustomer', 'abdCustomerGo'] },
  ]);
  scene.build();
}

function enterAbdCustomerGo(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  (s as any).i = Math.floor(Math.random() * 3) + 1;
  scene.img(`images/locations/shared/abduction/sex/ledonfour${((s as any).i ?? 0)}.mp4`);
  scene.text('Your master removes your regular chain and attaches a leash to your collar.');
  scene.text('You are led up the stairs into the house above your cellar.');
  scene.text('When you enter the hall, your master orders you on your knees. "Crawl on your hands and legs like the bitch you are!"');
  if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
    scene.text('You are led to the room where your customer awaits. Your leash is handed to him, and your master leaves. The room\'s only door closes behind him, leaving you alone with your customer.');
  } else {
    scene.text('You are led to the room where your customer awaits. Your leash is handed to him.');
  }
  scene.actions([
    { label: 'Continue', goto: ['abductionCustomer', 'abdCustomer'] },
  ]);
  scene.build();
}

function enterAbdCustomer(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  (s as any).charTypeRand = 3;
  (s as any).bodyTypeRand = 3;
  (s as any).heightTypeRand = 3;
  (s as any).customerAge = Math.floor(Math.random() * 76) + 15;
  (s as any).raceRand = Math.floor(Math.random() * 3) + 0;
  if (((s as any).raceRand ?? 0) === 0) {
    (s as any).dickChance = 30;
    (s as any).charTypeRand = ((s as any).charTypeRand ?? 0) + (((s as any).rand ?? 0)(-3, 2));
    (s as any).bodyTypeRand = ((s as any).bodyTypeRand ?? 0) + (((s as any).rand ?? 0)(-2, 8));
    (s as any).heightTypeRand = ((s as any).heightTypeRand ?? 0) + (((s as any).rand ?? 0)(-1, 6));
  } else {
    (s as any).dickChance = 40;
    (s as any).charTypeRand = ((s as any).charTypeRand ?? 0) + (Math.floor(Math.random() * 3) + 0);
    (s as any).bodyTypeRand = ((s as any).bodyTypeRand ?? 0) + (Math.floor(Math.random() * 7) + 0);
    (s as any).heightTypeRand = ((s as any).heightTypeRand ?? 0) + (Math.floor(Math.random() * 7) + 0);
    if (((s as any).raceRand ?? 0) === 2) {
      (s as any).dickChance = 20;
      (s as any).charTypeRand = ((s as any).charTypeRand ?? 0) + (((s as any).rand ?? 0)(-2, 2));
      (s as any).bodyTypeRand = ((s as any).bodyTypeRand ?? 0) + (((s as any).rand ?? 0)(-6, 2));
      (s as any).heightTypeRand = ((s as any).heightTypeRand ?? 0) + (((s as any).rand ?? 0)(-4, 1));
    }
    if (qspFunc(s, 'pcs_has_attr', 'sex_virgin') === 0) {
      (s as any).dick = 28;
    } else {
      (s as any).dick = 24;
      (s as any).dickRand = Math.floor(Math.random() * 100) + 1;
      if (((s as any).dickRand ?? 0) <= ((s as any).dickChance ?? 0)) {
        (s as any).dick = Math.floor(Math.random() * 26) + 15;
      } else {
        (s as any).dick = Math.floor(Math.random() * 15) + 10;
        (s as any).dick = Math.floor(Math.random() * 10) + 5;
      }
    }
    (s as any).vagDMG = (((s as any).dick ?? 0) - ((s as any).pcs_vag ?? 0)) * 2;
    (s as any).assDMG = (((s as any).dick ?? 0) - ((s as any).pcs_ass ?? 0)) * 2;
    (s as any).throatDMG = (((s as any).dick ?? 0) - ((s as any).pcs_throat ?? 0)) * 2;
    if (((s as any).dick ?? 0) >= 30) {
      (s as any).cumVol = Math.floor(Math.random() * 2) + 4;
    } else {
      (s as any).cumVol = ((s as any).cumVol ?? 0) + (1);
      (s as any).cumVol = Math.floor(Math.random() * 3) + 3;
      if (((s as any).dick ?? 0) >= 20) {
        (s as any).cumVol = Math.floor(Math.random() * 4) + 2;
      } else {
        (s as any).cumVol = Math.floor(Math.random() * 3) + 2;
        if (((s as any).dick ?? 0) >= 10) {
          (s as any).cumVol = ((s as any).cumVol ?? 0) - (1);
          (s as any).cumVol = Math.floor(Math.random() * 4) + 1;
        } else {
          (s as any).cumVol = ((s as any).cumVol ?? 0) - (2);
          (s as any).cumVol = Math.floor(Math.random() * 3) + 1;
        }
        if (((s as any).cumVol ?? 0) <= 1) {
        } else {
          if (((s as any).cumVol ?? 0) === 3) {
          } else {
            if (((s as any).cumVol ?? 0) >= 5) {
            }
            if (((s as any).charTypeRand ?? 0) <= 1) {
            } else {
              if (((s as any).charTypeRand ?? 0) >= 5) {
              }
              if (((s as any).bodyTypeRand ?? 0) <= 1) {
              } else {
                if (((s as any).bodyTypeRand ?? 0) >= 5  &&  ((s as any).bodyTypeRand ?? 0) <= 6) {
                }
                if (((s as any).heightTypeRand ?? 0) <= 1) {
                } else {
                  if (((s as any).heightTypeRand ?? 0) >= 5) {
                  }
                  if (((s as any).customerAge ?? 0) <= 18) {
                  } else {
                    if (((s as any).customerAge ?? 0) > 30  &&  ((s as any).customerAge ?? 0) <= 45) {
                    } else {
                      if (((s as any).customerAge ?? 0) > 60  &&  ((s as any).customerAge ?? 0) <= 80) {
                      }
                      if (((s as any).buyout ?? 0) === 1) {
                        scene.img('images/locations/shared/abduction/sex/slavewhorekneel1.jpg');
                        scene.text('As you are led to the room as usual, you see the man standing opposite of you.');
                        scene.text('Right away, you can see that he is just another bastard coming here to use your body.');
                        scene.text('Your master leaves you in the center of the room, kneeling with the leash attached to your collar.');
                        scene.text('As the door closes behind him, the customer slowly turns so you can finally see his face.');
                        scene.actions([
                          { label: 'Look at his face', goto: ['abductionCustomer', 'abdCustomer-buyout1'] },
                        ]);
                      } else {
                        scene.img('images/locations/shared/abduction/sex/slavewhorekneelmaster.mp4');
                        // TODO-QSP: dynamic text: The customer is a <<$heightType>> <<$bodyType>> <<$raceType>>.
                        scene.text(`The customer is a ${((s as any).heightType ?? 0)} ${((s as any).bodyType ?? 0)} ${((s as any).raceType ?? 0)}.`);
                        // TODO-QSP: dynamic text: Kneeling in front of him, you look up and see the <<$charType>> look in his eyes...
                        scene.text(`Kneeling in front of him, you look up and see the ${((s as any).charType ?? 0)} look in his eyes.`);
                        // TODO-QSP: dynamic text: You then look down and see his crotch directly in front of you. It's obvious tha...
                        scene.text(`You then look down and see his crotch directly in front of you. It's obvious that he has something ${((s as any).dick_girth ?? 0)} in his pants.`);
                      }
                      if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
                        scene.text('Your master speaks to the customer. "So this is her. You can be sure she\'s a virgin as her hymen is intact."');
                        scene.text('"I believe you. She\'s not the first virgin slut that you\'ve delivered to me, is she?"');
                        scene.text('"No, she definitely is not! How many has it been so far? Four, five?"');
                        scene.text('"In your establishment, I have paid for six virgins in total. This one is the seventh.');
                        if (((s as any).age ?? 0) < 17) {
                          // TODO-QSP: dynamic text: "Good number. Good slut, too. She's only <<age>> years old, so her pussy will be...
                          scene.text(`"Good number. Good slut, too. She's only ${((s as any).age ?? 0)} years old, so her pussy will be especially tight."`);
                          scene.text('"That\'s how I like it."');
                        } else {
                          scene.text('"Good number. She\'s a good slut, too."');
                          scene.text('"We shall see."');
                        }
                        scene.actions([
                          { label: 'Sob and wait', goto: ['abductionCustomer', 'abdCustomer-virgin1'] },
                        ]);
                      } else {
                        if (((s as any).buyout ?? 0) === 0) {
                          scene.text('He is clearly expecting you to start pleasuring him. You decide to:');
                          scene.actions([
                            { label: 'Show him your body', goto: ['abductionCustomer', 'abdCustomer-show'] },
                            { label: 'Unzip his pants', goto: ['abductionCustomer', 'abdCustomer-unzip'] },
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
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'abdCustomerGate':
      enterAbdCustomerGate(s, scene);
      break;
    case 'abdCustomerGateBuyout':
      enterAbdCustomerGateBuyout(s, scene);
      break;
    case 'abdCustomerGo':
      enterAbdCustomerGo(s, scene);
      break;
    case 'abdCustomer':
      enterAbdCustomer(s, scene);
      break;
    default:
      enterAbdCustomerGate(s, scene);
      break;
  }
}

export const abductionCustomer: LocationDef = {
  name: 'abductionCustomer',
  title: 'Your master approaches you. "Hello, slave."',
  region: 'other',
  description: ['Your master approaches you. "Hello, slave."'],
  enter: enter,
};
