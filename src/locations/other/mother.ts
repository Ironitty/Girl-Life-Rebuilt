import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).motherAge = ((s as any).year ?? 0) - ((((s as any).npc_dob ?? 0)?.['A29'] - (((s as any).npc_dob ?? 0)?.['A29'] % 10000)) / 10000);
  if (((s as any).momslut ?? 0) >= 2  &&  ((s as any).npc_rel ?? 0)?.['A29'] < 40) {
    qspCall(s, 'npc_relationship', 'set', 'A29', 40);
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'dinmother', '');
  scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
  // TODO-QSP: dynamic text: Your mother is still quite young and attractive at only <<motherAge>> years old....
  scene.text(`Your mother is still quite young and attractive at only ${((s as any).motherAge ?? 0)} years old. She works at the station cafe.`);
  if ((((s as any).motherKnowWhore ?? 0) > 0  ||  ((s as any).motherKnowSpravka ?? 0) > 0)  &&  ((s as any).npc_QW ?? 0)?.['A29'] === 0) {
    (s as any).npc_QW['A29'] = 1;
  }
  if (((s as any).npc_QW ?? 0)?.['A29'] === 1  &&  ((s as any).npc_rel ?? 0)?.['A29'] > 40) {
    qspCall(s, 'npc_relationship', 'set', 'A29', 40);
  }
  if (((s as any).npc_rel ?? 0)?.['A29'] < 20) {
    // TODO-QSP: dynamic text: Your relationship with your <<$npc_nickname['A29']>> is terrible.
    scene.text(`Your relationship with your ${((s as any).npc_nickname ?? 0)?.['A29']} is terrible.`);
  }
  if (((s as any).npc_rel ?? 0)?.['A29'] >= 20  &&  ((s as any).npc_rel ?? 0)?.['A29'] < 40) {
    // TODO-QSP: dynamic text: Your relationship with your <<$npc_nickname['A29']>> is tense.
    scene.text(`Your relationship with your ${((s as any).npc_nickname ?? 0)?.['A29']} is tense.`);
  }
  if (((s as any).npc_rel ?? 0)?.['A29'] >= 40  &&  ((s as any).npc_rel ?? 0)?.['A29'] < 60) {
    // TODO-QSP: dynamic text: You have a normal relationship with your <<$npc_nickname['A29']>>.
    scene.text(`You have a normal relationship with your ${((s as any).npc_nickname ?? 0)?.['A29']}.`);
  }
  if (((s as any).npc_rel ?? 0)?.['A29'] >= 60  &&  ((s as any).npc_rel ?? 0)?.['A29'] < 80) {
    // TODO-QSP: dynamic text: You have a good relationship with your <<$npc_nickname['A29']>>.
    scene.text(`You have a good relationship with your ${((s as any).npc_nickname ?? 0)?.['A29']}.`);
  }
  if (((s as any).npc_rel ?? 0)?.['A29'] >= 80) {
    // TODO-QSP: dynamic text: You have a great relationship with your <<$npc_nickname['A29']>>.
    scene.text(`You have a great relationship with your ${((s as any).npc_nickname ?? 0)?.['A29']}.`);
  }
  if (((s as any).motherworry ?? 0) === 1) {
    (s as any).motherworry = 0;
    if (((s as any).locat ?? 0)?.['Fam_inGad'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] <= 0) {
      qspCall(s, 'npc_relationship', 'modify', 'A29', 'dislike');
      (s as any).delin_beh = ((s as any).delin_beh ?? 0) + (1);
      if (((s as any).loc ?? 0) === 'gkafe') {
        // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> looks at you from across the cafe counter. "<<$pcs...
        scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} looks at you from across the cafe counter. "${((s as any).pcs_firstname ?? 0)} ${((s as any).pcs_lastname ?? 0)}, where the hell have you been?! I have been worried sick!" She then looks around the cafe. "We'll talk about this when we get home!"`);
      } else {
        // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> looks tired and angry. "Where the hell were you la...
        scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} looks tired and angry. "Where the hell were you last night, young lady?! I waited up all night thinking you'd been abducted or worse! You're still a child and that means you sleep here at home! I don't need another slut for a daughter!"`);
        // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> is still awake, waiting for you to come home. Hear...
        scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} is still awake, waiting for you to come home. Hearing the front door, she comes to the hallway and scolds you.`);
        if (((s as any).motherKnowWhore ?? 0) > 0  ||  ((s as any).motherKnowSpravka ?? 0) > 0) {
          if (((s as any).npc_QW ?? 0)?.['A29'] === 2) {
            // TODO-QSP: dynamic text: "Where have you been, <<$pcs_nickname>>?" she asks. "I hope you weren't doing an...
            scene.text(`"Where have you been, ${((s as any).pcs_nickname ?? 0)}?" she asks. "I hope you weren't doing anything you shouldn't have been?"`);
          } else {
            scene.text('"Why so late?" she asks sarcastically. "Busy whoring yourself on the streets?"');
          }
        } else {
          // TODO-QSP: dynamic text: "Where the hell have you been, <<$pcs_nickname>>?! You shouldn't be out this lat...
          scene.text(`"Where the hell have you been, ${((s as any).pcs_nickname ?? 0)}?! You shouldn't be out this late!"`);
        }
      }
    }
  }
  if (((s as any).loc ?? 0) === 'gkafe') {
    // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> sees you and frowns. "<<$pcs_nickname>>, how many ...
    scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} sees you and frowns. "${((s as any).pcs_nickname ?? 0)}, how many times have I told you not to visit me at work? I have no time for you right now, and there's nothing for young girls like you to do here."`);
    return;
    scene.actions([
      { label: 'Move away from her', goto: ['gkafe', ''] },
    ]);
  }
  if (((s as any).hcolfronce ?? 0) === 0) {
    (s as any).hcolmotherremember = ((s as any).pcs_haircol ?? 0);
    (s as any).hcolfronce = 1;
  }
  if (((s as any).hcolmotherremember ?? 0) !== ((s as any).pcs_haircol ?? 0)) {
    if (((s as any).pcs_haircol ?? 0) === ((s as any).nathcol ?? 0)) {
    } else {
      if (((s as any).pcs_haircol ?? 0) === 1) {
      } else {
        if (((s as any).pcs_haircol ?? 0) === 3) {
        } else {
          qspCall(s, 'npc_relationship', 'modify', 'A29', (-25));
        }
        if (((s as any).pcs_haircol ?? 0) !== ((s as any).nathcol ?? 0)  &&  ((s as any).pcs_haircol ?? 0) <= 3  &&  ((s as any).npc_rel ?? 0)?.['A29'] < 60) {
        } else {
          (s as any).delin_beh = ((s as any).delin_beh ?? 0) + (1);
        }
        // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> immediately notices that you've dyed your hair. "W...
        scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} immediately notices that you've dyed your hair. "Wait a minute, you dyed your hair! ${((s as any).texthcol ?? 0)}"`);
        // TODO-QSP: dynamic text: She runs her fingers through your hair before <<$texthcol2>>
        scene.text(`She runs her fingers through your hair before ${((s as any).texthcol2 ?? 0)}`);
        (s as any).hcolmotherremember = ((s as any).pcs_haircol ?? 0);
      }
      if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).towel ?? 0) === 1  &&  ((s as any).pantyworntype ?? 0) === 'none') {
        qspCall(s, 'npc_relationship', 'modify', 'A29', 'dislike');
        if (((s as any).motherKnowWhore ?? 0) === 0  &&  ((s as any).motherKnowSpravka ?? 0) === 0  &&  ((s as any).npc_QW ?? 0)?.['A29'] === 0) {
          if (((s as any).momslut ?? 0) < 2) {
            // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> looks at you, her eyes open wide in shock.
            scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} looks at you, her eyes open wide in shock.`);
            // TODO-QSP: dynamic text: "<<$pcs_nickname>>, people live here! Aren't you ashamed, walking around naked l...
            scene.text(`"${((s as any).pcs_nickname ?? 0)}, people live here! Aren't you ashamed, walking around naked like that? Get dressed right now!"`);
          } else {
            // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> sees you walking around naked and shakes her head.
            scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} sees you walking around naked and shakes her head.`);
            // TODO-QSP: dynamic text: "<<$pcs_nickname>>, everyone will know you're a whore if they see you like that!...
            scene.text(`"${((s as any).pcs_nickname ?? 0)}, everyone will know you're a whore if they see you like that!"`);
          }
        } else {
          if (((s as any).momslut ?? 0) < 2) {
            // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> looks angrily at you.
            scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} looks angrily at you.`);
            scene.text('"Even at home, my whore of a daughter doesn\'t have the decency to get dressed when people are around! You better get dressed right <i>now</i>! I never want to see this again!"');
          } else {
            // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> sees you walking around naked and shakes her head.
            scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} sees you walking around naked and shakes her head.`);
            // TODO-QSP: dynamic text: "<<$pcs_nickname>>, everyone will know you're a whore if they see you like that!...
            scene.text(`"${((s as any).pcs_nickname ?? 0)}, everyone will know you're a whore if they see you like that!"`);
          }
          if (((s as any).npc_QW ?? 0)?.['A29'] >= 2) {
            // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> looks sternly at your naked figure.
            scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} looks sternly at your naked figure.`);
            // TODO-QSP: dynamic text: "<<$pcs_nickname>>, could you at least put some clothes on while you're at home?...
            scene.text(`"${((s as any).pcs_nickname ?? 0)}, could you at least put some clothes on while you're at home? If you want to impress some fancy man, go do it at his place."`);
          }
          if (((s as any).clothingworntype ?? 0) === 'nude') {
            qspCall(s, 'npc_relationship', 'modify', 'A29', 'dislike');
            if (((s as any).motherKnowWhore ?? 0) === 0  &&  ((s as any).motherKnowSpravka ?? 0) === 0  &&  ((s as any).npc_QW ?? 0)?.['A29'] === 0) {
              // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> looks at you, her eyes open wide in shock.
              scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} looks at you, her eyes open wide in shock.`);
              // TODO-QSP: dynamic text: "<<$pcs_nickname>>, people live here! Aren't you ashamed, walking around naked l...
              scene.text(`"${((s as any).pcs_nickname ?? 0)}, people live here! Aren't you ashamed, walking around naked like that? Get dressed right now!"`);
            } else {
              if (((s as any).motherKnowWhore ?? 0) > 0) {
                // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> looks angrily at you.
                scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} looks angrily at you.`);
                scene.text('"Even at home, my whore of a daughter doesn\'t have the decency to get dressed when people are around! You better get dressed right <i>now</i>! I never want to see this again!"');
              } else {
                // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> shakes her head.
                scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} shakes her head.`);
                // TODO-QSP: dynamic text: "You could at least dress while at home, <<$pcs_nickname>>! Do you want the whol...
                scene.text(`"You could at least dress while at home, ${((s as any).pcs_nickname ?? 0)}! Do you want the whole family to know that you're a whore?"`);
              }
              // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> looks at you sternly.
              scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} looks at you sternly.`);
              // TODO-QSP: dynamic text: "<<$pcs_nickname>>, could you at least put some clothes on while you're at home?...
              scene.text(`"${((s as any).pcs_nickname ?? 0)}, could you at least put some clothes on while you're at home? If you want to impress some fancy man, go do it at his place."`);
            }
          }
          if (((s as any).pcs_piercings ?? 0)?.['tongue'] > 0  &&  ((s as any).motherQW ?? 0)?.['piercing_tongue'] === 0  &&  ((s as any).motherQW ?? 0)?.['piercing_talkday'] !== ((s as any).daystart ?? 0)) {
            (s as any).motherQW['piercing_talkday'] = ((s as any).daystart ?? 0);
            if (Math.floor(Math.random() * 100) + 1 >= 75) {
              // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> sees the glimmer of metal in your mouth. "<<$pcs_n...
              scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} sees the glimmer of metal in your mouth. "${((s as any).pcs_nickname ?? 0)}, what's that in your mouth? I thought I saw something shiny…"`);
              scene.actions([
                { label: 'Nothing!', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You shake your head. "N-nothing <<$npc_nickname['A29']>>! Just a piece of gum I ...
    scene.text(`You shake your head. "N-nothing ${((s as any).npc_nickname ?? 0)?.['A29']}! Just a piece of gum I accidentally swallowed!"`);
    scene.text('You quickly turn and walk away before she has time to second guess you.');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
                { label: 'Show her your pierced tongue', handler: (st: GameState) => {
    (s as any).motherQW['piercing_tongue'] = 1;
    (s as any).delin_beh = ((s as any).delin_beh ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img(`images/pc/body/piercings/a${((s as any).pcs_piercings ?? 0)?.['\'tongue\'']}.jpg`);
    scene.text('You open your mouth and stick out your tongue, showing her your shiny new piercing.');
    // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> clearly disapproves and shakes her head. "Oh <<$pc...
    scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} clearly disapproves and shakes her head. "Oh ${((s as any).pcs_nickname ?? 0)}… You know those things are only worn by slutty women who serve men with their mouths!"`);
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
              ]);
            }
          }
          if (((s as any).pcs_piercings ?? 0)?.['lip'] > 0  &&  ((s as any).motherQW ?? 0)?.['piercing_lip'] === 0  &&  ((s as any).motherQW ?? 0)?.['piercing_talkday'] !== ((s as any).daystart ?? 0)) {
            (s as any).motherQW['piercing_talkday'] = ((s as any).daystart ?? 0);
            // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> notices your new lip piercing and doesn't seem ver...
            scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} notices your new lip piercing and doesn't seem very happy about it. "Why did you get such a thing?"`);
            scene.actions([
              { label: 'I think it looks pretty', handler: (st: GameState) => {
    (s as any).motherQW['piercing_lip'] = 1;
    (s as any).delin_beh = ((s as any).delin_beh ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img(`images/pc/body/piercings/b${((s as any).pcs_piercings ?? 0)?.['\'lip\'']}.jpg`);
    scene.text('You shrug with a sweet smile on your face. "I like it and think it looks cute. Don\'t you agree?"');
    scene.text('She clearly doesn\'t, and walks away without even bothering to answer.');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
            ]);
          }
          if (((s as any).pcs_piercings ?? 0)?.['ears'] > 0  &&  ((s as any).motherQW ?? 0)?.['piercing_ears'] === 0) {
            (s as any).motherQW['piercing_ears'] = 1;
            // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> notices your new earrings and smiles. "I see you d...
            scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} notices your new earrings and smiles. "I see you decided to wear earrings? They're nice and look very cute on you."`);
          }
          if (((s as any).pcs_piercings ?? 0)?.['nose'] > 0  &&  ((s as any).motherQW ?? 0)?.['piercing_nose'] === 0) {
            (s as any).motherQW['piercing_nose'] = 1;
            (s as any).delin_beh = ((s as any).delin_beh ?? 0) + (1);
            // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> looks a bit shocked at your nose ring.
            scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} looks a bit shocked at your nose ring.`);
            // TODO-QSP: dynamic text: "Jesus <<$pcs_nickname>>, what is- why?! I understand putting a ring in a bull's...
            scene.text(`"Jesus ${((s as any).pcs_nickname ?? 0)}, what is- why?! I understand putting a ring in a bull's nose to lead them by, but on a <i>person</i>? There's no reason to do that!"`);
          }
          if (((s as any).pcs_piercings ?? 0)?.['brow'] > 0  &&  ((s as any).motherQW ?? 0)?.['piercing_brow'] === 0) {
            (s as any).motherQW['piercing_brow'] = 1;
            (s as any).delin_beh = ((s as any).delin_beh ?? 0) + (1);
            // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> shakes her head in exasperation when she sees your...
            scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} shakes her head in exasperation when she sees your eyebrow piercing.`);
            // TODO-QSP: dynamic text: "<<$pcs_nickname>>, why would you want that thing in your eyebrow? Kids these da...
            scene.text(`"${((s as any).pcs_nickname ?? 0)}, why would you want that thing in your eyebrow? Kids these days…"`);
          }
          if (((s as any).npc_rel ?? 0)?.['A29'] > 65  &&  ((s as any).mesec ?? 0) > 0  &&  ((s as any).knowpreg ?? 0) === 0  &&  ((s as any).mc_inventory ?? 0)?.['tampons'] === 0  &&  ((s as any).mc_inventory ?? 0)?.['sanitary_pads'] === 0) {
            scene.actions([
              { label: 'Ask for a tampon', handler: (st: GameState) => {
    (s as any).mc_inventory['sanitary_pads'] = ((s as any).mc_inventory['sanitary_pads'] ?? 0) + (3);
    qspCall(s, 'npc_relationship', 'modify', 'A29', (-15));
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    // TODO-QSP: dynamic text: You tell your <<$npc_nickname['A29']>> you're menstruating and have ran out of t...
    scene.text(`You tell your ${((s as any).npc_nickname ?? 0)?.['A29']} you're menstruating and have ran out of tampons.`);
    scene.text('She looks at you knowingly, gives you three sanitary pads from her own supply and sternly tells you to take care of this in advance next time.');
    return;
    scene.actions([
      { label: 'Thank her', goto: ['mother', ''] },
    ]);
  } },
            ]);
          }
          if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === -1) {
            if (((s as any).month ?? 0) === 5  &&  ((s as any).day ?? 0) === 26  &&  ((s as any).hour ?? 0) <= 8) {
              // TODO-QSP: dynamic text: "<<$pcs_nickname>>, make sure you don't miss your graduation today. Your brother...
              scene.text(`"${((s as any).pcs_nickname ?? 0)}, make sure you don't miss your graduation today. Your brother and I will be there to watch you get your diploma."`);
            } else {
              if (((s as any).month ?? 0) === 5  &&  ((s as any).day ?? 0) === 26  &&  ((s as any).hour ?? 0) > 8) {
                // TODO-QSP: dynamic text: "<<$pcs_nickname>>, where have you been? You missed your graduation today! I tol...
                scene.text(`"${((s as any).pcs_nickname ?? 0)}, where have you been? You missed your graduation today! I told everybody that you were sick, so your Principal gave me your diploma," she says as she hands it to you.`);
              } else {
                // TODO-QSP: dynamic text: "<<$pcs_nickname>>, where have you been? You missed your graduation yesterday! I...
                scene.text(`"${((s as any).pcs_nickname ?? 0)}, where have you been? You missed your graduation yesterday! I told everybody that you were sick, so your Principal gave me your diploma," she says as she hands it to you.`);
                if ((((s as any).month ?? 0) === 5  &&  ((s as any).day ?? 0) > 27)  ||  ((s as any).month ?? 0) > 5) {
                  // TODO-QSP: dynamic text: "<<$pcs_nickname>>, where have you been? You missed your graduation! I told ever...
                  scene.text(`"${((s as any).pcs_nickname ?? 0)}, where have you been? You missed your graduation! I told everybody that you were sick, so your Principal gave me your diploma," she says as she hands it to you.`);
                }
                (s as any).gschoolVars['school_diploma'] = 1;
                (s as any).grad_miss = 0;
                (s as any).kanikuli = 7;
                qspCall(s, 'stat', '');
              }
            }
            if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 1  &&  ((s as any).SAtestatGift ?? 0) === 0) {
              if (((s as any).class ?? 0)?.['school_grade_average'] >= 90) {
                qspCall(s, 'npc_relationship', 'modify', 'A29', 40);
                // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> is delighted you graduated. "I'm so proud right no...
                scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} is delighted you graduated. "I'm so proud right now, ${((s as any).pcs_nickname ?? 0)}! All I want to do is see you succeed in life, and graduating from school is a very important step. And you outdid all my expectations! When the Principal mentioned you being the best student of the year I could not have been happier. Your stepfather and I saved some money to reward you for your efforts. Please take this and buy yourself something nice. You've earned it."`);
                // TODO-QSP: dynamic text: She hands you <<$func('money', 'string_profit', 10000)>> and you thank her and g...
                scene.text(`She hands you ${qspFunc(s, 'money', 'string_profit', 10000)} and you thank her and give her a hug.`);
                (s as any).SAtestatGift = 10000;
              } else {
                qspCall(s, 'npc_relationship', 'modify', 'A29', 20);
                // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> is delighted you graduated. "I'm so happy right no...
                scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} is delighted you graduated. "I'm so happy right now, ${((s as any).pcs_nickname ?? 0)}! All I want to do is see you succeed in life, and graduating from school is a very important step. You did really well. Please take this and buy yourself something nice. You've earned it."`);
                // TODO-QSP: dynamic text: She hands you <<$func('money', 'string_profit', 7000)>> and you thank her and gi...
                scene.text(`She hands you ${qspFunc(s, 'money', 'string_profit', 7000)} and you thank her and give her a hug.`);
                (s as any).SAtestatGift = 7000;
                if (((s as any).class ?? 0)?.['school_grade_average'] >= 40) {
                  // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> is delighted you graduated. "I'm so happy right no...
                  scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} is delighted you graduated. "I'm so happy right now, ${((s as any).pcs_nickname ?? 0)}! All I want to do is see you succeed in life, and graduating from school is a very important step. You did really well. Please take this and buy yourself something nice. You've earned it."`);
                  // TODO-QSP: dynamic text: She hands you <<$func('money', 'string_profit', 5000)>> and you thank her and gi...
                  scene.text(`She hands you ${qspFunc(s, 'money', 'string_profit', 5000)} and you thank her and give her a hug.`);
                  (s as any).SAtestatGift = 5000;
                } else {
                  // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> is delighted you graduated. "I'm so happy right no...
                  scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} is delighted you graduated. "I'm so happy right now, ${((s as any).pcs_nickname ?? 0)}! All I want to do is see you succeed in life, and graduating from school is a very important step. To be honest, I wasn't sure you would manage to get your diploma, but you somehow did it. Please take this and buy yourself something nice. You've earned it."`);
                  // TODO-QSP: dynamic text: She hands you <<$func('money', 'string_profit', 3000)>> and you thank her and gi...
                  scene.text(`She hands you ${qspFunc(s, 'money', 'string_profit', 3000)} and you thank her and give her a hug.`);
                  (s as any).SAtestatGift = 3000;
                }
                qspCall(s, 'money', 'earn', ((s as any).SAtestatGift ?? 0), 'cash');
                qspCall(s, 'stat', '');
              }
              if (((s as any).hour ?? 0) > 5) {
                if (((s as any).unintendedabort ?? 0) === 1  &&  ((s as any).pregTalkFamily ?? 0) === 1) {
                  scene.actions([
                    { label: 'Tell her about your miscarriage', goto: ['mother_chats', 'miscarriage_talk1'] },
                  ]);
                }
                if (((s as any).abort ?? 0) === 1  &&  ((s as any).pregTalkFamily ?? 0) === 1) {
                  (s as any).pregTalkFamily = 2;
                  qspCall(s, 'npc_relationship', 'set', 'A29', 0);
                  // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> looks at you through teary eyes, stricken with sad...
                  scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} looks at you through teary eyes, stricken with sadness. "You're such a fool, ${((s as any).pcs_nickname ?? 0)}! Getting an abortion… What if you can't have any more children? Do you think you'll be young and healthy forever? You're going to regret this, I just know it…"`);
                }
                if (((s as any).momslut ?? 0) === 1) {
                  scene.actions([
                    { label: 'Tell her you saw her fucking her boss', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).momslut = 2;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    // TODO-QSP: dynamic text: You tell your <<$npc_nickname['A29']>> about the time you saw her in the back ro...
    scene.text(`You tell your ${((s as any).npc_nickname ?? 0)?.['A29']} about the time you saw her in the back room of the cafe with her boss. She grows noticeably pale and sits on a stool with her head cast down in shame. "And what exactly did you see?"`);
    scene.text('You tell her about how you saw her on her knees deepthroating her boss, and then getting roughly fucked from behind. You decide to leave out the part about how she willingly licked him clean and seemed to be very much into it when you notice the distraught look on her face.');
    // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> sits at the table, speechless. After carefully mul...
    scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} sits at the table, speechless. After carefully mulling over her words at least a dozen times in her mind, she finally speaks. "Well yes, I sleep with Slava. Times are tough, you know? I really need that job and he likes me. But please ${((s as any).pcs_nickname ?? 0)}, don't try to blackmail me. If any of this comes out, it would destroy our family."`);
    // TODO-QSP: dynamic text: You've never seen your <<$npc_nickname['A29']>> this devastated before. She's re...
    scene.text(`You've never seen your ${((s as any).npc_nickname ?? 0)?.['A29']} this devastated before. She's really afraid of the consequences, so you nod reassuringly. "Don't worry ${((s as any).npc_nickname ?? 0)?.['A29']}, your secret is safe with me."`);
    scene.text('She smiles at you gratefully and returns to what she was doing.');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
                  ]);
                }
                if (((s as any).rape_count ?? 0) > 0  &&  ((s as any).rape_day ?? 0)+7 > ((s as any).daystart ?? 0)  &&  ((s as any).rape_talk_mom ?? 0) !== ((s as any).rape_count ?? 0)) {
                  scene.actions([
                    { label: 'Tell her about your rape', goto: ['mother_chats', 'rape_talk'] },
                  ]);
                }
                scene.actions([
                  { label: 'Chat', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 6) + 10);
    qspCall(s, 'npc_relationship', 'modify', 'A29', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    // TODO-QSP: dynamic text: Your mother is still quite young and attractive at only <<motherAge>> years old....
    scene.text(`Your mother is still quite young and attractive at only ${((s as any).motherAge ?? 0)} years old. She works at the station cafe.`);
    if (((s as any).npc_rel ?? 0)?.['A29'] < 20) {
      // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> can't stand you. She avoids you as much as she can...
      scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} can't stand you. She avoids you as much as she can.`);
    }
    if (((s as any).npc_rel ?? 0)?.['A29'] >= 20  &&  ((s as any).npc_rel ?? 0)?.['A29'] < 40) {
      // TODO-QSP: dynamic text: You and your <<$npc_nickname['A29']>> have a tense relationship.
      scene.text(`You and your ${((s as any).npc_nickname ?? 0)?.['A29']} have a tense relationship.`);
    }
    if (((s as any).npc_rel ?? 0)?.['A29'] >= 40  &&  ((s as any).npc_rel ?? 0)?.['A29'] < 60) {
      // TODO-QSP: dynamic text: You have a normal relationship with your <<$npc_nickname['A29']>>.
      scene.text(`You have a normal relationship with your ${((s as any).npc_nickname ?? 0)?.['A29']}.`);
    }
    if (((s as any).npc_rel ?? 0)?.['A29'] >= 60  &&  ((s as any).npc_rel ?? 0)?.['A29'] < 80) {
      // TODO-QSP: dynamic text: You have a good relationship with your <<$npc_nickname['A29']>>.
      scene.text(`You have a good relationship with your ${((s as any).npc_nickname ?? 0)?.['A29']}.`);
    }
    if (((s as any).npc_rel ?? 0)?.['A29'] >= 80) {
      // TODO-QSP: dynamic text: You have a great relationship with your <<$npc_nickname['A29']>>.
      scene.text(`You have a great relationship with your ${((s as any).npc_nickname ?? 0)?.['A29']}.`);
    }
    if (((s as any).npc_rel ?? 0)?.['A29'] < 20) {
      qspCall(s, 'dinmother', 'd_mother[1]');
      return;
    } else {
      qspCall(s, 'dinmother', 'd_mother[2]');
      return;
      if (((s as any).npc_rel ?? 0)?.['A29'] >= 40) {
        qspCall(s, 'dinmother', 'd_mother[3]');
      }
    }
    qspCall(s, 'camera', 'check_person', 'mother');
    if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
      if (((s as any).npc_rel ?? 0)?.['A29'] > 75) {
        scene.actions([
          { label: 'Ask about your real grandparents', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    if (((s as any).loc ?? 0) === 'kuhrPar') {
      // TODO-QSP: dynamic text: Since you were little, your grandparents in Gadukino have always been just that ...
      scene.text(`Since you were little, your grandparents in Gadukino have always been just that to you - your 'grandparents'. It's what your ${((s as any).npc_nickname ?? 0)?.['A29']} told you they are, and what they seemed very happy to be referred to as. You learned sometime later that they're actually your great-grandparents. Your real grandparents - ${((s as any).npc_nickname ?? 0)?.['A29']}'s parents - died when she herself was barely more than a toddler, but she never talks about them.`);
      // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> seems to be in a pretty good mood as she wipes the...
      scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} seems to be in a pretty good mood as she wipes the countertops, so you decide to ask her the question.`);
      // TODO-QSP: dynamic text: "<<$npc_nickname['A29']>>, what were your parents like?"
      scene.text(`"${((s as any).npc_nickname ?? 0)?.['A29']}, what were your parents like?"`);
      scene.text('She stops what she\'s doing and turns to you, clearly surprised by your question. "Where\'s this coming from so suddenly?"');
      scene.text('"I\'m just curious. Do you remember them at all?"');
      // TODO-QSP: dynamic text: She sighs while leaning back against the counter. "It was a long time ago, but I...
      scene.text(`She sighs while leaning back against the counter. "It was a long time ago, but I still remember a little. My mother died giving birth to me, so the most I knew of her was from photos and keepsakes she left for me. She was a very beautiful woman. Grandmother said she always dressed in colorful, flowing skirts and that she caught the eye of quite a few men before she met my father and fell in love. When I look at you, I see a little of her in your features, ${((s as any).pcs_nickname ?? 0)}."`);
      scene.text('"As for my father, I lived with him until I was four. I don\'t remember that much about him, but I do recall he was a tall, solid man. With a big bushy beard, and very blue eyes." She smiles wistfully. "He was very gentle too, and smiled a lot. He would take me for walks in the flower fields after he got home from work, hoisting me up on his shoulders wherever the grass grew too tall. Then, at night, he\'d sit by the fire smoking his pipe and read the paper while I played until bedtime. He called me Zvonochek and I called him Papulia."');
      // TODO-QSP: dynamic text: These memories are old and scant, but your <<$npc_nickname['A29']>>'s eyes spark...
      scene.text(`These memories are old and scant, but your ${((s as any).npc_nickname ?? 0)?.['A29']}'s eyes sparkle and dance as she recalls them, almost as if she'd been transported back to that time. It's strange to see her like this, considering the expressions you're more used to her having, and you find yourself openly staring.`);
      scene.text('"Like many men at the time, he eventually got called to war. I don\'t remember anything beyond him being there one day, and seeing him driving off in the back of a truck the next." She stops and thinks for a moment, her eyes dimming. "Sometime I\'m not even sure I remember that much, or if my mind has filled in the gaps over time. I do recall missing him terribly, and often wishing my grandfather would hoist me on his shoulders like Papulia did." She swallows. "He never came back home. Grandmother told me that they said he was taken prisoner by the Afghans and died in their camp, but his body was never found."');
      // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> turns back around and starts wiping the countertop...
      scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} turns back around and starts wiping the countertop again. You're not sure if she's crying or not, but she doesn't turn back around. "Let's not talk about that anymore…"`);
    } else {
      // TODO-QSP: dynamic text: Since you were little, your grandparents in Gadukino have always been just that ...
      scene.text(`Since you were little, your grandparents in Gadukino have always been just that to you - your 'grandparents'. It's what your ${((s as any).npc_nickname ?? 0)?.['A29']} told you they are, and what they seemed very happy to be referred to as. You learned sometime later that they're actually your great-grandparents. Your real grandparents - ${((s as any).npc_nickname ?? 0)?.['A29']}'s parents - died when she herself was barely more than a toddler. But she never talks about them.`);
      // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> seems to be in a pretty good mood as she watches T...
      scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} seems to be in a pretty good mood as she watches TV, so you decide to ask her the question.`);
      // TODO-QSP: dynamic text: "<<$npc_nickname['A29']>>, what were your parents like?"
      scene.text(`"${((s as any).npc_nickname ?? 0)?.['A29']}, what were your parents like?"`);
      scene.text('She stops watching and turns to you, clearly surprised by your question. "Where\'s this coming from so suddenly?"');
      scene.text('"I\'m just curious. Do you remember them at all?"');
      // TODO-QSP: dynamic text: She sighs while leaning back on the sofa. "It was a long time ago, but I still r...
      scene.text(`She sighs while leaning back on the sofa. "It was a long time ago, but I still remember a little. My mother died giving birth to me, so the most I knew of her was from photos and keepsakes she left for me. She was a very beautiful woman. Grandmother said she always dressed in colorful, flowing skirts and that she caught the eye of quite a few men before she met my father and fell in love. When I look at you, I see a little of her in your features, ${((s as any).pcs_nickname ?? 0)}."`);
      scene.text('"As for my father, I lived with him until I was four. I don\'t remember that much about him, but I do recall he was a tall, solid man. With a big bushy beard, and very blue eyes." She smiles wistfully. "He was very gentle too, and smiled a lot. He would take me for walks in the flower fields after he got home from work, hoisting me up on his shoulders wherever the grass grew too tall. Then, at night, he\'d sit by the fire smoking his pipe and read the paper while I played until bedtime. He called me Zvonochek and I called him Papulia."');
      // TODO-QSP: dynamic text: These memories are old and scant, but your <<$npc_nickname['A29']>>'s eyes spark...
      scene.text(`These memories are old and scant, but your ${((s as any).npc_nickname ?? 0)?.['A29']}'s eyes sparkle and dance as she recalls them, almost as if she'd been transported back to that time. It's strange to see her like this, considering the expressions you're more used to her having, and you find yourself openly staring.`);
      scene.text('"Like many men at the time, he eventually got called to war. I don\'t remember anything beyond him being there one day, and seeing him driving off in the back of a truck the next." She stops and thinks for a moment, her eyes dimming. "Sometime I\'m not even sure I remember that much, or if my mind has filled in the gaps over time. I do recall missing him terribly, and often wishing my grandfather would hoist me on his shoulders like Papulia did." She swallows. "He never came back home. Grandmother told me that they said he was taken prisoner by the Afghans and died in their camp, but his body was never found."');
      scene.text('She suddenly starts watching TV again. "Let\'s not talk about that anymore," she says, her voice sounding a little strained.');
    }
    scene.actions([
      { label: 'Continue', goto: ['mother', ''] },
    ]);
  } },
        ]);
      }
      if (((s as any).hour ?? 0) < 19  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
        scene.actions([
          { label: 'Ask for some new clothes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    // TODO-QSP: dynamic text: You wait until your <<$npc_nickname['A29']>> is in a good mood and quickly swoop...
    scene.text(`You wait until your ${((s as any).npc_nickname ?? 0)?.['A29']} is in a good mood and quickly swoop in. "${((s as any).npc_nickname ?? 0)?.['A29']}, I have nothing nice to wear. Can I please have some new clothes?"`);
    if (((s as any).fame ?? 0)?.['pav_prostitute'] >= 100  &&  ((s as any).motherKnowWhore ?? 0) >= 1) {
      // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> is outraged by the suggestion. "Really <<$pcs_nick...
      scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} is outraged by the suggestion. "Really ${((s as any).pcs_nickname ?? 0)}? You have lots of customers, and you're still asking me for clothes? You should have plenty of whore money to buy them yourself! Besides, I don't know where to buy clothes for a whore."`);
      scene.actions([
        { label: 'Move away from her', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    } else {
      if (((s as any).gschoolVars ?? 0)?.['school_diploma']) {
        // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> shakes her head. "No, you're old enough to earn yo...
        scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} shakes her head. "No, you're old enough to earn your own money and buy your own clothes. Get a job if you want new clothes."`);
        scene.actions([
          { label: 'Continue', goto: ['mother', ''] },
        ]);
      } else {
        if (((s as any).npc_rel ?? 0)?.['A29'] < 80) {
          // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> shakes her head. "Sorry <<$pcs_nickname>>, but mon...
          scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} shakes her head. "Sorry ${((s as any).pcs_nickname ?? 0)}, but money is tight right now. We just can't afford it."`);
          scene.actions([
            { label: 'Continue', goto: ['mother', ''] },
          ]);
        } else {
          if (((s as any).motherClotheMonth ?? 0) === ((s as any).month ?? 0)) {
            // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> shakes her head. "Sorry <<$pcs_nickname>>, our bud...
            scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} shakes her head. "Sorry ${((s as any).pcs_nickname ?? 0)}, our budget is limited and we already went clothes shopping this month. You'll have to manage with what you have in your closet for a little while. Maybe we can go again next month."`);
            scene.actions([
              { label: 'Continue', goto: ['mother', ''] },
            ]);
          } else {
            // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> lets out an exasperated sigh and throws her hands ...
            scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} lets out an exasperated sigh and throws her hands in the air. "Here we go again… ${((s as any).npc_nickname ?? 0)?.['A29']}, I have nothing to wear!" she says, mocking your voice in a high pitch.`);
            // TODO-QSP: dynamic text: You both laugh. "Alright then <<$pcs_nickname>>, let's go see if we can find som...
            scene.text(`You both laugh. "Alright then ${((s as any).pcs_nickname ?? 0)}, let's go see if we can find something."`);
            scene.actions([
              { label: 'Go to the store', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'set', 'A29', 70);
    (s as any).motherClotheMonth = ((s as any).month ?? 0);
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/clothes_shopping.jpg');
    // TODO-QSP: dynamic text: Going clothes shopping with your <<$npc_nickname['A29']>> is always an interesti...
    scene.text(`Going clothes shopping with your ${((s as any).npc_nickname ?? 0)?.['A29']} is always an interesting experience since you never get to pick your own clothes. Instead, she brings you clothes that she thinks would suit you and lets you try them on.`);
    scene.text('You would argue, but her taste in clothing is actually very good and she always picks out cute outfits for you that are quite trendy too. You go straight towards the changing booths, wondering what she\'ll bring you this time.');
    scene.actions([
      { label: 'Try on the clothes she brings you', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/mom/dressing_room.jpg');
    qspCall(s, 'stat', '');
    (s as any).loop_counter = 0;
    // TODO-QSP: :markbuyclomother
    (s as any).loop_counter = ((s as any).loop_counter ?? 0) + (1);
    if (((s as any).loop_counter ?? 0) === 10) {
      // TODO-QSP: dynamic text: After spending half an hour trying on different outfits, you can't find one that...
      scene.text(`After spending half an hour trying on different outfits, you can't find one that you don't already own, that you're willing to wear or that ${((s as any).npc_nickname ?? 0)?.['A29']} likes.`);
      // TODO-QSP: dynamic text: <<$npc_nickname['A29']>> decides that you've spent long enough looking for new c...
      scene.text(`${((s as any).npc_nickname ?? 0)?.['A29']} decides that you've spent long enough looking for new clothes and goes home with you.`);
    } else {
      if (Math.floor(Math.random() * 2) + 0 === 0) {
        (s as any).numrand = Math.floor(Math.random() * 150) + 1;
        if (qspFunc(s, 'clothing', 'is_owned', 'gm_dress', ((s as any).numrand ?? 0))) {
          // TODO-QSP: jump 'markbuyclomother'
        }
        qspCall(s, 'clothing_attributes', 'gm_dress', ((s as any).numrand ?? 0));
        if (((s as any).CloStyle ?? 0) === 4  ||  ((s as any).CloProstitute ?? 0) === 1) {
          // TODO-QSP: jump 'markbuyclomother'
        }
        if (((s as any).CloInhibit ?? 0) > ((s as any).pcs_inhib ?? 0)  ||  ((s as any).CloInhibit ?? 0) > 30) {
          // TODO-QSP: jump 'markbuyclomother'
        }
        qspCall(s, 'clothing', 'add_item', 'gm_dress', ((s as any).numrand ?? 0));
        scene.img(`images/pc/items/gm/dress/${((s as any).numrand ?? 0)}.jpg`);
      } else {
        (s as any).numrand = Math.floor(Math.random() * 150) + 1;
        if (qspFunc(s, 'clothing', 'is_owned', 'gm_outfits', ((s as any).numrand ?? 0))) {
          // TODO-QSP: jump 'markbuyclomother'
        }
        qspCall(s, 'clothing_attributes', 'gm_outfits', ((s as any).numrand ?? 0));
        if (((s as any).CloStyle ?? 0) === 4  ||  ((s as any).CloProstitute ?? 0) === 1) {
          // TODO-QSP: jump 'markbuyclomother'
        }
        if (((s as any).CloInhibit ?? 0) > ((s as any).pcs_inhib ?? 0)  ||  ((s as any).CloInhibit ?? 0) > 30) {
          // TODO-QSP: jump 'markbuyclomother'
        }
        qspCall(s, 'clothing', 'add_item', 'gm_outfits', ((s as any).numrand ?? 0));
        scene.img(`images/pc/items/gm/outfits/${((s as any).numrand ?? 0)}.jpg`);
      }
      // TODO-QSP: dynamic text: You enter a changing booth and spend half an hour trying on various outfits befo...
      scene.text(`You enter a changing booth and spend half an hour trying on various outfits before your ${((s as any).npc_nickname ?? 0)?.['A29']}'s eyes light up and she beams. "This one! This one is perfect!"`);
      // TODO-QSP: dynamic text: She buys the outfit for you and you head back home together. You thank your <<$n...
      scene.text(`She buys the outfit for you and you head back home together. You thank your ${((s as any).npc_nickname ?? 0)?.['A29']} and give her a hug.`);
    }
    scene.actions([
      { label: 'Continue', goto: ['mother', ''] },
    ]);
  } },
    ]);
  } },
            ]);
          }
        }
      }
    }
  } },
        ]);
      }
      if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
        scene.actions([
          { label: 'Offer to help around the house', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'npc_relationship', 'modify', 'A29', Math.floor(Math.random() * 5) + 1);
    qspCall(s, 'mood', 'lower', 'small');
    qspCall(s, 'archetypes', 'gain', 'prude', 'tiny', 'Helping mom around the house', 1);
    (s as any).delin_beh = ((s as any).delin_beh ?? 0) - (1);
    (s as any).TotalMomPom = ((s as any).TotalMomPom ?? 0) + (1);
    qspCall(s, 'stat', '');
    (s as any).MomPom = ((s as any).MomPom ?? 0) + (1);
    // TODO-QSP: :MomPom_jump
    if (((s as any).MomPom ?? 0) === 1) {
      scene.img('images/characters/pavlovsk/resident/mom/dishes.jpg');
      // TODO-QSP: dynamic text: You offer to help your <<$npc_nickname['A29']>> out around the house and she ask...
      scene.text(`You offer to help your ${((s as any).npc_nickname ?? 0)?.['A29']} out around the house and she asks you to do the dishes.`);
      scene.text('You spend an hour washing the dishes in the kitchen.');
    } else {
      scene.img('images/characters/pavlovsk/resident/mom/cooking.jpg');
      // TODO-QSP: dynamic text: You offer to help your <<$npc_nickname['A29']>> out around the house and she ask...
      scene.text(`You offer to help your ${((s as any).npc_nickname ?? 0)?.['A29']} out around the house and she asks you to help cook for tonight's meals.`);
      scene.text('You spend an hour in the kitchen helping out with the cooking.');
      if (((s as any).MomPom ?? 0) === 3) {
        scene.img('images/characters/pavlovsk/resident/mom/sweep.jpg');
        // TODO-QSP: dynamic text: You offer to help your <<$npc_nickname['A29']>> out around the house and she ask...
        scene.text(`You offer to help your ${((s as any).npc_nickname ?? 0)?.['A29']} out around the house and she asks you to clean the floor.`);
        scene.text('You spend an hour sweeping the floors of the apartment.');
      } else {
        scene.img('images/characters/pavlovsk/resident/mom/laundry.jpg');
        // TODO-QSP: dynamic text: You offer to help your <<$npc_nickname['A29']>> out around the house and she ask...
        scene.text(`You offer to help your ${((s as any).npc_nickname ?? 0)?.['A29']} out around the house and she asks you to do a load of laundry.`);
        scene.text('You spend an hour taking a load of clothes to the laundry and washing them before bringing them home and folding them.');
        if (((s as any).MomPom ?? 0) === 5) {
          scene.img('images/characters/pavlovsk/resident/mom/iron.jpg');
          // TODO-QSP: dynamic text: You offer to help your <<$npc_nickname['A29']>> out around the house and she ask...
          scene.text(`You offer to help your ${((s as any).npc_nickname ?? 0)?.['A29']} out around the house and she asks you to iron some clothes.`);
          scene.text('You spend an hour in the hallway ironing clothes.');
        } else {
          if (((s as any).hour ?? 0) < 19) {
            scene.img('images/characters/pavlovsk/resident/mom/grocery.jpg');
            // TODO-QSP: dynamic text: You offer to help your <<$npc_nickname['A29']>> out around the house and she ask...
            scene.text(`You offer to help your ${((s as any).npc_nickname ?? 0)?.['A29']} out around the house and she asks you to run to the store and buy some groceries. You head to the store and purchase them before hauling the bags home.`);
          } else {
            (s as any).MomPom = 1;
            // TODO-QSP: jump 'MomPom_jump'
          }
          if (((s as any).MomPom ?? 0) === 7) {
            if (((s as any).hour ?? 0) < 19) {
              scene.img('images/characters/pavlovsk/resident/mom/pharmacy.jpg');
              // TODO-QSP: dynamic text: You offer to help your <<$npc_nickname['A29']>> out around the house and she ask...
              scene.text(`You offer to help your ${((s as any).npc_nickname ?? 0)?.['A29']} out around the house and she asks you to go to the pharmacy, giving you a list of the items you need. Your aunt Luda works there and always gives your family the medicine you need for free.`);
              // TODO-QSP: dynamic text: When you enter the pharmacy, you see her behind the counter and she smiles when ...
              scene.text(`When you enter the pharmacy, you see her behind the counter and she smiles when she sees you. "Hello ${((s as any).pcs_nickname ?? 0)}, how are you? I hope everything is okay?"`);
              // TODO-QSP: dynamic text: You chat with her before you give her the list your <<$npc_nickname['A29']>> mad...
              scene.text(`You chat with her before you give her the list your ${((s as any).npc_nickname ?? 0)?.['A29']} made.`);
              // TODO-QSP: dynamic text: She quickly gathers the items into a paper bag and hands it over to you. "Here y...
              scene.text(`She quickly gathers the items into a paper bag and hands it over to you. "Here you go, ${((s as any).pcs_nickname ?? 0)}. Have a nice day and tell your mother I said hello!"`);
              // TODO-QSP: dynamic text: You wave goodbye and return home, where you give your <<$npc_nickname['A29']>> t...
              scene.text(`You wave goodbye and return home, where you give your ${((s as any).npc_nickname ?? 0)?.['A29']} the bag.`);
            } else {
              (s as any).MomPom = 1;
              // TODO-QSP: jump 'MomPom_jump'
            }
          } else {
            (s as any).MomPom = 1;
            // TODO-QSP: jump 'MomPom_jump'
          }
          scene.actions([
            { label: 'Continue', goto: ['mother', ''] },
          ]);
        }
      }
      if (((s as any).npc_QW ?? 0)?.['A29'] === 1  &&  ((s as any).npc_rel ?? 0)?.['A29'] >= 20  &&  ((s as any).loc ?? 0) === 'kuhrPar') {
        qspCall(s, 'mother', 'pregreact');
        if (((s as any).npc_pregtalk ?? 0)?.['A29'] === 1) {
          qspCall(s, 'mother', 'abortion_talk');
        }
        qspCall(s, 'mother_chats', 'lover_talks');
        scene.actions([
          { label: 'Try to reconcile', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    (s as any).mqwtRand = Math.floor(Math.random() * 10) + 1;
    if (((s as any).mqwtRand ?? 0) <= 2) {
      // TODO-QSP: gs 'npc_relationship', 'modify', 'A29', -rand(1, 5)
      (s as any).minut = ((s as any).minut ?? 0) + 30;
      // TODO-QSP: dynamic text: You try to talk with your <<$npc_nickname['A29']>> to hopefully patch up your re...
      scene.text(`You try to talk with your ${((s as any).npc_nickname ?? 0)?.['A29']} to hopefully patch up your relationship. You're not sure whether you said something wrong, or whether she's just in a bad mood, but your attempt to reconcile backfires horribly; within seconds, the conversation turns into a screaming contest and your ${((s as any).npc_nickname ?? 0)?.['A29']} ends up disliking you even more.`);
      scene.actions([
        { label: 'Leave her be for now', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    } else {
      qspCall(s, 'npc_relationship', 'modify', 'A29', 'like');
      (s as any).minut = ((s as any).minut ?? 0) + 30;
      // TODO-QSP: dynamic text: You try to talk with your <<$npc_nickname['A29']>> to try and patch up your rela...
      scene.text(`You try to talk with your ${((s as any).npc_nickname ?? 0)?.['A29']} to try and patch up your relationship. Despite your best efforts, the whole conversation consists mainly of her fairly aggressive monologue about morality, diseases and what awaits you in the future if you don't change your ways. Still, there is <i>some</i> improvement in your relationship.`);
      if (((s as any).mqwtRand ?? 0) > 8  &&  ((s as any).npc_rel ?? 0)?.['A29'] >= 40) {
        scene.actions([{ label: 'Continue', goto: ['mother', 'motherQW_2'] }]);
      }
      scene.actions([
        { label: 'Leave her be for now', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    }
  } },
        ]);
      }
      if (((s as any).alko ?? 0) >= 3  &&  ((s as any).alkomday ?? 0) !== ((s as any).daystart ?? 0)) {
        (s as any).alkomday = ((s as any).daystart ?? 0);
        qspCall(s, 'npc_relationship', 'modify', 'A29', 'dislike');
        (s as any).delin_beh = ((s as any).delin_beh ?? 0) + (1);
        // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> can smell the alcohol on your breath and gives you...
        scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} can smell the alcohol on your breath and gives you a lecture. "${((s as any).pcs_nickname ?? 0)}, you're still too young to be drinking! You could get into all sorts of trouble!"`);
      }
      if ((((s as any).cumloc ?? 0)[11] === 1  ||  (((s as any).cumloc ?? 0)[6] === 1  ||  ((s as any).cumloc ?? 0)[7] === 1))  &&  ((s as any).whoremday ?? 0) !== ((s as any).daystart ?? 0)) {
        (s as any).whoremday = ((s as any).daystart ?? 0);
        if (((s as any).motherKnowWhore ?? 0) === 0  &&  ((s as any).motherKnowSpravka ?? 0) === 0  &&  ((s as any).npc_QW ?? 0)?.['A29'] === 0) {
          qspCall(s, 'npc_relationship', 'set', 'A29', 0);
          (s as any).motherKnowWhore = 1;
          (s as any).motherKnowSpravka = 1;
          if (((s as any).momslut ?? 0) < 2) {
            (s as any).delin_beh = ((s as any).delin_beh ?? 0) + (1);
            // TODO-QSP: dynamic text: When you approach her, your <<$npc_nickname['A29']>> sighs exasperatedly and rol...
            scene.text(`When you approach her, your ${((s as any).npc_nickname ?? 0)?.['A29']} sighs exasperatedly and rolls her eyes in disgust. When you look down to see what's got her so angry, you realize you forgot about the cum stains on you. They're quite large, and very recognizable as such.`);
            scene.text('"I tell everyone my younger daughter is decent, but it turns out she sleeps around like a common whore and proudly displays the stains for the whole town to see! Get out of my sight, slut!"');
            scene.text('You can tell she\'s struggling to resist the urge to slap you.');
          } else {
            // TODO-QSP: dynamic text: When you approach her, your <<$npc_nickname['A29']>> quickly pulls you to the si...
            scene.text(`When you approach her, your ${((s as any).npc_nickname ?? 0)?.['A29']} quickly pulls you to the side and gives you a wet washcloth. "Come on ${((s as any).pcs_nickname ?? 0)}, if you don't even wipe the sperm off, then the whole town might find out you're a whore! At least be a little discreet about your sexual activities, will you?"`);
            scene.text('Deeply embarrassed, you apologize and scrub yourself with the washcloth until the stains are no longer visible.');
            (s as any).cumspclnt = 6;
            qspCall(s, 'cum_cleanup', '');
            (s as any).cumspclnt = 9;
            qspCall(s, 'cum_cleanup', '');
            (s as any).cumspclnt = 13;
            qspCall(s, 'cum_cleanup', '');
            (s as any).minut = ((s as any).minut ?? 0) + 5;
          }
          scene.actions([
            { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
          ]);
        } else {
          qspCall(s, 'npc_relationship', 'modify', 'A29', (-20));
          if (((s as any).motherKnowWhore ?? 0) === 0) {
            (s as any).motherKnowWhore = 1;
          }
          if (((s as any).motherKnowSpravka ?? 0) === 0) {
            (s as any).motherKnowSpravka = 1;
          }
          if (((s as any).momslut ?? 0) < 2) {
            (s as any).delin_beh = ((s as any).delin_beh ?? 0) + (1);
            // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> glares at you and you realize she must have notice...
            scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} glares at you and you realize she must have noticed the cum stains on you.`);
            scene.text('"Again, you little whore? I was already so ashamed of you! Get out of my sight!"');
            scene.text('Knowing there\'s nothing you can say to make it better, you simply mumble an apology and quickly leave.');
          } else {
            // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> shakes her head. "Come on <<$pcs_nickname>>, we've...
            scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} shakes her head. "Come on ${((s as any).pcs_nickname ?? 0)}, we've talked about this. The whole town will know you're a whore if you don't even bother washing the sperm off you! Have some decency, I'm begging you."`);
          }
          if (((s as any).npc_QW ?? 0)?.['A29'] >= 2) {
            qspCall(s, 'npc_relationship', 'modify', 'A29', (-20));
            if (((s as any).motherKnowWhore ?? 0) === 0) {
              (s as any).motherKnowWhore = 1;
            }
            if (((s as any).motherKnowSpravka ?? 0) === 0) {
              (s as any).motherKnowSpravka = 1;
            }
            // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> notices the cum on you and looks at you with a tin...
            scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} notices the cum on you and looks at you with a tinge of concern.`);
            // TODO-QSP: dynamic text: "<<$pcs_nickname>>, why do you have to walk around like this? You should at leas...
            scene.text(`"${((s as any).pcs_nickname ?? 0)}, why do you have to walk around like this? You should at least clean up before you go out the door! Quickly, go wash up in the bathroom. Hopefully no one has seen you like this!"`);
            scene.text('Your face turns red and you quietly nod and mumble an apology as you head for the bathroom.');
            scene.actions([
              { label: 'Go to the bathroom', goto: ['vanrPar', ''] },
            ]);
          }
          scene.actions([
            { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
          ]);
        }
        if ((((s as any).clothingworntype ?? 0) === 'moncheri_dress'  ||  ((s as any).clothingworntype ?? 0) === 'moncheri_gown'  ||  ((s as any).clothingworntype ?? 0) === 'fashionista_dress')  &&  ((s as any).hour ?? 0) > 9) {
          // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> looks a bit puzzled at your fancy clothes: "Well w...
          scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} looks a bit puzzled at your fancy clothes: "Well well, look at you… why are you so dressed up? Big plans today?"`);
        }
        if (((s as any).locat ?? 0)?.['Fam_set_month_inGad'] === 1  &&  ((s as any).grandmaQW ?? 0)?.['block'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
          if (((s as any).week ?? 0) === 5) {
            if (((s as any).hour ?? 0) > 9) {
              // TODO-QSP: dynamic text: As your <<$npc_nickname['A29']>> is working on some meals in the kitchen, she re...
              scene.text(`As your ${((s as any).npc_nickname ?? 0)?.['A29']} is working on some meals in the kitchen, she remembers something and looks at you. "Oh ${((s as any).pcs_nickname ?? 0)}, while you're here… We're going to visit your grandparents in Gadukino tomorrow. We leave at noon tomorrow, so if you want to come along, then meet me in the kitchen before then."`);
            }
          } else {
            if (((s as any).hour ?? 0) > 9  &&  ((s as any).hour ?? 0) < 12) {
              // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> is finishing up on some meals before leaving for G...
              scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} is finishing up on some meals before leaving for Gadukino and puts down her work for a second. "Well? Do you want to come with us to Gadukino or would you rather stay home with Anya?"`);
              scene.actions([
                { label: 'Go to Gadukino', goto: ['gad_gphouse', 'to_gadukino'] },
                { label: 'Stay at home', goto: ['korrPar', ''] },
              ]);
            }
          }
        }
        if (((s as any).GspravkaTalked ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).motherKnowSpravka ?? 0) === 0  &&  ((s as any).motherKnowRaped ?? 0) === 0  &&  ((s as any).GspravkaT ?? 0) !== 1  &&  ((((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) <= 21)  ||  (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) <= 21))) {
          scene.actions([{ label: 'Continue', goto: ['mother', 'referral'] }]);
        } else {
          scene.actions([{ label: 'Continue', goto: ['mother', 'referral_pass'] }]);
          if (((s as any).GspravkaT ?? 0) === 2  &&  ((s as any).motherKnowSpravka ?? 0) === 0  &&  ((s as any).motherKnowRaped ?? 0) === 0  &&  ((((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) <= 21)  ||  (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) <= 21))) {
            scene.actions([{ label: 'Continue', goto: ['mother', 'referral_fail'] }]);
          }
          if (((s as any).loc ?? 0) === 'kuhrPar'  ||  ((s as any).loc ?? 0) === 'sitrPar') {
            qspCall(s, 'mother', 'check_workout');
          }
        }
      }
    }
  } },
        ]);
      }
      scene.actions([
        { label: 'Ask for some money', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    // TODO-QSP: dynamic text: You ask your <<$npc_nickname['A29']>> for some money.
    scene.text(`You ask your ${((s as any).npc_nickname ?? 0)?.['A29']} for some money.`);
    if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
      if (((s as any).motherPayDay ?? 0) === ((s as any).daystart ?? 0)) {
        // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> frowns. "Again? Did you forget I already gave you ...
        scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} frowns. "Again? Did you forget I already gave you money today? Don't be greedy!"`);
        scene.actions([
          { label: 'Continue', goto: ['mother', ''] },
        ]);
      } else {
        if (((s as any).npc_rel ?? 0)?.['A29'] >= 80) {
          (s as any).moneyfrommom90 = 300;
          (s as any).moneyfrommom70 = 150;
        } else {
          (s as any).moneyfrommom90 = 250;
          (s as any).moneyfrommom70 = 100;
          if (((s as any).npc_rel ?? 0)?.['A29'] >= 40) {
            (s as any).moneyfrommom90 = 200;
            (s as any).moneyfrommom70 = 50;
          }
          if (((s as any).npc_rel ?? 0)?.['A29'] >= 40) {
            qspCall(s, 'npc_relationship', 'modify', 'A29', 'dislike');
            (s as any).motherPayDay = ((s as any).daystart ?? 0);
            if (((s as any).class ?? 0)?.['school_grade_average'] >= 90) {
              qspCall(s, 'money', 'earn', ((s as any).moneyfrommom90 ?? 0), 'cash');
              // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> smiles and gives you <<$func('money', 'string_prof...
              scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} smiles and gives you ${qspFunc(s, 'money', 'string_profit', ((s as any).moneyfrommom90 ?? 0))}. "Okay ${((s as any).pcs_nickname ?? 0)}, you've earned it. I'm glad you're doing such a good job in school."`);
              scene.actions([
                { label: 'Thank her', goto: ['mother', ''] },
              ]);
            } else {
              qspCall(s, 'money', 'earn', ((s as any).moneyfrommom70 ?? 0), 'cash');
              // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> reluctantly gives you <<$func('money', 'string_pro...
              scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} reluctantly gives you ${qspFunc(s, 'money', 'string_profit', ((s as any).moneyfrommom70 ?? 0))}. "When you do better in school, I'll give you more. In the meantime, this is all you deserve!"`);
              // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> scoffs and shakes her head. "Money?! With how poor...
              scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} scoffs and shakes her head. "Money?! With how poorly you're doing in school, the only thing you deserve is the belt! You can have some money when you improve your grades. Until then, you get nothing."`);
              scene.actions([
                { label: 'Thank her', goto: ['mother', ''] },
                { label: 'Continue', goto: ['mother', ''] },
              ]);
            }
          } else {
            if ((((s as any).motherKnowWhore ?? 0) >= 1  ||  ((s as any).motherKnowSpravka ?? 0) >= 1)  &&  ((s as any).npc_rel ?? 0)?.['A29'] < 40) {
              // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> can't believe you would even ask.
              scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} can't believe you would even ask.`);
              scene.text('"Whores don\'t get money from me!" she shouts in anger. "Run to your stud and ask him!"');
            } else {
              // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> scowls while shaking her head. "Why should I give ...
              scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} scowls while shaking her head. "Why should I give you anything? Go and get a job! You'll get nothing from me."`);
            }
            scene.actions([
              { label: 'Continue', goto: ['mother', ''] },
            ]);
          }
        }
        // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> shakes her head. "You're old enough to earn your o...
        scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} shakes her head. "You're old enough to earn your own money, ${((s as any).pcs_nickname ?? 0)}! You can't keep depending on me forever, so go and get a job."`);
        scene.actions([
          { label: 'Continue', goto: ['mother', ''] },
        ]);
      }
    }
  } },
        { label: 'Ask about your biological father', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    if (((s as any).loc ?? 0) === 'kuhrPar') {
      if (((s as any).npc_rel ?? 0)?.['A29'] < 80) {
        // TODO-QSP: dynamic text: You have no memories of your real father, and are curious about him. When you se...
        scene.text(`You have no memories of your real father, and are curious about him. When you see your ${((s as any).npc_nickname ?? 0)?.['A29']} in the kitchen, you decide to ask. "${((s as any).npc_nickname ?? 0)?.['A29']}… About my real father… What was he like? What happened between you two?"`);
        // TODO-QSP: dynamic text: You seem to have struck a sore spot. Your <<$npc_nickname['A29']>>'s face sadden...
        scene.text(`You seem to have struck a sore spot. Your ${((s as any).npc_nickname ?? 0)?.['A29']}'s face saddens, and it takes her some time to reply. "${((s as any).pcs_nickname ?? 0)}, I don't want to talk about him, it brings back too many bad memories. Just know that Vladimir raised you and Anya as if you were his own daughters."`);
      } else {
        // TODO-QSP: dynamic text: You have no memories of your real father, and are curious about him. When you se...
        scene.text(`You have no memories of your real father, and are curious about him. When you see your ${((s as any).npc_nickname ?? 0)?.['A29']} in the kitchen, you decide to ask. "${((s as any).npc_nickname ?? 0)?.['A29']}… About my real father… What was he like? What happened between you two?"`);
        // TODO-QSP: dynamic text: You seem to have struck a sore spot. Your <<$npc_nickname['A29']>>'s face sadden...
        scene.text(`You seem to have struck a sore spot. Your ${((s as any).npc_nickname ?? 0)?.['A29']}'s face saddens, and it takes her some time to reply. "I have no idea where Mikhail is and what he does now. I haven't seen him in many years. We went to the same school when we were young and started dating, but it was nothing serious. Things weren't great between us, but then I got pregnant with Anya and our parents forced us to get married. We tried to make the most of it, and for a while things didn't seem so bad, but a few months after I had you, we got into a huge argument and decided we couldn't live together any more, so we got divorced." You notice that she doesn't tell you what the argument was about…`);
        scene.text('"A year later, I married Vladimir and we had Kolka together, but Vladimir always treated you and Anya as if you were his own daughters. He looked after you, bathed you, told you stories at night and took you for walks whenever he could." Those memories seem to have cheered her up, and she has a serene smile on her face. "Vladimir really is a wonderful man…" she adds and you thank her for the story.');
      }
    } else {
      if (((s as any).npc_rel ?? 0)?.['A29'] < 80) {
        // TODO-QSP: dynamic text: You have no memories of your real father, and are curious about him. When you se...
        scene.text(`You have no memories of your real father, and are curious about him. When you see your ${((s as any).npc_nickname ?? 0)?.['A29']} watching TV, you decide to ask. "${((s as any).npc_nickname ?? 0)?.['A29']}… About my real father… What was he like? What happened between you two?"`);
        // TODO-QSP: dynamic text: You seem to have struck a sore spot. Your <<$npc_nickname['A29']>>'s face sadden...
        scene.text(`You seem to have struck a sore spot. Your ${((s as any).npc_nickname ?? 0)?.['A29']}'s face saddens, and it takes her some time to reply. "${((s as any).pcs_nickname ?? 0)}, I don't want to talk about him, it brings back too many bad memories. Just know that Vladimir raised you and Anya as if you were his own daughters."`);
      } else {
        // TODO-QSP: dynamic text: You have no memories of your real father, and are curious about him. When you se...
        scene.text(`You have no memories of your real father, and are curious about him. When you see your ${((s as any).npc_nickname ?? 0)?.['A29']} watching TV, you decide to ask. "${((s as any).npc_nickname ?? 0)?.['A29']}… About my real father… What was he like? What happened between you two?"`);
        // TODO-QSP: dynamic text: You seem to have struck a sore spot. Your <<$npc_nickname['A29']>>'s face sadden...
        scene.text(`You seem to have struck a sore spot. Your ${((s as any).npc_nickname ?? 0)?.['A29']}'s face saddens, and it takes her some time to reply. "I have no idea where Mikhail is and what he does now. I haven't seen him in many years. We went to the same school when we were young and started dating, but it was nothing serious. Things weren't great between us, but then I got pregnant with Anya and our parents forced us to get married. We tried to make the most of it, and for a while things didn't seem so bad, but a few months after I had you, we got into a huge argument and decided we couldn't live together any more, so we got divorced." You notice that she doesn't tell you what the argument was about…`);
        scene.text('"A year later, I married Vladimir and we had Kolka together, but Vladimir always treated you and Anya as if you were his own daughters. He looked after you, bathed you, told you stories at night and took you for walks whenever he could." Those memories seem to have cheered her up, and she has a serene smile on her face. "Vladimir really is a wonderful man…" she adds and you thank her for the story.');
      }
    }
    scene.actions([
      { label: 'Continue', goto: ['mother', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Continue', goto: ['mother', ''] },
    ]);
  } },
                ]);
              }
            }
          }
        }
      }
    }
  }
  scene.actions([
    { label: 'Move away from her', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

export const mother: LocationDef = {
  name: 'mother',
  title: '<br>You feel too hungry to do this.',
  region: 'other',
  enter: enter,
};
