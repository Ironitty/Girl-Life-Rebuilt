import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A1', 'like', 1, 'pav_disco');
  qspCall(s, 'stat', '');
  qspCall(s, 'dinnpc', '');
  if (Math.floor(Math.random() * 4) + 1 === 1) {
    scene.img('images/locations/pavlovsk/community/disco/school_kids/dimka_dance.jpg');
    scene.text('You see Dimka out on the dance floor. He is dressed very stylishly and dances very well. He\'s in the middle of a small crowd of of people, mostly girls.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Go out on the dance floor', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/school_kids/dimka_dance.jpg');
    if (((s as any).grupTipe ?? 0) === 5  ||  (((s as any).dimaRevenge ?? 0) === 6  &&  (((s as any).dimaRevChoice ?? 0) === 3  ||  ((s as any).dimaRevChoice ?? 0) === 5  ||  ((s as any).dimaRevChoice ?? 0) === 6))  ||  (((s as any).dimaRevenge ?? 0) === 7  &&  ((s as any).dimaRevChoice ?? 0) === 2)  ||  (((s as any).dimaRevenge ?? 0) === 8  &&  (((s as any).dimaRevChoice ?? 0) === 1  ||  ((s as any).dimaRevChoice ?? 0) === 4))) {
      scene.text('He ignores you and turns his back on you as you approach, shunning you.');
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      ]);
    } else {
      if (((s as any).grupTipe ?? 0) === 1) {
        scene.text('When Dimka sees you, he smiles warmly, making room for you in the group made up of some of the cool kids and a few others you don\'t recognize.');
        scene.text('"Just the person I was hoping to see!" he says as you walk up and starts dancing with everyone around him, including you.');
      } else {
        scene.text('When Dimka sees you, he smiles warmly, making room for you in the group made up of some of the cool kids and a few others you don\'t recognize. Some of them give you an odd look, not sure why you\'re here, but Dimka makes you feel welcome.');
        scene.text('"Relax, she doesn\'t have the plague," he playfully chides and you\'re soon dancing with the group.');
      }
      if (((s as any).npc_rel ?? 0)?.['A1'] <= 20  ||  ((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
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
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        { label: 'Dance with him', goto: ['pav_disco_coolkids', 'dimka_dance'] },
      ]);
    }
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
      scene.text('The first thing Dimka does as you walk up is grab you by the arm and drag you aside so no one can hear him. "Do you have my money?"');
      if (qspFunc(s, 'money', 'can_afford_debt', ((s as any).dimka_debt ?? 0))) {
        scene.actions([
          { label: 'Pay your debt', handler: (st: GameState) => {
    qspCall(s, 'money', 'debt_pay', 'dimka_debt');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big1.jpg');
    scene.text('You nod your head and dig in your purse, pulling out the money and handing it to him. He takes his time slowly counting it out, then nods as it seems to all be there. You briefly talk back and forth as he puts the money away.');
    if (((s as any).dimarudorient ?? 0) === 1) {
      // TODO-QSP: act 'Ask for some pale lady': gt 'pav_disco_coolkids', 'dim_drugs'
    }
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
        ]);
      } else {
        scene.text('You bite your lower lip nervously and look down as you shake your head. "No, just give me a little more time and I\'ll have it. Please?"');
        // TODO-QSP: dynamic text: He sighs. "I like you <<$pcs_nickname>>, I do, but I can't just let you slide. H...
        scene.text(`He sighs. "I like you ${((s as any).pcs_nickname ?? 0)}, I do, but I can't just let you slide. How about you pay me a little interest and you can pay me later?"`);
        scene.text('The way he says it leaves no doubt exactly what he considers <i>interest</i>.');
        qspCall(s, 'willpower', 'sex', 'resist');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
  }, goto: ['pav_disco_classmates', 'classmates'] },
          ]);
        }
        scene.actions([
          { label: 'Go with Dimka', goto: ['pav_discoev1', 'dimka_sex'] },
        ]);
      }
      if (((s as any).grupTipe ?? 0) === 5) {
        scene.text('When you get near him, he glances at some of the other cool kids and then back to you.');
        scene.text('"You get lost, loser?" He looks you over and shakes his head. "Where did you get those clothes? Do you even know how to dress yourself?"');
        scene.text('Several of the others laugh at his comment. "Go away. You\'re killing the mood, loser."');
        scene.actions([
          { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        ]);
      } else {
        if (((s as any).grupTipe ?? 0) === 1) {
          scene.text('"Just the person I was hoping to see!" he smiles. "Take a look at this." He pulls out his phone and shows you some photos from his latest trip to Moscow. "You would have loved it out there. It really made me realize we\'re wasting away out here in a place like this."');
          scene.text('You then mostly talk about the other places he has visited.');
        } else {
          scene.text('Dimka greets you with a friendly smile, making room for you in the group made up of some of the cool kids and a few others you don\'t recognize. Some of them give you an odd look, not sure why you\'re here, but Dimka makes you feel welcome.');
          scene.text('"Relax, she doesn\'t have the plague," he playfully chides everyone and you\'re soon engaged in a conversation with Dimka.');
        }
        if (((s as any).dimarudorient ?? 0) === 1) {
          // TODO-QSP: act 'Ask for some pale lady': gt 'pav_disco_coolkids', 'dim_drugs'
        }
        if (((s as any).npc_rel ?? 0)?.['A1'] <= 20  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 200) {
          if (((s as any).grupTipe ?? 0) === 1) {
            // TODO-QSP: dynamic text: "You seem to have the wrong idea about me <<$pcs_nickname>>." Dimka holds out hi...
            scene.text(`"You seem to have the wrong idea about me ${((s as any).pcs_nickname ?? 0)}." Dimka holds out his hand to keep you from getting any closer. "Just because we run in the same social circle doesn't mean we're friends."`);
            scene.text('You can\'t help but scoff and roll your eyes. "Who said I want to be friends? You just looked lonely standing over here by yourself. I was just trying to be nice."');
            scene.text('You trade a few more barbs back and forth.');
          } else {
            scene.text('Dimka looks down at you with a condescending smile. "What do you want?" he asks, maintaining his "friendly" appearance in front of everyone.');
            scene.text('"I just wanted to say hi is all…" you reply');
            scene.text('He looks around like this is a common burden. "Of course you did, everyone does."');
            scene.text('You try talking to him, but he acts like he is barely tolerating you, like a Tsar might a peasant in his court.');
          }
          if (((s as any).dimarudorient ?? 0) === 1) {
            // TODO-QSP: act 'Ask for some pale lady': gt 'pav_disco_coolkids', 'dim_drugs'
          }
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
          ]);
        } else {
          scene.text('Dimka sees you approaching and gives you a blank look, his gaze cold and unblinking. "Do you really think I would talk to a whore like you?" he dryly states. He continues to stare you down until you finally leave.');
          scene.text('Dimka is willing to entertain you for a bit, occasionally taking part in the conversation but letting you do most of the talking before someone calls over to him.');
          scene.text('He smiles and waves back to them. "Sorry, I hope you don\'t mind."');
          scene.text('He starts heading towards them - you could quickly ask him something or just let him go.');
          if (((s as any).dimarudorient ?? 0) === 1) {
            // TODO-QSP: act 'Ask for some pale lady': gt 'pav_disco_coolkids', 'dim_drugs'
          }
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
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
  } },
    ]);
  }
  scene.build();
}

export const pav_disco_coolkids: LocationDef = {
  name: 'pav_disco_coolkids',
  title: '<<$npc_firstname[\'A1\']>> <<$npc_lastname[\'A1\']>>',
  region: 'pavlovsk',
  description: ['You see Dimka out on the dance floor. He is dressed very stylishly and dances very well. He\'s in the middle of a small crowd of of people, mostly girls.'],
  enter: enter,
};
