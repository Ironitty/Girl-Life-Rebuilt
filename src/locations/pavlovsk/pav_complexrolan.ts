import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterSpy(s: GameState, scene: SceneBuilder): void {
  (s as any).len_rol_ler = 0;
  if ((!((s as any).len_rol_ler ?? 0))) {
  } else {
    if (((s as any).len_rol_ler ?? 0) === 1) {
    } else {
      if (((s as any).len_rol_ler ?? 0) === 2) {
      } else {
        if (((s as any).len_rol_ler ?? 0) === 3) {
        } else {
          if (((s as any).len_rol_ler ?? 0) === 4) {
          } else {
            if (((s as any).len_rol_ler ?? 0) === 5) {
            } else {
              if (((s as any).len_rol_ler ?? 0) === 6) {
              } else {
                if (((s as any).len_rol_ler ?? 0) === 7) {
                } else {
                  if (((s as any).len_rol_ler ?? 0) === 8) {
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
  // TODO-QSP: dynamic text: <br><<$court_imga>><br>
  scene.text(`<br>${((s as any).court_imga ?? 0)}<br>`);
  // TODO-QSP: dynamic text: <br><<$court_texta>><br>
  scene.text(`<br>${((s as any).court_texta ?? 0)}<br>`);
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur', 5);
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: <br><<$court_imgb>><br>
    scene.text(`<br>${((s as any).court_imgb ?? 0)}<br>`);
    // TODO-QSP: dynamic text: <br><<$court_textb>><br>
    scene.text(`<br>${((s as any).court_textb ?? 0)}<br>`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur', 5);
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: <br><<$court_imgc>><br>
    scene.text(`<br>${((s as any).court_imgc ?? 0)}<br>`);
    // TODO-QSP: dynamic text: <br><<$court_textc>><br>
    scene.text(`<br>${((s as any).court_textc ?? 0)}<br>`);
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
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanturncry.jpg');
    scene.text('"Mphhhf… I cannot believe you don\'t know what you\'ve done. You snoop around in my house and take whatever you want… and me… I allow you to wander around freely. You really don\'t know what you\'ve done? Well I\'ll tell you: you used my Babushka\'s ashes to repair the bath! Happy now? What else do you want to take from me? You have taken what was the most important thing to me and thrown it away!"');
    scene.text('"I-I… I can\'t believe it, if only I knew… I never would have used them… you have to believe me…"');
    scene.text('"…I\'m orthodox and cremation is not allowed. But I didn\'t have the money for a burial, and I couldn\'t just leave Babushka to be thrown away. I believe you, it was an accident… but that\'s not the point. You shouldn\'t snoop around someone else\'s house. That\'s not polite. And… and… oh Babushka what have I done… why didn\'t I take care of you? You were everything to me…" Rolan starts crying in agony.');
    scene.actions([
      { label: 'Cheer him up', handler: (st: GameState) => {
    qspCall(s, 'money', 'pay', 8000);
    qspCall(s, 'stat', '');
    qspCall(s, 'panties', 'dispose');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanapolgift.jpg');
    scene.text('"…Rolan, here… take this to dry your tears… I know you like them, and I don\'t have any wipes. You can have them, I\'ve got a bunch."');
    // TODO-QSP: dynamic text: "Miss <<$pcs_lastname>>… I think it's time for me to make my apologies. I was ex...
    scene.text(`"Miss ${((s as any).pcs_lastname ?? 0)}… I think it's time for me to make my apologies. I was extremely rude to kick you out of my house in that way…"`);
    scene.text('"Oh Rolan there\'s no need… I would have done the same if I were in your position"');
    // TODO-QSP: dynamic text: "Miss <<$pcs_lastname>>… please, let me finish. It's not for everybody to unders...
    scene.text(`"Miss ${((s as any).pcs_lastname ?? 0)}… please, let me finish. It's not for everybody to understand people's habits and to not judge them, but you can. That's the reason why my door will always be open for you. Please, would you be so kind as to accept my apologies?"`);
    scene.text('"Oh Rolan I\'m the one who has to apologise! I\'m very happy to spend some time with you like before. Just… take these. I can\'t give you Babushka back, however I try, but you can recruit some workers to restore the vessel."');
    // TODO-QSP: dynamic text: "Miss <<$pcs_lastname>>…
    scene.text(`"Miss ${((s as any).pcs_lastname ?? 0)}…`);
    scene.actions([
      { label: 'Say goodbye', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).rolanblockhome = 0;
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
    qspCall(s, 'money', 'pay', 8000);
    (s as any).rolanapol = 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanturncry.jpg');
    scene.text('…Rolan, broken inside, says: "Witch! You have stolen my Babushka and put her ashes into my bath!"');
    scene.text('You can\'t believe what you have heard. "But… but…"');
    scene.text('"…Before you ask your stupid question, I\'m orthodox and cremation is not allowed. But I haven\'t got enough money for a burial and I couldn\'t just leave Babushka to be thrown away."');
    scene.text('"…I\'m sorry Rolan… I never could have imagined… I\'m so sorry Rolan, I don\'t know what to do… Here take this money, it won\'t give you Babushka back, but you can recruit some workers to restore the vessel. If only I knew, I never would have used the powder, you have to believe me."');
    scene.text('"I appreciate your effort, but that doesn\'t change things. You could have asked, but you didn\'t. You should learn what\'s yours and what\'s not." He turns and fixes you with a hard stare. "Give me your panties."');
    scene.text('…');
    scene.actions([
      { label: 'Give them', handler: (st: GameState) => {
    (s as any).rolanapol = 2;
    qspCall(s, 'stat', '');
    qspCall(s, 'panties', 'dispose');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanapol0.jpg');
    scene.text('"O-OK… I think I\'ve learned my lesson…"');
    scene.text('"No you didn\'t. You shouldn\'t snoop around to take things that aren\'t yours, and that you know nothing about. You need to learn a harder lesson than this. Now bend over."');
    scene.text('…');
    scene.actions([
      { label: 'Bend', handler: (st: GameState) => {
    (s as any).rolanapol = 3;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanapol1.jpg');
    scene.text('You bend and give Rolan access to your bare ass.');
    // TODO-QSP: dynamic text: It will hurt <<$pcs_lastname>>, clench your teeth.
    scene.text(`It will hurt ${((s as any).pcs_lastname ?? 0)}, clench your teeth.`);
    scene.actions([
      { label: 'Ouch', handler: (st: GameState) => {
    qspCall(s, 'pain', '', 5, 'asscheeks', 'spank');
    qspCall(s, 'stat', '');
    ((s as any).pain ?? {})['asscheeks'] = (((s as any).pain ?? {})['asscheeks'] ?? 0) + (30);
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanapol2.jpg');
    scene.text('Rolan starts beating your bare butt. There\'s no lust in his beating, but you can\'t say the same about anger…');
    scene.actions([
      { label: 'It hurts!', handler: (st: GameState) => {
    qspCall(s, 'pain', '', 5, 'asscheeks', 'spank');
    qspCall(s, 'stat', '');
    ((s as any).pain ?? {})['asscheeks'] = (((s as any).pain ?? {})['asscheeks'] ?? 0) + (30);
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanapol3.jpg');
    scene.text('Your ass is red and painful, you are close to crying');
    scene.text('"I\'m sorry Rolan… I\'ve learned my lesson!"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).rolanblockhome = 0;
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanturncry.jpg');
    // TODO-QSP: dynamic text: "I'm sorry too Miss <<$pcs_lastname>>. I wish this wasn't necessary, but I'm sur...
    scene.text(`"I'm sorry too Miss ${((s as any).pcs_lastname ?? 0)}. I wish this wasn't necessary, but I'm sure you have learned your lesson.`);
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
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolangiveme.jpg');
    scene.text('"There\'s no other way."');
    scene.actions([
      { label: 'Move away', goto: ['pav_complex', 'start'] },
    ]);
  } },
    ]);
  } },
      { label: 'What?', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
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
    (s as any).rolanapol = 2;
    qspCall(s, 'stat', '');
    qspCall(s, 'panties', 'dispose');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanapol0.jpg');
    scene.text('"…O-OK… I think I\'ve learned my lesson"');
    scene.text('"No you haven\'t. You shouldn\'t snoop around to take things that aren\'t yours, and that you know nothing about. You need to learn a harder lesson than this. Now bend over."');
    scene.text('…');
    scene.actions([
      { label: 'Bend', handler: (st: GameState) => {
    (s as any).rolanapol = 3;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanapol1.jpg');
    scene.text('You bend and give Rolan access to your bare ass.');
    // TODO-QSP: dynamic text: It will hurt <<$pcs_lastname>>, clench your teeth.
    scene.text(`It will hurt ${((s as any).pcs_lastname ?? 0)}, clench your teeth.`);
    scene.actions([
      { label: 'ouch', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    ((s as any).pain ?? {})['asscheeks'] = (((s as any).pain ?? {})['asscheeks'] ?? 0) + (30);
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanapol2.jpg');
    scene.text('Rolan start beating your bare butt. There\'s no lust in his beating, but you can\'t say the same about anger…');
    scene.actions([
      { label: 'It hurts!', handler: (st: GameState) => {
    qspCall(s, 'pain', '', 5, 'asscheeks', 'spank');
    qspCall(s, 'stat', '');
    ((s as any).pain ?? {})['asscheeks'] = (((s as any).pain ?? {})['asscheeks'] ?? 0) + (30);
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanapol3.jpg');
    scene.text('Your ass is red and painful, you are close to crying');
    scene.text('"I\'m sorry Rolan… I\'ve learned my lesson!"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'pain', '', 5, 'asscheeks', 'spank');
    qspCall(s, 'stat', '');
    (s as any).rolanblockhome = 0;
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanturncry.jpg');
    // TODO-QSP: dynamic text: "I'm sorry too Miss <<$pcs_lastname>>. I wish this wasn't necessary, but I'm sur...
    scene.text(`"I'm sorry too Miss ${((s as any).pcs_lastname ?? 0)}. I wish this wasn't necessary, but I'm sure you have learned your lesson.`);
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
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolangiveme.jpg');
    scene.text('"There\'s no other way."');
    scene.actions([
      { label: 'Move away', goto: ['pav_complex', 'start'] },
    ]);
  } },
    ]);
  } },
          { label: 'What?', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
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
    (s as any).rolanapol = 3;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanapol1.jpg');
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.text('You bend and Rolan lift your skirt, then he pull down your panties to have full access to your bare ass.');
      // TODO-QSP: dynamic text: It will hurt <<$pcs_lastname>>, clench your teeth.
      scene.text(`It will hurt ${((s as any).pcs_lastname ?? 0)}, clench your teeth.`);
    } else {
      scene.text('You bend and give Rolan access to your bare ass.');
      // TODO-QSP: dynamic text: It will hurt <<$pcs_lastname>>, clench your teeth.
      scene.text(`It will hurt ${((s as any).pcs_lastname ?? 0)}, clench your teeth.`);
    }
    scene.actions([
      { label: 'Ouch', handler: (st: GameState) => {
    qspCall(s, 'pain', '', 5, 'asscheeks', 'spank');
    qspCall(s, 'stat', '');
    ((s as any).pain ?? {})['asscheeks'] = (((s as any).pain ?? {})['asscheeks'] ?? 0) + (30);
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanapol2.jpg');
    scene.text('Rolan start beating your bare butt. There\'s no lust in his beating, but you can\'t say the same about anger…');
    scene.actions([
      { label: 'It hurts!', handler: (st: GameState) => {
    qspCall(s, 'pain', '', 5, 'asscheeks', 'spank');
    qspCall(s, 'stat', '');
    ((s as any).pain ?? {})['asscheeks'] = (((s as any).pain ?? {})['asscheeks'] ?? 0) + (30);
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanapol3.jpg');
    scene.text('Your ass is red and painful, you are close to crying.');
    scene.text('"I\'m sorry Rolan… I\'ve learned my lesson!"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).rolanblockhome = 0;
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanturncry.jpg');
    // TODO-QSP: dynamic text: "I'm sorry too Miss <<$pcs_lastname>>. I wish this wasn't necessary, but I'm sur...
    scene.text(`"I'm sorry too Miss ${((s as any).pcs_lastname ?? 0)}. I wish this wasn't necessary, but I'm sure you have learned your lesson.`);
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
    qspCall(s, 'stat', '');
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
  const arg = s.locArg;
  switch (arg) {
    case 'spy':
      enterSpy(s, scene);
      break;
    case 'friends':
      enterFriends(s, scene);
      break;
    default:
      enterSpy(s, scene);
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
