import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).katjaQW ?? 0)?.['afterschool_hangout_day'] !== ((s as any).daystart ?? 0)) {
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'like');
  }
  (s as any).katjaQW['afterschool_hangout_day'] = ((s as any).daystart ?? 0);
  qspCall(s, 'katjaEvDin', '');
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  qspCall(s, 'stat', '');
  if (((s as any).katjaQW ?? 0)?.['QWstage'] > 2) {
    if (((s as any).katjaQW ?? 0)?.['horny'] < 20) {
      // TODO-QSP: dynamic text: Katja looks at you with a smile. "What do you want to do, <<$pcs_nickname>>?"
      scene.text(`Katja looks at you with a smile. "What do you want to do, ${((s as any).pcs_nickname ?? 0)}?"`);
    } else {
      // TODO-QSP: dynamic text: Katja looks at you with a naughty twinkle in her eyes. "What do you want to do, ...
      scene.text(`Katja looks at you with a naughty twinkle in her eyes. "What do you want to do, ${((s as any).pcs_nickname ?? 0)}?"`);
      if (((s as any).katjaQW ?? 0)?.['horny'] < 60) {
        // TODO-QSP: dynamic text: Katja looks at you mischievously with a faint blush on her cheeks. "What do you ...
        scene.text(`Katja looks at you mischievously with a faint blush on her cheeks. "What do you want to do, ${((s as any).pcs_nickname ?? 0)}?"`);
      } else {
        // TODO-QSP: dynamic text: Katja is blushing fairly obviously and looks at you longingly. "<<$pcs_nickname>...
        scene.text(`Katja is blushing fairly obviously and looks at you longingly. "${((s as any).pcs_nickname ?? 0)}, what do you want to do?"`);
        if (((s as any).katjaQW ?? 0)?.['horny'] >= (Math.floor(Math.random() * -49) + 150)  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] === 0  &&  ((s as any).katjaQW ?? 0)?.['knows_artem_is_boyfreind'] === 1  &&  ((s as any).artemQW ?? 0)?.['katja_threesome'] === 2  &&  ((s as any).locat ?? 0)?.['Vicky'] !== 8  &&  ((s as any).locat ?? 0)?.['Vicky'] !== 9  &&  ((s as any).locat ?? 0)?.['Vicky'] !== 12  &&  ((s as any).locat ?? 0)?.['Vicky'] !== 13) {
          scene.actions([{ label: 'Continue', goto: ['artem_katja_sex', 'home_work_ask_katja_no_artem'] }]);
        }
        // TODO-QSP: dynamic text: Katja is as red as a lobster and her chest is heaving from her heavy breaths. Sh...
        scene.text(`Katja is as red as a lobster and her chest is heaving from her heavy breaths. She's idly rubbing her thighs against one another while she talks. "What do you want to do, ${((s as any).pcs_nickname ?? 0)}?"`);
      }
      // TODO-QSP: dynamic text: Katja looks at you with a smile. "What do you want to do, <<$pcs_nickname>>?"
      scene.text(`Katja looks at you with a smile. "What do you want to do, ${((s as any).pcs_nickname ?? 0)}?"`);
    }
    if (((s as any).fedorKozlovQW ?? 0) >= 10  &&  (!((s as any).FedorKatjaChat ?? 0))) {
      (s as any).FedorKatjaChat = 1;
      scene.text('You and Katja run into Fedor, who gives you a wave. "Hey girls, what are you two up to?"');
      scene.text('Katja downcasts her eyes, noticeably embarrassed. "We\'re just going to do our homework together."');
      scene.text('"Okay, I\'ll see you some other time then," he smiles before he turns and walks away.');
      scene.actions([
        { label: 'Say goodbye and leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
      ]);
    }
    if (((s as any).lernHome ?? 0) > 0  &&  ((s as any).katjaQW ?? 0)?.['QWstage'] >= 2) {
      // TODO-QSP: act '"Let''s do our homework together"': gt 'katjaEV', '1'
    }
    if (((s as any).lernHome ?? 0) > 0  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] === 0  &&  ((s as any).katjaQW ?? 0)?.['knows_artem_is_boyfreind'] === 1  &&  ((s as any).artemQW ?? 0)?.['katja_threesome'] === 2  &&  ((s as any).locat ?? 0)?.['Vicky'] !== 8  &&  ((s as any).locat ?? 0)?.['Vicky'] !== 9  &&  ((s as any).locat ?? 0)?.['Vicky'] !== 12  &&  ((s as any).locat ?? 0)?.['Vicky'] !== 13) {
      // TODO-QSP: act 'Ask Katja if she wants to do homework with Artem': gt 'artem_katja_sex', 'home_work_ask_player_...
    }
    scene.actions([
      { label: '"Let\'s hang out"', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    if (((s as any).katjaQW ?? 0)?.['QWstage'] === 1  &&  ((s as any).npc_rel ?? 0)?.['A14'] >= 50  &&  (Math.floor(Math.random() * 6) + 1) === 1) {
      (s as any).minut = ((s as any).minut ?? 0) + (5);
      scene.actions([{ label: 'Continue', goto: ['KatjaHomeTalk', 'TamVal'] }]);
    }
    if (((s as any).katjaQW ?? 0)?.['QWstage'] > 1  &&  ((s as any).pcs_makeup ?? 0) <= 1) {
      // TODO-QSP: dynamic text: "Wait a minute, <<$pcs_nickname>>! I bet you would look great with a little make...
      scene.text(`"Wait a minute, ${((s as any).pcs_nickname ?? 0)}! I bet you would look great with a little make-up on you! What do you say?"`);
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Let her put makeup on you', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('Katja happily grins as she quickly straightens your hair. "What do you want? A light touch-up, some normal make-up or shall I just shovel it on?"');
    (s as any).pcs_hairbsh = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Light touch-up', handler: (st: GameState) => {
    (s as any).pcs_makeup = 2;
    scene.text('Katja subtly applies some neutral tones, with a light application of makeup to bring out your natural beauty.');
    if (((s as any).katjaQW ?? 0)?.['QWstage'] > 2) {
      (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (5*(1 + ((s as any).npc_had_sex ?? 0)?.['A14']));
      scene.text('Katja suddenly becomes aware that she\'s staring into your eyes and blushes.');
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: '"Let\'s hang out"', goto: ['katjaEv', 'kathan'] },
    ]);
  } },
      { label: 'Normal make-up', handler: (st: GameState) => {
    (s as any).pcs_makeup = 3;
    scene.text('Katja applies some mildly vibrate tones and colors of makeup to cover your minor imperfections and enhance your best features.');
    if (((s as any).katjaQW ?? 0)?.['QWstage'] > 2) {
      (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (5*(1 + ((s as any).npc_had_sex ?? 0)?.['A14']));
      scene.text('Katja suddenly becomes aware that she\'s staring into your eyes and blushes.');
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: '"Let\'s hang out"', goto: ['katjaEv', 'kathan'] },
    ]);
  } },
      { label: 'Heavy make-up', handler: (st: GameState) => {
    (s as any).pcs_makeup = 4;
    scene.text('Katja applies some deeper, richer shades of makeup that are thick enough to cover most imperfections while drawing attention to your eyes and lips.');
    if (((s as any).katjaQW ?? 0)?.['QWstage'] > 2) {
      (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (5*(1 + ((s as any).npc_had_sex ?? 0)?.['A14']));
      scene.text('Katja suddenly becomes aware that she\'s staring into your eyes and blushes.');
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: '"Let\'s hang out"', goto: ['katjaEv', 'kathan'] },
    ]);
  } },
    ]);
  } },
        { label: 'You really don\'t need it', goto: ['katjaEv', 'kathan'] },
      ]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['KatjaEv', 'kathan'] }]);
    }
  } },
    ]);
  }
  scene.build();
}

export const katjaEv: LocationDef = {
  name: 'katjaEv',
  title: '<<$npc_firstname[\'A14\']>> <<$npc_lastname[\'A14\']>>',
  region: 'other',
  description: ['You and Katja run into Fedor, who gives you a wave. "Hey girls, what are you two up to?"'],
  enter: enter,
};
