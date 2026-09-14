import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterHome(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'core_library', 'setloc', 'JuliaMilHome', 'home');
  (s as any).popolaini = 0;
  (s as any).saunaYouRoom = 0;
  (s as any).boycherdaksex = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  if (((s as any).NatashaHomeDay ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).NatashaHomeDay = ((s as any).daystart ?? 0);
    (s as any).NatashaLoc = 0;
  }
  if (((s as any).juliaQW ?? 0)?.['home_unlocked'] === 0) {
    if (!(s as any).juliaQW) (s as any).juliaQW = {}; (s as any).juliaQW['home_unlocked'] = 1;
  }
  scene.img('images/locations/pavlovsk/resident/apartment/aptdoor.jpg');
  if (((s as any).kanikuli ?? 0) === 0  &&  ((s as any).hour ?? 0) > 6  &&  ((s as any).hour ?? 0) < 15  &&  ((s as any).week ?? 0) < 6) {
    scene.text('You knock on the door, but no one comes to answer. Julia must not be home.');
  } else {
    if (((s as any).hour ?? 0) > 20) {
      scene.text('It\'s too late in the day to visit Julia.');
    } else {
      if (((s as any).hour ?? 0) < 8) {
        scene.text('It\'s too early in the day to visit Julia.');
      } else {
        // TODO-QSP: dynamic text: You knock on the door. You hear footsteps in the apartment and sure enough, a fe...
        scene.text(`You knock on the door. You hear footsteps in the apartment and sure enough, a few seconds later Julia opens the door. "Oh, hi ${((s as any).pcs_nickname || '')}! Come on in!"`);
        scene.actions([
          { label: 'Enter Julia\'s apartment', goto: ['JuliaMilHome', 'hallway'] },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['pod_ezd', 'etaj_3'] },
  ]);
  scene.build();
}

function enterHallway(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'core_library', 'setloc', 'JuliaMilHome', 'hallway');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Entrance hall</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/juliahome/hallway.jpg');
  scene.text('As you enter the Milov\'s hallway, you notice it very nice, well decorated and very clean. Everything in it\'s place.');
  // TODO-QSP: end
  scene.actions([
    { label: '<b>Leave Julia\'s apartment</b>', goto: ['JuliaMilHome', 'leave_apartment'] },
    { label: 'Julia\'s Room', goto: ['JuliaMilHome', 'julia_room'] },
    { label: 'Living Room', goto: ['JuliaMilHome', 'livingroom'] },
    { label: 'Kitchen', goto: ['JuliaMilHome', 'kitchen'] },
    { label: 'Bathroom', goto: ['JuliaMilHome', 'bathroom'] },
  ]);
  scene.build();
}

function enterLivingroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'JuliaMilHome', 'livingroom');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Living room</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/juliahome/living_room.jpg');
  scene.text('Like the rest of the house the living room is spotless, with plenty of decorations around, arranged just perfectly.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the room', goto: ['JuliaMilHome', 'hallway'] },
  ]);
  scene.build();
}

function enterKitchen(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'JuliaMilHome', 'kitchen');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'kit_din', '');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Kitchen</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/juliahome/kitchen.jpg');
  scene.text('The kitchen is small but has all the necessary things. There is a stove, a fridge, a sink, and a tiny dining table. Everything looks sparkling clean.');
  qspCall(s, 'kit_din', 'driwater');
  qspCall(s, 'kit_din', 'dritea');
  qspCall(s, 'kit_din', 'fill_bottle');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the room', goto: ['JuliaMilHome', 'hallway'] },
    { label: 'Look in the fridge', goto: ['JuliaMilHome', 'fridge'] },
  ]);
  scene.build();
}

function enterFridge(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  if (((s as any).juliafood_day ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).juliasup_count = 1;
    (s as any).julialefto_count = 1;
    (s as any).juliawater_count = 1;
    (s as any).juliatea_count = 1;
    (s as any).juliasanw_count = 1;
  }
  if (((s as any).julialefto_count ?? 0) >= 1) {
  }
  if (((s as any).juliasup_count ?? 0) >= 1) {
  }
  if (((s as any).juliawater_count ?? 0) >= 1) {
  }
  if (((s as any).juliatea_count ?? 0) >= 1) {
  }
  if (((s as any).juliasanw_count ?? 0) >= 1) {
  }
  scene.img('images/shared/home/kitchen/fridge.jpg');
  // TODO-QSP: dynamic text: You open the fridge and see:<<$julia_tea>><<$julia_water>><<$julia_sup>><<$julia...
  scene.text(`You open the fridge and see:${((s as any).julia_tea || '')}${((s as any).julia_water || '')}${((s as any).julia_sup || '')}${((s as any).julia_lefto || '')}${((s as any).julia_sanw || '')}`);
  if (((s as any).julialefto_count ?? 0) > 0) {
    scene.actions([
      { label: 'Eat some left overs', handler: (st: GameState) => {
    (s as any).juliafood_day = ((s as any).daystart ?? 0);
    (s as any).julialefto_count = ((s as any).julialefto_count ?? 0) - (1);
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
    qspCall(s, 'mood', 'raise', 'small');
    (s as any).fat = ((s as any).fat ?? 0) + (2);
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (50);
    if (((s as any).pcs_hydra ?? 0) >= 100) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (20);
    } else {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (40);
    }
    (s as any).cumspclnt = 2;
    qspCall(s, 'cum_cleanup', '');
    (s as any).pcs_breath = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/shared/food/leftovers.jpg');
    scene.text('It seems to be left overs from a last nights dinner, it looks very good even for left overs.');
    scene.actions([
      { label: 'Continue', goto: ['JuliaMilHome', 'kitchen'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).juliatea_count ?? 0) >= 0) {
      scene.actions([
        { label: 'Have some tea', handler: (st: GameState) => {
    (s as any).juliafood_day = ((s as any).daystart ?? 0);
    (s as any).juliatea_count = ((s as any).juliatea_count ?? 0) - (1);
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
    qspCall(s, 'mood', 'raise', 'small');
    (s as any).fat = ((s as any).fat ?? 0) + (2);
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (50);
    if (((s as any).pcs_hydra ?? 0) >= 100) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (20);
    } else {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (40);
    }
    (s as any).cumspclnt = 2;
    qspCall(s, 'cum_cleanup', '');
    (s as any).pcs_breath = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/shared/drinks/tea.jpg');
    scene.text('You find some tea and make it.');
    scene.actions([
      { label: 'Continue', goto: ['JuliaMilHome', 'kitchen'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).juliawater_count ?? 0) >= 0) {
        scene.actions([
          { label: 'Have some water', handler: (st: GameState) => {
    (s as any).juliafood_day = ((s as any).daystart ?? 0);
    (s as any).juliawater_count = ((s as any).juliawater_count ?? 0) - (1);
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
    qspCall(s, 'mood', 'raise', 'small');
    (s as any).fat = ((s as any).fat ?? 0) + (2);
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (50);
    if (((s as any).pcs_hydra ?? 0) >= 100) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (20);
    } else {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (40);
    }
    (s as any).cumspclnt = 2;
    qspCall(s, 'cum_cleanup', '');
    (s as any).pcs_breath = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/shared/food/waterbottle1.jpg');
    scene.text('You drink some bottled water.');
    scene.actions([
      { label: 'Continue', goto: ['JuliaMilHome', 'kitchen'] },
    ]);
  } },
        ]);
      } else {
        if (((s as any).juliasup_count ?? 0) >= 0) {
          scene.actions([
            { label: 'Have some soup', handler: (st: GameState) => {
    (s as any).juliafood_day = ((s as any).daystart ?? 0);
    (s as any).juliasup_count = ((s as any).juliasup_count ?? 0) - (1);
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
    qspCall(s, 'mood', 'raise', 'small');
    (s as any).fat = ((s as any).fat ?? 0) + (2);
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (50);
    if (((s as any).pcs_hydra ?? 0) >= 100) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (20);
    } else {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (40);
    }
    (s as any).cumspclnt = 2;
    qspCall(s, 'cum_cleanup', '');
    (s as any).pcs_breath = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/shared/food/soup.jpg');
    scene.text('You find some soup in the fridge, you spoon our a bowlful to eat.');
    scene.actions([
      { label: 'Continue', goto: ['JuliaMilHome', 'kitchen'] },
    ]);
  } },
          ]);
        } else {
          if (((s as any).juliasanw_count ?? 0) >= 0) {
            scene.actions([
              { label: 'Make a sandwich', handler: (st: GameState) => {
    (s as any).juliafood_day = ((s as any).daystart ?? 0);
    (s as any).juliasanw_count = ((s as any).juliasanw_count ?? 0) - (1);
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
    qspCall(s, 'mood', 'raise', 'small');
    (s as any).fat = ((s as any).fat ?? 0) + (2);
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (50);
    if (((s as any).pcs_hydra ?? 0) >= 100) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (20);
    } else {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (40);
    }
    (s as any).cumspclnt = 2;
    qspCall(s, 'cum_cleanup', '');
    (s as any).pcs_breath = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/shared/food/reuben.jpg');
    scene.text('You get all the stuff you need from the fridge then get some bread out of the cabinet and make yourself a sandwich.');
    scene.actions([
      { label: 'Continue', goto: ['JuliaMilHome', 'kitchen'] },
    ]);
  } },
            ]);
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Close the refrigerator', goto: ['JuliaMilHome', 'kitchen'] },
  ]);
  scene.build();
}

function enterBathroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'JuliaMilHome', 'bathroom');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Bathroom</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/juliahome/bathroom.jpg');
  scene.text('The bathroom is kept spotlessly clean. Everything here has a well cared for look to it.');
  scene.text('The toilet sits along the wall next to a small bathtub.');
  scene.text('You can do your hair and makeup in the <a href="exec:gt \'mirror\', \'start\'">mirror</a> above the sink.');
  qspCall(s, 'piercing_management', 'set_manage_string');
  qspCall(s, 'din_van', 'bath');
  qspCall(s, 'din_van', 'bteeth');
  qspCall(s, 'din_van', 'tampon');
  qspCall(s, 'din_van', 'basin');
  qspCall(s, 'din_van', 'prvt_pee');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the bathroom', goto: ['JuliaMilHome', 'hallway'] },
    { label: 'Take a shower', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    (s as any).noshampoo = 1;
    qspCall(s, 'din_van', 'showerdin');
    qspCall(s, 'stat', '');
    scene.text('<center><b>Bathroom</b></center>');
    scene.img('images/shared/home/bathroom/dush.mp4');
    scene.text('You take a quick shower.');
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the shower.');
    }
    scene.actions([
      { label: 'Take a selfie', handler: (st: GameState) => {
    qspCall(st, 'telefon', 'Phone_selfie_image_bathing', 'shower');
  } },
      { label: 'Get out of the shower', goto: ['JuliaMilHome', 'bathroom'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterJuliaRoom(s: GameState, scene: SceneBuilder): void {
  (s as any).music_loop = 1;
  qspCall(s, 'core_library', 'setloc', 'JuliaMilHome', 'julia_room');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  if (((s as any).juliaQW ?? 0)?.['home_unlocked'] === 0) {
    if (!(s as any).juliaQW) (s as any).juliaQW = {}; (s as any).juliaQW['home_unlocked'] = 1;
  }
  scene.text('<center><b>Julia\'s Room</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/juliahome/julia_bedroom.jpg');
  scene.text('Julia has a nice room, decorated with high quality furnishings. There are books everywhere, she must really like to read.');
  if (((s as any).lernHome ?? 0) > 0  &&  ((s as any).juliaQW ?? 0)?.['homework_day'] !== ((s as any).daystart ?? 0)) {
    scene.text('Julia arranges her school books on a large desk and gets ready to do her homework, inviting you to join her.');
    scene.actions([
      { label: 'Do your homework with Julia', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    if (((s as any).lernHome ?? 0) > 1) {
      qspCall(s, 'grades', 'homework', 'school', 'yes', 2, 1, 'A12');
    } else {
      qspCall(s, 'grades', 'homework', 'school', 'yes', 1, 1, 'A12');
    }
    if (!(s as any).juliaQW) (s as any).juliaQW = {}; (s as any).juliaQW['homework_day'] = ((s as any).daystart ?? 0);
    qspCall(s, 'npc_relationship', 'modify', 'A12', 'love');
    (s as any).lern = ((s as any).lern ?? 0) + (Math.floor(Math.random() * 4) + 3);
    qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 2) + 1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big12.jpg');
    scene.text('You spend an hour doing your homework with Julia, and thanks to her you manage to learn quite a lot. She\'s a very clever girl, and good at explaining things.');
    scene.actions([
      { label: 'Relax after doing your homework', goto: ['JuliaMilHome', 'julia_room'] },
    ]);
  } },
    ]);
  } else {
    scene.text('Julia is sitting on her bed.');
    if (((s as any).juliaQW ?? 0)?.['eatJulMilDay'] !== ((s as any).daystart ?? 0)) {
      scene.text('Julia smiles at you and offers you something to eat.');
      scene.actions([
        { label: 'Have a meal with Julia', handler: (st: GameState) => {
    if (!(s as any).juliaQW) (s as any).juliaQW = {}; (s as any).juliaQW['eatJulMilDay'] = ((s as any).daystart ?? 0);
    (s as any).fat = ((s as any).fat ?? 0) + (2);
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (60);
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (60);
    (s as any).cumspclnt = 2;
    qspCall(s, 'cum_cleanup', '');
    (s as any).pcs_breath = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big12.jpg');
    scene.text('You follow her to the kitchen and have a meal together. When you\'re both finished, you return to her room.');
    scene.actions([
      { label: 'Hang out', goto: ['JuliaMilHome', 'julia_room'] },
    ]);
  } },
        { label: 'No thanks, you\'re not hungry', handler: (st: GameState) => {
    if (!(s as any).juliaQW) (s as any).juliaQW = {}; (s as any).juliaQW['eatJulMilDay'] = ((s as any).daystart ?? 0);
  }, goto: ['JuliaMilHome', 'julia_room'] },
      ]);
    } else {
      if (((s as any).mc_inventory ?? 0)?.['food_wine'] === 1) {
        scene.actions([
          { label: 'Drink your wine with Julia', handler: (st: GameState) => {
    if (!(s as any).juliaQW) (s as any).juliaQW = {}; (s as any).juliaQW['JulMilBestFrend'] = ((s as any).juliaQW['JulMilBestFrend'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    if (!(s as any).mc_inventory) (s as any).mc_inventory = {}; (s as any).mc_inventory['food_wine'] = 0;
    qspCall(s, 'drugs', 'alcohol', 'wine', 2);
    qspCall(s, 'npc_relationship', 'modify', 'A12', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big12.jpg');
    scene.text('You offer Julia some wine and she happily accepts, leaving the room quickly to get a corkscrew and some glasses. When she finishes pouring the wine, you propose a toast to your friendship and both have a sip. For the next half hour, the two of you enjoy the wine while sharing some juicy gossip. When the bottle is drained you both feel more than a bit tipsy and giggle happily, lying against each other on her bed.');
    if (((s as any).juliaQW ?? 0)?.['JulMilBestFrend'] >= 5) {
      scene.actions([
        { label: 'Talk about sex', handler: (st: GameState) => {
    if (((s as any).juliaQW ?? 0)?.['SexTalkJulia'] < 4) {
      if (!(s as any).juliaQW) (s as any).juliaQW = {}; (s as any).juliaQW['SexTalkJulia'] = ((s as any).juliaQW['SexTalkJulia'] ?? 0) + (1);
    }
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big12.jpg');
    scene.text('You steer the conversation towards sexual topics.');
    if (((s as any).juliaQW ?? 0)?.['SexTalkJulia'] === 1) {
      scene.text('Julia is too embarrassed to share her sexual experiences with you, and it looks like you killed the mood.');
    } else {
      if (((s as any).juliaQW ?? 0)?.['SexTalkJulia'] === 2) {
        scene.text('Julia, trying to contribute to the conversation, boasts that she is no longer a virgin.');
        scene.actions([
          { label: '"Oh, really? Do tell!"', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'arousal', 'verbal_erotica', (-10));
    qspCall(s, 'npc_relationship', 'modify', 'A12', 'love');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/julia/sex/outdoor.jpg');
    scene.text('Julia smiles mysteriously and begins her story, "My parents send me to summer camp every year. Last year, I met a guy there… his name is Vovka. He was one of the youth councilors there, a fair bit older than me. After the day\'s regular events had concluded, we found ourselves alone in the forest."');
    scene.text('"We began to flirt a little, and then he kissed me… it was so nice to feel wanted! Then he laid me on my back, but the ground was all rough and rocky. I tried to get up, asking him if he would mind if I got down on my knees instead. He… misunderstood, and took off my skirt and panties before telling me to go down on all fours like he thought I had suggested. I didn\'t have the courage to say no, and he had been so nice to me… so I did."');
    scene.text('"Then he started to have sex with me. It was quite painful! No one ever told me about the hymen being a part of the female body, and that it tears during the first time. Honestly, the first time I had sex I just stayed bent over, hoping it would be over soon. Luckily Vovka did not last long, and he finished on the ground."');
    scene.actions([
      { label: 'Relax in Julia\'s room', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
  }, goto: ['JuliaMilHome', 'julia_room'] },
    ]);
  } },
        ]);
      } else {
        if (((s as any).juliaQW ?? 0)?.['SexTalkJulia'] === 3) {
          scene.text('Julia shares more details about her adventures at summer camp.');
          scene.actions([
            { label: '"Go on, keep going!"', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'arousal', 'verbal_erotica', (-10));
    qspCall(s, 'npc_relationship', 'modify', 'A12', 'love');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/julia/sex/otrad.jpg');
    scene.text('Julia once again smiles mysteriously and continues her story where she left off, "Remember when I told you about Vovka last time? I slept with him again, before leaving the camp! One afternoon when no one else was in the cabin, I bumped into him there. Ever since that first time he had been pestering me, wanting more sex. He was cute though, and really treated me like I was special… so I let him."');
    scene.text('"I undressed and lay down on the bed, terribly afraid that it would hurt again. It felt a lot better though! In the beginning it was still a bit painful, but that quickly passed. He came inside me, that second time. I didn\'t really get stimulated myself, probably because I was too afraid about someone walking in. Still, it was nice to feel so close to him."');
    scene.text('"No one did enter, and he quickly left after we finished. After that, I saw him one or two more times at the camp but always with other people around, so nothing more happened between us. He lives in the city, actually. I still have his phone number somewhere, but I\'m not going to call him. He\'s not the one I fancy any more…" She has a dreamy look in her eyes when she says that.');
    scene.actions([
      { label: 'Relax in Julia\'s room', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
  }, goto: ['JuliaMilHome', 'julia_room'] },
    ]);
  } },
          ]);
        } else {
          if (((s as any).juliaQW ?? 0)?.['SexTalkJulia'] === 4) {
            qspCall(s, 'npcStat', 'A12');
            // TODO-QSP: dynamic text: Julia is embarrassed and says, "There's something unusual about you, <<$pcs_nick...
            scene.text(`Julia is embarrassed and says, "There's something unusual about you, ${((s as any).pcs_nickname || '')}. I've never felt so much at ease around anyone else before, around you I can really be myself. I…", she doesn't finish her sentence, letting the silence linger in the air for a second. Then she suddenly moves her face to yours, intending to kiss you.`);
            scene.actions([
              { label: 'Kiss Julia', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/julia/sex/julkiss.jpg');
    scene.text('You kiss Julia, feeling her soft, sweet smelling lips on your lips as her nimble tongue explores inside your mouth. Her hands gently cup your boobs, and you moan softly as she begins to gently caress them.');
    qspCall(s, 'arousal', 'kiss', 5, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Lie back and let her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/julia/sex/jultit.jpg');
    scene.text('Julia bares your chest and slowly lowers her kisses, slowly trailing her way down to your chest. You do your best to stifle your moans when she takes your nipple in her mouth, gently biting it as her fingers rub the other one. Then her fingers find their way down between your legs, pulling your clothes to the side.');
    qspCall(s, 'npc_relationship', 'modify', 'A12', 'adore');
    qspCall(s, 'arousal', 'foreplay', 5, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Eat each other out', handler: (st: GameState) => {
    if (!(s as any).npc_had_sex) (s as any).npc_had_sex = {}; (s as any).npc_had_sex['A12'] = 1;
    scene.img('images/characters/pavlovsk/school/girl/julia/sex/julick.jpg');
    scene.text('You and Julia giddily take off your clothes and you lie back down on the bed. Julia, eager to taste you, throws her leg over your head and buries her face between your legs, grinding her pussy against your lips as she gets to work.');
    scene.text('Feeling her tongue lapping against your pussy like her life depended on it, you don\'t want to let her finish you without reciprocating. Equally enthusiastically you stick out your tongue and lick up her juices from her budding flower, and soon enough it feels like a contest as to which of you can get the other off first. Julia wins: even though you tried to fight it as long as you could, your body spasms against her tongue as you groan into her pussy in orgasm.');
    qspCall(s, 'arousal', 'cuni_give', 15, 'lesbian');
    qspCall(s, 'arousal', 'cuni', 15, 'lesbian');
    qspCall(s, 'stat', '');
    scene.text('This sends Julia over the edge as well. Her hips squirm against your mouth, and you feel a splash of warm liquid hit you as her pussy squirts her sweet nectar all over your face. You lick up some of it, and then give Julia another deep kiss. Quickly leaving the room to wash up, you return a minute later and cuddle for a while.');
    scene.actions([
      { label: 'Relax in Julia\'s room', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
  }, goto: ['JuliaMilHome', 'julia_room'] },
    ]);
  } },
    ]);
  } },
      { label: 'Ask her to please stop touching you', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A12', 'hate');
    qspCall(s, 'arousal', 'end');
  }, goto: ['JuliaMilHome', 'julia_room'] },
    ]);
  } },
              { label: 'Whoa! Tell her to stop right now!', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A12', 'loathe');
  }, goto: ['JuliaMilHome', 'julia_room'] },
            ]);
          }
        }
      }
    }
    scene.actions([
      { label: 'Relax in Julia\'s room', goto: ['JuliaMilHome', 'julia_room'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Relax in Julia\'s room', goto: ['JuliaMilHome', 'julia_room'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Leave Julia\'s room', goto: ['JuliaMilHome', 'hallway'] },
        { label: 'Chat with Julia', goto: ['JuliaMilHome', 'julia_chat'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterJuliaChat(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  if (((s as any).npc_had_sex ?? 0)?.['A12']  &&  ((s as any).juliaQW ?? 0)?.['date'] === 0) {
    scene.img('images/characters/shared/headshots_main/big12.jpg');
    scene.text('When you enter the room, you immediately notice she seems different, she seems excited and is smiling more than normal.');
    scene.text('You look at Julia, slightly confused, "What\'s up, Julia?"');
    scene.text('She smiles at you as she says, "Well, we\'ve spent a lot of time together and we… you know, so I figured it would be nice to make it official."');
    scene.text('Not sure what you means you ask, "Make what official?"');
    // TODO-QSP: dynamic text: Julia is silent a moment before she asks. "<<$pcs_nickname>> Will you be my girl...
    scene.text(`Julia is silent a moment before she asks. "${((s as any).pcs_nickname || '')} Will you be my girlfriend?"`);
    scene.actions([
      { label: 'Tell her no', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big12.jpg');
    scene.text('You shake your head no. "I\'m sorry if you got the wrong impression Julia. I like you I really do, but I don\'t want to be your girlfriend."');
    scene.text('She looks heart broke like she might cry. "Is there someone else?"');
    scene.text('You sigh slightly. "It\'s not that, I just don\'t want to be anyones girlfriend right now. Can\'t we just keep doing what we are? Be friends and stuff?"');
    scene.text('Tears start to roll down her cheeks, then she stands up. "I get it, you want to just date anyone, well I can\'t do that. I thought we had something special but I guess I was wrong. Please leave now and never come back!" You know there is nothing you can say and trying to explain will only make things worse, so you get up and head for the door.');
    scene.text('"I\'ll see you later ok?" You say but she turns away from you. Once you close the door you can hear her crying. Not sure what else to do, you just leave.');
    qspCall(s, 'npc_relationship', 'modify', 'A12', (-25));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['pod_ezd', 'etaj_3'] },
    ]);
  } },
      { label: 'Tell her yes', handler: (st: GameState) => {
    if (!(s as any).juliaQW) (s as any).juliaQW = {}; (s as any).juliaQW['date'] = 1;
    qspCall(s, 'npc_relationship', 'modify', 'A12', 'adore');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big12.jpg');
    // TODO-QSP: dynamic text: She gets a huge grin on her face, she pulls you up and into a tight fierce hug. ...
    scene.text(`She gets a huge grin on her face, she pulls you up and into a tight fierce hug. She nuzzles your neck as the two of you hug. "You just made me the happiest girl in the world. I love you ${((s as any).pcs_nickname || '')}."`);
    scene.actions([
      { label: 'Tell her you love her too', handler: (st: GameState) => {
    if (!(s as any).juliaQW) (s as any).juliaQW = {}; (s as any).juliaQW['Julialove'] = 1;
    qspCall(s, 'npc_relationship', 'modify', 'A12', 'adore');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big12.jpg');
    scene.text('You kiss her, once you break the kiss you say. "I love you too Julia."');
    scene.text('You have never seen her look so happy, she looks at you like you are the most amazing thing in the world. She kisses you for a moment before shyly breaking away and putting a little space between you, but she holds your hand as you both sit on the bed.');
    scene.actions([
      { label: 'Stop talking', goto: ['JuliaMilHome', 'julia_room'] },
      { label: 'Keep talking', goto: ['JuliaMilHome', 'julia_chat'] },
    ]);
  } },
      { label: 'Say nothing, just hug her back', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big12.jpg');
    scene.text('You kiss her and hug her back. You have never seen her look so happy, she looks at you like you are the most amazing thing in the world. She kisses you for a moment before shyly breaking away and putting a little space between you, but she holds your hand as you both sit on the bed.');
    scene.actions([
      { label: 'Stop talking', goto: ['JuliaMilHome', 'julia_room'] },
      { label: 'Keep talking', goto: ['JuliaMilHome', 'julia_chat'] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    scene.img('images/characters/shared/headshots_main/big12.jpg');
    scene.text('You sit on the bed with Julia just enjoying each other\'s company.');
    if (((s as any).juliaQW ?? 0)?.['date'] === 1) {
      scene.actions([
        { label: 'Break up with her', handler: (st: GameState) => {
    if (!(s as any).juliaQW) (s as any).juliaQW = {}; (s as any).juliaQW['date'] = (-1);
    qspCall(s, 'npc_relationship', 'modify', 'A12', (-30));
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/julia/juliacry.jpg');
    scene.text('You quietly walk in and sit on the bed next to Julia.');
    // TODO-QSP: dynamic text: Julia looks at you questioningly, "<<$pcs_nickname>>…"
    scene.text(`Julia looks at you questioningly, "${((s as any).pcs_nickname || '')}…"`);
    scene.text('You frown as you look at her. "We need to talk."');
    scene.text('Julia asks. "Ok about what?"');
    scene.text('You sigh, "I think we should break up."');
    // TODO-QSP: dynamic text: Julia starts to cry, "Why <<$pcs_nickname>>? What did I do wrong?"
    scene.text(`Julia starts to cry, "Why ${((s as any).pcs_nickname || '')}? What did I do wrong?"`);
    scene.text('You get up to put a little space between you. "It\'s not you… I just don\'t love you anymore."');
    scene.text('Julia openly starts to cry. "Is it someone else?"');
    scene.text('You shake your head, "No, your a great, I just feel differently now is all." You try to comfort her and she begs and pleads you not to do this, but after some time you finally get up. "I\'m sorry but this is over. I\'m truly sorry." With that you turn and walk out, leaving Julia crying behind you.');
    scene.actions([
      { label: 'Leave Julia\'s apartment', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pod_ezd', 'etaj_3'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Stop talking', goto: ['JuliaMilHome', 'julia_room'] },
      { label: 'Make small talk', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A12', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big12.jpg');
    scene.text('You talk with Julia about a variety of things, mostly about your common friends, school and some recent movies you have both seen.');
    scene.actions([
      { label: 'Keep talking', goto: ['JuliaMilHome', 'julia_chat'] },
      { label: 'Stop talking', goto: ['JuliaMilHome', 'julia_room'] },
    ]);
  } },
      { label: 'Ask about the future', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A12', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big12.jpg');
    scene.text('"What do you plan to do after school?" you ask.');
    scene.text('She looks at you smiling; "I\'m going to the to the University in Saint Petersburg."');
    scene.text('Before you can say something she asks you. "What about you? What are your plans for the future?"');
    scene.actions([
      { label: 'I don\'t know', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big12.jpg');
    scene.text('"I\'m not sure, I have a few options I guess." You tell her.');
    scene.text('She nods a bit. "Well you still have some time to decided what you want to do."');
    scene.text('Not sure what more to say about it, you decided to change the subject.');
    scene.actions([
      { label: 'Stop talking', goto: ['JuliaMilHome', 'julia_room'] },
      { label: 'Keep talking', goto: ['JuliaMilHome', 'julia_chat'] },
    ]);
  } },
      { label: 'Go to the University', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A12', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big12.jpg');
    scene.text('You get a bit excited. "I am planning to attend the University too. Now I will for sure know someone there."');
    scene.text('She grins. "That\'s great maybe we can hang out there as well."');
    scene.actions([
      { label: 'Stop talking', goto: ['JuliaMilHome', 'julia_room'] },
      { label: 'Keep talking', goto: ['JuliaMilHome', 'julia_chat'] },
    ]);
  } },
    ]);
  } },
      { label: 'Ask what she\'s been up to', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A12', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big12.jpg');
    scene.text('You ask her, "So what have you been up to lately?"');
    scene.text('She gives you a smile. "Oh you know the normal studying, playing games, think about our DnD campaign."');
    scene.text('You talk for a bit about what you have both been up too since you last talked.');
    scene.actions([
      { label: 'Stop talking', goto: ['JuliaMilHome', 'julia_room'] },
      { label: 'Keep talking', goto: ['JuliaMilHome', 'julia_chat'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterJuliaGo(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Julia Milova, your classmate</b></center>');
  scene.img('images/characters/shared/headshots_main/big12.jpg');
  // TODO-QSP: dynamic text: As you approach Julia after school, she smiles at you and asks, "Hi <<$pcs_nickn...
  scene.text(`As you approach Julia after school, she smiles at you and asks, "Hi ${((s as any).pcs_nickname || '')}! Want to go to my place? We can do our homework together, and maybe grab a bite to eat?"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Go with Julia', handler: (st: GameState) => {
    if (((s as any).juliaQW ?? 0)?.['home_unlocked'] === 0) {
      if (!(s as any).juliaQW) (s as any).juliaQW = {}; (s as any).juliaQW['home_unlocked'] = 1;
    }
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Julia Milova, your classmate</b></center>');
    scene.img('images/characters/shared/headshots_main/big12.jpg');
    scene.text('You go to Julia\'s apartment together, she lives just above you. During the 15 minute walk you chat about random things that happened at school that day.');
    scene.actions([
      { label: 'Enter her apartment', goto: ['JuliaMilHome', 'julia_room'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterLeaveApartment(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['pod_ezd', 'etaj_3'] }]);
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'home':
      enterHome(s, scene);
      break;
    case 'hallway':
      enterHallway(s, scene);
      break;
    case 'livingroom':
      enterLivingroom(s, scene);
      break;
    case 'kitchen':
      enterKitchen(s, scene);
      break;
    case 'fridge':
      enterFridge(s, scene);
      break;
    case 'bathroom':
      enterBathroom(s, scene);
      break;
    case 'julia_room':
      enterJuliaRoom(s, scene);
      break;
    case 'julia_chat':
      enterJuliaChat(s, scene);
      break;
    case 'julia_go':
      enterJuliaGo(s, scene);
      break;
    case 'leave_apartment':
      enterLeaveApartment(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const JuliaMilHome: LocationDef = {
  name: 'JuliaMilHome',
  title: 'Entrance hall',
  region: 'other',
  locationType: 'bathroom',
  locclass: 'bedr',
  enter: enter,
};
