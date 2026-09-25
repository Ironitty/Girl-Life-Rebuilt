import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterHome(s: GameState, scene: SceneBuilder): void {
  (s as any).track_loop = '';
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'core_library', 'setloc', 'radapt', 'home');
  (s as any).location_type = 'private';
  (s as any).popolaini = 0;
  (s as any).saunaYouRoom = 0;
  (s as any).boycherdaksex = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'radomir_popov_schedule', '');
  if (((s as any).radomirQW ?? 0)?.['home_day'] !== ((s as any).daystart ?? 0)) {
    ((s as any).radomirQW = (s as any).radomirQW ?? {})['home_day'] = ((s as any).daystart ?? 0);
  }
  scene.img('images/locations/pavlovsk/resident/apartment/aptdoor.jpg');
  scene.text('You walk up to the front door and knock.');
  if (((s as any).hour ?? 0) >= 22) {
    scene.text('It\'s too late in the day to visit Radomir.');
    scene.actions([
      { label: 'Move away from the door', goto: ['pav_complex', 'start'] },
    ]);
  } else {
    if (((s as any).hour ?? 0) < 8) {
      scene.text('It\'s too early in the day to visit Radomir.');
      scene.actions([
        { label: 'Move away from the door', goto: ['pav_complex', 'start'] },
      ]);
    } else {
      if (((s as any).locat ?? 0)?.['A154'] === 30) {
        qspCall(s, 'stat', '');
        scene.img('images/locations/pavlovsk/resident/apartment/radapt/anfisa.jpg');
        scene.text('You stand outside the Popov household knocking on the door. It\'s some time before someone answers it. In the end, it turns out to be Anfisa, who gives you a friendly smile. "Yes dear?"');
        scene.text('You return her smile and ask for Radomir. "Radomir isn\'t here right now. He went on tour with his friends in his little band."');
        scene.text('You nod. "Right, I can\'t believe I forgot that! I hope they\'re having fun."');
        scene.text('"Okay, dear. Have a nice day," she says before she closes the door.');
        scene.actions([
          { label: 'Move away from the door', goto: ['pav_complex', 'start'] },
        ]);
      } else {
        if (((s as any).yearstart ?? 0) > 1) {
          qspCall(s, 'stat', '');
          scene.img('images/locations/pavlovsk/resident/apartment/radapt/anfisa.jpg');
          scene.text('You stand outside the Popov household knocking on the door. It\'s some time before someone answers it. In the end, it turns out to be Anfisa, who gives you a friendly smile. "Yes, dear?"');
          scene.text('You return her smile. "Is Radomir home?"');
          scene.text('She shakes her head. "He moved to the city with his friends. I think they have an apartment near the university."');
          scene.text('You nod. "Oh… Okay. Do you have their address?"');
          scene.text('She smiles at you. "Of course I do."');
          scene.text('She tells you where they live and you thank her before leaving.');
          scene.actions([
            { label: 'Move away from the door', goto: ['pav_complex', 'start'] },
          ]);
        } else {
          if (((s as any).locat ?? 0)?.['A154'] === 23) {
            qspCall(s, 'stat', '');
            scene.img('images/locations/pavlovsk/resident/apartment/radapt/anfisa.jpg');
            scene.text('You stand outside the Popov household knocking on the door. It\'s some time before someone answers it. In the end, it turns out to be Anfisa.');
            scene.text('She gives you a friendly smile. "Yes, dear?"');
            scene.text('You return her smile. "Is Radomir home?"');
            scene.text('She gives you a pleasant and welcoming smile. "No. I think he might be at the park. I know he goes there with some of his little friends sometimes."');
            scene.text('You thank her before leaving.');
            scene.actions([
              { label: 'Move away from the door', goto: ['pav_complex', 'start'] },
            ]);
          } else {
            if (((s as any).locat ?? 0)?.['A154'] === 21) {
              scene.img('images/locations/pavlovsk/resident/apartment/radapt/anfisa.jpg');
              scene.text('She gives you a friendly smile. "Yes, dear?"');
              scene.text('You return her smile. "Is Radomir home?"');
              scene.text('She shakes her head. "Radomir\'s not here right now. He\'s at school. Shouldn\'t you be at school too dear?"');
              scene.text('You make an excuse for not being at school before you turn and leave');
              scene.actions([
                { label: 'Leave', goto: ['pav_complex', 'start'] },
              ]);
            } else {
              if (((s as any).locat ?? 0)?.['A154'] === 24) {
                ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['practice_invite'] = 1;
                qspCall(s, 'calendar', 'add', 'band_practice_event');
                scene.img('images/locations/pavlovsk/resident/apartment/radapt/anfisa.jpg');
                scene.text('She gives you a friendly smile. "Yes, dear?"');
                scene.text('You return her smile. "Is Radomir home?"');
                scene.text('She shakes her head. "Radomir\'s not here right now. He\'s down in the garage with his little friends playing in their band. I\'m sure they wouldn\'t mind if you went down there."');
                scene.text('You thank her before you turn and leave');
                scene.actions([
                  { label: 'Leave', goto: ['pav_complex', 'start'] },
                ]);
              } else {
                if (((s as any).locat ?? 0)?.['A154'] === 25) {
                  scene.img('images/locations/pavlovsk/resident/apartment/radapt/anfisa.jpg');
                  scene.text('Anfisa answers the door instead. She gives you a friendly smile. "Yes, dear?"');
                  scene.text('You return her smile. "Is Radomir home?"');
                  scene.text('She shakes her head. "Radomir\'s not here right now. He\'s at the disco with his little friends."');
                  scene.text('You thank her before you turn and leave');
                  scene.actions([
                    { label: 'Leave', goto: ['pav_complex', 'start'] },
                  ]);
                } else {
                  if (((s as any).locat ?? 0)?.['A154'] === 20) {
                    qspCall(s, 'stat', '');
                    (s as any).raddoor = (Math.floor(Math.random() * 24) + 1);
                    scene.img('images/locations/pavlovsk/resident/apartment/radapt/anfisa.jpg');
                    scene.text('You stand outside the Popov household and wait for Radomir to open the door, but Anfisa answers instead.');
                    scene.text('She gives you a friendly smile. "Yes, dear?"');
                    scene.text('You return her smile. "Is Radomir home?"');
                    if (((s as any).raddoor ?? 0) === 1) {
                      scene.text('She nods and stands aside to let you enter.');
                      scene.text('"He\'s in his room with one of his little friends."');
                      if (((s as any).radomirQW ?? 0)?.['nush_visit'] >= 1) {
                        scene.actions([
                          { label: 'Enter', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A144', 'dislike');
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('You thank her and enter the apartment. She closes the door and heads off to the kitchen while you head down the hallway to Radomir\'s room.');
    scene.text('Just as you arrive, the door opens and Anushka walks out of his room. By the state of her clothes, her messed up hair and her smeared makeup, it\'s not hard to guess what happened.');
    if (((st as any).npc_rel ?? 0)?.['A154'] >= 60) {
      ((st as any).radomirQW = (st as any).radomirQW ?? {})['nush_visit'] = 2;
      qspCall(st, 'npc_relationship', 'modify', 'A144', 'hate');
      scene.text('She pauses when she sees you, her eyes narrowing slightly before she picks up her pace and brushes past you, slightly bumping her shoulder into you as she does.');
      scene.text('Radomir steps out before you can say anything and call out to Anushka. "Later, babe!"');
      scene.text('The only response he gets is her flipping him off without looking back.');
      scene.text('He just chuckles at that before turning to you and shrugging. "Fuck, that bitch is high strung sometimes."');
    } else {
      if (((st as any).npc_rel ?? 0)?.['A154'] <= 20) {
        scene.text('She pauses when she sees you before giving you a look of disgust and brushing past you, slightly bumping into her shoulder into you as she does.');
        scene.text('Radomir steps out before you can say anything and calls out to Anushka. "Later, babe!"');
        scene.text('She just ignores him and he shrugs when she doesn\'t reply.');
      } else {
        scene.text('She pauses when she sees you and shakes her head. "Guess you\'re not that smart then."');
        scene.text('A moment later, Radomir steps out and smiles when he sees you. "What are you girls talking about?"');
        scene.text('Anushka gives him an annoyed look. "None of your business!"');
        scene.text('Radomir grabs his chest as if he was just stabbed in the heart. "Oh, you wound me! Don\'t be jealous, babe." He then slaps Anushka on the ass. "Best ass in Pavlovsk right there."');
        scene.text('She just gives him another annoyed look before she walks past you towards the exit.');
        scene.text('"Later, babe!" he says to her as she leaves. When you glance back at him, he\'s looking all smug.');
        scene.text('He turns and heads back into his room, waving for you to follow. "Come on in."');
      }
    }
    scene.actions([
      { label: 'Follow him to his room', goto: ['radapt', 'radroom'] },
    ]);
  } },
                        ]);
                      } else {
                        scene.actions([
                          { label: 'Enter', handler: (st: GameState) => {
    ((st as any).radomirQW = (st as any).radomirQW ?? {})['nush_visit'] = 1;
    qspCall(st, 'npc_relationship', 'modify', 'A144', 'dislike');
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('You thank her and enter the apartment. She closes the door and heads off to the kitchen while you head down the hallway to Radomir\'s room.');
    scene.text('Just as you arrive, the door opens and Anushka walks out of his room. By the state of her clothes, her messed up hair and her smeared makeup, it\'s not hard to guess what happened.');
    if (((st as any).npc_rel ?? 0)?.['A154'] >= 60) {
      ((st as any).radomirQW = (st as any).radomirQW ?? {})['nush_visit'] = 2;
      qspCall(st, 'npc_relationship', 'modify', 'A144', 'hate');
      scene.text(`She pauses when she sees you and looks surprised to see you. "What are you doing here, ${((st as any).pcs_nickname ?? '')}?"`);
      scene.text('You know the thing between Rad and her is complicated, but there\'s not much you can do, since she caught you heading to his bedroom. "I just came to see Rad."');
      scene.text('Before she can say anything, Radomir steps out and smiles when he sees you. "What are you girls talking about?"');
      scene.text(`Anushka gives him a sour look. "I was just asking ${((st as any).pcs_nickname ?? '')} why she was here."`);
      scene.text('Radomir grins and looks really smug. "Don\'t be jealous, babe. This is why we broke up."');
      scene.text('Anushka\'s eyes flash in anger. "We broke up because you\'re a fucking asshole!"');
      scene.text('Radomir says calmly looking as innocent as someone can look. "Babe, calm down!" he says calmly before he slaps her on the ass. "Best ass in Pavlovsk right there."');
      scene.text('Anushka turns and shoves him hard enough to make him stumble. "Fuck you, Rad!"');
      scene.text('She then turns to you, looking more pissed than you\'ve seen her before. "And fuck you too!" she snarls before she storms out of the apartment');
    } else {
      if (((st as any).npc_rel ?? 0)?.['A154'] <= 20) {
        scene.text('She pauses when she sees you before she gives you a dirty look. You know she doesn\'t like you, but there seems to be a bit more extra venom in that look today.');
        scene.text('A moment later, Radomir steps out and smiles when he sees you before he slaps Anushka on the ass. "Best ass in Pavlovsk right there!"');
        scene.text('Anushka just gives him an annoyed look before she walks past you towards the exit. "Later, babe!" he says to her as she leaves. When you glance back at him, he\'s looking all smug.');
      } else {
        scene.text('She pauses when she sees you. "If you\'re smart, you\'ll turn around, walk out of here and never come back, Rad\'s not the charming guy he pretends to be."');
        scene.text('A moment later, Radomir steps out and smiles when he sees you. "What are you girls talking about?"');
        scene.text('Anushka smirks at him. "I was telling her you\'re not the nice charming guy you pretend to be, but a womanizing asshole."');
        scene.text('Radomir grabs his chest as if he was just stabbed in the heart. "Oh, you wound me! Don\'t be jealous, babe." He then slaps Anushka on the ass. "Best ass in Pavlovsk right there."');
        scene.text('She just gives him an annoyed look and walks past you towards the exit. "Later, babe!" he says to her as she leaves. When you glance back at him, he\'s looking all smug.');
        scene.text('He turns and heads back into his room, waving for you to follow. "Come on in."');
      }
    }
    scene.actions([
      { label: 'Follow him to his room', goto: ['radapt', 'radroom'] },
    ]);
  } },
                        ]);
                      }
                      scene.actions([
                        { label: 'Leave', goto: ['pav_complex', 'start'] },
                      ]);
                    } else {
                      if (((s as any).raddoor ?? 0) === 2) {
                        scene.text('She nods and stands aside to let you enter.');
                        scene.text('"Yes, he\'s in his room with one of his little friends."');
                        scene.actions([
                          { label: 'Leave', goto: ['pav_complex', 'start'] },
                          { label: 'Enter', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big20.jpg');
    if (((st as any).grupTipe ?? 0) === 1) {
      scene.text('You thank her and enter the apartment. She closes the door and heads off to the kitchen while you head down the hallway to Radomir\'s room.');
      scene.text('Just as you arrive, the door opens and Lena walks out of his room. By the state of her clothes, her messed up hair and her smeared makeup, it\'s not hard to guess what happened.');
      scene.text('She pauses when she sees you. "Look at the princess coming to slum it. Those cool boys just don\'t know how to fuck your ass, right?" she smirks while patting you on the cheek in a mocking way.');
      scene.text('A moment later, Radomir steps out and smiles when he sees you. He then slaps Lena on the ass, which makes her giggle. "See you later, doll."');
      scene.text('Lena smiles at him all coy before she walks past you and out of the apartment. When you glance back at Rad, he\'s looking all smug.');
      scene.text('He turns and heads back into his room, waving for you to follow. "Come on in."');
    } else {
      if (((st as any).grupTipe ?? 0) === 2) {
        scene.text('You thank her and enter the apartment. She closes the door and heads off to the kitchen while you head down the hallway to Radomir\'s room.');
        scene.text('Just as you arrive, the door opens and Lena walks out of his room. By the state of her clothes, her messed up hair and her smeared makeup, it\'s not hard to guess what happened.');
        scene.text('She pauses when she sees you. "Look at the jockette coming to slum it. Those jock boys just don\'t know how to fuck your ass, right?" she smirks while patting you on the cheek in a mocking way.');
        scene.text('A moment later, Radomir steps out and smiles when he sees you. He then slaps Lena on the ass, which makes her giggle. "See you later, doll."');
        scene.text('Lena smiles at him all coy before she walks past you and out of the apartment. When you glance back at Rad, he\'s looking all smug.');
        scene.text('He turns and heads back into his room, waving for you to follow. "Come on in."');
      } else {
        if (((st as any).grupTipe ?? 0) === 3) {
          scene.text('You thank her and enter the apartment. She closes the door and heads off to the kitchen while you head down the hallway to Radomir\'s room.');
          scene.text('Just as you arrive, the door opens and Lena walks out of his room. By the state of her clothes, her messed up hair and her smeared makeup, it\'s not hard to guess what happened.');
          scene.text('She pauses when she sees you. "Look at the nerd coming to slum it, or are you just looking to finally lose your virginity?" she smirks while patting you on the cheek in a mocking way.');
          scene.text('A moment later, Radomir steps out and smiles when he sees you.');
          scene.text('Lena looks at Radomir in confusion. "Really? A nerd?"');
          scene.text('He just shrugs. "What can I say? Nerds like to learn, so who am I deny her higher sex education?"');
          scene.text('Lena laughs at that, then smirks at you before Radomir slaps her on the ass, which makes her giggle. "See you later, doll."');
          scene.text('Lena smiles to him all coy. "Bye Rad." Then she walks past you and out the apartment. When you glance back at Rad, he\'s looking all smug.');
          scene.text('He turns and heads back into his room, waving for you to follow. "Come on in."');
        } else {
          scene.text('You thank her and enter the apartment. She closes the door and heads off to the kitchen while you head down the hallway to Radomir\'s room.');
          scene.text('Just as you arrive, the door opens and Lena walks out of his room. She pauses when she sees you before a smirk creeps onto her face. By the state of her clothes, her messed up hair and her smeared makeup, it\'s not hard to guess what happened.');
          scene.text('A moment later, Radomir steps out and smiles when he sees. He then slaps Lena on the ass, which makes her giggle. "See you later, doll."');
          scene.text('Lena smiles at him all coy before she walks past you and out of the apartment. When you glance back at Rad, he\'s looking all smug.');
          scene.text('He turns and heads back into his room, waving for you to follow. "Come on in."');
        }
      }
    }
    scene.actions([
      { label: 'Follow him to his room', goto: ['radapt', 'radroom'] },
    ]);
  } },
                        ]);
                      } else {
                        if (((s as any).raddoor ?? 0) <= 5) {
                          scene.text('She nods and stands aside to let you enter.');
                          scene.text('"Yes, he\'s in his room with one of his little friends."');
                          scene.actions([
                            { label: 'Leave', goto: ['pav_complex', 'start'] },
                            { label: 'Enter', handler: (st: GameState) => {
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/radapt/rads_girls/rgirl` + (Math.floor(Math.random() * 4) + 1) + '.jpg"></center>');
    scene.text('You thank her and enter the apartment. She closes the door and heads off to the kitchen while you head down the hallway to Radomir\'s room.');
    scene.text('Just as you arrive, the door opens and a girl with dyed hair and punk rock style clothing walks out of his room. She pauses when she sees you before smirking. By the state of her clothes, her messed up hair and her smeared makeup, it\'s not hard to guess what happened.');
    scene.text('A moment later, Radomir steps out and smiles when he sees you. He then slaps the girl on the ass, which makes her giggle. "See you later, doll."');
    scene.text('She smiles back at him all coy before she walks past you and out of the apartment. When you glance back at Rad, he\'s looking all smug.');
    scene.text('He turns and heads back into his room, waving for you to follow. "Come on in."');
    scene.actions([
      { label: 'Follow him to his room', goto: ['radapt', 'radroom'] },
    ]);
  } },
                          ]);
                        } else {
                          if (((s as any).raddoor ?? 0) <= 8) {
                            scene.text('She nods and stands aside to let you enter.');
                            scene.text('"Yes, he\'s in his room with one of his little friends."');
                            scene.actions([
                              { label: 'Leave', goto: ['pav_complex', 'start'] },
                              { label: 'Enter', handler: (st: GameState) => {
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/radapt/rads_girls/girl` + (Math.floor(Math.random() * 4) + 1) + '.jpg"></center>');
    scene.text('You thank her and enter the apartment. She closes the door and heads off to the kitchen while you head down the hallway to Radomir\'s room.');
    scene.text('Just as you arrive, the door opens and a girl you\'ve never seen before walks out of his room. She pauses when she sees you and blushes. By the state of her clothes, her messed up hair and her smeared makeup, it\'s not hard to guess what happened.');
    scene.text('A moment later, Radomir steps out and smiles when he sees you. He then slaps the girl on the ass, which makes her giggle. "See you later, doll."');
    scene.text('She smiles back at him all coy before she walks past you and out of the apartment. When you glance back at Rad, he\'s looking all smug.');
    scene.text('He turns and heads back into his room, waving for you to follow. "Come on in."');
    scene.actions([
      { label: 'Follow him to his room', goto: ['radapt', 'radroom'] },
    ]);
  } },
                            ]);
                          } else {
                            scene.text('She nods and stands aside to let you enter.');
                            scene.text('"Yes, he\'s in his room."');
                            scene.actions([
                              { label: 'Leave', goto: ['pav_complex', 'start'] },
                              { label: 'Enter', goto: ['radapt', 'hallway'] },
                            ]);
                          }
                        }
                      }
                    }
                    (s as any).raddoor = undefined;
                  } else {
                    scene.text('You knock on the door several times, but no one answers. You assume that there probably isn\'t anyone home at the moment.');
                    scene.actions([
                      { label: 'Move away from the door', goto: ['pav_complex', 'start'] },
                    ]);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterHallway(s: GameState, scene: SceneBuilder): void {
  (s as any).locclass = undefined;
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'core_library', 'setloc', 'radapt', 'hallway');
  (s as any).location_type = 'public_indoors';
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Entrance hall</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/radapt/hall.jpg');
  scene.text('This is the entrance hall of Radomir\'s apartment. There\'s a small coat rack with several coats hanging from it, a large mirror just down the hall and a few paintings hanging on the wall. Other than that, the hall is empty and very clean.');
  scene.actions([
    { label: '<b>Leave Radomir\'s apartment</b>', goto: ['pav_complex', 'start'] },
    { label: 'Radomir\'s room', goto: ['radapt', 'radroom'] },
    { label: 'Bathroom', goto: ['radapt', 'bathroom'] },
    { label: 'Radomir\'s brother\'s room', goto: ['radapt', 'brotherroom'] },
    { label: 'Living room', goto: ['radapt', 'livingroom'] },
    { label: 'Kitchen', goto: ['radapt', 'kitchen'] },
    { label: 'Parents room', goto: ['radapt', 'radparents'] },
  ]);
  scene.build();
}

function enterBathroom(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'core_library', 'setloc', 'radapt', 'bathroom');
  (s as any).location_type = 'bathroom';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Bathroom</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/radapt/bathroom.jpg');
  scene.text('The bathroom is spotless. The porcelain of the sink is so clean you can almost see your reflection in it. There\'s also a nice tub next to the sink, with a toilet across from it.');
  scene.text('You can do your hair and makeup in the <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027mirror\u0027, \u0027start\u0027); return false;">mirror</a> above the sink.');
  qspCall(s, 'piercing_management', 'set_manage_string');
  qspCall(s, 'din_van', 'bath');
  qspCall(s, 'din_van', 'bteeth');
  qspCall(s, 'din_van', 'tampon');
  qspCall(s, 'din_van', 'basin');
  qspCall(s, 'din_van', 'prvt_pee');
  scene.actions([
    { label: 'Leave the bathroom', goto: ['radapt', 'hallway'] },
    { label: 'Take a shower', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'din_van', 'showerdin');
    qspCall(st, 'stat', '');
    (st as any).temp = (Math.floor(Math.random() * 7) + 0);
    if (((st as any).temp ?? 0) === 0  &&  ((st as any).pcs_hotcat ?? 0) >= 6  &&  ((((st as any).hour ?? 0) >= 20  &&  ((st as any).hour ?? 0) < 23)  ||  (((st as any).week ?? 0) > 5  &&  ((st as any).hour ?? 0) >= 8  &&  ((st as any).hour ?? 0) < 16)  ||  (((st as any).week ?? 0) > 5  &&  ((st as any).hour ?? 0) >= 18  &&  ((st as any).hour ?? 0) < 23))) {
      (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + (1);
      scene.img('images/locations/pavlovsk/resident/apartment/radapt/sex/bathroom/rostislav/post_shower1.jpg');
      scene.text('After a refreshing shower, you grab a towel and dry yourself off. As you look at the mirror, you see the reflection of Radomir\'s dad standing by the bathroom door watching you.');
      scene.actions([
        { label: 'Surprise!', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/sex/bathroom/rostislav/post_shower2.jpg');
    scene.text('You jump and instinctively pull the towel tighter around your body. You have no clue how long he\'s been watching you, but the smile on his face you would say a while.');
    scene.text('"What are you doing?!" you blurt out.');
    scene.text('He looks you up and down like a piece of meat. "I thought you were my wife, but I\'m happy to be wrong. You sure are a pretty little thing, aren\'t you?"');
    scene.actions([
      { label: 'Tell him to leave', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/sex/bathroom/rostislav/post_shower0.jpg');
    scene.text('You hold your towel tightly in place. "Please leave. You\'re making me very uncomfortable. Besides, what would your wife say?"');
    scene.text('He laughs. "My wife wouldn\'t care. She knows how the world works."');
    scene.text('He keeps looking you over and for a moment you don\'t think he\'s going to leave. "Okay, okay… I\'m going."');
    scene.text('With that, he slowly turns and leaves, stopping to close the door very slowly.');
    scene.actions([
      { label: 'Get dressed', goto: ['radapt', 'bathroom'] },
    ]);
  } },
      { label: 'Wait to see what he does', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/sex/bathroom/rostislav/post_shower2.jpg');
    scene.text('You just stand there watching him watch you. "Arn\'t you afraid your wife will catch you in here with me?"');
    scene.text('He laughs as he looks you over like a piece of meat. "My wife wouldn\'t care. She knows how the world works."');
    scene.actions([
      { label: 'Tell him to leave', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/sex/bathroom/rostislav/post_shower0.jpg');
    scene.text('You hold your towel tightly in place. "Please leave. You\'re making me very uncomfortable."');
    scene.text('He keeps looking you over and for a moment you don\'t think he is going to leave. "Okay, okay… I\'m going."');
    scene.text('With that, he slowly turns and leaves, stopping to close the door very slowly.');
    scene.actions([
      { label: 'Get dressed', goto: ['radapt', 'bathroom'] },
    ]);
  } },
      { label: 'Why is that?', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/sex/bathroom/rostislav/post_shower3.jpg');
    scene.text('Curiosity wins out and you decide to ask what he means. "What do you mean, \'she knows how the world works\'?"');
    scene.text('He gives you a predatory smile. "Women exist to serve the sexual needs of men, of course! We can\'t just be with one woman. That\'s how our species survived after all," he says as he grabs the top of your towel and starts to pull it away from you.');
    qspCall(st, 'willpower', 'exhib', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Resist', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Resist', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/sex/bathroom/rostislav/post_shower0.jpg');
    scene.text('You grab hold of the towel to hold it in place, but he pulls on it and exposes your breasts.');
    if (((st as any).tits ?? 0) >= 4) {
      scene.text('You see him glancing down and smiling at the sight of your well endowed chest.');
    }
    scene.text('You fight his grip before he finally stops and lets go of your towel, allowing you to back up and create some space between the two of you as you pull your towel back up over your breasts. "Please leave. You\'re making me very uncomfortable."');
    scene.text('He keeps looking you over and for a moment you don\'t think he\'s going to leave. "Okay, okay… I\'m going."');
    scene.text('With that, he slowly turns and leaves, stopping to close the door very slowly.');
    scene.actions([
      { label: 'Get dressed', goto: ['radapt', 'bathroom'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Let him pull your towel away', handler: (st: GameState) => {
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + (1);
    qspCall(st, 'boyStat', 'A272');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/sex/bathroom/rostislav/post_shower4.jpg');
    scene.text('You don\'t resist and let him pull your tower away, allowing yourself to stand in front of him completely naked. He looks over every inch of your naked body with hungry eyes before looking up at you.');
    scene.text(`"Now look what you've done, " he says as he unzips his pants and pulls out his ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} cock.`);
    scene.text('As you look at it, he continues to talk. "Looks like you\'re going to have to suck it now."');
    qspCall(st, 'willpower', 'bj', 'resist', 'hard');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Resist', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Resist', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/sex/bathroom/rostislav/post_shower0.jpg');
    scene.text('You grab your towel back from him and cover up. No way are you going to suck his dick! "Please leave. You\'re making me very uncomfortable."');
    scene.text('He keeps looking you over and for a moment you don\'t think he\'s going to leave. "Okay, okay… I\'m going."');
    scene.text('With that, he slowly turns and leaves, stopping to close the door very slowly.');
    scene.actions([
      { label: 'Get dressed', goto: ['radapt', 'bathroom'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Drop to your knees', goto: ['radaptev1', 'shower_rostislav1'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      if (((st as any).temp ?? 0) <= 2  &&  ((st as any).pcs_hotcat ?? 0) >= 6) {
        (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + (1);
        scene.img('images/locations/pavlovsk/resident/apartment/radapt/sex/bathroom/radislav/shower1.jpg');
        if (((st as any).pcs_hotcat ?? 0) === 10) {
          if (((st as any).tits ?? 0) <= 2) {
            scene.text('Just as you\'re about to finish showering, the curtain is yanked back, startling you. You look round and see Radislav, Radomir\'s older brother, standing there with a grin on his face.');
            scene.text('"Damn, you\'re as good looking as I thought! Shame about the tits, but I guess no one\'s perfect. What are you doing with my brother? You\'re way out of his league!" he says with a laugh as he looks at you like he\'s examining a prized pet.');
          } else {
            if (((st as any).tits ?? 0) >= 5) {
              scene.text('Just as you\'re about to finish showering, the curtain is yanked back, startling you. You look round and see Radislav, Radomir\'s older brother, standing there with a grin on his face.');
              scene.text('"Damn, you\'re as good looking as I thought! With nice big tits like those, you\'re about as close to perfect as a girl can get. What are you doing with my brother? You\'re way out of his league!" he says with a laugh as he looks at you like he\'s examining a prized pet.');
            } else {
              scene.text('Just as you\'re about to finish showering, the curtain is yanked back, startling you. You look round and see Radislav, Radomir\'s older brother, standing there with a grin on his face.');
              scene.text('"Damn, you\'re as good looking as I thought! Decent enough tits, but I guess no one\'s perfect. What are you doing with my brother? You\'re way out of his league!" he says with a laugh as he looks at you like he\'s examining a prized pet.');
            }
          }
        } else {
          if (((st as any).pcs_hotcat ?? 0) >= 8) {
            if (((st as any).tits ?? 0) <= 2) {
              scene.text('Just as you\'re about to finish showering, the curtain is yanked back, startling you. You look round and see Radislav, Radomir\'s older brother, standing there with a grin on his face.');
              scene.text('"Pretty nice body, but the tits are a bit small. You\'re better than what my brother can typically land," he says with a laugh as he looks at you like he\'s examining a prized pet.');
            } else {
              if (((st as any).tits ?? 0) >= 5) {
                scene.text('Just as you\'re about to finish showering, the curtain is yanked back, startling you. You look round and see Radislav, Radomir\'s older brother, standing there with a grin on his face.');
                scene.text('"Not bad looking, nice tits at least. You\'re better than my brother can typically land," he says with a laugh as he looks at you like he\'s examining a prized pet.');
              } else {
                scene.text('Just as you\'re about to finish showering, the curtain is yanked back, startling you. You look round and see Radislav, Radomir\'s older brother, standing there with a grin on his face.');
                scene.text('"Not bad looking. Decent enough tits. You\'re better than my brother can typically land," he says with a laugh as he looks at you like he\'s examining a prized pet.');
              }
            }
          } else {
            if (((st as any).tits ?? 0) <= 2) {
              scene.text('Just as you\'re about to finish showering, the curtain is yanked back, startling you. You look round and see Radislav, Radomir\'s older brother, standing there with a grin on his face.');
              scene.text('"Not bad looking, but the tits are a little small. About as well as I can expect Rad to do honestly," he says with a laugh as he looks at you like he\'s examining a prized pet.');
            } else {
              if (((st as any).tits ?? 0) >= 5) {
                scene.text('Just as you\'re about to finish showering, the curtain is yanked back, startling you. You look round and see Radislav, Radomir\'s older brother, standing there with a grin on his face.');
                scene.text('"Not bad looking. Nice tits at least. About as well as I can expect Rad to do honestly," he says with a laugh as he looks at you like he\'s examining a prized pet.');
              } else {
                scene.text('Just as you\'re about to finish showering, the curtain is yanked back, startling you. You look round and see Radislav, Radomir\'s older brother, standing there with a grin on his face.');
                scene.text('"Not bad looking. Decent enough tits. About as well as I can expect Rad to do honestly," he says with a laugh as he looks at you like he\'s examining a prized pet.');
              }
            }
          }
        }
        qspCall(st, 'willpower', 'exhib', 'resist', 'medium');
        if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Cover up and tell him to leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Cover up and tell him to leave', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/sex/bathroom/radislav/shower0.jpg');
    scene.text('You grab the towel off the towel rack and quickly use it to cover yourself up, followed by you point at the door. "Please leave, you are making me very uncomfortable."');
    scene.text('He gets a dark look in his eye, you can tell he is angry. "Bitch." With that he slowly turns and leaves, stopping to close the door very slowly.');
    scene.actions([
      { label: 'Get dressed', goto: ['radapt', 'bathroom'] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Wait to see what he does', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/sex/bathroom/radislav/shower2.jpg');
    scene.text('You just stand there naked with the water from the shower still pattering against your skin. He stares at your naked body for a long time before he suddenly grabs you and pulls you close to him. You nearly trip as he pulls you out of the tub and fall against him, but he catches you and you suddenly find your naked wet body pressed up against him.');
    scene.text('Before you can say anything, he suddenly kisses you. When he finally breaks the kiss, he looks you dead in the eyes. "Get on your knees and suck my dick, slut."');
    qspCall(st, 'arousal', 'kiss', 1);
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'willpower', 'sex', 'resist', 'hard');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse and cover up', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse and cover up', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/sex/bathroom/radislav/shower0.jpg');
    scene.text('You pull away from him and grab a towel off the towel rack, quickly using it to cover yourself up. "Please leave. You\'re making me very uncomfortable."');
    scene.text('A dark look appears in his eye. "Fucking tease."');
    scene.text('With that, he slowly turns and leaves, stopping to close the door very slowly.');
    scene.actions([
      { label: 'Get dressed', goto: ['radapt', 'bathroom'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Drop to your knees', goto: ['radaptev1', 'shower_radislav1'] },
    ]);
  } },
        ]);
      } else {
        scene.text('<center><b>Bathroom</b></center>');
        scene.img('images/shared/home/bathroom/dush.mp4');
        scene.text('You take a quick shower.');
        scene.actions([
          { label: 'Take a selfie', handler: (st: GameState) => {
    qspCall(st, 'telefon', 'Phone_selfie_image_bathing', 'shower');
  } },
          { label: 'Get out of the shower', goto: ['radapt', 'bathroom'] },
        ]);
      }
    }
    if (((st as any).deodorant_on ?? 0) === 1) {
      qspCall(st, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the shower.');
    }
    (st as any).temp = undefined;
  } },
  ]);
  scene.build();
}

function enterLivingroom(s: GameState, scene: SceneBuilder): void {
  if (((s as any).livingev_day ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).livingev = 0;
  } else {
    (s as any).livingev = 0;
  }
  qspCall(s, 'core_library', 'setloc', 'radapt', 'livingroom');
  (s as any).locclass = 'livingr';
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Living room</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/radapt/living_room.jpg');
  scene.text('The room is very clean and tidy. A couch is against one wall, with a TV stand and flatscreen TV sitting on it against the opposite wall. In front of the couch are two small coffee tables with plants on them. Large matching curtains hang on the wall next to the window, while a matching recliner sits near the couch.');
  scene.actions([
    { label: 'Leave', goto: ['radapt', 'hallway'] },
  ]);
  scene.build();
}

function enterKitchen(s: GameState, scene: SceneBuilder): void {
  if (((s as any).kitchenev_day ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).kitchenev = 0;
  } else {
    (s as any).kitchenev = 0;
  }
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'core_library', 'setloc', 'radapt', 'kitchen');
  (s as any).locclass = 'kitr';
  qspCall(s, 'stat', '');
  qspCall(s, 'kit_din', '');
  scene.text('<center><b>Kitchen</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/radapt/kitchen.jpg');
  scene.text('The room is very clean and tidy, with very homey feel to it. There is a small table that sits four in the middle of the room.');
  qspCall(s, 'kit_din', 'fill_bottle');
  qspCall(s, 'kit_din', 'driwater');
  scene.actions([
    { label: 'Leave', goto: ['radapt', 'hallway'] },
    { label: 'Look in the fridge', goto: ['radapt', 'fridge'] },
  ]);
  scene.build();
}

function enterFridge(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  if (((s as any).radfood_day ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).radbeer_count = 2;
    (s as any).radvodka_count = 5;
    (s as any).radsup_count = 1;
  }
  qspCall(s, 'stat', '');
  if (((s as any).radbeer_count ?? 0) === 2) {
    (s as any).rad_beer = ' 2 beers,';
  } else {
    if (((s as any).radbeer_count ?? 0) === 1) {
      (s as any).rad_beer = ' 1 beer,';
    } else {
      (s as any).rad_beer = '';
    }
  }
  if (((s as any).radvodka_count ?? 0) === 5) {
    (s as any).rad_vodka = ' a full bottle of vodka,';
  } else {
    if (((s as any).radvodka_count ?? 0) === 3) {
      (s as any).rad_vodka = ' a half-empty bottle of vodka,';
    } else {
      if (((s as any).radvodka_count ?? 0) === 1) {
        (s as any).rad_vodka = ' a nearly empty bottle of vodka,';
      } else {
        (s as any).rad_vodka = '';
      }
    }
  }
  if (((s as any).radsup_count ?? 0) >= 1) {
    (s as any).rad_sup = ' some left overs';
  } else {
    (s as any).rad_sup = '';
  }
  if (((s as any).radbeer_count ?? 0) === 0  &&  ((s as any).radvodka_count ?? 0) === 0  &&  (!((s as any).radsup_count ?? 0))) {
    (s as any).r_pusto = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/locations/pavlovsk/resident/apartment/shulginhome/kuh/holodpusto.jpg"></center><br><font color = red>empty shelves.</font>';
  }
  if (((s as any).radbeer_count ?? 0) > 0  &&  ((s as any).radvodka_count ?? 0) > 0  &&  ((s as any).radsup_count ?? 0) > 0) {
    (s as any).r_pusto = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/locations/pavlovsk/resident/apartment/shulginhome/kuh/holod\'+rand(1, 3)+\'.jpg"></center>';
  }
  scene.text(`You open the fridge and see:${((s as any).rad_vodka ?? '')}${((s as any).rad_beer ?? '')}${((s as any).rad_sup ?? '')}${((s as any).r_pusto ?? '')}`);
  if (((s as any).radbeer_count ?? 0) > 0) {
    scene.actions([
      { label: 'Have a beer', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'drugs', 'alcohol', 'beer');
    (st as any).radfood_day = ((st as any).daystart ?? 0);
    (st as any).radbeer_count = ((st as any).radbeer_count ?? 0) - (1);
    qspCall(st, 'stat', '');
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/kuh/beer` + (Math.floor(Math.random() * 3) + 1) + '.jpg"></center>');
    scene.text('You take a bottle of beer from the fridge and drink it, which quenches your thirst.');
    scene.actions([
      { label: 'Continue', goto: ['radapt', 'fridge'] },
    ]);
  } },
    ]);
  }
  if (((s as any).radvodka_count ?? 0) > 0) {
    scene.actions([
      { label: 'Drink some vodka', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'drugs', 'alcohol', 'vodka');
    (st as any).radfood_day = ((st as any).daystart ?? 0);
    (st as any).radvodka_count = ((st as any).radvodka_count ?? 0) - (1);
    qspCall(st, 'stat', '');
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/kuh/vodka` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
    scene.text('You pour some vodka into a glass and drink it. You shiver as you feel the warm, burning sensation slowly slide down your gullet.');
    scene.actions([
      { label: 'Put the bottle back in the fridge', goto: ['radapt', 'fridge'] },
      { label: 'Drink more vodka', handler: (st: GameState) => {
    if ((!((st as any).radvodka_count ?? 0))) {
      scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/vodka0.jpg');
      scene.text('<font color = red>There\'s no vodka left. You drank it all!</font>');
    } else {
      if (((st as any).radvodka_count ?? 0) > 0) {
        (st as any).minut = ((st as any).minut ?? 0) + 1;
        qspCall(st, 'drugs', 'alcohol', 'vodka');
        (st as any).radvodka_count = ((st as any).radvodka_count ?? 0) - (1);
        qspCall(st, 'stat', '');
        scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/kuh/vodka` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
        scene.text('You pour yourself another glass and drain it in one gulp. Wow, that stuff is strong!');
      }
    }
    scene.actions([
      { label: 'Continue', goto: ['radapt', 'fridge'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).radsup_count ?? 0) > 0) {
    scene.actions([
      { label: 'Eat some leftovers', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).radfood_day = ((st as any).daystart ?? 0);
    (st as any).radsup_count = ((st as any).radsup_count ?? 0) - (1);
    qspCall(st, 'stat', '');
    scene.img('images/shared/food/leftovers.jpg');
    (st as any).pcs_health = ((st as any).pcs_health ?? 0) + (10);
    qspCall(st, 'mood', 'raise', 'small');
    (st as any).fat = ((st as any).fat ?? 0) + (2);
    (st as any).pcs_energy = ((st as any).pcs_energy ?? 0) + (50);
    if (((st as any).pcs_hydra ?? 0) >= 100) {
      (st as any).pcs_hydra = ((st as any).pcs_hydra ?? 0) + (20);
    } else {
      (st as any).pcs_hydra = ((st as any).pcs_hydra ?? 0) + (40);
    }
    (st as any).cumspclnt = 2;
    qspCall(st, 'cum_cleanup', '');
    (st as any).pcs_breath = 0;
    scene.text('It seems to be leftovers from a ready to make meal. You wonder if anyone here knows how to cook.');
    scene.actions([
      { label: 'Continue', goto: ['radapt', 'fridge'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Close the refrigerator', goto: ['radapt', 'kitchen'] },
  ]);
  scene.build();
}

function enterRadparents(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'radapt', 'radparents');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Radomir\'s parent\'s room</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/radapt/parents_bedroom.jpg');
  scene.text('The room is very well decorated with a large plant in one corner and a number of nicknacks on the dresser. In the center of the room against one wall is a large well made bed.');
  scene.text('You can certainly tell this place has a woman\'s touch; everything looks tastefully decorated and clean.');
  if (((s as any).hour ?? 0) < 7) {
    scene.text('You look into the bedroom and see Radomir\'s parents asleep. Anfisa is snuggled up against Rostislav. You don\'t want to disturb them, so you close the door and leave.');
    scene.actions([
      { label: 'Leave', goto: ['radapt', 'hallway'] },
    ]);
  } else {
    scene.text('Since nobody\'s here, you should probably leave.');
    scene.actions([
      { label: 'Leave', goto: ['radapt', 'hallway'] },
    ]);
  }
  scene.build();
}

function enterBrotherroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'radapt', 'brotherroom');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Radomir\'s brother\'s room</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/radapt/brothers_bedroom.jpg');
  scene.text('The room is very well clean and done up in dark green and a bright, almost neon green. Along one wall is a bed with some shelves above it, which contain several sports trophies. There\'s an obvious football theme going on with the bedroom with posters of some famous players lining the walls. There\'s also a dresser opposite the bed, along with a small desk with a laptop lying on it.');
  if (((s as any).hour ?? 0) < 7) {
    scene.text('You look into the bedroom and see Radomir\'s brother asleep. You don\'t want to disturb him, so you close the door and leave.');
    scene.actions([
      { label: 'Leave', goto: ['radapt', 'hallway'] },
    ]);
  } else {
    scene.text('Since nobody\'s here, you should probably leave.');
    scene.actions([
      { label: 'Leave', goto: ['radapt', 'hallway'] },
    ]);
  }
  scene.build();
}

function enterRadroom(s: GameState, scene: SceneBuilder): void {
  (s as any).locclass = 'bedr';
  (s as any).track_loop = '';
  (s as any).music_loop = 1;
  qspCall(s, 'core_library', 'setloc', 'radapt', 'radroom');
  qspCall(s, 'internet_mobile', 'remove_limitation', 'noporn');
  qspCall(s, 'internet_mobile', 'remove_limitation', 'nocam');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Radomir\'s Room</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/radapt/rads_room/rads_room.jpg');
  scene.text('The room is surprisingly clean, other than a few things lying on the floor as if they were recently tossed or dropped there. The walls are covered with pictures and posters of famous female models or bands with a few other decorations, while the room is skillfully decorated with a red and black theme to it. In the center of the room, near the window, is a <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027radapt\u0027, \u0027bed\u0027); return false;">bed</a>. On one side of the bed is a desk with a <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027radapt\u0027, \u0027computer\u0027); return false;">laptop</a> on it.');
  scene.text('On the other side of the bed is a sound system, with a speaker spaced about the room. Against the wall opposite the bed is a dresser with a flatscreen TV on it. On the last wall are several guitar stands with guitars in them, including an <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027radapt\u0027, \u0027guitar\u0027); return false;">acoustic guitar</a>. Right in front of that is an amp and a speaker, along with a black beanbag chair with a skull face on it.');
  if (((s as any).locat ?? 0)?.['A154'] === 20) {
    scene.text('<br>Radomir is sitting on the beanbag, looking at you.');
    scene.actions([
      { label: 'Talk to Radomir', goto: ['radchat', 'chat'] },
    ]);
  }
  scene.actions([
    { label: 'Leave', goto: ['radapt', 'hallway'] },
  ]);
  scene.build();
}

function enterComputer(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).locat ?? 0)?.['A154'] === 20) {
    qspCall(s, 'internet_mobile', 'get_access', 'free');
    qspCall(s, 'internet_mobile', 'add_limitation', 'noporn', 'You can\'t watch porn with radomir in the room!');
    qspCall(s, 'internet_mobile', 'add_limitation', 'nocamshow', 'You can\'t do a camshow with radomir in the room!');
    if (((s as any).radomirQW ?? 0)?.['computer_use'] === 0) {
      ((s as any).radomirQW = (s as any).radomirQW ?? {})['computer_use'] = 1;
      scene.text('<center><b>Radomir\'s Room</b></center>');
      scene.img('images/locations/pavlovsk/resident/apartment/radapt/rads_room/laptop.jpg');
      scene.text('You point towards his laptop. "You\'re so lucky to have your own computer."');
      scene.text('"I bought it with some of the money I made from our gigs. I mostly use it to play games or do homework."');
      scene.text('You talk about what kinds of games he likes to play and discover that he mostly plays RPGs like The Witcher.');
      scene.text('"You can use it if you want," he says.');
      scene.actions([
        { label: 'Find something else to look at', goto: ['radapt', 'radroom'] },
        { label: 'Go online', goto: ['komp', 'start'] },
      ]);
    } else {
      scene.text('<center><b>Radomir\'s Room</b></center>');
      scene.img('images/locations/pavlovsk/resident/apartment/radapt/rads_room/laptop.jpg');
      scene.text('You point towards his laptop. "You mind if I use it again?"');
      scene.text('He shrugs. "Sure, go ahead."');
      scene.actions([
        { label: 'Find something else to look at', goto: ['radapt', 'radroom'] },
        { label: 'Go online', goto: ['komp', 'start'] },
      ]);
    }
  } else {
    if (((s as any).radomirQW ?? 0)?.['computer_use'] === 0  ||  ((s as any).locat ?? 0)?.['A154'] === 3) {
      scene.text('<center><b>Radomir\'s Room</b></center>');
      scene.img('images/locations/pavlovsk/resident/apartment/radapt/rads_room/laptop.jpg');
      scene.text('You\'re not sure you should be using his computer when he isn\'t here without his permission, so you decide to leave it alone.');
      scene.actions([
        { label: 'Return', goto: ['radapt', 'radroom'] },
      ]);
    } else {
      scene.text('You decide to use Radomir\'s computer. You\'re sure he wouldn\'t mind.');
      qspCall(s, 'internet_mobile', 'get_access', 'free', 'nocamshow');
      scene.actions([
        { label: 'Turn the computer off', goto: ['radapt', 'radroom'] },
        { label: 'Go online', goto: ['komp', 'start'] },
        { label: 'Check out his porn', handler: (st: GameState) => {
    scene.text('<center><b>Radomir\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/usecomp.jpg');
    scene.text('You take a seat in front of the computer and decide to take a look at what kind of porn Radomir likes to watch.');
    scene.text('You start the computer up and it loads much faster than what you\'re used to, so it must be a pretty high-end laptop. Once it\'s done loading, you click on the internet browser and look through his browsing history plus bookmarks.');
    scene.text('You see that he\'s watched videos from all kinds of porn sites. It\'s almost exclusively boy-girl dominant sex where the guy is rough with the girl. A lot of it is hard anal sex, but there\'s also a little bit of lesbian sex. It would seem Radomir knows what he likes and sticks to it.');
    qspCall(st, 'arousal', 'porn', 10);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Turn the computer off', goto: ['radapt', 'radroom'] },
    ]);
  } },
      ]);
    }
  }
  scene.build();
}

function enterGuitar(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).locat ?? 0)?.['A154'] === 20) {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/rads_room/guitar.jpg');
    scene.text('You check out the two guitars hanging on the wall. One of them is an acoustic guitar that looks pretty old, but well cared for. The other is what looks like a relatively new and costly electric guitar.');
    scene.actions([
      { label: 'Look at something else', goto: ['radapt', 'radroom'] },
      { label: 'Ask how long it took to learn to play', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/rads_room/guitar.jpg');
    scene.text('"How long did it take you to learn to play?" you ask.');
    scene.text('He smiles. "Not too long. I was pretty good right away, then Nush and I started hanging out and exchanged what we knew."');
    scene.text('The two of you talk about how long it takes to master a guitar like he has from his own words.');
    scene.actions([
      { label: 'Look at something else', goto: ['radapt', 'radroom'] },
    ]);
  } },
    ]);
  } else {
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/rads_room/guitar.jpg');
    scene.text('You check out the guitars. One of them is an acoustic guitar that looks very new and fairly expensive. The others are electric guitars of various types, which all look pretty expensive.');
    if (((s as any).instrmusic_lvl ?? 0) < 5) {
      scene.actions([
        { label: 'Pretend to play', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'mood', 'raise', 'tiny');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/play_guitar.jpg');
    scene.text('You decide to live out one of your fantasies. You\'ve always wanted to play the guitar, so you grab hold of one and pretend to play, putting on a show as if you were a real rock star. After a while, you need to catch your breath. Playing it was a lot harder than you thought.');
    scene.actions([
      { label: 'Put the guitar back', goto: ['radapt', 'radroom'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Look at something else', goto: ['radapt', 'radroom'] },
      { label: 'Try to play it', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/play_guitar.jpg');
    if (((st as any).pcs_instrmusic ?? 0) < 20  ||  ((st as any).instrmusic_lvl ?? 0) < 10) {
      qspCall(st, 'exp_gain', 'instrmusic', (Math.floor(Math.random() * 2) + 0));
      qspCall(st, 'mood', 'raise', 'tiny');
      (st as any).minut = ((st as any).minut ?? 0) + 20;
      qspCall(st, 'pain', '1', 'fingers', 'ache');
      qspCall(st, 'stat', '');
      scene.text('You gently brush your fingers over the strings. The feeling of the coarse strings against your fingers is exhilarating. You come up with a song you want to try to play and start to work your magic…');
      scene.text('Unfortunately, playing the guitar is a lot harder than it looks. It takes you several tries to hit the right notes and several more to play even the tiny first fraction of the song without making a mistake. The strings cut into your tender, uncalloused fingertips and you eventually decide to stop.');
      scene.text('You realize now that learning how to play the guitar can be a frustrating, painful experience, yet you can\'t help but gently stroke the guitar once more before putting it back on its stand. You look forward to trying to play again.');
      scene.actions([
        { label: 'Put the guitar back', goto: ['radapt', 'radroom'] },
      ]);
    } else {
      if (((st as any).pcs_instrmusic ?? 0) < 40) {
        qspCall(st, 'exp_gain', 'instrmusic', (Math.floor(Math.random() * 3) + 0));
        qspCall(st, 'mood', 'raise', 'tiny');
        (st as any).minut = ((st as any).minut ?? 0) + 20;
        scene.text('You gently brush your fingers over the strings and slowly pick at them before you start playing a song you recently started learning. Unfortunately, you still have a lot to learn - it takes you several tries to hit the right notes and several more to play even a tiny bit of the song without making a mistake. Still, you\'re better than you used to be, and after about twenty minutes, you decide to stop.');
        scene.actions([
          { label: 'Put the guitar back', goto: ['radapt', 'radroom'] },
        ]);
      } else {
        if (((st as any).pcs_instrmusic ?? 0) < 60) {
          qspCall(st, 'exp_gain', 'instrmusic', (Math.floor(Math.random() * 4) + 0));
          qspCall(st, 'mood', 'raise', 'tiny');
          (st as any).minut = ((st as any).minut ?? 0) + 20;
          scene.text('You gently brush your fingers over the strings and slowly pick at them before you start playing a song you recently started learning. You keep making small mistakes here and there, but you\'re slowly but steadily getting the piece down. After about twenty minutes, you decide you\'ve messed around with the guitar enough.');
          scene.actions([
            { label: 'Put the guitar back', goto: ['radapt', 'radroom'] },
          ]);
        } else {
          qspCall(st, 'exp_gain', 'instrmusic', (Math.floor(Math.random() * 5) + 1));
          qspCall(st, 'mood', 'raise', 'tiny');
          (st as any).minut = ((st as any).minut ?? 0) + 20;
          scene.text('You pick up the guitar, run your hand along the neck and play a few chords, then flick your hair back and start playing the latest song you\'ve learned before switching to another piece. Your fingers dance gracefully over the strings, and you spend about twenty minutes just having fun playing songs.');
          scene.actions([
            { label: 'Put the guitar back', goto: ['radapt', 'radroom'] },
          ]);
        }
      }
    }
  } },
    ]);
  }
  scene.build();
}

function enterBed(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'radapt', 'bed');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/radapt/rads_room/rads_room.jpg');
  if (((s as any).locat ?? 0)?.['A154'] === 20) {
    scene.text('The bed is fairly large and you discover that it\'s surprisingly soft when you lay down on it. You imagine how amazing it would be to sleep in when you notice Radomir watching you.');
  } else {
    scene.text('You lie down on his bed and roll over, taking a deep breath to find the pillow smells just like him. There\'s not much to do without Radomir, and you start feeling bored, wishing he was here.');
  }
  scene.actions([
    { label: 'Get out of the bed', goto: ['radapt', 'radroom'] },
  ]);
  scene.build();
}

function enterFirstvisit(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'themes', 'indoors');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  ((s as any).locat = (s as any).locat ?? {})['A154'] = 20;
  if (((s as any).hour ?? 0) < 16) {
    ((s as any).locat = (s as any).locat ?? {})['154_rand1'] = ((s as any).daystart ?? 0);
    ((s as any).locat = (s as any).locat ?? {})['154_save1'] = (((s as any).locat ?? 0)?.['154']);
  } else {
    if (((s as any).hour ?? 0) < 18) {
      ((s as any).locat = (s as any).locat ?? {})['154_rand2'] = ((s as any).daystart ?? 0);
      ((s as any).locat = (s as any).locat ?? {})['154_save2'] = (((s as any).locat ?? 0)?.['154']);
    } else {
      if (((s as any).hour ?? 0) < 20) {
        ((s as any).locat = (s as any).locat ?? {})['154_rand3'] = ((s as any).daystart ?? 0);
        ((s as any).locat = (s as any).locat ?? {})['154_save3'] = (((s as any).locat ?? 0)?.['154']);
      } else {
        if (((s as any).hour ?? 0) < 22) {
          ((s as any).locat = (s as any).locat ?? {})['154_rand4'] = ((s as any).daystart ?? 0);
          ((s as any).locat = (s as any).locat ?? {})['154_save4'] = (((s as any).locat ?? 0)?.['154']);
        }
      }
    }
  }
  scene.img('images/locations/pavlovsk/resident/apartment/stairs/etaj4.jpg');
  scene.text('Radomir leads you to his apartment, and the two of you talk as you go. It\'s nothing important, just idle small talk to pass the time. Once on the fifth floor of his building, he leads you to apartment 21. It\'s one of the corner apartments, which you know from your own building are the bigger three bedroom apartments. He unlocks the door with his keys and leads you inside.');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'stat', '');
    scene.text('<center><b>Entrance hall</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/radislav.jpg');
    scene.text('There\'s a small coat rack with several coats hanging from it, a large mirror just down the hall and a few paintings hanging on the wall. Other than that, the hall is empty and very clean.');
    scene.text('As you follow Radomir down the hall, a young man steps out from one of the doorways. He looks a lot like Radomir, but is at least five or six years older than him, half dozen or more centimeters taller, and ten to fifteen kilograms heavier.');
    scene.text('Before you can ask anything, he lightly punches Radomir in the gut, enough to make him double over slightly.');
    scene.text('"Oh fuck, dude…" Radomir says as he catches his breath. "What the fuck was that for?!"');
    scene.text('As Radomir recovers from the gut punch, the other guy leans against the wall just in front of you, looking at you like you\'re a piece of meat.');
    if (((st as any).pcs_hotcat ?? 0) >= 9) {
      scene.text('He looks at Radomir. "Damn bro, you did good for once. Credit to you for snagging a hottie like this!"');
      scene.text('He turns back to you and leans in close. "Hello. My name\'s Radislav and I\'m this loser\'s, stronger, better looking, bigger… in every way brother. What\'s your name?"');
      scene.text(`Radomir's older brother looks like an older, more masculine jock version of him. "${((st as any).pcs_nickname ?? '')}…" you reply.`);
      scene.text('He smiles. "What are you doing hanging out with a loser like my little bro here? You should be with a real man, like me."');
      scene.text('He oozes confidence, like he\'s never had a girl turn him down.');
      scene.text('Before you can answer, Radomir lunges at him. "Asshole!"');
      scene.text('They\'re soon wrestling in the hall before they end up going back through the doorway Radislav came from.');
    } else {
      if (((st as any).pcs_hotcat ?? 0) >= 7) {
        scene.text('He looks at Radomir. "Not bad, bro. She\'s almost as hot as Nush… almost. Which is pretty good for you. I still don\'t know what Nush saw in your dumb ass."');
        scene.text('He turns back to you and leans in close. "Hello. My name\'s Radislav, this loser\'s, stronger, better looking, bigger… in every way brother. What\'s your name?"');
        scene.text(`Radomir's older brother looks like an older, more masculine jock version of him. "${((st as any).pcs_nickname ?? '')}…" you reply.`);
        scene.text('He smiles. "What are you doing hanging out with a loser like my little bro here? You should be with a real man, like me."');
        scene.text('He oozes confidence, like he\'s never had a girl turn him down.');
        scene.text('Before you can answer, Radomir lunges at him. "Asshole!"');
        scene.text('They\'re soon wrestling in the hall before they end up going back through the doorway Radislav came from.');
      } else {
        if (((st as any).pcs_hotcat ?? 0) === 6) {
          scene.text('He looks at Radomir. "I see you brought home another one of your so-called groupies. You should have thrown this one back and got yourself a good-looking one. Oh wait. I forgot this is the best you can get," he says with a laugh, mocking Radomir.');
          scene.text('He turns back to you and leans in close. "Hello. My name\'s Radislav, this loser\'s, stronger, better looking, bigger… in every way brother. What\'s your name?"');
          scene.text(`Radomir's older brother looks like an older, more masculine jock version of him. "${((st as any).pcs_nickname ?? '')}…" you reply.`);
          scene.text('He smiles. "I guess my little bro is the best you can do, huh?" He says it in such a condescending way, like you\'re completely beneath him.');
          scene.text('Before you can answer, Radomir lunges at him. "Asshole!"');
          scene.text('They\'re soon wrestling in the hall before they end up going back through the doorway Radislav came from.');
        } else {
          scene.text('He looks at Radomir. "Fuck bro, I know you don\'t got my bod or looks, but have some respect for yourself! No need to settle for a cow like this."');
          scene.text('He turns back to you and gives you a look of disgust. "Man, genetics were not kind to you, were they?"');
          scene.text('Before you can reply, Radomir lunges at him. "Asshole!"');
          scene.text('They\'re soon wrestling in the hall before they end up going back through the doorway Radislav came from.');
        }
      }
    }
    scene.actions([
      { label: 'Follow them', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.text('<center><b>Living room</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/brothers_wrestle.jpg');
    scene.text('You follow them into the room, which seems to be the living room. It becomes clear pretty quickly that Radislav is bigger, heavier and more skilled as he seems to be toying with Radomir. A few seconds later, a middle-aged attractive woman enters the room.');
    scene.text('"Now you two stop that right now! I said stop that!" You assume she\'s their mother, but they completely ignore her repeated efforts to make them stop before she gives up and calls down the hall. "Rostislav! Get in here and stop these two before they break something!"');
    scene.text('The boys keep going at it before a middle-aged man enters. He looks a lot like Radislav, or you should say Radislav looks like a younger version of him. It\'s obvious they\'re father and son. He looks over what\'s happening before he turns to the woman and shrugs. "Boys will be boys. They need to establish their alpha dominance. Besides, it\'s good for Rad. Builds character, Anfisa."');
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/anfisa.jpg');
    scene.text('She puts her hands on her slim hips as she looks at Rostislav. "Fine, but if they break something then you\'re buying me a new one."');
    scene.text('He sighs dramatically, then turns towards the boys again. "Enough!"');
    scene.text('Radislav quickly pins Radomir on the floor before he looks up at his dad and you can see an approving smile on his face. "Let your brother up."');
    scene.text('As Radislav gets up, Radomir gives him another shove, while their dad watches and gives a disapproving head shake to Radomir. "You need to bulk up and put some muscles on you."');
    scene.text('Anfisa comes over to start mother henning over Radomir before she turns to look at her husband. "You know he\'s a sensitive boy." She looks at Radomir. "Are you okay, sweetie?"');
    scene.text('Radomir steps away from his mother while his brother laughs. "MOM! I\'m not a sensitive boy! I\'m a grown-ass man!"');
    scene.text('She just smiles. "Of course you are, my sweet boy."');
    scene.text('Radomir rolls his eyes while his brother just laughs even more. Now that you\'ve see them all together, it\'s obvious that Radomir takes after his mother a lot more than his father, while his brother looks just like a younger version of his father.');
    scene.actions([
      { label: 'Watch it play out', handler: (st: GameState) => {
    ((st as any).radomirQW = (st as any).radomirQW ?? {})['first_visit'] = 1;
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/rostislav.jpg');
    scene.text('The father looks at his wife. "Stop mothering him all the time! He needs to learn to establish his dominance." He then looks at the boys. "Now what was this all about?"');
    scene.text('Radislav is the first one to speak up. "I was just introducing myself to Rad\'s new girl and he jumped me. Likely afraid she would dump him once she seen a better man, like all the rest," he says with a smug smile. By the way he said it, it sounds like he\'s stolen a few of Radomir\'s girlfriends in the past.');
    scene.text('The father shakes his head. "What have I told you boys about fighting over girls? Hmm? There are plenty of sluts out there, so no reason to fight over them. You just take the best ones you can get and move on."');
    scene.text('Anfisa shakes her head. "You shouldn\'t tell them stuff like that! You want them to find the right girl and settle down, don\'t you?"');
    scene.text('He just chuckles and walks over to hug his wife. "Of course I do, but you know as well as I do, most of those bitches are not worthy of our boys, so they might as well have fun with them until they find that special girl. Like I did."');
    scene.text('The mother looks a little doubtful, but then smiles as her husband flatters her. "Well… I suppose…"');
    scene.text('He nods. "Now why don\'t you go start dinner while I talk to the boys?"');
    scene.text('She nods and her husband gives her a smack on the ass, which gets a small giggle out of her, but also a slightly disapproving glare. You think the glare is just for show, though.');
    scene.actions([
      { label: 'Keep waiting', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/rostislav.jpg');
    scene.text('Once their mother is gone and out of earshot, he turns to look at the boys. "Now what have I always told you? Fuck all the bitches you can while you can, until one of them eventually gets her hooks into you and you start a family of your own."');
    scene.text('Radislav confidently answers, while Radomir just mutters more than anything before their father finally turns to acknowledge you for the first time. You had started to wonder if he\'d even noticed you were here.');
    if (((st as any).pcs_hotcat ?? 0) >= 9) {
      scene.text('He looks back at Radomir. "Very nice, son. She sure is a looker."');
      scene.text('He turns back to you. "Hello. I\'m Rostislav, these knuckleheads\' father. What\'s your name?"');
      scene.text(`"${((st as any).pcs_nickname ?? '')}," you reply.`);
      scene.text('He smiles. "It\'s a pleasure to meet you. You\'re welcome here any time."');
      scene.text('Is he flirting with you in front of his son? It sure feels like it…');
      scene.text('Before you can answer, Radomir walks over. "Come on, let\'s go."');
      scene.text('He leads you off down to his room, but you can hear his brother and father still talking. You can\'t make it out, but the tone of voice, you guess it\'s about you…');
    } else {
      if (((st as any).pcs_hotcat ?? 0) >= 7) {
        scene.text('He looks back at Radomir. "Not bad, son. Not as good-looking as Nush is, but not bad." Then he pauses. "How come Nush almost never comes over any more?"');
        scene.text('Radomir sighs. "I told you. We broke up."');
        scene.text('His father just looks at him, as if he was waiting for him to say more. "So? You don\'t need to date a girl to get a little pussy off her."');
        scene.text('Radislav laughs. "Yeah, dumbass. I think I might smash that too."');
        scene.text('Radomir glares at his brother. "Stay the fuck away from Nush!"');
        scene.text('Their father speaks up. "Enough! What did I just say about fighting over girls? If your brother wants to tap that ass and Nush is up for it, that\'s between them, got it?"');
        scene.text('Radomir doesn\'t answer, but you can tell he\'s very annoyed with his father and brother right now.');
        scene.text('His father turns back to you. "Hello. I\'m Rostislav, these knuckleheads\' father. What\'s your name?"');
        scene.text(`"${((st as any).pcs_nickname ?? '')}," you reply.`);
        scene.text('He smiles. "It\'s nice to meet you. You\'re welcome here any time."');
        scene.text('Is he flirting with you in front of his son? It sure feels like it…');
        scene.text('Before you can answer, Radomir walks over. "Come on, let\'s go."');
        scene.text('He leads you off down to his room, but you can hear his brother and father still talking. You can\'t make it out, but by the tone of voice, you guess it\'s about you…');
      } else {
        if (((st as any).pcs_hotcat ?? 0) === 6) {
          scene.text('He looks back at Radomir. "You could do worse I suppose. She isn\'t much of a looker, but she\'s cute enough. A warm wet hole is a warm wet hole after all."');
          scene.text('He turns back to you. "Hello. I\'m Rostislav, these knuckleheads\' father. What\'s your name?"');
          scene.text(`"${((st as any).pcs_nickname ?? '')}," you reply.`);
          scene.text('He smiles. "It\'s nice to meet you. You\'re welcome here any time."');
          scene.text('Is he flirting with you in front of his son? It sure feels like it…');
          scene.text('Before you can answer, Radomir walks over. "Come on, let\'s go."');
          scene.text('He leads you off down to his room, but you can hear his brother and father still talking. You can\'t make it out, but by the tone of voice, you guess it\'s about you…');
        } else {
          scene.text('He looks back at Radomir. "I hope she\'s here to help you with your homework. God knows you could have better grades, but I sure hope your standards haven\'t fallen this low."');
          scene.text('Radomir speaks up with a slight growl to his voice. "No, my standards have not dropped this low! She\'s here to help me study."');
          scene.text('Radislav laughs. "Likely the best he can do since no one else would want her."');
          scene.text('The dad shakes his head. "Don\'t tease your brother like that. He might not be up to your standards since he takes after his mother, but he\'s better than this and we should encourage it."');
          scene.text('Radislav nods, as if agreeing with his father or at least submitting to his words as Radomir walks over.');
          scene.text('He leads you off down to his room, but you can hear his brother and father still talking. You can\'t make it out, but by the tone of voice, you would guess it was about you, and not in a good way…');
        }
      }
    }
    scene.actions([
      { label: 'Go to Radomir\'s room', goto: ['radapt', 'radroom'] },
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

function enterMeetAfterSchool(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big154.jpg');
  scene.text('You find Radomir waiting for you outside the school.');
  scene.text('"You ready?" he asks, and you nod your head before the two of you walk back to the apartment complex.');
  scene.actions([
    { label: 'Continue', goto: ['radapt', 'firstvisit'] },
  ]);
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
    case 'bathroom':
      enterBathroom(s, scene);
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
    case 'radparents':
      enterRadparents(s, scene);
      break;
    case 'brotherroom':
      enterBrotherroom(s, scene);
      break;
    case 'radroom':
      enterRadroom(s, scene);
      break;
    case 'computer':
      enterComputer(s, scene);
      break;
    case 'guitar':
      enterGuitar(s, scene);
      break;
    case 'bed':
      enterBed(s, scene);
      break;
    case 'firstvisit':
      enterFirstvisit(s, scene);
      break;
    case 'meet_after_school':
      enterMeetAfterSchool(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const radapt: LocationDef = {
  name: 'radapt',
  title: 'Entrance hall',
  region: 'other',
  locationType: 'public_indoors',
  locclass: 'bedr',
  enter: enter,
};
