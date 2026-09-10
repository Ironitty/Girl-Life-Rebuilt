import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'npcgeneratec', '', 0, '', Math.floor(Math.random() * 38) + 18, 4);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
  (s as any).katjaQW['drinks'] = ((s as any).katjaQW['drinks'] ?? 0) + (1);
  qspCall(s, 'drugs', 'alcohol', 'wine', 1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/drinking_wine.jpg');
  // TODO-QSP: dynamic text: As you walk through the streets, the guy introduces himself as <<$npc_nickname[$...
  scene.text(`As you walk through the streets, the guy introduces himself as ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} and you and Katja tell him your names.`);
  scene.text('It doesn\'t take long before you arrive at his building and he shows you up to his rather nice apartment.');
  // TODO-QSP: dynamic text: "Let's get a glass of wine and get comfortable," he says as he gets three glasse...
  scene.text('"Let\'s get a glass of wine and get comfortable," he says as he gets three glasses and a bottle of white wine from his fridge. Meanwhile, you and Katja\'+iif(temper <20, \' take off your coats and \', \' \')+\'sit down.');
  if (((s as any).katjaQW ?? 0)?.['QWstage'] === 5) {
    // TODO-QSP: dynamic text: You're soon relaxing and having some wine while getting to know each other a lit...
    scene.text(`You're soon relaxing and having some wine while getting to know each other a little. ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]}'s free hand gently caresses both your and Katja's thighs from time to time.`);
    scene.text('It\'s clear that Katja is nervous; each time he touches her, she jumps slightly, but she doesn\'t try to stop him.');
    scene.text('He takes her reaction as a sign not to go any further, so he simply continues to caress her thighs while she keeps squirming.');
    scene.text('You\'ll have to do something if this is going to lead anywhere.');
    scene.actions([
      { label: 'Make out with <<$npc_nickname[$npcID]>>', goto: ['katja_city_sex', 'first_time'] },
    ]);
  } else {
    if ((!(Math.floor(Math.random() * 5) + 0))) {
      scene.text('When he comes back, he has a small bag of white powder. "I brought us this to make things more fun," he says while holding out the bag of cocaine.');
      if (((s as any).katjaQW ?? 0)?.['coke_stage'] === -1) {
        scene.actions([
          { label: 'Watch Katja\'s reaction', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) - (20);
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"No. I don\'t want any of that. And if you use it, I\'m out of here," Katja says very harshly.');
    // TODO-QSP: dynamic text: "Okay, Okay. I'll put it away," <<$npc_nickname[$npcID]>> says and leaves the ro...
    scene.text(`"Okay, Okay. I'll put it away," ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} says and leaves the room to hide his drugs.`);
    // TODO-QSP: dynamic text: Katja has relaxed by the time he comes back, and you start to enjoy your wine wh...
    scene.text(`Katja has relaxed by the time he comes back, and you start to enjoy your wine while making small talk. ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]}'s free hand gently caresses you and Katja's thighs from time to time. Katja returns his touch and you do the same.`);
    if (qspFunc(s, 'katja_procedural', 'willing_to_be_naughty') > 80  &&  ((s as any).katjaQW ?? 0)?.['horny'] >= (Math.floor(Math.random() * 31) + 70)) {
      scene.text('"Why don\'t you show us your bedroom?" Katja asks after a few minutes.');
      // TODO-QSP: dynamic text: <<$npc_nickname[$npcID]>> quickly gets up. "Right this way."
      scene.text(`${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} quickly gets up. "Right this way."`);
      scene.actions([
        { label: 'Go to his bedroom', goto: ['katja_city_sex', 'one_guy_start'] },
      ]);
    } else {
      scene.text('After a few minutes, you think that it\'s time to speed things up. "Maybe you can show us the rest of your apartment?" you ask in your most seductive voice.');
      scene.text('He gets your intent. "Of course. Let\'s start with the bedroom," he says as he shows you the way.');
      scene.actions([
        { label: 'Go to his bedroom', goto: ['katja_city_sex', 'one_guy_start'] },
      ]);
    }
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Let him take his drugs', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/drugs_watching_man.jpg');
    scene.text('"Go ahead if you want," you tell him.');
    if (((s as any).katjaQW ?? 0)?.['coke_stage'] === 0) {
      scene.text('Katja looks confused at first. She\'s not really sure what it is at first, but as he pours some of the powder onto the table and makes several lines, she seems to realize what\'s going on and starts to look skeptical.');
      scene.text('"I\'ll go first, if you ladies don\'t mind," he says. As he sniffs the first line, Katja\'s watches him with a curious gaze. Once he finished, he looks around. "Who\'s next?" he asks as he holds out the tube he used.');
      qspCall(s, 'willpower', 'drugs', 'resist');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Refuse', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'willpower', 'pay', 'force');
    qspCall(s, 'stat', '');
    scene.text('"Thanks, but that\'s not for me," you say and Katja quickly and vehemently shakes her head when he tries to hand her the tube.');
    scene.text('"Well, more for me then," he says and does a few more lines before packing the drugs away.');
    scene.actions([
      { label: 'Continue talking', goto: ['katja_city_sex', 'after_drugs'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Do some lines', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'drugs', 'cocaine', 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/drugs/cocaine.jpg');
    scene.text('You take the tube and snort two lines as Katja watches with wide-open eyes.');
    // TODO-QSP: dynamic text: After a few seconds, it hits you and you feel the full effect of the drug. <<$np...
    scene.text(`After a few seconds, it hits you and you feel the full effect of the drug. ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} takes the tube from you and tries to hand it to Katja, but she doesn't take it. "I've never done this before…"`);
    if (qspFunc(s, 'katja_procedural', 'willing_to_be_naughty') < 85) {
      qspCall(s, 'willpower', 'drugs', 'force', 'hard');
    } else {
      qspCall(s, 'willpower', 'drugs', 'force');
    }
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Convince her to try it [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Convince her to try it', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 8;
    qspCall(s, 'willpower', 'pay', 'force');
    qspCall(s, 'katja_procedural', 'take_cocaine');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/katja_cocaine2.jpg');
    scene.text('"Come on, just try it. It won\'t hurt you," you say, but she still looks skeptical.');
    // TODO-QSP: dynamic text: "I don't know, <<$pcs_nickname>>… I'm not sure it's a good idea. I don't think i...
    scene.text(`"I don't know, ${((s as any).pcs_nickname ?? 0)}… I'm not sure it's a good idea. I don't think it's for me," she replies.`);
    scene.text('"You won\'t know unless you try it," you continue.');
    scene.text('"Why should I?" she asks.');
    scene.text('"Because it feels great? You can\'t say it\'s not for you until you actually know how it feels."');
    // TODO-QSP: dynamic text: She finally relents. With a shaking hand, she takes the tube and places it at he...
    scene.text(`She finally relents. With a shaking hand, she takes the tube and places it at her nostril before slowly bending down to the line of cocaine that ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} prepared for her.`);
    scene.text('She slowly starts sniffing it, but jerks her head back when the powder starts to itch in her nose. "Do it faster. All at once!" you tell her, and she gets down again, still shaking and gets ready.');
    scene.text('This time, she snorts it all in on go and raises her head from the table. It\'s clear that the powder itches her nostrils and she looks like she\'s about to sneeze. "Don\'t sneeze! Keep it in!" you tell her and she moves her hand to her nose to prevent it from coming out.');
    scene.text('After a moment, her discomfort resides and she starts to talk. "I don\'t feel anything, except itching in my nose. I do-" She stops mid-sentence and her eyes become wide open. "Wow!" is all she can say.');
    scene.text('"See? I told you it would feel great!" you say.');
    scene.text('She just replies with a dreamy stare before she starts giggling, which turns into a laugh that lasts for some time.');
    scene.actions([
      { label: 'Continue talking', goto: ['katja_city_sex', 'after_drugs'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Don\'t push her', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    // TODO-QSP: dynamic text: "It's fine if you don't want to do it," you say. She seems relieved and <<$npc_n...
    scene.text(`"It's fine if you don't want to do it," you say. She seems relieved and ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} doesn't say anything as he cleans up the drugs.`);
    scene.actions([
      { label: 'Continue talking', goto: ['katja_city_sex', 'after_drugs'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.text('Katja looks skeptical, but also a little curious, as he pours some of the powder onto the table and makes several lines.');
      scene.text('"I\'ll go first, if you ladies don\'t mind," he says.');
      scene.text('After he finishes, he looks around. "Who\'s next?" he asks. He holds out the tube he used to take the cocaine, with Katja looking like she wants to say no.');
      qspCall(s, 'willpower', 'drugs', 'resist');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Refuse', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'willpower', 'drugs', 'resist');
    qspCall(s, 'willpower', 'pay', 'force');
    qspCall(s, 'stat', '');
    scene.text('"Thanks, but that\'s not for me," you say, and Katja also quickly shakes her head when he tries to hand her the tube.');
    scene.text('"Well, more for me then," he says and does a few more of the lines before packing the drugs away.');
    scene.actions([
      { label: 'Continue talking', goto: ['katja_city_sex', 'after_drugs'] },
    ]);
  } },
        ]);
      }
      if (((s as any).katjaQW ?? 0)?.['coke_stage'] === 2) {
        qspCall(s, 'willpower', 'drugs', 'force', 'easy');
      } else {
        qspCall(s, 'willpower', 'drugs', 'force');
      }
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Convince Katja to do some lines with you [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Convince Katja to do some lines with you', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 8;
    if (((s as any).katjaQW ?? 0)?.['coke_stage'] === 2) {
      qspCall(s, 'willpower', 'drugs', 'force', 'easy');
    } else {
      qspCall(s, 'willpower', 'drugs', 'force');
    }
    qspCall(s, 'willpower', 'pay', 'force');
    qspCall(s, 'drugs', 'cocaine', 1);
    qspCall(s, 'stat', '');
    qspCall(s, 'katja_procedural', 'take_cocaine');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/joint_coke.jpg');
    // TODO-QSP: dynamic text: "Come on, let's do it together," you say as you take the tube from <<$npc_nickna...
    scene.text(`"Come on, let's do it together," you say as you take the tube from ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]}.`);
    // TODO-QSP: dynamic text: She still looks skeptical. "I don't know, <<$pcs_nickname>>… I'm not sure it's a...
    scene.text(`She still looks skeptical. "I don't know, ${((s as any).pcs_nickname ?? 0)}… I'm not sure it's a good idea," she replies.`);
    scene.text('"You liked it last time! It\'ll be fine this time too," you continue.');
    // TODO-QSP: dynamic text: "I'm not sure. '+iif(katjaQW['coke_stage'] = 2, 'I don't want it to become a hab...
    scene.text('"I\'m not sure. \'+iif(katjaQW[\'coke_stage\'] = 2, \'I don\'t want it to become a habit\', \'I think one time was enough for me\')+\'," she says.');
    scene.text('"Don\'t be such a bore! You know you\'ll love it," you say.');
    scene.text('She finally relents. "Fine, let\'s do it."');
    // TODO-QSP: dynamic text: <<$npc_nickname[$npcID]>> has already produced another tube and hands it to Katj...
    scene.text(`${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} has already produced another tube and hands it to Katja, who takes it with unsteady hands before you both lower your heads to the table.`);
    // TODO-QSP: 'You sniff your lines at the same time. Katja '+iif(katjaQW['coke_stage'] = 2, 'has gotten used to i...
    scene.text('After a moment, it hits you both. You feel wonderful while Katja just sits there with wide-open eyes before she starts giggling, which turns into a laugh that lasts for some time.');
    scene.actions([
      { label: 'Continue talking', goto: ['katja_city_sex', 'after_drugs'] },
    ]);
  } },
        ]);
      }
      if (((s as any).katjaQW ?? 0)?.['coke_stage'] < 5) {
        scene.text('Katja looks a little excited as he pours some of the powder on the table and makes several lines.');
        scene.text('"I\'ll go first, if you ladies don\'t mind," he says.');
        scene.text('After he finishes, he looks around. "Who\'s next?" he asks and holds out the tube he used to take the cocaine. Katja looks like she\'s ready.');
        qspCall(s, 'willpower', 'drugs', 'resist');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Refuse', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'willpower', 'drugs', 'resist');
    qspCall(s, 'willpower', 'pay', 'force');
    qspCall(s, 'stat', '');
    scene.text('"Thanks, but that\'s not for me," you say.');
    scene.text('"How about you then?" he asks Katja.');
    // TODO-QSP: '"Okay. Make some lines for me," she replies'+iif(katjaQW['coke_stage'] = 3, ' hesitantly.', '.')
    if (((s as any).katjaQW ?? 0)?.['coke_stage'] === 4) {
      qspCall(s, 'willpower', 'drugs', 'force', 'easy');
    }
    if (((s as any).katjaQW ?? 0)?.['coke_stage'] === 3) {
      (s as any).will_cost = 0;
    }
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Convince Katja not to do it [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Convince her not to do it', handler: (st: GameState) => {
    if (((s as any).katjaQW ?? 0)?.['coke_stage'] === 4) {
      qspCall(s, 'willpower', 'pay', 'force');
      qspCall(s, 'npc_relationship', 'modify', 'A14', 'dislike');
    }
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"I don\'t think it\'s a good idea, Katja," you say.');
    // TODO-QSP: '"Why not? Never hurt me before," she '+iif(katjaQW['coke_stage'] = 3, 'replies.', 'snaps at you.')
    scene.text('"No, but it might if you continue doing it this often," you respond.');
    if (((s as any).katjaQW ?? 0)?.['coke_stage'] === 3) {
      scene.text('She looks at you. "Do you think I take too much?"');
    } else {
      scene.text('She scowls at you. "Are you implying I can\'t control myself?"');
    }
    scene.text('"I\'m just saying that maybe we should relax a little. Right now isn\'t the time for this," you say.');
    // TODO-QSP: 'She thinks about it for a moment. '+iif(katjaQW['coke_stage'] = 3, '"Okay. Not tonight," she says.'...
    // TODO-QSP: dynamic text: "Well, more for me then," <<$npc_nickname[$npcID]>> says and does a few more lin...
    scene.text(`"Well, more for me then," ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} says and does a few more lines before packing the drugs away.`);
    scene.actions([
      { label: 'Continue talking', goto: ['katja_city_sex', 'after_drugs'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Watch Katja do her lines', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'katja_procedural', 'take_cocaine');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/katja_cocaine2.jpg');
    // TODO-QSP: dynamic text: You watch as Katja takes the tube, puts one end at her nose and bends down to th...
    scene.text(`You watch as Katja takes the tube, puts one end at her nose and bends down to the start of the line that ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} has prepared for her.`);
    scene.text('She sniffs the line with no problem and just sits up waiting for the the drugs to hit her.');
    scene.text('After a moment, it does and she just sits there with wide-open eyes before she starts giggling, which turns into a laugh that lasts for some time.');
    scene.actions([
      { label: 'Continue talking', goto: ['katja_city_sex', 'after_drugs'] },
    ]);
  } },
    ]);
  } },
          ]);
        }
        (s as any).minut = ((s as any).minut ?? 0) + 8;
        qspCall(s, 'drugs', 'cocaine', 1);
        qspCall(s, 'stat', '');
        qspCall(s, 'katja_procedural', 'take_cocaine');
        qspCall(s, 'stat', '');
        scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/joint_coke.jpg');
        // TODO-QSP: dynamic text: "Come on, let's do it together," you say as you take the tube from <<$npc_nickna...
        scene.text(`"Come on, let's do it together," you say as you take the tube from ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]}.`);
        // TODO-QSP: dynamic text: She agrees and <<$npc_nickname[$npcID]>> hands her another tube, which she happi...
        scene.text(`She agrees and ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} hands her another tube, which she happily takes.`);
        scene.text('You put your tubes to your nostrils and lower your heads to the table to sniff your line. Katja does it with great enthusiasm.');
        scene.text('After a moment, it hits you both. You feel wonderful while Katja just sits there with wide-open eyes. She starts giggling, which turns into a laugh that lasts for some time.');
        scene.actions([
          { label: 'Do some lines with Katja [+$func(\'willpower\', \'get_willcost_string\'...]' }, // TODO-QSP: empty action body
          { label: 'Continue talking', goto: ['katja_city_sex', 'after_drugs'] },
        ]);
      }
      scene.text('Katja looks excited as he pours some of the powder onto the table and makes several lines.');
      scene.text('"I\'ll go first, if you ladies don\'t mind," he says.');
      scene.text('"As long as you leave some for us," Katja responds.');
      scene.text('After he finishes, he looks around. "Who\'s next?" he asks and holds out the tube he used to take the cocaine.');
      // TODO-QSP: dynamic text: "We're going to do it together. Right, <<$pcs_nickname>>?" Katja asks with great...
      scene.text(`"We're going to do it together. Right, ${((s as any).pcs_nickname ?? 0)}?" Katja asks with great enthusiasm.`);
      qspCall(s, 'willpower', 'drugs', 'resist');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Refuse', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'willpower', 'drugs', 'resist');
    qspCall(s, 'willpower', 'pay', 'force');
    qspCall(s, 'stat', '');
    scene.text('"Thanks, but that\'s not for me," you reply.');
    scene.text('"So just you then?" he asks Katja.');
    // TODO-QSP: dynamic text: "Yes. Seems like <<$pcs_nickname>> is being boring tonight," she says.
    scene.text(`"Yes. Seems like ${((s as any).pcs_nickname ?? 0)} is being boring tonight," she says.`);
    if (((s as any).katjaQW ?? 0)?.['coke_stage'] === 5) {
      qspCall(s, 'willpower', 'drugs', 'force', 'easy');
    } else {
      qspCall(s, 'willpower', 'drugs', 'force');
      if (((s as any).katjaQW ?? 0)?.['coke_stage'] === 7) {
        qspCall(s, 'willpower', 'drugs', 'force', 'hard');
      } else {
        scene.text('It\'s clear that if you want Katja to stop, you would need to forcefully drag her away. You\'re not exactly sure how that will go down when you\'re in a stranger\'s apartment.');
      }
      if (((s as any).katjaQW ?? 0)?.['coke_stage'] < 8) {
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Convince her not to do it [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Convince her not to do it', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'force');
    if (((s as any).katjaQW ?? 0)?.['coke_stage'] === 5) {
      qspCall(s, 'npc_relationship', 'modify', 'A14', 'dislike');
    } else {
      qspCall(s, 'npc_relationship', 'modify', 'A14', 'hate');
      if (((s as any).katjaQW ?? 0)?.['coke_stage'] === 7) {
        qspCall(s, 'npc_relationship', 'modify', 'A14', 'loathe');
      }
      qspCall(s, 'stat', '');
      scene.img('images/characters/shared/headshots_main/big14.jpg');
      scene.text('"I don\'t think it\'s a good idea, Katja," you say.');
      scene.text('"Why are you trying to ruin my fun? I know how to handle it!" she snaps at you.');
      scene.text('"No, I don\'t think you do," you respond.');
      scene.text('She looks at you angrily. "Are you saying I can\'t control myself?"');
      scene.text('"Yes. I think you\'re overdoing it."');
      scene.text('"You aren\'t my mom!" she scowls.');
      scene.text('"No, but I\'m sure she would be harsher with you than I am!" you answer.');
      scene.text('She sits silently thinking about it for a moment. "Fine. You get your way this time," she says, clearly not happy about it.');
      // TODO-QSP: dynamic text: "Well, more for me then," <<$npc_nickname[$npcID]>> says and does a few more lin...
      scene.text(`"Well, more for me then," ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} says and does a few more lines before packing the drugs away. Katja looks longingly at them as he does.`);
      scene.actions([
        { label: 'Continue talking', goto: ['katja_city_sex', 'after_drugs'] },
      ]);
    }
  } },
          ]);
        }
        scene.actions([
          { label: 'Watch Katja do her lines', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'katja_procedural', 'take_cocaine');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/katja_cocaine2.jpg');
    // TODO-QSP: dynamic text: You watch as Katja takes the tube, puts one end at her nose and bends down so th...
    scene.text(`You watch as Katja takes the tube, puts one end at her nose and bends down so the other end is at the start of the line that ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} has prepared for her.`);
    scene.text('She sniffs the line like a pro and sits up, waiting for the drugs to hit her.');
    scene.text('After a moment, it does and she sits there with wide-open eyes before she starts giggling, which turns into a laugh that lasts for some time.');
    scene.actions([
      { label: 'Continue talking', goto: ['katja_city_sex', 'after_drugs'] },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Do some lines with Katja', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 8;
    qspCall(s, 'drugs', 'cocaine', 1);
    qspCall(s, 'stat', '');
    qspCall(s, 'katja_procedural', 'take_cocaine');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/joint_coke.jpg');
    scene.text('"Okay, let\'s do it together," you say.');
    // TODO-QSP: dynamic text: "Yes! That's the spirit," she replies. She's already taken the tube from <<$npc_...
    scene.text(`"Yes! That's the spirit," she replies. She's already taken the tube from ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]}, so he quickly produces another one and hands it to you.`);
    scene.text('You both put your tubes to your nostrils and lower your heads to the table to sniff your lines. Katja does it like it\'s something she does all the time.');
    scene.text('After a moment, it hits you both. You feel wonderful while Katja just sits there with wide-open eyes before she starts giggling, which turns into a laugh that lasts for some time.');
    scene.actions([
      { label: 'Continue talking', goto: ['katja_city_sex', 'after_drugs'] },
    ]);
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Do some lines line, but don\'t push Katja', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'drugs', 'cocaine', 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/drugs/cocaine.jpg');
    scene.text('"I\'ll take some, but I don\'t think my friend will," you say as you take the tube and Katja shakes her head. You put one end of the tube to your nose and the other to the first of the lines he has prepared for you.');
    // TODO-QSP: dynamic text: You snort the first line and then the second as Katja watches with wide-open eye...
    scene.text(`You snort the first line and then the second as Katja watches with wide-open eyes. After a short moment, it hits you and you feel the full effect of the drug as ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} takes the tube and cleans up the drugs.`);
    scene.actions([
      { label: 'Continue talking', goto: ['katja_city_sex', 'after_drugs'] },
    ]);
  } },
      ]);
    }
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    // TODO-QSP: dynamic text: You're soon relaxing and having some wine while getting to know each other a lit...
    scene.text(`You're soon relaxing and having some wine while getting to know each other a little. ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]}'s free hand gently caresses your and Katja's thighs on occasion. Katja returns his touch and you do the same.`);
    if (qspFunc(s, 'katja_procedural', 'willing_to_be_naughty') > 80  &&  ((s as any).katjaQW ?? 0)?.['horny'] >= (Math.floor(Math.random() * 31) + 70)) {
      scene.text('"Why don\'t you show us your bedroom?" Katja asks after a few minutes.');
      // TODO-QSP: dynamic text: <<$npc_nickname[$npcID]>> quickly gets up. "Right this way."
      scene.text(`${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} quickly gets up. "Right this way."`);
      scene.actions([
        { label: 'Go to his bedroom', goto: ['katja_city_sex', 'one_guy_start'] },
      ]);
    } else {
      scene.text('After a few minutes, you think that it\'s time to advance things. "Maybe you should show us the rest of your apartment?" you ask in your most seductive voice.');
      scene.text('He gets your intention. "Of course. Let\'s start with the bedroom," he says as he shows you the way.');
      scene.actions([
        { label: 'Go to his bedroom', goto: ['katja_city_sex', 'one_guy_start'] },
      ]);
    }
  } },
        ]);
      }
    }
  }
  scene.build();
}

export const katja_city_sex: LocationDef = {
  name: 'katja_city_sex',
  title: 'It doesn\'t take long before you arrive at his building and h',
  region: 'other',
  locationType: 'public_outdoors',
  description: ['It doesn\'t take long before you arrive at his building and he shows you up to his rather nice apartment.'],
  enter: enter,
};
