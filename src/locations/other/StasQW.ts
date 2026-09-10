import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).StasKafe ?? 0) === 2) {
    scene.img('images/locations/city/citycenter/diner/kafe2.jpg');
    scene.text('After the dance, Stas takes you by the hand to the table. Sitting down in a chair, he grabs you by the waist and pulls you into his lap. He immediately begins to kiss you, and you feel his hand slide up your skirt between your legs and begin to caress your clitoris. Stas whispers in your ear, "Come to you or can have fun in the toilet?"');
    scene.actions([
      { label: 'Let\'s go!', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/diner/kafe2.jpg');
    scene.text('With a sweeping gesture, Stas throws the money to the waitress and then stands up, taking you by the hand. Leaning on his arm, the two of you leave the cafe and walk down the street in the direction of your home.');
    scene.actions([
      { label: 'Home', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/stas/go.jpg');
    scene.text('A bit tipsy, you are unsteady on your feet. You stumble and nearly fall, but Stas gallantly catches you and picks you up. He carries you in his arms the rest of the way to your house while you wrap your arms around his neck and nuzzle his ear. He ends up carrying you inside.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (st as any).SStip = 0;
  }, goto: ['StasSex', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    scene.img('images/locations/city/citycenter/diner/kafe.jpg');
    // TODO-QSP: dynamic text: After the dance, you sit down again at the table. The waitress brings the bill o...
    scene.text('After the dance, you sit down again at the table. The waitress brings the bill over. You take a look at the bill and are slightly stunned by the total. \' + $func(\'money\', \'string_price\', 5000) + \'! Stas takes the bill out of your hands and says, "Do not worry, I\'ll pay."');
    if (((s as any).StasKafe ?? 0) === 0) {
      scene.text('<center><b>Cafe</b></center>');
      scene.img('images/locations/city/residential/cafe/kafe.jpg');
      scene.text('You sit on a chair across the table from Stas. He waves over a waitress. When the waitress arrives, he orders champagne and fruit. The order is brought over to your table quickly. Stas pours champagne in glasses and hands you one. "A toast to friendship."');
      scene.actions([
        { label: 'Drink for friendship', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/diner/kafe.jpg');
    scene.text('You drink champagne, and Stas starts telling funny stories, while he keeps refilling the glasses with champagne.');
    scene.actions([
      { label: 'Drink and chat', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (15);
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (60);
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (60);
    (s as any).fat = ((s as any).fat ?? 0) + (4);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/diner/kafe.jpg');
    scene.text('You feel relaxed in Stas company. Drinking champagne, you listen to Stas regale you with tales. You are so caught up in the moment, you do not even notice Stas order another bottle. Finally, you realize that you are already well on your way to being drunk. The music starts up in the cafe, and Stas rises from his chair and gallantly offers you a hand.');
    scene.actions([
      { label: 'Dance', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    qspCall(s, 'stat', '');
    scene.img('images/pc/activities/dance.jpg');
    scene.text('You take his hand, and he leads you to the dance floor, one hand on the small of your back and another grabbing you around the back of your thigh just below you butt. Slowly, his hands creep down till he is squeezing your butt.');
    if (((s as any).pcs_horny ?? 0) < 100) {
      scene.actions([
        { label: 'Raise his hands up', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    qspCall(s, 'stat', '');
    scene.img('images/pc/activities/dance.jpg');
    scene.text('You reach down and pull both his hands up till they are on the small of your back as you dance with him.');
    if (((s as any).pcs_horny ?? 0) < 100) {
      scene.actions([
        { label: 'Again raise his hands up', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    qspCall(s, 'stat', '');
    scene.img('images/pc/activities/dance.jpg');
    scene.text('Once again, you reach down and pull both his hands up till they are on the small of your back as you dance with him. Stas apparently is feeling a bit randy. With his hands on your back, he begins to gently stroke down your back to your ass again. Finally, the dance is over.');
    scene.actions([
      { label: 'Sit at the table', handler: (st: GameState) => {
    (st as any).StasKafe = 1;
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Dance', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (20);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/stas/event/dance2.jpg');
    scene.text('You continue to dance and let him squeeze your butt. Soon, one of his hands slips around in front of your thigh and between your legs. He raises his hand up and starts rubbing your clit. Suddenly, the dance is over, and Stas leads you back to your table.');
    scene.actions([
      { label: 'Sit at the table', handler: (st: GameState) => {
    (st as any).StasKafe = 2;
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Dance', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (20);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/stas/event/dance2.jpg');
    scene.text('You continue to dance and let him squeeze your butt. Soon, one of his hands slips around in front of your thigh and between your legs. He raises his hand up and starts rubbing your clit.');
    if (((s as any).pcs_horny ?? 0) < 100) {
      scene.actions([
        { label: 'Raise his hands up', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    qspCall(s, 'stat', '');
    scene.img('images/pc/activities/dance.jpg');
    scene.text('You reach down and pull both his hands up till they are on the small of your back as you dance with him. Stas apparently is feeling a bit randy. With his hands on your back, he begins to gently stroke down your back to your ass again. Finally, the dance is over.');
    scene.actions([
      { label: 'Sit at the table', handler: (st: GameState) => {
    (st as any).StasKafe = 2;
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Dance', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (20);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/stas/event/dance2.jpg');
    scene.text('You continue to dance and let him rub your clit. After a moment, he slips his hands inside of your panties and slips a finger inside of you. You moan gently into his ear as he finger bangs you right out on the dance floor. Suddenly, the dance is over, and Stas leads you back to your table.');
    scene.actions([
      { label: 'Sit at the table', handler: (st: GameState) => {
    (st as any).StasKafe = 2;
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'No thank you, I\'ll pay [+$func(\'money\', \'get_cost_string\', 5000)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 5000) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney ?? ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 5000);
      qspCall(s, 'stat', '');
      scene.img('images/locations/city/citycenter/diner/kafe.jpg');
      scene.text('You shake your head. "That is sweet, but I can pay my share." You get out the money and pay the waitress. Stas stands up and gives you a hand. Leaning on his arm, you walk together with Stas, arm and arm as you leave the cafe.');
      scene.actions([
        { label: 'Home', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/stas/go.jpg');
    scene.text('A bit tipsy, you are unsteady on your feet. You stumble and nearly fall, but Stas gallantly catches you and helps steady you. Making sure you are alright, he helps support you the rest of the walk home. Once you get to your home, he waits at the door expectantly. He clearly expects you to invite him in.');
    qspCall(s, 'willpower', 'sex', 'self', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Invite him in [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Invite him in', handler: (st: GameState) => {
    (s as any).SStip = 0;
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
  }, goto: ['StasSex', ''] },
      ]);
    }
    scene.actions([
      { label: 'Say goodbye', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('You say goodbye to Stas and kiss him on the cheek. He is obviously disappointed that you did not invite him in, but he doesn\'t protest and leaves.');
    scene.actions([
      { label: 'Close the door', goto: ['korr', ''] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
      { label: 'Oh that\'s so cute!', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/diner/kafe.jpg');
    scene.text('You are glad that you will not have to pay for the cafe. Stas makes a sweeping gesture and throws the money to the waitress, then stands up and gives you a hand. Leaning on him, you walk out of the cafe arm and arm.');
    scene.actions([
      { label: 'Home', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/stas/go.jpg');
    scene.text('A bit tipsy, you are unsteady on your feet. You stumble and nearly fall, but Stas gallantly catches you and helps steady you. Making sure you are alright, he helps support you the rest of the walk home. Once you get to your home, he waits at the door expectantly. He clearly expects you to invite him in. You debate inviting him in but feel it would snub him after what he just spent, and you are feeling a little indebted to him, especially since he already found you a job. You smile and open the door wide to let him in.');
    scene.actions([
      { label: 'Invite him in', handler: (st: GameState) => {
    (st as any).SStip = 0;
  }, goto: ['StasSex', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

export const StasQW: LocationDef = {
  name: 'StasQW',
  title: 'Cafe',
  region: 'other',
  description: ['After the dance, Stas takes you by the hand to the table. Sitting down in a chair, he grabs you by the waist and pulls you into his lap. He immediately begins to kiss you, and you feel his hand slide up your skirt between your legs and begin to caress your clitoris. Stas whispers in your ear, "Come to you or can have fun in the toilet?"'],
  enter: enter,
};
