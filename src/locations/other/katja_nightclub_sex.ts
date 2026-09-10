import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'npcgeneratec', '', 0, '', Math.floor(Math.random() * 38) + 18, 4);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
  qspCall(s, 'beverage', 'cocktail_stats');
  (s as any).katjaQW['drinks'] = ((s as any).katjaQW['drinks'] ?? 0) + (Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  scene.img(`images/characters/pavlovsk/school/girl/katja/uni/nightclub/private_with_guy${Math.floor(Math.random() * 2) + 1}.jpg`);
  // TODO-QSP: dynamic text: As you sit on one of the couches in the room, he tells you that he's already ord...
  scene.text(`As you sit on one of the couches in the room, he tells you that he's already ordered drinks for you. He then introduces himself as ${((s as any).npcdesc ?? 0)} and asks for your names.`);
  scene.text('The cocktails arrive before you and Katja finish your introduction, and you start sipping your drinks as you continue chatting.');
  if ((Math.floor(Math.random() * 4) + 0) > 0) {
    scene.actions([
      { label: 'Enjoy your drinks', handler: (st: GameState) => {
    // TODO-QSP: gt 'katja_nightclub_sex', 'private_room2', 0
  } },
    ]);
  } else {
    if (((s as any).katjaQW ?? 0)?.['coke_stage'] === -1) {
      // TODO-QSP: dynamic text: "Why don't we try some other good stuff?" <<$npcdesc>> asks as he pulls out a sm...
      scene.text(`"Why don't we try some other good stuff?" ${((s as any).npcdesc ?? 0)} asks as he pulls out a small bag with white powder inside.`);
      scene.text('"I\'m out of here," Katja says before getting up and abruptly leaving.');
      // TODO-QSP: dynamic text: <<$npcdesc>> looks confused. "What was that about?"
      scene.text(`${((s as any).npcdesc ?? 0)} looks confused. "What was that about?"`);
      scene.text('"My friend had an addiction problem and avoids drugs now," you explain. "Sorry, but I need to check up on her."');
      // TODO-QSP: dynamic text: You get up and leave <<$npcdesc>> behind.
      scene.text(`You get up and leave ${((s as any).npcdesc ?? 0)} behind.`);
      scene.actions([
        { label: 'Find Katja', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    // TODO-QSP: dynamic text: You leave the room and find Katja on the edge of the dance floor with tears in h...
    scene.text(`You leave the room and find Katja on the edge of the dance floor with tears in her eyes. "I'm sorry ${((s as any).pcs_nickname ?? 0)}, but the sight of those drugs just brought up all these feelings in me that I couldn't control," she says and starts crying.`);
    scene.text('"There there, no need to hold it in. Let it all out," you say as you hug her. She hugs you back and you just stand there for some time until she stops crying.');
    scene.text('"Let\'s dance," you say and drag her to the dance floor.');
    scene.text('Dancing helps her forget the bad experience and, after a few minutes, she is her normal, happy self again.');
    qspCall(s, 'katja_nightclub', 'dance_end');
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Enjoy your drinks', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/disco_guy_coke.jpg');
    // TODO-QSP: dynamic text: "Why don't we try some other good stuff?" <<$npcdesc>> asks as he pulls out a sm...
    scene.text(`"Why don't we try some other good stuff?" ${((s as any).npcdesc ?? 0)} asks as he pulls out a small bag with white powder inside.`);
    if (((s as any).katjaQW ?? 0)?.['coke_stage'] === 0) {
      scene.text('Katja looks confused at first, but as he pours some of the powder onto the table and makes several lines, she seems to realize what\'s going on and starts to look skeptical.');
      scene.text('"I\'ll go first, if you ladies don\'t mind," he says. As he sniffs the first line, Katja watches curiously. Once he finishes, he looks around. "Who\'s next?" he asks as he holds out the tube he used to sniff the cocaine.');
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
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('"Thanks, but that\'s not for me," you say, and Katja quickly and vehemently shakes her head when he tries to hand her the tube.');
    scene.text('"Well, more for me then," he says and does a few more lines before packing the drugs away.');
    scene.actions([
      { label: 'Continue talking', handler: (st: GameState) => {
    // TODO-QSP: gt 'katja_nightclub_sex', 'private_room2', 1
  } },
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
    scene.text('You take the tube and snort two lines as Katja looks at you with wide-open eyes.');
    // TODO-QSP: dynamic text: After a short moment, it hits you and you feel the full effect of the drug. <<$n...
    scene.text(`After a short moment, it hits you and you feel the full effect of the drug. ${((s as any).npcdesc ?? 0)} takes the tube from you and tries to hand it to Katja, but she doesn't take it. "I've never done this before…"`);
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
    scene.text('"Try it. It won\'t harm you," you say, but she still looks skeptical.');
    // TODO-QSP: dynamic text: "I don't know, <<$pcs_nickname>>. I'm not sure it's a good idea. I don't think i...
    scene.text(`"I don't know, ${((s as any).pcs_nickname ?? 0)}. I'm not sure it's a good idea. I don't think it's for me," she replies.`);
    scene.text('"You won\'t know unless you try it. See, we are both fine," you continue.');
    scene.text('"Why should I?" she asks.');
    scene.text('"Because it feels great? You can\'t say it\'s not for you until you actually know how it feels."');
    // TODO-QSP: dynamic text: She finally relents. With a shaking hand, she takes the tube and places it at he...
    scene.text(`She finally relents. With a shaking hand, she takes the tube and places it at her nostril before slowly bending down to the line of cocaine that ${((s as any).npcdesc ?? 0)} prepared for her.`);
    scene.text('She slowly starts sniffing it, but jerks her head back when the powder starts to itch in her nose. "Do it faster. All at once!" you tell her, and she gets down again, still shaking and gets ready.');
    scene.text('This time, she snorts it all in on go and raises her head from the table. It\'s clear that the powder itches her nostrils and she looks like she\'s about to sneeze. "Don\'t sneeze! Keep it in!" you tell her and she moves her hand to her nose to prevent it from coming out.');
    scene.text('After a moment, her discomfort resides and she starts to talk. "I don\'t feel anything, except itching in my nose. I do-" She stops mid-sentence and her eyes become wide open. "Wow!" is all she can say.');
    scene.text('"See? I told you it would feel great!" you say.');
    scene.text('She just replies with a dreamy stare before she starts giggling, which turns into a laugh that lasts for some time.');
    scene.actions([
      { label: 'Continue talking', handler: (st: GameState) => {
    // TODO-QSP: gt 'katja_nightclub_sex', 'private_room2', 3
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Don\'t push her', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    // TODO-QSP: dynamic text: "It's fine if you don't want to do it," you say. She seems relieved and <<$npcde...
    scene.text(`"It's fine if you don't want to do it," you say. She seems relieved and ${((s as any).npcdesc ?? 0)} doesn't say anything as he cleans up the drugs.`);
    scene.actions([
      { label: 'Continue talking', handler: (st: GameState) => {
    // TODO-QSP: gt 'katja_nightclub_sex', 'private_room2', 2
  } },
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
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('"Thanks, but that\'s not for me," you say, and Katja also quickly shakes her head when he tries to hand her the tube.');
    scene.text('"Well, more for me then," he says and does a few more of the lines before packing the drugs away.');
    scene.actions([
      { label: 'Continue talking', handler: (st: GameState) => {
    // TODO-QSP: gt 'katja_nightclub_sex', 'private_room2', 1
  } },
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
    qspCall(s, 'katja_procedural', 'take_cocaine');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/joint_coke.jpg');
    // TODO-QSP: dynamic text: "Come on, Katja. Let's do it together," you say as you take the tube from <<$npc...
    scene.text(`"Come on, Katja. Let's do it together," you say as you take the tube from ${((s as any).npcdesc ?? 0)}.`);
    // TODO-QSP: dynamic text: She still looks skeptical. "I don't know, <<$pcs_nickname>>. I'm not sure it's a...
    scene.text(`She still looks skeptical. "I don't know, ${((s as any).pcs_nickname ?? 0)}. I'm not sure it's a good idea," she replies.`);
    scene.text('"You liked it last time! it will be fine this time, too," you continue.');
    // TODO-QSP: dynamic text: "I'm not sure. '+iif(katjaQW['coke_stage'] = 2, 'I don't want it to become a hab...
    scene.text('"I\'m not sure. \'+iif(katjaQW[\'coke_stage\'] = 2, \'I don\'t want it to become a habit\', \'I think the last time was enough for me\')+\'" she says.');
    scene.text('"Don\'t be such a bore. You know you will love it," you say.');
    scene.text('Katja finally relents. "OK. Let\'s do it, together," she says.');
    // TODO-QSP: dynamic text: <<$npcdesc>> has already produced another tube and hands it to Katja, who takes ...
    scene.text(`${((s as any).npcdesc ?? 0)} has already produced another tube and hands it to Katja, who takes it with unsteady hands. You both lover your heads to the table.`);
    // TODO-QSP: 'Then at the same time, you sniff your lines. Katja '+iif(katjaQW['coke_stage'] = 2, 'has gotten use...
    scene.text('After a moment, it hits you both. You feel wonderful while Katja just sits there with wide-open eyes. Then she starts giggling, which turns into a laugh that lasts for some time.');
    scene.actions([
      { label: 'Continue talking', handler: (st: GameState) => {
    // TODO-QSP: gt 'katja_nightclub_sex', 'private_room2', 3
  } },
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
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('"Thanks, but that is not for me," you say.');
    scene.text('"How about you then?" he asks Katja.');
    // TODO-QSP: '"OK, make some lines for me," she replies' + iif(katjaQW['coke_stage'] = 3, ' hesitantly.', '.')
    if (((s as any).katjaQW ?? 0)?.['coke_stage'] === 4) {
      qspCall(s, 'willpower', 'drugs', 'force', 'easy');
    }
    if (((s as any).katjaQW ?? 0)?.['coke_stage'] === 3) {
      (s as any).will_cost = 0;
    }
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Convince her not to do it [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
    // TODO-QSP: iif(katjaQW['coke_stage'] = 3, 'She looks at you. "Do you think I take too much?"', 'She scowls at y...
    scene.text('"I\'m just saying that maybe we should relax a little. Right now isn\'t the time for this," you say.');
    // TODO-QSP: 'She thinks about it for a moment. '+iif(katjaQW['coke_stage'] = 3, '"Okay. Not tonight," she says.'...
    // TODO-QSP: dynamic text: "Well, more for me then," <<$npcdesc>> says and does a few more lines before pac...
    scene.text(`"Well, more for me then," ${((s as any).npcdesc ?? 0)} says and does a few more lines before packing the drugs away.`);
    scene.actions([
      { label: 'Continue talking', handler: (st: GameState) => {
    // TODO-QSP: gt 'katja_nightclub_sex', 'private_room2', 1
  } },
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
    scene.text(`You watch as Katja takes the tube, puts one end at her nose and bends down to the start of the line that ${((s as any).npcdesc ?? 0)} has prepared for her.`);
    scene.text('She sniffs the line with no problem and just sits up waiting for the the drugs to hit her.');
    scene.text('After a moment, it does and she just sits there with wide-open eyes before she starts giggling, which turns into a laugh that lasts for some time.');
    scene.actions([
      { label: 'Continue talking', handler: (st: GameState) => {
    // TODO-QSP: gt 'katja_nightclub_sex', 'private_room2', 2
  } },
    ]);
  } },
    ]);
  } },
          ]);
        }
        (s as any).minut = ((s as any).minut ?? 0) + 8;
        qspCall(s, 'drugs', 'cocaine', 1);
        qspCall(s, 'katja_procedural', 'take_cocaine');
        qspCall(s, 'stat', '');
        scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/joint_coke.jpg');
        // TODO-QSP: dynamic text: "Come on, let's do it together," you say as you take the tube from <<$npcdesc>>.
        scene.text(`"Come on, let's do it together," you say as you take the tube from ${((s as any).npcdesc ?? 0)}.`);
        // TODO-QSP: dynamic text: She agrees and <<$npcdesc>> hands her another tube, which she happily takes.
        scene.text(`She agrees and ${((s as any).npcdesc ?? 0)} hands her another tube, which she happily takes.`);
        scene.text('You put your tubes to your nostrils and lower your heads to the table to sniff your line. Katja does it with great enthusiasm.');
        scene.text('After a moment, it hits you both. You feel wonderful while Katja just sits there with wide-open eyes. She starts giggling, which turns into a laugh that lasts for some time.');
        scene.actions([
          { label: 'Do some lines with Katja [+$func(\'willpower\', \'get_willcost_string\'...]' }, // TODO-QSP: empty action body
          { label: 'Continue talking', handler: (st: GameState) => {
    // TODO-QSP: gt 'katja_nightclub_sex', 'private_room2', 3
  } },
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
          { label: 'Say no to the drugs [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Say no to the drugs', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'willpower', 'drugs', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('"Thanks, but that\'s not for me," you reply.');
    scene.text('"So just you, then?" he asks Katja.');
    // TODO-QSP: dynamic text: "Yes. Seems like <<$pcs_nickname>> is being a bore tonight. Make some lines for ...
    scene.text(`"Yes. Seems like ${((s as any).pcs_nickname ?? 0)} is being a bore tonight. Make some lines for me," she says.`);
    if (((s as any).katjaQW ?? 0)?.['coke_stage'] === 5) {
      qspCall(s, 'willpower', 'drugs', 'force', 'easy');
    } else {
      qspCall(s, 'willpower', 'drugs', 'force');
      if (((s as any).katjaQW ?? 0)?.['coke_stage'] === 7) {
        qspCall(s, 'willpower', 'drugs', 'force', 'hard');
      } else {
        scene.text('It\'s clear that if you want Katja to stop, you\'ll need to forcefully drag her away, which would likely get you thrown out of the club, or worse.');
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
      // TODO-QSP: dynamic text: "Well, more for me then," <<$npcdesc>> says and does a few more lines before pac...
      scene.text(`"Well, more for me then," ${((s as any).npcdesc ?? 0)} says and does a few more lines before packing the drugs away. Katja looks longingly at them as he does.`);
      scene.actions([
        { label: 'Continue talking', handler: (st: GameState) => {
    // TODO-QSP: gt 'katja_nightclub_sex', 'private_room2', 1
  } },
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
    scene.text(`You watch as Katja takes the tube, puts one end at her nose and bends down so the other end is at the start of the line that ${((s as any).npcdesc ?? 0)} has prepared for her.`);
    scene.text('She sniffs the line like a pro and sits up, waiting for the drugs to hit her.');
    scene.text('After a moment, it does and she sits there with wide-open eyes before she starts giggling, which turns into a laugh that lasts for some time.');
    scene.actions([
      { label: 'Continue talking', handler: (st: GameState) => {
    // TODO-QSP: gt 'katja_nightclub_sex', 'private_room2', 2
  } },
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
    // TODO-QSP: dynamic text: "Yes! That's the spirit," she replies. She's already taken the tube from <<$npcd...
    scene.text(`"Yes! That's the spirit," she replies. She's already taken the tube from ${((s as any).npcdesc ?? 0)}, so he quickly produces another one and hands it to you.`);
    scene.text('You both put your tubes to your nostrils and lower your heads to the table to sniff your lines. Katja does it like it\'s something she does all the time.');
    scene.text('After a moment, it hits you both. You feel wonderful while Katja just sits there with wide-open eyes before she starts giggling, which turns into a laugh that lasts for some time.');
    scene.actions([
      { label: 'Continue talking', handler: (st: GameState) => {
    // TODO-QSP: gt 'katja_nightclub_sex', 'private_room2', 3
  } },
    ]);
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Do some lines but don\'t push Katja', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'drugs', 'cocaine', 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/drugs/cocaine.jpg');
    scene.text('"I\'ll take some, but I don\'t think my friend will," you say as you take the tube and Katja shakes her head. You put one end of the tube to your nose and the other to the first of the lines he has prepared for you.');
    // TODO-QSP: dynamic text: You snort the first line and then the second as Katja watches with wide-open eye...
    scene.text(`You snort the first line and then the second as Katja watches with wide-open eyes. After a short moment, it hits you and you feel the full effect of the drug as ${((s as any).npcdesc ?? 0)} takes the tube and cleans up the drugs.`);
    scene.actions([
      { label: 'Continue talking', handler: (st: GameState) => {
    // TODO-QSP: gt 'katja_nightclub_sex', 'private_room2', 2
  } },
    ]);
  } },
      ]);
    }
  } },
      ]);
    }
  }
  scene.build();
}

export const katja_nightclub_sex: LocationDef = {
  name: 'katja_nightclub_sex',
  title: 'The cocktails arrive before you and Katja finish your introd',
  region: 'other',
  description: ['The cocktails arrive before you and Katja finish your introduction, and you start sipping your drinks as you continue chatting.'],
  enter: enter,
};
