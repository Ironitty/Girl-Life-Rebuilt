import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterSlyHouseIntro_1(s: GameState, scene: SceneBuilder): void {
  ((s as any).slyQW = (s as any).slyQW ?? {})['met'] = 2;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big248.jpg');
  scene.text('Wandering through Christina\'s house, you hear the TV going in the living room. Knowing Christina isn\'t in there, you realize it must be the infamous Sly.');
  // TODO-QSP: dynamic text: You walk into the room, see a fairly cute boy sitting on the couch watching TV, ...
  scene.text('You walk into the room, see a fairly cute boy sitting on the couch watching TV, and decide to make an impression. \'+iif(christinaQW[\'fight\'] = -1, \'You walk to a point in between him and the TV, with your hands on your hips, and stare him down.\', \'You walk over to him with your head bowed, making sure not to block the TV, and wait for him to address you.\')+\'');
  if (((s as any).christinaQW ?? 0)?.['fight'] === -1) {
    scene.text('He stares at you for a moment, before starting to laugh. "You\'re a fiesty one! My sister must not have broken you yet. That\'s ok, more for me to do. Follow. Now."');
    scene.actions([
      { label: 'Sullenly follow him', goto: ['Zvereva_Sly_events', 'Sly_house_intro_2'] },
    ]);
  } else {
    scene.text('He stares at you for a moment, apparently approving of your submissive attitude. "Looks like my sister has trained you well. Let\'s put that to the test. Follow. Now."');
    scene.actions([
      { label: 'Follow him', goto: ['Zvereva_Sly_events', 'Sly_house_intro_2'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSlyHouseIntro_2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big248.jpg');
  scene.text('You follow Sly into his bedroom, noticing that he does not close the door behind you. Looking around, you see a large room with a huge bed, a small couch, and a lot of different artsy looking items.');
  scene.text('He leads you to the center of the room, turns to you, and says "Kneel."');
  if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
    scene.actions([
      { label: 'I am a virgin', goto: ['Zvereva_Sly_events', 'virgin'] },
    ]);
  }
  if (((s as any).christinaQW ?? 0)?.['fight'] === -1) {
    scene.actions([
      { label: 'Refuse', goto: ['Zvereva_Sly_events', 'first_refuse'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Submit', goto: ['Zvereva_Sly_events', 'submit'] },
  ]);
  scene.build();
}

function enterVirgin(s: GameState, scene: SceneBuilder): void {
  ((s as any).slyQW = (s as any).slyQW ?? {})['virgin'] = 1;
  scene.img('images/characters/shared/headshots_main/big248.jpg');
  scene.text('"I\'m a virgin."');
  scene.text('He smiles a bit wickedly. "Master."');
  scene.text('"Huh?"');
  scene.text('"You will refer to me as Master."');
  if (((s as any).christinaQW ?? 0)?.['fight'] === -1) {
    scene.text('"No."');
    scene.text('He just stares at you a moment, then… <b>SLAP</b>.');
    scene.text('You rock back on your heels with your hand on your cheek, taken entirely offguard.');
    scene.text('"You were saying?"');
    scene.text('Sullenly, knowing Christina is just a call away and if you lost to her, and would have to fight off both, you say "I\'m a virgin, <i>Master</i>."');
    scene.text('"Good, that means you\'re unspoiled. Before today is done, you won\'t be able to say that anymore."');
    qspCall(s, 'pain', '', 2, 'cheeks', 'slap');
    qspCall(s, 'stat', '');
  } else {
    scene.text('"I\'m a virgin, <i>Master</i>."');
    scene.text('"Good, that means you\'re unspoiled. Before today is done, you won\'t be able to say that anymore."');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Insist', handler: (st: GameState) => {
    ((st as any).slyQW = (st as any).slyQW ?? {})['virgin'] = 2;
    scene.img('images/characters/shared/headshots_main/big248.jpg');
    if (((st as any).christinaQW ?? 0)?.['fight'] === -1) {
      scene.text('Cheeks turning red, you say "I don\'t have a choice. My mother makes me do regular check ups at the gynecologist. If she finds out I\'ve lost my virginity to you there will be a lot of trouble. For you."');
      scene.text('He stares at you, obviously trying to decide if you\'re lying or not, before saying "For now, we will work on training your other sexual skills. If I find out you\'re lying to me though, things will get bad for you, really fast. And the next time I have to remind you to call me Master I will leave a bruise."');
      scene.text('"I\'m not lying, <i>Master</i>. I can\'t stop you from doing what you want to me, but if you cross that line, it won\'t be me you\'re dealing with."');
      scene.text('"We will see. I believe I already gave you an order."');
      scene.actions([
        { label: 'Sullenly kneel', goto: ['Zvereva_Sly_events', 'submit'] },
      ]);
    } else {
      scene.text('Looking down, embarrassed, you say "I\'m sorry Master, I don\'t have a choice. My mother makes me do regular check ups at the gynecologist. If she finds out I\'ve lost my virginity to you there will be a lot of trouble."');
      scene.text('He stares at you, obviously trying to decide if you\'re lying or not, before saying "For now, we will work on training your other sexual skills. If I find out you\'re lying to me though, things will get bad for you, really fast."');
      scene.text('"I\'m not lying, Master. You can do anything and everything you want to me, except that."');
      scene.text('"We will see. I believe I already gave you an order."');
      scene.actions([
        { label: 'Kneel', goto: ['Zvereva_Sly_events', 'submit'] },
      ]);
    }
  } },
    { label: 'Submit', goto: ['Zvereva_Sly_events', 'submit'] },
  ]);
  scene.build();
}

function enterFirstRefuse(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big248.jpg');
  scene.text('"No."');
  scene.text('He just stares at you a moment, then… <b>SLAP</b>.');
  scene.text('You rock back on your heels with your hand on your cheek, taken entirely offguard. "How dare you!"');
  scene.text('He smiles a bit wickedly. "Master."');
  scene.text('Still in shock over being slapped, you say "Huh?"');
  scene.text('He smiles coldly. "You will refer to me as Master."');
  scene.text('"Like hell I will!"');
  scene.text('He simply raises his hand again, making you flinch back. "If you have at least half a brain between those slappable cheeks, I would kneel. Now."');
  qspCall(s, 'pain', '', 3, 'cheeks', 'slap');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Refuse again', goto: ['Zvereva_Sly_events', 'second_refuse'] },
    { label: 'Sullenly kneel', goto: ['Zvereva_Sly_events', 'submit'] },
  ]);
  scene.build();
}

function enterSecondRefuse(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big248.jpg');
  scene.text('Bravely, considering Christina is but a yell away, you say "Go fuck yourself with a sharp pointy stick. I\'m not your whore to do as you please with!"');
  scene.text('Looking amused, he says "Actually, that\'s exactly what you are. It\'s why my sister brought you here. And you forgot to call me Master again…" <b>SLAP</b>');
  scene.text('This one was hard enough to knock you off your feet entirely. Laying on the ground, seeing stars, you barely register the fact he has reached down and pulled you back to your feet. "Well that just happened," you hear yourself say out loud.');
  scene.text('"That one will leave a mark. Not off to a good start, are you? The next one will be a fist, in a place that won\'t bruise."');
  qspCall(s, 'pain', '', 9, 'cheeks', 'slap');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Sullenly kneel', goto: ['Zvereva_Sly_events', 'submit'] },
  ]);
  scene.build();
}

function enterSubmit(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big248.jpg');
  scene.text('On your knees, looking up at him, you see a frown cross his face. "Why are you dressed? Take your clothes off."');
  // TODO-QSP: dynamic text: Standing back up, you '+iif(christinaQW['fight'] = -1, 'angrily', 'slowly and se...
  scene.text('Standing back up, you \'+iif(christinaQW[\'fight\'] = -1, \'angrily\', \'slowly and seductively\')+\' remove your clothes before returning to a kneeling position in front of him.');
  scene.text('He pulls of his shirt and drops his pants, revealing his thick 15cm cock. "Let\'s start small. Stroke it, gently."');
  (s as any).pursepantytype = ((s as any).pantyworntype ?? 0);
  (s as any).pursepantynumber = ((s as any).pantywornnumber ?? 0);
  (s as any).pursebratype = ((s as any).braworntype ?? 0);
  (s as any).pursebranumber = ((s as any).brawornnumber ?? 0);
  qspCall(s, 'clothing', 'strip');
  qspCall(s, 'underwear', 'remove');
  if (((s as any).christinaQW ?? 0)?.['fight'] === -1) {
    scene.actions([
      { label: 'Angrily start stroking it', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A248');
    qspGoto(st, 'Zvereva_Sly_sex', 'hj_1');
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Gently start stroking it', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A248');
    qspGoto(st, 'Zvereva_Sly_sex', 'hj_1');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSlyHouseChat(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big248.jpg');
  if (((s as any).locat ?? 0)?.['Silvestr'] === 5) {
    scene.text('You find Silvestr watching TV. He looks bored.');
  } else {
    scene.text('You find Silvestr hanging out in his room. He looks bored.');
  }
  scene.text('"Speak, or get lost."');
  if (((s as any).slyQW ?? 0)?.['Sly_sex_daystart'] !== ((s as any).daystart ?? 0)) {
    if (((s as any).slyQW ?? 0)?.['virgin'] === 2) {
      if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
        scene.actions([
          { label: 'Offer virginity', handler: (st: GameState) => {
    ((st as any).slyQW = (st as any).slyQW ?? {})['Sly_sex_daystart'] = ((st as any).daystart ?? 0);
    ((st as any).slyQW = (st as any).slyQW ?? {})['virgin'] = 3;
    scene.img('images/shared/sex/undress/kotovpre' + (Math.floor(Math.random() * 4) + 11) + '.mp4');
    if (((st as any).christinaQW ?? 0)?.['fight'] === -1) {
      scene.text('You start stripping your clothes off in front of him. The bored look on his face is quickly replaced by a hungry look.');
    } else {
      scene.text('You slowly and seductively start stripping your clothes off in front of him. The bored look on his face is quickly replaced by a hungry look.');
    }
    scene.text('"Would you like my cherry, Master?"');
    scene.text('He practically lunges for you, clothes flying everywhere, in his eagerness.');
    qspCall(st, 'Zvereva_Sly_sex', 'Sly_random_sex_acts');
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Offer virginity (Lie)', handler: (st: GameState) => {
    ((st as any).slyQW = (st as any).slyQW ?? {})['Sly_sex_daystart'] = ((st as any).daystart ?? 0);
    ((st as any).slyQW = (st as any).slyQW ?? {})['virgin'] = 3;
    scene.img('images/shared/sex/undress/kotovpre' + (Math.floor(Math.random() * 4) + 11) + '.mp4');
    if (((st as any).christinaQW ?? 0)?.['fight'] === -1) {
      scene.text('You start stripping your clothes off in front of him. The bored look on his face is quickly replaced by a hungry look.');
    } else {
      scene.text('You slowly and seductively start stripping your clothes off in front of him. The bored look on his face is quickly replaced by a hungry look.');
    }
    scene.text('"Would you like my cherry, Master?"');
    scene.text('He practically lunges for you, clothes flying everywhere, in his eagerness.');
    qspCall(st, 'Zvereva_Sly_sex', 'Sly_random_sex_acts');
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Offer yourself', handler: (st: GameState) => {
    ((st as any).slyQW = (st as any).slyQW ?? {})['Sly_sex_daystart'] = ((st as any).daystart ?? 0);
    scene.img('images/shared/sex/undress/kotovpre' + (Math.floor(Math.random() * 4) + 11) + '.mp4');
    if (((st as any).christinaQW ?? 0)?.['fight'] === -1) {
      scene.text('You start stripping your clothes off in front of him. The bored look on his face is quickly replaced by a hungry look.');
    } else {
      scene.text('You slowly and seductively start stripping your clothes off in front of him. The bored look on his face is quickly replaced by a hungry look.');
    }
    scene.text('He stands up, sheds his own clothes, and starts towards you.');
    qspCall(st, 'Zvereva_Sly_sex', 'Sly_random_sex_acts');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the room', goto: ['Zvereva_house', 'hallw'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'Sly_house_intro_1':
      enterSlyHouseIntro_1(s, scene);
      break;
    case 'Sly_house_intro_2':
      enterSlyHouseIntro_2(s, scene);
      break;
    case 'virgin':
      enterVirgin(s, scene);
      break;
    case 'first_refuse':
      enterFirstRefuse(s, scene);
      break;
    case 'second_refuse':
      enterSecondRefuse(s, scene);
      break;
    case 'submit':
      enterSubmit(s, scene);
      break;
    case 'sly_house_chat':
      enterSlyHouseChat(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const Zvereva_Sly_events: LocationDef = {
  name: 'Zvereva_Sly_events',
  title: 'Wandering through Christina\'s house, you hear the TV going i',
  region: 'other',
  enter: enter,
};
