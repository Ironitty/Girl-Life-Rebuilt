import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'core_library', 'setloc', 'city_hermitage', 'start');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/hermitage/gp1.jpg');
  scene.text('You see in the distance The State Hermitage Museum. It\'s the second largest art museum in the world and was founded in 1764 by Empress Catherine the Great and has been open to the public since 1852.');
  scene.text('The collections occupy a large complex of six historic buildings along Palace Embankment, including the Winter Palace, a former residence of Russian emperors.');
  scene.text('Of the six buildings in the main museum complex, five, being the Winter Palace, Small Hermitage, Old Hermitage, New Hermitage, and Hermitage Theatre are all open to the public.');
  scene.text('You approach the visitors entrance which is located in the Winter Palace.');
  scene.build();
}

function enterReturn(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'core_library', 'setloc', 'city_hermitage', 'return');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/hermitage/gp1.jpg');
  scene.text('You return to the visitors entrance which is located in the Winter Palace.');
  scene.text('The State Hermitage Museum is the second largest art museum in the world and was founded in 1764 by Empress Catherine the Great and has been open to the public since 1852.');
  scene.text('The collections occupy a large complex of six historic buildings along Palace Embankment, including the Winter Palace, a former residence of Russian emperors.');
  scene.text('Of the six buildings in the main museum complex, five, being the Winter Palace, Small Hermitage, Old Hermitage, New Hermitage, and Hermitage Theatre are open to the public.');
  scene.build();
}

function enterDefault2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) < 8) {
    scene.text('The museum is not open yet so it is too early to enjoy any of the collections now.');
  } else {
    if (((s as any).hour ?? 0) > 17) {
      scene.text('The museum is closed, you have to leave.');
    } else {
      if (((s as any).hour ?? 0) === 17) {
        scene.text('The museum is closing so it is too late to enjoy any of the collections now.');
      } else {
        scene.actions([
          { label: 'View The Golden Peacock (90 mins)', goto: ['city_hermitage', 'peacock'] },
          { label: 'View Catherine The Great\'s art collection (90 mins)', goto: ['city_hermitage', 'art'] },
          { label: 'View some of it\'s highlights starting with the State Gala Staircase (90 mins)', goto: ['city_hermitage', 'highlights'] },
          { label: 'View the red rooms (90 mins)', goto: ['city_hermitage', 'red_rooms'] },
        ]);
      }
    }
  }
  scene.actions([
    { label: 'Return city center', goto: ['city_center', ''] },
  ]);
  scene.build();
}

function enterPeacock(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'exp_gain', 'intel', 5);
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/hermitage/gp2.jpg');
  scene.text('You spend some time looking at the various collections which include Egyptian and classical antiquities and various art galleries dating back to prehistoric times.');
  scene.text('These collections include Catherine\'s collection which she used to start the museum.');
  scene.text('After a while you decide to view one of the highlights of the museum, The Golden Peacock Clock.');
  scene.actions([
    { label: 'The Golden Peacock Clock', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/hermitage/gp3.jpg');
    scene.text('The Peacock Clock is a large automaton featuring three life-sized mechanical birds. It was manufactured by the entrepreneur James Cox in the 2nd half of the 18th century and was acquired by Catherine the Great in 1781. Today it is a prominent exhibit in the collections of the Hermitage museum and has been in the Hermitage since 1797 when it was moved there from the Taurida Palace.');
    scene.text('The history of the Golden Peacock Clock begins in 1777 when the Duchess of Kingston visited St Petersburg. Grigory Potiomkin, met the Duchess in society learned about the works of James Cox and commissioned him to make a monumental automaton with a clock for the Empress\'s Hermitage.');
    scene.text('It is one of only two such automatons surviving in the world today, the other is The Silver Swan which can be viewed in the Bowes museum in Barnard Castle in the UK.');
    scene.text('These two pieces were at the forefront of exploring what is meant by <i>life</i>, both real and artificial and are marvels of their time.');
    scene.text('Having thoroughly enjoyed your visit you feel nice and calm and maybe you\'ve learnt something today as you decide that it\'s probably time to be on your way.');
    scene.actions([
      { label: 'Return to visitor\'s entrance', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterArt(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'exp_gain', 'intel', 5);
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/hermitage/gp4.jpg');
  scene.text('You spend some time looking at the various collections which include Egyptian and classical antiquities and various art galleries dating back to prehistoric times.');
  scene.text('These collections include Catherine\'s collection which she used to start the museum.');
  scene.text('In her lifetime, Catherine acquired around 4,000 paintings from the old masters, 38,000 books, 10,000 engraved gems, 10,000 drawings, 16,000 coins and medals, and a natural history collection filling two galleries so viewing it all would take several days!');
  scene.text('After a while you decide to view the art collection which she started in 1764. After all, it was due to her acquiring this art collection from Johann Gotzkowsky that she commissioned the museum.');
  scene.actions([
    { label: 'Catherine The Great\'s collection', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/hermitage/gp5.jpg');
    scene.text('Catherine the Great started her art collection in 1764 by purchasing in excess of 200 paintings which were originally assembled collection for Frederick II of Prussia, however, he refused to complete the purchase.');
    scene.text('The collection consisted mainly of Dutch or Flemish pieces and included 13 by Rembrandt and 11 by Rubens plus a number of other well known and renowned artists.');
    scene.text('Perhaps some of the most famous and notable artworks that were a part of Catherine\'s original purchase from Gotzkowsky were Danaë, painted by Rembrandt in 1636; Descent from the Cross, painted by Rembrandt in 1624; and Portrait of a Young Man Holding a Glove, painted by Frans Hals in 1650. These paintings remain in the Hermitage collection today.');
    scene.text('Having thoroughly enjoyed your visit you feel nice and calm and maybe you\'ve learnt something today as you decide that it\'s probably time to be on your way.');
    scene.actions([
      { label: 'Return to visitor\'s entrance', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterHighlights(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'exp_gain', 'intel', 5);
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/hermitage/gp6.jpg');
  scene.text('You spend some time looking at the various collections which include Egyptian and classical antiquities and various art galleries dating back to prehistoric times.');
  scene.text('However, on this visit you decide to concentrate on a few of the museum\'s highlights so pass through the various exhibitions quickly and head to the State Gala Staircase.');
  scene.text('It\'s probably the most extravagant and grandiose place at the whole museum!');
  scene.text('There are many beautiful halls at the museum, but this stands out because it\'s a staircase and not a hall.');
  scene.text('As you stand in the baroque hall and look up at the staircase with a red velvet carpet and decorated with huge mirrors, ceiling paintings, sweeping balustrades of marble and gold for just a moment it makes you feel like you\'ve been invited to a pompous ball. Oh well… Maybe not this time!');
  scene.actions([
    { label: 'The Pavilion Hall', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/hermitage/gp7.jpg');
    scene.text('You decide to move on and take in the grandeur of the Pavilion Hall.');
    scene.text('It\'s really impressive and maybe the finest room in the palace. The hall is illuminated by twenty-eight large and small crystal chandeliers and it\'s embellished with Renaissance, Gothic and Oriental motifs.');
    scene.actions([
      { label: 'The Raphael Loggias', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/hermitage/gp8.jpg');
    scene.text('Catherine the Great admired the Papal Palace in Vatican City, painted by Raphael in the 15th century.');
    scene.text('She wanted her own copy so much so that she commissioned a reproduction in the late 1780s.');
    scene.text('Architect Giacomo Quarenghi made this loggia, after which it was accented with Biblical stories and bas-reliefs.');
    scene.text('Having thoroughly enjoyed your visit you feel nice and calm and maybe you\'ve learnt something today as you decide that it\'s probably time to be on your way.');
    scene.actions([
      { label: 'Return to visitor\'s entrance', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterRedRooms(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'exp_gain', 'intel', 3);
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/hermitage/gp9.jpg');
  scene.text('Among the Hermitage Museum highlights are the red rooms which contain Italian art.');
  scene.text('This area has a majestic ambience from the beautiful St. George\'s hall and displays 17th and 18th century Italian paintings.');
  scene.text('It also includes the war gallery of 1812 celebrating the Russian victory at the gates of Moscow turning back Napoleon\'s invasion of Russia.');
  scene.actions([
    { label: 'Enter the museum\'s skylight rooms', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'exp_gain', 'intel', 2);
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/hermitage/gp10.jpg');
    scene.text('The Large Italian Skylight Hall of the State Hermitage Museum is the biggest of the three splendid skylight rooms of the New Hermitage and was constructed to the design of Leo von Klenze for the Imperial Museum in the mid 19th century.');
    scene.text('These halls are intended to show large-scale paintings and owe their names to the vaulted ceilings with glass skylight windows.');
    scene.text('The high vaults of the Large Skylight Hall are embellished with impressive stucco ornaments. A stucco frieze decorates the upper parts of the walls.');
    scene.text('The furniture on display was also made according to drawings by Leo von Klenze.');
    scene.text('The room is adorned with items made by 19th-century Russian craftsmen from coloured stones.');
    scene.actions([
      { label: 'The Ancient Hall', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/hermitage/gp11.jpg');
    scene.text('You now fancy stepping way back in time so head off to the first floor of the Old Hermitage.');
    scene.text('This is where you find the ancient hall and Antiquities Collection, which is different from the rest of the Hermitage collection.');
    scene.text('The area covers 31 halls which include an extensive collection, including Assyrian, Mesopotamian, and Egyptian artefacts, as well as Greek and Roman art work.');
    scene.actions([
      { label: 'Walk around the outside of the museum', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/hermitage/gp12.jpg');
    scene.text('At the Hermitage it\'s so easy to get lost in the thousands of paintings and numerous art collections inside so on this visit you decide to wander around the outside for a bit and admire the beautiful architecture.');
    scene.text('As you walk around the museum\'s exterior you ensure you have time to take in the building\'s green and white façade facing the Palace Square.');
    scene.text('Having thoroughly enjoyed your visit you feel nice and calm and maybe you\'ve learnt something today as you decide that it\'s probably time to be on your way.');
    scene.actions([
      { label: 'Return to visitor\'s entrance', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
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

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'return':
      enterReturn(s, scene);
      break;
    case 'peacock':
      enterPeacock(s, scene);
      break;
    case 'art':
      enterArt(s, scene);
      break;
    case 'highlights':
      enterHighlights(s, scene);
      break;
    case 'red_rooms':
      enterRedRooms(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const city_hermitage: LocationDef = {
  name: 'city_hermitage',
  title: 'You see in the distance The State Hermitage Museum. It\'s the',
  region: 'city',
  enter: enter,
};
