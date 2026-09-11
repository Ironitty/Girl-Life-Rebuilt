import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

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
    ((s as any).LudaQW ?? {})['work_hours'] = 1;
  } else {
    ((s as any).LudaQW ?? {})['work_hours'] = 0;
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
    scene.img('images/locations/pavlovsk/pharmacy/apteka_aunt_1.jpg');
  } else {
    scene.img('images/locations/pavlovsk/pharmacy/apteka_worker_' + pav_pharma_picrand + '.jpg');
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
    ((s as any).pharmacy_timers ?? {})['condom_timer'] = ((s as any).daystart ?? 0);
  }
  ((s as any).ludaQW ?? {})['pharm_purchase'] = 'condoms';
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  if (((s as any).LudaQW ?? 0)?.['KnowsSexActive'] < 10) {
    ((s as any).LudaQW ?? {})['KnowsSexActive'] = (((s as any).LudaQW ?? {})['KnowsSexActive'] ?? 0) + (1);
  }
  qspCall(s, 'stat', '');
  scene.text('<center><b>Pharmacy</b></center>');
  scene.img('images/locations/pavlovsk/pharmacy/apteka_aunt_1.jpg');
  scene.actions([
    { label: 'Meekly ask', handler: (st: GameState) => {
    if (((s as any).pharmacy ?? 0)?.['first_purchase'] === 0) {
      ((s as any).pharmacy ?? {})['first_purchase'] = 1;
      scene.text('You awkwardly avoid eye contact, letting your gaze "wander" the shelves behind her, pretending to be looking for anything <i>except</i> condoms. You gulp, feeling your cheeks redden.');
    }
    if (((s as any).pharmacy ?? 0)?.['morning_after'] > 0  &&  ((s as any).LudaQW ?? 0)?.['condom_scold'] < ((s as any).pharmacy ?? 0)?.['morning_after']) {
      ((s as any).LudaQW ?? {})['condom_scold'] = ((s as any).pharmacy ?? 0)?.['morning_after'];
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
      if (((s as any).LudaQW ?? 0)?.['condoms'] === 0  &&  ((s as any).LudaQW ?? 0)?.['knows_sex'] !== 1) {
        ((s as any).LudaQW ?? {})['condoms'] = 1;
        ((s as any).LudaQW ?? {})['knows_sex'] = 1;
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
          if ((!((s as any).pharmacyfirstbirthcontrol ?? 0))) {
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
          if ((!((s as any).pharmacyfirstbirthcontrol ?? 0))) {
            scene.text('"We also have birth control pills if you\'d like to start going bareback."');
            qspCall(s, 'pav_pharmacy', 'birth_control_addon');
          }
        }
        qspCall(s, 'pav_pharmacy', 'dont_tell');
      } else {
        scene.text('"Aunt Luda," you whisper quickly, feeling your face heat up even as you try to rush through the words. "I need some more condoms."');
        if (((s as any).pcs_inhib ?? 0) < 50) {
          scene.text('"You\'re going through them quite fast," she chuckles, slipping a box of condoms into a paper bag as you feel your blush intensify.');
        } else {
          scene.text('"You\'re going through them quite fast," your aunt smiles at you as she slips a box of condoms into a paper bag. You blush, but smile back anyways, shrugging non-committally as she adds it to your purchase.');
        }
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
      ((s as any).LudaQW ?? {})['condoms'] = 1;
      scene.text('"Hi Aunt Luda. Can I buy some condoms?"');
      if (((s as any).LudaQW ?? 0)?.['knows_sex'] === 0) {
        ((s as any).LudaQW ?? {})['knows_sex'] = 1;
        if (((s as any).LudaQW ?? 0)?.['condom_give_day'] - ((s as any).daystart ?? 0) < 7) {
          scene.text('"You\'ve used up my gift already?" Luda laughs in surprise. "Darling, it hasn\'t even been a week!"');
          scene.text('You casually shrug. "Turns out I really like having sex."');
          scene.text('"It runs in the family," she chuckles, smiling at you fondly as she reaches for a box of condoms and puts them into a bag. "Maybe we all carry a slut gene or something."');
        } else {
          scene.text('"Used up my gift already?" Luda smiles. "I\'m glad it went to good use."');
        }
        if ((!((s as any).pharmacyfirstbirthcontrol ?? 0))) {
          scene.text('"We also have birth control pills if you\'d like to start going bareback."');
          qspCall(s, 'pav_pharmacy', 'birth_control_addon');
        }
        scene.actions([
          { label: 'Continue shopping', handler: (st: GameState) => {
    dynamicGoto(st, 'loc_s', 'args_s');
  } },
        ]);
      } else {
        if (((s as any).pharmacyfirstbirthcontrol ?? 0) === 1) {
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
        } else {
          if ((!((s as any).pharmacyfirstbirthcontrol ?? 0))) {
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
        }
      }
    } else {
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
  } },
  ]);
  scene.build();
}

function enterBuyBirthControl(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pharmacy_timers ?? 0)?.['birth_control'] === ((s as any).daystart ?? 0)  ||  ((s as any).LudaQW ?? 0)?.['birth_control_timer'] === ((s as any).daystart ?? 0)) {
    scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc_s', 'args_s'); } }]);
  } else {
    ((s as any).pharmacy_timers ?? {})['birth_control'] = ((s as any).daystart ?? 0);
  }
  if (((s as any).LudaQW ?? 0)?.['birth_control_worry'] >= 2) {
    scene.actions([{ label: 'Continue', goto: ['pav_pharmacy', 'luda_birth_control_start_again_meek'] }]);
  }
  if (((s as any).LudaQW ?? 0)?.['birth_control_worry'] === 1) {
    ((s as any).LudaQW ?? {})['birth_control_worry'] = 0;
  }
  ((s as any).ludaQW ?? {})['pharm_purchase'] = 'bc_pills';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Pharmacy</b></center>');
  scene.img('images/locations/pavlovsk/pharmacy/apteka_aunt_1.jpg');
  if (((s as any).pharmacy ?? 0)?.['first_purchase'] === 0) {
    ((s as any).pharmacy ?? {})['first_purchase'] = 1;
    scene.text('You awkwardly avoid eye contact, letting your gaze "wander" around the pharmacy, pretending you don\'t know what you\'re here for. Finally, you take a deep breath, feeling your cheeks redden.');
  }
  scene.actions([
    { label: 'Meekly ask', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/pharmacy/apteka_aunt_1.jpg');
    if (((s as any).pharmacyfirstbirthcontrol ?? 0) !== 0) {
      if (((s as any).pcs_inhib ?? 0) < 50) {
        scene.text('"I need some more birth control pills, Aunt Luda," you mumble.');
        scene.text('"You\'re remembering to take them every day, right?" she asks, ringing you up and putting the pills into a bag. You nod without speaking, avoiding her gaze as she hands you your purchase. "Good. Also, a little trick if you want to stop having periods: skip your placebo pills and just go straight to the next active pill. The hormones will build up enough that you\'ll no longer menstruate. You\'ll probably still have some cramps, but at least you shouldn\'t need tampons either."');
        scene.text('"Thank you, Aunt..." you say, blushing as she adds the pills to your purchase.');
      } else {
        scene.text('"I need some more birth control pills, Aunt Luda." You manage to say it with a straight face, though you still feel your cheeks heat up.');
        scene.text('"You\'re remembering to take them every day, right?" she asks, ringing you up and putting the pills into a bag.');
        scene.text('"Yes, Aunt Luda."');
        scene.text('"Good. Also, a little trick if you want to stop having periods: skip your placebo pills and just go straight to the next active pill. The hormones will build up enough that you\'ll no longer menstruate. You\'ll probably still have some cramps, but at least you shouldn\'t need tampons either."');
        scene.text('"Okay, thanks for the advice," you nod meekly.');
      }
      scene.actions([
        { label: 'Continue shopping', handler: (st: GameState) => {
    dynamicGoto(st, 'loc_s', 'args_s');
  } },
      ]);
    } else {
      (s as any).pharmacyfirstbirthcontrol = 1;
      (s as any).minut = ((s as any).minut ?? 0) + 2;
      if (((s as any).pharmacy ?? 0)?.['morning_after'] > 2  ||  ((s as any).pharmacyfirstpregtest ?? 0) > 0) {
        scene.text('"Erm... yes aunt. I need some <i>stuff</i>," you say while looking meaningfully at the birth control pills.');
        scene.text('"Well it\'s about time," Luda says, rolling her eyes dramatically before swiftly grabbing a package and placing it on top of the counter. "I was wondering how many accidents you\'d go through before you\'d wise up and do the safe thing."');
        scene.actions([
          { label: 'Continue shopping', handler: (st: GameState) => {
    dynamicGoto(st, 'loc_s', 'args_s');
  } },
        ]);
      } else {
        if (((s as any).fame ?? 0)?.['pav_slut'] > 150) {
          ((s as any).LudaQW ?? {})['knows_sex'] = 1;
          scene.text('"Erm... yes aunt. I need some <i>stuff</i>," you say, looking to the side, avoiding eye contact.');
          // TODO-QSP: dynamic text: "What you mean is birth control pills so you can start having fun without fear,"...
          scene.text(`"What you mean is birth control pills so you can start having fun without fear," she says with a smile. You look at her in surprise. "I'm not deaf, ${((s as any).pcs_nickname ?? 0)}. I can hear just about everyone in Pavlovsk calling you a ${((s as any).gnikname ?? 0)}."`);
          scene.actions([
            { label: 'Stammer', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/pharmacy/apteka_aunt_1.jpg');
    scene.text('"Well- but I-" You\'re not really sure what to say and you\'re deeply embarrassed that your aunt, and apparently everyone else in town, knows about your promiscuous behavior. She chuckles and gives you a reassuring smile.');
    // TODO-QSP: dynamic text: "Don't worry <<$pcs_nickname>>, I'm just teasing," she giggles while putting a b...
    scene.text(`"Don't worry ${((s as any).pcs_nickname ?? 0)}, I'm just teasing," she giggles while putting a box of pills into a bag. "I'm not here to judge. It runs in the family; maybe we all carry a slut gene or something."`);
    if (((s as any).LudaQW ?? 0)?.['condoms'] === 0) {
      scene.text('"Since you seem to have a lot of partners, did you want some condoms too? To protect you from STD\'s of course. You can never tell who\'s clean and who isn\'t these days."');
      qspCall(s, 'pav_pharmacy', 'condom_addon');
    }
    qspCall(s, 'pav_pharmacy', 'dont_tell');
    scene.actions([
      { label: 'Continue shopping', handler: (st: GameState) => {
    dynamicGoto(st, 'loc_s', 'args_s');
  } },
    ]);
  } },
            { label: 'Don\'t like condoms', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/pharmacy/apteka_aunt_1.jpg');
    scene.text('"I don\'t like using condoms..." you mumble. The admission somehow manages to make your face grow even hotter.');
    scene.text('"Neither do I," Luda giggles before putting a box of pills into a bag. "I think it runs in the family."');
    qspCall(s, 'pav_pharmacy', 'dont_tell');
    scene.actions([
      { label: 'Continue shopping', handler: (st: GameState) => {
    dynamicGoto(st, 'loc_s', 'args_s');
  } },
    ]);
  } },
            { label: 'I\'m just being safe', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/pharmacy/apteka_aunt_1.jpg');
    scene.text('"I\'m just being safe," you mumble, feeling your face somehow grow even hotter. "I still use condoms, but I don\'t want to rely only on them."');
    scene.text('"I\'m glad my niece is being smart," she nods, putting a box of pills into a bag. "It\'s good to protect yourself from STD\'s too. You never know who\'s clean these days. Since that\'s the case, would you get some more condoms while you\'re here?"');
    qspCall(s, 'pav_pharmacy', 'condom_addon');
    qspCall(s, 'pav_pharmacy', 'dont_tell');
    scene.actions([
      { label: 'No thanks', handler: (st: GameState) => {
    dynamicGoto(st, 'loc_s', 'args_s');
  } },
    ]);
  } },
          ]);
        } else {
          scene.text('You take a deep breath. "Erm... yes aunt. I need some <i>stuff</i>," you say while looking meaningfully at the birth control pills.');
          scene.text('"Used up my gift already?" Luda asks, smiling impishly. "Or did you just decide you prefer it bareback?"');
          if (((s as any).stat ?? 0)?.['total_creampies'] > 0) {
            scene.actions([
              { label: 'Found out I like creampies', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/pharmacy/apteka_aunt_1.jpg');
    scene.text('"I... I found out I like it when guys finish inside me," you confess. "It feels really good."');
    scene.text('Luda raises an eyebrow and you feel a blush spread through your cheeks. ');
    scene.text('"I hope you used my other gift when you found out?" she asks.');
    if (((s as any).stat ?? 0)?.['morning_after_pill'] > 0) {
      scene.text('"I did," you nod, blush intensifying as you do.');
      scene.text('"Good," she says, ringing up your purchase. "You\'d be a fool if you didn\'t."');
      scene.text('"Remember to take these every day," she advises, adding the pills to your purchase. "It doesn\'t work unless it\'s every single day. In fact, they\'ll make it more likely for you to get pregnant instead. Which is very bad news for a girl who likes creampies."');
      scene.actions([
        { label: 'Continue shopping', handler: (st: GameState) => {
    dynamicGoto(st, 'loc_s', 'args_s');
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Uh oh', handler: (st: GameState) => {
    scene.text('Your stomach drops and you feel the blood drain from your face. "I, uhh... I forgot...?" you cringe.');
    // TODO-QSP: dynamic text: "<<$pcs_firstname>> <<$pcs_lastname>>, what is wrong with you?!" she scorns whil...
    scene.text(`"${((s as any).pcs_firstname ?? 0)} ${((s as any).pcs_lastname ?? 0)}, what is wrong with you?!" she scorns while putting her hands on her hips. "How could you forget?! This is why I gave it to you in the first place!"`);
    scene.text('Luda shakes her head, making clicking noises with her tongue to herself as she rings up your purchase.');
    scene.text('"<i>Don\'t</i> forget to take these," she warns, handing over the pills. "Every day young lady, or they won\'t work. In fact, they\'ll make it more likely for you to get pregnant instead."');
    scene.text('"Yes, Aunt Luda..." you say meekly.');
    scene.actions([
      { label: 'Continue shopping', handler: (st: GameState) => {
    dynamicGoto(st, 'loc_s', 'args_s');
  } },
    ]);
  } },
        { label: 'It was a safe day', handler: (st: GameState) => {
    scene.text('"Er... It was a safe day," you mumble out.');
    // TODO-QSP: dynamic text: "<<$pcs_firstname>>!" she says, putting her hands on her hips. "The calendar met...
    scene.text(`"${((s as any).pcs_firstname ?? 0)}!" she says, putting her hands on her hips. "The calendar method? Really?"`);
    scene.text('Your blush deepens as Luda huffs exasperatedly and she slaps a box of pills down on the counter.');
    scene.text('"That\'s a highly irresponsible method of birth control!" She sighs as she starts scanning the box. "At least you\'re getting off of that and onto these. Just remember: you take these <i>every</i> day young lady, or they won\'t work. In fact, they\'ll make it more likely for you to get pregnant instead."');
    scene.text('"Yes, Aunt Luda..." you say meekly.');
    scene.actions([
      { label: 'Continue shopping', handler: (st: GameState) => {
    dynamicGoto(st, 'loc_s', 'args_s');
  } },
    ]);
  } },
      ]);
    }
  } },
            ]);
          }
          if (((s as any).LudaQW ?? 0)?.['knows_sex'] === 0) {
            scene.actions([
              { label: 'It\'s for my cycle', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/pharmacy/apteka_aunt_1.jpg');
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.text('"I just want to regulate my cycle, Aunt Luda," you protest, blushing deeply. "I\'m not having sex."');
    } else {
      scene.text('"I just want to regulate my cycle, Aunt Luda," you lie, blushing deeply. "I\'m not having sex."');
    }
    scene.text('She smiles at you with a suspicious twist at the corner of her mouth as she adds the pills to your purchase.');
    scene.text('"Well, I can\'t prove otherwise, so I suppose I\'ll just have to take you at your word..."');
    scene.actions([
      { label: 'Continue shopping', handler: (st: GameState) => {
    dynamicGoto(st, 'loc_s', 'args_s');
  } },
    ]);
  } },
            ]);
          }
          scene.actions([
            { label: 'Ran out', handler: (st: GameState) => {
    ((s as any).LudaQW ?? {})['knows_sex'] = 1;
    scene.img('images/locations/pavlovsk/pharmacy/apteka_aunt_1.jpg');
    if (((s as any).LudaQW ?? 0)?.['condom_give_day'] - ((s as any).daystart ?? 0) < 7) {
      scene.text('"I ran out," you admit and Luda barks a loud laugh of surprise.');
      scene.text('"Darling, it hasn\'t even been a week!"');
      scene.text('Your blush deepens.');
      scene.text('"Oh don\'t be embarrassed. I\'m not slut shaming you, darling. It runs in the family," she chuckles, smiling at you fondly before reaching for a box of pills and putting it into a bag.');
    } else {
      scene.text('"I ran out," you admit, blushing deeply.');
    }
    scene.text('Luda takes a small glance backwards as she adds the pills to your purchase.');
    scene.text('"Did you want some more condoms while you\'re here? It takes a few weeks for the pill to become effective."');
    qspCall(s, 'pav_pharmacy', 'condom_addon');
    qspCall(s, 'pav_pharmacy', 'dont_tell');
    scene.actions([
      { label: 'No thanks', handler: (st: GameState) => {
    dynamicGoto(st, 'loc_s', 'args_s');
  } },
    ]);
  } },
            { label: 'Don\'t like condoms', handler: (st: GameState) => {
    ((s as any).LudaQW ?? {})['knows_sex'] = 1;
    scene.img('images/locations/pavlovsk/pharmacy/apteka_aunt_1.jpg');
    scene.text('"I don\'t like using condoms," you blush. "They don\'t feel good."');
    scene.text('"Maybe I should\'ve given you pills from the start," she chuckles, ringing up your purchase. "I know you don\'t like them, but can I interest you in some more condoms while you\'re here? It takes a few weeks for the pill to become effective."');
    qspCall(s, 'pav_pharmacy', 'condom_addon');
    qspCall(s, 'pav_pharmacy', 'dont_tell');
    scene.actions([
      { label: 'No thanks', handler: (st: GameState) => {
    dynamicGoto(st, 'loc_s', 'args_s');
  } },
    ]);
  } },
            { label: 'Want to try bareback', handler: (st: GameState) => {
    ((s as any).LudaQW ?? {})['knows_sex'] = 1;
    scene.img('images/locations/pavlovsk/pharmacy/apteka_aunt_1.jpg');
    scene.text('"I want to see what it feels like without a condom," you admit, blushing. "But I don\'t want to get pregnant either."');
    scene.text('"Oh, it\'s <i>wonderful</i> darling," Luda gushes and your blush deepens. "If you\'re anything like the other girls in our family, you\'ll love it. Did you want some more condoms while you\'re here? It takes a few weeks for the pill to become effective."');
    qspCall(s, 'pav_pharmacy', 'condom_addon');
    qspCall(s, 'pav_pharmacy', 'dont_tell');
    scene.actions([
      { label: 'No thanks', handler: (st: GameState) => {
    dynamicGoto(st, 'loc_s', 'args_s');
  } },
    ]);
  } },
            { label: 'Prefer bareback', handler: (st: GameState) => {
    ((s as any).LudaQW ?? {})['knows_sex'] = 1;
    scene.img('images/locations/pavlovsk/pharmacy/apteka_aunt_1.jpg');
    scene.text('"It\'s not the same with a condom," you admit.');
    scene.text('"I agree," she smirks and your blush deepens. "I started to suspect it runs in the family when your sister started the pill for the same reason. Did you want some more condoms while you\'re here? It takes a few weeks for the pill to become effective."');
    qspCall(s, 'pav_pharmacy', 'condom_addon');
    qspCall(s, 'pav_pharmacy', 'dont_tell');
    scene.actions([
      { label: 'No thanks', handler: (st: GameState) => {
    dynamicGoto(st, 'loc_s', 'args_s');
  } },
    ]);
  } },
            { label: 'Being safe', handler: (st: GameState) => {
    ((s as any).LudaQW ?? {})['knows_sex'] = 1;
    scene.img('images/locations/pavlovsk/pharmacy/apteka_aunt_1.jpg');
    if (((s as any).age ?? 0) < 20) {
      scene.text('"I\'m still using condoms," you blush. "But the pill will provide an extra safety net. I\'d really like to avoid becoming a teen mom."');
      scene.text('"I\'d like that too," she smirks, ringing up your purchase. "Did you want some more condoms while you\'re here? It takes a few weeks for the pill to become effective."');
    } else {
      scene.text('"I\'m still using condoms," you blush. "But the pill will provide an extra safety net. I\'m not ready to become a mom."');
      scene.text('"Good," she smiles, ringing up your purchase. "You should enjoy your youth without the responsibility of parenthood. Did you want some more condoms while you\'re here? It takes a few weeks for the pill to become effective."');
    }
    qspCall(s, 'pav_pharmacy', 'condom_addon');
    qspCall(s, 'pav_pharmacy', 'dont_tell');
    scene.actions([
      { label: 'No thanks', handler: (st: GameState) => {
    dynamicGoto(st, 'loc_s', 'args_s');
  } },
    ]);
  } },
          ]);
        }
      }
    }
  } },
    { label: 'Openly ask', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/pharmacy/apteka_aunt_1.jpg');
    if (((s as any).pharmacyfirstbirthcontrol ?? 0) !== 0) {
      scene.text('"Can I have some more birth control pills please?"');
      scene.text('"Of course darling," she says, ringing you up and passing the pills across the counter to you. "You\'re remembering to take them every day, right?"');
      scene.text('"Yes, Aunt Luda."');
      scene.text('"Good. Also, a little trick if you want to stop having periods: skip your placebo pills and just go straight to the next active pill. The hormones will build up enough that you\'ll no longer menstruate."');
      scene.actions([
        { label: 'Continue shopping', handler: (st: GameState) => {
    dynamicGoto(st, 'loc_s', 'args_s');
  } },
      ]);
    } else {
      (s as any).pharmacyfirstbirthcontrol = 1;
      (s as any).minut = ((s as any).minut ?? 0) + 2;
      scene.text('"Hi Aunt Luda. Can I buy some birth control pills?"');
      if (((s as any).pharmacy ?? 0)?.['morning_after'] > 2  ||  ((s as any).pharmacyfirstpregtest ?? 0) > 0) {
        scene.text('"Well it\'s about time," Luda says, rolling her eyes dramatically before swiftly grabbing a package and placing it on top of the counter. "I was wondering how many accidents you\'d go through before you\'d wise up and do the safe thing."');
        scene.actions([
          { label: 'Continue shopping', handler: (st: GameState) => {
    dynamicGoto(st, 'loc_s', 'args_s');
  } },
        ]);
      } else {
        if (((s as any).LudaQW ?? 0)?.['condoms'] === 0) {
          scene.text('"Did you use up my gift already?" Luda asks, smiling impishly. "Or did you just decide you prefer it bareback?"');
        } else {
          scene.text('TEST');
        }
        if (((s as any).stat ?? 0)?.['total_creampies'] > 0) {
          scene.actions([
            { label: 'Found out I like creampies', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/pharmacy/apteka_aunt_1.jpg');
    scene.text('"Actually I... found out I like creampies," you confess, with a wide smile. "It feels really good."');
    scene.text('"I hope you used my other gift upon discovery?" she asks.');
    if (((s as any).stat ?? 0)?.['morning_after_pill'] > 0) {
      scene.text('"I did," you nod. "It really helped me enjoy the creampie without worry."');
      scene.text('"Well," she says, returning your smile as she rings up your purchase. "That\'s what the gift was for. So you could experiment without fear. So I\'m happy it came in handy."');
      scene.text('"Remember to take these every day," she advises, handing over the pills. "It doesn\'t work unless it\'s every single day. In fact, they\'ll make it more likely for you to get pregnant instead. Which is very bad news for a girl who likes creampies."');
      scene.text('"Thank you, Aunt Luda," you say.');
      scene.actions([
        { label: 'Continue shopping', handler: (st: GameState) => {
    dynamicGoto(st, 'loc_s', 'args_s');
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Uh oh', handler: (st: GameState) => {
    scene.text('"Uhh..." You awkwardly smile at her. "Actually... I forgot to...?"');
    // TODO-QSP: dynamic text: "<<$pcs_firstname>> <<$pcs_lastname>>, what's the matter with you?!" she scorns ...
    scene.text(`"${((s as any).pcs_firstname ?? 0)} ${((s as any).pcs_lastname ?? 0)}, what's the matter with you?!" she scorns while putting her hands on her hips. "How could you forget?! This is why I gave it to you in the first place!"`);
    scene.text('Luda shakes her head, making clicking noises with her tongue to herself as she rings up your purchase.');
    scene.text('"Well <i>don\'t</i> forget to take these," she warns, handing over the pills. "Every day young lady, or they won\'t work. In fact, they\'ll make it more likely for you to get pregnant instead."');
    scene.text('"Yes, Aunt Luda," you say with another cringing smile.');
    scene.actions([
      { label: 'Continue shopping', handler: (st: GameState) => {
    dynamicGoto(st, 'loc_s', 'args_s');
  } },
    ]);
  } },
        { label: 'It was a safe day', handler: (st: GameState) => {
    scene.text('"It was a safe day," you tell her with a calm smile.');
    // TODO-QSP: dynamic text: "<<$pcs_firstname>>!" she says, putting her hands on her hips. "The calendar met...
    scene.text(`"${((s as any).pcs_firstname ?? 0)}!" she says, putting her hands on her hips. "The calendar method? Really?"`);
    scene.text('Luda shakes her head, huffing loudly as she grabs a box of pills and slaps them down on the counter.');
    scene.text('"That\'s a highly irresponsible method of birth control!" She sighs as she starts scanning the box. "At least you\'re getting off of that and onto these Just remember: you take these <i>every</i> day young lady, or they won\'t work. In fact, they\'ll make it more likely for you to get pregnant instead."');
    scene.actions([
      { label: 'Continue shopping', handler: (st: GameState) => {
    dynamicGoto(st, 'loc_s', 'args_s');
  } },
    ]);
  } },
      ]);
    }
  } },
          ]);
        }
        scene.actions([
          { label: 'Ran out', handler: (st: GameState) => {
    ((s as any).LudaQW ?? {})['knows_sex'] = 1;
    scene.img('images/locations/pavlovsk/pharmacy/apteka_aunt_1.jpg');
    scene.text('"I ran out," you admit. "Thank you for your gift by the way."');
    if (((s as any).LudaQW ?? 0)?.['condom_give_day'] - ((s as any).daystart ?? 0) < 7) {
      scene.text('"I ran out," you admit and Luda laughs in surprise.');
      scene.text('"Darling, it hasn\'t even been a week!"');
      scene.text('You casually shrug. "Turns out I really like having sex."');
      scene.text('"It runs in the family," she chuckles, smiling at you fondly as she reaches for a box of condoms and puts them into a bag. "Maybe we all carry a slut gene or something."');
    } else {
      scene.text('"I ran out," you admit. "But the pill seems like less hassle.');
    }
    scene.text('"I\'m glad it went to good use," she chuckles, ringing up your purchase. "Did you want some more condoms while you\'re here? It takes a few weeks for the pill to become effective."');
    qspCall(s, 'pav_pharmacy', 'condom_addon');
    scene.actions([
      { label: 'No thanks', handler: (st: GameState) => {
    dynamicGoto(st, 'loc_s', 'args_s');
  } },
    ]);
  } },
          { label: 'Hate condoms', handler: (st: GameState) => {
    ((s as any).LudaQW ?? {})['knows_sex'] = 1;
    scene.img('images/locations/pavlovsk/pharmacy/apteka_aunt_1.jpg');
    scene.text('"I\'m sick of using condoms," you say, grimacing. "It\'s just too much of a hassle. I appreciate the gift, but maybe you should\'ve given me a box of pills instead."');
    scene.text('"I suppose that would have been a little easier," she chuckles, ringing up your purchase. "I know you don\'t like them, but can I interest you in some more condoms while you\'re here? It takes a few weeks for the pill to become effective."');
    qspCall(s, 'pav_pharmacy', 'condom_addon');
    scene.actions([
      { label: 'No thanks', handler: (st: GameState) => {
    dynamicGoto(st, 'loc_s', 'args_s');
  } },
    ]);
  } },
          { label: 'Want to try bareback', handler: (st: GameState) => {
    ((s as any).LudaQW ?? {})['knows_sex'] = 1;
    scene.img('images/locations/pavlovsk/pharmacy/apteka_aunt_1.jpg');
    scene.text('"I want to see what it\'s like without a condom," you admit, smiling. "But I don\'t want the risk that comes with it. Not without birth control at least."');
    scene.text('"Oh, it\'s <i>wonderful</i> darling," Luda gushes. "If you\'re anything like the other girls in our family,  you\'ll love it. Did you want some more condoms while you\'re here? It takes a few weeks for the pill to become effective."');
    qspCall(s, 'pav_pharmacy', 'condom_addon');
    qspCall(s, 'pav_pharmacy', 'dont_tell');
    scene.actions([
      { label: 'No thanks', handler: (st: GameState) => {
    dynamicGoto(st, 'loc_s', 'args_s');
  } },
    ]);
  } },
          { label: 'Prefer bareback', handler: (st: GameState) => {
    ((s as any).LudaQW ?? {})['knows_sex'] = 1;
    scene.img('images/locations/pavlovsk/pharmacy/apteka_aunt_1.jpg');
    scene.text('"Bareback," you admit, smiling. "It\'s not the same with a condom. I can\'t <i>feel</i> him inside me. I appreciate the gift, but maybe you should\'ve given me a box of pills instead."');
    scene.text('"I probably should have," she chuckles. "I should have guessed it runs in the family when your sister started the pill for the same reason. Did you want some more condoms while you\'re here? It takes a few weeks for the pill to become effective."');
    qspCall(s, 'pav_pharmacy', 'condom_addon');
    scene.actions([
      { label: 'No thanks', handler: (st: GameState) => {
    dynamicGoto(st, 'loc_s', 'args_s');
  } },
    ]);
  } },
          { label: 'Being safe', handler: (st: GameState) => {
    ((s as any).LudaQW ?? {})['knows_sex'] = 1;
    scene.img('images/locations/pavlovsk/pharmacy/apteka_aunt_1.jpg');
    if (((s as any).age ?? 0) < 20) {
      scene.text('"I\'m still using condoms," you shrug. "But the pill will provide an extra safety net. I\'d really like to avoid becoming a teen mom."');
      scene.text('"I\'d like that too," she smirks, ringing up your purchase. "Did you want some more condoms while you\'re here? It takes a few weeks for the pill to become effective."');
    } else {
      scene.text('"I\'m still using condoms," you shrug. "But the pill will provide an extra safety net. I\'m not ready to become a mom."');
      scene.text('"Good," she smiles, ringing up your purchase. "You should enjoy your youth without the responsibility of parenthood. Did you want some more condoms while you\'re here? It takes a few weeks for the pill to become effective."');
    }
    qspCall(s, 'pav_pharmacy', 'condom_addon');
    scene.actions([
      { label: 'No thanks', handler: (st: GameState) => {
    dynamicGoto(st, 'loc_s', 'args_s');
  } },
    ]);
  } },
          { label: 'It\'s for my cycle', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/pharmacy/apteka_aunt_1.jpg');
    if (((s as any).LudaQW ?? 0)?.['knows_sex'] === 0) {
      scene.text('"I just want to regulate my cycle, Aunt Luda," you protest. "I\'m not having sex."');
    } else {
      scene.text('"I just want to regulate my cycle, Aunt Luda," you lie shamelessly. "I\'m not having sex."');
    }
    scene.text('She smiles at you with a suspicious twist at the corner of her mouth.');
    scene.text('"Well, I can\'t prove otherwise, so I suppose I\'ll just have to take you at your word..."');
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

function enterBuyPregTest(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pharmacy_timers ?? 0)?.['preg_test'] === ((s as any).daystart ?? 0)) {
    scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc_s', 'args_s'); } }]);
  } else {
    ((s as any).pharmacy_timers ?? {})['preg_test'] = ((s as any).daystart ?? 0);
  }
  if (((s as any).LudaQW ?? 0)?.['KnowsSexActive'] < 10) {
    ((s as any).LudaQW ?? {})['KnowsSexActive'] = 10;
  }
  ((s as any).LudaQW ?? {})['knows_sex'] = 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Pharmacy</b></center>');
  scene.img('images/locations/pavlovsk/pharmacy/apteka_aunt_1.jpg');
  scene.text('You awkwardly avoid eye contact, your stomach a bundle of nerves, stressing you out with what you have to ask her for.');
  if ((!((s as any).pharmacyfirstpregtest ?? 0))) {
    (s as any).pharmacyfirstpregtest = 1;
    if ((!((s as any).preziktype ?? 0))) {
      ((s as any).mc_inventory ?? {})['equipped_condoms'] = (((s as any).mc_inventory ?? {})['equipped_condoms'] ?? 0) + (5);
    } else {
      if (((s as any).preziktype ?? 0) === 1  ||  ((s as any).preziktype ?? 0) === 2) {
        ((s as any).mc_inventory ?? {})['normal_condoms'] = (((s as any).mc_inventory ?? {})['normal_condoms'] ?? 0) + (5);
      }
    }
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    ((s as any).mc_inventory ?? {})['normal_condoms'] = (((s as any).mc_inventory ?? {})['normal_condoms'] ?? 0) + (5);
    if (((s as any).fame ?? 0)?.['pav_slut'] > 150) {
      scene.text('"Aunt Luda... I need... I need a pregnancy test."');
      scene.text('You glance up expecting an explosive reaction of surprise, but are surprised when you see her looking at you with what appears to be disappointed resignation.');
      // TODO-QSP: dynamic text: "I was wondering if this might happen," she sighs. When she notices your surpris...
      scene.text(`"I was wondering if this might happen," she sighs. When she notices your surprised look she adds, "I'm not deaf, ${((s as any).pcs_nickname ?? 0)}. I can hear just about everyone in Pavlovsk calling you a ${((s as any).gnikname ?? 0)}. I had just hoped you were being safe."`);
      scene.text('"Well... but I..." Deeply embarrassed that your aunt —and apparently everyone else in town— knows about your promiscuous behavior, you\'re not really sure what to say, but she gives you a rueful smile.');
      // TODO-QSP: dynamic text: "Don't worry, <<$pcs_nickname>>. I'm not here to judge. Accidents happen. Goodne...
      scene.text(`"Don't worry, ${((s as any).pcs_nickname ?? 0)}. I'm not here to judge. Accidents happen. Goodness knows your sister's living proof of that." She puts the test into a bag before sliding it across the counter towards you.`);
    } else {
      scene.text('"Aunt Luda... I need... I need a pregnancy test."');
      // TODO-QSP: dynamic text: Her eyes go wide. "<<$pcs_nickname>>! What happened??"
      scene.text(`Her eyes go wide. "${((s as any).pcs_nickname ?? 0)}! What happened??"`);
      scene.text('"I know, Aunt," you say, deeply embarrassed. "I just... made a mistake..."');
      scene.text('"I guess we all make those," she sighs before taking a small box off the shelf. "Goodness knows your sister\'s living proof of that. Literally."');
    }
    scene.actions([
      { label: 'Don\'t tell <<$npc_nickname[\'A29\']>>', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/pharmacy/apteka_aunt_1.jpg');
    ((s as any).LudaQW ?? {})['dont_tell'] = 1;
    if (((s as any).momslut ?? 0) >= 1) {
      // TODO-QSP: dynamic text: "Please don't tell <<$npc_nickname['A29']>>. She wouldn't understand."
      scene.text(`"Please don't tell ${((s as any).npc_nickname ?? 0)?.['A29']}. She wouldn't understand."`);
      scene.text('Your aunt gives you an odd smile. "You might be surprised dear, but I promise this is our little secret."');
      // TODO-QSP: dynamic text: You sigh a little. "Yes, I know all about <<$npc_nickname['A29']>>. I just don't...
      scene.text(`You sigh a little. "Yes, I know all about ${((s as any).npc_nickname ?? 0)?.['A29']}. I just don't want to get an earful from her is all."`);
      scene.text('Luda nods and hands over the package. "It\'s our secret for now, though if that test comes back positive, there\'s nothing that will stop her from noticing when your belly starts to grow. Either way, take these."');
    } else {
      scene.text('"You might be surprised dear," your aunt says with an odd smile. "But I promise this is our little secret. At least, if that test is negative. If it comes back positive, there\'s nothing that will stop her from noticing when your belly starts to grow. Either way, take these."');
    }
    scene.text('Luda pushes a box of condoms across the counter towards you. "I won\'t charge you for these, but <i>please</i> use them. Let\'s not let this happen again, shall we?"');
    ((s as any).mc_inventory ?? {})['normal_condoms'] = (((s as any).mc_inventory ?? {})['normal_condoms'] ?? 0) + (10);
    scene.actions([
      { label: 'Continue shopping', handler: (st: GameState) => {
    dynamicGoto(st, 'loc_s', 'args_s');
  } },
    ]);
  } },
    ]);
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 4) + 2);
    scene.actions([
      { label: 'Meekly ask', handler: (st: GameState) => {
    scene.text('"I need... I need another pregnancy test, Aunt Luda..." you stammer.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>..." she says, looking disappointed. "When are you going to le...
    scene.text(`"${((s as any).pcs_nickname ?? 0)}..." she says, looking disappointed. "When are you going to learn?"`);
    scene.text('You look down, avoiding her gaze as she rings you up.');
    scene.text('"I\'m not trying to lecture you, but really! Be careful!" she says as she runs the barcode across the scanner. "Or soon there\'s going to be more than just sperm swimming around in your belly."');
    scene.actions([
      { label: 'Continue shopping', handler: (st: GameState) => {
    dynamicGoto(st, 'loc_s', 'args_s');
  } },
    ]);
  } },
      { label: 'Openly ask', handler: (st: GameState) => {
    scene.text('"I need another pregnancy test, Aunt Luda," you say shamelessly.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>..." she says, looking disappointed. "When are you going to le...
    scene.text(`"${((s as any).pcs_nickname ?? 0)}..." she says, looking disappointed. "When are you going to learn?"`);
    scene.text('"It\'s just a mistake, auntie," you say with a shrug, causing Luda to shake her head.');
    scene.text('"I\'m not trying to lecture you, but really! Be careful!" she says as she runs the barcode across the scanner. "Or soon there\'s going to be more than just sperm swimming around in your belly."');
    scene.actions([
      { label: 'Continue shopping', handler: (st: GameState) => {
    dynamicGoto(st, 'loc_s', 'args_s');
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterBuyLube(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pharmacy_timers ?? 0)?.['lube'] === ((s as any).daystart ?? 0)) {
    scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc_s', 'args_s'); } }]);
  } else {
    ((s as any).pharmacy_timers ?? {})['lube'] = ((s as any).daystart ?? 0);
  }
  if (((s as any).LudaQW ?? 0)?.['KnowsSexActive'] < 10) {
    ((s as any).LudaQW ?? {})['KnowsSexActive'] = (((s as any).LudaQW ?? {})['KnowsSexActive'] ?? 0) + (1);
  }
  qspCall(s, 'stat', '');
  scene.text('<center><b>Pharmacy</b></center>');
  scene.img('images/locations/pavlovsk/pharmacy/apteka_aunt_1.jpg');
  if (((s as any).pharmacy ?? 0)?.['first_purchase'] === 0) {
    ((s as any).pharmacy ?? {})['first_purchase'] = 1;
    scene.text('You awkwardly avoid eye contact, letting your gaze "wander" around the pharmacy, pretending you don\'t know what you\'re here for. Finally, you take a deep breath, feeling your cheeks redden.');
  }
  if ((!((s as any).pharmacyfirstlube ?? 0))) {
    (s as any).pharmacyfirstlube = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    if (((s as any).fame ?? 0)?.['pav_slut'] > 150) {
      scene.text('"Erm... yes aunt. I need some <i>stuff</i>," putting extra emphasis on the word while looking at the lube.');
      // TODO-QSP: dynamic text: "I was wondering if you were going to ask me for this," she says with a smile. W...
      scene.text(`"I was wondering if you were going to ask me for this," she says with a smile. When she notices your surprised look she adds, "When everyone in Pavlovsk is calling you a ${((s as any).gnikname ?? 0)}, it was only a matter of time before you started letting boys go in the back door."`);
      scene.text('"Well... but I..." Deeply embarrassed that your aunt —and apparently everyone else in town— knows about your promiscuous behavior, you\'re not really sure what to say. She chuckles and gives you a reassuring smile.');
      // TODO-QSP: dynamic text: "Don't worry <<$pcs_nickname>>, I'm just teasing," she giggles. The register bee...
      scene.text(`"Don't worry ${((s as any).pcs_nickname ?? 0)}, I'm just teasing," she giggles. The register beeps loudly as she runs the tube of lubricant across the scanner. "I'm not here to judge. Goodness knows, I'd be one to talk. I go through two of these a month!"`);
    } else {
      scene.text('"Erm... yes aunt. I need some <i>stuff</i>," putting extra emphasis on the word, while looking at the lube.');
      // TODO-QSP: dynamic text: "Trying to get around your mother's rules by using your ass, <<$pcs_nickname>>?"...
      scene.text(`"Trying to get around your mother's rules by using your ass, ${((s as any).pcs_nickname ?? 0)}?" she asks, smirking.`);
      scene.text('Your face manages to heat up even more. "I, uhh..."');
      scene.text('"Don\'t worry," she chuckles.  The register beeps loudly as she runs the tube of lubricant across the scanner. "Your sister asked me for the same thing when she was your age. A little earlier, in fact."');
    }
  } else {
    if (((s as any).pcs_inhib ?? 0) < 50) {
      scene.text('"Hi Aunt Luda, I need some more lube," you tell her while slightly blushing.');
      scene.text('"If you\'re going through it fast, you might want to tell the boys to give your poor butt a rest once in a while," she chuckles. You blush harder, avoiding her gaze as she runs the tube of lubricant across the scanner and the register beeps loudly.');
    } else {
      scene.text('"Hi Aunt Luda, I need some more lube."');
      scene.text('"If you\'re going through it fast, you might want to tell the boys to give your poor butt a rest once in a while," she chuckles.');
      scene.text('You roll your eyes at her teasing. "As long as I have this, my butt will be just fine."');
    }
  }
  scene.actions([
    { label: 'Continue shopping', handler: (st: GameState) => {
    dynamicGoto(st, 'loc_s', 'args_s');
  } },
  ]);
  scene.build();
}

function enterBuyMorningAfter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pharmacy_timers ?? 0)?.['morning_after'] === ((s as any).daystart ?? 0)) {
    scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc_s', 'args_s'); } }]);
  } else {
    ((s as any).pharmacy_timers ?? {})['morning_after'] = ((s as any).daystart ?? 0);
  }
  if (((s as any).LudaQW ?? 0)?.['KnowsSexActive'] < 10) {
    ((s as any).LudaQW ?? {})['KnowsSexActive'] = (((s as any).LudaQW ?? {})['KnowsSexActive'] ?? 0) + (2);
  }
  qspCall(s, 'stat', '');
  scene.text('<center><b>Pharmacy</b></center>');
  scene.img('images/locations/pavlovsk/pharmacy/apteka_aunt_1.jpg');
  if (((s as any).pharmacy ?? 0)?.['first_purchase'] === 0) {
    ((s as any).pharmacy ?? {})['first_purchase'] = 1;
    scene.text('You awkwardly avoid eye contact, letting your gaze "wander" around the pharmacy, pretending you don\'t know what you\'re here for.');
  }
  scene.actions([
    { label: 'Meekly ask', handler: (st: GameState) => {
    if (((s as any).pharmacy ?? 0)?.['morning_after'] === 0) {
      ((s as any).pharmacy ?? {})['morning_after'] = (((s as any).pharmacy ?? {})['morning_after'] ?? 0) + (1);
      (s as any).minut = ((s as any).minut ?? 0) + 2;
      scene.text('"Aunt Luda..." You take a deep breath. "I need some Plan B..."');
      if (((s as any).fame ?? 0)?.['pav_slut'] > 150) {
        // TODO-QSP: dynamic text: "I was wondering if this was going to happen," she sighs, shaking her head. You ...
        scene.text(`"I was wondering if this was going to happen," she sighs, shaking her head. You look at her in confusion and she gives you a flat stare. "Come on, ${((s as any).pcs_nickname ?? 0)}. Everyone in Pavlovsk calls you a ${((s as any).gnikname ?? 0)}. You think I haven't heard?"`);
      } else {
        // TODO-QSP: dynamic text: Her eyes go wide in shock. "<<$pcs_nickname>>! What happened?" She immediately d...
        scene.text(`Her eyes go wide in shock. "${((s as any).pcs_nickname ?? 0)}! What happened?" She immediately dashes over towards the birth control products.`);
      }
    } else {
      if (((s as any).pcs_inhib ?? 0) < 50) {
        scene.text('"Aunt Luda," you whisper. "I need another plan B pill."');
        scene.text('"Again?!" she asks, aghast. Your face heats up in a crimson blush.');
      } else {
        scene.text('"Hi Aunt Luda," you say, feeling your face already begin to heat up. "I need another plan B pill."');
        scene.text('"Again?!" she asks, aghast. Your only response is to give a sort of sorry shrug.');
      }
      // TODO-QSP: dynamic text: "How many times are you going to make the same mistake, <<$pcs_nickname>>?" She ...
      scene.text(`"How many times are you going to make the same mistake, ${((s as any).pcs_nickname ?? 0)}?" She shakes her head as she scans the box with a loud beep. "You need to buy some birth control already. It really isn't that hard to just take a pill every day you know."`);
    }
    if (((s as any).stat ?? 0)?.['last_broken_condom'] >= ((s as any).daystart ?? 0) - 3) {
      scene.actions([
        { label: 'The condom broke', handler: (st: GameState) => {
    qspCall(st, 'pav_pharmacy', 'buy_morning_after_condom_broke_meek');
  } },
      ]);
    }
    if (((s as any).birth_control ?? 0)?.['condom_stealth'] >= ((s as any).daystart ?? 0) - 3) {
      scene.actions([
        { label: 'I got stealthed', handler: (st: GameState) => {
    qspCall(st, 'pav_pharmacy', 'morning_after_stealth_meek');
  } },
      ]);
    }
    scene.actions([
      { label: 'It\'s for emergencies', goto: ['pav_pharmacy', 'morning_after_emergency_embarrassed'] },
      { label: 'I made a mistake', goto: ['pav_pharmacy', 'morning_after_mistake_embarrassed'] },
      { label: 'He didn\'t pull out', goto: ['pav_pharmacy', 'morning_after_no_pullout_meek'] },
      { label: 'He didn\'t pull out (annoyed)', goto: ['pav_pharmacy', 'morning_after_no_pullout_annoyed'] },
    ]);
  } },
    { label: 'Openly ask', handler: (st: GameState) => {
    if (((s as any).pharmacy ?? 0)?.['morning_after'] === 0) {
      ((s as any).pharmacy ?? {})['morning_after'] = (((s as any).pharmacy ?? {})['morning_after'] ?? 0) + (1);
      (s as any).minut = ((s as any).minut ?? 0) + 2;
      scene.text('"I need a Plan B pill, Aunt Luda," you say casually.');
      if (((s as any).fame ?? 0)?.['pav_slut'] > 150) {
        // TODO-QSP: dynamic text: "I was wondering when this was going to happen," she sighs, shaking her head. Yo...
        scene.text(`"I was wondering when this was going to happen," she sighs, shaking her head. You look at her in confusion and she gives you a flat stare. "Come on, ${((s as any).pcs_nickname ?? 0)}. I hear your name and '${((s as any).gnikname ?? 0)}' in the same sentence practically every other day. It's not hard to put the pieces together."`);
        scene.text('"I guess I have been getting around a lot," you smile sheepishly. Luda rolls her eyes.');
        scene.text('"Based on what I\'ve heard, that\'s putting it lightly." She slaps the package down on the counter.');
      } else {
        // TODO-QSP: dynamic text: Her eyes go wide with shock. "<<$pcs_nickname>>! What happened?" She immediately...
        scene.text(`Her eyes go wide with shock. "${((s as any).pcs_nickname ?? 0)}! What happened?" She immediately dashes over towards the birth control products.`);
      }
      if (((s as any).stat ?? 0)?.['last_broken_condom'] >= ((s as any).daystart ?? 0) - 3) {
        scene.actions([
          { label: 'The condom broke', handler: (st: GameState) => {
    qspCall(st, 'pav_pharmacy', 'buy_morning_after_condom_broke_meek');
  } },
        ]);
      }
      if (((s as any).birth_control ?? 0)?.['condom_stealth'] >= ((s as any).daystart ?? 0) - 3) {
        scene.actions([
          { label: 'I got stealthed', handler: (st: GameState) => {
    qspCall(st, 'pav_pharmacy', 'morning_after_stealth_open');
  } },
        ]);
      }
      scene.actions([
        { label: 'It\'s for emergencies', goto: ['pav_pharmacy', 'morning_after_emergency_open'] },
        { label: 'I made a mistake', goto: ['pav_pharmacy', 'morning_after_mistake_open'] },
        { label: 'He didn\'t pull out (annoyed)', goto: ['pav_pharmacy', 'morning_after_no_pullout_annoyed'] },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 4) + 2);
      scene.text('"Hi Aunt Luda," you say casually. "I need another Plan B pill."');
      if (((s as any).pcs_inhib ?? 0) < 50) {
        scene.text('"Again?!" she asks, aghast. Your face heats up in a crimson blush.');
      } else {
        scene.text('"Again?!" she asks, aghast. Your only response is to give a sort of sorry shrug.');
      }
      // TODO-QSP: dynamic text: "How many times are you going to make the same mistake, <<$pcs_nickname>>?" She ...
      scene.text(`"How many times are you going to make the same mistake, ${((s as any).pcs_nickname ?? 0)}?" She shakes her head as she scans the box with a loud beep. "You need to buy some birth control already. It really isn't that hard to just take a pill every day you know."`);
      if (((s as any).stat ?? 0)?.['last_broken_condom'] >= ((s as any).daystart ?? 0) - 3) {
        scene.actions([
          { label: 'The condom broke', goto: ['pav_pharmacy', 'buy_morning_after_condom_broke_open'] },
        ]);
      }
      if (((s as any).birth_control ?? 0)?.['condom_stealth'] >= ((s as any).daystart ?? 0) - 3) {
        scene.actions([
          { label: 'I got stealthed', handler: (st: GameState) => {
    qspCall(st, 'pav_pharmacy', 'morning_after_stealth_open');
  } },
        ]);
      }
      scene.actions([
        { label: 'Continue shopping', handler: (st: GameState) => {
    dynamicGoto(st, 'loc_s', 'args_s');
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterMorningAfterEmergencyEmbarrassed(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Pharmacy</b></center>');
  scene.img('images/locations/pavlovsk/pharmacy/apteka_aunt_1.jpg');
  if (((s as any).pharmacy ?? 0)?.['morning_after'] > 1) {
    ((s as any).pharmacy ?? {})['morning_after'] = (((s as any).pharmacy ?? {})['morning_after'] ?? 0) - (1);
  }
  if ((!((s as any).pharmacyfirstbirthcontrol ?? 0))) {
    scene.text('"Nothing happened!" you say, quickly rushing to reassure her. "I- I uhmm... I just want it for emergencies... Just in case, you know?"');
    scene.text('"And what about the one you already have?" she asks with a raised eyebrow. "The one I gave you for an emergency?"');
    if (((s as any).stat ?? 0)?.['morning_after_pill'] >= 1) {
      scene.actions([
        { label: 'Uhh...', handler: (st: GameState) => {
    scene.text('"I... uhh..." you stammer.');
    scene.text('"\'Nothing happened\' my fat ass," Luda rolls her eyes to the heavens and grabs the pill you requested off the shelf behind her. "You already used it, didn\'t you?"');
    scene.text('"Erm..." You blush brightly, deeply embarrassed."');
    scene.text('"You could at least be honest with me," she sighs. "Better to be honest about something bad you did than lie about it and let it get worse. <i>Especially</i> with this sort of thing."');
    scene.text('"Yes Aunt..." you mumble guiltily.');
    scene.text('"Why don\'t you buy some birth control pills while you\'re here?" she insists. "Then you don\'t have to worry about this kind of thing. It takes several weeks to become effective so the sooner you start, the better."');
    qspCall(s, 'pav_pharmacy', 'birth_control_addon');
  } },
      ]);
    } else {
      scene.actions([
        { label: '"I forgot"', handler: (st: GameState) => {
    scene.text('"Oh!"');
    scene.text('You blink in surprise before reaching into your bag and rummaging around.');
    scene.text('"It\'s... right here," you mumble sheepishly. "I... forgot you gave it to me."');
    scene.text('"Well that\'s a little worrisome," she responds dryly as she pulls a box off the shelf behind her. "All the morning after pills in the world don\'t matter if you forget they\'re there."');
    scene.text('"Yes Aunt..." you sigh.');
    scene.text('"Why don\'t you buy some birth control pills while you\'re here?" she insists. "Then you don\'t have to worry about this kind of thing. It takes several weeks to become effective so the sooner you start, the better."');
    qspCall(s, 'pav_pharmacy', 'birth_control_addon');
  } },
        { label: 'Disaster planning', handler: (st: GameState) => {
    scene.text('"I still have it here," you say, smiling sheepishly as you pull it out of your bag to show her. "I\'m just being a little paranoid and planning for disaster."');
    scene.text('"Well at least that puts my fears that you were lying to me to rest," she chuckles. "You\'re clearly taking your personal safety very seriously. But to be extra safe, why don\'t you buy some birth control pills while you\'re here? Then you don\'t have to worry about this kind of thing at all. It takes several weeks to become effective so the sooner you start, the better."');
    qspCall(s, 'pav_pharmacy', 'birth_control_addon');
  } },
      ]);
    }
  } else {
    if (((s as any).birth_control ?? 0)?.['think_safe'] !== 1  &&  ((s as any).pillcon2 ?? 0) > 0) {
      scene.text('"Nothing happened!" you say, quickly rushing to reassure her. "I- I uhmm... I just want it for emergencies... Just in case something happens before the pill fully kicks in?"');
    } else {
      scene.text('"Nothing happened!" you say, quickly rushing to reassure her. "I- I uhmm... I just want it for emergencies... Like if I forget my birth control or something..."');
    }
    // TODO-QSP: dynamic text: Luda heaves a mighty sigh. "My goodness, you need to lead with that next time, <...
    scene.text(`Luda heaves a mighty sigh. "My goodness, you need to lead with that next time, ${((s as any).pcs_firstname ?? 0)}! I nearly had a heart attack!"`);
    scene.text('"Sorry," you cringe as she rings you up, shaking her head.');
    scene.actions([
      { label: 'Continue shopping', handler: (st: GameState) => {
    dynamicGoto(st, 'loc_s', 'args_s');
  } },
    ]);
  }
  scene.build();
}

function enterMorningAfterEmergencyOpen(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Pharmacy</b></center>');
  scene.img('images/locations/pavlovsk/pharmacy/apteka_aunt_1.jpg');
  if (((s as any).pharmacy ?? 0)?.['morning_after'] > 1) {
    ((s as any).pharmacy ?? {})['morning_after'] = (((s as any).pharmacy ?? {})['morning_after'] ?? 0) - (1);
  }
  if ((!((s as any).pharmacyfirstbirthcontrol ?? 0))) {
    scene.text('"Nothing happened, Aunt Luda," you say with a relaxed smile. "I just want one for emergencies. In case a condom breaks or something."');
    // TODO-QSP: dynamic text: Luda heaves a mighty sigh. "My goodness, you need to lead with that next time, <...
    scene.text(`Luda heaves a mighty sigh. "My goodness, you need to lead with that next time, ${((s as any).pcs_firstname ?? 0)}! I nearly had a heart attack!"`);
    scene.text('"Sorry," you say with an only slightly guilty grin.');
    scene.text('"If you really want to be safe, you should start on the pill. I can give you a box right now for you to start. The sooner the better, it takes several weeks for it to become effective."');
    qspCall(s, 'pav_pharmacy', 'birth_control_addon');
  } else {
    if (((s as any).birth_control ?? 0)?.['think_safe'] !== 1  &&  ((s as any).pillcon2 ?? 0) > 0) {
      scene.text('"Nothing happened, Aunt Luda," you say with a relaxed smile. "I just want one for emergencies. In case a condom breaks before my birth control kicks in."');
    } else {
      scene.text('"Nothing happened, Aunt Luda," you say with a relaxed smile. "I just want one for emergencies. In case I get drunk and forget to take my birth control or something."');
    }
    // TODO-QSP: dynamic text: Luda heaves a mighty sigh. "My goodness, you need to lead with that next time, <...
    scene.text(`Luda heaves a mighty sigh. "My goodness, you need to lead with that next time, ${((s as any).pcs_firstname ?? 0)}! I nearly had a heart attack!"`);
    scene.text('"Sorry," you grin back.');
    scene.actions([
      { label: 'Continue shopping', handler: (st: GameState) => {
    dynamicGoto(st, 'loc_s', 'args_s');
  } },
    ]);
  }
  scene.build();
}

function enterMorningAfterMistakeEmbarrassed(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Pharmacy</b></center>');
  scene.img('images/locations/pavlovsk/pharmacy/apteka_aunt_1.jpg');
  if (((s as any).fame ?? 0)?.['pav_slut'] > 150) {
    scene.text('"I\'m normally careful!" you protest, cheeks burning with embarrassment that even Luda knows about your promiscuous behavior. "I just... Made a mistake this time..."');
    scene.text('"I guess we all make those," she sighs again, walking across the back of the counter and taking a small box off the shelf before bringing it back. "Goodness knows, your sister\'s quite living proof of that. Literally."');
  } else {
    scene.text('"I know, Aunt," you blush in embarrassment. "I just... Made a mistake..."');
    if (((s as any).pharmacy ?? 0)?.['morning_after'] > 3) {
      scene.text('"One or two mistakes is understandable, but at some point you need to start taking responsibility for yourself," she chides, eyeballing you as she takes a small box off the shelf. "I may be ageing, but I can still count."');
    } else {
      scene.text('"I guess we all make those," she says while taking a small box off the shelf. "Goodness knows, your sister\'s living proof of that. Literally."');
    }
  }
  qspCall(s, 'pav_pharmacy', 'buy_morning_after_end');
  qspCall(s, 'pav_pharmacy', 'morning_after_warning');
  scene.build();
}

function enterMorningAfterNoPulloutMeek(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Pharmacy</b></center>');
  scene.img('images/locations/pavlovsk/pharmacy/apteka_aunt_1.jpg');
  scene.text('"He uhh... forgot to pull out?" you say with chagrin.');
  scene.text('"Tsk~! Honestly!" your aunt chides as she pulls the morning after pills down from a shelf. "You should have better common sense than to just trust a boy will pull out because you asked him."');
  scene.text('Luda seems a little mad at you as she adds it to your purchase.');
  qspCall(s, 'pav_pharmacy', 'morning_after_warning');
  scene.build();
}

function enterMorningAfterNoPulloutAnnoyed(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Pharmacy</b></center>');
  scene.img('images/locations/pavlovsk/pharmacy/apteka_aunt_1.jpg');
  scene.text('"He told me he was going to pull out, but he didn\'t," you sigh bitterly, letting your annoyance show.');
  scene.text('"Tsk~! Honestly!" your aunt chides as she pulls the morning after pills down from a shelf. "You should have better common sense than to just trust a boy to pull out because you asked him."');
  scene.text('Luda seems a little mad at you as she adds it to your purchase.');
  qspCall(s, 'pav_pharmacy', 'morning_after_warning');
  scene.build();
}

function enterMorningAfterMistakeOpen(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Pharmacy</b></center>');
  scene.img('images/locations/pavlovsk/pharmacy/apteka_aunt_1.jpg');
  if (((s as any).fame ?? 0)?.['pav_slut'] > 150) {
    scene.text('"I\'m normally careful!" you protest, a little annoyed that she\'s making assumptions about you. "I just made a mistake this time."');
    scene.text('"I guess we all make those," she sighs as she adds it to your purchase.');
  } else {
    scene.text('"I just made a mistake," you shrug. "Surely a girl\'s allowed one or two of those, isn\'t she?"');
    if (((s as any).pharmacy ?? 0)?.['morning_after'] > 3) {
      scene.text('"You\'ve had more than one or two," she says, eyeballing you as she takes a small box off the shelf. "I may be ageing, but my memory isn\'t that bad."');
    } else {
      scene.text('"One mistake can still have lasting consequences," she says while taking a small box off the shelf. "Goodness knows, your sister\'s living proof of that. Literally."');
    }
  }
  qspCall(s, 'pav_pharmacy', 'buy_morning_after_end');
  qspCall(s, 'pav_pharmacy', 'morning_after_warning');
  scene.build();
}

function enterMorningAfterStealthMeek(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Pharmacy</b></center>');
  scene.img('images/locations/pavlovsk/pharmacy/apteka_aunt_1.jpg');
  scene.text('"The guy I was with stealthed me," you say embarrassedly. "He was, erm, \'behind\' me and I asked him to put on a condom. He lied and said he did before he, uhh... \'finished\' in me..."');
  scene.text('"Oh darling," Luda says, shaking her head sympathetically. "Men are pigs. That\'s why you can\'t let down your guard around them. If you want them to use a condom, you need to put it on them yourself. Can\'t trust them otherwise. It only takes one."');
  scene.text('Luda adds the pill to your purchase.');
  scene.text('"But how did you not notice?" she asks, puzzled. "Couldn\'t you feel the difference? It\'s the reason why your mother and I don\'t use condoms."');
  scene.actions([
    { label: 'Continue shopping', handler: (st: GameState) => {
    dynamicGoto(st, 'loc_s', 'args_s');
  } },
  ]);
  scene.build();
}

function enterMorningAfterStealthOpen(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Pharmacy</b></center>');
  scene.img('images/locations/pavlovsk/pharmacy/apteka_aunt_1.jpg');
  scene.text('"It\'s not my fault!" you say. "The guy stealthed me! He mounted me from behind and lied when I told him to put on a condom. Bastard even had the nerve to cum inside me after!"');
  scene.text('"Oh darling," Luda says, shaking her head sympathetically. "Men are pigs. That\'s why you can\'t let down your guard around them. If you want them to use a condom, you need to put it on them yourself. Can\'t trust them otherwise. It only takes one."');
  scene.text('Luda adds the pill to your purchase.');
  scene.text('"But how did you not notice?" she asks, puzzled. "Couldn\'t you feel the difference? It\'s the reason why your mother and I don\'t use condoms."');
  scene.actions([
    { label: 'Continue shopping', handler: (st: GameState) => {
    dynamicGoto(st, 'loc_s', 'args_s');
  } },
  ]);
  scene.build();
}

function enterBuyMorningAfterCondomBrokeMeek(s: GameState, scene: SceneBuilder): void {
  if (((s as any).LudaQW ?? 0)?.['broken_condoms'] === 0) {
    scene.text('"The condom broke," you mumble embarrassedly.');
    scene.text('"Well, I suppose that\'s not your fault," Luda sighs as she adds the pill to your purchase. "But that\'s why it\'s better to double up your protection."');
  } else {
    scene.text('"The condom broke again," you mumble embarrassedly.');
    if (((s as any).LudaQW ?? 0)?.['broken_condoms'] <= 5) {
      scene.text('"You must have some bad luck," she says, shaking her head as she adds the pill to your purchase. "Are you sure you don\'t want to start the pill?"');
    } else {
      // TODO-QSP: dynamic text: "This is just getting ridiculous," she huffs in exasperation as she adds the pil...
      scene.text(`"This is just getting ridiculous," she huffs in exasperation as she adds the pill to your purchase. "Just start the bloody pill already, ${((s as any).pcs_firstname ?? 0)}!"`);
    }
  }
  ((s as any).LudaQW ?? {})['broken_condoms'] = (((s as any).LudaQW ?? {})['broken_condoms'] ?? 0) + (1);
  scene.actions([
    { label: 'Continue shopping', handler: (st: GameState) => {
    dynamicGoto(st, 'loc_s', 'args_s');
  } },
  ]);
  scene.build();
}

function enterBuyMorningAfterCondomBrokeOpen(s: GameState, scene: SceneBuilder): void {
  if (((s as any).LudaQW ?? 0)?.['broken_condoms'] === 0) {
    scene.text('"It\'s not my fault," you shrug. "The condom broke."');
    scene.text('"Well, I suppose that\'s does happen from time to time," Luda sighs as she adds the pill to your purchase. "But that\'s why it\'s better to double up your protection."');
  } else {
    scene.text('"The condom broke again," you shrug.');
    if (((s as any).LudaQW ?? 0)?.['broken_condoms'] <= 5) {
      scene.text('"You must have some bad luck," she says, shaking her head as she adds the pill to your purchase. "Are you sure you don\'t want to start the pill?"');
    } else {
      // TODO-QSP: dynamic text: "This is just getting ridiculous," she huffs in exasperation as she adds the pil...
      scene.text(`"This is just getting ridiculous," she huffs in exasperation as she adds the pill to your purchase. "Just start the bloody pill already ${((s as any).pcs_firstname ?? 0)}!"`);
    }
  }
  ((s as any).LudaQW ?? {})['broken_condoms'] = (((s as any).LudaQW ?? {})['broken_condoms'] ?? 0) + (1);
  scene.actions([
    { label: 'Continue shopping', handler: (st: GameState) => {
    dynamicGoto(st, 'loc_s', 'args_s');
  } },
  ]);
  scene.build();
}

function enterBuyMorningAfterRaped(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Pharmacy</b></center>');
  scene.img('images/locations/pavlovsk/pharmacy/apteka_aunt_1.jpg');
  if (((s as any).fame ?? 0)?.['pav_slut'] > 150) {
    scene.text('"Well... but I..." You\'re not really sure what to say now and your words become a blubbering mess. You\'re deeply embarrassed that even Luda knows about your promiscuous behavior.');
    scene.text('"I guess it runs in the family," she sighs again. "Maybe we all carry a slut gene or something. I\'d hoped you were being safe, but I suppose we all slip up sometimes."');
    scene.text('She walks across the back of the counter, taking a small box off the shelf and bringing it back. "Goodness knows, your sister\'s living proof of that."');
    scene.text('You nod shamefully.');
  } else {
    scene.text('You blush in embarrassment. "I know, aunt... I just... made a mistake."');
    scene.text('"Well, we\'re all guilty of making those sometimes," she says while taking a small box off the shelf. "Goodness knows, your sister\'s living proof of that."');
    scene.text('She hands you the box. "Take this as soon as possible. It\'s most effective the sooner you take it. And maybe you should also buy some birth control pills while you\'re here? Then this just has to be a one time thing."');
    scene.text('You nod shamefully.');
  }
  // TODO-QSP: dynamic text: "Please don't tell <<$npc_nickname['A29']>>. She wouldn't understand."
  scene.text(`"Please don't tell ${((s as any).npc_nickname ?? 0)?.['A29']}. She wouldn't understand."`);
  if (((s as any).momslut ?? 0) >= 1) {
    scene.text('Your aunt gives you an odd look. "You might be surprised, dear."');
    // TODO-QSP: dynamic text: You sigh a little. "Yes, I know all about <<$npc_nickname['A29']>>. I just don't...
    scene.text(`You sigh a little. "Yes, I know all about ${((s as any).npc_nickname ?? 0)?.['A29']}. I just don't want to hear about it from her is all."`);
    scene.text('Luda nods. "Well, even so, I\'m sure she\'d prefer hearing that you\'re taking this than to find out you\'re not. But I promise, this will be our little secret."');
  } else {
    scene.text('Luda nods. "Well, even so, I\'m sure she\'d prefer hearing you\'re having sex and taking this than to find out you\'re pregnant. But I promise, this will be our little secret."');
  }
  scene.build();
}

function enterBuyMorningAfterEnd(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Continue shopping', handler: (st: GameState) => {
    dynamicGoto(st, 'loc_s', 'args_s');
  } },
    { label: 'Don\'t tell <<$npc_nickname[\'A29\']>>', handler: (st: GameState) => {
    scene.text('<center><b>Pharmacy</b></center>');
    scene.img('images/locations/pavlovsk/pharmacy/apteka_aunt_1.jpg');
    if (((s as any).LudaQW ?? 0)?.['momslut_know'] === 1) {
      // TODO-QSP: dynamic text: "Please don't tell <<$npc_nickname['A29']>>," you say.
      scene.text(`"Please don't tell ${((s as any).npc_nickname ?? 0)?.['A29']}," you say.`);
      scene.text('"It\'ll be our secret," she winks.');
    } else {
      if (((s as any).momslut ?? 0) >= 1) {
        ((s as any).LudaQW ?? {})['momslut_know'] = 1;
        // TODO-QSP: dynamic text: "Please don't tell <<$npc_nickname['A29']>>," you say.
        scene.text(`"Please don't tell ${((s as any).npc_nickname ?? 0)?.['A29']}," you say.`);
        scene.text('"You might be surprised dear," she says with a wry smile and you sigh tiredly.');
        // TODO-QSP: dynamic text: "Yes Aunt, I know all about <<$npc_nickname['A29']>>'s... habits. I just don't w...
        scene.text(`"Yes Aunt, I know all about ${((s as any).npc_nickname ?? 0)?.['A29']}'s... habits. I just don't want to hear about it from her is all."`);
        scene.text('Luda nods. "Even so, I\'m sure she\'d prefer hearing that you\'re taking this than to see you get pregnant. But I promise, this will be our little secret."');
      } else {
        // TODO-QSP: dynamic text: "Please don't tell <<$npc_nickname['A29']>>," you say. "She wouldn't understand....
        scene.text(`"Please don't tell ${((s as any).npc_nickname ?? 0)?.['A29']}," you say. "She wouldn't understand."`);
        scene.text('"You might be surprised dear," she says with a wry smile and you cock your head in confusion.');
        scene.text('<i>What\'s that supposed to mean?</i>');
        scene.text('"Well, even so," she continues. "I\'m sure she\'d prefer hearing you\'re having sex and taking this than to see you get pregnant. But I promise, this will be our little secret."');
      }
    }
    scene.actions([
      { label: 'Continue shopping', handler: (st: GameState) => {
    dynamicGoto(st, 'loc_s', 'args_s');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMorningAfterWarning(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pharmacy ?? 0)?.['morning_after'] === 1) {
    scene.text('"Take it as soon as possible," she warns. "It\'s most effective the sooner after your \'accident.\' And maybe you should also buy some birth control pills while you\'re here? Then this just has to be a one time thing."');
  } else {
    scene.text('"You know the drill. Take it as soon as possible. And perhaps I might interest you in some birth control pills while you\'re here?" she adds sarcastically.');
  }
  if (((s as any).birth_control ?? 0)?.['using_bc'] > 0) {
    scene.text('"I\'m already on the pill aunt, I\'m just waiting for it to kick in."');
    scene.text('"I can\'t wait until it does," she sighs, rolling her eyes to the heavens.');
    qspCall(s, 'pav_pharmacy', 'buy_morning_after_end');
  } else {
    if (qspFunc(s, 'money', 'can_afford', ((s as any).cart_tally ?? 0) + 1870) === 0) {
      scene.actions([
        { label: 'I don\'t have the money', handler: (st: GameState) => {
    scene.text('"I would, Aunt Luda," you say. "I just don\'t have the money right now..."');
    if (((s as any).pharmacy ?? 0)?.['bc_pills_free'] === 0) {
      ((s as any).mc_inventory ?? {})['contraceptive_pill'] = (((s as any).mc_inventory ?? {})['contraceptive_pill'] ?? 0) + (1);
      scene.text('Luda sighs deeply and pulls out a small box and slides it across the counter to you.');
      scene.text('"I guess I can give you some this one time..." she says. "But make sure you don\'t miss a single day or they might not work!" She wags her finger at you. "And you better buy some next month or you\'ll be in trouble!"');
    } else {
      scene.text('"That\'s what you said last time," she says dryly. "I\'m not giving you another month\'s worth for free. If you\'re going to have sex, then the least you can do is take responsibility for your own body!"');
    }
    qspCall(s, 'pav_pharmacy', 'buy_morning_after_end');
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Buy birth control', handler: (st: GameState) => {
    ((s as any).LudaQW ?? {})['birth_control_timer'] = ((s as any).daystart ?? 0);
    ((s as any).pharmacy_timers ?? {})['birth_control'] = ((s as any).daystart ?? 0);
    (s as any).pharmacyfirstbirthcontrol = 1;
    // TODO-QSP: gs 'item_cart', 'simple_add', arrpos('$var_curr_aisle', 'contraceptive_pill') + 1
    scene.text('"You\'re right Aunt Luda," you nod apologetically. "I should stop being dumb and taking chances."');
    scene.text('She sighs in relief and retrieves a box of pills for you. "At least you have more sense than your mother did at your age."');
    qspCall(s, 'pav_pharmacy', 'buy_morning_after_end');
  } },
      ]);
    }
    scene.actions([
      { label: 'No thanks', handler: (st: GameState) => {
    scene.text('"I\'ll be okay, Aunt," you say.');
    scene.text('"Not if this is any indication," she replies dryly.');
    qspCall(s, 'pav_pharmacy', 'buy_morning_after_end');
  } },
      { label: 'I prefer condoms', handler: (st: GameState) => {
    if ((!((s as any).preziktype ?? 0))) {
      ((s as any).mc_inventory ?? {})['equipped_condoms'] = (((s as any).mc_inventory ?? {})['equipped_condoms'] ?? 0) + (5);
    } else {
      if (((s as any).preziktype ?? 0) === 1  ||  ((s as any).preziktype ?? 0) === 2) {
        ((s as any).mc_inventory ?? {})['normal_condoms'] = (((s as any).mc_inventory ?? {})['normal_condoms'] ?? 0) + (5);
      }
    }
    scene.text('"I actually prefer using condoms," you say.');
    scene.text('"Then <i>use</i> them for goodness sake!" Luda says, pulling a handful of rubbers from behind the counter and exasperatedly throwing them at you. "That\'s on the house as long as you don\'t come back here to buy another pill."');
    qspCall(s, 'pav_pharmacy', 'buy_morning_after_end');
  } },
    ]);
  }
  scene.build();
}

function enterMorningAfterNoMoney(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'money', 'can_afford', ((s as any).cart_tally ?? 0) + 740) === 0) {
    scene.actions([
      { label: 'Ask Luda for a morning-after pill (meekly)', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Pharmacy</b></center>');
    scene.img('images/locations/pavlovsk/pharmacy/apteka_aunt_1.jpg');
    if (((s as any).pharmacy ?? 0)?.['morning_after_free'] < 10) {
      ((s as any).pharmacy ?? {})['morning_after_free'] = (((s as any).pharmacy ?? {})['morning_after_free'] ?? 0) + (1);
    }
  } },
      { label: 'Ask Luda for a morning-after pill (openly)', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Pharmacy</b></center>');
    scene.img('images/locations/pavlovsk/pharmacy/apteka_aunt_1.jpg');
    if (((s as any).pharmacy ?? 0)?.['morning_after_free'] < 10) {
      ((s as any).pharmacy ?? {})['morning_after_free'] = (((s as any).pharmacy ?? {})['morning_after_free'] ?? 0) + (1);
    }
  } },
      { label: 'Ask Luda for a morning-after pill (meekly)', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Pharmacy</b></center>');
    scene.img('images/locations/pavlovsk/pharmacy/apteka_aunt_1.jpg');
    if (((s as any).pharmacy ?? 0)?.['morning_after_free'] < 10) {
      ((s as any).pharmacy ?? {})['morning_after_free'] = (((s as any).pharmacy ?? {})['morning_after_free'] ?? 0) + (1);
    }
  } },
      { label: 'Ask Luda for a morning-after pill (openly)', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Pharmacy</b></center>');
    scene.img('images/locations/pavlovsk/pharmacy/apteka_aunt_1.jpg');
    if (((s as any).pharmacy ?? 0)?.['morning_after_free'] < 10) {
      ((s as any).pharmacy ?? {})['morning_after_free'] = (((s as any).pharmacy ?? {})['morning_after_free'] ?? 0) + (1);
    }
    // TODO-QSP: end !}
  } },
    ]);
  }
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
    case 'buy_birth_control':
      enterBuyBirthControl(s, scene);
      break;
    case 'buy_preg_test':
      enterBuyPregTest(s, scene);
      break;
    case 'buy_lube':
      enterBuyLube(s, scene);
      break;
    case 'buy_morning_after':
      enterBuyMorningAfter(s, scene);
      break;
    case 'morning_after_emergency_embarrassed':
      enterMorningAfterEmergencyEmbarrassed(s, scene);
      break;
    case 'morning_after_emergency_open':
      enterMorningAfterEmergencyOpen(s, scene);
      break;
    case 'morning_after_mistake_embarrassed':
      enterMorningAfterMistakeEmbarrassed(s, scene);
      break;
    case 'morning_after_no_pullout_meek':
      enterMorningAfterNoPulloutMeek(s, scene);
      break;
    case 'morning_after_no_pullout_annoyed':
      enterMorningAfterNoPulloutAnnoyed(s, scene);
      break;
    case 'morning_after_mistake_open':
      enterMorningAfterMistakeOpen(s, scene);
      break;
    case 'morning_after_stealth_meek':
      enterMorningAfterStealthMeek(s, scene);
      break;
    case 'morning_after_stealth_open':
      enterMorningAfterStealthOpen(s, scene);
      break;
    case 'buy_morning_after_condom_broke_meek':
      enterBuyMorningAfterCondomBrokeMeek(s, scene);
      break;
    case 'buy_morning_after_condom_broke_open':
      enterBuyMorningAfterCondomBrokeOpen(s, scene);
      break;
    case 'buy_morning_after_raped':
      enterBuyMorningAfterRaped(s, scene);
      break;
    case 'buy_morning_after_end':
      enterBuyMorningAfterEnd(s, scene);
      break;
    case 'morning_after_warning':
      enterMorningAfterWarning(s, scene);
      break;
    case 'morning_after_no_money':
      enterMorningAfterNoMoney(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pav_pharmacy: LocationDef = {
  name: 'pav_pharmacy',
  title: 'Pharmacy',
  region: 'pavlovsk',
  locationType: 'public_indoors',
  enter: enter,
};
