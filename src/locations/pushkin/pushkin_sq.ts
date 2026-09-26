import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pushkin_sq', ((s as any).locArgs?.[0] ?? 0));
  (s as any).region = 'pushkin';
  (s as any).location_type = 'public_outdoors';
  qspCall(s, 'stat', '');
  qspCall(s, 'music_actions', 'clear_restrictions');
  scene.text('<center><b>Okhlopkov Square</b></center>');
  scene.img('images/locations/pushkin/liames.jpg');
  scene.text('Okhlopkov Square serves as the main intersection of several smaller streets.');
  scene.text('There are many small cafes and shops also a flourishing nightlife and entertainment activities.');
  scene.text('Another street runs straight back to the <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=5; return s; }); window.__gameStore.getState().doGoto(\u0027pushkin\u0027, \u0027\u0027); return false;">Pushkin Town Center</a>.');
  scene.text('Okhlopkov Square itself leads to the <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=5; return s; }); window.__gameStore.getState().doGoto(\u0027pushkin_parks\u0027, \u0027start\u0027); return false;">Pushkin Park</a>.');
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 20) {
    scene.text('A small <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027larek\u0027, \u0027start\u0027); return false;">grocery store</a> is currently open.');
  } else {
    scene.text('\'There is a small whole foods store that is open from 8:00 - 20:00 everyday. It is currently closed.\'');
  }
  if (((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) <= 22) {
    scene.text('A quaint little restaurant has put a sign outside of its door, reading, "<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027pushkin_cafe\u0027, \u0027start\u0027); return false;">Liamel Cafe</a>."');
  } else {
    scene.text('\'Liamel Cafe is current closed, it is open every day 10:00 - 22:00\'');
  }
  if (((s as any).week ?? 0) < 7  &&  ((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 17) {
    scene.text('The long standing alternative clothing shop <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027shop_tsar_bomba\u0027, \u0027start\u0027); return false;">Tsar Bomba</a> is unmistakable amongst the tourist shops on the main square.');
    scene.text('Clothing for younger women is catered for in <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027shop_flamingos\u0027, \u0027start\u0027); return false;">Flamingos</a>.');
    scene.text('Catering for the burlesque club here there is the <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027shop_fancy_pancy\u0027, \u0027start\u0027); return false;">Fancy Pancy</a> boutique clothing store.');
  } else {
    scene.text('\'Tsar Bomba, Flamingos and Fansy Pansy, are all current closed, they are open open Mon - Sat day 9:00 - 18:00\'');
  }
  if (((s as any).week ?? 0) < 7  &&  ((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 18) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027pushkin_ballet_secrets\u0027, \u0027init\u0027); return false;">Ballet Secrets</a> is located at the end of a well maintained alleyway with a flamboyant ballet shop display and despite it\'s name the premises offers a wide range of services for dancers and athletes. ');
  } else {
    if (((s as any).week ?? 0) === 7  &&  (((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) < 17)) {
      scene.text('The dance shop is closed, but you can still access the <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027pushkin_ballet_secrets\u0027, \u0027init\u0027); return false;">Members Area</a> with your card.');
    } else {
      scene.text('\'Ballet Secrets is currently closed. The shop opens 9:00-17:00 Monday to Saturday, and members only access for class is open on Sunday from 10:00 - 17:00.\'');
    }
  }
  if (((s as any).exhibitionQW ?? 0) > 3) {
    if (((s as any).week ?? 0) < 7  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 18) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027shop_exhibitionist\u0027, \u0027start\u0027); return false;">Simply Salacious</a> is just down a small side street from here.');
    } else {
      scene.text('\'<b>Simply Salacious,</b> is open Mon - Sat, 8:00 - 18:00\'');
    }
  }
  if (((s as any).hour ?? 0) >= 12  ||  ((s as any).hour ?? 0) < 2) {
    if (((s as any).pcs_inhib ?? 0) > 30) {
      scene.text('Club <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027Rasputin_entrance\u0027, \u0027\u0027); return false;">Rasputin</a> provides both burlesque and exotic variety shows every evening except on Mondays.');
      scene.text('The new members of the Pushkin Burlesque Troupe also perform there to hone their skills.');
    } else {
      scene.text('There is a burlesque club in an old theatre here. Such perversion is unhealthy and you cannot bring yourself to go there.');
    }
  } else {
    scene.text('\'The old theatre that houses a burlesque club is closed now. It is open every day 18:00 - 23:00\'');
  }
  if (((s as any).mother ?? 0)?.['kickedout_timer'] !== 0  &&  ((s as any).mother ?? 0)?.['kickedout_timer'] + 3 <= ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) > 6  &&  ((s as any).hour ?? 0) <= 15  &&  ((s as any).cumloc ?? 0)[11] === 0) {
    qspCall(s, 'mother_chats', 'reconciliation_talk');
    return;
  }
  if (qspFunc(s, 'homes_properties', 'is_property_of_status', 'rented', 'old_town_apartment')) {
    scene.actions([
      { label: '<b>Go home</b>', goto: ['korr2x', ''] },
    ]);
  }
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 18  &&  ((s as any).exhibitionQW ?? 0) === 3) {
    scene.actions([
      { label: 'Search for the shop on the card from Kseniya', goto: ['shop_exhibitionist', 'start'] },
    ]);
  }
  qspCall(s, 'lover', 'lover_events');
  if ((Math.floor(Math.random() * 51) + 0) === 0  &&  ((s as any).fame ?? 0)?.['event_day'] !== ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 21) {
    qspCall(s, 'fame_events', 'select', 'pushkin');
  }
  if (((s as any).cheatVars ?? 0)?.['random_lovers'] !== 1) {
    if ((Math.floor(Math.random() * 2001) + 0) <= ((s as any).pcs_apprnc ?? 0)) {
      qspCall(s, 'npcgeneratec', '0', '', 'like');
      qspCall(s, 'npcStat', '$npclastgenerated');
      scene.text(`You are approached by ${((s as any).npcheight_pref ?? '')}, ${((s as any).npcbuild ?? '')} guy with ${((s as any).npchair ?? '')} hair. He is wearing ${((s as any).npcClo ?? '')}.`);
      scene.text(`The guy introduced himself as ${((s as any).boydesc ?? '')} and asks you for your telephone number.`);
      scene.actions([
{ label: 'Walk away', goto: ['pushkin_sq', ''] },
{ label: 'Tell him your telephone number.', handler: (st: GameState) => {
    qspCall(st, 'lover', 'add_boyfriend', ((st as any).npcID ?? 0));
    (st as any).stopboy = 0;
    scene.text(`${((st as any).boydesc ?? '')} saved your phone number and left.`);
    scene.actions([
      { label: 'Continue', goto: ['pushkin_sq', ''] },
    ]);
  } },
]);
      return;
    }
  }
  if ((Math.floor(Math.random() * 100) + 0) < 5) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pushkin/liamhud1.jpg');
    scene.text('Making your way down Okhlopkov Square, you see a woman waiting patiently while an artist paints her portrait.');
    scene.actions([
      { label: 'Continue', goto: ['pushkin_sq', ''] },
    ]);
  }
  qspCall(s, 'music_actions', 'start');
  if (((s as any).hour ?? 0) >= 15  &&  ((s as any).hour ?? 0) < 23) {
    if ((!((s as any).tusa ?? 0))) {
      scene.actions([
        { label: 'Go to the local hangout', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    (st as any).tusa = 1;
    qspCall(st, 'dibodi', '');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pushkin/photo.jpg');
    scene.text('Local youth get-together.');
    scene.actions([
      { label: 'Explore it', goto: ['dibodi', 'sgtusa'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).tusnyakday ?? 0) !== ((s as any).daystart ?? 0)) {
        scene.actions([
          { label: 'Go to the local hangout', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    qspCall(st, 'dibodi', '');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pushkin/photo.jpg');
    scene.text('The girls and boys at the local hangout happily greet you.');
    if (((st as any).pantyworntype ?? 0) === 'none'  &&  (!((st as any).sttan ?? 0))) {
      scene.text(`"Hey guys, ${((st as any).pcs_nickname ?? '')} is going commando," one of the boys says.`);
      scene.actions([
        { label: 'Continue', goto: ['dibodi', 'sotusa'] },
      ]);
    }
    scene.actions([
      { label: 'Leave', goto: ['pushkin_sq', ''] },
    ]);
  } },
        ]);
      }
    }
  }
  if (((s as any).stallionQ ?? 0) === 3) {
    scene.text('There is a rumbling in your stomach, you need to use the restroom. There appears to be a public restroom tucked into the corner of a building. Unfortunately, the female one has a sign reading, "Out of order."');
    qspCall(s, 'willpower', 'misc', 'resist', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Hold it', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Hold it', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).stallionQ = 1;
    qspGoto(st, 'pushkin_sq', '');
  } },
      ]);
    }
    scene.actions([
      { label: 'Use the Men\'s Restroom', goto: ['stallion', 'start'] },
    ]);
  }
  scene.actions([
    { label: 'Walk to the Town Center (0:05)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pushkin', ''] },
  ]);
  scene.build();
}

export const pushkin_sq: LocationDef = {
  name: 'pushkin_sq',
  title: '<center><b>Okhlopkov Square</b></center>',
  region: 'pushkin',
  locationType: 'public_outdoors',
  description: ['Okhlopkov Square serves as the main intersection of several smaller streets.'],
  enter: enter,
};
