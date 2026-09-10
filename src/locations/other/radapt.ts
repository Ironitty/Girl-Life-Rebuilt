import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'core_library', 'setloc', 'radapt', 'home');
  (s as any).popolaini = 0;
  (s as any).saunaYouRoom = 0;
  (s as any).boycherdaksex = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'radomir_popov_schedule', '');
  if (((s as any).radomirQW ?? 0)?.['home_day'] !== ((s as any).daystart ?? 0)) {
    (s as any).radomirQW['home_day'] = ((s as any).daystart ?? 0);
  }
  scene.img('images/locations/pavlovsk/resident/apartment/aptdoor.jpg');
  scene.text('You walk up to the front door and knock.');
  if (((s as any).hour ?? 0) >= 22) {
    scene.text('It\'s too late in the day to visit Radomir.');
    scene.actions([
      { label: 'Move away from the door', goto: ['pav_complex', 'start'] },
    ]);
  } else {
    scene.text('It\'s too early in the day to visit Radomir.');
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
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/resident/apartment/radapt/anfisa.jpg');
      scene.text('You stand outside the Popov household knocking on the door. It\'s some time before someone answers it. In the end, it turns out to be Anfisa, who gives you a friendly smile. "Yes, dear?"');
      scene.text('You return her smile. "Is Radomir home?"');
      scene.text('She shakes her head. "He moved to the city with his friends. I think they have an apartment near the university."');
      scene.text('You nod. "Oh… Okay. Do you have their address?"');
      scene.text('She smiles at you. "Of course I do."');
      scene.text('She tells you where they live and you thank her before leaving.');
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
        scene.img('images/locations/pavlovsk/resident/apartment/radapt/anfisa.jpg');
        scene.text('She gives you a friendly smile. "Yes, dear?"');
        scene.text('You return her smile. "Is Radomir home?"');
        scene.text('She shakes her head. "Radomir\'s not here right now. He\'s at school. Shouldn\'t you be at school too dear?"');
        scene.text('You make an excuse for not being at school before you turn and leave');
        if (((s as any).locat ?? 0)?.['A154'] === 24) {
          (s as any).gopnikbandQW['practice_invite'] = 1;
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
          scene.img('images/locations/pavlovsk/resident/apartment/radapt/anfisa.jpg');
          scene.text('Anfisa answers the door instead. She gives you a friendly smile. "Yes, dear?"');
          scene.text('You return her smile. "Is Radomir home?"');
          scene.text('She shakes her head. "Radomir\'s not here right now. He\'s at the disco with his little friends."');
          scene.text('You thank her before you turn and leave');
          if (((s as any).locat ?? 0)?.['A154'] === 20) {
            qspCall(s, 'stat', '');
            (s as any).raddoor = Math.floor(Math.random() * 24) + 1;
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
    qspCall(s, 'npc_relationship', 'modify', 'A144', 'dislike');
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('You thank her and enter the apartment. She closes the door and heads off to the kitchen while you head down the hallway to Radomir\'s room.');
    scene.text('Just as you arrive, the door opens and Anushka walks out of his room. By the state of her clothes, her messed up hair and her smeared makeup, it\'s not hard to guess what happened.');
    if (((s as any).npc_rel ?? 0)?.['A154'] >= 60) {
      (s as any).radomirQW['nush_visit'] = 2;
      qspCall(s, 'npc_relationship', 'modify', 'A144', 'hate');
      scene.text('She pauses when she sees you, her eyes narrowing slightly before she picks up her pace and brushes past you, slightly bumping her shoulder into you as she does.');
      scene.text('Radomir steps out before you can say anything and call out to Anushka. "Later, babe!"');
      scene.text('The only response he gets is her flipping him off without looking back.');
      scene.text('He just chuckles at that before turning to you and shrugging. "Fuck, that bitch is high strung sometimes."');
    } else {
      scene.text('She pauses when she sees you before giving you a look of disgust and brushing past you, slightly bumping into her shoulder into you as she does.');
      scene.text('Radomir steps out before you can say anything and calls out to Anushka. "Later, babe!"');
      scene.text('She just ignores him and he shrugs when she doesn\'t reply.');
      scene.text('She pauses when she sees you and shakes her head. "Guess you\'re not that smart then."');
      scene.text('A moment later, Radomir steps out and smiles when he sees you. "What are you girls talking about?"');
      scene.text('Anushka gives him an annoyed look. "None of your business!"');
      scene.text('Radomir grabs his chest as if he was just stabbed in the heart. "Oh, you wound me! Don\'t be jealous, babe." He then slaps Anushka on the ass. "Best ass in Pavlovsk right there."');
      scene.text('She just gives him another annoyed look before she walks past you towards the exit.');
      scene.text('"Later, babe!" he says to her as she leaves. When you glance back at him, he\'s looking all smug.');
      scene.text('He turns and heads back into his room, waving for you to follow. "Come on in."');
    }
    scene.actions([
      { label: 'Follow him to his room', goto: ['radapt', 'radroom'] },
    ]);
  } },
                ]);
              } else {
                scene.actions([
                  { label: 'Enter', handler: (st: GameState) => {
    (s as any).radomirQW['nush_visit'] = 1;
    qspCall(s, 'npc_relationship', 'modify', 'A144', 'dislike');
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('You thank her and enter the apartment. She closes the door and heads off to the kitchen while you head down the hallway to Radomir\'s room.');
    scene.text('Just as you arrive, the door opens and Anushka walks out of his room. By the state of her clothes, her messed up hair and her smeared makeup, it\'s not hard to guess what happened.');
    if (((s as any).npc_rel ?? 0)?.['A154'] >= 60) {
      (s as any).radomirQW['nush_visit'] = 2;
      qspCall(s, 'npc_relationship', 'modify', 'A144', 'hate');
      // TODO-QSP: dynamic text: She pauses when she sees you and looks surprised to see you. "What are you doing...
      scene.text(`She pauses when she sees you and looks surprised to see you. "What are you doing here, ${((s as any).pcs_nickname ?? 0)}?"`);
      scene.text('You know the thing between Rad and her is complicated, but there\'s not much you can do, since she caught you heading to his bedroom. "I just came to see Rad."');
      scene.text('Before she can say anything, Radomir steps out and smiles when he sees you. "What are you girls talking about?"');
      // TODO-QSP: dynamic text: Anushka gives him a sour look. "I was just asking <<$pcs_nickname>> why she was ...
      scene.text(`Anushka gives him a sour look. "I was just asking ${((s as any).pcs_nickname ?? 0)} why she was here."`);
      scene.text('Radomir grins and looks really smug. "Don\'t be jealous, babe. This is why we broke up."');
      scene.text('Anushka\'s eyes flash in anger. "We broke up because you\'re a fucking asshole!"');
      scene.text('Radomir says calmly looking as innocent as someone can look. "Babe, calm down!" he says calmly before he slaps her on the ass. "Best ass in Pavlovsk right there."');
      scene.text('Anushka turns and shoves him hard enough to make him stumble. "Fuck you, Rad!"');
      scene.text('She then turns to you, looking more pissed than you\'ve seen her before. "And fuck you too!" she snarls before she storms out of the apartment');
    } else {
      scene.text('She pauses when she sees you before she gives you a dirty look. You know she doesn\'t like you, but there seems to be a bit more extra venom in that look today.');
      scene.text('A moment later, Radomir steps out and smiles when he sees you before he slaps Anushka on the ass. "Best ass in Pavlovsk right there!"');
      scene.text('Anushka just gives him an annoyed look before she walks past you towards the exit. "Later, babe!" he says to her as she leaves. When you glance back at him, he\'s looking all smug.');
      scene.text('She pauses when she sees you. "If you\'re smart, you\'ll turn around, walk out of here and never come back, Rad\'s not the charming guy he pretends to be."');
      scene.text('A moment later, Radomir steps out and smiles when he sees you. "What are you girls talking about?"');
      scene.text('Anushka smirks at him. "I was telling her you\'re not the nice charming guy you pretend to be, but a womanizing asshole."');
      scene.text('Radomir grabs his chest as if he was just stabbed in the heart. "Oh, you wound me! Don\'t be jealous, babe." He then slaps Anushka on the ass. "Best ass in Pavlovsk right there."');
      scene.text('She just gives him an annoyed look and walks past you towards the exit. "Later, babe!" he says to her as she leaves. When you glance back at him, he\'s looking all smug.');
      scene.text('He turns and heads back into his room, waving for you to follow. "Come on in."');
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
              scene.text('She nods and stands aside to let you enter.');
              scene.text('"Yes, he\'s in his room with one of his little friends."');
              scene.actions([
                { label: 'Leave', goto: ['pav_complex', 'start'] },
                { label: 'Enter', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big20.jpg');
    if (((s as any).grupTipe ?? 0) === 1) {
      scene.text('You thank her and enter the apartment. She closes the door and heads off to the kitchen while you head down the hallway to Radomir\'s room.');
      scene.text('Just as you arrive, the door opens and Lena walks out of his room. By the state of her clothes, her messed up hair and her smeared makeup, it\'s not hard to guess what happened.');
      scene.text('She pauses when she sees you. "Look at the princess coming to slum it. Those cool boys just don\'t know how to fuck your ass, right?" she smirks while patting you on the cheek in a mocking way.');
      scene.text('A moment later, Radomir steps out and smiles when he sees you. He then slaps Lena on the ass, which makes her giggle. "See you later, doll."');
      scene.text('Lena smiles at him all coy before she walks past you and out of the apartment. When you glance back at Rad, he\'s looking all smug.');
      scene.text('He turns and heads back into his room, waving for you to follow. "Come on in."');
    } else {
      scene.text('You thank her and enter the apartment. She closes the door and heads off to the kitchen while you head down the hallway to Radomir\'s room.');
      scene.text('Just as you arrive, the door opens and Lena walks out of his room. By the state of her clothes, her messed up hair and her smeared makeup, it\'s not hard to guess what happened.');
      scene.text('She pauses when she sees you. "Look at the jockette coming to slum it. Those jock boys just don\'t know how to fuck your ass, right?" she smirks while patting you on the cheek in a mocking way.');
      scene.text('A moment later, Radomir steps out and smiles when he sees you. He then slaps Lena on the ass, which makes her giggle. "See you later, doll."');
      scene.text('Lena smiles at him all coy before she walks past you and out of the apartment. When you glance back at Rad, he\'s looking all smug.');
      scene.text('He turns and heads back into his room, waving for you to follow. "Come on in."');
      if (((s as any).grupTipe ?? 0) === 3) {
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
      scene.actions([
        { label: 'Follow him to his room', goto: ['radapt', 'radroom'] },
      ]);
    }
    if (((s as any).raddoor ?? 0) <= 5) {
      scene.text('She nods and stands aside to let you enter.');
      scene.text('"Yes, he\'s in his room with one of his little friends."');
      scene.actions([
        { label: 'Leave', goto: ['pav_complex', 'start'] },
        { label: 'Enter', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/rads_girls/rgirl\' + rand(1, 4) + \'.jpg');
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
      scene.text('She nods and stands aside to let you enter.');
      scene.text('"Yes, he\'s in his room with one of his little friends."');
      scene.text('She nods and stands aside to let you enter.');
      scene.text('"Yes, he\'s in his room."');
      scene.actions([
        { label: 'Leave', goto: ['pav_complex', 'start'] },
        { label: 'Enter', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/rads_girls/girl\' + rand(1, 4) + \'.jpg');
    scene.text('You thank her and enter the apartment. She closes the door and heads off to the kitchen while you head down the hallway to Radomir\'s room.');
    scene.text('Just as you arrive, the door opens and a girl you\'ve never seen before walks out of his room. She pauses when she sees you and blushes. By the state of her clothes, her messed up hair and her smeared makeup, it\'s not hard to guess what happened.');
    scene.text('A moment later, Radomir steps out and smiles when he sees you. He then slaps the girl on the ass, which makes her giggle. "See you later, doll."');
    scene.text('She smiles back at him all coy before she walks past you and out of the apartment. When you glance back at Rad, he\'s looking all smug.');
    scene.text('He turns and heads back into his room, waving for you to follow. "Come on in."');
    scene.actions([
      { label: 'Follow him to his room', goto: ['radapt', 'radroom'] },
    ]);
  } },
        { label: 'Leave', goto: ['pav_complex', 'start'] },
        { label: 'Enter', goto: ['radapt', 'hallway'] },
      ]);
    }
    scene.text('You knock on the door several times, but no one answers. You assume that there probably isn\'t anyone home at the moment.');
    scene.actions([
      { label: 'Move away from the door', goto: ['pav_complex', 'start'] },
    ]);
  } },
              ]);
            }
          }
          scene.actions([
            { label: 'Leave', goto: ['pav_complex', 'start'] },
          ]);
        }
        scene.actions([
          { label: 'Leave', goto: ['pav_complex', 'start'] },
        ]);
      }
      scene.actions([
        { label: 'Move away from the door', goto: ['pav_complex', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Move away from the door', goto: ['pav_complex', 'start'] },
    ]);
  }
  scene.build();
}

export const radapt: LocationDef = {
  name: 'radapt',
  title: 'Entrance hall',
  region: 'other',
  locationType: 'public_indoors',
  locclass: 'bedr',
  description: ['You walk up to the front door and knock.'],
  enter: enter,
};
