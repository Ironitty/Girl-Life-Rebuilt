import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pushkin_sq', ((s as any).locArgs?.[0] ?? 0));
  qspCall(s, 'stat', '');
  qspCall(s, 'music_actions', 'clear_restrictions');
  scene.text('<center><b>Okhlopkov Square</b></center>');
  scene.img('images/locations/pushkin/liames.jpg');
  scene.text('Okhlopkov Square serves as the main intersection of several smaller streets.');
  scene.text('There are many small cafes and shops also a flourishing nightlife and entertainment activities.');
  // TODO-QSP: dynamic text: Another street runs straight back to the <a href="exec:minut += 5 & gt 'pushkin'...
  scene.text('Another street runs straight back to the <a href="exec:minut += 5 & gt \'pushkin\'">Pushkin Town Center</a>.');
  // TODO-QSP: dynamic text: Okhlopkov Square itself leads to the <a href="exec:minut += 5 & gt 'pushkin_park...
  scene.text('Okhlopkov Square itself leads to the <a href="exec:minut += 5 & gt \'pushkin_parks\',\'start\'">Pushkin Park</a>.');
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 20) {
    scene.text('A small <a href="exec:gt \'larek\',\'start\'">grocery store</a> is currently open.');
  } else {
    // TODO-QSP: dynamic text: There is a small whole foods store that is open from 8:00 - '+func('time', 'get_...
    scene.text('There is a small whole foods store that is open from 8:00 - \'+func(\'time\', \'get_time_string\', 20, 0)+\' everyday. It is currently closed.');
  }
  if (((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) <= 22) {
    scene.text('A quaint little restaurant has put a sign outside of its door, reading, "<a href="exec:gt \'pushkin_cafe\',\'start\'">Liamel Cafe</a>."');
  } else {
    // TODO-QSP: dynamic text: Liamel Cafe is current closed, it is open every day '+func('time', 'get_time_str...
    scene.text('Liamel Cafe is current closed, it is open every day \'+func(\'time\', \'get_time_string\', 10, 0)+\' - \'+func(\'time\', \'get_time_string\', 22, 0)+\'');
  }
  if (((s as any).week ?? 0) < 7  &&  ((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 17) {
    scene.text('The long standing alternative clothing shop <a href="exec:gt \'shop_tsar_bomba\',\'start\'">Tsar Bomba</a> is unmistakable amongst the tourist shops on the main square.');
    scene.text('Clothing for younger women is catered for in <a href="exec:gt \'shop_flamingos\',\'start\'">Flamingos</a>.');
    scene.text('Catering for the burlesque club here there is the <a href="exec:gt \'shop_fancy_pancy\',\'start\'">Fancy Pancy</a> boutique clothing store.');
  } else {
    // TODO-QSP: dynamic text: Tsar Bomba, Flamingos and Fansy Pansy, are all current closed, they are open ope...
    scene.text('Tsar Bomba, Flamingos and Fansy Pansy, are all current closed, they are open open Mon - Sat day 9:00 - \'+func(\'time\', \'get_time_string\', 18, 0)+\'');
  }
  if (((s as any).week ?? 0) < 7  &&  ((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 18) {
    scene.text('<a href="exec:gt \'pushkin_ballet_secrets\',\'init\'">Ballet Secrets</a> is located at the end of a well maintained alleyway with a flamboyant ballet shop display and despite it\'s name the premises offers a wide range of services for dancers and athletes. ');
  } else {
    scene.text('The dance shop is closed, but you can still access the <a href="exec:gt \'pushkin_ballet_secrets\',\'init\'">Members Area</a> with your card.');
    // TODO-QSP: dynamic text: Ballet Secrets is currently closed. The shop opens '+func('time', 'get_time_stri...
    scene.text('Ballet Secrets is currently closed. The shop opens \'+func(\'time\', \'get_time_string\', 9, 0)+\'-\'+func(\'time\', \'get_time_string\', 17, 0)+\' Monday to Saturday, and members only access for class is open on Sunday from \'+func(\'time\', \'get_time_string\', 10, 0)+\' - \'+func(\'time\', \'get_time_string\', 17, 0)+\'.');
  }
  if (((s as any).exhibitionQW ?? 0) > 3) {
    if (((s as any).week ?? 0) < 7  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 18) {
      scene.text('<a href="exec:gt \'shop_exhibitionist\',\'start\'">Simply Salacious</a> is just down a small side street from here.');
    } else {
      // TODO-QSP: dynamic text: <b>Simply Salacious,</b> is open Mon - Sat, 8:00 - '+func('time', 'get_time_stri...
      scene.text('<b>Simply Salacious,</b> is open Mon - Sat, 8:00 - \'+func(\'time\', \'get_time_string\', 18, 0)+\'');
    }
  }
  if (((s as any).hour ?? 0) >= 12  ||  ((s as any).hour ?? 0) < 2) {
    if (((s as any).pcs_inhib ?? 0) > 30) {
      scene.text('Club <a href="exec:gt \'Rasputin_entrance\'">Rasputin</a> provides both burlesque and exotic variety shows every evening except on Mondays.');
      scene.text('The new members of the Pushkin Burlesque Troupe also perform there to hone their skills.');
    } else {
      scene.text('There is a burlesque club in an old theatre here. Such perversion is unhealthy and you cannot bring yourself to go there.');
    }
  } else {
    // TODO-QSP: dynamic text: The old theatre that houses a burlesque club is closed now. It is open every day...
    scene.text('The old theatre that houses a burlesque club is closed now. It is open every day \'+func(\'time\', \'get_time_string\', 18, 0)+\' - \'+func(\'time\', \'get_time_string\', 23, 0)+\'');
  }
  if (((s as any).mother ?? 0)?.['kickedout_timer'] !== 0  &&  ((s as any).mother ?? 0)?.['kickedout_timer'] + 3 <= ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) > 6  &&  ((s as any).hour ?? 0) <= 15  &&  ((s as any).cumloc ?? 0)[11] === 0) {
    qspCall(s, 'mother_chats', 'reconciliation_talk');
    return;
  }
  if (qspFunc(s, 'homes_properties', 'is_property_of_status', 'rented', 'old_town_apartment')) {
    // TODO-QSP: act '<b>Go home</b>': gt 'korr2x'
  }
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 18  &&  ((s as any).exhibitionQW ?? 0) === 3) {
    // TODO-QSP: act 'Search for the shop on the card from Kseniya': gt 'shop_exhibitionist', 'start'
  }
  qspCall(s, 'lover', 'lover_events');
  if ((Math.floor(Math.random() * 51) + 0) === 0  &&  ((s as any).fame ?? 0)?.['event_day'] !== ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 21) {
    qspCall(s, 'fame_events', 'select', 'pushkin');
  }
  if (((s as any).cheatVars ?? 0)?.['random_lovers'] !== 1) {
    if ((Math.floor(Math.random() * 2001) + 0) <= ((s as any).pcs_apprnc ?? 0)) {
      qspCall(s, 'npcgeneratec', '', 0, '', 'like');
      qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
      // TODO-QSP: dynamic text: You are approached by <<$npcheight_pref>>, <<$npcbuild>> guy with <<$npchair>> h...
      scene.text(`You are approached by ${((s as any).npcheight_pref ?? 0)}, ${((s as any).npcbuild ?? 0)} guy with ${((s as any).npchair ?? 0)} hair. He is wearing ${((s as any).npcClo ?? 0)}.`);
      // TODO-QSP: dynamic text: The guy introduced himself as <<$boydesc>> and asks you for your telephone numbe...
      scene.text(`The guy introduced himself as ${((s as any).boydesc ?? 0)} and asks you for your telephone number.`);
      return;
      scene.actions([
        { label: 'Walk away', goto: ['pushkin_sq', ''] },
        { label: 'Tell him your telephone number.', handler: (st: GameState) => {
    qspCall(s, 'lover', 'add_boyfriend', ((s as any).npcID ?? 0));
    (s as any).stopboy = 0;
    // TODO-QSP: dynamic text: <<$boydesc>> saved your phone number and left.
    scene.text(`${((s as any).boydesc ?? 0)} saved your phone number and left.`);
    scene.actions([
      { label: 'Continue', goto: ['pushkin_sq', ''] },
    ]);
  } },
      ]);
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
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    (s as any).tusa = 1;
    qspCall(s, 'dibodi', '');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pushkin/photo.jpg');
    scene.text('Local youth get-together.');
    scene.actions([
      { label: 'Explore it', goto: ['dibodi', 'sgtusa'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Go to the local hangout', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    qspCall(s, 'dibodi', '');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pushkin/photo.jpg');
    scene.text('The girls and boys at the local hangout happily greet you.');
    if (((s as any).pantyworntype ?? 0) === 'none'  &&  (!((s as any).sttan ?? 0))) {
      // TODO-QSP: dynamic text: "Hey guys, <<$pcs_nickname>> is going commando," one of the boys says.
      scene.text(`"Hey guys, ${((s as any).pcs_nickname ?? 0)} is going commando," one of the boys says.`);
      scene.actions([
        { label: 'Continue', goto: ['dibodi', 'sotusa'] },
      ]);
    }
    if (((s as any).sttan ?? 0) === 1  &&  ((s as any).pantyworntype ?? 0) === 'none') {
      // TODO-QSP: dynamic text: - <<$pcs_nickname>>, and again without panties, - said one of the boys - Pussy p...
      scene.text(`- ${((s as any).pcs_nickname ?? 0)}, and again without panties, - said one of the boys - Pussy pokezh?`);
      scene.text('- And yet to show? - you said - How do I want and go.');
      scene.actions([
        { label: 'Further', goto: ['ETO_village', 'community_alleys'] },
      ]);
    }
    if (((s as any).sttan ?? 0) === 1  &&  ((s as any).pantyworntype ?? 0) !== 'none') {
      // TODO-QSP: dynamic text: - Vav <<$pcs_nickname>> truselya put.
      scene.text(`- Vav ${((s as any).pcs_nickname ?? 0)} truselya put.`);
      scene.actions([
        { label: 'Answer', goto: ['ETO_village', 'forest_area'] },
      ]);
    }
    scene.actions([
      { label: 'Leave', goto: ['pushkin_sq', ''] },
    ]);
  } },
      ]);
    }
  }
  if (((s as any).stallionQ ?? 0) === 3) {
    scene.text('There is a rumbling in your stomach, you need to use the restroom. There appears to be a public restroom tucked into the corner of a building. Unfortunately, the female one has a sign reading, "Out of order."');
    qspCall(s, 'willpower', 'misc', 'resist', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Hold it [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Hold it', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).stallionQ = 1;
  }, goto: ['pushkin_sq', ''] },
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
