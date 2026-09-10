import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_rel ?? 0)?.['A33'] < 20) {
    scene.text('Your relationship with your sister is scandalous.');
  } else {
    scene.text('Your relationship with your sister is tense.');
    if (((s as any).npc_rel ?? 0)?.['A33'] >= 40  &&  ((s as any).npc_rel ?? 0)?.['A33'] < 60) {
      scene.text('You and your sister have a normal relationship.');
    } else {
      scene.text('You and your sister have a good relationship.');
      if (((s as any).npc_rel ?? 0)?.['A33'] >= 80) {
        scene.text('You have a great relationship with your sister.');
      }
      if (((s as any).npc_rel ?? 0)?.['A33'] > 65  &&  ((s as any).mesec ?? 0) > 0  &&  ((s as any).preg ?? 0) === 0  &&  ((s as any).mc_inventory ?? 0)?.['tampons'] === 0  &&  ((s as any).narkossister ?? 0) === 0) {
        scene.actions([
          { label: 'Ask for a tampon', handler: (st: GameState) => {
    scene.text('You tell your sister that you\'re menstruating and have no tampons. She looks at you knowingly, brings some of hers and recommends that you take care of this in advance next time.');
    (s as any).mc_inventory['tampons'] = 3;
    qspCall(s, 'npc_relationship', 'modify', 'A33', (-15));
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'stat', '');
    return;
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
        ]);
      }
      if (((s as any).loc ?? 0) !== 'kuhrPar') {
        if (((s as any).cumloc ?? 0)[11] === 1  ||  (((s as any).cumloc ?? 0)[6] === 1  ||  ((s as any).cumloc ?? 0)[7] === 1)  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 200) {
          (s as any).sisterknowslut = 1;
          // TODO-QSP: dynamic text: Your sister looks at you. "What is that, <<$pcs_nickname>>?" Her eyes then narro...
          scene.text(`Your sister looks at you. "What is that, ${((s as any).pcs_nickname ?? 0)}?" Her eyes then narrow. "Is that cum!? What were you thinking walking around with that on you?! It's a good thing I noticed and not Mom! God forbid what she would do if she ever saw you like that!"`);
        } else {
          (s as any).sisterknowslut = 1;
          // TODO-QSP: dynamic text: Your sister looks at you. "<<$pcs_nickname>>?! So the rumors are true, you are <...
          scene.text(`Your sister looks at you. "${((s as any).pcs_nickname ?? 0)}?! So the rumors are true, you are ${((s as any).gnikname ?? 0)}!"`);
          if (((s as any).cumloc ?? 0)[11] === 1  ||  (((s as any).cumloc ?? 0)[6] === 1  ||  ((s as any).cumloc ?? 0)[7] === 1)  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 250  &&  ((s as any).sisterknowslut ?? 0) > 0) {
            // TODO-QSP: dynamic text: Your sister looks at you. "Up to your usual tricks, <<$pcs_nickname>>? You could...
            scene.text(`Your sister looks at you. "Up to your usual tricks, ${((s as any).pcs_nickname ?? 0)}? You could at least wash yourself."`);
          }
          if (((s as any).drugVars ?? 0)?.['heroin_high'] === 0  &&  ((s as any).narkossister ?? 0) === 1) {
            (s as any).narkossister = 0;
          }
          if (((s as any).drugVars ?? 0)?.['heroin_high'] > 20  &&  ((s as any).narkossister ?? 0) === 0) {
            if (Math.floor(Math.random() * 100) + 1 >= 90) {
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
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
              ]);
            } else {
              if (((s as any).pcs_mood ?? 0) > 10) {
                qspCall(s, 'mood', 'lower', 'tiny');
              }
              qspCall(s, 'stat', '');
              (s as any).narkossister = 0;
              // TODO-QSP: 'You steel yourself. ' + $OpenInnerThought + '"Come on <<$pcs_nickname>>, deep breath, focus. You ca...
              scene.text('You feel your head is clear enough to talk to your sister once more.');
              scene.actions([
                { label: 'Chat', goto: ['sister_chat', 'talking'] },
              ]);
            }
          }
          if (((s as any).clothingworntype ?? 0) === 'nude') {
            if (((s as any).sisterLesb ?? 0) >= 7) {
              scene.text('Anya looks at you, taking in your naked body with an amused expression on her face.');
              // TODO-QSP: dynamic text: "Are you trying to seduce me, <<$pcs_nickname>>?"
              scene.text(`"Are you trying to seduce me, ${((s as any).pcs_nickname ?? 0)}?"`);
            } else {
              (s as any).sisterQW['naked'] = 1;
              // TODO-QSP: dynamic text: Anya looks at you, her eyes wide. "What are you doing, <<$pcs_nickname>>?! What ...
              scene.text(`Anya looks at you, her eyes wide. "What are you doing, ${((s as any).pcs_nickname ?? 0)}?! What if someone walks in and sees you like this? Mom would throw a fit if she caught you walking around naked like that! I just don't understand you sometimes…"`);
              scene.text('Anya shakes her head at you. "Mom is going to catch you sooner or later and tan your ass!"');
              scene.actions([
                { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                { label: 'Chat', goto: ['sister_chat', 'talking'] },
              ]);
            }
          }
        }
        if (((s as any).loc ?? 0) === 'bedrPar') {
          if (((s as any).canBraidHair ?? 0) === 0  &&  ((s as any).npc_rel ?? 0)?.['A33'] > 50  &&  ((s as any).pcs_hairlng ?? 0) > 80) {
            scene.actions([
              { label: 'Can you teach me how to braid my hair?', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/sister3.jpg');
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    scene.text('She looks at you, eyebrow raised. "You don\'t know how to braid your own hair?"');
    scene.text('You look down, embarrassed. "I usually just go to the salon for them to braid it…"');
    scene.text('She laughs and gives you a hug. "Of course I\'ll teach you, though it might take a while."');
    scene.actions([
      { label: 'Learn how to braid your hair', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    (s as any).canBraidHair = 1;
    qspCall(s, 'npc_relationship', 'modify', 'A33', 5);
    scene.img('images/characters/pavlovsk/resident/anya/braid.jpg');
    scene.text('You make plenty of mistakes and get your hair in a knot a couple of times, but you eventually feel confident enough to braid your hair on your own.');
    scene.actions([
      { label: 'Thank her and leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      { label: 'Chat', goto: ['sister_chat', 'talking'] },
    ]);
  } },
      { label: 'Maybe another time', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/anya/sister3.jpg');
    scene.text('"Thanks sis, but maybe some other time? I have somewhere to be right now."');
    scene.text('She shrugs. "Come back when you want to learn."');
    scene.actions([
      { label: 'Thank her and leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  } },
            ]);
          }
        }
        // TODO-QSP: !{ Chatting
        qspCall(s, 'stat', '');
        scene.img('images/characters/pavlovsk/resident/anya/sister2.jpg');
        // TODO-QSP: $OpenInnerThought + '"Come on <<$pcs_firstname>>, keep it together! Act sober,"' + $CloseInnerThough...
        // TODO-QSP: dynamic text: Your sister looks at you, her eyebrow raised. "Are you stoned, <<$pcs_nickname>>...
        scene.text(`Your sister looks at you, her eyebrow raised. "Are you stoned, ${((s as any).pcs_nickname ?? 0)}?"`);
        scene.actions([
          { label: 'Chat', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 6) + 10);
    if (((s as any).sisterQW ?? 0)?.['chatday'] !== ((s as any).daystart ?? 0)) {
      qspCall(s, 'npc_relationship', 'modify', 'A33', 2);
    }
    (s as any).sisterQW['chatday'] = ((s as any).daystart ?? 0);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/anya/sister3.jpg');
    if (((s as any).npc_rel ?? 0)?.['A33'] < 20) {
      scene.text('Your relationship with your sister is awful.');
    }
    if (((s as any).npc_rel ?? 0)?.['A33'] >= 20  &&  ((s as any).npc_rel ?? 0)?.['A33'] < 40) {
      scene.text('Your relationship with your sister is tense.');
    }
    if (((s as any).npc_rel ?? 0)?.['A33'] >= 40  &&  ((s as any).npc_rel ?? 0)?.['A33'] < 60) {
      scene.text('You and your sister have a normal relationship.');
    }
    if (((s as any).npc_rel ?? 0)?.['A33'] >= 60  &&  ((s as any).npc_rel ?? 0)?.['A33'] < 80) {
      scene.text('You and your sister have a good relationship.');
    }
    if (((s as any).npc_rel ?? 0)?.['A33'] >= 80) {
      scene.text('You have a great relationship with your sister.');
    }
    // TODO-QSP: end !}
  }, goto: ['sister_chat', 'talking'] },
          { label: 'No', handler: (st: GameState) => {
    (s as any).narkossister = 1;
    qspCall(s, 'stat', '');
    scene.text('You nervously shake your head and back away, but it\'s obvious that Anya can tell.');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
          { label: 'Yes', handler: (st: GameState) => {
    (s as any).narkossister = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/anya/sister2.jpg');
    scene.text('You admit that you learned where to buy drugs and wanted to try them out.');
    // TODO-QSP: dynamic text: Anya looks at you sternly. "<<$pcs_nickname>>, I'm not your mother, who would ki...
    scene.text(`Anya looks at you sternly. "${((s as any).pcs_nickname ?? 0)}, I'm not your mother, who would kill you if she found out by the way, but this is the first and last time. It's not worth it! If you continue, then your whole life will not be worth shit."`);
    return;
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
        ]);
      }
    }
  }
  scene.build();
}

export const sister_chat: LocationDef = {
  name: 'sister_chat',
  title: 'Anya',
  region: 'other',
  description: ['Your relationship with your sister is scandalous.'],
  enter: enter,
};
