import { qspCall, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterKinosvid(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'stat', '');
  if (((s as any).home ?? 0)?.['town'] === 'pavlovsk') {
    (s as any).svidboy_home = 'pav_cinema';
  } else {
    (s as any).svidboy_home = 'city_mall';
  }
  scene.text('<center><b>Cinema</b></center>');
  scene.img('images/characters/city/boyfriend/sex/event/kino0.jpg');
  // TODO-QSP: dynamic text: <<$npcdesc>> buys the tickets, and you take your seats ready for viewing
  scene.text(`${((s as any).npcdesc ?? '')} buys the tickets, and you take your seats ready for viewing`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Watch the movie', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 90;
    scene.img('images/characters/city/boyfriend/sex/event/kino1.jpg');
    // TODO-QSP: dynamic text: During the screening, <<$npcdesc>> looks around and, making sure that you are al...
    scene.text(`During the screening, ${((st as any).npcdesc ?? '')} looks around and, making sure that you are alone in the theater, turns and starts to kiss you. His hand slips under your clothes, and you start to caress his chest.`);
    qspCall(st, 'willpower', 'bj', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: '"Not here"', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: '"Not here"', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'bj', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/boyfriend/sex/event/kino0.jpg');
    scene.text('You remove his hand with the words, "Not here."');
    // TODO-QSP: dynamic text: When the movie ends, <<$npcdesc>> says that he has to run and leaves.
    scene.text(`When the movie ends, ${((st as any).npcdesc ?? '')} says that he has to run and leaves.`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'svidboy_home');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Unbutton his pants', handler: (st: GameState) => {
    (st as any).picrand = 48;
    (st as any).svidboysex = 1;
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), (Math.floor(Math.random() * 2) + 2));
    scene.img('images/characters/city/boyfriend/sex/event/kino2.jpg');
    // TODO-QSP: dynamic text: You unbutton his pants and pull out his already erect cock, beginning to stroke ...
    scene.text(`You unbutton his pants and pull out his already erect cock, beginning to stroke it in your hand. ${((st as any).npcdesc ?? '')} lays his hands on your shoulders and begins to press down gently, guiding your head to his member.`);
    scene.actions([
      { label: 'Take by mouth', goto: ['sex', 'minet'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterParksvid(s: GameState, scene: SceneBuilder): void {
  if (((s as any).home ?? 0)?.['town'] === 'pavlovsk') {
    (s as any).svidboy_home = 'pav_park';
    (s as any).svidboy_home_arg = 'start';
  } else {
    (s as any).svidboy_home = 'city_park';
    (s as any).svidboy_home_arg = 'start';
  }
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'stat', '');
  scene.text('<center><b>Park</b></center>');
  scene.img('images/characters/city/boyfriend/sex/event/sex_park0.jpg');
  // TODO-QSP: dynamic text: <<$npcdesc>> and you meet at the entrance to the park.
  scene.text(`${((s as any).npcdesc ?? '')} and you meet at the entrance to the park.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Go for a walk', handler: (st: GameState) => {
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      qspGoto(st, 'svidboy', 'parksvid2');
    }
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    scene.img('images/characters/city/boyfriend/sex/event/sex_park1.jpg');
    // TODO-QSP: dynamic text: When you come into the park, <<$npcdesc>> catches you in his arms and begins to ...
    scene.text(`When you come into the park, ${((st as any).npcdesc ?? '')} catches you in his arms and begins to swing you. "Stop, stop, you will drop me," you laugh. ${((st as any).npcdesc ?? '')} put you on the ground.`);
    qspCall(st, 'willpower', 'kiss', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Move on', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Move on', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'kiss', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/boyfriend/sex/event/sex_park0.jpg');
    scene.text('You take his hand and walk away.');
    // TODO-QSP: dynamic text: Soon, <<$npcdesc>> says that he has to run and leaves.
    scene.text(`Soon, ${((st as any).npcdesc ?? '')} says that he has to run and leaves.`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'svidboy_home', 'svidboy_home_arg');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Kiss him', handler: (st: GameState) => {
    scene.img('images/characters/city/boyfriend/sex/event/sex_park2.jpg');
    scene.text('You turn to him and kiss him on the lips. He holds you, and his hands begin to wander through your body, one on the chest, the second squeezing your buttocks.');
    qspCall(st, 'willpower', 'foreplay', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Stop', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Stop', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'foreplay', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/boyfriend/sex/event/sex_park0.jpg');
    scene.text('You take his hand and walk away.');
    // TODO-QSP: dynamic text: Soon, <<$npcdesc>> says that he has to run and leaves.
    scene.text(`Soon, ${((st as any).npcdesc ?? '')} says that he has to run and leaves.`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'svidboy_home', 'svidboy_home_arg');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (20);
    scene.img('images/characters/city/boyfriend/sex/event/sex_park3.jpg');
    // TODO-QSP: dynamic text: You kiss him. <<$npcdesc>> starts at your lips, then moves lower. Meanwhile, he ...
    scene.text(`You kiss him. ${((st as any).npcdesc ?? '')} starts at your lips, then moves lower. Meanwhile, he bares your chest and begins to squeeze, while his other hand moves to your pussy.`);
    qspCall(st, 'willpower', 'cuni', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Stop', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Stop', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'cuni', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/boyfriend/sex/event/sex_park0.jpg');
    scene.text('You remove his hands and cover your bare breasts.');
    // TODO-QSP: dynamic text: Soon, <<$npcdesc>> says that he has to run and leaves.
    scene.text(`Soon, ${((st as any).npcdesc ?? '')} says that he has to run and leaves.`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'svidboy_home', 'svidboy_home_arg');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/boyfriend/sex/event/sex_park4.jpg');
    // TODO-QSP: dynamic text: You enjoy the petting, as one hand fingers your pussy, when <<$npcdesc>> suddenl...
    scene.text(`You enjoy the petting, as one hand fingers your pussy, when ${((st as any).npcdesc ?? '')} suddenly bends you over, exposing your ass. You glance at his tongue as it slides between your buttocks and your fingered pussy.`);
    // TODO-QSP: dynamic text: It feels quite sensitive, and you enjoy <<$npcdesc>>''s actions very much.
    scene.text(`It feels quite sensitive, and you enjoy ${((st as any).npcdesc ?? '')}'s actions very much.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).picrand = 49;
    (st as any).svidboysex = 1;
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), (Math.floor(Math.random() * 2) + 2));
    qspGoto(st, 'sex', 'kuni');
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
  scene.build();
}

function enterParksvid2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).home ?? 0)?.['town'] === 'pavlovsk') {
    (s as any).svidboy_home = 'pav_park';
    (s as any).svidboy_home_arg = 'start';
  } else {
    (s as any).svidboy_home = 'city_park';
    (s as any).svidboy_home_arg = 'start';
  }
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/boyfriend/sex/event/sex_park5.jpg');
  scene.text('Walking through the park, you notice a black guy watching you.');
  if (((s as any).npc_pervert ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
    // TODO-QSP: dynamic text: <<$npcdesc>> also points him out. Turning to you, he unbuttons his pants and say...
    scene.text(`${((s as any).npcdesc ?? '')} also points him out. Turning to you, he unbuttons his pants and says, "And let's have a little show for this pervert."`);
    qspCall(s, 'willpower', 'exhib', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'exhib', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/boyfriend/sex/event/sex_park6.jpg');
    scene.text('"Well, no, I will not do that, " you reply. Buttoning his pants, you take his hand and move on.');
    // TODO-QSP: dynamic text: Soon, <<$npcdesc>> says that he has to run and leaves.
    scene.text(`Soon, ${((st as any).npcdesc ?? '')} says that he has to run and leaves.`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'svidboy_home', 'svidboy_home_arg');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    (st as any).svidboy_home = 'svidboy';
    (st as any).svidboy_home_arg = 'parksvid21';
    (st as any).picrand = 50;
    (st as any).svidboysex = 1;
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), (Math.floor(Math.random() * 2) + 2));
    qspGoto(st, 'sex', 'minet');
  } },
    ]);
  } else {
    if (((s as any).pcs_inhib ?? 0) >= 40  ||  ((s as any).trait_vars ?? 0)?.['exhibitionist'] > 1) {
      scene.text('A crazy idea comes to your mind: to have sex with your boyfriend in front of this spy.');
      qspCall(s, 'willpower', 'exhib', 'resist');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Discard the idea and move on.', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Discard the idea and move on.', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'exhib', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/boyfriend/sex/event/sex_park6.jpg');
    scene.text('You drop the idea and move on.');
    // TODO-QSP: dynamic text: Soon, <<$npcdesc>> says that he has to run and leaves.
    scene.text(`Soon, ${((st as any).npcdesc ?? '')} says that he has to run and leaves.`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'svidboy_home', 'svidboy_home_arg');
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Have sex', handler: (st: GameState) => {
    scene.img('images/characters/city/boyfriend/sex/event/sex_park9.jpg');
    scene.text('You let go of his hand and stand back a little, determining a place where the African would have a good view. Throwing off your clothes you beckon to him to come over, saying, "I want you here and now."');
    scene.text('"And I do not have a problem with that," he says, coming up to you and unfastening his fly.');
    scene.actions([
      { label: 'Blowjob', handler: (st: GameState) => {
    (st as any).svidboy_home = 'svidboy';
    (st as any).svidboy_home_arg = 'parksvid22';
    (st as any).picrand = 50;
    (st as any).svidboysex = 1;
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), (Math.floor(Math.random() * 2) + 2));
    qspGoto(st, 'sex', 'minet');
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'svidboy_home', 'svidboy_home_arg');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterParksvid21(s: GameState, scene: SceneBuilder): void {
  if (((s as any).home ?? 0)?.['town'] === 'pavlovsk') {
    (s as any).svidboy_home = 'pav_park';
    (s as any).svidboy_home_arg = 'start';
  } else {
    (s as any).svidboy_home = 'city_park';
    (s as any).svidboy_home_arg = 'start';
  }
  scene.img('images/characters/city/boyfriend/sex/event/sex_park7.jpg');
  // TODO-QSP: dynamic text: Once <<$npcdesc>> finishes, he asks you, "Well is our little friend still here?"
  scene.text(`Once ${((s as any).npcdesc ?? '')} finishes, he asks you, "Well is our little friend still here?"`);
  scene.text('"Yes, actively jerking himself off," you reply, glancing toward African.');
  // TODO-QSP: dynamic text: "Hey, what if you suck him while I watch?" asks <<$npcdesc>>, clearly wanting yo...
  scene.text(`"Hey, what if you suck him while I watch?" asks ${((s as any).npcdesc ?? '')}, clearly wanting you to agree.`);
  qspCall(s, 'willpower', 'bj', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'bj', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/boyfriend/sex/event/sex_park6.jpg');
    scene.text('"Well, no, I\'m not going to suck him, enough with him and watching," you reply, dressing then taking his hand and moving on.');
    // TODO-QSP: dynamic text: Soon, <<$npcdesc>> says that he has to run and leaves.
    scene.text(`Soon, ${((st as any).npcdesc ?? '')} says that he has to run and leaves.`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'svidboy_home', 'svidboy_home_arg');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Agree', handler: (st: GameState) => {
    qspCall(st, 'npcgeneratec', '', 0, 'African guy', (Math.floor(Math.random() * 15) + 21));
    qspCall(st, 'npcStat', '', ((st as any).npclastgenerated ?? 0), 'a');
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), (Math.floor(Math.random() * 2) + 2));
    scene.img('images/characters/city/boyfriend/sex/event/sex_park8.jpg');
    scene.text('You beckon the African over. He carefully approaches, cautiously glancing at your guy.');
    // TODO-QSP: dynamic text: "Do not worry, took out personal belongings, now my slut suck you down to the bo...
    scene.text(`"Do not worry, took out personal belongings, now my slut suck you down to the bottom" grinned ${((st as any).npcdesc ?? '')}`);
    // TODO-QSP: dynamic text: You go down on your knees so that <<$npcdesc>> can see the whole process and, pu...
    scene.text(`You go down on your knees so that ${((st as any).npcdesc ?? '')} can see the whole process and, pulling off the man's briefs, start sucking. You do not have to work long. A minute later, he comes in your mouth. Happy, the man immediately runs away.`);
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).boy1 ?? 0));
    qspCall(st, 'arousal', 'bj', 5, 'unknown', 'sub');
    // TODO-QSP: dynamic text: "Hey, if a slut does not take money, you should at least say thank you," <<$npcd...
    scene.text(`"Hey, if a slut does not take money, you should at least say thank you," ${((st as any).npcdesc ?? '')} yells after him.`);
    scene.text('Not paying attention to his words, because you really behaved like a whore, you get dressed and move on.');
    // TODO-QSP: dynamic text: Soon, <<$npcdesc>> says that he has to run and leaves.
    scene.text(`Soon, ${((st as any).npcdesc ?? '')} says that he has to run and leaves.`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'svidboy_home', 'svidboy_home_arg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterParksvid22(s: GameState, scene: SceneBuilder): void {
  if (((s as any).home ?? 0)?.['town'] === 'pavlovsk') {
    (s as any).svidboy_home = 'pav_park';
    (s as any).svidboy_home_arg = 'start';
  } else {
    (s as any).svidboy_home = 'city_park';
    (s as any).svidboy_home_arg = 'start';
  }
  scene.img('images/characters/city/boyfriend/sex/event/sex_park7.jpg');
  // TODO-QSP: dynamic text: After <<$npcdesc>> finishes, he notices you watching the African. "Damn, this pe...
  scene.text(`After ${((s as any).npcdesc ?? '')} finishes, he notices you watching the African. "Damn, this pervert is spying on us," he fumes, then, noticing both your lips slipping into a smile, he asks, "Did you know that he was here? Did you decide to fuck here specifically to show off in front of this Negro? Do you also want to suck him off?"`);
  qspCall(s, 'willpower', 'bj', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Reassure him', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Reassure him', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'bj', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/boyfriend/sex/event/sex_park6.jpg');
    // TODO-QSP: dynamic text: "Of course I did not know anything, do you think that I could have sex with you ...
    scene.text(`"Of course I did not know anything, do you think that I could have sex with you in front of this…" you make a pained face and dress quickly, starting to walk away after a few seconds. ${((st as any).npcdesc ?? '')} catches up with you. "I'm sorry, honey, I did not mean to offend you." You take him by the hand, saying that you forgive him, and move on.`);
    // TODO-QSP: dynamic text: Soon, <<$npcdesc>> says that he has to run and leaves.
    scene.text(`Soon, ${((st as any).npcdesc ?? '')} says that he has to run and leaves.`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'svidboy_home', 'svidboy_home_arg');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Annoy him', handler: (st: GameState) => {
    qspCall(st, 'npcgeneratec', '', 0, 'African guy', (Math.floor(Math.random() * 15) + 21));
    qspCall(st, 'npcStat', '', ((st as any).npclastgenerated ?? 0), 'a');
    ((st as any).npc_rel = (st as any).npc_rel ?? {})[String((st as any).npcID ?? 0)] = 0;
    scene.img('images/characters/city/boyfriend/sex/event/sex_park8.jpg');
    scene.text('"And what if I do want to suck him off?" you snap back at him.');
    // TODO-QSP: dynamic text: "Oh hey, let me call him over then. Hey man, come here, free whore sucks just fo...
    scene.text(`"Oh hey, let me call him over then. Hey man, come here, free whore sucks just for you," ${((st as any).npcdesc ?? '')} yells at the distant man.`);
    scene.text('"Come on, do not be afraid" you shout, and the African guy timidly walks up to you.');
    // TODO-QSP: dynamic text: You go down on your knees so that <<$npcdesc>> can see the whole process, and pu...
    scene.text(`You go down on your knees so that ${((st as any).npcdesc ?? '')} can see the whole process, and pulling off the man's briefs, start sucking. You do not have to work long. A minute later, he comes in your mouth. But you're not going to let this end so quickly, especially with ${((st as any).npcdesc ?? '')} sitting next to you crimson with anger. You take the guy's cock and continue to suck it until it finally falls from your mouth, then demonstratively turn to your now ex-boyfriend and tinker with the sperm in your mouth a little before swallowing it. You turn back to the African and without delay take his cock in your hand and begin to fondle his balls, then taking them into your mouth you begin to suck them, releasing them then taking them in again. As the African's member rises again, you switch your attention to it. Slowly and methodically you lick every inch of his phallus and then begin to suck the head. Smacking loudly, you then try to get the full length inside your throat, and as his member is very modestly sized, you manage it. At this, ${((st as any).npcdesc ?? '')} can not resist shouting something about the fact that you a whore and he hates you. You quietly complete your blowjob and, swallowing the man's cum, get up and start walking away.`);
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).boy1 ?? 0));
    qspCall(st, 'arousal', 'bj', 5, 'unknown', 'dom');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'svidboy_home', 'svidboy_home_arg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBillsvid(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * 2) + 1));
  (s as any).svidboy_home = 'city_mall';
  qspCall(s, 'stat', '');
  (s as any).picrand = (Math.floor(Math.random() * 2) + 51);
  scene.img(`images/characters/city/boyfriend/sex/event/bil${((s as any).picrand ?? '')}.jpg`);
  // TODO-QSP: dynamic text: <<$npcdesc>> pays for a table at a booth, and you go to play.
  scene.text(`${((s as any).npcdesc ?? '')} pays for a table at a booth, and you go to play.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Play', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    qspCall(st, 'stat', '');
    scene.img(`images/characters/city/boyfriend/sex/event/bil1${((st as any).picrand ?? '')}.jpg`);
    // TODO-QSP: dynamic text: During the game, <<$npcdesc>> moves behind you, his hands gliding over your hips...
    scene.text(`During the game, ${((st as any).npcdesc ?? '')} moves behind you, his hands gliding over your hips and lips drawn to your neck.`);
    qspCall(st, 'willpower', 'foreplay', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Not here', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Not here', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'foreplay', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    // TODO-QSP: $ImageNeededPlacholder
    scene.text('You remove his hands with the words, "Not here."');
    // TODO-QSP: dynamic text: When your time is up, <<$npcdesc>> says that he has to run and leaves.
    scene.text(`When your time is up, ${((st as any).npcdesc ?? '')} says that he has to run and leaves.`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'svidboy_home', 'svidboy_home_arg');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Let him continue', handler: (st: GameState) => {
    scene.img(`images/characters/city/boyfriend/sex/event/bil2${((st as any).picrand ?? '')}.jpg`);
    scene.text('You lay down the cue on the table and relax, allowing him to continue to caress your body, kissing it down lower and lower.');
    qspCall(st, 'willpower', 'cuni', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Stop', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Stop', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'cuni', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    // TODO-QSP: $ImageNeededPlacholder
    scene.text('You remove his hands with the words, "Not here."');
    // TODO-QSP: dynamic text: When your time is up, <<$npcdesc>> says that he has to run and leaves.
    scene.text(`When your time is up, ${((st as any).npcdesc ?? '')} says that he has to run and leaves.`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'svidboy_home', 'svidboy_home_arg');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Let him continue', handler: (st: GameState) => {
    (st as any).svidboysex = 1;
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), (Math.floor(Math.random() * 2) + 2));
    qspGoto(st, 'sex', 'kuni');
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterKafesvid(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'stat', '');
  if (((s as any).home ?? 0)?.['town'] === 'pavlovsk') {
    (s as any).svidboy_home = 'pav_commercial';
  } else {
    (s as any).svidboy_home = 'city_center';
  }
  scene.img('images/characters/city/boyfriend/sex/event/kafe0.jpg');
  // TODO-QSP: dynamic text: You and <<$npcdesc>> go into a small cafe. It seems that it does not enjoy popul...
  scene.text(`You and ${((s as any).npcdesc ?? '')} go into a small cafe. It seems that it does not enjoy popularity, as you are almost the only customers. You sit at a table in one of the private booths.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for the order', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    scene.img('images/characters/city/boyfriend/sex/event/kafe1.jpg');
    // TODO-QSP: dynamic text: Once you have made your order, <<$npcdesc>> begins to pester you, kissing you an...
    scene.text(`Once you have made your order, ${((st as any).npcdesc ?? '')} begins to pester you, kissing you and sliding his hands over your body, one moment caressing your chest, then another squeezing your buttocks.`);
    qspCall(st, 'willpower', 'foreplay', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Not here', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Not here', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'foreplay', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/boyfriend/sex/event/kafe0.jpg');
    scene.text('You remove his hands with the words, "Not here."');
    // TODO-QSP: dynamic text: After some time, <<$npcdesc>> says that he has to run and leaves.
    scene.text(`After some time, ${((st as any).npcdesc ?? '')} says that he has to run and leaves.`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'svidboy_home', 'svidboy_home_arg');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Let him continue', handler: (st: GameState) => {
    scene.img('images/characters/city/boyfriend/sex/event/kafe2.jpg');
    // TODO-QSP: dynamic text: Soon, you are almost without clothes, and <<$npcdesc>> is kissing your underbell...
    scene.text(`Soon, you are almost without clothes, and ${((st as any).npcdesc ?? '')} is kissing your underbelly, dropping to the pubis.`);
    qspCall(st, 'willpower', 'cuni', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Stop', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'cuni', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/boyfriend/sex/event/kafe0.jpg');
    scene.text('At the last second, you come to your senses and realize that you are in a cafe. "No, we have done enough in this cafe, patience until we get home," you insist, pushing him away.');
    // TODO-QSP: dynamic text: But soon, <<$npcdesc>> says that he has to run and leaves.
    scene.text(`But soon, ${((st as any).npcdesc ?? '')} says that he has to run and leaves.`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'svidboy_home', 'svidboy_home_arg');
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Stop', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    }
    scene.actions([
      { label: 'Let him continue', handler: (st: GameState) => {
    (st as any).svidboysex = 1;
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), (Math.floor(Math.random() * 2) + 2));
    (st as any).picrand = 53;
    qspGoto(st, 'sex', 'kuni');
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).svidboy_home_arg = '';
  const arg = s.locArg;
  switch (arg) {
    case 'kinosvid':
      enterKinosvid(s, scene);
      break;
    case 'parksvid':
      enterParksvid(s, scene);
      break;
    case 'parksvid2':
      enterParksvid2(s, scene);
      break;
    case 'parksvid21':
      enterParksvid21(s, scene);
      break;
    case 'parksvid22':
      enterParksvid22(s, scene);
      break;
    case 'billsvid':
      enterBillsvid(s, scene);
      break;
    case 'kafesvid':
      enterKafesvid(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const svidboy: LocationDef = {
  name: 'svidboy',
  title: '<center><b>Cinema</b></center>',
  region: 'other',
  enter: enter,
};
