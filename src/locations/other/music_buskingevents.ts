import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterBusking(s: GameState, scene: SceneBuilder): void {
  (s as any).ml_buskingtime = 60;
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).ml_buskingtime ?? 0));
  qspCall(s, 'exp_gain', 'instrmusic', (Math.floor(Math.random() * 3) + 1));
  qspCall(s, 'exp_gain', 'vokal', (Math.floor(Math.random() * 3) + 1));
  ((s as any).ml_busking = (s as any).ml_busking ?? {})['busking_count'] = ((s as any).ml_busking['busking_count'] ?? 0) + (1);
  ((s as any).ml_busking = (s as any).ml_busking ?? {})['busking_time'] = ((s as any).ml_busking['busking_time'] ?? 0) + (((s as any).ml_buskingtime ?? 0));
  if (((s as any).perform_lvl ?? 0) < 50) {
    qspCall(s, 'exp_gain', 'perform', (Math.floor(Math.random() * 3) + 1));
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCalculateTips(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'money', 'earn', ((s as any).ml_tipsearned ?? 0));
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic '<<$ARGS[1]>>_music += rand(0,3)'
  ((s as any).ml_performance = (s as any).ml_performance ?? {})['total_time_performed'] = ((s as any).ml_performance['total_time_performed'] ?? 0) + (((s as any).ml_buskingtime ?? 0));
  ((s as any).ml_performance = (s as any).ml_performance ?? {})['performed_minutes'] = ((s as any).ml_performance['performed_minutes'] ?? 0) + (((s as any).ml_buskingtime ?? 0));
  ((s as any).ml_busking = (s as any).ml_busking ?? {})['busking_count'] = ((s as any).ml_busking['busking_count'] ?? 0) + (1);
  ((s as any).ml_busking = (s as any).ml_busking ?? {})['busking_time'] = ((s as any).ml_busking['busking_time'] ?? 0) + (((s as any).ml_buskingtime ?? 0));
  ((s as any).ml_busking = (s as any).ml_busking ?? {})['total_earnings'] = ((s as any).ml_busking['total_earnings'] ?? 0) + (((s as any).ml_tipsearned ?? 0));
  scene.img('images/pc/activities/music/guitarf' + (Math.floor(Math.random() * 2) + 1) + '.jpg');
  // TODO-QSP: dynamic text: You start to play the songs you know, pushing your open guitar case forward a li...
  scene.text('You start to play the songs you know, pushing your open guitar case forward a little in case people drop some change there.\' + iif(ml_online[\'account\'] = 1 and ml_online[\'active\'] = 1, \' You also set up the sign with the link to your webprofile.\', \') + \' After playing for an hour you have made ' + ((s as any).ml_tipsearned ?? '') + ' <b>P</b> in tips.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'music_buskingevents', 'finish');
  } },
  ]);
  scene.build();
}

function enterCalculateTips(s: GameState, scene: SceneBuilder): void {
  if (((s as any).region ?? 0) === 'city') {
    (s as any).ml_location_mod = 30;
  } else {
    if (((s as any).region ?? 0) === 'pav') {
      (s as any).ml_location_mod = 0;
    } else {
      if (((s as any).region ?? 0) === 'pushkin') {
        (s as any).ml_location_mod = 15;
      }
    }
  }
  (s as any).ml_time_mod = 5;
  if (((s as any).week ?? 0) >= 5) {
    (s as any).ml_time_mod = ((s as any).ml_time_mod ?? 0) + (10);
  }
  if (((s as any).hour ?? 0) >= 17) {
    (s as any).ml_time_mod = ((s as any).ml_time_mod ?? 0) + (10);
  }
  (s as any).ml_time_loc_mod = (((s as any).ml_location_mod ?? 0) + ((s as any).ml_time_mod ?? 0));
  (s as any).ml_tipsmax = ((((s as any).pcs_instrmusic ?? 0) + ((s as any).pcs_vokal ?? 0) + ((s as any).pcs_perform ?? 0) + ((((s as any).pcs_hotcat ?? 0)-4)*35)) * ((s as any).ml_time_loc_mod ?? 0))/50;
  (s as any).ml_tipsearned = (Math.max(0, 0)*((s as any).ml_buskingtime ?? 0)) / 60;
  // TODO-QSP: end
  scene.build();
}

function enterAnushka(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/pc/activities/music/guitarf' + (Math.floor(Math.random() * 2) + 1) + '.jpg');
  if (((s as any).pcs_instrmusic ?? 0) > 80) {
    qspCall(s, 'npc_relationship', 'modify', 'A144', 'love');
    if (((s as any).npc_rel ?? 0)?.['A144'] > 50) {
      scene.text('As you stop playing and get ready to pack up, you spot Anushka standing not far from you, watching you quietly.');
      // TODO-QSP: dynamic text: When she notices that you saw her, she grins and walks over. "Wow, that was amaz...
      scene.text(`When she notices that you saw her, she grins and walks over. "Wow, that was amazing, ${((s as any).pcs_nickname ?? '')}! You should come over and we can jam together some time."`);
      scene.text('The two of you talk for a few minutes about music before she says she needs to get going. She walks away with a smile and a wave.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A144'] > 20) {
        scene.text('As you stop playing and get ready to pack up you spot Anushka standing not far from you, watching you quietly.');
        // TODO-QSP: dynamic text: When she notices that you saw her, she grins and walks over. "Wow, that was amaz...
        scene.text(`When she notices that you saw her, she grins and walks over. "Wow, that was amazing, ${((s as any).pcs_nickname ?? '')}!"`);
        scene.text('The two of you talk for a few minutes about music before she says she needs to get going. She walks away with a smile and a wave.');
      } else {
        scene.text('You start losing yourself in the music, occasionally glancing up to look at the people passing by as several leave some rubles in your case. You then see some movement that attracts your attention and spot Anushka watching you play. She seems to have a look of surprise as she bobs her head slightly to the music. You know she doesn\'t really like you, but maybe she at least respects your ability. When she sees you looking at her, she disappears into the crowd.');
      }
    }
  } else {
    if (((s as any).pcs_instrmusic ?? 0) > 60) {
      qspCall(s, 'npc_relationship', 'modify', 'A144', 'like');
      if (((s as any).npc_rel ?? 0)?.['A144'] > 50) {
        scene.text('As you stop playing and get ready to pack up, you spot Anushka standing not far from you, watching you quietly.');
        // TODO-QSP: dynamic text: When she notices that you saw her, she grins and walks over. "That was pretty da...
        scene.text(`When she notices that you saw her, she grins and walks over. "That was pretty damn good, ${((s as any).pcs_nickname ?? '')}. You should come over and we can jam together some time."`);
        scene.text('The two of you talk for a few minutes about music before she says she needs to get going. She walks away with a smile and a wave.');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A144'] > 20) {
          scene.text('As you stop playing and get ready to pack up, you spot Anushka standing not far from you, watching you quietly.');
          // TODO-QSP: dynamic text: When she notices that you saw her, she grins and walks over. "That was pretty da...
          scene.text(`When she notices that you saw her, she grins and walks over. "That was pretty damn good, ${((s as any).pcs_nickname ?? '')}."`);
          scene.text('The two of you talk for a few minutes about music before she says she needs to get going. She walks away with a smile and a wave.');
        } else {
          scene.text('You start losing yourself in the music, occasionally glancing up to look at the people passing by as some leave some rubles in your case. You then see some movement that attracts your attention and spot Anushka watching you play. She seems to have a look of mild surprise and respect? You know she doesn\'t really like you, but maybe she at least respects your ability. When she sees you looking at her, she disappears into the crowd.');
        }
      }
    } else {
      if (((s as any).pcs_instrmusic ?? 0) > 40) {
        qspCall(s, 'npc_relationship', 'modify', 'A144', 'like');
        if (((s as any).npc_rel ?? 0)?.['A144'] > 50) {
          scene.text('As you stop playing and get ready to pack up, you spot Anushka standing not far from you, watching you quietly.');
          // TODO-QSP: dynamic text: When she notices that you saw her, she smiles and walks over. "I didn''t know yo...
          scene.text(`When she notices that you saw her, she smiles and walks over. "I didn't know you had turned into a wandering minstrel, ${((s as any).pcs_nickname ?? '')}. Not bad, not bad at all. You should come over sometime and we can play together. I can give you some tips if you like?"`);
          scene.text('The two of you talk for a few minutes about music before she says she needs to get going. She walks away with a smile and a wave.');
        } else {
          if (((s as any).npc_rel ?? 0)?.['A144'] > 20) {
            scene.text('As you stop playing and get ready to pack up, you spot Anushka standing not far from you, watching you quietly.');
            // TODO-QSP: dynamic text: When she notices that you saw her, she smiles and walks over. "I didn''t know yo...
            scene.text(`When she notices that you saw her, she smiles and walks over. "I didn't know you had turned into a wandering minstrel, ${((s as any).pcs_nickname ?? '')}. Not bad, not bad at all."`);
            scene.text('The two of you talk for a few minutes about music before she says she needs to get going. She walks away with a smile and a wave.');
          } else {
            scene.text('You start losing yourself in the music, occasionally glancing up to look at the people passing by as some leave some rubles in your case. You then see some movement that attracts your attention and spot Anushka watching you play. She seems to have a look of mild surprise and maybe even mild approval? You know she doesn\'t really like you, but maybe she at least respects your ability. When she sees you looking at her, she disappears into the crowd.');
          }
        }
      } else {
        if (((s as any).pcs_instrmusic ?? 0) > 20) {
          if (((s as any).npc_rel ?? 0)?.['A144'] > 50) {
            scene.text('As you stop playing and get ready to pack up, you spot Anushka standing not far from you, watching you quietly.');
            // TODO-QSP: dynamic text: When she notices that you saw her, she smiles and walks over. "Not bad, <<$pcs_n...
            scene.text(`When she notices that you saw her, she smiles and walks over. "Not bad, ${((s as any).pcs_nickname ?? '')}, not bad. I've heard better, but also heard worse too. You should come over sometime and we can play together. I can teach you a few things if you like?"`);
            scene.text('The two of you talk for a few minutes about music before she says she needs to get going. She walks away with a smile and a wave.');
          } else {
            if (((s as any).npc_rel ?? 0)?.['A144'] > 20) {
              scene.text('As you stop playing and get ready to pack up, you spot Anushka standing not far from you, watching you quietly.');
              // TODO-QSP: dynamic text: When she notices that you saw her, she smiles and walks over. "Not bad, <<$pcs_n...
              scene.text(`When she notices that you saw her, she smiles and walks over. "Not bad, ${((s as any).pcs_nickname ?? '')}, not bad. I've heard better, but also heard worse too."`);
              scene.text('The two of you talk for a few minutes about music before she says she needs to get going. She walks away with a smile and a wave.');
            } else {
              scene.text('You start losing yourself in the music, occasionally glancing up to look at the people passing by as a few leave some rubles in your case. You then see some movement that attracts your attention and spot Anushka watching you play. She seems to have a look of disdain on her face; you know she doesn\'t really like you, but had hoped she would respect your ability at least. When she sees you looking at her, she scoffs before walking away.');
            }
          }
        } else {
          qspCall(s, 'npc_relationship', 'modify', 'A144', 'dislike');
          if (((s as any).npc_rel ?? 0)?.['A144'] > 50) {
            scene.text('As you stop playing and get ready to pack up, you spot Anushka standing not far from you, watching you quietly with a pained expression on her face.');
            scene.text('When she notices that you saw her, she forces a smile to her face. "You need to practice. A lot. Honestly, I wouldn\'t even be playing in public with that lack of skill."');
            scene.text('You frown. "I\'m trying!"');
            scene.text('She sighs. "Stop by some time and I can teach you the basics you need to know."');
            scene.text('The two of you talk for a few minutes about music before she says she needs to get going. She walks away with a hint of disappointment on her face.');
          } else {
            if (((s as any).npc_rel ?? 0)?.['A144'] > 20) {
              scene.text('As you stop playing and get ready to pack up, you spot Anushka standing not far from you, watching you quietly with a pained expression on her face.');
              scene.text('When she notices that you saw her, she forces a smile to her face. "My god, that physically hurt my soul it was so bad! I\'ve heard two cats fucking that sounded more pleasant than that!"');
              scene.text('You frown. "I\'m trying! I\'ve been practicing!"');
              scene.text('She shakes her head slightly. "Well you need to practice some more. Honestly you shouldn\'t even play in public until you\'re a lot better than that."');
              scene.text('The two of you talk for a few minutes about music before she says she needs to get going. She walks away clearly a little disappointed in your performance.');
            } else {
              scene.text('You start losing yourself in the music, occasionally glancing up to look at the people passing by. Most seem to hurry by to try and get away from the racket you\'re making as you see some movement that attracts your attention and you spot Anushka watching you play. She seems to have a look of utter pain and disdain on her face; she clearly doesn\'t approve of your lack of musical talent. When she sees you looking at her, she scoffs and shakes her head in disgust before walking away.');
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'music_actions', 'finish');
  } },
  ]);
  scene.build();
}

function enterLenaAndLera(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'lower', 'small');
  // TODO-QSP: dynamic text: Lena and Lera harasses <<$pcs_nickname>>
  scene.text(`Lena and Lera harasses ${((s as any).pcs_nickname ?? '')}`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'music_actions', 'finish');
  } },
  ]);
  scene.build();
}

function enterFinish(s: GameState, scene: SceneBuilder): void {
  (s as any).ml_rand_event = (Math.floor(Math.random() * 101) + 0);
  if (((s as any).ml_rand_event ?? 0) <= 10  &&  ((s as any).region ?? 0) === 'pav'  &&  ((s as any).npc_rel ?? 0)?.['A144'] > 40) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAnushka(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).ml_rand_event ?? 0) <= 30  &&  ((s as any).region ?? 0) === 'pav'  &&  ((s as any).ml_delparcoQW ?? 0)?.['Stage'] === 0) {
      qspCall(s, 'music_gigstarts', 'zariyah_passing_by');
    } else {
      qspCall(s, 'music_actions', 'finish');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'busking':
      enterBusking(s, scene);
      break;
    case 'calculate_tips':
      enterCalculateTips(s, scene);
      break;
    case 'anushka':
      enterAnushka(s, scene);
      break;
    case 'lena_and_lera':
      enterLenaAndLera(s, scene);
      break;
    case 'finish':
      enterFinish(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const music_buskingevents: LocationDef = {
  name: 'music_buskingevents',
  title: 'As you stop playing and get ready to pack up, you spot Anush',
  region: 'other',
  enter: enter,
};
