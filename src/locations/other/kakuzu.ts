import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).menu_loc = 'kakuzu';
  (s as any).menu_arg = 'start';
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Mansion Kakuzu</b></center>');
  scene.img('images/locations/city/industrial/mansion/mansion.jpg');
  scene.text('Old gloomy mansion, which even at the local gangs don\'t approach out of fear and sincerely believe that something evil lives there. No need to have some sort of skills that make your system, from the death blows.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Enter the mansion', goto: ['kakuzu', 'mansion'] },
    { label: 'Leave', goto: ['city_industrial', ''] },
  ]);
  scene.build();
}

function enterMansion(s: GameState, scene: SceneBuilder): void {
  (s as any).location = 'event';
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Mansion Kakuzu</b></center>');
  scene.img('images/locations/city/industrial/mansion/mansion1.jpg');
  scene.text('The room sits Kakuzu not paying any attention to you');
  // TODO-QSP: end
  scene.actions([
    { label: 'Talk to Kakuzu', goto: ['kakuzu', 'mansion1'] },
    { label: 'Leave', goto: ['kakuzu', 'start'] },
  ]);
  scene.build();
}

function enterMansion1(s: GameState, scene: SceneBuilder): void {
  (s as any).location = 'event';
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Kakuzu</b></center>');
  scene.img('images/characters/city/kakuzu/kakuzu.jpg');
  if (((s as any).tobiQW ?? 0) === 1) {
    // TODO-QSP: dynamic text: I know who you are and what you need. Pay ' + $func('money', 'string_price', 100...
    scene.text('I know who you are and what you need. Pay 100₽k and then I will teach you how to achieve affinity with the elements.');
  }
  if (((s as any).tobiQW ?? 0) === 2) {
    // TODO-QSP: dynamic text: You have <<srodpaper>> sheets of paper to determine the affinity of the elements...
    scene.text(`You have ${((s as any).srodpaper ?? '')} sheets of paper to determine the affinity of the elements. If you run out of paper, you have to buy more at Kakuzu 10000₽ a sheet.`);
  }
  if (((s as any).tobiQW ?? 0) === 1) {
    scene.actions([
      { label: 'Here\'s the money', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 100000) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 100000);
      (st as any).tobiQW = 2;
      (st as any).srodpaper = 10;
      scene.text('You put money in front of Kakuzu. He threw them in a drawer without even looking.');
      scene.text('You ask, "Not even going to count?" Kakuzu replies quietly, "if there is not enough by even a ruble, I will find and kill you."');
      scene.text('(Kakuzu) - Listen to me carefully. There are five elements, ');
      scene.text('fire - school has the most powerful damage potential and the weakest protection. But there is no better school for defeating opponent with a single blow.');
      scene.text('lightning - in this school each hit paralyzes the opponent, it has weaker than damage than the fire, but if you\'re hooked by lightning, then quickly you will achieve any.');
      scene.text('wind - weak damage, weak defense, but no fog or clones can save them from the wind and wind spells are almost impossible to dodge.');
      scene.text('earth - defensive school, but the attacks are very dangerous. If the enemy attack misses, they will get stuck in the ground and unable to move. Earth protection is the most powerful of all protection, protection of land and regenerate itself absolute defense to attack the enemy.');
      scene.text('Water - Damage of this school is weak, but all spells steal mana from the enemy, the same high level of water protection is very dangerous, it consumes mana from an enemy and regenerates, although it is weaker than earth protection.');
      // TODO-QSP: dynamic text: Affinity with the elements means that you can learn this particular element. You...
      scene.text('Affinity with the elements means that you can learn this particular element. You can not explore another element after selecting affinity until izuchish element completely. I\'ll give you 10 sheets of paper magic. Each sheet cost me 5000₽. Concentrate the energy on a piece of paper until you succeed, then you can either start over and hope for another element, or proceed with the element that appeared to you.');
      scene.actions([
        { label: 'Mark sheets', goto: ['kakuzu', 'mansion1'] },
      ]);
    }
  } },
    ]);
  } else {
    if (((s as any).tobiQW ?? 0) === 2  &&  ((s as any).srodpaper ?? 0) <= 0) {
      scene.actions([
        { label: 'I need another paper', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 10000) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 10000);
      (st as any).srodpaper = ((st as any).srodpaper ?? 0) + (1);
      scene.text('You gave money and Kakuzu handed a sheet of paper.');
      scene.actions([
        { label: 'Mark sheets', goto: ['kakuzu', 'mansion1'] },
      ]);
    }
  } },
      ]);
    }
  }
  if (((s as any).tobiQW ?? 0) === 2) {
    scene.actions([
      { label: 'Tell us again about the elements', handler: (st: GameState) => {
    scene.text('(Kakuzu) - Idiot, listen and remember. There are five elements, ');
    scene.text('fire - school has the most powerful damage potential and the weakest protection. But there is no better school for defeating opponent with a single blow.');
    scene.text('lightning - in this school each hit paralyzes the opponent, it has weaker than damage than the fire, but if you\'re hooked by lightning, then quickly you will achieve any.');
    scene.text('wind - weak damage, weak defense, but no fog or clones can save them from the wind and wind spells are almost impossible to dodge.');
    scene.text('earth - defensive school, but the attacks are very dangerous. If the enemy attack misses, they will get stuck in the ground and unable to move. Earth protection is the most powerful of all protection, protection of land and regenerate itself absolute defense to attack the enemy.');
    scene.text('Water - Damage of this school is weak, but all spells steal mana from the enemy, the same high level of water protection is very dangerous, it consumes mana from an enemy and regenerates, although it is weaker than earth protection.');
    // TODO-QSP: dynamic text: Affinity with the elements means that you can learn this particular element. You...
    scene.text('Affinity with the elements means that you can learn this particular element. You can not explore another element after selecting affinity until izuchish element completely. I\'ll give you 10 sheets of paper magic. Each sheet cost me 5000₽. Concentrate the energy on a piece of paper until you succeed, then you can either start over and hope for another element, or proceed with the element that appeared to you.');
    scene.actions([
      { label: 'Move away', goto: ['kakuzu', 'mansion1'] },
    ]);
  } },
    ]);
  }
  if (((s as any).tobiQW ?? 0) === 2  &&  ((s as any).srodpaper ?? 0) > 0  &&  ((s as any).pcs_mana ?? 0) < 2000) {
    scene.text('You do not have enough mana to continue concentrating.');
  }
  if (((s as any).tobiQW ?? 0) === 2  &&  ((s as any).srodpaper ?? 0) > 0  &&  ((s as any).pcs_mana ?? 0) >= 2000) {
    scene.actions([
      { label: 'Concentrating the energy in the sheet of paper (1:00)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    (st as any).pcs_mana = ((st as any).pcs_mana ?? 0) - (2000);
    qspCall(st, 'sweat', 'add', 40);
    if ((!((st as any).srodstvo ?? 0))) {
      (st as any).srodrand = (Math.floor(Math.random() * 5) + 1);
    }
    scene.text('You concentrate energy in the sheet of paper. You feel that you are spending a huge amount of mana for this action.');
    (st as any).srodstvo = ((st as any).srodstvo ?? 0) + ((Math.floor(Math.random() * (10 - 9 - 2 * (((st as any).cheatVars ?? {})?.['skill_gain'] ?? 0) + 1)) + (9 - 2 * (((st as any).cheatVars ?? {})?.['skill_gain'] ?? 0))));
    if (((st as any).srodstvo ?? 0) < 100) {
      scene.text('You get tired and sweat like a horse, but your effort was not enough.');
      scene.actions([
        { label: 'Move away', goto: ['kakuzu', 'mansion1'] },
      ]);
    } else {
      if (((st as any).srodstvo ?? 0) >= 100) {
        (st as any).srodpaper = ((st as any).srodpaper ?? 0) - (1);
        if (((st as any).srodrand ?? 0) === 1) {
          scene.text('Paper broke in your hands. Kakuzu nods approvingly. Affinity with fire. Will you take it?');
          qspCall(st, 'spellList', 'addAvailableSpells', 'fireSpells', 20);
        }
        if (((st as any).srodrand ?? 0) === 2) {
          scene.text('Paper electrified in your hands, and sparks dance on it. Kakuzu nods approvingly. Affinity with lightning. Will you take it?');
          qspCall(st, 'spellList', 'addAvailableSpells', 'electSpells', 20);
        }
        if (((st as any).srodrand ?? 0) === 3) {
          scene.text('Paper hardened in your hands. Kakuzu nods approvingly. Affinity with the land. Will you take it?');
          qspCall(st, 'spellList', 'addAvailableSpells', 'earthSpells', 20);
        }
        if (((st as any).srodrand ?? 0) === 4) {
          scene.text('Paper shredded to pieces in your hands. Kakuzu nods approvingly. Affinity with the wind. Will you take it?');
          qspCall(st, 'spellList', 'addAvailableSpells', 'airSpells', 20);
        }
        if (((st as any).srodrand ?? 0) === 5) {
          scene.text('Paper soaked in your hands. Kakuzu nods approvingly. Affinity for water. Will you take it?');
          qspCall(st, 'spellList', 'addAvailableSpells', 'waterSpells', 20);
        }
        scene.actions([
          { label: 'Secure affinity', handler: (st: GameState) => {
    (st as any).tobiQW = 3;
    (st as any).stihia = ((st as any).srodrand ?? 0);
    (st as any).srodstvo = 0;
    qspGoto(st, 'kakuzu', 'mansion1');
  } },
          { label: 'Unsubscribe from this affinity', handler: (st: GameState) => {
    (st as any).srodstvo = 0;
    qspGoto(st, 'kakuzu', 'mansion1');
  } },
        ]);
      }
    }
  } },
    ]);
  }
  if (((s as any).tobiQW ?? 0) === 3  &&  ((s as any).pcs_mana ?? 0) < 1000) {
    scene.text('Kakuzu tells you "You have almost no energy, you need to rest."');
  } else {
    if (((s as any).tobiQW ?? 0) === 3  &&  ((s as any).pcs_mana ?? 0) >= 1000) {
      if (((s as any).stihia ?? 0) === 1) {
        qspCall(s, 'spellList', 'teacherActions', '$fireSpells', 'kakuzu', 'mansion1');
      }
      if (((s as any).stihia ?? 0) === 2) {
        qspCall(s, 'spellList', 'teacherActions', '$electSpells', 'kakuzu', 'mansion1');
      }
      if (((s as any).stihia ?? 0) === 3) {
        qspCall(s, 'spellList', 'teacherActions', '$earthSpells', 'kakuzu', 'mansion1');
      }
      if (((s as any).stihia ?? 0) === 4) {
        qspCall(s, 'spellList', 'teacherActions', '$airSpells', 'kakuzu', 'mansion1');
      }
      if (((s as any).stihia ?? 0) === 5) {
        qspCall(s, 'spellList', 'teacherActions', '$waterSpells', 'kakuzu', 'mansion1');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['kakuzu', 'mansion'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'mansion':
      enterMansion(s, scene);
      break;
    case 'mansion1':
      enterMansion1(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const kakuzu: LocationDef = {
  name: 'kakuzu',
  title: '<center><b>Mansion Kakuzu</b></center>',
  region: 'other',
  enter: enter,
};
