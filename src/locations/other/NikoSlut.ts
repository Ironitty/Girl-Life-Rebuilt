import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterCustomers(s: GameState, scene: SceneBuilder): void {
  if (((s as any).NikoSlut ?? 0) === 2  &&  ((s as any).NikoDiner ?? 0) > 0) {
    (s as any).NikoCust = Math.floor(Math.random() * 16) + 1;
    if (((s as any).NikoDinerSlut ?? 0) >= 18  &&  ((s as any).VKBikerAttack ?? 0) === 0  &&  ((s as any).VKWip ?? 0) === 100) {
      scene.actions([{ label: 'Continue', goto: ['NikoSlut', 'Biker Attack'] }]);
    } else {
      if (((s as any).NikoCust ?? 0) === 1  &&  ((s as any).NikoCust1 ?? 0) !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['NikoSlut', 'Customer 1'] }]);
      } else {
        if (((s as any).NikoCust ?? 0) === 2  &&  ((s as any).NikoCust2 ?? 0) !== ((s as any).daystart ?? 0)) {
          scene.actions([{ label: 'Continue', goto: ['NikoSlut', 'Customer 2'] }]);
        } else {
          if (((s as any).NikoCust ?? 0) === 3  &&  ((s as any).NikoCust3 ?? 0) !== ((s as any).daystart ?? 0)) {
            scene.actions([{ label: 'Continue', goto: ['NikoSlut', 'Customer 3'] }]);
          } else {
            if (((s as any).NikoCust ?? 0) === 4  &&  ((s as any).NikoCust4 ?? 0) !== ((s as any).daystart ?? 0)) {
              scene.actions([{ label: 'Continue', goto: ['NikoSlut', 'Customer 4'] }]);
            } else {
              if (((s as any).NikoCust ?? 0) === 5  &&  ((s as any).NikoCust5 ?? 0) !== ((s as any).daystart ?? 0)) {
                scene.actions([{ label: 'Continue', goto: ['NikoSlut', 'Customer 5'] }]);
              } else {
                if (((s as any).NikoCust ?? 0) === 6  &&  ((s as any).NikoCust6 ?? 0) !== ((s as any).daystart ?? 0)) {
                  scene.actions([{ label: 'Continue', goto: ['NikoSlut', 'Customer 6'] }]);
                } else {
                  if (((s as any).NikoCust ?? 0) === 7  &&  ((s as any).NikoCust7 ?? 0) !== ((s as any).daystart ?? 0)) {
                    scene.actions([{ label: 'Continue', goto: ['NikoSlut', 'Customer 7'] }]);
                  } else {
                    if (((s as any).NikoCust ?? 0) === 8  &&  ((s as any).NikoCust8 ?? 0) !== ((s as any).daystart ?? 0)) {
                      scene.actions([{ label: 'Continue', goto: ['NikoSlut', 'Customer 8'] }]);
                    } else {
                      if (((s as any).NikoCust ?? 0) === 9  &&  ((s as any).NikoCust9 ?? 0) !== ((s as any).daystart ?? 0)) {
                        scene.actions([{ label: 'Continue', goto: ['NikoSlut', 'Customer 9'] }]);
                      } else {
                        if (((s as any).NikoCust ?? 0) === 10  &&  ((s as any).NikoCust10 ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).VKWip ?? 0) === 100) {
                          scene.actions([{ label: 'Continue', goto: ['NikoSlut', 'Customer 10'] }]);
                        } else {
                          if (((s as any).NikoCust ?? 0) === 11  &&  ((s as any).NikoCust11 ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).VKWip ?? 0) === 100) {
                            scene.actions([{ label: 'Continue', goto: ['NikoSlut', 'Customer 11'] }]);
                          } else {
                            if (((s as any).NikoCust ?? 0) >= 12) {
                              scene.actions([{ label: 'Continue', goto: ['NikoSlut', 'No Customers'] }]);
                            } else {
                              scene.actions([{ label: 'Continue', goto: ['NikoSlut', 'Customers'] }]);
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
  } else {
    scene.actions([{ label: 'Continue', goto: ['NikoSlut', 'Diner Exit'] }]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCustomer1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'fame', 'pav', 'sex', 5);
  qspCall(s, 'fame', 'pav', 'prostitute', 10);
  (s as any).NikoProfit = ((s as any).NikoProfit ?? 0) + (1);
  (s as any).NikoDinerSlut = ((s as any).NikoDinerSlut ?? 0) + (1);
  (s as any).NikoDiner = ((s as any).NikoDiner ?? 0) - (1);
  (s as any).NikoCust1 = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/locations/highway/borisdiner/npc/1.jpg');
  scene.text('A biker approaches Niko. "I want to spend some time with this girl again." He gently strokes your cheek gently as he hands Niko the money. Niko counts the money and nods at him before the biker drags you to the restroom where he removes his pants while watching you undress.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Blowjob', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 5, 'dom');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/1/BJ1.jpg');
    scene.text('You walk up in front of the man and get down on your knees in front of him, looking him in the eyes as you wrap your lips around his dick. You notice the look of pleasure on his face as he looks down at you.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 5, 'dom');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/1/BJ2.jpg');
    scene.text('After a few minutes, he starts groaning. "I\'m about to cum. Get ready."');
    scene.actions([
      { label: 'On your face', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', 'Biker');
    qspCall(s, 'arousal', 'bj', 5, 'dom');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/1/BJCum1.jpg');
    scene.text('You pull his dick out of your mouth and smile as you watch him jerking his dick in front of your face before he suddenly starts shooting his cum all over your face as you close your eyes. Once he\'s finished, he puts his pants back on and leaves the restroom.');
    scene.actions([
      { label: 'Stand up', goto: ['NikoSlut', 'Mens Restroom'] },
    ]);
  } },
      { label: 'In your mouth', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth_swallow', 'Biker');
    qspCall(s, 'arousal', 'anal', 5, 'dom');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/1/BJcum2.jpg');
    scene.text('You continue sucking his dick as he groans and starts cumming in your mouth. You swallow every drop of the man\'s cum, not wanting to disappoint him. Once he\'s finished, he looks down at you with a smile. "Wow, you actually swallowed it! Thank you girl, that was really sexy." He then puts his pants back on and leaves the restroom.');
    scene.actions([
      { label: 'Stand up', goto: ['NikoSlut', 'Mens Restroom'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Vaginal', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 10, 'dom');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/1/Vag1.jpg');
    scene.text('"I want to ride your dick," you tell him and his eyes light up.');
    scene.text('"That sounds great. Let\'s do it."');
    scene.text('You patiently watch him get down on the ground before you climb on top of him and guide his dick inside your pussy while giving him a very sweet smile.');
    scene.text('You then start riding his dick while keeping eye contact as the man frequently moans.');
    if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] >= 1  &&  (!((s as any).preziktype ?? 0))) {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'dina', 'prezik');
    qspCall(s, 'cum_call', '', '', 'Biker', 0, 3);
    qspCall(s, 'arousal', 'vaginal', 5, 'dom');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/1/Vag2.jpg');
    scene.text('The man reaches out for your hands which you happily let him grab onto and you wrap your fingers around his while looking him in his eyes which are full of love. <font color=#FF00FF>This man is so affectionate. He looks at me with such love. I may have been the first girl that he has ever had sex with. Oh the love in his eyes is so beautiful. I don\'t want him to look away. Keep looking at me with those eyes and don\'t stop.</font> Feeling so turned on by his passionate eyes.');
    // TODO-QSP: dynamic text: The man suddenly groans and you feel the condom expanding as he fills it up. You...
    scene.text(`The man suddenly groans and you feel the condom expanding as he fills it up. You can slightly feel the warmth of the condom inside you. The man looks you in the eyes and says, "Thank you so much ${((s as any).NikoSlutName ?? 0)}. You are such a beautiful girl and I would gladly pay you every day, for your services." The man puts his pants on then walks out of the restroom as you follow behind.`);
    scene.actions([
      { label: 'Stand up', goto: ['NikoSlut', 'Customers'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 5, 'dom');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/1/Vag2.jpg');
    scene.text('The man reaches out for your hands, which you happily let him grab onto while looking him in his eyes.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'cum_call', '', '', 'Biker');
    qspCall(s, 'arousal', 'vaginal', 5, 'dom');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/cum/cum3.mp4');
    scene.text('The man suddenly groans and you feel his dick throbbing inside you, filling your womb with his warm seed.');
    // TODO-QSP: dynamic text: The man looks you in the eyes. "Thank you so much, <<$NikoSlutName>>. You're suc...
    scene.text(`The man looks you in the eyes. "Thank you so much, ${((s as any).NikoSlutName ?? 0)}. You're such a perfect girl and I would gladly pay you every day for your services." The man puts his pants on and walks out of the restroom as you follow behind.`);
    scene.actions([
      { label: 'Wash up first', goto: ['NikoSlut', 'Mens Restroom'] },
      { label: 'Head back to Niko', goto: ['NikoSlut', 'Customers'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
    { label: 'Anal', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'anal', 10, 'dom');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/1/Anal1.jpg');
    scene.text('You lean over the toilet and spit on your two fingers, using them to lubricate your anus. The man immediately realizes what you\'re doing and lines up behind you before slowly pushing his dick into your ass, causing you to let out a low, but long lasting moan. After your anus adjusts, he starts thrusting, the pleasure feeling very intense as his dick squeezes its way through your ass.');
    scene.text('The man begins moaning loudly. "Holy fuck, your ass is so tight!" You can tell by his heavy breathing that he\'s about ready to cum.');
    if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] >= 1  &&  (!((s as any).preziktype ?? 0))) {
      scene.actions([
        { label: 'Make him cum', handler: (st: GameState) => {
    qspCall(s, 'dina', 'prezik');
    qspCall(s, 'cum_call', 'anus', 'Biker', 0, 3);
    qspCall(s, 'arousal', 'anal', 5, 'dom');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/1/Anal2.jpg');
    scene.text('You lift your leg and start pushing the man\'s dick further inside you until you hear him groan as he starts filling the condom with his warm cum. You can feel the throbbing of his dick inside you and the warmth of his cum as it fills the condom. Once the man finishes, he says "You\'re so sexy. I hope you stop by this diner everyday because I\'ll always be willing to have you again." He then puts his pants back on and leaves the restroom.');
    scene.actions([
      { label: 'Approach the sink', goto: ['NikoSlut', 'Mens Restroom'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Make him cum', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'anus', 'Biker');
    qspCall(s, 'arousal', 'anal', 5, 'dom');
    qspCall(s, 'arousal', 'end');
    scene.img('images/shared/sex/cum/analcreampie/cumanal1.mp4');
    scene.text('You lift your leg and start pushing the man\'s dick further inside you until you hear him groan as he starts filling your anus with his warm cum. You can feel the throbbing of his dick inside you and the warmth of his cum as it fills you. Once the man finishes, he says "You\'re so fucking sexy. I hope you stop by this diner everyday because I\'ll always be willing to have you again." He then puts his pants back on and leaves the restroom.');
    scene.actions([
      { label: 'Approach the sink', goto: ['NikoSlut', 'Mens Restroom'] },
    ]);
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterCustomer2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'fame', 'pav', 'sex', 5);
  qspCall(s, 'fame', 'pav', 'prostitute', 10);
  (s as any).NikoProfit = ((s as any).NikoProfit ?? 0) + (1);
  (s as any).NikoDinerSlut = ((s as any).NikoDinerSlut ?? 0) + (1);
  (s as any).NikoDiner = ((s as any).NikoDiner ?? 0) - (1);
  (s as any).NikoCust2 = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/locations/highway/borisdiner/npc/2.jpg');
  scene.text('A trucker approaches Niko. "I want to feel her up a bit then fuck her behind the diner."');
  scene.text('"Sure," Niko responds. "But I\'ll be keeping an eye on things."');
  scene.text('"Sure, whatever works for you," the trucker responds and he hands Niko the money before all three of you get up and head to the back of the diner.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/2/Touch\' + rand(1, 2) + \'.jpg');
    scene.text('Once you reach the back of the diner, the man pulls your clothes aside and starts sucking on your nipples and rubbing your clitoris. You let the man caress your body as you enjoy the stimulation and appreciation for him providing some foreplay before having sex with you.');
    scene.text('After a few seconds, the man says "Sit down and spread your legs, I want a closer look."');
    scene.text('You obediently do as he says and he starts touching your vaginal lips and rubbing on your clitoris. "Ah yeah, that\'s nice. What a cute pussy."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 5, 'sub', 'prostitution');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/2/BJ.jpg');
    scene.text('As you reach forward and grab onto the man\'s crotch, he immediately pulls down his pants and lets you touch his hard dick. You lean forward and wrap your lips around his dick, hearing him let out a long moan as you start sucking and licking.');
    scene.actions([
      { label: 'Blowjob (Swallow)', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth_swallow', 'Trucker');
    qspCall(s, 'arousal', 'bj', 5, 'sub', 'prostitution');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/cum/swallow7.mp4');
    scene.text('He starts squirming and groaning as he fills your mouth with his cum. The man fully milks his dick in your mouth before pulling up his pants. "Damn girl, you really got me off quickly. Great work."');
    scene.text('He then walks back into the diner as Niko approaches you. "Are you ready for another customer, or would you like to clean up first?"');
    scene.actions([
      { label: 'Wash up first', goto: ['NikoSlut', 'Ladies Restroom'] },
      { label: 'Head back inside', goto: ['NikoSlut', 'Customers'] },
    ]);
  } },
      { label: 'Blowjob (Spit)', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 10, 'sub', 'prostitution');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/cum/swallow7.mp4');
    scene.text('He starts squirming and groaning as he fills your mouth with his cum. The man fully milks his dick in your mouth before pulling up his pants. "Damn girl, you really got me off quickly. Great work."');
    scene.text('He then walks back into the diner and you spit his cum onto the floor as Niko approaches you. "Are you ready for another customer, or would you like to clean up first?"');
    scene.actions([
      { label: 'Wash up first', goto: ['NikoSlut', 'Ladies Restroom'] },
      { label: 'Head back inside', goto: ['NikoSlut', 'Customers'] },
    ]);
  } },
      { label: 'Vaginal', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 10, 'sub', 'prostitution');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/2/Vag1.jpg');
    scene.text('You get up and walk over to the nearby wall, where you spread your legs while leaning forward and rubbing your pussy. The man quickly realizes what you want and walks up behind you before slowly inserting his cock into your pussy, causing a jolt of pleasure to fill you.');
    scene.text('"Uh, what a fucking tight pussy! I could fuck it for days," he mutters before he starts fucking you.');
    if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] >= 1  &&  (!((s as any).preziktype ?? 0))) {
      scene.actions([
        { label: 'Make him cum', handler: (st: GameState) => {
    qspCall(s, 'dina', 'prezik');
    qspCall(s, 'cum_call', '', '', 'Trucker', 0, 3);
    qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'prostitution');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/2/Vag2.jpg');
    scene.text('The man\'s breathing suddenly stops as he starts filling the condom with his warm seed.');
    scene.text('"You were incredible. I\'ll definitely be using your services again," he says after catching his breath. He pulls up his pants and walks back into the diner as Niko approaches you.');
    scene.text('"Great work. Now let\'s get back to the diner. We don\'t want to keep your customers waiting."');
    scene.actions([
      { label: 'Head back inside', goto: ['NikoSlut', 'Customers'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Make him cum', handler: (st: GameState) => {
    qspCall(s, 'cum_call', '', '', 'Trucker');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'prostitution');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/cum/cum10.mp4');
    // TODO-QSP: dynamic text: The man's breathing suddenly stops as he starts pumping his warm seed into your ...
    scene.text(`The man's breathing suddenly stops as he starts pumping his warm seed into your pussy. Once he's finished, the man pulls out of you, causing his cum to leak out. "That was amazing! You're one sexy girl ${((s as any).NikoSlutName ?? 0)}. I can't wait to use your services again."`);
    scene.text('The man watches his cum leaking out of you as he pulls up his pants before walking back into the diner as Niko approaches you. "Are you ready for another customer, or would you like to clean up first?"');
    scene.actions([
      { label: 'Wash up first', goto: ['NikoSlut', 'Ladies Restroom'] },
      { label: 'Head back inside', goto: ['NikoSlut', 'Customers'] },
    ]);
  } },
      ]);
    }
  } },
      { label: 'Anal', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'anal', 10, 'sub', 'prostitution');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/2/Anal1.jpg');
    scene.text('You get up and walk over to the nearby wall, where you lean forward while lubricating your anus. The man\'s eyes light up as he approaches you and starts rubbing his cock against your anus before slowly pushing it inside. You moan as you feel it pushing its way inside you and the man starts moaning with you.');
    scene.text('"Fuck, her ass is so tight. I won\'t last long at this rate," he mutters as he starts fucking your ass.');
    if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] >= 1  &&  (!((s as any).preziktype ?? 0))) {
      scene.actions([
        { label: 'Make him cum', handler: (st: GameState) => {
    qspCall(s, 'dina', 'prezik');
    qspCall(s, 'cum_call', 'anus', 'Trucker', 0, 3);
    qspCall(s, 'arousal', 'anal', 5, 'sub', 'prostitution');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/2/Anal2.jpg');
    scene.text('The man gives you a few more thrusts before groaning as he fills the condom with his warm cum. You can feel his cock rapidly throbbing inside you, expanding the condom to the brim with his warm cum.');
    scene.text('"You\'re the best fuck I\'ve ever had! I look forward to seeing you again," he says as he pulls up his pants and heads back inside the diner as Niko approaches you.');
    scene.text('"Great work. Now let\'s get back to the diner. We don\'t want to keep your customers waiting."');
    scene.actions([
      { label: 'Head back inside', goto: ['NikoSlut', 'Customers'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Make him cum', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'anus', 'Trucker');
    qspCall(s, 'arousal', 'anal', 5, 'sub', 'prostitution');
    qspCall(s, 'arousal', 'end');
    scene.img('images/shared/sex/cum/analcreampie/cumanal1.mp4');
    scene.text('The man gives you a few more thrusts before groaning. You can feel his cock rapidly throbbing inside you, filling your ass up to the brim with his warm cum.');
    scene.text('"You\'re the best fuck I\'ve ever had! I look forward to seeing you again," he says as he pulls up his pants and heads back inside the diner as Niko approaches you.');
    scene.text('"Are you ready for another customer, or would you like to clean up first?"');
    scene.actions([
      { label: 'Wash up first', goto: ['NikoSlut', 'Ladies Restroom'] },
      { label: 'Head back inside', goto: ['NikoSlut', 'Customers'] },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterCustomer3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'fame', 'pav', 'sex', 5);
  qspCall(s, 'fame', 'pav', 'prostitute', 10);
  (s as any).NikoProfit = ((s as any).NikoProfit ?? 0) + (1);
  (s as any).NikoDiner = ((s as any).NikoDiner ?? 0) - (1);
  (s as any).NikoDinerSlut = ((s as any).NikoDinerSlut ?? 0) + (1);
  (s as any).NikoCust3 = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/locations/highway/borisdiner/npc/3.jpg');
  // TODO-QSP: dynamic text: A biker approaches Niko. "I want to fuck <<$NikoSlutName>>'s pussy in the restro...
  scene.text(`A biker approaches Niko. "I want to fuck ${((s as any).NikoSlutName ?? 0)}'s pussy in the restroom."`);
  scene.text('Niko nods. "Sure thing, let\'s have the money first."');
  scene.text('The trucker gives Niko the money before leading you to the restroom.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Enter restroom', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'strip_all');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/3/Undress\' + rand(1, 2) + \'.jpg');
    scene.text('As soon as you enter the restroom, the man starts kissing your chest as he undresses you. You let him undress you as he runs his hands over your body, gently rubbing and squeezing your breasts and buttocks. After a few seconds, you\'re completely naked as the man takes off his pants while staring at your nude body before he approaches you and starts rubbing your pussy.');
    // TODO-QSP: dynamic text: "So <<$NikoSlutName>>, are you ready to get your pussy fucked?" he asks with a g...
    scene.text(`"So ${((s as any).NikoSlutName ?? 0)}, are you ready to get your pussy fucked?" he asks with a grin.`);
    scene.actions([
      { label: 'Ride his cock', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 10, 'sub', 'prostitution');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/3/Ride1.jpg');
    scene.text('You lightly push the man down on the toilet. "I want to ride that hard cock of yours."');
    scene.text('The man happily smiles. "Hell yeah! We can do that."');
    scene.text('You slowly approach and mount the man\'s rock-hard cock while keeping your ass to his face. You feel his dick slowly pushing its way inside you, causing a very gradual build of pleasure to fill your body as you start riding him at an increased pace.');
    scene.text('The man starts moaning as you ride him. "Damn girl, you\'re so fucking hot!"');
    if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] >= 1  &&  (!((s as any).preziktype ?? 0))) {
      scene.actions([
        { label: 'Increase your pace', handler: (st: GameState) => {
    qspCall(s, 'dina', 'prezik');
    qspCall(s, 'cum_call', '', '', 'Biker', 0, 3);
    qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'prostitution');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/3/Ride2.jpg');
    scene.text('You increase the pace of your thrusts, feeling his cock pushing its way deeper inside you as the man starts breathing heavily. "Oh fuck, I\'m gonna cum!"');
    scene.text('You look back at him and stare him in the eyes. "Cum baby, cum!" The man squints his eyes and starts groaning as you feel the condom inside you expanding as he fills it with warm cum. You stare into his eyes, enjoying the look of blissful pleasure his eyes display.');
    // TODO-QSP: dynamic text: "That was incredible, <<$NikoSlutName>>! You're one sexy girl," he says after ca...
    scene.text(`"That was incredible, ${((s as any).NikoSlutName ?? 0)}! You're one sexy girl," he says after catching his breath. He then kisses you on the cheek before getting dressed and leaving the restroom.`);
    scene.actions([
      { label: 'Remain in restroom', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore');
  }, goto: ['NikoSlut', 'Mens Restroom'] },
      { label: 'Head back to Niko', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore');
  }, goto: ['NikoSlut', 'Customers'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Increase your pace', handler: (st: GameState) => {
    qspCall(s, 'cum_call', '', '', 'Biker');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'prostitution');
    qspCall(s, 'arousal', 'end');
    scene.img('images/shared/sex/cum/cum81.mp4');
    scene.text('You increase the pace of your thrusts, feeling his cock pushing its way deeper inside you as the man starts breathing heavily. "Oh fuck, I\'m gonna cum!"');
    scene.text('You look back at him and stare him in the eyes. "Do it! Cum inside me!" The man squints his eyes and starts pumping his warm cum into your pussy. You close your eyes and focus on the throbbing of his cock inside you.');
    // TODO-QSP: dynamic text: "That was incredible, <<$NikoSlutName>>! You're one sexy girl," he says after ca...
    scene.text(`"That was incredible, ${((s as any).NikoSlutName ?? 0)}! You're one sexy girl," he says after catching his breath. He then kisses you on the cheek before getting dressed and leaving the restroom.`);
    scene.actions([
      { label: 'Wash up first', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore');
  }, goto: ['NikoSlut', 'Mens Restroom'] },
      { label: 'Head back to Niko', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore');
  }, goto: ['NikoSlut', 'Customers'] },
    ]);
  } },
      ]);
    }
  } },
      { label: 'Vaginal', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 10, 'sub', 'prostitution');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/3/Vag1.jpg');
    scene.text('You sit on the sink and the man nods happily as he aligns his dick with your pussy before pushing it inside you, causing a jolt of pleasure to fill your abdomen.');
    scene.text('He starts fucking you while holding one of your legs up and you can feel the pleasuring building up inside you as he rams his cock into your pussy.');
    scene.text('The man looks down at you and grins. "Who\'s a naughty girl?"');
    scene.text('You give him a mischievous smirk. "I am. Now why don\'t you give this naughty girl a good fucking?"');
    scene.text('The man chuckles. "Oh I\'ll give you a good fucking. I hope you\'re ready."');
    if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] >= 1  &&  (!((s as any).preziktype ?? 0))) {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'dina', 'prezik');
    qspCall(s, 'cum_call', '', '', 'Biker', 0, 3);
    qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'prostitution');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/3/Vag2.jpg');
    scene.text('The man continues to fuck you at an increased pace until he suddenly rams his dick deep inside you and starts groaning. You can feel his dick throbbing inside you as it fills the condom with his warm seed. You let out a loud moan as he continues thrusting his dick inside you, milking it into the condom and causing it to expand with the warmth of his cum filling it.');
    scene.text('After the man finishes, he pulls out of you. "Wow, I\'ve never fucked a girl as hot as you. I definitely look forward to seeing you again." He then puts his pants back on before leaving the restroom.');
    scene.actions([
      { label: 'Remain in restroom', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore');
  }, goto: ['NikoSlut', 'Mens Restroom'] },
      { label: 'Head back to Niko', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore');
  }, goto: ['NikoSlut', 'Customers'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'cum_call', '', '', 'Biker');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'prostitution');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/cum/cum5.mp4');
    scene.text('The man continues to fuck you at an increased pace until he suddenly rams his dick deep inside you and starts groaning. You can feel his cock throbbing inside you as it fills your womb with his warm seed, causing you to let out a loud moan as he continues thrusting his dick inside you.');
    scene.text('After the man finishes, he pulls out of you, causing a stream of cum to pour out of your pussy and onto the counter.');
    scene.text('"Wow, I\'ve never fucked a girl as hot as you. I definitely look forward to seeing you again," he says as he puts his pants back on before leaving the restroom.');
    scene.actions([
      { label: 'Wash up first', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore');
  }, goto: ['NikoSlut', 'Mens Restroom'] },
      { label: 'Head back to Niko', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore');
  }, goto: ['NikoSlut', 'Customers'] },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterCustomer4(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'fame', 'pav', 'sex', 5);
  qspCall(s, 'fame', 'pav', 'prostitute', 10);
  (s as any).NikoProfit = ((s as any).NikoProfit ?? 0) + (1);
  (s as any).NikoDiner = ((s as any).NikoDiner ?? 0) - (1);
  (s as any).NikoDinerSlut = ((s as any).NikoDinerSlut ?? 0) + (1);
  (s as any).NikoCust4 = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/locations/highway/borisdiner/npc/4.jpg');
  // TODO-QSP: dynamic text: A biker approaches Niko. "I want to fuck <<$NikoSlutName>> out back."
  scene.text(`A biker approaches Niko. "I want to fuck ${((s as any).NikoSlutName ?? 0)} out back."`);
  scene.text('"Sure thing," Niko responds. "But I\'ll be keeping an eye on things."');
  scene.text('"Well you better not be keeping an eye on my dick, or we\'re gonna have a problem," the biker responds and they both laugh as the man pays Niko before taking you to the back of the diner while Niko follows.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Follow the man', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'strip_all');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/4/Undress\' + rand(1, 2) + \'.jpg');
    scene.text('As soon as you get outside the diner, the man takes a deep breath. "Nothing like getting some fresh air while fucking a cute little thing like yourself. Now take off your clothes."');
    scene.text('You obediently nod and remove your clothes as the man pulls down his pants and starts stroking his cock as he watches you undress.');
    scene.actions([
      { label: 'Blowjob', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 10, 'sub', 'prostitution');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/4/BJ1.jpg');
    scene.text('You sit down on a nearby tire and start sucking his dick while he occasionally squeezes your breasts and spanks your ass.');
    scene.text('"Show me what a dirty little slut you are and suck my fucking dick!" he orders and you increase the pace, feeling his dick occasionally throbbing as it leaks pre-cum into your mouth. He definitely won\'t last long at this rate.');
    scene.actions([
      { label: 'Make him cum (Swallow)', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth_swallow', 'Biker');
    qspCall(s, 'arousal', 'bj', 5, 'sub', 'prostitution');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/cum/swallow7.mp4');
    scene.text('You start rapidly licking and sucking his dick when you hear him moan as he starts filling your mouth with his cum, which you swallow every drop of, knowing that it will please him. The man looks down at you and smiles. "You\'re a good little slut. I\'ll definitely be having you again."');
    scene.text('He then pulls his pants up and walks back into the diner as Niko approaches you. "Are you ready for another customer, or would you like to wash up first?"');
    scene.actions([
      { label: 'Wash up first', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore');
  }, goto: ['NikoSlut', 'Mens Restroom'] },
      { label: 'Head back inside', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore');
  }, goto: ['NikoSlut', 'Customers'] },
    ]);
  } },
      { label: 'Make him cum (Spit)', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 5, 'sub', 'prostitution');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/4/BJ2.jpg');
    scene.text('You start rapidly licking and sucking his dick when you hear him moan as he starts filling your mouth with his cum, which you spit out into the nearby trashcan, causing the man to frown as he looks down at you. "Does it really taste that bad? Oh well, you were great. I look forward to doing this again."');
    scene.text('He then pulls his pants up and walks back into the diner as Niko approaches you. "Are you ready for another customer, or would you like to wash up first?"');
    scene.actions([
      { label: 'Wash up first', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore');
  }, goto: ['NikoSlut', 'Mens Restroom'] },
      { label: 'Head back inside', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore');
  }, goto: ['NikoSlut', 'Customers'] },
    ]);
  } },
    ]);
  } },
      { label: 'Vaginal', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'anal', 10, 'sub', 'prostitution');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/4/Vag1.jpg');
    scene.text('After you undress, you look back at the man while rubbing your body. The man approaches you and pushes you against a nearby tire before he aligns his dick with your pussy. He looks you in the eye as he pushes it inside you, causing a jolt of pleasure to fill your body.');
    scene.text('The man wastes no time and starts rapidly fucking your pussy as you lay back and let him do as he pleases. You maintain eye contact with the man as he starts lightly moaning. "You like being fucked in your pussy, don\'t you?"');
    scene.text('You nod eagerly. "Oh yes. I love being fucked in my tight little pussy."');
    scene.text('Your words clearly have an effect on him as he starts moaning louder and squinting his eyes.');
    if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] >= 1  &&  (!((s as any).preziktype ?? 0))) {
      scene.actions([
        { label: 'Make him cum', handler: (st: GameState) => {
    qspCall(s, 'dina', 'prezik');
    qspCall(s, 'cum_call', '', '', 'Biker', 0, 3);
    qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'prostitution');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/4/Vag1.jpg');
    scene.text('You start rocking your hips up and down to help stimulate him when he starts groaning. You can feel his dick throbbing inside you as he fills the condom with his warm seed and continue to stare into his eyes and admire the blissful look in his eyes as he reaches his climax.');
    scene.text('"That was the best fuck, I\'ve had in a long time… Your pussy is fine, girl." he says while catching his breath. He then pulls his pants up and walks back into the diner as Niko approaches you.');
    scene.text('"You did a great job. Now let\'s get back to the diner. We don\'t want to keep your customers waiting."');
    scene.actions([
      { label: 'Head back inside', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore');
  }, goto: ['NikoSlut', 'Customers'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Make him cum', handler: (st: GameState) => {
    qspCall(s, 'cum_call', '', '', 'Biker');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'prostitution');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/4/Vag1.jpg');
    scene.text('You start rocking your hips up and down to help stimulate him when he starts groaning. You can feel his dick throbbing inside you as it fills your womb with his warm seed and continue to stare into his eyes and admire the blissful look in his eyes as he reaches his climax.');
    scene.text('"That was the best fuck, I\'ve had in a long time… Your pussy is fine, girl." he says while catching his breath. He then pulls his pants up and walks back into the diner as Niko then approaches you.');
    // TODO-QSP: dynamic text: "Well done <<$pcs_nickname>>. You should probably get washed up for the next cus...
    scene.text(`"Well done ${((s as any).pcs_nickname ?? 0)}. You should probably get washed up for the next customer."`);
    scene.actions([
      { label: 'Wash up first', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore');
  }, goto: ['NikoSlut', 'Ladies Restroom'] },
      { label: 'Head back inside', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore');
  }, goto: ['NikoSlut', 'Customers'] },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterCustomer5(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'fame', 'pav', 'sex', 5);
  qspCall(s, 'fame', 'pav', 'prostitute', 10);
  (s as any).NikoProfit = ((s as any).NikoProfit ?? 0) + (1);
  (s as any).NikoDiner = ((s as any).NikoDiner ?? 0) - (1);
  (s as any).NikoDinerSlut = ((s as any).NikoDinerSlut ?? 0) + (1);
  (s as any).NikoCust5 = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/locations/highway/borisdiner/npc/5.jpg');
  scene.text('A trucker approaches Niko. "I would like some alone time with this lovely lady."');
  scene.text('"Sounds good to me, but I take payment up front." Niko replies. The trucker nods with a smile and hands Niko the money before leading you outside, with Niko following closely behind.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Follow trucker', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/5/Intro.jpg');
    scene.text('You both exit the diner using the rear entrance and the trucker leaps down the stoop before offers you a hand. "Careful young lady. Don\'t want you to fall and sprain your ankle."');
    scene.text('You give him a smile as you take his hand. Once you\'re safely on the ground the trucker smiles. "So pretty. What position would you like to do?"');
    scene.actions([
      { label: 'Blowjob', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 10, 'sub', 'prostitution');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/5/BJ1.jpg');
    scene.text('You slowly drop to your knees in front of him and unbutton his pants as he gives you a warm smile while running his finger through your hair. "You\'re such a pretty lady."');
    scene.text('You give him a wink as you lick his cock before sliding it into your mouth and sucking it firmly. The trucker moans while stroking your cheek. "You\'re doing great, just like that."');
    scene.text('You can feel his dick lightly throbbing as he continues moaning louder, signaling that he\'s close to cumming.');
    scene.actions([
      { label: 'Make him cum (Swallow)', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth_swallow', 'Keith');
    qspCall(s, 'arousal', 'bj', 5, 'sub', 'prostitution');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/cum/swallow6.mp4');
    scene.text('You start stroking the shaft of his dick while continuing to suck until you hear him moaning loudly and leaning back as his dick starts throbbing in your mouth, filling it with his cum.');
    scene.text('You spend a few seconds using your tongue to play with his cum before finally swallowing it. The trucker looks down at you and smiles. "Thank you young lady. I really enjoyed that." He then buttons his pants before heading back inside as Niko walks up to you.');
    scene.text('"Are you ready for another customer, or would you like to clean up first?"');
    scene.actions([
      { label: 'Wash up first', goto: ['NikoSlut', 'Ladies Restroom'] },
      { label: 'Head back inside', goto: ['NikoSlut', 'Customers'] },
    ]);
  } },
      { label: 'Make him cum (Spit)', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 5, 'sub', 'prostitution');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/5/BJ1.jpg');
    scene.text('You start stroking the shaft of his dick while continuing to suck until you hear him moaning loudly and leaning back as his dick starts throbbing in your mouth, filling it with his cum.');
    scene.text('You spend a few seconds using your tongue to play with his cum before finally spitting it onto the floor. The trucker looks down at you and smiles. "Thank you young lady. I really enjoyed that." He then buttons his pants before heading back inside as Niko then walks up to you.');
    scene.text('"Are you ready for another customer, or would you like to clean up first?"');
    scene.actions([
      { label: 'Wash up first', goto: ['NikoSlut', 'Ladies Restroom'] },
      { label: 'Head back inside', goto: ['NikoSlut', 'Customers'] },
    ]);
  } },
    ]);
  } },
      { label: 'Vaginal', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 10, 'sub', 'prostitution');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/5/Vag1.jpg');
    scene.text('"I want you to fuck my pussy," you tell the trucker as you start unbuttoning his pants.');
    scene.text('He looks at you with a very pleased smile on his face. "That\'s what I\'m talking about."');
    scene.text('He walks up to you and aligns his dick with your pussy before pushing it inside you, causing a jolt of pleasure to hit you.');
    scene.text('The trucker starts thrusting inside you; you both start moaning together, the trucker\'s moaning growing louder as he quickly approaches his climax.');
    if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] >= 1  &&  (!((s as any).preziktype ?? 0))) {
      scene.actions([
        { label: 'Make him cum', handler: (st: GameState) => {
    qspCall(s, 'dina', 'prezik');
    qspCall(s, 'cum_call', '', '', 'Keith', 0, 3);
    qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'prostitution');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/5/Vag2.jpg');
    scene.text('You start thrusting your hips along with the trucker, increasing the tempo which causes him to start groaning as he fills the condom with his seed. You can feel the condom expanding inside you and getting warmer as his cum fills it.');
    scene.text('"You\'re one rocking babe. Thank you and please don\'t hesitate to stop by and give old Keith a visit," he says and buttons his pants before walking back into the diner as Niko approaches you.');
    scene.text('"You\'ve done some great work today, Let\'s keep up the pace." He then grabs your hand and takes you back into the diner.');
    scene.actions([
      { label: 'Head back inside', goto: ['NikoSlut', 'Customers'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Make him cum', handler: (st: GameState) => {
    qspCall(s, 'cum_call', '', '', 'Keith');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'prostitution');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/cum/cum10.mp4');
    scene.text('You start thrusting your hips along with the trucker, increasing the tempo which causes him to start groaning as he fills your womb with his warm seed.');
    scene.text('"You\'re one rocking babe. Thank you and please don\'t hesitate to stop by and give old Keith a visit," he says and buttons his pants before walking back into the diner as Niko approaches you.');
    scene.text('"You\'ve done some great work today. Are you ready to head back or would you like to wash up first?"');
    scene.actions([
      { label: 'Wash up first', goto: ['NikoSlut', 'Ladies Restroom'] },
      { label: 'Head back inside', goto: ['NikoSlut', 'Customers'] },
    ]);
  } },
      ]);
    }
  } },
      { label: 'Anal', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'anal', 10, 'sub', 'prostitution');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/5/Anal1.jpg');
    scene.text('"I want you to fuck my ass," you tell the trucker as you start unbuttoning his pants.');
    scene.text('His eyes light up. "Hot damn, that sound great to me!"');
    scene.text('You giggle at his accent as you pull down his pants before approaching the nearby wall, where you bend over and give the trucker a seductive wink, causing him to approach you and slowly push his cock into your ass.');
    scene.text('You close your eyes and focus on his cock slowly making its way inside you. After the trucker gives your ass a chance to adjust, he starts slowly thrusting, causing pleasure to build as your anus tightens around his dick.');
    scene.text('"Your rear end is so tight. It\'s such a nice feeling," he says before moaning loudly.');
    if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] >= 1  &&  (!((s as any).preziktype ?? 0))) {
      scene.actions([
        { label: 'Rock your hips', handler: (st: GameState) => {
    qspCall(s, 'dina', 'prezik');
    qspCall(s, 'cum_call', 'anus', 'Keith', 0, 3);
    qspCall(s, 'arousal', 'anal', 5, 'sub', 'prostitution');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/5/Anal2.jpg');
    scene.text('You start rocking your hips, causing his dick to rub against your inner anus and evoke a loud moan from him. After a few seconds, he firmly grabs your hips and groans as he starts filling the condom with his warm seed.');
    scene.text('"You have the greatest darn ass I\'ve ever had! Please stop by again and give old Keith a visit," he says and buttons his pants before returning to the diner as Niko approaches you.');
    scene.text('"You\'ve done well. Let\'s return to your customers."');
    scene.actions([
      { label: 'Head back inside', goto: ['NikoSlut', 'Customers'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Rock your hips', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'anus', 'Keith');
    qspCall(s, 'arousal', 'anal', 5, 'sub', 'prostitution');
    qspCall(s, 'arousal', 'end');
    scene.img('images/shared/sex/cum/analcreampie/cumanal2.mp4');
    scene.text('You start rocking your hips, causing his dick to rub against your inner anus and evoke a loud moan from him. After a few seconds, he firmly grabs your hips and groans as he starts filling your ass with his warm seed.');
    scene.text('"You have the greatest darn ass I\'ve ever had! Please stop by again and give old Keith a visit," he says and buttons his pants before returning to the diner as Niko approaches you.');
    scene.text('"You\'ve done well. Would you like to return to your customers, or would you like to wash up first?"');
    scene.actions([
      { label: 'Wash up first', goto: ['NikoSlut', 'Ladies Restroom'] },
      { label: 'Head back inside', goto: ['NikoSlut', 'Customers'] },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterCustomer6(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'fame', 'pav', 'sex', 5);
  qspCall(s, 'fame', 'pav', 'prostitute', 10);
  (s as any).NikoProfit = ((s as any).NikoProfit ?? 0) + (1);
  (s as any).NikoDiner = ((s as any).NikoDiner ?? 0) - (1);
  (s as any).NikoDinerSlut = ((s as any).NikoDinerSlut ?? 0) + (1);
  (s as any).NikoCust6 = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'fame', '');
  qspCall(s, 'stat', '');
  scene.img('images/locations/highway/borisdiner/npc/6.jpg');
  scene.text('A trucker approaches Niko. "I\'d like to borrow this young lady for a few minutes. How much?"');
  // TODO-QSP: dynamic text: "'+$func('money', 'string_profit', 2000)+'," Niko replies and the trucker hands ...
  scene.text('"\'+$func(\'money\', \'string_profit\', 2000)+\'," Niko replies and the trucker hands Niko the money before leading you out of the diner as Niko follows closely behind.');
  scene.text('Once outside the trucker turns to you. "Alright young lady, pull down your pants and get ready for the biggest dick you\'ve ever had."');
  scene.text('You nod and do as he says.');
  (s as any).VK = Math.floor(Math.random() * 2) + 1;
  if (((s as any).VK ?? 0) === 1) {
    scene.actions([
      { label: 'Pull down your pants', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/8/Vag1.jpg');
    scene.text('The trucker unbuttons his pants and sits on a bench before motioning you to mount him. The man gives you a smile as you turn around in front of him and start riding his dick. "Now that\'s what a bitch is for. Spread your cheeks for me bitch!"');
    scene.text('You do as he says and spread your ass cheeks for him before he starts roughly fingering your anus, causing strong pressure to build up inside your ass as he shoves his finger deeper inside you.');
    qspCall(s, 'arousal', 'anal_finger', 5, 'sub');
    qspCall(s, 'arousal', 'vaginal', (-5), 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/8/Vag2.jpg');
    scene.text('After a few seconds, you lean back and wrap your arm around his back while he licks your nipple. The feeling of his huge dick in your pussy is starting to hurt, so you do your best to hold up your own weight while the trucker continues to fuck your pussy.');
    scene.text('"Time for you to swallow my load bitch. Get down on your knees," he says after a few more seconds. You meekly nod, relieved that he isn\'t going to fuck you anymore, and climb off of him before getting on your knees in front of him.');
    scene.actions([
      { label: 'Blowjob (Swallow)', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/yurikev/sex/throat/3.mp4');
    scene.text('He shoves his dick in your mouth and forces you to gag on it while he fucks your throat as you try your best to relax it. You can see Niko approaching in the corner of your eye with an angry look on his face. You wave at him to let him know that you\'re okay and he relaxes.');
    scene.actions([
      { label: 'Make him cum', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth', 'Trucker');
    qspCall(s, 'arousal', 'bj', 5, 'sub');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/yurikev/cum/throat6.mp4');
    scene.text('The man suddenly groans as his cum shoots down your throat. He takes a second to catch his breath when he finishes. "You\'re really good at swallowing cum. I might use you again soon." He then pulls up his pants and walks away as Niko approaches you.');
    scene.text('"Are you alright? That looked rough." You nod and he smiles. "Good. Are you ready for another customer, or would you like to wash up first?"');
    scene.actions([
      { label: 'Wash up first', goto: ['NikoSlut', 'Ladies Restroom'] },
      { label: 'Head back inside', goto: ['NikoSlut', 'Customers'] },
    ]);
  } },
    ]);
  } },
      { label: 'Blowjob (Spit)', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 5, 'sub');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/yurikev/sex/throat/3.mp4');
    scene.text('He shoves his dick in your mouth and forces you to gag on it while he fucks your throat as you try your best to relax it. You can see Niko approaching in the corner of your eye with an angry look on his face. You wave at him to let him know that you\'re okay and he relaxes.');
    scene.text('The man then suddenly groans as his cum shoots down your throat. You try to cough it out, causing it to leak out of your nose as the man takes a second to catch his breath. "You look like an angry cum dragon!" he says before pulling up his pants and walking away.');
    scene.text('Niko then approaches you. "Are you alright? That looked rough." You nod and he smiles. "Good. Are ready for another customer, or would you like to wash up first?"');
    scene.actions([
      { label: 'Wash up first', goto: ['NikoSlut', 'Ladies Restroom'] },
      { label: 'Head back inside', goto: ['NikoSlut', 'Customers'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).VK ?? 0) === 2) {
      scene.actions([
        { label: 'Pull down your pants', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/7/Rear1.jpg');
    scene.text('The trucker grabs you by the hips and pushes you toward a nearby tree before bending you over. He rubs his dick against your pussy for a few seconds before sliding it inside, causing a jolt of pleasure to fill your lower abdomen. "How do you like my dick, bitch?" he asks as he starts roughly fucking you.');
    scene.text('"It\'s so big and feels so good inside my pussy." you reply and he smacks your ass.');
    scene.text('"You know it girl," he says as he picks up the pace.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/7/Rear2.jpg');
    scene.text('You grab onto the tree as his dick is ramming so far inside your pussy that it\'s starting to hurt. You try standing up so that his access to your pussy is limited to slow him down a little, but he leans forward and pinches your nipples. "Time for you to swallow my load bitch. Get down on your knees."');
    scene.text('You meekly nod, relieved that he isn\'t going to fuck you anymore, before getting on your knees in front of him.');
    scene.actions([
      { label: 'Blowjob (Swallow)', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 5, 'sub');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/yurikev/sex/throat/3.mp4');
    scene.text('He shoves his dick in your mouth and forces you to gag on it while he fucks your throat as you try your best to relax it. You can see Niko approaching in the corner of your eye with an angry look on his face. You wave at him to let him know that you\'re okay and he relaxes.');
    scene.actions([
      { label: 'Make him cum', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth_swallow', 'Trucker');
    qspCall(s, 'arousal', 'bj', 5, 'sub');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/yurikev/cum/throat6.mp4');
    scene.text('The man suddenly groans as his cum shoots down your throat. He takes a second to catch his breath when he finishes. "You\'re really good at swallowing cum. I might use you again soon." He then pulls up his pants and walks away as Niko approaches you.');
    scene.text('"Are you alright? That looked rough." You nod and he smiles. "Good. Are you ready for another customer, or would you like to wash up first?"');
    scene.actions([
      { label: 'Wash up first', goto: ['NikoSlut', 'Ladies Restroom'] },
      { label: 'Head back inside', goto: ['NikoSlut', 'Customers'] },
    ]);
  } },
    ]);
  } },
      { label: 'Blowjob (Spit)', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 5, 'sub');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/yurikev/sex/throat/3.mp4');
    scene.text('He shoves his dick in your mouth and forces you to gag on it while he fucks your throat as you try your best to relax it. You can see Niko approaching in the corner of your eye with an angry look on his face. You wave at him to let him know that you\'re okay and he relaxes.');
    scene.text('The man then suddenly groans as his cum shoots down your throat. You try to cough it out, causing it to leak out of your nose as the man takes a second to catch his breath. "You look like an angry cum dragon!" he says before pulling up his pants and walking away.');
    scene.text('Niko then approaches you. "Are you alright? That looked rough." You nod and he smiles. "Good. Are ready for another customer, or would you like to wash up first?"');
    scene.actions([
      { label: 'Wash up first', goto: ['NikoSlut', 'Ladies Restroom'] },
      { label: 'Head back inside', goto: ['NikoSlut', 'Customers'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCustomer7(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'fame', 'pav', 'sex', 5);
  qspCall(s, 'fame', 'pav', 'prostitute', 10);
  (s as any).NikoProfit = ((s as any).NikoProfit ?? 0) + (1);
  (s as any).NikoDiner = ((s as any).NikoDiner ?? 0) - (1);
  (s as any).NikoDinerSlut = ((s as any).NikoDinerSlut ?? 0) + (1);
  (s as any).NikoCust7 = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/locations/highway/borisdiner/npc/7.jpg');
  scene.text('A trucker approaches Niko. "Hello there. I heard that this one is good at helping a lonely man."');
  // TODO-QSP: dynamic text: Niko chuckles. "She sure is. Are you interested? Her services are only '+$func('...
  scene.text('Niko chuckles. "She sure is. Are you interested? Her services are only \'+$func(\'money\', \'string_profit\', 2000)+\'."');
  scene.text('"Sounds fair," the trucker responds. "I\'m friends with the owner of this diner, so we can use the back room."');
  scene.text('He hands Niko the money before leading you to the back room.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/highway/borisdiner/npc/7.jpg');
    scene.text('As you reach the back room, the trucker starts kissing your neck and squeezing your breasts. You then feel his hand sliding down your pants and rubbing your pussy as you reach down and rub his crotch, feeling it fully erect in his pants.');
    scene.text('"How would you like to do this?" he whispers in your ear.');
    scene.actions([
      { label: 'Blowjob', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 10, 'sub', 'prostitution');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/7/BJ1.jpg');
    scene.text('You drop to your knees in front of him and unbutton his pants, causing his fully erect dick to spring up and almost hit you in the face. You start gently stroking it, causing the man to moan before you take it into your mouth and start firmly sucking it.');
    scene.text('The man lets out a moan. "That\'s a good girl. Now play with your nipples for me."');
    scene.text('You obediently nod and pinch your nipples slightly.');
    scene.actions([
      { label: 'Increase the pace (Swallow)', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth_swallow', 'Trucker');
    qspCall(s, 'arousal', 'bj', 5, 'sub', 'prostitution');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/cum/swallow3.mp4');
    scene.text('You start sucking his dick at an increased pace, causing the man to let out occasional grunts. After a few seconds, he groans as his cock starts throbbing in your mouth, filling your throat with his cum, which you do your best to swallow.');
    scene.text('After the man finishes, he buttons his pants and reaches into his pocket, pulling out his wallet and placing some money in your pocket. "Here\'s a little tip for you. Buy yourself something nice."');
    scene.text('You give him a smile. "Thank you so much!"');
    scene.text('He gives you a wink before escorting you out of the back room.');
    scene.actions([
      { label: 'Get back to Niko', handler: (st: GameState) => {
    qspCall(st, 'money', 'earn', 200, 'cash');
  }, goto: ['NikoSlut', 'Customers'] },
    ]);
  } },
      { label: 'Increase the pace (Spit)', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 5, 'sub', 'prostitution');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/7/BJ2.jpg');
    scene.text('You start sucking his dick at an increased pace, causing the man to let out occasional grunts. After a few seconds, he groans as his cock starts throbbing in your mouth, filling your throat with his cum, which you spit into the garbage.');
    scene.text('After the man finishes, he buttons his pants. "You must really hate the taste, huh? You did a good job anyway. Let\'s get you back to your pimp."');
    scene.text('He then escorts you out of the back room.');
    scene.actions([
      { label: 'Get back to Niko', goto: ['NikoSlut', 'Customers'] },
    ]);
  } },
    ]);
  } },
      { label: 'Ride him', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 10, 'sub', 'prostitution');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/7/Ride1.jpg');
    scene.text('You lean forward and whisper in his ear. "I want to ride your cock…"');
    scene.text('The man gets noticeably excited. "Now that\'s a good girl."');
    // TODO-QSP: dynamic text: You remove your pants as the trucker lays on the ground before mounting him and ...
    scene.text(`You remove your pants as the trucker lays on the ground before mounting him and guiding his dick into your pussy. You start riding him at a moderate pace before he suddenly lifts you up by the legs, pushing his dick deeper inside you as he whispers in your ear. "How does it feel, ${((s as any).NikoSlutName ?? 0)}? Good?"`);
    scene.text('You meekly nod your head, enjoying the pleasure of having his dick deep inside you.');
    if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] >= 1  &&  (!((s as any).preziktype ?? 0))) {
      scene.actions([
        { label: 'Continue riding him', handler: (st: GameState) => {
    qspCall(s, 'dina', 'prezik');
    qspCall(s, 'cum_call', '', '', 'Trucker', 0, 3);
    qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'prostitution');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/7/Ride2.jpg');
    scene.text('You continue riding his dick while he lets out soft moans and after a few minutes, he groans as he fills the condom inside you. You let out a needed moan as the condom expands inside you.');
    scene.text('After the man finishes, he buttons his pants and reaches into his pocket, pulling out his wallet then placing some money in your pocket. "Here\'s a little tip for you. Buy yourself something nice."');
    scene.text('You give him a smile. "Thank you so much!"');
    scene.text('He gives you a wink before escorting you out of the back room.');
    scene.actions([
      { label: 'Head back to Niko', goto: ['NikoSlut', 'Customers'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Continue riding him', handler: (st: GameState) => {
    qspCall(s, 'cum_call', '', '', 'Trucker');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'prostitution');
    qspCall(s, 'arousal', 'end');
    scene.img('images/shared/sex/cum/cum81.mp4');
    scene.text('You continue riding his dick while he lets out soft moans and after a few minutes, he groans as he shoots his cum into your womb. You let out a needed moan as feel his hot cum filling you up.');
    scene.text('After the man finishes, he buttons his pants and reaches into his pocket, pulling out his wallet then placing some money in your pocket. "Here\'s a little tip for you. Buy yourself something nice."');
    scene.text('You give him a smile. "Thank you so much!"');
    scene.text('He gives you a wink before escorting you out of the back room.');
    scene.actions([
      { label: 'Wash up first', handler: (st: GameState) => {
    qspCall(st, 'money', 'earn', 200);
  }, goto: ['NikoSlut', 'Mens Restroom'] },
      { label: 'Head back to Niko', handler: (st: GameState) => {
    qspCall(st, 'money', 'earn', 200);
  }, goto: ['NikoSlut', 'Customers'] },
    ]);
  } },
      ]);
    }
  } },
      { label: 'Turn around', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'anal', 10, 'sub', 'prostitution');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/7/Rear1.jpg');
    scene.text('You turn around and slowly remove your pants before leaning over the desk and rubbing your pussy. The man happily approaches you and shoves his cock into your pussy and thrusting his hip, pushing it deeper inside you.');
    scene.text('"How are you enjoying this sweetie?" he asks as he starts fucking you.');
    scene.text('You give him a smile. "I\'m loving it!"');
    if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] >= 1  &&  (!((s as any).preziktype ?? 0))) {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'dina', 'prezik');
    qspCall(s, 'cum_call', 'anus', 'Trucker', 0, 3);
    qspCall(s, 'arousal', 'anal', 5, 'sub', 'prostitution');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/7/Rear2.jpg');
    scene.text('The man returns the smile as he quickens his pace, fucking you faster and harder before letting out a groan as he starts filling up the condom.');
    scene.text('After the man finishes, he buttons his pants and reaches into his pocket, pulling out his wallet and placing some money in your pocket. "Here\'s a little tip for you. Buy yourself something nice."');
    scene.text('You give him a smile. "Thank you so much!"');
    scene.text('He gives you a wink before escorting you out of the back room.');
    scene.actions([
      { label: 'Head back to Niko', goto: ['NikoSlut', 'Customers'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'anus', 'Trucker');
    qspCall(s, 'arousal', 'anal', 5, 'sub', 'prostitution');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/cum/cum10.mp4');
    scene.text('The man returns the smile as he quickens his pace, fucking you faster and harder before letting out a groan as he cums inside you.');
    scene.text('After the man finishes, he buttons his pants and reaches into his pocket, pulling out his wallet and placing some money in your pocket. "Here\'s a little tip for you. Buy yourself something nice."');
    scene.text('You give him a smile. "Thank you so much!"');
    scene.text('He gives you a wink before escorting you out of the back room.');
    scene.actions([
      { label: 'Wash up first', handler: (st: GameState) => {
    qspCall(st, 'money', 'earn', 200);
  }, goto: ['NikoSlut', 'Mens Restroom'] },
      { label: 'Head back to Niko', handler: (st: GameState) => {
    qspCall(st, 'money', 'earn', 200);
  }, goto: ['NikoSlut', 'Customers'] },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterCustomer8(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'fame', 'pav', 'sex', 5);
  qspCall(s, 'fame', 'pav', 'prostitute', 10);
  (s as any).NikoProfit = ((s as any).NikoProfit ?? 0) + (1);
  (s as any).NikoDiner = ((s as any).NikoDiner ?? 0) - (1);
  (s as any).NikoDinerSlut = ((s as any).NikoDinerSlut ?? 0) + (1);
  (s as any).NikoCust8 = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/locations/highway/borisdiner/npc/8.jpg');
  scene.text('A trucker approaches Niko. "Hello there. How much for this one\'s services?"');
  // TODO-QSP: dynamic text: "'+$func('money', 'string_profit', 2000)+'" Niko replies.
  scene.text('"\'+$func(\'money\', \'string_profit\', 2000)+\'" Niko replies.');
  scene.text('"Fair enough. Here you go." He hands Niko the money and offers you his hand before leading you to the restroom.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/highway/borisdiner/npc/8.jpg');
    scene.text('"You can take off your clothes now," the trucker says after you enter the restroom. You nod and start undressing as the man unbuttons his pants and pulls out his dick, gently stroking it as he watches you undress.');
    scene.text('Once you\'re fully undressed, he starts running his hands across your body. "What position are you best at?"');
    scene.actions([
      { label: 'Drop down to your knees', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 5, 'sub', 'prostitution');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/8/BJ1.jpg');
    scene.text('You approach the trucker and drop to your knees in front of him, rubbing his crotch through his pants before unbuttoning them and taking his dick into your hand, stroking it gently while staring up at him.');
    scene.text('The man moans lightly before looking down at you. "So you\'re good with your hands huh?" You smile at him while stroking his dick faster before licking the tip, all while keeping eye contact with him.');
    scene.actions([
      { label: 'Suck his dick', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 5, 'sub', 'prostitution');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/8/BJ2.jpg');
    scene.text('You take his dick into your mouth, firmly wrapping your lips around it before licking and sucking it. The man begins moaning frequently, clearly enjoying your performance.');
    scene.actions([
      { label: 'Swallow', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth_swallow', 'Trucker');
    qspCall(s, 'arousal', 'bj', 5, 'sub', 'prostitution');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/cum/swallow4.mp4');
    scene.text('After a few seconds, the man groans as his dick starts throbbing in your mouth, filling it with his warm cum, which you let slide down your throat and into your belly.');
    // TODO-QSP: dynamic text: The man takes a few seconds to catch his breath. "You were outstanding, <<$NikoS...
    scene.text(`The man takes a few seconds to catch his breath. "You were outstanding, ${((s as any).NikoSlutName ?? 0)}. I look forward to seeing you again soon." He then buttons his pants before leaving the restroom.`);
    scene.actions([
      { label: 'Stand up', goto: ['NikoSlut', 'Mens Restroom'] },
    ]);
  } },
      { label: 'Spit', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 5, 'sub', 'prostitution');
    qspCall(s, 'arousal', 'end');
    scene.img('images/shared/sex/cum/mouth/cum1.11.mp4');
    scene.text('You take his dick into your mouth, firmly wrapping your lips around it before licking and sucking it. The man begins moaning frequently, clearly enjoying your performance.');
    scene.text('After a few more seconds, the man groans as his dick starts throbbing in your mouth, filling it with his warm cum, which you let leak out of your mouth and onto the floor.');
    // TODO-QSP: dynamic text: The man takes a few seconds to catch his breath. "You were outstanding, <<$NikoS...
    scene.text(`The man takes a few seconds to catch his breath. "You were outstanding, ${((s as any).NikoSlutName ?? 0)}. I look forward to seeing you again soon." He then buttons his pants before leaving the restroom.`);
    scene.actions([
      { label: 'Stand up', goto: ['NikoSlut', 'Mens Restroom'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Ride him', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 10, 'sub', 'prostitution');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/8/Vag1.jpg');
    scene.text('You take the trucker\'s hand and lead him to the toilet before giving him a light push, causing him to fall onto it. You unbutton his pants and start stroking his dick for a few seconds before turning around and aligning it with your pussy. You slowly lower yourself down, feeling it slide deep inside you, expanding your insides.');
    scene.text('You start riding his dick slowly as he grabs onto your breasts and gives them a firm squeeze before licking your nipple.');
    if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] >= 1  &&  (!((s as any).preziktype ?? 0))) {
      scene.actions([
        { label: 'Increase your pace', handler: (st: GameState) => {
    qspCall(s, 'dina', 'prezik');
    qspCall(s, 'cum_call', '', '', 'Trucker', 0, 3);
    qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'prostitution');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/8/Vag2.jpg');
    scene.text('You ride him faster as he continues licking your nipples while moaning. After a minute, he groans as you feel a warmth building up inside you as he fills the condom with his cum.');
    scene.text('Once he\'s spent, he pats your thighs. "I hope you stop by again soon. I can\'t wait to do this again." He stands up and buttons his pants before throwing the condom away and leaving the restroom.');
    scene.actions([
      { label: 'Head back to Niko', goto: ['NikoSlut', 'Customers'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Increase your pace', handler: (st: GameState) => {
    qspCall(s, 'cum_call', '', '', 'Trucker');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'prostitution');
    qspCall(s, 'arousal', 'end');
    scene.img('images/shared/sex/cum/cum81.mp4');
    scene.text('You ride him faster as he continues licking your nipples while moaning. After a minute, the man groans as you feel a warm liquid filling your womb, causing you to let out a loud moan. His dick continues throbbing as it pumps you full of his cum.');
    scene.text('Once he\'s spent, he pats your thighs. "I hope you stop by again soon. I can\'t wait to do this again." He then stands up and buttons his pants before leaving the restroom.');
    scene.actions([
      { label: 'Wash up first', goto: ['NikoSlut', 'Mens Restroom'] },
      { label: 'Head back to Niko', goto: ['NikoSlut', 'Customers'] },
    ]);
  } },
      ]);
    }
  } },
      { label: 'Anal', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'anal', 10, 'sub', 'prostitution');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/8/Anal1.jpg');
    scene.text('You approach the trucker and unbutton his pants before quickly turning on the sink and wetting your fingertips, which you use to lubricate your anus before giving the man a wink and turning around, lifting your ass toward him.');
    scene.text('He starts rubbing the tip of his dick against your anus and you close your eyes as you feel it pushing its way inside of you, expanding your anus. The man gives your ass a few seconds to adjust before thrusting his hips, pushing his dick further inside you while you rock your hips to match his pace.');
    if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] >= 1  &&  (!((s as any).preziktype ?? 0))) {
      scene.actions([
        { label: 'Increase your pace', handler: (st: GameState) => {
    qspCall(s, 'dina', 'prezik');
    qspCall(s, 'cum_call', 'anus', 'Trucker', 0, 3);
    qspCall(s, 'arousal', 'anal', 5, 'sub', 'prostitution');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/8/Anal2.jpg');
    scene.text('You start thrusting faster as the man moans loudly. "Your ass is so damn tight. Oh hell, I won\'t last long!"');
    scene.text('After a few seconds, he groans and starts filling the condom with his seed.');
    scene.text('Once he finishes, he pulls out of you. "You\'re a great girl. I hope that you stop by here more often." He then buttons his pants before leaving the restroom.');
    scene.actions([
      { label: 'Head back to Niko', goto: ['NikoSlut', 'Customers'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Increase your pace', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'anus', 'Trucker');
    qspCall(s, 'arousal', 'anal', 5, 'sub', 'prostitution');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/8/Anal2.jpg');
    scene.text('You start thrusting faster as the man moans loudly. "Your ass is so damn tight. Oh hell, I won\'t last long!"');
    scene.text('After a few seconds he groans and starts pumping your ass with his warm cum.');
    scene.text('Once he finishes, he pulls out of you, causing his cum to leak out of you and onto the floor. "You\'re a great girl. I hope that you stop by here more often." He then buttons his pants before leaving the restroom.');
    scene.actions([
      { label: 'Wash up first', goto: ['NikoSlut', 'Mens Restroom'] },
      { label: 'Head back to Niko', goto: ['NikoSlut', 'Customers'] },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterCustomer9(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'fame', 'pav', 'sex', 5);
  qspCall(s, 'fame', 'pav', 'prostitute', 10);
  (s as any).NikoProfit = ((s as any).NikoProfit ?? 0) + (3);
  (s as any).NikoDiner = ((s as any).NikoDiner ?? 0) - (1);
  (s as any).NikoDinerSlut = ((s as any).NikoDinerSlut ?? 0) + (1);
  (s as any).NikoCust9 = ((s as any).daystart ?? 0);
  (s as any).VK = Math.floor(Math.random() * 3) + 1;
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/locations/highway/borisdiner/npc/9.jpg');
  // TODO-QSP: dynamic text: A trucker approaches Niko. "I'd like to borrow <<$NikoSlutName>> for a few minut...
  scene.text(`A trucker approaches Niko. "I'd like to borrow ${((s as any).NikoSlutName ?? 0)} for a few minutes."`);
  // TODO-QSP: dynamic text: "Sure. '+$func('money', 'string_profit', 2000)+' and you can borrow her for a fe...
  scene.text('"Sure. \'+$func(\'money\', \'string_profit\', 2000)+\' and you can borrow her for a few minutes."');
  scene.text('"I guess I can spare a few rubles…" the trucker says and hands Niko the money before wrapping his arm around your waist and leading you to the restroom.');
  if (((s as any).VK ?? 0) === 1) {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 10, 'sub', 'prostitution');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/6/bj1.jpg');
    scene.text('As soon as you arrive at the restroom, the trucker rubs the back of your neck. "Be a good girl and suck my dick," You give him a smile and nod, causing him to grin. "Now that\'s a good girl."');
    scene.text('You unbutton his pants before pulling out his dick and licking up the shaft until you reach the tip, causing him to flinch a little.');
    scene.actions([
      { label: 'Suck his dick (Swallow)', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth_swallow', 'Trucker');
    qspCall(s, 'arousal', 'bj', 5, 'sub', 'prostitution');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/cum/cum1.mp4');
    scene.text('You wrap your lips around his dick, evoking a moan from him as you start sucking his dick while massaging it with your tongue, enjoying the warmth of it in your mouth.');
    scene.text('After a minute, the trucker groans as he starts pumping his cum into your mouth, which you let slide down your throat, feeling the sting as it goes down into your belly as the trucker catches his breath. "You\'re a really good cocksucker. I\'ll definitely be calling for your services again." He then buttons his pants before leaving the restroom.');
    scene.actions([
      { label: 'Wash up first', goto: ['NikoSlut', 'Mens Restroom'] },
      { label: 'Head back to Niko', goto: ['NikoSlut', 'Customers'] },
    ]);
  } },
      { label: 'Suck his dick (Spit)', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 5, 'sub', 'prostitution');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/6/bj2.jpg');
    scene.text('You wrap you lips around his dick, evoking a moan from him as you start sucking his dick while massaging it with your tongue, enjoying the warmth of it in your mouth.');
    scene.text('After a minute, the trucker groans as he starts pumping his cum into your mouth, which you let slide out of your mouth as you tip your head sideways as the trucker catches his breath. "You\'re a really good cocksucker. I\'ll definitely be calling for your services again." He then buttons his pants before leaving the restroom.');
    scene.actions([
      { label: 'Wash up first', goto: ['NikoSlut', 'Mens Restroom'] },
      { label: 'Head back to Niko', goto: ['NikoSlut', 'Customers'] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).VK ?? 0) === 2) {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 10, 'sub', 'prostitution');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/6/ride1.jpg');
    scene.text('As soon as you arrive at the restroom, the trucker runs his hand up your leg. "I want your pussy wrapped around my dick." You happily nod, causing him to grin widely. "Gooood girrrrll." He smacks your ass before pulling his pants down and sitting on the toilet. You align your pussy with his cock and press yourself down onto it, feeling it squeezing its way inside you, evoking moans from both of you.');
    if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] >= 1  &&  (!((s as any).preziktype ?? 0))) {
      scene.actions([
        { label: 'Ride his cock', handler: (st: GameState) => {
    qspCall(s, 'dina', 'prezik');
    qspCall(s, 'cum_call', '', '', 'Trucker', 0, 3);
    qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'prostitution');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/6/ride2.jpg');
    scene.text('You start riding his cock at an increased pace while he pulls your shirt down, exposing your breast and squeezing it as you continue riding him.');
    // TODO-QSP: dynamic text: After a few minutes, the trucker groans, filling the condom with his warm seed. ...
    scene.text(`After a few minutes, the trucker groans, filling the condom with his warm seed. You focus on the condom expanding inside you until the man finishes. "You were great ${((s as any).NikoSlutName ?? 0)}, I'll definitely be visiting you again." He then pulls up his pants and leaves the restroom.`);
    scene.actions([
      { label: 'Head back to Niko', goto: ['NikoSlut', 'Customers'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Ride his cock', handler: (st: GameState) => {
    qspCall(s, 'cum_call', '', '', 'Trucker');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'prostitution');
    qspCall(s, 'arousal', 'end');
    scene.img('images/shared/sex/cum/cum81.mp4');
    scene.text('You start riding his cock at an increased pace while he pulls your shirt down, exposing your breast and squeezing it as you continue riding him.');
    // TODO-QSP: dynamic text: After a few minutes, the trucker groans, filling your womb with his warm seed. A...
    scene.text(`After a few minutes, the trucker groans, filling your womb with his warm seed. As soon as the man finishes, he squeezes your breast. "You were great ${((s as any).NikoSlutName ?? 0)}, I'll definitely be visiting you again." He then pulls up his pants and leaves the restroom.`);
    scene.actions([
      { label: 'Wash up first', goto: ['NikoSlut', 'Mens Restroom'] },
      { label: 'Head back to Niko', goto: ['NikoSlut', 'Customers'] },
    ]);
  } },
      ]);
    }
  } },
      ]);
    } else {
      if (((s as any).VK ?? 0) === 3) {
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'anal', 10, 'sub', 'prostitution');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/6/anal1.jpg');
    scene.text('As soon as you arrive at the restroom, the trucker grabs your ass firmly. "I\'m fucking your ass today. I assume that you don\'t mind?"');
    scene.text('You give him a smile. "Not at all."');
    scene.text('His eyes light up. "You\'re my kind of girl!"');
    scene.text('He then turns you around as he turns on the sink, lubing up his dick before he slowly pushes it inside your ass. He waits for your ass to adjust before thrusting it deeper inside you and fucking your ass at a moderate pace.');
    if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] >= 1  &&  (!((s as any).preziktype ?? 0))) {
      scene.actions([
        { label: 'Let him fuck your ass', handler: (st: GameState) => {
    qspCall(s, 'dina', 'prezik');
    qspCall(s, 'cum_call', 'anus', 'Trucker', 0, 3);
    qspCall(s, 'arousal', 'anal', 5, 'sub', 'prostitution');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/6/anal2.jpg');
    scene.text('You lean against the urinal, enjoying the pleasure building up in your ass as he continuously pounds you, ramming his cock deeper into your ass as you moan loudly, giving into the pleasure.');
    scene.text('After a few more seconds, the trucker groans, filling the condom with his warm seed.');
    scene.text('After he finishes, he smacks your ass. "You\'re the best fuck a man can ask for. Good girl." He then pulls up his pants before leaving the restroom.');
    scene.actions([
      { label: 'Head back to Niko', goto: ['NikoSlut', 'Customers'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Let him fuck your ass', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'anus', 'Trucker');
    qspCall(s, 'arousal', 'anal', 5, 'sub', 'prostitution');
    qspCall(s, 'arousal', 'end');
    scene.img('images/shared/sex/cum/analcreampie/cumanal1.mp4');
    scene.text('You lean against the urinal, enjoying the pleasure building up in your ass as he continuously pounds you, ramming his cock deeper into your ass as you moan loudly, giving into the pleasure.');
    scene.text('After a few more seconds, the trucker groans, filling your ass with his warm seed.');
    scene.text('After he finishes, he smacks your ass. "You\'re the best fuck a man can ask for. Good girl." He then pulls up his pants before leaving the restroom.');
    scene.actions([
      { label: 'Wash up first', goto: ['NikoSlut', 'Mens Restroom'] },
      { label: 'Head back to Niko', goto: ['NikoSlut', 'Customers'] },
    ]);
  } },
      ]);
    }
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterNoCustomers(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/locations/highway/borisdiner/interior1.jpg');
  scene.text('You and Niko wait for a few minutes, but no one approaches, so you continue chatting while trying to pass the time.');
  if (((s as any).NikoProfit ?? 0) >= 1) {
    scene.actions([{ label: 'Continue', goto: ['NikoSlut', 'Customers'] }]);
    scene.actions([
      { label: 'Leave early', handler: (st: GameState) => {
    (st as any).NikoDiner = 0;
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue waiting', goto: ['NikoSlut', 'Customers'] },
  ]);
  scene.build();
}

function enterBikerAttack(s: GameState, scene: SceneBuilder): void {
  (s as any).VKBikerAttack = 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/highway/borisdiner/npc/11.jpg');
  scene.text('A suspicious looking biker approaches you. "Hey bitch, you\'re coming with me!" he says firmly.');
  // TODO-QSP: dynamic text: Niko stands up. "If you want <<$NikoSlutName>>'s services, then you speak with m...
  scene.text(`Niko stands up. "If you want ${((s as any).NikoSlutName ?? 0)}'s services, then you speak with me."`);
  scene.text('The biker pushes him back onto his seat. "I don\'t talk to boys, now get lost. She\'s the one I want."');
  scene.text('Niko gets up and immediately lunges at the man, but he quickly rams his fist into Niko\'s face, sending him face first onto the ground. You try to back away when the biker grabs you by the hair. "You\'re coming with me bitch. I need a new fuck toy and you\'ll do nicely," he says sternly and starts pulling you outside when Niko reaches into his pocket and pulls out a knife before lunging at the man again, only to get caught by the throat. The biker twists Niko\'s wrist, causing him to drop the knife while you try to break free. "You tried to use a knife on me, boy? Big mistake."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Help Niko', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img(`${qspUntranslated(s, "FUNC('face_image')", { location: "NikoSlut" })}`);
    scene.text('You punch the biker as hard as you can, but he barely reacts before turning to you and smacking you with the back of his hand. You look in horror as Niko stops squirming "STOP IT! YOU\'RE KILLING HIM!!!" you cry out, but the biker turns to you and smirks.');
    scene.text('"Am I?" he shrugs. You charge at the biker again, trying one last time to save Niko when you\'re suddenly grabbed from behind and pulled back as a man charges past and rams his fist into the biker\'s face, sending him falling onto the floor. The man then climbs on top of the biker and starts repeatedly punching him in the face. "HOW DARE YOU TOUCH MY BROTHER, YOU WORTHLESS SACK OF SHIT! I\'LL FUCKING TEAR YOU APART!"');
    scene.actions([
      { label: 'Look closer', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/yurikev/avatars/yurik2.jpg');
    scene.text('You take a closer look and recognize the man as Niko\'s brother, Yurik. You quickly run to Niko and check on him while Yurik continues beating the biker to a pulp.');
    scene.text('"Niko, please tell me that you\'re alright?" you ask in a panic. Niko groans as he braces his throat, clearly in too much pain to speak. You turn to watch Yurik still beating on the biker as the diner staff watch in fear, clearly too scared of Yurik\'s rage to break it up.');
    scene.actions([
      { label: 'Approach Yurik', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/fight/down.jpg');
    scene.text('You slowly approach Yurik and slowly place your hand on his shoulder. Yurik quickly turns, causing you to flinch and brace yourself, but to your relief he doesn\'t hit you and climbs off the biker. He takes a few seconds to catch his breath and looks at his brother on the floor before quickly kicking the downed biker one last time. "If I ever see you around here again, I will bury you alive." The biker seems to be unconscious, so you turn to see Niko trying to get up.');
    scene.actions([
      { label: 'Help Niko up', handler: (st: GameState) => {
    ((s as any).npc_grupTipe ?? {})['A189'] = 600;
    (s as any).NikoEv = 21;
    (s as any).NikoSlut = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/bruised1.jpg');
    scene.text('You kneel next to Niko and place his arm around your neck, trying to lift him when Yurik approaches and wraps Niko\'s other arm around his neck. "Let a man handle this."');
    scene.text('You nod and let Yurik carry Niko out of the diner. You look back at the diner staff and see them all discussing what to do next as you leave.');
    scene.actions([
      { label: 'Watch them ride away', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/yurikev/bike2.jpg');
    scene.text('Yurik carries his brother to his motorcycle before turning to you. "Don\'t worry girl, I\'ll take him home to rest. You go and do… whatever you girls do."');
    scene.text('He starts the engine and rides off while holding onto Niko to stop him from falling off.');
    scene.actions([
      { label: 'Turn away', goto: ['road', '20'] },
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

function enterDinerExterior(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) <= 19) {
    scene.img('images/locations/highway/borisdiner/exterior1.jpg');
    scene.text('This small diner has a large parking lot where you can often find over the road trucks parked. It sits at one end of a larger brick building which houses the local biker bar. Truckers can be found here throughout the day while commuters and some locals can be found here during the day and evening. Bikers tend to stop by in the evening or late at night and stay into the early morning hours after the biker bar next door closes.');
  } else {
    scene.img('images/locations/highway/borisdiner/exterior2.jpg');
    scene.text('This small diner has a large parking lot where you can often find over the road trucks parked. It sits at one end of a larger brick building which houses the local biker bar. The outside of the diner and parking lot is well lit, the lighting shining off the chrome of the building while the gaudy neon sign makes sure no one driving down the highway will miss it.');
    scene.text('Truckers can be found here throughout the day while commuters and some locals can be found here during the day and evening. Bikers tend to stop by in the evening or late at night and stay into the early morning hours after the biker bar next door closes.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Enter the diner', goto: ['NikoSlut', 'Diner Interior'] },
    { label: 'Go back to the highway', goto: ['road', '20'] },
    { label: 'Wait (0:30)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
  }, goto: ['NikoSlut', 'Diner Exterior'] },
  ]);
  scene.build();
}

function enterDinerInterior(s: GameState, scene: SceneBuilder): void {
  if (((s as any).YurikEv ?? 0)?.['Name'] === '') {
    ((s as any).YurikEv ?? {})['Name'] = 'a burly bearded man';
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/highway/borisdiner/interior1.jpg');
  if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) <= 17  &&  ((s as any).hour ?? 0) !== ((s as any).BorisDiner ?? 0)?.['Trucker']) {
    scene.text('You see a row of stools along the counter and booths along the walls next to the windows. A few waitresses work behind the counter and carry food out to the booths, while a large man works in the back as a cook. A <a href="exec:gt \'NikoSlut\', \'Truckers\'">trucker</a> is sitting on a stool enjoying his meal.');
  } else {
    if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) <= 17  &&  ((s as any).hour ?? 0) === ((s as any).BorisDiner ?? 0)?.['Trucker']) {
      scene.text('You see a row of stools along the counter and booths along the walls next to the windows. A few waitresses work behind the counter and carry food out to the booths, while a large man works in the back as a cook. A trucker sits on a stool enjoying his meal.');
    } else {
      if (((s as any).hour ?? 0) !== ((s as any).BorisDiner ?? 0)?.['Biker']) {
        scene.text('You see a row of stools along the counter and booths along the walls next to the windows. A few waitresses work behind the counter and carry food out to the booths, while a large man works in the back as a cook. The stools and counters are nearly empty, but you can see some <a href="exec:gt \'NikoSlut\', \'Bikers\'">bikers</a> sitting at the tables chatting and drinking beer.');
      } else {
        scene.text('You see a row of stools along the counter and booths along the walls next to the windows. A few waitresses work behind the counter and carry food out to the booths, while a large man works in the back as a cook. The stools and counters are nearly empty but you can see some bikers sitting at the tables chatting and drinking beer.');
      }
    }
  }
  if (((s as any).hour ?? 0) === 18) {
    if (((s as any).YurikEv ?? 0)?.['Name'] === 'Yurik') {
      scene.text('You see <a href="exec:gt \'NikoSlut\', \'Yurik In\'">Yurik</a> sitting in the corner of the bar eating some dinner.');
    } else {
      scene.text('You see <a href="exec:gt \'NikoSlut\', \'Yurik In\'">a burly bearded man</a> sitting in the corner of the bar eating some dinner.');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the women\'s restroom', goto: ['NikoSlut', 'Ladies Restroom'] },
    { label: 'Go to the mens restroom', goto: ['NikoSlut', 'Mens Restroom'] },
    { label: 'Order some eggs [+$func(\'money\', \'get_cost_string\', 200)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 200) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      scene.actions([{ label: 'Continue', goto: ['NikoSlut', 'Meal 1'] }]);
    }
  } },
    { label: 'Order a salad [+$func(\'money\', \'get_cost_string\', 200)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 200) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      scene.actions([{ label: 'Continue', goto: ['NikoSlut', 'Salad'] }]);
    }
  } },
    { label: 'Order a burger [+$func(\'money\', \'get_cost_string\', 300)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 300) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      scene.actions([{ label: 'Continue', goto: ['NikoSlut', 'Meal 2'] }]);
    }
  } },
    { label: 'Order fried chicken [+$func(\'money\', \'get_cost_string\', 300)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 300) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      scene.actions([{ label: 'Continue', goto: ['NikoSlut', 'Meal 3'] }]);
    }
  } },
    { label: 'Leave diner', goto: ['NikoSlut', 'Diner Exterior'] },
  ]);
  scene.build();
}

function enterMeal1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
  qspCall(s, 'mood', 'raise', 'small');
  (s as any).fat = ((s as any).fat ?? 0) + (2);
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (60);
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (60);
  (s as any).cumspclnt = 2;
  qspCall(s, 'money', 'pay', 200);
  qspCall(s, 'stat', '');
  scene.img('images/shared/food/boris_meal1.jpg');
  scene.text('You order a plate of eggs and hash browns, along with a cup of tea. It doesn\'t take too long to arrive and is better than expected.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', goto: ['NikoSlut', 'Diner Interior'] },
  ]);
  scene.build();
}

function enterMeal2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (15);
  qspCall(s, 'mood', 'raise', 'medium');
  (s as any).fat = ((s as any).fat ?? 0) + (3);
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (60);
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (60);
  (s as any).cumspclnt = 2;
  qspCall(s, 'money', 'pay', 300);
  qspCall(s, 'stat', '');
  scene.img('images/shared/food/boris_meal2.jpg');
  scene.text('You order a large burger and fries, along with a cup of tea. It doesn\'t take too long to arrive and is better than expected.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', goto: ['NikoSlut', 'Diner Interior'] },
  ]);
  scene.build();
}

function enterMeal3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (15);
  qspCall(s, 'mood', 'raise', 'medium');
  (s as any).fat = ((s as any).fat ?? 0) + (3);
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (60);
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (60);
  (s as any).cumspclnt = 2;
  qspCall(s, 'money', 'pay', 300);
  qspCall(s, 'stat', '');
  scene.img('images/shared/food/boris_meal3.jpg');
  scene.text('You order a plate of fried chicken and fries, along with a cup of tea. It doesn\'t take too long to arrive and is better than expected.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', goto: ['NikoSlut', 'Diner Interior'] },
  ]);
  scene.build();
}

function enterSalad(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
  qspCall(s, 'mood', 'raise', 'small');
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (45);
  (s as any).fat = ((s as any).fat ?? 0) - (1);
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (50);
  (s as any).cumspclnt = 2;
  qspCall(s, 'money', 'pay', 200);
  qspCall(s, 'stat', '');
  scene.img('images/shared/food/salad.jpg');
  scene.text('You order a salad, along with a cup of tea. It doesn\'t take too long to arrive and is better than expected.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', goto: ['NikoSlut', 'Diner Interior'] },
  ]);
  scene.build();
}

function enterMensRestroom(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/highway/borisdiner/m_restroom.jpg');
  scene.text('This restroom has a <a href="exec:gt \'NikoSlut\', \'Wash\'">sink</a>, 3 urinals and a <a href="exec:gt \'mirror\', \'start\'">mirror</a>. A pretty funky smell fills the room and judging by the stains on the wall, the guys who use this restroom aren\'t very good at aiming.');
  if (((s as any).NikoSlut ?? 0) === 2) {
    scene.actions([
      { label: 'Return to Niko', goto: ['NikoSlut', 'Customers'] },
    ]);
  } else {
    scene.actions([
      { label: 'Leave restroom', goto: ['NikoSlut', 'Diner Interior'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterLadiesRestroom(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/highway/borisdiner/l_restroom.jpg');
  scene.text('This restroom has 5 <a href="exec:gt \'NikoSlut\', \'Wash\'">sink</a>, 5 <a href="exec:gt \'mirror\', \'start\'">mirrors</a> and 3 stalls. It\'s very clean and looks pretty unused, likely because very few women visit the diner.');
  if (((s as any).NikoSlut ?? 0) === 2) {
    scene.actions([
      { label: 'Return to Niko', goto: ['NikoSlut', 'Customers'] },
    ]);
  } else {
    scene.actions([
      { label: 'Leave restroom', goto: ['NikoSlut', 'Diner Interior'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterWash(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  (s as any).pcs_hairbsh = 0;
  (s as any).pcs_makeup = 1;
  (s as any).cumspclnt = 1;
  qspCall(s, 'cum_cleanup', '');
  if (((s as any).pcs_sweat ?? 0) < 30) {
    (s as any).pcs_sweat = 15 + (Math.floor(Math.random() * 5) + 0);
  } else {
    (s as any).pcs_sweat = ((s as any).pcs_sweat ?? 0) - (10 + (Math.floor(Math.random() * 5) + 0));
  }
  qspCall(s, 'stat', '');
  scene.text('<center><b>Bathroom</b></center>');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/facecleanse.jpg');
  scene.text('You grab a few paper towels and approach the sink to clean yourself as thoroughly as possible while taking a few seconds to enjoy a splash of warm water on your face, leaving you feeling refreshed as you finish up and walk away from the sink.');
  if (((s as any).NikoSlut ?? 0) > 1) {
    scene.actions([
      { label: 'Dry off', goto: ['NikoSlut', 'Customers'] },
    ]);
  } else {
    scene.actions([
      { label: 'Dry off', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterTruckers(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).BorisDiner ?? {})['Trucker'] = ((s as any).hour ?? 0);
  qspCall(s, 'stat', '');
  (s as any).VK = 0;
  if (((s as any).VK ?? 0) === 1) {
    scene.img('images/locations/highway/borisdiner/npc/2.jpg');
    if (((s as any).NikoSlutName ?? 0) === '') {
      scene.text('You approach the trucker and he immediately notices you and gives you a warm smile. "Hey there missy. How are you doing this fine day?"');
      scene.text('"I\'m doing well," you reply.');
      scene.text('"Why don\'t you sit down with me and have a meal? On me," he offers.');
    } else {
      // TODO-QSP: dynamic text: You approach the trucker and he immediately notices you and gives you a warm smi...
      scene.text(`You approach the trucker and he immediately notices you and gives you a warm smile. "${((s as any).NikoSlutName ?? 0)}! It's great to see you again. How are you doing this fine day?"`);
      scene.text('"I\'m doing well," you reply.');
      scene.text('"Why don\'t you sit down with me and have a meal? On me," he offers.');
    }
  } else {
    if (((s as any).VK ?? 0) === 2) {
      scene.img('images/locations/highway/borisdiner/npc/5.jpg');
      if (((s as any).NikoSlutName ?? 0) === '') {
        scene.text('As you approach the trucker, he gives you a very friendly smile as he pulls up a stool for you to sit on. You decide to take him up on his offer and sit next to him. "Hey there, pretty lady. You seem new here. Let me treat you to a meal."');
      } else {
        scene.text('As you approach the trucker, he gives you a very friendly smile as he pulls up a stool for you to sit on. You decide to take him up on his offer and sit next to him. "Hey there, pretty lady. I don\'t see your boyfriend, so I assume you\'re here for a meal? Let me treat you."');
      }
    } else {
      if (((s as any).VK ?? 0) === 3) {
        scene.img('images/locations/highway/borisdiner/npc/6.jpg');
        if (((s as any).NikoSlutName ?? 0) === '') {
          scene.text('You take a seat next to the trucker and he takes a look at you. "What\'s a little thing like you doing here? Shouldn\'t you be at school or at home or something?" You try to ignore him, realizing that he has nothing interesting to say.');
        } else {
          scene.text('You take a seat next to the trucker and he takes a look at you then says, "Hey, I remember you. You\'re that slut that was here before. I would ask you to suck my dick, but I have work to do right now. Maybe later, eh?"');
          scene.text('You shrug before walking away.');
        }
      } else {
        if (((s as any).VK ?? 0) === 4) {
          scene.img('images/locations/highway/borisdiner/npc/7.jpg');
          if (((s as any).NikoSlutName ?? 0) === '') {
            scene.text('You approach the trucker, who doesn\'t seem to notice you at first, but slightly recoils when he see you. He then adjusts his cap. "Oh hey there. Have we met? Oh where are my manners? My name is Daniel and I\'m here visiting an old friend of mine. He owns this fine establishment. Anyway, I need to get going now. Take care of yourself, missy."');
          } else {
            scene.text('You approach the trucker, who doesn\'t seem to notice you at first, but slightly recoils when he see you. He then adjusts his cap. "Oh hey, it\'s you. Your boyfriend isn\'t with you. I assume that means you\'re not here on business, huh? It\'s okay, I\'m just here visiting an old friend of mine who owns this fine establishment. Anyway, I need to get going now. Take care of yourself, missy."');
          }
        } else {
          if (((s as any).VK ?? 0) === 5) {
            scene.img('images/locations/highway/borisdiner/npc/8.jpg');
            if (((s as any).NikoSlutName ?? 0) === '') {
              scene.text('You walk up to the trucker as he looks you over. "What brings a cute girl like yourself out here? Shouldn\'t you be in the town instead of out here with a bunch of old truckers?" He chuckles. "I\'m just kidding. Make yourself at home and steer clear of the bikers that come around here at night. A young girl like you doesn\'t want to get tangled with them."');
            } else {
              // TODO-QSP: dynamic text: You walk up to the trucker as he looks you over. "If it isn't <<$NikoSlutName>>....
              scene.text(`You walk up to the trucker as he looks you over. "If it isn't ${((s as any).NikoSlutName ?? 0)}. What brings you out here without your boyfriend? Are you here on business or just to get yourself a good meal before heading back to town?"`);
              scene.text('"I\'m just passing through." you reply and the trucker nods.');
              scene.text('"Well order yourself a good meal and steer clear of the bikers that come around here at night. A young girl like you doesn\'t want to get tangled with them."');
            }
          } else {
            scene.img('images/locations/highway/borisdiner/npc/9.jpg');
            if (((s as any).NikoSlutName ?? 0) === '') {
              scene.text('You see one of the truckers checking you out as you approach. "Whoa, what\'s a pretty thing like yourself doing here? Should you be playing with your friends?" You shake your head and walk away, feeling a bit annoyed at his comments.');
            } else {
              // TODO-QSP: dynamic text: You see one of the truckers checking you out as you approach. "Whoa, it's <<$Nik...
              scene.text(`You see one of the truckers checking you out as you approach. "Whoa, it's ${((s as any).NikoSlutName ?? 0)}. Didn't think I'd see you here without that boy you travel with. If you're here for business then I'm afraid I can't stay long. I need to get back on the road and make a few deliveries. Maybe another time sweetheart." He waves at you and goes back to eating his food.`);
            }
          }
        }
      }
    }
  }
  if (((s as any).VK ?? 0) === 1  ||  ((s as any).VK ?? 0) === 2) {
    (s as any).VKPartner = 1;
    scene.actions([
      { label: 'Accept his offer (Eat a burger)', goto: ['NikoSlut', 'Friendly Meal'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Walk away', goto: ['NikoSlut', 'Diner Interior'] },
  ]);
  scene.build();
}

function enterBikers(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).BorisDiner ?? {})['Biker'] = ((s as any).hour ?? 0);
  qspCall(s, 'stat', '');
  (s as any).VK = 0;
  if (((s as any).VK ?? 0) === 1) {
    scene.img('images/locations/highway/borisdiner/npc/1.jpg');
    if (((s as any).NikoSlutName ?? 0) === '') {
      scene.text('As you approach the biker, his eyes light up. "Hello miss. You look great today. Here take a seat." He moves his duffel bag off the seat next to him and gives you a warm smile as you sit next to him "Do you hear that?"');
      scene.text('You listen for a second before you hear a funny voice. "Hey there, pretty lady. I\'d ask you to bone, but that would be a total bone head decision." You look over your shoulder and giggle when you see a little skeleton figure that the biker is holding.');
      scene.text('"I knew that would make you laugh and I always like to see a pretty girl laugh. Let me treat you to a meal. I\'ll get you a big burger."');
    } else {
      // TODO-QSP: dynamic text: As you approach the biker, his eyes light up. "<<$NikoSlutName>>, it's good to s...
      scene.text(`As you approach the biker, his eyes light up. "${((s as any).NikoSlutName ?? 0)}, it's good to see you again. Here take a seat." He moves his duffel bag off the seat next to him and gives you a warm smile as you sit next to him. "Do you hear that?"`);
      scene.text('You listen for a second before you hear a funny voice. "Hey there, pretty lady. I\'d ask you to bone, but that would be a total bone head decision." You look over your shoulder and giggle when you see a little skeleton figure that the biker is holding.');
      scene.text('"I knew that would make you laugh and I always like to see a pretty girl laugh. Let me treat you to a meal. I\'ll get you a big burger."');
    }
  } else {
    if (((s as any).VK ?? 0) === 2) {
      scene.img('images/locations/highway/borisdiner/npc/3.jpg');
      scene.text('You walk up to the biker and he looks up at you. "What do you want? If you\'re here to tell me I\'m the father of your kid, then you can go fuck off right now. I don\'t give a shit about any kid of mine." He turns away from you, so you walk away feeling confused and annoyed.');
    } else {
      if (((s as any).VK ?? 0) === 3) {
        scene.img('images/locations/highway/borisdiner/npc/4.jpg');
        if (((s as any).NikoSlutName ?? 0) === '') {
          scene.text('You approach one of the bikers and he barely turns to face you before saying, "You seem to be in the wrong place. You should probably get going."');
          scene.text('Sensing his hostility, you decide not to push your luck and walk away.');
        } else {
          scene.text('You approach one of the bikers and he barely turns to face you before saying, "Oh hey, it\'s the dirty slut. I don\'t need my dick sucked right now, so why don\'t you get lost?"');
          scene.text('Sensing his hostility, you decide not to push your luck and walk away.');
        }
      } else {
        scene.img('images/locations/highway/borisdiner/npc/10.jpg');
        if ((Math.floor(Math.random() * 2) + 1) === 1) {
          scene.text('You approach one of the bikers as he\'s telling a joke to the others. "When people ask me why I travel the roads instead of getting a normal job and a family, I always tell them this; I last worked as a bank teller, can you believe that? Anyway one day this fat woman walks into the bank and she asks me to check her balance. Guess what I did? I pushed the bitch over! How is that for checking your balance bitch?" You and the other bikers break into loud laughter as the biker prepares to tell another story.');
        } else {
          scene.text('You approach one of the bikers as he\'s telling a joke to the others. "Alright guys, you gotta hear this one. What do you tell a woman with two black eyes? Nothing you haven\'t already told her twice!" The other bikers break into laughter before the biker tells another joke. "Now what do you call a woman with two black "GUYS"?… A bitch looking for a good time!" He then sexually thrusts his hips back and forth, causing you and the other bikers to break into loud laughter as he prepares to tell another story.');
        }
      }
    }
  }
  if (((s as any).VK ?? 0) === 1) {
    (s as any).VKPartner = 2;
    scene.actions([
      { label: 'Accept his offer (Eat a burger)', goto: ['NikoSlut', 'Friendly Meal'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Walk away', goto: ['NikoSlut', 'Diner Interior'] },
  ]);
  scene.build();
}

function enterFriendlyMeal(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (15);
  qspCall(s, 'mood', 'raise', 'medium');
  (s as any).fat = ((s as any).fat ?? 0) + (3);
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (60);
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (60);
  (s as any).cumspclnt = 2;
  if (((s as any).VKPartner ?? 0) === 1) {
  }
  if (((s as any).VKPartner ?? 0) === 2) {
  }
  qspCall(s, 'stat', '');
  scene.img('images/shared/food/boris_meal2.jpg');
  // TODO-QSP: dynamic text: The <<$VKPartner_text>> orders you a burger and you both chat until the food arr...
  scene.text(`The ${((s as any).VKPartner_text ?? 0)} orders you a burger and you both chat until the food arrives. You and the ${((s as any).VKPartner_text ?? 0)} then spend the next few minutes eating while discussing current events until you both finish your meals.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', goto: ['NikoSlut', 'Diner Interior'] },
  ]);
  scene.build();
}

function enterYurikIn(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  (s as any).VK = 0;
  scene.img('images/characters/pavlovsk/school/boy/niko/yurikev/avatars/yurik2.jpg');
  if (((s as any).YurikEv ?? 0)?.['Name'] !== 'Yurik'  &&  ((s as any).NikoEv ?? 0) < 21) {
    scene.text('You approach the burly bearded man and he slowly glances at you before turning away to continue eating his food, having nothing to say to you.');
  } else {
    if (((s as any).YurikEv ?? 0)?.['Name'] === 'Yurik'  &&  ((s as any).NikoEv ?? 0) <= 21) {
      scene.text('You approach the Yurik and he slowly glances at you. "You shouldn\'t be in here, girl. Now get lost." He turns away from you to continue eating his food, having nothing more to say to you.');
    } else {
      if (((s as any).NikoEv ?? 0) > 21  &&  ((s as any).YurikEv ?? 0)?.['Romance'] === 1) {
        // TODO-QSP: dynamic text: You approach Yurik and he turns to face you before giving you a smile. "<<$pcs_f...
        scene.text(`You approach Yurik and he turns to face you before giving you a smile. "${((s as any).pcs_firstname ?? 0)}, the love of my life! Did you stop by to pay me a visit or do you need something? Anything my kitten wants, she gets."`);
        scene.actions([
          { label: 'Eat with Yurik', goto: ['NikoSlut', 'Yurik Dinner'] },
        ]);
      } else {
        scene.text('You see Yurik laughing with the ghosts of the fallen. He tells them of how he loves to ride bikes to hell and how he flies in the sky before landing on a dragon, which he uses to scorch the city in flames. <font color=#FF00FF>Pssst, you should not be seeing this message. Please report this on the Girl Life TFGS/F95 forum, on our Discord or directly to me, Violet Kitten.</font>');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Walk away', goto: ['NikoSlut', 'Diner Interior'] },
  ]);
  scene.build();
}

function enterYurikOut(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  (s as any).VK = 0;
  scene.img('images/characters/pavlovsk/school/boy/niko/yurikev/events/highway.jpg');
  if (((s as any).YurikEv ?? 0)?.['Name'] !== 'Yurik'  &&  ((s as any).YurikEv ?? 0)?.['Stranger'] === 0) {
    scene.text('You see a burly bearded man sticking out his thumb at the incoming vehicles. He seems to be hitchhiking and doesn\'t seem to care that you\'re staring at him.');
  } else {
    if (((s as any).YurikEv ?? 0)?.['Name'] !== 'Yurik'  &&  ((s as any).YurikEv ?? 0)?.['Stranger'] === 1) {
      scene.text('You see a burly bearded man sticking out his thumb at the incoming vehicles, trying to hitch a ride. He looks familiar, but can\'t quite put your finger on it…');
    } else {
      scene.text('You see Yurik sticking out his thumb at the incoming vehicles. He seems to be hitchhiking as he notices you. "Well if it isn\'t Niko\'s little whore. Get lost girl, I don\'t need my dick sucked right now."');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Walk away', goto: ['road', '<<nroad>>'] },
  ]);
  scene.build();
}

function enterYurikDinner(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (15);
  qspCall(s, 'mood', 'raise', 'medium');
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (60);
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (60);
  (s as any).cumspclnt = 2;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/yurikev/kiss.mp4');
  scene.text('Yurik orders you some fried chicken with mashed potatoes and gravy, along with a cup of tea. You and Yurik spend the next few minutes eating and chatting until you both finish your food. Yurik then holds you in his strong arms and gives you a passionate kiss.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', goto: ['NikoSlut', 'Diner Interior'] },
  ]);
  scene.build();
}

function enterDinerExit(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/highway/borisdiner/interior2.jpg');
  scene.text('You look around the diner and notice that everyone has left as Niko turns to you. "I guess we\'re done for the day. Great work."');
  if (((s as any).NikoEv ?? 0) === 19) {
    scene.actions([
      { label: 'Leave the diner', goto: ['NikoEv2', 'Diner Exit 2'] },
    ]);
  } else {
    scene.actions([
      { label: 'Leave the diner', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    if (((s as any).NikoSlut ?? 0) === 2) {
      (s as any).NikoSlut = 1;
    }
    if (((s as any).NikoSlut ?? 0) < 3) {
      // TODO-QSP: gs 'money', 'earn', NikoProfit * 400
    } else {
      // TODO-QSP: gs 'money', 'earn', NikoProfit * 1000
    }
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/payment.jpg');
    scene.text('Once you leave the diner, Niko gives you a kiss on the cheek. "You\'ve done some great work today. Keep it up." He hands you your cut of the profit and walks you back home while chatting with you about various topics. When you reach your apartment, he gives you a soft kiss before turning around and walking away.');
    scene.actions([
      { label: 'Wave goodbye', handler: (st: GameState) => {
    (st as any).NikoProfit = 0;
  }, goto: ['korrPar', ''] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'Customers':
      enterCustomers(s, scene);
      break;
    case 'Customer 1':
      enterCustomer1(s, scene);
      break;
    case 'Customer 2':
      enterCustomer2(s, scene);
      break;
    case 'Customer 3':
      enterCustomer3(s, scene);
      break;
    case 'Customer 4':
      enterCustomer4(s, scene);
      break;
    case 'Customer 5':
      enterCustomer5(s, scene);
      break;
    case 'Customer 6':
      enterCustomer6(s, scene);
      break;
    case 'Customer 7':
      enterCustomer7(s, scene);
      break;
    case 'Customer 8':
      enterCustomer8(s, scene);
      break;
    case 'Customer 9':
      enterCustomer9(s, scene);
      break;
    case 'No Customers':
      enterNoCustomers(s, scene);
      break;
    case 'Biker Attack':
      enterBikerAttack(s, scene);
      break;
    case 'Diner Exterior':
      enterDinerExterior(s, scene);
      break;
    case 'Diner Interior':
      enterDinerInterior(s, scene);
      break;
    case 'Meal 1':
      enterMeal1(s, scene);
      break;
    case 'Meal 2':
      enterMeal2(s, scene);
      break;
    case 'Meal 3':
      enterMeal3(s, scene);
      break;
    case 'Salad':
      enterSalad(s, scene);
      break;
    case 'Mens Restroom':
      enterMensRestroom(s, scene);
      break;
    case 'Ladies Restroom':
      enterLadiesRestroom(s, scene);
      break;
    case 'Wash':
      enterWash(s, scene);
      break;
    case 'Truckers':
      enterTruckers(s, scene);
      break;
    case 'Bikers':
      enterBikers(s, scene);
      break;
    case 'Friendly Meal':
      enterFriendlyMeal(s, scene);
      break;
    case 'Yurik In':
      enterYurikIn(s, scene);
      break;
    case 'Yurik Out':
      enterYurikOut(s, scene);
      break;
    case 'Yurik Dinner':
      enterYurikDinner(s, scene);
      break;
    case 'Diner Exit':
      enterDinerExit(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const NikoSlut: LocationDef = {
  name: 'NikoSlut',
  title: 'Bathroom',
  region: 'other',
  locationType: 'bathroom',
  locclass: 'restroom',
  enter: enter,
};
