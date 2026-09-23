import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  scene.img('images/pc/items/accessories/camera.jpg');
  scene.text('You can\'t help but smile as you check your camera. You love capturing life as it happens, but it can take time to decide precisely who or what you want to take photographs of.');
  scene.text('You spend a few minutes thinking about places and people that might make for interesting subjects. Perhaps…');
  (s as any).location_count = 0;
  (s as any).iterator = 0;
  if (((s as any).location_count ?? 0) > 0) {
    // TODO-QSP: :location_loop
    if (((s as any).camera_found ?? 0)?.[String((s as any).camera_event ?? 0)] !== 1) {
      // TODO-QSP: $camera_description
    }
    (s as any).iterator = ((s as any).iterator ?? 0) + (1);
    if (((s as any).iterator ?? 0) < ((s as any).location_count ?? 0)) {
      // TODO-QSP: jump 'location_loop'
    }
  }
  (s as any).people_count = 0;
  (s as any).iterator = 0;
  if (((s as any).people_count ?? 0) > 0) {
    // TODO-QSP: :people_loop
    if (((s as any).camera_found ?? 0)?.[String((s as any).camera_event ?? 0)] !== 1  &&  ((s as any).camera_requirement ?? 0)) {
      // TODO-QSP: $camera_description
    }
    (s as any).iterator = ((s as any).iterator ?? 0) + (1);
    if (((s as any).iterator ?? 0) < ((s as any).people_count ?? 0)) {
      // TODO-QSP: jump 'people_loop'
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Put your camera away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterCheckLocation(s: GameState, scene: SceneBuilder): void {
  if (((s as any).photographyEv ?? 0) >= 2  &&  ((s as any).camera_locations ?? 0)?.[String((s as any).loc ?? 0)] !== '') {
    if (((s as any).camera_found ?? 0)?.[String((s as any).camera_event ?? 0)] !== 1) {
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Photograph the ' + String(((s as any).camera_description ?? '') ?? ''), handler: (st: GameState) => {
    ((st as any).camera_found = (st as any).camera_found ?? {})[String((st as any).camera_event ?? 0)] = 1;
    (st as any).loc = ((st as any).camera_return_loc ?? 0);
    (st as any).loc_arg = ((st as any).camera_return_loc_arg ?? 0);
    qspGoto(st, 'camera', ((st as any).camera_event ?? ''));
  } },
      ]);
    } else {
      if (((s as any).camera_event ?? 0) === 'pav_lake'  &&  ((s as any).camera_found ?? 0)?.['sonia'] !== 1  &&  ((s as any).sunWeather ?? 0) === 1  &&  ((s as any).soniaQW ?? 0)?.['slut'] > 0) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'describe']; enterPavLakeSonia(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCheckPerson(s: GameState, scene: SceneBuilder): void {
  if (((s as any).photographyEv ?? 0) >= 2  &&  ((s as any).camera_people ?? 0)[String((s as any).locArgs?.[1] ?? '')] !== '') {
    if (((s as any).camera_found ?? 0)[String((s as any).locArgs?.[1] ?? '')] !== 1  &&  ((s as any).camera_requirement ?? 0) === -1) {
      // TODO-QSP: dynamic ' act ''Ask to take a photo'': camera_found["<<$ARGS[1]>>"] = 1 & gt ''camera'', $camera_eve...
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterEugene(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A89', 1);
  scene.img('images/characters/shared/headshots_main/big89.jpg');
  scene.text('"Hey, can I ask you something?"');
  scene.text('She smiles and nods. "Sure. What is it, sweetie?"');
  scene.text('"Can I take your photo?"');
  scene.text('"Sure thing, sweetie." She stops to let you take a photo, misunderstanding what you meant.');
  scene.text('You shake your head and pull out your camera. "No, I meant with this."');
  scene.text('She looks a little surprised and sheepish. "Oh! Are you working on becoming a photographer?"');
  scene.text('You nod. "Yes, I just need more practice. Which is where you come in."');
  scene.text('She laughs softly. "Okay, why not? I haven\'t taken a break yet today. So we can go to my place, and you can take my picture there. Sound good?"');
  scene.text('You nod. "Sure, that works for me." She tells her sister she\'s taking a break and leads you out of the cafe to her apartment building. She leads you upstairs and into her apartment. Once inside, you take out your camera.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Start taking her picture', goto: ['eugeneev1', 'photography'] },
  ]);
  scene.build();
}

function enterMother(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
  // TODO-QSP: dynamic text: You take out your camera. "Hey, <<$npc_nickname[''A29'']>>, do you mind if I tak...
  scene.text(`You take out your camera. "Hey, ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''}, do you mind if I take your photograph for my portfolio?"`);
  scene.text('She frowns at you. "Where did you get that camera?"');
  scene.text('You shrug a little. "I saved up and bought it. Please? I need the practice, and I think you would make a great subject."');
  scene.text('She shakes her head. "Seems like a waste of money to me."');
  scene.text('You sigh. "I love doing it, and I can make a living. Please?"');
  scene.text('She sighs. "Fine, but I still think it\'s a waste of time."');
  scene.text('You nod. "I know. Let\'s go outside."');
  scene.text('"I don\'t have time for that. Just take my picture." she sternly replies.');
  scene.text('"Please?" you plead.');
  scene.text('She shakes her head. "Fine. The things I do for you kids…"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Take her photo', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'exp_gain', 'photoskl', (Math.floor(Math.random() * 3) + 3));
    ((st as any).portfolio_people = (st as any).portfolio_people ?? {})[1] = 1;
    qspCall(st, 'stat', '');
    scene.img('images/pc/activities/photography/foto/people/1.jpg');
    scene.text('You go outside and have her stand in a few poses around the courtyard before finally settling on her standing in front of some flowers. "I got it!"');
    scene.text('She walks over to you. "Finally. Now I can get back to the housework."');
    scene.text('You show her your photos and the one you finally decided on. "Here, look, this is the one I will use for my portfolio."');
    scene.text('She smiles. "They do look nice… I still say it\'s a waste of time, though."');
    // TODO-QSP: dynamic text: You roll your eyes. "I know, <<$npc_nickname[''A29'']>>," you reply as she walks...
    scene.text(`You roll your eyes. "I know, ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''}," you reply as she walks back inside.`);
    scene.actions([
      { label: 'Put your camera away', handler: (st: GameState) => {
    if (((st as any).region ?? 0) === 'pav') {
      qspGoto(st, 'pav_complex', 'start');
    } else {
      qspGoto(st, 'gad_gpyard', 'start');
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterAnya(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/resident/anya/home/sisboyqw_05.jpg');
  scene.text('You climb off the bed and grab your camera off your desk. "Hey, do you mind if I take your photograph for my portfolio?"');
  scene.text('She smiles. "What is it with you and that camera?"');
  scene.text('You shrug a little. "I just love doing it. If I get good enough, I could do it for a living. So, please? I need the practice, and I think you would make a great subject."');
  scene.text('She giggles. "Fine, but something classy."');
  scene.text('You nod. "Deal."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Take her photo', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'exp_gain', 'photoskl', (Math.floor(Math.random() * 3) + 3));
    ((st as any).portfolio_people = (st as any).portfolio_people ?? {})[2] = 1;
    qspCall(st, 'stat', '');
    scene.img('images/pc/activities/photography/foto/people/2.jpg');
    scene.text('You direct her to lie on the bed in several poses, then stand in various spots around the room before you finally find the perfect image. Once you\'ve taken it, you sit down on the bed. "I got it."');
    scene.text('She sits down next to you. "Let me see."');
    scene.text('You show her your photos and the one you finally decided on. "You sure my ass doesn\'t look fat in this? I think it looks fat," she says with a pout.');
    scene.text('You shake your head and reassure her. "Your ass looks perfect. That\'s why I took this photo. Trust me."');
    scene.text('"Fine!" she pouts before sitting back down on her bed. You put your camera away and join her.');
    scene.actions([
      { label: 'Finish', goto: ['sister_chat', 'talking'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterLazar(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big149.jpg');
  scene.text('You smile at him as you pull out your camera. "Hey, do you mind if I take your photograph for my portfolio?"');
  scene.text('He smiles. "Sure, but only if you promise to show me your portfolio when you\'re done."');
  scene.text('You nod your head. "Deal." He jogs over to Kolka and his classmates playing.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Take his photo', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'exp_gain', 'photoskl', (Math.floor(Math.random() * 3) + 3));
    ((st as any).portfolio_people = (st as any).portfolio_people ?? {})[3] = 1;
    qspCall(st, 'stat', '');
    scene.img('images/pc/activities/photography/foto/people/3.jpg');
    scene.text('You watch as he starts showing off his skills, pretending to be teaching them, but you\'re reasonably sure he\'s just showing off for you. You begin taking several photos of him, and they\'re looking pretty good. He then suddenly pulls off his shirt, and you keep taking photographs as you try to remain focused. You finally get the shot you want and put your camera away before giving Lazar a wave. He returns the wave as you leave.');
    scene.actions([
      { label: 'Walk off the pitch', goto: ['gschool_grounds', 'sports'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterCityLibrary(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'exp_gain', 'photoskl', (Math.floor(Math.random() * 3) + 3));
  ((s as any).portfolio_locations = (s as any).portfolio_locations ?? {})[1] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/pc/activities/photography/sveta_camera.jpg');
  scene.text('You make your way over to the city library. It is a grand building and would make for a beautiful photograph. You move around several times until you find the perfect spot and take several photos before pausing and checking them. Finally, you\'re happy with the results, knowing you have something to add to your portfolio.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Put your camera away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterCityUni(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 25;
  qspCall(s, 'exp_gain', 'photoskl', (Math.floor(Math.random() * 3) + 5));
  ((s as any).portfolio_locations = (s as any).portfolio_locations ?? {})[2] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/pc/activities/photography/sveta_camera.jpg');
  scene.text('You make your way over to the university. It is a grand building and would make for a beautiful photograph. You move around several times until you find the perfect spot and take several photos before pausing and checking them. You can\'t help but notice all the students moving around and feel they would make for a great shot. You stop and take several more photos of the students before stopping. You\'re happy with the results, knowing you have something to add to your portfolio.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Put your camera away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterGadukino(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 25;
  qspCall(s, 'exp_gain', 'photoskl', (Math.floor(Math.random() * 3) + 5));
  ((s as any).portfolio_locations = (s as any).portfolio_locations ?? {})[4] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/pc/activities/photography/sveta_camera.jpg');
  scene.text('Standing in the village, you realize what a wonderful photo this place would make. You move around several times until you find the perfect spot and take several pictures before pausing and checking them. You can\'t help but notice the houses and feel that they would also make for a great photo. You stop and take several pictures of different places before finally settling on your grandparents\' home. You\'re happy with the results, knowing you have something to add to your portfolio.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Put your camera away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterGadForest(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'exp_gain', 'photoskl', (Math.floor(Math.random() * 3) + 3));
  ((s as any).portfolio_locations = (s as any).portfolio_locations ?? {})[6] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/pc/activities/photography/sveta_camera.jpg');
  scene.text('Standing in the forest, you are amazed by how breathtakingly beautiful it is. You take photos of the trees until you\'re happy and check all the shots you\'ve taken. Finally, you feel confident that you\'ve found something to add to your portfolio and put your camera away.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Put your camera away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterPavChurch(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 25;
  qspCall(s, 'exp_gain', 'photoskl', (Math.floor(Math.random() * 3) + 5));
  ((s as any).portfolio_locations = (s as any).portfolio_locations ?? {})[12] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/pc/activities/photography/sveta_camera.jpg');
  scene.text('Standing in front of the local church, you realize what a wonderful photo this place would make. You move around several times until you find the perfect spot and take several pictures before pausing and checking them. You then spot the cemetery and take some photos of it. Finally, you\'re happy with the results, knowing you have something to add to your portfolio.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Put your camera away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterPavTrainHall(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'exp_gain', 'photoskl', (Math.floor(Math.random() * 3) + 3));
  ((s as any).portfolio_locations = (s as any).portfolio_locations ?? {})[8] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/pc/activities/photography/sveta_camera.jpg');
  scene.text('Standing in front of the local train station, you realize what a wonderful photo this place would make. You move around several times until you find the perfect spot and take several pictures before pausing and checking them. Finally, you\'re happy with the results, knowing you have something to add to your portfolio.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Put your camera away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterPavComplex(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'exp_gain', 'photoskl', (Math.floor(Math.random() * 3) + 3));
  ((s as any).portfolio_locations = (s as any).portfolio_locations ?? {})[7] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/pc/activities/photography/sveta_camera.jpg');
  scene.text('Standing in the courtyard, you realize this place would make a wonderful photo. You move around several times until you find the perfect spot and take several pictures before pausing and checking them. Finally, you\'re happy with the results, knowing you have something to add to your portfolio.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Put your camera away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterPavSchool(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'exp_gain', 'photoskl', (Math.floor(Math.random() * 3) + 3));
  ((s as any).portfolio_locations = (s as any).portfolio_locations ?? {})[9] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/pc/activities/photography/sveta_camera.jpg');
  scene.text('Standing in front of the school, you realize what a wonderful photo this place would make. You move around several times until you find the perfect spot and take several pictures before pausing and checking them. Finally, you\'re happy with the results, knowing you have something to add to your portfolio.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Put your camera away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterPavPark(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'exp_gain', 'photoskl', (Math.floor(Math.random() * 3) + 3));
  ((s as any).portfolio_locations = (s as any).portfolio_locations ?? {})[10] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/pc/activities/photography/sveta_camera.jpg');
  scene.text('Walking through the park, you realize what a wonderful photo this place would make. You move around several times until you find the perfect spot and take several pictures before pausing and checking them. Finally, you\'re happy with the results, knowing you have something to add to your portfolio.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Put your camera away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterPavLake(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'exp_gain', 'photoskl', (Math.floor(Math.random() * 3) + 3));
  ((s as any).portfolio_locations = (s as any).portfolio_locations ?? {})[11] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/pc/activities/photography/sveta_camera.jpg');
  scene.text('As you look out over the lake, you realize what a wonderful photo this place would make. You walk around the shore several times until you find the perfect spot and take several pictures before pausing and checking them. Finally, you\'re happy with the results, knowing you have something to add to your portfolio.');
  if (((s as any).soniaQW ?? 0)?.['slut'] > 0  &&  ((s as any).sunWeather ?? 0) === 1  &&  ((s as any).temp ?? 0) > 15  &&  ((s as any).hour ?? 0) > 6  &&  ((s as any).hour ?? 0) < 20) {
    scene.text('Just as you\'re about to put your camera away, you notice a girl sunbathing topless. It takes you a minute to realize that it\'s Sonia, and she appears alone. You wonder if she would make a good subject, a take on how innocence can be lost in a cruel world.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPavLakeSonia(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Put your camera away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterPavLakeSonia(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'describe') {
    scene.text('You notice a girl sunbathing topless and realize that it\'s Sonia. You wonder if she would make a good subject, a take on how innocence can be lost in a cruel world.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Take her photograph', handler: (st: GameState) => {
    ((st as any).camera_found = (st as any).camera_found ?? {})['sonia'] = 1;
    qspCall(st, 'exp_gain', 'photoskl', (Math.floor(Math.random() * 2) + 1));
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/sonia/lake/photography/photo1.jpg');
    scene.text('You get a little closer and start taking her photograph, moving around and taking several shots from different angles before she suddenly sits up and looks in your direction.');
    qspCall(st, 'arousal', 'voyeur', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Caught', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'photoskl', (Math.floor(Math.random() * 2) + 1));
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/sonia/lake/photography/photo2.jpg');
    // TODO-QSP: dynamic text: She covers herself up and looks at you in surprise. "What the fuck, <<$pcs_nickn...
    scene.text(`She covers herself up and looks at you in surprise. "What the fuck, ${((st as any).pcs_nickname ?? '')}?! What are you doing?!"`);
    scene.text('"Sorry," you smile. "I was just taking your photo. You\'re just so beautiful and I couldn\'t help myself…"');
    scene.text('She smiles at the compliment. "Really?"');
    scene.text('You nod as you take another photo. "Yes. Now why don\'t you stop covering up?"');
    scene.text('She smiles even more. "Okay, but just a few."');
    scene.text('She gets up on her knees and removes her hands, giving you a nice shot of her topless body.');
    qspCall(st, 'arousal', 'voyeur', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Take more photos', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'exp_gain', 'photoskl', (Math.floor(Math.random() * 2) + 1));
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/sonia/lake/photography/photo3.jpg');
    scene.text('She\'s a little awkward at first, not knowing what to do, but as you take more photos, she starts to relax and become more natural in her poses. She even starts to get into it herself and enjoys it.');
    scene.actions([
      { label: 'Take more photos', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'photoskl', (Math.floor(Math.random() * 2) + 1));
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/sonia/lake/photography/photo4.jpg');
    scene.text('As you continue photographing her, she starts teasing you by pulling on her bottoms while her hands run along her body or play with her breasts.');
    scene.text('You can\'t help but smile and see how far she wants to go. "Come on, lose the bottoms. You know you want to…"');
    qspCall(st, 'arousal', 'voyeur', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'No bottoms', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'photoskl', (Math.floor(Math.random() * 2) + 1));
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/sonia/lake/photography/photo5.jpg');
    scene.text('She grins and unties her bottoms from one hip, which lets them partially fall off her, exposing her pussy. You take more photos as she pulls the other tie loose and her bottoms fall away.');
    qspCall(st, 'arousal', 'voyeur', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Naked', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'photoskl', (Math.floor(Math.random() * 2) + 1));
    ((st as any).portfolio_people = (st as any).portfolio_people ?? {})[4] = 1;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/sonia/lake/photography/photo6.jpg');
    scene.text('You continue taking photos of her naked body and start getting closer to her. The longer it goes on, the more aroused she seems to get, eventually playing with her pussy. Finally, having taken several dozen photos, you feel you\'ve taken enough and stop. "Thanks, Sonia. I got what I needed."');
    scene.text('She frowns before bobbing her head slightly and smiling. "It was my pleasure. I really liked it. M-Maybe we can do it again sometime?" You can hear her shy, sweet former self coming out.');
    scene.text('You feel bad for her, knowing that almost nobody talks to her anymore. "Yeah, sure. I\'d like that."');
    scene.text('She breaks into a huge smile and looks happier than you\'ve seen her in a long time. "Okay, just let me know or maybe stop by my house sometime?"');
    scene.text('You nod. "I will, but I\'ve got all I need now. I\'ll let you get back to sunbathing. Thanks again."');
    scene.text('She smiles and gets dressed as you put your camera away.');
    if (((st as any).soniaQW ?? 0)?.['homeinvite'] > 0) {
      ((st as any).soniaQW = (st as any).soniaQW ?? {})['homeinvite'] = 1;
    }
    qspCall(st, 'arousal', 'voyeur', 5);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
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
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  ((s as any).camera_locations = (s as any).camera_locations ?? {})['city_library'] = qspUntranslated(s, "{", { location: "camera" });
  (s as any).camera_description = 'City Library';
  (s as any).camera_event = 'city_library';
  (s as any).camera_return_loc = 'city_center';
  (s as any).camera_return_loc_arg = '';
  ((s as any).camera_locations = (s as any).camera_locations ?? {})['city_island'] = qspUntranslated(s, "{", { location: "camera" });
  (s as any).camera_description = 'University';
  (s as any).camera_event = 'city_uni';
  (s as any).camera_return_loc = 'city_island';
  (s as any).camera_return_loc_arg = '';
  ((s as any).camera_locations = (s as any).camera_locations ?? {})['gadukino'] = qspUntranslated(s, "{", { location: "camera" });
  (s as any).camera_description = 'Gadukino Village';
  (s as any).camera_event = 'gadukino';
  (s as any).camera_return_loc = 'gadukino';
  (s as any).camera_return_loc_arg = '';
  ((s as any).camera_locations = (s as any).camera_locations ?? {})['gad_forest'] = qspUntranslated(s, "{", { location: "camera" });
  (s as any).camera_description = 'Gadukino Forest';
  (s as any).camera_event = 'gad_forest';
  (s as any).camera_return_loc = 'gad_forest';
  (s as any).camera_return_loc_arg = 'forest_edge';
  ((s as any).camera_locations = (s as any).camera_locations ?? {})['pav_complex'] = qspUntranslated(s, "{", { location: "camera" });
  (s as any).camera_description = 'Pavlovsk Five Estates';
  (s as any).camera_event = 'pav_complex';
  (s as any).camera_return_loc = 'pav_complex';
  (s as any).camera_return_loc_arg = 'start';
  ((s as any).camera_locations = (s as any).camera_locations ?? {})['pav_market'] = qspUntranslated(s, "{", { location: "camera" });
  (s as any).camera_description = 'Pavlovsk Train Station';
  (s as any).camera_event = 'pav_train_hall';
  (s as any).camera_return_loc = 'pav_market';
  (s as any).camera_return_loc_arg = '';
  ((s as any).camera_locations = (s as any).camera_locations ?? {})['gschool_grounds'] = qspUntranslated(s, "{", { location: "camera" });
  (s as any).camera_description = 'Pavlovsk School';
  (s as any).camera_event = 'pav_school';
  (s as any).camera_return_loc = 'gschool_grounds';
  (s as any).camera_return_loc_arg = 'main';
  ((s as any).camera_locations = (s as any).camera_locations ?? {})['pav_park'] = qspUntranslated(s, "{", { location: "camera" });
  (s as any).camera_description = 'Pavlovsk Park';
  (s as any).camera_event = 'pav_park';
  (s as any).camera_return_loc = 'pav_park';
  (s as any).camera_return_loc_arg = 'start';
  ((s as any).camera_locations = (s as any).camera_locations ?? {})['pav_lake'] = qspUntranslated(s, "{", { location: "camera" });
  (s as any).camera_description = 'Pavlovsk Lake';
  (s as any).camera_event = 'pav_lake';
  (s as any).camera_return_loc = 'pav_lake';
  (s as any).camera_return_loc_arg = '';
  ((s as any).camera_locations = (s as any).camera_locations ?? {})['pav_church'] = qspUntranslated(s, "{", { location: "camera" });
  (s as any).camera_description = 'Pavlovsk Church';
  (s as any).camera_event = 'pav_church';
  (s as any).camera_return_loc = 'pav_church';
  (s as any).camera_return_loc_arg = 'start';
  ((s as any).camera_people = (s as any).camera_people ?? {})['mother'] = qspUntranslated(s, "{", { location: "camera" });
  (s as any).camera_description = ((s as any).npc_nickname ?? 0)?.['A29'];
  (s as any).camera_event = 'mother';
  (s as any).camera_return_loc = '';
  (s as any).camera_return_loc_arg = '';
  (s as any).camera_requirement = (((s as any).npc_rel ?? 0)?.['A29'] >= 50  &&  ((s as any).month ?? 0) > 2  &&  ((s as any).month ?? 0) < 9);
  ((s as any).camera_people = (s as any).camera_people ?? {})['anya'] = qspUntranslated(s, "{", { location: "camera" });
  (s as any).camera_description = 'Anya';
  (s as any).camera_event = 'anya';
  (s as any).camera_return_loc = '';
  (s as any).camera_return_loc_arg = '';
  (s as any).camera_requirement = (((s as any).npc_rel ?? 0)?.['A33'] >= 50);
  ((s as any).camera_people = (s as any).camera_people ?? {})['anushka'] = qspUntranslated(s, "{", { location: "camera" });
  (s as any).camera_description = 'Anushka';
  (s as any).camera_event = '';
  (s as any).camera_return_loc = '';
  (s as any).camera_return_loc_arg = '';
  (s as any).camera_requirement = (((s as any).npc_rel ?? 0)?.['A144'] >= 50);
  ((s as any).camera_people = (s as any).camera_people ?? {})['lazar'] = qspUntranslated(s, "{", { location: "camera" });
  (s as any).camera_description = 'Lazar';
  (s as any).camera_event = 'lazar';
  (s as any).camera_return_loc = '';
  (s as any).camera_return_loc_arg = '';
  (s as any).camera_requirement = (((s as any).npc_rel ?? 0)?.['A149'] >= 50  &&  ((s as any).month ?? 0) > 2  &&  ((s as any).month ?? 0) < 9);
  ((s as any).camera_people = (s as any).camera_people ?? {})['eugene'] = qspUntranslated(s, "{", { location: "camera" });
  (s as any).camera_description = 'Eugene';
  (s as any).camera_event = 'eugene';
  (s as any).camera_return_loc = '';
  (s as any).camera_return_loc_arg = '';
  (s as any).camera_requirement = (((s as any).LCEugenefirst ?? 0) >= 1);
  ((s as any).camera_people = (s as any).camera_people ?? {})['albina'] = qspUntranslated(s, "{", { location: "camera" });
  (s as any).camera_description = 'Albina';
  (s as any).camera_event = '';
  (s as any).camera_return_loc = '';
  (s as any).camera_return_loc_arg = '';
  (s as any).camera_requirement = (((s as any).AlbinaQW ?? 0)?.['Friends'] === 2);
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'check_location':
      enterCheckLocation(s, scene);
      break;
    case 'check_person':
      enterCheckPerson(s, scene);
      break;
    case 'eugene':
      enterEugene(s, scene);
      break;
    case 'mother':
      enterMother(s, scene);
      break;
    case 'anya':
      enterAnya(s, scene);
      break;
    case 'lazar':
      enterLazar(s, scene);
      break;
    case 'city_library':
      enterCityLibrary(s, scene);
      break;
    case 'city_uni':
      enterCityUni(s, scene);
      break;
    case 'gadukino':
      enterGadukino(s, scene);
      break;
    case 'gad_forest':
      enterGadForest(s, scene);
      break;
    case 'pav_church':
      enterPavChurch(s, scene);
      break;
    case 'pav_train_hall':
      enterPavTrainHall(s, scene);
      break;
    case 'pav_complex':
      enterPavComplex(s, scene);
      break;
    case 'pav_school':
      enterPavSchool(s, scene);
      break;
    case 'pav_park':
      enterPavPark(s, scene);
      break;
    case 'pav_lake':
      enterPavLake(s, scene);
      break;
    case 'pav_lake_sonia':
      enterPavLakeSonia(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const camera: LocationDef = {
  name: 'camera',
  title: 'You can\'t help but smile as you check your camera. You love ',
  region: 'other',
  enter: enter,
};
