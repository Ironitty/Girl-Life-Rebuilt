import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  ((s as any).camGirl = (s as any).camGirl ?? {})['MFC_lastrequest'] = ((s as any).totminut ?? 0);
  qspCall(s, 'stat', '');
  if (Number((s as any).locArgs?.[0] ?? 0) === 80) {
    scene.text('When one of your loyal viewers speaks up, you feel a weird knot in your throat. He\'s usually making rather insensitive comments and seems to enjoy watching you squirm, but he pays well.');
    scene.text('"I want to really see you suffer today", he types. "I\'ll give you a lot of tokens if you do this, but it will hurt: Find a hook and stick it inside your cunt. Then puncture your perineum with it, so it comes out your anus again."');
    qspCall(s, 'willpower', 'exhib', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Ignore him', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Ignore him', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspGoto(st, 'komp_cam_MFC_main', 'waitclients');
  } },
      ]);
    }
    scene.actions([
      { label: 'Do', handler: (st: GameState) => {
    qspCall(st, 'komp_cam_functions', 'camming', 15, 'fetish', 'request');
    scene.img('images/pc/items/accessories/computer/camwhore83.jpg');
    scene.text('You are afraid in anticipation of pain, what promises such an extreme, but the thirst for stronger tokens, so you agree and digging on the balcony, soon find what you need…');
    scene.text('Standing on all fours, you gently put the tip of his pussy, feeling, as he painfully begins to push against the thin wall between the vagina and the rectum.');
    scene.text('The alcohol in the blood is slightly dulls the pain, but not so, how would you like, so you, painfully biting her lip, slowly continue to push…');
    scene.text('The tears streaming squirt from the eye, when you finally protegee thin skin, but the torment is not over and you remember, for, to get the tokens, you also need to remove the hook out of your ass.');
    scene.text('Therefore, quietly squealing and whining with his hand, you slowly and sotorage bend hook, until finally not feel, as he rests against the inside ring of the anus.');
    scene.text('You push hard and in a minute you all-did manage to do it  - a bloody piece of metal comes out of your ass.');
    scene.text('A sharp pain was replaced by a dull and aching, but when you started to get this thing back, everything has changed - it was painful as well, as then, when you have it stuffed in.');
    scene.text('A couple of minutes you finally pulled out of his embattled hell holes hook and crying, completely forgetting about the crowd of screaming spectators, promised myself never to repeat such…');
    if (((st as any).vgape ?? 0) < 3) {
      (st as any).vgape = 3;
    }
    if (((st as any).agape ?? 0) < 3) {
      (st as any).agape = 3;
    }
    qspCall(st, 'stat', '');
    if (((st as any).camGirl ?? 0)?.['MFC_donate_message'] !== '') {
      // TODO-QSP: $camGirl['MFC_donate_message']
    }
    scene.actions([
      { label: 'Further', goto: ['komp_cam_MFC_main', 'waitclients'] },
    ]);
  } },
    ]);
  } else {
    if (Number((s as any).locArgs?.[0] ?? 0) === 81) {
      scene.text('One of the regulars says: "I\'ve always been curious what the inside of a girl\'s ass looks like. How about you show me? I\'ve got a bunch of tokens with your name on it! ;)"');
      qspCall(s, 'willpower', 'exhib', 'resist', 'hard');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Ignore him', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Ignore him', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspGoto(st, 'komp_cam_MFC_main', 'waitclients');
  } },
        ]);
      }
      scene.actions([
        { label: 'Do', handler: (st: GameState) => {
    qspCall(st, 'komp_cam_functions', 'camming', 5, 'porn', 'request');
    scene.img('images/pc/items/accessories/computer/camwhore82,' + (Math.floor(Math.random() * 10) + 0) + '.jpg');
    scene.text('That request sounds simple enough! You dutifully turn your back to the computer and slip two fingers inside your well-used ass, carefully pulling your asshole open.');
    scene.text('"More! We want to see more!" the chat encourages you, and you smile obediently while you do as they ask, pulling your sphincter wide open. The promises of donations make you go through with it, even when you feel a cool breeze in your rectum.');
    scene.text('The pain in your ass is unbearable for a while, but the viewer is true to his word. He donates a decent amount of tokens and lets you know that he hopes to meet an anal queen like you one day. You\'re not sure if you can carry on with your show, though… that hurt a lot more than you thought it would.');
    if (((st as any).agape ?? 0) < 2) {
      (st as any).agape = 2;
    }
    qspCall(st, 'arousal_funcs', 'stretch', 'anal', 1);
    qspCall(st, 'stat', '');
    if (((st as any).camGirl ?? 0)?.['MFC_donate_message'] !== '') {
      // TODO-QSP: $camGirl['MFC_donate_message']
    }
    scene.actions([
      { label: 'Continue', goto: ['komp_cam_MFC_main', 'waitclients'] },
    ]);
  } },
      ]);
    } else {
      if (Number((s as any).locArgs?.[0] ?? 0) === 82) {
        scene.text('One of the regulars asks: "You know, I really love it when girls stick something in their urethra! Could you do that for me? It doesn\'t have to be big!"');
        qspCall(s, 'willpower', 'exhib', 'resist', 'hard');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Ignore him', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Ignore him', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspGoto(st, 'komp_cam_MFC_main', 'waitclients');
  } },
          ]);
        }
        scene.actions([
          { label: 'Do as he asks', handler: (st: GameState) => {
    qspCall(st, 'komp_cam_functions', 'camming', 10, 'fetish', 'request');
    scene.img('images/pc/items/accessories/computer/camwhore81.jpg');
    scene.text('Kind of a strange request, but… okay. You won\'t get a following if you refuse to do what your viewers want to see. "One moment, I\'ll go find something!" you let him know, and quickly run to the bathroom. You look around and see your toothbrush. The handle is not particularly thick, that should work! You\'re definitely wrapping a condom around it first though… you\'re brushing your teeth with that later, ew!');
    scene.text('You return to your chair with the condom-clad toothbrush, and slowly begin to push it inside your urethra. It hurts a lot more than you thought it would, but to the delight of your audience you don\'t back out and slowly carry on.');
    scene.text('When it\'s in, you slowly pretend that you\'re fucking yourself with it, even though it\'s more your hips and hands moving than you actually moving the toothbrush. That would hurt like hell! You carefully pull the toothbrush out again, wincing with pain the whole time. Next time someone asks you to do that, you might not be so eager to do it any more… no matter how many tokens they offer.');
    if (((st as any).vgape ?? 0) < 3) {
      (st as any).vgape = 3;
    }
    qspCall(st, 'stat', '');
    if (((st as any).camGirl ?? 0)?.['MFC_donate_message'] !== '') {
      // TODO-QSP: $camGirl['MFC_donate_message']
    }
    scene.actions([
      { label: 'Further', goto: ['komp_cam_MFC_main', 'waitclients'] },
    ]);
  } },
        ]);
      } else {
        if (Number((s as any).locArgs?.[0] ?? 0) === 83) {
          scene.text('One of the viewers asks you: "Fuck yourself with something! But not a dildo… be creative! Use your imagination and surprise us!"');
          qspCall(s, 'willpower', 'exhib', 'resist', 'hard');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Ignore him', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Ignore him', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspGoto(st, 'komp_cam_MFC_main', 'waitclients');
  } },
            ]);
          }
          scene.actions([
            { label: 'Use the wooden knob on your bed', handler: (st: GameState) => {
    qspCall(st, 'komp_cam_functions', 'camming', 5, 'porn', 'request');
    qspCall(st, 'npcStat', 'D3');
    if (((st as any).pcs_horny ?? 0) >= 95) {
      scene.img('images/pc/items/accessories/computer/camwhore78.jpg');
      scene.text('You look around quickly and see the wooden knobs on your bed. Those look kinda phallic… should work!');
      scene.text('After you spit on your fingers and coat it with saliva, you carefully rest the tip of the wooden knob against your labia and lower yourself down onto it, feeling how it stretches you nicely.');
      (st as any).orgasm_txt = 'It hurts a little, but you\'re too horny to care right now. You could get off on this! Shortly after you begin humping the wooden knob, you reach a loud orgasm. Your legs have some issues carrying your weight and the knob presses far inside your pussy when you fall, pressing against your uterus uncomfortably. Ouch! You quickly get off it and rub your sore snatch while you sigh… other than that moment, it felt nice!';
      (st as any).orgasm_or = 'custom';
    } else {
      scene.img('images/pc/items/accessories/computer/camwhore77.jpg');
      scene.text('You look around quickly and see the wooden knobs on your bed. Those look kinda phallic… should work!');
      scene.text('After you spit on your fingers and coat it with saliva, you carefully rest the tip of the wooden knob against your labia and lower yourself down onto it, feeling how it stretches you nicely.');
      scene.text('Despite the nice feeling of fullness it provides, it\'s not enough to reach an orgasm right now. You make an effort of riding the wooden knob for a little while, but have to stop when your vagina hurts too much to continue.');
      (st as any).orgasm_or = 'no';
    }
    qspCall(st, 'arousal', 'vaginal_dildo', (-5), 'dick_length', 'masturbation');
    qspCall(st, 'stat', '');
    if (((st as any).camGirl ?? 0)?.['MFC_donate_message'] !== '') {
      // TODO-QSP: $camGirl['MFC_donate_message']
    }
    scene.actions([
      { label: 'Continue', goto: ['komp_cam_MFC_main', 'waitclients'] },
    ]);
  } },
          ]);
        } else {
          if (Number((s as any).locArgs?.[0] ?? 0) === 84) {
            if (((s as any).pcs_vag ?? 0) >= ((s as any).pcs_ass ?? 0)) {
              scene.text('One of the viewers, noticing how drunk you are, asks in chat: "How much would it take for you to shove a bottle in your vagina and fuck yourself with it? That would be so hot…"');
            } else {
              scene.text('One of the viewers, noticing how drunk you are, asks in chat: "How much would it take for you to shove a bottle in your ass and fuck yourself with it? That would be so hot…"');
            }
            scene.actions([
              { label: 'Go find a bottle', handler: (st: GameState) => {
    qspCall(st, 'komp_cam_functions', 'camming', 10, 'porn', 'request');
    qspCall(st, 'npcStat', 'D7');
    if (((st as any).pcs_vag ?? 0) >= ((st as any).pcs_ass ?? 0)) {
      scene.img('images/pc/items/accessories/computer/camwhore75.jpg');
      scene.text('"The customer is king, right?" you smile sweetly at him, and apologize for a second while you quickly go look for a bottle.');
      scene.text('You find one in the kitchen, it\'s a two liter bottle of mineral water. When you return to your computer you hesitate for a second… isn\'t this too big?');
      scene.text('The alcohol and the chat convince you otherwise, and you try to squirm yourself around the bottle, forcing it inside you. You get it in!');
      scene.text('You push the bottle inside a bit further but have to rest your hand against the wall to support yourself, the bottle inside you is huge and it feels very uncomfortable to stand normally.');
      scene.text('You leave the bottle in for a little while and slowly bob your hips up and down until it falls out from its own weight, leaving your vagina a huge gaping hole for your viewers to enjoy.');
      scene.text('The chat is one huge stream of comments and emoticons now, and you receive several donations in quick succession. Too bad they won\'t help you sit, because that\'s going to be painful for a while!');
      qspCall(st, 'arousal', 'vaginal_dildo', (-10), 'dick_length', 'masturbation');
    } else {
      scene.img('images/pc/items/accessories/computer/camwhore76.jpg');
      scene.text('"The customer is king, right?" you smile sweetly at him, and apologize for a second while you quickly go look for a bottle.');
      scene.text('You find one in the kitchen, it\'s a two liter bottle of mineral water. When you return to your computer you hesitate for a second… isn\'t this too big?');
      scene.text('The alcohol and the chat convince you otherwise, and you try to squirm yourself around the bottle, forcing it inside you. You get it in!');
      scene.text('You push the bottle inside a bit further but have to rest your hand on the couch to support yourself, the bottle inside you is huge and it feels very uncomfortable to stand normally.');
      scene.text('You leave the bottle in for a little while and slowly bob your hips up and down. The bottle is lodged quite firmly inside you and doesn\'t weigh much, so it doesn\'t come out until you pull it out very slowly, leaving your ass a huge gaping hole for your viewers to enjoy.');
      scene.text('The chat is one huge stream of comments and emoticons now, and you receive several donations in quick succession. Too bad they won\'t help you sit, because that\'s going to be painful for a while!');
      qspCall(st, 'arousal', 'anal_dildo', (-10), 'dick_length', 'masturbation');
    }
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) - ((Math.floor(Math.random() * 11) + 10));
    qspCall(st, 'stat', '');
    if (((st as any).camGirl ?? 0)?.['MFC_donate_message'] !== '') {
      // TODO-QSP: $camGirl['MFC_donate_message']
    }
    scene.actions([
      { label: 'Continue', goto: ['komp_cam_MFC_main', 'waitclients'] },
    ]);
  } },
            ]);
          } else {
            if (Number((s as any).locArgs?.[0] ?? 0) === 85) {
              // TODO-QSP: dynamic text: One of the viewers, noticing how drunk you are, asks in chat: "Hey, <<$pcs_nickn...
              scene.text(`One of the viewers, noticing how drunk you are, asks in chat: "Hey, ${((s as any).pcs_nickname || '')}! Show us something unusual! Anything!"`);
              (s as any).temp = qspUntranslated(s, "arrpos('sparrloc', 0)", { location: "komp_cam_MFC_requests_two" });
              if (((s as any).sparrvol ?? 0)?.[String((s as any).temp ?? 0)] > 0  &&  ((s as any).temp ?? 0) >= 0) {
                ((s as any).temp = (s as any).temp ?? {})[1] = 1;
              }
              (s as any).temp = qspUntranslated(s, "arrpos('sparrloc', 1)", { location: "komp_cam_MFC_requests_two" });
              if (((s as any).sparrvol ?? 0)?.[String((s as any).temp ?? 0)] > 0  &&  ((s as any).temp ?? 0) >= 0) {
                ((s as any).temp = (s as any).temp ?? {})[1] = 1;
              }
              if (((s as any).temp ?? 0)[1] > 0) {
                scene.actions([
                  { label: 'Shock them', handler: (st: GameState) => {
    qspCall(st, 'komp_cam_functions', 'camming', 3, 'porn', 'request');
    qspCall(st, 'stat', '');
    scene.img('images/pc/items/accessories/computer/camwhore73.jpg');
    scene.text('Without hesitation, you give the camera confident smirk. You\'ll show them something unusual alright!');
    scene.text('Grabbing the camera, you guide it to your crotch and pull your pussy lips aside with your fingers.');
    scene.text('"I erm… I have a little secret, guys", you whisper, and slowly let some sperm trickle out of your pussy.');
    scene.text('The chat goes wild, awarding you with numerous comments on how they wish that was their load, and are a tad surprised when you even receive a few donations.');
    if (((st as any).camGirl ?? 0)?.['MFC_donate_message'] !== '') {
      // TODO-QSP: $camGirl['MFC_donate_message']
    }
    scene.actions([
      { label: 'Continue', goto: ['komp_cam_MFC_main', 'waitclients'] },
    ]);
  } },
                ]);
              } else {
                if (((s as any).tits ?? 0) >= 1) {
                  scene.actions([
                    { label: 'Bind your breasts with whatever you can find', handler: (st: GameState) => {
    qspCall(st, 'komp_cam_functions', 'camming', 10, 'fetish', 'request');
    if (((st as any).braworntype ?? 0) !== 'none') {
      qspCall(st, 'bras', 'remove');
    }
    if (((st as any).alko ?? 0) >= 10) {
      scene.img('images/pc/items/accessories/computer/camwhore63.jpg');
      scene.text('In your drunken stupor you find some rope and begin to bind your breasts, using the helpful advice of the chat to guide you.');
      scene.text('Your senses have been dulled quite a lot by the excessive amount of alcohol you drank, and you only realize minutes later that you bound your breasts way too tight! It hurts so bad!');
      scene.text('You quickly untie your tortured boobs, while the chat is laughing at how stupid that was of you. A few of them feel bad for misguiding you though, and donate some tokens to try and cheer you up.');
    } else {
      if (((st as any).tits ?? 0) === 2) {
        (st as any).img_source = 63;
      } else {
        if (((st as any).tits ?? 0) === 3) {
          (st as any).img_source = 65;
        } else {
          if (((st as any).tits ?? 0) === 4) {
            (st as any).img_source = 66;
          } else {
            if (((st as any).tits ?? 0) === 5) {
              if (((st as any).pcs_piercings ?? 0)?.['nipples'] === 1) {
                (st as any).img_source = 68;
              } else {
                (st as any).img_source = 67;
              }
            } else {
              if (((st as any).tits ?? 0) >= 6) {
                (st as any).img_source = 69;
              }
            }
          }
        }
      }
      scene.img('images/pc/items/accessories/computer/camwhore' + ((st as any).img_source || '') + '.jpg');
      scene.text('In your drunken stupor you find some rope and rubber bands and begin to bind your breasts, using the helpful advice of the chat to guide you.');
      scene.text('Your senses have been dulled by the excessive amount of alcohol you drank, but you\'re still conscious enough to make sure you don\'t bind your breasts too tightly.');
      scene.text('A few minutes later you decide your poor boobs have had enough, and untie them again. Your chat enjoyed seeing you like that, and you receive a few donations while you carefully rub some feeling back into your tingling breasts.');
    }
    qspCall(st, 'arousal', 'BDSM', (-10), 'maso');
    qspCall(st, 'pain', '', ((((st as any).alko ?? 0) >= 10) ? (4) : (2)), 'pinch', 'nipples');
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) - ((Math.floor(Math.random() * 11) + 10));
    qspCall(st, 'stat', '');
    if (((st as any).camGirl ?? 0)?.['MFC_donate_message'] !== '') {
      // TODO-QSP: $camGirl['MFC_donate_message']
    }
    scene.actions([
      { label: 'Continue', goto: ['komp_cam_MFC_main', 'waitclients'] },
    ]);
  } },
                  ]);
                } else {
                  scene.actions([
                    { label: 'Play with your pussy', handler: (st: GameState) => {
    if (((st as any).pantyworntype ?? 0) !== 'none') {
      qspCall(st, 'panties', 'remove');
    }
    if (((st as any).pcs_vag ?? 0) < 15) {
      qspCall(st, 'komp_cam_functions', 'camming', 10, 'fetish', 'request');
      scene.img('images/pc/items/accessories/computer/camwhore70.jpg');
      scene.text('In your drunken stupor you find some rope and tightly bind it around your clitoris, making it stand out strongly for the camera. It\'s very sensitive and even hurts a bit, but the chat roars when you pull the ends of the rope hard, pulling the loop around your clit even tighter.');
      scene.text('It hurts quite a lot, but the alcohol and approving comments in chat give you enough courage to soldier through the pain for a little while. Eventually it becomes too much though, and you have to give up.');
      qspCall(st, 'arousal', 'BDSM', (-10), 'maso');
    } else {
      if (((st as any).pcs_ass ?? 0) < 15) {
        qspCall(st, 'komp_cam_functions', 'camming', 10, 'fetish', 'request');
        qspCall(st, 'npcStat', 'D5');
        scene.img('images/pc/items/accessories/computer/camwhore71.jpg');
        scene.text('"Erm… okay, hold on just one moment!" you smile at the camera and quickly go through your house, trying to find something that would impress him. Unable to find anything better, you come back with a shoe.');
        scene.text('You thrust the shoe inside your pussy and begin to fuck yourself with it, but find out fast that this was a terrible idea. The dirty soles still had some sand on them, which grates against your bare pussy horribly. Much to the disappointment of your chat you have to stop. They enjoyed it though, giving you a few tokens while you sit down on your chair again with a painful grimace on your face.');
        qspCall(st, 'arousal', 'vaginal_dildo', (-10), 'dick_length', 'masturbation');
      } else {
        qspCall(st, 'komp_cam_functions', 'camming', 10, 'porn', 'request');
        qspCall(st, 'npcStat', 'D4');
        scene.img('images/pc/items/accessories/computer/camwhore72.jpg');
        scene.text('"Erm… okay, hold on just one moment!" you smile at the camera and quickly go through your house, trying to find something that would impress him. In your kitchen you find something that will work just fine - two cucumbers!');
        scene.text('You drunkenly mutter something into the camera and turn your back to it, as you guide the two cucumbers to your holes and shove them in unceremoniously.');
        scene.text('You didn\'t even wash them first! Their uneven surface and the lack of lubrication makes fucking yourself with them very painful, and it\'s not long before you force yourself to stop. The viewers enjoyed it though, giving you a few tokens while you sit down on your chair again with a painful grimace on your face.');
        qspCall(st, 'arousal', 'vaginal_dildo', (-5), 'dick_length', 'masturbation');
        qspCall(st, 'arousal', 'anal_dildo', (-5), 'dick_length', 'masturbation');
      }
    }
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) - ((Math.floor(Math.random() * 11) + 10));
    qspCall(st, 'stat', '');
    if (((st as any).camGirl ?? 0)?.['MFC_donate_message'] !== '') {
      // TODO-QSP: $camGirl['MFC_donate_message']
    }
    scene.actions([
      { label: 'Continue', goto: ['komp_cam_MFC_main', 'waitclients'] },
    ]);
  } },
                  ]);
                }
                scene.actions([
                  { label: 'Play hide-the-panties', handler: (st: GameState) => {
    qspCall(st, 'komp_cam_functions', 'camming', 5, 'porn', 'request');
    if (((st as any).pcs_vag ?? 0) >= ((st as any).pcs_ass ?? 0)) {
      scene.img('images/pc/items/accessories/computer/camwhore62.jpg');
      if (((st as any).pantyworntype ?? 0) !== 'none') {
        qspCall(st, 'panties', 'remove');
        scene.text('"You guys want to see a magic trick? Then I, the great Girldini, will make something disappear!" you giggle drunkenly at the camera and quickly slide your panties down your legs.');
      } else {
        scene.text('"You guys want to see a magic trick? Then I, the great Girldini, will make something disappear! Wait, where\'d they go…" you giggle drunkenly at the camera and disappear from view for a second. You\'re looking for your panties, which you took off somewhere earlier during the session. Surely they\'re around here somewhere! "Ah, there they are!" you exclaim, leaving your chat in mystery as to what the hell you\'re doing right now.');
      }
      scene.text('With your back turned to the camera, you slowly begin to stuff them into your pussy. Your drunken hand-eye coordination leaves a lot to be desired, and you\'re quite rough with yourself when you shove your panties inside your vagina.');
      scene.text('"Ta-dah! All gone!" you laugh proudly, when they\'re inside you completely. The chat laughs with you, and you receive a few donations while you slowly pull the panties out again.');
      qspCall(st, 'arousal', 'anal_finger', (-5));
      if (((st as any).agape ?? 0) < 1) {
        (st as any).agape = 1;
      }
    } else {
      scene.img('images/pc/items/accessories/computer/camwhore61.jpg');
      if (((st as any).pantyworntype ?? 0) !== 'none') {
        qspCall(st, 'panties', 'remove');
        scene.text('"You guys want to see a magic trick? Then I, the great Girldini, will make something disappear!" you giggle drunkenly at the camera and quickly slide your panties down your legs.');
      } else {
        scene.text('"You guys want to see a magic trick? Then I, the great Girldini, will make something disappear! Wait, where\'d they go…" you giggle drunkenly at the camera and disappear from view for a second. You\'re looking for your panties, which you took off somewhere earlier during the session. Surely they\'re around here somewhere! "Ah, there they are!" you exclaim, leaving your chat in mystery as to what the hell you\'re doing right now.');
      }
      scene.text('With your back turned to the camera, you slowly begin to stuff them into your ass. Your drunken hand-eye coordination leaves a lot to be desired, and you\'re quite rough with yourself when you shove your panties past your sphincter.');
      scene.text('"Ta-dah! All gone!" you laugh proudly, when they\'re inside you completely. The chat laughs with you, and you receive a few donations while you slowly pull the panties out again.');
      qspCall(st, 'arousal', 'anal_finger', (-5));
      if (((st as any).vgape ?? 0) < 1) {
        (st as any).vgape = 1;
      }
    }
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) - ((Math.floor(Math.random() * 11) + 10));
    qspCall(st, 'stat', '');
    if (((st as any).camGirl ?? 0)?.['MFC_donate_message'] !== '') {
      // TODO-QSP: $camGirl['MFC_donate_message']
    }
    scene.actions([
      { label: 'Continue', goto: ['komp_cam_MFC_main', 'waitclients'] },
    ]);
  } },
                ]);
              }
            } else {
              if (Number((s as any).locArgs?.[0] ?? 0) === 86) {
                scene.text('One of the viewers, noticing how drunk you are, asks in chat: "How much would it take for you to shove a bottle in your vagina? That would be so hot…"');
                scene.text('You immediately jump up from your chair, forgetting to even ask for tokens. "I\'ll go get one! I don\'t normally do this, but… only today, and only for you!" you wink at the camera in a slightly slurry voice.');
                scene.actions([
                  { label: 'Go find a bottle', handler: (st: GameState) => {
    qspCall(st, 'komp_cam_functions', 'camming', 3, 'porn', 'request');
    qspCall(st, 'npcStat', 'D7');
    scene.img('images/pc/items/accessories/computer/camwhore60.jpg');
    scene.text('You rummage around in the kitchen for a moment, but don\'t find any bottles other than the one still in your fridge. You settle on a cold bottle of beer, and return to the living room where you proudly put it on your desk.');
    scene.text('You get comfortable in front of the camera and begin to shove the bottle inside you. The glass is cold and unyielding, but you\'re too drunk to care and keep trying out different angles until you finally manage to penetrate yourself with the bottom. Letting out a triumphant squeal, you push the bottle inside you as far as it will go and adjust your position a bit so everyone watching has a great view of your cunt being stretched out.');
    scene.text('After a while reality kicks in, and that reality is that the cold bottle really doesn\'t feel comfortable inside your snatch! Nevertheless, your viewers loved it and sing your praises when you slowly let the bottle slide out of your stretched pussy and crack the bottle open.');
    qspCall(st, 'arousal', 'vaginal_dildo', (-3), 'dick_length', 'masturbation');
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) - ((Math.floor(Math.random() * 11) + 10));
    qspCall(st, 'stat', '');
    if (((st as any).camGirl ?? 0)?.['MFC_donate_message'] !== '') {
      // TODO-QSP: $camGirl['MFC_donate_message']
    }
    scene.actions([
      { label: 'Further', goto: ['komp_cam_MFC_main', 'waitclients'] },
    ]);
  } },
                ]);
              } else {
                if (Number((s as any).locArgs?.[0] ?? 0) === 87) {
                  scene.text('One of the viewers challenges you: "Put something in your vagina. Anything. Impress me."');
                  qspCall(s, 'willpower', 'exhib', 'resist', 'hard');
                  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                    scene.actions([
                      { label: 'Ignore him', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                    ]);
                  } else {
                    scene.actions([
                      { label: 'Ignore him', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspGoto(st, 'komp_cam_MFC_main', 'waitclients');
  } },
                    ]);
                  }
                  scene.actions([
                    { label: 'Find something to put inside you', handler: (st: GameState) => {
    qspCall(st, 'komp_cam_functions', 'camming', 3, 'porn', 'request');
    qspCall(st, 'npcStat', 'D5');
    scene.img('images/pc/items/accessories/computer/camwhore59.jpg');
    scene.text('"Erm… okay, hold on just one moment!" you smile at the camera and quickly go through your house, trying to find something that would impress him.');
    scene.text('You return to your computer holding two objects: a remote control and a small bottle. Just when the people in the chat were about to suggest their preference, you silence them by sticking the bottle inside you first and then adding the remote too. That\'s right, you do both!');
    scene.text('The chat is very impressed with your eagerness to please, and makes several lewd comments on what a good slut you are. You wiggle your hips at them for a moment before retrieving the objects and setting them aside.');
    qspCall(st, 'arousal', 'vaginal_dildo', (-3), 'dick_length', 'masturbation');
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + ((Math.floor(Math.random() * 6) + 5));
    qspCall(st, 'stat', '');
    if (((st as any).camGirl ?? 0)?.['MFC_donate_message'] !== '') {
      // TODO-QSP: $camGirl['MFC_donate_message']
    }
    scene.actions([
      { label: 'Continue', goto: ['komp_cam_MFC_main', 'waitclients'] },
    ]);
  } },
                  ]);
                } else {
                  if (Number((s as any).locArgs?.[0] ?? 0) === 88) {
                    scene.text('One of the viewers has a rather unusual request: "Time for you to quiet down for a while! Gag yourself by putting your panties into your mouth…"');
                    qspCall(s, 'willpower', 'exhib', 'resist', 'hard');
                    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                      scene.actions([
                        { label: 'Ignore him', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                      ]);
                    } else {
                      scene.actions([
                        { label: 'Ignore him', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspGoto(st, 'komp_cam_MFC_main', 'waitclients');
  } },
                      ]);
                    }
                    scene.actions([
                      { label: 'Do as he asks', handler: (st: GameState) => {
    qspCall(st, 'komp_cam_functions', 'camming', 3, 'fetish', 'request');
    if (((st as any).pantyworntype ?? 0) !== 'none') {
      qspCall(st, 'panties', 'remove');
      scene.img('images/pc/items/accessories/computer/camwhore58.jpg');
      scene.text('You smile at the camera and slide your panties down your legs, stuffing them in your mouth dutifully. You try to say something to the chat but only manage to produce some muffled sounds, much to the enjoyment of your viewers. "Haha, what a slut! That\'s the way she should be!" everyone laughs, belittling you with their degrading comments.');
    } else {
      scene.img('images/pc/items/accessories/computer/camwhore58.jpg');
      scene.text('You smile at the camera and find the panties that you had already taken off somewhere nearby, stuffing them in your mouth dutifully. You try to say something to the chat but only manage to produce some muffled sounds, much to the enjoyment of your viewers. "Haha, what a slut! That\'s the way she should be!" everyone laughs, belittling you with their degrading comments.');
    }
    qspCall(st, 'arousal', 'BDSM', (-3), 'humiliation');
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) - ((Math.floor(Math.random() * 6) + 5));
    qspCall(st, 'stat', '');
    if (((st as any).camGirl ?? 0)?.['MFC_donate_message'] !== '') {
      // TODO-QSP: $camGirl['MFC_donate_message']
    }
    scene.actions([
      { label: 'Continue', goto: ['komp_cam_MFC_main', 'waitclients'] },
    ]);
  } },
                    ]);
                  } else {
                    if (Number((s as any).locArgs?.[0] ?? 0) === 89) {
                      scene.text('One of the viewers makes several comments on how badly he wants to fuck your ass, and then offers you tokens to show your asshole to him…');
                      qspCall(s, 'willpower', 'exhib', 'resist', 'hard');
                      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                        scene.actions([
                          { label: 'Ignore him', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                        ]);
                      } else {
                        scene.actions([
                          { label: 'Ignore him', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspGoto(st, 'komp_cam_MFC_main', 'waitclients');
  } },
                        ]);
                      }
                      scene.actions([
                        { label: 'Show him your anus', handler: (st: GameState) => {
    qspCall(st, 'komp_cam_functions', 'camming', 3, 'erotic', 'request');
    if (((st as any).pantyworntype ?? 0) !== 'none') {
      (st as any).img_source = 57;
    } else {
      if (((st as any).pcs_ass ?? 0) < 25) {
        (st as any).img_source = 54;
      } else {
        if (((st as any).pcs_vag ?? 0) >= 25) {
          (st as any).img_source = 56;
        } else {
          (st as any).img_source = 55;
        }
      }
    }
    scene.img('images/pc/items/accessories/computer/camwhore' + ((st as any).img_source || '') + '.jpg');
    if (((st as any).analPlugIn ?? 0) === 1) {
      scene.text('You smile to yourself, he\'s going to love what you have in store for him!');
      scene.text('"I\'m sorry," you tell him, explicitly mentioning his username as well. "That\'s going to be a bit difficult…"');
      scene.text('Then you turn around, and show him the large plug you currently have shoved inside you. You pull it out for a second and wiggle your ass seductively at the camera and hear the donation sound mere seconds later while you slide the plug back in.');
    } else {
      scene.text('"I don\'t know if it could handle your cock just yet," you tell the viewer. "What do you think?"');
      scene.text('You turn your back to the camera and pull your butt cheeks aside, giving him (and everyone else in the channel) a good look at your sphincter. Unsurprisingly he\'s very confident that he could make you feel good, but he donates some tokens as promised.');
    }
    qspCall(st, 'arousal', 'flash', (-3));
    qspCall(st, 'stat', '');
    if (((st as any).camGirl ?? 0)?.['MFC_donate_message'] !== '') {
      // TODO-QSP: $camGirl['MFC_donate_message']
    }
    scene.actions([
      { label: 'Continue', goto: ['komp_cam_MFC_main', 'waitclients'] },
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
      }
    }
  }
  scene.build();
}

export const komp_cam_MFC_requests_two: LocationDef = {
  name: 'komp_cam_MFC_requests_two',
  title: 'When one of your loyal viewers speaks up, you feel a weird k',
  region: 'other',
  description: ['When one of your loyal viewers speaks up, you feel a weird knot in your throat. He\'s usually making rather insensitive comments and seems to enjoy watching you squirm, but he pays well.'],
  enter: enter,
};
