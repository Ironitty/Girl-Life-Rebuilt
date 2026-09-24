import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterDimka(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A1', 'like', 1, 'pav_disco');
  qspCall(s, 'stat', '');
  qspCall(s, 'dinnpc', '');
  if ((Math.floor(Math.random() * 4) + 1) === 1) {
    scene.img('images/locations/pavlovsk/community/disco/school_kids/dimka_dance.jpg');
    scene.text('You see Dimka out on the dance floor. He is dressed very stylishly and dances very well. He\'s in the middle of a small crowd of of people, mostly girls.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Go out on the dance floor', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/school_kids/dimka_dance.jpg');
    if (((st as any).grupTipe ?? 0) === 5  ||  (((st as any).dimaRevenge ?? 0) === 6  &&  (((st as any).dimaRevChoice ?? 0) === 3  ||  ((st as any).dimaRevChoice ?? 0) === 5  ||  ((st as any).dimaRevChoice ?? 0) === 6))  ||  (((st as any).dimaRevenge ?? 0) === 7  &&  ((st as any).dimaRevChoice ?? 0) === 2)  ||  (((st as any).dimaRevenge ?? 0) === 8  &&  (((st as any).dimaRevChoice ?? 0) === 1  ||  ((st as any).dimaRevChoice ?? 0) === 4))) {
      scene.text('He ignores you and turns his back on you as you approach, shunning you.');
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      ]);
    } else {
      if (((st as any).npc_rel ?? 0)?.['A1'] >= 50  &&  ((st as any).fame ?? 0)?.['pav_slut'] < 250) {
        if (((st as any).grupTipe ?? 0) === 1) {
          scene.text('When Dimka sees you, he smiles warmly, making room for you in the group made up of some of the cool kids and a few others you don\'t recognize.');
          scene.text('"Just the person I was hoping to see!" he says as you walk up and starts dancing with everyone around him, including you.');
        } else {
          scene.text('When Dimka sees you, he smiles warmly, making room for you in the group made up of some of the cool kids and a few others you don\'t recognize. Some of them give you an odd look, not sure why you\'re here, but Dimka makes you feel welcome.');
          scene.text('"Relax, she doesn\'t have the plague," he playfully chides and you\'re soon dancing with the group.');
        }
        scene.actions([
          { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
          { label: 'Dance with him', goto: ['pav_disco_coolkids', 'dimka_dance'] },
        ]);
      } else {
        if (((st as any).npc_rel ?? 0)?.['A1'] <= 20  ||  ((st as any).fame ?? 0)?.['pav_slut'] >= 250) {
          scene.text('"Nobody wants you here, whore. At least not yet. You might have a dick or two to suck later though." he says mockingly before turning his back and shunning you.');
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
          ]);
        } else {
          scene.text('When Dimka sees you, he just smiles and keeps dancing. He doesn\'t seem to mind you dancing next to him, but he doesn\'t talk to you and instead focuses on the others.');
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
            { label: 'Dance with him', goto: ['pav_disco_coolkids', 'dimka_dance'] },
          ]);
        }
      }
    }
  } },
    ]);
  } else {
    scene.img('images/characters/shared/headshots_main/big1.jpg');
    scene.text('You see Dimka sitting at a table near the dance floor. He is dressed very stylishly and is in the middle of a small crowd of of people, mostly girls.');
    if ((((s as any).dimaRevenge ?? 0) === 6  &&  (((s as any).dimaRevChoice ?? 0) === 3  ||  ((s as any).dimaRevChoice ?? 0) === 5  ||  ((s as any).dimaRevChoice ?? 0) === 6))  ||  (((s as any).dimaRevenge ?? 0) === 7  &&  ((s as any).dimaRevChoice ?? 0) === 2)  ||  (((s as any).dimaRevenge ?? 0) === 8  &&  (((s as any).dimaRevChoice ?? 0) === 1  ||  ((s as any).dimaRevChoice ?? 0) === 4))) {
      scene.text('Dimka glares at you as you approach. "What the fuck do you want, slut?"');
      scene.text('You sigh. "Look, I know a lot has happened between us, but I thought we could leave it in the past and just be friends or something?"');
      scene.text('He looks a little dumbfounded, but shrugs. "Whatever." The two of you make a little small talk, but you get the feeling he is planning something.');
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      ]);
    } else {
      if (((s as any).dimka_debt ?? 0) > 0) {
        scene.text('The first thing Dimka does as you walk up is grab you by the arm and drag you aside so no one can hear him. "Do you have my money?"');
        if (qspFunc(s, 'money', 'can_afford_debt', ((s as any).dimka_debt ?? 0))) {
          scene.actions([
            { label: 'Pay your debt', handler: (st: GameState) => {
    qspCall(st, 'money', 'debt_pay', 'dimka_debt');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big1.jpg');
    scene.text('You nod your head and dig in your purse, pulling out the money and handing it to him. He takes his time slowly counting it out, then nods as it seems to all be there. You briefly talk back and forth as he puts the money away.');
    if (((st as any).dimarudorient ?? 0) === 1) {
      scene.actions([
        { label: 'Ask for some pale lady', goto: ['pav_disco_coolkids', 'dim_drugs'] },
      ]);
    }
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
          ]);
        } else {
          scene.text('You bite your lower lip nervously and look down as you shake your head. "No, just give me a little more time and I\'ll have it. Please?"');
          // TODO-QSP: dynamic text: He sighs. "I like you <<$pcs_nickname>>, I do, but I can''t just let you slide. ...
          scene.text(`He sighs. "I like you ${((s as any).pcs_nickname ?? '')}, I do, but I can't just let you slide. How about you pay me a little interest and you can pay me later?"`);
          scene.text('The way he says it leaves no doubt exactly what he considers <i>interest</i>.');
          qspCall(s, 'willpower', 'sex', 'resist');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspGoto(st, 'pav_disco_classmates', 'classmates');
  } },
            ]);
          }
          scene.actions([
            { label: 'Go with Dimka', goto: ['pav_discoev1', 'dimka_sex'] },
          ]);
        }
      } else {
        if (((s as any).grupTipe ?? 0) === 5) {
          scene.text('When you get near him, he glances at some of the other cool kids and then back to you.');
          scene.text('"You get lost, loser?" He looks you over and shakes his head. "Where did you get those clothes? Do you even know how to dress yourself?"');
          scene.text('Several of the others laugh at his comment. "Go away. You\'re killing the mood, loser."');
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
          ]);
        } else {
          if (((s as any).npc_rel ?? 0)?.['A1'] >= 50  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 200) {
            if (((s as any).grupTipe ?? 0) === 1) {
              scene.text('"Just the person I was hoping to see!" he smiles. "Take a look at this." He pulls out his phone and shows you some photos from his latest trip to Moscow. "You would have loved it out there. It really made me realize we\'re wasting away out here in a place like this."');
              scene.text('You then mostly talk about the other places he has visited.');
            } else {
              scene.text('Dimka greets you with a friendly smile, making room for you in the group made up of some of the cool kids and a few others you don\'t recognize. Some of them give you an odd look, not sure why you\'re here, but Dimka makes you feel welcome.');
              scene.text('"Relax, she doesn\'t have the plague," he playfully chides everyone and you\'re soon engaged in a conversation with Dimka.');
            }
            if (((s as any).dimarudorient ?? 0) === 1) {
              scene.actions([
                { label: 'Ask for some pale lady', goto: ['pav_disco_coolkids', 'dim_drugs'] },
              ]);
            }
            scene.actions([
              { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
              { label: 'Ask him to dance', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big1.jpg');
    scene.text('"Would you like to dance?" you ask with a smile.');
    scene.text('He hesitates for a moment before nodding. "Yeah, sure."');
    scene.text('The two of you then head off onto the dance floor together.');
    scene.actions([
      { label: 'Go dancing', goto: ['pav_disco_coolkids', 'dimka_dance'] },
    ]);
  } },
            ]);
          } else {
            if (((s as any).npc_rel ?? 0)?.['A1'] <= 20  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 200) {
              if (((s as any).grupTipe ?? 0) === 1) {
                // TODO-QSP: dynamic text: "You seem to have the wrong idea about me <<$pcs_nickname>>." Dimka holds out hi...
                scene.text(`"You seem to have the wrong idea about me ${((s as any).pcs_nickname ?? '')}." Dimka holds out his hand to keep you from getting any closer. "Just because we run in the same social circle doesn't mean we're friends."`);
                scene.text('You can\'t help but scoff and roll your eyes. "Who said I want to be friends? You just looked lonely standing over here by yourself. I was just trying to be nice."');
                scene.text('You trade a few more barbs back and forth.');
              } else {
                scene.text('Dimka looks down at you with a condescending smile. "What do you want?" he asks, maintaining his "friendly" appearance in front of everyone.');
                scene.text('"I just wanted to say hi is all…" you reply');
                scene.text('He looks around like this is a common burden. "Of course you did, everyone does."');
                scene.text('You try talking to him, but he acts like he is barely tolerating you, like a Tsar might a peasant in his court.');
              }
              if (((s as any).dimarudorient ?? 0) === 1) {
                scene.actions([
                  { label: 'Ask for some pale lady', goto: ['pav_disco_coolkids', 'dim_drugs'] },
                ]);
              }
              scene.actions([
                { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
              ]);
            } else {
              if (((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
                scene.text('Dimka sees you approaching and gives you a blank look, his gaze cold and unblinking. "Do you really think I would talk to a whore like you?" he dryly states. He continues to stare you down until you finally leave.');
                scene.actions([
                  { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
                ]);
              } else {
                scene.text('Dimka is willing to entertain you for a bit, occasionally taking part in the conversation but letting you do most of the talking before someone calls over to him.');
                scene.text('He smiles and waves back to them. "Sorry, I hope you don\'t mind."');
                scene.text('He starts heading towards them - you could quickly ask him something or just let him go.');
                if (((s as any).dimarudorient ?? 0) === 1) {
                  scene.actions([
                    { label: 'Ask for some pale lady', goto: ['pav_disco_coolkids', 'dim_drugs'] },
                  ]);
                }
                scene.actions([
                  { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
                  { label: 'Ask him to dance', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big1.jpg');
    scene.text('"Would you like to dance?" you ask with a smile.');
    scene.text('He hesitates for a moment before nodding. "Yeah, sure."');
    scene.text('The two of you then head off onto the dance floor together.');
    scene.actions([
      { label: 'Go dancing', goto: ['pav_disco_coolkids', 'dimka_dance'] },
    ]);
  } },
                ]);
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

function enterDimkaDance(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (5);
  qspCall(s, 'sweat', 'add', 3);
  (s as any).fat = ((s as any).fat ?? 0) - (1);
  qspCall(s, 'exp_gain', 'danc', 1);
  (s as any).frost = 0;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/disco/club.jpg');
  scene.text('You start dancing with him. He\'s a pretty good dancer and you both enjoy dancing together for a while.');
  if (((s as any).npc_rel ?? 0)?.['A1'] >= 80  &&  ((s as any).DimaRudeQW ?? 0) > 0  &&  (!((s as any).DimaRudeBlock ?? 0))) {
    scene.text('After the dance, Dimka holds onto your hand. "Let\'s go outside."');
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', '');
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
      { label: 'Go outside with him', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('You leave the club with Dimka and let him lead you away to a more secluded spot.');
    scene.text('It doesn\'t come as too big of a surprise when he turns to you with an imperious look. "You\'re going to suck my dick now, pig."');
    qspCall(st, 'dinnpc', 'din_predlog_dima_bj');
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', '');
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).npc_rel ?? 0)?.['A1'] >= 80  &&  (!((s as any).DimaRudeQW ?? 0))) {
      scene.text('After the dance, Dimka keeps your hand in his. "Let\'s go outside and get some fresh air."');
      scene.actions([
        { label: 'Go outside with Dimka', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('You walk outside with Dimka, eventually finding a quiet corner to yourselves. You\'re surprised when he suddenly hugs you tightly.');
    // TODO-QSP: dynamic text: "You''re such a pretty girl, <<$pcs_nickname>>. Would you go out with me?"
    scene.text(`"You're such a pretty girl, ${((st as any).pcs_nickname ?? '')}. Would you go out with me?"`);
    qspCall(st, 'willpower', 'misc', 'self', 'hard');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'No', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'No', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    scene.text(`<center><b>${(((st as any).npc_firstname ?? 0)?.['A1'] ?? '')} ${(((st as any).npc_lastname ?? 0)?.['A1'] ?? '')}</b></center>`);
    scene.img('images/characters/shared/headshots_main/big1.jpg');
    scene.text('You give him an apologetic look. "Sorry, but no."');
    // TODO-QSP: dynamic text: To your surprise, Dimka grins. "Don''t be shy, <<$pcs_nickname>>! Of course you ...
    scene.text(`To your surprise, Dimka grins. "Don't be shy, ${((st as any).pcs_nickname ?? '')}! Of course you want to go out with me! Why else would you be hanging out with me?"`);
    scene.actions([
      { label: 'Maybe you do have a little crush on him', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text(`<center><b>${(((st as any).npc_firstname ?? 0)?.['A1'] ?? '')} ${(((st as any).npc_lastname ?? 0)?.['A1'] ?? '')}</b></center>`);
    scene.img('images/characters/shared/headshots_main/big1.jpg');
    scene.text('"I don\'t know," you reply, feeling a little embarrassed. "Maybe?"');
    scene.text('He smiles. "I knew it, but I can\'t be seen going out with a nun. I want a girl who knows how to enjoy herself. You know how to have fun, right?"');
    scene.text('You nod carefully. Where is he going with this?');
    scene.text('His smile gets even bigger. "It\'s simple; I\'ll go out with you if you can prove to me that you\'re not a prude. All you\'ve got to do is suck my dick. Right now."');
    qspCall(st, 'dinnpc', 'din_dima_predlog');
  } },
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Yes', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text(`<center><b>${(((st as any).npc_firstname ?? 0)?.['A1'] ?? '')} ${(((st as any).npc_lastname ?? 0)?.['A1'] ?? '')}</b></center>`);
    scene.img('images/characters/shared/headshots_main/big1.jpg');
    scene.text('You\'re a little surprised by his directness, but nod.');
    scene.text('He smiles. ""I knew it, but I can\'t be seen going out with a nun. I want a girl who knows how to enjoy herself. You know how to have fun, right?"');
    scene.text('You nod carefully. Where is he going with this?');
    scene.text('His smile gets even bigger. "It\'s simple; I\'ll go out with you if you can prove to me that you\'re not a prude. All you\'ve got to do is suck my dick. Right now."');
    qspCall(st, 'dinnpc', 'din_dima_predlog');
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        { label: 'Keep dancing', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    (st as any).pcs_stam = ((st as any).pcs_stam ?? 0) - (5);
    qspCall(st, 'sweat', 'add', 3);
    (st as any).fat = ((st as any).fat ?? 0) - (1);
    qspCall(st, 'exp_gain', 'danc', 1);
    (st as any).frost = 0;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/school_kids/dimka_dance.jpg');
    scene.text('You continue dancing, having fun and enjoying yourself so much that you really don\'t care about those that might be watching.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Keep dancing', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    (st as any).pcs_stam = ((st as any).pcs_stam ?? 0) - (5);
    qspCall(st, 'sweat', 'add', 3);
    (st as any).fat = ((st as any).fat ?? 0) - (1);
    qspCall(st, 'exp_gain', 'danc', 1);
    (st as any).frost = 0;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/club_dance1.jpg');
    scene.text('The two of you dance energetically, really getting into the beat of the music. You\'re having a lot of fun dancing with Dimka and you think he\'s having fun dancing with you too.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Keep dancing', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    (st as any).pcs_stam = ((st as any).pcs_stam ?? 0) - (5);
    qspCall(st, 'sweat', 'add', 3);
    (st as any).fat = ((st as any).fat ?? 0) - (1);
    qspCall(st, 'exp_gain', 'danc', 1);
    (st as any).frost = 0;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/club_dance2.jpg');
    scene.text('He pulls you in close and you\'re soon dancing with your face only a few inches from his. You feel his hand slide down your back to just above your ass before a girl walks over and asks him to dance. She\'s very pretty and he looks her over and grins before looking back at you.');
    scene.text('"Sorry, but I think it\'s this lovely lady\'s turn."');
    scene.text('He turns and starts dancing with her, leaving you to walk off the dance floor.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
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

function enterDimDrugs(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big1.jpg');
  scene.text('You don\'t want to, but you feel miserable and everything hurts. You crave the rush that you\'ve come to enjoy so much.');
  scene.text('"Please Dimka, can I have some pale lady?"');
  scene.text('He smiles at you with a smug grin. "Sure. Do you have any money?"');
  if (qspFunc(s, 'money', 'can_afford', 420)) {
    scene.actions([
      { label: 'Change your mind', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Buy enough for 1 line', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 420) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspGoto(st, 'pav_disco_coolkids', 'dimka_pay', '1');
    }
  } },
      { label: 'Buy enough for 2 lines', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 840) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspGoto(st, 'pav_disco_coolkids', 'dimka_pay', '2');
    }
  } },
      { label: 'Buy enough for 5 lines', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 1680) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspGoto(st, 'pav_disco_coolkids', 'dimka_pay', '5');
    }
  } },
      { label: 'Buy enough for 10 lines', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 3720) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspGoto(st, 'pav_disco_coolkids', 'dimka_pay', '10');
    }
  } },
    ]);
  } else {
    scene.text('You bite your lower lip nervously and look down as you shake your head. "No, but please can you just give me some now and I can pay you back later?"');
    scene.text('He grins. "Sure. Why don\'t we go somewhere quieter? You make me happy and I will make you happy. You can pay me back later."');
    scene.text('Resolved to do anything to make the pain go away and feel happy again, you mentally sigh and follow him.');
    scene.actions([
      { label: 'Change your mind', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Go with Dimka', goto: ['pav_discoev1', 'dimka_sex'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterDimkaPay(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'money', 'pay', ((s as any).locArgs?.[1] ?? 0) * 420);
  ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['cocaine'] = ((s as any).mc_inventory['cocaine'] ?? 0) + (((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'stat', '');
  scene.img('images/shared/drugs/cocainebag.jpg');
  scene.text('You nod your head and dig in your purse, pulling out the money and quickly handing it to him. He takes his time slowly counting it out, which seems like an eternity before he finally hands over a small baggy. You snatch it from him and then quickly leave.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    { label: 'Do a line', handler: (st: GameState) => {
    qspCall(st, 'drugs', 'cocaine');
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/shared/drugs/lineschool.jpg');
    scene.text('You leave the disco and walk down the hall, looking into rooms until you spot one that\'s unlocked and empty. You glance around and when no one is looking, you duck inside and rush over to a table.');
    scene.text('You pour out a line and quickly snort it, immediately feeling the sensation of relief and pleasure rushing through your body. You spend a few minutes in a stupor before heading back to the disco.');
    scene.actions([
      { label: 'Go back to the disco', goto: ['pav_disco', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterMarcus(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A146', 'like', 1, 'pav_disco');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big146.jpg');
  if ((Math.floor(Math.random() * 3) + 1) === 1) {
    scene.text('You see Marcus out on the dance floor casually dancing with a few girls. It looks like everyone is having fun.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Go out on the dance floor', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/school_kids/marcus_dance.jpg');
    if (((st as any).npc_rel ?? 0)?.['A146'] >= 50  &&  ((st as any).fame ?? 0)?.['pav_slut'] < 250) {
      // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, want to dance?" he asks as you approach before moving in...
      scene.text(`"Hey ${((st as any).pcs_nickname ?? '')}, want to dance?" he asks as you approach before moving in close and dancing next to you.`);
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        { label: 'Dance with him', goto: ['pav_disco_coolkids', 'marcus_dance'] },
      ]);
    } else {
      if (((st as any).npc_rel ?? 0)?.['A146'] <= 20  &&  ((st as any).fame ?? 0)?.['pav_slut'] < 250) {
        if (((st as any).pcs_hotcat ?? 0) >= 5) {
          scene.text('He starts dancing next to you when you get close, but you don\'t think he recognizes you.');
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
            { label: 'Dance with him', goto: ['pav_disco_coolkids', 'marcus_dance'] },
          ]);
        } else {
          scene.text('When you get near him, he turns and starts dancing with another girl, completely ignoring you.');
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
          ]);
        }
      } else {
        if (((st as any).fame ?? 0)?.['pav_slut'] >= 250) {
          scene.text('When he sees you heading in his direction, he moves away and starts dancing with another girl.');
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
          ]);
        } else {
          scene.text('He smiles when you get near him, but then turns and starts dancing with another girl, completely ignoring you.');
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
          ]);
        }
      }
    }
  } },
    ]);
  } else {
    scene.text('Marcus is currently sitting in one of the chairs at a small table the cool kids have claimed as their own.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Hang out with him', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big146.jpg');
    if (((st as any).npc_rel ?? 0)?.['A146'] >= 50  &&  ((st as any).fame ?? 0)?.['pav_slut'] < 250) {
      scene.text('You enjoy hearing the stories Marcus tells you about his life in America. "It\'s kind of funny, I don\'t think I was nearly as popular as this back home. I\'m not complaining, though!"');
      scene.text('You spend the some more time asking more questions about his home life and he\'s happy to tell you all about it.');
      if (((st as any).pcs_hotcat ?? 0) >= 5) {
        scene.text('Just when it seems like you\'ve run out of small talk, he smiles at you. "Want to dance?"');
        scene.actions([
          { label: 'No', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big146.jpg');
    scene.text('You shake your head. "No thanks, I\'m not in the mood to dance. Maybe some other time?"');
    scene.text('He nods, but you can tell he\'s disappointed. "Sure, some other time…"');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
          { label: 'Yes', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big146.jpg');
    scene.text('You smile and nod. "I\'d love to dance with you."');
    scene.text('"Great! Let\'s go," he says before he grabs your hand and leads you out onto the dance floor.');
    scene.actions([
      { label: 'Go dancing', goto: ['pav_disco_coolkids', 'marcus_dance'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      ]);
    } else {
      if (((st as any).npc_rel ?? 0)?.['A146'] <= 20  &&  ((st as any).fame ?? 0)?.['pav_slut'] < 250) {
        if (((st as any).grupTipe ?? 0) === 1) {
          scene.text('"Do I know you?" Marcus asks when you try to strike up a conversation.');
          scene.text('"Uhh… I would think so? We run in the same social circle…" you reply, but he just shrugs.');
        } else {
          scene.text('You try to strike up a conversation with Marcus, but he just ignores you and continues talking to some of the others.');
        }
        scene.actions([
          { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        ]);
      } else {
        if (((st as any).fame ?? 0)?.['pav_slut'] >= 250) {
          scene.text('"Hmm… I should have known," Marcus says when he sees you.');
          scene.text('"Known what?" you reply.');
          // TODO-QSP: dynamic text: He smirks and steps closer to you. "I thought Russian girls were different, but ...
          scene.text(`He smirks and steps closer to you. "I thought Russian girls were different, but I guess a slut is a slut no matter where you are. Ain't that right, ${((st as any).pcs_nickname ?? '')}?"`);
          scene.text('You expect him to grab at you, but he just shakes his head and walks away.');
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
          ]);
        } else {
          scene.text('Marcus is a friendly guy that gets along with nearly everyone, which makes talking to him easy and fun, even when you\'re not that familiar with each other.');
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
            { label: 'Ask him to dance', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big146.jpg');
    if (((st as any).pcs_hotcat ?? 0) >= 5) {
      scene.text('"Would you like to dance?" you ask with a smile.');
      scene.text('He grins. "I\'d love to!"');
      scene.actions([
        { label: 'Go dancing', goto: ['pav_disco_coolkids', 'marcus_dance'] },
      ]);
    } else {
      scene.text('"Would you like to dance?" you ask with a smile.');
      scene.text('He looks like a deer in headlights. "Um… I\'d love to, but… Maybe some other time?"');
      scene.text('You get the feeling he doesn\'t want to dance with you, but doesn\'t want to be rude.');
      scene.text('"Sure," you reply with a shrug before deciding to do something else.');
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      ]);
    }
  } },
          ]);
        }
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterMarcusDance(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (5);
  qspCall(s, 'sweat', 'add', 3);
  (s as any).fat = ((s as any).fat ?? 0) - (1);
  qspCall(s, 'exp_gain', 'danc', 1);
  (s as any).frost = 0;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/disco/school_kids/marcus_dance.jpg');
  scene.text('You start dancing with him. He\'s a pretty good dancer and you both enjoy dancing together for a while.');
  if (((s as any).hour ?? 0) >= 20) {
    scene.actions([
      { label: 'Keep dancing', goto: ['pav_disco_coolkids', 'marcus_dance'] },
      { label: 'Grind against him', handler: (st: GameState) => {
    qspCall(st, 'fame', 'pav', 'sex', 1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/school_kids/marcus_grind1.jpg');
    scene.text('You back up against him and start grinding your ass against his crotch.');
    if (((st as any).pcs_hotcat ?? 0) < 5) {
      scene.text('He lets you grind against him for a little bit before he steps back, grabs you by the hand and turns you around to face him. He goes back to dancing with you, but he keeps it friendly.');
      scene.text('After a few minutes, he steps away and stops dancing. "I need a drink, but I had fun. Maybe we can do it again later?" he asks with a smile before walking away.');
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      ]);
    } else {
      scene.text('He grabs you by the hips and pulls you in closer before he starts grinding back against you and nuzzles your neck.');
      qspCall(st, 'arousal', 'foreplay', 10, 'inhibition');
      qspCall(st, 'stat', '');
      scene.actions([
        { label: 'Go back to just dancing', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'pav_disco_coolkids', 'marcus_dance');
  } },
        { label: 'Keep grinding', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/school_kids/marcus_grind2.jpg');
    scene.text('He keeps his hands firmly on your hips, pulling you tightly against him as you keep grinding your ass against him. You can feel his well endowed dick starting to get hard.');
    qspCall(st, 'arousal', 'foreplay', 10, 'inhibition');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Make out', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/school_kids/marcus_kiss.jpg');
    scene.text('He suddenly turns you around and starts kissing you passionately on the lips as you feel his erection pressing against your stomach.');
    scene.text('After several minutes of making out, he breaks the kiss. "Let\'s go somewhere more private…"');
    qspCall(st, 'arousal', 'kiss', 15, 'inhibition');
    qspCall(st, 'stat', '');
    qspCall(st, 'willpower', 'sex', 'resist', 'easy');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'No', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'No', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big146.jpg');
    scene.text('You step back to create some space between the two of you and look around. "I\'d like to, but if we leave together… Well… You know what everyone will think, and I don\'t want to get a reputation. I\'m sorry."');
    scene.text('He looks disappointed at first, but then smiles. "Yeah, I get it. If you\'re not comfortable, it\'s not a problem. I need to get something to drink."');
    scene.text('He walks away while trying to hide his erection.');
    scene.actions([
      { label: 'Do something else', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'pav_disco_classmates', 'classmates');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Go with him', goto: ['pav_discoev1', 'marcus'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  if (String((s as any).locArgs?.[0] ?? '') === 'andrey'  ||  String((s as any).locArgs?.[0] ?? '') === 'stasya') {
    qspGoto(s, 'pav_disco_coolkids', 'andrey_stasya');
  }
  scene.actions([
    { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
  ]);
  scene.build();
}

function enterAndreyStasya(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A147', 'like', 1, 'pav_disco');
  qspCall(s, 'npc_relationship', 'modify', 'A139', 'like', 1, 'pav_disco');
  qspCall(s, 'stat', '');
  if ((Math.floor(Math.random() * 5) + 1) <= 2) {
    scene.img('images/locations/pavlovsk/community/disco/school_kids/andrey_stasya_dance1.jpg');
    scene.text('You see Andrey and Stasya dancing together out on the dance floor. They\'re both pretty good dancers and they seem to be really enjoying themselves as they start getting a little frisky.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Go out on the dance floor', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/school_kids/andrey_stasya_dance2.jpg');
    if (((st as any).npc_rel ?? 0)?.['A147'] >= 50  &&  ((st as any).npc_rel ?? 0)?.['A139'] >= 50  &&  ((st as any).fame ?? 0)?.['pav_slut'] < 250) {
      scene.text('When you get close to them they smile and part a little, an obvious invite to dance with them. You start dancing with them, sometimes with Andrey, other times with Stasya and sometimes all three of you dance together. More often than not, you\'re forced aside as they kiss while dancing.');
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        { label: 'Keep dancing with them', handler: (st: GameState) => {
    (st as any).pcs_stam = ((st as any).pcs_stam ?? 0) - (5);
    qspCall(st, 'sweat', 'add', 3);
    (st as any).fat = ((st as any).fat ?? 0) - (1);
    qspCall(st, 'exp_gain', 'danc', 1);
    (st as any).frost = 0;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/school_kids/andrey_stasya_dance2.jpg');
    if (((st as any).pcs_hotcat ?? 0) >= 6  &&  ((st as any).Marcus_sextype ?? 0) >= 1) {
      scene.text('The longer you dance, the more erotic things get and the closer the three of you start to dance. Andrey is loving it while Stasya holds you close and runs her hands along your body. As she dances with her back to him, he whispers something in her ear, but you can\'t make it out.');
      scene.text('Whatever it is, it seems Stasya isn\'t into it, but after a bit of back and forth she either relents or changes her mind, because you see Andrey grin before kissing her. He then starts to dance with you again.');
      scene.text('"How about we get out of here and go back to my place? I can get Marcus to come over."');
      qspCall(st, 'arousal', 'foreplay', 15, 'inhibition');
      qspCall(st, 'arousal', 'end');
      scene.actions([
        { label: 'No', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A139', 'like', 1, 'pav_disco2');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/school_kids/andrey_stasya_dance2.jpg');
    scene.text('You shake your head. "No thanks, I\'m having fun here. Maybe some other time?"');
    // TODO-QSP: dynamic text: Stasya hits him lightly on the shoulder. "See? I told you it was such a dumb ide...
    scene.text(`Stasya hits him lightly on the shoulder. "See? I told you it was such a dumb idea that even ${((st as any).pcs_nickname ?? '')} wouldn't want to do it."`);
    scene.text('He rolls his eyes at her before turning towards you. You can tell he\'s disappointed. "Sure. Some other time then…" ');
    scene.text('"I want a drink," Stasya whines and he smiles.');
    // TODO-QSP: dynamic text: "Sure babe, anything you want. Catch you later, <<$pcs_nickname>>," he says with...
    scene.text(`"Sure babe, anything you want. Catch you later, ${((st as any).pcs_nickname ?? '')}," he says with a smile before they walk away hand in hand.`);
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
        { label: 'Yes', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A147', 'like', 1, 'pav_disco2');
    qspCall(st, 'npc_relationship', 'modify', 'A139', 'dislike', 1, 'pav_disco2');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/school_kids/andrey_stasya_dance2.jpg');
    scene.text('You nod your head. "Sure, that sounds like fun. What did you have in mind?"');
    scene.text('He just grins. "Oh, you\'ll see. I promise it\'ll be a blast, though."');
    scene.text('he pulls out his phone and starts texting before he offers his hand to each of you, Stasya looping her arm inside of his as you all walk outside.');
    scene.text('When you get outside, Marcus comes jogging over. "Hey, what\'s up?"');
    scene.text('Andrey grins at him. "We\'re all going back to our place to par-ty!"');
    scene.text('Marcus looks a little surprised as he glances at you and Stasya, who gives him a smile, but it looks a little forced to you.');
    scene.text('"Awesome, dude!" he says with a huge grin, looking just as excited as Andrey.');
    scene.text('The boys exchange fist bumps and the four of you walk away together. You get the feeling everyone but you seems to know what the plan is.');
    scene.actions([
      { label: 'Leave with them', goto: ['pav_discoev1', 'andrey_stasya_marcus'] },
    ]);
  } },
      ]);
    } else {
      scene.text('The longer you dance, the more erotic things get and the closer the three of you start to dance. Andrey is loving it while Stasya holds you close and runs her hands along your body.');
      scene.text('A few minutes later, she stops dancing. "I want a drink."');
      scene.text('"Sure babe, anything you want," he replies and Stasya smiles at him.');
      // TODO-QSP: dynamic text: "Catch you later, <<$pcs_nickname>>," he says with a smile before they walk away...
      scene.text(`"Catch you later, ${((st as any).pcs_nickname ?? '')}," he says with a smile before they walk away hand in hand.`);
      qspCall(st, 'arousal', 'foreplay', 15, 'inhibition');
      qspCall(st, 'arousal', 'end');
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      ]);
    }
  } },
      ]);
    } else {
      if (((st as any).grupTipe ?? 0) === 5) {
        scene.text('When you get near them, they turn away from you and start dancing even closer together, clearly wanting nothing to do with you.');
        scene.actions([
          { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        ]);
      } else {
        if (((st as any).npc_rel ?? 0)?.['A147'] <= 20  ||  ((st as any).npc_rel ?? 0)?.['A139'] <= 20  &&  ((st as any).fame ?? 0)?.['pav_slut'] < 250) {
          scene.text('When you get near them, they turn away from you and start dancing even closer together, clearly wanting nothing to do with you.');
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
          ]);
        } else {
          if (((st as any).fame ?? 0)?.['pav_slut'] >= 250) {
            scene.text('When they see you heading in their direction, they both give you looks of disgust, making is very clear they want nothing to do with you.');
            scene.actions([
              { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
            ]);
          } else {
            scene.text('When you get near them, they mostly ignore you, but they don\'t seem to mind you dancing right next to them.');
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
    scene.img('images/locations/pavlovsk/community/disco/school_kids/andrey_stasya.jpg');
    scene.text('Andrey and Stasya are currently sitting in one of the couches the cool kids have claimed, side by side.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Hang out with them', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/school_kids/andrey_stasya.jpg');
    if (((st as any).npc_rel ?? 0)?.['A147'] >= 50  &&  ((st as any).npc_rel ?? 0)?.['A139'] >= 50  &&  ((st as any).fame ?? 0)?.['pav_slut'] < 250) {
      if (((st as any).pcs_hotcat ?? 0) >= 6  &&  ((st as any).Marcus_sextype ?? 0) >= 1) {
        scene.text('You spend some time with Andrey and Stasya talking about school or local gossip, or asking them questions about their home life.');
        scene.text('Andrey is all too happy to tell you all about it, which mostly involves what him and Marcus get up to, which causes a sour look to appear on Stasya\'s face. After a while, he leans over and whispers something to her, but you can\'t make it out.');
        scene.text('Whatever it is, it seems Stasya isn\'t into it but after a bit of back and forth she either relents or changes her mind, because you see Andrey grin before kissing her. He then turns back to you.');
        scene.text('"How about we get out of here and go back to my place? I can get Marcus to come over."');
        scene.actions([
          { label: 'No', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A139', 'like', 1, 'pav_disco2');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/school_kids/andrey_stasya.jpg');
    scene.text('You shake your head. "No thanks, I\'m having fun here. Maybe some other time?"');
    // TODO-QSP: dynamic text: Stasya hits him lightly on the shoulder. "See? I told you it was such a dumb ide...
    scene.text(`Stasya hits him lightly on the shoulder. "See? I told you it was such a dumb idea that even ${((st as any).pcs_nickname ?? '')} doesn't want to do it."`);
    scene.text('He rolls his eyes at her before turning towards you. You can tell he\'s disappointed. "Sure, some other time then…" ');
    scene.text('"I want a drink." Stasya moans at him and he just smiles.');
    // TODO-QSP: dynamic text: "Sure babe, anything you want. Catch you later <<$pcs_nickname>>." he says to yo...
    scene.text(`"Sure babe, anything you want. Catch you later ${((st as any).pcs_nickname ?? '')}." he says to you with a smile before they walk off hand in hand.`);
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
          { label: 'Yes', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A147', 'like', 1, 'pav_disco2');
    qspCall(st, 'npc_relationship', 'modify', 'A139', 'dislike', 1, 'pav_disco2');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/school_kids/andrey_stasya.jpg');
    scene.text('You nod your head. "Sure, that sounds like fun. What did you have in mind?"');
    scene.text('He grins wide. "Oh, you\'ll see. I promise it\'ll be a blast." He gets up and to help you up.  while leading the two of you out. Stasya loops her arm inside of his as they walk.');
    scene.text('He pulls out his phone and starts texting before he offers his hand to each of you, Stasya looping her arm inside of his as you all walk outside.');
    scene.text('When you get outside, Marcus comes jogging over. "Hey, what\'s up?"');
    scene.text('Andrey grins at him. "We\'re all going back to our place to par-ty!"');
    scene.text('Marcus looks a little surprised as he glances at you and Stasya, who gives him a smile, but it looks a little forced to you.');
    scene.text('"Awesome, dude!" he says with a huge grin, looking just as excited as Andrey.');
    scene.text('The boys exchange fist bumps and the four of you walk away together. You get the feeling everyone but you seems to know what the plan is.');
    scene.actions([
      { label: 'Leave with them', goto: ['pav_discoev1', 'andrey_stasya_marcus'] },
    ]);
  } },
        ]);
      } else {
        scene.text('You spend some time with Andrey and Stasya talking about school or local gossip, or asking them questions about their home life.');
        scene.text('Andrey is all too happy to tell you all about it, which mostly involves what him and Marcus get up to, which causes a sour look to appear on Stasya\'s face.');
        scene.text('After a while, Stasya seems to get bored of him talking about Marcus, or perhaps more annoyed. "I want a drink."');
        // TODO-QSP: dynamic text: "Sure babe, anything you want. Catch you later, <<$pcs_nickname>>," he says with...
        scene.text(`"Sure babe, anything you want. Catch you later, ${((st as any).pcs_nickname ?? '')}," he says with a smile before they get up and walk away hand in hand.`);
        qspCall(st, 'arousal', 'foreplay', 15, 'inhibition');
        qspCall(st, 'arousal', 'end');
        scene.actions([
          { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        ]);
      }
    } else {
      if (((st as any).grupTipe ?? 0) === 5) {
        scene.text('When you get near them, Stasya turns to Andrey. "Eww, make it go away!"');
        scene.text('He gives you an annoyed look in response. "Get lost, freak!"');
        scene.actions([
          { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        ]);
      } else {
        if (((st as any).npc_rel ?? 0)?.['A147'] <= 20  ||  ((st as any).npc_rel ?? 0)?.['A139'] <= 20  &&  ((st as any).fame ?? 0)?.['pav_slut'] < 250) {
          scene.text('You spend a few minutes talking with Andrey and Stasya, who spend most of their time kissing and ignoring you until she says she wants a drink.');
          // TODO-QSP: dynamic text: "Sure babe, anything you want. Catch you later, <<$pcs_nickname>>," he says with...
          scene.text(`"Sure babe, anything you want. Catch you later, ${((st as any).pcs_nickname ?? '')}," he says with a smile before they get up and walk away hand in hand.`);
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
          ]);
        } else {
          if (((st as any).fame ?? 0)?.['pav_slut'] >= 250) {
            scene.text('Stasya glares at you as you approach. "Oh my god! Stay away from us, you skank!"');
            scene.text('Andrey gives you a dirty look and puts his arm around Stasya. "We have nothing to say to you, slut."');
            scene.actions([
              { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
            ]);
          } else {
            scene.text('You spend some time with Andrey and Stasya until she says wants a drink.');
            // TODO-QSP: dynamic text: "Sure babe, anything you want. Catch you later, <<$pcs_nickname>>," he says with...
            scene.text(`"Sure babe, anything you want. Catch you later, ${((st as any).pcs_nickname ?? '')}," he says with a smile before they get up and walk away hand in hand.`);
            scene.actions([
              { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
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

function enterMefodiy(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A148', 'like', 1, 'pav_disco');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big148.jpg');
  if ((Math.floor(Math.random() * 4) + 1) === 1) {
    scene.text('You see Mefodiy on the dance floor alone. He\'s usually dancing with a random girl, so now\'s a rare chance to dance with him.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Go out on the dance floor', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/club.jpg');
    if (((st as any).grupTipe ?? 0) === 1) {
      // TODO-QSP: dynamic text: You approach Mefodiy and he greets you with a warm smile. "Fancy a dance, <<$pcs...
      scene.text(`You approach Mefodiy and he greets you with a warm smile. "Fancy a dance, ${((st as any).pcs_firstname ?? '')}?"`);
    } else {
      if (((st as any).grupTipe ?? 0) === 2) {
        scene.text('You approach Mefodiy and he smiles warmly.');
        scene.text('"A dance, m\'lady?" he says, putting on an accent.');
      } else {
        if (((st as any).grupTipe ?? 0) === 3) {
          scene.text('You approach Mefodiy, who looks a little surprised to see a nerd at the dance, but soon regathers his composure and greets you.');
        } else {
          if (((st as any).grupTipe ?? 0) === 4) {
            scene.text('You approach Mefodiy and he stares at you while shaking his head. It seems he\'s not even going to talk to you, never mind dance.');
          } else {
            if (((st as any).grupTipe ?? 0) === 5) {
              scene.text('You approach Mefodiy expecting him to say something negative, but he\'s a perfect gentleman and greets you like he would one of his friends.');
            }
          }
        }
      }
    }
    if (((st as any).grupTipe ?? 0) !== 4) {
      scene.actions([
        { label: 'Dance with him', goto: ['pav_disco_coolkids', 'mefodiy_dance'] },
      ]);
    }
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
    ]);
  } else {
    scene.text('You see Mefodiy chatting to various people.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Hang out with him', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big148.jpg');
    scene.text('You walk towards him as he spots you and turns his attention towards you.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Ask him to dance', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big148.jpg');
    if (((st as any).grupTipe ?? 0) === 1) {
      // TODO-QSP: dynamic text: You ask Mefodiy if he''ll join you for a dance and he greets you with a warm smi...
      scene.text(`You ask Mefodiy if he'll join you for a dance and he greets you with a warm smile. "Of course, ${((st as any).pcs_firstname ?? '')}."`);
    } else {
      if (((st as any).grupTipe ?? 0) === 2) {
        scene.text('You ask Mefodiy if he\'ll join you for a dance and he smiles warmly.');
        scene.text('"It would be my pleasure," he says formally.');
      } else {
        if (((st as any).grupTipe ?? 0) === 3) {
          scene.text('You ask Mefodiy if he\'ll join you for a dance. He\'s clearly surprised that a nerd is asking him to dance, but he soon regathers his composure and shrugs.');
          scene.text('"Sure…"');
        } else {
          if (((st as any).grupTipe ?? 0) === 4) {
            scene.text('You go to ask Mefodiy for a dance and he stares at you while shaking his head. It seems he\'s not even going to talk to you, never mind dance.');
          } else {
            if (((st as any).grupTipe ?? 0) === 5) {
              scene.text('You ask Mefodiy if he\'ll join you for a dance. The people around him are clearly snickering at you, but he dismisses them with a wave of his hand.');
              scene.text('"Ignore them. They\'re just jealous."');
            }
          }
        }
      }
    }
    if (((st as any).grupTipe ?? 0) !== 4) {
      scene.actions([
        { label: 'Go dancing', goto: ['pav_disco_coolkids', 'mefodiy_dance'] },
      ]);
    }
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
      { label: 'Ask why he never has a girlfriend', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big148.jpg');
    scene.text('"Well aren\'t you observant?" he says. "Truth is I\'m just not in a hurry to find someone special. These things are controlled by fate. If it\'s meant to happen, then it will and if not, well then I\'ll have more time to meet people like you."');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'So I\'m not girlfriend material?', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big148.jpg');
    // TODO-QSP: dynamic text: "<<$pcs_firstname>>, you''re the perfect girlfriend for someone, just not me. I ...
    scene.text(`"${((st as any).pcs_firstname ?? '')}, you're the perfect girlfriend for someone, just not me. I wish it wasn't so as you'll make one man very happy, maybe more, one day."`);
    scene.text('He laughs trying to say the next line. "Just not all at the same time."');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
    ]);
  } },
      { label: 'Ask why he hates the gopniks', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big148.jpg');
    scene.text('"They used to pick on me when I was younger for being a late developer. When you\'re the smallest kid in the year, bullies single you out. I was good at avoiding them, but I ended up getting cornered by a group of them one day. Vitek was feeding off the rest of them and calling me names before he punched me really hard. I fell to the floor and he walked up about to kick me in the guts when Roman stepped between us. Vitek told him to get out of the way, but Roman just stares him down."');
    scene.text('He smirks. "It looked stupid, this little guy staring up at Vitek with Dan and Vasily flanking him, but they backed down. Vitek made some excuse and walked away and I was going to thank Roman, but he just walked off with the rest of them. I still don\'t know why he did it, but that\'s why I don\'t like the gopniks."');
    scene.actions([
      { label: 'Ask if they still give him trouble', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big148.jpg');
    scene.text('"They\'ve never touched or said anything to me since. Maybe Roman being small thought we had something in common, maybe he was upset about something completely unrelated and with me hitting a growth spurt not long after I wasn\'t so little and they lost interest. I don\'t really know, but he might have saved me a trip to the nurse, or worse. The rest of them can go fuck themselves, except Nush. She\'s cool, but that\'s a whole other story and not one she\'d want overheard."');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
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

function enterMefodiyDance(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (5);
  qspCall(s, 'sweat', 'add', 3);
  (s as any).fat = ((s as any).fat ?? 0) - (1);
  qspCall(s, 'exp_gain', 'danc', 1);
  (s as any).frost = 0;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/disco/club.jpg');
  scene.text('Mefodiy grabs you by the hand and leads you right into the middle of the dance floor. He\'s really good, and confident enough to match your goofiest moves. He quickly adapts to your moves, making you look far better at dancing than you are.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    { label: 'Keep dancing', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'mood', 'raise', 'tiny');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/club.jpg');
    scene.text('You continue dancing, having fun and enjoying yourself so much that you really don\'t care about those that might be watching. It really is great fun.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Dance closer', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    scene.img('images/locations/pavlovsk/community/disco/club.jpg');
    if (((st as any).npc_rel ?? 0)?.['A148'] < 50) {
      scene.text('Every attempt you make to close the distance between you is brushed off or skillfully avoided. You get the hint and just dance normally.');
    } else {
      qspCall(st, 'mood', 'raise', 'small');
      scene.text('Mefodiy is overly flirtatious in reaction to your moves. You realize it\'s fake, but also funny and react by being overly dramatic in your advances until both of you are too busy laughing to carry on dancing.');
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterIgor(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A4', 'like', 1, 'pav_disco');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big4.jpg');
  if ((Math.floor(Math.random() * 4) + 1) === 1) {
    scene.text('You see Igor out on the dance floor. You can\'t help but notice that he shakes his ass and moves his hips around a lot more than most guys do. A few others seem to have noticed as well, but he seems to be having fun.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Go out on the dance floor', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/school_kids/igor_dance.jpg');
    if (((st as any).npc_rel ?? 0)?.['A4'] >= 50  &&  ((st as any).fame ?? 0)?.['pav_slut'] < 250) {
      scene.text('When Igor sees you, his face lights up and he smiles warmly. He waves you over and pulls you in for a hug when you get close.');
      scene.text('"I was hoping I\'d see you…" he says shyly before he starts dancing with you. You can\'t help but giggle at him.');
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        { label: 'Dance with him', goto: ['pav_disco_coolkids', 'igor_dance'] },
      ]);
    } else {
      if (((st as any).grupTipe ?? 0) === 5) {
        scene.text('When he sees you approaching, he walks a short distance away and starts dancing again.');
        scene.actions([
          { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        ]);
      } else {
        if (((st as any).npc_rel ?? 0)?.['A4'] <= 20  ||  ((st as any).fame ?? 0)?.['pav_slut'] >= 250) {
          scene.text('When he sees you approaching, he walks a short distance away and starts dancing again.');
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
          ]);
        } else {
          scene.text('When Igor sees you, he just smiles and keeps dancing. He doesn\'t seem to mind you dancing with him.');
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
            { label: 'Dance with him', goto: ['pav_disco_coolkids', 'igor_dance'] },
          ]);
        }
      }
    }
  } },
    ]);
  } else {
    if (((s as any).IgorQW ?? 0)?.['Lover'] > 0) {
      scene.text('When Igor sees you, his face lights up and he smiles warmly.');
      scene.text('"I was hoping I\'d see you. I, uh, kinda missed you…" he says shyly, making you giggle.');
      scene.text('His hand finds yours as you talk with each other.');
      if (((s as any).IgorQW ?? 0)?.['strap'] >= 1) {
        scene.actions([
          { label: 'Tease him about pegging', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big4.jpg');
    scene.text('You decide to tease Igor a little. "I hope you\'re not too sore after last time," you whisper with a smirk.');
    scene.text('His cheeks flush pink as he looks around nervously, hoping no one overheard.');
    scene.actions([
      { label: 'Just chat', goto: ['pav_disco_coolkids', 'igor_hang_out'] },
      { label: 'Tell him you have a surprise', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big4.jpg');
    scene.text('You keep whispering in his ear. "I want to fuck you right now."');
    scene.text('He gives you a shocked look before you open your purse and show him your strapon nestled inside, which makes him blush even more.');
    scene.text('"What if we get caught?" he whispers, sounding scared and excited at the same time.');
    scene.text('You pat him on the cheek. "Trust me, I know a place and no one will ever find out."');
    scene.text('He thinks on it for a moment before he nods.');
    scene.actions([
      { label: 'Take him somewhere private', goto: ['pav_discoev1', 'igor_peg'] },
      { label: 'Just teasing', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big4.jpg');
    scene.text('You laugh a little. "You <i>are</i> eager! You must really love it…"');
    scene.text('He blushes bright red. "I… I…"');
    scene.text('You raise a hand to caress his cheek. "It\'s okay, I was just messing with you. You\'re right, it\'s too risky. I didn\'t think you would agree."');
    scene.text('He looks a little sheepish. "Oh…"');
    scene.actions([
      { label: 'Just chat', goto: ['pav_disco_coolkids', 'igor_hang_out'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Hang out with him', goto: ['pav_disco_coolkids', 'igor_hang_out'] },
      ]);
    } else {
      if (((s as any).grupTipe ?? 0) === 5) {
        scene.text('When you get near him, he glances at some of the other cool kids and then back at you. "Go bother someone else."');
        scene.actions([
          { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        ]);
      } else {
        if (((s as any).npc_rel ?? 0)?.['A4'] >= 50  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 200) {
          scene.text('You know he doesn\'t have many friends, so he\'s more than happy that you want to hang out with him. Unlike most boys, Igor is really attentive and listens to everything you say, even taking an interest in the more "girly" topics.');
          scene.text('"Oh, it\'s not that weird." he blushes. "I have a sister, so I hear about these things all the time…"');
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
            { label: 'Hang out with him', goto: ['pav_disco_coolkids', 'igor_hang_out'] },
          ]);
        } else {
          if (((s as any).npc_rel ?? 0)?.['A4'] <= 20  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 200) {
            if (((s as any).grupTipe ?? 0) === 1) {
              scene.text('The conversation feels forced as Igor makes almost no effort to talk to you. You get the feeling he\'s just doing this as a courtesy since you\'re in the same clique.');
              scene.actions([
                { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
              ]);
            } else {
              scene.text('"Uh, hello?" Igor is unamused to see you and completely ignores you as you try to keep a one-sided conversation going. Eventually, he just walks away without saying a word.');
              scene.actions([
                { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
              ]);
            }
          } else {
            if (((s as any).fame ?? 0)?.['pav_slut'] >= 200) {
              scene.text('Igor is hanging out with some of the cool kids as you approach. The others are quick to throw some insults your way, but Igor hesitates. It isn\'t until the rest notice his silence that he finally speaks up to agree with the rest of the group.');
              scene.text('"I\'m surprised the gopniks are finished with her so early. Must have had another cocksleeve waiting for them, or maybe she\'s just gotten too loose."');
              scene.actions([
                { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
              ]);
            } else {
              scene.text('"Hey Igor, what are you doing?" you ask as you see him looking around for someone.');
              scene.text('He just shrugs. "Just hanging out. You?"');
              scene.text('The two of you spend some time chatting. He\'s a little reserved at first, but the more you talk the more he opens up.');
              scene.actions([
                { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
                { label: 'Ask him to dance', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big4.jpg');
    scene.text('"Would you like to dance?" you ask with a smile.');
    scene.text('He hesitates for a moment before nodding. "Yeah, sure."');
    scene.text('The two of you then head off onto the dance floor together.');
    scene.actions([
      { label: 'Go dancing', goto: ['pav_disco_coolkids', 'igor_dance'] },
    ]);
  } },
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

function enterIgorHangOut(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big4.jpg');
  if (((s as any).IgorQW ?? 0)?.['Lover'] > 0) {
    scene.text('You start talking to him about a variety of topics while holding hands. The two of you start discussing the outfits and styles of the various people at the disco, mostly giggling at those with awful fashion sense before he turns to you.');
    scene.text('"Would you like to dance?"');
  } else {
    scene.text('The two of you start discussing the outfits and styles of the various people at the disco, mostly giggling at those with awful fashion sense before he turns to you.');
    scene.text('"Would you like to dance?"');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'No', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big4.jpg');
    scene.text('You shake your head. "Not right now. Maybe some other time."');
    scene.text('He looks a little crestfallen. "Oh okay… Uh yeah, it was silly. I don\'t know why I asked. Anyway, I need to use the restroom."');
    scene.text('Before you can get another word in, he hurries off.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
    { label: 'Yes', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big4.jpg');
    scene.text('You nod your head and smile warmly at him. "Yes, yes I would."');
    scene.text('He lights up and has a huge grin on his face. "Great! I mean it\'s good that you want to…"');
    scene.text('He blushes at his outburt before taking you by the hand and shyly leading you out onto the dance floor.');
    scene.actions([
      { label: 'Go dancing', goto: ['pav_disco_coolkids', 'igor_dance'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterIgorDance(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (5);
  qspCall(s, 'sweat', 'add', 3);
  (s as any).fat = ((s as any).fat ?? 0) - (1);
  qspCall(s, 'exp_gain', 'danc', 1);
  (s as any).frost = 0;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/disco/school_kids/igor_dance.jpg');
  scene.text('You and Igor move out onto the dance floor and start dancing together. He seems to be really enjoying himself, but you can\'t help but notice that he sways his hips around more than guys normally do.');
  if (((s as any).npc_rel ?? 0)?.['A4'] >= 80) {
    qspCall(s, 'arousal', 'foreplay', 10, 'inhibition');
    qspCall(s, 'stat', '');
    if (((s as any).IgorQW ?? 0)?.['Lover'] === 0) {
      scene.text('While the two of you are dancing, you feel Igor\'s hands wander to the small of your back and further down to your ass. He then gives your ass a good squeeze.');
      if (((s as any).DimaRudeQW ?? 0) > 0  &&  (!((s as any).DimaRudeBlock ?? 0))) {
        scene.text('Igor leans in close to your ear. "Dimka told me that you were a fantastic cocksucker. How about we go outside and you show me if he\'s right?"');
        qspCall(s, 'willpower', 'misc', 'resist', 'hard');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.text('You refuse to go outside with Igor. He doesn\'t say a word in response, but looks angry. Dimka, as if he had sensed your refusal, comes over and asks what\'s wrong.');
    scene.text('"Your cocksucker doesn\'t want to suck me off," Igor shrugs.');
    scene.text('Dimka frowns at you. "He\'s my best friend. When he asks you to blow him, you do it as if it was me who asked!"');
    scene.text('He grabs your arm and Igor, encouraged by Dimka\'s action, takes the other, and the two of them lead you outside.');
    qspCall(st, 'pav_discoev1', 'igor_dima_disco_bj');
  } },
          ]);
        }
        scene.actions([
          { label: 'Go outside with him', handler: (st: GameState) => {
    scene.text('You nod at him and walk out of the disco with him, slipping around a corner to have a little privacy.');
    scene.text('Once you feel you\'ve found a spot that\'s secluded enough, Igor gives you a hungry kiss and lets his hands roam all over you, groping anything he can reach before you hear the sound of a zipper and feel Igor push you down - you\'re too confused to even think about resisting.');
    qspCall(st, 'pav_discoev1', 'igor_disco_bj');
  } },
        ]);
      } else {
        if (((s as any).npc_rel ?? 0)?.['A1'] === 0  ||  ((s as any).dimaRevenge ?? 0) > 0) {
          scene.text('"Dimka told me that you dumped him. I get it, he can be a real asshole sometime," Igor whispers in your ear.');
          scene.text('He pauses for a second. "Want to go outside and get some air?"');
          scene.text('You feel that you could use some fresh air and agree.');
        } else {
          // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, let''s go outside and get some fresh air," he suggests.
          scene.text(`"Hey ${((s as any).pcs_nickname ?? '')}, let's go outside and get some fresh air," he suggests.`);
        }
        qspCall(s, 'pav_discoev1', 'girlfriend_ask');
      }
    } else {
      if (((s as any).IgorQW ?? 0)?.['Domina'] === 0) {
        // TODO-QSP: dynamic text: "I love you so much, <<$pcs_nickname>>. Come with me," he whispers in your ear.
        scene.text(`"I love you so much, ${((s as any).pcs_nickname ?? '')}. Come with me," he whispers in your ear.`);
        scene.actions([
          { label: 'Go with him', goto: ['igorsex', 'din_sex'] },
        ]);
      } else {
        scene.text('"Mistress, I love you so much. Come with me," he whispers in your ear.');
        scene.actions([
          { label: 'Go with him', handler: (st: GameState) => {
    if (((st as any).mc_inventory ?? 0)?.['strapon'] >= 1) {
      qspGoto(st, 'igorsex', 'strap on');
    } else {
      qspGoto(st, 'igorsex', 'din_sex');
    }
  } },
        ]);
      }
    }
  }
  if (((s as any).hour ?? 0) >= 20) {
    scene.actions([
      { label: 'Keep dancing', goto: ['pav_disco_coolkids', 'igor_dance'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
  ]);
  scene.build();
}

function enterBella(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A22', 'like', 1, 'pav_disco');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big22.jpg');
  scene.text('You see Bella hanging out with the other cool kids.');
  if (((s as any).grupTipe ?? 0) === 5) {
    scene.text('When you get near her, she glances at some of the other cool kids and then back to you. "Go bother someone else."');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } else {
    if (((s as any).npc_rel ?? 0)?.['A22'] >= 50  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 200) {
      if (((s as any).grupTipe ?? 0) === 1) {
        scene.text('"You know, you should come and hang out with me and my friends." Bella says smiling.');
        scene.text('"You really mean that?" you ask as your eyes widen. "You think I\'ll fit in with them?"');
        scene.text('Bella nods. "No doubt! You\'ll have no issues fitting in. I\'ll be seeing you around and we can plan something, no?"');
      } else {
        scene.text('"Now that we\'ve established that you\'re pretty mature and cool, you should come and hang with my friends." Bella says with a smile.');
        scene.text('"You really mean that?" you reply as your eyes widen.');
        scene.text('Bella nods. "Of course, I don\'t joke around. I\'ll be seeing you around and we can plan something, no?"');
      }
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      ]);
    } else {
      if (((s as any).npc_rel ?? 0)?.['A22'] <= 20  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 200) {
        if (((s as any).grupTipe ?? 0) === 1) {
          // TODO-QSP: dynamic text: "What do you want now <<$pcs_nickname>>? What can you possibly want from me?" Be...
          scene.text(`"What do you want now ${((s as any).pcs_nickname ?? '')}? What can you possibly want from me?" Bella moans as she rolls her eyes.`);
          scene.text('"I was thinking about asking yo…" you start.');
          scene.text('Bella begins to mockingly laugh. "Don\'t be silly! Like I would give advice to someone younger…"');
        } else {
          scene.text('"What do you want?" Bella arrogantly looks at you as you approach her.');
          scene.text('"I just wanted to ask you about this store in the city. I heard…"');
          scene.text('Before you\'re able to continue she cuts you off, looks at her pedicure and, with a sigh, replies. "Listen, the city is not for children like you. You\'re better off buying clothes like the rest of your classmates at the G&M store here in Pavlovsk."');
        }
        scene.actions([
          { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        ]);
      } else {
        if (((s as any).fame ?? 0)?.['pav_slut'] >= 200) {
          scene.text('"I heard some rumors that you\'re interested in older guys? Is it true?" Bella asks.');
          scene.text('You stand in silence as she continues.');
          scene.text('"Well I\'ve told some of my older male friends about you and they would love to meet you," she winks.');
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
          ]);
        } else {
          // TODO-QSP: dynamic text: "Make it quick <<$pcs_nickname>>! I don''t really have the time to stand here an...
          scene.text(`"Make it quick ${((s as any).pcs_nickname ?? '')}! I don't really have the time to stand here and chat…" Bella hurries you on.`);
          scene.text('"I was thinking we could maybe hang after school one day?" you cheerfully ask.');
          scene.text('"You and I?" she looks around. "Is this a prank? Where have you hidden the cameras?" She keeps on looking around. "Don\'t be silly! Run along now, kid." She scoffs you aside.');
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

function enterVicky(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A15', 'like', 1, 'pav_disco');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big15.jpg');
  scene.text('You see Vicky hanging out with the other cool kids.');
  if (((s as any).grupTipe ?? 0) === 5) {
    scene.text('When you get near her, she glances at some of the other cool kids and then back at you. "Go bother someone else."');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } else {
    if (((s as any).npc_rel ?? 0)?.['A15'] >= 50  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 200) {
      if (((s as any).grupTipe ?? 0) === 1) {
        // TODO-QSP: dynamic text: As soon as Vicky sees you, she pulls you into a tight hug. "<<$pcs_nickname>>, m...
        scene.text(`As soon as Vicky sees you, she pulls you into a tight hug. "${((s as any).pcs_nickname ?? '')}, my third favorite person!"`);
        scene.text('"Wait, third?! I get Kat being second, but who\'s first?" You pretend to be outraged and she plays along.');
        scene.text('"Oh honey. You… you didn\'t know? I don\'t know how to tell you this but Vanya is my number one!"');
        scene.text('You pout and cross your arms. "That\'s not fair! I can\'t fuck my way to the number one spot like he can!"');
        scene.text('The two of you burst into laughter before spending some time joking back and forth.');
      } else {
        scene.text('"I\'ve been thinking of going all in and dying my hair to match the color of the outfits I wear. What do you think?" Vicky asks as she runs her fingers through her red hair.');
        scene.text('You can\'t keep from laughing at her odd question. "Uhmm, you wear a different color every day. Do you know what that will do to your hair after a week?"');
        scene.text('Vicky is silent for a while before shrugging. "No?"');
        scene.text('"Bald. You\'ll definitely be bald after a week of dying your hair!"');
        scene.text('The two of you then spend some joking back and forth.');
      }
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      ]);
    } else {
      if (((s as any).npc_rel ?? 0)?.['A15'] <= 20  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 200) {
        if (((s as any).grupTipe ?? 0) === 1) {
          scene.text('"I know we\'re both \'popular\' which means we should be friends, but I would honestly rather have people think I let Lera\'s creepy brother finger me than spend another minute talking to you!" Vicky throws her hands up and shrugs.');
        } else {
          // TODO-QSP: dynamic text: "Do you hear that <<$pcs_nickname>>?" Vicky asks, interrupting you mid sentence.
          scene.text(`"Do you hear that ${((s as any).pcs_nickname ?? '')}?" Vicky asks, interrupting you mid sentence.`);
          scene.text('You listen carefully but don\'t hear anything unusual.');
          scene.text('"Listen carefully… that\'s the sound of me running away from this conversation. See ya!"');
          scene.text('Before you can respond, she takes off across the room.');
        }
        scene.actions([
          { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        ]);
      } else {
        if (((s as any).fame ?? 0)?.['pav_slut'] >= 200) {
          scene.text('"Well, well, well, look who\'s taken a break from sucking cocks!" Vicky announces with a grin. She gives your ass a quick slap and you let out a surprised squeak.');
          scene.text('"Oh don\'t act so innocent! we all know you\'ve had that ass broken in plenty of times. Or maybe you\'re just sore from your last go?"');
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
          ]);
        } else {
          scene.text('It can be hard to follow Vicky as she keeps up a lively conversation, jumping from one topic to another, but you don\'t really mind and find her upbeat attitude intoxicating.');
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

function enterInna(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A17', 'like', 1, 'pav_disco');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big17.jpg');
  scene.text('You see Irina hanging out with the other cool kids.');
  if (((s as any).grupTipe ?? 0) === 5) {
    scene.text('When you get near her, she glances at some of the other cool kids and then back at you. "Go bother someone else."');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } else {
    if (((s as any).npc_rel ?? 0)?.['A17'] >= 50  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 200) {
      if (((s as any).grupTipe ?? 0) === 1) {
        scene.text('"Liza told me that some girl overheard this group of girls talking at lunch that they heard Stasya talking shit about me!" Irina exclaims and the both of you let out a little gasp, even though it really isn\'t much of a surprise.');
        scene.text('"What did she say?"');
        scene.text('"Oh I wouldn\'t dare repeat the things she said. It would just leave a bad taste in my mouth."');
        scene.text('She shakes her head in disappointment, but you notice the hint of a smirk on her lips. "Jealousy is such an ugly look…"');
      } else {
        scene.text('"I need to get my nails done, but I won\'t have time with all this stupid homework!" Irina whines with a pout.');
        scene.text('"I\'m sure Artem or Petka would be more than happy to help you out…" you gently remind her.');
        // TODO-QSP: dynamic text: A sly smile spreads across her face. "You''re totally right, <<$pcs_nickname>>! ...
        scene.text(`A sly smile spreads across her face. "You're totally right, ${((s as any).pcs_nickname ?? '')}! You know me so well."`);
      }
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      ]);
    } else {
      if (((s as any).npc_rel ?? 0)?.['A17'] <= 20  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 200) {
        if (((s as any).grupTipe ?? 0) === 1) {
          scene.text('Irina listens to you talk with a tired and bored expression. "Oh god, I think I\'d rather talk to Lesco…" she yawns before brushing you off. "I\'ve heard enough. Go bother Stasya."');
        } else {
          scene.text('"Hey Irina-" you start to say before she cuts you off.');
          scene.text('"If you ever try talking to me again, I\'ll make sure the second hand blow up doll Lesco and Petia use in their threesome is more popular than you! God, I can\'t have even five minutes to myself without some loser trying to talk to me!" she mumbles in an angry tone as she walks away.');
        }
        scene.actions([
          { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        ]);
      } else {
        if (((s as any).fame ?? 0)?.['pav_slut'] >= 200) {
          scene.text('"I would rather have Petia staring at my tits until he creams himself than to talk to you, skank!" Irina hisses with disgust.');
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
          ]);
        } else {
          scene.text('It\'s easy to please Irina since she likes to talk about herself. So long as you ask her about herself and don\'t interrupt her, she\'s more than happy to talk with you.');
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

function enterKatja(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A14', 'like', 1, 'pav_disco');
  qspCall(s, 'stat', '');
  if ((Math.floor(Math.random() * 4) + 1) <= 3) {
    scene.img('images/characters/pavlovsk/school/girl/katja/katja_dance1_1.jpg');
    scene.text('You see Katja out on the dance floor dancing by herself.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Go out on the dance floor', handler: (st: GameState) => {
    if (((st as any).npc_rel ?? 0)?.['A25'] >= 50  &&  ((st as any).fame ?? 0)?.['pav_slut'] < 200) {
      if (((st as any).katjaQW ?? 0)?.['QWstage'] > 2) {
        ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (5*(1 + (((st as any).npc_had_sex ?? {})?.['A14'] ?? 0)));
      }
      scene.img('images/characters/pavlovsk/school/girl/katja/katja_dance.jpg');
      scene.text('Her face lights up when she sees you and motions for you to come and dance with her.');
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        { label: 'Dance with her', goto: ['pav_disco_coolkids', 'katja_dance'] },
      ]);
    } else {
      if ((((st as any).npc_rel ?? 0)?.['A25'] <= 20  ||  ((st as any).grupTipe ?? 0) === 5)  &&  ((st as any).katjaQW ?? 0)?.['QWstage'] === 0) {
        scene.img('images/characters/pavlovsk/school/girl/katja/katja_dance1_1.jpg');
        scene.text('Her face stiffens when she sees you and she moves away from the dance floor.');
        scene.actions([
          { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        ]);
      } else {
        if (((st as any).fame ?? 0)?.['pav_slut'] >= 200) {
          if (((st as any).katjaQW ?? 0)?.['QWstage'] > 2  &&  ((st as any).fame ?? 0)?.['pav_slut'] < ((st as any).katjaQW ?? 0)?.['slut'] + 150) {
            scene.img('images/characters/pavlovsk/school/girl/katja/katja_dance.jpg');
            if (((st as any).katjaQW ?? 0)?.['QWstage'] > 2) {
              ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (5*(1 + (((st as any).npc_had_sex ?? {})?.['A14'] ?? 0)));
            }
            // TODO-QSP: dynamic text: She smiles when she sees you approaching, but looks around to see how everyone r...
            scene.text(`She smiles when she sees you approaching, but looks around to see how everyone reacts. "I don't know ${((st as any).pcs_nickname ?? '')}… The others are looking! This might not be a good idea…"`);
            scene.actions([
              { label: 'Dance with her anyway', goto: ['pav_disco_coolkids', 'katja_dance'] },
            ]);
          } else {
            scene.img('images/characters/pavlovsk/school/girl/katja/katja_dance.jpg');
            // TODO-QSP: dynamic text: Her smile fades when she sees you approaching and she looks around to see how ev...
            scene.text(`Her smile fades when she sees you approaching and she looks around to see how everyone reacts. "We shouldn't be seen together in public ${((st as any).pcs_nickname ?? '')}. The others are calling you a huge slut. Until you get these rumors to go away, we should only see each other in private."`);
            scene.text('She then turns and walk away from you, leaving the dance floor.');
          }
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
          ]);
        } else {
          scene.img('images/characters/pavlovsk/school/girl/katja/katja_dance.jpg');
          if (((st as any).katjaQW ?? 0)?.['QWstage'] > 2) {
            ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (5*(1 + (((st as any).npc_had_sex ?? {})?.['A14'] ?? 0)));
          }
          scene.text('She smiles and doesn\'t seem to mind dancing with you.');
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
            { label: 'Dance with her', goto: ['pav_disco_coolkids', 'katja_dance'] },
          ]);
        }
      }
    }
  } },
    ]);
  } else {
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('Katja is sitting with the other cool kids. She is talking quietly with the girl next to her, and seems to be enjoying herself.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Hang out with her', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    if (((st as any).katjaQW ?? 0)?.['QWstage'] > 2) {
      if (((st as any).katjaQW ?? 0)?.['horny'] < 20) {
        scene.text('Katja looks calm and stoic.');
      } else {
        if (((st as any).katjaQW ?? 0)?.['horny'] < 40) {
          scene.text('Katja looks at you with a naughty twinkle in her eyes.');
        } else {
          if (((st as any).katjaQW ?? 0)?.['horny'] < 60) {
            scene.text('Katja looks at you, a faint blush on her cheeks as she smiles at you mischievously.');
          } else {
            if (((st as any).katjaQW ?? 0)?.['horny'] < 80) {
              scene.text('Katja is blushing fairly obviously and looks at you longingly.');
            } else {
              scene.text('Katja\'s face is flushed bright red and her chest is heaving from her heavy breathing. She\'s idly rubbing her thighs against one another.');
            }
          }
        }
      }
    }
    if (((st as any).grupTipe ?? 0) === 5) {
      scene.text('Katja sees you approaching and turns to one of the boys in the group. "What are you doing here?" he asks in a slightly threatening tone. It\'s clear that you\'re not welcome.');
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      ]);
    } else {
      if (((st as any).npc_rel ?? 0)?.['A25'] >= 50  &&  ((st as any).fame ?? 0)?.['pav_slut'] < 200) {
        if (((st as any).katjaQW ?? 0)?.['know_katja_uni'] === 0  &&  ((st as any).gschoolVars ?? 0)?.['school_diploma'] === 1  &&  (((st as any).month ?? 0) > 6  ||  (((st as any).month ?? 0) === 6  &&  ((st as any).day ?? 0) > 15))) {
          qspGoto(st, 'KatjaHomeTalk', 'katja_uni_tell');
        } else {
          // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, are you having fun?" she asks and you nod in response.
          scene.text(`"Hey ${((st as any).pcs_nickname ?? '')}, are you having fun?" she asks and you nod in response.`);
        }
        if (((st as any).katjaQW ?? 0)?.['QWstage'] > 2) {
          ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (5*(1 + (((st as any).npc_had_sex ?? {})?.['A14'] ?? 0)));
        }
        scene.text('"Have you seen the dress the girl over there is wearing?" she asks while pointing at a tall blonde you haven\'t seen before, who is wearing an elegant short dress with a low neckline and open back.');
        // TODO-QSP: dynamic text: '"I love that dress '+iif(katjaQW['slut'] < 60, 'but I''m not sure I''d be brave...
        scene.text('"I love that dress ' + ((((st as any).katjaQW ?? 0)?.['slut'] < 60) ? ('but I\'m not sure I\'d be brave enough to wear it here') : ('I wish I had a sexy dress like that')) + '." she comments and you agree.');
        scene.text('The conversation continues with Katja pointing out dresses she likes or girls whose make-up she thinks is well done.');
        if (((st as any).katjaQW ?? 0)?.['QWstage'] > 2  &&  ((st as any).katjaQW ?? 0)?.['knows_masturbation'] + ((st as any).katjaQW ?? 0)?.['knows_BJ'] + ((st as any).katjaQW ?? 0)?.['knows_sex'] + ((st as any).katjaQW ?? 0)?.['knows_anal']+ ((st as any).katjaQW ?? 0)?.['knows_cuni'] >= 2) {
          scene.actions([
            { label: 'Kiss her', goto: ['pav_disco_coolkids', 'katja_kiss'] },
          ]);
        }
        if (((st as any).university ?? 0)?.['student'] === 1  &&  ((st as any).katjaQW ?? 0)?.['know_going_to_teaching_degree'] === 0  &&  ((st as any).university ?? 0)?.['enrolled_in'] === 'teaching_studies') {
          scene.actions([
            { label: 'Tell Katja that you are going to the university', goto: ['KatjaHomeTalk', 'uni_tell'] },
          ]);
        }
        scene.actions([
          { label: 'Ask if she wants to dance', goto: ['pav_disco_coolkids', 'katja_dance_ask'] },
          { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        ]);
      } else {
        if (((st as any).npc_rel ?? 0)?.['A25'] <= 20) {
          scene.text('Katja freezes when she sees you approaching before quickly turning back to the girl she was talking to and ignoring anything you have to say.');
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
          ]);
        } else {
          if (((st as any).fame ?? 0)?.['pav_slut'] >= 200) {
            if (((st as any).katjaQW ?? 0)?.['QWstage'] > 2  &&  ((st as any).fame ?? 0)?.['pav_slut'] < ((st as any).katjaQW ?? 0)?.['slut'] + 150) {
              if (((st as any).katjaQW ?? 0)?.['QWstage'] > 2) {
                ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (5*(1 + (((st as any).npc_had_sex ?? {})?.['A14'] ?? 0)));
              }
              scene.text('Katja notices you approaching and gets up to intercept you before you reach the group. "You shouldn\'t be coming over here!" she says in a whispering voice so the others can\'t hear her.');
              scene.text('"Your reputation has gotten so bad that we can\'t meet in public." she continues. "It\'s not because I don\'t want be with you, but we need to do it privately. The others will start gossiping if we…" She trails off as you gently stroke her chin and look deep into her eyes.');
              if (((st as any).katjaQW ?? 0)?.['knows_masturbation'] + ((st as any).katjaQW ?? 0)?.['knows_BJ'] + ((st as any).katjaQW ?? 0)?.['knows_sex'] + ((st as any).katjaQW ?? 0)?.['knows_anal']+ ((st as any).katjaQW ?? 0)?.['knows_cuni'] >= 2) {
                scene.actions([
                  { label: 'Kiss her', goto: ['pav_disco_coolkids', 'katja_kiss'] },
                ]);
              }
              scene.actions([
                { label: 'Ask if she wants to dance', goto: ['pav_disco_coolkids', 'katja_dance_ask'] },
              ]);
            } else {
              if (((st as any).npc_rel ?? 0)?.['A25'] >= 50  ||  ((st as any).katjaQW ?? 0)?.['QWstage'] > 0) {
                scene.text('Katja notices you approaching and gets up to intercept you before you reach the group. "You shouldn\'t be coming here!" she says in a whispering voice so the others can\'t hear her.');
                scene.text('"Your reputation has gotten so bad that we can\'t be seen together in public. Until you clean up your reputation, try not to speak to me while others are watching." Before you can reply, she turns and walks back to the group. It\'s clear that she doesn\'t want you to follow her.');
              } else {
                scene.text('Katja sees you approaching and turns to one of the boys in the group. "What are you doing here?" he asks in a slightly threatening tone. It\'s clear that you\'re not welcome.');
              }
            }
            scene.actions([
              { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
            ]);
          } else {
            if (((st as any).katjaQW ?? 0)?.['know_katja_uni'] === 0  &&  ((st as any).gschoolVars ?? 0)?.['school_diploma'] === 1  &&  (((st as any).month ?? 0) > 6  ||  (((st as any).month ?? 0) === 6  &&  ((st as any).day ?? 0) > 15))) {
              qspGoto(st, 'KatjaHomeTalk', 'katja_uni_tell');
            } else {
              // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, are you having fun?" she asks and you nod in response.
              scene.text(`"Hey ${((st as any).pcs_nickname ?? '')}, are you having fun?" she asks and you nod in response.`);
            }
            if (((st as any).katjaQW ?? 0)?.['QWstage'] > 2) {
              ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (5*(1 + (((st as any).npc_had_sex ?? {})?.['A14'] ?? 0)));
            }
            scene.text('"Have you seen the dress the girl over there is wearing?" she asks while pointing at a tall blonde you haven\'t seen before, who is wearing an elegant short dress with a low neckline and open back.');
            // TODO-QSP: dynamic text: '"I love that dress '+iif(katjaQW['slut'] < 60, 'but I''m not sure I''d be brave...
            scene.text('"I love that dress ' + ((((st as any).katjaQW ?? 0)?.['slut'] < 60) ? ('but I\'m not sure I\'d be brave enough to wear it here') : ('I wish I had a sexy dress like that')) + '." she comments and you agree, but when you turn back to her, she\'s already discussing another dress with the girl next to her.');
            scene.text('The conversation continues with Katja pointing out dresses she likes or girls whose make-up she thinks is well done.');
            if (((st as any).university ?? 0)?.['student'] === 1  &&  ((st as any).katjaQW ?? 0)?.['know_going_to_teaching_degree'] === 0  &&  ((st as any).university ?? 0)?.['enrolled_in'] === 'teaching_studies') {
              scene.actions([
                { label: 'Tell Katja that you are going to the university', goto: ['KatjaHomeTalk', 'uni_tell'] },
              ]);
            }
            scene.actions([
              { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
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

function enterKatjaKiss(s: GameState, scene: SceneBuilder): void {
  if (((s as any).katjaQW ?? 0)?.['horny'] < 30) {
    scene.text(`<center><b>${(((s as any).npc_firstname ?? 0)?.['A14'] ?? '')} ${(((s as any).npc_lastname ?? 0)?.['A14'] ?? '')}</b></center>`);
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('You lean in to kiss Katja. She pulls away from you as you try and kiss her, looking around to see if anyone seen you. "Not here and not now."');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } else {
    scene.img('images/characters/pavlovsk/school/girl/katja/katja_disco1.jpg');
    scene.text('You slowly lean in towards Katja to kiss her. Unable to resist, Katja closes her eyes, slowly opens her mouth and leans in to meet your kiss.');
    qspCall(s, 'katjaEvDin', 'kiss_events');
  }
  // TODO-QSP: end
  scene.build();
}

function enterKatjaDanceAsk(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  scene.text('"Do you want to dance?" you ask and she smiles. "Of course! I would love to dance with you."');
  if (((s as any).katjaQW ?? 0)?.['QWstage'] > 1  &&  ((s as any).pcs_makeup ?? 0) <= 1) {
    // TODO-QSP: dynamic text: Before she gets up, she grabs your hand and stops you. "<<$pcs_nickname>>, you s...
    scene.text(`Before she gets up, she grabs your hand and stops you. "${((s as any).pcs_nickname ?? '')}, you should really let me put some make-up on before we go out there."`);
    scene.actions([
      { label: 'Let her put make-up on you', handler: (st: GameState) => {
    (st as any).pcs_hairbsh = 1;
    qspCall(st, 'stat', '');
    scene.text(`<center><b>${(((st as any).npc_firstname ?? 0)?.['A14'] ?? '')} ${(((st as any).npc_lastname ?? 0)?.['A14'] ?? '')}</b></center>`);
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('Katja happily grins as she quickly straightens your hair. "What do you want? A light touch-up, some normal make-up or shall I just shovel it on?"');
    scene.actions([
      { label: 'Light touch-up', handler: (st: GameState) => {
    (st as any).pcs_makeup = 2;
    scene.text('Katja subtly applies some neutral tones, with a light application of makeup to bring out your natural beauty.');
    if (((st as any).katjaQW ?? 0)?.['QWstage'] > 2) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (5*(1 + (((st as any).npc_had_sex ?? {})?.['A14'] ?? 0)));
      scene.text('Katja suddenly becomes aware that she is staring into your eyes and blushes.');
    }
    scene.actions([
      { label: 'Go dancing', goto: ['pav_disco_coolkids', 'katja_dance'] },
    ]);
  } },
      { label: 'Normal make-up', handler: (st: GameState) => {
    (st as any).pcs_makeup = 3;
    scene.text('Katja applies some mildly vibrate tones and colors of makeup to cover your minor imperfections and enhance your best features.');
    if (((st as any).katjaQW ?? 0)?.['QWstage'] > 2) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (5*(1 + (((st as any).npc_had_sex ?? {})?.['A14'] ?? 0)));
      scene.text('Katja suddenly becomes aware that she is staring into your eyes and blushes.');
    }
    scene.actions([
      { label: 'Go dancing', goto: ['pav_disco_coolkids', 'katja_dance'] },
    ]);
  } },
      { label: 'Heavy make-up', handler: (st: GameState) => {
    (st as any).pcs_makeup = 4;
    scene.text('Katja applies some deeper, richer shades of makeup that are thick enough to cover most imperfections while drawing attention to your eyes and lips.');
    if (((st as any).katjaQW ?? 0)?.['QWstage'] > 2) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (5*(1 + (((st as any).npc_had_sex ?? {})?.['A14'] ?? 0)));
      scene.text('Katja suddenly becomes aware that she is staring into your eyes and blushes.');
    }
    scene.actions([
      { label: 'Go dancing', goto: ['pav_disco_coolkids', 'katja_dance'] },
    ]);
  } },
      { label: 'Tell her you don\'t need it', handler: (st: GameState) => {
    scene.text('She looks at you skeptically, but gets up and follows you to the dance floor.');
    scene.actions([
      { label: 'Go dancing', goto: ['pav_disco_coolkids', 'katja_dance'] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).katjaQW ?? 0)?.['QWstage'] > 2) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (5*(1 + (((s as any).npc_had_sex ?? {})?.['A14'] ?? 0)));
    }
    scene.text('She gets up and follows you to the dance floor.');
    scene.actions([
      { label: 'Go dancing', goto: ['pav_disco_coolkids', 'katja_dance'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterKatjaDance(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (5);
  qspCall(s, 'sweat', 'add', 3);
  (s as any).fat = ((s as any).fat ?? 0) - (1);
  qspCall(s, 'exp_gain', 'danc', 1);
  (s as any).frost = 0;
  qspCall(s, 'stat', '');
  if (((s as any).katjaQW ?? 0)?.['horny'] > (Math.floor(Math.random() * 51) + 70)  &&  ((s as any).katjaQW ?? 0)?.['slut'] > 80  &&  ((s as any).katjaQW ?? 0)?.['QWstage'] > 5  &&  ((s as any).katjaQW ?? 0)?.['marcus_pussy'] >= 1  &&  ((s as any).hour ?? 0) > 21  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] < 2) {
    scene.text('<center><b>Disco</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/katja/katja_dance.jpg');
    scene.text('Katja gets closer and closer to you as you dance with each other; at one point she\'s even grinding herself against you. It\'s clear that she\'s getting very aroused.');
    // TODO-QSP: dynamic text: 'She then embraces you and whispers in your ear. '+iif(katjaQW['slut'] > 100, '"...
    scene.text('She then embraces you and whispers in your ear. ' + ((((s as any).katjaQW ?? 0)?.['slut'] > 100) ? ('"I\'m so horny right now! I really need a cock in me."') : ('"I think, you know, having a threesome sounds like a great idea right now."')) + ' She looks surprised that she actually said that out loud.');
    scene.text('"You want to see if Marcus is up for one right now?" you ask, and after a moment of hesitation, she silently nods her head while looking a little embarrassed.');
    scene.actions([
      { label: 'Agree to a threesome with Marcus', goto: ['pav_discoev1', 'katja_marcus_start'] },
      { label: 'You\'re not in the mood', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) - (30);
    scene.text('You tell Katja that you\'re not in the mood for a threesome. She looks extremely frustrated by your refusal, but accepts it and keep dancing.');
    if (((st as any).hour ?? 0) >= 20) {
      scene.actions([
        { label: 'Keep dancing', handler: (st: GameState) => {
    if (((st as any).katjaQW ?? 0)?.['QWstage'] > 2) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (5*(1 + (((st as any).npc_had_sex ?? {})?.['A14'] ?? 0)));
    }
    qspGoto(st, 'pav_disco_coolkids', 'katja_dance');
  } },
      ]);
    }
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).PCloSkirt ?? 0) > 1  &&  ((s as any).katjaQW ?? 0)?.['QWstage'] > 2  &&  ((s as any).katjaQW ?? 0)?.['no_panties_day_disco'] !== ((s as any).daystart ?? 0)) {
      scene.text('<center><b>Disco</b></center>');
      scene.img('images/characters/pavlovsk/school/girl/katja/katja_dance.jpg');
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 2) + 1));
      scene.text('You dance with Katja, attracting views of guys from across the room. When you remember that you aren\'t wearing panties, and your occasional spiraling of your skirt shows that fact off, it helps explain the attention.');
      scene.actions([
        { label: 'Show her you\'re not wearing panties', goto: ['Katja_Tanga', 'dance'] },
      ]);
    } else {
      if (((s as any).katjaQW ?? 0)?.['no_panties_at_disco'] === 1) {
        if (((s as any).pcs_inhib ?? 0) < 40) {
          (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 2) + 1));
        }
        scene.text('<center><b>Disco</b></center>');
        scene.img('images/characters/pavlovsk/school/girl/katja/katja_dance1_2.jpg');
        scene.text('You dance with Katja, attracting views of guys from across the room.');
        if (((s as any).hour ?? 0) >= 20) {
          scene.actions([
            { label: 'Keep dancing', handler: (st: GameState) => {
    if (((st as any).katjaQW ?? 0)?.['QWstage'] > 2) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (5*(1 + (((st as any).npc_had_sex ?? {})?.['A14'] ?? 0)));
    }
    qspGoto(st, 'pav_disco_coolkids', 'katja_dance');
  } },
          ]);
        }
        scene.actions([
          { label: 'Expose Katja', handler: (st: GameState) => {
    qspCall(st, 'npcStat', 'A14');
    (st as any).dancerand = (Math.floor(Math.random() * 5) + 1);
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (10);
    if (((st as any).dancerand ?? 0) === 1) {
      scene.text('<center><b>Disco</b></center>');
      scene.img('images/characters/pavlovsk/school/girl/katja/katja_dance2_2.jpg');
      (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 2) + 1));
      scene.text('During the dance, you decide to fool around and embrace Katja, pulling her top aside a little to show off a nipple. This results in an approving roar from the crowd and an embarrassed squeak from Katja.');
      qspCall(st, 'arousal', 'foreplay', (-5), 'lesbian');
      qspCall(st, 'stat', '');
      scene.actions([
        { label: 'Dance on', handler: (st: GameState) => {
    scene.text('<center><b>Disco</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/katja/katja_dance2_1.jpg');
    scene.text('One of the guys dancing moves in closer. Unable to stand watching the two of you dancing and touching each other, he slides his hand under her skirt.');
    scene.actions([
      { label: 'Stick out tongue', handler: (st: GameState) => {
    scene.text('<center><b>Disco</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/katja/katja_dance1_3.jpg');
    scene.text('Rebuffing the guy, you and Katja push him away and turn to the crowd of guys around you. Katja hugs you and sticks her tongue out at the guys. The rebuffed guy looks around and thinks better of it, getting lost among the other dancers.');
    qspCall(st, 'arousal', 'end');
    if (((st as any).hour ?? 0) >= 20) {
      scene.actions([
        { label: 'Keep dancing', handler: (st: GameState) => {
    if (((st as any).katjaQW ?? 0)?.['QWstage'] > 2) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (5*(1 + (((st as any).npc_had_sex ?? {})?.['A14'] ?? 0)));
    }
    qspGoto(st, 'pav_disco_coolkids', 'katja_dance');
  } },
      ]);
    }
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      if (((st as any).dancerand ?? 0) === 2) {
        scene.text('<center><b>Disco</b></center>');
        scene.img('images/characters/pavlovsk/school/girl/katja/katja_dance3.jpg');
        (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 2) + 1));
        scene.text('Dancing with Katja, you can\'t control yourself. You pull her close to you, put your hands on her breasts and bury your face in her cleavage. Katja moans slightly at your actions while the boys gather around and shout encouragements.');
        qspCall(st, 'arousal', 'foreplay', (-5), 'lesbian');
        qspCall(st, 'stat', '');
      } else {
        if (((st as any).dancerand ?? 0) === 3) {
          scene.text('<center><b>Disco</b></center>');
          scene.img('images/characters/pavlovsk/school/girl/katja/katja_dance4.jpg');
          (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 2) + 1));
          scene.text('Dancing with Katya and moving quite actively, you don\'t notice your breasts fall out, exposing your nipples. However, the guys do and happily point it out to each other.');
          qspCall(st, 'arousal', 'flashlite', (-5));
          qspCall(st, 'stat', '');
        } else {
          if (((st as any).dancerand ?? 0) === 4) {
            scene.text('<center><b>Disco</b></center>');
            scene.img('images/characters/pavlovsk/school/girl/katja/katja_dance5.jpg');
            (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 2) + 1));
            scene.text('During the dance, you turn to face Katja and you both dance close together. You lean in and give her a passionate kiss, hearing the cheering of the guys. You barely pay attention to them as you lose yourself in the moment.');
            qspCall(st, 'arousal', 'kiss', (-5), 'lesbian');
            qspCall(st, 'stat', '');
          } else {
            if (((st as any).dancerand ?? 0) === 5) {
              scene.text('<center><b>Disco</b></center>');
              scene.img('images/characters/pavlovsk/school/girl/katja/katja_dance6.mp4');
              (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 2) + 1));
              scene.text('You dance with Katja, paying little attention to what\'s happening around you when one of the guys around you reaches out and pulls down your top, exposing your breasts for everyone to see. Continuing to dance without interruption, you pull your top back up to the disgruntled cries of the guys around you.');
              qspCall(st, 'arousal', 'flashlite', (-5));
              qspCall(st, 'stat', '');
            }
          }
        }
      }
    }
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Stick out your tongue', handler: (st: GameState) => {
    scene.text('<center><b>Disco</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/katja/katja_dance1_1.jpg');
    scene.text('Looking at the crowd of guys around you, you hug Katja and stick out your tongue at them, letting them know they can look at you all they want, but that\'s all they\'re going to get.');
    qspCall(st, 'arousal', 'end');
    if (((st as any).hour ?? 0) >= 20) {
      scene.actions([
        { label: 'Keep dancing', handler: (st: GameState) => {
    if (((st as any).katjaQW ?? 0)?.['QWstage'] > 2) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (5*(1 + (((st as any).npc_had_sex ?? {})?.['A14'] ?? 0)));
    }
    qspGoto(st, 'pav_disco_coolkids', 'katja_dance');
  } },
      ]);
    }
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
    ]);
  } },
          { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        ]);
      } else {
        scene.text('<center><b>Disco</b></center>');
        scene.img('images/characters/pavlovsk/school/girl/katja/katja_dance1_1.jpg');
        scene.text('You dance with Katja, attracting views of guys from across the room. She seems to be really enjoying herself, laughing and dancing with lots of energy and doesn\'t seem to care what anyone thinks. She just wants to have fun.');
        if (((s as any).hour ?? 0) >= 20) {
          scene.actions([
            { label: 'Keep dancing', handler: (st: GameState) => {
    if (((st as any).katjaQW ?? 0)?.['QWstage'] > 2) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (5*(1 + (((st as any).npc_had_sex ?? {})?.['A14'] ?? 0)));
    }
    qspGoto(st, 'pav_disco_coolkids', 'katja_dance');
  } },
          ]);
        }
        scene.actions([
          { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterKatjaWalkhome(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['drunk_help'] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/disco/school_kids/walkhome_katja.jpg');
  if (qspFunc(s, 'homes_properties', 'has_access', 'parents_home')) {
    scene.text('Katja takes you by the arm and helps you get home.');
    scene.actions([
      { label: 'Go home', goto: ['korrPar', ''] },
    ]);
  } else {
    scene.text('Katja takes you by the hand and helps you get back to the apartment complex.');
    scene.actions([
      { label: 'Continue', goto: ['pav_complex', 'start'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterLizaveta(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A140', 'like', 1, 'pav_disco');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big140.jpg');
  scene.text('You see Lizaveta hanging out with the other cool kids.');
  if (((s as any).grupTipe ?? 0) === 5) {
    scene.text('When you get near her, she glances at some of the other cool kids and then back to you. "Go bother someone else."');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } else {
    if (((s as any).npc_rel ?? 0)?.['A140'] >= 50  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 200) {
      if (((s as any).grupTipe ?? 0) === 1) {
        scene.text('The perks of being a close friend of Lizaveta go beyond just running in the same social circle, as she tells you some gossip that no one else should know about.');
        scene.text('"I heard from a little red bird that one time while Vicky was out partying at the community center, she couldn\'t hold it in, so she went to go do her business behind a bush, buuuut…" Lizaveta drags it out to build a little suspense. "She was so drunk that she ended up falling into her own piss! Luckily Kat-- her friend, I mean, was there to take her home before anyone saw!"');
      } else {
        scene.text('You would think that being close friends with Lizaveta would mean getting some exclusive gossip from her, but she keeps her lips sealed. "I know everyone likes to say I can\'t keep my mouth shut, but even I need to have some secrets of my own," she winks.');
        scene.text('"Oh come on!" you plead. "You gotta give me a little bit of something…"');
        scene.text('With a dramatic sigh, Lizaveta caves a little bit and shares some harmless, yet juicy gossip you hadn\'t heard about until now.');
      }
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      ]);
    } else {
      if (((s as any).npc_rel ?? 0)?.['A140'] <= 20  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 200) {
        if (((s as any).grupTipe ?? 0) === 1) {
          scene.text('"You know, you really shouldn\'t shit where you sleep," Lizaveta says while shaking her head disapprovingly.');
          scene.text('"What? What\'s that supposed to mean?" you ask, but she just sighs.');
          scene.text('"You\'re dumber than I thought…" she mutters.');
          scene.text('You try to get an answer out of her, but she dances around your questions while the two of you make small talk.');
        } else {
          scene.text('The conversation is stale and lifeless as Lizaveta taps away at her phone while you talk, only managing an occasional "Yeah" or "Uh-huh".');
        }
        scene.actions([
          { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        ]);
      } else {
        if (((s as any).fame ?? 0)?.['pav_slut'] >= 200) {
          scene.text('"The current rumor is that you\'ve ridden well over 100 dicks!" Lizaveta exclaims with a cruel laugh. "There\'s even a bet that you\'ll have sucked or fucked <i>1000</i> dicks by the end of the year! Want to know if I\'m betting against or for you?" she taunts before dismissing it as a joke, but you\'re not sure if she\'s telling the truth…');
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
          ]);
        } else {
          scene.text('You spend some time talking with Lizaveta, and for a while you manage to avoid talking about anything gossipy, but considering she\'s the queen of it, eventually it devolves into some "He said, she said."');
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

function enterSonia(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A25', 'like', 1, 'pav_disco');
  qspCall(s, 'stat', '');
  if ((Math.floor(Math.random() * 4) + 1) <= 3) {
    scene.img('images/locations/pavlovsk/community/disco/school_kids/sonia_dance.jpg');
    scene.text('You see Sonia out on the dance floor, cutting loose and having fun. She\'s a pretty decent dancer, but she doesn\'t seem to care. She just wants to have fun.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Go out on the dance floor', handler: (st: GameState) => {
    if (((st as any).npc_rel ?? 0)?.['A25'] >= 50  &&  ((st as any).fame ?? 0)?.['pav_slut'] < 250) {
      scene.img('images/locations/pavlovsk/community/disco/school_kids/sonia_dance.jpg');
      scene.text('She smiles at you as she sees you coming out onto the dance floor and waves you over, wanting to dance with you.');
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        { label: 'Dance with her', goto: ['pav_disco_coolkids', 'sonia_dance'] },
      ]);
    } else {
      if (((st as any).npc_rel ?? 0)?.['A25'] <= 20) {
        scene.img('images/locations/pavlovsk/community/disco/school_kids/sonia_boy_dance.jpg');
        scene.text('She gives you a tight lipped smile, then turns and starts dancing with a boy next to her.');
        scene.actions([
          { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        ]);
      } else {
        if (((st as any).fame ?? 0)?.['pav_slut'] >= 250) {
          scene.img('images/locations/pavlovsk/community/disco/school_kids/sonia_dance.jpg');
          scene.text('She smiles at you as she sees you coming out onto the dance floor. She doesn\'t move away, but also doesn\'t encourage you to dance with her.');
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
            { label: 'Dance with her', goto: ['pav_disco_coolkids', 'sonia_dance'] },
          ]);
        } else {
          scene.img('images/locations/pavlovsk/community/disco/school_kids/sonia_dance.jpg');
          scene.text('She smiles at you and waves as you she sees you coming out onto the dance floor.');
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
            { label: 'Dance with her', goto: ['pav_disco_coolkids', 'sonia_dance'] },
          ]);
        }
      }
    }
  } },
    ]);
  } else {
    scene.img('images/characters/shared/headshots_main/big25.jpg');
    scene.text('Sonia is sitting with the other cool kids. She\'s drinking something you don\'t recognize and has a huge grin on her face, chatting away to those near her. She seems to be enjoying herself.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Hang out with her', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big25.jpg');
    if (((st as any).npc_rel ?? 0)?.['A25'] >= 50  &&  ((st as any).fame ?? 0)?.['pav_slut'] < 250) {
      // TODO-QSP: dynamic text: She grins at you when you walk over. "Hey <<$pcs_nickname>>. What''s up, girl?"
      scene.text(`She grins at you when you walk over. "Hey ${((st as any).pcs_nickname ?? '')}. What's up, girl?"`);
      scene.text('You can\'t help but smile. Her energy and happiness is infectious. "Nothing much, just came to have fun. You?"');
      scene.text('She giggles. "I LOVE having fun!" she replies and the two of you start talking about various things you\'ve done for fun lately.');
      scene.text('She suddenly brighten up. "OH MY GOD! I love this song, let\'s dance!"');
      scene.text('She grabs your hand and starts to pull you out towards the dance floor.');
      scene.actions([
        { label: 'No', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big25.jpg');
    scene.text('You shake your head and pull away. "No thanks, maybe some other time."');
    scene.text('She sighs and rolls her eyes. "What eves, you need to loosen up and have more fun! Anyway, I\'m going to go dance."');
    scene.text('She heads out onto the dance floor and starts dancing to the song.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
        { label: 'Yes', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A25', 'like', 1, 'pav_disco2');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big25.jpg');
    scene.text('You smile at her. "Okay, let\'s go."');
    scene.text('She squeals with delight, causing several people to look over in your direction. "That\'s my girl, let\'s go rock this party!" she says as she practically drags you out onto the dance floor.');
    scene.actions([
      { label: 'Go dancing', goto: ['pav_disco_coolkids', 'sonia_dance'] },
    ]);
  } },
      ]);
    } else {
      if (((st as any).npc_rel ?? 0)?.['A25'] <= 20  &&  ((st as any).fame ?? 0)?.['pav_slut'] < 250) {
        scene.text('When she sees you coming over, she gives you a tight lipped smile before turning her full attention to some of the other girls and talking to them. You get the hint that she doesn\'t want to talk to you.');
        scene.actions([
          { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        ]);
      } else {
        if (((st as any).fame ?? 0)?.['pav_slut'] >= 250) {
          scene.text('When you get to her, you see several of the other kids give you dirty looks but she smiles at you. "Hey slut, what\'s up?"');
          scene.text('You can\'t help but smile. She\'s one of the only people that\'s nice to you, even in public. "Nothing much, just came to have fun. You?"');
          scene.text('She shrugs a little. "Oh you know, just hanging with my peeps, looking for a little fun."');
          scene.text('A new song starts playing and before you can respond. "OH MY GOD! I love this song, let\'s dance!" she says to one of the other girls and grabs her hand before pulling them out onto the dance floor. She gives you a friendly wave before disappearing onto the dance floor.');
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
          ]);
        } else {
          // TODO-QSP: dynamic text: She smiles at you when you approach. "Hey <<$pcs_nickname>>, what''s up?"
          scene.text(`She smiles at you when you approach. "Hey ${((st as any).pcs_nickname ?? '')}, what's up?"`);
          scene.text('You can\'t help but smile. Her energy and happiness is infectious. "Nothing much, just came to have fun. You?"');
          scene.text('She shrugs a little. "Oh you know, just hanging with my peeps, looking for a little fun."');
          scene.text('A new song starts playing and before you can respond. "OH MY GOD! I love this song, let\'s dance!" she says to one of the other girls and grabs her hand before pulling them out onto the dance floor. She gives you a friendly wave before disappearing onto the dance floor.');
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
          ]);
        }
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSoniaDance(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (5);
  qspCall(s, 'sweat', 'add', 3);
  (s as any).fat = ((s as any).fat ?? 0) - (1);
  qspCall(s, 'exp_gain', 'danc', 1);
  (s as any).frost = 0;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/disco/school_kids/sonia_sveta_dance.jpg');
  scene.text('You and Sonia move out onto the dance floor and start dancing together. She seems to be really enjoying herself, laughing and dancing with lots of energy and doesn\'t seem to care what anyone thinks. She just wants to have fun.');
  if (((s as any).hour ?? 0) >= 20) {
    scene.actions([
      { label: 'Keep dancing', goto: ['pav_disco_coolkids', 'sonia_dance'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
  ]);
  scene.build();
}

function enterSoniaOutcast(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A125', 'like', 1, 'pav_disco');
  qspCall(s, 'stat', '');
  if ((Math.floor(Math.random() * 5) + 1) <= 4) {
    scene.img('images/locations/pavlovsk/community/disco/school_kids/sonia_outcast_dance1.jpg');
    scene.text('You see Sonia out on the dance floor, wearing a near transparent dress that only covers her breasts and is so short that it barely covers anything. She\'s a pretty decent dancer, but is dancing wildly with any and everyone near her, grinding on them and hanging off them. She seems to be having fun though and most of the people she dances with don\'t seem to mind.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Go out on the dance floor', handler: (st: GameState) => {
    if (((st as any).npc_rel ?? 0)?.['A25'] >= 50  &&  ((st as any).fame ?? 0)?.['pav_slut'] < 250) {
      scene.img('images/locations/pavlovsk/community/disco/school_kids/sonia_outcast_dance2.jpg');
      // TODO-QSP: dynamic text: When she sees you heading out onto the dance floor, she starts dancing her way o...
      scene.text(`When she sees you heading out onto the dance floor, she starts dancing her way over to you with a big smile on her face. "Hey ${((st as any).pcs_nickname ?? '')}, I'm so glad you came. Dance with me?"`);
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        { label: 'Dance with her', goto: ['pav_disco_coolkids', 'sonia_outcast_dance'] },
      ]);
    } else {
      if (((st as any).npc_rel ?? 0)?.['A25'] <= 20) {
        scene.img('images/locations/pavlovsk/community/disco/school_kids/sonia_boy_dance.jpg');
        scene.text('When she sees you, she gives you a dirty look and starts practically dry humping some boy next to her before the two of them start dancing together.');
        scene.actions([
          { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        ]);
      } else {
        if (((st as any).fame ?? 0)?.['pav_slut'] >= 250) {
          scene.img('images/locations/pavlovsk/community/disco/school_kids/sonia_outcast_dance2.jpg');
          scene.text('When she sees you heading out onto the dance floor, she starts dancing her way over to you with a big smile on her face. "Hey slut! Let\'s make all the boys lose their fucking minds and give them a hell of a show!"');
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
            { label: 'Dance with her', goto: ['pav_disco_coolkids', 'sonia_outcast_dance'] },
          ]);
        } else {
          scene.img('images/locations/pavlovsk/community/disco/school_kids/sonia_outcast_dance2.jpg');
          scene.text('When she sees you heading out onto the dance floor, she starts dancing her way over to you with a big smile on her face.');
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
            { label: 'Dance with her', goto: ['pav_disco_coolkids', 'sonia_outcast_dance'] },
          ]);
        }
      }
    }
  } },
    ]);
  } else {
    scene.img('images/characters/shared/headshots_main/big25.jpg');
    scene.text('Sonia is standing against a wall, looking a little tired and sweaty. By the looks of things, she\'s been dancing a lot already… or doing a lot of something else. She\'s smiling and looking happy, but you catch her looking over at the cool kids and for just a moment, she looks immensely sad before some guy walks up to her and she smiles again, but quickly sends him on his way.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Hang out with her', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big25.jpg');
    if (((st as any).npc_rel ?? 0)?.['A25'] >= 50  &&  ((st as any).fame ?? 0)?.['pav_slut'] < 250) {
      // TODO-QSP: dynamic text: She grins at you when you walk over. "Hey <<$pcs_nickname>>, what''s up girl?"
      scene.text(`She grins at you when you walk over. "Hey ${((st as any).pcs_nickname ?? '')}, what's up girl?"`);
      scene.text('You can\'t help but smile. Her energy and happiness is infectious. "Nothing much, just came to have fun. You?"');
      scene.text('The two of you talk about a variety of things, mostly avoiding her reputation and current issues.');
      scene.text('She suddenly brightens up. "OH MY GOD! I love this song! Let\'s dance!" She looks at you with almost pleading eyes.');
      scene.actions([
        { label: 'No', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big25.jpg');
    scene.text('You shake your head. "No thanks, maybe some other time."');
    scene.text('She nods and looks a bit sad. "Yeah, I get it…" she says while looking over at some of the other kids from school watching you. "It was nice hanging out, but I need a drink." She walks away without another word.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
        { label: 'Yes', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A25', 'like', 1, 'pav_disco2');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big25.jpg');
    scene.text('You smile at her. "Okay, let\'s go."');
    scene.text('She squeals with delight, causing several people to look over your direction. "That\'s my girl, let\'s go rock this party!" she says as she practically drags you out onto the dance floor.');
    scene.actions([
      { label: 'Go dancing', goto: ['pav_disco_coolkids', 'sonia_outcast_dance'] },
    ]);
  } },
      ]);
    } else {
      if (((st as any).npc_rel ?? 0)?.['A25'] <= 20  &&  ((st as any).fame ?? 0)?.['pav_slut'] < 250) {
        scene.text('She frowns when she sees you. "What do you want?"');
        scene.text('You give her a friendly smile. "I just wanted to talk is all."');
        scene.text('She snorts, obviously not believing you and with how most people treat her you can hardly blame her. "Yeah right, look go bother someone else." She then walks off, leaving you alone.');
        scene.actions([
          { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        ]);
      } else {
        if (((st as any).fame ?? 0)?.['pav_slut'] >= 250) {
          scene.text('She grins at you when you walk over. "Hey slut, sucked any cocks tonight?"');
          scene.text('You can\'t help but smile. Her energy and happiness is infectious. "No. Have you?"');
          scene.text('She giggles. "Not recently, but the night is still young…"');
          scene.text('The two of you talk about your more recent sex life. She seems to actually enjoy the sex, but not how she is treated the rest of the time.');
          scene.text('She suddenly brightens up. "OH MY GOD! I love this song! Let\'s dance!" She looks at you with almost pleading eyes.');
          scene.actions([
            { label: 'No', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big25.jpg');
    scene.text('You shake your head. "No thanks, maybe some other time."');
    scene.text('She sighs and shakes her head. "Ass still sore from all the cocks that fucked it recently? I get it. Anyway, I\'m going to go dance, have fun."');
    scene.text('She leaves you behind as she heads out onto the dance floor to shake her ass like there won\'t be a tomorrow.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
            { label: 'Yes', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A25', 'like', 1, 'pav_disco2');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big25.jpg');
    scene.text('You smile at her. "Okay, let\'s go."');
    scene.text('She literally squeals with delight, causing several people to look over your direction. "That\'s my slut! Let\'s go show those losers how to really have fun!" she says as she practically drags you out onto the dance floor.');
    scene.actions([
      { label: 'Go dancing', goto: ['pav_disco_coolkids', 'sonia_outcast_dance'] },
    ]);
  } },
          ]);
        } else {
          // TODO-QSP: dynamic text: She grins at you when you walk over. "Hey <<$pcs_nickname>>. "What''s up, girl?"
          scene.text(`She grins at you when you walk over. "Hey ${((st as any).pcs_nickname ?? '')}. "What's up, girl?"`);
          scene.text('You can\'t help but smile. Her energy and happiness is infectious. "Nothing much, just came to have fun. You?"');
          scene.text('The two of you talk about a variety of things, mostly avoiding her reputation and current issues.');
          scene.text('She suddenly brighten up. "OH MY GOD! I love this song!" She starts moving to the music as she keeps talking to you.');
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
            { label: 'Ask her to dance', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A25', 'like', 1, 'pav_disco2');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big25.jpg');
    scene.text('You smile at her reaction. "Would you like to dance then?"');
    scene.text('She nods and grabs you by the hand. "Hell yes, I want to dance!"');
    scene.text('She practically drags you out onto the dance floor.');
    scene.actions([
      { label: 'Go dancing', goto: ['pav_disco_coolkids', 'sonia_outcast_dance'] },
    ]);
  } },
          ]);
        }
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSoniaOutcastDance(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (5);
  qspCall(s, 'sweat', 'add', 3);
  (s as any).fat = ((s as any).fat ?? 0) - (1);
  qspCall(s, 'exp_gain', 'danc', 1);
  (s as any).frost = 0;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/disco/school_kids/sonia_outcast_dance3.jpg');
  if (((s as any).npc_rel ?? 0)?.['A25'] >= 50  &&  ((s as any).pcs_hotcat ?? 0) >= 5) {
    scene.text('She dances with you very closely. She hoots and hollers and has a great time. She teases guys almost non-stop with how she dances, only to turn back to you again, shutting them down. She seems to really be enjoying herself dancing with you. The longer you dance, the closer she dances to you.');
  } else {
    scene.text('She dances with you very closely. She hoots and hollers and has a great time. She teases guys almost non-stop with how she dances, only to turn back to you again, shutting them down. She seems to really be enjoying herself dancing with you.');
  }
  if (((s as any).hour ?? 0) >= 20) {
    if (((s as any).pcs_hotcat ?? 0) >= 5) {
      scene.actions([
        { label: 'Dance closer to her', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/school_kids/sonia_outcast_dance4.jpg');
    scene.text('You dance closer to her, and end up so close that your breasts are almost constantly rubbing against each other. Her hands start to run up and down your sides, from your hips to your shoulders and back again.');
    scene.text('A few people start to notice and watch.');
    qspCall(st, 'arousal', 'foreplay', 10, 'inhibition');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Go back to just dancing', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'pav_disco_coolkids', 'sonia_outcast_dance');
  } },
      { label: 'Grind against her', handler: (st: GameState) => {
    qspCall(st, 'fame', 'pav', 'sex', 1);
    scene.img('images/locations/pavlovsk/community/disco/school_kids/sonia_outcast_dance5.jpg');
    scene.text('She starts grinding her hips against you and the two of you are soon dancing as close as possible. You\'re starting to attract a lot of attention now, mostly guys enjoying the show.');
    scene.text('A few of them shout words of encouragement, as do some of the girls, while others are giving you looks of disgust. Sonia doesn\'t seem to mind the attention, though, or maybe hasn\'t noticed - she seems to only have eyes for you.');
    scene.text('She then suddenly leans in and kisses you.');
    qspCall(st, 'arousal', 'foreplay', 10, 'inhibition');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Make out', handler: (st: GameState) => {
    qspCall(st, 'fame', 'pav', 'sex', 1);
    scene.img('images/locations/pavlovsk/community/disco/school_kids/sonia_outcast_dance6.jpg');
    scene.text('You can hear the roar of the guys over the music as you kiss Sonia. The noise all falls away and it\'s just the two of you grinding away as you dance and make out.');
    scene.text('You kiss each other\'s lips and necks as your hands roam over each other\'s bodies, squeezing and fondling as they go.');
    scene.text('You don\'t know how long this goes on before she finally says something as you\'re nuzzling her neck. "You want to go back to my place?"');
    qspCall(st, 'arousal', 'kiss', 10, 'inhibition');
    qspCall(st, 'stat', '');
    qspCall(st, 'willpower', 'sex', 'resist', 'easy');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'No', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'No', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A25', 'hate', 1, 'pav_disco2');
    qspCall(st, 'willpower', 'pay', 'resist');
    ((st as any).discoenable = (st as any).discoenable ?? {})['A25'] = 0;
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/shared/headshots_main/big25.jpg');
    scene.text('You pull back from her to create space as you stop kissing. "Sorry not tonight…"');
    scene.text('You don\'t get time to finish your thought, she looks hurt and angry at your words. "Fine!" Then turns and walks away from you.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Yes', handler: (st: GameState) => {
    qspCall(st, 'fame', 'pav', 'sex', 1);
    scene.img('images/locations/pavlovsk/community/disco/school_kids/sonia_outcast_dance6.jpg');
    scene.text('You keep nuzzling her neck, up to her ear and whisper back to her. "Yes…"');
    scene.text('She reaches up and takes your head in her hands, turning it so she can plant a long passionate kiss on your lips. Guys are now crowding around and pawing at both of you.');
    scene.text('Once she breaks the kiss, she takes you by the hands and pushes her way out of the circle of guys. The two of you walk off the dance floor and out of the disco, hand and hand, leaving little doubt to the observant what the two of you are off to do.');
    qspCall(st, 'arousal', 'foreplay', 5, 'inhibition');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave together', goto: ['pav_discoev1', 'sonia'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Just keep dancing', goto: ['pav_disco_coolkids', 'sonia_outcast_dance'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
  ]);
  scene.build();
}

function enterSoniaWalkhome(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/disco/school_kids/walkhome_sonia.jpg');
  scene.text('Sonia takes you by the hand and the two of you walk through the streets back towards the apartment complex. Along the way, she chats about some fashion magazine she has recently read, but you don\'t really remember most of what she said - in fact most of the walk home is a blur.');
  scene.text('Once you get to the apartment complex, she helps you up the stairs to your floor and even helps you with your keys to unlock the door.');
  scene.text('"I hope you don\'t feel too bad tomorrow," she says and gives you a quick hug before walking back down the stairs.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go inside', goto: ['korrPar', ''] },
  ]);
  scene.build();
}

function enterNatasha(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A16', 'like', 1, 'pav_disco');
  qspCall(s, 'stat', '');
  (s as any).rnd_dance = (Math.floor(Math.random() * 2) + 0);
  if ((!((s as any).rnd_dance ?? 0))) {
    scene.img('images/locations/pavlovsk/community/disco/school_kids/natasha_dance.jpg');
    if (((s as any).NatbelQW ?? 0)?.['disco_invite'] < 1) {
      scene.text('You see Natasha out on the dance floor. She\'s wearing a somewhat nice dress, but it pales in comparison to what the other girls are wearing. She does dance fairly well, though.');
    } else {
      scene.text('You see Natasha out on the dance floor. She\'s wearing a nice party dress and is getting some envious looks from the girls, as well as some lustful ones from some of the boys.');
    }
  } else {
    scene.img('images/characters/shared/headshots_main/big16.jpg');
    scene.text('You see Natasha sitting at a table near the cool kids. She\'s wearing a fairly nice dress, but it pales in comparison to what the other girls are wearing.');
  }
  if (((s as any).NatbelQW ?? 0)?.['FriendLover'] >= 3) {
    scene.actions([
      { label: 'Go out on the dance floor with her', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/school_kids/natasha_sveta_dance.jpg');
    scene.text('You kiss her, move out onto the dance floor and start dancing together. She seems to be really enjoying herself, laughing and dancing with lots of energy and doesn\'t seem to care what anyone thinks. She just wants to have fun, especially with you.');
    scene.actions([
      { label: 'Keep dancing', goto: ['pav_disco_coolkids', 'natasha_dance'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).NatbelQW ?? 0)?.['disco_invite'] > 1  &&  (!((s as any).rnd_dance ?? 0))) {
      scene.actions([
        { label: 'Go out on the dance floor with her', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/school_kids/natasha_sveta_dance.jpg');
    scene.text('You and Natasha move out onto the dance floor and start dancing together. She seems to be really enjoying herself, laughing and dancing with lots of energy and doesn\'t seem to care what anyone thinks. She just wants to have fun.');
    scene.actions([
      { label: 'Keep dancing', goto: ['pav_disco_coolkids', 'natasha_dance'] },
    ]);
  } },
      ]);
    } else {
      if ((!((s as any).rnd_dance ?? 0))) {
        if (((s as any).grupTipe ?? 0) === 5) {
          scene.text('As you approach, she gets a panicked look on her face and walks away.');
        } else {
          if (((s as any).npc_rel ?? 0)?.['A16'] >= 50  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 200) {
            // TODO-QSP: dynamic text: When Natasha sees you, she smiles warmly and waves you over. "Come dance with me...
            scene.text(`When Natasha sees you, she smiles warmly and waves you over. "Come dance with me, ${((s as any).pcs_nickname ?? '')}!"`);
            scene.actions([
              { label: 'Dance with her', goto: ['pav_disco_coolkids', 'natasha_dance'] },
            ]);
          } else {
            if (((s as any).npc_rel ?? 0)?.['A16'] <= 20  ||  ((s as any).fame ?? 0)?.['pav_slut'] >= 200) {
              if (((s as any).grupTipe ?? 0) === 3) {
                scene.text('Natasha isn\'t really interested in dancing with you, but you persist in trying.');
                scene.text('"Hey, I\'ve gotta go… do this thing. I guess I\'ll see you later?" she says eventually halfheartedly before walking away.');
              } else {
                scene.text('"Why are you even trying to dance with me? It\'s not like we\'re in the same social circle or something," she says with a suspicious look. "So, if you could just…"');
                scene.text('She drags the last part out, expecting you to catch her drift and leave her alone.');
              }
            } else {
              scene.text('When Natasha sees you, she just smiles and keeps dancing. She doesn\'t seem to mind dancing with you.');
              scene.actions([
                { label: 'Dance with her', goto: ['pav_disco_coolkids', 'natasha_dance'] },
              ]);
            }
          }
        }
      } else {
        if (((s as any).grupTipe ?? 0) === 5) {
          scene.text('As you approach, she gets a panicked look on her face before she suddenly gets up and walks away.');
        } else {
          if (((s as any).npc_rel ?? 0)?.['A16'] >= 50  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 200) {
            if (((s as any).grupTipe ?? 0) === 3) {
              if (((s as any).NatbelQW ?? 0)?.['chrispaid'] < 3) {
                // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>! Have you seen this new makeup line coming out? It''s exp...
                scene.text(`"Hey ${((s as any).pcs_nickname ?? '')}! Have you seen this new makeup line coming out? It's expensive, but I <i>looove</i> the colors!" she says as she holds up the magazine ad for said makeup.`);
                scene.text('She talks about how she can\'t afford nice things like this and this ends up bringing her down, so you quickly change the subject and start complimenting her on her sense of style and grades, reminding her she\'s a top student in school, which brings the smile back to her face.');
              } else {
                // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>! Have you seen this new makeup line coming out? It''s exp...
                scene.text(`"Hey ${((s as any).pcs_nickname ?? '')}! Have you seen this new makeup line coming out? It's expensive, but I <i>looove</i> the colors!" she says as she holds up the magazine ad for said makeup.`);
                scene.text('She talks about how she still finds it difficult to afford nice things like this and this ends up bringing her down until you remind her that she\'s got rid of all her debts and now has some money, and that you\'re also happy to help her out.');
                scene.text('She smiles at this, but you know that she doesn\'t want to keep relying on you, so you change the subject and start complimenting her on her sense of style and grades, reminding her she\'s a top student in school, which brings the smile back to her face.');
              }
            } else {
              scene.text('Natasha greets you with a smile as you sit down beside her. The conversation is lighthearted as you talk about your day and what goes on in the apartment complex where you both live.');
            }
            scene.actions([
              { label: 'Ask her to dance', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big16.jpg');
    scene.text('"Would you like to dance?" you ask with a smile.');
    scene.text('She grins and nods her head. "Yeah, I would love to."');
    scene.text('The two of you then head off onto the dance floor together.');
    scene.actions([
      { label: 'Go dancing', goto: ['pav_disco_coolkids', 'natasha_dance'] },
    ]);
  } },
            ]);
          } else {
            if (((s as any).npc_rel ?? 0)?.['A16'] <= 20  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 200) {
              if (((s as any).grupTipe ?? 0) === 3) {
                scene.text('Natasha isn\'t really interested in talking to you, but you persist in trying to keep up a conversation.');
                scene.text('"Hey, I\'ve gotta go… do this thing. I guess I\'ll see you later?" she eventually says halfheartedly before walking away.');
              } else {
                scene.text('"Why are you even talking to me? It\'s not like we\'re in the same social circle or something," she says with a suspicious look. "So, if you could just…"');
                scene.text('She drags the last part out, expecting you to catch her drift and leave her alone.');
              }
            } else {
              if (((s as any).fame ?? 0)?.['pav_slut'] >= 200) {
                scene.text('When she sees you walking over, she gives you a disgusted look.');
                scene.text('"Get away from me, you disgusting slut!" she says as she moves away from you.');
              } else {
                scene.text('You strike up a conversation with Natasha. She seems a bit hesitant at first, but quickly engages you in some idle chatter about the other students in school and what\'s been going on in Pavlovsk of late.');
                scene.actions([
                  { label: 'Ask her to dance', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big16.jpg');
    scene.text('"Would you like to dance?" you ask with a smile.');
    scene.text('She hesitates for a moment before nodding. "Yeah, I would love to."');
    scene.text('The two of you then head off onto the dance floor together.');
    scene.actions([
      { label: 'Go dancing', goto: ['pav_disco_coolkids', 'natasha_dance'] },
    ]);
  } },
                ]);
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
  ]);
  scene.build();
}

function enterNatashaDance(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (5);
  qspCall(s, 'sweat', 'add', 3);
  (s as any).fat = ((s as any).fat ?? 0) - (1);
  qspCall(s, 'exp_gain', 'danc', 1);
  (s as any).frost = 0;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/disco/school_kids/natasha_sveta_dance.jpg');
  scene.text('You and Natasha move out onto the dance floor and start dancing together. She seems to be really enjoying herself, laughing and dancing with lots of energy and doesn\'t seem to care what anyone thinks. She just wants to have fun.');
  if (((s as any).hour ?? 0) >= 20) {
    scene.actions([
      { label: 'Keep dancing', goto: ['pav_disco_coolkids', 'natasha_dance'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'dimka':
      enterDimka(s, scene);
      break;
    case 'dimka_dance':
      enterDimkaDance(s, scene);
      break;
    case 'dim_drugs':
      enterDimDrugs(s, scene);
      break;
    case 'dimka_pay':
      enterDimkaPay(s, scene);
      break;
    case 'marcus':
      enterMarcus(s, scene);
      break;
    case 'marcus_dance':
      enterMarcusDance(s, scene);
      break;
    case 'andrey_stasya':
      enterAndreyStasya(s, scene);
      break;
    case 'mefodiy':
      enterMefodiy(s, scene);
      break;
    case 'mefodiy_dance':
      enterMefodiyDance(s, scene);
      break;
    case 'igor':
      enterIgor(s, scene);
      break;
    case 'igor_hang_out':
      enterIgorHangOut(s, scene);
      break;
    case 'igor_dance':
      enterIgorDance(s, scene);
      break;
    case 'bella':
      enterBella(s, scene);
      break;
    case 'vicky':
      enterVicky(s, scene);
      break;
    case 'inna':
      enterInna(s, scene);
      break;
    case 'katja':
      enterKatja(s, scene);
      break;
    case 'katja_kiss':
      enterKatjaKiss(s, scene);
      break;
    case 'katja_dance_ask':
      enterKatjaDanceAsk(s, scene);
      break;
    case 'katja_dance':
      enterKatjaDance(s, scene);
      break;
    case 'katja_walkhome':
      enterKatjaWalkhome(s, scene);
      break;
    case 'lizaveta':
      enterLizaveta(s, scene);
      break;
    case 'sonia':
      enterSonia(s, scene);
      break;
    case 'sonia_dance':
      enterSoniaDance(s, scene);
      break;
    case 'sonia_outcast':
      enterSoniaOutcast(s, scene);
      break;
    case 'sonia_outcast_dance':
      enterSoniaOutcastDance(s, scene);
      break;
    case 'sonia_walkhome':
      enterSoniaWalkhome(s, scene);
      break;
    case 'natasha':
      enterNatasha(s, scene);
      break;
    case 'natasha_dance':
      enterNatashaDance(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pav_disco_coolkids: LocationDef = {
  name: 'pav_disco_coolkids',
  region: 'pavlovsk',
  enter: enter,
};
