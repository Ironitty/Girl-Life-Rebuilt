import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).music_loop = 0;
  qspCall(s, 'core_library', 'setloc', 'rasputin_host', 'start');
  qspCall(s, 'stat', '');
  if (((s as any).locArgs?.[1] ?? 0) === 1) {
    scene.img('images/locations/pushkin/rasputin/nadia_1.jpg');
    scene.text('Nadia waits with a warm smile.');
    // TODO-QSP: dynamic text: "Is there anything else I can help you with <<$pcs_firstname>>?"
    scene.text(`"Is there anything else I can help you with ${((s as any).pcs_firstname ?? 0)}?"`);
  } else {
    if (((s as any).rasputin ?? 0)?.['hostEv'] === 0) {
      scene.img('images/locations/pushkin/rasputin/nadia_1.jpg');
      scene.text('There is a woman sits on a chair with a glass of wine in hand and lost in her thoughts.');
      scene.text('She returns to alertness when she realizes she isn\'t alone and gives you a welcoming smile.');
    } else {
      scene.img('images/locations/pushkin/rasputin/nadia_1.jpg');
      scene.text('Nadia notices as you walk into the club. She smiles and greets you with a warm smile.');
      // TODO-QSP: dynamic text: "Hello, <<$pcs_firstname>>, how can I help you today?"
      scene.text(`"Hello, ${((s as any).pcs_firstname ?? 0)}, how can I help you today?"`);
    }
  }
  if (((s as any).rasputin ?? 0)?.['hostEv'] === 0) {
    scene.actions([
      { label: 'Ask her about this place', handler: (st: GameState) => {
    ((s as any).rasputin ?? {})['hostEv'] = 1;
    scene.text('<center>Unknown Woman</center>');
    scene.img('images/locations/pushkin/rasputin/nadia_2.jpg');
    scene.text('You ask the woman after you introduce yourself. "Excuse me, would you mind tell me a little bit about this place?"');
    scene.text('The woman\'s eyes light up and she takes few steps closer to you.');
    scene.text('She smiles then answers your question.');
    // TODO-QSP: dynamic text: Of course, <<$pcs_firstname>>. I am Nadia Titova but you can call me Nadia. What...
    scene.text(`Of course, ${((s as any).pcs_firstname ?? 0)}. I am Nadia Titova but you can call me Nadia. What would you like to know?`);
    qspCall(s, 'rasputin_host', 'options');
    scene.actions([
      { label: 'Nothing', handler: (st: GameState) => {
    scene.text('<center>Nadia Titova</center>');
    scene.img('images/locations/pushkin/rasputin/nadia_2.jpg');
    scene.text('You tell Nadia that you couldn\'t actually think anything to ask.');
    scene.text('She chuckles and patiently waits for you to decide what to do next.');
    scene.actions([
      { label: 'Return to entrance', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['rasputin_entrance', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    qspCall(s, 'rasputin_host', 'options');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Apologize for the intrusion and return to the entrance', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['rasputin_entrance', ''] },
  ]);
  scene.build();
}

function enterOptions(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'About the shows', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.text('<center>Nadia Titova</center>');
    scene.img('images/locations/pushkin/rasputin/nadia_2.jpg');
    scene.text('You ask Nadia about the shows Rasputin offers.');
    // TODO-QSP: dynamic text: "We have the burlesque shows that starts at ' + func('time', 'get_time_string', ...
    scene.text('"We have the burlesque shows that starts at \' + func(\'time\', \'get_time_string\', 18, 30) + \' and runs about 2 hours with an intermission."');
    // TODO-QSP: dynamic text: "Then from ' + func('time', 'get_time_string', 22, 0) + ' to midnight we have th...
    scene.text('"Then from \' + func(\'time\', \'get_time_string\', 22, 0) + \' to midnight we have the exotic variety shows, you need to be at least 16 to see these shows."');
    scene.text('She finishes with a wink. You found yourself blushing pink for a moment.');
    scene.actions([
      { label: 'Okay', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['rasputin_host', 'start', '1'] },
    ]);
  } },
    { label: 'About buying a ticket', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center>Nadia Titova</center>');
    scene.img('images/locations/pushkin/rasputin/nadia_3.jpg');
    scene.text('You tell Nadia that you want to purchase ticket for a show.');
    scene.text('"Oh really? Of course, what shows would you be interested to see?"');
    // TODO-QSP: dynamic text: "' + $func('money', 'string_price', 3000) + ' for the burlesque show and ' + $fu...
    scene.text('"\' + $func(\'money\', \'string_price\', 3000) + \' for the burlesque show and \' + $func(\'money\', \'string_price\', 4000) + \' for the exotic variety show"');
    if (((s as any).rasputin ?? 0)?.['burlesque_ticket'] === 0) {
      scene.actions([
        { label: 'For the burlesque show, please', handler: (st: GameState) => {
    scene.text('<center>Nadia Titova</center>');
    scene.img('images/locations/pushkin/rasputin/nadia_3.jpg');
    scene.text('You tell Nadia that you would like to buy a ticket for a burlesque show.');
    if (qspFunc(s, 'money', 'can_afford', 3000) === 0) {
      qspCall(s, 'stat', '');
      scene.text('You realize that you don\'t have enough money to buy any ticket.');
      scene.text('Nadia nods and tell you that Rasputin isn\'t going any where before flash you another smile.');
      (s as any).minut = ((s as any).minut ?? 0) + 1;
      scene.actions([
        { label: 'Smile back and walk back to the entrance', goto: ['rasputin_entrance', ''] },
      ]);
    } else {
      scene.actions([
        { label: 'Buy ticket ( [+$func(\'money\', \'string_price\', 3000) + \'...]', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('You buy the ticket for the burlesque show.');
    // TODO-QSP: dynamic text: "Sure, the shows starts at ' + func('time', 'get_time_string', 18, 30) + ' but w...
    scene.text('"Sure, the shows starts at \' + func(\'time\', \'get_time_string\', 18, 30) + \' but we start to admit customers at \' + func(\'time\', \'get_time_string\', 17, 30) + \'."');
    scene.text('"Thank you!" Nadia smiles back as she hands you the ticket.');
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'money', 'pay', 3000);
    ((s as any).rasputin ?? {})['burlesque_ticket'] = 1;
    scene.actions([
      { label: 'Smile back and walk back to the entrance', goto: ['rasputin_entrance', ''] },
    ]);
  } },
      ]);
    }
  } },
      ]);
    }
    if (((s as any).rasputin ?? 0)?.['variety_ticket'] === 0) {
      scene.actions([
        { label: 'For the variety show, please', handler: (st: GameState) => {
    scene.text('<center>Nadia Titova</center>');
    scene.img('images/locations/pushkin/rasputin/nadia_3.jpg');
    scene.text('You tell Nadia that you would like to buy a ticket for an exotic variety show.');
    if (qspFunc(s, 'money', 'can_afford', 4000) === 0) {
      (s as any).minut = ((s as any).minut ?? 0) + 1;
      qspCall(s, 'stat', '');
      scene.text('You realize that you don\'t have enough money to buy any ticket.');
      scene.text('Nadia nods and tell you that Rasputin isn\'t going any where before flash you another smile.');
      scene.actions([
        { label: 'Smile back and walk back to the entrance', goto: ['rasputin_entrance', ''] },
      ]);
    } else {
      scene.actions([
        { label: 'Buy ticket ( [+$func(\'money\', \'string_price\', 4000) + \'...]', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('You buy the ticket for the variety show.');
    // TODO-QSP: dynamic text: "Sure, the shows starts at ' + func('time', 'get_time_string', 22, 30) + ' but w...
    scene.text('"Sure, the shows starts at \' + func(\'time\', \'get_time_string\', 22, 30) + \' but we start to admit customers at \' + func(\'time\', \'get_time_string\', 21, 30) + \'."');
    scene.text('"Thank you!" Nadia smiles back as she hands you the ticket.');
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'money', 'pay', 4000);
    ((s as any).rasputin ?? {})['variety_ticket'] = 1;
    scene.actions([
      { label: 'Smile back and walk back to the entrance', goto: ['rasputin_entrance', ''] },
    ]);
  } },
      ]);
    }
  } },
      ]);
    }
    if (((s as any).rasputin ?? 0)?.['burlesque_ticket'] === 0  &&  ((s as any).rasputin ?? 0)?.['variety_ticket'] === 0) {
      scene.actions([
        { label: 'For both shows, please', handler: (st: GameState) => {
    scene.text('<center>Nadia Titova</center>');
    scene.img('images/locations/pushkin/rasputin/nadia_3.jpg');
    scene.text('You tell Nadia that you would like to buy tickets for both shows.');
    if (qspFunc(s, 'money', 'can_afford', 7000) === 0) {
      qspCall(s, 'stat', '');
      scene.text('You realize that you don\'t have enough money to buy any ticket.');
      scene.text('Nadia nods and tell you that Rasputin isn\'t going any where before flash you another smile.');
      (s as any).minut = ((s as any).minut ?? 0) + 1;
      scene.actions([
        { label: 'Smile back and walk back to the entrance', goto: ['rasputin_entrance', ''] },
      ]);
    } else {
      scene.actions([
        { label: 'Buy tickets ( [+$func(\'money\', \'string_price\', 7000) + \'...]', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('You buy tickets for both shows.');
    // TODO-QSP: dynamic text: "Sure, the first show starts at ' + func('time', 'get_time_string', 18, 30) + ' ...
    scene.text('"Sure, the first show starts at \' + func(\'time\', \'get_time_string\', 18, 30) + \' but we start to admit customers at \' + func(\'time\', \'get_time_string\', 17, 30) + \'."');
    scene.text('"Thank you!" Nadia smiles back as she hands you the ticket.');
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'money', 'pay', 7000);
    ((s as any).rasputin ?? {})['burlesque_ticket'] = 1;
    ((s as any).rasputin ?? {})['variety_ticket'] = 1;
    scene.actions([
      { label: 'Smile back and walk back to the entrance', goto: ['rasputin_entrance', ''] },
    ]);
  } },
      ]);
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'I changed my mind', handler: (st: GameState) => {
    scene.text('<center>Nadia Titova</center>');
    scene.img('images/locations/pushkin/rasputin/nadia_3.jpg');
    scene.text('You tell Nadia you will think on it more, she shrugs off and waits for your response.');
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['rasputin_host', 'start', '1'] },
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
    case 'options':
      enterOptions(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const rasputin_host: LocationDef = {
  name: 'rasputin_host',
  title: 'Nadia waits with a warm smile.',
  region: 'other',
  locationType: 'public_indoors',
  enter: enter,
};
