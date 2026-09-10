import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterBomzstartqwestdi(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('"I see you\'re a good girl who has some money problems. I have a job for you, but I can\'t say much here. You do have a passport, yes?"');
  qspCall(s, 'willpower', 'misc', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'This seems wrong [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'This seems wrong', handler: (st: GameState) => {
    (s as any).bomzQW = (-1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'willpower', 'pay', 'resist');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  scene.actions([
    { label: 'Yes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.text('You nod. "Yes, so are you going to tell me about this job?"');
    scene.text('"Not here," he replies. "Follow me and everything will be explained."');
    scene.text('To your surprise, the man walks towards the subway. You remind him about his financial problems, but he just smiles and approaches the ticket office.');
    scene.text('"Hi Uncle Nick," the cashier says and opens the barrier to let him through.');
    scene.text('"Thank you. Your mother is worried about you. You should call her." He then nods at you. "Can you help my young friend here?"');
    scene.text('"No problem. Just don\'t tell anyone," she says with a wink.');
    scene.actions([
      { label: 'Enter the subway', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.text('You descend into the subway and head to the industrial area, where you are taken to the porn studio.');
    if (((s as any).pfilmNO ?? 0) === 1) {
      scene.text('"I came here looking for work, but I was turned down," you tell the man.');
      scene.text('"Your pussy isn\'t the only way to earn money in this business," he replies with a smile.');
    } else {
      scene.text('"I already earn money this way," you say with a laugh.');
      scene.text('"I know, but your pussy isn\'t the only way to earn money in this business," he replies with a smile.');
      scene.text('"This is no place for a girl to be working!" you say in shock.');
      scene.text('"Calm down, your pussy isn\'t the only way to earn money in this business," he replies with a smile.');
    }
    scene.actions([
      { label: 'Speak to the manager', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    if (((s as any).pornstudio ?? 0) === 0) {
      (s as any).pornstudio = 1;
    }
    qspCall(s, 'stat', '');
    if (((s as any).film ?? 0) > 0) {
      // TODO-QSP: dynamic text: You walk into Dimitri's office and he stares at you. "<<$pfname>>? What brings y...
      scene.text(`You walk into Dimitri's office and he stares at you. "${((s as any).pfname ?? 0)}? What brings you here?"`);
    } else {
      scene.text('"You\'re not getting on camera Nick, no matter how hot, or desperate, the girl is," he says while looking you over.');
    }
    scene.text('The man ignores him. "I remember you saying you were having problems with your deliveries?"');
    scene.text('"Yes. Our people are becoming too well known."');
    scene.text('"Then this girl is just the person to help you."');
    if (((s as any).film ?? 0) === 0) {
      scene.actions([
        { label: 'Inquire', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.text('"What kind of work are we talking about here?" you ask.');
    scene.text('"Transportation of goods," the manager replies. "Show me your passport and come here next Thursday. If all goes well, we will discuss the details."');
    qspCall(s, 'willpower', 'misc', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse and leave', handler: (st: GameState) => {
    (s as any).bomzQW = (-1);
    qspCall(s, 'willpower', 'pay', 'resist');
  }, goto: ['city_industrial', ''] },
      ]);
    }
    if (((s as any).age ?? 0) < 18  &&  ((s as any).fakepassport ?? 0) === 0) {
      scene.actions([
        { label: 'I don\'t have a passport', handler: (st: GameState) => {
    scene.text('"I\'m sorry, but I can\'t help you without a passport. Come back when you get one."');
    scene.text('Dimitri waves you out of his office and you leave the studio.');
    (s as any).bomzQW = 3;
    (s as any).job_hiring_step['city_pornstudio_delivery'] = 1;
    scene.actions([
      { label: 'Leave', goto: ['city_industrial', ''] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Show him your passport', handler: (st: GameState) => {
    if (((s as any).locArgs?.[1] ?? 0) === 'suspicious') {
      scene.text('The man walks over to the manager and whispers something in his ear.');
      scene.text('The manager seems surprised and looks at you. "We seem to have one more issue. Suspicions that you are not quite… as feminine as you appear."');
      qspCall(s, 'willpower', 'exhib', 'resist');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
  }, goto: ['city_industrial', ''] },
        ]);
      }
      return;
      scene.actions([
        { label: 'Show him your pussy', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    if (((s as any).PCloSkirt ?? 0) > 0) {
      scene.text('You raise your skirt and show him your pussy.');
      qspCall(s, 'arousal', 'flash', 5, 'sub');
    } else {
      scene.text('You lower your pants and show him your pussy.');
      qspCall(s, 'arousal', 'flash', 5, 'sub');
    }
    qspCall(s, 'arousal', 'end');
    if (((s as any).pcs_pubes ?? 0) <= 3) {
      if (((s as any).PCloSkirt ?? 0) > 0) {
        scene.img('images/locations/city/residential/sauna/sex/sauna_pussy1.jpg');
      } else {
        scene.img('images/locations/city/residential/sauna/sex/sauna_pussy1.jpg');
      }
      scene.text('"clean-shaven. Cute. Don\'t forget to come back here on Thursday."');
    } else {
      if (((s as any).PCloSkirt ?? 0) > 0) {
        scene.img('images/locations/city/residential/sauna/sex/sauna_pussy2.jpg');
      } else {
        scene.img('images/locations/city/residential/sauna/sex/sauna_pussy3.jpg');
      }
      scene.text('"A well kept garden. Don\'t forget to come back here on Thursday."');
      if (((s as any).PCloSkirt ?? 0) > 0) {
        scene.img('images/locations/city/residential/sauna/sex/sauna_pussy4.jpg');
      } else {
        scene.img('images/locations/city/residential/sauna/sex/sauna_pussy5.jpg');
      }
      scene.text('"You do realize a bird has made a nest in your panties? Might want to find it a new home. Don\'t forget to come back here on Thursday."');
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).bomzQW = 1;
    qspCall(st, 'jobs', 'set_employed', 'city_pornstudio_delivery');
  }, goto: ['city_industrial', ''] },
    ]);
  } },
      ]);
    } else {
      scene.text('The manager takes your details and passport. "Remember. Come back here on Thursday."');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).bomzQW = 1;
    qspCall(st, 'jobs', 'set_employed', 'city_pornstudio_delivery');
  }, goto: ['city_industrial', ''] },
      ]);
    }
  } },
      ]);
    }
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Inquire', handler: (st: GameState) => {
    scene.text('"What kind of work are we talking about here?" you ask.');
    // TODO-QSP: dynamic text: "It doesn't matter. I can't use one of my girls for this, so you're free to go. ...
    scene.text(`"It doesn't matter. I can't use one of my girls for this, so you're free to go. I'll see you next time you're shooting, ${((s as any).pfname ?? 0)}."`);
    scene.text('Dimitri waves you out of his office and you leave the studio.');
    scene.actions([
      { label: 'Leave', goto: ['city_redlight', 'start'] },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/musorka.jpg');
  scene.text('A long line of trash cans for all the local apartments, shamefully hidden behind a corrugated iron fence.');
  if (((s as any).bumtolik ?? 0) === 2  &&  Math.floor(Math.random() * 2) + 0 === 1) {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/musorka.jpg');
    scene.text('You see the homeless person who you gave money to last time. He smiles, waving at you as he walks over to say something.');
    scene.text('"Don\'t be afraid, hear me out."');
    scene.actions([
      { label: 'Listen to him', goto: ['city_trashplaceevents', 'pos8'] },
    ]);
  }
  if (((s as any).bumtolik ?? 0) === 3  &&  ((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) <= 20  &&  Math.floor(Math.random() * 2) + 0 === 1) {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/bumt2.jpg');
    scene.text('You see a girl feeding the homeless.');
    scene.text('"Hey, can you take a picture of me as I help this unfortunate soul?"');
    scene.text('You find the situation uncomfortable and refuse to photograph the girl.');
    scene.actions([
      { label: 'Ask what she\'s up to', goto: ['city_trashplaceevents', 'pos9'] },
    ]);
  }
  if (((s as any).musor ?? 0) > 3) {
    scene.actions([
      { label: 'Take out the trash', handler: (st: GameState) => {
    (s as any).musor = 0;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/musorka.jpg');
    scene.text('You throw your trash into one of the bins.');
    if (((s as any).bomjqw ?? 0) > 0) {
      scene.text('"Hey babe, come over here and show an old man some service!"');
      scene.text('It\'s s the old bum you saw last time.');
      scene.actions([
        { label: 'Speak to him', goto: ['city_trashplaceevents', 'pos10'] },
      ]);
    }
    if (((s as any).bumtolik ?? 0) === 0) {
      scene.text('"Hey there!" you hear a voice call out from the bins.');
      scene.actions([
        { label: 'See who spoke', goto: ['city_trashplaceevents', 'pos2'] },
      ]);
    } else {
      scene.text('"Hey babe, come here and do an old man a favor!"');
      scene.text('It\'s the old bum you saw last time.');
      scene.actions([
        { label: 'Listen to him', goto: ['city_trashplaceevents', 'pos3'] },
      ]);
    }
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).bomzQW ?? 0) === 0  &&  Math.floor(Math.random() * 10) + 1 >= 8  &&  ((s as any).hour ?? 0) <= 16  &&  ((s as any).week ?? 0) !== 4) {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/bum.jpg');
    scene.text('As you\'re about to leave, a drunk old man stumbles up to you. He looks and smells like he hasn\'t washed in weeks.');
    // TODO-QSP: dynamic text: "It's national give ' + $func('money', 'string_price', 300) + ' to a bum day, so...
    scene.text('"It\'s national give \' + $func(\'money\', \'string_price\', 300) + \' to a bum day, so come on then!" he drunkenly demands.');
    if (qspFunc(s, 'money', 'can_afford', 300, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney ?? ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 300, 'cash');
      qspCall(s, 'stat', '');
      scene.text('You give him some money and he thanks you before walking away. You swear you can hear him laughing…');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    }
    scene.actions([
      { label: 'Give him money [+$func(\'money\', \'get_cost_string\', 300, \'...]' }, // TODO-QSP: empty action body
    ]);
  }
  return;
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    if (((s as any).start_type ?? 0)?.['magic'] === 'tg') {
      if (((s as any).daystart ?? 0) < 10  ||  ((s as any).stat ?? 0)?.['vaginal'] <= 2) {
        scene.text('"I\'d love to, but I don\'t have much money." Hell, you\'re not even accustomed to your new body, but you take care not to say anything.');
        scene.text('"Are you alright?" he asks as he looks you up and down.');
        scene.actions([
          { label: 'No', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).podozrenie = ((s as any).podozrenie ?? 0) + (1);
    scene.text('"No, you just ogle away."');
    scene.text('The bum looks at you with suspicion.');
    // TODO-QSP: gt 'city_trashplace', 'bomzstartqwestdi', 'suspicious'
  } },
        ]);
      } else {
        scene.text('"I\'d love to, but I don\'t have that kind of money."');
        scene.actions([{ label: 'Continue', goto: ['city_trashplace', 'bomzstartqwestdi'] }]);
      }
    } else {
      scene.text('"I\'m sorry mister, but I don\'t have that kind of money."');
      scene.actions([{ label: 'Continue', goto: ['city_trashplace', 'bomzstartqwestdi'] }]);
    }
  } },
    { label: 'Chase him off', handler: (st: GameState) => {
    (s as any).bomzQW = (-10);
    qspCall(s, 'stat', '');
    scene.text('"Get lost, you drunk old freak!" you shout at him.');
    scene.text('"You shouldn\'t be so rude to me. I meet a lot of people and know a lot of things. This will come back to haunt you when you least expect it!" he replies before leaving.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'bomzstartqwestdi':
      enterBomzstartqwestdi(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const city_trashplace: LocationDef = {
  name: 'city_trashplace',
  title: '"I see you\'re a good girl who has some money problems. I hav',
  region: 'city',
  locationType: 'public_outdoors',
  description: ['"I see you\'re a good girl who has some money problems. I have a job for you, but I can\'t say much here. You do have a passport, yes?"'],
  enter: enter,
};
