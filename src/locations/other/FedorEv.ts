import { qspCall, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).numnpc = 5;
  (s as any).static_num = 'A5';
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${((s as any).npc_firstname ?? 0)?.['A5'] ?? ''} ${((s as any).npc_lastname ?? 0)?.['A5'] ?? ''}</b></center>`);
  scene.img('images/characters/shared/headshots_main/big5.jpg');
  if (((s as any).kotovLoveQW ?? 0) > 0  &&  ((s as any).week ?? 0) < 5  &&  ((s as any).kotovVSkozlov ?? 0) === 0  &&  ((s as any).fedorKozlovQW ?? 0) >= 10) {
    qspGoto(s, 'FedorEv', 'Vitek Vs Fedor');
  } else {
    if (((s as any).kotovVSkozlov ?? 0) === 1) {
      qspGoto(s, 'FedorEv', 'Strela Chat');
    } else {
      if (((s as any).FedorvsDimka ?? 0) === 2) {
        qspGoto(s, 'FedorEv4', 'Dimka Aftermath');
      } else {
        if (((s as any).fedorKozlovQW ?? 0) >= 10  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 150  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250  &&  ((s as any).fedorkoztalk ?? 0) === 0  &&  (!((s as any).FedorLove ?? 0))) {
          qspGoto(s, 'FedorEv', 'Gorslut');
        } else {
          if (((s as any).fedorKozlovQW ?? 0) >= 10  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 250  &&  (!((s as any).FedorLove ?? 0))) {
            qspGoto(s, 'FedorEv', 'Gorslut 2');
          } else {
            if (((s as any).fedorKozlovQW ?? 0) === 10  &&  ((s as any).FedorLuv ?? 0) < -5) {
              qspGoto(s, 'FedorEv2', 'Fedor Breakup');
            } else {
              if (((s as any).fedorKozlovQW ?? 0) >= 10  &&  ((s as any).dimaFilm ?? 0) === 1  &&  ((s as any).FedorvsDimka ?? 0) === 1) {
                qspGoto(s, 'FedorMisc', 'Fedor Vs Dimka');
              } else {
                if (((s as any).fedorKozlovQW ?? 0) >= 20  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
                  if ((!(Math.floor(Math.random() * 2) + 0))) {
                    qspGoto(s, 'FedorEv', 'Fedor Date 2');
                  } else {
                    qspGoto(s, 'FedorEv', 'Fedor Date 3');
                  }
                } else {
                  qspGoto(s, 'FedorEv', 'Fedor Date');
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

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).numnpc = 5;
  (s as any).static_num = 'A5';
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${((s as any).npc_firstname ?? 0)?.['A5'] ?? ''} ${((s as any).npc_lastname ?? 0)?.['A5'] ?? ''}</b></center>`);
  scene.img('images/characters/shared/headshots_main/big5.jpg');
  if (((s as any).kotovLoveQW ?? 0) > 0  &&  ((s as any).week ?? 0) < 5  &&  ((s as any).kotovVSkozlov ?? 0) === 0  &&  ((s as any).fedorKozlovQW ?? 0) >= 10) {
    qspGoto(s, 'FedorEv', 'Vitek Vs Fedor');
  } else {
    if (((s as any).kotovVSkozlov ?? 0) === 1) {
      qspGoto(s, 'FedorEv', 'Strela Chat');
    } else {
      if (((s as any).FedorvsDimka ?? 0) === 2) {
        qspGoto(s, 'FedorEv4', 'Dimka Aftermath');
      } else {
        if (((s as any).fedorKozlovQW ?? 0) >= 10  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 150  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250  &&  ((s as any).fedorkoztalk ?? 0) === 0  &&  (!((s as any).FedorLove ?? 0))) {
          qspGoto(s, 'FedorEv', 'Gorslut');
        } else {
          if (((s as any).fedorKozlovQW ?? 0) >= 10  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 250  &&  (!((s as any).FedorLove ?? 0))) {
            qspGoto(s, 'FedorEv', 'Gorslut 2');
          } else {
            if (((s as any).fedorKozlovQW ?? 0) === 10  &&  ((s as any).FedorLuv ?? 0) < -5) {
              qspGoto(s, 'FedorEv2', 'Fedor Breakup');
            } else {
              if (((s as any).fedorKozlovQW ?? 0) >= 10  &&  ((s as any).dimaFilm ?? 0) === 1  &&  ((s as any).FedorvsDimka ?? 0) === 1) {
                qspGoto(s, 'FedorMisc', 'Fedor Vs Dimka');
              } else {
                if (((s as any).fedorKozlovQW ?? 0) >= 20  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
                  if ((!(Math.floor(Math.random() * 2) + 0))) {
                    qspGoto(s, 'FedorEv', 'Fedor Date 2');
                  } else {
                    qspGoto(s, 'FedorEv', 'Fedor Date 3');
                  }
                } else {
                  qspGoto(s, 'FedorEv', 'Fedor Date');
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

function enterVitekVsFedor(s: GameState, scene: SceneBuilder): void {
  (s as any).kotovVSkozlov = 1;
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${'Viktor [Vitek] Kotov'}</b></center>`);
  scene.img('images/characters/shared/headshots_main/big9.jpg');
  // TODO-QSP: dynamic text: You approach Fedor and wrap your arms around him as he does the same, embracing ...
  scene.text(`You approach Fedor and wrap your arms around him as he does the same, embracing you firmly. Suddenly, Vitek approaches Fedor from behind, violently shoving him back and saying in a menacing tone, "What do you think you're doing, punk? ${((s as any).pcs_firstname || '')} is <b>mine!</b>" Fedor turns his face to Vitek and firmly states, "${((s as any).pcs_firstname || '')} is with me now, so why don't you hit the road?" Vitek theatrically moves his hand to his ear and says in a threatening tone, "What did you just say!?" To which Fedor boldly replies, "You heard me." You can tell that Vitek is seething with rage now as his face turns red and the knuckles on his clenched fists turn a deathly white. Fedor moves his face even closer to Vitek's and repeats, clenching his fists: "You heard me. Get away from ${((s as any).pcs_firstname || '')}, Vitek."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell Vitek you want to be with Fedor', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).kotovLoveQW = (-1);
    qspCall(st, 'stat', '');
    scene.text(`<center><b>${'Viktor [Vitek] Kotov'}</b></center>`);
    scene.img('images/characters/shared/headshots_main/big9.jpg');
    scene.text('Not wanting to see Fedor hurt, you tell Vitek the truth: "Vitek, please calm down. I know we had some fun together, but I\'m with Fedor now." Vitek grimaces, obviously furious with both of you, but fortunately has enough composure to restrain himself from hitting you in the face. He ultimately calms himself before looking you in the eyes and shouting, "You\'re going to pay for this, you fucking cheating bitch!" Vitek begins walking away, but not before kicking over several garbage cans on the way. You can\'t help but shudder at the feeling that this might not be the last you\'ve heard of him.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
    { label: 'Don\'t interrupt and see what happens', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/Strela/fvsv.jpg');
    scene.text('Vitek suddenly hits Fedor on the chin with a quick jab, which sends Fedor flying backwards, landing on the pavement. Vitek immediately climbs on top of him, grabbing him by the collar with his left hand while punching Fedor in the face with his right. Fedor tries to ball up and kick Vitek, but doesn\'t manage to faze him. Vitek gives him a hard kick in the ribs when he gets back up, which makes Fedor fall over, grasping his stomach. As Fedor tries to get up, Vitek kicks him in the head, which causes Fedor to fall over again. As Fedor hits the ground, you see Vasily and Dan coming around the corner; they run towards Vitek when they notice that he\'s fighting. "Vitek, what\'s going on?" Vasily asks. Vitek kicks the now-prone Fedor once more in his sides. "This fucker is trying to steal my girl!" He exclaims, pointing at Fedor.');
    // TODO-QSP: dynamic text: Feeling terrified that Vitek might hurt you too in his blind rage, you remain si...
    scene.text(`Feeling terrified that Vitek might hurt you too in his blind rage, you remain silent. Dan moves over to Fedor as he struggles to remain conscious and asks, "Hasn't anyone told you that it's rude to steal someone's girl, Fedor? What do you have to say for yourself?" Fedor looks up, barely realizing what's going on anymore. His face is all busted up, but he's not willing to let it go: "${((st as any).pcs_firstname || '')} is my girl…" he groans. Vasily begins laughing like a jackal, while Vitek furiously shouts at Fedor once more, "You little shit! I'm going to…" Dan interrupts him: "Relax, Vitek. Look at his face. I think he realizes his mistake. Or do you want to make things even worse for yourself?" That last question was directed at Fedor.`);
    scene.text(`<center><b>${'Vasily [Shulga] Shulgin'}</b></center>`);
    scene.img('images/characters/shared/headshots_main/big11.jpg');
    scene.actions([
      { label: 'Remain silent', handler: (st: GameState) => {
    (st as any).strelaDay = ((st as any).daystart ?? 0);
    (st as any).strelaQW = 1;
    qspCall(st, 'stat', '');
    scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/fedorangry.jpg');
    scene.text('Fedor slowly rises to his feet and softly mutters, "Fucking Gopniks…" Vasily hears him clearly and immediately slams his fist into Fedor\'s face, but Fedor refuses to fall until he is hit by Dan in the stomach. No longer able to support his weight, he falls to his hands and knees. Vasily jokes, "Look at him… already assuming the position!" making the other Gopniks laugh. Vitek kicks him in the stomach again, knocking Fedor onto his back, lying flat on the ground. Realizing he won, Vitek looks to Dan and asks, "Can you believe the shit I have to put up with?"');
    scene.actions([
      { label: 'Hear what Dan has to say', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/Strela/fedor.jpg');
    // TODO-QSP: dynamic text: Dan replies: "We could ask Vadim Bely to take care of him. He''ll know how to pu...
    scene.text(`Dan replies: "We could ask Vadim Bely to take care of him. He'll know how to punish Fedor in a way that he'll never forget." Vitek nods: "Good plan. Set it up, will you?" He then turns to Fedor "We're settling this tomorrow, kid. You better be here after school, it'll be ten times worse for you if you don't." He then waves for his friends to follow him "Come on guys. Let's go have some beers in the park, I need to relax. ${((st as any).pcs_nickname || '')}, if you want to join us, you know where we'll be." Vitek and Dan leave Fedor on the ground then head for the schoolyard exit, but as they pass Fedor, Vasily quickly kicks him in the ribs one more time, still laughing that signature jackal laugh of his. He then joins his friends, and moments later, they're gone.`);
    scene.actions([
      { label: 'Leave the school courtyard', goto: ['pav_residential', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterStrelaChat(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/Strela/fedorupset.jpg');
  // TODO-QSP: dynamic text: You see Fedor sitting in a corner by himself. As you approach, Fedor turns to yo...
  scene.text(`You see Fedor sitting in a corner by himself. As you approach, Fedor turns to you and says, "I'm sorry ${((s as any).pcs_firstname || '')}, but I… I can't talk right now."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Walk away', goto: ['gschool_grounds', 'main'] },
  ]);
  scene.build();
}

function enterGorslut(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/fedorsad.jpg');
  // TODO-QSP: dynamic text: Fedor looks clearly troubled: "<<$pcs_firstname>>, I''ve been hearing rumors abo...
  scene.text(`Fedor looks clearly troubled: "${((s as any).pcs_firstname || '')}, I've been hearing rumors about you being a ${((s as any).gnikname || '')}. Please tell me that they are not true."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell Fedor the truth', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/fedorsad.jpg');
    scene.text('You lower your head in shame and tell Fedor the truth. Fedor slowly nods and after a few moments asks, "Was this only a one-time slip-up or do you plan to keep flirting with other guys? Because I need to know right now."');
    scene.actions([
      { label: 'Convince Fedor that he can trust you', handler: (st: GameState) => {
    (st as any).fedorkoztalk = 1;
    qspCall(st, 'stat', '');
    scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
    scene.img('images/characters/shared/headshots_main/big5.jpg');
    scene.text('"It was a stupid mistake that I wish I could take back. I had too many drinks and…" Fedor raises his hand and says, "You don\'t need to tell me more, let\'s just put this behind us." You lean forward and gratefully kiss Fedor on the cheek. He then hugs you for a few moments and walks away.');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    if (((st as any).loc ?? 0) === 'gschool_lunch') {
      qspGoto(st, 'gschool_lessons', 'short_break');
    } else {
      qspGoto(st, 'gschool_grounds', 'main');
    }
  } },
    ]);
  } },
      { label: 'Break up with Fedor', handler: (st: GameState) => {
    (st as any).fedorkoztalk = 1;
    (st as any).fedorKozlovQW = (-1);
    qspCall(st, 'stat', '');
    scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/fedorangry.jpg');
    scene.text('"I\'m sorry Fedor but I enjoy the attention of men and I\'m not really one for commitment. I thought you understood this." Fedor lowers his head clearly upset but after a few seconds he raises his head then looks in your eyes and says, "I guess what we had was a lie then… Go be with as many men as you want, I won\'t hold you back anymore." He takes a few steps back, never breaking eye contact with you until he suddenly turns away and walks off.');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    if (((st as any).loc ?? 0) === 'gschool_lunch') {
      qspGoto(st, 'gschool_lessons', 'short_break');
    } else {
      qspGoto(st, 'gschool_grounds', 'main');
    }
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Lie to Fedor', handler: (st: GameState) => {
    (st as any).fedorkoztalk = 1;
    qspCall(st, 'stat', '');
    scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
    scene.img('images/characters/shared/headshots_main/big5.jpg');
    scene.text('You step forward and place your hand on Fedor\'s cheek as you softly tell him, "I would never do such a thing! You know how rumors can be; I\'m sure it\'s just some guy with a hard on for me trying to tear us apart." Fedor lowers his head but after a few moments raises it with a smile on his face and says, "I knew it had to be a lie. I know you\'re better than that, I\'m sorry I jumped the gun on this one but I will find a way to make it up to you." While caressing his cheek with your hand you lean forward and give him a soft kiss on his other cheek and whisper, "There is no need."');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    if (((st as any).loc ?? 0) === 'gschool_lunch') {
      qspGoto(st, 'gschool_lessons', 'short_break');
    } else {
      qspGoto(st, 'gschool_grounds', 'main');
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterGorslut2(s: GameState, scene: SceneBuilder): void {
  (s as any).fedorKozlovQW = (-1);
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/fedorangry.jpg');
  // TODO-QSP: dynamic text: Fedor looks distraught: "<<$pcs_firstname>>, I trusted you with all my heart, an...
  scene.text(`Fedor looks distraught: "${((s as any).pcs_firstname || '')}, I trusted you with all my heart, and you turn out to be just another ${((s as any).gnikname || '')}. I never should have trusted you… I see now that everything we had was a lie… Just stay away from me!" He turns around and walks away. Looks like he wants nothing more to do with you.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Move away', handler: (st: GameState) => {
    if (((st as any).loc ?? 0) === 'gschool_lunch') {
      qspGoto(st, 'gschool_lessons', 'short_break');
    } else {
      qspGoto(st, 'gschool_grounds', 'main');
    }
  } },
  ]);
  scene.build();
}

function enterFedorDate(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
  scene.img('images/characters/pavlovsk/school/boy/fedor/school/fedor.jpg');
  scene.text('As you walk toward Fedor, he smiles and waves you over and as you approach Fedor he stands up and gently holds you in his arms, which gives you a strange sense of comfort and safety.');
  if ((!((s as any).fedorkozqw ?? 0))) {
    scene.actions([
      { label: 'Return the hug', goto: ['FedorEv', 'Park'] },
    ]);
  } else {
    if (((s as any).fedorkozqw ?? 0) === 1) {
      scene.actions([
        { label: 'Return the hug', goto: ['FedorEv', 'Cinema'] },
      ]);
    } else {
      if (((s as any).fedorkozqw ?? 0) === 2) {
        scene.actions([
          { label: 'Return the hug', goto: ['FedorEv', 'Home'] },
        ]);
      } else {
        if (((s as any).fedorkozqw ?? 0) === 3) {
          scene.actions([
            { label: 'Return the hug', goto: ['FedorEv', 'Skate'] },
          ]);
        } else {
          if (((s as any).fedorkozqw ?? 0) === 4) {
            scene.actions([
              { label: 'Return the hug', goto: ['FedorEv', 'Park 3'] },
            ]);
          } else {
            if (((s as any).fedorkozqw ?? 0) === 5) {
              scene.actions([
                { label: 'Return the hug', goto: ['FedorEv', 'Cinema'] },
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

function enterPark(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/hold.jpg');
  // TODO-QSP: dynamic text: You wrap your arm around Fedor''s neck while enjoying his embrace and after a fe...
  scene.text(`You wrap your arm around Fedor's neck while enjoying his embrace and after a few moments he asks you "Hey ${((s as any).pcs_nickname || '')}, would you like to go for a walk in the park?"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Not now', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
    scene.img('images/characters/shared/headshots_main/big5.jpg');
    scene.text('You slowly pull back and say to Fedor "I can\'t go right now, I have something I need to do." He then nods with a forced smile and responds, "I guess I\'ll catch you next time." But as you leave you look back and notice that Fedor lowers his head, trying to hide a light frown on his face as he watches you walk away.');
    scene.actions([
      { label: 'Move away', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
    { label: 'Sure', handler: (st: GameState) => {
    (st as any).fedorkozqw = 1;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/hold.jpg');
    scene.text('"I could use a nice walk," you tell Fedor. He gives you a pleased smile and places his arm gently on your back as he leads you toward the park.');
    scene.actions([
      { label: 'Go to the park with Fedor', goto: ['FedorEv2', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterCinema(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/hold.jpg');
  scene.text('You place your arm around Fedor\'s neck while enjoying his embrace and after a few moments he says to you, "There is a movie playing in a bit that I\'m sure you will love. Would you be up for a good horror?" He then shrugs and sarcastically says, "But if you\'re too scared then we could always pick flowers or something."');
  if (((s as any).fedorkozqw ?? 0) === 5) {
    scene.actions([
      { label: 'Sure, that sounds fun', handler: (st: GameState) => {
    (st as any).fedorkozqw = 2;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/hold.jpg');
    scene.text('You grin as you say, "I\'m always up for a good horror, but I must warn you, I don\'t scare easily." Fedor responds, "We\'ll see about that." He then leads you to the cinema.');
    scene.actions([
      { label: 'Go to the movies with Fedor', goto: ['FedorEv2', 'Cinema'] },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Sure, that sounds fun', handler: (st: GameState) => {
    (st as any).fedorkozqw = 2;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/hold.jpg');
    scene.text('You grin as you say, "I\'m always up for a good horror, but I must warn you, I don\'t scare easily." Fedor responds, "We\'ll see about that." He then leads you to the cinema.');
    scene.actions([
      { label: 'Go to the movies with Fedor', goto: ['FedorEv2', 'Movies'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Not now', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
    scene.img('images/characters/shared/headshots_main/big5.jpg');
    scene.text('You slowly pull back and say to Fedor "I can\'t go right now, I have something I need to do." He then nods with a smirk and responds, "Too scared, huh… well I guess I\'ll catch you next time." You give him a light punch in the arm with a smirk on your face and walk away.');
    scene.actions([
      { label: 'Move away', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterHome(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/hold.jpg');
  scene.text('You place your arm around Fedor\'s neck while enjoying his embrace and after a few moments he says, to you "I always enjoy spending time with you and I wanted to know if you would like to come over to my place to hang out and watch some movies I downloaded? I have some really good import movies from America and some Japanese horrors."');
  // TODO-QSP: end
  scene.actions([
    { label: 'I can\'t right now', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
    scene.img('images/characters/shared/headshots_main/big5.jpg');
    scene.text('You slowly pull back and say to Fedor "I can\'t go right now, I have something I need to do." He then nods with a forced smile and responds, "I guess I\'ll catch you next time." But as you leave you hear him whisper to himself, "I guess it was too soon." You then look back to notice that Fedor lowers his head trying to hide a frown on his face as he watches you walk away.');
    scene.actions([
      { label: 'Move away', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
    { label: 'I would love to', handler: (st: GameState) => {
    (st as any).fedorkozqw = 3;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/hold.jpg');
    scene.text('You giggle lightly then tell Fedor "I would love to go with you and watch some movies that I\'m sure you downloaded… legally." As you grin at him he says, "Yeah… about that…" which causes both of you to laugh simultaneously. Fedor then wraps his arm gently around your neck and leads you to his house.');
    scene.actions([
      { label: 'Go with Fedor to his home', goto: ['FedorEv2', 'Home'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSkate(s: GameState, scene: SceneBuilder): void {
  if (((s as any).month ?? 0) === 12  ||  ((s as any).month ?? 0) < 3) {
    qspGoto(s, 'FedorEv', 'Skate Date');
  } else {
    qspGoto(s, 'FedorEv', 'Park 3');
  }
  // TODO-QSP: end
  scene.build();
}

function enterSkateDate(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/hold.jpg');
  scene.text('You place your arm around Fedor\'s neck while enjoying his embrace and after a few moments he says, to you "It\'s a bit chilly today. Would you like to go ice skating?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'I can\'t right now', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
    scene.img('images/characters/shared/headshots_main/big5.jpg');
    scene.text('You slowly pull back and say to Fedor "I can\'t go right now, I have something I need to do." He then nods with a forced smile and responds, "I guess I\'ll catch you next time." But as you leave you hear him whisper to himself, "I guess it was too soon." You then look back to notice that Fedor lowers his head trying to hide a frown on his face as he watches you walk away.');
    scene.actions([
      { label: 'Move away', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
    { label: 'I would love to', handler: (st: GameState) => {
    (st as any).fedorkozqw = 4;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/hold.jpg');
    scene.text('You give Fedor a sweet smile as you reply, "Sure, that sounds like fun" Fedor returns your smile "Alright let\'s go have some fun." Fedor then leads you to the Skating ring.');
    scene.actions([
      { label: 'Go skating with Fedor', goto: ['FedorEv2', 'Skate'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterPark3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/hold.jpg');
  // TODO-QSP: dynamic text: You wrap your arm around Fedor''s neck while enjoying his embrace and after a fe...
  scene.text(`You wrap your arm around Fedor's neck while enjoying his embrace and after a few moments, he asks you, "Hey ${((s as any).pcs_nickname || '')}, would you like to go for another walk in the park?"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Not now', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
    scene.img('images/characters/shared/headshots_main/big5.jpg');
    scene.text('You slowly pull back and say to Fedor, "I can\'t go right now, I have something I need to do." He then nods with a forced smile and responds, "I guess I\'ll catch you next time." But as you leave you look back and notice that Fedor lowers his head trying to hide a light frown on his face as he watches you walk away.');
    scene.actions([
      { label: 'Move away', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
    { label: 'Sure', handler: (st: GameState) => {
    (st as any).fedorkozqw = 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/hold.jpg');
    scene.text('"Sure. Let\'s have some fun." you tell Fedor and he gives you a pleased smile and places his arm gently on your back as he leads you toward the park.');
    scene.actions([
      { label: 'Go to the park with Fedor', goto: ['FedorEv2', 'Park 2'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterFedorDate2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A5');
  scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
  scene.img('images/characters/pavlovsk/school/boy/fedor/school/fedor.jpg');
  scene.text('You look Fedor in the eyes, lean forward and give him a passionate kiss, feeling his warm lips on yours and his tongue enter your mouth and begin to softly massage yours.');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/kiss2.mp4');
  (s as any).ev_name = 'Fedor';
  (s as any).ev_name_a = 'Fedor';
  (s as any).ev_name_om = 'Fedor';
  qspCall(s, 'arousal', 'kiss', 5);
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'stat', '');
  (s as any).placerand = (Math.floor(Math.random() * 2) + 1);
  if ((!((s as any).placerand ?? 0))) {
    (s as any).place = 'Park 2';
    (s as any).textEvent = '"Wanna go for a walk in the park and see what kind of trouble we can get into?"';
  }
  if (((s as any).placerand ?? 0) === 1) {
    (s as any).place = 'Cinema 2';
    (s as any).textEvent = '"' + ((s as any).pcs_nickname ?? 0) + ' are you up for another movie?"';
  }
  if (((s as any).placerand ?? 0) === 2) {
    (s as any).place = 'Home 2';
    (s as any).textEvent = '"Would you like some "Alone time" at my place?"';
  }
  // TODO-QSP: dynamic text: You continue to kiss Fedor passionately, neither of you willing to break it off....
  scene.text(`You continue to kiss Fedor passionately, neither of you willing to break it off. After what felt like an hour ${((s as any).ev_name || '')} finishes kissing you and suggests: ${((s as any).textEvent || '')}.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'I can\'t right now', goto: ['FedorEv', 'No Date'] },
    { label: 'I would love to', handler: (st: GameState) => { qspGoto(st, 'FedorEv', ((st as any).place ?? '')); } },
  ]);
  scene.build();
}

function enterFedorDate3(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
  scene.img('images/characters/pavlovsk/school/boy/fedor/school/fedor.jpg');
  if (((s as any).FedorLove ?? 0) === 1) {
    scene.text('You look Fedor in the eyes, lean forward and give him a passionate kiss, feeling his warm lips on yours and his tongue enter your mouth and begin to softly massage yours. After a few seconds Fedor slowly pulls away and asks "Hello my love, I want to spend some time with you. Is there any place in particular that you would like to go?"');
  } else {
    // TODO-QSP: dynamic text: You look Fedor in the eyes, lean forward and give him a passionate kiss, feeling...
    scene.text(`You look Fedor in the eyes, lean forward and give him a passionate kiss, feeling his warm lips on yours and his tongue enter your mouth and begin to softly massage yours. After a few seconds Fedor slowly pulls away and asks "Hey ${((s as any).pcs_firstname || '')} I want to spend some time with you. Is there any place in particular that you would like to go?"`);
  }
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/kiss2.mp4');
  // TODO-QSP: end
  scene.actions([
    { label: 'I can\'t right now', goto: ['FedorEv', 'No Date'] },
    { label: 'Let\'s go to the movies', goto: ['FedorEv3', 'Movies'] },
    { label: 'I\'d like to spend alone time at your place', goto: ['FedorEv4', 'Home'] },
  ]);
  scene.build();
}

function enterPark2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/park/walk1.jpg');
  scene.text('Fedor smiles as he said "Great, let\'s get going." He then takes your hand and walks you to the park.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the park', goto: ['FedorEv2', 'Park 2'] },
  ]);
  scene.build();
}

function enterCinema2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).fedorKozlovQW ?? 0) === -15) {
    scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/Outcast/incognito.jpg');
    scene.text('Fedor nods "Sure, that sounds like fun." He then raises his hood to cover his face, obviously not wanting to get spotted by Viktor as he walks with you to the Cinema.');
  } else {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/walk.jpg');
    scene.text('"Excellent, I\'ve heard some good things about this movie, let\'s go and have some fun." Fedor said as he wraps his arm around your waist and walks you to the cinema');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the cinema', goto: ['FedorEv3', 'Movies'] },
  ]);
  scene.build();
}

function enterHome2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).fedorKozlovQW ?? 0) === -15) {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/Outcast/hold.jpg');
    // TODO-QSP: dynamic text: "I would like to spend some alone time with you. How about we head down to your ...
    scene.text(`"I would like to spend some alone time with you. How about we head down to your place and watch some movies?" Fedor smiles as he replies, "Sure thing, I always love spending time with you ${((s as any).pcs_firstname || '')}." You wrap your arms around his neck then walk with Fedor to his house.`);
  } else {
    scene.img('images/characters/city/boyfriend/boygo.jpg');
    scene.text('"Fedor leans forward and whispers in your ear, "My parents are out for the evening, so we have the whole place to ourselves, let\'s go." He then rests his arm on your shoulders as he leads you to his house.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go with Fedor', goto: ['FedorEv4', 'Home'] },
  ]);
  scene.build();
}

function enterNoDate(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
  scene.img('images/characters/shared/headshots_main/big5.jpg');
  scene.text('You slowly pull back and say to Fedor "I can\'t go right now, I have something I need to do." He then nods with a forced smile and responds, "I guess I\'ll catch you next time" But as you leave you look back and notice that Fedor lowers his head trying to hide a light frown on his face as he watches you walk away.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['gschool_grounds', 'main'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'Start':
      enterStart(s, scene);
      break;
    case 'Vitek Vs Fedor':
      enterVitekVsFedor(s, scene);
      break;
    case 'Strela Chat':
      enterStrelaChat(s, scene);
      break;
    case 'Gorslut':
      enterGorslut(s, scene);
      break;
    case 'Gorslut 2':
      enterGorslut2(s, scene);
      break;
    case 'Fedor Date':
      enterFedorDate(s, scene);
      break;
    case 'Park':
      enterPark(s, scene);
      break;
    case 'Cinema':
      enterCinema(s, scene);
      break;
    case 'Home':
      enterHome(s, scene);
      break;
    case 'Skate':
      enterSkate(s, scene);
      break;
    case 'Skate Date':
      enterSkateDate(s, scene);
      break;
    case 'Park 3':
      enterPark3(s, scene);
      break;
    case 'Fedor Date 2':
      enterFedorDate2(s, scene);
      break;
    case 'Fedor Date 3':
      enterFedorDate3(s, scene);
      break;
    case 'Park 2':
      enterPark2(s, scene);
      break;
    case 'Cinema 2':
      enterCinema2(s, scene);
      break;
    case 'Home 2':
      enterHome2(s, scene);
      break;
    case 'No Date':
      enterNoDate(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const FedorEv: LocationDef = {
  name: 'FedorEv',
  region: 'other',
  enter: enter,
};
