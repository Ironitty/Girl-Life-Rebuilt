import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).camGirl) (s as any).camGirl = {}; (s as any).camGirl['MFC_lastrequest'] = ((s as any).totminut ?? 0);
  qspCall(s, 'stat', '');
  scene.build();
}

function enterShowAsshole(s: GameState, scene: SceneBuilder): void {
  scene.text('One of the viewers makes several comments on how badly he wants to fuck your ass, and then offers you tokens to show your anus to him…');
  qspCall(s, 'willpower', 'exhib', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Ignore him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Ignore him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['komp_cam_MFC_main', 'waitclients'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Show them your battered sphincter', handler: (st: GameState) => {
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      qspCall(s, 'panties', 'remove');
    }
    qspCall(s, 'komp_cam_functions', 'camming', 5, 'porn', 'request');
    qspCall(s, 'stat', '');
    if (((s as any).analPlugIn ?? 0) === 1) {
      scene.img('images/pc/items/accessories/computer/camwhore21.jpg');
      scene.text('You smile to yourself, he\'s going to love what you have in store for him!');
      scene.text('"I\'m sorry", you tell him, explicitly mentioning his username as well. "I can\'t right now…"');
      scene.text('Then you turn around and show him the large plug you currently have shoved inside you. You wiggle your ass seductively at the camera and hear the donation sound mere seconds later.');
    } else {
      if (((s as any).cumsumass ?? 0) < 40) {
        scene.img(`images/pc/items/accessories/computer/camwhore20,${Math.floor(Math.random() * 8) + 0}.jpg`);
        scene.text('You bite your lip for a second, trying to think of a way to get out of his request. Then, you sigh and show them your rectum. It\'s obviously quite used to having objects shoved in, something your audience notices immediately.');
        scene.text('Then your greed overcomes you. They already know… you might as well earn some money by showing them properly, right?');
        scene.text('You pull your ass cheeks aside, giving them a good view of your worn-out anus.');
      } else {
        scene.img('images/pc/items/accessories/computer/camwhore74.jpg');
        scene.text('You turn your back to the camera and pull your ass cheeks aside, showing everyone your battered anus. When you push softly, you suddenly hear the chat exploding.');
        scene.text('"Oh my god, is that sperm!?" someone wonders.');
        scene.text('"Definitely! What a whore!" someone else adds.');
        scene.text('"I\'d love to add my load to that!" a third one laughs.');
        scene.text('Oh no! Your face turns a deep red… you\'re so ashamed right now! You try to calm the chat down, but the vulgar comments just keep coming and coming.');
        scene.text('At least the viewer who promised to donate did, so you\'re a few tokens richer.');
      }
    }
    qspCall(s, 'arousal', 'porn', (-5));
    qspCall(s, 'stat', '');
    if (((s as any).camGirl ?? 0)?.['MFC_donate_message'] !== '') {
      // TODO-QSP: $camGirl['MFC_donate_message']
    }
    scene.actions([
      { label: 'Continue', goto: ['komp_cam_MFC_main', 'waitclients'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterShowPussy(s: GameState, scene: SceneBuilder): void {
  scene.text('One of the viewers asks you to remove your panties and show your bare pussy to the camera. A second viewer chimes in, adding some extra tokens to the offer.');
  qspCall(s, 'willpower', 'exhib', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse to take off your panties [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse to take off your panties [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['komp_cam_MFC_main', 'waitclients'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Take off your panties', handler: (st: GameState) => {
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      qspCall(s, 'panties', 'remove');
    }
    qspCall(s, 'komp_cam_functions', 'camming', 5, 'erotic', 'request');
    qspCall(s, 'stat', '');
    scene.img('images/pc/items/accessories/computer/webcam/undress3.mp4');
    scene.text('You make a show of pointing the camera at your groin and slowly push your panties down your legs. The chat explodes for a moment, with several viewers complimenting your body, and a few more making lewd comments on what they would do to you if they were with you right now.');
    scene.text('As promised, you receive some tokens.');
    qspCall(s, 'arousal', 'porn', (-5));
    qspCall(s, 'stat', '');
    if (((s as any).camGirl ?? 0)?.['MFC_donate_message'] !== '') {
      // TODO-QSP: $camGirl['MFC_donate_message']
    }
    scene.actions([
      { label: 'Continue', goto: ['komp_cam_MFC_main', 'waitclients'] },
    ]);
  } },
    { label: 'Tease instead', handler: (st: GameState) => {
    qspCall(s, 'komp_cam_functions', 'camming', 5, 'erotic', 'request');
    qspCall(s, 'stat', '');
    if (((s as any).braworntype ?? 0) !== 'none') {
      scene.img('images/pc/items/accessories/computer/webcam/strip7.mp4');
      scene.text('Deciding to stay clothed a little longer you feel that you won\'t be able to satisfy the crowd without showing at least some skin.');
      scene.text('Standing up you start dancing provocatively, your hands giving extra attention to your tits');
    } else {
      scene.img('images/pc/items/accessories/computer/webcam/show5.mp4');
      scene.text('Lowering your panties to emphasize your butt you shake it briefly to appease the crowd');
    }
    qspCall(s, 'arousal', 'porn', (-5));
    qspCall(s, 'stat', '');
    if (((s as any).camGirl ?? 0)?.['MFC_donate_message'] !== '') {
      // TODO-QSP: $camGirl['MFC_donate_message']
    }
    scene.actions([
      { label: 'Continue', goto: ['komp_cam_MFC_main', 'waitclients'] },
    ]);
  } },
    { label: 'Give them a brief look', handler: (st: GameState) => {
    qspCall(s, 'komp_cam_functions', 'camming', 5, 'erotic', 'request');
    qspCall(s, 'stat', '');
    scene.img('images/pc/items/accessories/computer/webcam/show1.mp4');
    scene.text('You take off your panties and bend over to give a short preview of what\'s to come before quickly covering up again and hoping it was enough to keep viewers interested.');
    qspCall(s, 'arousal', 'porn', (-5));
    qspCall(s, 'stat', '');
    if (((s as any).camGirl ?? 0)?.['MFC_donate_message'] !== '') {
      // TODO-QSP: $camGirl['MFC_donate_message']
    }
    scene.actions([
      { label: 'Continue', goto: ['komp_cam_MFC_main', 'waitclients'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterShowTits(s: GameState, scene: SceneBuilder): void {
  scene.text('One of your viewers wants to see your boobs! He\'s willing to leave you some tokens as a tip, if you take off your bra right now…');
  qspCall(s, 'willpower', 'exhib', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse to take off your bra [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse to take off your bra [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['komp_cam_MFC_main', 'waitclients'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Remove your bra', handler: (st: GameState) => {
    qspCall(s, 'bras', 'remove');
    qspCall(s, 'komp_cam_functions', 'camming', 5, 'erotic', 'request');
    qspCall(s, 'stat', '');
    scene.img('images/pc/items/accessories/computer/camwhore7.jpg');
    scene.text('You stand up and lean forward, so your boobs are in full view of the camera. You slowly take off your bra and give the camera a sweet smile.');
    scene.text('While you sit back down and toss your bra to the ground, you hear the donation sound several times. Your viewers enjoyed that!');
    qspCall(s, 'arousal', 'porn', (-5));
    qspCall(s, 'stat', '');
    if (((s as any).camGirl ?? 0)?.['MFC_donate_message'] !== '') {
      // TODO-QSP: $camGirl['MFC_donate_message']
    }
    scene.actions([
      { label: 'Continue', goto: ['komp_cam_MFC_main', 'waitclients'] },
    ]);
  } },
    { label: 'Tease instead', handler: (st: GameState) => {
    qspCall(s, 'komp_cam_functions', 'camming', 5, 'erotic', 'request');
    qspCall(s, 'stat', '');
    scene.img('images/pc/items/accessories/computer/webcam/tits2.mp4');
    scene.text('Not quite prepared to reveal your breasts you play with them through your shirt hoping that will appease the crowd.');
    qspCall(s, 'arousal', 'porn', (-5));
    qspCall(s, 'stat', '');
    if (((s as any).camGirl ?? 0)?.['MFC_donate_message'] !== '') {
      // TODO-QSP: $camGirl['MFC_donate_message']
    }
    scene.actions([
      { label: 'Continue', goto: ['komp_cam_MFC_main', 'waitclients'] },
    ]);
  } },
    { label: 'Give them a brief look', handler: (st: GameState) => {
    qspCall(s, 'komp_cam_functions', 'camming', 5, 'erotic', 'request');
    qspCall(s, 'stat', '');
    scene.img('images/pc/items/accessories/computer/webcam/undress4.mp4');
    scene.text('You playfully lift your top hoping a short viewing will sate them for the time being and encourage them to stay for more.');
    qspCall(s, 'arousal', 'porn', (-5));
    qspCall(s, 'stat', '');
    if (((s as any).camGirl ?? 0)?.['MFC_donate_message'] !== '') {
      // TODO-QSP: $camGirl['MFC_donate_message']
    }
    scene.actions([
      { label: 'Continue', goto: ['komp_cam_MFC_main', 'waitclients'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterPlayTits(s: GameState, scene: SceneBuilder): void {
  scene.text('One of the viewers types: "Play with those titties, girl! I\'ll pay!"');
  qspCall(s, 'willpower', 'exhib', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse to play with your boobs [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse to play with your boobs [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['komp_cam_MFC_main', 'waitclients'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Play with your boobs', handler: (st: GameState) => {
    if (((s as any).braworntype ?? 0) !== 'none') {
      qspCall(s, 'bras', 'remove');
    }
    qspCall(s, 'komp_cam_functions', 'camming', 5, 'erotic', 'request');
    qspCall(s, 'stat', '');
    scene.img('images/pc/items/accessories/computer/camwhore10.jpg');
    scene.text('You adjust your camera and lie down on your bed, and start to knead your tits and pinch your nipples playfully. When you hear the donation sound, you smile sweetly at the camera and thank the person who donated personally, immediately prompting a second viewer to donate as well.');
    qspCall(s, 'arousal', 'porn', (-5));
    qspCall(s, 'stat', '');
    if (((s as any).camGirl ?? 0)?.['MFC_donate_message'] !== '') {
      // TODO-QSP: $camGirl['MFC_donate_message']
    }
    scene.actions([
      { label: 'Continue', goto: ['komp_cam_MFC_main', 'waitclients'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterShowCunt(s: GameState, scene: SceneBuilder): void {
  scene.text('"Let\'s see that sweet cunt of yours again, whore!" one of your viewers says.');
  scene.text('He\'s kinda rude about it, but then again… he\'s willing to pay.');
  qspCall(s, 'willpower', 'exhib', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Ignore him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Ignore him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['komp_cam_MFC_main', 'waitclients'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Do it', handler: (st: GameState) => {
    qspCall(s, 'komp_cam_functions', 'camming', 5, 'erotic', 'request');
    scene.img('images/pc/items/accessories/computer/camwhore12.jpg');
    scene.text('You lie down comfortably and put your hand between your legs, gently rubbing your labia with your fingers. You put some effort into showing how wet you are already, which is met with some enthusiastic chatter.');
    if (((s as any).pcs_horny ?? 0) < 100) {
    }
    qspCall(s, 'arousal', 'clit_finger', (-5));
    qspCall(s, 'stat', '');
    if (((s as any).camGirl ?? 0)?.['MFC_donate_message'] !== '') {
      // TODO-QSP: $camGirl['MFC_donate_message']
    }
    scene.actions([
      { label: 'Continue', goto: ['komp_cam_MFC_main', 'waitclients'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterShowVagina(s: GameState, scene: SceneBuilder): void {
  scene.text('One of the viewers asks very politely: "Uh, hi! Could you please show me your vagina up close?"');
  qspCall(s, 'willpower', 'exhib', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Ignore him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Ignore him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['komp_cam_MFC_main', 'waitclients'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Show him your vagina', handler: (st: GameState) => {
    qspCall(s, 'komp_cam_functions', 'camming', 5, 'erotic', 'request');
    qspCall(s, 'stat', '');
    if (((s as any).analPlugIn ?? 0) === 1) {
      scene.img('images/pc/items/accessories/computer/camwhore19.jpg');
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
        (s as any).img_source = 18;
      } else {
        if (((s as any).pcs_vag ?? 0) <= 10) {
          (s as any).img_source = 13;
        } else {
          if (((s as any).pcs_vag ?? 0) <= 15) {
            (s as any).img_source = 14;
          } else {
            if (((s as any).pcs_vag ?? 0) <= 25) {
              (s as any).img_source = 15;
            } else {
              if (((s as any).pcs_vag ?? 0) <= 35) {
                (s as any).img_source = 16;
              }
            }
          }
        }
      }
      scene.img('images/pc/items/accessories/computer/camwhore\' + img_source + \'.jpg');
    }
    scene.text('Aww, what a sweetheart! You smile at the camera and do what your client wants. He delivers on his promise as well, sending some tokens your way. The rest of the chat is thanking him too, everyone wanted to see that!');
    qspCall(s, 'arousal', 'porn', (-5));
    qspCall(s, 'stat', '');
    if (((s as any).camGirl ?? 0)?.['MFC_donate_message'] !== '') {
      // TODO-QSP: $camGirl['MFC_donate_message']
    }
    scene.actions([
      { label: 'Continue', goto: ['komp_cam_MFC_main', 'waitclients'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'show_asshole':
      enterShowAsshole(s, scene);
      break;
    case 'show_pussy':
      enterShowPussy(s, scene);
      break;
    case 'show_tits':
      enterShowTits(s, scene);
      break;
    case 'play_tits':
      enterPlayTits(s, scene);
      break;
    case 'show_cunt':
      enterShowCunt(s, scene);
      break;
    case 'show_vagina':
      enterShowVagina(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const komp_cam_MFC_requests_three: LocationDef = {
  name: 'komp_cam_MFC_requests_three',
  title: 'One of the viewers makes several comments on how badly he wa',
  region: 'other',
  enter: enter,
};
