import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Trade Representative</b></center>');
  scene.img('images/locations/city/residential/office/clener.jpg');
  scene.text('You walk down the hall to the office at the end. You read Director written on the door, you knock on the door and enter. Sitting behind the desk is Stas while Vitali sits in a large comfortable chair and in the third chair you see a woman.');
  if (((s as any).svQW ?? 0) === 2) {
    if (((s as any).TorgPredDay ?? 0) !== ((s as any).daystart ?? 0)) {
      if (((s as any).TorgPredZ ?? 0) === 0  &&  (!((s as any).TorgPredZV ?? 0))) {
        scene.actions([
          { label: 'Take the job', handler: (st: GameState) => {
    (s as any).TorgPredZ = 3;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).TorgPredDay = ((s as any).daystart ?? 0);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/office/stasoffice.jpg');
    scene.text('You tell Stas you want the job. He smiles and hands you a paper, "Don\'t forget, you need to promote all three items at all the supermarkets."');
    scene.actions([
      { label: 'Leave', goto: ['city_smalloffice', 'start'] },
    ]);
  } },
        ]);
      }
    }
    if (((s as any).TorgPredZ ?? 0) === 0  &&  ((s as any).TorgPredZV ?? 0) === 3) {
      scene.actions([
        { label: 'Get paid', handler: (st: GameState) => {
    (s as any).TorgPredZV = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'money', 'earn', 500);
    (s as any).TPworkTimes = ((s as any).TPworkTimes ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/office/stasoffice.jpg');
    // TODO-QSP: dynamic text: You head into the office to get paid, Stat is pleased with your work and hands <...
    scene.text(`You head into the office to get paid, Stat is pleased with your work and hands ${qspFunc(s, 'money', 'string_profit', 500)} over to you.`);
    if (((s as any).npc_has_sex ?? 0)?.['A50'] === 0) {
      if (((s as any).TPworkTimes ?? 0) >= 3  &&  ((s as any).TPmainQW ?? 0) === 0  &&  (!((s as any).mesec ?? 0))) {
        if (((s as any).PCloSkirt ?? 0) > 0) {
          scene.text('Stas asks, "How do you like it so far, do you enjoy working for me?"');
          scene.actions([
            { label: 'I like it', handler: (st: GameState) => {
    (s as any).TPmainQW = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/office/stasoffice.jpg');
    scene.text('You think about it for a moment, "It\'s pretty great I love my job, thank you again for hiring me." Stas nods and smiles, "Our company is still expanding and for a bright young thing like you, there will be lots of opportunities. Why don\'t you come to the cafe with me and we can discuss about it."');
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/office/stasoffice.jpg');
    scene.text('You happily accept, "That sounds wonderful." You know your new job and any future prospects depends completely on his opinion, and you would like to keep him on his good side.');
    scene.text('Stas is delighted and takes you to the cafe, on the way there you get to talk about work. Once at the cafe Stas pulls a chair out for you.');
    scene.actions([
      { label: 'Take a seat', goto: ['StasQW', ''] },
    ]);
  } },
    ]);
  } },
            { label: 'It\'s okay', handler: (st: GameState) => {
    (s as any).TPmainQW = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/office/stasoffice.jpg');
    scene.text('You tell Stas how it is, "The work is ok, it is nice having steady work." Stas grins, "Our company is still expanding and for a bright young thing like you, there will be lots of opportunities. Why don\'t you come to the cafe with me and we can discuss about it."');
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/office/stasoffice.jpg');
    scene.text('You happily accept, "That sounds wonderful." You know your new job and any future prospects depends completely on his opinion, and you would like to keep him on his good side.');
    scene.text('Stas is delighted and takes you to the cafe, on the way there you get to talk about work. Once at the cafe Stas pulls a chair out for you.');
    scene.actions([
      { label: 'Take', goto: ['StasQW', ''] },
    ]);
  } },
    ]);
  } },
          ]);
        }
        return;
      }
    }
    if (((s as any).TPmainQW ?? 0) === 1) {
      if (((s as any).npc_has_sex ?? 0)?.['A50']  &&  (!((s as any).StVaGang ?? 0))) {
        scene.text('');
        // TODO-QSP: !! Sveta gave Stas, he did not consider her a whore, and wants to continue the relationship
      }
      if (((s as any).npc_has_sex ?? 0)?.['A50'] === 0) {
        scene.text('');
        // TODO-QSP: !! Sveta gave Stas, he did not consider her a whore, and wants to continue the relationship
      }
    }
    if (((s as any).StVaGang ?? 0) > 0) {
      scene.text('');
      // TODO-QSP: !! Stas and Valera believe whore Sveta
    }
    scene.actions([
      { label: 'Leave', goto: ['city_smalloffice', 'start'] },
    ]);
  } },
      ]);
    }
    if (((s as any).TPmainQW ?? 0) === 1  &&  ((s as any).npc_has_sex ?? 0)?.['A50']  &&  (!((s as any).StVaGang ?? 0))) {
      scene.text('As Stas notices you, he smiles broadly and is obviously pleased to see you. He leans in close and whispers, as not to be overheard, "I really like you and I want us to start dating."');
      if (((s as any).stat ?? 0)?.['boyfriends_current'] > 0) {
        scene.text('You\'re not that sure your current boyfriend would be pleased if you accepted this offer. Stas, of course, is very nice and kind, but you need to first figure out what to do with your current relationship.');
      } else {
        scene.actions([
          { label: 'Agree', handler: (st: GameState) => {
    scene.text('You smile, "I would love to start dating you." He jumps for joy and promises to call you soon to set up a date.');
    (s as any).TPmainQW = 2;
    (s as any).npc_height['A50'] = 181;
    (s as any).npc_weight['A50'] = 58;
    (s as any).npc_haircol['A50'] = 3;
    (s as any).npc_finance['A50'] = 1;
    (s as any).npc_pervert['A50'] = 0;
    (s as any).figurBoy = Math.floor(Math.random() * 3) + 0;
    (s as any).titBoy = Math.floor(Math.random() * 3) + 0;
    (s as any).hairBoy = Math.floor(Math.random() * 4) + 0;
    qspCall(s, 'npcStat', 'A50');
    (s as any).vneshBoy = 1;
    qspCall(s, 'lover', 'add_boyfriend', 'A50');
    (s as any).stopboy = 0;
    (s as any).boyonceA = 1;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['city_smalloffice', 'start'] },
    ]);
  } },
        ]);
      }
      qspCall(s, 'willpower', 'misc', 'self', 'easy');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Tell him no [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Tell him no [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).TPmainQW = 2;
    qspCall(s, 'stat', '');
    scene.text('You shake your head, "You\'re a nice guy Stas but I just don\'t feel that way towards you, I\'m sorry." Stas seems a bit offended by that, "I thought, we had something, more than just a fling."');
    scene.actions([
      { label: 'Leave', goto: ['city_smalloffice', 'start'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'I need to think about it', handler: (st: GameState) => {
    scene.text('You frown a little, "I am very flattered but I need to think about this, it\'s a big step. Just give me a little time to think it over ok?" Stas frowns a bit but finally nods.');
    scene.actions([
      { label: 'Leave', goto: ['city_smalloffice', 'start'] },
    ]);
  } },
      ]);
    }
  }
  scene.actions([
    { label: 'Leave', goto: ['city_smalloffice', 'start'] },
  ]);
  scene.build();
}

export const city_trademission: LocationDef = {
  name: 'city_trademission',
  title: 'Trade Representative',
  region: 'city',
  description: ['You walk down the hall to the office at the end. You read Director written on the door, you knock on the door and enter. Sitting behind the desk is Stas while Vitali sits in a large comfortable chair and in the third chair you see a woman.'],
  enter: enter,
};
