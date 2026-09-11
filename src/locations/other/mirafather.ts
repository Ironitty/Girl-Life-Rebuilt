import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boystat', 'A64');
  (s as any).boyage = qspFunc(s, 'shortgs', 'dob_to_age', 'A64');
  qspCall(s, 'miroslava_schedule', '');
  qspCall(s, 'stat', '');
  if (((s as any).npc_QW ?? 0)?.['A64'] === 0) {
    // TODO-QSP: $func('wrap', 'header b center', 'Mira''s Father')
  }
  if (((s as any).npc_QW ?? 0)?.['A64'] > 0) {
    // TODO-QSP: $func('wrap', 'header b center', 'Afanasiy')
  }
  scene.img('images/characters/shared/headshots_main/big64.jpg');
  // TODO-QSP: dynamic text: Mira's father is <<boyage>> years old. After his wife died, he started to drink ...
  scene.text(`Mira's father is ${((s as any).boyage ?? 0)} years old. After his wife died, he started to drink heavily. As a result, he looks much older than he actually is. However, he is still in good shape for a man his age.`);
  if (((s as any).daystart ?? 0) < ((s as any).MiraVars ?? 0)?.['emb_day']  &&  ((s as any).mirafathertalk ?? 0) === 0  &&  ((s as any).MiraVars ?? 0)?.['event_day'] !== ((s as any).daystart ?? 0)) {
    scene.img('images/characters/shared/headshots_main/big64.jpg');
    scene.text('You are passing Mira\'s house when you see Mira\'s father headed in your direction.');
    // TODO-QSP: dynamic text: "<<$pcs_firstname>>, wait. I need to speak with you," he says, coming closer.
    scene.text(`"${((s as any).pcs_firstname ?? 0)}, wait. I need to speak with you," he says, coming closer.`);
    scene.text('You stop and look at him frightfully. "Did Mira tell him what I made her do?" you think as panicked thoughts race through your head.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, do you know what happened to Mira?" Afanasiy asks, looking y...
    scene.text(`"${((s as any).pcs_nickname ?? 0)}, do you know what happened to Mira?" Afanasiy asks, looking you in the eye.`);
    scene.text('"N-no, what happened to her?" you ask in a confused voice, expecting him to start shouting any second.');
    scene.text('"I don\'t know. She is just sitting at home all the time. She doesn\'t leave the yard, I\'m concerned." Mira\'s father answers.');
    scene.text('"Oh, ah… I don\'t know," you say, trying to make it sound believable and make your eyes look innocent. "Maybe she was hurt by some local boy or had a fight with someone…"');
    scene.text('"Okay, I think it will pass… soon, I hope. But I want you to come and visit us. I think your company would do Mira a lot of good. It might bring her out of this funk faster." Mira\'s father says goodbye and leaves to resume working around his house.');
    scene.text('"Close call," you think as you watch his retreating back and exhale with relief.');
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    (s as any).mirafathertalk = 1;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['miroslava', 'start'] },
    ]);
  } else {
    if (((s as any).MiraFather ?? 0) !== ((s as any).daystart ?? 0)) {
      (s as any).MiraFather = ((s as any).daystart ?? 0);
      if (((s as any).npc_QW ?? 0)?.['A64'] >= 16  &&  (((s as any).MiraVars ?? 0)?.['meadow'] === 3  ||  ((s as any).MiraVars ?? 0)?.['meadow'] === 4)) {
        ((s as any).MiraVars ?? {})['meadow'] = 5;
      }
      if (((s as any).npc_QW ?? 0)?.['A64'] < 5) {
        scene.actions([
          { label: 'Ask how he\'s doing', handler: (st: GameState) => {
    if (((s as any).npc_QW ?? 0)?.['A64'] < 5) {
      ((s as any).npc_QW ?? {})['A64'] = (((s as any).npc_QW ?? {})['A64'] ?? 0) + (1);
    }
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big64.jpg');
    // TODO-QSP: dynamic text: You are greeted by '+iif(npc_QW['A64'] = 0, 'Mira's father', 'Afanasiy')+' and p...
    scene.text('You are greeted by \'+iif(npc_QW[\'A64\'] = 0, \'Mira\'s father\', \'Afanasiy\')+\' and politely inquire about his health.  He responds with a smile and says, "All is well, little lady."');
    if (((s as any).npc_QW ?? 0)?.['A64'] === 0) {
      scene.text('Mira\'s father continues, "I\'m glad Mira has finally found a friend here in the village. It will be good for her to have another girl around. By the way, you can call me Afanasiy."');
    }
    scene.actions([
      { label: 'Continue', goto: ['mirafather', ''] },
    ]);
  } },
        ]);
      } else {
        if (((s as any).npc_QW ?? 0)?.['A64'] < 10) {
          scene.actions([
            { label: 'Chat with him', handler: (st: GameState) => {
    if (((s as any).npc_QW ?? 0)?.['A64'] < 10) {
      ((s as any).npc_QW ?? {})['A64'] = (((s as any).npc_QW ?? {})['A64'] ?? 0) + (1);
    }
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big64.jpg');
    scene.text('You spend several minutes chatting with Afanasiy about the weather and trivia.');
    scene.actions([
      { label: 'Continue', goto: ['mirafather', ''] },
    ]);
  } },
          ]);
        } else {
          if (((s as any).npc_QW ?? 0)?.['A64'] >= 10  &&  ((s as any).npc_QW ?? 0)?.['A64'] < 15) {
            scene.actions([
              { label: 'Flirt with him', handler: (st: GameState) => {
    if (((s as any).npc_QW ?? 0)?.['A64'] < 15) {
      ((s as any).npc_QW ?? {})['A64'] = (((s as any).npc_QW ?? {})['A64'] ?? 0) + (1);
    }
    qspCall(s, 'arousal', 'foreplay', 10);
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/shared/headshots_main/big64.jpg');
    scene.text('You spend several minutes with Afanasiy, playful looking him over and smiling meaningfully at him. He is happy with the company of a beautiful young woman. During your conversation, you notice his eyes roving up and down your body appraisingly.');
    scene.actions([
      { label: 'Continue', goto: ['mirafather', ''] },
    ]);
  } },
            ]);
          } else {
            if (((s as any).npc_QW ?? 0)?.['A64'] === 15) {
              scene.actions([
                { label: 'Seduce him', handler: (st: GameState) => {
    ((s as any).npc_QW ?? {})['A64'] = 16;
    qspCall(s, 'arousal', 'foreplay', 10);
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big64.jpg');
    scene.text('You move over and stand next to Afanasiy.  You let your hand start to stroke his thigh and slowly move towards his crotch. Afanasiy looks at you for a while, deep in thought. Eventually, he sighs and then nods to himself as if he has made a decision. He takes you by the hand, leads you into his house, and then down the hall into his room.');
    scene.actions([
      { label: 'Enjoy his touch', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/sex/mira/mirafathersexkuni.jpg');
    scene.text('Afanasiy is a gentle lover. With practised ease, he gently undresses you and crouches before you. His mouth and fingers play across the lips of your pussy, and he skillfully licks you until he brings you a powerful orgasm.');
    qspCall(s, 'arousal', 'cuni', 10);
    qspCall(s, 'arousal', 'vaginal_finger', 10);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Turn around for him', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/sex/mira/mirafathersex.jpg');
    (s as any).pose = 0;
    if (((s as any).mesec ?? 0) === 0  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      qspCall(s, 'dinsex', 'boy_puts_condom');
      qspCall(s, 'dinsex', 'vaginal_sex', 10);
      qspCall(s, 'dinsex', 'sexcum');
      qspCall(s, 'arousal', 'vaginal', 10);
    } else {
      qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
      qspCall(s, 'arousal', 'anal', 10);
    }
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', goto: ['mirafather', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
              ]);
            } else {
              if (((s as any).npc_QW ?? 0)?.['A64'] > 15) {
                scene.actions([
                  { label: 'Wink at him', handler: (st: GameState) => {
    if (((s as any).npc_QW ?? 0)?.['A64'] < 20) {
      ((s as any).npc_QW ?? {})['A64'] = (((s as any).npc_QW ?? {})['A64'] ?? 0) + (1);
    }
    qspCall(s, 'arousal', 'foreplay', 5);
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big64.jpg');
    scene.text('You expressly wink at Afanasiy, and he understands your meaning. Then, looking for nosy neighbours, he quickly waves for you to enter the house.');
    scene.actions([
      { label: 'Go inside', handler: (st: GameState) => {
    (s as any).pose = 0;
    (s as any).temp_mf = Math.floor(Math.random() * 10) + 0;
    if ((!((s as any).temp_mf ?? 0))) {
      scene.img('images/locations/gadukino/sex/mira/mirafathersex.jpg');
    } else {
      if (((s as any).temp_mf ?? 0) === 1) {
        scene.img('images/locations/gadukino/sex/mira/mirafathersex1.jpg');
      } else {
        if (((s as any).temp_mf ?? 0) === 2) {
          scene.img('images/locations/gadukino/sex/mira/mirafathersex2.jpg');
        } else {
          if (((s as any).temp_mf ?? 0) === 3) {
            scene.img('images/locations/gadukino/sex/mira/mirafathersex3.jpg');
          } else {
            if (((s as any).temp_mf ?? 0) === 4) {
              scene.img('images/locations/gadukino/sex/mira/mirafathersex4.jpg');
            } else {
              if (((s as any).temp_mf ?? 0) === 5) {
                scene.img('images/locations/gadukino/sex/mira/mirafatherbj1.jpg');
              } else {
                if (((s as any).temp_mf ?? 0) === 6) {
                  scene.img('images/locations/gadukino/sex/mira/mirafatherbj1.jpg');
                } else {
                  if (((s as any).temp_mf ?? 0) === 7) {
                    scene.img('images/locations/gadukino/sex/mira/mirafatherbj2.jpg');
                  } else {
                    if (((s as any).temp_mf ?? 0) === 8) {
                      scene.img('images/locations/gadukino/sex/mira/mirafatherbj3.jpg');
                    } else {
                      if (((s as any).temp_mf ?? 0) === 9) {
                        scene.img('images/locations/gadukino/sex/mira/mirafatherbj4.jpg');
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
    if (((s as any).temp_mf ?? 0) < 5) {
      if (((s as any).mesec ?? 0) === 0  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0  &&  (Math.floor(Math.random() * 3) + 0) < 2) {
        qspCall(s, 'dinsex', 'boy_puts_condom');
        qspCall(s, 'dinsex', 'vaginal_sex', 10);
        qspCall(s, 'dinsex', 'sexcum');
        qspCall(s, 'arousal', 'vaginal', 10);
      } else {
        qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri');
        qspCall(s, 'dinsex', 'analsex');
        qspCall(s, 'arousal', 'anal', 10);
      }
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Continue', goto: ['mirafather', ''] },
      ]);
    } else {
      qspCall(s, 'oral', 'start');
      qspCall(s, 'arousal', 'bj', 10);
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Make him cum', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/locations/gadukino/sex/mira/mirafathercum.jpg');
    if (((s as any).temp_mf ?? 0) < 5) {
      scene.text('Afanasiy gently pulls away from you, leaving a couple of pearly drops of semen on your lips, and continues cumming on your tits and abdomen.');
    } else {
      scene.text('Afanasiy gently pulls out of you. You kneel before him as he begins cumming on your tits and abdomen.');
    }
    qspCall(s, 'arousal', 'bj', (-2));
    qspCall(s, 'cum_call', 'stomach', ((s as any).boy ?? 0), 1, '', '', 15);
    qspCall(s, 'cum_call', 'breasts', ((s as any).boy ?? 0), 1, '', '', 20);
    qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0), 1, '', '', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', goto: ['mirafather', ''] },
    ]);
  } },
      ]);
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
    scene.actions([
      { label: 'Ask if Mira is home', handler: (st: GameState) => {
    if (qspFunc(s, 'miroslava_schedule', 'is_here', 'gad_miroslava_home', 'start')) {
      scene.actions([{ label: 'Continue', goto: ['miroslava', 'start'] }]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 2;
      qspCall(s, 'stat', '');
      scene.img('images/characters/shared/headshots_main/big64.jpg');
      if (qspFunc(s, 'miroslava_schedule', 'is_here', 'gp')) {
        scene.text('Mira\'s father tells you that she\'s not home. She said she was going to visit you.');
        scene.actions([
          { label: 'Go to your grandparents house', handler: (st: GameState) => {
    // TODO-QSP: gt $locat['A60_loc'], $locat['A60_arg']
  } },
        ]);
      } else {
        if (((s as any).locat ?? 0)?.['A60_loc'] === 'gadukino') {
          scene.text('Mira\'s father tells you that she\'s not home. She said she was going to take a walk.');
        } else {
          if (((s as any).locat ?? 0)?.['A60_loc'] === 'gad_church') {
            scene.text('Mira\'s father tells you that she\'s not home. She said she was going to the church.');
            scene.actions([
              { label: 'Go to the church', handler: (st: GameState) => {
    // TODO-QSP: gt $locat['A60_loc'], $locat['A60_arg']
  } },
            ]);
          } else {
            if (qspFunc(s, 'miroslava_schedule', 'is_here', 'forest_road')) {
              scene.text('Mira\'s father tells you that she\'s not home. She said she was going to take a walk along the forest.');
              scene.actions([
                { label: 'Go to the forest road', goto: ['gad_road', 'start'] },
              ]);
            } else {
              if (((s as any).locat ?? 0)?.['A60_loc'] === 'mitkabuh_group') {
                scene.text('Mira\'s father tells you that she\'s not home. She said she was going visit her friends.');
                scene.actions([
                  { label: 'Go to Mitka', goto: ['gad_road', 'start'] },
                ]);
              } else {
                if (qspFunc(s, 'miroslava_schedule', 'is_here', 'river')) {
                  scene.text('Mira\'s father tells you that she\'s not home. She said she was going to the river.');
                  scene.actions([
                    { label: 'Go to the river', handler: (st: GameState) => {
    // TODO-QSP: gt $locat['A60_loc'], $locat['A60_arg']
  } },
                  ]);
                } else {
                  if (qspFunc(s, 'miroslava_schedule', 'is_here', 'forest')) {
                    scene.text('Mira\'s father tells you that she\'s not home. She said she was going to the forest.');
                    scene.actions([
                      { label: 'Go to the forest', goto: ['gad_forest', 'forest_edge'] },
                    ]);
                  } else {
                    if (((s as any).locat ?? 0)?.['A60_loc'] === 'gad_field') {
                      scene.text('Mira\'s father tells you that she\'s not home. She said she was going watch the cows.');
                      scene.actions([
                        { label: 'Go to the field', goto: ['gad_field', 'field'] },
                      ]);
                    } else {
                      if (((s as any).locat ?? 0)?.['A60_loc'] === 'gad_prostitutes') {
                        scene.text('Mira\'s father tells you that she\'s not home. She left without telling him where she was going.');
                        if (((s as any).MiraVars ?? 0)?.['pimp'] === 1) {
                          scene.text('Mira is not home, but you know exactly where to find her. She has been working as your prostitute on the highway.');
                        } else {
                          if (((s as any).MiraVars ?? 0)?.['prostitute'] > 1) {
                            scene.text('Mira is not home, but you know exactly where to find her. You have seen her working as a prostitute on the highway.');
                          } else {
                            if (((s as any).MiraVars ?? 0)?.['prostitute'] === 1) {
                              scene.text('Mira is not home, but you think you know where to find her. Ever since granting your second wish, you have heard rumors that Mira has been earning money as a prostitute on the highway.');
                            } else {
                              scene.text('Mira is not home, and you have no idea where she might be. So maybe you should go look around town.');
                            }
                          }
                        }
                        if (((s as any).MiraVars ?? 0)?.['prostitute'] > 0) {
                          (s as any).minut = ((s as any).minut ?? 0) + (20);
                          // TODO-QSP: act 'Go to the highway': gt 'gad_prostitutes', 'start'
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
      scene.actions([
        { label: 'Go back to the village center', goto: ['gadukino', ''] },
      ]);
    }
  } },
    ]);
  }
  scene.actions([
    { label: 'Leave him be', goto: ['gad_miroslava_home', 'start'] },
  ]);
  scene.build();
}

export const mirafather: LocationDef = {
  name: 'mirafather',
  title: 'Mira\'s Father',
  region: 'other',
  description: ['You are passing Mira\'s house when you see Mira\'s father headed in your direction.'],
  enter: enter,
};
