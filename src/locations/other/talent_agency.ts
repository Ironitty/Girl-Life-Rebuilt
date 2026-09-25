import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'talent_agency', '');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Aurora Talent Agency</b></center>');
  scene.img('images/locations/city/citycenter/aurora/front.jpg');
  scene.text('"Hello, welcome to the Aurora Female Talent Agency! How may I help you?"');
  if (((s as any).casting ?? 0) === 3  &&  ((s as any).hour ?? 0) <= 11  &&  ((s as any).SMTV_commercial ?? 0) === ((s as any).daystart ?? 0)) {
    ((s as any).audition = (s as any).audition ?? {})['room'] = 3;
    scene.text('"Oh? Are you here for the SMTV commercial? Please go to interview room 3. They\'re waiting for you inside.');
  } else {
    if (((s as any).casting ?? 0) === 3  &&  ((((s as any).hour ?? 0) > 11  &&  ((s as any).SMTV_commercial ?? 0) === ((s as any).daystart ?? 0))  ||  ((s as any).SMTV_commercial ?? 0) < ((s as any).daystart ?? 0))) {
      scene.text('"You\'re here for the SMTV commercial? Sorry, you\'re late, and you\'ve just cost the production tons of money. You\'ve been fired. The first rule of showbiz, honey: show up on time.');
      (s as any).casting = 0;
    }
  }
  scene.actions([
    { label: 'Leave', goto: ['city_center', ''] },
    { label: 'Go to the interview rooms', goto: ['talent_agency', 'hallway'] },
  ]);
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'talent_agency', '');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Aurora Talent Agency</b></center>');
  scene.img('images/locations/city/citycenter/aurora/front.jpg');
  scene.text('"Hello, welcome to the Aurora Female Talent Agency! How may I help you?"');
  if (((s as any).casting ?? 0) === 3  &&  ((s as any).hour ?? 0) <= 11  &&  ((s as any).SMTV_commercial ?? 0) === ((s as any).daystart ?? 0)) {
    ((s as any).audition = (s as any).audition ?? {})['room'] = 3;
    scene.text('"Oh? Are you here for the SMTV commercial? Please go to interview room 3. They\'re waiting for you inside.');
  } else {
    if (((s as any).casting ?? 0) === 3  &&  ((((s as any).hour ?? 0) > 11  &&  ((s as any).SMTV_commercial ?? 0) === ((s as any).daystart ?? 0))  ||  ((s as any).SMTV_commercial ?? 0) < ((s as any).daystart ?? 0))) {
      scene.text('"You\'re here for the SMTV commercial? Sorry, you\'re late, and you\'ve just cost the production tons of money. You\'ve been fired. The first rule of showbiz, honey: show up on time.');
      (s as any).casting = 0;
    }
  }
  scene.actions([
    { label: 'Leave', goto: ['city_center', ''] },
    { label: 'Go to the interview rooms', goto: ['talent_agency', 'hallway'] },
  ]);
  scene.build();
}

function enterHallway(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/aurora/auditions/hallway.jpg');
  scene.actions([
    { label: 'Leave', goto: ['talent_agency', ''] },
    { label: 'Room 1', goto: ['talent_agency', 'room1'] },
    { label: 'Room 2', goto: ['talent_agency', 'room2'] },
    { label: 'Room 3', goto: ['talent_agency', 'room3'] },
    { label: 'Room 4', goto: ['talent_agency', 'room4'] },
    { label: 'Room 5', goto: ['talent_agency', 'room5'] },
    { label: 'General Audition Room', goto: ['talent_agency', 'room6'] },
  ]);
  scene.build();
}

function enterRoom1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).audition ?? 0)?.['room'] !== 1  ||  ((s as any).audition ?? 0)?.['day'] !== ((s as any).daystart ?? 0)) {
    qspGoto(s, 'talent_agency', 'wrong_room');
  } else {
    scene.text('Woops, this content doesn\'t exist yet!');
    scene.actions([
      { label: 'Step out', goto: ['talent_agency', 'hallway'] },
    ]);
  }
  scene.build();
}

function enterRoom2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).audition ?? 0)?.['room'] !== 2  ||  ((s as any).audition ?? 0)?.['day'] !== ((s as any).daystart ?? 0)) {
    qspGoto(s, 'talent_agency', 'wrong_room');
  } else {
    scene.text('Woops, this content doesn\'t exist yet!');
    scene.actions([
      { label: 'Step out', goto: ['talent_agency', 'hallway'] },
    ]);
  }
  scene.build();
}

function enterRoom3(s: GameState, scene: SceneBuilder): void {
  if (((s as any).casting ?? 0) === 3  &&  ((s as any).hour ?? 0) <= 11  &&  ((s as any).SMTV_commercial ?? 0) === ((s as any).daystart ?? 0)) {
    qspGoto(s, 'talent_agency', 'SMTV_intro');
  } else {
    if (((s as any).audition ?? 0)?.['room'] !== 3  ||  ((s as any).audition ?? 0)?.['day'] !== ((s as any).daystart ?? 0)) {
      qspGoto(s, 'talent_agency', 'wrong_room');
    } else {
      scene.text('Woops, this content doesn\'t exist yet!');
      scene.actions([
        { label: 'Step out', goto: ['talent_agency', 'hallway'] },
      ]);
    }
  }
  scene.build();
}

function enterRoom4(s: GameState, scene: SceneBuilder): void {
  if (((s as any).audition ?? 0)?.['room'] !== 4  ||  ((s as any).audition ?? 0)?.['day'] !== ((s as any).daystart ?? 0)) {
    qspGoto(s, 'talent_agency', 'wrong_room');
  } else {
    scene.text('Woops, this content doesn\'t exist yet!');
    scene.actions([
      { label: 'Step out', goto: ['talent_agency', 'hallway'] },
    ]);
  }
  scene.build();
}

function enterRoom5(s: GameState, scene: SceneBuilder): void {
  if (((s as any).audition ?? 0)?.['room'] !== 5  ||  ((s as any).audition ?? 0)?.['day'] !== ((s as any).daystart ?? 0)) {
    qspGoto(s, 'talent_agency', 'wrong_room');
  } else {
    scene.text('Woops, this content doesn\'t exist yet!');
    scene.actions([
      { label: 'Step out', goto: ['talent_agency', 'hallway'] },
    ]);
  }
  scene.build();
}

function enterRoom6(s: GameState, scene: SceneBuilder): void {
  if (((s as any).audition ?? 0)?.['room'] > 0  &&  ((s as any).audition ?? 0)?.['room'] <= 5) {
    qspGoto(s, 'talent_agency', 'wrong_room2');
  } else {
    if (((s as any).audition ?? 0)?.['role'] === ''  &&  ((s as any).audition ?? 0)?.['day'] !== ((s as any).daystart ?? 0)) {
      qspGoto(s, 'talent_agency', 'wrongday');
    } else {
      scene.text('Woops, this content doesn\'t exist yet!');
      scene.actions([
        { label: 'Step out', goto: ['talent_agency', 'hallway'] },
      ]);
    }
  }
  scene.build();
}

function enterEnd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'money', 'earn', ((s as any).actpayfin ?? 0));
  qspGoto(s, 'talent_agency', '');
  scene.build();
}

function enterWrongday(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/aurora/auditions/room.jpg');
  scene.text('You poke your head into the room and see someone at a desk reviewing papers while people bustle in and out. They look up at you.');
  scene.text('"Yes?"');
  scene.text(`"Hi, is this the audition for ${((s as any).role ?? '')}?"`);
  scene.text('"No, this isn\'t the audition for that," they say as they look back at you with annoyance." "You have the day wrong. Go check your time for casting again."');
  scene.text('Cringing with embarrassment, you apologize and leave the room.');
  scene.actions([
    { label: 'Leave', goto: ['talent_agency', 'hallway'] },
  ]);
  scene.build();
}

function enterWrongRoom2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/aurora/auditions/room.jpg');
  scene.text('You poke your head into the room and see someone at a desk reviewing papers while people bustle in and out. They look up at you.');
  scene.text('"Yes?"');
  scene.text(`"Hi, uhh, is this the audition for ${((s as any).role ?? '')}?"`);
  scene.text('"No, that\'s a speaking role. We don\'t do auditions for those in here. Try one of the other rooms."');
  scene.text('Cringing with embarrassment, you apologize and leave the room.');
  scene.actions([
    { label: 'Leave', goto: ['talent_agency', 'hallway'] },
  ]);
  scene.build();
}

function enterSMTVIntro(s: GameState, scene: SceneBuilder): void {
  ((s as any).actresslife = (s as any).actresslife ?? {})['Yanovich'] = 1;
  ((s as any).actresslife = (s as any).actresslife ?? {})['SMTV_commercial'] = 1;
  scene.img('images/locations/city/citycenter/aurora/auditions/room.jpg');
  scene.text('You enter the interview room, and someone is there waiting for you.');
  scene.text(`"Ahh! Hello! You must be Miss ${((s as any).pcs_lastname ?? '')}. I'm Artur Yanovich. But you can call me Mr Yanovich," he says, holding his hand.`);
  scene.actions([
    { label: 'Shake his hand', handler: (st: GameState) => {
    scene.text('You shake his hand and smile. "I was told I was supposed to come here to prepare for the shoot today?"');
    scene.text('"Yes, that\'s right," he says. "Normally, we would use one of the film sets in the industrial area, but for this kind of thing, we need more of a crowd, so we\'re doing it in the city center."');
    scene.text('You nod understandingly.');
    scene.text('"Alright, time for you to undress."');
    qspCall(st, 'willpower', 'misc', 'resist', 'hard');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: '"Wait, what?"', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: '"Wait, what?"', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/aurora/auditions/room.jpg');
    scene.text('He frowns, seemingly puzzled. "I thought you were told what this shoot is about. So you need to get naked. Unless you wanted to do it in the street?"');
    scene.actions([
      { label: '"Oh… Right…"', handler: (st: GameState) => { qspGoto(st, 'talent_agency', ((((st as any).pcs_inhib ?? 0) < 50) ? ('SMTV_shy') : ('SMTV_confident'))); } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: '"Okay"', handler: (st: GameState) => { qspGoto(st, 'talent_agency', ((((st as any).pcs_inhib ?? 0) < 50) ? ('SMTV_shy') : ('SMTV_confident'))); } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSMTVShy(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'outfit', 'strip_all');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/photo/fullstrip.mp4');
  scene.text('Mr Yanovich makes no move to leave the room as you shyly take off all your clothes and awkwardly stand naked before him.');
  scene.text('He stares appreciatively at your nude body.');
  if (((s as any).prcptn_lvl ?? 0) >= 30) {
    scene.text('A hard bulge starts to form in the crotch of his trousers.');
  }
  scene.text(`"You have a beautiful body, Miss ${((s as any).pcs_lastname ?? '')}…"`);
  scene.text('"Uhm… ah… Thank you, Mr Yanovich…" you stammer.');
  scene.text('"Right then, let\'s go!"');
  scene.actions([
    { label: '"Wait! What are you-!"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/aurora/front.jpg');
    scene.text('He suddenly grabs you by the arm and leads you out of the room, leaving your clothes behind. He walks you straight through the populated lobby of the talent agency. You do your best to cover your face in embarrassment, but it\'s hard with only one hand. You blush furiously as Mr Yanovich pulls you right out the front door and into the back seat of a car.');
    scene.text(`Once inside the car, he gets on a radio and says, "Alright, we've got Miss ${((st as any).pcs_lastname ?? '')} here, naked and ready in the car. Let's move out."`);
    scene.actions([
      { label: '"Move out?"', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    scene.img('images/locations/city/citycenter/down.jpg');
    scene.text('"Move out?" you ask, trying to stay away from the windows as much as possible. "Where are we going?"');
    scene.text('Mr Yanovich starts the car and says to you, "This is not an ideal location to shoot. However, we have a particular street in mind, so we\'ll go there."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 45;
    scene.img('images/locations/city/island/island.jpg');
    scene.text('After some driving, they park on a side street, and you see the camera crew get out of a van behind your car and begin to set up.');
    scene.text('Mr Yanovich stays in the car with you very professionally and efficiently directs you on where the cameras will be, what pace you should walk at, where you should look, and when. His professional demeanour is quite calming to you, helping you settle down and prepare for what\'s about to come next.');
    scene.text(`"Alright, ${((st as any).pcs_lastname ?? '')}. It's time."`);
    scene.text('Your heart starts to pound inside your chest as nervousness takes hold again. You\'ll have to walk down the street naked, after all!');
    scene.actions([
      { label: 'Do it', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    scene.img('images/locations/city/citycenter/aurora/commercial_bts1.mp4');
    scene.text('With a deep breath, you open the car door and step out. Gusts of wind blow, chilling your naked body. An aide quickly directs you to the marked spot, shuts the car door, and rushes out of the frame.');
    scene.text('The camera is directly in front of you. So you focus with all your might, concentrating on getting it right in one go.');
    scene.text('<i>Whew… Just like regular modelling. No different. Calm… Calm… You can do this…</i>');
    scene.actions([
      { label: 'Action!', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/aurora/commercial_bts2.mp4');
    scene.text('Mr Yanovich points at you and says, "Action!"');
    scene.text('You start to stride forward, and the cameraman moves backwards in sync. People turn their heads and stare at your nudity as you step past.');
    scene.text('Just in time, you remember to glance at the secondary camera parked across the street like it says in the script.');
    scene.text('Walking down this short road seems to take forever, but you can do nothing except try your best to maintain composure.');
    scene.actions([
      { label: 'Cut!', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/aurora/commercial_bts3.mp4');
    scene.text('At last, you take the final step and make it past the checkpoint. Another aide is there, and you gratefully rush into the gloriously warm blanket she holds and wraps your naked body in.');
    scene.text('Mr Yanovich and others are huddled around a monitor, examining the footage.');
    scene.text(`"Amazing!" he exclaims. "A true one-take-wonder! Excellent work here, Miss ${((st as any).pcs_lastname ?? '')}! Excellent work! That's all we need from you today, we'll take you back to Aurora, and you can get changed into your clothes.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    scene.img('images/locations/city/citycenter/aurora/front.jpg');
    scene.text('You get in the car and head back to Aurora. When you get there, Mr Yanovich leads you back through the doors and into the interview room you met him in. On the way there, you don\'t feel as embarrassed as you did before. In fact, you feel pretty confident and strong. You just walked down a busy street completely nude! You should be proud of yourself! So what\'s walking through a lobby with other actresses?');
    scene.actions([
      { label: 'Dress', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/pc/activities/misc/dress_1.mp4');
    qspCall(st, 'outfit', 'wear_last_worn');
    (st as any).actpayfin = ((4000 + (((st as any).pcs_mdlng ?? 0) * 25) + (((st as any).pcs_apprnc ?? 0) * 2) + (((st as any).pcs_inhib ?? 0) * 3)) * 3);
    scene.text('You change back into your clothes while Mr Yanovich does something at the desk.');
    scene.text(`Before you finish dressing, Mr Yanovich says, "It was a pleasure working with you, Miss ${((st as any).pcs_lastname ?? '')}. I hope I get another chance to do it again!" He smiles warmly and leaves the room.`);
    scene.text(`Looking over at the desk, you see a wad of cash. You rush over, and when you finish counting, you realize that it's ${qspFunc(s, 'money', 'string_profit', ((st as any).actpayfin ?? ''))}!`);
    scene.text('<i>Holy crap! Acting is some serious money!</i>');
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + (20);
    (st as any).casting = 1;
    ((st as any).audition = (st as any).audition ?? {})['room'] = 0;
    scene.actions([
      { label: 'Leave', goto: ['talent_agency', 'end'] },
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
  } },
  ]);
  scene.build();
}

function enterSMTVConfident(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'outfit', 'strip_all');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/photo/fullstrip.mp4');
  scene.text('You confidently strip down in front of Mr Yanovich, not bothered by his presence.');
  scene.text('He stares appreciatively at your nude body.');
  if (((s as any).prcptn_lvl ?? 0) >= 30) {
    scene.text('A hard bulge starts to form in the crotch of his trousers.');
  }
  scene.text(`"You have a beautiful body, Miss ${((s as any).pcs_lastname ?? '')}…"`);
  scene.text('"Thank you very much Mr Yanovich," you say unabashedly.');
  scene.text('"Right then, let\'s go!"');
  scene.actions([
    { label: '"Leave"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/aurora/front.jpg');
    scene.text('He opens the door, and you follow him back through the lobby, leaving your clothes behind in the interview room. A few people whisper and glance at you as you walk past, but you don\'t mind. Mr Yanovich leads you right out the front door and into the back seat of a car.');
    scene.text(`Once inside the car, he gets on a radio and says, "Alright, we've got Miss ${((st as any).pcs_lastname ?? '')} here, naked and ready in the car. Let's move out."`);
    scene.actions([
      { label: '"Move out?"', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    scene.img('images/locations/city/citycenter/down.jpg');
    scene.text('"Move out?" you ask. "Where are we going?"');
    scene.text('Mr Yanovich starts the car and says to you, "This is not an ideal location to shoot. However, we have a particular street in mind, so we\'ll go there."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 45;
    scene.img('images/locations/city/island/island.jpg');
    scene.text('After some driving, they park on a side street, and you see the camera crew get out of a van behind your car and begin to set up.');
    scene.text('Mr Yanovich stays in the car with you and very professionally and efficiently directs you on where the cameras will be, what pace you should walk at, where you should look, and when. You listen diligently and get ready for what\'s about to come next.');
    scene.text(`"Alright, ${((st as any).pcs_lastname ?? '')}. It's time."`);
    scene.actions([
      { label: 'Do it', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    scene.img('images/locations/city/citycenter/aurora/commercial_bts1.mp4');
    scene.text('With a deep breath, you open the car door and calmly step out. Gusts of wind blow, chilling your naked body. An aide quickly directs you to the marked spot, shuts the car door, and rushes out of the frame.');
    scene.text('The camera is directly in front of you. So you focus with all your might, concentrating on getting it right in one go.');
    scene.text('<i>Calm… Professional… Do this right, and your acting career will take off!</i>');
    scene.actions([
      { label: 'Action!', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/aurora/commercial_bts2.mp4');
    scene.text('Mr Yanovich points at you and yells, "Action!"');
    scene.text('You start to stride forward, and the cameraman moves backwards in sync. People turn their heads and stare at your nudity as you step past.');
    scene.text('You glance at the secondary camera parked across the street like you were directed to.');
    scene.text('The walk itself feels pretty short. You\'re very confident in yourself and your body. This type of thing isn\'t anything you haven\'t done before, so you aren\'t particularly bothered by the glances and stares.');
    scene.actions([
      { label: 'Cut!', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/aurora/commercial_bts3.mp4');
    scene.text('At last, you take the final step and make it past the checkpoint. Another aide is there, and you step into the gloriously warm blanket she holds and wraps your naked body in.');
    scene.text('Mr Yanovich and others are huddled around a monitor, examining the footage.');
    scene.text(`"Amazing!" he exclaims. "A true one-take-wonder! Excellent work here, Miss ${((st as any).pcs_lastname ?? '')}! Excellent work! That's all we need from you today, we'll take you back to Aurora, and you can get changed back into your clothes."`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    scene.img('images/locations/city/citycenter/aurora/front.jpg');
    scene.text('You get in the car and head back to Aurora. When you get there, Mr Yanovich leads you back through the doors and into the interview room you met him in. You feel pretty proud of yourself, having done the shoot in a single take. You may be cut out to be an actress, after all!');
    scene.actions([
      { label: 'Dress', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/pc/activities/misc/dress_1.mp4');
    qspCall(st, 'outfit', 'wear_last_worn');
    (st as any).actpayfin = (4000 + (((st as any).pcs_mdlng ?? 0) * 25) + (((st as any).pcs_apprnc ?? 0) * 2) + (((st as any).pcs_inhib ?? 0) * 5)) * 3;
    scene.text('You change back into your clothes while Mr Yanovich does something at the desk.');
    scene.text(`Before you finish dressing, Mr Yanovich says, "It was a pleasure working with you, Miss ${((st as any).pcs_lastname ?? '')}. I hope I get another chance to do it again!" He smiles warmly and leaves the room.`);
    scene.text(`Looking over at the desk, you see a wad of cash. You rush over, and when you finish counting, you realize that it's ${qspFunc(s, 'money', 'string_profit', ((st as any).actpayfin ?? ''))}!`);
    scene.text('<i>Holy crap! Acting is some serious money!</i>');
    (st as any).casting = 1;
    ((st as any).audition = (st as any).audition ?? {})['room'] = 0;
    scene.actions([
      { label: 'Leave', goto: ['talent_agency', 'end'] },
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
  } },
  ]);
  scene.build();
}

function enterWrongRoom(s: GameState, scene: SceneBuilder): void {
  (s as any).interview = (Math.floor(Math.random() * 21) + 1);
  if (((s as any).interview ?? 0) === 1) {
    scene.img('images/locations/city/citycenter/aurora/auditions/wrong/1.jpg');
    scene.text('You enter the room and see a girl conversing with a director or producer. You suddenly realize that you\'ve gone into the wrong room and back out, apologizing.');
  } else {
    if (((s as any).interview ?? 0) === 2) {
      scene.img('images/locations/city/citycenter/aurora/auditions/wrong/2.jpg');
      scene.text('You enter the room and see a girl sitting on a couch while a director or producer shuffles notes on his desk. You suddenly realize that you\'ve gone into the wrong room and back out, apologizing.');
    } else {
      if (((s as any).interview ?? 0) === 3) {
        scene.img('images/locations/city/citycenter/aurora/auditions/wrong/3.jpg');
        scene.text('You enter the room and stop dead as you see a naked girl except for a pair of panties.');
        scene.text('You rush back out the door shouting, "Wrong room! Sorry!" and slam it shut behind you.');
      } else {
        if (((s as any).interview ?? 0) === 4) {
          scene.img('images/locations/city/citycenter/aurora/auditions/wrong/4.jpg');
          scene.text('You enter the room and stop dead when you see a girl standing completely naked. The man in the room shouts at you, "Hey! What do you think you\'re doing here?! Get the fuck out!"');
          scene.text('You rush back out the door shouting, "Wrong room! Sorry!" and slam it shut behind you.');
        } else {
          if (((s as any).interview ?? 0) === 5) {
            scene.img('images/locations/city/citycenter/aurora/auditions/wrong/5.mp4');
            scene.text('You open the door to the interview room and are met with a scene of a girl riding a man\'s cock like a mechanical bull.');
            scene.text('"Come on! You\'re going to have to go faster if you want to get this job!" the man growls.');
            scene.text('"Ahh! Ahhh!! AHHHH!!!"');
            scene.text('The girl only screams more as she tries to pick up speed, even though she is clearly struggling to keep up with the previous pace. She doesn\'t look like she\'s pleased.');
            scene.text('Neither of them seems to notice that you entered the wrong room. So finally, seeing you\'ve made a mistake and not wanting to get caught, you leave quietly, trying to close the door as silently as possible.');
          } else {
            if (((s as any).interview ?? 0) === 6) {
              scene.img('images/locations/city/citycenter/aurora/auditions/wrong/6.mp4');
              scene.text('You open the door to the interview room and see a girl on all fours, on the couch, being pummeled from behind by a man. You and the girl instantly make eye contact, and her expression immediately becomes terrified.');
              scene.text('"Oh my God!" she screams.');
              scene.text('The man looks up from his business and sees you. He shouts at you, "What the fuck are you doing in here! Get out!" continuing to pound the girl even though she\'s struggling to get off his dick now.');
              scene.text('You run out of the room, slamming the door behind you. Through the barrier, you can hear the girl still panicking.');
              scene.text('"No, wait! Stop! No one was supposed to know!"');
              scene.text('"Shut the fuck up, girl. No one is going to find out! If you still want this job, stop struggling and take this creampie!');
              scene.text('"That wasn\'t part of the deal! I\'m not on birth control!"');
              scene.text('"You should have thought of that before you decided to become an actress!"');
            } else {
              if (((s as any).interview ?? 0) === 7) {
                scene.img('images/locations/city/citycenter/aurora/auditions/wrong/7.mp4');
                scene.text('You open the door and see an upset-looking girl bent over the desk as the man behind her slowly pulls his cock out from her pussy. You freeze in shock and then swiftly shut the door without a word, but you can hear voices through it.');
                scene.text('"Congratulations on landing the part, sweetie. I hope you realize what your role will be moving forward.');
              } else {
                if (((s as any).interview ?? 0) === 8) {
                  scene.img('images/locations/city/citycenter/aurora/auditions/wrong/8.mp4');
                  scene.text('You open the door and are shocked to see a young girl on the couch while two men rhythmically piston her ass and pussy.');
                  scene.text('"Ahh! This ass is tight! You should try it!"');
                  scene.text('"Plenty of time for that later. We\'ll have all of the production now that we\'ve found our perfect star."');
                  scene.text('The girl says soft moans and grunts, although it doesn\'t seem like she\'s enjoying herself.');
                  scene.text('None of them seems to notice that you even entered the room. Seeing you\'ve made a mistake and not wanting to get caught, you leave quietly, trying to close the door as silently as possible.');
                } else {
                  if (((s as any).interview ?? 0) === 9) {
                    scene.img('images/locations/city/citycenter/aurora/auditions/wrong/9.jpg');
                    scene.text('You open the door to see a man with his cock hanging out and a girl kneeling in front of him with cum all over her face.');
                    scene.text('"Good job, girl. Now lick me clean, and we\'ll talk about you getting this role."');
                    scene.text('She obediently handles his cock carefully and gives it a thorough tongue bath with no enthusiasm whatsoever.');
                    scene.text('As you shut the door quietly, you hear the man say, "Don\'t forget to swallow, missy…"');
                  } else {
                    if (((s as any).interview ?? 0) === 10) {
                      scene.img('images/locations/city/citycenter/aurora/auditions/wrong/10.jpg');
                      scene.text('You open the door and freeze in shock as right in front of you is the face of a girl being fucked violently over a desk. Her hair is held in a tight fist behind her head as the man uses it as extra leverage to pull her farther onto his cock.');
                      scene.text('The man looks up at you and says, "I think you\'ve got the wrong room, darling," not pausing his fucking for even a moment.');
                      scene.text('"Ugh! Ugh! Ugh! Ugh!" The girl doesn\'t even seem to notice you\'re in front of her, grunting every time his cock slams into her. It looks like she\'s not focused on anything, and her face appears to be tolerant rather than enjoying.');
                      scene.text('"Uhm, ah- sorry." You close the door as casually as possible, still hearing flesh slapping and grunting after it has clicked shut.');
                    } else {
                      if (((s as any).interview ?? 0) === 11) {
                        scene.img('images/locations/city/citycenter/aurora/auditions/wrong/11.jpg');
                        scene.text('You open the door and see a smiling girl with cum dripping down her face and a man who\'s clearly the one who just put it there.');
                        scene.text('"Sooooo, Mr Schneider? Do you think I have what it takes to become an actress?" the smiling girl says in a melodic voice.');
                        scene.text('"Oh, I think we can find a part for such a silver tongue in our production…" he says with a grin.');
                        scene.text('"Maybe even a leeaaad paaaart?" she says, putting his cock back in her mouth and pushing her lips to the base.');
                        scene.text('"Ohhhh… I- <i>ooooohhhhhhh…</i>" the man loses his train of thought. He drifts into ecstasy while the girl does an impressive trick of swallowing while his cock is already in her throat, massaging it with her oesophagus.');
                        scene.text('"Wrong… room…" you mumble and close the door. Neither of them pays any attention to you.');
                      } else {
                        if (((s as any).interview ?? 0) === 12) {
                          scene.img('images/locations/city/citycenter/aurora/auditions/wrong/12.mp4');
                          scene.text('You open the door and suddenly stop as you see a girl leaning over a desk and deeply enjoying the cock of the man behind her.');
                          scene.text('"How about these moves, mister?" she giggles as she begins to wildly gyrate her hips.');
                          scene.text('"Goodness gracious, girl! You\'re so tight- Ugh! I\'m gonna cum!"');
                          scene.text('Hearing this, she smiles wide and picks up speed. "If you cum inside, I expect a larger salary!"');
                          scene.text('"You… Got it!" the man says, abruptly grabbing her by the hips and thrusting so hard you see her feet come off the ground.');
                          scene.text('Neither of them pays attention to you as you close the door like nothing happened.');
                        } else {
                          if (((s as any).interview ?? 0) === 13) {
                            scene.img('images/locations/city/citycenter/aurora/auditions/wrong/13.jpg');
                            scene.text('You open the door and are greeted with the face of an unhappy-looking girl being fucked over a desk.');
                            scene.text('She\'s gritting her teeth and bearing with it, and you can hear her muttering, "Rich and famous… Rich and famous… Let him fuck you, and you\'ll be rich and famous…"');
                            scene.text('The man smiles, "Don\'t forget, girl, you\'re letting me fuck you day <i>and</i> night for this. I get a key to your apartment, or you don\'t get the part!"');
                            scene.text('Looking up, he suddenly sees you standing there. "Hey! What are you doing?! Get the fuck out!"');
                            scene.text('"Yes, sir! Sorry sir!" you squeak and slam the door shut.');
                          } else {
                            if (((s as any).interview ?? 0) === 14) {
                              scene.img('images/locations/city/citycenter/aurora/auditions/wrong/14.mp4');
                              scene.text('"How long do we have to keep doing this?"');
                              scene.text('You start to open the door when you hear words and realize you\'ve got the wrong room. You\'re about to close it completely when you peer through the crack and see two naked girls lying on the sofa, half-heartedly playing with themselves. A man is leaning back on the desk in front of them, jacking himself off.');
                              scene.text('"You do it until I tell you to stop! If you want to get both of the sister roles, I need to see some sisterly love… Now you, get on your knees and lick her pussy while I fuck your ass. And you! Don\'t even think about taking that finger off your clit!"');
                              scene.text('Having seen enough, you shut the door silently and go on your way.');
                            } else {
                              if (((s as any).interview ?? 0) === 15) {
                                scene.img('images/locations/city/citycenter/aurora/auditions/wrong/15.mp4');
                                scene.text('You open the door just in time to see a girl on her knees in front of a man and jets of cum spurt from his cock to hit her square in the face.');
                                scene.text('"Sorry! Wrong room!" you shout and shut the door fast behind you.');
                              } else {
                                if (((s as any).interview ?? 0) === 16) {
                                  scene.img('images/locations/city/citycenter/aurora/auditions/wrong/16.mp4');
                                  scene.text('You open the door and see a cheerful-looking girl with fresh cum and a bright smile.');
                                  scene.text('"…and if you want this part, I get full access to your body to fuck whenever I please, and you must obey every order I give you. Are you happy with that?"');
                                  scene.text('She gives a jovial double thumbs up and smiles even brighter.');
                                  scene.text('"Good, now get up and sign here. We\'ll get you keys to my house after, and your first order will be to go home with my cum on your face."');
                                  scene.text('"Yes, mister!"');
                                  scene.text('You quietly close the door and pretend like you saw nothing.');
                                } else {
                                  if (((s as any).interview ?? 0) === 17) {
                                    scene.img('images/locations/city/citycenter/aurora/auditions/wrong/17.mp4');
                                    scene.text('Opening the door, the very first thing you see is a girl choking on cock.');
                                    scene.text('The man\'s dick is deep into her throat, and he says, "Ahh, yes. You have the best throat in the business, you know that?"');
                                    scene.text('"Mmm! Mmm!"');
                                    scene.text('It looks like his "compliment" has motivated her to try and increase the pleasure he\'s receiving.');
                                    scene.text('"Ugh! I\'m cumming!"');
                                    scene.text('At his notice, she forces herself as far onto his cock as she can manage and holds herself there. Moments later, you see her neck muscles swallowing as he cums directly down her throat.');
                                    scene.text('Now seems like a good time to make your escape.');
                                  } else {
                                    if (((s as any).interview ?? 0) === 18) {
                                      scene.img('images/locations/city/citycenter/aurora/auditions/wrong/18.mp4');
                                      scene.text('You open the door and see a girl polishing a man\'s cock with her lips.');
                                      scene.text('"Yeah… Just like that, you little slut…"');
                                      scene.text('She takes his dick out of her mouth and complains, "But I\'m not a slut if I only do it for you, Mr Schneider!"');
                                      scene.text('He shoves his cock back in her mouth to cut her off. "Shut up whore! You take dick for money and favours! That makes you a fucking slut!"');
                                      scene.text('She moans in a pouty tune as you shut the door, not wanting to get caught up in this mess.');
                                    } else {
                                      if (((s as any).interview ?? 0) === 19) {
                                        scene.img('images/locations/city/citycenter/aurora/auditions/wrong/19.mp4');
                                        scene.text('You open the door and see a worried-looking girl doing her best to give a man a blowjob.');
                                        scene.text('"Come now, you have to do better than that if I\'m going to hire you. Keeping your pussy off limits makes your job that much harder, you know. I\'ll need a velvet mouth and the best blowjob I\'ve ever had if I\'m even considering hiring you without access to that virgin pussy."');
                                        scene.text('The girl\'s distress increases, and she tries even harder. Her skill looks a bit subpar, to be honest, but there is a better time for that!');
                                        scene.text('You sneak backwards and return to the hallway quietly.');
                                      } else {
                                        if (((s as any).interview ?? 0) === 20) {
                                          scene.img('images/locations/city/citycenter/aurora/auditions/wrong/20.mp4');
                                          scene.text('You open the door and see a girl in glasses giving what looks like a loving blowjob to the man inside with her.');
                                          scene.text('"Yeah, girl… just like that…"');
                                          scene.text('The girl lets his cock pop out of her mouth for a second as she turns to look at you.');
                                          scene.text('"Excuse me? This is <i>my</i> audition here? Go to your own room, you fucking slut," she says before going back to working on the man\'s cock.');
                                          scene.text('Your mouth hangs open in offence as neither of them pays any more attention to you.');
                                          scene.text('<i>Who are you calling a slut when you\'re the one blowing a guy for your "audition?"</i> you think to yourself as you shut the door.');
                                        } else {
                                          if (((s as any).interview ?? 0) === 21) {
                                            scene.img('images/locations/city/citycenter/aurora/auditions/wrong/21.mp4');
                                            scene.text('You open the door and see a girl being furiously fucked by three guys. Or is it the other way around?');
                                            scene.text('"Ahh, yes! I love it when we get ready-made sluts like this!"');
                                            scene.text('"Yeah, man, makes it so much easier when they propose fucks for favours instead of us having to extort them into it."');
                                            scene.text('"I wish she was a little tighter, though."');
                                            scene.text('The girl obviously says nothing, as all of her holes are currently busy being stuffed by cocks.');
                                            scene.text('Seriously confused, you turn around and close the door behind you.');
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
  scene.actions([
    { label: 'Leave', goto: ['talent_agency', 'hallway'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'hallway':
      enterHallway(s, scene);
      break;
    case 'room1':
      enterRoom1(s, scene);
      break;
    case 'room2':
      enterRoom2(s, scene);
      break;
    case 'room3':
      enterRoom3(s, scene);
      break;
    case 'room4':
      enterRoom4(s, scene);
      break;
    case 'room5':
      enterRoom5(s, scene);
      break;
    case 'room6':
      enterRoom6(s, scene);
      break;
    case 'end':
      enterEnd(s, scene);
      break;
    case 'wrongday':
      enterWrongday(s, scene);
      break;
    case 'wrong_room2':
      enterWrongRoom2(s, scene);
      break;
    case 'SMTV_intro':
      enterSMTVIntro(s, scene);
      break;
    case 'SMTV_shy':
      enterSMTVShy(s, scene);
      break;
    case 'SMTV_confident':
      enterSMTVConfident(s, scene);
      break;
    case 'wrong_room':
      enterWrongRoom(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const talent_agency: LocationDef = {
  name: 'talent_agency',
  title: 'Aurora Talent Agency',
  region: 'other',
  description: ['"Hello, welcome to the Aurora Female Talent Agency! How may I help you?"'],
  enter: enter,
};
