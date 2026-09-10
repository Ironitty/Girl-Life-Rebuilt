import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Road near the park, among prostitutes</b></center>');
  scene.img('images/locations/city/centralpark/park2.jpg');
  if (((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) <= 23) {
    if (((s as any).whoreQW ?? 0) === 1) {
      scene.text('Several prostitutes are looking at you a bit awkwardly, remembering the beating you gave their friend all too well. They still don\'t want you here, but they\'re too scared to confront you directly.');
      scene.actions([
        { label: 'Ask how things work around here', handler: (st: GameState) => {
    (s as any).whoreQW = 2;
    scene.text('You approach one of the more isolated girls and give her a disarming smile: "Hey! So, the other girl said I have to be one of you to work here? How does that work?"');
    scene.text('The prostitute shrugs, not entirely willing to talk to you, but she\'s afraid you\'d fight her too. She says: "We don\'t really work for anyone, but that also means we don\'t get any protection. One of the women here called Stella organized part of the girls into a group. She requires some protection money from time to time, and arranges \'accidents\' for those who don\'t pay. She and her cronies are not that tough, but since she doesn\'t ask for that much, I usually just pay her off. Less hassle that way, you know?"');
    scene.text('You nod understandingly and the girl continues: "And then there\'s the bandits! They sometimes extort us too, because we\'re easy prey. Stella doesn\'t have that much influence around here, but I wouldn\'t mess with the bandits if I were you! They mean business…"');
    scene.text('She also points out: "By the way, it may sound obvious but <b>if you want to pick up customers, you need to be dressed like a prostitute.</b> If it\'s not very obvious to guys that you\'re a working girl, none of them will approach you! You can buy some in a sex shop."');
    scene.actions([
      { label: 'Thank her and move away', goto: ['prostitute', 'start'] },
    ]);
  } },
      ]);
    } else {
      scene.text('"Hey bitch, you\'re not one of us!" a prostitute yells angrily at you, rapidly moving towards you. "Get off our turf, or it\'ll cost you your teeth!"');
      scene.text('She looks like she\'s getting ready to fight you, though she\'s clearly under the influence of drugs and wobbles a bit as she walks.');
      if (((s as any).whoreQW ?? 0) === 2) {
        scene.text('The prostitutes look at you curiously for a moment, but quickly turn their attention back to trying to attract customers.');
        if ((((s as any).PCloStyle ?? 0) === 4  ||  ((s as any).PCloProstitute ?? 0) === 1)  &&  ((s as any).pcs_sleep ?? 0) > 0) {
          scene.actions([
            { label: 'Stand and wait for customers (0:16)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    if (((s as any).rand ?? 0)(0, (((s as any).pcs_apprnc ?? 0)/4 + ((s as any).hour ?? 0)) * 2) < 20) {
      scene.text('You walk around for a while, trying to find a customer. Unfortunately, no one is interested in you right now.');
      scene.actions([
        { label: 'Continue', goto: ['prostitute', 'start'] },
      ]);
    } else {
      (s as any).proseventrand = Math.floor(Math.random() * 20) + 1;
      if (((s as any).proseventrand ?? 0) === 1) {
        scene.text('A black jeep with tinted windows pulls up next to you, and a window rolls down. You\'re looking into the face of a fairly mean looking guy, who you\'re fairly sure is a criminal.');
        scene.text('He looks at you with disdain. "Time for you to pay your tribute, slut."');
        if (qspFunc(s, 'money', 'can_afford', 1000, 'cash') === 1) {
          scene.actions([
            { label: 'Give him <<$func(\'money\', \'string_price\', 1000)>>', handler: (st: GameState) => {
    qspCall(s, 'money', 'pay', 1000, 'cash');
    // TODO-QSP: dynamic text: You give the man <<$func('money', 'string_price', 1000)>>, which he pockets righ...
    scene.text(`You give the man ${qspFunc(s, 'money', 'string_price', 1000)}, which he pockets right away. Then he drives off, without saying another word.`);
    scene.actions([
      { label: 'Continue', goto: ['prostitute', 'start'] },
    ]);
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Say you haven\'t earned much', handler: (st: GameState) => {
    qspCall(s, 'money', 'set', 0, 'cash');
    scene.text('You try to explain to the man that you haven\'t earned much yet. He thinks it over for a moment.');
    scene.text('"Are you new, or do you just suck at your job then? All the girls here know to have their money ready when we come to collect!" he grunts as he opens the door of the car and pulls you in with his thick, burly arms. "Let\'s see what you\'re working with. Maybe you need someone to teach you how to make money around here!"');
    scene.text('When he sees you hesitate, he slaps your face and says: "Go on, whore! I don\'t have all day."');
    scene.text('You realize he\'s not going to let you off the hook easily, and that he probably has enough connections to get you into serious trouble. It\'s probably easiest to treat him as just another customer, maybe he\'ll let you go if you do a good job…');
    scene.actions([
      { label: 'Reach for his groin', handler: (st: GameState) => {
    qspCall(s, 'npcgeneratec', '', 0, 'Bandit', Math.floor(Math.random() * 28) + 18);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
  }, goto: ['blowPR', 'start'] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Refuse to pay and fight him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'npcgeneratec', '', 0, 'Bandit', Math.floor(Math.random() * 28) + 18);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'fight', 'initFight');
    qspCall(s, 'fight_npcdata', 'bandit');
  }, goto: ['fight', 'start'] },
        ]);
      } else {
        scene.text('A rather scrawny looking prostitute approaches you and says: "Listen up, skank. It\'s time you pay Stella!"');
        if (qspFunc(s, 'money', 'can_afford', 500, 'cash') === 1) {
          scene.actions([
            { label: 'Give her <<$func(\'money\', \'string_price\', 500)>>', handler: (st: GameState) => {
    qspCall(s, 'money', 'pay', 500, 'cash');
    scene.text('As you give her the money, you\'d swear you see a twinge of relief in her eyes. The girl was clearly worried you were going to give her a hard time.');
    scene.text('She quickly walks away, not saying anything else.');
    scene.actions([
      { label: 'Continue', goto: ['prostitute', 'start'] },
    ]);
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Say you haven\'t earned much', handler: (st: GameState) => {
    qspCall(s, 'money', 'set', 0, 'cash');
    scene.text('You begin to explain that you haven\'t earned much money yet, but she\'s not interested in your story.');
    scene.text('She quickly rummages through your belongings, and takes all the money you have on you. Then she leaves quickly, before you can object.');
    scene.actions([
      { label: 'Continue', goto: ['prostitute', 'start'] },
    ]);
  } },
          ]);
        }
        scene.text('A car stops near you and the driver rolls his window down.');
        (s as any).prosti = 0;
        if (((s as any).proseventrand ?? 0) <= 8) {
          scene.text('The driver asks matter-of-factly: "You\'ve got a cute face on you. How much for a blowjob?"');
        } else {
          scene.text('The driver says matter-of-factly: "You seem decent enough… I want to fuck you. How much?"');
          scene.text('The driver says matter-of-factly: "I like your ass. How much do you charge for anal?"');
        }
        if (((s as any).ProsMoney ?? 0) > 0) {
          scene.actions([
            { label: '<<$func(\'money\', \'string_profit\', ProsMoney * 100)>>', handler: (st: GameState) => {
    // TODO-QSP: gt 'prostitute', 'work1', iif(proseventrand <= 8, 'blow job', iif(proseventrand <= 14, 'sex', 'anal'...
  } },
          ]);
        }
        scene.actions([
          { label: 'Refuse to pay and fight her', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'npcgeneratec', '', 1, 'prostitute', Math.floor(Math.random() * 11) + 18);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'fight', 'initFight');
    qspCall(s, 'fight_npcdata', 'prostitute2');
  }, goto: ['fight', 'start'] },
          { label: 'Walk away from him', goto: ['prostitute', 'start'] },
          { label: 'Change the price', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).ProsMoney = qspUntranslated(s, "input(\"Enter a number below, which will be multiplied by <<func('money', 'string_profit', 100)>>\")", { location: "Prostitute" });
    if (((s as any).ProsMoney ?? 0) < 1) {
      scene.text('"Are you making a joke or something? I\'m not in the mood for jokes!" the customer sighs wearily. He starts his car again and drives away without saying another word.');
      scene.text('The price you set was too low for the man to take you seriously.');
      scene.actions([
        { label: 'Continue', goto: ['prostitute', 'start'] },
      ]);
    } else {
      // TODO-QSP: gt 'prostitute', 'work1', iif(proseventrand <= 8, 'blow job', iif(proseventrand <= 14, 'sex', 'anal'...
    }
  } },
        ]);
      }
    }
  } },
          ]);
        }
      }
      scene.actions([
        { label: 'Fight her', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'npcgeneratec', '', 1, 'stoned prostitute', Math.floor(Math.random() * 11) + 18);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'fight', 'initFight');
    qspCall(s, 'fight_npcdata', 'prostitute');
  }, goto: ['fight', 'start'] },
        { label: '"How do I become one of you?"', handler: (st: GameState) => {
    scene.text('You raise your hands disarmingly and say: "Whoa, relax! I only wanted to ask… how do I become one of you? I want to work here!"');
    scene.text('The prostitute grins meanly and spits on the ground before you, saying: "That\'s what I thought, bitch. Stella runs this area! You pay her if you want to work here, you got that?"');
    scene.actions([
      { label: 'Shrug and leave', goto: ['prostitute', 'start'] },
      { label: 'Nod understandingly', handler: (st: GameState) => {
    (s as any).whoreQW = 2;
    scene.text('When you nod, the prostitute adds: "By the way: <b>you need to look like a whore, if you want to work as a whore</b>. The sex shop sells outfits. And remember: you work here, you pay Stella! Otherwise you\'re in deep trouble!"');
    scene.actions([
      { label: 'Move away from her', goto: ['prostitute', 'start'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Go back to the park', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
  }, goto: ['city_park', 'start'] },
    ]);
  }
  scene.build();
}

export const Prostitute: LocationDef = {
  name: 'Prostitute',
  title: 'Road near the park, among prostitutes',
  region: 'other',
  locationType: 'event_outdoors',
  description: ['Several prostitutes are looking at you a bit awkwardly, remembering the beating you gave their friend all too well. They still don\'t want you here, but they\'re too scared to confront you directly.'],
  enter: enter,
};
