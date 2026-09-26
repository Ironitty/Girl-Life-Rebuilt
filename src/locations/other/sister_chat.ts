import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterChecks(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_rel ?? 0)?.['A33'] < 20) {
    scene.text('Your relationship with your sister is scandalous.');
  } else {
    if (((s as any).npc_rel ?? 0)?.['A33'] >= 20  &&  ((s as any).npc_rel ?? 0)?.['A33'] < 40) {
      scene.text('Your relationship with your sister is tense.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A33'] >= 40  &&  ((s as any).npc_rel ?? 0)?.['A33'] < 60) {
        scene.text('You and your sister have a normal relationship.');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A33'] >= 60  &&  ((s as any).npc_rel ?? 0)?.['A33'] < 80) {
          scene.text('You and your sister have a good relationship.');
        } else {
          if (((s as any).npc_rel ?? 0)?.['A33'] >= 80) {
            scene.text('You have a great relationship with your sister.');
          }
        }
      }
    }
  }
  if (((s as any).npc_rel ?? 0)?.['A33'] > 65  &&  ((s as any).mesec ?? 0) > 0  &&  ((s as any).preg ?? 0) === 0  &&  ((s as any).mc_inventory ?? 0)?.['tampons'] === 0  &&  (!((s as any).narkossister ?? 0))) {
    scene.actions([
      { label: 'Ask for a tampon', handler: (st: GameState) => {
    scene.text('You tell your sister that you\'re menstruating and have no tampons. She looks at you knowingly, brings some of hers and recommends that you take care of this in advance next time.');
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['tampons'] = 3;
    qspCall(st, 'npc_relationship', 'modify', 'A33', (-15));
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.actions([
{ label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
]);
    return;
  } },
    ]);
  }
  if (((s as any).loc ?? 0) !== 'kuhrPar') {
    if (((s as any).cumloc ?? 0)[11] === 1  ||  (((s as any).cumloc ?? 0)[6] === 1  ||  ((s as any).cumloc ?? 0)[7] === 1)  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 200) {
      (s as any).sisterknowslut = 1;
      scene.text(`Your sister looks at you. "What is that, ${((s as any).pcs_nickname ?? '')}?" Her eyes then narrow. "Is that cum!? What were you thinking walking around with that on you?! It's a good thing I noticed and not Mom! God forbid what she would do if she ever saw you like that!"`);
    } else {
      if (((s as any).cumloc ?? 0)[11] === 1  ||  (((s as any).cumloc ?? 0)[6] === 1  ||  ((s as any).cumloc ?? 0)[7] === 1)  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 200  &&  (!((s as any).sisterknowslut ?? 0))) {
        (s as any).sisterknowslut = 1;
        scene.text(`Your sister looks at you. "${((s as any).pcs_nickname ?? '')}?! So the rumors are true, you are ${((s as any).gnikname ?? '')}!"`);
      } else {
        if (((s as any).cumloc ?? 0)[11] === 1  ||  (((s as any).cumloc ?? 0)[6] === 1  ||  ((s as any).cumloc ?? 0)[7] === 1)  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 250  &&  ((s as any).sisterknowslut ?? 0) > 0) {
          scene.text(`Your sister looks at you. "Up to your usual tricks, ${((s as any).pcs_nickname ?? '')}? You could at least wash yourself."`);
        }
      }
    }
    if (((s as any).drugVars ?? 0)?.['heroin_high'] === 0  &&  ((s as any).narkossister ?? 0) === 1) {
      (s as any).narkossister = 0;
    }
    if (((s as any).drugVars ?? 0)?.['heroin_high'] > 20  &&  (!((s as any).narkossister ?? 0))) {
      if ((Math.floor(Math.random() * 100) + 1) >= 90) {
        qspFunc(s, 'narkosisterspalila');
        return;
      }
    }
    if (((s as any).narkossister ?? 0) === 1) {
      scene.img('images/pc/reactions/worry.jpg');
      if (((s as any).drugVars ?? 0)?.['heroin_high'] > 20) {
        if (((s as any).pcs_mood ?? 0) > 10) {
          qspCall(s, 'mood', 'lower', 'small');
        }
        qspCall(s, 'stat', '');
        scene.text('You realize you\'re way too high to talk to your sister right now and she would flip out if she noticed you\'re high again, so you quickly move away before she notices.');
        scene.actions([
          { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
        ]);
      } else {
        if (((s as any).pcs_mood ?? 0) > 10) {
          qspCall(s, 'mood', 'lower', 'tiny');
        }
        qspCall(s, 'stat', '');
        (s as any).narkossister = 0;
        scene.text('You steel yourself. ' + ((s as any).OpenInnerThought ?? '') + `"Come on ${((s as any).pcs_nickname ?? '')}, deep breath, focus. You can do this."` + ((s as any).CloseInnerThought ?? ''));
        scene.text('You feel your head is clear enough to talk to your sister once more.');
        scene.actions([
          { label: 'Chat', goto: ['sister_chat', 'talking'] },
        ]);
      }
    }
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      if (((s as any).sisterLesb ?? 0) >= 7) {
        scene.text('Anya looks at you, taking in your naked body with an amused expression on her face.');
        scene.text(`"Are you trying to seduce me, ${((s as any).pcs_nickname ?? '')}?"`);
      } else {
        if (((s as any).sisterQW ?? 0)?.['naked'] === 0) {
          ((s as any).sisterQW = (s as any).sisterQW ?? {})['naked'] = 1;
          scene.text(`Anya looks at you, her eyes wide. "What are you doing, ${((s as any).pcs_nickname ?? '')}?! What if someone walks in and sees you like this? Mom would throw a fit if she caught you walking around naked like that! I just don't understand you sometimes…"`);
        } else {
          scene.text('Anya shakes her head at you. "Mom is going to catch you sooner or later and tan your ass!"');
          scene.actions([
            { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
            { label: 'Chat', goto: ['sister_chat', 'talking'] },
          ]);
        }
      }
    }
  }
  if (((s as any).loc ?? 0) === 'bedrPar') {
    if (((s as any).canBraidHair ?? 0) === 0  &&  ((s as any).npc_rel ?? 0)?.['A33'] > 50  &&  ((s as any).pcs_hairlng ?? 0) > 80) {
      scene.actions([
        { label: 'Can you teach me how to braid my hair?', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/sister3.jpg');
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    scene.text('She looks at you, eyebrow raised. "You don\'t know how to braid your own hair?"');
    scene.text('You look down, embarrassed. "I usually just go to the salon for them to braid it…"');
    scene.text('She laughs and gives you a hug. "Of course I\'ll teach you, though it might take a while."');
    scene.actions([
      { label: 'Learn how to braid your hair', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    (st as any).canBraidHair = 1;
    qspCall(st, 'npc_relationship', 'modify', 'A33', 5);
    scene.img('images/characters/pavlovsk/resident/anya/braid.jpg');
    scene.text('You make plenty of mistakes and get your hair in a knot a couple of times, but you eventually feel confident enough to braid your hair on your own.');
    scene.actions([
      { label: 'Thank her and leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
      { label: 'Chat', goto: ['sister_chat', 'talking'] },
    ]);
  } },
      { label: 'Maybe another time', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/anya/sister3.jpg');
    scene.text('"Thanks sis, but maybe some other time? I have somewhere to be right now."');
    scene.text('She shrugs. "Come back when you want to learn."');
    scene.actions([
      { label: 'Thank her and leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
  }
  (s as any).narkosisterspalila = qspUntranslated(s, "{", { location: "sister_chat" });
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/anya/sister2.jpg');
  scene.text(`$OpenInnerThought + '"Come on ${((s as any).pcs_firstname ?? '')}, keep it together! Act sober,"' + $CloseInnerThought + ' you think to yourself. ' + $OpenInnerThought + '"I just have to talk normally and not think about it."' + $CloseInnerThought`);
  scene.text(`Your sister looks at you, her eyebrow raised. "Are you stoned, ${((s as any).pcs_nickname ?? '')}?"`);
  scene.actions([
    { label: 'No', handler: (st: GameState) => {
    (st as any).narkossister = 1;
    qspCall(st, 'stat', '');
    scene.text('You nervously shake your head and back away, but it\'s obvious that Anya can tell.');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    { label: 'Yes', handler: (st: GameState) => {
    (st as any).narkossister = 1;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/anya/sister2.jpg');
    scene.text('You admit that you learned where to buy drugs and wanted to try them out.');
    scene.text(`Anya looks at you sternly. "${((st as any).pcs_nickname ?? '')}, I'm not your mother, who would kill you if she found out by the way, but this is the first and last time. It's not worth it! If you continue, then your whole life will not be worth shit."`);
    scene.actions([
{ label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
]);
    return;
  } },
  ]);
  scene.build();
}

function enterTalking(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  if (((s as any).locat ?? 0)?.['Anya'] !== 1) {
    if (((s as any).npc_pregtalk ?? 0)?.['A33'] === 0  &&  qspFunc(s, 'body_din', 'pregnancyVisibility') === 1  &&  ((s as any).loc ?? 0) === 'bedrPar') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPregnantNotice(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).week ?? 0) < 5  &&  ((s as any).week ?? 0) > 1  &&  ((s as any).odd_week ?? 0) === 1  &&  qspFunc(s, 'pcs_has_attr', 'sex_virgin') === 0  &&  ((s as any).npc_rel ?? 0)?.['A33'] >= 80  &&  (((s as any).sisterQW ?? 0)?.['party'] === 0  ||  ((s as any).sisterQW ?? 0)?.['party'] === 2)  &&  ((s as any).daystart ?? 0) > 3 + ((s as any).sisterQW ?? 0)?.['partyday']) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPartyInvite(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if ((((s as any).sisterQW ?? 0)?.['party'] === 1  &&  ((s as any).odd_week ?? 0) === 1  &&  ((s as any).daystart ?? 0) > ((s as any).sisterQW ?? 0)?.['partyday']  &&  ((s as any).week ?? 0) > 5)  ||  (((s as any).sisterQW ?? 0)?.['party'] === 1  &&  ((s as any).daystart ?? 0) > 3 + ((s as any).sisterQW ?? 0)?.['partyday'])) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMissedParty(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          if (((((s as any).daystart ?? 0) === ((s as any).sisboyday ?? 0) + 1  &&  ((s as any).hour ?? 0) > 18)  ||  (((s as any).daystart ?? 0) > ((s as any).sisboyday ?? 0) + 1))  &&  ((s as any).sisThank ?? 0) === 1  &&  ((s as any).loc ?? 0) === 'bedrPar') {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAfterRoma(s, scene); (s as any).locArgs = __savedLocArgs; }
          } else {
            if (((s as any).sisboytrioQW ?? 0) === 1  &&  ((((s as any).daystart ?? 0) === ((s as any).sisboyday ?? 0) + 1  &&  ((s as any).hour ?? 0) > 18)  ||  (((s as any).daystart ?? 0) > ((s as any).sisboyday ?? 0) + 1))  &&  ((s as any).loc ?? 0) === 'bedrPar') {
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMissedRoma(s, scene); (s as any).locArgs = __savedLocArgs; }
            } else {
              if (((s as any).sisterLesb ?? 0) > 3  &&  ((s as any).sisterQW ?? 0)?.['dno'] === 0  &&  ((s as any).sisterQW ?? 0)?.['lesb'] === 0  &&  ((s as any).sisterQW ?? 0)?.['bi'] === 0  &&  ((s as any).sisterQW ?? 0)?.['sisbi'] === 0  &&  ((s as any).loc ?? 0) === 'bedrPar') {
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterIncestTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
              } else {
                if (((s as any).SisterKnowMastr ?? 0) > 0  &&  ((s as any).sisterQW ?? 0)?.['knowmast'] === 0  &&  ((s as any).loc ?? 0) === 'bedrPar') {
                  ((s as any).sisterQW = (s as any).sisterQW ?? {})['knowmast'] = 1;
                  qspCall(s, 'stat', '');
                  scene.img('images/characters/pavlovsk/resident/anya/sister2.jpg');
                  scene.text(`Anya looks at you and laughs. "I know what you were up to, ${((s as any).pcs_nickname ?? '')}! I saw you playing with yourself!"`);
                  scene.actions([
{ label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
]);
                  return;
                } else {
                  if (((s as any).locat ?? 0)?.['Anya'] === 4  &&  ((s as any).loc ?? 0) === 'bedrPar') {
                    scene.img('images/characters/pavlovsk/resident/anya/sobir.jpg');
                    scene.text(`Your sister is busy getting ready for work. "Sorry ${((s as any).pcs_nickname ?? '')}, no time to talk. I'm already late!" she says without even turning around.`);
                    scene.actions([
                      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
                    ]);
                  } else {
                    if (((s as any).locat ?? 0)?.['Anya'] === 2  &&  ((s as any).loc ?? 0) !== 'bedrPar') {
                      scene.img('images/characters/pavlovsk/resident/anya/home/sister_chat_kitchen1.jpg');
                      scene.text(`Your sister is finishing her breakfast. "Sorry ${((s as any).pcs_nickname ?? '')}, no time to talk. I need to get ready for work!" she says without even turning around.`);
                      scene.actions([
                        { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
                      ]);
                    } else {
                      if (((s as any).sisterdialog ?? 0) === 3  &&  ((s as any).loc ?? 0) === 'bedrPar') {
                        qspCall(s, 'stat', '');
                        scene.img('images/characters/pavlovsk/resident/anya/progulka.jpg');
                        scene.text('Your sister is getting herself ready to go out. She admires herself in a mirror and wiggles her ass, trying different poses.');
                        scene.text('"If you decide to take a walk, I\'ll be near the club with my friends," she says.');
                        scene.actions([
                          { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
                        ]);
                      } else {
                        if (((s as any).npc_rel ?? 0)?.['A33'] < 20) {
                          scene.img('images/characters/pavlovsk/resident/anya/home/sister_chat.jpg');
                          scene.text('You try to talk to your sister, but she refuses to talk to you.');
                          if (((s as any).sisterQW ?? 0)?.['lowrelboost'] !== ((s as any).daystart ?? 0)) {
                            scene.actions([
                              { label: 'Apologize', handler: (st: GameState) => {
    ((st as any).sisterQW = (st as any).sisterQW ?? {})['lowrelboost'] = ((st as any).daystart ?? 0);
    qspCall(st, 'npc_relationship', 'modify', 'A33', (((st as any).pcs_intel ?? 0)/10) + (((st as any).pcs_apprnc ?? 0)/20));
    qspCall(st, 'stat', '');
    scene.text('You apologize to your sister, and it seems she forgives you somewhat.');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
                            ]);
                          }
                          scene.actions([
                            { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
                          ]);
                        } else {
                          if (((s as any).npc_rel ?? 0)?.['A33'] < 40) {
                            scene.img('images/characters/pavlovsk/resident/anya/home/sister_chat.jpg');
                            scene.text('You try to talk to your sister, but she just cuts you off bluntly.');
                            if (((s as any).sisterQW ?? 0)?.['lowrelboost'] !== ((s as any).daystart ?? 0)) {
                              scene.actions([
                                { label: 'Try to smooth your relations', handler: (st: GameState) => {
    ((st as any).sisterQW = (st as any).sisterQW ?? {})['lowrelboost'] = ((st as any).daystart ?? 0);
    qspCall(st, 'npc_relationship', 'modify', 'A33', (((st as any).pcs_intel ?? 0)/10) + (((st as any).pcs_apprnc ?? 0)/20));
    qspCall(st, 'stat', '');
    scene.text('You suck up to your sister, and she appears to be slowly treating you better.');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
                              ]);
                            }
                            scene.actions([
                              { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
                            ]);
                          } else {
                            if (((s as any).pcs_piercings ?? 0)?.['tongue'] > 0  &&  ((s as any).sisterQW ?? 0)?.['piercing_tongue'] === 0  &&  ((s as any).sisterQW ?? 0)?.['piercing_daystart'] !== ((s as any).daystart ?? 0)  &&  ((s as any).loc ?? 0) === 'bedrPar') {
                              ((s as any).sisterQW = (s as any).sisterQW ?? {})['piercing_daystart'] = ((s as any).daystart ?? 0);
                              if ((Math.floor(Math.random() * 100) + 1) >= 75) {
                                scene.img('images/characters/pavlovsk/resident/anya/sister2.jpg');
                                scene.text(`Your sister looks at your mouth. "What's that on your tongue, ${((s as any).pcs_nickname ?? '')}?"`);
                                qspCall(s, 'willpower', 'misc', 'resist', 'easy');
                                if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                                  scene.actions([
                                    { label: 'Nothing', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                                  ]);
                                } else {
                                  scene.actions([
                                    { label: 'Nothing', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.text('"Nothing!" you quip as you turn away so that she can\'t see your pierced tongue.');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
                                  ]);
                                }
                                scene.actions([
{ label: 'Show her your tongue piercing', handler: (st: GameState) => {
    ((st as any).sisterQW = (st as any).sisterQW ?? {})['piercing_tongue'] = 1;
    qspCall(st, 'npc_relationship', 'modify', 'A33', 1);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img(`images/pc/body/piercings/a${(((st as any).pcs_piercings ?? 0)?.['tongue'] ?? '')}.jpg`);
    scene.text('You open your mouth and stick out your tongue, showing her your tongue piercing.');
    scene.text(`She smiles. "Wow, you go ${((st as any).pcs_nickname ?? '')}!"`);
    scene.text('She seems to approve and spends a few minutes asking you all about it.');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
      { label: 'Chat', goto: ['sister_chat', 'talking'] },
    ]);
  } },
]);
                                return;
                              } else {
                                qspGoto(s, 'sister_chat', 'talking');
                              }
                            } else {
                              if (((s as any).pcs_piercings ?? 0)?.['lip'] > 0  &&  ((s as any).sisterQW ?? 0)?.['piercing_lip'] === 0  &&  ((s as any).loc ?? 0) === 'bedrPar') {
                                scene.img('images/characters/pavlovsk/resident/anya/sister2.jpg');
                                scene.text('Your sister looks at your lip, studying your piercing. "That\'s so cool and pretty! I love it!"');
                                scene.actions([
{ label: 'Thank her', handler: (st: GameState) => {
    ((st as any).sisterQW = (st as any).sisterQW ?? {})['piercing_lip'] = 1;
    qspCall(st, 'stat', '');
    scene.img(`images/pc/body/piercings/b${(((st as any).pcs_piercings ?? 0)?.['lip'] ?? '')}.jpg`);
    scene.text('You thank your sister for her compliment, instinctively playing with your new piercing.');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
      { label: 'Chat', goto: ['sister_chat', 'talking'] },
    ]);
  } },
]);
                                return;
                              } else {
                                if (((s as any).pcs_piercings ?? 0)?.['ears'] > 0  &&  ((s as any).sisterQW ?? 0)?.['piercing_ears'] === 0  &&  ((s as any).loc ?? 0) === 'bedrPar') {
                                  ((s as any).sisterQW = (s as any).sisterQW ?? {})['piercing_ears'] = 1;
                                  scene.img('images/characters/pavlovsk/resident/anya/sister2.jpg');
                                  scene.text('Your sister looks at your earrings.');
                                  scene.text('"Finally! I thought you would never get your ears pierced!" she says while inspecting them.');
                                  scene.actions([
{ label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
{ label: 'Chat', goto: ['sister_chat', 'talking'] },
]);
                                  return;
                                } else {
                                  if (((s as any).pcs_piercings ?? 0)?.['nose'] > 0  &&  ((s as any).sisterQW ?? 0)?.['piercing_nose'] === 0  &&  ((s as any).loc ?? 0) === 'bedrPar') {
                                    ((s as any).sisterQW = (s as any).sisterQW ?? {})['piercing_nose'] = 1;
                                    scene.img('images/characters/pavlovsk/resident/anya/sister2.jpg');
                                    scene.text(`Anya is clearly shocked by your nose ring. "Damn ${((s as any).pcs_nickname ?? '')}, tell me who did this to you and I'll get them for you."`);
                                    scene.text('She dances around you shadow boxing, and you both end up laughing loudly.');
                                    scene.actions([
{ label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
{ label: 'Chat', goto: ['sister_chat', 'talking'] },
]);
                                    return;
                                  } else {
                                    if (((s as any).pcs_piercings ?? 0)?.['brow'] > 0  &&  ((s as any).sisterQW ?? 0)?.['piercing_brow'] === 0  &&  ((s as any).loc ?? 0) === 'bedrPar') {
                                      ((s as any).sisterQW = (s as any).sisterQW ?? {})['piercing_brow'] = 1;
                                      scene.img('images/characters/pavlovsk/resident/anya/sister2.jpg');
                                      scene.text('Your sister takes a good look at your eyebrow piercing. "Nice, but be careful and don\'t accidentally get it caught on something!"');
                                      scene.actions([
{ label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
{ label: 'Chat', goto: ['sister_chat', 'talking'] },
]);
                                      return;
                                    } else {
                                      if (((s as any).loc ?? 0) === 'kuhrPar'  &&  ((s as any).locat ?? 0)?.['Fam_inGad'] === 1) {
                                        scene.img('images/characters/pavlovsk/resident/anya/home/sister_chat_kitchen_easteregg.jpg');
                                      } else {
                                        if (((s as any).loc ?? 0) === 'kuhrPar') {
                                          scene.img(`images/characters/pavlovsk/resident/anya/home/sister_chat_kitchen${(Math.floor(Math.random() * 3) + 1)}.jpg`);
                                        } else {
                                          scene.img('images/characters/pavlovsk/resident/anya/home/sister_chat.jpg');
                                        }
                                      }
                                      scene.text('You start a conversation with your sister.');
                                      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterChecks(s, scene); (s as any).locArgs = __savedLocArgs; }
                                      if ((!((s as any).trfatherQW ?? 0))) {
                                        scene.actions([
                                          { label: 'Ask about your father', handler: (st: GameState) => {
    (st as any).trfatherQW = 1;
    scene.img('images/characters/pavlovsk/resident/anya/home/sister_chat.jpg');
    scene.text(`You ask about your real father and she sighs. "Look ${((st as any).pcs_nickname ?? '')}, I was barely 3 years old when they broke up so I don't even remember what he looks like. Mom doesn't like to talk about him, but as you know, our real father went to live in another town. I remember that he worked as a long-distance truck driver though. Maybe he sometimes passes through Pavlovsk?"`);
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
      { label: 'Keep talking', goto: ['sister_chat', 'talking'] },
    ]);
  } },
                                        ]);
                                      }
                                      if (((s as any).loc ?? 0) !== 'kuhrPar') {
                                        qspCall(s, 'camera', 'check_person', 'anya');
                                      }
                                      if (((s as any).loc ?? 0) !== 'kuhrPar'  &&  ((s as any).npc_rel ?? 0)?.['A33'] >= 70) {
                                        if (((s as any).sisterLesb ?? 0) >= 7  &&  ((s as any).loc ?? 0) === 'bedrPar') {
                                          scene.actions([
                                            { label: 'Tell her you want to have sex', handler: (st: GameState) => {
    qspCall(st, 'npcStat', 'A33');
    scene.img('images/characters/pavlovsk/resident/anya/home/sister_chat.jpg');
    if (((st as any).hour ?? 0) > 6  &&  ((st as any).hour ?? 0) < 22) {
      scene.text('You crawl over her bed towards her to kiss her, but when she realizes what you\'re about to do, she pulls back from you. "What are you doing?! Everyone is still up. What if someone walked in?" She shakes her head. "You really need to control yourself, little sister." She makes it clear nothing is going to happen.');
      scene.actions([
        { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
        { label: 'Keep talking', goto: ['sister_chat', 'talking'] },
      ]);
    } else {
      scene.text('You lean in and give her a quick but passionate kiss on the lips. She stiffens a bit at first, but then returns the kiss.');
      scene.text('"You\'re a horny little thing, aren\'t you?" she says when you break the kiss.');
      scene.text('You grin at her. "Come on, it will be fun."');
      qspCall(st, 'arousal', 'kiss', 3, 'incest', 'lesbian');
      qspCall(st, 'stat', '');
      if ((Math.floor(Math.random() * 5) + 1) < 3) {
        scene.img('images/characters/pavlovsk/resident/anya/home/sisboyqw_05.jpg');
        scene.text('"Again?" she asks. "You know I enjoy this, but I\'m not a lesbian, and we should only do it… occasionally… okay?"');
        scene.text('You give her another short kiss, then gently caress her. "You know you want to, come on…" you whisper seductively.');
        scene.text('She kisses you back as her answer.');
        qspCall(st, 'arousal', 'kiss', 1, 'incest', 'lesbian');
        qspCall(st, 'stat', '');
        scene.actions([
          { label: 'Have sex with her', goto: ['sistersleep', 'sister_sex'] },
        ]);
      } else {
        scene.img('images/characters/pavlovsk/resident/anya/home/sisboyqw_05.jpg');
        scene.text('"Again?" she asks. "You know I enjoy this, but we should only do it… occasionally… okay?"');
        scene.text('She gives you another short kiss, then gently pushes you away. "Not tonight. Let\'s both get some sleep and not wear ourselves out, huh?"');
        qspCall(st, 'arousal', 'kiss', 1, 'incest', 'lesbian');
        qspCall(st, 'arousal', 'end');
        scene.actions([
          { label: 'Move away', goto: ['bedrPar', ''] },
          { label: 'Keep talking', goto: ['sister_chat', 'talking'] },
        ]);
      }
    }
  } },
                                          ]);
                                        }
                                        if (((s as any).npc_QW ?? 0)?.['A33'] === 0) {
                                          scene.actions([
                                            { label: 'Ask about her boyfriend', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'npc_relationship', 'modify', 'A33', 2);
    ((st as any).npc_QW = (st as any).npc_QW ?? {})['A33'] = 1;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/anya/home/sister_chat.jpg');
    scene.text('You ask Anya about her boyfriend and she smiles. "Well, I have a boyfriend, but it\'s nothing serious. He is more of a friend who I have sex with."');
    scene.text('"Awesome!" you reply. "You have to introduce me to him!"');
    scene.text('"We meet in the evening, before the dance evenings, in the community center. Meet me there and I\'ll introduce you to him."');
    scene.actions([
      { label: 'Finish', goto: ['sister_chat', 'talking'] },
    ]);
  } },
                                          ]);
                                        } else {
                                          if (((s as any).npc_QW ?? 0)?.['A33'] >= 2  &&  ((s as any).npc_rel ?? 0)?.['A33'] >= 40  &&  ((s as any).sisboytrioQW ?? 0) > -1  &&  ((s as any).sisboytrioDayOtkaz ?? 0) <= ((s as any).daystart ?? 0)  &&  (((s as any).sisterQW ?? 0)?.['AnyaRomaQW'] === 0  ||  ((s as any).sisterQW ?? 0)?.['partytalk'] > 0)) {
                                            scene.actions([
                                              { label: 'Talk about Roma', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    (st as any).temp = (Math.floor(Math.random() * 14) + 1);
    if (((st as any).temp ?? 0) <= 3  &&  ((st as any).npc_QW ?? 0)?.['A33'] === 10  &&  ((st as any).sisboytrio ?? 0) >= 1  &&  ((st as any).sisboyday ?? 0) !== ((st as any).daystart ?? 0)  &&  ((st as any).sistrioday ?? 0) <= ((st as any).daystart ?? 0)  &&  (((st as any).week ?? 0) < 4  ||  ((st as any).week ?? 0) === 7)) {
      scene.img('images/characters/pavlovsk/resident/anya/home/sisboyqw_09.jpg');
      (st as any).sisboyday = ((st as any).daystart ?? 0);
      if ((Math.floor(Math.random() * 4) + 0) === 1) {
        scene.text(`"Hey ${((st as any).pcs_nickname ?? '')}, Roma and I were wondering if you liked it last time? We had a very good time."`);
        scene.text('You don\'t say anything and just smile slyly, watching your sister\'s eyes.');
        scene.text('"We want to repeat our game tomorrow evening, if you\'d like?"');
        scene.actions([
          { label: 'Another time', handler: (st: GameState) => {
    (st as any).sistrioday = ((st as any).daystart ?? 0) + (Math.floor(Math.random() * 8) + 7);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/anya/sex/sisboyqw_36.jpg');
    scene.text('"I\'d love to, but could we do it some other day?" you ask.');
    scene.text('She looks a little dejected before she smiles and kisses you. "Sure thing, little sis."');
    scene.actions([
      { label: 'Finish', goto: ['sister_chat', 'talking'] },
    ]);
  } },
          { label: 'Agree', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A33', 2);
    (st as any).sisboytrioQW = 1;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/anya/sex/sisboyqw_36.jpg');
    scene.text('You agree to Anya\'s proposal and hug and kiss her.');
    scene.actions([
      { label: 'Finish', goto: ['sister_chat', 'talking'] },
    ]);
  } },
        ]);
      } else {
        scene.text('"Roma so good when he was here!" she smiles. "Thanks for giving us some space."');
        scene.text('"You\'re welcome," you smile back.');
        scene.text('"He\'d like to come again tomorrow. Could you take another walk for about an hour or two?"');
        qspCall(st, 'willpower', 'misc', 'resist', 'easy');
        if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'No', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'No', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A33', (-5));
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/anya/home/sisboyqw_04.jpg');
    scene.text('"Sorry Anya, I need to study in the evening," you reply.');
    scene.text('"Fine!" she scowls before burying her head in her book.');
    scene.actions([
      { label: 'Finish', goto: ['sister_chat', 'talking'] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Of course', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A33', 2);
    (st as any).sisThank = 1;
    ((st as any).npc_QW = (st as any).npc_QW ?? {})['A33'] = ((st as any).npc_QW['A33'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/anya/home/sisboyqw_03.jpg');
    scene.text('"Fine, I\'ll \'go for a walk.\' Just don\'t be too loud. If Kolka hears you, it will blow his tiny mind."');
    scene.text('You both laugh and she joyfully hugs you. "You\'re the best!"');
    scene.actions([
      { label: 'Finish', goto: ['sister_chat', 'talking'] },
    ]);
  } },
        ]);
      }
    } else {
      if (((st as any).temp ?? 0) <= 3  &&  ((st as any).npc_QW ?? 0)?.['A33'] === 10  &&  ((st as any).sisterLesb ?? 0) >= 5  &&  ((st as any).sisboyday ?? 0) !== ((st as any).daystart ?? 0)  &&  ((st as any).sistrioday ?? 0) <= ((st as any).daystart ?? 0)  &&  ((st as any).sisterQW ?? 0)?.['roma3block'] === 0  &&  (((st as any).week ?? 0) < 4  ||  ((st as any).week ?? 0) === 7)) {
        scene.img('images/characters/pavlovsk/resident/anya/home/sisboyqw_09.jpg');
        (st as any).sisboyday = ((st as any).daystart ?? 0);
        if (((st as any).sisterQW ?? 0)?.['roma3inv'] === 0) {
          ((st as any).sisterQW = (st as any).sisterQW ?? {})['roma3inv'] = 1;
          scene.text('Anya fidgets a little as she looks at you. "Roma and I have thought about it a lot and… I don\'t know how to say this…"');
          scene.text('"Well? Don\'t just leave me hanging…"');
          scene.text('"Well… We want you to err… Join us tomorrow evening."');
        } else {
          scene.text(`"Hey ${((st as any).pcs_nickname ?? '')}, Roma and I were wondering if you liked it last time? We had a very good time."`);
          scene.text('You don\'t say anything and just smile slyly, watching your sister\'s eyes.');
          scene.text('"We want to repeat our game tomorrow evening, if you\'d like?"');
        }
        scene.actions([
          { label: 'Decline', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A33', (-10));
    ((st as any).npc_QW = (st as any).npc_QW ?? {})['A33'] = ((st as any).npc_QW['A33'] ?? 0) - (2);
    (st as any).sisThank = 0;
    ((st as any).sisterQW = (st as any).sisterQW ?? {})['roma3block'] = 1;
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/mikhail/terminal/sisboyqw_37.jpg');
    scene.text('You decline your sister\'s proposal and she turns away from you, clearly not wanting to talk any more.');
    scene.actions([
      { label: 'Finish', goto: ['sister_chat', 'talking'] },
    ]);
  } },
          { label: 'Another time', handler: (st: GameState) => {
    (st as any).sistrioday = ((st as any).daystart ?? 0) + (Math.floor(Math.random() * 8) + 7);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/anya/sex/sisboyqw_36.jpg');
    scene.text('"I\'d love to, but could we do it some other day?" you ask.');
    scene.text('She looks a little dejected before she smiles and kisses you. "Sure thing, little sis."');
    scene.actions([
      { label: 'Finish', goto: ['sister_chat', 'talking'] },
    ]);
  } },
          { label: 'Agree', handler: (st: GameState) => {
    (st as any).sisboytrioQW = 1;
    qspCall(st, 'npc_relationship', 'modify', 'A33', 2);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/anya/sex/sisboyqw_36.jpg');
    scene.text('You agree to Anya\'s proposal and hug and kiss her.');
    scene.actions([
      { label: 'Finish', goto: ['sister_chat', 'talking'] },
    ]);
  } },
        ]);
      } else {
        if (((st as any).temp ?? 0) <= 3  &&  ((st as any).sisboyday ?? 0) !== ((st as any).daystart ?? 0)  &&  (((st as any).week ?? 0) < 4  ||  ((st as any).week ?? 0) === 7)) {
          if (((st as any).sisterQW ?? 0)?.['romatime'] === 0) {
            ((st as any).sisterQW = (st as any).sisterQW ?? {})['romatime'] = 1;
            scene.img('images/characters/pavlovsk/resident/anya/home/sisboyqw_01.jpg');
            scene.text(`'Anya takes a long and hesitant look at you. "${((st as any).pcs_nickname ?? '')}, could you spend an hour or two tomorrow after 16:00 going for a walk or something? Roma wants to visit me here and… Well, you know what I mean."'`);
            scene.text('Your sister is blushing a little and looks at you with pleading eyes.');
          } else {
            scene.img('images/characters/pavlovsk/resident/anya/home/sisboyqw_09.jpg');
            scene.text('"Roma so good when he was here!" she smiles. "Thanks for giving us some space."');
            scene.text('"You\'re welcome," you smile back.');
            scene.text('"He\'d like to come again tomorrow. Could you take another walk for about an hour or two?"');
          }
          qspCall(st, 'willpower', 'misc', 'resist', 'easy');
          if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'No', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'No', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A33', (-5));
    (st as any).sisboyday = ((st as any).daystart ?? 0);
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/anya/home/sisboyqw_04.jpg');
    scene.text('"Sorry Anya, I need to study in the evening," you reply.');
    scene.text('"Fine!" she scowls before burying her head in her book.');
    scene.actions([
      { label: 'Finish', goto: ['sister_chat', 'talking'] },
    ]);
  } },
            ]);
          }
          scene.actions([
            { label: 'Of course', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A33', 2);
    (st as any).sisThank = 1;
    ((st as any).npc_QW = (st as any).npc_QW ?? {})['A33'] = ((st as any).npc_QW['A33'] ?? 0) + (1);
    (st as any).sisboyday = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/anya/home/sisboyqw_03.jpg');
    scene.text('"Fine, I\'ll \'go for a walk.\' Just don\'t be too loud. If Kolka hears you, it will blow his tiny mind."');
    scene.text('You both laugh and she joyfully hugs you. "You\'re the best!"');
    scene.actions([
      { label: 'Finish', goto: ['sister_chat', 'talking'] },
    ]);
  } },
          ]);
        } else {
          if (((st as any).temp ?? 0) === 4) {
            qspCall(st, 'npc_relationship', 'modify', 'A33', 1);
            qspCall(st, 'stat', '');
            scene.img('images/characters/pavlovsk/resident/anya/home/sisboyqw_05.jpg');
            scene.text('You ask your sister about Roma and she happily talks about him, saying how he\'s good, responsive and courageous.');
            scene.actions([
              { label: 'Finish', goto: ['sister_chat', 'talking'] },
            ]);
          } else {
            if (((st as any).temp ?? 0) === 5) {
              qspCall(st, 'npc_relationship', 'modify', 'A33', 1);
              qspCall(st, 'stat', '');
              scene.img('images/characters/pavlovsk/resident/anya/home/sisboyqw_05.jpg');
              scene.text('"Before I met Roma, he was with some mean bitch. After ignoring her for a long time, he called her! You best believe I scolded him for that!"');
              scene.actions([
                { label: 'Finish', goto: ['sister_chat', 'talking'] },
              ]);
            } else {
              if (((st as any).temp ?? 0) === 6) {
                qspCall(st, 'npc_relationship', 'modify', 'A33', 1);
                qspCall(st, 'stat', '');
                scene.img('images/characters/pavlovsk/resident/anya/home/sisboyqw_05.jpg');
                scene.text('"One time, we were on a date at the movies and Roma nudged me to look behind us. In the very back, there was some girl sucking off a guy! Roma gave me this look and started unzipping his pants, pulling me closer. I was kind of pissed off at first, but he grabbed me by the back of the head and forced me down. It was <i>so</i> hot. He practically came straight down my throat!"');
                scene.actions([
                  { label: 'Finish', goto: ['sister_chat', 'talking'] },
                ]);
              } else {
                if (((st as any).temp ?? 0) === 7) {
                  qspCall(st, 'npc_relationship', 'modify', 'A33', 1);
                  qspCall(st, 'stat', '');
                  scene.img('images/characters/pavlovsk/resident/anya/home/sisboyqw_05.jpg');
                  scene.text('Anya complains that Roma drinks too much beer, does not buy her gifts and doesn\'t pay enough attention to her.');
                  scene.actions([
                    { label: 'Finish', goto: ['sister_chat', 'talking'] },
                  ]);
                } else {
                  if (((st as any).temp ?? 0) === 8) {
                    qspCall(st, 'npc_relationship', 'modify', 'A33', 1);
                    qspCall(st, 'stat', '');
                    scene.img('images/characters/pavlovsk/resident/anya/home/sisboyqw_05.jpg');
                    scene.text('Anya says Roma offered her a threesome with another girl.');
                    scene.text('"I was tempted, but the way he asked bothered me, so I didn\'t speak to him for a week afterwards."');
                    scene.actions([
                      { label: 'Finish', goto: ['sister_chat', 'talking'] },
                    ]);
                  } else {
                    if (((st as any).temp ?? 0) === 9) {
                      qspCall(st, 'npc_relationship', 'modify', 'A33', 1);
                      qspCall(st, 'stat', '');
                      scene.img('images/characters/pavlovsk/resident/anya/home/sisboyqw_05.jpg');
                      scene.text('"Sometimes Roma comes to visit me at work and asks for a quickie," Anya says, her cheeks flushing with color. "I always protest, but he somehow he always manages to convince me."');
                      scene.actions([
                        { label: 'Finish', goto: ['sister_chat', 'talking'] },
                      ]);
                    } else {
                      if (((st as any).temp ?? 0) === 10) {
                        qspCall(st, 'npc_relationship', 'modify', 'A33', 1);
                        qspCall(st, 'stat', '');
                        scene.img('images/characters/pavlovsk/resident/anya/home/sisboyqw_05.jpg');
                        scene.text('Anya, in detail and with great enthusiasm, tells you about Roma\'s magnificent virility and how, if not for this, they would have long since parted.');
                        scene.actions([
                          { label: 'Finish', goto: ['sister_chat', 'talking'] },
                        ]);
                      } else {
                        if (((st as any).temp ?? 0) === 11) {
                          qspCall(st, 'npc_relationship', 'modify', 'A33', 1);
                          qspCall(st, 'stat', '');
                          scene.img('images/characters/pavlovsk/resident/anya/home/sisboyqw_05.jpg');
                          scene.text('Anya shares a secret with you. Her favorite position is "cowgirl", even though Roma prefers to do her doggy-style.');
                          scene.actions([
                            { label: 'Finish', goto: ['sister_chat', 'talking'] },
                          ]);
                        } else {
                          if (((st as any).temp ?? 0) === 12) {
                            qspCall(st, 'npc_relationship', 'modify', 'A33', 1);
                            qspCall(st, 'stat', '');
                            scene.img('images/characters/pavlovsk/resident/anya/home/sisboyqw_05.jpg');
                            scene.text('You speak with your sister about sex. She shyly admits that she didn\'t like swallowing cum at first, but she was willing to swallow for Roma because she loved him. She found that she loved the taste and now likes swallowing and even licking it up.');
                            scene.actions([
                              { label: 'Finish', goto: ['sister_chat', 'talking'] },
                            ]);
                          } else {
                            if (((st as any).temp ?? 0) === 13) {
                              qspCall(st, 'npc_relationship', 'modify', 'A33', 1);
                              qspCall(st, 'stat', '');
                              scene.img('images/characters/pavlovsk/resident/anya/home/sisboyqw_05.jpg');
                              if ((!((st as any).reksLike ?? 0))) {
                                (st as any).reksLike = 1;
                                qspCall(st, 'npc_relationship', 'set', 'A57', 50);
                                (st as any).rexSisTalk = 0;
                                (st as any).rexPark = 0;
                                (st as any).rexCar = 0;
                                scene.text('Anya talks for a long time about her and Roma\'s friends and asks you if you want to get to know any of them.');
                                scene.text('"Well, Rex sounds quite nice… I guess."');
                                scene.text('Anya smiles. "Hmm… He\'s a nice guy, but sometimes behaves a bit strange. He\'s <i>obsessed</i> with women\'s legs."');
                                scene.text('"There was the time he was driving his father\'s car without a license and gazing at a girl walking on the sidewalk who was wearing stockings and a short skirt. As you can imagine, he got so carried away that he didn\'t notice a van ahead sitting at the traffic lights."');
                                scene.text('"He drove straight into it and totalled the car! That\'s why we call him Rex, because he stares at legs with his mouth open, teeth on show, wanting to devour them." As she says this, Anya holds her hands out like claws and impersonates a T-Rex growling at your legs.');
                              } else {
                                scene.text('You ask your sister about Roma and she happily talks about him, saying how he\'s good, responsive and courageous.');
                              }
                              scene.actions([
                                { label: 'Finish', goto: ['sister_chat', 'talking'] },
                              ]);
                            } else {
                              qspCall(st, 'npc_relationship', 'modify', 'A33', 1);
                              qspCall(st, 'stat', '');
                              scene.img('images/characters/pavlovsk/resident/anya/home/sisboyqw_05.jpg');
                              scene.text('Anya says that Roma likes you and asks if you like him too.');
                              scene.actions([
                                { label: 'Finish', goto: ['sister_chat', 'talking'] },
                              ]);
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    (st as any).temp = undefined;
  } },
                                            ]);
                                          }
                                        }
                                        if (((s as any).npc_rel ?? 0)?.['A33'] >= 80  &&  ((s as any).sisterknowslut ?? 0) > 0  &&  ((s as any).TwinQW ?? 0) >= 1  &&  ((s as any).TwinQW ?? 0) <= 5) {
                                          if (((s as any).TwinQW ?? 0) < 5) {
                                            if (((s as any).tmp_TwinQW_AskedToday ?? 0) < ((s as any).daystart ?? 0)) {
                                              (s as any).tmp_TwinQW_AskedToday = ((s as any).daystart ?? 0);
                                              scene.actions([
                                                { label: 'Talk about the twin request', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/sister2.jpg');
    if (((st as any).TwinQW ?? 0) < 3) {
      if (((st as any).TwinQW ?? 0) === 1) {
        scene.text('"I have a confession to make… I\'ve been selling my body in the Pavlovsk hotel." You wince inwardly as the admission leaves your mouth, worried what your sister will think.');
        scene.text('She looks shocked as she shakes her head. "Really?! Why would you do something like that? I know I sleep around, but there\'s a big difference between being a slut and being a whore!"');
        scene.text(`You roll your eyes at her. "Please, that's just ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} talking. If you're going to sleep around, you might as well get paid for it while you're still hot! Besides, nobody will find out. There's a guy there who takes care of everything. And look at all the money I've been making!"`);
        scene.text(`You open your wallet and show your sister all the cash you have on you - ${qspFunc(s, 'money', 'format', ((st as any).money ?? ''))}.`);
      } else {
        scene.text('You bring up your prostitution job again to your sister and show off your wallet.');
      }
      if (((st as any).money ?? 0) < 5000) {
        scene.text('Your sister furrows her brow, looking at your meager amount of money. "Wait, how many times have you prostituted yourself so far?"');
        scene.text(`You think for a second before responding. "I don't know. About ${((st as any).pavproscount ?? '')} times?"`);
        scene.text(`You sister gives you a concerned look. "${((st as any).pavproscount ?? '')} times and this is all you have to show for it?"`);
        scene.text(`Your sister approaches you and gives you a hug, squeezing you tightly. "I really hope you can stop what you're doing. It's not worth it, ${((st as any).pcs_nickname ?? '')}! Not for this pittance! Can't you see that this asshole is taking advantage of you?"`);
        scene.text('<br>');
        scene.text('You lower your head in shame and walk away. You didn\'t even get the chance to bring up the twin request. It looks like you\'ll have to work a little harder to convince her…');
        (st as any).TwinQW = 2;
      } else {
        scene.text('"Okay, I must admit, that is a lot. Do you know how many hours I\'d have to work in the supermarket to earn this kind of money?! Still, it seems very risky to me…"');
        scene.text('She\'s still trying to sound responsible, but you can practically see her salivating at the idea.');
        scene.text('"How would you like to earn some of this and spend some time with your favorite sister at the same time?" you ask, raising your eyebrows playfully while waving the money back and forth.');
        scene.text('"What do you mean?" she asks, finally dropping any act of disapproval.');
        scene.text('You explain the twins request.');
        if ((!((st as any).sisboyparty ?? 0))) {
          scene.text(`"Sorry, ${((st as any).pcs_nickname ?? '')}. You know I love you, but my boyfriend would never allow it and I could never do something like that behind his back. Thanks for confiding in me, but please stay safe and tell me if you get in over your head. I can't have my little sis in danger!"`);
          scene.text('She gives you a little smile and a warm hug. You\'re happy that she has a boyfriend she loves, but right now you would give anything to be rid of him.');
          (st as any).TwinQW = 3;
        } else {
          scene.text('"Ha! That actually sounds like a lot of fun." She seems to consider it before continuing. "Okay, I\'ll do it! When do we leave?"');
          scene.text('"I have to make myself look more like you so we\'ll pass as twins. I\'ll come and get you when I\'m ready."');
          (st as any).TwinQW = 5;
        }
      }
    } else {
      if (((st as any).TwinQW ?? 0) === 3) {
        if ((!((st as any).sisboyparty ?? 0))) {
          scene.text('You bring up the twins request again but Anya still refuses, claiming Roma would be heartbroken if he found out.');
        } else {
          scene.text('You bring up the twins request again. Since her relationship with Roma is a little different now, she seems a lot more receptive.');
          scene.text('"Ha, that actually sounds like a lot of fun. Okay, I\'ll do it! When do we leave?"');
          scene.text('"I have to make myself look more like you so we\'ll pass as twins. I\'ll come and get you when I\'m ready."');
          (st as any).TwinQW = 5;
        }
      }
    }
    if (((st as any).TwinQW ?? 0) === 5) {
      (st as any).tmp_TwinQW_AskedToday = undefined;
    }
    scene.actions([
      { label: 'Finish', goto: ['sister_chat', 'talking'] },
    ]);
  } },
                                              ]);
                                            }
                                          }
                                          if (((s as any).TwinQW ?? 0) === 5) {
                                            scene.actions([
                                              { label: 'Compare yourself with your sister', handler: (st: GameState) => {
    qspGoto(st, 'sister_chat', 'twincompare');
  } },
                                            ]);
                                          }
                                        }
                                        scene.actions([
                                          { label: 'Talk about sex', goto: ['sister_sex_talk', 'sex_talk1'] },
                                        ]);
                                      }
                                      scene.actions([
                                        { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
                                        { label: 'Make small talk', goto: ['sister_chat', 'small_talk1'] },
                                      ]);
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  } else {
    scene.img('images/characters/pavlovsk/resident/anya/sister2.jpg');
    scene.text(`"Okay ${((s as any).pcs_nickname ?? '')}, it's time for bed."`);
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  }
  scene.build();
}

function enterSmallTalk1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A33', 1);
  (s as any).temp = 0;
  if (((s as any).loc ?? 0) === 'kuhrPar'  &&  ((s as any).locat ?? 0)?.['Fam_inGad'] === 1) {
    scene.img('images/characters/pavlovsk/resident/anya/home/sister_chat_kitchen_easteregg.jpg');
  } else {
    if (((s as any).loc ?? 0) === 'kuhrPar') {
      scene.img(`images/characters/pavlovsk/resident/anya/home/sister_chat_kitchen${(Math.floor(Math.random() * 3) + 1)}.jpg`);
    } else {
      scene.img('images/characters/pavlovsk/resident/anya/home/sister_chat.jpg');
    }
  }
  if (((s as any).temp ?? 0) === 1) {
    scene.text('"I sometimes think about moving to the city. I have some friends who rent apartments and work there, but I\'m comfortable here at home," she says. "Even with mom making me help out with the bills, I have way more money. Even if I made twice as much in the city, I wouldn\'t have this much to spend on myself!"');
  } else {
    if (((s as any).temp ?? 0) === 2) {
      scene.text('"I\'m telling you the tailor at the garment factory is a creep! He makes his customers wait around in their underwear! Well, the pretty girls anyway," she says while rolling her eyes.');
    } else {
      if (((s as any).temp ?? 0) === 3) {
        scene.text('You ask Anya about the university and she grins. "I passed the entrance exam and almost went, but I started working in the summer and got used to having cash. What can I buy with a diploma?"');
      } else {
        if (((s as any).temp ?? 0) === 4) {
          scene.text('You ask Anya about her boyfriend and she smiles. "Well, I have a boyfriend, but it\'s nothing serious. It\'s more like friends with benefits."');
        } else {
          if (((s as any).temp ?? 0) === 5) {
            scene.text('You start talking with Anya and she tells you about the boys she\'s met, the parties she\'s been to and cosmetics.');
          } else {
            if (((s as any).temp ?? 0) === 6) {
              scene.text('She tells you about the new dress she bought at the store today.');
            } else {
              if (((s as any).temp ?? 0) === 7) {
                scene.text('You chat with your sister about movie stars, discussing and sharing fantasies about them, and arguing about which ones are sexier.');
              } else {
                if (((s as any).temp ?? 0) === 8) {
                  scene.text('Anya talks about the sports clubs at the community center and how sport is very good for the figure, but she\'s too lazy to go there herself.');
                } else {
                  if (((s as any).temp ?? 0) === 9) {
                    scene.text('Anya says that one of her friends had a kid, but the father denied it and she was left looking after her kid alone. She says that, if you\'re smart, you\'ll buy the pill from the pharmacy.');
                  } else {
                    if (((s as any).temp ?? 0) === 10) {
                      scene.text('Anya talks about the one winter where she went out without a coat and caught a bad cold. You remind her that she spent the whole time complaining about it to you.');
                    } else {
                      if (((s as any).temp ?? 0) === 11) {
                        scene.text('You chat with your sister, discussing the latest fashion trends.');
                      } else {
                        if (((s as any).temp ?? 0) === 12) {
                          scene.text('Anya tells you how she used to try various fad diets to make herself beautiful. However, she ended up underweight, her skin looked gaunt and she kept getting acne. Since quitting the diets, she is much healthier and looks more beautiful every day.');
                          scene.text('The last part has you both laughing.');
                        } else {
                          if (((s as any).temp ?? 0) === 13) {
                            scene.text('You chat with your sister and she tells you that you can find a lot of interesting bargains if you wander through the market.');
                          } else {
                            if (((s as any).temp ?? 0) === 14) {
                              scene.text('You chat with your sister and she tells you about one of her weird ex-boyfriends who was always so poetically dramatic. In particular, she tells you about how he broke up with her. "He said, \'Anya my love, I so deeply cherish you, but we\'re not meant to be. Like water and oil, no matter how hard we try, we cannot be together!\'" she describes, giggling with every word.');
                            } else {
                              scene.text('You chat with your sister and she asks you how you feel about women\'s sexual rights. You spend some time having a very frank and quite revealing conversation.');
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  (s as any).temp = undefined;
  scene.actions([
    { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    { label: 'Keep talking', goto: ['sister_chat', 'talking'] },
  ]);
  scene.build();
}

function enterJobTalkStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).anyaQW ?? 0)?.['jobs_known'] === 0) {
    scene.text(`"${((s as any).pcs_nickname ?? '')}, have you started making any money yet?"`);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterJobTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    scene.text(`"Doing anything else for money, ${((s as any).pcs_nickname ?? '')}?"`);
  }
  scene.build();
}

function enterJobTalk1(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPornTalk0(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterTwincompare(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/resident/anya/sister2.jpg');
  scene.text('Your sister has straight blonde hair which reaches her shoulders with several strands going just beyond.');
  scene.text('She has good looks and both men and women check her out when they think she isn\'t looking.');
  scene.text('<br>');
  scene.text('<br>');
  (s as any).tmp_twinsiscompare = 0;
  if (((s as any).pcs_hairlng ?? 0) > 160  &&  ((s as any).pcs_hairlng ?? 0) <= 260) {
    scene.text('<font color=#008000>Your hair is the correct length</font>');
    (s as any).tmp_twinsiscompare = ((s as any).tmp_twinsiscompare ?? 0) + (1);
  } else {
    if (((s as any).pcs_hairlng ?? 0) <= 160) {
      scene.text('<font color=#FF0000>Your hair is too short.</font>');
    } else {
      scene.text('<font color=#FF0000>Your hair is too long.</font>');
    }
  }
  if (((s as any).pcs_hairbsh ?? 0) < 1) {
    scene.text('<font color=#FF0000>You need to brush your hair.</font>');
  } else {
    (s as any).tmp_twinsiscompare = ((s as any).tmp_twinsiscompare ?? 0) + (1);
  }
  if (((s as any).pcs_haircol ?? 0) === 3) {
    scene.text('<font color=#008000>Your hair is the correct color.</font>');
    (s as any).tmp_twinsiscompare = ((s as any).tmp_twinsiscompare ?? 0) + (1);
  } else {
    scene.text('<font color=#FF0000>Your hair is not the correct color.</font>');
  }
  if ((!((s as any).curly ?? 0))) {
    scene.text('<font color=#008000>Your hair is straight, which is a match for your sister\'s.</font>');
    (s as any).tmp_twinsiscompare = ((s as any).tmp_twinsiscompare ?? 0) + (1);
  } else {
    scene.text('<font color=#FF0000>Your hair is too curly</font>');
  }
  if (((s as any).pcs_apprnc ?? 0) >= 60  &&  ((s as any).pcs_apprnc ?? 0) <= 120) {
    scene.text('<font color=#008000>Your looks matches your sister\'s.</font>');
    (s as any).tmp_twinsiscompare = ((s as any).tmp_twinsiscompare ?? 0) + (1);
  } else {
    scene.text(`<font color=#FF0000>Your looks are too different from your sister's. You are at ${((s as any).pcs_apprnc ?? '')}. You need a score between 60 and 120 </font>`);
  }
  if (((s as any).pcs_makeup ?? 0) === 4) {
    scene.text('<font color=#008000>Your makeup hides the last differences between you and your sister.</font>');
    (s as any).tmp_twinsiscompare = ((s as any).tmp_twinsiscompare ?? 0) + (1);
  } else {
    scene.text('<font color=#FF0000>You need some more makeup to make you look more like your sister.</font>');
  }
  if (((s as any).tmp_twinsiscompare ?? 0) >= 6) {
    scene.actions([
      { label: 'Go to the hotel and have some twin fun', handler: (st: GameState) => {
    if (((st as any).hour ?? 0) >= 12  &&  ((st as any).hour ?? 0) < 20) {
      qspGoto(st, 'pavlin', 'Twins');
    } else {
      scene.text('\'Pavlin is usually in the hotel lobby between 12:00 and 20:00. No reason to go now.\'');
    }
  } },
    ]);
  }
  (s as any).tmp_twinsiscompare = undefined;
  scene.actions([
    { label: 'Finish', goto: ['sister_chat', 'talking'] },
  ]);
  scene.build();
}

function enterPargone(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Anya</b></center>');
  scene.img('images/characters/pavlovsk/resident/anya/sister2.jpg');
  scene.text(`"${((s as any).pcs_nickname ?? '')}, you have to get rid of your bird. Have you heard what he's been saying lately? If mom ever heard this, she would kick us both out of the house!"`);
  scene.text('You\'ve become quite attached to your bird and don\'t really want to get rid of him. "There must be another solution!" you plead. "Give me a few days. I\'ll go to the pet store and ask if they have a remedy!"');
  if (((s as any).npc_rel ?? 0)?.['A33'] > 75) {
    scene.text('"Fine. You have 3 days, but if there\'s no solution by then, I\'ll release him myself!"');
    scene.text('"Thanks, sis!"');
    ((s as any).ParrotQW = (s as any).ParrotQW ?? {})['SisterReleaseParrotDay'] = ((s as any).daystart ?? 0);
    ((s as any).ParrotQW = (s as any).ParrotQW ?? {})['Level'] = 1;
    ((s as any).ParrotQW = (s as any).ParrotQW ?? {})['Day'] = 1;
  } else {
    scene.text(`"No ${((s as any).pcs_nickname ?? '')}, it's too dangerous!"`);
    scene.text(`She reaches for the cage and opens it. ${(((s as any).ParrotQW ?? 0)?.['Name2'] ?? '')} immediately flies out and leaves through the open window.`);
    scene.text('You look at your beloved pet flying away and have to hold back your tears. You turn away from your sister so she doesn\'t see you crying.');
    ((s as any).ParrotQW = (s as any).ParrotQW ?? {})['Owned2'] = 0;
  }
  scene.actions([
    { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterPregnantNotice(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_pregtalk = (s as any).npc_pregtalk ?? {})['A33'] = 1;
  if (((s as any).clothingworntype ?? 0) !== 'nude') {
    scene.text('"You\'re pregnant?!" your sister exclaims in surprise.');
    scene.text('"How the hell can you tell?!" you reply.');
    scene.text('She smiles. "I have a bionic eye." She reaches out and rubs your protruding belly. "So, do you know who the father is?"');
  } else {
    scene.text('You sister looks at your belly with surprise. "Are you pregnant?! Who the hell knocked you up!?"');
  }
  (s as any).tmpstr = '';
  (s as any).tmpstr2 = '';
  (s as any).specfath = undefined;
  (s as any).regfath = undefined;
  if ((Array.isArray((s as any).wombpotfath) ? ((s as any).wombpotfath as any[]).indexOf('unknown') : -1) !== -1  ||  ((Array.isArray((s as any).wombpotfath) ? ((s as any).wombpotfath as any[]).indexOf('') : -1) !== -1  &&  (Array.isArray((s as any).wombpotfath) ? ((s as any).wombpotfath as any[]).indexOf('') : -1) < Object.keys((s as any).wombpotfath ?? {}).length)) {
    (s as any).tmpstr = 'I slept with a guy and didn\'t even know his name, but ';
  }
  (s as any).idx = 0;
  (s as any).sz = 0;
  while (true) {
    if (((s as any).idx ?? 0) < ((s as any).sz ?? 0)) {
      (s as any).fath = (((s as any).npc_usedname ?? 0)?.[(((s as any).wombpotfath ?? 0)?.[String((s as any).idx ?? 0)] ?? 0)] ?? 0);
      if (((s as any).fath ?? 0) === 'Roma'  ||  ((s as any).fath ?? 0) === 'Kolka'  ||  ((s as any).fath ?? 0) === 'Stepfather'  ||  ((s as any).fath ?? 0) === 'Mikhail, your birthfather') {
        if (((s as any).fath ?? 0) === 'Mikhail, your birthfather') {
          (s as any).fath = 'our real father';
        }
        ((s as any).specfath = (s as any).specfath ?? {})[0] = ((s as any).fath ?? 0);
      } else {
        if (((s as any).fath ?? 0) === 'unknown'  ||  ((s as any).fath ?? 0) === '') {
          (s as any).fath = 'someone I don\'t know';
        } else {
          if (((s as any).tmpstr2 ?? 0) !== '') {
            (s as any).tmpstr2 = '' + ((s as any).tmpstr2 ?? 0) + ' or ';
          }
          (s as any).tmpstr2 = '' + ((s as any).tmpstr2 ?? 0) + '' + ((s as any).fath ?? 0) + '';
        }
      }
      (s as any).idx = ((s as any).idx ?? 0) + (1);
      break;
    }
    if (Object.keys((s as any).specfath ?? {}).length > 0  &&  ((s as any).npc_rel ?? 0)?.['A33'] > 50) {
      (s as any).tmpa = '';
      if (((s as any).tmpstr2 ?? 0) !== '') {
        (s as any).tmpa = ' You decide to start by telling her the easy news. "' + ((s as any).tmpstr ?? 0) + 'it\'s possible the father is ' + ((s as any).tmpstr2 ?? 0) + '. I think it could also be someone we know."';
      } else {
        (s as any).tmpa = ' You look at her. "I think the father might be someone we know."';
      }
      scene.text(`You realize that telling her who the father is could be difficult.${((s as any).tmpa ?? '')}`);
      (s as any).idx = 0;
      (s as any).sz = 0;
      if (((s as any).sz ?? 0) > 1) {
        (s as any).tmpb = 'begin by telling her ';
      } else {
        (s as any).tmpb = 'tell her ';
      }
      (s as any).tmpc = '';
      while (true) {
        if (((s as any).idx ?? 0) < ((s as any).sz ?? 0)) {
          (s as any).fath = (((s as any).specfath ?? 0)?.[String((s as any).idx ?? 0)] ?? 0);
          if (((s as any).fath ?? 0) === 'Roma') {
            scene.text(`You ${((s as any).tmpb ?? '')}the father might ${((s as any).tmpc ?? '')}be Roma.`);
            scene.text('"You mean [i]my[/i] Roma?"');
            scene.text('You nod with a forced smile.');
            scene.text(`"Oh, I'm so sorry, ${((s as any).pcs_nickname ?? '')}! This is probably my fault…" she says and hugs you tightly.`);
            qspCall(s, 'mood', 'raise', 'large');
          } else {
            if (((s as any).fath ?? 0) === 'Kolka') {
              scene.text(`You ${((s as any).tmpb ?? '')}the father could ${((s as any).tmpc ?? '')}be Kolka.`);
              scene.text('"Seriously?" she asks, sounding shocked. "You had sex with our <i>little brother</i>?! What is the hell is wrong with you!?"');
              scene.text('You feel yourself blushing. "I don\'t know, it just felt right…" you mumble and she just shakes her head at you.');
            } else {
              if (((s as any).fath ?? 0) === 'Stepfather') {
                scene.text(`You ${((s as any).tmpb ?? '')}the father could ${((s as any).tmpc ?? '')}be your stepfather.`);
                scene.text('"Oh, what a slut!" she smiles happily. "Do you think he\'ll notice it too?"');
              } else {
                if (((s as any).fath ?? 0) === 'our real father') {
                  scene.text(`You ${((s as any).tmpb ?? '')} the father could conceivably ${((s as any).tmpc ?? '')}be your real father.`);
                  scene.text(`Your sister looks at you with shock. "What the hell is wrong with you, ${((s as any).pcs_nickname ?? '')}?! How did you even find him?"`);
                  scene.text('You explain how you tracked him down through the truck drivers and how your relationship quickly grew into something unexpected. "I haven\'t told him," you tell her. "Maybe I should. I don\'t know."');
                  scene.text(`She listens intently to your story and gives you a hug when you finish. "I don't know either ${((s as any).pcs_nickname ?? '')}, but I hope you take me to meet him some day."`);
                }
              }
            }
          }
          if (((s as any).idx ?? 0) === 0  &&  ((s as any).sz ?? 0) > 1) {
            (s as any).tmpc = 'also ';
            (s as any).tmpb = 'continue your confession by telling her ';
          } else {
            if (((s as any).sz ?? 0) > 2  &&  ((s as any).idx ?? 0) === ((s as any).sz ?? 0) - 2) {
              (s as any).tmpb = 'finish your confession by saying that ';
            }
          }
          (s as any).idx = ((s as any).idx ?? 0) + (1);
          break;
        }
      }
    } else {
      if (Object.keys((s as any).wombpotfath ?? {}).length === 0) {
        scene.text('"I have no idea who the father could be! I\'m not even sure how I got pregnant!"');
      } else {
        if (Object.keys((s as any).wombpotfath ?? {}).length === 1) {
          if (((s as any).wombpotfath ?? 0)[0] === ''  ||  ((s as any).wombpotfath ?? 0)[0] === 'unknown') {
            scene.text('"I have no idea who the father could be!"');
          } else {
            scene.text(`"${((s as any).tmpstr ?? '')}I think the father is ${((s as any).tmpstr2 ?? '')}."`);
          }
        } else {
          scene.text(`"${((s as any).tmpstr ?? '')}I think the father is ${((s as any).tmpstr2 ?? '')}"`);
        }
      }
    }
    scene.actions([
      { label: 'Continue', goto: ['sister_chat', 'talking'] },
    ]);
  }
  scene.build();
}

function enterPartyInvite(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).sisterQW = (s as any).sisterQW ?? {})['partyday'] = ((s as any).daystart ?? 0);
  scene.img('images/locations/pavlovsk/resident/rekshome/party/sisboyqwparty_1.jpg');
  if (((s as any).sisterQW ?? 0)?.['rexbday'] === 0) {
    scene.text(`"${((s as any).pcs_nickname ?? '')}, it's one of my friend's birthday this Friday and he's having a party. I asked him if I could invite you."`);
    scene.text('"I don\'t know…" you reply. "They\'re your friends and I don\'t really know any of them."');
  } else {
    if (((s as any).sisterQW ?? 0)?.['partycount'] === 0) {
      scene.text(`"${((s as any).pcs_nickname ?? '')}, one of my friends is having a party this Friday. I asked him if I could invite you."`);
      scene.text('"I don\'t know…" you reply. "They\'re your friends and I don\'t really know any of them."');
    } else {
      scene.text(`"${((s as any).pcs_nickname ?? '')}, Rex is having another party this Friday. I asked him if I could invite you again and he said yes."`);
      scene.text('"Really? You want to take me to another party?"');
    }
  }
  scene.text('"Come on, it\'ll be fun, I promise!"');
  qspCall(s, 'stat', '');
  if (((s as any).runnerQW ?? 0)?.['prof_stage'] > 0) {
    scene.actions([
      { label: 'No (training)', handler: (st: GameState) => {
    ((st as any).sisterQW = (st as any).sisterQW ?? {})['party'] = (-1);
    if (((st as any).sisterQW ?? 0)?.['rexbday'] === 0) {
      ((st as any).sisterQW = (st as any).sisterQW ?? {})['rexbday'] = (-1);
    }
    scene.img('images/locations/pavlovsk/resident/rekshome/party/sisboyqwparty_4.jpg');
    scene.text('You refuse to go to the party.');
    scene.text('"I\'d love to, but I have a competition to prepare for and have to train. I could be a great athlete one day, unlike a certain Miss Lazy Bones here!" you tell her with a teasing laugh.');
    scene.actions([
      { label: 'Continue', goto: ['sister_chat', 'talking'] },
    ]);
  } },
    ]);
  }
  if (((s as any).vballVars ?? 0)?.['on_team'] === 1) {
    scene.actions([
      { label: 'No (volleyball)', handler: (st: GameState) => {
    ((st as any).sisterQW = (st as any).sisterQW ?? {})['party'] = (-1);
    if (((st as any).sisterQW ?? 0)?.['rexbday'] === 0) {
      ((st as any).sisterQW = (st as any).sisterQW ?? {})['rexbday'] = (-1);
    }
    scene.img('images/locations/pavlovsk/resident/rekshome/party/sisboyqwparty_5.jpg');
    scene.text('You refuse to go to the party.');
    scene.text('"I can\'t. Coach doesn\'t allow me to stay out late, and drinking is also prohibited."');
    scene.actions([
      { label: 'Continue', goto: ['sister_chat', 'talking'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'No (study)', handler: (st: GameState) => {
    ((st as any).sisterQW = (st as any).sisterQW ?? {})['party'] = (-1);
    if (((st as any).sisterQW ?? 0)?.['rexbday'] === 0) {
      ((st as any).sisterQW = (st as any).sisterQW ?? {})['rexbday'] = (-1);
    }
    scene.img('images/locations/pavlovsk/resident/rekshome/party/sisboyqwparty_3.jpg');
    scene.text('You refuse to go to the party.');
    scene.text('"Sorry Anya, but I can\'t get behind at school. I have homework and books to read, you know what it\'s like."');
    scene.text('She smiles at you. "My nerdy little sister. Well have fun studying!"');
    scene.actions([
      { label: 'Continue', goto: ['sister_chat', 'talking'] },
    ]);
  } },
    { label: 'Yes', handler: (st: GameState) => {
    ((st as any).sisterQW = (st as any).sisterQW ?? {})['party'] = 1;
    if (((st as any).sisterQW ?? 0)?.['rexbday'] === 0) {
      ((st as any).sisterQW = (st as any).sisterQW ?? {})['rexbday'] = 1;
    }
    scene.img('images/characters/shared/headshots_main/big33.jpg');
    scene.text('You agree to go to the party.');
    scene.text('\'"Awesome!" she replies. "We\'re meeting at the community center this Friday. Don\'t forget to be there before 18:00, otherwise we\'ll leave without you."\'');
    scene.text('She gives you a hug and kisses you on the cheek.');
    scene.actions([
      { label: 'Continue', goto: ['sister_chat', 'talking'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterMissedParty(s: GameState, scene: SceneBuilder): void {
  ((s as any).sisterQW = (s as any).sisterQW ?? {})['party'] = 0;
  if (((s as any).sisterQW ?? 0)?.['rexbday'] === 1) {
    ((s as any).sisterQW = (s as any).sisterQW ?? {})['rexbday'] = (-1);
  }
  scene.text(`"We missed you at the party, ${((s as any).pcs_nickname ?? '')}!" she pouts. "I'll let you know when the next party is and maybe you'll be able to make it, okay?"`);
  scene.text('You apologize for missing the party and she smiles at you.');
  scene.actions([
    { label: 'Continue', goto: ['sister_chat', 'talking'] },
  ]);
  scene.build();
}

function enterAfterRoma(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_QW ?? 0)?.['A33'] === 7  ||  ((s as any).npc_QW ?? 0)?.['A33'] === 5  ||  ((s as any).npc_QW ?? 0)?.['A33'] === 3) {
    ((s as any).npc_QW = (s as any).npc_QW ?? {})['A33'] = ((s as any).npc_QW['A33'] ?? 0) + (1);
  } else {
    if (((s as any).npc_QW ?? 0)?.['A33'] >= 9  &&  (Math.floor(Math.random() * 3) + 1) === 3) {
      ((s as any).npc_QW = (s as any).npc_QW ?? {})['A33'] = ((s as any).npc_QW['A33'] ?? 0) + (1);
    }
  }
  (s as any).sisboyday = 0;
  (s as any).sisThank = 0;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/anya/home/sisboyqw_00.jpg');
  scene.text('Anya merrily runs up to you and wraps her arms tightly around your neck.');
  if (((s as any).sisboytrioQW ?? 0) !== 1) {
    scene.text('"I adore you, little sis! I had a lovely evening with Roma."');
    scene.text('"Yes, I\'m glad for you, but enough already. You\'re going to strangle me!"');
    scene.text('She lets you go and kisses you on the cheek.');
  } else {
    scene.text(`"${((s as any).pcs_nickname ?? '')}, I adore you! I really enjoyed our evening with Roma."`);
    scene.text('"Yes, me too, but not so tight. You\'re strangling me!"');
    scene.text('She bounces with joy and loosens her grip just enough to kiss you on the cheek.');
    (s as any).sisboytrioQW = 0;
  }
  scene.actions([
{ label: 'Continue', goto: ['sister_chat', 'talking'] },
]);
  return;
  scene.build();
}

function enterMissedRoma(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'npc_relationship', 'modify', 'A33', (-10));
  (s as any).sisboytrioQW = 0;
  (s as any).sisboyday = 0;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Anya</b></center>');
  scene.img('images/characters/pavlovsk/resident/anya/sister2.jpg');
  scene.text('Anya doesn\'t look happy with you. "What happened? You promised to join me and Roma! Well, maybe next time…"');
  scene.actions([
{ label: 'Continue', goto: ['sister_chat', 'talking'] },
]);
  return;
  scene.build();
}

function enterIncestTalk(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/anya/home/sisboyqw_24.jpg');
  scene.text('You\'re both embarrassed after what happened that night and can\'t look each other in the eye. Anya eventually speaks.');
  scene.text(`"I thought you liked guys, ${((s as any).pcs_nickname ?? '')}? I always find it much more fun to handle men," she says with a smile.`);
  if (((s as any).sisterQW ?? 0)?.['dno'] === 0) {
    scene.actions([
      { label: 'I don\'t know what happened', handler: (st: GameState) => {
    ((st as any).sisterQW = (st as any).sisterQW ?? {})['dno'] = 1;
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/anya/home/sisboyqw_24.jpg');
    scene.text('You blush at Anya. "Forgive me. I was so worked up and I just couldn\'t control myself. I don\'t know what came over me…"');
    scene.text('"Well, I don\'t mind if you sometimes \'lose control of yourself\'. Just try and control yourself though," she smiles slyly and you smile back at her.');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
      { label: 'Chat', goto: ['sister_chat', 'talking'] },
    ]);
  } },
    ]);
  }
  if (((s as any).sisterQW ?? 0)?.['lesb'] === 0) {
    scene.actions([
      { label: 'I\'m a lesbian', handler: (st: GameState) => {
    ((st as any).sisterQW = (st as any).sisterQW ?? {})['lesb'] = 1;
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/anya/home/sisboyqw_24.jpg');
    scene.text('You blush at Anya. "I… I like girls. I\'m… I\'m a… lesbian. I don\'t know what came over me. You\'re just so pretty, and I was so horny…"');
    scene.text('"Oh!" She seems a little surprised, but then smiles at and hugs you. "As long as you\'re happy, then I don\'t care about your sexuality. But for the record, <i>I\'m</i> not a lesbian," she says with a laugh and then asks you about any girlfriends you\'ve had. For someone that claims to be straight, she sure seems curious about lesbian sex.');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
      { label: 'Chat', goto: ['sister_chat', 'talking'] },
    ]);
  } },
    ]);
  }
  if (((s as any).sisterQW ?? 0)?.['bi'] === 0) {
    scene.actions([
      { label: 'I like girls too', handler: (st: GameState) => {
    ((st as any).sisterQW = (st as any).sisterQW ?? {})['bi'] = 1;
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/anya/home/sisboyqw_24.jpg');
    scene.text('You blush at Anya. "I like girls too. I\'m not a lesbian, I just like both guys and girls. I don\'t know what came over me that night. You\'re just so pretty, and I was so horny…"');
    scene.text('"Oh!" She seems a little surprised, but then smiles at and hugs you. "As long as you\'re happy, then I don\'t care about your sexuality. But for the record, <i>I\'m</i> not a lesbian. Or into girls," she says with a laugh and then asks you about any girlfriends you\'ve had. For someone that claims to be straight, she sure seems curious about lesbian sex.');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
      { label: 'Chat', goto: ['sister_chat', 'talking'] },
    ]);
  } },
    ]);
  }
  if (((s as any).sisterQW ?? 0)?.['sisbi'] === 0) {
    scene.actions([
      { label: 'Wait, more fun?', handler: (st: GameState) => {
    ((st as any).sisterQW = (st as any).sisterQW ?? {})['sisbi'] = 1;
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/anya/home/sisboyqw_24.jpg');
    scene.text('"Wait, you said \'more fun.\' Does that mean you\'ve been with other girls before?"');
    scene.text('She blushes. "Well, yes… Iris and Nina drag me into it sometimes when we\'re drunk," she says with a laugh.');
    scene.text('You grin and pry. "So do you like it?"');
    scene.text('She blushes even more. "Yeah, a little. It\'s fun, but I prefer guys. They\'re way more fun."');
    scene.text('You start talking about the differences in sex with guys and girls, with you adding in your own experiences along with hers.');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
      { label: 'Chat', goto: ['sister_chat', 'talking'] },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterBathroomDildoTalk1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).anyaQW ?? 0)?.['bathroom_dildos_again'] > 0) {
    qspGoto(s, 'sister_chat', 'bathroom_dildo_talk2');
  }
  ((s as any).anyaQW = (s as any).anyaQW ?? {})['bathroom_dildos_again'] = ((s as any).anyaQW['bathroom_dildos_again'] ?? 0) + (1);
  scene.img('images/locations/pavlovsk/resident/apartment/home/bedrpar.jpg');
  if (((s as any).anyaQW ?? 0)?.['bathroom_dildos'] === 1) {
    scene.text('As you open the door to your room, something suddenly comes flying towards you. You jump in surprise and flail, scrambling to catch the incoming projectile. Somehow, you manage to not drop it, only at that point realizing that it\'s a rubber dick with a suction cup on the end of it. Wait, isn\'t this yours???');
  } else {
    scene.text('As you open the door to your room, something suddenly comes flying towards you. You jump in surprise and flail, scrambling to catch the incoming projectiles. Somehow, you manage to not drop them, only at that point realizing that they\'re two rubber dicks with suction cups at the ends. Wait, aren\'t these yours???');
  }
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['dildo_suction'] = (((st as any).anyaQW ?? 0)?.['bathroom_dildos']);
    ((st as any).anyaQW = (st as any).anyaQW ?? {})['bathroom_dildos'] = 0;
    scene.text('<center><b>Anya</b></center>');
    scene.img('images/characters/pavlovsk/resident/anya/sister2.jpg');
    if (((st as any).anyaQW ?? 0)?.['bathroom_dildos'] === 1) {
      scene.text('"I found that that stuck to the tub when I went in earlier." You look up and see Anya sitting on her bed looking at you. "I know it\'s not mine and I don\'t think Kolka\'s into that kind of thing, so I assume it must be yours. Don\'t leave it laying around like that! If mom found it, she\'d have beat your ass!"');
    } else {
      scene.text('"I found those stuck to the tub when I went in earlier." You look up and see Anya sitting on her bed looking at you. "I know they\'re not mine and I don\'t think Kolka\'s into that kind of thing, so I assume they must be yours. Don\'t leave them laying around like that! If mom found them, she\'d have beat your ass!"');
    }
    scene.actions([
      { label: 'Continue', goto: ['bedrPar', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterBathroomDildoTalk2(s: GameState, scene: SceneBuilder): void {
  ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['dildo_suction'] = (((s as any).anyaQW ?? 0)?.['bathroom_dildos']);
  ((s as any).anyaQW = (s as any).anyaQW ?? {})['bathroom_dildos'] = 0;
  scene.img('images/locations/pavlovsk/resident/apartment/home/bedrpar.jpg');
  if (((s as any).anyaQW ?? 0)?.['bathroom_dildos'] === 1) {
    scene.text('Opening the door to your room, you gasp in shock as two rubber cocks come flying at your head and you barely manage to catch them.');
    scene.text(`"${((s as any).pcs_nickname ?? '')}!" your sister hisses. "Seriously! Mom is going to <i>kill</i> you if you aren't more careful! Don't leave these in the tub after you're done!"`);
  } else {
    scene.text('Opening the door to your room, you gasp in shock as a rubber cock comes flying at your head and you barely manage to catch it.');
    scene.text(`"${((s as any).pcs_nickname ?? '')}!" your sister hisses. "Seriously! Mom is going to <i>kill</i> you if you aren't more careful! Don't leave this in the tub after you're done!"`);
  }
  scene.actions([
    { label: 'Continue', goto: ['bedrPar', ''] },
  ]);
  scene.build();
}

function enterSexRoomTalk1(s: GameState, scene: SceneBuilder): void {
  ((s as any).sisterQW = (s as any).sisterQW ?? {})['sex_room'] = 0;
  scene.img('images/characters/pavlovsk/resident/anya/sister2.jpg');
  if (((s as any).sisterQW ?? 0)?.['sex_bed'] > ((s as any).daystart ?? 0)) {
    qspCall(s, 'npc_relationship', 'modify', 'A33', (-5));
    if (((s as any).sisterQW ?? 0)?.['sex_bed_count'] === 1) {
      scene.text(`"${((s as any).pcs_nickname ?? '')} what the fuck! Did you fuck a guy in my bed?"`);
    } else {
      scene.text(`"${((s as any).pcs_nickname ?? '')} what the fuck! Did you fuck a guy in my bed <i>again</i>?"`);
    }
  } else {
    scene.text(`"Hey ${((s as any).pcs_nickname ?? '')}," your sister says with a wry look.`);
    scene.text('"What\'s up?"');
    scene.text('"Did you bring a guy home while we were visiting the village this weekend?" The look on your face makes her mouth twist into a smirk. "Cause it smelled like sex in here after I got back."');
  }
  scene.actions([
    { label: 'Continue', goto: ['bedrPar', ''] },
  ]);
  scene.build();
}

function enterMomslutTalk1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).momslut ?? 0) > 0) {
    scene.actions([
      { label: 'Ask her if she knows mom is cheating', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/sister2.jpg');
    scene.text(`"Anya…" you say, looking seriously at her. "Did you know that ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} is cheating on dad?"`);
    scene.text('Your sister blanches at your question, staring into your eyes for a few seconds before swiftly looking away.');
    scene.text('"Who\'d you catch her with?" she asks without turning back.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMomslutTalk2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  scene.build();
}

function enterMomslutTalk2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mother ?? 0)?.['sergey_fuck'] > 0) {
    scene.actions([
      { label: 'Sergey', handler: (st: GameState) => {
    if (((st as any).mother ?? 0)?.['sergey_ass_fuck'] === 1) {
      scene.text('"Uncle Sergey," you say flatly. "I watched her get fucked in the ass like a cheap whore and love every second of it."');
    } else {
      scene.text('"Uncle Sergey," you say flatly. "I watched her ride him like it was her last day on earth, loving every second of it."');
    }
    scene.text('She nods. "I think I was… 13 the first time I caught them? I promised Vasily I\'d play with him in the courtyard and instead I found… Yeah…"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMomslutTalk3(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  if (((s as any).mother ?? 0)?.['sergey_misha_fuck'] > 0) {
    scene.actions([
      { label: 'Sergey and Misha', handler: (st: GameState) => {
    scene.text('"Uncle Sergey," you say flatly. "And Uncle Misha. At the same time. They double teamed her like a cheap whore and she loved every second of it."');
    scene.text('She nods. "I always wondered about Misha, but I never saw. Sergey I knew. I saw. I think I was… 13 the first time I caught them together? I promised Vasily I\'d play with him in the courtyard and instead I found… Yeah…"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMomslutTalk3(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  if (((s as any).mother ?? 0)?.['slava_fuck'] > 0) {
    scene.actions([
      { label: 'Borislav', handler: (st: GameState) => {
    scene.text('"Borislav," you say flatly. "I saw them fucking through a window at the cafe."');
    scene.text('Anya blinks in surprise. "I knew she was cheating with a lot of guys, but I never knew about Slava! I guess I never go around the cafe so why would I? I think I was… 13 the first time I caught her with Sergey? I promised Vasily I\'d play with him in the courtyard and instead I found… Yeah…"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMomslutTalk3(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  if (((s as any).mother ?? 0)?.['slava_fuck'] + ((s as any).mother ?? 0)?.['sergey_fuck'] + ((s as any).mother ?? 0)?.['misha_fuck'] === 3) {
    scene.actions([
      { label: 'Everyone', handler: (st: GameState) => {
    scene.text('"Who haven\'t I caught her with?" you say exasperatedly. "Sergey, Misha, Borislav, probably a dozen others I don\'t know about."');
    scene.text('Anya blinks in surprise. "I knew she was cheating with a lot of guys, but I never knew about Slava! I guess I never go around the cafe so why would I? I think I was… 13 the first time I caught her with Sergey? I promised Vasily I\'d play with him in the courtyard and instead I found… Yeah…"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMomslutTalk3(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  scene.build();
}

function enterMomslutTalk3(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Why didn\'t you tell me?', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/sister2.jpg');
    scene.text('"Why didn\'t you tell me?" you ask.');
    scene.text('"Because I didn\'t want to fuck up our family again," your sister replies with a sigh. "You weren\'t old enough to remember when dad left. Our real dad. Everyone knew mom was cheating on him. The whole town. But it stayed hush hush until he found out. After they got divorced, mom would take me to church with her on Sunday and strangers would ask me what it\'s like to be a whore\'s daughter. I didn\'t want to go through that again. Didn\'t want <i>you</i> to have to go through that. And I guess I didn\'t just didn\'t want to acknowledge it either. That it was easier to pretend the truth was a lie…"');
    scene.actions([
      { label: 'Keep talking', goto: ['sister_chat', 'talking'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterPornTalk0(s: GameState, scene: SceneBuilder): void {
  if (((s as any).film ?? 0) > 0) {
    scene.actions([
      { label: 'Tell her you\'re a pornstar', handler: (st: GameState) => {
    ((st as any).anyaQW = (st as any).anyaQW ?? {})['porn_know'] = 1;
    scene.actions([
      { label: 'Hesitantly', handler: (st: GameState) => {
    ((st as any).temp = (st as any).temp ?? {})['porn_admission'] = 'hesitant';
    scene.text('You chew your lip for a moment, debating with yourself if you\'re really going to tell her. You take a deep breath and steel yourself. At the end of the day, she\'s your sister and you want her to know. For her part, Anya\'s eyebrows furrow as she reads the anxiety on your face.');
    scene.text(`"${((st as any).pcs_nickname ?? '')}… What are you doing for money…?" she asks slowly.`);
    scene.text('"Porn…?" you admit with a weak smile, feeling your face flush with heat.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPornTalk1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Casually', handler: (st: GameState) => {
    ((st as any).temp = (st as any).temp ?? {})['porn_admission'] = 'casual';
    scene.text('"I\'ve shot a few pornos," you admit as casually as if you were saying you got a job waitressing.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPornTalk1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Proudly', handler: (st: GameState) => {
    ((st as any).temp = (st as any).temp ?? {})['porn_admission'] = 'proud';
    scene.text('"I\'ve been shooting porn," you admit with a smug smirk.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPornTalk1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterPornTalk1(s: GameState, scene: SceneBuilder): void {
  scene.text('"YOU <i>WHAT</i>?!" she blurts as her jaw opens wide, suddenly looking at the door as if your mother were going to come bursting in any second before dropping down into hushed tones. "You\'re doing <i>porn</i>?"');
  scene.actions([
    { label: 'The money is good', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/sister2.jpg');
    if (((st as any).temp ?? 0)?.['porn_admission'] === 'hesitant') {
      scene.text('"Russian girls are really popular overseas right now," you mumble shyly. "It pays really well…"');
    } else {
      if (((st as any).temp ?? 0)?.['porn_admission'] === 'casual') {
        scene.text('"Yeah," you say, shrugging like you don\'t understand your sister\'s explosive reaction. "It\'s sex for money. And the money is really good."');
      } else {
        if (((st as any).temp ?? 0)?.['porn_admission'] === 'proud') {
          scene.text('"Yeah," you say, letting your smirk widen into a full grin. "The money is <i>great.</i>"');
        }
      }
    }
    scene.text('"Are you crazy?!" she hisses. "Who cares about the money?! What if mom finds out?!"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPornConfront2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'The sex is good', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/sister2.jpg');
    if (((st as any).temp ?? 0)?.['porn_admission'] === 'hesitant') {
      scene.text('"The sex is really good," you mumble shyly. "All the actors have big dicks and know how to use them… Plus I get paid on top of that…"');
    } else {
      if (((st as any).temp ?? 0)?.['porn_admission'] === 'casual') {
        scene.text('"Yeah," you say, shrugging like you don\'t understand your sister\'s explosive reaction. "It\'s sex for money. And the sex is <i>really</i> good."');
      } else {
        if (((st as any).temp ?? 0)?.['porn_admission'] === 'proud') {
          scene.text('"Yeah," you say, letting your smirk widen into a full grin. "Everybody has a big dick and knows how to use it and the orgasms are mind-blowing. It\'s a great way to make money."');
        }
      }
    }
    scene.text('"Are you crazy?!" she hisses. "Who cares about the sex?! What if mom finds out?!"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPornConfront2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'It\'s fun', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/sister2.jpg');
    if (((st as any).temp ?? 0)?.['porn_admission'] === 'hesitant') {
      scene.text('"It\'s kinda fun," you mumble shyly. "Makes you feel like a movie star… Sort of…"');
    } else {
      if (((st as any).temp ?? 0)?.['porn_admission'] === 'casual') {
        scene.text('"Yeah," you say, shrugging like you don\'t understand your sister\'s explosive reaction. "It\'s fun to film porn. Like an X-rated movie star."');
      } else {
        if (((st as any).temp ?? 0)?.['porn_admission'] === 'proud') {
          scene.text('"Yeah," you say, letting your smirk widen into a full grin. "It\'s a ton of fun to film porn. Like an X-rated movie star. I love watching the views go up on my videos."');
        }
      }
    }
    scene.text('"Are you crazy?!" she hisses. "Who cares if it\'s fun?! What if mom finds out?!"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPornConfront2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterPornConfront1(s: GameState, scene: SceneBuilder): void {
  ((s as any).anyaQW = (s as any).anyaQW ?? {})['porn_confront'] = 1;
  scene.img('images/locations/pavlovsk/resident/apartment/home/bedrpar.jpg');
  scene.text('You take no more than a step into your room when Anya grabs you by the arm and yanks you inside before slamming the door behind you.');
  scene.text('"What the fuck?!" she hisses. "You\'re doing porn?!"');
  scene.actions([
    { label: 'Uhh', handler: (st: GameState) => {
    scene.text('"Uhhh…" is all you manage to get out as your sister continues to glare at you.');
    scene.text('"You fucking moron!" she whispers. "My friends told me about it today. Showed me videos on their phones. What the fuck were you thinking?! If Mom finds out, she\'ll throw you out of the house for sure!"');
    qspCall(st, 'sister_chat', 'porn_talk2');
  } },
    { label: 'Yeah, so?', handler: (st: GameState) => {
    scene.text('"Yeah, I am," you say, giving an equally stern look back at your sister. "So what?"');
    scene.text('"You fucking moron!" she whispers. "What do you mean \'so what\'? If Mom finds out, she\'ll throw you out of the house for sure!"');
    qspCall(st, 'sister_chat', 'porn_talk2');
  } },
    { label: 'How did you know?', handler: (st: GameState) => {
    scene.text('"How did you find out?" Your eyes go wide in surprise and your sister rolls hers.');
    scene.text('"My friends found videos of you online. They showed them to me, saying, \'Hey, is that your sister?\' I thought it was a fucking joke until I actually saw the videos of you. Are you an idiot? There\'s no way this doesn\'t spread around town! When Mom finds out, she\'ll throw you out of the house for sure!"');
    qspCall(st, 'sister_chat', 'porn_talk2');
  } },
  ]);
  scene.build();
}

function enterPornConfront2(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'She won\'t find out', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/sister2.jpg');
    scene.text('"She\'s not going to find out," you insist, though your sister gives you a doubtful look. "It\'s not like she watches porn."');
    if (((st as any).anyaQW ?? 0)?.['porn_confront'] === 1) {
      scene.text('"Neither do I, but if I found out about it, then why wouldn\'t she?"');
      scene.text('She gives you a stern look and lets you mull it over for a minute before sighing and wrapping her arms around you to whisper in your ear.');
    } else {
      scene.text('"But other people watch porn," she insists. "And people talk. With all the stuff we hear about her, how long do you think it will take before someone comes whispering in her ear about you?"');
      scene.text('She gives you a stern look, letting you mull it over for a minute before sighing and wrapping her arms around you to whisper in your ear.');
    }
    scene.text('"Look, just… Be careful, okay? I don\'t want to see you get hurt. You were too young to remember, but our family already broke in half when dad left. I don\'t want something to happen between you and Mom too."');
    scene.actions([
      { label: 'Continue', goto: ['sister_chat', 'talking'] },
    ]);
  } },
    { label: '', labelFn: (s: GameState) => 'Fuck ' + String((((s as any).npc_nickname ?? 0)?.['A29'] ?? '') ?? ''), handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/sister2.jpg');
    if (((st as any).momslut ?? 0) > 0  &&  ((st as any).anyaQW ?? 0)?.['momslut_know'] > 0) {
      scene.text('"<i>Fuck</i> that hypocritical bitch!" you sneer. "She\'s slutting it up all over town with guys who aren\'t our dad! I don\'t care what she thinks if she finds out I\'m doing porn."');
    } else {
      scene.text(`"<i>Fuck</i> ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}!" you sneer. "She wants to control my life? Well she can't control this. I'm doing porn whether she likes it or not."`);
    }
    scene.text('Your sister stares at you with wide eyes and you both sit in silence for a few seconds. After a while, she wraps her arms around you and whispers in your ear.');
    scene.text('"Look, just… Be careful, okay? I don\'t want to see you get hurt. You were too young to remember, but our family already broke in half when dad left. I don\'t want something to happen between you and Mom too."');
    scene.actions([
      { label: 'Continue', goto: ['sister_chat', 'talking'] },
    ]);
  } },
    { label: 'Maybe she\'s right', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/sister2.jpg');
    scene.text('You chew on your lip for a moment. Is this career choice really worth it if you get kicked out of the house? That would cause a lot of problems…');
    scene.text('Your sister senses your hesitation and wraps her arms around your shoulders to squeeze you in a big hug.');
    scene.text(`"Listen ${((st as any).pcs_nickname ?? '')}, I'm not judging you, I promise, but I don't want you to get hurt. Maybe you should take a break? At least until you move out?"`);
    scene.text('"I\'ll think about it," you mumble, hugging her back.');
    scene.actions([
      { label: 'Continue', goto: ['sister_chat', 'talking'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterPornRepeat1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/resident/anya/sister2.jpg');
  scene.text('"So… Are you still shooting porn?" Anya asks with surprising curiosity.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPornRepeat2(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterPornRepeat2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).anyaQW ?? 0)?.['porn_approve'] === 0) {
    scene.actions([
      { label: 'I thought you didn\'t want me doing porn?', handler: (st: GameState) => {
    ((st as any).anyaQW = (st as any).anyaQW ?? {})['porn_approve'] = 1;
    scene.text('"Weren\'t you the one who was telling me I should quit?" you ask with a smirk.');
    scene.text('"Look it\'s not like I <i>disapprove</i>," she explains. "I just don\'t want you to get kicked out of the house. Honestly? I think it\'s kinda cool that you\'re finding a way to make money with your body without resorting to straight up prostitution."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPornRepeat2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  scene.actions([
    { label: 'I quit' }, // TODO-QSP: empty action body
    { label: 'Still doing porn' }, // TODO-QSP: empty action body
    { label: 'Getting pretty famous' }, // TODO-QSP: empty action body
    { label: 'Thinking about quitting' }, // TODO-QSP: empty action body
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'checks':
      enterChecks(s, scene);
      break;
    case 'talking':
      enterTalking(s, scene);
      break;
    case 'small_talk1':
      enterSmallTalk1(s, scene);
      break;
    case 'job_talk_start':
      enterJobTalkStart(s, scene);
      break;
    case 'job_talk1':
      enterJobTalk1(s, scene);
      break;
    case 'twincompare':
      enterTwincompare(s, scene);
      break;
    case 'pargone':
      enterPargone(s, scene);
      break;
    case 'pregnant_notice':
      enterPregnantNotice(s, scene);
      break;
    case 'party_invite':
      enterPartyInvite(s, scene);
      break;
    case 'missed_party':
      enterMissedParty(s, scene);
      break;
    case 'after_roma':
      enterAfterRoma(s, scene);
      break;
    case 'missed_roma':
      enterMissedRoma(s, scene);
      break;
    case 'incest_talk':
      enterIncestTalk(s, scene);
      break;
    case 'bathroom_dildo_talk1':
      enterBathroomDildoTalk1(s, scene);
      break;
    case 'bathroom_dildo_talk2':
      enterBathroomDildoTalk2(s, scene);
      break;
    case 'sex_room_talk1':
      enterSexRoomTalk1(s, scene);
      break;
    case 'momslut_talk1':
      enterMomslutTalk1(s, scene);
      break;
    case 'momslut_talk2':
      enterMomslutTalk2(s, scene);
      break;
    case 'momslut_talk3':
      enterMomslutTalk3(s, scene);
      break;
    case 'porn_talk0':
      enterPornTalk0(s, scene);
      break;
    case 'porn_talk1':
      enterPornTalk1(s, scene);
      break;
    case 'porn_confront1':
      enterPornConfront1(s, scene);
      break;
    case 'porn_confront2':
      enterPornConfront2(s, scene);
      break;
    case 'porn_repeat1':
      enterPornRepeat1(s, scene);
      break;
    case 'porn_repeat2':
      enterPornRepeat2(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const sister_chat: LocationDef = {
  name: 'sister_chat',
  title: 'Anya',
  region: 'other',
  enter: enter,
};
