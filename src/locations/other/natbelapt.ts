import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterHome(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'natbelapt', 'home');
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
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
  if (((s as any).NatbelQW ?? 0)?.['pregday'] > 0  &&  (((s as any).daystart ?? 0)-((s as any).NatbelQW ?? 0)?.['pregday']) > (280 + (Math.floor(Math.random() * (2 - -2 + 1)) + (-2)))) {
    ((s as any).NatbelQW ?? {})['babycount'] = (((s as any).NatbelQW ?? {})['babycount'] ?? 0) + (1);
    ((s as any).NatbelQW ?? {})['pregday'] = 0;
  }
  qspCall(s, 'natbelEv', 'nat_schedule');
  qspCall(s, 'natbelEv', 'natmomhome');
  qspCall(s, 'natbelEv', 'nat_mother_state');
  if (((s as any).NatbelQW ?? 0)?.['MotherHome'] === 1) {
    ((s as any).NatbelQW ?? {})['MotherDoor'] = Math.floor(Math.random() * 2) + 0;
  } else {
    ((s as any).NatbelQW ?? {})['MotherDoor'] = 0;
  }
  if (((s as any).NatbelQW ?? 0)?.['seethroughwearing'] === 1  &&  ((s as any).NatbelQW ?? 0)?.['MotherHome'] === 1) {
    ((s as any).NatbelQW ?? {})['MotherDoor'] = 1;
    (s as any).NatashaLoc = 2;
  }
  if ((((s as any).NatashaLoc ?? 0) === 6  ||  ((s as any).NatashaLoc ?? 0) === 7)  &&  ((s as any).NatbelQW ?? 0)?.['MotherHome'] === 1) {
    ((s as any).NatbelQW ?? {})['MotherDoor'] = 1;
  }
  scene.img('images/locations/pavlovsk/resident/apartment/aptdoor.jpg');
  scene.text('You walk up to the front door and knock.');
  if (((s as any).hour ?? 0) >= 22) {
    scene.text('It\'s too late in the day to visit Natasha.');
    scene.actions([
      { label: 'Move away from the door', goto: ['pod_ezd', 'etaj_4'] },
    ]);
  } else {
    if (((s as any).hour ?? 0) < 8) {
      scene.text('It\'s too early in the day to visit Natasha.');
      scene.actions([
        { label: 'Move away from the door', goto: ['pod_ezd', 'etaj_4'] },
      ]);
    } else {
      if (((s as any).NatbelQW ?? 0)?.['blocked'] === 1) {
        if (((s as any).daystart ?? 0) > ((s as any).NatbelQW ?? 0)?.['block_day']  &&  ((s as any).NatbelQW ?? 0)?.['block_reason'] === 'slut') {
          scene.actions([{ label: 'Continue', goto: ['natbel_friend', 'slut_reconcile_door'] }]);
        }
        scene.text('You knock on the door several times, but no one answers.');
        scene.actions([
          { label: 'Move away from the door', goto: ['pod_ezd', 'etaj_4'] },
        ]);
      } else {
        if (((((s as any).hour ?? 0) >= 15  ||  (((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) >= 10))  &&  (((s as any).hour ?? 0) < 21  ||  (((s as any).hour ?? 0) === 21  &&  (((s as any).week ?? 0) === 5  ||  ((s as any).week ?? 0) === 6))))  &&  ((s as any).NatbelQW ?? 0)?.['MotherDoor'] === 0  &&  ((s as any).NatashaLoc ?? 0) > 0  &&  ((s as any).NatashaLoc ?? 0) < 6) {
          if (((s as any).NatbelQW ?? 0)?.['pregday'] === 0  ||  (((s as any).NatbelQW ?? 0)?.['pregday'] > 0  &&  (((s as any).daystart ?? 0)-((s as any).NatbelQW ?? 0)?.['pregday']) <= 90)) {
            scene.img('images/characters/shared/headshots_main/big16.jpg');
          } else {
            if (((s as any).NatbelQW ?? 0)?.['pregday'] > 0  &&  (((s as any).daystart ?? 0)-((s as any).NatbelQW ?? 0)?.['pregday']) > 90  &&  (((s as any).daystart ?? 0)-((s as any).NatbelQW ?? 0)?.['pregday']) < 200) {
              scene.img('images/characters/pavlovsk/school/girl/natasha/16(2).jpg');
            } else {
              if (((s as any).NatbelQW ?? 0)?.['pregday'] > 0  &&  (((s as any).daystart ?? 0)-((s as any).NatbelQW ?? 0)?.['pregday']) >= 200) {
                scene.img('images/characters/pavlovsk/school/girl/natasha/16(3).jpg');
              }
            }
          }
          scene.text('You stand outside the Belova household, knocking on the door. After a few moments, Natasha opens the door.');
          if (((s as any).NatbelQW ?? 0)?.['pregday'] > 0  &&  (((s as any).daystart ?? 0)-((s as any).NatbelQW ?? 0)?.['pregday']) > 90  &&  (((s as any).daystart ?? 0)-((s as any).NatbelQW ?? 0)?.['pregday']) < 200) {
            scene.text('Looking at Natasha, her pregnant belly is starting to show. You have a strong suspicion that she carries your niece or nephew.');
          } else {
            if (((s as any).NatbelQW ?? 0)?.['pregday'] > 0  &&  (((s as any).daystart ?? 0)-((s as any).NatbelQW ?? 0)?.['pregday']) >= 200) {
              scene.text('Looking at Natasha, it is clear that she is pregnant. You have a strong suspicion that she carries your niece or nephew.');
            }
          }
          if (((s as any).NatbelQW ?? 0)?.['QWstage'] > 10) {
            scene.text('Natasha sees it\'s you at the door, and she immediately lowers her head slightly, not quite looking you in the eye, but you notice she\'s pleased to see you.');
            // TODO-QSP: dynamic text: "Oh, hi <<$pcs_nickname>>. Come in."
            scene.text(`"Oh, hi ${((s as any).pcs_nickname ?? 0)}. Come in."`);
          } else {
            if (((s as any).NatbelQW ?? 0)?.['QWstage'] > 5) {
              scene.text('Natasha sees it\'s you at the door and you see her shoulders slump a little as she starts looking at your feet rather than at your face.');
              // TODO-QSP: dynamic text: "Oh, uhm, hi <<$pcs_nickname>>. Come in."
              scene.text(`"Oh, uhm, hi ${((s as any).pcs_nickname ?? 0)}. Come in."`);
            } else {
              scene.text('Natasha sees it\'s you at the door and greets you with a warm hug.');
              // TODO-QSP: dynamic text: "Hi <<$pcs_nickname>>. Come in."
              scene.text(`"Hi ${((s as any).pcs_nickname ?? 0)}. Come in."`);
            }
          }
          (s as any).NatashaLoc = 1;
          scene.actions([
            { label: 'Go inside', goto: ['natbelapt', 'hallway'] },
            { label: 'Move away from the door', goto: ['pod_ezd', 'etaj_4'] },
          ]);
        } else {
          if (((s as any).NatbelQW ?? 0)?.['MotherHome'] === 1  &&  ((s as any).NatbelQW ?? 0)?.['MotherDoor'] === 1) {
            if (((s as any).NatbelQW ?? 0)?.['MotherState'] !== 3) {
              scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/natmomcasual.jpg');
            } else {
              scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/natmomdressedup.jpg');
            }
            scene.text('You stand outside the Belova household, knocking on the door. It takes quite a while before someone actually comes and in the end, it turns out to be Natasha\'s mother.');
            if (((s as any).NatbelQW ?? 0)?.['MetMother'] === 0) {
              ((s as any).NatbelQW ?? {})['MetMother'] = 1;
              // TODO-QSP: dynamic text: Her mother stands there for a second before she seems to notice you. She looks <...
              scene.text(`Her mother stands there for a second before she seems to notice you. She looks ${((s as any).NatbelQW ?? 0)?.['MotherStateMsg']}.`);
              // TODO-QSP: dynamic text: "Hi, I'm <<$pcs_nickname>>. I go to school with Natasha. Is she home?"
              scene.text(`"Hi, I'm ${((s as any).pcs_nickname ?? 0)}. I go to school with Natasha. Is she home?"`);
              // TODO-QSP: dynamic text: "It's nice to meet a friend of Natasha's. I'm her mother <<$npc_firstname['A191'...
              scene.text(`"It's nice to meet a friend of Natasha's. I'm her mother ${((s as any).npc_firstname ?? 0)?.['A191']}, but you can call me ${((s as any).npc_nickname ?? 0)?.['A191']}."`);
            } else {
              // TODO-QSP: dynamic text: Her mother stands there for a second before she seems to notice you. She looks <...
              scene.text(`Her mother stands there for a second before she seems to notice you. She looks ${((s as any).NatbelQW ?? 0)?.['MotherStateMsg']}.`);
            }
            if (((s as any).NatashaLoc ?? 0) !== 0) {
              // TODO-QSP: dynamic text: "Well now don't just stand there <<$pcs_nickname>>. Come on in!"
              scene.text(`"Well now don't just stand there ${((s as any).pcs_nickname ?? 0)}. Come on in!"`);
              // TODO-QSP: dynamic text: "<<$NatashaLocMsg>>"
              scene.text(`"${((s as any).NatashaLocMsg ?? 0)}"`);
              scene.actions([
                { label: 'Ask about her mood', goto: ['natbelEv', 'ask_state'] },
                { label: 'Go inside.', goto: ['natbelapt', 'hallway'] },
                { label: 'Move away from the door', goto: ['pod_ezd', 'etaj_4'] },
              ]);
            } else {
              // TODO-QSP: dynamic text: "Hi <<$pcs_nickname>>."
              scene.text(`"Hi ${((s as any).pcs_nickname ?? 0)}."`);
              // TODO-QSP: dynamic text: "<<$NatashaLocMsg>>"
              scene.text(`"${((s as any).NatashaLocMsg ?? 0)}"`);
              scene.actions([
                { label: 'Move away from the door', goto: ['pod_ezd', 'etaj_4'] },
              ]);
            }
          } else {
            scene.text('You knock on the door several times, but no one answers. There is probably no one home at the moment.');
            scene.actions([
              { label: 'Move away from the door', goto: ['pod_ezd', 'etaj_4'] },
            ]);
          }
        }
      }
    }
  }
  scene.build();
}

function enterLeaveApartment(s: GameState, scene: SceneBuilder): void {
  if (((s as any).NatbelQW ?? 0)?.['MotherStateKeep'] === 0) {
    ((s as any).NatbelQW ?? {})['MotherState'] = 0;
  }
  ((s as any).NatbelQW ?? {})['NoTV'] = 0;
  ((s as any).NatbelQW ?? {})['momrobe'] = 0;
  ((s as any).NatbelQW ?? {})['seethroughkitchen'] = 0;
  (s as any).natstayroom = 0;
  scene.actions([{ label: 'Continue', goto: ['pod_ezd', 'etaj_4'] }]);
  scene.build();
}

function enterHallway(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'natbelapt', 'hallway');
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'natbelEv', 'natmomhome');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Entrance hall</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/hallway.jpg');
  if (((s as any).NatbelQW ?? 0)?.['FirstVisit'] === 0) {
    ((s as any).NatbelQW ?? {})['FirstVisit'] = 1;
    scene.text('As you enter the Belova\'s hallway, you notice it looks very "Spartan". Their walls are bare, aside from a single picture of Natasha as a baby in her mother\'s arms. The smile on her face seems to light up the room all by itself.');
  } else {
    scene.text('This is the entrance hall of Natasha\'s apartment, with it\'s now familiar picture of Natasha as a baby in her mother\'s arms.');
  }
  if (((s as any).NatashaLoc ?? 0) === 6) {
    if (((s as any).hour ?? 0) >= 18  &&  ((s as any).NatbelQW ?? 0)?.['vaginal'] > 0  &&  ((s as any).NatbelQW ?? 0)?.['KolkaSex'] > 20  &&  (Math.floor(Math.random() * (4+(((s as any).NatbelQW ?? 0)?.['KolkaSex']/20 - 1 + 1)) + (1))) <= ((s as any).NatbelQW ?? 0)?.['KolkaSex']/20) {
      scene.actions([
        { label: 'Go spy on Natasha', goto: ['natkolEv', 'showerspy'] },
      ]);
    } else {
      scene.actions([
        { label: 'Go spy on Natasha', goto: ['natbelEv', 'showerspy'] },
      ]);
    }
    scene.actions([
      { label: '<b>Leave Natasha\'s apartment</b>', goto: ['natbelapt', 'leave_apartment'] },
      { label: 'Natasha\'s Room', goto: ['natbelapt', 'natroom'] },
      { label: 'Mother\'s Room', goto: ['natbelapt', 'nat_mother_room'] },
      { label: 'Living Room', goto: ['natbelapt', 'livingroom'] },
      { label: 'Kitchen', goto: ['natbelapt', 'kitchen'] },
    ]);
  } else {
    if (((s as any).NatashaLoc ?? 0) !== 1) {
      if (((s as any).NatashaLoc ?? 0) === 7) {
        // TODO-QSP: act 'Laundry Room': gt 'natbel_cp_1', 'laundry'
      }
      scene.actions([
        { label: '<b>Leave Natasha\'s apartment</b>', goto: ['natbelapt', 'leave_apartment'] },
        { label: 'Natasha\'s Room', goto: ['natbelapt', 'natroom'] },
        { label: 'Mother\'s Room', goto: ['natbelapt', 'nat_mother_room'] },
        { label: 'Living Room', goto: ['natbelapt', 'livingroom'] },
        { label: 'Kitchen', goto: ['natbelapt', 'kitchen'] },
        { label: 'Bathroom', goto: ['natbelapt', 'bathroom'] },
      ]);
    } else {
      // TODO-QSP: dynamic text: Natasha is standing next to you, looking at you expectantly. "What's up, <<$pcs_...
      scene.text(`Natasha is standing next to you, looking at you expectantly. "What's up, ${((s as any).pcs_nickname ?? 0)}?"`);
      scene.actions([
        { label: '<b>Leave Natasha\'s apartment</b>', goto: ['natbelapt', 'leave_apartment'] },
        { label: 'Let\'s go to your room', handler: (st: GameState) => {
    (st as any).NatashaLoc = 2;
  }, goto: ['natbelapt', 'natroom'] },
        { label: 'Let\'s go to the living room', handler: (st: GameState) => {
    (st as any).NatashaLoc = 4;
  }, goto: ['natbelapt', 'livingroom'] },
      ]);
    }
  }
  scene.build();
}

function enterLivingroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'natbelapt', 'livingroom');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Living room</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/living.jpg');
  scene.text('Most of the living room is occupied by an old but comfortable looking couch. It\'s big enough to sleep in. In front of it stands an old tiny TV.');
  ((s as any).NatbelQW ?? {})['TVshow'] = Math.floor(Math.random() * 9) + 0;
  if (((s as any).NatbelQW ?? 0)?.['TVshow'] === 0) {
    ((s as any).NatbelQW ?? {})['TVmsg'] = 'a nature show about wild animals in their natural habitat';
  } else {
    if (((s as any).NatbelQW ?? 0)?.['TVshow'] === 1) {
      ((s as any).NatbelQW ?? {})['TVmsg'] = 'a documentary about history';
    } else {
      if (((s as any).NatbelQW ?? 0)?.['TVshow'] === 2) {
        ((s as any).NatbelQW ?? {})['TVmsg'] = 'the news';
      } else {
        if (((s as any).NatbelQW ?? 0)?.['TVshow'] === 3) {
          ((s as any).NatbelQW ?? {})['TVmsg'] = 'a talent show';
        } else {
          if (((s as any).NatbelQW ?? 0)?.['TVshow'] === 4) {
            ((s as any).NatbelQW ?? {})['TVmsg'] = 'a comedy';
          } else {
            if (((s as any).NatbelQW ?? 0)?.['TVshow'] === 5) {
              ((s as any).NatbelQW ?? {})['TVmsg'] = 'a romantic movie';
            } else {
              if (((s as any).NatbelQW ?? 0)?.['TVshow'] === 6) {
                ((s as any).NatbelQW ?? {})['TVmsg'] = 'a horror movie';
              } else {
                if (((s as any).NatbelQW ?? 0)?.['TVshow'] === 7) {
                  ((s as any).NatbelQW ?? {})['TVmsg'] = 'a thriller';
                } else {
                  if (((s as any).NatbelQW ?? 0)?.['TVshow'] === 8) {
                    ((s as any).NatbelQW ?? {})['TVmsg'] = 'a porno';
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).NatashaLoc ?? 0) === 4  &&  ((s as any).NatbelQW ?? 0)?.['NoTV'] === 1) {
    scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/tvsnack.jpg');
    scene.text('"I\'ll go grab us a snack, pick something good to watch." Natasha says as she heads to the kitchen.');
    if (((s as any).NatbelQW ?? 0)?.['QWstage'] < 5  ||  ((s as any).NatbelQW ?? 0)?.['MotherHome'] === 1) {
      if (((s as any).NatbelQW ?? 0)?.['TVshow'] === 8) {
        ((s as any).NatbelQW ?? {})['TVshow'] = 5;
        ((s as any).NatbelQW ?? {})['TVmsg'] = 'a romantic movie';
      }
    }
    // TODO-QSP: dynamic text: You turn on the TV and switch from channel to channel until you see something yo...
    scene.text(`You turn on the TV and switch from channel to channel until you see something you like. It's ${((s as any).NatbelQW ?? 0)?.['TVmsg']}.`);
    if (((s as any).NatbelQW ?? 0)?.['TVshow'] !== 8) {
      (s as any).minut = ((s as any).minut ?? 0) + 60;
      qspCall(s, 'stat', '');
      // TODO-QSP: dynamic text: When Natasha returns, she sits down holding a bowl of chips. "Good choice <<$pcs...
      scene.text(`When Natasha returns, she sits down holding a bowl of chips. "Good choice ${((s as any).pcs_nickname ?? 0)}."`);
      scene.text('You and Natasha both watch with interest while you pass the snacks around.');
      scene.text('When it ends you glance up at the clock and are startled to see that an hour has passed.');
      scene.actions([
        { label: 'Let\'s go to your room', handler: (st: GameState) => {
    (st as any).NatashaLoc = 2;
  }, goto: ['natbelapt', 'natroom'] },
      ]);
    } else {
      qspCall(s, 'npcStat', 'A16');
      scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/youpickporn.jpg');
      // TODO-QSP: dynamic text: When Natasha returns, she stops in her tracks, holding a bowl of chips. "Really,...
      scene.text(`When Natasha returns, she stops in her tracks, holding a bowl of chips. "Really, you want to watch that ${((s as any).pcs_nickname ?? 0)}?`);
      scene.text('"You can learn a lot from it, Natasha. I thought I\'d provide you with some education." You say to her with a smirk while patting the couch next to you, gesturing her to sit down.');
      scene.text('Natasha sits down hesitantly while you cuddle up to her, the snacks sitting forgotten next to you.');
      scene.text('Throughout the show you keep caressing her body gently, making her moan in pleasure from time to time which makes you feel hornier and hornier in return.');
      scene.text('When it ends the both of you get up from the couch, visibly aroused.');
      qspCall(s, 'arousal', 'porn', 10);
      qspCall(s, 'arousal', 'foreplay', (-10), 'lesbian');
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Let\'s go to your room', handler: (st: GameState) => {
    (st as any).NatashaLoc = 2;
  }, goto: ['natbelapt', 'natroom'] },
      ]);
    }
  } else {
    if (((s as any).NatashaLoc ?? 0) === 4  &&  ((s as any).NatbelQW ?? 0)?.['NoTV'] === 0) {
      // TODO-QSP: dynamic text: Natasha is sitting on the couch watching <<$NatbelQW['TVmsg']>>.
      scene.text(`Natasha is sitting on the couch watching ${((s as any).NatbelQW ?? 0)?.['TVmsg']}.`);
      scene.actions([
        { label: 'Join her', handler: (st: GameState) => {
    if (((s as any).NatbelQW ?? 0)?.['TVshow'] !== 8) {
      scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/tvsnack.jpg');
      if ((!(Math.floor(Math.random() * 2) + 0))) {
        (s as any).minut = ((s as any).minut ?? 0) + 60;
        qspCall(s, 'stat', '');
        scene.text('You sit on the couch next to Natasha and watch TV with her. You and Natasha are both watching with interest while you pass the snacks around.');
        scene.text('When it ends you glance up at the clock and are startled to see that an hour has passed.');
        scene.actions([
          { label: 'Let\'s go to your room', handler: (st: GameState) => {
    (st as any).NatashaLoc = 2;
  }, goto: ['natbelapt', 'natroom'] },
        ]);
      } else {
        (s as any).minut = ((s as any).minut ?? 0) + 15;
        qspCall(s, 'stat', '');
        scene.text('You sit on the couch next to Natasha and watch TV with her. You soon get bored and start talking with Natasha, ignoring the TV completely.');
        scene.actions([
          { label: 'Let\'s go to your room', handler: (st: GameState) => {
    (st as any).NatashaLoc = 2;
  }, goto: ['natbelapt', 'natroom'] },
        ]);
      }
    } else {
      scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/nattvporn.jpg');
      if (((s as any).NatbelQW ?? 0)?.['MotherHome'] === 1) {
        scene.text('"Aren\'t you afraid your mother would walk in on you watching that?" You ask her as you walk in the room.');
        // TODO-QSP: dynamic text: Natasha jumps visibly at hearing your voice. "Oh <<$pcs_nickname>>, I…" She star...
        scene.text(`Natasha jumps visibly at hearing your voice. "Oh ${((s as any).pcs_nickname ?? 0)}, I…" She starts, going red in the face. "It's alright Natasha, everyone watches it." You tell her quickly as you take a seat next to her.`);
        scene.text('"Though I\'m not sure you should be watching it when your mother can walk in at any moment."');
        scene.actions([
          { label: 'Let\'s go to your room', handler: (st: GameState) => {
    (st as any).NatashaLoc = 2;
  }, goto: ['natbelapt', 'natroom'] },
        ]);
      } else {
        if (((s as any).fame ?? 0)?.['city_porn'] > 250  &&  ((s as any).film ?? 0) > 0) {
          (s as any).YourPorn = Math.floor(Math.random() * 10) + 0;
        } else {
          if (((s as any).fame ?? 0)?.['city_porn'] > 200  &&  ((s as any).film ?? 0) > 0) {
            (s as any).YourPorn = Math.floor(Math.random() * 20) + 0;
          } else {
            if (((s as any).fame ?? 0)?.['city_porn'] > 150  &&  ((s as any).film ?? 0) > 0) {
              (s as any).YourPorn = Math.floor(Math.random() * 30) + 0;
            } else {
              if (((s as any).fame ?? 0)?.['city_porn'] > 100  &&  ((s as any).film ?? 0) > 0) {
                (s as any).YourPorn = Math.floor(Math.random() * 40) + 0;
              } else {
                if (((s as any).fame ?? 0)?.['city_porn'] > 50  &&  ((s as any).film ?? 0) > 0) {
                  (s as any).YourPorn = Math.floor(Math.random() * 50) + 0;
                } else {
                  (s as any).YourPorn = 0;
                }
              }
            }
          }
        }
        if (((s as any).YourPorn ?? 0) === 1) {
          if (((s as any).fame ?? 0)?.['pav_slut'] < 100) {
            scene.text('You are startled to see yourself on the screen, unsure how you feel about Natasha knowing. "Best to check the damage." You think to yourself as you approach the couch.');
          } else {
            scene.text('You see yourself on the screen. "It would have happened sooner or later." You smile to yourself as you approach the couch.');
          }
          scene.text('Natasha doesn\'t notice you until she feels the couch move as you sit down next to her. She jumps in surprise and quickly adjusts her skirt to hide her wet panties, completely red in the face from a mixture of arousal and embarrassment at being caught watching porn featuring you.');
          if (((s as any).NatbelQW ?? 0)?.['WatchedYourPorn'] === 0) {
            ((s as any).NatbelQW ?? {})['WatchedYourPorn'] = 1;
            // TODO-QSP: dynamic text: "<<$pcs_nickname>>! You… Is this how you get so much money?"
            scene.text(`"${((s as any).pcs_nickname ?? 0)}! You… Is this how you get so much money?"`);
            scene.text('"It pays pretty well yeah."');
          } else {
            scene.text('"I see you\'re watching me again, you like it that much?" You ask her in a sultry voice.');
            scene.text('"I-It\'s… I-I\'m not sure how I feel about it. The fact that I know it\'s you is…" She starts stammering."');
          }
          if (((s as any).fame ?? 0)?.['pav_slut'] < 100) {
            scene.text('"Please don\'t tell anyone about it." You ask her feeling ashamed she knows about your porn career now.');
          } else {
            scene.text('"You can watch that all you like. I was so wet when we shot this one. It\'s amazing." You tell her proudly.');
          }
          scene.text('Natasha\'s eyes keep darting unbelieving glances at you while the two of you watch the rest of the scene. You pay more attention to her reactions than what you\'re doing on the screen, feeling amused each time you see her squirm.');
          scene.text('You start feeling aroused. More from watching Natasha than the porno. By the time it ends your pussy is wet.');
          scene.text('"That was pretty hot." She says at the end, her face completely red now. "Don\'t worry, I won\'t tell anyone.');
          qspCall(s, 'arousal', 'porn', 20);
          qspCall(s, 'arousal', 'end');
          scene.actions([
            { label: 'Let\'s go to your room', handler: (st: GameState) => {
    (st as any).NatashaLoc = 2;
  }, goto: ['natbelapt', 'natroom'] },
          ]);
        } else {
          scene.text('You walk into the room quietly. Natasha doesn\'t notice you until she feels the couch move as you sit down next to her. She jumps in surprise, completely red in the face from a mixture of arousal and embarrassment at being caught watching porn.');
          scene.text('Placing a hand on her knee you tell her: "It\'s ok, I like watching a dirty movie myself from time to time."');
          scene.text('Natasha turns her attention back to the TV, and her eyes stay glued to the screen. You pay more attention to her reactions than what\'s happening on the screen, feeling amused each time you see her squirm.');
          scene.text('You start feeling aroused. More from watching Natasha than the porno. By the time it ends your pussy is wet.');
          qspCall(s, 'arousal', 'porn', 20);
          qspCall(s, 'arousal', 'end');
          scene.actions([
            { label: 'Let\'s go to your room', handler: (st: GameState) => {
    (st as any).NatashaLoc = 2;
  }, goto: ['natbelapt', 'natroom'] },
          ]);
        }
      }
    }
  } },
        { label: 'Leave the room', goto: ['natbelapt', 'hallway'] },
      ]);
    } else {
      scene.actions([
        { label: 'Leave the room', goto: ['natbelapt', 'hallway'] },
      ]);
    }
  }
  scene.build();
}

function enterKitchen(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'natbelapt', 'kitchen');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'kit_din', '');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Kitchen</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/kitchen.jpg');
  scene.text('The kitchen is small but has all the necessary things. There is a stove, a fridge, a sink, and a tiny dining table. Everything looks sparkling clean.');
  if ((Math.floor(Math.random() * 5) + 0) === 0  &&  ((s as any).NatbelQW ?? 0)?.['seethroughwearing'] === 1  &&  ((s as any).NatbelQW ?? 0)?.['seethroughkitchen'] === 0) {
    scene.img('images/characters/pavlovsk/school/girl/natasha/seethroughkitchen01.jpg');
    ((s as any).NatbelQW ?? {})['seethroughkitchen'] = 1;
    scene.text('As you walk into the kitchen, you see Natasha pouring herself a glass of milk.');
    scene.text('When she notices you standing there her face starts turning red immediately.');
    scene.text('"I-I needed a drink." She stammers as she puts the milk back into the fridge and heads towards the door.');
    scene.text('"You\'re forgetting your milk." You tell her, unable to hold in your laughter as you watch her dart back to the table and grabbing her glass before leaving as quickly as she can. Her face is a brilliant shade of crimson now.');
  } else {
    if (((s as any).NatashaLoc ?? 0) === 3  &&  ((s as any).NatbelQW ?? 0)?.['seethroughwearing'] === 0) {
      scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/natfridge.jpg');
      scene.text('Natasha is rummaging through the fridge. You can\'t help but admire her cute ass in those shorts.');
      if (((s as any).NatbelQW ?? 0)?.['QWstage'] > 6) {
        qspCall(s, 'willpower', 'exhib', 'force', 'easy');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Show me some skin [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Show me some skin [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'willpower', 'pay', 'force');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/natfridgeshow.jpg');
    // TODO-QSP: dynamic text: You grab her ass, making her jump and turn around. "Oh <<$pcs_nickname>>, you st...
    scene.text(`You grab her ass, making her jump and turn around. "Oh ${((s as any).pcs_nickname ?? 0)}, you startled me."`);
    scene.text('"You were just begging for it with your ass sticking out like that. And now I want more. Show me some skin, Natasha." You tell her.');
    if (((s as any).NatbelQW ?? 0)?.['MotherHome'] === 1) {
      scene.text('Natasha glances at the doorway to check if her mother isn\'t around and then quickly bares her breasts and pulls her shorts down to reveal her panties.');
      scene.text('Stepping closer you run your hand over her panties for a moment, feeling her shiver from a simple touch. "Ok, cover up, we don\'t want your mom catching us here."');
    } else {
      scene.text('Natasha gives you a warm smile and then seductively bares her breasts and pulls her shorts down to reveal her panties.');
      scene.text('Stepping closer you run your hand over her panties for a moment, feeling her shiver from a simple touch. "Ok, cover up, we don\'t want your mom coming home and catching us here."');
    }
    scene.actions([
      { label: 'Let\'s go to your room', handler: (st: GameState) => {
    (st as any).NatashaLoc = 2;
  }, goto: ['natbelapt', 'natroom'] },
    ]);
  } },
          ]);
        }
      }
      scene.actions([
        { label: 'Leave', goto: ['natbelapt', 'hallway'] },
        { label: 'Let\'s go to your room', handler: (st: GameState) => {
    (st as any).NatashaLoc = 2;
  }, goto: ['natbelapt', 'natroom'] },
      ]);
    } else {
      if (((s as any).NatbelQW ?? 0)?.['MotherHome'] === 1  &&  (Math.floor(Math.random() * 5) + 0) === 0  &&  ((s as any).NatbelQW ?? 0)?.['momrobe'] === 0) {
        scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/natmomkitchenrobe.jpg');
        ((s as any).NatbelQW ?? {})['momrobe'] = 1;
        (s as any).minut = ((s as any).minut ?? 0) + 5;
        qspCall(s, 'stat', '');
        // TODO-QSP: dynamic text: As you walk into the kitchen, you see <<$npc_nickname['A191']>> having a healthy...
        scene.text(`As you walk into the kitchen, you see ${((s as any).npc_nickname ?? 0)?.['A191']} having a healthy snack, wearing only a thin robe.`);
        // TODO-QSP: dynamic text: "Hello, <<$pcs_nickname>>." She greets you cheerfully without a hint of discomfo...
        scene.text(`"Hello, ${((s as any).pcs_nickname ?? 0)}." She greets you cheerfully without a hint of discomfort about the amount of skin she's showing.`);
        scene.text('The two of you make some small talk while she finishes eating.');
        scene.actions([
          { label: 'Leave', goto: ['natbelapt', 'hallway'] },
          { label: 'Look in the fridge', goto: ['natbelapt', 'fridge'] },
        ]);
      }
    }
  }
  qspCall(s, 'core_library', 'kitchen', 'shared');
  scene.actions([
    { label: 'Leave', goto: ['natbelapt', 'hallway'] },
    { label: 'Look in the fridge', goto: ['natbelapt', 'fridge'] },
  ]);
  scene.build();
}

function enterFridge(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/fridge.jpg');
  scene.text('You open the fridge and see that it mostly holds healthy things. Lots of vegetables, water, a bottle of lemonade and a couple of bottles of wine.');
  if (((s as any).NatbelQW ?? 0)?.['cucumber'] === 0) {
    scene.actions([
      { label: 'Take a cucumber', handler: (st: GameState) => {
    ((s as any).NatbelQW ?? {})['cucumber'] = 1;
    scene.text('You take a cucumber out of the fridge. This could come in handy.');
    scene.actions([
      { label: 'Continue', goto: ['natbelapt', 'fridge'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Close the refrigerator', goto: ['natbelapt', 'kitchen'] },
  ]);
  scene.build();
}

function enterBathroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'natbelapt', 'bathroom');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Bathroom</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/bathroom.jpg');
  scene.text('The bathroom is kept spotlessly clean. Everything here has a well cared for look to it.');
  scene.text('The toilet sits along the wall next to a small bathtub.');
  scene.text('You can do your hair and makeup in the <a href="exec:gt \'mirror\', \'start\'">mirror</a> above the sink.');
  qspCall(s, 'piercing_management', 'set_manage_string');
  qspCall(s, 'din_van', 'bath');
  qspCall(s, 'din_van', 'bteeth');
  qspCall(s, 'din_van', 'tampon');
  qspCall(s, 'din_van', 'basin');
  qspCall(s, 'din_van', 'prvt_pee');
  scene.actions([
    { label: 'Leave the bathroom', goto: ['natbelapt', 'hallway'] },
    { label: 'Take a shower', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    (s as any).noshampoo = 1;
    qspCall(s, 'din_van', 'showerdin');
    qspCall(s, 'stat', '');
    if (((s as any).NatbelQW ?? 0)?.['MotherHome'] === 1  &&  (!(Math.floor(Math.random() * 5) + 0))) {
      scene.actions([{ label: 'Continue', goto: ['natbelEv', 'showerevent1'] }]);
    } else {
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
        { label: 'Get out of the shower', goto: ['natbelapt', 'bathroom'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterNatroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'natbelapt', 'natroom');
  (s as any).music_loop = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Natasha\'s Room</b></center>');
  if (((s as any).hour ?? 0) >= 23  ||  ((s as any).hour ?? 0) < 7) {
    (s as any).NatashaLoc = 2;
    if (((s as any).month ?? 0) < 4  ||  ((s as any).month ?? 0) > 9) {
      scene.img('images/characters/pavlovsk/school/girl/natasha/natsleep5.jpg');
      scene.text('You look into the room and see that Natasha is sleeping snug under her covers. Not wanting to disturb her you close the door and leave.');
    } else {
      scene.img(`images/characters/pavlovsk/school/girl/natasha/natsleep${Math.floor(Math.random() * 4) + 1}.jpg`);
      scene.text('You look into the room and see that Natasha is sleeping soundly on her bed. Not wanting to disturb her you close the door and leave.');
    }
    qspCall(s, 'stat', '');
    if (((s as any).NatbelQW ?? 0)?.['FriendLover'] >= 8  ||  ((s as any).NatbelQW ?? 0)?.['QWstage'] >= 7) {
      scene.actions([
        { label: 'Join Natasha in her bed', goto: ['bed', 'start'] },
      ]);
    }
  } else {
    if (((s as any).NatbelQW ?? 0)?.['seethroughwearing'] === 1  &&  (!((s as any).natstayroom ?? 0))) {
      (s as any).NatashaLoc = 2;
      if (((s as any).NatbelQW ?? 0)?.['seethroughworn'] < 5) {
        scene.img('images/characters/pavlovsk/school/girl/natasha/seethrough01.jpg');
        scene.text('When you get back to Natasha\'s room, you see she\'s under her blankets reading a book.');
      } else {
        scene.actions([{ label: 'Continue', goto: ['natbelapt', 'seethorugh_surprise'] }]);
      }
    } else {
      if (((s as any).NatbelQW ?? 0)?.['seethroughwearing'] === 1  &&  ((s as any).natstayroom ?? 0) === 1) {
        (s as any).NatashaLoc = 2;
        scene.img('images/characters/pavlovsk/school/girl/natasha/seethrough00.jpg');
        scene.text('Natasha is standing there in the lingerie you gave her, looking at you with interest.');
      } else {
        scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/natroom.jpg');
        scene.text('Natasha\'s room looks very tidy. What it lacks in decorations is made up by how well she\'s using her available space. On the right side, there\'s a narrow bed in the corner with a bed stand next to it and a big closet for all of her clothes.');
        scene.text('On the left side, right behind the door is a small sofa, her desk and computer are in the back corner. Everything is cleaned and neatly organized.');
      }
    }
  }
  if (((s as any).NatashaShower ?? 0) === 1  &&  ((s as any).NatashaLoc ?? 0) !== 2) {
    scene.img('images/characters/pavlovsk/school/girl/natasha/nattowel1.jpg');
    scene.text('You sit down on Natasha\'s bed while you wait for her to finish showering.');
    (s as any).NatashaLoc = 2;
    scene.text('After about five minutes Natasha enters the room wearing only a towel.');
    if (((s as any).NatbelQW ?? 0)?.['QWstage'] > 5) {
      qspCall(s, 'natbel_cp_1', 'nat_after_shower');
    } else {
      // TODO-QSP: dynamic text: With a startled look on her face she stammers "Oh, hi <<$pcs_nickname>>, I didn'...
      scene.text(`With a startled look on her face she stammers "Oh, hi ${((s as any).pcs_nickname ?? 0)}, I didn't know you were coming over."`);
      scene.text('Amused by her obvious discomfort you offer: "Should I wait in the hallway?"');
      scene.text('"N-No, it\'s ok. It\'s not all that different from in the girl\'s locker rooms right?"');
      scene.actions([
        { label: 'Watch her get dressed', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/natdressing1.jpg');
    scene.text('Natasha grabs some clean clothes out of her closet, drops the towel and quickly gets dressed.');
    qspCall(s, 'arousal', 'voyeur', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
      ]);
    }
  } else {
    if (((s as any).NatashaLoc ?? 0) === 2  &&  ((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) < 23) {
      qspCall(s, 'natbel_friend', 'slutfame_check');
      if (((s as any).NatbelQW ?? 0)?.['bday_invite'] === 1  &&  ((s as any).daystart ?? 0) > ((s as any).NatbelQW ?? 0)?.['bday_day']) {
        qspCall(s, 'natbel_chat', 'birthday_missed');
      }
      if (((s as any).NatbelQW ?? 0)?.['seethroughwearing'] === 0) {
        scene.text('Natasha is sitting on the bed, looking at some fashion magazines.');
        scene.actions([
          { label: 'Let\'s go to the living room', handler: (st: GameState) => {
    ((s as any).NatbelQW ?? {})['NoTV'] = 1;
    (s as any).NatashaLoc = 4;
  }, goto: ['natbelapt', 'livingroom'] },
        ]);
      }
      if (((s as any).NatbelQW ?? 0)?.['pregday'] > 0  &&  ((s as any).daystart ?? 0)-((s as any).NatbelQW ?? 0)?.['pregday'] > 90  &&  ((s as any).NatbelQW ?? 0)?.['askedbaby'] !== ((s as any).daystart ?? 0)) {
        scene.actions([
          { label: 'Touch her belly', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).NatbelQW ?? {})['askedbaby'] = ((s as any).daystart ?? 0);
    qspCall(s, 'npc_relationship', 'modify', 'A16', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/touch_belly\'+iif(npc_pregtalk[\'A16\'] = 1, \'_preg\', \')+\'.jpg');
    if (((s as any).daystart ?? 0)-((s as any).NatbelQW ?? 0)?.['pregday'] < 120) {
      scene.text('She looks at you with a strange smile.');
      scene.text('"Yes," she answers the question you didn\'t voice, "your little brother has actually knocked me up. I hope you are happy with that because I can\'t afford an abortion."');
      scene.text('Her tone is a lot less accusing than you\'d expected. In fact, she seems… happy.');
      if (((s as any).npc_pregtalk ?? 0)?.['A16'] === 1) {
        scene.text('"It\'s really reassuring to know I won\'t be going through this alone though," she says softly and gives you a hug.');
      }
    } else {
      if (((s as any).daystart ?? 0)-((s as any).NatbelQW ?? 0)?.['pregday'] < 190) {
        scene.text('"I felt the baby kick earlier today!" she says with a big smile on her face, "keep your hands there for a bit, maybe it\'ll happen again."');
        if ((!(Math.floor(Math.random() * 21) + 0))) {
          scene.text('About a minute later you do indeed feel a tiny kick from inside Natasha\'s belly, making both of you jump a little.');
        }
        if (((s as any).NatbelQW ?? 0)?.['KolkaSex'] > 20  &&  (Math.floor(Math.random() * 3) + 0) === 1) {
          scene.text('With a beet-red face and a dreamy look in her eyes she adds "Don\'t tell Kolka, but every time we have our little… fun… it gets really active in there."');
        }
        if (((s as any).npc_pregtalk ?? 0)?.['A16'] === 1) {
          scene.text('A few moments later she asks "What about yours, felt anything yet?"');
          if (((s as any).pregtime ?? 0) < 120) {
            scene.text('"I don\'t think so," you respond, slightly sad about the fact for some reason.');
            scene.text('Natasha quickly picks up on that and tries to cheer you up "Don\'t worry, you\'re just not far along yet. It\'ll make you so happy when it happens for the first time, you\'ll see!"');
          } else {
            if (((s as any).pregtime ?? 0) < 190) {
              scene.text('"Yep, I feel it kicking in the morning sometimes," which prompts Natasha to start rubbing your belly too.');
            } else {
              scene.text('"Oh yeah, it\'s gotten quite lively in there lately," which prompts Natasha to start rubbing your belly too.');
              if ((!(Math.floor(Math.random() * 8) + 0))) {
                qspCall(s, 'din_bad', 'd_pregmovement');
                scene.text('"As if on queue…" you happily muse aloud.');
                if (((s as any).wombthfathID ?? 0) === 'A34') {
                  scene.text('With a tinge of wonder Natasha mumbles "Your little brother makes some energetic children, doesn\'t he?"');
                }
              }
            }
          }
        }
      } else {
        scene.text('"The baby\'s really restless lately. Turned my belly button into an outie with all that kicking," she says jokingly, barely keeping back her giggling.');
        if ((!(Math.floor(Math.random() * 8) + 0))) {
          scene.text('Natasha has barely finished her joke, before you feel a kick coming from within.<br>"There we go again, see?"');
        }
        if (((s as any).npc_pregtalk ?? 0)?.['A16'] === 1) {
          // TODO-QSP: dynamic text: She puts her hands on your belly a moment later and asks "How is your pregnancy ...
          scene.text(`She puts her hands on your belly a moment later and asks "How is your pregnancy going ${((s as any).pcs_nickname ?? 0)}?"`);
          if (((s as any).pregtime ?? 0) < 120) {
            // TODO-QSP: '"Oh, you know… I keep getting morning sickness, but it''s not as bad as I read it would be. And luc...
            scene.text('Natasha gives you a reassuring hug, telling you it\'s all going to be alright and that she\'s there for you.');
          } else {
            if (((s as any).pregtime ?? 0) < 190) {
              scene.text('"I feel the baby kicking in the morning sometimes," you say with a smile.');
            } else {
              scene.text('"Tell me about it, it\'s like there\'s a constant party going on in there."');
              if ((!(Math.floor(Math.random() * 8) + 0))) {
                qspCall(s, 'din_bad', 'd_pregmovement');
                scene.text('"As if on queue…" you happily muse aloud.');
                if (((s as any).wombthfathID ?? 0) === 'A34') {
                  scene.text('You see Natasha blush slightly before she says with a wink "Just like their dad, huh?"');
                }
              }
            }
          }
        }
      }
    }
    scene.actions([
      { label: 'Continue', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
        ]);
      }
      if (((s as any).lernHome ?? 0) > 0) {
        // TODO-QSP: act 'Study together': gs 'natbelEv', 'study_together'
      }
      qspCall(s, 'natbel_cp_1', 'make_her_do_homework');
      qspCall(s, 'natbel_cp_1', 'corrupt_choices');
      qspCall(s, 'natbel_cp_1', 'nat_debt_timer');
      scene.actions([
        { label: 'Talk with her', goto: ['natbel_chat', 'chat'] },
      ]);
    } else {
      scene.text('You poke around in Natasha\'s room for a bit.');
      scene.actions([
        { label: 'Leave', goto: ['natbelapt', 'hallway'] },
        { label: 'Open wardrobe', goto: ['wardrobe', 'start'] },
      ]);
    }
  }
  scene.actions([
    { label: 'Leave Natasha\'s room', goto: ['natbelapt', 'hallway'] },
    { label: 'Open wardrobe', goto: ['wardrobe', 'start'] },
  ]);
  scene.build();
}

function enterSeethorughSurprise(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/natasha/seethrough02.jpg');
  scene.text('When you get back to Natasha\'s room, you see she\'s on her bed reading a book.');
  scene.actions([
    { label: 'Move closer', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/seethrough03.jpg');
    scene.text('It doesn\'t look like she\'s noticed you coming in, so you move over to the bed and lay your hand on her ass.');
    scene.text('The moment your hand touches her skin she lets out a yelp and rolls over to see who it is.');
    // TODO-QSP: dynamic text: "Jesus <<$pcs_nickname>> you nearly gave me a heart attack. For a second I thoug...
    scene.text(`"Jesus ${((s as any).pcs_nickname ?? 0)} you nearly gave me a heart attack. For a second I thought my mom walked in."`);
    scene.text('You enjoy looking at her breasts through the thin fabric as she needs a moment to calm down.');
    qspCall(s, 'arousal', 'erotic', 3);
    qspCall(s, 'arousal', 'end');
    (s as any).natstayroom = 1;
    scene.actions([
      { label: 'Continue', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
    { label: 'Leave', goto: ['natbelapt', 'hallway'] },
  ]);
  scene.build();
}

function enterNatMotherRoom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'natbelapt', 'nat_mother_room');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Natasha\'s mother\'s room</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/momroom.jpg');
  scene.text('The room is fairly bare, but everything is organized neatly, and it\'s spotlessly clean. There is a bed, a big closet, and some bedstands next to the bed with lamps on them. Everything looks like it\'s cleaned on a daily basis.');
  if (((s as any).NatbelQW ?? 0)?.['CaughtByNatMomHitachi'] >= 1) {
    ((s as any).NatbelQW ?? {})['NatMomVibName'] = 'hitachi';
  } else {
    ((s as any).NatbelQW ?? {})['NatMomVibName'] = 'big vibrator';
  }
  if ((Math.floor(Math.random() * 5) + 0) === 0  &&  ((s as any).hour ?? 0) === 22  &&  ((s as any).NatbelQW ?? 0)?.['MotherHome'] === 1  &&  ((s as any).NatbelQW ?? 0)?.['SeenNatMomHitachi_day'] !== ((s as any).daystart ?? 0)) {
    // TODO-QSP: dynamic text: As you walk through the hallway, you hear a buzzing noise coming from <<$npc_nic...
    scene.text(`As you walk through the hallway, you hear a buzzing noise coming from ${((s as any).npc_nickname ?? 0)?.['A191']}'s room`);
    scene.text('Unable to resist your curiosity you push the door open a tiny bit so that you can peek inside.');
    scene.actions([
      { label: 'Don\'t peek', goto: ['natbelapt', 'hallway'] },
      { label: 'Look through the crack in the door', handler: (st: GameState) => {
    ((s as any).NatbelQW ?? {})['SeenNatMomHitachi_day'] = ((s as any).daystart ?? 0);
    ((s as any).NatbelQW ?? {})['SeenNatMomHitachi'] = (((s as any).NatbelQW ?? {})['SeenNatMomHitachi'] ?? 0) + (1);
    scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/sex/natmomhitachi11.jpg');
    // TODO-QSP: dynamic text: You can see <<$npc_nickname['A191']>> sitting on her bed with her eyes closed, w...
    scene.text(`You can see ${((s as any).npc_nickname ?? 0)?.['A191']} sitting on her bed with her eyes closed, wearing only her skirt which she has pulled up to expose her pussy.`);
    // TODO-QSP: dynamic text: She is eagerly rubbing her <<$NatbelQW['NatMomVibName']>> on her pussy. Even tho...
    scene.text(`She is eagerly rubbing her ${((s as any).NatbelQW ?? 0)?.['NatMomVibName']} on her pussy. Even though she's obviously trying to be quiet, her moans of pleasure keep getting louder and louder. You feel your own pussy getting wet in response.`);
    qspCall(s, 'arousal', 'voyeur_sex', 3);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep looking', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/sex/natmomhitachi12.jpg');
    // TODO-QSP: dynamic text: After a few more minutes you notice <<$npc_nickname['A191']>> pressing a button,...
    scene.text(`After a few more minutes you notice ${((s as any).npc_nickname ?? 0)?.['A191']} pressing a button, and the ${((s as any).NatbelQW ?? 0)?.['NatMomVibName']} starts buzzing more loudly. She starts to press it against her pussy even harder. It doesn't take long before you can clearly see her have an orgasm. She closes her legs around the ${((s as any).NatbelQW ?? 0)?.['NatMomVibName']} to keep it firmly on her pussy while she bucks and lets out gasping breaths.`);
    qspCall(s, 'arousal', 'voyeur_sex', 3);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep looking', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/sex/natmomhitachi13.jpg');
    scene.text('Her eyes fly open, and you have no chance to leave unnoticed. You stand there frozen to the spot as she pulls down her skirt and tries to hide her breasts with her arm.');
    if (((s as any).NatbelQW ?? 0)?.['SeenNatMomHitachi'] > 1) {
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>, You shouldn't be spying on people in their bedrooms. Now go....
      scene.text(`"${((s as any).pcs_nickname ?? 0)}, You shouldn't be spying on people in their bedrooms. Now go. We'll talk about this later."`);
    } else {
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I should have known you'd come spying again. What is it that...
      scene.text(`"${((s as any).pcs_nickname ?? 0)}, I should have known you'd come spying again. What is it that makes you so curious about these things?"`);
      scene.text('"I-I\'m not sure myself. I just am."');
      scene.text('"It\'s your age I guess, now would you kindly close the door so that I can get decent?"');
    }
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['natbelapt', 'hallway'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).hour ?? 0) < 7  ||  ((s as any).hour ?? 0) > 22) {
      if (((s as any).month ?? 0) < 4  ||  ((s as any).month ?? 0) > 9) {
        scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/natmomsleep3.jpg');
        // TODO-QSP: dynamic text: You look into the bedroom and see <<$npc_nickname['A191']>> sound asleep under t...
        scene.text(`You look into the bedroom and see ${((s as any).npc_nickname ?? 0)?.['A191']} sound asleep under the covers. Not wanting to disturb her you close the door and leave.`);
      } else {
        if ((Math.floor(Math.random() * 2) + 1) === 1) {
          scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/natmomsleep1.jpg');
          // TODO-QSP: dynamic text: You look into the bedroom and see <<$npc_nickname['A191']>>, sound asleep in her...
          scene.text(`You look into the bedroom and see ${((s as any).npc_nickname ?? 0)?.['A191']}, sound asleep in her bra and panties. You can see part of her pussy from where you're standing. Not wanting to disturb her you close the door and leave.`);
          qspCall(s, 'arousal', 'voyeur', 2);
        } else {
          scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/natmomsleep2.jpg');
          // TODO-QSP: dynamic text: You look into the bedroom and see <<$npc_nickname['A191']>>, tossing in her slee...
          scene.text(`You look into the bedroom and see ${((s as any).npc_nickname ?? 0)?.['A191']}, tossing in her sleep in her bra and panties. As you're watching she rolls onto her back and puts her hand in her panties. "That must be one hell of an enjoyable dream." You think to yourself. Not wanting to disturb her you close the door and leave.`);
          qspCall(s, 'arousal', 'voyeur_sex', 4);
        }
        qspCall(s, 'arousal', 'end');
      }
      if (((s as any).month ?? 0) < 4  ||  ((s as any).month ?? 0) > 9) {
        scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/natmomsleep3.jpg');
        // TODO-QSP: dynamic text: You look into the bedroom and see <<$npc_nickname['A191']>> sound asleep under t...
        scene.text(`You look into the bedroom and see ${((s as any).npc_nickname ?? 0)?.['A191']} sound asleep under the covers. Not wanting to disturb her you close the door and leave.`);
      }
      if ((Math.floor(Math.random() * 3) + 1) === 1) {
        scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/natmomsleep1.jpg');
        // TODO-QSP: dynamic text: You look into the bedroom and see <<$npc_nickname['A191']>>, sound asleep in her...
        scene.text(`You look into the bedroom and see ${((s as any).npc_nickname ?? 0)?.['A191']}, sound asleep in her bra and panties. You can see part of her pussy from where you're standing. Not wanting to disturb her you close the door and leave.`);
      } else {
        if ((Math.floor(Math.random() * 2) + 1) === 1) {
          scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/natmomsleep2.jpg');
          // TODO-QSP: dynamic text: You look into the bedroom and see <<$npc_nickname['A191']>>, tossing in her slee...
          scene.text(`You look into the bedroom and see ${((s as any).npc_nickname ?? 0)?.['A191']}, tossing in her sleep in her bra and panties. As you're watching she rolls onto her back and puts her hand in her panties. "That must be one hell of an enjoyable dream." You think to yourself. Not wanting to disturb her you close the door and leave.`);
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
        } else {
          if ((Math.floor(Math.random() * 2) + 1) === 1) {
            scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/natmomsleep1.jpg');
            // TODO-QSP: dynamic text: You look into the bedroom and see <<$npc_nickname['A191']>>, sound asleep in her...
            scene.text(`You look into the bedroom and see ${((s as any).npc_nickname ?? 0)?.['A191']}, sound asleep in her bra and panties. You can see part of her pussy from where you're standing. Not wanting to disturb her you close the door and leave.`);
          } else {
            scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/natmomsleep2.jpg');
            // TODO-QSP: dynamic text: You look into the bedroom and see <<$npc_nickname['A191']>>, tossing in her slee...
            scene.text(`You look into the bedroom and see ${((s as any).npc_nickname ?? 0)?.['A191']}, tossing in her sleep in her bra and panties. As you're watching she rolls onto her back and puts her hand in her panties. "That must be one hell of an enjoyable dream." You think to yourself. Not wanting to disturb her you close the door and leave.`);
            (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
          }
          qspCall(s, 'arousal', 'voyeur', 2);
          qspCall(s, 'arousal', 'end');
        }
      }
      scene.actions([
        { label: 'Leave', goto: ['natbelapt', 'hallway'] },
        { label: 'Leave', goto: ['natbelapt', 'hallway'] },
      ]);
    } else {
      if (((s as any).hour ?? 0) > 7  &&  ((s as any).hour ?? 0) < 21  &&  ((s as any).NatashaLoc ?? 0) === 5) {
        scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/natdressing01.jpg');
        scene.text('As you walk into the room, you see Natasha trying out one of her mother\'s sexier outfits, admiring herself in the bedroom mirror.');
        scene.text('"Wow, putting on a show for me Natasha?" You ask her as you walk into the room.');
        scene.text('At the sound of your voice, Natasha immediately turns to you and tries to hide just how short the skirt is with her hands.');
        if (((s as any).NatbelQW ?? 0)?.['QWstage'] < 7) {
          scene.text('"Hey, want to go hang out in your room?"');
          scene.actions([
            { label: 'Let\'s go to your room', handler: (st: GameState) => {
    (st as any).NatashaLoc = 2;
  }, goto: ['natbelapt', 'natroom'] },
          ]);
        } else {
          qspCall(s, 'willpower', 'exhib', 'force', 'easy');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Show me more [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Show me more [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'A16');
    qspCall(s, 'willpower', 'pay', 'force');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/natdressing02.jpg');
    scene.text('"Now don\'t get shy on me. Such an outfit is made to draw attention, so stop covering up and give me a show."');
    scene.text('Natasha, noticing that you won\'t take no for an answer, takes her hands away from the skirt and starts to dance around seductively, slowly raising her top to reveal her breasts.');
    scene.text('"You can show those wonderful tits to me anytime." You praise her.');
    qspCall(s, 'arousal', 'foreplay', 3, 'exhibitionism', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep going', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/natdressing03.jpg');
    scene.text('"Keep going, I want to see more of your pretty body." You nudge her on.');
    scene.text('By now Natasha seems to be enjoying giving you a striptease. She pulls her top off completely and moves over to a chair and starts running her hands over her own body, occasionally lifting the short skirt to give you a good look at her panties.');
    scene.text('She starts focusing on rubbing her legs, occasionally running her hands over her panties, rubbing her pussy through the fabric. As a final act, she moves them to the side to show you her wet pussy.');
    scene.text('"Ok, we better stop before your mom catches us. And you might want to throw those panties in the laundry, they look wet."');
    scene.text('Natasha quickly strips out of the rest of the outfit and quickly puts on her own clothes, red in the face from arousal.');
    qspCall(s, 'arousal', 'foreplay', 3, 'exhibitionism', 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Let\'s go to your room', handler: (st: GameState) => {
    (st as any).NatashaLoc = 2;
  }, goto: ['natbelapt', 'natroom'] },
    ]);
  } },
    ]);
  } },
            ]);
          }
          scene.actions([
            { label: 'Let\'s go to your room', handler: (st: GameState) => {
    (st as any).NatashaLoc = 2;
  }, goto: ['natbelapt', 'natroom'] },
          ]);
        }
      } else {
        scene.text('Since nobody\'s here, you should probably leave. Or you could take a look around if you\'re that curious.');
        scene.actions([
          { label: 'Leave', goto: ['natbelapt', 'hallway'] },
          { label: 'Look around', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.text('<center><b>Natasha\'s mother\'s room</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/findhitachi.jpg');
    scene.text('You idly poke your head into her closet. Not much of interest there but a few dresses you wouldn\'t mind trying on. Moving on to her bedside you poke through her drawers. The top one is filled with bras and panties. Some look pretty sexy.');
    scene.text('When you open the next drawer, you find the jackpot. There\'s a bunch of sex toys in there. You pick up the biggest one in there.');
    scene.actions([
      { label: 'Play with it', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 5) + 0) === 0  &&  ((s as any).NatbelQW ?? 0)?.['MotherHome'] === 1) {
      scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/sex/natmomhitachi01.jpg');
      if (((s as any).NatbelQW ?? 0)?.['SeenNatMomHitachi'] >= 1) {
        // TODO-QSP: dynamic text: From when you saw <<$npc_nickname['A191']>> using it you have a pretty good idea...
        scene.text(`From when you saw ${((s as any).npc_nickname ?? 0)?.['A191']} using it you have a pretty good idea of how good a vibrator it is.`);
      } else {
        scene.text('When you press the button on it, it starts to vibrate in your hand. "Oh, it\'s a vibrator." You think to yourself. "I have to give this a try."');
      }
      // TODO-QSP: dynamic text: You strip down quickly, wanting to get started. "I can just leave my bra on, it'...
      scene.text(`You strip down quickly, wanting to get started. "I can just leave my bra on, it's not going to suck on my tits." You think as you relax on ${((s as any).npc_nickname ?? 0)?.['A191']}'s bed.`);
      scene.text('You turn the big vibrator on and start rubbing it on your pussy. The stimulation is pretty intense, even at a low setting. Experimentally you turn up the speed causing you to let out a moan of pleasure as you feel your pussy getting soaking wet.');
      // TODO-QSP: dynamic text: Just as you're really getting into it, you notice that the door is open now and ...
      scene.text(`Just as you're really getting into it, you notice that the door is open now and ${((s as any).npc_nickname ?? 0)?.['A191']} is standing over you looking at your bare pussy with her toy rubbing it all over.`);
      qspCall(s, 'arousal', 'vaginal_vibe', 10);
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Say you\'re sorry', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/sex/natmomhitachi02.jpg');
    if (((s as any).NatbelQW ?? 0)?.['CaughtByNatMomHitachi'] === 0) {
      // TODO-QSP: dynamic text: "I-I…" You start, but she immediately cuts you off saying: "You shouldn't be goi...
      scene.text(`"I-I…" You start, but she immediately cuts you off saying: "You shouldn't be going through other people's stuff ${((s as any).pcs_nickname ?? 0)}. And you sure shouldn't use anything you find without asking."`);
      // TODO-QSP: dynamic text: "W-Without… asking? You mean…" You stammer. "Yes <<$pcs_nickname>>, I know girls...
      scene.text(`"W-Without… asking? You mean…" You stammer. "Yes ${((s as any).pcs_nickname ?? 0)}, I know girls your age are curious. And a Hitachi sure is a big temptation. It's pretty much my favorite toy." She admits.`);
      scene.text('"I can show you how good it is. Would you like that?" She adds, not quite able to hide her eagerness.');
    } else {
      scene.text('"I-I know I should have asked. I just couldn\'t resist. It felt so amazing the last time." You tell her apologetically. "Could we… do that again?"');
      scene.text('"It\'s ok sweety I had a feeling this would happen." She says, clearly unsurprised.');
    }
    scene.actions([
      { label: 'Let her', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'A16');
    scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/sex/natmomhitachi03.jpg');
    scene.text('"Oh-Ok," You say, opening your legs and revealing your dripping pussy to her. She sits down next to you and takes the Hitachi.');
    scene.text('"Just lie back and enjoy it." She tells you as she starts rubbing it on top of your clit on a low setting. "First we\'ll warm you up a bit before we turn up the speed."');
    scene.text('After about a minute of this, she spreads your pussy with her hand and then presses the Hitachi against your exposed clit. You instantly let out a loud moan, hoping that nobody outside the room heard it. The direct stimulation is so intense that you start squirming under it. While you\'re still trying to adjust she starts turning up the speed.');
    scene.text('"Time to show you what it does on max speed. You\'ll want one of your own after this." She says with a grin, as she turns it up all the way');
    qspCall(s, 'arousal', 'vaginal_vibe', 10, 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.text('You can\'t take it anymore and pull away. You mutter an excuse about needing to go, and then leave.');
    ((s as any).NatbelQW ?? {})['CaughtByNatMomHitachi'] = (((s as any).NatbelQW ?? {})['CaughtByNatMomHitachi'] ?? 0) + (1);
    scene.actions([
      { label: 'Leave', goto: ['natbelapt', 'hallway'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/sex/hitachi01.jpg');
      if (((s as any).NatbelQW ?? 0)?.['SeenNatMomHitachi'] >= 1) {
        // TODO-QSP: dynamic text: From when you saw <<$npc_nickname['A191']>> using it you have a pretty good idea...
        scene.text(`From when you saw ${((s as any).npc_nickname ?? 0)?.['A191']} using it you have a pretty good idea of how good a vibrator it is.`);
      } else {
        scene.text('When you press the button on it, it starts to vibrate in your hand. "Oh, it\'s a vibrator." You think to yourself. "I have to give this a try."');
      }
      // TODO-QSP: dynamic text: You strip down quickly, wanting to get started. "I can just leave my bra on, it'...
      scene.text(`You strip down quickly, wanting to get started. "I can just leave my bra on, it's not going to suck on my tits." You think as you relax on ${((s as any).npc_nickname ?? 0)?.['A191']}'s bed.`);
      scene.text('You turn the big vibrator on and start rubbing it on your pussy. The stimulation is pretty intense, even at a low setting. Experimentally you turn up the speed causing you to let out a moan of pleasure as you feel your pussy getting soaking wet.');
      scene.text('With your other hand, you start playing with your pussy, putting a finger inside, pulling it open occasionally to apply the vibrations to your clit directly, causing you to moan even louder.');
      qspCall(s, 'arousal', 'vaginal_vibe', 10);
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/sex/hitachi02.jpg');
    scene.text('The thought of doing this in someone else\'s bedroom just makes it even more exciting. You feel your orgasm approaching rapidly as you start fingering yourself faster and faster. All the while rubbing your clit with as much pressure as you can stand.');
    qspCall(s, 'arousal', 'vaginal_vibe', 10);
    qspCall(s, 'arousal', 'end');
    // TODO-QSP: dynamic text: Deciding not to push your luck any further, you get dressed quickly and straight...
    scene.text(`Deciding not to push your luck any further, you get dressed quickly and straighten out the bedsheets, trying to hide what you just did, but there's no way to hide the wet spot on the sheets. You hope it won't be noticeable by the time ${((s as any).npc_nickname ?? 0)?.['A191']} goes to her bedroom.`);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['natbelapt', 'hallway'] },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } },
        ]);
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'home':
      enterHome(s, scene);
      break;
    case 'leave_apartment':
      enterLeaveApartment(s, scene);
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
    case 'natroom':
      enterNatroom(s, scene);
      break;
    case 'seethorugh_surprise':
      enterSeethorughSurprise(s, scene);
      break;
    case 'nat_mother_room':
      enterNatMotherRoom(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const natbelapt: LocationDef = {
  name: 'natbelapt',
  title: 'Entrance hall',
  region: 'other',
  locationType: 'bathroom',
  locclass: 'bedr',
  enter: enter,
};
