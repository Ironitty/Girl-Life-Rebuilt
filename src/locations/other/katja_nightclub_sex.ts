import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterPrivateRoom1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'npcgeneratec', '', 0, '', Math.floor(Math.random() * 38) + 18, 4);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
  qspCall(s, 'beverage', 'cocktail_stats');
  ((s as any).katjaQW ?? {})['drinks'] = (((s as any).katjaQW ?? {})['drinks'] ?? 0) + (Math.floor(Math.random() * 2) + 1);
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
          { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
        { label: 'Convince her to try it [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
            { label: 'Convince Katja to do some lines with you [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
          scene.actions([
            { label: 'Do some lines with Katja [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
      { label: 'Continue talking', handler: (st: GameState) => {
    // TODO-QSP: gt 'katja_nightclub_sex', 'private_room2', 3
  } },
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
              { label: 'Say no to the drugs [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Say no to the drugs [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
      if (((s as any).katjaQW ?? 0)?.['coke_stage'] === 6) {
        qspCall(s, 'willpower', 'drugs', 'force');
      } else {
        if (((s as any).katjaQW ?? 0)?.['coke_stage'] === 7) {
          qspCall(s, 'willpower', 'drugs', 'force', 'hard');
        } else {
          scene.text('It\'s clear that if you want Katja to stop, you\'ll need to forcefully drag her away, which would likely get you thrown out of the club, or worse.');
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
    // TODO-QSP: dynamic text: "Well, more for me then," <<$npcdesc>> says and does a few more lines before pac...
    scene.text(`"Well, more for me then," ${((s as any).npcdesc ?? 0)} says and does a few more lines before packing the drugs away. Katja looks longingly at them as he does.`);
    scene.actions([
      { label: 'Continue talking', handler: (st: GameState) => {
    // TODO-QSP: gt 'katja_nightclub_sex', 'private_room2', 1
  } },
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
  } },
            ]);
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
        }
      }
    }
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPrivateRoom2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 7;
  scene.img(`images/characters/pavlovsk/school/girl/katja/uni/nightclub/private_with_guy${Math.floor(Math.random() * 2) + 1}.jpg`);
  if (((s as any).pcs_hotcat ?? 0) + ((s as any).locArgs?.[1] ?? 0) < (Math.floor(Math.random() * 9) + 6)) {
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You sit and talk for a while. Once you've finished your drinks, <<$npcdesc>> say...
    scene.text(`You sit and talk for a while. Once you've finished your drinks, ${((s as any).npcdesc ?? 0)} says that he's had a great time but has to go. He says goodbye before getting up and leaving.`);
    scene.text('You and Katja look at each other in confusion before she suggests that you go dancing. You nod and follow her to the dance floor.');
    scene.actions([
      { label: 'Go to the dance floor', goto: ['katja_nightclub', 'dance'] },
    ]);
  } else {
    qspCall(s, 'arousal', 'foreplay', 3);
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You sit and talk while you sip your drinks. During this time, <<$npcdesc>>'s han...
    scene.text(`You sit and talk while you sip your drinks. During this time, ${((s as any).npcdesc ?? 0)}'s hands become more and more daring. At first, they just accidentally touch you or Katja, but as time goes on, they keep lingering on your thighs.`);
    if ((((s as any).katjaQW ?? 0)?.['QWstage'] <= 6  &&  ((s as any).katjaQW ?? 0)?.['liberated'] === 0)  ||  (((s as any).katjaQW ?? 0)?.['simultanous_boys'] === 0  &&  ((s as any).katjaQW ?? 0)?.['liberated'] === 1)  ||  ((s as any).katjaQW ?? 0)?.['boy_block'] === 1  ||  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] > 0  ||  qspFunc(s, 'katja_procedural', 'willing_to_be_naughty') + ((s as any).katjaQW ?? 0)?.['horny'] < (Math.floor(Math.random() * 76) + 75)) {
      scene.text('Katja is having none of it, demonstrably removing his hand from her thigh. He then tries with you to see if he has more luck.');
      if (((s as any).katjaQW ?? 0)?.['QWstage'] >= 6  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] === 0  &&  ((s as any).katjaQW ?? 0)?.['boy_block'] === 0) {
        if (qspFunc(s, 'katja_procedural', 'willing_to_be_naughty') + ((s as any).katjaQW ?? 0)?.['horny'] > 100) {
          qspCall(s, 'willpower', 'sex', 'force', 'easy');
        } else {
          qspCall(s, 'willpower', 'sex', 'force');
        }
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Convince Katja to have sex with <<$npcdesc>> [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Convince Katja to have sex with <<$npcdesc>> [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'force');
    qspCall(s, 'arousal', 'foreplay_give', 3);
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (20);
    qspCall(s, 'stat', '');
    scene.text('You accept his touch and place your hand on his thigh, moving it slowly towards his crotch. "I\'m sure he has something we could make use of, Katja…" you say as your hand grazes the growing lump in his trousers.');
    // TODO-QSP: dynamic text: "It feels quite good. '+iif(dick > 15, 'Big, just like you like it', 'It's nice ...
    scene.text(`"It feels quite good. '+iif(dick > 15, 'Big, just like you like it', 'It's nice and smooth')+'. Perfect for pounding that tight, wet pussy of yours…" you say as you stroke his now extremely hard ${((s as any).dick ?? 0)}cm dick through his pants.`);
    scene.text('Katja squirms as her face turns red. "That might be just what I need," she says in a seductive voice as she moves closer and lets her hand join yours.');
    scene.actions([
      { label: 'Have a threesome', goto: ['katja_nightclub_sex', 'private_booth_FFM'] },
    ]);
  } },
          ]);
        }
      }
      if (((s as any).katjaQW ?? 0)?.['faithful'] === 0) {
        scene.actions([
          { label: 'Have sex with <<$npcdesc>> without Katja', handler: (st: GameState) => {
    ((s as any).katjaQW ?? {})['disco_check_time'] = ((s as any).totminut ?? 0);
    ((s as any).katjaQW ?? {})['disco_loc'] = 1;
    scene.text('You accept his touch and place your hand on his thighs, moving it slowly towards his crotch. "Mmm. this is something I\'m going to enjoy," you say as your hand reaches his cock.');
    // TODO-QSP: dynamic text: "What are you doing, <<$pcs_nickname>>?" Katja asks while getting flustered. You...
    scene.text(`"What are you doing, ${((s as any).pcs_nickname ?? 0)}?" Katja asks while getting flustered. You just ignore her and continue to stroke ${((s as any).npcdesc ?? 0)}'s now hard cock through his pants.`);
    // TODO-QSP: dynamic text: He takes your groping as approval and starts pawing at your <<$pc_desc['breast']...
    scene.text(`He takes your groping as approval and starts pawing at your ${((s as any).pc_desc ?? 0)?.['breast']} breasts. You're so into it, that you don't even notice Katja get up and leave.`);
    scene.actions([
      { label: 'Have sex with <<$npcdesc>>', handler: (st: GameState) => {
    (st as any).picrand = 38;
    // TODO-QSP: $sexloc = 'city_nightclub'
    // TODO-QSP: xgt 'sex', 'var'
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'You\'re not interested', handler: (st: GameState) => {
    scene.text('You remove his hand. "We\'re not interested in that."');
    scene.text('He seems very offended, standing up in a huff. "I think it\'s time you both left."');
    scene.text('As you and Katja leave, you hear him mumbling. "Well, that was a waste of money!"');
    scene.text('"What an asshole!" Katja says. "Does he think that we\'re just cheap whores who can be bought with a couple of drinks?!"');
    scene.text('"Yeah, what a jerk!" you add.');
    scene.text('"Let\'s forget about him and go dance!" she suggests.');
    scene.actions([
      { label: 'Follow Katja to the dance floor', goto: ['katja_nightclub', 'dance'] },
    ]);
  } },
      ]);
    } else {
      qspCall(s, 'arousal', 'erotic', (-3));
      qspCall(s, 'stat', '');
      // TODO-QSP: dynamic text: Katja is visibly enjoying his attention and reciprocates by stroking his thigh, ...
      scene.text(`Katja is visibly enjoying his attention and reciprocates by stroking his thigh, moving closer and closer to his crutch. ${((s as any).npcdesc ?? 0)} seems completely captivated by her and forgets about you, moving his hand from your thigh to Katja's breasts.`);
      // TODO-QSP: dynamic text: "You gotta feel this, <<$pcs_nickname>>," Katja says as she starts stroking his ...
      scene.text(`"You gotta feel this, ${((s as any).pcs_nickname ?? 0)}," Katja says as she starts stroking his cock through his pants. "It's '+iif(dick > 17, 'very big', 'nice')+' and hard. I think we will have a good time with it," she says in her most seductive voice.`);
      if (qspFunc(s, 'katja_procedural', 'willing_to_be_naughty') + ((s as any).katjaQW ?? 0)?.['horny'] > 200) {
        qspCall(s, 'willpower', 'sex', 'force', 'hard');
      } else {
        if (qspFunc(s, 'katja_procedural', 'willing_to_be_naughty') + ((s as any).katjaQW ?? 0)?.['horny'] > 100) {
          qspCall(s, 'willpower', 'sex', 'force');
        } else {
          qspCall(s, 'willpower', 'sex', 'force', 'easy');
        }
      }
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Convince Katja to stop [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Convince Katja to stop [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'force');
    scene.text('"Come on, Katja. Stop teasing the poor guy. You\'re making him think that he\'s anywhere close to our standard," you say out loud to make sure that he heard you.');
    scene.text('Katja looks at you a little puzzled, but then smiles and condescendingly pats his crotch. "You\'re right. This here isn\'t going to be able to satisfy us," she says and she stands up before holding out her hand to you.');
    scene.text('You take it and stand up, leaving the booth with the guy looking completely confused and very frustrated.');
    if (((s as any).npc_had_sex ?? 0)?.['A14']) {
      scene.text('When you get closer to the dance floor, Katja whispers to you, "You owe me a big orgasm tonight. I thought we would get a nice hard pounding in there. But for now, let\'s dance."');
    }
    scene.actions([
      { label: 'Follow Katja to the dance floor', goto: ['katja_nightclub', 'dance'] },
    ]);
  } },
        ]);
      }
      if (((s as any).katjaQW ?? 0)?.['faithful'] === 0) {
        scene.actions([
          { label: 'Give them some privacy', handler: (st: GameState) => {
    ((s as any).katjaQW ?? {})['disco_check_time'] = ((s as any).totminut ?? 0);
    ((s as any).katjaQW ?? {})['disco_loc'] = 7;
    qspCall(s, 'katja_procedural', 'sex_set', 1);
    scene.text('You slowly get up to leave. "Have fun. Find me once you\'re finished here."');
    scene.actions([
      { label: 'Leave', goto: ['city_nightclub', 'private_rooms'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Join Katja and have a threesome', goto: ['katja_nightclub_sex', 'private_booth_FFM'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPrivateBooth_FFM(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_had_sex ?? 0)?.['A14'] === 0  &&  ((s as any).katjaQW ?? 0)?.['first_time_in_nightclub'] === 0) {
    ((s as any).katjaQW ?? {})['first_time_in_nightclub'] = 1;
    ((s as any).katjaQW ?? {})['knows_cuni'] = 1;
    ((s as any).katjaQW ?? {})['knows_BJ'] = 1;
    ((s as any).katjaQW ?? {})['knows_sex'] = 1;
    ((s as any).katjaQW ?? {})['slut'] = (((s as any).katjaQW ?? {})['slut'] ?? 0) + (5);
    (s as any).girl = ((s as any).girl ?? 0) + (1);
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'adore');
  }
  qspCall(s, 'npcStat', 'A14', 'a');
  qspCall(s, 'arousal', 'foreplay', 3, ((s as any).npcID1 ?? 0), 'group', 'lesbian');
  qspCall(s, 'arousal', 'foreplay_give', 3, ((s as any).npcID1 ?? 0), 'group', 'lesbian');
  ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 11) + 10);
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/sex/one_guy_private1.jpg');
  // TODO-QSP: dynamic text: "Why don't the two of you get started?" <<$npcdesc>> says and Katja ' + iif(npc_...
  scene.text(`"Why don't the two of you get started?" ${((s as any).npcdesc ?? 0)} says and Katja ' + iif(npc_had_sex['A14'] = 0, ' looks at you with curious', 'eager') + ' eyes. You take that as an invitation and get up while Katja follows.`);
  if (((s as any).katjaQW ?? 0)?.['QWstage'] >= 3) {
    scene.text('Katja quickly goes for a deep kiss and starts undressing you. You follow her lead and start pulling her clothes off.');
  } else {
    if (((s as any).katjaQW ?? 0)?.['simultanous_girls'] > 1) {
      scene.text('Katja approaches you for a kiss and you start making out. She\'s a very good kisser, gentle yet passionate. You normally only experience this with girls who have kissed lots of other girls, and it clearly gets to you.');
      scene.text('She also starts to undress you and you follow her in removing her clothes.');
    } else {
      if (((s as any).katjaQW ?? 0)?.['simultanous_girls'] === 1  ||  ((s as any).katjaQW ?? 0)?.['simultanous_boys'] > 3) {
        scene.text('You approach Katja for a kiss, which she readily reciprocates. It\'s clear that she has some experience in the art of kissing. After a short while, you break off and start to remove your clothes, with Katja slowly doing the same.');
      } else {
        if ((!(Math.floor(Math.random() * (((s as any).katjaQW ?? 0)?.['simultanous_boys'] - 0 + 1)) + (0)))) {
          scene.text('You approach Katja for a kiss and, while she kisses you back, it\'s clear that she\'s never kissed a girl. After a short while, you break off and start removing your clothes, with Katja slowly doing the same.');
        } else {
          scene.text('You approach a hesitant Katja for a kiss, and while she kisses you back, it\'s fairly clumsy, like she\'s never made out with anyone before. After a short while, you break off and start removing your clothes, with Katja slowly doing the same.');
        }
      }
    }
  }
  // TODO-QSP: dynamic text: You're '+iif($pantyworntype = 'none', 'already completely naked', 'only wearing ...
  scene.text(`You're '+iif($pantyworntype = 'none', 'already completely naked', 'only wearing panties')+' while Katja is still wearing some of her underwear. However, her breasts are on full display, so you start sucking on one of them. She starts moaning loudly as ${((s as any).npcdesc ?? 0)} looks on intently.`);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Start licking her pussy', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/sex/one_guy_private2.jpg');
    // TODO-QSP: dynamic text: You gently lay Katja down and start licking her now very wet pussy. <<$npcdesc>>...
    scene.text(`You gently lay Katja down and start licking her now very wet pussy. ${((s as any).npcdesc ?? 0)} can't hold back anymore and starts sucking on her breast.`);
    qspCall(s, 'arousal', 'cuni_give', 3, ((s as any).npcID1 ?? 0), 'group', 'lesbian');
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 11) + 10);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: '69', handler: (st: GameState) => {
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 11) + 10);
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/sex/one_guy_private3.jpg');
    // TODO-QSP: 'You stop and lie down on your back. "Come on, Katja. Give me your pussy and put your mouth on mine,...
    if (((s as any).npc_had_sex ?? 0)?.['A14']  ||  ((s as any).katjaQW ?? 0)?.['simultanous_girls'] > 1) {
      scene.text('You start licking each other\'s pussy and Katja does a great job. She really knows how to please a girl.');
    } else {
      if (((s as any).katjaQW ?? 0)?.['simultanous_girls'] === 1) {
        scene.text('You start licking each other\'s pussy. Katja does an okay job, but it\'s clear that she doesn\'t have much experience in pleasing a girl.');
      } else {
        scene.text('You start licking Katja\'s pussy while her tongue cautiously explores your own. It seems like it\'s the first time she\'s tried to eat pussy.');
      }
    }
    if (((s as any).katjaQW ?? 0)?.['horny'] >= 100) {
      ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) - (100);
      if (((s as any).npc_had_sex ?? 0)?.['A14'] === 0  &&  ((s as any).katjaQW ?? 0)?.['first_time_in_nightclub'] < 2) {
        ((s as any).katjaQW ?? {})['first_time_in_nightclub'] = 2;
        qspCall(s, 'npc_relationship', 'modify', 'A14', 'adore');
      }
      // TODO-QSP: dynamic text: Your licking is pretty good and Katja soon has a powerful, explosive orgasm as <...
      scene.text(`Your licking is pretty good and Katja soon has a powerful, explosive orgasm as ${((s as any).npcdesc ?? 0)} watches in amazement.`);
    } else {
      // TODO-QSP: dynamic text: While you lick each other, <<$npcdesc>> looks on, becoming more and more aroused...
      scene.text(`While you lick each other, ${((s as any).npcdesc ?? 0)} looks on, becoming more and more aroused.`);
    }
    qspCall(s, 'arousal', 'cuni_give', 3, ((s as any).npcID1 ?? 0), 'group', 'lesbian');
    qspCall(s, 'arousal', 'cuni', (-3), ((s as any).npcID1 ?? 0), 'group', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck <<$npcdesc>>\'s cock', handler: (st: GameState) => {
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 5);
    if (((s as any).npc_throat ?? 0)?.['A14'] < ((s as any).dick ?? 0)) {
      ((s as any).npc_throat ?? {})['A14'] = (((s as any).npc_throat ?? {})['A14'] ?? 0) + (1);
    }
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/sex/one_guy_private4.jpg');
    // TODO-QSP: dynamic text: "Why don't you join us, <<$npcdesc>>?" you ask. He quickly gets up and you help ...
    scene.text(`"Why don't you join us, ${((s as any).npcdesc ?? 0)}?" you ask. He quickly gets up and you help him undress, revealing his ${((s as any).dick ?? 0)} cm ${((s as any).dick_girth ?? 0)} cock.`);
    // TODO-QSP: dynamic text: "Let's give this nice cock a good licking, Katja," you say and the two of you ge...
    scene.text(`"Let's give this nice cock a good licking, Katja," you say and the two of you get on your knees to share ${((s as any).npcdesc ?? 0)}'s dick.`);
    qspCall(s, 'arousal', 'bj', 3, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get to fucking', handler: (st: GameState) => {
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 5);
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/sex/one_guy_private5.jpg');
    // TODO-QSP: dynamic text: "I think my cock deserves some pussy now," <<$npcdesc>> says after you've sucked...
    scene.text(`"I think my cock deserves some pussy now," ${((s as any).npcdesc ?? 0)} says after you've sucked his cock for a few minutes.`);
    scene.text('You lie down on the table and he gets right to jamming his very hard cock into your pussy and thrusting.');
    // TODO-QSP: dynamic text: Katja looks on for a moment, then moves her mouth to your pussy and starts licki...
    scene.text(`Katja looks on for a moment, then moves her mouth to your pussy and starts licking your clit as ${((s as any).npcdesc ?? 0)}'s cock slides in and out of your pussy.`);
    qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'arousal', 'cuni', (-2), ((s as any).npcID1 ?? 0), 'group', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Katja\'s turn', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/sex/one_guy_private6.jpg');
    // TODO-QSP: dynamic text: "Time to try the redhead's pussy," <<$npcdesc>> says as he pulls out of your pus...
    scene.text(`"Time to try the redhead's pussy," ${((s as any).npcdesc ?? 0)} says as he pulls out of your pussy. He grabs Katja and pushes her down on her back on the couch before pulling her ass up on the arm.`);
    if (((s as any).npc_vag ?? 0)?.['A14'] < ((s as any).dick ?? 0)) {
      ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) - (Math.floor(Math.random() * 11) + 10);
      scene.text('He jams his dick into her pussy and Katja lets out a surprised shriek, clearly not used to cocks this size. He ignores her reaction and starts to pound her.');
    } else {
      ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 11) + 10);
      scene.text('He jams his dick into her pussy, which goes in smoothly as Katja lets out a loud moan. He then starts to pound her.');
    }
    // TODO-QSP: dynamic text: You get on the couch and lower your ass to Katja's face. She '+iif(katjaQW['simu...
    scene.text('You get on the couch and lower your ass to Katja\'s face. She \'+iif(katjaQW[\'simultanous_girls\'] >= 1, \'eagerly\', \'clumsily\')+\' starts licking your pussy.');
    // TODO-QSP: dynamic text: <<$npcdesc>> then grabs your head and starts making out with you as he fucks Kat...
    scene.text(`${((s as any).npcdesc ?? 0)} then grabs your head and starts making out with you as he fucks Katja.`);
    qspCall(s, 'arousal', 'kiss', (-2), ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'arousal', 'cuni', 3, ((s as any).npcID1 ?? 0), 'group', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get on top of <<$npcdesc>>', handler: (st: GameState) => {
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 11) + 5);
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/sex/one_guy_private7.jpg');
    scene.text('After hammering Katja for a few minutes, he pulls out and pats you on the ass. "Time for you to do the work."');
    scene.text('He lies down on the couch as Katja crawls up and sits on his face and you lower your wet pussy onto his cock.');
    scene.text('As you ride him, you and Katja start playing with each other\'s breasts before making out.');
    qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'arousal', 'foreplay', (-3), ((s as any).npcID1 ?? 0), 'group', 'lesbian');
    qspCall(s, 'arousal', 'kiss', (-3), ((s as any).npcID1 ?? 0), 'group', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Lick his cock again', handler: (st: GameState) => {
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 5);
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/sex/one_guy_private8.jpg');
    scene.text('After riding his cock for a few minutes, you and Katja climb off him before getting down on the floor and playing with his cock again, taking turns sucking it before he decides to take control once more.');
    qspCall(s, 'arousal', 'bj', 3, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Katja\'s turn again', handler: (st: GameState) => {
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 11) + 5);
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/sex/one_guy_private9.jpg');
    // TODO-QSP: dynamic text: "Get up on all fours and show me those booties," <<$npcdesc>> says as he stands ...
    scene.text(`"Get up on all fours and show me those booties," ${((s as any).npcdesc ?? 0)} says as he stands up.`);
    // TODO-QSP: dynamic text: Following his command, you crawl up on the couch and stick out your asses before...
    scene.text(`Following his command, you crawl up on the couch and stick out your asses before ${((s as any).npcdesc ?? 0)} starts playing with both your pussies.`);
    // TODO-QSP: 'He then gets up and shoves his cock into Katja, fucking her again. She '+iif(npc_vag['A14'] < dick,...
    qspCall(s, 'arousal', 'voyeur_sex', 3, 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Switch one more time', handler: (st: GameState) => {
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 11) + 0);
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/sex/one_guy_private10.jpg');
    // TODO-QSP: dynamic text: <<$npcdesc>> then switches from Katja to you and stuffs his <<$dick_girth>> cock...
    scene.text(`${((s as any).npcdesc ?? 0)} then switches from Katja to you and stuffs his ${((s as any).dick_girth ?? 0)} cock back into your '+iif(pcs_vag < dick, 'tight ', ')+'pussy.`);
    scene.text('He starts pounding you and Katja gets up close to see how his dick glides in and out of your pussy.');
    qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Katja wants more', handler: (st: GameState) => {
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 11) + 10);
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/sex/one_guy_private11.jpg');
    // TODO-QSP: dynamic text: Katja seems very eager to get some more cock, so much so that she crawls up on y...
    scene.text(`Katja seems very eager to get some more cock, so much so that she crawls up on your back to present her ass to ${((s as any).npcdesc ?? 0)}. He promptly removes his cock from your pussy and shoves it back in hers.`);
    if (((s as any).katjaQW ?? 0)?.['horny'] >= 100) {
      ((s as any).katjaQW ?? {})['horny'] = 0;
      scene.text('He starts fucking her as hard as he can, but Katja dares him to fuck her harder. She\'s soon howling when she has a huge orgasm on your back.');
    } else {
      scene.text('He starts fucking her as hard as he can, but Katja dares him to fuck her harder. He does so for a few minutes, but she doesn\'t cum.');
    }
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'One last fuck', handler: (st: GameState) => {
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 11) + 0);
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/sex/one_guy_private12.jpg');
    // TODO-QSP: dynamic text: <<$npcdesc>> pulls out of Katja and points at you. "On your back. I'm going to f...
    scene.text(`${((s as any).npcdesc ?? 0)} pulls out of Katja and points at you. "On your back. I'm going to fuck you one more time before I cum."`);
    scene.text('You do as he says and lie down on the table. He quickly starts fucking you as Katja licks your breast.');
    qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'arousal', 'foreplay', (-3), ((s as any).npcID1 ?? 0), 'group', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Cum', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/sex/one_guy_private13.jpg');
    // TODO-QSP: dynamic text: <<$npcdesc>> suddenly pulls out and cums over you and Katja as you both make out...
    scene.text(`${((s as any).npcdesc ?? 0)} suddenly pulls out and cums over you and Katja as you both make out.`);
    scene.text('"That was great!" he says and slumps back into the couch. "You ladies were fantastic!"');
    // TODO-QSP: iif(katjaQW['horny'] <= 10, '"Yes, it was very fun. We had a great time,"', '"Sure, it was fun!"')+'...
    // TODO-QSP: dynamic text: She finds some napkins in her purse and hands them to you to clean up. You then ...
    scene.text(`She finds some napkins in her purse and hands them to you to clean up. You then get dressed while ${((s as any).npcdesc ?? 0)} keeps sitting on the couch.`);
    // TODO-QSP: dynamic text: "I feel energized," Katja says. "Let's go dance. Bye, <<$npcdesc>>!" she continu...
    scene.text(`"I feel energized," Katja says. "Let's go dance. Bye, ${((s as any).npcdesc ?? 0)}!" she continues and practically drags you to the dance floor.`);
    qspCall(s, 'arousal', 'kiss', 3, ((s as any).npcID1 ?? 0), 'lesbian');
    qspCall(s, 'cum_call', 'stomach', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'cum_cleanup', '', 1);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Follow Katja to the dance floor', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['katja_nightclub', 'dance'] },
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

function enterLoneBartender(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).katjaQW ?? {})['lone_bartender'] = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/disco_talking_on__dance_floor.jpg');
  scene.text('"Let\'s go to one of the small bars upstairs. There isn\'t usually that many people up there," Katja says and you follow her upstairs.');
  scene.text('You quickly find a bar that\'s empty except for the bartender, but just as you\'re about to enter, Katja suddenly stops.');
  scene.text('"Sorry, but I really need to powder my nose. Just go ahead and start ordering. I\'ll be back in just a minute." Before you can say anything, she\'s gone.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the bartender', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/hot_bartender.jpg');
    scene.text('You approach the bar, where a rather handsome bartender looks like he\'s doing some cleaning.');
    scene.text('"Sorry, but we\'re closed. You\'ll have to go back downstairs," he says as you reach the bar.');
    scene.actions([
      { label: 'Leave and wait for Katja outside', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 7;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/nightclub/private_booths_walkway.jpg');
    scene.text('You head back and wait for a while before Katja appears. You tell her the bar is closed before walking back to the main bar.');
    scene.actions([
      { label: 'Go to the main bar', goto: ['katja_nightclub', 'bar_arrive'] },
    ]);
  } },
      { label: 'Try to convince him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'exp_gain', 'persuas', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/hot_bartender.jpg');
    scene.text('"Why don\'t you stay open for my cute friend and me, handsome? It\'ll just be one drink. I promise we won\'t make any mess…" you say, trying to make the best doe eyes you can.');
    if (((s as any).pcs_persuas ?? 0) < (Math.floor(Math.random() * 51) + 50)) {
      scene.text('It doesn\'t seem like your charm alone will convince him.');
    } else {
      scene.text('It looks like he\'s seriously considering it and you think that pushing a little more will convince him.');
      if (((s as any).pcs_hotcat ?? 0) < 6) {
        qspCall(s, 'willpower', 'misc', 'force', 'hard');
      } else {
        if (((s as any).pcs_hotcat ?? 0) < 9) {
          qspCall(s, 'willpower', 'misc', 'force');
        } else {
          qspCall(s, 'willpower', 'misc', 'force', 'easy');
        }
      }
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Convince the bartender to serve you [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Convince the bartender to serve you [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    if (((s as any).pcs_hotcat ?? 0) > 8) {
      qspCall(s, 'willpower', 'misc', 'force', 'easy');
    } else {
      if (((s as any).pcs_hotcat ?? 0) > 5) {
        qspCall(s, 'willpower', 'misc', 'force');
      } else {
        qspCall(s, 'willpower', 'misc', 'force', 'hard');
      }
    }
    qspCall(s, 'willpower', 'pay', 'force');
    qspCall(s, 'stat', '');
    scene.text('"Come on, it\'s just my friend and I. We won\'t be a bother. We\'ll just have a quick drink. You would be the best bartender ever if you did!"');
    scene.text('He finally relents. "Okay. <i>One</i> drink, and <i>only</i> you and your friend. What will you have?"');
    qspCall(s, 'food_menu', 'city_nightclub_only_cost');
  } },
        ]);
      }
    }
    if (((s as any).pcs_hotcat ?? 0) >= 8) {
      scene.text('He\'s clearly having a hard time taking his eyes off your body, and you can see how flustered he\'s getting from your flirting. You\'re sure that a blowjob would convince him…');
      qspCall(s, 'willpower', 'bj', 'self', 'easy');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Give him a blowjob [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Give him a blowjob [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    if (((s as any).katjaQW ?? 0)?.['faithful'] === 1  &&  ((s as any).katjaQW ?? 0)?.['couple'] === 1) {
      scene.text('As you\'re considering it, you remember that you promised Katja you would be faithful. Maybe if you\'re quick, he\'ll cum before she does…');
      scene.actions([
        { label: 'Risk it', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
  }, goto: ['katja_nightclub_sex', 'bartender_bj'] },
      ]);
    } else {
      if (((s as any).katjaQW ?? 0)?.['boy_block'] === 1) {
        scene.text('As you\'re considering it, you remember you told Katja that you\'re not into boys. She\'ll definitely be surprised if she catches you with his dick in your mouth. Maybe if you\'re quick, he\'ll cum before she does…');
        scene.actions([
          { label: 'Risk it', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
  }, goto: ['katja_nightclub_sex', 'bartender_bj'] },
        ]);
      } else {
        if (((s as any).katjaQW ?? 0)?.['knows_BJ'] === 0) {
          scene.text('As you\'re considering it, you don\'t think that Katja even knows you\'re giving boys blowjobs. You wonder how surprised she\'ll be if she sees his dick in your mouth. Maybe if you\'re quick, he\'ll cum before she does…');
          scene.actions([
            { label: 'Give him the blowjob', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
  }, goto: ['katja_nightclub_sex', 'bartender_bj'] },
          ]);
        } else {
          qspCall(s, 'willpower', 'pay', 'self');
          scene.actions([{ label: 'Continue', goto: ['katja_nightclub_sex', 'bartender_bj'] }]);
        }
      }
    }
    scene.actions([
      { label: 'Don\'t give him the blow job', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/nightclub/private_booths_walkway.jpg');
    scene.text('You change your mind and head back, waiting for a while before Katja appears. You tell her the bar is closed before walking back to the main bar.');
    scene.actions([
      { label: 'Go to the main bar', goto: ['katja_nightclub', 'bar_arrive'] },
    ]);
  } },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Leave and wait for Katja outside', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/nightclub/private_booths_walkway.jpg');
    scene.text('You head back and wait for a while before Katja appears. You tell her the bar is closed before walking back to the main bar.');
    scene.actions([
      { label: 'Go to the main bar', goto: ['katja_nightclub', 'bar_arrive'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterLonebartenderDrinking(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  ((s as any).katjaQW ?? {})['drinks'] = (((s as any).katjaQW ?? {})['drinks'] ?? 0) + (Math.floor(Math.random() * 2) + 1);
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/disco_drinnking_bar.jpg');
  scene.text('Katja arrives as he\'s about to serve your order, and you quickly whisper that she should be quick and very kind.');
  scene.text('She does as you say and places her order immediately when he serves yours, and you soon both have your drinks.');
  scene.text('Once you\'re both finished, you thank the bartender again and head back to the dance floor.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go dancing', goto: ['katja_nightclub', 'dance'] },
  ]);
  scene.build();
}

function enterBartenderBj(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcgeneratec', '', 0, 'Bartender', Math.floor(Math.random() * 21) + 18, Math.floor(Math.random() * 2) + 2);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/sex/bartender_bj1.jpg');
  // TODO-QSP: dynamic text: You move behind the bar, walking as seductively as possible. He stops what he's ...
  scene.text(`You move behind the bar, walking as seductively as possible. He stops what he's doing and just stares at your '+iif(pcs_buttsize > pcs_cupsize, ' ${((s as any).pc_desc ?? 0)?.['butt']} butt.', '${((s as any).pc_desc ?? 0)?.['breast']} tits.')+' "What… What are you doing?" he stammers.`);
  scene.text('"I see the way you look at me, and I think I know how to compensate you adequately for staying open for me and my friend," you say as you sway sensuously in front of him.');
  scene.text('"H-How…" he asks, stuttering.');
  // TODO-QSP: dynamic text: You get down on your knees and move your hands towards his pants, which are bare...
  scene.text(`You get down on your knees and move your hands towards his pants, which are barely hiding his now very hard dick. "I think you want these ${((s as any).pc_desc ?? 0)?.['lip size']} lips around your cock…" you say, licking your lips.`);
  scene.text('"Yes… Oh yes!" he replies.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Suck his cock', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/sex/bartender_bj2.jpg');
    // TODO-QSP: dynamic text: You open his pants and pull out his <<$dick_girth>>, <<dick>>cm cock before '+ii...
    scene.text(`You open his pants and pull out his ${((s as any).dick_girth ?? 0)}, ${((s as any).dick ?? 0)}cm cock before '+iif(dick > pcs_throat, 'taking it into your mouth with some problems', 'swallowing it like a pro')+'.`);
    scene.text('You suck his dick with all the skill you\'ve got, and he clearly likes it.');
    qspCall(s, 'arousal', 'bj', 3);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Try to get him off before Katja returns', handler: (st: GameState) => {
    if (((s as any).npc_sex_stamina ?? 0)?.[String((s as any).npclastgenerated ?? 0)] <= (Math.floor(Math.random() * (Math.min(((s as any).stat ?? 0)?.['bj'] / 25 + 3, 10) - Math.min(((s as any).stat ?? 0)?.['bj'] / 100, 5) + 1)) + (Math.min(((s as any).stat ?? 0)?.['bj'] / 100, 5)))) {
      scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/sex/bartender_bj2.jpg');
      scene.text('You prove skilled enough to get him off and he cums in your mouth. You quickly swallow his cum so you don\'t leave traces for Katja to notice.');
      qspCall(s, 'arousal', 'bj', 3);
      qspCall(s, 'arousal', 'end');
      qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 0);
      qspCall(s, 'stat', '');
      scene.text('You manage to get back to the other side of the bar and the bartender gets his pants zipped back up when Katja comes back.');
      scene.text('"Have you already ordered?" she asks.');
      scene.text('"No, I was just about to," you say. "The bartender needed a little convincing to keep open for us," you say, subtly winking at the man.');
      qspCall(s, 'food_menu', 'city_nightclub_only_cost');
    } else {
      scene.actions([{ label: 'Continue', goto: ['katja_nightclub_sex', 'bartender_bj_katja'] }]);
    }
  } },
      { label: 'Take your time', goto: ['katja_nightclub_sex', 'bartender_bj_katja'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterBartenderBjKatja(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/sex/bartender_bj3.jpg');
  scene.text('You suck the bartender\'s cock with all the skill you have, and he seems to like it.');
  qspCall(s, 'arousal', 'bj', 3);
  if (((s as any).katjaQW ?? 0)?.['faithful'] === 1  &&  ((s as any).katjaQW ?? 0)?.['couple'] ===1) {
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'loathe');
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: "What the fuck, <<$pcs_nickname>>?!" you suddenly hear somebody shouting. You le...
    scene.text(`"What the fuck, ${((s as any).pcs_nickname ?? 0)}?!" you suddenly hear somebody shouting. You let go of the bartender's dick and turn to see a furious Katja.`);
    if (((s as any).katjaQW ?? 0)?.['cheat_warning'] > 0) {
      ((s as any).katjaQW ?? {})['cheat_times'] = (((s as any).katjaQW ?? {})['cheat_times'] ?? 0) + (1);
      scene.text('"You promised that you wouldn\'t cheat on me again! You lying bitch!" she yells before storming off.');
    } else {
      scene.text('"Why is his dick in your mouth? It\'s supposed to be just the two of us," she says before storming off.');
    }
    scene.text('You look at the bartender, who\'s already stuffing his dick away. He clearly doesn\'t want to be part of a lovers\' spat.');
    scene.actions([
      { label: 'Follow Katja', handler: (st: GameState) => {
    // TODO-QSP: gt 'katja_nightclub_sex', 'cheating_conversation', 'bartende...
  } },
    ]);
  } else {
    if (((s as any).katjaQW ?? 0)?.['boy_block'] === 1) {
      qspCall(s, 'npc_relationship', 'modify', 'A14', 'hate');
      qspCall(s, 'stat', '');
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>?!" you suddenly hear somebody shouting. You let go of the bar...
      scene.text(`"${((s as any).pcs_nickname ?? 0)}?!" you suddenly hear somebody shouting. You let go of the bartender's dick and turn to see a shocked Katja.`);
      scene.text('"Why is his dick in your mouth? You told me you didn\'t like boys," she says, sounding very surprised, but also a little disappointed.');
      scene.actions([
        { label: 'It\'s not what it looks like', handler: (st: GameState) => {
    scene.text('"I\'m just doing it so he\'ll keep the bar open for us!" you reply. "I don\'t like it!"');
    scene.text('"What the fuck? You\'re gay!?" the bartender shouts, surprised. "I thought you liked me, but you\'re just playing me like the cheap whore you are. Get out!"');
    scene.text('"I was just…" you start, but are interrupted by him yelling again.');
    scene.text('"Get out, you lesbian freak!"');
    scene.actions([
      { label: 'Quickly leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/city/citycenter/nightclub/private_booths_walkway.jpg');
    scene.text('You get up and almost run after Katja, who\'s already left the bar. Out on the first-floor platform, you stop.');
    scene.text('"That went well. I can see why you said you don\'t like boys, but it was stupid of you to give him a blowjob!" Katja says. "Let\'s go to the main bar".');
    scene.actions([
      { label: 'Go to the main bar', goto: ['katja_nightclub', 'bar_arrive'] },
    ]);
  } },
    ]);
  } },
        { label: 'You\'ve changed your mind', handler: (st: GameState) => {
    ((s as any).katjaQW ?? {})['boy_block'] = 0;
    if (((s as any).katjaQW ?? 0)?.['knows_BJ'] === 0) {
      ((s as any).katjaQW ?? {})['knows_BJ'] = 1;
    }
    if (((s as any).stat ?? 0)?.['bj'] === 0) {
      scene.text('"Well, the bartender looked hot, so I decided to see what it\'s like sucking a dick. It\'s nice so far. You\'re welcome to watch me try."');
    } else {
      scene.text('"I\'ve changed my mind. Some guys, like this bartender, are actually quite hot, and sucking dick is not that bad. You\'re welcome to watch me try."');
    }
    scene.text('"You could\'ve told me," she says, clearly sounding like you\'ve let her down.');
    scene.text('"I\'m sorry," you reply, sounding as remorseful as you can.');
    scene.text('"Hey, mind closing the door so nobody disturbs us?" the bartender asks Katja.');
    ((s as any).katjaQW ?? {})['slut'] = (((s as any).katjaQW ?? {})['slut'] ?? 0) + (Math.floor(Math.random() * 2) + 1);
    scene.actions([
      { label: 'Get him off', goto: ['katja_nightclub_sex', 'bartender_bj_katja_watch'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).katjaQW ?? 0)?.['knows_BJ'] === 0) {
        ((s as any).katjaQW ?? {})['knows_BJ'] = 1;
        // TODO-QSP: dynamic text: "What are you doing, <<$pcs_nickname>>?!" you suddenly hear somebody shouting. Y...
        scene.text(`"What are you doing, ${((s as any).pcs_nickname ?? 0)}?!" you suddenly hear somebody shouting. You let go of the bartender's dick and turn to see a surprised Katja.`);
        // TODO-QSP: dynamic text: "You're sucking that guy's dick out in the open! I didn't know you were such a s...
        scene.text('"You\'re sucking that guy\'s dick out in the open! I didn\'t know you were such a slut!" she continues, sounding \'+iif(func(\'katja_procedural\', \'willing_to_be_naughty\') > 30, \'quite\', \'a little\')+\' excited.');
        scene.text('"I\'m just showing him how grateful we are for keeping the bar open for us. You\'re welcome to watch; you might learn something," you answer before turning back to his cock.');
        scene.text('"You\'re such a slut…" she replies.');
        scene.text('"Hey, mind closing the door so nobody disturbs us?" the bartender asks Katja.');
        ((s as any).katjaQW ?? {})['slut'] = (((s as any).katjaQW ?? {})['slut'] ?? 0) + (5);
        scene.actions([
          { label: 'Get him off', goto: ['katja_nightclub_sex', 'bartender_bj_katja_watch'] },
        ]);
      } else {
        if (((s as any).katjaQW ?? 0)?.['QWstage'] < 6  ||  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] === 2) {
          // TODO-QSP: dynamic text: "What are you doing, <<$pcs_nickname>>?! You can't do that here!" you suddenly h...
          scene.text(`"What are you doing, ${((s as any).pcs_nickname ?? 0)}?! You can't do that here!" you suddenly hear somebody shouting. You let go of the bartender's dick and turn to see a surprised Katja.`);
          scene.text('"I\'m just showing him how grateful we are for keeping the bar open for us. You\'re welcome to watch; you might learn something," you answer before turning back to his cock.');
          scene.text('"You\'re such a slut…" she replies.');
          scene.text('"Hey, mind closing the door so nobody disturbs us?" the bartender asks Katja.');
          ((s as any).katjaQW ?? {})['slut'] = (((s as any).katjaQW ?? {})['slut'] ?? 0) + (Math.floor(Math.random() * 2) + 1);
          scene.actions([
            { label: 'Get him off', goto: ['katja_nightclub_sex', 'bartender_bj_katja_watch'] },
          ]);
        } else {
          if (qspFunc(s, 'katja_procedural', 'willing_to_be_naughty') + ((s as any).katjaQW ?? 0)?.['horny'] > 160  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] === 0) {
            // TODO-QSP: dynamic text: "<<$pcs_nickname>>! I leave you alone for two minutes and you're on your knees w...
            scene.text(`"${((s as any).pcs_nickname ?? 0)}! I leave you alone for two minutes and you're on your knees with a cock down your throat?!" you suddenly hear somebody shouting.`);
            // TODO-QSP: dynamic text: You let go of the bartender's dick and turn to see a grinning Katja. "You're suc...
            scene.text(`You let go of the bartender's dick and turn to see a grinning Katja. "You're such a slut, ${((s as any).pcs_nickname ?? 0)}! I don't know what to do with you," she continues while shaking her head.`);
            scene.text('"I\'m just showing him how grateful we are for keeping the bar open for us. You\'re welcome to watch, or join," you answer before turning back to his cock.');
            scene.text('"You\'re such a slut…" she replies.');
            scene.text('"Hey, mind closing the door so nobody disturbs us?" the bartender asks Katja.');
            scene.actions([
              { label: 'Get him off', goto: ['katja_nightclub_sex', 'bartender_bj_katja_join'] },
            ]);
          } else {
            // TODO-QSP: dynamic text: "What are you doing, <<$pcs_nickname>>?! I didn't know you were planning to have...
            scene.text(`"What are you doing, ${((s as any).pcs_nickname ?? 0)}?! I didn't know you were planning to have sex with the bartender!" you suddenly hear somebody shouting.`);
            // TODO-QSP: dynamic text: You let go of the bartender's dick and turn to see a mildly surprised Katja. "Yo...
            scene.text(`You let go of the bartender's dick and turn to see a mildly surprised Katja. "You're such a slut, ${((s as any).pcs_nickname ?? 0)}! I don't know what to do with you," she continues while shaking her head.`);
            scene.text('"I\'m just showing him how grateful we are for keeping the bar open for us. You\'re welcome to watch, or join," you answer before turning back to his cock.');
            scene.text('"You\'re such a slut…" she replies.');
            scene.text('"Hey, mind closing the door so nobody disturbs us?" the bartender asks Katja.');
            scene.actions([
              { label: 'Get him off', goto: ['katja_nightclub_sex', 'bartender_bj_katja_watch'] },
            ]);
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBartenderBjKatjaWatch(s: GameState, scene: SceneBuilder): void {
  if (((s as any).katjaQW ?? 0)?.['slut'] < 30) {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/sex/bartender_bj2.jpg');
    scene.text('You take his cock into your mouth once more and increase your efforts to get him off.');
    scene.text('After a few minutes, he cums in your mouth and you swallow it so you don\'t get anything on your dress.');
    qspCall(s, 'arousal', 'bj', 3);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 0);
    qspCall(s, 'stat', '');
    scene.text('As you get up, you see that Katja is sitting on one of the couches near the bar.');
    scene.text('"I\'m done now. You can come and order your drink," you call to her as you move back to the other side of the bar. She gets up and joins you while you order your drink.');
  } else {
    if (((s as any).katjaQW ?? 0)?.['slut'] < 50) {
      scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/sex/bartender_bj2.jpg');
      scene.text('You take his cock into your mouth once more as you hear Katja come behind the bar. You increase your efforts to get him off to show Katja how it\'s done.');
      scene.text('You look back at Katja from time to time and notice she\'s watching you with big, open eyes.');
      scene.text('After a few minutes, he cums in your mouth and you swallow it so you don\'t get anything on your dress.');
      qspCall(s, 'arousal', 'bj', 3);
      qspCall(s, 'arousal', 'end');
      qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 0);
      ((s as any).katjaQW ?? {})['slur'] = (((s as any).katjaQW ?? {})['slur'] ?? 0) + (Math.floor(Math.random() * 2) + 1);
      ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 16) + 5);
      qspCall(s, 'stat', '');
      scene.text('As you get up, you see that Katja\'s face has turnd very red, but she doesn\'t say anything.');
      if (((s as any).katjaQW ?? 0)?.['QWstage'] < 5  &&  ((s as any).katjaQW ?? 0)?.['simultanous_boys'] === 0) {
        scene.text('"That\'s how it\'s done. Next time, you can do it," you tell Katja.');
        scene.text('"No way! I couldn\'t do that," she says quickly, but doesn\'t sound very convincing.');
      }
      scene.text('You move to the other side of the bar, and as soon as you sit down next to her, Katja starts asking questions. You try to entertain her as you order your drinks.');
    } else {
      if (((s as any).katjaQW ?? 0)?.['slut'] < 80) {
        scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/sex/bartender_bj2.jpg');
        scene.text('You take his cock into your mouth once more as you hear Katja come behind the bar. You increase your efforts to get him off to show Katja how it\'s done.');
        scene.text('You look back at her from time to time and notice that she\'s watching you and clearly becoming more and more aroused.');
        scene.text('After a few minutes, he cums in your mouth and you swallow it so you don\'t get anything on your dress.');
        qspCall(s, 'arousal', 'bj', 3);
        qspCall(s, 'arousal', 'end');
        qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 0);
        ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 11) + 10);
        qspCall(s, 'stat', '');
        scene.text('As you get up, Katja immediately starts questioning you. "How was it? Was it a nice cock? Did his cum taste okay?"');
        scene.text('"Slow down, Katja!" you say as you move to the other side of the bar. After you sit down next to her, you start answering her questions, trying to entertain her as you order your drinks.');
      } else {
        scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/sex/bartender_bj3.jpg');
        scene.text('You take his cock in your mouth once more as you hear Katja come behind the bar. You increase your efforts to get him off to show Katja how it\'s done.');
        scene.text('Katja starts cheering you on, tossing out one lewd comment after another as you blow the guy.');
        scene.text('After a few minutes, he cums in your mouth and you swallow it, much to Katja\'s delight.');
        qspCall(s, 'arousal', 'bj', 3);
        qspCall(s, 'arousal', 'end');
        qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 0);
        ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 11) + 10);
        qspCall(s, 'stat', '');
        scene.text('As you get up, Katja smiles. "What a complete slut you are! Was it any good?" She clearly approves of your work.');
        scene.text('You move to the other side of the bar. After you sit down next to her, you start answering her questions, trying to entertain her as you order your drinks.');
      }
    }
  }
  qspCall(s, 'food_menu', 'city_nightclub_only_cost');
  // TODO-QSP: end
  scene.build();
}

function enterBartenderBjKatjaJoin(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/sex/bartender_bj4.jpg');
  scene.text('You take his cock into your mouth once more as Katja gets down next to you.');
  scene.text('"Let me help with that," she says. You hold out the bartender\'s dick for her and she starts licking it.');
  scene.text('You share his dick for a few minutes, taking turns sucking on it.');
  qspCall(s, 'arousal', 'bj', 3);
  // TODO-QSP: end
  scene.actions([
    { label: 'Get him off', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 10) + 1) < Math.min(((s as any).katjaQW ?? 0)?.['slut']/20, 5)  &&  ((s as any).npc_throat ?? 0)?.['A14'] > ((s as any).dick ?? 0)) {
      scene.text('You and Katja do a good job, and he soon cums down Katja\'s throat. She swallows everything, like a pro.');
    } else {
      scene.text('You and Katja do a good job, and he soon cums down your throat. Katja tells you to swallow everything, which you do.');
      qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 0);
    }
    qspCall(s, 'arousal', 'end');
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 11) + 10);
    qspCall(s, 'stat', '');
    scene.text('"What a perfect pair of sluts we are," Katja says as you get up before bursting out in laughter over what she just said.');
    scene.text('You move to the other side of the bar and order your drinks.');
  } },
    { label: 'Fuck him', goto: ['katja_nightclub_sex', 'bartender_sex1'] },
  ]);
  scene.build();
}

function enterBartenderSex1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A14', 'a');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/sex/bartender_sex1.jpg');
  // TODO-QSP: dynamic text: "Enough sucking. I want that dick in my pussy," you say as you stand up. You '+i...
  scene.text('"Enough sucking. I want that dick in my pussy," you say as you stand up. You \'+iif($pantyworntype ! \'none\', \' pull down your panties and \', \' \')+\'lift up your dress before bending over.');
  // TODO-QSP: dynamic text: Katja jumps onto the bar so her pussy is just in front of your mouth. You start ...
  scene.text(`Katja jumps onto the bar so her pussy is just in front of your mouth. You start licking it as the bartender jams his ${((s as any).dick ?? 0)}cm, ${((s as any).dick_girth ?? 0)} cock into your pussy.`);
  qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID ?? 0), 'group');
  qspCall(s, 'arousal', 'cuni_give', (-3), ((s as any).npcID1 ?? 0), 'group', 'lesbian');
  ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 11) + 5);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Katja wants some dick too', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/sex/bartender_sex2.jpg');
    scene.text('After you\'ve been fucked for a few minutes, Katja speaks up. "I want some of that dick too!"');
    scene.text('You remove your mouth from her pussy. "Okay."');
    scene.text('The bartender pulls out of you. "Since the door is closed, we won\'t be disturbed. Let\'s move to one of the couches to get more comfortable."');
    // TODO-QSP: 'He sits with his <<dick>>cm, <<$dick_girth>> cock standing straight up. Katja is quick to jump on i...
    scene.text('You get on the back of the couch and present your pussy to her. She hungrily starts eating you out as she rides his cock.');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    ((s as any).katjaQW ?? {})['slut'] = (((s as any).katjaQW ?? {})['slut'] ?? 0) + (Math.floor(Math.random() * 4) + 0);
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 16) + 5);
    qspCall(s, 'arousal', 'cuni', 3, ((s as any).npcID1 ?? 0), 'group', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Change again', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/sex/bartender_sex3.jpg');
    scene.text('"I need a break," Katja says after riding him for a few minutes and gets off his cock.');
    scene.text('You take that as an invitation and crawl onto it, reverse cowgirl, and place your feet on his thighs. He puts his hands under your ass and helps you slide up and down on his cock.');
    scene.text('Katja gets in close, watching you while fingering herself.');
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 0);
    qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Katja\'s turn again', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/sex/bartender_sex4.jpg');
    scene.text('After a few minutes in this position, it\'s clear that this is very exhausting on the bartender\'s arms. "Time to change position," he says.');
    scene.text('You get off his cock and he lies down on his side on the couch. "Let me have some," Katja pleads and you let her get down in a spoon position with the bartender.');
    scene.text('He then guides his cock into Katja and starts fucking her while you play with her clit.');
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 11) + 5);
    qspCall(s, 'arousal', 'vaginal_finger_give', 3, ((s as any).npcID1 ?? 0), 'group', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Katja gets pounded', handler: (st: GameState) => {
    if (((s as any).katjaQW ?? 0)?.['horny'] >= 100) {
      ((s as any).katjaQW ?? {})['horny'] = 0;
      scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/sex/bartender_sex5a.jpg');
      scene.text('The bartender gets impatient with the soft fucking, and suddenly turns Katja over on her stomach and starts pounding her hard.');
      scene.text('Her mouth is now near your pussy, and she starts licking it, but it doesn\'t last long before she stops and cums, hard and loud.');
    } else {
      ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 16) + 5);
      scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/sex/bartender_sex5b.jpg');
      scene.text('The bartender gets impatient with the soft fucking, and suddenly turns Katja over on her stomach and starts pounding her hard.');
      scene.text('Her mouth is now near your pussy, and she starts licking it with all the skill she has.');
    }
    qspCall(s, 'arousal', 'cuni', 3, ((s as any).npcID1 ?? 0), 'group', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Your turn to get pounded', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/sex/bartender_sex6.jpg');
    // TODO-QSP: dynamic text: "I need to try your pussy again before I cum. Get up on the couch and put your a...
    scene.text('"I need to try your pussy again before I cum. Get up on the couch and put your ass in the air," the bartender tells you as he pulls out of \'+iif(katjaQW[\'horny\'] = 0, \'a satisfied\', \'an annoyed\')+\' looking Katja.');
    scene.text('You do as he says and he starts pounding you as hard as he can, while putting his fingers in Katja\'s mouth for her to suck on.');
    qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Katja gets a facial', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/sex/bartender_sex7.jpg');
    qspCall(s, 'arousal', 'end');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.text('"I\'m cumming!" the bartender screams as he pulls out of you and starts squirting his sperm over Katja\'s face.');
    scene.text('By the time you\'ve gotten turned around, he\'s finished and Katja\'s face has a thick layer of cum around her mouth.');
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/sex/bartender_after_sex.jpg');
    scene.text('"That was great. You definitely deserve to have a drink now," he says as he starts to get dressed.');
    // TODO-QSP: 'You start by helping Katja get her face cleaned up. '+iif(katjaQW['slut'] > 100, '"What a complete ...
    scene.text('She then starts laughing. By the time you\'ve finished dressing, she has calmed down and you walk to the bar, where the bartender is already waiting to serve you.');
    scene.text('"After that wonderful, but exhausting experience, I think you should start with these," he says and hands you some bottles of water. "What else would you like?"');
    scene.actions([
      { label: 'get a drink', handler: (st: GameState) => {
    qspCall(s, 'food_menu', '');
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

function enterLonebartenderDrinking1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  ((s as any).katjaQW ?? {})['drinks'] = (((s as any).katjaQW ?? {})['drinks'] ?? 0) + (Math.floor(Math.random() * 2) + 1);
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/disco_drinnking_bar.jpg');
  scene.text('Katja also orders her drink, and you soon both have your drinks, talking until they\'re finished. The whole time, the bartender tries to avoid looking either of you in the eyes.');
  scene.text('You thank the bartender again, which makes him blush before you head back to the dance floor.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go dancing', goto: ['katja_nightclub', 'dance'] },
  ]);
  scene.build();
}

function enterLonebartenderDrinking2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  ((s as any).katjaQW ?? {})['drinks'] = (((s as any).katjaQW ?? {})['drinks'] ?? 0) + (Math.floor(Math.random() * 2) + 1);
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/disco_drinnking_bar.jpg');
  scene.text('Katja also orders her drink, and you soon both have your drinks and start talking. The bartender, on occasion, joins the conversation and you have a great time.');
  scene.text('You both thank him with kisses on his cheek when you\'ve finished your drinks before heading back to the dance floor.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go dancing', goto: ['katja_nightclub', 'dance'] },
  ]);
  scene.build();
}

function enterCheatingConversation(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  scene.text('You head out to the platform overlooking the dance floor and see Katja standing there. As you approach, you can see her fuming.');
  if (((s as any).katjaQW ?? 0)?.['cheat_warning'] === 0) {
    ((s as any).katjaQW ?? {})['cheat_warning'] = 1;
    // TODO-QSP: dynamic text: "How could you <<$pcs_nickname>>? You said you were my girlfriend, and that it w...
    scene.text(`"How could you ${((s as any).pcs_nickname ?? 0)}? You said you were my girlfriend, and that it was just going to be the two of us!" she says with tears coming out of her eyes.`);
    if (((s as any).locArgs?.[1] ?? 0) === 'bartender') {
      scene.text('"It wasn\'t anything sexual! I just needed to do something to keep the bar open for us. There were no feelings in it from me. Only acting," you try to explain.');
      if (((s as any).pcs_persuas ?? 0) >= (Math.floor(Math.random() * (100 - 50+((s as any).katjaQW ?? 0)?.['dom'] + 1)) + (50+((s as any).katjaQW ?? 0)?.['dom']))) {
        qspCall(s, 'exp_gain', 'persuas', Math.floor(Math.random() * 4) + 3);
        scene.text('"And that\'s supposed to make me feel better? That you would have sex with people like a machine? Are you like that with me?" she says, still crying.');
        scene.text('"Of course not! With you, it\'s different since I love you. I don\'t love anybody else the way I love you!" you say.');
        scene.text('She just stands there for a moment, but her crying subsides. "You betrayed me. I need to think about it. I need to be alone," she says and turns around before walking towards the exit.');
      } else {
        qspCall(s, 'exp_gain', 'persuas', Math.floor(Math.random() * 2) + 1);
        qspCall(s, 'npc_relationship', 'modify', 'A14', 'hate');
        scene.text('"So you\'re just a cheap whore? That doesn\'t make it better! How many others have you done it with behind my back?!" she asks while still crying, but it seems to be more out of anger now.');
        scene.text('"No one. This is the only time. I promise that it will never happen again!" you say, trying to calm her down.');
        scene.text('"I don\'t know if I can trust you. Why did I fall in love with such a slut? I need to be alone," she says and turns around before walking towards the exit without giving you time to say anything else.');
      }
    } else {
      scene.text('"It wasn\'t anything sexual! No emotions, just me doing it to keep them happy. Only acting," you try to explain.');
      if (((s as any).pcs_persuas ?? 0) >= (Math.floor(Math.random() * (100 - 50+((s as any).katjaQW ?? 0)?.['dom'] + 1)) + (50+((s as any).katjaQW ?? 0)?.['dom']))) {
        qspCall(s, 'exp_gain', 'persuas', Math.floor(Math.random() * 4) + 3);
        scene.text('"And that\'s supposed to make me feel better? That you would have sex with people like a machine? Are you like that with me?" she asks, still crying.');
        scene.text('"Of course not! With you, it\'s different since I love you. I don\'t love anybody else the way I love you!" you say.');
        scene.text('She just stands there for a moment, but her crying subsides. "You betrayed me. I need to think about it. I need to be alone," she says and turns around before walking towards the exit.');
      } else {
        qspCall(s, 'exp_gain', 'persuas', Math.floor(Math.random() * 2) + 1);
        qspCall(s, 'npc_relationship', 'modify', 'A14', 'hate');
        scene.text('"So you have sex with people without emotions? That doesn\'t make it better! How many others have you done it with behind my back?!" she asks while still crying, but it seems to be more out of anger now.');
        scene.text('"No one. This is the only time. I promise that it will never happen again!" you say, trying to calm her down.');
        scene.text('"I don\'t know if I can trust you. Why did I fall in love with such a slut? I need to be alone," she says and turns around before walking towards the exit without giving you time to say anything else.');
      }
    }
    if (((s as any).hour ?? 0) > 10) {
      ((s as any).locat ?? {})['katja_rand2'] = ((s as any).daystart ?? 0);
    } else {
      ((s as any).locat ?? {})['katja_rand2'] = ((s as any).daystart ?? 0) -1;
    }
    ((s as any).locat ?? {})['katja_save2'] = 20;
    ((s as any).locat ?? {})['katja'] = ((s as any).locat ?? 0)?.['katja_save2'];
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let her leave', goto: ['city_nightclub', 'private_rooms'] },
    ]);
  } else {
    // TODO-QSP: dynamic text: "Again! You keep cheating on me, <<$pcs_nickname>>. How can I ever trust you aga...
    scene.text(`"Again! You keep cheating on me, ${((s as any).pcs_nickname ?? 0)}. How can I ever trust you again?!" she asks, clearly angry.`);
    if (((s as any).locArgs?.[1] ?? 0) === 'bartender') {
      scene.text('"It wasn\'t anything sexual! I just needed to do something to keep the bar open for us. There were no feelings in it from me. Only acting," you try to explain.');
    } else {
      scene.text('"It wasn\'t anything sexual! No emotions, just me doing it to keep them happy. Only acting," you try to explain.');
    }
    scene.text('"I don\'t want your excuses! I want you to stop betraying my trust!" she replies.');
    if (((s as any).pcs_persuas ?? 0) >= (Math.floor(Math.random() * (100 - 50+((s as any).katjaQW ?? 0)?.['dom'] + 1)) + (50+((s as any).katjaQW ?? 0)?.['dom']))) {
      qspCall(s, 'exp_gain', 'persuas', Math.floor(Math.random() * 2) + 1);
      qspCall(s, 'willpower', 'misc', 'force');
    } else {
      qspCall(s, 'exp_gain', 'persuas', Math.floor(Math.random() * 2) + 0);
      qspCall(s, 'willpower', 'misc', 'force', 'hard');
    }
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Try to apologise [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Try to apologise [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    if (((s as any).katjaQW ?? 0)?.['cheat_times'] > 0) {
      ((s as any).katjaQW ?? {})['cheat_times'] = (((s as any).katjaQW ?? {})['cheat_times'] ?? 0) - (Math.floor(Math.random() * 2) + 0);
    }
    qspCall(s, 'willpower', 'pay', 'force');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    if (((s as any).locArgs?.[1] ?? 0) === 'bartender') {
      scene.text('"I\'m sorry… I was just trying to get him to keep the bar open for us the only way I knew. Like the cheap Pavlovsk whore I am…" you say.');
      scene.text('Your less-than-flattering description of yourself makes Katja laugh. "Don\'t betray me again," she says, no longer very angry. "But that\'s probably too much to ask, seeing as you\'re just a cheap whore from the Five Eight estate. What shall I ever do with you?"');
      scene.text('She continues shaking her head, but with a small smile on her face.');
    } else {
      scene.text('"I\'m sorry… I acted like the Pavlovsk slut my mother raised me to be. I won\'t do it again!" you say.');
      scene.text('Your less-than-flattering description of yourself makes Katja laugh. "Don\'t betray me again," she says, no longer very angry. "But that\'s probably too much to ask, seeing as you\'re just a dumb slut from the Five Eight estate. What shall I ever do with you?"');
      scene.text('she continues shaking her head, but with a small smile on her face.');
    }
    scene.text('"Let\'s go dance," she continues.');
    scene.actions([
      { label: 'Go dancing', goto: ['katja_nightclub', 'dance'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Let her cool off', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"Calm down, Katja! It was a mistake! I promise it won\'t happen again," you say.');
    scene.text('"You betrayed me! Again! I can\'t trust you right now, and I don\'t know if I\'ll be able to again. I\'m going home. Don\'t follow me!" she says and turns around before walking towards the exit.');
    if (((s as any).hour ?? 0) > 10) {
      ((s as any).locat ?? {})['katja_rand2'] = ((s as any).daystart ?? 0);
    } else {
      ((s as any).locat ?? {})['katja_rand2'] = ((s as any).daystart ?? 0) -1;
    }
    ((s as any).locat ?? {})['katja_save2'] = 20;
    ((s as any).locat ?? {})['katja'] = ((s as any).locat ?? 0)?.['katja_save2'];
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let her leave', goto: ['city_nightclub', 'private_rooms'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPrivateroomTwoGirls(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'npcgeneratec', '', 1, '', Math.floor(Math.random() * 18) + 18, Math.floor(Math.random() * 3) + 2);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'a');
  qspCall(s, 'npcgeneratec', '', 1, '', Math.floor(Math.random() * 18) + 18, Math.floor(Math.random() * 3) + 2);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'b');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/private_room_with_two_girls.jpg');
  scene.text('You leave the dance floor and head for the private rooms upstairs. One of the girls talks with a bouncer and a waiter soon arrives and shows you into one of the rooms.');
  scene.text('Once you\'re seated, the waiter asks for your orders.');
  qspCall(s, 'food_menu', 'city_nightclub_only_cost');
  // TODO-QSP: end
  scene.build();
}

function enterPrivateroomTwoGirlsAfterDrinks(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_nightclub', 'bar');
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  ((s as any).katjaQW ?? {})['drinks'] = (((s as any).katjaQW ?? {})['drinks'] ?? 0) + (Math.floor(Math.random() * 2) + 1);
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/private_room_with_two_girls.jpg');
  if ((!((s as any).npc_rounds ?? 0))) {
    // TODO-QSP: dynamic text: You get acquainted with the girls, who introduce themselves as <<$npcdesc1>> and...
    scene.text(`You get acquainted with the girls, who introduce themselves as ${((s as any).npcdesc1 ?? 0)} and ${((s as any).npcdesc2 ?? 0)}.`);
  }
  // TODO-QSP: dynamic text: The drinks arrive and you sit at the small table chatting with <<$npcdesc1>>, wh...
  scene.text(`The drinks arrive and you sit at the small table chatting with ${((s as any).npcdesc1 ?? 0)}, while Katja and ${((s as any).npcdesc2 ?? 0)} occupy the couch.`);
  if (((s as any).pcs_hotcat ?? 0) + ((s as any).npc_horny ?? 0)?.[String((s as any).npcID2 ?? 0)]/10 + ((s as any).npc_rounds ?? 0) < (Math.floor(Math.random() * 11) + 6)) {
    if ((Math.floor(Math.random() * 4) + 0)===0) {
      // TODO-QSP: dynamic text: Your drinks are soon finished. "It was nice talking with you, but we need to be ...
      scene.text(`Your drinks are soon finished. "It was nice talking with you, but we need to be going," ${((s as any).npcdesc1 ?? 0)} says as she gets up and leaves with ${((s as any).npcdesc2 ?? 0)}.`);
      scene.text('Katja then suggests that you go dancing and you follow her to the dance floor.');
      scene.actions([
        { label: 'Go to the dance floor', goto: ['katja_nightclub', 'dance'] },
      ]);
    } else {
      // TODO-QSP: dynamic text: When your drinks are empty, <<$npcdesc1>> suggests you have another one.
      scene.text(`When your drinks are empty, ${((s as any).npcdesc1 ?? 0)} suggests you have another one.`);
      scene.actions([
        { label: 'Order another drink', handler: (st: GameState) => {
    (s as any).npc_rounds = ((s as any).npc_rounds ?? 0) + (1);
    scene.text('You look at Katja, who nods, and agree to order anther round.');
    qspCall(s, 'food_menu', 'city_nightclub_only_cost');
  } },
        { label: 'Say goodbye and go to the dance floor', handler: (st: GameState) => {
    scene.text('You tell them that you want to go dancing and Katja agrees, so you say your goodbyes and head for the dance floor with Katja.');
    scene.actions([
      { label: 'Go to the dance floor', goto: ['katja_nightclub', 'dance'] },
    ]);
  } },
      ]);
    }
  } else {
    // TODO-QSP: dynamic text: <<$npcdesc1>> is flirting with you and her hand occasionally touches your thigh.
    scene.text(`${((s as any).npcdesc1 ?? 0)} is flirting with you and her hand occasionally touches your thigh.`);
    scene.text('"It\'s getting pretty hot in here," she says as she finishes her drink. "I think we need to lose some clothes." Her look clearly states that a lot more touching is going to happen…');
    if ((((s as any).npc_had_sex ?? 0)?.['A14'] === 0  &&  ((s as any).katjaQW ?? 0)?.['liberated'] === 0)  ||  (((s as any).katjaQW ?? 0)?.['simultanous_girls'] === 0  &&  ((s as any).npc_had_sex ?? 0)?.['A14'] === 0  &&  ((s as any).katjaQW ?? 0)?.['liberated'] === 1)  ||  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] === 2  ||  qspFunc(s, 'katja_procedural', 'willing_to_be_naughty') + ((s as any).katjaQW ?? 0)?.['horny'] < (Math.floor(Math.random() * 76) + 50)) {
      // TODO-QSP: dynamic text: You look at Katja and it's clear that she's not interested in going further with...
      scene.text(`You look at Katja and it's clear that she's not interested in going further with ${((s as any).npcdesc1 ?? 0)} and ${((s as any).npcdesc2 ?? 0)}.`);
      if (((s as any).npc_had_sex ?? 0)?.['A14']  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] < 2) {
        if (qspFunc(s, 'katja_procedural', 'willing_to_be_naughty') + ((s as any).katjaQW ?? 0)?.['horny'] <= 100) {
          qspCall(s, 'willpower', 'sex', 'force');
        } else {
          qspCall(s, 'willpower', 'sex', 'force', 'easy');
        }
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Convince Katja to have sex with <<$npcdesc1>> and <<$npcdesc2>> [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Convince Katja to have sex with <<$npcdesc1>> and <<$npcdesc2>> [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'force');
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: "Come on Katja, I'm sure these beautiful girls will look and feel even better wi...
    scene.text(`"Come on Katja, I'm sure these beautiful girls will look and feel even better without clothes on. '+iif(katjaQW['simultanous_girls'] < 3, 'It's time that you expanded your horizon.', 'You've enjoyed several girls before.')+', It will be fun," you say as you let your hand glide down ${((s as any).npcdesc1 ?? 0)}'s body.`);
    // TODO-QSP: dynamic text: Katja squirms as her face turns very red. "You're right, <<$pcs_nickname>>. It i...
    scene.text(`Katja squirms as her face turns very red. "You're right, ${((s as any).pcs_nickname ?? 0)}. It is too warm, so let's get rid of these clothes…" she says in a seductive voice.`);
    scene.actions([
      { label: 'Have a foursome', goto: ['katja_nightclub_sex', 'private_booth_FFFF'] },
    ]);
  } },
          ]);
        }
      }
      scene.actions([
        { label: 'Tell them that you and Katja want to go dancing', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You tell them that you want to go dancing and Katja agrees. <<$npcdesc1>> and <<...
    scene.text(`You tell them that you want to go dancing and Katja agrees. ${((s as any).npcdesc1 ?? 0)} and ${((s as any).npcdesc2 ?? 0)} look very disappointed as you say your goodbyes and head for the dance floor with Katja.`);
    scene.actions([
      { label: 'Go to the dance floor', goto: ['katja_nightclub', 'dance'] },
    ]);
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: You look at Katja, who's clearly excited at the prospect of having sex with <<$n...
      scene.text(`You look at Katja, who's clearly excited at the prospect of having sex with ${((s as any).npcdesc1 ?? 0)} and ${((s as any).npcdesc2 ?? 0)}.`);
      // TODO-QSP: dynamic text: "You're right, <<$pcs_nickname>>. It is too warm, so let's get rid of these clot...
      scene.text(`"You're right, ${((s as any).pcs_nickname ?? 0)}. It is too warm, so let's get rid of these clothes…" she says in a seductive voice while looking at you for your reaction.`);
      if (qspFunc(s, 'katja_procedural', 'willing_to_be_naughty') + ((s as any).katjaQW ?? 0)?.['horny'] <= 100) {
        qspCall(s, 'willpower', 'sex', 'force', 'easy');
      } else {
        if (qspFunc(s, 'katja_procedural', 'willing_to_be_naughty') + ((s as any).katjaQW ?? 0)?.['horny'] <= 200) {
          qspCall(s, 'willpower', 'sex', 'force');
        } else {
          qspCall(s, 'willpower', 'sex', 'force', 'hard');
        }
      }
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Convince Katja to stop [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Convince Katja to stop [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'force');
    scene.text('"Come on Katja, we need to back to the dance floor. Don\'t let the alcohol determine your actions," you tell her.');
    scene.text('Katja looks at you a little puzzled, but smiles and gets up. "You\'re right. We should get back to the dance floor," she says as she walks over to you and holds out her hand.');
    // TODO-QSP: dynamic text: You take it and stand up before saying goodbye to <<$npcdesc1>> and <<$npcdesc2>...
    scene.text(`You take it and stand up before saying goodbye to ${((s as any).npcdesc1 ?? 0)} and ${((s as any).npcdesc2 ?? 0)} and leaving the booth, with the two girls looking very disappointed.`);
    if (((s as any).npc_had_sex ?? 0)?.['A14']) {
      scene.text('When you get closer to the dance floor, Katja leans into your ear. "You owe me a big orgasm tonight," she whispers. "It would have been fun playing around with those hot girls. But for now, let\'s dance."');
    }
    scene.actions([
      { label: 'Follow Katja to the dance floor', goto: ['katja_nightclub', 'dance'] },
    ]);
  } },
        ]);
      }
      if (((s as any).katjaQW ?? 0)?.['faithful'] === 0) {
        scene.actions([
          { label: 'Give them some privacy', handler: (st: GameState) => {
    ((s as any).katjaQW ?? {})['disco_check_time'] = ((s as any).totminut ?? 0);
    ((s as any).katjaQW ?? {})['disco_loc'] = 7;
    qspCall(s, 'katja_procedural', 'sex_set', 0, 2);
    scene.text('You slowly get up. "Have fun. You can try to find me after you\'ve finished here," you say to Katja as you leave.');
    scene.actions([
      { label: 'Leave', goto: ['city_nightclub', 'private_rooms'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Join Katja and have a foursome', goto: ['katja_nightclub_sex', 'private_booth_FFFF'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPrivateBooth_FFFF(s: GameState, scene: SceneBuilder): void {
  if (((s as any).katjaQW ?? 0)?.['simultanous_girls'] < 3) {
    ((s as any).katjaQW ?? {})['simultanous_girls'] = 3;
  }
  if (((s as any).npc_had_sex ?? 0)?.['A14'] === 0  &&  ((s as any).katjaQW ?? 0)?.['first_time_in_nightclub'] === 0) {
    ((s as any).katjaQW ?? {})['knows_cuni'] = 1;
    ((s as any).katjaQW ?? {})['first_time_in_nightclub'] = 3;
    ((s as any).katjaQW ?? {})['slut'] = (((s as any).katjaQW ?? {})['slut'] ?? 0) + (5);
    (s as any).girl = ((s as any).girl ?? 0) + (1);
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'adore');
  }
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/sex/two_girls_private1.jpg');
  if (((s as any).pantyworntype ?? 0) === 'none') {
    // TODO-QSP: dynamic text: You slowly and sensually strip naked. <<$npcdesc1>> has stripped down to her und...
    scene.text(`You slowly and sensually strip naked. ${((s as any).npcdesc1 ?? 0)} has stripped down to her underwear and gently starts exploring your ${((s as any).pc_descWordy ?? 0)?.['breast']} with her hands.`);
  } else {
    if (((s as any).braworntype ?? 0) === 'none') {
      // TODO-QSP: dynamic text: You slowly and sensually strip down to your panties. <<$npcdesc1>> has stripped ...
      scene.text(`You slowly and sensually strip down to your panties. ${((s as any).npcdesc1 ?? 0)} has stripped down to her underwear and gently starts exploring your ${((s as any).pc_descWordy ?? 0)?.['breast']} with her hands.`);
    } else {
      // TODO-QSP: dynamic text: You slowly and sensually strip down to your underwear. <<$npcdesc1>> has done th...
      scene.text(`You slowly and sensually strip down to your underwear. ${((s as any).npcdesc1 ?? 0)} has done the same and gently removes your bra before she starts exploring your ${((s as any).pc_descWordy ?? 0)?.['breast']} with her hands.`);
    }
  }
  // TODO-QSP: dynamic text: You look over at Katja and <<$npcdesc2>> and see that Katja have also stripped d...
  scene.text(`You look over at Katja and ${((s as any).npcdesc2 ?? 0)} and see that Katja have also stripped down to her underwear.`);
  // TODO-QSP: dynamic text: She lies with her head in <<$npcdesc2>>'s lap, sucking on her breast while <<$np...
  scene.text(`She lies with her head in ${((s as any).npcdesc2 ?? 0)}'s lap, sucking on her breast while ${((s as any).npcdesc2 ?? 0)} has her hand down Katja's panties, playing with her pussy.`);
  // TODO-QSP: dynamic text: "Why don't we join them?" <<$npcdesc1>> suggests.
  scene.text(`"Why don't we join them?" ${((s as any).npcdesc1 ?? 0)} suggests.`);
  qspCall(s, 'npcStat', 'A14');
  ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 11) + 5);
  qspCall(s, 'arousal', 'foreplay', 3, ((s as any).npcID ?? 0), 'group', 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Join them', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/sex/two_girls_private2.jpg');
    // TODO-QSP: dynamic text: You walk over to Katja and <<$npcdesc2>> as <<$npcdesc1>> gets down on her knees...
    scene.text(`You walk over to Katja and ${((s as any).npcdesc2 ?? 0)} as ${((s as any).npcdesc1 ?? 0)} gets down on her knees and removes Katja's head from ${((s as any).npcdesc2 ?? 0)}'s breast and starts to kiss her.`);
    // TODO-QSP: dynamic text: You follow and bend down to make out with <<$npcdesc2>> and fondle her breast.
    scene.text(`You follow and bend down to make out with ${((s as any).npcdesc2 ?? 0)} and fondle her breast.`);
    qspCall(s, 'arousal', 'foreplay_give', 2, ((s as any).npcID2 ?? 0), 'group', 'lesbian');
    qspCall(s, 'arousal', 'kiss', (-2), ((s as any).npcID2 ?? 0), 'group', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get into it', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/sex/two_girls_private3.jpg');
    // TODO-QSP: dynamic text: You stop kissing <<$npcdesc2>> and move your head down to suck on her breast.
    scene.text(`You stop kissing ${((s as any).npcdesc2 ?? 0)} and move your head down to suck on her breast.`);
    // TODO-QSP: dynamic text: You see that <<$npcdesc1>> has moved her head to Katja's crotch and started to l...
    scene.text(`You see that ${((s as any).npcdesc1 ?? 0)} has moved her head to Katja's crotch and started to lick her pussy, while Katja is removing ${((s as any).npcdesc1 ?? 0)}'s bra.`);
    qspCall(s, 'arousal', 'foreplay_give', 2, ((s as any).npcID2 ?? 0), 'group', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'See what <<$npcdesc1>> does', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/sex/two_girls_private4.jpg');
    // TODO-QSP: dynamic text:  <<$npcdesc1>> moves away from and Katja and looks for something in her purse.
    scene.text(` ${((s as any).npcdesc1 ?? 0)} moves away from and Katja and looks for something in her purse.`);
    // TODO-QSP: dynamic text: While she's doing this, '+iif($pantyworntype = 'none', 'you remove your panties ...
    scene.text(`While she's doing this, '+iif($pantyworntype = 'none', 'you remove your panties and', ' ')+' ${((s as any).npcdesc2 ?? 0)} removes Katja's bra.`);
    // TODO-QSP: dynamic text: You play with Katja's breast until <<$npcdesc1>> comes back holding a medium siz...
    scene.text(`You play with Katja's breast until ${((s as any).npcdesc1 ?? 0)} comes back holding a medium sized vibrator, clearly intending on stuffing it in Katja's '+iif(npc_vag['A14'] <10, 'tight', 'well used')+' pussy.`);
    qspCall(s, 'arousal', 'foreplay_give', 2, ((s as any).npcID ?? 0), 'group', 'lesbian');
    qspCall(s, 'stat', '');
    if (((s as any).npc_vag ?? 0)?.['A14'] === 0) {
      scene.text('Katja sees the vibrator and understands the intention. You can see the panic in her eyes. "No! I\'m sorry, but I don\'t want that in me!" she quickly blurts out.');
      // TODO-QSP: dynamic text: "Okay. Then I'll just have to use my tongue," <<$npcdesc1>> says a little disapp...
      scene.text(`"Okay. Then I'll just have to use my tongue," ${((s as any).npcdesc1 ?? 0)} says a little disappointed.`);
      scene.actions([
        { label: 'Get Katja off', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/sex/two_girls_private5a.jpg');
    // TODO-QSP: dynamic text: <<$npcdesc1>> puts the vibrator away and get her face down in Katja's crotch to ...
    scene.text(`${((s as any).npcdesc1 ?? 0)} puts the vibrator away and get her face down in Katja's crotch to start eating her out.`);
    // TODO-QSP: dynamic text: You and <<$npcdesc2>> continue to play with Katja's breast, but it gets harder a...
    scene.text(`You and ${((s as any).npcdesc2 ?? 0)} continue to play with Katja's breast, but it gets harder as Katja starts to move around as she approaches an orgasm.`);
    // TODO-QSP: dynamic text: <<$npcdesc1>> really know how to use her tongue, and after a few minutes, Katja ...
    scene.text(`${((s as any).npcdesc1 ?? 0)} really know how to use her tongue, and after a few minutes, Katja cums hard.`);
    qspCall(s, 'arousal', 'foreplay_give', 5, ((s as any).npcID ?? 0), 'group', 'lesbian');
    ((s as any).katjaQW ?? {})['horny'] = 0;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Your turn', goto: ['katja_nightclub_sex', 'private_booth_FFFF_you'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).npc_vag ?? 0)?.['A14'] < 25) {
        scene.text('Katja sees the vibrator and understands the intention, but you can see that she\'s a little nervous. "That\'s big! I\'m not used to such huge things in my pussy. Please be careful."');
        // TODO-QSP: dynamic text: "Of course. I promise you that you won't feel any pain," <<$npcdesc1>> says and ...
        scene.text(`"Of course. I promise you that you won't feel any pain," ${((s as any).npcdesc1 ?? 0)} says and licks the vibrator some more so it's very wet.`);
      } else {
        // TODO-QSP: dynamic text: When Katja sees the vibrator, her eyes light up. "That looks good. '+iif(katjaQW...
        scene.text('When Katja sees the vibrator, her eyes light up. "That looks good. \'+iif(katjaQW[\'slul\'] < 100, \'I want you to fuck me with it\', \'ram it into my wet cunt\')+\'."');
        // TODO-QSP: dynamic text: "My pleasure. I promise that you'll get the fucking you deserve," <<$npcdesc1>> ...
        scene.text(`"My pleasure. I promise that you'll get the fucking you deserve," ${((s as any).npcdesc1 ?? 0)} says and licks the vibrator one more time.`);
      }
      scene.actions([
        { label: 'Katja gets fucked', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/sex/two_girls_private5b.jpg');
    // TODO-QSP: dynamic text: <<$npcdesc1>> stuffs the vibrator into Katja's pussy and starts moving it in and...
    scene.text(`${((s as any).npcdesc1 ?? 0)} stuffs the vibrator into Katja's pussy and starts moving it in and out, occasionally getting down and using her tongue on Katja's clit.`);
    // TODO-QSP: dynamic text: You and <<$npcdesc2>> continue to play with Katja's breast, but it gets harder a...
    scene.text(`You and ${((s as any).npcdesc2 ?? 0)} continue to play with Katja's breast, but it gets harder as Katja starts thrashing about as she approaches an orgasm.`);
    // TODO-QSP: dynamic text: <<$npcdesc1>> really knows how to use the vibrator, and after a few minutes, Kat...
    scene.text(`${((s as any).npcdesc1 ?? 0)} really knows how to use the vibrator, and after a few minutes, Katja cums hard with a huge scream.`);
    qspCall(s, 'arousal', 'foreplay_give', 3, ((s as any).npcID ?? 0), 'group', 'lesbian');
    ((s as any).katjaQW ?? {})['horny'] = 0;
    ((s as any).katjaQW ?? {})['slut'] = (((s as any).katjaQW ?? {})['slut'] ?? 0) + (4);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Your turn', goto: ['katja_nightclub_sex', 'private_booth_FFFF_you'] },
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

function enterPrivateBooth_FFFFYou(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/sex/two_girls_private6.jpg');
  // TODO-QSP: dynamic text: "Your turn," <<$npcdesc1>> says after Katja finally comes down from her orgasm. ...
  scene.text(`"Your turn," ${((s as any).npcdesc1 ?? 0)} says after Katja finally comes down from her orgasm. She gets up and you crawl up on the couch on all fours.`);
  // TODO-QSP: dynamic text: <<$npcdesc2>> gets in front of you and you take her breast into your mouth once ...
  scene.text(`${((s as any).npcdesc2 ?? 0)} gets in front of you and you take her breast into your mouth once again while Katja and ${((s as any).npcdesc1 ?? 0)} play with your ass.`);
  scene.text('You feel several fingers probing both your pussy and your asshole when one of them suddenly disappears from behind you.');
  // TODO-QSP: dynamic text: Shortly after, <<$npcdesc1>> shows you a giant black dildo. "This is going to go...
  scene.text(`Shortly after, ${((s as any).npcdesc1 ?? 0)} shows you a giant black dildo. "This is going to go in your ass."`);
  qspCall(s, 'arousal', 'vaginal_finger', 1, ((s as any).npcID1 ?? 0), 'group', 'lesbian');
  qspCall(s, 'arousal', 'vaginal_finger', 1, ((s as any).npcID ?? 0), 'group', 'lesbian');
  qspCall(s, 'arousal', 'anal_finger', (-1), ((s as any).npcID ?? 0), 'group', 'lesbian');
  qspCall(s, 'arousal', 'anal_finger', (-1), ((s as any).npcID1 ?? 0), 'group', 'lesbian');
  qspCall(s, 'arousal', 'foreplay_give', (-2), ((s as any).npcID2 ?? 0), 'group', 'lesbian');
  ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 11) + 5);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Accept the giant dildo in your ass', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'D7', 'c');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/sex/two_girls_private7.jpg');
    if (((s as any).auto_anal_lube ?? 0) !== 1) {
      if (3*((s as any).dick3 ?? 0) < 4*((s as any).pcs_ass ?? 0)) {
        scene.text('"I can\'t wait to take that monster in my ass!" you say excitedly as you lift your ass into the air.');
        // TODO-QSP: dynamic text: <<$npcdesc1>> and the girls play with your asshole, using a lot of their spit to...
        scene.text(`${((s as any).npcdesc1 ?? 0)} and the girls play with your asshole, using a lot of their spit to get it ready for the dildo. While they're doing that, you play with your clit.`);
      } else {
        if (((s as any).dick3 ?? 0) < 2*((s as any).pcs_ass ?? 0)) {
          scene.text('"It\'s big, but I think I can take it…" you say a little nervously before you lift your ass into the air.');
          // TODO-QSP: dynamic text: <<$npcdesc1>> and the girls play with your asshole, using a lot of their spit to...
          scene.text(`${((s as any).npcdesc1 ?? 0)} and the girls play with your asshole, using a lot of their spit to get it ready for the dildo. While they're doing that you play with your clit.`);
        } else {
          scene.text('"I\'m not sure I can take that! Promise me you\'ll be very careful?" you ask.');
          // TODO-QSP: dynamic text: "I'll be as gentle as possible," <<$npcdesc1>> replies.
          scene.text(`"I'll be as gentle as possible," ${((s as any).npcdesc1 ?? 0)} replies.`);
          scene.text('"Okay…" you say very nervously as you lift your ass into the air.');
          // TODO-QSP: dynamic text: <<$npcdesc1>> and the girls play with your asshole, using a lot of their spit to...
          scene.text(`${((s as any).npcdesc1 ?? 0)} and the girls play with your asshole, using a lot of their spit to get it ready for the dildo. While they're doing that, you play with your clit.`);
        }
      }
      qspCall(s, 'arousal', 'vaginal_finger', 3, ((s as any).npcID1 ?? 0), 'group', 'lesbian');
      qspCall(s, 'arousal', 'clit_finger', (-3), 'group', 'lesbian', 'self');
      qspCall(s, 'arousal', 'anal_finger', (-3), ((s as any).npcID1 ?? 0), 'group', 'lesbian');
    } else {
      if (3*((s as any).dick3 ?? 0) < 4*((s as any).pcs_ass ?? 0)) {
        if (((s as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
          ((s as any).mc_inventory ?? {})['lubricant'] = (((s as any).mc_inventory ?? {})['lubricant'] ?? 0) - (1);
          scene.text('"The lube is in my purse…" you smirk as you lift your ass into the air.');
          // TODO-QSP: dynamic text: <<$npcdesc1>> finds your bottle and the girls spend several minutes lubing up yo...
          scene.text(`${((s as any).npcdesc1 ?? 0)} finds your bottle and the girls spend several minutes lubing up your asshole while also playing with your pussy, and you yourself play with your clit.`);
        } else {
          scene.text('"I\'m out of lube…" you say, a little disappointed.');
          // TODO-QSP: dynamic text: "No problem. We'll just use mine," <<$npcdesc1>> says and grabs her bottle. The ...
          scene.text(`"No problem. We'll just use mine," ${((s as any).npcdesc1 ?? 0)} says and grabs her bottle. The girls then spend a few minutes lubing up your asshole while also playing with your pussy, and you yourself play with your clit.`);
        }
      } else {
        if (((s as any).dick3 ?? 0) < 2*((s as any).pcs_ass ?? 0)) {
          if (((s as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
            ((s as any).mc_inventory ?? {})['lubricant'] = (((s as any).mc_inventory ?? {})['lubricant'] ?? 0) - (1);
            scene.text('"It\'s big, but I think I can take it. Better use a lot of lube first though. My bottle in my purse," you say a little nervously before you lift your ass into the air.');
            // TODO-QSP: dynamic text: <<$npcdesc1>> finds your bottle and the girls spend several minutes lubing up yo...
            scene.text(`${((s as any).npcdesc1 ?? 0)} finds your bottle and the girls spend several minutes lubing up your asshole while also playing with your pussy, and you yourself play with your clit.`);
          } else {
            scene.text('"It\'s big, but I think I can take it. I\'m out of lube though…" you say little nervously.');
            // TODO-QSP: dynamic text: "No problem. We'll just use mine," <<$npcdesc1>> says and grabs her bottle. The ...
            scene.text(`"No problem. We'll just use mine," ${((s as any).npcdesc1 ?? 0)} says and grabs her bottle. The girls then spend a few minutes lubing up your asshole while also playing with your pussy, and you yourself play with your clit.`);
          }
        } else {
          if (((s as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
            ((s as any).mc_inventory ?? {})['lubricant'] = (((s as any).mc_inventory ?? {})['lubricant'] ?? 0) - (1);
            scene.text('"It\'s enormous! Promise me you\'ll be very careful?" you ask.');
            // TODO-QSP: dynamic text: "I'll be as gentle as possible," <<$npcdesc1>> replies.
            scene.text(`"I'll be as gentle as possible," ${((s as any).npcdesc1 ?? 0)} replies.`);
            scene.text('"Okay, but we need to use a lot of lube first! My bottle in my purse," you say a little nervously before you lift your ass into the air.');
            // TODO-QSP: dynamic text: <<$npcdesc1>> finds your bottle and the girls spend several minutes lubing up yo...
            scene.text(`${((s as any).npcdesc1 ?? 0)} finds your bottle and the girls spend several minutes lubing up your asshole while also playing with your pussy, and you yourself play with your clit.`);
          } else {
            scene.text('"It\'s enormous! Promise me you\'ll be very careful?" you ask.');
            // TODO-QSP: dynamic text: "I'll be as gentle as possible," <<$npcdesc1>> replies.
            scene.text(`"I'll be as gentle as possible," ${((s as any).npcdesc1 ?? 0)} replies.`);
            scene.text('"Okay, but I\'m out of lube…" you say very nervously.');
            // TODO-QSP: dynamic text: "No problem. We'll just use mine," <<$npcdesc1>> says and grabs her bottle. The ...
            scene.text(`"No problem. We'll just use mine," ${((s as any).npcdesc1 ?? 0)} says and grabs her bottle. The girls then spend a few minutes lubing up your asshole while also playing with your pussy, and you yourself play with your clit.`);
          }
        }
      }
      scene.text('Once you\'re well lubed up, you can feel the tip of the monstrous dildo pushing against your anus.');
      qspCall(s, 'arousal', 'vaginal_finger', 3, ((s as any).npcID1 ?? 0), 'group', 'lesbian');
      qspCall(s, 'arousal', 'clit_finger', (-3), 'group', 'lesbian', 'self');
      qspCall(s, 'arousal', 'anal_finger', (-3), ((s as any).npcID1 ?? 0), 'lube', 'group', 'lesbian');
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get wrecked by the dildo', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/sex/two_girls_private8.jpg');
    if (((s as any).lastpainPart ?? 0) === 'asshole'  &&  ((s as any).lastpain ?? 0) > 40) {
      // TODO-QSP: dynamic text: You feel an intense pain as <<$npcdesc1>> slowly slides the massive dildo into y...
      scene.text(`You feel an intense pain as ${((s as any).npcdesc1 ?? 0)} slowly slides the massive dildo into your asshole. You try to distract yourself by rubbing your clit, but after a few minutes, it simply becomes too much and you have to tell ${((s as any).npcdesc1 ?? 0)} to stop.`);
      qspCall(s, 'arousal', 'anal_dildo', 3, ((s as any).npcID1 ?? 0), ((s as any).npcID3 ?? 0), 'group', 'lesbian');
      qspCall(s, 'arousal', 'clit_finger', (-3), 'group', 'lesbian', 'self');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'No more dildo', handler: (st: GameState) => {
    // TODO-QSP: gt 'katja_nightclub_sex', 'private_booth_FFFF_you_licking', ...
  } },
      ]);
    } else {
      if (((s as any).lastpainPart ?? 0) === 'asshole'  &&  ((s as any).lastpain ?? 0) > 20) {
        // TODO-QSP: dynamic text: You feel a lot of pain as <<$npcdesc1>> slowly slides the massive dildo into you...
        scene.text(`You feel a lot of pain as ${((s as any).npcdesc1 ?? 0)} slowly slides the massive dildo into your asshole. You try to distract yourself by rubbing your clit and it works. While you're still feeling pain, you're also getting pleasure out of it.`);
      } else {
        if (((s as any).lastpainPart ?? 0) === 'asshole'  &&  ((s as any).lastpain ?? 0) > 0) {
          // TODO-QSP: dynamic text: You feel some pain as <<$npcdesc1>> slowly slides the massive dildo into your as...
          scene.text(`You feel some pain as ${((s as any).npcdesc1 ?? 0)} slowly slides the massive dildo into your asshole, but you're also getting pleasure out of it.`);
          scene.text('You continue to rub your clit and are soon feeling a nice mixture of pain and pleasure.');
        } else {
          // TODO-QSP: dynamic text: You're surprised as there's no pain when <<$npcdesc1>> slowly slides the massive...
          scene.text(`You're surprised as there's no pain when ${((s as any).npcdesc1 ?? 0)} slowly slides the massive dildo into your asshole. To add to your pleasure, you continue to rub your clit.`);
        }
      }
      qspCall(s, 'arousal', 'anal_dildo', 3, ((s as any).npcID1 ?? 0), ((s as any).npcID3 ?? 0), 'group', 'lesbian');
      qspCall(s, 'arousal', 'clit_finger', (-3), 'group', 'lesbian', 'self');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'More butt fucking', handler: (st: GameState) => {
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 0);
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/sex/two_girls_private9.jpg');
    // TODO-QSP: dynamic text: "Time to change position," <<$npcdesc1>> says as she pulls the dildo out of your...
    scene.text(`"Time to change position," ${((s as any).npcdesc1 ?? 0)} says as she pulls the dildo out of your asshole. "Get on your back," she orders.`);
    // TODO-QSP: dynamic text: You do as she says and get down on the couch so that your ass is at the edge of ...
    scene.text(`You do as she says and get down on the couch so that your ass is at the edge of it. ${((s as any).npcdesc1 ?? 0)} gets down on the floor in front of you and slides her finger into your pussy.`);
    // TODO-QSP: dynamic text: <<$npcdesc2>> leans in over you and you start to make out while Katja looks on, ...
    scene.text(`${((s as any).npcdesc2 ?? 0)} leans in over you and you start to make out while Katja looks on, very excited. You then feel the massive dildo being gently inserted back in your ass once more.`);
    qspCall(s, 'arousal', 'anal_dildo', (-2), ((s as any).npcID1 ?? 0), ((s as any).npcID3 ?? 0), 'group', 'lesbian');
    qspCall(s, 'arousal', 'vaginal_finger', 3, ((s as any).npcID1 ?? 0), 'group', 'lesbian');
    qspCall(s, 'arousal', 'kiss', (-3), ((s as any).npcID2 ?? 0), 'group', 'lesbian');
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: "We need something bigger for her pussy," <<$npcdesc1>> says.
    scene.text(`"We need something bigger for her pussy," ${((s as any).npcdesc1 ?? 0)} says.`);
    scene.actions([
      { label: 'Get both holes stuffed', handler: (st: GameState) => {
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 11) + 5);
    qspCall(s, 'npcStat', 'D5', 'd');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/sex/two_girls_private10.jpg');
    // TODO-QSP: dynamic text: <<$npcdesc2>> moves away, but Katja quickly moves in and starts kissing you. You...
    scene.text(`${((s as any).npcdesc2 ?? 0)} moves away, but Katja quickly moves in and starts kissing you. You hear ${((s as any).npcdesc2 ?? 0)} say "Here it is," before you feel something hard getting stuffed into your pussy. "It's better if you do this yourself ${((s as any).pcs_nickname ?? 0)}," ${((s as any).npcdesc1 ?? 0)} says and you feel your right hand being moved to grasp what you imagine is a dildo in your pussy.`);
    scene.text('It takes a few tries to get into the rhythm of using the dildo, but you soon feel the nice sensation of having the dildos in your pussy and ass moving in and out of you, alternating which is deepest.');
    scene.text('After a short while, you\'re close to orgasm and rub your clit to bring you over.');
    scene.text('You have an explosive orgasm that takes you a few minutes to come down from, but you\'re not left in peace for long.');
    // TODO-QSP: dynamic text: "Your turn to do the work now," <<$npcdesc1>> says. "<<$npcdesc2>> needs to feel...
    scene.text(`"Your turn to do the work now," ${((s as any).npcdesc1 ?? 0)} says. "${((s as any).npcdesc2 ?? 0)} needs to feel some pleasure too."`);
    qspCall(s, 'arousal', 'kiss', (-3), ((s as any).npcID ?? 0), 'group', 'lesbian');
    qspCall(s, 'arousal', 'vaginal_dildo', (-2), ((s as any).npcID4 ?? 0), 'group', 'lesbian', 'self');
    qspCall(s, 'arousal', 'clit_finger', (-1), 'group', 'lesbian', 'self');
    qspCall(s, 'arousal', 'anal_dildo', 4, ((s as any).npcID3 ?? 0), 'group', 'lesbian', 'no_orgasm_msg');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: '<<$npcdesc2>>\'s turn', handler: (st: GameState) => {
    // TODO-QSP: gt 'katja_nightclub_sex', 'private_booth_FFFF_girls', 'dp'
  } },
    ]);
  } },
      { label: 'Tell her you don\'t want anymore', handler: (st: GameState) => {
    scene.text('"I don\'t want anymore," you reply.');
    // TODO-QSP: dynamic text: "Okay," <<$npcdesc1>> says. "Then it's your turn to do the work. <<$npcdesc2>> n...
    scene.text(`"Okay," ${((s as any).npcdesc1 ?? 0)} says. "Then it's your turn to do the work. ${((s as any).npcdesc2 ?? 0)} needs to feel some pleasure too."`);
    scene.actions([
      { label: '<<$npcdesc2>>\'s turn', goto: ['katja_nightclub_sex', 'private_booth_FFFF_girls'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } },
    { label: 'Say you don\'t want it in your ass', goto: ['katja_nightclub_sex', 'private_booth_FFFF_you_licking'] },
  ]);
  scene.build();
}

function enterPrivateBooth_FFFFYouLicking(s: GameState, scene: SceneBuilder): void {
  ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 0);
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/sex/two_girls_private_licking_alternative.jpg');
  // TODO-QSP: dynamic text: "Okay, then get your ass down on the couch and present your pussy," <<$npcdesc1>...
  scene.text(`"Okay, then get your ass down on the couch and present your pussy," ${((s as any).npcdesc1 ?? 0)} orders and you do as she says.`);
  scene.text('She then gets down in front of you and start licking your pussy while still holding the giant dildo in her right hand.');
  // TODO-QSP: dynamic text: Katja and <<$npcdesc2>> play with your breasts while <<$npcdesc1>> licks you for...
  scene.text(`Katja and ${((s as any).npcdesc2 ?? 0)} play with your breasts while ${((s as any).npcdesc1 ?? 0)} licks you for several minutes, often getting the dildo very close to your ass.`);
  // TODO-QSP: dynamic text: She never tries to put it in'+iif($ARGS[1] = 'after_some_dildo_in_as', ' again,'...
  scene.text('She never tries to put it in\'+iif($ARGS[1] = \'after_some_dildo_in_as\', \' again,\', \',\')+\' but the excitement helps get you off, and you soon cum from her skillful use of her tongue.');
  // TODO-QSP: dynamic text: "Now it's your turn to do the work. <<$npcdesc2>> needs to feel some pleasure to...
  scene.text(`"Now it's your turn to do the work. ${((s as any).npcdesc2 ?? 0)} needs to feel some pleasure too," ${((s as any).npcdesc1 ?? 0)} says once you've come down.`);
  qspCall(s, 'arousal', 'cuni', 4, ((s as any).npcID1 ?? 0), 'group', 'lesbian', 'no_orgasm_msg');
  qspCall(s, 'arousal', 'breasts', (-4), ((s as any).npcID ?? 0), 'group', 'lesbian');
  qspCall(s, 'arousal', 'breasts', (-4), ((s as any).npcID2 ?? 0), 'group', 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: '<<$npcdesc2>> \'s turn', goto: ['katja_nightclub_sex', 'private_booth_FFFF_girls'] },
  ]);
  scene.build();
}

function enterPrivateBooth_FFFFGirls(s: GameState, scene: SceneBuilder): void {
  ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 11) + 5);
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/sex/two_girls_private11.jpg');
  // TODO-QSP: dynamic text: You get up from the couch and <<$npcdesc2>> takes your place. '+iif($ARGS[1] = '...
  scene.text(`You get up from the couch and ${((s as any).npcdesc2 ?? 0)} takes your place. '+iif($ARGS[1] = 'dp', 'You still have the dildo that you used on your pussy in your hand', '${((s as any).npcdesc1 ?? 0)} hands you a dildo')+', so you start to slowly guide it into her very wet pussy.`);
  // TODO-QSP: dynamic text: <<$npcdesc1>> hands Katja a wand vibrator, which she quickly starts to use with ...
  scene.text(`${((s as any).npcdesc1 ?? 0)} hands Katja a wand vibrator, which she quickly starts to use with glee on ${((s as any).npcdesc2 ?? 0)}.`);
  // TODO-QSP: dynamic text: <<$npcdesc2>> is clearly very excited and it don't take you long to get her off....
  scene.text(`${((s as any).npcdesc2 ?? 0)} is clearly very excited and it don't take you long to get her off. She cums with a huge yell, which makes you wonder if they can hear her on the dance floor.`);
  // TODO-QSP: dynamic text: After <<$npcdesc2>> get her breath back, she get up. "Okay whore, now it's your ...
  scene.text(`After ${((s as any).npcdesc2 ?? 0)} get her breath back, she get up. "Okay whore, now it's your turn so get down on all fours," she says to ${((s as any).npcdesc1 ?? 0)}.`);
  qspCall(s, 'arousal', 'vaginal_dildo_give', 4, ((s as any).npcID2 ?? 0), 'group', 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'See what happens', handler: (st: GameState) => {
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 0);
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/sex/two_girls_private12.jpg');
    // TODO-QSP: dynamic text: <<$npcdesc1>> immediately does as she's told and gets down on all fours on the c...
    scene.text(`${((s as any).npcdesc1 ?? 0)} immediately does as she's told and gets down on all fours on the couch. "Head down and ass up, slut!" ${((s as any).npcdesc2 ?? 0)} orders and ${((s as any).npcdesc1 ?? 0)} obeys.`);
    // TODO-QSP: dynamic text: <<$npcdesc2>> then sits on the back of the couch and places her foot on the side...
    scene.text(`${((s as any).npcdesc2 ?? 0)} then sits on the back of the couch and places her foot on the side of ${((s as any).npcdesc1 ?? 0)} head. "So this tramp thought she could be in control? It's time to show this bitch who's actually is in charge. Ram that dildo up her slutty cunt, but push it far. Her hole is extremely loose since she opens it for everybody," ${((s as any).npcdesc2 ?? 0)} says to you.`);
    // TODO-QSP: dynamic text: You notice that <<$npcdesc1>> seems to get more excited when she's demeaned and ...
    scene.text(`You notice that ${((s as any).npcdesc1 ?? 0)} seems to get more excited when she's demeaned and realize that this is part of their play acting.`);
    // TODO-QSP: dynamic text: You use the dildo on <<$npcdesc1>> while <<$npcdesc2>> keeps her foot on her hea...
    scene.text(`You use the dildo on ${((s as any).npcdesc1 ?? 0)} while ${((s as any).npcdesc2 ?? 0)} keeps her foot on her head, saying one humiliating thing after the other about her or her body.`);
    // TODO-QSP: dynamic text: <<$npcdesc1>> soon cums with a powerful, squirting orgasm.
    scene.text(`${((s as any).npcdesc1 ?? 0)} soon cums with a powerful, squirting orgasm.`);
    qspCall(s, 'arousal', 'vaginal_dildo_give', 4, ((s as any).npcID1 ?? 0), 'group', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'After sex', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 4;
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/sex/two_girls_private13.jpg');
    // TODO-QSP: dynamic text: You remove the dildo and and <<$npcdesc2>> lifts her foot. <<$npcdesc1>> then sl...
    scene.text(`You remove the dildo and and ${((s as any).npcdesc2 ?? 0)} lifts her foot. ${((s as any).npcdesc1 ?? 0)} then slowly gets up and you start making out.`);
    // TODO-QSP: dynamic text: You gently rub <<$npcdesc1>>'s pussy and can hear Katja and <<$npcdesc2>> kissin...
    scene.text(`You gently rub ${((s as any).npcdesc1 ?? 0)}'s pussy and can hear Katja and ${((s as any).npcdesc2 ?? 0)} kissing.`);
    scene.text('After a while, you stop and start to get dressed. "That was great!" Katja says when she\'s fully clothed.');
    // TODO-QSP: dynamic text: "Yes, it was. We were lucky to find two wild babes like the two of you," <<$npcd...
    scene.text(`"Yes, it was. We were lucky to find two wild babes like the two of you," ${((s as any).npcdesc1 ?? 0)} replies.`);
    // TODO-QSP: dynamic text: "We need to clean our toys, so you two just go ahead and go back to the dance fl...
    scene.text(`"We need to clean our toys, so you two just go ahead and go back to the dance floor. We might see you later," ${((s as any).npcdesc2 ?? 0)} says.`);
    scene.text('"Okay. Thanks again for a good time," Katja says.');
    scene.text('"Yeah, thanks," you chime in as the two of you head back to the public part of the club.');
    qspCall(s, 'arousal', 'kiss', 2, ((s as any).npcID1 ?? 0), 'group', 'lesbian');
    qspCall(s, 'arousal', 'clit_finger_give', (-1), ((s as any).npcID1 ?? 0), 'group', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go to the dance floor', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 6;
  }, goto: ['katja_nightclub', 'dance'] },
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
    case 'private_room1':
      enterPrivateRoom1(s, scene);
      break;
    case 'private_room2':
      enterPrivateRoom2(s, scene);
      break;
    case 'private_booth_FFM':
      enterPrivateBooth_FFM(s, scene);
      break;
    case 'lone_bartender':
      enterLoneBartender(s, scene);
      break;
    case 'lonebartender_drinking':
      enterLonebartenderDrinking(s, scene);
      break;
    case 'bartender_bj':
      enterBartenderBj(s, scene);
      break;
    case 'bartender_bj_katja':
      enterBartenderBjKatja(s, scene);
      break;
    case 'bartender_bj_katja_watch':
      enterBartenderBjKatjaWatch(s, scene);
      break;
    case 'bartender_bj_katja_join':
      enterBartenderBjKatjaJoin(s, scene);
      break;
    case 'bartender_sex1':
      enterBartenderSex1(s, scene);
      break;
    case 'lonebartender_drinking1':
      enterLonebartenderDrinking1(s, scene);
      break;
    case 'lonebartender_drinking2':
      enterLonebartenderDrinking2(s, scene);
      break;
    case 'cheating_conversation':
      enterCheatingConversation(s, scene);
      break;
    case 'privateroom_two_girls':
      enterPrivateroomTwoGirls(s, scene);
      break;
    case 'privateroom_two_girls_after_drinks':
      enterPrivateroomTwoGirlsAfterDrinks(s, scene);
      break;
    case 'private_booth_FFFF':
      enterPrivateBooth_FFFF(s, scene);
      break;
    case 'private_booth_FFFF_you':
      enterPrivateBooth_FFFFYou(s, scene);
      break;
    case 'private_booth_FFFF_you_licking':
      enterPrivateBooth_FFFFYouLicking(s, scene);
      break;
    case 'private_booth_FFFF_girls':
      enterPrivateBooth_FFFFGirls(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const katja_nightclub_sex: LocationDef = {
  name: 'katja_nightclub_sex',
  title: 'The cocktails arrive before you and Katja finish your introd',
  region: 'other',
  enter: enter,
};
