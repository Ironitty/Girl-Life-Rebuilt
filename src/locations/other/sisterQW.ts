import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterSisboyQWExpel(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/anya/home/sisboyqw_07.jpg');
  if (((s as any).sisboytrioQW ?? 0) !== 1) {
    scene.text('Your sister reminds you that she wants to spend time alone with Roma and asks you to leave the room.');
  } else {
    scene.text('Your sister asks you to briefly leave the room.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['korrPar', ''] },
  ]);
  scene.build();
}

function enterSisboyQWBedroom(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/anya/sex/spy1.jpg');
  scene.text('You walk up to your bedroom door and stop. Your sister asked you to give her some privacy with her boyfriend, and you\'re sure they\'re having or are going to have sex. You know you should just walk away, but you can\'t shake the stimulating thoughts of your desire to spy on Anya and her boyfriend.');
  qspCall(s, 'willpower', 'voyeur', 'self', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Spy on them', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Spy on them', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    scene.img('images/pc/activities/spy/peep1.jpg');
    scene.text('You force yourself to slowly grab the handle of the door. You turn it slowly and push the door open just a crack. Pressing your face to the gap, you peer into the room.');
    scene.text('Your eyes focus on your sister and her boyfriend passionately kissing and undressing each other. It looks like they\'re about to have sex.');
    qspCall(st, 'arousal', 'voyeur', 5);
    qspCall(st, 'stat', '');
    qspCall(st, 'willpower', 'voyeur', 'self', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Keep spying on them', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Keep spying on them', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    if ((!((st as any).sisterbfspy ?? 0))) {
      qspGoto(st, 'sisterQW', 'spy1');
    } else {
      if (((st as any).sisterbfspy ?? 0) === 1) {
        qspGoto(st, 'sisterQW', 'spy2');
      } else {
        if (((st as any).sisterbfspy ?? 0) === 2) {
          qspGoto(st, 'sisterQW', 'spy3');
        } else {
          if (((st as any).sisterbfspy ?? 0) === 3) {
            qspGoto(st, 'sisterQW', 'spy4');
          } else {
            if (((st as any).sisterbfspy ?? 0) === 4) {
              qspGoto(st, 'sisterQW', 'spy5');
            } else {
              qspGoto(st, 'sisterQW', 'spy6');
            }
          }
        }
      }
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Close the door', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    (st as any).blockBedrPar = 1;
    scene.img('images/pc/activities/spy/peep3.jpg');
    scene.text('You feel guilty about spying on your sister after you promised you would leave her in peace, and you close the door softly so they don\'t hear you. You lean your head against the door for a few seconds to collect yourself before walking away.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['korrPar', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave them in peace', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    (st as any).blockBedrPar = 1;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/anya/home/sisboyqw_06.jpg');
    scene.text('You can\'t bring yourself to spy on them and remember your promise to your sister, so you decide not to bother her.');
    scene.actions([
      { label: 'Leave', goto: ['korrPar', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSpy1(s: GameState, scene: SceneBuilder): void {
  (s as any).sisterbfspy = ((s as any).sisterbfspy ?? 0) + (1);
  scene.img('images/characters/pavlovsk/resident/anya/sex/spy1.jpg');
  scene.text('Once naked, Roma lies back on her bed as Anya kneels on the bed next to him and starts to kiss and lick his cock. She then slowly starts sucking his dick.');
  scene.text('Anya looks pretty skilled handling a cock, and you think that she could teach you a thing or two. You start imagining yourself in her position…');
  scene.text('You realize that you\'re getting a little carried away and should leave the room before they see you.');
  qspCall(s, 'arousal', 'voyeur_sex', 5);
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'voyeur', 'self', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Caress yourself', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Caress yourself', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspGoto(st, 'sisterQW', 'caress');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', '');
  }, goto: ['korrPar', ''] },
  ]);
  scene.build();
}

function enterSpy2(s: GameState, scene: SceneBuilder): void {
  (s as any).sisterbfspy = ((s as any).sisterbfspy ?? 0) + (1);
  scene.img('images/characters/pavlovsk/resident/anya/sex/spy4.jpg');
  scene.text('Once naked, Anya lies down on her bed with her legs hanging off the edge. She spreads her legs wide, and Roma kneels down at the edge of the bed between them. He leans forward and buries his face in her pussy. You can hear her moaning from where you stand. By the sounds of it, Roma really knows what he\'s doing.');
  scene.text('Several minutes pass, and your sister starts squirming around and moaning loudly on the bed, like she\'s about to have an orgasm.');
  scene.text('At that moment, you wish to be in your sister\'s place, but you\'re exposed here by the door and don\'t want to get caught.');
  qspCall(s, 'arousal', 'voyeur_sex', 5);
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'voyeur', 'self', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Caress yourself', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Caress yourself', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspGoto(st, 'sisterQW', 'caress');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', '');
  }, goto: ['korrPar', ''] },
  ]);
  scene.build();
}

function enterSpy3(s: GameState, scene: SceneBuilder): void {
  (s as any).sisterbfspy = ((s as any).sisterbfspy ?? 0) + (1);
  scene.img('images/characters/pavlovsk/resident/anya/sex/spy2.jpg');
  scene.text('Once Anya is naked, Roma roughly pushes her down on her knees. She pulls down his pants, and his large hard cock springs free. She immediately starts stroking and sucking it.');
  scene.text('Anya relishes swallowing his member balls deep, and when she takes it out of her mouth, she sobs heavily, her face plastered in saliva.');
  scene.text('She has a hard time deep-throating such a large cock with mascara and tears running down her face, but Roma forcefully grabs her hair in both his hands and starts fucking her mouth roughly, his balls slapping against her chin.');
  scene.text('You can hear her gags and muffled gasps from here. Your mischievous sister suffers, just to please her boyfriend.');
  scene.text('You want to watch until the end, but you\'re running the risk of being noticed.');
  qspCall(s, 'arousal', 'voyeur_sex', 5);
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'voyeur', 'self', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Caress yourself', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Caress yourself', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspGoto(st, 'sisterQW', 'caress');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', '');
  }, goto: ['korrPar', ''] },
  ]);
  scene.build();
}

function enterSpy4(s: GameState, scene: SceneBuilder): void {
  (s as any).sisterbfspy = ((s as any).sisterbfspy ?? 0) + (1);
  scene.img('images/characters/pavlovsk/resident/anya/sex/spy9.jpg');
  scene.text('Once they\'re both naked, Anya crawls on the bed on all fours before Roma comes up behind her and slaps her ass. He then grabs her hips and pulls her back towards him. She then moans loudly as he starts thrusting against her.');
  scene.text('After several minutes, Roma is now red and sweaty when he suddenly freezes, then falls on his back. You look closely and can clearly see his cum trickling from her pussy.');
  scene.text('Your sister groans. "Already?" Her tone turns angry when she realizes what\'s happened. "What the fuck!? You came inside me again? How many times do I have to tell you, you fucking moron?! Get the fuck away from me!"');
  scene.text('It seems they need to talk, and so you take the opportunity to run away before they notice you.');
  qspCall(s, 'arousal', 'voyeur_sex', 5);
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'voyeur', 'self', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Caress yourself', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Caress yourself', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspGoto(st, 'sisterQW', 'caress');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', '');
  }, goto: ['korrPar', ''] },
  ]);
  scene.build();
}

function enterSpy5(s: GameState, scene: SceneBuilder): void {
  (s as any).sisterbfspy = ((s as any).sisterbfspy ?? 0) + (1);
  scene.img('images/characters/pavlovsk/resident/anya/sex/spy10.jpg');
  scene.text('Once they\'re both naked, Anya crawls on the bed on all fours before Roma comes up behind her and slaps her ass. He reaches over to her nightstand and grabs a small bottle. He squirts some of its contents on his dick and then some on her ass before he grabs her hips and pulls her back towards him. He reaches down to grab his dick with one hand while keeping the other on her hip. He takes a moment to line things up then pushes forward.');
  scene.text('Your sister gasps and tenses up, her hands tightly gripping the sheets before she takes a relaxing breath as Roma starts to slowly fuck her.');
  scene.text('Anya slowly leans forward as Roma starts to really pound her. She\'s soon lying on her stomach, offering her ass to her man. "God damn your ass is so tight, babe!" Roma grunts out as he boldly and confidently tears into Anya\'s ass, tightly gripping her hips as he starts to really hammer her back door.');
  scene.text('His movements get faster and faster, and their bodies soon sway in unison as Anya screams out. "More… More! Yes… Fuck my tight little ass… Just like that!"');
  scene.text('They\'re so engrossed in each other that they\'ve not yet noticed your presence. Now might be the time to leave the hot couple to it.');
  qspCall(s, 'arousal', 'voyeur_sex', 5);
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'voyeur', 'self', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Caress yourself', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Caress yourself', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspGoto(st, 'sisterQW', 'caress');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', '');
  }, goto: ['korrPar', ''] },
  ]);
  scene.build();
}

function enterSpy6(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/resident/anya/sex/spy3.jpg');
  scene.text('Once naked, Roma lies back on her bed as Anya kneels on the bed next to him and starts to kiss and lick his cock. She then slowly starts sucking his dick.');
  scene.text('Anya looks pretty skilled handling a cock, and you think that she could teach you a thing or two. You start imagining yourself in her position…');
  scene.text('You realize that you\'re getting a little carried away and should leave the room before you\'re discovered, but you really want to watch the whole thing.');
  qspCall(s, 'arousal', 'voyeur_sex', 5);
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'voyeur', 'self', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Caress yourself', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Caress yourself', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspGoto(st, 'sisterQW', 'caress');
  } },
    ]);
  }
  qspCall(s, 'willpower', 'voyeur', 'self', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    scene.img('images/characters/pavlovsk/resident/anya/sex/spy5.jpg');
    scene.text('After receiving her blowjob, Roma effortlessly picks her up and lowers her down onto his dick. They both moan as they start fucking.');
    qspCall(st, 'arousal', 'voyeur_sex', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/sex/spy6.jpg');
    scene.text('Eventually, Roma gets tired and lies back on the bed. Anya then mounts him and starts riding him hard. Her pace is frantic, almost animal like. After a few minutes, she cries out as an orgasm pulses through her body, and she slowly stops moving while sitting on top of him, his dick still inside her pussy.');
    qspCall(st, 'arousal', 'voyeur_sex', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/sex/spy7.jpg');
    scene.text('Having recovered his strength, Roma rolls Anya off him and gets back up on his knees. He pulls her up on her knees, spins her around and pushes her shoulders forwards until she bends over on all fours. Once she\'s in position, he slides up behind her and starts fucking her doggy style. He smacks her ass with one hand and grabs hold of her hair with the other, occasionally pulling it back and causing her head to strain back.');
    qspCall(st, 'arousal', 'voyeur_sex', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/sex/spy8.jpg');
    scene.text('He suddenly pulls out of her pussy and takes only a moment to line his large dick up against her asshole before pushing forward. The head of his dick pops into her ass before she has time to react and she cries out in both pleasure and pain. Roma, on the other hand, groans in pleasure as he starts fucking her ass, quickly starting to really hammer it. You see her hands grip the sheets tightly as she moans and grunts.');
    qspCall(st, 'arousal', 'voyeur_sex', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/sex/spy11.jpg');
    scene.text('He suddenly pulls out of her and grabs her by the hair, pulling her head around towards his dick as the first spurt of cum lands on her chest. He then quickly shoves his dick in her mouth and groans loudly as he unloads in her mouth. He then pulls out and Anya makes a swallowing motion before sticking her tongue out. Roma collapses on the bed just out of your view, with only your sister and her cum splattered breasts visible.');
    scene.text('After a few seconds, your sister finally speaks. "I told you to stop doing that. It\'s fucking gross."');
    scene.text('You hear Roma chuckle. "You said you love the taste of my cum, babe."');
    scene.text('She sighs. "I meant pulling out of my ass and putting it in my mouth! Stop doing it, it\'s gross." Roma mutters something that you can\'t quite make out. You decide to leave before someone finds you spying or Roma gets dressed and leaves.');
    qspCall(st, 'arousal', 'voyeur_sex', 5);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['korrPar', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', '');
  }, goto: ['korrPar', ''] },
  ]);
  scene.build();
}

function enterCaress(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_inhib ?? 0) < 40) {
    qspCall(s, 'exp_gain', 'inhib', (Math.floor(Math.random() * 3) + 1));
  }
  qspCall(s, 'stat', '');
  scene.img(`images/characters/pavlovsk/resident/anya/sex/spymas${(Math.floor(Math.random() * 2) + 1)}.jpg`);
  scene.text('You can\'t help yourself. You turn and press your back against the wall before pulling your panties down and rubbing your glistening wet pussy as you listen to the moans and groans coming from your room.');
  scene.text('You lick your finger before rhythmically caressing your swollen clit and caressing your breasts with your other hand. You\'re lost in the moment, oblivious to everything around you.');
  scene.text('Your muscles contract, your breath shortens. Realizing you\'ve hit your peak, you bite your lip to stifle your moans.');
  (s as any).orgasm_or = 'yes';
  qspCall(s, 'arousal', 'clit_finger', 3, 'masturbate', 'exhibitionism');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['korrPar', ''] },
  ]);
  scene.build();
}

function enterSisboytrioQWBedroom(s: GameState, scene: SceneBuilder): void {
  (s as any).blockBedrPar = 1;
  ((s as any).locat = (s as any).locat ?? {})['Anya'] = 15;
  ((s as any).locat = (s as any).locat ?? {})['Anya_rand1'] = ((s as any).daystart ?? 0);
  ((s as any).locat = (s as any).locat ?? {})['Anya_save1'] = (((s as any).locat ?? 0)?.['Anya']);
  if (((s as any).hour ?? 0) === 17) {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'npc_relationship', 'modify', 'A33', (-10));
    (s as any).sisboytrioQW = 0;
    (s as any).sisboyday = 0;
    (s as any).sisThank = 0;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/anya/home/sisboyqw_07.jpg');
    scene.text('Anya opens the door, looking sad.');
    scene.text('"You promised to come! What happened?"');
    scene.actions([
{ label: 'Leave', goto: ['korrPar', ''] },
]);
    return;
  }
  (s as any).sisboytrio = ((s as any).sisboytrio ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/anya/home/sisboyqw_41.jpg');
  scene.text('As you enter the room, you see Anya and Roma tumbling in the bed.');
  scene.text('Anya notices you and Roma frees her from his embrace. She walks slowly towards you while giving you an intimate hug and pulling you towards the bed.');
  qspCall(s, 'arousal', 'foreplay', 2, 'lesbian', 'incest');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'This is wrong', handler: (st: GameState) => {
    (st as any).sisboytrioQW = (-1);
    (st as any).sisboytrioDayOtkaz = ((st as any).daystart ?? 0) + 3;
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).sisterQW = (st as any).sisterQW ?? {})['roma3block'] = 1;
    qspCall(st, 'npc_relationship', 'modify', 'A33', (-10));
    ((st as any).npc_QW = (st as any).npc_QW ?? {})['A33'] = 2;
    (st as any).sisThank = 0;
    qspCall(st, 'stat', '');
    scene.img('images/pc/activities/spy/peep4.jpg');
    scene.text('Suddenly having last second thoughts, you turn and flee. Once outside, you turn and close the door. You hold it tightly as you realize what almost happened before you let go and walk away.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Flee', goto: ['korrPar', ''] },
    ]);
  } },
    { label: 'Join her on the bed', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/sex/anya3some1.jpg');
    scene.text('You crawl onto her bed with her and the two of you hug and lightly fondle each other as Roma just watches while licking his lips. "Come on girls, show me your tits!"');
    qspCall(st, 'arousal', 'foreplay', 2, 'lesbian', 'incest', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Flash', handler: (st: GameState) => {
    if (((st as any).braworntype ?? 0) !== 'none') {
      scene.img('images/characters/pavlovsk/resident/anya/sex/anya3some2.jpg');
      scene.text('You and Anya both expose your bras to him and his eyes are drawn to your chest, then Anya\'s before going back and forth as if he can\'t decide who to look at. "Nice bras, but I said tits. Don\'t be shy now!"');
      scene.text('With his encouragement, you pull up your bra.');
      qspCall(st, 'arousal', 'flashlite', 1, 'lesbian', 'incest', 'group');
      qspCall(st, 'stat', '');
      scene.actions([
        { label: 'Flash your breasts', goto: ['sisterQW', 'flash_boobs'] },
      ]);
    } else {
      qspGoto(st, 'sisterQW', 'flash_boobs');
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterFlashBoobs(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A56');
  qspCall(s, 'npcStat', 'A33', 'a');
  scene.img('images/characters/pavlovsk/resident/anya/sex/anya3some3.jpg');
  scene.text('As you expose your breasts, Anya moves around behind you and cups them in her hands while Roma moves closer and places his hands on your hips as he stares at them before he starts pulling off your top. "Take off Anya\'s top."');
  scene.text('You and Anya are soon topless. "Now kiss."');
  qspCall(s, 'arousal', 'flash', 2, 'lesbian', 'incest', 'group');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Kiss', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/sex/anya3some4.jpg');
    scene.text('You and Anya kiss as Roma takes turns fondling both of you. "Damn, this is so fucking hot!" he says as he starts tugging at the rest of your clothes as well as Anya\'s.');
    qspCall(st, 'arousal', 'kiss', 3, ((st as any).npcID1 ?? 0), 'lesbian', 'incest', 'group');
    qspCall(st, 'arousal', 'foreplay', 3);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Fondle', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/sex/anya3some5.jpg');
    scene.text('Once you\'re both naked, Roma removes his clothes as well. All of you now naked, Roma starts to rub your pussy while he suckles at one of your nipples and Anya plays with your other breast with one hand while the other smacks and squeezes your ass. Not wanting Anya to feel left out, you start rubbing her clit with one of your hands.');
    scene.text('Roma then stops playing with you. "One of you needs to start sucking my dick!"');
    qspCall(st, 'arousal', 'foreplay', 5, ((st as any).npcID ?? 0), 'group');
    qspCall(st, 'arousal', 'foreplay', (-5), ((st as any).npcID1 ?? 0), 'lesbian', 'incest', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Watch Anya suck his dick', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/sex/anya3some6.jpg');
    scene.text('Anya gets down on all fours and starts sucking Roma\'s dick. You get down as well as Roma makes her deepthroat him as you watch. After a few minutes, Anya pops his dick out of her mouth and offers it to you.');
    qspCall(st, 'arousal', 'voyeur_sex', 5, 'lesbian', 'incest', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Suck Roma\'s dick', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/sex/anya3some7.jpg');
    // TODO-QSP: dynamic text: You open your mouth as he slides his wet dick into it. Closing your lips around ...
    scene.text(`You open your mouth as he slides his wet dick into it. Closing your lips around his shaft, you start sucking his dick. You feel his hand slide to the back of your head to force you to go deep while Anya starts playing with your breasts. Several minutes go by before Roma speaks up. "I want to fuck you now, ${((st as any).pcs_nickname ?? '')}."`);
    qspCall(st, 'arousal', 'bj', 5, ((st as any).npcID ?? 0), 'group');
    qspCall(st, 'arousal', 'foreplay', (-5), ((st as any).npcID1 ?? 0), 'lesbian', 'incest', 'group');
    qspCall(st, 'stat', '');
    qspCall(st, 'willpower', 'sex', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse to fuck Roma', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse to fuck Roma', handler: (st: GameState) => {
    qspCall(st, 'willpower', '');
  }, goto: ['sisterQW', 'refuse_to_fuck_roma'] },
      ]);
    }
    if (((st as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([
        { label: 'Offer your ass', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/sex/anya3some12.jpg');
    scene.text('You shake your head. "Sorry Roma, but I\'m saving myself. You can take me from behind if you want?"');
    // TODO-QSP: dynamic text: Roma smiles and you soon feel the head of his <<dick_length>>cm <<$dick_girth>> ...
    scene.text(`Roma smiles and you soon feel the head of his ${((st as any).dick_length ?? '')}cm ${((st as any).dick_girth ?? '')} dick pressing against your asshole.`);
    // TODO-QSP: dynamic text: He pushes his dick forward until the head of it painfully pops into your ass and...
    scene.text(`He pushes his dick forward until the head of it painfully pops into your ass and he slowly starts sliding his ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} cock inside you. It's already wet from you and Anya's saliva, so it slides in fairly easily.`);
    scene.text('He\'s fairly gentle, not going too fast or too deep and giving you time to adjust and stretch out. As he does, you start fingering Anya as you lick her clit.');
    qspCall(st, 'arousal', 'anal', 5, ((st as any).npcID ?? 0), 'group');
    qspCall(st, 'arousal', 'vaginal_finger_give', (-5), ((st as any).npcID1 ?? 0), 'lesbian', 'incest', 'group');
    qspCall(st, 'arousal', 'cuni_give', (-5), ((st as any).npcID1 ?? 0), 'lesbian', 'incest', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Deep pounding', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/sex/anya3some10.jpg');
    scene.text('Roma gets up on his feet and grips your hips as he pushes his cock balls deep into your asshole and starts fucking you a little harder, slowly picking up speed and only backing off when you visibly tense up.');
    scene.text('He does a pretty good job of pounding you without being too rough, but eventually he starts getting rougher and you can hear him straining. He pulls his dick out of your ass as Anya suddenly has an orgasm that rocks her body.');
    qspCall(st, 'arousal', 'anal', 5, ((st as any).npcID ?? 0), 'group');
    qspCall(st, 'arousal', 'vaginal_finger_give', (-5), ((st as any).npcID1 ?? 0), 'lesbian', 'incest', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['sisterQW', 'first_cum_shot'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Fuck Roma', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/sex/anya3some8.jpg');
    if (((st as any).stat ?? 0)?.['think_virgin'] === 1) {
      (st as any).roma_cherry = 1;
      // TODO-QSP: dynamic text: When you nod your head in agreement, Roma pulls his dick out of your mouth and l...
      scene.text(`When you nod your head in agreement, Roma pulls his dick out of your mouth and lies down on his back. Anya encourages you to straddle him and takes hold of his dick to guide it as you lower yourself down. You feel the head of his ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} dick, already slick with drool, press up against your lips before you feel your hymen tearing as it slides into you. As you ride his cock, Anya licks and sucks at your clit, reducing the pain and causing the pleasure to be almost overwhelming.`);
      qspCall(st, 'pain', '3', 'vaginal', 'tear');
      qspCall(st, 'arousal', 'vaginal', 10, ((st as any).npcID ?? 0), 'group');
      qspCall(st, 'arousal', 'cuni', (-10), ((st as any).npcID1 ?? 0), 'lesbian', 'incest', 'group');
      qspCall(st, 'stat', '');
      scene.actions([
        { label: 'Continue', goto: ['sisterQW', 'first_cum_shot'] },
      ]);
    } else {
      // TODO-QSP: dynamic text: When you nod your head in agreement, Roma pulls his dick out of your mouth and l...
      scene.text(`When you nod your head in agreement, Roma pulls his dick out of your mouth and lies down on his back. Anya encourages you to straddle him and takes hold of his dick to guide it as you lower yourself down. You feel the head of his ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} dick, already slick with drool, press up against your lips and force them apart as it slides into you. As you ride his cock, Anya licks and sucks at your clit, causing the pleasure to be almost overwhelming.`);
      qspCall(st, 'arousal', 'vaginal', 5, ((st as any).npcID ?? 0), 'group');
      qspCall(st, 'arousal', 'cuni', (-5), ((st as any).npcID1 ?? 0), 'lesbian', 'incest', 'group');
      qspCall(st, 'stat', '');
      scene.actions([
        { label: 'Anya\'s turn', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/sex/anya3some9.jpg');
    // TODO-QSP: dynamic text: After what seems like a long time and no time at all, he lifts you off of him an...
    scene.text(`After what seems like a long time and no time at all, he lifts you off of him and places you aside. He then drags Anya over and rolls her onto her side before effortlessly sliding his dick into her. She moans loudly as he starts fucking her. "Straddle her face, ${((st as any).pcs_nickname ?? '')}."`);
    scene.text('Doing as Roma says, you straddle Anya\'s face and she starts licking your pussy as Roma fucks her.');
    qspCall(st, 'arousal', 'cuni', 5, ((st as any).npcID1 ?? 0), 'lesbian', 'incest', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Your turn again', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/sex/anya3some11.jpg');
    scene.text('You then feel a sudden smack on your ass. "Come over here and get on all fours. I want to fuck you again," Roma demands.');
    scene.text('You climb off Anya and get on all fours as Roma scoots up behind you and easily slides his dick back into your pussy while Anya lies down in front of you and spreads her legs. Roma reaches forward and forces your face into her crotch, so you start licking her pussy as Roma starts fucking you again.');
    scene.text('Several minutes pass before Roma pulls his dick out of your pussy and you feel the head of it pressing against your asshole.');
    qspCall(st, 'arousal', 'vaginal', 5, ((st as any).npcID ?? 0), 'group');
    qspCall(st, 'arousal', 'cuni_give', (-5), ((st as any).npcID1 ?? 0), 'lesbian', 'incest', 'group');
    qspCall(st, 'stat', '');
    qspCall(st, 'willpower', 'anal', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse to fuck Roma', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'No anal', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/anya/sex/anya3some9.jpg');
    scene.text('You pull away. "No anal!"');
    scene.text('He sighs. "Okay…" He then grabs Anya and drags her back over to him while she\'s still on her back. You watch as he slides his dick into her ass, then glances up at you. "Well? Get back on her face!"');
    scene.text('You straddle her face and she starts licking your pussy. You glance back occasionally and see how he switches which of her holes he\'s fucking, going from ass to pussy and then back to ass again.');
    qspCall(st, 'arousal', 'cuni', 5, ((st as any).npcID1 ?? 0), 'lesbian', 'incest', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['sisterQW', 'first_cum_shot'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Anal', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A56');
    scene.img('images/characters/pavlovsk/resident/anya/sex/anya3some12.jpg');
    // TODO-QSP: dynamic text: When you don''t say anything, he pushes his dick forward until the head of it pa...
    scene.text(`When you don't say anything, he pushes his dick forward until the head of it painfully pops into your ass and he slowly starts sliding his ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} cock inside you. It's already wet from you and Anya's saliva, so it slides in fairly easily.`);
    scene.text('He\'s fairly gentle, not going too fast or too deep and giving you time to adjust and stretch out. As he does, you start fingering Anya as you lick her clit.');
    qspCall(st, 'arousal', 'anal', 5, ((st as any).npcID ?? 0), 'group');
    qspCall(st, 'arousal', 'vaginal_finger_give', (-5), ((st as any).npcID1 ?? 0), 'lesbian', 'incest', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Deep pounding', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/sex/anya3some10.jpg');
    scene.text('Roma gets up on his feet and grips your hips as he pushes his cock balls deep into your asshole and starts fucking you a little harder, slowly picking up speed and only backing off when you visibly tense up.');
    scene.text('He does a pretty good job of pounding you without being too rough, but eventually he starts getting rougher and you can hear him straining. He pulls his dick out of your ass as Anya suddenly has an orgasm that rocks her body.');
    qspCall(st, 'arousal', 'anal', 5, ((st as any).npcID ?? 0), 'group');
    qspCall(st, 'arousal', 'vaginal_finger_give', (-5), ((st as any).npcID1 ?? 0), 'lesbian', 'incest', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['sisterQW', 'first_cum_shot'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterRefuseToFuckRoma(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/resident/anya/sex/anya3some9.jpg');
  // TODO-QSP: dynamic text: You shake your head. "I just want to do oral. Maybe next time?" He frowns, obvio...
  scene.text(`You shake your head. "I just want to do oral. Maybe next time?" He frowns, obviously a little disappointed, but nods before he drags Anya over and rolls her onto her side. He effortlessly slides his dick into her and she moans loudly as he starts fucking her. "Straddle her face, ${((s as any).pcs_nickname ?? '')}."`);
  scene.text('Doing as Roma says, you straddle Anya\'s face and she starts licking your pussy as Roma fucks her. He fucks her for some time, and you occasionally glance back at what they are doing, seeing him sometimes switch holes. A few minutes later, a massive orgasm rocks her body, which causes Roma to start grunting, clearly on the verge of an orgasm himself.');
  qspCall(s, 'arousal', 'cuni', 15, ((s as any).npcID1 ?? 0), 'lesbian', 'incest', 'group');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['sisterQW', 'first_cum_shot'] },
  ]);
  scene.build();
}

function enterFirstCumShot(s: GameState, scene: SceneBuilder): void {
  (s as any).sisThank = 1;
  if (((s as any).roma_cherry ?? 0) === 1) {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'npc_relationship', 'modify', 'A33', 10);
    scene.img('images/characters/pavlovsk/resident/anya/home/sisboyqw_03.jpg');
    // TODO-QSP: dynamic text: Despite the pain from having your cherry popped, you still enjoyed it. Roma chan...
    scene.text(`Despite the pain from having your cherry popped, you still enjoyed it. Roma changes positions, and as he does, he looks down at his dick and notices the blood. "Anya, you didn't tell me that ${((s as any).pcs_nickname ?? '')} was a virgin!"`);
    scene.text('Anya frantically sits up. "What!!??" She looks at Roma, then at the blood on his dick and then at you. As she looks at you, her eyes grow wide at the realization.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, what the hell were you thinking?!" she asks you angrily.
    scene.text(`"${((s as any).pcs_nickname ?? '')}, what the hell were you thinking?!" she asks you angrily.`);
    scene.text('Seeing their reaction, you start to tear up. "I was thinking I loved you! I was tired of being a virgin and couldn\'t think of a better way to lose my virginity!"');
    // TODO-QSP: dynamic text: Anya, seeing your tears, gives you a hug. "I''m sorry I yelled at you, <<$pcs_ni...
    scene.text(`Anya, seeing your tears, gives you a hug. "I'm sorry I yelled at you, ${((s as any).pcs_nickname ?? '')}. It was just a shock. Let's get you cleaned up and we can talk about it."`);
    scene.text('She gives Roma a glare and he gets up to take a shower and finish himself off in there.');
    scene.text('You and Anya end up having a long talk about what just happened and what it means going forward. Your bond, if anything, is now stronger.');
    scene.text('"Shit, what are you going to tell mom?" she asks aloud.');
    qspCall(s, 'arousal', 'end');
    (s as any).roma_cherry = 2;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get up', goto: ['bedrPar', ''] },
    ]);
  } else {
    scene.img('images/characters/pavlovsk/resident/anya/sex/anya3some13.jpg');
    scene.text('Roma pulls you over onto your back so your head is just under his dick. Anya climbs on the top of you, his dick between you as he starts jerking off. Anya opens her mouth and you follow suit as cum starts spurting out of his cock. Most of it ends up on her face or yours, but some of it ends up in both your mouths. More drops drip from Anya\'s face onto you or into your mouth.');
    qspCall(s, 'arousal', 'foreplay', 2, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'cum_call', 'face', 'A56', 1);
    qspCall(s, 'cum_call', 'mouth', 'A56', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Aftermath', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/sex/anya3some14.jpg');
    scene.text('Once the last drop of cum is spent, Roma collapses back on the bed. Anya starts licking the cum off your face and kissing you, the two of you sharing his cum as you kiss. A few seconds later, she climbs off you and grabs a tissue to clean her face before offering you one. You start cleaning your face and get dressed as Roma smiles. "That was a blast! We have to do it again sometime." He gives Anya a pleading look.');
    scene.text('Anya laughs and shakes her head. "Maybe. It depends on how good you are."');
    scene.text('He laughs and grabs her, pulling her up into a huge bear hug. "I\'m always good, that\'s why you love me!"');
    scene.text('Before she can respond, he kisses her deeply and passionately. Feeling like they\'re getting all romantic, you decide to leave.');
    qspCall(st, 'arousal', 'foreplay', 3, ((st as any).npcID1 ?? 0), 'lesbian', 'incest', 'group');
    (st as any).cumspclnt = 12;
    qspCall(st, 'cum_cleanup', '');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['korrPar', ''] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'sisboyQW_expel':
      enterSisboyQWExpel(s, scene);
      break;
    case 'sisboyQW_bedroom':
      enterSisboyQWBedroom(s, scene);
      break;
    case 'spy1':
      enterSpy1(s, scene);
      break;
    case 'spy2':
      enterSpy2(s, scene);
      break;
    case 'spy3':
      enterSpy3(s, scene);
      break;
    case 'spy4':
      enterSpy4(s, scene);
      break;
    case 'spy5':
      enterSpy5(s, scene);
      break;
    case 'spy6':
      enterSpy6(s, scene);
      break;
    case 'caress':
      enterCaress(s, scene);
      break;
    case 'sisboytrioQW_bedroom':
      enterSisboytrioQWBedroom(s, scene);
      break;
    case 'flash_boobs':
      enterFlashBoobs(s, scene);
      break;
    case 'refuse_to_fuck_roma':
      enterRefuseToFuckRoma(s, scene);
      break;
    case 'first_cum_shot':
      enterFirstCumShot(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const sisterQW: LocationDef = {
  name: 'sisterQW',
  title: 'Your sister reminds you that she wants to spend time alone w',
  region: 'other',
  enter: enter,
};
