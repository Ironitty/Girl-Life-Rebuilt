import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterEntrance(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'igorhome', 'entrance');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Igor Kruglov</b></center>');
  scene.img('images/characters/shared/headshots_main/big4.jpg');
  if (((s as any).IgorQW ?? 0)?.['Love'] > 0) {
    (s as any).temprand = Math.floor(Math.random() * 10) + 1;
    if (((s as any).temprand ?? 0) === 1  &&  ((s as any).fedorKozlovQW ?? 0) >= 10) {
      // TODO-QSP: dynamic text: As you approach Igor, Fedor walks up beside you. "What are you doing with <<$pcs...
      scene.text(`As you approach Igor, Fedor walks up beside you. "What are you doing with ${((s as any).pcs_firstname ?? 0)}, Igor? You know she's my girl, right?"`);
      scene.text('Igor looks surprised before he turns to you, looking sad. "I thought you were <i>my</i> girl?"');
      scene.text('Fedor\'s eyes narrow and he looks at you as well. "Are you cheating on me?!"');
      scene.text('Suddenly caught, you\'re not sure what to do. "It\'s not what it looks like!"');
      scene.text('Fedor\'s face hardens. "Then what is it? You\'re either cheating on me or you\'re not."');
      scene.actions([
        { label: 'Say you\'re not dating Igor', handler: (st: GameState) => {
    (s as any).IgorQW['Love'] = (-1);
    (s as any).IgorQW['Block'] = 1;
    (s as any).IgorQW['Lover'] = (-1);
    qspCall(s, 'npc_relationship', 'set', 'A4', 20);
    qspCall(s, 'stat', '');
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
    (s as any).fedorkozqw = 0;
    (s as any).fedorKozlovQW = 0;
    (s as any).FedorLuv = 0;
    (s as any).fedorkozbreak = ((s as any).fedorkozbreak ?? 0) + (1);
    qspCall(s, 'npc_relationship', 'set', 'A5', 20);
    qspCall(s, 'stat', '');
    scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/fedorsad.jpg');
    scene.text('You glance at Igor, then at Fedor. "Yes, I\'m dating him. I\'m sorry."');
    scene.text('At first, Fedor looks angry and Igor starts to back up, fearful that Fedor might attack him. Thankfully, Fedor sighs and relaxes, looking rather sad.');
    scene.text('"Fine. Go be with him if that\'s what you want." He turns and walks away without another word.');
    scene.text('Once it\'s obvious he\'s not going to get his ass kicked, Igor smiles. "Come on. Let\'s go to my place."');
    scene.actions([
      { label: 'Go to Igor\'s house', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
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
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
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
    (s as any).temprand = Math.floor(Math.random() * 10) + 1;
    if (((s as any).temprand ?? 0) === 1  &&  ((s as any).fedorKozlovQW ?? 0) >= 10) {
      // TODO-QSP: dynamic text: As you approach Igor, Fedor walks up beside you. "What are you doing with <<$pcs...
      scene.text(`As you approach Igor, Fedor walks up beside you. "What are you doing with ${((s as any).pcs_firstname ?? 0)}, Igor? You know she's my girl, right?"`);
      scene.text('Igor downcasts his eyes. "Oh hey Fedor. We were just going to study… I\'ll just be going now."');
      scene.text('Fedor nods. "Yeah, that will be for the best. Catch you later, Igor."');
      scene.text('Igor takes one last look at you before turning around and walking away.');
      scene.actions([
        { label: 'Go with Fedor', handler: (st: GameState) => {
    (s as any).IgorQW['Love'] = (-1);
    (s as any).IgorQW['Block'] = 1;
    (s as any).IgorQW['Lover'] = (-1);
  }, goto: ['FedorEv', 'Start'] },
      ]);
    } else {
      scene.text('Igor is waiting for you. "You ready to go to do homework?" he asks eagerly.');
      scene.actions([
        { label: 'Go to Igor\'s house', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
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
  scene.build();
}

function enterHallway(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'igorhome', 'hallway');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Entrance hall</b></center>');
  scene.img('images/locations/pavlovsk/resident/igorhome/kor.jpg');
  scene.text('This is the entrance hall to Igor\'s house, which leads to the other rooms in the house. It is tastefully decorated.');
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
  scene.text('<center><b>Bathroom</b></center>');
  scene.img('images/locations/pavlovsk/resident/igorhome/vann.jpg');
  scene.text('The bathroom has a large sink area and tiled floors. The toilet sits along the far wall. There is also a walk-in shower and bathtub. It all looks very nice.');
  // TODO-QSP: dynamic text: You can do your hair and makeup in the <a href="exec:gt 'mirror', 'start'">mirro...
  scene.text('You can do your hair and makeup in the <a href="exec:gt \'mirror\', \'start\'">mirror</a> above the sink, where you can \' + iif(pcs_hairbsh < 1, \'<a href="exec:gt \'mirror\', \'brush\'">brush</a>\', \'brush\') + \' your hair.');
  qspCall(s, 'din_van', 'private');
  scene.actions([
    { label: 'Leave the bathroom', goto: ['igorhome', 'hallway'] },
  ]);
  scene.build();
}

function enterIgorroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'igorhome', 'igorroom');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
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
  scene.actions([
    { label: 'Leave Igor\'s room', goto: ['igorhome', 'hallway'] },
    { label: 'Excuse yourself', goto: ['igorhome', 'hallway'] },
    { label: 'Chat', goto: ['igorhome', 'chat'] },
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
    default:
      enterEntrance(s, scene);
      break;
  }
}

export const igorhome: LocationDef = {
  name: 'igorhome',
  title: 'Igor Kruglov',
  region: 'other',
  locationType: 'bathroom',
  locclass: 'bedr',
  description: ['Fedor\'s eyes narrow and he looks at you as well. "Are you cheating on me?!"'],
  enter: enter,
};
