import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterGeneralDescription(s: GameState, scene: SceneBuilder): void {
  if (((s as any).prostitute ?? 0)?.['customer_total'] > 9) {
    // TODO-QSP: 'A blowjob, anal oder vaginal scene can consist of up to three or only one small scene. Currently th...
    scene.text('The start and end scene (getting your money, leaving the car, talking to a regular, …) can either be shown or skipped automatically.');
    // TODO-QSP: ' - End scene will be '+iif(prostitute['skip_end'] = 0, '<a href="exec: prostitute[''skip_end''] = 1...
    // TODO-QSP: ' - Start scene will be '+iif(prostitute['skip_start'] = 0, '<a href="exec: prostitute[''skip_start'...
    if (((s as any).mc_inventory ?? 0)?.['normal_condoms'] < 1  &&  ((s as any).mc_inventory ?? 0)?.['equipped_condoms'] < 1  &&  (((s as any).prostitute_auto ?? 0)?.['norm_bj_condom'] + ((s as any).prostitute_auto ?? 0)?.['norm_vag_condom'] + ((s as any).prostitute_auto ?? 0)?.['norm_anal_condom'] + ((s as any).prostitute_auto ?? 0)?.['reg_vag_condom'] + ((s as any).prostitute_auto ?? 0)?.['reg_anal_condom'])) {
      scene.text('<b>You\'re out of condoms!</b>');
    }
    scene.text('<table><tr><td valign="top"><b>Behavior towards normal clients:</b>');
    // TODO-QSP: 'Negotiation: '+iif(prostitute_auto['normal'] = 1, '<a href="exec: prostitute_auto[''normal''] = 0 &...
    if (((s as any).prostitute_auto ?? 0)?.['normal'] === 1) {
      scene.text('Which acts do you automatically accept/decline?');
      // TODO-QSP: 'Blowjob: '+iif(prostitute_auto['norm_bj'] = 1, '<a href="exec: prostitute_auto[''norm_bj''] = 0 & g...
      // TODO-QSP: 'Vaginal: '+iif(prostitute_auto['norm_vag'] = 1, '<a href="exec: prostitute_auto[''norm_vag''] = 0 &...
      // TODO-QSP: 'Anal: '+iif(prostitute_auto['norm_anal'] = 1, '<a href="exec: prostitute_auto[''norm_anal''] = 0 & ...
      if (((s as any).prostitute_auto ?? 0)?.['norm_bj'] + ((s as any).prostitute_auto ?? 0)?.['norm_vag'] + ((s as any).prostitute_auto ?? 0)?.['norm_anal'] > 0) {
        scene.text('Do you insist on a condom?');
        if (((s as any).prostitute_auto ?? 0)?.['norm_bj'] === 1) {
          // TODO-QSP: '- Blowjob: '+iif(prostitute_auto['norm_bj_condom'] = 1, '<a href="exec: prostitute_auto[''norm_bj_c...
          // TODO-QSP: gt ''<<$loc>>'', ''work''">Yes</a>', '<a href="exec: prostitute_auto[''norm_bj_condom''] = 1
          // TODO-QSP: gt ''<<$loc>>'', ''work''">No</a>')
        }
        if (((s as any).prostitute_auto ?? 0)?.['norm_vag'] === 1) {
          // TODO-QSP: '- Vaginal: '+iif(prostitute_auto['norm_vag_condom'] = 1, '<a href="exec: prostitute_auto[''norm_vag...
          // TODO-QSP: gt ''<<$loc>>'', ''work''">Yes</a>', '<a href="exec: prostitute_auto[''norm_vag_condom''] = 1
          // TODO-QSP: gt ''<<$loc>>'', ''work''">No</a>')
        }
        if (((s as any).prostitute_auto ?? 0)?.['norm_anal'] === 1) {
          // TODO-QSP: '- Anal: '+iif(prostitute_auto['norm_anal_condom'] = 1, '<a href="exec: prostitute_auto[''norm_anal_...
          // TODO-QSP: gt ''<<$loc>>'', ''work''">Yes</a>', '<a href="exec: prostitute_auto[''norm_anal_condom''] = 1
          // TODO-QSP: gt ''<<$loc>>'', ''work''">No</a>')
        }
        if (((s as any).prostitute_auto ?? 0)?.['norm_bj_condom'] === 0  ||  ((s as any).prostitute_auto ?? 0)?.['norm_vag_condom'] === 0  ||  ((s as any).prostitute_auto ?? 0)?.['norm_anal_condom'] === 0) {
          scene.text('Do you allow him to cum inside you?');
          if (((s as any).prostitute_auto ?? 0)?.['norm_bj_condom'] === 0  &&  ((s as any).prostitute_auto ?? 0)?.['norm_bj'] === 1) {
            // TODO-QSP: '- Blowjob: '+iif(prostitute_auto['norm_bj_creampie'] = 1, '<a href="exec: prostitute_auto[''norm_bj...
            // TODO-QSP: gt ''<<$loc>>'', ''work''">Yes</a>', '<a href="exec: prostitute_auto[''norm_bj_creampie''] = 1
            // TODO-QSP: gt ''<<$loc>>'', ''work''">No</a>')
          }
          if (((s as any).prostitute_auto ?? 0)?.['norm_vag_condom'] === 0  &&  ((s as any).prostitute_auto ?? 0)?.['norm_vag'] === 1) {
            // TODO-QSP: '- Vaginal: '+iif(prostitute_auto['norm_vag_creampie'] = 1, '<a href="exec: prostitute_auto[''norm_v...
            // TODO-QSP: gt ''<<$loc>>'', ''work''">Yes</a>', '<a href="exec: prostitute_auto[''norm_vag_creampie''] = 1
            // TODO-QSP: gt ''<<$loc>>'', ''work''">No</a>')
          }
          if (((s as any).prostitute_auto ?? 0)?.['norm_anal_condom'] === 0  &&  ((s as any).prostitute_auto ?? 0)?.['norm_anal'] === 1) {
            // TODO-QSP: '- Anal: '+iif(prostitute_auto['norm_anal_creampie'] = 1, '<a href="exec: prostitute_auto[''norm_ana...
            // TODO-QSP: gt ''<<$loc>>'', ''work''">Yes</a>', '<a href="exec: prostitute_auto[''norm_anal_creampie''] = 1
            // TODO-QSP: gt ''<<$loc>>'', ''work''">No</a>')
          }
        }
      }
    }
    scene.text('</td><td></td><td valign="top"><b>Behavior towards regular clients:</b>');
    // TODO-QSP: 'Negotiation: '+iif(prostitute_auto['regular'] = 1, '<a href="exec: prostitute_auto[''regular''] = 0...
    if (((s as any).prostitute_auto ?? 0)?.['regular'] === 1) {
      scene.text('Do you insist on a condom?');
      // TODO-QSP: '- Vaginal: '+iif(prostitute_auto['reg_vag_condom'] = 1, '<a href="exec: prostitute_auto[''reg_vag_c...
      // TODO-QSP: '- Anal: '+iif(prostitute_auto['reg_anal_condom'] = 1, '<a href="exec: prostitute_auto[''reg_anal_co...
      if (((s as any).prostitute_auto ?? 0)?.['reg_anal_condom'] === 0  ||  ((s as any).prostitute_auto ?? 0)?.['reg_vag_condom'] === 0) {
        scene.text('Do you allow him to cum inside you?');
        if (((s as any).prostitute_auto ?? 0)?.['reg_vag_condom'] === 0) {
          // TODO-QSP: '- Vaginal: '+iif(prostitute_auto['reg_vag_creampie'] = 1, '<a href="exec: prostitute_auto[''reg_vag...
          // TODO-QSP: gt ''<<$loc>>'', ''work''">Yes</a>', '<a href="exec: prostitute_auto[''reg_vag_creampie''] = 1
          // TODO-QSP: gt ''<<$loc>>'', ''work''">No</a>')
        }
        if (((s as any).prostitute_auto ?? 0)?.['reg_anal_condom'] === 0) {
          // TODO-QSP: '- Anal: '+iif(prostitute_auto['reg_anal_creampie'] = 1, '<a href="exec: prostitute_auto[''reg_anal_...
          // TODO-QSP: gt ''<<$loc>>'', ''work''">Yes</a>', '<a href="exec: prostitute_auto[''reg_anal_creampie''] = 1
          // TODO-QSP: gt ''<<$loc>>'', ''work''">No</a>')
        }
      }
    }
    scene.text('</td></tr></table>');
  }
  scene.build();
}

function enterLookClient(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  if (((s as any).pcs_inhib ?? 0) < 60) {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
  }
  if (((s as any).prostitute ?? 0)?.['regular'] === 1) {
    // TODO-QSP: gt 'prostitution_car_negotiation', 'client_regular', 'look_client'
  } else {
    (s as any).prostitute['pity_counter'] = 0;
    scene.img('images/shared/prostitution/car/normal/negotiation/chat\'+rand(0, 1)+\'.mp4');
    scene.text('A car stops next to you. "Hey sweetie, are you looking for a good time?" You say to him.');
    if (((s as any).prostitute ?? 0)?.['rough'] === 0) {
      if (((s as any).prostitute ?? 0)?.['propose'] === 0  &&  ((s as any).prostitute_auto ?? 0)?.['normal'] === 0) {
        scene.actions([
          { label: 'Let him decide', goto: ['prostitution_car_negotiation', 'negotiation_start'] },
        ]);
      } else {
        scene.text('The man looks a little bit nervous. You approach the window in a sensual manner and try to make him feel more comfortable. "Just relax and let me take care of you."');
        scene.text('You lean into the car and chat with him about what he likes and dislikes.');
        if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)) {
          // TODO-QSP: iif(prostitute['dirty_anal_mod'] = 0, 'He hates', 'He admits that he loves')+' anal sex with a girl ...
        }
        if (((s as any).mesec ?? 0) > 0) {
          // TODO-QSP: iif(prostitute['mesec_mod'] = 0, 'He really doesn''t like', 'He tells you that he likes')+' to fuck ...
        }
        scene.text('You offer him…');
        if (Math.floor(Math.random() * 10) + 1 < 10) {
          scene.actions([
            { label: 'A blowjob', handler: (st: GameState) => {
    // TODO-QSP: $prostitute['client_scene'] = 'Blowjob'
  }, goto: ['prostitution_car_negotiation', 'negotiation_start'] },
            { label: 'Your pussy', handler: (st: GameState) => {
    // TODO-QSP: $prostitute['client_scene'] = 'Vaginal'
  }, goto: ['prostitution_car_negotiation', 'negotiation_start'] },
            { label: 'Your ass', handler: (st: GameState) => {
    // TODO-QSP: $prostitute['client_scene'] = 'Anal'
  }, goto: ['prostitution_car_negotiation', 'negotiation_start'] },
          ]);
        } else {
          scene.actions([
            { label: 'A blowjob', handler: (st: GameState) => {
    if (((s as any).prostitute ?? 0)?.['client_scene'] !== 'Blowjob') {
      (s as any).prostitute['propose'] = 2;
    }
  }, goto: ['prostitution_car_negotiation', 'negotiation_start'] },
            { label: 'Your pussy', handler: (st: GameState) => {
    if (((s as any).prostitute ?? 0)?.['client_scene'] !== 'Vaginal') {
      (s as any).prostitute['propose'] = 2;
    }
  }, goto: ['prostitution_car_negotiation', 'negotiation_start'] },
            { label: 'Your ass', handler: (st: GameState) => {
    if (((s as any).prostitute ?? 0)?.['client_scene'] !== 'Anal') {
      (s as any).prostitute['propose'] = 2;
    }
  }, goto: ['prostitution_car_negotiation', 'negotiation_start'] },
          ]);
        }
        scene.actions([
          { label: 'Negotiate with him', goto: ['prostitution_car_negotiation', 'negotiation_start'] },
        ]);
      }
    } else {
      scene.actions([{ label: 'Continue', goto: ['prostitution_car_negotiation', 'rough'] }]);
    }
    (s as any).prostitute['pity_counter'] = ((s as any).prostitute['pity_counter'] ?? 0) + (Math.floor(Math.random() * 5) + 4);
    scene.img('images/shared/prostitution/car/normal/negotiation/search.mp4');
    scene.text('<br>Some cars drive by, but nobody stops.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'work');
  } },
    ]);
  }
  scene.build();
}

function enterClientRegular(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/prostitution/car/regular/negotiation/arrival.mp4');
  scene.text('A car approaches and slows down as it comes nearer. You take a look at the driver and you recognize him, he\'s one of your regulars.');
  scene.actions([
    { label: 'Approach the car', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.img('images/shared/prostitution/car/regular/negotiation/approach.mp4');
    // TODO-QSP: dynamic text: "Hi <<$prostitute_names[$prostitution_location]>>. I was looking for you." He sa...
    scene.text(`"Hi ${((s as any).prostitute_names ?? 0)?.[String((s as any).prostitution_location ?? 0)]}. I was looking for you." He says in a good mood clearly happy to see you.`);
    scene.text('"Hey sweetie, good to see you again." You say to him with a smile on your lips.');
    scene.actions([
      { label: 'Lean inside the car', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.img('images/shared/prostitution/car/regular/negotiation/chat\'+rand(0, 1)+\'.mp4');
    // TODO-QSP: '"I was hoping that you would work today," he tells you and you give him a smile. You remember that ...
    if ((((s as any).mc_inventory ?? 0)?.['normal_condoms'] > 0  ||  ((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0)  ||  (((s as any).mc_inventory ?? 0)?.['normal_condoms'] < 0  &&  ((s as any).mc_inventory ?? 0)?.['equipped_condoms'] < 0  &&  ((s as any).prostitute ?? 0)?.['std_mod'] === 0)) {
      scene.text('You tell him that…');
      qspCall(s, 'willpower', 'prostitution', 'resist', 'easy');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: '… you\'re not in the mood [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: '… you\'re not in the mood', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
  }, goto: ['prostitution_car_negotiation', 'client_regular_fail'] },
        ]);
      }
      (s as any).minut = ((s as any).minut ?? 0) + 2;
      qspCall(s, 'stat', '');
      scene.img('images/shared/prostitution/car/regular/negotiation/chat\'+rand(0, 1)+\'.mp4');
      // TODO-QSP: dynamic text: "So, I guess you want to fuck my '+iif($prostitute['client_scene'] = 'Vaginal', ...
      scene.text('"So, I guess you want to fuck my \'+iif($prostitute[\'client_scene\'] = \'Vaginal\', \'pussy\', \'ass\')+\'? You seem to love that the last time.');
      scene.text('He grins. "You remembered?" He asks you. "Sure," you answer with a convincing smile. "I\'ll always remember what my most loyal customers like."');
      scene.text('You also remember that with him you…');
      if (((s as any).prostitute ?? 0)?.['std_mod'] === 0  &&  ((s as any).prostitute_auto ?? 0)?.['regular'] === 0) {
        scene.actions([
          { label: 'Always use a condom', handler: (st: GameState) => {
    // TODO-QSP: '… always use a condom.'+iif((mc_inventory['normal_condoms'] < 1 and mc_inventory['equipped_condoms'...
    scene.actions([
      { label: 'Don\'t make an exception', handler: (st: GameState) => {
    qspCall(s, 'prostitution_functions', 'payment', 'condom_yes', 'inside_no');
    if (((s as any).mc_inventory ?? 0)?.['normal_condoms'] > 0  ||  ((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0) {
      // TODO-QSP: dynamic text: You pull out a condom out of your '+iif(bag = 1, 'purse', 'pocket')+' and he nod...
      scene.text(`You pull out a condom out of your '+iif(bag = 1, 'purse', 'pocket')+' and he nods. "No problem ${((s as any).prostitute_names ?? 0)?.[String((s as any).prostitution_location ?? 0)]}, better safe than sorry."`);
      scene.actions([
        { label: 'Continue', goto: ['prostitution_car_negotiation', 'client_regular_success'] },
      ]);
    } else {
      qspCall(s, 'stat', '');
      // TODO-QSP: dynamic text: "I know you really like to fuck my '+iif($prostitute['client_scene'] = 'Vaginal'...
      scene.text('"I know you really like to fuck my \'+iif($prostitute[\'client_scene\'] = \'Vaginal\', \'pussy\', \'ass\')+\' but I don\'t have any condoms."');
      scene.text('"Shit? Really?" He looks disheartened.');
      if (qspFunc(s, 'money', 'can_afford', 60)) {
        scene.text('"Don\'t worry, honey. There is a condom dispenser at the restroom. If you give me a second, I\'ll be right back."');
        scene.text('He nods and you go and buy a condom.');
        scene.text('It takes you more than a second, but when you return you show him the condom.');
        scene.text('"Perfect, you nearly gave me a heart attack." You grin. "I mean it," he says half serious, half joking. "I can\'t go a week without fucking you."');
        (s as any).minut = ((s as any).minut ?? 0) + 2;
        qspCall(s, 'money', 'pay', 60);
        (s as any).mc_inventory['normal_condoms'] = 1;
        qspCall(s, 'stat', '');
        scene.actions([
          { label: 'Continue', goto: ['prostitution_car_negotiation', 'client_regular_success'] },
        ]);
      } else {
        // TODO-QSP: dynamic text: He sighs and after a second he shrugs. "Fine," he looks at you and reassures you...
        scene.text(`He sighs and after a second he shrugs. "Fine," he looks at you and reassures you. "Don't worry about it ${((s as any).prostitute_names ?? 0)?.[String((s as any).prostitution_location ?? 0)]}, you're always worth waiting for."`);
        scene.actions([
          { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'work');
  } },
        ]);
      }
    }
  } },
      { label: 'Make an exception', handler: (st: GameState) => {
    scene.text('"You know what, how about we do it without a condom today?" You ask and quickly add: "But you have to pay for that."');
    scene.text('He looks at you surprised but pleased. "I can fuck you raw? Really?" You nod. "Wow, nice. Sure let\'s do it like god intended."');
    scene.text('You smile and tell him that he…');
    scene.actions([
      { label: 'Can\'t cum inside you', handler: (st: GameState) => {
    qspCall(s, 'prostitution_functions', 'payment', 'condom_no', 'inside_no');
    scene.text('… can\'t cum inside you. "Yeah, raw is the best way to fuck, but don\'t cum inside me, OK? I\'ll suck you off at the end."');
    scene.text('"Sure thing, babe."');
    scene.actions([
      { label: 'Continue', goto: ['prostitution_car_negotiation', 'client_regular_success'] },
    ]);
  } },
      { label: 'Can cum inside you', handler: (st: GameState) => {
    qspCall(s, 'prostitution_functions', 'payment', 'condom_no', 'inside_yes');
    scene.text('… can cum inside you. "And don\'t be afraid to cum inside me if you want and pay for it."');
    // TODO-QSP: dynamic text: "Of course I'll pay for it. You're the best, <<$prostitute_names[$prostitution_l...
    scene.text(`"Of course I'll pay for it. You're the best, ${((s as any).prostitute_names ?? 0)?.[String((s as any).prostitution_location ?? 0)]}."`);
    scene.actions([
      { label: 'Continue', goto: ['prostitution_car_negotiation', 'client_regular_success'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
          { label: 'Never use a condom', handler: (st: GameState) => {
    scene.text('… never use a condom. "You want to fuck me raw as always?"');
    // TODO-QSP: dynamic text: He nods. "Of course, it just isn't the same with a condom. It's really great tha...
    scene.text(`He nods. "Of course, it just isn't the same with a condom. It's really great that you do that, ${((s as any).prostitute_names ?? 0)?.[String((s as any).prostitution_location ?? 0)]}. You know that, right? There aren't many girls your age that do it raw."`);
    scene.text('You smile and tell him that he…');
    scene.actions([
      { label: 'Can\'t cum inside you', handler: (st: GameState) => {
    qspCall(s, 'prostitution_functions', 'payment', 'condom_no', 'inside_no');
    scene.text('… can\'t cum inside you. "Yeah, raw is the best way to fuck, but remember don\'t cum inside me. I\'ll suck you off at the end."');
    scene.text('He nods. "Sure thing, babe."');
    scene.actions([
      { label: 'Continue', goto: ['prostitution_car_negotiation', 'client_regular_success'] },
    ]);
  } },
      { label: 'Can cum inside you', handler: (st: GameState) => {
    qspCall(s, 'prostitution_functions', 'payment', 'condom_no', 'inside_yes');
    scene.text('… can cum inside you. "Yeah, raw is the best way to fuck and remember don\'t be afraid to cum anywhere you want."');
    // TODO-QSP: dynamic text: "You're the best whore in the whole area, <<$prostitute_names[$prostitution_loca...
    scene.text(`"You're the best whore in the whole area, ${((s as any).prostitute_names ?? 0)?.[String((s as any).prostitution_location ?? 0)]}."`);
    scene.actions([
      { label: 'Continue', goto: ['prostitution_car_negotiation', 'client_regular_success'] },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        if ((((s as any).prostitute_auto ?? 0)?.['reg_vag_condom'] === 1  &&  ((s as any).prostitute ?? 0)?.['client_scene'] === 'Vaginal')  ||  (((s as any).prostitute_auto ?? 0)?.['reg_anal_condom'] === 1  &&  ((s as any).prostitute ?? 0)?.['client_scene'] === 'Anal')) {
          if (((s as any).mc_inventory ?? 0)?.['normal_condoms'] < 1) {
            (s as any).mc_inventory['normal_condoms'] = 1;
            qspCall(s, 'money', 'pay', 60);
          }
        } else {
          if ((((s as any).prostitute_auto ?? 0)?.['reg_vag_creampie'] === 1  &&  ((s as any).prostitute ?? 0)?.['client_scene'] === 'Vaginal')  ||  (((s as any).prostitute_auto ?? 0)?.['reg_anal_creampie'] === 1  &&  ((s as any).prostitute ?? 0)?.['client_scene'] === 'Anal')) {
          }
        }
        qspCall(s, 'prostitution_functions', 'payment', (((s as any).prostitute_client_condom ?? 0) === 'Yes') ? ('condom_yes') : ('condom_no'), (((s as any).prostitute_client_cumshot ?? 0) === 'Inside') ? ('inside_yes') : ('inside_no'));
        scene.actions([{ label: 'Continue', goto: ['prostitution_car_negotiation', 'client_regular_success'] }]);
        qspCall(s, 'prostitution_functions', 'payment', 'condom_yes', 'inside_no');
        scene.text('… should always use a condom. He was always nice, never mistreated you and without a condom he would surely catch your STD.');
        scene.actions([
          { label: 'Continue', goto: ['prostitution_car_negotiation', 'client_regular_success'] },
        ]);
      }
      scene.actions([
        { label: '… you guess he wants to fuck your  [+iif($prostitute[\'client_scene\'] = \'Vagin...]' }, // TODO-QSP: empty action body
      ]);
    }
    scene.text('You remember your STD, how he never mistreated you and also your lack of condoms. So, you tell him that…');
    scene.actions([
      { label: '… you\'re not in the mood', goto: ['prostitution_car_negotiation', 'client_regular_fail'] },
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
    case 'general_description':
      enterGeneralDescription(s, scene);
      break;
    case 'look_client':
      enterLookClient(s, scene);
      break;
    case 'client_regular':
      enterClientRegular(s, scene);
      break;
    default:
      enterGeneralDescription(s, scene);
      break;
  }
}

export const prostitution_car_negotiation: LocationDef = {
  name: 'prostitution_car_negotiation',
  title: 'The start and end scene (getting your money, leaving the car',
  region: 'other',
  description: ['The start and end scene (getting your money, leaving the car, talking to a regular, …) can either be shown or skipped automatically.'],
  enter: enter,
};
