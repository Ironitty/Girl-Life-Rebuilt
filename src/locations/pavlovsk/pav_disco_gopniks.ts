import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A9', 'like', 1, 'pav_disco');
  qspCall(s, 'npc_relationship', 'modify', 'A10', 'like', 1, 'pav_disco');
  qspCall(s, 'npc_relationship', 'modify', 'A11', 'like', 1, 'pav_disco');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/disco/school_kids/vitek_dan_vasily.jpg');
  scene.text('Vitek, Dan and Vasily are hanging out in the dark corner of the hall with the other gopniks. It\'s dimly lit and hard to make out details, but it looks like they\'re sharing some beers they\'ve smuggled in.');
  if (((s as any).npc_rel ?? 0)?.['A9'] >= 60  &&  ((s as any).kotovLoveQW ?? 0) === 0) {
    scene.actions([
      { label: 'Talk to Vitek', handler: (st: GameState) => {
    (st as any).numnpc = 9;
    // TODO-QSP: $static_num = 'A9'
  }, goto: ['kotovtalker', ''] },
    ]);
  }
  scene.actions([
    { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    { label: 'Hang out with them', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/school_kids/vitek_dan_vasily.jpg');
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 300) {
      scene.text('As you start to approach Vitek, he glances at you and gives you a look of disgust. "Get the fuck away from me, slut!"');
      scene.text('Dan then chimes in. "Maybe she\'s looking for a fuck?" he says as he gives you a dark look.');
      scene.text('Seeing the mood turning dark and ugly, you flee while trying to ignore the laughter behind you.');
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      ]);
    } else {
      scene.text('As you walk up to Vitek, he turns to you with a scowl. "Stay the fuck away from us loser." You get the picture from the looks you\'re getting and quickly move away.');
      if (((s as any).grupTipe ?? 0) === 4  &&  ((s as any).gopnik_slut ?? 0) === 1) {
        scene.text('Vitek turns to face you as you approach. "What\'s up, slut?" ');
        scene.text('You grimance slightly, but ignore his remark. "I just wanted to say hi and talk is all."');
        scene.text('"Now that is rare! You don\'t have a cock in your mouth and can actually talk!" Dan chimes in.');
        scene.text('"Who knew her mouth was good for anything other than sucking cock?" Vitek says and laughs loudly.');
        // TODO-QSP: dynamic text: "I'm surprised <<$pcs_nickname>> doesn't walk bow legged after the number of tim...
        scene.text(`"I'm surprised ${((s as any).pcs_nickname ?? 0)} doesn't walk bow legged after the number of times she's been fucked!" Vasily says with a laugh.`);
        scene.text('You put up with their comments and end up talking to them about a variety of things the group is up to. They insult you every so often, but in an almost friendly way, although Vasily keeps asking about who\'s dick you just sucked.');
        scene.text('After a while, you grow uncomfortable with the way they\'re looking at you, so you get up and walk away before they can drag you off somewhere to use you.');
        scene.actions([
          { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        ]);
      } else {
        if (((s as any).grupTipe ?? 0) === 4) {
          scene.text('As you start to approach them, you hear Vitek, Dan and Vasily telling stories. After a few questions, they start telling you about some of their more exciting adventures and soon you are all laughing and swapping stories.');
        } else {
          scene.text('As you start to approach them, you hear Vitek, Dan and Vasily telling stories.');
          // TODO-QSP: dynamic text: "What do you want, <<$pcs_nickname>>?" Vitek asks when he sees you.
          scene.text(`"What do you want, ${((s as any).pcs_nickname ?? 0)}?" Vitek asks when he sees you.`);
          scene.text('"I just wanted to say hi and talk is all," you reply.');
          scene.text('"Whatever," he shrugs before he goes back to telling stories and after a few questions, starts telling you about some of his more exciting adventures.');
        }
        scene.text('Just as Vitek finishes one of his stories, Dan shoves a bottle of beer in your face. "Have a drink!"');
        scene.text('You see all of them looking at you and can\'t help but feel the peer pressure.');
        qspCall(s, 'willpower', 'drink', 'resist', 'hard');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'No thanks [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'No thanks', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    qspCall(s, 'npc_relationship', 'modify', 'A9', 'dislike', 1, 'pav_disco2');
    qspCall(s, 'npc_relationship', 'modify', 'A10', 'dislike', 1, 'pav_disco2');
    qspCall(s, 'npc_relationship', 'modify', 'A11', 'dislike', 1, 'pav_disco2');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/school_kids/vitek_dan_vasily.jpg');
    scene.text('You shake your head. "No thanks. Maybe later."');
    scene.text('Vitek shakes his head. "Just when you start acting cool, you turn around and show what a pussy you are!"');
    scene.text('Dan snorts and Vitek dismisses you before you can reply. With the looks they\'re giving you, you know better than to try and push your luck, so you quickly leave to find something else to do.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
          ]);
        }
        if (((s as any).npc_rel ?? 0)?.['A9'] <= 20  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 300) {
          if (((s as any).grupTipe ?? 0) === 4) {
            scene.text('You go over and sit on the stairs near Vitek and listen to him, Dan and Vasily tell stories.');
            scene.text('"What do you want, you stupid cow?" Vitek snarls when they see you.');
            scene.text('"I just wanted to say hi and talk is all," you reply.');
            scene.text('"Whatever," he shrugs before he goes back to telling stories and you ask him a few questions about some of his more exciting adventures. He answers a few, but otherwise ignores you.');
          } else {
            scene.text('You go over and sit on the stairs near Vitek and listen to him, Dan and Vasily tell stories. "What do you want, you stupid cow?" Vitek snarls when they see you.');
            scene.text('"I just wanted to say hi and talk is all." you reply and he glares at you. "Fuck off bitch!"');
            scene.text('He goes back to telling stories and you ask him a few questions about some of his more exciting adventures. He ignores you, but doesn\'t make any efforts to chase you off either.');
          }
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
          ]);
        } else {
          scene.text('As you start to approach them, you hear Vitek, Dan and Vasily telling stories.');
          // TODO-QSP: dynamic text: "What do you want, <<$pcs_nickname>>?" Vitek asks when he sees you.
          scene.text(`"What do you want, ${((s as any).pcs_nickname ?? 0)}?" Vitek asks when he sees you.`);
          scene.text('"I just wanted to say hi and talk is all," you reply.');
          scene.text('"Whatever," he shrugs before he goes back to telling stories and after a few questions, starts telling you about some of his more exciting adventures.');
          scene.text('Just as Vitek finishes one of his stories, Dan shoves a bottle of beer in your face. "Have a drink!"');
          scene.text('You see all of them looking at you and can\'t help but feel the peer pressure.');
          qspCall(s, 'willpower', 'drink', 'resist', 'hard');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'No thanks [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'No thanks', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    qspCall(s, 'npc_relationship', 'modify', 'A9', 'dislike', 1, 'pav_disco2');
    qspCall(s, 'npc_relationship', 'modify', 'A10', 'dislike', 1, 'pav_disco2');
    qspCall(s, 'npc_relationship', 'modify', 'A11', 'dislike', 1, 'pav_disco2');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/school_kids/vitek_dan_vasily.jpg');
    scene.text('You shake your head. "No thanks. Maybe later."');
    scene.text('Vitek shakes his head. "Just when you start acting cool, you turn around and show what a pussy you are!"');
    scene.text('Dan snorts and Vitek dismisses you before you can reply. With the looks they\'re giving you, you know better than to try and push your luck, so you quickly leave to find something else to do.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
            ]);
          }
          scene.actions([
            { label: 'Sure', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'drugs', 'alcohol', 'beer', 1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/drink_beer.jpg');
    scene.text('You grab the bottle and take a swig. "Thanks."');
    scene.text('They go back to telling stories and you start listening. Once you\'ve finished the bottle, they hand you another and start staring at you again, waiting to see if you take it.');
    qspCall(s, 'willpower', 'drink', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'No thanks [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'No thanks', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    qspCall(s, 'npc_relationship', 'modify', 'A9', 'dislike', 1, 'pav_disco2');
    qspCall(s, 'npc_relationship', 'modify', 'A10', 'dislike', 1, 'pav_disco2');
    qspCall(s, 'npc_relationship', 'modify', 'A11', 'dislike', 1, 'pav_disco2');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/school_kids/vitek_dan_vasily.jpg');
    scene.text('You shake your head. "No thanks. Maybe later."');
    scene.text('Vitek shakes his head. "Just when you start acting cool, you turn around and show what a pussy you are!"');
    scene.text('Dan snorts and Vitek dismisses you before you can reply. With the looks they\'re giving you, you know better than to try and push your luck, so you quickly leave to find something else to do.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Take another beer', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'drugs', 'alcohol', 'beer', 1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/drink_beer.jpg');
    scene.text('You grab the bottle and take a swig. "Thanks."');
    scene.text('They go back to telling stories and you start listening. Once you\'ve finished the bottle, they hand you another and start staring at you again, waiting to see if you take it.');
    scene.actions([
      { label: 'No thanks', handler: (st: GameState) => {
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/school_kids/vitek_dan_vasily.jpg');
    scene.text('You shake your head. "No thanks. Maybe later."');
    scene.text('Vitek shakes his head. "Just when you start acting cool, you turn around and show what a pussy you are!"');
    scene.text('Dan snorts and Vitek dismisses you before you can reply. With the looks they\'re giving you, you know better than to try and push your luck, so you quickly leave to find something else to do.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
      { label: 'Keep drinking', goto: ['pav_disco_gopniks', 'vitek_dan_vasily_get_drunk'] },
    ]);
  } },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Sure', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'drugs', 'alcohol', 'beer', 1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/drink_beer.jpg');
    scene.text('You grab the bottle and take a swig. "Thanks."');
    scene.text('They go back to telling stories and you start listening. Once you\'ve finished the bottle, they hand you another and start staring at you again, waiting to see if you take it.');
    qspCall(s, 'willpower', 'drink', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'No thanks [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'No thanks', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    qspCall(s, 'npc_relationship', 'modify', 'A9', 'dislike', 1, 'pav_disco2');
    qspCall(s, 'npc_relationship', 'modify', 'A10', 'dislike', 1, 'pav_disco2');
    qspCall(s, 'npc_relationship', 'modify', 'A11', 'dislike', 1, 'pav_disco2');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/school_kids/vitek_dan_vasily.jpg');
    scene.text('You shake your head. "No thanks. Maybe later."');
    scene.text('Vitek shakes his head. "Just when you start acting cool, you turn around and show what a pussy you are!"');
    scene.text('Dan snorts and Vitek dismisses you before you can reply. With the looks they\'re giving you, you know better than to try and push your luck, so you quickly leave to find something else to do.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Take another beer', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'drugs', 'alcohol', 'beer', 1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/drink_beer.jpg');
    scene.text('You grab the bottle and take a swig. "Thanks."');
    scene.text('They go back to telling stories and you start listening. Once you\'ve finished the bottle, they hand you another and start staring at you again, waiting to see if you take it.');
    scene.actions([
      { label: 'No thanks', handler: (st: GameState) => {
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/school_kids/vitek_dan_vasily.jpg');
    scene.text('You shake your head. "No thanks. Maybe later."');
    scene.text('Vitek shakes his head. "Just when you start acting cool, you turn around and show what a pussy you are!"');
    scene.text('Dan snorts and Vitek dismisses you before you can reply. With the looks they\'re giving you, you know better than to try and push your luck, so you quickly leave to find something else to do.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
      { label: 'Keep drinking', goto: ['pav_disco_gopniks', 'vitek_dan_vasily_get_drunk'] },
    ]);
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

export const pav_disco_gopniks: LocationDef = {
  name: 'pav_disco_gopniks',
  title: 'Vitek, Dan and Vasily are hanging out in the dark corner of ',
  region: 'pavlovsk',
  description: ['Vitek, Dan and Vasily are hanging out in the dark corner of the hall with the other gopniks. It\'s dimly lit and hard to make out details, but it looks like they\'re sharing some beers they\'ve smuggled in.'],
  enter: enter,
};
