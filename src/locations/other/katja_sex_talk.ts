import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterSextalk(s: GameState, scene: SceneBuilder): void {
  scene.text('After talking for some time, Katja looks at you thoughtfully as her face turns completely red.');
  if (((s as any).katjaQW ?? 0)?.['boy_block'] === 1  &&  ((s as any).katjaQW ?? 0)?.['knows_artem_is_boyfreind'] !== 1) {
    (s as any).kattalkrand = Math.floor(Math.random() * 2) + 3;
  } else {
    (s as any).kattalkrand = Math.floor(Math.random() * 5) + 0;
  }
  if ((!((s as any).kattalkrand ?? 0))) {
    if (((s as any).stat ?? 0)?.['bj'] > 0) {
      qspCall(s, 'katja_sex_talk', 'bj_talk1');
    } else {
      if (((s as any).katjaQW ?? 0)?.['knows_BJ'] > 0) {
        // TODO-QSP: dynamic text: "<<$pcs_nickname>>, tell me, how are you at sucking dick?"
        scene.text(`"${((s as any).pcs_nickname ?? 0)}, tell me, how are you at sucking dick?"`);
      } else {
        // TODO-QSP: dynamic text: "<<$pcs_nickname>>, have you ever given a guy a blowjob?"
        scene.text(`"${((s as any).pcs_nickname ?? 0)}, have you ever given a guy a blowjob?"`);
      }
      scene.actions([
        { label: 'You\'ve never given a blowjob', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('You tell Katja that you\'ve never given a blowjob to a guy. She admits that she hasn\'t either.');
    scene.text('"Vicky talks about how good it is all the time, but I don\'t know. Guys usually smell bad and I\'m sure it would taste awful."');
    scene.actions([
      { label: 'Continue talking', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (((s as any).loc ?? 0) === 'katja_dorm') {
      scene.actions([{ label: 'Continue', goto: ['katja_dorm', 'talk'] }]);
    } else {
      if (((s as any).loc ?? 0) === 'mey_home'  &&  ((s as any).loc_arg ?? 0) === 'garden') {
        scene.actions([{ label: 'Continue', goto: ['katja_pool', 'sunbating_chat_finish'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['KatjaHomeTalk', ''] }]);
      }
    }
  } },
    ]);
  } },
      ]);
    }
    if (((s as any).katjaQW ?? 0)?.['knows_artem_is_boyfreind'] !== 1) {
      // TODO-QSP: act 'Tell Katja you''re not into boys <br>' + $func('wrap', 'neg', '(blocks further contents with Ka...
    }
  } else {
    if (((s as any).kattalkrand ?? 0) === 1) {
      if (((s as any).katjaQW ?? 0)?.['knows_sex'] > 0) {
        // TODO-QSP: dynamic text: "Tell me, <<$pcs_nickname>>. About some of the times you have had sex with a guy...
        scene.text(`"Tell me, ${((s as any).pcs_nickname ?? 0)}. About some of the times you have had sex with a guy,"`);
      } else {
        // TODO-QSP: dynamic text: "<<$pcs_nickname>>, have you ever had sex with a guy?"
        scene.text(`"${((s as any).pcs_nickname ?? 0)}, have you ever had sex with a guy?"`);
      }
      if (((s as any).stat ?? 0)?.['vaginal'] > 0) {
        scene.actions([
          { label: 'Talk about sex', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (5);
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['knows_sex'] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('You tell Katja about the times you\'ve had sex and how it felt. She blushes and bites her lip.');
    if (((s as any).katjaQW ?? 0)?.['pussy_sex'] > 0) {
      if (((s as any).npc_had_sex ?? 0)?.['A14']) {
        if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['QWstage'] = 6;
      }
      scene.text('Katja also tells you a story of how she had sex with a boy she picked up as a one-night stand.');
    }
    scene.actions([
      { label: 'Continue talking', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (((s as any).loc ?? 0) === 'katja_dorm') {
      scene.actions([{ label: 'Continue', goto: ['katja_dorm', 'talk'] }]);
    } else {
      if (((s as any).loc ?? 0) === 'mey_home'  &&  ((s as any).loc_arg ?? 0) === 'garden') {
        scene.actions([{ label: 'Continue', goto: ['katja_pool', 'sunbating_chat_finish'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['KatjaHomeTalk', ''] }]);
      }
    }
  } },
    ]);
  } },
        ]);
      } else {
        scene.actions([
          { label: 'No', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    if (((s as any).katjaQW ?? 0)?.['pussy_sex'] === 0) {
      scene.text('You tell Katja that you\'ve never had sex with a guy, and she admits that she\'s also still a virgin.');
      scene.text('"That probably makes us the only non-nerds who haven\'t had sex! Vicky does it all the time with Vanya and won\'t shut up about it!"');
    } else {
      if (((s as any).npc_had_sex ?? 0)?.['A14']) {
        if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['QWstage'] = 6;
      }
      scene.text('You tell Katja that you\'ve never had sex with a guy, and she\'s very surprised.');
      scene.text('"You\'ve never had sex with a guy?! Even I\'ve done that! I thought I was the last girl from school to lose my virginity. Vicky definitely make it seems like I was abnormal not finding somebody to fuck in school. She wouldn\'t stop pushing to find a guy. It was so annoying!"');
    }
    scene.actions([
      { label: 'Continue talking', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (((s as any).loc ?? 0) === 'katja_dorm') {
      scene.actions([{ label: 'Continue', goto: ['katja_dorm', 'talk'] }]);
    } else {
      if (((s as any).loc ?? 0) === 'mey_home'  &&  ((s as any).loc_arg ?? 0) === 'garden') {
        scene.actions([{ label: 'Continue', goto: ['katja_pool', 'sunbating_chat_finish'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['KatjaHomeTalk', ''] }]);
      }
    }
  } },
    ]);
  } },
        ]);
      }
      if (((s as any).katjaQW ?? 0)?.['knows_artem_is_boyfreind'] !== 1) {
        // TODO-QSP: act 'Tell Katja you''re not into boys <br>' + $func('wrap', 'neg', '(blocks further contents with Ka...
      }
    } else {
      if (((s as any).kattalkrand ?? 0) === 2) {
        if (((s as any).katjaQW ?? 0)?.['knows_anal'] > 0) {
          // TODO-QSP: dynamic text: "<<$pcs_nickname>>, what's anal sex like?"
          scene.text(`"${((s as any).pcs_nickname ?? 0)}, what's anal sex like?"`);
        } else {
          // TODO-QSP: dynamic text: "<<$pcs_nickname>>, have you ever had a guy stick it in your ass?"
          scene.text(`"${((s as any).pcs_nickname ?? 0)}, have you ever had a guy stick it in your ass?"`);
        }
        if (((s as any).stat ?? 0)?.['anal'] > 0) {
          scene.actions([
            { label: 'Talk about anal', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (5);
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['knows_anal'] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('You tell Katja about the times you\'ve had anal sex and what it feels like. She blushes and bites her lip.');
    if (((s as any).katjaQW ?? 0)?.['anal_sex'] > 0) {
      if (((s as any).npc_had_sex ?? 0)?.['A14']) {
        if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['anal_quest'] = 3;
      }
      scene.text('Katja also tells you a story of anal sex she had with a boy you don\'t know who she picked up as a one night stand.');
    }
    scene.actions([
      { label: 'Continue talking', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (((s as any).loc ?? 0) === 'katja_dorm') {
      scene.actions([{ label: 'Continue', goto: ['katja_dorm', 'talk'] }]);
    } else {
      if (((s as any).loc ?? 0) === 'mey_home'  &&  ((s as any).loc_arg ?? 0) === 'garden') {
        scene.actions([{ label: 'Continue', goto: ['katja_pool', 'sunbating_chat_finish'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['KatjaHomeTalk', ''] }]);
      }
    }
  } },
    ]);
  } },
          ]);
        } else {
          scene.actions([
            { label: 'You\'ve never had anal sex', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    if (((s as any).katjaQW ?? 0)?.['anal_sex'] === 0) {
      scene.text('You tell Katja that you\'ve never had anal sex. She says that she heard that a lot of girls in your class do, some more than others.');
    } else {
      if (((s as any).npc_had_sex ?? 0)?.['A14']) {
        if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['anal_quest'] = 3;
      }
      scene.text('You tell Katja that you\'ve never had anal sex.');
      scene.text('"You haven\'t?" she asks rhetorically "It\'s actually quite good. You should try it."');
    }
    scene.actions([
      { label: 'Continue talking', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (((s as any).loc ?? 0) === 'katja_dorm') {
      scene.actions([{ label: 'Continue', goto: ['katja_dorm', 'talk'] }]);
    } else {
      if (((s as any).loc ?? 0) === 'mey_home'  &&  ((s as any).loc_arg ?? 0) === 'garden') {
        scene.actions([{ label: 'Continue', goto: ['katja_pool', 'sunbating_chat_finish'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['KatjaHomeTalk', ''] }]);
      }
    }
  } },
    ]);
  } },
          ]);
        }
        if (((s as any).katjaQW ?? 0)?.['knows_artem_is_boyfreind'] !== 1) {
          // TODO-QSP: act 'Tell Katja you''re not into boys <br>' + $func('wrap', 'neg', '(blocks further contents with Ka...
        }
      } else {
        if (((s as any).kattalkrand ?? 0) === 3) {
          if (((s as any).katjaQW ?? 0)?.['knows_cuni'] > 0  ||  ((s as any).npc_had_sex ?? 0)?.['A14']) {
            // TODO-QSP: dynamic text: "<<$pcs_nickname>>, tell me how you lick pussy."
            scene.text(`"${((s as any).pcs_nickname ?? 0)}, tell me how you lick pussy."`);
          } else {
            // TODO-QSP: dynamic text: "<<$pcs_nickname>>, have you gone down on a girl?"
            scene.text(`"${((s as any).pcs_nickname ?? 0)}, have you gone down on a girl?"`);
          }
          if (((s as any).stat ?? 0)?.['cuni_give'] > 0) {
            scene.actions([
              { label: 'Talk about licking pussy', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (5);
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['knows_cuni'] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('You tell Katja about the times you\'ve gone down on another girl and how it feels. She blushes and bites her lip.');
    if (((s as any).katjaQW ?? 0)?.['horny'] > 50  &&  ((s as any).katjaQW ?? 0)?.['slut'] >= 40  &&  (Math.floor(Math.random() * (30 - -30 + 1)) + (-30)) < ((s as any).katjaQW ?? 0)?.['dom']  &&  ((s as any).npc_had_sex ?? 0)?.['A14']) {
      scene.text('Katja asks you to show her how you lick pussy.');
      scene.actions([
        { label: 'Show her', handler: (st: GameState) => {
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['horny'] = 0;
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['slut'] = ((s as any).katjaQW['slut'] ?? 0) + (1);
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['dom'] = ((s as any).katjaQW['dom'] ?? 0) + (2);
    if (!(s as any).npc_had_sex) (s as any).npc_had_sex = {}; (s as any).npc_had_sex['A14'] = 1;
    qspCall(s, 'npcStat', 'A14');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/school/kuni2.jpg');
    // TODO-QSP: dynamic text: You're a little confused at first before you notice her pulling her panties off....
    scene.text(`You're a little confused at first before you notice her pulling her panties off. Once she has them off, she opens her legs wide. "Go on, ${((s as any).pcs_nickname ?? 0)}. Show me how you do it, please."`);
    scene.text('You pause, more in surprise than anything, but her glistening wet pussy is enough to convince you. You lean forward place your face between her legs and start licking.');
    scene.text('You suck on her clit and slip your tongue inside her, working her pussy for all you\'re worth. She begins to moan loudly and buck her hips, grinding your face into her crotch. As she gets close to orgasm, she grabs your hair and holds your face against her pussy, rubbing herself against you as much as you\'re licking her, leaving your face coated in her juices.');
    scene.text('Her orgasm hits her hard, leaving her unable to talk as her body spasms. Once her orgasm passes, you lick her clean of all her pussy juices, making sure not to miss a single spot. When you look up at Katja, she has a confident smile on her face. "Well aren\'t you just a good little girl?" She then kisses you deeply before you start to lean back and spread your legs, but she\'s already shaking her head.');
    // TODO-QSP: dynamic text: "Sorry <<$pcs_nickname>>, maybe next time. We need to finish our homework," she ...
    scene.text(`"Sorry ${((s as any).pcs_nickname ?? 0)}, maybe next time. We need to finish our homework," she says sweetly. You pause before nodding in understanding. You watch the new confident look intensify on her face as she smiles and the two of you finish your homework.`);
    qspCall(s, 'arousal', 'cuni_give', 15, 'sub', 'lesbian');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue talking', handler: (st: GameState) => {
    if (((s as any).loc ?? 0) === 'katja_dorm') {
      scene.actions([{ label: 'Continue', goto: ['katja_dorm', 'talk'] }]);
    } else {
      if (((s as any).loc ?? 0) === 'mey_home'  &&  ((s as any).loc_arg ?? 0) === 'garden') {
        scene.actions([{ label: 'Continue', goto: ['katja_pool', 'sunbating_chat_finish'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['KatjaHomeTalk', ''] }]);
      }
    }
  } },
    ]);
  } },
        { label: 'Ignore her', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (((s as any).loc ?? 0) === 'katja_dorm') {
      scene.actions([{ label: 'Continue', goto: ['katja_dorm', 'talk'] }]);
    } else {
      if (((s as any).loc ?? 0) === 'mey_home'  &&  ((s as any).loc_arg ?? 0) === 'garden') {
        scene.actions([{ label: 'Continue', goto: ['katja_pool', 'sunbating_chat_finish'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['KatjaHomeTalk', ''] }]);
      }
    }
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Continue talking', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (((s as any).loc ?? 0) === 'katja_dorm') {
      scene.actions([{ label: 'Continue', goto: ['katja_dorm', 'talk'] }]);
    } else {
      if (((s as any).loc ?? 0) === 'mey_home'  &&  ((s as any).loc_arg ?? 0) === 'garden') {
        scene.actions([{ label: 'Continue', goto: ['katja_pool', 'sunbating_chat_finish'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['KatjaHomeTalk', ''] }]);
      }
    }
  } },
      ]);
    }
  } },
            ]);
          } else {
            scene.actions([
              { label: 'No', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    if (((s as any).katjaQW ?? 0)?.['simultanous_girls'] > 0) {
      scene.text('"I\'ve never gone down on a girl before," you say and Katja looks quite surprised.');
      scene.text('"Never? Is it something that you\'ve ever thought about?" she asks in a curious tone.');
      scene.actions([
        { label: 'I\'ve thought about it', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (20);
    scene.text('"I\'ve thought about it, it\'s just that the situation never came up," you reply.');
    scene.text('"So it\'s something you want to try" she asks.');
    if (((s as any).katjaQW ?? 0)?.['horny'] >= 50  &&  ((s as any).katjaQW ?? 0)?.['QWstage'] > 2  &&  ((s as any).katjaQW ?? 0)?.['slut'] >= 20) {
      scene.text('"So what would you do if that situation was to come up. For example right now?" she asks in a seductive voice.');
      scene.actions([
        { label: 'See what she does', goto: ['katjaHomeTalk', 'hornykiss'] },
        { label: 'Stop her from doing anything', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'dislike');
    scene.text('"It would definitely not happen right now. Right?" you say, a little unsure of how Katja will react.');
    scene.text('"Of course not. Nothing happens here you don\'t want to," she says, clearly looking disappointed before she quickly changes the subject.');
    scene.actions([
      { label: 'Continue talking', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (((s as any).loc ?? 0) === 'katja_dorm') {
      scene.actions([{ label: 'Continue', goto: ['katja_dorm', 'talk'] }]);
    } else {
      if (((s as any).loc ?? 0) === 'mey_home'  &&  ((s as any).loc_arg ?? 0) === 'garden') {
        scene.actions([{ label: 'Continue', goto: ['katja_pool', 'sunbating_chat_finish'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['KatjaHomeTalk', ''] }]);
      }
    }
  } },
    ]);
  } },
      ]);
    } else {
      scene.text('"Well, I think you should find a chance to try it. It\'s quite good," she says with a wink, but then changes the subject.');
      scene.actions([
        { label: 'Continue talking', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (((s as any).loc ?? 0) === 'katja_dorm') {
      scene.actions([{ label: 'Continue', goto: ['katja_dorm', 'talk'] }]);
    } else {
      if (((s as any).loc ?? 0) === 'mey_home'  &&  ((s as any).loc_arg ?? 0) === 'garden') {
        scene.actions([{ label: 'Continue', goto: ['katja_pool', 'sunbating_chat_finish'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['KatjaHomeTalk', ''] }]);
      }
    }
  } },
      ]);
    }
  } },
        { label: 'I\'m not into girls', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'dislike');
    qspCall(s, 'stat', '');
    scene.text('"I\'m not into girls," you reply.');
    // TODO-QSP: dynamic text: "Really?" Katja says in surprise. "Too bad. You're really missing out on somethi...
    scene.text('"Really?" Katja says in surprise. "Too bad. You\'re really missing out on something. Making love to girls is really something. They\'re \'+iif(katjaQW[\'knows_sex\'] +katjaQW[\'knows_BJ\'] + katjaQW[\'knows_anal\'] > 0, \'much more tender than boys\', \'so tender\')+\'."');
    scene.text('"I really think that you should give it a thought," she continues, seemingly a little disappointed in your response. She then changes the subject.');
    scene.actions([
      { label: 'Continue talking', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (((s as any).loc ?? 0) === 'katja_dorm') {
      scene.actions([{ label: 'Continue', goto: ['katja_dorm', 'talk'] }]);
    } else {
      if (((s as any).loc ?? 0) === 'mey_home'  &&  ((s as any).loc_arg ?? 0) === 'garden') {
        scene.actions([{ label: 'Continue', goto: ['katja_pool', 'sunbating_chat_finish'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['KatjaHomeTalk', ''] }]);
      }
    }
  } },
    ]);
  } },
      ]);
    } else {
      scene.text('You tell Katja that you\'ve never gone down on a girl. She seems a little surprised and you get the feeling that this was not what she wanted to hear.');
    }
    scene.actions([
      { label: 'Continue talking', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (((s as any).loc ?? 0) === 'katja_dorm') {
      scene.actions([{ label: 'Continue', goto: ['katja_dorm', 'talk'] }]);
    } else {
      if (((s as any).loc ?? 0) === 'mey_home'  &&  ((s as any).loc_arg ?? 0) === 'garden') {
        scene.actions([{ label: 'Continue', goto: ['katja_pool', 'sunbating_chat_finish'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['KatjaHomeTalk', ''] }]);
      }
    }
  } },
    ]);
  } },
            ]);
          }
        } else {
          if (((s as any).kattalkrand ?? 0) === 4) {
            if (((s as any).katjaQW ?? 0)?.['knows_masturbation'] > 0) {
              // TODO-QSP: dynamic text: "Tell me how you masturbate, <<$pcs_nickname>>."
              scene.text(`"Tell me how you masturbate, ${((s as any).pcs_nickname ?? 0)}."`);
            } else {
              // TODO-QSP: dynamic text: "Do you masturbate, <<$pcs_nickname>>?"
              scene.text(`"Do you masturbate, ${((s as any).pcs_nickname ?? 0)}?"`);
            }
            if (((s as any).stat ?? 0)?.['mast'] > 0) {
              if (((s as any).stat ?? 0)?.['self_fisting'] > 0) {
                scene.actions([
                  { label: 'Tell her how you pushed your hand into your pussy', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (10);
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    // TODO-QSP: dynamic text: You tell Katja how you '+iif(stat['self_fisting'] = 1, 'once', 'sometimes')+' pu...
    scene.text('You tell Katja how you \'+iif(stat[\'self_fisting\'] = 1, \'once\', \'sometimes\')+\' put your whole fist into your pussy, and how it felt doing it.');
    // TODO-QSP: dynamic text: Katja looks '+iif(katjaQW['knows_self_fisting'] = 0, 'completely shocked, but', ...
    scene.text('Katja looks \'+iif(katjaQW[\'knows_self_fisting\'] = 0, \'completely shocked, but\', \'excited, and\')+\' her face turns even redder as she bites her lip.');
    if (((s as any).katjaQW ?? 0)?.['knows_self_fisting'] === 0) {
      if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['knows_self_fisting'] = 1;
    }
    scene.actions([
      { label: 'Continue talking', handler: (st: GameState) => {
    if (((s as any).katjaQW ?? 0)?.['fisted_vag'] === 0  &&  ((s as any).npc_vag ?? 0)?.['A14'] > 3  &&  ((s as any).katjaQW ?? 0)?.['slut'] >= 70  &&  ((s as any).katjaQW ?? 0)?.['horny'] >= 50  &&  ((s as any).npc_had_sex ?? 0)?.['A14']) {
      scene.actions([{ label: 'Continue', goto: ['katjaHomeTalk', 'fisting_ask'] }]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      if (((s as any).loc ?? 0) === 'katja_dorm') {
        scene.actions([{ label: 'Continue', goto: ['katja_dorm', 'talk'] }]);
      } else {
        if (((s as any).loc ?? 0) === 'mey_home'  &&  ((s as any).loc_arg ?? 0) === 'garden') {
          scene.actions([{ label: 'Continue', goto: ['katja_pool', 'sunbating_chat_finish'] }]);
        } else {
          scene.actions([{ label: 'Continue', goto: ['KatjaHomeTalk', ''] }]);
        }
      }
    }
  } },
    ]);
  } },
                ]);
              }
              if (((s as any).stat ?? 0)?.['self_fisting_anal'] > 0) {
                scene.actions([
                  { label: 'Tell her how you fisted your ass', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (10);
    if (((s as any).katjaQW ?? 0)?.['knows_self_fisting_anal'] === 0) {
      if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['knows_self_fisting_anal'] = 1;
    }
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('You tell Katja how you masturbate anally and even managed to stretch it so much that you could shove your fist into it.');
    scene.text('She blushes and bites her lip.');
    scene.actions([
      { label: 'Continue talking', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (((s as any).loc ?? 0) === 'katja_dorm') {
      scene.actions([{ label: 'Continue', goto: ['katja_dorm', 'talk'] }]);
    } else {
      if (((s as any).loc ?? 0) === 'mey_home'  &&  ((s as any).loc_arg ?? 0) === 'garden') {
        scene.actions([{ label: 'Continue', goto: ['katja_pool', 'sunbating_chat_finish'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['KatjaHomeTalk', ''] }]);
      }
    }
  } },
    ]);
  } },
                ]);
              }
              scene.actions([
                { label: 'Talk about masturbation', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (5);
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['knows_masturbation'] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('You tell Katja how you masturbate in the bathroom and she blushes and bites her lip.');
    if (((s as any).katjaQW ?? 0)?.['masturbates'] === 0) {
      scene.actions([
        { label: 'Continue talking', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (((s as any).loc ?? 0) === 'katja_dorm') {
      scene.actions([{ label: 'Continue', goto: ['katja_dorm', 'talk'] }]);
    } else {
      if (((s as any).loc ?? 0) === 'mey_home'  &&  ((s as any).loc_arg ?? 0) === 'garden') {
        scene.actions([{ label: 'Continue', goto: ['katja_pool', 'sunbating_chat_finish'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['KatjaHomeTalk', ''] }]);
      }
    }
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Katja responds', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (10);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/school/mastr.jpg');
    scene.text('Katja tells you she also masturbates, right here in this room, fondling herself between her legs.');
    scene.actions([
      { label: 'Continue talking', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (((s as any).loc ?? 0) === 'katja_dorm') {
      scene.actions([{ label: 'Continue', goto: ['katja_dorm', 'talk'] }]);
    } else {
      if (((s as any).loc ?? 0) === 'mey_home'  &&  ((s as any).loc_arg ?? 0) === 'garden') {
        scene.actions([{ label: 'Continue', goto: ['katja_pool', 'sunbating_chat_finish'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['KatjaHomeTalk', ''] }]);
      }
    }
  } },
    ]);
  } },
      ]);
    }
  } },
              ]);
            } else {
              scene.actions([
                { label: 'You\'ve never masturbated', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    if (((s as any).katjaQW ?? 0)?.['masturbates'] > 0) {
      scene.text('"What?!" she splutters. "You\'ve never masturbated?! Why?! I thought that everybody did it. Even I do it and I\'m usually the last to do anything!"');
      scene.text('You try to explain why you\'ve never masturbated.');
    } else {
      scene.text('You tell Katja that you\'ve never masturbated. She seems surprised at your answer.');
    }
    scene.actions([
      { label: 'Continue talking', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (((s as any).loc ?? 0) === 'katja_dorm') {
      scene.actions([{ label: 'Continue', goto: ['katja_dorm', 'talk'] }]);
    } else {
      if (((s as any).loc ?? 0) === 'mey_home'  &&  ((s as any).loc_arg ?? 0) === 'garden') {
        scene.actions([{ label: 'Continue', goto: ['katja_pool', 'sunbating_chat_finish'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['KatjaHomeTalk', ''] }]);
      }
    }
  } },
    ]);
  } },
              ]);
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Refuse to talk about such topics', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You refuse to talk about such topics with her and she looks down in confusion an...
    scene.text(`You refuse to talk about such topics with her and she looks down in confusion and mumbles. "Sorry, ${((s as any).pcs_nickname ?? 0)}. I didn't mean to pry."`);
    scene.actions([
      { label: 'Continue talking', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (((s as any).loc ?? 0) === 'katja_dorm') {
      scene.actions([{ label: 'Continue', goto: ['katja_dorm', 'talk'] }]);
    } else {
      if (((s as any).loc ?? 0) === 'mey_home'  &&  ((s as any).loc_arg ?? 0) === 'garden') {
        scene.actions([{ label: 'Continue', goto: ['katja_pool', 'sunbating_chat_finish'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['KatjaHomeTalk', ''] }]);
      }
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBjTalk1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  if (((s as any).katjaQW ?? 0)?.['knows_BJ'] > 0) {
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>!" she says, a sparkle in her eye. "Tell me what it's like to ...
    scene.text(`"${((s as any).pcs_nickname ?? 0)}!" she says, a sparkle in her eye. "Tell me what it's like to suck dick again."`);
  } else {
    if (((s as any).katjaQW ?? 0)?.['knows_BJ']=== 0) {
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>, have you ever given a guy a blowjob?"
      scene.text(`"${((s as any).pcs_nickname ?? 0)}, have you ever given a guy a blowjob?"`);
    }
  }
  if (((s as any).stat ?? 0)?.['bj'] > 0) {
    if (((s as any).katjaQW ?? 0)?.['knows_BJ'] === 0) {
      scene.actions([
        { label: 'No (lie)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"No," you shake your head before shamelessly lying through your teeth. "I\'ve never given a blowjob before."');
    scene.text('"Oh." She sits back, looking disappointed for some reason.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (((s as any).loc ?? 0) === 'katja_dorm') {
      scene.actions([{ label: 'Continue', goto: ['katja_dorm', 'talk'] }]);
    } else {
      if (((s as any).loc ?? 0) === 'mey_home'  &&  ((s as any).loc_arg ?? 0) === 'garden') {
        scene.actions([{ label: 'Continue', goto: ['katja_pool', 'sunbating_chat_finish'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['KatjaHomeTalk', ''] }]);
      }
    }
  } },
    ]);
  } },
        { label: 'Yes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (5);
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['knows_BJ'] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"Yeah, I\'ve given a few," you admit.');
    scene.text('"What\'s it like?" she asks, eyes wide with excitement.');
    qspCall(s, 'katja_sex_talk', 'bj_talk2');
  } },
      ]);
    } else {
      if (((s as any).stat ?? 0)?.['bj'] > 0) {
        (s as any).minut = ((s as any).minut ?? 0) + 3;
        if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (5);
        qspCall(s, 'katja_sex_talk', 'bj_talk2');
      }
    }
  } else {
    scene.actions([
      { label: 'No', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"No," you shake your head. "I\'ve never given a blowjob before."');
    scene.text('"Oh." She sits back, looking disappointed for some reason. "Guess we\'re both clueless then, huh?"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (((s as any).loc ?? 0) === 'katja_dorm') {
      scene.actions([{ label: 'Continue', goto: ['katja_dorm', 'talk'] }]);
    } else {
      if (((s as any).loc ?? 0) === 'mey_home'  &&  ((s as any).loc_arg ?? 0) === 'garden') {
        scene.actions([{ label: 'Continue', goto: ['katja_pool', 'sunbating_chat_finish'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['KatjaHomeTalk', ''] }]);
      }
    }
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBjTalk2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'It tastes funny', handler: (st: GameState) => {
    scene.text('You wrinkle your nose. "It tastes funny. It\'s like, kinda salty? But also sort of… musty? I don\'t think I mind the act itself that much, but dick has a weird flavor."');
    scene.text('Katja seems taken aback, almost disappointed. You guess this isn\'t the answer she was hoping for.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (((s as any).loc ?? 0) === 'katja_dorm') {
      scene.actions([{ label: 'Continue', goto: ['katja_dorm', 'talk'] }]);
    } else {
      if (((s as any).loc ?? 0) === 'mey_home'  &&  ((s as any).loc_arg ?? 0) === 'garden') {
        scene.actions([{ label: 'Continue', goto: ['katja_pool', 'sunbating_chat_finish'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['KatjaHomeTalk', ''] }]);
      }
    }
  } },
    ]);
  } },
    { label: 'It\'s fun', handler: (st: GameState) => {
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (5);
    scene.text('"It\'s fun!" you grin. "I\'m not really sure what it is, but something about having a dick in your mouth is really entertaining. It\'s like, totally alive! And you can feel it making all these tiny movements when it\'s on your tongue. I really like giving head."');
    scene.text('Katja hangs on your every word, nodding excitedly for you to keep describing your experiences with oral sex to her.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (((s as any).loc ?? 0) === 'katja_dorm') {
      scene.actions([{ label: 'Continue', goto: ['katja_dorm', 'talk'] }]);
    } else {
      if (((s as any).loc ?? 0) === 'mey_home'  &&  ((s as any).loc_arg ?? 0) === 'garden') {
        scene.actions([{ label: 'Continue', goto: ['katja_pool', 'sunbating_chat_finish'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['KatjaHomeTalk', ''] }]);
      }
    }
  } },
    ]);
  } },
    { label: 'It\'s whatever', handler: (st: GameState) => {
    scene.text('You shrug. "I don\'t mind doing it, but I don\'t love it either," you say. "Dick doesn\'t really taste like anything if it\'s clean. Kinda salty if it isn\'t. I don\'t know. It\'s whatever I guess."');
    scene.text('Katja seems taken aback, almost disappointed. You guess this isn\'t the answer she was hoping for.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (((s as any).loc ?? 0) === 'katja_dorm') {
      scene.actions([{ label: 'Continue', goto: ['katja_dorm', 'talk'] }]);
    } else {
      if (((s as any).loc ?? 0) === 'mey_home'  &&  ((s as any).loc_arg ?? 0) === 'garden') {
        scene.actions([{ label: 'Continue', goto: ['katja_pool', 'sunbating_chat_finish'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['KatjaHomeTalk', ''] }]);
      }
    }
  } },
    ]);
  } },
    { label: 'It\'s boring', handler: (st: GameState) => {
    scene.text('You roll your eyes. "It\'s boring. You have to keep sucking the whole time and after a while, my jaw just starts to ache with the motion. It\'s a dick in your mouth, I don\'t know what to tell you."');
    scene.text('Katja seems taken aback, looking almost worried. You guess you just shattered some impressions she had about giving head.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (((s as any).loc ?? 0) === 'katja_dorm') {
      scene.actions([{ label: 'Continue', goto: ['katja_dorm', 'talk'] }]);
    } else {
      if (((s as any).loc ?? 0) === 'mey_home'  &&  ((s as any).loc_arg ?? 0) === 'garden') {
        scene.actions([{ label: 'Continue', goto: ['katja_pool', 'sunbating_chat_finish'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['KatjaHomeTalk', ''] }]);
      }
    }
  } },
    ]);
  } },
    { label: 'It turns me on', handler: (st: GameState) => {
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (5);
    scene.text('"It turns me on so much," you admit, biting your lip in a lusty smile. "When someone\'s in your mouth, you can make them feel <i>really</i> good. And they\'ll respond to what you do. If you take their whole length, they\'ll squirm. If you lick the head, it\'ll twitch under your touch. Just knowing you can make someone else feel that way… Ugh, just <i>thinking</i> about it gets me wet!"');
    scene.text('Katja hangs on your every word, nodding along with wide eyes as you describe what it is you love so much about giving head. A faint blush also comes to her cheeks and you notice her unconsciously rubbing her thighs together.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (((s as any).loc ?? 0) === 'katja_dorm') {
      scene.actions([{ label: 'Continue', goto: ['katja_dorm', 'talk'] }]);
    } else {
      if (((s as any).loc ?? 0) === 'mey_home'  &&  ((s as any).loc_arg ?? 0) === 'garden') {
        scene.actions([{ label: 'Continue', goto: ['katja_pool', 'sunbating_chat_finish'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['KatjaHomeTalk', ''] }]);
      }
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'Sextalk':
      enterSextalk(s, scene);
      break;
    case 'bj_talk1':
      enterBjTalk1(s, scene);
      break;
    case 'bj_talk2':
      enterBjTalk2(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const katja_sex_talk: LocationDef = {
  name: 'katja_sex_talk',
  title: '(blocks further contents with Katja and boys)',
  region: 'other',
  enter: enter,
};
