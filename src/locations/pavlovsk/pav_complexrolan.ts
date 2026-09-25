import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterSpy(s: GameState, scene: SceneBuilder): void {
  (s as any).len_rol_ler = 0;
  if ((!((s as any).len_rol_ler ?? 0))) {
    (s as any).court_texta = 'You notice two girls looking at each other; one is on the phone.';
    (s as any).court_textb = 'Suddenly the girl without the phone pulls down the panties of her friend and starts eating her pussy while she continues the call… it seems they don\'t mind to play in the courtyard.';
    (s as any).court_textc = 'The girl on the phone continues her call as she wants the listener on the other side to know she\'s busy. Her friend furiously rubs her pussy; causing her to lose control and suddenly cum. You think you have found a reason to visit the courtyard more often…';
  } else {
    if (((s as any).len_rol_ler ?? 0) === 1) {
      (s as any).court_texta = 'Lena and Lera are walking in the park hand in hand.';
      (s as any).court_textb = 'Suddenly they stop and start groping each other\'s butts…';
      (s as any).court_textc = 'Both of them pull down their shorts, flashing their asses, and turn their heads… Ooops. They seem to have noticed Rolan…';
    } else {
      if (((s as any).len_rol_ler ?? 0) === 2) {
        (s as any).court_texta = 'Two girls passionately kiss each other.';
        (s as any).court_textb = 'They move onto a nearby wall, one of the girls sits spreading her legs. The other reaches for her panties and pulls them aside and starts to \'explore\' her friend.';
        (s as any).court_textc = 'Soon they are both naked from the waist down and they start to make out. The blond girl kneels on her skirt and starts fingerfucking her friend.';
      } else {
        if (((s as any).len_rol_ler ?? 0) === 3) {
          (s as any).court_texta = 'Lena and Lera kiss each other on a nearby bench…';
          (s as any).court_textb = 'It seems it\'s not enough, because they immediately move a few steps away and both start undressing…';
          (s as any).court_textc = 'When you hear the police sirens, Lera drags Lena away.';
        } else {
          if (((s as any).len_rol_ler ?? 0) === 4) {
            (s as any).court_texta = 'Two stoned girls are flashing their pussy and tits. It seems really daring…';
            (s as any).court_textb = 'They move on a bench, they must be in heat… one lifts herself onto a wall near the bench and spreads her legs, offering an easy access to the pussy; her friend starts licking and pulls out a dildo. She starts attacking the brunette with both her tongue and dildo…';
            (s as any).court_textc = 'The brunette wants to return the favor and moves down to take lead. She starts fucking her friend\'s pussy as if nobody was there…';
          } else {
            if (((s as any).len_rol_ler ?? 0) === 5) {
              (s as any).court_texta = 'You see Mrs Sokoloff coming and decide to move away. You don\'t want to listen to a lesson outside of school. You move away and turn to see if she\'s gone, but she\'s still there speaking with Rolan… wait… "Who\'s there?" you think. You see Lena and Lera exposing their bodies a few steps from Rolan and Mrs Sokoloff…';
              (s as any).court_textb = 'Soon they move, you decide to follow them and hide behind a wall. Lera pulls out a dildo and start to lube it up, while Lena goes down and spreads Lera\'s lips…';
              (s as any).court_textc = 'It seems too daring and soon they move on to a secluded spot to proceed unnoticed. You follow them and find a tree to crouch behind. Lena pushes the dildo further inside Lera and starts to fuck her. This spot passes as \'hidden\' and they continue to fuck free from unwanted viewers… at least they think so.';
            } else {
              if (((s as any).len_rol_ler ?? 0) === 6) {
                (s as any).court_texta = 'Two girls sit on a nearby bench. They look around as if they were worried about something. Then you see one of the girls sticks a dildo up her ass. Guess she wasn\'t worried after all…';
                (s as any).court_textb = 'Suddenly a man comes to the bench behind them. The girls turn a little to hide their actions, they clearly do not want to stop and stay as hidden as possible. The man picks up a newspaper he probably left behind and goes away…';
                (s as any).court_textc = 'Once the man is out of their sight, the girl who was fucking her friend\'s ass turns her doggy on the bench to continue in that position. You leave, not wanting to be caught.';
              } else {
                if (((s as any).len_rol_ler ?? 0) === 7) {
                  (s as any).court_texta = 'You see two girls in a dress without underwear exposing their bodies. It seems they want to make a show…';
                  (s as any).court_textb = 'The courtyard is crowded today and they constantly change position using a tree as a blindspot.';
                  (s as any).court_textc = 'They kiss and touch one another, but they are obviously ashamed to go any further. Soon they move away, leaving you with a wetness in your crotch.';
                } else {
                  if (((s as any).len_rol_ler ?? 0) === 8) {
                    (s as any).court_texta = 'Rolan is pointing to the slipway and you wonder what\'s there. Wow Lena and Lera are putting on a show. They are completely naked on the slipway with their clothes nearby.';
                    (s as any).court_textb = 'Suddenly, Mrs Sokoloff walks past, but she seems not to notice what\'s going on. Lena and Lera seem to find the situation funny and they continue trying to stay hidden from her.';
                    (s as any).court_textc = 'Unbelievable. Mrs Sokoloff passes the slipway totally unaware. Lena and Lera start to kiss each other - it seems they want to party for their achievement.';
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  qspCall(s, 'arousal', 'voyeur', 5);
  qspCall(s, 'stat', '');
  scene.text(`<br>${((s as any).court_imga ?? '')}<br>`);
  scene.text(`<br>${((s as any).court_texta ?? '')}<br>`);
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'voyeur', 5);
    qspCall(st, 'stat', '');
    scene.text(`<br>${((st as any).court_imgb ?? '')}<br>`);
    scene.text(`<br>${((st as any).court_textb ?? '')}<br>`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'voyeur', 5);
    qspCall(st, 'stat', '');
    scene.text(`<br>${((st as any).court_imgc ?? '')}<br>`);
    scene.text(`<br>${((st as any).court_textc ?? '')}<br>`);
    scene.actions([
      { label: 'Move away', goto: ['pav_complex', 'start'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterFriends(s: GameState, scene: SceneBuilder): void {
  if (((s as any).rolangift ?? 0) === 1) {
    (s as any).rolanapol = 3;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanturn1.jpg');
    scene.text('"Rolan I\'m sorry if I\'ve done something wrong… but I don\'t know what I\'ve done, please help me to understand so I can smooth things up."');
    scene.text('Rolan turns his back to you.');
    scene.actions([
      { label: 'Please', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanturncry.jpg');
    scene.text('"Mphhhf… I cannot believe you don\'t know what you\'ve done. You snoop around in my house and take whatever you want… and me… I allow you to wander around freely. You really don\'t know what you\'ve done? Well I\'ll tell you: you used my Babushka\'s ashes to repair the bath! Happy now? What else do you want to take from me? You have taken what was the most important thing to me and thrown it away!"');
    scene.text('"I-I… I can\'t believe it, if only I knew… I never would have used them… you have to believe me…"');
    scene.text('"…I\'m orthodox and cremation is not allowed. But I didn\'t have the money for a burial, and I couldn\'t just leave Babushka to be thrown away. I believe you, it was an accident… but that\'s not the point. You shouldn\'t snoop around someone else\'s house. That\'s not polite. And… and… oh Babushka what have I done… why didn\'t I take care of you? You were everything to me…" Rolan starts crying in agony.');
    scene.actions([
      { label: 'Cheer him up', handler: (st: GameState) => {
    qspCall(st, 'money', 'pay', 8000);
    qspCall(st, 'stat', '');
    qspCall(st, 'panties', 'dispose');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanapolgift.jpg');
    scene.text('"…Rolan, here… take this to dry your tears… I know you like them, and I don\'t have any wipes. You can have them, I\'ve got a bunch."');
    scene.text(`"Miss ${((st as any).pcs_lastname ?? '')}… I think it's time for me to make my apologies. I was extremely rude to kick you out of my house in that way…"`);
    scene.text('"Oh Rolan there\'s no need… I would have done the same if I were in your position"');
    scene.text(`"Miss ${((st as any).pcs_lastname ?? '')}… please, let me finish. It's not for everybody to understand people's habits and to not judge them, but you can. That's the reason why my door will always be open for you. Please, would you be so kind as to accept my apologies?"`);
    scene.text('"Oh Rolan I\'m the one who has to apologise! I\'m very happy to spend some time with you like before. Just… take these. I can\'t give you Babushka back, however I try, but you can recruit some workers to restore the vessel."');
    scene.text(`"Miss ${((st as any).pcs_lastname ?? '')}…`);
    scene.actions([
      { label: 'Say goodbye', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    (st as any).rolanblockhome = 0;
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/goodbyerolan.jpg');
    scene.text('You kiss Rolan on the forehead and feel something in him finally rest in peace.');
    scene.actions([
      { label: 'Move away', goto: ['pav_complex', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if ((!((s as any).rolanapol ?? 0))) {
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanturn1.jpg');
      scene.text('"Rolan I\'m sorry if I\'ve done something wrong… but I don\'t know what I\'ve done, please help me to understand so I can smooth things up."');
      scene.text('Rolan turns his back to you.');
      scene.actions([
        { label: 'Cheer him up', handler: (st: GameState) => {
    qspCall(st, 'money', 'pay', 8000);
    (st as any).rolanapol = 1;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanturncry.jpg');
    scene.text('…Rolan, broken inside, says: "Witch! You have stolen my Babushka and put her ashes into my bath!"');
    scene.text('You can\'t believe what you have heard. "But… but…"');
    scene.text('"…Before you ask your stupid question, I\'m orthodox and cremation is not allowed. But I haven\'t got enough money for a burial and I couldn\'t just leave Babushka to be thrown away."');
    scene.text('"…I\'m sorry Rolan… I never could have imagined… I\'m so sorry Rolan, I don\'t know what to do… Here take this money, it won\'t give you Babushka back, but you can recruit some workers to restore the vessel. If only I knew, I never would have used the powder, you have to believe me."');
    scene.text('"I appreciate your effort, but that doesn\'t change things. You could have asked, but you didn\'t. You should learn what\'s yours and what\'s not." He turns and fixes you with a hard stare. "Give me your panties."');
    scene.text('…');
    scene.actions([
      { label: 'Give them', handler: (st: GameState) => {
    (st as any).rolanapol = 2;
    qspCall(st, 'stat', '');
    qspCall(st, 'panties', 'dispose');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanapol0.jpg');
    scene.text('"O-OK… I think I\'ve learned my lesson…"');
    scene.text('"No you didn\'t. You shouldn\'t snoop around to take things that aren\'t yours, and that you know nothing about. You need to learn a harder lesson than this. Now bend over."');
    scene.text('…');
    scene.actions([
      { label: 'Bend', handler: (st: GameState) => {
    (st as any).rolanapol = 3;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanapol1.jpg');
    scene.text('You bend and give Rolan access to your bare ass.');
    scene.text(`It will hurt ${((st as any).pcs_lastname ?? '')}, clench your teeth.`);
    scene.actions([
      { label: 'Ouch', handler: (st: GameState) => {
    qspCall(st, 'pain', '5', 'asscheeks', 'spank');
    qspCall(st, 'stat', '');
    ((st as any).pain = (st as any).pain ?? {})['asscheeks'] = ((st as any).pain['asscheeks'] ?? 0) + (30);
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanapol2.jpg');
    scene.text('Rolan starts beating your bare butt. There\'s no lust in his beating, but you can\'t say the same about anger…');
    scene.actions([
      { label: 'It hurts!', handler: (st: GameState) => {
    qspCall(st, 'pain', '5', 'asscheeks', 'spank');
    qspCall(st, 'stat', '');
    ((st as any).pain = (st as any).pain ?? {})['asscheeks'] = ((st as any).pain['asscheeks'] ?? 0) + (30);
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanapol3.jpg');
    scene.text('Your ass is red and painful, you are close to crying');
    scene.text('"I\'m sorry Rolan… I\'ve learned my lesson!"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    (st as any).rolanblockhome = 0;
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanturncry.jpg');
    scene.text(`"I'm sorry too Miss ${((st as any).pcs_lastname ?? '')}. I wish this wasn't necessary, but I'm sure you have learned your lesson.`);
    scene.actions([
      { label: 'Leave', goto: ['pav_complex', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'What?', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolangiveme.jpg');
    scene.text('"There\'s no other way."');
    scene.actions([
      { label: 'Move away', goto: ['pav_complex', 'start'] },
    ]);
  } },
    ]);
  } },
      { label: 'What?', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolangiveme.jpg');
    scene.text('"There\'s no other way."');
    scene.actions([
      { label: 'Move away', goto: ['pav_complex', 'start'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).rolanapol ?? 0) === 1) {
        qspCall(s, 'stat', '');
        scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolangiveme.jpg');
        scene.text('"…O-OK… I think I\'ve learned my lesson…"');
        scene.text('"No you haven\'t. We have to fix this. Now give them to me."');
        scene.text('…');
        scene.actions([
          { label: 'Give him your panties', handler: (st: GameState) => {
    (st as any).rolanapol = 2;
    qspCall(st, 'stat', '');
    qspCall(st, 'panties', 'dispose');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanapol0.jpg');
    scene.text('"…O-OK… I think I\'ve learned my lesson"');
    scene.text('"No you haven\'t. You shouldn\'t snoop around to take things that aren\'t yours, and that you know nothing about. You need to learn a harder lesson than this. Now bend over."');
    scene.text('…');
    scene.actions([
      { label: 'Bend', handler: (st: GameState) => {
    (st as any).rolanapol = 3;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanapol1.jpg');
    scene.text('You bend and give Rolan access to your bare ass.');
    scene.text(`It will hurt ${((st as any).pcs_lastname ?? '')}, clench your teeth.`);
    scene.actions([
      { label: 'ouch', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    ((st as any).pain = (st as any).pain ?? {})['asscheeks'] = ((st as any).pain['asscheeks'] ?? 0) + (30);
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanapol2.jpg');
    scene.text('Rolan start beating your bare butt. There\'s no lust in his beating, but you can\'t say the same about anger…');
    scene.actions([
      { label: 'It hurts!', handler: (st: GameState) => {
    qspCall(st, 'pain', '5', 'asscheeks', 'spank');
    qspCall(st, 'stat', '');
    ((st as any).pain = (st as any).pain ?? {})['asscheeks'] = ((st as any).pain['asscheeks'] ?? 0) + (30);
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanapol3.jpg');
    scene.text('Your ass is red and painful, you are close to crying');
    scene.text('"I\'m sorry Rolan… I\'ve learned my lesson!"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'pain', '5', 'asscheeks', 'spank');
    qspCall(st, 'stat', '');
    (st as any).rolanblockhome = 0;
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanturncry.jpg');
    scene.text(`"I'm sorry too Miss ${((st as any).pcs_lastname ?? '')}. I wish this wasn't necessary, but I'm sure you have learned your lesson.`);
    scene.actions([
      { label: 'Leave', goto: ['pav_complex', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'What?', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolangiveme.jpg');
    scene.text('"There\'s no other way."');
    scene.actions([
      { label: 'Move away', goto: ['pav_complex', 'start'] },
    ]);
  } },
    ]);
  } },
          { label: 'What?', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolangiveme.jpg');
    scene.text('"There\'s no other way."');
    scene.actions([
      { label: 'Move away', goto: ['pav_complex', 'start'] },
    ]);
  } },
        ]);
      } else {
        if (((s as any).rolanapol ?? 0) === 2) {
          qspCall(s, 'stat', '');
          scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolangiveme.jpg');
          scene.text('"…O-OK… I think I\'ve learned my lesson…"');
          scene.text('"No you haven\'t. We have to fix this. Now bend over."');
          scene.text('…');
          scene.actions([
            { label: 'Bend', handler: (st: GameState) => {
    (st as any).rolanapol = 3;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanapol1.jpg');
    if (((st as any).pantyworntype ?? 0) !== 'none') {
      scene.text('You bend and Rolan lift your skirt, then he pull down your panties to have full access to your bare ass.');
      scene.text(`It will hurt ${((st as any).pcs_lastname ?? '')}, clench your teeth.`);
    } else {
      scene.text('You bend and give Rolan access to your bare ass.');
      scene.text(`It will hurt ${((st as any).pcs_lastname ?? '')}, clench your teeth.`);
    }
    scene.actions([
      { label: 'Ouch', handler: (st: GameState) => {
    qspCall(st, 'pain', '5', 'asscheeks', 'spank');
    qspCall(st, 'stat', '');
    ((st as any).pain = (st as any).pain ?? {})['asscheeks'] = ((st as any).pain['asscheeks'] ?? 0) + (30);
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanapol2.jpg');
    scene.text('Rolan start beating your bare butt. There\'s no lust in his beating, but you can\'t say the same about anger…');
    scene.actions([
      { label: 'It hurts!', handler: (st: GameState) => {
    qspCall(st, 'pain', '5', 'asscheeks', 'spank');
    qspCall(st, 'stat', '');
    ((st as any).pain = (st as any).pain ?? {})['asscheeks'] = ((st as any).pain['asscheeks'] ?? 0) + (30);
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanapol3.jpg');
    scene.text('Your ass is red and painful, you are close to crying.');
    scene.text('"I\'m sorry Rolan… I\'ve learned my lesson!"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    (st as any).rolanblockhome = 0;
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanturncry.jpg');
    scene.text(`"I'm sorry too Miss ${((st as any).pcs_lastname ?? '')}. I wish this wasn't necessary, but I'm sure you have learned your lesson.`);
    scene.actions([
      { label: 'Leave', goto: ['pav_complex', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
            { label: 'What?', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolangiveme.jpg');
    scene.text('"There\'s no other way."');
    scene.actions([
      { label: 'Move away', goto: ['pav_complex', 'start'] },
    ]);
  } },
          ]);
        }
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).loc_arg = '';
  (s as any).loc = 'pav_complexrolan';
  (s as any).location_type = 'public_outdoors';
  qspCall(s, 'stat', '');
  if (((s as any).month ?? 0) >= 3  &&  ((s as any).month ?? 0) <= 11) {
    if (((s as any).sunWeather ?? 0) === 1  &&  ((s as any).RolanLoc ?? 0)?.[String((s as any).hour ?? 0)] >= 9  &&  ((s as any).RolanLoc ?? 0)?.[String((s as any).hour ?? 0)] <= 10) {
      qspCall(s, 'stat', '');
      scene.text('<center><h4>Rolan on the bench</h4></center>');
      scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/benchsr.jpg');
      scene.text('Rolan stays on the bench reading something. You can talk to him… or investigate…');
      if (qspFunc(s, 'money', 'can_afford', 8000) === 1  &&  ((s as any).rolanblockhome ?? 0) === 1) {
        scene.text('You have some money with you, maybe Rolan wants his old bath back…');
      }
      if (((s as any).rolanblockhome ?? 0) !== 1) {
        scene.actions([
          { label: 'Approach and chat', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + ((Math.floor(Math.random() * 6) + 10));
    qspCall(st, 'stat', '');
    scene.text('<center><b>Rolan the janitor</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/headrol.jpg');
    scene.text('You sit down next to him on a nearby bench.');
    if (((st as any).npc_rel ?? 0)?.['A133'] < 20) {
      scene.text('You try to have a conversation with Rolan, but he dislikes you too much to even pretend to be interested in what you have to say.');
      scene.actions([
        { label: 'Chat anyway', handler: (st: GameState) => {
    ((st as any).npc_rel = (st as any).npc_rel ?? {})['A133'] = ((st as any).npc_rel['A133'] ?? 0) + ((((st as any).pcs_intel ?? 0) / 10) + (((st as any).pcs_apprnc ?? 0) / 20));
    qspCall(st, 'stat', '');
    scene.text('You can tell his attitude towards you is slightly milder.');
    scene.actions([
      { label: 'Move away', goto: ['pav_complex', 'start'] },
    ]);
  } },
        { label: 'Move away', goto: ['pav_complex', 'start'] },
      ]);
    } else {
      if (((st as any).npc_rel ?? 0)?.['A133'] >= 20  &&  ((st as any).npc_rel ?? 0)?.['A133'] < 40) {
        scene.text('You have a nice chat with Rolan.');
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    ((st as any).npc_rel = (st as any).npc_rel ?? {})['A133'] = ((st as any).npc_rel['A133'] ?? 0) + ((((st as any).pcs_intel ?? 0) / 10) + (((st as any).pcs_apprnc ?? 0) / 20));
    qspCall(st, 'stat', '');
    scene.text('You can tell your friendship is growing.');
    scene.actions([
      { label: 'Move away', goto: ['pav_complex', 'start'] },
    ]);
  } },
          { label: 'Move away', goto: ['pav_complex', 'start'] },
        ]);
      } else {
        if (((st as any).npc_rel ?? 0)?.['A133'] >= 40) {
          scene.text('Rolan likes you too much to even pretend to not stare at your boobs.');
          scene.actions([
            { label: 'Friendly chat', handler: (st: GameState) => {
    ((st as any).npc_rel = (st as any).npc_rel ?? {})['A133'] = ((st as any).npc_rel['A133'] ?? 0) + ((((st as any).pcs_intel ?? 0) / 10) + (((st as any).pcs_apprnc ?? 0) / 20));
    qspCall(st, 'stat', '');
    scene.text('You can see the bulge in his crotch growing.');
    scene.actions([
      { label: 'Move away', goto: ['pav_complex', 'start'] },
    ]);
  } },
            { label: 'Move away', goto: ['pav_complex', 'start'] },
          ]);
        }
      }
    }
  } },
        ]);
      } else {
        if (((s as any).rolanblockhome ?? 0) === 1  &&  qspFunc(s, 'money', 'can_afford', 8000) === 1  &&  ((s as any).pantyworntype ?? 0) !== 'none') {
          scene.actions([
            { label: 'Apologize', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + ((Math.floor(Math.random() * 6) + 10));
    qspCall(st, 'stat', '');
    scene.text('<center><b>Rolan the janitor</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanturn0.jpg');
    scene.text('You sit down next to him on a nearby bench. Rolan turns his head to the other side.');
    scene.actions([
      { label: 'Speak', handler: (st: GameState) => {
    (st as any).rolanapol = 0;
  }, goto: ['pav_complexrolan', 'friends'] },
    ]);
  } },
          ]);
        } else {
          if (((s as any).rolanblockhome ?? 0) === 1  &&  ((s as any).rolanapol ?? 0) >= 1  &&  ((s as any).rolanapol ?? 0) < 3) {
            scene.actions([
              { label: 'Apologize', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + ((Math.floor(Math.random() * 6) + 10));
    qspCall(st, 'stat', '');
    scene.text('<center><b>Rolan the janitor</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanturn0.jpg');
    scene.text('You sit down next to him on a nearby bench. Rolan turns his head to the other side.');
    scene.actions([
      { label: 'Speak', goto: ['pav_complexrolan', 'friends'] },
    ]);
  } },
            ]);
          }
        }
      }
      scene.actions([
        { label: 'Stop watching Rolan', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_complex', 'start'] },
        { label: 'Hide and snoop', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + ((Math.floor(Math.random() * 6) + 10));
    qspCall(st, 'stat', '');
    if ((Math.floor(Math.random() * 100) + 1) < 20) {
      scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/starting.jpg');
      scene.text('You hide behind a tree to see what Rolan is doing. He seems in bad condition, his whole body is shaking, maybe he needs help.');
      scene.actions([
        { label: 'look closer', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('He furiously moves his hand under the coat… "Mmmh… Guess he doesn\'t need help after all…"');
    scene.actions([
      { label: 'Move away', goto: ['pav_complex', 'start'] },
    ]);
  } },
        { label: 'Move away', goto: ['pav_complex', 'start'] },
      ]);
    } else {
      if ((Math.floor(Math.random() * 100) + 1) > 70) {
        scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/looking.jpg');
        scene.text('You hide behind a tree to see what Rolan is doing. He\'s looking around; maybe he has caught something interesting?');
        scene.actions([
          { label: 'look what has caught his attention', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('Looking closer, you see the reason for Rolan\'s interest… well… that\'s a good sight.');
    scene.actions([
      { label: 'Look', goto: ['pav_complexrolan', 'spy'] },
    ]);
  } },
          { label: 'Move away', goto: ['pav_complex', 'start'] },
        ]);
      } else {
        scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/feeding.jpg');
        scene.text('You hide behind a tree to see what Rolan is doing. "Oh crap, how old is he? To feed little birds and post photos of himself feeding them?"');
        scene.actions([
          { label: 'The good side of Rolan', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    if (((st as any).rolanpantyconfession ?? 0) !== 1) {
      scene.text('Well he\'s a good man after all…');
    } else {
      scene.text('Well maybe he\'s a good man after all… even though he steals panties…');
    }
    scene.actions([
      { label: 'Move away', goto: ['pav_complex', 'start'] },
    ]);
  } },
          { label: 'Move away', goto: ['pav_complex', 'start'] },
        ]);
      }
    }
  } },
      ]);
    } else {
      if (((s as any).sunWeather ?? 0) === 1  &&  (((s as any).RolanLoc ?? 0)?.[String((s as any).hour ?? 0)] !== 9  ||  ((s as any).RolanLoc ?? 0)?.[String((s as any).hour ?? 0)] !== 10)) {
        qspCall(s, 'stat', '');
        scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/benchs.jpg');
        scene.text('An old man sits on the bench. He\'s feeding some birds, which makes you wonder if this bench makes everyone want to feed birds.');
        scene.actions([
          { label: 'Move away', goto: ['pav_complex', 'start'] },
        ]);
      } else {
        qspCall(s, 'stat', '');
        scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/benchsrainy.jpg');
        scene.text('The large bench where Rolan usually sits. He spends time here to catch butterflies and appreciate nature when he can, in the late afternoons and evenings. However, due to the rain, Rolan isn\'t here right now.');
        scene.actions([
          { label: 'Move away', goto: ['pav_complex', 'start'] },
        ]);
      }
    }
  } else {
    if (((s as any).sunWeather ?? 0) === 1) {
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/benchw.jpg');
      scene.text('It\'s too cold to meet Rolan here. There\'s snow everywhere - someone should have cleaned the bench to sit on.');
      scene.actions([
        { label: 'Move away', goto: ['pav_complex', 'start'] },
      ]);
    } else {
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/benchws.jpg');
      scene.text('You didn\'t expect to see Rolan here.');
      scene.actions([
        { label: 'Move away', goto: ['pav_complex', 'start'] },
      ]);
    }
  }
  const arg = s.locArg;
  switch (arg) {
    case 'spy':
      enterSpy(s, scene);
      break;
    case 'friends':
      enterFriends(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pav_complexrolan: LocationDef = {
  name: 'pav_complexrolan',
  title: 'Rolan the janitor',
  region: 'pavlovsk',
  locationType: 'public_outdoors',
  enter: enter,
};
