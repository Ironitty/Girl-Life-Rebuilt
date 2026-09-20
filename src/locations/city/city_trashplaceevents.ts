import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterPos2(s: GameState, scene: SceneBuilder): void {
  (s as any).bumtolik = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/bum.jpg');
  scene.text('You see a hungover homeless man. He looks at you and you give him an angry stare in return.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enterPos3(s: GameState, scene: SceneBuilder): void {
  (s as any).bumtolik = 2;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/bum.jpg');
  scene.text('You\'re standing in front of a hungover homeless man.');
  scene.text('"Is that you, young lady? Don\'t be scared…" he says with a predatory smile.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask what he wants', goto: ['city_trashplaceevents', 'pos4'] },
    { label: 'Leave', goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enterPos4(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/bum.jpg');
  scene.text('"What do you want from me?" you ask.');
  scene.text('"Nothing…" he mumbles at first before looking at you. "You know that today is a holiday right? It\'s traditional to help those less fortunate on holidays…"');
  scene.text('"In short, you want money," you reply while rolling your eyes.');
  scene.text('"Yeah."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Give him money', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 20, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspGoto(st, 'city_trashplaceevents', 'pos5');
    }
  } },
    { label: 'Give him money', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 100, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspGoto(st, 'city_trashplaceevents', 'pos6');
    }
  } },
    { label: 'Leave', goto: ['city_trashplace', ''] },
  ]);
  scene.build();
}

function enterPos5(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).bumtolik = 2;
  qspCall(s, 'money', 'pay', 20, 'cash');
  qspCall(s, 'stat', '');
  scene.text('"Oh, that\'s so touching! Nobody ever helps me! May I kiss your hand in thanks?"');
  scene.text('He looks at you with pleading eyes.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Yes', goto: ['city_trashplaceevents', 'pos7'] },
    { label: 'No', goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enterPos6(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).bumtolik = 2;
  qspCall(s, 'money', 'pay', 100, 'cash');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/bum.jpg');
  scene.text('"Wow, you\'re so generous! So much booze… Uh, I mean, now I can buy some food for myself…" he mumbles before quickly walking away.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enterPos7(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/bum_kiss.jpg');
  scene.text('The bum, gently and in disbelief, pulls your hand up to his lips and kisses it. He\'s quite charming and closes his eyes in pleasure.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Further', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/residential/bum_gra.jpg');
    scene.text('He then suddenly grabs you and starts sniffing furiously between your legs.');
    scene.actions([
      { label: 'Slap him and run away', goto: ['city_residential', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterPos8(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).bumtolik = 3;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/bum.jpg');
  scene.text('"How do I say this?" he asks. "I, uh, gathered some money and spent some of it on drink, but nothing on food. I\'ve been watching you and appreciate your beauty."');
  scene.text('"What are you getting at?" you interrupt.');
  // TODO-QSP: dynamic text: "Nothing like that!" he stammers. "I just wanted to offer you money in exchange ...
  scene.text(`"Nothing like that!" he stammers. "I just wanted to offer you money in exchange for your beauty. You show me something, and I just look. I'll give you everything that I gathered during the week. As much as ${qspFunc(s, 'money', 'string_profit', 50)}!"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Agree', handler: (st: GameState) => {
    (st as any).bomjqw = 1;
    qspCall(st, 'money', 'earn', 50);
    (st as any).bomjshet = ((st as any).bomjshet ?? 0) + (1);
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + (5);
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/residential/bumt1.jpg');
    scene.text('Looking around to make sure that no one else can see, you show the homeless man your breasts and panties.');
    scene.text('The bum looks at you with wide eyes as he violently jerks his dick. With a loud groan, the homeless man collapses on his cardboard box.');
    scene.text('You quickly grab his money and run away.');
    qspCall(st, 'arousal', 'flashlite', 10);
    qspCall(st, 'arousal', 'flash', (-10));
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['city_residential', ''] },
    ]);
  } },
    { label: 'Leave', goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enterPos9(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).bumtolik = 4;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/bumt4.jpg');
  scene.text('The girl introduces herself as Olga and states that she works to help the homeless of the city.');
  scene.text('"I certainly never thought that I would actually do it!" she says.  "I was sent here by the court as a punishment for an offense, although I guess helping these bums helps my karma. If you\'re interested in helping out, then we could use people here."');
  scene.text('She hands you a business card that has "Mercy Clinic" written on it. The address indicates that it\'s located in the city\'s industrial region.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enterPos10(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/bum.jpg');
  scene.text('"How do I say this?" he asks. "I, uh, gathered some money and spent some of it on drink, but nothing on food. I\'ve been watching you and appreciate your beauty."');
  scene.text('"What are you getting at?" you interrupt.');
  // TODO-QSP: dynamic text: "Nothing like that!" he stammers. "I just wanted to offer you money in exchange ...
  scene.text(`"Nothing like that!" he stammers. "I just wanted to offer you money in exchange for your beauty. You show me something, and I just look. I'll give you everything that I gathered during the week. As much as ${qspFunc(s, 'money', 'string_profit', 50)}!"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Agree', handler: (st: GameState) => {
    qspCall(st, 'money', 'earn', 50);
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/residential/bumt1.jpg');
    scene.text('Looking around to make sure that no one else can see, you show the homeless man your breasts and panties.');
    scene.text('The bum looks at you with wide eyes as he violently jerks his dick. With a loud groan, the homeless man collapses on his cardboard box.');
    scene.text('You quickly grab his money and prepare to make a run for it.');
    qspCall(st, 'arousal', 'flashlite', 10);
    qspCall(st, 'arousal', 'flash', (-10));
    qspCall(st, 'stat', '');
    if (((st as any).bomjqw ?? 0) > 0) {
      scene.text('"Thank you very much once again," he starts. "But if you agree to one more service?"');
      scene.text('"What?" you ask suspiciously.');
      // TODO-QSP: dynamic text: "Could you help an old man with your lovely mouth? I''ll pay <<$func(''money'', ...
      scene.text(`"Could you help an old man with your lovely mouth? I'll pay ${qspFunc(s, 'money', 'string_profit', 150)}!"`);
      if (((st as any).pcs_horny ?? 0) < 50) {
        scene.actions([
          { label: 'No!', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    scene.text('"No, that\'s disgusting!" you reply before turning around and walking away.');
    scene.actions([
      { label: 'Leave', goto: ['city_residential', ''] },
    ]);
  } },
        ]);
      } else {
        qspCall(st, 'npcgeneratec', '', 0, 'Homeless man', (Math.floor(Math.random() * 31) + 25));
        qspCall(st, 'boyStat', '', ((st as any).npclastgenerated ?? 0));
        if (((st as any).bomjshet ?? 0) >= 10) {
          scene.actions([
            { label: 'Give yourself to the homeless man', handler: (st: GameState) => {
    (st as any).dick = 14;
    qspCall(st, 'money', 'earn', 300);
    (st as any).bomjshet = ((st as any).bomjshet ?? 0) + (1);
    qspCall(st, 'cum_call', 'butt', 'hobo');
    scene.img('images/locations/city/residential/street/sex/old1,' + (Math.floor(Math.random() * 3) + 0) + '.jpg');
    scene.text('This isn\'t your first time dealing with such people and you\'ve already learned to overcome any aversion, so you decide to give him something a little better than just a blowjob.');
    scene.text('You take off your panties and throw them at him. A smile appears on his face and after throwing off his pants, the old man moves towards you.');
    scene.text('You get down on all fours and feel the tip of his cock pushing into your pussy. He starts vigorously fucking you, but only lasts a few seconds before he pulls out and splatters his cum over your ass.');
    scene.text('You then quickly get dressed, take your money, and run away before anyone sees you.');
    qspCall(st, 'arousal', 'vaginal', 15, 'prostitution');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['city_residential', ''] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Get on your knees', handler: (st: GameState) => {
    (st as any).bomjshet = ((st as any).bomjshet ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/residential/street/sex/old0,' + (Math.floor(Math.random() * 4) + 0) + '.jpg');
    scene.text('"This is so disgusting…" you think to yourself, but you need the money.');
    scene.text('You get down on your knees in front of him. Amazed by his luck, he leisurely pulls out his filthy cock, which looks and smells like it hasn\'t been washed in months.');
    scene.text('You hold in your gag reflex as you take his cock into your mouth and start sucking.');
    qspCall(st, 'arousal', 'bj', 3, 'prostitution');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Suck harder', handler: (st: GameState) => {
    scene.text('You start sucking harder and your efforts are paying off. The old man is ready to cum…');
    scene.actions([
      { label: 'In your mouth', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'money', 'earn', 150);
    qspCall(st, 'cum_call', 'mouth_swallow', 'hobo');
    scene.img('images/shared/sex/cum/mouth/cum1,' + (Math.floor(Math.random() * 11) + 0) + '.mp4');
    scene.text('A few seconds later, your mouth fills with nasty tasting cum that you force yourself to quickly swallow. You take your money and quickly leave before someone sees you.');
    qspCall(st, 'arousal', 'bj', 3, 'prostitution');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['city_residential', ''] },
    ]);
  } },
      { label: 'On your face', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'money', 'earn', 150);
    qspCall(st, 'cum_call', 'face', 'hobo');
    scene.img('images/shared/sex/public/cum0,' + (Math.floor(Math.random() * 4) + 0) + '.jpg');
    scene.text('A few seconds later, your face is covered in nasty smelling cum. You take your money and quickly leave before someone sees you.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Leave', goto: ['city_residential', ''] },
    ]);
  } },
    { label: 'Leave', goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'pos2':
      enterPos2(s, scene);
      break;
    case 'pos3':
      enterPos3(s, scene);
      break;
    case 'pos4':
      enterPos4(s, scene);
      break;
    case 'pos5':
      enterPos5(s, scene);
      break;
    case 'pos6':
      enterPos6(s, scene);
      break;
    case 'pos7':
      enterPos7(s, scene);
      break;
    case 'pos8':
      enterPos8(s, scene);
      break;
    case 'pos9':
      enterPos9(s, scene);
      break;
    case 'pos10':
      enterPos10(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const city_trashplaceevents: LocationDef = {
  name: 'city_trashplaceevents',
  title: 'You see a hungover homeless man. He looks at you and you giv',
  region: 'city',
  enter: enter,
};
