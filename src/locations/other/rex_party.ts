import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).sisterQW) (s as any).sisterQW = {}; (s as any).sisterQW['partycount'] = ((s as any).sisterQW['partycount'] ?? 0) + (1);
  if (!(s as any).sisterQW) (s as any).sisterQW = {}; (s as any).sisterQW['party'] = 2;
  (s as any).sisboyparty = 1;
  (s as any).sisboypartyQW = ((s as any).sisboypartyQW ?? 0) + (1);
  (s as any).alkoParty = 0;
  (s as any).party_girls_talk = 0;
  (s as any).girls_smoke = 0;
  (s as any).party_dj = 0;
  (s as any).dj_beer = 0;
  (s as any).dj_thank = 0;
  (s as any).dj_bad = 0;
  (s as any).dj_boobs = 0;
  (s as any).party_boys_drink = 0;
  (s as any).Rex_save = 0;
  (s as any).party_boys_in = 0;
  (s as any).rex_talk = 0;
  (s as any).rex_sex = 0;
  (s as any).drunk_sveta = 0;
  (s as any).iralenasleep = 0;
  (s as any).sister_party_dom = 0;
  (s as any).lastUpdatedHour = (-1);
  (s as any).numberOfEvents = 2;
  qspCall(s, 'themes', 'indoors');
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/rekshome/party/reksparty_1_\' + rand(1, 5) + \'.jpg');
  scene.text('You arrive at Rex\'s apartment for the weekend party. Going inside with the others, the loud music drowns out any noise from outside. As soon as you are inside, several boys immediately start offering you drinks.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Drink', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).alkoParty = ((s as any).alkoParty ?? 0) + (1);
    qspCall(s, 'drugs', 'alcohol', 'vodka');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/rekshome/party/reksparty_2_\' + rand(1, 4) + \'.jpg');
    scene.text('In all this mess, you are unable to find a clean cup and are handed a full bottle of booze. Clinking glasses with the bottle, you put your lips to its mouth and turn it up, gulping down several swigs of strong drink, noticing the effects almost at once.');
    scene.text('The party has just begun. You can still walk through the apartment and find something to do.');
    scene.actions([
      { label: 'Move away', goto: ['rex_party', 'RexRoom'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterRexRoom(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  // TODO-QSP: gs $loc, 'EventUpdate'
  scene.text('<center><b>Rex\'s Room</b></center>');
  qspCall(s, 'rex_party', 'Event<<eventNumber>>', 'RexRoom');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the living room', goto: ['rex_party', 'LivingRoom'] },
  ]);
  scene.build();
}

function enterLivingRoom(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  // TODO-QSP: gs $loc, 'EventUpdate'
  scene.text('<center><b>Living room</b></center>');
  qspCall(s, 'rex_party', 'Event<<eventNumber>>', 'LivingRoom');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to Rex\'s room', goto: ['rex_party', 'RexRoom'] },
    { label: 'Go to the kitchen', goto: ['rex_party', 'Kitchen'] },
    { label: 'Go to the Toilet', goto: ['rex_party', 'Toilet'] },
    { label: 'Leave Rex\'s home', goto: ['pav_commercial', ''] },
  ]);
  scene.build();
}

function enterKitchen(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  // TODO-QSP: gs $loc, 'EventUpdate'
  scene.text('<center><b>Kitchen room</b></center>');
  scene.img('images/locations/pavlovsk/resident/rekshome/party/kuh.jpg');
  qspCall(s, 'rex_party', 'Event<<eventNumber>>', 'Kitchen');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the living room', goto: ['rex_party', 'LivingRoom'] },
  ]);
  scene.build();
}

function enterToilet(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  if (((s as any).alko ?? 0) > 3  &&  (Math.floor(Math.random() * 100) + 1) <= 30) {
    scene.actions([{ label: 'Continue', goto: ['rex_party_sexEvents', 'toilet_sex_events'] }]);
  }
  scene.text('<center><b>Toilet</b></center>');
  scene.img('images/locations/pavlovsk/resident/rekshome/toilet.jpg');
  scene.text('Here you can wash your face, freshen up or touch up your make-up at <a href="exec: gt \'mirror\', \'start\'">mirrors</a>.');
  if (((s as any).cumloc ?? 0)[11] === 1  ||  ((s as any).cumloc ?? 0)[12] === 1) {
    scene.actions([
      { label: 'Clean the sperm from your face (0:10)', handler: (st: GameState) => {
    (s as any).pcs_makeup = 1;
    (s as any).cumspclnt = 9;
    qspCall(s, 'cum_cleanup', '');
    (s as any).cumspclnt = 13;
    qspCall(s, 'cum_cleanup', '');
    if (((s as any).pcs_sweat ?? 0) > 19) {
      (s as any).pcs_sweat = ((s as any).pcs_sweat ?? 0) - (5);
    }
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.img('images/pc/activities/facewash.jpg');
    scene.text('You clean your face and get rid of any trace of cum.');
    scene.actions([
      { label: 'Move away', goto: ['rex_party', 'Toilet'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the living room', goto: ['rex_party', 'LivingRoom'] },
  ]);
  scene.build();
}

function enterEventUpdate(s: GameState, scene: SceneBuilder): void {
  if (((s as any).alko ?? 0) < 3) {
    (s as any).eventNumber = 1;
  } else {
    (s as any).eventNumber = 2;
  }
  // TODO-QSP: end
  scene.build();
}

function enterEvent1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'RexRoom') {
    scene.text('<center><b>Rex\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/rekshome/party/reksparty_1_\' + rand(1, 5) + \'.jpg');
    scene.text('You sit at a table and drink with your friends. Sitting to one side of you sharing a bottle as always are <a href="exec: gt \'rex_party_smallEvents\', \'lena\'">Lena</a> who is always fun, her slightly more reserved friend <a href="exec: gt \'rex_party_smallEvents\', \'ira\'">Ira</a>, and always upbeat <a href="exec: gt \'rex_party_smallEvents\', \'rex\'">Rex</a>.');
    scene.text('To your other side sits your sister <a href="exec: gt \'rex_party_smallEvents\', \'anya\'">Anya</a>, drinking already, and <a href="exec: gt \'rex_party_smallEvents\', \'roma\'">Roma</a>, who himself sits just a bit away looking more serious than normal, plus lots of <a href="exec: gt \'rex_party_smallEvents\', \'party_girls\'">girls</a> and <a href="exec: gt \'rex_party_smallEvents\', \'party_boys\'">guys</a> you barely know.');
    scene.text('One of the guys offers you a bottle to <a href="exec: gt \'rex_party_smallEvents\', \'party_drink\'">drink</a> from as he says, "A little more to set the mood."');
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'LivingRoom') {
    scene.img('images/locations/pavlovsk/resident/rekshome/party/reksparty_3.jpg');
    scene.text('This is a large living room. Hardly anyone is here, most are all still sitting in the other room talking and drinking. Only one <a href="exec: gt \'rex_party_smallEvents\', \'dj\'">guy</a> is in here tinkering with a turntable.');
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'Kitchen') {
    scene.text('The kitchen is spacious, but kinda dirty. The kitchen table is covered in cans and bottles of beer as well as 5ths of booze. You can grab any bottle you want and <a href="exec: gt \'rex_party_smallEvents\', \'party_drink\'">drink</a>.');
    if (((s as any).party_dj ?? 0) ===1  &&  ((s as any).dj_beer ?? 0) < 1) {
      scene.text('You grab two bottle for the <a href="exec: gt \'rex_party_smallEvents\', \'dj_take_beer\'">DJ and his friend</a>.');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterEvent2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'RexRoom') {
    scene.img('images/locations/pavlovsk/resident/rekshome/party/reksparty_party_home_1_\' + rand(1, 5) + \'.jpg');
    scene.text('After a while, everyone gets up to go dance and drink. Only a few <a href="exec: gt \'rex_party_smallEvents\', \'party_girls\'">girls</a> are left in the room, but they are fun to hang out and gossip with.');
    // TODO-QSP: iif(party_girls_talk >= 2, 'You <a href="exec: gt ''rex_party_smallEvents'', ''talk''">chat</a> and ...
    if (((s as any).pcs_mood ?? 0) === 100  &&  ((s as any).pcs_horny ?? 0) >= 50  &&  ((s as any).girls_smoke ?? 0) > 1) {
      scene.text('All the girls are in a good mood, and several of them excitedly pull you with them to have some <a href="exec: gt \'rex_party_smallEvents\', \'fun\'">fun</a>.');
    }
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'LivingRoom') {
    scene.img('images/locations/pavlovsk/resident/rekshome/party/reksparty_4_\' + rand(1, 8) + \'.jpg');
    scene.text('The party is in full swing. In one corner. a <a href="exec: gt \'rex_party_smallEvents\', \'dj\'">guy</a>, the party DJ, is spinning beats at the turntable. You want to give it a try and <a href="exec: gt \'rex_party_smallEvents\', \'dance\'">spin some beats</a>.');
    scene.text('<a href="exec: gt \'rex_party_smallEvents\', \'roma\'">Roma</a> and <a href="exec: gt \'rex_party_smallEvents\', \'anya\'">Anya</a> are locked together having fun dancing.');
    if ((!((s as any).rex_love ?? 0))) {
      scene.text('<a href="exec: gt \'rex_party_smallEvents\', \'rex\'">Rex</a> is having fun dancing with some <a href="exec: gt \'rex_party_smallEvents\', \'party_girls\'">girls</a>.');
    }
    if (((s as any).rex_love ?? 0) === 1) {
      scene.text('You are dancing with some <a href="exec: gt \'rex_party_smallEvents\', \'party_girls\'">girls</a> and <a href="exec: gt \'rex_party_smallEvents\', \'rex\'">Rex</a>, who looks at you with loving eyes.');
    }
    scene.text('<a href="exec: gt \'rex_party_smallEvents\', \'ira_lena_livingRoom\'">Lena</a> and <a href="exec: gt \'rex_party_smallEvents\', \'ira_lena_livingRoom\'">Ira</a> are having fun in the company of drunken <a href="exec: gt \'rex_party_smallEvents\', \'party_boys\'">guys</a>.');
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'Kitchen') {
    scene.text('The kitchen is spacious, but kinda dirty. The kitchen table is covered in cans and bottles of beer as well as 5ths of booze. You can grab any bottle you want and <a href="exec: gt \'rex_party_smallEvents\', \'party_drink\'">drink</a>.');
    if (((s as any).party_dj ?? 0) ===1  &&  ((s as any).dj_beer ?? 0) < 1) {
      scene.text('You grab two bottle for the <a href="exec: gt \'rex_party_smallEvents\', \'dj_take_beer\'">DJ and his friend</a>.');
    }
    scene.text('Some <a href="exec: gt \'rex_party_smallEvents\', \'party_boys\'">guys</a> bang their empty drinks down on the table. Refilling, they offer a cup to you and try to get you to <a href="exec: gt \'rex_party_smallEvents\', \'kitchen_boy_drink\'">drink</a> with them.');
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'RexRoom':
      enterRexRoom(s, scene);
      break;
    case 'LivingRoom':
      enterLivingRoom(s, scene);
      break;
    case 'Kitchen':
      enterKitchen(s, scene);
      break;
    case 'Toilet':
      enterToilet(s, scene);
      break;
    case 'EventUpdate':
      enterEventUpdate(s, scene);
      break;
    case 'Event1':
      enterEvent1(s, scene);
      break;
    case 'Event2':
      enterEvent2(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const rex_party: LocationDef = {
  name: 'rex_party',
  title: 'Rex\'s Room',
  region: 'other',
  locationType: 'event',
  enter: enter,
};
