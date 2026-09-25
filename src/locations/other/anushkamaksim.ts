import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterMaksimBlackmail(s: GameState, scene: SceneBuilder): void {
  (s as any).AnushkaLoc = 2;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.img('images/locations/pavlovsk/resident/apartment/anushapt/maksim.jpg');
  scene.text('You can\'t believe you\'re about to be blackmailed by a boy not old enough to even grow facial hair yet. You sigh, resigned to your fate. "Fine. What do you want?"');
  scene.text('He grins at you and looks you over as if he\'s giving it some serious thought. "For now, just show me your tits."');
  qspCall(s, 'willpower', 'humiliation', 'resist', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Tell him to fuck off', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Tell him to fuck off', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/maksim.jpg');
    scene.text('"Fuck off, you little shit!" you snarl and he blinks in surprise, eliciting a smirk from you. He clearly expected you to agree without question.');
    scene.text('Anger washes over him. "Fine then, bitch! I\'ll just go and show her!"');
    scene.text('You smirk at him. "Go right ahead, I\'m sure your sister won\'t mind that you were trying to blackmail one of her friends. Who do you think she\'ll be more pissed at?"');
    scene.text('He sneers at you and pauses before angrily walking away.');
    scene.actions([
      { label: 'Leave', goto: ['pav_complex', 'start'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Show him your tits', handler: (st: GameState) => {
    ((st as any).maksimQW = (st as any).maksimQW ?? {})['blackmail'] = 1;
    ((st as any).maksimQW = (st as any).maksimQW ?? {})['blackmail_flash'] = ((st as any).maksimQW['blackmail_flash'] ?? 0) + (1);
    qspCall(st, 'fame', 'pav', 'sex', 1);
    qspCall(st, 'exp_gain', 'inhib', (Math.floor(Math.random() * 3) + 1));
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/hallflashtits.jpg');
    scene.text('You sigh as you pull your clothes aside and show him your bare breasts. His grin widens as he stares at you. A few minutes pass and you\'re about to say something when he reaches out with his hand.');
    scene.text('You quickly pull your shirt back down. "You said show you."');
    scene.text('"Fine," he sneers before smiling again. "Come with me."');
    qspCall(st, 'arousal', 'flashlite', 5, 'humiliation', 'sub');
    qspCall(st, 'flash', 'exhibitionism', 'tits', 'secluded', 5);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Follow him', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/resident/maksim/downstairs.jpg');
    scene.text('You follow him as he leads you down the stairs and outside to the playground. Once there, he walks over to a few boys around his age and stops. The boys check you out. "Who\'s that?" one of them asks.');
    scene.text('He has his back to you as he responds. You can only imagine the smug look on his face. "She does things for me."');
    scene.text('One of the boys snorts a laugh. "Sure she does."');
    scene.text('He turns towards you. "Go buy me a pack of smokes."');
    scene.text('"What?!"');
    scene.text('"I said go buy me a pack of cigarettes." He gives you a stern look, but it just shows how young he is and is not intimidating at all.');
    scene.text('You sigh. This is only going to get worse. You\'ll have to figure a way out of this, but for now, you can only play along. You turn and start walking to the nearby kiosk.');
    scene.text('As you walk away, you hear the boys talking, surprised that you\'re doing what Maksim says as he acts smug.');
    if (qspFunc(s, 'money', 'can_afford', 150) === 1) {
      scene.actions([
        { label: 'Buy him cigarettes', handler: (st: GameState) => {
    qspCall(st, 'money', 'pay', 150);
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    scene.img('images/characters/pavlovsk/resident/maksim/buycig.jpg');
    scene.text('You walk to the kiosk and get in line. You wait your turn, wondering how you found yourself in this situation. When you finally get up to the window, you buy a pack of cigarettes, pay for them and start walking back.');
    scene.actions([
      { label: 'Walk back', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/resident/maksim/smoking.jpg');
    scene.text('When you get back, you see the other boys all eying you. You can only imagine what Maksim has been telling them. You walk up to them and hand him the pack of cigarettes. "Here you go."');
    scene.text('They all start muttering, seemingly surprised you actually did it.');
    scene.text('Maksim takes the pack of cigarettes and passes them out to his friends. They all light up and a few of them cough, but it seems most of them have smoked before. After a few minutes, you\'re about to leave when one of them starts talking to Maksim. "Having her buy you cigarettes is one thing…" You see the rest all nodding in agreement.');
    scene.text('Maksim smirks at them. "Oh, I see how it is. You have no faith in me! Okay then, let me prove it." He turns towards you. "Show me your tits."');
    scene.text('You give him a look of surprise and don\'t move, but his stern glare tells you what will happen if you don\'t.');
    scene.actions([
      { label: 'Flash them your tits', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'fame', 'pav', 'sex', 2);
    qspCall(st, 'exp_gain', 'inhib', (Math.floor(Math.random() * 3) + 1));
    ((st as any).maksimQW = (st as any).maksimQW ?? {})['blackmail_flash_friends'] = ((st as any).maksimQW['blackmail_flash_friends'] ?? 0) + (1);
    (st as any).flash_image = 'images/characters/pavlovsk/resident/maksim/flashtits1.jpg';
    ((st as any).flash_text = (st as any).flash_text ?? {})[0] = 'You sigh as you pull aside your clothes and flash your breasts at them.';
    ((st as any).flash_text = (st as any).flash_text ?? {})[0] = ((st as any).flash_text[0] ?? 0) + ('<br>"Holy shit! She really did it!" They all look surprised, but Maksim just looks smug.');
    ((st as any).flash_text = (st as any).flash_text ?? {})[0] = ((st as any).flash_text[0] ?? 0) + ('<br>"See? I told you guys." One of them reaches for your bare breasts and you start to back away, but Maksim grabs his hand and pushes it away. "Hey, no touching!" You\'re surprised and a little relieved.');
    ((st as any).flash_text = (st as any).flash_text ?? {})[0] = ((st as any).flash_text[0] ?? 0) + ('<br><br>"Why not?" his friend asks.');
    ((st as any).flash_text = (st as any).flash_text ?? {})[0] = ((st as any).flash_text[0] ?? 0) + ('<br>"I\'m still breaking her in and it will be when I say." He gives his friends a look to show that he\'s in charge here. "Now pay up!"');
    ((st as any).flash_text = (st as any).flash_text ?? {})[1] = 'The boys start handing over money, way more than the cigarettes would cost. He must have bet them that you would show your breasts. You sigh again and can\'t believe you\'re more or less being pimped out by a young boy. They all stare at your breasts for a few more minutes before Maksim looks at you. "Okay, you can go. We\'ll talk later." He tries to make it sound like he\'s in charge and sexy at the same time. He failed, but his friends seem to have bought it.';
    ((st as any).flash_text = (st as any).flash_text ?? {})[1] = ((st as any).flash_text[1] ?? 0) + ('<br>You can\'t help but roll your eyes as you rearrange your clothes back in place and walk away.');
    qspCall(st, 'flash', 'tits', 'outdoors', 5, 2);
    scene.actions([
      { label: 'Leave', goto: ['pav_complex', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Tell him you can\'t afford them', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    scene.img('images/characters/pavlovsk/resident/maksim/buycig.jpg');
    scene.text('You look down at the ground, then back up at him. "I don\'t have money to buy them."');
    scene.text('He looks at you in disbelief. "Are you kidding me? How pathetic are you?!" he snarls before reaching into his pocket and pulling out several crumbled bills. "Here, take this and go buy them."');
    scene.text('You walk to the kiosk and get in line. You wait your turn, wondering how you found yourself in this situation. When you finally get up to the window, you buy a pack of cigarettes, pay for them and start walking back.');
    scene.actions([
      { label: 'Walk back', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/resident/maksim/smoking.jpg');
    scene.text('When you get back, you see the other boys all eying you. You can only imagine what Maksim has been telling them. You walk up to them and hand him the pack of cigarettes. "Here you go."');
    scene.text('They all start muttering, seemingly surprised you actually did it.');
    scene.text('Maksim takes the pack of cigarettes and passes them out to his friends. They all light up and a few of them cough, but it seems most of them have smoked before. After a few minutes, you\'re about to leave when one of them starts talking to Maksim. "Having her buy you cigarettes is one thing…" You see the rest all nodding in agreement.');
    scene.text('Maksim smirks at them. "Oh, I see how it is. You have no faith in me! Okay then, let me prove it." He turns towards you. "Show me your tits."');
    scene.text('You give him a look of surprise and don\'t move, but his stern glare tells you what will happen if you don\'t.');
    scene.actions([
      { label: 'Flash them your tits', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'fame', 'pav', 'sex', 2);
    qspCall(st, 'exp_gain', 'inhib', (Math.floor(Math.random() * 3) + 1));
    ((st as any).maksimQW = (st as any).maksimQW ?? {})['blackmail_flash_friends'] = ((st as any).maksimQW['blackmail_flash_friends'] ?? 0) + (1);
    (st as any).flash_image = 'images/characters/pavlovsk/resident/maksim/flashtits1.jpg';
    ((st as any).flash_text = (st as any).flash_text ?? {})[0] = 'You sigh as you pull aside your clothes and flash your breasts at them.';
    ((st as any).flash_text = (st as any).flash_text ?? {})[0] = ((st as any).flash_text[0] ?? 0) + ('<br>"Holy shit! She really did it!" They all look surprised, but Maksim just looks smug.');
    ((st as any).flash_text = (st as any).flash_text ?? {})[0] = ((st as any).flash_text[0] ?? 0) + ('<br>"See? I told you guys." One of them reaches for your bare breasts and you start to back away, but Maksim grabs his hand and pushes it away. "Hey, no touching!" You\'re surprised and a little relieved.');
    ((st as any).flash_text = (st as any).flash_text ?? {})[0] = ((st as any).flash_text[0] ?? 0) + ('<br><br>"Why not?" his friend asks.');
    ((st as any).flash_text = (st as any).flash_text ?? {})[0] = ((st as any).flash_text[0] ?? 0) + ('<br>"I\'m still breaking her in and it will be when I say." He gives his friends a look to show that he\'s in charge here. "Now pay up!"');
    ((st as any).flash_text = (st as any).flash_text ?? {})[1] = 'The boys start handing over money, way more than the cigarettes would cost. He must have bet them that you would show your breasts. You sigh again and can\'t believe you\'re more or less being pimped out by a young boy. They all stare at your breasts for a few more minutes before Maksim looks at you. "Okay, you can go. We\'ll talk later." He tries to make it sound like he\'s in charge and sexy at the same time. He failed, but his friends seem to have bought it.';
    ((st as any).flash_text = (st as any).flash_text ?? {})[1] = ((st as any).flash_text[1] ?? 0) + ('You can\'t help but roll your eyes as you rearrange your clothes back in place and walk away.');
    qspCall(st, 'flash', 'tits', 'outdoors', 5, 2);
    scene.actions([
      { label: 'Leave', goto: ['pav_complex', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterHallwayFlashTits(s: GameState, scene: SceneBuilder): void {
  (s as any).AnushkaLoc = 2;
  ((s as any).maksimQW = (s as any).maksimQW ?? {})['blackmail_flash'] = ((s as any).maksimQW['blackmail_flash'] ?? 0) + (1);
  qspCall(s, 'fame', 'pav', 'sex', 1);
  (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 3) + 1));
  scene.img('images/locations/pavlovsk/resident/apartment/anushapt/hallflashtits.jpg');
  scene.text('You sigh as you pull your clothes aside and show him your bare breasts. His grin widens as he stares at you and a few seconds pass before he reaches out with his hand.');
  scene.text('You quickly pull your shirt back down. "You said show you."');
  scene.text('"Fine," he sneers before stepping out of your way. "Go on then."');
  qspCall(s, 'arousal', 'flashlite', 1, 'humiliation', 'sub');
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Enter', goto: ['anushapt', 'hallway'] },
  ]);
  scene.build();
}

function enterHallwayFlashPussy(s: GameState, scene: SceneBuilder): void {
  (s as any).AnushkaLoc = 2;
  ((s as any).maksimQW = (s as any).maksimQW ?? {})['blackmail_flash'] = ((s as any).maksimQW['blackmail_flash'] ?? 0) + (1);
  qspCall(s, 'fame', 'pav', 'sex', 1);
  (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 3) + 1));
  if (((s as any).PCLoSkirt ?? 0) > 0) {
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/maksim_blackmail/flash_pussy_dress.jpg');
    scene.text('You sigh as you lift your skirt to show him your naked pussy. His grin widens as he stares at you and a few seconds pass before he reaches out with his hand.');
    scene.text('You quickly pull your skirt back down. "You said show you."');
    scene.text('"Fine," he sneers before stepping out of your way. "Go on then."');
  } else {
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/maksim_blackmail/flash_pussy_pants.jpg');
    scene.text('You sigh as you pull your pants down to show off your naked pussy to him. His grin widens as he stares at you and a few seconds pass before he reaches out with his hand.');
    scene.text('You quickly pull your pants back up. "You said show you."');
    scene.text('"Fine," he sneers before stepping out of your way. "Go on then."');
  }
  qspCall(s, 'arousal', 'flashlite', 1, 'humiliation', 'sub');
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Enter', goto: ['anushapt', 'hallway'] },
  ]);
  scene.build();
}

function enterMaksimRoomNaked(s: GameState, scene: SceneBuilder): void {
  (s as any).AnushkaLoc = 2;
  ((s as any).maksimQW = (s as any).maksimQW ?? {})['blackmail_flash'] = ((s as any).maksimQW['blackmail_flash'] ?? 0) + (1);
  qspCall(s, 'fame', 'pav', 'sex', 1);
  (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 3) + 1));
  scene.img('images/locations/pavlovsk/resident/apartment/anushapt/maksim_blackmail/strip_naked.jpg');
  scene.text('You follow him to his room and, just as he said, Timofey isn\'t here. Maksim sits on his bed looking at you with a huge grin. "Well go on, strip. Slow and sexy."');
  scene.text('You sigh loudly, but do as he says. You slowly start stripping out of your clothes as he leers at you. Once you\'re naked, you stand still for a few minutes and he continues to leer at you before you start grabbing your clothes. "You\'ve seen enough."');
  scene.text('"Fine," he sneers. "You can go then."');
  scene.text('You quickly get dressed and leave his room.');
  qspCall(s, 'arousal', 'flash', 5, 'humiliation', 'sub');
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Go back to the hall', goto: ['anushapt', 'hallway'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'maksim_blackmail':
      enterMaksimBlackmail(s, scene);
      break;
    case 'hallway_flash_tits':
      enterHallwayFlashTits(s, scene);
      break;
    case 'hallway_flash_pussy':
      enterHallwayFlashPussy(s, scene);
      break;
    case 'maksim_room_naked':
      enterMaksimRoomNaked(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const anushkamaksim: LocationDef = {
  name: 'anushkamaksim',
  title: 'You can\'t believe you\'re about to be blackmailed by a boy no',
  region: 'other',
  enter: enter,
};
