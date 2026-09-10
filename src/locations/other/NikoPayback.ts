import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterPayback(s: GameState, scene: SceneBuilder): void {
  (s as any).NikoPayback_Day = ((s as any).daystart ?? 0);
  (s as any).NikoPayback = 2;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/fight/grab.jpg');
  scene.text('As you\'re walking towards the hallway, hands covering your mouth and you feel your ribs being struck, causing you to recoil in pain as you\'re dragged into the nearby bathroom.');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Men/scene.jpg');
    if (((s as any).NikoVolkovQW ?? 0) === -1) {
      scene.text('As soon as you reach the bathroom, you feel your shirt being pulled up as someone leans in and whispers in your ear. "You think that you can just dump me after all I\'ve done for you? Well you\'re so fucking wrong! You\'re now my bitch, whether you like it or not." You recognize Niko\'s voice as he continues stripping you.');
    } else {
      scene.text('As soon as you reach the bathroom, you feel your shirt being pulled up as someone leans in and whispers in your ear. "You\'ve been running your fucking mouth for far too long and now I have a few other uses for it. You\'re now be my bitch, whether you like it or not." You recognize Niko\'s voice as he continues stripping you.');
    }
    scene.actions([
      { label: 'Plead', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img(`images/characters/pavlovsk/school/boy/niko/nikomisc/avatars/${((s as any).week ?? 0)}.jpg`);
    if (((s as any).NikoVolkovQW ?? 0) === -1) {
      scene.text('"Please stop! I\'m sorry for breaking up with you. I was just really upset and didn\'t give you a chance. Please forgive me!"');
      // TODO-QSP: dynamic text: Niko just scoffs. "Don't give me that bullshit! You don't give a shit about me, ...
      scene.text(`Niko just scoffs. "Don't give me that bullshit! You don't give a shit about me, but you will pay me back. From now on you will either pay me ${qspFunc(s, 'money', 'string_price', 200)} every day or I'll be using your body as payment. Do you understand, bitch?"`);
    } else {
      scene.text('"Please stop! I\'m sorry for insulting you. I don\'t know what came over me. I\'m sorry I never gave you a chance. Please forgive me!"');
      // TODO-QSP: dynamic text: Niko just scoffs. "Don't give me that bullshit! You're not fucking sorry, but yo...
      scene.text(`Niko just scoffs. "Don't give me that bullshit! You're not fucking sorry, but you will be. From now on you will either pay me ${qspFunc(s, 'money', 'string_price', 200)} every day or I'll be using your body as payment. Do you understand, bitch?"`);
    }
    scene.actions([
      { label: 'Yes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/smile\'+rand(2, 3)+\'.jpg');
    scene.text('You silently nod and Niko smiles. "Good, that\'s what I like to hear. So what\'s it going to be today? Money or that pretty mouth of yours?"');
    scene.actions([
      { label: 'Money [+$func(\'money\', \'get_cost_string\', 200)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 200) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney ?? ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 200);
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      (s as any).NikoPayed = ((s as any).daystart ?? 0);
      qspCall(s, 'stat', '');
      scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/smile\'+rand(2, 3)+\'.jpg');
      // TODO-QSP: dynamic text: You hand Niko <<$func('money', 'string_price', 200)>> and he counts it before gi...
      scene.text(`You hand Niko ${qspFunc(s, 'money', 'string_price', 200)} and he counts it before giving you an approving nod. "Excellent. See you tomorrow ${((s as any).pcs_nickname ?? 0)}. Don't try to avoid me or things will end badly for you." He puts the money in his pocket and walks away. You take a minute to get dressed and try to regain your composure before leaving the restroom.`);
      scene.actions([
        { label: 'Go to class', goto: ['gschool_lunch', 'break'] },
      ]);
    }
  } },
      { label: 'Blowjob', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/payback/bj1.mp4');
    scene.text('You lower your head as you slowly drop to your knees in front of Niko. He gives you a confident grin as he unbuttons his pants. You soon feel his dick rubbing against your lips, so you take a deep breath before wrapping your lips around it, sucking it intently as you try to make him cum as quickly as possible. He leans back while holding your head with one hand.');
    scene.actions([
      { label: 'Make Niko cum', handler: (st: GameState) => {
    (s as any).NikoPayed = ((s as any).daystart ?? 0);
    qspCall(s, 'cum_call', 'mouth_swallow', 'A189', 1);
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/cum/facial1.mp4');
    scene.text('You increase your pace as you look up at Niko, noticing how much he\'s enjoying your performance. You stare him in the eyes as you hear him begin groaning and suddenly feel his warm cum filling your mouth. Niko looks down at you as his cum leaks out of your mouth. "What are you waiting for? Swallow my cum, bitch!"');
    scene.text('You give him a meek nod and swallow his cum. After you finish, he pushes your head to the ground. "You missed a bit! Lick it up bitch!" Not wanting to anger him further, you obediently start licking the last drops of cum off the floor. "That\'s better. I\'ll see you tomorrow, bitch. Remember what I said and don\'t ever try to avoid me."');
    scene.actions([
      { label: 'Stand up', goto: ['FedorMisc', 'Restroom'] },
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

function enterPayback2(s: GameState, scene: SceneBuilder): void {
  (s as any).NikoPayback_Day = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img(`images/characters/pavlovsk/school/boy/niko/nikomisc/avatars/${((s as any).week ?? 0)}.jpg`);
  scene.text('You walk out of the cafeteria and see Niko standing in the hallway on his phone.');
  scene.actions([
    { label: 'Approach him', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A189', Math.floor(Math.random() * 5) + 1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/smile\'+rand(2, 3)+\'.jpg');
    scene.text('You approach Niko and a confident grin creeps onto his face. "You showed up? Good. How will you be paying today?"');
    scene.actions([
      { label: 'Money [+$func(\'money\', \'get_cost_string\', 200)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 200) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney ?? ''), curActs: [] };
    } else {
      (s as any).NikoPayed = ((s as any).daystart ?? 0);
      qspCall(s, 'money', 'pay', 200);
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'stat', '');
      scene.img(`images/characters/pavlovsk/school/boy/niko/nikomisc/avatars/${((s as any).week ?? 0)}.jpg`);
      // TODO-QSP: dynamic text: "I have your money right here." You extend your hand, giving him <<$func('money'...
      scene.text(`"I have your money right here." You extend your hand, giving him ${qspFunc(s, 'money', 'string_price', 200)}.`);
      scene.text('He quickly counts it and gives you an approving nod. "It\'s all here. You\'re all paid up for today, so you can get going now."');
      scene.actions([
        { label: 'Walk away', goto: ['gschool_lunch', 'break'] },
      ]);
    }
  } },
      { label: 'Sex', handler: (st: GameState) => {
    (s as any).NikoPayed = ((s as any).daystart ?? 0);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/smile\'+rand(2, 3)+\'.jpg');
    scene.text('You look down at the floor, avoiding eye contact with him. "You can use my body as payment…"');
    scene.text('His eyes light up. "I was hoping you\'d say that. Let\'s not waste time." He grabs your ass firmly while leading you to the lesser used restroom.');
    scene.actions([
      { label: 'Go with him', goto: ['NikoPayback', 'Payback 3'] },
    ]);
  } },
    ]);
  } },
    { label: 'Try to avoid him', handler: (st: GameState) => {
    (s as any).VK = Math.floor(Math.random() * 3) + 1;
    if (((s as any).VK ?? 0) === 1) {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/school/building/gschool_hall01.jpg');
      scene.text('You lower your head and quickly dash past him, hoping that he won\'t notice you. To your relief, he doesn\'t seem to notice. You let out a sigh of relief before heading to the hallway.');
      scene.actions([
        { label: 'Continue', goto: ['gschool_lunch', 'break'] },
      ]);
    } else {
      qspCall(s, 'npc_relationship', 'modify', 'A189', (-5));
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'stat', '');
      scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/fight/grab.jpg');
      scene.text('You lower your head and quickly dash past him, hoping that he won\'t notice you. After a few steps, you suddenly feel a hand on your throat, choking you firmly as he whispers in your ear. "You aren\'t trying to avoid me, are you?"');
      scene.text('You meekly shake your head, trying to speak but unable breathe due to his firm grip on your neck. He pulls you into the restroom.');
      scene.actions([
        { label: 'Continue', goto: ['NikoPayback', 'Payback 4'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterPayback3(s: GameState, scene: SceneBuilder): void {
  (s as any).NikoPayback_Sex = ((s as any).daystart ?? 0);
  qspCall(s, 'boyStat', 'A189');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img(`images/characters/pavlovsk/school/boy/niko/nikomisc/avatars/${((s as any).week ?? 0)}.jpg`);
  scene.text('After you enter the restroom, Niko smacks your ass. "Since you came here without any fuss, I\'ll let you choose how I fuck you today. So what will it be?"');
  if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
    scene.actions([
      { label: 'Vaginal [<font color=#FF00FF>Lose virginity</font>]', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/payback/virgin.mp4');
    scene.text('You look at the floor as you reply. "I\'m a virgin, but I don\'t want to be one anymore."');
    scene.text('Niko recoils in shock before responding. "Wow, you are? I guess I can help you with that. Thanks for offering." He gently guides you towards the sink and undresses you from the waist down before unbuttoning his pants and pressing his dick against your pussy and whispering in your ear. "I\'ll take this slow for you, okay?"');
    scene.text('You gratefully nod as Niko slowly pushes his dick inside your pussy and you feel your hymen break. The pain increases when Niko thrusts his hips, pushing his dick deeper inside you and fucking you at a moderate rate.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'butt', ((s as any).boy ?? 0));
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/pavlovsk/school/bathroom/voyvag.mp4');
    scene.text('After a minute, the pain fades and is replaced by pleasure. You try your best to give in to it as Niko starts fucking you harder before quickly pulling out and groaning as he cums over your ass.');
    // TODO-QSP: dynamic text: He takes a few seconds to catch his breath before saying "You were great <<$pcs_...
    scene.text(`He takes a few seconds to catch his breath before saying "You were great ${((s as any).pcs_firstname ?? 0)}! I can't wait to fuck you again." He buttons his pants before leaving the restroom.`);
    if (((s as any).NikoDiscoPay ?? 0) === 1) {
      scene.actions([
        { label: 'Finish', handler: (st: GameState) => {
    (st as any).NikoDiscoPay = 0;
  }, goto: ['pav_disco', ''] },
      ]);
    } else {
      scene.actions([
        { label: 'Finish', goto: ['gschool_lunch', 'break'] },
      ]);
    }
  } },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Vaginal', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/payback/vaginal1.mp4');
    scene.text('You grab Niko\'s hand and place it between your legs. "I want you to fuck my pussy."');
    scene.text('His eyes light up. "Good girl. That\'s just what I wanted to hear."');
    scene.text('He starts undressing you before spinning you around and pulling you toward him. You can feel his dick pressing against your pussy before you suddenly feel it enter you, causing a wave of pleasure to fill you. Niko lightly grips your neck and you close your eyes, giving in to the pleasure as he continues to fuck your pussy.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'legs', ((s as any).boy ?? 0));
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/payback/vaginal2.mp4');
    // TODO-QSP: dynamic text: Niko suddenly grabs onto your stomach and leg, lifting you as he continues fucki...
    scene.text(`Niko suddenly grabs onto your stomach and leg, lifting you as he continues fucking you. You start moaning out loud as he whispers in your ear. "You're really liking this, aren't you ${((s as any).pcs_firstname ?? 0)}?"`);
    scene.text('You turn to him and nod, which seems to excite him, resulting in him greatly increasing his pace. He continues fucking you until he suddenly pulls out and starts rubbing his dick in between your thighs as his cum splatters on the ground in front of you.');
    // TODO-QSP: dynamic text: After he catches his breath, he turns to you and says "You're a great fuck <<$pc...
    scene.text(`After he catches his breath, he turns to you and says "You're a great fuck ${((s as any).pcs_nickname ?? 0)}. I'll see you again soon." He buttons his pants before walking out of the restroom.`);
    if (((s as any).NikoDiscoPay ?? 0) === 1) {
      scene.actions([
        { label: 'Finish', handler: (st: GameState) => {
    (st as any).NikoDiscoPay = 0;
  }, goto: ['pav_disco', ''] },
      ]);
    } else {
      scene.actions([
        { label: 'Finish', goto: ['gschool_lunch', 'break'] },
      ]);
    }
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Blowjob', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/payback/bj1.mp4');
    scene.text('You drop to your knees and unbutton his pants. He looks down at you with a confident grin as you start rubbing his dick against your lips, signaling for you to suck on it. You wrap your lips around his dick and start licking and sucking it firmly, not wanting to anger him. After a few seconds, Niko looks down at you. "Good girl. Keep it up." You continue sucking his dick at a moderate pace, not wanting to overdo it.');
    qspCall(s, 'arousal', 'bj', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue sucking', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0));
    qspCall(s, 'arousal', 'bj', 5, 'sub');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/payback/bj2.mp4');
    scene.text('After a few more seconds, Niko starts moaning as he runs his fingers through your hair before grabbing your head with both hands and pushing his dick down your throat as his warm cum squirts into your mouth. You try your best not to gag as you swallow every drop of it.');
    scene.text('After he finishes, he looks down to you. "You\'re really good at that. I\'ll see you again soon." He buttons his pants and walks out of the restroom.');
    if (((s as any).NikoDiscoPay ?? 0) === 1) {
      scene.actions([
        { label: 'Finish', handler: (st: GameState) => {
    (st as any).NikoDiscoPay = 0;
  }, goto: ['pav_disco', ''] },
      ]);
    } else {
      scene.actions([
        { label: 'Finish', goto: ['gschool_lunch', 'break'] },
      ]);
    }
  } },
    ]);
  } },
    { label: 'Ride him', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/payback/ride.mp4');
    scene.text('You approach Niko and place your hand on his crotch. "I want to ride your cock, so why don\'t you make yourself comfortable?"');
    scene.text('His eyes light up. "You really are a naughty little minx, aren\'t you?"');
    scene.text('He unbuttons his pants and sits on top of a nearby toilet as you quickly undress and straddle him before sliding down onto his dick, moaning as it penetrates you. Niko starts moaning as you start riding his cock and you moan with him as you feel his dick pushing its way deeper inside you.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'butt', ((s as any).boy ?? 0));
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/pavlovsk/trainstation/sex/bimbo.boy1,7.mp4');
    // TODO-QSP: dynamic text: You ride him harder while closing your eyes and focusing on the pleasure buildin...
    scene.text(`You ride him harder while closing your eyes and focusing on the pleasure building up inside you as Niko spanks your ass. "You seem to be getting the hang of this, ${((s as any).pcs_nickname ?? 0)}. Good girl."`);
    scene.text('He then suddenly groans before he pushes you forward off his dick. You let out a satisfied moan as cum splatters across your ass. "That\'s you paid up for today. See you next time." He smacks your ass before buttoning his pants and leaving the restroom.');
    if (((s as any).NikoDiscoPay ?? 0) === 1) {
      scene.actions([
        { label: 'Finish', handler: (st: GameState) => {
    (st as any).NikoDiscoPay = 0;
  }, goto: ['pav_disco', ''] },
      ]);
    } else {
      scene.actions([
        { label: 'Finish', goto: ['gschool_lunch', 'break'] },
      ]);
    }
  } },
    ]);
  } },
    { label: 'Anal', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'anal', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/bathroom/voyanal.mp4');
    scene.text('You lean forward and whisper in his ear. "I want you to fuck my ass."');
    scene.text('His eyes light up. "I always knew that you were a wild girl. Let\'s do this."');
    scene.text('He gives your ass a firm smack as he wets his hand in the sink and lubes up his dick. You pull down your pants and bend over, closing your eyes and focusing on his dick firmly pushing its way inside your ass, evoking moans from both you and Niko.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'anus', ((s as any).boy ?? 0));
    qspCall(s, 'arousal', 'anal', 5, 'sub');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/payback/rough/anal1.mp4');
    scene.text('Niko starts thrusting his dick deeper into your ass as you lift your leg up to give him better access. You continue staring into Niko\'s eyes when they suddenly squint and he groans as he fills your ass with his warm cum.');
    scene.text('You can feel his dick throbbing inside you, filling you with a pleasant warmth as he finishes unloading in your ass.');
    scene.text('He catches his breath before saying "You did good today. Keep it up." He smacks your ass before buttoning his pants and leaving the restroom.');
    if (((s as any).NikoDiscoPay ?? 0) === 1) {
      scene.actions([
        { label: 'Finish', handler: (st: GameState) => {
    (st as any).NikoDiscoPay = 0;
  }, goto: ['pav_disco', ''] },
      ]);
    } else {
      scene.actions([
        { label: 'Finish', goto: ['gschool_lunch', 'break'] },
      ]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterPayback4(s: GameState, scene: SceneBuilder): void {
  (s as any).NikoPayback_Sex = ((s as any).daystart ?? 0);
  (s as any).VK = Math.floor(Math.random() * 6) + 1;
  qspCall(s, 'boyStat', 'A189');
  qspCall(s, 'outfit', 'strip_all');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img(`images/characters/pavlovsk/school/boy/niko/nikomisc/avatars/${((s as any).week ?? 0)}.jpg`);
  scene.text('Niko roughly pushes you into the restroom. "Where were you heading off to in such a hurry?" You take a second to think of an excuse when he quickly storms up to you. "You were trying to fucking avoid me, you stupid bitch!" he snarls before slapping you. He then starts ripping your clothes off.');
  if (((s as any).VK ?? 0) === 1) {
    scene.text('Once you\'re fully naked, Niko smiles. "It\'s time for you to put that mouth of yours to good use. Suck my fucking dick bitch!" He pushes you onto your knees and pulls down his pants before pressing the tip of his dick against your lips.');
  } else {
    scene.text('Once you\'re fully naked, Niko smiles. "You\'ll be my little pee slut today, understand?" You lower your head and nod as he pulls down his pants. "Open your fucking mouth!"');
    if ((((s as any).VK ?? 0) === 3  ||  ((s as any).VK ?? 0) === 4)  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.text('Once you\'re fully naked, Niko smiles. "I\'m gonna fuck your pussy today, so spread those legs!" You fearfully shake your head. "But I can\'t… I\'m… I\'m a virgin."');
      scene.text('His eyes light up. "Really? Today really is my lucky day. I get to fuck a virgin <i>and</i> take your innocence from you at the same time."');
      scene.text('You recoil in shock. "Please no! Why would you do that to me?!"');
      scene.text('He just smiles. "Because it will make you sad, that\'s why. Now get over to the sink and spread those fucking legs of yours or I will!"');
    } else {
      scene.text('Once you\'re fully naked, Niko smiles. "I\'m gonna fuck your pussy today, so spread those legs!"');
      if (((s as any).VK ?? 0) === 4  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 1) {
        scene.text('Once you\'re fully naked, Niko smiles. "You\'ll be riding my dick today, so get over here."');
        scene.text('You fearfully shake your head. "But I can\'t… I\'m… I\'m a virgin."');
        scene.text('His eyes light up. "Really? Today really is my lucky day. I get to fuck a virgin <i>and</i> take your innocence from you at the same time."');
        scene.text('You recoil in shock. "Please no! Why would you do that to me?!"');
        scene.text('He just smiles. "Because it will make you sad, that\'s why. Now get over here and sit on my dick. I won\'t ask again!"');
      } else {
        scene.text('Once you\'re fully naked, Niko smiles. "You\'ll be riding my dick today, so get over here." You meekly nod as you approach him. He unbuttons his pants and grabs you before turning you around and wrapping his hand around your neck, pulling you onto his dick.');
        if (((s as any).VK ?? 0) === 5) {
          scene.text('Once you\'re fully naked, Niko smiles. "I want to fuck your ass, so spread those cheeks of yours." You meekly nod before bending over and spreading your cheeks as he approaches you while unbuttoning his pants.');
        } else {
          scene.text('Once you\'re fully naked, Niko smiles. "I gonna fuck that tight ass. Now get over here bitch!" He grabs you by the hair and pulls you toward the urinal, shoving your head into it as he unbuttons his pants.');
        }
        if (((s as any).VK ?? 0) === 1) {
          scene.actions([
            { label: 'Blowjob', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 5, 'rough', 'sub');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/event/gif/bj3.mp4');
    scene.text('You wrap your lips around his dick and start sucking it firmly as Niko looks down at you and spits on your face. "You\'re my fucking bitch! Don\'t you ever forget that!" You continue sucking his dick while trying to ignore him as he occasionally spits in your face.');
    scene.actions([
      { label: 'Continue sucking', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0));
    qspCall(s, 'arousal', 'bj', 5, 'rough', 'sub');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/yurikev/cum/throat6.mp4');
    scene.text('Niko grabs the back of your head and starts fucking your throat, causing you to gag heavily. "This is your place and you better remember that. You\'re my fucking bitch and nothing more." You\'re too focused on not gagging to respond. After a few more seconds, Niko groans as he fills your throat with his cum. You swallow as much of it as you can, knowing that you have no choice. He then buttons his pants and walks out of the restroom without saying another word.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore');
  }, goto: ['FedorMisc', 'Restroom'] },
    ]);
  } },
    ]);
  } },
          ]);
        } else {
          if (((s as any).VK ?? 0) === 3  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 1) {
            scene.actions([
              { label: 'Do as he says', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 5, 'rough', 'sub');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/bathroom/voyvag.mp4');
    scene.text('You slowly approach the sink and spread your legs as Niko approaches you from behind. You feel tears streaming down your face as he drops his pants and rubs his dick against your pussy before forcing it inside you, causing a powerful jolt of pain to shoot through you. He wastes no time and starts thrusting his dick inside you very roughly as he whispers in your ear. "Oops. There goes your virginity. How does it feel to be a real woman?" You lower your head in shamed silence while trying to focus on anything but the pain.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'butt', ((s as any).boy ?? 0));
    qspCall(s, 'arousal', 'vaginal', 5, 'rough', 'sub');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/payback/virgin.mp4');
    scene.text('He quickly increases the pace of his thrusts, fucking you harder as you close your eyes, waiting for it to be over. His breathing hastens before stopping as he pulls out and starts squirting his cum over your ass. You wait for him to finish before asking "May I please go now?"');
    scene.text('He catches his breath before replying. "Yeah sure. You\'re all paid up for today." You quickly grab a few paper towels and clean the blood off your legs before grabbing your clothes and getting dressed. Once you\'re fully dressed, you quickly run out of the restroom.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore');
  }, goto: ['FedorMisc', 'Restroom'] },
    ]);
  } },
    ]);
  } },
            ]);
          } else {
            if (((s as any).VK ?? 0) === 4  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 1) {
              scene.actions([
                { label: 'Vaginal', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 5, 'rough', 'sub');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/payback/vaginal1.mp4');
    scene.text('You squirm as Niko turns you around and lifts you up by the legs. Tears well up in your eyes as you feel his dick pushing its way inside your virgin pussy, causing you to cry out as a wave of pain shoots through you. He wastes no time and begins thrusting his dick inside you very roughly as he whispers in your ear. "Oops. There goes your virginity. How does it feel to be a real woman?" You lower your head in shamed silence while trying to focus on anything but the pain.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 5, 'rough', 'sub');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/cum/thighs.mp4');
    scene.text('He continues fucking you as he whispers in your ear. "How are you liking it?" You look back at him and reluctantly nod, which seems to turn him on as he quickly pulls out and cums on the floor in front of you. You turn to him once he\'s finished. "Are you satisfied? Can I leave now?"');
    scene.text('He gives your ass a firm smack. "You can go now, but never forget that you belong to me." You quickly clean yourself up before getting dressed and leaving the restroom.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore');
  }, goto: ['FedorMisc', 'Restroom'] },
    ]);
  } },
    ]);
  } },
              ]);
            } else {
              if (((s as any).VK ?? 0) === 5) {
                scene.actions([
                  { label: 'Anal', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'anal', 5, 'rough', 'sub');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/bathroom/voyanal.mp4');
    scene.text('You feel Niko\'s dick pressing against your anus before he suddenly forces it inside you, evoking a groan of pain from you. He wastes no time and starts roughly fucking your ass. You let out a few groans of pain as he continues fucking you before leaning forward and whispering in your ear. "How does it feel knowing that you belong to me?" You look back at him in silence, not knowing what he wants you to say, and he grins as he firmly smacks your ass.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'anus', ((s as any).boy ?? 0));
    qspCall(s, 'arousal', 'anal', 5, 'rough', 'sub');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/payback/rough/anal1.mp4');
    // TODO-QSP: dynamic text: Knowing that the faster he cums, the quicker this torment will be over, you turn...
    scene.text(`Knowing that the faster he cums, the quicker this torment will be over, you turn to stare into his eyes. He struggles to hold back and begins groaning as he blows his load in your ass. He pulls out once he's finished, causing a stream of cum to leak out of your ass and onto the floor. "You did good ${((s as any).pcs_nickname ?? 0)}. I'll see you tomorrow." You gather your clothes and get dressed before leaving the restroom.`);
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore');
  }, goto: ['FedorMisc', 'Restroom'] },
    ]);
  } },
    ]);
  } },
                ]);
              } else {
                scene.actions([
                  { label: 'Anal', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'anal', 5, 'rough', 'sub');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/payback/rough/anal2.mp4');
    scene.text('You look back at Niko as he pushes his dick inside your ass, evoking a groan from you as a sharp pain shoots through you. You grasp onto the bottom of the urinal as Niko starts roughly fucking your ass and grabs onto your hair. "You really shouldn\'t have tried to avoid me bitch. This could have been quick and painless, but you had to piss me off."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'anus', ((s as any).boy ?? 0));
    qspCall(s, 'arousal', 'anal', 5, 'rough', 'sub');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/payback/rough/anal3.mp4');
    scene.text('You squeal as he suddenly lifts you by your hair and drags you into one of the stalls before shoving your head into the toilet. You hold your breath as the water covers your face, hoping that he lets you out to breathe soon. Thankfully, he pulls you out of the toilet for a few seconds to catch your breath before shoving you back in. After a few more seconds, he suddenly pulls you out of the toilet and starts groaning as you feel a warmth filling your ass.');
    scene.text('He gives your ass a hard slap once he\'s finished. "Now hopefully you\'ve learned your lesson and won\'t try to avoid me again." You turn to him and meekly nod as he buttons his pants and leaves the restroom while you try to catch your breath.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore');
  }, goto: ['FedorMisc', 'Restroom'] },
    ]);
  } },
    ]);
  } },
                ]);
              }
              scene.actions([
                { label: 'Vaginal', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 5, 'rough', 'sub');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/payback/vaginal1.mp4');
    scene.text('He quickly turns you around and lifts you up by the legs. You feel his dick pushing its way inside your pussy, causing a wave of pleasure to fill you. He starts fucking you as he leans forward and whispers in your ear. "Who do you belong to bitch?" Knowing better than to anger him, you reluctantly reply "I belong to you Niko." He chuckles as he responds "Yes you do. Never forget that."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 5, 'rough', 'sub');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/cum/thighs.mp4');
    scene.text('He continues fucking you as he whispers in your ear. "How are you liking it?" You look back at him and nod, which seems to turn him on as he quickly pulls out and cums on the floor in front of you. You turn to him once he\'s finished. "Are you satisfied? Can I leave now?"');
    scene.text('He gives your ass a firm smack. "You can go now, but never forget that you belong to me." You quickly pick up your clothes and get dressed before leaving the restroom.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore');
  }, goto: ['FedorMisc', 'Restroom'] },
    ]);
  } },
    ]);
  } },
              ]);
            }
            scene.actions([
              { label: 'Vaginal', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 5, 'rough', 'sub');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/payback/rough/vaginal1.mp4');
    // TODO-QSP: dynamic text: You slowly approach the sink and spread your legs as Niko approaches you from be...
    scene.text(`You slowly approach the sink and spread your legs as Niko approaches you from behind. You feel Niko's dick pressing against your pussy before he shoves it inside, evoking a moan from you as Niko whispers in your ear. "You like it when I shove my dick inside you, don't you ${((s as any).pcs_nickname ?? 0)}?"`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'butt', ((s as any).boy ?? 0));
    qspCall(s, 'arousal', 'vaginal', 5, 'rough', 'sub');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/payback/rough/vaginal2.mp4');
    scene.text('You turn to Niko as he points toward the mirror and says "Look. Do you know what I see? A filthy whore, getting what she deserves. Get used to that sight." You do as he says as tears run down your cheeks. Seeing this must have pushed Niko to the edge as he suddenly pulls out and his cum starts splattering over your back. "Remember your place bitch and never try to avoid me again!" he snarls before buttoning his pants and leaving the restroom.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore');
  }, goto: ['FedorMisc', 'Restroom'] },
    ]);
  } },
    ]);
  } },
            ]);
          }
          scene.actions([
            { label: 'Open your mouth', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'pee', (-5), 'sub', 'humiliation');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/payback/rough/piss1.mp4');
    scene.text('You open your mouth and close your eyes, waiting for Niko to start. A few seconds later, you feel a warm liquid splashing across your face, filling your mouth and getting in your nose as Niko shouts "SWALLOW IT ALL BITCH!"');
    scene.text('You try your best not to gag as you attempt to swallow all of his bitter tasting urine. You can\'t keep yourself from gagging as Niko continues shooting his urine down your throat. He then suddenly rubs his dick against your lips before shoving it into your mouth.');
    scene.actions([
      { label: 'Suck his dick', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0));
    qspCall(s, 'arousal', 'bj', 5, 'rough', 'sub');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/cum/swallow3.mp4');
    // TODO-QSP: dynamic text: You know exactly what he wants and start sucking his dick, trying your best to g...
    scene.text(`You know exactly what he wants and start sucking his dick, trying your best to get him off as quickly as possible, knowing that the sooner he finishes, the sooner you can wash up and leave. You lick and suck his dick, trying your best to ignore the rotten taste in your mouth as Niko looks down at you. "There you go ${((s as any).pcs_firstname ?? 0)}. Keep behaving like this and we'll get along just fine."`);
    scene.text('He then tilts his head back and starts moaning before suddenly grabbing the back of your head as his warm cum starts spurting into your mouth. You try your best to swallow every drop of it and after he finishes, he turns to you and says "You\'re learning. Good. Keep it up." He then buttons his pants before leaving the restroom.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore');
  }, goto: ['FedorMisc', 'Restroom'] },
    ]);
  } },
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
    case 'Payback':
      enterPayback(s, scene);
      break;
    case 'Payback 2':
      enterPayback2(s, scene);
      break;
    case 'Payback 3':
      enterPayback3(s, scene);
      break;
    case 'Payback 4':
      enterPayback4(s, scene);
      break;
    default:
      enterPayback(s, scene);
      break;
  }
}

export const NikoPayback: LocationDef = {
  name: 'NikoPayback',
  title: 'As you\'re walking towards the hallway, hands covering your m',
  region: 'other',
  description: ['As you\'re walking towards the hallway, hands covering your mouth and you feel your ribs being struck, causing you to recoil in pain as you\'re dragged into the nearby bathroom.'],
  enter: enter,
};
