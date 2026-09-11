import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterWalkingHomeWithAGuy(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'npcgeneratec', '', 0, '', Math.floor(Math.random() * 38) + 18, 4);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
  ((s as any).katjaQW ?? {})['drinks'] = (((s as any).katjaQW ?? {})['drinks'] ?? 0) + (1);
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
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) - (20);
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
          { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
        { label: 'Convince her to try it [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
      if (((s as any).katjaQW ?? 0)?.['coke_stage'] < 3) {
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
            { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
            { label: 'Convince Katja to do some lines with you [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
      } else {
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
              { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
        { label: 'Convince her not to do it [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
          scene.actions([
            { label: 'Do some lines with Katja [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
      { label: 'Continue talking', goto: ['katja_city_sex', 'after_drugs'] },
    ]);
  } },
          ]);
        } else {
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
              { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
      if (((s as any).katjaQW ?? 0)?.['coke_stage'] === 6) {
        qspCall(s, 'willpower', 'drugs', 'force');
      } else {
        if (((s as any).katjaQW ?? 0)?.['coke_stage'] === 7) {
          qspCall(s, 'willpower', 'drugs', 'force', 'hard');
        } else {
          scene.text('It\'s clear that if you want Katja to stop, you would need to forcefully drag her away. You\'re not exactly sure how that will go down when you\'re in a stranger\'s apartment.');
        }
      }
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
          { label: 'Convince her not to do it [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'force');
    if (((s as any).katjaQW ?? 0)?.['coke_stage'] === 5) {
      qspCall(s, 'npc_relationship', 'modify', 'A14', 'dislike');
    } else {
      if (((s as any).katjaQW ?? 0)?.['coke_stage'] === 6) {
        qspCall(s, 'npc_relationship', 'modify', 'A14', 'hate');
      } else {
        if (((s as any).katjaQW ?? 0)?.['coke_stage'] === 7) {
          qspCall(s, 'npc_relationship', 'modify', 'A14', 'loathe');
        }
      }
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
  } },
        ]);
      }
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
  } },
            ]);
          }
          scene.actions([
            { label: 'Do some lines with Katja [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
        }
      }
    }
  } },
        ]);
      }
    } else {
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
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAfterDrugs(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/characters/pavlovsk/school/girl/katja/uni/nightclub/private_with_guy${Math.floor(Math.random() * 2) + 1}.jpg`);
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  // TODO-QSP: dynamic text: You're soon relaxing and having some wine while getting to know each other a lit...
  scene.text(`You're soon relaxing and having some wine while getting to know each other a little. ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]}'s free hand gently caresses you and Katja's thighs on occasion. Katja returns his touch and you do the same.`);
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
  // TODO-QSP: end
  scene.build();
}

function enterFirstTime(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A14', 'a');
  ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 5);
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/kiss_guy_katja_watch.jpg');
  // TODO-QSP: dynamic text: You take the initiative and bring <<$npc_nickname[$npcID]>>'s face to yours, kis...
  scene.text(`You take the initiative and bring ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]}'s face to yours, kissing him as his hands roam over your body.`);
  scene.text('You slowly unbutton his shirt and start caressing his bare chest as Katja looks on while pressing her thighs together, clearly getting aroused.');
  qspCall(s, 'arousal', 'kiss', 3, ((s as any).npcID ?? 0), 'group');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Katja\'s turn', handler: (st: GameState) => {
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 11) + 10);
    scene.img('images/characters/pavlovsk/school/girl/katja/katja_kiss.jpg');
    // TODO-QSP: dynamic text: You gently push <<$npc_nickname[$npcID]>> away and stand up in front of Katja. Y...
    scene.text(`You gently push ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} away and stand up in front of Katja. You pull her up in your arms and start to kiss her deeply.`);
    scene.text('You gently caress her body, and she does the same to you. After a short while, you start to slowly remove her dress and she reciprocates.');
    // TODO-QSP: dynamic text: You quickly turn to <<$npc_nickname[$npcID]>>. "Maybe you could show us the rest...
    scene.text(`You quickly turn to ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]}. "Maybe you could show us the rest of your apartment?" you ask in your most seductive voice.`);
    scene.text('He gets your intention. "Of course. Let\'s start with the bedroom," he says as he shows you the way.');
    qspCall(s, 'arousal', 'kiss', 3, ((s as any).npcID1 ?? 0), 'group', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go to his bedroom', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/man_home_sex1.jpg');
    // TODO-QSP: dynamic text: <<$npc_nickname[$npcID]>>'s bedroom is, like the rest of his apartment, quite ni...
    scene.text(`${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]}'s bedroom is, like the rest of his apartment, quite nice. The center of the room, his bed, is ready for action.`);
    scene.text('"Nice bed," you say. "Let\'s see if it\'s as soft as it looks." You crawl up onto the bed, with Katja following you.');
    // TODO-QSP: dynamic text: "Let's show <<$npc_nickname[$npcID]>> what he has to look forward to," you whisp...
    scene.text(`"Let's show ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} what he has to look forward to," you whisper at Katja as you get on all fours, displaying your ass to ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]}.`);
    // TODO-QSP: dynamic text: Katja does the same and <<$npc_nickname[$npcID]>> smiles. "What a fantastic view...
    scene.text(`Katja does the same and ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} smiles. "What a fantastic view!"`);
    // TODO-QSP: dynamic text: Katja leans in and gives you a soft kiss as you hear <<$npc_nickname[$npcID]>> s...
    scene.text(`Katja leans in and gives you a soft kiss as you hear ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} stripping his clothes off behind you.`);
    qspCall(s, 'arousal', 'kiss', 3, ((s as any).npcID1 ?? 0), 'group', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Start by sucking his dick', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/man_home_sex2.jpg');
    // TODO-QSP: dynamic text: "This is a really comfortable bed. Why don't you join us?" you ask and <<$npc_ni...
    scene.text(`"This is a really comfortable bed. Why don't you join us?" you ask and ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} immediately lies down on the bed between you and Katja.`);
    // TODO-QSP: dynamic text: You sit down and start licking the sides of his <<dick>> cm <<$dick_girth>> cock...
    scene.text(`You sit down and start licking the sides of his ${((s as any).dick ?? 0)} cm ${((s as any).dick_girth ?? 0)} cock as Katja watches nervously.`);
    scene.text('"Come on, Katja! You have to try this," you tell her and offer her his dick. She slowly gets closer, sticks out her tongue, and starts licking his cock very carefully.');
    scene.text('You look at her for some time, and when she starts getting more comfortable, you join her and you both lick his dick at the same time.');
    qspCall(s, 'arousal', 'bj', 3, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Show Katja how to ride cock', handler: (st: GameState) => {
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 5);
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/man_home_sex3.jpg');
    // TODO-QSP: dynamic text: "Time for you to see how sex works," you tell Katja as you remove <<$npc_nicknam...
    scene.text(`"Time for you to see how sex works," you tell Katja as you remove ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]}'s cock from your mouth. Katja sits up and looks at you intently.`);
    // TODO-QSP: dynamic text: You climb up on <<$npc_nickname[$npcID]>> and lower yourself down onto his <<$di...
    scene.text(`You climb up on ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} and lower yourself down onto his ${((s as any).dick_girth ?? 0)} cock before you start riding him cowgirl style.`);
    scene.text('Katja gets close and looks intently at his cock sliding in and out of your pussy.');
    qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Change position', handler: (st: GameState) => {
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 11) + 10);
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/man_home_sex4.jpg');
    // TODO-QSP: dynamic text: You scoot forward and <<$npc_nickname[$npcID]>>'s cock pops out of your pussy. "...
    scene.text(`You scoot forward and ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]}'s cock pops out of your pussy. "Why don't you suck on his cock some more?"`);
    // TODO-QSP: dynamic text: Katja does as you ask and '+iif(npc_throat['A14'] < dick/2, 'tries to take', 'ta...
    scene.text(`Katja does as you ask and '+iif(npc_throat['A14'] < dick/2, 'tries to take', 'takes')+' ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]}'s ${((s as any).dick_girth ?? 0)} dick into her mouth.`);
    if (((s as any).npc_throat ?? 0)?.['A14'] < ((s as any).dick ?? 0)/2) {
      ((s as any).katjaQW ?? {})['slut'] = (((s as any).katjaQW ?? {})['slut'] ?? 0) - (2);
      scene.text('Katja continues to try to suck his cock, but she\'s clearly having problems with getting it in her mouth. After trying for a few minutes, she gives up.');
    } else {
      if (((s as any).npc_throat ?? 0)?.['A14'] < ((s as any).dick ?? 0)) {
        // TODO-QSP: dynamic text: Katja starts to blow <<$npc_nickname[$npcID]>>, but she's clearly having problem...
        scene.text(`Katja starts to blow ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]}, but she's clearly having problems with taking all of his cock. After trying for a few minutes, she gives up.`);
      } else {
        if (((s as any).npc_throat ?? 0)?.['A14'] < 2*((s as any).dick ?? 0)) {
          ((s as any).katjaQW ?? {})['slut'] = (((s as any).katjaQW ?? {})['slut'] ?? 0) + (2);
          // TODO-QSP: dynamic text: Katja starts to blow <<$npc_nickname[$npcID]>> and she's able to take most of hi...
          scene.text(`Katja starts to blow ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} and she's able to take most of his cock without a problem. After sucking him for a few minutes, she stops.`);
        } else {
          ((s as any).katjaQW ?? {})['slut'] = (((s as any).katjaQW ?? {})['slut'] ?? 0) + (4);
          // TODO-QSP: dynamic text: Katja starts to blow <<$npc_nickname[$npcID]>> and she's able to take all of his...
          scene.text(`Katja starts to blow ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} and she's able to take all of his cock like a pro. After sucking him for a few minutes, she stops.`);
        }
      }
    }
    if (((s as any).npc_throat ?? 0)?.['A14'] < ((s as any).dick ?? 0)) {
      ((s as any).npc_throat ?? {})['A14'] = (((s as any).npc_throat ?? {})['A14'] ?? 0) + (1);
    }
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get on your back', handler: (st: GameState) => {
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 5);
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/man_home_sex5.jpg');
    scene.text('"Come and sit on your knees right here," you tell Katja and point at a spot on the bed. She does as you say, then you lie on your back and put your head in her lap.');
    // TODO-QSP: dynamic text: "Hold my legs," you tell her as you spread and lift them in the air to give <<$n...
    scene.text(`"Hold my legs," you tell her as you spread and lift them in the air to give ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} full access to your pussy.`);
    // TODO-QSP: dynamic text: "Look carefully, Katja, this is what's going to happen to you next," you say as ...
    scene.text(`"Look carefully, Katja, this is what's going to happen to you next," you say as ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} slides his cook into your pussy and start thrusting.`);
    scene.text('Katja looks intently at his cock pumping in and out of your wet pussy.');
    qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Katja\'s turn', handler: (st: GameState) => {
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 5);
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/man_home_sex6.jpg');
    // TODO-QSP: dynamic text: After a few minutes, you stop <<$npc_nickname[$npcID]>>. Once he pulls out, you ...
    scene.text(`After a few minutes, you stop ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]}. Once he pulls out, you look up at Katja. "Your turn now."`);
    // TODO-QSP: dynamic text: You switch places with her and hold up her legs to give <<$npc_nickname[$npcID]>...
    scene.text(`You switch places with her and hold up her legs to give ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} access. You look at Katja to see how she handles her first cock.`);
    // TODO-QSP: dynamic text: <<$npc_nickname[$npcID]>> places the head of his cock at Katja's vaginal opening...
    scene.text(`${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} places the head of his cock at Katja's vaginal opening. She looks at it nervously and stammers. "Be careful… It's my… first… time."`);
    // TODO-QSP: dynamic text: "I will. Don't worry, I'll take good care of you," <<$npc_nickname[$npcID]>> say...
    scene.text(`"I will. Don't worry, I'll take good care of you," ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} says before he pushes his cock into her pussy.`);
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Penetration', handler: (st: GameState) => {
    if (((s as any).npc_vag ?? 0)?.['A14'] === 0) {
      scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/man_home_sex7a.jpg');
      ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) - (Math.floor(Math.random() * 21) + 20);
      ((s as any).katjaQW ?? {})['slut'] = (((s as any).katjaQW ?? {})['slut'] ?? 0) - (5);
      // TODO-QSP: dynamic text: <<$npc_nickname[$npcID]>> slowly guides his cock into Katja, who's clearly feeli...
      scene.text(`${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} slowly guides his cock into Katja, who's clearly feeling uncomfortable with it. He comes to a halt, apparently having reached her hymen.`);
      scene.text('Katja looks at him with big eyes, then lets out a shriek of pain and throws her head back when he suddenly thrusts forward.');
      // TODO-QSP: dynamic text: <<$npc_nickname[$npcID]>> just keeps his cock still for a moment while Katja's p...
      scene.text(`${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} just keeps his cock still for a moment while Katja's pain subsides and her breathing returns to normal.`);
      scene.text('Finally, she speaks in a quiet voice. "You can… go on."');
      scene.text('He slowly continues to push his cock into her and it\'s clear she\'s still feeling some pain, but before long, he pulls out and slowly pushes in again, and her discomfort seems to be disappearing.');
    } else {
      if (((s as any).npc_vag ?? 0)?.['A14'] < ((s as any).dick ?? 0)) {
        scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/man_home_sex7a.jpg');
        ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 5);
        ((s as any).katjaQW ?? {})['slut'] = (((s as any).katjaQW ?? {})['slut'] ?? 0) - (2);
        // TODO-QSP: dynamic text: <<$npc_nickname[$npcID]>> slowly guides his cock into Katja, who's clearly feeli...
        scene.text(`${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} slowly guides his cock into Katja, who's clearly feeling some pain, but when he seems to stop, Katja looks up at him. "You can… go on."`);
        scene.text('He slowly continues to push his cock into her, and before long, it\'s fully buried inside her pussy.');
        scene.text('It\'s clear that she\'s still feeling some pain. He pulls out and slowly pushes in again. Before long, her discomfort seems to be disappearing.');
      } else {
        scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/man_home_sex7b.jpg');
        ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 21) + 20);
        ((s as any).katjaQW ?? {})['slut'] = (((s as any).katjaQW ?? {})['slut'] ?? 0) + (2);
        // TODO-QSP: dynamic text: <<$npc_nickname[$npcID]>> slowly guides his cock into Katja, who looks on with b...
        scene.text(`${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} slowly guides his cock into Katja, who looks on with big eyes.`);
        scene.text('To what looks like his surprise, he meets very little resistance, and his cock is soon fully buried in her pussy.');
        scene.text('Katja just looks on in amazement as he pulls out and pushes in again, causing her to moan.');
      }
    }
    if (((s as any).npc_vag ?? 0)?.['A14'] === 0) {
      ((s as any).npc_vag ?? {})['A14'] = 20;
    } else {
      if (((s as any).npc_vag ?? 0)?.['A14'] < ((s as any).dick ?? 0)) {
        ((s as any).npc_vag ?? {})['A14'] = (((s as any).npc_vag ?? {})['A14'] ?? 0) + (1);
      }
      if (((s as any).npc_vag ?? 0)?.['A14'] < 2*((s as any).dick ?? 0)) {
        ((s as any).npc_vag ?? {})['A14'] = (((s as any).npc_vag ?? {})['A14'] ?? 0) + (1);
      }
    }
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Katja gets fucked', handler: (st: GameState) => {
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 5);
    ((s as any).katjaQW ?? {})['slut'] = (((s as any).katjaQW ?? {})['slut'] ?? 0) + (2);
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/man_home_sex8.jpg');
    // TODO-QSP: dynamic text: "Come on, move faster… Fuck me!" Katja moans. <<$npc_nickname[$npcID]>> doesn't ...
    scene.text(`"Come on, move faster… Fuck me!" Katja moans. ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} doesn't need to be asked twice.`);
    // TODO-QSP: dynamic text: He starts pounding her, even moving one of his feet on the bed so he can go deep...
    scene.text('He starts pounding her, even moving one of his feet on the bed so he can go deeper as you look at Katja, who\'s writhing in \'+iif(npc_vag[\'A14\'] < dick, \'pain and pleasure\', \'pleasure\')+\', moaning louder and louder.');
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Your turn again', handler: (st: GameState) => {
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 5);
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/man_home_sex9.jpg');
    // TODO-QSP: dynamic text: After a few minutes of pounding, '+iif( katjaQW['horny'] >= 100, 'she lets out a...
    scene.text('After a few minutes of pounding, \'+iif( katjaQW[\'horny\'] >= 100, \'she lets out a huge moan, seemingly having an orgasm\', \'seems to have had enough\')+\' "Enough! I need a break."');
    // TODO-QSP: dynamic text: <<$npc_nickname[$npcID]>> pulls out and he too seems exhausted. "Lay down, I'll ...
    scene.text(`${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} pulls out and he too seems exhausted. "Lay down, I'll take care of you," you tell him.`);
    scene.text('He lies down on his back. You climb on top and start riding his still-hard cock.');
    // TODO-QSP: dynamic text: After a short moment, Katja seems to have gathered her strength and stands up on...
    scene.text(`After a short moment, Katja seems to have gathered her strength and stands up on the bed. She guides your mouth to her pussy and you start eating her out as you bounce up and down on ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]}'s cock.`);
    if (((s as any).katjaQW ?? 0)?.['horny'] >= 100) {
      ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) - (100);
      ((s as any).katjaQW ?? {})['slut'] = (((s as any).katjaQW ?? {})['slut'] ?? 0) + (2);
    }
    qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'arousal', 'cuni_give', (-2), ((s as any).npcID1 ?? 0), 'group', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Switch again', handler: (st: GameState) => {
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 5);
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/man_home_sex10.jpg');
    scene.text('After a while, you\'ve had enough. "Your turn again," you tell Katja as you get off.');
    scene.text('"This time, put your feet on his knees and hands on his shoulders, facing this way," you say as you instruct Katja on doing reverse cowgirl.');
    scene.text('You help guide his cock into her pussy and she starts to ride him, but is having some difficulty doing it in this new position.');
    qspCall(s, 'arousal', 'erotic_nudity', 2, 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get pounded one more time', handler: (st: GameState) => {
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 5);
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/man_home_sex11.jpg');
    // TODO-QSP: dynamic text: "This isn't working. Get off," <<$npc_nickname[$npcID]>> says after a few minute...
    scene.text(`"This isn't working. Get off," ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} says after a few minutes of awkward sex and Katja obliges.`);
    // TODO-QSP: dynamic text: "You," he points at you. "Get down on all fours and shove that <<$pc_desc['butt'...
    scene.text(`"You," he points at you. "Get down on all fours and shove that ${((s as any).pc_desc ?? 0)?.['butt']} ass in the air," he commands.`);
    scene.text('You do as he says and he climbs on and starts to pound you, deep and hard. Katja lies down and starts to play with your clit as you get fucked.');
    qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'arousal', 'clit_finger', (-2), ((s as any).npcID1 ?? 0), 'group', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Last switch', handler: (st: GameState) => {
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 11) + 10);
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/man_home_sex12.jpg');
    // TODO-QSP: dynamic text: "I want to fuck the redhead again before I cum," <<$npc_nickname[$npcID]>> says ...
    scene.text(`"I want to fuck the redhead again before I cum," ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} says as he gets off you. Katja quickly takes your position.`);
    scene.text('He mounts her and starts thrusting like a piston. You crawl under them so you can look at his cock ravaging Katja\'s pussy while she moans loudly.');
    if (((s as any).katjaQW ?? 0)?.['horny'] >= 100) {
      ((s as any).katjaQW ?? {})['horny'] = 0;
      ((s as any).katjaQW ?? {})['slut'] = (((s as any).katjaQW ?? {})['slut'] ?? 0) + (3);
      scene.text('After a short while, Katja yells out that she\'s cumming and has an explosive orgasm, squirting all over your face.');
      // TODO-QSP: dynamic text: "Get down on your knees, I want to cum on your faces!" <<$npc_nickname[$npcID]>>...
      scene.text(`"Get down on your knees, I want to cum on your faces!" ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} yells.`);
    } else {
      scene.text('He continues to pound her for a few minutes before he climbs off her. "Get down on your knees, I want to cum on your faces!" he yells.');
    }
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Cum shower', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/man_home_sex13.jpg');
    scene.text('You do as he says and quickly get on the floor just as his cum starts spraying out over both your faces.');
    // TODO-QSP: dynamic text: He cums '+iif(rand(0, 1) > 0, 'a lot', 'with only a couple of spurts')+'. You st...
    scene.text('He cums \'+iif(rand(0, 1) > 0, \'a lot\', \'with only a couple of spurts\')+\'. You start to lick off the cum on Katja\'s face, and she returns the favor.');
    // TODO-QSP: dynamic text: You continue to make out for a while. When you get up, <<$npc_nickname[$npcID]>>...
    scene.text(`You continue to make out for a while. When you get up, ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} has laid down on his bed, looking very exhausted.`);
    scene.text('"We have to use your bathroom," you tell him and he just waves his hand in its direction.');
    qspCall(s, 'arousal', 'kiss', 3, ((s as any).npcID1 ?? 0), 'lesbian');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get cleaned up', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 7;
    (s as any).cumspclnt = 1;
    qspCall(s, 'cum_cleanup', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/claining_up_after_sex.jpg');
    scene.text('On the way to the bathroom, you pick up your clothes before you spend some time cleaning the rest of his cum off your faces.');
    scene.text('You don\'t talk much while you fix up your makeup and get dressed again.');
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      // TODO-QSP: dynamic text: When you return to <<$npc_nickname[$npcID]>>, he has fallen asleep, so you and K...
      scene.text(`When you return to ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]}, he has fallen asleep, so you and Katja decide to see yourselves out.`);
    } else {
      // TODO-QSP: dynamic text: When you return to <<$npc_nickname[$npcID]>>, he lies still on the bed, exhauste...
      scene.text(`When you return to ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]}, he lies still on the bed, exhausted. "Thanks for a great time. We'll be going now," you say while Katja has grown very quiet.`);
      // TODO-QSP: dynamic text: "Okay, and it's me who owes you for a fantastic time. Hope you can see yourselve...
      scene.text(`"Okay, and it's me who owes you for a fantastic time. Hope you can see yourselves out," ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} answers.`);
    }
    scene.actions([
      { label: 'Leave the apartment', goto: ['katja_city_sex', 'going_home'] },
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

function enterOneGuyStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_assertive ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((((s as any).katjaQW ?? 0)?.['dom'] >= 30  &&  ((s as any).katjaQW ?? 0)?.['bondage_sex'] === 0)  ||  (((s as any).katjaQW ?? 0)?.['bondage_sex'] > 0  &&  (Math.floor(Math.random() * 6) + 0) === 0))  &&  ((s as any).katjaQW ?? 0)?.['drinks'] < 8) {
    scene.actions([{ label: 'Continue', goto: ['katja_city_sex', 'blindfold_sex_start'] }]);
  }
  qspCall(s, 'npcStat', 'A14', 'a');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/man_home_sex1.jpg');
  // TODO-QSP: dynamic text: <<$npc_nickname[$npcID]>>'s bedroom is, like the rest of his apartment, quite ni...
  scene.text(`${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]}'s bedroom is, like the rest of his apartment, quite nice. The center of the room, his bed, is ready for action.`);
  scene.text('"Nice bed," you say. "Let\'s see if it\'s as soft as it looks." You crawl up onto the bed, with Katja following you.');
  // TODO-QSP: dynamic text: "It's very hot in here, I think I need to lose some of these warm clothes," '+ii...
  scene.text('"It\'s very hot in here, I think I need to lose some of these warm clothes," \'+iif(func(\'katja_procedural\', \'willing_to_be_naughty\') > 80 and katjaQW[\'horny\'] >= rand(70, 100), \'Katja says\', \'you say\')+\', and you both proceed to take off your clothes.');
  // TODO-QSP: dynamic text: "Let's show <<$npc_nickname[$npcID]>> what he has to look forward to," you whisp...
  scene.text(`"Let's show ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} what he has to look forward to," you whisper at Katja as you get on all fours, displaying your ass to ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]}.`);
  // TODO-QSP: dynamic text: Katja does the same and <<$npc_nickname[$npcID]>> smiles. "What a fantastic view...
  scene.text(`Katja does the same and ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} smiles. "What a fantastic view!"`);
  scene.text('Katja leans in and gives you a soft kiss as you clothes being taken off behind you.');
  qspCall(s, 'arousal', 'kiss', 3, ((s as any).npcID1 ?? 0), 'group', 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Start by sucking his dick', goto: ['katja_city_sex', 'on_guy_sex1'] },
  ]);
  scene.build();
}

function enterOnGuySex1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A14', 'a');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/man_home_sex2.jpg');
  // TODO-QSP: '"This is a really comfortable bed. Why don''t you join us?" '+iif(func('katja_procedural', 'willing...
  // TODO-QSP: dynamic text: <<$npc_nickname[$npcID]>> immediately lies down on the bed between Katja and you...
  scene.text(`${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} immediately lies down on the bed between Katja and yourself as you both sit down and start licking the sides of his ${((s as any).dick ?? 0)} cm ${((s as any).dick_girth ?? 0)} cock.`);
  qspCall(s, 'arousal', 'bj', 3, ((s as any).npcID ?? 0), 'group');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Time to fuck', handler: (st: GameState) => {
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 5);
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/man_home_sex5.jpg');
    // TODO-QSP: dynamic text: "Time to ride some cock!" you tell Katja as you remove <<$npc_nickname[$npcID]>>...
    scene.text(`"Time to ride some cock!" you tell Katja as you remove ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]}'s dick from your mouth. Katja also stops licking.`);
    scene.text('"Come and sit on your knees, right here," you tell her and point at a spot on the bed. You lie on your back and put your head in her lap.');
    // TODO-QSP: dynamic text: "Hold my legs," you tell Katja as you spread and lift them in the air, giving <<...
    scene.text(`"Hold my legs," you tell Katja as you spread and lift them in the air, giving ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} full access to your pussy.`);
    // TODO-QSP: dynamic text: Katja looks intently as <<$npc_nickname[$npcID]>> slides his cock into your puss...
    scene.text(`Katja looks intently as ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} slides his cock into your pussy and starts fucking you.`);
    qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Katja\'s turn', handler: (st: GameState) => {
    if (((s as any).npc_vag ?? 0)?.['A14'] < ((s as any).dick ?? 0)) {
      ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 5);
      scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/man_home_sex7a.jpg');
      // TODO-QSP: dynamic text: After a few minutes, you stop <<$npc_nickname[$npcID]>>. Once he pulls out, you ...
      scene.text(`After a few minutes, you stop ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]}. Once he pulls out, you switch places with Katja and she holds up her legs to give ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} access.`);
      // TODO-QSP: dynamic text: <<$npc_nickname[$npcID]>> guides his cock into Katja, who's clearly feeling some...
      scene.text(`${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} guides his cock into Katja, who's clearly feeling some pain, but when he seems to stop, she looks up at him. "You can… go on."`);
      scene.text('He slowly continues to push his cock into her and before long, his cock is fully buried in her pussy.');
      scene.text('It\'s clear that she\'s still feeling some pain, so he pulls out and slowly pushes in again. Before long, her discomfort seems to be disappearing.');
    } else {
      scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/man_home_sex7b.jpg');
      ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 21) + 20);
      ((s as any).katjaQW ?? {})['slut'] = (((s as any).katjaQW ?? {})['slut'] ?? 0) + (4);
      // TODO-QSP: dynamic text: <<$npc_nickname[$npcID]>> guides his cock into Katja. When he meets very little ...
      scene.text(`${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} guides his cock into Katja. When he meets very little resistance, he starts to fuck her just as hard as he did you.`);
      scene.text('Katja starts to moan and is clearly enjoying herself.');
    }
    if (((s as any).npc_vag ?? 0)?.['A14'] < ((s as any).dick ?? 0)) {
      ((s as any).npc_vag ?? {})['A14'] = (((s as any).npc_vag ?? {})['A14'] ?? 0) + (1);
    }
    if (((s as any).npc_vag ?? 0)?.['A14'] < 2*((s as any).dick ?? 0)) {
      ((s as any).npc_vag ?? {})['A14'] = (((s as any).npc_vag ?? {})['A14'] ?? 0) + (1);
    }
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Katja gets fucked', handler: (st: GameState) => {
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 5);
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/man_home_sex8.jpg');
    // TODO-QSP: dynamic text: "Come on, move faster… Fuck me!" Katja moans. <<$npc_nickname[$npcID]>> doesn't ...
    scene.text(`"Come on, move faster… Fuck me!" Katja moans. ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} doesn't need to be asked twice. He starts pounding her, even moving one foot onto the bed so he can go deeper as you look at Katja writhing in '+iif(npc_vag['A14'] < dick, 'pain and pleasure', 'pleasure')+', moaning louder and louder.`);
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Your turn again', handler: (st: GameState) => {
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 5);
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/man_home_sex9.jpg');
    // TODO-QSP: dynamic text: After a few minutes, '+iif( katjaQW['horny'] >= 100, 'she lets out a huge moan, ...
    scene.text('After a few minutes, \'+iif( katjaQW[\'horny\'] >= 100, \'she lets out a huge moan, seemingly having an orgasm.\', \'seems to have had enough.\')+\' "Enough. I need a break."');
    // TODO-QSP: dynamic text: <<$npc_nickname[$npcID]>> pulls out and also seems exhausted. "Lay down and I'll...
    scene.text(`${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} pulls out and also seems exhausted. "Lay down and I'll take care of you," you tell him.`);
    scene.text('He lies down on his back before you climb on top of him and start riding him.');
    // TODO-QSP: dynamic text: After a short moment, Katja seems to have gathered her strength and stands on th...
    scene.text(`After a short moment, Katja seems to have gathered her strength and stands on the bed. She guides your mouth to her pussy and you start eating her out as you bounce up and down on ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]}'s cock.`);
    if (((s as any).katjaQW ?? 0)?.['horny'] >= 100) {
      ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) - (100);
      ((s as any).katjaQW ?? {})['slut'] = (((s as any).katjaQW ?? {})['slut'] ?? 0) + (2);
    }
    qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'arousal', 'cuni_give', (-2), ((s as any).npcID1 ?? 0), 'group', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let Katja suck his cock', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'group');
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 11) + 10);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/man_home_sex4.jpg');
    // TODO-QSP: dynamic text: After a while, you've also had enough and scoot forward and <<$npc_nickname[$npc...
    scene.text(`After a while, you've also had enough and scoot forward and ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]}'s cock pops out of your pussy. "Why don't you suck on his cock some more, Katja?"`);
    // TODO-QSP: dynamic text: Katja does as you say and '+iif(npc_throat['A14'] < dick/2, 'tries to take', 'ta...
    scene.text(`Katja does as you say and '+iif(npc_throat['A14'] < dick/2, 'tries to take', 'takes')+' ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]}'s ${((s as any).dick_girth ?? 0)} in her mouth.`);
    if (((s as any).npc_throat ?? 0)?.['A14'] < ((s as any).dick ?? 0)/2) {
      ((s as any).katjaQW ?? {})['slut'] = (((s as any).katjaQW ?? {})['slut'] ?? 0) - (2);
      scene.text('Katja continues to try to suck his cock, but is clearly having problems with getting it into her mouth. After trying for a few minutes, she gives up.');
    } else {
      if (((s as any).npc_throat ?? 0)?.['A14'] < ((s as any).dick ?? 0)) {
        // TODO-QSP: dynamic text: Katja then starts to blow <<$npc_nickname[$npcID]>> but is clearly having proble...
        scene.text(`Katja then starts to blow ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} but is clearly having problems with taking all of his cock. After trying for a few minutes, she gives up.`);
      } else {
        if (((s as any).npc_throat ?? 0)?.['A14'] < 2*((s as any).dick ?? 0)) {
          // TODO-QSP: dynamic text: Katja then starts to blow <<$npc_nickname[$npcID]>> and can take most of his coc...
          scene.text(`Katja then starts to blow ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} and can take most of his cock without a problem. She stops after a few minutes.`);
        } else {
          ((s as any).katjaQW ?? {})['slut'] = (((s as any).katjaQW ?? {})['slut'] ?? 0) + (2);
          // TODO-QSP: dynamic text: Katja starts blowing <<$npc_nickname[$npcID]>>, taking all of his cock like a pr...
          scene.text(`Katja starts blowing ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]}, taking all of his cock like a pro. She stops after a few minutes.`);
        }
      }
    }
    if (((s as any).npc_throat ?? 0)?.['A14'] < ((s as any).dick ?? 0)) {
      ((s as any).npc_throat ?? {})['A14'] = (((s as any).npc_throat ?? {})['A14'] ?? 0) + (1);
    }
    scene.actions([
      { label: 'Switch again', handler: (st: GameState) => {
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 5);
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/man_home_sex10.jpg');
    if (qspFunc(s, 'katja_procedural', 'willing_to_be_naughty') > 80  &&  ((s as any).katjaQW ?? 0)?.['horny'] >= (Math.floor(Math.random() * 31) + 70)) {
      scene.text('"My turn now," Katja says and crawls up onto him for a reverse cowgirl and guides his cock into her pussy.');
    } else {
      scene.text('"Your turn again," you say. "Try reverse cowgirl this time."');
      scene.text('Katja does as she\'s told and you help guide his cock into her pussy.');
    }
    scene.text('She starts to ride him, but it\'s clear that it\'s not the best position.');
    qspCall(s, 'arousal', 'erotic_nudity', 2, 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get pounded one more time', handler: (st: GameState) => {
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 5);
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/man_home_sex11.jpg');
    // TODO-QSP: dynamic text: "Let's change position," <<$npc_nickname[$npcID]>> says after a few minutes and ...
    scene.text(`"Let's change position," ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} says after a few minutes and Katja obliges.`);
    // TODO-QSP: dynamic text: He points at you. "Get down on all fours and shove that <<$pc_desc['butt']>> ass...
    scene.text(`He points at you. "Get down on all fours and shove that ${((s as any).pc_desc ?? 0)?.['butt']} ass in the air," he commands.`);
    scene.text('You do as he says and he climbs onto you before he starts pounding you deep and hard. Katja lies down and starts to play with your clit as you get fucked.');
    qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'arousal', 'clit_finger', (-2), ((s as any).npcID1 ?? 0), 'group', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Last switch', handler: (st: GameState) => {
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 11) + 10);
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/man_home_sex12.jpg');
    // TODO-QSP: dynamic text: "I need to fuck the redhead one last time before I cum," <<$npc_nickname[$npcID]...
    scene.text(`"I need to fuck the redhead one last time before I cum," ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} says as he gets off you and Katja quickly takes your place.`);
    scene.text('He mounts her and starts thrusting like a piston. You crawl under them so you can look at his cock ravaging Katja\'s pussy while she moans loudly.');
    if (((s as any).katjaQW ?? 0)?.['horny'] >= 100) {
      ((s as any).katjaQW ?? {})['horny'] = 0;
      ((s as any).katjaQW ?? {})['slut'] = (((s as any).katjaQW ?? {})['slut'] ?? 0) + (1);
      scene.text('After a short while, Katja screams that she\'s coming and has an explosive orgasm, squirting all over your face.');
      // TODO-QSP: dynamic text: Just a short moment afterward, <<$npc_nickname[$npcID]>> jumps off and yells, "G...
      scene.text(`Just a short moment afterward, ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} jumps off and yells, "Get down on your knees, I want to cum on your faces!"`);
    } else {
      scene.text('He continue to pound her for a few minutes before he jumps up. "Get down on your knees, I want to cum on your faces!" he yells.');
    }
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Cum shower', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/man_home_sex13.jpg');
    scene.text('You do as he says and quickly get on the floor just as his cum starts spraying out over both of your faces.');
    // TODO-QSP: dynamic text: He cums '+iif(rand(0, 1) > 0, 'a lot', 'with only a couple of spurts')+'. You st...
    scene.text('He cums \'+iif(rand(0, 1) > 0, \'a lot\', \'with only a couple of spurts\')+\'. You start to lick off the cum on Katja\'s face, and she returns the favor.');
    // TODO-QSP: dynamic text: You continue to make out for a while. When you get up, <<$npc_nickname[$npcID]>>...
    scene.text(`You continue to make out for a while. When you get up, ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} has laid down on his bed, looking very exhausted.`);
    scene.text('"We have to use your bathroom," you tell him and he just waves his hand in the direction of it.');
    qspCall(s, 'arousal', 'kiss', 3, 'lesbian');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get cleaned up', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 7;
    (s as any).cumspclnt = 1;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/claining_up_after_sex.jpg');
    scene.text('On the way to the bathroom, you pick up your clothes, then spend some time cleaning the rest of his cum off your faces.');
    scene.text('You don\'t talk much while you fix up your makeup and get dressed again.');
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      // TODO-QSP: dynamic text: When you return to <<$npc_nickname[$npcID]>>, he has fallen asleep, so you and K...
      scene.text(`When you return to ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]}, he has fallen asleep, so you and Katja decide to see yourselves out.`);
    } else {
      // TODO-QSP: dynamic text: When you return to <<$npc_nickname[$npcID]>>, he lies still on the bed, exhauste...
      scene.text(`When you return to ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]}, he lies still on the bed, exhausted. "Thanks for a great time. We'll be going now," you say while Katja has grown quiet.`);
      // TODO-QSP: dynamic text: "Okay, and it's me who owes you for a fantastic time. Hope you can see yourselve...
      scene.text(`"Okay, and it's me who owes you for a fantastic time. Hope you can see yourselves out," ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} answers.`);
    }
    scene.actions([
      { label: 'Leave the apartment', goto: ['katja_city_sex', 'going_home'] },
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

function enterGoingHome(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/walking_home_at_night.jpg');
  scene.text('You leave his apartment and walk out into the streets, heading in the direction of the nearest metro station.');
  ((s as any).katjaQW ?? {})['on_date'] = 1;
  if (((s as any).katjaQW ?? 0)?.['QWstage'] === 5) {
    ((s as any).katjaQW ?? {})['QWstage'] = 6;
    scene.text('"So? How was your first time having sex with a man?" you ask after you\'ve walked in silence for a few minutes.');
    // TODO-QSP: iif(katjaQW['horny'] = 0, '"It was great, even better than I imagined," she says with a big smile. '...
    scene.text('"Does this mean you want to try again?" you ask.');
    // TODO-QSP: iif(katjaQW['horny'] = 0, '"Definitely,"', '"Probably,"')+' she answers. You continue your small tal...
  } else {
    if (((s as any).katjaQW ?? 0)?.['horny'] === 0) {
      scene.text('"It was great. He gave me a really good orgasm in the end," she says as you start walking. "So if we continue to find guys like him, then picking up guys is definitely worth it," she continues.');
      scene.text('You keep discussing the sex until you reach the station.');
    } else {
      scene.text('"So how was it?" you ask Katja as you start walking.');
      // TODO-QSP: dynamic text: "I don't know. '+iif(npc_vag['A14'] < dick, 'A little painful', 'Not that great'...
      scene.text('"I don\'t know. \'+iif(npc_vag[\'A14\'] < dick, \'A little painful\', \'Not that great\')+\'. We have definitely had better lovers before," she answers. "If we continue to pick up guys like him, then maybe we should simply stop doing it?"');
      scene.text('You decide to lead the discussion in another direction, not dwelling on the bad sex.');
    }
  }
  if (((s as any).katjaQW ?? 0)?.['birth_control_start_day'] > ((s as any).daystart ?? 0)) {
    scene.text('"Are you on birth control?" you ask.');
    scene.text('"Yes, but I don\'t think it\'s working yet. I should probably take a morning-after pill to be safe," she replies, looking a little worried.');
  } else {
    if (((s as any).katjaQW ?? 0)?.['birth_control_start_day'] === 0) {
      scene.text('"Are you on birth control?" you ask.');
      scene.text('"No, but I definitely should be. I\'ll get started tomorrow, and maybe also take a morning-after pill to be safe" she replies, looking a little worried.');
      ((s as any).katjaQW ?? {})['birth_control_start_day'] = ((s as any).daystart ?? 0) + 15;
    } else {
      if (((s as any).katjaQW ?? 0)?.['birth_control_know'] === 0) {
        ((s as any).katjaQW ?? {})['birth_control_know'] = 1;
        scene.text('"Are you on birth control?" you ask.');
        scene.text('"Yes. Of course, I\'m prepared," she replies, looking a little proud.');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Enter the station', goto: ['katja_city', 'metro'] },
  ]);
  scene.build();
}

function enterBlindfoldSexStart(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: 'As you walk through his apartment, he leans into Katja and whispers something to her. She looks'+ii...
  // TODO-QSP: dynamic text: As you head into <<$npc_nickname[$npcID]>>'s rather nice bedroom, he turns to yo...
  scene.text(`As you head into ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]}'s rather nice bedroom, he turns to you. "Take off your clothes," he says in a demanding voice. You do as he says; you came here to have sex anyway. As you undress, he finds something in a drawer.`);
  scene.text('Once you\'re naked, he holds up a blindfold and a pair of leather shackles. "I\'ll put these on you," he says. "Your friend will be completely free and make sure that you\'re not hurt in any way, so it\'s not about trusting me, it\'s about trusting her."');
  if (((s as any).katjaQW ?? 0)?.['bondage_sex'] > 0) {
    // TODO-QSP: dynamic text: You look at Katja. "Do it <<$pcs_nickname>>," she says. "I'll make sure that you...
    scene.text(`You look at Katja. "Do it ${((s as any).pcs_nickname ?? 0)}," she says. "I'll make sure that you only feel pleasure."`);
    scene.text('She looks confident in herself and excited about the prospect of you being bound and blindfolded.');
  } else {
    // TODO-QSP: dynamic text: You look at Katja. "I'll take care of you <<$pcs_nickname>>," she says nervously...
    scene.text(`You look at Katja. "I'll take care of you ${((s as any).pcs_nickname ?? 0)}," she says nervously. "I promise you won't be hurt."`);
    scene.text('She looks a little uncomfortable, but also excited about the prospect of you being bound and blindfolded.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Let him shackle and blindfold you', goto: ['katja_city_sex', 'blindfold_sex1'] },
    { label: 'Say you don\'t want to', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'A14', 'a');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/man_home_sex1.jpg');
    scene.text('"Sorry, but I am not into that kind of thing," you reply. "But a normal fucking would be good."');
    scene.text('"Okay. I won\'t do anything to you that you don\'t want. Why don\'t the two of you get started?" he answers.');
    // TODO-QSP: dynamic text: Katja looks a little '+iif(katjaQW['bondage_sex'] > 0, 'disappointed', 'relieved...
    scene.text(`Katja looks a little '+iif(katjaQW['bondage_sex'] > 0, 'disappointed', 'relieved')+' as she starts to undress and you crawl onto his bed and get on all fours, displaying your ass to ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]}.`);
    // TODO-QSP: dynamic text: Katja does the same after she has undressed. "What a fantastic view!"<<$npc_nick...
    scene.text(`Katja does the same after she has undressed. "What a fantastic view!"${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} says as Katja leans in and gives you a soft kiss. You hear clothes being taken off behind you.`);
    qspCall(s, 'arousal', 'kiss', 3, ((s as any).npcID1 ?? 0), 'group', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Start by sucking his dick', goto: ['katja_city_sex', 'on_guy_sex1'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterBlindfoldSex1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A14', 'a');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/blindfold_sex1.jpg');
  // TODO-QSP: dynamic text: "Okay. Let's try this," you say and see that Katja looks excited'+iif(katjaQW['b...
  scene.text('"Okay. Let\'s try this," you say and see that Katja looks excited\'+iif(katjaQW[\'bondage_sex\'] = 0, \' but also a little nervous \', \' \')+\'with what is about to happen.');
  // TODO-QSP: dynamic text: "The safe word is 'Redhead', so whenever you say 'Redhead', we'll stop immediate...
  scene.text(`"The safe word is 'Redhead', so whenever you say 'Redhead', we'll stop immediately and remove the blindfold and shackles. Repeat the safe word now so I know you have it," ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} says, and you and Katja repeat what he said.`);
  scene.text('He then takes your arms and gently moves them to your back. You can feel him wrapping the shackles around your wrists, tightening them gently but firmly.');
  scene.text('"Are they comfortable?" he asks and you nod. He then proceeds to place the blindfold over your eyes and your vision is completely gone.');
  scene.text('He then leads you to his bed and helps you lie down. It\'s a little uncomfortable lying on your bound wrists and very strange not being able to see anything.');
  scene.text('You can hear what sounds like somebody sitting in a chair and a slight breathing you recognize as the sound Katja makes when she\'s anticipating something very exciting.');
  ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 0);
  qspCall(s, 'arousal', 'BDSM', 3, ((s as any).npcID ?? 0), 'group', 'bound');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait to "see" what they do', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/blindfold_sex2.jpg');
    scene.text('You lie there for what seems like an eternity before you hear somebody moving on the bed, even though they\'re trying to be as quiet as possible.');
    scene.text('You almost jump when a delicate finger suddenly starts caressing your stomach.');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 0);
    qspCall(s, 'arousal', 'foreplay', 1, ((s as any).npcID1 ?? 0), 'group', 'lesbian', 'bound');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Focus on the finger', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/blindfold_sex3.jpg');
    scene.text('The finger slowly moves up along your body, stopping at the underside of your left breast. It is joined by the other hand just above the same breast.');
    scene.text('The hands don\'t move and your anticipation of what will happen is really getting to you, so you can\'t hold back your moan when something warm and wet touches your left nipple. You realize it\'s a tongue, which gently starts to lick your nipple.');
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 0);
    qspCall(s, 'arousal', 'foreplay', 3, ((s as any).npcID1 ?? 0), 'group', 'lesbian', 'bound');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Feel the touch', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/blindfold_sex4.jpg');
    scene.text('The tongue disappears from your nipple and one of the hands slowly travels down your body towards your groin.');
    scene.text('When it reaches your pussy, the delicate fingers start to gently caress your pussy lips before they finally start to play with your clit.');
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 0);
    qspCall(s, 'arousal', 'foreplay', 3, ((s as any).npcID1 ?? 0), 'group', 'lesbian', 'bound');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Enjoy the fingering', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/blindfold_sex5.jpg');
    scene.text('The fingers disappear from your clit and you suddenly become very aware that nobody is touching you, but you can feel some movement on the bed and faintly hear somebody moving around.');
    scene.text('It comes as a shock when your legs are suddenly pushed apart, followed by a tongue starting to lick your clit.');
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 0);
    qspCall(s, 'arousal', 'cuni', 3, ((s as any).npcID1 ?? 0), 'group', 'lesbian', 'bound');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Have your pussy licked', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/blindfold_sex6.jpg');
    scene.text('The tongue disappears from your clit, but soon after, you feel something very hard penetrating you.');
    scene.text('You think it\'s a dick, but it\'s too smooth and cold. It\'s a dildo…');
    scene.text('Whoever is controlling the dildo is moving it in and out at a slow pace, but is gradually increasing the speed.');
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 0);
    qspCall(s, 'npcStat', 'D2', 'b');
    qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID1 ?? 0), ((s as any).npcID2 ?? 0), 'group', 'lesbian', 'bound');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get fucked by the fake cock', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/blindfold_sex7.jpg');
    scene.text('After spending a few minutes being fucked by the dildo, it is removed and you feel a body lie down next to you.');
    scene.text('A finger gently enters your pussy and you feel the breath of somebody\'s mouth very close to yours.');
    scene.text('It\'s followed by soft lips meeting yours, and a fine tongue enters your mouth. You recognize Katja\'s kiss.');
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 11) + 5);
    qspCall(s, 'arousal', 'vaginal_finger', 3, ((s as any).npcID1 ?? 0), 'group', 'lesbian', 'bound');
    qspCall(s, 'arousal', 'kiss', (-2), ((s as any).npcID1 ?? 0), 'group', 'lesbian', 'bound');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Make out with Katja', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/blindfold_sex8.jpg');
    scene.text('You hear some movement beside the bed as Katja removes her mouth from yours and the finger disappears from your pussy.');
    scene.text('One hand is placed on your breast and another on the back of your head. your head is gently turned to the side where something enters your mouth.');
    // TODO-QSP: dynamic text: You use your tongue to explore the object and recognize it as a'+iif(dick > 15, ...
    scene.text(`You use your tongue to explore the object and recognize it as a'+iif(dick > 15, ' big ', ' ')+'${((s as any).dick_girth ?? 0)} cock, which you start to suck.`);
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 0);
    qspCall(s, 'arousal', 'foreplay', 3, ((s as any).npcID1 ?? 0), 'group', 'lesbian', 'bound');
    qspCall(s, 'arousal', 'bj', (-3), ((s as any).npcID ?? 0), 'group', 'bound');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck the cock', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/blindfold_sex9.jpg');
    // TODO-QSP: dynamic text: You keep sucking the cock and after a while, the blindfold is removed and you ca...
    scene.text(`You keep sucking the cock and after a while, the blindfold is removed and you can see ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} standing before you, his dick in your mouth.`);
    scene.text('"I think it\'s time that you give something back to your generous friend," he says. "Untie her and then lie down," he orders Katja.');
    scene.text('She does as he says and unties you as he takes his clothes off.');
    qspCall(s, 'arousal', 'bj', 1, ((s as any).npcID ?? 0), 'group', 'bound');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Lick Katja', goto: ['katja_city_sex', 'blindfold_sex2'] },
    ]);
  } },
      { label: '"Redhead"', goto: ['katja_city_sex', 'safe_word_said'] },
    ]);
  } },
      { label: '"Redhead"', goto: ['katja_city_sex', 'safe_word_said'] },
    ]);
  } },
      { label: '"Redhead"', goto: ['katja_city_sex', 'safe_word_said'] },
    ]);
  } },
      { label: '"Redhead"', goto: ['katja_city_sex', 'safe_word_said'] },
    ]);
  } },
      { label: '"Redhead"', goto: ['katja_city_sex', 'safe_word_said'] },
    ]);
  } },
      { label: '"Redhead"', goto: ['katja_city_sex', 'safe_word_said'] },
    ]);
  } },
      { label: '"Redhead"', goto: ['katja_city_sex', 'safe_word_said'] },
    ]);
  } },
    { label: '"Redhead"', goto: ['katja_city_sex', 'safe_word_said'] },
  ]);
  scene.build();
}

function enterBlindfoldSex2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A14', 'a');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/blindfold_sex10.jpg');
  // TODO-QSP: dynamic text: Once you're free, <<$npc_nickname[$npcID]>> pushes you down to Katja's pussy. Yo...
  scene.text(`Once you're free, ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} pushes you down to Katja's pussy. You start licking it while fingering her.`);
  // TODO-QSP: dynamic text: You then feel <<$npc_nickname[$npcID]>>'s <<dick>> cm <<$dick_girth>> cock enter...
  scene.text(`You then feel ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]}'s ${((s as any).dick ?? 0)} cm ${((s as any).dick_girth ?? 0)} cock entering your'+iif(pcs_vag <= dick, ' tight ', ' ')+'pussy and he starts to pound you.`);
  ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 11) + 10);
  qspCall(s, 'arousal', 'cuni_give', 3, ((s as any).npcID1 ?? 0), 'group', 'lesbian');
  qspCall(s, 'arousal', 'vaginal_finger_give', (-3), ((s as any).npcID1 ?? 0), 'group', 'lesbian');
  qspCall(s, 'arousal', 'vaginal', (-3), ((s as any).npcID ?? 0), 'group');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Katja\'s turn to get some cock', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/blindfold_sex11.jpg');
    // TODO-QSP: dynamic text: After a while, <<$npc_nickname[$npcID]>> pulls out of you. "I want the redhead's...
    scene.text(`After a while, ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} pulls out of you. "I want the redhead's pussy now."`);
    // TODO-QSP: dynamic text: You lie down on your back and Katja crawls on top of you as <<$npc_nickname[$npc...
    scene.text(`You lie down on your back and Katja crawls on top of you as ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} gets behind her and starts fucking her hard.`);
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 11) + 10);
    qspCall(s, 'arousal', 'foreplay', 3, ((s as any).npcID1 ?? 0), 'group', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: '<<$npc_nickname[$npcID]>> is coming', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/blindfold_sex12.jpg');
    // TODO-QSP: dynamic text: As <<$npc_nickname[$npcID]>> is getting close, he pulls Katja up to him and you ...
    scene.text(`As ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} is getting close, he pulls Katja up to him and you decide to lick her nipple.`);
    if (((s as any).katjaQW ?? 0)?.['horny'] >= 100  ||  ((s as any).katjaQW ?? 0)?.['bondage_sex'] === 0) {
      ((s as any).katjaQW ?? {})['horny'] = 0;
      scene.text('This sends her over the edge and she cums with a loud scream.');
    }
    scene.text('Shortly after, he pushes his cock deep into her and holds it there as he pumps his seed into her.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Pulling out', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/blindfold_sex13.jpg');
    // TODO-QSP: dynamic text: <<$npc_nickname[$npcID]>> lets go of Katja, who falls down onto you. As he pulls...
    scene.text(`${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} lets go of Katja, who falls down onto you. As he pulls his cock out of her, you can feel his sperm dripping down onto your stomach.`);
    // TODO-QSP: dynamic text: <<$npc_nickname[$npcID]>> then sits in his chair. "That was wonderful, girls. Yo...
    scene.text(`${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} then sits in his chair. "That was wonderful, girls. You sure know how to entertain a guy. The bathroom is just there if you need to clean up."`);
    scene.actions([
      { label: 'Get cleaned up', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 7;
    qspCall(s, 'cum_cleanup', '', 1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/claining_up_after_sex.jpg');
    scene.text('You head to the bathroom and clean the cum off your stomach before helping Katja clean her pussy.');
    if (((s as any).katjaQW ?? 0)?.['birth_control_start_day'] <= ((s as any).daystart ?? 0)  &&  ((s as any).katjaQW ?? 0)?.['birth_control_start_day'] > 0) {
      if (((s as any).katjaQW ?? 0)?.['creampie'] === 0) {
        if (((s as any).katjaQW ?? 0)?.['birth_control_know'] === 0) {
          ((s as any).katjaQW ?? {})['birth_control_know'] = 1;
        }
        scene.text('She stands there looking thoughtful. "Anything wrong?" you ask.');
        scene.text('"This is so strange, feeling this foreign substance moving in my vagina," she answers.');
        scene.text('"Is this the first time you\'ve gotten a creampie?" you ask.');
        scene.text('"Yes. Don\'t worry, I\'m on the pill, but I\'ll take a morning-after pill to be safe anyway." she answers.');
      } else {
        if (((s as any).katjaQW ?? 0)?.['creampie'] < 10) {
          scene.text('"It still feels strange having another person\'s fluid in my vagina. I don\'t know if I\'ll ever get used to it," she says as you help her clean up.');
        } else {
          if (((s as any).katjaQW ?? 0)?.['creampie'] >= 30) {
            scene.text('"It\'s real messy when a guy cums in you," she says as you clean her pussy.');
          } else {
            if ((Math.floor(Math.random() * 2) + 0)===1) {
              // TODO-QSP: dynamic text: "It's fascinating to think about how, if I wasn't on birth control, <<$npc_nickn...
              scene.text(`"It's fascinating to think about how, if I wasn't on birth control, ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]}'s sperm would be trying to fertilize my eggs right now. This feeling of being able to create life gives me a feeling of power and excitement," she says.`);
              // TODO-QSP: dynamic text: "Don't worry <<$pcs_nickname>>, I'm not planning to become pregnant anytime soon...
              scene.text(`"Don't worry ${((s as any).pcs_nickname ?? 0)}, I'm not planning to become pregnant anytime soon, and definitely not with a random guy I just met," she assures you when she sees your concerned face.`);
            } else {
              scene.text('"God, this one really made a mess," she says and you get right to helping her clean her pussy.');
            }
          }
        }
      }
    } else {
      if (((s as any).katjaQW ?? 0)?.['creampie'] === 0) {
        scene.text('She\'s standing there looking thoughtful. "Anything wrong?" you ask.');
        scene.text('"This is so strange, feeling this foreign substance moving in my vagina," she answers.');
        scene.text('"Is this the first time you\'ve gotten a creampie?" you ask.');
        scene.text('"Yes, a guy has never cum inside me before," she answers.');
      } else {
        scene.text('"It still feels strange having another person\'s fluid in my vagina. I don\'t know if I\'ll ever get used to it," she says as you help her clean up.');
      }
      if (((s as any).katjaQW ?? 0)?.['birth_control_start_day'] > ((s as any).daystart ?? 0)) {
        if (((s as any).katjaQW ?? 0)?.['birth_control_know'] === 0) {
          ((s as any).katjaQW ?? {})['birth_control_know'] = 1;
        }
        scene.text('"Are you on birth control?" you ask.');
        scene.text('"Yes. Oh shit, I don\'t think it\'s working yet. I\'ll have to take a morning-after pill," she says, looking a little worried.');
      } else {
        scene.text('"Are you on birth control?" you ask.');
        scene.text('"No. Shit. I\'ll have to take a morning-after pill. I should also start on regular birth control since something like this might happen again," she says, looking a little worried.');
        ((s as any).katjaQW ?? {})['birth_control_start_day'] = ((s as any).daystart ?? 0) + 15;
      }
    }
    // TODO-QSP: dynamic text: You finish getting cleaned up and head back to <<$npc_nickname[$npcID]>>, who is...
    scene.text(`You finish getting cleaned up and head back to ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]}, who is already dressed.`);
    scene.text('You talk a little while getting dressed, but it\'s clear that he\'s not up for anything else, so you say your goodbyes and leave his apartment.');
    scene.actions([
      { label: 'Walk to the metro', handler: (st: GameState) => {
    ((s as any).katjaQW ?? {})['creampie'] = (((s as any).katjaQW ?? {})['creampie'] ?? 0) + (1);
    ((s as any).katjaQW ?? {})['on_date'] = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/walking_home_at_night.jpg');
    scene.text('You leave his apartment and walk out into the streets, heading in the direction of the nearest metro station.');
    if (((s as any).katjaQW ?? 0)?.['bondage_sex'] === 0) {
      scene.text('Katja is silent as you walk through the streets, seemingly lost in her thoughts. "How was it being helpless?" she asks.');
      scene.text('Before you can answer, she continues. "Because I have to admit, it got me extremely excited seeing you bound and blindfolded and getting to be in control of what happened to you. If it\'s okay with you, then I think it\'s something I\'d like to try again."');
      scene.text('You say that it might be something you could try another time since you don\'t want to make her sad right now.');
    } else {
      if (((s as any).katjaQW ?? 0)?.['horny'] === 0) {
        scene.text('"This was great. He really prepared you well and gave me a good hard fucking in the end. I hope it was great for you too!" she says as you walk through the streets.');
        scene.text('"You just love seeing me helpless, don\'t you?" you reply. Katja doesn\'t answer and just looks at you with a wicked smile.');
      } else {
        scene.text('"I don\'t know about you, but I\'ve definitely had better evenings. He didn\'t really know how to use his dick," she says as you walk through the streets.');
      }
    }
    scene.text('You keep walking and soon reach the metro station.');
    scene.actions([
      { label: 'Enter the station', handler: (st: GameState) => {
    // TODO-QSP: katjaQW['bondage_sex'] += 1
  }, goto: ['katja_city', 'metro'] },
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
  scene.build();
}

function enterSafeWordSaid(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/romance/lovers/homes/multibedroom/2/bedroom.jpg');
  // TODO-QSP: dynamic text: You say the safe word and the blindfold is quickly removed. "I'm sorry you're fe...
  scene.text(`You say the safe word and the blindfold is quickly removed. "I'm sorry you're feeling uncomfortable," ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} says as he removes the shackles.`);
  // TODO-QSP: dynamic text: Katja looks at you worried, but you assure her that you're okay. "We can end ton...
  scene.text(`Katja looks at you worried, but you assure her that you're okay. "We can end tonight now, or we could continue in more traditional ways?" ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} asks.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Have normal sex with him', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "I don't see any reason to go home now," you say and start to undress Katja. You...
    scene.text(`"I don't see any reason to go home now," you say and start to undress Katja. You then both get up on all fours, displaying your asses to ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]}.`);
    // TODO-QSP: dynamic text: "What a fantastic view!" <<$npc_nickname[$npcID]>> says and Katja leans in and g...
    scene.text(`"What a fantastic view!" ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)]} says and Katja leans in and gives you a soft kiss as you hear clothes being taken off behind you.`);
    scene.actions([
      { label: 'Start by sucking his dick', goto: ['katja_city_sex', 'on_guy_sex1'] },
    ]);
  } },
    { label: 'Go home', handler: (st: GameState) => {
    scene.text('"Sorry, but I think that it\'s best if we end the night now," you say. Katja looks somewhat disappointed, but doesn\'t say anything and helps you get dressed again.');
    scene.text('You then say your goodbyes and leave his apartment.');
    scene.actions([
      { label: 'Walk to the metro station', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/walking_home_at_night.jpg');
    scene.text('Katja asks if you\'re okay as you walk through the streets and you explain why you decided to stop it.');
    if (((s as any).katjaQW ?? 0)?.['bondage_sex'] > 0) {
      scene.text('She says you\'ll have to find a better guy next time you try something like this.');
    } else {
      scene.text('She understands why getting blindfolded and bound can be unnerving, but you get the feeling that she found you being that way exciting.');
    }
    scene.text('You keep walking and soon reach the metro station.');
    scene.actions([
      { label: 'Enter the station', goto: ['katja_city', 'metro'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterWalkingHomeWithTwoGuys(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'npcgeneratec', '', 0, '', Math.floor(Math.random() * 38) + 18, 4);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'a');
  qspCall(s, 'npcgeneratec', '', 0, '', Math.floor(Math.random() * 38) + 18, 4);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'b');
  ((s as any).katjaQW ?? {})['drinks'] = (((s as any).katjaQW ?? {})['drinks'] ?? 0) + (1);
  qspCall(s, 'drugs', 'alcohol', 'wine', 1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/drinking_wine.jpg');
  // TODO-QSP: dynamic text: As you walk through the streets, the men introduce themselves as <<$npc_nickname...
  scene.text(`As you walk through the streets, the men introduce themselves as ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID1 ?? 0)]} and ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID2 ?? 0)]} before you and Katja tell them your names.`);
  scene.text('It doesn\'t take long before you arrive at their building and they show you up to a rather nice apartment.');
  // TODO-QSP: dynamic text: "Let's get a glass of wine and get comfortable," <<$npc_nickname[$npcID1]>> says...
  scene.text(`"Let's get a glass of wine and get comfortable," ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID1 ?? 0)]} says as he gets glasses and a bottle of white wine from his fridge. Meanwhile, you and Katja'+iif(temper <20, ' take off your coats and ', ' ')+' sit down while small talking with ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID2 ?? 0)]}.`);
  // TODO-QSP: dynamic text: After you enjoyed talking for a few minutes and emptied the wine glasses, <<$npc...
  scene.text(`After you enjoyed talking for a few minutes and emptied the wine glasses, ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID1 ?? 0)]} smiles. "Why don't we move the party to the adjoining room? I'm sure that it's more suitable for the next part."`);
  scene.text('You look at Katja and see that she also got what he meant. She gives you an approving nod and you smile as you get up from the couch. "Lead the way."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the bedroom', goto: ['katja_city_sex', 'two_guys_start'] },
  ]);
  scene.build();
}

function enterTwoGuysStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A14', 'c');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/two_men_home_sex1.jpg');
  // TODO-QSP: dynamic text: <<$npc_nickname[$npcID1]>> leads you to the bedroom, which has a nice big bed in...
  scene.text(`${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID1 ?? 0)]} leads you to the bedroom, which has a nice big bed in the middle. "This bed looks very comfortable. Why don't we test it, Katja?" you say.`);
  // TODO-QSP: dynamic text: "Sounds like a plan" she answers with a wink and you both take off your dresses ...
  scene.text('"Sounds like a plan" she answers with a wink and you both take off your dresses and climb onto the bed \'+iif($pantyworntype ! \'none\', \' wearing just your underwear and shoes.\', \'.\')+\' "This bed is really soft. We could definitely spend some time here" Katja says.');
  // TODO-QSP: dynamic text: You both turn your heads towards the men looking very seductive'+iif($pantywornt...
  scene.text('You both turn your heads towards the men looking very seductive\'+iif($pantyworntype ! \'none\', \' while pulling at each other\'s underwear.\', \'.\')+\' "Why don\'t you come and join us?" you ask in a suggestive tone.');
  // TODO-QSP: end
  scene.actions([
    { label: 'The men join', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/two_men_home_sex2.jpg');
    // TODO-QSP: dynamic text: The men don't hesitate and walk up to you and Katja, not even waiting to take th...
    scene.text(`The men don't hesitate and walk up to you and Katja, not even waiting to take their clothes off. ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID1 ?? 0)]} starts to caress you, bending down and kissing your neck as your hand finds his groin.`);
    // TODO-QSP: dynamic text: At the same time, <<$npc_nickname[$npcID2]>> starts to play with Katja's breasts...
    scene.text(`At the same time, ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID2 ?? 0)]} starts to play with Katja's breasts and she starts rubbing his cock through his pants.`);
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 5);
    qspCall(s, 'arousal', 'foreplay', 3, ((s as any).npcID1 ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck some cock', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/two_men_home_sex3.jpg');
    // TODO-QSP: dynamic text: You unzip <<$npc_nickname[$npcID1]>>'s pants and take out his <<dick1>> cm <<$di...
    scene.text(`You unzip ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID1 ?? 0)]}'s pants and take out his ${((s as any).dick1 ?? 0)} cm ${((s as any).dick_girth1 ?? 0)} cock and start sucking it. Katja does the same with ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID2 ?? 0)]}.`);
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 5);
    if (((s as any).npc_throat ?? 0)?.['A14'] < ((s as any).dick2 ?? 0)) {
      ((s as any).npc_throat ?? {})['A14'] = (((s as any).npc_throat ?? {})['A14'] ?? 0) + (1);
    }
    qspCall(s, 'arousal', 'bj', 3, ((s as any).npcID1 ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Switch partner', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/two_men_home_sex4.jpg');
    scene.text('After a few minutes, Katja turns to you. "This is a real nice cock. You should try it."');
    scene.text('"This cock is also good, so let\'s switch" you reply.');
    // TODO-QSP: dynamic text: You give up <<$npc_nickname[$npcID1]>>'s cock and move over to the other side of...
    scene.text(`You give up ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID1 ?? 0)]}'s cock and move over to the other side of the bed, taking ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID2 ?? 0)]}'s ${((s as any).dick1 ?? 0)} cm ${((s as any).dick_girth1 ?? 0)} dick into your mouth.`);
    // TODO-QSP: dynamic text: Katja mirrors you and soon has her head going up and down on <<$npc_nickname[$np...
    scene.text(`Katja mirrors you and soon has her head going up and down on ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID1 ?? 0)]}'s dick.`);
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 5);
    if (((s as any).npc_throat ?? 0)?.['A14'] < ((s as any).dick1 ?? 0)) {
      ((s as any).npc_throat ?? {})['A14'] = (((s as any).npc_throat ?? {})['A14'] ?? 0) + (1);
    }
    qspCall(s, 'arousal', 'bj', 3, ((s as any).npcID2 ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue sucking', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/two_men_home_sex5.jpg');
    // TODO-QSP: dynamic text: As you're sucking <<$npc_nickname[$npcID2]>>'s cock, you suddenly feel your legs...
    scene.text(`As you're sucking ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID2 ?? 0)]}'s cock, you suddenly feel your legs being spread apart, followed shortly by Katja's soft tongue licking your pussy.`);
    // TODO-QSP: dynamic text: She stops for a moment before starting again, and you take a look and see that <...
    scene.text(`She stops for a moment before starting again, and you take a look and see that ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID1 ?? 0)]} has entered her pussy from behind.`);
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * -4) + 10);
    if (((s as any).npc_vag ?? 0)?.['A14'] < ((s as any).dick1 ?? 0)) {
      ((s as any).npc_vag ?? {})['A14'] = (((s as any).npc_vag ?? {})['A14'] ?? 0) + (1);
    }
    if (((s as any).npc_vag ?? 0)?.['A14']*2 < ((s as any).dick1 ?? 0)) {
      ((s as any).npc_vag ?? {})['A14'] = (((s as any).npc_vag ?? {})['A14'] ?? 0) + (1);
    }
    qspCall(s, 'arousal', 'bj', 3, ((s as any).npcID2 ?? 0), 'group');
    qspCall(s, 'arousal', 'cuni_give', (-3), ((s as any).npcID3 ?? 0), 'group', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get your pussy fucked', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/two_men_home_sex6.jpg');
    scene.text('"I also want my pussy stuffed," you say as you remove the cock from your mouth. You then turn around and get up on all fours, placing your butt at the edge of the bed.');
    // TODO-QSP: dynamic text: <<$npc_nickname[$npcID2]>> gets the message and as you start kissing Katja, he s...
    scene.text(`${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID2 ?? 0)]} gets the message and as you start kissing Katja, he slams his ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID2 ?? 0)]}'s ${((s as any).dick2 ?? 0)} cm ${((s as any).dick_girth2 ?? 0)} cock into your wet pussy.`);
    // TODO-QSP: dynamic text: You both enjoy getting your pussies pounded for a few minutes before <<$npc_nick...
    scene.text(`You both enjoy getting your pussies pounded for a few minutes before ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID1 ?? 0)]} says "I really want to fuck those assholes."`);
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 5);
    qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID2 ?? 0), 'group');
    qspCall(s, 'arousal', 'kiss', (-3), ((s as any).npcID3 ?? 0), 'group', 'lesbian');
    qspCall(s, 'stat', '');
    if (((s as any).katjaQW ?? 0)?.['anal_quest'] > 2  ||  ((s as any).katjaQW ?? 0)?.['anal_sex'] > 0) {
      if (((s as any).katjaQW ?? 0)?.['anal_sex'] > 0) {
        ((s as any).katjaQW ?? {})['anal_quest'] = 3;
      }
      scene.text('Katja immediately nods. "Yes, I want a cock in my butt".');
      scene.actions([
        { label: 'Get butt fucked', goto: ['katja_city_sex', 'two_guys_anal_sex1'] },
      ]);
    } else {
      if (((s as any).katjaQW ?? 0)?.['anal_quest'] > 0) {
        scene.text('Katja looks at you, a little hesitant. "You wanted to try, so here\'s your chance, but if you would rather wait then we can. It\'s up to you," you tell her.');
        scene.text('She bites her lip for a moment. "Okay… I want to try anal sex, but please be gentle! It\'s my first time," she says with a shakey voice.');
        scene.actions([
          { label: 'Get butt fucked', goto: ['katja_city_sex', 'two_guys_anal_sex1'] },
        ]);
      } else {
        scene.text('Katja quickly looks at you with fear in her eyes. "No butt fucking with us tonight, but you can continue to play with our pussies," you quickly tell them.');
        scene.actions([
          { label: 'Continue with pussy sex', goto: ['katja_city_sex', 'two_guys_pussy_sex'] },
        ]);
      }
    }
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

function enterTwoGuysPussySex(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/two_men_home_sex7.jpg');
  // TODO-QSP: dynamic text: "Okay, but now I want my cuck sucked some more. Turn around," <<$npc_nickname[$n...
  scene.text(`"Okay, but now I want my cuck sucked some more. Turn around," ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID2 ?? 0)]} says to you. You do as he says and take his cock back into your mouth.`);
  // TODO-QSP: dynamic text: "Get on top of her," <<$npc_nickname[$npcID1]>> tells Katja, and you feel her cr...
  scene.text(`"Get on top of her," ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID1 ?? 0)]} tells Katja, and you feel her crawling up onto your back and start fondling your breasts.`);
  // TODO-QSP: dynamic text: She soon starts moaning, and it's clear that <<$npc_nickname[$npcID1]>> has pene...
  scene.text(`She soon starts moaning, and it's clear that ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID1 ?? 0)]} has penetrated her pussy.`);
  ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 5);
  qspCall(s, 'arousal', 'bj', 3, ((s as any).npcID2 ?? 0), 'group');
  qspCall(s, 'arousal', 'foreplay', (-3), ((s as any).npcID3 ?? 0), 'group', 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Change partner', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/two_men_home_sex8.jpg');
    scene.text('After a few minutes, you feel Katja moving up further on your back so her head is just above yours.');
    // TODO-QSP: dynamic text: <<$npc_nickname[$npcID2]>> takes the opportunity to move his cock to Katja's mou...
    scene.text(`${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID2 ?? 0)]} takes the opportunity to move his cock to Katja's mouth instead. his balls are now in front of your face, so you start to lick them.`);
    // TODO-QSP: dynamic text: You then feel <<$npc_nickname[$npcID1]>>'s cock enter your pussy and he starts t...
    scene.text(`You then feel ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID1 ?? 0)]}'s cock enter your pussy and he starts to fuck you hard.`);
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 5);
    qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID1 ?? 0), 'group');
    qspCall(s, 'arousal', 'foreplay_give', (-3), ((s as any).npcID2 ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Change position', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/two_men_home_sex8.jpg');
    // TODO-QSP: dynamic text: "Since you seem to be such good friends, why don't you show us how much you love...
    scene.text(`"Since you seem to be such good friends, why don't you show us how much you love each other?" ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID1 ?? 0)]} says as he removes his cock from your pussy.`);
    scene.text('"Yes, let\'s show them!" Katja says as she gets off your back. You lie down on your back and Katja crawls on top of you. You\'re soon eating each other out.');
    // TODO-QSP: dynamic text: The men don't want to be left out for long, and you see <<$npc_nickname[$npcID1]...
    scene.text(`The men don't want to be left out for long, and you see ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID1 ?? 0)]}'s dick penetrate Katja's pussy as ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID2 ?? 0)]}'s slides into your own.`);
    scene.text('The men then pick up the pace and fuck you hard while you and Katja try to eat each other out.');
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 5);
    qspCall(s, 'arousal', 'vaginal', (-3), ((s as any).npcID2 ?? 0), 'group');
    qspCall(s, 'arousal', 'cuni_give', 5, ((s as any).npcID3 ?? 0), 'group', 'lesbian');
    qspCall(s, 'arousal', 'cuni', (-5), ((s as any).npcID3 ?? 0), 'group', 'lesbian');
    qspCall(s, 'stat', '');
    if (((s as any).katjaQW ?? 0)?.['horny'] >= 100) {
      ((s as any).katjaQW ?? {})['horny'] = 0;
      // TODO-QSP: dynamic text: Katja's mouth suddenly disappears from your pussy and you can hear her scream as...
      scene.text(`Katja's mouth suddenly disappears from your pussy and you can hear her scream as she cums. After that, ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID1 ?? 0)]} pulls out.`);
    } else {
      // TODO-QSP: dynamic text: After some time, <<$npc_nickname[$npcID1]>> pulls out.
      scene.text(`After some time, ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID1 ?? 0)]} pulls out.`);
    }
    scene.text('"I\'m close," he says. "I want to paint those pretty faces with my cum, so get down to the floor and suck our cocks."');
    scene.actions([
      { label: 'Get down on your knees', goto: ['katja_city_sex', 'two_guys_cumming'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterTwoGuysAnalSex1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/two_men_home_sex_anal_1.jpg');
  // TODO-QSP: dynamic text: The men start taking off their pants as you and Katja remove'+iif($pantyworntype...
  scene.text('The men start taking off their pants as you and Katja remove\'+iif($pantyworntype ! \'none\', \' your underwear and \', \' \')+\'shoes.');
  if (((s as any).katjaQW ?? 0)?.['anal_quest'] < 3) {
    scene.text('You then make the slightly nervous Katja get up on all fours again, while you lie down on your back in front of her.');
  } else {
    scene.text('Katja gets up on all fours again, while you lie down on your back in front of her.');
  }
  if (((s as any).auto_anal_lube ?? 0) === 1) {
    if (((s as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
      ((s as any).mc_inventory ?? {})['lubricant'] = (((s as any).mc_inventory ?? {})['lubricant'] ?? 0) - (1);
      scene.text('You tell the men to use the bottle of lube in your purse, and Katja says that there is also a bottle in hers.');
      // TODO-QSP: dynamic text: <<$npc_nickname[$npcID2]>> finds your bottle and lubes you up and you soon feel ...
      scene.text(`${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID2 ?? 0)]} finds your bottle and lubes you up and you soon feel the cool ointment being spread on your asshole by his finger.`);
      qspCall(s, 'arousal', 'anal_finger', 1, ((s as any).npcID2 ?? 0), 'lube', 'group');
    } else {
      // TODO-QSP: dynamic text: You tell the men to use the bottle of lube in your purse, but when <<$npc_nickna...
      scene.text(`You tell the men to use the bottle of lube in your purse, but when ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID2 ?? 0)]} checks he says it's empty.`);
      scene.text('Katja quickly says that there\'s a bottle in her purse which should be almost full.');
      // TODO-QSP: dynamic text: <<$npc_nickname[$npcID1]>> finds the bottle and uses some on Katja before passin...
      scene.text(`${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID1 ?? 0)]} finds the bottle and uses some on Katja before passing the bottle to ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID2 ?? 0)]}. You soon feel the cool ointment being spread on your asshole by his finger.`);
      qspCall(s, 'arousal', 'anal_finger', 1, ((s as any).npcID3 ?? 0), 'lube', 'group');
    }
    scene.text('Once you\'re both lubed up, the guys position their dicks against your assholes.');
    ((s as any).katjaQW ?? {})['lube'] = 1;
  } else {
    // TODO-QSP: dynamic text: <<$npc_nickname[$npcID2]>> applies some spit to your asshole and you can see <<$...
    scene.text(`${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID2 ?? 0)]} applies some spit to your asshole and you can see ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID1 ?? 0)]} doing the same to Katja before they position their dicks.`);
  }
  // TODO-QSP: dynamic text: You take the'+iif(katjaQW['anal_quest'] < 3, ' almost frightened, but also ', ' ...
  scene.text('You take the\'+iif(katjaQW[\'anal_quest\'] < 3, \' almost frightened, but also \', \' very \')+\'excited looking Katja\'s mouth into yours and start playing with her tongue.');
  ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (((s as any).katjaQW ?? {})?.['anal_quest']* 10 -(Math.floor(Math.random() * 26) + 0));
  qspCall(s, 'arousal', 'kiss', 3, ((s as any).npcID3 ?? 0), 'group', 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Ass fucking', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/two_men_home_sex_anal_2.jpg');
    // TODO-QSP: dynamic text: <<$npc_nickname[$npcID2]>> guides his dick into your '+iif(pcs_ass < dick2, 'tig...
    scene.text(`${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID2 ?? 0)]} guides his dick into your '+iif(pcs_ass < dick2, 'tight', 'well trained')+' asshole and starts to pound you.`);
    // TODO-QSP: dynamic text: At the same time, <<$npc_nickname[$npcID1]>> guides his cock '+iif(katjaQW['anal...
    scene.text(`At the same time, ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID1 ?? 0)]} guides his cock '+iif(katjaQW['anal_quest'] < 3, 'carefully', 'forcefully')+' into Katja.`);
    if (((s as any).npc_ass ?? 0)?.['A14'] + 4*((s as any).katjaQW ?? 0)?.['lube'] < ((s as any).dick1 ?? 0)) {
      ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) - (Math.floor(Math.random() * 11) + 10);
      // TODO-QSP: dynamic text: Katja lets out a scream. "Shit, it hurts more than '+iif(katjaQW['anal_quest'] <...
      scene.text('Katja lets out a scream. "Shit, it hurts more than \'+iif(katjaQW[\'anal_quest\'] < 3, \'I expected\', \'last time\')+\'! Slow down!" she cries.');
      // TODO-QSP: dynamic text: <<$npc_nickname[$npcID1]>> does so and lets Katja relax and get used to it. To d...
      scene.text(`${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID1 ?? 0)]} does so and lets Katja relax and get used to it. To district herself, she moves her mouth to your pussy as if your juice is the best painkiller there is.`);
      // TODO-QSP: dynamic text: After a few minutes, she looks back at <<$npc_nickname[$npcID1]>>. "You can cont...
      scene.text(`After a few minutes, she looks back at ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID1 ?? 0)]}. "You can continue, but'+iif(katjaQW['anal_quest'] < 3, ' go very slow. I still don't know if I can do it', 'be careful')+'." ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID1 ?? 0)]} does as he's told and Katja is also also enjoying it.`);
    } else {
      ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 11) + 10);
      if (((s as any).katjaQW ?? 0)?.['anal_quest'] < 3) {
        // TODO-QSP: dynamic text: "Wow, that didn't hurt. It actually feels nice," Katja says, sounding very surpr...
        scene.text(`"Wow, that didn't hurt. It actually feels nice," Katja says, sounding very surprised as ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID1 ?? 0)]} enters her. "I thought it would hurt the first time. Go on, fuck me faster!"`);
      } else {
        // TODO-QSP: dynamic text: Katja lets out a huge sigh. "Ah… This is great. Pound me faster <<$npc_nickname[...
        scene.text(`Katja lets out a huge sigh. "Ah… This is great. Pound me faster ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID1 ?? 0)]}!"`);
      }
      // TODO-QSP: dynamic text: <<$npc_nickname[$npcID1]>> does what she says and is soon pounding her asshole a...
      scene.text(`${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID1 ?? 0)]} does what she says and is soon pounding her asshole as if it was something she did every day. Her mouth finds your pussy and starts to lick it.`);
    }
    if (((s as any).npc_ass ?? 0)?.['A14'] < ((s as any).dick1 ?? 0)) {
      ((s as any).npc_ass ?? {})['A14'] = (((s as any).npc_ass ?? {})['A14'] ?? 0) + (1);
    }
    if (((s as any).npc_ass ?? 0)?.['A14']*2 < ((s as any).dick1 ?? 0)) {
      ((s as any).npc_ass ?? {})['A14'] = (((s as any).npc_ass ?? {})['A14'] ?? 0) + (1);
    }
    qspCall(s, 'arousal', 'anal', 3, ((s as any).npcID2 ?? 0), 'group');
    qspCall(s, 'arousal', 'cuni', (-2), ((s as any).npcID3 ?? 0), 'group', 'lesbian');
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: After a few minutes, <<$npc_nickname[$npcID1]>> says "I wanna try the girl you'r...
    scene.text(`After a few minutes, ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID1 ?? 0)]} says "I wanna try the girl you're with, ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID2 ?? 0)]}."`);
    // TODO-QSP: dynamic text: "You can have her pussy, I'll keep her ass," <<$npc_nickname[$npcID2]>> replies.
    scene.text(`"You can have her pussy, I'll keep her ass," ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID2 ?? 0)]} replies.`);
    scene.actions([
      { label: 'Agree to double penetration', goto: ['katja_city_sex', 'two_guys_dp'] },
      { label: 'Refuse', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/two_men_home_sex_anal_2.jpg');
    scene.text('"No. I don\'t want two cocks in me at the same time," you tell them.');
    // TODO-QSP: dynamic text: "Okay," <<$npc_nickname[$npcID1]>> says. "Then let's change positions."
    scene.text(`"Okay," ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID1 ?? 0)]} says. "Then let's change positions."`);
    scene.actions([
      { label: 'Change position', goto: ['katja_city_sex', 'two_guys_anal_sex2'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterTwoGuysAnalSex2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/two_men_home_sex_anal_3.jpg');
  // TODO-QSP: dynamic text: The men pull out and <<$npc_nickname[$npcID1]>> lies down on the bed. "Get up an...
  scene.text(`The men pull out and ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID1 ?? 0)]} lies down on the bed. "Get up and lower your ass on it, reverse cowgirl," he tells Katja.`);
  if (((s as any).katjaQW ?? 0)?.['anal_quest'] < 3) {
    scene.text('She looks a little confused and you explain what to do before getting down on all fours to help her.');
  } else {
    // TODO-QSP: dynamic text: "Help me <<$pcs_nickname>>," she says and you get down on all fours and help her...
    scene.text(`"Help me ${((s as any).pcs_nickname ?? 0)}," she says and you get down on all fours and help her.`);
  }
  // TODO-QSP: dynamic text: Seeing you with your ass in the air while Katja slides down onto <<$npc_nickname...
  scene.text(`Seeing you with your ass in the air while Katja slides down onto ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID1 ?? 0)]} dick, ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID2 ?? 0)]} jams his hard cock into your ass.`);
  ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 11) + 5);
  if (((s as any).npc_ass ?? 0)?.['A14'] + 4*((s as any).katjaQW ?? 0)?.['lube'] < ((s as any).dick1 ?? 0)) {
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) - (10);
  }
  qspCall(s, 'arousal', 'anal', (-1), ((s as any).npcID2 ?? 0), 'group');
  qspCall(s, 'arousal', 'foreplay_give', 3, ((s as any).npcID3 ?? 0), 'group', 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'More aAss fucking', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/two_men_home_sex_anal_4\'+iif(katjaQW[\'horny\'] >= 100, \'a\', \'b\')+\'.jpg');
    scene.text('The men start to fuck you hard, and seeing Katja\'s pussy in front of you, you decide to lick it.');
    if (((s as any).katjaQW ?? 0)?.['horny'] >= 100) {
      ((s as any).katjaQW ?? {})['horny'] = 0;
      scene.text('That helps bring Katja over the edge, and she soon cums with a loud scream.');
    } else {
      // TODO-QSP: dynamic text: After a fucking you for a little while, <<$npc_nickname[$npcID2]>> pulls out of ...
      scene.text(`After a fucking you for a little while, ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID2 ?? 0)]} pulls out of your ass and moves to make Katja suck his dick instead.`);
    }
    // TODO-QSP: dynamic text: "I'm close," <<$npc_nickname[$npcID1]>> says. "I want to paint those pretty face...
    scene.text(`"I'm close," ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID1 ?? 0)]} says. "I want to paint those pretty face with my cum, so get down to the floor and suck our cocks."`);
    qspCall(s, 'arousal', 'anal', (-2), ((s as any).npcID2 ?? 0), 'group');
    qspCall(s, 'arousal', 'cuni_give', 3, ((s as any).npcID3 ?? 0), 'group', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get down on your knees', handler: (st: GameState) => {
    // TODO-QSP: gt 'katja_city_sex', 'two_guys_cumming', 1
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterTwoGuysDp(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/two_men_home_sex_dp1.jpg');
  // TODO-QSP: dynamic text: <<$npc_nickname[$npcID1]>> lies down on his back with his <<dick1>> cm <<$dick_g...
  scene.text(`${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID1 ?? 0)]} lies down on his back with his ${((s as any).dick1 ?? 0)} cm ${((s as any).dick_girth1 ?? 0)} cock standing right up. You mount it as Katja stands up and presents her pussy to you, so you lick it.`);
  // TODO-QSP: dynamic text: Meanwhile, <<$npc_nickname[$npcID2]>> has taken position behind you, and you fee...
  scene.text(`Meanwhile, ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID2 ?? 0)]} has taken position behind you, and you feel '+iif(pcs_ass < dick2, 'some pain', 'only pleasure')+' as he pushes his cock into your asshole.`);
  ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 0);
  qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID1 ?? 0), 'group');
  qspCall(s, 'arousal', 'anal', (-3), ((s as any).npcID2 ?? 0), 'group');
  qspCall(s, 'arousal', 'cuni_give', (-3), ((s as any).npcID3 ?? 0), 'group', 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get both your holes pounded', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/two_men_home_sex_dp2.jpg');
    scene.text('The men fuck both of your holes hard as Katja turns around and presents her ass to you, so you start to lick it.');
    // TODO-QSP: dynamic text: After a few minutes, <<$npc_nickname[$npcID1]>> says "It's time for the redhead ...
    scene.text(`After a few minutes, ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID1 ?? 0)]} says "It's time for the redhead to get this treatment."`);
    // TODO-QSP: dynamic text: "Yes. Let's switch." <<$npc_nickname[$npcID2]>> agrees.
    scene.text(`"Yes. Let's switch." ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID2 ?? 0)]} agrees.`);
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 0);
    qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID1 ?? 0), 'group');
    qspCall(s, 'arousal', 'anal', (-3), ((s as any).npcID2 ?? 0), 'group');
    qspCall(s, 'arousal', 'rimming_give', (-3), ((s as any).npcID3 ?? 0), 'group', 'lesbian');
    qspCall(s, 'stat', '');
    if (((s as any).katjaQW ?? 0)?.['dp'] === 0) {
      scene.text('"I\'ve never tried something like that!" Katja says, a little shocked. "I don\'t know if I\'ll… be able to…" she stammers.');
      // TODO-QSP: iif(katjaQW['anal_quest'] < 3, '"You haven''t tried anal before tonight and that went well, so why d...
      if (qspFunc(s, 'katja_procedural', 'willing_to_be_naughty') < 100  ||  ((s as any).katjaQW ?? 0)?.['horny'] < 75  ||  Math.max(((s as any).npc_vag ?? 0)?.['A14'], ((s as any).npc_ass ?? 0)?.['A14'] + 4*((s as any).katjaQW ?? 0)?.['lube']) <((s as any).dick1 ?? 0)) {
        scene.text('"No," she replies. "I don\'t feel like trying it."');
        // TODO-QSP: dynamic text: The men look disappointed, but understand. "At least let me fuck your ass again,...
        scene.text(`The men look disappointed, but understand. "At least let me fuck your ass again," ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID1 ?? 0)]} says.`);
        scene.text('"Okay, we can do that," she says.');
        scene.actions([
          { label: 'More butt fucking', goto: ['katja_city_sex', 'two_guys_anal_sex2'] },
        ]);
      } else {
        scene.text('After a long pause, Katja relents "Okay, but please be gentle."');
        scene.text('The two men look very excited.');
        scene.actions([
          { label: 'Watch Katja\'s first DP', goto: ['katja_city_sex', 'two_guys_katja_dp'] },
        ]);
      }
    } else {
      if (((s as any).katjaQW ?? 0)?.['dp'] < 5) {
        scene.text('"Okay… But please be gentle," she says, making the men very excited.');
      } else {
        if (((s as any).katjaQW ?? 0)?.['dp'] < 10) {
          scene.text('"Okay. Let\'s do it," she says, making the men very excited.');
        } else {
          scene.text('"What are you waiting for? I need both my holes stuffed right now!" she says, making the men almost lose their minds in excitement.');
        }
      }
      scene.actions([
        { label: 'Katja gets a DP', goto: ['katja_city_sex', 'two_guys_katja_dp'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterTwoGuysKatjaDp(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/two_men_home_sex_katja_dp1\'+iif(npc_ass[\'A14\'] < dick2, \'a\', \'b\')+\'.jpg');
  // TODO-QSP: dynamic text: <<$npc_nickname[$npcID2]>> gets off you. "My turn to lie down."
  scene.text(`${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID2 ?? 0)]} gets off you. "My turn to lie down."`);
  // TODO-QSP: dynamic text: You climb off <<$npc_nickname[$npcID1]>>, who gets up so <<$npc_nickname[$npcID2...
  scene.text(`You climb off ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID1 ?? 0)]}, who gets up so ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID2 ?? 0)]} can lie down.`);
  // TODO-QSP: dynamic text: When he lies down, you give his cock some licks. "So I sit down with your cock i...
  scene.text(`When he lies down, you give his cock some licks. "So I sit down with your cock in my pussy like ${((s as any).pcs_nickname ?? 0)} did?" Katja asks.`);
  // TODO-QSP: dynamic text: "No. I want your ass," <<$npc_nickname[$npcID2]>> replies.
  scene.text(`"No. I want your ass," ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID2 ?? 0)]} replies.`);
  // TODO-QSP: dynamic text: Katja looks '+iif(katjaQW['dp'] = 0, 'perplexed, and you have to explain to her ...
  scene.text(`Katja looks '+iif(katjaQW['dp'] = 0, 'perplexed, and you have to explain to her how she's supposed to sit.', 'excited, and positions her ass above his cock.')+' You then help guide ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID2 ?? 0)]}'s cock into hes ass as she lowers herself down.`);
  if (((s as any).npc_ass ?? 0)?.['A14'] + 4*((s as any).katjaQW ?? 0)?.['lube'] <((s as any).dick2 ?? 0)) {
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) - (Math.floor(Math.random() * 11) + 10);
    ((s as any).katjaQW ?? {})['slut'] = (((s as any).katjaQW ?? {})['slut'] ?? 0) - (5);
    // TODO-QSP: dynamic text: "Shit, it hurts!" she screams as <<$npc_nickname[$npcID2]>>'s cock stretches out...
    scene.text(`"Shit, it hurts!" she screams as ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID2 ?? 0)]}'s cock stretches out her asshole. You start to lick her breasts to try and distract her from the pain while ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID1 ?? 0)]} looks on, waiting until she's ready.`);
    // TODO-QSP: dynamic text: After a minute, she's able to speak. "You can try to put it in my pussy." <<$npc...
    scene.text(`After a minute, she's able to speak. "You can try to put it in my pussy." ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID1 ?? 0)]} does so, and it goes in without any problems. The men then slowly start to fuck her.`);
    qspCall(s, 'arousal', 'foreplay', 3, ((s as any).npcID3 ?? 0), 'group', 'lesbian');
  } else {
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 11) + 10);
    // TODO-QSP: dynamic text: "Ahh. It feels good in my ass!" she says as <<$npc_nickname[$npcID2]>>'s dick st...
    scene.text(`"Ahh. It feels good in my ass!" she says as ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID2 ?? 0)]}'s dick stretches out her asshole. You start to suck ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID1 ?? 0)]}'s cock to get it ready for Katja's pussy.`);
    // TODO-QSP: dynamic text: "You can put it in my pussy now," Katja says, which <<$npc_nickname[$npcID1]>> d...
    scene.text(`"You can put it in my pussy now," Katja says, which ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID1 ?? 0)]} does, and it goes in without any problems. The men then slowly start to fuck her.`);
    qspCall(s, 'arousal', 'bj', 3, ((s as any).npcID1 ?? 0), 'group');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Watch Katja get double penetrated', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/two_men_home_sex_katja_dp2.jpg');
    // TODO-QSP: dynamic text: You kiss Katja's belly and try to lick her clit, but it gets harder and harder a...
    scene.text(`You kiss Katja's belly and try to lick her clit, but it gets harder and harder as the men start to move faster, especially since ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID1 ?? 0)]} is slamming into Katja's pussy at a very fast pace.`);
    qspCall(s, 'arousal', 'cuni_give', 3, ((s as any).npcID3 ?? 0), 'group', 'lesbian');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    if (((s as any).katjaQW ?? 0)?.['horny'] >= 100) {
      ((s as any).katjaQW ?? {})['horny'] = 0;
      // TODO-QSP: dynamic text: She makes more and more noise until she cums with a huge scream, which takes her...
      scene.text(`She makes more and more noise until she cums with a huge scream, which takes her some time to calm down from. After that, ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID1 ?? 0)]} pulls out.`);
    } else {
      // TODO-QSP: dynamic text: She clearly enjoys it and is making a lot of noise, '+iif(npc_ass['A14'] + 4*kat...
      scene.text(`She clearly enjoys it and is making a lot of noise, '+iif(npc_ass['A14'] + 4*katjaQW['lube'] <dick2, 'but some of it is clearly also from ', ' and she doesn't seem to feel any')+' pain. Before she can cum, ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID1 ?? 0)]} pulls out.`);
    }
    scene.text('"I\'m close," he says. "I want to paint those pretty faces with my cum, so get down to the floor and suck our cocks."');
    ((s as any).katjaQW ?? {})['dp'] = (((s as any).katjaQW ?? {})['dp'] ?? 0) + (1);
    if (((s as any).npc_vag ?? 0)?.['A14'] < ((s as any).dick1 ?? 0)) {
      ((s as any).npc_vag ?? {})['A14'] = (((s as any).npc_vag ?? {})['A14'] ?? 0) + (1);
    }
    if (((s as any).npc_vag ?? 0)?.['A14']*2 < ((s as any).dick1 ?? 0)) {
      ((s as any).npc_vag ?? {})['A14'] = (((s as any).npc_vag ?? {})['A14'] ?? 0) + (1);
    }
    if (((s as any).npc_ass ?? 0)?.['A14'] < ((s as any).dick2 ?? 0)) {
      ((s as any).npc_ass ?? {})['A14'] = (((s as any).npc_ass ?? {})['A14'] ?? 0) + (1);
    }
    if (((s as any).npc_ass ?? 0)?.['A14']*2 < ((s as any).dick2 ?? 0)) {
      ((s as any).npc_ass ?? {})['A14'] = (((s as any).npc_ass ?? {})['A14'] ?? 0) + (1);
    }
    scene.actions([
      { label: 'Get down on your knees', handler: (st: GameState) => {
    // TODO-QSP: gt 'katja_city_sex', 'two_guys_cumming', 2
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterTwoGuysCumming(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/two_men_home_sex_cuming1.jpg');
  scene.text('As the men stand up, you and Katja get down on your knees in front of the bed with your backs to each other.');
  // TODO-QSP: dynamic text: You take <<$npc_nickname[$npcID2]>>'s cock into your mouth as Katja starts to su...
  scene.text(`You take ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID2 ?? 0)]}'s cock into your mouth as Katja starts to suck ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID1 ?? 0)]}'s dick. She also uses her other hand to play with your clit.`);
  scene.text('After a few minutes, you can hear the grunting of the men signaling that they\'re about to cum.');
  qspCall(s, 'arousal', 'bj', 3, ((s as any).npcID2 ?? 0), 'group');
  qspCall(s, 'arousal', 'clit_finger', (-3), ((s as any).npcID3 ?? 0), 'group', 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Cum', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/sex/two_men_home_sex_cuming2.jpg');
    // TODO-QSP: dynamic text: <<$npc_nickname[$npcID2]>> cums first, hitting you square in the face.
    scene.text(`${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID2 ?? 0)]} cums first, hitting you square in the face.`);
    // TODO-QSP: dynamic text: As he finishes, you can hear Katja getting <<$npc_nickname[$npcID1]>> off. Just ...
    scene.text(`As he finishes, you can hear Katja getting ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID1 ?? 0)]} off. Just as you turn to see, he also cums, getting more cum on your face and in your mouth than on Katja's.`);
    // TODO-QSP: dynamic text: Once he's finished, the men step back. "Show us those pretty faces," <<$npc_nick...
    scene.text(`Once he's finished, the men step back. "Show us those pretty faces," ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID1 ?? 0)]} says, and you both turn and look at them and start kissing each other with their cum in your mouths, which clearly pleases them.`);
    scene.text('After swapping cum for a little while, you both get up and ask to go to the bathroom to get cleaned up.');
    qspCall(s, 'arousal', 'kiss', 3, 'lesbian');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_call', 'face', ((s as any).npcID1 ?? 0), 1);
    qspCall(s, 'cum_call', 'face', ((s as any).npcID2 ?? 0), 1);
    qspCall(s, 'cum_call', 'mouth', ((s as any).npcID1 ?? 0), 1);
    qspCall(s, 'cum_call', 'mouth', ((s as any).npcID2 ?? 0), 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get cleaned up', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 7;
    (s as any).cumspclnt = 1;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/claining_up_after_sex.jpg');
    scene.text('On the way to the bathroom, you pick up your clothes, then spend some time cleaning the rest of their cum off your faces.');
    if (((s as any).locArgs?.[1] ?? 0) === 2) {
      if (((s as any).katjaQW ?? 0)?.['anal_quest'] < 3) {
        ((s as any).katjaQW ?? {})['anal_quest'] = 3;
        ((s as any).katjaQW ?? {})['slut'] = (((s as any).katjaQW ?? {})['slut'] ?? 0) + (Math.floor(Math.random() * 11) + 10);
        scene.text('"Impressive. First time doing anal and you\'re already getting double penetrated. What a slut you\'ve become! How was it?" you ask Katja.');
        if (((s as any).katjaQW ?? 0)?.['horny'] === 0) {
          // TODO-QSP: dynamic text: "It was amazing! I came so hard. When they both really started to fuck me fast, ...
          scene.text('"It was amazing! I came so hard. When they both really started to fuck me fast, I \'+iif(npc_ass[\'A14\'] + 4*katjaQW[\'lube\'] <dick2, \'completely forgot that the dick in my ass was so large that it hurt.\', \'was overwhelmed by the sensations\')+\'." she says as her face turns completely red.');
        } else {
          if (((s as any).npc_ass ?? 0)?.['A14'] + 4*((s as any).katjaQW ?? 0)?.['lube'] <((s as any).dick2 ?? 0)) {
            scene.text('"It hurt a lot, so I\'m not sure I really know how to feel about it. If I try again, then it has to be with a less well-endowed guy," she answers.');
          } else {
            scene.text('"It was interesting. It didn\'t hurt, but I didn\'t cum either. I think I need to try it again to really know what I think about it," she says as her face turns more red.');
          }
        }
      } else {
        if (((s as any).katjaQW ?? 0)?.['dp'] === 1) {
          ((s as any).katjaQW ?? {})['slut'] = (((s as any).katjaQW ?? {})['slut'] ?? 0) + (Math.floor(Math.random() * 6) + 5);
          scene.text('"Welcome to the slut club!" you smile. "So how was it getting it in both holes at the same time?"');
          if (((s as any).katjaQW ?? 0)?.['horny'] === 0) {
            // TODO-QSP: dynamic text: "It was amazing! I came so hard. When they both really started to fuck me fast, ...
            scene.text('"It was amazing! I came so hard. When they both really started to fuck me fast, I \'+iif(npc_ass[\'A14\'] + 4*katjaQW[\'lube\'] <dick2, \'completely forgot that the dick in my ass was so large that it hurt.\', \'was overwhelmed by the sensations\')+\'." she says as her face turns completely red.');
          } else {
            if (((s as any).npc_ass ?? 0)?.['A14'] + 4*((s as any).katjaQW ?? 0)?.['lube'] <((s as any).dick2 ?? 0)) {
              scene.text('"It hurt a lot, so I\'m not sure I really know how to feel about it. If I try again, then it has to be with a less well-endowed guy since I do like anal sex normally," she answers.');
            } else {
              scene.text('"It was interesting. It didn\'t hurt, but I didn\'t cum either. I think I need to try it again to really know what I think about it," she says as her face turns even more red.');
            }
          }
        } else {
          ((s as any).katjaQW ?? {})['slut'] = (((s as any).katjaQW ?? {})['slut'] ?? 0) + (Math.min(5, ((s as any).katjaQW ?? 0)?.['dp']) + 1);
          scene.text('"So how were these guys compared to others that have destroyed both of your holes?" you ask.');
          if (((s as any).katjaQW ?? 0)?.['horny'] === 0) {
            // TODO-QSP: dynamic text: "It was pretty good. I came hard, '+iif(npc_ass['A14'] + 4*katjaQW['lube'] <dick...
            scene.text('"It was pretty good. I came hard, \'+iif(npc_ass[\'A14\'] + 4*katjaQW[\'lube\'] <dick2, \'even if the dick in my ass was so large that it hurt.\', \'so they clearly knows how to treat a lady\')+\'." she says.');
          } else {
            if (((s as any).npc_ass ?? 0)?.['A14'] + 4*((s as any).katjaQW ?? 0)?.['lube'] <((s as any).dick2 ?? 0)) {
              scene.text('"Destroyed is the right word. It hurt a lot. Next time I either need guys that know how to be gentle or have smaller dicks," she answers before she laughs about how casually she talks about things like this now.');
            } else {
              scene.text('"They definitely do not compare well. It didn\'t hurt, but these amateurs didn\'t bring me to orgasm. Next time we need to find somebody that knows what they\'re doing," she says before she laughs about how casually she talks about things like this now.');
            }
          }
        }
      }
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 1) {
        if (((s as any).katjaQW ?? 0)?.['anal_quest'] < 3) {
          ((s as any).katjaQW ?? {})['anal_quest'] = 3;
          ((s as any).katjaQW ?? {})['slut'] = (((s as any).katjaQW ?? {})['slut'] ?? 0) + (Math.floor(Math.random() * 6) + 5);
          scene.text('"So, how was anal sex? Was it what you expected?" you ask.');
          if (((s as any).katjaQW ?? 0)?.['horny'] === 0) {
            // TODO-QSP: dynamic text: "It was great. I didn't think I would be able to cum from a cock in my ass. '+ii...
            scene.text('"It was great. I didn\'t think I would be able to cum from a cock in my ass. \'+iif(npc_ass[\'A14\'] + 4*katjaQW[\'lube\'] <dick2, \'It hurt at the start, but soon I forgot about the pain.\', \'I thought there would be some pain, but there was none.\')+\' Definitely something I will be doing again," she says as her face turns completely red.');
          } else {
            if (((s as any).npc_ass ?? 0)?.['A14'] + 4*((s as any).katjaQW ?? 0)?.['lube'] <((s as any).dick1 ?? 0)) {
              scene.text('"It hurt a lot. Next time, if there is a next time, I need a guy with a smaller dick," she answers before she laughs about how casually she talks about things like this now.');
            } else {
              scene.text('"It was okay, I guess. They didn\'t get me off, but at least it didn\'t hurt. I probably need to try it again to have a proper opinion," she says before she laughs about how casually she talks about things like this now.');
            }
          }
        } else {
          scene.text('"So were they any good?" you ask.');
          if (((s as any).katjaQW ?? 0)?.['horny'] === 0) {
            ((s as any).katjaQW ?? {})['slut'] = (((s as any).katjaQW ?? {})['slut'] ?? 0) + (Math.floor(Math.random() * 4) + 2);
            // TODO-QSP: dynamic text: "They were pretty good, '+iif(npc_ass['A14'] + 4*katjaQW['lube'] <dick1, ' even ...
            scene.text(`"They were pretty good, '+iif(npc_ass['A14'] + 4*katjaQW['lube'] <dick1, ' even if ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID1 ?? 0)]}'s dick was so large it hurt.', ' no pain at all.')+' I say they're approved," she says as her face turns completely red and she laughs about how casually she talks about things like this now.`);
          } else {
            if (((s as any).npc_ass ?? 0)?.['A14'] + 4*((s as any).katjaQW ?? 0)?.['lube'] < ((s as any).dick1 ?? 0)) {
              ((s as any).katjaQW ?? {})['slut'] = (((s as any).katjaQW ?? {})['slut'] ?? 0) - (Math.floor(Math.random() * 2) + 1);
              scene.text('"No, they were not. It hurt a lot. Next time, I need a guy with a smaller dick," she answers, not looking satisfied at all.');
            } else {
              scene.text('"Not really. They did okay in not making it hurt, but they don\'t know how to please a lady, only thinking about how to get themselves off," she complains.');
            }
          }
        }
      } else {
        scene.text('"So were they any good?" you ask.');
        if (((s as any).katjaQW ?? 0)?.['horny'] === 0) {
          ((s as any).katjaQW ?? {})['slut'] = (((s as any).katjaQW ?? {})['slut'] ?? 0) + (Math.floor(Math.random() * 2) + 1);
          // TODO-QSP: dynamic text: "They were pretty good, '+iif(npc_vag['A14']<dick1, ' even if <<$npc_nickname[$n...
          scene.text(`"They were pretty good, '+iif(npc_vag['A14']<dick1, ' even if ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID1 ?? 0)]}'s dick was so large it hurt.', ' ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID1 ?? 0)]}'s dick fit nicely in my pussy.')+' I say that he's approved, but I only sucked ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID2 ?? 0)]}' cock, so I can't say anything about him," she replies as her face turns completely red and she laughs about how casually she rates sex skills now.`);
        } else {
          if (((s as any).npc_vag ?? 0)?.['A14'] <((s as any).dick1 ?? 0)) {
            ((s as any).katjaQW ?? {})['slut'] = (((s as any).katjaQW ?? {})['slut'] ?? 0) - (Math.floor(Math.random() * 2) + 1);
            // TODO-QSP: dynamic text: "No, they were not. It hurt a lot since <<$npc_nickname[$npcID1]>>'s cock was to...
            scene.text(`"No, they were not. It hurt a lot since ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID1 ?? 0)]}'s cock was too big for my pussy. Next time, I need a guy with a smaller dick," she answers, not looking satisfied at all.`);
          } else {
            scene.text('"Not really. They did okay, but they don\'t know how to please a lady, only thinking about how to get themselves off," she complains.');
          }
        }
      }
    }
    // TODO-QSP: dynamic text: You continue to talk about the experience as you get dressed. <<$npc_nickname[$n...
    scene.text(`You continue to talk about the experience as you get dressed. ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID1 ?? 0)]} is sleeping naked on the bed and ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID2 ?? 0)]} is absentmindedly getting dressed when you come back in the room.`);
    scene.text('"That was fun, but we\'ll be going now," you say.');
    scene.text('"Yeah, it was fun. Take care," Katja chimes in.');
    // TODO-QSP: dynamic text: "You two were great. Rarely have I gotten such fine asses and pussies. Get home ...
    scene.text(`"You two were great. Rarely have I gotten such fine asses and pussies. Get home safely," ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID2 ?? 0)]} says, clearly not in the mood for more talking. ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID1 ?? 0)]}'s only response is to start snoring.`);
    scene.actions([
      { label: 'Walk to the metro', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    ((s as any).katjaQW ?? {})['on_date'] = 1;
    if (((s as any).katjaQW ?? 0)?.['lube'] === 1) {
      ((s as any).katjaQW ?? {})['lube'] = 0;
    }
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/walking_home_at_night.jpg');
    scene.text('You leave the apartment and walk out into the streets, heading in the direction of the nearest metro station.');
    scene.text('You discuss the sex you just had before you reach the station.');
    scene.actions([
      { label: 'Enter the station', goto: ['katja_city', 'metro'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'walking_home_with_a_guy':
      enterWalkingHomeWithAGuy(s, scene);
      break;
    case 'after_drugs':
      enterAfterDrugs(s, scene);
      break;
    case 'first_time':
      enterFirstTime(s, scene);
      break;
    case 'one_guy_start':
      enterOneGuyStart(s, scene);
      break;
    case 'on_guy_sex1':
      enterOnGuySex1(s, scene);
      break;
    case 'going_home':
      enterGoingHome(s, scene);
      break;
    case 'blindfold_sex_start':
      enterBlindfoldSexStart(s, scene);
      break;
    case 'blindfold_sex1':
      enterBlindfoldSex1(s, scene);
      break;
    case 'blindfold_sex2':
      enterBlindfoldSex2(s, scene);
      break;
    case 'safe_word_said':
      enterSafeWordSaid(s, scene);
      break;
    case 'walking_home_with_two_guys':
      enterWalkingHomeWithTwoGuys(s, scene);
      break;
    case 'two_guys_start':
      enterTwoGuysStart(s, scene);
      break;
    case 'two_guys_pussy_sex':
      enterTwoGuysPussySex(s, scene);
      break;
    case 'two_guys_anal_sex1':
      enterTwoGuysAnalSex1(s, scene);
      break;
    case 'two_guys_anal_sex2':
      enterTwoGuysAnalSex2(s, scene);
      break;
    case 'two_guys_dp':
      enterTwoGuysDp(s, scene);
      break;
    case 'two_guys_katja_dp':
      enterTwoGuysKatjaDp(s, scene);
      break;
    case 'two_guys_cumming':
      enterTwoGuysCumming(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const katja_city_sex: LocationDef = {
  name: 'katja_city_sex',
  title: 'It doesn\'t take long before you arrive at his building and h',
  region: 'other',
  locationType: 'public_outdoors',
  enter: enter,
};
