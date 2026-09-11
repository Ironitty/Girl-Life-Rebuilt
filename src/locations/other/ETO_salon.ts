import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterSolarium(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/mall/salon/solar1.jpg');
  scene.text('You walk into the room with the solarium. The room is quiet with dim lighting, and it seems like there is nobody here except for the administrator. You look at the door.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Close the door', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/solar8.jpg');
    scene.text('You lock the door and strip naked, arranging yourself in the solarium, lying on your stomach.');
    scene.actions([
      { label: 'Next', handler: (st: GameState) => {
    qspCall(s, 'mood', 'raise', 'tiny');
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/mall/salon/solar9.jpg');
    scene.text('You get tanned and relaxed. Satisfied, you exit the solarium and get dressed before heading back into the salon hall.');
    scene.actions([
      { label: 'Leave', goto: ['salon', 'start'] },
    ]);
  } },
    ]);
  } },
    { label: 'Leave the door slightly open', handler: (st: GameState) => {
    qspCall(s, 'mood', 'raise', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/mall/salon/solar1.jpg');
    scene.text('You decide to fool around a bit and leave the door open. You start to slowly undress. When you remove your bra and expose your breasts, long chills run down your bare back. Suddenly, anyone could walk in and see your breasts. What would they think of you?');
    scene.actions([
      { label: 'Undress', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/mall/salon/solar2.jpg');
    scene.text('You continue to undress and now your bare ass is exposed. Suddenly, you have a feeling that someone is watching you. Your breathing quickens, and waves of excitement run through your body. If someone is really spying on you, you need to strip as sexily as possible. You don\'t know why, but it feels like an order from your feminine nature.');
    scene.actions([
      { label: 'Undress completely', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/mall/salon/solar4.jpg');
    scene.text('You finish undressing and climb naked into the solarium. You can sense someone at the door watching you. Curious, you press your legs together and bend them to the side, peering into the darkness of the slightly open door. You can actually see a shadow and hear sniffing. There is no doubt—someone is obviously watching you. Realizing that someone is watching you while you lie completely naked makes your body tremble. You feel a pleasant sensation in your abdomen. You get so excited that you start to spread your legs in different directions, to the joy of the mysterious stranger.');
    scene.actions([
      { label: 'Spread your legs', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/mall/salon/solar5.jpg');
    scene.text('"I\'m spreading my legs like a lustful bitch. What must he think of me? Maybe he\'s not alone, and all the staff have gathered to look at me. Lord, what if they\'re filming me, and tomorrow I\'ll be all over the internet?" Thoughts rush through your head, but your excitement is too high, and you have no strength to stop.');
    scene.actions([
      { label: 'Masturbate', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (20);
    scene.img('images/locations/city/citycenter/mall/salon/solar6.jpg');
    scene.text('You start furiously rubbing your pussy to bring your shameless adventure to a climax. Gradually, you get so excited that you can\'t hold back anymore. You start to moan and push at your labia with your fingers, showing your pussy to the stranger in all its glory.');
    qspCall(s, 'arousal', 'masturbate', 10, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Next', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/mall/salon/solar7.jpg');
    scene.text('Finally, you experience a powerful orgasm and collapse in exhaustion. You can no longer hear any sniffing; it seems your secret observer has finished watching you.');
    scene.text('');
    scene.text('Gradually you come to your senses, get dressed, and leave the booth.');
    qspCall(s, 'arousal', 'masturbate', 10, 'exhibitionism');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['salon', 'start'] },
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
  } },
  ]);
  scene.build();
}

function enterMarketGrope(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/market/rinokplug.jpg');
  scene.text('You feel good, enjoying the scent of some expensive men\'s cologne.');
  scene.text('You feel a guy standing behind you—he\'s a groper and is now intent on touching your ass!');
  scene.text('His hand grabs one of your buttcheeks.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Move away', goto: ['city_market', 'start'] },
    { label: 'Next', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal_finger', 10, '', 'rough', 'no_orgasm_msg');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/market/butplag.jpg');
    scene.text('You show no displeasure at his actions, even with many people around. All you can hear are people groaning because of the heat.');
    scene.text('He moves his hand to your other cheek, pausing briefly in the middle. Little by little, he begins to squeeze your ass in his hands. When you don\'t react, he begins to move his fingers under the fabric of your skirt and between your legs.');
    scene.text('He feels that his "victim" is startled but not surprised. Being experienced, he realizes that you\'re excited and already quite wet.');
    scene.text('You feel really aroused. You want the guy to pull up your skirt and put his cock inside… The sensations overwhelm you, your excitement increasing. You have to hold yourself back from moaning…');
    scene.text('Meanwhile, the man pulls at your skirt and with skillful movements gets under it. His hand is on your sweat-dampened ass, and his fingers touch your anal entrance.');
    scene.text('You shudder slightly; nobody notices anything despite the large crowd. He pauses momentarily, seemingly shocked to find a girl walking around the market without panties and with a plug in her ass.');
    scene.text('You\'re at the peak of what you can bear; a little more and you\'ll cum.');
    scene.text('The guy is certainly not done. He slips a finger into your vagina and begins thrusting it in and out. Then you begin to tremble, take a few noisy, deep breaths, and the guy\'s fingers are coated with your wetness.');
    scene.text('"Wow!" he whispers in your ear. "I didn\'t expect such a reaction from a lady, especially not one who would enjoy it."');
    scene.text('An older woman approaching retirement age asks you:');
    scene.text('"Dearie, can you help me?"');
    scene.text('"I\'m sorry, I don\'t work here," you answer.');
    scene.text('The woman must have startled the pervert because when you turn around, he is nowhere to be found.');
    scene.actions([
      { label: 'Next', goto: ['city_market', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'solarium':
      enterSolarium(s, scene);
      break;
    case 'market_grope':
      enterMarketGrope(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const ETO_salon: LocationDef = {
  name: 'ETO_salon',
  title: 'You walk into the room with the solarium. The room is quiet ',
  region: 'other',
  enter: enter,
};
