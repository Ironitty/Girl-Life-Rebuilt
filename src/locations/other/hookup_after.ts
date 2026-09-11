import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterExit(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'end');
  ((s as any).stat ?? {})['hookup'] = (((s as any).stat ?? {})['hookup'] ?? 0) + (1);
  ((s as any).npc_hookup ?? {})[String((s as any).npcID ?? 0)] = (((s as any).npc_hookup ?? {})[String((s as any).npcID ?? 0)] ?? 0) + (1);
  ((s as any).npc_last_sex ?? {})[String((s as any).npcID ?? 0)] = ((s as any).daystart ?? 0);
  if (((s as any).hookup ?? 0)?.['virgin'] === 1  &&  ((s as any).hookup ?? 0)?.['fuck'] > 0) {
    ((s as any).npc_virgin_take ?? {})[String((s as any).npcID ?? 0)] = 1;
  }
  qspCall(s, 'hookup_after', 'dress');
  if (((s as any).hookup ?? 0)?.['fuckbuddy'] > 0) {
    ((s as any).know_virgin ?? {})[String((s as any).npcID ?? 0)] = ((s as any).hookup ?? 0)?.['virgin'];
    qspCall(s, 'lover', 'add_fuckbuddy', ((s as any).npcID ?? 0));
    ((s as any).npc_no_booty_call ?? {})[String((s as any).npcID ?? 0)] = ((s as any).daystart ?? 0);
  }
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 'pav_residential') {
    qspCall(s, 'fame', 'pav', 'sex', Math.floor(Math.random() * 4) + 2);
    scene.actions([{ label: 'Continue', goto: ['pav_residential', ''] }]);
  } else {
    if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 'uni_grounds') {
      qspCall(s, 'fame', 'city', 'sex', Math.floor(Math.random() * 4) + 2);
      scene.actions([{ label: 'Continue', goto: ['uni_grounds', ''] }]);
    } else {
      if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 'city_residential') {
        qspCall(s, 'fame', 'city', 'sex', Math.floor(Math.random() * 4) + 2);
        scene.actions([{ label: 'Continue', goto: ['city_residential', ''] }]);
      } else {
        if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 'city_center') {
          qspCall(s, 'fame', 'city', 'sex', Math.floor(Math.random() * 4) + 2);
          scene.actions([{ label: 'Continue', goto: ['city_center', ''] }]);
        } else {
          if (((s as any).region ?? 0) === 'pav') {
            scene.actions([{ label: 'Continue', goto: ['pav_residential', ''] }]);
          } else {
            if (((s as any).region ?? 0) === 'city') {
              scene.actions([{ label: 'Continue', goto: ['city_residential', ''] }]);
            } else {
              scene.actions([{ label: 'Continue', goto: ['pav_residential', ''] }]);
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDress(s: GameState, scene: SceneBuilder): void {
  if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).clothingworntype ?? 0)?.['hookup'] !== '') {
    qspCall(s, 'outfit', 'restore', 'hookup');
    qspCall(s, 'stat', '');
  }
  // TODO-QSP: end
  scene.build();
}

function enterCreampieMad(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hookup ?? 0)?.['condom'] === 2) {
    scene.text('"Sorry, I-');
    scene.text('"What the fuck! This is why I wanted you to use a fucking condom!"');
    scene.text('<i>Why didn\'t I just make him use a condom...</i>');
  } else {
    if (((s as any).hookup ?? 0)?.['condom'] === 3) {
      scene.text('"Sorry, your pussy was just so tight and I-"');
      scene.text('"Sorry?! Are you fucking kidding me?! You I fucking <i>told</i> you not to!"');
      scene.text('<i>I fucking told him not to...</i>');
    } else {
      if (((s as any).hookup ?? 0)?.['condom'] === 4) {
        scene.text('"Sorry, your pussy was just so tight and I-"');
        scene.text('"Sorry?! Are you fucking kidding me?! I <i>told</i> you to pull out!"');
        scene.text('<i>Why didn\'t he pull out...</i>');
      } else {
        scene.text('"Sorry, I-"');
        scene.text('"Are you fucking kidding me? Who the fuck said you could cum inside me?!"');
        scene.text('<i>What the fuck was he thinking?!</i>');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Cool off', handler: (st: GameState) => {
    scene.text(`<center><b>${((s as any).npcdesc ?? 0)}'s Bedroom</b></center>`);
    // TODO-QSP: $npc_apt_bedroom[$npcID]
    // TODO-QSP: dynamic text: After your initial tirade, you take a few deep breaths, calming down while <<$np...
    scene.text(`After your initial tirade, you take a few deep breaths, calming down while ${((s as any).npcdesc ?? 0)} tries to apologize to you.`);
    scene.text('"Listen, I\'m really sorry about that. It was a mistake, honest."');
    if (((s as any).birth_control ?? 0)?.['think_safe'] < 1) {
      scene.actions([
        { label: 'I\'ll buy a morning-after pill (apologetic)', handler: (st: GameState) => {
    scene.text('"It\'s fine," you sigh, taking another deep breath. "I\'ll just buy a morning-after pill tomorrow. I shouldn\'t have freaked out so much. Sorry."');
    qspCall(s, 'hookup_after', 'pre');
  } },
        { label: 'I\'ll buy a morning-after pill (calm)', handler: (st: GameState) => {
    scene.text('"It\'s fine," you say, shaking your head. "I\'ll just buy a morning-after pill."');
    qspCall(s, 'hookup_after', 'pre');
  } },
        { label: 'I\'ll buy a morning-after pill (nervous)', handler: (st: GameState) => {
    scene.text('"Everything will be okay," you say, still taking deep breaths. "I\'ll just buy a morning-after pill. I won\'t get pregnant, everything will be fine..." You keep repeating the words to yourself and eventually your heartrate decreases and you feel calm again.');
    qspCall(s, 'hookup_after', 'pre');
  } },
      ]);
    }
    scene.actions([
      { label: 'Whatever, it\'s fine', handler: (st: GameState) => {
    scene.text('"Whatever, it\'s fine," you huff, waving your hand dismissively. "A mistake, like you said..." You say it\'s fine, but you\'re still pretty pissed. More than anything, you\'re...');
    scene.actions([
      { label: '... angry with <<$npcdesc>>', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: ... angry with <<$npcdesc>>.
    scene.text(`... angry with ${((s as any).npcdesc ?? 0)}.`);
    scene.text('<i>Fine? How could it be fine?!</i> you fume internally. <i>What part of you blowing your load inside me is "fine"?!</i>');
    qspCall(s, 'hookup_after', 'pre');
  } },
      { label: '... angry with yourself', handler: (st: GameState) => {
    scene.text('... angry with yourself.');
    if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
      scene.text('<i>Idiot!</i> you scold yourself internally. <i>Moron! Bimbo! Dumbass! Slut! What were you thinking, not using a condom?! What are you going to do if you come up with an STD from this?</i>');
    } else {
      scene.text('<i>Idiot!</i> you scold yourself internally. <i>Moron! Bimbo! Dumbass! Slut! What were you thinking, not using a condom?! What are you going to do if you end up pregnant?</i>');
    }
    qspCall(s, 'hookup_after', 'pre');
  } },
    ]);
  } },
      { label: 'I overreacted', handler: (st: GameState) => {
    scene.text('"It\'s fine," you sigh. "I overreacted. You\'re right, it\'s just a mistake. I\'m sure I\'ll be alright."');
    qspCall(s, 'hookup_after', 'pre');
  } },
    ]);
  } },
    { label: 'Angrily leave', handler: (st: GameState) => {
    scene.img('images/shared/romance/misc/depart1.mp4');
    scene.text('"I can\'t believe you did this!" You stomp away from him, grabbing your clothes and throwing them on as fast as you can.');
    scene.text('"I told you, I\'m sorry, I-"');
    scene.text('"Sorry isn\'t going to make up for this!" you hiss.');
    scene.text('Grabbing the rest of your things, you stalk straight to the door and fling it open, slamming it shut behind you.');
    scene.actions([
      { label: 'Leave', goto: ['hookup_after', 'exit'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterCreampiePanic(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hookup ?? 0)?.['condom'] === 2) {
    scene.text('"Ohmygodohmygodohmygodohmygod!" You cut him off with a torrent of words that spill from your mouth and globs of cum spill from your pussy, causing you to hyperventilate. "You said-! Not inside-!"');
  } else {
    if (((s as any).hookup ?? 0)?.['condom'] === 3) {
      scene.text('"Sorry, your pussy was just so tight and I-"');
      scene.text('"Ohmygodohmygodohmygodohmygod!" You cut him off with a torrent of words that spill from your mouth and globs of cum spill from your pussy, causing you to hyperventilate. "You said-! You promised-!"');
    } else {
      if (((s as any).hookup ?? 0)?.['condom'] === 4) {
        scene.text('"Ohmygodohmygodohmygodohmygod!" You cut him off with a torrent of words that spill from your mouth and globs of cum spill from your pussy, causing you to hyperventilate. "You said-! I told you-!"');
      } else {
        scene.text('"Ohmygodohmygodohmygodohmygod!" You cut him off with a torrent of words that spill from your mouth and globs of cum spill from your pussy, causing you to hyperventilate.');
      }
    }
  }
  scene.text('You put your hand to your head as you begin to feel faint.');
  // TODO-QSP: dynamic text: "Jeez, I didn't know you were going to freak out like this," <<$npcdesc>> says, ...
  scene.text(`"Jeez, I didn't know you were going to freak out like this," ${((s as any).npcdesc ?? 0)} says, holding his hands up defensively. "Just chill out! You can buy a morning-after pill tomorrow, it'll be fine."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Calm down', handler: (st: GameState) => {
    scene.text(`<center><b>${((s as any).npcdesc ?? 0)}'s Bedroom</b></center>`);
    // TODO-QSP: $npc_apt_bedroom[$npcID]
    // TODO-QSP: dynamic text: Trying to focus on his words, you force yourself to take deep, slow breaths, cal...
    scene.text(`Trying to focus on his words, you force yourself to take deep, slow breaths, calming down while ${((s as any).npcdesc ?? 0)} tries to apologize to you.`);
    scene.text('"See? It\'s all gonna be fine."');
    scene.actions([
      { label: 'He\'s right, it\'ll be fine', handler: (st: GameState) => {
    if (((s as any).birth_control ?? 0)?.['think_safe'] < 1) {
      scene.text('<i>He\'s right, it\'ll be okay. You\'re going to get a morning-after pill tomorrow and you\'re <b>not</b> going to get pregnant. You\'re going to remember to go to the pharmacy, you\'re going to remember to take the pill, and you\'re not going to get knocked up tonight! Everything is going to be fine! <b>It\'s going to be fine!</b></i>');
    } else {
      scene.text('<i>He\'s right, it\'ll be okay. You\'re on birth control so you don\'t need another pill. You\'re not going to get pregnant! And he\'s not going to have an STD. Can\'t have one! Because if he did that would be... Nope! I\'m not gonna think about that! Because I\'m not getting an STD tonight! Everything is going to be fine! <b>It\'s going to be fine!</b></i>');
    }
    scene.text('After running through this thought process several more times accompanied by many more breaths, you finally begin to calm down.');
    qspCall(s, 'hookup_after', 'pre');
  } },
    ]);
  } },
    { label: 'I have to go!', handler: (st: GameState) => {
    scene.img('images/shared/romance/misc/depart1.mp4');
    scene.text('"I have to go!" Without warning, you spring up and start grabbing your things, throwing on your clothes with frantic haste.');
    scene.text('"Wha- Where are you going?!"');
    if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
      scene.text('"I just have to go!"');
      scene.text('"I told you, if you\'re worried you can just get-"');
      scene.text('"That\'s not what this is about!"');
      scene.text('"Then-!"');
      scene.text('"Can\'ttalkgottago!"');
      scene.text('You don\'t wait to hear what he was trying to say and dash out the door.');
      scene.text('<i>Fuck! What am I going to do if I get an STD?!</i>');
    } else {
      scene.text('"I need to get a morning-after pill!"');
      scene.text('"Right now?!"');
      scene.text('"Right now!!! I can\'t wait even one minute! I can\'t get knocked up!"');
      if (((s as any).hour ?? 0) >= 21) {
        scene.text('"No pharmacy is open this time of night! Stop freaking out! Y-"');
        scene.text('"Can\'ttalkgottago!"');
        scene.text('You don\'t wait to hear what he was trying to say and dash out the door.');
      } else {
        scene.text('"Why the rush?? You don\'t have to do it right this second-"');
        scene.text('"I have to to be sure! I gotta get it today before the pharmacy closes!"');
        scene.text('"But-!"');
        scene.text('"Can\'ttalkgottago!"');
        scene.text('You don\'t wait to hear what he was trying to say and dash out the door.');
      }
    }
    scene.actions([
      { label: 'Leave', goto: ['hookup_after', 'exit'] },
    ]);
  } },
    { label: 'That\'s not what I\'m concerned about! (STDs)', handler: (st: GameState) => {
    scene.text(`<center><b>${((s as any).npcdesc ?? 0)}'s Bedroom</b></center>`);
    // TODO-QSP: $npc_apt_bedroom[$npcID]
    scene.text('"That\'s not what I\'m concerned about!" you say, your hyperventilating getting worse.');
    scene.text('"Then wha- Wait, you think I have an STD???"');
    scene.text('"I don\'t know! You could! I just don\'t know!"');
    scene.text('"If you were really concerned about that then why would you let me fuck without a condom??"');
    if (((s as any).hookup ?? 0)?.['condom'] >= 2) {
      scene.text('"You didn\'t want to use one!" you yelp.');
    } else {
      scene.text('"<i>I! DON\'T! KNOW!</i>" you scream.');
    }
    scene.text('"Well I\'m fucking clean, alright?! I promise!"');
    scene.actions([
      { label: 'Calm down', handler: (st: GameState) => {
    scene.text(`<center><b>${((s as any).npcdesc ?? 0)}'s Bedroom</b></center>`);
    // TODO-QSP: $npc_apt_bedroom[$npcID]
    // TODO-QSP: dynamic text: Trying to focus on his words, you force yoruself to take deep, slow breaths, cal...
    scene.text(`Trying to focus on his words, you force yoruself to take deep, slow breaths, calming down while ${((s as any).npcdesc ?? 0)} tries to reassure you.`);
    scene.text('<i>He\'s right, it\'ll be okay. You\'re on birth control and he came inside you so it\'s okay! He\'s not going to have an STD. Can\'t have one! Because if he did that would... Nope! I\'m not gonna think about that! Because I\'m not getting an STD tonight! Everything is going to be fine! <b>It\'s going to be fine!</b></i>');
    scene.text('After running through this thought process several more times accompanied by many more breaths, you finally begin to calm down.');
    qspCall(s, 'hookup_after', 'pre');
  } },
      { label: 'I have to go!', handler: (st: GameState) => {
    scene.img('images/shared/romance/misc/depart1.mp4');
    scene.text('"I have to go!" Without warning, you spring up and start grabbing your things, throwing on your clothes with frantic haste.');
    scene.text('"Wha- Where are you going?!"');
    scene.text('"I just have to go!"');
    scene.text('"If you\'re worried about that then leaving now isn\'t going to-"');
    scene.text('"That\'s not what this is about!"');
    scene.text('"Then-!"');
    scene.text('"Can\'ttalkgottago!"');
    scene.text('You don\'t wait to hear what he was trying to say, you don\'t even really know what you\'re saying, and you dash out the door.');
    scene.text('<i>Fuck! What am I going to do if I get an STD?!</i>');
    scene.actions([
      { label: 'Leave', goto: ['hookup_after', 'exit'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterCreampieReact(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hookup ?? 0)?.['condom'] > 1  &&  ((s as any).hookup ?? 0)?.['creampie_ask'] > 0) {
    scene.text('"I thought you didn\'t want me to cum inside," he pants.');
    scene.actions([
      { label: 'I changed my mind', handler: (st: GameState) => {
    if (((s as any).hookup ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/cum/vagcreampie/miss1.jpg');
      scene.text('You prop yourself up on your elbows, looking down between your legs, feeling the cum trickle from your pussy, feeling a little dazed.');
    } else {
      if (((s as any).hookup ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/cum/vagcreampie/doggy1.jpg');
        scene.text('You lay down on your stomach, letting the cum slowly ooze from between your legs.');
      } else {
        if (((s as any).hookup ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/cum/vagcreampie/cowgirl1.mp4');
          scene.text('You lay back on the bed, letting the cum trickle from your pussy run down the curve of your ass.');
        }
      }
    }
    scene.text('"Changed my mind," you smile tiredly.');
    qspCall(s, 'hookup_after', 'pre');
    qspCall(s, 'hookup_talk', 'pillow_talk1');
  } },
    ]);
  }
  if (((s as any).hookup ?? 0)?.['creampie_surprise'] === 1) {
    if (((s as any).orgasm ?? 0) === ((s as any).hookup ?? 0)?.['orgasm']) {
      scene.actions([
        { label: 'Come', handler: (st: GameState) => {
    ((s as any).hookup ?? {})['cum_together'] = 1;
    ((s as any).hookup ?? {})['creampie_surprise_cum'] = 1;
    qspCall(s, 'arousal', 'vaginal', (-1), 'no_orgasm_msg');
    qspCall(s, 'stat', '');
    if (((s as any).hookup ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/cum/vagcreampie/creampie1.mp4');
    } else {
      if (((s as any).hookup ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/orgasm1.mp4');
      } else {
        if (((s as any).hookup ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/cum/vagcreampie/cumvaginal.mp4');
        }
      }
    }
    // TODO-QSP: dynamic text: <<$npcdesc>>'s cock pulses inside you, pumping more heat into your insides. It f...
    scene.text(`${((s as any).npcdesc ?? 0)}'s cock pulses inside you, pumping more heat into your insides. It fills you up, making you feel euphoric, and sends you right over the edge.`);
    // TODO-QSP: dynamic text: Orgasmic tremors quake through your body, covering your skin in goosebumps as yo...
    scene.text(`Orgasmic tremors quake through your body, covering your skin in goosebumps as your eyes roll back in your skull and moan incoherently. You tremble, unable to do anything except quiver around ${((s as any).npcdesc ?? 0)}'s cock, even long after it finishes twitching inside you.`);
    scene.actions([
      { label: 'Continue', goto: ['hookup_after', 'creampie_surprise_cum'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'What the fuck!', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/cum111.jpg');
    if (((s as any).hookup ?? 0)?.['condom'] === 2) {
      scene.text('"What the fuck!" you scream, jumping up. You look down between your legs and wipe your hand across your pussy, confirming your suspicions when your fingers come back with a viscous white liquid on them. "You just came inside me!"');
    } else {
      if (((s as any).hookup ?? 0)?.['condom'] === 3) {
        scene.text('"What the fuck!" you scream, jumping up. You look down between your legs and wipe your hand across your pussy, confirming your suspicions when your fingers come back with a viscous white liquid on them. "I told you not to cum inside me!"');
      } else {
        if (((s as any).hookup ?? 0)?.['condom'] === 4) {
          scene.text('"What the fuck!" you scream, jumping up. You look down between your legs and wipe your hand across your pussy, confirming your suspicions when your fingers come back with a viscous white liquid on them. "You said you\'d pull out!"');
        } else {
          scene.text('"What the fuck!" you scream, jumping up. "Did you just cum inside me???" You look down between your legs and wipe your hand across your pussy, confirming your suspicions when your fingers come back with a viscous white liquid on them.');
        }
      }
    }
    qspCall(s, 'hookup_after', 'creampie_mad');
  } },
      { label: 'Take it in stride', handler: (st: GameState) => {
    ((s as any).hookup ?? {})['take_in_stride'] = 1;
    if (((s as any).hookup ?? 0)?.['creampie_exit'] === 0) {
      scene.text('You\'re a bit surprised, but you manage to take it in stride, letting him ride out his orgasm inside of you.');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    if (((s as any).hookup ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/cum/vagcreampie/miss1.mp4');
      scene.text('A few moments later he withdraws his cock from your pussy and you feel a stream of cum gush out after it.');
    } else {
      if (((s as any).hookup ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/cum/vagcreampie/doggy1.mp4');
        scene.text('A few moments later he pulls his cock from your pussy and you feel a thick liquid immediately dribble out after it.');
      } else {
        if (((s as any).hookup ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/cum/vagcreampie/cowgirl3.mp4');
          // TODO-QSP: dynamic text: Carefully, you raise yourself off of <<$npcdesc>>. The moment his cock is free o...
          scene.text(`Carefully, you raise yourself off of ${((s as any).npcdesc ?? 0)}. The moment his cock is free of your pussy, you feel a thick glob of cum begins to leak out of you.`);
        }
      }
    }
    if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.text('"Ahh yeah. Cumming inside is the best."');
    } else {
      scene.text('"Sorry! I didn\'t mean to-!"');
    }
    qspCall(s, 'hookup_after', 'creampie_react2');
  } },
      ]);
    } else {
      scene.img('images/shared/sex/cum/vagcreampie/miss1.jpg');
      scene.text('You\'re a bit surprised, but you take it in stride anyways, laying back on the bed and letting the cum drain from your pussy.');
      if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
        scene.text('"Ahh yeah. Cumming inside is the best."');
      } else {
        scene.text('"Sorry! I didn\'t mean to-!"');
      }
      qspCall(s, 'hookup_after', 'creampie_react2');
    }
  } },
    ]);
  }
  if (((s as any).hookup ?? 0)?.['creampie_ask'] === 0) {
    scene.actions([
      { label: 'Did you just cum inside me?', handler: (st: GameState) => {
    ((s as any).hookup ?? {})['did_you_cum_inside'] = 1;
    if (((s as any).hookup ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/cum/vagcreampie/oops.jpg');
      // TODO-QSP: dynamic text: <<$npcdesc>> pulls out of you and you feel something trickle from your pussy.
      scene.text(`${((s as any).npcdesc ?? 0)} pulls out of you and you feel something trickle from your pussy.`);
      scene.text('"Did you just... cum inside me?"');
    } else {
      if (((s as any).hookup ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/cum/vagcreampie/drip1.mp4');
        scene.text('You wait a few heartbeats and you feel something continue to drip from your pussy.');
        scene.text('"Did you just... cum inside me?"');
      } else {
        if (((s as any).hookup ?? 0)?.['position'] === 'cowgirl') {
          if (((s as any).hookup ?? 0)?.['creampie_exit'] === 1) {
            scene.img('images/shared/sex/cum/vagcreampie/miss1.jpg');
            scene.text('"Did you just... cum inside me?"');
          } else {
            scene.img('images/shared/sex/cum/vagcreampie/creampie2.mp4');
            // TODO-QSP: dynamic text: A bit stunned, you carefully pull yourself off of <<$npcdesc>>'s cock. As it pop...
            scene.text(`A bit stunned, you carefully pull yourself off of ${((s as any).npcdesc ?? 0)}'s cock. As it pops from your pussy, you feel a glob of something leak out.`);
            scene.text('"Did you just... cum inside me?"');
          }
        }
      }
    }
    if (((s as any).hookup ?? 0)?.['not_inside'] === 1  ||  ((s as any).hookup ?? 0)?.['condom'] > 2) {
      scene.text('"I\'m so sorry! I didn\'t mean to! I know you told me not to, I just-! Really! I didn\'t mean to!"');
    } else {
      scene.text('"Yeah, your pussy was so tight, I just couldn\'t help it."');
    }
    if (((s as any).hookup ?? 0)?.['not_inside'] === 1  ||  ((s as any).hookup ?? 0)?.['condom'] === 2  ||  ((s as any).hookup ?? 0)?.['condom'] === 3) {
      scene.actions([
        { label: 'Forgive the mistake', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/cum6.jpg');
    scene.text('"It\'s okay I guess," you say, leaning back, letting the cum continue trickling out of you.');
    if (((s as any).tabletkishot ?? 0) > 0  ||  ((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
      qspCall(s, 'hookup_after', 'birth_control');
    } else {
      qspCall(s, 'hookup_after', 'birth_control_lie');
      qspCall(s, 'hookup_after', 'preg_responsibility_tease');
      qspCall(s, 'hookup_after', 'preg_responsibility_glare');
    }
    scene.actions([
      { label: 'I\'ll be fine', handler: (st: GameState) => {
    scene.text('You bite your lip for a moment considering the situation. You decide it isn\'t a big deal.');
    scene.text('<i>I\'ll probably be fine. I mean, what are the odds that something bad happens, right?</i>');
    qspCall(s, 'hookup_after', 'pre');
  } },
      { label: 'I\'ll buy a morning-after pill', handler: (st: GameState) => {
    scene.text('You bite your lip for a moment considering the situation.');
    scene.text('<i>Well... that probably isn\'t good... I\'ll have to buy a morning-after pill tomorrow. As long as I don\'t forget it should be fine, right?</i>');
    qspCall(s, 'hookup_after', 'pre');
  } },
    ]);
  } },
      ]);
    }
    qspCall(s, 'hookup_after', 'creampie_react2');
    scene.actions([
      { label: 'What the fuck!', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'hands', ((s as any).npcID ?? 0), 1);
    scene.img('images/shared/sex/cum/cum111.jpg');
    if (((s as any).hookup ?? 0)?.['position'] === 'miss') {
      scene.text('"What the fuck!" you shout. You scramble backward off the bed and wipe your pussy with your hand, horrified when your fingers come back with white sticky liquid draped across them.');
    } else {
      if (((s as any).hookup ?? 0)?.['position'] === 'doggy') {
        scene.text('"What the fuck!" you shout, scrambling away from him off the bed. You wipe your pussy with your hand, horrified when your fingers come back with white sticky liquid draped across them.');
      } else {
        if (((s as any).hookup ?? 0)?.['position'] === 'cowgirl') {
          scene.text('"What the fuck!" you shout, scrambling away from him. You wipe your pussy with your hand, horrified when your fingers come back with white sticky liquid draped across them.');
        }
      }
    }
    qspCall(s, 'hookup_after', 'creampie_mad');
  } },
      { label: 'Panic!', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'hands', ((s as any).npcID ?? 0), 1);
    scene.img('images/shared/sex/cum/cum111.jpg');
    if (((s as any).hookup ?? 0)?.['position'] === 'miss') {
      scene.text('"Holy shit!" you shout. You scramble backward off the bed and wipe your pussy with your hand, horrified when your fingers come back with white sticky liquid draped across them.');
    } else {
      if (((s as any).hookup ?? 0)?.['position'] === 'doggy') {
        scene.text('"Holy shit!" you shout, scrambling away from him off the bed. You wipe your pussy with your hand, horrified when your fingers come back with white sticky liquid draped across them.');
      } else {
        if (((s as any).hookup ?? 0)?.['position'] === 'cowgirl') {
          scene.text('"Holy shit!" you shout, scrambling away from him. You wipe your pussy with your hand, horrified when your fingers come back with white sticky liquid draped across them.');
        }
      }
    }
    qspCall(s, 'hookup_after', 'creampie_panic');
  } },
      { label: 'Just wondering', handler: (st: GameState) => {
    if (((s as any).hookup ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/cum/vagcreampie/miss1.jpg');
      scene.text('"It\'s fine," you say, looking at him through your legs. "I was just wondering."');
    } else {
      if (((s as any).hookup ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/cum/vagcreampie/doggy1.jpg');
        scene.text('"It\'s fine," you say, laying down on your stomach and snuggling your face into the pillow while the cum drips from your pussy. "Was just wondering."');
      } else {
        if (((s as any).hookup ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/cum/vagcreampie/miss1.jpg');
          scene.text('"It\'s fine," you say, looking at him through your legs. "I was just wondering."');
        }
      }
    }
    qspCall(s, 'hookup_after', 'pre');
    qspCall(s, 'hookup_talk', 'pillow_talk1');
  } },
      { label: 'That\'s hot', handler: (st: GameState) => {
    if (((s as any).hookup ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/cum/vagcreampie/miss1.jpg');
      scene.text('You prop yourself up on your elbows, looking down between your legs, letting the cum trickle from your pussy.');
    } else {
      if (((s as any).hookup ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/cum/vagcreampie/doggy1.jpg');
        scene.text('You lay down on your stomach, letting the cum slowly ooze from between your legs.');
      } else {
        if (((s as any).hookup ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/cum/vagcreampie/miss1.jpg');
          scene.text('You lay back on the bed, letting the cum continue to trickle from your pussy.');
        }
      }
    }
    scene.text('"Fucking hot," you grin.');
    scene.text('"Got a bit of a creampie fetish don\'t you?"');
    if (((s as any).hookup ?? 0)?.['creampie_surprise'] === 1) {
      scene.actions([
        { label: 'Premature ejaculation is hot', handler: (st: GameState) => {
    scene.text('"It\'s not that," you shake your head. It\'s premature ejaculation."');
    // TODO-QSP: dynamic text: <<$npcdesc>> gives you a look.
    scene.text(`${((s as any).npcdesc ?? 0)} gives you a look.`);
    scene.text('"Seriously."');
    scene.text('You nod in satisfaction, feeling a glob of cum leak out of you.');
    scene.text('"I\'m so sexy and desirable that a guy can\'t hold his load? Can\'t help but nut inside of me? <i>So</i> fucking hot!"');
    qspCall(s, 'hookup_after', 'pre');
    qspCall(s, 'hookup_talk', 'pillow_talk1');
  } },
      ]);
    }
    scene.actions([
      { label: 'Maybe', handler: (st: GameState) => {
    scene.text('"Maybe..."');
    qspCall(s, 'hookup_after', 'pre');
    qspCall(s, 'hookup_talk', 'pillow_talk1');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  qspCall(s, 'hookup_after', 'preg_responsibility_glare');
  // TODO-QSP: end
  scene.build();
}

function enterCreampieReact2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'hookup_after', 'birth_control');
  qspCall(s, 'hookup_after', 'birth_control_lie');
  qspCall(s, 'hookup_after', 'preg_responsibility_tease');
  qspCall(s, 'hookup_after', 'have_to_ask');
  if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    if (((s as any).hookup ?? 0)?.['did_you_cum_inside'] === 0  &&  ((s as any).hookup ?? 0)?.['take_in_stride'] !== 1) {
      scene.text('"Ahh yeah. Cumming inside is the best."');
    }
    scene.actions([
      { label: 'Glad you enjoyed yourself', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk2.mp4');
    scene.text('"Well I\'m glad you enjoyed yourself," you laugh, rolling your eyes.');
    qspCall(s, 'hookup_after', 'pre');
    qspCall(s, 'hookup_talk', 'pillow_talk1');
  } },
      { label: 'It was hot', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.mp4');
    scene.text('"It <i>was</i> pretty hot," you smile wryly.');
    // TODO-QSP: dynamic text: "I knew I liked you," <<$npcdesc>> grins back at you
    scene.text(`"I knew I liked you," ${((s as any).npcdesc ?? 0)} grins back at you`);
    qspCall(s, 'hookup_after', 'pre');
    qspCall(s, 'hookup_talk', 'pillow_talk1');
  } },
    ]);
  } else {
    if (((s as any).hookup ?? 0)?.['did_you_cum_inside'] === 0  &&  ((s as any).hookup ?? 0)?.['take_in_stride'] !== 1) {
      scene.text('"Sorry! I didn\'t mean to-!"');
    }
    scene.actions([
      { label: 'I\'m not mad', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk2.mp4');
    scene.text('"It\'s fine," you laugh. "I\'m not mad."');
    scene.text('"Wait, really?"');
    scene.text('"Yeah, you\'re good dude," you reaffirm with a snigger.');
    qspCall(s, 'hookup_after', 'pre');
    qspCall(s, 'hookup_talk', 'pillow_talk1');
  } },
      { label: 'It was cute', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk2.mp4');
    scene.text('"It was cute," you laugh gently.');
    scene.text('"... cute...?"');
    scene.text('"It\'s kind of... sweet, that you can\'t hold it while you\'re inside me. I thought it was adorable."');
    // TODO-QSP: dynamic text: You shrug, a bit embarrassed, but it seems to have reassured <<$npcdesc>> and he...
    scene.text(`You shrug, a bit embarrassed, but it seems to have reassured ${((s as any).npcdesc ?? 0)} and he settles down.`);
    qspCall(s, 'hookup_after', 'pre');
    qspCall(s, 'hookup_talk', 'pillow_talk1');
  } },
      { label: 'It was hot', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.mp4');
    scene.text('"It was pretty hot," you smile wryly.');
    scene.text('"... Seriously??"');
    scene.text('"Yeah! The idea that you just can\'t help but let loose inside me, I guess in my mind I figure it\'s cause you find me attractive. Maybe I find it hot cause it must mean you think I\'m hot?"');
    scene.text('You grin at him and he seems reassured, if not a little embarrassed.');
    qspCall(s, 'hookup_after', 'pre');
    qspCall(s, 'hookup_talk', 'pillow_talk1');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCreampieSurpriseCum(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hookup ?? 0)?.['position'] === 'miss') {
    scene.img('images/shared/sex/cum/vagcreampie/miss1.mp4');
    // TODO-QSP: dynamic text: You as you lay there, breathing heavily, as <<$npcdesc>> slowly begins to pull h...
    scene.text(`You as you lay there, breathing heavily, as ${((s as any).npcdesc ?? 0)} slowly begins to pull himself out of you. His cock slips from your pussy, eliciting a whimper from you. A stream of liquid trickles out after it, running from the valley of your sore snatch, and leaves you feeling empty.`);
  } else {
    if (((s as any).hookup ?? 0)?.['position'] === 'doggy') {
      scene.img('images/shared/sex/cum/vagcreampie/doggy1.jpg');
      // TODO-QSP: dynamic text: You let your arms collapse under you, leaving you ass up and head down as <<$npc...
      scene.text(`You let your arms collapse under you, leaving you ass up and head down as ${((s as any).npcdesc ?? 0)} slips his cock from inside you. Its vacation of your snatch elicits a whimper from you, exacerbated further when you feel something trickle out after it, leaving you feeling sore and truly empty.`);
    } else {
      if (((s as any).hookup ?? 0)?.['position'] === 'cowgirl') {
        scene.img('images/shared/sex/cum/vagcreampie/cowgirl3.mp4');
        // TODO-QSP: dynamic text: You sit on top of <<$npcdesc>>, breathing heavily, still impaled by his manhood....
        scene.text(`You sit on top of ${((s as any).npcdesc ?? 0)}, breathing heavily, still impaled by his manhood. Seeming exhausted himself, he lifts your hips up with one hand and just barely manages to slip his cock from your pussy. The feeling elicits a whimper from you and thick liquid trails from the tip, already oozing from your sore snatch.`);
      }
    }
  }
  scene.text('"That..." you pant. "That was..."');
  if ((((s as any).hookup ?? 0)?.['not_inside'] === 1  ||  ((s as any).hookup ?? 0)?.['condom'] > 2)  &&  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
    // TODO-QSP: dynamic text: "I'm so sorry!" <<$npcdesc>> quickly says. "I didn't mean to! I know you told me...
    scene.text(`"I'm so sorry!" ${((s as any).npcdesc ?? 0)} quickly says. "I didn't mean to! I know you told me not to, I just-! Really! I didn't mean to!" He looks at you anxiously and seems to be genuinely apologetic.`);
    qspCall(s, 'hookup_talk', 'creampie_surprise_cum_react1');
  } else {
    if ((Math.floor(Math.random() * 3) + 1) === 3  &&  ((s as any).npc_generous ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: "I'm so sorry!" <<$npcdesc>> quickly says. "I didn't mean to! I thought I could ...
      scene.text(`"I'm so sorry!" ${((s as any).npcdesc ?? 0)} quickly says. "I didn't mean to! I thought I could hold on a little longer, but your pussy was so tight and suddenly-" He looks at you anxiously and seems to be genuinely apologetic.`);
      qspCall(s, 'hookup_talk', 'creampie_surprise_cum_react1');
    } else {
      // TODO-QSP: dynamic text: "Your pussy is amazing," <<$npcdesc>> says, rolling over next to you. breathing ...
      scene.text(`"Your pussy is amazing," ${((s as any).npcdesc ?? 0)} says, rolling over next to you. breathing just as heavily as you are. "Squeezed the cum right out of me."`);
      qspCall(s, 'hookup_talk', 'creampie_surprise_cum_react2');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBirthControl(s: GameState, scene: SceneBuilder): void {
  if (((s as any).tabletkishot ?? 0) > 0  ||  ((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
    scene.actions([
      { label: 'I\'m on birth control', handler: (st: GameState) => {
    if (((s as any).hookup ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/cum/vagcreampie/miss1.jpg');
      scene.text('You prop yourself up on your elbows, looking down between your legs, feeling the cum trickle from your pussy, feeling a little dazed.');
    } else {
      if (((s as any).hookup ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/cum/vagcreampie/doggy1.jpg');
        scene.text('You lay down on your stomach, letting the cum slowly ooze from between your legs.');
      } else {
        if (((s as any).hookup ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/cum/vagcreampie/miss1.jpg');
          scene.text('You lay back on the bed, letting the cum trickle from your pussy run down the curve of your ass.');
        }
      }
    }
    if (((s as any).hookup ?? 0)?.['not_inside'] === 1  ||  ((s as any).hookup ?? 0)?.['condom'] === 2  ||  ((s as any).hookup ?? 0)?.['condom'] === 3) {
      // TODO-QSP: dynamic text: <<$npcdesc>> looks at you expectantly, waiting for you to say something.
      scene.text(`${((s as any).npcdesc ?? 0)} looks at you expectantly, waiting for you to say something.`);
      if (((s as any).tabletkishot ?? 0) > 0) {
        scene.text('"I\'m on the shot. I just wanted to be extra safe."');
      } else {
        if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
          scene.text('"I\'m on the pill. I just wanted to be extra safe."');
        }
      }
    } else {
      if (((s as any).tabletkishot ?? 0) > 0) {
        scene.text('"Don\'t worry, I\'m on the shot." you wink.');
      } else {
        if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
          scene.text('"Don\'t worry, I\'m on the pill," you wink.');
        }
      }
    }
    qspCall(s, 'hookup_after', 'pre');
    qspCall(s, 'hookup_talk', 'pillow_talk1');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBirthControlLie(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'I\'m on birth control (lie)', handler: (st: GameState) => {
    if (((s as any).hookup ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/cum/vagcreampie/miss1.jpg');
      scene.text('You prop yourself up on your elbows, looking down between your legs, letting the cum trickle from your pussy.');
    } else {
      if (((s as any).hookup ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/cum/vagcreampie/doggy1.jpg');
        scene.text('You lay down on your stomach, letting the cum slowly ooze from between your legs.');
      } else {
        if (((s as any).hookup ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/cum/cum6.jpg');
          scene.text('You lay back on the bed, letting the cum continue to trickle from your pussy.');
        }
      }
    }
    if (((s as any).hookup ?? 0)?.['not_inside'] === 1  ||  ((s as any).hookup ?? 0)?.['condom'] === 2  ||  ((s as any).hookup ?? 0)?.['condom'] === 3) {
      scene.text('"It\'s fine. I\'m on birth control," you lie through your teeth.');
      // TODO-QSP: dynamic text: <<$npcdesc>> seems to relax, reassured by your words and relieved that you're no...
      scene.text(`${((s as any).npcdesc ?? 0)} seems to relax, reassured by your words and relieved that you're not upset.`);
    } else {
      scene.text('"Don\'t worry. I\'m on birth control," you smile at him gently, lying through your teeth.');
    }
    scene.text('<i>I wonder if his baby is going to be swimming around inside me after this...</i>');
    qspCall(s, 'hookup_after', 'pre');
    qspCall(s, 'hookup_talk', 'pillow_talk1');
  } },
  ]);
  scene.build();
}

function enterPregResponsibilityTease(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'If I get pregnant, you better take responsibility (tease)', handler: (st: GameState) => {
    if (((s as any).hookup ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/cum/vagcreampie/miss1.jpg');
      scene.text('You prop yourself up on your elbows, looking down between your legs, letting the cum trickle from your pussy.');
    } else {
      if (((s as any).hookup ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/cum/vagcreampie/doggy1.jpg');
        scene.text('You lay down on your stomach, letting the cum slowly ooze from between your legs.');
      } else {
        if (((s as any).hookup ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/cum/cum6.jpg');
          scene.text('You lay back on the bed, letting the cum continue to trickle from your pussy.');
        }
      }
    }
    scene.text('"If I get pregnant, you better take responsibility for this."');
    scene.text('Though the words carry a heavy weight, you say it with a smile to let him know you\'re only teasing. Though you really hope you don\'t get pregnant off of this...');
    qspCall(s, 'hookup_after', 'pre');
    qspCall(s, 'hookup_talk', 'pillow_talk1');
  } },
  ]);
  scene.build();
}

function enterPregResponsibilityGlare(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'If I get pregnant, you better take responsibility (glare)', handler: (st: GameState) => {
    if (((s as any).hookup ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/cum/vagcreampie/miss1.jpg');
      scene.text('You prop yourself up on your elbows, looking down between your legs, letting the cum trickle from your pussy.');
    } else {
      if (((s as any).hookup ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/cum/vagcreampie/doggy1.jpg');
        scene.text('You lay down on your stomach, letting the cum slowly ooze from between your legs.');
      } else {
        if (((s as any).hookup ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/cum/cum6.jpg');
          scene.text('You lay back on the bed, letting the cum continue to trickle from your pussy.');
        }
      }
    }
    scene.text('"If I get pregnant, you better take responsibility for this," you glare at him.');
    scene.text('You swear, this better not end with you getting knocked up...');
    qspCall(s, 'hookup_after', 'pre');
  } },
  ]);
  scene.build();
}

function enterCondomStuck(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterLightCigarette(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hookup ?? 0)?.['cigarette'] === 0) {
    if (((s as any).npc_smoker ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      // TODO-QSP: dynamic text: The moment you pull away from each other, <<$npcdesc>> reaches over and pulls ou...
      scene.text(`The moment you pull away from each other, ${((s as any).npcdesc ?? 0)} reaches over and pulls out a pack of cigarettes, lighting one for himself and inhaling deeply.`);
      ((s as any).hookup ?? {})['cigarette'] = (-1);
      if (((s as any).mc_inventory ?? 0)?.['cigarettes'] > 0) {
        scene.actions([
          { label: 'Have a smoke', handler: (st: GameState) => {
    ((s as any).hookup ?? {})['cigarette'] = 5;
    scene.img('images/shared/sex/after/bed_smoke0.jpg');
    scene.text('You decide to grab a smoke too, pulling one from your purse. You place it in your mouth, sparking it with your lighter while you inhale.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'drugs', 'smoke');
    scene.img('images/shared/sex/after/bed_smoke3.jpg');
    scene.text('Smoke fills your lungs and you hold it there, savoring it, before exhaling slowly. As the smoke blows past your lips, it\'s like all your stress goes with it and you sigh happily, relaxing into the bed as both of you unwind with a post-fuck smoke together.');
    qspCall(s, 'hookup_after', 'pre');
    qspCall(s, 'hookup_talk', 'pillow_talk2');
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Ask to bum a cigarette', handler: (st: GameState) => {
    ((s as any).hookup ?? {})['cigarette'] = 5;
    scene.img('images/shared/sex/after/bed_smoke2.jpg');
    scene.text('"Any chance I could get one of those?" you ask in the most sultry way you can.');
    // TODO-QSP: dynamic text: "Cost is one fuck per," <<$npcdesc>> says, grinning.
    scene.text(`"Cost is one fuck per," ${((s as any).npcdesc ?? 0)} says, grinning.`);
    scene.text('"Well it\'s a good thing I paid upfront then," you smile back, plucking one from his pack.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'drugs', 'smoke', 1);
    scene.img('images/shared/sex/after/bed_smoke3.jpg');
    scene.text('He leans over with the lighter and lights it for you and you inhale with him, savoring the smoke that fills your lungs as the two of you sit back and puff away together.');
    qspCall(s, 'hookup_after', 'pre');
    qspCall(s, 'hookup_talk', 'pillow_talk2');
  } },
    ]);
  } },
      ]);
    }
    if (((s as any).mc_inventory ?? 0)?.['cigarettes'] > 0) {
      scene.actions([
        { label: 'Have a smoke', handler: (st: GameState) => {
    ((s as any).hookup ?? {})['cigarette'] = 4;
    scene.img('images/shared/sex/after/bed_smoke0.jpg');
    scene.text('Pulling a cigarette from your purse, you place it in your mouth, sparking it with your lighter while you inhale.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'drugs', 'smoke');
    scene.img('images/shared/sex/after/bed_smoke1.jpg');
    scene.text('Smoke fills your lungs and you hold it there, savoring it, before exhaling slowly. As the smoke blows past your lips, it\'s like all your stress goes with it and you sigh happily, relaxing into the bed.');
    qspCall(s, 'hookup_after', 'pre');
    qspCall(s, 'hookup_talk', 'pillow_talk2');
  } },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterLightCigarette2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mc_inventory ?? 0)?.['cigarettes'] > 0) {
    scene.actions([
      { label: 'Have a smoke', handler: (st: GameState) => {
    ((s as any).hookup ?? {})['cigarette'] = 5;
    scene.img('images/shared/sex/after/bed_smoke0.jpg');
    scene.text('You decide to grab a smoke too, pulling one from your purse. You place it in your mouth, sparking it with your lighter while you inhale.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'drugs', 'smoke');
    scene.img('images/shared/sex/after/bed_smoke3.jpg');
    scene.text('Smoke fills your lungs and you hold it there, savoring it, before exhaling slowly. As the smoke blows past your lips, it\'s like all your stress goes with it and you sigh happily, relaxing into the bed as both of you unwind with a post-fuck smoke together.');
    qspCall(s, 'hookup_after', 'pre');
    qspCall(s, 'hookup_talk', 'pillow_talk2');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask to bum a cigarette', handler: (st: GameState) => {
    ((s as any).hookup ?? {})['cigarette'] = 5;
    scene.img('images/shared/sex/after/bed_smoke2.jpg');
    scene.text('"Any chance I could get one of those?" you ask in the most sultry way you can.');
    // TODO-QSP: dynamic text: "Cost is one fuck per," <<$npcdesc>> says, grinning.
    scene.text(`"Cost is one fuck per," ${((s as any).npcdesc ?? 0)} says, grinning.`);
    scene.text('"Well it\'s a good thing I paid upfront then," you smile back, plucking one from his pack.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'drugs', 'smoke', 1);
    scene.img('images/shared/sex/after/bed_smoke3.jpg');
    scene.text('He leans over with the lighter and lights it for you and you inhale with him, savoring the smoke that fills your lungs as the two of you sit back and puff away together.');
    qspCall(s, 'hookup_after', 'pre');
    qspCall(s, 'hookup_talk', 'pillow_talk2');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterPre(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'hookup_after', 'light_cigarette');
  if (((Math.floor(Math.random() * 10) + 1) > 7  ||  ((s as any).hookup ?? 0)?.['get_out'] === 1)  &&  ((s as any).hookup ?? 0)?.['get_out'] !== 2) {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text(`<center><b>${((s as any).npcdesc ?? 0)}'s Bedroom</b></center>`);
    // TODO-QSP: $npc_apt_bedroom[$npcID]
    if (((s as any).hookup ?? 0)?.['get_out'] === 1) {
      scene.text('"You should go," he says, glaring at you.');
    } else {
      if (((s as any).npc_smoker ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
        // TODO-QSP: dynamic text: "So uhh," <<$npcdesc>> says between puffs. "You should go."
        scene.text(`"So uhh," ${((s as any).npcdesc ?? 0)} says between puffs. "You should go."`);
      } else {
        // TODO-QSP: dynamic text: "Hey so uhh," <<$npcdesc>> says, cracking his neck. "You should really go."
        scene.text(`"Hey so uhh," ${((s as any).npcdesc ?? 0)} says, cracking his neck. "You should really go."`);
      }
    }
    scene.actions([
      { label: 'Yeah, I should', handler: (st: GameState) => {
    scene.text('"Yeah, I really ought to get going," you agree, hauling yourself out of bed.');
    if (((s as any).stat_cum_msg ?? 0) !== '') {
      scene.actions([
        { label: 'Get cleaned up', handler: (st: GameState) => {
    if (((s as any).trait_vars ?? 0)?.['cum_addict'] > 0) {
      (s as any).cumspclnt = 18;
    } else {
      (s as any).cumspclnt = 1;
    }
    qspCall(s, 'cum_cleanup', '');
    if (((s as any).cum_loc ?? 0)?.['vagina'] > 0  ||  ((s as any).hookup ?? 0)?.['cum_choice'] === 'creampie') {
      if (((s as any).trait_vars ?? 0)?.['cum_addict'] > 0) {
        scene.text(`<center><b>${((s as any).npcdesc ?? 0)}'s Bedroom</b></center>`);
        // TODO-QSP: $npc_apt_bedroom[$npcID]
        if (((s as any).hookup ?? 0)?.['wipes'] === 1) {
          scene.text('You reach down to your purse and pull out your bag of wipes before you stop, suddenly confused.');
          scene.text('<i>Why did I get out my wipes?</i> you think to yourself. You frown at the packet, befuddled as to what you want to do with the wipe.');
          scene.text('<i>Meh. If it\'s important, it will come back to me later,</i> you think to yourself as you put it back into your purse, oblivious to the liquid dribbling down the inside of your thigh.');
        } else {
          if (((s as any).hookup ?? 0)?.['wipes'] === 2) {
            // TODO-QSP: dynamic text: "Hey, do you-" you start and then suddenly lose track of what you were trying to...
            scene.text(`"Hey, do you-" you start and then suddenly lose track of what you were trying to say. You frown to yourself as ${((s as any).npcdesc ?? 0)} looks at you quizically.`);
            scene.text('"Did you need something?"');
            scene.text('"I uhh..." Your frown deepens. "I wanted to ask you something... but I forgot what it was... I guess it doesn\'t really matter..."');
            scene.text('<i>Meh. If it\'s important, it will come back to me later,</i> you think to yourself, oblivious to the liquid dribbling down the inside of your thigh.');
          }
        }
      } else {
        if (((s as any).hookup ?? 0)?.['wipes'] === 2) {
          scene.img('images/shared/sex/cum/vagcreampie/after1.mp4');
          scene.text('"Hey, got anything I can use to clean up?" you say, holding your fingers over your pussy, trying to keep the cum from spilling out any further.');
          // TODO-QSP: dynamic text: "Oh yeah, right here." <<$npcdesc>> reaches over to his nightstand, pulls a pack...
          scene.text(`"Oh yeah, right here." ${((s as any).npcdesc ?? 0)} reaches over to his nightstand, pulls a packet of tissues and tosses them over to you. Gratefully accepting them, you pull out a handful and get to work cleaning yourself up.`);
        } else {
          scene.img('images/shared/sex/cum/cum111.jpg');
          scene.text('You really need to clean yourself up after that. Reaching down to your purse, you pull some wipes out of your purse before reaching between your legs to wipe yourself up.');
          scene.text('It takes a few tries, more cum seemingly coming out with every next wipe, but eventually, you feel like you got most of it out. At least enough that nothing is going to be running down your legs walking home.');
        }
      }
    } else {
      if (((s as any).cum_loc ?? 0)?.['face'] > 0  ||  ((s as any).hookup ?? 0)?.['cum_choice'] === 'face') {
        scene.text(`<center><b>${((s as any).npcdesc ?? 0)}'s Bedroom</b></center>`);
        // TODO-QSP: $npc_apt_bedroom[$npcID]
        if (((s as any).mc_inventory ?? 0)?.['makeup_wipes'] > 0) {
          ((s as any).mc_inventory ?? {})['makeup_wipes'] = (((s as any).mc_inventory ?? {})['makeup_wipes'] ?? 0) - (1);
        } else {
          ((s as any).hookup ?? {})['wipes'] = 2;
        }
        if (((s as any).hookup ?? 0)?.['wipes'] === 2) {
          scene.text('"Hey, got anything I can use to clean up?" you smirk, pointing at your sperm-glazed face.');
          // TODO-QSP: dynamic text: "Oh yeah, right here." <<$npcdesc>> reaches over to his nightstand, pulls a pack...
          scene.text(`"Oh yeah, right here." ${((s as any).npcdesc ?? 0)} reaches over to his nightstand, pulls a packet of tissues and tosses them over to you. Gratefully accepting them, you pull out a handful and get to work cleaning yourself up.`);
        }
        if (((s as any).cum_loc ?? 0)?.['hair'] > 0) {
          // TODO-QSP: dynamic text: You carefully wipe the cum from your face, making sure to get every last drop, i...
          scene.text(`You carefully wipe the cum from your face, making sure to get every last drop, including getting the tangled web that ${((s as any).npcdesc ?? 0)} managed to get in your hair. About a minute later, you can still feel a faintly sticky layer over the top of your skin, but at least nobody is going to give you funny looks walking down the street.`);
        } else {
          scene.text('You carefully wipe the cum from your face, making sure to get every last drop. About a minute later, you can still feel a faintly sticky layer over the top of your skin, but at least nobody is going to give you funny looks walking down the street.');
        }
      } else {
        if (((s as any).cum_loc ?? 0)?.['stomach'] > 0  ||  ((s as any).hookup ?? 0)?.['cum_choice'] === 'stomach') {
          scene.text(`<center><b>${((s as any).npcdesc ?? 0)}'s Bedroom</b></center>`);
          // TODO-QSP: $npc_apt_bedroom[$npcID]
          if (((s as any).hookup ?? 0)?.['wipes'] === 2) {
            scene.text('"Hey, got anything I can use to clean up?" you ask, looking at your belly, cum still spattered over it.');
            // TODO-QSP: dynamic text: "Oh yeah, right here." <<$npcdesc>> reaches over to his nightstand, pulls a pack...
            scene.text(`"Oh yeah, right here." ${((s as any).npcdesc ?? 0)} reaches over to his nightstand, pulls a packet of tissues and tosses them over to you. Gratefully accepting them, you pull out a handful and wipe the loose sperm from your stomach before reaching for your clothes.`);
          } else {
            scene.text('Pulling a wipe from your purse, you wipe the sperm from your stomach before reaching for your clothes.');
          }
        } else {
          if (((s as any).cum_loc ?? 0)?.['butt'] > 0  ||  ((s as any).hookup ?? 0)?.['cum_choice'] === 'ass'  ||  ((s as any).hookup ?? 0)?.['cum_choice'] === 'back') {
            scene.text(`<center><b>${((s as any).npcdesc ?? 0)}'s Bedroom</b></center>`);
            // TODO-QSP: $npc_apt_bedroom[$npcID]
            if (((s as any).hookup ?? 0)?.['wipes'] === 2) {
              scene.text('"Hey, got anything I can use to clean up?" you ask, looking over your shoulder and wiggling your ass to emphasize the cum resting on it.');
              // TODO-QSP: dynamic text: "Oh yeah, right here." <<$npcdesc>> reaches over to his nightstand, pulls a pack...
              scene.text(`"Oh yeah, right here." ${((s as any).npcdesc ?? 0)} reaches over to his nightstand, pulls a packet of tissues and tosses them over to you. Gratefully accepting them, you pull out a handful and get to work cleaning yourself up.`);
            } else {
              scene.text('You really need to clean yourself after up after that. Reaching down to your purse, you pull some wipes out of your purse.');
            }
          }
        }
      }
    }
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    scene.img('images/pc/activities/misc/dress_1.mp4');
    qspCall(s, 'hookup_after', 'dress');
    scene.text('All cleaned up, you bend down and pick up your clothes, getting ready to leave.');
    scene.text('"Thanks for the hookup," you say as you begin throwing clothes on.');
    scene.text('"Yeah, you were a great lay too."');
    scene.text('"Maybe I\'ll see you around sometime?" you wink, closing the door behind you.');
    scene.actions([
      { label: 'Leave', goto: ['hookup_after', 'exit'] },
    ]);
  } },
    ]);
  } },
        { label: 'Borrow your shower?', handler: (st: GameState) => {
    // TODO-QSP: $npc_apt_bedroom[$npcID]
    scene.text('"Mind if I borrow your shower real quick first?"');
    if (((s as any).hookup ?? 0)?.['get_out'] === 1) {
      scene.text('"No, you can\'t. Get out."');
      scene.text('You frown. "What? Wh-"');
      scene.text('"I said you need to get out. Go. <i>Now.</i>"');
      scene.actions([
        { label: 'Get dressed', handler: (st: GameState) => {
    scene.img('images/pc/activities/misc/dress_1.mp4');
    qspCall(s, 'hookup_after', 'dress');
    // TODO-QSP: dynamic text: "Sheezus. Who shat in your cereal?" you roll your eyes at him, reaching for your...
    scene.text(`"Sheezus. Who shat in your cereal?" you roll your eyes at him, reaching for your clothes. You get dressed quickly, ${((s as any).npcdesc ?? 0)} grumpily ignoring you the whole time. Once finished, you head towards the door.`);
    scene.text('"Guess I\'ll just see myself out," you mumble, leaving his apartment and shutting the door behind you.');
    scene.actions([
      { label: 'Leave', goto: ['hookup_after', 'exit'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        scene.text('"Nah. Don\'t want you using up my soap."');
        scene.text('You frown. "Seriously? I just wanna rinse off before I go."');
        scene.text('"Yeah, you\'ll be fine. Don\'t want you wasting my hot water either."');
        scene.actions([
          { label: 'Get dressed', handler: (st: GameState) => {
    scene.img('images/pc/activities/misc/dress_1.mp4');
    qspCall(s, 'hookup_after', 'dress');
    scene.text('"Oooookay..." you mumble, reaching for your clothes.');
    scene.text('<i>Sheezus. What\'s <b>his</b> problem?</i> you wonder while you get dressed. Once you finish you make sure you have all your stuff and head towards the door.');
    scene.text('"Guess I\'ll just see myself out," you mumble, leaving his apartment and shutting the door behind you.');
    scene.actions([
      { label: 'Leave', goto: ['hookup_after', 'exit'] },
    ]);
  } },
        ]);
      } else {
        scene.text('"Yeah sure, go ahead."');
        scene.text('"Thanks," you smile getting up and padding into the bathroom.');
        scene.actions([
          { label: 'Take a shower', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.img('images/shared/home/bathroom/dush.mp4');
    ((s as any).hookup ?? {})['shower'] = 1;
    qspCall(s, 'din_van', 'showerdin');
    // TODO-QSP: dynamic text: You turn on the faucet, relaxing as the hot water pours down over your skin. Aft...
    scene.text(`You turn on the faucet, relaxing as the hot water pours down over your skin. After a few minutes, you turn the tap off and step out, walking back to ${((s as any).npcdesc ?? 0)}'s room wet and dripping. ${((s as any).npcdesc ?? 0)} is still there, relaxing in his bed.`);
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    // TODO-QSP: $npc_apt_bedroom[$npcID]
    qspCall(s, 'hookup_after', 'dress');
    scene.text('"Thanks," you smile. "I really needed that. Anyways, thanks for the hookup."');
    // TODO-QSP: dynamic text: "Yeah, you were a great lay too," <<$npcdesc>> replies, watching you pull your c...
    scene.text(`"Yeah, you were a great lay too," ${((s as any).npcdesc ?? 0)} replies, watching you pull your clothes over your still-moist body.`);
    scene.text('"Maybe I\'ll see you around sometime?" you wink, giving them a last-second adjustment before grabbing the rest of your things.');
    scene.text('"Maybe," he smirks back. Taking that as your final goodbye, you give him a little wave and head out of his apartment, closing the door behind you.');
    scene.actions([
      { label: 'Leave', goto: ['hookup_after', 'exit'] },
    ]);
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
    scene.img('images/pc/activities/misc/dress_1.mp4');
    qspCall(s, 'hookup_after', 'dress');
    scene.text('You bend down and pick up your clothes, getting ready to leave.');
    scene.text('"Thanks for the hookup," you say as you begin throwing clothes over your shoulders.');
    scene.text('"Yeah, you were a great lay too."');
    scene.text('"Maybe I\'ll see you around sometime?" you wink, closing the door behind you.');
    scene.actions([
      { label: 'Leave', goto: ['hookup_after', 'exit'] },
    ]);
  } },
      ]);
    }
  } },
      { label: 'Seriously?', handler: (st: GameState) => {
    scene.text('"Seriously?" you ask in disbelief.');
    if (((s as any).hookup ?? 0)?.['get_out'] === 1) {
      scene.text('"Yeah seriously. My room, my apartment. My choice. Get out."');
    } else {
      scene.text('"Yeah seriously."');
    }
    scene.text('"Ugh... okay then..." you say, throwing your legs off the bed and getting up.');
    if (((s as any).stat_cum_msg ?? 0) !== '') {
      if (((s as any).cum_loc ?? 0)?.['vagina'] > 0  ||  ((s as any).hookup ?? 0)?.['cum_choice'] === 'creampie') {
        scene.text('"Do you at least have something for this???" you ask, pointing at your pussy at the cum still spilling from it.');
      } else {
        scene.text('"Do you at least have something for this???" you ask, gesturing at the cum spattered across your skin.');
      }
      scene.text('"Nah," he says lethargially.');
      if (((s as any).mc_inventory ?? 0)?.['makeup_wipes'] > 0) {
        // TODO-QSP: dynamic text: <i>Wow... Real class act this one... Great choice on this one <<$pcs_nickname>>,...
        scene.text(`<i>Wow... Real class act this one... Great choice on this one ${((s as any).pcs_nickname ?? 0)},</i> you think to yourself as you pull your own wipes from your purse.`);
        scene.actions([
          { label: 'Get cleaned up and go', handler: (st: GameState) => {
    scene.text(`<center><b>${((s as any).npcdesc ?? 0)}'s Bedroom</b></center>`);
    // TODO-QSP: $npc_apt_bedroom[$npcID]
    if (((s as any).trait_vars ?? 0)?.['cum_addict'] > 0) {
      (s as any).cumspclnt = 18;
    } else {
      (s as any).cumspclnt = 1;
    }
    if (((s as any).cum_loc ?? 0)?.['face'] > 0  ||  ((s as any).hookup ?? 0)?.['cum_choice'] === 'face') {
      if (((s as any).cum_loc ?? 0)?.['hair'] > 0) {
        // TODO-QSP: dynamic text: You carefully wipe the cum from your face, making sure to get every last drop, i...
        scene.text(`You carefully wipe the cum from your face, making sure to get every last drop, including getting the tangled web that ${((s as any).npcdesc ?? 0)} managed to get in your hair. About a minute later, you can still feel a faintly sticky layer over the top of your skin, but at least nobody is going to give you funny looks walking down the street.`);
      } else {
        scene.text('You carefully wipe the cum from your face, making sure to get every last drop. About a minute later, you can still feel a faintly sticky layer over the top of your skin, but at least nobody is going to give you funny looks walking down the street.');
      }
    } else {
      if (((s as any).cum_loc ?? 0)?.['stomach'] > 0  ||  ((s as any).hookup ?? 0)?.['cum_choice'] === 'stomach') {
        scene.text(`<center><b>${((s as any).npcdesc ?? 0)}'s Bedroom</b></center>`);
        // TODO-QSP: $npc_apt_bedroom[$npcID]
        scene.text('Pulling a wipe from your purse, you wipe the sperm from your stomach before reaching for your clothes.');
      } else {
        if (((s as any).cum_loc ?? 0)?.['butt'] > 0  ||  ((s as any).hookup ?? 0)?.['cum_choice'] === 'ass'  ||  ((s as any).hookup ?? 0)?.['cum_choice'] === 'back') {
          scene.text(`<center><b>${((s as any).npcdesc ?? 0)}'s Bedroom</b></center>`);
          // TODO-QSP: $npc_apt_bedroom[$npcID]
          scene.text('You really need to clean yourself after up after that. Reaching down to your purse, you pull some wipes out of your purse.');
        } else {
          if (((s as any).cum_loc ?? 0)?.['vagina'] > 0  ||  ((s as any).hookup ?? 0)?.['cum_choice'] === 'creampie') {
            scene.text(`<center><b>${((s as any).npcdesc ?? 0)}'s Bedroom</b></center>`);
            // TODO-QSP: $npc_apt_bedroom[$npcID]
            if (((s as any).trait_vars ?? 0)?.['cum_addict'] > 0) {
              scene.text('You reach down to your purse and pull out your bag of wipes before you stop, suddenly confused.');
              scene.text('<i>Why did I get out my wipes?</i> you think to yourself. You frown at the packet, befuddled as to what you want to do with the wipe.');
              scene.text('<i>Meh. If it\'s important, it will come back to me later,</i> you think to yourself as you put it back into your purse, oblivious to the liquid dribbling down the inside of your thigh.');
            } else {
              scene.text('You really need to clean yourself up after that. Reaching down to your purse, you pull some wipes out of your purse before reaching between your legs to wipe yourself up.');
              scene.text('It takes a few tries, more cum seemingly coming out with every next wipe, but eventually, you feel like you got most of it out. At least enough that nothing is going to be running down your legs walking home.');
            }
          }
        }
      }
    }
    qspCall(s, 'cum_cleanup', '');
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    scene.img('images/shared/romance/misc/depart1.mp4');
    qspCall(s, 'hookup_after', 'dress');
    scene.text('You bend down and pick up your clothes, throwing them on in annoyance. By the time you\'re done dressing, you\'re done with this whole night. You grab your stuff and leave, slamming the door behind you.');
    scene.actions([
      { label: 'Leave', goto: ['hookup_after', 'exit'] },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        // TODO-QSP: dynamic text: <i>Wow... Real class act this one... Great choice on this one <<$pcs_nickname>>,...
        scene.text(`<i>Wow... Real class act this one... Great choice on this one ${((s as any).pcs_nickname ?? 0)},</i> you think to yourself, reaching for your clothes.`);
        scene.actions([
          { label: 'Get dressed', handler: (st: GameState) => {
    scene.img('images/shared/romance/misc/depart1.mp4');
    qspCall(s, 'hookup_after', 'dress');
    scene.text('You bend down and pick up your clothes, throwing them on in annoyance, wincing in disgust as you feel the cum smear across the inside. By the time you\'re done dressing, you\'re done with this whole night. You grab your stuff and leave, slamming the door behind you.');
    scene.actions([
      { label: 'Leave', goto: ['hookup_after', 'exit'] },
    ]);
  } },
        ]);
      }
    } else {
      // TODO-QSP: dynamic text: <i>Wow... Real class act this one... Great choice on this one <<$pcs_nickname>>,...
      scene.text(`<i>Wow... Real class act this one... Great choice on this one ${((s as any).pcs_nickname ?? 0)},</i> you think to yourself, reaching for your clothes.`);
      scene.actions([
        { label: 'Get dressed', handler: (st: GameState) => {
    scene.img('images/shared/romance/misc/depart1.mp4');
    qspCall(s, 'hookup_after', 'dress');
    scene.text('You bend down and pick up your clothes, throwing them on in annoyance. By the time you\'re done dressing, you\'re done with this whole night. You grab your stuff and leave, slamming the door behind you.');
    scene.actions([
      { label: 'Leave', goto: ['hookup_after', 'exit'] },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).mc_inventory ?? 0)?.['cigarettes'] > 0  &&  ((s as any).hookup ?? 0)?.['cigarette'] === 0) {
      scene.actions([
        { label: 'Have a smoke', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/bed_smoke0.jpg');
    scene.text('Pulling a cigarette from your purse, you place it in your mouth, sparking it with your lighter while you inhale.');
    ((s as any).hookup ?? {})['cigarette'] = 1;
    scene.actions([
      { label: 'Smoke', goto: ['hookup_after', 'start'] },
    ]);
  } },
        { label: 'Have a smoke and play with your phone', handler: (st: GameState) => {
    ((s as any).hookup ?? {})['cigarette'] = 3;
    qspCall(s, 'hookup_after', 'start');
  } },
      ]);
    }
    if (((s as any).stat_cum_msg ?? 0) !== '') {
      if (((s as any).mc_inventory ?? 0)?.['makeup_wipes'] > 0) {
        scene.actions([
          { label: 'Clean yourself up (use your own wipes)', handler: (st: GameState) => {
    ((s as any).hookup ?? {})['wipes'] = 1;
    ((s as any).mc_inventory ?? {})['makeup_wipes'] = (((s as any).mc_inventory ?? {})['makeup_wipes'] ?? 0) - (1);
  }, goto: ['hookup_after', 'wipes'] },
        ]);
      }
      scene.actions([
        { label: 'Clean yourself up (ask him for wipes)', handler: (st: GameState) => {
    ((s as any).hookup ?? {})['wipes'] = 2;
  }, goto: ['hookup_after', 'wipes'] },
      ]);
    }
    scene.actions([
      { label: 'Relax on the bed', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    if (((s as any).stat_cum_msg ?? 0) !== '') {
      if (((s as any).hookup ?? 0)?.['cum_choice'] === 'face') {
        scene.img('images/shared/sex/cum/facial/facial35.jpg');
        // TODO-QSP: dynamic text: Feeling tired, you stretch out on the bed, relaxing in the afterglow, letting th...
        scene.text(`Feeling tired, you stretch out on the bed, relaxing in the afterglow, letting the cum rest on your face as you glance over at ${((s as any).npcdesc ?? 0)}.`);
      } else {
        if (((s as any).hookup ?? 0)?.['cum_choice'] === 'stomach') {
          scene.img('images/shared/sex/cum/stomach/bellycum3.jpg');
          // TODO-QSP: dynamic text: Feeling tired, you stretch out on the bed, relaxing in the afterglow, cum still ...
          scene.text(`Feeling tired, you stretch out on the bed, relaxing in the afterglow, cum still resting on your stomach as you glance over at ${((s as any).npcdesc ?? 0)}.`);
        } else {
          if (((s as any).hookup ?? 0)?.['cum_choice'] === 'ass'  ||  ((s as any).hookup ?? 0)?.['cum_choice'] === 'back') {
            scene.img('images/shared/sex/cum/back1.jpg');
            // TODO-QSP: dynamic text: Feeling tired, you lay down on your belly, letting the cum sit on your back as y...
            scene.text(`Feeling tired, you lay down on your belly, letting the cum sit on your back as you rest your head on your arm, glancing at ${((s as any).npcdesc ?? 0)}.`);
          } else {
            if (((s as any).hookup ?? 0)?.['cum_choice'] === 'creampie') {
              scene.img('images/shared/sex/cum/vagcreampie/after1.jpg');
              // TODO-QSP: dynamic text: Tired, you stretch out on the bed and relax. Laying your head on one of <<$npcde...
              scene.text(`Tired, you stretch out on the bed and relax. Laying your head on one of ${((s as any).npcdesc ?? 0)}'s pillows, passively aware of his cum continuing to leak from your pussy as you mindlessly stare at the ceiling.`);
            } else {
              scene.text(`<center><b>${((s as any).npcdesc ?? 0)}'s Bedroom</b></center>`);
              // TODO-QSP: $npc_apt_bedroom[$npcID]
              scene.text('Feeling tired, you stretch out on the bed, relaxing in the afterglow.');
            }
          }
        }
      }
    } else {
      scene.text(`<center><b>${((s as any).npcdesc ?? 0)}'s Bedroom</b></center>`);
      // TODO-QSP: $npc_apt_bedroom[$npcID]
      scene.text('Feeling tired, you stretch out on the bed, relaxing in the afterglow.');
    }
    qspCall(s, 'hookup_after', 'start');
  } },
      { label: 'Get up', handler: (st: GameState) => {
    ((s as any).hookup ?? {})['get_up'] = 1;
    scene.text(`<center><b>${((s as any).npcdesc ?? 0)}'s Bedroom</b></center>`);
    // TODO-QSP: $npc_apt_bedroom[$npcID]
    qspCall(s, 'hookup_after', 'start');
    scene.text('You swing your legs over the side and scooting forward until your feet touch the ground and allow you to stand up from the bed.');
  } },
      { label: 'Play with your phone', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 4) + 2);
    scene.img('images/shared/sex/after/phone.jpg');
    if (((s as any).hookup ?? 0)?.['cum_choice'] === 'face') {
      scene.text('Ignoring the cum dripping from your face, roll over onto your stomach, reaching down to your purse. Pulling out your phone, you take a scroll through your feeds, zoning out in the mindless social media and relaxing as you wind down.');
    } else {
      if (((s as any).hookup ?? 0)?.['cum_choice'] === 'stomach') {
        // TODO-QSP: dynamic text: Rolling over onto your stomach, you feel <<$npcdesc>>'s cum smear across your st...
        scene.text(`Rolling over onto your stomach, you feel ${((s as any).npcdesc ?? 0)}'s cum smear across your stomach and the sheets as you reach down to your purse. Pulling out your phone, you take a scroll through your feeds, zoning out in the mindless social media and relaxing as you wind down.`);
        ((s as any).hookup ?? {})['wipes'] = 0;
      } else {
        if (((s as any).hookup ?? 0)?.['cum_choice'] === 'ass'  ||  ((s as any).hookup ?? 0)?.['cum_choice'] === 'back') {
          scene.text('Scooching over to the edge of the bed, you reach down to your purse, pulling out your phone. You scrolling through your feeds, zoning out in the mindless social media and relaxing as you wind down.');
        } else {
          if (((s as any).hookup ?? 0)?.['cum_choice'] === 'creampie') {
            // TODO-QSP: dynamic text: Rolling over the other way, you reach down from the bed and pull your phone from...
            scene.text(`Rolling over the other way, you reach down from the bed and pull your phone from your purse. A few taps later, you're scrolling through social media feeds, zoning out for a few minutes while ${((s as any).npcdesc ?? 0)}'s cum continues to leak from your pussy.`);
          }
        }
      }
    }
    qspCall(s, 'hookup_after', 'start');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterWipes(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).trait_vars ?? 0)?.['cum_addict'] > 0) {
    (s as any).cumspclnt = 18;
  } else {
    (s as any).cumspclnt = 1;
  }
  if (((s as any).cum_loc ?? 0)?.['face'] > 0  ||  ((s as any).hookup ?? 0)?.['cum_choice'] === 'face') {
    scene.img('images/shared/sex/cum/facial/facial36.jpg');
    if (((s as any).hookup ?? 0)?.['wipes'] === 2) {
      scene.text('"Hey, got anything I can use to clean up?" you trying not to smile under the spunk covering your face.');
      // TODO-QSP: dynamic text: "Oh yeah, right here." <<$npcdesc>> reaches over to his nightstand, pulls a pack...
      scene.text(`"Oh yeah, right here." ${((s as any).npcdesc ?? 0)} reaches over to his nightstand, pulls a packet of tissues and tosses them over to you. Gratefully accepting them, you pull out a handful and get to work cleaning yourself up.`);
    } else {
      scene.text('You reach up and poke at the sperm coating your face. Ew. You really need to clean that up before you do anything else. Reaching down to your purse, you pull some wipes out of your purse.');
    }
    if (((s as any).cum_loc ?? 0)?.['hair'] > 0) {
      // TODO-QSP: dynamic text: You carefully wipe the cum from your face, making sure to get every last drop, i...
      scene.text(`You carefully wipe the cum from your face, making sure to get every last drop, including getting the tangled web that ${((s as any).npcdesc ?? 0)} managed to get in your hair. About a minute later, you can still feel a faintly sticky layer over the top of your skin, but at least nobody is going to give you funny looks walking down the street.`);
    } else {
      scene.text('You carefully wipe the cum from your face, making sure to get every last drop. About a minute later, you can still feel a faintly sticky layer over the top of your skin, but at least nobody is going to give you funny looks walking down the street.');
    }
    ((s as any).hookup ?? {})['wipes'] = 0;
  } else {
    if (((s as any).cum_loc ?? 0)?.['stomach'] > 0  ||  ((s as any).hookup ?? 0)?.['cum_choice'] === 'stomach') {
      scene.img('images/shared/sex/cum/stomach/bellycum3.jpg');
      if (((s as any).hookup ?? 0)?.['wipes'] === 2) {
        scene.text('"Hey, got anything I can use to clean up?" you ask, looking at your belly, cum still spattered over it.');
        // TODO-QSP: dynamic text: "Oh yeah, right here." <<$npcdesc>> reaches over to his nightstand, pulls a pack...
        scene.text(`"Oh yeah, right here." ${((s as any).npcdesc ?? 0)} reaches over to his nightstand, pulls a packet of tissues and tosses them over to you. Gratefully accepting them, you pull out a handful and get to work cleaning yourself up.`);
      } else {
        scene.text('You really need to clean yourself after up after that. Reaching down to your purse, you pull some wipes out of your purse.');
      }
      ((s as any).hookup ?? {})['wipes'] = 0;
    } else {
      if (((s as any).cum_loc ?? 0)?.['butt'] > 0  ||  ((s as any).hookup ?? 0)?.['cum_choice'] === 'ass'  ||  ((s as any).hookup ?? 0)?.['cum_choice'] === 'back') {
        scene.img('images/shared/sex/cum/back1.jpg');
        if (((s as any).hookup ?? 0)?.['wipes'] === 2) {
          scene.text('"Hey, got anything I can use to clean up?" you ask, looking over your shoulder and wiggling your ass to emphasize the cum resting on it.');
          // TODO-QSP: dynamic text: "Oh yeah, right here." <<$npcdesc>> reaches over to his nightstand, pulls a pack...
          scene.text(`"Oh yeah, right here." ${((s as any).npcdesc ?? 0)} reaches over to his nightstand, pulls a packet of tissues and tosses them over to you. Gratefully accepting them, you pull out a handful and get to work awkwardly trying to wipe your ass and up your back.`);
        } else {
          scene.text('You really need to clean yourself after up after that. Reaching down to your purse, you pull some wipes out of your purse, awkwardly wiping your ass and back with it.');
        }
        ((s as any).hookup ?? {})['wipes'] = 0;
      } else {
        if (((s as any).cum_loc ?? 0)?.['vagina'] > 0  ||  ((s as any).hookup ?? 0)?.['cum_choice'] === 'creampie') {
          if (((s as any).trait_vars ?? 0)?.['cum_addict'] > 0) {
            scene.text(`<center><b>${((s as any).npcdesc ?? 0)}'s Bedroom</b></center>`);
            // TODO-QSP: $npc_apt_bedroom[$npcID]
            if (((s as any).hookup ?? 0)?.['wipes'] === 1) {
              scene.text('You reach down to your purse and pull out your bag of wipes before you stop, suddenly confused.');
              scene.text('<i>Why did I get out my wipes?</i> you think to yourself. You frown at the packet, befuddled as to what you want to do with it.');
              scene.text('<i>Meh. If it\'s important, it will come back to me later,</i> you think to yourself as you put it back into your purse, oblivious to the liquid dribbling down the inside of your thigh.');
            } else {
              if (((s as any).hookup ?? 0)?.['wipes'] === 2) {
                // TODO-QSP: dynamic text: "Hey, do you-" you start and then suddenly lose track of what you were trying to...
                scene.text(`"Hey, do you-" you start and then suddenly lose track of what you were trying to say. You frown to yourself as ${((s as any).npcdesc ?? 0)} looks at you quizically.`);
                scene.text('"Did you need something?"');
                scene.text('"I uhh..." Your frown deepens. "I wanted to ask you something... but I forgot what it was... I guess it doesn\'t really matter..."');
                scene.text('<i>Meh. If it\'s important, it will come back to me later,</i> you think to yourself, oblivious to the liquid dribbling down the inside of your thigh.');
              }
            }
          } else {
            if (((s as any).hookup ?? 0)?.['wipes'] === 2) {
              scene.img('images/shared/sex/cum/vagcreampie/after1.mp4');
              scene.text('"Hey, got anything I can use to clean up?" you say, holding your fingers over your pussy, trying to keep the cum from spilling out any further.');
              // TODO-QSP: dynamic text: "Oh yeah, right here." <<$npcdesc>> reaches over to his nightstand, pulls a pack...
              scene.text(`"Oh yeah, right here." ${((s as any).npcdesc ?? 0)} reaches over to his nightstand, pulls a packet of tissues and tosses them over to you. Gratefully accepting them, you pull out a handful and get to work cleaning yourself up.`);
            } else {
              scene.img('images/shared/sex/cum/cum111.jpg');
              scene.text('You really need to clean yourself up after that. Reaching down to your purse, you pull some wipes out of your purse before reaching between your legs to wipe yourself up.');
              scene.text('It takes a few tries, more cum seemingly coming out with every next wipe, but eventually, you feel like you got most of it out. At least enough that nothing is going to be running down your legs walking home.');
            }
          }
        }
      }
    }
  }
  if (((s as any).cum_loc ?? 0)?.['hands'] > 0) {
    scene.text('Once you\'re satisfied that the rest of your body is clean, you wipe your hands off and toss the wipes into the trash.');
  }
  ((s as any).hookup ?? {})['wipes'] = 0;
  qspCall(s, 'cum_cleanup', '');
  qspCall(s, 'hookup_after', 'start');
  // TODO-QSP: end
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).hookup ?? 0)?.['cigarette'] === 5) {
    scene.img('images/shared/sex/after/bed_smoke3.jpg');
    if (((s as any).hookup ?? 0)?.['talk'] > 0) {
      scene.text('The two of you let the conversation die off as you puff away at the last of nubs of your cigarettes.');
    } else {
      scene.text('You both sit there, smoking in contented silence until your cigarettes are nothing but ashes.');
    }
  } else {
    if (((s as any).hookup ?? 0)?.['cigarette'] === 4) {
      scene.img('images/shared/sex/after/bed_smoke1.jpg');
      scene.text('The two of you let the conversation die off as you puff away at the last of the nubs of your cigarette.');
    } else {
      if (((s as any).hookup ?? 0)?.['cigarette'] === 3) {
        qspCall(s, 'drugs', 'smoke');
        scene.img('images/shared/sex/after/phone_smoke.jpg');
        if (((s as any).npc_smoker ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
          // TODO-QSP: dynamic text: Reaching down to your purse, you pull out your phone and a cigarette, sparking t...
          scene.text(`Reaching down to your purse, you pull out your phone and a cigarette, sparking the latter and taking a long enjoyable drag from it. ${((s as any).npcdesc ?? 0)} sees you light up and does the same, pulling his own smokes from his nightstand. The two of your relax, smoking together, while you unwind checking messages and scrolling through social media feeds.`);
        } else {
          scene.text('Reaching down to your purse, you pull out your phone and one of your cigarettes, sparking the latter and taking a long enjoyable drag from it. Sitting back up, you unlock your phone and breathe out, relaxing with your cigarette while you unwind, checking messages and scrolling through social media feeds.');
        }
      } else {
        if (((s as any).npc_smoker ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).hookup ?? 0)?.['cigarette'] === 2) {
          qspCall(s, 'drugs', 'smoke', 1);
          scene.img('images/shared/sex/after/bed_smoke3.jpg');
          scene.text('The two of you lay back and relax, enjoying a post-fuck smoke together as you wind down.');
        } else {
          if (((s as any).npc_smoker ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).hookup ?? 0)?.['cigarette'] === 1) {
            qspCall(s, 'drugs', 'smoke');
            scene.img('images/shared/sex/after/bed_smoke3.jpg');
            // TODO-QSP: dynamic text: Seeing you light up, <<$npcdesc>> does as well, pulling a pack from his nightsta...
            scene.text(`Seeing you light up, ${((s as any).npcdesc ?? 0)} does as well, pulling a pack from his nightstand. You spark the end with your lighter and relax, taking a long drag, relishing the flavor as it fills your mouth and lungs. The two of you just sit there in silence for a few minutes, enjoying a post-fuck smoke together as you wind down.`);
          } else {
            if (((s as any).hookup ?? 0)?.['cigarette'] === 1) {
              qspCall(s, 'drugs', 'smoke');
              qspCall(s, 'stat', '');
              scene.img('images/shared/sex/after/bed_smoke1.jpg');
              scene.text('Smoke fills your lungs and you hold it there, savoring it, before exhaling slowly. As the smoke blows past your lips, it\'s like all your stress goes with it and you sigh happily, relaxing into the bed.');
            } else {
              if (((s as any).npc_smoker ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
                // TODO-QSP: dynamic text: <<$npcdesc>> reaches over to his nightstand and pulls out a pack of cigarettes. ...
                scene.text(`${((s as any).npcdesc ?? 0)} reaches over to his nightstand and pulls out a pack of cigarettes. Removing one from the pack, he sparks it, taking a long drag and relaxing as he blows smoke from his nose.`);
              } else {
                if (((s as any).hookup ?? 0)?.['get_out'] === 1) {
                  scene.text('"Ugh, bitch..." he grumbles.');
                } else {
                  // TODO-QSP: dynamic text: <<$npcdesc>> is just laying back on his bed, relaxing in the afterglow of your l...
                  scene.text(`${((s as any).npcdesc ?? 0)} is just laying back on his bed, relaxing in the afterglow of your little encounter together.`);
                }
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).hookup ?? 0)?.['get_up'] !== 1) {
    if (((s as any).hour ?? 0) > 20  ||  ((s as any).hour ?? 0) < 5) {
      // TODO-QSP: act 'Rest your eyes': gt 'hookup_after', 'bed'
    }
    if (((s as any).npc_smoker ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).hookup ?? 0)?.['cigarette'] === 0) {
      scene.actions([
        { label: 'Ask to bum a cigarette', handler: (st: GameState) => {
    scene.text('He pulls another cigarette out the pack and places it in your lips, flicking his lighter until the tip catches fire and you draw smoke in through your mouth.');
    ((s as any).hookup ?? {})['cigarette'] = 2;
    scene.actions([
      { label: 'Smoke together', goto: ['hookup_after', 'start'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Cuddle up with <<$npcdesc>>', goto: ['hookup_after', 'cuddle'] },
    ]);
  }
  qspCall(s, 'hookup_after', 'gotta_go');
  // TODO-QSP: end
  scene.actions([
    { label: 'Can I borrow your shower?', handler: (st: GameState) => {
    // TODO-QSP: $npc_apt_bathroom[$npcID]
    scene.text('"Can I borrow your shower?"');
    scene.text('"Yeah sure, go ahead."');
    scene.text('"Thanks," you smile getting up and padding into the bathroom.');
    scene.actions([
      { label: 'Take a shower', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.img('images/shared/home/bathroom/dush.mp4');
    ((s as any).hookup ?? {})['shower'] = 1;
    qspCall(s, 'din_van', 'showerdin');
    // TODO-QSP: dynamic text: You turn on the faucet, relaxing as the hot water pours down over your skin. Aft...
    scene.text(`You turn on the faucet, relaxing as the hot water pours down over your skin. After a few minutes, you turn the tap off, toweling off using what you can only assume to be ${((s as any).npcdesc ?? 0)}'s towel and walk naked back into his room. ${((s as any).npcdesc ?? 0)} is still there, relaxing in his bed`);
    qspCall(s, 'hookup_after', 'gotta_go');
    scene.actions([
      { label: 'Crawl back into bed', goto: ['hookup_after', 'cuddle'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBed(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  if (((s as any).cum_loc ?? 0)?.['face'] > 0) {
    scene.img('images/shared/sex/cum/facial/facial35.jpg');
    scene.text('Maybe it\'s the cum on your face but your eyelids feel so heavy all of a sudden. You should probably get up but... You just need to rest your eyes...');
    scene.text('just... for... a minute...');
  } else {
    if (((s as any).cum_loc ?? 0)?.['stomach'] > 0) {
      scene.img('images/shared/sex/cum/stomach/bellycum3.jpg');
      scene.text('Your eyelids start to grow heavy. Part of you wants to clean yourself up but this bed just feels so soft right now... You should probably get up but... You just need to rest your eyes...');
      scene.text('just... for... a minute...');
    } else {
      if (((s as any).cum_loc ?? 0)?.['butt'] > 0) {
        scene.img('images/shared/sex/cum/back1.jpg');
        scene.text('Your eyelids start to droop. They just feel so heavy right now... You should probably get up but... You just need to rest your eyes...');
        scene.text('just... for... a minute...');
      } else {
        if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
          scene.img('images/shared/sex/cum/vagcreampie/after2.jpg');
          scene.text('Your vision begins to blur and your eyelids grow heavy. It\'s so hard to keep them open right now...');
          scene.text('Curling onto your side, you let them fall, snuggling into the pillow. You should probably get up but... You just need to rest your eyes...');
          scene.text('just... for... a minute...');
        } else {
          scene.text(`<center><b>${((s as any).npcdesc ?? 0)}'s Bedroom</b></center>`);
          if (((s as any).pcs_pubes ?? 0) < 4) {
            scene.img('images/shared/sex/after/sleep1.jpg');
          } else {
            scene.img('images/shared/sex/after/sleep2.jpg');
          }
          scene.text('Your tiredness hits you with a sudden wave and your eyelids start to droop. They just feel so heavy right now. You should probably get up but... you just need to rest your eyes...');
          scene.text('just... for... a minute...');
        }
      }
    }
  }
  qspCall(s, 'willpower', 'misc', 'self');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Force yourself to get up [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Force yourself to get up [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    ((s as any).hookup ?? {})['get_up'] = 1;
    // TODO-QSP: $npc_apt_bedroom[$npcID]
    scene.text('With tremendous effort, you force your eyes open and haul yourself out of bed. You can\'t fall asleep now, not yet.');
    qspCall(s, 'hookup_after', 'start');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Drift off into sleep', handler: (st: GameState) => {
    ((s as any).hookup ?? {})['sleep_accident'] = 1;
    if (((s as any).hookup ?? 0)?.['cum_choice'] === 'face') {
      scene.img(`images/shared/sex/cum/facial/sleep${Math.floor(Math.random() * 3) + 1}.jpg`);
    } else {
      if (((s as any).hookup ?? 0)?.['cum_choice'] === 'stomach') {
        scene.img('images/shared/sex/cum/stomach/sleep1.jpg');
      } else {
        if (((s as any).hookup ?? 0)?.['cum_choice'] === 'ass'  ||  ((s as any).hookup ?? 0)?.['cum_choice'] === 'back') {
          scene.img('images/shared/sex/cum/back1.jpg');
        } else {
          if (((s as any).hookup ?? 0)?.['cum_choice'] === 'creampie') {
            scene.img('images/shared/sex/cum/vagcreampie/after2.jpg');
          } else {
            scene.img('images/shared/home/bedroom/son.jpg');
          }
        }
      }
    }
    scene.text('<i>just... for... a minute...</i>');
    scene.text('That\'s the last thing you remember before everything fades into darkness...');
    scene.actions([
      { label: '...', goto: ['hookup_after', 'sleep'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterCuddle(s: GameState, scene: SceneBuilder): void {
  ((s as any).hookup ?? {})['bed'] = 1;
  scene.img('images/shared/sex/after/cuddle1.jpg');
  if (((s as any).hookup ?? 0)?.['shower'] === 1) {
    // TODO-QSP: dynamic text: Hair still wet from the shower, you crawl back into bed with <<$npcdesc>> and cu...
    scene.text(`Hair still wet from the shower, you crawl back into bed with ${((s as any).npcdesc ?? 0)} and cuddle up, resting your naked body on top of his. He wraps his arms around you in return and the two of you relax, listening to the sound of each other's breathing.`);
  } else {
    // TODO-QSP: dynamic text: Scootching over, you cuddle up with <<$npcdesc>>, resting your naked body on top...
    scene.text(`Scootching over, you cuddle up with ${((s as any).npcdesc ?? 0)}, resting your naked body on top of his. He wraps his arms around you in return and the two of you relax, listening to the sound of each other's breathing.`);
  }
  qspCall(s, 'hookup_after', 'gotta_go');
  if (((s as any).hour ?? 0) > 20  ||  ((s as any).hour ?? 0) < 2) {
    scene.actions([
      { label: 'Fall asleep', handler: (st: GameState) => {
    scene.text('As you lay there together, your eyelids slowly grow heavier until they close completely and your consciousness drifts slowly into darkness...');
    scene.actions([
      { label: '...', goto: ['hookup_after', 'sleep'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterGottaGo(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hookup ?? 0)?.['fuck'] > 0) {
    ((s as any).hookup ?? {})['fun'] = 'fuck';
  } else {
    ((s as any).hookup ?? {})['fun'] = 'fun';
  }
  if (((s as any).hookup ?? 0)?.['continuation'] === 0) {
    ((s as any).hookup ?? {})['continuation'] = (Math.floor(Math.random() * (1 - -1 + 1)) + (-1));
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'I should go', handler: (st: GameState) => {
    ((s as any).hookup ?? {})['i_should_go'] = 1;
    scene.img('images/pc/activities/misc/dress_1.mp4');
    if (((s as any).hookup ?? 0)?.['bed'] === 1) {
      // TODO-QSP: dynamic text: As nice as this is, you really can't stay and you heave yourself up and away fro...
      scene.text(`As nice as this is, you really can't stay and you heave yourself up and away from ${((s as any).npcdesc ?? 0)}, getting up from the bed.`);
      scene.text('"I should go," you say, almost apologetically, picking your clothes up from where they were thrown.');
    } else {
      scene.text('"I should go," you say, padding over to where your clothes lay in a heap and beginning to pull them on.');
    }
    qspCall(s, 'hookup_after', 'dress_loop');
    qspCall(s, 'hookup_after', 'hookup_continuation');
  } },
    { label: 'Thanks for the <<$hookup[\'fun\']>>', handler: (st: GameState) => {
    ((s as any).hookup ?? {})['thank_for_fun'] = 1;
    qspCall(s, 'hookup_after', 'dress_loop');
    scene.img('images/pc/activities/misc/dress_1.mp4');
    if (((s as any).hookup ?? 0)?.['bed'] === 1) {
      // TODO-QSP: dynamic text: You get up from the bed and pad across the floor, bending down to pick up your d...
      scene.text(`You get up from the bed and pad across the floor, bending down to pick up your discarded apparel. "Thanks for the ${((s as any).hookup ?? 0)?.['fun']}," you say, smirking over your shoulder at ${((s as any).npcdesc ?? 0)} while you begin to pull your clothes on.`);
    } else {
      // TODO-QSP: dynamic text: "Well, thanks for the <<$hookup['fun']>>," you say, bending down to pick up your...
      scene.text(`"Well, thanks for the ${((s as any).hookup ?? 0)?.['fun']}," you say, bending down to pick up your clothes.`);
    }
    if (((s as any).hookup ?? 0)?.['bj'] > 0  &&  ((s as any).hookup ?? 0)?.['fuck'] < 1) {
      if (((s as any).hookup ?? 0)?.['virgin'] > 0) {
        // TODO-QSP: dynamic text: "Thanks for the blowjob," he smirks back. "You give pretty good head. You sure y...
        scene.text(`"Thanks for the blowjob," he smirks back. "You give pretty good head. You sure you're a virgin?" You don't respond, ${((s as any).hookup ?? 0)?.['dress_describe']}, but roll your eyes at his commentary.`);
      } else {
        // TODO-QSP: dynamic text: "Thanks for the blowjob," he smirks back as you're <<$hookup['dress_describe']>>...
        scene.text(`"Thanks for the blowjob," he smirks back as you're ${((s as any).hookup ?? 0)?.['dress_describe']}. "You give great head."`);
      }
    } else {
      if (((s as any).hookup ?? 0)?.['fuck'] > 0) {
        // TODO-QSP: dynamic text: "Right back at you," he smirks in return while you're <<$hookup['dress_describe'...
        scene.text(`"Right back at you," he smirks in return while you're ${((s as any).hookup ?? 0)?.['dress_describe']}.`);
      }
    }
    qspCall(s, 'hookup_after', 'hookup_continuation');
  } },
  ]);
  scene.build();
}

function enterHookupContinuation(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 10) + 1) > 7  &&  (((s as any).hour ?? 0) > 20  ||  ((s as any).hour ?? 0) < 2)  &&  ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).npc_girlfriend ?? 0)?.[String((s as any).npcID ?? 0)] === 0  &&  ((s as any).hookup ?? 0)?.['npc_can_spend_the_night'] === 0) {
    // TODO-QSP: dynamic text: "Really?" <<$npcdesc>> sits up in bed. "You don't have to. Are you sure you don'...
    scene.text(`"Really?" ${((s as any).npcdesc ?? 0)} sits up in bed. "You don't have to. Are you sure you don't want to spend the night?"`);
    qspCall(s, 'hookup_after', 'spend_the_night');
  } else {
    if (((s as any).hookup ?? 0)?.['continuation'] > 0) {
      if (((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'sex') {
        qspCall(s, 'hookup_after', 'npc_fuckbuddy_request');
      } else {
        if (((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] !== '') {
          qspCall(s, 'hookup_after', 'npc_date_request');
        }
      }
      qspCall(s, 'hookup_after', 'finish_dressing');
    } else {
      scene.text('"Alright, sure. Feel free to see yourself out."');
      qspCall(s, 'hookup_after', 'later');
      qspCall(s, 'hookup_after', 'panty_gift');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSpendTheNight(s: GameState, scene: SceneBuilder): void {
  ((s as any).hookup ?? {})['npc_can_spend_the_night'] = 1;
  // TODO-QSP: end
  scene.actions([
    { label: 'No thanks', handler: (st: GameState) => {
    ((s as any).hookup ?? {})['npc_can_spend_the_night'] = 2;
    scene.text('"Thanks but no thanks," you smile wistfully. "I really need to get home tonight."');
    qspCall(s, 'hookup_after', 'hookup_continuation');
  } },
    { label: 'Well...', handler: (st: GameState) => {
    scene.text('"Well..." you pause for a moment, considering. You <i>could</i> stay over tonight. Maybe you don\'t <i>have</i> to go...');
    scene.actions([
      { label: 'No, I shouldn\'t', handler: (st: GameState) => {
    scene.text(`<center><b>${((s as any).npcdesc ?? 0)}'s Bedroom</b></center>`);
    // TODO-QSP: $npc_apt_bedroom[$npcID]
    scene.text('"... no," you sigh. "I really shouldn\'t. I want to, but I can\'t."');
    qspCall(s, 'hookup_after', 'hookup_continuation');
  } },
      { label: 'I guess I could...', handler: (st: GameState) => {
    scene.text(`<center><b>${((s as any).npcdesc ?? 0)}'s Bedroom</b></center>`);
    // TODO-QSP: $npc_apt_bedroom[$npcID]
    scene.text('"... I guess I could..." you relent, dropping the clothes you were holding.');
    scene.actions([
      { label: 'Undress and get into bed with him', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/cuddle1.jpg');
    // TODO-QSP: dynamic text: After pulling off your clothes again, you slip back into bed and cuddle up with ...
    scene.text(`After pulling off your clothes again, you slip back into bed and cuddle up with ${((s as any).npcdesc ?? 0)}, resting your naked body on top of his. He wraps his arms around you in return and the two of you relax, listening to the sound of each other's breathing.`);
    scene.actions([
      { label: 'Fall asleep', handler: (st: GameState) => {
    scene.text('As you lay there together, your eyelids slowly grow heavier until they close completely and your consciousness drifts slowly into darkness...');
    scene.actions([
      { label: '...', goto: ['hookup_after', 'sleep'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    { label: 'I really need to go', handler: (st: GameState) => {
    scene.img('images/pc/activities/misc/dress_1.mp4');
    if (((s as any).hookup ?? 0)?.['dress'] === 1) {
      scene.text('"I wish I could but I really have to go. I can\'t stay over tonight," you say, pulling your dress all the way down over your head.');
    } else {
      scene.text('"I wish I could but I really have to go. I can\'t stay over tonight," you say pulling up your pants all the way and throwing your top over your head.');
    }
    qspCall(s, 'hookup_after', 'hookup_continuation');
  } },
  ]);
  scene.build();
}

function enterPcFuckbuddyRequest(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'We should hook up again later', handler: (st: GameState) => {
    if (((s as any).hookup ?? 0)?.['dress'] === 1) {
      scene.text('"This was fun. We should hook up again sometime," you say, pulling your dress over your head.');
    } else {
      scene.text('"This was fun. We should hook up again sometime," you say, pulling your pants up over your hips.');
    }
    if ((Math.floor(Math.random() * 3) + 1) === 1) {
      scene.text('"Nah, this was a one-time thing. I never fuck the same girl twice."');
      scene.text('You pause for a moment and give him a look. "Seriously?"');
      scene.text('"Do I look like I\'m kidding?" he grins back, clearly satisfied with himself.');
      scene.text('<i>Free access to pussy and you\'re just gonna turn it down. Whatever...</i> you think to yourself as you finished getting dressed.');
      // TODO-QSP: dynamic text: Once you're done, you grab your things and leave. <<$npcdesc>> doesn't say a wor...
      scene.text(`Once you're done, you grab your things and leave. ${((s as any).npcdesc ?? 0)} doesn't say a word as you close the door behind you.`);
    } else {
      ((s as any).hookup ?? {})['fuckbuddy'] = 1;
      scene.text('"What, like fuckbuddies?"');
      scene.text('"Why not?" you smirk.');
      scene.text('"Sure, I\'ll sleep with you again if you\'re offering."');
      scene.text('You tell him your number while you finish getting dressed and he taps it into his phone. A few moments later, a notification pings in your messages:');
      qspCall(s, 'hookup_after', 'fuckbuddy_text');
    }
    scene.actions([
      { label: 'Leave', goto: ['hookup_after', 'exit'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterPcDateRequest(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Maybe I could see you again sometime?', handler: (st: GameState) => {
    if (((s as any).hookup ?? 0)?.['dress'] === 1) {
      scene.text('"Maybe I could see you again? For like, dinner? Or a movie? Or something?" you say, pulling your dress over your head.');
    } else {
      scene.text('"Maybe I could see you again? For like, dinner? Or a movie? Or something?" you say, pulling your pants up over your hips.');
    }
    if ((Math.floor(Math.random() * 3) + 1) === 1) {
      scene.text('"Nah, this was a one time thing. I never fuck the same girl twice."');
      scene.text('You pause for a moment and give him a look. "Seriously?"');
      scene.text('"Do I look like I\'m kidding?" he grins back, clearly satisfied with himself.');
      // TODO-QSP: dynamic text: <i>Wow... You can really pick em, huh <<$pcs_nickname>>...</i> you think to your...
      scene.text(`<i>Wow... You can really pick em, huh ${((s as any).pcs_nickname ?? 0)}...</i> you think to yourself. <i>Ugh. Whatever...</i>`);
      // TODO-QSP: dynamic text: Once you're done, you grab your things and leave. <<$npcdesc>> doesn't say a wor...
      scene.text(`Once you're done, you grab your things and leave. ${((s as any).npcdesc ?? 0)} doesn't say a word as you close the door behind you.`);
      scene.actions([
        { label: 'Leave', goto: ['hookup_after', 'exit'] },
      ]);
    } else {
      scene.text('"You mean like a date?"');
      scene.text('"Yeah... like a date..."');
      scene.text('For a moment you feel intensely awkward as you wait for his response, but when you turn to look at him he\'s smiling.');
      scene.text('"A date... Yeah, I\'d like to take you on a date sometime." Your expression bursts into a smile as well, unable to contain yourself.');
      scene.text('You tell him your number while you finished getting dressed and he taps it into his phone. A few moments later, a notification pings in your messages:');
      ((s as any).hookup ?? {})['text_message'] = Math.floor(Math.random() * 2) + 1;
      if (((s as any).hookup ?? 0)?.['text_message'] === 1) {
        // TODO-QSP: '  ' + $func('wrap', 'accent b', 'hey cutie')
        scene.text('"Hey yourself," you say aloud, looking up at him. "Anyways, see you around."');
      } else {
        if (((s as any).hookup ?? 0)?.['text_message'] === 2) {
          // TODO-QSP: '  ' + $func('wrap', 'accent b', 'dont forget to call :)')
          scene.text('"I won\'t," you promise.');
        }
      }
      scene.text('That bit of business done, you cheerfully wave him goodbye and head out the door.');
      scene.actions([
        { label: 'Leave', goto: ['hookup_after', 'exit'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterNpcFuckbuddyRequest(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hookup ?? 0)?.['thank_for_fun'] === 1) {
    scene.text('"You want to do it again sometime? Nothing serious, just sex. No strings."');
    // TODO-QSP: dynamic text: "Like what?" you ask back, <<$hookup['dress_describe']>>. "Friends with benefits...
    scene.text(`"Like what?" you ask back, ${((s as any).hookup ?? 0)?.['dress_describe']}. "Friends with benefits? Fuckbuddies? Booty callers?"`);
    scene.text('"Yeah, just like that," he grins.');
  } else {
    if (((s as any).hookup ?? 0)?.['npc_can_spend_the_night'] > 0) {
      scene.text('"Well, maybe you could stay over some other night?" he asks. "We could fuck each other\'s brains out and then you can sleep here."');
    } else {
      scene.text('"Cool. Maybe we can hook up again sometime?"');
    }
    // TODO-QSP: dynamic text: "Like what?" you ask back, <<$hookup['dress_describe']>>. "Friends with benefits...
    scene.text(`"Like what?" you ask back, ${((s as any).hookup ?? 0)?.['dress_describe']}. "Friends with benefits? Fuckbuddies? Booty callers? No strings attached?"`);
    scene.text('"Yeah, just like that. No strings attached."');
  }
  qspCall(s, 'hookup_after', 'just_a_hookup');
  qspCall(s, 'hookup_after', 'dress_loop');
  qspCall(s, 'hookup_after', 'have_a_boyfriend');
  qspCall(s, 'hookup_after', 'have_a_girlfriend');
  // TODO-QSP: end
  scene.actions([
    { label: 'Sure', handler: (st: GameState) => {
    ((s as any).hookup ?? {})['fuckbuddy'] = 1;
    (s as any).fuckbuddy_total = ((s as any).fuckbuddy_total ?? 0) + (1);
    // TODO-QSP: dynamic text: "Sure, sounds fun," you smile, <<$hookup['dress_describe']>>.
    scene.text(`"Sure, sounds fun," you smile, ${((s as any).hookup ?? 0)?.['dress_describe']}.`);
    scene.text('After finishing getting dressed, you tell him your number while he taps it into his phone. A few moments later, a notification pings in your messages:');
    ((s as any).hookup ?? {})['text_message'] = Math.floor(Math.random() * 2) + 1;
    if (((s as any).hookup ?? 0)?.['text_message'] === 1) {
      // TODO-QSP: '  ' + $func('wrap', 'accent b', 'hey fuck buddy')
      scene.text('"Hey yourself," you say aloud, looking up at him. "Anyways, see you around."');
    } else {
      if (((s as any).hookup ?? 0)?.['text_message'] === 2) {
        // TODO-QSP: '  ' + $func('wrap', 'accent b', 'send nudes')
        scene.text('"Maybe," you smirk. "Anyways, see you around."');
      }
    }
    scene.text('Your little exchange done, you wave him goodbye and head out the door.');
    scene.actions([
      { label: 'Leave', goto: ['hookup_after', 'exit'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterNpcDateRequest(s: GameState, scene: SceneBuilder): void {
  scene.text('"Well... Maybe I could see you again sometime? Not just sex, but like really see you, you know? Take you out on a date or something? Dinner? See a movie?"');
  qspCall(s, 'hookup_after', 'just_a_hookup');
  // TODO-QSP: end
  scene.actions([
    { label: 'Sure', handler: (st: GameState) => {
    scene.text('"Yeah, I think I\'d like that," you smile gently.');
    scene.text('After finishing getting dressed, you tell him your number while he taps it into his phone. A few moments later, a notification pings in your messages:');
    ((s as any).hookup ?? {})['text_message'] = Math.floor(Math.random() * 2) + 1;
    if (((s as any).hookup ?? 0)?.['text_message'] === 1) {
      // TODO-QSP: '  ' + $func('wrap', 'accent b', 'hey cutie')
      scene.text('"Hey yourself," you say aloud, looking up at him. "Anyways, see you around."');
    } else {
      if (((s as any).hookup ?? 0)?.['text_message'] === 2) {
        // TODO-QSP: '  ' + $func('wrap', 'accent b', 'dont forget to call :)')
        scene.text('"I won\'t," you promise.');
      }
    }
    scene.text('Your little exchange is done, you wave him goodbye and head out the door.');
    scene.actions([
      { label: 'Leave', goto: ['hookup_after', 'exit'] },
    ]);
  } },
    { label: 'I\'m not up for anything serious', handler: (st: GameState) => {
    scene.text(`<center><b>${((s as any).npcdesc ?? 0)}'s Bedroom</b></center>`);
    // TODO-QSP: $npc_apt_bedroom[$npcID]
    scene.text('"I\'m not looking for anything serious right now."');
    scene.actions([
      { label: 'Sorry', handler: (st: GameState) => {
    scene.text('"Sorry..."');
    // TODO-QSP: dynamic text: "Oh. Uhh, well, it's fine I guess..." <<$npcdesc>> trails off and you're left in...
    scene.text(`"Oh. Uhh, well, it's fine I guess..." ${((s as any).npcdesc ?? 0)} trails off and you're left in an extremely uncomfortable silence while you get dressed in front of him.`);
    // TODO-QSP: dynamic text: <i>Holy fuck this is awkward,</i> you think to yourself as you pull the last of ...
    scene.text(`<i>Holy fuck this is awkward,</i> you think to yourself as you pull the last of your clothes on. After giving yourself a once over, you give ${((s as any).npcdesc ?? 0)} a strained smile and wave goodbye, quickly striding towards the door to escape.`);
    scene.actions([
      { label: 'Leave', goto: ['hookup_after', 'exit'] },
    ]);
  } },
      { label: 'If we were fuckbuddies...', handler: (st: GameState) => {
    scene.text('"If it were something purely physical, like fuckbuddies or something, I wouldn\'t mind getting together for some fun, but I\'m just not interested in dating."');
    if ((Math.floor(Math.random() * 10) + 1) > 7  &&  ((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] !== 'serious') {
      ((s as any).hookup ?? {})['fuckbuddy'] = 1;
      // TODO-QSP: dynamic text: "Well... If it means I can see you again, then sure I guess." <<$npcdesc>> doesn...
      scene.text(`"Well... If it means I can see you again, then sure I guess." ${((s as any).npcdesc ?? 0)} doesn't really seem satisfied with the results, but he still tells you his number while you tap it into your contact list.`);
      scene.text('"So uhh, yeah... Call me sometime?"');
      // TODO-QSP: dynamic text: With a shrug and an awkward wave goodbye, you head out the door and out of <<$np...
      scene.text(`With a shrug and an awkward wave goodbye, you head out the door and out of ${((s as any).npcdesc ?? 0)}'s apartment.`);
      scene.actions([
        { label: 'Leave', goto: ['hookup_after', 'exit'] },
      ]);
    } else {
      scene.text('"No," he shakes his head. "I don\'t want to get led on by you if you\'re only interested in a fuck and not anything real. Guess this is just a one-night stand."');
      scene.actions([
        { label: 'Taken aback', handler: (st: GameState) => {
    scene.text(`<center><b>${((s as any).npcdesc ?? 0)}'s Bedroom</b></center>`);
    // TODO-QSP: $npc_apt_bedroom[$npcID]
    scene.text('You blink in surprise, recoiling slightly at his words. That response really wasn\'t what you saw coming. After all, what guy just gives up free access to sex?');
    // TODO-QSP: dynamic text: "Uhh well, uhh... Alright... Guess I won't see you later then..." you respond aw...
    scene.text(`"Uhh well, uhh... Alright... Guess I won't see you later then..." you respond awkwardly. After giving yourself a once over, you give ${((s as any).npcdesc ?? 0)} a strained smile and wave goodbye, quickly striding towards out the door.`);
    scene.actions([
      { label: 'Leave', goto: ['hookup_after', 'exit'] },
    ]);
  } },
        { label: 'It\'s to be expected', handler: (st: GameState) => {
    scene.text(`<center><b>${((s as any).npcdesc ?? 0)}'s Bedroom</b></center>`);
    // TODO-QSP: $npc_apt_bedroom[$npcID]
    scene.text('You nod to yourself, admittedly a little bit wistfully. It\'s to be expected from a guy like him. But if he wants something more, you just can\'t give it to him. You\'re only after pleasure, you don\'t want to get tangled up in a relationship.');
    // TODO-QSP: dynamic text: "Well, guess I won't see you around then so... Bye?" You wave <<$npcdesc>> goodb...
    scene.text(`"Well, guess I won't see you around then so... Bye?" You wave ${((s as any).npcdesc ?? 0)} goodbye and stride out the door, unable to feel that this little bit of fun took a bit of a damper turn right at the end.`);
    scene.actions([
      { label: 'Leave', goto: ['hookup_after', 'exit'] },
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

function enterFuckbuddyText(s: GameState, scene: SceneBuilder): void {
  ((s as any).hookup ?? {})['fuckbuddy'] = 1;
  ((s as any).hookup ?? {})['text_message'] = Math.floor(Math.random() * 2) + 1;
  if (((s as any).hookup ?? 0)?.['text_message'] === 1) {
    // TODO-QSP: '  ' + $func('wrap', 'accent b', 'hey fuck buddy')
    scene.text('"Hey yourself," you say aloud, smiling at him. "Anyways, see you around."');
  } else {
    if (((s as any).hookup ?? 0)?.['text_message'] === 2) {
      // TODO-QSP: '  ' + $func('wrap', 'accent b', 'send nudes')
      scene.text('"We\'ll see about that," you roll your eyes back. "Anyways, see you around."');
    }
  }
  scene.text('That little exchange done, you cheerfully wave him goodbye and head out the door.');
  // TODO-QSP: end
  scene.build();
}

function enterLater(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'hookup_after', 'finish_dressing');
  qspCall(s, 'hookup_after', 'pc_fuckbuddy_request');
  qspCall(s, 'hookup_after', 'pc_date_request');
  // TODO-QSP: end
  scene.build();
}

function enterJustAHookup(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) >= 20  ||  ((s as any).hour ?? 0) <= 9) {
    ((s as any).hookup ?? {})['just_a'] = 'one night stand';
  } else {
    ((s as any).hookup ?? {})['just_a'] = 'random hookup';
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'This was a <<$hookup[\'just_a\']>>', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "No," you shake your head. "This was just a <<$hookup['just_a']>>. I'm not looki...
    scene.text(`"No," you shake your head. "This was just a ${((s as any).hookup ?? 0)?.['just_a']}. I'm not looking for anything lasting."`);
    if (((s as any).hookup ?? 0)?.['continuation'] === 1) {
      scene.text('"Whatever, your loss," he shrugs.');
      scene.text('"Pfft-! Yeah, sure," you snigger back, pulling on the rest of your clothes. You give yourself a once over, making sure everything\'s in place and wave goodbye as you head towards the door.');
    } else {
      if (((s as any).hookup ?? 0)?.['continuation'] === 2) {
        // TODO-QSP: dynamic text: "Oh. Uhh, well..." <<$npcdesc>> trails off and you're left in an extremely uncom...
        scene.text(`"Oh. Uhh, well..." ${((s as any).npcdesc ?? 0)} trails off and you're left in an extremely uncomfortable silence while you get dressed in front of him.`);
        // TODO-QSP: dynamic text: <i>Holy fuck this is awkward,</i> you think to yourself as you pull the last of ...
        scene.text(`<i>Holy fuck this is awkward,</i> you think to yourself as you pull the last of your clothes on. After giving yourself a once over, you give ${((s as any).npcdesc ?? 0)} a strained smile and wave goodbye, quickly striding towards the door to escape.`);
      }
    }
    scene.actions([
      { label: 'Leave', goto: ['hookup_after', 'exit'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterHaveABoyfriend(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['boyfriends_current'] > 0) {
    scene.actions([
      { label: 'I have a boyfriend', handler: (st: GameState) => {
    ((s as any).npc_know_girlfriend ?? {})[String((s as any).npcID ?? 0)] = 0;
    scene.img('images/shared/romance/misc/depart_annoyed1.mp4');
    scene.text('"I have a boyfriend," you say, giving him a look.');
    if (((s as any).npc_fidelity_label ?? 0)?.[String((s as any).npcID ?? 0)] === 'faithful') {
      // TODO-QSP: dynamic text: "Oh. Uhh, well..." <<$npcdesc>> trails off and you're left in an extremely uncom...
      scene.text(`"Oh. Uhh, well..." ${((s as any).npcdesc ?? 0)} trails off and you're left in an extremely uncomfortable silence while you get dressed in front of him.`);
      // TODO-QSP: dynamic text: <i>Holy fuck this is awkward,</i> you think to yourself as you pull the last of ...
      scene.text(`<i>Holy fuck this is awkward,</i> you think to yourself as you pull the last of your clothes on. After giving yourself a once over, you give ${((s as any).npcdesc ?? 0)} a strained smile and wave goodbye, quickly striding towards the door to escape.`);
      scene.actions([
        { label: 'Leave', goto: ['hookup_after', 'exit'] },
      ]);
    } else {
      if (((s as any).npc_girlfriend ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'sex') {
        scene.text('"So? I have a girlfriend," he grins shamelessly. "Doesn\'t mean we can\'t keep fucking."');
        scene.actions([
          { label: 'No way', handler: (st: GameState) => {
    scene.img('images/shared/romance/misc/depart_annoyed1.mp4');
    scene.text('"Yeah, no," you grimace and pick up the rest of your things and head out the door.');
    scene.actions([
      { label: 'Leave', goto: ['hookup_after', 'exit'] },
    ]);
  } },
          { label: 'So long as you know', handler: (st: GameState) => {
    // TODO-QSP: $npc_apt_bedroom[$npcID]
    ((s as any).hookup ?? {})['fuckbuddy'] = 1;
    scene.text('"So long as you know," you smirk back. You exchange numbers with him and a moment later a notification pings in your messages.');
    qspCall(s, 'hookup_after', 'fuckbuddy_text');
    scene.actions([
      { label: 'Leave', goto: ['hookup_after', 'exit'] },
    ]);
  } },
        ]);
      } else {
        scene.text('"Whatever, your loss," he shrugs. "Looks like I\'m a better lay than him anyways."');
        scene.text('"Yeah, sure," you snigger back, pulling on the rest of your clothes. You give yourself a once over, making sure everything\'s in place and wave goodbye as you head towards the door.');
        scene.actions([
          { label: 'Leave', goto: ['hookup_after', 'exit'] },
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
  if (((s as any).stat ?? 0)?.['girlfriends_current'] > 0) {
    scene.actions([
      { label: 'I have a girlfriend', handler: (st: GameState) => {
    ((s as any).npc_know_girlfriend ?? {})[String((s as any).npcID ?? 0)] = 1;
    scene.img('images/shared/romance/misc/depart_annoyed1.mp4');
    scene.text('"I have a girlfriend," you say, giving him a look.');
    if (((s as any).npc_fidelity ?? 0)?.[String((s as any).npcID ?? 0)] === 6) {
      if (((s as any).npc_girlfriend ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'sex') {
        scene.text('"Hey, me too!" he grins shamelessly.');
        scene.actions([
          { label: 'No way', handler: (st: GameState) => {
    scene.img('images/shared/romance/misc/depart_annoyed1.mp4');
    scene.text('"Nice try but no," you grimace, and pick up the rest of your things and head out the door.');
    scene.actions([
      { label: 'Leave', goto: ['hookup_after', 'exit'] },
    ]);
  } },
          { label: 'So long as you know', handler: (st: GameState) => {
    // TODO-QSP: $npc_apt_bedroom[$npcID]
    ((s as any).hookup ?? {})['fuckbuddy'] = 1;
    scene.text('"So long as you know," you smirk back. You exchange numbers with him and a moment later a notification pings in your messages.');
    qspCall(s, 'hookup_after', 'fuckbuddy_text');
    scene.actions([
      { label: 'Leave', goto: ['hookup_after', 'exit'] },
    ]);
  } },
        ]);
      } else {
        scene.text('"Whatever, your loss," he shrugs. "Bi girls always come back when they start missing dick."');
        scene.text('"That\'s what strapons are for," you roll your eyes, pulling on the rest of your clothes. You give yourself a once over, making sure everything\'s in place and wave goodbye as you head towards the door.');
        scene.actions([
          { label: 'Leave', goto: ['hookup_after', 'exit'] },
        ]);
      }
    } else {
      // TODO-QSP: dynamic text: "Oh. Uhh, well..." <<$npcdesc>> trails off and you're left in an extremely uncom...
      scene.text(`"Oh. Uhh, well..." ${((s as any).npcdesc ?? 0)} trails off and you're left in an extremely uncomfortable silence while you get dressed in front of him.`);
      // TODO-QSP: dynamic text: <i>Holy fuck this is awkward,</i> you think to yourself as you pull the last of ...
      scene.text(`<i>Holy fuck this is awkward,</i> you think to yourself as you pull the last of your clothes on. After giving yourself a once over, you give ${((s as any).npcdesc ?? 0)} a strained smile and wave goodbye, quickly striding towards the door to escape.`);
      scene.actions([
        { label: 'Leave', goto: ['hookup_after', 'exit'] },
      ]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterDressImage(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hookup ?? 0)?.['CloDress'] === 1) {
    scene.img('images/shared/romance/lovers/misc/bed_dress.jpg');
  } else {
    scene.img('images/pc/activities/misc/dress_1.mp4');
  }
  // TODO-QSP: end
  scene.build();
}

function enterDressLoop(s: GameState, scene: SceneBuilder): void {
  ((s as any).hookup ?? {})['dress_describe'] = '';
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    if (((s as any).lastwornpantytype ?? 0)?.['hookup'] !== 'none') {
      ((s as any).hookup ?? {})['dress_describe'] = (((s as any).hookup ?? {})['dress_describe'] ?? 0) + ('pulling your panties up your legs');
      if (((s as any).lastwornbratype ?? 0)?.['hookup'] !== 'none'  ||  ((s as any).clothingworntype ?? 0) === 'nude') {
        ((s as any).hookup ?? {})['dress_describe'] = (((s as any).hookup ?? {})['dress_describe'] ?? 0) + (' and ');
      }
    }
    // TODO-QSP: gs 'panties', 'wear', $lastwornpantytype['hookup'], lastwornpantynumber['hookup']
    if (((s as any).lastwornbratype ?? 0)?.['hookup'] !== 'none') {
      ((s as any).hookup ?? {})['dress_describe'] = (((s as any).hookup ?? {})['dress_describe'] ?? 0) + ('fastening your bra around your chest');
      if (((s as any).clothingworntype ?? 0) === 'nude') {
        ((s as any).hookup ?? {})['dress_describe'] = (((s as any).hookup ?? {})['dress_describe'] ?? 0) + (' then ');
      }
    }
    // TODO-QSP: gs 'bras', 'wear', $lastwornbratype['hookup'], lastwornbranumber['hookup']
    // TODO-QSP: gs 'clothing', 'wear', $lastwornclothingtype['hookup'], lastwornclothingnumber['hookup'], 'force'
    if (((s as any).CloDress ?? 0) === 1) {
      ((s as any).hookup ?? {})['dress_describe'] = (((s as any).hookup ?? {})['dress_describe'] ?? 0) + ('pulling your dress over your shoulders');
    } else {
      if (((s as any).CloSkirtShortness ?? 0) > 0) {
        ((s as any).hookup ?? {})['dress_describe'] = 'slipping your skirt up your legs';
        ((s as any).hookup ?? {})['dress_describe'] = (((s as any).hookup ?? {})['dress_describe'] ?? 0) + (' and pulling your top over your breasts');
      } else {
        ((s as any).hookup ?? {})['dress_describe'] = (((s as any).hookup ?? {})['dress_describe'] ?? 0) + ('tugging your pants over your hips');
        ((s as any).hookup ?? {})['dress_describe'] = (((s as any).hookup ?? {})['dress_describe'] ?? 0) + (' and pulling your top over your breasts');
      }
    }
  } else {
    if (((s as any).CloDress ?? 0) === 1) {
      ((s as any).hookup ?? {})['dress_describe'] = (((s as any).hookup ?? {})['dress_describe'] ?? 0) + ('checking your dress');
    } else {
      if (((s as any).CloSkirtShortness ?? 0) > 0) {
        ((s as any).hookup ?? {})['dress_describe'] = (((s as any).hookup ?? {})['dress_describe'] ?? 0) + ('smoothing your skirt');
      } else {
        ((s as any).hookup ?? {})['dress_describe'] = (((s as any).hookup ?? {})['dress_describe'] ?? 0) + ('checking your clothes');
      }
    }
  }
  qspCall(s, 'outfit', 'remove_backup', 'hookup');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterFinishDressing(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hookup ?? 0)?.['sleepover'] === 1) {
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      qspCall(s, 'hookup_morning', 'later_nude');
    } else {
      qspCall(s, 'hookup_morning', 'later_dressed');
    }
  } else {
    qspCall(s, 'hookup_after', 'panty_gift');
    scene.actions([
      { label: 'Finish getting dressed', handler: (st: GameState) => {
    scene.text(`<center><b>${((s as any).npcdesc ?? 0)}'s Bedroom</b></center>`);
    // TODO-QSP: $npc_apt_bedroom[$npcID]
    qspCall(s, 'hookup_after', 'dress');
    scene.text('You quickly finish tugging your clothes on and waggle your fingers at him in goodbye before heading out the door.');
    scene.actions([
      { label: 'Leave', goto: ['hookup_after', 'exit'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPantyGift(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pantyworntype ?? 0) !== 'none'  &&  ((s as any).braworntype ?? 0) === 'none'  &&  ((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).hookup ?? 0)?.['mad'] === 0  &&  ((s as any).hookup ?? 0)?.['fuck'] > 0) {
    if (((s as any).hookup ?? 0)?.['continuation'] > 0  &&  ((s as any).hookup ?? 0)?.['sleepover'] === 1) {
      ((s as any).hookup ?? {})['panty_give_act'] = '';
      ((s as any).hookup ?? {})['panty_give_desc'] = 'Which reminds me...';
    } else {
      ((s as any).hookup ?? {})['panty_give_act'] = '';
      ((s as any).hookup ?? {})['panty_give_desc'] = 'Before I go...';
    }
    scene.actions([
      { label: 'Give him your panties', handler: (st: GameState) => {
    qspCall(s, 'hookup_after', 'dress_loop');
    ((s as any).npc_panty_give ?? {})[String((s as any).npcID ?? 0)] = (((s as any).npc_panty_give ?? {})[String((s as any).npcID ?? 0)] ?? 0) + (1);
    qspCall(s, 'panties', 'dispose');
    scene.img('images/shared/romance/misc/panty_gift.mp4');
    scene.text('Just after you put on your panties, a sexy thought pops into your head.');
    // TODO-QSP: dynamic text: "<<$hookup['panty_give_desc']>>," you say mischievously. "I have a gift for you....
    scene.text(`"${((s as any).hookup ?? 0)?.['panty_give_desc']}," you say mischievously. "I have a gift for you."`);
    if (((s as any).npc_panty_give ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: "A gift?" <<$npcdesc>> asks curiously.
      scene.text(`"A gift?" ${((s as any).npcdesc ?? 0)} asks curiously.`);
      scene.text('In one smooth motion, you tug your panties down your legs and daintily toss them into the rumpled sheets of the bed you were just fucked in.');
      qspCall(s, 'hookup_after', 'panty_gift2');
    } else {
      // TODO-QSP: dynamic text: "Another pair of your panties?" <<$npcdesc>> grins.
      scene.text(`"Another pair of your panties?" ${((s as any).npcdesc ?? 0)} grins.`);
      scene.text('"You guessed correctly," you grin back. "And your prize is-!"');
      scene.text('In one smooth motion, you tug your panties down your legs and daintily toss them into the rumpled sheets of the bed you were just fucked in.');
      scene.text('"Enjoy," you smirk.');
      qspCall(s, 'hookup_after', 'later');
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPantyGift2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hookup ?? 0)?.['orgasm_count'] < ((s as any).orgasm ?? 0)) {
    scene.actions([
      { label: 'For making me orgasm', handler: (st: GameState) => {
    // TODO-QSP: $npc_apt_bedroom[$npcID]
    // TODO-QSP: dynamic text: "For making me come," you smile, <<$hookup['dress_describe']>>. "That deserves a...
    scene.text(`"For making me come," you smile, ${((s as any).hookup ?? 0)?.['dress_describe']}. "That deserves an award."`);
    if (((s as any).npc_girlfriend ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      if (((s as any).pc_know_npc_has_girlfriend ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        ((s as any).pc_know_npc_has_girlfriend ?? {})[String((s as any).npcID ?? 0)] = 1;
      }
      scene.text('"And what am I supposed to do with these when my girlfriend comes home?" he asks, looking at them amusedly.');
      qspCall(s, 'hookup_after', 'panty_gift_girlfriend');
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> doesn't say anything in response, but given the lustful glint in hi...
      scene.text(`${((s as any).npcdesc ?? 0)} doesn't say anything in response, but given the lustful glint in his eyes, he seems pretty pleased.`);
      qspCall(s, 'hookup_after', 'later');
    }
  } },
      { label: 'For making me orgasm (tradition)', handler: (st: GameState) => {
    // TODO-QSP: $npc_apt_bedroom[$npcID]
    // TODO-QSP: dynamic text: "For making me come," you smile, <<$hookup['dress_describe']>>. "I always give a...
    scene.text(`"For making me come," you smile, ${((s as any).hookup ?? 0)?.['dress_describe']}. "I always give a boy my panties if he makes me come."`);
    if (((s as any).npc_girlfriend ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      if (((s as any).pc_know_npc_has_girlfriend ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        ((s as any).pc_know_npc_has_girlfriend ?? {})[String((s as any).npcID ?? 0)] = 1;
      }
      scene.text('"And what am I supposed to do with these when my girlfriend comes home?" he asks, looking at them amusedly.');
      qspCall(s, 'hookup_after', 'panty_gift_girlfriend');
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> doesn't say anything in response, but given the lustful glint in hi...
      scene.text(`${((s as any).npcdesc ?? 0)} doesn't say anything in response, but given the lustful glint in his eyes, he seems pretty pleased.`);
      qspCall(s, 'hookup_after', 'later');
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'You did a good job', handler: (st: GameState) => {
    // TODO-QSP: $npc_apt_bedroom[$npcID]
    // TODO-QSP: dynamic text: "You did a good job," you smile, <<$hookup['dress_describe']>>. "Consider that y...
    scene.text(`"You did a good job," you smile, ${((s as any).hookup ?? 0)?.['dress_describe']}. "Consider that your reward."`);
    if (((s as any).npc_girlfriend ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      if (((s as any).pc_know_npc_has_girlfriend ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        ((s as any).pc_know_npc_has_girlfriend ?? {})[String((s as any).npcID ?? 0)] = 1;
      }
      scene.text('"And what am I supposed to do with these when my girlfriend comes home?" he asks, looking at them amusedly.');
      qspCall(s, 'hookup_after', 'panty_gift_girlfriend');
    } else {
      // TODO-QSP: dynamic text: "Ah yes, women's underwear," <<$npcdesc>> says, looking at them dryly. "Just wha...
      scene.text(`"Ah yes, women's underwear," ${((s as any).npcdesc ?? 0)} says, looking at them dryly. "Just what I've always wanted."`);
      scene.text('But despite his sarcasm, he seems pretty pleased.');
      qspCall(s, 'hookup_after', 'later');
    }
  } },
    { label: 'Something to remember the occasion', handler: (st: GameState) => {
    // TODO-QSP: $npc_apt_bedroom[$npcID]
    if (((s as any).daystage ?? 0) > 3  ||  ((s as any).hookup ?? 0)?.['sleepover'] === 1) {
      // TODO-QSP: dynamic text: "Something to remember the night," you smile, <<$hookup['dress_describe']>>. "Ke...
      scene.text(`"Something to remember the night," you smile, ${((s as any).hookup ?? 0)?.['dress_describe']}. "Keep the good times in mind."`);
    } else {
      // TODO-QSP: dynamic text: "Something to remember the day," you smile, <<$hookup['dress_describe']>>. "Keep...
      scene.text(`"Something to remember the day," you smile, ${((s as any).hookup ?? 0)?.['dress_describe']}. "Keep the good times in mind."`);
    }
    if (((s as any).npc_girlfriend ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      if (((s as any).pc_know_npc_has_girlfriend ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        ((s as any).pc_know_npc_has_girlfriend ?? {})[String((s as any).npcID ?? 0)] = 1;
      }
      scene.text('"And what am I supposed to do with these when my girlfriend comes home?" he asks, looking at them amusedly.');
      qspCall(s, 'hookup_after', 'panty_gift_girlfriend');
    } else {
      // TODO-QSP: dynamic text: "Maybe I should frame it," <<$npcdesc>> snickers.
      scene.text(`"Maybe I should frame it," ${((s as any).npcdesc ?? 0)} snickers.`);
      qspCall(s, 'hookup_after', 'later');
    }
  } },
    { label: 'Consider it a trophy', handler: (st: GameState) => {
    // TODO-QSP: $npc_apt_bedroom[$npcID]
    // TODO-QSP: dynamic text: "Consider it a trophy," you smile, <<$hookup['dress_describe']>>. "A remembrance...
    scene.text(`"Consider it a trophy," you smile, ${((s as any).hookup ?? 0)?.['dress_describe']}. "A remembrance of conquest."`);
    if (((s as any).npc_girlfriend ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      if (((s as any).pc_know_npc_has_girlfriend ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        ((s as any).pc_know_npc_has_girlfriend ?? {})[String((s as any).npcID ?? 0)] = 1;
      }
      scene.text('"And what am I supposed to do with these when my girlfriend comes home?" he asks, looking at them amusedly.');
      qspCall(s, 'hookup_after', 'panty_gift_girlfriend');
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> doesn't say anything in response, but given the lustful glint in hi...
      scene.text(`${((s as any).npcdesc ?? 0)} doesn't say anything in response, but given the lustful glint in his eyes, he seems pretty pleased.`);
      qspCall(s, 'hookup_after', 'later');
    }
  } },
  ]);
  scene.build();
}

function enterPantyGiftGirlfriend(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'hookup_after', 'dress_loop');
  // TODO-QSP: end
  scene.actions([
    { label: 'Hide them', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Just hide them," you say, <<$hookup['dress_describe']>>. "If you can hide a fuc...
    scene.text(`"Just hide them," you say, ${((s as any).hookup ?? 0)?.['dress_describe']}. "If you can hide a fucking a girl in your bed, surely you can hide a pair of panties."`);
    qspCall(s, 'hookup_after', 'finish_dressing');
  } },
    { label: 'Say they\'re hers', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Tell her they're hers," you snicker, <<$hookup['dress_describe']>>. "Maybe she'...
    scene.text(`"Tell her they're hers," you snicker, ${((s as any).hookup ?? 0)?.['dress_describe']}. "Maybe she'll think she bought them."`);
    qspCall(s, 'hookup_after', 'finish_dressing');
  } },
    { label: 'Say they\'re yours', handler: (st: GameState) => {
    qspCall(s, 'hookup_after', 'dress_loop');
    // TODO-QSP: dynamic text: "Tell her they're yours," you snicker, <<$hookup['dress_describe']>>. "A guy can...
    scene.text(`"Tell her they're yours," you snicker, ${((s as any).hookup ?? 0)?.['dress_describe']}. "A guy can't wear a cute pair of panties now and then?"`);
    if (((s as any).npc_insecure ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: <<$npcdesc>>'s face immediately reddens and he looks at you with an angry glare.
      scene.text(`${((s as any).npcdesc ?? 0)}'s face immediately reddens and he looks at you with an angry glare.`);
      scene.text('"What the fuck? I\'m not some twink who puts on girlie panties like a fucking faggot!"');
      scene.actions([
        { label: 'I was kidding (amused)', handler: (st: GameState) => {
    // TODO-QSP: $npc_apt_bedroom[$npcID]
    scene.text('"I was just kidding," you say, rolling your eyes. "Bad joke, sorry."');
    // TODO-QSP: dynamic text: You move to <<$hookup['dress_describe']>> but <<$npcdesc>> continues to glare at...
    scene.text(`You move to ${((s as any).hookup ?? 0)?.['dress_describe']} but ${((s as any).npcdesc ?? 0)} continues to glare at you out of the corner of your eye for a few moments longer before looking away.`);
    qspCall(s, 'hookup_after', 'later');
  } },
        { label: 'I was kidding (acerbic)', handler: (st: GameState) => {
    // TODO-QSP: $npc_apt_bedroom[$npcID]
    // TODO-QSP: dynamic text: "Christ, I was just kidding," you say, giving <<$npcdesc>> a look of exasperatio...
    scene.text(`"Christ, I was just kidding," you say, giving ${((s as any).npcdesc ?? 0)} a look of exasperation. "Of course I wasn't seriously suggesting that. Take a joke, dumbass."`);
    // TODO-QSP: dynamic text: You start <<$hookup['dress_describe']>> but <<$npcdesc>> continues to glare at y...
    scene.text(`You start ${((s as any).hookup ?? 0)?.['dress_describe']} but ${((s as any).npcdesc ?? 0)} continues to glare at you out of the corner of your eye for a few moments longer before looking away.`);
    qspCall(s, 'hookup_after', 'later');
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> laughs aloud.
      scene.text(`${((s as any).npcdesc ?? 0)} laughs aloud.`);
      scene.text('"Yeah, I bet that\'d get me off the hook."');
      qspCall(s, 'hookup_after', 'later');
    }
  } },
    { label: 'Give them to her', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Gift them to her," you say mischievously, <<$hookup['dress_describe']>>. "Maybe...
    scene.text(`"Gift them to her," you say mischievously, ${((s as any).hookup ?? 0)?.['dress_describe']}. "Maybe she'll put them on."`);
    qspCall(s, 'hookup_after', 'later');
  } },
    { label: 'Throw them away', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Throw them away then," you shrug, <<$hookup['dress_describe']>>. "Do whatever y...
    scene.text(`"Throw them away then," you shrug, ${((s as any).hookup ?? 0)?.['dress_describe']}. "Do whatever you want with them.`);
    qspCall(s, 'hookup_after', 'dress_loop');
    // TODO-QSP: dynamic text: "They're your panties now," you add with a smirk, <<$hookup['dress_describe']>>.
    scene.text(`"They're your panties now," you add with a smirk, ${((s as any).hookup ?? 0)?.['dress_describe']}.`);
    qspCall(s, 'hookup_after', 'later');
  } },
  ]);
  scene.build();
}

function enterSleep(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: savegame 'autosave_loverbed_sleep.sav'
  ((s as any).hookup ?? {})['sleepover'] = 1;
  if (((s as any).alko ?? 0) > 6) {
    ((s as any).hookup ?? {})['hangover'] = 1;
    qspCall(s, 'sleep_simple', 'simple');
    qspCall(s, 'pain', '', 3, 'head', 'ache');
  } else {
    qspCall(s, 'sleep_simple', 'simple');
  }
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  qspFunc(s, 'homes_properties', 'has_access', 'parents_home')) {
    ((s as any).sveta_punishment ?? {})['no_come_home'] = 1;
  }
  scene.actions([{ label: 'Continue', goto: ['hookup_morning', 'morning'] }]);
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'exit':
      enterExit(s, scene);
      break;
    case 'dress':
      enterDress(s, scene);
      break;
    case 'creampie_mad':
      enterCreampieMad(s, scene);
      break;
    case 'creampie_panic':
      enterCreampiePanic(s, scene);
      break;
    case 'creampie_react':
      enterCreampieReact(s, scene);
      break;
    case 'creampie_react2':
      enterCreampieReact2(s, scene);
      break;
    case 'creampie_surprise_cum':
      enterCreampieSurpriseCum(s, scene);
      break;
    case 'birth_control':
      enterBirthControl(s, scene);
      break;
    case 'birth_control_lie':
      enterBirthControlLie(s, scene);
      break;
    case 'preg_responsibility_tease':
      enterPregResponsibilityTease(s, scene);
      break;
    case 'preg_responsibility_glare':
      enterPregResponsibilityGlare(s, scene);
      break;
    case 'condom_stuck':
      enterCondomStuck(s, scene);
      break;
    case 'light_cigarette':
      enterLightCigarette(s, scene);
      break;
    case 'light_cigarette2':
      enterLightCigarette2(s, scene);
      break;
    case 'pre':
      enterPre(s, scene);
      break;
    case 'wipes':
      enterWipes(s, scene);
      break;
    case 'start':
      enterStart(s, scene);
      break;
    case 'bed':
      enterBed(s, scene);
      break;
    case 'cuddle':
      enterCuddle(s, scene);
      break;
    case 'gotta_go':
      enterGottaGo(s, scene);
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
    case 'fuckbuddy_text':
      enterFuckbuddyText(s, scene);
      break;
    case 'later':
      enterLater(s, scene);
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
    case 'dress_image':
      enterDressImage(s, scene);
      break;
    case 'dress_loop':
      enterDressLoop(s, scene);
      break;
    case 'finish_dressing':
      enterFinishDressing(s, scene);
      break;
    case 'panty_gift':
      enterPantyGift(s, scene);
      break;
    case 'panty_gift2':
      enterPantyGift2(s, scene);
      break;
    case 'panty_gift_girlfriend':
      enterPantyGiftGirlfriend(s, scene);
      break;
    case 'sleep':
      enterSleep(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const hookup_after: LocationDef = {
  name: 'hookup_after',
  title: '<<$npcdesc>>\'s Bedroom',
  region: 'other',
  enter: enter,
};
