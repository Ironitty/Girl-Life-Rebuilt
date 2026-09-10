import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'stat', '');
  if (((s as any).gatabletkiday ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).gap_bc_count = 0;
  }
  if (((s as any).galubriday ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).gap_lub_count = 0;
  }
  if (((s as any).gapregday ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).gap_preg_count = 0;
  }
  if (((s as any).gaprezikday ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).gap_condom_count = 0;
  }
  if (((s as any).gabotsmlday ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).gap_botsml_count = 0;
  }
  if (((s as any).gabotmedday ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).gap_botmed_count = 0;
  }
  if (((((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 13)  ||  (((s as any).hour ?? 0) >= 14  &&  ((s as any).hour ?? 0) <= 18))  &&  ((s as any).week ?? 0) < 6) {
    (s as any).LudaQW['work_hours'] = 1;
  } else {
    (s as any).LudaQW['work_hours'] = 0;
  }
  scene.text('<center><b>Pharmacy</b></center>');
  if (((s as any).LudaQW ?? 0)?.['work_hours'] === 1) {
    if (((s as any).LudaQW ?? 0)?.['free_condoms'] === 0  &&  ((s as any).locArgs?.[1] ?? 0) === '') {
      scene.actions([{ label: 'Continue', goto: ['pav_pharmacy', 'luda_free_condoms'] }]);
    }
    scene.img('images/locations/pavlovsk/pharmacy/apteka_aunt_1.jpg');
    if (((s as any).pharmacy_timers ?? 0)?.['birth_control'] > 0  &&  ((s as any).pharmacy_timers ?? 0)?.['birth_control'] < ((s as any).daystart ?? 0) - 30  &&  ((s as any).LudaQW ?? 0)?.['birth_control_worry'] === 0  &&  ((s as any).LudaQW ?? 0)?.['bc_shot_know'] === 0) {
      scene.actions([{ label: 'Continue', goto: ['pav_pharmacy', 'luda_birth_control_worry'] }]);
    }
  } else {
    if (((s as any).pav_pharma_day ?? 0) !== ((s as any).daystart ?? 0)) {
      (s as any).pav_pharma_day = ((s as any).daystart ?? 0);
      (s as any).pav_pharma_picrand = Math.floor(Math.random() * 4) + 1;
    }
    scene.img('images/locations/pavlovsk/pharmacy/apteka_worker_\' + pav_pharma_picrand + \'.jpg');
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'return') {
    scene.text('"Do you need anything else?"');
  } else {
    if (((s as any).LudaQW ?? 0)?.['work_hours'] === 0) {
      scene.text('The woman behind the counter greets you. "Hello. What do you need?"');
    } else {
      scene.text('Aunt Luda is sitting behind the counter and greets you as you walk in.');
      // TODO-QSP: dynamic text: "Hello, <<$pcs_nickname>>. Are you looking for something?"
      scene.text(`"Hello, ${((s as any).pcs_nickname ?? 0)}. Are you looking for something?"`);
    }
  }
  scene.actions([
    { label: 'Leave the pharmacy', handler: (st: GameState) => {
    qspCall(st, 'item_cart', 'shopping_var_clear');
  }, goto: ['pav_commercial', ''] },
    { label: 'Buy something', goto: ['pav_pharmacy', 'cart'] },
  ]);
  scene.build();
}

function enterCart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) < 8  ||  ((s as any).hour ?? 0) > 20) {
    scene.text('The pharmacy is currently closed.');
    return;
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'item_cart', 'shopping_var_clear');
  }, goto: ['pav_commercial', ''] },
    ]);
  }
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'item_cart', 'shopping_aisle', 'chemist');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  if (((s as any).LudaQW ?? 0)?.['work_hours'] === 1) {
  }
  scene.actions([
    { label: 'Exit shopping cart', handler: (st: GameState) => {
    qspCall(st, 'item_cart', 'shopping_var_clear');
  }, goto: ['pav_pharmacy', 'start'] },
  ]);
  scene.build();
}

function enterBuyCondoms(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pharmacy_timers ?? 0)?.['condom_timer'] === ((s as any).daystart ?? 0)  ||  ((s as any).LudaQW ?? 0)?.['birth_control_timer'] === ((s as any).daystart ?? 0)) {
    scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc_s', 'args_s'); } }]);
  } else {
    (s as any).pharmacy_timers['condom_timer'] = ((s as any).daystart ?? 0);
  }
  (s as any).ludaQW['pharm_purchase'] = 'condoms';
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  if (((s as any).LudaQW ?? 0)?.['KnowsSexActive'] < 10) {
    (s as any).LudaQW['KnowsSexActive'] = ((s as any).LudaQW['KnowsSexActive'] ?? 0) + (1);
  }
  qspCall(s, 'stat', '');
  scene.text('<center><b>Pharmacy</b></center>');
  scene.img('images/locations/pavlovsk/pharmacy/apteka_aunt_1.jpg');
  scene.actions([
    { label: 'Meekly ask', handler: (st: GameState) => {
    if (((s as any).pharmacy ?? 0)?.['first_purchase'] === 0) {
      (s as any).pharmacy['first_purchase'] = 1;
      scene.text('You awkwardly avoid eye contact, letting your gaze "wander" the shelves behind her, pretending to be looking for anything <i>except</i> condoms. You gulp, feeling your cheeks redden.');
    }
    if (((s as any).pharmacy ?? 0)?.['morning_after'] > 0  &&  ((s as any).LudaQW ?? 0)?.['condom_scold'] < ((s as any).pharmacy ?? 0)?.['morning_after']) {
      (s as any).LudaQW['condom_scold'] = ((s as any).pharmacy ?? 0)?.['morning_after'];
      scene.text('"I need some <i>stuff</i>, Aunt Luda," you say in a low voice, trying to be discreet.');
      if (((s as any).fame ?? 0)?.['pav_slut'] > 150) {
        // TODO-QSP: dynamic text: "<<$pcs_nickname>>..."
        scene.text(`"${((s as any).pcs_nickname ?? 0)}..."`);
        scene.text('She gives you a flat stare. "Be straight with me. We both know what this is about. If you\'re going to be sexually active, especially if you\'re going to go so far to end up as the town bicycle, you can\'t be embarrassed about buying \'stuff.\' Now, speak clearly. Are you looking for something?"');
        scene.text('You take a deep breath, feeling like you\'re a child again, being forced to apologize for breaking something.');
        scene.text('"I need some... condoms, Aunt Luda," you mumble while looking down. She smiles at you and places a box immediately onto the counter. <i>How did she know I wanted condoms?</i>');
        scene.text('"See? Was that so hard?" She continues to smile at you as she casually adds it to your purchase. "Now, was there anything else you needed?"');
      } else {
        scene.text('"What do you mean stuff?" she asks innocently. "We have all kinds of stuff. Do you mean lip balm? Or anti-itch cream? Or birth control? Or by chance, maybe some anal lub-"');
        scene.text('"Condoms!" you hiss, looking around the room to see if anybody is watching. "I need condoms, Aunt Luda."');
        scene.text('She chuckles and pulls out a box of condoms that she was clearly holding right behind the counter.');
        scene.text('"Glad to see you\'re being safer about it this time," she says, adding it to your purchase. "Now, was there anything else you needed?"');
      }
      qspCall(s, 'pav_pharmacy', 'dont_tell');
    } else {
      (s as any).LudaQW['condoms'] = 1;
      (s as any).LudaQW['knows_sex'] = 1;
      scene.text('"I need some <i>stuff</i>, Aunt Luda," you say in a low voice, trying to be discreet.');
      if (((s as any).fame ?? 0)?.['pav_slut'] > 150) {
        if (((s as any).LudaQW ?? 0)?.['condom_give_day'] - ((s as any).daystart ?? 0) < 7) {
          // TODO-QSP: dynamic text: "You've used up my gift already?" Luda laughs in surprise, which only serves to ...
          scene.text(`"You've used up my gift already?" Luda laughs in surprise, which only serves to make you blush even harder. "Everyone in Pavlovsk calls you a ${((s as any).gnikname ?? 0)}, but it hasn't even been a week yet, darling."`);
        } else {
          // TODO-QSP: dynamic text: "Used up my gift already?" Luda asks, which only serves to make you blush even h...
          scene.text(`"Used up my gift already?" Luda asks, which only serves to make you blush even harder. "I'm not surprised, given what I hear about you around town. Everyone in Pavlovsk seems to think of you as a ${((s as any).gnikname ?? 0)}."`);
        }
        scene.text('"Well... but I..." Deeply embarrassed that your aunt —and apparently everyone else in town— knows about your promiscuous behavior, you\'re not really sure what to say. She chuckles and gives you a reassuring smile.');
        // TODO-QSP: dynamic text: "Don't worry <<$pcs_nickname>>, I'm just teasing," she giggles before putting a ...
        scene.text(`"Don't worry ${((s as any).pcs_nickname ?? 0)}, I'm just teasing," she giggles before putting a box of condoms on the counter and adding it to your purchase. "I'm not here to judge. Goodness knows, I'd be one to talk."`);
        scene.text('She places the box into a paper bag before sliding it across the counter towards you.');
        if (((s as any).pharmacyfirstbirthcontrol ?? 0) === 0) {
          scene.text('"We also have birth control pills if you\'d like to start going bareback."');
          qspCall(s, 'pav_pharmacy', 'birth_control_addon');
        }
      } else {
        if (((s as any).LudaQW ?? 0)?.['condom_give_day'] - ((s as any).daystart ?? 0) < 7) {
          scene.text('"You\'ve used up my gift already?" Luda laughs in surprise, which only serves to make you blush even harder. "Darling, it hasn\'t even been a week!"');
        } else {
          scene.text('"Used up my gift already?" Luda asks, which only serves to make you blush even harder. "I\'m glad it went to good use."');
        }
        scene.text('She pulls a box of condoms from behind the counter and adds it to your purchase.');
        if (((s as any).pharmacyfirstbirthcontrol ?? 0) === 0) {
          scene.text('"We also have birth control pills if you\'d like to start going bareback."');
          qspCall(s, 'pav_pharmacy', 'birth_control_addon');
        }
      }
      qspCall(s, 'pav_pharmacy', 'dont_tell');
      scene.text('"Aunt Luda," you whisper quickly, feeling your face heat up even as you try to rush through the words. "I need some more condoms."');
      if (((s as any).pcs_inhib ?? 0) < 50) {
        scene.text('"You\'re going through them quite fast," she chuckles, slipping a box of condoms into a paper bag as you feel your blush intensify.');
      } else {
        scene.text('"You\'re going through them quite fast," your aunt smiles at you as she slips a box of condoms into a paper bag. You blush, but smile back anyways, shrugging non-committally as she adds it to your purchase.');
      }
    }
    scene.actions([
      { label: 'Continue shopping', handler: (st: GameState) => {
    dynamicGoto(st, 'loc_s', 'args_s');
  } },
    ]);
  } },
    { label: 'Openly ask', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (((s as any).LudaQW ?? 0)?.['condoms'] === 0) {
      (s as any).LudaQW['condoms'] = 1;
      scene.text('"Hi Aunt Luda. Can I buy some condoms?"');
      if (((s as any).LudaQW ?? 0)?.['knows_sex'] === 0) {
        (s as any).LudaQW['knows_sex'] = 1;
        if (((s as any).LudaQW ?? 0)?.['condom_give_day'] - ((s as any).daystart ?? 0) < 7) {
          scene.text('"You\'ve used up my gift already?" Luda laughs in surprise. "Darling, it hasn\'t even been a week!"');
          scene.text('You casually shrug. "Turns out I really like having sex."');
          scene.text('"It runs in the family," she chuckles, smiling at you fondly as she reaches for a box of condoms and puts them into a bag. "Maybe we all carry a slut gene or something."');
        } else {
          scene.text('"Used up my gift already?" Luda smiles. "I\'m glad it went to good use."');
        }
        if (((s as any).pharmacyfirstbirthcontrol ?? 0) === 0) {
          scene.text('"We also have birth control pills if you\'d like to start going bareback."');
          qspCall(s, 'pav_pharmacy', 'birth_control_addon');
        }
        scene.actions([
          { label: 'Continue shopping', handler: (st: GameState) => {
    dynamicGoto(st, 'loc_s', 'args_s');
  } },
        ]);
      } else {
        scene.text('"Are you seeing someone new?" Luda asks curiously as she grabs a box of condoms and places them in in a bag. "Or just being careful? I thought you were already on birth control."');
        if (((s as any).birth_control ?? 0)?.['using_bc'] > 0) {
          if (((s as any).birth_control ?? 0)?.['think_safe'] === 0) {
            scene.text('"Still waiting for it to kick in," you smile ruefully.');
            scene.text('"Oh! Silly me!" Luda rolls her eyes in self-deprecating fashion. "Of course. And I call myself a pharmacist! Well good on you for keeping safe in the mean time!"');
            scene.actions([
              { label: 'Continue shopping', handler: (st: GameState) => {
    dynamicGoto(st, 'loc_s', 'args_s');
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Someone new', handler: (st: GameState) => {
    scene.text('"Someone new," you smile. "Haven\'t gotten around to making sure they\'re clean yet."');
    scene.text('"Well I hope you do it soon." Her eyes twinkle mischeviously and she leans in with a hand cupped around her mouth. "I prefer bareback too."');
    scene.actions([
      { label: 'Continue shopping', handler: (st: GameState) => {
    dynamicGoto(st, 'loc_s', 'args_s');
  } },
    ]);
  } },
              { label: 'Hookups', handler: (st: GameState) => {
    scene.text('"I\'ve been having a lot of one night stands lately," you tell her.');
    scene.text('"Ahh. Glad to know my niece is popular <i>and</i> smart," she winks, adding the condoms to your purchase.');
    scene.actions([
      { label: 'Continue shopping', handler: (st: GameState) => {
    dynamicGoto(st, 'loc_s', 'args_s');
  } },
    ]);
  } },
              { label: 'Just being safe', handler: (st: GameState) => {
    scene.text('"Just being safe," you shrug. "Birth control can fail. Condoms can too. Better if I use both, isn\'t it?"');
    scene.text('"Good girl." She smiles at you proudly and adds the condoms to your purchase.');
    scene.actions([
      { label: 'Continue shopping', handler: (st: GameState) => {
    dynamicGoto(st, 'loc_s', 'args_s');
  } },
    ]);
  } },
            ]);
          }
        } else {
          qspCall(s, 'pav_pharmacy', 'luda_stopped_bc');
        }
        if (((s as any).pharmacyfirstbirthcontrol ?? 0) === 0) {
          scene.text('"Of course, darling." She rummages around the counter and comes up with a box of condoms. "We also have birth control pills if you prefer bareback. As long as you know your partner is clean, of course."');
          qspCall(s, 'pav_pharmacy', 'birth_control_addon');
        } else {
          scene.text('"Of course, darling!" Luda rummages around under the counter and comes up with a box of condoms, sliding them across to you.');
          scene.text('"Keep coming back," she winks.');
          scene.actions([
            { label: 'Continue shopping', handler: (st: GameState) => {
    dynamicGoto(st, 'loc_s', 'args_s');
  } },
          ]);
        }
        scene.text('"Hi Aunt Luda, I need some more condoms."');
        scene.text('"You\'re going through them quite fast," she chuckles reaching below the counter and pulling up a box of condoms.');
        scene.actions([
          { label: 'Just being safe', handler: (st: GameState) => {
    scene.text('"Just being safe," you shrug, taking the box from her. "Thanks, Aunt Luda."');
    scene.text('"Any time, darling!"');
    scene.actions([
      { label: 'Continue shopping', handler: (st: GameState) => {
    dynamicGoto(st, 'loc_s', 'args_s');
  } },
    ]);
  } },
          { label: 'I\'m having a lot of sex', handler: (st: GameState) => {
    scene.text('"I\'m not sure if this is a contributing factor," you say, pretending to think. "But it might be because I\'m having a lot of sex."');
    scene.text('"And a lot of fun too, I hope," she laughs. "I\'m just glad you\'re staying safe, darling."');
    scene.actions([
      { label: 'Continue shopping', handler: (st: GameState) => {
    dynamicGoto(st, 'loc_s', 'args_s');
  } },
    ]);
  } },
        ]);
      }
    }
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'cart':
      enterCart(s, scene);
      break;
    case 'buy_condoms':
      enterBuyCondoms(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const pav_pharmacy: LocationDef = {
  name: 'pav_pharmacy',
  title: 'Pharmacy',
  region: 'pavlovsk',
  locationType: 'public_indoors',
  description: ['"Do you need anything else?"'],
  enter: enter,
};
