import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterEntrance(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'igorhome', 'entrance');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Igor Kruglov</b></center>');
  scene.img('images/characters/shared/headshots_main/big4.jpg');
  if (((s as any).IgorQW ?? 0)?.['Love'] > 0) {
    (s as any).temprand = (Math.floor(Math.random() * 10) + 1);
    if (((s as any).temprand ?? 0) === 1  &&  ((s as any).fedorKozlovQW ?? 0) >= 10) {
      // TODO-QSP: dynamic text: As you approach Igor, Fedor walks up beside you. "What are you doing with <<$pcs...
      scene.text(`As you approach Igor, Fedor walks up beside you. "What are you doing with ${((s as any).pcs_firstname || '')}, Igor? You know she's my girl, right?"`);
      scene.text('Igor looks surprised before he turns to you, looking sad. "I thought you were <i>my</i> girl?"');
      scene.text('Fedor\'s eyes narrow and he looks at you as well. "Are you cheating on me?!"');
      scene.text('Suddenly caught, you\'re not sure what to do. "It\'s not what it looks like!"');
      scene.text('Fedor\'s face hardens. "Then what is it? You\'re either cheating on me or you\'re not."');
      scene.actions([
        { label: 'Say you\'re not dating Igor', handler: (st: GameState) => {
    ((st as any).IgorQW = (st as any).IgorQW ?? {})['Love'] = (-1);
    ((st as any).IgorQW = (st as any).IgorQW ?? {})['Block'] = 1;
    ((st as any).IgorQW = (st as any).IgorQW ?? {})['Lover'] = (-1);
    qspCall(st, 'npc_relationship', 'set', 'A4', 20);
    qspCall(st, 'stat', '');
    scene.text('<center><b>Igor Kruglov</b></center>');
    scene.img('images/characters/shared/headshots_main/big5.jpg');
    scene.text('You shake your head at Fedor. "Of course not! We were just goint to study." You glance at Igor and notice he looks sad, but he nods at what you say.');
    scene.text('Fedor nods. "Okay… Well you better get going, Igor."');
    scene.text('With a distraught expression on his face, Igor takes one last look at you before turning around and walking away.');
    scene.actions([
      { label: 'Go with Fedor', goto: ['FedorEv', 'Start'] },
    ]);
  } },
        { label: 'Say you\'re dating Igor', handler: (st: GameState) => {
    (st as any).fedorkozqw = 0;
    (st as any).fedorKozlovQW = 0;
    (st as any).FedorLuv = 0;
    (st as any).fedorkozbreak = ((st as any).fedorkozbreak ?? 0) + (1);
    qspCall(st, 'npc_relationship', 'set', 'A5', 20);
    qspCall(st, 'stat', '');
    scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/fedorsad.jpg');
    scene.text('You glance at Igor, then at Fedor. "Yes, I\'m dating him. I\'m sorry."');
    scene.text('At first, Fedor looks angry and Igor starts to back up, fearful that Fedor might attack him. Thankfully, Fedor sighs and relaxes, looking rather sad.');
    scene.text('"Fine. Go be with him if that\'s what you want." He turns and walks away without another word.');
    scene.text('Once it\'s obvious he\'s not going to get his ass kicked, Igor smiles. "Come on. Let\'s go to my place."');
    scene.actions([
      { label: 'Go to Igor\'s house', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/walk_homeb1.jpg');
    scene.text('You follow Igor home. Once you get to his place, he nervously starts scrambling with the keys. He turns to you, nervously laughing…');
    scene.actions([
      { label: 'Walk around his home', goto: ['igorhome', 'hallway'] },
      { label: 'Go to his room', goto: ['igorhome', 'igorroom'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.text('Igor is waiting for you. "Do you want to come to my house?" he asks eagerly.');
      scene.actions([
        { label: 'Go to Igor\'s house', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/walk_homeb1.jpg');
    scene.text('You follow Igor home. Once you get to his place, he nervously starts scrambling with the keys. He turns to you, nervously laughing…');
    scene.actions([
      { label: 'Walk around his home', goto: ['igorhome', 'hallway'] },
      { label: 'Go to his room', goto: ['igorhome', 'igorroom'] },
    ]);
  } },
      ]);
    }
  } else {
    (s as any).temprand = (Math.floor(Math.random() * 10) + 1);
    if (((s as any).temprand ?? 0) === 1  &&  ((s as any).fedorKozlovQW ?? 0) >= 10) {
      // TODO-QSP: dynamic text: As you approach Igor, Fedor walks up beside you. "What are you doing with <<$pcs...
      scene.text(`As you approach Igor, Fedor walks up beside you. "What are you doing with ${((s as any).pcs_firstname || '')}, Igor? You know she's my girl, right?"`);
      scene.text('Igor downcasts his eyes. "Oh hey Fedor. We were just going to study… I\'ll just be going now."');
      scene.text('Fedor nods. "Yeah, that will be for the best. Catch you later, Igor."');
      scene.text('Igor takes one last look at you before turning around and walking away.');
      scene.actions([
        { label: 'Go with Fedor', handler: (st: GameState) => {
    ((st as any).IgorQW = (st as any).IgorQW ?? {})['Love'] = (-1);
    ((st as any).IgorQW = (st as any).IgorQW ?? {})['Block'] = 1;
    ((st as any).IgorQW = (st as any).IgorQW ?? {})['Lover'] = (-1);
    qspGoto(st, 'FedorEv', 'Start');
  } },
      ]);
    } else {
      scene.text('Igor is waiting for you. "You ready to go to do homework?" he asks eagerly.');
      scene.actions([
        { label: 'Go to Igor\'s house', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/walk_homeb1.jpg');
    scene.text('You follow Igor home. Once you get to his place, he unlocks the door and invites you in.');
    scene.actions([
      { label: 'Walk around his home', goto: ['igorhome', 'hallway'] },
      { label: 'Go to his room', goto: ['igorhome', 'igorroom'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'You don\'t have time today', goto: ['gschool_grounds', 'main'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterHallway(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'igorhome', 'hallway');
  (s as any).location_type = 'public_indoors';
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Entrance hall</b></center>');
  scene.img('images/locations/pavlovsk/resident/igorhome/kor.jpg');
  scene.text('This is the entrance hall to Igor\'s house, which leads to the other rooms in the house. It is tastefully decorated.');
  // TODO-QSP: end
  scene.actions([
    { label: '<b>Leave Igor\'s home</b>', goto: ['pav_residential', ''] },
    { label: 'Igor\'s Room', goto: ['igorhome', 'igorroom'] },
    { label: 'Bathroom', goto: ['igorhome', 'bathroom'] },
    { label: 'Igor\'s sister\'s room', goto: ['igorhome', 'sisterroom'] },
    { label: 'Living Room', goto: ['igorhome', 'livingroom'] },
    { label: 'Kitchen', goto: ['igorhome', 'kitchen'] },
    { label: 'Parents Room', goto: ['igorhome', 'igorparents'] },
  ]);
  scene.build();
}

function enterBathroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'igorhome', 'bathroom');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  (s as any).location_type = 'bathroom';
  scene.text('<center><b>Bathroom</b></center>');
  scene.img('images/locations/pavlovsk/resident/igorhome/vann.jpg');
  scene.text('The bathroom has a large sink area and tiled floors. The toilet sits along the far wall. There is also a walk-in shower and bathtub. It all looks very nice.');
  // TODO-QSP: dynamic text: You can do your hair and makeup in the <a href="exec:gt ''mirror'', ''start''">m...
  scene.text('You can do your hair and makeup in the <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">mirror</a> above the sink, where you can ' + ((((s as any).pcs_hairbsh ?? 0) < 1) ? ('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027brush/u0027); return false;">brush</a>') : ('brush')) + ' your hair.');
  qspCall(s, 'din_van', 'private');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the bathroom', goto: ['igorhome', 'hallway'] },
  ]);
  scene.build();
}

function enterIgorroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'igorhome', 'igorroom');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  (s as any).locclass = 'bedr';
  qspCall(s, 'igor_schedule', '');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Igor\'s Room</b></center>');
  scene.img('images/locations/pavlovsk/resident/igorhome/kom.jpg');
  scene.text('The room is surprisingly clean and organized for a boys room and is fairly tastefully decorated.');
  scene.text('In the center of the room against one wall is a single narrow bed. Against the opposite wall is a desk and a chair, with a computer sitting on the desk. Next to the desk is a bookshelf with a fairly large collection of books. Just below the shelves, leaning against the wall, rests a guitar.');
  if (((s as any).DimaLoveIgor ?? 0) > 1) {
    scene.text('Sitting on the bed is a Teddy Bear with a red heart in its little hands.');
  }
  scene.text('You see Igor sitting on the edge of his bed.');
  if (((s as any).lernHome ?? 0) > 0) {
    scene.actions([
      { label: 'Do your homework together', goto: ['igorhome', 'study'] },
    ]);
  }
  if (((s as any).hour ?? 0) === 23) {
    if (((s as any).IgorQW ?? 0)?.['Lover'] === 1) {
      scene.text('<center><b>Igor\'s Room</b></center>');
      scene.img('images/characters/pavlovsk/school/boy/igor/talkgf.jpg');
      scene.text('Igor looks at his watch. "If you stay any later, my mother will come in and make a fuss and talk about how unseemly it is for a boy to have a girl in his room this late."');
      scene.text('You nod. "I understand I guess I\'ll see you later."');
      scene.actions([
        { label: 'Say goodbye and go home', goto: ['pav_residential', ''] },
        { label: 'Kiss', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/kiss.mp4');
    scene.text('You lean in and give him a quick kiss. He\'s a bit surprised at first, but then returns it. Once you break the kiss, you leave.');
    scene.actions([
      { label: 'Say goodbye and go home', goto: ['pav_residential', ''] },
    ]);
  } },
      ]);
    } else {
      scene.text('<center><b>Igor\'s Room</b></center>');
      scene.img('images/characters/pavlovsk/school/boy/igor/talk.jpg');
      scene.text('You look at the clock before saying that it\'s really late and that you need to go home.');
      scene.actions([
        { label: 'Say goodbye and go home', goto: ['pav_residential', ''] },
      ]);
    }
  } else {
    if (((s as any).hour ?? 0) >= 20) {
      scene.text('<center><b>Igor\'s Room</b></center>');
      if (((s as any).IgorQW ?? 0)?.['Lover'] === 1) {
        scene.img('images/characters/pavlovsk/school/boy/igor/talkgf.jpg');
      } else {
        scene.img('images/characters/pavlovsk/school/boy/igor/talk.jpg');
      }
      if (((s as any).locat ?? 0)?.['igor'] === 8) {
        scene.text('Igor looks at his watch. "I want to have fun tonight. Let\'s go to the disco!"');
        scene.actions([
          { label: 'Agree', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    // TODO-QSP: !! if they are dating I will add a new version but have not ...
  }, goto: ['pav_disco', ''] },
          { label: 'Decline and go home', goto: ['pav_residential', ''] },
          { label: 'Decline and chat instead', goto: ['igorhome', 'chat'] },
        ]);
      } else {
        scene.text('Igor tells you it\'s getting late. You could take the hint and leave or maybe chat just a little longer…');
        scene.actions([
          { label: 'Take the hint and go home', goto: ['pav_residential', ''] },
          { label: 'Chat just a little longer', goto: ['igorhome', 'chat'] },
        ]);
      }
    } else {
      if (((s as any).locat ?? 0)?.['igor'] === 10) {
        scene.text('<center><b>Igor\'s Room</b></center>');
        if (((s as any).IgorQW ?? 0)?.['Lover'] === 1) {
          scene.img('images/characters/pavlovsk/school/boy/igor/talkgf.jpg');
        } else {
          scene.img('images/characters/pavlovsk/school/boy/igor/talk.jpg');
        }
        scene.text('"The others are meeting at the beach right now. Let\'s go meet them," he says.');
        scene.actions([
          { label: 'Go to the beach with Igor', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['pav_lake', 'school_mates'] },
          { label: 'Say you don\'t want to go and leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave Igor\'s room', goto: ['igorhome', 'hallway'] },
    { label: 'Excuse yourself', goto: ['igorhome', 'hallway'] },
    { label: 'Chat', goto: ['igorhome', 'chat'] },
  ]);
  scene.build();
}

function enterChat(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A4', 'like', 1, 'home');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Igor\'s Room</b></center>');
  if (((s as any).IgorQW ?? 0)?.['Lover'] === 1) {
    scene.img('images/characters/pavlovsk/school/boy/igor/talkgf.jpg');
  } else {
    scene.img('images/characters/pavlovsk/school/boy/igor/talk.jpg');
  }
  if (((s as any).npc_rel ?? 0)?.['A4'] > 50) {
    (s as any).i = (Math.floor(Math.random() * 11) + 0);
  } else {
    (s as any).i = (Math.floor(Math.random() * 7) + 0);
  }
  scene.text('You spend some time talking with Igor.');
  if ((!((s as any).i ?? 0))) {
    scene.text('You talk about school, classes, teachers and how fucked up the system is.');
  } else {
    if (((s as any).i ?? 0) === 1) {
      scene.text('You talk about what you both want to do after high school.');
    } else {
      if (((s as any).i ?? 0) === 2) {
        scene.text('You listen as he tells you some interesting local history. You realize that Igor really knows the history of Pavlovsk.');
      } else {
        if (((s as any).i ?? 0) === 3) {
          scene.text('You both talk about nothing in particular.');
        } else {
          if (((s as any).i ?? 0) === 4) {
            scene.text('Igor tells you that his parents promised to buy him a new car if he gets into the University.');
          } else {
            if (((s as any).i ?? 0) === 5) {
              scene.text('You learn from the conversation that Igor\'s parents are quite wealthy, owning several businesses and homes around town.');
            } else {
              if (((s as any).i ?? 0) === 6) {
                scene.text('Igor talks about his older sister. "She buys new clothes every week, but I\'m sure she hasn\'t worn half of them yet!"');
                (s as any).sisunlock = 1;
              } else {
                if (((s as any).i ?? 0) === 7) {
                  scene.text('You talk about a cute outfit you seen the other day, which leads to a long conversation about girls clothes, a subject in which Igor is surprisingly well versed.');
                } else {
                  if (((s as any).i ?? 0) === 8) {
                    scene.text('You talk about makeup and Igor asks you a lot of in depth questions.');
                  } else {
                    if (((s as any).i ?? 0) === 9) {
                      scene.text('You talk about the boys at school, which turns into you talking about which ones you think are cute. Igor happily joins in, though he thinks Dimka is the cutest boy in school.');
                    } else {
                      if (((s as any).i ?? 0) === 10) {
                        ((s as any).IgorQW = (s as any).IgorQW ?? {})['bi_curious'] = 1;
                        scene.text('As you talk about various things, Igor suddenly asks what it\'s like being a girl. You start telling him and he ends up asking a lot of questions. More than a few of them are sexual in nature, but not in a weird way; he just seems really curious.');
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).sisunlock ?? 0) === 1  &&  ((s as any).IgorQW ?? 0)?.['eqwtday'] !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Clothes', handler: (st: GameState) => {
    scene.text('"So your sister has that many clothes?" you ask.');
    scene.text('He nods his head vigorously. "Hell yeah, it\'s crazy! She has more clothes than some stores!"');
    scene.text('You grin at him. "Think I could see them?"');
    scene.text('He rolls his eyes. "What is it with girls and clothes? Come on."');
    scene.text('He gets up and leads you to his sister\'s room.');
    scene.actions([
      { label: 'Continue', goto: ['igorev', 'din_sisterkom'] },
    ]);
  } },
    ]);
  }
  if (((s as any).IgorQW ?? 0)?.['Lover'] === 1) {
    scene.actions([
      { label: 'Kiss', goto: ['igorev', 'kiss'] },
      { label: 'Date', handler: (st: GameState) => {
    scene.text('<center><b>Igor\'s Room</b></center>');
    if (((st as any).IgorQW ?? 0)?.['Lover'] === 1) {
      scene.img('images/characters/pavlovsk/school/boy/igor/talkgf.jpg');
    } else {
      scene.img('images/characters/pavlovsk/school/boy/igor/talk.jpg');
    }
    scene.text('"Let\'s go see a movie, my treat," he says.');
    scene.actions([
      { label: 'Agree', goto: ['igorev', 'Movies'] },
      { label: 'Decline', handler: (st: GameState) => {
    scene.text('<center><b>Igor\'s Room</b></center>');
    if (((st as any).IgorQW ?? 0)?.['Lover'] === 1) {
      scene.img('images/characters/pavlovsk/school/boy/igor/talkgf.jpg');
    } else {
      scene.img('images/characters/pavlovsk/school/boy/igor/talk.jpg');
    }
    scene.text('You shake your head. "I\'d rather just stay here."');
    scene.text('He just nods and smiles.');
    scene.actions([
      { label: 'Continue', goto: ['igorhome', 'chat'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).mc_inventory ?? 0)?.['strapon'] > 0  &&  ((s as any).IgorQW ?? 0)?.['strap'] >= 1) {
    scene.actions([
      { label: 'Be my bitch', goto: ['igorsex', 'strap on'] },
    ]);
  }
  if (((s as any).IgorQW ?? 0)?.['crossdress'] === 1) {
    scene.actions([
      { label: 'Let\'s go for walk', goto: ['igorev', 'walk'] },
    ]);
  }
  if ((((s as any).IgorQW ?? 0)?.['DimaNos'] === 2  ||  ((s as any).IgorQW ?? 0)?.['DimaNos'] === 3)  &&  ((s as any).IgorQW ?? 0)?.['DimaNos_day'] < ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'How was your date?', handler: (st: GameState) => {
    // TODO-QSP: gt 'igorev', 'Ask about Diana''s date'
  } },
    ]);
  }
  if (((s as any).IgorQW ?? 0)?.['Love'] === 1) {
    scene.actions([
      { label: 'Break up with him', handler: (st: GameState) => {
    ((st as any).IgorQW = (st as any).IgorQW ?? {})['Love'] = (-1);
    ((st as any).IgorQW = (st as any).IgorQW ?? {})['Block'] = 1;
    ((st as any).IgorQW = (st as any).IgorQW ?? {})['Lover'] = (-1);
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'npc_relationship', 'modify', 'A4', (-30));
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/artemcry.jpg');
    scene.text('You quietly walk past Igor and enter his room. You sit down on the bed without saying a word.');
    // TODO-QSP: dynamic text: Igor looks at you questioningly. "What''s wrong, <<$pcs_nickname>>?"
    scene.text(`Igor looks at you questioningly. "What's wrong, ${((st as any).pcs_nickname || '')}?"`);
    scene.text('You frown as you look at him. "We need to talk."');
    scene.text('His eyes start to water up. "Are you breaking up with me?"');
    scene.text('You sigh. "Yes."');
    scene.text('A tear rolls down his cheek. "Why?"');
    scene.text('You get up to put a little space between you. "It\'s not you… I just don\'t feel the same way about you any more."');
    scene.text('he sniffles and takes a deep breath. "Is it someone else?"');
    scene.text('You shake your head. "Look, you\'re a great guy; I just feel differently now is all."');
    scene.text('You talk for a few minutes before he gets up and walks across the room. "I think you should leave, please."');
    scene.text('You sigh and nod. "Okay. I\'m really sorry."');
    scene.text('As you walk out, Igor keeps his back to you. You\'re sure that you hear him crying harder as you exit the room.');
    scene.actions([
      { label: 'Leave his home', goto: ['pav_residential', ''] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep talking', goto: ['igorhome', 'chat'] },
    { label: 'Excuse yourself', goto: ['igorhome', 'hallway'] },
  ]);
  scene.build();
}

function enterStudy(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'npc_relationship', 'modify', 'A4', 'like');
  if (((s as any).lernHome ?? 0) > 1) {
    qspCall(s, 'grades', 'homework', 'school', 'yes', 2, 1, 'A4');
  } else {
    qspCall(s, 'grades', 'homework', 'school', 'yes', 1, 1, 'A4');
  }
  qspCall(s, 'stat', '');
  scene.text('<center><b>Igor\'s Room</b></center>');
  scene.img('images/characters/pavlovsk/school/boy/igor/study.jpg');
  scene.text('You sit next to Igor as he pulls out his books and notes. He\'s a very good tutor and you learn a lot by studying with him.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave Igor\'s room', goto: ['igorhome', 'hallway'] },
    { label: 'Chat', goto: ['igorhome', 'chat'] },
    { label: 'Study more', goto: ['igorhome', 'study'] },
    { label: 'Excuse yourself', goto: ['igorhome', 'hallway'] },
  ]);
  scene.build();
}

function enterSisterroom(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Igor\'s sister\'s room</b></center>');
  scene.img('images/locations/pavlovsk/resident/igorhome/komsister.jpg');
  scene.text('The room looks very different from Igor\'s room.');
  scene.text('It\'s fairly messy and unorganized; clothes lie scattered about in various piles, drawers lie half open and the bed is unmade and half buried in clothes.');
  scene.text('It seems his sister is the slob of the family.');
  if (((s as any).kanikuli ?? 0) > 0  &&  ((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 18) {
    scene.text('You see Galina laying on her bed using her phone. You don\'t think she\'s noticed you yet.');
    if (((s as any).IgorQW ?? 0)?.['sis_meet'] === 0) {
      scene.actions([
        { label: 'Talk', handler: (st: GameState) => {
    ((st as any).IgorQW = (st as any).IgorQW ?? {})['sis_meet'] = 1;
    scene.img('images/locations/pavlovsk/resident/igorhome/sister.jpg');
    if (((st as any).IgorQW ?? 0)?.['with'] === 0) {
      scene.text('"Oh, hi! I didn\'t think anyone would be here," you say, not expecting anyone to be there.');
      scene.text('"Hello," she answers back. Without wasting any time, she immediately fires away. "And who might you be? I don\'t think I\'ve seen you here before," she snarkly remarks.');
      scene.text('"I\'m sorry… There usually isn\'t anyone around," you say, ashamed.');
      if (((st as any).month ?? 0) > 5  &&  ((st as any).month ?? 0) < 9) {
        scene.text('"Well, I\'m off for the summer so I came back home to relax for a while before heading back."');
      } else {
        scene.text('"It\'s the holidays, so I wanted to spend some time with the family before heading back to the University."');
      }
      scene.actions([
        { label: 'So you\'re Igor\'s sister?', handler: (st: GameState) => {
    scene.text('Looking wide-eyed at her, you ask if she\'s Igor\'s sister.');
    scene.text('"Yeah, my name is Galina. Who might you be?"');
    // TODO-QSP: dynamic text: "I''m <<$pcs_nickname>>, one of Igor''s classmates," you say, trying to be as va...
    scene.text(`"I'm ${((st as any).pcs_nickname || '')}, one of Igor's classmates," you say, trying to be as vague as possible as you still don't know how Galina will react.`);
    scene.text('"That\'s great news!" she exclaims. "I\'m so glad that Igor finally got a female friend. I\'ve been waiting for this day for a long time," she grins.');
    scene.actions([
      { label: 'How come?', handler: (st: GameState) => {
    scene.text('You look at her, a little confused. "How come? Igor is great and gentle…"');
    scene.text('"Well, I don\'t want to denigrate my little brother, but he lacks confidence and is quite shy. And he\'s always following that boy around like a little puppy."');
    scene.actions([
      { label: 'Dimka?', handler: (st: GameState) => {
    scene.text('"Yes, that\'s his name! He\'s a creep and I think he\'s a really bad influence on my brother. I\'ve caught him several times over the years spying on me when I was changing or taking a shower."');
    if ((!((st as any).dimaFilm ?? 0))) {
      scene.text('You\'re a bit taken aback by the relevation. "I didn\'t know that Dimka was like that…"');
      scene.text('Galina looks serious as she tells you to keep a close eye on him as you can\'t trust him.');
      scene.text('You decide to defend Dimka. "I don\'t get that vibe from him. I can only speak for myself, but Dimka has always been good to me and has never done me any harm…"');
      scene.text('"Believe me, I wish I was lying… That\'s why I was always hoping that Igor would meet and enjoy someone else\'s company. It would push him in another direction. I want him to become looser since he\'s soon going to university soon and if he doesn\'t change his attitude he\'s going to get eaten up there."');
    } else {
      scene.text('You look down on the floor, ashamed about what you\'re about to tell Galina. "I know what you mean. That creep hid a camera in his room and taped me having sex with him."');
      scene.text('Galina takes pity on you. "You must feel awful. I need to tell Igor about this. There\'s no way he\'s getting away with this…"');
      scene.text('"No, please don\'t tell Igor! I don\'t want it to damage my relationship with him."');
      scene.text('Galina reassures you. "Don\'t worry. I won\'t tell. I appreciate your honesty and I\'d rather have Igor hanging out with you than that slimeball. Igor\'s going to university soon, so it\'s good for him to socialize with different people."');
    }
    scene.actions([
      { label: 'How is the university?', handler: (st: GameState) => {
    scene.text('You eagerly ask her questions about classes and if the party rumors are true.');
    scene.text('Galina smiles and tells you that she loves attending the university, especially since she can party all the time and have fun without being scrutinized by her mother.');
    scene.text('"I\'m also doing fine grade wise, I think. It depends who you ask, but I guess it could always be better…" she laughs.');
    scene.actions([
      { label: 'Tell her the reason you were in her room', handler: (st: GameState) => {
    scene.text('You take a deep breath and tell Galina that the reason you visited her room was because you love her fashion style and that you can\'t help but sneak into her room.');
    scene.text('Once again she laughs, telling you she gets the inspiration from the fashion magazines.');
    scene.text('"I\'ll let you in on a little secret…" she says. "You\'re not the only one going through my outfits. My dear little brother is also doing the same thing, the perverted little bastard… Please don\'t mention it to him, he\'s just a teenage boy going through a phase in life."');
    scene.text('You promise you won\'t mention it to anyone, not wanting to make Igor feel bad.');
    scene.actions([
      { label: 'Leave', goto: ['igorhome', 'hallway'] },
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
    } else {
      if (((st as any).IgorQW ?? 0)?.['with'] === 1) {
        scene.text('"G-Galina, may I enter your room?" Igor quietly asks.');
        scene.text('She sighs as if she wants to say no to him, but smiles when she notices you.');
        scene.text('"Sure, little brother. Come in, come in. Who\'s your female friend? Don\'t tell me that you\'ve got yourself a girlfriend?"');
        scene.actions([
          { label: 'This is…', handler: (st: GameState) => {
    if (((st as any).IgorQW ?? 0)?.['Lover'] === 1) {
      // TODO-QSP: dynamic text: "This is m-my girlfriend, <<$pcs_nickname>>. We''ve been dating for a while."
      scene.text(`"This is m-my girlfriend, ${((st as any).pcs_nickname || '')}. We've been dating for a while."`);
      scene.text('"I\'m so happy for you. It was about time you got yourself a girlfriend. I was getting worried about you being fascinated with girly stuff, especially after I caught you looking through my clothes and reading girly magazines. I thought you were interested in those things."');
      scene.text('Igor blushes. "T-that\'s not true at all!" he angrily replies "Why are you lying? Are you trying to destroy my relationship?"');
      scene.text('"I didn\'t know what to think! I mean I didn\'t see you hooking up with other girls… No need to get all defensive about it. I\'m sure your girlfriend won\'t mind."');
      scene.actions([
        { label: 'I don\'t really mind', handler: (st: GameState) => {
    scene.text('Not knowing if Galina is telling the truth or not, you try to defuse the tense situation. "I really don\'t care…"');
    scene.text('"Not you too… I haven\'t been doing anything like that! She\'s clearly lying!" Igor says a little too defensively.');
    scene.text('"Sheesh, you\'re so sensitive! I was only kidding," Galina laughs.');
    scene.text('Igor calms down a little, but he\'s still upset. As Galina doesn\'t want to keep on teasing him, she turns to you.');
    scene.actions([
      { label: 'Listen to her', handler: (st: GameState) => {
    scene.text('"I don\'t know if you\'ve met our parents yet? They\'re really nice… My mother is a control freak and she has my father wrapped around her little finger."');
    scene.text('Before you\'re able to answer, Igor speaks up.');
    scene.text('"You really shouldn\'t be talking about our parents that way. You know they\'ve always done everything for you."');
    scene.actions([
      { label: 'Step in', handler: (st: GameState) => {
    scene.text('Tired of hearing them bickering, you ask Galina what attending the university is like.');
    scene.text('She gleams as she tells you that she\'s having the best time of her life. "There are lots of interesting stuff going on all the time. And don\'t get me started on all the parties going on."');
    scene.text('"Sounds like great fun. I look forward to the experience."');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.text('"Are you still pouting?" Galina asks Igor.');
    scene.text('Igor refuses to answer.');
    scene.text('"Well, if you\'re going to act like that you might as well leave my room."');
    scene.text('Igor rolls his eyes and turns away towards the door, leaving the room.');
    scene.text('"And stay out my room, you little creep!"');
    scene.text('You wave goodbye to Galina as you try to catch up with Igor.');
    scene.actions([
      { label: 'Leave the room', goto: ['igorhome', 'hallway'] },
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
      scene.text('Igor walks up to his sister, with you following him close behind.');
      scene.text('"Hi Galina. I\'d like to introduce you to this girl from my school."');
      scene.text('"Well, well… Not bad, little brother. And who might you be?"');
      scene.actions([
        { label: 'Introduce yourself', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "I''m <<$pcs_nickname>>. Nice to meet you."
    scene.text(`"I'm ${((st as any).pcs_nickname || '')}. Nice to meet you."`);
    scene.text('Galina looks at you, inspecting you from head to toe.');
    scene.text('"Nice to meet you too," she says with a smile. "Nice to see you with a girl, Igor. So tell me. Are the two of you dating?"');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.text('The two of you look at each other, shaking your heads.');
    scene.text('"No, we\'re only friends," Igor replies. "We\'re doing a school project together."');
    scene.text('"That\'s too bad. I was hoping that you had gotten yourself a girlfriend."');
    scene.text('Igor starts blushing as Galina mentions that the two of you would be a cute couple.');
    scene.actions([
      { label: 'Intermeddle', handler: (st: GameState) => {
    scene.text('"You never know what might happen. We\'re just taking it slowly."');
    scene.text('"I\'m quite protective of my little brother as he\'s shy and quiet. And I know he\'s being used by his friend."');
    scene.actions([
      { label: 'Dimka?', handler: (st: GameState) => {
    scene.text('"Yeah, that little creep. I\'ve caught him several times over the years spying on me when I was changing or taking a shower. He\'s also dragging Igor around into all kinds of troubles, using him…"');
    if ((!((st as any).dimaFilm ?? 0))) {
      scene.text('"I can\'t believe that Dimka is like that, I\'ve only got good things to say about him," you say, defending Dimka.');
      scene.text('Igor also speaks up, defending his friend. "Dimka\'s always been a good friend to me. He never caused me any harm, so I think you should stop bad mouthing him…"');
    } else {
      scene.text('"I wholeheartedly agree," you say.');
      scene.text('Igor seems upset that you\'re on Galina\'s side. "How do you know that he\'s a creep?"');
      scene.text('"I\'ve heard from several girls at school that Dimka likes to take girls home and make them do strange stuff," you tell him, not wanting to reveal any details about you and Dimka\'s relationship.');
      scene.text('"Well I for one don\'t believe you," he replies. "I spend a lot of time with him and he\'s never done anything like that. People are jealous of Dimka and only want to destroy his reputation."');
    }
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.text('"Never mind. I\'m really happy that Igor got a new friend. Hopefully he\'ll break away from Dimka."');
    scene.text('"Don\'t be like that, sis. Dimka is my only real friend…" Igor says before he looks at you, wanting to move on.');
    scene.text('You nod before turning to Galina. "It was really fun getting to know you. I look forward seeing you again."');
    scene.text('"You too. Just don\'t hurt my brother or you\'ll have to deal with me," Galina says with a serious stare, causing you take a step back.');
    scene.text('"I\'m only kidding," she laughs. "Don\'t be afraid."');
    scene.actions([
      { label: 'Leave the room', goto: ['igorhome', 'hallway'] },
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
  } },
        ]);
      }
    }
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['igorhome', 'hallway'] },
  ]);
  scene.build();
}

function enterLivingroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'igorhome', 'livingroom');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  (s as any).locclass = 'livingr';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Living room</b></center>');
  scene.img('images/locations/pavlovsk/resident/igorhome/livingroom.jpg');
  scene.text('The room is very clean and neat. Everything is perfectly in place and the furniture is all very nice. There are several very large windows giving a great view of the lawn while a very nice flatscreen TV sits in the corner.');
  if (((s as any).IgorQW ?? 0)?.['met_dad'] === 0  &&  ((((s as any).hour ?? 0) >= 18  &&  ((s as any).hour ?? 0) <= 22  &&  ((s as any).week ?? 0) >= 1  &&  ((s as any).week ?? 0) <= 5)  ||  (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 22  &&  ((s as any).week ?? 0) >= 6  &&  ((s as any).week ?? 0) <= 7))) {
    scene.text('You see Igor\'s father Gemorgen watching TV. You don\'t think he\'s noticed you yet.');
    if (((s as any).IgorQW ?? 0)?.['with'] === 0) {
      if (((s as any).pcs_hotcat ?? 0) > 5) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLivingroom1(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLivingroom2(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    } else {
      if (((s as any).pcs_hotcat ?? 0) > 5) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLivingroom3(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLivingroom4(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    }
  } else {
    scene.actions([
      { label: 'Leave the living room', goto: ['igorhome', 'hallway'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterLivingroom1(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Talk', handler: (st: GameState) => {
    ((st as any).IgorQW = (st as any).IgorQW ?? {})['met_dad'] = 1;
    scene.img('images/locations/pavlovsk/resident/igorhome/father.jpg');
    scene.text('As you walk into the living room, Igor\'s father throws a glance at you, immediately turning down the volume on the TV as he turns his attention towards you.');
    scene.text('"Hi, I\'m Gemorgen. Who might you be? Are you Galina\'s university friend?"');
    // TODO-QSP: dynamic text: "Hi. I''m <<$pcs_nickname>>, and I''m actually Igor''s friend from school."
    scene.text(`"Hi. I'm ${((st as any).pcs_nickname || '')}, and I'm actually Igor's friend from school."`);
    scene.text('He looks at you in amazement, seemingly baffled that his son has befriended a girl.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.text('"I didn\'t know my son was friends with such a beautiful girl," Gemorgen compliments you.');
    scene.text('You thank him for his compliment, feeling yourself blush as he continues.');
    scene.text('"No, honestly. My daughter has had some of her attractive friends over, but I\'ve yet to see a beauty like yourself…"');
    scene.text('You immediately feel creeped out and begin steering the conversation in another direction.');
    scene.actions([
      { label: 'What do you do for a living?', handler: (st: GameState) => {
    scene.text('His eyes gleam before he proudly tells you some boring accountant stories.');
    scene.text('Not wanting to be rude, you keep listening, sometimes catching yourself having drifted away to a faraway place.');
    scene.text('As he finishes talking, he refocuses on you again. "I\'m probably boring you with my stories, so tell me. How did a beauty like you become friends with my son?"');
    scene.actions([
      { label: 'Answer him', handler: (st: GameState) => {
    scene.text('"Well, we have an assignment in history and I knew Igor is a history buff, so it was only natural to ask him."');
    scene.text('He looks at you with a smile. "A beautiful girl like you doesn\'t need to succeed in school. You\'ll manage just fine in life with your good looks."');
    scene.text('"I just wish Igor was a bit manlier. He\'s not an ugly kid and he\'s doing quite well in school, so I don\'t understand why he\'s so bad with girls. When I was younger, I was with girls all the time. Don\'t get me wrong, but if I was your age, I\'d be trying to get in your panties."');
    scene.text('You attempt to defend Igor. "Everyone is different. Igor is considerate, funny and attractive, so I\'m sure he\'ll meet someone."');
    scene.text('"I don\'t want to put you on the spot and I think I know the answer, but does my son have any chance with you?"');
    if (((st as any).IgorQW ?? 0)?.['Lover'] > 0) {
      scene.actions([
        { label: 'Actually…', handler: (st: GameState) => {
    scene.text('"Well, we meant to keep this a secret and reveal it together, but I\'ll let you in on something…" you tease Gemorgen.');
    scene.text('Gemorgen looks at you confused, not saying anything as he waits for you to continue.');
    scene.text('"Igor and I are a couple. We\'ve been together for a while now."');
    scene.text('Gemorgen lightens up, widely grinning. "He finally got himself a real girlfriend, one who\'s really attractive I might add. I\'m so proud of him. I hope you teach him a thing or two…"');
    if (((st as any).npc_had_sex ?? 0)?.['A4']) {
      scene.text('"We\'re getting there. He\'s really inexperienced, so I\'m doing my best. Hopefully you\'ll notice a change in him soon…"');
      scene.text('"I hope he\'ll get out of his shell. I\'m sure the two of you will have a great relationship."');
      scene.text('You finish by saying that if Igor has any questions, you\'ll make sure to send him Gemorgen\'s way.');
      scene.actions([
        { label: 'Leave the living room', goto: ['igorhome', 'hallway'] },
      ]);
    } else {
      if (((st as any).stat ?? 0)?.['think_virgin'] === 0) {
        scene.text('"I hope something will happen soon since he\'s been avoiding the best part of our relationship…" you say, a bit discouraged.');
        scene.text('"Don\'t worry, I\'ll have a talk with him. He\'s as innocent as a little lamb. He probably doesn\'t know how to make a move."');
        scene.text('You begin thanking him, but he stops you and says he should be thanking you as he never thought Igor would end up with a girl as attractive as you.');
        scene.actions([
          { label: 'Leave the living room', goto: ['igorhome', 'hallway'] },
        ]);
      } else {
        scene.text('"No. Just because I look a certain way doesn\'t mean I\'ve had sex yet. I\'m still a virgin and I\'m not ready yet. Maybe some day, but not right now."');
        scene.text('Gemorgen says he respects your decision and won\'t pressure either of you, but he secretly hopes you\'ll reconsider…');
        scene.actions([
          { label: 'Leave the living room', goto: ['igorhome', 'hallway'] },
        ]);
      }
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Well…', handler: (st: GameState) => {
    scene.text('"You never know. I kind of like that Igor isn\'t that manly. Those guys are usually the biggest jerks…" you say, not wanting to hurt his feelings.');
    scene.text('"It\'s all in Igor\'s hands then…" He looks at you, resigned.');
    scene.text('"If you\'ll excuse me, I should probably head back to Igor. He\'s probably wondering where I am."');
    scene.actions([
      { label: 'Leave the living room', goto: ['igorhome', 'hallway'] },
    ]);
  } },
      { label: 'There\'s a chance, but…', handler: (st: GameState) => {
    scene.text('"I want Igor to take the first step. I expect him to swoosh me off the ground."');
    scene.text('"I wouldn\'t get your hopes up. It might be for the best if you took the first step, you know, just to loosen him up and make him more confident in himself, but I\'ll have a talk with him. Maybe he\'ll actually listen to my advice for once…"');
    scene.text('Feeling happy about what you\'ve just heard, you tell him that you need to return to Igor. You can\'t wait for them to have that talk…');
    scene.actions([
      { label: 'Leave the living room', goto: ['igorhome', 'hallway'] },
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

function enterLivingroom2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Talk', handler: (st: GameState) => {
    ((st as any).IgorQW = (st as any).IgorQW ?? {})['met_dad'] = 1;
    scene.img('images/locations/pavlovsk/resident/igorhome/father.jpg');
    scene.text('As you walk into the living room, Igor\'s father throws a glance at you and immediately turns down the volume on the TV as he turns his attention towards you.');
    scene.text('"Hi, I\'m Gemorgen. Who might you be? Are you Galina\'s university friend?"');
    // TODO-QSP: dynamic text: "Hi. I''m <<$pcs_nickname>>, and I''m actually Igor''s friend from school."
    scene.text(`"Hi. I'm ${((st as any).pcs_nickname || '')}, and I'm actually Igor's friend from school."`);
    scene.text('He looks at you in amazement, seemingly baffled that his son has befriended a girl.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.text('"I\'m really glad to see that my son has a female friend. It\'s not often that I get to say that," he says jokingly.');
    scene.text('"I don\'t believe you…" you answer in disbelief. "An attractive boy like Igor must have lots of girls over…"');
    scene.text('"I wish that was the truth…" he says. "I really hope that he\'ll step out of his shell when it comes to the fairer sex."');
    scene.actions([
      { label: 'Change subject', handler: (st: GameState) => {
    scene.text('"I don\'t mean to pry, but I have to say that I love your home. You must be really well-off."');
    scene.text('Gemorgen looks at you, a bit bothered by your brashness, but still answers that he\'s really proud of his job as an accountant and that both of the adults are working, so he can\'t really complain.');
    scene.text('You sincerely listen to him. As he finishes, you tell him that you\'re sure Igor will follow in his footsteps.');
    if (((st as any).IgorQW ?? 0)?.['Lover'] > 0) {
      scene.actions([
        { label: 'Well…', handler: (st: GameState) => {
    scene.text('"I know Igor wanted to tell you about this himself, but I might as well tell you. We\'re dating," you say shyly.');
    scene.text('"That\'s great news! I think you\'ll be good for Igor, a perfect first girlfriend that he can practice on."');
    scene.text('You\'re offended by his remark, but decide not to say anything, not wanting to argue with him.');
    scene.actions([
      { label: 'Leave the living room', goto: ['igorhome', 'hallway'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.text('Gemorgen replies with a troubled expression. "I\'m not so sure about that. The business world is rough and you have to be confident when dealing with money. You\'ve got to be upfront with your clients so they respect you. Unfortunately, this is a trait that Igor is missing…"');
    scene.text('"Igor doesn\'t need all those traits. He\'s really kind and got a big heart," you say, trying to cheer him up.');
    scene.text('Gemorgen dismisses you. "Igor must become manlier. Look at the other boys his age. They\'re far more calculating."');
    scene.actions([
      { label: 'Dimka?', handler: (st: GameState) => {
    scene.text('"Yes, exactly like Dimka. I don\'t think he\'s a good influence on my son, but that\'s just because Igor\'s a pushover. If he had more confidence, I\'m sure that Dimka would have been long gone."');
    scene.text('"I don\'t really know about that," you reply. "I\'ve seen them at school and they\'re really close."');
    scene.text('Gemorgen is clearly annoyed. "Like I said, I think Igor would be better off without Dimka. I don\'t trust that boy."');
    scene.actions([
      { label: 'Time to head back', handler: (st: GameState) => {
    scene.text('You don\'t want to anger Gemorgen further, so you finish the conversation by saying you need to head back to Igor.');
    scene.text('As you\'re about to leave, Gemorgen looks you in the eye and tells you that he wouldn\'t mind if you and Igor became a couple. "If only you could touch-up your looks a bit, then I wouldn\'t mind the two of you together. I really want Igor to hook up with a hot girl."');
    scene.text('You take great offence hearing that, and begin cussing him for being so insensitive, especially as his son is no better…');
    scene.text('"I\'m sorry, I didn\'t mean it to come out that way. I guess I\'m just too excited that a girl was hanging out with my son. And to be frank, it doesn\'t hurt anyone to do a little touch-up, even the prettiest girls do it."');
    scene.text('You turn around and leave the room, upset and wanting to get away from him.');
    scene.actions([
      { label: 'Leave the livingroom', goto: ['igorhome', 'hallway'] },
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

function enterLivingroom3(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Talk', handler: (st: GameState) => {
    ((st as any).IgorQW = (st as any).IgorQW ?? {})['met_dad'] = 1;
    scene.text('As the two of you walk into the living room, the father turns his attention from the TV towards the two of you.');
    scene.text('"My my, who do we have here? Come on son, introduce me to your beautiful friend."');
    // TODO-QSP: dynamic text: Igor mumbles something to his father, so you take charge instead. "Hello, I''m <...
    scene.text(`Igor mumbles something to his father, so you take charge instead. "Hello, I'm ${((st as any).pcs_nickname || '')}."`);
    scene.text('"Gemorgen," he replies with a smile. "You\'re such a true beauty, a real gem. Have you had the pleasure of meeting my wife? I wonder how she reacted when she saw you?" he says with a laugh. "She can be quite overbearing when it comes to Igor."');
    if (((st as any).IgorQW ?? 0)?.['met_mother'] === 1) {
      scene.actions([
        { label: 'I\'ve met her', handler: (st: GameState) => {
    scene.text('"It was really interesting, I could probably get along with her, but she needs to stop with the disapproving attitude."');
    scene.text('"I\'m truly sorry you had to experience that side of my wife. She likes to keep up an illusion as if she\'s mother Theresa or something. Back in the day, we would get up to all sorts of trouble."');
  } },
      ]);
    } else {
      scene.actions([
        { label: 'I haven\'t had the pleasure yet', handler: (st: GameState) => {
    scene.text('Gemorgen looks at you laughing, "Maybe it\'s for the best. She can be quite a handful when it comes to a certain kind of girl…"');
    scene.text('The two of you laugh as Gemorgen hints that his wife feels threatened when someone more beautiful comes visits them.');
  } },
      ]);
    }
    scene.actions([
      { label: 'You hear a sigh', handler: (st: GameState) => {
    scene.text('Igor is clearly dissatisfied with how his father is acting, telling him that he shouldn\'t be talking about his wife the way he does in front of strangers.');
    scene.text('Gemorgen quickly responds by saying that he\'s only joking before suddenly asking Igor if the two of you are dating.');
    scene.text('Igor visibly blushes and shakes his head. "We\'re just friends."');
    scene.text('"You need to be upfront, son. Look at her! You might never get another shot with a girl like this. Don\'t let this one off the hook."');
    if (((st as any).IgorQW ?? 0)?.['Lover'] > 0) {
      scene.actions([
        { label: 'Should we tell him?', handler: (st: GameState) => {
    scene.text('You and Igor look at each other before you nod. Igor takes a deep breath and tells his father that the two of you are dating.');
    scene.text('"That\'s the best news I\'ve heard this week! You\'ve really picked an attractive girl. I knew you had it in you. So tell me, have you had the chance to bang your pretty girlfriend yet?"');
    scene.text('Igor looks stunned, not knowing what to say. He looks at you, asking to help him out…');
    if (((st as any).npc_had_sex ?? 0)?.['A4']) {
      scene.text('"Well, you could say that the two of us have had some good moments," you reply while smiling at Igor. "Since Igor is inexperienced, we\'re taking it slow, but I\'m positive he\'ll improve…"');
      scene.text('"Well, I\'m sure you\'re quite the teacher… I\'m just glad Igor has found someone to look after him."');
      scene.text('You wink at Gemorgen before you grab Igor by the arm, and the two of you leave the living room, feeling relieved that you\'ve told Gemorgen.');
      scene.actions([
        { label: 'Leave the living room', goto: ['igorhome', 'hallway'] },
      ]);
    } else {
      if (((st as any).stat ?? 0)?.['think_virgin'] === 0) {
        scene.text('"I hope something will happen soon. He\'s been avoiding that part of our relationship…" you say, a little disappointed.');
        scene.text('"Don\'t worry, I\'ll have a talk man to man. He\'s as innocent as a little lamb and probably doesn\'t know what to do."');
        scene.text('Igor blushes while you thank Gemorgen for wanting to help out. The two of you then leave the living room.');
        scene.actions([
          { label: 'Leave the living room', goto: ['igorhome', 'hallway'] },
        ]);
      } else {
        if (((st as any).stat ?? 0)?.['think_virgin'] === 1) {
          scene.text('"No, I\'m still a virgin and I\'m not ready yet to lose it yet, but Igor is really understanding. One day maybe, but not right now…"');
          scene.text('Gemorgen looks a little disappointed at Igor, but doesn\'t say anything since he doesn\'t want to jeopardize the relationship.');
          scene.actions([
            { label: 'Leave the living room', goto: ['igorhome', 'hallway'] },
          ]);
        }
      }
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Defend Igor', handler: (st: GameState) => {
    scene.text('You step in. "We don\'t need to rush anything. If it\'s meant to be, then it\'s meant to be, otherwise I\'m just glad being Igor\'s friend."');
    // TODO-QSP: dynamic text: "You see, son? You''ve just been friend-zoned. You''re too much of a wimp and no...
    scene.text(`"You see, son? You've just been friend-zoned. You're too much of a wimp and now you've chased away a beauty like ${((st as any).pcs_nickname || '')}."`);
    scene.text('Gemorgen looks troubled as he turns towards you. "You have to forgive my gawky son."');
    scene.text('You take pity on Igor, who looks like he\'s about to cry. "You shouldn\'t be so hard on your son. He\'s got feelings too."');
    qspCall(st, 'npc_relationship', 'modify', 'A4', 'like');
    scene.actions([
      { label: 'Changing the subject', handler: (st: GameState) => {
    scene.text('"There\'s plenty to be proud of when it comes to Igor. He\'s got really good grades and he\'s really kind to everyone."');
    scene.text('Gemorgen doesn\'t seem to pay much attention to what you\'re saying and instead begins lewdly commenting on your looks.');
    scene.text('Not wanting to be rude, you thank him for his kind words, but fiercely state that you have no interest in older men.');
    scene.text('He starts laughing loudly. "You\'ve certainly got some spunk, girl. This one\'s a keeper, son."');
    scene.text('Igor begins tearing up before he yells at his father and runs out of the room. You give Gemorgen a stern look before you try to catch up with Igor.');
    scene.text('You can hear Gemorgen yelling that him running away won\'t help with anything…');
    scene.actions([
      { label: 'Leave the living room', goto: ['igorhome', 'hallway'] },
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

function enterLivingroom4(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Talk', handler: (st: GameState) => {
    ((st as any).IgorQW = (st as any).IgorQW ?? {})['met_dad'] = 1;
    scene.text('You greet each other, telling the father that you\'re here because Igor has promised to help you out with a school assignment.');
    scene.text('"Well, at least it\'s something…" Gemorgen sighs. "He usually doesn\'t bring  anyone over, especially girls. I\'ve only seen Dimka running around here."');
    scene.text('Igor, feeling ashamed, tries making his father stop, but Gemorgen doesn\'t listen. "I just want the best for you, son. I want you to become manlier and more confident."');
    if (((st as any).IgorQW ?? 0)?.['Lover'] > 0) {
      scene.actions([
        { label: 'Reveal that you\'re dating', handler: (st: GameState) => {
    scene.text('You and Igor look shyly at each other before he takes a deep breath and tells Gemorgen that the two of you are dating.');
    // TODO-QSP: dynamic text: "Not bad, son. I''m glad for you. <<$pcs_nickname>> is a good pick for a first g...
    scene.text(`"Not bad, son. I'm glad for you. ${((st as any).pcs_nickname || '')} is a good pick for a first girlfriend. You can practice on each other."`);
    scene.text('You feel upset by Gemorgen\'s words and look angrily at Igor, but he\'s too afraid to say anything to his father.');
    scene.text('The conversation ends quickly as you and Igor leave the living room. The father can hear you scold Igor since he didn\'t defend you.');
    scene.actions([
      { label: 'Leave the living room', goto: ['igorhome', 'hallway'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Defend Igor', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A4', 'like');
    scene.text('You notice Igor getting upset and try defending him. You tell Gemorgen that Igor is kind and good at school.');
    scene.text('Gemorgen doesn\'t care what you say. continuing to focus on Igor instead. "Look at you, you\'re pathetic! You have a girl defending you. Do you really think a girl will ever date you?"');
    scene.text('Gemorgen keeps rambling about only wanting to motivate Igor. He wants him to lose his virginity so he can loosen up and follow in his footsteps.');
    scene.text('Igor has enough and grabs hold of you before pushing you away from Gemorgen. As you\'re walking away, Igor thanks you for defending him.');
    scene.text('"It was nice meeting you! I hope you can be the one who helps my son with his virginity," you hear Gemorgen yell from the living room.');
    scene.actions([
      { label: 'Leave the living room', goto: ['igorhome', 'hallway'] },
    ]);
  } },
      { label: 'Change the subject', handler: (st: GameState) => {
    scene.text('You try changing the subject and ask about Galina instead.');
    scene.text('Gemorgen answers that he\'s proud of his daughter since she\'s doing great at university and her future is bright.');
    scene.text('You compliment Igor by telling Gemorgen that he\'s doing well in school and that his father should be proud of him.');
    scene.text('"I am proud of Igor. And I\'m sure he\'ll amount to something in life, but I want him to get a girlfriend and enjoy life while he\'s young because he might regret it later on in life."');
    scene.text('"Well, if Igor wants I can probably introduce him to some girls from our school. It might help him become more confident."');
    scene.text('"Thank you for being so kind. I\'m glad you want to help out my son."');
    scene.text('As everyone has calmed down and is happy, you and Igor leave the living room.');
    scene.actions([
      { label: 'Leave the living room', goto: ['igorhome', 'hallway'] },
    ]);
  } },
      { label: 'Tease Igor', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A4', 'like');
    scene.text('"You\'re absolutely right," you reply in agreement with Gemorgen. "He really needs to man up a bit."');
    // TODO-QSP: dynamic text: "I''m glad you understand my predicament, <<$pcs_nickname>>. I see so much poten...
    scene.text(`"I'm glad you understand my predicament, ${((st as any).pcs_nickname || '')}. I see so much potential in him."`);
    scene.text('"Well, he\'s never going to get a girl behaving like this."');
    scene.text('"You know I\'m standing right here, right?" Igor scowls. "I don\'t understand how you could say something like that. I agreed to help you out and you treat me like this?"');
    scene.text('You smile at him. "Don\'t be like that, I was only teasing you a little…"');
    scene.text('Igor walks away from you, clearly upset. You look at Gemorgen, who seemingly can\'t understand why Igor reacted the way he did. You quickly say goodbye and try to catch up with Igor.');
    scene.actions([
      { label: 'Leave the living room', goto: ['igorhome', 'hallway'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterKitchen(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'igorhome', 'kitchen');
  (s as any).locclass = 'kitr';
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Kitchen</b></center>');
  scene.img('images/locations/pavlovsk/resident/igorhome/kitchen.jpg');
  scene.text('The room is very clean and neat. Everything is perfectly in place and the counters are polished to a near mirror like quality, as is the wooden floor.');
  if ((((s as any).week ?? 0) <= 5  &&  (((s as any).hour ?? 0) === 6  ||  (((s as any).hour ?? 0) >= 18  &&  ((s as any).hour ?? 0) < 23)))  ||  (((s as any).week ?? 0) > 5  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 23)) {
    scene.text('You see Igor\'s mother Inga is in the kitchen drinking tea. You don\'t think she\'s noticed you yet.');
    if (((s as any).IgorQW ?? 0)?.['met_mother'] === 0) {
      scene.actions([
        { label: 'Talk', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/igorhome/mother.jpg');
    ((st as any).IgorQW = (st as any).IgorQW ?? {})['met_mother'] = 1;
    if (((st as any).IgorQW ?? 0)?.['with'] === 1) {
      if (((st as any).PCloBimbo ?? 0) === 1) {
        qspGoto(st, 'igorhome', 'kitchen1');
      } else {
        if (((st as any).grupTipe ?? 0) === 4) {
          if (((st as any).IgorQW ?? 0)?.['Lover'] > 0) {
            qspGoto(st, 'igorhome', 'kitchen6');
          } else {
            qspGoto(st, 'igorhome', 'kitchen5');
          }
        } else {
          qspGoto(st, 'igorhome', 'kitchen3');
        }
      }
    } else {
      if (((st as any).PCloBimbo ?? 0) === 1) {
        qspGoto(st, 'igorhome', 'kitchen2');
      } else {
        if (((st as any).grupTipe ?? 0) === 4) {
          qspGoto(st, 'igorhome', 'kitchen7');
        } else {
          qspGoto(st, 'igorhome', 'kitchen4');
        }
      }
    }
  } },
      ]);
    }
    qspCall(s, 'kit_din', 'driwater');
  } else {
    scene.text('Igor\'s mother isn\'t here, so this might be a good time to grab a snack.');
    qspCall(s, 'core_library', 'kitchen', 'shared');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the kitchen', goto: ['igorhome', 'hallway'] },
  ]);
  scene.build();
}

function enterKitchen1(s: GameState, scene: SceneBuilder): void {
  scene.text('As the two of you walk into the kitchen, you notice a woman in her mid-forties sitting by the table drinking tea. Igor whispers that that\'s his mother.');
  scene.text('She looks up, eyeing you from head to toe before turning to Igor.');
  scene.text('"Igor dear, what have I told you about inviting strangers into our home without letting me know?"');
  scene.text('He nervously tries avoiding her judging eyes, only being able to answer in an inaudible murmur.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Introduce yourself', handler: (st: GameState) => {
    scene.text('You look confidently at her judging eyes, excusing yourself that it wasn\'t you intention to intrude.');
    scene.text('"Don\'t be silly, girl. All of Igor\'s friends are welcome here, no matter who or what they are…" his mother answers in the most demeaning way possible.');
    // TODO-QSP: dynamic text: "I''m <<$pcs_nickname>> <<$pcs_lastname>>, pleasure to meet you. I love what you...
    scene.text(`"I'm ${((st as any).pcs_nickname || '')} ${((st as any).pcs_lastname || '')}, pleasure to meet you. I love what you've done with your home…" you confidently say and begin walking towards her.`);
    // TODO-QSP: dynamic text: She stops you in your tracks with a swift movement of her hand. "<<$pcs_lastname...
    scene.text(`She stops you in your tracks with a swift movement of her hand. "${((st as any).pcs_lastname || '')}, you say? Are you by any chance related to Natasha ${((st as any).pcs_lastname || '')}?" she asks with a grin.`);
    scene.actions([
      { label: 'Are you two familiar with each other?', handler: (st: GameState) => {
    scene.text('"We used to be old classmates. Tell me, is your mother still a loose cannon like in the good old days?"');
    scene.text('You look a bit dumbfounded at her as you don\'t really understand what she means. You just smile and nod, not knowing how to respond otherwise.');
    scene.text('"I see that the apple doesn\'t fall far from the tree," she smugly comments.');
    scene.text('"Did my mother do something wrong", you ask.');
    scene.text('"No no, not at all. It\'s just that I can see a lot of her in you…"');
    scene.actions([
      { label: 'Igor told me a lot about your family', handler: (st: GameState) => {
    scene.text('You stand in silence for a minute, awkwardly looking at each other when a question suddenly pops into your head. "Igor told me a bit about his family?"');
    scene.text('She beams with pride. "Only good things I hope. My pride and joy is studying at the university in the city. She\'s at the top of her class, not that I ever doubted her. She\'s a real go getter."');
    scene.text('"I\'m so proud of her. At first, I was worried how she would handle herself in the big city. I talked to my little baby every day, just to make sure she was okay…"');
    scene.text('<i>She sounds like a spoiled brat that\'s always had everything served on a silver platter</i>, you think to yourself.');
    scene.text('Inga continues, bringing up her husband next.');
    scene.text('"I met my husband in my twenties. He was so good looking and I knew right away that we would be the perfect couple. The first few years were rough, but as soon as he was done with his studies, he got himself a good job as an accountant and we got married. I then fell pregnant with my pride and joy…"');
    scene.text('She smiles, seemingly lost in thought. "Two years later, I had Igor and went back to work as a secretary at a law firm. A more important question now. How did you and my sweet little Igor meet?"');
    if (((st as any).IgorQW ?? 0)?.['Lover'] > 0) {
      scene.actions([
        { label: 'Confess that you\'re dating', handler: (st: GameState) => {
    scene.text('Both of you look at each other nervously like small children hiding something.');
    scene.text('"Well? Out with it. I know you\'re hiding something. Don\'t tell me she\'s pregnant and you\'re the father?!"');
    scene.text('Igor shakes his head, telling his mother to calm down before saying that the two of you are seeing each other.');
    scene.text('"We have really had fun with each other," you quickly add. "He\'s such a cutie…" you say with a smile as you look at him.');
    scene.text('Inga sighs. "Who though my son would fall for someone like this… Well, I\'m not too keen on this relationship you\'ve developed, but if it makes my son happy, then I\'ll have to deal with it. I assume you\'ve already lost your virginity? Just remember to always use protection. I don\'t want you becoming a father at your age."');
    scene.text('Igor blushes and angerly answers that it\'s none of her business.');
    scene.text('"I\'m sure you have better things to do besides standing here talking with me," Inga scowls before returning to her tea.');
    ((st as any).IgorQW = (st as any).IgorQW ?? {})['met_mother'] = 1;
    scene.actions([
      { label: 'Leave the kitchen', goto: ['igorhome', 'hallway'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'We met through Dimka', handler: (st: GameState) => {
    scene.text('"We\'re classmates who met through Dimka. We started hanging out with each other and he thought we would get along really well."');
    scene.text('"Oh Dimka, that sweet sweet boy. He\'s been Igor\'s friend for as long as I can remember. How\'s Dimka doing by the way? It\'s been a while since I\'ve seen him."');
    scene.text('Igor, still looking down, mumbles that Dimka is fine and that he\'s been very busy at school.');
    scene.text('"You have to invite him over instead of girls that could mean trouble, but since it was Dimka that introduced you to each other, I\'m willing to give you the benefit of the doubt. Run along now. And no funny business, Igor! I know you\'re a good boy."');
    scene.text('Igor nods while you say your goodbye, thinking this woman could become troublesome and that you need to isolate Igor from her as much as you can.');
    ((st as any).IgorQW = (st as any).IgorQW ?? {})['met_mother'] = 1;
    scene.actions([
      { label: 'Leave the kitchen', goto: ['igorhome', 'hallway'] },
    ]);
  } },
      { label: 'We\'re classmates', handler: (st: GameState) => {
    scene.text('"We\'re classmates. I thought that Igor was a cutie, so I wanted to get to know him better."');
    scene.text('"Igor, we\'re going to have a talk about who you\'re befriending at school…"');
    scene.text('You don\'t want to get involved in their family business, so you keep quiet as they argue.');
    scene.text('Igor finishes talking and tells you to come with him. As you move away from the kitchen, you feel a bit turned on by how he defended you. While walking behind him, you quickly pinch his butt.');
    ((st as any).IgorQW = (st as any).IgorQW ?? {})['met_mother'] = 1;
    scene.actions([
      { label: 'Leave the kitchen', goto: ['igorhome', 'hallway'] },
    ]);
  } },
      { label: 'Igor is tutoring me', handler: (st: GameState) => {
    scene.text('"I\'m a bit of an airhead and Igor offered to help me out with some schoolwork," you say while looking at Igor with a smile.');
    scene.text('"I expected as much of my little boy. He\'s always been quite sharp and with his heart of gold, he always helps out the less fortunate… Well, I guess that\'s okay as long as you\'re only helping her with her homework. Understood?"');
    scene.text('Both of you nod and quickly leave the kitchen before she changes her mind.');
    ((st as any).IgorQW = (st as any).IgorQW ?? {})['met_mother'] = 1;
    scene.actions([
      { label: 'Leave the kitchen', goto: ['igorhome', 'hallway'] },
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

function enterKitchen2(s: GameState, scene: SceneBuilder): void {
  scene.text('You hear someone clearing their throat as you walk by the kitchen. You stop and see a woman in her forties sitting by the table enjoying her tea.');
  scene.text('"And who might you be?" she asks as she looks up. "What is that god awful outfit you\'re wearing? You should tell your mother to buy you some proper clothes. I can\'t believe that my sweet little Igor is hanging out with the likes of someone like you…"');
  qspCall(s, 'willpower', 'misc', 'self', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'You\'ve had enough', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'You\'ve had enough', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    scene.text('Tired of her yapping, you angrily cut her off. "A grown woman shouldn\'t act this way. What does how I dress matter? Are you really that judgmental of someone you\'ve just met?"');
    scene.text('"Where are your manners, girl? Hasn\'t your mother taught you how to behave? You should be lucky I haven\'t thrown you out. I\'m a patient woman and don\'t want to cause a scene with one of Igor\'s friends."');
    scene.text('"I am well mannered. I simply won\'t accept anyone bad mouthing me."');
    scene.text('"Well, you should think about how you present yourself. It feels like I should have a talk with your mother. Who is she by the way?"');
    scene.text('You think about whether you should tell her. "Well? Who is it?" she asks again.');
    scene.text('Without any hesitation, you say your mother\'s name and see Inga\'s face turn sour.');
    scene.actions([
      { label: 'Keep on arguing', handler: (st: GameState) => {
    scene.text('"No wonder you act the way you do! I should\'ve expected that her children would behave like this."');
    scene.text('"What do you mean by that? My mother did a great job raising me. I bet she\'s a better mother than you\'ve ever been!"');
    scene.text('"I know your mother very well and I can tell you this; you\'re behaving just like she did when she was younger. I won\'t go into details, but I can tell you this…"');
    scene.text('Before she can utter another word, you cut her off. "I don\'t want to hear it! I think it\'s better for me to return to Igor."');
    scene.text('"We\'ll see how long this relationship will last…" she says as she returns to her tea.');
    scene.actions([
      { label: 'Storm out', handler: (st: GameState) => {
    scene.text('You storm out of the kitchen, noticeably irritated that she got under your skin.');
    ((st as any).IgorQW = (st as any).IgorQW ?? {})['met_mother'] = 1;
    qspCall(st, 'mood', 'lower', 'medium');
    scene.actions([
      { label: 'Leave the kitchen', goto: ['igorhome', 'hallway'] },
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
    { label: 'Try to be friendly', handler: (st: GameState) => {
    scene.text('You feel a bit ashamed as Igor\'s mother aggressively keeps ranting about you and your outfit.');
    scene.text('"Who are you anyway? How do you know my son?"');
    // TODO-QSP: dynamic text: "My name is <<$pcs_nickname>> <<$pcs_lastname>>, and I''m Igor''s schoolmate…"
    scene.text(`"My name is ${((st as any).pcs_nickname || '')} ${((st as any).pcs_lastname || '')}, and I'm Igor's schoolmate…"`);
    // TODO-QSP: dynamic text: "<<$pcs_lastname>>? Are you Natasha''s daughter?"
    scene.text(`"${((st as any).pcs_lastname || '')}? Are you Natasha's daughter?"`);
    scene.actions([
      { label: 'Nod your head', handler: (st: GameState) => {
    scene.text('"Yes, I am…" you answer anxiously.');
    scene.text('"Yeah, I remember her. She was always a handful when we were young. Is she still like that?"');
    scene.text('"No, actually. She\'s really responsible now. She has three children now, so she takes real good care of us."');
    scene.text('"Well, I wouldn\'t really say she takes good take of you. Look at you," she snarkly replies. "You think a responsible adult would let her daughter dress like <i>that</i>?"');
    scene.actions([
      { label: 'Try to change the subject', handler: (st: GameState) => {
    scene.text('Feeling a little ashamed by her harsh words, you try pulling down your clothes as you try to cover yourself.');
    scene.text('To ease up the tension, you ask her about her family.');
    scene.text('She beams with pride as she starts talking about her daughter. "I\'m so proud of her. She\'s doing really well at the university and my husband has a well-paid job, so I can\'t really complain about my life situation."');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.text('You listen to her for a while, not daring to disturb her as she keeps talking about her family. As soon as she stops, you tell her that Igor is probably waiting for you and that you need to head back.');
    scene.text('"I really hope that you reconsider how you\'re presenting yourself. I think there\'s a beautiful girl somewhere underneath all those trashy clothes. Just a friendly warning; don\'t you <i>dare</i> do anything to Igor! He\'s a sweet boy, and he doesn\'t know much about women."');
    scene.text('You thank her for the advice, thinking she\'s an old woman that doesn\'t understand anything about today\'s youth, but she didn\'t stop you from seeing Igor, so you happily return to his room.');
    ((st as any).IgorQW = (st as any).IgorQW ?? {})['met_mother'] = 1;
    scene.actions([
      { label: 'Leave the kitchen', goto: ['igorhome', 'hallway'] },
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

function enterKitchen3(s: GameState, scene: SceneBuilder): void {
  scene.text('As the two of you walk into the kitchen, you notice a woman in her mid-forties sitting by the table drinking tea. Igor walks up to the woman and hugs her.');
  scene.text('"Igor dear, who\'s this lovely girl you brought home with you?"');
  scene.text('"She\'s a friend from school," he proudly proclaims.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Introduce yourself', handler: (st: GameState) => {
    scene.text('You shyly look at her, not really knowing what to say.');
    scene.text('"Don\'t be shy, little cutie… I don\'t bite, especially such a cute girl as yourself."');
    // TODO-QSP: dynamic text: "I''m <<$pcs_nickname>> <<$pcs_lastname>>, I''m glad I''m finally able to meet y...
    scene.text(`"I'm ${((st as any).pcs_nickname || '')} ${((st as any).pcs_lastname || '')}, I'm glad I'm finally able to meet you. You have a lovely home." you say without stopping to take a breath.`);
    // TODO-QSP: dynamic text: "<<$pcs_lastname>>, you say? Are you related to Natasha <<$pcs_lastname>> by any...
    scene.text(`"${((st as any).pcs_lastname || '')}, you say? Are you related to Natasha ${((st as any).pcs_lastname || '')} by any chance?"`);
    scene.actions([
      { label: 'Yes', handler: (st: GameState) => {
    scene.text('You nod your head and Inga smiles.');
    scene.text('"I know your mother from back in the day. We were friends, but I was always a bit jealous of her beauty. I see that beauty runs in the family. Are you just as good as she was in school?"');
    scene.text('"I try my best, but I hope Igor might help me out with some things," you say while smiling at him.');
    scene.text('"I truly hope he\'ll be able to do so. He\'s quite good at school," she says proudly.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.text('"I hope he can follow in his sister\'s footsteps," she continues. "She\'s currently studying at the university in the city and she\'s at the top of her class, so Igor has a lot to live up to."');
    scene.text('"You don\'t think that\'s putting too much pressure on Igor?" you ask.');
    scene.text('"Not really, no. I\'m very proud of our family. My husband is an accountant and I work as a secretary at a law firm, so I have big plans for my children."');
    scene.text('Turning to Igor, she asks how the two of you met.');
    if (((st as any).IgorQW ?? 0)?.['Lover'] > 0) {
      scene.actions([
        { label: 'Confess that you\'re dating', handler: (st: GameState) => {
    scene.text('Both of you look at each other nervously like small children hiding something.');
    scene.text('"Well? Out with it. I know you\'re hiding something."');
    scene.text('Igor starts off by telling her that the two of you have been classmates for quite some time and you hit it off when you were assigned to do a school project together.');
    scene.text('"I really like him and enjoy his company," you quickly add while smiling at him.');
    // TODO-QSP: dynamic text: "Well who am I to deny this sweet puppy love?" Inga says with a smile. "I want y...
    scene.text(`"Well who am I to deny this sweet puppy love?" Inga says with a smile. "I want you to take extra good care of ${((st as any).pcs_nickname || '')}. Remember to always use protection since I don't want you becoming a father at your age."`);
    scene.text('Both of you nod and promise her that you\'ll be safe if it ever comes to that. Igor hugs his mother and whispers something to her.');
    scene.text('She nods approvingly. "I\'m sure you have better things to do than stand here talking with me," she smiles before returning to her tea.');
    ((st as any).IgorQW = (st as any).IgorQW ?? {})['met_mother'] = 1;
    scene.actions([
      { label: 'Leave the kitchen', goto: ['igorhome', 'hallway'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'We met through Dimka', handler: (st: GameState) => {
    scene.text('Feeling somewhat encouraged, you answer instead. "We\'re classmates, but it was Dimka that formally introduced us to each other. He thought we would get along with each other."');
    scene.text('"Oh Dimka, that sweet sweet boy. He\'s been Igor\'s friend for as long as I can remember. How is Dimka nowadays? It\'s been a while since I\'ve seen him, the little looker."');
    scene.text('Still looking down, Igor mumbles that Dimka is fine and that he\'s been very busy at school.');
    // TODO-QSP: dynamic text: "You should call him over so all the three of you can hang out. Since it was Dim...
    scene.text(`"You should call him over so all the three of you can hang out. Since it was Dimka that introduced you to each other, I'm sure the two of you will get along. Run along now. And no funny business, Igor! I know you're a good boy, so don't try anything funny with ${((st as any).pcs_nickname || '')}, especially since you're still a virgin."`);
    scene.text('Igor immediately turns red. "Mother! You\'re embarrassing me!"');
    scene.text('You let out a smile and reassure Inga that nothing will happen.');
    ((st as any).IgorQW = (st as any).IgorQW ?? {})['met_mother'] = 1;
    scene.actions([
      { label: 'Leave the kitchen', goto: ['igorhome', 'hallway'] },
    ]);
  } },
      { label: 'We\'re classmates', handler: (st: GameState) => {
    scene.text('Feeling a little encouraged, you answer instead. "We had an assignment together and we\'ve been friends ever since."');
    scene.text('"I\'m not surprised that my little Igor managed to impress a girl by doing a school assignment."');
    scene.text('You look at Igor and give him a hug, thanking him for his hard work while his mother looks on smiling.');
    scene.text('As the two of you start moving away, you think to yourself that you\'ve got the mother eating out of your hand and that you\'ll have no trouble with her…');
    ((st as any).IgorQW = (st as any).IgorQW ?? {})['met_mother'] = 1;
    scene.actions([
      { label: 'Leave the kitchen', goto: ['igorhome', 'hallway'] },
    ]);
  } },
      { label: 'I need someone to tutor me', handler: (st: GameState) => {
    scene.text('"I\'ve fallen a bit behind in school and Igor offered to help me out with some of my work."');
    // TODO-QSP: dynamic text: "Don''t worry, <<$pcs_nickname>>. I''m sure Igor will take good care of you. I''...
    scene.text(`"Don't worry, ${((st as any).pcs_nickname || '')}. I'm sure Igor will take good care of you. I'm not saying that because he's my son, but he's very smart and has good grades."`);
    scene.text('"I guess I\'m in safe hands then," you reply and give Igor a little smile.');
    scene.text('"Run along now. I\'m sure you have a lot of work to get through."');
    ((st as any).IgorQW = (st as any).IgorQW ?? {})['met_mother'] = 1;
    scene.actions([
      { label: 'Leave the kitchen', goto: ['igorhome', 'hallway'] },
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

function enterKitchen4(s: GameState, scene: SceneBuilder): void {
  scene.text('As you walk around the house, you hear someone calling you over from the kitchen.');
  scene.text('"Who are you? My god I didn\'t know that my little boy was friends with such a lovely girl."');
  scene.text('You blush and thank her for the compliment.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Introduce yourself', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "I''m <<$pcs_nickname>> <<$pcs_lastname>>. I''m glad I''m finally able to meet y...
    scene.text(`"I'm ${((st as any).pcs_nickname || '')} ${((st as any).pcs_lastname || '')}. I'm glad I'm finally able to meet you."`);
    // TODO-QSP: dynamic text: "<<$pcs_lastname>>? Could it be that Natasha is your mother? I was friends with ...
    scene.text(`"${((st as any).pcs_lastname || '')}? Could it be that Natasha is your mother? I was friends with her when we were younger."`);
    scene.text('You nod approvingly. "Yes, she\'s my mother. I didn\'t know the two of you knew each other?"');
    scene.text('"It was a long time ago, before I had my daughter. She\'s in the university now and doing really well, so I\'m pretty proud of her. But don\'t worry about that now and answer me this instead. How did you and my little boy meet?"');
    scene.actions([
      { label: 'Through Dimka', handler: (st: GameState) => {
    scene.text('"We met through a mutual friend, Dimka. He formally introduced us to each other since he thought we would get along with each other."');
    scene.text('"Oh Dimka, that sweet sweet boy. He\'s been Igor\'s friend for as long as I can remember. He\'s always looking out for my little Igor."');
    scene.text('"Yeah, he\'s really nice and really good looking…" you reply and the two of you start laughing.');
    scene.text('"I know you\'re just kidding, but please be careful with my son. He\'s a delicate flower that doesn\'t have much experience with women."');
    scene.text('"Don\'t worry, I\'ll take good care him," you say with a smile. "I think it\'s time for me to go back to Igor. He\'s probably wondering where I am."');
    ((st as any).IgorQW = (st as any).IgorQW ?? {})['met_mother'] = 1;
    scene.actions([
      { label: 'Leave the kitchen', goto: ['igorhome', 'hallway'] },
    ]);
  } },
      { label: 'Through school', handler: (st: GameState) => {
    scene.text('"We had an assignment together at school and we\'ve been friends ever since."');
    scene.text('"I\'m not surprised that my little Igor managed to impress a girl by showing off how smart he is. I\'m so proud of him."');
    scene.text('"To be honest, I\'m a bit turned on by how smart he is…" you say, blushing.');
    // TODO-QSP: dynamic text: "Nothing to be ashamed of, <<$pcs_nickname>>. It runs in the family." She''s cle...
    scene.text(`"Nothing to be ashamed of, ${((st as any).pcs_nickname || '')}. It runs in the family." She's clearly referencing Igor's father. "But please be careful with Igor. He hasn't had lots of experience with women."`);
    scene.text('"I\'ll take good care of him. I\'ll make sure he doesn\'t stray off too much," you confidently reply. "I should head back. Igor is probably wondering where I am."');
    scene.text('"We\'ll talk about it later. Don\'t hesitate to ask if you\'re ever wondering about anything," Inga replies as you leave the kitchen.');
    ((st as any).IgorQW = (st as any).IgorQW ?? {})['met_mother'] = 1;
    scene.actions([
      { label: 'Leave the kitchen', goto: ['igorhome', 'hallway'] },
    ]);
  } },
      { label: 'I need some tutoring', handler: (st: GameState) => {
    scene.text('"I\'ve fallen a bit behind in school and Igor offered to help me out with some of my work."');
    // TODO-QSP: dynamic text: "Don''t worry <<$pcs_nickname>>. I''m sure Igor will take good care of you. I''m...
    scene.text(`"Don't worry ${((st as any).pcs_nickname || '')}. I'm sure Igor will take good care of you. I'm not saying that because he's my son, but he's very smart and has good grades."`);
    scene.text('You look at her, feeling a little discouraged. "I really hope so. I really need to get my grades up in this subject."');
    scene.text('"I\'m sure Igor won\'t let you fail. You should go back to him so you can plan the work you need to put in," she says with a smile.');
    scene.text('You nod and turn around before leaving the kitchen.');
    ((st as any).IgorQW = (st as any).IgorQW ?? {})['met_mother'] = 1;
    scene.actions([
      { label: 'Leave the kitchen', goto: ['igorhome', 'hallway'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterKitchen5(s: GameState, scene: SceneBuilder): void {
  scene.text('As soon as Igor\'s mother notices you, her face turns red as she turns to Igor and starts screaming.');
  scene.text('"What is this, Igor? Explain yourself! When did you started hanging out with a hoodlum? I taught you better than this. Just look at her! You should know better!"');
  scene.text('Igor tries to explain that you\'re friends, but she\'s not having it.');
  scene.text('"Igor, tell your \'friend\' to leave this house right away! I don\'t want her near our household. I forbid you from being friends with this girl!"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Speak up', handler: (st: GameState) => {
    scene.text('You try to speak up, but she instantly tells you to shut up.');
    scene.text('"I don\'t want to hear it! Get out! Now!"');
    scene.text('Igor gazes at you with a lamblike expression, taking you by the hand and leading you away from the kitchen, begging for forgiveness about how his mother is behaving and telling you he\'ll have a talk with her and fix everything.');
    scene.text('"Igor! As soon as you\'ve shown her out, come back here. We have some things to discuss," you hear his mother loudly say as Igor pushes you out of the kitchen.');
    scene.text('As you stand in the hallway, Igor tells you to wait here, slamming the kitchen door behind him as he returns to the kitchen.');
    ((st as any).IgorQW = (st as any).IgorQW ?? {})['met_mother'] = 1;
    scene.actions([
      { label: 'Wait', goto: ['igorhome', 'hallway'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterKitchen6(s: GameState, scene: SceneBuilder): void {
  scene.text('As soon as Igor\'s mother notices you, her face turns red as she turns to Igor and starts screaming.');
  scene.text('"What is this, Igor? Explain yourself! When did you started hanging out with a hoodlum? I taught you better than this. Just look at her! You should know better!"');
  scene.text('Igor tries to explain that you\'re friends, but she\'s not having it.');
  scene.text('"Igor, tell your \'friend\' to leave this house right away! I don\'t want her near our household. I forbid you from being friends with this girl!"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Further', handler: (st: GameState) => {
    scene.text('You try to speak up, but she instantly tells you to shut up.');
    scene.text('"I don\'t want to hear it! Get out! Now!"');
    scene.text('Igor gazes at you with a lamblike expression, taking you by the hand and leading you away from the kitchen, begging for forgiveness about how his mother is behaving and telling you he\'ll have a talk with her and fix everything.');
    scene.text('"Igor! As soon as you\'ve shown her out, come back here. We have some things to discuss," you hear his mother loudly say as Igor pushes you out of the kitchen.');
    scene.text('As you stand in the hallway, Igor tells you to wait here, slamming the kitchen door behind him as he returns to the kitchen.');
    scene.actions([
      { label: 'Eavesdrop', handler: (st: GameState) => {
    scene.text('You eavesdrop on them arguing, his mother telling him that you\'ll corrupt him and destroy everything he\'s built up.');
    scene.text('Igor reassures her that it was the teacher\'s idea for the better students to help out the students that are behind on their school work.');
    scene.text('His mother asks if that\'s all there is to it and he answers that she should calm down and not jump to conclusions.');
    scene.actions([
      { label: 'Return to the kitchen', handler: (st: GameState) => {
    scene.text('Igor calls you back to the kitchen. You see his mother sitting at the table, still looking upset.');
    scene.text('"Just so we\'re clear, Igor is only going to help you out with your homework. Don\'t get any funny ideas because I\'m going to keep my eye on you," she says, keeping her composure stern.');
    scene.text('"Yeah, whatever," you nonchalantly reply. "Maybe you should relax a little? Nothing will happen to your precious little son."');
    scene.text('Before the situation escalates again, Igor tells you that you need to begin planning the schoolwork and that you should go to his room.');
    ((st as any).IgorQW = (st as any).IgorQW ?? {})['met_mother'] = 1;
    scene.actions([
      { label: 'Leave the kitchen', goto: ['igorhome', 'hallway'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterKitchen7(s: GameState, scene: SceneBuilder): void {
  scene.text('As you\'re walking into the kitchen, you suddenly hear Igor\'s mother.');
  scene.text('"Who are you? Why are you dressed like that? Are you one of those hoodlums I\'ve heard of?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Answer her', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You can see that she clearly loathes you. "I''m <<$pcs_nickname>> <<$pcs_lastnam...
    scene.text(`You can see that she clearly loathes you. "I'm ${((st as any).pcs_nickname || '')} ${((st as any).pcs_lastname || '')}. I'm a friend of Igor's, but what's it to you?"`);
    scene.text('"I\'m Igor\'s mother and I don\'t like your kind. Unlike his sister, he\'s easily influenced and his future will be ruined because of you."');
    scene.text('You stand with your mouth wide open, shocked by what you just heard before you decide to have some fun with her. "Don\'t worry about your son, he\'s in safe hands. I might even be able to teach him a thing or two…"');
    scene.text('"That\'s it! I want you to leave my son alone, understand? He\'s an innocent boy and I refuse to let him get taken advantage of, especially not by someone like you. It\'s best if you just leave and go home to that mother of yours…"');
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    scene.text('You look her straight in the eye. "Make me."');
    scene.text('Inga is taken aback by your answer and glares at you in frustration before she starts yelling at you. "Get out of my house, <i>now</i>!"');
    scene.text('Laughing, you turn around and head back to Igor\'s room, thinking about how she can\'t do anything about you and Igor\'s relationship.');
    ((st as any).IgorQW = (st as any).IgorQW ?? {})['met_mother'] = 1;
    scene.actions([
      { label: 'Leave the kitchen', goto: ['igorhome', 'hallway'] },
    ]);
  } },
      { label: 'Lie', handler: (st: GameState) => {
    scene.text('"Fine, I\'ll leave your precious little boy alone. If I knew it would be this much trouble I would never have befriended him," you reply, lying straight to her face.');
    scene.text('She calms down a little. "Good. I\'m glad you\'ve come to your senses. Now leave. I don\'t want to see you in my house ever again."');
    scene.text('As you walk away, you\'re even more determined that you and Igor are right for each other and that you\'ll need to sneak around instead.');
    ((st as any).IgorQW = (st as any).IgorQW ?? {})['met_mother'] = 1;
    scene.actions([
      { label: 'Leave the kitchen', goto: ['igorhome', 'hallway'] },
    ]);
  } },
      { label: 'Don\'t respond', handler: (st: GameState) => {
    scene.text('Before you manage to respond, she jumps up from her chair and gets up in your face.');
    scene.text('"Listen to me, you little good for nothing hoodlum! Get out, <i>now</i>! Neither my son nor I want to waste our time on you."');
    scene.text('She grabs you by the arm and shoves you outside the kitchen. "Don\'t ever come back here or talk to my son ever again!"');
    scene.text('As she turns back to sit down, you remain in the hall, contemplating your next move.');
    ((st as any).IgorQW = (st as any).IgorQW ?? {})['met_mother'] = 1;
    scene.actions([
      { label: 'Leave the kitchen', goto: ['igorhome', 'hallway'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterIgorparents(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'igorhome', 'igorparents');
  (s as any).locclass = 'bedr';
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Igor\'s parent\'s room</b></center>');
  scene.img('images/locations/pavlovsk/resident/igorhome/bedroom.jpg');
  scene.text('The room is very clean, neat and beautifully decorated. Everything is perfectly in place and the wooden furniture is all highly polished.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Look around', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    scene.text('<center><b>Igor\'s parent\'s room</b></center>');
    scene.img('images/locations/pavlovsk/resident/igorhome/bedroom.jpg');
    scene.text('You snoop around, opening drawers and looking in the closet. Everything is perfectly in place and neatly arranged. You don\'t find anything of interest. Igor\'s parents seem pretty boring.');
    scene.actions([
      { label: 'Leave', goto: ['igorhome', 'hallway'] },
    ]);
  } },
    { label: 'Leave', goto: ['igorhome', 'hallway'] },
  ]);
  scene.build();
}

function enterHome(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/igorhome/house.jpg');
  qspCall(s, 'igor_schedule', '');
  if (((s as any).locat ?? 0)?.['igor'] === 7  &&  ((s as any).hour ?? 0) < 18) {
    if ((!(Math.floor(Math.random() * 4) + 0))) {
      qspGoto(s, 'igorhome', 'home2');
    }
    scene.text('A few seconds later, Igor answers the door and invites you in.');
    scene.actions([
      { label: 'Enter', goto: ['igorhome', 'hallway'] },
    ]);
  } else {
    if (((s as any).hour ?? 0) >= 18  &&  ((s as any).hour ?? 0) < 22  &&  ((s as any).locat ?? 0)?.['igor'] === 7) {
      scene.text('A few seconds later, Igor\'s mother answers the door and invites you in.');
      scene.actions([
        { label: 'Enter', goto: ['igorhome', 'hallway'] },
      ]);
    } else {
      if (((s as any).hour ?? 0) >= 18  &&  ((s as any).hour ?? 0) < 22) {
        // TODO-QSP: 'A few seconds later, Igor''s mother answers the door and tells you that Igor is ' + iif(locat['igor...
        scene.actions([
          { label: 'Leave Igor\'s home', goto: ['pav_residential', ''] },
        ]);
      } else {
        scene.text('After knocking several times, no one answers. It seems no one is home or everyone is asleep.');
        scene.actions([
          { label: 'Leave Igor\'s home', goto: ['pav_residential', ''] },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterHome2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/igorhome/house.jpg');
  scene.text('No one answers and you\'re just about to leave when you see movement inside. Maybe they don\'t want to be disturbed or they didn\'t hear you knocking. Or maybe someone broke into their house?! What should you do?');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['pav_residential', ''] },
    { label: 'Knock again', handler: (st: GameState) => {
    scene.text('A few minutes later, an out of breath and disheveled Igor answers the door and invites you in.');
    scene.actions([
      { label: 'Enter', goto: ['igorhome', 'hallway'] },
    ]);
  } },
    { label: 'Peek inside the window', handler: (st: GameState) => {
    if (((st as any).IgorQW ?? 0)?.['crossdress'] === 1) {
      scene.text('You look inside and see Igor dressed as a girl running about in a panic.');
      scene.actions([
        { label: 'Tap on the window', handler: (st: GameState) => {
    scene.text('You tap on the window to get Igor\'s attention. "Igor, it\'s me! Let me in."');
    scene.text('A few seconds later, Igor opens the door wearing a cute dress. He grins at you and invites you in.');
    scene.actions([
      { label: 'Enter', goto: ['igorhome', 'hallway'] },
      { label: 'Suggest taking a walk', goto: ['igorev', 'walk'] },
    ]);
  } },
      ]);
    } else {
      scene.text('You look inside and see a girl about your age inside. You\'ve never seen before and are about to tap on the window when she pulls her wig off and you realize it\'s Igor!');
      scene.actions([
        { label: 'Knock again', handler: (st: GameState) => {
    scene.text('A few minutes later, an out of breath and disheveled Igor answers the door and invites you in. Do you pretend you didn\'t see anything or not?');
    scene.actions([
      { label: 'Pretend you didn\'t see anything', goto: ['igorhome', 'hallway'] },
      { label: 'Tell him you saw him', goto: ['igorev', 'caught'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'entrance':
      enterEntrance(s, scene);
      break;
    case 'hallway':
      enterHallway(s, scene);
      break;
    case 'bathroom':
      enterBathroom(s, scene);
      break;
    case 'igorroom':
      enterIgorroom(s, scene);
      break;
    case 'chat':
      enterChat(s, scene);
      break;
    case 'study':
      enterStudy(s, scene);
      break;
    case 'sisterroom':
      enterSisterroom(s, scene);
      break;
    case 'livingroom':
      enterLivingroom(s, scene);
      break;
    case 'livingroom1':
      enterLivingroom1(s, scene);
      break;
    case 'livingroom2':
      enterLivingroom2(s, scene);
      break;
    case 'livingroom3':
      enterLivingroom3(s, scene);
      break;
    case 'livingroom4':
      enterLivingroom4(s, scene);
      break;
    case 'kitchen':
      enterKitchen(s, scene);
      break;
    case 'kitchen1':
      enterKitchen1(s, scene);
      break;
    case 'kitchen2':
      enterKitchen2(s, scene);
      break;
    case 'kitchen3':
      enterKitchen3(s, scene);
      break;
    case 'kitchen4':
      enterKitchen4(s, scene);
      break;
    case 'kitchen5':
      enterKitchen5(s, scene);
      break;
    case 'kitchen6':
      enterKitchen6(s, scene);
      break;
    case 'kitchen7':
      enterKitchen7(s, scene);
      break;
    case 'igorparents':
      enterIgorparents(s, scene);
      break;
    case 'home':
      enterHome(s, scene);
      break;
    case 'home2':
      enterHome2(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const igorhome: LocationDef = {
  name: 'igorhome',
  title: 'Igor Kruglov',
  region: 'other',
  locationType: 'bathroom',
  locclass: 'bedr',
  enter: enter,
};
