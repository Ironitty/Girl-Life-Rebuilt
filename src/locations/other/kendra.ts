import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterKendraRoomStart(s: GameState, scene: SceneBuilder): void {
  (s as any).reccoldorm = 0;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/dorm/kendraroom/room.jpg');
  scene.text('There are two beds, one on each side of the window, along with various pictures and posters hanging on both sides of the room. A string of large lights hang from one of the walls and just down from the beds on each side are two desks, both decorated with slight differences. A small couch and two wardrobes are near the door.');
  scene.text('As you walk in the room, she follows behind you. "What should I do with you today, slave?" You know it\'s a rhetorical question and she really doesn\'t want you to answer. As you turn to look at her, you can tell she has something in mind that will likely either humiliate you or turn you into her submissive pet. "Maybe I\'ll have you do my nails, or maybe lick my ass? Perhaps I\'ll fuck you, or find someone to fuck you. So many choices…"');
  scene.actions([
    { label: 'I should get going', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A84', 'loathe');
    ((s as any).kendraQW ?? {})['sub'] = (((s as any).kendraQW ?? {})['sub'] ?? 0) - (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big84.jpg');
    scene.text('You look over at the clock. "I should really get going. Sorry to have bothered you."');
    scene.text('She looks at you with a very annoyed glare. "What is this? I don\'t have time for games. Don\'t come back unless you\'re serious about playing!" She grabs you by the arm and shoves you out the door, closing it behind you.');
    scene.actions([
      { label: 'Go to the eighth floor', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
    { label: 'Submit to your mistress', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A84', 'like');
    ((s as any).kendraQW ?? {})['sub'] = (((s as any).kendraQW ?? {})['sub'] ?? 0) + (1);
    qspCall(s, 'stat', '');
  }, goto: ['kendra', 'kendra_room_routing'] },
  ]);
  scene.build();
}

function enterKendraRoomRouting(s: GameState, scene: SceneBuilder): void {
  if (((s as any).kendraQW ?? 0)?.['dom'] < 11) {
    // TODO-QSP: gt 'kendra', 'kendra_room_'+kendraQW['dom']
  } else {
    if (((s as any).kendraQW ?? 0)?.['dom'] === 12) {
      scene.actions([{ label: 'Continue', goto: ['kendra', 'kendra_couch'] }]);
    } else {
      if (((s as any).kendraQW ?? 0)?.['dom'] === 13) {
        scene.actions([{ label: 'Continue', goto: ['kendra', 'kendra_bed'] }]);
      } else {
        if (((s as any).kendraQW ?? 0)?.['dom'] === 14) {
          scene.actions([{ label: 'Continue', goto: ['kendra', 'kendra_couch_strap'] }]);
        } else {
          if (((s as any).kendraQW ?? 0)?.['dom'] === 15) {
            scene.actions([{ label: 'Continue', goto: ['kendra', 'kendra_bed_strap'] }]);
          } else {
            if (((s as any).kendraQW ?? 0)?.['dom'] === 16) {
              scene.actions([{ label: 'Continue', goto: ['kendra', 'kendra_gloryhole'] }]);
            } else {
              if (((s as any).kendraQW ?? 0)?.['dom'] === 17) {
                scene.actions([{ label: 'Continue', goto: ['kendra', 'kendra_gloryhole'] }]);
              } else {
                ((s as any).kendraQW ?? {})['dom'] = Math.floor(Math.random() * 18) + 0;
                scene.actions([{ label: 'Continue', goto: ['kendra', 'kendra_room_routing'] }]);
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterKendraRoom_0(s: GameState, scene: SceneBuilder): void {
  ((s as any).kendraQW ?? {})['dom'] = (((s as any).kendraQW ?? {})['dom'] ?? 0) + (1);
  (s as any).minut = ((s as any).minut ?? 0) + 45;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/university/girl/kendra/femdom/femdom1.jpg');
  scene.text('She sits on her bed and kicks off her shoes. "Come here and paint my toenails, slave." You walk over and sit on the bed as she hands you some polish. You start applying some, only to have her smack you. "No, not good enough! Start over!" You grab the polish remover and clean her nails before repeating the process several times until she\'s happy.');
  scene.actions([
    { label: 'Finish her toenails', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/girl/kendra/femdom/femdom1a.jpg');
    scene.text('She looks down as you\'re finishing up. "I suppose that\'s good enough. Now hurry up and finish, I\'ve got things to do."');
    scene.text('"Yes, mistress." You don\'t rush and make sure you do a good job finishing her toenails, blowing on them until they dry.');
    scene.text('Once you\'ve finally finished, she pushes you off the bed. "Now go!"');
    scene.text('"Yes, mistress." You stand and walk over to the door before leaving.');
    scene.actions([
      { label: 'Go to the eighth floor', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterKendraRoom_1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A84');
  ((s as any).kendraQW ?? {})['dom'] = (((s as any).kendraQW ?? {})['dom'] ?? 0) + (1);
  scene.img('images/characters/city/university/girl/kendra/femdom/femdom2_\' + rand(1, 2) + \'.jpg');
  scene.text('She walks over and sits on the couch. "Come here and clean my boots, slave." You walk over and kneel next to the couch before grabbing some tissue to clean her boots, but she stops you. "No! Use your tongue."');
  scene.text('You nod. "Yes, mistress." You start licking her boots clean as she smacks you on the head and points out any spots you\'ve missed.');
  scene.text('Once you\'ve finally finished cleaning her boots, she looks them over before pointing to the door. "Good girl. Now leave, slave."');
  scene.text('"Yes, mistress." You stand and walk over to the door before leaving.');
  qspCall(s, 'arousal', 'foreplay', 30, 'sub', 'humiliation', 'feet');
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Go to the eighth floor', goto: ['uni_dorm', 'eighth_floor'] },
  ]);
  scene.build();
}

function enterKendraRoom_2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A84');
  ((s as any).kendraQW ?? {})['dom'] = (((s as any).kendraQW ?? {})['dom'] ?? 0) + (1);
  scene.img('images/characters/city/university/girl/kendra/femdom/femdom3.jpg');
  scene.text('She grabs a bowl of water before she sits on the couch. "Come here and clean my feet, slave." You walk over and kneel next to the couch, adding soap to the water before using the cloth to clean her feet.');
  scene.text('She mostly ignores you and reads a magazine. Once you\'ve finished, she looks them over. "Kiss them."');
  scene.text('You do as she says and kiss her feet before she points to the door. "Now go slave."');
  scene.text('"Yes, mistress." You stand and walk over to the door before leaving.');
  qspCall(s, 'arousal', 'foreplay', 30, 'sub', 'humiliation', 'feet');
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Go to the eighth floor', goto: ['uni_dorm', 'eighth_floor'] },
  ]);
  scene.build();
}

function enterKendraRoom_3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A84');
  ((s as any).kendraQW ?? {})['dom'] = (((s as any).kendraQW ?? {})['dom'] ?? 0) + (1);
  scene.img('images/characters/city/university/girl/kendra/femdom/femdom4.jpg');
  scene.text('She walks over and sits on the couch. "Come here and clean my feet, slave." You go to grab the bowl of water when she snaps her fingers. "No! Use your tongue."');
  scene.text('You nod. "Yes, mistress." You walk over and kneel next to the couch before removing her boots and licking her feet. You then start sucking on her toes while continuing to lick her feet and legs.');
  scene.text('Once you\'ve licked every inch of her feet and lower legs, she points to the door. "Now go, slave."');
  scene.text('"Yes, mistress." You stand and walk over to the door before leaving.');
  qspCall(s, 'arousal', 'foreplay', 30, 'sub', 'humiliation', 'feet');
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Go to the eighth floor', goto: ['uni_dorm', 'eighth_floor'] },
  ]);
  scene.build();
}

function enterKendraRoom_4(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A84');
  ((s as any).kendraQW ?? {})['dom'] = (((s as any).kendraQW ?? {})['dom'] ?? 0) + (1);
  scene.img('images/characters/city/university/girl/kendra/femdom/femdom5.jpg');
  scene.text('Once inside, she leads you over to her bed where she opens the night stand and pulls out a collar which she promptly and tightly buckles around your neck, making it a little hard for you to breathe. With the collar firmly in place, she pulls out a leash and attaches it to the collar before pushing you down. "Get on all fours like a good slave."');
  scene.text('You get down on your hands and knees and she leads you around the room for a few minutes before she takes you out into the hall. She leads you down to the communal kitchen area and then into the lounge, where she gets some snacks and drinks for herself. Several people notice the two of you; some laugh, some ignore it and others give you or sometimes both of you disgusted looks.');
  scene.text('When you finally make it back to her room, she sits on the couch to watch TV while you stay on your hands and knees next to the couch waiting for her. After a few minutes, she finally points to the door. "You can go slave, but put your collar and leash away first."');
  scene.text('"Yes, mistress." You stand up and take off the collar and leash before walking over and putting them back in the drawer where they belong. You then walk over to the door and leave.');
  qspCall(s, 'arousal', 'foreplay', 30, 'sub', 'humiliation');
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Go to the eighth floor', goto: ['uni_dorm', 'eighth_floor'] },
  ]);
  scene.build();
}

function enterKendraRoom_5(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A84');
  ((s as any).kendraQW ?? {})['dom'] = (((s as any).kendraQW ?? {})['dom'] ?? 0) + (1);
  scene.img('images/characters/city/university/girl/kendra/femdom/femdom6.jpg');
  scene.text('She walks over and pulls her chair away from her desk before sitting on it. "Come over here slave." You walk over and stand next to her before she suddenly grabs you and pulls you across her lap. Before you even know what\'s happening, she starts spanking you.');
  scene.text('"You\'re such a worthless slave!" she says as she keeps spanking you.');
  scene.text('You grit your teeth against the pain. "I\'m sorry, mistress!" You don\'t even know what you did to upset her and you don\'t dare ask.');
  scene.text('She starts pulling your clothes off until your ass is exposed, then she starts spanking you even harder. After some time, it really starts to sting.');
  scene.text('She finally stops and pushes you off her lap onto the floor. She then stands up and points sternly at the door. "Now go slave."');
  scene.text('"Yes, mistress." You quickly stand up and get dressed before walking over to the door and leaving.');
  qspCall(s, 'arousal', 'foreplay', 30, 'sub', 'humiliation');
  qspCall(s, 'pain', '', 3, 'asscheeks', 'spank');
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Go to the eighth floor', goto: ['uni_dorm', 'eighth_floor'] },
  ]);
  scene.build();
}

function enterKendraRoom_6(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A84');
  ((s as any).kendraQW ?? {})['dom'] = (((s as any).kendraQW ?? {})['dom'] ?? 0) + (1);
  scene.img('images/characters/city/university/girl/kendra/femdom/femdom7.jpg');
  scene.text('She walks over and pulls her chair away from her desk before she grabs a paddle that was sitting on her desk before sitting on the chair. "Come over here slave." You walk over and lay yourself across her lap. You already know what she plans to do.');
  scene.text('"You\'re such a worthless slave!" she says as she starts paddling your ass.');
  scene.text('You grit your teeth against the pain. "I\'m sorry, mistress!" You don\'t even know what you did to upset her and you don\'t dare ask.');
  scene.text('She starts pulling your clothes off until your ass is exposed, then she starts spanking you even harder. After some time, it really starts to sting.');
  scene.text('She finally stops and pushes you off her lap onto the floor. She then stands up and points sternly at the door. "Now go slave."');
  scene.text('"Yes, mistress." You quickly stand up and get dressed before walking over to the door and leaving.');
  qspCall(s, 'arousal', 'foreplay', 30, 'sub', 'humiliation');
  qspCall(s, 'pain', '', 4, 'asscheeks', 'spank');
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Go to the eighth floor', goto: ['uni_dorm', 'eighth_floor'] },
  ]);
  scene.build();
}

function enterKendraRoom_7(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A84');
  ((s as any).kendraQW ?? {})['dom'] = (((s as any).kendraQW ?? {})['dom'] ?? 0) + (1);
  scene.img('images/characters/city/university/girl/kendra/femdom/femdom8.jpg');
  scene.text('She walks over and sits on the couch. "Come here." You walk over to her. "Strip!" she commands.');
  scene.text('"Yes, mistress." You nod and start removing your clothes.');
  scene.text('Once you\'re naked, she points at the floor in front of her. "Get on your hands and knees."');
  scene.text('You do as she commands and once you\'re in place, she puts her feet up on your back before she leans back and starts texting on her phone. She occasionally laughs or makes comments about whoever she\'s texting, but she never speaks to you.');
  scene.text('Once an hour or so has passed, she removes her feet from your back and points to the door. "Now go slave."');
  scene.text('"Yes, mistress." You stand and get dressed before walking over to the door and leaving.');
  qspCall(s, 'arousal', 'foreplay', 60, 'sub', 'humiliation', 'inhibition');
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Go to the eighth floor', goto: ['uni_dorm', 'eighth_floor'] },
  ]);
  scene.build();
}

function enterKendraRoom_8(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A84');
  ((s as any).kendraQW ?? {})['dom'] = (((s as any).kendraQW ?? {})['dom'] ?? 0) + (1);
  scene.img('images/characters/city/university/girl/kendra/femdom/femdom9.jpg');
  scene.text('She walks over and sits on the couch. "Come here and strip." You walk over and strip naked while standing next to her. Once you\'re fully naked, she smiles. "Now lick my shoes clean."');
  scene.text('"Yes, mistress." You kneel down and start licking her shoes and feet clean as she smacks you on the head and points out any spots you\'ve missed.');
  scene.text('Once you\'ve finished cleaning her shoes and feet, she looks them over before pointing at the door. "Now go slave."');
  scene.text('"Yes, mistress." You stand up and walk over to the door before leaving.');
  qspCall(s, 'arousal', 'foreplay', 30, 'sub', 'humiliation', 'feet', 'inhibition');
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Go to the eighth floor', goto: ['uni_dorm', 'eighth_floor'] },
  ]);
  scene.build();
}

function enterKendraRoom_9(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A84');
  ((s as any).kendraQW ?? {})['dom'] = (((s as any).kendraQW ?? {})['dom'] ?? 0) + (1);
  scene.img('images/characters/city/university/girl/kendra/femdom/femdom10.jpg');
  scene.text('Once inside, she leads you over to her bed and commands you to strip.');
  scene.text('"Yes, mistress." You start stripping as she opens the night stand and pulls out a collar that she tightly buckles it around your neck, making it a little hard for you to breathe. With the collar firmly in place, she pulls out a leash and attaches it to the collar before pushing you down. "Get down on all fours like a good slave."');
  scene.text('You get down on your hands and knees and she leads you around the room for a few minutes before she grabs a bowl and fills it with water. She places it down in front of you as she sits on the couch and starts texting on her phone. "Drink!" You start lapping up the water as best you can before sitting quietly until she notices you.');
  scene.text('After a while, she finally points to the door. "You can go now slave, but put your collar and leash away first."');
  scene.text('"Yes, mistress." You stand up and take off the collar and leash before walking over and putting them back in the drawer where they belong. You then walk over to the door and leave.');
  qspCall(s, 'arousal', 'foreplay', 30, 'sub', 'humiliation', 'inhibition');
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Go to the eighth floor', goto: ['uni_dorm', 'eighth_floor'] },
  ]);
  scene.build();
}

function enterKendraRoom_10(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A84');
  ((s as any).kendraQW ?? {})['dom'] = (((s as any).kendraQW ?? {})['dom'] ?? 0) + (1);
  scene.img('images/characters/city/university/girl/kendra/femdom/femdom11.jpg');
  scene.text('She walks over and sits on the couch. "Come here slave." You walk over and stand next to her. "Now strip!"');
  scene.text('"Yes, mistress." Once you\'re naked, she pulls you over her lap and starts spanking your bare ass with her hand.');
  scene.text('"You\'re such a worthless slave!" she says as she keeps spanking you.');
  scene.text('You grit your teeth against the pain. "I\'m sorry, mistress!" You don\'t even know what you did to upset her and you don\'t dare ask.');
  scene.text('It\'s really starting to sting when she finally pushes you off her lap onto the floor. She then stands up and points sternly at the door. "Now go slave."');
  scene.text('"Yes, mistress." You stand up and get dressed before walking over to the door and leaving.');
  qspCall(s, 'arousal', 'foreplay', 30, 'sub', 'humiliation', 'inhibition');
  qspCall(s, 'pain', '', 3, 'asscheeks', 'spank');
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Go to the eighth floor', goto: ['uni_dorm', 'eighth_floor'] },
  ]);
  scene.build();
}

function enterKendraRoom_11(s: GameState, scene: SceneBuilder): void {
  ((s as any).kendraQW ?? {})['dom'] = (((s as any).kendraQW ?? {})['dom'] ?? 0) + (1);
  qspCall(s, 'npcStat', 'A84');
  scene.img('images/characters/city/university/girl/kendra/femdom/femdom12.jpg');
  scene.text('As you enter, you notice another African girl sitting on the couch as well. You assume she\'s another student or just a friend of Kendra\'s. Kendra walks over and sits on the table. "Come here, slave." You walk over and stand next to her. "Now strip!"');
  scene.text('You glance at the other girl as you strip. "Yes, mistress."');
  scene.text('The other girl laughs. "I can\'t believe you get these white bitches to do this shit!"');
  scene.text('Once you\'re naked, she pulls you over her lap and starts spanking your bare ass with a paddle. "I just train them to accept their natural place. Deep down, they all know where they belong and they crave for us to put them there." She turns her face to you. "Don\'t you, slave?"');
  qspCall(s, 'arousal', 'foreplay', 10, 'sub', 'humiliation', 'inhibition', 'group');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Yes mistress', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/femdom/femdom7.jpg');
    scene.text('You nod. "Yes mistress, I do." They both laugh at your response.');
    scene.text('She paddles you even harder and you grit your teeth against the pain. "You should have seen what I did to that boy from biology."');
    scene.text('"Which one?" her friend asks.');
    scene.text('"You know the one that was so confident and always hitting on us, expecting us to just fall to our knees and suck his dick the first day in class?" she replies.');
    scene.text('"Oh… Him. Yeah, I remember him. What did you do to him?"');
    scene.text('Kendra laughs as she keeps paddling you. They almost seem to have forgotten that you\'re here. "I fucked him with a strapon until I had an orgasm."');
    scene.text('"OH MY GOD! You did not!" her friend says in shock.');
    qspCall(s, 'arousal', 'foreplay', 10, 'sub', 'humiliation', 'inhibition', 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Listen', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/femdom/femdom12.jpg');
    scene.text('"Oh yes I did. Look." She stops paddling you to pull out her phone. You can\'t see what\'s on it, but you can hear some grunting as they both start laughing.');
    scene.text('"I can\'t believe you got him to do that. Call me next time you do that. I want to fuck him as well." They soon start talking about things they would like to do to this mysterious guy while Kendra continues paddling you. After some time, it really starts to sting and she seems to be getting tired.');
    scene.text('She pushes you off her lap onto the floor and points sternly at the door. "Now go slave."');
    scene.text('"Yes, mistress." You quickly stand up and get dressed. As you walk to the door, the two of them continue talking about the guy.');
    qspCall(s, 'arousal', 'foreplay', 10, 'sub', 'humiliation', 'inhibition', 'group');
    qspCall(s, 'pain', '', 5, 'asscheeks', 'spank');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go to the eighth floor', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterKendraCouch(s: GameState, scene: SceneBuilder): void {
  ((s as any).kendraQW ?? {})['dom'] = (((s as any).kendraQW ?? {})['dom'] ?? 0) + (1);
  qspCall(s, 'npcStat', 'A84');
  scene.img('images/characters/city/university/girl/kendra/sex/lezdom/couch/lezdom1.jpg');
  scene.text('She walks over and sits on the couch. "Come here, slave." You walk over and stand next to her. "Now sit!"');
  scene.text('She sits up on the couch and turns to face you. You know she wants you to do the same, so you do. As you do, she starts to kiss you softly and you return the kiss. She then takes your hands and pulls them over to her breasts, so you start playing with them as the two of you kiss.');
  scene.text('Without warning, she then suddenly pulls away and breaks the kiss. "Get on all fours."');
  qspCall(s, 'arousal', 'kiss', 3, 'lesbian', 'sub');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Get on all fours', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/lezdom/couch/lezdom2.jpg');
    scene.text('You do as you\'re told and get on your hands and knees as she kneels down next to you and starts spanking you. Each open handed smack causes your ass cheeks to sting.');
    qspCall(s, 'arousal', 'foreplay', 3, 'lesbian', 'sub');
    qspCall(s, 'pain', '', 2, 'asscheeks', 'spank');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get spanked more', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/lezdom/couch/lezdom3.jpg');
    scene.text('After several minutes of this, she stops and takes off her clothes before pulling your clothes aside to expose your ass and going back to spanking your now bare ass cheeks.');
    qspCall(s, 'arousal', 'foreplay', 3, 'lesbian', 'sub');
    qspCall(s, 'pain', '', 2, 'asscheeks', 'spank');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Eat pussy', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/lezdom/couch/lezdom4.jpg');
    scene.text('Once your ass is red and stinging, she stops and leans back on the couch, spreading her legs wide and exposing her pussy to you. "Come here and lick my pussy, slave!" she commands, so you turn and crawl over to her.');
    qspCall(s, 'arousal', 'cuni_give', 3, 'lesbian', 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep licking', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/lezdom/couch/lezdom5.jpg');
    scene.text('She grabs you by the back of the head and forces your face into her crotch. "Fuck me with your tongue." You do as she commands and stick your tongue into her wet pussy, fucking it as best you can with your tongue as she grinds her crotch against your face. Minutes go by before she grabs you by the hair and pulls you away from her crotch. She then turns over onto all fours. "Eat my ass."');
    qspCall(s, 'arousal', 'cuni_give', 5, 'lesbian', 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Lick ass', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/lezdom/couch/lezdom6.jpg');
    scene.text('You put your face between her ass cheeks and start licking her asshole. She moans as you lick her hole and grinds against your face as you keep licking. Without warning, she then stands up and drags you up on the couch.');
    qspCall(s, 'arousal', 'rimming_give', 5, 'lesbian', 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Lay back', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/lezdom/couch/lezdom7.jpg');
    scene.text('On your back on the couch, she straddles your face and you alternate between licking her pussy and her asshole as she grinds her crotch into your face. She starts moaning loudly and her thighs tighten against your head as you feel her muscles spasm. She soaks your face in her juices as she cums hard and you keep licking her through her orgasm.');
    scene.text('For several minutes afterwards, she just sits on top of you before she finally gets up and starts to clean herself up. "You may go now." You quickly gather up your clothes and get dressed before you leave her room.');
    qspCall(s, 'arousal', 'cuni_give', 5, 'lesbian', 'sub');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
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

function enterKendraBed(s: GameState, scene: SceneBuilder): void {
  ((s as any).kendraQW ?? {})['dom'] = (((s as any).kendraQW ?? {})['dom'] ?? 0) + (1);
  qspCall(s, 'npcStat', 'A84');
  scene.img('images/characters/city/university/girl/kendra/sex/lezdom/bed/massage1.jpg');
  scene.text('She walks over and sits on the bed. "Come over here and give me a massage, slave." You walk over and sit on the bed behind her and start massaging her shoulders and upper back. Sometime later, you\'ve finished your massage. "My shoulder still hurts. I think I pulled something, kiss it and make it better." You do as you\'re told and start kissing her shoulder, her soft moans causing you to slowly work your way over to kissing her neck as well.');
  qspCall(s, 'arousal', 'massage_give', 20, 'lesbian', 'sub');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Get kissed', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/lezdom/bed/massage2.jpg');
    scene.text('She turns her body as you\'re kissing her ear and faces you before leaning in and kissing you on the lips. You return her kiss, not noticing her filming the two of you on her phone at first. She then breaks the kiss and gets off the bed, but motions for you to stop when you start to follow. She holds up her phone. "Show my your tits, slave!"');
    qspCall(s, 'arousal', 'kiss', 3, 'lesbian', 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Show her', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/lezdom/bed/massage3.jpg');
    scene.text('You expose your breasts to her and she laughs as she films you for a few minutes before she places her phone down and pulls off her own shirt, exposing her own breasts now before she climbs back on the bed. "Come here and suck my tits."');
    qspCall(s, 'arousal', 'foreplay_give', 3, 'lesbian', 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck her tits', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/lezdom/bed/massage4.jpg');
    scene.text('You do as you\'re told and start sucking on her breasts while using your hands to massage them. As you do, she pulls her shorts and panties off and tosses them aside before she starts pulling your clothes off as well. You stop what you\'re doing long enough to help her before she lays back on the bed and spreads her legs wide. "Eat my pussy, slave."');
    qspCall(s, 'arousal', 'foreplay_give', 3, 'lesbian', 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Eat her pussy', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/lezdom/bed/massage5.jpg');
    scene.text('You lean forward until your face is between her legs and start licking her pussy and twirling your tongue around her clit while reaching up to squeeze her breasts with one of your hands.');
    qspCall(s, 'arousal', 'cuni_give', 5, 'lesbian', 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep licking', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/lezdom/bed/massage6.jpg');
    scene.text('You slip your tongue between her pussy\'s lips, plunging it as deeply as you can inside her, causing her to moan louder as you alternate between tongue fucking her and licking her clit. "Oh fuck, I\'m close. Get on your back."');
    qspCall(s, 'arousal', 'cuni_give', 5, 'lesbian', 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Lay back', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/lezdom/bed/massage7.jpg');
    scene.text('You do as you\'re told and she lifts one of your legs straight up and throws one of her legs over you. She straddles you until her clit is against yours and starts rubbing back and forth against you. You both moan in pleasure as she does.');
    qspCall(s, 'arousal', 'trib', 5, 'lesbian', 'sub');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/lezdom/bed/massage8.jpg');
    scene.text('She rubs against you more frantically until she finally cries out and her body shudders. You feel her wetness pour over your own pussy as she shudders for several seconds before she climbs off you and pulls you into a kiss. Once she breaks the kiss, she gets up and starts getting cleaned up while staring at you. "Don\'t just sit there. Get out! I\'m done with you today!" You quickly get cleaned up and dressed before hurrying out of the room.');
    qspCall(s, 'arousal', 'kiss', 5, 'lesbian', 'sub');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
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
  } },
  ]);
  scene.build();
}

function enterKendraCouchStrap(s: GameState, scene: SceneBuilder): void {
  ((s as any).kendraQW ?? {})['dom'] = (((s as any).kendraQW ?? {})['dom'] ?? 0) + (1);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npcStat', 'A84');
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/university/girl/kendra/sex/lezdom/couch/strapon/couch_strap1.jpg');
  scene.text('She walks over and sits on the couch, you follow her over. She motions to the spot next to her on the couch, so you obediently sit next to her as she starts texting on her phone while making small talk, mostly asking how your classes went before she starts asking if you\'ve been having sex lately or if anyone has taken your fancy. You talk like this for several minutes as if you\'re just two friends hanging out.');
  scene.actions([
    { label: 'Keep talking', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/lezdom/couch/strapon/couch_strap2.jpg');
    scene.text('With no warning, she suddenly leans over and kisses you while fondling your breasts. As the two of you keep kissing, she starts removing some of her clothes before removing some of yours. Once you\'re both naked, she slides you off the couch onto your knees and leans back on the couch, spreading her legs.');
    qspCall(s, 'arousal', 'kiss', 3, 'lesbian', 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Eat her pussy', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/lezdom/couch/strapon/couch_strap3.jpg');
    scene.text('You lean forward and start licking her clit, working your tongue all over her pussy and plunging it into her to tongue fuck her. Several minutes of this go by until she pulls you away from her and turns over onto all fours before grabbing you by the hair and pulling your face towards her ass.');
    qspCall(s, 'arousal', 'cuni_give', 5, 'lesbian', 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Eat her ass', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/lezdom/couch/strapon/couch_strap4.jpg');
    scene.text('With your face between her cheeks, you start licking her asshole as she holds you by the hair and pulls your face in tighter against her. By the sounds of her moans, she\'s really enjoying it. A few minutes later, she lets go of you and stands up. "Stay there and play with yourself. I\'ll be right back." She disappears behind a changing screen in the room while you start to slowly rub your clit.');
    qspCall(s, 'arousal', 'rimming_give', 3, 'lesbian', 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Masturbate', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/lezdom/couch/strapon/couch_strap5.jpg');
    scene.text('You masturbate for a few minutes until Kendra emerges from behind the screen wearing a strapon harness with a fairly large black dildo attached to it. The dildo looks nearly as long as your forearm, and almost as thick. She walks up to you with the dildo pointed right at your mouth.');
    qspCall(s, 'arousal', 'clit_finger', 10, 'lesbian', 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck strapon', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/lezdom/couch/strapon/couch_strap6.jpg');
    scene.text('You part your lips and she shoves the dildo into your mouth. She strokes the base of the dildo like it was a real cock. "That\'s right slut, suck my big black cock." You do as you\'re told as you keep rubbing your clit.');
    if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
      scene.text('"Don\'t worry my little pet, I\'m not going to take your virginity. I have something special in mind for that." She caresses the side of your face as she thrusts the dildo into your mouth. "That\'s it, get it nice and wet so when I fuck that little asshole of yours, it slides in balls deep nice and easy," she says before stepping back, popping the dildo out of your mouth as she points to the couch. "Get on the couch, slut!" As you get to your feet, she grabs you by the hips and places you on the couch on your knees before she pushes you forward, bending you over in front of her.');
      qspCall(s, 'arousal', 'bj', 3, 'lesbian', 'sub');
      qspCall(s, 'arousal', 'clit_finger', (-3), 'lesbian', 'sub');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Get on the couch', goto: ['kendra', 'kendra_couch_strap_anal'] },
      ]);
    } else {
      scene.text('"That\'s it, get it nice and wet. When I fuck that little wet pussy of yours, I want it to slide in balls deep nice and easy." She thrusts her hips and starts fucking your mouth with the strapon before she steps back, popping it out of your mouth as she points to the couch. "Get on the couch, slut!" As you get to your feet, she grabs you by the hips and places you on the couch on your knees before she pushes you forward, bending you over in front of her.');
      qspCall(s, 'arousal', 'bj', 3, 'lesbian', 'sub');
      qspCall(s, 'arousal', 'clit_finger', (-3), 'lesbian', 'sub');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Get on the couch', goto: ['kendra', 'kendra_couch_strap_vag'] },
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

function enterKendraCouchStrapVag(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A84');
  qspCall(s, 'npcStat', 'D7', 'a');
  scene.img('images/characters/city/university/girl/kendra/sex/lezdom/couch/strapon/couch_strap7.jpg');
  // TODO-QSP: dynamic text: She steps up behind you, placing one foot on the couch as she does. Her inner th...
  scene.text(`She steps up behind you, placing one foot on the couch as she does. Her inner thigh brushes against your hip as you feel her slide the tip of the ${((s as any).dick1 ?? 0)}cm ${((s as any).dick_girth1 ?? 0)} dildo against your wet slit before she pushes it into you, causing you to moan as she starts fucking you with it. You can hear the built in vibrator on her harness vibrating as she fucks you.`);
  qspCall(s, 'arousal', 'vaginal_strap', 5, ((s as any).npcID ?? 0), ((s as any).npcID1 ?? 0), 'lesbian', 'sub', 'rough');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Get pounded', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/lezdom/couch/strapon/couch_strap8.jpg');
    scene.text('She steadily works herself deeper until she\'s fucking you balls deep with the dildo. She thrusts hard and fast at first before she starts pulling the dildo nearly completely out of you before slamming it back in as deep as it will go, her hips loudly slapping against your ass with each thrust. She does this over and over until she eventually pulls out of you, leaving your pussy feeling very empty.');
    qspCall(s, 'arousal', 'vaginal_strap', 5, ((s as any).npcID ?? 0), ((s as any).npcID1 ?? 0), 'lesbian', 'sub', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get butt fucked', goto: ['kendra', 'kendra_couch_strap_anal'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterKendraCouchStrapAnal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A84');
  qspCall(s, 'npcStat', 'D7', 'a');
  scene.img('images/characters/city/university/girl/kendra/sex/lezdom/couch/strapon/couch_strap9.jpg');
  scene.text('You feel Kendra squirt some lube onto your ass before she starts rubbing the head of the dildo against your asshole. She then suddenly thrusts forward while using her hand to jerk you backwards.');
  // TODO-QSP: dynamic text: You yelp and try to pull away as the <<dick1>>cm <<$dick_girth1>> dildo stretche...
  scene.text(`You yelp and try to pull away as the ${((s as any).dick1 ?? 0)}cm ${((s as any).dick_girth1 ?? 0)} dildo stretches your ass, but she quickly grabs onto you and holds you tightly. "Stop trying to pull away or we'll see just how long I can fuck your ass before I pass out." You stop resisting and she starts fucking your ass, the built in vibrator in her harness obviously making her really enjoy this.`);
  qspCall(s, 'arousal', 'anal_strap', 5, ((s as any).npcID ?? 0), ((s as any).npcID1 ?? 0), 'lesbian', 'sub', 'rough');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Rough anal', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/lezdom/couch/strapon/couch_strap10.jpg');
    scene.text('She drives the dildo deep in your asshole until her hips start slapping against your ass with each thrust. This goes on for several minutes, Kendra moaning louder and louder until she almost falls on top of you. You feel her body shaking as she has an orgasm. "My god, that was amazing. I hope for your sake that you enjoyed that half as much as I did." Asserting her dominance even more, she pulls back and start thrusting the dildo inside your ass again before she finally pulls it out, leaving your ass gaping and feeling empty.');
    qspCall(s, 'arousal', 'anal_strap', 5, ((s as any).npcID ?? 0), ((s as any).npcID1 ?? 0), 'lesbian', 'sub', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Aftermath', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/city/university/girl/kendra/sex/lezdom/couch/strapon/couch_strap11.jpg');
    scene.text('Once she\'s pulled the dildo out of you, she grabs you by the hair and pulls you off the couch onto the floor. You sit on your knees as she squats down next to you and strokes her dildo. "I love fucking that little ass of yours. One of these days, I\'m going to fuck it raw until I\'m too exhausted to continue." She then leans in and kisses you for a few seconds before breaking the kiss. She stands up and removes the harness before handing it to you. "Clean this up before you leave."');
    scene.text('You take the harness and start cleaning the dildo as Kendra gets dressed and sits on the couch to watch TV. Once it\'s clean, you get dressed and Kendra flicks her eyes towards the door. You quickly walk towards the door and leave.');
    qspCall(s, 'arousal', 'kiss', 1, 'lesbian', 'sub');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterKendraBedStrap(s: GameState, scene: SceneBuilder): void {
  ((s as any).kendraQW ?? {})['dom'] = (((s as any).kendraQW ?? {})['dom'] ?? 0) + (1);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npcStat', 'A84');
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/university/girl/kendra/sex/lezdom/bed/strapon/bed_strap1.jpg');
  scene.text('She sits on her bed. "Come over here, slave." You walk over and sit on the bed as she reaches up and caresses your cheek and your neck before leaning in and kissing you as you start removing each other\'s clothes. Once she\'s undressed, she leans back on the bed and spreads her legs pulling your head between them.');
  qspCall(s, 'arousal', 'kiss', 3, 'lesbian', 'sub');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Eat her pussy', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/lezdom/bed/strapon/bed_strap2.jpg');
    scene.text('You start licking her pussy and sucking on her clit, giving every part of her some attention. The longer you do this, the more she moans and the wetter she gets.');
    qspCall(s, 'arousal', 'cuni_give', 3, 'lesbian', 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep licking', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/lezdom/bed/strapon/bed_strap3.jpg');
    scene.text('You keep teasing her pussy with your tongue and she moans louder and louder until she finally tenses up. She tightly squeezes her thighs against the side of your head before she relaxes and sits up. She rolls off the bed and opens her nightstand to pull out a strapon harness with a massive black dildo attached to it, nearly the size and length of your forearm. Once she has the harness in place, she walks over and rubs the tip against your lips.');
    qspCall(s, 'arousal', 'cuni_give', 3, 'lesbian', 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck it', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/lezdom/bed/strapon/bed_strap4.jpg');
    scene.text('You open your mouth as wide as you can, but can barely get your mouth around the massive dildo. "That\'s it, you dirty slut. Suck my big black cock!" she says as you take the dildo as deep as you can into your mouth.');
    qspCall(s, 'arousal', 'bj', 3, 'lesbian', 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep sucking', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/lezdom/bed/strapon/bed_strap5.jpg');
    if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
      scene.text('"Don\'t worry my little pet, I\'m not going to take your virginity. I have something special in mind for that." She caresses the side of your face as she thrusts the dildo into your mouth. "That\'s it, get it nice and wet so when I fuck that little asshole of yours, it slides in balls deep nice and easy," she says before stepping back, popping the dildo out of your mouth and pointing at the couch. "Turn around, slut!" she commands.');
      scene.text('As you start to turn around, she grabs you by the hips and gets you up on your knees so you\'re on all fours in front of her.');
      qspCall(s, 'arousal', 'bj', 3, 'lesbian', 'sub');
      qspCall(s, 'arousal', 'BDSM', (-3), 'lesbian', 'sub');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Get butt fucked', goto: ['kendra', 'kendra_bed_strap_anal'] },
      ]);
    } else {
      scene.text('"That\'s it, get it nice and wet so when I fuck that little pussy of yours, it slides in balls deep nice and easy." She thrusts her hips and starts fucking your mouth with the strap-on as she reaches over and starts slapping your ass. "Turn around, slut!" she commands. As you start to turn around, she grabs you by the hips and gets you up on your knees so you\'re on all fours in front of her.');
      qspCall(s, 'arousal', 'bj', 3, 'lesbian', 'sub');
      qspCall(s, 'arousal', 'BDSM', (-3), 'lesbian', 'sub');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Get fucked', goto: ['kendra', 'kendra_bed_strap_vag'] },
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
  scene.build();
}

function enterKendraBedStrapVag(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A84');
  qspCall(s, 'npcStat', 'D7', 'a');
  scene.img('images/characters/city/university/girl/kendra/sex/lezdom/bed/strapon/bed_strap6.jpg');
  // TODO-QSP: dynamic text: She steps up behind you and you feel her slide the tip of the <<dick1>>cm <<$dic...
  scene.text(`She steps up behind you and you feel her slide the tip of the ${((s as any).dick1 ?? 0)}cm ${((s as any).dick_girth1 ?? 0)} dildo against your wet slit. She pushes it into you, causing you to moan as she starts fucking you with it. You can hear the built in vibrator on her harness vibrating as she fucks you.`);
  qspCall(s, 'arousal', 'vaginal_strap', 5, ((s as any).npcID ?? 0), ((s as any).npcID1 ?? 0), 'lesbian', 'sub', 'rough');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Get pounded', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/lezdom/bed/strapon/bed_strap7.jpg');
    scene.text('She steadily works herself deeper until she\'s fucking you balls deep with the dildo. She thrusts hard and fast at first before she starts pulling the dildo nearly completely out of you before slamming it back in as deep as it will go, her hips loudly slapping against your ass with each thrust. She does this over and over until she eventually pulls out of you, leaving your pussy feeling very empty.');
    qspCall(s, 'arousal', 'vaginal_strap', 5, ((s as any).npcID ?? 0), ((s as any).npcID1 ?? 0), 'lesbian', 'sub', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get butt fucked', goto: ['kendra', 'kendra_bed_strap_anal'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterKendraBedStrapAnal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A84');
  qspCall(s, 'boyStat', 'D7', 'a');
  scene.img('images/characters/city/university/girl/kendra/sex/lezdom/bed/strapon/bed_strap8.jpg');
  scene.text('You feel Kendra squirt some lube onto your ass before she starts rubbing the head of the dildo against your asshole. She then suddenly thrusts forward while using her hand to jerk you backwards.');
  // TODO-QSP: dynamic text: You yelp and try to pull away as the <<dick1>>cm <<$dick_girth1>> dildo stretche...
  scene.text(`You yelp and try to pull away as the ${((s as any).dick1 ?? 0)}cm ${((s as any).dick_girth1 ?? 0)} dildo stretches your ass, but she quickly grabs onto you and holds you tightly. "Stop acting like you don't love this! You wouldn't keep coming back if you weren't a complete buttslut." You stop resisting and she starts fucking your ass, the built in vibrator in her harness obviously making her really enjoy this.`);
  qspCall(s, 'arousal', 'anal_strap', 5, ((s as any).npcID ?? 0), ((s as any).npcID1 ?? 0), 'lesbian', 'sub', 'rough');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Rough anal', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/lezdom/bed/strapon/bed_strap9.jpg');
    scene.text('She drives the dildo deep in your asshole until her hips start slapping against your ass with each thrust. This goes on for several minutes, Kendra moaning louder and louder until she almost falls on top of you. You feel her body shaking as she has an orgasm. "My god, that was amazing. I hope for your sake that you enjoyed that half as much as I did." Asserting her dominance even more, she pulls back and start thrusting the dildo inside your ass again before she finally pulls it out, leaving your ass gaping and feeling empty.');
    qspCall(s, 'arousal', 'anal_strap', 5, ((s as any).npcID ?? 0), ((s as any).npcID1 ?? 0), 'lesbian', 'sub', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck strapon', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/girl/kendra/sex/lezdom/bed/strapon/bed_strap10.jpg');
    scene.text('She grabs you by the hair and pulls you around until you\'re sitting on the edge of the bed next to her. She squats on the floor next to the edge of the bed and detaches the dildo from the harness before shoving it in your mouth. "That\'s right, suck my dildo clean you disgusting whore!"');
    scene.text('You take the harness and start cleaning the dildo as Kendra gets dressed and sits on the couch to watch TV. Once it\'s clean, you get dressed and Kendra flicks her eyes towards the door. You quickly walk towards the door and leave.');
    qspCall(s, 'arousal', 'bj', 3, 'lesbian', 'sub');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterKendraGloryhole(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A84');
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/university/girl/kendra/sex/gloryhole/first_glory1.jpg');
  scene.text('She smiles. "I know just the thing. Come on." She takes you by the hand, leads you out of her dorm room, and into the elevator. Once outside, she leads you across the quad, texting on her phone as she drags you into one of the campus toilets. She pushes you along to the last stall and you immediately notice the hole in the wall when you open the door.');
  scene.actions([
    { label: 'Get choked', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/gloryhole/first_glory2.jpg');
    scene.text('She follows you into the stall and closes the door before suddenly grabbing you by the throat and choking you. You can barely breathe as she leans in and whispers in your ear. "You\'re going to suck whatever dick comes through that hole until whoever it is cums in your mouth and you\'re going to swallow it. You\'ll keep doing this until I get bored, got it?" You\'re unable to speak, so you just nod.');
    qspCall(s, 'arousal', 'BDSM', 2, 'lesbian', 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Accept your fate', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/gloryhole/first_glory3.jpg');
    scene.text('"Good," she says as she lets go of you before roughly turning you around. She smiles and reaches up before jerking your top down, exposing your breasts. You instinctively cover up with your hands. "Get your hands down!" she commands.');
    qspCall(s, 'arousal', 'flashlite', 2, 'lesbian', 'sub', 'humiliation');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Stop covering up', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/gloryhole/first_glory4.jpg');
    scene.text('You drop your hands as Kendra pulls out her phone and starts taking your picture. After a few minutes of this, she grabs you by the hair. "Looks like the first one has arrived." She turns you towards the wall and you see a black dick poking through it. She forces you down on your knees in front of it.');
    qspCall(s, 'arousal', 'flashlite', 5, 'lesbian', 'sub', 'humiliation');
    qspCall(s, 'stat', '');
    if (((s as any).kendraQW ?? 0)?.['dom'] < 17  ||  qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
      scene.actions([
        { label: 'Suck the dick', goto: ['kendra', 'kendra_gloryhole_suck1'] },
      ]);
    } else {
      scene.actions([
        { label: 'Suck the dick', goto: ['kendra', 'kendra_gloryhole_suck2'] },
      ]);
    }
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterKendraGloryholeSuck1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcgeneratec', '', 0, 'Unknown gloryhole guy', Math.floor(Math.random() * 28) + 18, Math.floor(Math.random() * 2) + 3, 1);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
  ((s as any).kendraQW ?? {})['dom'] = (((s as any).kendraQW ?? {})['dom'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/university/girl/kendra/sex/gloryhole/first_glory5.jpg');
  scene.text('You open your mouth and start sucking the stranger\'s dick. You can hear soft moans from the other side and feel Kendra\'s hands on the sides of your head pushing you to take the dick deeper.');
  qspCall(s, 'arousal', 'bj', 3, 'sub');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Deepthroat', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/girl/kendra/sex/gloryhole/first_glory6.jpg');
    scene.text('Kendra forces your head forward and you take it deeper until you feel your lips touching his balls, causing you to gag as the dick slides down your throat. Understanding what she wants, you start deepthroating the dick.');
    qspCall(s, 'arousal', 'bj', 3, 'sub', 'deepthroat');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/girl/kendra/sex/gloryhole/first_glory7.jpg');
    scene.text('She removes her hands from your head and silently watches you. You glance over as you take it as deep as you can and notice that she\'s filming you on her phone.');
    qspCall(s, 'arousal', 'bj', 3, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/gloryhole/first_glory8.jpg');
    scene.text('You try to ignore her, but you can\'t help but blush as you continue sucking the guy off as best you can. You hear him starting to moan louder as you keep up the pace.');
    qspCall(s, 'arousal', 'bj', 3, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck until he cums', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/gloryhole/first_glory_mouth.jpg');
    if ((Math.floor(Math.random() * 4) + 1) === 1) {
      (s as any).minut = ((s as any).minut ?? 0) + 7;
      scene.text('You pick up the pace and your efforts are rewarded with the sound of him moaning as you feel him cum in your mouth. You stroke his dick, milking every last drop out of it. "Don\'t swallow it yet. Show me!" Kendra demands, so you turn and show her your mouth full of cum. "Good girl. Now swallow it." You do as you\'re told and swallow before glancing over and noticing the hole is now empty.');
      scene.text('You wipe the cum dribbling off your chin as Kendra raps on the wall. You wait for several minutes, but nothing happens and she sighs. "Well, looks like everyone else is busy. Maybe we can find you more dicks to suck next time?" She stands up and walks out, leaving you in the stall alone. You get off your knees and fix your top before walking out of the stall and checking yourself in the mirror before walking out of the restroom.');
      qspCall(s, 'arousal', 'bj', 3, 'sub');
      qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0), 0);
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Leave', goto: ['uni_grounds', ''] },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 2;
      scene.text('You pick up the pace and your efforts are rewarded with the sound of him moaning as you feel him cum in your mouth. You stroke his dick, milking every last drop out of it. "Don\'t swallow it yet. Show me!" Kendra demands, so you turn and show her your mouth full of cum. "Good girl. Now swallow it." You do as you\'re told and swallow before glancing over and noticing the hole is now empty.');
      scene.text('You wipe the cum dribbling off your chin as Kendra raps on the wall. You wait for several minutes, but nothing happens. Just as it looks like she\'s about to give up, another black dick pops through the hole and Kendra smiles. "Well? Get to work, slut!" she demands.');
      qspCall(s, 'arousal', 'bj', 3, 'sub');
      qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0), 0);
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Suck another dick', goto: ['kendra', 'kendra_gloryhole_suck1a'] },
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
  scene.build();
}

function enterKendraGloryholeSuck1a(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcgeneratec', '', 0, 'Unknown gloryhole guy', Math.floor(Math.random() * 28) + 18, Math.floor(Math.random() * 2) + 3, 1);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
  scene.img('images/characters/city/university/girl/kendra/sex/gloryhole/first_glory7.jpg');
  scene.text('You open your mouth and start sucking the next stranger\'s dick. You can hear soft moans from the other side and glance over to see that she still has her phone out filming you.');
  qspCall(s, 'arousal', 'bj', 5, 'sub');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/girl/kendra/sex/gloryhole/first_glory8.jpg');
    scene.text('You ignore her and instead focus on sucking the guy off as best as you can. You can hear him starting to moan louder as you keep up the pace.');
    qspCall(s, 'arousal', 'bj', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck until he cums', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/girl/kendra/sex/gloryhole/first_glory_mouth.jpg');
    if ((Math.floor(Math.random() * 4) + 1) === 1) {
      (s as any).minut = ((s as any).minut ?? 0) + 7;
      scene.text('You pick up the pace as you suck him off and your efforts are rewarded with the sound of him moaning as you feel him cum in your mouth. You stroke his dick, milking every last drop out of it. "Don\'t swallow it yet. Show me!" Kendra demands, so you turn and show her your mouth full of cum. "Good girl. Now swallow it." You do as you\'re told and swallow before glancing over and noticing the hole is now empty.');
      scene.text('You wipe the cum dribbling off your chin as Kendra raps on the wall. You wait for several minutes, but nothing happens and she sighs. "Well, looks like everyone else is busy. Maybe we can find you more dicks to suck next time?" She stands up and walks out, leaving you in the stall alone. You get off your knees and fix your top before walking out of the stall and checking yourself in the mirror before walking out of the restroom.');
      qspCall(s, 'arousal', 'bj', 3, 'sub');
      qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0), 0);
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Leave', goto: ['uni_grounds', ''] },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 2;
      scene.text('You pick up the pace and your efforts are rewarded with the sound of him moaning as you feel him cum in your mouth. You stroke his dick, milking every last drop out of it. "Don\'t swallow it yet. Show me!" Kendra demands, so you turn and show her your mouth full of cum. "Good girl. Now swallow it." You do as you\'re told and swallow before glancing over and noticing the hole is now empty.');
      scene.text('You wipe the cum dribbling off your chin as Kendra raps on the wall. Almost at once, another black dick pops through the hole and Kendra smiles. "It\'s your lucky day, slut! It seems like they\'re lining up for you."');
      qspCall(s, 'arousal', 'bj', 3, 'sub');
      qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0), 0);
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Suck another dick', goto: ['kendra', 'kendra_gloryhole_suck1a'] },
      ]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterKendraGloryholeSuck2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcgeneratec', '', 0, 'Unknown gloryhole guy', Math.floor(Math.random() * 28) + 18, Math.floor(Math.random() * 2) + 3, 1);
  qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
  ((s as any).kendraQW ?? {})['dom'] = (((s as any).kendraQW ?? {})['dom'] ?? 0) + (1);
  scene.img('images/characters/city/university/girl/kendra/sex/gloryhole/first_glory5.jpg');
  scene.text('You know the drill at this point and get down on your knees to start sucking the stranger\'s dick right away. You can hear soft moans from the other side and feel Kendra\'s hands on the sides of your head pushing you to take the dick deeper.');
  qspCall(s, 'arousal', 'bj', 3, 'sub');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Deepthroat', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/gloryhole/first_glory6.jpg');
    scene.text('Kendra forces your head forward and you take it deeper until you feel your lips touching his balls, causing you to gag as the dick slides down your throat. Understanding what she wants, you start deepthroating the dick.');
    qspCall(s, 'arousal', 'bj', 3, 'sub', 'deepthroat');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck him', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/gloryhole/first_glory7.jpg');
    scene.text('You deepthroat the dick as you hear her say "We\'re going to make you into a porn star yet." You glance over and notice she\'s filming you again. You do your best to ignore it as you continue to suck the dick.');
    qspCall(s, 'arousal', 'bj', 3, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/gloryhole/first_glory8.jpg');
    scene.text('You focus on sucking the guy off as best you can as you hear him starting to moan louder. You don\'t pay any attention to Kendra continuing to film you.');
    qspCall(s, 'arousal', 'bj', 3, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck until he cums', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/girl/kendra/sex/gloryhole/first_glory_mouth.jpg');
    if ((Math.floor(Math.random() * 4) + 1) === 1) {
      (s as any).minut = ((s as any).minut ?? 0) + 7;
      scene.text('You pick up the pace as you suck him off and your efforts are rewarded with the sound of him moaning as you feel him cum in your mouth. You stroke his dick, milking every last drop out of it. "Don\'t swallow it yet. Show me!" Kendra demands, so you turn and show her your mouth full of cum. "Good girl. Now swallow it." You do as you\'re told and swallow before glancing over and noticing the hole is now empty.');
      scene.text('You wipe the cum dribbling off your chin as Kendra raps on the wall. You wait for several minutes, but nothing happens and she sighs. "Well, looks like everyone else is busy. Maybe we can find you more dicks to suck next time?" She stands up and walks out, leaving you in the stall alone. You get off your knees and fix your top before walking out of the stall and checking yourself in the mirror before walking out of the restroom.');
      qspCall(s, 'arousal', 'bj', 3, 'sub');
      qspCall(s, 'cum_call', 'mouth_swallow', 0);
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Leave', goto: ['uni_grounds', ''] },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 2;
      scene.text('You pick up the pace and your efforts are rewarded with the sound of him moaning as you feel him cum in your mouth. You stroke his dick, milking every last drop out of it. "Don\'t swallow it yet. Show me!" Kendra demands, so you turn and show her your mouth full of cum. "Good girl. Now swallow it." You do as you\'re told and swallow before glancing over and noticing the hole is now empty.');
      scene.text('You wipe the cum dribbling off your chin as Kendra raps on the wall. Almost at once, another black dick pops through the hole and Kendra smiles. "It\'s your lucky day, slut! It seems like they\'re lining up for you."');
      qspCall(s, 'arousal', 'bj', 3, 'sub');
      qspCall(s, 'cum_call', 'mouth_swallow', 0);
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Suck another dick', goto: ['kendra', 'kendra_gloryhole_suck2a'] },
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
  scene.build();
}

function enterKendraGloryholeSuck2a(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcgeneratec', '', 0, 'Unknown gloryhole guy', Math.floor(Math.random() * 28) + 18, Math.floor(Math.random() * 2) + 3, 1);
  qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
  if ((Math.floor(Math.random() * 2) + 1) === 1) {
    if (((s as any).temp_glory_fuck ?? 0) >= 1) {
      scene.actions([{ label: 'Continue', goto: ['kendra', 'kendra_gloryhole_fuck'] }]);
    } else {
      scene.img('images/characters/city/university/girl/kendra/sex/gloryhole/first_glory9.jpg');
      scene.text('You start wrapping your lips around the next cock when you suddenly feel Kendra grab your hair and pull you up. As you stand, she starts stripping off your clothes until you\'re mostly naked.');
      qspCall(s, 'arousal', 'flash', 2, 'sub');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Wait', handler: (st: GameState) => {
    (s as any).temp_glory_fuck = 1;
    scene.img('images/characters/city/university/girl/kendra/sex/gloryhole/first_glory10.jpg');
    scene.text('She then forcefully turns you around. "Fuck that cock." You\'re surprised by her demand, but she doesn\'t wait for an answer as she bends you over and pushes you back until you feel the dick pressing against your ass. You reach back and grab the dick before lining it up and pushing yourself back. The cock slowly slides inside you, causing you to moan softly as it does.');
    qspCall(s, 'arousal', 'vaginal', 3, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Fuck the cock', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/gloryhole/first_glory11.jpg');
    scene.text('You push back until your ass is against the wall and start moving back and forth, fucking the cock. You don\'t know if you feel shame or excitement at what you\'re doing as you feel Kendra\'s hands running along your body.');
    qspCall(s, 'arousal', 'vaginal', 3, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep fucking', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/gloryhole/first_glory12.jpg');
    scene.text('You start moaning louder as you continue fucking the stranger\'s dick. Kendra\'s hands continue to run along your body, but you barely notice as you focus on the stranger\'s cock filling you as you take him deeper.');
    qspCall(s, 'arousal', 'vaginal', 3, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Fuck until he cums', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/gloryhole/first_glory13.jpg');
    if ((Math.floor(Math.random() * 4) + 1) === 1) {
      (s as any).minut = ((s as any).minut ?? 0) + 7;
      scene.text('You pick up the pace as you fuck him and your efforts are rewarded with the sounds of him moaning even louder as you feel him cum in your pussy. You continue bouncing on his dick, milking every last drop out of it with your pussy. Kendra gets down to take a look as you feel the dick pulling out of you before his cum starts running out of you. "Good girl," Kendra says as you glance over and notice that the hole is now empty.');
      scene.text('Kendra raps on the wall and you wait for several minutes, but nothing happens and she sighs. "Looks like everyone else is busy. Maybe we can find you more dicks next time?" She gets up and walks out, leaving you in the stall alone. You fix your clothes before walking out of the stall and checking yourself in the mirror before leaving the restroom.');
      qspCall(s, 'arousal', 'vaginal', 3, 'sub');
      qspCall(s, 'cum_call', '', '', ((s as any).npcID ?? 0), 0);
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Leave', goto: ['uni_grounds', ''] },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 2;
      scene.text('You pick up the pace as you fuck him and your efforts are rewarded with the sounds of him moaning even louder as you feel him cum in your pussy. You keep bouncing on his dick, milking every last drop out of it with your pussy. Kendra gets down to take a look as you feel the dick pulling out of you before his cum starts running out of you. "Good girl," Kendra says as you glance over and notice that the hole is now empty.');
      scene.text('Kendra raps on the wall and you almost instantly feel another dick pushing against you as Kendra smiles. "It\'s your lucky day, slut! It seems like they\'re lining up for you."');
      qspCall(s, 'arousal', 'vaginal', 3, 'sub');
      qspCall(s, 'cum_call', '', '', ((s as any).npcID ?? 0), 0);
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Another dick', goto: ['kendra', 'kendra_gloryhole_suck2a'] },
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
    }
  } else {
    scene.img('images/characters/city/university/girl/kendra/sex/gloryhole/first_glory7.jpg');
    if (((s as any).temp_glory_fuck ?? 0) >= 1) {
      scene.text('Kendra turns you around and pushes you back down on your knees. You open your mouth and start sucking the next stranger\'s dick. You can hear soft moans from the other side and glance over to see that she still has her phone out filming you.');
    } else {
      scene.text('You open your mouth and start sucking the next stranger\'s dick. You can hear soft moans from the other side and glance over to see that she still has her phone out filming you.');
    }
    qspCall(s, 'arousal', 'bj', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/gloryhole/first_glory8.jpg');
    scene.text('You ignore her filming you and instead focus on sucking the guy off as best you can. You can hear him starting to moan louder and louder as you keep up the pace.');
    qspCall(s, 'arousal', 'bj', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck until he cums', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/gloryhole/first_glory_mouth.jpg');
    if ((Math.floor(Math.random() * 4) + 1) === 1) {
      (s as any).minut = ((s as any).minut ?? 0) + 7;
      scene.text('You pick up the pace as you suck him off and your efforts are awarded with the sounds of him moaning even louder as you feel him cum in your mouth. You stroke his dick, milking every last drop out of it. "Don\'t swallow yet. Show me!" Kendra demands, so you turn and show her your mouth full of cum. "Good girl. Now swallow it." You do as you\'re told and swallow it before glancing over and noticing that the hole is now empty.');
      scene.text('You wipe the cum dribbling off your chin as Kendra raps on the wall. You wait for several minutes, but nothing happens and sighs. "Looks like everyone else is busy. Maybe we can find you more dicks to suck next time?" She gets up and walks out, leaving you in the stall alone. You get off your knees and fix your top, She stands up and walks out, leaving you in the stall alone. You get off your knees and fix your top before walking out of the stall and checking yourself in the mirror before walking out of the restroom.');
      qspCall(s, 'arousal', 'bj', 3, 'sub');
      qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0), 0);
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Leave', goto: ['uni_grounds', ''] },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 2;
      scene.text('You pick up the pace as you suck him off and your efforts are rewarded with the sounds of him moaning even louder as you feel him cum in your mouth. You stroke his dick, milking every last drop out of it. "Don\'t swallow yet. Show me!" Kendra demands, so you turn and show her your mouth full of cum. "Good girl. Now swallow it." You do as you\'re told and swallow it before glancing over and noticing that the hole is now empty.');
      scene.text('You wipe the cum dribbling off your chin as Kendra raps on the wall. Almost at once, another black dick pops through the hole and Kendra smiles. "It\'s your lucky day, slut! It seems they\'re lining up for you."');
      qspCall(s, 'arousal', 'bj', 3, 'sub');
      qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0), 0);
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Another dick', goto: ['kendra', 'kendra_gloryhole_suck2a'] },
      ]);
    }
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterKendraGloryholeFuck(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcgeneratec', '', 0, 'Unknown gloryhole guy', Math.floor(Math.random() * 28) + 18, Math.floor(Math.random() * 2) + 3, 1);
  qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
  (s as any).temp_glory_fuck = 1;
  scene.img('images/characters/city/university/girl/kendra/sex/gloryhole/first_glory10.jpg');
  scene.text('You don\'t have to be told what to do. You reach back and grab the dick to help line it up as you push back. You feel the cock slowly slide inside you, causing you to moan softly as it does.');
  qspCall(s, 'arousal', 'vaginal', 3, 'sub');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Fuck the cock', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/gloryhole/first_glory11.jpg');
    scene.text('You push back until your ass is against the wall and start moving back and forth, fucking the cock. You don\'t know if you feel shame or excitement at what you\'re doing as you feel Kendra\'s hands running along your body.');
    qspCall(s, 'arousal', 'vaginal', 3, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep fucking', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/gloryhole/first_glory12.jpg');
    scene.text('You start moaning louder as you continue fucking the stranger\'s dick. Kendra\'s hands continue to run along your body, but you barely notice as you focus on the stranger\'s cock filling you as you take him deeper.');
    qspCall(s, 'arousal', 'vaginal', 3, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Fuck until he cums', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/gloryhole/first_glory13.jpg');
    if ((Math.floor(Math.random() * 4) + 1) === 1) {
      (s as any).minut = ((s as any).minut ?? 0) + 7;
      scene.text('You pick up the pace as you fuck him and your efforts are rewarded with the sounds of him moaning even louder as you feel him cum in your pussy. You continue bouncing on his dick, milking every last drop out of it with your pussy. Kendra gets down to take a look as you feel the dick pulling out of you before his cum starts running out of you. "Good girl," Kendra says as you glance over and notice that the hole is now empty.');
      scene.text('Kendra raps on the wall and you wait for several minutes, but nothing happens and she sighs. "Looks like everyone else is busy. Maybe we can find you more dicks next time?" She gets up and walks out, leaving you in the stall alone. You fix your clothes before walking out of the stall and checking yourself in the mirror before leaving the restroom.');
      qspCall(s, 'arousal', 'vaginal', 3, 'sub');
      qspCall(s, 'cum_call', '', '', ((s as any).npcID ?? 0), 0);
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Leave', goto: ['uni_grounds', ''] },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 2;
      scene.text('You pick up the pace as you fuck him and your efforts are rewarded with the sounds of him moaning even louder as you feel him cum in your pussy. You keep bouncing on his dick, milking every last drop out of it with your pussy. Kendra gets down to take a look as you feel the dick pulling out of you before his cum starts running out of you. "Good girl," Kendra says as you glance over and notice that the hole is now empty.');
      scene.text('Kendra raps on the wall and you almost instantly feel another dick pushing against you as Kendra smiles. "It\'s your lucky day, slut! It seems like they\'re lining up for you."');
      qspCall(s, 'arousal', 'vaginal', 3, 'sub');
      qspCall(s, 'cum_call', '', '', ((s as any).npcID ?? 0), 0);
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Another dick', goto: ['kendra', 'kendra_gloryhole_suck2a'] },
      ]);
    }
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterKendraMaleSlave(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/university/girl/kendra/sex/femdom/femdom_male1.jpg');
  if (((s as any).kendra_male_slave ?? 0) === 1) {
    scene.text('You liked watching last time and got off watching a guy being dominated by a girl. You wonder how she manages it as you walk across the room and take a seat on one of the beds to watch. Kendra closes the door and walks back over to the boy, where she smacks him in the face and shoves him backwards until the back of his head is resting on the seat of the couch. She then straddles his face and sits on it. "Lick my pussy, slut! You better get me off or I\'m going to fuck you until you can\'t sit," she says with an evil laugh.');
    scene.text('She starts moaning and really starts riding his face, apparently struggling to stop herself from cumming. Just as it sounds like she\'s about to have an orgasm, she suddenly gets off him and stands up. "Time\'s up. You almost made it this time." You\'re certain she gave him less time than last time to get her off; he looks crestfallen that he failed again.');
  } else {
    scene.text('You decide you want to see this, curious about how and why a guy would let a girl dominate them like this. You wonder how she manages it as you walk across the room and take a seat on one of the beds to watch. Kendra closes the door and walks back over to the boy, where she smacks him in the face and shoves him backwards until the back of his head is resting on the seat of the couch. She then straddles his face and sits on it. "Lick my pussy, bitch! You better get me off or there\'ll be no lube for you!" she says with an evil laugh.');
    scene.text('She starts moaning and really starts riding his face; he apparently knows how to eat pussy. Just as it sounds like she\'s about to have an orgasm, she suddenly gets off him and stands up. "Time\'s up. You almost made it this time." You notice he looks a little disappointed.');
  }
  qspCall(s, 'arousal', 'voyeur_sex', 5);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/femdom/femdom_male2.jpg');
    scene.text('She grabs him by the hair and pulls his face to her fake cock. "Suck it, bitch!" He immediately opens his mouth, obeying her without question. She shoves the fake black cock in his mouth and he closes his lips tightly around it and starts sucking. He looks like he really knows what he\'s doing and you idly wonder how many times he\'s done this. "Mhm… You\'re such a good little cock sucker," she says to him as she places a hand on his head and starts fucking his throat, causing him to gag.');
    qspCall(s, 'arousal', 'voyeur_sex', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/femdom/femdom_male3.jpg');
    scene.text('She pulls his head away and sits down on the couch, only to grab his head and pull him over. He already has his mouth open and she shoves the dildo back in before he starts bobbing his head up and down. After a few seconds, she grabs his head and forces him to take the full length of the dildo into his mouth, once more making him gag. "That\'s right slut, gag on my dick. You better get it nice and wet, because that\'s the only lube you\'re getting!" She forces him to deepthroat her for the next few minutes.');
    qspCall(s, 'arousal', 'voyeur_sex', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/femdom/femdom_male4.jpg');
    if (((s as any).kendra_male_slave ?? 0) === 1) {
      scene.text('She pulls his head away again before standing up. "Time to fuck your boy pussy," she tells him and he climbs on the couch. As he does, she turns him away from her and bends him over, presenting his ass to her. She gets up behind him and spits on his ass. "That\'s more than you deserve." She scoots forward a bit closer behind him before reaching down and doing something to the harness. You can hear the vibrating sound coming from it and a soft moan from her.');
      // TODO-QSP: dynamic text: Taking hold of the dildo with one hand to line it up, she sticks it between his ...
      scene.text(`Taking hold of the dildo with one hand to line it up, she sticks it between his ass cheeks. He tenses up before she thrusts her hips forward, causing him to cry out in pain. "Shut up, bitch! We both know you love it, even ${((s as any).pcs_nickname ?? 0)} knows you love getting your ass fucked by a big hard cock!" she says with a laugh before she grabs onto his hips and plunges herself all the way into him. She hangs onto his hips as she roughly hammers his ass with her fake cock. She starts moaning in pleasure as he grunts and hisses in pain. You can see his limp dick violently bouncing around with each savage thrust she takes.`);
    } else {
      scene.text('She pulls his head away again before standing up. "Get on the couch, slut!" she tells him and he climbs on the couch. As he does, she turns him away from her and pushes him forward until his ass is facing her. She spits on his ass. "Never say I\'m not a kind mistress." She then scoots forward a bit closer behind him before reaching down and doing something to the harness and you can hear the vibrating sound coming from it and a soft moan from her.');
      scene.text('He tenses up as she lines the dildo up with his asshole. A few seconds later, she thrusts her hips forward and he cries out in pain. "Shut up, bitch! This is what you get for being so bad at eating pussy. Maybe this will motivate you better next time!" she says with an angry snarl before she grabs onto his hips and plunges herself all the way into him. She hangs onto his hips as she roughly hammers his ass with her fake cock. She starts moaning in pleasure as he grunts and hisses in pain. You can see his limp dick violently bouncing around with each savage thrust she takes.');
    }
    qspCall(s, 'arousal', 'voyeur_sex', 10);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/femdom/femdom_male5.jpg');
    if (((s as any).kendra_male_slave ?? 0) === 1) {
      scene.text('As she hammers away at his ass, he stops hissing in pain while his grunts are almost turning into moans of pleasure; it even looks like his dick is semi hard as it bounces back and forth with each of her thrusts.');
      scene.text('After a few more minutes of this, she starts moaning even louder before she cries out in orgasm. You\'re sure the built in vibrator helped.');
      scene.text('She slows down during her orgasm, but doesn\'t stop. She leans forward and grabs his chin before forcing his head up and to the side to look directly at you. "Look at her." He does as she commands.');
      scene.text('"Would you like her to fuck you too?" she asks him while looking at you.');
      scene.text('He blushes at her words, but responds to her. "Yes mistress, I would love that."');
      scene.text('She gives you a confident grin as she replies to him. "I know you would, slut. Maybe next time we\'ll take turns fucking you. Would you like that?"');
      scene.text('He blushes even more, but you also notice the precum leaking out of his dick. "Oh yes please, mistress! I would love that!"');
      scene.text('She throws her head back and laughs. "Not today, bitch. I\'m not finished with you," she says as she starts to savagely fuck him again while glancing at you with a wicked grin. "You may go, slave."');
      scene.text('"Yes mistress." You nod and get up before walking over to the door, the sounds her her fucking him filling the room as you open the door to leave.');
    } else {
      (s as any).kendra_male_slave = 1;
      scene.text('As she hammers away at his ass, you notice he starts leaning forward, gently trying to pull away from the relentless fucking she\'s giving him. She seems to have noticed as well as she tightens her grip on his hips and yanks him back. "Don\'t pull away from me, slut!" She then pulls her own hips back and slams them forward, causing him to cry out again.');
      scene.text('She then goes back to savagely fucking him again, the sound of flesh slapping against flesh drowning out their moan and groans. After a few more minutes of this, she starts moaning even louder as she cries out in orgasm. She fucks him through her orgasm before she stops and grabs his chin, forcing his head up and to the side to look directly at you. "Look at her." He does as she commands.');
      scene.text('"How does it make you feel knowing that she just watched you get fucked like a slut by your ebony mistress and her big black cock? Think she\'s going to go around telling everyone what a sissy slut you are?"');
      scene.text('He blushes at her words, but responds to her. "I love getting fucked by your black cock, mistress."');
      scene.text('She gives you a confident grin. "I know you do, slut. Maybe next time I\'ll let her fuck you too. Would you like that?"');
      scene.text('She throws her head back and laughs before looking at you. "I\'ll break you just like I broke him. Now leave."');
      scene.text('You nod and get up. "Yes mistress." As you open the door to leave, you hear them starting to grunt again and look back to see that she\'s started fucking him again. You know better than to stay, so you open the door and leave.');
    }
    qspCall(s, 'arousal', 'voyeur_sex', 10);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
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

function enterKendraPetka(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/university/girl/kendra/sex/petka/petka_kendra_peg1.jpg');
  if (((s as any).petkaQW ?? 0)?.['pegged_kendra'] >= 1) {
    scene.text('You liked watching last time and got off watching Petka get fucked by Kendra last time, so you walk in and go over to take a seat on her roommates bed, so you can watch. Kendra closes the door and walks back over to Petka, where she smacks him in the face, before grabbing his jaw in her hands, as she says. "Tell me you want me your little boi pussy aches to be filled with my big black cock again." she says with an evil laugh.');
    scene.text('You see his dick getting hard at her actions and words again as he replies. "I want you to fuck me with your big black cock."');
  } else {
    scene.text('You decide you want to see this, curious about how and why Petka meet Kendra. You wonder if your fucking him with a strapon back in Pavlovsk lead to this, as you walk across the room and take a seat on one of the beds to watch. Kendra closes the door and walks back over to Petka, as she says to you. "This my little white sissy slut Petka."');
    scene.text('You smile to her. "I know, well I mean I know who he is, we use to go to school together."');
    scene.text('She cocks her head slightly and then turns towards Petka. "She use to be your classmate in secondary school." He nods yes to her question. She smacks him in the face, before grabbing his jaw in her hands, as she says. "You ready to be fucked by your ebony goddess and take her big black cock in you little white sissy ass finally, while one of your former female schoolmates watches?" she asks with an evil laugh.');
    scene.text('You see his dick getting hard at her actions and words as he replies. "Yes mistress." Though he does look pretty nervous, at seems like this might be his first time, or at least his first time getting fucked by her.');
  }
  qspCall(s, 'arousal', 'voyeur', 1);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Watch what happens next', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/petka/petka_kendra_peg2.jpg');
    if (((s as any).petkaQW ?? 0)?.['pegged_kendra'] >= 1) {
      scene.text('She smacks his face again as she says. "Turn around and bend over." He does as she commands, turning around so his butt is facing her and then bends all the way over so his face is against the bed, just like last time. On his knees with his face pressed against the bed, his ass is fully presented to her. She grabs something off the night stand and starts to write on his lower back just above his butt again, just like last time.');
    } else {
      scene.text('She smacks his face again as she says. "Turn around and bend over." He does as she commands, turning around so his butt is facing her and then bends over, she reaches over and forces his face down against the bed. On his knees with his face pressed against the bed, his ass is fully presented to her. She grabs something off the night stand and starts to write on his lower back just above his butt.');
    }
    qspCall(s, 'arousal', 'voyeur', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go up and take a closer look', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/petka/petka_kendra_peg3.jpg');
    if (((s as any).petkaQW ?? 0)?.['pegged_kendra'] >= 1) {
      scene.text('As she finishes writing, you stand up and walk over a few steps to get a better look at what she wrote. Just above his ass she has wrote pussy again, just like last time. With the end of the Y winding around like a devils tail until it points to the crack of his ass. She glances over at you and smiles. "I thought about writing something knew but it is so appropriate, maybe I should make him get it tattooed, so everyone knows he has a boi pussy." Petka doesn\'t make a sound as she talks and you admire the writing.');
    } else {
      scene.text('As she finishes writing, you stand up and walk over a few steps to get a better look at what she wrote. Just above his ass she has wrote pussy, with the end of the Y winding around like a devils tail until it points to the crack of his ass. She glances over at you and smiles. "What do you think? It seems very appropriate, since I am about to fuck his tight little why ass like a pussy with my big black cock." Petka doesn\'t make a sound as she talks and you admire the writing.');
    }
    qspCall(s, 'arousal', 'voyeur', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Sit back down', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/petka/petka_kendra_peg4.jpg');
    if (((s as any).petkaQW ?? 0)?.['pegged_kendra'] >= 1) {
      scene.text('You sit back down on her roommates bed, as she grabs a bottle of lube off the night stand and begins lubing up her rather long, at a glance you would say it is about 20cm or a bit longer, as it dangles half way down her thigh to her knee, when she bends over a bit, not to mention it is pretty damn thick as well. Once she has the big black cock lubed up, she smacks his ass a few times as she laughs. "This little sissy slut is so eager to be fucked again, his little dick is already hard. Just another little white bitch craving some big block cock." She says with a laugh, then she leans forward to make it obvious she is talking to him. "Maybe I should get you the real thing some time, bet you would like that."');
    } else {
      scene.text('You sit back down on her roommates bed, as she grabs a bottle of lube off the night stand and begins lubing up her rather long, at a glance you would say it is about 20cm or a bit longer, as it dangles half way down her thigh to her knee, when she bends over a bit, not to mention it is pretty damn thick as well. Once she has the big black cock lubed up, she smacks his ass a few times as she laughs. "Look at this little sissy slut, his dick is already hard and I havn\'t even done anything yet. Just another little white bitch craving some big block cock." She says with a laugh, then glances at you. "I guess we shouldn\'t keep him waiting any longer, then."');
    }
    qspCall(s, 'arousal', 'voyeur', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep watching', goto: ['kendra', 'kendra_petka1'] },
    ]);
  } },
    ]);
  } },
      { label: 'Stay seated', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/petka/petka_kendra_peg4.jpg');
    if (((s as any).petkaQW ?? 0)?.['pegged_kendra'] >= 1) {
      scene.text('As you watch she grabs a bottle of lube off the night stand and begins lubing up her rather long, at a glance you would say it is about 20cm or a bit longer, as it dangles half way down her thigh to her knee, when she bends over a bit, not to mention it is pretty damn thick as well. Once she has the big black cock lubed up, she smacks his ass a few times as she laughs. "This little sissy slut is so eager to be fucked again, his little dick is already hard. Just another little white bitch craving some big block cock." She says with a laugh, then she leans forward to make it obvious she is talking to him. "Maybe I should get you the real thing some time, bet you would like that."');
    } else {
      scene.text('As you watch she grabs a bottle of lube off the night stand and begins lubing up her rather long, at a glance you would say it is about 20cm or a bit longer, as it dangles half way down her thigh to her knee, when she bends over a bit, not to mention it is pretty damn thick as well. Once she has the big black cock lubed up, she smacks his ass a few times as she laughs. "Look at this little sissy slut, his dick is already hard and I havn\'t even done anything yet. Just another little white bitch craving some big block cock." She says with a laugh, then glances at you. "I guess we shouldn\'t keep him waiting any longer, then."');
    }
    qspCall(s, 'arousal', 'voyeur', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.actions([
      { label: 'Keep watching', goto: ['kendra', 'kendra_petka1'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterKendraPetka1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/university/girl/kendra/sex/petka/petka_kendra_peg5.jpg');
  if (((s as any).petkaQW ?? 0)?.['pegged_kendra'] >= 1) {
    scene.text('She moves up behind him, holding onto the black dildo. This time she doesn\'t have to struggle nearly as much before the black dildo pops into his ass. This time he groans a bit in pain but also moans in pleasure, she grins. "Already not as tight as last time. Seems your little sissy boi pussy is made for taking big black cocks." She says with a sadistic laugh, as she slides it deeper in his ass. As you watch she gets at least half the length of her 20 to 25cm very thick dildo buried in his butt as she starts fucking him. He groans and moans a little in pain and a little pleasure.');
  } else {
    scene.text('She moves up behind him, holding onto the black dildo. She seems to struggle for a moment to get it to slide in his ass. Then he suddenly cries out a bit in pain and she grins. "There it goes, my what a tight little ass you have. Well it won\'t be by the time my big black cock is done with it." She says with a sadistic laugh, as she slides it deeper in his ass. As you watch she gets at least half the length of her 20 to 25cm very thick dildo buried in his butt as she starts fucking him. He groans and moans a little in pain and a little pleasure.');
  }
  qspCall(s, 'arousal', 'voyeur_sex', 3);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Watch Petka get fucked', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/petka/petka_kendra_peg6.jpg');
    if (((s as any).petkaQW ?? 0)?.['pegged_kendra'] >= 1) {
      scene.text('She slams her hips forward until her she buries the black dildo balls deep in Perka\'s butt. He groans in pain, but the groan quickly fades to moans of pleasure. "That\'s a good boy, take my big black cock in your little boi pussy." She says in a harsh tone as she starts hammering his ass, her hips bouncing off his butt cheeks as she fucks him hard and fast.');
    } else {
      scene.text('She slams her hips forward until her she buries the black dildo balls deep in Perka\'s butt. He cries out again in pain as she does and tries to pull away from her, but she grabs him by the hair and holds him in place. "Don\'t you pull away from me you little bitch, take my black cock." She says in a harsh tone as she starts hammering his ass, her hips bouncing off his butt cheeks as she fucks him hard and fast.');
    }
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch Petka get hammered', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/petka/petka_kendra_peg7.jpg');
    scene.text('She hammers her black dildo hard, fast, and deep in his ass, he starts moaning louder and louder, obviously enjoying the butt fucking he is getting. "She laughs a bit. "Listen to you moan like a whore, you like taking big black cock in your little sissy ass, don\'t you?"');
    scene.text('He moans loudly as he answers, she often thrust extra hard as he talks. "YES!, I love… aaawww… taking… your big black… COCK!… OOOHHH… in my… ASS!…"');
    qspCall(s, 'arousal', 'voyeur_sex', 3);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Stay seated as you watch', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/petka/petka_kendra_peg8.jpg');
    scene.text('She grabs onto his hips with both her hands, but he isn\'t trying to pull away. He seems to be really enjoying himself by the sounds he is making it sounds like he might be getting close to cumming just from getting fucked in the ass by her. "OH Yay, take it… take my big black cock…" She cries out, it seems she is enjoying this almost as much as he is. Just as you think they are both about to cum, she suddenly stops and pulls out of him, as she does she starts taking off the harness. "Oh no cumming for you, you can do that on your own time. Lay down on your back." She tells him as she lets the harness drop to the floor.');
    qspCall(s, 'arousal', 'voyeur_sex', 3);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/petka/petka_kendra_peg9.jpg');
    scene.text('He does as he is told and lays down on the bed on his back. She tears the crotch out of her stockings and then sits on his face. "Now eat me out bitch." She commands him and he starts licking her pussy even before she finishes staying it. She rides his face, grinding her pussy against it, after a couple of minutes of this she starts moaning louder and louder until she finally has a orgasm. She stops moving for a moment as she pants after her orgasm.');
    qspCall(s, 'arousal', 'voyeur_sex', 3);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'See them finish', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/petka/petka_kendra_peg10.jpg');
    scene.text('She climbs off him, but just turns around and sits back on his face. "Now lick my asshole." Which he does as soon as she says it. "Ummm that\'s a good little slave." She stays like that for a couple of minutes before she climbs off him and starts to get dressed. "Buy me a new pair of stockings." She tells him.');
    scene.text('He nods as he sits up on the bed. "Yes mistress."');
    if (((s as any).petkaQW ?? 0)?.['pegged_kendra'] < 10) {
      scene.text('She grins at him. "Did you enjoy getting fucked in front of your female classmate?"');
      scene.text('He blushes bright red and doesn\'t meet your gaze but nods to her. "Yes mistress."');
      scene.text('Then she glances over to you. "Very well you may go now." You know she is dismissing you and not wanting to get on her bad side, you get up and walk over to the door. You glance back, but she is not paying attention to you and he still won\'t meet your gaze, so you open the door and leave.');
    } else {
      if (((s as any).petkaQW ?? 0)?.['pegged_kendra'] === 10) {
        scene.text('She grins at him. "Did you enjoy getting fucked in front of your female classmate again?"');
        scene.text('He blushes bright red and doesn\'t meet your gaze but nods to her. "Yes mistress."');
        scene.text('She grabs a metal device off her night stand, then looks at Petka shaking her head and making a tsking sound. "This won\'t do, we can\'t have you cumming whenever you want and I can\'t put this when you dick is all hard." With a sudden lunge of her hand, she grabs him by the balls and starts to squeeze, he cries out in pain and tries to pull away from her. His hands go down to hers to try and pull her hands away. "Let go of me… NOW!" He does as she commands.');
        scene.text('"Please stop mistress it hurts." He whines and pleads with her.');
        scene.text('She gives him a sadistic smile. "Not until your pathetic little dick is soft. He closes his eyes at that point and just endures it as, she keeps squeezing until his dick finally gets soft. "There much better." She tells him, then slips the chastity device over his dick and balls, locking him in place.');
        scene.text('Then she glances over to you. "Very well you may go now." You know she is dismissing you and not wanting to get on her bad side, you get up and walk over to the door. You glance back, but she is not paying attention to you and he still won\'t meet your gaze, so you open the door and leave.');
      } else {
        scene.text('She grins at him. "Did you enjoy getting fucked in front of your female classmate again?"');
        scene.text('He blushes bright red and doesn\'t meet your gaze but nods to her. "Yes mistress."');
        scene.text('She grabs the metal chastity device off her night stand again, then looks at Petka shaking her head and making a tsking sound. "This won\'t do, we can\'t have you cumming whenever you want and I can\'t put this when you dick is all hard."');
        scene.text('He blushes even more. "I\'m sorry mistress."');
        scene.text('She slowly reaches down to his balls, everyone knows what she is about to do, but he doesn\'t move at all, as she grabs him by the balls and starts to squeeze. She keeps squeezing until his dick finally gets soft, his face goes red as he goes rigid, you can tell he is in pain but he doesn\'t complain. "There much better." She tells him, then slips the chastity device over his dick and balls.');
        scene.text('Once his dick is locked away in the chastity device again, she glances over to you. "Very well you may go now." You know she is dismissing you and not wanting to get on her bad side, you get up and walk over to the door. You glance back, but she is not paying attention to you and he still won\'t meet your gaze, so you open the door and leave.');
      }
    }
    ((s as any).petkaQW ?? {})['pegged_kendra'] = (((s as any).petkaQW ?? {})['pegged_kendra'] ?? 0) + (1);
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'arousal', 'voyeur', 3);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
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
  const arg = s.locArg;
  switch (arg) {
    case 'kendra_room_start':
      enterKendraRoomStart(s, scene);
      break;
    case 'kendra_room_routing':
      enterKendraRoomRouting(s, scene);
      break;
    case 'kendra_room_0':
      enterKendraRoom_0(s, scene);
      break;
    case 'kendra_room_1':
      enterKendraRoom_1(s, scene);
      break;
    case 'kendra_room_2':
      enterKendraRoom_2(s, scene);
      break;
    case 'kendra_room_3':
      enterKendraRoom_3(s, scene);
      break;
    case 'kendra_room_4':
      enterKendraRoom_4(s, scene);
      break;
    case 'kendra_room_5':
      enterKendraRoom_5(s, scene);
      break;
    case 'kendra_room_6':
      enterKendraRoom_6(s, scene);
      break;
    case 'kendra_room_7':
      enterKendraRoom_7(s, scene);
      break;
    case 'kendra_room_8':
      enterKendraRoom_8(s, scene);
      break;
    case 'kendra_room_9':
      enterKendraRoom_9(s, scene);
      break;
    case 'kendra_room_10':
      enterKendraRoom_10(s, scene);
      break;
    case 'kendra_room_11':
      enterKendraRoom_11(s, scene);
      break;
    case 'kendra_couch':
      enterKendraCouch(s, scene);
      break;
    case 'kendra_bed':
      enterKendraBed(s, scene);
      break;
    case 'kendra_couch_strap':
      enterKendraCouchStrap(s, scene);
      break;
    case 'kendra_couch_strap_vag':
      enterKendraCouchStrapVag(s, scene);
      break;
    case 'kendra_couch_strap_anal':
      enterKendraCouchStrapAnal(s, scene);
      break;
    case 'kendra_bed_strap':
      enterKendraBedStrap(s, scene);
      break;
    case 'kendra_bed_strap_vag':
      enterKendraBedStrapVag(s, scene);
      break;
    case 'kendra_bed_strap_anal':
      enterKendraBedStrapAnal(s, scene);
      break;
    case 'kendra_gloryhole':
      enterKendraGloryhole(s, scene);
      break;
    case 'kendra_gloryhole_suck1':
      enterKendraGloryholeSuck1(s, scene);
      break;
    case 'kendra_gloryhole_suck1a':
      enterKendraGloryholeSuck1a(s, scene);
      break;
    case 'kendra_gloryhole_suck2':
      enterKendraGloryholeSuck2(s, scene);
      break;
    case 'kendra_gloryhole_suck2a':
      enterKendraGloryholeSuck2a(s, scene);
      break;
    case 'kendra_gloryhole_fuck':
      enterKendraGloryholeFuck(s, scene);
      break;
    case 'kendra_male_slave':
      enterKendraMaleSlave(s, scene);
      break;
    case 'kendra_petka':
      enterKendraPetka(s, scene);
      break;
    case 'kendra_petka1':
      enterKendraPetka1(s, scene);
      break;
    default:
      enterKendraRoomStart(s, scene);
      break;
  }
}

export const kendra: LocationDef = {
  name: 'kendra',
  title: 'There are two beds, one on each side of the window, along wi',
  region: 'other',
  locationType: 'event',
  description: ['There are two beds, one on each side of the window, along with various pictures and posters hanging on both sides of the room. A string of large lights hang from one of the walls and just down from the beds on each side are two desks, both decorated with slight differences. A small couch and two wardrobes are near the door.'],
  enter: enter,
};
