import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterHome(s: GameState, scene: SceneBuilder): void {
  (s as any).music_loop = 0;
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'core_library', 'setloc', 'rolanapt', 'home');
  (s as any).location_type = 'private';
  (s as any).popolaini = 0;
  (s as any).saunaYouRoom = 0;
  (s as any).boycherdaksex = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/aptdoor.jpg');
  scene.text('You walk up to the front door and knock.');
  if (((s as any).hour ?? 0) >= 23) {
    scene.text('It\'s too late in the day to visit Mr. Matveev');
    scene.actions([
      { label: 'Move away from the door', goto: ['pav_complex', 'start'] },
    ]);
  } else {
    if (((s as any).hour ?? 0) < 15) {
      scene.text('Mr. Matveev is probably at work.');
      scene.actions([
        { label: 'Move away from the door', goto: ['pav_complex', 'start'] },
      ]);
    } else {
      if (((s as any).newbath ?? 0) === 1  &&  ((s as any).rolanworker ?? 0) === 3  &&  ((s as any).hour ?? 0) >= 15  &&  ((s as any).hour ?? 0) < 23  &&  ((s as any).RolanLoc ?? 0)?.[String((s as any).hour ?? 0)] >= 2  &&  ((s as any).RolanLoc ?? 0)?.[String((s as any).hour ?? 0)] <= 8) {
        scene.text('You can\'t wait to see Rolan\'s face.');
        scene.actions([
          { label: 'Ring the doorbell', goto: ['rolanbath', 'surprise'] },
        ]);
      } else {
        if (((s as any).hour ?? 0) >= 15  &&  ((s as any).hour ?? 0) < 23  &&  ((s as any).RolanLoc ?? 0)?.[String((s as any).hour ?? 0)] >= 2  &&  ((s as any).RolanLoc ?? 0)?.[String((s as any).hour ?? 0)] <= 8) {
          scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanwelcome.jpg');
          // TODO-QSP: dynamic text: The door opens, "Welcome, Miss <<$pcs_lastname>>, here, take a seat."
          scene.text(`The door opens, "Welcome, Miss ${((s as any).pcs_lastname ?? '')}, here, take a seat."`);
          scene.actions([
            { label: 'Enter', goto: ['rolanapt', 'hallway'] },
          ]);
        } else {
          scene.text('No one answers. Rolan is not home.');
          scene.actions([
            { label: 'Move away from the door', goto: ['pav_complex', 'start'] },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterHallway(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  (s as any).location_type = 'public_indoors';
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  (s as any).location_type = 'private';
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRolanroute(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('<center><b>Entrance hall</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/hallway.jpg');
  if (((s as any).RolanLoc ?? 0)?.[String((s as any).hour ?? 0)] === 0) {
    scene.text('Rolan should be at work.');
  } else {
    if (((s as any).RolanLoc ?? 0)?.[String((s as any).hour ?? 0)] === 1) {
      scene.text('Rolan is a devout man, he should be at church.');
    } else {
      if (((s as any).RolanLoc ?? 0)?.[String((s as any).hour ?? 0)] === 2) {
        scene.text('Rolan is here');
      } else {
        if (((s as any).RolanLoc ?? 0)?.[String((s as any).hour ?? 0)] === 3) {
          scene.text('You hear snoring… Rolan is sleeping.');
        } else {
          if (((s as any).RolanLoc ?? 0)?.[String((s as any).hour ?? 0)] === 4) {
            scene.text('<i>sniff sniff</i> Someone is cooking…');
          } else {
            if (((s as any).RolanLoc ?? 0)?.[String((s as any).hour ?? 0)] === 5) {
              scene.text('The old TV is on.');
            } else {
              if (((s as any).RolanLoc ?? 0)?.[String((s as any).hour ?? 0)] === 6) {
                scene.text('There\'s a suspicious silence…');
              } else {
                if (((s as any).RolanLoc ?? 0)?.[String((s as any).hour ?? 0)] === 7) {
                  scene.text('The water is running… you shouldn\'t disturb Rolan.');
                } else {
                  if (((s as any).RolanLoc ?? 0)?.[String((s as any).hour ?? 0)] === 8) {
                    scene.text('The guest room\'s door is open, Rolan should be in there.');
                  } else {
                    if (((s as any).RolanLoc ?? 0)?.[String((s as any).hour ?? 0)] === 9) {
                      scene.text('The weather is nice, Rolan is likely at the park or the courtyard.');
                    } else {
                      if (((s as any).RolanLoc ?? 0)?.[String((s as any).hour ?? 0)] === 10) {
                        scene.text('The weather is nice, Rolan is likely at the courtyard or the park.');
                      } else {
                        scene.text('Where is Rolan?');
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
  if (((s as any).rolan_bazar_day ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).rolan_bazar_count = 5;
  }
  if (((s as any).rolan_kuhbaz_day ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).rolan_kuhbaz_count = 5;
  }
  if (((s as any).rolan_panty_day ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).rolan_panty_count = 1;
  }
  if (((s as any).rolan_steal_day ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).rolan_steal_count = 0;
  }
  if (((s as any).rolanworker ?? 0) === 4  &&  ((s as any).rolanknow ?? 0) === 1) {
    ((s as any).RolanLoc = (s as any).RolanLoc ?? {})[String((s as any).hour ?? 0)] = 6;
    qspCall(s, 'stat', '');
    scene.text('You should check on Rolan, he seems really upset…');
    scene.actions([
      { label: '<b>Leave Rolan\'s apartment</b>', handler: (st: GameState) => {
    qspGoto(st, 'rolanapt', 'hallway');
  } },
    ]);
  } else {
    scene.actions([
      { label: '<b>Leave Rolan\'s apartment</b>', goto: ['pav_complex', 'start'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to Rolan\'s room', goto: ['rolanapt', 'room'] },
    { label: 'Go to the bathroom', goto: ['rolanbath', 'start'] },
    { label: 'Go to the guest room', goto: ['rolanapt', 'guestroom'] },
    { label: 'Go to the living room', goto: ['rolanapt', 'livingroom'] },
    { label: 'Go to the kitchen', goto: ['rolanapt', 'kitchen'] },
    { label: 'Go to grandma\'s room', goto: ['rolanapt', 'grandmaroom'] },
  ]);
  scene.build();
}

function enterRoom(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  (s as any).location_type = 'private';
  (s as any).locclass = 'bedr';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Rolan\'s bedroom</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/bedroom.jpg');
  scene.text('This is Rolan\'s bedroom, it\'s quite messy. An old clock on the wall fills the quiet room with some sound. You see what looks like an old bedpan under his bed. "…Is he really that lazy?" you wonder.');
  if (((s as any).RolanLoc ?? 0)?.[String((s as any).hour ?? 0)] === 3) {
    scene.text('Rolan is here.');
  }
  if (((s as any).RolanLoc ?? 0)?.[String((s as any).hour ?? 0)] !== 3  &&  ((s as any).rolanpantyQW ?? 0) >= 5) {
    scene.actions([
      { label: 'Snoop around', goto: ['rolanapt', 'drawer'] },
    ]);
  }
  if (((s as any).RolanLoc ?? 0)?.[String((s as any).hour ?? 0)] === 3  &&  ((s as any).rolanpantyQW ?? 0) >= 7  &&  ((s as any).rolanpantyfound ?? 0) === 1  &&  ((s as any).rolanpantyconfession ?? 0) !== 1  &&  ((s as any).hour ?? 0) < 23  &&  ((s as any).pantyworntype ?? 0) !== 'none') {
    scene.actions([
      { label: 'Confront Rolan', goto: ['rolanapt', 'mypanty'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the room', goto: ['rolanapt', 'hallway'] },
  ]);
  scene.build();
}

function enterGuestroom(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  (s as any).location_type = 'private';
  (s as any).locclass = 'bedr';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Guest Room</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/guestroom.jpg');
  scene.text('This is the guest room. There\'s a stove in here keeping the room warm.');
  if (((s as any).RolanLoc ?? 0)?.[String((s as any).hour ?? 0)] === 8) {
    scene.text('Rolan is here');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the room', goto: ['rolanapt', 'hallway'] },
  ]);
  scene.build();
}

function enterLivingroom(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  (s as any).locclass = 'livingr';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Living Room</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/livingroom.jpg');
  if (((s as any).rolanpantyconfession ?? 0) !== 1) {
    scene.text('The living room isn\'t exactly messy but it\'s definitely not clean either. It looks as though nothing\'s been dusted nor the floor swept for quite a long time now. There\'s an old TV in the corner, an even older looking vase sits on it. You notice a doll sitting in a chair on the other side of the room… Rolan can be very creepy at times. You wonder if the stories about him stealing girl\'s panties from the locker room at school are true. Well, at least he doesn\'t steal yours.');
  } else {
    scene.text('The living room isn\'t exactly messy but it\'s definitely not clean either. It looks as though nothing\'s been dusted nor the floor swept for quite a long time now. There\'s an old TV in the corner, an even older looking vase sits on it. You notice a doll sitting in a chair on the other side of the room… Rolan can be very creepy at times.');
  }
  if (((s as any).RolanLoc ?? 0)?.[String((s as any).hour ?? 0)] === 5) {
    scene.text('Rolan is here,');
  }
  if (((s as any).RolanLoc ?? 0)?.[String((s as any).hour ?? 0)] === 5  &&  ((s as any).rolanworker ?? 0) === 1) {
    scene.actions([
      { label: 'Spend some time chatting', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolancheek.jpg');
    scene.text('You approach Rolan and kiss him on the cheek, showing kindness to obtain your goal…');
    scene.text('"Hi, Rolan…"');
    // TODO-QSP: dynamic text: You caught him by surprise… "I-I-Hi… Miss <<$pcs_lastname>>…"
    scene.text(`You caught him by surprise… "I-I-Hi… Miss ${((st as any).pcs_lastname ?? '')}…"`);
    scene.actions([
      { label: 'Continue', goto: ['rolanapt', 'worker'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the room', goto: ['rolanapt', 'hallway'] },
  ]);
  scene.build();
}

function enterKitchen(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  (s as any).locclass = 'kitr';
  (s as any).loc = 'rolanapt';
  (s as any).loc_arg = 'kitchen';
  (s as any).menu_loc = 'rolanapt';
  (s as any).menu_arg = 'kitchen';
  qspCall(s, 'kit_din', '');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Kitchen</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitchen.jpg');
  if (((s as any).rolancooklesson ?? 0) > 1  &&  ((s as any).rolancooklesson ?? 0) <= 5  &&  ((s as any).rolan_cooklesson_day ?? 0) === ((s as any).daystart ?? 0)) {
    scene.text('"What the… I just washed them today…"');
  } else {
    if (((s as any).rolancooklesson ?? 0) === 6  &&  ((s as any).rolan_cooklesson_day ?? 0) === ((s as any).daystart ?? 0)) {
      scene.text('"That\'s it. This is the last time."');
    } else {
      scene.text('This room appears the most modern in the house. However, like the rest it is not clean. You wonder, "how long have the plates been sitting in the sink?"');
    }
  }
  if (((s as any).RolanLoc ?? 0)?.[String((s as any).hour ?? 0)] === 4) {
    scene.text('Rolan is here.');
    if ((Math.floor(Math.random() * 100) + 1) < 50) {
      scene.text('When you enter the kitchen, <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027rolanapt/u0027, /u0027kuh_buh/u0027); return false;">Rolan</a> gives you a friendly nod. He\'s sitting at the table, eating an apple.');
    } else {
      scene.text('When you enter the kitchen, <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027rolanapt/u0027, /u0027bend/u0027); return false;">Rolan</a> is sitting at the table holding an apple. He smiles when he notices you.');
    }
    if (((s as any).rolanpantyconfession ?? 0) === 1  &&  ((s as any).rolancooklesson ?? 0) < 1  &&  ((s as any).sup_count ?? 0) === 0  &&  ((s as any).pantyworntype ?? 0) !== 'none') {
      scene.actions([
        { label: 'Approach Rolan', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).rolancooklesson = 1;
    (st as any).rolan_cooklesson_day = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/bread0.jpg');
    scene.text('"We need to talk."');
    // TODO-QSP: dynamic text: "Miss <<$pcs_lastname>>, I swear I''ve done nothing wrong!"
    scene.text(`"Miss ${((st as any).pcs_lastname ?? '')}, I swear I've done nothing wrong!"`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Intro</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/intro0.jpg');
    scene.text('"Ah, silly boy! I\'m not angry, I just want to help you learn how to cook. You need a gentle hand to guide you through it!"');
    // TODO-QSP: dynamic text: "Miss <<$pcs_lastname>>, do not worry, it''s not necessary, I can take care of m...
    scene.text(`"Miss ${((st as any).pcs_lastname ?? '')}, do not worry, it's not necessary, I can take care of myself."`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Intro</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/intro1.jpg');
    scene.text('"So it seems, but you need some lessons if you want to stay healthy."');
    // TODO-QSP: dynamic text: "Miss <<$pcs_lastname>>, really this is not necessary. I usually cook for the we...
    scene.text(`"Miss ${((st as any).pcs_lastname ?? '')}, really this is not necessary. I usually cook for the week, I'm not a pro but I'm satisfied with my skill…"`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Intro</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/intro2.jpg');
    scene.text('"I SAID WE ARE GOING TO START IMPROVING YOUR COOKING ABILITIES."');
    scene.actions([
      { label: 'Continue', goto: ['rolanapt', 'chef'] },
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
      if (((s as any).rolancooklesson ?? 0) === 2  &&  ((s as any).rolan_cooklesson_day ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).pantyworntype ?? 0) !== 'none') {
        scene.actions([
          { label: 'Approach Rolan', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/intro3.jpg');
    scene.text('As soon as you walk toward Rolan he stands up and tries to escape, but you manage to stop him…');
    scene.text('"Hey now, what\'s the rush? I hope you are not trying to avoid me."');
    scene.text('Rolan sighs. He doesn\'t want to do this, but you\'re not giving him a choice.');
    scene.actions([
      { label: 'Start lesson', goto: ['rolanapt', 'chef'] },
    ]);
  } },
        ]);
      } else {
        if (((s as any).rolancooklesson ?? 0) > 2  &&  ((s as any).rolancooklesson ?? 0) <= 6  &&  ((s as any).rolan_cooklesson_day ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).pantyworntype ?? 0) !== 'none') {
          scene.actions([
            { label: 'Approach Rolan', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/intro3.jpg');
    scene.text('This time, Rolan doesn\'t attempt to flee. "<i>Good</i>," you think, this lesson should go smoother than usual.');
    scene.actions([
      { label: 'Start lesson', goto: ['rolanapt', 'chef'] },
    ]);
  } },
          ]);
        }
      }
    }
  }
  qspCall(s, 'kit_din', 'driwater');
  qspCall(s, 'kit_din', 'fill_bottle');
  if (((s as any).guavacoco_day ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).guavacoco_count = 2;
  }
  if (((s as any).kvass_day ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).kvass_count = 5;
  }
  if (((s as any).sup_day ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).sup_count = 1;
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the room', goto: ['rolanapt', 'hallway'] },
    { label: 'Look in the fridge', goto: ['rolanapt', 'holodil'] },
  ]);
  scene.build();
}

function enterHolodil(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  if (((s as any).guavacoco_count ?? 0) === 2) {
    (s as any).r_guavacoco = ' 2 guavacoco,';
  } else {
    if (((s as any).guavacoco_count ?? 0) === 1) {
      (s as any).r_guavacoco = ' 1 guavacoco,';
    } else {
      (s as any).r_guavacoco = '';
    }
  }
  if (((s as any).kvass_count ?? 0) === 5) {
    (s as any).r_kvass = ' a full bottle of homemade kvass beer,';
  } else {
    if (((s as any).kvass_count ?? 0) === 3) {
      (s as any).r_kvass = ' a half-empty bottle of homemade kvass beer,';
    } else {
      if (((s as any).kvass_count ?? 0) === 1) {
        (s as any).r_kvass = ' a nearly empty bottle of homemade kvass beer,';
      } else {
        (s as any).r_kvass = '';
      }
    }
  }
  if (((s as any).sup_count ?? 0) >= 1) {
    (s as any).r_sup = ' a large pot of soup';
  } else {
    (s as any).r_sup = '';
  }
  if (((s as any).guavacoco_count ?? 0) === 0  &&  ((s as any).kvass_count ?? 0) === 0  &&  (!((s as any).sup_count ?? 0))) {
    (s as any).r_pusto = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/locations/pavlovsk/resident/apartment/shulginhome/kuh/holodpusto.jpg"></center><br>You open the fridge and see:<br><font color = red>empty shelves.</font>';
  } else {
    (s as any).r_pusto = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/locations/pavlovsk/resident/apartment/aptrolan/kitch/selfservice\' + rand(0, 8) + \'.jpg"></center><br>You open the fridge and see:';
  }
  // TODO-QSP: dynamic text: <<$r_pusto>><br><<$r_kvass>><<$r_guavacoco>><<$r_sup>>
  scene.text(`${((s as any).r_pusto ?? '')}<br>${((s as any).r_kvass ?? '')}${((s as any).r_guavacoco ?? '')}${((s as any).r_sup ?? '')}`);
  if (((s as any).guavacoco_count ?? 0) > 0) {
    scene.actions([
      { label: 'Have a guavacoco', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).cumspclnt = 2;
    qspCall(st, 'cum_cleanup', '');
    (st as any).pcs_breath = 0;
    (st as any).pcs_hydra = 100;
    (st as any).guavacoco_day = ((st as any).daystart ?? 0);
    (st as any).guavacoco_count = ((st as any).guavacoco_count ?? 0) - (1);
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/ap...
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/aptrolan/guavacoco` + (Math.floor(Math.random() * 3) + 0) + '.jpg"></center>');
    scene.text('You take a bottle of guavacoco from the fridge and drink it, quenching your thirst. You wonder if he ever drinks mors or kompot.');
    scene.actions([
      { label: 'Continue', goto: ['rolanapt', 'holodil'] },
    ]);
  } },
    ]);
  }
  if (((s as any).kvass_count ?? 0) > 0) {
    scene.actions([
      { label: 'Drink some kvass', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    (st as any).cumspclnt = 2;
    qspCall(st, 'cum_cleanup', '');
    (st as any).pcs_breath = 0;
    (st as any).pcs_hydra = 100;
    (st as any).kvass_day = ((st as any).daystart ?? 0);
    (st as any).kvass_count = ((st as any).kvass_count ?? 0) - (1);
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/ap...
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/aptrolan/kvass` + (Math.floor(Math.random() * 3) + 0) + '.jpg"></center>');
    if ((!((st as any).rolancooklesson ?? 0))) {
      scene.text('You pour some kvass beer in a glass and drink it. You have to reconsider Rolan\'s cooking skills… Maybe you can teach him a thing or two about cooking soup.');
    } else {
      if (((st as any).rolancooklesson ?? 0) <= 4) {
        scene.text('You pour some kvass beer in a glass and drink it. You think over Rolan\'s next cooking lesson.');
      } else {
        if (((st as any).rolancooklesson ?? 0) === 5) {
          scene.text('You pour some kvass beer in a glass and drink it. You think about the progress Rolan has made with his cooking and smile.');
        } else {
          scene.text('You pour some kvass beer in a glass and drink it. You can\'t help but smile as Rolan has become quite the cook since you began helping him.');
        }
      }
    }
    scene.actions([
      { label: 'Put the bottle back in the fridge', goto: ['rolanapt', 'holodil'] },
      { label: 'Drink more kvass', handler: (st: GameState) => {
    if (((st as any).kvass_count ?? 0) > 0) {
      (st as any).minut = ((st as any).minut ?? 0) + 1;
      (st as any).cumspclnt = 2;
      qspCall(st, 'cum_cleanup', '');
      (st as any).pcs_breath = 0;
      (st as any).pcs_hydra = 100;
      (st as any).kvass_day = ((st as any).daystart ?? 0);
      (st as any).kvass_count = ((st as any).kvass_count ?? 0) - (1);
      qspCall(st, 'stat', '');
      // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/ap...
      scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/aptrolan/kvass` + (Math.floor(Math.random() * 3) + 0) + '.jpg"></center>');
      scene.text('You pour yourself another glass and drain it in one gulp. Wow, that stuff is really good!');
    } else {
      scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kvass3.jpg');
      scene.text('<font color = red>There\'s no kvass beer left, you drank it all!</font>');
      scene.text('Better put the bottle away.');
    }
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).sup_count ?? 0) > 0) {
    scene.actions([
      { label: 'Eat a bowl of soup', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).sup_day = ((st as any).daystart ?? 0);
    (st as any).sup_count = ((st as any).sup_count ?? 0) - (1);
    (st as any).pcs_health = ((st as any).pcs_health ?? 0) + (10);
    (st as any).cumspclnt = 2;
    qspCall(st, 'cum_cleanup', '');
    (st as any).pcs_breath = 0;
    scene.text('<center><b>Rolan\'s soup</b></center>');
    if (((st as any).rolancooklesson ?? 0) === 2) {
      qspCall(st, 'mood', 'lower', 'huge');
      (st as any).fat = ((st as any).fat ?? 0) + (1);
      (st as any).pcs_energy = ((st as any).pcs_energy ?? 0) + (5);
      (st as any).pcs_hydra = ((st as any).pcs_hydra ?? 0) + (4);
      scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolansoup0.jpg');
      scene.text('<i>G\'uuuuh,</i> you are unable to stomach this… <i><b>whatever</b> this</i> is supposed to be. "<i>This is going to take some work</i>," you think.');
      scene.text('Rolan\'s cooking is beyond terrible. How Rolan has kept himself alive eating this "soup," you\'ll never know.');
    } else {
      if (((st as any).rolancooklesson ?? 0) === 3) {
        qspCall(st, 'mood', 'lower', 'large');
        (st as any).fat = ((st as any).fat ?? 0) + (5);
        (st as any).pcs_energy = ((st as any).pcs_energy ?? 0) + (50);
        (st as any).pcs_hydra = ((st as any).pcs_hydra ?? 0) + (40);
        scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolansoup1.jpg');
        scene.text('Well, at least this batch might stay down. <i>Your stomach grumbles softly, as though in disagreement.</i>');
        scene.text('Rolan has to get better at cooking soon, right?');
      } else {
        if (((st as any).rolancooklesson ?? 0) === 4) {
          qspCall(st, 'mood', 'lower', 'medium');
          (st as any).fat = ((st as any).fat ?? 0) + (4);
          (st as any).pcs_energy = ((st as any).pcs_energy ?? 0) + (50);
          (st as any).pcs_hydra = ((st as any).pcs_hydra ?? 0) + (40);
          scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolansoup2.jpg');
          scene.text('"At least it was cooked this time," you ponder aloud. You just need to teach Rolan to peel the potatoes next time.');
          scene.text('There\'s some improvement, but Rolan\'s soup is far from being good…');
        } else {
          if (((st as any).rolancooklesson ?? 0) === 5) {
            (st as any).fat = ((st as any).fat ?? 0) + (3);
            (st as any).pcs_energy = ((st as any).pcs_energy ?? 0) + (50);
            (st as any).pcs_hydra = ((st as any).pcs_hydra ?? 0) + (40);
            scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolansoup3.jpg');
            scene.text('"<i>That was much better, but probably hell on my cholesterol</i>," you think. Next time, teach him to use milk instead of cream.');
            scene.text('Rolan\'s soup needs to be lighter.');
          } else {
            if (((st as any).rolancooklesson ?? 0) === 6) {
              (st as any).fat = ((st as any).fat ?? 0) + (2);
              (st as any).pcs_energy = ((st as any).pcs_energy ?? 0) + (50);
              (st as any).pcs_hydra = ((st as any).pcs_hydra ?? 0) + (40);
              scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolansoup4.jpg');
              scene.text('It\'s almost there. Almost. "Next time, for sure!"');
              scene.text('You can try something else to improve Rolan\'s abilities. But you feel like there isn\'t much room for improvement.');
            } else {
              if (((st as any).rolancooklesson ?? 0) > 6) {
                qspCall(st, 'mood', 'raise', 'tiny');
                (st as any).fat = ((st as any).fat ?? 0) + (2);
                (st as any).pcs_energy = ((st as any).pcs_energy ?? 0) + (50);
                (st as any).pcs_hydra = ((st as any).pcs_hydra ?? 0) + (40);
                scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolansoup5.jpg');
                scene.text('You think you have done all you were capable of… and probably saved Rolan\'s life.');
                scene.text('Rolan\'s soup is… well, it\'s Rolan\'s soup.');
              } else {
                qspCall(st, 'mood', 'lower', 'huge');
                (st as any).fat = ((st as any).fat ?? 0) + (1);
                (st as any).pcs_energy = ((st as any).pcs_energy ?? 0) + (5);
                (st as any).pcs_hydra = ((st as any).pcs_hydra ?? 0) + (4);
                scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolansoup0.jpg');
                scene.text('You only managed a couple of bites before you rush to bathroom to spit it up. "Fuck! He\'s trying to kill somebody! I gotta do something…"');
                scene.text('Rolan is really bad in kitchen. It\'s a fatty, terrible soup. You wonder how he\'s still alive…');
              }
            }
          }
        }
      }
    }
    qspCall(st, 'stat', '');
    if (((st as any).rolancooklesson ?? 0) >= 3) {
      scene.actions([
        { label: 'Further', goto: ['rolanapt', 'holodil'] },
      ]);
    } else {
      scene.actions([
        { label: 'Further', goto: ['rolanapt', 'hallway'] },
      ]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Close the refrigerator', goto: ['rolanapt', 'kitchen'] },
  ]);
  scene.build();
}

function enterGrandmaroom(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  (s as any).temp = (Math.floor(Math.random() * 2) + 0);
  qspCall(s, 'stat', '');
  scene.text('<center><b>Grandma\'s room</b></center>');
  if (((s as any).rolanworker ?? 0) === 4  &&  ((s as any).rolanknow ?? 0) === 1) {
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolancry.jpg');
    scene.text('…');
  } else {
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/grandmaroom.jpg');
    scene.text('This is the only room in good condition. It seems no one lives here… but this room is regularly cleaned.');
  }
  if (((s as any).RolanLoc ?? 0)?.[String((s as any).hour ?? 0)] === 6) {
    scene.text('Rolan is here.');
    if (((s as any).rolanworker ?? 0) === 4  &&  ((s as any).rolanknow ?? 0) === 1) {
      scene.actions([
        { label: 'Talk to Rolan', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).rolanworker = ((st as any).rolanworker ?? 0) + (1);
    scene.text('<center><b>Grandma\'s room</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanheadbath2.jpg');
    scene.text('"Rolan, is everything all right? You ran away like… why are you crying?"');
    scene.text('"Out."');
    scene.actions([
      { label: 'Ask', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.text('<center><b>Grandma\'s room</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanheadbath3.jpg');
    scene.text('"Rolan, you can tell me. What\'s happened?"');
    scene.text('"Out. I said get out of here. You are not welcome in this house anymore!"');
    scene.text('You\'re at a loss for words.');
    scene.actions([
      { label: 'But…', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).rolanblockhome = 1;
    scene.text('<center><b>Grandma\'s room</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanheadbath4.jpg');
    scene.text('"What have I done?"');
    scene.text('"That\'s it," Rolan grabs his phone and dials a number. "Mr. Chervov? It\'s Rolan Matveev here… yes, the janitor. There is a thief in my home…"');
    scene.text('"A thief? But I… okay. Okay, I\'ll leave."');
    scene.actions([
      { label: 'Leave', goto: ['pav_complex', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } else {
    if (((s as any).workertool ?? 0) !== 1) {
      scene.actions([
        { label: 'Look around', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.text('<center><b>dreamroom</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/grandma.jpg');
    scene.text('You snoop around, opening drawers, and looking in the closet. Even if you were hoping to find something of interest, you didn\'t. The only thing of note is a dark marble container full of grey powder.');
    scene.actions([
      { label: 'Leave', goto: ['rolanapt', 'hallway'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Look around', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    scene.text('<center><b>a bad mistake</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/grandma.jpg');
    scene.text('You snoop around, opening drawers, and looking in the closet. The only thing of note is a dark marble container full of grey powder.');
    scene.actions([
      { label: 'Take the powder', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    (st as any).workertool = ((st as any).workertool ?? 0) + (1);
    scene.text('<center><b>a bad mistake</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/grandma.jpg');
    scene.text('"That powder should do the trick."');
    scene.actions([
      { label: 'Leave', goto: ['rolanapt', 'hallway'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the room', goto: ['rolanapt', 'hallway'] },
  ]);
  scene.build();
}

function enterKuhBuh(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/rolanapple0.jpg');
  // TODO-QSP: dynamic text: "Hello Miss <<$pcs_lastname>>! Great day, isn''t it?" he shouts cheerfully.
  scene.text(`"Hello Miss ${((s as any).pcs_lastname ?? '')}! Great day, isn't it?" he shouts cheerfully.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave him alone', goto: ['rolanapt', 'kitchen'] },
    { label: 'Chat with Rolan', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A133', 1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/rolanbazar.jpg');
    scene.text('Suddenly Rolan becomes serious, getting ready to tell a story. You sit down next to him, wondering what he\'s going to want to talk about today.');
    scene.actions([
      { label: 'Listen', goto: ['rolanapt', 'kuhbaz'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterBend(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/rolanapple1.jpg');
  // TODO-QSP: dynamic text: "Miss <<$pcs_lastname>>, would you be so kind as to help an old man"?
  scene.text(`"Miss ${((s as any).pcs_lastname ?? '')}, would you be so kind as to help an old man"?`);
  (s as any).rollrolan = (Math.floor(Math.random() * 4) + 1);
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave him alone', goto: ['rolanapt', 'kitchen'] },
    { label: 'Help Rolan', handler: (st: GameState) => {
    if (((st as any).rollrolan ?? 0) === 1) {
      qspCall(st, 'npc_relationship', 'modify', 'A133', 1);
      qspCall(st, 'stat', '');
      // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/ap...
      scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/aptrolan/kitch/bread` + (Math.floor(Math.random() * 4) + 0) + '.jpg"></center>');
      scene.text('"I buy my bread from Pushkin. It is really the best for my kvass beer. What I like to do is…" He suddenly trails off, realizing he doesn\'t want to reveal his secret beer recipe to you.');
      scene.actions([
        { label: 'Continue', goto: ['rolanapt', 'kuh_buh'] },
      ]);
    } else {
      if (((st as any).rollrolan ?? 0) === 2) {
        qspCall(st, 'npc_relationship', 'modify', 'A133', 1);
        qspCall(st, 'stat', '');
        // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/ap...
        scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/aptrolan/kitch/guavacoco` + (Math.floor(Math.random() * 4) + 0) + '.jpg"></center>');
        // TODO-QSP: dynamic text: "Miss <<$pcs_lastname>>, could you bring me a guavacoco? My throath is dry…"
        scene.text(`"Miss ${((st as any).pcs_lastname ?? '')}, could you bring me a guavacoco? My throath is dry…"`);
        scene.actions([
          { label: 'Continue', goto: ['rolanapt', 'kuh_buh'] },
        ]);
      } else {
        if (((st as any).rollrolan ?? 0) === 3) {
          qspCall(st, 'npc_relationship', 'modify', 'A133', 1);
          qspCall(st, 'stat', '');
          // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/ap...
          scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/aptrolan/kitch/kvass` + (Math.floor(Math.random() * 4) + 0) + '.jpg"></center>');
          // TODO-QSP: dynamic text: "Miss <<$pcs_lastname>>, please take some kvass beer, I''m more than happy to sh...
          scene.text(`"Miss ${((st as any).pcs_lastname ?? '')}, please take some kvass beer, I'm more than happy to share some with you." You take some kvass beer and go to sit near him. "Lately our courtyard is more crowded than ever…" `);
          scene.actions([
            { label: 'Continue', goto: ['rolanapt', 'kuh_buh'] },
          ]);
        } else {
          qspCall(st, 'npc_relationship', 'modify', 'A133', 1);
          qspCall(st, 'stat', '');
          // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/ap...
          scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/aptrolan/kitch/oven` + (Math.floor(Math.random() * 4) + 0) + '.jpg"></center>');
          // TODO-QSP: dynamic text: "Could you check the oven please? I haven''t finished eating." You go to check R...
          scene.text(`"Could you check the oven please? I haven't finished eating." You go to check Rolan's oven and he starts to speak, "Times are strange, Miss ${((st as any).pcs_lastname ?? '')}, times are really strange…"`);
          scene.actions([
            { label: 'Continue', goto: ['rolanapt', 'kuh_buh'] },
          ]);
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterKuhbaz(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  if ((!((s as any).rolan_kuhbaz_count ?? 0))) {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolankuhbusy.jpg');
    // TODO-QSP: dynamic text: "Sorry Miss <<$pcs_lastname>>, I have to cook. Maybe we can chat some more later...
    scene.text(`"Sorry Miss ${((s as any).pcs_lastname ?? '')}, I have to cook. Maybe we can chat some more later!"`);
    scene.actions([
      { label: 'Return to the hallway', goto: ['rolanapt', 'hallway'] },
    ]);
  } else {
    qspCall(s, 'stat', '');
    (s as any).rolan_kuhbaz_day = ((s as any).daystart ?? 0);
    (s as any).rolan_kuhbaz_count = ((s as any).rolan_kuhbaz_count ?? 0) - (1);
    (s as any).sh_rolan_kuhbaz = ((s as any).sh_rolan_kuhbaz ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).rolan_textb_vanna = (Math.floor(Math.random() * 8) + 1);
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitchen.jpg');
    if (((s as any).rolan_textb_vanna ?? 0) === 1) {
      (s as any).rolan_textb_kuh = 'Rolan tells you that he doesn\'t mind if you take a shower here.';
    }
    if (((s as any).rolan_textb_vanna ?? 0) === 2) {
      (s as any).rolan_textb_kuh = 'Rolan tells you that he see often sees some of your classmates buying clothes at G&M Stores, though he doesn\'t know how it\'s possible for young girls to have so much money.';
    }
    if (((s as any).rolan_textb_vanna ?? 0) === 3) {
      (s as any).rolan_textb_kuh = 'Rolan tells you that he wants to run for mayor and end the discrimination he sees in Pavlovsk.';
    }
    if (((s as any).rolan_textb_vanna ?? 0) === 4) {
      (s as any).rolan_textb_kuh = 'Rolan tells you that the day before Ms. Sokoloff stopped to chat with him as he was coming back from the supermarket.';
    }
    if (((s as any).rolan_textb_vanna ?? 0) === 5) {
      (s as any).rolan_textb_kuh = 'Rolan tells you that he saw two of your classmates arguing outside.';
    }
    if (((s as any).rolan_textb_vanna ?? 0) === 6) {
      (s as any).rolan_textb_kuh = 'Rolan tells you that the courtyard is dangerous at night.';
    }
    if (((s as any).rolan_textb_vanna ?? 0) === 7) {
      (s as any).rolan_textb_kuh = 'Rolan tells you he saw two girls walking in the park, hand in hand, like they were in love. He wonders what is wrong with people these days. Girls need a man after all.';
    }
    if (((s as any).rolan_textb_vanna ?? 0) === 8) {
      (s as any).rolan_textb_kuh = 'Rolan tells you he saw Anushka and Alyona kissing on the playground, in the apartment courtyard. He thinks it is very unbecoming of them, they should be with men.';
    }
    // TODO-QSP: dynamic text: <br><<$rolan_imgb_kuh>><br>
    scene.text(`<br>${((s as any).rolan_imgb_kuh ?? '')}<br>`);
    // TODO-QSP: dynamic text: <br><<$rolan_textb_kuh>><br>
    scene.text(`<br>${((s as any).rolan_textb_kuh ?? '')}<br>`);
    // TODO-QSP: dynamic text: "Sure Miss <<$pcs_lastname>>, tell me!"
    scene.text(`"Sure Miss ${((s as any).pcs_lastname ?? '')}, tell me!"`);
    scene.actions([
      { label: 'Chat some more', goto: ['rolanapt', 'kuhbaz'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the hallway', goto: ['rolanapt', 'hallway'] },
  ]);
  scene.build();
}

function enterDrawer(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/ap...
  scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/aptrolan/drawer/private` + (Math.floor(Math.random() * 2) + 0) + '.jpg"></center>');
  if (((s as any).rolanpantyfound ?? 0) !== 1  &&  ((s as any).rolanpantyQW ?? 0) >= 5) {
    scene.text('You wonder if your missing panties are in here.');
    scene.actions([
      { label: 'Open the drawer', handler: (st: GameState) => {
    scene.text('<center><b>Drawer</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/drawer/collection0.jpg');
    scene.text('You open a drawer. Inside you see four rows of panties labeled <i>Grudzeva</i>, <i>Artamonov</i>, <i>Starov</i>, and <i>Zvereva</i>.');
    scene.actions([
      { label: 'Open the second drawer', handler: (st: GameState) => {
    scene.text('<center><b>Drawer</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/drawer/collection1.jpg');
    scene.text('You open a second drawer. You see six rows of panties labeled <i>Meynold</i>, <i>Meynold</i>, <i>Berlovskay</i>, <i>Davyatova</i>, <i>Ivanko</i>, and <i>Petrov</i>.');
    scene.actions([
      { label: 'Open the third drawer', handler: (st: GameState) => {
    scene.text('<center><b>Drawer</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/drawer/collection2.jpg');
    scene.text('In the third drawer, you see five rows of panties labeled <i>Maksimov</i>, <i>Zima</i>, <i>Sebagotulina</i>, <i>Kostantinov</i>, and <i>Tsarev</i>.');
    scene.actions([
      { label: 'Open the fourth drawer', handler: (st: GameState) => {
    scene.text('<center><b>Drawer</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/drawer/collection3.jpg');
    scene.text('The fourth contains twelve compartments of panties labeled <i>Milov</i>, <i>Alkaev</i>, <i>Braakman</i>, <i>Orlov</i>, <i>Sokoloff</i>, and <i>Belova</i>.');
    scene.text('"Wow! Ms. Sokoloff too?!"');
    scene.actions([
      { label: 'Open the fifth drawer', handler: (st: GameState) => {
    scene.text('<center><b>Drawer</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/drawer/collection4.jpg');
    scene.text('Drawer #5, includes three rows of panties labeled <i>Sokolov</i>, <i>Pavlov</i>, and <i>Kotov</i>.');
    scene.actions([
      { label: 'Open the last drawer', handler: (st: GameState) => {
    (st as any).rolanpantyfound = 1;
    scene.text('<center><b>Drawer</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/drawer/collection5.jpg');
    scene.text('Finally, the last drawer. You see two separate rows of panties labeled <i>Aleksandrov</i> and <i>Volkov</i>. How did he get the nurse\'s panties? <b><i>And Principal Volkov?!</i></b> Unbelievable!');
    scene.text('it seems that no one is safe from Rolan!');
    scene.actions([
      { label: 'Close the drawers', goto: ['rolanapt', 'room'] },
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
  } else {
    if (((s as any).rolanpantyfound ?? 0) === 1  &&  ((s as any).rolanpantyQW ?? 0) >= 5) {
      scene.text('"Hmm, I wonder if Rolan has added to his collection since I last looked?"');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Drawer</b></center>');
    (st as any).temp_rand = (Math.floor(Math.random() * 6) + 0);
    if ((!((st as any).temp_rand ?? 0))) {
      (st as any).rolan_pantext_baz = '<i>Grudzeva</i>, <i>Artamonov</i>, <i>Starov</i>, and <i>Zvereva</i>';
      (st as any).rolan_pantpic_baz = '<center><img ' + ((st as any).set_imgh ?? 0) + ' src="images/locations/pavlovsk/resident/apartment/aptrolan/drawer/collection0.jpg"></center>';
    }
    if (((st as any).temp_rand ?? 0) === 1) {
      (st as any).rolan_pantext_baz = '<i>Meynold sisters</i>, <i>Berlovskay</i>, <i>Davyatova</i>, <i>Ivanko</i>, and <i>Petrov</i>';
      (st as any).rolan_pantpic_baz = '<center><img ' + ((st as any).set_imgh ?? 0) + ' src="images/locations/pavlovsk/resident/apartment/aptrolan/drawer/collection1.jpg"></center>';
    }
    if (((st as any).temp_rand ?? 0) === 2) {
      (st as any).rolan_pantext_baz = '<i>Maksimov</i>, <i>Zima</i>, <i>Sebagotulina</i>, <i>Kostantinov</i>, and <i>Tsarev</i>';
      (st as any).rolan_pantpic_baz = '<center><img ' + ((st as any).set_imgh ?? 0) + ' src="images/locations/pavlovsk/resident/apartment/aptrolan/drawer/collection2.jpg"></center>';
    }
    if (((st as any).temp_rand ?? 0) === 3) {
      (st as any).rolan_pantext_baz = '<i>Milov</i>, <i>Alkaev</i>, <i>Braakman</i>, <i>Orlov</i>, <i>Sokoloff</i>, and <i>Belova</i>';
      (st as any).rolan_pantpic_baz = '<center><img ' + ((st as any).set_imgh ?? 0) + ' src="images/locations/pavlovsk/resident/apartment/aptrolan/drawer/collection3.jpg"></center>';
    }
    if (((st as any).temp_rand ?? 0) === 4) {
      (st as any).rolan_pantext_baz = '<i>Sokolov</i>, <i>Pavlov</i>, and <i>Kotov</i>';
      (st as any).rolan_pantpic_baz = '<center><img ' + ((st as any).set_imgh ?? 0) + ' src="images/locations/pavlovsk/resident/apartment/aptrolan/drawer/collection4.jpg"></center>';
    }
    if (((st as any).temp_rand ?? 0) === 5) {
      (st as any).rolan_pantext_baz = '<i>Aleksandrov</i> and <i>Volkov</i>';
      (st as any).rolan_pantpic_baz = '<center><img ' + ((st as any).set_imgh ?? 0) + ' src="images/locations/pavlovsk/resident/apartment/aptrolan/drawer/collection5.jpg"></center>';
    }
    // TODO-QSP: dynamic text: <br><<$rolan_pantext_baz>><br>
    scene.text(`<br>${((st as any).rolan_pantext_baz ?? '')}<br>`);
    scene.actions([
      { label: 'Stop snooping', goto: ['rolanapt', 'room'] },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Stop snooping', goto: ['rolanapt', 'room'] },
  ]);
  scene.build();
}

function enterMypanty(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_inhib ?? 0) > 35  &&  ((s as any).pcs_intel ?? 0) > 35  &&  ((s as any).rolanpantyconfession ?? 0) !== 1) {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'npc_relationship', 'modify', 'A133', (-30));
    qspCall(s, 'stat', '');
    scene.text('<center><b>Guilty</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/headrol.jpg');
    scene.text('You decide to confront Rolan with your discovery. "So the rumors at school are true. You really are a panty thief…"');
    // TODO-QSP: dynamic text: Rolan''s eyes drop to the floor. "Miss <<$pcs_lastname>>, I don''t know what you...
    scene.text(`Rolan's eyes drop to the floor. "Miss ${((s as any).pcs_lastname ?? '')}, I don't know what you're talking about…"`);
    scene.text('"Oh is that so? Hmm, let\'s play a game…" Rolan suddenly looks up at you.');
    scene.actions([
      { label: 'Take off your panties', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'stat', '');
    scene.text('<center><b>Guilty</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/drawer/pant.mp4');
    // TODO-QSP: dynamic text: "Miss <<$pcs_lastname>>… what are you doing?"
    scene.text(`"Miss ${((st as any).pcs_lastname ?? '')}… what are you doing?"`);
    scene.actions([
      { label: 'Explain the rules', handler: (st: GameState) => {
    scene.text('<center><b>I want my panties back</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/drawer/pant0.jpg');
    scene.text('"You see, sometimes, girls need to feel free…"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>I want my panties back</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/drawer/pant1.jpg');
    scene.text('"…and since you have no interest in stealing someone else\'s panties… well, the rules are very simple…"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).rolanpantyconfession = 1;
    scene.text('<center><b>I want my panties back</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/drawer/pant3.jpg');
    scene.text('Suddenly, Rolan rushes over to you and snatches the panties from the floor. "What? Hey, how did he… It seems I don\'t need to continue with the rules…"');
    scene.text('"Rolan?"');
    // TODO-QSP: dynamic text: "Miss <<$pcs_lastname>>…"
    scene.text(`"Miss ${((st as any).pcs_lastname ?? '')}…"`);
    scene.text('"ROLAN?"');
    scene.text('"I\'m sorry…"');
    scene.actions([
      { label: 'Be nice to him', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A133', 20);
    (st as any).rolancooklesson = 0;
    (st as any).rolangift = 1;
    qspCall(st, 'panties', 'dispose');
    scene.text('<center><b>Gift</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/drawer/pant2.jpg');
    scene.text('"It\'s okay, Rolan."');
    // TODO-QSP: dynamic text: "Miss <<$pcs_lastname>>…"
    scene.text(`"Miss ${((st as any).pcs_lastname ?? '')}…"`);
    scene.text('"I\'m serious, Rolan. It\'s okay. I don\'t want to push you so I won\'t ask. It\'s just… why did you lie to me? I thought we were friends."');
    scene.text('Rolan starts to speak in a feeble voice, "It\'s stronger than me! I mean I don\'t own panties… they own me!" You see he is on the verge of tears.');
    scene.text('You speak up before he can break, "Rolan, I said I won\'t ask. I don\'t know if you want some help from me or what type of help I can give, but if I can do something I will."');
    // TODO-QSP: dynamic text: Rolan extends his hand to you, attempting to give your panties back to you, but ...
    scene.text(`Rolan extends his hand to you, attempting to give your panties back to you, but you raise your hand. "You know what? You can have them… We are friends and friends usually exchange gifts. So consider this is a gift from your friend ${((st as any).pcs_nickname ?? '')}."`);
    // TODO-QSP: dynamic text: "Miss <<$pcs_lastname>>…"
    scene.text(`"Miss ${((st as any).pcs_lastname ?? '')}…"`);
    scene.actions([
      { label: 'Leave', goto: ['rolanapt', 'room'] },
    ]);
  } },
      { label: 'Be rude to him', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A133', 20);
    (st as any).rolancooklesson = 0;
    scene.text('<center><b>My panty</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/drawer/pant4.jpg');
    scene.text('You raise your voice, "What are you, a fucking perv?"');
    // TODO-QSP: dynamic text: Rolan''s eyes drop back to the floor. "Miss <<$pcs_lastname>>, …I''m sorry!"
    scene.text(`Rolan's eyes drop back to the floor. "Miss ${((st as any).pcs_lastname ?? '')}, …I'm sorry!"`);
    scene.text('"I\'m really disappointed in you, Rolan, and too angry to speak. I\'m going to correct your bad behaviour, no matter what. I don\'t want to see your face today, I\'m so mad at you! We\'ll discuss this another time."');
    scene.text('You are very angry and decide to leave for now.');
    scene.actions([
      { label: 'Slam the door', goto: ['rolanapt', 'hallway'] },
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
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'npc_relationship', 'modify', 'A133', (-30));
    qspCall(s, 'stat', '');
    scene.text('<center><b>Guilty?</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/headrol.jpg');
    scene.text('"So it\'s true. The rumors at school? You really are a panty thief!"');
    // TODO-QSP: dynamic text: Rolan eyes you suspiciously, "Miss <<$pcs_lastname>>, I have no idea what you''r...
    scene.text(`Rolan eyes you suspiciously, "Miss ${((s as any).pcs_lastname ?? '')}, I have no idea what you're talking about."`);
    scene.actions([
      { label: 'Move away from Rolan', goto: ['rolanapt', 'hallway'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterChef(s: GameState, scene: SceneBuilder): void {
  if (((s as any).rolancooklesson ?? 0) === 1) {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    (s as any).rolancooklesson = ((s as any).rolancooklesson ?? 0) + (1);
    (s as any).rolan_cooklesson_day = ((s as any).daystart ?? 0);
    qspCall(s, 'stat', '');
    scene.text('<center><b>Introduction course</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/intro/intro0.jpg');
    // TODO-QSP: dynamic text: "O-okay, Miss <<$pcs_lastname>>, please don''t get mad."
    scene.text(`"O-okay, Miss ${((s as any).pcs_lastname ?? '')}, please don't get mad."`);
    scene.text('"Oh, I\'m not getting mad. When I get mad, you\'ll know it. So now let\'s get started."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Introduction course</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/intro/intro1.jpg');
    scene.text('"First of all, we have to clean the kitchen. A good cook takes care of his kitchen and never leaves the dishes dirty. We\'ll start by washing them."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Introduction course</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/intro/intro2.jpg');
    scene.text('"Once the dishes are washed, you have to dry them. This can be tedious but I assure you, there is a benefit to drying them."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Introduction course</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/intro/intro3.jpg');
    scene.text('"When you leave your dishes wet, you will raise the humidity in the kitchen and mold can grow. This leaves a moldy smell that can affect your food. See, we just started and you have already learned something!"');
    scene.text('Rolan simply nods his head.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Introduction course</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/intro/intro4.jpg');
    scene.text('"You\'re a good listener, Rolan. I didn\'t expect you to be interested in cleaning considering the state of your kitchen, but I have to reconsider my plans. Do you want to ask me something? I\'m more than happy to explain"');
    // TODO-QSP: dynamic text: Rolan''s eyes have wandered down to your chest. "M-miss <<$pcs_lastname>>, y-you...
    scene.text(`Rolan's eyes have wandered down to your chest. "M-miss ${((st as any).pcs_lastname ?? '')}, y-your… br-br-bre-brea…"`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Introduction course</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/intro/intro5.jpg');
    scene.text('You look down at yourself and notice your predicament. "Oh? Thank you, Rolan. You\'re quite the gentleman. Not every man would warn a girl in this condition."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Introduction course</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/intro/intro6.jpg');
    scene.text('You pull your shirt back up, "But we don\'t want a distraction, or we\'ll never be able to finish!"');
    // TODO-QSP: dynamic text: "Yes, Miss <<$pcs_lastname>>," mumbles, disappointedly.
    scene.text(`"Yes, Miss ${((st as any).pcs_lastname ?? '')}," mumbles, disappointedly.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Introduction course</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/intro/intro7.jpg');
    scene.text('"Good, we\'ve finished drying the dishes, and the kitchen seems clean enough. Our next step is to organize our kitchen. You need to have easy access to your cooking tools. You can\'t leave something on the stove while you search for your utensils; you\'ll burn the food!"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Introduction course</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/intro/intro8.jpg');
    scene.text('"Spatula…"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Introduction course</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/intro/intro9.jpg');
    scene.text('You look around through various cabinets, "Your pans. Where do you keep your pans?"');
    scene.text('An unsure look crosses Rolan\'s face, "Eeemh, I think they are in the oven…"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Introduction course</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/intro/intro10.jpg');
    scene.text('You look at him, slightly bewildered, "The oven? Why would you keep them there? They\'re the most useful tool in any kitchen!"');
    scene.text('"Well, I use them for frying about once a month or so. And I didn\'t want to throw out the leftover oil…"');
    scene.text('"Rolan!" you exclaim. "You can\'t keep using the same oil over and over! It\'s not healthy! And it will stink up your kitchen."');
    // TODO-QSP: dynamic text: "Oh, alright, Miss <<$pcs_lastname>>."
    scene.text(`"Oh, alright, Miss ${((st as any).pcs_lastname ?? '')}."`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Introduction course</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/intro/intro11.jpg');
    scene.text('"The pot will be useful for soup cooking, as I\'m sure you\'re well aware of…"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Introduction course</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/intro/intro12.jpg');
    scene.text('"And lastly, an apron! Every good chef has one. It can be useful to hold your utensils like our spatula, whisks, spoons, nail files…"');
    scene.text('"Nail fails?" Rolan asks.');
    scene.text('"Yes, Rolan. You can trim your nails while waiting for something to finish on the stove or in the oven. But, you\'re a man, so you probably just bite your nails. Well, an apron has plenty of pockets so you can just put your hands in them too," you say with a laugh. "Of course, the main function of an apron is to keep your clothes clean."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Introduction course</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/intro/intro13.jpg');
    scene.text('"Like, for example, when you\'re using flour," you begin lightly dusting some flour on the counter.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Introduction course</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/intro/intro14.jpg');
    scene.text('"It has a nasty habit of getting everywhere," you giggle.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Introduction course</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/intro/intro15.jpg');
    scene.text('"Knives are important, too. A dull blade increases the chance that you could cut yourself when slicing food."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Introduction course</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/intro/intro16.jpg');
    scene.text('"I think that\'s enough for today. Do you have any questions about what we\'ve discussed, Rolan?"');
    // TODO-QSP: dynamic text: "No, no, Miss <<$pcs_lastname>>, I think I got it," Rolan says to you with a war...
    scene.text(`"No, no, Miss ${((st as any).pcs_lastname ?? '')}, I think I got it," Rolan says to you with a warm smile.`);
    scene.text('"Okay, then. In that case, I will give you a shopping list for our next lesson."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Introduction course</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/intro/intro17.jpg');
    scene.text('"Hmm, I think we should make a borscht. Yes, that\'s it! Let\'s see," you begin to make a list of ingredients. "Of course, we\'ll need vegetable broth, beets, carrots, onions, tomatoes, cabbage, some salt, lemon juice, pepper and sour cream. Yes, I think that\'s everything. Okay Rolan get those ingredients soon."');
    // TODO-QSP: dynamic text: "Alright Miss <<$pcs_lastname>>, I''ll try."
    scene.text(`"Alright Miss ${((st as any).pcs_lastname ?? '')}, I'll try."`);
    scene.text('"Good, I\'ll make you a better cook in no time! You\'ll see!"');
    scene.actions([
      { label: 'Leave the room', goto: ['rolanapt', 'hallway'] },
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
  } },
    ]);
  } else {
    if (((s as any).rolancooklesson ?? 0) === 2) {
      (s as any).minut = ((s as any).minut ?? 0) + 60;
      (s as any).rolancooklesson = ((s as any).rolancooklesson ?? 0) + (1);
      (s as any).rolan_cooklesson_day = ((s as any).daystart ?? 0);
      qspCall(s, 'stat', '');
      scene.text('<center><b>Borscht</b></center>');
      scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/fridge0.jpg');
      scene.text('"Okay, you bought everything right?" You check the fridge. "Rolan, where\'s the broth? It was the first thing on the list. How could you forget?"');
      scene.text('Rolan is fidgeting around, "It\'s just, there was so much to get. I got everything else, though. Maybe we should wait to do this? How about next week?"');
      scene.text('You sigh to yourself, "Rolan."');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Borscht</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/borsh/borscht0.jpg');
    scene.text('"Look, I know you don\'t want to do this, but you need to learn to cook! It\'s really not so difficult, and I\'m here to help you! Luckily, I brought some broth with me."');
    scene.text('You pour the broth into a pot and place it on the stove. Rolan sighs to himself, "Dammit."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Borscht</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/borsh/borscht1.jpg');
    scene.text('You poke your tongue out at Rolan, "At least you got all the vegetables. From the looks of things, I\'d guess you\'ve never had this many vegetables in your kitchen all at once."');
    scene.text('"That is because I\'m a man, not a rabbit!" You try to stiffle your laughter. It doesn\'t work, but even Rolan can\'t help but smile at his words.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Borscht</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/borsh/borscht2.jpg');
    scene.text('"Now, we need to peel our vegetables."');
    scene.text('"What? Peel them, that\'s new," Rolan looks a bit puzzled.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Borscht</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/borsh/borscht3.jpg');
    scene.text('Once the peeling is done, you hand a knife to Rolan, "You have to cut them into little pieces. There\'s no rush, our broth still isn\'t ready."');
    scene.text('"This sure is a lot of work for just borscht," Rolan complains.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Borscht</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/borsh/borscht4.jpg');
    if (((st as any).npc_rel ?? 0)?.['A11'] > 40) {
      scene.text('Your phone buzzes. "Oh, it\'s Vasily. He wants to know what I\'m doing right now."');
    } else {
      scene.text('Your phone buzzes. It\'s your mother wondering where you are…');
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Borscht</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/borsh/borscht5.jpg');
    if (((st as any).npc_rel ?? 0)?.['A11'] > 40) {
      scene.text('You snap a photo of yourself and text: "hey loser im cooking lol"');
    } else {
      scene.text('You snap a photo of yourself and text: "I\'m at a friend\'s house helping them cook. Be home soon."');
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Borscht</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/borsh/borscht6.jpg');
    scene.text('You finish sending your text just as Rolan has finished cutting up the last of the vegetables.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Borscht</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/borsh/borscht7.jpg');
    scene.text('You check on the broth, "It\'s nearly ready, we can add the vegetables now."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Borscht</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/borsh/borscht8.jpg');
    scene.text('You grab a bowl to put the vegetables in,');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Borscht</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/borsh/borscht9.jpg');
    scene.text('You give the prepared broth a quick stir before you start adding the vegetables.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Borscht</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/borsh/borscht10.jpg');
    scene.text('"Okay, mix the vegetables in the broth and let it cook 20 minutes. Oh, don\'t forget to cover the pot! Hmm, where did I put the apron? Rolan? I don\'t want to dirty my clothes…"');
    scene.text('You notice Rolan staring at your chest. Is he even paying attention?');
    scene.text('"Rolan? Earth to Rolan?" He looks up at you. You sigh to yourself before spotting the apron. "Nevermind, I found it."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Borscht</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/borsh/borscht11.jpg');
    scene.text('You spend the next few minutes in silence. You notice Rolan occasionally sneaking glances at your chest again. Finally you speak up, "Okay, now we can add the cabbage and some butter, then cook for another 20 minutes. We can leave the top off this time."');
    scene.text('"Hmm, take your top off, yes, yes. That\'s good." What is Rolan even talking about?');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Borscht</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/borsh/borscht12.jpg');
    scene.text('Another awkwardly silent 20 minutes goes by. "Time to test taste." You grab a ladle, and take a careful sip, "Okay, not bad, not bad. Let\'s stir in some lemon juice, but not too much."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Borscht</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/borsh/borscht13.jpg');
    scene.text('"We\'re almost done… is everything clear, Rolan?"');
    scene.text('"Uhh, yeah, yeah, I think so…" He doesn\'t sound very convincing.');
    scene.text('He\'s not still hung up on all the vegetables you used, is he?');
    scene.text('"Now, we just have to let it sit for an hour or so. You can reheat it or just leave it at room temperature. Add some sour cream and…"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Borscht</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/borsh/borscht.jpg');
    scene.text('"Voila! Here is our borscht… it\'s actually better to eat the next day!"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Dishes</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/dishes4.jpg');
    scene.text('As Rolan is eating, you tell him, "Don\'t forget to clean the dishes when you\'re done, so next time they are ready to be used. Here\'s a list of ingredients you\'ll need for our next lesson. I\'ll see you later!"');
    scene.actions([
      { label: 'Leave the room', goto: ['rolanapt', 'hallway'] },
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
    } else {
      if (((s as any).rolancooklesson ?? 0) === 3) {
        (s as any).minut = ((s as any).minut ?? 0) + 60;
        (s as any).rolancooklesson = ((s as any).rolancooklesson ?? 0) + (1);
        (s as any).rolan_cooklesson_day = ((s as any).daystart ?? 0);
        qspCall(s, 'stat', '');
        scene.text('<center><b>Olivier Salad</b></center>');
        scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/fridge2.jpg');
        scene.text('"Today, we\'re going to make an Olivier salad, even though it\'s not New Years. I think you should already have everything," you begin to grab the ingredients from around the kitchen. "Hmm, a can of sweet peas, a medium sized potato, carrots, eggs, a cucumber, oh! Can\'t forget the olive oil. Yup, that\'s everything!"');
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Olivier Salad</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/russalad/oliver0.jpg');
    scene.text('"First, we need to boil some water."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Olivier Salad</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/russalad/oliver1.jpg');
    scene.text('"Then, while that\'s going, we\'ll prepare our vegetables." You move over to the sink and start rinsing the vegetables. "I know you find this part quite a-peeling," you jest.');
    scene.text('You can\'t see him, but you can sense Rolan\'s eyes rolling at your lame pun.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Olivier Salad</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/russalad/oliver2.jpg');
    scene.text('"We can add these straight to the water, we\'ll dice them up later so it\'ll be a bit easier this time. That\'ll need about 20 minutes, so Rolan?"');
    // TODO-QSP: dynamic text: "Yes, Miss <<$pcs_lastname>>?"
    scene.text(`"Yes, Miss ${((st as any).pcs_lastname ?? '')}?"`);
    scene.text('"Go ahead and crack some eggs into that bowl, we\'ll get started on the mayonnaise."');
    scene.text('"Sure, just give me a moment." Rolan leaves the kitchen but returns almost immediately.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Olivier Salad</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/russalad/oliver3.jpg');
    scene.text('You hear a strange noise.');
    scene.text('You turn to look at Rolan, "What are you doing?"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Olivier Salad</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/russalad/oliver4.jpg');
    scene.text('"You wanted me to crack the eggs, no?"');
    scene.text('"That\'s not… What did you… Rolan?"');
    scene.text('"Perhaps a hammer would work better?"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Olivier Salad</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/russalad/oliver5.jpg');
    scene.text('You can\'t help but laugh at the situation. "Okay, here, let me show you have to crack an egg."');
    scene.text('You grab the eggs from Rolan and move over to a mixing bowl.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Olivier Salad</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/russalad/oliver6.jpg');
    scene.text('"Now we\'ll use our mixer here to make the mayonnaise. The secret is to pour the oil in really slowly…"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Olivier Salad</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/russalad/oliver7.jpg');
    scene.text('A few moments later, the mayonnaise is ready. You lick a little excess mayo from your fingers, "Mmm, that\'s good…"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Olivier Salad</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/russalad/oliver8.jpg');
    scene.text('"Alright, mayo\'s done, and the vegetables should be boiled by now. Get them out of the water, but be careful, they\'re very hot! I need to change my clothes."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Olivier Salad</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/russalad/oliver9.jpg');
    scene.text('You return to the kitchen a few minutes later. You\'ve removed your clothes and replaced them with only an apron, "Here, what do you think?"');
    // TODO-QSP: dynamic text: Rolan looks you over, "Uh, um, you, uh, look go-great as always, Miss <<$pcs_las...
    scene.text(`Rolan looks you over, "Uh, um, you, uh, look go-great as always, Miss ${((st as any).pcs_lastname ?? '')}!"`);
    scene.text('"Thanks, Rolan!" You wink at him, "You know girls love compliments almost as much as man who cooks!"');
    // TODO-QSP: dynamic text: He looks a bit flustered, "Uhh, sure, Miss <<$pcs_lastname>>… whatever you say."
    scene.text(`He looks a bit flustered, "Uhh, sure, Miss ${((st as any).pcs_lastname ?? '')}… whatever you say."`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Olivier Salad</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/russalad/oliver10.jpg');
    scene.text('You begin dicing the potatoes and carrots into pieces with Rolan\'s help.');
    scene.text('"You see, they were a lot easier to dice this way. Now we\'ll add them back to the pot and pour in the mayonnaise."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Olivier Salad</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/russalad/oliver11.jpg');
    scene.text('"We spray a little cold water to keep the vegetables from cooking our mayonnaise. That\'s kinda important, so at least remember this part, Rolan!"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Olivier Salad</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/russalad/oliver12.jpg');
    scene.text('You accidentally spray yourself with water. "…well, it\'s a good thing I remembered the apron!"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Olivier Salad</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/russalad/oliver13.jpg');
    scene.text('"I\'m absolutely drenched!"');
    scene.text('Rolan says nothing.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Olivier Salad</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/russalad/oliver14.jpg');
    scene.text('"Need to drain the water from our salad." You prop a foot up on the counter, giving Rolan quite the view, "And I guess I need to air out as well!"');
    scene.text('Rolan is trying his best not to stare. You think you hear him mutter, "Don\'t look, don\'t look, don\'t look…"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Olivier Salad</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/russalad/oliver15.jpg');
    scene.text('"Rolan, you don\'t mind if I leave my leg up like this, do you?"');
    // TODO-QSP: dynamic text: He takes a long breath, "N-no, Miss <<$pcs_lastname>>. I-I don''t mind at all…"
    scene.text(`He takes a long breath, "N-no, Miss ${((st as any).pcs_lastname ?? '')}. I-I don't mind at all…"`);
    scene.text('"Thank you. I need to let my panties dry out. I don\'t want to catch a cold and miss our days together."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Olivier Salad</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/russalad/oliver16.jpg');
    scene.text('"Now, where were we? Oh yes, now that the vegetables are cooled off, we can mix in the mayonnaise."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Olivier Salad</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/russalad/oliver17.jpg');
    scene.text('"Oh! I nearly forgot!"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Olivier Salad</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/russalad/oliver18.jpg');
    scene.text('You bend over and start searching through some cabinets, "Where did we leave the salt and pepper?"');
    scene.text('Rolan has a clear view of your wet panties. His eyes are fixated on them.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Olivier Salad</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/russalad/oliver19.jpg');
    scene.text('"You don\'t want to add too much, otherwise it\'ll take away from the flavor and remove all our hard work."');
    scene.text('Rolan nods mindlessly along, "…remove the panties, yes, very hard."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Olivier Salad</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/russalad/oliver20.jpg');
    scene.text('You giggle at Rolan\'s obvious staring. He is so easy. "There, that\'s one more meal you can now make Like our borscht, this can be eaten now or you can wait another day and really let the flavors mix together!"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Olivier Salad</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/russalad/oliver.jpg');
    scene.text('"You need to remember to store this in your refrigerator. Make sure to cover the top with cellophane to keep it fresh, it should last up to about 3 days."');
    scene.text('"Wrap the panties and refrigerate, yes."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Dishes</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/dishes0.jpg');
    scene.text('"Here\'s your next list of ingredients, and don\'t forget the dishes!" You blow him a kiss as you walk out.');
    scene.actions([
      { label: 'Leave the room', goto: ['rolanapt', 'hallway'] },
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
      } else {
        if (((s as any).rolancooklesson ?? 0) === 4) {
          (s as any).minut = ((s as any).minut ?? 0) + 60;
          (s as any).rolancooklesson = ((s as any).rolancooklesson ?? 0) + (1);
          (s as any).rolan_cooklesson_day = ((s as any).daystart ?? 0);
          qspCall(s, 'stat', '');
          scene.text('<center><b>Blini</b></center>');
          scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/fridge4.jpg');
          scene.text('"I think today, I\'ll show you one of my favorite breakfast foods: blini! It\'s quite simple, and you should already have the basic ingredients." You poke through the kitchen, "Eggs, milk, flour, sugar, salt, oil…"');
          // TODO-QSP: dynamic text: Rolan speaks up, "Miss <<$pcs_lastname>>, can we postpone this for now? I''m a b...
          scene.text(`Rolan speaks up, "Miss ${((s as any).pcs_lastname ?? '')}, can we postpone this for now? I'm a bit tired today…"`);
          scene.text('"That\'s perfect. They are supposed to be eaten when you wake up. And think, what girl wouldn\'t love to wake up to blini made by a wonderful man, after a passionate night of lovemaking?"');
          scene.text('Rolan seems to be at a loss for words.');
          scene.actions([
            { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Blini</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/blini/blini0.jpg');
    scene.text('"First, we\'ll take our eggs and flour and get to work on the batter."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Blini</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/blini/blini1.jpg');
    scene.text('"And while we\'re doing that, we\'ll let our pan get heated up."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Blini</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/blini/blini2.jpg');
    scene.text('You crack the eggs into a bowl, "Now, we whisk our eggs."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Blini</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/blini/blini3.jpg');
    scene.text('You continue, "…and we add the flour and milk…"');
    scene.text('Rolan interrupts you, "Wouldn\'t using the mixer be easier and faster?"');
    scene.text('You shake your head, "No, we need to hand mix our batter."');
    scene.text('"But why?" Rolan asks.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Blini</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/blini/blini4.jpg');
    scene.text('"The batter needs to be smooth and creamy. If you\'re mixing by hand, it\'s much easier to tell. If you use the mixer, you might overdo it and the batter would be lumpy. Lumpy batter makes bad blini."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Blini</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/blini/blini5.jpg');
    scene.text('You finish mixing the batter and check the pan, "Hand mixing also helps pass the time, and now our pan is heated and ready."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Blini</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/blini/blini6.jpg');
    scene.text('"These shouldn\'t take too long, just a minute or two for each side."');
    scene.text('You continue, "The best part of blini, I think, is the flipping."');
    scene.actions([
      { label: 'Flip', handler: (st: GameState) => {
    if (((st as any).pcs_agil ?? 0) >= 40  &&  ((st as any).pcs_agil ?? 0) < 60) {
      scene.text('<center><b>Now do a barrel roll.</b></center>');
      scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/blini/flipag40.mp4');
      // TODO-QSP: dynamic text: "Miss <<$pcs_lastname>>! Wow! I didn''t expect that!"
      scene.text(`"Miss ${((st as any).pcs_lastname ?? '')}! Wow! I didn't expect that!"`);
      scene.text('You wink at him, "Pretty soon, you\'ll be able to do this as well. All the girls will be flocking here for breakfast!"');
    } else {
      if (((st as any).pcs_agil ?? 0) >= 60) {
        scene.text('<center><b>You rolled a 20!</b></center>');
        scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/blini/flipag60.mp4');
        scene.text('During your trick, Rolan was given quite the view of your legs, especially your panties.');
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Blini</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/blini/blini8.jpg');
    scene.text('You stare at Rolan in amusement, "What? Cat got your tongue?"');
    // TODO-QSP: dynamic text: Rolan stammers, "M-miss <<$pcs_lastname>>… I-I… wow…"
    scene.text(`Rolan stammers, "M-miss ${((st as any).pcs_lastname ?? '')}… I-I… wow…"`);
    scene.text('You laugh, "Oh, I guess you\'ll be taking our lessons a little more seriously now?"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Blini</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/blini/blini.jpg');
    scene.text('You hand Rolan a prepared plate, "Here are the blini. You can serve them with cream and jam. Enjoy, sleepyhead!"');
    // TODO-QSP: dynamic text: Rolan eyes his plate, "Miss <<$pcs_lastname>>, they look delicious!"
    scene.text(`Rolan eyes his plate, "Miss ${((st as any).pcs_lastname ?? '')}, they look delicious!"`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Blini</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/dishes3.jpg');
    scene.text('"Rolan, please remember to clean up the kitchen after you finish eating!"');
    // TODO-QSP: dynamic text: Mouth stuffed, he responds. "I''ll try miss <<$pcs_lastname>>…"
    scene.text(`Mouth stuffed, he responds. "I'll try miss ${((st as any).pcs_lastname ?? '')}…"`);
    scene.text('You don\'t hear too much conviction in Rolan\'s words while he eats his blini. You doubt he\'ll even put his plate away…');
    scene.actions([
      { label: 'Leave the room', goto: ['rolanapt', 'hallway'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        scene.text('<center><b>You rolled a 1.</b></center>');
        scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/blini/flipag30.mp4');
        scene.text('Embarrassed, you exclaim, "Oops! That wasn\'t supposed to happen!"');
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Blini</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/blini/blini7.jpg');
    // TODO-QSP: dynamic text: Rolan asks in a mocking tone, "Miss <<$pcs_lastname>>… are you sure you''ve done...
    scene.text(`Rolan asks in a mocking tone, "Miss ${((st as any).pcs_lastname ?? '')}… are you sure you've done this before?"`);
    scene.text('You try to save face, "Yes, yes, yes! I just, uh, wanted to show <b>YOU</b> what <b>NOT</b> to do. Haha, yeah, that\'s right!"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Blini</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/blini/blini.jpg');
    scene.text('A few minutes later, you\'ve prepared another blini. You didn\'t bother to show off this time. "Here are our pancakes. You can serve them with cream and jam. Here try these sleepy head."');
    // TODO-QSP: dynamic text: Rolan eyes his plate, "Miss <<$pcs_lastname>>, they look delicious!"
    scene.text(`Rolan eyes his plate, "Miss ${((st as any).pcs_lastname ?? '')}, they look delicious!"`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Blini</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/dishes3.jpg');
    scene.text('"Rolan, please remember to clean up the kitchen after you finish eating!"');
    // TODO-QSP: dynamic text: Mouth stuffed, he responds. "I''ll try miss <<$pcs_lastname>>…"
    scene.text(`Mouth stuffed, he responds. "I'll try miss ${((st as any).pcs_lastname ?? '')}…"`);
    scene.text('You don\'t hear too much conviction in Rolan\'s words while he eats his blini. You doubt he\'ll even put his plate away…');
    scene.actions([
      { label: 'Leave the room', goto: ['rolanapt', 'hallway'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Blini</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/blini/blini.jpg');
    scene.text('You hand Rolan a prepared plate, "Here are the blini. You can serve them with cream and jam. Enjoy, sleepyhead!"');
    // TODO-QSP: dynamic text: Rolan eyes his plate, "Miss <<$pcs_lastname>>, they look delicious!"
    scene.text(`Rolan eyes his plate, "Miss ${((st as any).pcs_lastname ?? '')}, they look delicious!"`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Blini</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/dishes3.jpg');
    scene.text('"Rolan, please remember to clean up the kitchen after you finish eating!"');
    // TODO-QSP: dynamic text: Mouth stuffed, he responds. "I''ll try miss <<$pcs_lastname>>…"
    scene.text(`Mouth stuffed, he responds. "I'll try miss ${((st as any).pcs_lastname ?? '')}…"`);
    scene.text('You don\'t hear too much conviction in Rolan\'s words while he eats his blini. You doubt he\'ll even put his plate away…');
    scene.actions([
      { label: 'Leave the room', goto: ['rolanapt', 'hallway'] },
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
  } },
    ]);
  } },
          ]);
        } else {
          if (((s as any).rolancooklesson ?? 0) === 5) {
            (s as any).minut = ((s as any).minut ?? 0) + 10;
            (s as any).rolancooklesson = ((s as any).rolancooklesson ?? 0) + (1);
            (s as any).rolan_cooklesson_day = ((s as any).daystart ?? 0);
            qspCall(s, 'stat', '');
            scene.text('<center><b>Black Bread</b></center>');
            scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/fridge3.jpg');
            scene.text('You begin rummaging through the kitchen, "Hmm, cider vinegar, bread flour, rye flour, dark corn syrup, brown sugar, unsweetened cocoa powder, instant coffee granules, active dry yeast, butter, water. Perfect!" You turn to face Rolan, "Today, I\'m going to show you how to bake some black bread."');
            scene.actions([
              { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.text('<center><b>Black Bread</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/blackbread/blackb0.jpg');
    scene.text('"We\'re going to let the butter warm up to room temperature. Meanwhile, we\'re going to go ahead and start mixing together our other ingredients."');
    scene.text('"Got it." Is Rolan actually paying attention?');
    scene.text('You continue, "The recipe doesn\'t mention it, but we\'re also going to add a little milk."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.text('<center><b>Black Bread</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/blackbread/blackb1.jpg');
    scene.text('"But shouldn\'t we follow the recipe?" Wow, he <i>is</i> focusing today.');
    scene.text('You grin at him, "Usually, yes, you should. But an important part of cooking for yourself is experimenting."');
    scene.text('"But that\'s not the only reason?"');
    scene.text('"No, it\'s not." Your grin grows wider, "I happen to really like milk!"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.text('<center><b>Black Bread</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/blackbread/blackb2.jpg');
    scene.text('"The butter should be soft enough to add to our mixture now…"');
    scene.text('"Are we mixing with our hands, like last time?"');
    scene.text('You nod, "Yup, just like our blini batter, we need to ensure the quality of our bread dough. For a beginner, it\'s better to have that hands-on approach."');
    // TODO-QSP: dynamic text: He nods along, "Of course, Miss <<$pcs_lastname>>."
    scene.text(`He nods along, "Of course, Miss ${((st as any).pcs_lastname ?? '')}."`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.text('<center><b>Black Bread</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/blackbread/blackb3.jpg');
    scene.text('"Hmm," a naughty smile crosses your face. "We need to get messy with the flour."');
    scene.text('Rolan takes a deep breath, but says nothing.');
    scene.text('"Looks like I\'ll need to change!"');
    scene.text('As you leave the room to \'change\' you swear you hear Rolan mutter, "…she is going to be the death of me, I just know it…"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.text('<center><b>Black Bread</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/blackbread/blackb4.jpg');
    scene.text('You re-enter the room a few minutes later, your clothes replaced with only the apron. "There, now we can <i>really</i> get to work."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.text('<center><b>Black Bread</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/blackbread/blackb5.jpg');
    scene.text('"Sometimes the dough will stick, you just need to add a bit more flour. Then, you have to kneed it hard for about ten minutes," you almost grunt as you really put yourself into it.');
    scene.text('Rolan is trying his damnedest to pay attention to your instructions."Uh-huh…"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    qspCall(st, 'stat', '');
    scene.text('<center><b>Black Bread</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/blackbread/blackb6.jpg');
    scene.text('You place the dough into a bowl and cover it, "It will take about an hour to rise before the next step. So now, we wait."');
    scene.text('You and Rolan spend the next hour making small talk. He can\'t help but occasionally stare at your exposed panties.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.text('<center><b>Black Bread</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/blackbread/blackb7.jpg');
    scene.text('You remove the dough from the bowl and kneed it again, before setting it on a greased pan and covering it. "Just another hour now and we\'ll be ready to finally bake our bread." You look yourself over, "Oh, look what a mess I\'ve made of myself!" You pat your backside and pull lightly on your panties.');
    scene.text('You try conversing with Rolan again, but by this point the poor man is almost mute. You note the time and tell him to preheat the oven.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.text('<center><b>Black Bread</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/blackbread/blackb8.jpg');
    scene.text('You continue speaking to the kitchen itself, Rolan occasionally nodding along at inopportune times, when the oven beeps. You place the pan into the oven and set the timer. "Alright, Rolan, while our bread is baking. I\'m going to go clean myself off and when I come back, our loaf should be ready!"');
    scene.text('You can feel his eyes trailing you as you exit the room.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'stat', '');
    scene.text('<center><b>Black Bread</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/blackbread/blackb9.jpg');
    scene.text('You re-enter the kitchen and you see Rolan removing the bread from the oven. It smells delicious. "I\'m back! We\'ll put the bread on a rack so it can cool."');
    // TODO-QSP: dynamic text: "Miss <<$pcs_lastname>>, is it ready to eat? I''m quite hungry after all this wa...
    scene.text(`"Miss ${((st as any).pcs_lastname ?? '')}, is it ready to eat? I'm quite hungry after all this waiting…"`);
    scene.text('You lightly admonish him, "It\'s almost done, Rolan. You need to be patient!"');
    scene.text('"Alright…"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.text('<center><b>Black Bread</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/blackbread/blackbread.jpg');
    scene.text('You hand Rolan a plate with a couple of fresh cut slices, "There, our black bread is finished and ready to eat!"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Black Bread</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/dishes1.jpg');
    scene.text('"You will remember to clean the dishes before our next lesson, won\'t you Rolan?" You hear a muffled reply from the man as he eats, though you couldn\'t tell if it was a positive or negative reply. You should just stop asking him at this point.');
    scene.actions([
      { label: 'Leave the room', goto: ['rolanapt', 'hallway'] },
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
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
            ]);
          } else {
            if (((s as any).rolancooklesson ?? 0) === 6) {
              (s as any).minut = ((s as any).minut ?? 0) + 60;
              (s as any).rolancooklesson = ((s as any).rolancooklesson ?? 0) + (1);
              (s as any).rolan_cooklesson_day = ((s as any).daystart ?? 0);
              (s as any).rolanworker = 1;
              qspCall(s, 'stat', '');
              scene.text('<center><b>Stroganoff</b></center>');
              scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/fridge1.jpg');
              scene.text('"Okay Rolan, this is it. Our last cooking lesson. After this, I think you should be able to handle anything else on your own, but don\'t be afraid to ask me for help if you need it." You give him an assuring smile. "But first, do you have something I could wear? The aprons are still drying from last time. I can\'t believe you forgot to wash them! Or were you hoping I\'d go without this time, you naughty old man…"');
              // TODO-QSP: dynamic text: "No, no, of course not, Miss <<$pcs_lastname>>! I honestly forgot! I should have...
              scene.text(`"No, no, of course not, Miss ${((s as any).pcs_lastname ?? '')}! I honestly forgot! I should have something you could wear, just give me one moment, please!" He hurries out of the room. You start gathering ingredients.`);
              scene.actions([
                { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Stroganoff</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/stroganoff/stroganoff0.jpg');
    scene.text('Rolan returns with an old shirt. You slipped off your own clothes and put it on. "Okay, today we\'re going to make Beef Stroganoff!"');
    scene.text('It looks like Rolan wants to say something.');
    scene.text('"Yes, what is it?"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Stroganoff</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/stroganoff/stroganoff1.jpg');
    // TODO-QSP: dynamic text: "Well, it''s just that, Miss <<$pcs_lastname>>…" He seems hesitant to continue, ...
    scene.text(`"Well, it's just that, Miss ${((st as any).pcs_lastname ?? '')}…" He seems hesitant to continue, "I thought you were vegetarian or something…"`);
    scene.text('You look at him curiously, "Hmm? No, why would you think that?"');
    scene.text('"Ah, well, it\'s just that our other lessons were loaded with vegetables and we haven\'t touched meat so far…"');
    scene.text('"Oh, that\'s just because we needed to work our way up. It\'s much easier to work with vegetables to start with. I wouldn\'t expect you to live off only bread and vegetables. You\'re a man, not a rabbit, after all!" You laugh remembering your earlier lessons.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Stroganoff</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/stroganoff/stroganoff2.jpg');
    scene.text('"We\'ll get rid of the excess fat on this meat by searing it…"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Stroganoff</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/stroganoff/stroganoff3.jpg');
    scene.text('"It doesn\'t need too long, the beef will actually finish cooking when we add it to the stew."');
    scene.text('As you\'re moving the beef from the pan to a plate, your shirt slides up giving Rolan an unobstructed view of your panties.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Stroganoff</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/stroganoff/stroganoff4.jpg');
    scene.text('You wipe your brow, "Whew! I got a little hot there, this shirt doesn\'t breathe too well. I hope you don\'t mind if I take it off…"');
    scene.text('Rolan doesn\'t raise any objections as you pull the shirt off.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Stroganoff</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/stroganoff/stroganoff5.jpg');
    scene.text('"I hope you\'re paying attention to this stew, Rolan. Rolan?" You turn to face him, his eyes are glued to your panties.');
    if (((st as any).pcs_inhib ?? 0) > 50  &&  ((st as any).pantyworntype ?? 0) !== 'none') {
      scene.actions([
        { label: 'Tease Rolan further', handler: (st: GameState) => {
    scene.text('<center><b>Stroganoff</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/stroganoff/stroganoff6.jpg');
    scene.text('You sigh and start to put the shirt back on, but then…');
    scene.text('"…so you are distracted by my panties…"');
    scene.text('Rolan doesn\'t speak.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'panties', 'remove');
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
    qspCall(st, 'stat', '');
    scene.text('<center><b>Stroganoff</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/stroganoff/stroganoff7.jpg');
    scene.text('"Then I should take them off…"');
    scene.text('Rolan only whimpers as he watches your panties slide down your legs.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Stroganoff</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/stroganoff/stroganoff8.jpg');
    scene.text('"We don\'t want distractions…"');
    scene.text('Rolan\'s eyes look like they might pop out of his head.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
    qspCall(st, 'stat', '');
    scene.text('<center><b>Stroganoff</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/stroganoff/stroganoff9.jpg');
    scene.text('"Once these are gone, we can refocus on our cooking…"');
    scene.text('"N-no, p-please…"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Stroganoff</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/stroganoff/stroganoff10.jpg');
    scene.text('"There, now we\'re free to focus on the food."');
    // TODO-QSP: dynamic text: "P-please… M-miss <<$pcs_lastname>>… i-it''s worse…"
    scene.text(`"P-please… M-miss ${((st as any).pcs_lastname ?? '')}… i-it's worse…"`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
    qspCall(st, 'panties', 'wear');
    qspCall(st, 'stat', '');
    scene.text('<center><b>Stroganoff</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/stroganoff/stroganoff11.jpg');
    scene.text('With those words, you put your panties back on.');
    scene.text('"Good to know, I think we can continue now."');
    scene.text('Short of breath, Rolan manages to respond. "Y-yes."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Stroganoff</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/stroganoff/stroganoff12.jpg');
    scene.text('You return your focus to the cooking lesson, "Next, we can add the rest of our ingredients to the pot."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Stroganoff</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/stroganoff/stroganoff13.jpg');
    scene.text('"Soon, we can add our beef to the mix and let it cook for a few more minutes."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Stroganoff</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/stroganoff/stroganoff.jpg');
    scene.text('You prepare a bowl for poor Rolan, still in shock over your earlier show, "Our Stroganoff is ready!"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Stroganoff</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/dishes2.jpg');
    scene.text('"I hope you\'ve enjoyed these lessons, Rolan. I know I have. Oh, and don\'t forget the dishes, dear!"');
    scene.actions([
      { label: 'Leave the room', goto: ['rolanapt', 'hallway'] },
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
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Hey', handler: (st: GameState) => {
    scene.text('<center><b>Stroganoff</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/stroganoff/stroganoff14.jpg');
    scene.text('You feel a bit bad for Rolan, perhaps you pushed things too far? "…no, Rolan. This is not good. We are working here, you should be focused…"');
    scene.text('"I-I\'m sorry…" You put the shirt back on, making sure to cover yourself as much as possible.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Stroganoff</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/stroganoff/stroganoff15.jpg');
    scene.text('"It\'s okay, Rolan. But we should get back to our cooking."');
    // TODO-QSP: dynamic text: "Thank you, Miss <<$pcs_lastname>>, I''ll try not to get distracted again."
    scene.text(`"Thank you, Miss ${((st as any).pcs_lastname ?? '')}, I'll try not to get distracted again."`);
    scene.text('You turn your attention back to the stove, "Okay, so… where were we?"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Stroganoff</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/stroganoff/stroganoff12.jpg');
    scene.text('You begin to add the remainder of the ingredients to the pot.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Stroganoff</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/stroganoff/stroganoff13.jpg');
    scene.text('"Soon, we can add our beef to the mix and let it cook for a few more minutes."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Stroganoff</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/stroganoff/stroganoff.jpg');
    scene.text('You prepare a bowl for Rolan, who has been noticeably quiet for the past few minutes, though he hasn\'t been staring at you like before. "Here, our Stroganoff is ready!"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Stroganoff</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/kitch/lesson/dishes2.jpg');
    scene.text('"I hope you\'ve enjoyed our cooking lessons, Rolan. Oh, don\'t forget the dishes, dear!"');
    scene.actions([
      { label: 'Leave the room', goto: ['rolanapt', 'hallway'] },
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
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
              ]);
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterWorker(s: GameState, scene: SceneBuilder): void {
  if (((s as any).rolanworker ?? 0) === 1) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).rolanworker = ((s as any).rolanworker ?? 0) + (1);
    (s as any).workertool = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Chat</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/bathchat/builder/prelude1.jpg');
    scene.text('"I was wondering, why don\'t you do some work around your home to fix it up?"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    scene.text('<center><b>Chat</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanwelcome.jpg');
    // TODO-QSP: dynamic text: "Miss <<$pcs_lastname>>, I have thought about it. But I don''t have the money to...
    scene.text(`"Miss ${((st as any).pcs_lastname ?? '')}, I have thought about it. But I don't have the money to pay anyone to work on my home and I also don't have all the know-how to do it myself."`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    scene.text('<center><b>Chat</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/bathchat/builder/prelude2.jpg');
    scene.text('"What if I helped you?"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    scene.text('<center><b>Chat</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanwelcome.jpg');
    scene.text('"No, no, I couldn\'t ask you to do that. Please, I will find a way eventually."');
    scene.actions([
      { label: 'Continue', goto: ['rolanapt', 'livingroom'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).rolanworker ?? 0) === 2) {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      (s as any).rolanworker = ((s as any).rolanworker ?? 0) + (1);
      qspCall(s, 'stat', '');
      scene.text('<center><b>Worker</b></center>');
      scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/bathchat/builder/worker6.jpg');
      scene.text('<i>First I\'ll prepare the concrete, I don\'t need a whole lot, the crack\'s not that big after all…</i>');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.text('<center><b>Worker</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/bathchat/builder/worker7.jpg');
    scene.text('<i>Next, I\'ll search for the pipes and mark their path. Definitely don\'t wanna break those…</i>');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.text('<center><b>Worker</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/bathchat/builder/worker8.jpg');
    scene.text('<i>…I hope his neighbors aren\'t home…</i>');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    scene.text('<center><b>Worker</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/bathchat/builder/worker9.jpg');
    scene.text('<i>…whew, that\'s done. Good thing too, I\'m really starting to sweat…</i>');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.text('<center><b>Worker</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/bathchat/builder/worker10.jpg');
    scene.text('<i>…now to patch the holes with the concrete…</i>');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.text('<center><b>Worker</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/bathchat/builder/worker11.jpg');
    scene.text('<i>…this is more work than I thought it\'d be. I\'m absolutely soaked in sweat…</i>');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    scene.text('<center><b>Worker</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/bathchat/builder/worker12.jpg');
    scene.text('<i>That feels</i> <b>sooo</b> <i>much better! Good thing Rolan isn\'t around, he\'d have a heart attack!</i>');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.text('<center><b>Worker</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/bathchat/builder/worker13.jpg');
    scene.text('You begin painting the walls.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    scene.text('<center><b>Worker</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/bathchat/builder/worker14.jpg');
    scene.text('<i>I sure hope Rolan is happy with my work.</i>');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.text('<center><b>Worker</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/bathchat/builder/worker15.jpg');
    scene.text('<i>…the upper walls are done, finally. Now time for the lower walls…</i>');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    scene.text('<center><b>Worker</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/bathchat/builder/workpaint.mp4');
    scene.text('<i>…this paint will be a pain to wash off in the shower…</i>');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).newbath = 1;
    qspCall(st, 'drugs', 'alcohol', 'beer');
    qspCall(st, 'stat', '');
    scene.text('<center><b>Worker</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/bathchat/builder/worker16.jpg');
    scene.text('"I\'m sure Rolan won\'t mind me stealing a beer. Oh wow… that\'s the best beer I\'ve ever tasted! No wonder why builders drink so much at work!"');
    scene.actions([
      { label: 'Continue', goto: ['rolanapt', 'hallway'] },
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
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterRolanroute(s: GameState, scene: SceneBuilder): void {
  if (((s as any).RolanLocSet ?? 0) !== ((s as any).daystart ?? 0)) {
    ((s as any).RolanLoc = (s as any).RolanLoc ?? {})[0] = 3;
    ((s as any).RolanLoc = (s as any).RolanLoc ?? {})[1] = 3;
    ((s as any).RolanLoc = (s as any).RolanLoc ?? {})[2] = 3;
    ((s as any).RolanLoc = (s as any).RolanLoc ?? {})[3] = 3;
    ((s as any).RolanLoc = (s as any).RolanLoc ?? {})[4] = 3;
    ((s as any).RolanLoc = (s as any).RolanLoc ?? {})[5] = 3;
    ((s as any).RolanLoc = (s as any).RolanLoc ?? {})[6] = ((((s as any).week ?? 0) !== 7) ? (0) : (3));
    ((s as any).RolanLoc = (s as any).RolanLoc ?? {})[7] = ((((s as any).week ?? 0) !== 7) ? (0) : (3));
    ((s as any).RolanLoc = (s as any).RolanLoc ?? {})[8] = ((((s as any).week ?? 0) !== 7) ? (0) : (3));
    ((s as any).RolanLoc = (s as any).RolanLoc ?? {})[9] = ((((s as any).week ?? 0) !== 7) ? (0) : (1));
    ((s as any).RolanLoc = (s as any).RolanLoc ?? {})[10] = ((((s as any).week ?? 0) !== 7) ? (0) : (1));
    ((s as any).RolanLoc = (s as any).RolanLoc ?? {})[11] = ((((s as any).week ?? 0) !== 7) ? (0) : (1));
    ((s as any).RolanLoc = (s as any).RolanLoc ?? {})[12] = ((((s as any).week ?? 0) !== 7) ? (0) : (1));
    if (((s as any).week ?? 0) !== 6  &&  ((s as any).week ?? 0) !== 7) {
      ((s as any).RolanLoc = (s as any).RolanLoc ?? {})[13] = 0;
    }
    if (((s as any).month ?? 0) >= 3  &&  ((s as any).month ?? 0) <= 11  &&  ((s as any).week ?? 0) === 6  ||  ((s as any).week ?? 0) === 7) {
      ((s as any).RolanLoc = (s as any).RolanLoc ?? {})[13] = (Math.floor(Math.random() * (10 - 9 + 1)) + (9));
    }
    if (((s as any).week ?? 0) !== 6  &&  ((s as any).week ?? 0) !== 7) {
      ((s as any).RolanLoc = (s as any).RolanLoc ?? {})[14] = 0;
    }
    if (((s as any).month ?? 0) >= 3  &&  ((s as any).month ?? 0) <= 11  &&  ((s as any).week ?? 0) === 6  ||  ((s as any).week ?? 0) === 7) {
      ((s as any).RolanLoc = (s as any).RolanLoc ?? {})[14] = (Math.floor(Math.random() * (10 - 9 + 1)) + (9));
    }
    ((s as any).RolanLoc = (s as any).RolanLoc ?? {})[15] = (Math.floor(Math.random() * 4) + 4);
    if (((s as any).week ?? 0) !== 6  &&  ((s as any).week ?? 0) !== 7) {
      ((s as any).RolanLoc = (s as any).RolanLoc ?? {})[16] = (Math.floor(Math.random() * 7) + 2);
    }
    if (((s as any).month ?? 0) >= 3  &&  ((s as any).month ?? 0) <= 11  &&  ((s as any).week ?? 0) === 6  ||  ((s as any).week ?? 0) === 7) {
      ((s as any).RolanLoc = (s as any).RolanLoc ?? {})[16] = (Math.floor(Math.random() * (10 - 9 + 1)) + (9));
    }
    if (((s as any).week ?? 0) !== 6  &&  ((s as any).week ?? 0) !== 7) {
      ((s as any).RolanLoc = (s as any).RolanLoc ?? {})[17] = (Math.floor(Math.random() * 7) + 2);
    }
    if (((s as any).month ?? 0) >= 3  &&  ((s as any).month ?? 0) <= 11  &&  ((s as any).week ?? 0) === 6  ||  ((s as any).week ?? 0) === 7) {
      ((s as any).RolanLoc = (s as any).RolanLoc ?? {})[17] = (Math.floor(Math.random() * (10 - 9 + 1)) + (9));
    }
    if (((s as any).month ?? 0) >= 3  &&  ((s as any).month ?? 0) <= 11) {
      ((s as any).RolanLoc = (s as any).RolanLoc ?? {})[18] = (Math.floor(Math.random() * (10 - 9 + 1)) + (9));
    }
    if (((s as any).week ?? 0) !== 6) {
      ((s as any).RolanLoc = (s as any).RolanLoc ?? {})[19] = (Math.floor(Math.random() * (8 - 2 + 1)) + (2));
    }
    if (((s as any).week ?? 0) !== 6) {
      ((s as any).RolanLoc = (s as any).RolanLoc ?? {})[20] = (Math.floor(Math.random() * (8 - 2 + 1)) + (2));
    }
    ((s as any).RolanLoc = (s as any).RolanLoc ?? {})[21] = (Math.floor(Math.random() * 4) + 4);
    ((s as any).RolanLoc = (s as any).RolanLoc ?? {})[22] = 3;
    ((s as any).RolanLoc = (s as any).RolanLoc ?? {})[23] = 3;
    (s as any).RolanLocSet = ((s as any).daystart ?? 0);
  }
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
    case 'room':
      enterRoom(s, scene);
      break;
    case 'guestroom':
      enterGuestroom(s, scene);
      break;
    case 'livingroom':
      enterLivingroom(s, scene);
      break;
    case 'kitchen':
      enterKitchen(s, scene);
      break;
    case 'holodil':
      enterHolodil(s, scene);
      break;
    case 'grandmaroom':
      enterGrandmaroom(s, scene);
      break;
    case 'kuh_buh':
      enterKuhBuh(s, scene);
      break;
    case 'bend':
      enterBend(s, scene);
      break;
    case 'kuhbaz':
      enterKuhbaz(s, scene);
      break;
    case 'drawer':
      enterDrawer(s, scene);
      break;
    case 'mypanty':
      enterMypanty(s, scene);
      break;
    case 'chef':
      enterChef(s, scene);
      break;
    case 'worker':
      enterWorker(s, scene);
      break;
    case 'rolanroute':
      enterRolanroute(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const rolanapt: LocationDef = {
  name: 'rolanapt',
  title: 'Entrance hall',
  region: 'other',
  locationType: 'private',
  locclass: 'kitr',
  enter: enter,
};
