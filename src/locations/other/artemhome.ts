import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

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
  qspCall(s, 'core_library', 'setloc', 'artemhome', 'home');
  (s as any).location_type = 'public_indoors';
  (s as any).popolaini = 0;
  (s as any).saunaYouRoom = 0;
  (s as any).boycherdaksex = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'schedule', 'A2');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  if (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 18) {
    (s as any).ArtemParentsLoc = 5;
  } else {
    if (((s as any).week ?? 0) >= 6) {
      (s as any).ArtemParentsLoc = 5;
    } else {
      (s as any).ArtemParentsLoc = 0;
    }
  }
  if (qspFunc(s, 'artem_chebotarev_schedule', 'is_home')) {
    if (((s as any).ArtemParentsLoc ?? 0) === 5) {
      (s as any).DoorOpenedBy = (Math.floor(Math.random() * 2) + 0);
    } else {
      (s as any).DoorOpenedBy = 0;
    }
  } else {
    if (((s as any).ArtemParentsLoc ?? 0) === 5) {
      (s as any).DoorOpenedBy = 1;
    } else {
      (s as any).DoorOpenedBy = (-1);
    }
  }
  scene.img('images/locations/pavlovsk/resident/apartment/aptdoor.jpg');
  if (((s as any).hour ?? 0) >= 22) {
    scene.text('It would be rude to even ring the doorbell at this time. Artem is probably asleep, so you decide against it and lower your hand.');
  } else {
    if (((s as any).hour ?? 0) < 8) {
      scene.text('It would be rude to even ring the doorbell at this time. Artem is probably asleep, so you decide against it and lower your hand.');
    } else {
      qspCall(s, 'stat', '');
      scene.text('You go to Artem\'s apartment and ring the doorbell.');
      if (((s as any).artemQW ?? 0)?.['artemlove'] === 1) {
        scene.text('You hope that it\'s Artem who will answer.');
      }
      if ((!((s as any).DoorOpenedBy ?? 0))) {
        scene.img('images/characters/shared/headshots_main/big2.jpg');
        if (((s as any).artemQW ?? 0)?.['artlie'] === 2  ||  ((s as any).artemQW ?? 0)?.['artembrokenheart'] === 1  ||  ((s as any).artemQW ?? 0)?.['artemblok'] === 1) {
          scene.text('You stand outside the Chebotarev household, knocking on the door. It\'s soon answered by Artem, who frowns as soon as he sees you. "I told you I never wanted to see you again! Please go away."');
          scene.text('He closes the door in your face without another word.');
          scene.actions([
            { label: 'Leave', goto: ['pod_ezd', 'etaj_1'] },
          ]);
        } else {
          scene.text('You stand outside the Chebotarev household, hoping that Artem will come to the door.');
          scene.text('Artem opens the door smiling. "Come in, I was just playing some games."');
          scene.text('Once you walk inside, he closes the door and heads for the living room, where some game is playing on the TV. He waits for you to take a seat first.');
          scene.actions([
            { label: 'Take a seat', handler: (st: GameState) => {
    qspCall(st, 'artem_chebotarev_schedule', 'force', 'home_livingroom');
    qspGoto(st, 'artemhome', 'livingroom');
  } },
          ]);
        }
      } else {
        if (((s as any).DoorOpenedBy ?? 0) === 1) {
          scene.img('images/locations/pavlovsk/resident/apartment/artemhome/glinina.jpg');
          if (((s as any).artemQW ?? 0)?.['metArtemMom'] === 0) {
            ((s as any).artemQW = (s as any).artemQW ?? {})['metArtemMom'] = 1;
            scene.text('You stand outside the Chebotarev household and knock on the door, which is quickly answered by Artem\'s mother, who has a friendly smile on her face. "Hello. Can I help you?"');
            scene.text('You return her smile. "Yes. Is Artem home?"');
            if (((s as any).fame ?? 0)?.['pav_slut'] >= 200  ||  ((s as any).grupTipe ?? 0) === 4) {
              scene.text('Her smile falters. "Oh? Are you one of his school friends?"');
              scene.text('You nod. "Yes, we go to school together."');
              scene.text('"I\'m Glinina, Artem\'s mother. Who are you?"');
              // TODO-QSP: dynamic text: "<<$pcs_nickname>>," you answer, but don''t elaborate further.
              scene.text(`"${((s as any).pcs_nickname || '')}," you answer, but don't elaborate further.`);
              if (((s as any).artemQW ?? 0)?.['artlie'] === 2  ||  ((s as any).artemQW ?? 0)?.['artembrokenheart'] === 1  ||  ((s as any).artemQW ?? 0)?.['artemblok'] === 1) {
                scene.text('When she hears your name, her demeanor swiftly changes. "Oh. It\'s you," she frowns. "I don\'t know what you did to my sweet Artem, but he says he never wants to see you again, so please leave."');
                scene.text('She closes the door in your face without another word.');
              } else {
                scene.text('She keeps up her smile. "Is he going to tutor you, dear?"');
                scene.text('You smile. "Something like that. Is he here?"');
                if (qspFunc(s, 'artem_chebotarev_schedule', 'is_home')) {
                  // TODO-QSP: dynamic text: Her face tightens ever so slightly. "Yes, he''s in his room." She turns to face ...
                  scene.text(`Her face tightens ever so slightly. "Yes, he's in his room." She turns to face down the hall. "Artem dear, ${((s as any).pcs_nickname || '')} from school is here." She then turns back to you. "Go on in. He's in his room."`);
                  scene.actions([
                    { label: 'Enter', handler: (st: GameState) => {
    qspCall(st, 'artem_chebotarev_schedule', 'force', 'home_bedroom');
    qspGoto(st, 'artemhome', 'hallway');
  } },
                  ]);
                } else {
                  scene.text('Her face tightens ever so slightly. "Well, he isn\'t home at the moment."');
                  scene.text('You understand it\'s time for you to leave');
                }
              }
            } else {
              if (((s as any).artemQW ?? 0)?.['artlie'] === 2  ||  ((s as any).artemQW ?? 0)?.['artembrokenheart'] === 1  ||  ((s as any).artemQW ?? 0)?.['artemblok'] === 1) {
                scene.text('"Who should I tell him is here?"');
                // TODO-QSP: dynamic text: "I''m <<$pcs_nickname>>."
                scene.text(`"I'm ${((s as any).pcs_nickname || '')}."`);
                scene.text('When she hears your name, her demeanor swiftly changes. "Oh. It\'s you," she frowns. "I don\'t know what you did to my sweet Artem, but he says he never wants to see you again, so please leave."');
                scene.text('She closes the door in your face without another word.');
              } else {
                scene.text('She seems pleased. "You must be one of Artem\'s little friends. I\'m Glinina, Artem\'s mother. What\'s your name, dear?"');
                // TODO-QSP: dynamic text: "<<$pcs_nickname>>. We go to school together."
                scene.text(`"${((s as any).pcs_nickname || '')}. We go to school together."`);
                if (qspFunc(s, 'artem_chebotarev_schedule', 'is_home')) {
                  scene.text('"Come in, come in." She turns to face down the hall. "Artem dear, one of your little friends is here." She then turns back to you. "Go on in. He\'s in his room."');
                  scene.actions([
                    { label: 'Enter', goto: ['artemhome', 'hallway'] },
                  ]);
                } else {
                  scene.text('"Well, he isn\'t home actually. You can come back later."');
                  scene.text('You understand it\'s time for you to leave');
                }
              }
            }
          } else {
            if (((s as any).artemQW ?? 0)?.['artlie'] === 2  ||  ((s as any).artemQW ?? 0)?.['artembrokenheart'] === 1  ||  ((s as any).artemQW ?? 0)?.['artemblok'] === 1) {
              scene.text('You stand outside the Chebotarev household and knock on the door, which is quickly answered by Artem\'s mother, who has a friendly smile on her face until she recognizes you. "Oh, it\'s you," she frowns. "I don\'t know what you did to my sweet Artem, but he says he never wants to see you again. I thought you were such a sweet girl, but he says you\'re not, so please leave."');
              scene.text('She closes the door in your face without another word.');
            } else {
              if (((s as any).fame ?? 0)?.['pav_slut'] >= 200  ||  ((s as any).grupTipe ?? 0) === 4) {
                // TODO-QSP: dynamic text: You stand outside the Chebotarev household and knock on the door, which is quick...
                scene.text(`You stand outside the Chebotarev household and knock on the door, which is quickly answered by Artem's mother, who has a friendly smile on her face that falters when she sees you. "Oh. Hello again, ${((s as any).pcs_firstname || '')}. Can I help you?"`);
                scene.text('You return her smile. "Yes, I\'m here to see Artem."');
                if (qspFunc(s, 'artem_chebotarev_schedule', 'is_home')) {
                  scene.text('She doesn\'t seem pleased. "Oh. Well come in then." She turns to face down the hall. "Artem dear, \'that girl\' is here to see you again." You can hear the judgment in her voice before she turns back to you. "Go on back. He\'s in his room."');
                  scene.actions([
                    { label: 'Enter', goto: ['artemhome', 'hallway'] },
                  ]);
                } else {
                  scene.text('She doesn\'t seem pleased. "Well, he isn\'t home."');
                  scene.text('You understand it\'s time for you to leave');
                }
              } else {
                // TODO-QSP: dynamic text: You stand outside the Chebotarev household and knock on the door, which is quick...
                scene.text(`You stand outside the Chebotarev household and knock on the door, which is quickly answered by Artem's mother, who has a friendly smile on her face. "Hello again, ${((s as any).pcs_nickname || '')}. Are you here to see Artem?"`);
                scene.text('You return her smile. "Yes."');
                if (qspFunc(s, 'artem_chebotarev_schedule', 'is_home')) {
                  // TODO-QSP: dynamic text: She seems pleased to see you. "Come in, come in." She turns to face down the hal...
                  scene.text(`She seems pleased to see you. "Come in, come in." She turns to face down the hall. "Artem dear, that nice girl ${((s as any).pcs_nickname || '')} is here to see you." She then turns back to you. "Go on back. He's in his room."`);
                  scene.actions([
                    { label: 'Enter', goto: ['artemhome', 'hallway'] },
                  ]);
                } else {
                  scene.text('She seems pleased to see you. "Well, he isn\'t home, but you\'re welcome to come back later."');
                  scene.text('You understand it\'s time for you to leave');
                }
              }
            }
          }
        } else {
          scene.text('You stand in the hallway, but it appears that nobody is home.');
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['pod_ezd', 'etaj_1'] },
  ]);
  scene.build();
}

function enterHallway(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'core_library', 'setloc', 'artemhome', 'hallway');
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Entrance hall</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/artemhome/hall.jpg');
  scene.text('The first thing you notice is how clean and organized everything is. Just inside the door is a coat rack with several attached shelves. All the coats and umbrellas are neatly hung up, several items are neatly placed on the shelves and several sets of shoes are neatly placed next to the rack. A small mirror is on the wall opposite the coat rack.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTimecheck(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).artemLoc ?? 0) === 1) {
    // TODO-QSP: dynamic text: Artem is standing nearby, looking at you expectantly. "What''s up, <<$pcs_nickna...
    scene.text(`Artem is standing nearby, looking at you expectantly. "What's up, ${((s as any).pcs_nickname || '')}?"`);
    scene.actions([
      { label: '<b>Leave Artem\'s apartment</b>', goto: ['pod_ezd', 'etaj_1'] },
      { label: 'Let\'s go to your room', handler: (st: GameState) => {
    qspCall(st, 'artem_chebotarev_schedule', 'force', 'home_bedroom');
    qspGoto(st, 'artemhome', 'artemroom');
  } },
    ]);
  } else {
    scene.actions([
      { label: '<b>Leave Artem\'s apartment</b>', goto: ['pod_ezd', 'etaj_1'] },
      { label: 'Artem\'s Room', goto: ['artemhome', 'artemroom'] },
      { label: 'Bathroom', goto: ['artemhome', 'bathroom'] },
      { label: 'Living Room', goto: ['artemhome', 'livingroom'] },
      { label: 'Kitchen', goto: ['artemhome', 'kitchen'] },
      { label: 'Parents Room', goto: ['artemhome', 'artemparents'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBathroom(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locat ?? 0)?.['A2'] === 'home_bathroom') {
    qspGoto(s, 'artemhome', 'bathroom_occupied');
  }
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'core_library', 'setloc', 'artemhome', 'bathroom');
  (s as any).location_type = 'bathroom';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Bathroom</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/artemhome/bathroom.jpg');
  scene.text('The first thing you notice is the god awful green tiles with matching sink in the bathroom. You don\'t know who picked them, but they clearly don\'t have good taste. Other than that, it\'s a fairly typical bathroom.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTimecheck(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('You can do your hair and makeup in the <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">mirror</a> above the sink.');
  qspCall(s, 'piercing_management', 'set_manage_string');
  qspCall(s, 'din_van', 'bath');
  qspCall(s, 'din_van', 'bteeth');
  qspCall(s, 'din_van', 'tampon');
  qspCall(s, 'din_van', 'basin');
  qspCall(s, 'din_van', 'prvt_pee');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the bathroom', goto: ['artemhome', 'hallway'] },
    { label: 'Take a shower', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'din_van', 'showerdin');
    qspCall(st, 'stat', '');
    scene.text('<center><b>Bathroom</b></center>');
    scene.img('images/shared/home/bathroom/dush.mp4');
    scene.text('You take a quick shower.');
    scene.actions([
      { label: 'Take a selfie', handler: (st: GameState) => {
    qspCall(st, 'telefon', 'Phone_selfie_image_bathing', 'shower');
  } },
      { label: 'Get out of the shower', goto: ['artemhome', 'bathroom'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterBathroomOccupied(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('As you approach the bathroom door, you can hear the shower running.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Knock on the door', handler: (st: GameState) => {
    scene.text('"Hey Artem, are you in there?"');
    // TODO-QSP: dynamic text: "Is that you, <<$pcs_nickname>>?" you hear him reply through the door.
    scene.text(`"Is that you, ${((st as any).pcs_nickname || '')}?" you hear him reply through the door.`);
    scene.text('"Yeah, it\'s me. I hope it\'s okay that I dropped by?"');
    scene.text('"Of course. Give me a minute and I\'ll be out. You can wait in my room."');
    scene.actions([
      { label: 'Go to his room', goto: ['artemhome', 'artemroom'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterArtemroom(s: GameState, scene: SceneBuilder): void {
  (s as any).track_loop = '';
  (s as any).music_loop = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'core_library', 'setloc', 'artemhome', 'artemroom');
  (s as any).location_type = 'public_indoors';
  (s as any).locclass = 'bedr';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Artem\'s Room</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom.jpg');
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 23) {
    scene.text('The room is very clean and neat. Right next to the window is a bed, with a small <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027artemhome/u0027, /u0027night_stand/u0027); return false;">night stand</a> next to it. Against the opposite wall is a small computer desk and a chair, with a <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027artemhome/u0027, /u0027computer/u0027); return false;">laptop</a> on it. Next to the desk is a <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027artemhome/u0027, /u0027artemdresser/u0027); return false;">dresser</a>. On the other side of the desk is a <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027artemhome/u0027, /u0027bookshelf/u0027); return false;">bookshelf</a> with a fairly large collection of books.');
  } else {
    scene.text('The room is very clean and neat. Right next to the window is a bed, with a small nightstand next to it. Against the opposite wall is a small computer desk and a chair, with a laptop on it. Next to the desk is a dresser. On the other side of the desk is a bookshelf with a fairly large collection of books.');
  }
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    scene.actions([
      { label: 'Dress yourself', handler: (st: GameState) => {
    qspCall(st, 'shortgs', 'dress');
  }, goto: ['artemhome', 'artemroom'] },
    ]);
  } else {
    scene.actions([
      { label: 'Leave Artem\'s room', goto: ['artemhome', 'hallway'] },
    ]);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTimecheck(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).locat ?? 0)?.['A2'] === 'home_bathroom') {
    qspCall(s, 'artem_chebotarev_schedule', 'force', 'home_bedroom');
    scene.text('You take a seat on his bed and wait for Artem to finish showering.');
    scene.text('It only takes a minute for him to appear, his hair still wet. He must have rushed to get out of the shower.');
    scene.actions([
      { label: 'That was fast', handler: (st: GameState) => {
    scene.text('<center><b>Artem\'s Room</b></center>');
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You grin and point out his still-wet hair to him. "Are you and your towel having a fight? It looks like she abandoned you," you giggle.');
    scene.text('He sheepishly runs a hand through his hair and inspects it. "You uhm… You might have a point. I just didn\'t want you to get too bored waiting."');
    scene.actions([
      { label: 'Talk with him', goto: ['artem_chat', 'chat'] },
    ]);
  } },
    ]);
  }
  if (((s as any).artemLoc ?? 0) === 2) {
    scene.text('Artem is sitting watching you with a friendly smile.');
    if (((s as any).lernHome ?? 0) > 0) {
      scene.actions([
        { label: 'Do homework with Artem', goto: ['artem_events', 'learn'] },
      ]);
    }
    if (((s as any).artemQW ?? 0)?.['artfall'] > 5  &&  ((s as any).artkissing ?? 0) !== ((s as any).daystart ?? 0)) {
      qspCall(s, 'willpower', 'misc', 'self', 'easy');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Kiss him', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Kiss him', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A2', 'love');
    if (((st as any).artkissing ?? 0) !== ((st as any).daystart ?? 0)) {
      ((st as any).artemQW = (st as any).artemQW ?? {})['artfall'] = ((st as any).artemQW['artfall'] ?? 0) + (1);
      (st as any).artkissing = ((st as any).daystart ?? 0);
    }
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/hugging.jpg');
    scene.text('As you sit beside him, you perhaps look at him a little too long because he turns to look at you. You lean over to give him a kiss and he returns it fully.');
    qspCall(st, 'arousal', 'foreplay', 3);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Stop kissing and talk', goto: ['artem_chat', 'chat'] },
      { label: 'Make out', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/makeout.jpg');
    scene.text('He pulls you in close and you\'re soon passionately making out, the kisses full of eager lust and urgent need.');
    scene.text('You feel yourself getting more aroused as he scoots back against the wall and pulls you onto his lap. You can feel the hard bulge in his pants as you straddle him.');
    qspCall(st, 'arousal', 'foreplay', 3);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Stop making out', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A2', 'dislike');
    scene.img('images/characters/pavlovsk/school/boy/artem/talk.jpg');
    scene.text('You pull away before things go too far and catch your breath. You see his slightly confused look and feel a little bad. "Sorry, I got carried away. Can we just go back to talking?"');
    scene.text('He frowns. "Yes of course." He leans back and tries to adjust his pants to make his erection more comfortable when he thinks you\'re not looking.');
    scene.actions([
      { label: 'Talk about something else', goto: ['artem_chat', 'chat'] },
    ]);
  } },
      { label: 'Enjoy his touch', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/makeout.jpg');
    if (((st as any).artemQW ?? 0)?.['dryhump'] === 0) {
      // TODO-QSP: dynamic text: Artem trips over his words when he tries to suggest something. "<<$pcs_nickname>...
      scene.text(`Artem trips over his words when he tries to suggest something. "${((st as any).pcs_nickname || '')}, maybe we could… Maybe I… I really want you… Can I touch your ass? Please?"`);
      scene.actions([
        { label: 'Let him caress your ass', goto: ['artem_events', 'artemdryhump'] },
      ]);
    } else {
      if (((st as any).artemQW ?? 0)?.['dryhump'] <= 1) {
        if (((st as any).pantyworntype ?? 0) !== 'none') {
          // TODO-QSP: dynamic text: Artem looks at you with embarrassment but gathers the courage. "<<$pcs_nickname>...
          scene.text(`Artem looks at you with embarrassment but gathers the courage. "${((st as any).pcs_nickname || '')}, you're the best thing that's ever happened to me. I enjoyed last time so much, but could you strip down to your underwear?"`);
          qspCall(st, 'willpower', 'exhib', 'resist');
          if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Refuse to strip', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Refuse to strip', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspGoto(st, 'artem_events', 'artemdryhump');
  } },
            ]);
          }
          scene.actions([
            { label: 'Strip to your panties', goto: ['artem_events', 'artemdryhump1'] },
          ]);
        } else {
          // TODO-QSP: dynamic text: Artem trips over his words when he tries to suggest something. "<<$pcs_nickname>...
          scene.text(`Artem trips over his words when he tries to suggest something. "${((st as any).pcs_nickname || '')}, maybe we could… I really want you… Can I touch your ass again? Please?"`);
          scene.actions([
            { label: 'Let him caress your ass', goto: ['artem_events', 'artemdryhump'] },
          ]);
        }
      } else {
        if (((st as any).artemQW ?? 0)?.['dryhump'] <= 2  &&  ((st as any).artemQW ?? 0)?.['stripsee'] === 1) {
          // TODO-QSP: dynamic text: Artem looks at you with embarrassment but gathers the courage. "<<$pcs_nickname>...
          scene.text(`Artem looks at you with embarrassment but gathers the courage. "${((st as any).pcs_nickname || '')}, last time you let me rub your ass was great, but now that I've seen you naked… Could you strip naked first?"`);
          qspCall(st, 'willpower', 'exhib', 'resist');
          if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Refuse to strip', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Refuse to strip', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspGoto(st, 'artem_events', 'artemdryhump');
  } },
            ]);
          }
          scene.actions([
            { label: 'Strip', goto: ['artem_events', 'artemdryhump2'] },
          ]);
        } else {
          scene.text('His hands roam all over your body, but he pays special attention to your breasts, kneading and squeezing them repeatedly. As you keep making out, you feel the bulge growing in his pants.');
          qspCall(st, 'arousal', 'kiss', 5);
          qspCall(st, 'stat', '');
          if (((st as any).artemQW ?? 0)?.['hj'] > 0  ||  ((st as any).artemQW ?? 0)?.['bf'] === 1) {
            scene.actions([
              { label: 'Give him a handjob', goto: ['artem_sex', 'hj'] },
            ]);
          }
          if (((st as any).artemQW ?? 0)?.['bj'] > 0  ||  ((st as any).artemQW ?? 0)?.['bf'] === 1) {
            scene.actions([
              { label: 'Give him a blowjob', goto: ['artem_sex', 'bj'] },
            ]);
          }
          if (((st as any).artemQW ?? 0)?.['sex'] > 0  ||  ((st as any).artemQW ?? 0)?.['bf'] === 1) {
            scene.actions([
              { label: 'Have sex with him', goto: ['artem_sex', 'sex'] },
            ]);
          }
          qspCall(st, 'willpower', 'bj', 'resist', 'medium');
          if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Pull away and stop', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Pull away and stop', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You pull your hand away and climb off him. "No, I can\'t… Not yet. I still want to wait."');
    scene.text('He looks visibly disappointed but nods and smiles. "Sure, I understand. I don\'t want to pressure you, so whenever you\'re ready is fine."');
    scene.actions([
      { label: 'Talk to him', goto: ['artem_chat', 'chat'] },
    ]);
  } },
            ]);
          }
          scene.actions([
            { label: 'Keep making out', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/makeout.jpg');
    scene.text('You pull your hand away from the bulge in his pants, but keep kissing him. He lets go and stops trying to force your hand down to his crotch, focusing on kissing and fondling you instead.');
    if (((st as any).artemQW ?? 0)?.['stripsee'] > 0) {
      scene.text('He has an embarrassed look on his face as he pulls away from you. "I enjoyed seeing you naked last time and want you to strip for me again, but can you make a bit more of a show of it this time?"');
      qspCall(st, 'arousal', 'kiss', 5);
      qspCall(st, 'stat', '');
      qspCall(st, 'artem_chat', 'askedstrip');
    } else {
      scene.text('As the two of you are making out, you\'re interrupted by his mother\'s voice out in the hallway. "Artem dear, I\'ll be doing the laundry in a few minutes, so make sure your dirty clothes are in the hamper!"');
      scene.text('Artem gently, but in some haste, pushes you off his lap as he quickly stands up. "Yes mom, I will!" He looks at you in a bit of a panic, his mother having almost caught him making out with a girl in his room. "I should really get my clothes sorted. See you tomorrow?"');
      scene.text('You smile at him. "Maybe. I\'ll have to see what\'s going on."');
      scene.text('With that, you gather up your stuff and leave.');
      qspCall(st, 'arousal', 'kiss', 20);
      qspCall(st, 'arousal', 'end');
      scene.actions([
        { label: 'Move away from the door', goto: ['pod_ezd', 'etaj_1'] },
      ]);
    }
  } },
          ]);
        }
      }
    }
  } },
    ]);
  } },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Let\'s go to the living room', handler: (st: GameState) => {
    qspCall(st, 'artem_chebotarev_schedule', 'force', 'home_livingroom');
    qspGoto(st, 'artemhome', 'livingroom');
  } },
      { label: 'Talk to Artem', goto: ['artem_chat', 'chat'] },
      { label: 'Snacks', handler: (st: GameState) => {
    scene.text('<center><b>Artem\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/artem/talk.jpg');
    scene.text('You bite your lip, unsure if you should ask. It might seem rude, but you could really use a snack right now. "Hey Artem, have you got anything to snack on or drink?"');
    scene.text('He looks a little surprised. "Yeah sorry, I didn\'t think about it. Feel free to just grab something if you want in the future, but come on."');
    scene.actions([
      { label: 'Follow him', goto: ['artemhome', 'snack'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterArtemdresser(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'artemhome', 'artemdresser');
  (s as any).location_type = 'public_indoors';
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'npc_relationship', 'modify', 'A2', 'dislike');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/artemdresser.jpg');
  scene.text('Opening the drawers, all you find are his clothes, neatly folded and stacked. He has shirts in one drawer, pants in another, shorts in another, socks in yet another and underwear in the last.');
  scene.text('It\'s very well organized and kind of boring, but you notice him watching you snoop and close the drawers.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Find something else to look at', goto: ['artemhome', 'artemroom'] },
  ]);
  scene.build();
}

function enterBookshelf(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'artemhome';
  (s as any).menu_arg = 'bookshelf';
  qspCall(s, 'npc_relationship', 'modify', 'A2', 'like');
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/bookshelf.jpg');
  scene.text('The small bookshelf has a lot of fantasy and science fiction books, a few gaming books and a lot of various nerdy nicknacks from popular fantasy and science fiction movies and TV shows. Maybe he wouldn\'t mind if you borrowed a book?');
  if (((s as any).artem_borrowed_book ?? 0) !== 1) {
    scene.actions([
      { label: 'Ask to borrow a book', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    ((st as any).artemQW = (st as any).artemQW ?? {})['artfall'] = ((st as any).artemQW['artfall'] ?? 0) + (1);
    (st as any).artem_borrowed_book = 1;
    ((st as any).BookVars = (st as any).BookVars ?? {})['artem_pages'] = (Math.floor(Math.random() * 201) + 400);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/bookshelf.jpg');
    scene.text('You look through the books until you find one you like. "Do you mind if I borrow this?"');
    scene.text('He looks a little surprised as he walks over. "Oh sure yeah, you can borrow it," he answers a little excitedly.');
    scene.text('You take the book and put it in your purse. "Thanks. I\'ll get it back to you as soon as I finish it."');
    scene.text('He waves his hand like it\'s no big deal. "Oh, don\'t worry about that. I hope you enjoy it."');
    scene.actions([
      { label: 'Find something else to look at', goto: ['artemhome', 'artemroom'] },
    ]);
  } },
    ]);
  }
  if (((s as any).artem_borrowed_book ?? 0) === 1) {
    scene.actions([
      { label: 'Return a book', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    (st as any).artem_borrowed_book = 0;
    ((st as any).BookVars = (st as any).BookVars ?? {})['artem_pages'] = 0;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/bookshelf.jpg');
    scene.text('"I brought your book back," you tell him as you take it out of your purse and put it back in place on the shelf, right where you got it from.');
    scene.text('"Did you like it?" he asks.');
    scene.actions([
      { label: 'I did', handler: (st: GameState) => {
    scene.text('"Yeah, it was good," you reply.');
    scene.text('His face lights and he joins you at the bookshelf. "Yeah, I really liked that one too."');
    scene.actions([
      { label: 'Look at more books', goto: ['artemhome', 'bookshelf'] },
      { label: 'Find something else to look at', goto: ['artemhome', 'artemroom'] },
    ]);
  } },
      { label: 'Not really', handler: (st: GameState) => {
    if (((st as any).pcs_intel ?? 0) <= 40) {
      scene.text('"It was a bit complicated for me," you admit, embarrassed.');
    } else {
      scene.text('"It was a bit too bland for me. I could guess the outcome right at the start, and it turned out I was right," you reply.');
    }
    scene.text('Artem looks crushed at your answer.');
    scene.actions([
      { label: 'Look at more books', goto: ['artemhome', 'bookshelf'] },
      { label: 'Find something else to look at', goto: ['artemhome', 'artemroom'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Find something else to look at', goto: ['artemhome', 'artemroom'] },
  ]);
  scene.build();
}

function enterNightStand(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'npc_relationship', 'modify', 'A2', 'dislike');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/nightstand.jpg');
  scene.text('Having decided to snoop, you open the nightstand drawer to take a peek inside. Rummaging through the drawers, all you find is his phone hooked up to a charger, a few books, some cold medicine, some comics and a flashlight. Noticing him watching you snoop, you close the drawers.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Close the drawer', goto: ['artemhome', 'artemroom'] },
  ]);
  scene.build();
}

function enterComputer(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'internet_mobile', 'get_access', 'free', 'nocamshow', 'noporn');
  if (((s as any).artemLoc ?? 0) !== 2) {
    scene.actions([
      { label: 'Go online', goto: ['komp', 'start'] },
      { label: 'Find something else to look at', goto: ['artemhome', 'artemroom'] },
    ]);
  } else {
    if ((!((s as any).ArtemCompUse ?? 0))) {
      (s as any).ArtemCompUse = 1;
      scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/laptop.jpg');
      scene.text('You point towards his laptop. "You\'re so lucky to have your own computer."');
      scene.text('"I saved up my allowance for years before I could afford it," he replies.');
      scene.text('"Mind if I use it? I want to check my emails and stuff," you ask.');
      scene.text('He nods. "Sure, go ahead."');
      scene.actions([
        { label: 'Go online', goto: ['komp', 'start'] },
        { label: 'Find something else to look at', goto: ['artemhome', 'artemroom'] },
      ]);
    } else {
      scene.text('You look at the computer, then at Artem, who meets your gaze and breaks into a smile.');
      scene.text('"Go ahead and use it if you want. I don\'t mind."');
      scene.actions([
        { label: 'Go online', goto: ['komp', 'start'] },
        { label: 'Find something else to look at', goto: ['artemhome', 'artemroom'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSnack(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  if (((s as any).alko ?? 0) > 0) {
    (s as any).alko = ((s as any).alko ?? 0) - (1);
  }
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (20);
  qspCall(s, 'mood', 'raise', 'small');
  (s as any).fat = ((s as any).fat ?? 0) + (6);
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (25);
  if (((s as any).pcs_hydra ?? 0) >= 100) {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (25);
  } else {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (50);
  }
  (s as any).cumspclnt = 2;
  qspCall(s, 'cum_cleanup', '');
  (s as any).pcs_breath = 0;
  scene.text('He gets up and heads out of his room. As you walk into the kitchen, Artem points to a cabinet. "Grab some snacks out of there."');
  scene.text('While you\'re doing that, he grabs some drinks from the fridge before you head back to his room.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Back to his room', handler: (st: GameState) => {
    qspCall(st, 'artem_chebotarev_schedule', 'force', 'home_bedroom');
    qspGoto(st, 'artemhome', 'artemroom');
  } },
  ]);
  scene.build();
}

function enterLivingroom(s: GameState, scene: SceneBuilder): void {
  if (((s as any).livingev_day ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).livingev = 0;
  }
  qspCall(s, 'core_library', 'setloc', 'artemhome', 'livingroom');
  (s as any).locclass = 'livingr';
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Living room</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/artemhome/living.jpg');
  scene.text('The living room is clean and neat. A couch rests against one wall, with a throw rug between it and the TV stand. A flat-screen TV sits atop the stand while a neatly stored PlayStation sits on the bottom. Along one side of the TV is a stand with several dozen movies.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTimecheck(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).artemLoc ?? 0) === 5) {
    if (((s as any).ArtemParentsLoc ?? 0) === 5  &&  ((s as any).metArtemDad ?? 0) === 0  &&  ((s as any).hour ?? 0) < 22) {
      (s as any).metArtemDad = 1;
      (s as any).minut = ((s as any).minut ?? 0) + 10;
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/resident/apartment/artemhome/masharin.jpg');
      if (((s as any).fame ?? 0)?.['pav_slut'] >= 200  ||  ((s as any).grupTipe ?? 0) === 4) {
        // TODO-QSP: dynamic text: As the two of you walk into the living room, his father turns towards you lookin...
        scene.text(`As the two of you walk into the living room, his father turns towards you looking a little appalled. "So ${((s as any).pcs_firstname || '')}, how did you and my boy become friends?"`);
        scene.text('You stretch out your clothes so they cover you up a little. "I don\'t really remember. We kind of just connected and started hanging out… It doesn\'t hurt that Artem is really hot. That made it much easier."');
        scene.text('Artem blushes at the comment as Masharin squirms and clears his throat. "My boy is very ambitious and we\'re very proud of him. We want him to succeed in school, so I really hope that he\'ll be able to continue to pursue that because, you know, he\'s not used to girls like you…"');
        scene.actions([
          { label: 'What do you mean?', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/masharin.jpg');
    scene.text('You tilt your head and start playing with your hair. "Girls like me…?"');
    scene.text('Masharin starts squirming even more. "You know… Experienced…"');
    scene.text('Artem sighs loudly. "Dad, stop embarrassing me!"');
    scene.text('You keep prodding. "I don\'t really follow what you mean… Experienced, in what way?"');
    scene.text('He starts looking around, avoiding eye contact with you. "Ehm, you know… Sexually."');
    scene.actions([
      { label: 'Did you just assume something?', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/masharin.jpg');
    scene.text('You start shaking your head. "Did you just assume that I\'m a slut because of the clothes I\'m wearing?!"');
    // TODO-QSP: dynamic text: "N-No, <<$pcs_firstname>>, I d-didn''t assume anything…" You can see him sweatin...
    scene.text(`"N-No, ${((st as any).pcs_firstname || '')}, I d-didn't assume anything…" You can see him sweating a little.`);
    scene.text('You stand in silence for a few seconds before you finally start laughing. "Don\'t worry about Artem. I\'ll make sure he keeps his head on straight."');
    scene.text('Masharin sighs. "Well, I think Artem and I will have to have a talk later…" he says as he looks sternly at Artem.');
    scene.text('You smile. "You do that…"');
    scene.text('As you and Artem turn around, you show off your ass a little as you leave and return to his room.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'artem_chebotarev_schedule', 'force', 'home_bedroom');
    qspGoto(st, 'artemhome', 'artemroom');
  } },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        scene.text('As the two of you walk into the living room, Artem\'s father jumps around, as if you startled him.');
        scene.text('"Sorry, we didn\'t mean to scare you!" you say.');
        scene.text('He waves your fears away. "Don\'t worry about it. I\'m just happy to see Artem spending time with a nice girl like yourself."');
        scene.actions([
          { label: 'Thank you', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/masharin.jpg');
    scene.text('You nod and give him a subtle smile. "You\'re making me blush! You\'re giving me way too much credit…"');
    scene.text('Masharin shakes his head. "Not at all. Artem talks about you quite a lot and gets really excited when he does. I\'m glad that he found someone nice to be friends with."');
    // TODO-QSP: dynamic text: "Dad, that was supposed to be a private thing between us!" Artem cries out in em...
    scene.text(`"Dad, that was supposed to be a private thing between us!" Artem cries out in embarrassment and starts blushing. "You weren't supposed to say that to ${((st as any).pcs_nickname || '')}…"`);
    scene.actions([
      { label: 'Smile', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/masharin.jpg');
    scene.text('Masharin looks worryingly at Artem, so you decide to ease the tension by playfully pushing Artem a little. "Ease up, your dad was just looking out for you is all."');
    scene.text('"Still, he shouldn\'t have talked about it. I said all of that in confidence…"');
    // TODO-QSP: dynamic text: Masharin starts to apologize, but is cut off by Artem. "Let''s go <<$pcs_nicknam...
    scene.text(`Masharin starts to apologize, but is cut off by Artem. "Let's go ${((st as any).pcs_nickname || '')}, that's enough embarrassment for one day."`);
    scene.text('"Don\'t worry, Mr. Chebotarev. I\'m sure it\'s not a big deal and Artem will get over it soon," you say encouragingly before going to Artem\'s room.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'artem_chebotarev_schedule', 'force', 'home_bedroom');
    qspGoto(st, 'artemhome', 'artemroom');
  } },
    ]);
  } },
    ]);
  } },
        ]);
      }
    } else {
      scene.text('Artem walks back over to the couch and picks up the controller for his PlayStation before glancing at you as you sit on the couch. "Do you want to play?"');
      if (((s as any).lernHome ?? 0) > 0) {
        scene.actions([
          { label: 'I think we should do our homework', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/living.jpg');
    scene.text('The two of you grab your schoolbags and head to his room.');
    scene.actions([
      { label: 'Follow Artem to his room', handler: (st: GameState) => {
    qspCall(st, 'artem_chebotarev_schedule', 'force', 'home_bedroom');
    qspGoto(st, 'artemhome', 'artemroom');
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Watch him play', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/livingroom/watchplay.jpg');
    scene.text('You shake your head. "No thanks. I\'ll just watch you play."');
    scene.text('He shrugs slightly and starts playing, but is so focused on the game that you think he\'s completely forgotten you\'re even here.');
    scene.text('After about an hour, you\'re about to get up and leave when he finally saves his game and puts the controller neatly away. "You want to go to my room?"');
    scene.actions([
      { label: 'Follow Artem to his room', handler: (st: GameState) => {
    qspCall(st, 'artem_chebotarev_schedule', 'force', 'home_bedroom');
    qspGoto(st, 'artemhome', 'artemroom');
  } },
      { label: 'No', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/livingroom/watchplay.jpg');
    scene.text('You shake your head. "No, I need to get going. Maybe next time."');
    scene.text('He looks disappointed. "Oh, okay. See you at school then."');
    scene.actions([
      { label: 'Leave', goto: ['pod_ezd', 'etaj_1'] },
    ]);
  } },
    ]);
  } },
        { label: 'Play', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A2', 'like');
    if (((st as any).artfalling ?? 0) !== ((st as any).daystart ?? 0)) {
      ((st as any).artemQW = (st as any).artemQW ?? {})['artfall'] = ((st as any).artemQW['artfall'] ?? 0) + (1);
      (st as any).artfalling = ((st as any).daystart ?? 0);
    }
    qspCall(st, 'exp_gain', 'gaming', 1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/livingroom/playgames.jpg');
    scene.text('You smile at him. "Yeah, I\'d like that."');
    scene.text('He grins and hands you the controller he has in his hand, then rushes over to grab the other one before sitting back on the couch. He starts the game up and the two of you play for some time; he\'s pretty good, but he keeps making mistakes. You eventually beat him, but he doesn\'t seem to mind at all. "You want to go to my room?"');
    scene.actions([
      { label: 'Follow Artem to his room', handler: (st: GameState) => {
    qspCall(st, 'artem_chebotarev_schedule', 'force', 'home_bedroom');
    qspGoto(st, 'artemhome', 'artemroom');
  } },
      { label: 'No', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/livingroom/watchplay.jpg');
    scene.text('You shake your head. "I had a lot of fun playing with you, but I need to get going. Maybe next time."');
    scene.text('He looks disappointed. "Oh, okay. See you at school then."');
    scene.actions([
      { label: 'Leave', goto: ['pod_ezd', 'etaj_1'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } else {
    if (((s as any).ArtemParentsLoc ?? 0) !== 5  ||  ((s as any).hour ?? 0) >= 22) {
      scene.text('Nobody\'s here right now.');
      scene.actions([
        { label: 'Leave', goto: ['artemhome', 'hallway'] },
      ]);
    } else {
      if ((Math.floor(Math.random() * 2) + 0) === 1) {
        scene.text('Artem\'s father, Masharin, is here.');
        scene.actions([
          { label: 'Talk to Masharin', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/masharin.jpg');
    if (((st as any).fame ?? 0)?.['pav_slut'] >= 200  ||  ((st as any).grupTipe ?? 0) === 4) {
      scene.text('"I didn\'t think Artem would still be socializing with you after our talk…" Masharin says upon seeing you once again.');
      scene.text('"Well, you know how it goes," you nonchalantly answer.');
      scene.text('His posture suddenly changes and he slouches back in his chair. "Can\'t you find some other boy to toy with and leave my son alone?"');
      scene.actions([
        { label: 'Toy with?', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/masharin.jpg');
    scene.text('You look confusingly at Masharin. "Toy with him?"');
    scene.text('"Like I told you last time, my Artem is a smart and bright boy, and he\'s doing great in school," he starts explaining. "Since this is his last year in school, I\'d like him to be able to keep his grades up."');
    scene.text('"What does this have to do with me?" you ask, crossing your arms while looking impatiently at him.');
    scene.text('"We both know what kind of girl you are. You enjoy toying with boys for your own amusement, so can you just leave my son alone?"');
    scene.actions([
      { label: 'Talk is cheap', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/masharin.jpg');
    scene.text('"You think I\'m toying with him because of how I dress and act?!" you scowl. "You don\'t think Artem and I could just be friends?! Aren\'t you really judgmental?! And to think Artem was telling me about his accepting parents…"');
    scene.text('"N-No not at all!" His voice starts trembling. "Y-You may behave however you want…"');
    scene.text('"But I can\'t be friends with your son, that\'s what you\'re saying?!"');
    scene.text('Masharin curls up slightly before sighing and going almost limp in apparent defeat. "I… Just don\'t hurt him. Please?"');
    scene.text('You roll your eyes and leave.');
    scene.actions([
      { label: 'Leave', goto: ['artemhome', 'hallway'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: You greet Masharin and he gives you a friendly nod back. "Hello <<$pcs_firstname...
      scene.text(`You greet Masharin and he gives you a friendly nod back. "Hello ${((st as any).pcs_firstname || '')}, welcome back. Are you and Artem studying?"`);
      scene.text('"Hello, Mr. Chebotarev. Yes, Artem suggested that we could study in his room," you politely reply.');
      // TODO-QSP: dynamic text: He chuckles. "There''s no need to be so formal, <<$pcs_firstname>>. Call me Mash...
      scene.text(`He chuckles. "There's no need to be so formal, ${((st as any).pcs_firstname || '')}. Call me Masharin. So how is the studying going?"`);
      scene.actions([
        { label: 'It\'s going good', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/masharin.jpg');
    scene.text('You nod your head. "It\'s going good. Artem and I make a great team. If there\'s something he doesn\'t know, I try to help him out and the same goes when it comes to me."');
    scene.text('"I\'m glad to hear that. Academics are important since you can get a good career and don\'t have to rely on going to a job you don\'t like every day," It sounds like he\'s about to start preaching the values of education…');
    scene.text('He continues. "When I was younger, I used to spend my days focused on school and got teased for it, but it paid off because now I have a great job and a wonderful family. I don\'t have to worry about anything."');
    scene.actions([
      { label: 'Listen politely', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/masharin.jpg');
    scene.text('You keep quiet and listen to him as he goes on a rant about life and how you should keep a straight head and avoid all the evil stuff that happens around this town.');
    scene.text('He then suddenly stops. "Oh sorry, I must be boring you… I get ahead of myself and have to remind myself that no one wants to listen to a boring tale about nothing."');
    scene.text('You shake your head. "Not at all. It\'s always good hearing a positive opinion about studying, as it\'s not always seen in a keen light around here."');
    scene.text('Masharin sighs. "Well, don\'t pay too much attention to it, and you\'ll see how much better life is as time goes by."');
    scene.actions([
      { label: 'Leave', goto: ['artemhome', 'hallway'] },
    ]);
  } },
    ]);
  } },
        { label: 'We\'re having some issues with a few things', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/masharin.jpg');
    scene.text('You exhale. "We got stuck on an assignment and I just needed a break from it."');
    scene.text('Masharin lets out a smile. "I remember those days. When I got stuck on something, I used to have the perfect thing to help me."');
    scene.actions([
      { label: 'What?', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/masharin.jpg');
    scene.text('Your eyes widen. "What was it?"');
    scene.text('He tries to excuse himself. "It worked for me, but it doesn\'t mean it will work for anyone else. We all have our own quirks that help us when it comes to that stuff. You have your breaks and I have mine."');
    scene.text('"Well, I\'d love to hear what you did. I think it would be of great help," you tell him.');
    scene.text('Masharin smiles. "Fine, fine. I used to close my eyes and think that I\'m in the middle of a forest, only hearing those unusual sounds that you can hear in such a place. This always cleared my mind and it helped me regain my focus."');
    scene.text('"I might try that sometime. Thanks for the advice, but it\'s probably best that I head back," you reply.');
    scene.actions([
      { label: 'Leave', goto: ['artemhome', 'hallway'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
          { label: 'Leave', goto: ['artemhome', 'hallway'] },
        ]);
      } else {
        scene.text('Artem\'s parents are here watching TV. You could disturb them and talk to them, but it might be better if you just snuck back out before they see you.');
        scene.actions([
          { label: 'Sneak out', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/living.jpg');
    scene.text('You turn and carefully tread out of the living room. You quietly make it to the doorway to the hallway and glance back to see them still watching the TV, having failed to notice you coming in at all.');
    scene.actions([
      { label: 'Leave', goto: ['artemhome', 'hallway'] },
    ]);
  } },
          { label: 'Talk to them', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/living.jpg');
    if (((st as any).fame ?? 0)?.['pav_slut'] >= 200  ||  ((st as any).grupTipe ?? 0) === 4) {
      scene.text('You barge in without paying any respect to them. "What are you watching?" you ask.');
      scene.text('Startled, they jump and turn their attention to you. "We\'re watching the news…" Masharin annoyingly replies.');
      scene.text('"The news is boring as hell and there\'s always something depressing on there," you answer back.');
      // TODO-QSP: dynamic text: "Is there something we can help you with, <<$pcs_firstname>>?" Glinina asks.
      scene.text(`"Is there something we can help you with, ${((st as any).pcs_firstname || '')}?" Glinina asks.`);
      scene.actions([
        { label: 'Yes', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/glinina.jpg');
    scene.text('"As a matter of fact you can." You continue further inside the living room, taking a seat next to Glinina. "I just need to see the first part of that scandalous show they\'re showing right now."');
    scene.text('You grab the remote off the coffee table and switch the channel to a reality show about a bachelor hoping to find a partner among a selection of pretty young women.');
    scene.text('"I can\'t believe he picked that slut!" you shout out. "She\'s clearly just playing with him to win and doesn\'t actually love him," you tell Glinina. "I heard she fucked the producers to get on the show in the first place, and still does. Sometimes all at once!"');
    scene.text('"Shouldn\'t you head back to Artem?" Masharin asks.');
    scene.text('Just as you\'re about to answer, the commercials come on and you let out a sigh. "I guess it\'s time to head back. Thanks for letting me watch." You quickly get up and leave them sitting there stunned, not really understanding what just happened.');
    scene.actions([
      { label: 'Leave', goto: ['artemhome', 'hallway'] },
    ]);
  } },
        { label: 'No', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/masharin.jpg');
    scene.text('"No, I just needed to get away for a while. You know schoolwork is boring as hell and your son is super serious about that stuff, which is no fun," you reply.');
    scene.text('Masharin looks away from the TV. "Well, schoolwork is important. You\'re about to head to university and you need to be ready for what\'s waiting there."');
    scene.text('"I don\'t know if I\'ll end up there. I\'m already tired of it and I don\'t want to spend more time in school when I could be making money," you explain.');
    scene.text('"Oh? And what would you be doing without a degree?" Masharin asks.');
    scene.text('"You know, some odd jobs here and there. I\'m sure I\'ll get by fine. After all, I\'m still young and vigorous, so I\'ll manage," you confidently reply. "Well, time to head back. Don\'t want to keep Artem waiting…"');
    scene.text('You stretch, showing off your curves a little before turning and leaving the Chebotarevs looking at you in disbelief.');
    scene.actions([
      { label: 'Leave', goto: ['artemhome', 'hallway'] },
    ]);
  } },
      ]);
    } else {
      scene.text('"Excuse me," you whisper. "I don\'t want to bother you, but I needed a break and heard you watching TV…"');
      // TODO-QSP: dynamic text: Glinina slowly turns around. "You''re not a bother at all, <<$pcs_firstname>>. W...
      scene.text(`Glinina slowly turns around. "You're not a bother at all, ${((st as any).pcs_firstname || '')}. We were just watching the news. You can join us if you want."`);
      scene.actions([
        { label: 'Yes', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/masharin.jpg');
    scene.text('You face shines up as you quickly walk over and take a seat. "Thanks."');
    // TODO-QSP: dynamic text: "Not a problem, <<$pcs_firstname>>. You''re more than welcome," Masharin replies...
    scene.text(`"Not a problem, ${((st as any).pcs_firstname || '')}. You're more than welcome," Masharin replies as they return to watching the news.`);
    scene.text('Some time passes by and the three of you are discussing current events that are shown on the TV. The Chebotarevs are very polite and can really carry a discussion.');
    scene.text('"Well, time for me to go back," you say. "Thank you for the little break. It was a lot of fun."');
    // TODO-QSP: dynamic text: "Anytime, <<$pcs_firstname>>. We''re glad to have someone else to discuss things...
    scene.text(`"Anytime, ${((st as any).pcs_firstname || '')}. We're glad to have someone else to discuss things with," Glinina replies.`);
    scene.actions([
      { label: 'Leave', goto: ['artemhome', 'hallway'] },
    ]);
  } },
        { label: 'No', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/glinina.jpg');
    scene.text('"I\'ve bothered you enough," you say as you excuse yourself. "I need to head back to Artem…"');
    // TODO-QSP: dynamic text: "Okay <<$pcs_firstname>>. The offer still stands if you change your mind," Glini...
    scene.text(`"Okay ${((st as any).pcs_firstname || '')}. The offer still stands if you change your mind," Glinina replies.`);
    scene.text('"Thank you. Maybe next time," you say before turning around as they return to watching the TV.');
    scene.actions([
      { label: 'Leave', goto: ['artemhome', 'hallway'] },
    ]);
  } },
      ]);
    }
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterKitchen(s: GameState, scene: SceneBuilder): void {
  if (((s as any).kitchenev_day ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).kitchenev = 0;
  }
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'core_library', 'setloc', 'artemhome', 'kitchen');
  (s as any).locclass = 'kitr';
  qspCall(s, 'stat', '');
  qspCall(s, 'kit_din', '');
  scene.text('<center><b>Kitchen</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/artemhome/kitchen.jpg');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTimecheck(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).kitchenev ?? 0) === 1  &&  ((s as any).ArtemParentsLoc ?? 0) === 5  &&  ((s as any).hour ?? 0) < 22) {
    scene.text('As you enter the kitchen, you see Artem\'s mother busy working away.');
    scene.actions([
      { label: 'Leave', goto: ['artemhome', 'hallway'] },
      { label: 'Talk to her', handler: (st: GameState) => {
    if (((st as any).fame ?? 0)?.['pav_slut'] >= 200  ||  ((st as any).grupTipe ?? 0) === 4) {
      scene.img('images/locations/pavlovsk/resident/apartment/artemhome/glinina.jpg');
      if (((st as any).artemQW ?? 0)?.['metArtemMom'] === 0) {
        ((st as any).artemQW = (st as any).artemQW ?? {})['metArtemMom'] = 1;
        scene.text('As Artem starts talking, she stops what she was doing. "This is the girl I was telling you about…"');
        scene.text('"Oh." She\'s a bit taken aback, but replies politely. "Hello, I\'m Glinina, Artem\'s mother. Pleasure to meet you."');
        // TODO-QSP: dynamic text: You greet her back. "Hi, my name is <<$pcs_firstname>>. Nice to meet you."
        scene.text(`You greet her back. "Hi, my name is ${((st as any).pcs_firstname || '')}. Nice to meet you."`);
        scene.text('An awkward silence follows before Glinina speaks up. "I\'m not sure that Artem told me your last name…"');
        scene.actions([
          { label: 'Answer', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/glinina.jpg');
    // TODO-QSP: dynamic text: "<<$pcs_lastname>>," you reply.
    scene.text(`"${((st as any).pcs_lastname || '')}," you reply.`);
    scene.text('"Oh," she replies a little hesitantly, as if she recognized it. "Yes, I know of your mother. You have a sister and a brother too, right?"');
    scene.text('You nod. "Yeah, but they\'re totally different from me, though…" you say with a naughty smirk.');
    scene.text('Glinina lets out a nervous laugh. "So the two of you are studying together?"');
    scene.text('Artem looks at her impatiently, as if he wants the interaction to finish so you can go on your merry way.');
    scene.actions([
      { label: 'Yeah…', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/glinina.jpg');
    scene.text('You look at Artem and are barely able to hold a straight face. "Oh… Yeah… Studying… We have something to do for a class together… We\'re in the same group…"');
    scene.text('Glinina crosses her arms. "Is that so, Artem? You\'ve been working very hard this year when it comes to school, so I hope you can keep your focus for the rest of it too."');
    scene.text('Artem looks gloomy at her. "Yes, mom…"');
    scene.text('The two of you exchange pleasantries and you give Artem a nudge with your hip as you walk away. "See? I do know how to behave…"');
    scene.actions([
      { label: 'Leave', goto: ['artemhome', 'hallway'] },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        // TODO-QSP: dynamic text: As Artem starts talking, she stops what she was doing. "<<$pcs_firstname>> came ...
        scene.text(`As Artem starts talking, she stops what she was doing. "${((st as any).pcs_firstname || '')} came back over, I'm tutoring her."`);
        scene.text('"Oh." She\'s a bit taken aback, but replies politely. "Well hello, again. I\'m sure my little Artem will have your grades up in no time. I\'m glad to see you putting some effort into that."');
        scene.text('You look at Artem and are barely able to hold a straight face.. "Oh… Yeah… Studying… My grades are not as good as I\'d like and your son offered to help me get them… up." ');
        // TODO-QSP: dynamic text: Glinina crosses her arms. "I''m glad you''re helping <<$pcs_firstname>>, but rem...
        scene.text(`Glinina crosses her arms. "I'm glad you're helping ${((st as any).pcs_firstname || '')}, but remember to keep your focus on your own grades. You need to keep them up to get into the university."`);
        scene.text('Artem looks gloomy at her. "Yes, mom…"');
        scene.text('The two of you exchange pleasantries and you give Artem a nudge with your hip as you walk away. "See? I do know how to behave…"');
        scene.actions([
          { label: 'Leave', goto: ['artemhome', 'hallway'] },
        ]);
      }
    } else {
      scene.img('images/locations/pavlovsk/resident/apartment/artemhome/glinina.jpg');
      if (((st as any).artemQW ?? 0)?.['metArtemMom'] === 0) {
        ((st as any).artemQW = (st as any).artemQW ?? {})['metArtemMom'] = 1;
        // TODO-QSP: dynamic text: Noticing you, she stops and smiles. "You must be <<$pcs_firstname>>. Artem has t...
        scene.text(`Noticing you, she stops and smiles. "You must be ${((st as any).pcs_firstname || '')}. Artem has told me a lot about you…"`);
        scene.text('"Hopefully only good things…" you joke and smile while looking at Artem.');
        scene.text('She starts laughing. "Yes, no need to worry. He\'s kept all the bad stuff from me."');
        scene.text('Artem rolls his eyes, not too amused by his mother\'s comment.');
        scene.text('"You have a lovely home," you comment. "I didn\'t expect to find so many books lying around…"');
        scene.text('"Both myself and Artem\'s father like to read. I\'m a librarian after all and my husband is a real bookworm, so I guess that\'s how we ended up with that many."');
        scene.actions([
          { label: 'What do you like to read?', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/glinina.jpg');
    scene.text('"Who\'s your favorite author?" you ask, wanting to be friendly.');
    scene.text('Glinina\'s eyes light up. "I\'m particularly fond of classic Russian writers and would say Tolstoy. I especially like his novella \'The Death of Ivan Ilyich\'."');
    scene.text('"You don\'t find it a bit morbid?" you wonder.');
    scene.text('Artem sighs. "Now you\'ve gotten her started…"');
    // TODO-QSP: dynamic text: Glinina waves her hand towards Artem. "Shush. You''ve finally brought a friend o...
    scene.text(`Glinina waves her hand towards Artem. "Shush. You've finally brought a friend over that wants to discuss literature. Please take a seat ${((st as any).pcs_firstname || '')}; I'll make some tea and we can discuss it further."`);
    scene.actions([
      { label: 'Pull out a chair', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/glinina.jpg');
    // TODO-QSP: dynamic text: Just as you pull out the chair, Artem interrupts by clearing his throat. "We nee...
    scene.text(`Just as you pull out the chair, Artem interrupts by clearing his throat. "We need to go and study Mom. I didn't bring ${((st as any).pcs_firstname || '')} over here so you could have someone to chat with…"`);
    scene.text('Glinina sighs. "You and your studying. I know your father says it\'s the way to go, but you need to relax sometimes too. I\'ve already got one bookworm in this house, I don\'t need another."');
    scene.text('Glinina tells you that if you ever find the time, you\'re free to come and discuss literature with her over tea.');
    scene.actions([
      { label: 'Leave', goto: ['artemhome', 'hallway'] },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        // TODO-QSP: dynamic text: Noticing you, she stops and smiles. "Hello <<$pcs_firstname>>." She then looks a...
        scene.text(`Noticing you, she stops and smiles. "Hello ${((st as any).pcs_firstname || '')}." She then looks at Artem. "Are you two studying again?"`);
        scene.text('Artem nods his head. "Yes, mom…"');
        // TODO-QSP: dynamic text: His mom smiles and turns back to you. "How are you doing in school, <<$pcs_first...
        scene.text(`His mom smiles and turns back to you. "How are you doing in school, ${((st as any).pcs_firstname || '')}?"`);
        if (((st as any).class ?? 0)?.['school_grades_above_70'] > 0  &&  ((st as any).class ?? 0)?.['school_grades_above_40'] === 13) {
          scene.text('You shake your head slightly. "Not good at all, but that\'s why I\'m here. I\'m hoping your son can help me improve my grades."');
          scene.text('She smiles at Artem. "Oh, I\'m sure he can. Our boy is very smart. He\'s going to get a full scholarship so he can go to the university in the city."');
          scene.text('Her tone and body language shows how proud she is of him.');
          scene.text('Artem looks a little embarrassed. "Yes… Anyway, we should go and study now."');
          scene.text('You exchange goodbyes with his mother as he escorts you out of the room.');
        } else {
          if (((st as any).class ?? 0)?.['school_grades_above_70'] === 13) {
            scene.text('You smile. "Not as good as I\'d like, but that\'s why I\'m here. I\'m hoping your son can help me improve my grades."');
            scene.text('She smiles at Artem.  "Oh, I\'m sure he can. Our boy is very smart. He\'s going to get a full scholarship so he can go to the university in the city."');
            scene.text('Her tone and body language shows how proud she is of him.');
            scene.text('Artem looks a little embarrassed. "Yes… Anyway, we should go and study now."');
            scene.text('You exchange goodbyes with his mother as he escorts you out of the room.');
          } else {
            scene.text('You smile proudly. "Very good. My grades are almost as good as Artem\'s, but it doesn\'t hurt to make sure they stay that way."');
            scene.text('She smiles at Artem. "I couldn\'t agree more! I\'m so glad you understand the importance of a good education like Artem here. He\'s going to get a full scholarship so he can go to the university in the city."');
            scene.text('Her tone and body language shows how proud she is of him.');
            scene.text('Artem looks a little embarrassed. "Yes… Anyway, we should go and study now."');
            scene.text('You exchange goodbyes with his mother as he escorts you out of the room.');
          }
        }
        scene.actions([
          { label: 'Leave', goto: ['artemhome', 'hallway'] },
        ]);
      }
    }
  } },
    ]);
  } else {
    scene.text('The room is so spotless that you can actually see your reflection in the tiles. A table is along the wall opposite the counters.');
    qspCall(s, 'kit_din', 'fill_bottle');
    qspCall(s, 'kit_din', 'driwater');
    scene.actions([
      { label: 'Leave', goto: ['artemhome', 'hallway'] },
      { label: 'Look in the fridge', goto: ['artemhome', 'fridge'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterFridge(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  if (((s as any).artemfood_day ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).artemsup_count = 1;
    (s as any).artemlefto_count = 1;
    (s as any).artemwater_count = 1;
    (s as any).artemtea_count = 1;
    (s as any).artemsanw_count = 1;
  }
  qspCall(s, 'stat', '');
  if (((s as any).artemlefto_count ?? 0) >= 1) {
    (s as any).artem_lefto = ' some leftovers';
  } else {
    (s as any).artem_lefto = '';
  }
  if (((s as any).artemsup_count ?? 0) >= 1) {
    (s as any).artem_sup = ' some soup';
  } else {
    (s as any).artem_sup = '';
  }
  if (((s as any).artemwater_count ?? 0) >= 1) {
    (s as any).artem_water = ' some bottled water';
  } else {
    (s as any).artem_water = '';
  }
  if (((s as any).artemtea_count ?? 0) >= 1) {
    (s as any).artem_tea = ' some tea';
  } else {
    (s as any).artem_tea = '';
  }
  if (((s as any).artemsanw_count ?? 0) >= 1) {
    (s as any).artem_sanw = ' some stuff to make a sandwich';
  } else {
    (s as any).artem_sanw = '';
  }
  scene.img('images/shared/home/kitchen/fridge.jpg');
  // TODO-QSP: dynamic text: You open the fridge and see:<<$artem_tea>><<$artem_water>><<$artem_sup>><<$artem...
  scene.text(`You open the fridge and see:${((s as any).artem_tea || '')}${((s as any).artem_water || '')}${((s as any).artem_sup || '')}${((s as any).artem_lefto || '')}${((s as any).artem_sanw || '')}`);
  if (((s as any).artemlefto_count ?? 0) > 0) {
    scene.actions([
      { label: 'Eat some leftovers', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).artemfood_day = ((st as any).daystart ?? 0);
    (st as any).artemlefto_count = ((st as any).artemlefto_count ?? 0) - (1);
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
    scene.text('It seems to be leftovers from last night\'s dinner. They look very good.');
    scene.actions([
      { label: 'Continue', goto: ['artemhome', 'kitchen'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).artemtea_count ?? 0) >= 0) {
      scene.actions([
        { label: 'Have some tea', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).artemfood_day = ((st as any).daystart ?? 0);
    (st as any).artemtea_count = ((st as any).artemtea_count ?? 0) - (1);
    qspCall(st, 'stat', '');
    scene.img('images/shared/drinks/tea.jpg');
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
    scene.text('You find some tea and make it.');
    scene.actions([
      { label: 'Continue', goto: ['artemhome', 'kitchen'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).artemwater_count ?? 0) >= 0) {
        scene.actions([
          { label: 'Have some water', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).artemfood_day = ((st as any).daystart ?? 0);
    (st as any).artemwater_count = ((st as any).artemwater_count ?? 0) - (1);
    qspCall(st, 'stat', '');
    scene.img('images/shared/food/waterbottle1.jpg');
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
    scene.text('You drink some bottled water.');
    scene.actions([
      { label: 'Continue', goto: ['artemhome', 'kitchen'] },
    ]);
  } },
        ]);
      } else {
        if (((s as any).artemsup_count ?? 0) >= 0) {
          scene.actions([
            { label: 'Have some soup', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).artemfood_day = ((st as any).daystart ?? 0);
    (st as any).artemsup_count = ((st as any).artemsup_count ?? 0) - (1);
    qspCall(st, 'stat', '');
    scene.img('images/shared/food/soup.jpg');
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
    scene.text('You find some soup in the fridge and spoon out a bowl to eat.');
    scene.actions([
      { label: 'Continue', goto: ['artemhome', 'kitchen'] },
    ]);
  } },
          ]);
        } else {
          if (((s as any).artemsanw_count ?? 0) >= 0) {
            scene.actions([
              { label: 'Make a sandwich', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).artemfood_day = ((st as any).daystart ?? 0);
    (st as any).artemsanw_count = ((st as any).artemsanw_count ?? 0) - (1);
    qspCall(st, 'stat', '');
    scene.img('images/shared/food/reuben.jpg');
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
    scene.text('You grab all the stuff you need from the fridge and get some bread out of the cabinet to make yourself a sandwich.');
    scene.actions([
      { label: 'Continue', goto: ['artemhome', 'kitchen'] },
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
    { label: 'Close the refrigerator', goto: ['artemhome', 'kitchen'] },
  ]);
  scene.build();
}

function enterArtemparents(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  (s as any).temp = (Math.floor(Math.random() * 2) + 0);
  qspCall(s, 'core_library', 'setloc', 'artemhome', ((s as any).locArgs?.[0] ?? 0));
  qspCall(s, 'stat', '');
  scene.text('<center><b>Artem\'s parent\'s room</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/artemhome/parroom.jpg');
  scene.text('The room is clean and tidy. The large bed is neatly made with a comforter on it while nightstands rest on each side. The closest has a large mirror on the door and next to it is a two dressers, one of which has a small TV on it.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTimecheck(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).hour ?? 0) < 7  ||  ((s as any).hour ?? 0) > 22) {
    scene.text('You look into the bedroom and see Artem\'s parents sleeping. Not wanting to disturb them, you close the door and leave.');
    scene.actions([
      { label: 'Leave', goto: ['artemhome', 'hallway'] },
    ]);
  } else {
    scene.text('Nobody\'s here. You should probably leave, but could also take a look around first…');
    scene.actions([
      { label: 'Leave', goto: ['artemhome', 'hallway'] },
      { label: 'Look around', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/momsdrawer.jpg');
    scene.text('You snoop around, opening drawers and looking in the closet, but don\'t find anything of interest. The room is perfectly organized with each drawer containing a type of clothing neatly folded up. There seems to be nothing else of interest.');
    scene.actions([
      { label: 'Leave', goto: ['artemhome', 'hallway'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterTimecheck(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) >= 23  ||  ((s as any).hour ?? 0) < 4) {
    qspGoto(s, 'artemhome', 'timecheck_late_exit');
  } else {
    if (((s as any).hour ?? 0) < 6) {
      qspGoto(s, 'artemhome', 'timecheck_early_exit');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterTimecheckEarlyExit(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('It\'s too early to be running around in Artem\'s apartment. You should leave.');
  // TODO-QSP: end
  scene.actions([
    { label: '<b>Leave Artem\'s apartment</b>', handler: (st: GameState) => {
    if (((st as any).clothingworntype ?? 0) === 'nude') {
      qspCall(st, 'shortgs', 'dress');
    }
    qspGoto(st, 'pod_ezd', 'etaj_1');
  } },
  ]);
  scene.build();
}

function enterTimecheckLateExit(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('It\'s too late to be running around in Artem\'s apartment. You should leave.');
  // TODO-QSP: end
  scene.actions([
    { label: '<b>Leave Artem\'s apartment</b>', handler: (st: GameState) => {
    if (((st as any).clothingworntype ?? 0) === 'nude') {
      qspCall(st, 'shortgs', 'dress');
    }
    qspGoto(st, 'pod_ezd', 'etaj_1');
  } },
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
    case 'bathroom_occupied':
      enterBathroomOccupied(s, scene);
      break;
    case 'artemroom':
      enterArtemroom(s, scene);
      break;
    case 'artemdresser':
      enterArtemdresser(s, scene);
      break;
    case 'bookshelf':
      enterBookshelf(s, scene);
      break;
    case 'night_stand':
      enterNightStand(s, scene);
      break;
    case 'computer':
      enterComputer(s, scene);
      break;
    case 'snack':
      enterSnack(s, scene);
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
    case 'artemparents':
      enterArtemparents(s, scene);
      break;
    case 'timecheck':
      enterTimecheck(s, scene);
      break;
    case 'timecheck_early_exit':
      enterTimecheckEarlyExit(s, scene);
      break;
    case 'timecheck_late_exit':
      enterTimecheckLateExit(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const artemhome: LocationDef = {
  name: 'artemhome',
  title: 'Entrance hall',
  region: 'other',
  locationType: 'public_indoors',
  locclass: 'kitr',
  enter: enter,
};
