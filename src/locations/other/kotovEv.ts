import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${((s as any).npc_firstname ?? 0)?.['A9']} ${((s as any).npc_lastname ?? 0)?.['A9']}</b></center>`);
  scene.img('images/characters/shared/headshots_main/big9.jpg');
  if (((s as any).kotovLoveQW ?? 0) > 0  &&  ((s as any).fame ?? 0)?.['pav_slut'] > 200  &&  ((s as any).kotovsluttalk ?? 0) !== ((s as any).daystart ?? 0)) {
    // TODO-QSP: dynamic text: Vitek scowls at you and tells you: "<<$pcs_nickname>>, what is this shit I hear?...
    scene.text(`Vitek scowls at you and tells you: "${((s as any).pcs_nickname ?? 0)}, what is this shit I hear? I thought you were my girl, but then I hear people talking about you being a ${((s as any).gnikname ?? 0)}! Apparently the whole town knows it, too… all the guys were laughing at me! What do you have to say for yourself, you bitch!?"`);
    qspCall(s, 'willpower', 'misc', 'self', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'It\'s all lies, babe! [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'It\'s all lies, babe!', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    if (((s as any).fame ?? 0)?.['pav_sex'] > 75) {
      qspCall(s, 'fame', 'pav', 'sex', (-75));
    }
    if (((s as any).fame ?? 0)?.['pav_prostitute'] > 75) {
      qspCall(s, 'fame', 'pav', 'prostitute', (-75));
    }
    (s as any).kotovsluttalk = ((s as any).daystart ?? 0);
    qspCall(s, 'stat', '');
    scene.text('What he heard is true, but there is absolutely no way you\'re going to tell him that. Especially not in his current state.');
    scene.text('You soothingly put your hand on his arm and softly tell him: "No way, babe! I\'m with you… you know I would never do something like that, right? I bet those others are just jealous, trying to break us up!"');
    scene.text('He frowns while he thinks it over, but your sweet talking seems to have an effect on him. He\'s not as angry any more. In an attempt to win him over again, you whisper: "Come on Vitek, relax… we can go somewhere a bit more quiet later and I\'ll make you feel better, okay?"');
    scene.text('Vitek clenches his fist, and angrily says: "Those bastards! I\'ll knock their teeth out, if I hear anyone talk about you like that again! You hear me!?"');
    // TODO-QSP: dynamic text: Then he puts his hand on your shoulder in an endearing way (for his doing, anywa...
    scene.text(`Then he puts his hand on your shoulder in an endearing way (for his doing, anyway) and promises you: "Don't worry ${((s as any).pcs_nickname ?? 0)}, I will make sure those rumors stop right now. I'll see you later."`);
    scene.text('He kisses your cheek and leaves you alone, and almost immediately afterwards you notice that people treat you differently. No one dares to make remarks about your reputation any more and some even look scared when you walk past, asking you to forgive them. You nearly can\'t believe it, but Vitek actually intimidated everyone to the point where no one dares to bring it up any more.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      ]);
    }
    return;
    scene.actions([
      { label: '"You have sex with others too!"', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'set', 'A9', 0);
    (s as any).kotovLoveQW = (-1);
    qspCall(s, 'pain', '', 5, 'cheeks', 'slap');
    qspCall(s, 'stat', '');
    scene.text('Wait, what? Does Vitek really think he can judge you, when he in fact is even worse? You know his history, and how he usually treats girls…');
    scene.text('You yell at him: "You\'re no better, Vitek! How many girls have you fucked already, huh?"');
    scene.text('Seconds later you find yourself lying on the floor, and slowly sit up and carefully touch your throbbing head. You feel very dazed, and Vitek looks down at you furiously. You\'re not exactly sure what happened, but from the burning sensation on your cheek you can only assume that he slapped you. He slapped you so hard that you fell down and nearly lost consciousness for a while!');
    scene.text('"Get out of here, whore!" he yells at you, not showing any sign of compassion or regret. "We\'re done… don\'t you ever talk to me again, you fucking slut!"');
    scene.actions([
      { label: 'Leave him', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).loc ?? 0) === 'gdksport') {
    if ((!((s as any).kotovKnowSport ?? 0))) {
      // TODO-QSP: dynamic text: Vitek smiles when he sees you and puts his arms around you, hugging you tightly ...
      scene.text(`Vitek smiles when he sees you and puts his arms around you, hugging you tightly while he gives you a kiss. Then he says: "Hi ${((s as any).pcs_nickname ?? 0)}, what brings you here?"`);
      scene.actions([
        { label: '"What are you doing here?"', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text(`<center><b>${((s as any).npc_firstname ?? 0)?.['A9']} ${((s as any).npc_lastname ?? 0)?.['A9']}</b></center>`);
    scene.img('images/characters/shared/headshots_main/big9.jpg');
    scene.text('"Oh you know… just going to my training," you tell him. "I never expected you in this place, what are you doing here?"');
    scene.text('Vitek snickers: "Are you serious? I\'ve been boxing since I was 8! Last year I got second place in the regional championships!"');
    scene.actions([
      { label: '"But you drink and smoke!"', handler: (st: GameState) => {
    (s as any).kotovKnowSport = 1;
    qspCall(s, 'stat', '');
    scene.text(`<center><b>${((s as any).npc_firstname ?? 0)?.['A9']} ${((s as any).npc_lastname ?? 0)?.['A9']}</b></center>`);
    scene.img('images/characters/shared/headshots_main/big9.jpg');
    scene.text('He smirks when he sees the surprised look on your face. You ask: "But… you smoke and drink so much! How do you combine that with sports at all?"');
    scene.text('He laughs and tells you: "Ha! Coach says I have talent. My physical build is great for a boxer, and no one hits harder than me! I can tolerate alcohol just fine, I think I have that from my dad. Sure, he died of liver cirrhosis eventually, but up until then he was great!"');
    scene.text('"Besides, I\'m already as good as I\'m ever going to be," he continues. "You know, in that championship match, I actually beat the shit out of the champion. I had him down on the mat twice, but they still gave him the win! They said he won \'on points\'… fucking cowards, what does that even mean? They were afraid to send a real fighter to the national championships, so they made up a bunch of rules to have that pansy win. Anyway, training is starting soon, I have to get going!"');
    scene.actions([
      { label: 'Let him go to his training', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: Vitek smiles when he sees you and puts his arms around you, hugging you tightly ...
      scene.text(`Vitek smiles when he sees you and puts his arms around you, hugging you tightly while he gives you a kiss. Then he says: "Hi ${((s as any).pcs_nickname ?? 0)}. It's nice seeing you, but the training starts soon!"`);
      scene.actions([
        { label: 'Let him go to his training', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    }
  } else {
    // TODO-QSP: dynamic text: Vitek sees you walk by, and waves his hand: "Hey <<$pcs_nickname>>! Come on, joi...
    scene.text(`Vitek sees you walk by, and waves his hand: "Hey ${((s as any).pcs_nickname ?? 0)}! Come on, join me!"`);
    qspCall(s, 'willpower', 'misc', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'No time right now, sorry! [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'No time right now, sorry!', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    }
    scene.actions([
      { label: 'Walk over to him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big9.jpg');
    // TODO-QSP: dynamic text: Vitek pours some beer into a plastic cup and offers it to you: "Here, <<$pcs_nic...
    scene.text(`Vitek pours some beer into a plastic cup and offers it to you: "Here, ${((s as any).pcs_nickname ?? 0)}. Let's have some beers together!"`);
    qspCall(s, 'willpower', 'misc', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'No time right now, sorry! [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'No time right now, sorry!', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    }
    scene.actions([
      { label: 'Drink beer with him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'drugs', 'alcohol', 'beer');
    qspCall(s, 'stat', '');
    scene.text('You smile and sit down with him, drinking the beer while he tells you stories of his youth. He says: "You know, when I first moved here, some kids tried to bully me. I bet they wish they could undo that with a time machine… they still run off whenever they see me, haha!"');
    scene.actions([
      { label: '"I have to get going!"', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big9.jpg');
    // TODO-QSP: dynamic text: You enjoyed your time with Vitek, but you have to get on with your day. Vitek is...
    scene.text(`You enjoyed your time with Vitek, but you have to get on with your day. Vitek is a bit disappointed to see you leave and hugs you tightly, while kissing you on your lips. You kiss him back, and can't help but feel a bit more aroused when he lets you go. He smiles at you and says: "${((s as any).pcs_nickname ?? 0)}, babe… want to go to my place for a while?"`);
    qspCall(s, 'willpower', 'misc', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'No time right now, sorry! [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'No time right now, sorry!', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    }
    scene.actions([
      { label: 'Go to Vitek\'s house with him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big9.jpg');
    scene.text('You agree, and you walk to his house while he tells you some more stories. After what feels like no time has passed at all, you approach a rather decrepit house, there is some junk piled up in front of it. He opens the door and guides you into his house. It\'s in rather poor shape, and there are lots of empty bottles littered on the floor of pretty much every room you can see. The room he guides you to has clothes lying in crumpled heaps on the floor everywhere as well.');
    scene.actions([
      { label: 'Continue', goto: ['kotovSex', ''] },
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
  scene.build();
}

export const kotovEv: LocationDef = {
  name: 'kotovEv',
  title: '<<$npc_firstname[\'A9\']>> <<$npc_lastname[\'A9\']>>',
  region: 'other',
  enter: enter,
};
