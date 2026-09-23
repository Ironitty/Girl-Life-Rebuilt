import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterIShouldGo(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 20) + 1) < ((s as any).sex_ev ?? 0)?.['cum_count'] + ((s as any).sex_ev ?? 0)?.['extra_cum']) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['continuation'] = 1;
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['leaving'] = 1;
  qspCall(s, 'sex_ev_clothing', 'dress_loop');
  if (((s as any).sex_ev ?? 0)?.['angry_after'] === 1  ||  ((s as any).sex_ev ?? 0)?.['annoyed'] > 0) {
    // TODO-QSP: dynamic text: "I have to go," you say flatly, reaching down for your clothes without looking a...
    scene.text(`"I have to go," you say flatly, reaching down for your clothes without looking at ${((s as any).npcdesc ?? '')}.`);
  } else {
    if (((s as any).sex_ev ?? 0)?.['sleepover'] === 1) {
      // TODO-QSP: dynamic text: "This has been nice," you say, <<$sex_ev[''dress_describe'']>>. "But I really sh...
      scene.text(`"This has been nice," you say, ${((s as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "But I really should go."`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['get_up'] === 0) {
        // TODO-QSP: dynamic text: As nice as this is, you really can''t stay and you heave yourself up and away fr...
        scene.text(`As nice as this is, you really can't stay and you heave yourself up and away from ${((s as any).npcdesc ?? '')}, getting up from the bed and moving over to where your discarded clothes were thrown.`);
        // TODO-QSP: dynamic text: "I should go," you say, <<$sex_ev[''dress_describe'']>>.
        scene.text(`"I should go," you say, ${((s as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}.`);
      } else {
        // TODO-QSP: dynamic text: "I should go," you say, <<$sex_ev[''dress_describe'']>>.
        scene.text(`"I should go," you say, ${((s as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}.`);
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterHookupContinuation(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterThanksForFun(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['leaving'] = 1;
  qspCall(s, 'sex_ev_clothing', 'dress_loop');
  scene.text('You get up from the bed and pad across the floor, bending down to pick up your discarded apparel.');
  if (((s as any).sex_ev ?? 0)?.['sleepover'] === 1) {
    // TODO-QSP: dynamic text: "Thanks for the <<$sex_ev[''fun'']>> last night," you say, <<$sex_ev[''dress_des...
    scene.text(`"Thanks for the ${((s as any).sex_ev ?? 0)?.['fun'] ?? ''} last night," you say, ${((s as any).sex_ev ?? 0)?.['dress_describe'] ?? ''} with a smirk over your shoulder. "And for letting me stay over."`);
  } else {
    if (((s as any).sex_ev ?? 0)?.['get_up'] === 0) {
      // TODO-QSP: dynamic text: "Thanks for the <<$sex_ev[''fun'']>>," you say, <<$sex_ev[''dress_describe'']>>.
      scene.text(`"Thanks for the ${((s as any).sex_ev ?? 0)?.['fun'] ?? ''}," you say, ${((s as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}.`);
    } else {
      // TODO-QSP: dynamic text: "Well, thanks for the <<$sex_ev[''fun'']>>," you say, <<$sex_ev[''dress_describe...
      scene.text(`"Well, thanks for the ${((s as any).sex_ev ?? 0)?.['fun'] ?? ''}," you say, ${((s as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}.`);
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterHookupContinuation(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterKickedOut(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $sex_ev['bed_room']
  // TODO-QSP: dynamic text: "Hey so uhh, time for you to get going," <<$npcdesc>> says, cracking his neck di...
  scene.text(`"Hey so uhh, time for you to get going," ${((s as any).npcdesc ?? '')} says, cracking his neck dismissively.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Yeah, I should', handler: (st: GameState) => {
    scene.text('"Yeah, I really ought to get going," you agree, hauling yourself out of bed.');
  } },
  ]);
  scene.build();
}

function enterKickedOutMenu(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat_cum_msg ?? 0) !== '') {
    scene.actions([
      { label: 'Get cleaned up', handler: (st: GameState) => {
    if (((st as any).trait_vars ?? 0)?.['cum_addict'] > 0) {
      (st as any).cumspclnt = 18;
    } else {
      (st as any).cumspclnt = 1;
    }
    qspCall(st, 'cum_cleanup', '');
    if (((st as any).cum_loc ?? 0)?.['vagina'] > 0  ||  ((st as any).sex_ev ?? 0)?.['cum_choice'] === 'creampie') {
      if (((st as any).trait_vars ?? 0)?.['cum_addict'] > 0) {
        // TODO-QSP: dynamic text: <center><b><font color="maroon"><<$npcdesc>>''s Bedroom</font></b></center>
        scene.text(`<center><b><font color="maroon">${((st as any).npcdesc ?? '')}'s Bedroom</font></b></center>`);
        // TODO-QSP: $sex_ev['bed_room']
        if (((st as any).sex_ev ?? 0)?.['wipes'] === 1) {
          scene.text('You reach down to your purse and pull out your bag of wipes before you stop, suddenly confused.');
          scene.text('<i>Why did I get out my wipes?</i> you think to yourself. You frown at the packet, befuddled as to what you want to do with the wipe.');
          scene.text('<i>Meh. If it\'s important, it will come back to me later,</i> you think to yourself as you put it back into your purse, oblivious to the liquid dribbling down the inside of your thigh.');
        } else {
          if (((st as any).sex_ev ?? 0)?.['wipes'] === 2) {
            // TODO-QSP: dynamic text: "Hey, do you-" you start and then suddenly lose track of what you were trying to...
            scene.text(`"Hey, do you-" you start and then suddenly lose track of what you were trying to say. You frown to yourself as ${((st as any).npcdesc ?? '')} looks at you quizically.`);
            scene.text('"Did you need something?"');
            scene.text('"I uhh..." Your frown deepens. "I wanted to ask you something... but I forgot what it was... I guess it doesn\'t really matter..."');
            scene.text('<i>Meh. If it\'s important, it will come back to me later,</i> you think to yourself, oblivious to the liquid dribbling down the inside of your thigh.');
          }
        }
      } else {
        if (((st as any).sex_ev ?? 0)?.['wipes'] === 2) {
          scene.img('images/shared/sex/cum/vagcreampie/after1.mp4');
          scene.text('"Hey, got anything I can use to clean up?" you say, holding your fingers over your pussy, trying to keep the cum from spilling out any further.');
          // TODO-QSP: dynamic text: "Oh yeah, right here." <<$npcdesc>> reaches over to his nightstand, pulls a pack...
          scene.text(`"Oh yeah, right here." ${((st as any).npcdesc ?? '')} reaches over to his nightstand, pulls a packet of tissues and tosses them over to you. Gratefully accepting them, you pull out a handful and get to work cleaning yourself up.`);
        } else {
          scene.img('images/shared/sex/cum/cum111.jpg');
          scene.text('You really need to clean yourself up after that. Reaching down to your purse, you pull some wipes out of your purse before reaching between your legs to wipe yourself up.');
          scene.text('It takes a few tries, more cum seemingly coming out with every next wipe, but eventually, you feel like you got most of it out. At least enough that nothing is going to be running down your legs walking home.');
        }
      }
    } else {
      if (((st as any).cum_loc ?? 0)?.['face'] > 0  ||  ((st as any).sex_ev ?? 0)?.['cum_choice'] === 'face') {
        // TODO-QSP: dynamic text: <center><b><font color="maroon"><<$npcdesc>>''s Bedroom</font></b></center>
        scene.text(`<center><b><font color="maroon">${((st as any).npcdesc ?? '')}'s Bedroom</font></b></center>`);
        // TODO-QSP: $sex_ev['bed_room']
        if (((st as any).mc_inventory ?? 0)?.['makeup_wipes'] > 0) {
          ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['makeup_wipes'] = ((st as any).mc_inventory['makeup_wipes'] ?? 0) - (1);
        } else {
          ((st as any).sex_ev = (st as any).sex_ev ?? {})['wipes'] = 2;
        }
        if (((st as any).sex_ev ?? 0)?.['wipes'] === 2) {
          scene.text('"Hey, got anything I can use to clean up?" you smirk, pointing at your sperm-glazed face.');
          // TODO-QSP: dynamic text: "Oh yeah, right here." <<$npcdesc>> reaches over to his nightstand, pulls a pack...
          scene.text(`"Oh yeah, right here." ${((st as any).npcdesc ?? '')} reaches over to his nightstand, pulls a packet of tissues and tosses them over to you. Gratefully accepting them, you pull out a handful and get to work cleaning yourself up.`);
        }
        if (((st as any).cum_loc ?? 0)?.['hair'] > 0) {
          // TODO-QSP: dynamic text: You carefully wipe the cum from your face, making sure to get every last drop, i...
          scene.text(`You carefully wipe the cum from your face, making sure to get every last drop, including getting the tangled web that ${((st as any).npcdesc ?? '')} managed to get in your hair. About a minute later, you can still feel a faintly sticky layer over the top of your skin, but at least nobody is going to give you funny looks walking down the street.`);
        } else {
          scene.text('You carefully wipe the cum from your face, making sure to get every last drop. About a minute later, you can still feel a faintly sticky layer over the top of your skin, but at least nobody is going to give you funny looks walking down the street.');
        }
      } else {
        if (((st as any).cum_loc ?? 0)?.['stomach'] > 0  ||  ((st as any).sex_ev ?? 0)?.['cum_choice'] === 'stomach') {
          // TODO-QSP: dynamic text: <center><b><font color="maroon"><<$npcdesc>>''s Bedroom</font></b></center>
          scene.text(`<center><b><font color="maroon">${((st as any).npcdesc ?? '')}'s Bedroom</font></b></center>`);
          // TODO-QSP: $sex_ev['bed_room']
          if (((st as any).sex_ev ?? 0)?.['wipes'] === 2) {
            scene.text('"Hey, got anything I can use to clean up?" you ask, looking at your belly, cum still spattered over it.');
            // TODO-QSP: dynamic text: "Oh yeah, right here." <<$npcdesc>> reaches over to his nightstand, pulls a pack...
            scene.text(`"Oh yeah, right here." ${((st as any).npcdesc ?? '')} reaches over to his nightstand, pulls a packet of tissues and tosses them over to you. Gratefully accepting them, you pull out a handful and wipe the loose sperm from your stomach before reaching for your clothes.`);
          } else {
            scene.text('Pulling a wipe from your purse, you wipe the sperm from your stomach before reaching for your clothes.');
          }
        } else {
          if (((st as any).cum_loc ?? 0)?.['butt'] > 0  ||  ((st as any).sex_ev ?? 0)?.['cum_choice'] === 'ass'  ||  ((st as any).sex_ev ?? 0)?.['cum_choice'] === 'back') {
            // TODO-QSP: dynamic text: <center><b><font color="maroon"><<$npcdesc>>''s Bedroom</font></b></center>
            scene.text(`<center><b><font color="maroon">${((st as any).npcdesc ?? '')}'s Bedroom</font></b></center>`);
            // TODO-QSP: $sex_ev['bed_room']
            if (((st as any).sex_ev ?? 0)?.['wipes'] === 2) {
              scene.text('"Hey, got anything I can use to clean up?" you ask, looking over your shoulder and wiggling your ass to emphasize the cum resting on it.');
              // TODO-QSP: dynamic text: "Oh yeah, right here." <<$npcdesc>> reaches over to his nightstand, pulls a pack...
              scene.text(`"Oh yeah, right here." ${((st as any).npcdesc ?? '')} reaches over to his nightstand, pulls a packet of tissues and tosses them over to you. Gratefully accepting them, you pull out a handful and get to work cleaning yourself up.`);
            } else {
              scene.text('You really need to clean yourself after up after that. Reaching down to your purse, you pull some wipes out of your purse.');
            }
          }
        }
      }
    }
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_leave', 'dressing1'
  } },
    ]);
  } },
      { label: 'Borrow your shower?', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Mind if I borrow your shower real quick first?"');
    if (((st as any).sex_ev ?? 0)?.['get_out'] === 1) {
      scene.text('"No, you can\'t. Get out."');
      scene.text('You frown. "What? Wh-"');
      scene.text('"I said you need to get out. Go. <i>Now.</i>"');
      scene.actions([
        { label: 'Get dressed', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_leave', 'dressing1'
  } },
      ]);
    } else {
      if (((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
        scene.text('"Nah. Don\'t want you using up my soap."');
        scene.text('You frown. "Seriously? I just wanna rinse off before I go."');
        scene.text('"Yeah, you\'ll be fine. Don\'t want you wasting my hot water either."');
        scene.actions([
          { label: 'Get dressed', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_leave', 'dressing1'
  } },
        ]);
      } else {
        scene.text('"Yeah sure, go ahead."');
        scene.text('"Thanks," you smile getting up and padding into the bathroom.');
        scene.actions([
          { label: 'Take a shower', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    scene.img('images/shared/home/bathroom/dush.mp4');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['shower'] = 1;
    qspCall(st, 'din_van', 'showerdin');
    // TODO-QSP: dynamic text: You turn on the faucet, relaxing as the hot water pours down over your skin. Aft...
    scene.text(`You turn on the faucet, relaxing as the hot water pours down over your skin. After a few minutes, you turn the tap off and step out, walking back to ${((st as any).npcdesc ?? '')}'s room wet and dripping. ${((st as any).npcdesc ?? '')} is still there, relaxing in his bed.`);
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_leave', 'dressing1'
  } },
    ]);
  } },
        ]);
      }
    }
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_leave', 'dressing1'
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterHookupContinuation(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['continuation'] = (Math.floor(Math.random() * (1 - (-1) + 1)) + ((-1)));
    if ((Math.floor(Math.random() * 10) + 1) > 5  &&  (((s as any).hour ?? 0) > 20  ||  ((s as any).hour ?? 0) < 4)  &&  ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).npc_girlfriend ?? 0)?.[String((s as any).npcID ?? 0)] === 0  &&  ((s as any).sex_ev ?? 0)?.['cant_stay'] === 0  &&  ((s as any).sex_ev ?? 0)?.['sleepover'] !== 1) {
      // TODO-QSP: dynamic text: "You know, it''s kinda late." <<$npcdesc>> sits up in bed. "You don''t have to g...
      scene.text(`"You know, it's kinda late." ${((s as any).npcdesc ?? '')} sits up in bed. "You don't have to go right now. Did you want to maybe... spend the night?"`);
      qspGoto(s, 'sex_ev_hookup_leave', 'spend_the_night');
    } else {
      if (((s as any).sex_ev ?? 0)?.['continuation'] > 0  &&  ((s as any).sex_ev ?? 0)?.['mad'] < 1  &&  ((s as any).sex_ev ?? 0)?.['angry_after'] < 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['hookup_continuation_check'] = 1;
        if (((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] === 2  &&  ((Math.floor(Math.random() * (2 - -1 + 1)) + (-1)) - ((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).sex_ev ?? 0)?.['prostitution'] === 1  ||  ((s as any).npc_womanizer ?? 0)?.[String((s as any).npcID ?? 0)] === 1)) {
          qspGoto(s, 'sex_ev_hookup_leave', 'npc_sugar_daddy_offer');
        } else {
          if (((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'sex'  ||  (((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'casual'  &&  (Math.floor(Math.random() * 10) + 1) < ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)])) {
            qspGoto(s, 'sex_ev_hookup_leave', 'npc_fuckbuddy_request');
          } else {
            if (((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'casual'  ||  ((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'serious') {
              qspGoto(s, 'sex_ev_hookup_leave', 'npc_date_request');
            }
          }
        }
        scene.actions([
          { label: 'Finish getting dressed', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_leave', 'dressing_finish'
  } },
        ]);
      } else {
        if (((s as any).sex_ev ?? 0)?.['thank_for_fun'] === 1) {
          if (((s as any).sex_ev ?? 0)?.['bj_count'] > 0  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] < 1) {
            if (((s as any).sex_ev ?? 0)?.['virgin'] > 0) {
              // TODO-QSP: dynamic text: "Thanks for the blowjob," he smirks back. "You give pretty good head. You sure y...
              scene.text(`"Thanks for the blowjob," he smirks back. "You give pretty good head. You sure you're a virgin?" You don't respond, ${((s as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}, but roll your eyes at his commentary.`);
            } else {
              // TODO-QSP: dynamic text: "Thanks for the blowjob," he smirks back as you''re <<$sex_ev[''dress_describe''...
              scene.text(`"Thanks for the blowjob," he smirks back as you're ${((s as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "You give great head."`);
            }
          } else {
            if (((s as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
              // TODO-QSP: dynamic text: "Right back at you," he smirks in return while you''re <<$sex_ev[''dress_describ...
              scene.text(`"Right back at you," he smirks in return while you're ${((s as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}.`);
            }
          }
          qspGoto(s, 'sex_ev_leave', 'dressing2');
        } else {
          if (((s as any).sex_ev ?? 0)?.['hookup_continuation_first_pass'] === 0) {
            scene.text('"Alright, sure. Feel free to see yourself out."');
            ((s as any).sex_ev = (s as any).sex_ev ?? {})['hookup_continuation_first_pass'] = 1;
          }
          qspGoto(s, 'sex_ev_leave', 'dressing2');
        }
      }
    }
  } else {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['continuation'] = (Math.floor(Math.random() * (1 - (-1) + 1)) + ((-1)));
    if (((s as any).sex_ev ?? 0)?.['continuation'] > 0  &&  ((s as any).sex_ev ?? 0)?.['mad'] < 1  &&  ((s as any).sex_ev ?? 0)?.['angry_after'] < 1) {
      if (((s as any).npc_rel_type ?? 0) !== 'sugar_daddy'  &&  ((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] === 2  &&  ((Math.floor(Math.random() * (2 - -1 + 1)) + (-1)) - ((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).sex_ev ?? 0)?.['prostitution'] === 1  ||  ((s as any).npc_womanizer ?? 0)?.[String((s as any).npcID ?? 0)] === 1)) {
        qspGoto(s, 'sex_ev_hookup_leave', 'npc_sugar_daddy_offer');
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSpendTheNight(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'No thanks', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cant_stay'] = 1;
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "Thanks but no thanks," you say, wistfully <<$sex_ev[''dress_describe'']>>. "I r...
    scene.text(`"Thanks but no thanks," you say, wistfully ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "I really need to get home tonight."`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterHookupContinuation(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Well...', handler: (st: GameState) => {
    scene.text('"Well..." you pause for a moment, considering. You <i>could</i> stay over tonight. Maybe you don\'t <i>have</i> to go...');
    scene.actions([
      { label: 'No, I shouldn\'t', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cant_stay'] = 1;
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"... no," you sigh. "I really shouldn\'t. I want to, but I can\'t."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterHookupContinuation(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'I guess I could...', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"... I guess I could..." you relent, dropping the clothes you were holding.');
    scene.actions([
      { label: 'Undress and get into bed with him', handler: (st: GameState) => {
    if (((st as any).clothingworntype ?? 0) !== 'nude') {
      qspCall(st, 'clothing', 'strip');
    }
    if (((st as any).braworntype ?? 0) !== 'none') {
      qspCall(st, 'bras', 'remove');
    }
    if (((st as any).pantyworntype ?? 0) !== 'none') {
      qspCall(st, 'panties', 'remove');
    }
    scene.img('images/shared/sex/after/cuddle1.jpg');
    // TODO-QSP: dynamic text: You slip back into bed and cuddle up with <<$npcdesc>>, resting your naked body ...
    scene.text(`You slip back into bed and cuddle up with ${((st as any).npcdesc ?? '')}, resting your naked body on top of his. He wraps his arms around you in return and the two of your relax, listening to the sound of each other's breathing.`);
    qspCall(st, 'sex_ev_after', 'sleep');
  } },
    ]);
  } },
    ]);
  } },
    { label: 'I really need to go', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cant_stay'] = 1;
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "I wish I could but I really have to go," you say, <<$sex_ev[''dress_describe'']...
    scene.text(`"I wish I could but I really have to go," you say, ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "Just not an option for me tonight."`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterHookupContinuation(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterPcFuckbuddyRequest(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_clothing', 'dress_loop');
  if (((s as any).sex_ev ?? 0)?.['cant_stay'] === 1) {
    // TODO-QSP: dynamic text: "Maybe we could hook up again some other time?" you ask, <<$sex_ev[''dress_descr...
    scene.text(`"Maybe we could hook up again some other time?" you ask, ${((s as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}.`);
  } else {
    // TODO-QSP: dynamic text: "This was fun. We should hook up again some time," you say, <<$sex_ev[''dress_de...
    scene.text(`"This was fun. We should hook up again some time," you say, ${((s as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}.`);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    if ((Math.floor(Math.random() * 3) + 1) === 1) {
      // TODO-QSP: dynamic text: "Nah, this was a one time thing," <<$npcdesc>> replies. "I never fuck the same g...
      scene.text(`"Nah, this was a one time thing," ${((st as any).npcdesc ?? '')} replies. "I never fuck the same girl twice."`);
      scene.text('You pause for a moment and give him a look.');
      scene.text('"Seriously?"');
      scene.text('"Do I look like I\'m kidding?" he grins back, clearly satisfied with himself.');
      // TODO-QSP: dynamic text: <i>Free access to pussy and you''re just gonna turn it down? Whatever...</i> you...
      scene.text(`<i>Free access to pussy and you're just gonna turn it down? Whatever...</i> you think to yourself, ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}.`);
      // TODO-QSP: dynamic text: Once you''re finished dressing, you grab your things and leave. <<$npcdesc>> doe...
      scene.text(`Once you're finished dressing, you grab your things and leave. ${((st as any).npcdesc ?? '')} doesn't say a word as you close the door behind you.`);
    } else {
      qspCall(st, 'sex_ev_stats', 'fuckbuddy_add');
      scene.text('"What, like fuckbuddies?"');
      // TODO-QSP: dynamic text: "Why not?" you say, <<$sex_ev[''dress_describe'']>>.
      scene.text(`"Why not?" you say, ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}.`);
      scene.text('"Sure, I\'ll sleep with you again if you\'re offering."');
      scene.text('You tell him your number while you finished getting dressed and he taps it into his phone. A few moments later, a notification pings in your messages:');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFuckbuddyText(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterPcDateRequest(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: "Hey, I was thinking... maybe I could see you again? For like, dinner? Or a movi...
  scene.text(`"Hey, I was thinking... maybe I could see you again? For like, dinner? Or a movie? Or something?" you say, ${((s as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    if ((Math.floor(Math.random() * 3) + 1) === 1) {
      // TODO-QSP: dynamic text: "Nah, this was a one time thing," <<$npcdesc>> replies. "I never fuck the same g...
      scene.text(`"Nah, this was a one time thing," ${((st as any).npcdesc ?? '')} replies. "I never fuck the same girl twice."`);
      scene.text('You pause for a moment and give him a look.');
      scene.text('"Seriously?"');
      scene.text('"Do I look like I\'m kidding?" he grins back, clearly satisfied with himself.');
      // TODO-QSP: dynamic text: <i>Wow... You can really pick em, huh <<$pcs_nickname>>?</i> you think to yourse...
      scene.text(`<i>Wow... You can really pick em, huh ${((st as any).pcs_nickname ?? '')}?</i> you think to yourself ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. <i>Ugh. Whatever...</i>`);
      // TODO-QSP: dynamic text: Once you''re done, you grab your things and leave. <<$npcdesc>> doesn''t say a w...
      scene.text(`Once you're done, you grab your things and leave. ${((st as any).npcdesc ?? '')} doesn't say a word as you close the door behind you.`);
      scene.actions([
        { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
      ]);
    } else {
      qspCall(st, 'sex_ev_stats', 'lover_add');
      scene.text('"You mean like a date?"');
      scene.text('"Yeah... like a date..."');
      // TODO-QSP: dynamic text: For a moment you feel intensely awkward, <<$sex_ev[''dress_describe'']>> as you ...
      scene.text(`For a moment you feel intensely awkward, ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''} as you wait for his response, but when you turn to look at him he's smiling.`);
      scene.text('"A date... Yeah, I\'d like to take you on a date sometime." Your expression bursts into a smile as well, unable to contain yourself.');
      scene.text('You tell him your number while you finished getting dressed and he taps it into his phone. A few moments later, a notification pings in your messages:');
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['text_message'] = (Math.floor(Math.random() * 2) + 1);
      if (((st as any).sex_ev ?? 0)?.['text_message'] === 1) {
        // TODO-QSP: '  ' + $func('wrap', 'accent b', 'hey cutie')
        scene.text('"Hey yourself," you say aloud, smiling back at him. "Anyways, see you around."');
      } else {
        if (((st as any).sex_ev ?? 0)?.['text_message'] === 2) {
          // TODO-QSP: '  ' + $func('wrap', 'accent b', 'dont forget to call :)')
          scene.text('"I won\'t," you promise.');
        }
      }
      if (((st as any).sex_ev ?? 0)?.['loc'] === 'house_party') {
        scene.text('That bit of business done, you cheerfully wave him goodbye and head back out into the party.');
      } else {
        scene.text('That bit of business done, you cheerfully wave him goodbye and head out the door.');
      }
      scene.actions([
        { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterNpcFuckbuddyRequest(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['thank_for_fun'] === 1) {
    scene.text('"You want to do it again sometime? Nothing serious, just sex. No strings."');
  } else {
    if (((s as any).sex_ev ?? 0)?.['npc_can_spend_the_night'] > 0) {
      scene.text('"Well, maybe you could stay over some other night?" he asks. "We could fuck each other\'s brains out and then you can sleep here."');
    } else {
      scene.text('"Cool. Maybe we can hook up again sometime?"');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'You mean like fuckbuddies?', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "Like what?" you ask back, <<$sex_ev[''dress_describe'']>>. "Friends with benefi...
    scene.text(`"Like what?" you ask back, ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "Friends with benefits? Fuckbuddies? Booty callers? No strings attached?"`);
    scene.text('"Yeah, just like that. No strings attached."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterJustAHookup(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterHaveABoyfriend(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterHaveAGirlfriend(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Sure', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    qspCall(st, 'sex_ev_stats', 'fuckbuddy_add');
    // TODO-QSP: dynamic text: "Sure, sounds fun," you smile, <<$sex_ev[''dress_describe'']>>.
    scene.text(`"Sure, sounds fun," you smile, ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}.`);
    scene.text('After finishing getting dressed, you tell him your number while he taps it into his phone. A few moments later, a notification pings in your messages:');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['text_message'] = (Math.floor(Math.random() * 2) + 1);
    if (((st as any).sex_ev ?? 0)?.['text_message'] === 1) {
      // TODO-QSP: '  ' + $func('wrap', 'accent b', 'hey fuck buddy')
      scene.text('"Hey yourself," you say aloud, looking up at him. "Anyways, see you around."');
    } else {
      if (((st as any).sex_ev ?? 0)?.['text_message'] === 2) {
        // TODO-QSP: '  ' + $func('wrap', 'accent b', 'send nudes')
        scene.text('"Maybe," you smirk. "Anyways, see you around."');
      }
    }
    if (((st as any).sex_ev ?? 0)?.['loc'] === 'house_party') {
      scene.text('Your little exchange done, you wave him goodbye and head back out into the party.');
    } else {
      scene.text('Your little exchange done, you wave him goodbye and head out the door.');
    }
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterNpcDateRequest(s: GameState, scene: SceneBuilder): void {
  scene.text('"Well... Maybe I could see you again sometime? Not just sex, but like really see you, you know? Take you out on a date or something? Dinner? See a movie?"');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterJustAHookup(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Sure', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    qspCall(st, 'sex_ev_stats', 'lover_add');
    scene.text('"Yeah, I think I\'d like that," you smile gently.');
    scene.text('After finishing getting dressed, you tell him your number while he taps it into his phone. A few moments later, a notification pings in your messages:');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['text_message'] = (Math.floor(Math.random() * 2) + 1);
    if (((st as any).sex_ev ?? 0)?.['text_message'] === 1) {
      // TODO-QSP: '  ' + $func('wrap', 'accent b', 'hey cutie')
      scene.text('"Hey yourself," you say aloud, looking up at him. "Anyways, see you around."');
    } else {
      if (((st as any).sex_ev ?? 0)?.['text_message'] === 2) {
        // TODO-QSP: '  ' + $func('wrap', 'accent b', 'dont forget to call :)')
        scene.text('"I won\'t," you promise.');
      }
    }
    if (((st as any).sex_ev ?? 0)?.['loc'] === 'house_party') {
      scene.text('Your little exchange done, you wave him goodbye and head back out into the party.');
    } else {
      scene.text('Your little exchange done, you wave him goodbye and head out the door.');
    }
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
    ]);
  } },
    { label: 'I\'m not up for anything serious', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "I''m not looking for anything serious right now," you say, more than a little a...
    scene.text(`"I'm not looking for anything serious right now," you say, more than a little awkwardly as you're ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}.`);
    scene.actions([
      { label: 'Sorry', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    scene.text('"Sorry..."');
    // TODO-QSP: dynamic text: "Oh. Uhh, well, it''s fine I guess..." <<$npcdesc>> trails off and you''re left ...
    scene.text(`"Oh. Uhh, well, it's fine I guess..." ${((st as any).npcdesc ?? '')} trails off and you're left in an extremely uncomfortable silence while you ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}.`);
    // TODO-QSP: dynamic text: <i>Holy fuck this is awkward,</i> you think to yourself as you pull the last of ...
    scene.text(`<i>Holy fuck this is awkward,</i> you think to yourself as you pull the last of your clothes on. After giving yourself a once over, you give ${((st as any).npcdesc ?? '')} a strained smile and wave goodbye, quickly striding towards the door to escape.`);
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
    ]);
  } },
      { label: 'If we were fuckbuddies...', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "If it were something purely physical, like fuckbuddies or something," you say, ...
    scene.text(`"If it were something purely physical, like fuckbuddies or something," you say, ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "I wouldn't mind getting together for some fun, but I'm not interested in a boyfriend."`);
    if ((Math.floor(Math.random() * 10) + 1) > 7  &&  ((st as any).npc_rel_goal ?? 0)?.[String((st as any).npcID ?? 0)] !== 'serious') {
      qspCall(st, 'sex_ev_stats', 'fuckbuddy_add');
      // TODO-QSP: dynamic text: "Well... If it means I can see you again, then sure I guess." <<$npcdesc>> doesn...
      scene.text(`"Well... If it means I can see you again, then sure I guess." ${((st as any).npcdesc ?? '')} doesn't really seem satisfied with the results, but he still tells you his number while you tap it into your contact list.`);
      scene.text('"So uhh, yeah... Call me sometime?"');
      // TODO-QSP: iif($sex_ev['loc'] = 'house_party', 'With a shrug and an awkward wave goodbye, you head out back out...
      scene.actions([
        { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
      ]);
    } else {
      scene.text('"No," he shakes his head. "I don\'t want to get led on by you if you\'re only interested in a fuck and not anything real. Guess this is just a one night stand."');
      scene.actions([
        { label: 'It\'s to be expected', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: You nod to yourself, continuing <<$sex_ev[''dress_describe'']>>. It''s to be exp...
    scene.text(`You nod to yourself, continuing ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. It's to be expected from a guy like him. But if he wants something more, you just can't give it to him. You're only after pleasure, you don't want to get tangled up in a relationship.`);
    // TODO-QSP: iif($sex_ev['loc'] = 'house_party', '"Well, I guess I won''t see you around then so... bye?" You wav...
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
    ]);
  } },
        { label: 'Taken aback', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: You blink in surprise, stopping halfway through <<$sex_ev[''dress_describe'']>>....
    scene.text(`You blink in surprise, stopping halfway through ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. That response really wasn't what you saw coming. After all, what guy just gives up free access to sex?`);
    // TODO-QSP: iif($sex_ev['loc'] = 'house_party', '"Uhh well, uhh... Alright... Guess I won''t see you later then....
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterNpcSugarDaddyOffer(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['sugar_daddy_offer'] = (Math.floor(Math.random() * 11) + 10);
  if (((s as any).sex_ev ?? 0)?.['thank_for_fun'] === 1) {
    // TODO-QSP: dynamic text: "Did you really enjoy it? Or are you just saying that?" <<$npcdesc>> asks.
    scene.text(`"Did you really enjoy it? Or are you just saying that?" ${((s as any).npcdesc ?? '')} asks.`);
    scene.actions([
      { label: 'Just saying (honest)', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "Just saying it," you shrug, <<$sex_ev[''dress_describe'']>>. "If I''m being hon...
    scene.text(`"Just saying it," you shrug, ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "If I'm being honest, this wasn't anything special. But I thought I'd try to be polite."`);
    qspCall(st, 'sex_ev_hookup_leave', 'npc_sugar_daddy_offer2');
  } },
      { label: 'Just saying (teasing)', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "Just saying," you say, <<$sex_ev[''dress_describe'']>> with a teasing smirk. "I...
    scene.text(`"Just saying," you say, ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''} with a teasing smirk. "I was trying to be nice."`);
    qspCall(st, 'sex_ev_hookup_leave', 'npc_sugar_daddy_offer2');
  } },
      { label: 'You mean it', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "No really," you smirk, <<$sex_ev[''dress_describe'']>>. "It was a good time."
    scene.text(`"No really," you smirk, ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "It was a good time."`);
    qspCall(st, 'sex_ev_hookup_leave', 'npc_sugar_daddy_offer2');
  } },
    ]);
  } else {
    // TODO-QSP: dynamic text: "How about we do this again?" <<$npcdesc>> says.
    scene.text(`"How about we do this again?" ${((s as any).npcdesc ?? '')} says.`);
    // TODO-QSP: dynamic text: "Do what?" you ask back, <<$sex_ev[''dress_describe'']>>.
    scene.text(`"Do what?" you ask back, ${((s as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}.`);
    if (((s as any).sex_ev ?? 0)?.['prostitution'] > 0) {
      scene.text('"This," he says again, gesturing vaguely around the room. "You can keep me company and I can get you some... compensation."');
    } else {
      scene.text('"This," he says again, gesturing vaguely around the room. "And maybe for your time and your company I could find you some... compensation."');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNpcSugarDaddyHowMuch(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterHaveABoyfriend(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterHaveAGirlfriend(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Not a hooker', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "I''m not a hooker," you say, <<$sex_ev[''dress_describe'']>>.
    scene.text(`"I'm not a hooker," you say, ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}.`);
    // TODO-QSP: dynamic text: "I didn''t say you were," <<$npcdesc>> snickers back. "Don''t think of it that w...
    scene.text(`"I didn't say you were," ${((st as any).npcdesc ?? '')} snickers back. "Don't think of it that way. Think of it more like... a sugar daddy relationship. Will you let me be your daddy?"`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcSugarDaddyRefuse(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcSugarDaddyHowMuch(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterNpcSugarDaddyRefuse(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Refuse him', handler: (st: GameState) => {
    scene.actions([
      { label: 'Nice try but no', handler: (st: GameState) => {
    scene.img('images/shared/romance/misc/depart_annoyed1.mp4');
    // TODO-QSP: iif($sex_ev['loc'] = 'house_party', '"Nice try but no," you grimace and pick up the rest of your thi...
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
    ]);
  } },
      { label: 'Not that kind of girl', handler: (st: GameState) => {
    scene.img('images/shared/romance/misc/depart_annoyed1.mp4');
    scene.text('"I\'m not that kind of girl," you sneer.');
    scene.text('"The missing money from my wallet would disagree," he chuckles back.');
    scene.text('Filled with disgust, you pick up the rest of your things and head out the door.');
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
    ]);
  } },
      { label: '"You\'re disgusting"', handler: (st: GameState) => {
    scene.img('images/shared/romance/misc/depart_annoyed1.mp4');
    scene.text('"You\'re disgusting," you sneer.');
    scene.text('"Hey, what\'s the point of money if you don\'t spend it?" he chuckles back.');
    scene.text('Filled with revulsion, you pick up the rest of your things and head out the door.');
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
    ]);
  } },
      { label: '"You can\'t afford me"', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "Please," you scoff, <<$sex_ev[''dress_describe'']>>. "You can''t afford me."
    scene.text(`"Please," you scoff, ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "You can't afford me."`);
    scene.text('"So you say, but your loss in the end I suppose," he smirks back.');
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterNpcSugarDaddyHowMuch(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'How much?', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "Depends," you muse, <<$sex_ev[''dress_describe'']>>. "How much are we talking?"
    scene.text(`"Depends," you muse, ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "How much are we talking?"`);
    // TODO-QSP: dynamic text: "How about... <<$func(''money'', ''string_profit'', sex_ev[''sugar_daddy_offer''...
    scene.text(`"How about... ${qspFunc(s, 'money', 'string_profit', (((st as any).sex_ev ?? {})?.['sugar_daddy_offer'] ?? 0) * 100, 1)} a date?"`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcSugarDaddyRefuse(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcSugarDaddyAccept(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcSugarDaddyHaggle(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterNpcSugarDaddyAccept(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Accept', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_stats', 'sugar_daddy_add');
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "That sounds... mutually beneficial," you say, slowly <<$sex_ev[''dress_describe...
    scene.text(`"That sounds... mutually beneficial," you say, slowly ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}.`);
    // TODO-QSP: dynamic text: "I''ll look forward to the next time you come over then," <<$npcdesc>> smirks. "...
    scene.text(`"I'll look forward to the next time you come over then," ${((st as any).npcdesc ?? '')} smirks. "Give me your number so I can tell you when to come over.`);
    scene.text('You hand him your phone and when you get it back you see he\'s the latest saved contact.');
    qspCall(st, 'sex_ev_leave', 'leaving_dialogue_choices');
  } },
  ]);
  scene.build();
}

function enterNpcSugarDaddyHaggle(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Haggle', handler: (st: GameState) => {
    // TODO-QSP: :invalid_counter_offer
    // TODO-QSP: sex_ev['sugar_daddy_input'] = input ('Name your price. Enter the amount in Roubles (between <<func(''money'', ''profit'', 1000)>> and <<func(''money'', ''profit'', 5000)>>).')
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['sugar_daddy_counteroffer'] = qspFunc(s, 'money', 'base_profit', ((st as any).sex_ev ?? 0)?.['sugar_daddy_input']) / 100;
    if (((st as any).sex_ev ?? 0)?.['sugar_daddy_counteroffer'] > 50  ||  ((st as any).sex_ev ?? 0)?.['sugar_daddy_counteroffer'] < 10) {
      // TODO-QSP: jump 'invalid_counter_offer'
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcSugarDaddyHaggle2(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
  ]);
  scene.build();
}

function enterNpcSugarDaddyHaggle2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_clothing', 'dress_loop');
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['haggle_limit'] = qspFunc(s, 'sex_ev_stats', 'sugar_daddy_haggle_limit');
  if (((s as any).sex_ev ?? 0)?.['sugar_daddy_counteroffer'] === ((s as any).sex_ev ?? 0)?.['sugar_daddy_offer']) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNpcSugarDaddyAccept(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).sex_ev ?? 0)?.['sugar_daddy_counteroffer'] < ((s as any).sex_ev ?? 0)?.['sugar_daddy_offer']) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['sugar_daddy_offer'] = ((s as any).sex_ev ?? 0)?.['sugar_daddy_counteroffer'];
      qspCall(s, 'sex_ev_stats', 'sugar_daddy_add');
      // TODO-QSP: dynamic text: "Why don''t we say <<$func(''money'', ''string_profit'', sex_ev[''sugar_daddy_co...
      scene.text(`"Why don't we say ${qspFunc(s, 'money', 'string_profit', (((s as any).sex_ev ?? {})?.['sugar_daddy_counteroffer'] ?? 0) * 100)}? I'd feel bad if I took too much," you smirk, ${((s as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}.`);
      // TODO-QSP: dynamic text: "Hey if you''re willing to put out for less, I won''t complain," <<$npcdesc>> gr...
      scene.text(`"Hey if you're willing to put out for less, I won't complain," ${((s as any).npcdesc ?? '')} grins back. "Give me your number so I can tell you when to come over.`);
      scene.text('You hand him your phone and when you get it back you see he\'s the latest saved contact.');
      qspCall(s, 'sex_ev_leave', 'leaving_dialogue_choices');
    } else {
      if (((s as any).sex_ev ?? 0)?.['sugar_daddy_counteroffer'] > ((s as any).sex_ev ?? 0)?.['haggle_limit']) {
        if (((s as any).sex_ev ?? 0)?.['haggle_fail'] === 1) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNpcSugarDaddyHaggleFail(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          // TODO-QSP: dynamic text: "How about <<$func(''money'', ''string_profit'', sex_ev[''sugar_daddy_counteroff...
          scene.text(`"How about ${qspFunc(s, 'money', 'string_profit', (((s as any).sex_ev ?? {})?.['sugar_daddy_counteroffer'] ?? 0) * 100)}?" you smirk, ${((s as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}.`);
          // TODO-QSP: dynamic text: "You greedy bitch," <<$npcdesc>> snickers back. "You''re not worth that much. Co...
          scene.text(`"You greedy bitch," ${((s as any).npcdesc ?? '')} snickers back. "You're not worth that much. Come on, try again."`);
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['haggle_fail'] = 1;
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNpcSugarDaddyHaggle(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      } else {
        if ((Math.floor(Math.random() * (((s as any).pcs_persuas ?? 0) - 1 + 1)) + (1)) > ((s as any).npc_willpower ?? 0)?.[String((s as any).npcID ?? 0)]  ||  ((s as any).sex_ev ?? 0)?.['sugar_daddy_counteroffer'] < ((s as any).sex_ev ?? 0)?.['sugar_daddy_offer'] + 2) {
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['sugar_daddy_offer'] = ((s as any).sex_ev ?? 0)?.['sugar_daddy_counteroffer'];
          qspCall(s, 'sex_ev_stats', 'sugar_daddy_add');
          // TODO-QSP: dynamic text: "Why don''t we say... <<$func(''money'', ''string_profit'', sex_ev[''sugar_daddy...
          scene.text(`"Why don't we say... ${qspFunc(s, 'money', 'string_profit', (((s as any).sex_ev ?? {})?.['sugar_daddy_counteroffer'] ?? 0) * 100)}?" you smirk, ${((s as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "That seems worth my time."`);
          // TODO-QSP: dynamic text: "You drive a hard bargain baby girl," <<$npcdesc>> grins back. "But I think I ca...
          scene.text(`"You drive a hard bargain baby girl," ${((s as any).npcdesc ?? '')} grins back. "But I think I can work with that. Give me your number so I can tell you when to come over.`);
          scene.text('You hand him your phone and when you get it back you see he\'s the latest saved contact.');
          qspCall(s, 'sex_ev_leave', 'leaving_dialogue_choices');
        } else {
          if (((s as any).sex_ev ?? 0)?.['haggle_fail'] === 1) {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNpcSugarDaddyHaggleFail(s, scene); (s as any).locArgs = __savedLocArgs; }
          } else {
            ((s as any).sex_ev = (s as any).sex_ev ?? {})['sugar_daddy_offer'] = ((s as any).sex_ev['sugar_daddy_offer'] ?? 0) + ((Math.floor(Math.random() * 2) + 1));
            // TODO-QSP: dynamic text: "How about... <<$func(''money'', ''string_profit'', sex_ev[''sugar_daddy_counter...
            scene.text(`"How about... ${qspFunc(s, 'money', 'string_profit', (((s as any).sex_ev ?? {})?.['sugar_daddy_counteroffer'] ?? 0) * 100)}?" you ask, ${((s as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}.`);
            // TODO-QSP: dynamic text: "Seems a little steep," <<$npcdesc>> frowns. "Why don''t we try <<$func(''money'...
            scene.text(`"Seems a little steep," ${((s as any).npcdesc ?? '')} frowns. "Why don't we try ${qspFunc(s, 'money', 'string_profit', (((s as any).sex_ev ?? {})?.['sugar_daddy_offer'] ?? 0) * 100)}?`);
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNpcSugarDaddyHaggle(s, scene); (s as any).locArgs = __savedLocArgs; }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterNpcSugarDaddyHaggleFail(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['haggle_limit'] = qspFunc(s, 'sex_ev_stats', 'sugar_daddy_haggle_limit');
  // TODO-QSP: dynamic text: "How about <<$func(''money'', ''string_profit'', sex_ev[''sugar_daddy_counteroff...
  scene.text(`"How about ${qspFunc(s, 'money', 'string_profit', (((s as any).sex_ev ?? {})?.['sugar_daddy_counteroffer'] ?? 0) * 100)}?" you try again, ${((s as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}.`);
  if (((s as any).sex_ev ?? 0)?.['sugar_daddy_counteroffer'] > ((s as any).sex_ev ?? 0)?.['haggle_limit']) {
    // TODO-QSP: dynamic text: "Who do you think you are?" <<$npcdesc>> scoffs. "I could fuck a supermodel for ...
    scene.text(`"Who do you think you are?" ${((s as any).npcdesc ?? '')} scoffs. "I could fuck a supermodel for that kind of money. You know what? Forget it. I don't need another gold digger in my life."`);
  } else {
    // TODO-QSP: dynamic text: "Still too rich for my blood," <<$npcdesc>> says with a shake of his head. "You ...
    scene.text(`"Still too rich for my blood," ${((s as any).npcdesc ?? '')} says with a shake of his head. "You know what? Forget it. I don't need another gold digger in my life."`);
  }
  if (((s as any).sex_ev ?? 0)?.['dress_end'] === 0) {
    scene.text('Everything becomes very awkward very quickly and you take that as your cue to finish getting dressed in a hurry and head out the door.');
  } else {
    scene.text('Everything becomes very awkward very quickly and you take that as your cue to grab your things and hurry out the door.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
  ]);
  scene.build();
}

function enterFuckbuddyText(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_stats', 'fuckbuddy_add');
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['text_message'] = (Math.floor(Math.random() * 2) + 1);
  if (((s as any).sex_ev ?? 0)?.['text_message'] === 1) {
    // TODO-QSP: '  ' + $func('wrap', 'accent b', 'hey fuck buddy')
    scene.text('"Hey yourself," you say aloud, smiling at him. "Anyways, see you around."');
  } else {
    if (((s as any).sex_ev ?? 0)?.['text_message'] === 2) {
      // TODO-QSP: '  ' + $func('wrap', 'accent b', 'send nudes')
      scene.text('"We\'ll see about that," you roll your eyes back. "Anyways, see you around."');
    }
  }
  scene.text('That little exchange done, you cheerfully wave him goodbye and head out the door.');
  // TODO-QSP: end
  scene.build();
}

function enterLeaveMenu(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish getting dressed', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_leave', 'dressing_finish'
  } },
    { label: 'We should hook up again later (fuckbuddies?)', goto: ['sex_ev_hookup_leave', 'pc_fuckbuddy_request'] },
    { label: 'Maybe I could see you again sometime? (dating?)', goto: ['sex_ev_hookup_leave', 'pc_date_request'] },
  ]);
  scene.build();
}

function enterJustAHookup(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) >= 20  ||  ((s as any).hour ?? 0) <= 9) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['just_a'] = 'one night stand';
  } else {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['just_a'] = 'random hookup';
  }
  // TODO-QSP: end
  scene.actions([
    { label: '', labelFn: (s: GameState) => 'This was a ' + String(((s as any).sex_ev ?? 0)?.['just_a'] ?? '' ?? ''), handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "No," you shake your head, <<$sex_ev[''dress_describe'']>>. "This was just a <<$...
    scene.text(`"No," you shake your head, ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "This was just a ${((st as any).sex_ev ?? 0)?.['just_a'] ?? ''}. I'm not looking for anything lasting."`);
    if (((st as any).sex_ev ?? 0)?.['continuation'] === 1) {
      scene.text('"Whatever, your loss," he shrugs.');
      scene.text('"Pfft-! Yeah, sure," you snigger back, pulling on the rest of your clothes. You give yourself a once over, making sure everything\'s in place and wave goodbye as you head towards the door.');
    } else {
      if (((st as any).sex_ev ?? 0)?.['continuation'] === 2) {
        // TODO-QSP: dynamic text: "Oh. Uhh, well..." <<$npcdesc>> trails off and you''re left in an extremely unco...
        scene.text(`"Oh. Uhh, well..." ${((st as any).npcdesc ?? '')} trails off and you're left in an extremely uncomfortable silence while you get dressed in front of him.`);
        // TODO-QSP: dynamic text: <i>Holy fuck this is awkward,</i> you think to yourself as you pull the last of ...
        scene.text(`<i>Holy fuck this is awkward,</i> you think to yourself as you pull the last of your clothes on. After giving yourself a once over, you give ${((st as any).npcdesc ?? '')} a strained smile and wave goodbye, quickly striding towards the door to escape.`);
      }
    }
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterHaveABoyfriend(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['boyfriends_current'] > 0) {
    scene.actions([
      { label: 'I have a boyfriend', handler: (st: GameState) => {
    ((st as any).npc_know_girlfriend = (st as any).npc_know_girlfriend ?? {})[String((st as any).npcID ?? 0)] = 0;
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "I have a boyfriend," you say, giving him a look as you''re <<$sex_ev[''dress_de...
    scene.text(`"I have a boyfriend," you say, giving him a look as you're ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}.`);
    if (((st as any).sex_ev ?? 0)?.['sugar_daddy_offer'] > 0) {
      // TODO-QSP: dynamic text: "So?" <<$npcdesc>> grins shamelessly. "Does that change the value of the money?"
      scene.text(`"So?" ${((st as any).npcdesc ?? '')} grins shamelessly. "Does that change the value of the money?"`);
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcSugarDaddyRefuse(st, scene); (st as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcSugarDaddyHowMuch(st, scene); (st as any).locArgs = __savedLocArgs; }
      scene.actions([
        { label: 'So long as you know', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    qspCall(st, 'sex_ev_stats', 'fuckbuddy_add');
    // TODO-QSP: dynamic text: "Just wanted to make sure you knew," you reply, shrugging as you''re <<$sex_ev['...
    scene.text(`"Just wanted to make sure you knew," you reply, shrugging as you're ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "So how much are we talking here?"`);
    // TODO-QSP: dynamic text: "How about... <<$func(''money'', ''string_profit'', sex_ev[''sugar_daddy_offer''...
    scene.text(`"How about... ${qspFunc(s, 'money', 'string_profit', (((st as any).sex_ev ?? {})?.['sugar_daddy_offer'] ?? 0) * 100, 1)} a 'date?'"`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcSugarDaddyAccept(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    } else {
      if (((st as any).npc_fidelity_num ?? 0)?.[String((st as any).npcID ?? 0)] <= 5) {
        if (((st as any).npc_girlfriend ?? 0)?.[String((st as any).npcID ?? 0)] === 1  &&  ((st as any).npc_goal ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
          scene.text('"So? I have a girlfriend," he grins shamelessly. "Doesn\'t mean we can\'t keep fucking."');
          scene.actions([
            { label: 'No way', handler: (st: GameState) => {
    scene.img('images/shared/romance/misc/depart_annoyed1.mp4');
    scene.text('"Yeah, no," you grimace. "That\'s a kind of drama I <i>don\'t</i> want to deal with.');
    scene.text('And with that, you pick up the rest of your things and head out the door.');
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
    ]);
  } },
            { label: 'So long as you know', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    qspCall(st, 'sex_ev_stats', 'fuckbuddy_add');
    // TODO-QSP: dynamic text: "So long as you know," you reply, <<$sex_ev[''dress_describe'']>>. You exchange ...
    scene.text(`"So long as you know," you reply, ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. You exchange numbers with him and a moment later a notification pings in your messages.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFuckbuddyText(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
    ]);
  } },
          ]);
        } else {
          scene.text('"Whatever, your loss," he shrugs. "Looks like I\'m a better lay than him anyways."');
          scene.text('"Yeah, sure," you snigger back, pulling on the rest of your clothes. You give yourself a once over, making sure everything\'s in place and wave goodbye as you head towards the door.');
          scene.actions([
            { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
          ]);
        }
      } else {
        // TODO-QSP: dynamic text: "Oh. Uhh, well..." <<$npcdesc>> trails off and you''re left in an extremely unco...
        scene.text(`"Oh. Uhh, well..." ${((st as any).npcdesc ?? '')} trails off and you're left in an extremely uncomfortable silence while you get dressed in front of him.`);
        // TODO-QSP: dynamic text: <i>Holy fuck this is awkward,</i> you think to yourself as you pull the last of ...
        scene.text(`<i>Holy fuck this is awkward,</i> you think to yourself as you pull the last of your clothes on. After giving yourself a once over, you give ${((st as any).npcdesc ?? '')} a strained smile and wave goodbye, quickly striding towards the door to escape.`);
        scene.actions([
          { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
        ]);
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterHaveAGirlfriend(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_girlfriends ?? 0) > 0) {
    scene.actions([
      { label: 'I have a girlfriend', handler: (st: GameState) => {
    ((st as any).npc_know_girlfriend = (st as any).npc_know_girlfriend ?? {})[String((st as any).npcID ?? 0)] = 1;
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "I have a girlfriend," you say, giving him a look as you''re <<$sex_ev[''dress_d...
    scene.text(`"I have a girlfriend," you say, giving him a look as you're ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}.`);
    if (((st as any).sex_ev ?? 0)?.['sugar_daddy_offer'] > 0) {
      // TODO-QSP: dynamic text: "So?" <<$npcdesc>> grins shamelessly. "Does that change the value of the money?"
      scene.text(`"So?" ${((st as any).npcdesc ?? '')} grins shamelessly. "Does that change the value of the money?"`);
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcSugarDaddyRefuse(st, scene); (st as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcSugarDaddyHowMuch(st, scene); (st as any).locArgs = __savedLocArgs; }
      scene.actions([
        { label: 'So long as you know', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    qspCall(st, 'sex_ev_stats', 'fuckbuddy_add');
    // TODO-QSP: dynamic text: "Just wanted to make sure you knew," you reply, shrugging as you''re <<$sex_ev['...
    scene.text(`"Just wanted to make sure you knew," you reply, shrugging as you're ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "So how much are we talking here?"`);
    // TODO-QSP: dynamic text: "How about... <<$func(''money'', ''string_profit'', sex_ev[''sugar_daddy_offer''...
    scene.text(`"How about... ${qspFunc(s, 'money', 'string_profit', (((st as any).sex_ev ?? {})?.['sugar_daddy_offer'] ?? 0) * 100, 1)} a 'date?'"`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcSugarDaddyAccept(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    } else {
      if (((st as any).npc_fidelity_num ?? 0)?.[String((st as any).npcID ?? 0)] <= 5) {
        if (((st as any).npc_girlfriend ?? 0)?.[String((st as any).npcID ?? 0)] === 1  &&  ((st as any).npc_goal ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
          scene.text('"Hey, me too!" he grins shamelessly.');
          scene.actions([
            { label: 'No way', handler: (st: GameState) => {
    scene.img('images/shared/romance/misc/depart_annoyed1.mp4');
    scene.text('"Nice try but no," you grimace, and pick up the rest of your things and head out the door.');
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
    ]);
  } },
            { label: 'So long as you know', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    qspCall(st, 'sex_ev_stats', 'fuckbuddy_add');
    // TODO-QSP: dynamic text: "So long as you know," you reply, <<$sex_ev[''dress_describe'']>>. You exchange ...
    scene.text(`"So long as you know," you reply, ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. You exchange numbers with him and a moment later a notification pings in your messages.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFuckbuddyText(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
    ]);
  } },
          ]);
        } else {
          scene.text('"Whatever, your loss," he shrugs. "Bi girls always come back when they start missing dick."');
          scene.text('"That\'s what strapons are for," you roll your eyes, pulling on the rest of your clothes. You give yourself a once over, making sure everything\'s in place and wave goodbye as you head towards the door.');
          scene.actions([
            { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
          ]);
        }
      } else {
        // TODO-QSP: dynamic text: "Oh. Uhh, well..." <<$npcdesc>> trails off and you''re left in an extremely unco...
        scene.text(`"Oh. Uhh, well..." ${((st as any).npcdesc ?? '')} trails off and you're left in an extremely uncomfortable silence while you get dressed in front of him.`);
        // TODO-QSP: dynamic text: <i>Holy fuck this is awkward,</i> you think to yourself as you pull the last of ...
        scene.text(`<i>Holy fuck this is awkward,</i> you think to yourself as you pull the last of your clothes on. After giving yourself a once over, you give ${((st as any).npcdesc ?? '')} a strained smile and wave goodbye, quickly striding towards the door to escape.`);
        scene.actions([
          { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
        ]);
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'i_should_go':
      enterIShouldGo(s, scene);
      break;
    case 'thanks_for_fun':
      enterThanksForFun(s, scene);
      break;
    case 'kicked_out':
      enterKickedOut(s, scene);
      break;
    case 'kicked_out_menu':
      enterKickedOutMenu(s, scene);
      break;
    case 'hookup_continuation':
      enterHookupContinuation(s, scene);
      break;
    case 'spend_the_night':
      enterSpendTheNight(s, scene);
      break;
    case 'pc_fuckbuddy_request':
      enterPcFuckbuddyRequest(s, scene);
      break;
    case 'pc_date_request':
      enterPcDateRequest(s, scene);
      break;
    case 'npc_fuckbuddy_request':
      enterNpcFuckbuddyRequest(s, scene);
      break;
    case 'npc_date_request':
      enterNpcDateRequest(s, scene);
      break;
    case 'npc_sugar_daddy_offer':
      enterNpcSugarDaddyOffer(s, scene);
      break;
    case 'npc_sugar_daddy_refuse':
      enterNpcSugarDaddyRefuse(s, scene);
      break;
    case 'npc_sugar_daddy_how_much':
      enterNpcSugarDaddyHowMuch(s, scene);
      break;
    case 'npc_sugar_daddy_accept':
      enterNpcSugarDaddyAccept(s, scene);
      break;
    case 'npc_sugar_daddy_haggle':
      enterNpcSugarDaddyHaggle(s, scene);
      break;
    case 'npc_sugar_daddy_haggle2':
      enterNpcSugarDaddyHaggle2(s, scene);
      break;
    case 'npc_sugar_daddy_haggle_fail':
      enterNpcSugarDaddyHaggleFail(s, scene);
      break;
    case 'fuckbuddy_text':
      enterFuckbuddyText(s, scene);
      break;
    case 'leave_menu':
      enterLeaveMenu(s, scene);
      break;
    case 'just_a_hookup':
      enterJustAHookup(s, scene);
      break;
    case 'have_a_boyfriend':
      enterHaveABoyfriend(s, scene);
      break;
    case 'have_a_girlfriend':
      enterHaveAGirlfriend(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const sex_ev_hookup_leave: LocationDef = {
  name: 'sex_ev_hookup_leave',
  title: 'hey cutie',
  region: 'other',
  enter: enter,
};
