import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_rel ?? 0)?.['A28'] < 20) {
    scene.text('You and your stepfather can\'t stand each other, and spend as little time in the same room as possible.');
  } else {
    scene.text('You and your stepfather don\'t get along very well.');
    if (((s as any).npc_rel ?? 0)?.['A28'] < 60) {
      scene.text('You have a normal relationship with your stepfather.');
    } else {
      scene.text('You have a good relationship with your stepfather.');
      scene.text('You have a great relationship with your stepfather.');
    }
    return;
  }
  (s as any).fatherAge = ((s as any).year ?? 0) - ((((s as any).npc_dob ?? 0)?.['A28'] - (((s as any).npc_dob ?? 0)?.['A28'] % 10000)) / 10000);
  qspCall(s, 'family_schedule', '');
  qspCall(s, 'stat', '');
  if (((s as any).locArgs?.[0] ?? 0) === 'kit') {
    (s as any).kit_dad = 1;
  }
  scene.text('<center><b>Your stepfather, Vladimir Mikhailovich Scriabin</b></center>');
  scene.img('images/characters/shared/headshots_main/big28.jpg');
  // TODO-QSP: dynamic text: Your stepfather is a greying, slightly flabby man working as a truck driver. He ...
  scene.text(`Your stepfather is a greying, slightly flabby man working as a truck driver. He is ${((s as any).fatherAge ?? 0)} years old. Your mother divorced your biological father and married Vladimir when you were only one year old. You've never seen your biological father since their divorce, and as such you have no real memory of him.`);
  qspCall(s, 'father', 'fatherRep');
  if (((s as any).kit_dad ?? 0) === 1  &&  ((s as any).locat ?? 0)?.['Stepdad'] !== 4) {
    scene.text('Your stepdad folds up his paper and leaves the kitchen.');
    return;
  }
  if (((s as any).hcolfronce ?? 0) === 0) {
    (s as any).hcolfatherremember = ((s as any).pcs_haircol ?? 0);
    (s as any).hcolfronce = 1;
  }
  if (((s as any).hcolfatherremember ?? 0) !== ((s as any).pcs_haircol ?? 0)) {
    if (((s as any).pcs_haircol ?? 0) === ((s as any).nathcol ?? 0)) {
    } else {
      if (((s as any).pcs_haircol ?? 0) === 1) {
      } else {
        if (((s as any).pcs_haircol ?? 0) === 3) {
        }
        // TODO-QSP: dynamic text: Your stepfather does a double take of you as he notices your hair. "Oh <<$pcs_ni...
        scene.text(`Your stepfather does a double take of you as he notices your hair. "Oh ${((s as any).pcs_nickname ?? 0)}, I see you dyed your hair! ${((s as any).texthcol ?? 0)}" It looks good on you. He takes one last look at your new hair and goes back to watching T.V.`);
        (s as any).hcolfatherremember = ((s as any).pcs_haircol ?? 0);
      }
      if (((s as any).stepfatherQW ?? 0)?.['piercing_talkday'] !== ((s as any).daystart ?? 0)) {
        if (((s as any).pcs_piercings ?? 0)?.['tongue'] > 0  &&  ((s as any).stepfatherQW ?? 0)?.['piercing_tongue'] === 0) {
          (s as any).temp_rand = Math.floor(Math.random() * 100) + 1;
          (s as any).stepfatherQW['piercing_talkday'] = ((s as any).daystart ?? 0);
          if (((s as any).temp_rand ?? 0) >= 75) {
            // TODO-QSP: dynamic text: Your stepfather looks at your mouth with a curious look as you greet him. "<<$pc...
            scene.text(`Your stepfather looks at your mouth with a curious look as you greet him. "${((s as any).pcs_nickname ?? 0)}, do you have something shiny in your mouth?"`);
            return;
            scene.actions([
              { label: '"No"', handler: (st: GameState) => {
    scene.text('You shake your head: "Umm, no! No I don\'t!"');
    scene.text('You quickly turn away before he can get a good look at your tongue piercing.');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
              { label: '"Yes, would you like to see it?"', handler: (st: GameState) => {
    (s as any).stepfatherQW['piercing_tongue'] = 1;
    qspCall(s, 'stat', '');
    scene.img(`images/pc/body/piercings/a${((s as any).pcs_piercings ?? 0)?.['\'tongue\'']}.jpg`);
    scene.text('You open your mouth and stick out your tongue and wiggle it at him showing him your piercing.');
    if (((s as any).TouchedByFather ?? 0) === 0) {
      // TODO-QSP: dynamic text: Your stepfather shakes his head: "<<$pcs_nickname>>, tongue piercings are only f...
      scene.text(`Your stepfather shakes his head: "${((s as any).pcs_nickname ?? 0)}, tongue piercings are only for lewd women who use their mouth to please men."`);
    }
    if (((s as any).TouchedByFather ?? 0) > 0) {
      scene.text('Your stepfather grins: "Nice, I bet you could make someone feel really good with that…"');
    }
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
            ]);
          }
        }
        if (((s as any).pcs_piercings ?? 0)?.['lip'] > 0  &&  ((s as any).stepfatherQW ?? 0)?.['piercing_lip'] === 0) {
          (s as any).stepfatherQW['piercing_talkday'] = ((s as any).daystart ?? 0);
          scene.text('Your stepfather takes a long look at your mouth, specifically at your new piercing. He seems confused and asks: "Why did you get that?"');
          return;
          scene.actions([
            { label: '"Don\'t you like it? I thought it looked kind of cute."', handler: (st: GameState) => {
    (s as any).stepfatherQW['piercing_lip'] = 1;
    qspCall(s, 'stat', '');
    scene.img(`images/pc/body/piercings/b${((s as any).pcs_piercings ?? 0)?.['\'lip\'']}.jpg`);
    scene.text('You shrug. "I don\'t know… I just like the way lip rings look, so I got one. Don\'t you think it looks cute?"');
    if (((s as any).TouchedByFather ?? 0) === 0) {
      scene.text('Your stepfather shakes his head: "Kids these days, always adding new holes to themselves…"');
    }
    if (((s as any).TouchedByFather ?? 0) > 0) {
      scene.text('Your stepfather grins: "I must admit, it does look sexy on you."');
    }
    scene.actions([
      { label: 'Move away', goto: ['father', ''] },
    ]);
  } },
          ]);
        }
        if (((s as any).pcs_piercings ?? 0)?.['ears'] > 0  &&  ((s as any).stepfatherQW ?? 0)?.['piercing_ears'] === 0) {
          (s as any).stepfatherQW['piercing_talkday'] = ((s as any).daystart ?? 0);
          (s as any).stepfatherQW['piercing_ears'] = 1;
          scene.text('Your stepfather looks at your ears, noting your earrings: "I see you got your ears pierced, Your earrings are very cute."');
        }
        if (((s as any).pcs_piercings ?? 0)?.['nose'] > 0  &&  ((s as any).stepfatherQW ?? 0)?.['piercing_nose'] === 0) {
          (s as any).stepfatherQW['piercing_talkday'] = ((s as any).daystart ?? 0);
          (s as any).stepfatherQW['piercing_nose'] = 1;
          // TODO-QSP: dynamic text: Your stepfather looks a bit shocked at your nose ring: "Jesus, <<$pcs_nickname>>...
          scene.text(`Your stepfather looks a bit shocked at your nose ring: "Jesus, ${((s as any).pcs_nickname ?? 0)}, what is- why?! I understand putting a ring in a bull's nose to lead them by, but on a person? There's no reason to do that!"`);
        }
        if (((s as any).pcs_piercings ?? 0)?.['brow'] > 0  &&  ((s as any).stepfatherQW ?? 0)?.['piercing_brow'] === 0) {
          (s as any).stepfatherQW['piercing_talkday'] = ((s as any).daystart ?? 0);
          (s as any).stepfatherQW['piercing_brow'] = 1;
          // TODO-QSP: dynamic text: Your stepfather looks surprised when he sees your eyebrow piercing: "<<$pcs_nick...
          scene.text(`Your stepfather looks surprised when he sees your eyebrow piercing: "${((s as any).pcs_nickname ?? 0)}, why would you want that thing in your eyebrow?" He shakes his head in exasperation. "Kids these days…"`);
        }
        if (((s as any).pcs_tattoos ?? 0)?.['lip'] > 0  &&  ((s as any).stepfatherQW ?? 0)?.['tattoo_lip'] === 0  &&  ((s as any).npc_rel ?? 0)?.['A28'] >= 60) {
          scene.actions([
            { label: 'Show him your lip tattoo', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).stepfatherQW['piercing_talkday'] = ((s as any).daystart ?? 0);
    (s as any).stepfatherQW['tattoo_lip'] = 1;
    qspCall(s, 'stat', '');
    scene.img(`images/pc/body/tattoos/lip/tatlip${((s as any).pcs_tattoos ?? 0)?.['\'lip\'']}.jpg`);
    if (((s as any).pcs_tattoos ?? 0)?.['lip'] === 2) {
    }
    if (((s as any).pcs_tattoos ?? 0)?.['lip'] !== 2) {
    }
    // TODO-QSP: dynamic text: You pull your lip down, showing your stepfather the tattoo on the inside of your...
    scene.text(`You pull your lip down, showing your stepfather the tattoo on the inside of your lip. Your stepfather looks surprised: "${((s as any).textFatherTatLip ?? 0)}"`);
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
          ]);
        }
      }
      if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).npc_pregtalk ?? 0)?.['A28'] === 0  &&  qspFunc(s, 'body_din', 'pregnancyVisibility') === 1) {
        // TODO-QSP: dynamic text: Your stepfather looks at your belly with a surprised look on his face. He shakes...
        scene.text(`Your stepfather looks at your belly with a surprised look on his face. He shakes his head in disappointment before looking back at you.: "${((s as any).pcs_nickname ?? 0)}, you're pregnant?"`);
        if (((s as any).npc_had_sex ?? 0)?.['A28']) {
          // TODO-QSP: dynamic text: You see him hesitate for a second, as if weighing whether he should say somethin...
          scene.text(`You see him hesitate for a second, as if weighing whether he should say something or not. He finally does: "All I can say is that I hope the baby is not mine… i'm so disappointed in you "${((s as any).pcs_nickname ?? 0)}"`);
        }
        (s as any).npc_pregtalk['A28'] = 1;
      } else {
        // TODO-QSP: dynamic text: Your stepfather looks at your belly with a surprised look on his face. He shakes...
        scene.text(`Your stepfather looks at your belly with a surprised look on his face. He shakes his head in disappointment before looking back at you.: "${((s as any).pcs_nickname ?? 0)}, you're pregnant?"`);
        if (((s as any).npc_had_sex ?? 0)?.['A28']) {
          // TODO-QSP: dynamic text: You see him hesitate for a second, as if weighing whether he should say somethin...
          scene.text(`You see him hesitate for a second, as if weighing whether he should say something or not. He finally does: "All I can say is that I hope that the baby is not mine… i'm so disappointed in you "${((s as any).pcs_nickname ?? 0)}"`);
        }
        (s as any).npc_pregtalk['A28'] = 1;
      }
      if (((s as any).week ?? 0) < 6  &&  ((((s as any).hour ?? 0) === 8  &&  ((s as any).minut ?? 0) > 30)  ||  ((s as any).hour ?? 0) >= 9)  &&  ((s as any).hour ?? 0) < 17) {
        // TODO-QSP: dynamic text: "Alright <<$pcs_nickname>>. I need to leave for work now or i'll be late. See yo...
        scene.text(`"Alright ${((s as any).pcs_nickname ?? 0)}. I need to leave for work now or i'll be late. See you later."`);
        return;
        scene.actions([
          { label: '<b>Continue</b>', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
        ]);
      }
      if (((s as any).hour ?? 0) >= 22) {
        // TODO-QSP: dynamic text: "Alright <<$pcs_nickname>>. It's getting late, I need to get to bed. See you tom...
        scene.text(`"Alright ${((s as any).pcs_nickname ?? 0)}. It's getting late, I need to get to bed. See you tomorrow."`);
        return;
        scene.actions([
          { label: '<b>Continue</b>', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
        ]);
      }
      scene.actions([
        { label: 'Chat', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 6) + 10);
    qspCall(s, 'npc_relationship', 'modify', 'A28', 1);
    qspCall(s, 'stat', '');
    scene.text('<center><b>Your stepfather, Vladimir Mikhailovich Scriabin</b></center>');
    scene.img('images/characters/shared/headshots_main/big28.jpg');
    if (((s as any).loc ?? 0) === 'sitrPar') {
      scene.text('Your stepfather is sitting on the couch in the living room, he is watching TV. You decide to join him for a while and sit down next to him.');
    } else {
      scene.text('Your stepfather is sitting by the dinner table eating and reading the newspaper.');
    }
    qspCall(s, 'father', 'fatherRep');
    if (((s as any).npc_rel ?? 0)?.['A28'] < 20) {
      qspCall(s, 'dinfather', 'father 1');
      return;
    } else {
      qspCall(s, 'dinfather', 'father 2');
      return;
      if (((s as any).npc_rel ?? 0)?.['A28'] >= 40) {
        if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28'] / 10) <= 60) {
          qspCall(s, 'dinfather', 'father 3');
          return;
        }
        if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28'] / 10) > 60) {
          qspCall(s, 'dinfather', 'father 4');
          return;
        }
      }
    }
    if ((((s as any).hour ?? 0) > 10  &&  ((s as any).week ?? 0) < 6)  ||  ((s as any).week ?? 0) >= 6) {
      if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
        if (((s as any).fatherKnowSpravka ?? 0) === 0  &&  ((s as any).motherKnowSpravka ?? 0) > 0  &&  ((s as any).npc_had_sex ?? 0)?.['A28'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
          if (((s as any).npc_rel ?? 0)?.['A28'] >= 30) {
            qspCall(s, 'npc_relationship', 'set', 'A28', 30);
          }
          (s as any).fatherKnowSpravka = 1;
          // TODO-QSP: dynamic text: Your stepfather angrily walked up to you: "Damnit <<$pcs_nickname>>, your mother...
          scene.text(`Your stepfather angrily walked up to you: "Damnit ${((s as any).pcs_nickname ?? 0)}, your mother told me you're sexually active already! You're still so young! I know I can't stop you, but at least have some decency and don't bring them to our house." His facial expression then softens, and he adds in a milder voice: "And please… be careful, okay?" You can tell your stepfather is very disappointed in you.`);
          return;
          scene.actions([
            { label: 'Move away', goto: ['father', ''] },
          ]);
        }
        if (((s as any).fatherKnowWhore ?? 0) === 0  &&  ((s as any).motherKnowWhore ?? 0) > 0  &&  ((s as any).npc_had_sex ?? 0)?.['A28'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
          qspCall(s, 'npc_relationship', 'set', 'A28', 0);
          (s as any).fatherKnowWhore = 1;
          // TODO-QSP: dynamic text: Your stepfather furiously walked up to you: "<<$pcs_nickname>>y ou whore! Your m...
          scene.text(`Your stepfather furiously walked up to you: "${((s as any).pcs_nickname ?? 0)}y ou whore! Your mother told me you're selling your body for money! You're still so young! I know I can't stop you, but don't bring them to our house!" You can tell your stepfather is very angry with you.`);
          return;
          scene.actions([
            { label: 'Move away', goto: ['father', ''] },
          ]);
        }
        if (((s as any).fatherKnowRaped ?? 0) === 0  &&  ((s as any).motherKnowRaped ?? 0) > 0  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
          (s as any).fatherKnowRaped = 1;
          // TODO-QSP: dynamic text: Your stepfather walked up to you: "Oh <<$pcs_nickname>>, your mother told me abo...
          scene.text(`Your stepfather walked up to you: "Oh ${((s as any).pcs_nickname ?? 0)}, your mother told me about your rape. You're still so young! I know I can't undo this, but be assured, daddy will always be there for you."`);
          if (((s as any).wombthfathID ?? 0) === 'A28'  &&  ((s as any).stepdadSecret ?? 0) === 1  &&  ((s as any).momKnowsVladimir ?? 0) === 0  &&  ((s as any).npc_had_sex ?? 0)?.['A28']  &&  ((s as any).npc_pregtalk ?? 0)?.['A28'] === 0) {
            scene.actions([
              { label: 'Tell him he is the father', handler: (st: GameState) => {
    scene.text('"Dad, I am pregnant. I lied to mom about being raped, to protect us."');
    // TODO-QSP: dynamic text: You see him hesitate for a second, as if weighing whether he should say somethin...
    scene.text(`You see him hesitate for a second, as if weighing whether he should say something or not. He finally does: "All I can say is that I hope that the baby is not mine… i'm so disappointed in you "${((s as any).pcs_nickname ?? 0)}"`);
    (s as any).npc_pregtalk['A28'] = 1;
    // TODO-QSP: delact 'Tell him he is the father'
  } },
            ]);
          }
          return;
          scene.actions([
            { label: 'Move away', goto: ['father', ''] },
          ]);
        }
        if (((s as any).alko ?? 0) > 1  &&  ((s as any).alkoday ?? 0) !== ((s as any).daystart ?? 0)) {
          (s as any).alkoday = ((s as any).daystart ?? 0);
          qspCall(s, 'npc_relationship', 'modify', 'A28', (-1));
          // TODO-QSP: dynamic text: Your stepfather notices the sharp smell of booze on you and looks disappointed. ...
          scene.text(`Your stepfather notices the sharp smell of booze on you and looks disappointed. "${((s as any).pcs_nickname ?? 0)}, you smell like alcohol, what are you getting yourself into? You're too young to drink that!"`);
        }
        if (((s as any).TorgVokzalTimes ?? 0) > 0  &&  ((s as any).YouCanGar ?? 0) === 0  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
          scene.actions([
            { label: 'Ask him permission to store things in his garage', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Your stepfather, Vladimir Mikhailovich Scriabin</b></center>');
    scene.img('images/characters/shared/headshots_main/big28.jpg');
    scene.text('You ask your stepfather if it is okay for you to store some things in his garage.');
    if (((s as any).npc_rel ?? 0)?.['A28'] >= 60  ||  ((s as any).TouchedByFather ?? 0) === 1) {
      (s as any).YouCanGar = 1;
      scene.text('Your stepfather reluctantly agrees to let you store some things in his garage. You can hide some of your trinkets there now.');
    } else {
      // TODO-QSP: dynamic text: Your stepfather shook his head and said "Sorry <<$pcs_nickname>>. The garage alr...
      scene.text(`Your stepfather shook his head and said "Sorry ${((s as any).pcs_nickname ?? 0)}. The garage already has more stuff in it than I would like, there's simply no room."`);
    }
    scene.actions([
      { label: 'Move away', goto: ['father', ''] },
    ]);
  } },
          ]);
        }
        if (((s as any).locat ?? 0)?.['Stepdad'] === 10) {
          scene.actions([
            { label: 'Watch TV together', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'mood', 'raise', Math.floor(Math.random() * 41) + 10);
    qspCall(s, 'stat', '');
    scene.text('<center><b>Your stepfather, Vladimir Mikhailovich Scriabin</b></center>');
    scene.img('images/shared/home/telek.jpg');
    qspCall(s, 'father', 'fatherRep');
    if (((s as any).npc_rel ?? 0)?.['A28'] < 20) {
      qspCall(s, 'dinfather', 'watchtv1');
      return;
    } else {
      qspCall(s, 'dinfather', 'watchtv2');
      return;
      if (((s as any).npc_rel ?? 0)?.['A28'] >= 40) {
        if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28'] / 10) <= 0) {
          qspCall(s, 'dinfather', 'watchtv4');
          return;
        }
        if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28'] / 10) > 60) {
          qspCall(s, 'dinfather', 'watchtv4');
          return;
        }
      }
    }
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
          ]);
        }
        if (((s as any).locat ?? 0)?.['Stepdad'] === 10  &&  ((s as any).locat ?? 0)?.['Mom_athome'] === 0  &&  ((s as any).locat ?? 0)?.['Kolka_athome'] === 0  &&  ((s as any).TouchedByFather ?? 0) === 1  &&  (((s as any).pcs_horny ?? 0) >= 50  ||  ((s as any).npc_had_sex ?? 0)?.['A28'])) {
          if (((s as any).clothingworntype ?? 0) === 'nude') {
            if (((s as any).pcs_tattoos ?? 0)?.['pussy'] > 0  &&  ((s as any).stepfatherQW ?? 0)?.['tattoo_pussy'] === 0  &&  ((s as any).pantyworntype ?? 0) === 'none') {
              if (((s as any).npc_rel ?? 0)?.['A28'] >= 70) {
                scene.text('With your naked body on display, your pubic tattoo catches your stepfather\'s eye. "Wow, that is one hard to miss tattoo. Obviously you didn\'t get that one just for yourself", he says as he moves towards you and has a closer look.');
                qspCall(s, 'npc_relationship', 'modify', 'A28', 1);
                (s as any).stepfatherQW['tattoo_pussy'] = 1;
                return;
              } else {
                scene.text('"Damn tattoo, I can\'t believe you would soil your body like that." Your stepfather obviously doesn\'t like the tattoo you have in your pubic area. ');
                qspCall(s, 'npc_relationship', 'modify', 'A28', (-1));
                (s as any).stepfatherQW['tattoo_pussy'] = 1;
                return;
              }
            }
            if (((s as any).pcs_piercings ?? 0)?.['nipples'] > 0  &&  ((s as any).stepfatherQW ?? 0)?.['piercing_nipples'] === 0) {
              if (((s as any).npc_had_sex ?? 0)?.['A28'] === 0) {
                if (((s as any).npc_rel ?? 0)?.['A28'] >= 60) {
                  scene.text('"Hey, those look nice on you!" your stepfather says, nodding at your nipple piercings. He seems to like them.');
                  qspCall(s, 'npc_relationship', 'modify', 'A28', 3);
                  (s as any).stepfatherQW['piercing_nipples'] = 1;
                  return;
                } else {
                  scene.text('"Why would you do that… you should probably take those out", your stepfather says as he shakes his head, pointing at the piercings in your nipples.');
                  qspCall(s, 'npc_relationship', 'modify', 'A28', (-1));
                  return;
                }
              } else {
                if (((s as any).hour ?? 0) >= 18  &&  ((s as any).hour ?? 0) < 21) {
                  scene.text('"Hey, those look nice on you!" your stepfather says, nodding at your nipple piercings. He seems to like them.');
                  qspCall(s, 'npc_relationship', 'modify', 'A28', 3);
                  (s as any).stepfatherQW['piercing_nipples'] = 1;
                  return;
                } else {
                  scene.text('"Wow, those are sexy!" your stepfather says, as he reaches out and touches your nipple piercings. You can\'t help but let out an involuntary groan. He admires them for a moment, rubbing his fingers on your nipples and lightly tugging at them before he lets you go.');
                  qspCall(s, 'npc_relationship', 'modify', 'A28', 3);
                  (s as any).stepfatherQW['piercing_nipples'] = 1;
                  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
                  return;
                }
              }
            }
            // TODO-QSP: dynamic text: Your stepfather stares at your naked body, you can't help but notice the admirin...
            scene.text(`Your stepfather stares at your naked body, you can't help but notice the admiring look on his face mixed with the torment of him knowing that he should know better. "${((s as any).pcs_nickname ?? 0)}, have you no shame? You shouldn't be flaunting your naked body like that, you have no idea what kind of effect it has on men!"`);
            if (((s as any).locat ?? 0)?.['Mom_athome'] === 1) {
            }
            if (((s as any).npc_had_sex ?? 0)?.['A28']) {
              // TODO-QSP: dynamic text: His eyes never stop looking at your naked body, you can tell he's very much impr...
              scene.text(`His eyes never stop looking at your naked body, you can tell he's very much impressed by your beauty as you walk around the room. ${((s as any).mother_go_text ?? 0)}`);
            } else {
              if (((s as any).npc_rel ?? 0)?.['A28'] >= 40  ||  ((s as any).pcs_hotcat ?? 0) > 5) {
                // TODO-QSP: dynamic text: "You look fantastic," he says, reluctantly turning his face away from you. <<$mo...
                scene.text(`"You look fantastic," he says, reluctantly turning his face away from you. ${((s as any).mother_go_text ?? 0)}`);
                qspCall(s, 'npc_relationship', 'modify', 'A28', 1);
              } else {
                // TODO-QSP: dynamic text: He decisively turns his face away from you, avoiding the looks of your naked bod...
                scene.text(`He decisively turns his face away from you, avoiding the looks of your naked body. "Don't be such a whore ${((s as any).pcs_nickname ?? 0)}, go put some clothes on right now."`);
                qspCall(s, 'npc_relationship', 'modify', 'A28', (-1));
              }
            }
            scene.actions([
              { label: 'Move away', goto: ['bedrPar', ''] },
            ]);
          }
          if (((s as any).npc_had_sex ?? 0)?.['A28']  &&  ((s as any).pcs_piercings ?? 0)?.['pussy'] > 0  &&  ((s as any).stepfatherQW ?? 0)?.['piercing_pussy'] === 0  &&  (((s as any).hour ?? 0) <= 18  ||  ((s as any).hour ?? 0) > 21)) {
            scene.actions([
              { label: 'Show off your pubic piercing', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (15);
    qspCall(s, 'stat', '');
    (s as any).stepfatherQW['piercing_pussy'] = 1;
    scene.img(`images/pc/body/piercings/g${((s as any).pcs_piercings ?? 0)?.['\'pussy\'']}.jpg`);
    // TODO-QSP: dynamic text: Moving closer to your stepfather, you tease him by showing him your pussy. He do...
    scene.text(`Moving closer to your stepfather, you tease him by showing him your pussy. He doesn't know you have a pubic piercing yet, and you plan on showing it off today. As you absently rub your fingers across your labia, the glint of metal catches his eye and he pushes your hand away before you get a chance to tell him about it. "Well well, what do we have here?" he mutters, gently rubbing his fingers over the shiny new piercing. "${((s as any).pcs_nickname ?? 0)}, you are such a horny devil… I love it, we're going to have a lot of fun with this." He spends the next few minutes rubbing and tugging on your new piercing, making lewd comments the whole time. After that he reluctantly lets you go, leaving you hornier than before.`);
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
            ]);
          }
          if (((s as any).npc_had_sex ?? 0)?.['A28']) {
            (s as any).fatherwantssex = Math.floor(Math.random() * 2) + 1;
          }
          if (((s as any).clothingworntype ?? 0) === 'nude') {
            (s as any).fatherwantssex = 1;
          }
          if (((s as any).npc_had_sex ?? 0)?.['A28']  &&  ((s as any).fatherwantssex ?? 0) === 1  &&  ((s as any).locat ?? 0)?.['Mom_athome'] === 0  &&  ((s as any).locat ?? 0)?.['Kolka_athome'] === 0  &&  ((s as any).npc_rel ?? 0)?.['A28'] > 60) {
            qspCall(s, 'stat', '');
            scene.text('<center><b>Your stepfather, Vladimir Mikhailovich Scriabin</b></center>');
            scene.img('images/characters/shared/headshots_main/big28.jpg');
            if (((s as any).clothingworntype ?? 0) === 'nude') {
              scene.text('You give your stepfather a lewd smile. "I figured my clothes would only get in the way Daddy, so I took them off for you."');
            }
            // TODO-QSP: dynamic text: No words are necessary, your stepfather simply unbuttons his pants revealing his...
            scene.text(`No words are necessary, your stepfather simply unbuttons his pants revealing his stiff cock. "${((s as any).pcs_nickname ?? 0)}, help your old man out will you?"`);
            scene.actions([
              { label: 'Change your mind and leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
              { label: 'Get down on your knees', handler: (st: GameState) => {
    qspCall(st, 'fathersex', 'fatherblow4');
  } },
            ]);
          }
          scene.actions([
            { label: 'Seduce him', handler: (st: GameState) => {
    if (((s as any).npc_rel ?? 0)?.['A28'] < 20) {
      scene.text('Your stepfather seems to misunderstand your advances.');
      qspCall(s, 'dinfather', 'father 1');
      return;
    } else {
      scene.text('Your stepfather seems to misunderstand your advances.');
      qspCall(s, 'dinfather', 'father 2');
      return;
      if (((s as any).npc_rel ?? 0)?.['A28'] >= 40) {
        if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28'] / 10) <= 60) {
          scene.text('Your stepfather clears his throat and changes the subject.');
          qspCall(s, 'dinfather', 'father 3');
          return;
        } else {
          qspCall(s, 'stat', '');
          (s as any).minut = ((s as any).minut ?? 0) + 30;
          qspCall(s, 'npc_relationship', 'modify', 'A28', 20);
          if (((s as any).analPlugIn ?? 0) === 1) {
            qspCall(s, 'fathersex', 'fatherbend_1');
          } else {
            if (((s as any).pantyworntype ?? 0) !== 'none') {
              qspCall(s, 'fathersex', 'fatherbend_2');
            } else {
              qspCall(s, 'fathersex', 'fatherbend_3');
            }
          }
        }
      }
    }
  } },
          ]);
        }
        scene.actions([
          { label: 'Ask for money', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Your stepfather, Vladimir Mikhailovich Scriabin</b></center>');
    scene.img('images/characters/shared/headshots_main/big28.jpg');
    scene.text('Your stepfather is sitting on the couch, watching some boring TV show. You sit down next to him.');
    qspCall(s, 'father', 'fatherRep');
    if (((s as any).fatherPayDay ?? 0) === ((s as any).daystart ?? 0)) {
      // TODO-QSP: dynamic text: Trying your cutest face on your stepfather, you ask him for some money. He just ...
      scene.text(`Trying your cutest face on your stepfather, you ask him for some money. He just shakes his head wearily: "No, ${((s as any).pcs_nickname ?? 0)}. I've already given you some money today, don't be greedy."`);
    } else {
      if ((((s as any).npc_rel ?? 0)?.['A28'] <= 40  ||  (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28'] / 10)) <= 60)  &&  ((s as any).TouchedByFather ?? 0) === 0) {
        scene.text('You ask your stepfather for some money, but he shakes his head in response: "I already gave my salary to your mother, go ask her."');
      } else {
        scene.text('You ask your stepfather for some money, but he shakes his head in response: "I already gave my salary to your mother, go ask her."');
        if (((s as any).npc_rel ?? 0)?.['A28'] >= 40  &&  ((s as any).npc_rel ?? 0)?.['A28'] < 60  &&  ((s as any).fatherPayDay ?? 0) !== ((s as any).daystart ?? 0)) {
          (s as any).FatherMolest = Math.floor(Math.random() * 4) + 1;
        }
        if (((s as any).npc_rel ?? 0)?.['A28'] >= 60  &&  ((s as any).npc_rel ?? 0)?.['A28'] < 80  &&  ((s as any).fatherPayDay ?? 0) !== ((s as any).daystart ?? 0)) {
          (s as any).FatherMolest = Math.floor(Math.random() * 2) + 1;
        }
        if (((s as any).npc_rel ?? 0)?.['A28'] >= 80  &&  ((s as any).fatherPayDay ?? 0) !== ((s as any).daystart ?? 0)) {
          (s as any).FatherMolest = 1;
        }
        if (((s as any).FatherMolest ?? 0) === 1) {
          scene.text('While you\'re talking with him, you notice your stepfather is in a good mood today. Perhaps you can persuade him…');
          if (((s as any).FatherMolest ?? 0) > 1) {
            // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I already said no."
            scene.text(`"${((s as any).pcs_nickname ?? 0)}, I already said no."`);
          }
          scene.actions([
            { label: '"Oh please?"', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 5) + 1);
    scene.text('"Oh come on, please Daddy?" you beg him, batting your eyelids and trying to look as cute as possible.');
    if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28'] / 10) >= 200) {
      (s as any).fatherLust = 1;
    } else {
      (s as any).fatherLust = Math.floor(Math.random() * 2) + 1;
      if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28'] / 10) >= 60) {
        (s as any).fatherLust = Math.floor(Math.random() * 4) + 1;
      } else {
        (s as any).fatherLust = 2;
      }
      if (((s as any).fatherLust ?? 0) >= 2) {
        // TODO-QSP: dynamic text: "Sorry <<$pcs_nickname>>, like I said, I have no money. Go ask your mother."
        scene.text(`"Sorry ${((s as any).pcs_nickname ?? 0)}, like I said, I have no money. Go ask your mother."`);
      } else {
        qspCall(s, 'money', 'earn', Math.floor(Math.random() * 101) + 200);
        qspCall(s, 'exp_gain', 'persuas', Math.floor(Math.random() * 3) + 0);
        (s as any).fatherPayDay = ((s as any).daystart ?? 0);
        qspCall(s, 'stat', '');
        scene.text('"Oh, alright then. Just don\'t tell your mother!" he says in a tired voice, keeping his eyes on the doorway as he gives you the money. You act genuinely happy as you take the money from him, giving him a kiss on the cheek as you go.');
      }
      scene.actions([
        { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    }
    if (((s as any).npc_had_sex ?? 0)?.['A28']) {
      scene.actions([
        { label: 'Blackmail him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'money', 'earn', Math.floor(Math.random() * 201) + 300);
    (s as any).fatherPayDay = ((s as any).daystart ?? 0);
    qspCall(s, 'stat', '');
    scene.text('"Aren\'t you forgetting something?" you say in a serious voice, referring to your recent intimate moments with him.');
    scene.text('Your stepfather is clearly embarrassed by this, and surprised at you for bringing it up. He clears his throat loudly, and the following silence makes you feel slightly uncomfortable. Nevertheless, he reaches for his wallet.');
    scene.text('"Here you go, you leech! You know you shouldn\'t be taking advantage of me like that! Here, take your money and get out of here. Just keep your mouth shut!" You nod and pocket the money, feeling slightly worse for blackmailing him for it.');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      ]);
    }
  } },
          ]);
        }
      }
    }
    scene.actions([
      { label: 'Move away', goto: ['father', ''] },
    ]);
  } },
          { label: 'Ask about him and your mother', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Your stepfather, Vladimir Mikhailovich Scriabin</b></center>');
    scene.img('images/characters/shared/headshots_main/big28.jpg');
    scene.text('You ask your stepfather how he met your mother. Your stepfather scratches his slightly balding head and replies: "I used to work as a taxi driver back then, drove your mother to places from time to time and we got along very well. Natasha is a strong and independent woman, raising you and Anya all by herself after she left your father. I didn\'t know him very well, I\'ve only met him a couple of times. All I know is that his name is Mikhail Kuznetsov, and that he moved to a different city soon after he and your mother divorced."');
    scene.actions([
      { label: 'Move away', goto: ['father', ''] },
    ]);
  } },
          { label: 'Ask about his work', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Your stepfather, Vladimir Mikhailovich Scriabin</b></center>');
    scene.img('images/characters/shared/headshots_main/big28.jpg');
    scene.text('You ask your stepfather about his work. Your stepfather reaches for his aching joints, with a grimace on his face. "I used to be a taxi driver. It was hard work though, often working many hours a day, and it could be dangerous too. With some money we saved up I bought a Gazelle pickup truck, and now I drive that selling goods and making deliveries. As you know I have two garages; one for our Volga, and the other one for the Gazelle."');
    scene.actions([
      { label: 'Move away', goto: ['father', ''] },
    ]);
  } },
          { label: 'Ask him what he thinks of your outfit', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 6) + 10);
    qspCall(s, 'stat', '');
    scene.text('<center><b>Your stepfather, Vladimir Mikhailovich Scriabin</b></center>');
    scene.img('images/characters/shared/headshots_main/big28.jpg');
    scene.text('Your stepfather is sitting on the couch, watching TV. You sat next to him on the sofa.');
    qspCall(s, 'father', 'fatherRep');
    scene.text('');
    if (((s as any).npc_rel ?? 0)?.['A28'] <= 40  ||  (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28'] / 10)) <= 60) {
      // TODO-QSP: dynamic text: You ask your stepfather what he thinks of your outfit. It looks like he's not in...
      scene.text(`You ask your stepfather what he thinks of your outfit. It looks like he's not in the mood to indulge you, and impatiently waves you away with his hand: "Don't bother me ${((s as any).pcs_nickname ?? 0)}, I'm busy."`);
    } else {
      scene.text('You move slightly closer towards your stepfather, flirtatiously smile at him and ask him what he thinks of your outfit.');
      if (((s as any).pcs_hairbsh ?? 0) <= 0) {
        qspCall(s, 'mood', 'lower', 'tiny');
        scene.text('You notice your stepfather keeps glancing at your disheveled hair with a disapproving look on his face. "Silly me, I should really take better care of my hair!" you think to yourself.');
      }
      if (((s as any).npc_rel ?? 0)?.['A28'] >= 40  &&  ((s as any).npc_rel ?? 0)?.['A28'] < 60) {
        (s as any).FatherMolest = Math.floor(Math.random() * 8) + 1;
      }
      if (((s as any).npc_rel ?? 0)?.['A28'] >= 60  &&  ((s as any).npc_rel ?? 0)?.['A28'] < 80) {
        (s as any).FatherMolest = Math.floor(Math.random() * 4) + 1;
      }
      if (((s as any).npc_rel ?? 0)?.['A28'] >= 80) {
        (s as any).FatherMolest = Math.floor(Math.random() * 2) + 1;
      }
      if (((s as any).FatherMolest ?? 0) === 1  &&  ((s as any).locat ?? 0)?.['Kolka_athome'] === 0) {
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 5) + 1);
        qspCall(s, 'stat', '');
        scene.text('He seems happy to oblige, and asks you to twirl your body so he can look at your outfit from all angles. The approving nod and hungry look in his eyes that follow, show that he would like to do more than just watch.');
        if (((s as any).pcs_horny ?? 0) >= 50  ||  ((s as any).TouchedByFather ?? 0) === 1) {
          if (((s as any).fatherLust ?? 0) === 1) {
            scene.text('Even though he did not expect this from you, you can tell by the spark in his eyes and his heavier breathing that he is, at least, pleasantly surprised by your request.');
          }
          scene.actions([
            { label: 'Sway your hips back and forth', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 5, 'incest', 'exhibitionism');
    qspCall(s, 'arousal', 'end');
    scene.text('In the heat of the moment you gently start to sway your hips back and forth, without even realizing it. When you realize what you\'re doing, you stare your stepfather in the eye for a second with a mischievous smile on your lips. You then turn your back to him and keep swaying your ass seductively.');
    if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28'] / 10) < 60) {
      (s as any).fatherLust = 2;
    }
    if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28'] / 10) >= 60  &&  ((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28'] / 10) < 120) {
      (s as any).fatherLust = Math.floor(Math.random() * 4) + 1;
    }
    if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28'] / 10) >= 120  &&  ((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28'] / 10) < 200) {
      (s as any).fatherLust = Math.floor(Math.random() * 2) + 1;
    }
    if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28'] / 10) >= 200  ||  ((s as any).TouchedByFather ?? 0) === 1) {
      (s as any).fatherLust = 1;
    }
    if (((s as any).fatherLust ?? 0) >= 2) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (Math.floor(Math.random() * 5) + 1);
      qspCall(s, 'stat', '');
      if (((s as any).pantyworntype ?? 0) !== 'none') {
        // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/pavlovsk/resident/vladimir/sex...
        scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/pavlovsk/resident/vladimir/sex/fatherim47.jpg"></center>`);
        scene.text('Even though your body is definitely having an effect on him your stepfather is clearly embarrassed, and surprised you would do such a thing. He clears his throat loudly and looks at you disapprovingly, and the silence that follows makes you feel a bit uncomfortable.');
      }
      if (((s as any).pantyworntype ?? 0) === 'none') {
        // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/pavlovsk/resident/vladimir/sex...
        scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/pavlovsk/resident/vladimir/sex/fatherim48.jpg"></center>`);
        // TODO-QSP: dynamic text: You avoid his gaze while you keep swaying your ass back and forth, slowly pullin...
        scene.text(`You avoid his gaze while you keep swaying your ass back and forth, slowly pulling your clothes away so he can see you're not wearing any underwear. He sighs wistfully and tries to look away, saying in a stern voice: "${((s as any).pcs_nickname ?? 0)}, this is not fair, you know I am not made of stone. Don't show me your bare ass like that." Realizing he wants no more part of your little show, you leave.`);
      }
    } else {
      if (((s as any).pantyworntype ?? 0) !== 'none') {
        scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim49.jpg');
        scene.text('As you slowly sway your ass for his viewing pleasure, you notice your stepfather focusing sharply on your ass crack. It takes a few seconds for you to figure out why, but then you remember one of his fetishes: he likes it when girls don\'t wear underwear. You bet you could really turn him on if you took them off.');
        if (((s as any).pcs_horny ?? 0) >= 90) {
          scene.actions([
            { label: 'Give him your panties', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    qspCall(s, 'panties', 'dispose');
    scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim50.jpg');
    // TODO-QSP: dynamic text: Wanting to see just how riled up you can get your stepfather, you bend over and ...
    scene.text(`Wanting to see just how riled up you can get your stepfather, you bend over and slowly pull your panties down. "Is this better, Daddy?" you sweetly ask him, and your stepfather panics while you run your hands over your naked ass, gently kneading your ass cheeks. "${((s as any).pcs_nickname ?? 0)}, please don't do that! Someone could come in at any second! What do you think your mother would do to you AND me if she saw this!?" he whispers, as he moves to you and frantically tries to cover you up. You sweetly smile at him and whisper: "Relax daddy, we're fine! Here, for later," as you stuff your panties in his pocket.`);
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
          ]);
        }
      } else {
        (s as any).TouchedByFather = 1;
        scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim51.mp4');
      }
    }
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
          ]);
        }
        if (((s as any).pcs_horny ?? 0) >= 90  ||  ((s as any).TouchedByFather ?? 0) === 1) {
          if (((s as any).clothingworntype ?? 0) !== 'nude') {
            scene.actions([
              { label: 'Let him touch your clothes', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 5, 'incest', 'exhibitionism');
    qspCall(s, 'arousal', 'end');
    scene.text('You innocently offer him to have a feel at the fabric, pretending you\'re really interested to know what he thinks of your the quality of your clothing. Your stepfather looks at you with a slightly puzzled look on his face. "Go on, touch it, it\'s so nice and soft!" you encourage him, and you take his hand and pull it towards you.');
    if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28'] / 10) < 60) {
      (s as any).fatherLust = 2;
    }
    if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28'] / 10) >= 60  &&  ((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28'] / 10) < 120) {
      (s as any).fatherLust = Math.floor(Math.random() * 4) + 1;
    }
    if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28'] / 10) >= 120  &&  ((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28'] / 10) < 200) {
      (s as any).fatherLust = Math.floor(Math.random() * 2) + 1;
    }
    if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28'] / 10) >= 200  ||  ((s as any).TouchedByFather ?? 0) === 1) {
      (s as any).fatherLust = 1;
    }
    if (((s as any).fatherLust ?? 0) >= 2) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (Math.floor(Math.random() * 5) + 1);
      qspCall(s, 'stat', '');
      scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim41.jpg');
      scene.text('Your stepfather clearly doesn\'t want to, and is slightly embarrassed by the whole situation. He quickly pulls his hand away and tells you to go straighten your clothes.');
    }
    if (((s as any).fatherLust ?? 0) === 1) {
      (s as any).TouchedByFather = 1;
      if (((s as any).pantyworntype ?? 0) !== 'none') {
        // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/pavlovsk/resident/vladimir/sex...
        scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/pavlovsk/resident/vladimir/sex/fatherim42.jpg"></center>`);
        // TODO-QSP: dynamic text: Your stepfather smiles and eagerly reaches for your ass, kneading it rougher tha...
        scene.text(`Your stepfather smiles and eagerly reaches for your ass, kneading it rougher than you had anticipated. A bit startled at his roughness you squeak out a soft "Oh!" as he gives it a few slaps. He then sits back on the couch, amused at your embarrassed expression and red face. "You're right, ${((s as any).pcs_nickname ?? 0)}… it's very soft indeed. Very nice."`);
      }
      if (((s as any).pantyworntype ?? 0) === 'none') {
        // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/pavlovsk/resident/vladimir/sex...
        scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/pavlovsk/resident/vladimir/sex/fatherim25.jpg"></center>`);
        scene.text('Judging from your stepfather\'s flustered face, he is more than happy to oblige. He grabs you and bends you over the rear of the couch. You can\'t see what he\'s doing, but immediately feel his hand brushing against your wet pussy. He slides a finger in and pumps it in and out for a little while, filling the room with squishy noises. You let out a needy moan and feel a tinge of regret when he pulls his hand away and helps you back up. "Daddy, you didn\'t even touch my clothes!" you pout. He simply gives you a wink and then returns his attention to the TV.');
      }
    }
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
              { label: 'Adjust your clothes', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 5, 'incest', 'exhibitionism');
    qspCall(s, 'arousal', 'end');
    scene.text('Encouraged by your stepfather\'s reaction, you put your hands on your breasts and pretend you\'re straightening your clothes. You run your fingers down to your stomach and groin while plucking at the fabric, giving him one hell of a show. He can\'t take his eyes off your body and you can tell your actions make him want you more than ever.');
    if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28'] / 10) < 60) {
      (s as any).fatherLust = 2;
    }
    if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28'] / 10) >= 60  &&  ((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28'] / 10) < 120) {
      (s as any).fatherLust = Math.floor(Math.random() * 4) + 1;
    }
    if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28'] / 10) >= 120  &&  ((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28'] / 10) < 200) {
      (s as any).fatherLust = Math.floor(Math.random() * 2) + 1;
    }
    if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28'] / 10) >= 200  ||  ((s as any).TouchedByFather ?? 0) === 1) {
      (s as any).fatherLust = 1;
    }
    if (((s as any).fatherLust ?? 0) >= 2) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (Math.floor(Math.random() * 5) + 1);
      qspCall(s, 'stat', '');
      if (((s as any).pantyworntype ?? 0) !== 'none') {
        // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/pavlovsk/resident/vladimir/sex...
        scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/pavlovsk/resident/vladimir/sex/fatherim45.jpg"></center>`);
        scene.text('Your stepfather realizes you\'re going too far, and interrupts you by clearing his throat loudly. He tells you to go away, making you feel rather uncomfortable.');
      }
      if (((s as any).pantyworntype ?? 0) === 'none') {
        // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/pavlovsk/resident/vladimir/sex...
        scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/pavlovsk/resident/vladimir/sex/fatherim46.jpg"></center>`);
        // TODO-QSP: dynamic text: Deciding to take your teasing to the next level, you pull your clothes to the si...
        scene.text(`Deciding to take your teasing to the next level, you pull your clothes to the side and show him your bare pussy. Your stepfather realizes you're taking it too far, and sends you off: "${((s as any).pcs_nickname ?? 0)}, stop that. And go put on some underwear, that's no way for a lady to behave."`);
      }
    }
    if (((s as any).fatherLust ?? 0) === 1) {
      if (((s as any).pantyworntype ?? 0) !== 'none') {
        // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/pavlovsk/resident/vladimir/sex...
        scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/pavlovsk/resident/vladimir/sex/fatherim43.jpg"></center>`);
        // TODO-QSP: dynamic text: You run your hands over your shoulders and slide the straps off to the side, pre...
        scene.text(`You run your hands over your shoulders and slide the straps off to the side, pretending it is an accident. "Oh no, I can be so clumsy sometimes!" you exclaim, while taking way longer than you need to put them back where they need to be. All the while your stepfather's eyes are glued to your ${((s as any).titsize ?? 0)} breasts, and his face turns beet red.`);
      }
      if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).daystage ?? 0) < 5) {
        // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/pavlovsk/resident/vladimir/sex...
        scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/pavlovsk/resident/vladimir/sex/fatherim44.jpg"></center>`);
        scene.text('You\'re not wearing any panties today, and decide to tease your stepfather with it. Moving over to the window you reach for the curtains and begin to rustle them, while the contours of your body are illuminated by the sun. Your clothes are so thin, your stepfather can clearly see the outline of your bare pussy through the semi-transparent clothes. You turn to face him and innocently say "Oh I\'m sorry Daddy, I didn\'t mean to disturb you. Should I go?" It takes him a few seconds to nod, but his greedy look tells you there are a lot of things he would want to do to you right here, right now.');
      }
      if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).daystage ?? 0) >= 5) {
        // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/pavlovsk/resident/vladimir/sex...
        scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/pavlovsk/resident/vladimir/sex/fatherim44.jpg"></center>`);
        scene.text('You\'re not wearing any panties today, and decide to tease your stepfather with it. Moving over to the window you reach for the curtains and begin to rustle them, while the contours of your body are illuminated by the streetlights. Your clothes are so thin, your stepfather can clearly see the outline of your bare pussy through the semi-transparent clothes. You turn to face him and innocently say "Oh I\'m sorry Daddy, I didn\'t mean to disturb you. Should I go?" It takes him a few seconds to nod, but his greedy look tells you there are a lot of things he would want to do to you right here, right now.');
      }
    }
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
            ]);
          }
        }
      } else {
        scene.text('You twirl on the spot, showing off your outfit from all sides.');
        scene.actions([
          { label: 'Move away', goto: ['father', ''] },
        ]);
      }
    }
    scene.actions([
      { label: 'Move away', goto: ['father', ''] },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Move away', goto: ['father', ''] },
    ]);
  } },
      ]);
    }
  }
  scene.actions([
    { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

export const father: LocationDef = {
  name: 'father',
  title: 'Your stepfather, Vladimir Mikhailovich Scriabin',
  region: 'other',
  locationType: 'event',
  description: ['You and your stepfather can\'t stand each other, and spend as little time in the same room as possible.'],
  enter: enter,
};
