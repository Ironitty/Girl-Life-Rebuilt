import { qspCall, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bedrPar2', '');
  (s as any).location_type = 'private';
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'family_schedule', '');
  scene.text('<center><b>Master bedroom</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/home/bedrpar2.jpg');
  scene.text('The room in which your parents sleep. Their large bed, <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027bedrPar2/u0027, /u0027parents_wardrobe/u0027); return false;">wardrobe</a> and other closets take up most of the space.');
  if (((s as any).locat ?? 0)?.['Fam_inGad'] === 0) {
    if (((s as any).locat ?? 0)?.['Mother'] === 1  &&  ((s as any).locat ?? 0)?.['Stepdad'] === 1) {
      scene.text('Your mother and stepfather are sleeping on the bed.');
    } else {
      if (((s as any).locat ?? 0)?.['Mother'] === 1) {
        scene.text('Your mother is sleeping on the bed.');
      } else {
        if (((s as any).locat ?? 0)?.['Stepdad'] === 1) {
          scene.text('Your stepfather is sleeping on the bed.');
        }
      }
    }
  }
  if (((s as any).locat ?? 0)?.['Fam_inGad'] === 1  ||  (((s as any).locat ?? 0)?.['Fam_inGad'] === 0  &&  ((s as any).hour ?? 0) > 6  &&  ((s as any).hour ?? 0) < 21)) {
    if (((s as any).kamasutra_day ?? 0) !== ((s as any).daystart ?? 0)) {
      scene.text('You notice a <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027bedrPar2/u0027, /u0027kamasutra/u0027); return false;">book laying on the bed</a>.');
    }
    if (((s as any).prezikday ?? 0) !== ((s as any).daystart ?? 0)) {
      if (((s as any).prezikProver ?? 0) >= 3) {
        (s as any).prezikday = ((s as any).daystart ?? 0) - 4;
        scene.actions([
          { label: 'Steal condoms from your parents\' stash', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + ((Math.floor(Math.random() * 3) + 5));
    qspCall(st, 'stat', '');
    if ((!((st as any).preziktype ?? 0))) {
      ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['equipped_condoms'] = ((st as any).mc_inventory['equipped_condoms'] ?? 0) + ((Math.floor(Math.random() * 3) + 1));
    }
    if (((st as any).preziktype ?? 0) === 1  ||  ((st as any).preziktype ?? 0) === 2) {
      ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['normal_condoms'] = ((st as any).mc_inventory['normal_condoms'] ?? 0) + ((Math.floor(Math.random() * 3) + 1));
    }
    (st as any).prezikday = ((st as any).daystart ?? 0);
    (st as any).prezikProver = 0;
    scene.img('images/pc/items/accessories/birthcontrol/condoms_steal.jpg');
    // TODO-QSP: dynamic text: 'After you make sure you''re not seen, you quickly search your parents'' room fo...
    scene.text('After you make sure you\'re not seen, you quickly search your parents\' room for their condom stash and take a few. You now have ' + (((!((st as any).preziktype ?? 0))) ? ('' + (((st as any).mc_inventory ?? 0)?.['equipped_condoms'] ?? '') + '') : ('' + (((st as any).mc_inventory ?? 0)?.['normal_condoms'] ?? '') + '')) + ' condoms.');
    scene.actions([
      { label: 'Continue', goto: ['bedrPar2', ''] },
    ]);
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the hallway', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['korrPar', ''] },
  ]);
  scene.build();
}

function enterKamasutra(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  scene.img('images/locations/pavlovsk/resident/apartment/home/book.jpg');
  scene.text('The cover says "Kama Sutra"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    { label: 'Read', handler: (st: GameState) => {
    (st as any).kamasutra_page = 0;
    (st as any).kamasutra_day = ((st as any).daystart ?? 0);
  }, goto: ['bedrPar2', 'read_book'] },
  ]);
  scene.build();
}

function enterReadBook(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (2);
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/pc/items/accessories/books/kamasutra/ik'...
  scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/pc/items/accessories/books/kamasutra/ik` + ((s as any).kamasutra_page ?? '') + '.jpg"></td></tr><tr><td align=center>' + ((((s as any).kamasutra_page ?? 0) < 1) ? ('') : ('<a href="#" onclick="window.__gameStore.setState((s) => { s.kamasutra_page -=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027bedrPar2/u0027, /u0027read_book/u0027); return false;"><br>Previous page</a>')) + '</td><td align=center>' + ((((s as any).kamasutra_page ?? 0) > 45) ? ('') : ('<a href="#" onclick="window.__gameStore.setState((s) => { s.kamasutra_page +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027bedrPar2/u0027, /u0027read_book/u0027); return false;"><br>Next page</a>')) + '</center>');
  if (((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).week ?? 0) === 6  &&  ((s as any).family_trip ?? 0) === 1) {
    scene.actions([
      { label: 'Masturbate', goto: ['selfplay', 'start'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Close the book', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterParentsWardrobe(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/apartment/home/wardrobe.jpg');
  scene.text('An old looking wardrobe, probably from the Soviet times.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave ', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    { label: 'Rummage', goto: ['bedrPar2', 'wardrobe_search'] },
  ]);
  scene.build();
}

function enterWardrobeSearch(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locat ?? 0)?.['Fam_inGad'] === 0  &&  (((s as any).locat ?? 0)?.['Mother'] === 1  ||  ((s as any).locat ?? 0)?.['Mother'] === 3  ||  ((s as any).locat ?? 0)?.['Stepdad'] === 1  ||  ((s as any).locat ?? 0)?.['Stepdad'] === 2)) {
    scene.text('What are you thinking? You can\'t go through the wardrobe while your parents are in the room!');
    scene.actions([
{ label: 'Leave ', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
]);
    return;
  }
  if ((Math.floor(Math.random() * 2) + 0) === 0  ||  ((s as any).tookmomdildo ?? 0) === 1) {
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/ho...
    scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/home/wardrobesearch` + (Math.floor(Math.random() * 4) + 1) + '.jpg"></center>');
    // TODO-QSP: $failwords[0] = 'You don''t find anything interesting.'
    // TODO-QSP: $failwords[1] = 'You find some clothes and underwear.'
    // TODO-QSP: $failwords[2] = 'You dig through your mother''s closet, but find nothing interesting except underwea...
  } else {
    scene.img('images/locations/pavlovsk/resident/apartment/home/wardrobetoy.jpg');
    // TODO-QSP: $findmomtoy[0] = 'Digging through the closet, you find a <a href="exec: gt ''bedrPar2'',''momtoy_pla...
    // TODO-QSP: $findmomtoy[1] = 'Rummaging through your mother''s lingerie, you find a small <a href="exec: gt ''be...
    // TODO-QSP: $findmomtoy[2] = 'You find your mother''s <a href="exec: gt ''bedrPar2'',''momtoy_play''">toy</a>.'
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Close the cabinet', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterMomtoyPlay(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/mast/start.jpg');
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  if (((s as any).pcs_horny ?? 0) >= 70) {
    // TODO-QSP: dynamic text: You''re really thinking about experimenting with <<$npc_nickname[''A29'']>>''s d...
    scene.text(`You're really thinking about experimenting with ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')}'s dildo.`);
    scene.text('I can also take it for later use?');
    scene.actions([
      { label: 'Play with it', handler: (st: GameState) => {
    (st as any).dildohand = 10;
    (st as any).selfmomtoyplay = 1;
    qspGoto(st, 'selfplay', 'start');
  } },
      { label: 'Steal the dildo and leave', handler: (st: GameState) => {
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['dildo_small'] = 1;
    (st as any).tookmomdildo = 1;
    (st as any).selfmomtoyplay = 1;
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  }
  // TODO-QSP: $OpenInnerThought + 'Maybe I should put the dildo back? <<$npc_nickname[''A29'']>> will probably not...
  // TODO-QSP: end
  scene.actions([
    { label: 'Put it back', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterPeek(s: GameState, scene: SceneBuilder): void {
  (s as any).parentsexday = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/mom/sex/momvlad1.jpg');
  scene.text('You crack the door open just a little and see your mother and Vladimir near their bed.');
  scene.text('"Stop! The kids are here," your mother says as Vlad starts running his hands over her body.');
  scene.text('He doesn\'t seem to care about what she says since he doesn\'t stop. "Come on, they won\'t hear us and you know you want it."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['korrPar', ''] },
    { label: 'Keep peeking', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/sex/momvlad2.jpg');
    scene.text('You mother seems to be loving the attention and doesn\'t put up much of a fight as he starts to undress her.');
    scene.text('Once she\'s mostly naked, he pushes her down on the bed so she\'s sitting on it in front of him, her head about crotch height to him. Knowing what he wants, she opens the fly on his pants and pulls out his cock, stroking it a few times in her hand until he gets hard.');
    scene.text('She then takes his dick into her mouth and starts sucking it. He moans softly as she does. "Fuck, you\'re the best cocksucker ever, Natasha."');
    qspCall(st, 'arousal', 'voyeur_sex', 3);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['korrPar', ''] },
      { label: 'Keep peeking', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/sex/momvlad3.jpg');
    scene.text('After spending several minutes sucking Vlad\'s cock, she helps him strip while continuing to suck his dick. Once he\'s naked, he lies down on the bed and she straddles him and quickly starts riding his dick reverse cowgirl style.');
    scene.text('Both of them start moaning as they fuck. "Oh god Vlad, your dick feels so good in my pussy! It\'s so big!"');
    qspCall(st, 'arousal', 'voyeur_sex', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['korrPar', ''] },
      { label: 'Keep peeking', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/sex/momvlad4.jpg');
    scene.text('Vlad suddenly grabs her and throws her on her side on the bed. He turns on his side, lifting up her leg with one hand while using the other to guide his cock.');
    scene.text('He feels around until he places the head of his dick against her anus, then pushes it in, using only her pussy juices for lubrication. It slides in surprisingly easy and you can only guess that this is far from the first time your mother has had a dick in her ass.');
    scene.text('They both moan in pleasure and she rubs her clit as Vlad fucks her ass.');
    qspCall(st, 'arousal', 'voyeur_sex', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['korrPar', ''] },
      { label: 'Keep peeking', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/sex/momvlad5.jpg');
    scene.text('They keep going for several more minutes until Vlad starts to pant and buries his dick balls deep in your mother\'s ass and lets out a loud moan as he twitches.');
    scene.text('After a few seconds, he pulls out of her and rolls off the bed as she gets on her back and spreads her ass, giving both you and Vlad a good view of her asshole as his cum starts leaking out of it.');
    scene.text('"You\'re such a nasty bitch, Natasha!" he laughs.');
    scene.text('She smiles at him. "That\'s why you love me," she replies.');
    scene.text('They start getting cleaned up and you decide it\'s time to go before you get caught.');
    qspCall(st, 'arousal', 'voyeur_sex', 3);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['korrPar', ''] },
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

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'kamasutra':
      enterKamasutra(s, scene);
      break;
    case 'read_book':
      enterReadBook(s, scene);
      break;
    case 'parents_wardrobe':
      enterParentsWardrobe(s, scene);
      break;
    case 'wardrobe_search':
      enterWardrobeSearch(s, scene);
      break;
    case 'momtoy_play':
      enterMomtoyPlay(s, scene);
      break;
    case 'peek':
      enterPeek(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const bedrPar2: LocationDef = {
  name: 'bedrPar2',
  title: 'Master bedroom',
  region: 'other',
  locationType: 'private',
  description: ['Your mother and stepfather are sleeping on the bed.'],
  enter: enter,
};
