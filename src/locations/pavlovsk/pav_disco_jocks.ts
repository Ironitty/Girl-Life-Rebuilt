import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterLazar(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A149', 'like', 1, 'pav_disco');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big149.jpg');
  if ((Math.floor(Math.random() * 4) + 1) === 1) {
    scene.text('Lazar is out on the dance floor dancing with a small group of people. The girls in the group are all competing for his attention.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Go out on the dance floor', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/school_kids/lazar_dance2.jpg');
    if (((s as any).npc_rel ?? 0)?.['A149'] >= 50  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
      scene.text('You move out onto the dance floor and he smiles as you approach. "Come to have a little fun, huh?"');
      scene.text('You nod your head and join the group dancing.');
      if (((s as any).hour ?? 0) >= 20) {
        scene.actions([
          { label: 'Keep dancing', goto: ['pav_disco_jocks', 'lazar_dance'] },
        ]);
      }
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      ]);
    } else {
      if (((s as any).grupTipe ?? 0) === 5) {
        scene.text('He laughs as you get close. "Get lost loser." he scoffs before turning his back on you.');
        scene.actions([
          { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        ]);
      } else {
        if (((s as any).npc_rel ?? 0)?.['A149'] <= 20  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
          scene.text('He gives you a dirty look as you approach. "Go dance somewhere else."');
          scene.text('With the look he\'s giving you, you decide not to press it and leave.');
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
          ]);
        } else {
          if (((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
            scene.text('He laughs as you approach. "Look everyone, the slut is in the house!" he says very loudly, drawing the attention of several other dancers.');
            scene.text('Feeling a little uncomfortable with some of the looks you\'re getting, you decide to move away.');
            scene.actions([
              { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
            ]);
          } else {
            scene.text('He gives you a chin up greeting as you approach, but keeps dancing with the small group he\'s with. Not having anyone to dance with, you decide to do something else.');
            scene.actions([
              { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
            ]);
          }
        }
      }
    }
  } },
    ]);
  } else {
    scene.text('You see Lazar hanging out with the cool kids and jocks. He\'s the center of attention of a small group of mostly girls who seem to be fawning over him.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Hang out with him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big149.jpg');
    if (((s as any).npc_rel ?? 0)?.['A149'] >= 50  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
      scene.text('Lazar smiles as you approach. "Hey Lazar, what\'s up?"');
      scene.text('He spreads his arms wide. "Just taking it all in and basking in the good times that come with hard work. You?"');
      scene.text('You shrug a little. "You know, just out to have a little fun."');
      scene.text('The two of you start talking and the conversation soon turns towards sports.');
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        { label: 'Ask him to dance', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big149.jpg');
    if (((s as any).pcs_hotcat ?? 0) >= 6) {
      scene.text('"Would you like to dance?" you ask with a smile.');
      scene.text('He grins. "Sure, why not?"');
      scene.text('Lazar leads you out onto the dance floor.');
      scene.actions([
        { label: 'Go dancing', goto: ['pav_disco_jocks', 'lazar_dance'] },
      ]);
    } else {
      scene.text('"Would you like to dance?" you ask with a smile.');
      scene.text('He shakes his head. "No thanks."');
      scene.text('You get the feeling he doesn\'t want to dance with you, but doesn\'t want to be rude, so you decide to do something else.');
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      ]);
    }
  } },
      ]);
    } else {
      if (((s as any).grupTipe ?? 0) === 5) {
        scene.text('Lazar gives you a dirty look as you approach. "Why don\'t you stick to your own kind? No one wants you here."');
        scene.text('You notice several of the other jocks giving you unkind looks, so you decide to just leave.');
        scene.actions([
          { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        ]);
      } else {
        if (((s as any).npc_rel ?? 0)?.['A149'] <= 20  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
          if (((s as any).grupTipe ?? 0) === 2) {
            // TODO-QSP: dynamic text: "Well well, if it isn't <<$pcs_nickname>>…" Lazar quips as he stands with his ar...
            scene.text(`"Well well, if it isn't ${((s as any).pcs_nickname || '')}…" Lazar quips as he stands with his arms crossed.`);
            scene.text('You sigh. "What now, Lazar? I don\'t have time for your games today…"');
            // TODO-QSP: dynamic text: He huffs. "Somebody's been talking shit behind my back to some girls, but I have...
            scene.text(`He huffs. "Somebody's been talking shit behind my back to some girls, but I haven't figured out who it is yet. I just wanted you to know that I'm keeping my eyes on you, ${((s as any).pcs_nickname || '')}."`);
            scene.text('"Well, it\'s not me," you say as you roll your eyes and spend time trying to convince him, but your words fall on deaf ears.');
          } else {
            scene.text('"Are you the one that\'s been going around and telling the other girls that I\'m no good for them?!" Lazar angrily asks as you approach.');
            scene.text('"No… Like I give a shit about you! You\'re not the center of the world, Lazar!" you yell back.');
            scene.text('"Good. Keep it that way or else we might have a problem…" he says as he pushes you.');
          }
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
          ]);
        } else {
          if (((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
            scene.text('"You here to suck me off, slut?" he snickers as you approach.');
            scene.text('"What did you say?" you angrily reply.');
            scene.text('"Come on, everyone knows that you\'re the school\'s biggest slut! What\'s another dick to you?" he winks.');
            scene.text('You try to defend your reputation, but it\'s no good. He obviously thinks of you as nothing but a slut now.');
            scene.actions([
              { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
            ]);
          } else {
            if (((s as any).grupTipe ?? 0) === 2) {
              scene.text('Lazar smiles as you approach. "Hey Lazar, what\'s up?"');
              scene.text('He spreads his arms wide. "Just taking it all in and basking in the good times that come with hard work. You?"');
              scene.text('You shrug. "You know, just out to have a little fun."');
              scene.text('The two of you start talking and the conversation soon turns towards sports.');
            } else {
              scene.text('Lazar nods at you as you approach. "Hey Lazar, what\'s up?"');
              scene.text('He spreads his arms wide. "Just taking it all in and basking in the good times that come with hard work."');
              scene.text('You shrug. "You know, just out to have a little fun."');
              scene.text('The two of you start talking and the conversation soon turns towards sports.');
            }
            scene.actions([
              { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
              { label: 'Ask him to dance', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big149.jpg');
    if (((s as any).pcs_hotcat ?? 0) >= 6) {
      scene.text('"Would you like to dance?" you ask with a smile.');
      scene.text('He grins. "Sure, why not?"');
      scene.text('He leads you out onto the dance floor.');
      scene.actions([
        { label: 'Go dancing', goto: ['pav_disco_jocks', 'lazar_dance'] },
      ]);
    } else {
      scene.text('"Would you like to dance?" you ask with a smile.');
      scene.text('He shakes his head. "No thanks."');
      scene.text('You get the feeling he doesn\'t want to dance with you, but doesn\'t want to be rude, so you decide to do something else.');
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      ]);
    }
  } },
            ]);
          }
        }
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterLazarDance(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (5);
  qspCall(s, 'sweat', 'add', 3);
  (s as any).fat = ((s as any).fat ?? 0) - (1);
  qspCall(s, 'exp_gain', 'danc', 1);
  (s as any).frost = 0;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/disco/school_kids/lazar_dance1.jpg');
  scene.text('You and Lazar start dancing together. He\'s a very good dancer for a boy, likely due to his natural athletic talents and well-toned body. He seems to be enjoying dancing with you as much as you like dancing with him.');
  scene.text('Several songs go by as the two of you keep dancing - he seems to have endless endurance.');
  if (((s as any).hour ?? 0) >= 20) {
    scene.actions([
      { label: 'Keep dancing', goto: ['pav_disco_jocks', 'lazar_dance'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
  ]);
  scene.build();
}

function enterIvan(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A3', 'like', 1, 'pav_disco');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big3.jpg');
  scene.text('To your surprise, you see Ivan hanging out with the other jocks, talking to a few of them and smiling. You almost never see him here.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    { label: 'Hang out with him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big3.jpg');
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 250  ||  ((s as any).grupTipe ?? 0) === 5) {
      scene.text('"Hold up, Ivan! I need to talk to you," you call out as you approach him.');
      scene.text('Ivan stops and gives you a confused look. "Why are you talking to me? I don\'t really have anything to say to you."');
      scene.text('"Come on, don\'t be like that. I thought we could just talk," you say with a smile.');
      scene.text('Ivan looks at you apathetically without any response, making the whole situation a bit awkward. After what feels like an eternity, he just walks away.');
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      ]);
    } else {
      if (((s as any).npc_rel ?? 0)?.['A3'] >= 60  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
        scene.text('"What\'s up, Ivan? Having fun?" you ask as you approach.');
        scene.text('He smiles at you. "It\'s okay, but I can\'t stay too long," he replies as he checks his watch.');
        scene.text('"Need to be somewhere?" you inquire.');
        scene.text('He nods. "Yeah, I need to get going soon. I need to help my mom."');
        scene.text('You have a short conversation before he tells you he has to go home and help around the house. You learn that his mother works two jobs, so he has to take care of his little brother and sister when he isn\'t training.');
        scene.actions([
          { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
          { label: 'Ask him to dance', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big3.jpg');
    scene.text('"Hey Ivan, want to dance?" you ask with a smile.');
    scene.text('He pauses and thinks about it before shaking his head. "Maybe another time."');
    if (((s as any).IvanShowerQW ?? 0) === 11  &&  ((s as any).IvanShowerYes ?? 0) === 1) {
      // TODO-QSP: dynamic text: He pauses again for a moment, then smiles a mischievous smile. "We could have ou...
      scene.text(`He pauses again for a moment, then smiles a mischievous smile. "We could have our own private dance if you're... bored, ${((s as any).pcs_nickname || '')}." You know that is his code for fucking you in the ass, do you want to have sex with him?`);
      scene.actions([
        { label: 'Agree to go with him', goto: ['IvanEv', 'ivan_bored_disco'] },
        { label: 'Tell him not today', handler: (st: GameState) => {
    scene.text(`<center><b>${'Ivan Prokhorov'}</b></center>`);
    scene.img('images/characters/pavlovsk/school/boy/ivan/School/ivan2.jpg');
    scene.text('You give it some thought, but have to decline.');
    scene.text('You shake your head apologetically. "Sorry Ivan, I can\'t today."');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
      ]);
    } else {
      scene.text('You nod as he turns and starts talking with the other jocks. "Sure, some other time…" you mumble before walking away.');
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      ]);
    }
  } },
        ]);
      } else {
        if (((s as any).npc_rel ?? 0)?.['A3'] <= 20  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
          if (((s as any).grupTipe ?? 0) === 2) {
            scene.text('"Are you looking towards your next fight, Ivan?" you ask as you approach.');
            scene.text('He casually shrugs his shoulders before replying. "I guess. I don\'t really know who they\'ll have me fight…"');
            scene.text('He isn\'t very talkative, but you manage to get him to talk a little about his past fights.');
          } else {
            scene.text('"Hey Ivan! How\'s everything going?" you ask curiously while approaching him.');
            scene.text('Ivan looks at you and shrugs his shoulders before walking off.');
          }
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
          ]);
        } else {
          scene.text('"What\'s up, Ivan? Having fun?" you ask while approaching.');
          scene.text('He just shrugs and checks his watch. "It\'s okay, but I can\'t stay too long."');
          scene.text('You have a short conversation before he tells you he has to go home and help around the house. You learn that his mother works two jobs, so he has to take care of his little brother and sister when he isn\'t training.');
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
            { label: 'Ask him to dance', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big3.jpg');
    scene.text('"Hey Ivan, want to dance?" you ask with a smile.');
    scene.text('He pauses and thinks about it before shaking his head. "Maybe another time."');
    scene.text('You nod as he turns and starts talking with the other jocks. "Sure, some other time…" you mumble before walking away.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
          ]);
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterFedor(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A5', 'like', 1, 'pav_disco');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big5.jpg');
  if (((s as any).FedorLove ?? 0) < 0) {
    scene.actions([{ label: 'Continue', goto: ['FedorMisc', 'Fedor Hate', '1'] }]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['FedorMisc', 'Fedor Chat', '1'] }]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSvyatoslav(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A8', 'like', 1, 'pav_disco');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big8.jpg');
  if ((Math.floor(Math.random() * 4) + 1) === 1) {
    scene.text('You see Svyatoslav out on the dance floor flirting and trying to dance with the prettier girls. He has mixed results, but seems to be enjoying himself regardless.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Go out on the dance floor', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/school_kids/svyatoslav_dance1.jpg');
    if (((s as any).npc_rel ?? 0)?.['A8'] >= 50  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
      scene.text('You move out onto the dance floor and he gives you a smile as you approach before you start dancing with each other.');
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        { label: 'Dance with him', goto: ['pav_disco_jocks', 'svyatoslav_dance'] },
      ]);
    } else {
      if (((s as any).grupTipe ?? 0) === 5) {
        scene.text('He gives you a disgusted look as you approach. "Find somewhere else to dance."');
        scene.text('Not wanting to cause a scene, you back off.');
        scene.actions([
          { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        ]);
      } else {
        if (((s as any).npc_rel ?? 0)?.['A8'] <= 20  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
          scene.text('He gives you a pissed off look as you approach. "I want nothing to do with you, so get lost."');
          scene.text('Not wanting to cause a scene, you back off.');
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
          ]);
        } else {
          if (((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
            scene.text('"So when am I going to get the complementary blowjob?" he teases as you approach.');
            scene.text('"Never…" you sourly reply.');
            scene.text('"Come on, don\'t play hard to get. I know you loving sucking cock, you little slut."');
            scene.text('He starts approaching, so you decide to flee while you can.');
            scene.actions([
              { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
            ]);
          } else {
            scene.text('He gives you a slight nod in acknowledgment as you approach, but otherwise ignores you while continuing to try and dance with the pretty girls.');
            scene.actions([
              { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
            ]);
          }
        }
      }
    }
  } },
    ]);
  } else {
    scene.text('You see Svyatoslav hanging out with the cool kids and jocks, flirting with the girls and seemingly enjoying himself.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Hang out with him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big8.jpg');
    if (((s as any).grupTipe ?? 0) === 5) {
      scene.text('He gives you a pissed off look as you approach. "I want nothing to do with you, so get lost."');
      scene.text('Not wanting to cause a scene, you back off.');
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      ]);
    } else {
      if (((s as any).npc_rel ?? 0)?.['A8'] >= 50  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
        scene.text('"Hey, what\'s up Svyatoslav?" you ask as you approach.');
        scene.text('He smiles at you. "Oh you know, same old same old."');
        scene.text('You start talking about a variety of things, though mostly about how close he comes to beating Ivan or Lazar in different sports, as well as which of the pretty girls at school he has his eye on.');
        scene.actions([
          { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        ]);
      } else {
        if (((s as any).npc_rel ?? 0)?.['A8'] <= 20  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
          if (((s as any).grupTipe ?? 0) === 2) {
            scene.text('"Hey, what\'s up Svyatoslav?" you ask as you approach.');
            scene.text('He smiles at you. "Oh you know, same old same old."');
            scene.text('You start talking about a variety of things, though mostly about how close he comes to beating Ivan or Lazar in different sports, as well as which of the pretty girls at school he has his eye on.');
          } else {
            scene.text('He gives you a pissed off look as you approach. "I want nothing to do with you, so get lost."');
            scene.text('Not wanting to cause a scene, you back off.');
          }
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
          ]);
        } else {
          if (((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
            scene.text('"So when am I going to get the complementary blowjob?" he teases as you approach.');
            scene.text('"Never…" you sourly reply.');
            scene.text('"Come on, don\'t play hard to get. I know you loving sucking cock, you little slut!" he says and starts approaching you.');
            scene.text('You shake your head and back away. "I said no!"');
            scene.text('He smiles at you. "Come on, we can slip into the restroom and you can suck me off. You do it at school all the time."');
            scene.text('Knowing this won\'t get any better, you turn and leave before it gets worse.');
            scene.actions([
              { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
            ]);
          } else {
            if (((s as any).grupTipe ?? 0) === 2) {
              scene.text('"Hey, what\'s up Svyatoslav?" you ask as you approach.');
              scene.text('He smiles at you. "Oh you know, same old same old."');
              scene.text('You start talking about a variety of things, though mostly about how close he comes to beating Ivan or Lazar in different sports, as well as which of the pretty girls at school he has his eye on.');
            } else {
              scene.text('"Hey, what\'s up Svyatoslav?" you ask as you approach.');
              scene.text('He smiles at you. "Just hanging out and relaxing."');
              scene.text('You start talking about a variety of things, though mostly about how close he comes to beating Ivan or Lazar in different sports, as well as which of the pretty girls at school he has eye on.');
            }
            scene.actions([
              { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
              { label: 'Ask him to dance', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big8.jpg');
    if (((s as any).pcs_hotcat ?? 0) >= 5) {
      scene.text('"Would you like to dance?" you ask with a smile.');
      scene.text('He shurgs slightly. "Sure, why not?"');
      scene.text('He leads you out onto the dance floor.');
      scene.actions([
        { label: 'Go dancing', goto: ['pav_disco_jocks', 'svyatoslav_dance'] },
      ]);
    } else {
      scene.text('"Would you like to dance?" you ask with a smile.');
      scene.text('He laughs. "With you? Hell no!"');
      scene.text('You\'re taken aback a little. "Why not?"');
      scene.text('He shakes his head and scoffs. "Look in the mirror and it should be obvious."');
      scene.text('Before you can react, he turns and starts talking to some of the other jocks nearby, so you walk away feeling rather insulted.');
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      ]);
    }
  } },
            ]);
          }
        }
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSvyatoslavDance(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (5);
  qspCall(s, 'sweat', 'add', 3);
  (s as any).fat = ((s as any).fat ?? 0) - (1);
  qspCall(s, 'exp_gain', 'danc', 1);
  (s as any).frost = 0;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/disco/school_kids/svyatoslav_dance2.jpg');
  scene.text('You and Svyatoslav start dancing. He\'s a decent dancer who lacks the rhythm of some of the other boys, but makes up for in enthusiasm.');
  scene.text('The two of you dance away, not caring what the others think.');
  if (((s as any).hour ?? 0) >= 20) {
    scene.actions([
      { label: 'Keep dancing', goto: ['pav_disco_jocks', 'svyatoslav_dance'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
  ]);
  scene.build();
}

function enterVanya(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A165', 'like', 1, 'pav_disco');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big165.jpg');
  scene.text('You see Vanya hanging out with the cool kids and jocks.');
  if (((s as any).grupTipe ?? 0) === 5) {
    scene.text('Vanya gives you a dirty look as you approach. "Why don\'t you stick to your own kind? No one wants you here."');
    scene.text('You notice several of the other giving you unkind looks, so you decide to just leave.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } else {
    if (((s as any).npc_rel ?? 0)?.['A165'] >= 50  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 200) {
      if (((s as any).grupTipe ?? 0) === 2) {
        // TODO-QSP: dynamic text: Vanya is having a hard time stopping himself from laughing. "<<$pcs_nickname>>, ...
        scene.text(`Vanya is having a hard time stopping himself from laughing. "${((s as any).pcs_nickname || '')}, did you hear about the prank I pulled on the football coach?"`);
        scene.text('"No, what did you do this time?" you curiously ask.');
        scene.text('"During one of the training sessions, I unscrewed the top from a water bottle thinking one of the boys would drink it, but here comes the coach! ust as he\'s about to drink, the top falls off and water splashes all over him!"');
        scene.text('Unable to help himself, he bursts out into laughter.');
      } else {
        // TODO-QSP: dynamic text: "<<$pcs_nickname>>! You need to help me hide!" Vanya says alarmingly as he looks...
        scene.text(`"${((s as any).pcs_nickname || '')}! You need to help me hide!" Vanya says alarmingly as he looks around.`);
        scene.text('"What\'s wrong?!" you reply in a panic. "Who\'s after you?!"');
        scene.text('Vanya cracks up. "Just kidding! I just wanted to see your reaction."');
        scene.text('"Don\'t you get tired of playing games all the time, Vanya?" you reprimand him.');
      }
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      ]);
    } else {
      if (((s as any).npc_rel ?? 0)?.['A165'] <= 20  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 200) {
        if (((s as any).grupTipe ?? 0) === 2) {
          scene.text('"What the hell, Vanya?!" you yell while angrily stomping towards him.');
          scene.text('"What now?" he replies with an innocent look. "I\'m getting tired of you accusing me of things I haven\'t done!"');
          scene.text('"It must\'ve been you! Who else replaces talc powder with itching powder?!"');
          scene.text('"No idea. What an amazing… I mean cruel joke, though…" he replies.');
        } else {
          scene.text('"Funny joke you played on me there, dickhead." you angrily yell while pushing him.');
          scene.text('"What are you talking about? You\'ve gone crazy!" he replies.');
          scene.text('"I know it was you!" you yell in response.');
          scene.text('"Oh yeah? Prove it then!" he yells back.');
          scene.text('You both stand in silence for a few seconds before you stomp off as Vanya grins from ear to ear.');
        }
        scene.actions([
          { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        ]);
      } else {
        if (((s as any).fame ?? 0)?.['pav_slut'] >= 200) {
          scene.text('"Are you up for a threesome with Vicky and me?" Vanya asks.');
          scene.text('"What?" you ask surprised.');
          scene.text('Vanya breaks out in a mischievous smile. "Yeah, you know. We\'ve heard that you\'ve become such a big slut, so we wanted to try a threesome."');
          scene.text('"Hmm…" you start to think…');
          scene.text('"Gross, I was just kidding! Like I would share Vicky with a slut like you."');
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
          ]);
        } else {
          // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>! Check this out!" Vanya yells as he throws a crumbled pap...
          scene.text(`"Hey ${((s as any).pcs_nickname || '')}! Check this out!" Vanya yells as he throws a crumbled paper ball at Vitek's head.`);
          scene.text('He in turn quickly spins around and glares, trying to figure out who threw the crumbled paper.');
          scene.text('"Who was it?!" Vitek yells out. "Tell me who the fuck it was!"');
          scene.text('"So easily agitated…" Vanya comments while you burst out in laughter over the stupid face Vitek is making.');
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterErast(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A150', 'like', 1, 'pav_disco');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big150.jpg');
  scene.text('You\'re a little surprised to see Erast hanging out with the cool kids and jocks, standing near one of the tables with his arms crossed. You rarely see him here and you don\'t think he\'s enjoying himself, but he gives polite smiles to people that talk to him.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    { label: 'Hang out with him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big150.jpg');
    if (((s as any).npc_rel ?? 0)?.['A150'] >= 50  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
      if (((s as any).grupTipe ?? 0) === 2) {
        // TODO-QSP: dynamic text: Erast smiles as you approach. "Oh hey <<$pcs_nickname>>…" he gently says. "What ...
        scene.text(`Erast smiles as you approach. "Oh hey ${((s as any).pcs_nickname || '')}…" he gently says. "What can I help you with?"`);
        scene.text('"Hi Erast! So I saw you working out and needed some pointers…" you ask him.');
        // TODO-QSP: dynamic text: "No worries <<$pcs_nickname>>. I'll gladly share my secrets with you," he winks ...
        scene.text(`"No worries ${((s as any).pcs_nickname || '')}. I'll gladly share my secrets with you," he winks and continues on, talking about different workout techniques, that he swears will make you stronger and more fit.`);
      } else {
        // TODO-QSP: dynamic text: Erast smiles as you approach. "Oh hey <<$pcs_nickname>>…" he gently says. "What ...
        scene.text(`Erast smiles as you approach. "Oh hey ${((s as any).pcs_nickname || '')}…" he gently says. "What can I help you with?"`);
        scene.text('"Hi Erast! Well, I was thinking about starting to work out and wanted to ask you about some pointers, if you have the time?" you politely ask.');
        // TODO-QSP: dynamic text: "Of course, <<$pcs_nickname>>," he replies, brightening up as he starts asking y...
        scene.text(`"Of course, ${((s as any).pcs_nickname || '')}," he replies, brightening up as he starts asking you about what you want to achieve with your training.`);
      }
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      ]);
    } else {
      if (((s as any).npc_rel ?? 0)?.['A150'] <= 20  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
        if (((s as any).grupTipe ?? 0) === 2) {
          // TODO-QSP: dynamic text: "Oh hey <<$pcs_nickname>>…" Erast gently says as you approach. "What can I help ...
          scene.text(`"Oh hey ${((s as any).pcs_nickname || '')}…" Erast gently says as you approach. "What can I help you with?"`);
          scene.text('"Just a quick thing, Erast. I promise…" you plead with him.');
          scene.text('"Sorry, I don\'t have any time right now. Later, okay?" he politely replies, then walks off.');
        } else {
          // TODO-QSP: dynamic text: "I'm sorry <<$pcs_nickname>>, but I don't have the time to talk to you…" he gent...
          scene.text(`"I'm sorry ${((s as any).pcs_nickname || '')}, but I don't have the time to talk to you…" he gently apologizes as he sees you approach.`);
          scene.text('"Are you sure you don\'t have the time? I\'ll only be a few seconds…" you politely ask.');
          scene.text('"I\'m sorry, but I don\'t have time right now… I need to go to the restroom… Maybe another time…"');
          scene.text('He avoids looking you in the eyes as he walks away.');
        }
        scene.actions([
          { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        ]);
      } else {
        if (((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
          scene.text('"Are the rumors true?" he quietly asks as you approach.');
          scene.text('"What rumors?" you ask back.');
          scene.text('"Well…" he looks around, avoiding meeting your eyes. "I heard that you\'ve built quite the reputation…"');
          scene.text('"What reputation?! Out with it!!!" You\'re getting irritated by him trying to avoid the subject.');
          scene.text('"Well…" he takes a deep breath. "I heard you\'ll sleep with anyone, so I was thinking about if I had a shot…"');
          scene.text('Before you\'re able to reply, he walks away, clearly blushing…');
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
          ]);
        } else {
          // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>… What's up?" he asks as you approach.
          scene.text(`"Hey ${((s as any).pcs_nickname || '')}… What's up?" he asks as you approach.`);
          scene.text('"Nothing much," you reply. "Just hanging out and looking to have a little fun. You?"');
          scene.text('He shakes his head a little. "The guys talked me into coming," he replies.');
          scene.text('The other jocks thought it would be good for him to hang out and meet some girls, but he\'s either uninterested or too shy.');
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
            { label: 'Ask him to dance', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big150.jpg');
    scene.text('"Would you like to dance with me?" you ask with a smile.');
    scene.text('"What? No!" He seems surprised and flustered. "I mean… I don\'t dance… I need a drink."');
    scene.text('He quickly walks away, but you notice him blushing heavily as he does.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
          ]);
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterAlbina(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A23', 'like', 1, 'pav_disco');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big23.jpg');
  if ((Math.floor(Math.random() * 4) + 1) <= 3) {
    scene.text('You look out onto the dance floor and see Albina dancing. She is expertly moving her body in an erotic manner to the beat of the music. You almost feel a little jealous watching her dance so well.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Go out on the dance floor', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/club.jpg');
    if ((((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2)  &&  ((s as any).npc_rel ?? 0)?.['A23'] >= 60) {
      // TODO-QSP: dynamic text: You walk over to Albina and she gives you a smile. "<<$pcs_nickname>>, I didn't ...
      scene.text(`You walk over to Albina and she gives you a smile. "${((s as any).pcs_nickname || '')}, I didn't know you were here! Come and dance with me!"`);
    } else {
      if (((s as any).AlbinaQW ?? 0)?.['Friends'] === 2) {
        scene.text('You walk over to Albina and she couldn\'t be any happier to see you. She embraces you in a tight hug and you catch a scent of what you assume is some rather expensive perfume.');
        // TODO-QSP: dynamic text: "Come and dance with me, <<$pcs_nickname>>! Let's show these amateurs what real ...
        scene.text(`"Come and dance with me, ${((s as any).pcs_nickname || '')}! Let's show these amateurs what real dancing actually looks like!"`);
      } else {
        scene.text('You walk over to Albina, but she scoffs and rudely dismisses you before you even get a chance to open your mouth.');
      }
    }
    if ((((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2)  &&  ((s as any).npc_rel ?? 0)?.['A23'] >= 70  ||  ((s as any).AlbinaQW ?? 0)?.['Friends'] === 2) {
      scene.actions([
        { label: 'Dance with her', goto: ['pav_disco_jocks', 'albina_dance'] },
      ]);
    }
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
    ]);
  } else {
    scene.text('Albina is sitting on one of the couches the cool kids have claimed, leaning back against it with her smooth shapely legs crossed over as she watches other people dancing.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Hang out with her', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big23.jpg');
    if (((s as any).grupTipe ?? 0) === 5) {
      scene.text('Albina just laughs loudly as you approach her.');
      scene.text('"Why are <i>you</i> here? Go hang out with the other losers somewhere else," she taunts before getting up and going to dance with her friends.');
    } else {
      if ((((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2)  &&  ((s as any).npc_rel ?? 0)?.['A23'] >= 60  ||  ((s as any).AlbinaQW ?? 0)?.['Friends'] === 2) {
        scene.text('"What\'s up, Albina?" you ask as you approach and take a seat next to her.');
        scene.text('She smiles at you. "Oh you know, just letting my hair down and having some fun. What about you?"');
        scene.text('"Same. Just enjoying the night," you reply and she smiles at you again.');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A23'] <= 20  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
          if (((s as any).grupTipe ?? 0) === 2) {
            scene.text('"What\'s up, Albina?" you ask as you approach.');
            scene.text('She scoffs in response. "Like <i>you</i> actually care. I don\'t like you. I barely tolerate you being in the same social group as me, so why would I want to talk to you? Just piss off already!"');
            scene.text('Not wanting to cause a scene, you back off.');
          } else {
            scene.text('Albina sees you approaching and rolls her eyes before getting up and walking away, not giving you a chance to speak to her.');
          }
        } else {
          if (((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
            if (((s as any).AlbinaQW ?? 0)?.['Friends'] === 2  ||  ((s as any).npc_rel ?? 0)?.['A23'] >= 60) {
              // TODO-QSP: dynamic text: Albina seems a little surprised at your presence. "<<$pcs_nickname>>! What are y...
              scene.text(`Albina seems a little surprised at your presence. "${((s as any).pcs_nickname || '')}! What are you doing here?"`);
              scene.text('Before you can react, she stands up and whispers in your ear. "You should go before one of the guys takes advantage of you."');
              scene.text('She gives you a gentle push before she walks back to her friends, pretending that she wanted nothing to do with you.');
            } else {
              scene.text('Albina seems a little surprised at your presence. "Why are <i>you</i> here? Do you enjoy all the boys wanting a piece of you like you\'re just some fuck toy to them?"');
              scene.text('Before you can react, she stands up and waves you aside before walking away. "You know what, I don\'t fucking care. I\'m sure you\'ll find plenty of dicks to suck here, so why don\'t you go and find one or two?"');
              scene.text('You could clearly hear the disgust in her voice, but you think she also felt pity towards you at the same time.');
            }
          } else {
            scene.text('"Hey Albina, what\'s up?" you ask as you approach.');
            scene.text('She just looks at you and shrugs before looking away and ignoring you. Seeing that she\'s not interested in speaking with you, you walk away.');
          }
        }
      }
    }
    if ((((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2)  &&  ((s as any).npc_rel ?? 0)?.['A23'] >= 60  ||  ((s as any).AlbinaQW ?? 0)?.['Friends'] === 2) {
      scene.actions([
        { label: 'Chat', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big23.jpg');
    if (((s as any).AlbinaQW ?? 0)?.['Lazar_Threesome'] >= 1) {
      // TODO-QSP: dynamic text: You sit and chat with Albina. "This place is so fucking boring! I might find Laz...
      scene.text(`You sit and chat with Albina. "This place is so fucking boring! I might find Lazar and see if he wants to go and have a little fun at his place." She then turns to you. "We've had fun with Lazar together, ${((s as any).pcs_nickname || '')}. Wouldn't it be nice to have him, or <i>me</i>, inside you again?"`);
      scene.text('Before you\'re able to answer, she smiles and winks at you before getting up and walking away, seemingly in search of Lazar.');
    } else {
      if (((s as any).npc_had_sex ?? 0)?.['A23']) {
        scene.text('You sit and chat with Albina. "God, it\'s so fucking boring here! Wouldn\'t you rather sneak off to a quiet place with me and have a little fun? I\'d love to taste your pussy right now."');
        // TODO-QSP: dynamic text: You're not sure how to react, which causes her to laugh. "I'm just kidding, <<$p...
        scene.text(`You're not sure how to react, which causes her to laugh. "I'm just kidding, ${((s as any).pcs_nickname || '')}. About the sneaking off part anyway. You taste too good…" she says before giving you a wink and walking away.`);
        scene.text('You\'re again unsure if she was joking or not.');
      } else {
        if ((Math.floor(Math.random() * 2) + 0) === 1) {
          scene.text('You sit and chat with Albina. "Look at that chaperone over there. I\'m pretty sure he\'s checking us all out, the creepy bastard."');
        } else {
          scene.text('You sit and chat with Albina. "You know, it\'s pretty insulting having to come here and watch these beached whales flail around trying to dance. I can\'t wait until I can go and party at the nightclub in the city."');
        }
      }
    }
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Ask her to dance', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big23.jpg');
    if ((((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2)  &&  ((s as any).npc_rel ?? 0)?.['A23'] >= 60  ||  ((s as any).AlbinaQW ?? 0)?.['Friends'] === 2) {
      scene.text('Albina smiles and accepts your offer to dance. She gets up and grabs your hand before leading you out to the dance floor.');
      scene.actions([
        { label: 'Go dancing', goto: ['pav_disco_jocks', 'albina_dance'] },
      ]);
    } else {
      scene.text('Albina looks you over with a hint of contempt on her face before standing up and going to dance with her friends.');
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      ]);
    }
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterAlbinaDance(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (5);
  qspCall(s, 'sweat', 'add', 3);
  (s as any).fat = ((s as any).fat ?? 0) - (1);
  qspCall(s, 'exp_gain', 'danc', 2);
  (s as any).frost = 0;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/disco/club.jpg');
  scene.text('You go out onto the dance floor and start dancing with Albina.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    { label: 'Keep dancing', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (5);
    qspCall(s, 'sweat', 'add', 3);
    (s as any).fat = ((s as any).fat ?? 0) - (1);
    qspCall(s, 'exp_gain', 'danc', 2);
    (s as any).frost = 0;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/club.jpg');
    scene.text('You continue dancing with Albina, and you both seem to be enjoying yourselves. Albina is dancing in an ever increasingly erotic manner. She sways her hips and wiggles her ass for all to see, and seems to enjoy the attention that comes with being the best dancer present.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Keep dancing', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (5);
    qspCall(s, 'sweat', 'add', 3);
    (s as any).fat = ((s as any).fat ?? 0) - (1);
    qspCall(s, 'exp_gain', 'danc', 2);
    (s as any).frost = 0;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/club.jpg');
    if (((s as any).npc_had_sex ?? 0)?.['A23']) {
      scene.text('You continue to dance with Albina, who smiles at you and pulls you into a seductive dance. Her tight fitting dress is accenting her curves rather well, and you find your hands roaming over her hips and thighs as she erotically dances in front of you, her ass slowly grinding against your crotch.');
      scene.text('She seemingly doesn\'t care about you feeling her up and encourages you to continue.');
      qspCall(s, 'arousal', 'foreplay', (-5), 'inhibition');
    } else {
      scene.text('You continue to dance with Albina, who smiles at you and moves in to dance a little closer to you.');
    }
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Keep dancing', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (5);
    qspCall(s, 'sweat', 'add', 3);
    (s as any).fat = ((s as any).fat ?? 0) - (1);
    qspCall(s, 'exp_gain', 'danc', 2);
    (s as any).frost = 0;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/club.jpg');
    if (((s as any).npc_had_sex ?? 0)?.['A23']) {
      // TODO-QSP: dynamic text: When the song ends, Albina looks back at you and winks. "That was pretty hot, <<...
      scene.text(`When the song ends, Albina looks back at you and winks. "That was pretty hot, ${((s as any).pcs_nickname || '')}. I need to go and cool off for a while."`);
      scene.text('She excuses herself and walks away with a seductive sway in her hips directed at you, leaving you standing in the middle of the dance floor feeling a little flustered.');
    } else {
      // TODO-QSP: dynamic text: When the song ends, Albina steps off to the side. "That was fun <<$pcs_nickname>...
      scene.text(`When the song ends, Albina steps off to the side. "That was fun ${((s as any).pcs_nickname || '')}, but I need to sit down for a bit."`);
      scene.text('She excuses herself and leaves you standing in the middle of the dance floor.');
    }
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterAlbinaWalkhome(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/disco/school_kids/walkhome_katja.jpg');
  if (((s as any).AlbinaQW ?? 0)?.['Friends'] === 2) {
    scene.text('Albina takes you by the hand and leads you outside.');
    // TODO-QSP: dynamic text: "Motorboating me in public, <<$pcs_nickname>>? You really have had one or three ...
    scene.text(`"Motorboating me in public, ${((s as any).pcs_nickname || '')}? You really have had one or three too many. Let's get you home before you do something you really regret."`);
    if (((s as any).npc_had_sex ?? 0)?.['A23']) {
      scene.text('You spend the walk home admiring the scent of her perfume, her hand slapping you away every time you try to paw at her ass before you reach your apartment complex.');
      scene.text('Before she\'s able to speak a word, you suddenly lean and kiss her. She pulls away and looks around before she leans back in and starts passionately making out with you, no longer caring about your roaming hands as you drunkenly caress her body.');
      scene.text('She eventually breaks the kiss and wipes the saliva from her mouth. "You should get home and get to bed before I drag you back to mine."');
      qspCall(s, 'arousal', 'kiss', 1, 'lesbian');
    } else {
      scene.text('You spend the walk home admiring the scent of Albina\'s perfume while drunkenly trying to chat with her about everything that comes to your mind.');
      scene.text('Having spent the whole journey babbling away, you don\'t even notice that you\'ve arrived at your apartment complex.');
      scene.text('"This is you, right?" she asks as she unravels herself from you. "Go home and go to bed."');
    }
    scene.actions([
      { label: 'Go home', goto: ['pav_complex', 'start'] },
    ]);
  } else {
    if (((s as any).grupTipe ?? 0) === 3) {
      scene.text('Albina grabs you firmly by the arm and drags you outside.');
      scene.text('"Why… Why are you helping me?" you drunkenly ask.');
      scene.text('She looks at you with what you think is pity. "We might not run in the same social circle, but I\'m not going to let you humiliate yourself or be taken advantage of trying to impress a group of people who honestly couldn\'t give a shit about you. You should really learn your limits."');
      scene.text('You spend the rest of your walk home silently thinking about what she said as you admire the scent of her perfume.');
      scene.text('"Go home and go to bed," she tells you as you reach your apartment complex.');
      scene.actions([
        { label: 'Go home', goto: ['pav_complex', 'start'] },
      ]);
    } else {
      scene.text('Albina takes you by the hand and leads you outside.');
      scene.text('"Well that was fucking embarrassing. Let\'s get you home before you throw up on me or something."');
      scene.text('You spend the walk home admiring the scent of her perfume before you reach your apartment complex.');
      scene.text('"Go home and go to bed," she tells you as she unravels herself from you and points to the building.');
      scene.actions([
        { label: 'Go home', goto: ['pav_complex', 'start'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterChristina(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big18.jpg');
  if ((Math.floor(Math.random() * 4) + 1) === 1) {
    scene.text('You see Christina out on the dance floor, shaking her ass and having a good time.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Go out on the dance floor', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/club.jpg');
    if (((s as any).christinaQW ?? 0)?.['subpath'] >= 2) {
      scene.text('You hesitantly approach Christina, knowing how volatile she can be.');
      scene.text('As soon as she sees you, she calls out to you. "Hey, bitch! Get over here and dance with me."');
      scene.text('Knowing you have no choice, you muster your most submissive smile and nod.');
      scene.actions([
        { label: 'Dance with her', goto: ['pav_disco_jocks', 'christina_dance'] },
      ]);
    } else {
      if (((s as any).fame ?? 0)?.['pav_slut'] < 200) {
        if (((s as any).grupTipe ?? 0) === 2) {
          scene.text('"What the fuck do you want, bitch?"');
          scene.text('"I want to dance, Christina."');
          scene.text('"Just because you\'re one of us doesn\'t mean I have to like you. Get the fuck out of here."');
        } else {
          scene.text('"What the fuck do you want, bitch?"');
          scene.text('"I want to dance, Christina."');
          scene.text('"No. Get the fuck out of here."');
        }
      } else {
        if (((s as any).grupTipe ?? 0) === 2) {
          scene.text('"Oh look. The little skank must be doing her slut rounds. I don\'t care if you\'re one of us, I\'m still not going to fuck you. Get lost, whore!"');
        } else {
          scene.text('"Oh look. The little skank must be doing her slut rounds. Well, I\'m certainly not going to fuck you. Get lost, whore!"');
        }
      }
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      ]);
    }
  } },
    ]);
  } else {
    scene.text('You find Christina leaning against a wall, looking bored.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Hang out with her', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big18.jpg');
    if (((s as any).christinaQW ?? 0)?.['subpath'] >= 2) {
      scene.text('You hesitantly approach Christina, knowing how volatile she can be.');
      scene.text('As soon as she sees you, she calls out to you. "Hey, bitch! Get over here."');
      scene.text('Knowing you have no choice, you smile at her and approach.');
      scene.text('She immediately launches into a long tirade about school, boys, and whatever else crosses her mind. She only pauses long enough to let you agree with her, but doesn\'t give you any other chances to speak.');
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        { label: 'Ask her to dance', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big18.jpg');
    scene.text('She narrows her eyes, angry that you interrupted her, but the thought of dancing seems to lift her mood, so she grabs your hand and drags you towards the dance floor.');
    scene.actions([
      { label: 'Go dancing', goto: ['pav_disco_jocks', 'christina_dance'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).fame ?? 0)?.['pav_slut'] < 200) {
        if (((s as any).grupTipe ?? 0) === 2) {
          scene.text('"What the fuck do you want, bitch?"');
          scene.text('"I just wanted to talk, Christina."');
          scene.text('"Just because you\'re one of us doesn\'t mean I have to like you. Get the fuck out of here."');
        } else {
          scene.text('"What the fuck do you want, bitch?"');
          scene.text('"I just wanted to talk, Christina."');
          scene.text('"No. Get the fuck out of here."');
        }
      } else {
        if (((s as any).grupTipe ?? 0) === 2) {
          scene.text('"Oh look. The little skank must be doing her slut rounds. I don\'t care if you\'re one of us, I\'m still not going to fuck you. Get lost, whore!"');
        } else {
          scene.text('"Oh look. The little skank must be doing her slut rounds. Well, I\'m certainly not going to fuck you. Get lost, whore!"');
        }
      }
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      ]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterChristinaDance(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).PCloSkirt ?? 0) > 2) {
    scene.img('images/locations/pavlovsk/community/disco/club.jpg');
    scene.text('The two of you start dancing, separately at first, before she starts sliding closer to you. Getting behind you, she wraps an arm around your waist and begins grinding her crotch up against your ass.');
    scene.text('Your skirt slides up enough to show your bare pussy and you desperately hope no one is paying enough attention to notice.');
    (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (5);
    qspCall(s, 'sweat', 'add', 3);
    (s as any).fat = ((s as any).fat ?? 0) - (1);
    qspCall(s, 'exp_gain', 'danc', 1);
    (s as any).frost = 0;
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (1);
    qspCall(s, 'arousal', 'erotic', 15);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Do something else', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
  }, goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Keep dancing', handler: (st: GameState) => {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (2);
    (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (5);
    qspCall(s, 'sweat', 'add', 3);
    (s as any).fat = ((s as any).fat ?? 0) - (1);
    qspCall(s, 'exp_gain', 'danc', 1);
    (s as any).frost = 0;
    qspCall(s, 'arousal', 'erotic', 15);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/club.jpg');
    scene.text('You respond by grinding your ass back into her, looking over your shoulder in time to see her smile.');
    scene.text('You continue dancing together for a few songs before she finally lets you go, saying something about needing to pee.');
    scene.actions([
      { label: 'Do something else', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
  }, goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
    ]);
  } else {
    scene.img('images/locations/pavlovsk/community/disco/club.jpg');
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (5);
    qspCall(s, 'sweat', 'add', 3);
    (s as any).fat = ((s as any).fat ?? 0) - (1);
    qspCall(s, 'exp_gain', 'danc', 1);
    (s as any).frost = 0;
    qspCall(s, 'stat', '');
    scene.text('The two of you start dancing, separately at first, before she starts sliding closer to you. Getting behind you, she wraps an arm around your waist and begins grinding her crotch up against your ass. You dance together like this for a while.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Keep dancing', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/club.jpg');
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.text('Surrendering yourself to the music, you dance in sync with Christina. She holds onto you possesively, making it clear to any boys watching that you belong to her.');
    scene.text('She eventually lets you go, muttering something about the bathroom, and disappears into the crowd.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterLariska(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A13', 'like', 1, 'pav_disco');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big13.jpg');
  if ((Math.floor(Math.random() * 4) + 1) <= 3) {
    scene.text('You see blonde hair flashing across the dance floor. It\'s Lariska in a low cut top and a short skirt, dancing by herself and having a good time.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Go out on the dance floor', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/club.jpg');
    if (((s as any).npc_rel ?? 0)?.['A13'] >= 50  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 200) {
      scene.text('She sees you coming and dances her way to you.');
      // TODO-QSP: dynamic text: "Hey, <<$pcs_nickname>>. Dance with me."
      scene.text(`"Hey, ${((s as any).pcs_nickname || '')}. Dance with me."`);
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        { label: 'Dance with her', goto: ['pav_disco_jocks', 'lariska_dance'] },
      ]);
    } else {
      if (((s as any).npc_rel ?? 0)?.['A13'] <= 20  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 200) {
        scene.text('She sees you coming over and disappears into the crowd. She apparently doesn\'t like you.');
        scene.actions([
          { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        ]);
      } else {
        if (((s as any).fame ?? 0)?.['pav_slut'] >= 200) {
          scene.text('She takes one disgusted look at you. "Hell, no. Go suck a cock."');
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
          ]);
        } else {
          scene.text('She lets you approach her, not really making any effort to encourage or avoid you.');
          scene.text('After giving you a polite smile, she continues dancing.');
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
            { label: 'Dance with her', goto: ['pav_disco_jocks', 'lariska_dance'] },
          ]);
        }
      }
    }
  } },
    ]);
  } else {
    scene.text('You spot Lariska, wearing a low cut top and a short skirt, relaxing up against a wall watching other people dance.');
    if (((s as any).npc_rel ?? 0)?.['A13'] >= 50  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 200) {
      // TODO-QSP: dynamic text: She sees you coming and smiles at you. "Hey <<$pcs_nickname>>. Having a good tim...
      scene.text(`She sees you coming and smiles at you. "Hey ${((s as any).pcs_nickname || '')}. Having a good time?"`);
      scene.text('"Yeah. You?" you reply.');
      scene.text('"Yes, I love coming here and watching people mingle and dance."');
      scene.actions([
        { label: 'Ask her to dance', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big13.jpg');
    scene.text('"Do you want to dance?" you ask.');
    scene.text('"Sure!" she replies with a big smile before grabbing your hand and practically running for the dance floor.');
    scene.actions([
      { label: 'Go dancing', goto: ['pav_disco_jocks', 'lariska_dance'] },
    ]);
  } },
        { label: 'Hang out with her', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big13.jpg');
    scene.text('You spend some time chatting with her. She likes to talk about Christina, volleyball, Christina and, of course, Christina.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Ask her to dance', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big13.jpg');
    scene.text('"Do you want to dance?" you ask.');
    scene.text('"Sure!" she replies with a big smile before grabbing your hand and practically running for the dance floor.');
    scene.actions([
      { label: 'Go dancing', goto: ['pav_disco_jocks', 'lariska_dance'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).npc_rel ?? 0)?.['A13'] <= 20  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 200) {
        scene.text('She sees you coming over and disappears into the crowd. She apparently doesn\'t like you.');
      } else {
        if (((s as any).fame ?? 0)?.['pav_slut'] >= 200) {
          scene.text('She takes one disgusted look at you approaching. "Hell, no. Go suck a cock."');
        } else {
          scene.text('She lets you approach her, not really making any effort to encourage or avoid you.');
          scene.text('After giving you a polite smile, she continues watching people around her.');
          scene.actions([
            { label: 'Ask her to dance', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big13.jpg');
    scene.text('"Do you want to dance?" you ask.');
    scene.text('"Okay. That sounds like fun!" she replies before she leads the way to the dance floor.');
    scene.actions([
      { label: 'Go dancing', goto: ['pav_disco_jocks', 'lariska_dance'] },
    ]);
  } },
            { label: 'Hang out with her', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big13.jpg');
    scene.text('You spend some time chatting with her. She likes to talk about Christina, volleyball, Christina and, of course, Christina.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Ask her to dance', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big13.jpg');
    scene.text('"Do you want to dance?" you ask.');
    scene.text('"Okay. That sounds like fun!" she replies before she leads the way to the dance floor.');
    scene.actions([
      { label: 'Go dancing', goto: ['pav_disco_jocks', 'lariska_dance'] },
    ]);
  } },
    ]);
  } },
          ]);
        }
      }
    }
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterLariskaDance(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).PCloSkirt ?? 0) > 2) {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (1);
  }
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (5);
  qspCall(s, 'sweat', 'add', 3);
  (s as any).fat = ((s as any).fat ?? 0) - (1);
  qspCall(s, 'exp_gain', 'danc', 1);
  (s as any).frost = 0;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/disco/club.jpg');
  scene.text('Dancing with her, you notice several guys hungrily eyeing the two of you. She doesn\'t seem to be paying attention though, and you try not to think about it yourself and let loose a little.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    { label: 'Keep dancing', handler: (st: GameState) => {
    if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).PCloSkirt ?? 0) > 2) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (1);
    }
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/club.jpg');
    scene.text('As the two of you dance, she keeps sliding closer and closer to you, staring straight into your eyes. You have a funny feeling that if you weren\'t surrounded by a lot of people, she was going to kiss you.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Keep dancing', handler: (st: GameState) => {
    if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).PCloSkirt ?? 0) > 2) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (1);
    }
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/club.jpg');
    scene.text('She begins to rub against you, almost shyly, probably not even aware she\'s doing it. You respond by grinding back, making her cheeks flush as she realizes what she was doing, surrounded by strangers.');
    scene.text('She then suddenly mumbles something about needing fresh air and runs off, much to the chagrin of the boys watching you.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterLina(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A19', 'like', 1, 'pav_disco');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big19.jpg');
  if ((Math.floor(Math.random() * 4) + 1) <= 3) {
    scene.text('You spot Lina out on the dance floor, ');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Go out on the dance floor', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/club.jpg');
    if (((s as any).npc_rel ?? 0)?.['A19'] >= 50  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 200) {
      // TODO-QSP: dynamic text: As you get closer to Lina, she sees you and calls you out. "<<$pcs_nickname>>! C...
      scene.text(`As you get closer to Lina, she sees you and calls you out. "${((s as any).pcs_nickname || '')}! Come dance with me!"`);
      scene.actions([
        { label: 'Dance with her', goto: ['pav_disco_jocks', 'lina_dance'] },
      ]);
    } else {
      if (((s as any).npc_rel ?? 0)?.['A19'] <= 20  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 200) {
        scene.text('As you get closer to Lina, she sees you and disappears into the crowd.');
      } else {
        if (((s as any).fame ?? 0)?.['pav_slut'] >= 200) {
          scene.text('As you get closer to Lina, she looks you over with disgust and mouths "slut" at you before she disappears into the crowd.');
        } else {
          // TODO-QSP: dynamic text: As you get closer to Lina, she sees you and calls you out. "<<$pcs_nickname>>! C...
          scene.text(`As you get closer to Lina, she sees you and calls you out. "${((s as any).pcs_nickname || '')}! Come dance with me!"`);
          scene.actions([
            { label: 'Dance with her', goto: ['pav_disco_jocks', 'lina_dance'] },
          ]);
        }
      }
    }
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Hang out with her', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/club.jpg');
    if (((s as any).npc_rel ?? 0)?.['A19'] >= 50  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 200) {
      // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>. How's it going?"
      scene.text(`"Hey ${((s as any).pcs_nickname || '')}. How's it going?"`);
      scene.text('"Pretty good. You?"');
      scene.text('"Enjoying the night."');
      scene.actions([
        { label: 'Ask her to dance', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big19.jpg');
    scene.text('"Sure. That sounds like fun," she replies and the two of you head out onto the dance floor.');
    scene.actions([
      { label: 'Go dancing', goto: ['pav_disco_jocks', 'lina_dance'] },
    ]);
  } },
        { label: 'Hang out with her', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big19.jpg');
    scene.text('You spend some time chatting with Lina about school, sports and a bit of gossip.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Ask her to dance', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big19.jpg');
    scene.text('"Sure. That sounds like fun," she replies and the two of you head out onto the dance floor.');
    scene.actions([
      { label: 'Go dancing', goto: ['pav_disco_jocks', 'lina_dance'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).npc_rel ?? 0)?.['A19'] <= 20  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 200) {
        if (((s as any).grupTipe ?? 0) === 2) {
          scene.text('"What do <i>you</i> want?" she scowls.');
          scene.text('"I just was going to say hi," you reply.');
          scene.text('"No. You may be one of us, <i>for now</i>, but that doesn\'t mean I want to be seen with you."');
        } else {
          scene.text('"What do <i>you</i> want?" she scoels.');
          scene.text('"I just was going to say hi," you reply.');
          // TODO-QSP: dynamic text: "Get lost, <<$pcs_nickname>>."
          scene.text(`"Get lost, ${((s as any).pcs_nickname || '')}."`);
        }
      } else {
        if (((s as any).fame ?? 0)?.['pav_slut'] >= 200) {
          if (((s as any).grupTipe ?? 0) === 2) {
            scene.text('"Eww. What do <i>you</i> want?" she scowls.');
            scene.text('"I just was going to say hi," you reply.');
            scene.text('"No. You may be one of us, <i>for now</i>, but that doesn\'t mean I have to like you."');
          } else {
            scene.text('"Eww. What do <i>you</i> want?" she scowls.');
            scene.text('"I just was going to say hi," you reply.');
            scene.text('"Get lost, slut!"');
          }
        } else {
          // TODO-QSP: dynamic text: "Hey, <<$pcs_nickname>>. How's it going?"
          scene.text(`"Hey, ${((s as any).pcs_nickname || '')}. How's it going?"`);
          scene.text('"Pretty good," you reply. "You?"');
          scene.text('"Enjoying the night."');
          scene.actions([
            { label: 'Ask her to dance', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big19.jpg');
    scene.text('"Sure. That sounds like fun," she replies and the two of you head out onto the dance floor.');
    scene.actions([
      { label: 'Go dancing', goto: ['pav_disco_jocks', 'lina_dance'] },
    ]);
  } },
            { label: 'Hang out with her', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big19.jpg');
    scene.text('You spend some time chatting with Lina about school, sports and a bit of gossip.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Ask her to dance', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big19.jpg');
    scene.text('"Sure. That sounds like fun," she replies and the two of you head out onto the dance floor.');
    scene.actions([
      { label: 'Go dancing', goto: ['pav_disco_jocks', 'lina_dance'] },
    ]);
  } },
    ]);
  } },
          ]);
        }
      }
    }
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterLinaDance(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).PCloSkirt ?? 0) > 2) {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (1);
  }
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (5);
  qspCall(s, 'sweat', 'add', 3);
  (s as any).fat = ((s as any).fat ?? 0) - (1);
  qspCall(s, 'exp_gain', 'danc', 1);
  (s as any).frost = 0;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/disco/club.jpg');
  scene.text('You spend some time dancing with Lina. She seems to enjoy dancing, her face lit up in a bright smile, even laughing when one of you tries a risky dance move.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    { label: 'Keep dancing', handler: (st: GameState) => {
    if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).PCloSkirt ?? 0) > 2) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (1);
    }
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/club.jpg');
    scene.text('The two of you tear up the dance floor, having a great time. As more time passes, her dance moves get trickier, and more daring.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Keep dancing', handler: (st: GameState) => {
    if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).PCloSkirt ?? 0) > 2) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (1);
    }
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/club.jpg');
    scene.text('She finally gets too daring, and during one particular move, her skirt flips all the way up, giving everybody watching a good look at her rather tight panties.');
    scene.text('She freezes when she realizes everyone can see the outline of her pussy and panics, mumbling something to you about the bathroom before she flees.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'lazar':
      enterLazar(s, scene);
      break;
    case 'lazar_dance':
      enterLazarDance(s, scene);
      break;
    case 'ivan':
      enterIvan(s, scene);
      break;
    case 'fedor':
      enterFedor(s, scene);
      break;
    case 'svyatoslav':
      enterSvyatoslav(s, scene);
      break;
    case 'svyatoslav_dance':
      enterSvyatoslavDance(s, scene);
      break;
    case 'vanya':
      enterVanya(s, scene);
      break;
    case 'erast':
      enterErast(s, scene);
      break;
    case 'albina':
      enterAlbina(s, scene);
      break;
    case 'albina_dance':
      enterAlbinaDance(s, scene);
      break;
    case 'albina_walkhome':
      enterAlbinaWalkhome(s, scene);
      break;
    case 'christina':
      enterChristina(s, scene);
      break;
    case 'christina_dance':
      enterChristinaDance(s, scene);
      break;
    case 'lariska':
      enterLariska(s, scene);
      break;
    case 'lariska_dance':
      enterLariskaDance(s, scene);
      break;
    case 'lina':
      enterLina(s, scene);
      break;
    case 'lina_dance':
      enterLinaDance(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pav_disco_jocks: LocationDef = {
  name: 'pav_disco_jocks',
  title: '<<"Ivan Prokhorov">>',
  region: 'pavlovsk',
  enter: enter,
};
