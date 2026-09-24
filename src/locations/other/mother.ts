import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).motherAge = ((s as any).year ?? 0) - (((((s as any).npc_dob ?? {})?.['A29'] ?? 0) - ((((s as any).npc_dob ?? {})?.['A29'] ?? 0) % 10000)) / 10000);
  if (((s as any).momslut ?? 0) >= 2  &&  ((s as any).npc_rel ?? 0)?.['A29'] < 40) {
    qspCall(s, 'npc_relationship', 'set', 'A29', 40);
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'dinmother', '');
  scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
  // TODO-QSP: dynamic text: Your mother is still quite young and attractive at only <<motherAge>> years old....
  scene.text(`Your mother is still quite young and attractive at only ${((s as any).motherAge ?? '')} years old. She works at the station cafe.`);
  if ((((s as any).motherKnowWhore ?? 0) > 0  ||  ((s as any).motherKnowSpravka ?? 0) > 0)  &&  ((s as any).npc_QW ?? 0)?.['A29'] === 0) {
    ((s as any).npc_QW = (s as any).npc_QW ?? {})['A29'] = 1;
  }
  if (((s as any).npc_QW ?? 0)?.['A29'] === 1  &&  ((s as any).npc_rel ?? 0)?.['A29'] > 40) {
    qspCall(s, 'npc_relationship', 'set', 'A29', 40);
  }
  if (((s as any).npc_rel ?? 0)?.['A29'] < 20) {
    // TODO-QSP: dynamic text: Your relationship with your <<$npc_nickname[''A29'']>> is terrible.
    scene.text(`Your relationship with your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} is terrible.`);
  }
  if (((s as any).npc_rel ?? 0)?.['A29'] >= 20  &&  ((s as any).npc_rel ?? 0)?.['A29'] < 40) {
    // TODO-QSP: dynamic text: Your relationship with your <<$npc_nickname[''A29'']>> is tense.
    scene.text(`Your relationship with your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} is tense.`);
  }
  if (((s as any).npc_rel ?? 0)?.['A29'] >= 40  &&  ((s as any).npc_rel ?? 0)?.['A29'] < 60) {
    // TODO-QSP: dynamic text: You have a normal relationship with your <<$npc_nickname[''A29'']>>.
    scene.text(`You have a normal relationship with your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')}.`);
  }
  if (((s as any).npc_rel ?? 0)?.['A29'] >= 60  &&  ((s as any).npc_rel ?? 0)?.['A29'] < 80) {
    // TODO-QSP: dynamic text: You have a good relationship with your <<$npc_nickname[''A29'']>>.
    scene.text(`You have a good relationship with your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')}.`);
  }
  if (((s as any).npc_rel ?? 0)?.['A29'] >= 80) {
    // TODO-QSP: dynamic text: You have a great relationship with your <<$npc_nickname[''A29'']>>.
    scene.text(`You have a great relationship with your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')}.`);
  }
  if (((s as any).motherworry ?? 0) === 1) {
    (s as any).motherworry = 0;
    if (((s as any).locat ?? 0)?.['Fam_inGad'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] <= 0) {
      qspCall(s, 'npc_relationship', 'modify', 'A29', 'dislike');
      (s as any).delin_beh = ((s as any).delin_beh ?? 0) + (1);
      if (((s as any).loc ?? 0) === 'gkafe') {
        // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> looks at you from across the cafe counter. "<<$p...
        scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} looks at you from across the cafe counter. "${((s as any).pcs_firstname ?? '')} ${((s as any).pcs_lastname ?? '')}, where the hell have you been?! I have been worried sick!" She then looks around the cafe. "We'll talk about this when we get home!"`);
      } else {
        if (((s as any).hour ?? 0) > 8) {
          // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> looks tired and angry. "Where the hell were you ...
          scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} looks tired and angry. "Where the hell were you last night, young lady?! I waited up all night thinking you'd been abducted or worse! You're still a child and that means you sleep here at home! I don't need another slut for a daughter!"`);
        } else {
          // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> is still awake, waiting for you to come home. He...
          scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} is still awake, waiting for you to come home. Hearing the front door, she comes to the hallway and scolds you.`);
          if (((s as any).motherKnowWhore ?? 0) > 0  ||  ((s as any).motherKnowSpravka ?? 0) > 0) {
            if (((s as any).npc_QW ?? 0)?.['A29'] === 2) {
              // TODO-QSP: dynamic text: "Where have you been, <<$pcs_nickname>>?" she asks. "I hope you weren''t doing a...
              scene.text(`"Where have you been, ${((s as any).pcs_nickname ?? '')}?" she asks. "I hope you weren't doing anything you shouldn't have been?"`);
            } else {
              scene.text('"Why so late?" she asks sarcastically. "Busy whoring yourself on the streets?"');
            }
          } else {
            // TODO-QSP: dynamic text: "Where the hell have you been, <<$pcs_nickname>>?! You shouldn''t be out this la...
            scene.text(`"Where the hell have you been, ${((s as any).pcs_nickname ?? '')}?! You shouldn't be out this late!"`);
          }
        }
      }
    }
  }
  if (((s as any).loc ?? 0) === 'gkafe') {
    // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> sees you and frowns. "<<$pcs_nickname>>, how man...
    scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} sees you and frowns. "${((s as any).pcs_nickname ?? '')}, how many times have I told you not to visit me at work? I have no time for you right now, and there's nothing for young girls like you to do here."`);
    scene.actions([
{ label: 'Move away from her', goto: ['gkafe', ''] },
]);
    return;
  }
  if ((!((s as any).hcolfronce ?? 0))) {
    (s as any).hcolmotherremember = ((s as any).pcs_haircol ?? 0);
    (s as any).hcolfronce = 1;
  }
  if (((s as any).hcolmotherremember ?? 0) !== ((s as any).pcs_haircol ?? 0)) {
    if (((s as any).pcs_haircol ?? 0) === ((s as any).nathcol ?? 0)) {
      (s as any).texthcol = 'Or, rather, un-dyed your hair. Good, you decided to go back to your natural color!';
    } else {
      if ((!((s as any).pcs_haircol ?? 0))) {
        (s as any).texthcol = 'I see you decided to go with black hair?';
      } else {
        if (((s as any).pcs_haircol ?? 0) === 1) {
          (s as any).texthcol = 'I see you decided to become a brunette?';
        } else {
          if (((s as any).pcs_haircol ?? 0) === 2) {
            (s as any).texthcol = 'I see you decided to become a redhead?';
          } else {
            if (((s as any).pcs_haircol ?? 0) === 3) {
              (s as any).texthcol = 'I see you decided to go blonde?';
            } else {
              if (((s as any).pcs_haircol ?? 0) >= 4) {
                qspCall(s, 'npc_relationship', 'modify', 'A29', (-25));
                (s as any).texthcol = 'What were you thinking?! Do you think you\'ll get into university with hair like <i>that</i>?!';
              }
            }
          }
        }
      }
    }
    if (((s as any).pcs_haircol ?? 0) !== ((s as any).nathcol ?? 0)  &&  ((s as any).pcs_haircol ?? 0) <= 3  &&  ((s as any).npc_rel ?? 0)?.['A29'] < 60) {
      (s as any).texthcol2 = 'she frowns. "You should concentrate on your studies, not on how you look!"';
    } else {
      if (((s as any).pcs_haircol ?? 0) !== ((s as any).nathcol ?? 0)  &&  ((s as any).pcs_haircol ?? 0) > 3  &&  ((s as any).npc_rel ?? 0)?.['A29'] < 60) {
        (s as any).delin_beh = ((s as any).delin_beh ?? 0) + (1);
        (s as any).texthcol2 = 'she angrily grabs a handful of it and holds it tightly, but doesn\'t quite pull it. "What a fool you are! Do you want to throw away your future? Get out of my sight!"';
      } else {
        (s as any).texthcol2 = 'smiling. "It looks nice on you. I\'m sure the boys will like it too. Just make sure you keep your grades up."';
      }
    }
    // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> immediately notices that you''ve dyed your hair....
    scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} immediately notices that you've dyed your hair. "Wait a minute, you dyed your hair! ${((s as any).texthcol ?? '')}"`);
    // TODO-QSP: dynamic text: She runs her fingers through your hair before <<$texthcol2>>
    scene.text(`She runs her fingers through your hair before ${((s as any).texthcol2 ?? '')}`);
    (s as any).hcolmotherremember = ((s as any).pcs_haircol ?? 0);
  }
  if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).towel ?? 0) === 1  &&  ((s as any).pantyworntype ?? 0) === 'none') {
    qspCall(s, 'npc_relationship', 'modify', 'A29', 'dislike');
    if (((s as any).motherKnowWhore ?? 0) === 0  &&  ((s as any).motherKnowSpravka ?? 0) === 0  &&  ((s as any).npc_QW ?? 0)?.['A29'] === 0) {
      if (((s as any).momslut ?? 0) < 2) {
        // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> looks at you, her eyes open wide in shock.
        scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} looks at you, her eyes open wide in shock.`);
        // TODO-QSP: dynamic text: "<<$pcs_nickname>>, people live here! Aren''t you ashamed, walking around naked ...
        scene.text(`"${((s as any).pcs_nickname ?? '')}, people live here! Aren't you ashamed, walking around naked like that? Get dressed right now!"`);
      } else {
        // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> sees you walking around naked and shakes her hea...
        scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} sees you walking around naked and shakes her head.`);
        // TODO-QSP: dynamic text: "<<$pcs_nickname>>, everyone will know you''re a whore if they see you like that...
        scene.text(`"${((s as any).pcs_nickname ?? '')}, everyone will know you're a whore if they see you like that!"`);
      }
    } else {
      if ((((s as any).motherKnowWhore ?? 0) > 0  ||  ((s as any).motherKnowSpravka ?? 0) > 0)  &&  ((s as any).npc_QW ?? 0)?.['A29'] === 1) {
        if (((s as any).momslut ?? 0) < 2) {
          // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> looks angrily at you.
          scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} looks angrily at you.`);
          scene.text('"Even at home, my whore of a daughter doesn\'t have the decency to get dressed when people are around! You better get dressed right <i>now</i>! I never want to see this again!"');
        } else {
          // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> sees you walking around naked and shakes her hea...
          scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} sees you walking around naked and shakes her head.`);
          // TODO-QSP: dynamic text: "<<$pcs_nickname>>, everyone will know you''re a whore if they see you like that...
          scene.text(`"${((s as any).pcs_nickname ?? '')}, everyone will know you're a whore if they see you like that!"`);
        }
      } else {
        if (((s as any).npc_QW ?? 0)?.['A29'] >= 2) {
          // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> looks sternly at your naked figure.
          scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} looks sternly at your naked figure.`);
          // TODO-QSP: dynamic text: "<<$pcs_nickname>>, could you at least put some clothes on while you''re at home...
          scene.text(`"${((s as any).pcs_nickname ?? '')}, could you at least put some clothes on while you're at home? If you want to impress some fancy man, go do it at his place."`);
        }
      }
    }
  } else {
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      qspCall(s, 'npc_relationship', 'modify', 'A29', 'dislike');
      if (((s as any).motherKnowWhore ?? 0) === 0  &&  ((s as any).motherKnowSpravka ?? 0) === 0  &&  ((s as any).npc_QW ?? 0)?.['A29'] === 0) {
        // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> looks at you, her eyes open wide in shock.
        scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} looks at you, her eyes open wide in shock.`);
        // TODO-QSP: dynamic text: "<<$pcs_nickname>>, people live here! Aren''t you ashamed, walking around naked ...
        scene.text(`"${((s as any).pcs_nickname ?? '')}, people live here! Aren't you ashamed, walking around naked like that? Get dressed right now!"`);
      } else {
        if ((((s as any).motherKnowWhore ?? 0) > 0  ||  ((s as any).motherKnowSpravka ?? 0) > 0)  &&  ((s as any).npc_QW ?? 0)?.['A29'] === 1) {
          if (((s as any).motherKnowWhore ?? 0) > 0) {
            // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> looks angrily at you.
            scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} looks angrily at you.`);
            scene.text('"Even at home, my whore of a daughter doesn\'t have the decency to get dressed when people are around! You better get dressed right <i>now</i>! I never want to see this again!"');
          } else {
            // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> shakes her head.
            scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} shakes her head.`);
            // TODO-QSP: dynamic text: "You could at least dress while at home, <<$pcs_nickname>>! Do you want the whol...
            scene.text(`"You could at least dress while at home, ${((s as any).pcs_nickname ?? '')}! Do you want the whole family to know that you're a whore?"`);
          }
        } else {
          // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> looks at you sternly.
          scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} looks at you sternly.`);
          // TODO-QSP: dynamic text: "<<$pcs_nickname>>, could you at least put some clothes on while you''re at home...
          scene.text(`"${((s as any).pcs_nickname ?? '')}, could you at least put some clothes on while you're at home? If you want to impress some fancy man, go do it at his place."`);
        }
      }
    }
  }
  if (((s as any).pcs_piercings ?? 0)?.['tongue'] > 0  &&  ((s as any).motherQW ?? 0)?.['piercing_tongue'] === 0  &&  ((s as any).motherQW ?? 0)?.['piercing_talkday'] !== ((s as any).daystart ?? 0)) {
    ((s as any).motherQW = (s as any).motherQW ?? {})['piercing_talkday'] = ((s as any).daystart ?? 0);
    if ((Math.floor(Math.random() * 100) + 1) >= 75) {
      // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> sees the glimmer of metal in your mouth. "<<$pcs...
      scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} sees the glimmer of metal in your mouth. "${((s as any).pcs_nickname ?? '')}, what's that in your mouth? I thought I saw something shiny…"`);
      scene.actions([
        { label: 'Nothing!', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You shake your head. "N-nothing <<$npc_nickname[''A29'']>>! Just a piece of gum ...
    scene.text(`You shake your head. "N-nothing ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}! Just a piece of gum I accidentally swallowed!"`);
    scene.text('You quickly turn and walk away before she has time to second guess you.');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
        { label: 'Show her your pierced tongue', handler: (st: GameState) => {
    ((st as any).motherQW = (st as any).motherQW ?? {})['piercing_tongue'] = 1;
    (st as any).delin_beh = ((st as any).delin_beh ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img(`images/pc/body/piercings/a${(((st as any).pcs_piercings ?? 0)?.['tongue'] ?? '')}.jpg`);
    scene.text('You open your mouth and stick out your tongue, showing her your shiny new piercing.');
    // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> clearly disapproves and shakes her head. "Oh <<$...
    scene.text(`Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} clearly disapproves and shakes her head. "Oh ${((st as any).pcs_nickname ?? '')}… You know those things are only worn by slutty women who serve men with their mouths!"`);
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      ]);
    }
  }
  if (((s as any).pcs_piercings ?? 0)?.['lip'] > 0  &&  ((s as any).motherQW ?? 0)?.['piercing_lip'] === 0  &&  ((s as any).motherQW ?? 0)?.['piercing_talkday'] !== ((s as any).daystart ?? 0)) {
    ((s as any).motherQW = (s as any).motherQW ?? {})['piercing_talkday'] = ((s as any).daystart ?? 0);
    // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> notices your new lip piercing and doesn''t seem ...
    scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} notices your new lip piercing and doesn't seem very happy about it. "Why did you get such a thing?"`);
    scene.actions([
      { label: 'I think it looks pretty', handler: (st: GameState) => {
    ((st as any).motherQW = (st as any).motherQW ?? {})['piercing_lip'] = 1;
    (st as any).delin_beh = ((st as any).delin_beh ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img(`images/pc/body/piercings/b${(((st as any).pcs_piercings ?? 0)?.['lip'] ?? '')}.jpg`);
    scene.text('You shrug with a sweet smile on your face. "I like it and think it looks cute. Don\'t you agree?"');
    scene.text('She clearly doesn\'t, and walks away without even bothering to answer.');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_piercings ?? 0)?.['ears'] > 0  &&  ((s as any).motherQW ?? 0)?.['piercing_ears'] === 0) {
    ((s as any).motherQW = (s as any).motherQW ?? {})['piercing_ears'] = 1;
    // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> notices your new earrings and smiles. "I see you...
    scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} notices your new earrings and smiles. "I see you decided to wear earrings? They're nice and look very cute on you."`);
  }
  if (((s as any).pcs_piercings ?? 0)?.['nose'] > 0  &&  ((s as any).motherQW ?? 0)?.['piercing_nose'] === 0) {
    ((s as any).motherQW = (s as any).motherQW ?? {})['piercing_nose'] = 1;
    (s as any).delin_beh = ((s as any).delin_beh ?? 0) + (1);
    // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> looks a bit shocked at your nose ring.
    scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} looks a bit shocked at your nose ring.`);
    // TODO-QSP: dynamic text: "Jesus <<$pcs_nickname>>, what is- why?! I understand putting a ring in a bull''...
    scene.text(`"Jesus ${((s as any).pcs_nickname ?? '')}, what is- why?! I understand putting a ring in a bull's nose to lead them by, but on a <i>person</i>? There's no reason to do that!"`);
  }
  if (((s as any).pcs_piercings ?? 0)?.['brow'] > 0  &&  ((s as any).motherQW ?? 0)?.['piercing_brow'] === 0) {
    ((s as any).motherQW = (s as any).motherQW ?? {})['piercing_brow'] = 1;
    (s as any).delin_beh = ((s as any).delin_beh ?? 0) + (1);
    // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> shakes her head in exasperation when she sees yo...
    scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} shakes her head in exasperation when she sees your eyebrow piercing.`);
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, why would you want that thing in your eyebrow? Kids these da...
    scene.text(`"${((s as any).pcs_nickname ?? '')}, why would you want that thing in your eyebrow? Kids these days…"`);
  }
  if (((s as any).npc_rel ?? 0)?.['A29'] > 65  &&  ((s as any).mesec ?? 0) > 0  &&  ((s as any).knowpreg ?? 0) === 0  &&  ((s as any).mc_inventory ?? 0)?.['tampons'] === 0  &&  ((s as any).mc_inventory ?? 0)?.['sanitary_pads'] === 0) {
    scene.actions([
      { label: 'Ask for a tampon', handler: (st: GameState) => {
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['sanitary_pads'] = ((st as any).mc_inventory['sanitary_pads'] ?? 0) + (3);
    qspCall(st, 'npc_relationship', 'modify', 'A29', (-15));
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    // TODO-QSP: dynamic text: You tell your <<$npc_nickname[''A29'']>> you''re menstruating and have ran out o...
    scene.text(`You tell your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} you're menstruating and have ran out of tampons.`);
    scene.text('She looks at you knowingly, gives you three sanitary pads from her own supply and sternly tells you to take care of this in advance next time.');
    scene.actions([
{ label: 'Thank her', goto: ['mother', ''] },
]);
    return;
  } },
    ]);
  }
  if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === -1) {
    if (((s as any).month ?? 0) === 5  &&  ((s as any).day ?? 0) === 26  &&  ((s as any).hour ?? 0) <= 8) {
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>, make sure you don''t miss your graduation today. Your brothe...
      scene.text(`"${((s as any).pcs_nickname ?? '')}, make sure you don't miss your graduation today. Your brother and I will be there to watch you get your diploma."`);
    } else {
      if (((s as any).month ?? 0) === 5  &&  ((s as any).day ?? 0) === 26  &&  ((s as any).hour ?? 0) > 8) {
        // TODO-QSP: dynamic text: "<<$pcs_nickname>>, where have you been? You missed your graduation today! I tol...
        scene.text(`"${((s as any).pcs_nickname ?? '')}, where have you been? You missed your graduation today! I told everybody that you were sick, so your Principal gave me your diploma," she says as she hands it to you.`);
      } else {
        if (((s as any).month ?? 0) === 5  &&  ((s as any).day ?? 0) === 27) {
          // TODO-QSP: dynamic text: "<<$pcs_nickname>>, where have you been? You missed your graduation yesterday! I...
          scene.text(`"${((s as any).pcs_nickname ?? '')}, where have you been? You missed your graduation yesterday! I told everybody that you were sick, so your Principal gave me your diploma," she says as she hands it to you.`);
        } else {
          if ((((s as any).month ?? 0) === 5  &&  ((s as any).day ?? 0) > 27)  ||  ((s as any).month ?? 0) > 5) {
            // TODO-QSP: dynamic text: "<<$pcs_nickname>>, where have you been? You missed your graduation! I told ever...
            scene.text(`"${((s as any).pcs_nickname ?? '')}, where have you been? You missed your graduation! I told everybody that you were sick, so your Principal gave me your diploma," she says as she hands it to you.`);
          }
        }
      }
      ((s as any).gschoolVars = (s as any).gschoolVars ?? {})['school_diploma'] = 1;
      (s as any).grad_miss = 0;
      (s as any).kanikuli = 7;
      qspCall(s, 'stat', '');
    }
  }
  if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 1  &&  (!((s as any).SAtestatGift ?? 0))) {
    if (((s as any).class ?? 0)?.['school_grade_average'] >= 90) {
      qspCall(s, 'npc_relationship', 'modify', 'A29', 40);
      // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> is delighted you graduated. "I''m so proud right...
      scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} is delighted you graduated. "I'm so proud right now, ${((s as any).pcs_nickname ?? '')}! All I want to do is see you succeed in life, and graduating from school is a very important step. And you outdid all my expectations! When the Principal mentioned you being the best student of the year I could not have been happier. Your stepfather and I saved some money to reward you for your efforts. Please take this and buy yourself something nice. You've earned it."`);
      // TODO-QSP: dynamic text: She hands you <<$func(''money'', ''string_profit'', 10000)>> and you thank her a...
      scene.text(`She hands you ${qspFunc(s, 'money', 'string_profit', 10000)} and you thank her and give her a hug.`);
      (s as any).SAtestatGift = 10000;
    } else {
      if (((s as any).class ?? 0)?.['school_grade_average'] >= 70) {
        qspCall(s, 'npc_relationship', 'modify', 'A29', 20);
        // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> is delighted you graduated. "I''m so happy right...
        scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} is delighted you graduated. "I'm so happy right now, ${((s as any).pcs_nickname ?? '')}! All I want to do is see you succeed in life, and graduating from school is a very important step. You did really well. Please take this and buy yourself something nice. You've earned it."`);
        // TODO-QSP: dynamic text: She hands you <<$func(''money'', ''string_profit'', 7000)>> and you thank her an...
        scene.text(`She hands you ${qspFunc(s, 'money', 'string_profit', 7000)} and you thank her and give her a hug.`);
        (s as any).SAtestatGift = 7000;
      } else {
        if (((s as any).class ?? 0)?.['school_grade_average'] >= 40) {
          // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> is delighted you graduated. "I''m so happy right...
          scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} is delighted you graduated. "I'm so happy right now, ${((s as any).pcs_nickname ?? '')}! All I want to do is see you succeed in life, and graduating from school is a very important step. You did really well. Please take this and buy yourself something nice. You've earned it."`);
          // TODO-QSP: dynamic text: She hands you <<$func(''money'', ''string_profit'', 5000)>> and you thank her an...
          scene.text(`She hands you ${qspFunc(s, 'money', 'string_profit', 5000)} and you thank her and give her a hug.`);
          (s as any).SAtestatGift = 5000;
        } else {
          // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> is delighted you graduated. "I''m so happy right...
          scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} is delighted you graduated. "I'm so happy right now, ${((s as any).pcs_nickname ?? '')}! All I want to do is see you succeed in life, and graduating from school is a very important step. To be honest, I wasn't sure you would manage to get your diploma, but you somehow did it. Please take this and buy yourself something nice. You've earned it."`);
          // TODO-QSP: dynamic text: She hands you <<$func(''money'', ''string_profit'', 3000)>> and you thank her an...
          scene.text(`She hands you ${qspFunc(s, 'money', 'string_profit', 3000)} and you thank her and give her a hug.`);
          (s as any).SAtestatGift = 3000;
        }
      }
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
      // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> looks at you through teary eyes, stricken with s...
      scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} looks at you through teary eyes, stricken with sadness. "You're such a fool, ${((s as any).pcs_nickname ?? '')}! Getting an abortion… What if you can't have any more children? Do you think you'll be young and healthy forever? You're going to regret this, I just know it…"`);
    }
    if (((s as any).momslut ?? 0) === 1) {
      scene.actions([
        { label: 'Tell her you saw her fucking her boss', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).momslut = 2;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    // TODO-QSP: dynamic text: You tell your <<$npc_nickname[''A29'']>> about the time you saw her in the back ...
    scene.text(`You tell your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} about the time you saw her in the back room of the cafe with her boss. She grows noticeably pale and sits on a stool with her head cast down in shame. "And what exactly did you see?"`);
    scene.text('You tell her about how you saw her on her knees deepthroating her boss, and then getting roughly fucked from behind. You decide to leave out the part about how she willingly licked him clean and seemed to be very much into it when you notice the distraught look on her face.');
    // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> sits at the table, speechless. After carefully m...
    scene.text(`Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} sits at the table, speechless. After carefully mulling over her words at least a dozen times in her mind, she finally speaks. "Well yes, I sleep with Slava. Times are tough, you know? I really need that job and he likes me. But please ${((st as any).pcs_nickname ?? '')}, don't try to blackmail me. If any of this comes out, it would destroy our family."`);
    // TODO-QSP: dynamic text: You''ve never seen your <<$npc_nickname[''A29'']>> this devastated before. She''...
    scene.text(`You've never seen your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} this devastated before. She's really afraid of the consequences, so you nod reassuringly. "Don't worry ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}, your secret is safe with me."`);
    scene.text('She smiles at you gratefully and returns to what she was doing.');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      ]);
    }
    if (((s as any).rape_count ?? 0) > 0  &&  ((s as any).rape_day ?? 0)+7 > ((s as any).daystart ?? 0)  &&  ((s as any).rape_talk_mom ?? 0) !== ((s as any).rape_count ?? 0)) {
      scene.actions([
        { label: 'Tell her about your rape', handler: (st: GameState) => {
    qspGoto(st, 'mother_chats', 'rape_talk');
  } },
      ]);
    }
    qspCall(s, 'camera', 'check_person', 'mother');
    if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
      scene.actions([
        { label: 'Ask for some money', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    // TODO-QSP: dynamic text: You ask your <<$npc_nickname[''A29'']>> for some money.
    scene.text(`You ask your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} for some money.`);
    if (((st as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
      if (((st as any).motherPayDay ?? 0) === ((st as any).daystart ?? 0)) {
        // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> frowns. "Again? Did you forget I already gave yo...
        scene.text(`Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} frowns. "Again? Did you forget I already gave you money today? Don't be greedy!"`);
        scene.actions([
          { label: 'Continue', goto: ['mother', ''] },
        ]);
      } else {
        if (((st as any).npc_rel ?? 0)?.['A29'] >= 80) {
          (st as any).moneyfrommom90 = 300;
          (st as any).moneyfrommom70 = 150;
        } else {
          if (((st as any).npc_rel ?? 0)?.['A29'] >= 60) {
            (st as any).moneyfrommom90 = 250;
            (st as any).moneyfrommom70 = 100;
          } else {
            if (((st as any).npc_rel ?? 0)?.['A29'] >= 40) {
              (st as any).moneyfrommom90 = 200;
              (st as any).moneyfrommom70 = 50;
            }
          }
        }
        if (((st as any).npc_rel ?? 0)?.['A29'] >= 40) {
          qspCall(st, 'npc_relationship', 'modify', 'A29', 'dislike');
          (st as any).motherPayDay = ((st as any).daystart ?? 0);
          if (((st as any).class ?? 0)?.['school_grade_average'] >= 90) {
            qspCall(st, 'money', 'earn', ((st as any).moneyfrommom90 ?? 0), 'cash');
            // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> smiles and gives you <<$func(''money'', ''string...
            scene.text(`Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} smiles and gives you ${qspFunc(s, 'money', 'string_profit', ((st as any).moneyfrommom90 ?? ''))}. "Okay ${((st as any).pcs_nickname ?? '')}, you've earned it. I'm glad you're doing such a good job in school."`);
            scene.actions([
              { label: 'Thank her', goto: ['mother', ''] },
            ]);
          } else {
            if (((st as any).class ?? 0)?.['school_grade_average'] >= 70) {
              qspCall(st, 'money', 'earn', ((st as any).moneyfrommom70 ?? 0), 'cash');
              // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> reluctantly gives you <<$func(''money'', ''strin...
              scene.text(`Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} reluctantly gives you ${qspFunc(s, 'money', 'string_profit', ((st as any).moneyfrommom70 ?? ''))}. "When you do better in school, I'll give you more. In the meantime, this is all you deserve!"`);
              scene.actions([
                { label: 'Thank her', goto: ['mother', ''] },
              ]);
            } else {
              // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> scoffs and shakes her head. "Money?! With how po...
              scene.text(`Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} scoffs and shakes her head. "Money?! With how poorly you're doing in school, the only thing you deserve is the belt! You can have some money when you improve your grades. Until then, you get nothing."`);
              scene.actions([
                { label: 'Continue', goto: ['mother', ''] },
              ]);
            }
          }
        } else {
          if ((((st as any).motherKnowWhore ?? 0) >= 1  ||  ((st as any).motherKnowSpravka ?? 0) >= 1)  &&  ((st as any).npc_rel ?? 0)?.['A29'] < 40) {
            // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> can''t believe you would even ask.
            scene.text(`Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} can't believe you would even ask.`);
            scene.text('"Whores don\'t get money from me!" she shouts in anger. "Run to your stud and ask him!"');
          } else {
            // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> scowls while shaking her head. "Why should I giv...
            scene.text(`Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} scowls while shaking her head. "Why should I give you anything? Go and get a job! You'll get nothing from me."`);
          }
          scene.actions([
            { label: 'Continue', goto: ['mother', ''] },
          ]);
        }
      }
    } else {
      // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> shakes her head. "You''re old enough to earn you...
      scene.text(`Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} shakes her head. "You're old enough to earn your own money, ${((st as any).pcs_nickname ?? '')}! You can't keep depending on me forever, so go and get a job."`);
      scene.actions([
        { label: 'Continue', goto: ['mother', ''] },
      ]);
    }
  } },
      ]);
    }
    if (((s as any).npc_rel ?? 0)?.['A29'] > 75) {
      scene.actions([
        { label: 'Ask about your real grandparents', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    if (((st as any).loc ?? 0) === 'kuhrPar') {
      // TODO-QSP: dynamic text: Since you were little, your grandparents in Gadukino have always been just that ...
      scene.text(`Since you were little, your grandparents in Gadukino have always been just that to you - your 'grandparents'. It's what your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} told you they are, and what they seemed very happy to be referred to as. You learned sometime later that they're actually your great-grandparents. Your real grandparents - ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}'s parents - died when she herself was barely more than a toddler, but she never talks about them.`);
      // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> seems to be in a pretty good mood as she wipes t...
      scene.text(`Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} seems to be in a pretty good mood as she wipes the countertops, so you decide to ask her the question.`);
      // TODO-QSP: dynamic text: "<<$npc_nickname[''A29'']>>, what were your parents like?"
      scene.text(`"${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}, what were your parents like?"`);
      scene.text('She stops what she\'s doing and turns to you, clearly surprised by your question. "Where\'s this coming from so suddenly?"');
      scene.text('"I\'m just curious. Do you remember them at all?"');
      // TODO-QSP: dynamic text: She sighs while leaning back against the counter. "It was a long time ago, but I...
      scene.text(`She sighs while leaning back against the counter. "It was a long time ago, but I still remember a little. My mother died giving birth to me, so the most I knew of her was from photos and keepsakes she left for me. She was a very beautiful woman. Grandmother said she always dressed in colorful, flowing skirts and that she caught the eye of quite a few men before she met my father and fell in love. When I look at you, I see a little of her in your features, ${((st as any).pcs_nickname ?? '')}."`);
      scene.text('"As for my father, I lived with him until I was four. I don\'t remember that much about him, but I do recall he was a tall, solid man. With a big bushy beard, and very blue eyes." She smiles wistfully. "He was very gentle too, and smiled a lot. He would take me for walks in the flower fields after he got home from work, hoisting me up on his shoulders wherever the grass grew too tall. Then, at night, he\'d sit by the fire smoking his pipe and read the paper while I played until bedtime. He called me Zvonochek and I called him Papulia."');
      // TODO-QSP: dynamic text: These memories are old and scant, but your <<$npc_nickname[''A29'']>>''s eyes sp...
      scene.text(`These memories are old and scant, but your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}'s eyes sparkle and dance as she recalls them, almost as if she'd been transported back to that time. It's strange to see her like this, considering the expressions you're more used to her having, and you find yourself openly staring.`);
      scene.text('"Like many men at the time, he eventually got called to war. I don\'t remember anything beyond him being there one day, and seeing him driving off in the back of a truck the next." She stops and thinks for a moment, her eyes dimming. "Sometime I\'m not even sure I remember that much, or if my mind has filled in the gaps over time. I do recall missing him terribly, and often wishing my grandfather would hoist me on his shoulders like Papulia did." She swallows. "He never came back home. Grandmother told me that they said he was taken prisoner by the Afghans and died in their camp, but his body was never found."');
      // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> turns back around and starts wiping the countert...
      scene.text(`Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} turns back around and starts wiping the countertop again. You're not sure if she's crying or not, but she doesn't turn back around. "Let's not talk about that anymore…"`);
    } else {
      // TODO-QSP: dynamic text: Since you were little, your grandparents in Gadukino have always been just that ...
      scene.text(`Since you were little, your grandparents in Gadukino have always been just that to you - your 'grandparents'. It's what your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} told you they are, and what they seemed very happy to be referred to as. You learned sometime later that they're actually your great-grandparents. Your real grandparents - ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}'s parents - died when she herself was barely more than a toddler. But she never talks about them.`);
      // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> seems to be in a pretty good mood as she watches...
      scene.text(`Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} seems to be in a pretty good mood as she watches TV, so you decide to ask her the question.`);
      // TODO-QSP: dynamic text: "<<$npc_nickname[''A29'']>>, what were your parents like?"
      scene.text(`"${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}, what were your parents like?"`);
      scene.text('She stops watching and turns to you, clearly surprised by your question. "Where\'s this coming from so suddenly?"');
      scene.text('"I\'m just curious. Do you remember them at all?"');
      // TODO-QSP: dynamic text: She sighs while leaning back on the sofa. "It was a long time ago, but I still r...
      scene.text(`She sighs while leaning back on the sofa. "It was a long time ago, but I still remember a little. My mother died giving birth to me, so the most I knew of her was from photos and keepsakes she left for me. She was a very beautiful woman. Grandmother said she always dressed in colorful, flowing skirts and that she caught the eye of quite a few men before she met my father and fell in love. When I look at you, I see a little of her in your features, ${((st as any).pcs_nickname ?? '')}."`);
      scene.text('"As for my father, I lived with him until I was four. I don\'t remember that much about him, but I do recall he was a tall, solid man. With a big bushy beard, and very blue eyes." She smiles wistfully. "He was very gentle too, and smiled a lot. He would take me for walks in the flower fields after he got home from work, hoisting me up on his shoulders wherever the grass grew too tall. Then, at night, he\'d sit by the fire smoking his pipe and read the paper while I played until bedtime. He called me Zvonochek and I called him Papulia."');
      // TODO-QSP: dynamic text: These memories are old and scant, but your <<$npc_nickname[''A29'']>>''s eyes sp...
      scene.text(`These memories are old and scant, but your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}'s eyes sparkle and dance as she recalls them, almost as if she'd been transported back to that time. It's strange to see her like this, considering the expressions you're more used to her having, and you find yourself openly staring.`);
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
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    // TODO-QSP: dynamic text: You wait until your <<$npc_nickname[''A29'']>> is in a good mood and quickly swo...
    scene.text(`You wait until your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} is in a good mood and quickly swoop in. "${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}, I have nothing nice to wear. Can I please have some new clothes?"`);
    if (((st as any).fame ?? 0)?.['pav_prostitute'] >= 100  &&  ((st as any).motherKnowWhore ?? 0) >= 1) {
      // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> is outraged by the suggestion. "Really <<$pcs_ni...
      scene.text(`Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} is outraged by the suggestion. "Really ${((st as any).pcs_nickname ?? '')}? You have lots of customers, and you're still asking me for clothes? You should have plenty of whore money to buy them yourself! Besides, I don't know where to buy clothes for a whore."`);
      scene.actions([
        { label: 'Move away from her', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
      ]);
    } else {
      if (((st as any).gschoolVars ?? 0)?.['school_diploma']) {
        // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> shakes her head. "No, you''re old enough to earn...
        scene.text(`Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} shakes her head. "No, you're old enough to earn your own money and buy your own clothes. Get a job if you want new clothes."`);
        scene.actions([
          { label: 'Continue', goto: ['mother', ''] },
        ]);
      } else {
        if (((st as any).npc_rel ?? 0)?.['A29'] < 80) {
          // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> shakes her head. "Sorry <<$pcs_nickname>>, but m...
          scene.text(`Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} shakes her head. "Sorry ${((st as any).pcs_nickname ?? '')}, but money is tight right now. We just can't afford it."`);
          scene.actions([
            { label: 'Continue', goto: ['mother', ''] },
          ]);
        } else {
          if (((st as any).motherClotheMonth ?? 0) === ((st as any).month ?? 0)) {
            // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> shakes her head. "Sorry <<$pcs_nickname>>, our b...
            scene.text(`Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} shakes her head. "Sorry ${((st as any).pcs_nickname ?? '')}, our budget is limited and we already went clothes shopping this month. You'll have to manage with what you have in your closet for a little while. Maybe we can go again next month."`);
            scene.actions([
              { label: 'Continue', goto: ['mother', ''] },
            ]);
          } else {
            // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> lets out an exasperated sigh and throws her hand...
            scene.text(`Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} lets out an exasperated sigh and throws her hands in the air. "Here we go again… ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}, I have nothing to wear!" she says, mocking your voice in a high pitch.`);
            // TODO-QSP: dynamic text: You both laugh. "Alright then <<$pcs_nickname>>, let''s go see if we can find so...
            scene.text(`You both laugh. "Alright then ${((st as any).pcs_nickname ?? '')}, let's go see if we can find something."`);
            scene.actions([
              { label: 'Go to the store', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'set', 'A29', 70);
    (st as any).motherClotheMonth = ((st as any).month ?? 0);
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/clothes_shopping.jpg');
    // TODO-QSP: dynamic text: Going clothes shopping with your <<$npc_nickname[''A29'']>> is always an interes...
    scene.text(`Going clothes shopping with your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} is always an interesting experience since you never get to pick your own clothes. Instead, she brings you clothes that she thinks would suit you and lets you try them on.`);
    scene.text('You would argue, but her taste in clothing is actually very good and she always picks out cute outfits for you that are quite trendy too. You go straight towards the changing booths, wondering what she\'ll bring you this time.');
    scene.actions([
      { label: 'Try on the clothes she brings you', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/mom/dressing_room.jpg');
    qspCall(st, 'stat', '');
    (st as any).loop_counter = 0;
    // TODO-QSP: :markbuyclomother
    (st as any).loop_counter = ((st as any).loop_counter ?? 0) + (1);
    if (((st as any).loop_counter ?? 0) === 10) {
      // TODO-QSP: dynamic text: After spending half an hour trying on different outfits, you can''t find one tha...
      scene.text(`After spending half an hour trying on different outfits, you can't find one that you don't already own, that you're willing to wear or that ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} likes.`);
      // TODO-QSP: dynamic text: <<$npc_nickname[''A29'']>> decides that you''ve spent long enough looking for ne...
      scene.text(`${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} decides that you've spent long enough looking for new clothes and goes home with you.`);
    } else {
      if ((!(Math.floor(Math.random() * 2) + 0))) {
        (st as any).numrand = (Math.floor(Math.random() * 150) + 1);
        if (qspFunc(s, 'clothing', 'is_owned', 'gm_dress', ((st as any).numrand ?? 0))) {
          // TODO-QSP: jump 'markbuyclomother'
        }
        qspCall(st, 'clothing_attributes', 'gm_dress', ((st as any).numrand ?? 0));
        if (((st as any).CloStyle ?? 0) === 4  ||  ((st as any).CloProstitute ?? 0) === 1) {
          // TODO-QSP: jump 'markbuyclomother'
        }
        if (((st as any).CloInhibit ?? 0) > ((st as any).pcs_inhib ?? 0)  ||  ((st as any).CloInhibit ?? 0) > 30) {
          // TODO-QSP: jump 'markbuyclomother'
        }
        qspCall(st, 'clothing', 'add_item', 'gm_dress', ((st as any).numrand ?? 0));
        scene.img(`images/pc/items/gm/dress/${((st as any).numrand ?? '')}.jpg`);
      } else {
        (st as any).numrand = (Math.floor(Math.random() * 150) + 1);
        if (qspFunc(s, 'clothing', 'is_owned', 'gm_outfits', ((st as any).numrand ?? 0))) {
          // TODO-QSP: jump 'markbuyclomother'
        }
        qspCall(st, 'clothing_attributes', 'gm_outfits', ((st as any).numrand ?? 0));
        if (((st as any).CloStyle ?? 0) === 4  ||  ((st as any).CloProstitute ?? 0) === 1) {
          // TODO-QSP: jump 'markbuyclomother'
        }
        if (((st as any).CloInhibit ?? 0) > ((st as any).pcs_inhib ?? 0)  ||  ((st as any).CloInhibit ?? 0) > 30) {
          // TODO-QSP: jump 'markbuyclomother'
        }
        qspCall(st, 'clothing', 'add_item', 'gm_outfits', ((st as any).numrand ?? 0));
        scene.img(`images/pc/items/gm/outfits/${((st as any).numrand ?? '')}.jpg`);
      }
      // TODO-QSP: dynamic text: You enter a changing booth and spend half an hour trying on various outfits befo...
      scene.text(`You enter a changing booth and spend half an hour trying on various outfits before your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}'s eyes light up and she beams. "This one! This one is perfect!"`);
      // TODO-QSP: dynamic text: She buys the outfit for you and you head back home together. You thank your <<$n...
      scene.text(`She buys the outfit for you and you head back home together. You thank your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} and give her a hug.`);
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
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    qspCall(st, 'npc_relationship', 'modify', 'A29', (Math.floor(Math.random() * 5) + 1));
    qspCall(st, 'mood', 'lower', 'small');
    qspCall(st, 'archetypes', 'gain', 'prude', 'tiny', 'Helping mom around the house', 1);
    (st as any).delin_beh = ((st as any).delin_beh ?? 0) - (1);
    (st as any).TotalMomPom = ((st as any).TotalMomPom ?? 0) + (1);
    qspCall(st, 'stat', '');
    (st as any).MomPom = ((st as any).MomPom ?? 0) + (1);
    // TODO-QSP: :MomPom_jump
    if (((st as any).MomPom ?? 0) === 1) {
      scene.img('images/characters/pavlovsk/resident/mom/dishes.jpg');
      // TODO-QSP: dynamic text: You offer to help your <<$npc_nickname[''A29'']>> out around the house and she a...
      scene.text(`You offer to help your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} out around the house and she asks you to do the dishes.`);
      scene.text('You spend an hour washing the dishes in the kitchen.');
    } else {
      if (((st as any).MomPom ?? 0) === 2) {
        scene.img('images/characters/pavlovsk/resident/mom/cooking.jpg');
        // TODO-QSP: dynamic text: You offer to help your <<$npc_nickname[''A29'']>> out around the house and she a...
        scene.text(`You offer to help your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} out around the house and she asks you to help cook for tonight's meals.`);
        scene.text('You spend an hour in the kitchen helping out with the cooking.');
      } else {
        if (((st as any).MomPom ?? 0) === 3) {
          scene.img('images/characters/pavlovsk/resident/mom/sweep.jpg');
          // TODO-QSP: dynamic text: You offer to help your <<$npc_nickname[''A29'']>> out around the house and she a...
          scene.text(`You offer to help your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} out around the house and she asks you to clean the floor.`);
          scene.text('You spend an hour sweeping the floors of the apartment.');
        } else {
          if (((st as any).MomPom ?? 0) === 4) {
            scene.img('images/characters/pavlovsk/resident/mom/laundry.jpg');
            // TODO-QSP: dynamic text: You offer to help your <<$npc_nickname[''A29'']>> out around the house and she a...
            scene.text(`You offer to help your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} out around the house and she asks you to do a load of laundry.`);
            scene.text('You spend an hour taking a load of clothes to the laundry and washing them before bringing them home and folding them.');
          } else {
            if (((st as any).MomPom ?? 0) === 5) {
              scene.img('images/characters/pavlovsk/resident/mom/iron.jpg');
              // TODO-QSP: dynamic text: You offer to help your <<$npc_nickname[''A29'']>> out around the house and she a...
              scene.text(`You offer to help your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} out around the house and she asks you to iron some clothes.`);
              scene.text('You spend an hour in the hallway ironing clothes.');
            } else {
              if (((st as any).MomPom ?? 0) === 6) {
                if (((st as any).hour ?? 0) < 19) {
                  scene.img('images/characters/pavlovsk/resident/mom/grocery.jpg');
                  // TODO-QSP: dynamic text: You offer to help your <<$npc_nickname[''A29'']>> out around the house and she a...
                  scene.text(`You offer to help your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} out around the house and she asks you to run to the store and buy some groceries. You head to the store and purchase them before hauling the bags home.`);
                } else {
                  (st as any).MomPom = 1;
                  // TODO-QSP: jump 'MomPom_jump'
                }
              } else {
                if (((st as any).MomPom ?? 0) === 7) {
                  if (((st as any).hour ?? 0) < 19) {
                    scene.img('images/characters/pavlovsk/resident/mom/pharmacy.jpg');
                    // TODO-QSP: dynamic text: You offer to help your <<$npc_nickname[''A29'']>> out around the house and she a...
                    scene.text(`You offer to help your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} out around the house and she asks you to go to the pharmacy, giving you a list of the items you need. Your aunt Luda works there and always gives your family the medicine you need for free.`);
                    // TODO-QSP: dynamic text: When you enter the pharmacy, you see her behind the counter and she smiles when ...
                    scene.text(`When you enter the pharmacy, you see her behind the counter and she smiles when she sees you. "Hello ${((st as any).pcs_nickname ?? '')}, how are you? I hope everything is okay?"`);
                    // TODO-QSP: dynamic text: You chat with her before you give her the list your <<$npc_nickname[''A29'']>> m...
                    scene.text(`You chat with her before you give her the list your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} made.`);
                    // TODO-QSP: dynamic text: She quickly gathers the items into a paper bag and hands it over to you. "Here y...
                    scene.text(`She quickly gathers the items into a paper bag and hands it over to you. "Here you go, ${((st as any).pcs_nickname ?? '')}. Have a nice day and tell your mother I said hello!"`);
                    // TODO-QSP: dynamic text: You wave goodbye and return home, where you give your <<$npc_nickname[''A29'']>>...
                    scene.text(`You wave goodbye and return home, where you give your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} the bag.`);
                  } else {
                    (st as any).MomPom = 1;
                    // TODO-QSP: jump 'MomPom_jump'
                  }
                } else {
                  if (((st as any).MomPom ?? 0) === 8) {
                    (st as any).MomPom = 1;
                    // TODO-QSP: jump 'MomPom_jump'
                  }
                }
              }
            }
          }
        }
      }
    }
    scene.actions([
      { label: 'Continue', goto: ['mother', ''] },
    ]);
  } },
      ]);
    }
    if (((s as any).npc_QW ?? 0)?.['A29'] === 1  &&  ((s as any).npc_rel ?? 0)?.['A29'] >= 20  &&  ((s as any).loc ?? 0) === 'kuhrPar') {
      scene.actions([
        { label: 'Try to reconcile', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    (st as any).mqwtRand = (Math.floor(Math.random() * 10) + 1);
    if (((st as any).mqwtRand ?? 0) <= 2) {
      qspCall(st, 'npc_relationship', 'modify', 'A29', -(Math.floor(Math.random() * 5) + 1));
      (st as any).minut = ((st as any).minut ?? 0) + 30;
      // TODO-QSP: dynamic text: You try to talk with your <<$npc_nickname[''A29'']>> to hopefully patch up your ...
      scene.text(`You try to talk with your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} to hopefully patch up your relationship. You're not sure whether you said something wrong, or whether she's just in a bad mood, but your attempt to reconcile backfires horribly; within seconds, the conversation turns into a screaming contest and your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} ends up disliking you even more.`);
      scene.actions([
        { label: 'Leave her be for now', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
      ]);
    } else {
      if (((st as any).mqwtRand ?? 0) > 2  &&  ((st as any).mqwtRand ?? 0) <= 8) {
        qspCall(st, 'npc_relationship', 'modify', 'A29', 'like');
        (st as any).minut = ((st as any).minut ?? 0) + 30;
        // TODO-QSP: dynamic text: You try to talk with your <<$npc_nickname[''A29'']>> to try and patch up your re...
        scene.text(`You try to talk with your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} to try and patch up your relationship. Despite your best efforts, the whole conversation consists mainly of her fairly aggressive monologue about morality, diseases and what awaits you in the future if you don't change your ways. Still, there is <i>some</i> improvement in your relationship.`);
        scene.actions([
          { label: 'Leave her be for now', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
        ]);
      } else {
        if (((st as any).mqwtRand ?? 0) > 8  &&  ((st as any).npc_rel ?? 0)?.['A29'] >= 40) {
          qspGoto(st, 'mother', 'motherQW_2');
        }
      }
    }
  } },
      ]);
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPregreact(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).npc_pregtalk ?? 0)?.['A29'] === 1) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAbortionTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    qspCall(s, 'mother_chats', 'lover_talks');
    scene.actions([
      { label: 'Chat', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + ((Math.floor(Math.random() * 6) + 10));
    qspCall(st, 'npc_relationship', 'modify', 'A29', 'like');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    // TODO-QSP: dynamic text: Your mother is still quite young and attractive at only <<motherAge>> years old....
    scene.text(`Your mother is still quite young and attractive at only ${((st as any).motherAge ?? '')} years old. She works at the station cafe.`);
    if (((st as any).npc_rel ?? 0)?.['A29'] < 20) {
      // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> can''t stand you. She avoids you as much as she ...
      scene.text(`Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} can't stand you. She avoids you as much as she can.`);
    }
    if (((st as any).npc_rel ?? 0)?.['A29'] >= 20  &&  ((st as any).npc_rel ?? 0)?.['A29'] < 40) {
      // TODO-QSP: dynamic text: You and your <<$npc_nickname[''A29'']>> have a tense relationship.
      scene.text(`You and your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} have a tense relationship.`);
    }
    if (((st as any).npc_rel ?? 0)?.['A29'] >= 40  &&  ((st as any).npc_rel ?? 0)?.['A29'] < 60) {
      // TODO-QSP: dynamic text: You have a normal relationship with your <<$npc_nickname[''A29'']>>.
      scene.text(`You have a normal relationship with your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}.`);
    }
    if (((st as any).npc_rel ?? 0)?.['A29'] >= 60  &&  ((st as any).npc_rel ?? 0)?.['A29'] < 80) {
      // TODO-QSP: dynamic text: You have a good relationship with your <<$npc_nickname[''A29'']>>.
      scene.text(`You have a good relationship with your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}.`);
    }
    if (((st as any).npc_rel ?? 0)?.['A29'] >= 80) {
      // TODO-QSP: dynamic text: You have a great relationship with your <<$npc_nickname[''A29'']>>.
      scene.text(`You have a great relationship with your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}.`);
    }
    if (((st as any).npc_rel ?? 0)?.['A29'] < 20) {
      qspCall(st, 'dinmother', 'd_mother[1]');
      return;
    } else {
      if (((st as any).npc_rel ?? 0)?.['A29'] >= 20  &&  ((st as any).npc_rel ?? 0)?.['A29']<40) {
        qspCall(st, 'dinmother', 'd_mother[2]');
        return;
      } else {
        if (((st as any).npc_rel ?? 0)?.['A29'] >= 40) {
          qspCall(st, 'dinmother', 'd_mother[3]');
        }
      }
    }
    scene.actions([
      { label: 'Continue', goto: ['mother', ''] },
    ]);
  } },
      { label: 'Ask about your biological father', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    if (((st as any).loc ?? 0) === 'kuhrPar') {
      if (((st as any).npc_rel ?? 0)?.['A29'] < 80) {
        // TODO-QSP: dynamic text: You have no memories of your real father, and are curious about him. When you se...
        scene.text(`You have no memories of your real father, and are curious about him. When you see your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} in the kitchen, you decide to ask. "${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}… About my real father… What was he like? What happened between you two?"`);
        // TODO-QSP: dynamic text: You seem to have struck a sore spot. Your <<$npc_nickname[''A29'']>>''s face sad...
        scene.text(`You seem to have struck a sore spot. Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}'s face saddens, and it takes her some time to reply. "${((st as any).pcs_nickname ?? '')}, I don't want to talk about him, it brings back too many bad memories. Just know that Vladimir raised you and Anya as if you were his own daughters."`);
      } else {
        // TODO-QSP: dynamic text: You have no memories of your real father, and are curious about him. When you se...
        scene.text(`You have no memories of your real father, and are curious about him. When you see your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} in the kitchen, you decide to ask. "${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}… About my real father… What was he like? What happened between you two?"`);
        // TODO-QSP: dynamic text: You seem to have struck a sore spot. Your <<$npc_nickname[''A29'']>>''s face sad...
        scene.text(`You seem to have struck a sore spot. Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}'s face saddens, and it takes her some time to reply. "I have no idea where Mikhail is and what he does now. I haven't seen him in many years. We went to the same school when we were young and started dating, but it was nothing serious. Things weren't great between us, but then I got pregnant with Anya and our parents forced us to get married. We tried to make the most of it, and for a while things didn't seem so bad, but a few months after I had you, we got into a huge argument and decided we couldn't live together any more, so we got divorced." You notice that she doesn't tell you what the argument was about…`);
        scene.text('"A year later, I married Vladimir and we had Kolka together, but Vladimir always treated you and Anya as if you were his own daughters. He looked after you, bathed you, told you stories at night and took you for walks whenever he could." Those memories seem to have cheered her up, and she has a serene smile on her face. "Vladimir really is a wonderful man…" she adds and you thank her for the story.');
      }
    } else {
      if (((st as any).npc_rel ?? 0)?.['A29'] < 80) {
        // TODO-QSP: dynamic text: You have no memories of your real father, and are curious about him. When you se...
        scene.text(`You have no memories of your real father, and are curious about him. When you see your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} watching TV, you decide to ask. "${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}… About my real father… What was he like? What happened between you two?"`);
        // TODO-QSP: dynamic text: You seem to have struck a sore spot. Your <<$npc_nickname[''A29'']>>''s face sad...
        scene.text(`You seem to have struck a sore spot. Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}'s face saddens, and it takes her some time to reply. "${((st as any).pcs_nickname ?? '')}, I don't want to talk about him, it brings back too many bad memories. Just know that Vladimir raised you and Anya as if you were his own daughters."`);
      } else {
        // TODO-QSP: dynamic text: You have no memories of your real father, and are curious about him. When you se...
        scene.text(`You have no memories of your real father, and are curious about him. When you see your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} watching TV, you decide to ask. "${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}… About my real father… What was he like? What happened between you two?"`);
        // TODO-QSP: dynamic text: You seem to have struck a sore spot. Your <<$npc_nickname[''A29'']>>''s face sad...
        scene.text(`You seem to have struck a sore spot. Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}'s face saddens, and it takes her some time to reply. "I have no idea where Mikhail is and what he does now. I haven't seen him in many years. We went to the same school when we were young and started dating, but it was nothing serious. Things weren't great between us, but then I got pregnant with Anya and our parents forced us to get married. We tried to make the most of it, and for a while things didn't seem so bad, but a few months after I had you, we got into a huge argument and decided we couldn't live together any more, so we got divorced." You notice that she doesn't tell you what the argument was about…`);
        scene.text('"A year later, I married Vladimir and we had Kolka together, but Vladimir always treated you and Anya as if you were his own daughters. He looked after you, bathed you, told you stories at night and took you for walks whenever he could." Those memories seem to have cheered her up, and she has a serene smile on her face. "Vladimir really is a wonderful man…" she adds and you thank her for the story.');
      }
    }
    scene.actions([
      { label: 'Continue', goto: ['mother', ''] },
    ]);
  } },
    ]);
  }
  if (((s as any).alko ?? 0) >= 3  &&  ((s as any).alkomday ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).alkomday = ((s as any).daystart ?? 0);
    qspCall(s, 'npc_relationship', 'modify', 'A29', 'dislike');
    (s as any).delin_beh = ((s as any).delin_beh ?? 0) + (1);
    // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> can smell the alcohol on your breath and gives y...
    scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} can smell the alcohol on your breath and gives you a lecture. "${((s as any).pcs_nickname ?? '')}, you're still too young to be drinking! You could get into all sorts of trouble!"`);
  }
  if ((((s as any).cumloc ?? 0)[11] === 1  ||  (((s as any).cumloc ?? 0)[6] === 1  ||  ((s as any).cumloc ?? 0)[7] === 1))  &&  ((s as any).whoremday ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).whoremday = ((s as any).daystart ?? 0);
    if (((s as any).motherKnowWhore ?? 0) === 0  &&  ((s as any).motherKnowSpravka ?? 0) === 0  &&  ((s as any).npc_QW ?? 0)?.['A29'] === 0) {
      qspCall(s, 'npc_relationship', 'set', 'A29', 0);
      (s as any).motherKnowWhore = 1;
      (s as any).motherKnowSpravka = 1;
      if (((s as any).momslut ?? 0) < 2) {
        (s as any).delin_beh = ((s as any).delin_beh ?? 0) + (1);
        // TODO-QSP: dynamic text: When you approach her, your <<$npc_nickname[''A29'']>> sighs exasperatedly and r...
        scene.text(`When you approach her, your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} sighs exasperatedly and rolls her eyes in disgust. When you look down to see what's got her so angry, you realize you forgot about the cum stains on you. They're quite large, and very recognizable as such.`);
        scene.text('"I tell everyone my younger daughter is decent, but it turns out she sleeps around like a common whore and proudly displays the stains for the whole town to see! Get out of my sight, slut!"');
        scene.text('You can tell she\'s struggling to resist the urge to slap you.');
      } else {
        // TODO-QSP: dynamic text: When you approach her, your <<$npc_nickname[''A29'']>> quickly pulls you to the ...
        scene.text(`When you approach her, your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} quickly pulls you to the side and gives you a wet washcloth. "Come on ${((s as any).pcs_nickname ?? '')}, if you don't even wipe the sperm off, then the whole town might find out you're a whore! At least be a little discreet about your sexual activities, will you?"`);
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
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
      ]);
    } else {
      if ((((s as any).motherKnowWhore ?? 0) > 0  ||  ((s as any).motherKnowSpravka ?? 0) > 0)  &&  ((s as any).npc_QW ?? 0)?.['A29'] === 1) {
        qspCall(s, 'npc_relationship', 'modify', 'A29', (-20));
        if ((!((s as any).motherKnowWhore ?? 0))) {
          (s as any).motherKnowWhore = 1;
        }
        if ((!((s as any).motherKnowSpravka ?? 0))) {
          (s as any).motherKnowSpravka = 1;
        }
        if (((s as any).momslut ?? 0) < 2) {
          (s as any).delin_beh = ((s as any).delin_beh ?? 0) + (1);
          // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> glares at you and you realize she must have noti...
          scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} glares at you and you realize she must have noticed the cum stains on you.`);
          scene.text('"Again, you little whore? I was already so ashamed of you! Get out of my sight!"');
          scene.text('Knowing there\'s nothing you can say to make it better, you simply mumble an apology and quickly leave.');
        } else {
          // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> shakes her head. "Come on <<$pcs_nickname>>, we'...
          scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} shakes her head. "Come on ${((s as any).pcs_nickname ?? '')}, we've talked about this. The whole town will know you're a whore if you don't even bother washing the sperm off you! Have some decency, I'm begging you."`);
        }
        scene.actions([
          { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
        ]);
      } else {
        if (((s as any).npc_QW ?? 0)?.['A29'] >= 2) {
          qspCall(s, 'npc_relationship', 'modify', 'A29', (-20));
          if ((!((s as any).motherKnowWhore ?? 0))) {
            (s as any).motherKnowWhore = 1;
          }
          if ((!((s as any).motherKnowSpravka ?? 0))) {
            (s as any).motherKnowSpravka = 1;
          }
          // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> notices the cum on you and looks at you with a t...
          scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} notices the cum on you and looks at you with a tinge of concern.`);
          // TODO-QSP: dynamic text: "<<$pcs_nickname>>, why do you have to walk around like this? You should at leas...
          scene.text(`"${((s as any).pcs_nickname ?? '')}, why do you have to walk around like this? You should at least clean up before you go out the door! Quickly, go wash up in the bathroom. Hopefully no one has seen you like this!"`);
          scene.text('Your face turns red and you quietly nod and mumble an apology as you head for the bathroom.');
          scene.actions([
            { label: 'Go to the bathroom', goto: ['vanrPar', ''] },
          ]);
        }
      }
    }
  }
  if ((((s as any).clothingworntype ?? 0) === 'moncheri_dress'  ||  ((s as any).clothingworntype ?? 0) === 'moncheri_gown'  ||  ((s as any).clothingworntype ?? 0) === 'fashionista_dress')  &&  ((s as any).hour ?? 0) > 9) {
    // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> looks a bit puzzled at your fancy clothes: "Well...
    scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} looks a bit puzzled at your fancy clothes: "Well well, look at you… why are you so dressed up? Big plans today?"`);
  }
  if (((s as any).locat ?? 0)?.['Fam_set_month_inGad'] === 1  &&  ((s as any).grandmaQW ?? 0)?.['block'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
    if (((s as any).week ?? 0) === 5) {
      if (((s as any).hour ?? 0) > 9) {
        // TODO-QSP: dynamic text: As your <<$npc_nickname[''A29'']>> is working on some meals in the kitchen, she ...
        scene.text(`As your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} is working on some meals in the kitchen, she remembers something and looks at you. "Oh ${((s as any).pcs_nickname ?? '')}, while you're here… We're going to visit your grandparents in Gadukino tomorrow. We leave at noon tomorrow, so if you want to come along, then meet me in the kitchen before then."`);
      }
    } else {
      if (((s as any).week ?? 0) === 6) {
        if (((s as any).hour ?? 0) > 9  &&  ((s as any).hour ?? 0) < 12) {
          // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> is finishing up on some meals before leaving for...
          scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} is finishing up on some meals before leaving for Gadukino and puts down her work for a second. "Well? Do you want to come with us to Gadukino or would you rather stay home with Anya?"`);
          scene.actions([
            { label: 'Go to Gadukino', goto: ['gad_gphouse', 'to_gadukino'] },
            { label: 'Stay at home', goto: ['korrPar', ''] },
          ]);
        }
      }
    }
  }
  if (((s as any).GspravkaTalked ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).motherKnowSpravka ?? 0) === 0  &&  ((s as any).motherKnowRaped ?? 0) === 0  &&  ((s as any).GspravkaT ?? 0) !== 1  &&  ((((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) <= 21)  ||  (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) <= 21))) {
    qspGoto(s, 'mother', 'referral');
  } else {
    if (((s as any).Gspassed ?? 0) === 1  &&  ((s as any).motherKnowRaped ?? 0) === 0  &&  ((((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) <= 21)  ||  (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) <= 21))) {
      qspGoto(s, 'mother', 'referral_pass');
    } else {
      if (((s as any).GspravkaT ?? 0) === 2  &&  ((s as any).motherKnowSpravka ?? 0) === 0  &&  ((s as any).motherKnowRaped ?? 0) === 0  &&  ((((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) <= 21)  ||  (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) <= 21))) {
        qspGoto(s, 'mother', 'referral_fail');
      }
    }
  }
  if (((s as any).loc ?? 0) === 'kuhrPar'  ||  ((s as any).loc ?? 0) === 'sitrPar') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCheckWorkout(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Move away from her', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterCheckWorkout(s: GameState, scene: SceneBuilder): void {
  if (((s as any).motherQW ?? 0)?.['workout'] !== 1) {
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Ask ' + String((((s as any).npc_nickname ?? 0)?.['A29'] ?? '') ?? '') + ' to workout sometime', goto: ['mother', 'ask_mother_workout'] },
    ]);
  }
  if ((((s as any).PCloStyle ?? 0) === 5  ||  ((s as any).PCloStyle2 ?? 0) === 6  ||  ((s as any).PCloSport ?? 0) === 1)  &&  ((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 12  &&  ((s as any).motherQW ?? 0)?.['workout'] === 1  &&  ((s as any).motherQW ?? 0)?.['workout_day'] !== ((s as any).daystart ?? 0)) {
    if (((s as any).pcs_energy ?? 0) < 10) {
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Ask ' + String((((s as any).npc_nickname ?? 0)?.['A29'] ?? '') ?? '') + ' to workout', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too hungry to do this.')
  } },
      ]);
    } else {
      if (((s as any).loc ?? 0) === 'kuhrPar'  ||  ((s as any).loc ?? 0) === 'sitrPar') {
        scene.actions([
          { label: '', labelFn: (s: GameState) => 'Ask ' + String((((s as any).npc_nickname ?? 0)?.['A29'] ?? '') ?? '') + ' to workout', goto: ['mother', 'mother_workout_pav'] },
        ]);
      } else {
        if (((s as any).loc ?? 0) === 'gad_gphouse') {
          scene.actions([
            { label: '', labelFn: (s: GameState) => 'Ask ' + String((((s as any).npc_nickname ?? 0)?.['A29'] ?? '') ?? '') + ' to workout', goto: ['mother', 'mother_workout_gad'] },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterReferral(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  if (((s as any).GspravkaT ?? 0) === 0  &&  ((s as any).GspravkaTimes ?? 0) >= 3  &&  ((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) <= 21) {
    qspCall(s, 'npc_relationship', 'modify', 'A29', 'dislike');
    if (((s as any).GspravkaTimes ?? 0) === 3) {
      (s as any).GspravkaTalked = ((s as any).daystart ?? 0);
      (s as any).GspravkaTimes = ((s as any).GspravkaTimes ?? 0) + (1);
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>, this is your last chance to go to the clinic and get a writt...
      scene.text(`"${((s as any).pcs_nickname ?? '')}, this is your last chance to go to the clinic and get a written referral from the gynecologist. If you don't go straight away, we'll go together as soon as I have time."`);
      scene.actions([
        { label: 'Continue', goto: ['mother', ''] },
      ]);
    } else {
      if (((s as any).clothingworntype ?? 0) !== 'nude') {
        // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> frowns and gets her handbag. "<<$pcs_nickname>>,...
        scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} frowns and gets her handbag. "${((s as any).pcs_nickname ?? '')}, why haven't you been to the gynecologist like I asked? You don't have anything to hide, do you? Come on, we're going there right now."`);
        scene.text('She takes you by the hand and leads you to the clinic, where she ushers you into the gynecologist\'s office.');
        scene.actions([
          { label: 'Get a referral from the gynecologist', goto: ['pav_clinic', 'referral'] },
        ]);
      } else {
        // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> frowns and gets her handbag. "<<$pcs_nickname>>,...
        scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} frowns and gets her handbag. "${((s as any).pcs_nickname ?? '')}, why haven't you been to the gynecologist like I asked? You don't have anything to hide, do you? Come on, we're going there right now, so get yourself dressed!"`);
        scene.actions([
          { label: 'Hurry to your room and get dressed', handler: (st: GameState) => {
    scene.text('<center><b>Your bedroom</b></center>');
    scene.img('images/pc/activities/misc/dress_1.mp4');
    // TODO-QSP: dynamic text: You rush to your room and get dressed, ready to go with your <<$npc_nickname[''A...
    scene.text(`You rush to your room and get dressed, ready to go with your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} to the gynecologist.`);
    qspCall(st, 'outfit', 'wear_last_worn');
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> takes you by the hand and leads you to the clini...
    scene.text(`Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} takes you by the hand and leads you to the clinic, ushering you into the gynecologist's office.`);
    scene.actions([
      { label: 'Get a referral from the gynecologist', goto: ['pav_clinic', 'referral'] },
    ]);
  } },
    ]);
  } },
        ]);
      }
    }
  } else {
    if (((s as any).GspravkaT ?? 0) === 0  &&  ((s as any).GspravkaTimes ?? 0) < 3  &&  ((s as any).GspravkaTalked ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).motherKnowDildo ?? 0) !== 1) {
      (s as any).GspravkaTalked = ((s as any).daystart ?? 0);
      (s as any).GspravkaTimes = ((s as any).GspravkaTimes ?? 0) + (1);
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>, you need to go to the clinic. We need a written referral fro...
      scene.text(`"${((s as any).pcs_nickname ?? '')}, you need to go to the clinic. We need a written referral from the gynecologist for school."`);
      scene.actions([
        { label: 'Continue', goto: ['mother', ''] },
      ]);
    } else {
      if (((s as any).GspravkaT ?? 0) === 0  &&  ((s as any).GspravkaTimes ?? 0) < 3  &&  ((s as any).GspravkaTalked ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).motherKnowDildo ?? 0) === 1) {
        (s as any).GspravkaTalked = ((s as any).daystart ?? 0);
        (s as any).GspravkaTimes = ((s as any).GspravkaTimes ?? 0) + (1);
        // TODO-QSP: dynamic text: "<<$pcs_nickname>>, you need to go to the clinic. I doubt that you''re still a v...
        scene.text(`"${((s as any).pcs_nickname ?? '')}, you need to go to the clinic. I doubt that you're still a virgin, but we need a written referral from the gynecologist for school anyway."`);
        scene.actions([
          { label: 'Continue', goto: ['mother', ''] },
        ]);
      } else {
        if (((s as any).dildo_gyno_fail ?? 0) === 1) {
          qspGoto(s, 'mother', 'dildo_gyno_fail');
        } else {
          if (((s as any).dildo_gyno_pass ?? 0) === 1) {
            qspGoto(s, 'mother', 'dildo_gyno_pass');
          } else {
            if (((s as any).GspravkaT ?? 0) === 2  &&  (!((s as any).motherKnowSpravka ?? 0))) {
              qspGoto(s, 'mother', 'referral_fail');
            } else {
              if (((s as any).Gspassed ?? 0) === 1) {
                qspGoto(s, 'mother', 'referral_pass');
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAmbushReferralPass(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I was told you went to the clinic. Let me see your referral....
  scene.text(`"${((s as any).pcs_nickname ?? '')}, I was told you went to the clinic. Let me see your referral."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Give her your referral', goto: ['mother', 'referral_pass'] },
  ]);
  scene.build();
}

function enterAmbushReferralFail(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I was told you went to the clinic. Let me see your referral....
  scene.text(`"${((s as any).pcs_nickname ?? '')}, I was told you went to the clinic. Let me see your referral."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Give her your referral', goto: ['mother', 'referral_fail1'] },
  ]);
  scene.build();
}

function enterReferralFail(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><h2>Pavlovsk</h2></center>');
  (s as any).GspravkaTimes = 2;
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
    scene.img('images/locations/pavlovsk/gorodokw.jpg');
  } else {
    scene.img('images/locations/pavlovsk/gorodok.jpg');
  }
  if ((!((s as any).motherKnowWhore ?? 0))) {
    qspCall(s, 'npc_relationship', 'set', 'A29', 0);
    (s as any).motherKnowSpravka = 1;
    if (((s as any).npc_QW ?? 0)?.['A29'] === 0) {
      ((s as any).npc_QW = (s as any).npc_QW ?? {})['A29'] = 1;
    }
    if (((s as any).momslut ?? 0) < 2) {
      (s as any).delin_beh = ((s as any).delin_beh ?? 0) + (1);
      // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> is furious and grabs you by the ear, pulling you...
      scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} is furious and grabs you by the ear, pulling you out of the clinic and onto the street. "Oh, you slut! Your father and I worked so hard to raise you as a decent person, hoping you would find a good husband some day and it turns out you're a whore who's already put her pussy to work!"`);
      scene.actions([
        { label: 'Stay quiet', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    scene.text('"Get out of my sight!" she scowls before she storms off, leaving you to find your own way home. When you return home, you make sure you do it quietly so she can\'t give you another earful.');
    scene.actions([
      { label: 'Walk home', goto: ['korrPar', ''] },
    ]);
  } },
        { label: 'Angry about treatment at the clinic', goto: ['mother_chats', 'lost_virginity_talk'] },
      ]);
    } else {
      // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> shakes her head when she reads the referral. "We...
      scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} shakes her head when she reads the referral. "Well… I guess I shouldn't be surprised…"`);
      scene.text('You head home in silence.');
      scene.actions([
        { label: 'Walk home', goto: ['korrPar', ''] },
      ]);
    }
  } else {
    if (((s as any).motherKnowWhore ?? 0) > 0  &&  ((s as any).npc_QW ?? 0)?.['A29'] < 2) {
      qspCall(s, 'npc_relationship', 'modify', 'A29', (-10));
      (s as any).motherKnowSpravka = 1;
      (s as any).delin_beh = ((s as any).delin_beh ?? 0) + (1);
      if (((s as any).npc_QW ?? 0)?.['A29'] === 0) {
        ((s as any).npc_QW = (s as any).npc_QW ?? {})['A29'] = 1;
      }
      // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> reads the referral and closes her eyes for a sec...
      scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} reads the referral and closes her eyes for a second, trying to suppress her anger. "To be honest, it's not even a surprise to me. Don't think that I haven't seen you sneaking around the house at weird times, and all the guys loitering near our apartment."`);
      scene.text('You head home in silence.');
      scene.actions([
        { label: 'Walk home', goto: ['korrPar', ''] },
      ]);
    } else {
      if (((s as any).npc_QW ?? 0)?.['A29'] >= 2) {
        (s as any).motherKnowSpravka = 2;
        // TODO-QSP: dynamic text: "Why are you showing me this, <<$pcs_nickname>>? Do you think this is funny? Are...
        scene.text(`"Why are you showing me this, ${((s as any).pcs_nickname ?? '')}? Do you think this is funny? Are you trying to rub it in my face? Even if you made photocopies of it and handed them out at school, I doubt it would change your reputation at all. Everyone already knows!" your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} says coldly before you head home in silence.`);
        scene.actions([
          { label: 'Walk home', goto: ['korrPar', ''] },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterReferralFail1(s: GameState, scene: SceneBuilder): void {
  (s as any).GspravkaTimes = 2;
  scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
  if ((!((s as any).motherKnowWhore ?? 0))) {
    qspCall(s, 'npc_relationship', 'set', 'A29', 0);
    (s as any).motherKnowSpravka = 1;
    if (((s as any).npc_QW ?? 0)?.['A29'] === 0) {
      ((s as any).npc_QW = (s as any).npc_QW ?? {})['A29'] = 1;
    }
    if (((s as any).momslut ?? 0) < 2) {
      (s as any).delin_beh = ((s as any).delin_beh ?? 0) + (1);
      // TODO-QSP: dynamic text: You hand your <<$npc_nickname[''A29'']>> the referral. She opens it and starts r...
      scene.text(`You hand your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} the referral. She opens it and starts reading, a look of shock and rage appearing on her face as she does.`);
      scene.text('She tosses the paper aside and suddenly grabs you by the ear. "Oh, you slut! Your father and I worked so hard to raise you as a decent person, hoping you would find a good husband some day and it turns out you\'re a whore who\'s already put her pussy to work!"');
      scene.actions([
        { label: 'Stay quiet', handler: (st: GameState) => {
    scene.text('"Get out of my sight!" she screams and you quickly dash to your bedroom before she can give you another earful.');
    scene.actions([
      { label: 'Go to your room', goto: ['bedrPar', ''] },
    ]);
  } },
        { label: 'Angry about her treatment', goto: ['mother_chats', 'lost_virginity_talk1'] },
      ]);
    } else {
      // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> shakes her head when she reads the referral. "We...
      scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} shakes her head when she reads the referral. "Well... I guess I shouldn't be surprised..."`);
      scene.text('You just leave the room in silence.');
      scene.actions([
        { label: 'Leave', goto: ['korrPar', ''] },
      ]);
    }
  } else {
    if (((s as any).motherKnowWhore ?? 0) > 0  &&  ((s as any).npc_QW ?? 0)?.['A29'] < 2) {
      qspCall(s, 'npc_relationship', 'modify', 'A29', (-10));
      (s as any).motherKnowSpravka = 1;
      (s as any).delin_beh = ((s as any).delin_beh ?? 0) + (1);
      if (((s as any).npc_QW ?? 0)?.['A29'] === 0) {
        ((s as any).npc_QW = (s as any).npc_QW ?? {})['A29'] = 1;
      }
      // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> reads the referral and closes her eyes for a sec...
      scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} reads the referral and closes her eyes for a second, trying to suppress her anger. "To be honest, it's not even a surprise to me. Don't think that I haven't seen you sneaking around the house at weird times, and all the guys loitering near our apartment."`);
      scene.text('You just leave the room in silence.');
      scene.actions([
        { label: 'Leave', goto: ['korrPar', ''] },
      ]);
    } else {
      if (((s as any).npc_QW ?? 0)?.['A29'] >= 2) {
        (s as any).motherKnowSpravka = 2;
        // TODO-QSP: dynamic text: "Why are you showing me this, <<$pcs_nickname>>? Do you think this is funny? Are...
        scene.text(`"Why are you showing me this, ${((s as any).pcs_nickname ?? '')}? Do you think this is funny? Are you trying to rub it in my face? Even if you made photocopies of it and handed them out at school, I doubt it would change your reputation at all. Everyone already knows!" your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} says coldly.`);
        scene.text('You just leave the room in silence.');
        scene.actions([
          { label: 'Leave', goto: ['korrPar', ''] },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterReferralPass(s: GameState, scene: SceneBuilder): void {
  (s as any).GspravkaTimes = 0;
  (s as any).Gspassed = 0;
  qspCall(s, 'npc_relationship', 'modify', 'A29', 10);
  scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
  // TODO-QSP: dynamic text: You hand your <<$npc_nickname[''A29'']>> the referral. She opens it, closes her ...
  scene.text(`You hand your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} the referral. She opens it, closes her eyes for a second, and breathes a sigh of relief. "I'm not surprised. You're a good girl ${((s as any).pcs_nickname ?? '')}, just as I raised you to be."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['mother', ''] },
  ]);
  scene.build();
}

function enterDildoGynoFail(s: GameState, scene: SceneBuilder): void {
  (s as any).dildo_gyno_check = 0;
  (s as any).dildo_gyno_fail = 0;
  (s as any).GspravkaTimes = 2;
  (s as any).motherKnowDildo = 1;
  qspCall(s, 'npc_relationship', 'set', 'A29', 0);
  scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
  // TODO-QSP: dynamic text: You hand your <<$npc_nickname[''A29'']>> the referral. She opens and reads it, h...
  scene.text(`You hand your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} the referral. She opens and reads it, her fingers crumpling the edges where she holds it as she sees the result.`);
  scene.text('"I knew it! You little slut! I can\'t believe you ruined yourself like this!" You try to protest, but she cuts you off. "Your first dildo will turn into your first time and soon enough you\'ll be giving blowjobs in the park to anybody who asks!"');
  // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> continues to babble, not paying any heed to what...
  scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} continues to babble, not paying any heed to what you're trying to say. Eventually, you move into the hallway while she remains at the kitchen table, her head in her hands.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['korrPar', ''] },
  ]);
  scene.build();
}

function enterDildoGynoPass(s: GameState, scene: SceneBuilder): void {
  (s as any).dildo_gyno_check = 0;
  (s as any).GspravkaTimes = 1;
  (s as any).Gspassed = 0;
  scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
  // TODO-QSP: dynamic text: You hand your <<$npc_nickname[''A29'']>> the referral. She opens and reads it be...
  scene.text(`You hand your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} the referral. She opens and reads it before squinting her eyes at you suspiciously and putting it in her pocket.`);
  scene.text('"Okay, you\'re off the hook for now, but don\'t you dare bring one of those things home again, young lady!"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['mother', ''] },
  ]);
  scene.build();
}

function enterHypnoPregReact(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'body_din', 'pregnancyVisibility') === 1) {
    qspCall(s, 'stat', '');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if ((!((s as any).motherKnowSpravka ?? 0))) {
      (s as any).motherKnowSpravka = 1;
    }
    // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> looks at your belly, which is clearly visible no...
    scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} looks at your belly, which is clearly visible now. She's upset, but supportive.`);
    // TODO-QSP: dynamic text: "Oh no <<$pcs_nickname>>, you''re pregnant? How far along are you? I know this i...
    scene.text(`"Oh no ${((s as any).pcs_nickname ?? '')}, you're pregnant? How far along are you? I know this is a difficult time for you, but please don't have an abortion, okay? We'll figure this out."`);
    if (((s as any).clothingworntype ?? 0) !== 'nude') {
      scene.text('"I do want to know who the father is, though."');
      scene.actions([
        { label: 'Tell her', handler: (st: GameState) => {
    (st as any).pregTalkFamily = 1;
    // TODO-QSP: npc_pregtalk['A29'] = 1
  }, goto: ['mother', 'pregreact1'] },
      ]);
    } else {
      if (((s as any).clothingworntype ?? 0) === 'nude') {
        scene.text('"Go and put on some clothes and then come back to talk to me. I need you to tell me who the father is."');
        scene.actions([
          { label: 'Get dressed', handler: (st: GameState) => {
    (st as any).pregTalkFamily = 1;
    // TODO-QSP: npc_pregtalk['A29'] = 1
  }, goto: ['mother', 'pregreact1Hypno'] },
        ]);
      }
    }
  } else {
    scene.actions([
      { label: 'Tell her you\'re pregnant', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'npc_relationship', 'modify', 'A29', (-20));
    (st as any).pregTalkFamily = 1;
    ((st as any).npc_pregtalk = (st as any).npc_pregtalk ?? {})['A29'] = 1;
    (st as any).delin_beh = ((st as any).delin_beh ?? 0) + (1);
    if ((!((st as any).motherKnowSpravka ?? 0))) {
      (st as any).motherKnowSpravka = 1;
    }
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    // TODO-QSP: dynamic text: You tell your <<$npc_nickname[''A29'']>> that you''re pregnant. She gasps and ne...
    scene.text(`You tell your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} that you're pregnant. She gasps and nearly falls on the ground, but manages to sit on a stool on time.`);
    // TODO-QSP: dynamic text: Tears are slowly forming in her eyes. "<<$pcs_nickname>>… Oh no… I was afraid th...
    scene.text(`Tears are slowly forming in her eyes. "${((st as any).pcs_nickname ?? '')}… Oh no… I was afraid this would happen… Why did this happen…"`);
    // TODO-QSP: dynamic text: She stares at you through her tears, trying to think of what to say next before ...
    scene.text(`She stares at you through her tears, trying to think of what to say next before she realizes that you need her to be on your side. "I know it will be difficult, but you <i>must</i> have this child, ${((st as any).pcs_nickname ?? '')}. If you have an abortion now, it will be much more difficult to have children in the future. You can't risk ending up barren, do you understand?"`);
    scene.text('You stare blankly at her as her face becomes more worried.');
    scene.text('"Sweetie, we\'ll get through this together," she reassures you while hugging you. Despite her supportive attitude, you can tell she\'s very disappointed in you. You\'ll have to put in some work if you want to get back on her good side.');
    scene.text('"So, who\'s the father?"');
    scene.actions([
      { label: 'Your stepfather', handler: (st: GameState) => {
    (st as any).pregTalkFamily = 1;
    // TODO-QSP: npc_pregtalk['A29'] = 1
  }, goto: ['mother', 'pregreact1Hypno'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPregreact(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pregTalkFamily ?? 0) === 0  &&  ((s as any).npc_pregtalk ?? 0)?.['A29'] === 0  &&  (!((s as any).kid ?? 0))) {
    if (qspFunc(s, 'body_din', 'pregnancyVisibility') === 1) {
      qspCall(s, 'stat', '');
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      if ((!((s as any).motherKnowSpravka ?? 0))) {
        (s as any).motherKnowSpravka = 1;
      }
      // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> looks at your belly, which is clearly visible no...
      scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} looks at your belly, which is clearly visible now. She's upset, but supportive. "Oh no ${((s as any).pcs_nickname ?? '')}, you're pregnant? How far along are you? I know this is a difficult time for you, but please don't have an abortion, okay? We'll figure this out."`);
      if (((s as any).clothingworntype ?? 0) !== 'nude') {
        scene.text('"I do want to know who the father is, though."');
        scene.actions([
          { label: 'Tell her', handler: (st: GameState) => {
    (st as any).pregTalkFamily = 1;
    // TODO-QSP: npc_pregtalk['A29'] = 1
  }, goto: ['mother', 'pregreact1'] },
        ]);
      } else {
        if (((s as any).clothingworntype ?? 0) === 'nude') {
          scene.text('"Go and put on some clothes and then come back to talk to me. I need you to tell me who the father is"');
          scene.actions([
            { label: 'Get dressed', handler: (st: GameState) => {
    (st as any).pregTalkFamily = 1;
    // TODO-QSP: npc_pregtalk['A29'] = 1
  }, goto: ['mother', 'pregreactnude'] },
          ]);
        }
      }
    } else {
      if (((s as any).knowpreg ?? 0) === 1  &&  ((s as any).clothingworntype ?? 0) !== 'nude'  &&  qspFunc(s, 'body_din', 'pregnancyVisibility') === 0) {
        scene.actions([
          { label: 'Tell her you\'re pregnant', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'npc_relationship', 'modify', 'A29', (-20));
    (st as any).pregTalkFamily = 1;
    ((st as any).npc_pregtalk = (st as any).npc_pregtalk ?? {})['A29'] = 1;
    (st as any).delin_beh = ((st as any).delin_beh ?? 0) + (1);
    if ((!((st as any).motherKnowSpravka ?? 0))) {
      (st as any).motherKnowSpravka = 1;
    }
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    // TODO-QSP: dynamic text: You tell your <<$npc_nickname[''A29'']>> you''re pregnant. She gasps and nearly ...
    scene.text(`You tell your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} you're pregnant. She gasps and nearly falls on the ground, but manages to sit on a stool right on time.`);
    // TODO-QSP: dynamic text: Tears are slowly forming in her eyes. "<<$pcs_nickname>>… Oh no… I was afraid th...
    scene.text(`Tears are slowly forming in her eyes. "${((st as any).pcs_nickname ?? '')}… Oh no… I was afraid this would happen… Why did this happen…"`);
    // TODO-QSP: dynamic text: She stares at you through her tears, trying to think of what to say next before ...
    scene.text(`She stares at you through her tears, trying to think of what to say next before she realizes that you need her to be on your side. "I know it will be difficult, but you <i>must</i> have this child ${((st as any).pcs_nickname ?? '')}. If you have an abortion now, it will be much more difficult to have children in the future. You can't risk ending up barren, do you understand?"`);
    // TODO-QSP: dynamic text: You''re not quite sure about that just yet, but you see the concern on her face ...
    scene.text(`You're not quite sure about that just yet, but you see the concern on her face and figure the best thing you can do right now is just nod and give her a hug. "I understand, ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}… Is it okay if I come to you for advice from time to time?"`);
    scene.text('"Of course you can sweetie, we\'ll get through this together," she reassures you while returning your hug. Despite her supportive attitude, you can tell she\'s very disappointed in you. You\'ll have to put in some work if you want to get back on her good side.');
    scene.text('"So, who\'s the father?"');
    scene.actions([
      { label: 'Tell her', handler: (st: GameState) => {
    (st as any).pregTalkFamily = 1;
    // TODO-QSP: npc_pregtalk['A29'] = 1
  }, goto: ['mother', 'pregreact1'] },
    ]);
  } },
        ]);
      } else {
        if (((s as any).knowpreg ?? 0) === 1  &&  ((s as any).clothingworntype ?? 0) === 'nude'  &&  qspFunc(s, 'body_din', 'pregnancyVisibility') === 0) {
          scene.actions([
            { label: 'Tell her you\'re pregnant', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'npc_relationship', 'modify', 'A29', (-20));
    (st as any).pregTalkFamily = 1;
    ((st as any).npc_pregtalk = (st as any).npc_pregtalk ?? {})['A29'] = 1;
    (st as any).delin_beh = ((st as any).delin_beh ?? 0) + (1);
    if ((!((st as any).motherKnowSpravka ?? 0))) {
      (st as any).motherKnowSpravka = 1;
    }
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    // TODO-QSP: dynamic text: You tell your <<$npc_nickname[''A29'']>> you''re pregnant. She gasps and nearly ...
    scene.text(`You tell your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} you're pregnant. She gasps and nearly falls on the ground, but manages to sit on a stool right on time.`);
    // TODO-QSP: dynamic text: Tears are slowly forming in her eyes. "<<$pcs_nickname>>… Oh no… I was afraid th...
    scene.text(`Tears are slowly forming in her eyes. "${((st as any).pcs_nickname ?? '')}… Oh no… I was afraid this would happen… Why did this happen…"`);
    // TODO-QSP: dynamic text: She stares at you through her tears, trying to think of what to say next before ...
    scene.text(`She stares at you through her tears, trying to think of what to say next before she realizes that you need her to be on your side. "I know it will be difficult, but you <i>must</i> have this child ${((st as any).pcs_nickname ?? '')}. If you have an abortion now, it will be much more difficult to have children in the future. You can't risk ending up barren, do you understand?"`);
    // TODO-QSP: dynamic text: You''re not quite sure about that just yet, but you see the concern on her face ...
    scene.text(`You're not quite sure about that just yet, but you see the concern on her face and figure the best thing you can do right now is just nod and give her a hug. "I understand, ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}… Is it okay if I come to you for advice from time to time?"`);
    scene.text('"Of course you can sweetie, we\'ll get through this together," she reassures you while returning your hug. Despite her supportive attitude, you can tell she\'s very disappointed in you. You\'ll have to put in some work if you want to get back on her good side.');
    scene.text('"Go and put on some clothes and then come back to talk to me. I need you to tell me who the father is."');
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    (st as any).pregTalkFamily = 1;
    // TODO-QSP: npc_pregtalk['A29'] = 1
  }, goto: ['mother', 'pregreactnude'] },
    ]);
  } },
          ]);
        }
      }
    }
  } else {
    if (((s as any).pregTalkFamily ?? 0) === 0  &&  ((s as any).npc_pregtalk ?? 0)?.['A29'] === 0  &&  ((s as any).kid ?? 0) > 0) {
      if (qspFunc(s, 'body_din', 'pregnancyVisibility') === 1) {
        qspCall(s, 'stat', '');
        (s as any).minut = ((s as any).minut ?? 0) + 5;
        if ((!((s as any).motherKnowSpravka ?? 0))) {
          (s as any).motherKnowSpravka = 1;
        }
        // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> looks at your belly, which is clearly visible no...
        scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} looks at your belly, which is clearly visible now. She's upset, but supportive: "Oh no ${((s as any).pcs_nickname ?? '')}, you're pregnant again? How far along are you? I know this is a difficult time for you, but please don't have an abortion okay? We'll figure this out."`);
        if (((s as any).clothingworntype ?? 0) !== 'nude') {
          scene.text('"I do want to know who the father is, though."');
          scene.actions([
            { label: 'Tell her', handler: (st: GameState) => {
    (st as any).pregTalkFamily = 1;
    // TODO-QSP: npc_pregtalk['A29'] = 1
  }, goto: ['mother', 'pregreact1'] },
          ]);
        } else {
          if (((s as any).clothingworntype ?? 0) === 'nude') {
            scene.text('"Go and put on some clothes and then come back to talk to me. I need you to tell me who the father is."');
            scene.actions([
              { label: 'Get dressed', handler: (st: GameState) => {
    (st as any).pregTalkFamily = 1;
    // TODO-QSP: npc_pregtalk['A29'] = 1
  }, goto: ['mother', 'pregreactnude'] },
            ]);
          }
        }
      } else {
        if (((s as any).knowpreg ?? 0) === 1  &&  ((s as any).clothingworntype ?? 0) !== 'nude'  &&  qspFunc(s, 'body_din', 'pregnancyVisibility') === 0) {
          scene.actions([
            { label: 'Tell her you\'re pregnant', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'npc_relationship', 'modify', 'A29', (-20));
    (st as any).pregTalkFamily = 1;
    ((st as any).npc_pregtalk = (st as any).npc_pregtalk ?? {})['A29'] = 1;
    (st as any).delin_beh = ((st as any).delin_beh ?? 0) + (1);
    if ((!((st as any).motherKnowSpravka ?? 0))) {
      (st as any).motherKnowSpravka = 1;
    }
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    // TODO-QSP: dynamic text: You tell your <<$npc_nickname[''A29'']>> you''re pregnant. Her eyes widen and te...
    scene.text(`You tell your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} you're pregnant. Her eyes widen and tears slowly form in her eyes. "<i>Again</i>? You'll ruin your life! Why…"`);
    // TODO-QSP: dynamic text: She stares at you through her tears, trying to think of what to say next before ...
    scene.text(`She stares at you through her tears, trying to think of what to say next before she realizes that you need her to be on your side. "You <i>must</i> have this child, ${((st as any).pcs_nickname ?? '')}. If you have an abortion now, it will be much more difficult to have children in the future. This has to be the last though, do you understand?"`);
    // TODO-QSP: dynamic text: You''re not quite sure about that just yet, but you see the concern on her face ...
    scene.text(`You're not quite sure about that just yet, but you see the concern on her face and figure the best thing you can do right now is just nod and give her a hug. "I understand, ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}…"`);
    scene.text('"We\'ll get through this together," she reassures you while returning your hug. Despite her supportive attitude, you can tell she\'s very disappointed in you. You\'ll have to put in some work if you want to get back on her good side.');
    scene.text('"So, who\'s the father?"');
    scene.actions([
      { label: 'Tell her', handler: (st: GameState) => {
    (st as any).pregTalkFamily = 1;
    // TODO-QSP: npc_pregtalk['A29'] = 1
  }, goto: ['mother', 'pregreact1'] },
    ]);
  } },
          ]);
        } else {
          if (((s as any).knowpreg ?? 0) === 1  &&  ((s as any).clothingworntype ?? 0) === 'nude'  &&  qspFunc(s, 'body_din', 'pregnancyVisibility') === 0) {
            scene.actions([
              { label: 'Tell her you\'re pregnant', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'npc_relationship', 'modify', 'A29', (-20));
    (st as any).pregTalkFamily = 1;
    ((st as any).npc_pregtalk = (st as any).npc_pregtalk ?? {})['A29'] = 1;
    (st as any).delin_beh = ((st as any).delin_beh ?? 0) + (1);
    if ((!((st as any).motherKnowSpravka ?? 0))) {
      (st as any).motherKnowSpravka = 1;
    }
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    // TODO-QSP: dynamic text: You tell your <<$npc_nickname[''A29'']>> you''re pregnant. Her eyes widen and te...
    scene.text(`You tell your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} you're pregnant. Her eyes widen and tears slowly form in her eyes. "<i>Again</i>? You'll ruin your life! Why…"`);
    // TODO-QSP: dynamic text: She stares at you for a good ten seconds through her tears, trying to think of w...
    scene.text(`She stares at you for a good ten seconds through her tears, trying to think of what to say next before she realizes that you need her to be on your side. "You <i>must</i> have this child, ${((st as any).pcs_nickname ?? '')}. If you have an abortion now, it will be much more difficult to have children in the future. This has to be the last though, do you understand?"`);
    // TODO-QSP: dynamic text: You''re not quite sure about that just yet, but you see the concern on her face ...
    scene.text(`You're not quite sure about that just yet, but you see the concern on her face and figure the best thing you can do right now is just nod and give her a hug. "I understand, ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}…"`);
    scene.text('"We\'ll get through this together," she reassures you while returning your hug. Despite her supportive attitude, you can tell she\'s very disappointed in you. You\'ll have to put in some work if you want to get back on her good side.');
    scene.text('"Go and put on some clothes and then come back to talk to me. I need you to tell me who the father is."');
    scene.actions([
      { label: 'Go get dressed', handler: (st: GameState) => {
    (st as any).pregTalkFamily = 1;
    // TODO-QSP: npc_pregtalk['A29'] = 1
  }, goto: ['mother', 'pregreactnude'] },
    ]);
  } },
            ]);
          }
        }
      }
    }
  }
  if (((s as any).knowpreg ?? 0) === 1  &&  qspFunc(s, 'body_din', 'pregnancyVisibility') === 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAbortionTalkPreg(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPregreactnude(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'outfit', 'wear_last_worn');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  // TODO-QSP: dynamic text: You put on some clothes before returning to your <<$npc_nickname[''A29'']>>.
  scene.text(`You put on some clothes before returning to your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')}.`);
  // TODO-QSP: end
  scene.actions([
    { label: '', labelFn: (s: GameState) => 'Return to ' + String((((s as any).npc_nickname ?? 0)?.['A29'] ?? '') ?? ''), goto: ['mother', 'pregreact1'] },
  ]);
  scene.build();
}

function enterPregreact1Hypno(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_rel ?? 0)?.['A29'] < 60  &&  ((s as any).npc_pregtalk ?? 0)?.['A28'] === 1) {
    // TODO-QSP: dynamic text: As soon as your stepfather''s name crosses your lips, your <<$npc_nickname[''A29...
    scene.text(`As soon as your stepfather's name crosses your lips, your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')}'s face visibly reddens. Her mouth curls into a snarl and she reaches up, grips you by your hair and starts dragging you around.`);
    scene.text('"What the fuck is wrong with you?!" she screams in your face. "I know you\'re a worthless whore, but this? Even I didn\'t think you\'d stoop so low as seducting your own stepfather! What kind of sick people are you two?!"');
    scene.text('She lets go of your hair when she realizes you aren\'t reacting, only for you to feel a hard slap across the face shortly after.');
    scene.text('"There\'s nothing that makes this okay. I… I can\'t deal with you anymore. I want you out of this apartment right <i>now</i>! I don\'t ever want to see you or that filthy child you\'re bearing here again! <i>Ever</i>!"');
    scene.text('You stare blankly at her.');
    scene.text('"Get! Out!" she yells at you.');
    scene.text('You quickly leave the apartment and start heading back to your <i>Master\'s</i> office.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'stepdad']; enterKickedout(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A29'] >= 60  &&  ((s as any).npc_rel ?? 0)?.['A29'] <= 80) {
      scene.text('Before you\'re able to finish the second syllable of your stepfather\'s name, you see the rage building in her face. She tightens her fist and is visibly shaking, making it clear that she\'s using all of her might to hinder herself from attacking you…');
      scene.text('She finally manages to speak up. "Get out! she snarls through gritted teeth."');
      scene.text('You stare at her blankly.');
      scene.text('"Why the fuck are you still here?! Am I speaking another language?! Get the hell out!"');
      scene.text('You quickly leave and she slams the door behind you. You stand there staring blankly before remembering that you need to head back to your <i>Master\'s</i> office.');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'stepdad']; enterKickedout(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).npc_rel ?? 0)?.['A29'] > 80  &&  (((s as any).npc_pregtalk ?? 0)?.['A28'] === 0  ||  ((s as any).stepdadSecret ?? 0) === 1)) {
        // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> stares at you in stunned silence as you utter Vl...
        scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} stares at you in stunned silence as you utter Vladimir's name. Her knees seem to give out and she barely manages to hold herself up by leaning on the counter.`);
        scene.text('After long period of silence that feels like an eternity, she finally manages to speak up. "Please tell me I just misheard you. Did I really hear you just say your <i>stepfather\'s</i> name?"');
        scene.text('You stare blankly at her and say that it\'s true.');
        scene.text('"How could you both do this?!" she gasps. "What the hell were you thinking?!"');
        // TODO-QSP: dynamic text: You weren''t going to reply, but your <<$npc_nickname[''A29'']>> quickly speaks ...
        scene.text(`You weren't going to reply, but your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} quickly speaks again.`);
        scene.text('"It doesn\'t matter what the reason is. You had sex with your own stepfather! If this comes out, I\'ll be the laughing stock of the town! There\'s no way I\'m letting you stay here. You have to move out."');
        scene.text('You quickly leave. Once you\'re out of the apartment, she shuts the door behind you. You stand there staring blankly before remembering that you need to start heading back to your <i>Master\'s</i> office.');
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'stepdad']; enterKickedout(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to <i>Master</i>', handler: (st: GameState) => {
    qspGoto(st, 'therapist', 'toldMomPregnantAndReturned');
  } },
  ]);
  scene.build();
}

function enterPregreact1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).wombthfathID ?? 0) === 'A34'  &&  ((s as any).npc_rel ?? 0)?.['A34'] > 50  &&  ((s as any).brotherSecret ?? 0) === 1  &&  (!((s as any).momKnowsKolka ?? 0))) {
    if ((!((s as any).motherKnowRaped ?? 0))) {
      (s as any).motherKnowRaped = 1;
    }
    scene.text('"I… I don\'t actually know. I was…" you stammer as you struggle to get the next word out. "I was raped…"');
    scene.text('"What?! Are you okay?! Why did\'t you tell me sooner?!"');
    scene.text('"I was scared and ashamed and I didn\'t know how you would react…" Your lip quivers as tears begin to flow down your face. "I\'m sorry! I should have said something."');
    // TODO-QSP: dynamic text: "No, it''s not your fault!" your <<$npc_nickname[''A29'']>> says as she tries he...
    scene.text(`"No, it's not your fault!" your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} says as she tries her best to comfort you, giving you a hug and speaking in the most calming voice she can manage. "I know it's difficult, but please try to tell me what happened."`);
    // TODO-QSP: dynamic text: You do your best to make up a convincing story while also trying to act accordin...
    scene.text(`You do your best to make up a convincing story while also trying to act accordingly. You can't keep all the details of your story consistent, but your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} seems to write off your mistakes as the result of stress. You also manage to make most of your crying convincing, secretly thinking to yourself that your show would make trained actors jealous.`);
    scene.text('"Oh sweetheart, I\'m so sorry! I\'m right here with you. We\'ll get through this together," she says as she wipes your fake tears from your eyes.');
    if (((s as any).pcs_intel ?? 0) < 40  ||  ((s as any).arch_vars ?? 0)?.['main_active'] === 'bimbo') {
      scene.text('You can\'t help but smile at your successful deception. "Oh my god, I can\'t believe that actually worked! I don\'t know what I would have done if you found out that Kolka was actually the father!"');
      // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> looks at you in stunned silence as you realize w...
      scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} looks at you in stunned silence as you realize what you just said.`);
      scene.actions([
        { label: 'Continue', goto: ['mother', 'pregreactbrother'] },
      ]);
    } else {
      // TODO-QSP: dynamic text: You continue with the act. "I''m so glad I can always count on you, <<$npc_nickn...
      scene.text(`You continue with the act. "I'm so glad I can always count on you, ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')}!"`);
      scene.text('The two of you then share a warm embrace as you run a victory lap in your head over your successful ruse.');
      scene.actions([
        { label: 'Continue', goto: ['mother', ''] },
      ]);
    }
  } else {
    if (((s as any).wombthfathID ?? 0) === 'A34'  &&  ((s as any).npc_rel ?? 0)?.['A34'] > 50  &&  ((s as any).brotherSecret ?? 0) === 0  &&  (!((s as any).momKnowsKolka ?? 0))) {
      qspGoto(s, 'mother', 'pregreactbrother');
    } else {
      if (((s as any).wombthfathID ?? 0) === 'A28'  &&  ((s as any).npc_rel ?? 0)?.['A28'] > 50  &&  ((s as any).stepdadSecret ?? 0) === 1  &&  (!((s as any).momKnowsVladimir ?? 0))) {
        if ((!((s as any).motherKnowRaped ?? 0))) {
          (s as any).motherKnowRaped = 1;
        }
        scene.text('"I… I don\'t actually know. I was…" you stammer as you struggle to get the next word out. "I got jumped one night. I tried to fight back, but they were too strong. They raped me…"');
        scene.text('"What?! Are you okay?! Why did\'t you tell me sooner?!"');
        scene.text('"I was scared and ashamed and I didn\'t know how you would react…" Your lip quivers as tears begin to flow down your face. "I\'m sorry! I should have said something earlier."');
        // TODO-QSP: dynamic text: "No, it''s not your fault!" your <<$npc_nickname[''A29'']>> says as she tries he...
        scene.text(`"No, it's not your fault!" your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} says as she tries her best to comfort you, giving you a hug and speaking in the most calming voice she can manage. "I know it's difficult, but please try to tell me what happened."`);
        // TODO-QSP: dynamic text: You do your best to make up a convincing story while also trying to act accordin...
        scene.text(`You do your best to make up a convincing story while also trying to act accordingly. You can't keep all the details of your story consistent, but your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} seems to write off your mistakes as the result of stress. You also manage to make most of your crying convincing, secretly thinking to yourself that your show would make trained actors jealous.`);
        scene.text('"Oh sweetheart, I\'m so sorry! Don\'t worry, I\'ll stand right by your side. We\'ll get through this together," she says as she wipes your fake tears from your eyes.');
        if (((s as any).pcs_intel ?? 0) < 40  ||  ((s as any).arch_vars ?? 0)?.['main_active'] === 'bimbo') {
          scene.text('You can\'t help but smile at your successful deception. "Oh my god, I can\'t believe that actually worked! I don\'t know what I would have done if you found out that Vlad was actually the father!"');
          // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> looks at you in stunned silence as you realize w...
          scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} looks at you in stunned silence as you realize what you just said.`);
          scene.actions([
            { label: 'Continue', goto: ['mother', 'pregreactstepdad'] },
          ]);
        } else {
          // TODO-QSP: dynamic text: You continue with the act. "Thank you. I''m so glad I can always count on you, <...
          scene.text(`You continue with the act. "Thank you. I'm so glad I can always count on you, ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')}!"`);
          scene.text('The two of you then share a warm embrace as you\'re doing a victory dance inside your head over your successful ruse.');
          scene.actions([
            { label: 'Continue', goto: ['mother', ''] },
          ]);
        }
      } else {
        if (((s as any).wombthfathID ?? 0) === 'A28'  &&  ((s as any).npc_rel ?? 0)?.['A28'] > 50  &&  ((s as any).stepdadSecret ?? 0) === 0  &&  (!((s as any).momKnowsVladimir ?? 0))) {
          qspGoto(s, 'mother', 'pregreactstepdad');
        } else {
          if (((s as any).wombthfath ?? 0) === ''  ||  ((s as any).wombthfathID ?? 0) === 'unknown') {
            if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
              scene.text('"I don\'t know!" you wail, freaking out a little. "I didn\'t have sex! Ever!"');
              // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> looks at you skeptically, but seeing as you''re ...
              scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} looks at you skeptically, but seeing as you're actually freaking out, she quickly hugs you.`);
              scene.text('"It\'ll be all right, pumpkin. We\'ll figure it out," she says as she hugs you, then pushes you back and frowns.');
              scene.text('"Did any of the boys… Release on you? On your tummy or vagina?"');
              // TODO-QSP: dynamic text: "<<$npc_nickname[''A29'']>>!!!" you yell with a bit of a hysterical laugh in you...
              scene.text(`"${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')}!!!" you yell with a bit of a hysterical laugh in your voice.`);
              scene.text('"All right, I had to ask," she says, hugging you again before she whispers in your ear. "You know, it won\'t be that bad. You\'ll be still young when your child grows up, so you can go to parties with her. Or him. Whatever. And I\'ll be the awesome hot grandma."');
              scene.text('The image conjured by that thought makes you giggle.');
              scene.actions([
                { label: 'Continue', goto: ['mother', ''] },
              ]);
            } else {
              if (((s as any).stat ?? 0)?.['total_creampies'] > 0) {
                if ((!(((s as any).stat ?? 0)?.['creampies_notsafe_known'] + ((s as any).stat ?? 0)?.['creampies_risky_known']))) {
                  scene.actions([
                    { label: 'I don\'t know (I used birth control)', handler: (st: GameState) => {
    scene.text('"I don\'t know!" you say distressedly. "I mean, I did have sex, but I was careful! I used birth control and everything! I was so careful…"');
    // TODO-QSP: dynamic text: "Oh honey," your <<$npc_nickname[''A29'']>> whispers, hugging you tight against ...
    scene.text(`"Oh honey," your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} whispers, hugging you tight against her breast. "These things fail sometimes. It can happen. Maybe I should have taught you better. This is all my fault… But I'll help you now. You're not alone in this."`);
    scene.actions([
      { label: 'Continue', goto: ['mother', ''] },
    ]);
  } },
                  ]);
                } else {
                  scene.actions([
                    { label: 'I\'m not sure', handler: (st: GameState) => {
    scene.text('"I\'m… not sure…" you shamefully admit. "I wasn\'t very careful."');
    // TODO-QSP: dynamic text: "Oh honey," your <<$npc_nickname[''A29'']>> whispers, hugging you tight against ...
    scene.text(`"Oh honey," your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} whispers, hugging you tight against her breast. "This is all my fault! Maybe I should have taught you better… But I'll help you now. You're not alone in this."`);
    scene.actions([
      { label: 'Continue', goto: ['mother', ''] },
    ]);
  } },
                  ]);
                }
              } else {
                scene.actions([
                  { label: 'I don\'t know (No one came inside)', handler: (st: GameState) => {
    scene.text('"I don\'t know!" you say distressedly. "I mean, I did have sex, but nobody came inside me! It\'s not possible for me to be pregnant! I was so careful…"');
    // TODO-QSP: dynamic text: "Oh honey," your <<$npc_nickname[''A29'']>> whispers, hugging you tight against ...
    scene.text(`"Oh honey," your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} whispers, hugging you tight against her breast. "You can become pregnant a lot of different ways. It can happen. Maybe I should have taught you better. This is all my fault… I'll help you, you know. You're not alone in this."`);
    scene.actions([
      { label: 'Continue', goto: ['mother', ''] },
    ]);
  } },
                ]);
              }
              if (((s as any).rape_day ?? 0)+30 > ((s as any).daystart ?? 0)  &&  ((s as any).rape_talk_mom ?? 0) !== ((s as any).rape_count ?? 0)) {
                scene.actions([
                  { label: 'I was raped', handler: (st: GameState) => {
    (st as any).rape_talk_mom = ((st as any).rape_count ?? 0);
    if ((!((st as any).motherKnowRaped ?? 0))) {
      (st as any).motherKnowRaped = 1;
    }
    scene.text('"I… I don\'t actually know. I was…" you stammer as you struggle to get the next word out. "I was raped…"');
    scene.text('"What?! Are you okay?! Why did\'t you tell me sooner?!"');
    scene.text('"I was scared and ashamed and I didn\'t know how you would react…" Your lip quivers as tears begin to flow down your face. "I\'m sorry! I should have said something."');
    // TODO-QSP: dynamic text: "No, it''s not your fault!" Your <<$npc_nickname[''A29'']>> tries her best to co...
    scene.text(`"No, it's not your fault!" Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} tries her best to comfort you, giving you a hug and speaking in the most calming voice she can manage. "I know it's difficult, but please try to tell me what happened."`);
    // TODO-QSP: dynamic text: Through your tears, you recount the events of your rape to your <<$npc_nickname[...
    scene.text(`Through your tears, you recount the events of your rape to your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}, stopping several times as your sobbing prevented you from speaking. Every time you pause, your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} does her best to comfort you before encouraging to continue. After some time, you finally manage to finish your story.`);
    scene.text('"Oh sweetheart, I\'m so sorry! I\'m right here with you. We\'ll get through this together," she says as she wipes the tears from your eyes.');
    scene.text('"Thank you. I\'m so glad I can always count on you," you whisper before the two of you share a warm embrace.');
    scene.actions([
      { label: 'Continue', goto: ['mother', ''] },
    ]);
  } },
                ]);
              }
            }
          } else {
            // TODO-QSP: dynamic text: You tell her that the father is <<$wombthfath>> and give her some brief details ...
            scene.text(`You tell her that the father is ${((s as any).wombthfath ?? '')} and give her some brief details about how you met and the events that led up to your pregnancy. She reassures you that she'll help you get through this.`);
            scene.actions([
              { label: 'Continue', goto: ['mother', ''] },
            ]);
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPregreactbrother(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_rel ?? 0)?.['A29'] < 60  &&  ((s as any).npc_pregtalk ?? 0)?.['A34'] === 1  &&  (!((s as any).brothersecret ?? 0))) {
    // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>>''s face visibly reddens and her mouth curls into...
    scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')}'s face visibly reddens and her mouth curls into a snarl as she reaches up and grips you by your hair.`);
    scene.text('"What the fuck is wrong with you?!" she screams in your face. "I knew you were a worthless whore, but <i>this</i>? Even I didn\'t think you’d go so far as to try corrupting your own brother!"');
    // TODO-QSP: dynamic text: Kolka tries to speak up. "<<$npc_nickname[''A29'']>>, <<$pcs_nickname>>-"
    scene.text(`Kolka tries to speak up. "${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')}, ${((s as any).pcs_nickname ?? '')}-"`);
    // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> quickly cuts him off. "Shut the fuck up and go t...
    scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} quickly cuts him off. "Shut the fuck up and go to the living room. I'll deal with <i>you</i> later!"`);
    scene.text('He shuffles out of the room, stopping in the doorway for a moment to look at you sympathetically.');
    // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> releases your hair as tears begin to stream down...
    scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} releases your hair as tears begin to stream down your face. "${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')}, I'm s-"`);
    scene.text('She slaps you hard across the face before you can finish the sentence.');
    scene.text('"No, I don\'t want to hear it. I can\'t deal with you anymore. You need to leave this apartment right now! I don\'t ever want to see you here again!"');
    if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
      scene.text('"But!"');
      scene.text('"Get. Out!"');
      scene.text('You run out of the apartment and slump to the floor as soon as you\'re outside. What are you going to do now? Can you even afford your own apartment? You continue to sob in the same position for several minutes, too distraught to even notice if anyone else was around.');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'kolka']; enterKickedout(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if ((((s as any).npc_rel ?? 0)?.['A29'] >= 60  &&  ((s as any).npc_rel ?? 0)?.['A29'] <= 80)  &&  ((s as any).npc_pregtalk ?? 0)?.['A34'] === 1  &&  (!((s as any).brothersecret ?? 0))) {
      // TODO-QSP: dynamic text: You see the rage building in your <<$npc_nickname[''A29'']>>''s face as she ball...
      scene.text(`You see the rage building in your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')}'s face as she balls her fists and visibly shakes, making it clear that she's using all of her strength to stop herself from transferring that strength from her open palm to your face…`);
      scene.text('When she finally speaks, it\'s through gritted teeth. "Get out."');
      scene.text('You stare at her dumbfounded, unsure where she expects you to go.');
      // TODO-QSP: dynamic text: Your brother tries to speak up in your defense, but a quick glare from your <<$n...
      scene.text(`Your brother tries to speak up in your defense, but a quick glare from your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} shuts him down before she shifts her gaze back to you.`);
      scene.text('"Why are you still here?!" she growls.');
      scene.text('"Where am I supposed to go?" you manage to ask through quivering lips, tears welling in your eyes.');
      scene.text('"I don\'t care, just get out of my sight! You\'re not welcome here anymore."');
      if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
        scene.text('Once you\'re out of the apartment, the door slams behind you and you slump to the floor. What are you going to do now? Can you even afford your own apartment? You continue to sob in the same position for several minutes, too distraught to even notice if anyone else was around.');
      }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'kolka']; enterKickedout(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).npc_rel ?? 0)?.['A29'] > 80  &&  ((s as any).npc_pregtalk ?? 0)?.['A34'] === 1  &&  (!((s as any).brothersecret ?? 0))) {
        // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>>''s knees seem to give out and she barely manages...
        scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')}'s knees seem to give out and she barely manages to hold herself up by leaning on the counter.`);
        scene.text('After several seconds of silence that feel like an eternity, she speaks up. "Please tell me I just misheard you. Did you really just say your <i>brother\'s</i> name?"');
        // TODO-QSP: dynamic text: You stare at the floor, only giving your <<$npc_nickname[''A29'']>> the smallest...
        scene.text(`You stare at the floor, only giving your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} the smallest nod you can manage as a reply. Kolka follows your example.`);
        scene.text('"How could you?!" she gasps. "What were you thinking?!"');
        // TODO-QSP: dynamic text: You start to reply before your <<$npc_nickname[''A29'']>> cuts you off.
        scene.text(`You start to reply before your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} cuts you off.`);
        scene.text('"It doesn\'t matter; you can\'t stay here. You have to leave."');
        // TODO-QSP: dynamic text: Your brother grabs your hand before rising to your defense. "<<$npc_nickname[''A...
        scene.text(`Your brother grabs your hand before rising to your defense. "${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')}, that's not fair! You can’t just kick ${((s as any).pcs_nickname ?? '')} out!"`);
        scene.text('"Kolka, sweetheart. Let go of your sister\'s hand right now and shut up. Now is not the time."');
        scene.text('Your brother reluctantly releases your hand, and in that moment you want nothing more than to feel the warmth of his skin against yours again. His hand\'s departure from your own makes you feel more alone and terrified than you ever have.');
        scene.text('Still, you can\'t fault Kolka for that. There isn\'t much else he could have done in that situation. If you survive this, you fully intend to reward your brother for his moment of bravery.');
        scene.text('Your eyes well with tears that begin to stream down past your quivering lips. "Where am I supposed to go?"');
        // TODO-QSP: dynamic text: "I don''t know, but you can''t stay here," your <<$npc_nickname[''A29'']>> repli...
        scene.text(`"I don't know, but you can't stay here," your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} replies.`);
        scene.text('"Why not?!" You barely feel the words leave your mouth.');
        // TODO-QSP: dynamic text: "Why not?!" your <<$npc_nickname[''A29'']>> repeats indignantly, the anger risin...
        scene.text(`"Why not?!" your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} repeats indignantly, the anger rising in her voice. "Because you fucked your own brother and that is unacceptable! I can't believe I'm even having to explain this! Leave before things get worse for you."`);
        if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
          scene.text('You reluctantly leave the apartment, closing the door behind you before you slump to the floor. What are you going to do now? Can you even afford your own apartment? You continue to sob in the same position for several minutes, too distraught to even notice if anyone else was around.');
        }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'kolka']; enterKickedout(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (((s as any).npc_rel ?? 0)?.['A29'] < 60  &&  (((s as any).npc_pregtalk ?? 0)?.['A34'] === 0  ||  ((s as any).brothersecret ?? 0) === 1)) {
          // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>>''s face visibly reddens and her mouth curls into...
          scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')}'s face visibly reddens and her mouth curls into a snarl as she reaches up and grips you by your hair.`);
          scene.text('"What the fuck is wrong with you?!" she screams in your face. "I knew you were a worthless whore, but <i>this</i>? Even I didn\'t think you’d go so far as to try corrupting your own brother!"');
          // TODO-QSP: dynamic text: She releases your hair as tears begin to stream down your face. "<<$npc_nickname...
          scene.text(`She releases your hair as tears begin to stream down your face. "${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')}, I'm s-"`);
          scene.text('She slaps you hard across the face before you can finish the sentence.');
          scene.text('"No, I don\'t want to hear it. I can\'t deal with you anymore. You need to leave this apartment right now! I don\'t ever want to see you here again!"');
          if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
            scene.text('"But!"');
            scene.text('"Get. Out!"');
            scene.text('You run out of the apartment and slump to the floor as soon as you\'re outside. What are you going to do now? Can you even afford your own apartment? You continue to sob in the same position for several minutes, too distraught to even notice if anyone else was around.');
          }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'kolka']; enterKickedout(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          if ((((s as any).npc_rel ?? 0)?.['A29'] >= 60  &&  ((s as any).npc_rel ?? 0)?.['A29'] <= 80)  &&  (((s as any).npc_pregtalk ?? 0)?.['A34'] === 0  ||  ((s as any).brothersecret ?? 0) === 1)) {
            // TODO-QSP: dynamic text: You see the rage building in your <<$npc_nickname[''A29'']>>''s face as she ball...
            scene.text(`You see the rage building in your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')}'s face as she balls her fists and visibly shakes, making it clear that she's using all of her strength to stop herself from transferring that strength from her open palm to your face…`);
            scene.text('When she finally speaks, it\'s through gritted teeth. "Get out!"');
            scene.text('You stare at her dumbfounded, unsure where she expects you to go.');
            scene.text('"Why are you still here?!" she growls.');
            scene.text('"Where am I supposed to go?" you manage to ask through quivering lips, tears welling in your eyes.');
            scene.text('"I don\'t care, just get out of my sight. You\'re not welcome here anymore."');
            if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
              scene.text('Once you\'re out of the apartment, the door slams behind you and you slump to the floor. What are you going to do now? Can you even afford your own apartment? You continue to sob in the same position for several minutes, too distraught to even notice if anyone else was around.');
            }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'kolka']; enterKickedout(s, scene); (s as any).locArgs = __savedLocArgs; }
          } else {
            if (((s as any).npc_rel ?? 0)?.['A29'] > 80  &&  (((s as any).npc_pregtalk ?? 0)?.['A34'] === 0  ||  ((s as any).brothersecret ?? 0) === 1)) {
              // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>>''s knees seem to give out, and she barely manage...
              scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')}'s knees seem to give out, and she barely manages to hold herself up by leaning on the counter.`);
              scene.text('After several seconds of silence that feel like an eternity, she speaks. "Please tell me I just misheard you. Did you really just say your <i>brother\'s</i> name?"');
              // TODO-QSP: dynamic text: You stare at the floor, only giving your <<$npc_nickname[''A29'']>> the smallest...
              scene.text(`You stare at the floor, only giving your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} the smallest nod you can manage as a reply.`);
              scene.text('"How could you?!" she gasps. "What were you thinking?!"');
              scene.text('You start to reply, but she cuts you off. "It doesn\'t matter; you can\'t stay here. You have to leave."');
              scene.text('Your eyes well with tears that begin to stream down past your quivering lips. "Where am I supposed to go?"');
              scene.text('"I don\'t know, but you can\'t stay here," she replies.');
              scene.text('"Why not?" You barely feel the words leave your mouth.');
              // TODO-QSP: dynamic text: "Why not?!" your <<$npc_nickname[''A29'']>> repeats indignantly, the anger risin...
              scene.text(`"Why not?!" your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} repeats indignantly, the anger rising in her voice. "Because you fucked your own brother and that is unacceptable! I can't believe I'm even having to explain this! Leave before things get worse for you."`);
              if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
                scene.text('You reluctantly leave the apartment, closing the door behind you before you slump to the floor. What are you going to do now? Can you even afford your own apartment? You continue to sob in the same position for several minutes, too distraught to even notice if anyone else was around.');
              }
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'kolka']; enterKickedout(s, scene); (s as any).locArgs = __savedLocArgs; }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPregreactstepdad(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_rel ?? 0)?.['A29'] < 60  &&  ((s as any).npc_pregtalk ?? 0)?.['A28'] === 1  &&  (!((s as any).stepdadSecret ?? 0))) {
    // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>>''s face visibly reddens and her mouth curls into...
    scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')}'s face visibly reddens and her mouth curls into a snarl as she reaches up, grips you by the hair and starts dragging you around.`);
    scene.text('"What the fuck is wrong with you?" she screams in your face. "I know you\'re a worthless whore, but <i>this</i>? Even I didn\'t think you\'d stoop so low as seducting your own stepfather! What kind of sick people are you two?!"');
    // TODO-QSP: dynamic text: Vladimir clears his throat. "Honey, <<$pcs_nickname>> and I-"
    scene.text(`Vladimir clears his throat. "Honey, ${((s as any).pcs_nickname ?? '')} and I-"`);
    // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> furiously cuts him off. "Shut the fuck up, Vladi...
    scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} furiously cuts him off. "Shut the fuck up, Vladimir! You're already on a thin line and I can't even look at you right now… I'll deal with you later."`);
    scene.text('Knowing he\'s in deep trouble, he hurries out of the room, only to stop by the doorway as he looks at you sympathetically for a moment.');
    // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> lets go of your hair as tears begin to stream do...
    scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} lets go of your hair as tears begin to stream down your face. "${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')}, I'm s-"`);
    scene.text('You feel a hard slap across the face before you even begin explaining yourself.');
    scene.text('"I don\'t care what you have to say, there\'s nothing that makes this okay. I… I can\'t deal with you anymore. I want you out of this apartment right now! I don\'t ever want to see you or that filthy child you\'re bearing here ever again!"');
    scene.text('You panic and try to reason with her. "But…"');
    scene.text('"Get! Out!" she growls.');
    if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
      scene.text('You quickly run out of the apartment with tears running down your face. As soon you\'re outside, you slump to the floor. What are you going to do now? Where will you go? Can you even afford your own apartment? You continue to sob in the same position for several minutes, too distraught to even notice if anyone else is around.');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'stepdad']; enterKickedout(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if ((((s as any).npc_rel ?? 0)?.['A29'] >= 60  &&  ((s as any).npc_rel ?? 0)?.['A29'] <= 80)  &&  ((s as any).npc_pregtalk ?? 0)?.['A34'] === 1  &&  (!((s as any).brothersecret ?? 0))) {
      // TODO-QSP: dynamic text: Before you''re able to finish the second syllable of your stepfather''s name, yo...
      scene.text(`Before you're able to finish the second syllable of your stepfather's name, you see the rage building in your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')}'s face. She tightens her fist and is visibly shaking, making it clear that she is using all of her might to hinder herself from attacking you…`);
      scene.text('When she finally manages to speak up, it\'s through gritted teeth. "Get out!"');
      scene.text('You stare at her dumbfounded, unsure where she expects you to go.');
      // TODO-QSP: dynamic text: Vladimir tries to speak up in your defense, but as the first word rolls off his ...
      scene.text(`Vladimir tries to speak up in your defense, but as the first word rolls off his tongue, a quick glare from your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} shuts him down before she shifts her gaze back to you.`);
      scene.text('"Why the fuck are you still here?!" she growls. "Am I speaking another language? Get the hell out!"');
      scene.text('"Where am I supposed to go?" you ask through quivering lips, tears welling in your eyes…');
      scene.text('"I don\'t care, you should have thought about that before fucking your stepfather! Just get out of my sight! You\'re not welcome here anymore!"');
      if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
        scene.text('Once you\'re out of the apartment, she door slams behind you and you slump to the floor. What are you going to do now? Where will you go? Can you even afford your own apartment? You continue to sob in the same position for several minutes, too distraught to even notice if anyone else is around.');
      }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'stepdad']; enterKickedout(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).npc_rel ?? 0)?.['A29'] > 80  &&  ((s as any).npc_pregtalk ?? 0)?.['A28'] === 1  &&  (!((s as any).stepdadSecret ?? 0))) {
        // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>>''s knees seem to give out and she barely manages...
        scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')}'s knees seem to give out and she barely manages to hold herself up by leaning on the counter.`);
        scene.text('After a long period of silence that feels like an eternity, she finally manages to speak up. "Please tell me I just misheard you. Did I really hear you just say your <i>stepfather\'s</i> name?"');
        // TODO-QSP: dynamic text: You stare shamefully at the floor, only giving your <<$npc_nickname[''A29'']>> t...
        scene.text(`You stare shamefully at the floor, only giving your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} the smallest nod you can manage as a reply.`);
        scene.text('Vladimir is quick to follow your example. He dejectengly stares on the floor, as if he\'s admitting that you\'re telling the truth.');
        scene.text('"How could you both do this?!" she gasps. "What the hell were you thinking?!"');
        // TODO-QSP: dynamic text: As you begin to reply, your <<$npc_nickname[''A29'']>> cuts you off.
        scene.text(`As you begin to reply, your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} cuts you off.`);
        scene.text('"It doesn\'t matter what the reason is. You had sex with your own stepfather! If this comes out, I\'ll be the laughing stock of the town! There\'s no way I\'m letting you stay here. You have to move out."');
        // TODO-QSP: dynamic text: Vladimir grabs your hand before rising to your defense. "Honey, that''s not fair...
        scene.text(`Vladimir grabs your hand before rising to your defense. "Honey, that's not fair! You can’t just kick ${((s as any).pcs_nickname ?? '')} out! We'll figure out something…"`);
        // TODO-QSP: dynamic text: "Vladimir, you''re close to getting thrown out yourself, so I suggest you let go...
        scene.text(`"Vladimir, you're close to getting thrown out yourself, so I suggest you let go of ${((s as any).pcs_nickname ?? '')}'s hand right now and shut the fuck up. I still haven't decided what to do with your sorry ass…"`);
        scene.text('Vladimir reluctantly lets go of your hand, and in that moment you want nothing more than to feel the warmth of his skin against yours. Without his reassuring touch, you feel more alone and terrified than you\'ve ever been in your life.');
        scene.text('Still, you can\'t fault your stepfather from backing down. There isn\'t much else he could have done in this situation as he himself isn\'t aware of his fate. If you somehow manage to pull through this, you fully intend to reward him for this small moment of bravery.');
        scene.text('Your eyes are filled with tears and before long they begin to trickle down past your quivering lips. "W-Where am I supposed to go?"');
        // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> shurgs her shoulders. "I don''t know and to be h...
        scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} shurgs her shoulders. "I don't know and to be honest I don't really care. All I know is that you can't stay here."`);
        scene.text('"Why not?!" you respond without thinking.');
        // TODO-QSP: dynamic text: "Why not?!" your <<$npc_nickname[''A29'']>> repeats indignantly. You feel her ge...
        scene.text(`"Why not?!" your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} repeats indignantly. You feel her getting annoyed by your stupid question.`);
        scene.text('"You\'re really asking me that?! Maybe it\'s because you fucked your stepfather, a man that raised you since you were a baby?!" She pauses while staring at you in anger. "I can\'t believe I\'m even having to explain that… Leave before things get worse for you."');
        if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
          scene.text('Dejected, you reluctantly leave the apartment, closing the door behind you before you slump to the floor. What are you going to do now? Where will you go? Can you even afford your own apartment? You continue to sob in the same position for several minutes, too distraught to even notice if anyone else is around.');
        }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'stepdad']; enterKickedout(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (((s as any).npc_rel ?? 0)?.['A29'] < 60  &&  (((s as any).npc_pregtalk ?? 0)?.['A28'] === 0  ||  ((s as any).stepdadSecret ?? 0) === 1)) {
          // TODO-QSP: dynamic text: As soon as your stepfather''s name crosses your lips, your <<$npc_nickname[''A29...
          scene.text(`As soon as your stepfather's name crosses your lips, your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')}'s face visibly reddens. Her mouth curls into a snarl and she reaches up, grips you by your hair and starts dragging you around.`);
          scene.text('"What the fuck is wrong with you?" she screams in your face. "I know you\'re a worthless whore, but <i>this</i>? Even I didn\'t think you\'d stoop so low as seducting your own stepfather! What kind of sick people are you two?!"');
          // TODO-QSP: dynamic text: Vladimir clears his throat. "Honey, <<$pcs_nickname>> and I-"
          scene.text(`Vladimir clears his throat. "Honey, ${((s as any).pcs_nickname ?? '')} and I-"`);
          // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> furiously cuts him off. "Shut the fuck up, Vladi...
          scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} furiously cuts him off. "Shut the fuck up, Vladimir! You're already on a thin line and I can't even look at you right now… I'll deal with you later."`);
          scene.text('Knowing he\'s in deep trouble, he hurries out of the room, only to stop by the doorway as he looks at you sympathetically for a moment…');
          // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> lets go of your hair as tears begin to stream do...
          scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} lets go of your hair as tears begin to stream down your face.`);
          // TODO-QSP: dynamic text: "<<$npc_nickname[''A29'']>>, I''m s-"
          scene.text(`"${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')}, I'm s-"`);
          scene.text('You feel a hard slap across the face before you even begin explaining yourself.');
          scene.text('"I don\'t care what you have to say because there\'s nothing that makes this okay! I… I can\'t deal with you anymore. I want you out of this apartment right now! I don\'t ever want to see you or that filthy child you\'re bearing here ever again!"');
          scene.text('You panic and try to reason with her. "But…"');
          scene.text('"Get! Out!" she growls.');
          if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
            scene.text('You quickly run out of the apartment with tears running down your face. As soon you\'re outside, you slump to the floor. What are you going to do now? Where will you go? Can you even afford your own apartment? You continue to sob in the same position for several minutes, too distraught to even notice if anyone else is around.');
          }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'stepdad']; enterKickedout(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          if ((((s as any).npc_rel ?? 0)?.['A29'] >= 60  &&  ((s as any).npc_rel ?? 0)?.['A29'] <= 80)  &&  (((s as any).npc_pregtalk ?? 0)?.['A28'] === 0  ||  ((s as any).stepdadSecret ?? 0) === 1)) {
            // TODO-QSP: dynamic text: Before you''re able to finish the second syllable of your step-father''s name, y...
            scene.text(`Before you're able to finish the second syllable of your step-father's name, you see the rage building in your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')}'s face. She tightens her fist and is visibly shaking, making it clear that she's using all of her might to hinder herself from attacking you…`);
            scene.text('When she finally manages to speak up, it\'s through gritted teeth. "Get out!"');
            scene.text('You stare at her dumbfounded, unsure where she expects you to go.');
            // TODO-QSP: dynamic text: Vladimir tries to speak up in your defense, but as the first word rolls off his ...
            scene.text(`Vladimir tries to speak up in your defense, but as the first word rolls off his tongue, a quick glare from your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} shuts him down before she shifts her gaze back to you.`);
            scene.text('"Why the fuck are you still here?!" she growls. "Am I speaking another language? Get the hell out!"');
            scene.text('"Where am I supposed to go?" you ask through quivering lips, tears welling in your eyes…');
            scene.text('"I don\'t care, you should have thought about that before fucking your stepfather! Just get out of my sight. You\'re not welcome here anymore…"');
            if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
              scene.text('Once you\'re out of the apartment, she door slams behind you and you slump to the floor. What are you going to do now? Where will you go? Can you even afford your own apartment? You continue to sob in the same position for several minutes, too distraught to even notice if anyone else is around.');
            }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'stepdad']; enterKickedout(s, scene); (s as any).locArgs = __savedLocArgs; }
          } else {
            if (((s as any).npc_rel ?? 0)?.['A29'] > 80  &&  (((s as any).npc_pregtalk ?? 0)?.['A28'] === 0  ||  ((s as any).stepdadSecret ?? 0) === 1)) {
              // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> stares at you in stunned silence as you utter Vl...
              scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} stares at you in stunned silence as you utter Vladimir's name. Her knees seem to give out, as she barely manages to hold herself up by leaning on the counter.`);
              // TODO-QSP: dynamic text: After long period of silence that feels like an eternity, your <<$npc_nickname['...
              scene.text(`After long period of silence that feels like an eternity, your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} finally manages to speak up, "Please tell me I just misheard you. Did I really hear you just say your step-father's name?"`);
              // TODO-QSP: dynamic text: You stare shamefully at the floor, only giving your <<$npc_nickname[''A29'']>> t...
              scene.text(`You stare shamefully at the floor, only giving your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} the smallest nod you can manage as a reply.`);
              scene.text('Vladimir is quick to follow your example. He dejectengly stares on the floor as if he\'s admitting that you\'re telling the truth…');
              scene.text('"How could you both do this?" she gasps. "What the hell were you thinking?!"');
              // TODO-QSP: dynamic text: As you begin to reply, your <<$npc_nickname[''A29'']>> cuts you off.
              scene.text(`As you begin to reply, your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} cuts you off.`);
              scene.text('"It doesn\'t matter what the reason is. You had sex with your own stepfather! If this comes out, I\'ll be the laughing stock of the town! There\'s no way I\'m letting you stay here. You have to move out."');
              // TODO-QSP: dynamic text: Vladimir grabs your hand before rising to your defense. "Honey, that''s not fair...
              scene.text(`Vladimir grabs your hand before rising to your defense. "Honey, that's not fair! You can’t just kick ${((s as any).pcs_nickname ?? '')} out! We'll figure out something…"`);
              // TODO-QSP: dynamic text: "Vladimir, you''re close to getting thrown out yourself, so I suggest you let go...
              scene.text(`"Vladimir, you're close to getting thrown out yourself, so I suggest you let go of ${((s as any).pcs_nickname ?? '')}'s hand right now and shut the fuck up! I still haven't decided what to do with your sorry ass…"`);
              scene.text('Vladimir reluctantly lets go of your hand, and in that moment you want nothing more than to feel the warmth of his skin against yours. Without his reassuring touch, you feel more alone and terrified than you\'ve ever been in your life.');
              scene.text('Still, you can\'t fault your step-father from backing down. There isn\'t much else he could have done in this situation as he himself isn\'t aware of his fate. If you somehow manage to pull through this, you fully intend to reward him for this small moment of bravery.');
              scene.text('Your eyes are filled with tears and before long they begin to trickle down past your quivering lips. "W-Where am I supposed to go?"');
              // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> shurgs her shoulders. "I don''t know and to be h...
              scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} shurgs her shoulders. "I don't know and to be honest I don't really care. All I know is that you can't stay here…"`);
              scene.text('"Why not?!" you respond without thinking.');
              // TODO-QSP: dynamic text: "Why not?!" your <<$npc_nickname[''A29'']>> repeats indignantly. You feel her ge...
              scene.text(`"Why not?!" your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} repeats indignantly. You feel her getting annoyed by your stupid question. "You're really asking me that?! Maybe it's because you fucked your stepfather, a man that raised you since you were a baby?!"`);
              scene.text('She pauses while staring at you in anger. "I can\'t believe I\'m even having to explain that! Leave before things get worse for you."');
              if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
                scene.text('Dejected, you reluctantly leave the apartment, closing the door behind you before you slump to the floor. What are you going to do now? Where will you go? Can you even afford your own apartment? You continue to sob in the same position for several minutes, too distraught to even notice if anyone else is around.');
              }
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'stepdad']; enterKickedout(s, scene); (s as any).locArgs = __savedLocArgs; }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAbortionTalk(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell her you want an abortion', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/resident/mom/hug_sad1.jpg');
    // TODO-QSP: dynamic text: "<<$npc_nickname[''A29'']>>…" you say to get her attention. Before she turns to ...
    scene.text(`"${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}…" you say to get her attention. Before she turns to look at you, however, your emotions take over. "I want an abortion!" you blurt out.`);
    scene.text('After a quick pause for breath to gather your thoughts, you continue. "I\'m too young for all this and I can\'t see another way out…"');
    scene.text('You barely manage to finish before you start crying in front of her.');
    // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> immediately stops what she''s doing and comes ov...
    scene.text(`Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} immediately stops what she's doing and comes over to you. "Oh ${((st as any).pcs_nickname ?? '')}! Are you sure? Abortions can be dangerous…"`);
    scene.text('You simply nod. "Yeah, I\'ve decided." You don\'t trust yourself to say any more.');
    // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> wraps you in her arms. She doesn''t say anything...
    scene.text(`Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} wraps you in her arms. She doesn't say anything and just holds you tight against her until your tears subside.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/resident/mom/hug_sad2.jpg');
    // TODO-QSP: dynamic text: Once you''ve stopped crying, she sits down with you. "<<$pcs_nickname>>, you kno...
    scene.text(`Once you've stopped crying, she sits down with you. "${((st as any).pcs_nickname ?? '')}, you know I love you. I'm here for you and will support you if you go through with this."`);
    scene.text('She then sighs. "If you\'re sure about this, then I can go with you if you want?"');
    // TODO-QSP: dynamic text: You shake your head and wipe your eyes. "Thanks <<$npc_nickname[''A29'']>>, but ...
    scene.text(`You shake your head and wipe your eyes. "Thanks ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}, but no. I can do this on my own. I just needed to tell you."`);
    // TODO-QSP: dynamic text: "Well I''m glad you did, <<$pcs_nickname>>. It''s too big a burden to keep to yo...
    scene.text(`"Well I'm glad you did, ${((st as any).pcs_nickname ?? '')}. It's too big a burden to keep to yourself. Just please know that I'm here for you. If you change your mind and want me to go with you, just let me know."`);
    scene.text('After a weak smile and sharing a final hug, you get up and leave the room. You feel that your chat with her has helped you and are glad you told her.');
    scene.actions([
      { label: 'Return to the hallway', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterAbortionTalkPreg(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell her you\'re pregnant and want an abortion', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'npc_relationship', 'modify', 'A29', (-40));
    (st as any).pregTalkFamily = 1;
    ((st as any).npc_pregtalk = (st as any).npc_pregtalk ?? {})['A29'] = 1;
    if ((!((st as any).motherKnowSpravka ?? 0))) {
      (st as any).motherKnowSpravka = 1;
    }
    qspCall(st, 'stat', '');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/resident/mom/hug_sad1.jpg');
    // TODO-QSP: dynamic text: "<<$npc_nickname[''A29'']>>…" you say to get her attention. "I need to tell you ...
    scene.text(`"${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}…" you say to get her attention. "I need to tell you something important. Please don't get mad."`);
    scene.text('Without allowing her to speak, you continue. "I\'m pregnant and I\'ve decided I want an abortion!"');
    scene.text('"What?! When?! Who\'s…" she blurts out before you interrupt.');
    // TODO-QSP: dynamic text: "<<$npc_nickname[''A29'']>>, please let me finish! I''m already finding this ver...
    scene.text(`"${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}, please let me finish! I'm already finding this very difficult."`);
    scene.text('She stops talking and looks at you, waiting for you to continue, but you can see she\'s really struggling not to let her anger out and shout at you.');
    // TODO-QSP: dynamic text: After a quick pause for breath and to gather your thoughts, you continue. "I''m ...
    scene.text(`After a quick pause for breath and to gather your thoughts, you continue. "I'm sorry ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}; I'm not going to go into the details and I've already made my decision. I'm too young to have a baby and I can't see any other way out."`);
    scene.text('You barely manage to finish before you start crying in front of her.');
    // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> is torn between her anger and her love for you. ...
    scene.text(`Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} is torn between her anger and her love for you. After a deep sigh, she comes over to you. "Oh ${((st as any).pcs_nickname ?? '')}! Are you sure? Abortions can be dangerous…"`);
    scene.text('As she says this, your emotions completely overwhelm you and you start balling your eyes out as she wraps you in her arms. She doesn\'t say anything and just holds you tight against her until your tears subside.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/resident/mom/hug_sad2.jpg');
    scene.text('Once you\'ve stopped crying, she sits down with you. "I\'m sorry I shouted at you. I hope you know I love you and that I\'m here for you? I\'ll support you if you go through with this."');
    scene.text('She sighs. "If you\'re sure about this, I can go with you if you want?"');
    // TODO-QSP: dynamic text: You shake your head and wipe your eyes before continuing. "Thanks <<$npc_nicknam...
    scene.text(`You shake your head and wipe your eyes before continuing. "Thanks ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}, but no. I can do this on my own. I just wanted to tell you as keeping it a secret was becoming too much for me."`);
    scene.text('After sharing another brief hug, you get up and leave the room. You feel that she didn\'t react too badly given what you just said and your chat with her has helped you as you\'re glad to have shared your burden.');
    scene.actions([
      { label: 'Return to the hallway', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterKickedout(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'homes_properties', 'block_access', 'parents_home');
  if (String((s as any).locArgs?.[1] ?? '') === 'kolka') {
    (s as any).momKnowsKolka = 1;
    scene.text('Eventually, you get up and wipe your face.');
    if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
      if (((s as any).hour ?? 0) < 19) {
        scene.text('Since there\'s still some time left in the day, you decide to go apartment hunting.');
      } else {
        scene.text('It\'s too late to look for an apartment today, so you decide to look for a place to sleep tonight. You’ll need to look for an apartment tomorrow.');
      }
    }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'stepdad') {
      (s as any).momKnowsVladimir = 1;
      scene.text('Eventually, you get up and wipe your face. You have no choice but to fend for yourself now.');
      if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
        if (((s as any).hour ?? 0) < 19) {
          scene.text('Since there\'s still some time left in the day, you decide to go apartment hunting. You need to find somewhere to stay as soon as possible.');
        } else {
          scene.text('It\'s too late to look for an apartment today, so you decide to look for a place to sleep tonight. You\'ll need to go apartment hunting first thing tomorrow.');
        }
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGetBelongings(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['pod_ezd', 'etaj_2'] },
  ]);
  scene.build();
}

function enterGetBelongings(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stolmoney ?? 0) > 0) {
    (s as any).money = ((s as any).money ?? 0) + (((s as any).stolmoney ?? 0));
    (s as any).stolmoney = 0;
    scene.text('Most importantly, you grab your hidden money from your drawer first.');
  }
  if (((s as any).stolcigarettes ?? 0)?.['bedrPar'] > 0) {
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['cigarettes'] = ((s as any).mc_inventory['cigarettes'] ?? 0) + ((((s as any).stolcigarettes ?? 0)?.['bedrPar']));
    ((s as any).stolcigarettes = (s as any).stolcigarettes ?? {})['bedrPar'] = 0;
    scene.text('You take the hidden cigarettes from under your drawer.');
  }
  scene.text('Before you leave, you gather your clothes and other belongings.');
  if (((s as any).ml_guitar ?? 0)?.['hasguitar'] === 1  &&  ((s as any).ml_guitar ?? 0)?.['location'] === 'bedrPar'  &&  ((s as any).ml_guitar ?? 0)?.['carried'] === 0) {
    ((s as any).ml_guitar = (s as any).ml_guitar ?? {})['carried'] = 0;
    ((s as any).ml_guitar = (s as any).ml_guitar ?? {})['location'] = 'carried';
    scene.text('Finally, you take your guitar with you.');
  }
  // TODO-QSP: end
  scene.build();
}

function enterMotherQW_2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  ((s as any).npc_QW = (s as any).npc_QW ?? {})['A29'] = 2;
  qspCall(s, 'npc_relationship', 'modify', 'A29', (Math.floor(Math.random() * 6) + 5));
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
  scene.text('You try to talk with your mother to try and patch up your relationship. Despite your best efforts, the whole conversation consists mainly of her fairly aggressive monologue about morality, diseases and what awaits you in the future if you don\'t change your ways.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell her she\'s in no position to lecture you', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    // TODO-QSP: dynamic text: You defiantly look her in the eyes once she''s done with her rant. "What you''re...
    scene.text(`You defiantly look her in the eyes once she's done with her rant. "What you're saying might be true ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}, but you're in no position to be lecturing me about this sort of thing!"`);
    scene.text('Your mother doesn\'t understand what you\'re trying to say, and still tries to talk you down from the superior moral position she thinks she has over you. "What do you mean? We\'re talking about you, young lady, and how you are ruining your fut-"');
    // TODO-QSP: dynamic text: Tired of her hypocritical attitude, you bluntly cut her off. "What I''m saying, ...
    scene.text(`Tired of her hypocritical attitude, you bluntly cut her off. "What I'm saying, ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}, is that you done even worse things than me!"`);
    scene.text('Your mother is deeply insulted by your accusation, and tries to protest. "What has gotten into you?! You can\'t talk to your mother like that!"');
    scene.actions([
      { label: 'Pressure her further', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    scene.text('Before she can get another word in, you continue. "Oh, but I can! We\'re both adults, so let\'s talk this out like adults. Since you don\'t seem to understand, I\'ll keep it simple."');
    scene.text('Your mother has never heard you talk back to her like this before, and tries again to silence you. "Do not interru-"');
    // TODO-QSP: dynamic text: "No, <<$npc_nickname[''A29'']>>, now it''s <i>you</i> who needs to stop interrup...
    scene.text(`"No, ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}, now it's <i>you</i> who needs to stop interrupting <i>me</i>! I just listened to a 30 minute rant on how a girl should behave… from <i>you</i>!"`);
    // TODO-QSP: dynamic text: "<<$pcs_firstname>> <<$pcs_lastname>>!"
    scene.text(`"${((st as any).pcs_firstname ?? '')} ${((st as any).pcs_lastname ?? '')}!"`);
    (st as any).sisterAge = ((st as any).year ?? 0) - (((((st as any).npc_dob ?? {})?.['A33'] ?? 0) - ((((st as any).npc_dob ?? {})?.['A33'] ?? 0) % 10000)) / 10000);
    if (((st as any).age ?? 0) === 16) {
      // TODO-QSP: dynamic text: "I''m not an idiot, <<$npc_nickname[''A29'']>>! You''re <<motherAge>> and Anya i...
      scene.text(`"I'm not an idiot, ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}! You're ${((st as any).motherAge ?? '')} and Anya is ${((st as any).sisterAge ?? '')}. That means you were the same age as me when you got pregnant with her!"`);
    } else {
      // TODO-QSP: dynamic text: "I''m not an idiot, <<$npc_nickname[''A29'']>>! You''re <<motherAge>> and Anya i...
      scene.text(`"I'm not an idiot, ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}! You're ${((st as any).motherAge ?? '')} and Anya is ${((st as any).sisterAge ?? '')}. That means you were even younger than me when you got pregnant with her!"`);
    }
    scene.text('There is a sudden, unnerving silence. You, bright red from all the shouting, are trying to catch your breath as your mother sits on a chair at the table as emotions wash over her.');
    scene.text('She understands the point you\'re making perfectly clear now, and is desperately trying to find a way to talk herself out of it. You can see her posture slowly deflate when she realizes she can\'t.');
    scene.text('"But… It was your father…" she whispers softly as you sit on a chair at the opposite end of the table.');
    scene.text('"So what?" you bluntly reply.');
    scene.text('Your mother looks up at you, unsure how to continue. "What I mean is, I did it out of love for him! Not with some random guy who came to our door!"');
    scene.text('You\'re definitely not letting her get off the hook that easily. "Who says I don\'t love the man I was with?! Besides, do you seriously expect me to believe you got pregnant on your very first time?"');
    scene.text('"I didn\'t, but what does that have to do with this?"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    // TODO-QSP: dynamic text: "Everything, <<$npc_nickname[''A29'']>>!" you exclaim. "I don''t believe for a <...
    scene.text(`"Everything, ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}!" you exclaim. "I don't believe for a <i>second</i> that you only did it out love for my father. You <i>loved</i> getting fucked by him!"`);
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>! Do not swear!"
    scene.text(`"${((st as any).pcs_nickname ?? '')}! Do not swear!"`);
    scene.text('"Okay okay, \'that you did not enjoy having sex\'. If that\'s the only thing you have issues with, I suppose you agree with everything else I just said then?"');
    scene.text('It takes a while for your mother to respond. She\'s lost in the memories of her youth, blankly staring at the wall.');
    scene.text('"It was nice, especially when we went camping that one summer…" she mumbles, her face turning a deep shade of red.');
    scene.text('"No comment," you snort.');
    scene.text('Another awkward silence follows as your mother, deeply embarrassed by what you said, is unsure how to continue the conversation without making it even worse for herself. She just keeps staring at the wall until she finally breaks the silence. "Well, you are my daughter…"');
    scene.text('You smile. "And you are my mother. I suppose it\'s true what they say: like mother, like daughter?"');
    scene.text('Your mother suddenly looks very sad, like she might be about to cry and repeats what you just said. "Like mother, like daughter… I suppose so."');
    scene.text('Yet another uncomfortable silence follows, so you decide to seize the momentum and drive your point home once and for all. "I think you know what I mean now. It\'s really unfair of you to cause a riot every time I come home when you did the <i>exact same thing</i> years ago! I don\'t deserve this."');
    scene.text('Your mother is still not willing to concede, however. "I… I don\'t want you to make the same mistakes I did. I want you to be better than I am - <i>was</i>! I want you to have a better life, that\'s why. I don\'t want you to be like me! I love you and want more for you!" she says as she almost starts crying.');
    scene.text('You feel a little guilty now. Is she really just doing this out of love? Even so, that\'s no excuse for her to be this overbearing.');
    scene.text('You nod and give her a weak smile. "Okay, I guess I can see that, but you could have just talked to me instead of trying to run my life. All that did is make me <i>want</i> to rebel."');
    scene.text('She nods and wipes at a stray tear that trickles down her face. "You\'re right. I went too far and I\'m sorry for that. I should have learned from your sister, but I didn\'t. Please forgive me and try to be better."');
    scene.text('You feel yourself tearing up as well and you nod and hug your mother. This is the closest you\'ve felt to her in a long time.');
    scene.actions([
      { label: 'Leave the room', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    // TODO-QSP: dynamic text: Just as you''re about to leave the kitchen, your <<$npc_nickname[''A29'']>> call...
    scene.text(`Just as you're about to leave the kitchen, your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} calls out for you. "${((st as any).pcs_nickname ?? '')}, wait!"`);
    scene.text('You turn around and look at her. She motions for you to come back and sit back down.');
    scene.text('"When I had Anya, Mikhail and I made a mistake, but we had each other. When we had you, we were together and knew what we were getting into. You don\'t even know if you\'ll ever see the guy you had intercourse with again."');
    // TODO-QSP: dynamic text: "<<$npc_nickname[''A29'']>>, we <i>just</i> talked about this!"
    scene.text(`"${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}, we <i>just</i> talked about this!"`);
    // TODO-QSP: dynamic text: Your mother looks serious as she raises her hand, motioning you to not interrupt...
    scene.text(`Your mother looks serious as she raises her hand, motioning you to not interrupt. Since her attitude towards you is not as demeaning anymore, you decide to listen. "Hear me out please, ${((st as any).pcs_nickname ?? '')}. I just don't want you to get pregnant, you know? When you have a baby, it should be with the man you're going to stay with, and when you can support it."`);
    if (((st as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0  ||  ((st as any).mc_inventory ?? 0)?.['contraceptive_pill'] > 0) {
      // TODO-QSP: dynamic text: "Don''t worry <<$npc_nickname[''A29'']>>, I''ve taken precautions. I went and bo...
      scene.text(`"Don't worry ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}, I've taken precautions. I went and bought things. When they run out, I'll get more, I promise."`);
    } else {
      if (((st as any).tabletkicheck ?? 0) === 2) {
        // TODO-QSP: dynamic text: "Don''t worry <<$npc_nickname[''A29'']>>, I''ve taken precautions. I went to the...
        scene.text(`"Don't worry ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}, I've taken precautions. I went to the clinic and got a birth control shot. When it runs out, I'll get another one, I promise."`);
      } else {
        // TODO-QSP: dynamic text: "You''re right, <<$npc_nickname[''A29'']>>. I''ll go to the pharmacy and get the...
        scene.text(`"You're right, ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}. I'll go to the pharmacy and get the pill there. I'll buy some condoms too."`);
      }
    }
    scene.text('"I think it\'s best if you buy everything you need at the pharmacy here in Pavlovsk," she replies. "It\'ll be easier for you, and no one has to know."');
    scene.text('You laugh at what she said. "I already buy them there."');
    scene.text('Your mother shakes her head. "What? Luda never told me that!"');
    scene.text('You smile at her. "She knew what I was doing and thought I should be safe, so she sold me the stuff and promised not to tell you."');
    // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> looks furious before she deflates and nods. "She...
    scene.text(`Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} looks furious before she deflates and nods. "She's right. We can't stop you and it's better if you use protection. I wish she had told me, but I understand. I just wish… I had been the one to talk to you about this instead," she says as she looks at you sadly.`);
    scene.text('You give her another hug. "We\'re talking now."');
    scene.text('With that, you turn and leave.');
    scene.actions([
      { label: 'Return to the hallway', goto: ['korrPar', ''] },
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

function enterCloReact(s: GameState, scene: SceneBuilder): void {
  ((s as any).motherQW = (s as any).motherQW ?? {})['clo_react'] = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
  if (String((s as any).locArgs?.[1] ?? '') === 'apartment') {
    qspCall(s, 'npc_relationship', 'modify', 'A29', 'dislike');
    qspCall(s, 'stat', '');
    if (((s as any).npc_rel ?? 0)?.['A29'] >= 80) {
      // TODO-QSP: dynamic text: As soon as your <<$npc_nickname[''A29'']>> sees you, her eyes widen and she stop...
      scene.text(`As soon as your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} sees you, her eyes widen and she stops what she's doing to gawk at you. "What are you wearing, ${((s as any).pcs_nickname ?? '')}?! I've never seen these kinds of clothes on you!"`);
      scene.text('She doesn\'t bother to hide the look of disgust as she tries to adjust your outfit to give you a bit more modesty. "I can practically see <i>everything</i>…"');
      scene.text('You shrug your shoulders. "It\'s really not that bad," you say, trying to play it cool.');
      scene.text('"No, it absolutely is!" she huffs. "Where did you even get this?"');
      qspCall(s, 'willpower', 'misc', 'self');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Lie', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Lie', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    scene.text('You quickly think up a believable excuse as she continues to stare you down. "I just bought these to see how you\'d react!" you smile and laugh awkwardly.');
    scene.text('"To see how I would react?! Is this some kind of joke?" She doesn\'t seem all that convinced, but you go along with it anyway.');
    scene.text('"Yeah, it\'s just a joke. Anya came up with it and said I should do it to see the look on your face if I tried to go out like this," you ramble on.');
    // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> is silent for what feels like an eternity before...
    scene.text(`Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} is silent for what feels like an eternity before she shakes her head. "Of course Anya is the one to come up with something like that. Well, it's not funny. Now go change."`);
    scene.text('She shoos you away back to your room.');
    scene.actions([
      { label: 'Go back and change', goto: ['bedrPar', ''] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Tell the truth', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    scene.text('"Well…" You take a step back, moving out of her reach so she can\'t fuss with your clothes anymore. "I bought it myself."');
    scene.text('She stares at you blankly. "<i>You</i> bought these? You look like a cheap hooker!"');
    scene.text('She breaks out into a fit of laughter and it takes you a moment to realize that she\'s laughing at you, right to your face. You can feel your cheeks burning red in anger and embarrassment as you stand there waiting for her to finally stop.');
    scene.text('"No, you\'re not going out like that. Go and change right now!" She continues to laugh, brushing this all off like a bad joke.');
    qspCall(st, 'willpower', 'misc', 'self');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse to change', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse to change', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'npc_relationship', 'modify', 'A29', 'dislike');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    scene.text('"No!" you scoff defiantly. "I spent my own money to buy these clothes, so I\'ll wear them whenever I want!"');
    // TODO-QSP: dynamic text: Just as suddenly as she started laughing, your <<$npc_nickname[''A29'']>> abrupt...
    scene.text(`Just as suddenly as she started laughing, your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} abruptly stops. With her arms now crossed, she glares down at you. "You're going back to your room and-"`);
    scene.text('Rolling your eyes and sighing loudly, you cut her off before she can finish. "Weren\'t you always telling me that, when I can buy my own clothes, I can wear what I want? Well, I paid for these myself, so I\'m going to wear them!"');
    scene.text('The look she gives you is surprisingly stoic, but you can tell that despite how calm she\'s trying to play it, she\'s fuming underneath. Having won this argument, you make your way past her with an innocent smile.');
    scene.actions([
      { label: 'Walk away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Go and change', goto: ['bedrPar', ''] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).npc_rel ?? 0)?.['A29'] >= 40) {
        // TODO-QSP: dynamic text: "Why are you dressed like that, <<$pcs_nickname>>?" your <<$npc_nickname[''A29''...
        scene.text(`"Why are you dressed like that, ${((s as any).pcs_nickname ?? '')}?" your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} asks when she sees you. "Is this how girls are dressing these days?"`);
        scene.text('You smile and give her a little twirl to show off your outfit. "Yeah, it\'s in fashion! Don\'t you like it?"');
        // TODO-QSP: dynamic text: She raises an eyebrow. "Your sister tried to dress like that when she was your a...
        scene.text(`She raises an eyebrow. "Your sister tried to dress like that when she was your age, and I didn't let her go out looking like that back then…" She goes quiet while chewing on her bottom lip anxiously before sighing. "You just look so cheap dressed like that… I don't want you attracting the wrong attention. I wish you'd change, ${((s as any).pcs_nickname ?? '')}."`);
        qspCall(s, 'willpower', 'misc', 'self', 'easy');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Tell her not to worry', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Tell her not to worry', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'npc_relationship', 'modify', 'A29', 'dislike');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    scene.text('You give her a small smile before reassuring her. "You don\'t need to worry, I know how to take care of myself. I\'m not doing anything you wouldn\'t do, I promise!"');
    scene.text('Her frown only deepens when she hears that. "That\'s what I\'m worried about…" she mutters to herself. With a heavy sigh, she tells you again to be careful before reluctantly letting you leave.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Agree to change', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    scene.text('"You\'re right," you admit when you see the worried look on her face. "I\'ll go and change."');
    scene.text('She gives you a small appreciative smile. "Thank you. I just worry about you is all."');
    scene.actions([
      { label: 'Go back to your room', goto: ['bedrPar', ''] },
    ]);
  } },
        ]);
      } else {
        // TODO-QSP: dynamic text: "What the hell are you thinking wearing <i>that</i>?!" your <<$npc_nickname[''A2...
        scene.text(`"What the hell are you thinking wearing <i>that</i>?!" your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} asks with a scowl.`);
        scene.text('You shrug nonchalantly and begin to speak, but her hand snaps up, her finger pointed in your face as she cuts you off. "No, I don\'t want to hear it! You change your clothes right now! If you keep acting like this, it\'s going to end with you kicked out on the streets!"');
        qspCall(s, 'willpower', 'misc', 'self');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Argue back', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Argue back', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'npc_relationship', 'modify', 'A29', 'hate');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    scene.text('You scoff in her face, causing her scowl to deepen. "The wrong attention? It\'s just clothes!" You roll your eyes and try to step past her, but she blocks your path.');
    scene.text('"You think I don\'t know what you\'re doing wearing those kinds of clothes?!" She grabs at the little bit of fabric covering you and roughly yanks on it, nearly ruining it and exposing you further.');
    scene.text('"Get the fuck off me!" you yell before knocking her hand away. "What\'s your problem?! Are you jealous or something?"');
    scene.text('Her eyes widen. "Jealous?! Why would I ever be-"');
    scene.text('"Look at you!" you interrupt. "You\'re what, 40 years old? Your tits are sagging, your stomach is flabby and you live in this shithole apartment working for tips as a waitress! Admit it, I\'m everything you wish you could have been!"');
    // TODO-QSP: dynamic text: She suddenly raises her hand to slap you, but quickly composes herself. "You… ar...
    scene.text(`She suddenly raises her hand to slap you, but quickly composes herself. "You… are such a disappointment to me, ${((st as any).pcs_firstname ?? '')}… I thought you would have a bright future ahead of you," she says calmly. Her face is blank, no longer scowling like she was before, and it makes you feel a bit uneasy. "You'll have your beauty and all the attention, sure, but after that? No one will want to touch the town whore…"`);
    scene.actions([
      { label: 'Walk away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Reluctantly agree', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    scene.text('With a loud huff, you give in. "Fine, whatever! Just shut up with all the nagging! It\'s hurting my fucking ears and I\'m tired of hearing it all the time!"');
    scene.text('"Fix your tone or I\'ll fix it for you!" she hisses and takes a step closer to you in an attempt to intimidate you, but it only makes you laugh.');
    scene.text('"You can\'t even get Anya to respect you, so give me a fucking break! I said I\'m changing, so go back to cleaning the kitchen or whatever the hell you do!" you snap.');
    scene.actions([
      { label: 'Go to your room and change', goto: ['bedrPar', ''] },
    ]);
  } },
        ]);
      }
    }
  } else {
    qspCall(s, 'npc_relationship', 'modify', 'A29', 'dislike');
    qspCall(s, 'stat', '');
    if (((s as any).npc_rel ?? 0)?.['A29'] >= 80) {
      // TODO-QSP: dynamic text: As soon as your <<$npc_nickname[''A29'']>> sees you, she stops and stares with a...
      scene.text(`As soon as your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} sees you, she stops and stares with a look of horror on her face. You smile and give her a small wave, but she's too busy hurriedly looking around to see as she rushes toward you in a panic.`);
      scene.text('"What are you doing out here dressed like… Like <i>that</i>?!" Speaking in a hushed voice, she grabs you by the arm and pulls you to the side.');
      qspCall(s, 'willpower', 'misc', 'self', 'easy');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Proudly tell the truth', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Proudly tell the truth', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'npc_relationship', 'modify', 'A29', 'dislike');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    scene.text('"Oh this? Do you like it? I\'ve been getting looks all day!" you shamelessly reply as you start to pose and model the slutty outfit to your mother.');
    scene.text('Confused and disgusted, she takes a step back. "What\'s wrong with you?! I didn\'t raise you to be like this!" she hisses, but stops when she catches people nearby staring at the two of you.');
    // TODO-QSP: dynamic text: Whether it''s because she''s angry, embarrassed or both, you watch with a please...
    scene.text(`Whether it's because she's angry, embarrassed or both, you watch with a pleased smile as your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} cheeks burn red before she rushes off in the opposite direction.`);
    scene.actions([
      { label: 'Continue on your way', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Make up an excuse', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    scene.text('"Well, I had to go out and, uh…" You think hard to come up with a believable lie before finally answering. "I had no clean clothes, so I had to wear this."');
    scene.text('She gives you a confused look, not fully convinced that\'s the truth. Thinking on your feet, you follow it up with another lie. "These <i>obviously</i> aren\'t mine! I found them in Anya\'s closet!"');
    // TODO-QSP: dynamic text: As if it all suddenly makes sense, your <<$npc_nickname[''A29'']>> throws her ha...
    scene.text(`As if it all suddenly makes sense, your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} throws her hands up and sighs. "Anya! Of course it's hers. She probably borrowed it from one of her friends."`);
    scene.text('She goes off into a rant about the crowd your sister hangs around with, which distracts her from being upset with you. Seems like you\'re off the hook!');
    scene.actions([
      { label: 'Walk away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).npc_rel ?? 0)?.['A29'] >= 40) {
        // TODO-QSP: dynamic text: When your <<$npc_nickname[''A29'']>> catches sight of you, she slowly shakes her...
        scene.text(`When your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} catches sight of you, she slowly shakes her head. "Is that you, ${((s as any).pcs_nickname ?? '')}? I almost couldn't tell. I thought you were just some cheap prostitute…" She looks you up and down, not bothering to hide the repulsed look on her face. "You really don't have any shame, do you?"`);
        scene.text('With a disapproving click of her tongue, she quickly starts to walk by you. It\'s obvious she doesn\'t want to be seen with you in public when you\'re dressed like this.');
        if (((s as any).momslut ?? 0) >= 1) {
          qspCall(s, 'willpower', 'misc', 'self', 'hard');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Call her out for cheating', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Call her out for cheating', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'npc_relationship', 'modify', 'A29', 'hate');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    scene.text('"At least I\'m getting paid for sleeping around," you sneer as she brushes past you. As expected, she freezes mid-step and hesitates for a second before turning to face you with a heated glare.');
    scene.text('"What did you say?!" Her voice is low and her jaw is clenched as she stares you down so intensely you start to wonder if looks can actually kill.');
    scene.text('"Oops, I\'m sorry," you reply. "Technically, <i>you</i> get paid to sleep around as well! You\'re fucking your boss while you\'re on the clock and he\'s the one cutting the checks, so I guess what I\'m saying is: thanks for setting such a great example. I\'m learning from the best!"');
    scene.actions([
      { label: 'Walk away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
            ]);
          }
        }
        scene.actions([
          { label: 'Ignore her', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
        ]);
      } else {
        scene.text('"Oh my God…!" you hear a voice say from behind you. Turning around, you see your mother staring at you in horrified disgust.');
        scene.text('Panicked, she makes sure no one has seen her before rushing off in the other direction without saying another word to you.');
        scene.actions([
          { label: 'Continue on your way', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCondomSteal(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'hear') {
    ((s as any).motherQW = (s as any).motherQW ?? {})['con_steal_hear'] = ((s as any).daystart ?? 0);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    // TODO-QSP: dynamic text: As you walk through the corridor, you overhear some annoyed grunts coming from y...
    scene.text(`As you walk through the corridor, you overhear some annoyed grunts coming from your parents room. You quickly take a peek, seeing your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} rummaging through some of their stuff.`);
    scene.text('"Where the hell are they?" you hear her quietly ask to herself. "I know I put them here, I always put them here!"');
    scene.text('Not noticing you, she keeps rummaging as you quietly slip out, not wanting to bring attention to yourself.');
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'talk') {
      ((s as any).motherQW = (s as any).motherQW ?? {})['con_steal_talk'] = ((s as any).daystart ?? 0);
      (s as any).minut = ((s as any).minut ?? 0) + 3;
      qspCall(s, 'stat', '');
      scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
      scene.text('You\'re in the corridor when you overhear your parents talking in their bedroom.');
      // TODO-QSP: dynamic text: "I''ve looked everywhere, but I can''t find them anywhere!" your <<$npc_nickname...
      scene.text(`"I've looked everywhere, but I can't find them anywhere!" your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} says before she lets out a dejected sigh.`);
      scene.text('"They can\'t have just disappeared!" your stepfather answers.');
      // TODO-QSP: dynamic text: "Have you been using several as a safety measure?" your <<$npc_nickname[''A29'']...
      scene.text(`"Have you been using several as a safety measure?" your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} asks.`);
      scene.text('"No!" Vladimir answers assertively. "Maybe one of the kids got into the stash?"');
      // TODO-QSP: dynamic text: "Y-You really think so?" your <<$npc_nickname[''A29'']>> gasps.
      scene.text(`"Y-You really think so?" your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} gasps.`);
      scene.text('Not wanting to get into middle of this, you quietly leave before you\'re noticed.');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Quietly walk away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterCondomFind(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  ((s as any).mom = (s as any).mom ?? {})['condoms'] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
  if (((s as any).motherKnowSpravka ?? 0) === 1  ||  ((s as any).motherKnowWhore ?? 0) === 1) {
    if (((s as any).npc_QW ?? 0)?.['A29'] === 1) {
      // TODO-QSP: dynamic text: You''re in your room when your <<$npc_nickname[''A29'']>> walks in and shuts the...
      scene.text(`You're in your room when your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} walks in and shuts the door behind her. Without saying a word, she walks over to the desk, pulls out one of the drawers and takes out some condoms.`);
      scene.text('"If you\'re going to go around town being a whore, then do a better job of hiding your condoms! Assuming you\'re even using them…"');
      scene.text('Before you can even reply, she mutters something about Kolka finding them as she storms out of the room and slams the door behind her.');
    } else {
      // TODO-QSP: dynamic text: You''re in your room when your <<$npc_nickname[''A29'']>> walks in and shuts the...
      scene.text(`You're in your room when your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} walks in and shuts the door behind her. Without saying a word, she walks over to the desk, pulls out one of the drawers and takes out some condoms.`);
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I''m glad you''re using protection, but you should be hiding...
      scene.text(`"${((s as any).pcs_nickname ?? '')}, I'm glad you're using protection, but you should be hiding these somewhere other than your desk drawer! What if Kolka came in and found them?"`);
      scene.text('"Then you should be giving him into trouble for snooping through the room his sisters share!" you scowl. "He has no business being in here."');
      scene.text('"Okay, okay!" she replies. "Just promise me that you\'ll go to Aunt Luda for more when you run out?"');
      // TODO-QSP: dynamic text: "Yes <<$npc_nickname[''A29'']>>!" you reply as you roll your eyes and she shows ...
      scene.text(`"Yes ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')}!" you reply as you roll your eyes and she shows herself out of the room.`);
    }
    scene.actions([
      { label: 'Continue', goto: ['bedrPar', ''] },
    ]);
  } else {
    // TODO-QSP: dynamic text: You''re in your room when your <<$npc_nickname[''A29'']>> walks in and shuts the...
    scene.text(`You're in your room when your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} walks in and shuts the door behind her. Without saying a word, she walks over to the desk, pulls out one of the drawers and takes out some condoms.`);
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, why do you have these in your desk?!"
    scene.text(`"${((s as any).pcs_nickname ?? '')}, why do you have these in your desk?!"`);
    if (((s as any).prezikday ?? 0) + 7 > ((s as any).daystart ?? 0)) {
      scene.actions([
        { label: 'I stole them…', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A29', 'dislike');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    scene.text('You swallow hard. "I saw you hiding them away in your room and thought I would take some…"');
    scene.text('"What?! Those are for </i>me</i>, not for you to steal! Not only have you stolen my condoms, but you\'ve been using them to have sex?!"');
    if (((st as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([
        { label: 'I\'m still a virgin!', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A29', 30);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    scene.text('"Absolutely not! I\'m still a virgin! How could you even accuse me of something like that?!" you shout back, clearly upset.');
    // TODO-QSP: dynamic text: Seeing you react strongly, your <<$npc_nickname[''A29'']>> eases up. "I''m sorry...
    scene.text(`Seeing you react strongly, your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} eases up. "I'm sorry ${((st as any).pcs_nickname ?? '')}, I just thought the worst when I seen them… It still doesn't explain why you would steal them in the first place though."`);
    scene.text('"I don\'t really know… I just wanted to see what condoms were and didn\'t want to go out and buy them and give people the wrong idea. You know how quickly the rumors start around here…" you mildly answer.');
    // TODO-QSP: dynamic text: The two of you have a long conversation about how important it is that you remai...
    scene.text(`The two of you have a long conversation about how important it is that you remain a virgin and that you need to keep aware of the boys approaches towards you. In the end, the two of you hug and your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} leaves the room.`);
    scene.actions([
      { label: 'Continue', goto: ['bedrPar', ''] },
    ]);
  } },
      ]);
    } else {
      qspCall(st, 'willpower', 'misc', 'self');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Lie', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Lie', handler: (st: GameState) => {
    (st as any).Gspravka = 0;
    (st as any).GspravkaT = 0;
    (st as any).GspravkaTalked = ((st as any).daystart ?? 0);
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    scene.text('You look at her with a straight face. "No, I haven\'t had sex! I remember all the talks we\'ve had and I\'d never do anything to break your trust!" you confidently reply.');
    scene.text('"Okay, so who did it then?! Who stole the condoms?!" she asks.');
    scene.text('You shrug your shoulders. "I don\'t know! Maybe Anya? She\'s been having Roma over all the time, so maybe she needed them? All I know is that they\'re not mine!"');
    // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> looks at you, talling you up from head to toe. "...
    scene.text(`Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} looks at you, talling you up from head to toe. "I don't buy it, but if it really is your sister that's been stealing them, then you won't mind going to the doctor for a check up?"`);
    scene.text('Being your only way out of your lie, you agree to go and get checked. "Fine, I\'ll get checked, but I expect an apology from you when I get the results!"');
    // TODO-QSP: dynamic text: "Oh you''ll get an apology if you pass the test…" your <<$npc_nickname[''A29'']>...
    scene.text(`"Oh you'll get an apology if you pass the test…" your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} replies. "Until then, I'm keeping you on a short leash…"`);
    // TODO-QSP: dynamic text: The two of you go back and forth as you decide the details before your <<$npc_ni...
    scene.text(`The two of you go back and forth as you decide the details before your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} leaves the room.`);
    scene.actions([
      { label: 'Continue', goto: ['bedrPar', ''] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Tell the truth', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A29', (-50));
    if ((!((st as any).motherKnowSpravka ?? 0))) {
      (st as any).motherKnowSpravka = 1;
    }
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    // TODO-QSP: dynamic text: You anxiously look around for a cop out, but your <<$npc_nickname[''A29'']>> is ...
    scene.text(`You anxiously look around for a cop out, but your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} is quite insistant. "Well?! Let's hear it!"`);
    scene.text('You look down at the floor as you tear up a little. "Yes, I\'ve been stealing condoms from your secret place so I didn\'t need to buy protection…"');
    // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> eyes widen and go dark. "What the hell, <<$pcs_n...
    scene.text(`Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} eyes widen and go dark. "What the hell, ${((st as any).pcs_nickname ?? '')}?! How many times have we talked about this? I don't know what to even say to you right now, I'm so mad!"`);
    scene.text('She screams at you for a while before furiously walking out and slamming the door behind her.');
    scene.actions([
      { label: 'Continue', goto: ['bedrPar', ''] },
    ]);
  } },
      ]);
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'I bought them', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    scene.text('You swallow hard as you try to come up with something good, but in the end you decide to admit that they\'re yours. "Those are mine… I bought them… For safety of course…"');
    // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> reacts as expected. "For safety?! What safety?! ...
    scene.text(`Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} reacts as expected. "For safety?! What safety?! You're not supposed to be having sex! Wait, are you telling me that you're having sex?!"`);
    if (((st as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([
        { label: 'I\'m still a virgin!', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A29', 30);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    scene.text('"Absolutely not! I\'m still a virgin! How could you even accuse me of something like that?!" you shout back, clearly upset.');
    // TODO-QSP: dynamic text: Seeing you react strongly, your <<$npc_nickname[''A29'']>> eases up. "I''m sorry...
    scene.text(`Seeing you react strongly, your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} eases up. "I'm sorry ${((st as any).pcs_nickname ?? '')}, I just thought the worst when I seen them… It still doesn't explain why you had them in the first place, though!"`);
    scene.text('"I don\'t really know… I thought it was a good thing to have if I ever needed it…" you mildly answer.');
    // TODO-QSP: dynamic text: The two of you have a long conversation about how important it is that you remai...
    scene.text(`The two of you have a long conversation about how important it is that you remain a virgin and that you need to keep aware of the boys approaches towards you. In the end, the two of you hug and your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} leaves the room.`);
    scene.actions([
      { label: 'Continue', goto: ['bedrPar', ''] },
    ]);
  } },
      ]);
    } else {
      qspCall(st, 'willpower', 'misc', 'self');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Lie', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Lie', handler: (st: GameState) => {
    (st as any).Gspravka = 0;
    (st as any).GspravkaT = 0;
    (st as any).GspravkaTalked = ((st as any).daystart ?? 0);
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    scene.text('You look at her with a straight face. "No, I haven\'t had sex! I remember all the talks we\'ve had and I would never do anything to break your trust!" you confidently reply.');
    // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> looks at you, tallying you up from head to toe. ...
    scene.text(`Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} looks at you, tallying you up from head to toe. "Well since you're so confident, you won't mind going to the doctor for a check up then?"`);
    scene.text('Being the only way out of your lie, you agree to go and get checked. "Fine, I\'ll get checked, but I expect an apology from you when I get the results!"');
    // TODO-QSP: dynamic text: "You''ll get an apology <i>if</i> you pass the test…" your <<$npc_nickname[''A29...
    scene.text(`"You'll get an apology <i>if</i> you pass the test…" your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} replies. "Until then, I'm keeping you on a short leash…"`);
    // TODO-QSP: dynamic text: The two of you go back and forth as you decide the details before your <<$npc_ni...
    scene.text(`The two of you go back and forth as you decide the details before your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} leaves the room.`);
    scene.actions([
      { label: 'Continue', goto: ['bedrPar', ''] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Tell the truth', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A29', (-50));
    if ((!((st as any).motherKnowSpravka ?? 0))) {
      (st as any).motherKnowSpravka = 1;
    }
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    // TODO-QSP: dynamic text: You anxiously look around for a cop out, but your <<$npc_nickname[''A29'']>> is ...
    scene.text(`You anxiously look around for a cop out, but your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} is quite insistant. "Well?! Let's hear it!"`);
    scene.text('You look down at the floor as you tear up a little. "Yes… I\'ve been having sex…"');
    // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> eyes widen and go dark. "What the hell, <<$pcs_n...
    scene.text(`Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} eyes widen and go dark. "What the hell, ${((st as any).pcs_nickname ?? '')}?! How many times have we talked about this?! I don't know what to even say to you right now, I'm so mad!"`);
    scene.text('She screams at you for a while before furiously walking out and slamming the door behind her.');
    scene.actions([
      { label: 'Continue', goto: ['bedrPar', ''] },
    ]);
  } },
      ]);
    }
  } },
    ]);
  }
  qspCall(s, 'willpower', 'misc', 'self');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'They\'re not mine', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'They\'re not mine', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    qspCall(st, 'npc_relationship', 'modify', 'A29', 'loathe');
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    scene.text('You quickly come up with a lie. "They\'re not mine! They\'re probably Anya\'s! She has Roma over here every week, so she probably misplaced them in my drawer."');
    // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> looking at you suspiciously, but since she can''...
    scene.text(`Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} looking at you suspiciously, but since she can't prove otherwise she puts the condoms back. "I'll talk to Anya, but I really hope you're not lying to me young lady, otherwise there'll be consequences. Understand?!"`);
    // TODO-QSP: dynamic text: You nod and let out a silent sigh of relief. Hopefully, Anya will cover for you ...
    scene.text(`You nod and let out a silent sigh of relief. Hopefully, Anya will cover for you when ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} asks her about it…`);
    scene.actions([
      { label: 'Continue', goto: ['bedrPar', ''] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterDildoFind(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  ((s as any).motherQW = (s as any).motherQW ?? {})['seen_dildos'] = 1;
  (s as any).motherKnowDildo = 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
  // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> walks into the room and closes the door. You''re...
  scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} walks into the room and closes the door. You're a bit startled by her behavior, but remain quiet as she walks over to your little hiding spot and pulls out a dildo.`);
  if (((s as any).motherKnowSpravka ?? 0) === 1  ||  ((s as any).motherKnowWhore ?? 0) === 1) {
    if (((s as any).npc_QW ?? 0)?.['A29'] === 1) {
      scene.text('Your eyes widen as she holds it in front of you. "What\'s this?"');
      scene.text('"I-It\'s…" you stutter.');
      scene.text('"I know what it is!" she snaps. "Let me guess. You practice with this before you go out whoring yourself? I can\'t even look at you right now!"');
      if (((s as any).mc_inventory ?? 0)?.['dildo_small'] + ((s as any).mc_inventory ?? 0)?.['dildo_normal'] + ((s as any).mc_inventory ?? 0)?.['dildo_big'] + ((s as any).mc_inventory ?? 0)?.['dildo_large'] + ((s as any).mc_inventory ?? 0)?.['dildo_huge'] + ((s as any).mc_inventory ?? 0)?.['dildo_enormous'] + ((s as any).mc_inventory ?? 0)?.['dildo_gigantic'] > 1) {
        scene.text('"You\'ve certainly built up quite the collection. You truly have no shame!"');
      }
      scene.text('Before you can even reply, she mutters something about Kolka finding it as she storms out of the room and slams the door behind her.');
    } else {
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I understand your need for some... ''alone time'', but you s...
      scene.text(`"${((s as any).pcs_nickname ?? '')}, I understand your need for some... 'alone time', but you should find a better place to hide this sort of thing. What if Kolka came in and found it?"`);
      scene.text('"Then you should be giving him into trouble for snooping through the room his sisters share!" you scowl. "He has no business being in here."');
      if (((s as any).mc_inventory ?? 0)?.['dildo_small'] + ((s as any).mc_inventory ?? 0)?.['dildo_normal'] + ((s as any).mc_inventory ?? 0)?.['dildo_big'] + ((s as any).mc_inventory ?? 0)?.['dildo_large'] + ((s as any).mc_inventory ?? 0)?.['dildo_huge'] + ((s as any).mc_inventory ?? 0)?.['dildo_enormous'] + ((s as any).mc_inventory ?? 0)?.['dildo_gigantic'] > 1) {
        scene.text('"I see you\'ve already built up quite the collection…" she ');
        scene.text('"You never know which one you might need…" you try to explain.');
        scene.text('"Oh honey, you need to find the correct one for you and use that, not have lots of them laying around."');
        scene.text('"This is <i>sooo</i> embarrassing! I don\'t want to talk about it!" you reply.');
        scene.text('"Fine, fine, but I don\'t understand why you need so many of them!" she comments as she leaves the room.');
      } else {
        if (((s as any).mc_inventory ?? 0)?.['dildo_small'] === 1  ||  ((s as any).mc_inventory ?? 0)?.['dildo_normal'] === 1) {
          scene.text('"I\'ll give you this at least, you picked the perfect one…"');
        } else {
          if (((s as any).mc_inventory ?? 0)?.['dildo_big'] === 1  ||  ((s as any).mc_inventory ?? 0)?.['dildo_large'] === 1) {
            scene.text('"Isn\'t this a bit too big for you?"');
          } else {
            if (((s as any).mc_inventory ?? 0)?.['dildo_huge'] === 1  ||  ((s as any).mc_inventory ?? 0)?.['dildo_enormous'] === 1) {
              // TODO-QSP: dynamic text: <<$npc_nickname[''A29'']>> starts laughing. "There''s no way this will fit-"
              scene.text(`${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} starts laughing. "There's no way this will fit-"`);
            } else {
              // TODO-QSP: dynamic text: "What were you thinking, <<$pcs_nickname>>?! This would ruin you forever!"
              scene.text(`"What were you thinking, ${((s as any).pcs_nickname ?? '')}?! This would ruin you forever!"`);
            }
          }
        }
        scene.text('You blush and quickly yank the dildo out of her hand. "I said I don\'t want to talk about it! Leave! Now!"');
      }
      scene.actions([
        { label: 'Put the dildo away [+iif(mc_inventory[\'dildo_small\'] + mc_inv...]', goto: ['bedrPar', ''] },
      ]);
    }
  } else {
    scene.text('Your eyes widen as she holds it in front of you. "What\'s this?"');
    scene.text('"I-It\'s…" you stutter.');
    // TODO-QSP: dynamic text: She crosses her arms while still holding the dildo. "I know what it is <<$pcs_ni...
    scene.text(`She crosses her arms while still holding the dildo. "I know what it is ${((s as any).pcs_nickname ?? '')}, but why do <i>you</i> have it? When did you get it?"`);
    scene.actions([
      { label: 'I bought it…', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    scene.text('You look at her with a firm look. "I bought it with my own money."');
    scene.text('She looks at you in confusion. "Why would you ever want to spend your money on something like this?"');
    if (((st as any).selfmomtoyplay ?? 0) === 1) {
      scene.text('"I don\'t know, I saw that you had one and wanted to have one of my own…" you try to explain.');
      // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> walks up to you and starts brushing your hair. "...
      scene.text(`Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} walks up to you and starts brushing your hair. "You're aware this is for adults only, right? It's not something that you should be owning. You're still too young for this…"`);
    } else {
      qspCall(st, 'npc_relationship', 'modify', 'A29', 'dislike');
      scene.text('I don\'t know, I wanted to experiment. I read on the internet about it and that\'s how I got it," you try to explain…');
      // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> walks up to you and starts brushing your hair. "...
      scene.text(`Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} walks up to you and starts brushing your hair. "You're aware this is for adults only, right? It's not something that you should be owning. You're still too young for this…"`);
    }
    scene.actions([
      { label: 'But', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('"I think I\'m old enough…" you argue back.');
    // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> starts laughing. "If you say so, honey."
    scene.text(`Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} starts laughing. "If you say so, honey."`);
    if (((st as any).mc_inventory ?? 0)?.['dildo_small'] + ((st as any).mc_inventory ?? 0)?.['dildo_normal'] + ((st as any).mc_inventory ?? 0)?.['dildo_big'] + ((st as any).mc_inventory ?? 0)?.['dildo_large'] + ((st as any).mc_inventory ?? 0)?.['dildo_huge'] + ((st as any).mc_inventory ?? 0)?.['dildo_enormous'] + ((st as any).mc_inventory ?? 0)?.['dildo_gigantic'] > 1) {
      scene.text('"I see you\'ve already built quite up the collection…" she says while looking at you for an answer.');
      scene.text('"You never know which one you might need…" you try to explain.');
      scene.text('"Oh honey, you need to find the correct one for you and use that, not have lots of them laying around. What if we have guests over and they stumble across one? I would be so ashamed…"');
      scene.text('"Don\'t let them enter my room then! I don\'t want to talk about this anymore…" you reply.');
      scene.text('"Fine, fine, but I still don\'t understand why you need so many of them!" she comments as she leaves the room.');
    } else {
      if (((st as any).mc_inventory ?? 0)?.['dildo_small'] === 1  ||  ((st as any).mc_inventory ?? 0)?.['dildo_normal'] === 1) {
        scene.text('"I\'ll give you this at least, you picked a perfect starting dildo. The size should fit someone inexperienced…"');
      } else {
        if (((st as any).mc_inventory ?? 0)?.['dildo_big'] === 1  ||  ((st as any).mc_inventory ?? 0)?.['dildo_large'] === 1) {
          scene.text('"Isn\'t this a bit too big for you? It\'s… a bit bigger than I expected to find if I were ever to find something like this…"');
        } else {
          if (((st as any).mc_inventory ?? 0)?.['dildo_huge'] === 1  ||  ((st as any).mc_inventory ?? 0)?.['dildo_enormous'] === 1) {
            // TODO-QSP: dynamic text: <<$npc_nickname[''A29'']>> starts laughing. "Well, you certainly didn''t buy the...
            scene.text(`${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} starts laughing. "Well, you certainly didn't buy the correct one! There's no way this will fit-"`);
          } else {
            // TODO-QSP: dynamic text: "What were you thinking, <<$pcs_nickname>>?! This would ruin you forever! I forb...
            scene.text(`"What were you thinking, ${((st as any).pcs_nickname ?? '')}?! This would ruin you forever! I forbid you from even trying to use this!"`);
          }
        }
      }
      scene.text('You quickly yank the dildo out of her hand. "I don\'t want to talk about it! God, this is so awkward!" you yell as you start blushing.');
      scene.text('"Okay, okay. Just so you know I\'m not too fond of you owning a dildo, but it\'s better than having you running around having sex with boys."');
      // TODO-QSP: dynamic text: "<<$npc_nickname[''A29'']>>! Leave! Now!" you shout.
      scene.text(`"${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}! Leave! Now!" you shout.`);
    }
    scene.actions([
      { label: 'Put the dildo away [+iif(mc_inventory[\'dildo_small\'] + mc_inv...]', goto: ['bedrPar', ''] },
    ]);
  } },
    ]);
  } },
      { label: 'I got it from somewhere…', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A29', 'hate');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    // TODO-QSP: dynamic text: You keep quiet, hoping that your <<$npc_nickname[''A29'']>> will let it pass, bu...
    scene.text(`You keep quiet, hoping that your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} will let it pass, but she's adamant and asks you once again.`);
    scene.text('"Did Anya give it to you?!" she angrily asks.');
    scene.text('"N-No!" you stutter. "It was a gift from a friend. She misclicked when ordering and bought two by mistake, so she gave the extra one to me…"');
    // TODO-QSP: dynamic text: "A gift, huh?" Your <<$npc_nickname[''A29'']>> is hesitant to believe you.
    scene.text(`"A gift, huh?" Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} is hesitant to believe you.`);
    if (((st as any).mc_inventory ?? 0)?.['dildo_small'] + ((st as any).mc_inventory ?? 0)?.['dildo_normal'] + ((st as any).mc_inventory ?? 0)?.['dildo_big'] + ((st as any).mc_inventory ?? 0)?.['dildo_large'] + ((st as any).mc_inventory ?? 0)?.['dildo_huge'] + ((st as any).mc_inventory ?? 0)?.['dildo_enormous'] + ((st as any).mc_inventory ?? 0)?.['dildo_gigantic'] > 1) {
      scene.text('"Your friend must be quite rich if she gave all these away…"');
      scene.text('"They have quite a lot of money, yes…" you try to explain.');
      scene.text('"Oh honey, you need to find the correct one and use that, not have lots of them laying around. What if we have guests over and the stumble across one? I would be so ashamed…"');
      scene.text('"Don\'t let them enter my room then! This is getting too awkward and I don\'t want to talk about it anymore…" you reply.');
      scene.text('"Fine, fine, but I still don\'t understand why you need so many of them!" she comments as she leaves the room.');
    } else {
      if (((st as any).mc_inventory ?? 0)?.['dildo_small'] === 1  ||  ((st as any).mc_inventory ?? 0)?.['dildo_normal'] === 1) {
        scene.text('"I\'ll give your friend this at least. She picked the perfect starting dildo. The size should fit someone unexperienced…"');
      } else {
        if (((st as any).mc_inventory ?? 0)?.['dildo_big'] === 1  ||  ((st as any).mc_inventory ?? 0)?.['dildo_large'] === 1) {
          scene.text('"Isn\'t this a bit too big for you and your friend? It\'s… a bit bigger than I expected to find if I were ever to find something like this…"');
        } else {
          if (((st as any).mc_inventory ?? 0)?.['dildo_huge'] === 1  ||  ((st as any).mc_inventory ?? 0)?.['dildo_enormous'] === 1) {
            // TODO-QSP: dynamic text: <<$npc_nickname[''A29'']>> starts laughing. "Well, I understand why your friend ...
            scene.text(`${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} starts laughing. "Well, I understand why your friend gave it away! There's no way this will fit-"`);
          } else {
            // TODO-QSP: dynamic text: "What was your friend thinking, <<$pcs_nickname>>?! This would ruin anyone''s la...
            scene.text(`"What was your friend thinking, ${((st as any).pcs_nickname ?? '')}?! This would ruin anyone's lady parts forever! I forbid you from even trying to use this! Which friend gave you this? I need to call and tell her mother too…"`);
          }
        }
      }
      scene.text('You quickly yank the dildo out of her hand. "I don\'t want to talk about it! God, this is so awkward!" you yell as you start blushing.');
      scene.text('"Okay, okay. Just so you know I\'m not too fond of you owning a dildo, but it\'s better than having you running around having sex with boys."');
      // TODO-QSP: dynamic text: "<<$npc_nickname[''A29'']>>! Leave! Now!" you shout.
      scene.text(`"${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}! Leave! Now!" you shout.`);
    }
    scene.actions([
      { label: 'Put away the dildo [+iif(mc_inventory[\'dildo_small\'] + mc_inv...]', goto: ['bedrPar', ''] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'I got it from somewhere…', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A29', 'hate');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    // TODO-QSP: dynamic text: You keep quiet, hoping that your <<$npc_nickname[''A29'']>> will let it pass, bu...
    scene.text(`You keep quiet, hoping that your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} will let it pass, but she's adamant and asks you once again.`);
    scene.text('"Did Anya give it to you?!" she angrily asks.');
    scene.text('"N-No!" you stutter. "It was a gift from a friend. She misclicked when ordering and bought two, so she gave the extra one to me…"');
    // TODO-QSP: dynamic text: "A gift, huh?" Your <<$npc_nickname[''A29'']>> is hesitant to believe you.
    scene.text(`"A gift, huh?" Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} is hesitant to believe you.`);
    if (((st as any).mc_inventory ?? 0)?.['dildo_small'] + ((st as any).mc_inventory ?? 0)?.['dildo_normal'] + ((st as any).mc_inventory ?? 0)?.['dildo_big'] + ((st as any).mc_inventory ?? 0)?.['dildo_large'] + ((st as any).mc_inventory ?? 0)?.['dildo_huge'] + ((st as any).mc_inventory ?? 0)?.['dildo_enormous'] + ((st as any).mc_inventory ?? 0)?.['dildo_gigantic'] > 1) {
      scene.text('"Your friend must be quite rich if she gave all these away…"');
      scene.text('"They have quite a lot of money, yes…" you try to explain.');
      scene.text('"Oh honey, you need to find the correct one and use that, not have lots of them laying around. What if we have guests over and the stumble across one? I would be so ashamed…"');
      scene.text('"Don\'t let them enter my room then! This is getting too awkward and I don\'t want to talk about it anymore…" you reply.');
      scene.text('"Fine, fine… I still don\'t understand why you need so many of them…" she comments as she leaves the room.');
    } else {
      if (((st as any).mc_inventory ?? 0)?.['dildo_small'] === 1  ||  ((st as any).mc_inventory ?? 0)?.['dildo_normal'] === 1) {
        scene.text('"I\'ll give your friend this at least. She picked the perfect starting dildo. The size should fit someone unexperienced…"');
        scene.text('You quickly yank the dildo out of her hand. "I don\'t want to talk with you about this! This is so awkward!" you yell as you start blushing.');
        scene.text('"Okay, okay. Just so you know I\'m not too fond of you owning a dildo, but it\'s better than having you running around having sex with boys."');
        // TODO-QSP: dynamic text: "<<$npc_nickname[''A29'']>>! Leave! Now!" you shout.
        scene.text(`"${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}! Leave! Now!" you shout.`);
      } else {
        if (((st as any).mc_inventory ?? 0)?.['dildo_big'] === 1  ||  ((st as any).mc_inventory ?? 0)?.['dildo_large'] === 1) {
          scene.text('"Isn\'t this a bit too big for you and your friend? It\'s… a bit bigger than I expected to find if I were ever to find something like this…"');
          scene.text('You quickly yank the dildo out of her hand. "I don\'t want to talk with you about this! This is so awkward!" you yell as you start blushing.');
          scene.text('"Okay, okay. Just so you know I\'m not too fond of you owning a dildo, but it\'s better than having you running around having sex with boys."');
          // TODO-QSP: dynamic text: "<<$npc_nickname[''A29'']>>! Leave! Now!" you shout.
          scene.text(`"${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}! Leave! Now!" you shout.`);
        } else {
          if (((st as any).mc_inventory ?? 0)?.['dildo_huge'] === 1  ||  ((st as any).mc_inventory ?? 0)?.['dildo_enormous'] === 1) {
            // TODO-QSP: dynamic text: <<$npc_nickname[''A29'']>> starts laughing, "Well, I understand why your friend ...
            scene.text(`${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} starts laughing, "Well, I understand why your friend gave it away! There is now way this will fit-"`);
            scene.text('You quickly yank the dildo out of her hand. "I don\'t want to talk with you about this! This is so awkward!" you yell as you start blushing.');
            scene.text('"Okay, okay. Just so you know I\'m not too fond of you owning a dildo, but it\'s better than having you running around having sex with boys."');
            // TODO-QSP: dynamic text: "<<$npc_nickname[''A29'']>>! Leave! Now!" you shout.
            scene.text(`"${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}! Leave! Now!" you shout.`);
          } else {
            // TODO-QSP: dynamic text: "What was your friend thinking, <<$pcs_nickname>>?! This would ruin anyone''s la...
            scene.text(`"What was your friend thinking, ${((st as any).pcs_nickname ?? '')}?! This would ruin anyone's lady parts forever! I forbid you from even trying to use this! Which friend gave you this? I need to call and tell her mother too…"`);
            scene.text('You quickly yank the dildo out of her hand. "I don\'t want to talk with you about this! This is so awkward!" you yell as you start blushing.');
            scene.text('"Okay, okay. Just so you know I\'m not too fond of you owning a dildo, but it\'s better than having you running around having sex with boys."');
            // TODO-QSP: dynamic text: "<<$npc_nickname[''A29'']>>! Leave! Now!" you shout.
            scene.text(`"${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}! Leave! Now!" you shout.`);
          }
        }
      }
    }
    scene.actions([
      { label: 'Put the dildo away [+iif(mc_inventory[\'dildo_small\'] + mc_inv...]', goto: ['bedrPar', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterPlugFind(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  ((s as any).motherQW = (s as any).motherQW ?? {})['seen_plug'] = 1;
  qspCall(s, 'npc_relationship', 'modify', 'A29', 'dislike');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
  // TODO-QSP: dynamic text: "What the hell is this?!" your <<$npc_nickname[''A29'']>> yells out.
  scene.text(`"What the hell is this?!" your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} yells out.`);
  scene.text('"What do you mean?" you ask and turn around, but stop in your tracks when you notice what she\'s holding in her hand. It\'s your butt plug…');
  scene.text('Thinking about a quick answer, you go on the offensive. "Why are you going through my stuff?!"');
  // TODO-QSP: dynamic text: Not even batting an eye, your <<$npc_nickname[''A29'']>> scowls. "I was cleaning...
  scene.text(`Not even batting an eye, your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} scowls. "I was cleaning your room and I found this. What the hell, ${((s as any).pcs_nickname ?? '')}?!"`);
  scene.text('Your face turns red as she keeps holding it in front of you. "Have you been using this?"');
  if (((s as any).pcs_ass ?? 0) > 0) {
    qspCall(s, 'willpower', 'misc', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Lie', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Lie', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    scene.text('"No, I haven\'t! I can\'t believe you would ask me something like that!" you reply.');
    scene.text('"Good! I want you to throw this away. It\'s disgusting and I don\'t want it in my house. And what would your siblings say if they found it…"');
    scene.text('"Fine, fine. I\'ll return it…" you reply.');
    scene.text('"That\'s right. No daughter of mine will perform anal sex! It\'s not natural…"');
    scene.actions([
      { label: 'Hide the butt plug again', goto: ['bedrPar', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Tell the truth', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A29', 'dislike');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    scene.text('"I… have…" you meekly answer.');
    // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> sighs deeply. "Why the hell would you- Are you h...
    scene.text(`Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} sighs deeply. "Why the hell would you- Are you having anal sex?!"`);
    scene.text('"No…" you swallow hard. "I just wanted to know how it feels…"');
    // TODO-QSP: dynamic text: "Feel what?! How to have something shoved up your butt?!" Your <<$npc_nickname['...
    scene.text(`"Feel what?! How to have something shoved up your butt?!" Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} is clearly getting more and more upset. "I expected better than this, ${((st as any).pcs_nickname ?? '')}! I'm quite disappointed to be honest."`);
    scene.text('You stand in front of her with your head down, your cheeks flaming red as you try to think of an answer.');
    scene.text('"I won\'t be able to stop you now that you\'ve started to use it, but I better not hear about you having anal sex, understand?!" she sternly asks.');
    scene.actions([
      { label: 'Hide the butt plug again', goto: ['bedrPar', ''] },
    ]);
  } },
    ]);
  } else {
    scene.text('"It was just a friend at school playing a prank on me! I\'ve never used it!" you confidently answer back.');
    // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> frowns in disgust as she drops the butt plug. "I...
    scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} frowns in disgust as she drops the butt plug. "I hope she hasn't used it!"`);
    scene.text('"No idea," you shrug. "As I said, it was just a prank and I haven\'t had the time to return it yet."');
    scene.text('"Well then, return it as soon as you can. I don\'t want this thing laying around my house…"');
    scene.actions([
      { label: 'Return the butt plug', goto: ['bedrPar', ''] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterAskMotherWorkout(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
  // TODO-QSP: dynamic text: You wonder if your <<$npc_nickname[''A29'']>> would be interested in working out...
  scene.text(`You wonder if your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} would be interested in working out with you, even if it was just to do a short yoga session or go for a run, so you ask her if it's something she would be interested in doing.`);
  if (((s as any).npc_rel ?? 0)?.['A29'] >= 60) {
    ((s as any).motherQW = (s as any).motherQW ?? {})['workout'] = 1;
    scene.text('"You know what? That sounds like it could be fun. Grab me whenever I\'m home or when we\'re visiting your grandparents; it\'d be nice to get out into the countryside. You\'d better be dressed and ready, though!"');
  } else {
    // TODO-QSP: dynamic text: "No thanks, <<$pcs_nickname>>. I''ll leave all that to people younger than me."
    scene.text(`"No thanks, ${((s as any).pcs_nickname ?? '')}. I'll leave all that to people younger than me."`);
    // TODO-QSP: $OpenInnerThought+'I guess I need to work at it more. Maybe get more confident about my body to be c...
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Accept her decision', goto: ['mother', ''] },
  ]);
  scene.build();
}

function enterMotherWorkoutPav(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + ((Math.floor(Math.random() * 3) + 1));
  ((s as any).motherQW = (s as any).motherQW ?? {})['workout_day'] = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
  scene.text('"You ready to work out?" you ask.');
  // TODO-QSP: dynamic text: "Okay <<$pcs_nickname>>, I''ll get ready and meet you outside."
  scene.text(`"Okay ${((s as any).pcs_nickname ?? '')}, I'll get ready and meet you outside."`);
  // TODO-QSP: dynamic text: You wait outside for your <<$npc_nickname[''A29'']>> to appear.
  scene.text(`You wait outside for your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} to appear.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Meet her outside for a jog', goto: ['mother', 'mother_jog_pav'] },
    { label: 'Meet her outside for yoga', goto: ['mother', 'mother_yoga_pav'] },
  ]);
  scene.build();
}

function enterMotherWorkoutGad(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + ((Math.floor(Math.random() * 3) + 1));
  ((s as any).motherQW = (s as any).motherQW ?? {})['workout_day'] = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
  scene.text('"You ready to go work out?" you ask.');
  // TODO-QSP: dynamic text: "Okay <<$pcs_nickname>>, I''ll get ready and meet you outside."
  scene.text(`"Okay ${((s as any).pcs_nickname ?? '')}, I'll get ready and meet you outside."`);
  // TODO-QSP: dynamic text: You wait outside for your <<$npc_nickname[''A29'']>> to appear.
  scene.text(`You wait outside for your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} to appear.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Meet her outside for a jog', goto: ['mother', 'mother_jog_gad'] },
    { label: 'Meet her outside for yoga', goto: ['mother', 'mother_yoga_gad'] },
  ]);
  scene.build();
}

function enterMotherJogPav(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + ((Math.floor(Math.random() * 3) + 4));
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/mom/ready_run.jpg');
  // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> soon appears from around the corner. She does a ...
  scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} soon appears from around the corner. She does a few stretches before announcing that she's ready to get moving. The two of you walk to the park, where you both do a little stretching before you start jogging.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Go jogging', handler: (st: GameState) => {
    qspCall(st, 'exercise', 'tier1', 60, 'run');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/pavrun1.jpg');
    // TODO-QSP: dynamic text: You and your <<$npc_nickname[''A29'']>> start jogging down one of the park paths...
    scene.text(`You and your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} start jogging down one of the park paths. It's not particularly taxing, but you're glad to spend time with her. Running through the park is quite refreshing overall, especially with company.`);
    scene.actions([
      { label: 'Return home', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A29', (Math.floor(Math.random() * 2) + 2));
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/pavrun2.jpg');
    // TODO-QSP: dynamic text: With your joint jogging session drawing to a close, you congratulate your <<$npc...
    scene.text(`With your joint jogging session drawing to a close, you congratulate your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} on a good work out. She might not be as perky as you are afterwards, but you get the impression she enjoyed spending time with you.`);
    scene.text('She has a drink of water and smiles at you, catching her breath before telling you that she had fun and that you should do it again sometime.');
    scene.actions([
      { label: 'Walk back to the apartment', goto: ['korrPar', ''] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMotherYogaPav(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + (0);
  qspCall(s, 'npc_relationship', 'modify', 'A29', (Math.floor(Math.random() * 6) + 5));
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
  // TODO-QSP: dynamic text: You ask your <<$npc_nickname[''A29'']>> if she would like to do some yoga up at ...
  scene.text(`You ask your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} if she would like to do some yoga up at the park. "Of course, I'd love to give yoga a try! I'll just put on some more appropriate clothing first."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Meet her outside', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + ((Math.floor(Math.random() * 3) + 2));
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/pavrun1.jpg');
    // TODO-QSP: dynamic text: You see your <<$npc_nickname[''A29'']>> has put on some very light clothing as y...
    scene.text(`You see your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} has put on some very light clothing as you head off towards the park, chatting as you go. It's not long before you arrive, so you quickly get ready to start your routine.`);
    scene.actions([
      { label: 'Do some yoga', handler: (st: GameState) => {
    (st as any).timemult = 6;
    qspCall(st, 'exercise', 'tier2', (((st as any).timemult ?? 0)*5), 'sprt', 'agil');
    (st as any).pcs_willpwr = ((st as any).pcs_willpwr ?? 0) + ((Math.floor(Math.random() * 7) + 6));
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/pavyoga2.jpg');
    // TODO-QSP: dynamic text: You and your <<$npc_nickname[''A29'']>> do some simple yoga routines together. I...
    scene.text(`You and your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} do some simple yoga routines together. It isn't as pressing as when you do them by yourself, but you enjoy being able to spend time with her. Sometimes men walk by and leer at you both for a while, seeming to enjoy the free show.`);
    scene.actions([
      { label: 'Check on her', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + ((Math.floor(Math.random() * 3) + 2));
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/pavyoga3.jpg');
    // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> is more flexible than you gave her credit for. "...
    scene.text(`Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} is more flexible than you gave her credit for. "What? Just because I'm older doesn't mean I don't try and take care of myself! Don't look so surprised!"`);
    scene.text('You compliment her for both her efforts with yoga and for keeping fit before you pack up and head back to the apartment.');
    scene.actions([
      { label: 'Walk back to the apartment', goto: ['korrPar', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMotherJogGad(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + ((Math.floor(Math.random() * 4) + 2));
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/mom/ready_run.jpg');
  // TODO-QSP: dynamic text: You head outside to wait for your <<$npc_nickname[''A29'']>> and do a little str...
  scene.text(`You head outside to wait for your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} and do a little stretching while you wait.`);
  // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> is ready very quickly, and she''s showing quite ...
  scene.text(`Your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} is ready very quickly, and she's showing quite a lot of enthusiasm for the run. She must be looking forward to it, or spending time with you.`);
  scene.text('"Well, I\'m ready! Should we set off?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Let her take the lead', handler: (st: GameState) => {
    qspCall(st, 'exercise', 'tier1', 60, 'run');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/gadrun1.jpg');
    // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> leads you out of the house and into the countrys...
    scene.text(`Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} leads you out of the house and into the countryside. You let her take the lead since she knows the area well. This also gives you the chance to chat with her as you jog along.`);
    // TODO-QSP: dynamic text: You talk about a variety of topics and enjoy spending time with her, as well as ...
    scene.text(`You talk about a variety of topics and enjoy spending time with her, as well as getting the chance to jog around the countryside and see all the interesting routes your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} knows about and enjoys taking.`);
    scene.actions([
      { label: 'Return home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'npc_relationship', 'modify', 'A29', (Math.floor(Math.random() * 2) + 2));
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/gadrun2.jpg');
    // TODO-QSP: dynamic text: With your run going very smoothly, it doesn''t take too long until you circle ba...
    scene.text(`With your run going very smoothly, it doesn't take too long until you circle back to the cottage and finish. You and your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} feel quite tired, but she looks very happy from the experience overall and you're glad you have the chance to spend time with her like this.`);
    scene.actions([
      { label: 'Walk back to the cottage', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMotherYogaGad(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + (0);
  qspCall(s, 'npc_relationship', 'modify', 'A29', (Math.floor(Math.random() * 6) + 5));
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
  // TODO-QSP: dynamic text: You ask your <<$npc_nickname[''A29'']>> if she would like to do some yoga up at ...
  scene.text(`You ask your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} if she would like to do some yoga up at the nearby meadow, reassuring her as to how secluded it is.`);
  scene.text('"Of course, I\'d love to give yoga a try. I\'ll just go and put on some more appropriate clothing first."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Meet her outside', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + ((Math.floor(Math.random() * 3) + 2));
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/gadyoga1.jpg');
    // TODO-QSP: dynamic text: You see your <<$npc_nickname[''A29'']>> has put on some very light clothing and ...
    scene.text(`You see your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} has put on some very light clothing and you both head off towards the meadow, chatting as you go. It's not long before you arrive and you quickly get ready to start your routine.`);
    scene.actions([
      { label: 'Do some yoga', handler: (st: GameState) => {
    qspCall(st, 'exercise', 'tier2', 30, 'sprt', 'agil');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/gadyoga2.jpg');
    // TODO-QSP: dynamic text: You and your <<$npc_nickname[''A29'']>> do some simple yoga routines together. I...
    scene.text(`You and your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} do some simple yoga routines together. It isn't as pressing as when you do them by yourself, but you enjoy being able to spend time with her.`);
    // TODO-QSP: dynamic text: The area is quite secluded and private, and you and your <<$npc_nickname[''A29''...
    scene.text(`The area is quite secluded and private, and you and your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} are left to run your routine in peace and quiet. It's a nice experience and gives you plenty of time to talk whilst going through your poses and stretches.`);
    scene.actions([
      { label: 'Check on her', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + ((Math.floor(Math.random() * 3) + 2));
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/gadyoga3.jpg');
    // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> is more flexible than you gave her credit for. "...
    scene.text(`Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} is more flexible than you gave her credit for. "What? Just because I am older doesn't mean I don't try and take care of myself! Don't look so surprised!"`);
    scene.text('You compliment her for both her efforts with yoga and for keeping fit before packing up and heading back to the cottage.');
    scene.actions([
      { label: 'Walk back to the cottage', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
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

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'check_workout':
      enterCheckWorkout(s, scene);
      break;
    case 'referral':
      enterReferral(s, scene);
      break;
    case 'ambush_referral_pass':
      enterAmbushReferralPass(s, scene);
      break;
    case 'ambush_referral_fail':
      enterAmbushReferralFail(s, scene);
      break;
    case 'referral_fail':
      enterReferralFail(s, scene);
      break;
    case 'referral_fail1':
      enterReferralFail1(s, scene);
      break;
    case 'referral_pass':
      enterReferralPass(s, scene);
      break;
    case 'dildo_gyno_fail':
      enterDildoGynoFail(s, scene);
      break;
    case 'dildo_gyno_pass':
      enterDildoGynoPass(s, scene);
      break;
    case 'hypnoPregReact':
      enterHypnoPregReact(s, scene);
      break;
    case 'pregreact':
      enterPregreact(s, scene);
      break;
    case 'pregreactnude':
      enterPregreactnude(s, scene);
      break;
    case 'pregreact1Hypno':
      enterPregreact1Hypno(s, scene);
      break;
    case 'pregreact1':
      enterPregreact1(s, scene);
      break;
    case 'pregreactbrother':
      enterPregreactbrother(s, scene);
      break;
    case 'pregreactstepdad':
      enterPregreactstepdad(s, scene);
      break;
    case 'abortion_talk':
      enterAbortionTalk(s, scene);
      break;
    case 'abortion_talk_preg':
      enterAbortionTalkPreg(s, scene);
      break;
    case 'kickedout':
      enterKickedout(s, scene);
      break;
    case 'get_belongings':
      enterGetBelongings(s, scene);
      break;
    case 'motherQW_2':
      enterMotherQW_2(s, scene);
      break;
    case 'clo_react':
      enterCloReact(s, scene);
      break;
    case 'condom_steal':
      enterCondomSteal(s, scene);
      break;
    case 'condom_find':
      enterCondomFind(s, scene);
      break;
    case 'dildo_find':
      enterDildoFind(s, scene);
      break;
    case 'plug_find':
      enterPlugFind(s, scene);
      break;
    case 'ask_mother_workout':
      enterAskMotherWorkout(s, scene);
      break;
    case 'mother_workout_pav':
      enterMotherWorkoutPav(s, scene);
      break;
    case 'mother_workout_gad':
      enterMotherWorkoutGad(s, scene);
      break;
    case 'mother_jog_pav':
      enterMotherJogPav(s, scene);
      break;
    case 'mother_yoga_pav':
      enterMotherYogaPav(s, scene);
      break;
    case 'mother_jog_gad':
      enterMotherJogGad(s, scene);
      break;
    case 'mother_yoga_gad':
      enterMotherYogaGad(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const mother: LocationDef = {
  name: 'mother',
  title: '<br>You feel too hungry to do this.',
  region: 'other',
  description: ['"I tell everyone my younger daughter is decent, but it turns out she sleeps around like a common whore and proudly displays the stains for the whole town to see! Get out of my sight, slut!"'],
  enter: enter,
};
