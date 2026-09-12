import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

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
        }
        if (((s as any).prostitute_auto ?? 0)?.['norm_vag'] === 1) {
          // TODO-QSP: '- Vaginal: '+iif(prostitute_auto['norm_vag_condom'] = 1, '<a href="exec: prostitute_auto[''norm_vag...
        }
        if (((s as any).prostitute_auto ?? 0)?.['norm_anal'] === 1) {
          // TODO-QSP: '- Anal: '+iif(prostitute_auto['norm_anal_condom'] = 1, '<a href="exec: prostitute_auto[''norm_anal_...
        }
        if (((s as any).prostitute_auto ?? 0)?.['norm_bj_condom'] === 0  ||  ((s as any).prostitute_auto ?? 0)?.['norm_vag_condom'] === 0  ||  ((s as any).prostitute_auto ?? 0)?.['norm_anal_condom'] === 0) {
          scene.text('Do you allow him to cum inside you?');
          if (((s as any).prostitute_auto ?? 0)?.['norm_bj_condom'] === 0  &&  ((s as any).prostitute_auto ?? 0)?.['norm_bj'] === 1) {
            // TODO-QSP: '- Blowjob: '+iif(prostitute_auto['norm_bj_creampie'] = 1, '<a href="exec: prostitute_auto[''norm_bj...
          }
          if (((s as any).prostitute_auto ?? 0)?.['norm_vag_condom'] === 0  &&  ((s as any).prostitute_auto ?? 0)?.['norm_vag'] === 1) {
            // TODO-QSP: '- Vaginal: '+iif(prostitute_auto['norm_vag_creampie'] = 1, '<a href="exec: prostitute_auto[''norm_v...
          }
          if (((s as any).prostitute_auto ?? 0)?.['norm_anal_condom'] === 0  &&  ((s as any).prostitute_auto ?? 0)?.['norm_anal'] === 1) {
            // TODO-QSP: '- Anal: '+iif(prostitute_auto['norm_anal_creampie'] = 1, '<a href="exec: prostitute_auto[''norm_ana...
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
        }
        if (((s as any).prostitute_auto ?? 0)?.['reg_anal_condom'] === 0) {
          // TODO-QSP: '- Anal: '+iif(prostitute_auto['reg_anal_creampie'] = 1, '<a href="exec: prostitute_auto[''reg_anal_...
        }
      }
    }
    scene.text('</td></tr></table>');
  }
  // TODO-QSP: end
  scene.build();
}

function enterLookClient(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  if (((s as any).pcs_inhib ?? 0) < 60) {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
  }
  if (((s as any).prostitute ?? 0)?.['regular'] === 1) {
    scene.actions([{ label: 'Continue', goto: ['prostitution_car_negotiation', 'client_regular', '\'look_client\''] }]);
  } else {
    if (((s as any).prostitute ?? 0)?.['client_chance'] > 100  &&  ((s as any).prostitute ?? 0)?.['regular'] === 0) {
      if (!(s as any).prostitute) (s as any).prostitute = {}; (s as any).prostitute['pity_counter'] = 0;
      scene.img('images/shared/prostitution/car/normal/negotiation/chat\'+rand(0, 1)+\'.mp4');
      scene.text('A car stops next to you. "Hey sweetie, are you looking for a good time?" You say to him.');
      if (((s as any).prostitute ?? 0)?.['rough'] === 0) {
        if (((s as any).prostitute ?? 0)?.['propose'] === 0  &&  ((s as any).prostitute_auto ?? 0)?.['normal'] === 0) {
          scene.actions([
            { label: 'Let him decide', goto: ['prostitution_car_negotiation', 'negotiation_start'] },
          ]);
        } else {
          if (((s as any).prostitute_auto ?? 0)?.['normal'] === 1) {
            scene.actions([
              { label: 'Negotiate with him', goto: ['prostitution_car_negotiation', 'negotiation_start'] },
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
            if ((Math.floor(Math.random() * 10) + 1) < 10) {
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
      if (!(s as any).prostitute) (s as any).prostitute = {}; (s as any).prostitute['propose'] = 2;
    }
  }, goto: ['prostitution_car_negotiation', 'negotiation_start'] },
                { label: 'Your pussy', handler: (st: GameState) => {
    if (((s as any).prostitute ?? 0)?.['client_scene'] !== 'Vaginal') {
      if (!(s as any).prostitute) (s as any).prostitute = {}; (s as any).prostitute['propose'] = 2;
    }
  }, goto: ['prostitution_car_negotiation', 'negotiation_start'] },
                { label: 'Your ass', handler: (st: GameState) => {
    if (((s as any).prostitute ?? 0)?.['client_scene'] !== 'Anal') {
      if (!(s as any).prostitute) (s as any).prostitute = {}; (s as any).prostitute['propose'] = 2;
    }
  }, goto: ['prostitution_car_negotiation', 'negotiation_start'] },
              ]);
            }
          }
        }
      } else {
        scene.actions([{ label: 'Continue', goto: ['prostitution_car_negotiation', 'rough'] }]);
      }
    } else {
      if (!(s as any).prostitute) (s as any).prostitute = {}; (s as any).prostitute['pity_counter'] = ((s as any).prostitute['pity_counter'] ?? 0) + (Math.floor(Math.random() * 5) + 4);
      scene.img('images/shared/prostitution/car/normal/negotiation/search.mp4');
      scene.text('<br>Some cars drive by, but nobody stops.');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'work');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterClientRegular(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/prostitution/car/regular/negotiation/arrival.mp4');
  scene.text('A car approaches and slows down as it comes nearer. You take a look at the driver and you recognize him, he\'s one of your regulars.');
  // TODO-QSP: end
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
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: '… you\'re not in the mood [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
  }, goto: ['prostitution_car_negotiation', 'client_regular_fail'] },
        ]);
      }
      scene.actions([
        { label: '… you guess he wants to fuck your  [+iif($prostitute[\'client_scene\'] = \'Vagin...]', handler: (st: GameState) => {
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
        if (!(s as any).mc_inventory) (s as any).mc_inventory = {}; (s as any).mc_inventory['normal_condoms'] = 1;
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
      if (((s as any).prostitute ?? 0)?.['std_mod'] === 0  &&  ((s as any).prostitute_auto ?? 0)?.['regular'] === 1) {
        if ((((s as any).prostitute_auto ?? 0)?.['reg_vag_condom'] === 1  &&  ((s as any).prostitute ?? 0)?.['client_scene'] === 'Vaginal')  ||  (((s as any).prostitute_auto ?? 0)?.['reg_anal_condom'] === 1  &&  ((s as any).prostitute ?? 0)?.['client_scene'] === 'Anal')) {
          if (((s as any).mc_inventory ?? 0)?.['normal_condoms'] < 1) {
            if (!(s as any).mc_inventory) (s as any).mc_inventory = {}; (s as any).mc_inventory['normal_condoms'] = 1;
            qspCall(s, 'money', 'pay', 60);
          }
        } else {
          if ((((s as any).prostitute_auto ?? 0)?.['reg_vag_creampie'] === 1  &&  ((s as any).prostitute ?? 0)?.['client_scene'] === 'Vaginal')  ||  (((s as any).prostitute_auto ?? 0)?.['reg_anal_creampie'] === 1  &&  ((s as any).prostitute ?? 0)?.['client_scene'] === 'Anal')) {
          }
        }
        qspCall(s, 'prostitution_functions', 'payment', ((((s as any).prostitute_client_condom ?? 0) === 'Yes') ? ('condom_yes') : ('condom_no')), ((((s as any).prostitute_client_cumshot ?? 0) === 'Inside') ? ('inside_yes') : ('inside_no')));
        scene.actions([{ label: 'Continue', goto: ['prostitution_car_negotiation', 'client_regular_success'] }]);
      } else {
        qspCall(s, 'prostitution_functions', 'payment', 'condom_yes', 'inside_no');
        scene.text('… should always use a condom. He was always nice, never mistreated you and without a condom he would surely catch your STD.');
        scene.actions([
          { label: 'Continue', goto: ['prostitution_car_negotiation', 'client_regular_success'] },
        ]);
      }
    }
  } },
      ]);
    } else {
      scene.text('You remember your STD, how he never mistreated you and also your lack of condoms. So, you tell him that…');
      scene.actions([
        { label: '… you\'re not in the mood', goto: ['prostitution_car_negotiation', 'client_regular_fail'] },
      ]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterClientRegularFail(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/shared/prostitution/car/regular/negotiation/chat\'+rand(0, 1)+\'.mp4');
  // TODO-QSP: dynamic text: "I'm sorry sweetie, I know you really like to fuck my '+iif($prostitute['client_...
  scene.text('"I\'m sorry sweetie, I know you really like to fuck my \'+iif($prostitute[\'client_scene\'] = \'Vaginal\', \'pussy\', \'ass\')+\' but I\'m not up for that today."');
  // TODO-QSP: dynamic text: "Shit? Really?" You nod and he looks disheartened. After a moment he shrugs and ...
  scene.text(`"Shit? Really?" You nod and he looks disheartened. After a moment he shrugs and throws you a grin. "Don't worry about it ${((s as any).prostitute_names ?? 0)?.[String((s as any).prostitution_location ?? 0)]}, it's fine, you're always worth the wait."`);
  // TODO-QSP: '"Thanks," you say and step away from the car.'+iif(prostitute['std_mod'] = 1 and mc_inventory['norm...
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'work');
  } },
  ]);
  scene.build();
}

function enterClientRegularSuccess(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  if (!(s as any).prostitute) (s as any).prostitute = {}; (s as any).prostitute['regular_timer'] = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/shared/prostitution/car/regular/negotiation/drive.mp4');
  scene.text('You get into his car and he takes you to your regular spot at the end of the parking lot.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 10) + 1) < 4  &&  ((s as any).prostitute ?? 0)?.['skip_start'] === 0) {
      scene.img('images/shared/prostitution/car/regular/negotiation/money_0a.mp4');
      scene.text('You don\'t want to say anything about the money, it always dampens the mood if you have to remind your clients to pay upfront. But with him you always have to say something. The instant he stops the car he reaches out for your top and touches your breasts.');
      scene.text('"Show them to me," he murmurs and together you free your tits from your top. "I love those. They\'re perfect."');
      scene.text('"Thanks," you say as he grabs your right boob and squeezes it with a look on his face of a teenage boy that sees one of those for the first time.');
      scene.text('You laugh and smile, but also…');
      qspCall(s, 'arousal', 'breasts', 2);
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Remind him to pay you', handler: (st: GameState) => {
    scene.img('images/shared/prostitution/car/regular/negotiation/money_0b.mp4');
    scene.text('"You have to pay me first," you tell him quietly, but he doesn\'t listen. Instead he eagerly puts one of your nipples inside your mouth and starts to suck on them. "Please, you know you have to pay first." You remind him again.');
    scene.text('"Fine," he sighs and jokes: "But they taste so good," stretching the \'so\' ridiculously long.');
    scene.text('You laugh and shake your head. "Come on," you grin when he doesn\'t stop and push him away.');
    scene.text('"OK, Ok, I\'ll get your money."');
    // TODO-QSP: dynamic text: "Happy?" He asks as you take the <<$func('money', 'string_profit', prostitute['p...
    scene.text(`"Happy?" He asks as you take the ${qspFunc(s, 'money', 'string_profit', ((s as any).prostitute ?? 0)?.['payment'])}.`);
    scene.text('"Yes, now let me make you happy," you reply.');
    qspCall(s, 'arousal', 'breasts', 2);
    if (!(s as any).prostitute) (s as any).prostitute = {}; (s as any).prostitute['earnings_day'] = ((s as any).prostitute['earnings_day'] ?? 0) + (((s as any).prostitute ?? 0)?.['payment']);
    if (((s as any).prostitute ?? 0)?.['payment_method'] === 1) {
      // TODO-QSP: gs 'money', 'earn', prostitute['payment'], 'cash'
    }
    if (!(s as any).prostitute) (s as any).prostitute = {}; (s as any).prostitute['payment'] = 0;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['prostitution_car_sex', 'regular_start'] },
    ]);
  } },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 2;
      scene.img('images/shared/prostitution/car/regular/negotiation/money_1.mp4');
      scene.text('You don\'t want to say anything about the money, it always dampens the mood if you have to remind your clients to pay upfront. But with him you don\'t have to. The instant he stops the car, he pulls out his wallet and hands you the money. He even makes sure that you see that everything is there without you having to count it yourself.');
      // TODO-QSP: dynamic text: "Thanks," you say and take the <<$func('money', 'string_profit', prostitute['pay...
      scene.text(`"Thanks," you say and take the ${qspFunc(s, 'money', 'string_profit', ((s as any).prostitute ?? 0)?.['payment'])}.`);
      scene.text('Now it\'s for you to keep up your end of the bargain.');
      if (!(s as any).prostitute) (s as any).prostitute = {}; (s as any).prostitute['earnings_day'] = ((s as any).prostitute['earnings_day'] ?? 0) + (((s as any).prostitute ?? 0)?.['payment']);
      if (((s as any).prostitute ?? 0)?.['payment_method'] === 1) {
        // TODO-QSP: gs 'money', 'earn', prostitute['payment'], 'cash'
      }
      if (!(s as any).prostitute) (s as any).prostitute = {}; (s as any).prostitute['payment'] = 0;
      qspCall(s, 'stat', '');
      if (((s as any).prostitute ?? 0)?.['skip_start'] === 1) {
        scene.actions([{ label: 'Continue', goto: ['prostitution_car_sex', 'regular_start'] }]);
      } else {
        scene.actions([
          { label: 'Get undressed', goto: ['prostitution_car_sex', 'regular_start'] },
        ]);
      }
    }
  } },
  ]);
  scene.build();
}

function enterNegotiationStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  if (((s as any).prostitute_auto ?? 0)?.['normal'] === 1) {
    scene.actions([{ label: 'Continue', goto: ['prostitution_car_negotiation', 'negotiation_automatic'] }]);
  }
  scene.img('images/shared/prostitution/car/normal/negotiation/chat\'+rand(0, 1)+\'.mp4');
  // TODO-QSP: iif(prostitute['propose'] = 0, 'You lean into his car and chat with him about the price and what he ...
  scene.text('You are negotiating with the client:');
  // TODO-QSP: dynamic text: Sex: <<$prostitute['client_scene']>>
  scene.text(`Sex: ${((s as any).prostitute ?? 0)?.['client_scene']}`);
  qspCall(s, 'prostitution_functions', 'payment', 'condom_yes', 'not_discussed');
  // TODO-QSP: dynamic text: Payment with condom: <<$func('money', 'string_profit', prostitute['payment'])>>
  scene.text(`Payment with condom: ${qspFunc(s, 'money', 'string_profit', ((s as any).prostitute ?? 0)?.['payment'])}`);
  if (((s as any).prostitute ?? 0)?.['std_mod'] === 0) {
    qspCall(s, 'prostitution_functions', 'payment', 'condom_no', 'not_discussed');
    // TODO-QSP: dynamic text: Payment without condom: <<$func('money', 'string_profit', prostitute['payment'])...
    scene.text(`Payment without condom: ${qspFunc(s, 'money', 'string_profit', ((s as any).prostitute ?? 0)?.['payment'])}`);
  }
  if (((s as any).prostitute ?? 0)?.['propose'] === 0) {
    if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)) {
      // TODO-QSP: iif(prostitute['dirty_anal_mod'] = 0, 'He hates', 'He admits that he loves')+' anal sex with a girl ...
    }
    if (((s as any).mesec ?? 0) > 0) {
      // TODO-QSP: iif(prostitute['mesec_mod'] = 0, 'He doesn''t like', 'He tells you that he likes')+' to fuck girls t...
    }
  }
  if ((((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0  ||  ((s as any).mc_inventory ?? 0)?.['normal_condoms'] > 0)  &&  (((s as any).prostitute ?? 0)?.['std_mod'] === 1  ||  ((s as any).prostitute ?? 0)?.['propose'] === 2)) {
    qspCall(s, 'willpower', 'prostitution', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Decline and move away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Decline and move away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    dynamicGoto(st, 'loc');
  } },
      ]);
    }
  } else {
    if (((s as any).prostitute ?? 0)?.['propose'] === 0  &&  ((s as any).prostitute ?? 0)?.['std_mod'] === 0) {
      qspCall(s, 'willpower', 'prostitution', 'resist');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Decline and move away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Decline and move away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'prostitution', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    dynamicGoto(st, 'loc');
  } },
        ]);
      }
      qspCall(s, 'willpower', 'prostitution', 'resist', 'easy');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        if (((s as any).prostitute ?? 0)?.['client_scene'] !== 'Blowjob') {
          // TODO-QSP: act 'Decline and offer him a blowjob instead' + $func('willpower', 'get_willcost_string'): $noWillpo...
        }
        if (((s as any).prostitute ?? 0)?.['client_scene'] !== 'Anal') {
          // TODO-QSP: act 'Decline and offer him your ass instead' + $func('willpower', 'get_willcost_string'): $noWillpow...
        }
        if (((s as any).prostitute ?? 0)?.['client_scene'] !== 'Vaginal') {
          // TODO-QSP: act 'Decline and offer him your pussy instead' + $func('willpower', 'get_willcost_string'): $noWillp...
        }
      } else {
        if ((Math.floor(Math.random() * 10) + 1) < 9) {
          if (((s as any).prostitute ?? 0)?.['client_scene'] !== 'Blowjob') {
            // TODO-QSP: act 'Decline and offer him a blowjob instead' + $func('willpower', 'get_willcost_string'): prostitut...
            qspCall(s, 'willpower', 'pay', 'resist');
            if (!(s as any).prostitute) (s as any).prostitute = {}; (s as any).prostitute['client_scene'] = 'Blowjob';
            if (!(s as any).prostitute) (s as any).prostitute = {}; (s as any).prostitute['propose'] = 1;
            scene.actions([{ label: 'Continue', goto: ['prostitution_car_negotiation', 'negotiation_start'] }]);
          }
          if (((s as any).prostitute ?? 0)?.['client_scene'] !== 'Anal') {
            // TODO-QSP: act 'Decline and offer him your ass instead' + $func('willpower', 'get_willcost_string'): prostitute...
            qspCall(s, 'willpower', 'pay', 'resist');
            if (!(s as any).prostitute) (s as any).prostitute = {}; (s as any).prostitute['client_scene'] = 'Anal';
            if (!(s as any).prostitute) (s as any).prostitute = {}; (s as any).prostitute['propose'] = 1;
            scene.actions([{ label: 'Continue', goto: ['prostitution_car_negotiation', 'negotiation_start'] }]);
          }
          if (((s as any).prostitute ?? 0)?.['client_scene'] !== 'Vaginal') {
            // TODO-QSP: act 'Decline and offer him your pussy instead' + $func('willpower', 'get_willcost_string'): prostitu...
            qspCall(s, 'willpower', 'pay', 'resist');
            if (!(s as any).prostitute) (s as any).prostitute = {}; (s as any).prostitute['client_scene'] = 'Vaginal';
            if (!(s as any).prostitute) (s as any).prostitute = {}; (s as any).prostitute['propose'] = 1;
            scene.actions([{ label: 'Continue', goto: ['prostitution_car_negotiation', 'negotiation_start'] }]);
          }
        } else {
          if (((s as any).prostitute ?? 0)?.['client_scene'] !== 'Blowjob') {
            // TODO-QSP: act 'Decline and offer him a blowjob instead' + $func('willpower', 'get_willcost_string'): gs 'willp...
            scene.actions([{ label: 'Continue', goto: ['prostitution_car_negotiation', 'negotiation_fail'] }]);
          }
          if (((s as any).prostitute ?? 0)?.['client_scene'] !== 'Anal') {
            // TODO-QSP: act 'Decline and offer him your ass instead' + $func('willpower', 'get_willcost_string'): gs 'willpo...
            scene.actions([{ label: 'Continue', goto: ['prostitution_car_negotiation', 'negotiation_fail'] }]);
          }
          if (((s as any).prostitute ?? 0)?.['client_scene'] !== 'Vaginal') {
            // TODO-QSP: act 'Decline and offer him your pussy instead' + $func('willpower', 'get_willcost_string'): gs 'will...
            scene.actions([{ label: 'Continue', goto: ['prostitution_car_negotiation', 'negotiation_fail'] }]);
          }
        }
      }
    }
  }
  if ((((s as any).mc_inventory ?? 0)?.['normal_condoms'] > 0  ||  ((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0)  &&  ((s as any).prostitute ?? 0)?.['std_mod'] === 0) {
    scene.actions([
      { label: 'Insist on a condom', handler: (st: GameState) => {
    // TODO-QSP: $prostitute_client_condom = 'Yes'
  }, goto: ['prostitution_car_negotiation', 'negotiation_condom_yes'] },
    ]);
  } else {
    if ((((s as any).mc_inventory ?? 0)?.['normal_condoms'] > 0  ||  ((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0)  &&  ((s as any).prostitute ?? 0)?.['std_mod'] === 1) {
      scene.actions([
        { label: 'Accept and use a condom', handler: (st: GameState) => {
    // TODO-QSP: $prostitute_client_condom = 'Yes'
  }, goto: ['prostitution_car_negotiation', 'negotiation_condom_yes'] },
      ]);
    }
  }
  if (((s as any).prostitute ?? 0)?.['std_mod'] === 0) {
    scene.actions([
      { label: 'Don\'t insist on a condom', handler: (st: GameState) => {
    // TODO-QSP: $prostitute_client_condom = 'No'
  }, goto: ['prostitution_car_negotiation', 'negotiation_condom_no'] },
    ]);
  } else {
    if (((s as any).mc_inventory ?? 0)?.['normal_condoms'] < 0  &&  ((s as any).mc_inventory ?? 0)?.['equipped_condoms'] < 0  &&  ((s as any).prostitute ?? 0)?.['std_mod'] === 1) {
      scene.actions([
        { label: 'Tell him you don\'t have a condom', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 10) + 1) < 9) {
      scene.actions([{ label: 'Continue', goto: ['prostitution_car_negotiation', 'negotiation_fail'] }]);
    } else {
      if (!(s as any).prostitute) (s as any).prostitute = {}; (s as any).prostitute['client_scene'] = 'Blowjob';
      // TODO-QSP: 'After a moment he reluctantly accepts doing it without a condom'+iif($prostitute['client_scene'] = ...
      // TODO-QSP: dynamic text: Sex: <<$prostitute['client_scene']>>
      scene.text(`Sex: ${((s as any).prostitute ?? 0)?.['client_scene']}`);
      qspCall(s, 'prostitution_functions', 'payment', 'condom_no', 'not_discussed');
      // TODO-QSP: dynamic text: New payment: <<$func('money', 'string_profit', prostitute['payment'])>>
      scene.text(`New payment: ${qspFunc(s, 'money', 'string_profit', ((s as any).prostitute ?? 0)?.['payment'])}`);
      qspCall(s, 'prostitution_functions', 'will_unprotected', 'resist');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Decline and move away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Decline and move away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    dynamicGoto(st, 'loc');
  } },
        ]);
      }
      scene.actions([
        { label: 'Accept', handler: (st: GameState) => {
    // TODO-QSP: $prostitute_client_condom = 'No'
  }, goto: ['prostitution_car_negotiation', 'negotiation_condom_no'] },
      ]);
    }
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterNegotiationCondomYes(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/shared/prostitution/car/normal/negotiation/chat\'+rand(0, 1)+\'.mp4');
  qspCall(s, 'prostitution_functions', 'payment', 'condom_yes', 'Outside or Condom');
  scene.text('You are negotiating with your client:');
  // TODO-QSP: dynamic text: Sex: <<$prostitute['client_scene']>>
  scene.text(`Sex: ${((s as any).prostitute ?? 0)?.['client_scene']}`);
  // TODO-QSP: dynamic text: Payment: <<$func('money', 'string_profit', prostitute['payment'])>>
  scene.text(`Payment: ${qspFunc(s, 'money', 'string_profit', ((s as any).prostitute ?? 0)?.['payment'])}`);
  // TODO-QSP: dynamic text: Condom: <<$prostitute_client_condom>>
  scene.text(`Condom: ${((s as any).prostitute_client_condom ?? 0)}`);
  if (((s as any).prostitute ?? 0)?.['std_mod'] === 1  ||  (Math.floor(Math.random() * 10) + 1) < 7  ||  (((s as any).prostitute ?? 0)?.['client_scene'] === 'Vaginal'  &&  ((s as any).mesec ?? 0) > 0  &&  ((s as any).prostitute ?? 0)?.['mesec_mod'] === 0)  ||  (((s as any).prostitute ?? 0)?.['client_scene'] === 'Anal'  &&  ((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).prostitute ?? 0)?.['dirty_anal_mod'] === 0)) {
    if (((s as any).prostitute ?? 0)?.['std_mod'] === 1) {
      // TODO-QSP: dynamic text: "Ok, get in'+iif(rand(1, 10) < 7, ', but you really don't look well, you should ...
      scene.text('"Ok, get in\'+iif(rand(1, 10) < 7, \', but you really don\'t look well, you should let somebody take a look at that.\', \' and be glad I let you touch me, filthy whore.\')+\'," he says.');
    } else {
      // TODO-QSP: dynamic text: "Ok, get in'+iif(rand(1, 10) < 7, ' girl', ' whore')+'," he says.
      scene.text('"Ok, get in\'+iif(rand(1, 10) < 7, \' girl\', \' whore\')+\'," he says.');
    }
    scene.actions([
      { label: 'Get into his car', handler: (st: GameState) => {
    qspCall(s, 'prostitution_functions', 'payment', 'condom_yes', 'Outside or Condom');
  }, goto: ['prostitution_car_negotiation', 'negotiation_success'] },
    ]);
  } else {
    qspCall(s, 'prostitution_functions', 'payment', 'condom_no', 'not_discussed');
    // TODO-QSP: 'He asks you to forgo the condom. He would pay at least <<$func(''money'', ''string_profit'', prosti...
    qspCall(s, 'prostitution_functions', 'will_unprotected', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Decline [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Decline [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    if ((Math.floor(Math.random() * 10) + 1) < 7) {
      scene.text('He finally accepts.');
      if (!(s as any).prostitute) (s as any).prostitute = {}; (s as any).prostitute['client_satisfaction'] = ((s as any).prostitute['client_satisfaction'] ?? 0) - (10);
      qspCall(s, 'prostitution_functions', 'payment', 'condom_yes', 'inside_no');
      scene.actions([
        { label: 'Get into his car', goto: ['prostitution_car_negotiation', 'negotiation_success'] },
      ]);
    } else {
      if (!(s as any).prostitute) (s as any).prostitute = {}; (s as any).prostitute['fail_condom'] = 1;
      scene.actions([{ label: 'Continue', goto: ['prostitution_car_negotiation', 'negotiation_fail'] }]);
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Accept', handler: (st: GameState) => {
    // TODO-QSP: $prostitute_client_condom = 'No'
  }, goto: ['prostitution_car_negotiation', 'negotiation_condom_no'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterNegotiationCondomNo(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/shared/prostitution/car/normal/negotiation/chat\'+rand(0, 1)+\'.mp4');
  qspCall(s, 'prostitution_functions', 'payment', 'condom_no', 'not_discussed');
  scene.text('You are negotiating with your client:');
  // TODO-QSP: dynamic text: Sex: <<$prostitute['client_scene']>>
  scene.text(`Sex: ${((s as any).prostitute ?? 0)?.['client_scene']}`);
  // TODO-QSP: dynamic text: Payment: <<$func('money', 'string_profit', prostitute['payment'])>>
  scene.text(`Payment: ${qspFunc(s, 'money', 'string_profit', ((s as any).prostitute ?? 0)?.['payment'])}`);
  // TODO-QSP: dynamic text: Condom: <<$prostitute_client_condom>>
  scene.text(`Condom: ${((s as any).prostitute_client_condom ?? 0)}`);
  qspCall(s, 'prostitution_functions', 'payment', 'condom_no', 'inside_yes');
  // TODO-QSP: dynamic text: He asks you if you would '+iif($prostitute['client_scene'] = 'Blowjob', 'swallow...
  scene.text(`He asks you if you would '+iif($prostitute['client_scene'] = 'Blowjob', 'swallow his cum.', 'let him cum inside you.')+' He offers to pay you ${qspFunc(s, 'money', 'string_profit', ((s as any).prostitute ?? 0)?.['payment'])} if you do.`);
  if (((s as any).prostitute ?? 0)?.['client_scene'] === 'Anal') {
    qspCall(s, 'willpower', 'cum_inside_anal', 'resist');
  } else {
    if (((s as any).prostitute ?? 0)?.['client_scene'] === 'Blowjob') {
      qspCall(s, 'willpower', 'swallow', 'resist');
    } else {
      qspCall(s, 'willpower', 'cum_inside', 'resist');
    }
  }
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Decline [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Decline [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    if ((Math.floor(Math.random() * 10) + 1) < 10  ||  ((s as any).prostitute ?? 0)?.['client_creampie'] === 1) {
      scene.text('He accepts your decision.');
      if (!(s as any).prostitute) (s as any).prostitute = {}; (s as any).prostitute['client_satisfaction'] = ((s as any).prostitute['client_satisfaction'] ?? 0) - (10);
      qspCall(s, 'prostitution_functions', 'payment', 'condom_no', 'inside_no');
      scene.actions([
        { label: 'Get into his car', goto: ['prostitution_car_negotiation', 'negotiation_success'] },
      ]);
    } else {
      if (!(s as any).prostitute) (s as any).prostitute = {}; (s as any).prostitute['fail_creampie'] = 1;
      scene.actions([{ label: 'Continue', goto: ['prostitution_car_negotiation', 'negotiation_fail'] }]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Accept and get into his car', handler: (st: GameState) => {
    qspCall(s, 'prostitution_functions', 'payment', 'condom_no', 'inside_yes');
  }, goto: ['prostitution_car_negotiation', 'negotiation_success'] },
  ]);
  scene.build();
}

function enterNegotiationAutomatic(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).prostitute_auto) (s as any).prostitute_auto = {}; (s as any).prostitute_auto['negotiation'] = 1;
  qspCall(s, 'willpower', 'prostitution', 'resist');
  if (((((s as any).prostitute_auto ?? 0)?.['norm_bj'] === 0  &&  ((s as any).prostitute ?? 0)?.['client_scene'] === 'Blowjob')  ||  (((s as any).prostitute_auto ?? 0)?.['norm_vag'] === 0  &&  ((s as any).prostitute ?? 0)?.['client_scene'] === 'Vaginal')  ||  (((s as any).prostitute_auto ?? 0)?.['norm_anal'] === 0  &&  ((s as any).prostitute ?? 0)?.['client_scene'] === 'Anal'))) {
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      if (!(s as any).prostitute_auto) (s as any).prostitute_auto = {}; (s as any).prostitute_auto['willpower'] = 1;
    } else {
      qspCall(s, 'willpower', 'pay', 'resist');
      scene.actions([{ label: 'Continue', goto: ['prostitution_car_negotiation', 'negotiation_fail'] }]);
    }
  }
  if (((((s as any).prostitute_auto ?? 0)?.['norm_bj_condom'] === 1  &&  ((s as any).prostitute ?? 0)?.['client_scene'] === 'Blowjob')  ||  (((s as any).prostitute_auto ?? 0)?.['norm_vag_condom'] === 1  &&  ((s as any).prostitute ?? 0)?.['client_scene'] === 'Vaginal')  ||  (((s as any).prostitute_auto ?? 0)?.['norm_anal_condom'] === 1  &&  ((s as any).prostitute ?? 0)?.['client_scene'] === 'Anal'))  &&  (((s as any).mc_inventory ?? 0)?.['normal_condoms'] > 0  ||  ((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0)) {
    qspCall(s, 'prostitution_functions', 'will_unprotected', 'resist');
    if (((s as any).prostitute ?? 0)?.['std_mod'] === 1  ||  (Math.floor(Math.random() * 10) + 1) < 7  ||  (((s as any).prostitute ?? 0)?.['client_scene'] === 'Vaginal'  &&  ((s as any).mesec ?? 0) > 0  &&  ((s as any).prostitute ?? 0)?.['mesec_mod'] === 0)  ||  (((s as any).prostitute ?? 0)?.['client_scene'] === 'Anal'  &&  ((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).prostitute ?? 0)?.['dirty_anal_mod'] === 0)) {
      qspCall(s, 'prostitution_functions', 'payment', 'condom_yes', 'inside_no');
    } else {
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        if (((s as any).prostitute ?? 0)?.['client_scene'] === 'Anal') {
          qspCall(s, 'willpower', 'cum_inside_anal', 'resist');
        } else {
          if (((s as any).prostitute ?? 0)?.['client_scene'] === 'Blowjob') {
            qspCall(s, 'willpower', 'swallow', 'resist');
          } else {
            qspCall(s, 'willpower', 'cum_inside', 'resist');
          }
        }
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          if (!(s as any).prostitute_auto) (s as any).prostitute_auto = {}; (s as any).prostitute_auto['willpower'] = 1;
          qspCall(s, 'prostitution_functions', 'payment', 'condom_no', 'inside_yes');
        } else {
          if (!(s as any).prostitute) (s as any).prostitute = {}; (s as any).prostitute['client_satisfaction'] = ((s as any).prostitute['client_satisfaction'] ?? 0) - (10);
          qspCall(s, 'willpower', 'pay', 'resist');
          qspCall(s, 'prostitution_functions', 'payment', 'condom_no', 'inside_no');
          if ((Math.floor(Math.random() * 10) + 1) === 10  &&  ((s as any).prostitute ?? 0)?.['client_creampie'] === 0) {
            scene.actions([{ label: 'Continue', goto: ['prostitution_car_negotiation', 'negotiation_fail'] }]);
          }
        }
      } else {
        if (!(s as any).prostitute) (s as any).prostitute = {}; (s as any).prostitute['client_satisfaction'] = ((s as any).prostitute['client_satisfaction'] ?? 0) - (10);
        qspCall(s, 'willpower', 'pay', 'resist');
        qspCall(s, 'prostitution_functions', 'payment', 'condom_yes', 'inside_no');
        if ((Math.floor(Math.random() * 10) + 1) < 4) {
          if (!(s as any).prostitute) (s as any).prostitute = {}; (s as any).prostitute['fail_condom'] = 1;
          scene.actions([{ label: 'Continue', goto: ['prostitution_car_negotiation', 'negotiation_fail'] }]);
        }
      }
    }
    scene.actions([{ label: 'Continue', goto: ['prostitution_car_negotiation', 'negotiation_success'] }]);
  } else {
    if ((Math.floor(Math.random() * 10) + 1) < 9  &&  ((s as any).prostitute ?? 0)?.['std_mod'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['prostitution_car_negotiation', 'negotiation_fail'] }]);
    } else {
      qspCall(s, 'prostitution_functions', 'will_unprotected', 'resist');
      if (((((s as any).prostitute_auto ?? 0)?.['norm_bj_creampie'] === 1  &&  ((s as any).prostitute ?? 0)?.['client_scene'] === 'Blowjob')  ||  (((s as any).prostitute_auto ?? 0)?.['norm_vag_creampie'] === 1  &&  ((s as any).prostitute ?? 0)?.['client_scene'] === 'Vaginal')  ||  (((s as any).prostitute_auto ?? 0)?.['norm_anal_creampie'] === 1  &&  ((s as any).prostitute ?? 0)?.['client_scene'] === 'Anal'))) {
        qspCall(s, 'prostitution_functions', 'payment', 'condom_no', 'inside_yes');
      } else {
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          if (!(s as any).prostitute_auto) (s as any).prostitute_auto = {}; (s as any).prostitute_auto['willpower'] = 1;
          qspCall(s, 'prostitution_functions', 'payment', 'condom_no', 'inside_yes');
        } else {
          if (!(s as any).prostitute) (s as any).prostitute = {}; (s as any).prostitute['client_satisfaction'] = ((s as any).prostitute['client_satisfaction'] ?? 0) - (10);
          qspCall(s, 'willpower', 'pay', 'resist');
          qspCall(s, 'prostitution_functions', 'payment', 'condom_no', 'inside_no');
          if ((Math.floor(Math.random() * 10) + 1) === 10  &&  ((s as any).prostitute ?? 0)?.['client_creampie'] === 0) {
            if (!(s as any).prostitute) (s as any).prostitute = {}; (s as any).prostitute['fail_creampie'] = 1;
            scene.actions([{ label: 'Continue', goto: ['prostitution_car_negotiation', 'negotiation_fail'] }]);
          }
        }
      }
      scene.actions([{ label: 'Continue', goto: ['prostitution_car_negotiation', 'negotiation_success'] }]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterNegotiationFail(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/shared/prostitution/car/normal/negotiation/leave_walk.mp4');
  // TODO-QSP: dynamic text: He shakes his head. "I have changed my mind'+iif(rand(1, 10) < 7, '", sorry girl...
  scene.text('He shakes his head. "I have changed my mind\'+iif(rand(1, 10) < 7, \'", sorry girl maybe next time."\', \', bitch. Get away from my car."\')+\' He says.');
  if (((s as any).prostitute ?? 0)?.['fail_condom'] === 1) {
    if (!(s as any).prostitute) (s as any).prostitute = {}; (s as any).prostitute['fail_condom'] = 0;
    scene.actions([
      { label: 'Change your mind and do it without a condom', goto: ['prostitution_car_negotiation', 'negotiation_condom_no'] },
    ]);
  } else {
    if (((s as any).prostitute ?? 0)?.['fail_creampie'] === 1) {
      if (!(s as any).prostitute) (s as any).prostitute = {}; (s as any).prostitute['fail_creampie'] = 0;
      scene.actions([
        { label: 'Change your mind and allow him to cum inside you', handler: (st: GameState) => {
    qspCall(s, 'prostitution_functions', 'payment', 'condom_no', 'inside_yes');
  }, goto: ['prostitution_car_negotiation', 'negotiation_success'] },
      ]);
    } else {
      if (((s as any).prostitute ?? 0)?.['fail_pay'] === 1) {
        scene.actions([
          { label: 'Change your mind and accept his offer', handler: (st: GameState) => {
    qspCall(s, 'prostitution_functions', 'payment', 'condom_no', 'inside_yes');
  }, goto: ['prostitution_car_negotiation', 'negotiation_success'] },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Step back from the car', handler: (st: GameState) => {
    if (!(s as any).prostitute) (s as any).prostitute = {}; (s as any).prostitute['fail_pay'] = 0;
    if (!(s as any).prostitute) (s as any).prostitute = {}; (s as any).prostitute['client_satisfaction'] = 0;
    dynamicGoto(st, 'loc');
  } },
  ]);
  scene.build();
}

function enterNegotiationSuccess(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/shared/prostitution/car/normal/negotiation/drive.mp4');
  if (((s as any).prostitute_auto ?? 0)?.['negotiation'] === 1) {
    // TODO-QSP: 'You have negotiated the following'+iif(prostitute_auto['willpower'] = 1, ', but you didn''t have en...
    // TODO-QSP: dynamic text: Sex: <<$prostitute['client_scene']>>
    scene.text(`Sex: ${((s as any).prostitute ?? 0)?.['client_scene']}`);
    // TODO-QSP: dynamic text: Payment: <<$func('money', 'string_profit', prostitute['payment'])>>
    scene.text(`Payment: ${qspFunc(s, 'money', 'string_profit', ((s as any).prostitute ?? 0)?.['payment'])}`);
    // TODO-QSP: dynamic text: Condom: <<$prostitute_client_condom>>
    scene.text(`Condom: ${((s as any).prostitute_client_condom ?? 0)}`);
    // TODO-QSP: 'Cumshot: '+iif($prostitute_client_cumshot = 'Outside or Condom', 'Outside', '<<$prostitute_client_c...
    if (!(s as any).prostitute_auto) (s as any).prostitute_auto = {}; (s as any).prostitute_auto['willpower'] = 0;
    if (!(s as any).prostitute_auto) (s as any).prostitute_auto = {}; (s as any).prostitute_auto['negotiation'] = 0;
  }
  // TODO-QSP: 'You get inside the car and tell him to drive to a more secluded part of the parking lot.'+iif(rand(...
  if (((s as any).prostitute_client_condom ?? 0) === '!') {
    if (!(s as any).prostitute_stat) (s as any).prostitute_stat = {}; (s as any).prostitute_stat['unprotected'] = ((s as any).prostitute_stat['unprotected'] ?? 0) + (1);
  }
  if (((s as any).prostitute ?? 0)?.['client_satisfaction'] < 0  &&  ((s as any).prostitute ?? 0)?.['fail_pay'] === 0) {
    scene.text('You get the feeling that he isn\'t satisfied with all the choices and that he would have paid 10% or maybe even 20% more. You could try to convince him to pay you a bit more.');
    qspCall(s, 'prostitution_functions', 'will_acceptance', 'force');
    (s as any).will_cost = (((s as any).will_cost ?? 0) * ((((s as any).prostitute ?? 0)?.['client_satisfaction'] === -10) ? (20) : (40))) / 100;
    if (((s as any).will_cost ?? 0) < 3) {
      (s as any).will_cost = 3;
    }
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Ask for more money [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Ask for more money [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'force');
    if ((Math.floor(Math.random() * 10) + 1) === 10) {
      if (!(s as any).prostitute) (s as any).prostitute = {}; (s as any).prostitute['fail_pay'] = 1;
      scene.actions([{ label: 'Continue', goto: ['prostitution_car_negotiation', 'negotiation_fail'] }]);
    }
    if (!(s as any).prostitute) (s as any).prostitute = {}; (s as any).prostitute['payment'] = ((s as any).prostitute ?? 0)?.['payment_backup'];
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: He grudgingly accepts and agrees to pay you <<$func('money', 'string_profit', pr...
    scene.text(`He grudgingly accepts and agrees to pay you ${qspFunc(s, 'money', 'string_profit', ((s as any).prostitute ?? 0)?.['payment'])} instead.`);
    scene.actions([
      { label: 'Continue', goto: ['prostitution_car_negotiation', 'money'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Don\'t haggle', goto: ['prostitution_car_negotiation', 'money'] },
    ]);
  } else {
    if (!(s as any).prostitute) (s as any).prostitute = {}; (s as any).prostitute['fail_pay'] = 0;
    scene.text('When you arrive you have only one thing left to do…');
    if (((s as any).prostitute ?? 0)?.['skip_start'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['prostitution_car_negotiation', 'money'] }]);
    } else {
      scene.actions([
        { label: '… ask for your money', goto: ['prostitution_car_negotiation', 'money'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMoney(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  if (!(s as any).prostitute) (s as any).prostitute = {}; (s as any).prostitute['client_satisfaction'] = 0;
  scene.img('images/shared/prostitution/car/normal/negotiation/money.mp4');
  scene.text('"So…," you say when he parks his car, but he already knows what you\'re going to say. "Yeah, I know, you want your money."');
  // TODO-QSP: dynamic text: He pulls out his wallet and hands you <<$func('money', 'string_profit', prostitu...
  scene.text(`He pulls out his wallet and hands you ${qspFunc(s, 'money', 'string_profit', ((s as any).prostitute ?? 0)?.['payment'])}.`);
  if (!(s as any).prostitute) (s as any).prostitute = {}; (s as any).prostitute['earnings_day'] = ((s as any).prostitute['earnings_day'] ?? 0) + (((s as any).prostitute ?? 0)?.['payment']);
  if (((s as any).prostitute ?? 0)?.['payment_method'] === 1) {
    // TODO-QSP: gs 'money', 'earn', prostitute['payment'], 'cash'
  }
  if (!(s as any).prostitute) (s as any).prostitute = {}; (s as any).prostitute['payment'] = 0;
  qspCall(s, 'stat', '');
  scene.text('<br>The moment you have put your money away his hands move to your body starting to undress you.');
  if (((s as any).prostitute ?? 0)?.['skip_start'] === 1) {
    scene.actions([{ label: 'Continue', goto: ['prostitution_car_sex', 'start'] }]);
  } else {
    scene.actions([
      { label: 'Get to work', goto: ['prostitution_car_sex', 'start'] },
    ]);
  }
  // TODO-QSP: end
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
    case 'client_regular_fail':
      enterClientRegularFail(s, scene);
      break;
    case 'client_regular_success':
      enterClientRegularSuccess(s, scene);
      break;
    case 'negotiation_start':
      enterNegotiationStart(s, scene);
      break;
    case 'negotiation_condom_yes':
      enterNegotiationCondomYes(s, scene);
      break;
    case 'negotiation_condom_no':
      enterNegotiationCondomNo(s, scene);
      break;
    case 'negotiation_automatic':
      enterNegotiationAutomatic(s, scene);
      break;
    case 'negotiation_fail':
      enterNegotiationFail(s, scene);
      break;
    case 'negotiation_success':
      enterNegotiationSuccess(s, scene);
      break;
    case 'money':
      enterMoney(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const prostitution_car_negotiation: LocationDef = {
  name: 'prostitution_car_negotiation',
  title: 'The start and end scene (getting your money, leaving the car',
  region: 'other',
  enter: enter,
};
